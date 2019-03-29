const findItemsMatchingName = require("../../findItemsMatchingName");

const externalCatalogs = require("./externalCatalogs");

const bomLicensingSection = layerName => ({
  name: "Licensing, Terms & Conditions",
  content: `
The visualisation of ${layerName} on the Map is attributed to the Commonwealth of Australia acting through the Bureau of Meteorology.

The Bureau of Meteorology grants CSIRO Data61 a non-transferable, non-exclusive licence to make the ${layerName} data available on the Map.<br/>
If visitors of the website are interested in sourcing the raw data from which the service is derived, they should contact the Bureau of Meteorology directly via: http://www.bom.gov.au/climate/data-services/data-requests.shtml

Below is an extract from the “Express Licence Agreement (ELA) between CSIRO Data61 and the Commonwealth, represented by the Bureau of Meteorology.

“The Bureau grants the User (CSIRO Data61) a non-transferable, non-exclusive worldwide licence to use, copy, modify and supply the Material for the Purpose set out in the Licence Schedule only.<br/>
If not excluded in the Licence Schedule, the User (CSIRO Data61) may supply Material to third parties. Any supply may only be as part of a User product.<br/>
The Bureau of Meteorology provided the Material ‘as is’ and CSIRO Data61 assumes the risk of interpreting, applying and relying upon the Material. To the maximum permitted by the law:<br/>
<ol type="a">
<li>The Bureau does not give any representation or warranty of any kind of the availability, accuracy, currency, completeness, quality or reliability of the Material, that the Material will be fit for any purpose or will not infringe third party Intellectual Property rights;</li>
<li>The Bureau is not in any way liable to the User for any liability, loss, cost, damage or expense suffered by the User, or any other person, due to the use or possession of the Material, or the exercise of any rights under this ELA;</li>
<li>The Bureau’s liability to the User for a breach of any statutory condition or warranty that cannot be excluded is limited to, at the Bureau’s discretion and where permitted by law, the replacement of the Material or the payment of the cost of replacing the Material.</li>
</ol>

Additional information about the data and its licensing conditions available from the Bureau of Meteorology: http://www.bom.gov.au/climate/data-services/data-requests.shtml
  `
});

