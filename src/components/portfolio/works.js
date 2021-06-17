import gac from "../../../src/gareAuCovid.jpg";
import culture from "../../../src/SiteCulture.jpg";
import lemarchand from " ../../../src/SiteLemarchand.jpg"
import fruit from "../../../src/fruits_legume_saison.jpg"

const WORKS = [{
  id: 1,
  image: <iframe width="560" height="315" src="https://www.youtube.com/embed/7tKfGNHxz2Y?start=2485" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
  title: 'Gare Au Covid',
  url: 'https//gare-au-covid.com',
  tags: ["web_design", "charte graphique", "développement"],
},
{
  id: 2,
  image: <img src={`${culture}`} alt="Image projet" />,
  title: 'cultureindoor.com',
  url: '',
  tags: ["web_design"],
},
{
  id: 3,
  image: <img src={`${lemarchand}`} alt="Image projet" />,
  title: 'lemarchand.fr',
  url: '',
  tags: ["web_design"],
},
{
  id: 4,
  image: <img src={`${fruit}`} alt="Image projet" />,
  title: 'Fruits et Légumes de saison',
  url: '',
  tags: ["graphisme"],
},
]

export default WORKS;