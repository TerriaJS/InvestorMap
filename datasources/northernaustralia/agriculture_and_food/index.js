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
        getFromCatalogPath(nainvest, ['Tenure and title', 'Pastoral lease'])
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
      name: "Agriculture",
      type: "group",
      preserveOrder: true,
      items: [
        {
          name: 'Catchment Scale Land Use',
          type: 'esri-mapServer',
          dataUrl: 'http://www.agriculture.gov.au/abares/data/clum-50m-current',
          dataUrlType: 'direct',
          url: 'http://www.asris.csiro.au/arcgis/rest/services/abares/clum_50m_current/MapServer'
        },
        ...require('./sdmx_items')
      ]
    }
  ]
};

