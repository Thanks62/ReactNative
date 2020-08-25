/* eslint-disable space-infix-ops */
import {createStore,compose} from 'redux';
import loginReducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(loginReducer,composeEnhancers());
export default store;
