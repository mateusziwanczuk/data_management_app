import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from './Auth';
import firebase from 'firebase';

const SignIn = ({ history }: any) => {
    const handleSignIn = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                    history.push('/');
            } 
            catch (error) {
                alert(error)
            }
        }, [history]
    )

    const { currentUser }: any = useContext(AuthContext);

    if (currentUser) return <Redirect to='/' />

    return (
        <div>
            <h1>Sign in</h1>
            <form onSubmit={handleSignIn}>
                <label>
                    email
                    <input name='email' placeholder='email'/>
                </label>
                <label>
                    password
                    <input name='password' type='password' placeholder='password'/>
                </label>
                <button type='submit'>Sign in</button>
            </form>
        </div>
    )
}

export default withRouter(SignIn)

