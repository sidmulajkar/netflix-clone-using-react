import React, {useState} from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    const handleSignIn = (event) => {
        event.preventDefault();

        // firebase work here!
    }
    

    return (
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">
                    <Form.Input placeholder="Email address"
                        value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)}
                    />

                    <Form.Input placeholder="Password" autoComplete="off"
                        value={password} onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        SignIn
                    </Form.Submit>
                </Form.Base>

                <Form.Text>
                    New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                </Form.Text>

                <Form.TextSmall>
                    This page is protected by Google reCAPCTHA to ensure that you are not a bot. Learn more.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>;
        <FooterContainer />
    </>
    );    
}