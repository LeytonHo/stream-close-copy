import styled from 'styled-components';

export const Landing = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    width: 100%;
    min-height: 100%;
    padding-bottom: 100px;
    background-color: rgb(255, 255, 255);
`;

export const Backdrop = styled.img`
    position: absolute;
    bottom: -70px;
    right: 10%;
    z-index: 100;
    opacity: 0.5;
`;

export const Body = styled.div`
    display: flex;
    width: 720px;
    flex-direction: column;
    padding: 20px 10px;

    @media (max-width: 786px) {
        padding-top: 20px;
        width: 92%
    }
`;

export const Date = styled.p`
    font-family: HelveticaNeue;
    font-weight: 700;
    font-size: 17px;
    color: rgb(85, 85, 85);
    margin: 0px 0px 10px;
`;

export const Event = styled.div`
    font-family: HelveticaNeue;
    font-weight: 700;
    font-size: 28px;
    color: rgb(72, 72, 72);
    max-width: 700px;
    margin: 0px;
`;

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const NameText = styled.p`
    font-family: HelveticaNeue;
    font-weight: 500;
    font-size: 18px;
    color: rgb(85, 85, 85);
    margin: 10px 0px 0px;
`;

export const Link = styled.a`
    text-decoration: underline;

    &:visited {
        color: rgb(85, 26, 139);
    }
`;
