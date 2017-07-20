const getFromCatalogPath = require('../../getFromCatalogPath');

const nainvest = require('../../../wwwroot/init/nainvest.json');

module.exports = {
  "name": "Resources and Energy",
  "type": "group",
  "items": [
    {
      "name": "Mining",
      "type": "group",
      "preserveOrder": true,
      "items": [
        getFromCatalogPath(nainvest, ['Tenure and title']),
        getFromCatalogPath(nainvest, ['Geology & Climate', 'Soil']),
        getFromCatalogPath(nainvest, ['Geology & Climate', 'Surface Geology']),
        getFromCatalogPath(nainvest, ['Geology & Climate', 'Mineral occurrence']),
        ...getFromCatalogPath(nainvest, ['Existing projects', 'Mines']).items,
      ]
    },
    getFromCatalogPath(nainvest, ['Infrastructure', 'Oil & Gas']),
    {
      "name": "Renewable Energy",
      "type": "group",
      "items": [
        {
          "name": "Solar",
          "type": "group"
        },
        {
          "name": "Wind",
          "type": "group"
        },
        {
          "name": "Bioenergy",
          "type": "group"
        },
        {
          "name": "Wave",
          "type": "group"
        },
        {
          "name": "Geothermal",
          "type": "group"
        },
        {
          "name": "Hydro",
          "type": "group"
        }
      ]
    }
  ]
};