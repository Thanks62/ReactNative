// import HomeScreen from '../Pages/Home';
// import NewsScreen from '../Pages/News';
// import LoginScreen from '../Pages/Login';
// import {createSwitchNavigator} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// // import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBrowserApp} from '@react-navigation/web';
// const HomeStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });
// const NewsStack = createStackNavigator({
//   News: {
//     screen: NewsScreen,
//   },
// });
// const LoginStack = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//   },
// });
// const Index = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeStack,
//     },
//     News: {
//       screen: NewsStack,
//     },
//   },
//   {
//     // defaultNavigationOptions: ({navigation}) => ({
//     //   tabBarIcon: ({focused, horizontal, tintColor}) => {
//     //     const {routeName} = navigation.state;
//     //     let IconComponent = MaterialIcons;
//     //     let iconName;
//     //     if (routeName === 'Home') {
//     //       iconName = 'home';
//     //       // Sometimes we want to add badges to some icons.
//     //       // You can check the implementation below.
//     //     } else if (routeName === 'News') {
//     //       iconName = 'dashboard';
//     //     }
//     //     // You can return any component that you like here!
//     //     return <IconComponent name={iconName} size={25} color={tintColor} />;
//     //   },
//     // }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   },
// );
// export const Route = createSwitchNavigator(
//   {
//     Index: {
//       screen: Index,
//     },
//     Auth: {
//       screen: LoginStack,
//     },
//   },
//   {
//     initialRouteName: 'Auth',
//     defaultNavigationOptions: {
//       header: null,
//     },
//   },
// );
import HomeScreen from '../Pages/Home';
import NewsScreen from '../Pages/News';
import LoginScreen from '../Pages/Login';
import {createSwitchNavigator} from 'react-navigation';
import {createBrowserApp} from '@react-navigation/web';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// export const Route = createSwitchNavigator(
//   {
//     Index: {
//       screen: HomeScreen,
//     },
//     Auth: {
//       screen: NewsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Auth',
//     defaultNavigationOptions: {
//       header: null,
//     },
//   },
// );
// const Route = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   News: {
//     screen: NewsScreen,
//   },
// });


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});
const NewsStack = createStackNavigator({
  News: {
    screen: NewsScreen,
  },
});
const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
});
export const Index = createSwitchNavigator({
  Home: {
    screen: HomeScreen,
  },
  News: {
    screen: NewsScreen,
  }
});
export const Route = createSwitchNavigator(
  {
    Index: {
      screen: Index,
    },
    Auth: {
      screen: LoginStack,
    },
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      header: null,
    },
  },
);
export const AppScreen = createBrowserApp(Route);
