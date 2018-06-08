import React, {Component} from 'react'
import {BackHandler} from 'react-native'
import {Provider}from 'react-redux'
import configureStore from './store'
import './config/global'
import App from './app'

const store = configureStore()

class Main extends Component {

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this._onBackPressed)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this._onBackPressed)
  }

  _onBackPressed = () => {
    return true
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Main