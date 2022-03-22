import React from 'react';
import { Trans } from "react-i18next";
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import Slider from "react-slick";

import Team_layouttop from '../../assets/Team_layouttop.png';
import Team_layoutBottom from '../../assets/Team_layoutBottom.png';

import Bharat from '../../assets/Team/Bharat.png';
import Manfred from '../../assets/Team/Manfred.png';
import Kacy from '../../assets/Team/Kacy.png';
import Andrei from '../../assets/Team/Andrei.jpeg';
import James from '../../assets/Team/James.jpeg';
import June from '../../assets/Team/June.jpeg';
import Bella from '../../assets/Team/Bella.jpeg';
import Ekam from '../../assets/Team/Ekam.jpeg';
import Young from '../../assets/Team/Young.jpeg';
import JF from '../../assets/Team/JF.jpeg';
import RQ from '../../assets/Team/RQ.jpeg';
import Mark from '../../assets/Team/Mark.jpeg';
import Belle from '../../assets/Team/Belle.jpeg';


import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';


SwiperCore.use([Pagination, Autoplay, Navigation]);



interface HeroNFTsProps {
  t?: any;
}


export const OurTeam: React.FC<HeroNFTsProps> = ({ t }) => {

  const teamImage = {
    borderRadius: "50%",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
    padding: "3px",
    width: "100px",
    height: "100px"
  };
  const team = [
    {
      name: 'Manfred',
      image: Manfred,
      designation: 'CEO & CO-FOUNDER',
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
      designation: 'Advisor',
      image: Bharat,
      intro: [
        'Have more than 5 years experiences of doing marketing plans and strategies.',
        'With his network, they have been building great communities of MMO businesses.',
        'He believes in big marketing events that brings the best value to people and animal conservation.',
      ],
    },
    {
      name: 'Andrei',
      image: Andrei,
      designation: 'CTO',
      intro: [
        'Well-versed in building products iin the fields of big data analytics and smart contract development',
        'Responsibl for the general development and direction of the project.',
      ]
    },
    {
      name: 'James',
      image: James,
      designation: 'Asia-Pacific CTO',
      intro: [
        'Assisted with different blockchain development like Ethereum, Solana, BSC, Cronos',
        'Strongly believe Gamefi and NFT is the next 10 year trend and have thus onboard monopolon.',
      ]
    },
    {
      name: 'June',
      designation: 'Social Media Manager',
      image: June,
      intro: [
        '',
      ],
    },
    {
      name: 'Bella',
      designation: 'Business Development',
      image: Bella,
      intro: [
        '',
      ],
    },
    {
      name: 'Ekam',
      designation: '3D Animator',
      image: Ekam,
      intro: [
        '',
      ],
    },
    {
      name: 'Young',
      designation: 'Marketing Manager',
      image: Young,
      intro: [
        '',
      ],
    },
    {
      name: 'J.F',
      designation: 'Marketing Manager',
      image: JF,
      intro: [
        '',
      ],
    },
    {
      name: 'R.Q',
      designation: 'Marketing Manager',
      image: RQ,
      intro: [
        '',
      ],
    },
    {
      name: 'Mark',
      designation: 'Marketing Director',
      image: Mark,
      intro: [
        '',
      ],
    },
    {
      name: 'Belle',
      designation: 'Marketing Manager',
      image: Belle,
      intro: [
        '',
      ],
    }
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
        <h1 className='OurTeamHeading'><Trans i18nKey="Our Teams"/></h1>
        <div className='Items-Group'>
          <Slider {...settings_team}  className="slider-images mt-5">
            {team.map((member) => {
              return (
                <div className="team-card-item">
                  <img src={member.image} alt="" className="team-image" style={teamImage} />
                  <p className='MemberName'><Trans i18nKey={member.name}/></p>
                  <div><span className='MemberDesignation'><Trans i18nKey={member.designation}/></span></div>
                  <div className='IntroListContainer'>
                      {member.intro.map((info) => {
                        return <p className='IntroList'> <Trans i18nKey={info}/></p>;
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
