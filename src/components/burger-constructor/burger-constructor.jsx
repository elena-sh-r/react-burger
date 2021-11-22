import React from 'react';

import burgerConstrucrorStyles from './burger-constructor.module.css';

import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ data }) => {

  return (
    <section className={`${burgerConstrucrorStyles['burger-constructor']} mt-25 pl-10 pb-10`}>
      <div className={`${burgerConstrucrorStyles['burger-constructor__items-container']}`}>
        <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
          />
        </div>
        <div className={`${burgerConstrucrorStyles['burger-constructor__center-items-container']}`}>
          <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={'https://code.s3.yandex.net/react/code/sauce-03-mobile.png'}
            />
          </div>
          <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={'https://code.s3.yandex.net/react/code/meat-02-mobile.png'}
            />
          </div>
          <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={'https://code.s3.yandex.net/react/code/sp_1-mobile.png'}
            />
          </div>
          <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png'}
            />
          </div>
          <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png'}
            />
          </div>
        </div>
        <div className={`${burgerConstrucrorStyles['burger-constructor__item-container']} pr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={20}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
          />
        </div>
      </div>
      <div className={`${burgerConstrucrorStyles['burger-constructor__burger-price-container']} pt-10 pr-2`}>
        <div className={`${burgerConstrucrorStyles['burger-constructor__burger-price-container']} pr-10`}>
          <p className={`${burgerConstrucrorStyles['burger-constructor__burger-price']} text text_type_digits-medium`}>610</p>
          <CurrencyIcon width="33" heigh="33" type="primary" />
        </div>
        <Button className={`pl-10`} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;