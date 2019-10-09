import React, { useState, useEffect } from 'react';
import firebase, { User } from 'firebase';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            { children }
        </AuthContext.Provider>
    )
}
