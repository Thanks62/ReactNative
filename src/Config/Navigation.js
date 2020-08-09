import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Pages/Home';
import NewsScreen from '../Pages/News';
import { createBottomTabNavigator } from 'react-navigation-tabs';
export const Nav = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  News: {
    screen: NewsScreen,
  },
});
