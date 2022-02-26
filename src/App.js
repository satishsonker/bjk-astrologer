
import './css/App.css';

function App() {
  return (
    <>
      <div className='bjk-nav'>
        <div class="d-flex justify-content-between">
          <div className="p-2 bd-highlight"><i className="humberger-bar fa-solid fa-bars"></i></div>
          <div className="p-2 bd-highlight"><img className='logo-name' src='../Images/logo/bjkLogoName.png' /></div>
          <div className="p-2 bd-highlight"><img className='logo' src='../Images/logo/bjkLogo64.png' /></div>
        </div>
      </div>
      <div className='left-menu'></div>
      <div className='bjk-footer'>
      <div className="d-flex bd-highlight">
      <div className="p-2 flex-fill bd-highlight"><i className="control-btn fa-solid fa-angle-up"></i></div>
      <div className="p-2 flex-fill bd-highlight"><i className="control-btn fa-solid fa-angle-up"></i></div>
      <div className="p-2 flex-fill bd-highlight"><i className="control-btn fa-solid fa-angle-up"></i></div>
      <div className="p-2 flex-fill bd-highlight"><i className="control-btn fa-solid fa-angle-up"></i></div>
        </div>
      </div>
    </>
  );
}

export default App;
