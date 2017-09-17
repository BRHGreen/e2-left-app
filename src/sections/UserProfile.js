import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import  query from '../queries/fetchUserProfile'

class UserProfile extends Component {

  render () {
    const { user, loading } = this.props.data
    console.log('user profile: ', this.props);
    return (
      <div>
        {user &&
          <p>Hello {user.firstName}</p>
        }
      </div>
    )
  }
}

// export default graphql(fetchUserProfile,
//   options: (props) => { return {variables: } id: }
// )
// )

// export default graphql(mutation)(UserProfile)

export default graphql(query)(UserProfile)
// export default UserProfile
