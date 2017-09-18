import React, { Component } from 'react'


class AuthForm extends Component {

constructor(props) {
  super(props)
  this.state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
}

onSubmit (event) {
  event.preventDefault()
  const { firstName, lastName, email, password } = this.state
  this.props.onSubmit({ firstName, lastName, email, password })
}

  render () {
    const { location } = this.props
    return (
      <div className='row'>
        <form onSubmit={this.onSubmit.bind(this)} className='col s4'>
          {location === '/signup' &&
          <div>
            <div className='inputfield'>
              <input
                placeholder='firstName'
                value={this.state.firstName}
                onChange={e => this.setState({ firstName: e.target.value })}
              />
            </div>
            <div className='inputfield'>
              <input
                placeholder='lastName'
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value })}
              />
            </div>
          </div>
          }
          <div className='inputfield'>
            <input
              placeholder='email'
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div className='inputfield'>
            <input
            placeholder='password'
            type='password'
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
           />
          </div>
          <div>
            {this.props.errors.map(error => <div className='error' key={error}>{error}</div>)}
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AuthForm
