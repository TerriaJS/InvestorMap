'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');

const nainvest = require('../../../wwwroot/init/nainvest.json');

module.exports = {
  name: "Agriculture and Food",
  type: "group",
  preserveOrder: true,
  items: [
    {
      name: "Food",
      type: "group",
      preserveOrder: true,
      items: [
        getFromCatalogPath(nainvest, ['Tenure and title', 'Freehold']),
        getFromCatalogPath(nainvest, ['Tenure and title', 'Pastoral lease']),
      ]
    },
    require('../shared/soil'),
    {
      name: "Water",
      type: "group",
      preserveOrder: true,
      items: [
        require('../shared/soil').items.find(item => item.name === 'Available Water Capacity')
      ]
    },
    require('../shared/transport')
  ]
};

