import React,{useState} from 'react';
import '../../css/components/HoroscopeDailyPage.css';
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { common } from '../../common/common';
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import SubscribeBanner from '../Banner/SubscribeBanner';
import AstSelect from '../Controls/AstSelect';
import { Link } from "react-router-dom";

export default function PlaneteryRemediesPage() {
    const { t } = useTranslation();
    const urlParam = useParams(); 
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('planetery')}  ${t('ka')} ${t('remedies')} - ${t(urlParam.planet)}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='planet-rotate'>                
            <img src={`/images/icons/${urlParam.planet}512.png`} alt={urlParam.planet} />
            </div>
            <div className='horo-heading planet-header'>
                {t('planetery')} {t('ka')} {t('remedies')} - {t(urlParam.planet)}
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
                <div className='col'>
                    <p>{t("chooseDifferentPlanet")}</p>
                    <ul>
                    <li><Link to="/planeteryRemedies/sun"><img src="/Images/icons/sun48.png" alt={t("sun")} /> {t("sun")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/moon"><img src="/Images/icons/moon48.png" alt={t("moon")} /> {t("moon")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/mercury"><img src="/Images/icons/mercury48.png" alt={t("mercury")} /> {t("mercury")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/jupiter"><img src="/Images/icons/jupiter48.png" alt={t("jupiter")} /> {t("jupiter")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/venus"><img src="/Images/icons/venus48.png" alt={t("venus")} /> {t("venus")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/saturn"><img src="/Images/icons/saturn48.png" alt={t("saturn")} /> {t("saturn")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/rahu"><img src="/Images/icons/rahu48.png" alt={t("rahu")} /> {t("rahu")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/ketu"><img src="/Images/icons/ketu48.png" alt={t("ketu")} /> {t("ketu")} {t("remedies")}</Link> </li>
                    <li><Link to="/planeteryRemedies/mars"><img src="/Images/icons/mars48.png" alt={t("mars")} /> {t("mars")} {t("remedies")}</Link> </li>
                </ul>
                    <div className='horo-list'>
                        <div className='horo-list-header'>
                            {t("more")} {t("horoscope")}
                        </div>
                        <ul>
                            <li className="daily">
                                <div>{t("daily")} {t("horoscope")}</div>
                                <div>{}</div>
                            </li>
                            {/* <li className={horoInterval === "weekly" ? "int-selected" : ""} onClick={e => handleChangeInterval("weekly")}>
                                <div>{t("weekly")} {t("horoscope")}</div>
                                <div>{common.getFullDate({ dateObj: common.getWeekDateRange().firstday, returnType: 'dm' })} {t("to")} {common.getFullDate({ dateObj: common.getWeekDateRange().lastday })}</div>
                            </li>
                            <li className={horoInterval === "monthly" ? "int-selected" : ""} onClick={e => handleChangeInterval("monthly")}>
                                <div>{t("monthly")} {t("horoscope")}</div>
                                <div>{t(common.getFullDate({ fullMonth: true, returnType: "m" }).toLowerCase())}, {common.getFullDate({ returnType: "y" })}</div>
                            </li>
                            <li className={horoInterval === "yearly" ? "int-selected" : ""} onClick={e => handleChangeInterval("yearly")}>
                                <div>{t("yearly")} {t("horoscope")}</div>
                                <div>{common.getFullDate({ returnType: "y" })}</div>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className='col'>
                    <AskQuestionBanner></AskQuestionBanner>
                    <SubscribeBanner></SubscribeBanner>
                </div>
            </div>
        </>
    )
}
