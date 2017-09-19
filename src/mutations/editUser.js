import gql from 'graphql-tag'

export default gql`
  mutation UpdateProfile($age: Int){
    updateProfile(age: $age) {
      age
    }
  }
`
`
