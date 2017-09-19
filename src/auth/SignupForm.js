import React, { Component } from 'react'
import AuthForm from './AuthForm'
import mutation from '../mutations/signup'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'
import { hashHistory } from 'react-router'

class SignupForm extends Component {

  constructor(props) {
    super(props)
    this.state = { errors: [] }
  }

  componentWillUpdate (nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
        hashHistory.push('/user-profile')
    }
  }

    onSubmit ({ firstName, lastName, email, password }) {
    this.props.mutate({
        variables: { firstName, lastName, email, password },
        refetchQueries: [{ query }]
    })
    .catch(res => {
      const errors = res.graphQLErrors.map(error => error.message)
      this.setState({ errors })
     })
  }

  render () {
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
          location={this.props.location.pathname}
        />
      </div>
    )
  }
}

export default graphql(query)(
  graphql(mutation)(SignupForm)
)
