import React from 'react';
import { Route } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { Dashboard } from './components/Dashboard/Dashboard';
import { NewOrderForm } from './components/NewOrderForm/NewOrderForm';
import { UsersTable } from './components/UsersTable/UsersTable'
import './App.css';

export const App: React.FC = () => {
  return (
    <>
      <Nav/>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/new-order" component={NewOrderForm} />
      <Route exact path="/sta-table" component={UsersTable} />
      <Route exact path="/pri-table" component={UsersTable} />
    </>
  );
}