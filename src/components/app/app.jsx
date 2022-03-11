import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import appStyles from 'components/app/app.module.css' ;

import AppHeader from 'components/app-header/app-header';
import BurgerIngredients from 'components/burger-ingredients/burger-ingredients';
import BurgerConstructor from 'components/burger-constructor/burger-constructor';
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import OrderDetails from 'components/order-details/order-details';
import Modal from 'components/modal/modal';

import { resetIngredientDetails } from 'services/actions/ingredient-details';
import { resetOrderDetails } from 'services/actions/order-details';

const App = () => {
  const dispatch = useDispatch();
  const ingredient = useSelector((state) => state.ingredientDetails.ingredientDetails);
  const orderDetails = useSelector((state) => state.orderDetails.orderDetails);

  const onIngredientModalClose = () => {
    dispatch(resetIngredientDetails());
  }

  const onOrderModalClose = () => {
    dispatch(resetOrderDetails());
  }

  return (
    <div className={`${appStyles.app}`}>
      <AppHeader/>

      <main className={`${appStyles.main}`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />

          <BurgerConstructor />

          {ingredient && 
            <Modal title={"Детали ингредиента"} onClose={onIngredientModalClose} >
              <IngredientDetails />
            </Modal> 
          }

          {orderDetails && 
            <Modal onClose={onOrderModalClose} >
              <OrderDetails />
            </Modal> 
          }
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
