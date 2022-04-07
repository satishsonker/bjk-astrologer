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

function App() {
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false);
  const config = require('./config.json');
  return (
    <>
      <AppConfigProvider value={config}>
        <Router>
          <Header setIsLeftMenuActive={setIsLeftMenuActive} isLeftMenuActive={isLeftMenuActive}></Header>
          <LeftMenu option={{
            setIsLeftMenuActive: setIsLeftMenuActive
          }} isActive={isLeftMenuActive} userDetails={{}} setting={{}}></LeftMenu>
          <Footer></Footer>
          <SharePage></SharePage>
          <div className='content-area'>
            <Routes>
              <Route exact path="/" element={<div><Home></Home> </div>}></Route>
              <Route exact path="/Home" element={<div><Home></Home> </div>}></Route>
              <Route exact path="/Astrologers" element={
                <div><Astrologers></Astrologers></div>
                }></Route>
              <Route exact path="/Astrologer" element={<div><Astrologer></Astrologer> </div>}></Route>
              <Route exact path="/Love" element={<div><Love></Love> </div>}></Route>
              <Route exact path="/FAQ" element={<div><FAQ></FAQ> </div>}></Route>
              <Route exact path="/Wallet" element={<div><Wallet></Wallet> </div>}></Route>
              <Route exact path="/PaymentDetails" element={<div><PaymentDetails></PaymentDetails> </div>}></Route>
              <Route exact path="/UserProfile" element={<div><UserProfile></UserProfile> </div>}></Route>
              <Route exact path="/CallHistory" element={<div><CallHistory></CallHistory> </div>}></Route>
              <Route exact path="/ChatHistory" element={<div><ChatHistory></ChatHistory> </div>}></Route>
              <Route exact path="/RechargeHistory" element={<div><RechargeHistory></RechargeHistory> </div>}></Route>
              <Route exact path="/Privacy-Policy" element={<div><PrivacyPolicy></PrivacyPolicy> </div>}></Route>
              <Route exact path="/T-n-C" element={<div><TnC></TnC> </div>}></Route>
              <Route exact path="*" element={<div><NoPage></NoPage> </div>}></Route>
            </Routes>
            {/* <FAQ></FAQ> */}
          </div>

        </Router>
      </AppConfigProvider>
    </>
  );
}
export default App;
