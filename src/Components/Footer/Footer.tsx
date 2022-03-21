import React from "react";
import styled from "styled-components";
import TwitterIcon from "../../assets/SocialIcons/twitter.png";
import DiscordIcon from "../../assets/SocialIcons/discord.png";
import TelegramIcon from "../../assets/SocialIcons/telegram.png";
import Git  from '../../assets/SocialIcons/git.svg'
import Logo from "../../assets/Logo/IMG_5601.png";
import MLogo from "../../assets/MLogo.png";

import facebook from "../../assets/facebook.png";
import tiktok from "../../assets/tiktok.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useTranslation } from "react-i18next";

interface FooterProps {
  t?: any;
}

const socialHandles = [
  {
    icon: TwitterIcon,
    name: "Twitter",
    url: "https://twitter.com/monopolondefi",
  },
  {
    icon: DiscordIcon,
    name: "Discord",
    url: "https://discord.com/invite/EEgVMFAsXY",
  },
  {
    icon: TelegramIcon,
    name: "Telegram",
    url: "https://t.me/Monopolon",
  },
  // {
  //   icon: Git,
  //   name: "Telegram",
  //   url: "https://discord.com/invite/EEgVMFAsXY",
  // },
];

const FooterContainer = styled.section`
  // background: linear-gradient(
  //     356deg,
  //     rgba(97, 39, 91, 1) 0%,
  //     rgba(9, 9, 121, 1) 50%,
  //     rgba(90, 62, 135, 1) 100%
  //   );
  background: rgb(22 21 34);
  color: white;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FooterDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 2rem;

  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;
const SocialIconsSection = styled.div`
  margin: 2rem 0;
  display: flex;
  @media screen and (max-width: 450px) {
    margin: 1rem 0;
  }
`;
const SocialIconsAnchor = styled.a`
  margin: 0.3rem;

  &:hover {
    filter: drop-shadow(0 0 4px black);
  }
`;
const SocialIcons = styled.img`
  width: 40px;
  height: auto;
  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 450px) {
    width: 25px;
  }
`;

const Discrption = styled.p`
   {
    display: flex;
  }
`;
interface NavbarProps {
  t?: any;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const { i18n } = useTranslation();
 
  return (
    <>
      <div className="contactMeWrapper">
        <div className="item_div">
          <p>Monopolondefi@gmail.com</p>
          <h1>Contact Us</h1>
        </div>
      </div>

      <div className="footerWrapper">
        <Row>
          <Col sm="12" md="6" className="left_div">
            <img src={MLogo} alt="Mlogo" className="Mlogo" />
            <p>Monopolon is the home of DeFi. Our community is building a comprehensive, decentralized trading platform for the future of finance. Join us!</p>

            <div className="social_links">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={tiktok} alt="" />
            </div>

            <span className="mt-4" >Copyright 2022</span>
          </Col>
          <Col sm="12" md="6" >
            <Row className="text-light contact_links">
              <Col xs="6" sm="3">
                <h3>ABOUT</h3>
                <p>About</p>
                <p>Terms</p>
                <p>Legal</p>
              </Col>
              <Col xs="6" sm="3">
                <h3>NFT</h3>
                <p>OpenSea</p>
                <p>Maker</p>
                <p>Learn</p>
              </Col>
              <Col xs="6" sm="3">
                <h3>Contact</h3>
                <p>Press</p>
                <p>Support</p>
              </Col>
              <Col xs="6" sm="3">
                <h3>Social</h3>
                <p>Twitter</p>
                <p>Instagram</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
