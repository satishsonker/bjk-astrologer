import React, { useState, useEffect } from 'react'
import { common } from '../../common/common';
import '../../css/components/Signup.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Signup({ showLogin,closeLoginForm, showSignup,setGoogleLoginData }) {
  showLogin = common.defaultIfEmpty(showLogin, false);
  showSignup = common.defaultIfEmpty(showSignup, false);

  const [haveAccount, setHaveAccount] = useState(false);
  useEffect(() => {
    setHaveAccount(true);
  }, [showLogin]);

  useEffect(() => {
    setHaveAccount(false);
  }, [showSignup]);
  
  return (
    <>
    {!closeLoginForm && 
      <div className="modal  fade" id="loginSignupModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {/* <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
            <div className="modal-body signup-modal-body">

              <div className="btn-close" data-bs-dismiss="modal" aria-label="Close"></div>
              <div className="row row-cols m-0">
                <div className="col d-none d-sm-none d-lg-block px-0">
                  <LazyLoadImage alt="Signup" className='signup-banner img-fluid' src="../Images/signup.jpg" />
                </div>
                <div className="col py-3">
                  {haveAccount && <LoginForm setHaveAccount={setHaveAccount} setGoogleLoginData={setGoogleLoginData}></LoginForm>}
                  {!haveAccount && <SignupForm setHaveAccount={setHaveAccount}></SignupForm>}
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
      }
    </>
  )
}
