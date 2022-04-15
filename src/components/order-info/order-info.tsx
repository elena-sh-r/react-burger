import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'services/hooks/hooks';

import orderInfoStyles from 'components/order-info/order-info.module.css';
import { Redirect, useParams } from 'react-router-dom';

import { ORDER_STATUS_CREATED, ORDER_STATUS_DONE, ORDER_STATUS_PENDING } from 'utils/constants';
import { TOrderType } from 'services/types/data';
import { wsConnectionStart } from 'services/actions/ws';
import { getBurgerIngredientsThunk } from 'services/actions/burger-ingredients';
import OrderInfoIngredient from 'components/order-info-ingredient/order-info-ingredient';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface IParams {
  orderId: string;
}

interface IProps {
  isModal?: boolean,
}

const OrderInfo = ({isModal} : IProps) => {
  const dispatch = useDispatch();
  const { orderId } = useParams<IParams>();
  const { message } = useSelector((state) => state.ws);
  const {burgerIngredients} = useSelector((state) => state.burgerIngredients);

  useEffect(() => {
    dispatch(getBurgerIngredientsThunk())
  }, [dispatch]);

  useEffect(() => {
    if (!message) {
      dispatch(wsConnectionStart());
    }
  }, [dispatch, message]);

  const order = message?.orders?.find((x: TOrderType) => x._id === orderId);

  if (message && !order) {
    return <Redirect to='/' />;
  }

  const sum = order?.ingredients?.reduce(
    (prev: number, cur: string) => prev + (burgerIngredients?.find(x => x._id === cur)?.price ?? 0),
    0
  );  

  const date = new Date(order?.createdAt);
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneHours = timezoneOffset / -60;
  const dayDelta = new Date().getDate() - date.getDate();
  const dayString = dayDelta === 0 ? 'Сегодня' : (dayDelta === 1 ? 'Вчера' : (dayDelta + ' дня назад'));
  const timezoneString = `${dayString}, ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)} i-GMT${timezoneHours >= 0 && '+'}${timezoneHours}`;
  
  let statusText = '';
  let statusTextClass = ``;

  switch (order?.status) {
    case ORDER_STATUS_DONE:
      statusText = 'Выполнен';
      statusTextClass = `${orderInfoStyles['text_color_success']}`
      break;
    case ORDER_STATUS_PENDING:
      statusText = 'Готовится';
      break;
    case ORDER_STATUS_CREATED:
      statusText = 'Создан';
      break;
    default:
      statusText = '';
  }

  const onlyUnique = (value: string, index: number, self: string) => {
    return self.indexOf(value) === index;
  }

  return (
    order
      ? <div className={`${orderInfoStyles['order-info']} pb-10`}>
          <p className={`${orderInfoStyles['order-title']} ${isModal && orderInfoStyles['order-title_modal']} text text_type_digits-default pb-4`}>#{order?.number}</p>
          <h3 className={`text text_type_main-medium pb-2`}>{order?.name}</h3>
          <p className={`text text_type_main-default ${statusTextClass} pb-15`}>{statusText}</p>
          <p className={`text text_type_main-medium pb-6`}>Состав:</p>
          <div className={`${orderInfoStyles['order-info-ingredients']}`}>
            {order.ingredients?.filter(onlyUnique).map((ingredientId: string, index: number) => <OrderInfoIngredient key={ingredientId + index} ingredientId={ingredientId} ingredientIds={order.ingredients} />)}
          </div>
          <div className={`${orderInfoStyles['order-info-time-price']}`}>
            <span className={`${orderInfoStyles['order-info-time']} text_type_main-default text_color_inactive`}>{timezoneString}</span>
            <p className={`${orderInfoStyles['order-info-price']} text text_type_digits-default pr-2`}>{sum}</p>
            <CurrencyIcon type='primary' />
          </div>
        </div>
      : <></>
  );
}

export default OrderInfo;