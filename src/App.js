import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GoogleLogin } from 'react-google-login';
import Astrologer from './components/Astrologer/Astrologer';
import FAQ from './components/common/FAQ';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftMenu from './components/Menus/LeftMenu';
import SharePage from './components/common/SharePage';
import Home from './components/Home'
import NoPage from './components/common/NoPage'
import { AppConfigProvider } from './Context/ConfigContext';
import { GoogleLoginProvider } from './Context/GoogleLoginContext';
import './css/App.css';
import Astrologers from './components/Astrologer/Astrologers';
import Love from './components/Love/Love';
import Wallet from './components/Wallet/Wallet';
import PaymentDetails from './components/Wallet/PaymentDetails';
import RechargeHistory from './components/History/RechargeHistory';
import ChatHistory from './components/History/ChatHistory';
import CallHistory from './components/History/CallHistory';
import PrivacyPolicy from './components/common/PrivacyPolicy';
import TnC from './components/common/TnC';
import AboutUs from './components/common/AboutUs';
import ContactUs from './components/common/ContactUs';
import HoroscopeDailyPage from './components/Horoscopes/HoroscopeDailyPage';
import UserProfile from './components/Profile/UserProfile';
import AstroRegistration from './components/Astrologer/AstroRegistration';
import { messaging, getToken } from './firebase';
import { Api } from './apis/Api';
import { apiUrls } from './apis/apiUrl';
import Admin from './Admin/admin';
import AdminDashboard from './Admin/Components/AdminDashboard';
import UsersList from './Admin/Components/Users/UsersList';
import PaymentBanner from './components/Banner/PaymentBanner';
import FooterBottomMenu from './components/Menus/FooterBottomMenu';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
export default function App() {
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false);
  const [googleLoginData, setGoogleLoginData] = useState({});
  const [isAdminPageOpen, setIsAdminPageOpen] = useState(false);
  const [userRoles, setUserRoles] = useState({});
  const { t } = useTranslation();
  const config = require('./Configs/config.json');
  const responseGoogle = (response) => {
    let profile = response.profileObj;
    setGoogleLoginData(response);
    var userData = {
      email: profile.email,
      firstName: profile.givenName,
      lastName: profile.familyName,
      imageUrl: profile.imageUrl,
      googleId: profile.googleId,
      AuthProvidor: 'Google'
    }
    Api.Put(apiUrls.userController.addUser, userData).then(res => {
      Api.Get(apiUrls.userController.getUserPermission + `?email=${userData.email}`).then(uPer => {
        setUserRoles(uPer.data.userPermission);
      }).catch(uErr => {
        console.log('Error', uErr);
      })
    }).catch(err => {
      console.log('Error', err);
    })
  }
  useEffect(() => {
    if (window.location.pathname.toLowerCase().indexOf('admin') > -1)
      setIsAdminPageOpen(true);
    else
      setIsAdminPageOpen(false);

    getToken(messaging,
      {
        vapidKey: 'BA4kc8lgMUuy_w6njDthOW0uxc3X9AMoe47WJT_iql0ccMQwxhTvUimJFzR4DCyOsvUypVWDOAVrKjLYkNQPDYo'
      })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          var data = {
            token: currentToken,
            userEmail: "abcd@gmail.com"
          }
          Api.Put(apiUrls.firebaseTokenController.addFirebaseToken, data).then(res => {
            console.log('response', res);
          }).catch(err => {
            console.log('error', err);
          })
          console.log('token', currentToken);
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
  }, []);

  return (
    <>
      <AppConfigProvider value={config}>
        <GoogleLoginProvider value={googleLoginData}>
          <Router>
            {!isAdminPageOpen && <>
              <Header setIsLeftMenuActive={setIsLeftMenuActive} isLeftMenuActive={isLeftMenuActive}></Header>
              <LeftMenu option={{
                setIsLeftMenuActive: setIsLeftMenuActive
              }} isActive={isLeftMenuActive} googleLoginData={googleLoginData} setting={{}} setGoogleLoginData={setGoogleLoginData}></LeftMenu>
              <Footer></Footer>
              <SharePage></SharePage>
            </>
            }
            <div className='root-area'>
              <div className={isAdminPageOpen ? 'content-area-admin' : 'content-area'}>
                <Routes>
                  <Route exact path="/" element={<div className='pb-5'><Home></Home> </div>}></Route>
                  <Route exact path="/Home" element={<div className='pb-80'><Home></Home> </div>}></Route>
                  <Route exact path="/Astrologers" element={
                    <div className='pb-80'><Astrologers></Astrologers></div>
                  }></Route>
                  <Route exact path="/privacypolicy" element={<div className='pb-80'><PrivacyPolicy></PrivacyPolicy> </div>}></Route>
                  <Route exact path="/tnc" element={<div className='pb-80'><TnC></TnC> </div>}></Route>
                  <Route exact path="/Astrologer" element={<div className='pb-80'><Astrologer></Astrologer> </div>}></Route>
                  <Route exact path="/Love" element={<div className='pb-80'><Love></Love> </div>}></Route>
                  <Route exact path="/FAQ" element={<div className='pb-80'><FAQ></FAQ> </div>}></Route>
                  <Route exact path="/Wallet" element={<div className='pb-80'><Wallet></Wallet> </div>}></Route>
                  <Route exact path="/PaymentDetails/:pay/:offer" element={<div className='pb-80'><PaymentDetails></PaymentDetails> </div>}></Route>
                  <Route exact path="/CallHistory" element={<div className='pb-80'><CallHistory></CallHistory> </div>}></Route>
                  <Route exact path="/ChatHistory" element={<div className='pb-80'><ChatHistory></ChatHistory> </div>}></Route>
                  <Route exact path="/RechargeHistory" element={<div className='pb-80'><RechargeHistory></RechargeHistory> </div>}></Route>
                  <Route exact path="/AboutUs" element={<div className='pb-80'><AboutUs></AboutUs> </div>}></Route>
                  <Route exact path="/ContactUs" element={<div className='pb-80'><ContactUs></ContactUs> </div>}></Route>
                  <Route exact path="/UserProfile" element={<div className='pb-80'><UserProfile googleLoginData={googleLoginData}></UserProfile> </div>}></Route>
                  <Route exact path="/horoscope/:interval/:zodiac/:period" element={<div className='pb-80'><HoroscopeDailyPage></HoroscopeDailyPage> </div>}></Route>
                  <Route exact path="*" element={<div className='pb-80'><NoPage></NoPage> </div>}></Route>
                  <Route exact path="/astroRegistration" element={<div className='pb-80'><AstroRegistration></AstroRegistration> </div>}></Route>
                  <Route exact path="Admin" element={<div className='pb-80'><Admin setIsAdminPageOpen={setIsAdminPageOpen}></Admin> </div>}>
                    <Route exact path="dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
                    <Route exact path="users" element={<UsersList userRole={userRoles}></UsersList>}></Route>
                  </Route>
                </Routes>
                {/* <FAQ></FAQ> */}
              </div>

              <PaymentBanner></PaymentBanner>
              <FooterBottomMenu></FooterBottomMenu>
              <ToastContainer position="top-right" className='ast-toast'></ToastContainer>
            </div>
          </Router>
        </GoogleLoginProvider>
      </AppConfigProvider>
      <GoogleLogin className='login-social-btn'
        clientId={config.socialButton.google.clienId}
        buttonText={t("google") + " " + t("login")}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />

    </>
  );
}
