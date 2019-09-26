import React from 'react';
import './Nav.css'

export const Nav: React.FC = () => {
  return (
    <div className={'NavContainer'}>
      <a className={'AppLogo'} href='/'>DMA</a>
      <div className={'RouteLinks'}>
        <a href='/create-user'>CREATE USER</a>
        <a href='/users-table'>USERS TABLE</a>
      </div>
      <a>SIGN IN</a>
    </div>
  );
}