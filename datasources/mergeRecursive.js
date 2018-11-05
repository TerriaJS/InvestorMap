"use strict";

function mergeRecursive(catalogMembers) {
  // Recursively merge a list catalog members to a list of catalog members that is equivalent when loaded with TerriaJS
  const members = [];
  catalogMembers.forEach(m => {
    // Find a matching member and merge properties, or add the member m
    // Assuming that a null id doesn't count as an id
    let matchIndex = -1;

    // Doesn't quite match Terria ID handling.
    // This assumes that a single catalog won't have two items with the same id in different groups
    //  (like one in a group and another as an "update" to that item)

    if (m.id != null) {
      // Check not null or undefined
      matchIndex = members.findIndex(
        m2 => m2.id === m.id || m.id.endsWith(m2.name)
      );
    } else {
      matchIndex = members.findIndex(
        m2 => /*m2.id == null &&*/ m2.name === m.name
      );
    }

    const existingM = matchIndex >= 0 ? members[matchIndex] : {};
    // Merge m and existingM
    const updatedM = Object.assign({}, existingM, m);
    if (matchIndex >= 0 && existingM.items == null) {
      console.warn(
        "Merging 2 members, the first of which isn't a catalog group. This is probably not intended"
      );
      console.warn(
        `Members are: Member(id:${m.id},name:${m.name},nameInCatalog:${
          m.nameInCatalog
        }) & Member(id:${existingM.id},name:${existingM.name},nameInCatalog:${
          existingM.nameInCatalog
        })`
      );
    } else {
      // For a catalog group, concat items and merge properties
      if (existingM.items != null) {
        updatedM.items = mergeRecursive(
          [].concat(existingM.items, m.items || [])
        );
      }
      if (matchIndex >= 0) {
        members[matchIndex] = updatedM;
      } else {
        members.push(updatedM);
      }
    }
  });
  return members;
}

module.exports = mergeRecursive;
