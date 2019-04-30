const _ = require("lodash");
const fs = require("fs");
const dsv = require("d3-dsv");
const mkdirp = require("mkdirp");

// Turns an object into an array of arrays of keys, like lodash likes.
function pathsFromTree(obj, prefix = []) {
  return Object.keys(obj).reduce((arr, key) => {
    const path = [...prefix, key];
    const content =
      typeof obj[key] === "object" ? pathsFromTree(obj[key], path) : [path];
    return [...arr, ...content];
  }, []);
}

function safeDir(dir) {
  const out = dir.map(name => name.replace(/\//g, "_")).join("/");
  return out;
}

module.exports.processAbsRegionFile = function(
  srcFilename,
  regionCodeLength,
  regionField,
  regionLabelField,
  categoryField,
  outdir,
  rowTransformFunc
) {
  let rows, categoryPaths, categoryTree;
  // Loop over CSV file, building a category tree where each leaf is an
  // array of rows in that subcategory
  function buildTree() {
    let lines = fs.readFileSync(`${__dirname}/src/${srcFilename}`, "utf8");
    lines = lines.split("\n");
    lines = lines.slice(lines.findIndex(line => line[0] === ",") + 1);
    lines = lines.slice(0, lines.findIndex(line => line[0] === ","));

    categoryTree = {};
    categoryPaths = [];

    for (let i = 0, adds = 0, len = lines.length; i < len; i++) {
      if (lines[i].includes("9991")) {
        // Replace NSW and ACT values with NSW
        lines[i] = lines[i].replace(
          "New South Wales and Australian Capital Territory",
          "New South Wales"
        );

        // Duplicate the NSW and ACT values by appending to the end of the array
        // and then replace the state with ACT
        lines.push(lines[i]);
        lines[len + adds] = lines[len + adds].replace(
          "New South Wales",
          "Australian Capital Territory"
        );
        adds++;
      }
    }

    rows = dsv.csvParse(lines.join("\n"), row => {
      if (
        row["Region code"].length !== regionCodeLength ||
        row["Region label"] === "Australia"
      ) {
        return null; // keep states out of our NRMs and vice versa
      }
      if (row["Region code"] == "507") {
        // I don't know what 507 is but it doesn't work.
        return null;
      }

      const categories = row[categoryField].split(" - ");
      categoryPaths.push(categories);

      row[regionField] = row["Region code"];
      row[regionLabelField] = row["Region label"];

      delete row["Region code"];
      delete row["Region label"];

      if (rowTransformFunc) {
        row = rowTransformFunc(row);
      }

      // Add this one row to the rows collected at this ultimate subcategory.
      _.set(
        categoryTree,
        categories,
        _.get(categoryTree, categories, []).concat(row)
      );

      return row;
    });
  }

  // Turn each leaf in the tree into a CSV in a directory named by its position
  function writeCsvs() {
    for (let path of categoryPaths) {
      const out = dsv.csvFormat(_.get(categoryTree, path));
      const dir = path.slice(0, path.length - 1);
      const leaf = safeDir([path[path.length - 1]]);
      const outDirectory = `${outdir}/${regionField}/${safeDir(dir)}`;
      mkdirp.sync(outDirectory);
      fs.writeFileSync(`${outDirectory}/${leaf}.csv`, out, "utf8");
    }
  }
  buildTree();
  writeCsvs();
  return categoryTree;
};

/*
Takes a parsed category structure like this:
{
  NRMR_Code: {
    Group1: { ...},
    Group2: { ... }
}

Returns a catalog group/item structure

*/

module.exports.regionCategoriesToItems = function(
  regionCategories,
  itemMetadata,
  outdir
) {
  function sortFunc(a, b) {
    if (a.match(/^All other/)) {
      return 1;
    }
    if (b.match(/^All other/)) {
      return -1;
    }
    return a > b ? 1 : -1;
  }

  function catalogItem(categoryPath, regionField) {
    const base = outdir.replace(/^.*wwwroot\//, "");
    return {
      type: "csv",
      name: categoryPath[categoryPath.length - 1],
      url: `${base}/${regionField}/${safeDir(categoryPath)}.csv`,
      ...itemMetadata
    };
  }

  function catalogGroupByCategory(category, path, regionField) {
    if (category[0]) {
      // a leaf node
      return catalogItem(path, regionField);
    } else {
      return {
        type: "group",
        preserveOrder: true,
        name: path[path.length - 1],
        items: Object.keys(category)
          .sort(sortFunc)
          .map(c =>
            catalogGroupByCategory(category[c], [...path, c], regionField)
          )
      };
    }
  }

  function catalogGroupByRegionField(regionField, category) {
    const label =
      {
        NRMR_Code: "By Natural Resource Management Region (NRMR)",
        State_Code: "By State"
      }[regionField] || `By ${regionField}`;

    return {
      type: "group",
      name: label,
      items: Object.keys(category).map(c =>
        catalogGroupByCategory(category[c], [c], regionField)
      )
    };
  }

  return Object.keys(regionCategories).map(regionField => {
    return catalogGroupByRegionField(
      regionField,
      regionCategories[regionField]
    );
  });
};
