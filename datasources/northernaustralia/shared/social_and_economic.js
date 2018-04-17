const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("./externalCatalogs");

module.exports = getFromCatalogPath(externalCatalogs.nationalmap, [
  "National Datasets",
  "Social and Economic"
]);
