import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { SecondaryRouter } from './SecondaryRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { startLoadingUsers } from '../actions/users';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const [ checking,setChecking ] = useState(true);
  const [ isLoggedIn,setIsLoggedIn ] = useState(false);

  useEffect( () => {
    
    firebase.auth().onAuthStateChanged( (user) => {
      
      if( user?.uid ){
        dispatch( login(user.uid,user.displayName) );
        setIsLoggedIn(true);

        dispatch( startLoadingUsers( user.uid ) );
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    })
  }, [setChecking,setIsLoggedIn,dispatch]);

  if( checking ) {
    return(
      <section className="h-screen bg-slate-100 overflow-hidden flex items-center justify-center p-4">
        <h1 className='text-3xl text-gray-600 font-bold'>Waiting response...</h1>
      </section>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/users/*" element={ 
          <PrivateRoute isLoggedIn={ isLoggedIn } >
            <SecondaryRouter />
          </PrivateRoute>
        } />
        <Route path="/" element={
          <PublicRoute isLoggedIn={ isLoggedIn } >
            <LoginScreen />
          </PublicRoute>
        } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>      
    </Router>
  )
}
