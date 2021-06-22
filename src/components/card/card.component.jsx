import React from 'react';

import './card.style.css';

const Card = props => (
  <div className='card-container'>
    <div className='media'>{props.work.image}</div>
    <div className="show">
      <h3> {props.work.title} </h3>
      <p>{props.work.description}</p>
      {props.work.url}
    </div>
  </div>);

export default Card;