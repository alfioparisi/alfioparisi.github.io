import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {initial} from './panels';

const title = (state = initial.title, action) => {
  if (action.type === 'EXPAND' || action.type === 'SHRINK' || action.type === 'SHOW_PROJECT') return action.title;
  return state;
};

const description = (state = initial.description, action) => {
  if (action.type === 'EXPAND' || action.type === 'SHRINK' || action.type === 'SHOW_PROJECT') return action.description;
  return state;
};

const expandWork = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'WORK') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

const expandEducation = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'EDUCATION') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

const expandProjects = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'PROJECTS') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

const expandBackground = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'BACKGROUND') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

const app = combineReducers({
  title,
  description,
  expandWork,
  expandEducation,
  expandProjects,
  expandBackground
});

const store = createStore(app, applyMiddleware(logger));

export default store;
