import React from 'react'
import styled from 'styled-components';

const AdditionalEvents = styled.div`
    position: relative;
    height: 44px;
    margin-top: 20px;
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
    margin-top: auto;
    margin-bottom: auto;
`;

const ButtonLink = styled.a`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const MoreButton = () => (
    <AdditionalEvents>
        <ButtonLink href='https://app.joinstream.io/u/e98f8'>
            <Button>
                <ButtonText>More events by Andréas Blondeau</ButtonText>
            </Button>
        </ButtonLink>
    </AdditionalEvents>
)