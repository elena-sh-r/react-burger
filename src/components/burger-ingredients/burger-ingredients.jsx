import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';

import ingredientsStyles from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientsList from '../ingredients-list/ingredients-list';
import { ingredientType } from 'utils/types';

const BurgerIngredients = ({ data, handleIngredientClick }) => {
  const [current, setCurrent] = useState('one');

  const bunsRef = createRef();
  const sauceRef = createRef();
  const mainRef = createRef();

  return (
    <section className={`${ingredientsStyles['burger-ingredients']} pt-10 pl-5 pb-10`}>
      <h2 className={`text text_type_main-large pb-5`}>Соберите бургер</h2>
      <div style={{ display: 'flex' }} className={`pb-10`}>
        <Tab value="one" active={current === 'one'} onClick={(value) => {
          setCurrent(value);
          bunsRef.current.scrollIntoView({ behavior: 'smooth' });
        }}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={(value) => {
          setCurrent(value);
          sauceRef.current.scrollIntoView({ behavior: 'smooth' });
        }}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={(value) => {
          setCurrent(value);
          mainRef.current.scrollIntoView({ behavior: 'smooth' });
        }}>
          Начинки
        </Tab>
      </div>
      <div className={`${ingredientsStyles['burger-ingredients__ingredients-list-container']}`}>
        <IngredientsList data={data} title="Булки" type="bun" ref={bunsRef} handleIngredientClick={handleIngredientClick} />
        <IngredientsList data={data} title="Соусы" type="sauce" ref={sauceRef} handleIngredientClick={handleIngredientClick} />
        <IngredientsList data={data} title="Начинки" type="main" ref={mainRef} handleIngredientClick={handleIngredientClick} />
      </div>
    </section>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
  handleIngredientClick: PropTypes.func.isRequired,
};
