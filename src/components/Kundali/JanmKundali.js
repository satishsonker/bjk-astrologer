import React, { useState } from 'react'
import { common } from '../../common/common'
import '../../css/components/common/JanmKundali.css'
import AstButton from '../Controls/AstButton'
import AstSelect from '../Controls/AstSelect'
import AstTextbox from '../Controls/AstTextbox';
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Janamkundali() {
    const {t}=useTranslation();
    const [kundaliData, setKundaliData] = useState({});
    const handleOnChange = (e) => {
        setKundaliData({ ...kundaliData, [e.target.name]: e.target.value })
    }
    const txtOptions = {
        name: {
            onChange: handleOnChange,
            id: 'txtKunName',
            name: 'name',
            width: '100%',
            value: kundaliData.name,
            placeHolder: t('name'),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        birthPlace: {
            onChange: handleOnChange,
            id: 'txtKunBirthPlace',
            name: 'birthPlace',
            width: '100%',
            value: kundaliData.birthPlace,
            placeHolder: t('birthPlace'),
            className: 'me-2 mb-2',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        mobile: {
            onChange: handleOnChange,
            id: 'txtKunMobile',
            name: 'mobile',
            width: '100%',
            value: kundaliData.mobile,
            placeHolder: t('mobile'),
            className: 'me-2 mb-2',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        gender: {
            onChange: handleOnChange,
            id: 'ddlKunGender',
            name: 'gender',
            width: '100%',
            defaultText: t('gender'),
            className: 'me-2 mb-2',
            value: kundaliData.gender,
            data: [t('male'), t('female'), t("other")],
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        days: {
            onChange: handleOnChange,
            id: 'ddlKunDay',
            name: 'day',
            width: '100%',
            className: 'me-2 mb-2',
            value: kundaliData.day,
            defaultText: t('day'),
            data: common.getNumberArray(1, 31),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        months: {
            onChange: handleOnChange,
            id: 'ddlKunMonth',
            name: 'month',
            width: '100%',
            defaultText: t('month'),
            className: 'me-2 mb-2',
            value: kundaliData.month,
            data: common.getNumberArray(1, 12),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        years: {
            onChange: handleOnChange,
            id: 'ddlKunYear',
            name: 'year',
            defaultText: t('year'),
            width: '100%',
            value: kundaliData.year,
            data: common.getNumberArray(new Date().getFullYear() - 70, new Date().getFullYear()),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2'
        },
        hour: {
            onChange: handleOnChange,
            id: 'ddlKunHour',
            name: 'hour',
            width: '100%',
            defaultText: t('hour'),
            value: kundaliData.hour,
            className: 'me-2 mb-2',
            data: common.getNumberArray(1, 23),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        minute: {
            onChange: handleOnChange,
            id: 'ddlKunMinute',
            name: 'minute',
            defaultText: t('minute'),
            width: '100%',
            value: kundaliData.minute,
            className: 'me-2 mb-2',
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        second: {
            onChange: handleOnChange,
            id: 'ddlKunSecond',
            name: 'second',
            width: '100%',
            defaultText: t('seconds'),
            value: kundaliData.second,
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        getButton: {
            text:  t("getReport"),
            handler: () => { }
        }
    }
    return (
        <div className='kun-box'>
            <div className='kun-box-header'>
                <LazyLoadImage alt='Banner' src='/images/janamkundali.jpg'></LazyLoadImage>
                <div className='ast-tag-line'>
                   {t("getYourJanamKundali")}
                </div></div>
            <div className='row row-cols-2'>
                <div className='col dflex'>
                    <AstTextbox option={txtOptions.name}></AstTextbox>
                    <AstTextbox option={txtOptions.mobile}></AstTextbox>
                </div>
                <div className='col dflex'>
                    <AstSelect option={txtOptions.gender}></AstSelect>
                    <AstSelect option={txtOptions.days}></AstSelect>
                    <AstSelect option={txtOptions.months}></AstSelect>
                    <AstSelect option={txtOptions.years}></AstSelect>
                </div>
                <div className='col dflex'>
                    <AstTextbox option={txtOptions.birthPlace}></AstTextbox>
                    <AstSelect option={txtOptions.hour}></AstSelect>
                    <AstSelect option={txtOptions.minute}></AstSelect>
                    <AstSelect option={txtOptions.second}></AstSelect>
                </div>
                <div className='col-12'>
                    <AstButton option={txtOptions.getButton}></AstButton>
                </div>
            </div>
        </div>
    )
}
