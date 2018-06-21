// 样式方法
import variable from "./variable";

export default {
  buttomLine(width = 30) {
    return {
      height: 3,
      borderRadius: 50,
      backgroundColor: variable.colorTheme,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: width
    }
  },
}