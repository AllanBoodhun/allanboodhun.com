import './App.css';
import React, { Component } from "react";
import Scene from './components/scene/scene.home'
import web_design from '../src/web_design.png';
import dev from '../src/dev.png';
import print from '../src/print.png';
import WORKS from './components/portfolio/works';
import Porfolio from './components/portfolio/portfolio.components';
import Footer from './components/footer/footer.component';






class App extends Component {

  constructor() {
    super();

    this.state = {
      works: WORKS,
      checked: false,
    };
  }

  render() {
    const works = this.state.works;
    return (
      <div className="App">
        < Scene />
      <div className="description">
        <h2>Salut!</h2>
          <p>Je suis Graphiste et Develloppeur web freelance avec près de 10 ans d'expérience dans le milieu du web. 
            D'un naturel curieux, je travaille sans cesse à améliorer mes compétences, un problème de conception à la fois.</p>
      </div>
      <div className="specifications spec-bg" id="about">
        <div className="card web">
          <img className="image" src={web_design} alt="web design"/>
          <h3> Web Design </h3> 
          <p> Je fais du webdesign et j'aime taper du texte juste pour voir la place que ça prend :)</p>
          <h4>Ce que je peux faire pour vous</h4>
          <p>UX/UI, Web, Mobile</p>
          <h4>Avec les outils</h4>
          <ul> 
              <li>Figma</li>
              <li>Adobe XD</li>
          </ul>
        </div> 
        <div className="card dev">
          <img className="image" src={dev} alt="développeur"/>
          <h3> Développement </h3> 
          <p> Je fais du dev, t 'as vu. J'ai une formation React et tout et tout avec Rails TMTC </p>
            <h4>Les langages que je parle</h4>
            <p>HTML, CSS, Sass, JavaScript, Ruby, C#</p>
            <h4>Sur les Frameworks</h4>
            <ul>
              <li>React</li>
              <li>Rails</li>
            </ul>
        </div> 
        <div className="card design">
          <img className="image" src={print}  alt="Charte Graphique" />
          <h3> Charte Graphique </h3> 
          <p> Mais à la base je suis graphiste donc je sais faire des trucs joli tkt++ </p>
            <h4>Ce que je peux faire pour vous</h4>
            <p>Logos, identitées visuelles, brochures, catalogues, illustrations</p>
            <h4>Avec les outils</h4>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>Papier / Crayon</li>
            </ul>
        </div> 
      </div>

      <div className="porfolio" id="portfolio">
       <Porfolio/>
      </div>

        <div className="contact" id="contact">
          <div className="content">
            <h2>Pour commencer <br/>à travailler ensemble </h2>
            <p> N'hésitez pas à m'envoyer un mail et je vous recontacterai rapidement pour discuter de votre projet </p>
            <a href="mailto:allan.boodhun@gmail.com">Envoyer un mail</a>
          </div>
        </div> 

        <Footer />
      </div>
    );
    }
}

export default App;