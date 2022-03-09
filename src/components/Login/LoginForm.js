import React from 'react'

export default function LoginForm({ setHaveAccount }) {
    const handleHaveAccount = () => {
        setHaveAccount(false);
    }
    return (
        <>
            <div className="mb-3 text-center signup-header">
                Login To Bhaskar Jyotis Kendra
            </div>
            <div className="mb-2">
                <input type="email" className="form-control" id="signupEmail" placeholder="Email Address" />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
            </div>
            <div className="my-3 signup-btn">
                <button type="button">Login</button>
            </div>
            <div className="my-3 signup-msg">
                Already have not an account? <strong onClick={e => handleHaveAccount()} className='clickable'>Signup</strong>
            </div>
        </>
    )
}
