import styled from 'styled-components'
import { View, Animated } from 'react-native'

export const Container = styled(View)`
  flex: 1;
  flex-direction: row;
`
export const GameRow = styled(View)`
  flex-direction: column;
  justify-content: flex-end;
`
export const GameBoxBase = styled(View)``

export const GameBox = Animated.createAnimatedComponent(GameBoxBase)
