import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { WelcomeBackground, WelcomeButtons, ConnBtnBG } from '../../assets';


interface WelcomeSectionProps {
  t?: any;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
  return (
    <>
      {/* <WelcomeSectionWrapper>
        <WelcomeSectionBackgroundImage src={WelcomeBackground} alt="Welcome" />
        <ContentWrapper>
          <WelcomeTextWrapper>
            <WelcomeText>
              Building Actual Wealth <br /> with Virtual Opulence{' '}
            </WelcomeText>
          </WelcomeTextWrapper>
          <ButtonsGroup>
            <Button className="mx-3">Comming Soon</Button>
            <Button className="mx-3">Pre-Registration</Button>
          </ButtonsGroup>
        </ContentWrapper>
      </WelcomeSectionWrapper> */}

      <div className='WelcomeSectionWrapper'>
        <h1>Building Actual Wealth <br/>with Virtual Opulence</h1>
        <div className='welcome-button-group'>
          <div className='wel-button'>Coming Soon</div>
          <div className='wel-button'>Pre-Registration</div>
        </div>
      </div>
    </>
  );
};

// import React from "react";
// import styled, { keyframes } from "styled-components";
// import IconRight from "../../assets/games-right.png";
// import IconLeft from "../../assets/games-left.png";
// import Background from "../../assets/wallpaper.jpg";
// import Backgrounds from "../../assets/monopolon_welcome.jpg";
// import { Container } from "react-bootstrap";

// interface WelcomeSectionProps {
//   t?: any;
// }

// export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ t }) => {

//   const WelcomeContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: end;
//     color: white;
//     max-height: 92vh !important;
//     height:100vh;
//     width:100%;
//     // padding: 0rem 2rem;
//     background-image: url(${Backgrounds});
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//     // margin-top: 70px;
//     // background-position: center;
//     // background-size: cover;
//     // background-repeat: no-repeat;

//     @media screen and (max-width: 450px) {
//       margin-top: 70px;
//       height:60vh !important;
//     }
//   `;

//   const Button = styled.button`
//   outline: 0;
//   position: relative;
//   display: inline-block;
//   font-weight: 400;
//   text-transform: uppercase;
//   text-align: center;
//   border: 1px solid #f5f5f5;
//   cursor: pointer;
//   transition: color .3s cubic-bezier(.645,.045,.355,1),background-color .3s cubic-bezier(.645,.045,.355,1),border-color.3s cubic-bezier(.645,.045,.355,1);
//   padding: 8px 30px;
//   font-size: 14px;
//   border-radius: 2px;
//   color: rgba(0,0,0,.8509803921568627);
//   box-shadow: 0 5px 40px rgba(0,0,0,.16);
//   box-sizing: border-box;
//   font-size: 16px;
//   font-weight: 600;
//   font-family: "VigaRegular","sans-serif";
//     // -webkit-box-align: center;
//     // align-items: center;
//     // cursor: pointer;
//     // display: inline-flex;
//     // font-family: inherit;
//     // font-size: 16px;
//     // font-weight: 600;
//     // -webkit-box-pack: center;
//     // justify-content: center;
//     // letter-spacing: 0.03em;
//     // line-height: 1;
//     // opacity: 1;
//     // outline: 0px;
//     // transition: background-color 0.3s ease 0s, opacity 0.2s ease 0s;
//     // height: 48px;
//     // padding: 0px 24px;
//     // background-color: transparent;
//     // border: 2px solid #158be2;
//     // box-shadow: none;
//     // color: #ffffff;
//     &:hover {
//       cursor: pointer;
//       transform: scale(1.06, 1.06);
//       box-shadow: 0px 0px 7px rgba(256, 256, 256, 1);
//     }

//     @media screen and (max-width: 450px) {
//       font-size: 0.6rem;
//       padding: 0.4rem 1rem;
//       // width: 100%;
//       border-radius: 0.4rem;
//     }
//     @media screen and (min-width: 451px) and (max-width: 768px) {
//       font-size: 1rem;
//       padding: 0.4rem 1rem;
//       border-radius: 0.4rem;
//     }
//   `;

//   const floating1 = keyframes`
//   0% { transform: translate(0,  0px);transform: rotate(45deg) !important; }
//   50%  { transform: translate(0, 55px);transform: rotate(45deg) !important; }
//   100%   { transform: translate(0, -0px);transform: rotate(45deg) !important; }
//   `;
//   const FloatingImage1 = styled.img`
//     // justify-content: flex-start;
//     width: 150px;
//     height: auto;
//     text-align: center;
//     animation: ${floating1} 4s infinite ease-in-out;

//     @media screen and (max-width: 450px) {
//       display: none;
//     }
//   `;
//   const floating2 = keyframes`
//   0% { transform: translate(0,  0px);transform: rotate(45deg) !important; }
//   50%  { transform: translate(0, 55px);transform: rotate(45deg) !important; }
//   100%   { transform: translate(0, -0px);transform: rotate(45deg) !important; }
//   `;
//   const FloatingImage2 = styled.img`
//     justify-content: flex-start;
//     width: 150px;
//     height: auto;
//     text-align: center;
//     animation: ${floating2} 4s infinite ease-in-out;

//     @media screen and (max-width: 450px) {
//       display: none;
//     }
//   `;
//   const CenterSection = styled.div`
//     flex-direction: column;
//     display: flex;
//     align-content: center;
//     align-items: center;
//   `;

//   const ButtonsWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 60%;
//     justify-content: space-around;
//     margin-bottom:7rem;
//     @media screen and (max-width: 450px) {
//       margin-bottom:2rem;
//     }
//   `;

//   return (
//     <>
//       {/* <Container> */}
//         <WelcomeContainer>
//           {/* <img src="" alt=""/> */}
//           {/* <Layered> */}
//             {/* <FloatingImage1
//             src={IconLeft}
//             alt="Floating Image"
//           /> */}
//               {/* <WelcomeText>{t("text.welcome")}</WelcomeText>
//               <DescriptionText>{t("text.HeaderDescription")}</DescriptionText> */}
//               <ButtonsWrapper>
//                 {/* <Button>{t("text.explore")}</Button> */}
//                 <Button>{t("text.comingSoon")}</Button>
//               </ButtonsWrapper>

//             {/* <FloatingImage2
//             src={IconRight}
//             alt="Floating Image"
//           /> */}
//           {/* </Layered> */}
//         </WelcomeContainer>
//       {/* </Container> */}
//     </>
//   );
// };
