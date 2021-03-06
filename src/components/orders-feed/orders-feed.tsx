import React from 'react';

import ordersFeedStyles from './orders-feed.module.css';

import OrderCard from 'components/order-card/order-card';
import { TOrderType } from 'services/types/data';

interface IProps {
  orders: ReadonlyArray<TOrderType>,
  statusVisible?: boolean,
}

const OrdersFeed = ({orders, statusVisible} : IProps) => {

  return (
    <section className={`${ordersFeedStyles['orders-feed']}`}>
      <div className={`${ordersFeedStyles['orders-feed__container']}`}>
        {orders?.map(order => <OrderCard key={order._id} order={order} statusVisible={statusVisible} />)}
      </div>
    </section>
  );
}

export default OrdersFeed;