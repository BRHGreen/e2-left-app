import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import CurrentUserQuery from '../queries/CurrentUser'
import { hashHistory } from 'react-router'


export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillRecieveProps (nextProps) {
      console.log('this props: ', this.props);
      console.log('next props: ', nextProps.data.user);
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push('/login')
      }
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
  return graphql(CurrentUserQuery)(RequireAuth)
}
