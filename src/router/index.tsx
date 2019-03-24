import { createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import HomePage from './pages/home'
import TODOPage from './pages/todo'
import SettingsPage from './pages/settings/indes'

export enum Routes {
  Home = 'Welcome',
  Settings = 'Settings',
  TODO = 'TODO',
}

const HomeNavigator = createBottomTabNavigator(
  {
    [Routes.Home]: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home',
      },
    },
    [Routes.Settings]: {
      screen: SettingsPage,
      navigationOptions: {
        title: 'Settings',
      },
    },
  },
  {
    initialRouteName: Routes.Home,
    animationEnabled: true,
    swipeEnabled: true
  },
)

const AppNavigator = createDrawerNavigator(
  {
    [`${Routes.Home}Navigator`]: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        title: 'Home',
      },
    },
    [Routes.TODO]: {
      screen: TODOPage,
      navigationOptions: {
        drawerLabel: 'Todo',
        title: 'Todo',
      }
    },
  },
  {
    initialRouteName: `${Routes.Home}Navigator`,
    navigationOptions: {
      drawerLockMode: 'locked-closed',
    },
  },
)

export default AppNavigator
