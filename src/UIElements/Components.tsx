import React from 'react';
import { InputProps } from './_types';

export const Container: React.FC = (props) => {
  return (
    <div 
        style={{
            margin: '0 auto 10%',
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

export const LabelRadio: React.FC = (props) => {
  return (
    <label
        style={{
          border: '1px solid lightgrey',
          color: 'grey',
          display: 'flex',
          fontSize: '.8rem',
          letterSpacing: '.1rem',
          margin: '.5rem 2rem 2rem 0',
          padding: '.5rem 1rem',
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
        required={props.required}
        onChange={props.onChange}
    />
  );
}

export const InputRadio: React.FC<InputProps> = (props) => {
  return (
    <input
        style={{
          margin: 'auto auto auto 1rem',
        }}
        name={props.name}
        type={'radio'}
        value={props.value}
    />
  );
}

export const Button: React.FC = (props) => {
  return (
    <button
        style={{
          background: 'rgb(98, 183, 253)',
          border: 'none',
          boxShadow: '0 0 5px lightgrey',
          color: 'white',
          cursor: 'pointer',
          letterSpacing: '.2rem',
          padding: '.7rem 0',
          width: '200px',
        }}
    >
      {props.children}
    </button>
  );
}