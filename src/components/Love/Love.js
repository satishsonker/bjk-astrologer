import React from 'react'
import Breadcrumb from '../common/Breadcrumb';
import '../../css/components/Love/LovePage.css';
import LoveCompatibilitySmall from './LoveCompatibilitySmall';
import SoulMateSmall from './SoulMateSmall';
import LoveSutraSmall from './LoveSutraSmall';
import LoveProfileSmall from './LoveProfileSmall';
import LoveHoroscopeSmall from './LoveHoroscopeSmall';
import LoveMarriageSmall from './LoveMarriageSmall';

export default function Love() {
    const breadcrumbOption = [
        { name: 'Home', link: "/Home" },
        { name: 'Love', isActive: false }
    ];
    return (
        <div className='love-container'>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='love-container-item'>
                <img alt='Banner' className='love-banner' src='/images/loveAndAstro.jpg' />
                <div className='love-page-header'>
                    Astrology in Love
                </div>
                <p className='love-para'>
                    Zodiac signs have predestined love matches that are indicated to form highly compatible matches as per astrological resources available on these signs. Water signs get along well with likeminded people and similar is the case with air, fire or earth signs. Opposites attract too! But getting insights into how well you get along with another sign and what to expect in terms of love can be more helpful than you think. The difficulty of dating a Scorpio man can only be understood by those who have been through the innumerable tests and unexplained silences these men are capable of. </p>
                <p className='love-para'>
                    Aries is impulsive and will not hang around to witness how deep your thoughts are. They live in the now and it is the present that is most important to them. Taureans are very loyal in love and they expect the same in return from their partners. Libran women are as charming as they come and nobody represents femininity better than a Libran. Leo will grab the spotlight no matter what the competition and when dating this sign, be sure to take them to fine places to wine and dine. They have expensive tastes and luxury appeals to them. Pisces will do anything to remain in a secure relationship. Get more such astrological insights to understand your zodiac lover’s thoughts, personality, emotions and desires. Love astrology readings can help you take your relationship to another level and you will experience happiness like never before.
                </p>
            </div>
            <div className='love-container-item'>
                <div className='love-page-header'>
                    You May Also Like
                </div>
                <div className='row row-cols-1 row-cols-md-3'>
                    <div className='col'>
                        <LoveCompatibilitySmall></LoveCompatibilitySmall>
                    </div>
                    <div className='col'>
                        <LoveHoroscopeSmall></LoveHoroscopeSmall>
                    </div>
                    <div className='col'>
                        <LoveMarriageSmall></LoveMarriageSmall>
                    </div>
                    <div className='col'>
                        <LoveProfileSmall></LoveProfileSmall>
                    </div>
                    <div className='col'>
                        <LoveSutraSmall></LoveSutraSmall>
                    </div>
                    <div className='col'>
                        <SoulMateSmall></SoulMateSmall>
                    </div>
                </div>
            </div>
        </div>
    )
}
