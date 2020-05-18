import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import StreamLogo from '../assets/stream-green.svg'
import Profile from '../assets/creator-profile.svg'

const Styles = styled.div`
    width: 100%;
    height: 64px;
    
    .navbar {
        position: fixed;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        height: 64px;
        background-color: rgb(255, 255, 255);
        -webkit-box-pack: justify;
        justify-content: space-between;
        z-index: 1000;
        border-color: rgb(239, 239, 239);
        border-width: 1px;
        border-style: solid;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

const RightContain = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 5%;
`;

const LeftContain = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 5%;
`;

const HelpStyle = styled.p`
    font-family: HelveticaNeue;
    font-size: 14px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin: 0px 10px;
`;

export const NavigationBar = () => (
    <Styles>
       <Navbar>
           <LeftContain>
                <Navbar.Brand href="https://app.joinstream.io/dashboard">
                    <img src={StreamLogo} alt="Stream Logo" />
                </Navbar.Brand>
            </LeftContain>
           <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
           <RightContain>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/"><HelpStyle>Help</HelpStyle></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/"><img src={Profile} alt="Profile" /></Nav.Link></Nav.Item>
                </Nav>
           </RightContain>
       </Navbar>
    </Styles>
)
