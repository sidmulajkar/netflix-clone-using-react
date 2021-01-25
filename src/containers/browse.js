/* eslint-disable no-nested-ternary */
import  React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Header, Loading } from '../components';

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);


    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (
        <>
        {loading ? <Loading src={user.photoURL} /> 
            :  <Loading.ReleaseBody />}

        <Header src="joker1">
            <Header.Feature>
                <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                <Header.Text>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                futile attempt to feel like he's part of the world around him.
                </Header.Text>
            </Header.Feature>
        </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}

//Timestamp 5:51:51 need to work on header image and text alignment