import React, { useState } from 'react'
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftMenu from './components/common/LeftMenu';
import './css/App.css';

function App() {
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(false);
  return (
    <>
      <Header setIsLeftMenuActive={setIsLeftMenuActive} isLeftMenuActive={isLeftMenuActive}></Header>
      <LeftMenu option={{}} isActive={isLeftMenuActive} userDetails={{}} setting={{}}></LeftMenu>
    <Footer></Footer>
    </>
  );
}
// whatsapp://send?text=https://varta.astrosage.com/talk-to-astrologers?lang=en
export default App;
