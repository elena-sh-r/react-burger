import React from 'react';
import { useDrag } from 'react-dnd';
import { useHistory, useLocation } from 'react-router-dom';

import { useSelector } from 'services/hooks/hooks';

import ingredientStyles from './ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { TIngredientType } from 'services/types/data';

interface IProps {
  item: TIngredientType,
}

const Ingredient = ({ item }: IProps) => {
  const location = useLocation();
  const history = useHistory();

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: {item}
  });

  const {constructorIngredients} = useSelector((store) => store.burgerConstructor);

  let count = constructorIngredients.filter(x => x._id === item._id).length;

  if(item.type === 'bun') {
    count *= 2;
  }

  return (
    <div className={`${ingredientStyles['ingredient__item']}`} ref={dragRef} onClick={() => history.push('/ingredients/' + item._id, { background: location })} >
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