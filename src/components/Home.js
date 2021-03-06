import React from 'react'
import AstroList from './common/AstroList'
import HoroscopeDaily from './Horoscopes/HoroscopeDaily'
import '../css/components/Home.css';
import HoroscopeYearly from './Horoscopes/HoroscopeYearly';
import ZodiacList from './Horoscopes/ZodiacList';
import VastuList from './VastuList';
import LoveAstrology from './Love/LoveAstrology';
import Carousel from './common/Carousel';
import Janamkundali from './Kundali/JanmKundali';
import KundaliMatch from './Kundali/KundaliMatch';
import GoogleReviews from './common/GoogleReviews';
import { useTranslation } from "react-i18next";
import AskQuestionBanner from './Banner/AskQuestionBanner';
import SubscribeBanner from './Banner/SubscribeBanner';
import PlaneteryRemedies from './Remedies/PlaneteryRemedies';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className='home-content'>
      <div className='ast-carousel'>
        <Carousel></Carousel>
      </div>
      <div className='home-box-astro-list'>
        <div className="ast-tag-line">{t('best_astro')}</div>
        <AstroList></AstroList>
      </div>
      <div className='home-box-horo'>
        <HoroscopeDaily horoName={"t"}></HoroscopeDaily>
      </div>
      <div className='row row-cols-1 row-cols-md-3'>
        <div className='col'>
          <div className='home-box-kundali'>
            <Janamkundali></Janamkundali>
          </div>
        </div>
        <div className='col'>
          <div className='home-box-kundali'>
            <KundaliMatch></KundaliMatch>
          </div>
        </div>
        <div className='col'>
          <div className='home-box-kundali'>
            <HoroscopeYearly></HoroscopeYearly>
          </div>
        </div>
        <div className='col'>
          <div className='home-box-kundali'>
            <ZodiacList></ZodiacList>
          </div>
        </div>
        <div className='col'>
          <div className='home-box-kundali'>
            <VastuList></VastuList>
          </div>
        </div>
        <div className='col'>
          <div className='home-box-kundali'>
            <LoveAstrology></LoveAstrology>
          </div>
        </div>
        <div className='col'>
          <div className='home-box-kundali'>
            <PlaneteryRemedies></PlaneteryRemedies>
          </div>
        </div>
      </div>
      <div className='col-12'>
        <AskQuestionBanner></AskQuestionBanner>
        <SubscribeBanner></SubscribeBanner>
      </div>
      <div className='col-12'>
        <GoogleReviews></GoogleReviews>
      </div>
    </div>
  )
}
