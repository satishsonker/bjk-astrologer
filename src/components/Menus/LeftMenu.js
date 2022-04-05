import React, { useEffect, useState } from 'react'
import { common } from '../../common/common';
import '../../css/components/common/LeftMenu.css';
import Signup from '../Login/Signup';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function LeftMenu({ option, isActive, userDetails, setting }) {
    option.isAuthenticated = common.defaultIfEmpty(option.isAuthenticated, true);
    option.setIsLeftMenuActive = common.defaultIfEmpty(option.setIsLeftMenuActive, () => { });
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {t}=useTranslation();
    const RupeeIcon=({height=16,width=16})=>{
       return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 320 512"><path d="M308 96c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v44.748c0 6.627 5.373 12 12 12h85.28c27.308 0 48.261 9.958 60.97 27.252H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h158.757c-6.217 36.086-32.961 58.632-74.757 58.632H12c-6.627 0-12 5.373-12 12v53.012c0 3.349 1.4 6.546 3.861 8.818l165.052 152.356a12.001 12.001 0 0 0 8.139 3.182h82.562c10.924 0 16.166-13.408 8.139-20.818L116.871 319.906c76.499-2.34 131.144-53.395 138.318-127.906H308c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-58.69c-3.486-11.541-8.28-22.246-14.252-32H308z"/></svg>
    }
    useEffect(() => {
        setIsMenuOpen(isActive);
    }, [isActive])

    const handleMenuClose = (isOpen) => {
        setIsMenuOpen(isOpen);
        option.setIsLeftMenuActive(isOpen);
    }
    const handleShowLoginSignup = (type) => {
        setIsMenuOpen(false);
        option.setIsLeftMenuActive(false);
        switch (type) {
            case 'login':
                setShowLogin(true);
                setShowSignUp(false);
                break;
            case 'signup':
                setShowLogin(false);
                setShowSignUp(true);
                break;
        }
    }
    return (
        <>
            <div className={isMenuOpen ? 'left-menu-layover left-menu-layover-active' : 'left-menu-layover'} onClick={e => handleMenuClose(false)}>
                <div className={isMenuOpen ? 'left-menu left-menu-active' : 'left-menu'}>
                   <ul className='menu'>
                        <li className='menu-item'>
                            <ul className='left-menu-card-list'>
                                <li className='left-menu-card-list-item'><img alt='Logo' className='logo-name' src='../Images/logo/bjkLogoName.png' /></li>
                                {option.isAuthenticated &&
                                    <li className='left-menu-card-list-item'>
                                        <div className='user-logo'>
                                            <img alt='User Profile' src='/images/top_header_user_profile.png'></img>
                                        </div>
                                        <span>{t("welcome_guest")}</span></li>
                                }
                            </ul>
                        </li>
                        <Link to="/Home" >
                            <li className='menu-item'>
                                <i className="fa-solid fa-house-user"></i> <span>{t("home")}</span>
                            </li>
                        </Link>
                        {!option.isAuthenticated &&
                            <>
                                <li className='menu-item' onClick={e => handleShowLoginSignup('signup')} data-bs-toggle="modal" data-bs-target="#loginSignupModel">
                                    <i className="fa-solid fa-user"></i> <span>{t("signup")}</span>
                                </li>
                                <li className='menu-item' onClick={e => handleShowLoginSignup('login')} data-bs-toggle="modal" data-bs-target="#loginSignupModel">
                                    <i className="fa-solid fa-user"></i> <span>{t("login")}</span>
                                </li>
                            </>}
                        <Link to="/Astrologers">
                            <li className='menu-item'>
                                <i className="fa-solid fa-house-user"></i> <span>{t("astrologers")}</span>
                            </li>
                        </Link>
                        {option.isAuthenticated &&
                            <>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-user"></i> <span>{t("profile")}</span>
                                </li>
                                <Link to="/Wallet">
                                <li className='menu-item'>
                                    <i className="fa-solid fa-wallet"></i> <span>{t("wallet")}</span><span className='r-icon'><RupeeIcon></RupeeIcon> 0.00</span>
                                </li>
                                </Link>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-bookmark"></i> <span>{t("bookmark")}</span>
                                </li>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-headset"></i> <span>Call History</span>
                                </li>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-comments"></i> <span>Chat History</span>

                                </li>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-receipt"></i> <span>Recharge History</span>
                                </li>
                                <Link to="/FAQ">
                                    <li className='menu-item'>
                                    <i className="fas fa-question-circle"></i> <span>FAQs</span>
                                    </li>
                                </Link>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-right-from-bracket"></i> <span>Logout</span>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </div>
            <Signup showLogin={showLogin} showSignup={showSignUp}></Signup>
        </>
    )
}
