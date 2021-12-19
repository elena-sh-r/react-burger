import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import burgerConstrucrorStyles from './burger-constructor.module.css';

import { BurgerContext } from '../../services/appContext.js';

import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ data, handleOrderClick }) => {
  const ingredientsData = useContext(BurgerContext);

  const isBun = (item) => item.type === 'bun';
  const bun = ingredientsData?.find(item => isBun(item));
  const fillings = ingredientsData?.filter(item => !isBun(item));

  const reducer = (previousItem, currentItem) => previousItem + currentItem.price;
  const totalPrice = bun?.price ?? 0 * 2 + fillings?.reduce(reducer, 0);

  const orderIngredientsData = [bun].concat(fillings).concat([bun]);

  

  return (
    <section className={`${burgerConstrucrorStyles['burger-constructor']} mt-25 pl-10 pb-10`}>
      <div className={`${burgerConstrucrorStyles['burger-constructor__items-container']}`}>
        <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
          {bun &&
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          }
        </div>
        <div className={`${burgerConstrucrorStyles['burger-constructor__center-items-container']}`}>
          { fillings?.map(( item, index ) => 
              <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`} key={index}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image_mobile}
                />
              </div>
            )
          }
        </div>
        <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
        {bun &&
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image_mobile}
            />
          }
        </div>
      </div>
      <div className={`${burgerConstrucrorStyles['burger-constructor__burger-price-container']} pt-10 pr-2`}>
        <div className={`${burgerConstrucrorStyles['burger-constructor__burger-price-container']} pr-10`}>
          <p className={`${burgerConstrucrorStyles['burger-constructor__burger-price']} text text_type_digits-medium`}>{totalPrice}</p>
          <CurrencyIcon width="33" heigh="33" type="primary" />
        </div>
        {totalPrice > 0 && <Button className={`pl-10`} type="primary" size="large" onClick={() => handleOrderClick(orderIngredientsData.map(item => item?._id))} >
          Оформить заказ
        </Button>}
      </div>
    </section>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  handleOrderClick: PropTypes.func.isRequired,
}