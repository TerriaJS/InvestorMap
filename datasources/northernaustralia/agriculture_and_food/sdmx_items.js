"use strict";

module.exports = [
  {
    name: "Land Use - Agricultural Commodities 2016",
    type: "sdmx-json",
    rectangle: [109, -45, 158, -8],
    cacheDuration: "300s",
    regionNameTemplate: "{{name}}_code_2016",
    sortValues: "id",
    showWarnings: false,
    cleanFootnotes: true,
    forceShowDimensionIds: ["MEASURE"],
    url: "http://stat.data.abs.gov.au/sdmx-json/data/ABS_REGIONAL_ASGS2016",
    description:
      "Explanatory notes are available [here](http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/1379.0.55.001Explanatory%20Notes12009-13?OpenDocument).<br/>You can view this data, along with explanations of the meaning of terms, on the ABS.Stat website [here](http://stat.data.abs.gov.au/Index.aspx?DatasetCode=ABS_REGIONAL_ASGS2016).  Click on the _i_ symbols on that page for further information and links. Please note that ABS.Stat beta is continuing to be developed. Data will be updated as soon as possible following its 11:30 am release on the ABS website.",
    singleValuedDimensionIds: ["MEASURE"],
    totalValueIds: {
      "*": ["TOT", "LFTOT"],
      SPC: ["TT"],
      MTWP: ["1M", "2M", "3M"],
      FMCF: ["CF", "1", "2", "3"],
      POUR: ["TOT", "1", "2", "2_0", "2_11"],
      UAI1P: ["TOT", "2", "2_S", "2_D"],
      LFSP: ["TOT", "EMP", "UEMP"],
      FAMILY_TYPE: ["6"],
      HH_TYPE: ["4"],
      LEN: ["99"],
      INFANT_AGE: ["IMTOT"],
      DLC_11NC: ["210", "205"],
      DLC_11: ["T"],
      ANZIC: ["01", "TOTAL"],
      LU_11NC: ["210", "205"],
      LU_11: ["T"],
      LENDER: ["99"],
      INDUSTRY: ["-1", "T", "-"],
      SITC_REV3: ["-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      COUNTRY: ["-"],
      STRD_BEDRD: ["._TOT"],
      FMCF_INCC: ["TOT_TOT"],
      DEPOSIT_TYPE: ["6"],
      MINERAL_TYPE: ["11"],
      MLU_0611: ["9"],
      PLU_0611: ["10"],
      PLC_0611: ["10"],
      PERSON_LA: ["16"],
      LEASE_TYPE: ["3"],
      ASSET: ["999"],
      SECTOR: ["7", "9"],
      VEHICLE: ["900"],
      IND_R: ["20"],
      RELP: ["2"],
      ANCP: ["TOTP"],
      LANP: ["LOTE", "71", "52", "41", "65"],
      ENGLP: ["OTH", "SOL"],
      WORK: ["9"],
      TYPE_WORK: ["9"],
      BUILDING_TYPE: ["999", "100", "200", "300", "400", "700", "800"],
      TYPE_BLDG: ["999", "100", "200", "300", "400", "700", "800"],
      PLURALITY: ["SX_6"]
    },
    blacklist: {
      MEASURE: ["AGRIC_([12]|1[4567])"]
    },
    whitelist: {
      MEASURE: ["AGRIC_.*"],
      FMCF: ["TOT", "[1-3]", "9"],
      STRD: ["TOT", "OPD", "[1-3]", "9", "11", "Z", "UPD"],
      LFSP: ["TOT", "EMP", "[1-4]", "7", "Z", "UEMP"],
      MTWP: [
        "TOT",
        "[1-3]M",
        "00[1-9]",
        "010",
        "011",
        "232",
        "TA",
        "BA",
        "B2",
        "233",
        "234",
        "Z"
      ],
      TYPP: ["TOT", "10", "2", "3", "40", "50", "60", "Z", "V"],
      FMCF_INCC: [".*_.*"],
      IND: ["-"],
      ANCP_2016: ["TOT", "[0-9]{4}"],
      BPLP_2016: ["TOT", "[0-9]{4}"],
      RELP_2016: ["TOT", "[0-9]{4}"],
      LANP_2016: ["TOT", "[0-9]{4}"],
      FMCF_2016: ["TOT", "[0-9]{4}"],
      HHCD_2016: ["TOT", "[0-9]{3}"],
      "": ["A[0-9]+", "T.*", "O.*"],
      BUILDING_TYPE: ["999", "100", "110", "700", "800", "850"],
      TYPE_BLDG: ["999", "100", "110", "700", "800", "850"],
      REGIONTYPE: ["AUS", "SA4", "STE"]
    },
    regionDimensionId: "ASGS_2016",
    selectedInitially: {
      REGIONTYPE: ["SA4"],
      COB: ["1101"],
      DT: ["2"],
      STATE: ["1", "2", "3", "4", "5", "6", "7", "8"],
      ASGS_2011: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }
  },
  {
    name: "Land Use - Agricultural Commodities 2011",
    type: "sdmx-json",
    cacheDuration: "2h",
    regionNameTemplate: "{{name}}_code_2011",
    sortValues: "id",
    showWarnings: false,
    cleanFootnotes: true,
    forceShowDimensionIds: ["MEASURE"],
    url: "http://stat.data.abs.gov.au/sdmx-json/data/ABS_REGIONAL_ASGS",
    description:
      "Explanatory notes are available [here](http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/1379.0.55.001Explanatory%20Notes12009-13?OpenDocument).<br/>You can view this data, along with explanations of the meaning of terms, on the ABS.Stat website [here](http://stat.data.abs.gov.au/Index.aspx?DatasetCode=ABS_REGIONAL_ASGS).  Click on the _i_ symbols on that page for further information and links. Please note that ABS.Stat beta is continuing to be developed. Data will be updated as soon as possible following its 11:30 am release on the ABS website.",
    singleValuedDimensionIds: ["MEASURE"],
    totalValueIds: {
      "*": ["TOT", "LFTOT"],
      SPC: ["TT"],
      MTWP: ["1M", "2M", "3M"],
      FMCF: ["CF", "1", "2", "3"],
      POUR: ["TOT", "1", "2", "2_0", "2_11"],
      UAI1P: ["TOT", "2", "2_S", "2_D"],
      LFSP: ["TOT", "EMP", "UEMP"],
      FAMILY_TYPE: ["6"],
      HH_TYPE: ["4"],
      LEN: ["99"],
      INFANT_AGE: ["IMTOT"],
      DLC_11NC: ["210", "205"],
      DLC_11: ["T"],
      ANZIC: ["01", "TOTAL"],
      LU_11NC: ["210", "205"],
      LU_11: ["T"],
      LENDER: ["99"],
      INDUSTRY: ["-1", "T", "-"],
      SITC_REV3: ["-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      COUNTRY: ["-"],
      STRD_BEDRD: ["._TOT"],
      FMCF_INCC: ["TOT_TOT"],
      DEPOSIT_TYPE: ["6"],
      MINERAL_TYPE: ["11"],
      MLU_0611: ["9"],
      PLU_0611: ["10"],
      PLC_0611: ["10"],
      PERSON_LA: ["16"],
      LEASE_TYPE: ["3"],
      ASSET: ["999"],
      SECTOR: ["7"],
      VEHICLE: ["900"],
      IND_R: ["20"],
      RELP: ["2"],
      ANCP: ["TOTP"],
      LANP: ["LOTE", "71", "52", "41", "65"],
      ENGLP: ["OTH", "SOL"]
    },
    blacklist: {
      MEASURE: ["AGRIC_([12]|1[45678])"]
    },
    whitelist: {
      MEASURE: ["AGRIC_.*"],
      FMCF: ["TOT", "[1-3]", "9"],
      STRD: ["TOT", "OPD", "[1-3]", "9", "11", "Z", "UPD"],
      LFSP: ["TOT", "EMP", "[1-4]", "7", "Z", "UEMP"],
      MTWP: [
        "TOT",
        "[1-3]M",
        "00[1-9]",
        "010",
        "011",
        "232",
        "TA",
        "BA",
        "B2",
        "233",
        "234",
        "Z"
      ],
      TYPP: ["TOT", "10", "2", "3", "40", "50", "60", "Z", "V"],
      FMCF_INCC: [".*_.*"],
      IND: ["-"],
      ANCP_2016: ["TOT", "[0-9]{4}"],
      BPLP_2016: ["TOT", "[0-9]{4}"],
      RELP_2016: ["TOT", "[0-9]{4}"],
      LANP_2016: ["TOT", "[0-9]{4}"],
      FMCF_2016: ["TOT", "[0-9]{4}"],
      HHCD_2016: ["TOT", "[0-9]{3}"],
      "": ["A[0-9]+", "T.*", "O.*"],
      REGIONTYPE: ["AUS", "SA2", "SA4", "STE"]
    },
    selectedInitially: {
      REGIONTYPE: ["SA4"],
      COB: ["1101"],
      DT: ["2"],
      STATE: ["1", "2", "3", "4", "5", "6", "7", "8"],
      ASGS_2011: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }
  },
  {
    name: "Gross Value of Agricultural Production 2016",
    type: "sdmx-json",
    rectangle: [109, -45, 158, -8],
    cacheDuration: "300s",
    regionNameTemplate: "{{name}}_code_2016",
    sortValues: "id",
    showWarnings: false,
    cleanFootnotes: true,
    forceShowDimensionIds: ["MEASURE"],
    url: "http://stat.data.abs.gov.au/sdmx-json/data/ABS_REGIONAL_ASGS2016",
    description:
      "Explanatory notes are available [here](http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/1379.0.55.001Explanatory%20Notes12009-13?OpenDocument).<br/>You can view this data, along with explanations of the meaning of terms, on the ABS.Stat website [here](http://stat.data.abs.gov.au/Index.aspx?DatasetCode=ABS_REGIONAL_ASGS2016).  Click on the _i_ symbols on that page for further information and links. Please note that ABS.Stat beta is continuing to be developed. Data will be updated as soon as possible following its 11:30 am release on the ABS website.",
    singleValuedDimensionIds: ["MEASURE"],
    totalValueIds: {
      "*": ["TOT", "LFTOT"],
      SPC: ["TT"],
      MTWP: ["1M", "2M", "3M"],
      FMCF: ["CF", "1", "2", "3"],
      POUR: ["TOT", "1", "2", "2_0", "2_11"],
      UAI1P: ["TOT", "2", "2_S", "2_D"],
      LFSP: ["TOT", "EMP", "UEMP"],
      FAMILY_TYPE: ["6"],
      HH_TYPE: ["4"],
      LEN: ["99"],
      INFANT_AGE: ["IMTOT"],
      DLC_11NC: ["210", "205"],
      DLC_11: ["T"],
      ANZIC: ["01", "TOTAL"],
      LU_11NC: ["210", "205"],
      LU_11: ["T"],
      LENDER: ["99"],
      INDUSTRY: ["-1", "T", "-"],
      SITC_REV3: ["-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      COUNTRY: ["-"],
      STRD_BEDRD: ["._TOT"],
      FMCF_INCC: ["TOT_TOT"],
      DEPOSIT_TYPE: ["6"],
      MINERAL_TYPE: ["11"],
      MLU_0611: ["9"],
      PLU_0611: ["10"],
      PLC_0611: ["10"],
      PERSON_LA: ["16"],
      LEASE_TYPE: ["3"],
      ASSET: ["999"],
      SECTOR: ["7", "9"],
      VEHICLE: ["900"],
      IND_R: ["20"],
      RELP: ["2"],
      ANCP: ["TOTP"],
      LANP: ["LOTE", "71", "52", "41", "65"],
      ENGLP: ["OTH", "SOL"],
      WORK: ["9"],
      TYPE_WORK: ["9"],
      BUILDING_TYPE: ["999", "100", "200", "300", "400", "700", "800"],
      TYPE_BLDG: ["999", "100", "200", "300", "400", "700", "800"],
      PLURALITY: ["SX_6"]
    },
    whitelist: {
      MEASURE: ["AGRIC_1[567]"],
      FMCF: ["TOT", "[1-3]", "9"],
      STRD: ["TOT", "OPD", "[1-3]", "9", "11", "Z", "UPD"],
      LFSP: ["TOT", "EMP", "[1-4]", "7", "Z", "UEMP"],
      MTWP: [
        "TOT",
        "[1-3]M",
        "00[1-9]",
        "010",
        "011",
        "232",
        "TA",
        "BA",
        "B2",
        "233",
        "234",
        "Z"
      ],
      TYPP: ["TOT", "10", "2", "3", "40", "50", "60", "Z", "V"],
      FMCF_INCC: [".*_.*"],
      IND: ["-"],
      ANCP_2016: ["TOT", "[0-9]{4}"],
      BPLP_2016: ["TOT", "[0-9]{4}"],
      RELP_2016: ["TOT", "[0-9]{4}"],
      LANP_2016: ["TOT", "[0-9]{4}"],
      FMCF_2016: ["TOT", "[0-9]{4}"],
      HHCD_2016: ["TOT", "[0-9]{3}"],
      "": ["A[0-9]+", "T.*", "O.*"],
      BUILDING_TYPE: ["999", "100", "110", "700", "800", "850"],
      TYPE_BLDG: ["999", "100", "110", "700", "800", "850"],
      REGIONTYPE: ["AUS", "SA4", "STE"]
    },
    regionDimensionId: "ASGS_2016",
    selectedInitially: {
      REGIONTYPE: ["SA4"],
      COB: ["1101"],
      DT: ["2"],
      STATE: ["1", "2", "3", "4", "5", "6", "7", "8"],
      ASGS_2011: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }
  },
  {
    name: "Gross Value of Agricultural Production 2011",
    type: "sdmx-json",
    cacheDuration: "2h",
    regionNameTemplate: "{{name}}_code_2011",
    sortValues: "id",
    showWarnings: false,
    cleanFootnotes: true,
    forceShowDimensionIds: ["MEASURE"],
    url: "http://stat.data.abs.gov.au/sdmx-json/data/ABS_REGIONAL_ASGS",
    description:
      "Explanatory notes are available [here](http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/1379.0.55.001Explanatory%20Notes12009-13?OpenDocument).<br/>You can view this data, along with explanations of the meaning of terms, on the ABS.Stat website [here](http://stat.data.abs.gov.au/Index.aspx?DatasetCode=ABS_REGIONAL_ASGS).  Click on the _i_ symbols on that page for further information and links. Please note that ABS.Stat beta is continuing to be developed. Data will be updated as soon as possible following its 11:30 am release on the ABS website.",
    singleValuedDimensionIds: ["MEASURE"],
    totalValueIds: {
      "*": ["TOT", "LFTOT"],
      SPC: ["TT"],
      MTWP: ["1M", "2M", "3M"],
      FMCF: ["CF", "1", "2", "3"],
      POUR: ["TOT", "1", "2", "2_0", "2_11"],
      UAI1P: ["TOT", "2", "2_S", "2_D"],
      LFSP: ["TOT", "EMP", "UEMP"],
      FAMILY_TYPE: ["6"],
      HH_TYPE: ["4"],
      LEN: ["99"],
      INFANT_AGE: ["IMTOT"],
      DLC_11NC: ["210", "205"],
      DLC_11: ["T"],
      ANZIC: ["01", "TOTAL"],
      LU_11NC: ["210", "205"],
      LU_11: ["T"],
      LENDER: ["99"],
      INDUSTRY: ["-1", "T", "-"],
      SITC_REV3: ["-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      COUNTRY: ["-"],
      STRD_BEDRD: ["._TOT"],
      FMCF_INCC: ["TOT_TOT"],
      DEPOSIT_TYPE: ["6"],
      MINERAL_TYPE: ["11"],
      MLU_0611: ["9"],
      PLU_0611: ["10"],
      PLC_0611: ["10"],
      PERSON_LA: ["16"],
      LEASE_TYPE: ["3"],
      ASSET: ["999"],
      SECTOR: ["7"],
      VEHICLE: ["900"],
      IND_R: ["20"],
      RELP: ["2"],
      ANCP: ["TOTP"],
      LANP: ["LOTE", "71", "52", "41", "65"],
      ENGLP: ["OTH", "SOL"]
    },
    whitelist: {
      MEASURE: ["AGRIC_1[5678]"],
      FMCF: ["TOT", "[1-3]", "9"],
      STRD: ["TOT", "OPD", "[1-3]", "9", "11", "Z", "UPD"],
      LFSP: ["TOT", "EMP", "[1-4]", "7", "Z", "UEMP"],
      MTWP: [
        "TOT",
        "[1-3]M",
        "00[1-9]",
        "010",
        "011",
        "232",
        "TA",
        "BA",
        "B2",
        "233",
        "234",
        "Z"
      ],
      TYPP: ["TOT", "10", "2", "3", "40", "50", "60", "Z", "V"],
      FMCF_INCC: [".*_.*"],
      IND: ["-"],
      ANCP_2016: ["TOT", "[0-9]{4}"],
      BPLP_2016: ["TOT", "[0-9]{4}"],
      RELP_2016: ["TOT", "[0-9]{4}"],
      LANP_2016: ["TOT", "[0-9]{4}"],
      FMCF_2016: ["TOT", "[0-9]{4}"],
      HHCD_2016: ["TOT", "[0-9]{3}"],
      "": ["A[0-9]+", "T.*", "O.*"],
      REGIONTYPE: ["AUS", "SA2", "SA4", "STE"]
    },
    selectedInitially: {
      REGIONTYPE: ["SA4"],
      COB: ["1101"],
      DT: ["2"],
      STATE: ["1", "2", "3", "4", "5", "6", "7", "8"],
      ASGS_2011: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }
  },
  {
    name: "Land Management Practices Survey 2011-2012",
    type: "sdmx-json",
    rectangle: [109, -45, 158, -8],
    cacheDuration: "300s",
    sortValues: "id",
    showWarnings: false,
    cleanFootnotes: true,
    forceShowDimensionIds: ["MEASURE"],
    url: "http://stat.data.abs.gov.au/sdmx-json/data/ABS_LAMPS",
    description:
      "This dataset presents detailed information on agricultural land management practices used on Australian farms, using data collected from the 2011-12 Land Management Practices Survey (LaMPS). Explanatory notes are available [here](http://www.abs.gov.au/AUSSTATS/abs@.nsf/Lookup/4630.0Explanatory%20Notes12011-12?OpenDocument).\n\nNote that ACT is included in the NSW figures.\n\n<br/>You can view this data, along with explanations of the meaning of terms, on the ABS.Stat website [here](http://stat.data.abs.gov.au/Index.aspx?DatasetCode=ABS_LAMPS).  Click on the _i_ symbols on that page for further information and links. Please note that ABS.Stat beta is continuing to be developed. Data will be updated as soon as possible following its 11:30 am release on the ABS website.",
    singleValuedDimensionIds: ["MEASURE", "MGT_PRACTICE"],
    totalValueIds: {
      "*": ["TOT", "LFTOT"],
      SPC: ["TT"],
      MTWP: ["1M", "2M", "3M"],
      FMCF: ["CF", "1", "2", "3"],
      POUR: ["TOT", "1", "2", "2_0", "2_11"],
      UAI1P: ["TOT", "2", "2_S", "2_D"],
      LFSP: ["TOT", "EMP", "UEMP"],
      FAMILY_TYPE: ["6"],
      HH_TYPE: ["4"],
      LEN: ["99"],
      INFANT_AGE: ["IMTOT"],
      DLC_11NC: ["210", "205"],
      DLC_11: ["T"],
      ANZIC: ["01", "TOTAL"],
      LU_11NC: ["210", "205"],
      LU_11: ["T"],
      LENDER: ["99"],
      INDUSTRY: ["-1", "T", "-"],
      SITC_REV3: ["-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      COUNTRY: ["-"],
      STRD_BEDRD: ["._TOT"],
      FMCF_INCC: ["TOT_TOT"],
      DEPOSIT_TYPE: ["6"],
      MINERAL_TYPE: ["11"],
      MLU_0611: ["9"],
      PLU_0611: ["10"],
      PLC_0611: ["10"],
      PERSON_LA: ["16"],
      LEASE_TYPE: ["3"],
      ASSET: ["999"],
      SECTOR: ["7", "9"],
      VEHICLE: ["900"],
      IND_R: ["20"],
      RELP: ["2"],
      ANCP: ["TOTP"],
      LANP: ["LOTE", "71", "52", "41", "65"],
      ENGLP: ["OTH", "SOL"],
      WORK: ["9"],
      TYPE_WORK: ["9"],
      BUILDING_TYPE: ["999", "100", "200", "300", "400", "700", "800"],
      TYPE_BLDG: ["999", "100", "200", "300", "400", "700", "800"],
      PLURALITY: ["SX_6"]
    },
    blacklist: {
      MGT_PRACTICE: ["HEADER_.+"]
    },
    whitelist: {
      FMCF: ["TOT", "[1-3]", "9"],
      STRD: ["TOT", "OPD", "[1-3]", "9", "11", "Z", "UPD"],
      LFSP: ["TOT", "EMP", "[1-4]", "7", "Z", "UEMP"],
      MTWP: [
        "TOT",
        "[1-3]M",
        "00[1-9]",
        "010",
        "011",
        "232",
        "TA",
        "BA",
        "B2",
        "233",
        "234",
        "Z"
      ],
      TYPP: ["TOT", "10", "2", "3", "40", "50", "60", "Z", "V"],
      FMCF_INCC: [".*_.*"],
      IND: ["-"],
      ANCP_2016: ["TOT", "[0-9]{4}"],
      BPLP_2016: ["TOT", "[0-9]{4}"],
      RELP_2016: ["TOT", "[0-9]{4}"],
      LANP_2016: ["TOT", "[0-9]{4}"],
      FMCF_2016: ["TOT", "[0-9]{4}"],
      HHCD_2016: ["TOT", "[0-9]{3}"],
      "": ["A[0-9]+", "T.*", "O.*"],
      BUILDING_TYPE: ["999", "100", "110", "700", "800", "850"],
      TYPE_BLDG: ["999", "100", "110", "700", "800", "850"]
    },
    regionType: "ste",
    selectedInitially: {
      COB: ["1101"],
      DT: ["2"],
      STATE: ["1", "2", "3", "4", "5", "6", "7", "8"],
      ASGS_2011: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }
  },
  {
    name: "Land Management Practices Survey 2013-2014",
    type: "sdmx-json",
    rectangle: [109, -45, 158, -8],
    cacheDuration: "300s",
    sortValues: "id",
    showWarnings: false,
    cleanFootnotes: true,
    forceShowDimensionIds: ["MEASURE"],
    url: "http://stat.data.abs.gov.au/sdmx-json/data/ABS_LAMPS2014",
    description:
      "This dataset presents detailed information on agricultural land management practices used on Australian farms, using data collected from the 2013-2014 Land Management Practices Survey (LaMPS). Explanatory notes are available [here](http://www.abs.gov.au/Ausstats/abs@.nsf/Previousproducts/4627.0Explanatory%20Notes12013-14). \n\nNote that ACT is included in the NSW figures.\n\n<br/>You can view this data, along with explanations of the meaning of terms, on the ABS.Stat website [here](http://stat.data.abs.gov.au/Index.aspx?DatasetCode=ABS_LAMPS2014).  Click on the _i_ symbols on that page for further information and links. Please note that ABS.Stat beta is continuing to be developed. Data will be updated as soon as possible following its 11:30 am release on the ABS website.",
    singleValuedDimensionIds: ["MEASURE", "MGT_PRACTICE"],
    totalValueIds: {
      "*": ["TOT", "LFTOT"],
      SPC: ["TT"],
      MTWP: ["1M", "2M", "3M"],
      FMCF: ["CF", "1", "2", "3"],
      POUR: ["TOT", "1", "2", "2_0", "2_11"],
      UAI1P: ["TOT", "2", "2_S", "2_D"],
      LFSP: ["TOT", "EMP", "UEMP"],
      FAMILY_TYPE: ["6"],
      HH_TYPE: ["4"],
      LEN: ["99"],
      INFANT_AGE: ["IMTOT"],
      DLC_11NC: ["210", "205"],
      DLC_11: ["T"],
      ANZIC: ["01", "TOTAL"],
      LU_11NC: ["210", "205"],
      LU_11: ["T"],
      LENDER: ["99"],
      INDUSTRY: ["-1", "T", "-"],
      SITC_REV3: ["-1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      COUNTRY: ["-"],
      STRD_BEDRD: ["._TOT"],
      FMCF_INCC: ["TOT_TOT"],
      DEPOSIT_TYPE: ["6"],
      MINERAL_TYPE: ["11"],
      MLU_0611: ["9"],
      PLU_0611: ["10"],
      PLC_0611: ["10"],
      PERSON_LA: ["16"],
      LEASE_TYPE: ["3"],
      ASSET: ["999"],
      SECTOR: ["7", "9"],
      VEHICLE: ["900"],
      IND_R: ["20"],
      RELP: ["2"],
      ANCP: ["TOTP"],
      LANP: ["LOTE", "71", "52", "41", "65"],
      ENGLP: ["OTH", "SOL"],
      WORK: ["9"],
      TYPE_WORK: ["9"],
      BUILDING_TYPE: ["999", "100", "200", "300", "400", "700", "800"],
      TYPE_BLDG: ["999", "100", "200", "300", "400", "700", "800"],
      PLURALITY: ["SX_6"]
    },
    blacklist: {
      MGT_PRACTICE: ["HEADER_.+"]
    },
    whitelist: {
      FMCF: ["TOT", "[1-3]", "9"],
      STRD: ["TOT", "OPD", "[1-3]", "9", "11", "Z", "UPD"],
      LFSP: ["TOT", "EMP", "[1-4]", "7", "Z", "UEMP"],
      MTWP: [
        "TOT",
        "[1-3]M",
        "00[1-9]",
        "010",
        "011",
        "232",
        "TA",
        "BA",
        "B2",
        "233",
        "234",
        "Z"
      ],
      TYPP: ["TOT", "10", "2", "3", "40", "50", "60", "Z", "V"],
      FMCF_INCC: [".*_.*"],
      IND: ["-"],
      ANCP_2016: ["TOT", "[0-9]{4}"],
      BPLP_2016: ["TOT", "[0-9]{4}"],
      RELP_2016: ["TOT", "[0-9]{4}"],
      LANP_2016: ["TOT", "[0-9]{4}"],
      FMCF_2016: ["TOT", "[0-9]{4}"],
      HHCD_2016: ["TOT", "[0-9]{3}"],
      "": ["A[0-9]+", "T.*", "O.*"],
      BUILDING_TYPE: ["999", "100", "110", "700", "800", "850"],
      TYPE_BLDG: ["999", "100", "110", "700", "800", "850"]
    },
    regionDimensionId: "REGION_ACZ",
    regionType: "ste",
    selectedInitially: {
      COB: ["1101"],
      DT: ["2"],
      STATE: ["1", "2", "3", "4", "5", "6", "7", "8"],
      ASGS_2011: ["1", "2", "3", "4", "5", "6", "7", "8"]
    }
  }
];
