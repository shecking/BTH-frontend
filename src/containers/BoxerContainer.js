import React, { Component } from 'react'
import '../index.scss'

import Dice from '../components/Dice/Dice'

class BoxerContainer extends Component {
  constructor () {
    super()
    // Describing the initial state of the boxer dice
    this.state = {
      pips: [0, 0, 0, 0],
      hold: [false, false, false, false],
      user: null,
      msgAlerts: []
    }
  }

  rollDice = () => {
    const newPips = [...this.state.pips]
    for (let i = 0; i < 4; i++) {
      if (!this.state.hold[i]) {
        const num = Math.floor(Math.random() * 6)
        newPips[i] = num
      }
    }
    this.setState({ pips: newPips })
  }

  toggleDiceHold = (id) => {
    const holds = this.state.hold
    holds[id] = !holds[id]
    this.setState({ hold: holds })
    // console.log for testing
    // if (this.state.hold[id]) {
    //   console.log(this.state.hold, 'die held')
    // } else {
    //   console.log(this.state.hold, 'die freed')
    // }
  }

  render () {
    return (
      <div className='boxer-container'>
        <h3>These are the boxer&apos;s dice</h3>
        <button onClick={this.rollDice}>Roll</button>
        <div className='boxer-dice'>
          <div className='boxer-column'>
            <Dice id={0} pips={this.state.pips[0]} hold={this.state.hold[0]} toggleDiceHold={this.toggleDiceHold}/>
          </div>
          <div className='boxer-column'>
            <Dice id={1} pips={this.state.pips[1]} hold={this.state.hold[1]} toggleDiceHold={this.toggleDiceHold}/>
          </div>
          <div className='boxer-column'>
            <Dice id={2} pips={this.state.pips[2]} hold={this.state.hold[2]} toggleDiceHold={this.toggleDiceHold}/>
          </div>
          <div className='boxer-column'>
            <Dice id={3} pips={this.state.pips[3]} hold={this.state.hold[3]} toggleDiceHold={this.toggleDiceHold}/>
          </div>
        </div>
      </div>
    )
  }
}

export default BoxerContainer
