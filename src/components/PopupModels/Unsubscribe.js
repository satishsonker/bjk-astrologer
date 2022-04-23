import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Api } from '../../apis/Api';
import { apiUrls } from '../../apis/apiUrl';
import { common } from '../../common/common';
import AstButton from '../Controls/AstButton';
import AstSelect from '../Controls/AstSelect';
import AstTextbox from '../Controls/AstTextbox';
import { toast } from 'react-toastify';

export default function Unsubscribe({ option }) {
    option = common.defaultIfEmpty(option, {});
    option.email = common.defaultIfEmpty(option.email, '');
    const [postData, setPostData] = useState({ email: option.email, UnsubscribeReason: '' });
    const [unsubReason, setUnsubReason] = useState([]);
    const { t } = useTranslation();
    const handleOnChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    }
    const handleOnClick = (e) => {
        Api.Post(apiUrls.subscribeController.deleteSubscribe, postData).
            then(res => {
                if (res.data == 1) {
                    toast.success(t('completed'));
                    setPostData({email:"",UnsubscribeReason:""});
                    document.getElementById('unsubscribeModalClose').click();
                }
                else
                toast.warn(`${'unableToUnsubscribeYourEmail'} ${'pleaseTryLater'}`);
            })
    }
    useEffect(() => {
        Api.Get(apiUrls.subscribeController.getUnsubscribeReason + `?collectionName=UnsubscribeReason`)
            .then(res => {
                var data = [];
                res.data?.map(ele => {
                    data.push({ id: ele.key, value: ele.value });
                })
                setUnsubReason(data);
            })
    }, [])

    const txtOptions = {
        email: {
            onChange: handleOnChange,
            id: 'txtEmail',
            name: 'name',
            type: 'email',
            width: '100%',
            value: postData.email,
            placeHolder: t('email'),
            hasValidation: true,
            showLabel: true,
            labelText: `${t('enterYour', { word: t('email') })}`,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        btn: {
            text: t('unsubscribe'),
            handler: handleOnClick,
            width: '25%',
            class: 'mx-3'
        },
        reason: {
            onChange: handleOnChange,
            id: 'ddlUnsubscribeReason',
            name: 'UnsubscribeReason',
            width: '100%',
            defaultText: t('gender'),
            className: 'me-2 mb-2',
            value: postData.UnsubscribeReason,
            data: unsubReason,
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        }

    }
    return (
        <div className="modal fade" id="unsubscribeModal" tabIndex="-1" aria-labelledby="unsubscribeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="unsubscribeModalLabel">{t('unsubscribeNewsLetter')}</h5>
                        <button type="button" id='unsubscribeModalClose' style={{ position: 'inherit' }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AstTextbox option={txtOptions.email}></AstTextbox>
                        <AstSelect option={txtOptions.reason}></AstSelect>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="ast-btn" style={{ width: '25%' }} data-bs-dismiss="modal">{t('close')}</button>
                        <AstButton option={txtOptions.btn}></AstButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
