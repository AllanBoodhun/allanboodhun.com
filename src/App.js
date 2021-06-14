import './App.css';
import React, { useState, useRef } from "react";
import Scene from './components/scene/scene.home'


export default function App() {
  return (
    <div className="App">
      <Scene />
      <div className="Banner">

      </div>
      <div className="category-title">
        <h2>A propos de moi</h2>
      </div>
      <div className="specifications">
        <div className="card">
          <div className="image"></div>
          <h3>Web Design</h3>
          <p>Je fais du webdesign et j'aime taper du texte juste pour voir la place que ça prend :)</p>
        </div>
        <div className="card">
          <div className="image"></div>
          <h3>Développement</h3>
          <p>Je fais du dev, t'as vu. J'ai une formation React et tout et tout avec Rails TMTC</p>
        </div>
        <div className="card">
          <div className="image"></div>
          <h3>Charte Graphique</h3>
          <p>Mais à la base je suis graphiste donc je sais faire des trucs joli tkt ++</p>
        </div>
      </div>

      <div className="cloud">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>C#</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Blender</li>
          <li>Git</li>
        </ul>
      </div>

      <div className="porfolio">
        <div className="category-title">
          <h2>Porfolio</h2>
        </div>

      </div>

      <div className="contact">
        <div className="category-title">
          <h2>Me contacter</h2>
        </div>

      </div>
    </div>
  );
}


