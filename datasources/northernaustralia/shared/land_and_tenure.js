'use strict';

module.exports = { // Use tenure, and add extra items
  name: 'Land and Tenure',
  type: 'group',
  preserveOrder: true,
  items: [
    {
      "name": "Indigenous Land Use Agreement (NT)",
      "type": "wms",
      "url": "http://wms1.ntlis.nt.gov.au/ilismap",
      "layers": "56",
        "description": "More information about <a href=\"http://www.northernaustralialandtenure.com.au/how-do-i-engage-with-title-owners/northern-territory-information-on-engaging-with-traditional-owners-and-land-councils/#indigenous-land-use-agreements\">Indigenous Land Use Agreements (ILUA)</a>."
    },
    {
      "name": "Native Title Determination Outcomes",
      "type": "wms",
      "url": "http://data.gov.au/geoserver/native-title-determination-outcomes/wms",
      "layers": "ckan_54f906a3_2c6c_4143_bcb4_27d542429939",
      "description": "Native Title is a form of land title that recognises the traditional connection, rights and interests of Aboriginal and Torres Strait Islander people with the land. <br /><a href=\"http://www.northernaustralialandtenure.com.au/native-title/native-title-in-the-northern-territory/\">Read full explanation on the Austrade Site</a>",
      "featureInfoTemplate": "<h3>{{detoutcome}}</h3><table class=\"cesium-infoBox-defaultTable\"><tr><td>Name</td><td>{{name}}<br/>{{fcname}} ({{fcno}})</td></tr><tr><td>Prescribed body corporate</td><td>{{rntbcname}}</td></tr><tr><td>Sequence number</td><td>{{nnttseqno}}</td></tr><tr><td>Dates</td><td>{{detdate}} - {{detregdate}}</td></tr><tr><td>Link</td><td>{{link}}</td></tr><tr><td>Tribunal file number</td><td><a href=\"http://www.nntt.gov.au/searchRegApps/NativeTitleClaims/Pages/details.aspx?NTDA_Fileno={{relntda}}\">{{relntda}}</a></td></tr></table> <br /><a href=\"http://www.northernaustralialandtenure.com.au/native-title/native-title-in-the-northern-territory/\">Read full explanation on the Austrade Site</a>"
    },
    {
      name: 'APP_Northern_Australia_Land_Tenure_WM',
      type: 'esri-mapServer',
      url: 'http://services.ga.gov.au/site_13/rest/services/APP_Northern_Australia_Land_Tenure_WM/MapServer',
      layers: 'APP_Northern_Australia_Land_Tenure_WM',
      tokenUrl: '/esri-token-auth',
      hideSource: true
    },
    {
      name: 'Native Title Determinations',
      type: 'wms',
      url: 'http://data.gov.au/geoserver/native-title-determinations-national-native-title-register/wms?request=GetCapabilities',
      layers: 'ckan_ecdbbb6c_c374_4649_9cd3_0677f44182c9'
    },
    {
      name: 'Schedule of Native Title Determination Applications',
      type: 'wms',
      url: 'http://data.gov.au/geoserver/native-title-determination-applications-schedule/wms?request=GetCapabilities',
      layers: 'ckan_bcd428f6_484c_4527_8e66_19bcc0fd5402'
    },
    {
      name: 'Indigenous Land Use Agreements',
      type: 'wms',
      url: 'http://data.gov.au/geoserver/indigenous-land-use-agreements-registered-or-in-notification/wms?request=GetCapabilities',
      layers: 'ckan_9e837144_8070_4983_8bf0_15e7ceb56ed7'
    },
    {
      name: 'RATSIB Areas',
      type: 'wms',
      url: 'http://data.gov.au/geoserver/ratsib-boundaries/wms?request=GetCapabilities',
      layers: 'ckan_0d32262b_e13b_4475_adc6_3618811c029a'
    }
  ]
};