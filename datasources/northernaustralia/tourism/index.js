"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");
const removeIds = require('../../removeIds');

const aremi = require('../shared/aremi.json');

module.exports = {
  name: "Tourism",
  type: "group",
  preserveOrder: true,
  items: [
    {
      name: "Tourist Accommodation and other key metrics",
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
        },
        {
          name: "Accomm total 2009-13 (LGA)",
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
          name: "Key tourism metrics 2009-13 (LGA)",
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
          name: "Total visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_Total.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
        {
          name: "Total tourism businesses 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_tourism_businesses.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
        {
          name: "Total visitors by travel party 2009-13 (LGA) ",
          type: "csv",
          url: "data/Tourism/TRA/TRA_travel_party_Total.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
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
        },
        {
          name: "International visitor nights by country 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_IVS_Country_VisitorNights.csv",
          tableStyle: {
            columns: {
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
        {
          name: "International visitors by country 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_IVS_Country_Visitors.csv",
          tableStyle: {
            columns: {
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
        {
          name: "Accomm international visitors 2009-13 (LGA)",
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
          name: "Key metrics international visitors 2009-13 (LGA)",
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
          name: "International visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_International.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
        {
          name: "International visitors by travel party 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_travel_party_International.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
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
        },
        {
          name: "Accomm domestic visitors overnight 2009-13 (LGA)",
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
          name: "Key metrics domestic visitors 2009-13 (LGA)",
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
          name: "Key metrics domestic visitors overnight 2009-13 (LGA)",
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
          name: "Domestic day visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_Domestic Day.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
        {
          name: "Domestic overnight visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_Domestic Overnight.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
        {
          name: "Domestic visitors by travel party 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_travel_party_Domestic Overnight.csv",
          tableStyle: {
            columns: {
              State: {type: "HIDDEN"},
              StateName: {type: "HIDDEN"},
              lga_name_2016: {type: "HIDDEN"}
            }
          }
        },
      ]
    },
    require('../shared/infrastructure'),
    require('../shared/demography'),
    removeIds(getFromCatalogPath(aremi, ['Environment'])),
    {
      name: "Climate (empty)",
      type: "group",
      items: []
    }
  ]
};
