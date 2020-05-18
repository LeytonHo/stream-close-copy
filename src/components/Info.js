import React from 'react'
import styled from 'styled-components';

const InfoContainer = styled.div`
    display: flex;
    width: 720px;
    flex-direction: column;
    padding: 20px 10px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftHeader = styled.div`
    width: 75%;
`;

const Date = styled.p`
    font-family: HelveticaNeue;
    font-weight: 700;
    font-size: 17px;
    color: rgb(85, 85, 85);
    margin: 0px 0px 10px;
`;

const EventTitle = styled.div`
    font-family: HelveticaNeue;
    font-weight: 700;
    font-size: 28px;
    color: rgb(72, 72, 72);
    max-width: 700px;
    margin: 0px;
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
`;

const Name = styled.p`
    font-family: HelveticaNeue;
    font-weight: 500;
    font-size: 18px;
    color: rgb(85, 85, 85);
    margin: 10px 0px 0px;
`;

const RightHeader = styled.div`
    width: 25%;
    text-align: right;
    display: block;
`;

const Price = styled.h3`
    font-size: 20px;
    font-family: HelveticaNeue;
    font-weight: 700;
    margin: 15px 0px 0px;
`;

const PriceDesc = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin: 0px;
`;

export const Info = () => (
    <InfoContainer>
        <HeaderContainer>
            <LeftHeader>
                <Date>No stream scheduled</Date>
                <EventTitle>How to GIF with Figma <span role="img" aria-label="sparkle">✨</span></EventTitle>
                <NameContainer>
                    <Name>by Andréas Blondeau</Name>
                </NameContainer>
            </LeftHeader>
            <RightHeader>
                <Price>$1.99</Price>
                <PriceDesc>to join</PriceDesc>
            </RightHeader>
        </HeaderContainer>
    </InfoContainer>
)
