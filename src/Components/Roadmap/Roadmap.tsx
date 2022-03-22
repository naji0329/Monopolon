import React from 'react';
import styled from 'styled-components';
import { RoadmapBackground, RoadmapDesktop, RoadmapMobile, Frame_line } from '../../assets';
import '../../App.css';
import './style.css';
import Progress from '../../assets/in-progress.png';
import InQueue from '../../assets/In-queue.png';
import Completed from '../../assets/Completed.png';
import Fade from 'react-reveal/Fade';
import { Trans } from "react-i18next";

interface RoadmapProps {
  t?: any;
}

const RoadmapContainer = styled.section`
  display: flex;
//   margin-top: -100px;
//   z-index: 99999;
//   margin-bottom: -10px;
  @media screen and (min-width: 1900px) {
    max-height: 90vh;
  }
`;
const RoadmapBackgroundImage = styled.img`
  width: 99vw;
  height: auto;
`;

const RoadmapSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Sarpanch', sans-serif;
  margin-top: 2rem;
  flex-direction: column;
  color: white;
`;
const RoadmapHeading = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  // text-align: left;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1920px) {
    margin-top: 2rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    text-align: center;
  }
`;
const RoadmapImage = styled.img`
  width: 60%;
  height: auto;
  @media screen and (min-width: 1920px) {
    width: 40%;
  }
  @media screen and (max-width: 500px) {
    width: 60%;
  }
`;
const CommunitySpan = styled.span`
  align-items: center;
`;
const TickImage = styled.img`
  width: 40px;
  height: 40px;

  @media screen and (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`;

export const Roadmap: React.FC<RoadmapProps> = ({ t }) => {
  return (
    <>
    <div className='RoadmapContainer'>
        <img src={Frame_line} alt="" className='Frame_line' />
        <h1><Trans i18nKey="Roadmap"/></h1>
        <div className='RoadmapItems pc'>
            <div className='left'>
                <div className='itemDiv'>
                    <div className='leftline'></div>
                    <div className='RoadmapItem1'>
                        <p className='title'>MAR 2022</p>
                        <span className='comment'>
                            • <Trans i18nKey="More Teaser & Previews to be launched"/> <br/>
                            • <Trans i18nKey="Onboarding of Influencers"/> <br/>
                            • <Trans i18nKey="Increasing Media PR on Details of Monopolon and Its Gamification"/> <br/>
                            • <Trans i18nKey="Email and Video Marketing"/> <br/>
                            • <Trans i18nKey="Liasing for Strategic Partnership"/> <br/>
                            • <Trans i18nKey="Airdrops, Bounty & Contests"/> <br/>
                        </span>
                    </div>
                    <div className='line'></div>
                </div>
                <div className='itemDiv'>
                    <div className='leftline'></div>
                    <div className='RoadmapItem1'>
                        <p className='title'>MAY 2022</p>
                        <span className='comment'>
                            • <Trans i18nKey="Official Launch of Monopolon"/> <br/>
                            • <Trans i18nKey="Launch of P2P Marketplace"/> <br/>
                            • <Trans i18nKey="Listing of MGM on PancakeSwap"/> <br/>
                            • <Trans i18nKey="High Yield Farming with Gamification (Dice Roll)"/> <br/>
                            • <Trans i18nKey="PR Blasting on Monopolon launch"/> <br/>
                            • <Trans i18nKey="Enhance Influencer Marketing & Advertising"/>
                        </span>
                    </div>
                    <div className='line'></div>
                </div>
            </div>
            <div className='right'>
                <div className='itemDiv'>
                    <div className='line leftline'></div>
                    <div className='RoadmapItem1'>
                        <p className='title'>APR 2022</p>
                        <span className='comment'>
                            • <Trans i18nKey="Beta Testing of Monopolon"/> <br/>
                            • <Trans i18nKey="More Previews Towards Coming Launch"/> <br/>
                            • <Trans i18nKey="Public Pre-Sales for Market Outreach (IDO Platform)"/>
                        </span>
                    </div>
                </div>
                <div className='itemDiv'>
                    <div className='line leftline'></div>
                    <div className='RoadmapItem1'>
                        <p className='title'>JUN 2022</p>
                        <span className='comment'>
                            • <Trans i18nKey="Collaboration AMA Sessions"/> <br/>
                            • <Trans i18nKey="Increased Influencer Marketing Strategies"/> <br/>
                            • <Trans i18nKey="SEM on Crypto and Defi related sites"/> <br/>
                            • <Trans i18nKey="More Airdrops and Contests events"/>
                        </span>
                    </div>
                </div>
            </div>


        </div>
        <div className='RoadmapItems mb'>
            <div className='itemDiv'>
                <div className='leftline'></div>
                <div className='RoadmapItem1'>
                    <p className='title'>MAR 2022</p>
                    <span className='comment'>
                        • <Trans i18nKey="More Teaser & Previews to be launched"/> <br/>
                        • <Trans i18nKey="Onboarding of Influencers"/> <br/>
                        • <Trans i18nKey="Increasing Media PR on Details of Monopolon and Its Gamification"/> <br/>
                        • <Trans i18nKey="Email and Video Marketing"/> <br/>
                        • <Trans i18nKey="Liasing for Strategic Partnership"/> <br/>
                        • <Trans i18nKey="Airdrops, Bounty & Contests"/> <br/>
                    </span>
                </div>
            </div>
            <div className='itemDiv'>
                <div className='leftline'></div>
                <div className='RoadmapItem1'>
                    <p className='title'>APR 2022</p>
                    <span className='comment'>
                        • <Trans i18nKey="Beta Testing of Monopolon"/> <br/>
                        • <Trans i18nKey="More Previews Towards Coming Launch"/> <br/>
                        • <Trans i18nKey="Public Pre-Sales for Market Outreach (IDO Platform)"/>
                    </span>
                </div>
            </div>
            <div className='itemDiv'>
                <div className='leftline'></div>
                <div className='RoadmapItem1'>
                    <p className='title'>MAY 2022</p>
                    <span className='comment'>
                        • <Trans i18nKey="Official Launch of Monopolon"/> <br/>
                        • <Trans i18nKey="Launch of P2P Marketplace"/> <br/>
                        • <Trans i18nKey="Listing of MGM on PancakeSwap"/> <br/>
                        • <Trans i18nKey="High Yield Farming with Gamification (Dice Roll)"/> <br/>
                        • <Trans i18nKey="PR Blasting on Monopolon launch"/> <br/>
                        • <Trans i18nKey="Enhance Influencer Marketing & Advertising"/>

                    </span>
                </div>
            </div>
            <div className='itemDiv'>
                <div className='leftline'></div>
                <div className='RoadmapItem1'>
                    <p className='title'>JUN 2022</p>
                    <span className='comment'>
                        • <Trans i18nKey="Collaboration AMA Sessions"/> <br/>
                        • <Trans i18nKey="Increased Influencer Marketing Strategies"/> <br/>
                        • <Trans i18nKey="SEM on Crypto and Defi related sites"/> <br/>
                        • <Trans i18nKey="More Airdrops and Contests events"/>
                    </span>
                </div>
            </div>


        </div>
    </div>
      {/* <RoadmapContainer id="roadmap">
        <RoadmapBackgroundImage src={RoadmapBackground} alt="Roadmap" />
        <RoadmapSection>
          <RoadmapHeading> {t('text.roadmap')} </RoadmapHeading>
          <RoadmapImage
            src={window.screen.width <= 500 ? RoadmapMobile : RoadmapDesktop}
          />
        </RoadmapSection>
      </RoadmapContainer> */}
    </>
  );
};
