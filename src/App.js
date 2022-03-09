import React, { useState } from 'react'
import Astrologer from './components/Astrologer';
import AstroFilter from './components/common/AstroFilter';
import AstroList from './components/common/AstroList';
import FAQ from './components/common/FAQ';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftMenu from './components/common/LeftMenu';
import SharePage from './components/common/SharePage';
import Signup from './components/Login/Signup';
import './css/App.css';

function App() {
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false);
  return (
    <>
      <Header setIsLeftMenuActive={setIsLeftMenuActive} isLeftMenuActive={isLeftMenuActive}></Header>
      <LeftMenu option={{
        setIsLeftMenuActive:setIsLeftMenuActive
      }} isActive={isLeftMenuActive} userDetails={{}} setting={{}}></LeftMenu>
      <Footer></Footer>
      <SharePage></SharePage>
      <div className='content-area'>
        {/* <AstroFilter showFilter={true}></AstroFilter> */}
        <Astrologer></Astrologer>
        <AstroList></AstroList>
        {/* <FAQ></FAQ> */}
      </div>
    </>
  );
}
// whatsapp://send?text=https://varta.astrosage.com/talk-to-astrologers?lang=en
export default App;
