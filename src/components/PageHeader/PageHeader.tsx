import React from 'react';
import './PageHeader.css'

interface Title {
    title: string
}

export const PageHeader = (props: Title) => {
  return (
    <>
        <div className={'Container'}>
            <span className={'H1'}>
                {props.title}
            </span>
        </div>
    </>
  );
}