import  React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Loading } from '../components';

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

    return profile.displayName? (
        loading ? ( <Loading src ={user.photoURL} /> ) : null
    ) : (
    
    <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}