"use strict";
const getFromCatalogPath = require("../../getFromCatalogPath");

const nainvest = require("../../../wwwroot/init/nainvest.json");
const tenureGroup = getFromCatalogPath(nainvest, ["Tenure and title"]);

module.exports = Object.assign({}, tenureGroup, {
  // Use tenure, and add extra items
  name: "Land and Tenure",
  items: [
    ...tenureGroup.items,
    {
      name: "Native Title Determinations",
      type: "wms",
      url:
        "http://data.gov.au/geoserver/native-title-determinations-national-native-title-register/wms?request=GetCapabilities",
      layers: "ckan_ecdbbb6c_c374_4649_9cd3_0677f44182c9"
    },
    {
      name: "Schedule of Native Title Determination Applications",
      type: "wms",
      url:
        "http://data.gov.au/geoserver/native-title-determination-applications-schedule/wms?request=GetCapabilities",
      layers: "ckan_bcd428f6_484c_4527_8e66_19bcc0fd5402"
    },
    {
      name: "Indigenous Land Use Agreements",
      type: "wms",
      url:
        "http://data.gov.au/geoserver/indigenous-land-use-agreements-registered-or-in-notification/wms?request=GetCapabilities",
      layers: "ckan_9e837144_8070_4983_8bf0_15e7ceb56ed7"
    },
    {
      name: "RATSIB Areas",
      type: "wms",
      url:
        "http://data.gov.au/geoserver/ratsib-boundaries/wms?request=GetCapabilities",
      layers: "ckan_0d32262b_e13b_4475_adc6_3618811c029a"
    }
  ]
});
