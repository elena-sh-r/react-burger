import React, { useEffect } from 'react';

import burgerConstructorStyles from './burger-constructor.module.css';

import { useSelector, useDispatch } from 'services/hooks/hooks';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrderDetailsUnauthStart, getOrderDetailsThunk, resetOrderDetailsAction } from 'services/actions/order-details';
import BurgerConstructorItems from 'components/burger-constructor-items/burger-constructor-items';
import { TIngredientType } from 'services/types/data';
import useAuth from 'services/auth';
import { Redirect } from 'react-router-dom';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { refreshToken } = useAuth();

  const { accessToken } = useSelector((state) => state.user);
  const { constructorIngredients } = useSelector((store) => store.burgerConstructor);
  const { orderDetailsUnauthStart } = useSelector((store) => store.orderDetails);

  const isBun = (item: TIngredientType) => item.type === 'bun';

  const bun = constructorIngredients?.find(item => isBun(item));
  const fillings = constructorIngredients?.map((item, index) => { return {...item, index: index}} ).filter(item => !isBun(item));

  const reducer = (previousItem: number, currentItem: TIngredientType) => previousItem + currentItem.price;
  const totalPrice = (bun?.price ?? 0) * 2 + (fillings?.reduce(reducer, 0) ?? 0);

  const orderIngredientsData = [bun].concat(fillings).concat([bun]);

  const createOrder = () => {
    if (refreshToken){
      dispatch(getOrderDetailsThunk(refreshToken, accessToken, orderIngredientsData));
    }
    else {
      dispatch(getOrderDetailsUnauthStart());
    }
  }

  useEffect(() => {
    dispatch(resetOrderDetailsAction());
  }, [orderDetailsUnauthStart])

  if (!refreshToken && orderDetailsUnauthStart) {
    return <Redirect to={'/login'} />
  }

  return (
    <section className={`${burgerConstructorStyles['burger-constructor']} mt-25 pl-10 pb-10`}>
      <BurgerConstructorItems bun={bun!} fillings={fillings} />
      <div className={`${burgerConstructorStyles['burger-constructor__burger-price-container']} pt-10 pr-2`}>
        <div className={`${burgerConstructorStyles['burger-constructor__burger-price-container']} pr-10`}>
          <p className={`${burgerConstructorStyles['burger-constructor__burger-price']} text text_type_digits-medium`}>{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        {bun && totalPrice > 0 && <div className={`pl-10`}><Button type="primary" size="large" onClick={createOrder} >
          Оформить заказ
        </Button></div>}
      </div>
    </section>
  );
}

export default BurgerConstructor;