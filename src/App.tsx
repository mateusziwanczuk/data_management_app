import React from 'react';
import * as firebase from 'firebase/app';
import { Route } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { Dashboard } from './components/Dashboard/Dashboard';
import { NewOrderForm } from './components/NewOrderForm/NewOrderForm';
import { UsersTable } from './components/UsersTable/UsersTable'
import './App.css';
import { AuthProvider } from './auth/Auth';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';

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
  return (
    <AuthProvider>
      <Nav/>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/new-order" component={NewOrderForm} />
      <Route exact path="/sta-table" component={UsersTable} />
      <Route exact path="/pri-table" component={UsersTable} />
      
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </AuthProvider>
  );
}