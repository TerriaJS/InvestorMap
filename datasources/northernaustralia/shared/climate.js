const findItemsMatchingName = require("../../findItemsMatchingName");

const externalCatalogs = require("./externalCatalogs");

module.exports = {
  type: "group",
  name: "Climate",
  items: [
    {
      type: "group",
      name: "Rainfall",
      items: findItemsMatchingName(externalCatalogs.soe.catalog, 'rainfall', true).filter(item => item.name.indexOf('Lake Eyre') < 0)
    },
    {
      type: "group",
      name: "Temperature",
      items: findItemsMatchingName(externalCatalogs.soe.catalog, 'temperature', true).filter(item => item.name.indexOf('Reef') < 0)
    },
  ]
};
