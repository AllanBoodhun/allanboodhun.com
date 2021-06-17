import React from 'react';

import './card.style.css';

const Card = props => (
  <div className='card-container'>
    <img src={`${props.work.image}`} alt="Image projet" />
    <h2> {props.work.title} </h2>
    <p>{props.work.url}</p>
  </div>);

export default Card;