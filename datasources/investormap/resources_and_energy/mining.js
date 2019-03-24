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
    url: "http://52.62.101.149:8080/geoserver/wms",
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
    availableStyles: [] // prevent drop down of other styles
  }));
}

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
      name: "Mineral Resources and Reserves",
      type: "group",
      items: geoscienceAustraliaStyleLayers()
    },
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
      name: "Mines and Mineral Deposits",
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
      name: "Lithium Projects",
      type: "csv",
      url: "datasets/LithiumMines.csv",
      tableStyle: {
        dataVariable: "OPERATING_STATUS",
        columns: {
          id: { type: "HIDDEN" },
          ENO: { type: "HIDDEN" },
          NAME: { type: "HIDDEN" },
          SYNONYMS: { type: "HIDDEN" },
          ACCURACY: { type: "HIDDEN" },
          SIGNIFICANT: { type: "HIDDEN" },
          SIGNIFICANCE_VALUE: { type: "HIDDEN" },
          SIGNIFICANCE_CALC_METHOD: { type: "HIDDEN" },
          ACCESS_CODE: { type: "HIDDEN" },
          "WEB SITE": { type: "HIDDEN" }
        }
      },
      featureInfoTemplate: {
        template: `
<strong>{{NAME}} ({{OPERATING_STATUS}})</strong>
<table>
<tr><td>Commodities</td>      <td>{{COMMODNAMES}}</td></tr>
<tr><td>Operating Status</td> <td>{{OPERATING_STATUS}}</td></tr>
</table>
{{#WEB SITE}}
<strong>See <a href="{{WEB SITE}}">{{WEB SITE}}</a></strong>
{{/WEB SITE}}
        `
      }
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
    },
    {
      name: "WA: Minedex",
      type: "wms",
      url:
        "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
      layers: "11"
    },
    {
      name: "WA: Mining tenements",
      type: "wms",
      url:
        "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
      layers: "8"
    }
  ]
};
