import React from "react";
import { Component } from "react";
import { Routes } from "../..";
import {StatusBar} from 'react-native' 
import { NavigationInjectedProps } from "react-navigation";
import {
  Container,
  Text,
  ImageBackground
} from "./styles";
import { IStoresMap } from "../../../types";
import connector from "../../../decorators/connector";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class LoadingPage extends Component<
  ReturnType<typeof storesToProps> & NavigationInjectedProps
> {
  static navigationOptions = {
    title: '',
  }

  public componentDidMount(){
    const { navigation } = this.props 
    setTimeout( () => {navigation.navigate(Routes.Home)}, 0 )
  }

  public render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={require('./assets/jeansLogo.jpg')}/>      
      </Container>
    );
  }
}

const storesToProps = (
  { store }: IStoresMap,
  _nextProps: NavigationInjectedProps
) => ({
  todoStore: store.todoStore
});

export default connector(storesToProps)(LoadingPage);
