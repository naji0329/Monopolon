// import React, { Component, Suspense } from 'react';
import i18next from './config';
import { I18nextProvider, withTranslation } from 'react-i18next';

export function withTrans(WrappedComponent) {

  console.log( i18next, 'i18next');
  WrappedComponent = withTranslation()(WrappedComponent);

  const translations = ({ ...props }) => {
    return (
      <I18nextProvider i18n={i18next}>
        {/* <Suspense fallback={null}> */}
         <WrappedComponent {...props} language={i18next.language} />
        {/* </Suspense> */}
      </I18nextProvider>
    );
  }

  return translations;
}
