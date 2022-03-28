import React, { useState } from 'react'
import '../../css/components/common/Footer.css';
import FooterBottomMenu from './FooterBottomMenu';
import PaymentBanner from './PaymentBanner';


export default function Footer() {
    const [isFooterExpand, setIsFooterExpand] = useState(false);
    const handleFooterExpand = () => {
        setIsFooterExpand(!isFooterExpand);
    }
    return (
        <>
            <div className={isFooterExpand ? 'bjk-footer footer-expand' : 'bjk-footer'}>
                <ul className="d-flex bd-highlight ul-buttons" >
                    <li>
                        <a href="https://wa.me/919990614499?text=Hi%2C+I+am+Satish+Kumar+Sonkar.%0D%0AI+want+some+consultation.+Please+replay+back."><div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-brands fa-whatsapp"></i></div></a>
                    </li>
                    <li>
                        <a href="tel:9990614499"><div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-solid fa-phone"></i></div></a>
                    </li>
                    <li>
                        <div className="p-2 flex-fill tc bd-highlight"><i data-bs-toggle="modal" data-bs-target="#pageShareModel" className="fa-solid fa-share-nodes"></i></div>
                    </li>
                    <li>
                        <div className="p-2 flex-fill tc bd-highlight" onClick={e => handleFooterExpand()} ><i className={isFooterExpand ? "control-btn fa-solid fa-angle-down" : "control-btn fa-solid fa-angle-up"}></i></div>
                    </li>
                </ul>
                <PaymentBanner></PaymentBanner>
                <FooterBottomMenu></FooterBottomMenu>
            </div>
        </>
    )
}
