import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'

const Landing: React.FC = () => {
  return (
      <div id="page-landing">
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                  <img src={Logo} alt="Logo" />
                  <h2>Sua plataforma de estudos online.</h2>
              </div>
              
              <img 
                alt="Plataforma de estudos online" 
                src={LandingImg} 
                className="hero-image"
              />

              <div className="buttons-container">
                  <Link to="/study" className="study">
                    <img src={studyIcon} alt="estudar" />
                    Estudar
                  </Link> 

                  <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="estudar" />
                    Dar aula
                  </Link>  
              </div>
              
              <span className="total-connections">
                  Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
              </span>
          </div>
      </div> 
  );
}

export default Landing; 