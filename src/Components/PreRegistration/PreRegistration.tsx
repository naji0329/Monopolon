import React from 'react';
import styled from 'styled-components';
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
        <img src={PreRegistrationButton} alt="" className='PreRegistrationButtonImage' />
        <img src={RightFrame} alt="" className='FrameImage' />
      </div>
    </div>
      {/* <PreRegistrationSection>
        <PreRegistrationBackgroundImage
          src={PreRegistrationBackground}
          alt="Pre Registration"
        />
        <PreRegistrationContainer>
          <FrameImage src={LeftFrame} alt="Left Frame" />
          <PreRegistrationButtonImage
            src={PreRegistrationButton}
            alt="Pre Registration"
          />
          <FrameImage src={RightFrame} alt=" Right Frame  " />
        </PreRegistrationContainer>
      </PreRegistrationSection> */}
    </>
  );
};
