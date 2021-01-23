import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Profiles } from '../components/profiles/index';

export function SelectProfileContainer({ user, setProfile }) {
    return (
    <> 
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo tp={ROUTES.HOME} src={logo} alt="Netflix" />
            </Header.Frame>
        </Header>

        {/* <Profiles>
            <Profiles.Title>Who is Watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User>
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles> */}
    </>
    );
}

//Import Profiles Error...New TimeStamp 5:20:56