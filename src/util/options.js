import React from "react";
import {Image, Platform, TouchableOpacity, View} from "react-native";

const STATUS_BAR_HEIGHT = Platform.OS === "android" ? 22 : 0;

/**
 * 沉浸式状态栏
 */
const defaultHeaderTranslucentStyle = {
  backgroundColor: '#fff',
  height: 48 + STATUS_BAR_HEIGHT,
  paddingTop: STATUS_BAR_HEIGHT,
  elevation: 2
};

/**
 * 普通状态栏
 */
const defaultHeaderStyle = {
  backgroundColor: '#fff',
  height: 48,
  elevation: 2
};

const defaultHeaderTitleStyle = {
  textAlign: "center",
  fontWeight: "normal",
  color: "#000",
  flex: 1,
  fontSize: 17
};

const defaultNavigationOptions = ({navigation}) => ( {
  headerTitleStyle: global.defaultHeaderTitleStyle,
  // headerStyle: global.defaultHeaderStyle,
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image style={{width: 38, height: 38}} source={require('../res/image/back.png')}/>
    </TouchableOpacity>
  ),
  headerRight: <View/>
});

const global = {
  defaultHeaderTranslucentStyle,
  defaultHeaderStyle,
  defaultHeaderTitleStyle,
  defaultNavigationOptions
};

export default global