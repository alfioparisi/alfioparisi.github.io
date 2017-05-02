import React, { Component } from 'react';
import './App.css';
import {initial, work, education, projects, background} from './panels';
import {expand, shrink, show} from './actions';
import store from './reducers';

const Header = ({title, description}) => (
  <header>
    <div>
      <h1>{title}</h1>
      {title !== 'ALFIO PARISI' &&
      <button
        onClick={init => store.dispatch(shrink(initial))}
      >Close</button>}
    </div>
    {title === 'ALFIO PARISI' && <div>Img wannabe</div>}
    <div><p>{description}</p></div>
  </header>
);

const Work = ({expandWork}) => (
  <section>
    {!expandWork &&
    <h2
      onClick={panel => store.dispatch(expand(work))}
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

const School = ({name, dates, location}) => (
  <div>
    <h3>{name}</h3>
    <small>{dates}</small>
    <p>{location}</p>
  </div>
);

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
        project={project}
        title={title}
        name={project.name}
        path={project.path}
        src={project.src}
      />
    ))}
  </section>
);

const Project = ({project, title, name, path, src}) => (
  <div>
    <h3 onClick={pj => store.dispatch(show(project))}>
      {name}
    </h3>
    {title === name &&
    <div>
      <iframe src={path}></iframe>
      <a href={src}>GitHub repository</a>
    </div>}
  </div>
);

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

const Main = ({expandWork, expandEducation, expandProjects, title, expandBackground}) => (
  <main>
    <Work expandWork={expandWork} />
    <Education expandEducation={expandEducation} />
    <Projects expandProjects={expandProjects} title={title} />
    <Background expandBackground={expandBackground} />
  </main>
);

const Footer = () => (
  <footer>
    <p>Something gotta go in here.</p>
  </footer>
);

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
