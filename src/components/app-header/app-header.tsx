import React from 'react';
import { Link } from 'react-router-dom';

import appHeader from './app-header.module.css';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const AppHeader = () => {
  return (
    <header className={`${appHeader.header} text text_type_main-default pt-4 pb-4`}>
      <nav className={appHeader.header__menu}>
        <ul className={`${appHeader.header__links}`}>
          <li className={`${appHeader.header__link} pl-5 pr-5 mr-2`}>
            <Link to='/' className={`${appHeader.header__link}`}>
              <BurgerIcon type="primary" />
              <p className={`pl-2`}>Конструктор</p>
            </Link>
          </li>
          <li className={`${appHeader.header__link} text_color_inactive`}>
            <ListIcon type="secondary" />
            <p className={`pl-2`}>Лента заказов</p>
          </li>
        </ul>
        <Logo />
        <ul className={`${appHeader.header__links} ${appHeader.header__links_right} pr-5`}>
          <li className={`${appHeader.header__link} ${appHeader.header__link_type_login} text_color_inactive`}>
            <Link to='/profile' className={`${appHeader.header__link} ${appHeader.header__link_type_login} text_color_inactive`}>
              <ProfileIcon type="secondary" />
              <p className={`pl-2`}>Личный кабинет</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;