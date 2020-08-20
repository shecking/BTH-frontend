import React, { Component } from 'react'
// import '../index.scss'

import DiceImage from '../components/DiceImage/DiceImage'

class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      numberOfDice: null,
      rolls: [],
      rollSum: null,
      user: null,
      msgAlerts: []
    }
  }

  diceRoll = numberOfDice => {
    const rolls = []
    let rollSum = 0
    for (let i = 0; i < numberOfDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1
      rollSum += rolls[i]
    }
    this.setState({
      numberOfDice,
      rolls,
      rollSum
    })
  }

  render () {
    return (
      <div>
        <h1 className='title'>This is the homepage</h1>
        <div className="buttons">
          {[1, 2, 3, 4, 5].map(number => {
            const text = number === 1 ? 'die' : 'dice'
            return (
              <button
                key={number}
                onClick={() => this.diceRoll(number)}
                className='button'
              >
                {number} {text}
              </button>
            )
          })}
          <br/>
          {
            this.state.rolls.map((roll, index) => <DiceImage roll={roll} key={index} />)
          }
        </div>
      </div>
    )
  }
}

export default HomePage
