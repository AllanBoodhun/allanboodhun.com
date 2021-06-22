import CardList from '../card-list/card-list.component';
import dribble from "../../../src/dribbble-logo.svg";
import WORKS from '../portfolio/works';
import './portfolio.style.css'



const Portfolio = () => {

  return (
    <div className="Container-all">
      <div className="category-title"> <h2> Mes derniers projets </h2> </div>
      <div className="input-container" >

      </div>
      <div className="container">
        <CardList works={WORKS} />
      </div>
      <div className="link-dribble">
        <a href="https://dribbble.com/allan-boodhun" target="_blank">
        <button>
        <img src={dribble} alt="dribble" width="30" height="30" /> 
        Voir mon compte Dribble
        </button>
        </a>
      </div>
    </div>
  )
}


export default Portfolio;