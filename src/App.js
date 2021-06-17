import './App.css';
import React, { Component } from "react";
import Scene from './components/scene/scene.home'
import web_design from '../src/web_design.png';
import dev from '../src/dev.png';
import print from '../src/print.png';
import WordCloud from './components/wordcloud/wordcloud.component'
import CardList from './components/card-list/card-list.component';
import WORKS from './components/portfolio/works';





class App extends Component  {

  constructor() {
    super();

    this.state = {
      works: WORKS,
      searchField: ''
    };
  }

  // componentDidMount() {
  //   this.setState({ works:  });
  //   // this.setState remplace le contenu de this.state
  // }
  render(){
    const works = this.state.works;


    // const filteredWorks = works.filter(work =>
    //   work.tags.includes(input.value)
    // )

  return (
    <div className="App">

      
      <Scene />

      <div className="specifications">
        <div className="card">
          <img className="image" src={web_design} alt="web design" />
          <h3>Web Design</h3>
          <p>Je fais du webdesign et j'aime taper du texte juste pour voir la place que ça prend :)</p>
        </div>
        <div className="card">
          <img className="image" src={dev} alt="web design" />
          <h3>Développement</h3>
          <p>Je fais du dev, t'as vu. J'ai une formation React et tout et tout avec Rails TMTC</p>
        </div>
        <div className="card">
          <img className="image" src={print} alt="web design" />
          <h3>Charte Graphique</h3>
          <p>Mais à la base je suis graphiste donc je sais faire des trucs joli tkt ++</p>
        </div>
      </div>

      <div className="cloud">
        <WordCloud />
      </div>

      <div className="porfolio">
        <div className="category-title">
          <h2>Porfolio</h2>
        </div>
        <div className="input-container">
         
        </div>
        <div className="container">
          <CardList works={works} />
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
}

export default App;