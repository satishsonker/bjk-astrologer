import React,{useState} from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
import { common } from '../../common/common';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ZodiacList() {
    const { t } = useTranslation();
    const [zodiacData, setZodiacData] = useState([
        {
            name: "aries",
            period: "21/3-19/4",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "taurus",
            period: "20/4-20/5",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "gemini",
            period: "21/5-20/6",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "cancer",
            period: "21/6-22/7",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "leo",
            period: "23/7-22/8",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "virgo",
            period: "23/8-22/9",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "libra",
            period: "23/9-22/10",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "scorpio",
            period: "23/10-21/11",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "sagittarius",
            period: "22/11-21/12",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "capricorn",
            period: "22/12-19/1",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "aquarius",
            period: "20/1-18/2",
            logoPath: "/images/ZodiacSign/",

        },
        {
            name: "pisces",
            period: "19/2-20/3",
            logoPath: "/images/ZodiacSign/",

        }
    ]);
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <LazyLoadImage src='/images/zodiac-banner.jpg'></LazyLoadImage>
                <div className='ast-tag-line'>
                    {t("knowAboutYourZodiacSign")}
                </div></div>
            <div className='horo-yearly'>
                <ul>
                    {
                        zodiacData.map(ele => {
                            return <li key={common.getElementKey()}>
                                <div><LazyLoadImage alt={ele.name} src={`${ele.logoPath}${ele.name}.png`} /></div>
                                <div className='horo-name'>{t(ele.name)}</div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
