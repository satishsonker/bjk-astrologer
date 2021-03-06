import React, { useState,useEffect } from 'react';
import '../../css/components/Profile/Profile.css';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import AstTextbox from '../Controls/AstTextbox';
import AstSelect from '../Controls/AstSelect';
import { common } from '../../common/common';
import AstCheckbox from '../Controls/AstCheckbox';
import { useNavigate } from "react-router-dom";

export default function UserProfile({ googleLoginData }) {    
    let navigate = useNavigate();
    useEffect(() => {
        if(!googleLoginData?.profileObj?.name)
        {
            navigate('/');
        }
    }, [googleLoginData]);
    
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
        if(e.target.type==="checkbox")
        {
            setUserData({ ...userData, [e.target.name]: userData.knowBirthTime===undefined?false:!userData.knowBirthTime });
        }
        else
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
            data: common.countryArray,
            defaultText: `${t('select', { word: t('country') })}`,
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
        dateOfBirth: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            id: 'txtDate',
            type:'date',
            name: 'dateOfBirth',
            width: '100%',
            placeHolder: t("dateOfBirth"),
            value: userData.hour,
            className: 'me-2 mb-2',
            hasValidation: true,
            showLabel: true,
            labelText: `${t('dateOfBirth')}`,
            showHelpText: false,
        },
        timeOfBirth: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            type:'time',
            id: 'txtTime',
            name: 'timeOfBirth',
            placeHolder: t('timeOfBirth'),
            width: '100%',
            value: userData.timeOfBirth,
            className: 'me-2 mb-2',
            data: common.getNumberArray(0, 59),
            hasValidation: true,
            showLabel: true,
            labelText: `${t('timeOfBirth')}`,
            showHelpText: false,
        },
        birthState: {
            onChange: handleOnChange,
            readOnly: !isEditProfile,
            id: 'ddlState',
            name: 'birthState',
            width: '100%',
            defaultText: t('select', { word: t('state') }),
            className: 'me-2 mb-2',
            value: userData.birthState,
            data: common.stateArray,
            hasValidation: true,
            showLabel: false,
            labelText: `${t('state')}`,
            showHelpText: false,
        },
        birthDistrict: {
            onChange: handleOnChange,
            id: 'txtDistrict',
            readOnly: !isEditProfile,
            name: 'birthDistrict',
            width: '100%',
            value: userData?.birthDistrict,
            placeHolder: `${t('district')}`,
            hasValidation: true,
            showLabel: false,
            labelText: `${t('district')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        birthCountry: {
            onChange: handleOnChange,
            id: 'ddlCountry',
            readOnly: !isEditProfile,
            name: 'birthCountry',
            width: '100%',
            value: userData?.birthCountry,
            defaultText: `${t('select', { word: t('country') })}`,
            data: common.countryArray,
            hasValidation: true,
            showLabel: false,
            labelText: `${t('country')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        knowBirthTime: {
            onChange: handleOnChange,
            id: 'chkKnowBirthTime',
            disabled: !isEditProfile,
            name: 'knowBirthTime',
            width: '100%',
            value: userData?.knowBirthTime,
            text: `${t('dontKnowbirthTime')}`,
            hasValidation: true,
            showLabel: true,
            labelText: `${t('iKnowbirthTime')}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
    }
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='pro-shadow'>
                <div className='pro-tab'>
                    <ul>
                        <li onClick={e => handleTabClick(0)} className={activeTab === 0 ? "li-active" : ""}>{t("primary")} {t("details")}</li>
                        <li onClick={e => handleTabClick(1)} className={activeTab === 1 ? "li-active" : ""}>{t("contact")} {t("details")}</li>
                        <li onClick={e => handleTabClick(2)} className={activeTab === 2 ? "li-active" : ""}>{t("astrology")} {t("details")}</li>
                    </ul>
                    <div className='pro-controls'>
                        <div className="btn-group btn-group-sm">
                            {!isEditProfile && <button title='Edit Profile' onClick={e => handleEditProfile()} className="btn btn-outline-secondary" aria-current="page">{t("edit")} <i className="far fa-edit"></i></button>}
                            {isEditProfile && <button title='Edit Profile' className="btn btn-outline-secondary" aria-current="page">{t("save")} <i className="far fa-save"></i></button>}
                            {isEditProfile && <button title='Cancel Edit' onClick={e => handleEditProfile(false)} className="btn btn-outline-secondary" aria-current="page">{t("cancel")} <i className="fas fa-times"></i></button>}
                        </div>
                    </div>
                </div>
                {
                    activeTab === 0 &&
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
                    activeTab === 1 &&
                    <div className='pro-tab-data'>
                        <div className='container'>
                            <AstTextbox option={txtOption.flatNo}></AstTextbox>
                            <AstTextbox option={txtOption.landmark}></AstTextbox>
                            <AstTextbox option={txtOption.city}></AstTextbox>
                            <AstTextbox option={txtOption.district}></AstTextbox>
                            <AstSelect option={txtOption.state}></AstSelect>
                            <AstTextbox option={txtOption.pinCode}></AstTextbox>
                            <AstSelect option={txtOption.country}></AstSelect>
                        </div>
                    </div>
                }
                {
                    activeTab === 2 &&
                    <div className='pro-tab-data'>
                        <div className='container'>
                            <AstTextbox option={txtOption.dateOfBirth}></AstTextbox>
                            
                            <AstCheckbox option={txtOption.knowBirthTime}></AstCheckbox>
                            {(userData.knowBirthTime===undefined?true:userData.knowBirthTime) &&
                            <AstTextbox option={txtOption.timeOfBirth}></AstTextbox>
}
                            <div className='row row-cols-3'>
                                <div className='col-12 px-0'>{t("birthPlace")}</div>
                                <div className='col p-0'>
                                    <AstTextbox option={txtOption.birthDistrict}></AstTextbox>
                                </div>
                                <div className='col'>
                                    <AstSelect option={txtOption.birthState}></AstSelect>
                                </div>
                                <div className='col p-0'>
                                    <AstSelect option={txtOption.birthCountry}></AstSelect>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
