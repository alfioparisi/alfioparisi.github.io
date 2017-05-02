import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './reducers';

const render = () => ReactDOM.render(
  // Pass the Redux state as prop to the React components.
  <App state={store.getState()} />,
  document.getElementById('root')
);

// Subscribe the render() function to the store so it gets updated on change.
// Also call it once to render the app the first time.
store.subscribe(render);
render();
