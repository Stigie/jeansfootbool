import { createSwitchNavigator } from "react-navigation";
import HomePage from "./pages/home";
import LoadingPage from "./pages/loadingPage";
import MenuPage from "./pages/menuPage";

export enum Routes {
  Loading = "Loading",
  Home = "Welcome",
  TODO = "TODO",
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
