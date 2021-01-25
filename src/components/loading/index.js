import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';
export default function Loading({ src, ...restProps }) {
    return (
        <Spinner>
            <LockBody />
            <Picture src={'/images/users/${src}.png'} />
        </Spinner>
    );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <this.ReleaseBody />
}