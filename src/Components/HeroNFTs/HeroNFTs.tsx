import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import Slider from "react-slick";

import { Col, Container, Row } from 'react-bootstrap';
import Gif from '../../assets/NFTs/Eden Mask.gif';
import Sword from '../../assets/NFTs/Sword GIF.gif';
import Gun from '../../assets/NFTs/Bitcoin Gun GIF.gif';
// import Character2 from '../../assets/NFTs/characterII.png';
import Charactor1 from '../../assets/Charactor1.png';
import Charactor2 from '../../assets/Charactor2.png';
import Charactor3 from '../../assets/Charactor3.png';
import Dice from '../../assets/NFTs/dice.png';
import Dice2 from '../../assets/NFTs/dice2.jpg';
import Grid1 from '../../assets/NFTs/Grid1.jpg';
import Grid2 from '../../assets/NFTs/Grid_2.png';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import NftImage from '../NftImage/NftImage';
import styled from 'styled-components';
import { CollectionBackground, arrow_left, arrow_right } from '../../assets';

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
        <h1>Collections</h1>
        {/* <div className='Control-Image-Group'>
          <img src={arrow_left} alt='' className='Collection-Control slick-arrow slick-prev'/>
          <img src={arrow_right} alt='' className='Collection-Control slick-arrow slick-next'/>
        </div> */}
        <div className='Items-Group'>
          <Slider {...settings_team}  className="slider-images mt-5">
            <div className="Collection_item">
              <img src={Charactor1} alt='' />
              <p>Character1</p>
            </div>
            <div className="Collection_item">
              <img src={Charactor2} alt='' />
              <p>Character2</p>
            </div>
            <div className="Collection_item">
              <img src={Charactor3} alt='' />
              <p>Character3</p>
            </div>
            <div className="Collection_item">
              <img src={Charactor1} alt='' />
              <p>Character1</p>
            </div>
            <div className="Collection_item">
              <img src={Charactor2} alt='' />
              <p>Character2</p>
            </div>
            <div className="Collection_item">
              <img src={Charactor3} alt='' />
              <p>Character3</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
