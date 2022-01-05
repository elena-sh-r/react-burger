import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import appStyles from 'components/app/app.module.css' ;

import AppHeader from 'components/app-header/app-header';
import BurgerIngredients from 'components/burger-ingredients/burger-ingredients';
import BurgerConstructor from 'components/burger-constructor/burger-constructor';
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import OrderDetails from 'components/order-details/order-details';
import Modal from 'components/modal/modal';

const App = () => {
  const ingredient = useSelector((state) => state.ingredientDetails.ingredientDetails);
  const orderDetails = useSelector((state) => state.orderDetails.orderDetails);

  return (
    <div className={`${appStyles.app}`}>
      <AppHeader/>

      <main className={`${appStyles.main}`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />

          <BurgerConstructor />

          {ingredient && 
            <Modal title={"Детали ингредиента"} >
              <IngredientDetails />
            </Modal> 
          }

          {orderDetails && 
            <Modal >
              <OrderDetails />
            </Modal> 
          }
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
