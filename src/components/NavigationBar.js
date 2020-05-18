import React from 'react';
import styled from 'styled-components';
import StreamLogo from '../assets/images/stream-green.svg'
import Profile from '../assets/images/creator-profile.svg'

const Navbar = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: rgb(255, 255, 255);
    justify-content: space-between;
    z-index: 1000;
    border-color: rgb(239, 239, 239);
    border-width: 1px;
    border-style: solid;
`;

const RightContain = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5%;
`;

const LeftContain = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5%;
`;

const Logo = styled.img`
    cursor: pointer;
    height: 20px;
`;

const HelpStyle = styled.p`
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin: 0px 10px;
`;

const Link = styled.a`
    text-decoration: none;
    padding: 10px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const NavigationBar = () => (
    <Navbar>
        <LeftContain>
            <Link href="https://app.joinstream.io/dashboard">
                <Logo src={StreamLogo} alt="Stream Logo" />
            </Link>
        </LeftContain>
        <RightContain>
            <Link href="/"><HelpStyle>Help</HelpStyle></Link>
            <Link href="/"><img src={Profile} alt="Profile" /></Link>
        </RightContain>
    </Navbar>
)
