'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');


const nainvest = require('../../../wwwroot/init/nainvest.json');
const neiiWater = require('./neii-water.json');

module.exports = {
  name: "Agriculture and Food",
  type: "group",
  preserveOrder: true,
  items: [
    {
      name: "Land",
      type: "group",
      preserveOrder: true,
      items: [
        getFromCatalogPath(nainvest, ['Tenure and title', 'Freehold']),
        getFromCatalogPath(nainvest, ['Tenure and title', 'Pastoral lease']),
        {
          name: "Catchment Scale Land Use 2016",
          id: "Root Group/National Data Sets/Land/Catchment Scale Land Use 2016",
          type: "ckan-resource",
          url: "https://data.gov.au",
          resourceId: "98e11819-e02f-4729-8368-148f24eb89a5",
          datasetId: "catchment-scale-land-use-of-australia-update-may-2016"
        }
      ]
    },
    require('../shared/soil'),
    {
      name: "Water",
      type: "group",
      preserveOrder: true,
      items: [
        {
          name: "Geofabric",
          type: "wms-getCapabilities",
          url: "http://geofabric.bom.gov.au/simplefeatures/ows?service=WMS&request=GetCapabilities"
        },
        getFromCatalogPath(neiiWater, ['NEII Data Services – Conformant', 'Water (4)', 'Water Regulations Data (BoM)'])
      ]
    },
    require('../shared/transport'),
    {
      name: "Agriculture (empty)",
      type: "group",
      preserveOrder: true,
      items: [
      ]
    }
  ]
};

