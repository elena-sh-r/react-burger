import React from 'react';
import { useSelector } from 'services/hooks/hooks';

import orderIngredientStyles from './order-ingredient.module.css';

interface IProps {
  ingredientId?: string | null,
  text?: string | null,
}

const OrderIngredient = ({ingredientId, text} : IProps) => {
  const {burgerIngredients} = useSelector((state) => state.burgerIngredients);

  const ingredient = burgerIngredients?.find(x => x._id === ingredientId);

  return (
    <>
    {ingredient &&
        <div className={`${orderIngredientStyles['order-ingredient']}`}>
          <div className={`${orderIngredientStyles['order-ingredient__item']}`}>
            <img className={`${orderIngredientStyles['order-ingredient__item-image']} ${text && orderIngredientStyles['order-ingredient__item-image__covered']}`} src={ingredient.image_mobile} alt="Краторная булка N-200i" />
            {text && <p className={`${orderIngredientStyles['order-ingredient__item-text']} text text_type_main-default`}>{text}</p>}
          </div>
        </div>
    }
    </>
  );
}

export default OrderIngredient;