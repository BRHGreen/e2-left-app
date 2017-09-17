const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} = graphql

const UserProfileType = new GraphQLObjectType({
  name: 'UserProfileType',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    age: {
      type: GraphQLInt
    },
    occupation: {
      type: GraphQLString
    },
    loveMeForever: {
      type: GraphQLString
    }
  })
})
module.exports = UserProfileType;
