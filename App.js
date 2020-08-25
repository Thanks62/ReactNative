import React, {Component} from 'react';
import NewsScreen from './src/Pages/News';
import HomeScreen from './src/Pages/Home';
import LoginScreen from './src/Pages/Login'
// import {TabNavigatior} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <NewsScreen /> */}
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      </>
    );
  }
}
// const RootTabs = TabNavigatior({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//     },
//   },
//   News: {
//     screen: NewsScreen,
//     navigationOptions: {
//       tabBarLabel: 'News',
//     },
//   },
// });
