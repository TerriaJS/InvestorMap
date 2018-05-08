"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = {
  name: "Oil & Gas",
  type: "group",
  preserveOrder: true,
  items: [
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
      name: "Northern Territory",
      type: "group",
      items: [
        {
          name: "NT Oil Pipelines",
          type: "wms",
          url: "http://wms1.ntlis.nt.gov.au/ilismap",
          layers: "105"
        },
        {
          name: "NT Gas Pipelines",
          type: "wms",
          url: "http://wms1.ntlis.nt.gov.au/ilismap",
          layers: "5"
        }
      ]
    },
    {
      name: "Western Australia",
      type: "group",
      items: [
        {
          name: "File Notation Area",
          type: "wms",
          url:
            "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
          layers: "0"
        },
        {
          name: "Minedex",
          type: "wms",
          url:
            "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
          layers: "11"
        },
        {
          name: "Mineral Drill Holes",
          type: "wms",
          url:
            "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
          layers: "10"
        },
        {
          name: "Mining Tenements",
          type: "wms",
          url:
            "https://services.slip.wa.gov.au/public/services/SLIP_Public_Services/Industry_and_Mining/MapServer/WMSServer",
          layers: "8"
        },
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
