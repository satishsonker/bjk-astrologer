import React from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PlanetList from './PlanetList';
import '../../css/components/Remedies/Remedies.css'

export default function PlaneteryRemedies() {
    const { t } = useTranslation();
    return (
        <div className='remedy-box'>
            <Link to="/Remedies">
                <div className='remedy-box-header'>
                    <img alt='Vastu Banner' src='/images/PlanetRemedies.jpg'></img>
                    <div className='ast-tag-line'>
                        {t("knowAboutPlaneteryRemedies")}
                    </div>
                </div>
            </Link>
            <PlanetList option={{ displayHeader: false, class: 'horo-yearly',showScroll:false,height:'428px' }}></PlanetList>
        </div>
    )
}