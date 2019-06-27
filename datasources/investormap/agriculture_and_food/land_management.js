function transformRow(row) {
  const toNumber = x => (Number.isFinite(+x) ? +x : null);
  Object.keys(row).forEach(field => {
    if (field.match(/^(Estimate |Number of)/)) {
      row[field] = toNumber(row[field]);
    }
  });
  return row;
}

// Flattens the structure so we don't have groups comprised of a single item
function compress(group) {
  if (group.items) {
    if (group.items.length === 1 && group.items[0].type === "csv") {
      const item = group.items[0];
      const name = group.name;
      delete group.items;
      Object.assign(group, item);
      group.name = name;
    } else {
      group.items.forEach(compress);
    }
  }
  return group;
}

const itemMetadata = {
  dataCustodian: "Australian Bureau of Statistics (ABS)",
  dataUrl:
    "http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/4627.02016-17?OpenDocument",
  dataUrlType: "text",
  info: [
    {
      name: "More information",
      content:
        "See [Explanatory notes](http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/4627.0Explanatory%20Notes12016-17?OpenDocument)."
    },
    {
      name: "Licence",
      content:
        "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
    }
  ]
};

const outdir = `${__dirname}/../../../wwwroot/data/land_management`;

const abs = require("./processAbsRegionFile");
const processFile = abs.processAbsRegionFile;

const categories = {
  State_Code: processFile(
    "46270do002_201617.csv",
    4,
    "State_Code",
    "State",
    "Data item description",
    outdir,
    transformRow
  ),
  NRMR_Code: processFile(
    "46270do002_201617.csv",
    3,
    "NRMR_Code",
    "NRMR name",
    "Data item description",
    outdir,
    transformRow
  )
};

module.exports = [
  {
    type: "group",
    name: "Land Management and Farming, 2016-17",
    items: abs
      .regionCategoriesToItems(categories, itemMetadata, outdir)
      .map(compress) //.items[0].items
  }
];
