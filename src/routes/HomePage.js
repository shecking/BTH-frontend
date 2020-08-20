import React, { Component } from 'react'
// import '../index.scss'

import HouseContainer from '../containers/HouseContainer'
import BoxerContainer from '../containers/BoxerContainer'

class HomePage extends Component {
  render () {
    return (
      <div>
        <div className='App'>
          <HouseContainer />
          <BoxerContainer />
        </div>
      </div>
    )
  }
}

export default HomePage
