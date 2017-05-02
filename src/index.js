import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './reducers';
import {initial, work, education, projects, background} from './panels';
import {expand, shrink} from './actions';

const render = () => ReactDOM.render(
  <App state={store.getState()} />,
  document.getElementById('root')
);

store.subscribe(render);
render();
