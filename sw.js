if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let r = Promise.resolve();
            return s[e] || (r = new Promise((async r => {
                if ("document" in self) {
                    const s = document.createElement("script");
                    s.src = e, document.head.appendChild(s), s.onload = r
                } else importScripts(e), r()
            }))), r.then((() => {
                if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
                return s[e]
            }))
        },
        r = (r, s) => {
            Promise.all(r.map(e)).then((e => s(1 === e.length ? e[0] : e)))
        },
        s = {
            require: Promise.resolve(r)
        };
    self.define = (r, n, t) => {
        s[r] || (s[r] = Promise.resolve().then((() => {
            let s = {};
            const i = {
                uri: location.origin + r.slice(1)
            };
            return Promise.all(n.map((r => {
                switch (r) {
                    case "exports":
                        return s;
                    case "module":
                        return i;
                    default:
                        return e(r)
                }
            }))).then((e => {
                const r = t(...e);
                return s.default || (s.default = r), s
            }))
        })))
    }
}
define("./sw.js", ["./workbox-9cbfcddf"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "index.html",
        revision: "a4f630cf507ac76e6f0e217af4067aa2"
    }, {
        url: "manifest.json",
        revision: "5699f1451f15e8b9ae7437c4c88c9444"
    }], {}), e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new e.CacheFirst({
        cacheName: "images",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 10,
            purgeOnQuotaError: !0
        })]
    }), "GET")
}));

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((resp) => {
            return resp || fetch(event.request).then((response) => {
                let responseClone = response.clone();
                caches.open('v1').then((cache) => {
                    cache.put(event.request, responseClone);
                });

                return response;
            });
        })
    );
});
//# sourceMappingURL=sw.js.map