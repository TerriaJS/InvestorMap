"use strict";

const extraMetadata = {
  info: [
    {
      name: "Data Custodian",
      content: "Tourism Research Australia (TRA)"
    },
    {
      name: "Licensing and Other Details",
      content: "https://www.tra.gov.au/"
    }
  ],
  tableStyle: {
    replaceWithNullValues: ["np"]
  }
};

module.exports = {
  name: "Tourism",
  type: "group",
  items: [
    {
      name: "International Visitors Expenditure 2013-2018",
      type: "csv",
      url: "datasets/2013-2018InternationalTourismExpenditure.csv",
      description:
        "This map layer presents number of international overnight visitors, nights and expenditure by tourism region for 2013 – 2017. The data is extracted from the International Visitor Survey (IVS) conducted by the Tourism Research Australia."
    },
    {
      name: "International Visitors by Origin Country 2013-2018 ('000)",
      type: "csv",
      url: "datasets/2013-2018InternationalTourismOrigins.csv",
      description:
        "This map layer presents international visitors by country of residence by tourism region for 2013 – 2017. The data is extracted from the International Visitor Survey (IVS) conducted by the Tourism Research Australia."
    },
    {
      name: "Domestic Overnight Visitors Expenditure 2013-2017",
      type: "csv",
      url: "datasets/2013-2017OvernightTourismExpenditure.csv",
      description:
        "This map layer presents number of domestic overnight visitors, nights and expenditure by tourism region for 2013 – 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia."
    },
    {
      name: "Domestic Overnight Visitors by Origin State 2013-2017 ('000)",
      type: "csv",
      url: "datasets/2013-2017OvernightTourismOrigins.csv",
      description:
        "This map layer presents domestic overnight visitors by State of residence by tourism region for 2013 – 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia."
    },
    {
      name: "Domestic Daytrip Visitors Expenditure 2013-2017",
      type: "csv",
      url: "datasets/2013-2017DaytripTourismExpenditure.csv",
      description:
        "This map layer presents number of domestic daytrip visitors and expenditure by tourism region for 2013 – 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia."
    },
    {
      name: "Domestic Daytrip Visitors by Origin State 2013-2017 ('000)",
      type: "csv",
      url: "datasets/2013-2017DaytripTourismOrigins.csv",
      description:
        "This map layer presents domestic daytime visitors by State of residence by tourism region for 2013 – 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia."
    },
    {
      name: "Australian Accommodation Monitor 2016-2017",
      type: "csv",
      url: "datasets/2016-2017TourismRegionSummary.csv",
      description:
        "This map layer presents domestic overnight visitor nights in accommodation by tourism region for July 2016 – June 2017. The data is extracted from the National Visitor Survey (NVS) conducted by the Tourism Research Australia."
    }
  ].map(i => Object.assign({}, i, extraMetadata)),
  preserveOrder: true
};
