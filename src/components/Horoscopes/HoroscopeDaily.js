import React from 'react'
import '../../css/components/HoroscopeDaily.css'
export default function HoroscopeDaily() {
  return (
    <>
    <div className='horo-heading'>Free Daily Horoscope</div>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1">
        <div className='col'>
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/aries.png' />
                <div className='horo-name'>Aries</div>
                <div className='horo-period'>21/3-19/4</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/taurus.png' />
                <div className='horo-name'>Taurus</div>
                <div className='horo-period'>20/4-20/5</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Gemini.png' />
                <div className='horo-name'>Gemini</div>
                <div className='horo-period'>21/5-20/6</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Cancer.png' />
                <div className='horo-name'>Cancer</div>
                <div className='horo-period'>21/6-22/7</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Leo.png' />
                <div className='horo-name'>Leo</div>
                <div className='horo-period'>23/7-22/8</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Virgo.png' />
                <div className='horo-name'>Virgo</div>
                <div className='horo-period'>23/8-22/9</div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Libra.png' />
                <div className='horo-name'>Libra</div>
                <div className='horo-period'>23/9-22/10</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Scorpio.png' />
                <div className='horo-name'>Scorpio</div>
                <div className='horo-period'>23/10-21/11</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Sagittiarius.png' />
                <div className='horo-name'>Sagittiarius</div>
                <div className='horo-period'>22/11-21/12</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Capricorn.png' />
                <div className='horo-name'>Capricorn</div>
                <div className='horo-period'>22/12-19/1</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Aquarius.png' />
                <div className='horo-name'>Aquarius</div>
                <div className='horo-period'>20/1-18/2</div>
              </div>
            </div>
            <div className='col'>
              <div className='horo-box'>
                <img src='/images/ZodiacSign/Pisces.png' />
                <div className='horo-name'>Pisces</div>
                <div className='horo-period'>19/2-20/3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
