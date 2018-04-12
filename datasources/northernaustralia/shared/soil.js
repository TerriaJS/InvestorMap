"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

module.exports = Object.assign(
  {},
  getFromCatalogPath(externalCatalogs.nationalmap, [
    "National Datasets",
    "Land",
    "National Soil Attributes"
  ]),
  { name: "Soil" }
);
