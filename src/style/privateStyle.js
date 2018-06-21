// 共用样式
import variable from './variable'
import {PixelRatio} from 'react-native'

export default {
  SpacingModule: {
    height: 10,
    backgroundColor: variable.colorBlock,
    width: global.SCREEN_WIDTH
  },
  borderAllStyle: {
    borderWidth: 0.5/PixelRatio.get(),
    borderColor: variable.colorBlock,
    borderStyle: 'solid'
  },
  borderTopStyle: {
    height: 10,
    width: 40,
    borderTopWidth: 0.5/PixelRatio.get(),
    borderTopColor: variable.colorBlock,
    borderStyle: 'solid'
  },
  borderBottomStyle: {
    borderBottomWidth: 0.5/PixelRatio.get(),
    borderBottomColor: variable.colorBlock,
    borderStyle: 'solid'
  },
  borderLeftStyle: {
    borderLeftWidth: 0.5/PixelRatio.get(),
    borderLeftColor: variable.colorBlock,
    borderStyle: 'solid'
  },
  borderRightStyle: {
    borderRightWidth: 0.5/PixelRatio.get(),
    borderRightColor: variable.colorBlock,
    borderStyle: 'solid'
  },
}