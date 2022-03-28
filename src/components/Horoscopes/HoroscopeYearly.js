import React from 'react'
import '../../css/components/HoroscopeDaily.css';
;
export default function HoroscopeYearly() {
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <img src='/images/janamkundali.jpg'></img>
                <div className='ast-tag-line'>
                    Yearly Horoscope - {new Date().getFullYear()}
                </div></div>
            <div className='horo-yearly'>
                <ul>
                    <li>
                        <div><img src='/images/aries.png' /></div>
                        <div className='horo-name'>Aries</div>
                    </li>
                    <li>
                        <div><img src='/images/taurus.png' /></div>
                        <div className='horo-name'>Taurus</div>
                    </li>
                    <li>
                        <div><img src='/images/Gemini.png' /></div>
                        <div className='horo-name'>Gemini</div>
                    </li>
                    <li>
                        <div><img src='/images/Cancer.png' /></div>
                        <div className='horo-name'>Cancer</div>
                    </li>
                    <li>
                        <div><img src='/images/Leo.png' /></div>
                        <div className='horo-name'>Leo</div>
                    </li>
                    <li>
                        <div><img src='/images/Virgo.png' /></div>
                        <div className='horo-name'>Virgo</div>
                    </li>
                    <li>
                        <div><img src='/images/Libra.png' /></div>
                        <div className='horo-name'>Libra</div>
                    </li>
                    <li>
                        <div><img src='/images/Scorpio.png' /></div>
                        <div className='horo-name'>Scorpio</div>
                    </li>
                    <li>
                        <div><img src='/images/Sagittiarius.png' /></div>
                        <div className='horo-name'>Sagittiarius</div>
                    </li>
                    <li>
                        <div><img src='/images/Capricorn.png' /></div>
                        <div className='horo-name'>Capricorn</div>
                    </li>
                    <li>
                        <div><img src='/images/Aquarius.png' /></div>
                        <div className='horo-name'>Aquarius</div>
                    </li>
                    <li>
                        <div><img src='/images/Pisces.png' /></div>
                        <div className='horo-name'>Pisces</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
