import React, { Component } from 'react';
import './App.css';
import {initial, work, education, projects, background} from './panels';
import {expand, shrink, show} from './actions';
import {connect} from 'react-redux';
import classNames from 'classnames';

let Header = ({title, description, onClick}) => (
  <header>
    <div className="title">
      <h1 className="title-name">{title}</h1>
      {title !== 'Alfio Parisi' &&
      <button className="title-button"
        onClick={onClick}
      >Close</button>}
    </div>
    <div className="info">
      {title === 'Alfio Parisi' &&
      <div className="info-pic">
        <img src="" alt="profile pic" />
      </div>}
      <div className="info-description">
        <p>{description.first}</p>
        <p>{description.second}</p>
        <p>{description.third}</p>
      </div>
    </div>
  </header>
);

const mapStateToHeaderProps = state => ({
  title: state.title,
  description: state.description
});

const mapDispatchToHeaderProps = dispatch => ({
  onClick: () => setTimeout(init => dispatch(shrink(initial)), 300)
});

Header = connect(mapStateToHeaderProps, mapDispatchToHeaderProps)(Header);

let Work = ({expandWork, onClick}) => (
  <section className={classNames({
    "panels-work": true,
    "expand": expandWork
  })}>
    {!expandWork &&
    <h2 className="panel-title"
      onClick={onClick}
    >Work</h2>}
    {expandWork &&
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
  <section className={classNames({
    "panels-edu": true,
    "expand": expandEducation
  })}>
    {!expandEducation &&
    <h2 className="panel-title"
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
  <section className={classNames({
    "panels-pjs": true,
    "expand": expandProjects
  })}>
    {!expandProjects &&
    <h2 className="panel-title"
      onClick={onClick}
    >Projects</h2>}
    {expandProjects &&
    projects.projects.map(project => (
      <Project key={project.name}
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
  <section className={classNames({
    "panels-back": true,
    "expand": expandBackground
  })}>
    {!expandBackground &&
    <h2 className="panel-title"
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
  <main className="panels">
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
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
