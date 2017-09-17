import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
// import  query from '../queries/fetchUserProfile'

class UserProfile extends Component {

  renderProfiles () {
    return this.props.data.userProfiles.map(({ age }, i) => {
      return (
        <li
          key={i}>
          age: {age}
        </li>
      )
    })
  }

  render () {
    const { user, loading } = this.props.data
    console.log('user props: ', this.props);
    return (
      <div>
        {!loading &&
        <div>
          {user &&
            <p>Hello {user.firstName}</p>
          }
          <ul>
            {this.renderProfiles()}
          </ul>
        </div>
        }
      </div>
    )
  }
}

// any query you define will be automatically invoked when the component renders
// The data returned from the query is accessable through the props obj
const query = gql`
{
  user {
    id
    firstName
    lastName
    email
  }
  userProfiles {
    age
  }
}
`

export default graphql(query)(UserProfile)
// export default UserProfile
