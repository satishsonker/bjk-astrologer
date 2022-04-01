import React from 'react'
import { common } from '../../common/common.js'
import { Link } from "react-router-dom";

export default function Header({ setIsLeftMenuActive, isLeftMenuActive }) {
    const handleLeftMenuActiveState = () => {
        isLeftMenuActive = common.defaultIfEmpty(isLeftMenuActive, false);
        setIsLeftMenuActive(!isLeftMenuActive);
    }
    return (
        <>
            <div className='bjk-nav'>
                <div className="d-flex justify-content-between">
                    <div className="p-2 bd-highlight"><i onClick={e => handleLeftMenuActiveState()} className={!isLeftMenuActive ? "humberger-bar fa-solid fa-bars" : "humberger-bar fa-solid fa-xmark"}></i>
                    </div>
                    <div className="p-2 bd-highlight">
                        <img alt='Logo' className='logo-name' src='../Images/logo/bjkLogoName.png' />
                    </div>
                    <div className="form-check form-switch">

                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">EN</label>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">HI</label>
                    </div>
                    <Link to='/home'><div className="p-2 bd-highlight"><img alt='Logo' className='logo' src='../Images/logo/bjkLogo64.png' /></div></Link>
                </div>
            </div>
        </>
    )
}
