import './App.css';
import React, { useState, useRef} from "react";
import Scene from './components/scene/scene.home'


export default function App() {
  return (
    <div className="App">
      <div className="Banner">
        <h2>GRAPHISTE - DÉVELOPPEUR WEB</h2>
        <Scene />

      </div>

    </div>
  );
}


