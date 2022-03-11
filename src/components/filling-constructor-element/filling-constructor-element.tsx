import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { useDispatch } from 'services/hooks/hooks';

import fillingConstructorElementStyles from './filling-constructor-element.module.css';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { deleteConstructorIngredient, sortConstructorIngredient } from 'services/actions/burger-constructor';

import { TIngredientType } from 'services/types/data';

interface IProps {
  item: TIngredientType,
}

interface IDropItem {
  index: number,
}

const FillingConstructorElement = ({ item }: IProps) => {
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: 'filling',
    item: {index: item.index}
  });

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'filling',
    drop({index}: IDropItem) {
      dispatch(sortConstructorIngredient(index, item.index! ));
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
  });

  const attachRef = (el: any) => {
    dragRef(el);
    dropTarget(el);
  }

  const handleClose = (index: number) => {
    dispatch(deleteConstructorIngredient(index));
  }

  return (
    <div className={`${fillingConstructorElementStyles['filling-constructor-element__container']} ${isHover && fillingConstructorElementStyles['filling-constructor-element__container-hovered']} pr-4`} ref={attachRef}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => handleClose(item.index!)}
      />
    </div>
  );
}

export default FillingConstructorElement;