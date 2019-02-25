"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");

const externalCatalogs = require("../shared/externalCatalogs");

const tra = require("./tourism_TRA");

const aremiEnvironment = getFromCatalogPath(externalCatalogs.aremi, [
  "Environment"
]);

module.exports = {
  name: "Tourism",
  type: "group",
  preserveOrder: true,
  items: [
    tra,
    require("../shared/infrastructure"),
    require("../shared/social_and_economic"),
    Object.assign({}, aremiEnvironment, {
      items: [
        ...aremiEnvironment.items,
        {
          name: "Waste Water Treatment Facilities",
          type: "wms",
          url:
            "http://services.ga.gov.au/gis/services/Wastewater_Treatment_Facilities/MapServer/WMSServer?request=GetCapabilities&service=WMS",
          layers: "National_Wastewater_Treatment_Facilities"
        }
      ]
    })
  ]
};
