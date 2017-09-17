import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, hashHistory, Route, Index } from 'react-router'
import App from './main/App'
import LoginForm from './auth/LoginForm'
import SignupForm from './auth/SignupForm'
import requireAuth from './auth/requireAuth'
import Dashboard from './main/Dashboard'
import UserProfile from './sections/UserProfile'
import UserProfileEdit from './sections/UserProfileEdit'


const networkInterface =createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
})

const Root = (props) => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='login' component={LoginForm} />
          <Route path='signup' component={SignupForm} />
          <Route path='dashboard' component={requireAuth(Dashboard)} />
          <Route path='user-profile' component={requireAuth(UserProfile)} />
          <Route path='user-profile-edit' component={requireAuth(UserProfileEdit)} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
