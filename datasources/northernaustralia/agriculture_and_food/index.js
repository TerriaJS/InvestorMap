'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');
const addDescriptionToGroups = require('../../addDescriptionToGroups');


const nainvest = require('../../../wwwroot/init/nainvest.json');

module.exports = addDescriptionToGroups({
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
        }
      ]
    },
    require('../shared/transport')
  ]
}, `
**Agriculture and Food**

_With food security a global issue as populations grow, northern Australia is developing as a low-risk supplier of clean, green agricultural commodities and niche high-value food and fibre products._

Over the next 20 years northern Australian agriculture (including aquaculture) and food and fibre processing has significant potential to expand. Research and development will lead to greater yields and profitability, and will explore new products, production methods, technologies and broad innovation.

Northern Australia is an established producer of a wide variety of agriculture and food, but only uses a fraction of natural assets available for sustainable use. The scale of under-utilised natural assets offers compelling reasons for investors to examine Northern Australia’s expanded future role in regional food supply chains.
`.trim());

