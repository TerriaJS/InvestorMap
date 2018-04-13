"use strict";

const isGroup = member => ["group"].indexOf(member.type) >= 0;

module.exports = function addDescriptionToGroups(group, description) {
  if (group.description == null) {
    let updatedGroup = Object.assign({}, group, { description });
    if (updatedGroup.items != null) {
      updatedGroup.items = updatedGroup.items.map(
        m => (isGroup(m) ? addDescriptionToGroups(m, description) : m)
      );
    }
    return updatedGroup;
  } else {
    // Don't do anything if there's already a description
    return group;
  }
};
