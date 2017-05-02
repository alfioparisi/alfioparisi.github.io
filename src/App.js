import React, { Component } from 'react';
import './App.css';
import {initial, work, education, projects, background} from './panels';
import {expand, shrink, show} from './actions';
import store from './reducers';

// Should be a mixed component.
const Header = ({title, description}) => (
  <header>
    <div>
      // Show the title field of the Redux state.
      <h1>{title}</h1>
      // If a panel is open, show the button.
      {title !== 'ALFIO PARISI' &&
      <button
        // onClick dispatch an action to shrink any open panel.
        onClick={init => store.dispatch(shrink(initial))}
      >Close</button>}
    </div>
    // If no panel is opened, show the profile pic and the contacts.
    {title === 'ALFIO PARISI' && <div>Img wannabe</div>}
    <div><p>{description}</p></div>
  </header>
);

// Container component (?)
const Work = ({expandWork}) => (
  <section>
    // If the panel is not expanded just show an 'h2'.
    {!expandWork &&
    <h2
      // onClick dispatch an action to expand this panel.
      onClick={panel => store.dispatch(expand(work))}
    >Work</h2>}
    // If the panel is expanded show the content of the corresponding object.
    {expandWork &&
    // For every item in the array, return a component.
    work.jobs.map(job => (
      <Job key={job.id}
        title={job.title}
        employer={job.employer}
        dates={job.dates}
        description={job.description}
        location={job.location}
      />
    ))}
  </section>
);

// Presentational component.
// Show the single item of the job array.
const Job = ({title, employer, dates, description, location}) => (
  <div>
    <header>
      <h3>{title}</h3>
      <h4>{employer}</h4>
      <small>{dates}</small>
    </header>
    <article>
      <p>{description}</p>
    </article>
    <footer>
      <p>{location}</p>
    </footer>
  </div>
);

const Education = ({expandEducation}) => (
  <section>
    {!expandEducation &&
    <h2
      onClick={panel => store.dispatch(expand(education))}
    >Education</h2>}
    {expandEducation &&
    education.schools.map(school => (
      <School key={school.id}
        name={school.name}
        dates={school.dates}
        location={school.location}
      />
    ))}
    {expandEducation &&
      education.onlineCourses.map(course => (
        <Course key={course.id}
          name={course.name}
          title={course.title}
          dates={course.dates}
          url={course.url}
        />
    ))}
  </section>
);

// Presentational.
const School = ({name, dates, location}) => (
  <div>
    <h3>{name}</h3>
    <small>{dates}</small>
    <p>{location}</p>
  </div>
);

// Presentational.
const Course = ({name, title, dates, url}) => (
  <div>
    <h3>{name}</h3>
    <h4>{title}</h4>
    <small>{dates}</small>
    <br />
    <a href={url} target="_blank">{url}</a>
  </div>
);

const Projects = ({expandProjects, title}) => (
  <section>
    {!expandProjects &&
    <h2
      onClick={panel => store.dispatch(expand(projects))}
    >Projects</h2>}
    {expandProjects &&
    projects.projects.map(project => (
      <Project key={project.name}
        // When a project is clicked, show it in an iframe.
        onClick={pj => store.dispatch(show(project))}
        project={project}
        title={title}
        name={project.name}
        path={project.path}
        src={project.src}
      />
    ))}
  </section>
);

const Project = ({project, title, name, path, src, onClick}) => (
  <div>
    // When a project is clicked, show it in an iframe.
    <h3 onClick={onClick}>
      {name}
    </h3>
    {title === name &&
    <div>
      <iframe src={path}></iframe>
      <a href={src}>GitHub repository</a>
    </div>}
  </div>
);

// Presentational.
// Might want to make a component for the paragraphs if they get too big.
const Background = ({expandBackground}) => (
  <section>
    {!expandBackground &&
    <h2
      onClick={panel => store.dispatch(expand(background))}
    >Background</h2>}
    {expandBackground &&
    <div>
      <p>{background.firstP}</p>
      <p>{background.secondP}</p>
    </div>
    }
  </section>
);

// Presentational (?)
const Main = ({expandWork, expandEducation, expandProjects, title, expandBackground}) => (
  <main>
    <Work expandWork={expandWork} />
    <Education expandEducation={expandEducation} />
    <Projects expandProjects={expandProjects} title={title} />
    <Background expandBackground={expandBackground} />
  </main>
);

// Presentational.
const Footer = () => (
  <footer>
    <p>Something gotta go in here.</p>
  </footer>
);

// Root component.
// Takes in the Redux state as prop and pass it down.
class App extends Component {
  render() {
    const state = this.props.state;
    return (
      <div>
        <Header
          title={state.title}
          description={state.description}
        />
        <Main
          expandWork={state.expandWork}
          expandEducation={state.expandEducation}
          expandProjects={state.expandProjects}
          title={state.title}
          expandBackground={state.expandBackground}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
