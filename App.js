import React, {Component} from 'react';
import NewsScreen from './src/Pages/News';
import HomeScreen from './src/Pages/Home';
import LoginScreen from './src/Pages/Login';
import {AppScreen} from './src/Config/Navigation';
import {PersistGate} from 'redux-persist/lib/integration/react';
// import {TabNavigatior} from 'react-navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppScreen />
        </PersistGate>
      </Provider>
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
