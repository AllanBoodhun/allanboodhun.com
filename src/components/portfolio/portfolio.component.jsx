import React from 'react';

import WORKS from './works';

import './portfolio.style.css';


export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);