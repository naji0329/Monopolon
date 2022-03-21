import React from 'react';
import styled, { keyframes } from 'styled-components';
import WhitepaperImage from '../../assets/white-paper.png'

interface WhitepaperProps {
    t?: any;
}

const WhitepaperContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;   
    background-color: rgb(13, 4, 21);
    color: white;
    padding: 2rem 2rem;
    `

const floatingWhitePaper = keyframes`
    0% { transform: translate(0,  0px);transform: rotate(45deg) !important; }
    50%  { transform: translate(0, 15px);transform: rotate(45deg) !important; }
    100%   { transform: translate(0, -0px);transform: rotate(45deg) !important; }   
    `;

const WhitepaperIcon = styled.img`
    width: 200px;
    height: auto;
    filter: drop-shadow(0 0 1rem rgba(90, 62, 135, 1));

    animation: ${floatingWhitePaper} 2s infinite ease-in-out;



    @media screen and (max-width:450px){
        width: 130px;
    }
`

const WhitepaperHeading = styled.div`
    margin: 1rem;
    color: #ffffff;
    font-size: 2rem;

    @media screen and (max-width:450px){
        font-size: 1.5rem;
    }
`

const WhitepaperDescription = styled.div`
    margin: 1rem;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;

    @media screen and (max-width:450px){
        font-size: 1rem;
    }
`
const WhitepaperButton = styled.button`
    background: linear-gradient(
        356deg,
        rgba(97, 39, 91, 1) 0%,
        rgba(9, 9, 121, 1) 50%,
        rgba(90, 62, 135, 1) 100%
      );
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 1rem;
        
    @media screen and (max-width:450px){
        font-size: 0.7rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }

    &:hover{
        background: linear-gradient(
            356deg,
            rgba(90, 62, 135, 1) 0%,
            rgba(9, 9, 121, 1) 50%,
            rgba(97, 39, 91, 1) 100%
          );
     }

`
export const Whitepaper: React.FC<WhitepaperProps> = ({ t }) => {
    return (
        <div>
            <WhitepaperContainer>
                <WhitepaperIcon src={WhitepaperImage} alt="whitepaper" />
                <WhitepaperHeading> {t('text.RoyalWhitepaper')} </WhitepaperHeading>
                <WhitepaperDescription> {t('text.OpenPaperDescription')} </WhitepaperDescription>
                <WhitepaperButton> {t('text.OpenWhitepaper')} </WhitepaperButton>
            </WhitepaperContainer>
        </div>
    )
}