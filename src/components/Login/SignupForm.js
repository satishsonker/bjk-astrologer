import React,{useState} from 'react'
import AstButton from '../Controls/AstButton';
import AstTextbox from '../Controls/AstTextbox';

export default function SignupForm({setHaveAccount}) {
    const [signupData, setSignupData] = useState({});
    const handleOnChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }
    const handleHaveAccount=()=>{
        setHaveAccount(true);
    }
    const txtOptions = {
        email: {
            onChange: handleOnChange,
            id: 'txtEmail',
            type:"email",
            name: 'email',
            width: '100%',
            value: signupData.email,
            placeHolder: 'Email Address',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        mobile: {
            onChange: handleOnChange,
            id: 'txtMobile',
            name: 'mobile',
            width: '100%',
            value: signupData.mobile,
            placeHolder: 'Mobile Number',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        name: {
            onChange: handleOnChange,
            id: 'txtName',
            name: 'name',
            width: '100%',
            value: signupData.name,
            placeHolder: 'Your Name',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        password: {
            onChange: handleOnChange,
            id: 'txtPassword',
            type:"password",
            name: 'password',
            width: '100%',
            value: signupData.password,
            placeHolder: 'Password',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        },
        conPassword: {
            onChange: handleOnChange,
            id: 'txtConPassword',
            type:"password",
            name: 'conPassword',
            width: '100%',
            value: signupData.conPassword,
            placeHolder: 'Confirm Password',
            hasValidation: true,
            showLabel: false,
            showHelpText: false,
            className: 'me-2 mb-2',
        }
    };
    return (
        <>
            <div className="mb-3 text-center signup-header">
                Signup To Bhaskar Jyotis Kendra
            </div>
            <div className="mb-2">
                <AstTextbox option={txtOptions.email}></AstTextbox>
            </div>
            <div className="mb-2">
            <AstTextbox option={txtOptions.name}></AstTextbox>
            </div>
            <div className="mb-2">
            <AstTextbox option={txtOptions.mobile}></AstTextbox>
            </div>
            <div className="mb-2">
            <AstTextbox option={txtOptions.password}></AstTextbox>
            </div>
            <div className="mb-3">
            <AstTextbox option={txtOptions.conPassword}></AstTextbox>
            </div>
            <div className='mb-3'>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" style={{ fontSize: "10px" }} htmlFor="flexSwitchCheckChecked">I authorize AstroSage.com &amp; associated astrologers to contact me via email or phone or SMS.</label>
                </div>
            </div>
            <div className="my-3 signup-btn">
               <AstButton option={{text:"Signup"}}></AstButton>
            </div>
            <div className="mb-3 signup-msg">
                Already have an account? <strong onClick={e=>handleHaveAccount()} className='clickable'>Login</strong>
            </div>
        </>
    )
}
