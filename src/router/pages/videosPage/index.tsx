import React from "react";
import { Component } from "react";
import { Routes } from "../..";
import { StatusBar, PixelRatio, StyleSheet, View, FlatList } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import {
  Container,
  ImageBackground,
  VideosContainer,
  Video,
  VideoContainer,
  Text,
  ScrollContainer,
  GestureRecognizer
} from "./styles";
import { IStoresMap } from "../../../types";
import connector from "../../../decorators/connector";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";


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
    this.props.navigation.navigate(Routes.Menu);
  };

  public render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    const links = this.props.navigation.getParam('links')
    // const data = links.map(d => {return {key: d.id}})

    return (
      <Container>
        
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <ImageBackground source={require("./assets/background.jpg")}>
            <ScrollContainer>
            <GestureRecognizer config={config} onSwipeLeft={this.goBack}>
            <VideosContainer onLayout={({ nativeEvent: { layout: { width } } }) => {
              if (!this.state.containerMounted) this.setState({ containerMounted: true });
              if (this.state.containerWidth !== width) this.setState({ containerWidth: width });
            }}
              data={links}
              
              renderItem={
                ({ item }) => (
                  <VideoContainer >
                    <View
                      // style={[
                      //   { height: 200 },
                      // ]}
                      style={[
                        { height: PixelRatio.roundToNearestPixel(this.state.containerWidth / (16 / 9)) },
                      ]}
                    >
                    {/* <View style={[{width: 200}, {height:200}, {backgroundColor: '#ffffff'}]}/> */}
                      <Video
                        apiKey="AIzaSyDNWZndbbwD4ST9yPKvnoetGjjqdaghEUw"
                        videoId={item.key}   // The YouTube video ID
                        play={false}             // control playback of video with true/false
                        fullscreen={this.state.fullscreen}       // control whether the video should play in fullscreen or inline
                        loop={true}
                        controls={2}
                        modestbranding={true}
                        showFullscreenButton={true}
                        showinfo={false}
                        rel={false}

                        onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
                      />
                    </View>
                    <Text>{item.name}</Text>
                  </VideoContainer>
                )
              }>
            </VideosContainer>
            </GestureRecognizer>
            </ScrollContainer>
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

export default connector(storesToProps)(VideoPage);
