import React, { Children } from "react";
import { Component } from "react";
import { Routes } from "../..";
import { StatusBar } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import {
  Container,
  ImageBackground,
  ControlContainer,
  ControlContainerInner,
  Logo,
  LogoContainer
} from "./styles";
import { IStoresMap } from "../../../types";
import connector from "../../../decorators/connector";
import { observable } from "mobx";
import { observer } from "mobx-react";
import GestureRecognizer from "react-native-swipe-gestures";
import menu from './data'



@observer
class MenuPage extends Component<
  ReturnType<typeof storesToProps> & NavigationInjectedProps
> {
  static navigationOptions = {
    title: ""
  };

  public goBack = () => {
    this.props.navigation.navigate(Routes.Home);
  };

  public openCategory = () => {
    this.props.navigation.navigate(Routes.Video);
  };

  public render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <Container>
        <GestureRecognizer config={config} onSwipeLeft={this.goBack}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <ImageBackground source={require("./assets/background.jpg")}>
            <ControlContainer>
              {menu.map(item => (
                <ControlContainerInner
                  key={item.name}
                  onPress={this.openCategory}
                >
                  {item.item}
                </ControlContainerInner>
              ))}
            </ControlContainer>
            <LogoContainer>
              <Logo source={require("../home/assets/logo_1.png")} />
            </LogoContainer>
          </ImageBackground>
        </GestureRecognizer>
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

export default connector(storesToProps)(MenuPage);
