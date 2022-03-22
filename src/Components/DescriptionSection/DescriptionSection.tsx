import React from 'react';
import {  Group_arrow, Frame_5 } from "../../assets";
import { Trans } from "react-i18next";

interface DescriptionSectionProps {
    t?: any;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ t }) => {
    return (
        <>
            <div className="DesciptionSectionWrapper">
                <div className="Group_arrow" >
                    <img src={Group_arrow} alt=""/>
                </div>
                <div className='DescriptionContainer'>
                    <h1 className='DescriptionHeading'>
                        <Trans i18nKey="Turning Virtual Into Reality"/>
                    </h1>
                    <p className='DescriptionContent'>
                        <Trans i18nKey="In Monopolon, we turn your childhood dream of becoming a millionaire come true. Dive into our metaverse to farm high rewards, go on quests, and party together to fight powerful bosses. Be a lord and own it all to convert your wealth from Defi into reality."/>
                    </p>
                </div>
                <div className="Frame_5" >
                    <img src={Frame_5} alt="" />
                </div>
            </div>
        </>
    )
}