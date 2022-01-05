import React, { useState, createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ingredientsStyles from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientsList from '../ingredients-list/ingredients-list';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.burgerIngredients.burgerIngredients);
  const [current, setCurrent] = useState('one');

  const bunsRef = createRef();
  const sauceRef = createRef();
  const mainRef = createRef();

  const onScroll = (e) =>
  {
    const delta = 10;
    const containerY = e.target.getBoundingClientRect().y;
    const sauceY = sauceRef.current.getBoundingClientRect().y;
    const mainY = mainRef.current.getBoundingClientRect().y;

    if (mainY <= containerY + delta){
      setCurrent('three');
    } else if (sauceY <= containerY + delta){
      setCurrent('two');
    } else {
      setCurrent('one');
    }
  }

  useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch]);

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
      <div className={`${ingredientsStyles['burger-ingredients__ingredients-list-container']}`} onScroll={onScroll}>
        <IngredientsList data={data} title="Булки" type="bun" ref={bunsRef} />
        <IngredientsList data={data} title="Соусы" type="sauce" ref={sauceRef} />
        <IngredientsList data={data} title="Начинки" type="main" ref={mainRef} />
      </div>
    </section>
  );
}

export default BurgerIngredients;