import React from 'react'
import styled from 'styled-components';

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

export const Description = (props) => (
    <>
        <DescContainer>
            <AboutTitle>About this event</AboutTitle>
            <DescTextContainer>
                <AboutDesc>
                    {props.event}
                </AboutDesc>
            </DescTextContainer>
        </DescContainer>
        <DescContainer>
        <AboutTitle>About the host</AboutTitle>
            <DescTextContainer>
                <AboutDesc>
                    {props.host}
                </AboutDesc>
            </DescTextContainer> 
        </DescContainer>
    </>
)