import React from 'react';

import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import data from '../../utils/data';

const App = ( ) => {
  return (
    <div className={`${appStyles.app}`}>
      <AppHeader/>
      <main className={`${appStyles.main}`}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
  </div>
  );
}

export default App;
