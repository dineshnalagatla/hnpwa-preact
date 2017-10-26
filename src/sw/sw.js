const CACHE_NAME = 'hnpwa-dn-chache';
const cache_urls = [
    '/',
    '/dist/styles.css',
    '/dist/index.js'
];

//Add to cache upon installation
self.addEventListener('install', (ev) => {
    ev.waitUntil(
        caches.open(CACHE_NAME).then((ch) => {
            return ch.addAll(cache_urls);
        }).catch((e) => {
            console.log(e.toString());
        })
    );
});

//Fetch event listener
self.addEventListener('fetch', (ev) => {
    ev.respondWith(
        caches.match(ev.request).then((response) => {
            if(response) {
                return response;
            }

            return fetch(ev.request);
        })
    ); 
});