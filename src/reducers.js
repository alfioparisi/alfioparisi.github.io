import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const work = {
  "jobs": [{
    "employer": "Institute of Light",
    "title": "kitchen porter",
    "dates": "2016-2017",
    "location": "London",
    "description": "Working in a kitchen to help out chefs in their everyday tasks"
  }],
  "title": "WORK",
  "description": "Hello, here are the jobs i've done...Actually, it's only one."
};

const education = {
  "schools": [{
    "name": "Lice Statale Ischia",
    "location": "Ischia, NA, Italy",
    "dates": "2007-2012"
  }],
  "onlineCourses": [{
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "dates": "03/2017- in progress",
      "url": "https://www.udacity.com/"
    },
    {
      "title": "/",
      "school": "Khan Academy",
      "dates": "2016-2017",
      "url": "https://www.khanacademy.org/"
    }
  ],
  "title": "EDUCATION",
  "description": "This is my education panel."
};

const background = {
  "location": "Ischia",
  "state": "Italy",
  "born": "17/08/1993",
  "title": "BACKGROUND",
  "description": "This is my background."
};

const projects = {
  "googleMap": "", // insert link to google map project on github
  "froggerGame": "",
  "pomodoro": "",
  "opimization": "",
  "title": "PROJECTS",
  "description": "Here are the projects i like most."
};

const email = 'alfioparisi.93@gmail.com';
const github = 'github.com/alfioparisi';
const linkedin = 'somelinkedinstuff';
const initial = {
  "title": 'ALFIO PARISI',
  "description": `email: ${email}\nGitHub: ${github}\nlinkedin: ${linkedin}`
};

const title = (state = initial.title, action) => {
  if (action.type === 'EXPAND') return action.title;
  return state;
};

const description = (state = initial.description, action) => {
  if (action.type === 'EXPAND') return action.description;
  return state;
};

const expandWork = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'WORK') {
      return true;
    } else return false;
  }
  return state;
};
const expandEducation = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'EDUCATION') {
      return true;
    } else return false;
  }
  return state;
};
const expandProjects = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'PROJECTS') {
      return true;
    } else return false;
  }
  return state;
};
const expandBackground = (state = false, action) => {
  if (action.type === 'EXPAND') {
    if (action.title === 'BACKGROUND') {
      return true;
    } else return false;
  }
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
