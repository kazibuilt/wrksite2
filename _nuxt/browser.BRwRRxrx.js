import {
    a0 as g,
    a1 as m
} from "./entry.C_XGDcki.js";

function h(n, t) {
    for (var u = 0; u < t.length; u++) {
        const r = t[u];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const e in r)
                if (e !== "default" && !(e in n)) {
                    const o = Object.getOwnPropertyDescriptor(r, e);
                    o && Object.defineProperty(n, e, o.get ? o : {
                        enumerable: !0,
                        get: () => r[e]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}

function w(n, t) {
    return t = t || {}, new Promise(function (u, r) {
        var e = new XMLHttpRequest,
            o = [],
            f = [],
            a = {},
            l = function () {
                return {
                    ok: (e.status / 100 | 0) == 2,
                    statusText: e.statusText,
                    status: e.status,
                    url: e.responseURL,
                    text: function () {
                        return Promise.resolve(e.responseText)
                    },
                    json: function () {
                        return Promise.resolve(e.responseText).then(JSON.parse)
                    },
                    blob: function () {
                        return Promise.resolve(new Blob([e.response]))
                    },
                    clone: l,
                    headers: {
                        keys: function () {
                            return o
                        },
                        entries: function () {
                            return f
                        },
                        get: function (i) {
                            return a[i.toLowerCase()]
                        },
                        has: function (i) {
                            return i.toLowerCase() in a
                        }
                    }
                }
            };
        for (var d in e.open(t.method || "get", n, !0), e.onload = function () {
                e.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (i, s, c) {
                    o.push(s = s.toLowerCase()), f.push([s, c]), a[s] = a[s] ? a[s] + "," + c : c
                }), u(l())
            }, e.onerror = r, e.withCredentials = t.credentials == "include", t.headers) e.setRequestHeader(d, t.headers[d]);
        e.send(t.body || null)
    })
}
const y = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: w
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    p = g(y);
var b = self.fetch || (self.fetch = p.default || p);
const _ = m(b),
    j = h({
        __proto__: null,
        default: _
    }, [b]);
export {
    j as b
};