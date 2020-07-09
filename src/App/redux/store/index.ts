import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import dashboardReducer from '../reducer/dashboardReducer';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../saga';
import loginReducer from '../reducer/loginReducer'


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  advertisedReducer: dashboardReducer,
  loginReducer : loginReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
//const wsconnect = setupSocket(store.dispatch);
sagaMiddleware.run(rootSaga);
store.dispatch({type:'Hello'});
export default store;
