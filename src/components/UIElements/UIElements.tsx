import React from 'react';
import { InputType } from 'zlib';
import { InputProps } from './types';

export const Container: React.FC = (props) => {
  return (
    <div 
        style={{
            margin: '0 auto',
            width: '60vw',
        }}
    >
      {props.children}
    </div>
  );
}

export const FlexContainer: React.FC = (props) => {
  return (
    <div
        style={{
          display: 'flex',
        }}
    >
      {props.children}
    </div>
  );
}

export const Line: React.FC = () => {
  return (
    <div 
        style={{
            borderBottom: `1px solid lightgrey`,
        }}
    />
  );
}

export const Label: React.FC = (props) => {
  return (
    <label
        style={{
          color: 'grey',
          display: 'block',
          fontSize: '.8rem',
          letterSpacing: '.2rem',
          margin: '0 5rem 2rem 0',
          textTransform: 'uppercase',
        }}
    >
      {props.children}
    </label>
  );
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
        style={{
          border: '1px solid lightgrey',
          display: 'block',
          marginTop: '.5rem',
          fontSize: '1rem',
          padding: '.7rem 1rem',
          width: '300px',
        }}
        name={props.name}
        type={props.type}
        value={props.value}
    />
  );
}
