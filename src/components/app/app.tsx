import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import appStyles from 'components/app/app.module.css' ;

import AppHeader from 'components/app-header/app-header';
import Home from 'pages/home/home';
import Login from 'pages/login/login';
import Register from 'pages/register/register';
import ForgotPassword from 'pages/forgot-password/forgot-password';
import ResetPassword from 'pages/reset-password/reset-password';
import Profile from 'pages/profile/profile';
import ProtectedRoute from 'components/protected-route/protected-route';
import ProfileOrders from 'pages/profile-orders/profile-orders';

const App = () => {
  return (
    <Router>
      <div className={`${appStyles.app}`}>
        <AppHeader/>
        <Switch>
          <Route path={"/"} exact={true}>
            <Home />
          </Route>
          <Route path={"/ingredients/:id"} exact={true} component={Home}>
          </Route>
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
      </div>
    </Router>
  );
}

export default App;
