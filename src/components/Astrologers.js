import React, { useState, useEffect } from 'react'
import AstroFilter from './common/AstroFilter'
import AstroList from './common/AstroList'
import '../css/components/Astrologer.css'
import useWindowDimensions from '../Hooks/userWindowDimensions'

export default function Astrologers() {
    const [_showFilter, setShowFilter] = useState(false);
    const { width } = useWindowDimensions();
    useEffect(() => {
        if (width >= 768) {
            setShowFilter(true);
        }
        else
            setShowFilter(false)
    }, [width])

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    const handleShowFilter = () => {
        setShowFilter(true);
    }
    return (
        <>
            <div className='ast-list'>
                <div className='ast-filter-container'>
                    <AstroFilter showFilter={_showFilter} onCloseFilter={setShowFilter} ></AstroFilter>
                </div>
                <div className='btn-filter-container'>
                    <div className='ast-view'></div>
                    <div onClick={e => handleShowFilter()} className='btn-filter'><i className='fas fa-filter' /> Filter</div>
                </div>

                <div className='ast-list-container'>
                    <div className='ast-tag-line'>
                        We have Best and Certified Astrologers
                    </div>
                    <AstroList></AstroList>
                </div>
            </div>
        </>
    )
}
