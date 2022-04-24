import React from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PlanetList from './PlanetList';

export default function PlaneteryRemedies() {
    const { t } = useTranslation();
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <img alt='Vastu Banner' src='/images/PlanetRemedies.jpg'></img>
                <div className='ast-tag-line'>
                    {t("knowAboutPlaneteryRemedies")}
                </div></div>
            <PlanetList option={{ displayHeader: false, class: 'horo-yearly' }}></PlanetList>
        </div>
    )
}