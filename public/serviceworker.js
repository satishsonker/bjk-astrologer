const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html","/images/logo/bjkLogo256.png"];
const self = this;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCrMOmVxhC8QCpZ01N4M9x7MpejZmRoQWc",
    authDomain: "astrobhashkar.firebaseapp.com",
    projectId: "astrobhashkar",
    storageBucket: "astrobhashkar.appspot.com",
    messagingSenderId: "1021886498289",
    appId: "1:1021886498289:web:d5dd249a4b2e15b287b050",
    measurementId: "G-BHV93BDVPM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opend Cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    // event.waitUntil(
    //     this.registration.showNotification('hello',{
    //         body:"hello from notify"
    //     })
    // );
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(err => caches.match('offline.html'));
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    caches.keys().then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName);
            }
        })
    ));
});