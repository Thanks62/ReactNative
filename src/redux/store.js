/* eslint-disable space-infix-ops */
import {createStore} from 'redux';
import loginReducer from './reducer';
let store = createStore(loginReducer);
export default store;
