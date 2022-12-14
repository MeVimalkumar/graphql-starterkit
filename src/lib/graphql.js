const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { createUserMutation } = require("../mutations/user.mutation");
const { UsersQuery } = require("../queries/user.query");

const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: UsersQuery,
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUserMutation,
  },
});

const graphqlSchema = new GraphQLSchema({
  query,
  mutation,
});

module.exports = graphqlSchema;
