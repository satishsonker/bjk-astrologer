import React, { useState } from 'react';
import '../../css/components/HoroscopeDailyPage.css';
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import SubscribeBanner from '../Banner/SubscribeBanner';
import PlanetList from './PlanetList';

export default function PlaneteryRemediesPage() {
    const { t } = useTranslation();
    const urlParam = useParams();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('remedies')}`, link: "/Remedies" },
        { name: `${t('planetery')}  ${t('ka')} ${t('remedies')} - ${t(urlParam.planet)}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='planet-rotate'>
                <img src={`/images/icons/${urlParam.planet}512.png`} alt={urlParam.planet} />
            </div>
            <div className='horo-heading planet-header'>
                {t(urlParam.planet)} {t('planet')} {t('ka')} {t('remedies')}
            </div>
            <div className='row row-cols-1 row-cols-md-3 horoPage'>
                <div className='col'>
                    <div className='hflex'>
                        <div className='h-zodiac'>
                            <img src={`/images/icons/${urlParam.planet}512.png`} alt={urlParam.planet} />
                        </div>
                        <div className='h-zodiac-period'>
                            <div>{t(urlParam.planet)}</div>
                            <div></div>
                        </div>
                    </div>
                    <p className='hflex-para'>
                        Go ahead and indulge in your artistic self today. You can reorganise your home or workplace. Expenses are on the cards. If you have been longing for that expensive dressing table or a study table, buy it. Indulgence is okay sometimes.
                    </p>
                </div>
                <PlanetList option={{displayHeader:true, headerText:t("chooseDifferentPlanet"),class:'col planet-border'}}></PlanetList>               
                <div className='col'>
                    <AskQuestionBanner></AskQuestionBanner>
                    <SubscribeBanner></SubscribeBanner>
                </div>
            </div>
        </>
    )
}
