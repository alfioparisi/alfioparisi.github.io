import {combineReducers} from 'redux';
import {initial} from './panels';

/** Change the page title based on the current selected panel, or project.
* @param {string}
* @return {string}
*/
const title = (state = initial.title, action) => {
  if (action.type === 'EXPAND' || action.type === 'SHRINK' || action.type === 'SHOW_PROJECT') return action.title;
  return state;
};

/** Change the description based on the current selected panel, or project.
* @param {string}
* @return {string}
*/
const description = (state = initial.description, action) => {
  if (action.type === 'EXPAND' || action.type === 'SHRINK' || action.type === 'SHOW_PROJECT') return action.description;
  return state;
};

/** Expand the work panel. If the action is 'EXPAND', but the target is not 'work'
then shrink this panel.
* @param {boolean}
* @return {boolean}
*/
const expandWork = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'Work') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

const expandEducation = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'Education') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

const expandProjects = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'Projects') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

const expandBackground = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'Background') return true;
    else return false;
  }
  if (action.type === 'SHRINK') return false;
  return state;
};

/** Root reducer.
* @return {object} : the Redux state of the whole app.
*/
const app = combineReducers({
  title,
  description,
  expandWork,
  expandEducation,
  expandProjects,
  expandBackground
});

export default app;
