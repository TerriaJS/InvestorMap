'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');

const nainvest = require('../../../wwwroot/init/nainvest.json');
const aremi = require('./aremi.json');

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

const tenureGroup = getFromCatalogPath(nainvest, ['Tenure and title']);

module.exports = {
  name: "Resources and Energy",
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
      name: 'Demography (empty)',
      type: 'group',
      descripion: 'For Census data (not yet specified which data).',
      items: []
    }
  ]
};