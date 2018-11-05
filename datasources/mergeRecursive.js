"use strict";

function mergeRecursive(catalogMembers) {
  // Recursively merge a list catalog members to a list of catalog members that is equivalent when loaded with TerriaJS
  const members = [];
  catalogMembers.forEach(m => {
    // Find a matching member and merge properties, or add the member m
    // Assuming that a null id doesn't count as an id
    let matchIndex = -1;

    // ID matching commented out because it doesn't match TerriaJS behaviour
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
    // For a catalog group, concat items and merge properties
    // For anything else just merge properties
    const updatedM = Object.assign({}, existingM, m);
    if (existingM.items != null || m.items != null) {
      updatedM.items = mergeRecursive(
        [].concat(existingM.items || [], m.items || [])
      );
    }
    if (matchIndex >= 0) {
      members[matchIndex] = updatedM;
    } else {
      members.push(updatedM);
    }
  });
  return members;
}

module.exports = mergeRecursive;
