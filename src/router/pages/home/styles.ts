import styled from 'styled-components'
import { Text as TextBase, Image, View, Animated,  ImageBackground as ImageBackgroundBase } from 'react-native'

export const ImageBackground = styled(ImageBackgroundBase)`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Circle = styled(View)`
  width: 250px;
  border-radius: 200;
  background-color: #0C1656;
  height: 250px;
  align-self: center;
  top: -105px;
`

export const Container = styled(View)`
  /* padding-top: 30px; */
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

export const Text = styled(TextBase)`
  text-align: center;
  color: #e3f2fd;
  font-size: 16px;
`

export const Icon = styled(TextBase)`
  text-align: center;
  color: #333333;
  font-size: 22px;
`

export const TodoPreview = styled(View)`
  /* height: 50%; */
  background-color: white;
`

export const TodoTitle = styled(TextBase)`
  text-align: center;
  color: white;
  background-color: #4fc3f7;
  padding: 5px 5px;
  font-weight: 500;
  font-size: 14px;
  border-top-width: 1px;
  border-top-color: #29b6f6;
  border-bottom-width: 1px;
  border-bottom-color: #81d4fa;
`

export const TodoButton = styled(View)`
  background-color: #039be5;
  padding: 10px 5px;
  border-top-width: 1px;
  border-top-color: #4fc3f7;
  border-bottom-width: 1px;
  border-bottom-color: #039be5;
`