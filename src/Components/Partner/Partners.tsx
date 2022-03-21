import React from "react";
import styled from "styled-components";
import { PartnersBackground, BSCscan } from "../../assets";
import Bscoin from "../../assets/Partners/BSCscan.png";
import Partner2 from "../../assets/Partners/bd78f19e7466c4e0311e1512cbfe48bc.png";
import Partner3 from "../../assets/Partners/final-01.png";
import Partner4 from "../../assets/Partners/full-logo-normal-mexc.png";
import { Col, Row, Container } from "react-bootstrap";

interface PartnersProps {
  t?: any;
}

const DocumentSectionContainer = styled.section`
  display: flex;
  max-height: 60vh;
`;

const PartnersBackgroundImage = styled.img`
  width: 100vw;
  height: auto;
`
const Content = styled.div`
  padding-top: 2rem;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width:450px){
    padding-top: 0.3rem;
  }
`

const PartnersWrapper = styled.div`
`
const PartnersContainer = styled.div`
margin-top: 1rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 768px){
    margin-top:0;
    padding-top: 0;
  }

  @media screen and (max-width:450px) {
    margin-top: 0;
    padding-top: 0;
  }

`
const PartnerName = styled.img`
  width: 20%;
  height: auto;

`

const PartnersHeading = styled.h1`
font-family:'Sarpanch', sans-serif;
font-weight: 800;
font-size: 4rem;
  color: #ffffff;

  @media screen and (min-width: 1441px){
    font-size: 3rem;
  }

  @media screen and (max-width:1440px){
    font-size: 2.6rem;
  }

  @media screen and (max-width:1024px){
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    text-align: center;
  }
  
`;

const TaglineContainer = styled.div`
position: relative;
  width: 100%;
  background: rgba(9, 84, 138, 0.83);
  backdrop-filter: blur(37px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;

  @media screen and (min-width: 1441px){
    padding: 2rem;
  }

  @media screen and (max-width:1440px){
    padding: 2rem;
  }

  @media screen and (max-width:1024px){
    padding: 1.8rem;
  }

  @media screen and (max-width: 768px){
    padding: 1.8rem;
  }

  @media screen and (max-width:450px){
    padding: 0.5rem;
  }
`
const Description = styled.p`
  font-family: 'Poppins', sans-serif;
  margin-top: 1rem;
  padding:0;
  font-size: 1.3rem;
  color: white;
  width: 50%;

  @media screen and (min-width:1441px) {
    font-size: 1rem;
  }

  @media screen and (max-width:1440px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width:1024px){
    width: 74%;
    font-size: 0.83rem;
  }

  @media screen and (max-width:450px){
    width: 90%;
    font-size: 0.7rem;
  }
`

export const Partners: React.FC<PartnersProps> = ({ t }) => {
  return (
    <>
      <div className="DocumentSectionContainer">
        <div className="Content">
          <h1 className="PartnersHeading">Partners</h1>
          <div className="PartnersWrapper">
            <img src={BSCscan} alt='' />
          </div>
        </div>
      </div>

      <div className="BlueSectionContainer">
        <div className="container">
          <h1>Turning Vitual Into Reolity</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
      </div>
    </>
    // <DocumentSectionContainer>
    //   <PartnersBackgroundImage src={PartnersBackground} alt="Partners" />
    //   <Content>
    //     <PartnersHeading>Partners</PartnersHeading>
    //     <PartnersWrapper>
    //       <PartnersContainer>
    //         <PartnerName src={BSCscan} alt="BSCscan" />
    //       </PartnersContainer>
    //       <TaglineContainer>
    //         <PartnersHeading>Turning Virtual Into Reaity</PartnersHeading>
    //         <Description>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    //         </Description>
    //       </TaglineContainer>
    //     </PartnersWrapper>
    //   </Content>
    // </DocumentSectionContainer>
  );
};
