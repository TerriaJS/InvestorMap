"use strict";

module.exports = {
  name: "Tourism TRA",
  type: "group",
  items: [
    {
      name: "Australian Accomodation Monitor",
      type: "csv",
      url: "datasets/2016-2017TourismRegionSummary.csv",
      tableStyle: {
        replaceWithNullValues: ["np"]
      }
    }
  ]
};
