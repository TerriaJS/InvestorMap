const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("./externalCatalogs");

const nationalBoundaries = getFromCatalogPath(externalCatalogs.nationalmap, [
  "National Datasets",
  "National Boundaries"
]);

nationalBoundaries.items = nationalBoundaries.items.filter(
  item =>
    item.name === "Commonwealth Electoral Divisions (2019)" ||
    item.name === "State Electoral Divisions (2018)"
);

module.exports = nationalBoundaries;
