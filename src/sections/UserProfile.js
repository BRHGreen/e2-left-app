import React, { Component } from 'react'

class UserProfile extends Component {
  render () {
    console.log('user props: ', this.props);
    return (
      <p>user profile</p>
    )
  }
}

export default UserProfile
