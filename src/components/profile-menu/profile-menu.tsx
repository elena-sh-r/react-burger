import React, { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "services/hooks/hooks";
import { exitUserThunk } from "services/actions/user";
import useAuth from 'services/auth';

import profileMenuStyles from './profile-menu.module.css';

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const { refreshToken } = useAuth();
  const { exitUserSuccess } = useSelector((state) => state.user);

  useEffect(() => {}, [exitUserSuccess])

  if (!refreshToken) {
    return <Redirect to={'/login'} />
  }

  return (
    <section className={`${profileMenuStyles['profile-menu']}`}>
      <nav className={`${profileMenuStyles['profile-menu__navigation']}`}>
        <NavLink exact to="/profile" activeClassName={`${profileMenuStyles['profile-menu__link_active']}`} className={`${profileMenuStyles['profile-menu__link']} text text_type_main-medium text_color_inactive`} >Профиль</NavLink>
        <NavLink to="/profile/orders" activeClassName={`${profileMenuStyles['profile-menu__link_active']}`} className={`${profileMenuStyles['profile-menu__link']} text text_type_main-medium text_color_inactive`}>История заказов</NavLink>
        <button className={`${profileMenuStyles['profile-menu__link']} text text_type_main-medium text_color_inactive`} onClick={() => dispatch(exitUserThunk(refreshToken))}>Выход</button>
      </nav>
      <p className={`${profileMenuStyles['profile-menu__caption']} text text_type_main-default text_color_inactive pt-20`}>В этом разделе вы можете изменить свои персональные данные</p>
    </section>
  )
};

export default ProfileMenu;