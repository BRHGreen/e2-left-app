const graphql = require('graphql');
const UserType = require('./user_type')
const UserProfileType = require('./user_profile_type')
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
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return UserProfileType.findById(id)
      }
    }
  })
});

module.exports = RootQueryType
