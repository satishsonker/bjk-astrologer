import React from 'react'
import '../../css/components/common/PaymentBanner.css';
import { useTranslation } from "react-i18next";

export default function() {    
    const { t } = useTranslation();
    return (
        <div className='pay-banner-container'>
            <h3 className='banner-text'>{t("secure")} {t("payment")} {t("options")}</h3>
            <div className="pay-banner-list">
                <div className="col"><img alt="Paytm Logo" src='../images/paytm.png'/></div>
                <div className="col"><img alt="Visa Logo" src='../images/visa.png'/></div>
                <div className="col"><img alt="Master Card Logo" src='../images/mastercard.png'/></div>
                <div className="col"><img alt="Google Pay Logo" src='../images/gpay.png'/></div>
                <div className="col"><img alt="SSL Logo" src='../images/ssl.png'/></div>
            </div>
        </div>
    )
}
