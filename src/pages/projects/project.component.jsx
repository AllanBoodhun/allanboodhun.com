import React from 'react';
import Primary from '../../components/primary/primary.components';
import './project.style.css';
import CardList from '../../components/card-list/card-list.component';
import WORKS from '../../components/portfolio/works';


const Project = props => (
  <div className='project'>
    <div className='navbar-project'>
      <Primary />
    </div>
    <h1>Mes projets</h1>
    <CardList works={WORKS}/>
  </div>
  );

export default Project;