import React, { useState, useEffect } from 'react'
import { common } from '../../common/common';
import '../../css/components/common/AstroFilter.css';
import { useTranslation } from "react-i18next";

export default function AstroFilter({ showFilter, onCloseFilter }) {
    const { t } = useTranslation();
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
    const parseTransKey=(key)=>{
        debugger;
        var data= key.indexOf('(')===-1?key:key.substr(0,key.indexOf('(')).trim();
        return data;
    }

    const [filterData, setFilterData] = useState([
        {
            filterName: t("expertise"),
            data: [t("vedic_astrology"),t("lal_kitab"), t("numerology"), t("tarot_reading"), t("marriage_matching"), t("vastu"), t("reiki"), t("feng_shui"), t("horary"), t("nadi_astrology")]
        },
        {
            filterName: t("language"),
            data: [t("english"), t("hindi"), t("gujarati"), t("marathi"), t("kannada"), t("malayalam"), t("odia"), t("bengali"), t("punjabi"), t("tamil"), t("telugu"), t("urdu")]
        },
        {
            filterName: t("price_rating"),
            data: [t("price_low_to_high"), t("price_high_to_low"), t("rating_high_to_low")]
        }
    ])
    if (_showFilter)
        return (
            <div className='filter-layover'>
                <div className='filter-container'>
                    <div className='btn-filter-close'>
                        <div className='btn-filter-close' onClick={e => handleCloseFilter()}><i className='fas fa-times'></i> {t("close")}</div>
                    </div>
                    <div className='filter-container-inner'>
                        <div className="accordion" id="accordionExample">
                            {
                                filterData?.map((ele, ind) => {
                                    return <div key={common.getElementKey()} className="accordion-item">
                                        <h2 className="accordion-header" id={"heading_" + ind}>
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_" + ind} aria-expanded="true" aria-controls={"collapse_" + ind}>
                                                {t(ele.filterName)}
                                            </button>
                                        </h2>
                                        <div id={"collapse_" + ind} className={ind === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={"heading_" + ind} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ul className='filter-list' key={common.getElementKey()}>
                                                    {
                                                        ele.data.map(dEle => {
                                                            return <li key={common.getElementKey()} className='filter-list-item'>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" onClick={e => handleFilterSelection(e, t(ele.filterName), t(dEle))} type="checkbox" id="flexSwitchCheckChecked" />
                                                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{t(dEle)}</label>
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
