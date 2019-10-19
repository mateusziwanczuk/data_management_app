import React, { useCallback } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthPanel, AuthLabel, AuthInput, AuthButton, AuthForm, AuthText } from '../uiComponents/auth';
import { PageHeader } from '../components/PageHeader/PageHeader';
import firebase, { User } from 'firebase';
import { useSelector } from 'react-redux';
import { ReduxStore } from '../redux/app/app.reducer';
import { ChildComponentProps } from '../_types/types';

const SignUp: React.SFC<ChildComponentProps> = ({ history }) => {
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

    const user: User|null = useSelector((state: ReduxStore) => state.auth.authUser);

    if (user) return <Redirect to='/' />

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
                <AuthButton>SIGN UP</AuthButton>
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

