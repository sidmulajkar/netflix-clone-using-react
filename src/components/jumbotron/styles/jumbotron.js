import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) =>direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;
export const Item = styled.div`
    display: flex;
    border-bottom: 6px solid #222;
    padding: 50px 5%;
    color: wihte;
    overflow: hidden;
`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px){
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px:
    line-hieght: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    font-height: normal;
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Container = styled.div`
    @media (max-width: 1000px) {
        ${Item}: last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;