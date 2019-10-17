import React from 'react';
import { ReduxStore } from '../../redux/app/app.reducer';
import { useSelector } from 'react-redux';
import { Spinner } from '../../UIElements/Components';

export const Loader: React.FC = ({ children }) => {
    const isLoading = useSelector((state: ReduxStore) => state.app.isLoading);

    return (
        <>
            { isLoading && <Spinner /> }
            { children }
        </>
    )
}