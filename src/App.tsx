import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Nav } from './components/Nav/Nav'
import { CreateUserForm } from './components/CreateUserForm/CreateUserForm';
import { UsersTable } from './components/UsersTable/UsersTable'

export const App: React.FC = () => {
  return (
    <>
      <Nav/>
      <Route exact path="/" component={() => <h1>dashboard</h1>} />
      <Route exact path="/create-user" component={CreateUserForm} />
      <Route exact path="/users-table" component={UsersTable} />
    </>
  );
}