import React, { useState } from 'react';
import '../../css/components/Profile/Profile.css';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import AstTextbox from '../Controls/AstTextbox';
import AstSelect from '../Controls/AstSelect';
import { common } from '../../common/common';

export default function UserProfile({ googleLoginData }) {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
    const [isEditProfile, setIsEditProfile] = useState(false);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }
    const handleEditProfile = (val) => {
        val = common.defaultIfEmpty(val, true);
        setIsEditProfile(val);
    };
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('users')} ${t('profile')}`, isActive: false }];
    const [userData, setUserData] = useState({});
    const languages = [{
        value: t('hindi'),
        id: 'hi'
    }, {
        value: t('english'),
        id: 'en'
    }];
    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    const txtOption = {
        firstName: {
            onChange: handleOnChange,
            id: 'txtFirstName',
            readOnly: !isEditProfile,
            name: 'firstName',
            width: '100%',
            value: userData.firstName,
            placeHolder: `${t('first')} ${t('name')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('first')} ${t('name')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        flatNo: {
            onChange: handleOnChange,
            id: 'txtFlatNo',
            readOnly: !isEditProfile,
            name: 'flatNo',
            width: '100%',
            value: userData?.flatNo,
            placeHolder: `${t('house')}/${t('flat')}/${t('apartment')} ${t('no.')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('house')}/${t('flat')}/${t('apartment')} ${t('no.')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        landmark: {
            onChange: handleOnChange,
            id: 'txtLandMark',
            readOnly: !isEditProfile,
            name: 'landmark',
            width: '100%',
            value: userData?.landmark,
            placeHolder: `${t('street')}/${t('society')}/${t('landmark')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('street')}/${t('society')}/${t('landmark')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        city: {
            onChange: handleOnChange,
            id: 'txtCity',
            readOnly: !isEditProfile,
            name: 'city',
            width: '100%',
            value: userData?.city,
            placeHolder: `${t('city')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('city')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        state: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            id: 'ddlState',
            name: 'state',
            width: '100%',
            defaultText: t('select', { word: t('state') }),
            className: 'me-2 mb-2',
            value: userData.gender,
            data: common.stateArray,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('state')}`,
            showHelpText: false,
        },
        district: {
            onChange: handleOnChange,
            id: 'txtDistrict',
            readOnly: !isEditProfile,
            name: 'district',
            width: '100%',
            value: userData?.district,
            placeHolder: `${t('district')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('district')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        country: {
            onChange: handleOnChange,
            id: 'txtCountry',
            readOnly: !isEditProfile,
            name: 'country',
            width: '100%',
            value: userData?.country,
            placeHolder: `${t('country')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('country')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        pinCode: {
            onChange: handleOnChange,
            id: 'txtPinCode',
            type: "number",
            readOnly: !isEditProfile,
            min: 100000,
            max: 999999,
            name: 'pinCode',
            width: '100%',
            value: userData?.pinCode,
            placeHolder: `${t('pinCode')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('pinCode')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        email: {
            onChange: handleOnChange,
            id: 'txtEmail',
            name: 'email',
            readOnly: true,
            type: "email",
            width: '100%',
            value: userData.email,
            placeHolder: `${t('email')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('email')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        lastName: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            id: 'txtLastName',
            name: 'lastName',
            width: '100%',
            value: userData.lastName,
            placeHolder: `${t('surname')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('surname')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        mobile: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            id: 'txtMobile',
            name: 'mobile',
            width: '100%',
            value: userData.mobile,
            placeHolder: t('mobile'),
            className: 'me-2 mb-2',
            hasValidation: true,
            showLabel: true,
            labelText: `${t('mobile')}`,
            showHelpText: false,
        },
        gender: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            id: 'ddlGender',
            name: 'gender',
            width: '100%',
            defaultText: t('select', { word: t('gender') }),
            className: 'me-2 mb-2',
            value: userData.gender,
            data: [t('male'), t('female'), t("other")],
            hasValidation: true,
            showLabel: true,
            labelText: `${t('gender')}`,
            showHelpText: false,
        },
        language: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            id: 'ddlLanguage',
            name: 'language',
            width: '100%',
            defaultText: t('select', { word: t('language') }),
            className: 'me-2 mb-2',
            value: userData.language,
            data: languages,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('language')}`,
            showHelpText: false,
        },
        days: {
            onChange: handleOnChange,
            id: 'ddlDay',
            name: 'day',
            width: '100%',
            className: 'me-2 mb-2',
            value: userData.day,
            defaultText: t('select', { word: t('day') }),
            data: common.getNumberArray(1, 31),
            hasValidation: true,
            showLabel: false,
            labelText: `${t('dateOfBirth')}`,
            showHelpText: false,
        },
        months: {
            onChange: handleOnChange,
            id: 'ddlMonth',
            name: 'month',
            width: '100%',
            defaultText: t('select', { word: t('month') }),
            className: 'me-2 mb-2',
            value: userData.month,
            data: common.getNumberArray(1, 12),
            hasValidation: true,
            showLabel: false,
            labelText: `${t('month')}`,
            showHelpText: false,
        },
        years: {
            onChange: handleOnChange,
            id: 'ddlYear',
            name: 'year',
            defaultText: t('select', { word: t('year') }),
            width: '100%',
            value: userData.year,
            data: common.getNumberArray(new Date().getFullYear() - 70, new Date().getFullYear()),
            hasValidation: true,
            showLabel: false,
            labelText: `${t('year')}`,
            showHelpText: false,
            className: 'me-2 mb-2'
        },
        hour: {
            onChange: handleOnChange,
            id: 'ddlHour',
            name: 'hour',
            width: '100%',
            defaultText: t('select', { word: t('hour') }),
            value: userData.hour,
            className: 'me-2 mb-2',
            data: common.getNumberArray(1, 23),
            hasValidation: true,
            showLabel: false,
            labelText: `${t('timeOfBirth')}`,
            showHelpText: false,
        },
        minute: {
            onChange: handleOnChange,
            id: 'ddlMinute',
            name: 'minute',
            defaultText: t('select', { word: t('minute') }),
            width: '100%',
            value: userData.minute,
            className: 'me-2 mb-2',
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: false,
            labelText: `${t('minute')}`,
            showHelpText: false,
        },
        second: {
            onChange: handleOnChange,
            id: 'ddlSecond',
            name: 'second',
            width: '100%',
            defaultText: t('select', { word: t('seconds') }),
            value: userData.second,
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: false,
            labelText: `${t('seconds')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        }
    }
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='pro-shadow'>
                <div className='pro-tab'>
                    <ul>
                        <li onClick={e => handleTabClick(0)} className={activeTab == 0 ? "li-active" : ""}>{t("primary")} {t("details")}</li>
                        <li onClick={e => handleTabClick(1)} className={activeTab == 1 ? "li-active" : ""}>{t("contact")} {t("details")}</li>
                        <li onClick={e => handleTabClick(2)} className={activeTab == 2 ? "li-active" : ""}>{t("astrology")} {t("details")}</li>
                    </ul>
                    <div className='pro-controls'>
                        <div className="btn-group btn-group-sm">
                            {!isEditProfile && <a href="#" title='Edit Profile' onClick={e => handleEditProfile()} className="btn btn-outline-secondary" aria-current="page">{t("edit")} <i className="far fa-edit"></i></a>}
                            {isEditProfile && <a href="#" title='Edit Profile' className="btn btn-outline-secondary" aria-current="page">{t("save")} <i className="far fa-save"></i></a>}
                            {isEditProfile && <a href="#" title='Cancel Edit' onClick={e => handleEditProfile(false)} className="btn btn-outline-secondary" aria-current="page">{t("cancel")} <i className="fas fa-times"></i></a>}
                        </div>
                    </div>
                </div>
                {
                    activeTab == 0 &&
                    <div className='pro-tab-data'>

                        <div className='container'>
                            <AstTextbox option={txtOption.email}></AstTextbox>
                            <AstTextbox option={txtOption.firstName}></AstTextbox>
                            <AstTextbox option={txtOption.lastName}></AstTextbox>
                            <AstTextbox option={txtOption.mobile}></AstTextbox>
                            <AstSelect option={txtOption.gender}></AstSelect>
                            <AstSelect option={txtOption.language}></AstSelect>
                        </div>
                    </div>
                }
                {
                    activeTab == 1 &&
                    <div className='pro-tab-data'>
                        <div className='container'>
                            <AstTextbox option={txtOption.flatNo}></AstTextbox>
                            <AstTextbox option={txtOption.landmark}></AstTextbox>
                            <AstTextbox option={txtOption.city}></AstTextbox>
                            <AstTextbox option={txtOption.district}></AstTextbox>
                            <AstSelect option={txtOption.state}></AstSelect>
                            <AstTextbox option={txtOption.pinCode}></AstTextbox>
                            <AstTextbox option={txtOption.country}></AstTextbox>
                        </div>
                    </div>
                }
                {
                    activeTab == 2 &&
                    <div className='pro-tab-data'>
                        <div className='container'>
                            <div className='row row-cols-3'>
                            <div className='col-12'>{t("dateOfBirth")}</div>
                                <div className='col'>
                                    <AstSelect option={txtOption.days}></AstSelect>
                                </div>
                                <div className='col'>
                                    <AstSelect option={txtOption.months}></AstSelect>
                                </div>
                                <div className='col'>
                                    <AstSelect option={txtOption.years}></AstSelect>
                                </div>
                                <div className='col-12'>{t("timeOfBirth")}</div>
                                <div className='col'>
                                    <AstSelect option={txtOption.hour}></AstSelect>
                                </div>
                                <div className='col'>
                                    <AstSelect option={txtOption.minute}></AstSelect>
                                </div>
                                <div className='col'>
                                    <AstSelect option={txtOption.second}></AstSelect>
                                </div>
                                <div className='col-12'>{t("birthPlace")}</div>
                                <div className='col'>
                                    <AstTextbox option={txtOption.district}></AstTextbox>
                                </div>
                                <div className='col'>
                                    <AstSelect option={txtOption.state}></AstSelect>
                                </div>
                                <div className='col'>
                                    <AstSelect option={txtOption.country}></AstSelect>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
