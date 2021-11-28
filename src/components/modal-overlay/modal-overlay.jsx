import React from 'react';
import PropTypes from 'prop-types';

import modalOverlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({ children, onClose }) => {
  return(
    <section className={`${modalOverlayStyles['modal-overlay']}`} onClick={(evt) => {
      if (evt.target !== evt.currentTarget)
        return;
      onClose();
    }}>
      { children }
    </section>
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
}