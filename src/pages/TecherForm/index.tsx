import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

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
            
            <Select 
              name="subject" 
              label="Materia"
              options={[
                { value: 'Artes', label: 'Artes'},
                { value: 'Biologia', label: 'Biologia'},
                { value: 'Matemática', label: 'Matemática'},
                { value: 'Educação Física', label: 'Educação Física'},
                { value: 'Física', label: 'Física'},
                { value: 'Química', label: 'Química'},
                { value: 'Geografia', label: 'Geografia'},
                { value: 'Historia', label: 'Historia'},
                { value: 'Português', label: 'Português'},
                { value: 'Inglês', label: 'Inglês'},
              ]}
            />
            
            <Input name="cost" label="Custo da sua hora por aula"/>

          </fieldset>

          <fieldset>
            <legend>
              Horarios Disponíveis
              <button type="button">
                + Novo Horario
              </button>
            </legend>
            
            <div className="schedule-item">
              <Select 
                name="week_day" 
                label="Dia da semana"
                options={[
                  { value: '0', label: 'Domingo'},
                  { value: '1', label: 'Segunda'},
                  { value: '2', label: 'Terça'},
                  { value: '3', label: 'Quarta'},
                  { value: '4', label: 'Quinta'},
                  { value: '5', label: 'Sexta'},
                  { value: '6', label: 'Sábado'},
                ]}
              />
              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </div>
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