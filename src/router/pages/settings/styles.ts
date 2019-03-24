import styled from 'styled-components'
import { Text as TextBase, View } from 'react-native'

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`

export const Text = styled(TextBase)`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`

export const Icon = styled(TextBase)`
  text-align: center;
  color: #333333;
  font-size: 22px
`