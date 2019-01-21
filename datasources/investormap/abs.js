module.exports = {
  type: "group",
  name: "Social and Economic",
  items: [
    {
      type: "group",
      name: "Labour Force",
      items: [
        // this item https://github.com/TerriaJS/InvestorMap/issues/170
        {
          type: "csv",
          name: "Employment by Industry",
          url: "data/abs/industryofemployment.csv",
          description:
            "A person’s industry of employment relates to the activities undertaken by the business for which they work. Where a person works in more than one job, the industry classification relates to their main job – the one in which they usually work the most hours. Data is presented as the percentage of the population residing in the LGA employed by an industry.",
          tableStyle: {
            format: { useGrouping: true },
            columns: {
              "LGA Name": { type: "HIDDEN" }
            }
          }
        }
      ]
    }
  ]
};
