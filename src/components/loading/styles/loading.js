import styled, { createGlobalStyle } from 'styled-components/macro';

export const LockBody = createGlobalStyle`
    body{
        overflow: hidden;
    }
`;

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`;

export const Spinner = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 999;
`;

export const Picture = styled.img``;

//New Time Stamp 5:36:22 Spinner review