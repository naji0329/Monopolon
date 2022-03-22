import React from 'react';
import Slider from "react-slick";

import Charactor1 from '../../assets/Charactor1.png';
import Charactor2 from '../../assets/Charactor2.png';
import Charactor3 from '../../assets/Charactor3.png';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import { Trans } from "react-i18next";

SwiperCore.use([Pagination, Autoplay, Navigation]);



interface HeroNFTsProps {
  t?: any;
}


export const HeroNFTs: React.FC<HeroNFTsProps> = ({ t }) => {

  const settings_team = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1207,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };
  

  return (
    <>
      <div className='CollectionWrapper'>
        <h1><Trans i18nKey="Collections"/></h1>
        <div className='Items-Group'>
          <Slider {...settings_team}  className="slider-images mt-5">
            <div className="Collection_item">
              <img src={Charactor1} alt='' />
              <p><Trans i18nKey="Futuristic Tome of Social"/></p>
            </div>
            <div className="Collection_item">
              <img src={Charactor2} alt='' />
              <p><Trans i18nKey="Flash Dragon Sword"/></p>
            </div>
            <div className="Collection_item">
              <img src={Charactor3} alt='' />
              <p><Trans i18nKey="Rocket of Trollheim"/></p>
            </div>
            <div className="Collection_item">
              <img src={Charactor1} alt='' />
              <p><Trans i18nKey="Futuristic Tome of Social"/></p>
            </div>
            <div className="Collection_item">
              <img src={Charactor2} alt='' />
              <p><Trans i18nKey="Flash Dragon Sword"/></p>
            </div>
            <div className="Collection_item">
              <img src={Charactor3} alt='' />
              <p><Trans i18nKey="Rocket of Trollheim"/></p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
