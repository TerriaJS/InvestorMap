const getFromCatalogPath = require('../../getFromCatalogPath');

const nainvest = require('../../../wwwroot/init/nainvest.json');
const aremi = require('./aremi.json');

function importRenewables(renewablesJson) {
  renewablesJson.items = [
    ...['Solar', 'Wind'].map(name => ({
      name: name + ' (empty)',
      type: 'group',
      items: [],
      description: 'Awaiting licensing issue resolution'
    })),
    ...renewablesJson.items.filter(subgroup => ['Solar', 'Wind', 'ARENA Projects'].indexOf(subgroup.name) === -1) // Filter out not approved and unwanted groups/items
  ];
  return renewablesJson;
}

function importTransport() {
  const transportItem = name => getFromCatalogPath(nainvest, ['Infrastructure', 'Transport', name]);
  return {
    name: 'Transport',
    type: 'group',
    items: [
      {
        name: 'Air',
        type: 'group',
        items: ['Airports and Airfields', 'Major Airports'].map(transportItem)
      }, {
        name: 'Land',
        type: 'group',
        items: ['All-weather roads', 'Key Freight Routes', 'NT: Stock routes', 'Railways', 'Road Bridges and Fords'].map(transportItem)
      }, {
        name: 'Sea',
        type: 'group',
        items: ['Major Seaports'].map(transportItem)
      }
    ]
  };
}

const tenureGroup = getFromCatalogPath(nainvest, ['Tenure and title']);

module.exports = {
  name: "Resources and Energy",
  type: "group",
  preserveOrder: true,
  items: [
    {
      name: "Mining",
      type: "group",
      preserveOrder: true,
      items: [
        Object.assign({}, tenureGroup, { // Use tenure, and add extra items
          items: [
            ...tenureGroup.items,
            {
              name: 'Native Title Determinations',
              type: 'wms',
              url: 'http://data.gov.au/geoserver/native-title-determinations-national-native-title-register/wms?request=GetCapabilities',
              layers: 'ckan_ecdbbb6c_c374_4649_9cd3_0677f44182c9'
            },
            {
              name: 'Schedule of Native Title Determination Applications',
              type: 'wms',
              url: 'http://data.gov.au/geoserver/native-title-determination-applications-schedule/wms?request=GetCapabilities',
              layers: 'ckan_bcd428f6_484c_4527_8e66_19bcc0fd5402'
            },
            {
              name: 'Indigenous Land Use Agreements',
              type: 'wms',
              url: 'http://data.gov.au/geoserver/indigenous-land-use-agreements-registered-or-in-notification/wms?request=GetCapabilities',
              layers: 'ckan_9e837144_8070_4983_8bf0_15e7ceb56ed7'
            },
            {
              name: 'RATSIB Areas',
              type: 'wms',
              url: 'http://data.gov.au/geoserver/ratsib-boundaries/wms?request=GetCapabilities',
              layers: 'ckan_0d32262b_e13b_4475_adc6_3618811c029a'
            }
          ]
        }),
        getFromCatalogPath(nainvest, ['Geology & Climate', 'Soil']),
        getFromCatalogPath(nainvest, ['Geology & Climate', 'Surface Geology']),
        getFromCatalogPath(nainvest, ['Geology & Climate', 'Mineral occurrence']),
        ...getFromCatalogPath(nainvest, ['Existing projects', 'Mines']).items,
      ]
    },
    getFromCatalogPath(nainvest, ['Infrastructure', 'Oil & Gas']),
    importRenewables(getFromCatalogPath(aremi, ['Renewable Energy'])),
    {
      name: 'Infrastructure',
      type: 'group',
      items: [
        Object.assign({}, getFromCatalogPath(aremi, ['Electricity Infrastructure', 'Transmission']), {name: 'Electricity'}),
        importTransport()
      ]
    },
    {
      name: 'Demography (empty)',
      type: 'group',
      descripion: 'For Census data (not yet specified which data).',
      items: []
    }
  ]
};