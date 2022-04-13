import React, { useState, useEffect } from 'react'
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import '../../css/components/HoroscopeDailyPage.css';
import { useParams } from "react-router-dom";
import AstSelect from '../Controls/AstSelect';
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import SubscribeBanner from '../Banner/SubscribeBanner';
import { useNavigate } from "react-router-dom";
import HoroscopeDaily from './HoroscopeDaily';
import { common } from '../../common/common';
export default function () {
    const { t } = useTranslation();
    const urlParam = useParams();
    const [horoInterval, setHoroInterval] = useState(urlParam.interval);
    useEffect(() => {
        setHoroInterval(urlParam.interval);
    }, [urlParam]);

    let navigate = useNavigate();
    const handleOnChange = (e) => {
        setZodiacSelection(e.target.value === "" ? "aries|21.3-19.4" : e.target.value.split("|")[0]);
        let z = e.target.value.split("|")[0] === undefined ? urlParam.zodiac : e.target.value.split("|")[0];
        let per = e.target.value.split("|")[1] === undefined ? urlParam.interval : e.target.value.split("|")[1];
        navigate(`/horoscope/${horoInterval}/${z}/${per}`);
    }
    const handleChangeInterval = (e) => {
        setHoroInterval(e);
        navigate(`/horoscope/${e}/${zodiacSelection.split("|")[0]}/${zodiacSelection.split("|")[1]}`);
    }
    const [zodiacSelection, setZodiacSelection] = useState("aries|21.3-19.4");
    const zodiacList = [
        { id: "aries|21.3-19.4", value: t("aries") },
        { id: "taurus|20.4-20.5", value: t("taurus") },
        { id: "gemini|21.5-20.6", value: t("gemini") },
        { id: "cancer|21.6-22.7", value: t("cancer") },
        { id: "leo|23.7-22.8", value: t("leo") },
        { id: "virgo|23.8-22.9", value: t("virgo") },
        { id: "libra|23.9-22.10", value: t("libra") },
        { id: "scorpio|23.10-21.11", value: t("scorpio") },
        { id: "sagittarius|22.11-21.12", value: t("sagittarius") },
        { id: "capricorn|22.12-19.1", value: t("capricorn") },
        { id: "aquarius|20.1-18.2", value: t("aquarius") },
        { id: "pisces|19.2-20.3", value: t("pisces") }];
    const selectOption = {
        onChange: handleOnChange,
        id: 'ddlZodic',
        name: 'zodicSign',
        width: '100%',
        defaultText: `${t("select", { word: t('zodiac') })}`,
        className: 'me-2 mb-2',
        value: zodiacSelection,
        data: zodiacList,
        hasValidation: true,
        showLabel: false,
        showHelpText: false,
    }
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t(urlParam.interval)} ${t('horoscope')} - ${t(urlParam.zodiac)}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <HoroscopeDaily showHeader={false} interval={horoInterval} horoName={urlParam.zodiac}></HoroscopeDaily>
            <div className='horo-heading my-3'>
                {t(urlParam.interval)} {t('horoscope')} - {t(urlParam.zodiac)}
            </div>
            <div className='row row-cols-1 row-cols-md-3 horoPage'>
                <div className='col'>
                    <div className='hflex'>
                        <div className='h-zodiac'>
                            <img src={`/images/ZodiacSign/${urlParam.zodiac}.png`} />
                        </div>
                        <div className='h-zodiac-period'>
                            <div>{t(urlParam.zodiac)}</div>
                            <div>{common.formatDayMonth(urlParam.period.replace(/\./g, "/"))[0]}-{t(common.formatDayMonth(urlParam.period.replace(/\./g, "/"))[1])} {t("to")} {common.formatDayMonth(urlParam.period.replace(/\./g, "/"))[2]}-{t(common.formatDayMonth(urlParam.period.replace(/\./g, "/"))[3])}</div>
                        </div>
                    </div>
                    <p className='hflex-para'>
                        Go ahead and indulge in your artistic self today. You can reorganise your home or workplace. Expenses are on the cards. If you have been longing for that expensive dressing table or a study table, buy it. Indulgence is okay sometimes.
                    </p>
                </div>
                <div className='col'>
                    <p>{t("chooseDifferentZodiacSign")}</p>
                    <AstSelect option={selectOption}></AstSelect>
                    <div className='horo-list'>
                        <div className='horo-list-header'>
                            {t("more")} {t("horoscope")}
                        </div>
                        <ul>
                            <li className={horoInterval === "daily" ? "int-selected" : ""} onClick={e => handleChangeInterval("daily")}>
                                <div>{t("daily")} {t("horoscope")}</div>
                                <div>{common.getFullDate()}</div>
                            </li>
                            <li className={horoInterval === "weekly" ? "int-selected" : ""} onClick={e => handleChangeInterval("weekly")}>
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
                            </li>
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
