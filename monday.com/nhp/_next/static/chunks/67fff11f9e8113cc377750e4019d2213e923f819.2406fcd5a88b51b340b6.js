(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [23], {
        "2qu3": function(e, t, r) {
            "use strict";
            var n = r("oI91"),
                o = r("/GRZ"),
                a = r("i2R6");

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        n(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                var r;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return c(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    u = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        u = !0, a = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                }
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            t.__esModule = !0, t.default = void 0;
            var s, d = (s = r("q1tI")) && s.__esModule ? s : {
                    default: s
                },
                f = r("8L3h"),
                p = r("jwwS");
            var h = [],
                y = [],
                b = !1;

            function m(e) {
                var t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then((function(e) {
                    return r.loading = !1, r.loaded = e, e
                })).catch((function(e) {
                    throw r.loading = !1, r.error = e, e
                })), r
            }

            function _(e) {
                var t = {
                        loading: !1,
                        loaded: {},
                        error: null
                    },
                    r = [];
                try {
                    Object.keys(e).forEach((function(n) {
                        var o = m(e[n]);
                        o.loading ? t.loading = !0 : (t.loaded[n] = o.loaded, t.error = o.error), r.push(o.promise), o.promise.then((function(e) {
                            t.loaded[n] = e
                        })).catch((function(e) {
                            t.error = e
                        }))
                    }))
                } catch (n) {
                    t.error = n
                }
                return t.promise = Promise.all(r).then((function(e) {
                    return t.loading = !1, e
                })).catch((function(e) {
                    throw t.loading = !1, e
                })), t
            }

            function g(e, t) {
                return d.default.createElement(function(e) {
                    return e && e.__esModule ? e.default : e
                }(e), t)
            }

            function v(e, t) {
                var r = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: g,
                        webpack: null,
                        modules: null
                    }, t),
                    n = null;

                function o() {
                    if (!n) {
                        var t = new O(e, r);
                        n = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return n.promise()
                }
                if (!b && "function" === typeof r.webpack) {
                    var a = r.webpack();
                    y.push((function(e) {
                        var t, r = l(a);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var n = t.value;
                                if (-1 !== e.indexOf(n)) return o()
                            }
                        } catch (i) {
                            r.e(i)
                        } finally {
                            r.f()
                        }
                    }))
                }
                var i = function(e, t) {
                    o();
                    var a = d.default.useContext(p.LoadableContext),
                        i = (0, f.useSubscription)(n);
                    return d.default.useImperativeHandle(t, (function() {
                        return {
                            retry: n.retry
                        }
                    }), []), a && Array.isArray(r.modules) && r.modules.forEach((function(e) {
                        a(e)
                    })), d.default.useMemo((function() {
                        return i.loading || i.error ? d.default.createElement(r.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: n.retry
                        }) : i.loaded ? r.render(i.loaded, e) : null
                    }), [e, i])
                };
                return i.preload = function() {
                    return o()
                }, i.displayName = "LoadableComponent", d.default.forwardRef(i)
            }
            var O = function() {
                function e(t, r) {
                    o(this, e), this._loadFn = t, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return a(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            r = this._opts;
                        t.loading && ("number" === typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), r.delay)), "number" === typeof r.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), r.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(t) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = u(u({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function w(e) {
                return v(m, e)
            }

            function j(e, t) {
                for (var r = []; e.length;) {
                    var n = e.pop();
                    r.push(n(t))
                }
                return Promise.all(r).then((function() {
                    if (e.length) return j(e, t)
                }))
            }
            w.Map = function(e) {
                if ("function" !== typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return v(_, e)
            }, w.preloadAll = function() {
                return new Promise((function(e, t) {
                    j(h).then(e, t)
                }))
            }, w.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(t) {
                    var r = function() {
                        return b = !0, t()
                    };
                    j(y, e).then(r, r)
                }))
            }, window.__NEXT_PRELOADREADY = w.preloadReady;
            var P = w;
            t.default = P
        },
        Vvt1: function(e, t, r) {
            e.exports = r("a6RD")
        },
        a6RD: function(e, t, r) {
            "use strict";
            var n = r("oI91");

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        n(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.__esModule = !0, t.noSSR = l, t.default = function(e, t) {
                var r = i.default,
                    n = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? n.loader = function() {
                    return e
                } : "function" === typeof e ? n.loader = e : "object" === typeof e && (n = a(a({}, n), e));
                if (n = a(a({}, n), t), "object" === typeof e && !(e instanceof Promise) && (e.render && (n.render = function(t, r) {
                        return e.render(r, t)
                    }), e.modules)) {
                    r = i.default.Map;
                    var o = {},
                        u = e.modules();
                    Object.keys(u).forEach((function(e) {
                        var t = u[e];
                        "function" !== typeof t.then ? o[e] = t : o[e] = function() {
                            return t.then((function(e) {
                                return e.default || e
                            }))
                        }
                    })), n.loader = o
                }
                n.loadableGenerated && delete(n = a(a({}, n), n.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof n.ssr) {
                    if (!n.ssr) return delete n.ssr, l(r, n);
                    delete n.ssr
                }
                return r(n)
            };
            u(r("q1tI"));
            var i = u(r("2qu3"));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        aH8o: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return d
            })), r.d(t, "a", (function() {
                return p
            }));
            var n, o = r("cpVT"),
                a = r("rNX+"),
                i = r("XqsQ"),
                u = r("icyP"),
                l = "ring_the_bell",
                c = "ipo_blog_post",
                s = "elevate_registration",
                d = [{
                    value: l,
                    text: "Ring the bell"
                }, {
                    value: c,
                    text: "IPO blog post"
                }, {
                    value: s,
                    text: "Elevate Registration"
                }],
                f = "https://dapulse-res.cloudinary.com/image/upload/q_auto/mondayhomepage/ipo/ipo-bell-gif.gif",
                p = (n = {}, Object(o.default)(n, l, {
                    textKey: "header.ipo.popup.ringTheBell.mainText",
                    ctaKey: "header.ipo.popup.ringTheBell.cta",
                    getLink: function() {
                        return a.rc
                    },
                    bannerTheme: u.i,
                    gifSrc: f
                }), Object(o.default)(n, c, {
                    textKey: "header.ipo.popup.ipoBlogPost.mainText",
                    ctaKey: "header.ipo.popup.ipoBlogPost.cta",
                    getLink: function(e) {
                        switch (e) {
                            case i.SPANISH_LOCALE_ID:
                                return a.Ab;
                            case i.PORTUGEESE_LOCALE_ID:
                                return a.zb;
                            case i.GERMAN_LOCALE_ID:
                                return a.xb;
                            case i.FRENCH_LOCALE_ID:
                                return a.wb;
                            default:
                                return a.yb
                        }
                    },
                    bannerTheme: u.i,
                    gifSrc: f
                }), Object(o.default)(n, s, {
                    textKey: "header.elevate.popup.mainText",
                    mobileTextKey: "header.elevate.popup.mobileText",
                    ctaKey: "header.elevate.popup.cta",
                    getLink: function() {
                        return a.T
                    },
                    popupClassName: "elevate",
                    bannerTheme: u.f,
                    gifSrc: "https://dapulse-res.cloudinary.com/image/upload/q_auto/mondayhomepage/elevate/star-rect.gif",
                    mobileImageSrc: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/mondayhomepage/elevate/star-static.png"
                }), n)
        },
        jwwS: function(e, t, r) {
            "use strict";
            var n;
            t.__esModule = !0, t.LoadableContext = void 0;
            var o = ((n = r("q1tI")) && n.__esModule ? n : {
                default: n
            }).default.createContext(null);
            t.LoadableContext = o
        }
    }
]);
//# sourceMappingURL=67fff11f9e8113cc377750e4019d2213e923f819.2406fcd5a88b51b340b6.js.map