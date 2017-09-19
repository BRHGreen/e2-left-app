import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import  fetchUserProfileQuery from '../queries/fetchUserProfile'

class UserProfile extends Component {

  onProfileDelete (id) {
    console.log('id:', id);
    this.props.mutate({ variables: { id } })
    // you should use the `.then...refetch` method as opposed to `refetchQueries: [{ query }]` function when it is asociated with another component. (at the time of writing you didn't really get this, porbs look it up.) It's something to do with whether or not the query comes in as a prop. It's covered in lecture 53 of react with gql. Using refetch on .then will work on anything though. If in doubt, use this method.
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
            >
            delete
          </i>
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
