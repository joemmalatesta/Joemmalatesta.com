---
layout: "../../../layouts/BlogPost.astro" #Constant
title: "SvelteKit PWA Guide"
cardDescription: "How to create a progressive web app (PWA) with SvelteKit"
description: "How to create a progressive web app (PWA) with SvelteKit. This goes over the files, file structure, and contents of the file in order to make a progressive web app. Using some built in helpers and my trial and error, creating a PWA in SvelteKit is really a trivial thing that can add a lot of value to your application."
pubDate: "August 14, 2023"
# heroImage: "/blogs/programming/2023-tech.webp"
---


My new game [Groople](https://groople.xyz) has been undergoing some changes recently. One of the main features I’ve implemented as of recent is the introduction of a Progressive Web App (PWA) for the game. 

Making a SvelteKit project into a PWA is straightforward but the documentation is a bit scattered, and the process is slightly different from ones you will find online. After a bit of a struggle and breaking prod a few times, I’ve congregated the information I learned into a single place, with some tips for testing and optimizing. 

There are only 2 files you will need to add to your application. 

### Manifest.json
- This goes in the static directory - here is a sample, but extensive information of what can be done in this file can be found from [web.dev](http://web.dev)
    
    ```json
    // static/manifest.json
    {
        "name": "Groople", //long name of your app
        "short_name": "Groople", //name of your app on home screen
        "start_url": "/", //homepage
        "display": "standalone", //how app is displayed
        "background_color": "#ffffff",
        "theme_color": "#ffffff",
        "icons": [ //icons for different uses, SVG can be used for all
            {
                "src": "/favicon.svg",
                "type": "image/svg+xml",
                "sizes": "any"
            }
        ]
    }
    ```
    
### service-worker.js
- Even in a TypeScript project, I suggest using ServiceWorkers.js to relieve some unnecessary errors. The exact code for this file is on the [SvelteKit documentation](https://kit.svelte.dev/docs/service-workers) and can be copied 1:1. What this does is saves and caches all the information on each page load, making your app viewable while offline. This file (given the correct file name service-worker.js) will auto initialize the service worker. You can confirm this in the developer tools by looking for a green dot in `Application -> Service Workers`
    
    ```javascript
    // src/service-worker.js

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
### Update app.hmtl
- Finally, you will need to change the head of your ```app.html``` file. It will look something like this. To access files from the static folder in this file, we need to prefix with `%sveltekit.assets%` 
- You must include
  - manifest link `<link rel="manifest"`
  - Icons link `<link rel="apple-touch-icon"`, `<link rel="apple-touch-icon-precomposed"`, `<link rel="icon"`
  - theme-color `<meta name="theme-color"` 

    ```html
    <!-- src/app.html -->
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="theme-color" content="#ffffff" />
            <!-- Apple does not allow svg icons. -->
            <!-- Use 196x196 png instead -->
            <link rel="apple-touch-icon"
            href="%sveltekit.assets%/apple-touch-icon.png" />
            <link rel="apple-touch-icon-precomposed" 
            href="%sveltekit.assets%/apple-touch-icon-precomposed.png" />

            <link rel="icon" sizes="196x196" href="%sveltekit.assets%/apple-touch-icon.png" />
            <link rel="manifest" href="%sveltekit.assets%/manifest.json" />
            <title>Groople</title>
            <meta name="viewport" content="width=device-width" />
            %sveltekit.head%
        </head>
        <body data-sveltekit-preload-data="hover">
            <div style="display: contents">%sveltekit.body%</div>
        </body>
    </html>
    ```
    
## Tips

- Use `npm run dev -- --host` to share your project to your local network. You can then try downloading the PWA onto your phone.
- To remove the pesky search bar in iOS, add a scope to your PWA.
  - In the `manifest.json` add ```"scope": "/",``` and in your `app.html` add 
  ```html
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="mobile-wep-app-capable" content="yes" />
  ```
- You can upload your PWA to the Google Play Store and the Microsoft Store (but not the iOS app store)
- If you are starting a new app and want to have a working PWA from day one, you can clone [this repository](https://github.com/joemmalatesta/SvelteKit-PWA-Guide/tree/main/PWA-Demo) and work out from there


### Conclusion
Making your website into a PWA can have massive benefits for your users and can allow your app to have a more native feel. SvelteKit has a special process and helpers for creating a PWA and I hope this guide helped you through the process of building your own. If you need additional help, you can [contact me](https://www.joemmalatesta.com/#contact), message me on [Twitter/X](https://twitter.com/_JoeMalatesta), or ask around in the [Svelte Discord](https://discord.gg/svelte) server.