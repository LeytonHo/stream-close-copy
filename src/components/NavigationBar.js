import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import styled from 'styled-components';
import StreamLogo from '../assets/stream-green.svg'
import Profile from '../assets/creator-profile.svg'

const Styles = styled.div`
    .navbar {
        background-color: #ffffff;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
       <Navbar expand="lg">
           <Navbar.Brand href="https://app.joinstream.io/dashboard">
               <img src={StreamLogo} alt="Stream Logo" />
            </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
           <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ml-auto">
                   <Nav.Item><Nav.Link href="/">Help</Nav.Link></Nav.Item>
                   <Nav.Item><Nav.Link href="/"><img src={Profile} alt="Profile" /></Nav.Link></Nav.Item>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
    </Styles>
)
