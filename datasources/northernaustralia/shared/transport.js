"use strict";

module.exports = {
  name: "Transport",
  type: "group",
  items: [
    {
      name: "Air",
      type: "group",
      items: [
        {
          name: "Airports and Airfields",
          type: "esri-mapServer",
          url:
            "http://services.ga.gov.au/gis/rest/services/NM_Transport_Infrastructure/MapServer",
          layers: "Airports_Point_Features,No_Data",
          info: [
            {
              name: "Licence",
              content:
                "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
            }
          ]
        },
        {
          name: "Major Airports",
          type: "esri-mapServer",
          url:
            "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer",
          layers: "0",
          dataCustodian:
            "[Department of Infrastructure and Regional Development](https://infrastructure.gov.au/)",
          featureInfoTemplate: "{{name}}",
          opacity: 1
        },
        {
          name: "Aviation Facilities",
          type: "wms-getCapabilities",
          url:
            "http://services.ga.gov.au/site_3/services/Aviation_Facilities/MapServer/WMSServer?request=GetCapabilities&service=WMS"
        }
      ]
    },
    {
      name: "Land",
      type: "group",
      items: [
        {
          name: "Railways",
          type: "esri-mapServer",
          url:
            "http://services.ga.gov.au/gis/rest/services/NM_Transport_Infrastructure/MapServer",
          layers: "Railways"
        },
        {
          name: "All-weather roads",
          type: "esri-mapServer",
          url:
            "http://services.ga.gov.au/gis/rest/services/NM_Transport_Infrastructure/MapServer",
          layers:
            "Major_Road_Network,Roads_Scale_7Million_to_600000,Roads_Scale_600000_to_300000,All_Roads",
          info: [
            {
              name: "Licence",
              content:
                "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
            }
          ],
          initialMessage: {
            title: "All-weather roads",
            content:
              "The all weather roads are Dual Carriageway (red), Principal Road (orange), Secondary Road (Yellow) and Minor Road (grey solid line). Vehicular tracks, shown as a grey dotted line, are NOT all-weather roads"
          }
        },
        {
          name: "Road Bridges and Fords",
          type: "esri-mapServer",
          url:
            "http://services.ga.gov.au/gis/rest/services/NM_Transport_Infrastructure/MapServer",
          layers: "Road_Bridges_and_Fords,No_Data",
          info: [
            {
              name: "Licence",
              content:
                "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
            }
          ]
        },
        {
          name: "Key Freight Routes",
          type: "group",
          preserveOrder: true,
          items: [
            {
              name: "Key Freight Routes - Roads",
              type: "esri-mapServer",
              url:
                "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer",
              layers: "5",
              dataCustodian:
                "[Department of Infrastructure and Regional Development](https://infrastructure.gov.au/)",
              featureInfoTemplate:
                '<table class="cesium-infoBox-defaultTable"><tr><td>Name</td><td>{{name}}</td></tr><tr><td>Route Number</td><td>{{RouteNumber}}</td><tr><td>State</td><td>{{state}}</td></tr><tr><td>Manager</td><td>{{Manager}}</td></tr></table>'
            },
            {
              name: "Secondary Freight Routes - Roads",
              type: "esri-mapServer",
              url:
                "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer",
              layers: "4",
              dataCustodian:
                "[Department of Infrastructure and Regional Development](https://infrastructure.gov.au/)",
              featureInfoTemplate:
                '<table class="cesium-infoBox-defaultTable"><tr><td>Name</td><td>{{name}}</td></tr><tr><td>Route Number</td><td>{{RouteNumber}}</td><tr><td>State</td><td>{{state}}</td></tr><tr><td>Owner</td><td>{{owner}}</td></tr></table>'
            },
            {
              name: "Key Freight Routes - Rail",
              type: "esri-mapServer",
              url:
                "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer",
              layers: "6",
              dataCustodian:
                "[Department of Infrastructure and Regional Development](https://infrastructure.gov.au/)",
              featureInfoTemplate:
                '<table class="cesium-infoBox-defaultTable"><tr><td>Gauge</td><td>{{gauge}}</td><tr><td>State</td><td>{{state}}</td></tr><tr><td>Manager</td><td>{{manager}}</td></tr></table>'
            },
            {
              name: "Intermodal Terminals",
              type: "esri-mapServer",
              url:
                "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer",
              layers: "2",
              dataCustodian:
                "[Department of Infrastructure and Regional Development](https://infrastructure.gov.au/)",
              featureInfoTemplate:
                '<table class="cesium-infoBox-defaultTable"><tr><td>Name</td><td>{{name}}</td></tr><tr><td>State</td><td>{{state}}</td></tr></table>',
              opacity: 1
            },
            {
              name: "Road Train Assembly Areas",
              type: "esri-mapServer",
              url:
                "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer",
              layers: "3",
              dataCustodian:
                "[Department of Infrastructure and Regional Development](https://infrastructure.gov.au/)",
              featureInfoTemplate:
                '<table class="cesium-infoBox-defaultTable"><tr><td>Name</td><td>{{name}}</td></tr><tr><td>State</td><td>{{state}}</td></tr></table>',
              opacity: 1
            }
          ]
        },
        {
          name: "NT: Stock routes",
          type: "wms",
          layers: "60",
          url: "http://wms1.ntlis.nt.gov.au/ilismap"
        }
      ]
    },
    {
      name: "Sea",
      type: "group",
      items: [
        {
          name: "Major Seaports",
          type: "esri-mapServer",
          url:
            "http://gis.infrastructure.gov.au/infrastructure/rest/services/KeyFreightRoute/KFR/MapServer",
          layers: "1",
          dataCustodian:
            "[Department of Infrastructure and Regional Development](https://infrastructure.gov.au/)",
          featureInfoTemplate:
            '<table class="cesium-infoBox-defaultTable"><tr><td>Name</td><td>{{name}}</td></tr><tr><td>State</td><td>{{state}}</td></tr></table>',
          opacity: 1
        }
      ]
    }
  ]
};
