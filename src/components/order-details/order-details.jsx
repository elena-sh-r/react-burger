import React from 'react';
import { useSelector } from 'react-redux';

import orderDetailsStyles from 'components/order-details/order-details.module.css';

import doneImagePath from 'images/order-details__done.gif'

const OrderDetails = () => {
  const { orderDetails } = useSelector((state) => state.orderDetails);

  return (
    <div className={`${orderDetailsStyles['order-details']} pb-30 pt-4`}>
      <h3 className={`${orderDetailsStyles['order-details__title']} text text_type_digits-large pb-8`}>{ orderDetails.number }</h3>
      <p className={`text text_type_main-medium pb-15`}>идентификатор заказа</p>
      <img className={`${orderDetailsStyles['order-details__done-image']}`} src={doneImagePath} alt="Выполняется" />
      <p className={`text text_type_main-default pt-15 pb-2`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;