const mongoose = require('mongoose');
const graphql = require('graphql')
const UserType = require('./types/user_type')
const UserProfileType = require('./types/user_profile_type')
const AuthService = require('../services/auth')
const UserProfile = mongoose.model('userProfile');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} = graphql;

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { firstName, lastName, email, password }, req) {
          return AuthService.signup({ firstName, lastName, email, password, req })
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }
    },
    updateProfile: {
      type: UserProfileType,
      args: {
        userId: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        occupation: { type: GraphQLString },
        loveMeForever: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return (new UserProfile(args)).save()
      }
    },
    deleteUserProfile: {
      type: UserProfileType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return UserProfile.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
