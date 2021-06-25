import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Project from './pages/projects/project.component';

import WORKS from './components/portfolio/works';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/projects' component={Project} />
      </Switch>
    </div>
  );
}

export default App;