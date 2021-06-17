import React from 'react';

import Card from '../card/card.component'

import './card-list.style.css';

const CardList = props => (
  <div className='card-list'>
    {props.works.map(work => (
      <Card key={work.id} work={work} />
    ))}
  </div>
);

export default CardList;