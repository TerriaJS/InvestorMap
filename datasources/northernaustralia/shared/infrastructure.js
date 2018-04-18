"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

function getElectricity(aremi) {
  const electricity = Object.assign(
    {},
    getFromCatalogPath(aremi, ["Electricity Infrastructure", "Transmission"]),
    { name: "Electricity" }
  );
  electricity.items = electricity.items.filter(
    item => item.name !== "Western Australia"
  );
  return electricity;
}

module.exports = {
  name: "Infrastructure",
  type: "group",
  items: [
    getElectricity(externalCatalogs.aremi),
    require("./transport"),
    {
      name: "Liquid Fuel Facilities",
      type: "wms-getCapabilities",
      url:
        "http://services.ga.gov.au/site_3/services/Liquid_Fuel_Facilities/MapServer/WMSServer?request=GetCapabilities&service=WMS"
    }
  ]
};
