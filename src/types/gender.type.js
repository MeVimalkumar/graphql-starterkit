const { GraphQLEnumType } = require("graphql");

const GenderType = new GraphQLEnumType({
  name: "Gender",
  values: {
    male: { value: "male" },
    female: { value: "female" },
  },
});

module.exports = GenderType;
