import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Astrologer from './components/Astrologer';
import AstroFilter from './components/common/AstroFilter';
import AstroList from './components/common/AstroList';
import FAQ from './components/common/FAQ';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftMenu from './components/Menus/LeftMenu';
import SharePage from './components/common/SharePage';
import Home from './components/Home'
import NoPage from './components/common/NoPage'
import Signup from './components/Login/Signup';
import { AppConfigProvider } from './Context/ConfigContext';
import './css/App.css';
import Astrologers from './components/Astrologers';
import Love from './components/Love/Love';

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
              <Route exact path="*" render={() => {
                return (
                  <div><NoPage></NoPage> </div>
                );
              }}></Route>
            </Routes>
            {/* <FAQ></FAQ> */}
          </div>

        </Router>
      </AppConfigProvider>
    </>
  );
}
// whatsapp://send?text=https://varta.astrosage.com/talk-to-astrologers?lang=en
export default App;
