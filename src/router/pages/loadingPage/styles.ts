import styled from 'styled-components'
import { Text as TextBase, View, Animated, ImageBackground as ImageBackgroundBase } from 'react-native'


export const ImageBackground = styled(ImageBackgroundBase)`
    height: 100%;
`

export const Container = styled(View)`
  flex: 1;
  align-content: space-between;
  background-color: #f5fcff;
  justify-content: space-between;
`

export const Text = styled(TextBase)`
  text-align: center;
  color: red;
  font-size: 16px;
`