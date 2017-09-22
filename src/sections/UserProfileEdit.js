import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import fetchUserProfileQuery from '../queries/fetchUserProfile'
// import fetchUser from '../queries/fetchUser'
import updateUser from '../mutations/updateUser'

class UserProfileEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      occupation: '',
      loveMeForever: ''
    }
  }

  onSubmit(event) {
    console.log('id: ', this.props.data.user.id);
    event.preventDefault()
    this.props.mutate({
      variables: {
        userId: this.props.data.user.id,
        age: this.state.age,
        occupation: this.state.occupation,
        loveMeForever: this.state.loveMeForever
       },
      // refetch takes 2 args: the query you want to re-run and the variables. You don't always have to pass in vars, in this case it's not necessary.
      refetchQueries: [{ query: fetchUserProfileQuery }]
    }).then(() => hashHistory.push('/user-profile'))
  }

  render () {
    const { user, loading } = this.props.data
    console.log('user edit props: ', this.props);
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
            placeholder='age'
            />
          <input
            onChange={event => this.setState({ occupation: event.target.value })}
            value={this.state.occupation}
            placeholder='occupation'
            />
          <input
            onChange={event => this.setState({ loveMeForever: event.target.value })}
            value={this.state.loveMeForever}
            placeholder='loveMeForever'
            />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default graphql(updateUser)(UserProfileEdit)
