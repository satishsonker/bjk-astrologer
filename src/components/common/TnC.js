import React from 'react'
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common/Breadcrumb';
import '../../css/components/common/common.css';
import { AppConfigConsumer } from '../../Context/ConfigContext';

export default function TnC() {
    const { t } = useTranslation();
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: `${t('terms')} ${t('and')} ${t('conditions')}`, isActive: false }];
    return (
        <>
            <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='pp-header'>
                {t('terms')} {t('and')} {t('conditions')}
            </div>
            <AppConfigConsumer>
                {
                    (config) => {
                        return <>
                            <p className='pp-para'>THE FOLLOWING SETS FORTH THE TERMS AND CONDITIONS UNDER WHICH {config.app.appDomain.toUpperCase()} SERVICES ("{config.app.appName}" OR "{config.app.appDomain.toUpperCase()}" OR "WE" OR "OUR") OFFERS YOU ACCESS TO OUR SERVICES.</p>

                            <p className='pp-para'>WELCOME! WHEN USING {config.app.appDomain.toUpperCase()} SERVICES, YOU ("MEMBER" OR "YOU" OR "YOUR") AGREE TO THE TERMS AND CONDITIONS DESCRIBED HEREIN ("TERMS OF SERVICE").</p>

                            <p className='pp-para'>ACCEPTANCE OF TERMS OF SERVICE: PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING THE SERVICES PROVIDED BY {config.app.appDomain.toUpperCase()} VIA OUR WEBSITE (WHICH IS CURRENTLY LOCATED AT WWW.{config.app.appDomain.toUpperCase()} -- THIS "WEBSITE"). BY CLICKING THE "I AGREE" BUTTON, YOU SIGNIFY THAT YOU AGREE WITH THESE TERMS OF SERVICE.</p>

                            <p className='pp-para'>THESE TERMS OF SERVICE MAY BE AMENDED BY {config.app.appDomain.toUpperCase()} AT ANY TIME IN OUR DISCRETION BY POSTING THE AMENDED TERMS ON OUR WEBSITE. IF YOU BECAME A MEMBER PRIOR TO THE POSTING OF AMENDED TERMS ON OUR WEBSITE, THE AMENDED TERMS SHALL AUTOMATICALLY BE EFFECTIVE 30 DAYS AFTER THEY ARE INITIALLY POSTED ON OUR SITE. YOU AGREE THAT YOUR CONTINUED USE OF THIS WEBSITE AFTER SUCH AMENDMENT SHALL SIGNIFY YOUR ACCEPTANCE OF SUCH CHANGE. THIS AGREEMENT MAY NOT BE OTHERWISE AMENDED EXCEPT BY A WRITING SIGNED BY BOTH YOU AND {config.app.appDomain.toUpperCase()}</p>
                            <div className='pp-para-heading'>
                                1. DESCRIPTION OF {config.app.appDomain} :
                            </div>
                            <div className='pp-para-sub'>
                                {config.app.appDomain} provides astrological content, reports, data, telephone and email consultations ("Content") via the World Wide Web, electronic mail. Although portions of the Content may be viewed simply by visiting the {config.app.appDomain} site (the "Free Services" and "Paid Service"), in order to access the personalized astrological zone and/or receive additional Content and services from {config.app.appDomain} (the "Paid Services"), You may need to register as a member of {config.app.appDomain} to receive certain Paid Services. The Free Services and the Paid Services are referred to collectively in these Terms of Service as the "Services." In consideration for the Paid Services, Member agrees to:
                            </div>
                            <ol className='pp-list'>
                                <li>
                                    provide certain current, complete, and accurate information about Member as prompted to do so by {config.app.appDomain} and
                                </li>
                                <li>
                                    maintain and update this information as required to keep it current, complete and accurate. All information that We request and You provide on original sign-up, and all updates thereto, are referred to in these Terms of Service as "Registration Data." Many of the Services and Content are provided by third party suppliers and not by {config.app.appDomain}.
                                </li>
                            </ol>
                            <div className='pp-para-heading'>
                                2. MEMBER ELIGIBILITY:
                            </div>
                            <div className='pp-para-sub'>
                                The Services are available only to individuals who can form legally binding contracts under applicable law. Without limiting the foregoing, the Services are not permitted to be used by minors (which means, in most jurisdictions, those under the age of 18) or temporarily or indefinitely suspended {config.app.appDomain} members. In addition, {config.app.appDomain} does not permit use of the Services by residents (a) of any jurisdiction that may prohibit our Services or (b) of any country that are prohibited by law, regulation, treaty or administrative act from entering into trade relations. If you do not qualify, please do not use the Services.
                            </div>
                            <div className='pp-para-heading'>
                                3. MEMBER REGISTRATION DATA:
                            </div>
                            <div className='pp-para-sub'>
                                Upon registration, including Your provision of Registration Data, You will receive an {config.app.appDomain} identification ("YOUR EMAIL ID ") and a password. You are entirely responsible if You do not maintain the confidentiality of Your {config.app.appDomain} EMAILID and password. You are responsible for all uses of Your account, whether or not actually or expressly authorized by you. You may change Your password by following instructions on the Website. You agree that Your account, EMAILID, and password may not be transferred or sold to another party. You agree to immediately notify {config.app.appDomain} of any unauthorized use of Your account or any other breach of security known to You.
                            </div>
                            <div className='pp-para-heading'>
                                4. OUR ACCESS TO YOUR ACCOUNT:
                            </div>
                            <div className='pp-para-sub'>
                                In order to ensure that {config.app.appDomain} is able to provide high quality services, respond to customer needs, and comply with laws, You hereby consent to {config.app.appDomain} employees and agents being able to access Your account and records on a case-by-case basis to investigate complaints or other allegations or suspected abuse.
                            </div>
                            <div className='pp-para-heading'>
                                5. MODIFICATION TO SERVICES; BREACH:
                            </div>
                            <div className='pp-para-sub'>
                                TERMINATION: {config.app.appDomain} may modify or discontinue (in whole or in part) the Services or Your account with us, with or without notice, for any reason without liability to You, any other user, or any third party. Without limiting the foregoing, We reserve the right to terminate Your account immediately (a) if We are unable to verify or authenticate Your Registration Data or other information provided by You, (b) if We believe that Your actions may cause legal liability for You, {config.app.appDomain}, or all or some of Our other users, or (c) if We believe You have (i) provided us with false or misleading Registration Data or other information, (ii) interfered with other users or the administration of the Services, or (iii) violated these Terms of Service or our Privacy Policy.
                            </div>
                            <div className='pp-para-heading'>
                                6. PRIVACY POLICY:
                            </div>
                            <div className='pp-para-sub'>
                                Privacy is very important to us, and as such, Our Privacy Policy, as it may be updated from time to time, available on the Website, is incorporated into these Terms of Service by this reference. We may amend Our Privacy Policy from time to time pursuant to the terms for amending this Terms of Service (as described in the Preamble above).
                            </div>
                            <div className='pp-para-heading'>
                                7. REFUND &amp; CANCELLATION POLICY:
                            </div>
                            <div className='pp-para-sub-heading'>
                                Comprehensive Return &amp; Cancellation Policy Service
                            </div>
                            <ul className='pp-list'>
                                <li>
                                    Refund will be considered only if customer mail us at customercare@{config.app.appDomain} within 2 hour of payment. No refund shall be entertained after expiry of two hour from the time of payment.
                                </li>
                                <li>
                                    No refund shall be made if data provided by customer is incorrect. However, if customer mail us within an hour of ordering the report, we will consider the changes to be made.
                                </li>
                                <li>
                                    Once the report is delivered to customer, no refund shall be made.
                                </li>
                                <li>
                                    All eligible refunds shall be made within seven business days from the date of receipt of request. However, the same is subject to transaction and processing time taken by bank/payment gateway.
                                </li>
                                <li>
                                    In case of double payment made by mistake against the single order, one payment will be refunded.
                                </li>
                                <li>
                                    All refunds will be made after deducting the transaction charges levied by the bank and / or the payment gateway, or any other charges that may have been borne by {config.app.appDomain} in processing and / or delivering the service, as applicable.
                                </li>
                            </ul>
                            <div className='pp-para-sub-heading'>
                                Comprehensive Return &amp; Cancellation Policy Product
                            </div>
                            <ul className='pp-list'>
                                <li>
                                    All printable products including {config.app.appName} Brihat Horoscope, {config.app.appName} Year Book, Trikal Samhita and Janam Patri are non-returnable.
                                </li>
                                <li>
                                    If the customer found product in damaged/defective/broken condition, customer may apply for replacement or refund. For this customer may mail at customercare@{config.app.appDomain} within two working days of delivery of product. No refund shall be entertained after expiry of two days from the date of delivery of product.
                                </li>
                                <li>
                                    All the products must be returned in the original condition they were received in along with any bills and labels. Customer need to register dispute by sending email to customercare@{config.app.appDomain} with images of broken/defective/damaged products within 2 days of delivery. Disputes registered after two days of delivery may not be entertained by sellers.
                                </li>
                                <li>
                                    In case of double payment made by mistake against the single order, one payment will be refunded.
                                </li>
                                <li>
                                    All refunds will be made after deducting the transaction charges levied by the bank and / or the payment gateway, the cost of shipping or courier charges (back and forth), customs duty and / or any other charges that may have been borne by {config.app.appDomain} in processing and / or delivering the service, as applicable. However, no recovery of above mentioned shall be made if refund is due to damaged/defective/ broken product.
                                </li>
                            </ul>
                            <div className='pp-para-heading'>
                                8. MEMBER BEHAVIOR AND RESTRICTIONS; COMPLIANCE WITH LAWS:
                            </div>
                            <div className='pp-para-sub'>
                                COMPLIANCE WITH LAWS: Your right to use the Services is personal to You. You represent that You are an individual and that You are not a corporation or other business entity. You agree not to resell or make any commercial use of the Services without the express written consent of {config.app.appDomain}. You are solely responsible for the contents of Your transmissions through Our Website. Your use of the Services is subject to all applicable local, state, national and international laws and regulations. You agree:
                            </div>
                            <ol className='pp-list'>
                                <li>
                                    to comply with all Indian laws regarding the transmission of technical data exported from the India through the Service;
                                </li>
                                <li>
                                    not to use the Website or the Services for illegal purposes;
                                </li>
                                <li>
                                    not to interfere or disrupt networks connected to {config.app.appDomain};
                                </li>
                                <li>
                                    to comply with all applicable regulations, policies and procedures of networks connected to the {config.app.appDomain} Website; and
                                </li>
                                <li>
                                    to comply with all applicable domestic and international laws, statutes, ordinances and regulations regarding Your use of the Services. {config.app.appDomain} makes use of the Internet to send and receive certain messages; therefore, Your conduct is subject to Internet regulations, policies, and procedures. You will not use {config.app.appDomain} for chain letters, junk mail, spamming, or any use of distribution lists to any person who has not given specific permission to be included in such a process. You agree not to transmit through {config.app.appDomain} any unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene or otherwise objectionable material of any kind or nature. You further agree not to transmit any material that encourages conduct that could constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national or international law or regulation. Attempts to gain unauthorized access to other computer systems are prohibited. You shall not interfere with any other {config.app.appDomain} members' use or enjoyment of the Website or Services.
                                </li>
                            </ol>
                            <div className='pp-para-heading'>
                                9. NO WARRANTY. YOU UNDERSTAND AND AGREE THAT:
                            </div>
                            <ol className='pp-list'>
                                <li>
                                    THE SERVICES ARE PROVIDED "AS-IS" AND WITH ALL FAULTS. {config.app.appDomain} ASSUMES NO RESPONSIBILITY FOR AVAILABILITY (OR LACK THEREOF), TIMELINESS (OR LACK THEREOF), DELETIONS, MISDELIVERIES, OR FAILURES TO STORE ANY MEMBER COMMUNICATIONS OR PERSONALIZATION SETTINGS;
                                </li>
                                <li>
                                    IN PARTICULAR, BUT NOT BY WAY OF LIMITATION, {config.app.appDomain} MAY DELETE E-MAIL OR OTHER ACCOUNTS OR THE INFORMATION THEREIN IF THE ACCOUNT IS INACTIVE FOR MORE THAN NINETY (90) DAYS;
                                </li>
                                <li>
                                    USE OF THE SERVICES IS AT YOUR SOLE RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL AND/OR DATA;
                                </li>
                                <li>
                                    THE SERVICES ARE PROVIDED FOR ENTERTAINMENT PURPOSES ONLY AND {config.app.appDomain}, ON BEHALF OF ITSELF AND ITS SUPPLIERS, DISCLAIMS ALL WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT AND IT MAKES NO WARRANTY OR REPRESENTATION REGARDING THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF CONTENT OR SERVICES, THE ACCURACY OR RELIABILITY OF ANY CONTENT OBTAINED THROUGH THE SERVICES, ANY GOODS OR SERVICES PURCHASED OR OBTAINED THROUGH {config.app.appDomain}'S WEBSITE, OR ANY TRANSACTIONS ENTERED INTO THROUGH {config.app.appDomain}'S SITE, AND MAKES NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE OR ERROR FREE. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM {config.app.appDomain} OR THROUGH THE SERVICES SHALL CREATE ANY WARRANTY.
                                </li>
                            </ol>
                            <div className='pp-para-heading'>
                                10. LIMITATIONS OF LIABILITY:
                            </div>
                            <div className='pp-para-sub'>
                                IN NO EVENT WILL {config.app.appDomain} OR ITS SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS AND THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES (COLLECTIVELY, "INDIRECT DAMAGES") ARISING OUT OF OR IN CONNECTION WITH OUR WEBSITE, THE SERVICES, OUR PRIVACY POLICY, OR THESE TERMS OF SERVICE (HOWEVER ARISING, INCLUDING NEGLIGENCE), EVEN IF {config.app.appDomain} HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. WITHOUT LIMITING THE FOREGOING, {config.app.appDomain} AND ITS SUPPLIERS WILL NOT BE LIABLE FOR INDIRECT DAMAGES ARISING OUT OF OR IN CONNECTION WITH:
                            </div>
                            <ol className='pp-list'>
                                <li>
                                    THE USE OF OR THE INABILITY TO USE THE SERVICES;
                                </li>
                                <li>
                                    ANY GOODS OR SERVICES PURCHASED OR OBTAINED THROUGH {config.app.appDomain}'S SITE, OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH {config.app.appDomain}'S SERVICES;
                                </li>
                                <div className='my-3'>OR</div>
                                <li>
                                    LOSS OF, UNAUTHORIZED ACCESS TO, OR ALTERATION OF, A USER'S TRANSMISSIONS OR DATA.</li>
                            </ol>
                            <div className='pp-para-sub'>
                                THE LIABILITY OF {config.app.appDomain} AND ITS SUPPLIERS TO YOU OR ANY THIRD PARTIES ARISING OUT OF OR IN CONNECTION WITH OUR WEBSITE, THE SERVICES, OUR PRIVACY POLICY, OR THESE TERMS OF SERVICE (HOWEVER ARISING, INCLUDING NEGLIGENCE) IS LIMITED TO THE GREATER OF (A) THE AMOUNT OF FEES YOU PAY TO US IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO LIABILITY, OR (B) $100.
                            </div>
                            <div className='pp-para-heading'>
                                11. INDEMNIFICATION:
                            </div>
                            <div className='pp-para-sub'>
                                You agree to indemnify, defend and hold harmless {config.app.appDomain} and its parent, subsidiaries, affiliates, officers, directors, employees, suppliers, consultants and agents from any and all third party claims, liability, damages and/or costs (including, but not limited to, attorneys fees) arising from Your use of the Services, Your violation of the Privacy Policy or these Terms of Service, or Your violation of any third party's rights, including without limitation, infringement by You or any other user of Your account of any intellectual property or other right of any person or entity. These Terms of Service will inure to the benefit of {config.app.appDomain}'s successors, assigns, and licensees.
                            </div>
                            <div className='pp-para-heading'>
                                12. PROPRIETARY RIGHTS TO CONTENT:
                            </div>
                            <div className='pp-para-sub'>
                                You acknowledge that the Content, including but not limited to text, software, music, sound, photographs, video, graphics or other material contained in either sponsor advertisements or distributed via email, commercially produced information presented to Member by {config.app.appDomain}, its suppliers, and/or advertisers, is protected by copyrights, trademarks, service marks, patents and/or other proprietary rights and laws. You are not permitted to copy, use, reproduce, distribute, perform, display, or create derivative works from the Content unless expressly authorized by {config.app.appDomain}, its suppliers, or advertisers.
                            </div>
                            <div className='pp-para-heading'>
                                13. NOTICES:
                            </div>
                            <div className='pp-para-sub'>
                                Except as otherwise stated in these Terms of Service, all notices to a party shall be in writing and shall be made either via email or snail mail. Notice shall be deemed given 24 hours after an email is sent, or 3 days after deposit in the snail mail, to Member at the address provided by Member in the Registration Data and to {config.app.appDomain} at the address set forth below:
                                A-726, Kamla Nagar, Agra (UP), India.</div>
                            <div className='pp-para-heading'>
                                14. ARBITRATION; INJUNCTIVE RELIEF:
                            </div>
                            <div className='pp-para-sub'>
                                Any dispute, controversy, or claim arising out of, relating to, or in connection with this Agreement shall be settled by binding arbitration in accordance with the commercial arbitration rules in the Indian Law. The arbitration shall be conducted by a single arbitrator, selected in accordance with the rules in the Indian Law, and judgment on the arbitration award may be entered in any court having jurisdiction thereof. Notwithstanding the foregoing, either party has the right to seek any interim or preliminary relief from a court of competent jurisdiction in Agra in order to protect the rights of such party pending the completion of any arbitration hereunder, and both parties agree to submit to the exclusive jurisdiction of the courts of India and venue in Agra, Uttar Pradesh for any such proceeding. If either party files an action contrary to this provision, the other party may recover attorneys' fees and costs up to one thousand US dollars.
                            </div>
                            <div className='pp-para-heading'>
                                15. GENERAL PROVISIONS:
                            </div>
                            <div className='pp-para-sub'>
                                These Terms of Service will be governed by and construed in accordance with the laws of India without giving effect to any choice of law principles that would require the application of the laws of a different state. If for any reason a court of competent jurisdiction finds any provision or portion of these Terms of Service or Privacy Policy to be unenforceable or invalid, such provision shall be changed and interpreted so as to best accomplish the objectives of such unenforceable or invalid provision within the limits of applicable law, and the remainder of the Terms of Service or Privacy Policy, as applicable, will continue in full force and effect. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. Any waiver of any provision of the Terms of Service will be effective only if in writing and signed by {config.app.appDomain}. These Terms of Service constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter.
                            </div>
                            <div className='pp-para-heading'>
                                16. USAGE OF THE INFORMATION:
                            </div>
                            <div className='pp-para-sub'>
                                The information collected by the Website may be used for any purpose as may be permissible under the applicable law and shall include but not limited to the following: -
                            </div>
                            <ol className='pp-list'>
                                <li>
                                    For providing a personalised browsing experience. While guaranteeing the anonymity of the user, the personal information collected in Clause "Personal Identifiable Information" may be used for research purposes, for improving the marketing and promotional efforts, to analyse usage, improve the content of the Website, product offering and for customising the Website's layout for suiting the needs of its Users.
                                </li>
                                <li>
                                    You authorize us to contact you via email or phone or SMS.
                                </li>
                                <li>
                                    With IP tracking details and Cookies data, the Website will use it only for facilitating the usage of the website and provide personalised experience and any information which is sensitive in nature will not be provided to any third party without the consent of the User.
                                </li>

                                <li>
                                All information (and copies thereof) collected by Website, including without limitation Personal Information, User Data, and other information related to your access and use of the services offered by Website, may be retained by Website for such period as necessary, including but not limited to, for purposes such as compliance with statutory or legal obligations, tax laws and potential evidentiary purposes and for other reasonable purposes such as to implement, administer, and manage your access and use of our services, or resolution of any disputes.
                                </li>
                                <li>
                                To ensure a seamless experience at the Website for you and to ensure your maximum benefit and comfort, the Website may use the data collected through cookies, log file, device identifiers, location data and clear gifs information to: (a) remember information so that you will not have to re-enter it during your visit or the next time you visit the site; (b) provide custom, personalized content and information, including advertising; (c) provide and monitor the effectiveness of Services offered by Website; (d) monitor aggregate metrics such as total number of visitors, traffic, usage, and demographic patterns on the Website and its Services; (e) diagnose or fix technology problems; and (f) otherwise to plan for and enhance the service.
                                </li>
                                <li>
                                Website uses certain third-party analytics tools to measure traffic and usage trends for the Services. These tools collect information, which is not personal or sensitive in nature sent by the User’s device, including the web pages visited, add-ons, and other information that assists the Website in improving the Services. Such information is collected from Users in the form of anonymized logs, so that it cannot reasonably be used to identify any particular individual User.
                                </li>
                            </ol>
                        </>
                    }
                }
            </AppConfigConsumer>
        </>
    )
}
