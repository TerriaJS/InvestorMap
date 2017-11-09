'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');
const removeIds = require('../../removeIds');

const aremi = require('./aremi.json');


module.exports = {
  name: 'Infrastructure',
  type: 'group',
  items: [
    Object.assign({}, removeIds(getFromCatalogPath(aremi, ['Electricity Infrastructure', 'Transmission'])), {name: 'Electricity'}),
    require('./transport')
  ]
};