const UserProfileType = require ('./user_profile_type')
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    userProfile: {
      type: UserProfileType,
        resolve(parentValue) {
          console.log('word')
        }
    }
  })
})
module.exports = UserType;
