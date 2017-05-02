import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import app from './reducers';

ReactDOM.render(
  <Provider store={createStore(app, applyMiddleware(logger))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
