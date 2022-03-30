import React from 'react';
import '../../css/components/HoroscopeDaily.css';
import { Link } from "react-router-dom";
import AstButton from '../Controls/AstButton';

export default function LoveMarriageSmall() {
    const btnOption = {
        text: "Read More..."
    }
    return (
        <div className='kun-box'>
            <Link to="/love">
                <div className='kun-box-header'>
                    <img alt='Banner' src='/images/love-banner-4.jpg'></img>
                    <div className='ast-tag-line2'>
                        Love Marriage
                    </div>
                </div>
            </Link>
            <p className='ast-tag-line2-para'>
            Weddings in India are a league of their own. Big, lavish and lively! Marriages in India definitely make for the biggest events in a family. Most weddings in the country span anywhere from a couple of days to weeks, depending on the type of wedding planned and the number of related functions...
            </p>
            <div className='mx-3'>
                <AstButton option={btnOption}></AstButton>
            </div>
        </div>
    )
}
