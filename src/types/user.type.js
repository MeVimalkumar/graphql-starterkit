const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = require("graphql");
const GenderType = require("./gender.type");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: new GraphQLNonNull(GraphQLString) },
      gender: { type: new GraphQLNonNull(GenderType) },
    };
  },
});

module.exports = UserType;
