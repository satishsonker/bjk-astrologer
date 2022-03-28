import React from 'react'
import '../css/components/HoroscopeDaily.css';

export default function LoveAstrology() {
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <img src='/images/love-banner.png'></img>
                <div className='ast-tag-line'>
                    Love Ralated Solutions
                </div></div>
            <div className='horo-yearly'>
                <ul>
                <li><a href="/love/love-compatibility.aspx">Love Compatibility</a> </li>
<li><a href="/love/lovesutra.aspx">Love Sutra</a> </li>
<li><a href="/love/soulmate.aspx">Soulmate</a> </li>
<li><a href="/tarot/love-tarot-reading">Love Tarot</a> </li>
<li><a href="/horoscopes/love-horoscope.aspx">Love Horoscope</a> </li>
<li class="borderNone"><a href="/astrology/love.aspx">Love Profile</a> </li>
                </ul>
            </div>
        </div>
    )
}
