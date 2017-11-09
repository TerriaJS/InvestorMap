'use strict';

const fs = require('fs');
const root = require('./northernaustralia/root');

module.exports = function buildCatalog() {
    fs.writeFileSync('wwwroot/init/northernaustralia.json', JSON.stringify(root));
};
