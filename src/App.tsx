import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { NewOrderForm } from './components/NewOrderForm/NewOrderForm';
import { UsersTable } from './components/UsersTable/UsersTable';
import { User } from 'firebase/app';
import { setUserAction } from './redux/auth/auth.actions';
import { useDispatch } from 'react-redux';
import { Loader } from './components/Loader/Loader';
import SignUp from './_auth/SignUp';
import SignIn from './_auth/SignIn';
import firebase from 'firebase/app';
import './App.css';

firebase.initializeApp({
  apiKey: "AIzaSyAAzDqfQJzeZ3AIHe79F499V1EJDWxKMGM",
  authDomain: "dmapp-7abb4.firebaseapp.com",
  databaseURL: "https://dmapp-7abb4.firebaseio.com",
  projectId: "dmapp-7abb4",
  storageBucket: "",
  messagingSenderId: "96851152589",
  appId: "1:96851152589:web:5525bce30825b19f3c6384",
  measurementId: "G-4TYTQW4GRS"
});

export const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
      firebase.auth().onAuthStateChanged(setUser);
      dispatch(setUserAction(user));
  }, [dispatch, user]);
  
  return (
    <Loader>
      <Nav />
      <Route exact path="/" component={NewOrderForm} />
      <Route exact path="/sta-table" component={UsersTable} />
      <Route exact path="/pri-table" component={UsersTable} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </Loader>
  );
}