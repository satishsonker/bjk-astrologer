import React, { useState, useEffect } from 'react'
import AstroFilter from '../common/AstroFilter'
import AstroList from '../common/AstroList'
import '../../css/components/Astrologer.css'
import useWindowDimensions from '../../Hooks/userWindowDimensions';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';

export default function Astrologers() {    
    const {t}=useTranslation();
    const [_showFilter, setShowFilter] = useState(false);
    const { width } = useWindowDimensions();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('astrologer')}`, isActive:false }];
    useEffect(() => {
        if (width >= 768) {
            setShowFilter(true);
        }
        else
            setShowFilter(false)
    }, [width]);
    
    const handleShowFilter = () => {
        setShowFilter(true);
    }
    return (
        <>
         <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='ast-list'>
               
                <div className='ast-filter-container'>
                    <AstroFilter showFilter={_showFilter} onCloseFilter={setShowFilter} ></AstroFilter>
                </div>
                <div className='btn-filter-container'>
                    <div className='ast-view'></div>
                    <div onClick={e => handleShowFilter()} className='btn-filter'><i className='fas fa-filter' />{t("filter")}</div>
                </div>

                <div className='ast-list-container'>
                    <div className='ast-tag-line'>
                        {t("best_astro")}
                    </div>
                    <AstroList></AstroList>
                </div>
            </div>
        </>
    )
}
