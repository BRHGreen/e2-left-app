import gql from 'graphql-tag'

export default gql`
  mutation UpdateProfile($userId: String!, $age: Int){
    updateProfile(userId: $userId, age: $age) {
      age
      userId
      id
    }
  }
`
