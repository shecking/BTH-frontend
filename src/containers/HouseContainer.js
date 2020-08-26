import React, { Component } from 'react'

import Dice from '../components/Dice/Dice'

class HouseContainer extends Component {
  constructor () {
    super()
    // Describing the initial state of the house die
    this.state = {
      pips: [0],
      hold: [false],
      user: null,
      msgAlerts: []
    }
  }

  rollDie = () => {
    const newPips = [...this.state.pips]
    if (!this.state.hold[0]) {
      const num = Math.floor(Math.random() * 6)
      newPips[0] = num
    }
    this.setState({ pips: newPips })
  }

  // Hold logic (not needed for house die)
  toggleDiceHold = (id) => {
    const holds = this.state.hold
    holds[id] = !holds[id]
    this.setState({ hold: holds })
  }

  render () {
    return (
      <div className='house-container'>
        <h3>This is the house die</h3>
        <button onClick={this.rollDie}>Roll</button>
        <div className='house-die'>
          <div className='house-column'>
            <Dice id={0} pips={this.state.pips[0]} hold={this.state.hold[0]} toggleDiceHold={this.toggleDiceHold}/>
          </div>
        </div>
      </div>
    )
  }
}

export default HouseContainer
