import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import appStyles from 'components/app/app.module.css' ;

import AppHeader from 'components/app-header/app-header';
import ModalSwitch from 'components/modal-switch/modal-switch';

const App = () => {
  return (
    <Router>
      <div className={`${appStyles.app}`}>
        <AppHeader/>
        <ModalSwitch/>
      </div>
    </Router>
  );
}

export default App;
