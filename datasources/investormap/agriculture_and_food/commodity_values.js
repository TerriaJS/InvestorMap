const fs = require("fs");
const dsv = require("d3-dsv");
const mkdirp = require("mkdirp");

const categories = {};

const outdir = `${__dirname}/../../../wwwroot/data/commodities`;

/*
This script processes "Agricultural Commodities by Value" spreadsheets produced by the ABS, and found here:
https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/7503.02016-17?OpenDocument

Assuming the format of that spreadsheet doesn't change, this can be repeated each year to update the data.

It generates a lot of csvs under wwwroot/data/commodities, and also the catalog items that reference them.

1. Put the source files in srcdata/
2. Update the filenames in the calls to processFile()
3. Hopefully that's it. :)
*/

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
    const [category] = row["Commodity description"].split(" - ");
    // Three issues with what we do next:
    // 1) We flatten out all the middle levels of subcategory
    // 2) If there are no subcategories at all, the primary category gets repeated as a subcategory
    // 3) If there are two different sub-subcategories with the same name, one will clobber the other.

    // But the alternative (supporting all the middle-level subcategories) is much more complex to implement.
    const [subcategory] = row["Commodity description"].split(" - ").reverse();
    row.Commodity = category;
    row["Commodity subcategory"] = subcategory || "";
    categories[regionField][category] = categories[regionField][category] || {};
    categories[regionField][category][subcategory] =
      categories[regionField][category][subcategory] || [];
    categories[regionField][category][subcategory].push(row);

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

      fs.writeFileSync(`${outDirectory}/${subcategory}.csv`, out, "utf8");
    });
  });
}

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

mkdirp.sync(outdir);
processFile("75030do003_201617.csv", 3, "SA4", "SA4 name");
processFile("75030do003_201617.csv", 1, "State_Code", "State");
processFile("75030do004_201617.csv", 3, "NRMR_Code", "NRMR name");

module.exports = [
  {
    type: "group",
    name: "Value of Agricultural Commodities Produced 2016-17 (ABS)",
    items: Object.keys(categories).map(catalogGroupByRegionField)
  }
];
