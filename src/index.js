import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n  from "i18next";
import {initReactI18next} from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  fallbackLng:'en',
  backend:{
    loadPath:"/assets/locale/{{lng}}/translation.json"
  },
  react:{useSuspense:false},
  detection :{
    order:[ 'htmlTag','cookie', 'localStorage','querystring', 'sessionStorage', 'navigator',  'path', 'subdomain'],
    caches:['cookie']
  },
  supportedLngs:['en','hi']
});
const loadingMarkup=()=>{
  return <div>Loading.....</div>
}
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
