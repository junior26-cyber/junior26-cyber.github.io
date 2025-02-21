self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("v1").then(
            cache => {
                cache.addAll([
                    "/about_me",
                    "/compte.svg",
                    "/contact_me.html",
                    "/facebook.svg",
                    "/fleche-bas.svg",
                    "/home.html",
                    "/image.jpg",
                    "/instagram.svg",
                    "/junior.jpg",
                    "/linkedin.svg",
                    "/manifest.json",
                    "/project.html",
                    "/projet.css",
                    "/recherche.svg",
                    "/service.js",
                    "/skills.html",
                    "/style.css",
                    "/tiktok.svg",
                    "/whatsapp.svg",
                    "/youtube.svg"
                ])
            }
        )
    )
})

self.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request))
})