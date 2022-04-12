import React,{useState} from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { common } from '../../common/common';
export default function HoroscopeDaily({interval,horoName}) {
  interval=common.defaultIfEmpty(interval,"daily");
  horoName=common.defaultIfEmpty(horoName,"aries");
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
  ])
  return (
    <>
      <div className='horo-heading'>{t("free")} {t(interval)} {t("horoscope")}</div>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 horo">

        <div className='col'>
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
            {
              zodiacData.map((ele, ind) => {
                if (ind < 6)
                  return <div key={common.getElementKey()}>
                    <div className='col horo-sec'>
                      <Link to={`/horoscope/${interval}/${ele.name}/${ele.period.replace(/\//g, ".")}`}>
                        <div className={horoName===ele.name?'horo-box horo-active':"horo-box"}>
                          <img alt={ele.name} src={`${ele.logoPath}${ele.name}.png`} />
                          <div className='horo-name'>{t(ele.name)}</div>
                          <div className='horo-period'>{ele.period}</div>
                        </div>
                      </Link>
                    </div>
                  </ div>
              })
            }

          </div>
        </div>
        <div className='col'>
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
          {
              zodiacData.map((ele, ind) => {
                if (ind >=6)
                  return <div key={common.getElementKey()}>
                    <div key={common.getElementKey()} className='col horo-sec'>
                      <Link to={`/horoscope/${interval}/${ele.name}/${ele.period.replace(/\//g, ".")}`}>
                        <div className={horoName===ele.name?'horo-box horo-active':"horo-box"}>
                          <img alt={ele.name} src={`${ele.logoPath}${ele.name}.png`} />
                          <div className='horo-name'>{t(ele.name)}</div>
                          <div className='horo-period'>{ele.period}</div>
                        </div>
                      </Link>
                    </div>
                  </div>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
