const mongoose = require('mongoose');
const graphql = require('graphql');
const UserType = require('./user_type')
const UserProfileType = require('./user_profile_type')
const UserProfile = mongoose.model('userProfile');
const User = mongoose.model('user');
const {
   GraphQLObjectType,
   GraphQLID,
   GraphQLNonNull,
   GraphQLList,
   GraphQLString
 } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      args: { id: { type: GraphQLID } },
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    },
    fetchUser: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id)
      }
    },
    userProfiles: {
      type: new GraphQLList(UserProfileType),
      resolve(parentValue, { id }) {
        return UserProfile.find({})
      }
    },
    fetchUserProfile: {
      type: UserProfileType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { id, userId }) {
        return UserProfile.findById(id)
      }
    }
  })
});

module.exports = RootQueryType
