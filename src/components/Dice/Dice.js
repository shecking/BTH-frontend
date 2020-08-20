import React, { Component } from 'react'

import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'

class Dice extends Component {
  holdDice = () => {
    this.props.toggleDiceHold(this.props.id)
  }

  render () {
    const diceImages = [one, two, three, four, five, six]
    return (
      <div className={`dice-container ${this.props.hold ? 'hold' : 'free'}`}>
        <button>
          <img src={diceImages[this.props.pips]} onClick={() => this.holdDice()} />
        </button>
      </div>
    )
  }
}

export default Dice
