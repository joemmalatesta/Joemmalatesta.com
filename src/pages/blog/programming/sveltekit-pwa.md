---
layout: "../../../layouts/BlogPost.astro" #Constant
title: "SvelteKit PWA Guide"
cardDescription: "How to create a progressive web app (PWA) with SvelteKit"
description: "How to create a progressive web app (PWA) with SvelteKit. This goes over the files, file structure, and contents of the file in order to make a progressive web app. Using some built in helpers and my trial and error, creating a PWA in SvelteKit is really a trivial thing that can add a lot of value to your application."
pubDate: "August 14, 2023"
# heroImage: "/blogs/programming/2023-tech.webp"
---


Groople has been undergoing some changes recently. One of the main features I’ve implemented as of recent is the introduction of a progressive web app (PWA). 

Making a SvleteKit project into a PWA is straightforward but the documentation is a bit scattered, and the process is slightly different from ones you will find online. After a struggle and breaking prod a few times, I’ve congregated the information into a single place, with some tips for testing. 

There are only 2 files you will need to add to your application. 

### Manifest.json
- This goes in the static directory - here is a sample, but extensive information of what can be done in this file can be found from [web.dev](http://web.dev)
    
    ```json
    {
        "name": "Groople",
        "short_name": "Groople",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#ffffff",
        "icons": [
            {
                "src": "/favicon.svg",
                "type": "image/svg+xml",
                "sizes": "any"
            }
        ]
    }
    ```
    
### service-worker.js
- Even in a typescript project, I suggest using ServiceWorkers.js - I was getting type errors a lot with using a TypeScript file. The exact code for this file is documented on the [SvelteKit documentation](https://kit.svelte.dev/docs/service-workers) and can be copied 1:1. What this does is saves and caches all the information on each page load, making your app viewable while offline.
    
    ```javascript
    /// <reference types="@sveltejs/kit" />
    import { build, files, version } from '$service-worker';
    
    // Create a unique cache name for this deployment
    const CACHE = `cache-${version}`;
    
    const ASSETS = [
        ...build, // the app itself
        ...files  // everything in `static`
    ];
    
    self.addEventListener('install', (event) => {
        // Create a new cache and add all files to it
        async function addFilesToCache() {
            const cache = await caches.open(CACHE);
            await cache.addAll(ASSETS);
        }
    
        event.waitUntil(addFilesToCache());
    });
    
    self.addEventListener('activate', (event) => {
        // Remove previous cached data from disk
        async function deleteOldCaches() {
            for (const key of await caches.keys()) {
                if (key !== CACHE) await caches.delete(key);
            }
        }
    
        event.waitUntil(deleteOldCaches());
    });
    
    self.addEventListener('fetch', (event) => {
        // ignore POST requests etc
        if (event.request.method !== 'GET') return;
    
        async function respond() {
            const url = new URL(event.request.url);
            const cache = await caches.open(CACHE);
    
            // `build`/`files` can always be served from the cache
            if (ASSETS.includes(url.pathname)) {
                return cache.match(url.pathname);
            }
    
            // for everything else, try the network first, but
            // fall back to the cache if we're offline
            try {
                const response = await fetch(event.request);
    
                if (response.status === 200) {
                    cache.put(event.request, response.clone());
                }
    
                return response;
            } catch {
                return cache.match(event.request);
            }
        }
    
        event.respondWith(respond());
    });
    ```
    
    Finally, you will need to change
    
    TIPS
    
    - Apple does not accept svg’s as an app icon image format. Use png with the size 912x912. You can go [here](https://www.pwabuilder.com/imageGenerator) to generate the images from an svg.
    - Use `npm run dev -- --host` to put your project on your local network. You can then try downloading the PWA on your phone.