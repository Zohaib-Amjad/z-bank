const CACHE = 'z-bank-v1';
const PRECACHE = [
  '/', '/index.html', '/styles.css', '/script.js', '/links.js', '/names.js',
  '/communication.js', '/assets/favicon.svg?v=3', '/manifest.webmanifest',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first (so deploys show up when online), falling back to cache offline.
// Covers same-origin files and Google Fonts (cached on first online visit).
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const allowed = url.origin === self.location.origin
    || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!allowed) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && (response.ok || response.type === 'opaque')) {
          const copy = response.clone();
          caches.open(CACHE).then((c) => c.put(request, copy));
        }
        return response;
      })
      .catch(() =>
        caches.match(request, { ignoreSearch: false }).then((hit) =>
          hit || (request.mode === 'navigate' ? caches.match('/index.html') : Response.error())
        )
      )
  );
});
