module.exports = {
  "name": "Tenure and title",
  "type": "group",
  "items": [
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
      "name": "Convertible lease",
      "type": "wms",
      "url": "http://services.ga.gov.au/gis/services/Northern_Australia_Land_Tenure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      "layers": "CONVERTIBLE_LEASE",
      "description": "Leasehold land is a land holding that is leased to a person either by the government (as the Crown) or by a freeholdowner. However, it is critical to remember that, where applicable, all mineral rights are reserved to the Crown. <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/leasehold-land/\">Read full explanation on the Austrade Site</a>",
      "featureInfoTemplate": "<table class=\"cesium-infoBox-defaultTable\"><tr><td>Tenure type: </td><td>{{JURISDICTION_TENURE_TYPE_NAME}}<br/> ({{JURISDICTION_TENURE_TYPE_DESCRIPTION}})</td></tr><tr><td>Status</td><td>{{PARCEL_STATUS_NAME}}<br/>({{PARCEL_STATUS_DESCRIPTION}})</td></tr><tr><td>Jurisdiction ID:</td><td>{{JURISDICTION_ID}}</td></tr></tr></table> <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/leasehold-land/\">Read full explanation on the Austrade Site</a>",
      "hideSource": true
    },
    {
      "name": "Freehold",
      "type": "wms",
      "url": "http://services.ga.gov.au/gis/services/Northern_Australia_Land_Tenure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      "layers": "FREEHOLD",
      "description": "Freehold land (or fee simple) provides people with the most complete form of ownership of that land, in perpetuity. It allows the land holder to deal with the land including selling, leasing, licensing or mortgaging the land, subject to compliance with applicable laws such as planning laws. <br/><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/freehold-land/\">Read full explanation on the Austrade Site</a>",
      "featureInfoTemplate": "<table class=\"cesium-infoBox-defaultTable\"><tr><td>Tenure type: </td><td>{{JURISDICTION_TENURE_TYPE_NAME}}<br/> ({{JURISDICTION_TENURE_TYPE_DESCRIPTION}})</td></tr><tr><td>Status</td><td>{{PARCEL_STATUS_NAME}}<br/>({{PARCEL_STATUS_DESCRIPTION}})</td></tr><tr><td>Jurisdiction ID:</td><td>{{JURISDICTION_ID}}</td></tr></tr></table> <br/><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/freehold-land/\">Read full explanation on the Austrade Site</a>",
      "hideSource": true
    },
    {
      "name": "Crown land",
      "type": "wms",
      "url": "http://services.ga.gov.au/gis/services/Northern_Australia_Land_Tenure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      "layers": "CROWN_LAND",
      "description": "Crown Land is known as all land which is “remaining” that has not been converted as freehold title and is still held by the Crown. <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/crown-land/\">Read full explanation on the Austrade Site</a>",
      "featureInfoTemplate": "<table class=\"cesium-infoBox-defaultTable\"><tr><td>Tenure type: </td><td>{{JURISDICTION_TENURE_TYPE_NAME}}<br/> ({{JURISDICTION_TENURE_TYPE_DESCRIPTION}})</td></tr><tr><td>Status</td><td>{{PARCEL_STATUS_NAME}}<br/>({{PARCEL_STATUS_DESCRIPTION}})</td></tr><tr><td>Jurisdiction ID:</td><td>{{JURISDICTION_ID}}</td></tr></tr></table> <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/crown-land/\">Read full explanation on the Austrade Site</a>",
      "hideSource": true
    },
    {
      "name": "Reserves",
      "type": "wms",
      "url": "http://services.ga.gov.au/gis/services/Northern_Australia_Land_Tenure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      "layers": "RESERVE",
      "description": "Crown reserves are land set aside by the Government on behalf of the community for a wide range of public purposes, including sites for environmental and heritage protection, recreation and sport, open space, community halls, special events and government services. <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/reserves/\">Read full explanation on the Austrade Site</a>",
      "featureInfoTemplate": "<table class=\"cesium-infoBox-defaultTable\"><tr><td>Tenure type: </td><td>{{JURISDICTION_TENURE_TYPE_NAME}}<br/> ({{JURISDICTION_TENURE_TYPE_DESCRIPTION}})</td></tr><tr><td>Status</td><td>{{PARCEL_STATUS_NAME}}<br/>({{PARCEL_STATUS_DESCRIPTION}})</td></tr><tr><td>Jurisdiction ID:</td><td>{{JURISDICTION_ID}}</td></tr></tr></table><br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/reserves/\">Read full explanation on the Austrade Site</a>",
      "hideSource": true
    },
    {
      "name": "Pastoral lease",
      "type": "wms",
      "url": "http://services.ga.gov.au/gis/services/Northern_Australia_Land_Tenure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      "layers": "PASTORAL_LEASE",
      "description": "Pastoral Leases have been a significant land tenure type for the growth of the Australian agriculture industry. Pastoral leases cover approximately 44% of Australia’s mainland (338 million hectares) and are generally situated in arid and semi-arid regions and the tropical savannahs. <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/pastoral-leases#pastoral-leases-in-the-northern-territory\">Read full explanation on the Austrade Site</a>",
      "featureInfoTemplate": "<table class=\"cesium-infoBox-defaultTable\"><tr><td>Tenure type: </td><td>{{JURISDICTION_TENURE_TYPE_NAME}}<br/> ({{JURISDICTION_TENURE_TYPE_DESCRIPTION}})</td></tr><tr><td>Status</td><td>{{PARCEL_STATUS_NAME}}<br/>({{PARCEL_STATUS_DESCRIPTION}})</td></tr><tr><td>Jurisdiction ID:</td><td>{{JURISDICTION_ID}}</td></tr></tr></table><br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/pastoral-leases#pastoral-leases-in-the-northern-territory\">Read full explanation on the Austrade Site</a>",
      "hideSource": true
    },
    {
      "name": "Other lease",
      "type": "wms",
      "url": "http://services.ga.gov.au/gis/services/Northern_Australia_Land_Tenure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      "layers": "OTHER_LEASE",
      "description": "Leasehold land is a land holding that is leased to a person either by the government (as the Crown) or by a freehold owner. However, it is critical to remember that, where applicable, all mineral rights are reserved to the Crown. <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/leasehold-land/\">Read full explanation on the Austrade Site</a>",
      "featureInfoTemplate": "<table class=\"cesium-infoBox-defaultTable\"><tr><td>Tenure type: </td><td>{{JURISDICTION_TENURE_TYPE_NAME}}<br/> ({{JURISDICTION_TENURE_TYPE_DESCRIPTION}})</td></tr><tr><td>Status</td><td>{{PARCEL_STATUS_NAME}}<br/>({{PARCEL_STATUS_DESCRIPTION}})</td></tr><tr><td>Jurisdiction ID:</td><td>{{JURISDICTION_ID}}</td></tr></tr></table> <br /><a href=\"http://www.northernaustralialandtenure.com.au/land-tenure/leasehold-land/\">Read full explanation on the Austrade Site</a>",
      "hideSource": true
    },
    {
      "name": "Secondary tenure type",
      "type": "wms",
      "url": "http://services.ga.gov.au/gis/services/Northern_Australia_Land_Tenure/MapServer/WMSServer?request=GetCapabilities&service=WMS",
      "layers": "SECONDARY_TENURE_TYPE",
      "featureInfoTemplate": "<table class=\"cesium-infoBox-defaultTable\"><tr><td>Tenure type: </td><td>{{JURISDICTION_TENURE_TYPE_NAME}}<br/> ({{JURISDICTION_TENURE_TYPE_DESCRIPTION}})</td></tr><tr><td>Status</td><td>{{PARCEL_STATUS_NAME}}<br/>({{PARCEL_STATUS_DESCRIPTION}})</td></tr><tr><td>Jurisdiction ID:</td><td>{{JURISDICTION_ID}}</td></tr></tr></table>",
      "hideSource": true
    }
  ],
  "preserveOrder": true
};