import React, { Component } from 'react'
// import '../index.scss'

import HouseContainer from './HouseContainer'
import BoxerContainer from './BoxerContainer'

class GameContainer extends Component {
  constructor () {
    super()
    // Describing the initial state of the game
    this.state = {
      round: 1,
      house: '',
      boxer: ''
    }
  }

  liftState = state => {
    this.setState(state)
  }

  render () {
    return (
      <div>
        <div className='game'>
          <HouseContainer />
          <BoxerContainer />
        </div>
      </div>
    )
  }
}

export default GameContainer
