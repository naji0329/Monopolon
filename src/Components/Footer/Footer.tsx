import React from "react";
import styled from "styled-components";
import TwitterIcon from "../../assets/SocialIcons/twitter.png";
import DiscordIcon from "../../assets/SocialIcons/discord.png";
import TelegramIcon from "../../assets/SocialIcons/telegram.png";
import Git from "../../assets/SocialIcons/git.svg";
import Logo from "../../assets/Logo/IMG_5601.png";
import MLogo from "../../assets/MLogo.png";

import facebook from "../../assets/facebook.png";
import tiktok from "../../assets/tiktok.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import reddit from "../../assets/reddit.png"
import medium from "../../assets/medium.png"
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { Trans } from "react-i18next";

interface FooterProps {
  t?: any;
}


export const Footer: React.FC<FooterProps> = ({ t }) => {

  return (
    <>
      <div className="contactMeWrapper">
        <div className="item_div">
          <p>contact@monopolon.io</p>
          <h1><Trans i18nKey="Contact Us"/></h1>
        </div>
      </div>

      <div className="footerWrapper">
        <Row>
          <Col sm="12" md="6" className="left_div">
            <img src={MLogo} alt="Mlogo" className="Mlogo" />
            <p><Trans i18nKey="Monopolon is the home of DeFi. Our community is building a comprehensive, decentralized trading platform for the future of finance. Join us!"/></p>

            <div className="social_links">
              <a href="https://discord.gg/wegGXKKXkW" target="_blank"><img src={DiscordIcon} alt="" /></a>
              <a href="https://twitter.com/monopolondefi" target="_blank"><img src={twitter} alt="" /></a>
              <a href="https://t.me/monopolon" target="_blank"><img src={TelegramIcon} alt="" /></a>
              <a href="https://www.reddit.com/r/monopolon" target="_blank"><img src={reddit} alt="" /></a>
              <a href="https://monopolon.medium.com/" target="_blank"><img src={medium} alt="" /></a>
              <a href="https://instagram.com/monopolondefi" target="_blank"><img src={instagram} alt="" /></a>
            </div>

            <span className="mt-4"><Trans i18nKey="Copyright"/> 2022</span>
          </Col>
          <Col sm="12" md="6">
            <Row className="text-light contact_links">
              <Col xs="6" sm="3">
                <h3><Trans i18nKey="ABOUT"/></h3>
                <p><Trans i18nKey="About"/></p>
                <p><Trans i18nKey="Terms"/></p>
                <p><Trans i18nKey="Legal"/></p>
              </Col>
              <Col xs="6" sm="3">
                <h3><Trans i18nKey="NFT"/></h3>
                <p><Trans i18nKey="OpenSea"/></p>
                <p><Trans i18nKey="Maker"/></p>
                <p><Trans i18nKey="Learn"/></p>
              </Col>
              <Col xs="6" sm="3">
                <h3><Trans i18nKey="Contact"/></h3>
                <p><Trans i18nKey="Press"/></p>
                <p><Trans i18nKey="Support"/></p>
              </Col>
              <Col xs="6" sm="3">
                <h3><Trans i18nKey="Social"/></h3>
                <p><Trans i18nKey="Twitter"/></p>
                <p><Trans i18nKey="Instagram"/></p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
