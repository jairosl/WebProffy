import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TecherForm from './pages/TecherForm';
import TecherList from './pages/TecherList';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/study" component={TecherList}/>
        <Route path="/give-classes" component={TecherForm}/>
    </BrowserRouter>
  );
}

export default Routes;