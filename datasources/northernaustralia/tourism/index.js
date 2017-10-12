'use strict';

const getFromCatalogPath = require('../../getFromCatalogPath');


module.exports = {
  name: "Tourism",
  type: "group",
  preserveOrder: true,
  items: [
    {
      name: "2015-2016_SA2_Montly.csv",
      type: "csv",
      url: "data/Tourism/2015-2016_SA2_Montly.csv"
    },
    {
      name: "2015-2016_SA2_Quarterly.csv",
      type: "csv",
      url: "data/Tourism/2015-2016_SA2_Quarterly.csv"
    },
    {
      name: "2015-2016_TR_Montly.csv",
      type: "csv",
      url: "data/Tourism/2015-2016_TR_Montly.csv"
    },
    {
      name: "2015-2016_TR_Quarterly.csv",
      type: "csv",
      url: "data/Tourism/2015-2016_TR_Quarterly.csv"
    },
    {
      name: "International Visitors",
      type: "group",
      items: [
        {
          name: "By Reason",
          type: "group",
          items: [
            {
              name: "2016-2017_International_Visitors_thousands",
              type: "csv",
              url: "data/Tourism/2016-2017_International_Visitors_thousands.csv",
              tableStyle: {
                replaceWithNullValues: ['np']
              }
            },
            {
              name: "2016-2017_International_Visitor_Nights_thousands",
              type: "csv",
              url: "data/Tourism/2016-2017_International_Visitor_Nights_thousands.csv",
              tableStyle: {
                replaceWithNullValues: ['np']
              }
            },
            {
              name: "2016-2017_International_Visitors_Regional_Expenditure_millions_dollars",
              type: "csv",
              url: "data/Tourism/2016-2017_International_Visitors_Regional_Expenditure_millions_dollars.csv",
              tableStyle: {
                replaceWithNullValues: ['np']
              }
            }
          ]
        },
        {
          name: "2016-2017_International_Visitors_by_TR",
          type: "csv",
          url: "data/Tourism/2016-2017_International_Visitors_by_TR.csv"
        }
      ]
    },
    {
      name: "Domestic Visitors",
      type: "group",
      items: [
        {
          name: "2016-2017_Domestic_Visitors_by_TR",
          type: "csv",
          url: "data/Tourism/2016-2017_Domestic_Visitors_by_TR.csv"
        },
        {
          name: "Table 3a",
          type: "group",
          items: [
            {
              name: "2016-2017_Domestic_Visitors_Interstate_by_ST.csv",
              type: "csv",
              url: "data/Tourism/2016-2017_Domestic_Visitors_Interstate_by_ST.csv"
            },
            {
              name: "2016-2017_Domestic_Visitors_Intrastate_by_ST.csv",
              type: "csv",
              url: "data/Tourism/2016-2017_Domestic_Visitors_Intrastate_by_ST.csv"
            },
            {
              name: "2016-2017_Domestic_Visitors_Total_by_ST.csv",
              type: "csv",
              url: "data/Tourism/2016-2017_Domestic_Visitors_Total_by_ST.csv"
            }
          ]
        },
        {
          name: "2016-2017_Domestic_Visitors_1a.csv",
          type: "csv",
          url: "data/Tourism/2016-2017_Domestic_Visitors_1a.csv"
        }
      ]
    }
  ]
};