import { createSwitchNavigator } from "react-navigation";
import HomePage from "./pages/home";
import LoadingPage from "./pages/loadingPage";
import MenuPage from "./pages/menuPage";
import Video from './pages/videosPage'

export enum Routes {
  Loading = "Loading",
  Home = "Welcome",
  Video = "Video",
  Menu = "Menu"
}

const AppNavigator = createSwitchNavigator(
  {
    [`${Routes.Home}`]: {
      screen: HomePage,
      navigationOptions: {
        drawerLabel: "Home",
        title: "Home"
      }
    },
    [Routes.Loading]: {
      screen: LoadingPage,
      navigationOptions: {
        drawerLabel: "Loading",
        title: "Loading"
      }
    },
    [Routes.Video]: {
      screen: Video,
      navigationOptions: {
        drawerLabel: "Video",
        title: "Video"
      }
    },
    [Routes.Menu]: {
      screen: MenuPage,
      navigationOptions: {
        drawerLabel: "Menu",
        title: "Menu"
      }
    }
  },
  {
    initialRouteName: `${Routes.Loading}`,
  }
);

export default AppNavigator;
