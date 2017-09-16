import React from 'react'
import Header from './Header'

const App = (props) => {
  return (
    console.log('App props: ', props),
    <div>
      <Header />
      <div className='container'>
        {props.children}
      </div>
    </div>
  )
}

export default App
