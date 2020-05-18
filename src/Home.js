import React from 'react'
import styled from 'styled-components';
import { Gif } from './components/Gif';
import { Avatar } from './components/Avatar';
import { Info } from './components/Info';
import { Description } from './components/Description';
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

export const Home = () => (
    <LandingContainer>
        <Gif />
        <BackdropStyled src={Backdrop} alt="Backdrop" />
        <Avatar />
        <Info />
        <Description />
    </LandingContainer>
)