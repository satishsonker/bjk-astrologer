import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { AppConfigConsumer } from '../../Context/ConfigContext';
export default function LoginForm({ setHaveAccount }) {
    const handleHaveAccount = () => {
        setHaveAccount(false);
    }
    const responseGoogle = (response) => {
        console.log(response);
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
            <hr></hr>
            <AppConfigConsumer>
                {
                    (config) => {
                        return <div className='row row-col-2'>
                            <div className='col p3'>
                                {
                                    config.socialButton.google.enable &&
                                    <GoogleLogin className='login-social-btn'
                                        clientId="394604212634-urqqp0kr7cf09ftqhrlq5lbfd1ol6jnl.apps.googleusercontent.com"
                                        buttonText="Google Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}
                                    />
                                }
                            </div>
                            {
                                config.socialButton.facebook.enable &&
                                <div className='col p3'>
                                    <button className='login-social-btn'><i className="fab fa-facebook-f"></i>Facebook Login</button>
                                </div>
                            }
                        </div>
                    }
                }
            </AppConfigConsumer>
        </>
    )
}
