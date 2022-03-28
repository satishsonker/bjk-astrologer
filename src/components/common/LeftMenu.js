import React, { useEffect, useState } from 'react'
import { common } from '../../common/common';
import '../../css/components/common/LeftMenu.css';
import Signup from '../Login/Signup';
import { Link } from "react-router-dom";
export default function LeftMenu({ option, isActive, userDetails, setting }) {
    option.isAuthenticated = common.defaultIfEmpty(option.isAuthenticated, true);
    option.setIsLeftMenuActive = common.defaultIfEmpty(option.setIsLeftMenuActive, () => { });
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
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
            <div className={isMenuOpen ? 'left-menu-layover left-menu-layover-active' : 'left-menu-layover'}>
                <div className={isMenuOpen ? 'left-menu left-menu-active' : 'left-menu'}>
                    {/* <div className='left-menu-card'>
                        <ul className='left-menu-card-list'>
                            <li className='left-menu-card-list-item'><img alt='' className='logo-name' src='../Images/logo/bjkLogoName.png' /></li>
                            <li className='left-menu-card-list-item'><i className="fa-solid fa-user"></i> <span>User name</span></li>
                        </ul>
                        <div className="p-2 bd-highlight"></div>

                    </div> */}
                    <ul className='menu'>
                        <li className='menu-item'>
                            <ul className='left-menu-card-list'>
                                <li className='left-menu-card-list-item'><img alt='' className='logo-name' src='../Images/logo/bjkLogoName.png' /></li>
                                {option.isAuthenticated &&
                                    <li className='left-menu-card-list-item'>
                                        <div className='user-logo'>
                                            <img  src='/images/top_header_user_profile.png'></img> 
                                            </div>
                                        <span>User name</span></li>
                                }
                            </ul>
                        </li>
                        <Link to="/Home" onClick={e=>handleMenuClose(false)}>
                            <li className='menu-item'>
                                <i className="fa-solid fa-house-user"></i> <span>Home</span>
                            </li>
                        </Link>
                        {!option.isAuthenticated &&
                            <>
                                <li className='menu-item' onClick={e => handleShowLoginSignup('signup')} data-bs-toggle="modal" data-bs-target="#loginSignupModel">
                                    <i className="fa-solid fa-user"></i> <span>Signup</span>
                                </li>
                                <li className='menu-item' onClick={e => handleShowLoginSignup('login')} data-bs-toggle="modal" data-bs-target="#loginSignupModel">
                                    <i className="fa-solid fa-user"></i> <span>Login</span>
                                </li>
                            </>}
                        <Link to="/Astrologers" onClick={e=>handleMenuClose(false)}>
                            <li className='menu-item'>
                                <i className="fa-solid fa-house-user"></i> <span>Astrologers</span>
                            </li>
                        </Link>
                        {option.isAuthenticated &&
                            <>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-user"></i> <span>Profile</span>
                                </li>
                                <li className='menu-item' onClick={e => alert('hi')}>
                                    <i className="fa-solid fa-wallet"></i>  <span>Wallet</span>
                                </li>
                                <li className='menu-item'>
                                    <i className="fa-solid fa-bookmark"></i> <span>Bookmark</span>
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
