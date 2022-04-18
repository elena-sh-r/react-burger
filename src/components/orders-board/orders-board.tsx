import React from 'react';
import { TOrderType } from 'services/types/data';
import { ORDER_STATUS_DONE, ORDER_STATUS_PENDING } from 'utils/constants';

import ordersBoardStyles from './orders-board.module.css';

interface IProps {
  total: number,
  totalToday: number,
  orders: ReadonlyArray<TOrderType>,
}

const OrdersBoard = ({total, totalToday, orders} : IProps ) => {

  return (
    <section className={`${ordersBoardStyles['orders-board']}`}>
      <div className={`${ordersBoardStyles['orders-board__container']}`}>
        <div className={`${ordersBoardStyles['orders-board__done']}`}>
          <h3 className={`text text_type_main-medium`}>Готовы:</h3>
          <div className={`${ordersBoardStyles['orders-board__numbers-container']}`}>
            <div className={`${ordersBoardStyles['orders-board__numbers']}`}>
              {orders?.filter(order => order.status === ORDER_STATUS_DONE).map((order, index) => <p key={index} className={`${ordersBoardStyles['orders-board__done-number']} text text_type_digits-default`}>{order.number}</p>)}
            </div>
          </div>
        </div>
        <div className={`${ordersBoardStyles['orders-board__in-work']}`}>
          <h3 className={`text text_type_main-medium`}>В работе:</h3>
          <div className={`${ordersBoardStyles['orders-board__numbers-container']}`}>
            <div className={`${ordersBoardStyles['orders-board__numbers']}`}>
              {orders?.filter(order => order.status === ORDER_STATUS_PENDING).map((order, index) => <p key={index} className={`text text_type_digits-default`}>{order.number}</p>)}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className={`text text_type_main-medium`}>Выполнено за все время:</h3>
        <p className={`${ordersBoardStyles['orders-board__completed-number']} text text_type_digits-large`}>{total}</p>
      </div>
      <div>
        <h3 className={`text text_type_main-medium`}>Выполнено за сегодня:</h3>
        <p className={`${ordersBoardStyles['orders-board__completed-number']} text text_type_digits-large`}>{totalToday}</p>
      </div>
    </section>
  );
}

export default OrdersBoard;