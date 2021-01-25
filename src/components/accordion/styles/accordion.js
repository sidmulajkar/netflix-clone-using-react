import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 30px;
    flex-direction: column;
    max-width: 750px;
    margin: auto;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
    max-width: 760px;
    &:first-of-type {
        margin-top: 3em;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 25px;
    font-weight: normal;
    background: #303030;
    padding: 0.8em 1.2em;
    user-select: none;
    align-items: center;

    img {
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 19px;
    }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-beizer(0.5, 0, 0.1, 1);
    font-size: 22px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: 0.8em 2.2em;
    white-space: pre-wrap;
    user-select: none;

    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 22px;
    }
`;

export const Frame = styled.div`
    margin-bottom: 40px;

`;


export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px ) {
        font-size: 30px;
    }
`;



