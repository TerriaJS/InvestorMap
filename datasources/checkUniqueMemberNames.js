"use strict";

// Check for same-level catalog members with the same name & nameInCatalog and print a warning about them
function checkUniqueMemberNames(catalogMembers, context = []) {
  const nameFrequencies = new Map();
  catalogMembers.map(m => m.nameInCatalog || m.name).forEach(name => {
    nameFrequencies.set(name, (nameFrequencies.get(name) || 0) + 1);
  });
  nameFrequencies.forEach((count, name) => {
    if (count > 1) {
      console.warn(
        `Warning: The member name "${name}" occured ${count} times in group: "${context.join(
          "->"
        )}"`
      );
    }
  });
  catalogMembers.forEach(m => {
    if (m.items != null) {
      checkUniqueMemberNames(m.items, [...context, m.name]);
    }
  });
}

module.exports = checkUniqueMemberNames;
