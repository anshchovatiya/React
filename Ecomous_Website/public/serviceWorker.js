const CACHE_NAME = "ECOMOUS-VERSION-1.0";
const urlsToCache = ["index.html", "offline.html"];


// Install server worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened Cache");
            return cache.addAll(urlsToCache);
        })
    )
})

// Listen for Requests
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request).catch((err) => {
                caches.match("offline.html")
            });
        })
    )
})


// Activate Server Worker
self.addEventListener("activate", (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(caches.keys().then((cacheNames) => {
        Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        );
    }));
})