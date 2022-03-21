import React from 'react';
import styled from 'styled-components';
import { DescriptionBackground, Group_arrow, Frame_5 } from "../../assets"

interface DescriptionSectionProps {
    t?: any;
}

const DesciptionSectionWrapper = styled.section`
    display: flex;
`

const DescriptionBackgroundImage = styled.img`
    width: 99vw;
    height: auto;

`
const DescriptionContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family:'Sarpanch', sans-serif;
    margin-top: 10rem;
    flex-direction: column;
    color: white;   

    @media screen and (min-width:1441px){
        margin-top: 7%;
    }

    

    @media screen and (max-width: 1440px) {
        margin-top: 6rem;   
    }
    
    @media screen and (max-width: 1024px) {
        margin-top: 4rem;   
    }

    @media screen and (max-width: 768px) {
        margin-top: 3rem;   
    }
    @media screen and (max-width:450px) {
        margin-top: 2rem;
    }

`
const DescriptionHeading = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 4rem;


    @media screen and (min-width:1441px){
        font-size: 4rem;
    }


    @media screen and (max-width: 1440px) {
        font-size: 3.4rem; 
    }

    @media screen and (max-width: 1024px) {
        font-size: 2.6rem;   
    }

    @media screen and (max-width: 768px) {
       font-size: 2rem;   
    }

    @media screen and (max-width:450px) {
        font-size: 1rem;
    }
`
const DescriptionContent = styled.p`
    margin-top: 1rem;   
    width: 50%;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;

    @media screen and (min-width:1441px){
        font-size: 1.6rem;
        width: 56%;
    }

    @media screen and (max-width: 1440px) {
        font-size: 1.3rem; 
    }

    @media screen and (max-width: 1024px) {
        margin-top: 0.7rem;
        font-size: 0.8rem;   
     }

    @media screen and (max-width: 768px) {
        margin-top: 0.6rem;
        font-size: 0.6rem;   
    }

    @media screen and (max-width:450px) {
        padding: 0;
        margin-top: 0.4rem !important;
        font-size: 0.4rem;
    }

`

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ t }) => {
    return (
        <>
            {/* <DesciptionSectionWrapper>
                <DescriptionBackgroundImage src={DescriptionBackground} alt="description" />
                <DescriptionContainer >
                    <DescriptionHeading>
                        Turning Virtual Into Reality
                    </DescriptionHeading>
                    <DescriptionContent>
                        In Monopolon, we turn your childhood dream of becoming a millionaire come true. Dive into our metaverse to farm high rewards, go on quests, and party together to fight powerful bosses. Be a lord and own it all to convert your wealth from Defi into reality.
                    </DescriptionContent>
                </DescriptionContainer>

            </DesciptionSectionWrapper> */}

            <div className="DesciptionSectionWrapper">
                <div className="Group_arrow" >
                    <img src={Group_arrow} alt=""/>
                </div>
                <div className='DescriptionContainer'>
                    <h1 className='DescriptionHeading'>
                        Turning Virtual Into Reality
                    </h1>
                    <p className='DescriptionContent'>
                        In Monopolon, we turn your childhood dream of becoming a millionaire come true. Dive into our metaverse to farm high rewards, go on quests, and party together to fight powerful bosses. Be a lord and own it all to convert your wealth from Defi into reality.
                    </p>
                </div>
                <div className="Frame_5" >
                    <img src={Frame_5} alt="" />
                </div>
            </div>
        </>
    )
}