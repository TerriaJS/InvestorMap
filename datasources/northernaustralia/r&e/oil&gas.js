module.exports = {
  "name": "Oil & Gas",
  "type": "group",
  "items": [
    {
      "name": "Onshore Gas Pipelines",
      "type": "esri-mapServer",
      "url": "http://services.ga.gov.au/gis/rest/services/Oil_Gas_Infrastructure/MapServer/1",
      "info": [
        {
          "name": "Licence",
          "content": "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    },
    {
      "name": "Onshore Oil Pipelines",
      "type": "esri-mapServer",
      "url": "http://services.ga.gov.au/gis/rest/services/Oil_Gas_Infrastructure/MapServer/0",
      "info": [
        {
          "name": "Licence",
          "content": "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
        }
      ]
    },
    {
      "name": "WA Petroleum Pipelines",
      "type": "wms",
      "url": "https://services.slip.wa.gov.au/public/services/DMP_Public_Services/DMP_Public_Services/MapServer/WMSServer",
      "layers": "10"
    },
    {
      "name": "NT Oil Pipelines",
      "type": "wms",
      "url": "http://wms1.ntlis.nt.gov.au/ilismap",
      "layers": "105"
    },
    {
      "name": "NT Gas Pipelines",
      "type": "wms",
      "url": "http://wms1.ntlis.nt.gov.au/ilismap",
      "layers": "5"
    }
  ]
};