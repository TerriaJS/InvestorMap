const findItemsMatchingName = require("../../findItemsMatchingName");

const externalCatalogs = require("./externalCatalogs");

module.exports = {
  type: "group",
  name: "Climate",
  items: [
    {
      type: "group",
      name: "Rainfall",
      preserveOrder: true,
      items: [
        {
          name: "Monthly rainfall 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "monthly_rainfall"
        },
        {
          name: "Annual rainfall 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "annual_rainfall"
        },
        ...findItemsMatchingName(externalCatalogs.soe.catalog, "rainfall", true)
          .filter(item => item.name.indexOf("Lake Eyre") < 0)
          .map(fixProxyUrls)
      ]
    },
    {
      type: "group",
      name: "Temperature",
      preserveOrder: true,
      items: [
        {
          name: "Monthly minimum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "monthly_minimum_temperature"
        },
        {
          name: "Annual minimum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "annual_minimum_temperature"
        },
        {
          name: "Monthly maximum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "monthly_maximum_temperature"
        },
        {
          name: "Annual maximum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "annual_maximum_temperature"
        },
        ...findItemsMatchingName(
          externalCatalogs.soe.catalog,
          "temperature",
          true
        )
          .filter(
            item =>
              item.name.indexOf("Reef") < 0 && item.name.indexOf("MAR5") < 0
          )
          .map(fixProxyUrls)
      ]
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
