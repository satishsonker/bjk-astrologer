import React from 'react'
import AstroList from './common/AstroList'
import HoroscopeDaily from './Horoscopes/HoroscopeDaily'
import '../css/components/Home.css';
import JanmKundali from './common/JanmKundali';
import KundaliMatch from './common/KundaliMatch';
import HoroscopeYearly from './Horoscopes/HoroscopeYearly';
import Carousel from './common/Carousel';

export default function Home() {
  return (
    <div className='home-content'>
      <div className='ast-carousel'>
        <Carousel></Carousel>
      </div>
      <div className='home-box-astro-list'>
        <div class="ast-tag-line">We have Best and Certified Astrologers</div>
        <AstroList></AstroList>
      </div>
      <div className='home-box-horo'>
        <HoroscopeDaily></HoroscopeDaily>
      </div>
      <div className='row row-cols-1 row-cols-md-3'>
        <div className='col'>
          <div className='home-box-kundali'>
            <JanmKundali></JanmKundali>
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
      </div>
    </div>
  )
}
