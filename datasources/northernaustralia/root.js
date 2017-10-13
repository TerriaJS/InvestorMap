'use strict';

const allDataTourism = require('./tourism').items;
// allDataTourism[0] = Object.assign({}, allDataTourism[0], {name: "Tourist Accommodation" });

module.exports = {
  "catalog": [
    {
      name: "All Data",
      type: "group",
      preserveOrder: true,
      items: [
        ...require('./resources_and_energy').items,
        ...require('./tourism').items,
        require('./agriculture_and_food').items.find(m => m.name === 'Water')
      ]
    },
    require('./resources_and_energy'),
    require('./tourism'),
    require('./agriculture_and_food')
  ],
  "corsDomains": [
    "programs.communications.gov.au",
    "mapsengine.google.com"
  ],
  "homeCamera": {
    "west": 112,
    "east": 153,
    "north": -8,
    "south": -27
  },
  "baseMapName": "Australian Topography"
};