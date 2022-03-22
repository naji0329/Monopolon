import React from 'react';
import {MlonTokenImage} from "../../assets";
import { Trans } from "react-i18next";


interface MlonProps {
  t?:any;
}

export const MlonSection: React.FC<MlonProps> = () => {
  return (
    <>
    <div className='MlonSectionWrapper'>
      <div className='MlonContainer'>
        <img src={MlonTokenImage} alt='' className='MlonToken' />
        <div className='TokenInfoWrapper'>
          <h1 className='MlonHeading'><Trans i18nKey="MLON"/></h1>
          <p className='MlonDescription'><Trans i18nKey="In Monopolon, we turn your childhood dream of becoming a millionaire come true. Dive into our metaverse to farm high rewards, go on quests, and party together to fight powerful bosses. Be a lord and own it all to convert your wealth from Defi into reality."/></p>
        </div>
      </div>
    </div>
    </>
  )

}