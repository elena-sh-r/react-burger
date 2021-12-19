import React, { useEffect, useState } from 'react';

import appStyles from 'components/app/app.module.css' ;

import AppHeader from 'components/app-header/app-header';
import BurgerIngredients from 'components/burger-ingredients/burger-ingredients';
import BurgerConstructor from 'components/burger-constructor/burger-constructor';
import { getIngredients, setOrder } from '../../utils/IngredientsApi';
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import OrderDetails from 'components/order-details/order-details';
import Modal from 'components/modal/modal';

import { BurgerContext } from '../../services/appContext.js';

const App = ( _ ) => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [ingredientModalVisible, setIngredientModalVisible] = useState(false);
  const [orderDetailstModalVisible, setOrderDetailstModalVisible] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    getIngredients()
      .then((res) => setIngredientsData(res.data))
      .catch((err) => console.log(err.message))
  }, []);

  const handleIngredientClick = (item) => {
    setIngredient(item);
    setIngredientModalVisible(true);
  }

  const handleOrderClick = ( ingredients ) => {
    setOrder(ingredients)
      .then((res) => {
        setOrderNumber(res?.order?.number);
        setOrderDetailstModalVisible(true);
      })
      .catch((err) => console.log(err.message))
  }

  const handleModalClose = (evt) => {
    setIngredientModalVisible(false);
    setOrderDetailstModalVisible(false);
  }

  return (
    <BurgerContext.Provider value={ingredientsData}>
      <div className={`${appStyles.app}`}>
        <AppHeader/>

        <main className={`${appStyles.main}`}>
          <BurgerIngredients 
            data={ ingredientsData } 
            handleIngredientClick={ handleIngredientClick } 
          />

          <BurgerConstructor
            handleOrderClick={handleOrderClick} 
          />

          {ingredientModalVisible && ingredient && 
            <Modal onClose={handleModalClose} title={"Детали ингредиента"} >
              <IngredientDetails ingredient= {ingredient } />
            </Modal> 
          }

          {orderDetailstModalVisible && 
            <Modal onClose={handleModalClose} >
              <OrderDetails orderNumber={ orderNumber } />
            </Modal> 
          }
        </main>
      </div>
    </BurgerContext.Provider>
  );
}

export default App;
