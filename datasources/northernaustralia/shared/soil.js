'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');

const nm = require('nationalmap-catalog/build/nm.json');

// const nainvest = require('../../../wwwroot/init/nainvest.json');

// const soilGroup = getFromCatalogPath(nainvest, ['Geology & Climate', 'Soil']);
// soilGroup.items = soilGroup.items.map(item => Object.assign({}, item, {
//   type: 'esri-mapServer-group',
//   url: item.url.replace(/^.*services\/(.*)\/MapServer.*$/, 'http://www.asris.csiro.au/arcgis/rest/services/$1/MapServer'),
// }));

// module.exports = soilGroup;

module.exports = Object.assign({}, getFromCatalogPath(nm, ['National Datasets', 'Land', 'National Soil Attributes']), {name: 'Soil'});