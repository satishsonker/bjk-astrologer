import React, { useState } from 'react'
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import '../../css/components/HoroscopeDailyPage.css';
import { useParams } from "react-router-dom";
import AstSelect from '../Controls/AstSelect';
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import SubscribeBanner from '../Banner/SubscribeBanner';

export default function () {
    const { t } = useTranslation();

    const handleOnChange = () => {

    }
    const [zodiacSelection, setZodiacSelection] = useState("");
    const zodiacList = [
        { id: "aries", value: t("aries") },
        { id: "taurus", value: t("taurus") },
        { id: "gemini", value: t("gemini") },
        { id: "cancer", value: t("cancer") },
        { id: "leo", value: t("leo") },
        { id: "virgo", value: t("virgo") },
        { id: "libra", value: t("libra") },
        { id: "scorpio", value: t("scorpio") },
        { id: "sagittarius", value: t("sagittarius") },
        { id: "capricorn", value: t("capricorn") },
        { id: "aquarius", value: t("aquarius") },
        { id: "pisces", value: t("pisces") }];
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
    const urlParam = useParams();
    console.log(urlParam.zodiac);
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
                </div>
                <div className='col'>
                    <AskQuestionBanner></AskQuestionBanner>
                    <SubscribeBanner></SubscribeBanner>
                </div>
            </div>
        </>
    )
}
