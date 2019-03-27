import styled, { css } from 'styled-components'
import { Text as TextBase, View, Animated, ImageBackground as ImageBackgroundBase, ScrollView, PixelRatio } from 'react-native'
import YouTube from "react-native-youtube";
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper'


export const ImageBackground = styled(ImageBackgroundBase)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  flex: 1;
  align-content: center;
  background-color: #f5fcff;
  justify-content: center;

`
export const VideosContainer = styled(ScrollView)`
  display: flex;
  height: 100%;
  overflow:scroll;
  /* flex-wrap: wrap;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  align-self: center; */
  padding:20px;

`
export const Video = styled(YouTube)`
  width: 100%;
  height: 100px;
  align-self: stretch;
`

export const VideoContainer = styled(View)`
    display: flex;
    flex-direction:column;
    width: 100%;
    margin: 10px auto;
`
