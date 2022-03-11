import React, { useState, createRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'services/hooks/hooks';

import ingredientsStyles from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientsList from '../ingredients-list/ingredients-list';
import { getBurgerIngredientsThunk } from '../../services/actions/burger-ingredients';

import { TIngredientType } from 'services/types/data';

interface IState {
  burgerIngredients: ReadonlyArray<TIngredientType>,
}

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const {burgerIngredients} = useSelector((state) => state.burgerIngredients) as IState;
  const [current, setCurrent] = useState('one');

  const bunsRef = createRef<HTMLDivElement>();
  const sauceRef = createRef<HTMLDivElement>();
  const mainRef = createRef<HTMLDivElement>();

  const onScroll = (e: any) =>
  {
    const delta = 10;
    const containerY = e.target.getBoundingClientRect().y;
    const sauceY = sauceRef.current!.getBoundingClientRect().y;
    const mainY = mainRef.current!.getBoundingClientRect().y;

    if (mainY <= containerY + delta){
      setCurrent('three');
    } else if (sauceY <= containerY + delta){
      setCurrent('two');
    } else {
      setCurrent('one');
    }
  }

  useEffect(() => {
    dispatch(getBurgerIngredientsThunk())
  }, [dispatch]);

  return (
    <section className={`${ingredientsStyles['burger-ingredients']} pt-10 pl-5 pb-10`}>
      <h2 className={`text text_type_main-large pb-5`}>Соберите бургер</h2>
      <div style={{ display: 'flex' }} className={`pb-10`}>
        <Tab value="one" active={current === 'one'} onClick={(value) => {
          setCurrent(value);
          bunsRef.current!.scrollIntoView({ behavior: 'smooth' });
        }}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={(value) => {
          setCurrent(value);
          sauceRef.current!.scrollIntoView({ behavior: 'smooth' });
        }}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={(value) => {
          setCurrent(value);
          mainRef.current!.scrollIntoView({ behavior: 'smooth' });
        }}>
          Начинки
        </Tab>
      </div>
      <div className={`${ingredientsStyles['burger-ingredients__ingredients-list-container']}`} onScroll={onScroll}>
        <IngredientsList data={burgerIngredients} title="Булки" type="bun" ref={bunsRef} />
        <IngredientsList data={burgerIngredients} title="Соусы" type="sauce" ref={sauceRef} />
        <IngredientsList data={burgerIngredients} title="Начинки" type="main" ref={mainRef} />
      </div>
    </section>
  );
}

export default BurgerIngredients;