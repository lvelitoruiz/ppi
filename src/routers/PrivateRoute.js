import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ( { children,isLoggedIn } ) => {

  const { pathname, search } = useLocation();
  localStorage.setItem('lastPath', pathname + search);

  return isLoggedIn ? children : <Navigate to="/" />;
}