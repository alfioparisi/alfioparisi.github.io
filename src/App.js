import React, { Component } from 'react';
import './App.css';
import {initial, work, education, projects, background} from './panels';
import {expand, shrink} from './actions';
import store from './reducers';

class App extends Component {
  render() {
    const state = this.props.state;
    return (
      <div>
        <header>
          <div>
            <h1>{state.title}</h1>
            {state.title !== 'ALFIO PARISI' &&
            <button
              onClick={init => store.dispatch(shrink(initial))}
            >Close</button>}
          </div>
          {state.title === 'ALFIO PARISI' && <div>Img wannabe</div>}
          <div><p>{state.description}</p></div>
        </header>
        <main>
          <section>
            {!state.expandWork &&
            <h2
              onClick={panel => store.dispatch(expand(work))}
            >Work</h2>}
            {state.expandWork &&
            work.jobs.map(job => (
              <div key={job.id}>
                <header>
                  <h3>{job.title}</h3>
                  <h4>{job.employer}</h4>
                  <small>{job.dates}</small>
                </header>
                <article>
                  <p>{job.description}</p>
                </article>
                <footer>
                  <p>{job.location}</p>
                </footer>
              </div>
            ))}
          </section>
          <section>
            {!state.expandEducation &&
            <h2
              onClick={panel => store.dispatch(expand(education))}
            >Education</h2>}
            {state.expandEducation &&
            education.schools.map(school => (
              <div key={school.id}>
                <h3>{school.name}</h3>
                <small>{school.dates}</small>
                <p>{school.location}</p>
              </div>
            ))}
            {state.expandEducation &&
              education.onlineCourses.map(course => (
              <div key={course.id}>
                <h3>{course.name}</h3>
                <h4>{course.title}</h4>
                <small>{course.dates}</small>
                <br />
                <a href={course.url} target="_blank">{course.url}</a>
              </div>
            ))}
          </section>
          <section>
            {!state.expandProjects &&
            <h2
              onClick={panel => store.dispatch(expand(projects))}
            >Projects</h2>}
            {state.expandProjects &&
            projects.projects.map(project => (
              <h3 key={project.name}>{project.name}</h3>
            ))
            }
          </section>
          <section>
            {!state.expandBackground &&
            <h2
              onClick={panel => store.dispatch(expand(background))}
            >Background</h2>}
            {state.expandBackground &&
            <div>
              <p>{background.firstP}</p>
              <p>{background.secondP}</p>
            </div>
            }
          </section>
        </main>
        <footer>
          <p>Something gotta go in here.</p>
        </footer>
      </div>
    );
  }
}

export default App;
