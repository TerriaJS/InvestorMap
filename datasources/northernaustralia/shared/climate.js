const findItemsMatchingName = require("../../findItemsMatchingName");

const externalCatalogs = require("./externalCatalogs");

module.exports = {
  type: "group",
  name: "Climate",
  items: [
    {
      type: "group",
      name: "Rainfall",
      items: findItemsMatchingName(
        externalCatalogs.soe.catalog,
        "rainfall",
        true
      )
        .filter(item => item.name.indexOf("Lake Eyre") < 0)
        .map(fixProxyUrls)
    },
    {
      type: "group",
      name: "Temperature",
      items: findItemsMatchingName(
        externalCatalogs.soe.catalog,
        "temperature",
        true
      )
        .filter(item => item.name.indexOf("Reef") < 0)
        .map(fixProxyUrls)
    }
  ]
};

function fixProxyUrls(item) {
  // When NA has its own proxy at http://nationalmap.gov.au/northernaustralia/proxy, set this to false.
  const northernAustraliaMapUsesSlashProxy = true;
  if (!northernAustraliaMapUsesSlashProxy) {
    return item;
  }

  if (item.url.indexOf("proxy/") === 0) {
    return Object.assign({}, item, {
      url: "/" + item.url
    });
  }
  return item;
}
