import React from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

import burgerConstructorItemsStyles from './burger-constructor-items.module.css';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { addConstructorIngredient } from 'services/actions/burger-constructor';
import FillingConstructorElement from 'components/filling-constructor-element/filling-constructor-element';
import { ingredientType } from 'utils/types';

const BurgerConstructorItems = ({ bun, fillings }) => {
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop({item}) {
      dispatch(addConstructorIngredient({ ingredient: item }));
    },
  });

  return (
      <div className={`${burgerConstructorItemsStyles['burger-constructor__items-container']}`} ref={dropTarget}>
        <div className={`${burgerConstructorItemsStyles['burger-constructor__item-container']} pr-4`}>
          {bun
            ? <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
            : <div className='mt-20'></div>
          }
        </div>
        <div className={`${burgerConstructorItemsStyles['burger-constructor__center-items-container']}`}>
          { fillings?.map(( item ) => 
              <FillingConstructorElement key={item.uniqueId} item={item} />
            )
          }
        </div>
        <div className={`${burgerConstructorItemsStyles['burger-constructor__item-container']} pr-4`}>
        {bun
          ? <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
          : <div className='mt-20'></div>
          }
        </div>
      </div>
  );
}

export default BurgerConstructorItems;

BurgerConstructorItems.propTypes = {
  bun: PropTypes.shape(ingredientType),
  fillings: PropTypes.arrayOf(PropTypes.shape(ingredientType)),
};