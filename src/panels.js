// Data.

export const initial = {
  "title": 'ALFIO PARISI',
  "description": {
    "first": "email: alfioparisi.93@gmail.com",
    "second": "GitHub: github.com/alfioparisi",
    "third": "linkedin: somelinkedinstuff"
  }
};

export const work = {
  "jobs": [{
    "id": 0,
    "employer": "Institute of Light",
    "title": "kitchen porter",
    "dates": "2016-2017",
    "location": "London",
    "description": "Working in a kitchen to help out chefs in their everyday tasks"
  }],
  "title": "WORK",
  "description": {
    "first": "Hello, here are the jobs i've done...Actually, it's only one.",
    "second": "",
    "third": ""
  }
};

export const education = {
  "schools": [{
    "id": 0,
    "name": "Liceo Statale Ischia",
    "location": "Ischia, NA, Italy",
    "dates": "2007-2012"
  }],
  "onlineCourses": [{
      "id": 0,
      "title": "Front End Nanodegree",
      "name": "Udacity",
      "dates": "03/2017- in progress",
      "url": "https://www.udacity.com/"
    },
    {
      "id": 1,
      "title": "/",
      "name": "Khan Academy",
      "dates": "2016-2017",
      "url": "https://www.khanacademy.org/"
    }
  ],
  "title": "EDUCATION",
  "description": {
    "first": "This is my education panel.",
    "second": `Got my high school diploma back in Italy. Then tried a few years
of University, but it wasn't my thing.`,
    "third": `So i moved to London and started working while studying how to code
as an hobby, which eventually became a passion :)`
  }
};

export const background = {
  "title": "BACKGROUND",
  "description": {
    "first": "I was born in Ischia, Italy, 17/08/1993.",
    "second": "It's a small island. A nice place for holidays.",
    "third": ""
  }
};

export const projects = {
  "projects": [
    {
      "name": "GoogleMap",
      "src": "#",
      "path": "./googlemap/dist/app.html",
      "description": {
        "first": `This project was about the use of Ajax requests to get data from
an API.`,
        "second": `The requirements were about use at least 2 different APIs
and show to the user a bunch of places of interests, which he can filter.`,
        "third": "It's built using Knockout.js"
      }
    },
    {
      "name": "FroggerGame",
      "src": "https://github.com/alfioparisi/arcade-game",
      "path": "./frogger/frogger.html",
      "description": {
        "first": `This project was about reproducing an old arcade game called
Frogger.`,
        "second": "The instructors provided us with helper files to make the game work.",
        "third": "Our goal was to use OOP to build the player and the NPCs."
      }
    },
    {
      "name": "Pomodoro",
      "src": "https://github.com/alfioparisi/pomodoro-clock",
      "path": "./pomodoro/pomodoro.html",
      "description": {
        "first": "This is just a pomodoro timer.",
        "second": "There is a super-simple todo list aswell.",
        "third": "It's built using Backbone.js"
      }
    },
    {
      "name": "Opimization",
      "src": "https://github.com/alfioparisi/optimization-project",
      "path": "./optimization/dist/index.html",
      "description": {
        "first": "This project was about optimizing a given website.",
        "second": "The first frame is rendered in less than 1 sec.",
        "third": "The rest of the app runs at 60 fps."
      }
    }
  ],
  "title": "PROJECTS",
  "description": {
    "first": "Here are some of my projects.",
    "second": "Mostly they are from the Udacity Nanodegree course.",
    "third": ""
  }
};
