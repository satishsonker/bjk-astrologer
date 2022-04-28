import React, { useState } from 'react';
import '../../css/components/Banner/Banner.css';
import { useTranslation } from "react-i18next";
import AstTextboxWithButton from '../Controls/AstTextboxWithButton';
import { Api } from '../../apis/Api';
import { apiUrls } from '../../apis/apiUrl';
import { common } from '../../common/common';
import { toast } from 'react-toastify';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function SubscribeBanner() {
    const [subscribeEmail, setSubscribeEmail] = useState("");
    const { t } = useTranslation();
    const handleOnClick = () => {
        if (subscribeEmail === '') {
            toast.warn(t('enterYour', { word: t('email') }));
            return false;
        }
        else if (subscribeEmail.match(common.regex.email) === null) {
            toast.warn(t('enterValid', { word: t('email') }));
            return false;
        }
        else {
            Api.Put(apiUrls.subscribeController.addSubscribe, { email: subscribeEmail, type: common.subscriptionType.newsLetter })
                .then(res => {
                    if (res.data == 2) {
                        toast.info(t('emailAlreadySubscribed'));
                    }
                    else if (res.data == 1) {
                        toast.success(t('completed'));
                        setSubscribeEmail('');
                    }
                    else
                        toast.warn('We unable to subscribe your email. Please try later');
                });
        }
    }
    const handleOnChange = (e) => {
        setSubscribeEmail(e.target.value);
    }
    const txtOption = {
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
                    <LazyLoadImage src='/images/subscribe.png'/>
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
