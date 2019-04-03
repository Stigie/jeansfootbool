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
import { StatusBar, Linking, TouchableOpacity, Animated } from "react-native";
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
    anim: new Animated.Value(-200)
  }

  componentDidMount(){
    Animated.timing(                  // Animate over time
      this.state.anim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 700,              // Make it take a while
      }
    ).start();  
  }

  public goToMenu = () => {
    const { navigation } = this.props;
    navigation.navigate(Routes.Menu);
  };

  public goToTelegram(){
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
  };

  public goToVK(){
    Linking.canOpenURL("https://vk.com/id10362643").then(
      supported => {
        if (supported) {
          Linking.openURL("https://vk.com/id10362643");
        } else {
          console.log(
            "Don't know how to open URI: https://vk.com/id10362643"
          );
        }
      }
    );
  };

  public goToInstagram(){
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
  };

  public goToYouTube(){
    Linking.canOpenURL("https://www.youtube.com/channel/UCvD2osclpNlKGjFaL37VWtg").then(
      supported => {
        if (supported) {
          Linking.openURL("https://www.youtube.com/channel/UCvD2osclpNlKGjFaL37VWtg");
        } else {
          console.log(
            "Don't know how to open URI: https://www.youtube.com/channel/UCvD2osclpNlKGjFaL37VWtg"
          );
        }
      }
    );
  };


  public render() {
    const { anim } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={require("./assets/background.jpg")}>
          <Circle>
            <Logo source={require("./assets/logo_1.png")} />
          </Circle>
          <ControlContainer>
            <ControlContainerInner onPress={this.goToMenu} style={{left: anim}} >
              <LeftControl source={require("./assets/nachat_obuchenie.png")} />
            </ControlContainerInner>
            <ControlContainerInner onPress={this.goToTelegram}  style={{right: anim}}>
              <RigthControl source={require("./assets/poluchit_stikery.png")} />
            </ControlContainerInner>
          </ControlContainer>
          <BottomIconsContainer>
            <TouchableOpacity onPress={this.goToVK} >
              <VK source={require("./assets/vk.png")} style={{left: anim}} />
            </TouchableOpacity>
            <TouchableOpacity  >
              <Instagram source={require("./assets/Instagram_icon.png")} style={{bottom: anim}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToYouTube} >
              <YouTube source={require("./assets/yutub.png")} style={{right: anim}} />
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
