import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

const TecherForm: React.FC = () => {

  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [wahtsapp, setWahtsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]) ;

  function addNewScheduleItem() {
    setScheduleItems([ 
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
     ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('/classes', {
      name,
      avatar,
      whatsapp: wahtsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems

    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/')
    }).catch((error) => {
      alert('Erro no cadastro!');
      console.log(error);
    });
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if(index === position) {
        if (field === "week_day") return { ...scheduleItem, [field]: Number(value)}
        return { ...scheduleItem, [field]: value}
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
          title="Que incrível que voçê quer dar aulas."
          description="O primeiro passo, é preencher esse formulário de inscrição" 
        />

        <main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Seus Dados</legend>
              
              <Input 
                name="name"
                label="Nome completo" 
                value={name} 
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />

              <Input 
                name="avatar" 
                label="Avatar"
                value={avatar} 
                onChange={(event) => {
                  setAvatar(event.target.value);
                }}
              />

              <Input 
                name="whastapp" 
                label="WhatsApp"
                value={wahtsapp}
                onChange={(event) => {
                  setWahtsapp(event.target.value);
                }}
              />

              <TextArea 
                name="bio" 
                label="Biografia"
                value={bio}
                onChange={(event) => {
                  setBio(event.target.value);
                }}
              />

            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>
              
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
              
              <Input 
                name="cost" 
                label="Custo da sua hora por aula"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />

            </fieldset>

            <fieldset>
              <legend>
                Horarios Disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo Horario
                </button>
              </legend>
              
              {scheduleItems.map((scheduleItem, index) => (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value) }
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
                    name="from" 
                    label="Das"
                    value={scheduleItem.from} 
                    type="time" 
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value) }
                  />
                  <Input 
                    name="to" 
                    label="Até"
                    value={scheduleItem.to}  
                    type="time" 
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value) }
                  />
              </div>
              ))}
            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso Importante"/>
                Importante! <br />
                Preencha todos os dados
              </p>

              <button type="submit">
                Salvar Cadastro
              </button>
            </footer>
          </form>
        </main>
      </div>
  );
}

export default TecherForm;