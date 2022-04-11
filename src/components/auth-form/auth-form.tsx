import React from 'react';

import authFormStyles from './auth-form.module.css' ;

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

interface IProps {
  name: string,
  onSubmit: (event: React.FormEvent) => void,
  title: string,
  children: any,
  buttonText: string,
  bottomText: any,
}

const AuthForm = ({name, onSubmit, title, children, buttonText, bottomText} : IProps) => {
  return (
    <main className={`${authFormStyles.main}`}>
      <section className={`${authFormStyles['auth-form']}`}>
        <form className={`${authFormStyles['auth-form__container']}`} name={name} onSubmit={onSubmit}>
          <h2 className={`${authFormStyles['auth-form__title']} text text_type_main-medium`}>{title}</h2>
          {children}
          <Button type="primary" size="medium">
            {buttonText ?? "Отправить"}
          </Button>
          {bottomText}
        </form>
      </section>
    </main>
  )
}

export default AuthForm;