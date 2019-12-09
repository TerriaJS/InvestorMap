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
      url:
        "http://services.ga.gov.au/gis/rest/services/Geological_Provinces_2013/MapServer",
      layers: "AllProvinces",
      legendUrl:
        "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20style=%22height:%2030px;%22%20width=%22315%22%20height=%2230%22%20version=%221.1%22%3E%3Cg%20transform=%22translate(5%205)%22%3E%3Cimage%20class=%22item-icon%22%20x=%220%22%20y=%220%22%20width=%2220%22%20height=%2220%22%20xmlns:xlink=%22http://www.w3.org/1999/xlink%22%20xlink:href=%22data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEZJREFUOI1jYaAyYKGZgcbGxv8pNezs2bOMKC5ct24d2YYFBQUxMDDQ0sujBo4aOGrgqIE4DYQVQeSAs2fPMqIYCBOgFAAA2PgNF3yukFYAAAAASUVORK5CYII=%22%20/%3E%3Ctext%20class=%22item-label%22%20x=%2237%22%20y=%2218%22%3EGas%20Basin%3C/text%3E%3C/g%3E%3C/svg%3E",
      parameters: {
        layerDefs:
          "20:NAME LIKE 'Bonaparte Basin' OR NAME LIKE 'Browse Basin' OR NAME LIKE 'Northern Carnarvon Basin' OR NAME LIKE 'Southern Carnarvon Basin' OR NAME LIKE 'Perth Basin' OR NAME LIKE 'Otway Basin' OR NAME LIKE 'Bass Basin' OR NAME LIKE 'Gippsland Basin' OR NAME LIKE 'Sydney Basin' OR NAME LIKE 'Clarence-Moreton Basin' OR NAME LIKE 'Surat Basin' OR NAME LIKE 'Bowen Basin' OR NAME LIKE 'Eromanga Basin' OR NAME LIKE 'Cooper Basin' OR NAME LIKE 'Amadeus Basin' OR NAME LIKE 'Canning Basin'"
      }
    },
    {
      name: "Oil and Gas Platforms",
      type: "wms",
      url:
        "http://services.ga.gov.au/gis/services/Oil_Gas_Infrastructure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
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
      "Land Cover and Land Use",
      "Mining",
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
      name: "Hydrogen Production Prospectivity Scenarios",
      type: "esri-mapServer-group",
      url: "http://services.ga.gov.au/gis/rest/services/Hydrogen_Production_Prospectivity_Scenarios/MapServer"
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
