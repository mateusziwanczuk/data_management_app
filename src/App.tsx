import React from 'react';
import { Route } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { Dashboard } from './components/Dashboard/Dashboard';
import { CreateUserForm } from './components/CreateUserForm/CreateUserForm';
import { UsersTable } from './components/UsersTable/UsersTable'
import './App.css';

export const App: React.FC = () => {
  return (
    <>
      <Nav/>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/create-user" component={CreateUserForm} />
      <Route exact path="/users-table" component={UsersTable} />
    </>
  );
}