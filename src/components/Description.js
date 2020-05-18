import React from 'react'
import styled from 'styled-components';
import Emoji from './Emoji';

const DescContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 70px;

    @media (max-width: 786px) {
        flex-direction: column;
        margin-top: 40px;
    }
`;

const DescTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: 500px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    padding-bottom: 30px;

    @media (max-width: 786px) {
        margin-top: 15px;
        width: 100%;
    }
`;

const AboutTitle = styled.p`
    width: 200px;
    font-family: HelveticaNeue;
    font-weight: 700;
    font-size: 20px;
    color: rgb(85, 85, 85);
    margin: 0px;
`;

const AboutDesc = styled.p`
    font-family: HelveticaNeue;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: rgb(85, 85, 85);
    margin: 0px;
    z-index: 102;
`;

const Link = styled.a`
    text-decoration: underline;

    &:visited {
        color: rgb(85, 26, 139);
    }
`;

export const Description = () => (
    <>
        <DescContainer>
            <AboutTitle>About this event</AboutTitle>
            <DescTextContainer>
                <React.Fragment>
                <AboutDesc>
                    During this 45 minutes class, we are going to learn how to create a GIF using Figma. 
                    This class is addressed to makers, designers, and marketers who want to learn how to 
                    create stunning GIFs for their Product Hunt launch. <Emoji symbol="⚡️" label="bolt"/>
                    The lesson costs symbolically the price of a coffee <Emoji symbol="☕️" label="coffee"/>
                    <Emoji symbol="✌️" label="peace"/>
                    <br />
                    <br />
                    Event link: <Link href="https://app.joinstream.io/how-to-gif-with-figma">https://app.joinstream.io/how-to-gif-with-figma</Link>
                    <br />
                </AboutDesc>
                </React.Fragment>
            </DescTextContainer>
        </DescContainer>
        <DescContainer>
        <AboutTitle>About the host</AboutTitle>
            <DescTextContainer>
                <React.Fragment>
                <AboutDesc>
                    I am Andréas, founder of <Emoji symbol="🍋" label="citrus"/> Citron 
                    (<Link href="https://getcitron.com">https://getcitron.com</Link>) a solution that 
                    makes it easy for entrepreneurs to get started with accounting. I have studied 
                    design and engineering at UC Berkeley and at Ecole des Ponts. I have a passion for tech 
                    entrepreneurship and enjoy dedicating some of my personal time to transfer some skills 
                    to passionated makers.
                    <br />
                </AboutDesc>
                </React.Fragment>
            </DescTextContainer> 
        </DescContainer>
    </>
)