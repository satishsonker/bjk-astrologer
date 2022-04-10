import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';
import { AppConfigConsumer } from '../../Context/ConfigContext';
import { useTranslation } from "react-i18next";
import AstTextbox from '../Controls/AstTextbox';
import AstButton from '../Controls/AstButton';
export default function LoginForm({ setHaveAccount }) {
    const {t}=useTranslation();
    const [loginData, setLoginData] = useState({});
    const handleHaveAccount = () => {
        setHaveAccount(false);
    }
    const handleOnChange=(e)=>{
setLoginData({...loginData,[e.target.name]:e.target.value})
    }
    const txtOptions = {
        email: {
            onChange: handleOnChange,
            id: 'txtEmail',
            name: 'email',
            width: '100%',
            value: loginData.email,
            placeHolder: t('email'),
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        password: {
            onChange: handleOnChange,
            type:"password",
            id: 'txtPassword',
            name: 'password',
            width: '100%',
            value: loginData.password,
            placeHolder: t('password'),
            className: 'me-2 mb-2',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
        },
        loginBtn:{
            text:t('login')
        }
    }
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <>
         <AppConfigConsumer>
                {
                    (config) => {
                        return <>
            <div className="mb-3 text-center signup-header">
               {t('loginToApp',{appName:config.app.appName})}
            </div>
            <div className="mb-2">
                <AstTextbox option={txtOptions.email}></AstTextbox>
                </div>
            <div className="mb-3">
            <AstTextbox option={txtOptions.password}></AstTextbox>
            </div>
            <div className="my-3 signup-btn">
                <AstButton option={txtOptions.loginBtn}></AstButton>
            </div>
            <div className="my-3 signup-msg">
               {t('alreadyNotAccount')}? <strong onClick={e => handleHaveAccount()} className='clickable'>{t('signup')}</strong>
            </div>
            <hr></hr>
            <div className='row row-col-2'>
                            <div className='col p3'>
                                {
                                    config.socialButton.google.enable &&
                                    <GoogleLogin className='login-social-btn'
                                        clientId="394604212634-urqqp0kr7cf09ftqhrlq5lbfd1ol6jnl.apps.googleusercontent.com"
                                        buttonText= {t("google")+" "+ t("login")}
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                    />
                                }
                            </div>
                            {
                                config.socialButton.facebook.enable &&
                                <div className='col p3'>
                                    <button className='login-social-btn'><i className="fab fa-facebook-f"></i>{t("facebook")+" "+ t("login")}</button>
                                </div>
                            }
                        </div>
                        </>
                    }
                }
            </AppConfigConsumer>
        </>
    )
}
