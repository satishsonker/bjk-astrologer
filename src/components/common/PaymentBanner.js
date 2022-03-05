import React from 'react'
import '../../css/components/common/PaymentBanner.css';

export default function
    () {
    return (
        <div className='pay-banner-container'>
            <h3 className='banner-text'>Secure Payment Options</h3>
            <div className="row row-cols-md-12 row-cols-lg-12 row-cols-3 pay-banner-list">
                <div className="col"><img src='../images/paytm.png' alt=''/></div>
                <div className="col"><img src='../images/visa.png' alt=''/></div>
                <div className="col"><img src='../images/mastercard.png' alt=''/></div>
                <div className="col"><img src='../images/gpay.png' alt=''/></div>
                <div className="col"><img src='../images/ssl.png' alt=''/></div>
            </div>
        </div>
    )
}
