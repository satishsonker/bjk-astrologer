import React from 'react'
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import '../../css/components/common/common.css';
import { AppConfigConsumer } from '../../Context/ConfigContext';

export default function PrivacyPolicy() {
    const { t } = useTranslation();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('privacy')} ${t('policy')}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='pp-header'>
                {t('privacy')} {t('policy')}
            </div>
            <AppConfigConsumer>
                {
                    (config) => {
                        return <>
                            <p className='pp-para'>
                                We at {config.app.appName} ("we" or "{config.app.appName}") we take the privacy of the information you provide us very seriously. We created this privacy policy to demonstrate our commitment to privacy. Please read this carefully to understand how we use any information you provide us at {config.app.appDomain}
                            </p>
                            <ul className='pp-list'>
                                <li>{config.app.appName} guarantees confidentiality of our members' identity, birth details and any forecasts made using those details as much possible under legal regulatory and security environment.</li>
                                <li>{config.app.appName} further guarantees that no direct or indirect use will be made by {config.app.appName} about any information that is revealed in the prediction for a member, except for the explicit purpose of communicating the horoscope charts and predictions back to the member.</li>
                                <li>We allow members to access their users profiles and change information, as they deem necessary.</li>
                                <li>We do not sell or rent your personally identifiable information to anyone</li>
                            </ul>
                            <div className='pp-para'>
                                As we keep adding new services and items, we suggest that you check back from time to time in order to understand how we treat your information. In case of change in our privacy policy, we will post those changes on this page so that you are always aware of what personal information we collect, how we use it and under what circumstances we disclose it. Your continued use of the site will constitute your acknowledgment of our Privacy Policy.
                            </div>
                            <div className='pp-para'>
                                The items below provide an index to the information that follows:
                            </div>
                            <div className='pp-para-heading'>
                                1. What personal information we collect?
                            </div>
                            <div className='pp-para-sub-heading'>
                                a. Registration Data
                            </div>
                            <div className='pp-para-sub'>
                                During membership registration, {config.app.appName} collects personal information including your name, gender, birth information, email address, and your place of birth and residence. This information is used to calculate your accurate horoscope. Your e-mail address together with a password is used to secure your profile and to make our personalized e-mail services available to you. You do not have to provide any personal information to use {config.app.appName}'s services. However, if you choose not to become a member of {config.app.appName}, we may not be able to provide you with some of the other services that require such information e.g. personalized free horoscopes.
                            </div>
                            <div className='pp-para-sub-heading'>
                                b. Log Files, IP Address and Cookies
                            </div>
                            <div className='pp-para-sub'>
                                When you visit {config.app.appDomain} and interact with the services and tools that reside there, {config.app.appName} and third parties with whom {config.app.appName} has contracted to provide services to {config.app.appName} may collect information on your actions. The purpose of this information collection is generally to gather broad demographic information that is not personal. We also use your IP address to help diagnose problems with our software or our server and to administer our website. We track the visitor IP address to get more information on visitor's demography e.g. which parts of the world our traffic comes from. We collect browser types used, screen resolutions, and time spent on the website to analyze trends, administer and troubleshoot the site, understand user linking and disliking within the website. All of this information is used for gathering broad demographic data to enhance the performance and services of the site.
                            </div>
                            <div className='pp-para-sub-heading'>
                                c. Through Order Forms
                            </div>
                            <div className='pp-para-sub'>
                                We gather information that is required to fulfill our paid services though our order forms. This personal is maintained in strict confidence. As stated earlier, we guarantee confidentiality of our members' identity, birth details and the prediction made possible under legal regulatory and security environment. {config.app.appName} further guarantees that no direct or indirect use will be made by {config.app.appName} about any information that is revealed in the prediction for a member, except for the explicit purpose of communicating the horoscope charts and predictions back to the member.
                            </div>
                            <div className='pp-para-sub-heading'>
                                d. Other information
                            </div>
                            <div className='pp-para-sub'>
                                Any other information we receive due to email or other method of contact in regard to specific services or products, as a general rule, are not made part of your member profile, and are used only to address your specific need or concern that you may have communicated to us on.
                            </div>
                            <div className='pp-para-heading'> 2. Security</div>
                            <p className='pp-para'>We DO NOT collect any payment information on our website. It is collected and processed in a secured manner by third party payment gateways. We follow reasonable industry standards, technical measures and procedural measures to protect against unauthorized access and use of your supplied information. However, you should know that neither we nor any other web site can fully eliminate all the risks.</p>

                            <div className='pp-para-heading'>3. Other web sites links</div>
                            <p className='pp-para'>Our web site may contain links to other web sites. {config.app.appName} is not responsible for the privacy practices followed by other such web sites.</p>

                            <div className='pp-para-heading'>4. Contacting us</div>
                            <p className='pp-para'>If you have any questions about this privacy statement, the practices of this site, or your dealings with this web site, you can contact us at customercare@{config.app.appDomain}</p>
                        </>
                    }
                }
            </AppConfigConsumer>
        </>
    )
}
