// From drought-map

module.exports = {
  name: "Australian Landscape Water Balance",
  type: "group",
  items: [
    {
      id: "81edea39",
      name: "Lower soil moisture, month-to-date",
      layers: "ss_pct",
      url:
        "http://www.bom.gov.au/jsp/awra/thredds/wms/AWRACMS/deciles/month/ss_pct.nc",
      cacheDuration: "1m",
      type: "wms",
      legendUrl: "data/legends/Lower_soil_moisture.png",
      ignoreUnknownTileErrors: true,
      supportsColorScaleRange: false,
      disableUserChanges: true,
      parameters: {
        styles: "boxfill/redbluedeciles",
        colorscalerange: "0,1"
      },
      opacity: 0.75,
      description:
        "Lower Soil Moisture estimate represents the percentage of available water content between 10 cm and 100 cm in the soil profile. The maximum storage within the soil layer is calculated from the depth of the soil and the relative soil water storage capacity. The soil properties that control the storage of water are derived from the continental scale mapping within Australian Soil Resources Information System (Johnston et al., 2003). The relative available water capacity of the lower soil layer is derived from ASRIS information as the available water capacity of a layer divided by its thickness. Pedotransfer functions are used to relate soil hydraulic properties to soil textural class. Soil drainage and moisture dynamics are then based on water balance considerations for each soil layer. The shallow and deep rooted vegetation can draw on this Lower Soil Moisture layer. <p> Actual soil moisture grids estimate the percentage of available water content rather than total soil water volume. Relative soil moisture grids, like the other grids, represent the long term deciles. </p>"
    },
    {
      id: "d4951b1a",
      name: "Lower soil moisture, year-to-date",
      layers: "ss_pct",
      url:
        "http://www.bom.gov.au/jsp/awra/thredds/wms/AWRACMS/deciles/year/ss_pct.nc",
      cacheDuration: "1m",
      type: "wms",
      legendUrl: "data/legends/Lower_soil_moisture.png",
      ignoreUnknownTileErrors: true,
      supportsColorScaleRange: false,
      disableUserChanges: true,
      parameters: {
        styles: "boxfill/redbluedeciles",
        colorscalerange: "0,1"
      },
      opacity: 0.75,
      description:
        "Lower Soil Moisture estimate represents the percentage of available water content between 10 cm and 100 cm in the soil profile. The maximum storage within the soil layer is calculated from the depth of the soil and the relative soil water storage capacity. The soil properties that control the storage of water are derived from the continental scale mapping within Australian Soil Resources Information System (Johnston et al., 2003). The relative available water capacity of the lower soil layer is derived from ASRIS information as the available water capacity of a layer divided by its thickness. Pedotransfer functions are used to relate soil hydraulic properties to soil textural class. Soil drainage and moisture dynamics are then based on water balance considerations for each soil layer. The shallow and deep rooted vegetation can draw on this Lower Soil Moisture layer. <p> Actual soil moisture grids estimate the percentage of available water content rather than total soil water volume. Relative soil moisture grids, like the other grids, represent the long term deciles. </p>"
    },
    {
      id: "fa31eee8",
      name: "Rainfall, month-to-date",
      layers: "rain_day",
      url:
        "http://www.bom.gov.au/jsp/awra/thredds/wms/AWRACMS/deciles/month/rain_day.nc",
      cacheDuration: "1m",
      type: "wms",
      legendUrl: "data/legends/Precipitation.png",
      ignoreUnknownTileErrors: true,
      supportsColorScaleRange: false,
      disableUserChanges: true,
      parameters: {
        styles: "boxfill/redbluedeciles",
        colorscalerange: "0,1"
      },
      opacity: 0.75,
      description:
        "Daily precipitation grids are produced by the Bureau from approximately 6,500 rain gauge stations and interpolated to a 0.05 degree (approximately 5 x 5 km) national grid (Jones et al. 2009). Precipitation is an input into the AWRA-L model. The estimates are subject to approximations associated with interpolating observation point data to a national grid detailed in Jones et al. (2009). The precipitation input to the AWRA-L model are the near real time daily grids available at www.bom.gov.au/climate/maps. The monthly and annual precipitation is simply an aggregation of the near real time daily grids input to the AWRA-L model. Monthly grids that include additional rain gauge stations and rainfall observations (that are not available in near real time) can be found at www.bom.gov.au/climate/maps"
    },
    {
      id: "9c3c9a87",
      name: "Rainfall, year-to-date",
      layers: "rain_day",
      url:
        "http://www.bom.gov.au/jsp/awra/thredds/wms/AWRACMS/deciles/year/rain_day.nc",
      cacheDuration: "1m",
      type: "wms",
      legendUrl: "data/legends/Precipitation.png",
      ignoreUnknownTileErrors: true,
      supportsColorScaleRange: false,
      disableUserChanges: true,
      parameters: {
        styles: "boxfill/redbluedeciles",
        colorscalerange: "0,1"
      },
      opacity: 0.75,
      description:
        "Daily precipitation grids are produced by the Bureau from approximately 6,500 rain gauge stations and interpolated to a 0.05 degree (approximately 5 x 5 km) national grid (Jones et al. 2009). Precipitation is an input into the AWRA-L model. The estimates are subject to approximations associated with interpolating observation point data to a national grid detailed in Jones et al. (2009). The precipitation input to the AWRA-L model are the near real time daily grids available at www.bom.gov.au/climate/maps. The monthly and annual precipitation is simply an aggregation of the near real time daily grids input to the AWRA-L model. Monthly grids that include additional rain gauge stations and rainfall observations (that are not available in near real time) can be found at www.bom.gov.au/climate/maps"
    }
  ]
};
