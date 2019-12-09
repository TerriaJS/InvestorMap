"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

const soilGroup = getFromCatalogPath(externalCatalogs.nationalmap, [
  "National Datasets",
  "Land Cover and Land Use",
  "National Soil Attributes"
]);

module.exports = Object.assign(soilGroup, {
  name: "Soil",
  items: [
    ...soilGroup.items,
    {
      name: "Barest Earth 25m (Landsat 8)",
      type: "wms",
      url: "https://ows.services.dea.ga.gov.au/",
      layers: "ls8_barest_earth_mosaic"
    },
    {
      name: "Weathering Intensity 1 degree tile",
      type: "wms",
      url: "https://ows.services.dea.ga.gov.au/",
      layers: "weathering_intensity"
    },
    {
      name: "Multi-Scale Topographic Position 1 degree tile",
      type: "wms",
      url: "https://ows.services.dea.ga.gov.au/",
      layers: "multi_scale_topographic_position"
    }
  ]
});
