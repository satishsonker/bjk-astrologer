import React from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";

export default function PlaneteryRemedies() {
    const { t } = useTranslation();
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <img alt='Vastu Banner' src='/images/PlanetRemedies.jpg'></img>
                <div className='ast-tag-line'>
                    {t("knowAboutPlaneteryRemedies")}
                </div></div>
            <div className='horo-yearly'>
                <ul>
                    <li><a href="/planeteryRemedies/sun">{t("sun")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/moon">{t("moon")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/mercury">{t("mercury")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/jupiter">{t("jupiter")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/venus">{t("venus")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/saturn">{t("saturn")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/rahu">{t("rahu")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/ketu">{t("ketu")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/mars">{t("mars")} {t("remedies")}</a> </li>
                </ul>
            </div>
        </div>
    )
}