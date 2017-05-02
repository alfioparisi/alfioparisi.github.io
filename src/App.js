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
            {state.expandWork && <div>iframe wannabe</div>}
          </section>
          <section>
            {!state.expandEducation &&
            <h2
              onClick={panel => store.dispatch(expand(education))}
            >Education</h2>}
            {state.expandEducation && <div>iframe wannabe</div>}
          </section>
          <section>
            {!state.expandProjects &&
            <h2
              onClick={panel => store.dispatch(expand(projects))}
            >Projects</h2>}
            {state.expandProjects && <div>iframe wannabe</div>}
          </section>
          <section>
            {!state.expandBackground &&
            <h2
              onClick={panel => store.dispatch(expand(background))}
            >Background</h2>}
            {state.expandBackground && <div>iframe wannabe</div>}
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
