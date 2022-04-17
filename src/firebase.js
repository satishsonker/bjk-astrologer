import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging,getToken } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyCrMOmVxhC8QCpZ01N4M9x7MpejZmRoQWc",
    authDomain: "astrobhashkar.firebaseapp.com",
    projectId: "astrobhashkar",
    storageBucket: "astrobhashkar.appspot.com",
    messagingSenderId: "1021886498289",
    appId: "1:1021886498289:web:d5dd249a4b2e15b287b050",
    measurementId: "G-BHV93BDVPM"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const messaging= getMessaging(app);

export {app,analytics,messaging,getToken};