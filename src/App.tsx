import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from "react-i18next";
import { withTrans } from './i18n/withTranslations';
import './App.css';
import './my.scss';
import Zoom from 'react-reveal/Zoom';
import MLON from './assets/mlon_token_transparent.png';
import {
  NavbarContainer,
  WelcomeSection,
  DescriptionSection,
  MlonSection,
  Roadmap,
  OurTeam,
  HeroNFTs,
  Footer,
  Partners,
  PreRegistration,
} from './Components';
import SplitText from './Components/SplitText';


// import { ComingSoon } from "./Components/ComingSoon/ComingSoon";

function App() {
  const { t, i18n } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <>
          <div className="App-loader-screen" />
          <div className="App-loader-container">
            <div>
              <img className="App-loader-image" src={MLON} alt="" />
              <h1 className="App-loader-text">
                <SplitText copy="Monopolon" role="heading" />
              </h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <NavbarContainer  />
          <WelcomeSection t={t} />
          <DescriptionSection t={t} />
          {/* <VideoSection t={t} /> */}
          <MlonSection t={t} />
          <HeroNFTs t={t} />
          <Roadmap t={t} />
          <OurTeam t={t} />
          <Partners t={t} />
          <PreRegistration t={t} />
          <Footer t={t} />
        </>
      )}
      {/* <ComingSoon/>  */}
      {/* <ComingSoon/> */}
    </div>
  );
}

export default withTrans(App);
// export default App;
