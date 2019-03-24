import styled from 'styled-components'
import { Text as TextBase, View, Animated } from 'react-native'

export const Container = styled(View)`
  padding-top: 30px;
  flex: 1;
  align-content: space-between;
  background-color: #f5fcff;
  justify-content: space-between;
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
  height: 50%;
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