import React from 'react'

export default function LoginForm() {
    return (
        <>
            <div className="mb-3 text-center signup-header">
                Login To Bhaskar Jyotis Kendra
            </div>
            <div className="mb-2">
                <input type="email" className="form-control form-control-sm" id="signupEmail" placeholder="Email Address" />
            </div>
            <div className="mb-2">
                <input type="password" className="form-control form-control-sm" id="signupPassword" placeholder="Password" />
            </div>
            <div className="mb-3 signup-btn">
                <button type="button"  >Login</button>
            </div>
            <div className="mb-3 signup-btn">
                Already have not an account? Signup
            </div>
        </>
    )
}
