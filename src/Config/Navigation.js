import HomeScreen from '../Pages/Home';
import React from 'react';
import NewsScreen from '../Pages/News';
import LoginScreen from '../Pages/Login';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const Nav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    News: {
      screen: NewsScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = MaterialIcons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'News') {
          iconName = 'dashboard';
        }else if (routeName === 'Login') {
          iconName = 'dashboard';
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);
