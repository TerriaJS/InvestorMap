const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("./externalCatalogs");

const satImageryGroup = getFromCatalogPath(externalCatalogs.nationalmap, [
  "National Datasets",
  "Satellite Imagery"
]);

const sentinel = getFromCatalogPath(externalCatalogs.aremi, [
  "Topography",
  "Aerial/Satellite Imagery",
  "Sentinel-2 A/B Near Real-Time (NRT) terrain corrected surface reflectance"
]);

module.exports = Object.assign({}, satImageryGroup, { items: [...satImageryGroup.items, sentinel]});
