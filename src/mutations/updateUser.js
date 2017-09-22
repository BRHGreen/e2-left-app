import gql from 'graphql-tag'

export default gql`
  mutation UpdateProfile($userId: String!, $age: Int, $occupation: String, $loveMeForever: String){
    updateProfile(userId: $userId, age: $age, occupation: $occupation, loveMeForever: $loveMeForever ) {
      age
      occupation
      loveMeForever
      userId
      id
    }
  }
`
