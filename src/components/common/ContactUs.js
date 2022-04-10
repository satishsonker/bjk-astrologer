import React from 'react'
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import '../../css/components/common/ContactUs.css';
import { AppConfigConsumer } from '../../Context/ConfigContext';
import ContactForm from './ContactForm';
import AskQuestionBanner from '../Banner/AskQuestionBanner';
import SubscribeBanner from '../Banner/SubscribeBanner';

export default function ContactUs() {
    const { t } = useTranslation();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('contactUs')}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='con-heading'>{t('contactUs')}</div>
            <div className="mapouter" style={{ height: "294px", width: "100vw", position: "relative", textAlign: "right" }}>
                <div className="gmap_canvas" style={{ overflow: "hidden", background: "none !important", height: "294px", width: "100vw" }}>
                    <iframe title='Google Map' style={{ height: "294px", width: "100vw" }} id="gmap_canvas" src="https://maps.google.com/maps?q=bhashkar%20jyotish%20kendra%20jhusi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
                    <a href="https://www.embedgooglemap.net">google embedded</a>
                </div>
            </div>
            <AppConfigConsumer>
                {
                    (config) => {
                        return<>
                         <div className='row row-cols-1 row-cols-md-2 con-details'>
                            <div className='col'>
                                <div className='con-line'>
                                    <div className='con-icon'><i className="fas fa-map-marker-alt"></i></div>
                                    <div className='con-text'>6/121 {t("ews")} {t("awas")} {t("vikash")} {t("colony")} {t("yojana")} {t("no.")} {t("jhusi")} {t("prayagraj")} - 211019</div>
                                </div>
                                <div className='con-line'>
                                    <div className='con-icon'><i className="fas fa-at"></i></div>
                                    <div className='con-text'>{config.contact.customerCareEmail}</div>
                                </div>
                                <div className='con-head'>{t('connectWithUs')}</div>
                                <div className='con-line-center'>
                                <a href={`mailto:${config.contact.customerCareEmail}?subject=Query from ${config.app.appDomain}`}>
                                    <div className='con-icon'>
                                        <i className="fas fa-at"></i>
                                        </div>
                                        </a>
                                <a href={`tel:${config.contact.mobileNo}`}>
                                    <div className='con-icon'>
                                        <i className="fas fa-mobile-alt"></i>
                                        </div>
                                        </a>
                                    <a href={`https://api.whatsapp.com/send?text=${config.app.appShareUrl}`} data-action="share/whatsapp/share">
                                        <div className='con-icon whatsapp'>
                                            <i className="fab fa-whatsapp"></i>
                                        </div>
                                    </a>
                                    <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(config.app.appShareUrl)}&amp;src=sdkprepars`} className="fb-xfbml-parse-ignore">
                                        <div className='con-icon facebook'>
                                            <i className="fab fa-facebook"></i>
                                        </div>
                                    </a>
                                    <a href={`https://twitter.com/intent/tweet?text=${config.app.appShareUrl}`}>
                                        <div className='con-icon twitter'>
                                            <i className="fab fa-twitter"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col form-container'>
                                <ContactForm></ContactForm>
                            </div>
                        </div>
                        <AskQuestionBanner></AskQuestionBanner>
                        <SubscribeBanner></SubscribeBanner>
                        </>
                    }
                }
            </AppConfigConsumer>
        </>
    )
}
