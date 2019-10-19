import React, { useCallback } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthPanel, AuthLabel, AuthInput, AuthButton, AuthForm, AuthText } from '../uiComponents/auth';
import { PageHeader } from '../components/PageHeader/PageHeader';
import firebase, { User } from 'firebase';
import { ReduxStore } from '../redux/app/app.reducer';
import { useSelector } from 'react-redux';
import { ChildComponentProps } from '../_types/types';

const SignIn: React.SFC<ChildComponentProps> = ({ history }) => {
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

    const user: User|null = useSelector((state: ReduxStore) => state.auth.authUser);

    if (user) return <Redirect to='/' />

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
                <AuthButton>SIGN IN</AuthButton>
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

