import React from 'react'
import '../../css/components/common/PaymentBanner.css';

export default function
    () {
    return (
        <div className='pay-banner-container'>
            <h3 className='banner-text'>Secure Payment Options</h3>
            <div className="row row-cols-md-12 row-cols-lg-12 row-cols-sm-6 row-cols-3 pay-banner-list">
                <div className="col"><img alt="Paytm Logo" src='../images/paytm.png'/></div>
                <div className="col"><img alt="Visa Logo" src='../images/visa.png'/></div>
                <div className="col"><img alt="Master Card Logo" src='../images/mastercard.png'/></div>
                <div className="col"><img alt="Google Pay Logo" src='../images/gpay.png'/></div>
                <div className="col"><img alt="SSL Logo" src='../images/ssl.png'/></div>
            </div>
        </div>
    )
}
