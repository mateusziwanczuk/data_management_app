import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from './Auth';
import { AuthPanel, AuthLabel, AuthInput, AuthButton, AuthForm, AuthText } from '../UIElements/Components';
import { PageHeader } from '../components/PageHeader/PageHeader';
import firebase from 'firebase';

const SignUp = ({ history }: any) => {
    const handleSignUp = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
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
            <AuthForm onSubmit={handleSignUp}>
                <PageHeader title={'SIGN UP'} />
                <AuthLabel>
                    email
                    <AuthInput name='email' placeholder='email'/>
                </AuthLabel>
                <AuthLabel>
                    password
                    <AuthInput name='password' type='password' placeholder='password'/>
                </AuthLabel>
                <AuthButton>Sign up</AuthButton>
                <AuthText
                    onClick={() => history.push('/sign-in')}
                >
                    I have account already.
                </AuthText>
            </AuthForm>
        </AuthPanel>
    )
}

export default withRouter(SignUp)

