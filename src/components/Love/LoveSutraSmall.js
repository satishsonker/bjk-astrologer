import React from 'react';
import '../../css/components/HoroscopeDaily.css';
import { Link } from "react-router-dom";
import AstButton from '../Controls/AstButton';

export default function LoveSutraSmall() {
    const btnOption = {
        text: "Read More..."
    }
    return (
        <div className='kun-box'>
            <Link to="/love">
                <div className='kun-box-header'>
                    <img alt='Banner' src='/images/love-banner-1.jpg'></img>
                    <div className='ast-tag-line2'>
                        Love Sutra Report
                    </div>
                </div>
            </Link>
            <p className='ast-tag-line2-para'>
            Passion is something very personal. You cannot feel it for anyone and definitely not everyone. Each of us have someone who brings out feelings of longing, desire and passion in us. On the other hand there are people who no matter how hard they try, simply how hard they try...
            </p>
            <div className='mx-3'>
                <AstButton option={btnOption}></AstButton>
            </div>
        </div>
    )
}
