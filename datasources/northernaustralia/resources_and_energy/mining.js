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
      name: "WA: Mines & Mineral deposits",
      type: "wms",
      url:
        "https://services.slip.wa.gov.au/public/services/DMP_Public_Services/DMP_Public_Services/MapServer/WMSServer",
      layers: "17"
    },
    {
      name: "WA: Mining tenements",
      type: "wms",
      url:
        "https://services.slip.wa.gov.au/public/services/DMP_Public_Services/DMP_Public_Services/MapServer/WMSServer",
      layers: "12"
    },
    {
      name: "NT: Mining tenements",
      type: "wms",
      url: "http://geology.data.nt.gov.au/geoserver/mt/wms",
      layers: "MineralTenement",
      description:
        'More information about <a href="http://www.northernaustralialandtenure.com.au/land-tenure/leasehold-land/#mining-mineral-exploration-leases-in-the-northern-territory">Mining and Mineral Exploration Leases in the Northern Territory</a>.',
      clipToRectangle: true,
      ignoreUnknownTileErrors: true,
      getFeatureInfoFormats: [
        {
          type: "text",
          format: "text/html"
        }
      ]
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
