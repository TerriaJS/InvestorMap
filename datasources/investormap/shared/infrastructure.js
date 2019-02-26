"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

function getElectricity() {
  const electricity = Object.assign(
    {},
    getFromCatalogPath(externalCatalogs.aremi, [
      "Electricity Infrastructure",
      "Transmission"
    ]),
    { name: "Transmission" }
  );

  electricity.items = electricity.items.filter(
    item => item.name !== "Western Australia"
  );
  return electricity;
}

function getNetworkOpportunities() {
  const networkOpportunities = Object.assign(
    {},
    getFromCatalogPath(externalCatalogs.aremi, [
      "Electricity Infrastructure",
      "Network Opportunities"
    ]),
    { name: "Network Opportunities" }
  );

  networkOpportunities.items = networkOpportunities.items.filter(
    item =>
      item.name !== "New Generator Connection Capacity" &&
      item.name !== "Supporting Information" &&
      item.name !== "2016 Constraint Maps"
  );

  return networkOpportunities;
}

module.exports = {
  name: "Infrastructure",
  type: "group",
  items: [
    {
      name: "Electricity",
      type: "group",
      items: [getElectricity(), getNetworkOpportunities()]
    },
    // getElectricity(),
    require("./transport"),
    {
      name: "Liquid Fuel Facilities",
      type: "wms-getCapabilities",
      url:
        "http://services.ga.gov.au/site_3/services/Liquid_Fuel_Facilities/MapServer/WMSServer?request=GetCapabilities&service=WMS"
    }
  ]
};
