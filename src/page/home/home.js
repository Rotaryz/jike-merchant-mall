import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  TouchableOpacity
} from 'react-native'
import privateStyle from '../../style/privateStyle'
import mixins from '../../style/mixins'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
})

import { ACTION_APP } from '../../app'


type Props = {}
export default class Home extends Component<Props> {
  componentWillMount() {
    console.log(ACTION_APP)
  }
  _toast (text) {
    let data = {text, type: 'showError'}
    DeviceEventEmitter.emit('ACTION_APP', ACTION_APP.A_SHOW_TOAST, data)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('TestNavigate')}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity
          style={styles.text}
          onPress={() => this._toast('jjk')}
        >
          <Text>showSuccess</Text>
        </TouchableOpacity>
        <View style={privateStyle.borderTopStyle} ></View>
        <View>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <View style={mixins.buttomLine()}></View>
        </View>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: variable.colorTheme,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    position: 'relative',
  },
  instructions: {
    textAlign: 'center',
    // color: variable.colorTextDisable,
    marginBottom: 5,
  }
})