import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'services/hooks/hooks';
import loginFormStyles from './login.module.css' ;

import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import AuthForm from "components/auth-form/auth-form";
import { loginUserThunk } from "services/actions/user";
import useAuth from "services/auth";

interface IProps {
  location?: any,
}

const Login = ({location} : IProps) => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.user);
  const { refreshToken } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (accessToken || refreshToken) {
    return <Redirect to={ location?.state?.from || '/' } />
  }

  return (
    <AuthForm title="Вход" name="login" buttonText={"Войти"} onSubmit={e => {e.preventDefault(); dispatch(loginUserThunk(email, password))}} children={
        <div className={`${loginFormStyles['login-form-container']} pt-6 pb-6`}>
            <Input
              type={'email'}
              placeholder={'E-mail'}
              onChange={e => setEmail(e.target.value)}
              value={email}
              name={'email'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
            />
            <PasswordInput 
              onChange={e => setPassword(e.target.value)} 
              value={password} 
              name={'password'} 
              size={'default'} 
            />
        </div>
      } 
      bottomText={
        <div>
          <p className={`${loginFormStyles['login-form__bottom-text']} text text_type_main-default text_color_inactive pt-20`}>Вы — новый пользователь? <Link to="register" className={`${loginFormStyles['login-form__link']} text text_type_main-default text_color_inactive`}>Зарегистрироваться</Link></p>
          <p className={`${loginFormStyles['login-form__bottom-text']} text text_type_main-default text_color_inactive pt-4`}>Забыли пароль? <Link to="forgot-password" className={`${loginFormStyles['login-form__link']} text text_type_main-default text_color_inactive`}>Восстановить пароль</Link></p>
        </div>
      }
    />
  )
}

export default Login;