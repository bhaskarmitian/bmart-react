import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';
import { Provider } from 'react-redux';
import store from './App/redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {' '}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
//sachin here
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAt
serviceWorker.unregister();
