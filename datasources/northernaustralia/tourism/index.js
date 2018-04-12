"use strict";

const getFromCatalogPath = require("../../getFromCatalogPath");
const removeIds = require("../../removeIds");

const aremi = require("../shared/aremi.json");

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
          url: "data/Tourism/2015-2016_SA2_Montly.csv",
          description:
            "This map layer presents occupancy related data (room nights occupied, room nights available, occupancy rate, takings from accommodation etc.) by Statistical Area 2 (SA2) level for the Northern Territory, Queensland and Western Australia from the Survey of Tourism Accommodation (STA) conducted by the Australian Bureau of Statistics. The STA is a census of all in-scope accommodation establishments within Australia. This data layer includes each month of the 2015-16 financial year, that is from 1 July 2015 until 30 June 2016. <p/> Establishments in scope of STA are: hotels and resorts with 15 or more rooms; motels, private hotels and guest houses with 15 or more rooms; serviced apartments with 15 or more units. <p/> Statistical Area 2 (SA2) level is the geographical delimitation by which this data is presented. SA2s generally have a population range of 3,000 to 25,000 persons. More information on SA2s here: http://www.abs.gov.au/ausstats/abs@.nsf/Lookup/by%20Subject/1270.0.55.001~July%202016~Main%20Features~Statistical%20Area%20Level%202%20(SA2)~10014",
          info: [
            {
              name: "Data custodian",
              content: "Australian Bureau of Statistics (ABS)"
            },
            {
              name: "Licensing and other details",
              content:
                "http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/8635.0Explanatory%20Notes12015-16?OpenDocument "
            }
          ]
        },
        {
          name: "Accom establishments NT, QLD, WA by quarter 2015-16 (SA2)",
          type: "csv",
          url: "data/Tourism/2015-2016_SA2_Quarterly.csv",
          description:
            "This map layer presents number of establishments, rooms and bed spaces data by Statistical Area 2 (SA2) level for the Northern Territory, Queensland and Western Australia from the Survey of Tourism Accommodation (STA) conducted by the Australian Bureau of Statistics. The STA is a census of all in-scope accommodation establishments within Australia. This data layer includes the four quarters of the 2015-16 financial year, that is September quarter 2015, December quarter 2015, March quarter 2016 and June quarter 2016. <p/> Establishments in scope of STA are: hotels and resorts with 15 or more rooms; motels, private hotels and guest houses with 15 or more rooms; serviced apartments with 15 or more units. <p/> Statistical Area 2 (SA2) level is the geographical delimitation by which this data is presented. SA2s generally have a population range of 3,000 to 25,000 persons. More information on SA2s here: http://www.abs.gov.au/ausstats/abs@.nsf/Lookup/by%20Subject/1270.0.55.001~July%202016~Main%20Features~Statistical%20Area%20Level%202%20(SA2)~10014",
          info: [
            {
              name: "Data custodian",
              content: "Australian Bureau of Statistics (ABS)"
            },
            {
              name: "Licensing and other details",
              content:
                "http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/8635.0Explanatory%20Notes12015-16?OpenDocument "
            }
          ]
        },
        {
          name: "Accom occupancy NT, QLD, WA by month 2015-16 (TR)",
          type: "csv",
          url: "data/Tourism/2015-2016_TR_Montly.csv",
          description:
            "This map layer presents occupancy related data (room nights occupied, room nights available, occupancy rate, takings from accommodation etc.) by Tourism Region (TR) level for the Northern Territory, Queensland and Western Australia from the Survey of Tourism Accommodation (STA) conducted by the Australian Bureau of Statistics. The STA is a census of all in-scope accommodation establishments within Australia. This data layer includes each month of the 2015-16 financial year, that is from 1 July 2015 until 30 June 2016. <p/> Establishments in scope of STA are: hotels and resorts with 15 or more rooms; motels, private hotels and guest houses with 15 or more rooms; serviced apartments with 15 or more units.",
          info: [
            {
              name: "Data custodian",
              content: "Australian Bureau of Statistics (ABS)"
            },
            {
              name: "Licensing and other details",
              content:
                "http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/8635.0Explanatory%20Notes12015-16?OpenDocument"
            }
          ]
        },
        {
          name: "Accom establishments NT, QLD, WA by quarter 2015-16 (TR)",
          type: "csv",
          url: "data/Tourism/2015-2016_TR_Quarterly.csv",
          description:
            "This map layer presents data by Tourism Region (TR) for the Northern Territory, Queensland and Western Australia from the Survey of Tourism Accommodation (STA) conducted by the Australian Bureau of Statistics. The STA is a census of all in-scope accommodation establishments within Australia. This data layer includes the four quarters of the 2015-16 financial year, that is September quarter 2015, December quarter 2015, March quarter 2016 and June quarter 2016. <p/> Establishments in scope of STA are: hotels and resorts with 15 or more rooms; motels, private hotels and guest houses with 15 or more rooms; serviced apartments with 15 or more units.",
          info: [
            {
              name: "Data custodian",
              content: "Australian Bureau of Statistics (ABS)"
            },
            {
              name: "Licensing and other details",
              content:
                "http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/8635.0Explanatory%20Notes12015-16?OpenDocument"
            }
          ]
        },
        {
          name: "Accomm total 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_accommodation_Total.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles "
            }
          ]
        },
        {
          name: "Key tourism metrics 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_key_metrics_Total.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Total visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_Total.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Total tourism businesses 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_tourism_businesses.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles "
            }
          ]
        },
        {
          name: "Total visitors by travel party 2009-13 (LGA) ",
          type: "csv",
          url: "data/Tourism/TRA/TRA_travel_party_Total.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
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
          url: "data/Tourism/2015-2017_International_Visitors_by_TR.csv",
          description:
            "This map layer presents international visitors, visitor nights and expenditure for top 50 Tourism Regions for July 2015 – June 2017. The data is extracted from the International Visitor Survey (IVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/research/international-visitors-to-australia/international-visitor-survey-methodology/international-visitor-survey-methodology"
            }
          ]
        },
        {
          name: "International visitors by reason 2015-17 (thousands)",
          type: "csv",
          url: "data/Tourism/2015-2017_International_Visitors_thousands.csv",
          tableStyle: {
            replaceWithNullValues: ["np"]
          },
          description:
            "This map layer presents international visitors by reason by State for July 2015 – June 2017. The data is extracted from the International Visitor Survey (IVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/research/international-visitors-to-australia/international-visitor-survey-methodology/international-visitor-survey-methodology"
            }
          ]
        },
        {
          name: "International visitor nights by reason 2015-17 (thousands)",
          type: "csv",
          url:
            "data/Tourism/2015-2017_International_Visitor_Nights_thousands.csv",
          tableStyle: {
            replaceWithNullValues: ["np"]
          },
          description:
            "This map layer presents international visitor nights by reason by State for July 2015 – June 2017. The data is extracted from the International Visitor Survey (IVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/research/international-visitors-to-australia/international-visitor-survey-methodology/international-visitor-survey-methodology"
            }
          ]
        },
        {
          name:
            "International visitors expenditure by reason 2015-17 ($millions)",
          type: "csv",
          url:
            "data/Tourism/2015-2017_International_Visitors_Regional_Expenditure_millions_dollars.csv",
          tableStyle: {
            replaceWithNullValues: ["np"]
          },
          description:
            "This map layer presents international visitor expenditure by reason by State for July 2015 – June 2017. The data is extracted from the International Visitor Survey (IVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/research/international-visitors-to-australia/international-visitor-survey-methodology/international-visitor-survey-methodology"
            }
          ]
        },
        {
          name: "International visitor nights by country 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_IVS_Country_VisitorNights.csv",
          tableStyle: {
            columns: {
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles "
            }
          ]
        },
        {
          name: "International visitors by country 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_IVS_Country_Visitors.csv",
          tableStyle: {
            columns: {
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Accomm international visitors 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_accommodation_International.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Key metrics international visitors 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_key_metrics_International.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "International visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_International.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "International visitors by travel party 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_travel_party_International.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
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
          url: "data/Tourism/2015-2017_Domestic_Visitors_by_TR.csv",
          description:
            "This map layer presents domestic visitors, visitor nights and expenditure for top 50 Tourism Regions for July 2015 – June 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/about-us/methodology/national-visitor-survey/national-visitor-survey"
            }
          ]
        },
        {
          name: "Domestic visitors & expenditure by State 2015-17",
          type: "csv",
          url: "data/Tourism/2015-2017_Domestic_Visitors_1a.csv",
          description:
            "This map layer presents domestic visitors, visitor nights and expenditure by State for July 2015 – June 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/about-us/methodology/national-visitor-survey/national-visitor-survey"
            }
          ]
        },
        {
          name: "Domestic visitors interstate by reason 2015-17",
          type: "csv",
          url: "data/Tourism/2015-2017_Domestic_Visitors_Interstate_by_ST.csv",
          tableStyle: {
            replaceWithNullValues: ["np"]
          },
          description:
            "This map layer presents domestic visitors interstate by reason by State for July 2015 – June 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/about-us/methodology/national-visitor-survey/national-visitor-survey"
            }
          ]
        },
        {
          name: "Domestic visitors intrastate by reason 2015-17",
          type: "csv",
          url: "data/Tourism/2015-2017_Domestic_Visitors_Intrastate_by_ST.csv",
          tableStyle: {
            replaceWithNullValues: ["-"]
          },
          description:
            "This map layer presents domestic visitors intrastate by reason by State for July 2015 – June 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/about-us/methodology/national-visitor-survey/national-visitor-survey"
            }
          ]
        },
        {
          name: "Domestic visitors total by reason 2015-17",
          type: "csv",
          url: "data/Tourism/2015-2017_Domestic_Visitors_Total_by_ST.csv",
          tableStyle: {
            replaceWithNullValues: ["np"]
          },
          description:
            "This map layer presents domestic visitors by reason by State for July 2015 – June 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/about-us/methodology/national-visitor-survey/national-visitor-survey"
            }
          ]
        },
        {
          name: "Accomm domestic visitors overnight 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_accommodation_Domestic Overnight.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Key metrics domestic visitors 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_key_metrics_Domestic Day.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Key metrics domestic visitors overnight 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_key_metrics_Domestic Overnight.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Domestic day visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_Domestic Day.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Domestic overnight visitors by reason 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_reason_Domestic Overnight.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        },
        {
          name: "Domestic visitors by travel party 2009-13 (LGA)",
          type: "csv",
          url: "data/Tourism/TRA/TRA_travel_party_Domestic Overnight.csv",
          tableStyle: {
            columns: {
              State: { type: "HIDDEN" },
              StateName: { type: "HIDDEN" },
              lga_name_2016: { type: "HIDDEN" }
            }
          },
          description:
            "This dataset is part of the Local Government Area tourism profiles developed by the Tourism Research Australia (TRA). The data are drawn from TRA’s International Visitor Survey (IVS) and National Visitor Survey (NVS), along with demographic and business data from the Australian Bureau of Statistics (ABS). Profiles were only prepared for Local Government Areas with adequate <i>International Visitor Survey</i> (IVS) and <i>National Visitor Survey</i> (NVS) sample to present robust results. Further, data are averaged over four years to December 2013, which minimises the impact of variability in estimates from year to year, and provides for more robust volume estimates.",
          info: [
            {
              name: "Data custodian",
              content: "Tourism Research Australia (TRA)"
            },
            {
              name: "Licensing and other details",
              content:
                "https://www.tra.gov.au/Research/Regional-tourism/local-government-area-profiles"
            }
          ]
        }
      ]
    },
    require("../shared/infrastructure"),
    require("../shared/demography"),
    removeIds(getFromCatalogPath(aremi, ["Environment"]))
  ]
};
