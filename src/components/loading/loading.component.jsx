import React from 'react';
import ReactLoading from 'react-loading';
import './loading.style.css';

const Loading = () => (
  <div className='loading'>
    <ReactLoading 
      type='balls'
      color='#ffffff'
    />
  </div>
)

export default Loading