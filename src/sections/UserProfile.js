import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
// import query from '../queries/UserProfile'

class UserProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      age: ''
    }
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.mutate({
      variables: { age: this.state.age }
    })
  }

  render () {
    const { user, loading } = this.props.data
    console.log('user props: ', this.props);
    if (!this.props.data.loading) {
    }
    return (
      <div>
        {!loading &&
          <p>Hello {user.firstName}</p>
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


export default graphql(mutation)(UserProfile)