module.exports = {
  type: "group",
  name: "Climate",
  items: [
    {
      type: "group",
      name: "Rainfall",
      preserveOrder: true,
      items: [
        {
          name: "Monthly rainfall 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "bom:monthly_rainfall",
          dataCustodian:
            "Bureau of Meteorology: http://www.bom.gov.au/climate/data-services/data-requests.shtml",
          description: `Data service visualisation of high resolution monthly rainfall gridded data from 1910 onwards provided by the Bureau of Meteorology. The grids show the rainfall values across Australia in the form of two-dimensional array data. The data extends from 1910 onwards. North Bounding Latitude: -9.975; South Bounding Latitude: -44.525; East Bounding Longitude: 156.275; West Bounding Longitude: 111.975.
<br/>
The analysis (grids) used for the service production are computer generated using a sophisticated analysis technique. It incorporates an optimised Barnes successive correction technique that applies a weighted averaging process to the station data. Topographical information is included by the use of rainfall ratio (actual rainfall divided by monthly average) in the analysis process.

On the maps each grid-point represents a rectangular area with sides 0.05⁰ latitude by 0.05⁰ longitude (approximately 5km by 5km). The size of the grids is limited by the data density across Australia.

This grid-point analysis technique provides an objective average for each grid square and enables useful estimates in data-sparse areas such as central Australia. However, in data-rich areas such as southeast Australia or in regions with strong gradients, “data smoothing” will occur resulting in grid-point values that may differ slightly from the exact rainfall amount measured at the contributing stations.
<br/>
The observational (station) data on which the analyses were based have an associated accuracy of the order of 0.01 degrees (approximately 1km) or better.

Note: The gridded data shown over ocean areas are statistical artefacts of the analysis scheme and not actual rainfall values`,
          info: [
            bomLicensingSection("Monthly rainfall 1910-2017"),
            {
              name: "Service Contact",
              content: "info@terria.io"
            }
          ],
          featureInfoTemplate: {
            formats: {
              GRAY_INDEX: { maximumFractionDigits: 2 }
            },
            name: "{{#GRAY_INDEX}}{{GRAY_INDEX}} mm{{/GRAY_INDEX}}",
            template: "{{#GRAY_INDEX}}{{GRAY_INDEX}} mm{{/GRAY_INDEX}}"
          }
        },
        {
          name: "Annual rainfall 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "bom:annual_rainfall",
          dataCustodian:
            "Bureau of Meteorology: http://www.bom.gov.au/climate/data-services/data-requests.shtml",
          description: `Data service visualisation of high resolution annual rainfall gridded data from 1910 onwards provided by the Bureau of Meteorology. The grids show the rainfall values across Australia in the form of two-dimensional array data. The data extends from 1910 onwards. North Bounding Latitude: -9.975; South Bounding Latitude: -44.525; East Bounding Longitude: 156.275; West Bounding Longitude: 111.975.
<br/>
The analysis (grids) used for the service production are computer generated using a sophisticated analysis technique. It incorporates an optimised Barnes successive correction technique that applies a weighted averaging process to the station data. Topographical information is included by the use of rainfall ratio (actual rainfall divided by monthly average) in the analysis process.

On the maps each grid-point represents a rectangular area with sides 0.05⁰ latitude by 0.05⁰ longitude (approximately 5km by 5km). The size of the grids is limited by the data density across Australia.

This grid-point analysis technique provides an objective average for each grid square and enables useful estimates in data-sparse areas such as central Australia. However, in data-rich areas such as southeast Australia or in regions with strong gradients, “data smoothing” will occur resulting in grid-point values that may differ slightly from the exact rainfall amount measured at the contributing stations.
<br/>
The observational (station) data on which the analyses were based have an associated accuracy of the order of 0.01 degrees (approximately 1km) or better.

Note: The gridded data shown over ocean areas are statistical artefacts of the analysis scheme and not actual rainfall values`,
          info: [
            bomLicensingSection("Annual rainfall 1910-2017"),
            {
              name: "Service Contact",
              content: "info@terria.io"
            }
          ],
          featureInfoTemplate: {
            formats: {
              GRAY_INDEX: { maximumFractionDigits: 2 }
            },
            name: "{{#GRAY_INDEX}}{{GRAY_INDEX}} mm{{/GRAY_INDEX}}",
            template: "{{#GRAY_INDEX}}{{GRAY_INDEX}} mm{{/GRAY_INDEX}}"
          }
        },
        ...findItemsMatchingName(externalCatalogs.soe.catalog, "rainfall", true)
          .filter(item => item.name.indexOf("Lake Eyre") < 0)
          .map(fixProxyUrls)
      ]
    },
    {
      type: "group",
      name: "Temperature",
      preserveOrder: true,
      items: [
        {
          name: "Monthly minimum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "bom:monthly_minimum_temperature",
          dataCustodian:
            "Bureau of Meteorology: http://www.bom.gov.au/climate/data-services/data-requests.shtml",
          description: `Data service visualisation of high resolution monthly minimum temperature gridded datasets from 1910 onwards provided by the Bureau of Meteorology. The grids show the minimum temperatures values across Australia in the form of two-dimensional array data. The data extends from 1910 onwards. North Bounding Latitude: -9.975; South Bounding Latitude: -44.525; East Bounding Longitude: 156.275; West Bounding Longitude: 111.975.
<br/>
Gridded datasets were generated using a spline interpolated analysis. The grid point resolution of the data is 0.05 degrees (approx. 5km). All available temperature stations were used in the analyses, and the input station data underwent standard quality control. The observational (station) data on which the analyses were based have an associated accuracy of the order of 0.01 degrees (approximately 1km) or better.

Note: The gridded data shown over ocean areas are statistical artefacts of the analysis scheme and not actual temperature values.`,

          info: [
            bomLicensingSection("Monthly minimum temperature 1910-2017"),
            {
              name: "Service Contact",
              content: "info@terria.io"
            }
          ],
          featureInfoTemplate: {
            formats: {
              GRAY_INDEX: { maximumFractionDigits: 2 }
            },
            name: "{{#GRAY_INDEX}}{{GRAY_INDEX}} C{{/GRAY_INDEX}}",
            template: "{{#GRAY_INDEX}}{{GRAY_INDEX}} &deg;C{{/GRAY_INDEX}}"
          }
        },
        {
          name: "Monthly maximum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "bom:monthly_maximum_temperature",
          dataCustodian:
            "Bureau of Meteorology: http://www.bom.gov.au/climate/data-services/data-requests.shtml",
          description: `Data service visualisation of high resolution monthly maximum temperature gridded datasets from 1910 onwards provided by the Bureau of Meteorology. The grids show the maximum temperatures values across Australia in the form of two-dimensional array data. The data extends from 1910 onwards. North Bounding Latitude: -9.975; South Bounding Latitude: -44.525; East Bounding Longitude: 156.275; West Bounding Longitude: 111.975.
<br/>
Gridded datasets were generated using a spline interpolated analysis. The grid point resolution of the data is 0.05 degrees (approx. 5km). All available temperature stations were used in the analyses, and the input station data underwent standard quality control. The observational (station) data on which the analyses were based have an associated accuracy of the order of 0.01 degrees (approximately 1km) or better.

Note: The gridded data shown over ocean areas are statistical artefacts of the analysis scheme and not actual temperature values.`,
          info: [
            bomLicensingSection("Monthly maximum temperature 1910-2017"),
            {
              name: "Service Contact",
              content: "info@terria.io"
            }
          ],
          featureInfoTemplate: {
            formats: {
              GRAY_INDEX: { maximumFractionDigits: 2 }
            },
            name: "{{#GRAY_INDEX}}{{GRAY_INDEX}} C{{/GRAY_INDEX}}",
            template: "{{#GRAY_INDEX}}{{GRAY_INDEX}} &deg;C{{/GRAY_INDEX}}"
          }
        },
        {
          name: "Annual minimum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "bom:annual_minimum_temperature",
          dataCustodian:
            "Bureau of Meteorology: http://www.bom.gov.au/climate/data-services/data-requests.shtml",
          description: `Data service visualisation of high resolution annual minimum temperature gridded datasets from 1910 onwards provided by the Bureau of Meteorology. The grids show the minimum temperatures values across Australia in the form of two-dimensional array data. The data extends from 1910 onwards. North Bounding Latitude: -9.975; South Bounding Latitude: -44.525; East Bounding Longitude: 156.275; West Bounding Longitude: 111.975.

The analyses (grids) are computer generated using a sophisticated analysis technique. It incorporates an optimised Barnes successive correction technique that applies a weighted averaging process to the station data. Topographical information is included in the use of anomalies (departures from average) in the analysis process. On the maps each grid-point represents an approximately square area with sides of about 5km (0.05 degrees). The size of the grids is limited by the data density across Australia.

The grid-point analysis technique provides an objective average for each grid square and enables useful estimates in data-sparse areas such as central Australia, However, in data-rich areas such as southeast Australia or in regions with strong gradients, “data smoothing” will occur resulting in grid-point values that may differ slightly from the exact temperature measured at contributing stations.

The observational (station) data on which the analyses were based have an associated accuracy of the order of 0.01 degrees (approximately 1km) or better.

Note: The gridded data shown over ocean areas are statistical artefacts of the analysis scheme and not actual temperature values.`,
          info: [
            bomLicensingSection("Annual minimum temperature 1910-2017"),
            {
              name: "Service Contact",
              content: "info@terria.io"
            }
          ],
          featureInfoTemplate: {
            formats: {
              GRAY_INDEX: { maximumFractionDigits: 2 }
            },
            name: "{{#GRAY_INDEX}}{{GRAY_INDEX}} C{{/GRAY_INDEX}}",
            template: "{{#GRAY_INDEX}}{{GRAY_INDEX}} &deg;C{{/GRAY_INDEX}}"
          }
        },
        {
          name: "Annual maximum temperature 1910-2017",
          type: "wms",
          url: "http://geoserver.nationalmap.nicta.com.au/bom/wms",
          layers: "bom:annual_maximum_temperature",
          dataCustodian:
            "Bureau of Meteorology: http://www.bom.gov.au/climate/data-services/data-requests.shtml",
          description: `Data service visualisation of high resolution annual maximum temperature gridded datasets from 1910 onwards provided by the Bureau of Meteorology. The grids show the maximum temperatures values across Australia in the form of two-dimensional array data. The data extends from 1910 onwards. North Bounding Latitude: -9.975; South Bounding Latitude: -44.525; East Bounding Longitude: 156.275; West Bounding Longitude: 111.975.

The analyses (grids) are computer generated using a sophisticated analysis technique. It incorporates an optimised Barnes successive correction technique that applies a weighted averaging process to the station data. Topographical information is included in the use of anomalies (departures from average) in the analysis process. On the maps each grid-point represents an approximately square area with sides of about 5km (0.05 degrees). The size of the grids is limited by the data density across Australia.

The grid-point analysis technique provides an objective average for each grid square and enables useful estimates in data-sparse areas such as central Australia, However, in data-rich areas such as southeast Australia or in regions with strong gradients, “data smoothing” will occur resulting in grid-point values that may differ slightly from the exact temperature measured at contributing stations.

The observational (station) data on which the analyses were based have an associated accuracy of the order of 0.01 degrees (approximately 1km) or better.

Note: The gridded data shown over ocean areas are statistical artefacts of the analysis scheme and not actual temperature values.`,
          info: [
            bomLicensingSection("Annual maximum temperature 1910-2017"),
            {
              name: "Service Contact",
              content: "info@terria.io"
            }
          ],
          featureInfoTemplate: {
            formats: {
              GRAY_INDEX: { maximumFractionDigits: 2 }
            },
            name: "{{#GRAY_INDEX}}{{GRAY_INDEX}} C{{/GRAY_INDEX}}",
            template: "{{#GRAY_INDEX}}{{GRAY_INDEX}} &deg;C{{/GRAY_INDEX}}"
          }
        },
        ...findItemsMatchingName(
          externalCatalogs.soe.catalog,
          "temperature",
          true
        )
          .filter(
            item =>
              item.name.indexOf("Reef") < 0 && item.name.indexOf("MAR5") < 0
          )
          .map(fixProxyUrls)
      ]
    }
  ]
};

function fixProxyUrls(item) {
  // When NA has its own proxy at http://nationalmap.gov.au/northernaustralia/proxy, set this to false.
  const northernAustraliaMapUsesSlashProxy = true;
  if (!northernAustraliaMapUsesSlashProxy) {
    return item;
  }

  if (item.url.indexOf("proxy/") === 0) {
    return Object.assign({}, item, {
      url: "/" + item.url
    });
  }
  return item;
}
