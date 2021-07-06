if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let c = Promise.resolve();
            return s[e] || (c = new Promise((async c => {
                if ("document" in self) {
                    const s = document.createElement("script");
                    s.src = e, document.head.appendChild(s), s.onload = c
                } else importScripts(e), c()
            }))), c.then((() => {
                if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
                return s[e]
            }))
        },
        c = (c, s) => {
            Promise.all(c.map(e)).then((e => s(1 === e.length ? e[0] : e)))
        },
        s = {
            require: Promise.resolve(c)
        };
    self.define = (c, i, r) => {
        s[c] || (s[c] = Promise.resolve().then((() => {
            let s = {};
            const a = {
                uri: location.origin + c.slice(1)
            };
            return Promise.all(i.map((c => {
                switch (c) {
                    case "exports":
                        return s;
                    case "module":
                        return a;
                    default:
                        return e(c)
                }
            }))).then((e => {
                const c = r(...e);
                return s.default || (s.default = c), s
            }))
        })))
    }
}
define("./sw.js", ["./workbox-ddcddfa8"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "asset-manifest.json",
        revision: "44993c388362b3c6a704f2e6e2a5891d"
    }, {
        url: "favicon.ico",
        revision: "37edc0083c48fb92a0b984cb39ac02a4"
    }, {
        url: "index.html",
        revision: "0e74e00b02199baf5c2814022f4c81b0"
    }, {
        url: "logo192.png",
        revision: "33dbdd0177549353eeeb785d02c294af"
    }, {
        url: "logo512.png",
        revision: "917515db74ea8d1aee6a246cfbcc0b45"
    }, {
        url: "manifest.json",
        revision: "89be60895176466398d53bd4a693d9f6"
    }, {
        url: "robots.txt",
        revision: "61c27d2cd39a713f7829422c3d9edcc7"
    }, {
        url: "static/css/main.7c8ff4da.chunk.css",
        revision: "3007160e480e4ffc80cc26aa1b639417"
    }, {
        url: "static/js/2.a03c4372.chunk.js",
        revision: "7f3ad7acac3c4daa916bdf3c8046f6c9"
    }, {
        url: "static/js/2.a03c4372.chunk.js.LICENSE.txt",
        revision: "ac1d32e2116a66660d06e2f6a5ba9780"
    }, {
        url: "static/js/main.3f5c3ae1.chunk.js",
        revision: "512408c740d83b398cca6521b29d9a6b"
    }, {
        url: "static/js/runtime-main.f8f568d8.js",
        revision: "53d9c42bda4571adccd2bfc3dd838309"
    }, {
        url: "static/media/Bg.1c1bc455.png",
        revision: "8e6f27f9d6e844cffc55bff13df36504"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=sw.js.map