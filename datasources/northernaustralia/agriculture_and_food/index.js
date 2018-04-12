"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = {
  name: "Agriculture and Food",
  type: "group",
  preserveOrder: true,
  items: [
    require("../shared/soil"),
    {
      name: "Water",
      type: "group",
      preserveOrder: true,
      items: [
        {
          name: "Geofabric",
          type: "wms-getCapabilities",
          url:
            "http://geofabric.bom.gov.au/simplefeatures/ows?service=WMS&request=GetCapabilities"
        },
        getFromCatalogPath(externalCatalogs.neiiWater, [
          "NEII Data Services – Conformant",
          "Water (4)",
          "Water Regulations Data (BoM)"
        ]),
        getFromCatalogPath(externalCatalogs.nationalmap, [
          "National Datasets",
          "Land",
          "Agriculture and Mining",
          "Water Use on Australian Farms"
        ])
      ]
    },
    require("../shared/transport"),
    {
      name: "Agriculture",
      type: "group",
      preserveOrder: true,
      items: [
        {
          name: "Catchment Scale Land Use 2017",
          type: "esri-mapServer",
          dataUrl: "http://www.agriculture.gov.au/abares/data/clum-50m-current",
          dataUrlType: "direct",
          url:
            "http://www.asris.csiro.au/arcgis/rest/services/abares/clum_50m_current/MapServer"
        },
        ...require("./sdmx_items")
      ]
    }
  ]
};
