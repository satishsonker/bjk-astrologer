import React from 'react';
import '../../css/AdminHeader.css';
import { Link } from "react-router-dom";

export default function AdminHeader({setIsAdminPageOpen}) { 
    return (
        <div className='adm-header'>
            <div className='adm-header-left'>
                <div className='adm-header-logo'>
                    <img src='/images/logo/bjkLogo32.png' alt='logo'/>
                </div>
                <div className='adm-header-name'>AstroBhashkar - Admin</div>
            </div>
            <div className='adm-header-right'>
            <div className='adm-header-logo'>
              <Link to='/' onClick={e=>setIsAdminPageOpen(false)}>  <i className="fas fa-external-link-alt"></i> Open Main Site</Link>
                </div>
            </div>
        </div>
    )
}
