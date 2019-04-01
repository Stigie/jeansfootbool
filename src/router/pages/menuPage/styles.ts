import styled, { css } from 'styled-components'
import { Text as TextBase, View, Animated, ImageBackground as ImageBackgroundBase, TouchableOpacity, Image } from 'react-native'


export const ImageBackground = styled(ImageBackgroundBase)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Container = styled(View)`
  flex: 1;
  align-content: center;
  background-color: #f5fcff;
  justify-content: center;
`

export const Text = styled(TextBase)`
  text-align: center;
  color: red;
  font-size: 16px;
`

export const LogoContainer = styled(View)`
  position:absolute;
  bottom: 0;
  left:0;
  width: 100%;
  height: 120px;
  display:flex;
  justify-content: center;
  flex-direction:row;
`

export const Logo = styled(Image)`
  height: 100%;
  width:150px;
`
export const ControlContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  align-self: center;
  /* height: 90%; */

`
const Control = css`
  width:45%;
  margin-bottom:30px;

`

export const ControlContainerInner = styled(TouchableOpacity)`

  ${Control}
`

const ImageControl = css`
  width: 100%;
  height: 100%;
`

export const LeftControl = styled(Image)`
  ${ImageControl}
`

export const RigthControl = styled(Image)`
  ${ImageControl}
`
