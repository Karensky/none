// importScripts("https://cdn.webpushr.com/sw-server.min.js");
importScripts('https://cdn.jsdelivr.net/npm/workbox-sw/build/workbox-sw.js');

workbox.core.setCacheNameDetails({
  prefix: "烟雨江南's Blog"
});

self.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST,{
  directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// workbox.googleAnalytics.initialize();