import gql from 'graphql-tag'

export default gql`
  query fetchUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      email
    }
  }
`
