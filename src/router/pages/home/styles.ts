import styled, { css } from 'styled-components'
import { Text as TextBase, Image, View, Animated, ImageBackground as ImageBackgroundBase, TouchableOpacity } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'

export const ImageBackground = styled(ImageBackgroundBase)`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:100%;
`

export const Circle = styled(View)`
  width: 250px;
  border-radius: 200;
  background-color: #0C1656;
  height: 250px;
  align-self: center;
  top:${
  isIphoneX() ? '-85px' : '-95px'
  };
`

export const Container = styled(View)`
  flex: 1;
  align-content: space-between;
  background-color: #f5fcff;
  justify-content: space-between;
`

export const BottomIconsContainer = styled(View)`
  background-color: #0C1656;
  width: 100%;
  height: 90px;
  display:flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
`

export const VK = styled(Image)`
  height:25px;
  width: 45px;
`

export const Instagram = styled(Image)`
  height:30px;
  width: 30px;
`

export const YouTube = styled(Image)`
  height:30px;
  width: 40px;
`

export const Logo = styled(Image)`
  height: 50%;
  width:80%;
  top: 115px;
  left: 25px;

`
export const ControlContainer = styled(View)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content:center;
  width:100%;
  top:${
  isIphoneX() ? '-85px' : '-95px'
  };

`
const Control = css`
  width:80%;
  height: 100%;
  /* height:80px; */
  align-self:flex-end;

`

export const ControlContainerInner = styled(TouchableOpacity)`
  width: 100%;
  display:flex;
  align-self:stretch;
`

export const LeftControl = styled(ImageBackgroundBase)`
  ${Control}
  align-self: flex-start;
  margin-bottom:40px;
`

export const RigthControl = styled(ImageBackgroundBase)`
  ${Control}
  align-self: flex-end;
`
