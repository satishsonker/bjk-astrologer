import React from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
;
export default function HoroscopeYearly() { 
    const { t } = useTranslation();
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <img src='/images/janamkundali.jpg'></img>
                <div className='ast-tag-line'>
                    {t("yearly")} {t("horoscope")} - {new Date().getFullYear()}
                </div></div>
            <div className='horo-yearly'>
                <ul>
                    <li>
                        <div><img alt="Aries" src='/images/ZodiacSign/aries.png' /></div>
                        <div className='horo-name'>{t("aries")}</div>
                    </li>
                    <li>
                        <div><img alt="Taurus" src='/images/ZodiacSign/taurus.png' /></div>
                        <div className='horo-name'>{t("taurus")}</div>
                    </li>
                    <li>
                        <div><img alt="Gemini" src='/images/ZodiacSign/Gemini.png' /></div>
                        <div className='horo-name'>{t("gemini")}</div>
                    </li>
                    <li>
                        <div><img alt="Cancer" src='/images/ZodiacSign/Cancer.png' /></div>
                        <div className='horo-name'>{t("cancer")}</div>
                    </li>
                    <li>
                        <div><img alt="Leo" src='/images/ZodiacSign/Leo.png' /></div>
                        <div className='horo-name'>{t("leo")}</div>
                    </li>
                    <li>
                        <div><img alt="Virgo" src='/images/ZodiacSign/Virgo.png' /></div>
                        <div className='horo-name'>{t("virgo")}</div>
                    </li>
                    <li>
                        <div><img alt="Libra" src='/images/ZodiacSign/Libra.png' /></div>
                        <div className='horo-name'>{t("libra")}</div>
                    </li>
                    <li>
                        <div><img alt="Scorpio" src='/images/ZodiacSign/Scorpio.png' /></div>
                        <div className='horo-name'>{t("scorpio")}</div>
                    </li>
                    <li>
                        <div><img alt="Sagittiarius" src='/images/ZodiacSign/Sagittiarius.png' /></div>
                        <div className='horo-name'>{t("sagittiarius")}</div>
                    </li>
                    <li>
                        <div><img alt="Capricorn" src='/images/ZodiacSign/Capricorn.png' /></div>
                        <div className='horo-name'>{t("capricorn")}</div>
                    </li>
                    <li>
                        <div><img alt="Aquarius" src='/images/ZodiacSign/Aquarius.png' /></div>
                        <div className='horo-name'>{t("aquarius")}</div>
                    </li>
                    <li>
                        <div><img alt="Pisces" src='/images/ZodiacSign/Pisces.png' /></div>
                        <div className='horo-name'>{t("pisces")}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
