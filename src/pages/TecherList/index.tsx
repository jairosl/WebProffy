import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';



import './styles.css';

const TecherList: React.FC = () => {
  return (
      <div id="page-techer-list" className="container">
        <PageHeader title="Esses são os proffys disponíveis">
          <form id="search-teachers">

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
              <Input type="time" name= "time" label="hora"/>
          </form>
        </PageHeader>

        <main>
          <TeacherItem />
        </main>
      </div>
  );
}

export default TecherList;