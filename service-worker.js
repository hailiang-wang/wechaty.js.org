                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/10/19/jyy-chatbot-blog/","revision":"831bf0e0187c886f0373576e09896f6d"},{"url":"/2021/10/12/kai-yuan-she-2021/","revision":"43e065f457191156f4af8609beb4049f"},{"url":"/2021/10/09/how-to-save-your-memory-with-technology/","revision":"f5a8f5911900aecbef6aa989c0ddcd68"},{"url":"/2021/10/09/gsod-document-quality-final-report/","revision":"e3f1cd32e5708b46eab8dc88260fdfd4"},{"url":"/2021/10/07/ospp-final-term-5g-chatbot-puppet/","revision":"8b3bd10a7e148d5ebe1d1c06759546f4"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
