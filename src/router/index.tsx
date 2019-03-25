import { createSwitchNavigator } from "react-navigation";
import HomePage from "./pages/home";
import TODOPage from "./pages/todo";
import LoadingPage from "./pages/loadingPage";
import SettingsPage from "./pages/settings/index";

export enum Routes {
  Loading = "Loading",
  Home = "Welcome",
  Settings = "Settings",
  TODO = "TODO"
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
    [Routes.TODO]: {
      screen: TODOPage,
      navigationOptions: {
        drawerLabel: "Todo",
        title: "Todo"
      }
    },
    [Routes.Loading]: {
      screen: LoadingPage,
      navigationOptions: {
        drawerLabel: "Loading",
        title: "Loading"
      }
    }
  },
  {
    initialRouteName: `${Routes.Loading}`,
  }
);

export default AppNavigator;
