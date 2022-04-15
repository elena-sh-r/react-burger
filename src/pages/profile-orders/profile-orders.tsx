import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';

import profileOrdersFormStyles from './profile-orders.module.css' ;

import useAuth from "services/auth";
import ProfileMenu from "components/profile-menu/profile-menu";
import OrdersFeed from "components/orders-feed/orders-feed";

import { getUserThunk } from "services/actions/user";
import { useDispatch, useSelector } from "services/hooks/hooks";
import { wsConnectionStart } from "services/actions/ws";
import { TOrderType } from "services/types/data";

const ProfileOrders = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.ws);
  const { refreshToken } = useAuth();

  useEffect(() => {
    dispatch(getUserThunk(refreshToken, accessToken));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(wsConnectionStart(accessToken));
    }
  }, [user]);

  if (!refreshToken) {
    return <Redirect to={'/login'} />
  }

  return (
    <main className={`${profileOrdersFormStyles.main}`}>
      <ProfileMenu />
      <div className={`${profileOrdersFormStyles['orders-container']} pt-10 pl-15`}>
        <OrdersFeed orders={message?.orders?.sort((a: TOrderType, b: TOrderType) => +b.number - +a.number)} statusVisible={true}/>
      </div>
    </main>
  )
}

export default ProfileOrders;