import React from 'react'
import AstroList from './common/AstroList'
import HoroscopeDaily from './Horoscopes/HoroscopeDaily'
import '../css/components/Home.css';

export default function Home() {
  return (
    <div className='home-content'>
      <div className='home-box-astro-list'><AstroList></AstroList></div>
      <div className='home-box-horo'><HoroscopeDaily></HoroscopeDaily></div>
    </div>
  )
}
