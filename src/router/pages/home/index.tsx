import React from "react";
import { Component } from "react";
import { Routes } from "../..";
import { NavigationInjectedProps } from "react-navigation";
import {
  Container,
  ImageBackground,
  Circle,
  BottomIconsContainer,
  Logo,
  YouTube,
  Instagram,
  VK,
  ControlContainer,
  LeftControl,
  RigthControl,
  ControlContainerInner,

} from "./styles";
import { StatusBar, Linking, PixelRatio } from 'react-native'
import { IStoresMap } from "../../../types";
import connector from "../../../decorators/connector";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class HomePage extends Component<
ReturnType<typeof storesToProps> & NavigationInjectedProps
> {
  @observable
  public inputText: string | null = null;
  public maxItems = 10;

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
    // tabBarIcon: () => <Icon>&#x2726;</Icon>
  };

  state = {
    containerWidth: 100,
  };

  public goToMenu = () => {
    const { navigation } = this.props 
    navigation.navigate(Routes.Menu)
  }

  public goToTelegram = () => {
    Linking.canOpenURL('https://tlgrm.ru/channels/@temablog').then(supported => {
      if (supported) {
        Linking.openURL('https://tlgrm.ru/channels/@temablog');
      } else {
        console.log("Don't know how to open URI: https://tlgrm.ru/channels/@temablog");
      }
    });
  }

  public render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={require("./assets/background.jpg")}>
          <Circle>
            <Logo source={require('./assets/logo_1.png')} />
          </Circle>
          <ControlContainer  onLayout={({ nativeEvent: { layout: { width } } }) => {
              if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
            }}>
            <ControlContainerInner  onPress={this.goToMenu} style={[
                    { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / 6) },
                    { marginBottom: 40}
                  ]}>
              <LeftControl source={require("./assets/nachat_obuchenie.png")}  resizeMode={"stretch"}/>
            </ControlContainerInner>
            <ControlContainerInner onPress={this.goToTelegram} style={[
                    { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / 6) },
                  ]}>
              <RigthControl source={require("./assets/poluchit_stikery.png")} resizeMode={"stretch"} />
            </ControlContainerInner>
          </ControlContainer>
          <BottomIconsContainer>
            <VK source={require('./assets/vk.png')} />
            <Instagram source={require('./assets/Instagram_icon.png')} />
            <YouTube source={require('./assets/yutub.png')} />
          </BottomIconsContainer>
        </ImageBackground>
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

export default connector(storesToProps)(HomePage);
