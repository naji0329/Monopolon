import React from "react";
import { BSCscan } from "../../assets";
import { Trans } from "react-i18next";

interface PartnersProps {
  t?: any;
}

export const Partners: React.FC<PartnersProps> = ({ t }) => {
  return (
    <>
      <div className="DocumentSectionContainer">
        <div className="Content">
          <h1 className="PartnersHeading"><Trans i18nKey="Partners"/></h1>
          <div className="PartnersWrapper">
            <img src={BSCscan} alt='' />
          </div>
        </div>
      </div>

      <div className="BlueSectionContainer">
        <div className="container">
          <h1><Trans i18nKey="Turning Vitual Into Reolity"/></h1>
          <p><Trans i18nKey="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/></p>
        </div>
      </div>
    </>
  );
};
