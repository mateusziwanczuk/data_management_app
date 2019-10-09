import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from './Auth';
import { AuthPanel, AuthLabel, AuthInput, AuthButton, AuthForm, AuthText } from '../UIElements/Components';
import firebase from 'firebase';
import { PageHeader } from '../components/PageHeader/PageHeader';

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
        <AuthPanel>
            <AuthForm onSubmit={handleSignIn}>
                <PageHeader title={'SIGN IN'} />
                <AuthLabel>
                    email
                    <AuthInput name='email' placeholder='email'/>
                </AuthLabel>
                <AuthLabel>
                    password
                    <AuthInput name='password' type='password' placeholder='password'/>
                </AuthLabel>
                <AuthButton>Sign in</AuthButton>
                <AuthText
                    onClick={() => history.push('/sign-up')}
                >
                    I don't have account yet.
                </AuthText>
            </AuthForm>
        </AuthPanel>
    )
}

export default withRouter(SignIn)

