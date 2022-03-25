import React from 'react'

export default function SignupForm({setHaveAccount}) {
    const handleHaveAccount=()=>{
        setHaveAccount(true);
    }
    return (
        <>
            <div className="mb-3 text-center signup-header">
                Signup To Bhaskar Jyotis Kendra
            </div>
            <div className="mb-2">
                <input type="email" className="form-control form-control-sm" id="signupEmail" placeholder="Email Address" />
            </div>
            <div className="mb-2">
                <input type="text" className="form-control form-control-sm" id="signupName" placeholder="Your Name" />
            </div>
            <div className="mb-2">
                <input type="text" maxLength={13} className="form-control form-control-sm" id="signupName" placeholder="Your Mobile Number" />
            </div>
            <div className="mb-2">
                <input type="password" className="form-control form-control-sm" id="signupPassword" placeholder="Password" />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control form-control-sm" id="signupConPassword" placeholder="Confirm Password" />
            </div>
            <div className='mb-3'>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" style={{ fontSize: "10px" }} htmlFor="flexSwitchCheckChecked">I authorize AstroSage.com &amp; associated astrologers to contact me via email or phone or SMS.</label>
                </div>
            </div>
            <div className="my-3 signup-btn">
                <button type="button">Sign Up</button>
            </div>
            <div className="mb-3 signup-msg">
                Already have an account? <strong onClick={e=>handleHaveAccount()} className='clickable'>Login</strong>
            </div>
        </>
    )
}
