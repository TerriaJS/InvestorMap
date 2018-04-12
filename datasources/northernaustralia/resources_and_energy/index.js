'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');
const removeIds = require('../../removeIds');

const nainvest = require('../../../wwwroot/init/nainvest.json');
const aremi = require('../shared/aremi.json');


// Remove ids from aremi catalog (screws up when an item is in multiple places in the catalog)
aremi.catalog = aremi.catalog.map(removeIds);

function existingProjectsItem(name) {
  return getFromCatalogPath(nainvest, ['Existing projects', 'Mines', name]);
}

// function importOilAndGas() {
//   const group = getFromCatalogPath(nainvest, ['Infrastructure', 'Oil & Gas']);
//   group.items = [...group.items, {
//     name: 'Petroleum Wells',
//     type: 'wms',
//   url: 'http://services.ga.gov.au/geoserver/boreholes/wms',
//     layers: 'Boreholes',
//     parameters: {
//       'CQL_FILTER': "WELLTYPE='Petroleum'"
//     }
//   }];
//   return group;
// }


function importRenewables(renewablesJson) {
  const solar = renewablesJson.items.find(m => m.name === 'Solar');
  solar.items = solar.items.filter(m => m.name.includes('climatology'));
  const wind = renewablesJson.items.find(m => m.name === 'Wind');
  wind.items = [wind.items.find(m => m.name === 'Average Wind Speed at 100 metres')];
  wind.items[0].info = wind.items[0].info.filter(section => !section.name.startsWith('Download'))
  renewablesJson.items = [
    solar,
    wind,
    ...renewablesJson.items.filter(subgroup => ['Solar', 'Wind', 'ARENA Projects'].indexOf(subgroup.name) === -1) // Filter out not approved and unwanted groups/items
  ];
  return renewablesJson;
}


module.exports = {
  name: 'Resources and Energy',
  type: 'group',
  preserveOrder: true,
  items: [
    require('../shared/land_and_tenure'),
    {
      name: 'Mining',
      type: 'group',
      preserveOrder: true,
      items: [
        {
          name: 'Mineral Occurrences',
          url: 'http://services.ga.gov.au/earthresource/ama/wms',
          type: 'wms',
          dataCustodian: '[Geoscience Australia](http://www.ga.gov.au/)',
          info: [
            {
              name: 'Licence',
              content: '[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)'
            }
          ],
          layers:'mineral_occurrences'
        },
        {
          name: 'Mines Operating Status',
          url: 'http://services.ga.gov.au/earthresource/ama/wms',
          type: 'wms',
          dataCustodian: '[Geoscience Australia](http://www.ga.gov.au/)',
          info: [
            {
              name: 'Licence',
              content: '[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)'
            }
          ],
          layers:'mineral_deposits'
        },
        {
          name: 'Mines and Mineral Deposits',
          type: 'csv',
          url: 'data/Resources_and_Energy/mineral_deposits.csv',
          tableStyle: {
            dataVariable: 'COMMODIDS'
          }
        },
        ...['WA: Mines & Mineral deposits', 'WA: Mining tenements', 'NT: Mining tenements'].map(existingProjectsItem),
        {
          name: 'Surface Geology',
          type: 'wms-getCapabilities',
          url: 'http://services.ga.gov.au/site_1/services/GA_Surface_Geology/MapServer/WMSServer',
          dataCustodian: '[Geoscience Australia](http://www.ga.gov.au/)',
          info: [
            {
              name: 'Licence',
              content: '[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)'
            }
          ]
        },
      ]
    },
    importRenewables(getFromCatalogPath(aremi, ['Renewable Energy'])),
    require('../shared/infrastructure'),
    require('./oil_and_gas'),
    require('../shared/soil'),
    require('../shared/demography')
  ]
};