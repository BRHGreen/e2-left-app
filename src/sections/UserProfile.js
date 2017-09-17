import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import  fetchUserProfileQuery from '../queries/fetchUserProfile'

class UserProfile extends Component {

  onProfileDelete (id) {
    console.log('id:', id);
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch())
  }

  renderProfiles () {
    return this.props.data.userProfiles.map(({ id, age }, i) => {
      console.log('profile props: ', this.props);
      return (
        <li
          key={i}>
          age: {age}
          <i
            className='material-icons'
            onClick={() => this.onProfileDelete(id)}
            >delete</i>
        </li>
      )
    })
  }

  render () {
    const { user, loading } = this.props.data
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

const mutation = gql`
 mutation DeleteUserProfile ($id: ID) {
  deleteUserProfile(id: $id) {
    id
    age
  }
}
`

export default graphql(mutation)(
  graphql(fetchUserProfileQuery)(UserProfile)
)
