import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useHistory, useLocation } from 'react-router-dom';

import appStyles from './home.module.css' ;

import BurgerIngredients from 'components/burger-ingredients/burger-ingredients';
import BurgerConstructor from 'components/burger-constructor/burger-constructor';
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import OrderDetails from 'components/order-details/order-details';
import Modal from 'components/modal/modal';

import { useSelector, useDispatch } from 'services/hooks/hooks';

import { resetIngredientDetails, resetModalOpened, setIngredientDetails } from 'services/actions/ingredient-details';
import { resetOrderDetailsAction } from 'services/actions/order-details';
import { resetConstructorIngredients } from 'services/actions/burger-constructor';

const Home = (props: any) => {
  const ingredientId = props?.match?.params?.id;

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const {burgerIngredients} = useSelector((state) => state.burgerIngredients);
  const {ingredientDetails, modalOpened} = useSelector((state) => state.ingredientDetails);
  const {orderDetails} = useSelector((state) => state.orderDetails);

  useEffect(() => {
    dispatch(resetConstructorIngredients());
  }, [orderDetails]);

  useEffect(() => {
    dispatch(resetIngredientDetails());
  }, [location]);

  useEffect(() => {
    const item = burgerIngredients?.find( x => x._id === ingredientId );
    
    if (item)
    {
      dispatch(setIngredientDetails(item));
    }
    
  }, [burgerIngredients, ingredientId]);

  const onIngredientModalClose = () => {
    dispatch(resetIngredientDetails());
    dispatch(resetModalOpened());
    history.push('');
  }

  const onOrderModalClose = () => {
    dispatch(resetOrderDetailsAction());
  }

  return (
    ingredientDetails && !modalOpened
    ?
      <IngredientDetails />
    :
      <main className={`${appStyles.main}`}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />

          <BurgerConstructor />

          {ingredientDetails &&
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
  );
}

export default Home;
