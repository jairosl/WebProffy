import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface pageHeaderProps {
    title:  string;
    description?: string

}

const PageHeader: React.FC<pageHeaderProps> = ({ title, description,children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
          <strong>{title}</strong>
          {description && <p>{description}</p> }

          {children}
      </div>
    </header>
  );
}

export default PageHeader;