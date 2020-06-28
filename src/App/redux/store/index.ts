import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import dashboardReducer from '../reducer/dashboardReducer';
import createSagaMiddleware from 'redux-saga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dashboardReducer: dashboardReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
//const wsconnect = setupSocket(store.dispatch);
//sagaMiddleware.run(watchPhysicalMachines, wsconnect);

export default store;
