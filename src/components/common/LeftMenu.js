import React, { useEffect } from 'react'
import '../../css/components/common/LeftMenu.css';
export default function LeftMenu({ option, isActive, userDetails, setting }) {
     return (
        <>
            <div className={isActive ? 'left-menu-layover left-menu-layover-active' : 'left-menu-layover'}>
                <div className={isActive ? 'left-menu left-menu-active' : 'left-menu'}>
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
                                <li className='left-menu-card-list-item'><i className="fa-solid fa-user"></i> <span>User name</span></li>
                            </ul>
                        </li>
                        <li className='menu-item'>
                            <i className="fa-solid fa-house-user"></i> <span>Home</span>
                        </li>
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
                    </ul>
                </div>
            </div>
        </>
    )
}
