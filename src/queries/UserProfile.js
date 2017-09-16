import gql from 'graphql-tag'

export default gql`
query fetchUserProfile($id: ID!) {
  userProfile(id: $id) {
    id
    age
  }
}
`
