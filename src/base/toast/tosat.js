import React from 'react'
import RootToast from 'react-native-root-toast'
import {View, Text, Platform, Image, StyleSheet} from 'react-native'
import variable from "../../style/variable";
const Toast = {

  toast: null,

  show: msg => {
    this.toast = RootToast.show(msg, {
      position: 0,
      duration: 1500,
      backgroundColor: 'rgba(31,31,31,1)'
    })
  },

  showLong: msg => {
    this.toast = RootToast.show(msg, {
      position: 0,
      duration: 2000,
      backgroundColor: 'rgba(31,31,31,1)'
    })
  },

  showSuccess: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Image style={styles.icon} source={require('./icon-success.png')}/>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: 1500,
        position: RootToast.positions.CENTER,
        backgroundColor: 'rgba(31,31,31,1)',
        shadow: false,
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
      typeof options === 'function' ? options && options(): null
    }, 2000)
  },

  showLongSuccess: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: 2000,
        position: RootToast.positions.CENTER,
        backgroundColor: 'rgba(31,31,31,1)',
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
      typeof options === 'function' ? options && options(): null
    }, 2500)
  },

  showWarning: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: RootToast.durations.SHORT,
        position: RootToast.positions.CENTER,
        backgroundColor: 'rgba(31,31,31,1)',
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
    }, RootToast.durations.SHORT + 500)
  },

  showError: (msg, options) => {
    let toast = RootToast.show(
      Platform.OS === 'ios' ?
        <View style={styles.container}>
          <Image style={styles.icon} source={require('./icon-del.png')}/>
          <Text style={styles.message}>{msg}</Text>
        </View> : msg, {
        duration: RootToast.durations.SHORT,
        position: RootToast.positions.CENTER,
        backgroundColor: 'rgba(31,31,31,1)',
        ...options,
      })
    setTimeout(function () {
      RootToast.hide(toast)
    }, RootToast.durations.SHORT + 500)
  }

}

var styles = StyleSheet.create({
  container: {
    width: 130,
    height: 120,
    backgroundColor: 'rgba(31,31,31,1)',
    alignItems: 'center',
  },
  icon: {
    height: 32,
    width: 32,
    marginTop: 32,
  },
  message: {
    marginTop: 19,
    color: '#fff',
    fontSize: variable.fontSizeMedium,
    textAlign: 'center',
  }
})

export {Toast}
