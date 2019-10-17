import React from 'react';
import { Icon } from 'react-icons-kit';
import { userTimes } from 'react-icons-kit/fa/userTimes';
import { userPlus } from 'react-icons-kit/fa/userPlus';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../../redux/app/app.reducer';
import './Nav.css';

export const Nav: React.FC = () => {
  const currentUser = useSelector((state: ReduxStore) => state.auth.authUser)

  const signOut = () => {
		firebase.auth().signOut();
	}

  return (
    <div className={'NavContainer'}>
      <a href='/' className={'AppLogo'}>DMA</a>
      <div className={'RouteLinks'}>
        <a href={currentUser ? '/' : '/sign-in'}>NEW ORDER</a>
        <a href={currentUser ? '/sta-table' : '/sign-in'}>STA ORDERS</a>
        <a href={currentUser ? '/pri-table' : '/sign-in'}>PRI ORDERS</a>
      </div>
      {!currentUser 
        ? (
        <div className={'userNav'}>
            <Icon icon={userPlus} size={28} />
            <a href='/sign-in'>SIGN IN</a>
          </div>
        ) : (
          <div className={'userNav'} onClick={signOut}>
            <Icon icon={userTimes} size={28} />
            <span>{currentUser.email}</span>
          </div>
        )
      }
    </div>
  );
}