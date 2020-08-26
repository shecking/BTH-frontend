import React, { Component } from 'react'
// import '../index.scss'

import GameContainer from '../containers/GameContainer'

class HomePage extends Component {
  render () {
    return (
      <div>
        <div className='App'>
          <GameContainer />
        </div>
      </div>
    )
  }
}

export default HomePage
