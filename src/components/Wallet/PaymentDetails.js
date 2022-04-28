import React,{useState,useEffect} from 'react';
import Breadcrumb from '../common/Breadcrumb';
import { useTranslation } from "react-i18next";
import '../../css/components/Wallet/Wallet.css'
import AstButton from '../Controls/AstButton';
import PaymentBanner from '../Banner/PaymentBanner';
import FooterBottomMenu from '../Menus/FooterBottomMenu';
import { useParams } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function PaymentDetails() {
    const { t } = useTranslation();
    const urlParam = useParams();
    const [paymentData, setPaymentData] = useState({
        subAmount:0.00,
        gstAmount:0.00,
        total:0.00,
        totalAfterPayment:0.00
    });
    useEffect(() => {
        var total,subAmount,gstAmount,totalAfterPayment;
        subAmount=parseFloat(urlParam.pay);
        gstAmount=(subAmount/100)*18;
        total=subAmount+gstAmount;
        if(urlParam.offer.indexOf('%')>-1){
            totalAfterPayment=subAmount+((gstAmount/18)*parseFloat(urlParam?.offer?.match(/\d+/g)));
        }
        else
        totalAfterPayment=parseFloat(urlParam?.offer?.match(/\d+/g));
        setPaymentData({
            subAmount:subAmount,
        gstAmount:gstAmount,
        total:total,
        totalAfterPayment:totalAfterPayment
        });
    }, [urlParam])
    
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: t('wallet'), link: "/Wallet" },
        { name: t('paymentDetails'), isActive: false }
    ];
    const RupeeIcon = ({ height = 16, width = 16 }) => {
        return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 320 512"><path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z" /></svg>
    }
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='wallet-header'>
                <div className='part-1'>
                    <div>{t('paymentDetails')}</div>
                </div>
            </div>
            <div className='pay-details'>
                <div className='pay-section'>
                    <div>{t('totalAmount')}</div>
                    <div><RupeeIcon></RupeeIcon> {paymentData.subAmount}</div>
                </div>
                <div className='pay-section'>
                    <div>{t('gst')} @ 18%</div>
                    <div><RupeeIcon></RupeeIcon> {paymentData.gstAmount}</div>
                </div>
                <div className='pay-section'>
                    <div>{t('totalPayableAmount')}</div>
                    <div><RupeeIcon></RupeeIcon> {paymentData.total}</div>
                </div>
                <div className='paybtn'>
                    <AstButton option={{ text: t("payNow"), width: '50%' }}></AstButton>
                </div>
                <div className='recharge-pack payd'>
                                <div className='ribbon'>
                                    <LazyLoadImage className='ribbon-img' src='/images/bonus.png' alt='ribbon'></LazyLoadImage>
                                </div>
                                <div className='pack-amount'>
                                {t("bonusText",{amt1:+paymentData.total,amt2:paymentData.totalAfterPayment})}
                                </div>
                            </div>
                
            </div>
            <PaymentBanner></PaymentBanner>
            <FooterBottomMenu></FooterBottomMenu>
        </>
    )
}
