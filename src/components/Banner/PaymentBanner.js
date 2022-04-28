import React from 'react'
import '../../css/components/common/PaymentBanner.css';
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PaymentBanner() {    
    const { t } = useTranslation();
    return (
        <div className='pay-banner-container'>
            <h3 className='banner-text'>{t("secure")} {t("payment")} {t("options")}</h3>
            <div className='row row-cols-3 row-cols-md-6 pay-banner-list'>
            <div className="col"><LazyLoadImage alt="Paytm Logo" src='/images/paytm.png'/></div>
                <div className="col"><LazyLoadImage alt="Visa Logo" src='/images/visa.png'/></div>
                <div className="col"><LazyLoadImage alt="Master Card Logo" src='/images/mastercard.png'/></div>
                <div className="col"><LazyLoadImage alt="Google Pay Logo" src='/images/gpay.png'/></div>
                <div className="col"><LazyLoadImage alt="SSL Logo" src='/images/ssl.png'/></div>
            </div>
        </div>
    )
}
