const mongoose = require('mongoose');
const graphql = require('graphql');
const UserType = require('./user_type')
const UserProfileType = require('./user_profile_type')
const UserProfile = mongoose.model('userProfile');
const {
   GraphQLObjectType,
   GraphQLID,
   GraphQLNonNull
 } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    },
    userProfile: {
      type: UserProfileType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return UserProfile.findById(id)
      }
    }
  })
});

module.exports = RootQueryType
