import React, { useEffect } from 'react';

import feedStyles from './feed.module.css' ;

import OrdersFeed from 'components/orders-feed/orders-feed';
import OrdersBoard from 'components/orders-board/orders-board';

import { wsConnectionClose, wsConnectionStart } from 'services/actions/ws';
import { useDispatch, useSelector } from 'services/hooks/hooks';

const Feed = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.ws);

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return (
    <main className={`${feedStyles.main} pt-10`}>
      <h2 className={`${feedStyles['feed-title']} text text_type_main-large`}>Лента заказов</h2>
      <div className={`${feedStyles['feed-container']}`}>
        <OrdersFeed orders={message?.orders}/>
      </div>
      <OrdersBoard total={message?.total} totalToday={message?.totalToday} orders={message?.orders} />
    </main>
  );
}

export default Feed;
