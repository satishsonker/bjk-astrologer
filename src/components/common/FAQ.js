import React,{useState} from 'react'
import { common } from '../../common/common'
import Breadcrumb from './Breadcrumb';
import { useTranslation } from "react-i18next";

export default function FAQ() {
    const { t } = useTranslation();    
    const breadcrumbOption = [
        { name: t('home'), link: "/Home" },
        { name: t('faqs'), isActive: false }
    ];
    const [faqData, setFaqData] = useState([
        {
            question: "Can I talk to an astrologer for free?",
            answer: "Yes, you can easily talk to the best astrologers on AstroSage Varta."
        },
        {
            question: "Where can I talk to astrologer?",
            answer: "AstroSage Varta seems to top the list of platforms where you can talk to astrologers without any delay."
        },
        {
            question: "Can I talk to astrologer?",
            answer: "Yes, you can contact premium and world-class astrologers on AstroSage Varta."
        },

    ])
    return (
        <>
        <Breadcrumb option={breadcrumbOption}></Breadcrumb>
            <div className='faq-container'>
                <div className="accordion" id="accordionFaq">
                    {
                        faqData?.map((ele, ind) => {
                            return <div key={common.getElementKey()} className="accordion-item">
                                <h2 className="accordion-header" id={"question_" + ind}>
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#faq_" + ind} aria-expanded="true" aria-controls={"faq_" + ind}>
                                        <strong>{(ind + 1) + ". "} {ele.question}</strong>
                                    </button>
                                </h2>
                                <div id={"faq_" + ind} className={ind === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={"question_" + ind} data-bs-parent="#accordionFaq">
                                    <div className="accordion-body">
                                        {ele.answer}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div></div>
        </>
    )
}
