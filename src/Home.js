import React from 'react'
import styled from 'styled-components';
import { Gif } from './components/Gif';
import { Avatar } from './components/Avatar';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { MoreButton } from './components/MoreButton';
import Backdrop from './assets/backdrop.svg';

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    min-height: 100%;
    padding-bottom: 100px;
    background-color: rgb(255, 255, 255);
`;

const BackdropStyled = styled.img`
    position: absolute;
    bottom: -70px;
    right: 10%;
    z-index: 100;
    opacity: 0.5;
`;

const BodyContainer = styled.div`
    display: flex;
    width: 720px;
    flex-direction: column;
    padding: 20px 10px;

    @media (max-width: 786px) {
        padding-top: 20px;
        width: 92%
    }
`;

export const Home = () => (
    <LandingContainer>
        <Gif />
        <BackdropStyled src={Backdrop} alt="Backdrop" />
        <Avatar />
        <BodyContainer>
            <Header />
            <Description />
        </BodyContainer>
        <MoreButton />
    </LandingContainer>
)