const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html","/images/logo/bjkLogo256.png"];
const self = this;

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