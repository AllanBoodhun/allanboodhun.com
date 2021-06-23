import React from 'react';
import './footer.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faDribbble, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  const dribble = <FontAwesomeIcon icon={faDribbble} />
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />
  const github = <FontAwesomeIcon icon={faGithub} />
  const instagram = <FontAwesomeIcon icon={faInstagram} />

  return (
    <div className="footer">
      <ul className="social">
        <li><a href="https://dribbble.com/allan-boodhun" target="_blank">{dribble}</a></li>
        <li><a href="https://www.linkedin.com/in/allan-boodhun-5958b4145/" target="_blank">{linkedin}</a></li>
        <li><a href="https://github.com/AllanBoodhun" target="_blank">{github}</a></li>
        {/* <li><a href="https://dribbble.com/allan-boodhun">{instagram}</a></li> */}
      </ul>
    </div>
  )
}


export default Footer;