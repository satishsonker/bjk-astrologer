import React, { useState, useEffect } from 'react'
import { common } from '../../common/common';
import '../../css/components/common/AstroFilter.css';

export default function AstroFilter({ showFilter, onCloseFilter }) {
    onCloseFilter = common.defaultIfEmpty(onCloseFilter, () => { });
    const [_showFilter, setShowFilter] = useState(false);
    const [filterString, setFilterString] = useState({});
    useEffect(() => {
        setShowFilter(showFilter);
    }, [showFilter]);

    const handleCloseFilter = () => {
        setShowFilter(false);
        onCloseFilter(false);
    }

    const handleFilterSelection = (e, filterName, value) => {
        let _filterString = filterString;
        let filterValue = common.defaultIfEmpty(_filterString[filterName], "");
        let newFilterValue = common.defaultIfEmpty(_filterString[filterName], "");
        if (e.target.checked && filterValue.indexOf(value) === -1) {
            newFilterValue += filterValue === "" ? value : "," + value;
            _filterString[filterName] = newFilterValue;
        }
        else {
            newFilterValue = filterValue.replace("," + value, "");
            _filterString[filterName] = newFilterValue;
        }

        setFilterString(_filterString);

    }

    const [filterData, setFilterData] = useState([
        {
            filterName: "Expertise",
            data: ["Vedic Astrology", "KP System", "Lal Kitab", "Numerology", "Tarot Reading", "Marriage Matching", "Vastu", " Reiki", "Feng Shui", "Horary", "Nadi Astrology"]
        },
        {
            filterName: "Language",
            data: ["English", "Hindi (हिंदी)", "Gujarati (ગુજરાતી)", "Marathi (मराठी)", "Kannada (ಕನ್ನಡ)", "Malayalam (മലയാളം)", "Odia (ଓଡ଼ିଆ)", "Bengali (বাংলা)", "Punjabi (ਪੰਜਾਬੀ)", "Tamil (தமிழ்)", "Telugu (తెలుగు)", " Urdu (اردو)"]
        },
        {
            filterName: "Price & Rating",
            data: ["Price Low To High", "Price High To Low", "Rating High To Low"]
        }
    ])
    if (_showFilter)
        return (
            <div className='filter-layover'>
                <div className='filter-container'>
                    <div className='btn-filter-close'>
                        <div className='btn-filter-close' onClick={e => handleCloseFilter()}><i className='fas fa-times'></i> Close</div>
                    </div>
                    <div className='filter-container-inner'>
                        <div className="accordion" id="accordionExample">
                            {
                                filterData?.map((ele, ind) => {
                                    return <div key={common.getElementKey()} className="accordion-item">
                                        <h2 className="accordion-header" id={"heading_" + ind}>
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_" + ind} aria-expanded="true" aria-controls={"collapse_" + ind}>
                                                {ele.filterName}
                                            </button>
                                        </h2>
                                        <div id={"collapse_" + ind} className={ind === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={"heading_" + ind} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className='filter-list' key={common.getElementKey()}>
                                                    {
                                                        ele.data.map(dEle => {
                                                            return <li key={common.getElementKey()} className='filter-list-item'>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" onClick={e => handleFilterSelection(e, ele.filterName, dEle)} type="checkbox" id="flexSwitchCheckChecked" />
                                                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{dEle}</label>
                                                                </div>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    else {
        return <div></div>
    }
}
