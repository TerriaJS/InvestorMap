"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = {
  name: "Mining",
  type: "group",
  preserveOrder: true,
  items: [
    getFromCatalogPath(externalCatalogs.nationalmap, [
      "National Datasets",
      "Land",
      "Agriculture and Mining",
      "Mineral Exploration"
    ]),
    {
      name: "Mineral Occurrences",
      url: "http://services.ga.gov.au/earthresource/ama/wms",
      type: "wms",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ],
      layers: "mineral_occurrences"
    },
    {
      name: "Mines Operating Status",
      url: "http://services.ga.gov.au/earthresource/ama/wms",
      type: "wms",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ],
      layers: "mineral_deposits"
    },
    {
      name: "Mines and Mineral Deposits",
      type: "csv",
      url: "data/Resources_and_Energy/mineral_deposits.csv",
      tableStyle: {
        dataVariable: "COMMODIDS"
      }
    },
    {
      name: "Surface Geology",
      type: "wms-getCapabilities",
      url:
        "http://services.ga.gov.au/site_1/services/GA_Surface_Geology/MapServer/WMSServer",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    }
  ]
};
