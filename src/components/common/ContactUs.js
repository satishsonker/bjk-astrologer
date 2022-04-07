import React from 'react'
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import '../../css/components/common/ContactUs.css';
import SoulMateSmall from '../Love/SoulMateSmall';
import { AppConfigConsumer } from '../../Context/ConfigContext';
import ContactForm from './ContactForm';

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
                <div className="gmap_canvas" style={{ overflow: "hidden", background: "none!important", height: "294px", width: "100vw" }}>
                    <iframe style={{ height: "294px", width: "100vw" }} id="gmap_canvas" src="https://maps.google.com/maps?q=bhashkar%20jyotish%20kendra%20jhusi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://123movies-to.org"></a><br />
                    <a href="https://www.embedgooglemap.net">google embedded</a>
                </div>
            </div>
            <AppConfigConsumer>
                {
                    (config) => {
                        return <div className='row row-cols-1 row-cols-md-2'>
                            <div className='col'>
                                <div className='con-line'>
                                    <div className='con-icon'><i className="fas fa-map-marker-alt"></i></div>
                                    <div className='con-text'>6/121 E.W.S, Awas Vikash Colony, Yojana No. 3, Jhusi, Prayagraj - 211019</div>
                                </div>
                                <div className='con-line'>
                                    <div className='con-icon'><i className="fas fa-mobile-alt"></i></div>
                                    <div className='con-text'>{config.contact.mobileNo}</div>
                                </div>
                                <div className='con-line'>
                                    <div className='con-icon'><i className="fab fa-whatsapp"></i></div>
                                    <div className='con-text'>{config.contact.whatsappNo}</div>
                                </div>
                            </div>
                            <div className='col form-container'>
                               <ContactForm></ContactForm>
                            </div>
                        </div>
                    }
                }
            </AppConfigConsumer>
        </>
    )
}
