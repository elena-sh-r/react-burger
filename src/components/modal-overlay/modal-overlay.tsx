import React from 'react';

import modalOverlayStyles from './modal-overlay.module.css';

interface IProps {
  children: any,
  onClose: () => void,
}

const ModalOverlay = ({ children, onClose }: IProps) => {
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
