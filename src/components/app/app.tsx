import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import appStyles from 'components/app/app.module.css' ;

import AppHeader from 'components/app-header/app-header';
import ModalSwitch from 'components/modal-switch/modal-switch';
import { useDispatch } from 'services/hooks/hooks';
import { getBurgerIngredientsThunk } from 'services/actions/burger-ingredients';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredientsThunk())
  }, [dispatch]);

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
