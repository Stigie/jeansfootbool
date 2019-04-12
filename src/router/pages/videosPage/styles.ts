import styled, { css } from 'styled-components'
import { Text as TextBase, View, Animated, ImageBackground as ImageBackgroundBase, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import YouTube from "react-native-youtube";
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper'
import GestureRecognizerBase from "react-native-swipe-gestures";


export const ImageBackground = styled(ImageBackgroundBase)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width:100%;
    padding-bottom:10px;
    padding-top:${
  getStatusBarHeight()
  };
`

export const Text = styled(TextBase)`
    width: 100%;
    color: white;
    margin-top: 10px;
    /* padding-left: 20px; */
`

export const Container = styled(View)`
  align-content: center;
  background-color: #f5fcff;
  justify-content: center;
  height: 100%;
  width:100%;

`

export const ScrollContainer = styled(View)`
    height: 100%;
    padding-top:40px;
    padding-bottom:20px;
    /* background-color: #000000; */
`

export const VideosContainer = styled(FlatList)`
  /* display: flex; */
  height: 100%;
  /* overflow:scroll; */
  /* flex-wrap: wrap;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  align-self: center; */
  padding:20px 20px 0px 20px;
`

export const GestureRecognizer = styled(GestureRecognizerBase)`
  height: 100%;
  width: 100%;
`

export const Video = styled(YouTube)`
  width: 100%;
  height: 100%;

  align-self: stretch;
`

export const VideoContainer = styled(View)`
  display: flex;
  flex-direction:column;
  width: 100%;
  /* margin: 10px auto; */
  padding-bottom: 20px;
`
export const Back = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  left:20px;
  color: #fff;
`