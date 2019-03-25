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
import { StatusBar, Linking } from 'react-native'
import { IStoresMap } from "../../../types";
import connector from "../../../decorators/connector";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { ITodo, TodoStates } from "../../../models/todo";
import TodoList, { TodoListTypes } from "../../../containers/todo";

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

  public goToTODO = () => {
    const { navigation } = this.props;

    navigation.navigate(Routes.TODO);
  };

  public onChangeText = (text: string) => {
    this.inputText = text;
  };

  public onChangeState = (item: ITodo, state: TodoStates) => {
    const { updateItem } = this.props.todoStore;

    updateItem({
      ...item,
      state
    });
  };

  public onEdit = (item: ITodo, text: string) => {
    const { updateItem } = this.props.todoStore;

    updateItem({
      ...item,
      text
    });
  };


  public handleClick = () => {
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
          <ControlContainer>
            <ControlContainerInner >
              <LeftControl source={require("./assets/nachat_obuchenie.png")} />
            </ControlContainerInner>
            <ControlContainerInner onPress={this.handleClick}>
              <RigthControl source={require("./assets/poluchit_stikery.png")} />
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
