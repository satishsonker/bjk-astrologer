import React, { useState } from 'react'
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import '../../css/components/HoroscopeDailyPage.css';
import { useParams } from "react-router-dom";
import AstSelect from '../Controls/AstSelect';
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import SubscribeBanner from '../Banner/SubscribeBanner';
import { useNavigate } from "react-router-dom";
export default function () {
    const { t } = useTranslation();
    const urlParam = useParams();
    let navigate = useNavigate();
    const handleOnChange = (e) => {
        setZodiacSelection(e.target.value);
        navigate(`/horoscope/daily/${e.target.value.split("|")[0]}/${e.target.value.split("|")[1]}`);
    }
    const [zodiacSelection, setZodiacSelection] = useState("");
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
        { name: `${t('daily')} ${t('horoscope')} - ${t(urlParam.zodiac)}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='horo-heading my-3'>
                {t('daily')} {t('horoscope')} - {t(urlParam.zodiac)}
            </div>
            <div className='row row-cols-1 row-cols-md-3 horoPage'>
                <div className='col'>
                    <div className='hflex'>
                        <div className='h-zodiac'>
                            <img src={`/images/ZodiacSign/${urlParam.zodiac}.png`} />
                        </div>
                        <div className='h-zodiac-period'>
                            <div>{t(urlParam.zodiac)}</div>
                            <div>{t(urlParam.period.replace(/\./g, "/"))}</div>
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
                            <li>{t("daily")} {t("horoscope")}</li>
                            <li>{t("weekly")} {t("horoscope")}</li>
                            <li>{t("monthly")} {t("horoscope")}</li>
                            <li>{t("yearly")} {t("horoscope")}</li>
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
