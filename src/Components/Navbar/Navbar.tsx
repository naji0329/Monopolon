import React from 'react';
import {MLogo, Star } from '../../assets';
import { useTranslation, Trans } from "react-i18next";

interface NavbarContainerProps {
  t?: any;
}

const navitems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Roadmap',
    url: '#roadmap',
  },
  {
    title: 'Document',
    url: '#document',
  },
  {
    title: 'About us',
    url: '#about-us',
  },
];

export const NavbarContainer: React.FC<NavbarContainerProps> = ( ) => {

  const { i18n } = useTranslation();
  
  function changeLanguage(e: React.FormEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.currentTarget.value)
  }

  return (
    <>
      <div className='NavbarWrapper'>
        <div className='LogoContainer'>
          <img src={MLogo} alt="" className='Logo' />
        </div>
        <div className='NavItemsWrapper'>
          <img src={Star} alt="" className="StarImage" />
          {navitems.map((items, index) => {
            return (
              
              <>
                {' '}
                <div className='Navitem'>
                  
                  <a href={items.url}> <Trans i18nKey={items.title}/> </a>
                </div>
                &nbsp;&nbsp; <img src={Star} alt="" className="StarImage" />
              </>
            );
          })}
          
          <div className='Navitem'>
            <select onChange={changeLanguage} className="select">
              <option value="en">English</option>
              <option value="cn">Chinese</option>
              <option value="ko">Korean</option>
              <option value="jp">Japanese</option>
              <option value="th">Thai</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
