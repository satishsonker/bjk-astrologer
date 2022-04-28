import React from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PlanetList from './PlanetList';
import '../../css/components/Remedies/Remedies.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PlaneteryRemedies() {
    const { t } = useTranslation();
    return (
        <div className='remedy-box'>
            <Link to="/Remedies">
                <div className='remedy-box-header'>
                    <LazyLoadImage alt='Vastu Banner' src='/images/PlanetRemedies.jpg'></LazyLoadImage>
                    <div className='ast-tag-line'>
                        {t("knowAboutPlaneteryRemedies")}
                    </div>
                </div>
            </Link>
            <PlanetList option={{ displayHeader: false, class: 'horo-yearly',showScroll:false,height:'428px' }}></PlanetList>
        </div>
    )
}