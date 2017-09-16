import React, { Component } from 'react'

class UserProfile extends Component {
  render () {
    const { user, loading } = this.props.data
    console.log('user props: ', this.props);
    if (!this.props.data.loading) {
      // console.log('user props data: ', this.props.data.user.firstName);
    }
    return (
      <div>
        {!loading &&
          <p>Hello {user.firstName}</p>
        }
      </div>
    )
  }
}

export default UserProfile
