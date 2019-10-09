import React from 'react';
import { InputProps, FormProps, AuthTextProps } from './_types';

export const AuthPanel: React.FC = (props) => {
  return (
    <div 
      style = {{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        width: '100%',
      }}
    >
      {props.children}
    </div>
  )
}

export const AuthForm: React.FC<FormProps> = (props) => {
  return (
    <form
      style = {{
        border: '1px solid rgb(98, 183, 253)',
        margin: '0 auto',
        padding: '0% 3% 3% 3%',
        textAlign: 'center',
        width: '30%',
      }}
      onSubmit = {props.onSubmit}
    >
      {props.children}
    </form>
  )
}

export const AuthLabel: React.FC = (props) => {
  return (
    <label
        style = {{
          color: 'grey',
          display: 'block',
          fontSize: '.8rem',
          letterSpacing: '.2rem',
          marginBottom: '2rem',
          textTransform: 'uppercase',
        }}
    >
      {props.children}
    </label>
  );
}

export const AuthInput: React.FC<InputProps> = (props) => {
  return (
    <input
        style = {{
          border: '1px solid lightgrey',
          display: 'block',
          marginTop: '.5rem',
          fontSize: '1rem',
          padding: '.7rem 0 .7rem 1rem',
          width: '96%',
        }}
        name={props.name}
        type={props.type}
        value={props.value}
        required={props.required}
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
  );
}

export const AuthButton: React.FC = (props) => {
  return (
    <button
        style = {{
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

export const AuthText: React.FC<AuthTextProps> = (props) => {
  return (
    <span
        style = {{
          color: 'rgb(98, 183, 253)',
          cursor: 'pointer',
          display: 'block',
          letterSpacing: '.2rem',
          marginTop: '1rem',
        }}
        onClick = {props.onClick}
    >
      {props.children}
    </span>
  );
}

export const Container: React.FC = (props) => {
  return (
    <div 
        style = {{
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
        style = {{
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
        style = {{
            borderBottom: `1px solid lightgrey`,
        }}
    />
  );
}

export const Form: React.FC<FormProps> = (props) => {
  return (
    <form
      onSubmit = {props.onSubmit}
    >
      {props.children}
    </form>
  )
}

export const Label: React.FC = (props) => {
  return (
    <label
        style = {{
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
        style = {{
          border: '1px solid lightgrey',
          color: 'grey',
          display: 'flex',
          fontSize: '.8rem',
          letterSpacing: '.1rem',
          margin: '.5rem 2rem 0 0',
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
        style = {{
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
        placeholder={props.placeholder}
    />
  );
}

export const InputRadio: React.FC<InputProps> = (props) => {
  return (
    <input
        style = {{
          margin: 'auto auto auto 1rem',
        }}
        name={props.name}
        type={'radio'}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
    />
  );
}

export const Button: React.FC = (props) => {
  return (
    <button
        style = {{
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

export const Error: React.FC = (props) => {
  return (
    <span
      style = {{
        color: 'red',
        fontSize: '10px',
      }}  
    >
      {props.children}
    </span>
  )
}