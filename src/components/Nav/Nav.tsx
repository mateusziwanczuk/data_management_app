import React from 'react';
import { Icon } from 'react-icons-kit';
import { userTimes } from 'react-icons-kit/fa/userTimes';
import { userPlus } from 'react-icons-kit/fa/userPlus';
import firebase, { User } from 'firebase';
import './Nav.css';
import { Link } from 'react-router-dom';

export const Nav: React.FC<any> = (props: User) => {
  const { user }: any = props;

  const signOut = () => {
		firebase.auth().signOut();
  }

  return (
    <div className={'NavContainer'}>
      <Link to='/' className={'AppLogo'}>DMA</Link>
      <div className={'RouteLinks'}>
        <Link to={user ? '/' : '/sign-in'}>NEW ORDER</Link>
        <Link to={user ? '/sta-table' : '/sign-in'}>STA ORDERS</Link>
        <Link to={user ? '/pri-table' : '/sign-in'}>PRI ORDERS</Link>
      </div>
      {!user 
        ? (
        <div className={'userNav'}>
            <Icon icon={userPlus} size={28} />
            <Link to='/sign-in'>SIGN IN</Link>
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