import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';
// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
        <header>
        <img src="https://avatars2.githubusercontent.com/u/65239333?s=460&u=91fa835e726a97feaebbdc41e5d6e7581fb3012b&v=4" alt="Jairo Soares"/>
        <div>
            <strong>Jairo Soares</strong>
            <span>Matemática</span>
        </div>
        </header>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br/> <br/>
        Vel eligendi id sequi placeat pariatur,obcaecati quas in, quibusdam quis dolor a dolorum odio dicta, quibusdam nesciunt.
        </p>

        <footer>
        <p>
            Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            Entar em contato
        </button>
        </footer>
  </article>
  );
}

export default TeacherItem;