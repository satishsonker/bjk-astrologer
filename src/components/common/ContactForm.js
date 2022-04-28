import React,{useState} from 'react';
import '../../css/components/HoroscopeDaily.css';
import AstButton from '../Controls/AstButton';
import { useTranslation } from "react-i18next";
import '../../css/components/common/ContactUs.css';
import AstTextbox from '../Controls/AstTextbox';
import AstTextarea from '../Controls/AstTextarea';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ContactForm() {
    const [contactData, setContactData] = useState({});
    const { t } = useTranslation();
    const btnOption = {
        text: "send"
    };
    const handleOnChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }
    const txtOptions = {
        name: {
            onChange: handleOnChange,
            id: 'txtConName',
            name: 'name',
            width: '100%',
            value: contactData.name,
            placeHolder: t('name'),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        email: {
            onChange: handleOnChange,
            id: 'txtEmail',
            name: 'email',
            width: '100%',
            type:'email',
            value: contactData.email,
            placeHolder: t('email'),
            className: 'me-2 mb-2',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        mobile: {
            onChange: handleOnChange,
            id: 'txtMobile',
            name: 'mobile',
            width: '100%',
            value: contactData.mobile,
            placeHolder: t('mobile'),
            className: 'me-2 mb-2',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        query: {
            onChange: handleOnChange,
            id: 'txtquery',
            name: 'query',
            width: '100%',
            defaultText: t('query'),
            className: 'me-2 mb-2',
            value: contactData.gender,
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            placeHolder: t('query')
        }
    };
    return (
        <div className='kun-box'>
                <div className='kun-box-header'>
                    <LazyLoadImage alt='Banner' src='/images/love-banner-2.jpg'/>
                </div>
           <div className='con-form'>
               <div className='con-form-item'>
                   <AstTextbox option={txtOptions.name}></AstTextbox>
               </div>
               <div className='con-form-item'>
                   <AstTextbox option={txtOptions.email}></AstTextbox>
               </div>
               <div className='con-form-item'>
                   <AstTextbox option={txtOptions.mobile}></AstTextbox>
               </div>
               <div className='con-form-item'>
                   <AstTextarea option={txtOptions.query}></AstTextarea>
               </div>
               <div className='con-form-item'>
                   <AstButton option={btnOption}></AstButton>
               </div>
           </div>
        </div>
    )
}
