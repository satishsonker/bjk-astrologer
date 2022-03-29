import React, { useState } from 'react'
import { common } from '../../common/common'
import '../../css/components/common/JanmKundali.css'
import AstButton from '../Controls/AstButton'
import AstSelect from '../Controls/AstSelect'
import AstTextbox from '../Controls/AstTextbox'
export default function KundaliMatch() {
    const [kundaliData, setKundaliData] = useState({});
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
    const txtOptions = {
        name: {
            onChange: handleOnChange,
            id: 'txtKunName',
            name: 'name',
            width: '100%',
            value: kundaliData.name,
            placeHolder: 'Name',
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
            placeHolder: 'Birth Place',
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
            placeHolder: 'Mobile',
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
            defaultText: 'Gender',
            className: 'me-2 mb-2',
            value: kundaliData.gender,
            data: ['Male', 'female', "Other"],
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
            defaultText: 'Day',
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
            defaultText: 'Month',
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
            defaultText: 'Year',
            width: '100%',
            value: kundaliData.year,
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
            defaultText: 'Hour',
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
            defaultText: 'Minute',
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
            defaultText: 'Second',
            value: kundaliData.second,
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        nextButton: {
            text: "Next",
            handler: handleNext
        },
        preButton: {
            text: "Previous",
            handler: handlePre
        },
        submitButton: {
            text: "Get Report",
            handler: () => { }
        }
    }
    if (!isNext) {
        return (
            <div className='kun-box'>
                <div className='kun-box-header'>
                    <img src='/images/MatchBoy.jpg'></img>
                    <div className='ast-tag-line'>
                        Enter Boy's Details
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
                        <div className='mat-buttons'>

                            <AstButton option={txtOptions.nextButton}></AstButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else
        {
            return (
                <div className='kun-box'>
                    <div className='kun-box-header'>
                        <img src='/images/matchGirl.jpg'></img>
                        <div className='ast-tag-line'>
                        Enter Girl's Details
                        </div></div>
                    <div className='row row-cols-2'>
                        <div className='col dflex'>
                            <AstTextbox option={txtOptions.name}></AstTextbox>
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
                            <div className='mat-buttons'>
                            <AstButton option={txtOptions.preButton}></AstButton>
                                <AstButton option={txtOptions.submitButton}></AstButton>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}
