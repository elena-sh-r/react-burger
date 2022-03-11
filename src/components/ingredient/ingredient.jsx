import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import ingredientStyles from './ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { setIngredientDetails } from '../../services/actions/ingredient-details';
import { ingredientType } from 'utils/types';

const Ingredient = ({ item }) => {
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: {item}
  });

  const ingredientsData = useSelector((store) => store.burgerConstructor.constructorIngredients);

  let count = ingredientsData.filter(x => x._id === item._id).length;

  if(item.type === 'bun') {
    count *= 2;
  }

  return (
    <div className={`${ingredientStyles['ingredient__item']}`} ref={dragRef} onClick={() => dispatch(setIngredientDetails({ ingredient: item }))} >
      {count > 0 && <div className={`${ingredientStyles['ingredient__counter']} text_type_digits-default`}>{count}</div>}
      <img className={`pb-1`} src={item.image} alt={item.name} />
      <div className={`${ingredientStyles['ingredient__container']} pb-1`}>
        <p className={`${ingredientStyles['ingredient__price']} text text_type_digits-default pr-2`}>{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${ingredientStyles['ingredient__name']} text text_type_main-default`}>{item.name}</p>
    </div>
  )
};

export default Ingredient;

Ingredient.propTypes = {
  item: PropTypes.shape(ingredientType).isRequired,
};