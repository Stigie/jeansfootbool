import React from "react";
import { Component } from "react";
import { Routes } from "../..";
import { StatusBar, PixelRatio, StyleSheet } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import {
  Container,
  ImageBackground,
  ControlContainer,
  LeftControl,
  RigthControl,
  ControlContainerInner,
  Logo,
  LogoContainer
} from "./styles";
import { IStoresMap } from "../../../types";
import connector from "../../../decorators/connector";
import { observable } from "mobx";
import { observer } from "mobx-react";
import GestureRecognizer from "react-native-swipe-gestures";
import YouTube from "react-native-youtube";


const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
    width: 200,
  },
});

@observer
class VideoPage extends Component<
  ReturnType<typeof storesToProps> & NavigationInjectedProps
> {
  static navigationOptions = {
    title: ""
  };

  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: 100,
  };

  public goBack = () => {
    this.props.navigation.navigate(Routes.Home);
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
              <YouTube
                // You must have an API Key for the player to load in Android
                apiKey="AIzaSyDNWZndbbwD4ST9yPKvnoetGjjqdaghEUw"
                // Un-comment one of videoId / videoIds / playlist.
                // You can also edit these props while Hot-Loading in development mode to see how
                // it affects the loaded native module
                videoId="3j6pWm5yQFw"
                // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
                // playlistId="PLF797E961509B4EB5"
                play={this.state.isPlaying}
                loop={this.state.isLooping}
                fullscreen={this.state.fullscreen}
                controls={1}
                style={[
                  { height: 100 },
                  styles.player,
                ]}
              />
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

export default connector(storesToProps)(VideoPage);
