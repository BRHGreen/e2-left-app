import React, { Component } from 'react'

class UserProfile extends Component {
  render () {
    // const { firstName, lastName } = this.props.data.user
    console.log('user props: ', this.props);
    if (!this.props.data.loading) {
      console.log('user props data: ', this.props.data.user.firstName);
    }
    return (
      <div>
        {!this.props.data.loading &&
          <p>Hello {this.props.data.user.firstName}</p>
        }
      </div>
    )
  }
}

export default UserProfile
