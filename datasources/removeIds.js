'use strict';

module.exports = function removeIds(member) {
  const updatedMember = Object.assign({}, member);
  if (updatedMember.id) {
    updatedMember.id = undefined;
  }
  if (updatedMember.items) {
    updatedMember.items = updatedMember.items.map(removeIds);
  }
  return updatedMember;
};