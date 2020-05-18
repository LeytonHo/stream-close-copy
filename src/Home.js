import React from 'react'
import styled from 'styled-components';
import StreamGif from "./assets/stream_gif.gif";

const GifContainer = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.08);
    -webkit-box-pack: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
    overflow: hidden;
`;

const BlurLayer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    max-width: none;
    -webkit-box-flex: 1;
    flex-grow: 1;
`;

const GifLayer = styled.div`
    position: absolute;
`;

const SolidGif = styled.img`
    object-fit: contain;
    width: 400px;
    height: 400px;
    flex: 1 1 0%;
    overflow: hidden;
`;

export const Home = () => (
    <div>
        <GifContainer>
            <BlurLayer>
                <img width="100%" src={StreamGif} alt="Stream Gif" style={{filter: `blur(20px)`}}/> 
            </BlurLayer>
            <GifLayer>
                <SolidGif src={StreamGif} />
            </GifLayer> 
        </GifContainer>
    </div>
)