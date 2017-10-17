'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');
const addDescriptionToGroups = require('../../addDescriptionToGroups');
const removeIds = require('../../removeIds');

const nainvest = require('../../../wwwroot/init/nainvest.json');
const nm = require('nationalmap-catalog/build/nm.json');
const aremi = require('./aremi.json');


// Remove ids from aremi catalog (screws up when an item is in multiple places in the catalog)
aremi.catalog = aremi.catalog.map(removeIds);

function importExistingProjects() {
  const existingProjectsItem = name => getFromCatalogPath(nainvest, ['Existing projects', 'Mines', name]);
  return [
    {
      name: 'Mines and Mining Activity',
      type: 'group',
      items: ['Mine Areas'].map(existingProjectsItem).concat([{
        name: 'Mines - Geoscience Australia',
        type: 'wms',
        url: 'http://services.ga.gov.au/earthresource/ows',
        layers: 'erl:MineView'
      },{
        name: 'Mines - Geoscience Australia',
        type: 'wms',
        url: 'http://services.ga.gov.au/earthresource/ows',
        layers: 'erl:MineView'
      }])
    },
    {
      name: 'Mining tenements',
      type: 'group',
      items: ['WA: Mining tenements', 'NT: Mining tenements'].map(existingProjectsItem)
    },
    {
      name: 'Operating mines',
      type: 'group',
      items: ['QLD: Operating mines', 'WA: Mines & Mineral deposits'].map(existingProjectsItem)
    }
  ]
}


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


module.exports = addDescriptionToGroups({
  name: "Resources and Energy",
  type: "group",
  preserveOrder: true,
  items: [
    require('../shared/land_and_tenure'),
    {
      name: "Mining",
      type: "group",
      preserveOrder: true,
      items: [
        require('../shared/soil'),
        {
          "name": "Surface Geology",
          "type": "wms-getCapabilities",
          "url": "http://services.ga.gov.au/site_1/services/GA_Surface_Geology/MapServer/WMSServer",
          "dataCustodian": "[Geoscience Australia](http://www.ga.gov.au/)",
          "info": [
            {
              "name": "Licence",
              "content": "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
            }
          ]
        },
        {
          "name": "Mineral Occurrences and Resources",
          "type": "wms-getCapabilities",
          "url": "http://services.ga.gov.au/earthresource/ama/wms",
          "dataCustodian": "[Geoscience Australia](http://www.ga.gov.au/)",
          "info": [
            {
              "name": "Licence",
              "content": "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
            }
          ]
        },
        {
          name: "Mineral Deposits",
          type: "csv",
          url: "data/Resources_and_Energy/mineral_deposits.csv",
          tableStyle: {
            dataVariable: "COMMODIDS"
          }
        },
        ...importExistingProjects(),
      ]
    },
    getFromCatalogPath(nainvest, ['Infrastructure', 'Oil & Gas']),
    importRenewables(getFromCatalogPath(aremi, ['Renewable Energy'])),
    {
      name: 'Infrastructure',
      type: 'group',
      items: [
        Object.assign({}, getFromCatalogPath(aremi, ['Electricity Infrastructure', 'Transmission']), {name: 'Electricity'}),
        require('../shared/transport')
      ]
    },
    {
      name: 'Demography',
      type: 'group',
      items: [
        getFromCatalogPath(aremi, ['Population', 'Australian Bureau of Statistics (BETA)', 'Selected 2011 Census Datasets']),
        removeIds(getFromCatalogPath(nm, ['National Datasets', 'Social and Economic', 'Population Estimates', 'Residential Population Density']))
      ]
    }
  ]
}, `
### Resources and Energy

_Industrialisation and urbanisation within the Asia region will continue to drive demand for Australia’s natural resources._

Many parts of northern Australia are still unexplored and the region remains highly prospective, offering significant potential for future mineral discoveries. Northern Australia has significant potential for further world-class oil and gas discoveries.

Geoscience Australia estimates around 80 per cent of Australia remains under-explored for minerals - most of this unexplored land is in northern Australia.

Northern Australia contains over 70 per cent of Australia’s known resources of iron ore, lead and zinc. It also contains significant deposits of silver, copper, manganese, nickel, bauxite, tungsten, molybdenum and rare earths.

By 2020 northern Australia is destined to become the world’s largest exporter of Liquefied Natural Gas (LNG).

Northern Australia has world-class solar, wind and bioenergy resources. In remote and off-grid locations, there are significant opportunities for investment in renewable energy to help industry and remote communities to become more energy self-sufficient.
`.trim());