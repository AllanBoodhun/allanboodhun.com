import CardList from '../card-list/card-list.component';
import dribble from "../../../src/dribbble-logo.svg";
import WORKS from '../portfolio/works';
import './portfolio.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble} from '@fortawesome/free-brands-svg-icons';



const Portfolio = () => {
  const logoDribble = <FontAwesomeIcon icon={faDribbble} />
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
          <button> {logoDribble} &nbsp; Voir mon compte Dribble </button>
        </a>
      </div>
    </div>
  )
}


export default Portfolio;