import React,{useState} from 'react';
import '../../css/components/Banner/Banner.css';
import { useTranslation } from "react-i18next";
import AstTextboxWithButton from '../Controls/AstTextboxWithButton';

export default function SubscribeBanner() {    
    const [subscribeEmail, setSubscribeEmail] = useState("");
    const handleOnClick=()=>{

    }
    const handleOnChange=()=>{

    }
    const { t } = useTranslation(); const txtOption=  {
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
        buttons:[
            {
                id:"btnSubscribe",
                text:t("subscribeNow"),
                handler:handleOnClick
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
