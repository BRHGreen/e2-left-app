import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import fetchUserProfile from '../queries/UserProfile'

class UserProfile extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const { user, loading } = this.props.data
    console.log('user props: ', this.props);
    return (
      <div>
        {!loading &&
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

export default UserProfile
