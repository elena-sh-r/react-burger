import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import modalStyles from 'components/modal/modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = ({ children, title, onClose }) => {

  const closeByEscape = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    }
  }, []);

  return(
    <div className={`${modalStyles['modal']} pt-10 pr-10 pl-10`} >
      <div className={`${modalStyles['modal__header-container']}`}>
        <h2 className={`${modalStyles['modal__title']} text text_type_main-large`}>{title}</h2>
        <button className={`${modalStyles['modal__close-icon']}`} type="button" onClick={onClose}><CloseIcon type="primary" /></button>
      </div>
      {children}
    </div>
  )
};

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
}