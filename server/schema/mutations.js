const mongoose = require('mongoose');
const graphql = require('graphql')
const UserType = require('./types/user_type')
const UserProfileType = require('./types/user_profile_type')
const AuthService = require('../services/auth')
const UserProfile = mongoose.model('userProfile');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
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
        age: { type: GraphQLInt },
        occupation: { type: GraphQLString },
        loveMeForever: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return (new UserProfile(args)).save()
      }
    }
  }
});

module.exports = mutation;
