import styled, { css } from 'styled-components'
import { View, Text, Animated, TextInput } from 'react-native'
import { TodoStates } from '../../models/todo'

const ContainerBase = styled(View)`
  padding: 5px 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #b0bec5;
  margin-bottom: 5px;
  align-items: center;
  width: 100%;
`

export const Container = Animated.createAnimatedComponent(ContainerBase)

const Control = styled(View)<{ state: TodoStates }>`
  background-color: white;
  border: 1px solid #b0bec5;
  width: 32px;
  height: 32px;
  justify-content: center;
  border-radius: 50;
`

const ControlText = styled(Text)<{ state: TodoStates }>`
  font-size: 20px;
  text-align: center;
  line-height: 24px;
`

const CheckBase = styled(Control)`
  ${({ state }) =>
    state !== TodoStates.DEFAULT &&
    css`
      background-color: #00C853;
      border-color: #4caf50;
    `}
`

export const Check = Animated.createAnimatedComponent(CheckBase)

const CheckTextBase = styled(ControlText)`
  color: #B0BEC5;

  ${({ state }) =>
    state !== TodoStates.DEFAULT &&
    css`
      color: white;
    `}
`

export const CheckText = Animated.createAnimatedComponent(CheckTextBase)

export const Delete = styled(Control)`
  ${({ state }) =>
    state === TodoStates.DELETE &&
    css`
      background-color: red;
    `}
`

export const DeleteText = styled(ControlText)`
  color: #DD2C00;
  line-height: 22px;
`

export const ItemText = styled(Text)`
  flex-grow: 1;
  padding: 2px 10px;
`

export const ItemInput = styled(TextInput)`
  flex-grow: 1;
  padding: 2px 10px;
`
