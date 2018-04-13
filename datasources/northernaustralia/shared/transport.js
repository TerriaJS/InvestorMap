"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const nainvest = require("../../../wwwroot/init/nainvest.json");

const transportItem = name =>
  getFromCatalogPath(nainvest, ["Infrastructure", "Transport", name]);
module.exports = {
  name: "Transport",
  type: "group",
  items: [
    {
      name: "Air",
      type: "group",
      items: ["Airports and Airfields", "Major Airports"].map(transportItem)
    },
    {
      name: "Land",
      type: "group",
      items: [
        "All-weather roads",
        "Key Freight Routes",
        "NT: Stock routes",
        "Railways",
        "Road Bridges and Fords"
      ].map(transportItem)
    },
    {
      name: "Sea",
      type: "group",
      items: ["Major Seaports"].map(transportItem)
    }
  ]
};
