import React, { useState, useEffect } from 'react';
import firebase, { User } from 'firebase';
import { History } from 'history';

export interface ChildComponentProps {
    history : History
}

export const AuthContext = React.createContext({});

export const AuthProvider: React.FC = (props: any) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            { props.children }
        </AuthContext.Provider>
    )
}
