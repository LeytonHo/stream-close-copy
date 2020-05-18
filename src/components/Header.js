import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LeftHeader = styled.div`
    width: 75%;

    @media (max-width: 786px) {
        width: 100%
    }
`;

const RightHeader = styled.div`
    width: 25%;
    text-align: right;
    display: block;

    @media (max-width: 786px) {
        display: none;
    }
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

export const Header = (props) => (
    <HeaderContainer>
        <LeftHeader>
            {props.children}
        </LeftHeader>
        <RightHeader>
            <Price>{props.price}</Price>
            <PriceDesc>to join</PriceDesc>
        </RightHeader>
    </HeaderContainer>
)
