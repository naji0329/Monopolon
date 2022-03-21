import React from "react";
import styled, { keyframes } from "styled-components";
import monopolonLogoWhite from "../../assets/Logo/monopolon-white.png";
import LaunchImagePng from "../../assets/coming soon.png";
import MonopolonLogo from "../../assets/mlon_token_transparent.png"
import ComingSoonImage from "../../assets/comingsoon_monopolon.jpg"
import ComingSoonImage320 from "../../assets/comingsoon_monopolon320.jpg"
import ComingSoonMobile from "../../assets/comingsoon_monopolon_mobile.jpg"

const gradientBackground = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const ComingSoonContainer = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;
  height: 100vh;
  // background: linear-gradient(
  //   356deg,
  //   rgba(97, 39, 91, 1) 0%,
  //   rgba(9, 9, 121, 1) 50%,
  //   rgba(90, 62, 135, 1) 100%
  // );
  background: url(${ComingSoonImage}) !important;
  background-position: center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  // flex-direction: column;
  // animation: ${gradientBackground} 3s ease alternate infinite;

  @media screen and (max-width: 450px) {
    padding: 1rem;
    background: url(${ComingSoonImage}) !important;
    background-repeat: no-repeat !important;
    // background-size: cover !important;
    background-position: center !important;
  }
  @media screen and (max-width: 320px) {
    padding: 1rem;
    background: url(${ComingSoonImage320}) !important;
    background-repeat: no-repeat !important;
    // background-size: cover !important;
    background-position: center !important;
  }
`;
const LogoContainer = styled.img`
  width: 500px;
  height: auto;
  // padding: 4rem;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width:1024px){
    width: 290px;
  }
  @media screen and (min-width: 1025px) and (max-width:1600px){
    width: 290px;
  }
`;

const LaunchSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  text-align: center;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
const LaunchTextContainer = styled.div`
  color: white;
  width: 60%;
  text-align: left;
  margin: 1rem 2rem;
  @media screen and (max-width: 450px) {
    text-align: center;
    width: 100%;
  }
`;
const Launchtext1 = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;
const LaunchText2 = styled.p`
  font-size: 4rem;
  font-weight: 900;
  margin: 0;

  @media screen and (max-width: 450px) {
    font-size: 2rem;
    // width: 100vw;
  }
`;
const LaunchImageContainer = styled.div``;
const Floating = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 55px); }
    100%   { transform: translate(0, -0px); }   
`;
const LaunchImage = styled.img`
  width: 25rem;
  height: auto;
  animation-name: ${Floating};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  filter: drop-shadow(0 0 0.5rem whitesmoke);
  @media screen and (max-width: 450px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) and (max-width:1024px){
    width: 17rem;
  }
  @media screen and (min-width: 1025px) and (max-width:1600px){
    width: 15rem;
  }
`;
export const ComingSoon = () => {
  return (
    <>
      <ComingSoonContainer>
        {/* <LogoContainer src={MonopolonLogo} alt="Monopolon" />
        <LaunchSection>
          <LaunchTextContainer>
            <Launchtext1> We are </Launchtext1>
            <LaunchText2> Coming Soon... </LaunchText2>
          </LaunchTextContainer>
          <LaunchImageContainer>
            <LaunchImage src={LaunchImagePng} alt="" />
          </LaunchImageContainer>
        </LaunchSection> */}
        {/* <img src={ComingSoonImage} alt="Coming Soon"/> */}
      </ComingSoonContainer>
    </>
  );
};
