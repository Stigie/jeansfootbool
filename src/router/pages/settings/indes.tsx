import React from 'react'
import { Component } from 'react'
import { NavigationInjectedProps } from 'react-navigation'
import { Container, Text, Icon } from './styles'

class SettingsPage extends Component<NavigationInjectedProps> {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon>&#x2699;</Icon>
    )
  }

  public render() {
    return (
      <Container>
        <Text>Settings</Text>
      </Container>
    )
  }
}

export default SettingsPage