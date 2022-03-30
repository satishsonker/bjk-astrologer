import React from 'react';
import '../../css/components/HoroscopeDaily.css';
import { Link } from "react-router-dom";
import AstButton from '../Controls/AstButton';

export default function SoulMateSmall() {
    const btnOption = {
        text: "Read More..."
    }
    return (
        <div className='kun-box'>
            <Link to="/love">
                <div className='kun-box-header'>
                    <img alt='Banner' src='/images/love-banner-2.jpg'></img>
                    <div className='ast-tag-line2'>
                        Soulmate Report
                    </div>
                </div>
            </Link>
            <p className='ast-tag-line2-para'>
                Nothing is more beautiful than the feeling of being in love. Of finding that special someone who will send not just our heart aflutter, but How do you know who is your soulmate? That one person who has been made for you and only one. Someone who can complete your...
            </p>
            <div className='mx-3'>
                <AstButton option={btnOption}></AstButton>
            </div>
        </div>
    )
}
