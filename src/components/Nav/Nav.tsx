import React from 'react';
import './Nav.css'

export const Nav: React.FC = () => {
  return (
    <div className={'NavContainer'}>
      <a href='/' className={'AppLogo'}>DMA</a>
      <div className={'RouteLinks'}>
        <a href='/new-order'>NEW ORDER</a>
        <a href='/sta-table'>STA ORDERS</a>
        <a href='/pri-table'>PRI ORDERS</a>
      </div>
      <a href='/'>SIGN IN</a>
    </div>
  );
}