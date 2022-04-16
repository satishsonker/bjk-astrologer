import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import '../../css/components/Wallet/Wallet.css'
import PaymentBanner from '../Banner/PaymentBanner';
import { useEffect } from 'react';
import { common } from '../../common/common';
import { Link } from "react-router-dom";

export default function Wallet() {
    const { t } = useTranslation();
    const [data, setData] = useState([{}]);
    useEffect(() => {
        let _data = [
            {
                ribbonText: `${t('get')} 101 ${t('rs.')}`,
                amount: 1.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 201 ${t('rs.')}`,
                amount: 100.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 301 ${t('rs.')}`,
                amount: 200.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 401 ${t('rs.')}`,
                amount: 300.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 501 ${t('rs.')}`,
                amount: 400.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 601 ${t('rs.')}`,
                amount: 500.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 15% ${t('more')}`,
                amount: 1000.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 18% ${t('more')}`,
                amount: 5000.00,
                payText: `${t('payNow')}`
            },
            {
                ribbonText: `${t('get')} 22% ${t('more')}`,
                amount: 10000.00,
                payText: `${t('payNow')}`
            }
        ];
        setData(_data);
    }, [t]);

    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: t('wallet'), isActive: false }
    ];
    const RupeeIcon = ({ height = 16, width = 16 }) => {
        return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 320 512"><path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z" /></svg>
    }
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='wallet-header'>
                <div className='part-1'>
                    <div>{t('available')} {t('balance')}</div>
                    <div className='bal'><RupeeIcon></RupeeIcon> <span>0.00</span></div>
                </div>
                <div className='part-2'>
                    {t('consultaion')} {t('history')}
                </div>
            </div>
            <div className='wallet-heading'>
                <div className='part-1'>
                    <div>{t('addMoneyToWallet')}</div>
                    <div className='text-mute'>{t('chooseFromTheAvailableRechargePack')}</div>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-4 recharge-packs'>
                {
                    data?.map(ele => {
                        return <Link to={`/PaymentDetails/${ele.amount}/${String(ele?.ribbonText?.match(/\d+%?/g))}`}>  <div className='col' key={common.getElementKey()}>
                            <div className='recharge-pack'>
                                <div className='ribbon'>
                                    <img className='ribbon-img' src='/images/red-ribbon.png' alt='ribbon'></img>
                                    <span className='ribbon-text'>{ele.ribbonText}</span>
                                </div>
                                <div className='pack-amount'>
                                    <div className='amount'><RupeeIcon></RupeeIcon> <span>{parseFloat(ele.amount).toFixed(2)}</span></div>
                                    <div className='pay-text'>{ele.payText}</div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    })
                }
            </div>
            <PaymentBanner></PaymentBanner>
        </>
    )
}
