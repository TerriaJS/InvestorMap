const fs = require("fs");
const dsv = require("d3-dsv");
const mkdirp = require("mkdirp");

const categories = {};

function processFile(
  srcFilename,
  regionCodeLength,
  regionField,
  regionLabelField
) {
  const toNumber = x => (Number.isFinite(+x) ? +x : null);

  let lines = fs.readFileSync(`${__dirname}/src/${srcFilename}`, "utf8");
  lines = lines.split("\n");
  lines = lines.slice(lines.findIndex(line => line[0] === ",") + 1);
  lines = lines.slice(0, lines.findIndex(line => line[0] === ","));

  /*
    Region code
    Region label
    Commodity code
    Commodity description
    Gross value ($)
    Gross value - Relative Standard Errors
    Local value ($)
    Local value - Relative Standard Errors
    */
  categories[regionField] = {};

  const rows = dsv.csvParse(lines.join("\n"), row => {
    if (
      row["Region code"].length !== regionCodeLength ||
      row["Region label"] === "Australia"
    ) {
      return null; // keep states out of our NRMs and vice versa
    }
    // const [category, subcategory] = row['Commodity description'].split(' - ');
    const [category] = row["Commodity description"].split(" - ");
    // ew, skip all the intervening categories? repeat primary category if no subcats?
    const [subcategory] = row["Commodity description"].split(" - ").reverse();
    row.Commodity = category;
    row["Commodity subcategory"] = subcategory || "";
    categories[regionField][category] = categories[regionField][category] || {};
    // categories[category][row['Region code']][subcategory] = row;
    categories[regionField][category][subcategory] =
      categories[regionField][category][subcategory] || [];
    categories[regionField][category][subcategory].push(row);

    // console.log(category)
    // console.log(subcategory);

    row[regionField] = row["Region code"];
    row[regionLabelField] = row["Region label"];

    [
      "Local value($)",
      "Gross value ($)",
      "Local value($) - Relative Standard Errors",
      "Gross value ($) - Relative Standard Errors"
    ].forEach(field => (row[field] = toNumber(row[field])));

    delete row["Region code"];
    delete row["Region label"];
    return row;
  });

  Object.keys(categories[regionField]).forEach(category => {
    Object.keys(categories[regionField][category]).forEach(subcategory => {
      const filteredRows = rows.filter(
        row =>
          row.Commodity === category &&
          row["Commodity subcategory"] === subcategory
      );

      const out = dsv.csvFormat(filteredRows);
      const outDirectory = `${outdir}/${regionField}/${category}`;
      mkdirp.sync(outDirectory);
      // console.log(outDirectory);

      fs.writeFileSync(`${outDirectory}/${subcategory}.csv`, out, "utf8");
    });
  });

  // Object.keys(categories).forEach(category => {
  //     const filteredRows = rows.filter(row => row.Commodity === category);
  //     filteredRows.columns = rows.columns;
  //     const out = dsv.csvFormat(filteredRows);
  //     fs.writeFileSync(`${outdir}/${outFilename}_${category}.csv`, out, 'utf8');
  // });

  // const out = dsv.csvFormat(rows);
  // fs.writeFileSync(`${outdir}/${outFilename}`, out, 'utf8');
}
const outdir = `${__dirname}/../../../wwwroot/data/commodities`;
mkdirp.sync(outdir);
processFile("75030do003_201617.csv", 3, "SA4", "SA4 name");
processFile("75030do003_201617.csv", 1, "State_Code", "State");
processFile("75030do004_201617.csv", 3, "NRMR_Code", "NRMR name");

function catalogGroupByRegionField(regionField) {
  function catalogGroupByCategory(category) {
    function catalogGroupBySubcategory(subcategory) {
      return {
        type: "csv",
        name: subcategory,
        url: `data/commodities/${regionField}/${category}/${subcategory}.csv`,
        dataUrl:
          "https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/7503.02016-17?OpenDocument",
        dataUrlType: "text",
        dataCustodian: "Australian Bureau of Statistics (ABS)",
        info: [
          {
            name: "More information",
            content:
              "See [Explanatory notes](https://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/7503.0Explanatory%20Notes12016-17?OpenDocument)."
          },
          {
            name: "Licence",
            content:
              "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
          }
        ]
      };
    }

    return {
      type: "group",
      name: `${category}`,
      items: Object.keys(categories[regionField][category]).map(
        catalogGroupBySubcategory
      )
    };
  }

  return {
    type: "group",
    name: `By ${regionField}`,
    items: Object.keys(categories[regionField]).map(catalogGroupByCategory)
  };
}

module.exports = [
  {
    type: "group",
    name: "Value of Agricultural Commodities Produced 2016-17 (ABS)",
    items: Object.keys(categories).map(catalogGroupByRegionField)
  }
];

/*
/sa4/Broadacre crops/Cereal crops/Wheat for grain.csv
*/
