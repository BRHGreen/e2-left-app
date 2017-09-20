const mongoose = require ('mongoose')
const UserProfileType = require ('./user_profile_type')
const UserProfile = mongoose.model('userProfile')
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
        resolve(parentValue, args) {
          console.log('parentValue: ', parentValue);
          console.log('args: ', args);
          return UserProfile.findUserProfile(parentValue.id)
        }
    }
  })
})
module.exports = UserType;
