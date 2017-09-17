import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import query from '../queries/fetchUserProfile'

class UserProfileEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: ''
    }
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.mutate({
      variables: { age: this.state.age },
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/user-profile'))
  }

  render () {
    const { user, loading } = this.props.data
    console.log('user props: ', this.props);
    return (
      <div>
        {!loading &&
          <p>Hello {user.firstName}, here you can edit your profile</p>
        }
        <h5>Tell us more about yourself</h5>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            onChange={event => this.setState({ age: event.target.value })}
            value={this.state.age}
            />
        </form>
      </div>
    )
  }
}

const mutation = gql `
  mutation updateProfile($age: Int){
    updateProfile(age: $age) {
      age
    }
  }
`

export default graphql(mutation)(UserProfileEdit)
