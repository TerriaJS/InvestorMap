"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

function geoscienceAustraliaStyleLayers() {
  // split out styles as individual catalog items. See https://github.com/TerriaJS/InvestorMap/issues/150
  const styles = [
    ["phosphate", "Phosphate"],
    ["uranium", "Uranium"],
    ["iron_ore", "Iron ore"],
    ["manganese", "Manganese"],
    ["lithium", "Lithium"],
    ["mineral_sands", "Mineral sands"],
    ["copper", "Copper"],
    ["bauxite_alumina", "Bauxite & Alumina"],
    ["graphite", "Graphite"],
    ["brown_coal", "Brown coal"],
    ["lead", "Lead"],
    ["black_coal", "Black coal"],
    ["vanadium", "Vanadium"],
    ["nickel", "Nickel"],
    ["zinc", "Zinc"],
    ["platinum_group", "Platinum group metals"],
    ["rare_earth_elements", "Rare earths"],
    ["precious_metals", "Gold and silver (and other precious metals)"],
    ["cobalt", "Cobalt"]
  ];
  return styles.map(([styleId, title]) => ({
    name: title,
    url: "http://earthresource.gs.cloud.ga.gov.au/wms",
    type: "wms",
    dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
    info: [
      {
        name: "Licence",
        content:
          "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
      }
    ],
    layers: "erl:CommodityResourceView",
    styles: `data61:${styleId}`,
    opacity: 1.0,
    availableStyles: [] // prevent drop down of other styles
  }));
}

module.exports = {
  name: "Mining",
  type: "group",
  preserveOrder: true,
  items: [
    {
      name: "Mines and Mineral Deposits – All",
      type: "csv",
      url: "data/Resources_and_Energy/mineral_deposits.csv",
      tableStyle: {
        dataVariable: "COMMODNAMES",
        columns: {
          id: { type: "HIDDEN" },
          X: { type: "HIDDEN" },
          Y: { type: "HIDDEN" },
          ENO: { type: "HIDDEN" },
          NAME: { type: "HIDDEN" },
          SYNONYMS: { type: "HIDDEN" },
          ACCURACY: { type: "HIDDEN" },
          SIGNIFICANT: { type: "HIDDEN" },
          SIGNIFICANCE_VALUE: { type: "HIDDEN" },
          SIGNIFICANCE_CALC_METHOD: { type: "HIDDEN" },
          ACCESS_CODE: { type: "HIDDEN" }
        }
      }
    },
    {
      name: "Mineral Resources and Reserves – Selected",
      type: "group",
      items: geoscienceAustraliaStyleLayers()
    },
    getFromCatalogPath(externalCatalogs.nationalmap, [
      "National Datasets",
      "Land",
      "Agriculture and Mining",
      "Mineral Exploration"
    ]),
    {
      name: "Mineral Occurrences",
      url: "http://services.ga.gov.au/earthresource/wms",
      type: "wms",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ],
      layers: "ama:mineral_occurrences"
    },
    {
      name: "Mines Operating Status",
      url: "http://services.ga.gov.au/earthresource/wms",
      type: "wms",
      dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ],
      layers: "ama:mineral_deposits"
    },
    {
      name: "Surface Geology",
      type: "wms-getCapabilities",
      url:
        "http://services.ga.gov.au/gis/services/GA_Surface_Geology/MapServer/WMSServer",
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
