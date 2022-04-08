import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';

import forgotPasswordFormStyles from './forgot-password.module.css' ;

import { useDispatch, useSelector } from 'services/hooks/hooks';
import { requestPasswordResetThunk } from 'services/actions/user';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import AuthForm from "components/auth-form/auth-form";
import useAuth from "services/auth";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { requestPasswordResetSuccess, accessToken } = useSelector((state) => state.user);
  const { refreshToken } = useAuth();

  const [email, setEmail] = useState('');

  if (requestPasswordResetSuccess){
    return <Redirect to='/reset-password'/>;
  }

  if (accessToken || refreshToken) {
    return <Redirect to='/' />
  }

  return (
    <AuthForm title="Восстановление пароля" name="forgot-password" buttonText={"Восстановить"} onSubmit={e => {e.preventDefault(); dispatch(requestPasswordResetThunk(email))}} children={
        <div className={`${forgotPasswordFormStyles['forgot-password-form-container']} pt-6 pb-6`}>
          <Input
            type={'email'}
            placeholder={'Укажите e-mail'}
            onChange={e => setEmail(e.target.value)} 
            value={email}
            name={'email'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          /> 
        </div>
      } 
      bottomText={
        <div>
          <p className={`${forgotPasswordFormStyles['forgot-password-form__bottom-text']} text text_type_main-default text_color_inactive pt-20`}>Вспомнили пароль? <Link to="register" className={`${forgotPasswordFormStyles['forgot-password-form__link']} text text_type_main-default text_color_inactive`}>Войти</Link></p>
        </div>
      }
    />
  )
}

export default ForgotPassword;