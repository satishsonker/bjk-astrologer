import React,{useEffect} from 'react'
import '../../css/components/common/LeftMenu.css';
export default function LeftMenu({option,isActive,userDetails,setting}) {
    useEffect(() => {
      console.log(isActive);
    }, [isActive])
    
    return (
        <>
        <div className='left-menu-layover'>
        <div className={isActive?'left-menu left-menu-active':'left-menu'}>
            <ul className='menu'>                
                <li className='menu-item'>
                <i className="fa-solid fa-house-user"></i> <span>Home</span>
                </li>
                <li className='menu-item'>
                <i className="fa-solid fa-user"></i> <span>Profile</span>
                   
                </li>
                <li className='menu-item'>
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
        </div></div>
        </>
    )
}
