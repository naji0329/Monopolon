import React from 'react';
import { Trans } from "react-i18next";


interface WelcomeSectionProps {
  t?: any;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
  return (
    <>
      <div className='WelcomeSectionWrapper'>
        <h1><Trans i18nKey="Building Actual Wealth with Virtual Opulence"/></h1>
        <div className='welcome-button-group'>
          <div className='wel-button'><Trans i18nKey="Coming Soon"/></div>
          <div className='wel-button'><Trans i18nKey="Pre-Registration"/></div>
        </div>
      </div>
    </>
  );
};
