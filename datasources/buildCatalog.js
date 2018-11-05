"use strict";

const fs = require("fs");
const root = require("./northernaustralia/root");
const checkUniqueMemberNames = require("./checkUniqueMemberNames");

// In this catalogue groups and items are duplicated for the different categories
// Suffix duplicate ids with -alias${n}
const idMap = new Map();
function suffixAliasIds(member) {
  const newMember = Object.assign({}, member);
  if (member.id != null) {
    const prevCount = idMap.get(member.id) || 0;
    // Don't add suffix to first occurrence
    if (prevCount > 0) {
      newMember.id = `${member.id}-alias${prevCount}`;
    }
    idMap.set(member.id, prevCount + 1);
  }
  if (member.items != null) {
    newMember.items = member.items.map(suffixAliasIds);
  }
  return newMember;
}

const processed = Object.assign({}, root, {
  catalog: root.catalog.map(suffixAliasIds)
});

function buildCatalog() {
  checkUniqueMemberNames(processed.catalog);
  fs.writeFileSync(
    "wwwroot/init/northernaustralia.json",
    JSON.stringify(processed)
  );
  fs.writeFileSync(
    "wwwroot/init/northernaustralia_big.json",
    JSON.stringify(processed, null, 2)
  );
}

module.exports = buildCatalog;

if (require.main === module) {
  // Executed as a script
  buildCatalog();
}
