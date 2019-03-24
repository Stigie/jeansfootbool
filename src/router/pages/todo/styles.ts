import styled from 'styled-components'
import { Text, View, TextInput } from 'react-native'

export const BackButton = styled(View)`
  padding: 10px;
  transform: rotate(180deg);
`

export const BackButtonText = styled(Text)`
  color: #039BE5;
  font-size: 40px;
  line-height: 44;
`

export const Container = styled(View)`
  padding-top:30px;
  flex: 1;
  background-color: #f5fcff;
  justify-content: space-between;
`

export const Title = styled(Text)`
  text-align: center;
  color: #333333;
`

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

export const FilterContainer = styled(View)`
  justify-content: center;
  flex-direction: row;
  align-self: center;
  padding: 10px;
`

export const Filter = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50;
  border: 2px solid #039BE5;
`

export const FilterControl = styled(View)<{ isActive: boolean }>`
  border-radius: 50;
  background-color: ${({ isActive }) => (isActive ? '#039BE5' : 'transparent')};
  align-items: center;
  justify-content: center;
  margin: -1px;
`

export const FilterControlText = styled(Text)<{ isActive: boolean }>`
  padding: 10px 10px;
  font-size: 16px;
  line-height: 18;
  color: ${({ isActive }) => (isActive ? 'white' : '#78909C')};
`

export const Body = styled(View)`
  flex-direction: column;
  flex-shrink: 1;
  align-items: stretch;
  flex-grow: 1;
`

export const Footer = styled(View)`
  padding: 5px 10px;
`

export const InputField = styled(View)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50;
  border: 2px solid #039BE5;
`

export const Input = styled(TextInput)`
  flex-shrink: 1;
  flex-grow: 1;
  padding: 5px 10px;
  margin: 0;
`

export const AddButton = styled(View)`
  border-radius: 50;
  background-color: #039BE5;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  margin: -1px;
`

export const AddButtonText = styled(Text)`
  color: white;
  font-size: 22px;
  line-height: 26;
  text-align: center;
`
