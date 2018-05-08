"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");
const externalCatalogs = require("../shared/externalCatalogs");

function importRenewables() {
  const renewablesJson = getFromCatalogPath(externalCatalogs.aremi, [
    "Renewable Energy"
  ]);
  const solar = renewablesJson.items.find(m => m.name === "Solar");
  solar.items = solar.items.filter(m => m.name.includes("climatology"));
  const wind = renewablesJson.items.find(m => m.name === "Wind");
  wind.items = [
    wind.items.find(m => m.name === "Average Wind Speed at 100 metres")
  ];
  wind.items[0].info = wind.items[0].info.filter(
    section => !section.name.startsWith("Download")
  );
  renewablesJson.items = [
    solar,
    wind,
    ...renewablesJson.items.filter(
      subgroup =>
        ["Solar", "Wind", "ARENA Projects"].indexOf(subgroup.name) === -1
    ) // Filter out not approved and unwanted groups/items
  ];
  return renewablesJson;
}

module.exports = {
  name: "Resources and Energy",
  type: "group",
  preserveOrder: true,
  items: [
    require("../shared/land_and_tenure"),
    require("./mining"),
    importRenewables(),
    require("../shared/infrastructure"),
    require("./oil_and_gas"),
    require("../shared/social_and_economic"),
    require("../shared/soil")
  ]
};
