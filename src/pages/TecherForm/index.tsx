import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';
import TextArea from '../../components/TextArea';

const TecherForm: React.FC = () => {
  return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
          title="Que incrível que voçê quer dar aulas."
          description="O primeiro passo, é preencher esse formulário de inscrição" 
        />

        <main>
          <fieldset>
            <legend>Seus Dados</legend>
            
            <Input name="name" label="Nome completo"/>
            <Input name="avatar" label="Avatar"/>
            <Input name="whastapp" label="WhatsApp"/>
            <TextArea name="bio" label="Biografia"/>

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            
            <Input name="subject" label="Materia"/>
            <Input name="cost" label="Custo da sua hora por aula"/>

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>

            <button type="button">
              Salvar Cadastro
            </button>
          </footer>
        </main>
      </div>
  );
}

export default TecherForm;