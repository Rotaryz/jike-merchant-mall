import React from 'react'
import {Easing, Animated} from 'react-native'
import {createStackNavigator} from 'react-navigation'

import Home from '../page/home/home'
import TestNavigate from '../page/test-navigate/test-navigate'

const Navigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  TestNavigate: TestNavigate
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    gesturesEnabled: true,
  },
  mode: "card",
  headerMode: "screen",
  headerTransitionPreset: "uikit",
  transitionConfig: () => iOS ? ({}) : ({
    transitionSpec: {
      duration: 450,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps
      const {index} = scene

      const width = layout.initWidth
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      })
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      })
      return {opacity, transform: [{translateX: translateX}]}
    }
  })
})

export default Navigation