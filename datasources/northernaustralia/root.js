'use strict';

module.exports = {
  "catalog": [
    require('./resources_and_energy'),
    require('./tourism'),
    require('./agriculture_and_food')
  ],
  "corsDomains": [
    "programs.communications.gov.au",
    "mapsengine.google.com"
  ],
  "homeCamera": {
    "west": 116,
    "east": 149,
    "north": -8,
    "south": -27
  },
  "baseMapName": "Australian Topography"
};