import React from 'react'
import '../../css/components/common/Footer.css';

export default function FooterBottomMenu() {
    return (
        <>
            <div className='row row-cols-1 row-cols-md-4'>
                <div className='col'>
                    <div className='list-container'>
                        <div className='list-header'>Online Consult</div>
                        <ul className="list">
                            <li className="list-item"><a href="/astrologer/chat">Chat with Astrologer </a></li>
                            <li className="list-item"><a href="/talk-to-astrologers">Astrologers </a></li>
                            <li className="list-item"><a href="/astrologer/tarot-reader">Tarot readers</a></li>
                            <li className="list-item"><a href="/astrologer/numerologist">Numerologists</a></li>
                            <li className="list-item"><a href="/astrologer/vastu">Vastu experts</a></li>
                            <li className="list-item"><a href="/astrologer/feng-shui">Fengshui experts</a></li>
                            <li className="list-item"><a href="/astrologer/career">Career Astrologers</a></li>
                            <li className="list-item"><a href="/astrologer/love">Love Astrologers</a></li>
                            <li className="list-item"><a href="/astrologer/finance">Financial Astrologers</a></li>
                            <li className="list-item"><a href="/astrologer/marriage">Marriage Astrologers</a></li>
                            <li className="list-item"><a href="/astrologer/money">Money Astrologers</a></li>
                            <li className="list-item"><a href="/astrologer/daily-life">Specialist Astrologers</a></li>
                            <li className="list-item"><a href="/horoscope2022">Horoscope 2022</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col'>
                    <div className='list-container'>
                        <div className='list-header'>Important Link</div>
                        <ul className="list">
                            <li className="list-item active"><a href="#">Contact Us</a></li>
                            <li className="list-item"><a href="#">Feedback</a></li>
                            <li className="list-item"><a href="#">About Us</a></li>
                            <li className="list-item"><a href="#">Privacy Policy</a></li>
                            <li className="list-item"><a href="#">Terms and Conditions</a></li>
                            <li className="list-item"><a href="#">Astrologer Registration</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col'>
                    <div className='list-container'>
                        <div className='list-header'>Secure</div>
                        <ul className="list">
                            <li className="list-item dflex">
                            <i className="fas fa-hand-holding-usd"></i> Money Back Gaurantee
                            </li>
                            <li className="list-item"><i className="fas fa-user-check"></i> Verified Astrologers</li>
                            <li className="list-item"><i className="fas fa-lock"></i> 100% Secure Payment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
