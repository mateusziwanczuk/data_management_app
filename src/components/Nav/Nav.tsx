import React, { useContext } from 'react';
import { AuthContext } from '../../auth/Auth';
import firebase from 'firebase';
import './Nav.css';
import { Redirect } from 'react-router';

export const Nav: React.FC = () => {
  const { currentUser }: any = useContext(AuthContext)

  const signOut = () => {
    firebase.auth().signOut()
      .then(() => <Redirect to='/' />)
  }

  return (
    <div className={'NavContainer'}>
      <a href='/' className={'AppLogo'}>DMA</a>
      <div className={'RouteLinks'}>
        <a href='/new-order'>NEW ORDER</a>
        <a href='/sta-table'>STA ORDERS</a>
        <a href='/pri-table'>PRI ORDERS</a>
      </div>
      {!currentUser 
        ? <a href='/sign-in'>SIGN IN</a>
        : <span onClick={signOut}>SIGN OUT</span>
      }
    </div>
  );
}