"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = {
  name: "Agriculture and Food",
  type: "group",
  preserveOrder: true,
  items: [
    {
      name: "Agriculture",
      type: "group",
      preserveOrder: true,
      items: [
        {
          id: "354db2f2",
          name: "Catchment Scale Land Use 2018",
          url:
            "https://www.asris.csiro.au/arcgis/rest/services/abares/clum_50m_2018/MapServer",
          type: "esri-mapServer-group",
          ungroupedTitle: null,
          ignoreUnknownTileErrors: true
        },
        {
          name: "Catchment Scale Land Use 2017",
          type: "esri-mapServer",
          dataUrl: "http://www.agriculture.gov.au/abares/data/clum-50m-current",
          dataUrlType: "direct",
          url:
            "http://www.asris.csiro.au/arcgis/rest/services/abares/clum_50m_current/MapServer"
        },
        {
          name: "Land Cover",
          type: "wms",
          url:
            "http://services.ga.gov.au/gis/services/Land_Cover_WM/MapServer/WMSServer?request=GetCapabilities&service=WMS",
          layers: "Land_Cover_Class"
        },
        {
          name: "Homesteads 1M",
          type: "esri-mapServer",
          url:
            "http://services.ga.gov.au/gis/rest/services/NM_Labelling_and_Boundaries/MapServer/",
          layers: "23"
        },
        ...require("./sdmx_items"),
        ...require("./commodity_values_1617"),
        ...require("./commodity_values_1718"),
        ...require("./land_management")
      ]
    },
    require("../shared/climate"),
    {
      name: "Water",
      type: "group",
      preserveOrder: true,
      items: [
        require("../shared/landscape_water"),
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
    require("../shared/soil")
  ]
};
