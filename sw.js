 const CACHE_NAME = 'kamus-rejang-v1';
const urlsToCache = [
  '/kamus-bahasa-rejang/',
  '/kamus-bahasa-rejang/index.html',
  '/kamus-bahasa-rejang/data/kosakata.json',
  '/kamus-bahasa-rejang/data/kaganga.json'
];

// Install Service Worker & Cache File Statis
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch dari Cache, fallback ke Network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
