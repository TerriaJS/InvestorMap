"use strict";

const mergeRecursive = require("../../mergeRecursive");
const syncRequest = require("sync-request");

// Apply transforms to catalog property of a complete catalog JSON structure
const applyTransforms = (transforms, catalogJson) =>
  Object.assign({}, catalogJson, {
    catalog: transforms.reduce((catalog, f) => f(catalog), catalogJson.catalog)
  });

module.exports = {
  aremi: applyTransforms([mergeRecursive], require("./aremi.json")),
  nationalmap: applyTransforms(
    [mergeRecursive],
    require("nationalmap-catalog/build/nm.json")
  ),
  neiiWater: applyTransforms([mergeRecursive], require("./neii-water.json")),
  soe: applyTransforms(
    [mergeRecursive],
    JSON.parse(
      syncRequest(
        "GET",
        "https://raw.githubusercontent.com/envris/National-Map-Viewer/master/soe_generated.json"
      ).getBody("utf8")
    )
  ),
  aurin_socioeconomic: require("./aurin_003_Socio-Economic_Indices.json"),
  aurin_vulnerability: require("./aurin_004_Vulnerability_Indicators.json"),
  aurin_wellbeing: require("./aurin_002_Health_And_Wellbeing.json"),
  aurin_population_density: require("./aurin_001_Population_Density.json")
};
