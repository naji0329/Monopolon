import React from 'react';
import styled from 'styled-components';
import { Trans } from "react-i18next";
import {
  PreRegistrationBackground,
  PreRegistrationButton,
  LeftFrame,
  RightFrame,
} from '../../assets';

interface PreRegistrationProps {
  t?: any;
}

const PreRegistrationSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PreRegistrationBackgroundImage = styled.img`
  width: 99.2vw;
  height: auto;
`;
const PreRegistrationContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  padding: 2rem;
`;
const FrameImage = styled.img`
  width: 20%;
  height: auto;
`;
const PreRegistrationButtonImage = styled.img`
  width: 20%;
  height: auto;
`;

export const PreRegistration: React.FC<PreRegistrationProps> = ({ t }) => {
  return (
    <>
    <div className='PreRegistrationSection'>
      <div className='PreRegistrationBackgroundImage'>
        <img src={LeftFrame} alt="" className='FrameImage' />
        <div className='PreRegistrationButtonImage'>
          <Trans i18nKey="Pre-Registration"/>
        </div>
        <img src={RightFrame} alt="" className='FrameImage' />
      </div>
    </div>
    </>
  );
};
