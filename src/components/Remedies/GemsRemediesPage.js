import React, { useState } from 'react';
import '../../css/components/HoroscopeDailyPage.css';
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import PlanetList from './PlanetList';
import GemsAndStoneList from './GemsAndStoneList';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function GemsRemediesPage() {
    const { t } = useTranslation();
    const urlParam = useParams();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('remedies')}`, link: "/Remedies" },
        { name: `${t('gemstones')}  ${t('ka')} ${t('remedies')} - ${t(urlParam.gems)}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='planet-rotate'>
                <LazyLoadImage src={`/images/icons/${urlParam.gems}256.png`} alt={urlParam.gems} />
            </div>
            <div className='horo-heading planet-header'>
                {t(urlParam.gems)} {t('ka')} {t('remedies')}
            </div>
            <div className='row row-cols row-cols-md-3 rem-page'>
                <div className='col rem-page-part1'>
                    <div className='hflex'>
                        <div className='h-zodiac'>
                            <LazyLoadImage src={`/images/icons/${urlParam.gems}256.png`} alt={urlParam.gems} />
                        </div>
                        <div className='h-zodiac-period'>
                            <div>{t(urlParam.gems)}</div>
                            <div></div>
                        </div>
                    </div>
                    <p className='hflex-para'>
                        Go ahead and indulge in your artistic self today. You can reorganise your home or workplace. Expenses are on the cards. If you have been longing for that expensive dressing table or a study table, buy it. Indulgence is okay sometimes.
                    </p>
                </div>
                <div className='col rem-page-part2'>
                    <div className='row row-cols-1 row-cols-md-1'>
                        <div className='col'>
                            <GemsAndStoneList option={{ displayHeader: true, headerText: `${t("gemstones")} ${t("remedies")}`, class: 'col planet-border' }}></GemsAndStoneList>
                        </div>
                        <div className='col'>
                            <PlanetList option={{ displayHeader: true, headerText: t("chooseDifferentPlanet"), class: 'col planet-border' }}></PlanetList>
                        </div>
                    </div>
                </div>
            </div>
            <AskQuestionBanner></AskQuestionBanner>
        </>
    )
}
