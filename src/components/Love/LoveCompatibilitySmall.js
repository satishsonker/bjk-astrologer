import React from 'react';
import '../../css/components/Love/LovePage.css';
import { Link } from "react-router-dom";
import AstButton from '../Controls/AstButton';

export default function LoveCompatibilitySmall() {
    const btnOption = {
        text: "Read More..."
    }
    return (
        <div className='kun-box'>
            <Link to="/love">
                <div className='kun-box-header'>
                    <img alt='Banner' src='/images/love-banner-5.jpg'></img>
                    <div className='ast-tag-line2'>
                        Love Compatibility Report
                    </div>
                </div>
            </Link>
            <p className='ast-tag-line2-para'>
                Love, romance, marriage, break-up, divorce–our life revolves around these themes to a great extent and how our life shapes up depends a lot on the quality of our relationships. Difficult to figure out, yet extremely crucial; love can be the most complex of love can be the most complex...
            </p>
            <div className='mx-3'>
                <AstButton option={btnOption}></AstButton>
            </div>
        </div>
    )
}
