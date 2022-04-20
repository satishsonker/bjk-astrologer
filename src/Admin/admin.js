import React, { useEffect, useState } from 'react'
import {
    Outlet
} from "react-router-dom";
import AdminHeader from './Components/Header/AdminHeader';
import AdminLeftMenu from './Components/Menus/AdminLeftMenu';
import './css/Admin.css';
import './css/AdminRoot.css';

export default function Admin({ setIsAdminPageOpen }) {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true)
    useEffect(() => {
        setIsAdminPageOpen(true);
    }, []);

    return (
        <>
            <AdminHeader setIsAdminPageOpen={setIsAdminPageOpen}></AdminHeader>
            <AdminLeftMenu setIsMenuCollapsed={setIsMenuCollapsed}></AdminLeftMenu>
            <div className={isMenuCollapsed ? 'admin-area' : 'admin-area-expande'}>
                <Outlet></Outlet>
            </div>
        </>
    )
}
