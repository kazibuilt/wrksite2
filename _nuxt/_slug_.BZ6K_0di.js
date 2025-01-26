import {
    s as N,
    v as W,
    r as S,
    E as G,
    m as F,
    p as z,
    g as C,
    o as a,
    a as m,
    d as l,
    b as p,
    i as b,
    n as V,
    u as d,
    G as E,
    l as O,
    e as P,
    _ as k,
    j as g,
    w as T,
    F as B,
    k as M,
    O as U,
    t as L,
    f as j,
    A as J,
    h as w,
    D as R,
    P as K,
    Q as X,
    R as Y,
    M as Z,
    z as tt,
    S as et
} from "./entry.C_XGDcki.js";
import st from "./Tag.IeZyhnI-.js";
import {
    _ as ot
} from "./LogoToggler.BG1pZt59.js";
import at from "./WorkItem.kXh1J7BL.js";
import nt from "./Footer.BzOP24eX.js";
import {
    u as ct,
    a as rt
} from "./usePageMixin.B-M2lqaA.js";
import {
    f as lt
} from "./filterBySlug.Bor7qi44.js";
import "./Contact.Dv1i-ire.js";
import "./SectionTitle.JKfXi8mY.js";
import "./SocialLink.CJVG2S-b.js";
const it = {
        class: "project-hero__content"
    },
    _t = {
        class: "project-hero__title-wrapper"
    },
    pt = {
        class: "mono ttu"
    },
    ut = {
        key: 0,
        class: "project-hero__title-dot mono anim-char"
    },
    dt = ["datetime"],
    mt = {
        class: "project-hero__subtitle h1 h1--split"
    },
    yt = {
        __name: "Hero",
        props: {
            asset: Object,
            title: String,
            date: String,
            copy: String
        },
        setup(t) {
            const {
                callHook: y,
                $webgl: s
            } = E(), {
                isLoaderDone: n
            } = N(W()), e = S(null), r = S(null), c = S(!1);
            let i = null;
            G(() => n.value, v => {
                v && u()
            }), F(() => {
                $()
            }), z(() => {
                i == null || i.kill()
            });
            const h = () => {
                    n.value && C.delayedCall(1, u)
                },
                u = () => {
                    c.value = !0, C.fromTo(r.value, {
                        clipPath: "inset(50% 50% 50% 50% round 30px)"
                    }, {
                        clipPath: "inset(0% 0% 0% 0% round 0px)",
                        ease: "power4.inOut",
                        duration: 1.4
                    })
                },
                $ = () => {
                    i = C.timeline({
                        scrollTrigger: {
                            trigger: e.value,
                            start: "top top",
                            end: "bottom top",
                            scrub: !0
                        }
                    }), i.to(s.store, {
                        noisePropagation: 0,
                        ease: "none"
                    }, 0), i.fromTo(s.store, {
                        noiseDissolve: 0
                    }, {
                        noiseDissolve: 1,
                        ease: "none"
                    }, 0)
                };
            return (v, x) => {
                const o = O,
                    _ = P,
                    f = k;
                return a(), m("div", {
                    class: V([{
                        "is-visible": d(c)
                    }, "project-hero grid"]),
                    ref_key: "container",
                    ref: e
                }, [l("figure", {
                    ref_key: "fig",
                    ref: r,
                    class: "project-hero__fig"
                }, [p(o, {
                    data: {
                        ...t.asset
                    },
                    "is-fit": !0,
                    "image-sizes": "xs:100vw sm:100vw md:50vw lg:50vw xl:50vw xxl:50vw xxxl:50vw"
                }, null, 8, ["data"])], 512), l("div", it, [l("span", _t, [l("h1", pt, [p(_, {
                    content: t.title,
                    type: "chars",
                    "base-delay": .6
                }, null, 8, ["content"])]), t.date ? (a(), m("span", ut, "  ·  ")) : b("", !0), l("time", {
                    class: "mono ttu",
                    datetime: t.date
                }, [p(_, {
                    content: t.date,
                    type: "chars",
                    "base-delay": .6
                }, null, 8, ["content"])], 8, dt)]), p(f), l("h2", mt, [p(_, {
                    content: t.copy,
                    type: "lines",
                    "has-overflow": !0,
                    "base-delay": .8,
                    callback: h
                }, null, 8, ["content"])])])], 2)
            }
        }
    },
    ft = {
        key: 0,
        class: "project-info__tags"
    },
    gt = {
        class: "project-info__wrapper"
    },
    ht = ["innerHTML"],
    vt = ["href"],
    wt = l("svg", {
        class: "project-info__cta-svg"
    }, [l("use", {
        "xlink:href": "#arrow"
    })], -1),
    bt = {
        __name: "Info",
        props: {
            tags: Array,
            copy: String,
            cta: Object
        },
        setup(t) {
            return (y, s) => {
                const n = st,
                    e = j;
                return a(), g(e, {
                    class: "project-info grid"
                }, {
                    default: T(() => {
                        var r, c;
                        return [t.tags ? (a(), m("ul", ft, [(a(!0), m(B, null, M(t.tags, (i, h) => (a(), g(n, {
                            key: h,
                            label: i.label
                        }, null, 8, ["label"]))), 128))])) : b("", !0), l("div", gt, [t.copy ? (a(), m("div", {
                            key: 0,
                            class: "project-info__copy labor",
                            innerHTML: t.copy
                        }, null, 8, ht)) : b("", !0), (r = t.cta) != null && r.url && ((c = t.cta) != null && c.label) ? (a(), m("a", {
                            key: 1,
                            class: "project-info__cta labor",
                            href: t.cta.url,
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, [wt, U(" " + L(t.cta.label), 1)], 8, vt)) : b("", !0)])]
                    }),
                    _: 1
                })
            }
        }
    },
    $t = {
        key: 0,
        class: "quote__name mono ttu"
    },
    xt = {
        key: 1,
        class: "quote__copy h1 h1--split"
    },
    kt = {
        __name: "Quote",
        props: {
            name: {
                type: String,
                default: ""
            },
            quote: {
                type: String,
                default: ""
            }
        },
        setup(t) {
            return (y, s) => {
                const n = P,
                    e = k,
                    r = j;
                return a(), g(r, {
                    class: "quote gutters"
                }, {
                    default: T(() => [t.name ? (a(), m("div", $t, [p(n, {
                        content: t.name,
                        type: "chars"
                    }, null, 8, ["content"])])) : b("", !0), p(e), t.quote ? (a(), m("div", xt, [p(n, {
                        content: t.quote,
                        type: "lines",
                        "has-overflow": !0,
                        "base-delay": .2
                    }, null, 8, ["content"])])) : b("", !0)]),
                    _: 1
                })
            }
        }
    },
    Tt = {
        class: "copy-asset__asset"
    },
    jt = ["innerHTML"],
    St = {
        __name: "CopyAsset",
        props: {
            asset: Object,
            copy: String,
            isFlipped: Boolean
        },
        setup(t) {
            return (y, s) => {
                const n = O;
                return a(), m("div", {
                    class: V([{
                        "copy-asset--flipped": t.isFlipped
                    }, "copy-asset gutters"])
                }, [l("figure", Tt, [p(n, {
                    data: {
                        ...t.asset
                    },
                    "image-sizes": "xs:100vw sm:100vw md:50vw lg:50vw xl:50vw xxl:50vw xxxl:50vw"
                }, null, 8, ["data"])]), l("div", {
                    class: "copy-asset__copy labor",
                    innerHTML: t.copy
                }, null, 8, jt)], 2)
            }
        }
    },
    Ct = {
        class: "fullbleed-asset__fig"
    },
    Bt = {
        __name: "FullbleedAsset",
        props: {
            asset: Object,
            isInset: Boolean
        },
        setup(t) {
            return (y, s) => {
                const n = O;
                return a(), m("div", {
                    class: V([{
                        "fullbleed-asset--inset": t.isInset
                    }, "fullbleed-asset gutters"])
                }, [l("figure", Ct, [p(n, {
                    data: {
                        ...t.asset
                    }
                }, null, 8, ["data"])])], 2)
            }
        }
    },
    Mt = {
        class: "title-copy__wrapper labor"
    },
    Lt = {
        class: "title-copy__title anim-fade-line"
    },
    It = {
        class: "title-copy__copy"
    },
    Ht = {
        __name: "TitleCopy",
        props: {
            title: String,
            copy: String
        },
        setup(t) {
            return (y, s) => {
                const n = k,
                    e = P,
                    r = j;
                return a(), g(r, {
                    class: "title-copy gutters"
                }, {
                    default: T(() => [p(n, {
                        position: "right"
                    }), l("div", Mt, [l("div", Lt, L(t.title), 1), l("div", It, [p(e, {
                        content: t.copy,
                        type: "lines",
                        "line-class": "anim-fade-line",
                        "base-delay": .2
                    }, null, 8, ["content"])])])]),
                    _: 1
                })
            }
        }
    },
    At = {
        __name: "Proxy",
        props: {
            data: Object,
            type: String
        },
        setup(t) {
            const {
                asHTML: y
            } = J(), s = t, n = {
                quote: kt,
                copy_asset: St,
                fullbleed_asset: Bt,
                title_copy: Ht
            }, e = w(() => n[s.type]), r = w(() => {
                var c, i;
                return s.type === "quote" ? {
                    name: s.data.name,
                    quote: y(s.data.quote)
                } : s.type === "copy_asset" ? {
                    asset: R((c = s.data.asset) == null ? void 0 : c.data),
                    copy: y(s.data.copy),
                    isFlipped: s.data.isFlipped
                } : s.type === "fullbleed_asset" ? {
                    asset: R((i = s.data.asset) == null ? void 0 : i.data),
                    isInset: s.data.isInset
                } : s.type === "title_copy" ? {
                    title: s.data.title,
                    copy: y(s.data.copy)
                } : {}
            });
            return (c, i) => (a(), g(Y(d(e)), K(X(d(r))), null, 16))
        }
    },
    qt = {
        class: "project-factory"
    },
    Dt = {
        __name: "Factory",
        props: {
            items: Array
        },
        setup(t) {
            return (y, s) => {
                const n = At;
                return a(), m("div", qt, [(a(!0), m(B, null, M(t.items, ({
                    data: e,
                    type: r
                }, c) => (a(), g(n, {
                    key: c,
                    data: e,
                    type: r
                }, null, 8, ["data", "type"]))), 128))])
            }
        }
    },
    Ft = {
        class: "project-credits__row-wrapper labor"
    },
    Vt = {
        class: "project-credits__row-title"
    },
    Ot = ["innerHTML"],
    Pt = {
        __name: "Credits",
        props: {
            items: Array
        },
        setup(t) {
            const {
                callHook: y,
                $webgl: s
            } = E(), n = S(null);
            let e = null;
            F(() => {
                r()
            }), z(() => {
                e == null || e.kill()
            });
            const r = () => {
                e = C.timeline({
                    scrollTrigger: {
                        trigger: n.value,
                        start: "top top",
                        end: "bottom top",
                        scrub: !0
                    }
                }), e.to(s.store, {
                    noisePropagation: 1,
                    ease: "none"
                }, 0), e.to(s.store, {
                    noiseDissolve: 0
                }, 0)
            };
            return (c, i) => {
                const h = ot,
                    u = k,
                    $ = j;
                return a(), m("div", {
                    class: "project-credits grid",
                    ref_key: "container",
                    ref: n
                }, [p(h, {
                    theme: "dark",
                    "has-leave-event": !0
                }), (a(!0), m(B, null, M(t.items, ({
                    title: v,
                    lists: x
                }, o) => (a(), g($, {
                    key: o,
                    class: "project-credits__row"
                }, {
                    default: T(() => [p(u), l("div", Ft, [l("div", Vt, L(v), 1), l("div", {
                        class: "project-credits__row-copy",
                        innerHTML: x
                    }, null, 8, Ot)])]),
                    _: 2
                }, 1024))), 128))], 512)
            }
        }
    },
    Rt = {
        class: "project-recirc gutters"
    },
    Nt = {
        class: "project-recirc__title h1"
    },
    zt = {
        class: "project-recirc__wrapper"
    },
    Et = {
        __name: "Recirc",
        props: {
            title: String,
            items: Array
        },
        setup(t) {
            return (y, s) => {
                const n = k,
                    e = j,
                    r = at;
                return a(), m("div", Rt, [p(e, {
                    class: "project-recirc__title-wrapper"
                }, {
                    default: T(() => [p(n), l("h2", Nt, L(t.title), 1)]),
                    _: 1
                }), l("div", zt, [(a(!0), m(B, null, M(t.items, ({
                    asset: c,
                    slug: i,
                    excerpt: h,
                    tags: u,
                    featuredAsset: $,
                    featuredAssetLandscape: v,
                    hoverAsset: x,
                    hoverAssetLandscape: o
                }, _) => (a(), g(r, {
                    key: _,
                    asset: c,
                    slug: i,
                    excerpt: h,
                    tags: u,
                    layout: "tiny",
                    "featured-asset-portrait": $,
                    "featured-asset-landscape": v,
                    "hover-asset-portrait": x,
                    "hover-asset-landscape": o
                }, null, 8, ["asset", "slug", "excerpt", "tags", "featured-asset-portrait", "featured-asset-landscape", "hover-asset-portrait", "hover-asset-landscape"]))), 128))])])
            }
        }
    };

function Qt() {
    F(() => {}), Z(() => {})
}
const Wt = {
        class: "case-study"
    },
    oe = {
        __name: "[slug]",
        setup(t) {
            var x;
            const {
                globalData: y,
                workData: s
            } = N(tt()), n = et(), e = w(() => s == null ? void 0 : s.value.find(({
                slug: o
            }) => o.toLowerCase() === n.params.slug.toLowerCase())), r = w(() => {
                const {
                    metaDescription: o,
                    metaImage: _,
                    metaTitle: f
                } = e == null ? void 0 : e.value;
                return {
                    title: f,
                    description: o,
                    image: _
                }
            }), c = w(() => {
                const {
                    title: o,
                    date: _,
                    hero: f
                } = e == null ? void 0 : e.value;
                return {
                    title: o,
                    date: _,
                    copy: f == null ? void 0 : f.intro,
                    asset: f == null ? void 0 : f.asset
                }
            }), i = w(() => {
                const {
                    hero: o,
                    tags: _
                } = e == null ? void 0 : e.value;
                return {
                    tags: _,
                    copy: o == null ? void 0 : o.copy,
                    cta: o == null ? void 0 : o.cta
                }
            }), h = w(() => {
                const {
                    slices: o = null
                } = e == null ? void 0 : e.value;
                return o
            }), u = w(() => {
                const {
                    credits: o = null
                } = e == null ? void 0 : e.value;
                return o
            }), $ = w(() => {
                var o, _;
                return !!((o = u == null ? void 0 : u.value[0]) != null && o.lists) && !!((_ = u == null ? void 0 : u.value[0]) != null && _.title) && !!(u != null && u.value.length)
            }), v = w(() => {
                const {
                    recirc: o
                } = e == null ? void 0 : e.value, _ = (o == null ? void 0 : o.items) && lt(s.value, o.items) || null;
                return {
                    title: o.title,
                    items: _ == null ? void 0 : _.map(({
                        slug: f,
                        excerpt: I,
                        featuredAsset: H,
                        featuredAssetLandscape: A,
                        hoverAsset: q,
                        hoverAssetLandscape: D,
                        tags: Q
                    }) => ({
                        slug: f,
                        excerpt: I,
                        featuredAsset: H,
                        featuredAssetLandscape: A,
                        hoverAsset: q,
                        hoverAssetLandscape: D,
                        tags: Q
                    }))
                }
            });
            return ct(r == null ? void 0 : r.value, y.value.seo, (x = c == null ? void 0 : c.value) == null ? void 0 : x.title, `/work/${n.params.slug.toLowerCase()}`), rt(), Qt(), (o, _) => {
                const f = yt,
                    I = bt,
                    H = Dt,
                    A = Pt,
                    q = Et,
                    D = nt;
                return a(), m("div", Wt, [p(f, {
                    title: d(c).title,
                    date: d(c).date,
                    copy: d(c).copy,
                    asset: d(c).asset
                }, null, 8, ["title", "date", "copy", "asset"]), p(I, {
                    tags: d(i).tags,
                    copy: d(i).copy,
                    cta: d(i).cta
                }, null, 8, ["tags", "copy", "cta"]), d(h).length ? (a(), g(H, {
                    key: 0,
                    items: d(h)
                }, null, 8, ["items"])) : b("", !0), d($) ? (a(), g(A, {
                    key: 1,
                    items: d(u)
                }, null, 8, ["items"])) : b("", !0), d(v).items.length ? (a(), g(q, {
                    key: 2,
                    title: d(v).title,
                    items: d(v).items
                }, null, 8, ["title", "items"])) : b("", !0), p(D, {
                    "show-section-title": !1
                })])
            }
        }
    };
export {
    oe as
    default
};