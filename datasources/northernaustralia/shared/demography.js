const getFromCatalogPath = require("../../getFromCatalogPath");
const removeIds = require("../../removeIds");

const aremi = require("./aremi.json");
const nm = require("nationalmap-catalog/build/nm.json");

module.exports = {
  name: "Demography",
  type: "group",
  items: [
    getFromCatalogPath(aremi, [
      "Population",
      "Australian Bureau of Statistics (BETA)",
      "Selected 2011 Census Datasets"
    ]),
    removeIds(
      getFromCatalogPath(nm, [
        "National Datasets",
        "Social and Economic",
        "Population Estimates",
        "Residential Population Density"
      ])
    )
  ]
};
