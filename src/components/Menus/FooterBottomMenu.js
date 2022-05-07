import React from 'react'
import '../../css/components/common/Footer.css';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Unsubscribe from '../PopupModels/Unsubscribe';

export default function FooterBottomMenu() {
    const { t } = useTranslation();
    return (
        <>
            <div className='row row-cols-1 row-cols-md-4'>
                <div className='col'>
                    <div className='list-container'>
                        <div className='list-header'>{t("Online")} {t("Consult")}</div>
                        <ul className="list">
                            <li className="list-item"><a href="/astrologer/chat">Chat with Astrologer</a></li>
                            <li className="list-item"><a href="/talk-to-astrologers">{t("astrologers")} </a></li>
                            <li className="list-item"><a href="/astrologer/tarot-reader">{t("tarot")} {t("readers")}</a></li>
                            <li className="list-item"><a href="/astrologer/numerologist">{t("numerologists")}</a></li>
                            <li className="list-item"><a href="/astrologer/vastu">{t("vastu")} {t("experts")}</a></li>
                            <li className="list-item"><a href="/astrologer/feng-shui">{t("fengshui")} {t("experts")}</a></li>
                            <li className="list-item"><a href="/astrologer/career">{t("career")} {t("astrologer")}</a></li>
                            <li className="list-item"><a href="/astrologer/love">{t("love")} {t("astrologer")}</a></li>
                            <li className="list-item"><a href="/astrologer/finance">{t("financial")} {t("astrologer")}</a></li>
                            <li className="list-item"><a href="/astrologer/marriage">{t("marriage")} {t("astrologer")}</a></li>
                            <li className="list-item"><a href="/astrologer/money">{t("money")} {t("astrologer")}</a></li>
                            <li className="list-item"><a href="/astrologer/daily-life">{t("specialist")} {t("astrologer")}</a></li>
                            <li className="list-item"><a href="/horoscope2022">{t("horoscope")} {new Date().getFullYear()}</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col'>
                    <div className='list-container'>
                        <div className='list-header'>{t("important")} {t("link")}</div>
                        <ul className="list">
                            <li className="list-item active"><Link to='/ContactUs'>{t("contactUs")}</Link></li>
                            <li className="list-item">{t("feedback")}</li>
                           <li className="list-item"><Link to='/AboutUs'> {t("aboutUs")}</Link></li>
                            <li className="list-item"><Link to="/privacypolicy">{t("privacy")} {t("policy")}</Link></li>
                            <li className="list-item"><Link to="/tnc">{t("terms")} {t("and")} {t("conditions")}</Link></li>
                            <li className="list-item">{t("astrologers")} {t("ka")} {t("registration")}</li>
                            <li className="list-item" data-bs-toggle="modal" data-bs-target="#unsubscribeModal">{t("unsubscribe")}</li>
                            
                        </ul>
                    </div>
                </div>
                <div className='col'>
                    <div className='list-container'>
                        <div className='list-header'>{t("secure")}</div>
                        <ul className="list">
                            <li className="list-item dflex">
                            <i className="fas fa-hand-holding-usd"></i>{t("money")} {t("back")} {t("gaurantee")}
                            </li>
                            <li className="list-item dflex"><i className="fas fa-user-check"></i>{t("verified")} {t("astrologers")}</li>
                            <li className="list-item dflex"><i className="fas fa-lock"></i> 100% {t("secure")} {t("payment")}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Unsubscribe option={{email:"btech.csit@gmail"}}></Unsubscribe>
        </>
    )
}
