import React from 'react';
import { colors } from './_colors';
import { FormProps, InputProps, AuthTextProps } from './_types';

const { 
    DMA_lightgrey, 
    DMA_grey, 
    DMA_white, 
    DMA_azurblue,
  } = colors

export const AuthPanel: React.FC = (props) => {
    return (
      <div 
        style = {{
          background: DMA_white,
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
          border: `1px solid ${DMA_azurblue}`,
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
            color: DMA_grey,
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
            border: `1px solid ${DMA_lightgrey}`,
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
            background: DMA_azurblue,
            border: 'none',
            boxShadow: `0 0 5px ${DMA_lightgrey}`,
            color: DMA_white,
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
            color: DMA_azurblue,
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