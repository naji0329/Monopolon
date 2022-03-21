import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import Slider from "react-slick";

import Team_layouttop from '../../assets/Team_layouttop.png';
import Team_layoutBottom from '../../assets/Team_layoutBottom.png';

import Bharat from '../../assets/Team/Bharat.png';
import Manfred from '../../assets/Team/Manfred.png';
import Kacy from '../../assets/Team/Kacy.png';


import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';


SwiperCore.use([Pagination, Autoplay, Navigation]);



interface HeroNFTsProps {
  t?: any;
}


export const OurTeam: React.FC<HeroNFTsProps> = ({ t }) => {


  const team = [
    {
      name: 'Manfred',
      image: Manfred,
      designation: 'CMO and CO-FOUNDER',
      intro: [
        'A crypto enthusiast that have past experiences with many projects tied-ups and collaborations',
        'Specialises in futuristic design and game concept',
      ]
    },
    {
      name: 'Kacy',
      image: Kacy,
      designation: 'CMO',
      intro: [
        'A well-experienced veteran in the crypto world involved in many Defi-related projects and have assisted with many Gamefi buildups.',
        'Specialises in gaming mechanics and gaming logic that attracts the market.',
      ]
    },
    {
      name: 'Bharat Gandass',
      designation: 'Marketing',
      image: Bharat,
      intro: [
        'Have more than 5 years experiences of doing marketing plans and strategies.',
        'With his network, they have been building great communities of MMO businesses.',
        'He believes in big marketing events that brings the best value to people and animal conservation.',
      ],
    },
    {
      name: 'Manfred',
      image: Manfred,
      designation: 'CMO and CO-FOUNDER',
      intro: [
        'A crypto enthusiast that have past experiences with many projects tied-ups and collaborations',
        'Specialises in futuristic design and game concept',
      ]
    },
    {
      name: 'Kacy',
      image: Kacy,
      designation: 'CMO',
      intro: [
        'A well-experienced veteran in the crypto world involved in many Defi-related projects and have assisted with many Gamefi buildups.',
        'Specialises in gaming mechanics and gaming logic that attracts the market.',
      ]
    },
    {
      name: 'Bharat Gandass',
      designation: 'Marketing',
      image: Bharat,
      intro: [
        'Have more than 5 years experiences of doing marketing plans and strategies.',
        'With his network, they have been building great communities of MMO businesses.',
        'He believes in big marketing events that brings the best value to people and animal conservation.',
      ],
    },
  ];

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
    <div className='OurTeamSectionWrapper' id="about-us">
      <img src={Team_layouttop} alt='' className='Team_layouttop'/>
      <img src={Team_layoutBottom} alt='' className='Team_layoutBottom'/>
      <div className='OurTeamSection'>
        <h1 className='OurTeamHeading'>Our Teams</h1>
        <div className='Items-Group'>
          <Slider {...settings_team}  className="slider-images mt-5">
            {team.map((member) => {
              return (
                <div className="team-card-item">
                  <img src={member.image} alt="" className="team-image" />
                  <p className='MemberName'>{member.name}</p>
                  <div><span className='MemberDesignation'>{member.designation}</span></div>
                  <div className='IntroListContainer'>
                      {member.intro.map((info) => {
                        return <p className='IntroList'> {info} </p>;
                      })}
                  </div>
                </div>
              );
            })}
          </Slider>
          </div>
      </div>
    </div>
    </>
  );
};
