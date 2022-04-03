import React from 'react'
import '../../css/components/HoroscopeDaily.css';
import { useTranslation } from "react-i18next";
export default function HoroscopeDaily() {  
  const { t } = useTranslation();
  return (
    <>
    <div className='horo-heading'>{t("free")} {t("daily")} {t("horoscope")}</div>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1">
        <div className='col'>
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
            <div className='col'>
              <div className='horo-box'>
                <img alt='Aries' src='/images/ZodiacSign/aries.png' />
                <div className='horo-name'>{t("aries")}</div>
                <div className='horo-period'>21/3-19/4</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Taurus' src='/images/ZodiacSign/taurus.png' />
                <div className='horo-name'>{t("taurus")}</div>
                <div className='horo-period'>20/4-20/5</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Gemini' src='/images/ZodiacSign/Gemini.png' />
                <div className='horo-name'>{t("gemini")}</div>
                <div className='horo-period'>21/5-20/6</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Cancer' src='/images/ZodiacSign/Cancer.png' />
                <div className='horo-name'>{t("cancer")}</div>
                <div className='horo-period'>21/6-22/7</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Leo' src='/images/ZodiacSign/Leo.png' />
                <div className='horo-name'>{t("leo")}</div>
                <div className='horo-period'>23/7-22/8</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Virgo' src='/images/ZodiacSign/Virgo.png' />
                <div className='horo-name'>{t("virgo")}</div>
                <div className='horo-period'>23/8-22/9</div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
            <div className='col'>
              <div className='horo-box'>
                <img alt='Libra' src='/images/ZodiacSign/Libra.png' />
                <div className='horo-name'>{t("libra")}</div>
                <div className='horo-period'>23/9-22/10</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Scorpio' src='/images/ZodiacSign/Scorpio.png' />
                <div className='horo-name'>{t("scorpio")}</div>
                <div className='horo-period'>23/10-21/11</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Sagittiarius' src='/images/ZodiacSign/Sagittiarius.png' />
                <div className='horo-name'>{t("sagittiarius")}</div>
                <div className='horo-period'>22/11-21/12</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Capricorn' src='/images/ZodiacSign/Capricorn.png' />
                <div className='horo-name'>{t("capricorn")}</div>
                <div className='horo-period'>22/12-19/1</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Aquarius' src='/images/ZodiacSign/Aquarius.png' />
                <div className='horo-name'>{t("aquarius")}</div>
                <div className='horo-period'>20/1-18/2</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img alt='Pisces' src='/images/ZodiacSign/Pisces.png' />
                <div className='horo-name'>{t("pisces")}</div>
                <div className='horo-period'>19/2-20/3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
