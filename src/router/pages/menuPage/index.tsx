import React from "react";
import { Component } from "react";
import { Routes } from "../..";
import { StatusBar } from "react-native";
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

const menu = [
  {
    name: "Пас",
    item: (
      <LeftControl
        key={"Пас"}
        source={require("./assets/pas.png")}
        resizeMode={"contain"}
      />
    ),
    children: [
      {
        name: "УПРАЖНЕНИЕ НА ПАС ДЛЯ НОВИЧКОВ► Exercise on the ball",
        id: "3j6pWm5yQFw"
      },
      {
        name: "ЛУЧШЕЕ УПРАЖНЕНИЕ на ТОЧНЫЙ  НАВЕС И ПАС",
        id: "m1urLs0QYtg"
      }
    ]
  },
  {
    name: "Панна",
    item: (
      <RigthControl
        key={"Панна"}
        source={require("./assets/panna.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Чеканка",
    item: (
      <LeftControl
        key={"Чеканка"}
        source={require("./assets/chekanka.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Фристайл",
    item: (
      <RigthControl
        key={"Фристайл"}
        source={require("./assets/fristayl.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Прием мяча",
    item: (
      <LeftControl
        key={"Прием мяча"}
        source={require("./assets/priem_myacha.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Навес",
    item: (
      <RigthControl
        key={"Навес"}
        source={require("./assets/naves.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Реализация моментов",
    item: (
      <LeftControl
        key={"Реализация моментов"}
        source={require("./assets/realiz_moment.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Удар",
    item: (
      <RigthControl
        key={"Удар"}
        source={require("./assets/udar.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Вратарь",
    item: (
      <LeftControl
        key={"Вратарь"}
        source={require("./assets/vratar.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Финты",
    item: (
      <RigthControl
        key={"Финты"}
        source={require("./assets/finty.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Дриблинг",
    item: (
      <LeftControl
        key={"Дриблинг"}
        source={require("./assets/dribling.png")}
        resizeMode={"contain"}
      />
    )
  },
  {
    name: "Тренер",
    item: (
      <RigthControl
        key={"Тренер"}
        source={require("./assets/trener.png")}
        resizeMode={"contain"}
      />
    )
  }
];

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
