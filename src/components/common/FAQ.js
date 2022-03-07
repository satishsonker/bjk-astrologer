import React,{useState} from 'react'
import { common } from '../../common/common'

export default function FAQ() {
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
            <div className='filter-container'>
                <div className="accordion" id="accordionFaq">
                    {
                        faqData?.map((ele, ind) => {
                            return <div key={common.getElementKey()} className="accordion-item">
                                <h2 className="accordion-header" id={"heading_" + ind}>
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_" + ind} aria-expanded="true" aria-controls={"collapse_" + ind}>
                                        <strong>{(ind + 1) + ". "} {ele.question}</strong>
                                    </button>
                                </h2>
                                <div id={"collapse_" + ind} className={ind === 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={"heading_" + ind} data-bs-parent="#accordionFaq">
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
