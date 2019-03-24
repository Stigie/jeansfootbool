import React from 'react'
import { Component } from 'react'
import AppNavigator from '../router'
import { Provider } from 'mobx-react'
import storeInstance from '../store/instance'

export default class App extends Component {
  public render() {
    return (
      <Provider store={storeInstance.get()}>
        <AppNavigator />
      </Provider>
    )
  }
}
