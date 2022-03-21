import React from 'react';
import styled from 'styled-components';
import {MlonBackground, MlonTokenImage} from "../../assets"

interface MlonProps {
  t?:any;
}

const MlonSectionWrapper = styled.section`
  display: flex;
`

const MlonSectionBackgroundImage = styled.img`
  width: 99vw;
  height: auto;
`

const MlonContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 80%;
  left: 0; 
  right: 0; 
  margin-top: 10%;
  margin-left: auto; 
  margin-right: auto; 
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    margin-top: 9%;
  }

  @media screen and (max-width: 450px){
    margin-top: 7%;
  }
`
const TokenInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: white;
  width: 60%;
`
const MlonHeading = styled.h2`
  font-size: 4.5rem;
  font-family: 'Sarpanch', sans-serif;
  font-weight: 800;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 450px){
    font-size: 0.6rem;
  }
`
const MlonDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  // line-height: 50px;
  padding: 0;

  @media screen and (max-width: 1024px) {
    font-size: 1.1  rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 450px){
    font-size: 0.6rem;
  }

`
const MlonToken = styled.img`
  width: 25%;
  height: auto;
`

export const MlonSection: React.FC<MlonProps> = () => {
  return (
    <>
    {/* <MlonSectionWrapper>
      <MlonSectionBackgroundImage src={MlonBackground} alt="Mlon Token" />
      <MlonContainer>
        <MlonToken src={MlonTokenImage} alt="MlonToken" />
        <TokenInfoWrapper>
          <MlonHeading>MLON</MlonHeading>
          <MlonDescription>
            In Monopolon, we turn your childhood dream of becoming a millionaire come true. Dive into our metaverse to farm high rewards, go on quests, and party together to fight powerful bosses. Be a lord and own it all to convert your wealth from Defi into reality.
          </MlonDescription>
        </TokenInfoWrapper>
      </MlonContainer>
    </MlonSectionWrapper> */}
    <div className='MlonSectionWrapper'>
      <div className='MlonContainer'>
        <img src={MlonTokenImage} alt='' className='MlonToken' />
        <div className='TokenInfoWrapper'>
          <h1 className='MlonHeading'>MLON</h1>
          <p className='MlonDescription'>In Monopolon, we turn your childhood dream of becoming a millionaire come true. Dive into our metaverse to farm high rewards, go on quests, and party together to fight powerful bosses. Be a lord and own it all to convert your wealth from Defi into reality.</p>
        </div>
      </div>
    </div>
    </>
  )

}