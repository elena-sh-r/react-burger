import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import appStyles from './home.module.css' ;

import BurgerIngredients from 'components/burger-ingredients/burger-ingredients';
import BurgerConstructor from 'components/burger-constructor/burger-constructor';
import OrderDetails from 'components/order-details/order-details';
import Modal from 'components/modal/modal';

import { useSelector, useDispatch } from 'services/hooks/hooks';

import { resetOrderDetailsAction } from 'services/actions/order-details';

const Home = () => {
  const dispatch = useDispatch();

  const {orderDetails} = useSelector((state) => state.orderDetails);

  const onOrderModalClose = () => {
    dispatch(resetOrderDetailsAction());
  }

  return (
    <main className={`${appStyles.main}`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />

        <BurgerConstructor />

        {orderDetails &&
          <Modal onClose={onOrderModalClose} >
            <OrderDetails />
          </Modal> 
        }
      </DndProvider>
    </main>
  );
}

export default Home;
