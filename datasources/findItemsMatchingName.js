
function findItemsMatchingName(items, name, recursive) {
  name = name.toLowerCase();

  const result = [];

  items.forEach(item => {
    if (item.name.toLowerCase().indexOf(name) >= 0) {
      result.push(item);
    }

    if (recursive && item.items) {
      const subItems = findItemsMatchingName(item.items, name, recursive);
      if (subItems.length > 0) {
        result.push(...subItems);
      }
    }
  });

  return result;
}

module.exports = findItemsMatchingName;
