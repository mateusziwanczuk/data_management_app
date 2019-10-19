import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { colors } from './_colors';

const { 
  DMA_lightgrey, 
  DMA_red, 
  DMA_white, 
  DMA_azurblue,
} = colors

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
            borderBottom: `1px solid ${DMA_lightgrey}`,
        }}
    />
  );
}

export const Button: React.FC = (props) => {
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

export const Error: React.FC = (props) => {
  return (
    <span
      style = {{
        color: DMA_red,
        fontSize: '10px',
      }}  
    >
      {props.children}
    </span>
  )
}

export const Spinner: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      progress: { margin: theme.spacing(2) }
    })
  );

  const classes = useStyles();

  return (
    <CircularProgress className={classes.progress} />
  );
}