/* Miscellaneous individual items that we're cherry-picking, rather than taking whole groups. */
const getFromCatalogPath = require("../../getFromCatalogPath");
const nm = require("./externalCatalogs").nationalmap;

const mangroveCanopyCover = getFromCatalogPath(nm, [
  "National Datasets",
  "Vegetation",
  "Mangroves",
  "Mangrove canopy cover",
  "Canopy cover"
]);
mangroveCanopyCover.name = "Mangrove Canopy Cover 25m";

const miscItems = [
  {
    type: "group",
    name: "Environment",
    items: [mangroveCanopyCover]
  }
];

module.exports = miscItems;
