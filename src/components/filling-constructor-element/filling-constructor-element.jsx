import React from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import fillingConstructorElementStyles from './filling-constructor-element.module.css';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { deleteConstructorIngredient, sortConstructorIngredient } from 'services/actions/burger-constructor';
import { ingredientType } from 'utils/types';

const FillingConstructorElement = ({ item }) => {
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: 'filling',
    item: {index: item.index}
  });

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'filling',
    drop({index}) {
      dispatch(sortConstructorIngredient({ indexFrom: item.index, indexTo: index }));
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
  });

  const attachRef = (el) => {
    dragRef(el);
    dropTarget(el);
  }

  const handleClose = (index) => {
    dispatch(deleteConstructorIngredient({ index }));
  }

  return (
    <div className={`${fillingConstructorElementStyles['filling-constructor-element__container']} ${isHover && fillingConstructorElementStyles['filling-constructor-element__container-hovered']} pr-4`} ref={attachRef}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => handleClose(item.index)}
      />
    </div>
  );
}

export default FillingConstructorElement;

FillingConstructorElement.propTypes = {
  item: PropTypes.shape(ingredientType).isRequired,
};