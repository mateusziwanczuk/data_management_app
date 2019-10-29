import React from 'react';
import { Icon } from 'react-icons-kit';
import { userTimes } from 'react-icons-kit/fa/userTimes';
import { userPlus } from 'react-icons-kit/fa/userPlus';
import firebase, { User } from 'firebase';
import './Nav.css';

export const Nav: React.FC<any> = (props: User) => {
  const { user }: any = props;

  const signOut = () => {
		firebase.auth().signOut();
  }

  return (
    <div className={'NavContainer'}>
      <a href='/' className={'AppLogo'}>DMA</a>
      <div className={'RouteLinks'}>
        <a href={user ? '/' : '/sign-in'}>NEW ORDER</a>
        <a href={user ? '/sta-table' : '/sign-in'}>STA ORDERS</a>
        <a href={user ? '/pri-table' : '/sign-in'}>PRI ORDERS</a>
      </div>
      {!user 
        ? (
        <div className={'userNav'}>
            <Icon icon={userPlus} size={28} />
            <a href='/sign-in'>SIGN IN</a>
          </div>
        ) : (
          <div className={'userNav'} onClick={signOut}>
            <Icon icon={userTimes} size={28} />
            <span>{user.email}</span>
          </div>
        )
      }
    </div>
  );
}