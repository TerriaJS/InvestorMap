"use strict";

const mergeRecursive = require("../../mergeRecursive");
const removeIds = require("../../removeIds");

const removeIdsFromCatalog = members => members.map(removeIds);

// Apply transforms to catalog property of a complete catalog JSON structure
const applyTransforms = (transforms, catalogJson) =>
  Object.assign({}, catalogJson, {
    catalog: transforms.reduce((catalog, f) => f(catalog), catalogJson.catalog)
  });

module.exports = {
  aremi: applyTransforms(
    [mergeRecursive, removeIdsFromCatalog],
    require("./aremi.json")
  ),
  nationalmap: applyTransforms(
    [mergeRecursive, removeIdsFromCatalog],
    require("nationalmap-catalog/build/nm.json")
  ),
  neiiWater: applyTransforms(
    [mergeRecursive, removeIdsFromCatalog],
    require("./neii-water.json")
  )
};
