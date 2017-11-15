'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');
const removeIds = require('../../removeIds');

const aremi = require('./aremi.json');

function getElectricity(aremi) {
  const electricity = Object.assign({}, removeIds(getFromCatalogPath(aremi, ['Electricity Infrastructure', 'Transmission'])), {name: 'Electricity'});
  electricity.items = electricity.items.filter(item => item.name !== 'Western Australia');
  return electricity;
}

module.exports = {
  name: 'Infrastructure',
  type: 'group',
  items: [
    getElectricity(aremi),
    require('./transport')
  ]
};