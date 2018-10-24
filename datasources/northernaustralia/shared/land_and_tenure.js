"use strict";

const dgaNnttDatasets = [
  {
    name: "Native Title Determinations",
    type: "ckan-resource",
    url: "https://data.gov.au/",
    datasetId: "ecdbbb6c-c374-4649-9cd3-0677f44182c9"
  },
  {
    name: "Indigenous Land Use Agreements",
    type: "ckan-resource",
    url: "https://data.gov.au/",
    datasetId: "9e837144-8070-4983-8bf0-15e7ceb56ed7"
  },
  {
    name: "Native Title Determination Outcomes",
    type: "ckan-resource",
    url: "https://data.gov.au/",
    datasetId: "54f906a3-2c6c-4143-bcb4-27d542429939",
    itemProperties: {
      description:
        'Native Title is a form of land title that recognises the traditional connection, rights and interests of Aboriginal and Torres Strait Islander people with the land. <br /><a href="http://www.northernaustralialandtenure.com.au/native-title/native-title-in-the-northern-territory/">Read full explanation on the Austrade Site</a>',
      featureInfoTemplate:
        '<h3>{{detoutcome}}</h3><table class="cesium-infoBox-defaultTable"><tr><td>Name</td><td>{{name}}<br/>{{fcname}} ({{fcno}})</td></tr><tr><td>Prescribed body corporate</td><td>{{rntbcname}}</td></tr><tr><td>Sequence number</td><td>{{nnttseqno}}</td></tr><tr><td>Dates</td><td>{{detdate}} - {{detregdate}}</td></tr><tr><td>Link</td><td>{{link}}</td></tr><tr><td>Tribunal file number</td><td><a href="http://www.nntt.gov.au/searchRegApps/NativeTitleClaims/Pages/details.aspx?NTDA_Fileno={{relntda}}">{{relntda}}</a></td></tr></table> <br /><a href="http://www.northernaustralialandtenure.com.au/native-title/native-title-in-the-northern-territory/">Read full explanation on the Austrade Site</a>'
    }
  },
  {
    name: "Schedule of Native Title Determination Applications",
    type: "ckan-resource",
    url: "https://data.gov.au/",
    datasetId: "bcd428f6-484c-4527-8e66-19bcc0fd5402"
  },
  {
    name: "Register of Native Title Claims",
    type: "ckan-resource",
    url: "https://data.gov.au/",
    datasetId: "00602301-ad90-4657-abd9-8025d9bf485a"
  },
  {
    name: "Registered Native Title Body Corporate (RNTBC) Areas",
    type: "ckan-resource",
    url: "https://data.gov.au",
    datasetId: "c6c68892-cc2b-452c-8a9b-5cbfe201443f"
  },
  {
    name: "RATSIB Areas",
    type: "ckan-resource",
    url: "https://data.gov.au/",
    datasetId: "0d32262b-e13b-4475-adc6-3618811c029a"
  }
].map(m =>
  Object.assign({}, m, {
    allowCsv: false,
    allowCzml: false,
    allowEsriFeatureServer: false,
    allowEsriMapServer: true,
    allowGeoJson: false,
    allowKml: false,
    allowWfs: false,
    allowWms: true
  })
);

const austradeTenureDatasets = [
  {
    name: "Freehold",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Freehold/MapServer"
  },
  {
    name: "Crown land",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Crown_Land/MapServer"
  },
  {
    name: "Pastoral lease",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Pastoral_Land/MapServer"
  },
  {
    name: "Reserves",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Reserve/MapServer"
  },
  {
    name: "Convertible lease",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Convertible_Lease/MapServer"
  },
  {
    name: "Other lease",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Other_Lease/MapServer"
  },
  {
    name: "Secondary tenure type",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Secondary_Tenure/MapServer"
  },
  {
    name: "Unknown",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure_Unknown/MapServer"
  },
  {
    name: "Combined tenure map",
    type: "esri-mapServer",
    url:
      "http://prod-dmap-elb.gis.ga.gov.au/gis/rest/services/Australian_Land_Tenure/MapServer"
  }
].map(i =>
  Object.assign({}, i, {
    hideSource: true,
    tokenUrl: "/esri-token-auth"
  })
);

module.exports = {
  // Use tenure, and add extra items
  name: "Land and Tenure",
  type: "group",
  items: [
    ...dgaNnttDatasets,
    {
      name: "Indigenous Protected Areas",
      type: "esri-mapServer",
      url:
        "http://www.environment.gov.au/mapping/rest/services/digital_soe/soe2016_ovw1/MapServer"
    },
    ...austradeTenureDatasets
  ],
  preserveOrder: true
};
