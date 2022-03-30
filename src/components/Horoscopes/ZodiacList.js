import React from 'react'
import '../../css/components/HoroscopeDaily.css';
;
export default function ZodiacList() {
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <img src='/images/zodiac-banner.jpg'></img>
                <div className='ast-tag-line'>
                    Know About Your Zodiac Sign
                </div></div>
            <div className='horo-yearly'>
                <ul>
                    <li>
                        <div><img src='/images/ZodiacSign/aries.png' /></div>
                        <div className='horo-name'>Aries</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/taurus.png' /></div>
                        <div className='horo-name'>Taurus</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Gemini.png' /></div>
                        <div className='horo-name'>Gemini</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Cancer.png' /></div>
                        <div className='horo-name'>Cancer</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Leo.png' /></div>
                        <div className='horo-name'>Leo</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Virgo.png' /></div>
                        <div className='horo-name'>Virgo</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Libra.png' /></div>
                        <div className='horo-name'>Libra</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Scorpio.png' /></div>
                        <div className='horo-name'>Scorpio</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Sagittiarius.png' /></div>
                        <div className='horo-name'>Sagittiarius</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Capricorn.png' /></div>
                        <div className='horo-name'>Capricorn</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Aquarius.png' /></div>
                        <div className='horo-name'>Aquarius</div>
                    </li>
                    <li>
                        <div><img src='/images/ZodiacSign/Pisces.png' /></div>
                        <div className='horo-name'>Pisces</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
