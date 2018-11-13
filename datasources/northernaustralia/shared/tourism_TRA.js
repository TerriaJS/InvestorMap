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
    },
    {
      name: "International Visitors by Origin Country ('000)",
      type: "csv",
      url: "datasets/2013-2017InternationalTourismOrigins.csv",
      tableStyle: {
        replaceWithNullValues: ["np"]
      }
    },
    {
      name: "Domestic Overnight Visitors by Origin State ('000)",
      type: "csv",
      url: "datasets/2013-2017OvernightTourismOrigins.csv",
      tableStyle: {
        replaceWithNullValues: ["np"]
      }
    },
    {
      name: "Domestic Daytrip Visitors by Origin State ('000)",
      type: "csv",
      url: "datasets/2013-2017DaytripTourismOrigins.csv",
      tableStyle: {
        replaceWithNullValues: ["np"]
      }
    }
  ]
};
