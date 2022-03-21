import React from "react";
import styled from "styled-components";

interface DocumentSectionProps {
  t?: any;
}

const DocumentSectionContainer = styled.section`
  background-color: rgb(13, 4, 21);
  height: 400px;
  padding: 2rem 2rem;
`;
const DocumentHeading = styled.h1`
  font-size: 64px;
  font-weight: 800;
  // text-align: left;
  display: flex;
  justify-content: center;
  // margin-left: 1rem;
  // background: -webkit-linear-gradient(
  //     203deg,
  //     rgba(97, 39, 91, 1) 0%,
  //     rgba(9, 9, 121, 1) 50%,
  //     rgba(90, 62, 135, 1) 100%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: #ffffff;
  @media screen and (max-width: 450px) {
    font-size: 32px !important;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }
`;
export const DocumentSection: React.FC<DocumentSectionProps> = ({ t }) => {
  return (
    <div>
      <DocumentSectionContainer>
        <DocumentHeading> {t("text.document")} </DocumentHeading>
      </DocumentSectionContainer>
    </div>
  );
};
