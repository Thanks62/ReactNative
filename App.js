import React, {Component} from 'react';
// import NewsScreen from './src/Pages/News';
import HomeScreen from './src/Pages/Home';
// import {TabNavigatior} from 'react-navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <NewsScreen /> */}
        <HomeScreen />
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
