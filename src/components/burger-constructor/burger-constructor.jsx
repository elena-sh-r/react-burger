import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import burgerConstructorStyles from './burger-constructor.module.css';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrderDetails } from 'services/actions/order-details';
import BurgerConstructorItems from 'components/burger-constructor-items/burger-constructor-items';

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const ingredientsData = useSelector((store) => store.burgerConstructor.constructorIngredients);

  const isBun = (item) => item.type === 'bun';

  const bun = ingredientsData?.find(item => isBun(item));
  const fillings = ingredientsData?.map((item, index) => { return {...item, index: index}} ).filter(item => !isBun(item));

  const reducer = (previousItem, currentItem) => previousItem + currentItem.price;
  const totalPrice = (bun?.price ?? 0) * 2 + (fillings?.reduce(reducer, 0) ?? 0);

  const orderIngredientsData = [bun].concat(fillings).concat([bun]);

  return (
    <section className={`${burgerConstructorStyles['burger-constructor']} mt-25 pl-10 pb-10`}>
      <BurgerConstructorItems bun={bun} fillings={fillings} />
      <div className={`${burgerConstructorStyles['burger-constructor__burger-price-container']} pt-10 pr-2`}>
        <div className={`${burgerConstructorStyles['burger-constructor__burger-price-container']} pr-10`}>
          <p className={`${burgerConstructorStyles['burger-constructor__burger-price']} text text_type_digits-medium`}>{totalPrice}</p>
          <CurrencyIcon width="33" heigh="33" type="primary" />
        </div>
        {bun && totalPrice > 0 && <Button className={`pl-10`} type="primary" size="large" onClick={() => dispatch(getOrderDetails({ ingredients: orderIngredientsData.map(item => item?._id) }))} >
          Оформить заказ
        </Button>}
      </div>
    </section>
  );
}

export default BurgerConstructor;