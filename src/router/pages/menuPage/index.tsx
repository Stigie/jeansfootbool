import React from "react";
import { Component } from "react";
import { Routes } from "../..";
import { StatusBar, PixelRatio, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import {
  Container,
  ImageBackground,
  ControlContainer,
  ControlContainerInner,
  Logo,
  LogoContainer,
  Colum
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

  state = {
    containerWidth: 100,
  };

  public goBack = () => {
    this.props.navigation.navigate(Routes.Home);
  };

  public openCategory = (links: []) => {
    this.props.navigation.navigate(Routes.Video, { links });
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
          <ImageBackground source={require("./assets/background.jpg")}
            onLayout={({ nativeEvent: { layout: { width } } }) => {
              if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
            }}>
            <ControlContainer>
              <Colum>
              {menu.map((item, index) => {
                return index%2 !== 1 && (<ControlContainerInner
                  key={item.name}
                  onPress={() => { this.openCategory(item.children) }}
                  style={[
                    { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / 10.8) },
                  ]}
                >
                  {item.item}
                </ControlContainerInner>)
              })}
              </Colum>
              <Colum>
              {menu.map((item, index) => {
                return index%2 === 1 && (<ControlContainerInner
                  key={item.name}
                  onPress={() => { this.openCategory(item.children) }}
                  style={[
                    { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / 10.8) },
                  ]}
                >
                  {item.item}
                </ControlContainerInner>)
              })}
              </Colum>
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
