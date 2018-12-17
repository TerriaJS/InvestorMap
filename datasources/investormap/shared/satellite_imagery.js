const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("./externalCatalogs");

const satImageryGroup = getFromCatalogPath(externalCatalogs.nationalmap, [
  "National Datasets",
  "Satellite Imagery"
]);

module.exports = satImageryGroup;
