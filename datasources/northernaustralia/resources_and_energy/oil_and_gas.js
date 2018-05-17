"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = {
  name: "Oil & Gas",
  type: "group",
  preserveOrder: true,
  items: [
    {
      type: "esri-mapServer",
      name: "Gas Basins",
      url: "http://services.ga.gov.au/site_3/rest/services/Geological_Provinces_2013/MapServer",
      layers: "AllProvinces",
      parameters: {
        layerDefs: "20:NAME LIKE 'Bonaparte Basin' OR NAME LIKE 'Browse Basin' OR NAME LIKE 'Northern Carnarvon Basin' OR NAME LIKE 'Southern Carnarvon Basin' OR NAME LIKE 'Perth Basin' OR NAME LIKE 'Otway Basin' OR NAME LIKE 'Bass Basin' OR NAME LIKE 'Gippsland Basin' OR NAME LIKE 'Sydney Basin' OR NAME LIKE 'Clarence-Moreton Basin' OR NAME LIKE 'Surat Basin' OR NAME LIKE 'Bowen Basin' OR NAME LIKE 'Eromanga Basin' OR NAME LIKE 'Cooper Basin' OR NAME LIKE 'Amadeus Basin' OR NAME LIKE 'Canning Basin'"
      }
    },
    {
      name: "Oil and Gas Platforms",
      type: "wms",
      url:
        "http://services.ga.gov.au/site_9/services/Oil_Gas_Infrastructure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      layers: "National_Oil_Gas_Platforms"
    },
    {
      name: "Onshore Gas Pipelines",
      type: "esri-mapServer",
      url:
        "http://services.ga.gov.au/gis/rest/services/Oil_Gas_Infrastructure/MapServer/1",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    },
    {
      name: "Onshore Oil Pipelines",
      type: "esri-mapServer",
      url:
        "http://services.ga.gov.au/gis/rest/services/Oil_Gas_Infrastructure/MapServer/0",
      info: [
        {
          name: "Licence",
          content:
            "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    },
    getFromCatalogPath(externalCatalogs.nationalmap, [
      "National Datasets",
      "Land",
      "Agriculture and Mining",
      "Petroleum Exploration"
    ]),
    {
      name: "Petroleum Wells",
      type: "wms",
      url: "http://services.ga.gov.au/geoserver/boreholes/wms",
      layers: "Boreholes",
      parameters: {
        CQL_FILTER: "WELLTYPE='Petroleum'"
      }
    },
    {
      name: "Western Australia",
      type: "group",
      items: [
        {
          name: "Petroleum Pipelines",
          type: "wms",
          url:
            "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
          layers: "6"
        },
        {
          name: "Petroleum Releases",
          type: "wms",
          url:
            "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
          layers: "4"
        },
        {
          name: "Petroleum Titles",
          type: "wms",
          url:
            "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
          layers: "2"
        }
      ]
    }
  ]
};
