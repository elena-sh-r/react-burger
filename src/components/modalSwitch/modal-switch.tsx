import React from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import Home from 'pages/home/home';
import Login from 'pages/login/login';
import Register from 'pages/register/register';
import ForgotPassword from 'pages/forgot-password/forgot-password';
import ResetPassword from 'pages/reset-password/reset-password';
import Profile from 'pages/profile/profile';
import ProtectedRoute from 'components/protected-route/protected-route';
import ProfileOrders from 'pages/profile-orders/profile-orders';
import { useDispatch } from 'services/hooks/hooks';
import { resetIngredientDetails } from 'services/actions/ingredient-details';
import IngredientDetails from 'components/ingredient-details/ingredient-details';
import Modal from 'components/modal/modal';

interface ILocationState {
  background: any;
}

const ModalSwitch = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { state } = useLocation<ILocationState>();
  const background = state && state.background;

  const onIngredientModalClose = () => {
    dispatch(resetIngredientDetails());
    history.goBack();
  }

  const openedFromList = background && history.action === 'PUSH';

  return (
    <div>
      <Switch location={openedFromList ? background : location}>
        <Route path={"/"} exact={true}>
          <Home />
        </Route>
        <Route path={"/ingredients/:ingredientId"} children={<IngredientDetails />} />
        <Route path={"/login"} component={Login}>
        </Route>
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/forgot-password"}>
          <ForgotPassword />
        </Route>
        <Route path={"/reset-password"}>
          <ResetPassword />
        </Route>
        <ProtectedRoute path={"/profile"} exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path={"/profile/orders"} exact={true}>
          <ProfileOrders />
        </ProtectedRoute>
        <Route path="*">
          404
        </Route>
      </Switch>
      {openedFromList && <Route path="/ingredients/:ingredientId" children={
        <Modal title={"Детали ингредиента"} onClose={onIngredientModalClose} >
          <IngredientDetails />
        </Modal> 
      } />}
    </div>
  );
}

export default ModalSwitch;
