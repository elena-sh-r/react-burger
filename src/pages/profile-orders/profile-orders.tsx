import React from "react";
import { Redirect } from 'react-router-dom';

import profileOrdersFormStyles from './profile-orders.module.css' ;

import useAuth from "services/auth";
import ProfileMenu from "components/profile-menu/profile-menu";

const ProfileOrders = () => {
  const { refreshToken } = useAuth();

  if (!refreshToken) {
    return <Redirect to={'/login'} />
  }

  return (
    <main className={`${profileOrdersFormStyles.main}`}>
      <ProfileMenu />
    </main>
  )
}

export default ProfileOrders;