import React from 'react'
import '../../css/components/common/Footer.css';

export default function FooterBottomMenu() {
    return (
        <div className='footer-bot-menu'>
            <nav style={{"--bs-breadcrumb-divider": "'||';"}} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="#">Contact Us</a></li>
                    <li className="breadcrumb-item"><a href="#">Feedback</a></li>
                    <li className="breadcrumb-item"><a href="#">Privacy Policy</a></li>
                    <li className="breadcrumb-item"><a href="#">Terms and Conditions</a></li>                    
                    <li className="breadcrumb-item"><a href="#">Astrologer Registration</a></li>
                </ol>
            </nav>
        </div>
    )
}
