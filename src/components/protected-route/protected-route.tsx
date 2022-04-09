import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import useAuth from 'services/auth';

const ProtectedRoute = ({ children, path, exact, ...rest }: RouteProps) => {
  const {refreshToken} = useAuth();

  return (
      <Route
        path={path}
        exact={exact}
        {...rest}
        render={({ location  }) => (
          refreshToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        )}
      /> 
  );
}

export default ProtectedRoute;