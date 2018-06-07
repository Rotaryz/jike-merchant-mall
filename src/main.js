import React, {Component} from 'react'
import './config/global'
import App from './app'
import {Provider}from 'react-redux'
import configureStore from './store'

const store = configureStore()

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Main