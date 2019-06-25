/*
This script processes "Agricultural Commodities by Value" spreadsheets produced by the ABS, and found here:
https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/7503.02016-17?OpenDocument

Assuming the format of that spreadsheet doesn't change, this can be repeated each year to update the data.

It generates a lot of csvs under wwwroot/data/commodities, and also the catalog items that reference them.

1. Put the source files in srcdata/
2. Update the filenames in the calls to processFile()
3. Hopefully that's it. :)
*/

function transformCommodityRow(row) {
  const toNumber = x => (Number.isFinite(+x) ? +x : null);
  Object.keys(row).forEach(field => {
    if (field.indexOf("$") >= 0) {
      row[field] = toNumber(row[field]);
    }
  });
  return row;
}

const itemMetadata = {
  dataCustodian: "Australian Bureau of Statistics (ABS)",
  dataUrl:
    "https://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/7503.02017-18?OpenDocument",
  dataUrlType: "text",
  info: [
    {
      name: "More information",
      content:
        "See [Explanatory notes](https://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/7503.0Explanatory%20Notes12017-18?OpenDocument)."
    },
    {
      name: "Licence",
      content:
        "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
    }
  ]
};

const outdir = `${__dirname}/../../../wwwroot/data/commodities17-18`;

const abs = require("./processAbsRegionFile");
const processFile = abs.processAbsRegionFile;

const categories = {
  SA4: processFile(
    "75030do003_201718.csv",
    3,
    "SA4",
    "SA4 name",
    "Commodity description",
    outdir,
    transformCommodityRow
  ),
  State_Code: processFile(
    "75030do003_201718.csv",
    1,
    "State_Code",
    "State",
    "Commodity description",
    outdir,
    transformCommodityRow
  ),
  NRMR_Code: processFile(
    "75030do004_201718.csv",
    3,
    "NRMR_Code",
    "NRMR name",
    "Commodity description",
    outdir,
    transformCommodityRow
  )
};

module.exports = [
  {
    type: "group",
    name: "Value of Agricultural Commodities Produced 2017-18 (ABS)",
    items: abs.regionCategoriesToItems(categories, itemMetadata, outdir)
  }
];
