import React from 'react';
import './navbar.style.css';

const Navbar = () => {


  return (
    <div className="navbar">
      <ul>
        <li><a href="#about">A propos</a></li>
        <li>|</li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li>|</li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}


export default Navbar;