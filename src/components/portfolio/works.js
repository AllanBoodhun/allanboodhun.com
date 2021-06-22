import gac from "../../../src/gareAuCovid.jpg";
import culture from "../../../src/SiteCulture.jpg";
import lemarchand from " ../../../src/SiteLemarchand.jpg"
import fruit from "../../../src/fruits_legume_saison.jpg"

const WORKS = [{
  id: 1,
  image: <img src={`${gac}`} alt="Image projet" />,
  title: 'Gare Au Covid',
  url: <a href = 'https://youtu.be/7tKfGNHxz2Y?t=2484' target = "_blank" > Voir la démo</a>,
  tags: ["web_design", "charte graphique", "développement"],
  description: "Un jeu de carte sur thème du Covid"
},
{
  id: 2,
  image: <img src={`${culture}`} alt="Image projet" />,
  title: 'Cultureindoor.com',
  url: '',
  tags: ["web_design"],
  description: "La refonte graphique du site cultureindoor.com",
},
{
  id: 3,
  image: <img src={`${lemarchand}`} alt="Image projet" />,
  title: 'Lemarchand.fr',
  url: <a href='https://www.lemarchand-sas.fr/' target="_blank" > Voir le site</a>,
  tags: ["web_design"],
  description: "La refonte graphique du site lemarchand.fr",
},
{
  id: 4,
  image: <img src={`${fruit}`} alt="Image projet" />,
  title: 'Fruits et Légumes de saison',
  url: '',
  tags: ["graphisme"],
  description: "Un calendrier fait en aquarelle métant en valeur les fruits et légumes de saison",
},
]

export default WORKS;