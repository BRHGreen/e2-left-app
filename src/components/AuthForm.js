import React, { Component } from 'react'


class AuthForm extends Component {

constructor(props) {
  super(props)
  this.state = { email: '', password: ''}
}

onSubmit (event) {
  event.preventDefault()
  const { email, password } = this.state
  this.props.onSubmit({ email, password })
}

  render () {
    console.log('error: ', this.props);
    return (
      <div className='row'>
        <form onSubmit={this.onSubmit.bind(this)} className='col s4'>
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
