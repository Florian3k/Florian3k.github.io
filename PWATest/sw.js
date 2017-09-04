const CACHE_NAME = 'app-cache';

const urlsToCache = [
	'index.html',
	// './dist/app.bundle.js',
	// './dist/lib.bundle.js',
	// './src/js/projects.js'
];

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE_NAME).then((cache) => {
		return cache.addAll(urlsToCache);
	}));
});

self.addEventListener('fetch', (event) => {
	event.respondWith(caches.match(event.request).then((response) => {
		return response ? response : fetch(event.request);
	}));
});