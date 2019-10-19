import React from 'react';
import { colors } from './_colors';
import { FormProps, InputProps } from './_types';

const { DMA_lightgrey, DMA_grey } = colors

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
            color: DMA_grey,
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
            border: `1px solid ${DMA_lightgrey}`,
            color: DMA_grey,
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
            border: `1px solid ${DMA_lightgrey}`,
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