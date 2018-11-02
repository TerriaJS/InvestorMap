"use strict";

const addDescriptionToGroups = require("../addDescriptionToGroups");
module.exports = {
  catalog: [
    {
      name: "All Data",
      type: "group",
      preserveOrder: true,
      items: [
        ...require("./resources_and_energy").items.filter(
          m => m.name !== "Soil"
        ),
        ...require("./tourism").items.filter(
          m => ["Infrastructure", "Social and Economic"].indexOf(m.name) < 0
        ),
        ...require("./agriculture_and_food").items.filter(
          m => ["Water", "Agriculture"].indexOf(m.name) >= 0
        ),
        require("./shared/soil"),
        require("./shared/satellite_imagery"),
        require("./shared/climate"),
        require("./shared/landscape_water")
      ]
    },
    addDescriptionToGroups(
      require("./resources_and_energy"),
      `
**Resources and Energy**

<img src="images/Resources%20and%20Energy.jpg" width="100%">

Australia’s vast mineral and petroleum resources underpin its status as a global leader in the resources and energy sector. Australia is home to an innovative mining equipment, technology and services sector and hosts some of the world’s leading mining, oil and gas conglomerates, offering investors excellent collaboration prospects and access to global supply chains.

Significant exploration opportunities in oil, gas and minerals, and a healthy pipeline of committed projects have generated a high level of demand for operations and maintenance solutions. Rising power prices and a commitment to a less carbon-intensive economy mean there is also a demand for renewables and energy efficient technologies.

These factors, combined with Australia’s proximity to the energy-hungry markets of Asia, the country’s rich intellectual capital and a supportive government, make Australia attractive to investors and new market entrants seeking sustainable, long-term returns.

**Comprehensive geoscience data**

Australia’s governments have developed major geoscience programs to provide explorers with pre-competitive information and datasets on brownfield and greenfield mineral provinces. Geophysical information, including regional gravity, deep seismic and high-resolution airborne magnetic data, is supplemented with geological maps, databases of geochemical and mineral occurrences and deposits, geographic information system (GIS) datasets, reports and interpretative products.

Geoscience Australia (www.geoscience.gov.au) provides an entry point to fundamental geoscience data and information. The site allows investors and explorers to access geoscience information at a national level and refines searches down to the regional and local level via pathways to the relevant state and territory datasets.
    `.trim()
    ),
    addDescriptionToGroups(
      require("./tourism"),
      `
**Tourism**

<img src="images/Tourism.jpg" width="100%">

Australia’s tourism industry has been identified as a growth sector due to our proximity to the fast growing economies in Asia, unique natural wonders and food and wine experiences that are among the best in the world. As one of the world's most transparent real estate markets and with strong growth in visitor numbers and trip spend, Australia’s tourism sector is attracting strong international investment interest.

Australia’s tourism sector boasts strong revenue from hotel accommodation, high occupancy rates, expanding aviation capacity and sustained growth in visitors forecast from emerging Asian markets. For information about extensive investment opportunities in Australia’s unique and dynamic tourism sector and an overview of the investment environment, visit Tourism Australia’s Tourism Investment website.
  `.trim()
    ),
    addDescriptionToGroups(
      require("./agriculture_and_food"),
      `
**Agriculture and Food**

<img src="images/Agriculture%20and%20Food.jpg" width="100%"/>

With global food demand booming, Australia is ideally placed to become a premium food supplier and a long-term partner of choice in food security. To help its agribusiness and food sector scale-up and make the most of growth opportunities, Australia is keen to attract investment in innovation, agriculture production incorporating food and fibre products, and advanced food processing.

As an island continent with strong biosecurity regulations, Australia’s agribusiness and food sector is renowned for clean, green and safe production. Leveraging established connections with Asia, Australia provides investors with unparalleled opportunities to capitalise on the demand from fast-growing consumer markets for healthy, premium and convenient food products.

As a major agricultural producer, Australia offers potential investors access to high-quality raw inputs and the skills and capabilities needed to undertake world-class research and development (R&D).

**Delivering innovative and premium products for fast-growing global markets**

Although Australia accounts for less than three per cent of global food trade, its advanced agricultural sector produces a healthy surplus – enough to feed three times the country’s population. Australia’s produce is exported worldwide: from traceable raw commodities such as wheat and beef, to sophisticated premium goods such as infant nutritional formula, wines, confectionery and cheese. Australia has a strong history of agricultural and food R&D that has fostered cutting-edge farming techniques and technologies and a sophisticated use of biotechnology. This tradition is built on: › success in farming the world’s driest inhabited continent, through technology innovation and ability to adapt production systems › excellent agricultural R&D – Australia’s plant, animal and agricultural scientists rank among the best in the world › expertise and strength in human health and nutrition research › robust regulatory protection with consistent standards in quarantine, food safety and food labelling. International investment in Australia’s agriculture and food is growing as Australia capitalises on the high demand for its safe, premium food products and creates stronger ties into regional supply chains.
    `.trim()
    )
  ],
  corsDomains: [
    "programs.communications.gov.au",
    "mapsengine.google.com",
    "dea.ga.gov.au"
  ],
  homeCamera: {
    west: 109,
    east: 158,
    north: -8,
    south: -45
  },
  baseMapName: "Bing Maps Aerial with Labels"
};
