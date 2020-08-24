import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
var app = document.createElement('div');
app.innerHTML = '<div id="root"></div>';
document.body.appendChild(app);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
