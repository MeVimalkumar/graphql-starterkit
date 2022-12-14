const { GraphQLNonNull, GraphQLString } = require("graphql");
const { createUser } = require("../resolvers/user.resolvers");
const GenderType = require("../types/gender.type");
const UserType = require("../types/user.type");

const createUserMutation = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    gender: { type: new GraphQLNonNull(GenderType) },
  },
  resolve(parent, args) {
    return createUser(args);
  },
};

module.exports = { createUserMutation };
