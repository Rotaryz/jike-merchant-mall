import React from 'react'
import {createStackNavigator} from 'react-navigation'

import Home from '../page/home/home'

const Navigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
}, {
  initialRouteName: 'Home'
})

export default Navigation