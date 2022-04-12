import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Astrologer from './components/Astrologer';
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
import Astrologers from './components/Astrologers';
import Love from './components/Love/Love';
import Wallet from './components/Wallet/Wallet';
import PaymentDetails from './components/Wallet/PaymentDetails';
import UserProfile from './components/UserProfile';
import RechargeHistory from './components/History/RechargeHistory';
import ChatHistory from './components/History/ChatHistory';
import CallHistory from './components/History/CallHistory';
import PrivacyPolicy from './components/common/PrivacyPolicy';
import TnC from './components/common/TnC';
import AboutUs from './components/common/AboutUs';
import ContactUs from './components/common/ContactUs';
import HoroscopeDailyPage from './components/Horoscopes/HoroscopeDailyPage';

function App() {
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false);
  const [googleLoginData, setGoogleLoginData] = useState({});
  const config = require('./config.json');
  return (
    <>
      <AppConfigProvider value={config}>
      <GoogleLoginProvider value={googleLoginData}>
        <Router>
          <Header setIsLeftMenuActive={setIsLeftMenuActive} isLeftMenuActive={isLeftMenuActive}></Header>
          <LeftMenu option={{
            setIsLeftMenuActive: setIsLeftMenuActive
          }} isActive={isLeftMenuActive} googleLoginData={googleLoginData} setting={{}} setGoogleLoginData={setGoogleLoginData}></LeftMenu>
          <Footer></Footer>
          <SharePage></SharePage>
          <div className='content-area'>
            <Routes>
              <Route exact path="/" element={<div className='pb-5'><Home></Home> </div>}></Route>
              <Route exact path="/Home" element={<div  className='pb-80'><Home></Home> </div>}></Route>
              <Route exact path="/Astrologers" element={
                <div  className='pb-80'><Astrologers></Astrologers></div>
                }></Route>
              <Route exact path="/privacypolicy" element={<div  className='pb-80'><PrivacyPolicy></PrivacyPolicy> </div>}></Route>
              <Route exact path="/tnc" element={<div  className='pb-80'><TnC></TnC> </div>}></Route>
              <Route exact path="/Astrologer" element={<div  className='pb-80'><Astrologer></Astrologer> </div>}></Route>
              <Route exact path="/Love" element={<div  className='pb-80'><Love></Love> </div>}></Route>
              <Route exact path="/FAQ" element={<div  className='pb-80'><FAQ></FAQ> </div>}></Route>
              <Route exact path="/Wallet" element={<div  className='pb-80'><Wallet></Wallet> </div>}></Route>
              <Route exact path="/PaymentDetails" element={<div  className='pb-80'><PaymentDetails></PaymentDetails> </div>}></Route>
              <Route exact path="/UserProfile" element={<div  className='pb-80'><UserProfile></UserProfile> </div>}></Route>
              <Route exact path="/CallHistory" element={<div  className='pb-80'><CallHistory></CallHistory> </div>}></Route>
              <Route exact path="/ChatHistory" element={<div  className='pb-80'><ChatHistory></ChatHistory> </div>}></Route>
              <Route exact path="/RechargeHistory" element={<div  className='pb-80'><RechargeHistory></RechargeHistory> </div>}></Route>
              <Route exact path="/AboutUs" element={<div  className='pb-80'><AboutUs></AboutUs> </div>}></Route>
              <Route exact path="/ContactUs" element={<div  className='pb-80'><ContactUs></ContactUs> </div>}></Route>
              <Route exact path="/horoscope/:interval/:zodiac/:period" element={<div  className='pb-80'><HoroscopeDailyPage></HoroscopeDailyPage> </div>}></Route>
              <Route exact path="*" element={<div  className='pb-80'><NoPage></NoPage> </div>}></Route>
            </Routes>
            {/* <FAQ></FAQ> */}
          </div>

        </Router>
      </GoogleLoginProvider>
      </AppConfigProvider>
    </>
  );
}
export default App;
