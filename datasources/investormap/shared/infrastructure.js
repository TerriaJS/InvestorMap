"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

function getTransmission() {
  const transmission = Object.assign(
    {},
    getFromCatalogPath(externalCatalogs.aremi, [
      "Electricity Infrastructure",
      "Transmission"
    ]),
    { name: "Transmission" }
  );

  transmission.items = transmission.items.filter(
    item => item.name !== "Western Australia"
  );
  return transmission;
}

function getGeneration() {
  const currentGeneration = Object.assign(
    {},
    getFromCatalogPath(externalCatalogs.aremi, [
      "Electricity Infrastructure",
      "Generation",
      "Current Power Generation - NEM"
    ]),
    { name: "Current Power Generation - NEM" }
  );

  const generation = {
    name: "Generation",
    type: "group",
    items: [
      currentGeneration,
      {
        name: "All Power Stations",
        url: "data/Resources_and_Energy/MajorPowerStations_v2.csv",
        type: "csv",
        dataCustodian: "[Geoscience Australia](http://www.ga.gov.au/)",
        info: [
          {
            name: "Licence",
            content:
              "[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)"
          }
        ],
        tableStyle: {
          dataVariable: "GENERATIONTYPE"
        }
      }
    ]
  };

  return generation;
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
      items: [getTransmission(), getNetworkOpportunities(), getGeneration()]
    },
    require("./transport"),
    {
      name: "Liquid Fuel Facilities",
      type: "wms-getCapabilities",
      url:
        "http://services.ga.gov.au/gis/services/Liquid_Fuel_Facilities/MapServer/WMSServer?request=GetCapabilities&service=WMS"
    }
  ]
};
