import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
// import '../../index.scss'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

// import DiceImage from '../DiceImage/DiceImage'

import HomePage from '../../routes/HomePage'

class App extends Component {
  constructor () {
    super()

    this.state = {
      // numberOfDice: null,
      // rolls: [],
      // rollSum: null,
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  // diceRoll = numberOfDice => {
  //   const rolls = []
  //   let rollSum = 0
  //   for (let i = 0; i < numberOfDice; i++) {
  //     rolls[i] = Math.floor(Math.random() * 6) + 1
  //     rollSum += rolls[i]
  //   }
  //   this.setState({
  //     numberOfDice,
  //     rolls,
  //     rollSum
  //   })
  // }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Switch>
            <Route exact path='/' render={() => (
              <HomePage />
            )} />
            <Route path='/sign-up' render={() => (
              <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <Route path='/sign-in' render={() => (
              <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
            )} />
            <AuthenticatedRoute user={user} path='/sign-out' render={() => (
              <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
            )} />
            <AuthenticatedRoute user={user} path='/change-password' render={() => (
              <ChangePassword msgAlert={this.msgAlert} user={user} />
            )} />
          </Switch>
        </main>
        <Footer user={user} />
      </Fragment>
    )
  }
}

export default App
