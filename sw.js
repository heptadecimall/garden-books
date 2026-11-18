// GardenBooks offline cache. Bump VERSION when you upload a new index.html.
const VERSION = 'gardenbooks-v21';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-180.png', './icons/maskable-512.png', './fonts/cY9AfjOCX1hbuyalUrK4397yjIJFJpc.woff2', './fonts/cY9AfjOCX1hbuyalUrK439DyjIJFJpeBZQ.woff2', './fonts/cY9AfjOCX1hbuyalUrK439HyjIJFJpeBZQ.woff2', './fonts/cY9CfjOCX1hbuyalUrK439vCgIhCBJWxZCPp.woff2', './fonts/cY9CfjOCX1hbuyalUrK439vCgYhCBJWxZCPp.woff2', './fonts/cY9CfjOCX1hbuyalUrK439vCjohCBJWxZA.woff2', './fonts/cY9XfjOCX1hbuyalUrK439vogqCz_goCYw7oRTmOFYYzbARA_n8.woff2', './fonts/newsreader.css'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  // Pages: network first so updates show, cache as fallback offline.
  if(req.mode === 'navigate'){
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  // Everything else (icons, Google Fonts): cache first, then network.
  if(url.origin === location.origin || url.host.endsWith('googleapis.com') || url.host.endsWith('gstatic.com')){
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return r; })));
  }
});
