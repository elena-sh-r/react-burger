import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import modalOverlayStyles from './modal-overlay.module.css';

const modalRoot = document.getElementById("modals");

const ModalOverlay = ({ children, onClose }) => {
  return createPortal(
    <section className={`${modalOverlayStyles['modal-overlay']}`} onClick={(evt) => {
      if (evt.target !== evt.currentTarget)
        return;
      onClose();
    }}>
      { children }
    </section>,
    modalRoot
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
}