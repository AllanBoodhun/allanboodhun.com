import React from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import WORDS from './words';

const options ={
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [30, 90],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 0.5,
  rotations: 1,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
  
};

function WordCloud() {
  return (
    <div className="wordcloud">
      <ReactWordcloud 
      words={WORDS} 
      options= {options}
      />
    </div>
  );
}

export default WordCloud;