self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('meu-app-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/src/styles/main.scss',
                '/src/script/main.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
