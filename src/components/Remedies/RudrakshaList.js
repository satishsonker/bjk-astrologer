import React,{useState,useEffect} from 'react'
import { common } from '../../common/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../css/components/Remedies/Remedies.css';

export default function RudrakshaList({option}) {
    const { t } = useTranslation();
    option = common.defaultIfEmpty(option, {});
    option.headerText = common.defaultIfEmpty(option.headerText, `${t("listOf", { word: t("rudraksh") })}`);
    option.displayHeader = common.defaultIfEmpty(option.displayHeader, false);
    option.class = common.defaultIfEmpty(option.class, ``);
    const [rudraList, setRudraList] = useState([]);
    useEffect(() => {
        var data=[];
        for(var i=1;i<=21;i++)
        {
            data.push({
                name:`${i} ${t('mukhi')} ${t('rudraksh')}`,
                imagePath:`/Images/icons/${i}mukhi48.png`,
                path:`/remedies/rudraksha/${i}`
            });
        }
        setRudraList(data);
    }, [])
    
    return (
        <div className={option.class}>
            {option.displayHeader && <p className='planet-list-header'>{option.headerText}</p>}
            <ul className='planet-list'>
                {
                   rudraList.map(ele=>{
                        return  <Link key={common.getElementKey()} to={ele.path}><li><img src={ele.imagePath} alt={ele.name} /> {ele.name}</li></Link>
                   })
                }
                </ul>
        </div>
    )
}
