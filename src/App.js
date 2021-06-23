import './App.css';
import React, { Component } from "react";
import Scene from './components/scene/scene.home'
import web_design from '../src/web_design.png';
import dev from '../src/dev.png';
import print from '../src/print.png';
import Porfolio from './components/portfolio/portfolio.components';
import Footer from './components/footer/footer.component';
import Loading from './components/loading/loading.component';



class App extends Component {
  state = {
    loading: true
  }

  componentWillMount () {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 3000);
    }

  render() {
    if (this.state.loading) {
      return (
      <Loading />)
    }

    return (
      <div className="App">
        < Scene />
      <div className="description">
        <h2>Bonjour à tous!</h2>
          <p>Je suis graphiste et développeur web freelance avec près de 10 ans d'expérience dans le milieu du web. 
            D'un naturel curieux, je travaille sans cesse à améliorer mes compétences et découvrir de nouveaux outils.
            <br/> N'hésitez pas à parcourir mon site pour mieux me connaitre et à me contacter !</p>
      </div>
      <div className="specifications spec-bg" id="about">
        <div className="card web">
          <img className="image" src={web_design} alt="web design"/>
          <h3> Web Design </h3> 
          <p>En plus de la conception de l'achitecture de votre site, je peux aussi optimiser son ergonomie ainsi que son interface visuelle.</p>
          <h4>Ce que je peux faire pour vous</h4>
          <p>UX/UI Design, Site Web et Application Mobile</p>
          <h4>Avec les outils</h4>
            <p> Figma
              <br />
              Adobe XD
            </p>
        </div> 
        <div className="card dev">
          <img className="image" src={dev} alt="développeur"/>
          <h3> Développement Web</h3> 
          <p> Une fois votre design défini, je peux m'occuper de toute la partie développement, ma spécialité étant le côté front-end, c'est à dire la partie visuelle de votre site.</p>
            <h4>Les langages que je parle</h4>
            <p>HTML, CSS, Sass, JavaScript, Ruby, C#</p>
            <h4>Sur les Frameworks</h4>
            <p> React 
              <br/>
              Rails
            </p>
        </div> 
        <div className="card design">
          <img className="image" src={print}  alt="Charte Graphique" />
          <h3> Charte Graphique </h3> 
          <p> Graphiste de formation, je peux également donner une image à votre projet en respectant vos valeurs et vos envies.</p>
            <h4>Ce que je peux faire pour vous</h4>
            <p>Logos, identités visuelles, brochures, catalogues, illustrations</p>
            <h4>Avec les outils</h4>
            <p> Photoshop
              <br />
              Illustrator
              <br />
              InDesign
              <br />
              Blender
              <br />
              Papier / Crayon
            </p>
        </div> 
      </div>

      <div className="porfolio" id="portfolio">
       <Porfolio/>
      </div>

        <div className="contact" id="contact">
          <div className="content">
            <h2>Commençons à travailler ensemble ! </h2>
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