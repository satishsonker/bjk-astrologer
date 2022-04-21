import React, { useState } from 'react';
import '../../css/components/Banner/Banner.css';
import { useTranslation } from "react-i18next";
import AstTextboxWithButton from '../Controls/AstTextboxWithButton';
import { Api } from '../../apis/Api';
import { apiUrls } from '../../apis/apiUrl';
import { common } from '../../common/common';
import { toast } from 'react-toastify';

export default function SubscribeBanner() {
    const [subscribeEmail, setSubscribeEmail] = useState("");
    const handleOnClick = () => {
        Api.Put(apiUrls.subscribeController.addSubscribe, { email: subscribeEmail, type: common.subscriptionType.newsLetter })
            .then(res => {
                if (res.data == 2) {
                    toast.info('This email is already subscribed');
                }
                else if (res.data == 1) {
                    toast.success('You have subscribed');
                    setSubscribeEmail('');
                }
                else
                toast.warn('We unable to subscribe your email. Please try later');
            })
            .catch(err => { 
                toast.error('Something went wrong. Please try later')
            })
    }
    const handleOnChange = (e) => {
        setSubscribeEmail(e.target.value);
    }
    const { t } = useTranslation(); const txtOption = {
        onChange: handleOnChange,
        id: 'txtSubscribeEmail',
        name: 'email',
        width: '100%',
        value: subscribeEmail,
        placeHolder: t('email'),
        hasValidation: true,
        showLabel: false,
        showHelpText: false,
        className: '',
        buttons: [
            {
                id: "btnSubscribe",
                text: t("subscribeNow"),
                handler: handleOnClick
            }
        ]
    }
    return (
        <>
            <div className='banner-container flex-logo'>
                <div className='ban-icon'>
                    <img src='/images/subscribe.png'></img>
                </div>
                <div className='ban-text'>
                    {t("subscribeBannerText")}
                </div>
                <div className='ban-btn'>
                    <AstTextboxWithButton option={txtOption}></AstTextboxWithButton>
                </div>
            </div>
        </>
    )
}
