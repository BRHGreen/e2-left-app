import gql from 'graphql-tag'

export default gql`
  mutation UpdateProfile($id: ID!, $age: Int){
    updateProfile(id: $id, age: $age) {
      age
      id
    }
  }
`
