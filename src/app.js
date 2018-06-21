import React, {Component} from 'react'
import {View, DeviceEventEmitter, YellowBox, TouchableOpacity} from 'react-native'
// import Toast, {DURATION} from 'react-native-easy-toast'
import {Toast} from './base/toast/tosat'
import Navigation from './navigation'
import variable from "./style/variable";

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

export const ACTION_APP = {A_SHOW_TOAST: 'showToast'}

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('ACTION_APP',
      (action, params) => this.onAction(action, params))
  }

  /**
   * 通知回调事件处理
   * @param action
   * @param params
   */
  onAction(action, params) {
    if (ACTION_APP.A_SHOW_TOAST === action) {
      let type = params.type || 'showSuccess'
      switch (type) {
        case 'show':
          Toast.show(params.text)
          break
        case 'showLong':
          Toast.showLong(params.text)
          break
        case 'showSuccess':
          Toast.showSuccess(params.text)
          break
        case 'showLongSuccess':
          Toast.showLongSuccess(params.text)
          break
        case 'showWarning':
          Toast.showWarning(params.text)
          break
        case 'showError':
          Toast.showError(params.text)
          break
      }
      // this.toast.show(params.text, DURATION.LENGTH_LONG)
    }
  }

  componentWillUnmount(){
    if (this.listener) {
      this.listener.remove();
    }
  }

  render() {
    const prefix = 'jike://'
    return (
      <View style={styles.container}>
        <Navigation uriPrefix={prefix}></Navigation>
        {/*<Toast ref={(toast)=>this.toast=toast}/>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App