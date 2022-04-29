import React,{useState,useEffect} from 'react'
import { common } from '../../common/common';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../css/components/Remedies/Remedies.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
                name:`${i}`,
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
                        return  <Link key={common.getElementKey()} to={ele.path+'#mukhi'+ele.name}><li><LazyLoadImage src={ele.imagePath} alt={`${ele.name} ${t('mukhi')} ${t('rudraksh')}`} /> {`${ele.name} ${t('mukhi')} ${t('rudraksh')}`}</li></Link>
                   })
                }
                <Link to="/remedies/rudraksha/ganesh"><li><LazyLoadImage src="/Images/icons/GaneshaRudraksha48.png" alt={`${t('ganesh')} ${t('rudraksh')}`} /> {`${t('ganesh')} ${t('rudraksh')}`}</li></Link>
                <Link to="/remedies/rudraksha/garbhGauri"><li><LazyLoadImage src="/Images/icons/garbhGauriRudraksha48.png" alt={`${t('garbhGauri')} ${t('rudraksh')}`} /> {`${t('garbhGauri')} ${t('rudraksh')}`}</li></Link>
                <Link to="/remedies/rudraksha/gauriShankar"><li><LazyLoadImage src="/Images/icons/gauriShankharRudraksha48.png" alt={`${t('gauriShankar')} ${t('rudraksh')}`} /> {`${t('gauriShankar')} ${t('rudraksh')}`}</li></Link>
                </ul>
        </div>
    )
}
