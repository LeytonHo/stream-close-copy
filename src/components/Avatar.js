import React from 'react'
import styled from 'styled-components';
import AvatarImage from '../assets/avatar.png';

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    z-index: 102;
`;

const AvatarBox = styled.div`
    align-self: flex-start;
    width: 60px;
    height: 60px;
    background-color: rgb(0, 0, 0);
    margin-top: -30px;
    border-radius: 35px;
    border-style: solid;
    border-width: 4px;
    border-color: white;
    overflow: hidden;
`;

const AvatarStyled = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    flex: 1 1 0%;
    overflow: hidden;
`;

export const Avatar = () => (
    <AvatarContainer>
        <AvatarBox>
            <AvatarStyled src={AvatarImage} />
        </AvatarBox>
    </AvatarContainer>
)
