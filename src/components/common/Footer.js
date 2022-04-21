import React, { useState } from 'react'
import '../../css/components/common/Footer.css';
import FooterBottomMenu from '../Menus/FooterBottomMenu';
import PaymentBanner from '../Banner/PaymentBanner';
import { AppConfigConsumer } from '../../Context/ConfigContext';


export default function Footer() {
    const [isFooterExpand, setIsFooterExpand] = useState(false);
    const [isShowData, setIsShowData] = useState(false);
    const handleFooterExpand = () => {
        setIsFooterExpand(!isFooterExpand);
        if (isShowData) {
            setTimeout(() => {
                setIsShowData(!isShowData);
            }, 1000);
        }
        else {
            setIsShowData(!isShowData);
        }
    }
    return (
        <>
            <AppConfigConsumer>
                {
                    (config) => {
                        return <div className={isFooterExpand ? 'bjk-footer footer-expand' : 'bjk-footer'} >
                            <ul className="bd-highlight ul-buttons" >
                                <li>
                                    <a href={`https://wa.me/${config.contact.whatsappNo}?text=Hi%2C+I+am+Satish+Kumar+Sonkar.%0D%0AI+want+some+consultation.+Please+reply+back.`}><div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-brands fa-whatsapp whatsapp"></i></div></a>
                                </li>
                                <li>
                                    <a href={"tel:" + config.contact.mobileNo}><div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-solid fa-phone"></i></div></a>
                                </li>
                                <li className='call-popup'>
                                    <a href={"tel:" + config.contact.mobileNo}><div className="p-2 flex-fill tc bd-highlight"><i className="control-btn fa-solid fa-phone"></i></div></a>
                                </li>
                                <li>
                                    <div className="p-2 flex-fill tc bd-highlight"><i data-bs-toggle="modal" data-bs-target="#pageShareModel" className="fa-solid fa-share-nodes"></i></div>
                                </li>
                                <li>
                                    <div className="p-2 flex-fill tc bd-highlight" onClick={e => handleFooterExpand()} ><i className={isFooterExpand ? "control-btn fa-solid fa-angle-down to-top" : "control-btn fa-solid fa-angle-up to-top"}></i></div>
                                </li>
                            </ul>
                            {isShowData &&
                                <div className='footer-inner' onClick={e => handleFooterExpand()}>
                                    <PaymentBanner></PaymentBanner>
                                    <FooterBottomMenu></FooterBottomMenu>
                                </div>
                            }
                        </div>
                    }
                }
            </AppConfigConsumer>
        </>
    )
}
