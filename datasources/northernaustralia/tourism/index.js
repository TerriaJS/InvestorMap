"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");
const addDescriptionToGroups = require("../../addDescriptionToGroups");

module.exports = addDescriptionToGroups(
  {
    name: "Tourism",
    type: "group",
    preserveOrder: true,
    items: [
      {
        name: "Tourist Accommodation",
        type: "group",
        items: [
          {
            name: "Accom occupancy NT, QLD, WA by month 2015-16 (SA2)",
            type: "csv",
            url: "data/Tourism/2015-2016_SA2_Montly.csv"
          },
          {
            name: "Accom establishments NT, QLD, WA by quarter 2015-16 (SA2)",
            type: "csv",
            url: "data/Tourism/2015-2016_SA2_Quarterly.csv"
          },
          {
            name: "Accom occupancy NT, QLD, WA by month 2015-16 (TR)",
            type: "csv",
            url: "data/Tourism/2015-2016_TR_Montly.csv"
          },
          {
            name: "Accom establishments NT, QLD, WA by quarter 2015-16 (TR)",
            type: "csv",
            url: "data/Tourism/2015-2016_TR_Quarterly.csv"
          }
        ]
      },
      {
        name: "International Visitors",
        type: "group",
        preserveOrder: true,
        items: [
          {
            name:
              "International visitors & expenditure top 50 Tourism Regions 2015-17",
            type: "csv",
            url: "data/Tourism/2015-2017_International_Visitors_by_TR.csv"
          },
          {
            name: "International visitors by reason 2015-17 (thousands)",
            type: "csv",
            url: "data/Tourism/2015-2017_International_Visitors_thousands.csv",
            tableStyle: {
              replaceWithNullValues: ["np"]
            }
          },
          {
            name: "International visitor nights by reason 2015-17 (thousands)",
            type: "csv",
            url:
              "data/Tourism/2015-2017_International_Visitor_Nights_thousands.csv",
            tableStyle: {
              replaceWithNullValues: ["np"]
            }
          },
          {
            name:
              "International visitors expenditure by reason 2015-17 ($millions)",
            type: "csv",
            url:
              "data/Tourism/2015-2017_International_Visitors_Regional_Expenditure_millions_dollars.csv",
            tableStyle: {
              replaceWithNullValues: ["np"]
            }
          }
        ]
      },
      {
        name: "Domestic Visitors",
        type: "group",
        preserveOrder: true,
        items: [
          {
            name:
              "Domestic visitors & expenditure top 50 Tourism Regions 2015-17",
            type: "csv",
            url: "data/Tourism/2015-2017_Domestic_Visitors_by_TR.csv"
          },
          {
            name: "Domestic visitors & expenditure by State 2015-17",
            type: "csv",
            url: "data/Tourism/2015-2017_Domestic_Visitors_1a.csv"
          },
          {
            name: "Domestic visitors interstate by reason 2015-17",
            type: "csv",
            url:
              "data/Tourism/2015-2017_Domestic_Visitors_Interstate_by_ST.csv",
            tableStyle: {
              replaceWithNullValues: ["np"]
            }
          },
          {
            name: "Domestic visitors intrastate by reason 2015-17",
            type: "csv",
            url:
              "data/Tourism/2015-2017_Domestic_Visitors_Intrastate_by_ST.csv",
            tableStyle: {
              replaceWithNullValues: ["np"]
            }
          },
          {
            name: "Domestic visitors total by reason 2015-17",
            type: "csv",
            url: "data/Tourism/2015-2017_Domestic_Visitors_Total_by_ST.csv",
            tableStyle: {
              replaceWithNullValues: ["np"]
            }
          }
        ]
      },
      {
        name: "Tourism data by LGA (Tourism Research Australia)",
        type: "group",
        preserveOrder: true,
        items: [
          {
            name: "TRA_IVS_Country_VisitorNights.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_IVS_Country_VisitorNights.csv",
            tableStyle: {
              columns: {
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_IVS_Country_Visitors.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_IVS_Country_Visitors.csv",
            tableStyle: {
              columns: {
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_accommodation_Domestic Overnight.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_accommodation_Domestic Overnight.csv",
            tableStyle: {
              columns: {
                State: {type: "HIDDEN"},
                StateName: {type: "HIDDEN"},
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_accommodation_International.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_accommodation_International.csv",
            tableStyle: {
              columns: {
                State: {type: "HIDDEN"},
                StateName: {type: "HIDDEN"},
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_accommodation_Total.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_accommodation_Total.csv",
            tableStyle: {
              columns: {
                State: {type: "HIDDEN"},
                StateName: {type: "HIDDEN"},
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_key_metrics_Domestic Day.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_key_metrics_Domestic Day.csv",
            tableStyle: {
              columns: {
                State: {type: "HIDDEN"},
                StateName: {type: "HIDDEN"},
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_key_metrics_Domestic Overnight.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_key_metrics_Domestic Overnight.csv",
            tableStyle: {
              columns: {
                State: {type: "HIDDEN"},
                StateName: {type: "HIDDEN"},
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_key_metrics_International.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_key_metrics_International.csv",
            tableStyle: {
              columns: {
                State: {type: "HIDDEN"},
                StateName: {type: "HIDDEN"},
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_key_metrics_Total.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_key_metrics_Total.csv",
            tableStyle: {
              columns: {
                State: {type: "HIDDEN"},
                StateName: {type: "HIDDEN"},
                lga_name_2016: {type: "HIDDEN"}
              }
            }
          },
          {
            name: "TRA_reason_Domestic Day.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_reason_Domestic Day.csv"
          },
          {
            name: "TRA_reason_Domestic Overnight.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_reason_Domestic Overnight.csv"
          },
          {
            name: "TRA_reason_International.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_reason_International.csv"
          },
          {
            name: "TRA_reason_Total.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_reason_Total.csv"
          },
          {
            name: "TRA_tourism_businesses.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_tourism_businesses.csv"
          },
          {
            name: "TRA_travel_party_Domestic Overnight.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_travel_party_Domestic Overnight.csv"
          },
          {
            name: "TRA_travel_party_International.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_travel_party_International.csv"
          },
          {
            name: "TRA_travel_party_Total.csv",
            type: "csv",
            url: "data/Tourism/TRA/TRA_travel_party_Total.csv"
          }
        ]
      }
    ]
  },
  `
**Tourism**

_Northern Australia includes many of Australia’s most recognisable tourism destinations and is home to World Heritage sites, including the Great Barrier Reef and Uluru._

There are opportunities to invest in short-term accommodation, luxury lodges, camping facilities, and integrated resorts. There are also public-private partnership projects, including airports, cruise terminals and roads.

The Australian Government is determined to see northern Australia develop its full potential as a tourism destination and offers a Tourism Major Project Facilitation Service to help investors obtain faster and more streamlined approvals.

Australia is the eighth largest tourism market in the world and a major destination for business investment. Located in the world’s strongest tourism region and largest aviation market, Australia offers a secure and stable environment for tourism investors.
`.trim()
);
