import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'services/hooks/hooks';

import registerFormStyles from './register.module.css' ;

import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import AuthForm from "components/auth-form/auth-form";
import { createUserThunk } from "services/actions/user";
import useAuth from "services/auth";

const Register = () => {
  const dispatch = useDispatch();
  const { createUserSuccess, accessToken } = useSelector((state) => state.user);
  const { refreshToken } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (createUserSuccess){
    return <Redirect to='/' />;
  }

  if (accessToken || refreshToken) {
    return <Redirect to='/' />
  }

  return (
    <AuthForm title="Регистрация" name="register" buttonText={"Зарегистрироваться"} onSubmit={e => {e.preventDefault(); dispatch(createUserThunk(email, password, name))}} children={
        <div className={`${registerFormStyles['register-form-container']} pt-6 pb-6`}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={e => setName(e.target.value)} 
              value={name}
              name={'name'}
              error={false}
              errorText={'Ошибка'}
              size={'default'}
            />
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
        <p className={`${registerFormStyles['register-form__bottom-text']} text text_type_main-default text_color_inactive pt-20`}>Уже зарегистрированы? <Link to="login" className={`${registerFormStyles['register-form__link']} text text_type_main-default text_color_inactive`}>Войти</Link></p>
      }
    />
  )
}

export default Register;