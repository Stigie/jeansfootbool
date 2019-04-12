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
  TouchableOpacityControls,
} from "./styles";
import {
  StatusBar,
  Linking,
  Animated,
  PixelRatio,
  TouchableOpacity
} from "react-native";
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
      backgroundColor: "white"
    }
    // tabBarIcon: () => <Icon>&#x2726;</Icon>
  };

  state = {
    anim: new Animated.Value(-200),
    containerWidth: 100
  };

  public goToMenu = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.Menu);
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.anim, // The animated value to drive
      {
        toValue: 0, // Animate to opacity: 1 (opaque)
        duration: 700 // Make it take a while
      }
    ).start();
  }

  public goToTelegram() {
    Linking.canOpenURL("https://t.me/addstickers/jeansfootball").then(
      supported => {
        if (supported) {
          Linking.openURL("https://t.me/addstickers/jeansfootball");
        } else {
          console.log(
            "Don't know how to open URI: https://t.me/addstickers/jeansfootball"
          );
        }
      }
    );
  }

  public goToVK() {
    Linking.canOpenURL("https://vk.com/id10362643").then(supported => {
      if (supported) {
        Linking.openURL("https://vk.com/id10362643");
      } else {
        console.log("Don't know how to open URI: https://vk.com/id10362643");
      }
    });
  }

  public goToInstagram() {
    Linking.canOpenURL("https://www.instagram.com/journal2403/").then(
      supported => {
        if (supported) {
          Linking.openURL("https://www.instagram.com/journal2403/");
        } else {
          console.log(
            "Don't know how to open URI: https://www.instagram.com/journal2403/"
          );
        }
      }
    );
  }

  public goToYouTube() {
    Linking.canOpenURL(
      "https://www.youtube.com/channel/UCvD2osclpNlKGjFaL37VWtg"
    ).then(supported => {
      if (supported) {
        Linking.openURL(
          "https://www.youtube.com/channel/UCvD2osclpNlKGjFaL37VWtg"
        );
      } else {
        console.log(
          "Don't know how to open URI: https://www.youtube.com/channel/UCvD2osclpNlKGjFaL37VWtg"
        );
      }
    });
  }

  public render() {
    const { anim } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={require("./assets/background.jpg")}>
          <Circle>
            <Logo source={require("./assets/logo_1.png")} />
          </Circle>
          <ControlContainer
            onLayout={({
              nativeEvent: {
                layout: { width }
              }
            }) => {
              if (this.state.containerWidth !== width)
                this.setState({ containerWidth: width });
            }}
          >
            <ControlContainerInner
              style={[
                {
                  height: PixelRatio.roundToNearestPixel(
                    this.state.containerWidth / 6
                  )
                },
                { marginBottom: 40 },
                { left: anim }
              ]}
            ><TouchableOpacityControls onPress={this.goToMenu}>
                <LeftControl
                  source={require("./assets/nachat_obuchenie.png")}
                  resizeMode={"stretch"}
                />
              </TouchableOpacityControls>
            </ControlContainerInner>
            <ControlContainerInner
              style={[
                {
                  height: PixelRatio.roundToNearestPixel(
                    this.state.containerWidth / 6
                  )
                },
                { right: anim }
              ]}
            >
            <TouchableOpacityControls onPress={this.goToTelegram}>
                <RigthControl
                  source={require("./assets/poluchit_stikery.png")}
                  resizeMode={"stretch"}
                />
              </TouchableOpacityControls>
            </ControlContainerInner>
          </ControlContainer>
          <BottomIconsContainer>
            <TouchableOpacity onPress={this.goToVK}>
              <VK source={require("./assets/vk.png")} style={{ left: anim }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToInstagram}>
              <Instagram
                source={require("./assets/Instagram_icon.png")}
                style={{ bottom: anim }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToYouTube}>
              <YouTube
                source={require("./assets/yutub.png")}
                style={{ right: anim }}
              />
            </TouchableOpacity>
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
