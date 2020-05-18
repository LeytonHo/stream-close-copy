import React from 'react'
import { Landing, Backdrop, Body, Date, Event, Name, NameText, Link} from './page-styling/home-styled';
import { Gif } from './components/Gif';
import { Avatar } from './components/Avatar';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { MoreButton } from './components/MoreButton';
import BackdropImage from './assets/images/backdrop.svg';
import AvatarImage from './assets/images/avatar.png';
import StreamGif from "./assets/stream_gif.gif";
import Emoji from './components/Emoji';

// There is likely a better way to pass text as props and organize styling
// On the site, I'm assuming the below constants would be passed in after backend handling 

const Andreas = "Andréas Blondeau";
const Cost = "$1.99";
const InputDate = "No stream scheduled";
const AdditionalInfo = 'https://app.joinstream.io/u/e98f8';
const Title = (
    <p>
        How to GIF with Figma <Emoji symbol="✨" label="sparkle" />
    </p>
)

const AboutEvent = (
    <p>
       During this 45 minutes class, we are going to learn how to create a GIF using Figma. 
       This class is addressed to makers, designers, and marketers who want to learn how to 
       create stunning GIFs for their Product Hunt launch. <Emoji symbol="⚡️" label="bolt"/>
       The lesson costs symbolically the price of a coffee <Emoji symbol="☕️" label="coffee"/>
       <Emoji symbol="✌️" label="peace"/>
        <br />
        <br />
        Event link: <Link href="https://app.joinstream.io/how-to-gif-with-figma">https://app.joinstream.io/how-to-gif-with-figma</Link>
        <br /> 
    </p>
)

const AboutHost = (
    <p>
        I am Andréas, founder of <Emoji symbol="🍋" label="citrus"/> Citron 
        (<Link href="https://getcitron.com">https://getcitron.com</Link>) a solution that 
        makes it easy for entrepreneurs to get started with accounting. I have studied 
        design and engineering at UC Berkeley and at Ecole des Ponts. I have a passion for tech 
        entrepreneurship and enjoy dedicating some of my personal time to transfer some skills 
        to passionated makers.
        <br />
    </p>
)


export const Home = () => (
    <Landing>
        <Gif src={StreamGif}/>
        <Backdrop src={BackdropImage} alt="Backdrop" />
        <Avatar src={AvatarImage}/>
        <Body>
            <Header price={Cost}>
                <Date>{InputDate}</Date>
                <Event>{Title}</Event>
                <Name>
                    <NameText>by {Andreas}</NameText>
                </Name>
            </Header>
            <Description event={AboutEvent} host={AboutHost}/>
        </Body>
        <MoreButton src={AdditionalInfo} name={Andreas} />
    </Landing>
)