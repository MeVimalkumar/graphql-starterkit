const { GraphQLList } = require("graphql");
const { getAllUser } = require("../resolvers/user.resolvers");
const GenderType = require("../types/gender.type");
const UserType = require("../types/user.type");

const UsersQuery = {
  type: new GraphQLList(UserType),
  args: {
    gender: { type: GenderType },
  },
  resolve(parent, { gender } = args) {
    const query = {};
    if (gender) {
      query.gender = gender;
    }
    return getAllUser(query);
  },
};

module.exports = { UsersQuery };
