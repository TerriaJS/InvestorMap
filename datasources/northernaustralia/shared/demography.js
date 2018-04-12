const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("./externalCatalogs");

module.exports = {
  name: "Demography",
  type: "group",
  items: [
    getFromCatalogPath(externalCatalogs.aremi, [
      "Population",
      "Australian Bureau of Statistics (BETA)",
      "Selected 2011 Census Datasets"
    ]),
    getFromCatalogPath(externalCatalogs.nationalmap, [
      "National Datasets",
      "Social and Economic"
    ])
  ]
};
