import React, { useState } from 'react';
import '../../css/components/HoroscopeDailyPage.css';
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import PlanetList from './PlanetList';
import RudrakshaList from './RudrakshaList';

export default function RudrakshaRemediesPage() {
    const { t } = useTranslation();
    const urlParam = useParams();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('remedies')}`, link: "/Remedies" },
        { name: `${t('rudraksh')}  ${t('ka')} ${t('remedies')} - ${t(urlParam.rudraksh)}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='planet-rotate'>
                <img src={`/images/icons/${urlParam.rudraksh}.png`} alt={urlParam.rudraksh} />
            </div>
            <div className='horo-heading planet-header'>
                {t(urlParam.rudraksh)} {t('ka')} {t('remedies')}
            </div>
            <div className='row row-cols row-cols-md-3 rem-page'>
                <div className='col rem-page-part1'>
                    <div className='hflex'>
                        <div className='h-zodiac'>
                            <img src={`/images/icons/${urlParam.rudraksh}.png`} alt={urlParam.rudraksh} />
                        </div>
                        <div className='h-zodiac-period'>
                            <div>{t(urlParam.rudraksh)}</div>
                            <div></div>
                        </div>
                    </div>
                    <p className='hflex-para'>
                        Go ahead and indulge in your artistic self today. You can reorganise your home or workplace. Expenses are on the cards. If you have been longing for that expensive dressing table or a study table, buy it. Indulgence is okay sometimes.
                    </p>
                </div>
                <div className='col rem-page-part2'>
                    <RudrakshaList option={{ displayHeader: true, headerText: `${t("rudraksh")} ${t("remedies")}`, class: 'col planet-border' }}></RudrakshaList>

                </div>
            </div>
            <AskQuestionBanner></AskQuestionBanner>
        </>
    )
}
