import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Project from './pages/projects/project.component';


const ProjectDetail = props => {
  return(
    <div>
      <h2>Détail du projet {props.match.params.projectId}</h2>
      <p>{props.match.params.projectId}</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/projects' component={Project} />
        <Route exact path='/projects/:projectId' component={ProjectDetail} />
      </Switch>
    </div>
  );
}

export default App;