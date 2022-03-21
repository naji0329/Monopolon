/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import '../../App.css'
import World from '../../assets/world.jpg'
import Video from "../../assets/MLON-Video/Monopolon.mp4"

interface VideoSectionProps {
  t?: any;
}

const VideoSectionContainer = styled.section`
  // background-color: rgb(13, 4, 21);
  // height: 400px;
  padding: 2rem;
`;

const VideoHeading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  text-align: left;
  // margin-left: 1rem;
  //   background: -webkit-linear-gradient(
  //     203deg,
  //     rgba(97, 39, 91, 1) 0%,
  //     rgba(9, 9, 121, 1) 50%,
  //     rgba(90, 62, 135, 1) 100%
  //   );
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  color: #ffffff;
  @media screen and (max-width: 450px) {
    font-size: 2.7rem;
    text-align: center;
  }
`;

export const VideoSection: React.FC<VideoSectionProps> = ({ t }) => {
  return (
    // <div>
    //   <VideoSectionContainer>
    //     <VideoHeading> {t("text.video")} </VideoHeading>
    //     <Row>
    //       <Col>
    //         <div></div>
    //       </Col>
    //       <Col>
    //         <div></div>
    //       </Col>
    //     </Row>
    //   </VideoSectionContainer>
    // </div>
    <div className="reward_section py-5">
      <VideoSectionContainer>
        <Row className="align-items-center justify-content-center">
          <Col lg="6" md="12">
            <div className="reward_heading mt-3">
              <h2 className="">Turning Virtual Into Reality </h2>
              <p style={{ border: 'none' }}>
                In Monopolon, we turn your childhood dream of becoming a
                millionaire come true. Dive into our metaverse to farm high
                rewards, go on quests, and party together to fight powerful
                bosses. Be a lord and own it all to convert your wealth from
                Defi into reality
              </p>
              {/* <p>{t("home.earn_rewards")}</p> */}
            </div>
          </Col>
          <Col lg="6" md="12">
            <div
              className="video_intro"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
            {/* <iframe src="https://drive.google.com/file/d/1W2VVbyw6bIkHu_AwDl-Zpc5yKO2sR7VY/preview" width="640" height="480" allow="autoplay"></iframe> */}
              {/* <video loop  autoPlay muted controls style={{ width: "100%", height: "100%" }} >
                <source src={Video} />
              </video> */}
              <iframe className="video-frame" src="https://drive.google.com/file/d/1-SecNxNTgym9ark3uDrLxnXFyKH45RJ0/preview" allow="autoplay"></iframe>
              {/* <img style={{ width: "100%", height: "3 50px" }} src={World} alt="" /> */}
            </div>
          </Col>
        </Row>
      </VideoSectionContainer>
    </div>
  );
};
