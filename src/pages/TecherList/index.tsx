import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import './styles.css';



const TecherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });
    
    setTeachers(response.data);
  }

  return (
      <div id="page-techer-list" className="container">
        <PageHeader title="Esses são os proffys disponíveis">
          <form id="search-teachers" onSubmit={searchTeachers}>

            <Select 
                name="subject" 
                label="Materia"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                value={week_day}
                onChange={(e) => setWeekDay(e.target.value)}
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
              <Input 
                type="time" 
                name= "time" 
                label="hora"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <button type="submit">
                Buscar
              </button>
          </form>
        </PageHeader>

        <main>
          {teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher}/>;
          })
          }
          
        </main>
      </div>
  );
}

export default TecherList;