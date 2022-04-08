import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from 'react-router-dom';

import profileFormStyles from './profile.module.css' ;

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from "services/hooks/hooks";
import { exitUserThunk, getUserThunk, patchUserThunk, resetPatchUserAction } from "services/actions/user";
import useAuth from "services/auth";
import ProfileMenu from "components/profile-menu/profile-menu";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, accessToken, patchUserSuccess } = useSelector((state) => state.user);
  const { refreshToken } = useAuth();

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [currenNameValue, setCurrentNameValue] = useState('');
  const [currentEmailValue, setCurrentEmailValue] = useState('');
  const [currentPasswordValue, setCurrentPasswordValue] = useState('');

  const [nameDisabled, setNameDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [passwordDisabled, setPasswordDisabled] = useState(true);

  const [buttonsVisible, setButtonsVisible] = useState(false);

  useEffect(() => {
    dispatch(getUserThunk(refreshToken, accessToken));
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setNameValue(user.name);
      setEmailValue(user.email);
      setCurrentNameValue(user.name);
      setCurrentEmailValue(user.email);
    }
  }, [user]);

  useEffect(() => {
    const fieldsDisabled = nameDisabled && emailDisabled && passwordDisabled;
    if (
      ((nameValue !== currenNameValue)) ||
      ((emailValue !== currentEmailValue)) ||
      ((passwordValue !== currentPasswordValue))
    ) {
      setButtonsVisible(true);
    } else {
      setButtonsVisible(false);
    }
  }, [nameValue, emailValue, passwordValue, currenNameValue, currentEmailValue, currentPasswordValue, nameDisabled, emailDisabled, passwordDisabled]);

  useEffect(() => {
    if (patchUserSuccess)
    {
      dispatch(resetPatchUserAction());
      if (user) {
        setCurrentNameValue(user.name);
        setCurrentEmailValue(user.email);
      }
      setCurrentPasswordValue('');
      setPasswordValue('');
      setNameDisabled(true);
      setEmailDisabled(true);
      setPasswordDisabled(true);
    }
  }, [dispatch, patchUserSuccess, user]);

  const onNameIconClick = () => {
    if(nameDisabled) {
      setCurrentNameValue(nameValue);
    } else {
      setNameValue(currenNameValue);
    }
    setNameDisabled(!nameDisabled);
  }

  const onEmailIconClick = () => {
    if(emailDisabled) {
      setCurrentEmailValue(emailValue);
    } else {
      setEmailValue(currentEmailValue);
    }
    setEmailDisabled(!emailDisabled);
  }

  const onPasswordIconClick = () => {
    if(passwordDisabled) {
      setCurrentPasswordValue(passwordValue);
    } else {
      setPasswordValue(currentPasswordValue);
    }
    setPasswordDisabled(!passwordDisabled);
  }

  const confirmlInput = (e: any) => {
    e.preventDefault();
    dispatch(patchUserThunk(refreshToken, accessToken, nameValue, emailValue, passwordValue));
  }

  const cancelInput = (e: any) => {
    e.preventDefault()
    setNameDisabled(true);
    setEmailDisabled(true);
    setPasswordDisabled(true);
    setNameValue(currenNameValue);
    setEmailValue(currentEmailValue);
    setPasswordValue(currentPasswordValue);
  }

  if (!refreshToken) {
    return <Redirect to={'/login'} />
  }

  return (
    <main className={`${profileFormStyles.main}`}>
      <ProfileMenu />
      <section className={`${profileFormStyles['profile-form']}`}>
        <form className={`${profileFormStyles['profile-form__container']}`}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setNameValue(e.target.value)}
            icon={nameDisabled ? 'EditIcon' : 'CloseIcon'}
            value={nameValue}
            name={'name'}
            error={false}
            onIconClick={onNameIconClick}
            errorText={'Ошибка'}
            size={'default'}
            disabled={nameDisabled}
          />
          <Input
            type={'email'}
            placeholder={'Логин'}
            onChange={e => setEmailValue(e.target.value)}
            icon={emailDisabled ? 'EditIcon' : 'CloseIcon'}
            value={emailValue}
            name={'email'}
            error={false}
            onIconClick={onEmailIconClick}
            errorText={'Ошибка'}
            size={'default'}
            disabled={emailDisabled}
          />
          <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={e => setPasswordValue(e.target.value)}
            icon={passwordDisabled ? 'EditIcon' : 'CloseIcon'}
            value={passwordDisabled? '******' : passwordValue}
            name={'password'}
            error={false}
            onIconClick={onPasswordIconClick}
            errorText={'Ошибка'}
            size={'default'}
            disabled={passwordDisabled}
          />
          {buttonsVisible && 
            <div className={`${profileFormStyles['profile-form__button-container']} text text_type_main-default`}>
              <Button type="secondary" size="medium" onClick={cancelInput}>
                Отмена
              </Button>
              <Button type="primary" size="medium" onClick={confirmlInput} >
                Сохранить
              </Button>
            </div>
          }
        </form>
      </section>
    </main>
  )
}

export default Profile;