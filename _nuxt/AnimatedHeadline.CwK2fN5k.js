import {
    c as d,
    E as h,
    m,
    p as f,
    o as y,
    j as _,
    g as u,
    e as g
} from "./entry.C_XGDcki.js";
const b = {
    __name: "AnimatedHeadline",
    props: {
        content: String,
        isVisible: {
            type: Boolean,
            default: !1
        },
        splitType: {
            type: String,
            default: "words, chars"
        }
    },
    setup(o) {
        const l = o;
        let e = null;
        const t = d();
        h(() => l.isVisible, a => {
            a && c()
        }), m(() => {
            l.isVisible && c()
        }), f(() => {
            e == null || e.kill()
        });
        const p = a => {
                const i = u.utils.shuffle(a.words);
                e = u.timeline({
                    paused: !0
                }), i.forEach((s, n) => {
                    const r = [...s.querySelectorAll(".anim-headline__char")];
                    e.to(s, {
                        opacity: 1,
                        duration: 1,
                        ease: "none"
                    }, .1 + .08 * n), e.to(r, {
                        x: 0,
                        duration: 2,
                        ease: "power4.out"
                    }, .1 + .08 * n), e.to(r, {
                        opacity: 1,
                        duration: 1,
                        ease: "power4.out",
                        stagger: {
                            each: .05,
                            from: "random"
                        }
                    }, .1 + .08 * n)
                }), t == null || t.resolve()
            },
            c = async () => {
                await t, e == null || e.play(0)
            };
        return (a, i) => {
            const s = g;
            return y(), _(s, {
                content: o.content,
                type: o.splitType,
                "should-set-delay": !1,
                "should-restore": !1,
                "should-resize": !1,
                callback: p,
                "char-class": "anim-headline__char"
            }, null, 8, ["content", "type"])
        }
    }
};
export {
    b as
    default
};