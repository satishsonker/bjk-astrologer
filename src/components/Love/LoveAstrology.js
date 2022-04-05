import React from 'react'
import '../../css/components/HoroscopeDaily.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LoveAstrology() {
    const { t } = useTranslation();
    return (
        <div className='kun-box'>
            <Link to="/love">
                <div className='kun-box-header'>
                    <img src='/images/love-banner.png'></img>
                    <div className='ast-tag-line'>
                        {t("love")}  {t("related")}  {t("solutions")}
                    </div>
                </div>
            </Link>
            <div className='horo-yearly'>
                <ul>
                    <li><a href="/love/love-compatibility.aspx">{t("love")} {t("compatibility")}</a> </li>
                    <li><a href="/love/lovesutra.aspx">{t("love")} {t("sutra")}</a> </li>
                    <li><a href="/love/soulmate.aspx">{t("soulmate")}</a> </li>
                    <li><a href="/tarot/love-tarot-reading">{t("love")} {t("tarot")}</a> </li>
                    <li><a href="/horoscopes/love-horoscope.aspx">{t("love")} {t("horoscope")}</a> </li>
                    <li className="borderNone"><a href="/astrology/love.aspx">{t("love")} {t("profile")}</a> </li>
                </ul>
            </div>
        </div>
    )
}
