import './App.css';
import React, { useState, useRef} from "react";
import Scene from './components/scene/scene.home'


export default function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div>
        <h2>GRAPHISTE <br />
         DÉVELOPPEUR WEB</h2> <br />
        <button>En savoir plus</button>
        </div>
         
        <Scene />

      </div>

    </div>
  );
}


