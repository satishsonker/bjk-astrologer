import React, { useState } from 'react'
import AstroFilter from './components/common/AstroFilter';
import AstroList from './components/common/AstroList';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftMenu from './components/common/LeftMenu';
import SharePage from './components/common/SharePage';
import './css/App.css';

function App() {
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false);
  return (
    <>
      <Header setIsLeftMenuActive={setIsLeftMenuActive} isLeftMenuActive={isLeftMenuActive}></Header>
      <LeftMenu option={{}} isActive={isLeftMenuActive} userDetails={{}} setting={{}}></LeftMenu>
      <Footer></Footer>
      <SharePage></SharePage>
      <div className='content-area'>
        <AstroFilter showFilter={true}></AstroFilter>
        <AstroList></AstroList>
      </div>
    </>
  );
}
// whatsapp://send?text=https://varta.astrosage.com/talk-to-astrologers?lang=en
export default App;
