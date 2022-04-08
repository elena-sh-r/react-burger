import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from 'services/auth';

interface IProps {
  children: any,
  path: string,
  exact?: boolean,
}

const ProtectedRoute = ({ children, path, exact, ...rest }: IProps) => {
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