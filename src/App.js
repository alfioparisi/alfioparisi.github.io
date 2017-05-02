import React, { Component } from 'react';
import './App.css';
import {initial, work, education, projects, background} from './panels';
import {expand, shrink, show} from './actions';
import {connect} from 'react-redux';

let Header = ({title, description, onClick}) => (
  <header>
    <div>
      // Show the title field of the Redux state.
      <h1>{title}</h1>
      // If a panel is open, show the button.
      {title !== 'ALFIO PARISI' &&
      <button
        // onClick dispatch an action to shrink any open panel.
        onClick={onClick}
      >Close</button>}
    </div>
    // If no panel is opened, show the profile pic and the contacts.
    {title === 'ALFIO PARISI' && <div>Img wannabe</div>}
    <div>
      <p>{description.first}</p>
      <p>{description.second}</p>
      <p>{description.third}</p>
    </div>
  </header>
);

const mapStateToHeaderProps = state => ({
  title: state.title,
  description: state.description
});

const mapDispatchToHeaderProps = dispatch => ({
  onClick: init => dispatch(shrink(initial))
});

Header = connect(mapStateToHeaderProps, mapDispatchToHeaderProps)(Header);

let Work = ({expandWork, onClick}) => (
  <section>
    // If the panel is not expanded just show an 'h2'.
    {!expandWork &&
    <h2
      // onClick dispatch an action to expand this panel.
      onClick={onClick}
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

const mapStateToWorkProps = state => ({
  expandWork: state.expandWork
});

const mapDispatchToWorkProps = dispatch => ({
  onClick: panel => dispatch(expand(work))
});

Work = connect(mapStateToWorkProps, mapDispatchToWorkProps)(Work);

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

let Education = ({expandEducation, onClick}) => (
  <section>
    {!expandEducation &&
    <h2
      onClick={onClick}
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

const mapStateToEduProps = state => ({
  expandEducation: state.expandEducation
});

const mapDispatchToEduProps = dispatch => ({
  onClick: panel => dispatch(expand(education))
});

Education = connect(mapStateToEduProps, mapDispatchToEduProps)(Education);

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

let Projects = ({title, expandProjects, onClick, onProjectClick}) => (
  <section>
    {!expandProjects &&
    <h2
      onClick={onClick}
    >Projects</h2>}
    {expandProjects &&
    projects.projects.map(project => (
      <Project key={project.name}
        // When a project is clicked, show it in an iframe.
        onClick={pj => onProjectClick(project)}
        project={project}
        title={title}
        name={project.name}
        path={project.path}
        src={project.src}
      />
    ))}
  </section>
);

const mapStateToProjectsProps = state => ({
  title: state.title,
  expandProjects: state.expandProjects
});

const mapDispatchToProjectsProps = dispatch => ({
  onClick: panel => dispatch(expand(projects)),
  onProjectClick: pj => dispatch(show(pj))
});

Projects = connect(mapStateToProjectsProps, mapDispatchToProjectsProps)(Projects);

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
let Background = ({expandBackground, onClick}) => (
  <section>
    {!expandBackground &&
    <h2
      onClick={onClick}
    >Background</h2>}
    {expandBackground &&
    <div>
      <p>Maybe put an image in here ?</p>
    </div>
    }
  </section>
);

const mapStateToBackProps = state => ({
  expandBackground: state.expandBackground
});

const mapDispatchToBackProps = dispatch => ({
  onClick: panel => dispatch(expand(background))
});

Background = connect(mapStateToBackProps, mapDispatchToBackProps)(Background);

// Presentational (?)
const Main = () => (
  <main>
    <Work />
    <Education />
    <Projects />
    <Background />
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
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
