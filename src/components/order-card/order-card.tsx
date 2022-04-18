import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import orderCardStyles from './order-card.module.css';
import OrderIngredients from 'components/order-ingredients/order-ingredients';
import { TOrderType } from 'services/types/data';
import { useSelector } from 'services/hooks/hooks';
import { useHistory } from 'react-router-dom';
import { ORDER_STATUS_CREATED, ORDER_STATUS_DONE, ORDER_STATUS_PENDING } from 'utils/constants';

interface IProps {
  order: TOrderType,
  statusVisible?: boolean,
}

const OrderCard = ({order, statusVisible} : IProps) => {
  const history = useHistory();
  const {burgerIngredients} = useSelector((state) => state.burgerIngredients);

  const sum = order.ingredients?.reduce(
    (prev, cur) => prev + (burgerIngredients?.find(x => x._id === cur)?.price ?? 0),
    0
  );  

  const date = new Date(order.createdAt);
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneHours = timezoneOffset / -60;
  const dayDelta = new Date().getDate() - date.getDate();
  const dayString = dayDelta === 0 ? 'Сегодня' : (dayDelta === 1 ? 'Вчера' : (dayDelta + ' дня назад'));
  const timezoneString = `${dayString}, ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)} i-GMT${timezoneHours >= 0 && '+'}${timezoneHours}`;
  
  let statusText = '';
  let statusTextClass = ``;

  switch (order.status) {
    case ORDER_STATUS_DONE:
      statusText = 'Выполнен';
      statusTextClass = `${orderCardStyles['text_color_success']}`
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

  return (
    <div className={`${orderCardStyles['order-card']} p-6 mr-2`} onClick={() => history.push(history.location.pathname + '/' + order._id, { background: history.location })}>
      <p className={`${orderCardStyles['order-title']} text text_type_digits-default`}>#{order.number}<span className={`text_type_main-default text_color_inactive`}>{timezoneString}</span></p>
      <div className={`${orderCardStyles['order-texts']}`}>
        <h3 className={`text text_type_main-medium`}>{order.name}</h3>
        {statusVisible && <p className={`text text_type_main-default ${statusTextClass}`}>
          {statusText}
        </p>}
      </div>
      <div className={`${orderCardStyles['order-card__burger-data-container']}`}>
        <OrderIngredients orderId={order._id} ingredientIds={order.ingredients}/>
        <div className={`${orderCardStyles['order-card__burger-price-container']}`}>
          <p className={`${orderCardStyles['order-card__burger-price']} text text_type_digits-default`}>{sum}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}

export default OrderCard;