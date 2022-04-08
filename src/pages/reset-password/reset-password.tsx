import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'services/hooks/hooks';
import resetPasswordFormStyles from './reset-password.module.css' ;

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import AuthForm from "components/auth-form/auth-form";
import { setPasswordThunk } from '../../services/actions/user';
import useAuth from "services/auth";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { setPasswordSuccess, requestPasswordResetSuccess, accessToken } = useSelector((state) => state.user);
  const { refreshToken } = useAuth();

  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  if (setPasswordSuccess){
    return <Redirect to='/login' />;
  }

  if (!requestPasswordResetSuccess || accessToken || refreshToken) {
    return <Redirect to='/' />;
  }

  return (
    <AuthForm title="Восстановление пароля" name="reset-password" buttonText={"Сохранить"} onSubmit={e => {e.preventDefault(); dispatch(setPasswordThunk(password, token))}} children={
        <div className={`${resetPasswordFormStyles['reset-password-form-container']} pt-6 pb-6`}>
          <Input
            type={'password'}
            placeholder={'Введите новый пароль'}
            onChange={e => setPassword(e.target.value)} 
            value={password}
            name={'password'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          /> 
          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={e => setToken(e.target.value)} 
            value={token}
            name={'token'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          /> 
        </div>
      } 
      bottomText={
        <div>
          <p className={`${resetPasswordFormStyles['reset-password-form__bottom-text']} text text_type_main-default text_color_inactive pt-20`}>Вспомнили пароль? <Link to="login" className={`${resetPasswordFormStyles['reset-password-form__link']} text text_type_main-default text_color_inactive`}>Войти</Link></p>
        </div>
      }
    />
  )
}

export default ResetPassword;