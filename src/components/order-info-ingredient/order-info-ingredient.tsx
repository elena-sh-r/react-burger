import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useSelector } from 'services/hooks/hooks';

import orderInfoIngredientStyles from 'components/order-info-ingredient/order-info-ingredient.module.css';

interface IProps {
  ingredientId?: string | null,
  ingredientIds: ReadonlyArray<string>,
}

const OrderInfoIngredient = ({ingredientId, ingredientIds} : IProps) => {
  const {burgerIngredients} = useSelector((state) => state.burgerIngredients);

  const ingredient = burgerIngredients?.find(x => x._id === ingredientId);
  const count = ingredientIds?.filter(x => x === ingredientId).length ?? 0;

  return (
    <>
    {ingredient &&
      <div className={`${orderInfoIngredientStyles['order-info-ingredient']}`}>
          <div className={`${orderInfoIngredientStyles['order-info-ingredient__icon']}`}>
            <div className={`${orderInfoIngredientStyles['order-info-ingredient__item']}`}>
              <img className={`${orderInfoIngredientStyles['order-info-ingredient__item-image']}`} src={ingredient.image_mobile} alt={ingredient.name} />
            </div>
          </div>
          <p className={`${orderInfoIngredientStyles['order-info-ingredient__text']} pl-4 text text_type_main-default`}>
            {ingredient.name}
          </p>
          <p className={`${orderInfoIngredientStyles['order-info-ingredient__price']} pl-4 text text_type_digits-default`}>
            {count} x {ingredient.price}
          </p>
          <CurrencyIcon type='primary' />
      </div>
    }
    </>
  );
}

export default OrderInfoIngredient;