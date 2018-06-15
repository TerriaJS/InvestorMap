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
        ...require("./tourism").items,
        ...require("./agriculture_and_food").items.filter(
          m => ["Water", "Agriculture"].indexOf(m.name) >= 0
        ),
        require("./shared/soil"),
        require("./shared/satellite_imagery"),
        require("./shared/climate")
      ]
    },
    addDescriptionToGroups(
      require("./resources_and_energy"),
      `
**Resources and Energy**

_Industrialisation and urbanisation within the Asia region will continue to drive demand for Australia’s natural resources._

<img src="images/Resources%20and%20Energy.jpg" width="100%">

Many parts of northern Australia are still unexplored and the region remains highly prospective, offering significant potential for future mineral discoveries. Northern Australia has significant potential for further world-class oil and gas discoveries.

Geoscience Australia estimates around 80 per cent of Australia remains under-explored for minerals - most of this unexplored land is in northern Australia.

Northern Australia contains over 70 per cent of Australia’s known resources of iron ore, lead and zinc. It also contains significant deposits of silver, copper, manganese, nickel, bauxite, tungsten, molybdenum and rare earths.

By 2020 northern Australia is destined to become the world’s largest exporter of Liquefied Natural Gas (LNG).

Northern Australia has world-class solar, wind and bioenergy resources. In remote and off-grid locations, there are significant opportunities for investment in renewable energy to help industry and remote communities to become more energy self-sufficient.
    `.trim()
    ),
    addDescriptionToGroups(
      require("./tourism"),
      `
**Tourism**

_Northern Australia includes many of Australia’s most recognisable tourism destinations and is home to World Heritage sites, including the Great Barrier Reef and Uluru._

<img src="images/Tourism.jpg" width="100%">

There are opportunities to invest in short-term accommodation, luxury lodges, camping facilities, and integrated resorts. There are also public-private partnership projects, including airports, cruise terminals and roads.

The Australian Government is determined to see northern Australia develop its full potential as a tourism destination and offers a Tourism Major Project Facilitation Service to help investors obtain faster and more streamlined approvals.

Australia is the eighth largest tourism market in the world and a major destination for business investment. Located in the world’s strongest tourism region and largest aviation market, Australia offers a secure and stable environment for tourism investors.
  `.trim()
    ),
    addDescriptionToGroups(
      require("./agriculture_and_food"),
      `
**Agriculture and Food**

_With food security a global issue as populations grow, northern Australia is developing as a low-risk supplier of clean, green agricultural commodities and niche high-value food and fibre products._

<img src="images/Agriculture%20and%20Food.jpg" width="100%">

Over the next 20 years northern Australian agriculture (including aquaculture) and food and fibre processing has significant potential to expand. Research and development will lead to greater yields and profitability, and will explore new products, production methods, technologies and broad innovation.

Northern Australia is an established producer of a wide variety of agriculture and food, but only uses a fraction of natural assets available for sustainable use. The scale of under-utilised natural assets offers compelling reasons for investors to examine Northern Australia’s expanded future role in regional food supply chains.
    `.trim()
    )
  ],
  corsDomains: ["programs.communications.gov.au", "mapsengine.google.com"],
  homeCamera: {
    west: 112,
    east: 153,
    north: -8,
    south: -27
  },
  baseMapName: "Australian Topography"
};
