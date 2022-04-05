import React, { useState } from 'react'
import { common } from '../../common/common'
import '../../css/components/common/JanmKundali.css'
import AstButton from '../Controls/AstButton'
import AstSelect from '../Controls/AstSelect'
import AstTextbox from '../Controls/AstTextbox';
import { useTranslation } from "react-i18next";
export default function KundaliMatch() {
    const { t } = useTranslation();
    const [kundaliData, setKundaliData] = useState({ boy: {}, girl: {} });
    const [isNext, setIsNext] = useState(false);
    const handleOnChange = (e) => {
        setKundaliData({ ...kundaliData, [e.target.name]: e.target.value })
    }
    const handleNext = () => {
        setIsNext(true);
    }
    const handlePre = () => {
        setIsNext(false);
    }
    const boyTxtOptions = {
        name: {
            onChange: handleOnChange,
            id: 'txtKunName',
            name: 'name',
            width: '100%',
            value: kundaliData.boy.name,
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
            value: kundaliData.boy.birthPlace,
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
            value: kundaliData.boy.mobile,
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
            value: kundaliData.boy.gender,
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
            value: kundaliData.boy.day,
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
            value: kundaliData.boy.month,
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
            value: kundaliData.boy.year,
            data: common.getNumberArray(new Date().getFullYear() - 100, new Date().getFullYear()),
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
            value: kundaliData.boy.hour,
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
            value: kundaliData.boy.minute,
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
            value: kundaliData.boy.second,
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        nextButton: {
            text: t("next"),
            handler: handleNext
        },
        preButton: {
            text: t("previous"),
            handler: handlePre
        },
        submitButton: {
            text: t("getReport"),
            handler: () => { }
        }
    }
    const girlTxtOptions = {
        name: {
            onChange: handleOnChange,
            id: 'txtKunName',
            name: 'name',
            width: '100%',
            value: kundaliData.girl.name,
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
            value: kundaliData.girl.birthPlace,
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
            value: kundaliData.girl.mobile,
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
            value: kundaliData.girl.gender,
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
            value: kundaliData.girl.day,
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
            value: kundaliData.girl.month,
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
            value: kundaliData.girl.year,
            data: common.getNumberArray(new Date().getFullYear() - 100, new Date().getFullYear()),
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
            value: kundaliData.girl.hour,
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
            value: kundaliData.girl.minute,
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
            value: kundaliData.girl.second,
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        }
    }
    const btnOptions = {
        nextButton: {
            text: t("next"),
            handler: handleNext
        },
        preButton: {
            text: t("previous"),
            handler: handlePre
        },
        submitButton: {
            text: t("getReport"),
            handler: () => { }
        }
    }
    if (!isNext) {
        return (
            <div className='kun-box'>
                <div className='kun-box-header'>
                    <img alt='Banner' src='/images/MatchBoy.jpg'></img>
                    <div className='ast-tag-line'>
                        {t('enterBoyDetails')}
                    </div></div>
                <div className='row row-cols-2'>
                    <div className='col dflex'>
                        <AstTextbox option={boyTxtOptions.name}></AstTextbox>
                        <AstTextbox option={boyTxtOptions.mobile}></AstTextbox>
                    </div>
                    <div className='col dflex'>
                        <AstSelect option={boyTxtOptions.gender}></AstSelect>
                        <AstSelect option={boyTxtOptions.days}></AstSelect>
                        <AstSelect option={boyTxtOptions.months}></AstSelect>
                        <AstSelect option={boyTxtOptions.years}></AstSelect>
                    </div>
                    <div className='col dflex'>
                        <AstTextbox option={boyTxtOptions.birthPlace}></AstTextbox>
                        <AstSelect option={boyTxtOptions.hour}></AstSelect>
                        <AstSelect option={boyTxtOptions.minute}></AstSelect>
                        <AstSelect option={boyTxtOptions.second}></AstSelect>
                    </div>
                    <div className='col-12'>
                        <div className='mat-buttons'>

                            <AstButton option={btnOptions.nextButton}></AstButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='kun-box'>
                <div className='kun-box-header'>
                    <img alt='Bannner' src='/images/matchGirl.jpg'></img>
                    <div className='ast-tag-line'>
                        {t('enterGirlDetails')}
                    </div>
                </div>
                <div className='row row-cols-2'>
                    <div className='col dflex'>
                        <AstTextbox option={girlTxtOptions.name}></AstTextbox>
                    </div>
                    <div className='col dflex'>
                        <AstSelect option={girlTxtOptions.gender}></AstSelect>
                        <AstSelect option={girlTxtOptions.days}></AstSelect>
                        <AstSelect option={girlTxtOptions.months}></AstSelect>
                        <AstSelect option={girlTxtOptions.years}></AstSelect>
                    </div>
                    <div className='col dflex'>
                        <AstTextbox option={girlTxtOptions.birthPlace}></AstTextbox>
                        <AstSelect option={girlTxtOptions.hour}></AstSelect>
                        <AstSelect option={girlTxtOptions.minute}></AstSelect>
                        <AstSelect option={girlTxtOptions.second}></AstSelect>
                    </div>
                    <div className='col-12'>
                        <div className='mat-buttons'>
                            <AstButton option={btnOptions.preButton}></AstButton>
                            <AstButton option={btnOptions.submitButton}></AstButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
