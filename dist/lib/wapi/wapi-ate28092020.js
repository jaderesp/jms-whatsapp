!(function (e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = (t[o] = { i: o, l: !1, exports: {} });
        return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                    n.d(
                        o,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return o;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 1));
})([
    function (e, t, n) {
        "use strict";
        var o;
        !(function (i) {
            function r(e, t, n) {
                var o,
                    i,
                    r,
                    a,
                    s,
                    p,
                    h,
                    A,
                    b,
                    S = 0,
                    P = [],
                    m = 0,
                    I = !1,
                    M = [],
                    y = [],
                    W = !1,
                    C = !1,
                    v = -1;
                if (((o = (n = n || {}).encoding || "UTF8"), (b = n.numRounds || 1) !== parseInt(b, 10) || 1 > b)) throw Error("numRounds must a integer >= 1");
                if ("SHA-1" === e)
                    (s = 512),
                        (p = L),
                        (h = x),
                        (a = 160),
                        (A = function (e) {
                            return e.slice();
                        });
                else if (0 === e.lastIndexOf("SHA-", 0))
                    if (
                        ((p = function (t, n) {
                            return z(t, n, e);
                        }),
                        (h = function (t, n, o, i) {
                            var r, a;
                            if ("SHA-224" === e || "SHA-256" === e) (r = 15 + (((n + 65) >>> 9) << 4)), (a = 16);
                            else {
                                if ("SHA-384" !== e && "SHA-512" !== e) throw Error("Unexpected error in SHA-2 implementation");
                                (r = 31 + (((n + 129) >>> 10) << 5)), (a = 32);
                            }
                            for (; t.length <= r; ) t.push(0);
                            for (t[n >>> 5] |= 128 << (24 - (n % 32)), n += o, t[r] = 4294967295 & n, t[r - 1] = (n / 4294967296) | 0, o = t.length, n = 0; n < o; n += a) i = z(t.slice(n, n + a), i, e);
                            if ("SHA-224" === e) t = [i[0], i[1], i[2], i[3], i[4], i[5], i[6]];
                            else if ("SHA-256" === e) t = i;
                            else if ("SHA-384" === e) t = [i[0].a, i[0].b, i[1].a, i[1].b, i[2].a, i[2].b, i[3].a, i[3].b, i[4].a, i[4].b, i[5].a, i[5].b];
                            else {
                                if ("SHA-512" !== e) throw Error("Unexpected error in SHA-2 implementation");
                                t = [i[0].a, i[0].b, i[1].a, i[1].b, i[2].a, i[2].b, i[3].a, i[3].b, i[4].a, i[4].b, i[5].a, i[5].b, i[6].a, i[6].b, i[7].a, i[7].b];
                            }
                            return t;
                        }),
                        (A = function (e) {
                            return e.slice();
                        }),
                        "SHA-224" === e)
                    )
                        (s = 512), (a = 224);
                    else if ("SHA-256" === e) (s = 512), (a = 256);
                    else if ("SHA-384" === e) (s = 1024), (a = 384);
                    else {
                        if ("SHA-512" !== e) throw Error("Chosen SHA variant is not supported");
                        (s = 1024), (a = 512);
                    }
                else {
                    if (0 !== e.lastIndexOf("SHA3-", 0) && 0 !== e.lastIndexOf("SHAKE", 0)) throw Error("Chosen SHA variant is not supported");
                    var _ = 6;
                    if (
                        ((p = G),
                        (A = function (e) {
                            var t,
                                n = [];
                            for (t = 0; 5 > t; t += 1) n[t] = e[t].slice();
                            return n;
                        }),
                        (v = 1),
                        "SHA3-224" === e)
                    )
                        (s = 1152), (a = 224);
                    else if ("SHA3-256" === e) (s = 1088), (a = 256);
                    else if ("SHA3-384" === e) (s = 832), (a = 384);
                    else if ("SHA3-512" === e) (s = 576), (a = 512);
                    else if ("SHAKE128" === e) (s = 1344), (a = -1), (_ = 31), (C = !0);
                    else {
                        if ("SHAKE256" !== e) throw Error("Chosen SHA variant is not supported");
                        (s = 1088), (a = -1), (_ = 31), (C = !0);
                    }
                    h = function (e, t, n, o, i) {
                        var r,
                            a = _,
                            d = [],
                            u = (n = s) >>> 5,
                            l = 0,
                            c = t >>> 5;
                        for (r = 0; r < c && t >= n; r += u) (o = G(e.slice(r, r + u), o)), (t -= n);
                        for (e = e.slice(r), t %= n; e.length < u; ) e.push(0);
                        for (e[(r = t >>> 3) >> 2] ^= a << ((r % 4) * 8), e[u - 1] ^= 2147483648, o = G(e, o); 32 * d.length < i && ((e = o[l % 5][(l / 5) | 0]), d.push(e.b), !(32 * d.length >= i)); )
                            d.push(e.a), 0 == (64 * (l += 1)) % n && G(null, o);
                        return d;
                    };
                }
                (r = g(t, o, v)),
                    (i = B(e)),
                    (this.setHMACKey = function (t, n, r) {
                        var d;
                        if (!0 === I) throw Error("HMAC key already set");
                        if (!0 === W) throw Error("Cannot set HMAC key after calling update");
                        if (!0 === C) throw Error("SHAKE is not supported for HMAC");
                        if (((t = (n = g(n, (o = (r || {}).encoding || "UTF8"), v)(t)).binLen), (n = n.value), (r = (d = s >>> 3) / 4 - 1), d < t / 8)) {
                            for (n = h(n, t, 0, B(e), a); n.length <= r; ) n.push(0);
                            n[r] &= 4294967040;
                        } else if (d > t / 8) {
                            for (; n.length <= r; ) n.push(0);
                            n[r] &= 4294967040;
                        }
                        for (t = 0; t <= r; t += 1) (M[t] = 909522486 ^ n[t]), (y[t] = 1549556828 ^ n[t]);
                        (i = p(M, i)), (S = s), (I = !0);
                    }),
                    (this.update = function (e) {
                        var t,
                            n,
                            o,
                            a = 0,
                            d = s >>> 5;
                        for (e = (t = r(e, P, m)).binLen, n = t.value, t = e >>> 5, o = 0; o < t; o += d) a + s <= e && ((i = p(n.slice(o, o + d), i)), (a += s));
                        (S += a), (P = n.slice(a >>> 5)), (m = e % s), (W = !0);
                    }),
                    (this.getHash = function (t, n) {
                        var o, r, s, g;
                        if (!0 === I) throw Error("Cannot call getHash after setting HMAC key");
                        if (((s = f(n)), !0 === C)) {
                            if (-1 === s.shakeLen) throw Error("shakeLen must be specified in options");
                            a = s.shakeLen;
                        }
                        switch (t) {
                            case "HEX":
                                o = function (e) {
                                    return d(e, a, v, s);
                                };
                                break;
                            case "B64":
                                o = function (e) {
                                    return u(e, a, v, s);
                                };
                                break;
                            case "BYTES":
                                o = function (e) {
                                    return l(e, a, v);
                                };
                                break;
                            case "ARRAYBUFFER":
                                try {
                                    r = new ArrayBuffer(0);
                                } catch (e) {
                                    throw Error("ARRAYBUFFER not supported by this environment");
                                }
                                o = function (e) {
                                    return c(e, a, v);
                                };
                                break;
                            case "UINT8ARRAY":
                                try {
                                    r = new Uint8Array(0);
                                } catch (e) {
                                    throw Error("UINT8ARRAY not supported by this environment");
                                }
                                o = function (e) {
                                    return w(e, a, v);
                                };
                                break;
                            default:
                                throw Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
                        }
                        for (g = h(P.slice(), m, S, A(i), a), r = 1; r < b; r += 1) !0 === C && 0 != a % 32 && (g[g.length - 1] &= 16777215 >>> (24 - (a % 32))), (g = h(g, a, 0, B(e), a));
                        return o(g);
                    }),
                    (this.getHMAC = function (t, n) {
                        var o, r, g, b;
                        if (!1 === I) throw Error("Cannot call getHMAC without first setting HMAC key");
                        switch (((g = f(n)), t)) {
                            case "HEX":
                                o = function (e) {
                                    return d(e, a, v, g);
                                };
                                break;
                            case "B64":
                                o = function (e) {
                                    return u(e, a, v, g);
                                };
                                break;
                            case "BYTES":
                                o = function (e) {
                                    return l(e, a, v);
                                };
                                break;
                            case "ARRAYBUFFER":
                                try {
                                    o = new ArrayBuffer(0);
                                } catch (e) {
                                    throw Error("ARRAYBUFFER not supported by this environment");
                                }
                                o = function (e) {
                                    return c(e, a, v);
                                };
                                break;
                            case "UINT8ARRAY":
                                try {
                                    o = new Uint8Array(0);
                                } catch (e) {
                                    throw Error("UINT8ARRAY not supported by this environment");
                                }
                                o = function (e) {
                                    return w(e, a, v);
                                };
                                break;
                            default:
                                throw Error("outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
                        }
                        return (r = h(P.slice(), m, S, A(i), a)), (b = p(y, B(e))), o((b = h(r, a, s, b, a)));
                    });
            }
            function a(e, t) {
                (this.a = e), (this.b = t);
            }
            function s(e, t, n, o) {
                var i, r, a, s, d;
                for (t = t || [0], r = (n = n || 0) >>> 3, d = -1 === o ? 3 : 0, i = 0; i < e.length; i += 1) (a = (s = i + r) >>> 2), t.length <= a && t.push(0), (t[a] |= e[i] << (8 * (d + (s % 4) * o)));
                return { value: t, binLen: 8 * e.length + n };
            }
            function d(e, t, n, o) {
                var i,
                    r,
                    a,
                    s = "";
                for (t /= 8, a = -1 === n ? 3 : 0, i = 0; i < t; i += 1) (r = e[i >>> 2] >>> (8 * (a + (i % 4) * n))), (s += "0123456789abcdef".charAt((r >>> 4) & 15) + "0123456789abcdef".charAt(15 & r));
                return o.outputUpper ? s.toUpperCase() : s;
            }
            function u(e, t, n, o) {
                var i,
                    r,
                    a,
                    s,
                    d = "",
                    u = t / 8;
                for (s = -1 === n ? 3 : 0, i = 0; i < u; i += 3)
                    for (
                        r = i + 1 < u ? e[(i + 1) >>> 2] : 0,
                            a = i + 2 < u ? e[(i + 2) >>> 2] : 0,
                            a = (((e[i >>> 2] >>> (8 * (s + (i % 4) * n))) & 255) << 16) | (((r >>> (8 * (s + ((i + 1) % 4) * n))) & 255) << 8) | ((a >>> (8 * (s + ((i + 2) % 4) * n))) & 255),
                            r = 0;
                        4 > r;
                        r += 1
                    )
                        d += 8 * i + 6 * r <= t ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((a >>> (6 * (3 - r))) & 63) : o.b64Pad;
                return d;
            }
            function l(e, t, n) {
                var o,
                    i,
                    r,
                    a = "";
                for (t /= 8, r = -1 === n ? 3 : 0, o = 0; o < t; o += 1) (i = (e[o >>> 2] >>> (8 * (r + (o % 4) * n))) & 255), (a += String.fromCharCode(i));
                return a;
            }
            function c(e, t, n) {
                t /= 8;
                var o,
                    i,
                    r,
                    a = new ArrayBuffer(t);
                for (r = new Uint8Array(a), i = -1 === n ? 3 : 0, o = 0; o < t; o += 1) r[o] = (e[o >>> 2] >>> (8 * (i + (o % 4) * n))) & 255;
                return a;
            }
            function w(e, t, n) {
                t /= 8;
                var o,
                    i,
                    r = new Uint8Array(t);
                for (i = -1 === n ? 3 : 0, o = 0; o < t; o += 1) r[o] = (e[o >>> 2] >>> (8 * (i + (o % 4) * n))) & 255;
                return r;
            }
            function f(e) {
                var t = { outputUpper: !1, b64Pad: "=", shakeLen: -1 };
                if (((e = e || {}), (t.outputUpper = e.outputUpper || !1), !0 === e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad), !0 === e.hasOwnProperty("shakeLen"))) {
                    if (0 != e.shakeLen % 8) throw Error("shakeLen must be a multiple of 8");
                    t.shakeLen = e.shakeLen;
                }
                if ("boolean" != typeof t.outputUpper) throw Error("Invalid outputUpper formatting option");
                if ("string" != typeof t.b64Pad) throw Error("Invalid b64Pad formatting option");
                return t;
            }
            function g(e, t, n) {
                switch (t) {
                    case "UTF8":
                    case "UTF16BE":
                    case "UTF16LE":
                        break;
                    default:
                        throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
                }
                switch (e) {
                    case "HEX":
                        e = function (e, t, o) {
                            var i,
                                r,
                                a,
                                s,
                                d,
                                u,
                                l = e.length;
                            if (0 != l % 2) throw Error("String of HEX type must be in byte increments");
                            for (t = t || [0], d = (o = o || 0) >>> 3, u = -1 === n ? 3 : 0, i = 0; i < l; i += 2) {
                                if (((r = parseInt(e.substr(i, 2), 16)), isNaN(r))) throw Error("String of HEX type contains invalid characters");
                                for (a = (s = (i >>> 1) + d) >>> 2; t.length <= a; ) t.push(0);
                                t[a] |= r << (8 * (u + (s % 4) * n));
                            }
                            return { value: t, binLen: 4 * l + o };
                        };
                        break;
                    case "TEXT":
                        e = function (e, o, i) {
                            var r,
                                a,
                                s,
                                d,
                                u,
                                l,
                                c,
                                w,
                                f = 0;
                            if (((o = o || [0]), (u = (i = i || 0) >>> 3), "UTF8" === t))
                                for (w = -1 === n ? 3 : 0, s = 0; s < e.length; s += 1)
                                    for (
                                        a = [],
                                            128 > (r = e.charCodeAt(s))
                                                ? a.push(r)
                                                : 2048 > r
                                                ? (a.push(192 | (r >>> 6)), a.push(128 | (63 & r)))
                                                : 55296 > r || 57344 <= r
                                                ? a.push(224 | (r >>> 12), 128 | ((r >>> 6) & 63), 128 | (63 & r))
                                                : ((s += 1), (r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(s)))), a.push(240 | (r >>> 18), 128 | ((r >>> 12) & 63), 128 | ((r >>> 6) & 63), 128 | (63 & r))),
                                            d = 0;
                                        d < a.length;
                                        d += 1
                                    ) {
                                        for (l = (c = f + u) >>> 2; o.length <= l; ) o.push(0);
                                        (o[l] |= a[d] << (8 * (w + (c % 4) * n))), (f += 1);
                                    }
                            else if ("UTF16BE" === t || "UTF16LE" === t)
                                for (w = -1 === n ? 2 : 0, a = ("UTF16LE" === t && 1 !== n) || ("UTF16LE" !== t && 1 === n), s = 0; s < e.length; s += 1) {
                                    for (r = e.charCodeAt(s), !0 === a && (r = ((d = 255 & r) << 8) | (r >>> 8)), l = (c = f + u) >>> 2; o.length <= l; ) o.push(0);
                                    (o[l] |= r << (8 * (w + (c % 4) * n))), (f += 2);
                                }
                            return { value: o, binLen: 8 * f + i };
                        };
                        break;
                    case "B64":
                        e = function (e, t, o) {
                            var i,
                                r,
                                a,
                                s,
                                d,
                                u,
                                l,
                                c,
                                w = 0;
                            if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                            if (((r = e.indexOf("=")), (e = e.replace(/\=/g, "")), -1 !== r && r < e.length)) throw Error("Invalid '=' found in base-64 string");
                            for (t = t || [0], u = (o = o || 0) >>> 3, c = -1 === n ? 3 : 0, r = 0; r < e.length; r += 4) {
                                for (d = e.substr(r, 4), a = s = 0; a < d.length; a += 1) s |= (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(d.charAt(a))) << (18 - 6 * a);
                                for (a = 0; a < d.length - 1; a += 1) {
                                    for (i = (l = w + u) >>> 2; t.length <= i; ) t.push(0);
                                    (t[i] |= ((s >>> (16 - 8 * a)) & 255) << (8 * (c + (l % 4) * n))), (w += 1);
                                }
                            }
                            return { value: t, binLen: 8 * w + o };
                        };
                        break;
                    case "BYTES":
                        e = function (e, t, o) {
                            var i, r, a, s, d, u;
                            for (t = t || [0], a = (o = o || 0) >>> 3, u = -1 === n ? 3 : 0, r = 0; r < e.length; r += 1) (i = e.charCodeAt(r)), (s = (d = r + a) >>> 2), t.length <= s && t.push(0), (t[s] |= i << (8 * (u + (d % 4) * n)));
                            return { value: t, binLen: 8 * e.length + o };
                        };
                        break;
                    case "ARRAYBUFFER":
                        try {
                            e = new ArrayBuffer(0);
                        } catch (e) {
                            throw Error("ARRAYBUFFER not supported by this environment");
                        }
                        e = function (e, t, o) {
                            return s(new Uint8Array(e), t, o, n);
                        };
                        break;
                    case "UINT8ARRAY":
                        try {
                            e = new Uint8Array(0);
                        } catch (e) {
                            throw Error("UINT8ARRAY not supported by this environment");
                        }
                        e = function (e, t, o) {
                            return s(e, t, o, n);
                        };
                        break;
                    default:
                        throw Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
                }
                return e;
            }
            function p(e, t) {
                return (e << t) | (e >>> (32 - t));
            }
            function h(e, t) {
                return 32 < t ? ((t -= 32), new a((e.b << t) | (e.a >>> (32 - t)), (e.a << t) | (e.b >>> (32 - t)))) : 0 !== t ? new a((e.a << t) | (e.b >>> (32 - t)), (e.b << t) | (e.a >>> (32 - t))) : e;
            }
            function A(e, t) {
                return (e >>> t) | (e << (32 - t));
            }
            function b(e, t) {
                var n = null;
                n = new a(e.a, e.b);
                return 32 >= t
                    ? new a((n.a >>> t) | ((n.b << (32 - t)) & 4294967295), (n.b >>> t) | ((n.a << (32 - t)) & 4294967295))
                    : new a((n.b >>> (t - 32)) | ((n.a << (64 - t)) & 4294967295), (n.a >>> (t - 32)) | ((n.b << (64 - t)) & 4294967295));
            }
            function S(e, t) {
                return 32 >= t ? new a(e.a >>> t, (e.b >>> t) | ((e.a << (32 - t)) & 4294967295)) : new a(0, e.a >>> (t - 32));
            }
            function P(e, t, n) {
                return (e & t) ^ (~e & n);
            }
            function m(e, t, n) {
                return new a((e.a & t.a) ^ (~e.a & n.a), (e.b & t.b) ^ (~e.b & n.b));
            }
            function I(e, t, n) {
                return (e & t) ^ (e & n) ^ (t & n);
            }
            function M(e, t, n) {
                return new a((e.a & t.a) ^ (e.a & n.a) ^ (t.a & n.a), (e.b & t.b) ^ (e.b & n.b) ^ (t.b & n.b));
            }
            function y(e) {
                return A(e, 2) ^ A(e, 13) ^ A(e, 22);
            }
            function W(e) {
                var t = b(e, 28),
                    n = b(e, 34);
                return (e = b(e, 39)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function C(e) {
                return A(e, 6) ^ A(e, 11) ^ A(e, 25);
            }
            function v(e) {
                var t = b(e, 14),
                    n = b(e, 18);
                return (e = b(e, 41)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function _(e) {
                return A(e, 7) ^ A(e, 18) ^ (e >>> 3);
            }
            function E(e) {
                var t = b(e, 1),
                    n = b(e, 8);
                return (e = S(e, 7)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function O(e) {
                return A(e, 17) ^ A(e, 19) ^ (e >>> 10);
            }
            function T(e) {
                var t = b(e, 19),
                    n = b(e, 61);
                return (e = S(e, 6)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function U(e, t) {
                var n = (65535 & e) + (65535 & t);
                return ((((e >>> 16) + (t >>> 16) + (n >>> 16)) & 65535) << 16) | (65535 & n);
            }
            function k(e, t, n, o) {
                var i = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & o);
                return ((((e >>> 16) + (t >>> 16) + (n >>> 16) + (o >>> 16) + (i >>> 16)) & 65535) << 16) | (65535 & i);
            }
            function j(e, t, n, o, i) {
                var r = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & o) + (65535 & i);
                return ((((e >>> 16) + (t >>> 16) + (n >>> 16) + (o >>> 16) + (i >>> 16) + (r >>> 16)) & 65535) << 16) | (65535 & r);
            }
            function F(e, t) {
                var n, o, i;
                return (
                    (n = (65535 & e.b) + (65535 & t.b)),
                    (i = ((65535 & (o = (e.b >>> 16) + (t.b >>> 16) + (n >>> 16))) << 16) | (65535 & n)),
                    (n = (65535 & e.a) + (65535 & t.a) + (o >>> 16)),
                    new a(((65535 & (o = (e.a >>> 16) + (t.a >>> 16) + (n >>> 16))) << 16) | (65535 & n), i)
                );
            }
            function R(e, t, n, o) {
                var i, r, s;
                return (
                    (i = (65535 & e.b) + (65535 & t.b) + (65535 & n.b) + (65535 & o.b)),
                    (s = ((65535 & (r = (e.b >>> 16) + (t.b >>> 16) + (n.b >>> 16) + (o.b >>> 16) + (i >>> 16))) << 16) | (65535 & i)),
                    (i = (65535 & e.a) + (65535 & t.a) + (65535 & n.a) + (65535 & o.a) + (r >>> 16)),
                    new a(((65535 & (r = (e.a >>> 16) + (t.a >>> 16) + (n.a >>> 16) + (o.a >>> 16) + (i >>> 16))) << 16) | (65535 & i), s)
                );
            }
            function H(e, t, n, o, i) {
                var r, s, d;
                return (
                    (r = (65535 & e.b) + (65535 & t.b) + (65535 & n.b) + (65535 & o.b) + (65535 & i.b)),
                    (d = ((65535 & (s = (e.b >>> 16) + (t.b >>> 16) + (n.b >>> 16) + (o.b >>> 16) + (i.b >>> 16) + (r >>> 16))) << 16) | (65535 & r)),
                    (r = (65535 & e.a) + (65535 & t.a) + (65535 & n.a) + (65535 & o.a) + (65535 & i.a) + (s >>> 16)),
                    new a(((65535 & (s = (e.a >>> 16) + (t.a >>> 16) + (n.a >>> 16) + (o.a >>> 16) + (i.a >>> 16) + (r >>> 16))) << 16) | (65535 & r), d)
                );
            }
            function N(e, t) {
                return new a(e.a ^ t.a, e.b ^ t.b);
            }
            function B(e) {
                var t,
                    n = [];
                if ("SHA-1" === e) n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                else if (0 === e.lastIndexOf("SHA-", 0))
                    switch (((n = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]), (t = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), e)) {
                        case "SHA-224":
                            break;
                        case "SHA-256":
                            n = t;
                            break;
                        case "SHA-384":
                            n = [new a(3418070365, n[0]), new a(1654270250, n[1]), new a(2438529370, n[2]), new a(355462360, n[3]), new a(1731405415, n[4]), new a(41048885895, n[5]), new a(3675008525, n[6]), new a(1203062813, n[7])];
                            break;
                        case "SHA-512":
                            n = [new a(t[0], 4089235720), new a(t[1], 2227873595), new a(t[2], 4271175723), new a(t[3], 1595750129), new a(t[4], 2917565137), new a(t[5], 725511199), new a(t[6], 4215389547), new a(t[7], 327033209)];
                            break;
                        default:
                            throw Error("Unknown SHA variant");
                    }
                else {
                    if (0 !== e.lastIndexOf("SHA3-", 0) && 0 !== e.lastIndexOf("SHAKE", 0)) throw Error("No SHA variants supported");
                    for (e = 0; 5 > e; e += 1) n[e] = [new a(0, 0), new a(0, 0), new a(0, 0), new a(0, 0), new a(0, 0)];
                }
                return n;
            }
            function L(e, t) {
                var n,
                    o,
                    i,
                    r,
                    a,
                    s,
                    d,
                    u = [];
                for (n = t[0], o = t[1], i = t[2], r = t[3], a = t[4], d = 0; 80 > d; d += 1)
                    (u[d] = 16 > d ? e[d] : p(u[d - 3] ^ u[d - 8] ^ u[d - 14] ^ u[d - 16], 1)),
                        (s =
                            20 > d
                                ? j(p(n, 5), (o & i) ^ (~o & r), a, 1518500249, u[d])
                                : 40 > d
                                ? j(p(n, 5), o ^ i ^ r, a, 1859775393, u[d])
                                : 60 > d
                                ? j(p(n, 5), I(o, i, r), a, 2400959708, u[d])
                                : j(p(n, 5), o ^ i ^ r, a, 3395469782, u[d])),
                        (a = r),
                        (r = i),
                        (i = p(o, 30)),
                        (o = n),
                        (n = s);
                return (t[0] = U(n, t[0])), (t[1] = U(o, t[1])), (t[2] = U(i, t[2])), (t[3] = U(r, t[3])), (t[4] = U(a, t[4])), t;
            }
            function x(e, t, n, o) {
                var i;
                for (i = 15 + (((t + 65) >>> 9) << 4); e.length <= i; ) e.push(0);
                for (e[t >>> 5] |= 128 << (24 - (t % 32)), t += n, e[i] = 4294967295 & t, e[i - 1] = (t / 4294967296) | 0, t = e.length, i = 0; i < t; i += 16) o = L(e.slice(i, i + 16), o);
                return o;
            }
            function z(e, t, n) {
                var o,
                    i,
                    r,
                    s,
                    d,
                    u,
                    l,
                    c,
                    w,
                    f,
                    g,
                    p,
                    h,
                    A,
                    b,
                    S,
                    N,
                    B,
                    L,
                    x,
                    z,
                    G,
                    q,
                    K = [];
                if ("SHA-224" === n || "SHA-256" === n) (f = 64), (p = 1), (G = Number), (h = U), (A = k), (b = j), (S = _), (N = O), (B = y), (L = C), (z = I), (x = P), (q = D);
                else {
                    if ("SHA-384" !== n && "SHA-512" !== n) throw Error("Unexpected error in SHA-2 implementation");
                    (f = 80), (p = 2), (G = a), (h = F), (A = R), (b = H), (S = E), (N = T), (B = W), (L = v), (z = M), (x = m), (q = Y);
                }
                for (n = t[0], o = t[1], i = t[2], r = t[3], s = t[4], d = t[5], u = t[6], l = t[7], g = 0; g < f; g += 1)
                    16 > g ? ((w = g * p), (c = e.length <= w ? 0 : e[w]), (w = e.length <= w + 1 ? 0 : e[w + 1]), (K[g] = new G(c, w))) : (K[g] = A(N(K[g - 2]), K[g - 7], S(K[g - 15]), K[g - 16])),
                        (c = b(l, L(s), x(s, d, u), q[g], K[g])),
                        (w = h(B(n), z(n, o, i))),
                        (l = u),
                        (u = d),
                        (d = s),
                        (s = h(r, c)),
                        (r = i),
                        (i = o),
                        (o = n),
                        (n = h(c, w));
                return (t[0] = h(n, t[0])), (t[1] = h(o, t[1])), (t[2] = h(i, t[2])), (t[3] = h(r, t[3])), (t[4] = h(s, t[4])), (t[5] = h(d, t[5])), (t[6] = h(u, t[6])), (t[7] = h(l, t[7])), t;
            }
            function G(e, t) {
                var n,
                    o,
                    i,
                    r,
                    s = [],
                    d = [];
                if (null !== e) for (o = 0; o < e.length; o += 2) t[(o >>> 1) % 5][((o >>> 1) / 5) | 0] = N(t[(o >>> 1) % 5][((o >>> 1) / 5) | 0], new a(e[o + 1], e[o]));
                for (n = 0; 24 > n; n += 1) {
                    for (r = B("SHA3-"), o = 0; 5 > o; o += 1) {
                        i = t[o][0];
                        var u = t[o][1],
                            l = t[o][2],
                            c = t[o][3],
                            w = t[o][4];
                        s[o] = new a(i.a ^ u.a ^ l.a ^ c.a ^ w.a, i.b ^ u.b ^ l.b ^ c.b ^ w.b);
                    }
                    for (o = 0; 5 > o; o += 1) d[o] = N(s[(o + 4) % 5], h(s[(o + 1) % 5], 1));
                    for (o = 0; 5 > o; o += 1) for (i = 0; 5 > i; i += 1) t[o][i] = N(t[o][i], d[o]);
                    for (o = 0; 5 > o; o += 1) for (i = 0; 5 > i; i += 1) r[i][(2 * o + 3 * i) % 5] = h(t[o][i], q[o][i]);
                    for (o = 0; 5 > o; o += 1) for (i = 0; 5 > i; i += 1) t[o][i] = N(r[o][i], new a(~r[(o + 1) % 5][i].a & r[(o + 2) % 5][i].a, ~r[(o + 1) % 5][i].b & r[(o + 2) % 5][i].b));
                    t[0][0] = N(t[0][0], K[n]);
                }
                return t;
            }
            var D, Y, q, K;
            (Y = [
                new a(
                    (D = [
                        1116352408,
                        1899447441,
                        3049323471,
                        3921009573,
                        961987163,
                        1508970993,
                        2453635748,
                        2870763221,
                        3624381080,
                        310598401,
                        607225278,
                        1426881987,
                        1925078388,
                        2162078206,
                        2614888103,
                        3248222580,
                        3835390401,
                        4022224774,
                        264347078,
                        604807628,
                        770255983,
                        1249150122,
                        1555081692,
                        1996064986,
                        2554220882,
                        2821834349,
                        2952996808,
                        3210313671,
                        3336571891,
                        3584528711,
                        113926993,
                        338241895,
                        666307205,
                        773529912,
                        1294757372,
                        1396182291,
                        1695183700,
                        1986661051,
                        2177026350,
                        2456956037,
                        2730485921,
                        2820302411,
                        3259730800,
                        3345764771,
                        3516065817,
                        3600352804,
                        4094571909,
                        275423344,
                        430227734,
                        506948616,
                        659060556,
                        883997877,
                        958139571,
                        1322822218,
                        1537002063,
                        1747873779,
                        1955562222,
                        2024104815,
                        2227730452,
                        2361852424,
                        2428436474,
                        2756734187,
                        3204031479,
                        3329325298,
                    ])[0],
                    3609767458
                ),
                new a(D[1], 602891725),
                new a(D[2], 3964484399),
                new a(D[3], 2173295548),
                new a(D[4], 4081628472),
                new a(D[5], 3053834265),
                new a(D[6], 2937671579),
                new a(D[7], 3664609560),
                new a(D[8], 2734883394),
                new a(D[9], 1164996542),
                new a(D[10], 1323610764),
                new a(D[11], 3590304994),
                new a(D[12], 4068182383),
                new a(D[13], 991336113),
                new a(D[14], 633803317),
                new a(D[15], 3479774868),
                new a(D[16], 2666613458),
                new a(D[17], 944711139),
                new a(D[18], 2341262773),
                new a(D[19], 2007800933),
                new a(D[20], 1495990901),
                new a(D[21], 1856431235),
                new a(D[22], 3175218132),
                new a(D[23], 2198950837),
                new a(D[24], 3999719339),
                new a(D[25], 766784016),
                new a(D[26], 2566594879),
                new a(D[27], 3203337956),
                new a(D[28], 1034457026),
                new a(D[29], 2466948901),
                new a(D[30], 3758326383),
                new a(D[31], 168717936),
                new a(D[32], 1188179964),
                new a(D[33], 1546045734),
                new a(D[34], 1522805485),
                new a(D[35], 2643833823),
                new a(D[36], 2343527390),
                new a(D[37], 1014477480),
                new a(D[38], 1206759142),
                new a(D[39], 344077627),
                new a(D[40], 1290863460),
                new a(D[41], 3158454273),
                new a(D[42], 3505952657),
                new a(D[43], 106217008),
                new a(D[44], 3606008344),
                new a(D[45], 1432725776),
                new a(D[46], 1467031594),
                new a(D[47], 851169720),
                new a(D[48], 3100823752),
                new a(D[49], 1363258195),
                new a(D[50], 3750685593),
                new a(D[51], 3785050280),
                new a(D[52], 3318307427),
                new a(D[53], 3812723403),
                new a(D[54], 2003034995),
                new a(D[55], 3602036899),
                new a(D[56], 1575990012),
                new a(D[57], 1125592928),
                new a(D[58], 2716904306),
                new a(D[59], 442776044),
                new a(D[60], 593698344),
                new a(D[61], 3733110249),
                new a(D[62], 2999351573),
                new a(D[63], 3815920427),
                new a(3391569614, 3928383900),
                new a(3515267271, 566280711),
                new a(3940187606, 3454069534),
                new a(4118630271, 4000239992),
                new a(116418474, 1914138554),
                new a(174292421, 2731055270),
                new a(289380356, 3203993006),
                new a(460393269, 320620315),
                new a(685471733, 587496836),
                new a(852142971, 1086792851),
                new a(1017036298, 365543100),
                new a(1126000580, 2618297676),
                new a(1288033470, 3409855158),
                new a(1501505948, 4234509866),
                new a(1607167915, 987167468),
                new a(1816402316, 1246189591),
            ]),
                (K = [
                    new a(0, 1),
                    new a(0, 32898),
                    new a(2147483648, 32906),
                    new a(2147483648, 2147516416),
                    new a(0, 32907),
                    new a(0, 2147483649),
                    new a(2147483648, 2147516545),
                    new a(2147483648, 32777),
                    new a(0, 138),
                    new a(0, 136),
                    new a(0, 2147516425),
                    new a(0, 2147483658),
                    new a(0, 2147516555),
                    new a(2147483648, 139),
                    new a(2147483648, 32905),
                    new a(2147483648, 32771),
                    new a(2147483648, 32770),
                    new a(2147483648, 128),
                    new a(0, 32778),
                    new a(2147483648, 2147483658),
                    new a(2147483648, 2147516545),
                    new a(2147483648, 32896),
                    new a(0, 2147483649),
                    new a(2147483648, 2147516424),
                ]),
                (q = [
                    [0, 36, 3, 41, 18],
                    [1, 44, 10, 45, 2],
                    [62, 6, 43, 15, 61],
                    [28, 55, 25, 21, 56],
                    [27, 20, 39, 8, 14],
                ]),
                void 0 ===
                    (o = function () {
                        return r;
                    }.call(t, n, t, e)) || (e.exports = o);
        })();
    },
    function (e, t, n) {
        "use strict";
        function o(e, t) {
            for (var n = e.split(","), o = n[0].match(/:(.*?);/)[1], i = atob(n[1]), r = i.length, a = new Uint8Array(r); r--; ) a[r] = i.charCodeAt(r);
            return new File([a], t, { type: o });
        }
        n.r(t);
        var i = n(0);
        async function r(e) {
            let t = await e.arrayBuffer();
            var n = new i("SHA-256", "ARRAYBUFFER");
            return n.update(t), n.getHash("B64");
        }
        function a(e) {
            let t = "",
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let o = 0; o < e; o++) t += n.charAt(Math.floor(Math.random() * n.length));
            return t;
        }
        const s = function (e) {
                return e.unreadCount > 0;
            },
            d = function (e) {
                const t = window.Store.Chat.filter(s).map((e) => WAPI._serializeChatObj(e));
                return void 0 !== e && e(t), t;
            };
        async function u(e) {
            return (await WAPI.getGroupMetadata(e)).participants;
        }
        async function l(e, t) {
            const n = WAPI.getChat(e);
            for (; !n.msgs.msgLoadState.noEarlierMsgs; ) console.log("Loading..."), await n.loadEarlierMsgs();
            return console.log("done"), !0;
        }
        async function c(e, t) {
            Array.isArray(t) || (t = [t]);
            const n = new Store.MediaCollection(e);
            return "0.4.613" !== Debug.VERSION && (t = t.map((e) => ({ file: e }))), await n.processFiles(t, e, 1), n;
        }
        function w(e, t, n, i, r) {
            const a = new Store.WidFactory.createWid(t);
            return Store.Chat.find(a).then((t) => {
                var a = o(e, n);
                c(t, a).then((e) => {
                    e.models[0].sendToChat(t, { caption: i }), void 0 !== r && r(!0);
                });
            });
        }
        async function f(e, t, n) {
            var o = Store.Chat.get(t);
            let i = new window.Store.Sticker.modelClass();
            return (
                (i.__x_clientUrl = e.clientUrl),
                (i.__x_filehash = e.filehash),
                (i.__x_id = e.filehash),
                (i.__x_uploadhash = e.uploadhash),
                (i.__x_mediaKey = e.mediaKey),
                (i.__x_initialized = !1),
                (i.__x_mediaData.mediaStage = "INIT"),
                (i.mimetype = "image/webp"),
                (i.height = n && n.height ? n.height : 512),
                (i.width = n && n.width ? n.width : 512),
                await i.initialize(),
                await i.sendToChat(o)
            );
        }
        function g(e) {
            const t = new Store.MsgKey(Object.assign({}, Store.Msg.models[0].__x_id));
            return (t.fromMe = !0), (t.id = WAPI.getNewId().toUpperCase()), (t.remote = e), (t._serialized = `${t.fromMe}_${t.remote}_${t.id}`), t;
        }
        function p(e = !0, t) {
            return window.WAPI._newMessagesCallbacks.push({ callback: t, rmAfterUse: e }), !0;
        }
        let h = {};
        const A = [
            { id: "Store", conditions: (e) => (e.default && e.default.Chat && e.default.Msg ? e.default : null) },
            { id: "MediaCollection", conditions: (e) => (e.default && e.default.prototype && (void 0 !== e.default.prototype.processFiles || void 0 !== e.default.prototype.processAttachments) ? e.default : null) },
            { id: "MediaProcess", conditions: (e) => (e.BLOB ? e : null) },
            { id: "ChatUtil", conditions: (e) => (e.sendClear ? e : null) },
            { id: "GroupInvite", conditions: (e) => (e.queryGroupInviteCode ? e : null) },
            { id: "Wap", conditions: (e) => (e.createGroup ? e : null) },
            { id: "ServiceWorker", conditions: (e) => (e.default && e.default.killServiceWorker ? e : null) },
            { id: "State", conditions: (e) => (e.STATE && e.STREAM ? e : null) },
            { id: "WapDelete", conditions: (e) => (e.sendConversationDelete && 2 == e.sendConversationDelete.length ? e : null) },
            { id: "Conn", conditions: (e) => (e.default && e.default.ref && e.default.refTTL ? e.default : null) },
            { id: "WapQuery", conditions: (e) => (e.queryExist ? e : e.default && e.default.queryExist ? e.default : null) },
            { id: "CryptoLib", conditions: (e) => (e.decryptE2EMedia ? e : null) },
            { id: "OpenChat", conditions: (e) => (e.default && e.default.prototype && e.default.prototype.openChat ? e.default : null) },
            { id: "UserConstructor", conditions: (e) => (e.default && e.default.prototype && e.default.prototype.isServer && e.default.prototype.isUser ? e.default : null) },
            { id: "SendTextMsgToChat", conditions: (e) => (e.sendTextMsgToChat ? e.sendTextMsgToChat : null) },
            { id: "SendSeen", conditions: (e) => (e.sendSeen ? e.sendSeen : null) },
            { id: "sendDelete", conditions: (e) => (e.sendDelete ? e.sendDelete : null) },
            { id: "addAndSendMsgToChat", conditions: (e) => (e.addAndSendMsgToChat ? e.addAndSendMsgToChat : null) },
            { id: "sendMsgToChat", conditions: (e) => (e.sendMsgToChat ? e.sendMsgToChat : null) },
            { id: "Catalog", conditions: (e) => (e.Catalog ? e.Catalog : null) },
            { id: "bp", conditions: (e) => (e.default && e.default.toString().includes("binaryProtocol deprecated version") ? e.default : null) },
            { id: "MsgKey", conditions: (e) => (e.default && e.default.toString().includes("MsgKey error: id is already a MsgKey") ? e.default : null) },
            { id: "Parser", conditions: (e) => (e.convertToTextWithoutSpecialEmojis ? e.default : null) },
            { id: "Builders", conditions: (e) => (e.TemplateMessage && e.HydratedFourRowTemplate ? e : null) },
            { id: "Me", conditions: (e) => (e.PLATFORMS && e.Conn ? e.default : null) },
            { id: "CallUtils", conditions: (e) => (e.sendCallEnd && e.parseCall ? e : null) },
            { id: "Identity", conditions: (e) => (e.queryIdentity && e.updateIdentity ? e : null) },
            { id: "MyStatus", conditions: (e) => (e.getStatus && e.setMyStatus ? e : null) },
            { id: "ChatStates", conditions: (e) => (e.sendChatStatePaused && e.sendChatStateRecording && e.sendChatStateComposing ? e : null) },
            { id: "GroupActions", conditions: (e) => (e.sendExitGroup && e.localExitGroup ? e : null) },
            { id: "Features", conditions: (e) => (e.FEATURE_CHANGE_EVENT && e.features ? e : null) },
            { id: "MessageUtils", conditions: (e) => (e.storeMessages && e.appendMessage ? e : null) },
            { id: "WebMessageInfo", conditions: (e) => (e.WebMessageInfo && e.WebFeatures ? e.WebMessageInfo : null) },
            { id: "createMessageKey", conditions: (e) => (e.createMessageKey && e.createDeviceSentMessage ? e.createMessageKey : null) },
            { id: "Participants", conditions: (e) => (e.addParticipants && e.removeParticipants && e.promoteParticipants && e.demoteParticipants ? e : null) },
            { id: "WidFactory", conditions: (e) => (e.isWidlike && e.createWid && e.createWidFromWidLike ? e : null) },
            { id: "Base", conditions: (e) => (e.setSubProtocol && e.binSend && e.actionNode ? e : null) },
            { id: "Base2", conditions: (e) => (e.supportsFeatureFlags && e.parseMsgStubProto && e.binSend && e.subscribeLiveLocation ? e : null) },
            { id: "Versions", conditions: (e) => (e.loadProtoVersions && e.default[15] && e.default[16] && e.default[17] ? e : null) },
            { id: "Sticker", conditions: (e) => (e.default && e.default.Sticker ? e.default.Sticker : null) },
            { id: "MediaUpload", conditions: (e) => (e.default && e.default.mediaUpload ? e.default : null) },
            { id: "UploadUtils", conditions: (e) => (e.default && e.default.encryptAndUpload ? e.default : null) },
            { id: "Cmd", conditions: (e) => (e.default && e.default.openChatFromUnread ? e : null) },
        ];
        function b(e) {
            let t = 0,
                n = A;
            for (let o in e)
                if ("object" == typeof e[o] && null !== e[o]) {
                    let i = Object.values(e[o])[0];
                    if ("object" == typeof i && i.exports) {
                        for (let i in e[o]) {
                            let o = e(i);
                            if (
                                o &&
                                (n.forEach((e) => {
                                    if (!e.conditions || e.foundedModule) return;
                                    let n = e.conditions(o);
                                    null !== n && (t++, (e.foundedModule = n));
                                }),
                                t == n.length)
                            )
                                break;
                        }
                        let i = n.find((e) => "Store" === e.id);
                        return (
                            (window.Store = i.foundedModule ? i.foundedModule : {}),
                            n.splice(n.indexOf(i), 1),
                            n.forEach((e) => {
                                e.foundedModule && (window.Store[e.id] = e.foundedModule);
                            }),
                            (window.Store.sendMessage = function (e) {
                                return window.Store.SendTextMsgToChat(this, ...arguments);
                            }),
                            window.Store.MediaCollection && (window.Store.MediaCollection.prototype.processFiles = window.Store.MediaCollection.prototype.processFiles || window.Store.MediaCollection.prototype.processAttachments),
                            window.Store
                        );
                    }
                }
        }
        (window.Store && window.Store.Msg) ||
            (function () {
                const e = "parasite" + Date.now();
                "function" == typeof webpackJsonp ? webpackJsonp([], { [e]: (e, t, n) => b(n) }, [e]) : webpackJsonp.push([[e], { [e]: (e, t, n) => b(n) }, [[e]]]);
            })(),
            (window.WAPI = { lastRead: {} }),
            (window.WAPI._serializeRawObj = (e) => (e && e.toJSON ? e.toJSON() : {})),
            (window.WAPI._serializeChatObj = (e) =>
                null == e
                    ? null
                    : Object.assign(window.WAPI._serializeRawObj(e), {
                          kind: e.kind,
                          isGroup: e.isGroup,
                          contact: e.contact ? window.WAPI._serializeContactObj(e.contact) : null,
                          groupMetadata: e.groupMetadata ? window.WAPI._serializeRawObj(e.groupMetadata) : null,
                          presence: e.presence ? window.WAPI._serializeRawObj(e.presence) : null,
                          msgs: null,
                          isOnline: e.__x_presence.attributes.isOnline || null,
                          lastSeen: e && e.previewMessage && e.previewMessage.__x_ephemeralStartTimestamp ? 1e3 * e.previewMessage.__x_ephemeralStartTimestamp : null,
                      })),
            (window.WAPI._serializeContactObj = (e) =>
                null == e
                    ? null
                    : Object.assign(window.WAPI._serializeRawObj(e), {
                          formattedName: e.formattedName,
                          isHighLevelVerified: e.isHighLevelVerified,
                          isMe: e.isMe,
                          isMyContact: e.isMyContact,
                          isPSA: e.isPSA,
                          isUser: e.isUser,
                          isVerified: e.isVerified,
                          isWAContact: e.isWAContact,
                          profilePicThumbObj: e.profilePicThumb ? WAPI._serializeProfilePicThumb(e.profilePicThumb) : {},
                          statusMute: e.statusMute,
                          msgs: null,
                      })),
            (window.WAPI._serializeMessageObj = (e) => {
                if (null == e) return null;
                const t = WAPI._serializeChatObj(e.chat);
                return (
                    e.quotedMsg && e.quotedMsgObj(),
                    Object.assign(window.WAPI._serializeRawObj(e), {
                        id: e.id._serialized,
                        sender: e.senderObj ? WAPI._serializeContactObj(e.senderObj) : null,
                        timestamp: e.t,
                        content: e.body,
                        isGroupMsg: e.isGroupMsg,
                        isLink: e.isLink,
                        isMMS: e.isMMS,
                        isMedia: e.isMedia,
                        isNotification: e.isNotification,
                        isPSA: e.isPSA,
                        type: e.type,
                        chat: t,
                        isOnline: t.isOnline,
                        lastSeen: t.lastSeen,
                        chatId: e.id.remote,
                        quotedMsgObj: WAPI._serializeMessageObj(e._quotedMsgObj),
                        mediaData: window.WAPI._serializeRawObj(e.mediaData),
                        reply: (n) => window.WAPI.reply(t.id._serialized, n, e),
                    })
                );
            }),
            (window.WAPI._serializeNumberStatusObj = (e) => (null == e ? null : Object.assign({}, { id: e.jid, status: e.status, isBusiness: !0 === e.biz, canReceiveMessage: 200 === e.status }))),
            (window.WAPI._serializeProfilePicThumb = (e) => (null == e ? null : Object.assign({}, { eurl: e.eurl, id: e.id, img: e.img, imgFull: e.imgFull, raw: e.raw, tag: e.tag }))),
            (window.WAPI.createGroup = async function (e, t) {
                return Array.isArray(t) || (t = [t]), await window.Store.WapQuery.createGroup(e, t);
            }),
            (window.WAPI.leaveGroup = async function (e) {
                e = "string" == typeof e ? e : e._serialized;
                var t = WAPI.getChat(e);
                return Store.GroupActions.sendExitGroup(t);
            }),
            (window.WAPI.revokeGroupInviteLink = async function (e) {
                var t = Store.Chat.get(e);
                return !!t.isGroup && (await Store.GroupInvite.revokeGroupInvite(t), !0);
            }),
            (window.WAPI.getGroupInviteLink = async function (e) {
                var t = Store.Chat.get(e);
                return t.isGroup ? (await Store.GroupInvite.queryGroupInviteCode(t), "https://chat.whatsapp.com/" + t.inviteCode) : "";
            }),
            (window.WAPI.getGroupAdmins = async function (e, t) {
                const n = (await u(e)).filter((e) => e.isAdmin).map((e) => e.id);
                return void 0 !== t && t(n), n;
            }),
            (window.WAPI.removeParticipant = async function (e, t, n) {
                const o = Store.Chat.get(e),
                    i = o.groupMetadata.participants.get(t);
                return window.Store.Participants.removeParticipants(o, [i]).then(() => (n(!0), !0));
            }),
            (window.WAPI.addParticipant = async function (e, t, n) {
                const o = Store.Chat.get(e),
                    i = Store.Contact.get(t);
                return window.Store.Participants.addParticipants(o, [i]).then(() => (n(!0), !0));
            }),
            (window.WAPI.promoteParticipant = async function (e, t, n) {
                const o = Store.Chat.get(e),
                    i = o.groupMetadata.participants.get(t);
                return window.Store.Participants.promoteParticipants(o, [i]).then(() => (n(!0), !0));
            }),
            (window.WAPI.demoteParticipant = async function (e, t, n) {
                return window.Store.WapQuery.demoteParticipants(e, [t]).then(() => {
                    const o = Store.Chat.get(e),
                        i = o.groupMetadata.participants.get(t);
                    window.Store.Participants.demoteParticipants(o, [i]).then(() => (n(!0), !0));
                });
            }),
            (window.WAPI.sendChatstate = async function (e, t) {
                switch (e) {
                    case 0:
                        await window.Store.ChatStates.sendChatStateComposing(t);
                        break;
                    case 1:
                        await window.Store.ChatStates.sendChatStateRecording(t);
                        break;
                    case 2:
                        await window.Store.ChatStates.sendChatStatePaused(t);
                        break;
                    default:
                        return !1;
                }
                return !0;
            }),
            (window.WAPI.sendMessageWithThumb = function (e, t, n, o, i, r) {
                var a = WAPI.getChat(i);
                if (void 0 === a) return void 0 !== r && r(!1), !1;
                var s = { canonicalUrl: t, description: o, matchedText: t, title: n, thumbnail: e };
                return a.sendMessage(t, { linkPreview: s, mentionedJidList: [], quotedMsg: null, quotedMsgAdminGroupJid: null }), void 0 !== r && r(!0), !0;
            }),
            (window.WAPI.processMessageObj = function (e, t, n) {
                return e.isNotification ? (n ? WAPI._serializeMessageObj(e) : void 0) : !1 === e.id.fromMe || t ? WAPI._serializeMessageObj(e) : void 0;
            }),
            (window.WAPI.sendMessageWithTags = async function (e, t) {
                var n = e.id ? e : Store.Chat.get(e),
                    o = n.id._serialized,
                    i = n.msgs.filter((e) => e.__x_isSentByMe)[0];
                if (!i) return n.sendMessage(t);
                var r = Object.create(i),
                    a = window.WAPI.getNewMessageId(o),
                    s = t.match(/@(\d*)/g).map((e) => new Store.WidFactory.createUserWid(e.replace("@", ""))) || void 0,
                    d = { ack: 0, id: a, local: !0, self: "out", t: parseInt(new Date().getTime() / 1e3), to: new Store.WidFactory.createWid(o), isNewMsg: !0, type: "chat", body: t, quotedMsg: null, mentionedJidList: s };
                return Object.assign(r, d), await Store.addAndSendMsgToChat(n, r), a._serialized;
            }),
            (window.WAPI.sendMessage = function (e, t, n) {
                let o = WAPI.getChat(e);
                return void 0 !== o
                    ? void 0 !== n
                        ? (o.sendMessage(t).then(function () {
                              let e = 0;
                              !(function i() {
                                  for (let e = o.msgs.models.length - 1; e >= 0; e--) {
                                      let i = o.msgs.models[e];
                                      if (i.senderObj.isMe && i.body == t) return n(WAPI._serializeMessageObj(i)), True;
                                  }
                                  var r;
                                  (e += 1), console.log(e), e > 30 ? n(!0) : ((r = 500), new Promise((e) => setTimeout(e, r))).then(i);
                              })();
                          }),
                          !0)
                        : o.sendMessage(t).then((e) => o.lastReceivedKey._serialized)
                    : (void 0 !== n && n(!1), !1);
            }),
            (window.WAPI.sendMessage2 = function (e, t, n) {
                var o = WAPI.getChat(e);
                if (void 0 !== o)
                    try {
                        return (
                            void 0 !== n
                                ? o.sendMessage(t).then(function () {
                                      n(!0);
                                  })
                                : o.sendMessage(t),
                            !0
                        );
                    } catch (e) {
                        return void 0 !== n && n(!1), !1;
                    }
                return void 0 !== n && n(!1), !1;
            }),
            (window.WAPI.sendSeen = function (e, t) {
                var n = window.WAPI.getChat(e);
                return void 0 !== n
                    ? void 0 !== t
                        ? (Store.SendSeen(n, !1).then(function () {
                              t(!0);
                          }),
                          !0)
                        : (Store.SendSeen(n, !1), !0)
                    : (void 0 !== t && t(), !1);
            }),
            (window.WAPI.deleteConversation = function (e, t) {
                let n = new window.Store.UserConstructor(e, { intentionallyUsePrivateConstructor: !0 }),
                    o = WAPI.getChat(n);
                return o
                    ? (window.Store.sendDelete(o, !1)
                          .then(() => {
                              void 0 !== t && t(!0);
                          })
                          .catch(() => {
                              void 0 !== t && t(!1);
                          }),
                      !0)
                    : (void 0 !== t && t(!1), !1);
            }),
            (window.WAPI.deleteMessages = function (e, t, n, o) {
                const i = new Store.WidFactory.createWid(e),
                    r = WAPI.getChat(i);
                if (!r) return void 0 !== o && o(!1), !1;
                Array.isArray(t) || (t = [t]);
                let a = t.map((e) => ("string" == typeof e ? window.Store.Msg.get(e) : e)).filter((e) => e);
                if (0 == a.length) return !0;
                let s = n
                    ? [r.sendDeleteMsgs(a, r)]
                    : [
                          r.sendRevokeMsgs(
                              a.filter((e) => e.isSentByMe),
                              r
                          ),
                          r.sendDeleteMsgs(
                              a.filter((e) => !e.isSentByMe),
                              r
                          ),
                      ];
                return Promise.all(s).then((e) => (void 0 !== o && o(!0), !0));
            }),
            (window.WAPI.clearChat = async function (e) {
                return await Store.ChatUtil.sendClear(Store.Chat.get(e), !0);
            }),
            (window.WAPI.sendMessageToID = function (e, t, n) {
                try {
                    (window.getContact = (e) => Store.WapQuery.queryExist(e)),
                        window.getContact(e).then((o) => {
                            404 === o.status
                                ? n(!0)
                                : Store.Chat.find(o.jid)
                                      .then((e) => (e.sendMessage(t), !0))
                                      .catch((o) => (WAPI.sendMessage(e, t) ? (n(!0), !0) : (n(!1), !1)));
                        });
                } catch (i) {
                    if (0 === window.Store.Chat.length) return !1;
                    firstChat = Store.Chat.models[0];
                    var o = firstChat.id;
                    return (
                        (firstChat.id = "string" == typeof o ? e : new window.Store.UserConstructor(e, { intentionallyUsePrivateConstructor: !0 })),
                        void 0 !== n
                            ? (firstChat.sendMessage(t).then(function () {
                                  (firstChat.id = o), n(!0);
                              }),
                              !0)
                            : (firstChat.sendMessage(t), (firstChat.id = o), !0)
                    );
                }
                return void 0 !== n && n(!1), !1;
            }),
            (window.WAPI.sendImage = function (e, t, n, o, i) {
                return w(e, t, n, o, i);
            }),
            (window.WAPI.sendPtt = function (e, t, n, i, r) {
                const a = new Store.WidFactory.createWid(t);
                return Store.Chat.find(a).then((t) => {
                    var a = o(e, n);
                    c(t, a).then((e) => {
                        var n = e.models[0];
                        (n.mediaPrep._mediaData.type = "ptt"), n.mediaPrep.sendToChat(t, { caption: i }), void 0 !== r && r(!0);
                    });
                });
            }),
            (window.WAPI.sendFile = w),
            (window.WAPI.setMyName = async function (e) {
                return Store.Versions.default[11].BinaryProtocol || (Store.Versions.default[11].BinaryProtocol = new Store.bp(11)), await Store.Versions.default[11].setPushname(e);
            }),
            (window.WAPI.setMyStatus = function (e) {
                return Store.MyStatus.setMyStatus(e);
            }),
            (window.WAPI.sendVideoAsGif = function (e, t, n, i, r) {
                const a = new Store.WidFactory.createWid(t);
                return Store.Chat.find(a).then((t) => {
                    var a = o(e, n);
                    c(t, a).then((e) => {
                        var n = e.models[0];
                        (n.mediaPrep._mediaData.isGif = !0), (n.mediaPrep._mediaData.gifAttribution = 1), n.mediaPrep.sendToChat(t, { caption: i }), void 0 !== r && r(!0);
                    });
                });
            }),
            (window.WAPI.processFiles = c),
            (window.WAPI.sendImageWithProduct = function (e, t, n, i, r, a) {
                Store.Catalog.findCarouselCatalog(i).then((i) => {
                    if (i && i[0]) {
                        const d = i[0].productCollection.get(r),
                            u = {
                                productMsgOptions: {
                                    businessOwnerJid: d.catalogWid.toString({ legacy: !0 }),
                                    productId: d.id.toString(),
                                    url: d.url,
                                    productImageCount: d.productImageCollection.length,
                                    title: d.name,
                                    description: d.description,
                                    currencyCode: d.currency,
                                    priceAmount1000: d.priceAmount1000,
                                    type: "product",
                                },
                                caption: n,
                            };
                        var s = new Store.WidFactory.createWid(t);
                        return Store.Chat.find(s).then((t) => {
                            var n = o(e, filename);
                            c(t, n).then((e) => {
                                var n = e.models[0];
                                Object.entries(u.productMsgOptions).map(([e, t]) => (n.mediaPrep._mediaData[e] = t)), n.mediaPrep.sendToChat(t, u), void 0 !== a && a(!0);
                            });
                        });
                    }
                });
            }),
            (window.WAPI.sendContact = function (e, t) {
                Array.isArray(t) || (t = [t]), (t = t.map((e) => WAPI.getChat(e).__x_contact)).length > 1 ? window.WAPI.getChat(e).sendContactList(t) : 1 === t.length && window.WAPI.getChat(e).sendContact(t[0]);
            }),
            (window.WAPI.forwardMessages = async function (e, t, n) {
                Array.isArray(t) || (t = [t]);
                const o = t.map((e) => ("string" == typeof e ? window.Store.Msg.get(e) : window.Store.Msg.get(e.id))).filter((e) => !n || !e.__x_isSentByMe);
                return window.Store.Chat.get(e).forwardMessages(o);
            }),
            (window.WAPI.reply = async function (e, t, n) {
                "object" != typeof n && (n = Store.Msg.get(n));
                const o = Store.Chat.get(e),
                    i = { quotedParticipant: n.author || n.from, quotedStanzaID: n.id.id };
                let r = Object.create(o.msgs.filter((e) => e.__x_isSentByMe)[0]);
                const a = { ack: 0, id: g(e), local: !0, self: "out", t: parseInt(new Date().getTime() / 1e3), to: e, isNewMsg: !0, type: "chat", quotedMsg: n, body: t, ...i };
                Object.assign(r, a), await Store.addAndSendMsgToChat(o, r);
            }),
            (window.WAPI._sendSticker = f),
            (window.WAPI.encryptAndUploadFile = async function (e, t) {
                const n = await r(t),
                    o = a(32),
                    i = new AbortController().signal,
                    s = await window.Store.UploadUtils.encryptAndUpload({ blob: t, type: e, signal: i, mediaKey: o });
                return { ...s, clientUrl: s.url, filehash: n, id: n, uploadhash: s.encFilehash };
            }),
            (window.WAPI.sendImageAsSticker = async function (e, t, n) {
                const i = o("data:image/webp;base64," + e, "file.webp"),
                    r = await window.WAPI.encryptAndUploadFile("sticker", i);
                return await f(r, t, n);
            }),
            (window.WAPI.startTyping = async function (e) {
                await Store.ChatStates.sendChatStateComposing(e);
            }),
            (window.WAPI.stopTyping = async function (e) {
                await Store.ChatStates.sendChatStatePaused(e);
            }),
            (window.WAPI.sendLocation = async function (e, t, n, o) {
                const i = Store.Chat.get(e);
                var r = Object.create(Store.Msg.models.filter((e) => e.__x_isSentByMe && !e.quotedMsg)[0]);
                const a = {
                    ack: 0,
                    id: window.WAPI.getNewMessageId(e),
                    local: !0,
                    self: "out",
                    t: parseInt(new Date().getTime() / 1e3),
                    to: e,
                    isNewMsg: !0,
                    type: "location",
                    lat: t,
                    lng: n,
                    loc: o,
                    clientUrl: void 0,
                    directPath: void 0,
                    filehash: void 0,
                    uploadhash: void 0,
                    mediaKey: void 0,
                    isQuotedMsgAvailable: !1,
                    invis: !1,
                    mediaKeyTimestamp: void 0,
                    mimetype: void 0,
                    height: void 0,
                    width: void 0,
                    ephemeralStartTimestamp: void 0,
                    body: void 0,
                    mediaData: void 0,
                    isQuotedMsgAvailable: !1,
                };
                return Object.assign(r, a), await Promise.all(Store.addAndSendMsgToChat(i, r));
            }),
            (window.WAPI.blockContact = function (e, t) {
                const n = window.Store.Contact.get(e);
                return void 0 !== n ? (n.setBlock(!0), t(!0), !0) : (t(!1), !1);
            }),
            (window.WAPI.unblockContact = function (e, t) {
                const n = window.Store.Contact.get(e);
                return void 0 !== n ? (n.setBlock(!1), t(!0), !0) : (t(!1), !1);
            }),
            (window.WAPI.openChat = async function (e) {
                const t = Store.Chat.get(e);
                return Store.Cmd.default.openChatBottom(t);
            }),
            (window.WAPI.openChatAt = async function (e, t) {
                const n = Store.Chat.get(e),
                    o = n.msgs.models.find((e) => e.id.id === t),
                    i = { collection: n.msgs, msg: o, isUnreadDivider: !1 };
                return await Store.Cmd.default._openChat(n, i);
            }),
            (window.WAPI.getAllContacts = function (e) {
                const t = window.Store.Contact.map((e) => WAPI._serializeContactObj(e));
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getMyContacts = function (e) {
                const t = window.Store.Contact.filter((e) => !0 === e.isMyContact).map((e) => WAPI._serializeContactObj(e));
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getContact = function (e, t) {
                const n = window.Store.Contact.get(e);
                return void 0 !== t && t(window.WAPI._serializeContactObj(n)), window.WAPI._serializeContactObj(n);
            }),
            (window.WAPI.getAllChats = function (e) {
                const t = window.Store.Chat.map((e) => WAPI._serializeChatObj(e));
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.haveNewMsg = s),
            (window.WAPI.getAllChatsWithNewMsg = d),
            (window.WAPI.getAllChatIds = function (e) {
                const t = window.Store.Chat.map((e) => e.id._serialized || e.id);
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getAllNewMessages = function () {
                const e = JSON.stringify(
                    d()
                        .map((e) => WAPI.getChat(e.id._serialized))
                        .map((e) => e.msgs._models.filter((e) => e.isNewMsg)) || []
                );
                return JSON.parse(e);
            }),
            (window.WAPI.getAllUnreadMessages = async function () {
                const e = JSON.stringify(
                    d()
                        .map((e) => WAPI.getChat(e.id._serialized))
                        .map((e) => e.msgs._models.filter((e) => -1 === e.ack))
                        .flatMap((e) => e) || []
                );
                return JSON.parse(e);
            }),
            (window.WAPI.getAllChatsWithMessages = async function (e, t) {
                const n = [];
                e ? n.push(WAPI.getAllChatsWithNewMsg().map((e) => WAPI.getChat(e.id._serialized))) : n.push(WAPI.getAllChatIds().map((e) => WAPI.getChat(e)));
                const o = (await Promise.all(n)).flatMap((e) => e),
                    i = JSON.stringify(o);
                return JSON.parse(i);
            }),
            (window.WAPI.getAllGroups = function (e) {
                const t = window.Store.Chat.filter((e) => e.isGroup);
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getChat = function (e, t) {
                e = "string" == typeof e ? e : e._serialized;
                const n = window.Store.Chat.get(e);
                return (
                    n &&
                        (n.sendMessage = n.sendMessage
                            ? n.sendMessage
                            : function () {
                                  return window.Store.sendMessage.apply(this, arguments);
                              }),
                    void 0 !== t && t(n),
                    n
                );
            }),
            (window.WAPI.getStatus = async function (e) {
                return await Store.MyStatus.getStatus(e);
            }),
            (window.WAPI.getChatByName = function (e, t) {
                const n = window.Store.Chat.find((t) => t.name === e);
                return void 0 !== t && t(n), n;
            }),
            (window.WAPI.getNewId = function () {
                for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                return e;
            }),
            (window.WAPI.getChatById = function (e, t) {
                let n = WAPI.getChat(e);
                return (n = !!n && WAPI._serializeChatObj(n)), void 0 !== t && t(n), n;
            }),
            (window.WAPI.getUnreadMessagesInChat = function (e, t, n, o) {
                let i = WAPI.getChat(e).msgs._models,
                    r = [];
                for (let e = i.length - 1; e >= 0; e--) {
                    if ("remove" === e) continue;
                    let o = i[e];
                    if ("boolean" == typeof o.isNewMsg && !1 !== o.isNewMsg) {
                        o.isNewMsg = !1;
                        let e = WAPI.processMessageObj(o, t, n);
                        e && r.push(e);
                    }
                }
                return void 0 !== o && o(r), r;
            }),
            (window.WAPI.loadEarlierMessages = function (e, t) {
                const n = WAPI.getChat(e);
                void 0 !== t
                    ? n.loadEarlierMsgs().then(function () {
                          t();
                      })
                    : n.loadEarlierMsgs();
            }),
            (window.WAPI.loadAllEarlierMessages = l),
            (window.WAPI.asyncLoadAllEarlierMessages = function (e, t) {
                l(e), t();
            }),
            (window.WAPI.areAllMessagesLoaded = function (e, t) {
                return WAPI.getChat(e).msgs.msgLoadState.noEarlierMsgs ? (t && t(!0), !0) : (t && t(!1), !1);
            }),
            (window.WAPI.loadEarlierMessagesTillDate = function (e, t, n) {
                const o = WAPI.getChat(e);
                (x = function () {
                    o.msgs.models[0].t > t && !o.msgs.msgLoadState.noEarlierMsgs ? o.loadEarlierMsgs().then(x) : n();
                }),
                    x();
            }),
            (window.WAPI.getAllGroupMetadata = function (e) {
                const t = window.Store.GroupMetadata.map((e) => e.all);
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getGroupMetadata = async function (e, t) {
                let n = window.Store.GroupMetadata.find(e);
                return void 0 !== t && t(n), n;
            }),
            (window.WAPI._getGroupParticipants = u),
            (window.WAPI.getGroupParticipantIDs = async function (e, t) {
                const n = (await u(e)).map((e) => e.id);
                return void 0 !== t && t(n), n;
            }),
            (window.WAPI.getAllMessagesInChat = function (e, t, n, o) {
                let i = [];
                const r = WAPI.getChat(e).msgs._models;
                for (const e in r) {
                    if ("remove" === e) continue;
                    const o = r[e];
                    let a = WAPI.processMessageObj(o, t, n);
                    a && i.push(a);
                }
                return void 0 !== o && o(i), i;
            }),
            (window.WAPI.loadAndGetAllMessagesInChat = async function (e, t, n, o) {
                return WAPI.loadAllEarlierMessages(e).then((i) => {
                    let r = [];
                    const a = WAPI.getChat(e).msgs._models;
                    for (const e in a) {
                        if ("remove" === e) continue;
                        const o = a[e];
                        let i = WAPI.processMessageObj(o, t, n);
                        i && r.push(i);
                    }
                    return void 0 !== o && o(r), r;
                });
            }),
            (window.WAPI.getUnreadMessages = function (e, t, n, o) {
                const i = window.Store.Chat.models,
                    r = [];
                for (const o in i) {
                    if (isNaN(o)) continue;
                    const a = i[o];
                    let s = WAPI._serializeChatObj(a);
                    s.messages = [];
                    const d = a.msgs._models;
                    for (let n = d.length - 1; n >= 0; n--) {
                        const o = d[n];
                        if ("boolean" == typeof o.isNewMsg && !1 !== o.isNewMsg) {
                            o.isNewMsg = !1;
                            let n = WAPI.processMessageObj(o, e, t);
                            n && s.messages.push(n);
                        }
                    }
                    if (s.messages.length > 0) r.push(s);
                    else if (n) {
                        let n = a.unreadCount;
                        for (let o = d.length - 1; o >= 0; o--) {
                            const i = d[o];
                            if (n > 0) {
                                if (!i.isSentByMe) {
                                    let o = WAPI.processMessageObj(i, e, t);
                                    s.messages.unshift(o), (n -= 1);
                                }
                            } else {
                                if (-1 !== n) break;
                                if (!i.isSentByMe) {
                                    let n = WAPI.processMessageObj(i, e, t);
                                    s.messages.unshift(n);
                                    break;
                                }
                            }
                        }
                        s.messages.length > 0 && ((a.unreadCount = 0), r.push(s));
                    }
                }
                return void 0 !== o && o(r), r;
            }),
            (window.WAPI.getCommonGroups = async function (e, t) {
                let n = [];
                groups = window.WAPI.getAllGroups();
                for (let t in groups)
                    try {
                        (participants = await window.WAPI.getGroupParticipantIDs(groups[t].id)), participants.filter((t) => t == e).length && n.push(groups[t]);
                    } catch (e) {
                        console.log("Error in group:"), console.log(groups[t]), console.log(e);
                    }
                return void 0 !== t && t(n), n;
            }),
            (window.WAPI.getProfilePicFromServer = function (e) {
                return Store.WapQuery.profilePicFind(e).then((e) => e.eurl);
            }),
            (window.WAPI.downloadFileWithCredentials = function (e, t) {
                let n = new XMLHttpRequest();
                (n.onload = function () {
                    if (4 == n.readyState)
                        if (200 == n.status) {
                            let e = new FileReader();
                            e.readAsDataURL(n.response),
                                (e.onload = function (n) {
                                    t(e.result.substr(e.result.indexOf(",") + 1));
                                });
                        } else console.error(n.statusText);
                    else console.log(err), t(!1);
                }),
                    n.open("GET", e, !0),
                    (n.withCredentials = !0),
                    (n.responseType = "blob"),
                    n.send(null);
            }),
            (window.WAPI.getNumberProfile = async function (e, t) {
                try {
                    const n = await window.Store.WapQuery.queryExist(e);
                    if (void 0 === n.jid) throw 404;
                    const o = window.WAPI._serializeNumberStatusObj(n);
                    return 200 == o.status && (o.numberExists = !0), void 0 !== t && (t(window.WAPI._serializeNumberStatusObj(n)), t(o)), o;
                } catch (n) {
                    return void 0 !== t && t(window.WAPI._serializeNumberStatusObj({ status: n, jid: e })), n;
                }
            }),
            (window.WAPI.getMessageById = function (e, t) {
                let n = !1;
                try {
                    let t = window.Store.Msg.get(e);
                    t && (n = WAPI.processMessageObj(t, !0, !0));
                } catch (e) {}
                if (void 0 === t) return n;
                t(n);
            }),
            (window.WAPI.getNewMessageId = g),
            (window.WAPI.getFileHash = r),
            (window.WAPI.generateMediaKey = a),
            (window.WAPI.arrayBufferToBase64 = function (e) {
                for (var t, n = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(e), r = i.byteLength, a = r % 3, s = r - a, d = 0; d < s; d += 3)
                    n += o[(16515072 & (t = (i[d] << 16) | (i[d + 1] << 8) | i[d + 2])) >> 18] + o[(258048 & t) >> 12] + o[(4032 & t) >> 6] + o[63 & t];
                return 1 == a ? (n += o[(252 & (t = i[s])) >> 2] + o[(3 & t) << 4] + "==") : 2 == a && (n += o[(64512 & (t = (i[s] << 8) | i[s + 1])) >> 10] + o[(1008 & t) >> 4] + o[(15 & t) << 2] + "="), n;
            }),
            (window.WAPI.getHost = function () {
                return Store.Me.attributes;
            }),
            (window.WAPI.getMe = function (e) {
                const t = window.Store.Contact.get(window.Store.Conn.me);
                return void 0 !== e && e(t.all), t.all;
            }),
            (window.WAPI.isLoggedIn = function (e) {
                const t = window.Store.Contact && void 0 !== window.Store.Contact.checksum;
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.isConnected = function (e) {
                const t = null === document.querySelector('*[data-icon="alert-phone"]');
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getBatteryLevel = function () {
                return window.Store.Conn.plugged ? 100 : ((output = window.Store.Conn.battery), void 0 !== done && done(output), output);
            }),
            (window.WAPI.base64ImageToFile = o),
            (window.WAPI.base64ToFile = o),
            (window.WAPI._newMessagesQueue = []),
            (window.WAPI._newMessagesBuffer = null != sessionStorage.getItem("saved_msgs") ? JSON.parse(sessionStorage.getItem("saved_msgs")) : []),
            (window.WAPI._newMessagesDebouncer = null),
            (window.WAPI._newMessagesCallbacks = []),
            window.Store.Msg.off("add"),
            sessionStorage.removeItem("saved_msgs"),
            (window.WAPI._newMessagesListener = window.Store.Msg.on("add", (e) => {
                if (e && e.isNewMsg && !e.isSentByMe) {
                    let t = window.WAPI.processMessageObj(e, !1, !1);
                    t && (window.WAPI._newMessagesQueue.push(t), window.WAPI._newMessagesBuffer.push(t)),
                        !window.WAPI._newMessagesDebouncer &&
                            window.WAPI._newMessagesQueue.length > 0 &&
                            (window.WAPI._newMessagesDebouncer = setTimeout(() => {
                                let e = window.WAPI._newMessagesQueue;
                                (window.WAPI._newMessagesDebouncer = null), (window.WAPI._newMessagesQueue = []);
                                let t = [];
                                window.WAPI._newMessagesCallbacks.forEach(function (n) {
                                    void 0 !== n.callback && n.callback(e), !0 === n.rmAfterUse && t.push(n);
                                }),
                                    t.forEach(function (e) {
                                        let t = window.WAPI._newMessagesCallbacks.indexOf(e);
                                        window.WAPI._newMessagesCallbacks.splice(t, 1);
                                    });
                            }, 1e3));
                }
            })),
            (window.WAPI._unloadInform = (e) => {
                window.WAPI._newMessagesBuffer.forEach((e) => {
                    Object.keys(e).forEach((t) => (void 0 === e[t] ? delete e[t] : ""));
                }),
                    sessionStorage.setItem("saved_msgs", JSON.stringify(window.WAPI._newMessagesBuffer)),
                    window.WAPI._newMessagesCallbacks.forEach(function (e) {
                        void 0 !== e.callback && e.callback({ status: -1, message: "page will be reloaded, wait and register callback again." });
                    });
            }),
            window.addEventListener("unload", window.WAPI._unloadInform, !1),
            window.addEventListener("beforeunload", window.WAPI._unloadInform, !1),
            window.addEventListener("pageunload", window.WAPI._unloadInform, !1),
            (window.WAPI.waitNewMessages = p),
            (window.WAPI.allNewMessagesListener = (e) =>
                window.Store.Msg.on("add", (t) => {
                    if (t && t.isNewMsg) {
                        let n = window.WAPI.processMessageObj(t, !0, !1);
                        n && e(n);
                    }
                })),
            (window.WAPI.onStateChange = function (e) {
                return window.Store.State.default.on("change:state", e), !0;
            }),
            (window.WAPI.waitNewAcknowledgements = function (e) {
                return Store.Msg.on("change:ack", e), !0;
            }),
            (window.WAPI.onLiveLocation = function (e, t) {
                var n = Store.LiveLocation.get(e);
                return (
                    !!n &&
                    (n.participants.validLocations().map((e) =>
                        e.on("change:lastUpdated", (e, n, o) => {
                            console.log(e, n, o);
                            const { id: i, lat: r, lng: a, accuracy: s, degrees: d, speed: u, lastUpdated: l } = e,
                                c = { id: i.toString(), lat: r, lng: a, accuracy: s, degrees: d, speed: u, lastUpdated: l };
                            t(c);
                        })
                    ),
                    !0)
                );
            }),
            (window.WAPI.onParticipantsChanged = function (e, t) {
                const n = ["invite", "add", "remove", "leave", "promote", "demote"],
                    o = window.Store.Chat.get(e),
                    i = window.Store.GroupMetadata.get(e);
                h[e] ||
                    ((h[e] = {}),
                    i.participants.forEach((t) => {
                        h[e][t.id.toString()] = { subtype: "add", from: i.owner };
                    }));
                let r = 0;
                return (
                    o.on("change:groupMetadata.participants", (i) =>
                        o.on("all", (i, a) => {
                            const { isGroup: s, previewMessage: d } = a;
                            if (s && "change" === i && d && "gp2" === d.type && n.includes(d.subtype)) {
                                const { subtype: n, from: i, recipients: a } = d,
                                    s = a[0].toString();
                                (h[e][s] && h[e][a[0]].subtype == n) || (0 == r ? r++ : ((h[e][s] = { subtype: n, from: i }), t({ by: i.toString(), action: n, who: a }), o.off("all", this), (r = 0)));
                            }
                        })
                    ),
                    !0
                );
            }),
            (window.WAPI.onAddedToGroup = function (e) {
                return (
                    Store.Chat.on("add", (t) => {
                        t && t.isGroup && e(t);
                    }),
                    !0
                );
            }),
            (window.WAPI.sendMessageMentioned = async function (e, t, n) {
                Array.isArray(n) || (n = [n]);
                const o = WAPI.getChat(e),
                    i = await Store.Contact.serialize().filter((e) => n.includes(e.id.user));
                o.sendMessage(t, { linkPreview: null, mentionedJidList: i.map((e) => e.id), quotedMsg: null, quotedMsgAdminGroupJid: null });
            }),
            (window.WAPI.getProfilePicSmallFromId = function (e, t) {
                window.Store.ProfilePicThumb.find(e).then(
                    function (e) {
                        void 0 !== e.img ? window.WAPI.downloadFileWithCredentials(e.img, t) : t(!1);
                    },
                    function (e) {
                        t(!1);
                    }
                );
            }),
            (window.WAPI.getProfilePicFromId = function (e, t) {
                window.Store.ProfilePicThumb.find(e).then(
                    function (e) {
                        void 0 !== e.imgFull ? window.WAPI.downloadFileWithCredentials(e.imgFull, t) : t(!1);
                    },
                    function (e) {
                        t(!1);
                    }
                );
            }),
            (window.WAPI.getWAVersion = function () {
                return window.Debug.VERSION;
            });
    },
]);
