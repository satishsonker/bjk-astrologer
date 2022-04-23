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
                    <li><a href="/planeteryRemedies/sun"><img src="/Images/icons/sun48.png" alt={t("sun")} /> {t("sun")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/moon"><img src="/Images/icons/moon48.png" alt={t("moon")} /> {t("moon")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/mercury"><img src="/Images/icons/mercury48.png" alt={t("mercury")} /> {t("mercury")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/jupiter"><img src="/Images/icons/jupiter48.png" alt={t("jupiter")} /> {t("jupiter")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/venus"><img src="/Images/icons/venus48.png" alt={t("venus")} /> {t("venus")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/saturn"><img src="/Images/icons/saturn48.png" alt={t("saturn")} /> {t("saturn")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/rahu"><img src="/Images/icons/rahu48.png" alt={t("rahu")} /> {t("rahu")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/ketu"><img src="/Images/icons/ketu48.png" alt={t("ketu")} /> {t("ketu")} {t("remedies")}</a> </li>
                    <li><a href="/planeteryRemedies/mars"><img src="/Images/icons/mars48.png" alt={t("mars")} /> {t("mars")} {t("remedies")}</a> </li>
                </ul>
            </div>
        </div>
    )
}