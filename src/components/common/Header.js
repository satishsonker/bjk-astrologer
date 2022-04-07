import React,{useEffect} from 'react'
import { common } from '../../common/common.js'
import { Link } from "react-router-dom";
import 'flag-icons/css/flag-icons.css';
import '../../css/components/common/Header.css';
import i18Next from 'i18next';
import { useTranslation } from "react-i18next";
import cookies from 'js-cookie';

export default function Header({ setIsLeftMenuActive, isLeftMenuActive }) {
    const { t } = useTranslation();
    const currentLangCode=cookies.get('i18next') || 'en'; 
    const langArray = [
        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
            dir:"ltr"
        },
        {
            code: 'hi',
            name: 'हिन्दी',
            country_code: 'in',
            dir:"ltr"
        }
    ]
    const currentLang=langArray.find(l=>l.code===currentLangCode);
    useEffect(() => {
      document.body.dir=currentLang.dir || 'ltr';
      document.title=`${t("bhashkar")} ${t("jyotish")} ${t("kendra")}`;
    }, [currentLang,t]);
   
    const GlobleIcon = ({ width = 16, height = 16 }) => {
        return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
        </svg>
    }
    const BellIcon = ({ width = 16, height = 16 }) => {
        return <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
        </svg>
    }
    const handleLeftMenuActiveState = () => {
        isLeftMenuActive = common.defaultIfEmpty(isLeftMenuActive, false);
        setIsLeftMenuActive(!isLeftMenuActive);
    }
    return (
        <>
            <div className='bjk-nav'>
                <div className="d-flex justify-content-between">
                    <div className="p-2 bd-highlight">
                        <div className='panel'>
                        <i onClick={e => handleLeftMenuActiveState()} className={!isLeftMenuActive ? "humberger-bar fa-solid fa-bars" : "humberger-bar fa-solid fa-xmark"}></i>
                        <div className='notify'>
                            <span className='ast-badge'>1</span>
                            <BellIcon></BellIcon>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-information dropdown-toggle" type="button" id="ddlLang" data-bs-toggle="dropdown" aria-expanded="false">
                                <GlobleIcon></GlobleIcon> {currentLangCode.toUpperCase()}
                            </button>
                            <ul className="dropdown-menu langDdl" aria-labelledby="ddlLang">
                                <li className='dropdown-item-text text-small bb-1'>{t("language_name")}</li>
                                {langArray.map((ele) => {
                                    return <button key={common.getElementKey()} className='dropdown-item' disabled={currentLangCode===ele.code} onClick={e => i18Next.changeLanguage(ele.code)}>
                                        <span className={`fi fi-${ele.country_code} mx-2`}></span>
                                        {ele.name}</button>
                                })}
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                    <div className="bd-highlight">
                        <div className='logo-text'>{t("bhashkar")} {t("jyotish")} {t("kendra")}</div>
                        {/* <span>{t("भास्कर ज्योतिष केंद्र")}</span> */}
                    </div>
                    <div className="bd-highlight">
                          <Link to='/home'><div className="p-2 bd-highlight"><img alt='Logo' className='logo' src='../Images/logo/bjkLogo64.png' /></div></Link>
                
                    </div>


                </div>
            </div>
        </>
    )
}
