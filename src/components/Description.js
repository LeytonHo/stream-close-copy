import React from 'react'
import styled from 'styled-components';

const DescContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 70px;
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

const AdditionalEvents = styled.div`
    position: relative;
    height: 44px;
    margin-top: 40px;
    width: auto;
    cursor: pointer;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    background-color: rgb(239, 239, 239);
    color: rgb(72, 72, 72);
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 22px;
    padding: 0px 18px;
`;

const ButtonText = styled.p`
    color: rgb(72, 72, 72);
    cursor: pointer;
    font-family: HelveticaNeue;
    font-weight: 700;
    font-size: 16px;
    white-space: nowrap;
`;

const handleClick = () => {
    window.location.assign('http://github.com');
};

export const Description = () => (
    <>
        <DescContainer>
            <AboutTitle>About this event</AboutTitle>
            <DescTextContainer>
                <React.Fragment>
                <AboutDesc>
                    During this 45 minutes class, we are going to learn how to create a GIF using Figma. 
                    This class is addressed to makers, designers, and marketers who want to learn how to 
                    create stunning GIFs for their Product Hunt launch. ⚡️ The lesson costs symbolically 
                    the price of a coffee ☕️✌️
                    <br />
                    <br />
                    Event link: <a href="https://app.joinstream.io/how-to-gif-with-figma">https://app.joinstream.io/how-to-gif-with-figma</a>
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
                    I am Andréas, founder of 🍋 Citron (<a href="https://getcitron.com">https://getcitron.com</a>) 
                    a solution that makes it easy for entrepreneurs to get started with accounting. I have studied 
                    design and engineering at UC Berkeley and at Ecole des Ponts. I have a passion for tech 
                    entrepreneurship and enjoy dedicating some of my personal time to transfer some skills 
                    to passionated makers.
                    <br />
                </AboutDesc>
                </React.Fragment>
            </DescTextContainer> 
        </DescContainer>
        <div/>
            <AdditionalEvents>
                <a href='https://app.joinstream.io/u/e98f8'>
                    <Button>
                        <ButtonText>More events by Andréas Blondeau</ButtonText>
                    </Button>
                </a>
            </AdditionalEvents>
        <div/>
    </>
)