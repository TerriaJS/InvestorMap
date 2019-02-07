const getFromCatalogPath = require("../../getFromCatalogPath");
const externalCatalogs = require("./externalCatalogs");

function layersFromCatalog(catalog, group, layers) {
  return layers.map(layerName =>
    getFromCatalogPath(catalog, [group, layerName])
  );
}

function getAurinSocioeconomic() {
  const ret = [];
  ret.push(
    ...layersFromCatalog(
      externalCatalogs.aurin_socioeconomic,
      "Socio-Economic Indices",
      [
        "ABS Estimating Homelessness by LGA 2016",
        "ABS Estimating Homelessness by SA2 2016",
        "ABS SEIFA IEO by SA1 2016",
        "ABS SEIFA IEO by SA2 2016",
        "ABS SEIFA IER by SA1 2016",
        "ABS SEIFA IER by SA2 2016",
        "ABS SEIFA IRSAD by SA2 2016",
        "ABS SEIFA IRSD by SA1 2016",
        "ABS SEIFA IRSD by SA2 2016",
        // 'NATSEM OECD Indicators: Synthetic Estimates SA2 2016',
        "NATSEM OECD Indicators: Synthetic Estimates SA2 2011",
        "NATSEM Social and Economic Indicators: Dependency Rate SA2 2016",
        "NATSEM Social and Economic Indicators: Employment Rate SA2 2016",
        "NATSEM Social and Economic Indicators: Indigenous Indicators SA2 2016",
        "NATSEM Social and Economic Indicators: Migration Rate SA2 2016",
        "NATSEM Social and Economic Indicators: Synthetic Estimates SA2 2016",
        "NATSEM Social and Economic Indicators: Unemployment Rate SA2 2016",
        "NATSEM Social and Economic Indicators: Volunteering SA2 2016"
      ]
    )
  );

  ret.push(
    ...layersFromCatalog(
      externalCatalogs.aurin_vulnerability,
      "Vulnerability Indicators",
      [
        "NATSEM Trust Indicators: Synthetic Estimates SA2 2016",
        "VAMPIRE SA1 2016"
      ]
    )
  );
  ret.push(
    ...layersFromCatalog(
      externalCatalogs.aurin_wellbeing,
      "Health and Wellbeing",
      ["NATSEM Health and Wellbeing Indicators: Synthetic Estimates SA2 2016"]
    )
  );
  ret.push({
    type: "group",
    name: "Population Density",
    items: layersFromCatalog(
      externalCatalogs.aurin_population_density,
      "Population Density",
      [
        "ABS G01 Population Density by SA1 2016",
        "ABS Population Density by Mesh Block 2016"
      ]
    )
  });
  return ret;
}

const socialAndEconomic = getFromCatalogPath(externalCatalogs.nationalmap, [
  "National Datasets",
  "Social and Economic"
]);

const socioeconomicIndicesGroup = socialAndEconomic.items.find(i =>
  i.name.match(/Socio-Economic Indices/i)
);

const absItemRenames = {
  'by Local Government Area'     : 'ABS SEIFA by LGA 2011',
  'by Postal Area Code'          : 'ABS SEIFA by Postal Area 2011',
  'by State Suburb Code'         : 'ABS SEIFA by State Suburb 2011',
  'by Statistical Area (level 2)': 'ABS SEIFA by SA2 2011',
}
socioeconomicIndicesGroup.items.forEach(item => {
  item.name = absItemRenames[item.name] || item.name;
});

socioeconomicIndicesGroup.items.push(...getAurinSocioeconomic());

module.exports = socialAndEconomic;
