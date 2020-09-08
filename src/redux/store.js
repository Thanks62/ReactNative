/* eslint-disable space-infix-ops */
import {createStore, compose} from 'redux';
import loginReducer from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let persistConfig = {
  key: 'loginStatus',
  storage: storage,
};
let PerStore = persistReducer(persistConfig, loginReducer);
export const store = createStore(PerStore,composeEnhancers());
export const persistor = persistStore(store);
