!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                    n.d(
                        r,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return r;
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
        n((n.s = 9));
})([
    function (e, t, n) {
        "use strict";
        var r;
        !(function (i) {
            function o(e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    g,
                    p,
                    A,
                    y,
                    m = 0,
                    b = [],
                    v = 0,
                    P = !1,
                    I = [],
                    S = [],
                    W = !1,
                    M = !1,
                    C = -1;
                if (((r = (n = n || {}).encoding || "UTF8"), (y = n.numRounds || 1) !== parseInt(y, 10) || 1 > y)) throw Error("numRounds must a integer >= 1");
                if ("SHA-1" === e)
                    (s = 512),
                        (g = F),
                        (p = z),
                        (a = 160),
                        (A = function (e) {
                            return e.slice();
                        });
                else if (0 === e.lastIndexOf("SHA-", 0))
                    if (
                        ((g = function (t, n) {
                            return H(t, n, e);
                        }),
                        (p = function (t, n, r, i) {
                            var o, a;
                            if ("SHA-224" === e || "SHA-256" === e) (o = 15 + (((n + 65) >>> 9) << 4)), (a = 16);
                            else {
                                if ("SHA-384" !== e && "SHA-512" !== e) throw Error("Unexpected error in SHA-2 implementation");
                                (o = 31 + (((n + 129) >>> 10) << 5)), (a = 32);
                            }
                            for (; t.length <= o; ) t.push(0);
                            for (t[n >>> 5] |= 128 << (24 - (n % 32)), n += r, t[o] = 4294967295 & n, t[o - 1] = (n / 4294967296) | 0, r = t.length, n = 0; n < r; n += a) i = H(t.slice(n, n + a), i, e);
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
                        ((g = Y),
                        (A = function (e) {
                            var t,
                                n = [];
                            for (t = 0; 5 > t; t += 1) n[t] = e[t].slice();
                            return n;
                        }),
                        (C = 1),
                        "SHA3-224" === e)
                    )
                        (s = 1152), (a = 224);
                    else if ("SHA3-256" === e) (s = 1088), (a = 256);
                    else if ("SHA3-384" === e) (s = 832), (a = 384);
                    else if ("SHA3-512" === e) (s = 576), (a = 512);
                    else if ("SHAKE128" === e) (s = 1344), (a = -1), (_ = 31), (M = !0);
                    else {
                        if ("SHAKE256" !== e) throw Error("Chosen SHA variant is not supported");
                        (s = 1088), (a = -1), (_ = 31), (M = !0);
                    }
                    p = function (e, t, n, r, i) {
                        var o,
                            a = _,
                            u = [],
                            c = (n = s) >>> 5,
                            d = 0,
                            l = t >>> 5;
                        for (o = 0; o < l && t >= n; o += c) (r = Y(e.slice(o, o + c), r)), (t -= n);
                        for (e = e.slice(o), t %= n; e.length < c; ) e.push(0);
                        for (e[(o = t >>> 3) >> 2] ^= a << ((o % 4) * 8), e[c - 1] ^= 2147483648, r = Y(e, r); 32 * u.length < i && ((e = r[d % 5][(d / 5) | 0]), u.push(e.b), !(32 * u.length >= i)); )
                            u.push(e.a), 0 == (64 * (d += 1)) % n && Y(null, r);
                        return u;
                    };
                }
                (o = h(t, r, C)),
                    (i = N(e)),
                    (this.setHMACKey = function (t, n, o) {
                        var u;
                        if (!0 === P) throw Error("HMAC key already set");
                        if (!0 === W) throw Error("Cannot set HMAC key after calling update");
                        if (!0 === M) throw Error("SHAKE is not supported for HMAC");
                        if (((t = (n = h(n, (r = (o || {}).encoding || "UTF8"), C)(t)).binLen), (n = n.value), (o = (u = s >>> 3) / 4 - 1), u < t / 8)) {
                            for (n = p(n, t, 0, N(e), a); n.length <= o; ) n.push(0);
                            n[o] &= 4294967040;
                        } else if (u > t / 8) {
                            for (; n.length <= o; ) n.push(0);
                            n[o] &= 4294967040;
                        }
                        for (t = 0; t <= o; t += 1) (I[t] = 909522486 ^ n[t]), (S[t] = 1549556828 ^ n[t]);
                        (i = g(I, i)), (m = s), (P = !0);
                    }),
                    (this.update = function (e) {
                        var t,
                            n,
                            r,
                            a = 0,
                            u = s >>> 5;
                        for (e = (t = o(e, b, v)).binLen, n = t.value, t = e >>> 5, r = 0; r < t; r += u) a + s <= e && ((i = g(n.slice(r, r + u), i)), (a += s));
                        (m += a), (b = n.slice(a >>> 5)), (v = e % s), (W = !0);
                    }),
                    (this.getHash = function (t, n) {
                        var r, o, s, h;
                        if (!0 === P) throw Error("Cannot call getHash after setting HMAC key");
                        if (((s = w(n)), !0 === M)) {
                            if (-1 === s.shakeLen) throw Error("shakeLen must be specified in options");
                            a = s.shakeLen;
                        }
                        switch (t) {
                            case "HEX":
                                r = function (e) {
                                    return u(e, a, C, s);
                                };
                                break;
                            case "B64":
                                r = function (e) {
                                    return c(e, a, C, s);
                                };
                                break;
                            case "BYTES":
                                r = function (e) {
                                    return d(e, a, C);
                                };
                                break;
                            case "ARRAYBUFFER":
                                try {
                                    o = new ArrayBuffer(0);
                                } catch (e) {
                                    throw Error("ARRAYBUFFER not supported by this environment");
                                }
                                r = function (e) {
                                    return l(e, a, C);
                                };
                                break;
                            case "UINT8ARRAY":
                                try {
                                    o = new Uint8Array(0);
                                } catch (e) {
                                    throw Error("UINT8ARRAY not supported by this environment");
                                }
                                r = function (e) {
                                    return f(e, a, C);
                                };
                                break;
                            default:
                                throw Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
                        }
                        for (h = p(b.slice(), v, m, A(i), a), o = 1; o < y; o += 1) !0 === M && 0 != a % 32 && (h[h.length - 1] &= 16777215 >>> (24 - (a % 32))), (h = p(h, a, 0, N(e), a));
                        return r(h);
                    }),
                    (this.getHMAC = function (t, n) {
                        var r, o, h, y;
                        if (!1 === P) throw Error("Cannot call getHMAC without first setting HMAC key");
                        switch (((h = w(n)), t)) {
                            case "HEX":
                                r = function (e) {
                                    return u(e, a, C, h);
                                };
                                break;
                            case "B64":
                                r = function (e) {
                                    return c(e, a, C, h);
                                };
                                break;
                            case "BYTES":
                                r = function (e) {
                                    return d(e, a, C);
                                };
                                break;
                            case "ARRAYBUFFER":
                                try {
                                    r = new ArrayBuffer(0);
                                } catch (e) {
                                    throw Error("ARRAYBUFFER not supported by this environment");
                                }
                                r = function (e) {
                                    return l(e, a, C);
                                };
                                break;
                            case "UINT8ARRAY":
                                try {
                                    r = new Uint8Array(0);
                                } catch (e) {
                                    throw Error("UINT8ARRAY not supported by this environment");
                                }
                                r = function (e) {
                                    return f(e, a, C);
                                };
                                break;
                            default:
                                throw Error("outputFormat must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
                        }
                        return (o = p(b.slice(), v, m, A(i), a)), (y = g(S, N(e))), r((y = p(o, a, s, y, a)));
                    });
            }
            function a(e, t) {
                (this.a = e), (this.b = t);
            }
            function s(e, t, n, r) {
                var i, o, a, s, u;
                for (t = t || [0], o = (n = n || 0) >>> 3, u = -1 === r ? 3 : 0, i = 0; i < e.length; i += 1) (a = (s = i + o) >>> 2), t.length <= a && t.push(0), (t[a] |= e[i] << (8 * (u + (s % 4) * r)));
                return { value: t, binLen: 8 * e.length + n };
            }
            function u(e, t, n, r) {
                var i,
                    o,
                    a,
                    s = "";
                for (t /= 8, a = -1 === n ? 3 : 0, i = 0; i < t; i += 1) (o = e[i >>> 2] >>> (8 * (a + (i % 4) * n))), (s += "0123456789abcdef".charAt((o >>> 4) & 15) + "0123456789abcdef".charAt(15 & o));
                return r.outputUpper ? s.toUpperCase() : s;
            }
            function c(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u = "",
                    c = t / 8;
                for (s = -1 === n ? 3 : 0, i = 0; i < c; i += 3)
                    for (
                        o = i + 1 < c ? e[(i + 1) >>> 2] : 0,
                            a = i + 2 < c ? e[(i + 2) >>> 2] : 0,
                            a = (((e[i >>> 2] >>> (8 * (s + (i % 4) * n))) & 255) << 16) | (((o >>> (8 * (s + ((i + 1) % 4) * n))) & 255) << 8) | ((a >>> (8 * (s + ((i + 2) % 4) * n))) & 255),
                            o = 0;
                        4 > o;
                        o += 1
                    )
                        u += 8 * i + 6 * o <= t ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((a >>> (6 * (3 - o))) & 63) : r.b64Pad;
                return u;
            }
            function d(e, t, n) {
                var r,
                    i,
                    o,
                    a = "";
                for (t /= 8, o = -1 === n ? 3 : 0, r = 0; r < t; r += 1) (i = (e[r >>> 2] >>> (8 * (o + (r % 4) * n))) & 255), (a += String.fromCharCode(i));
                return a;
            }
            function l(e, t, n) {
                t /= 8;
                var r,
                    i,
                    o,
                    a = new ArrayBuffer(t);
                for (o = new Uint8Array(a), i = -1 === n ? 3 : 0, r = 0; r < t; r += 1) o[r] = (e[r >>> 2] >>> (8 * (i + (r % 4) * n))) & 255;
                return a;
            }
            function f(e, t, n) {
                t /= 8;
                var r,
                    i,
                    o = new Uint8Array(t);
                for (i = -1 === n ? 3 : 0, r = 0; r < t; r += 1) o[r] = (e[r >>> 2] >>> (8 * (i + (r % 4) * n))) & 255;
                return o;
            }
            function w(e) {
                var t = { outputUpper: !1, b64Pad: "=", shakeLen: -1 };
                if (((e = e || {}), (t.outputUpper = e.outputUpper || !1), !0 === e.hasOwnProperty("b64Pad") && (t.b64Pad = e.b64Pad), !0 === e.hasOwnProperty("shakeLen"))) {
                    if (0 != e.shakeLen % 8) throw Error("shakeLen must be a multiple of 8");
                    t.shakeLen = e.shakeLen;
                }
                if ("boolean" != typeof t.outputUpper) throw Error("Invalid outputUpper formatting option");
                if ("string" != typeof t.b64Pad) throw Error("Invalid b64Pad formatting option");
                return t;
            }
            function h(e, t, n) {
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
                        e = function (e, t, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                c,
                                d = e.length;
                            if (0 != d % 2) throw Error("String of HEX type must be in byte increments");
                            for (t = t || [0], u = (r = r || 0) >>> 3, c = -1 === n ? 3 : 0, i = 0; i < d; i += 2) {
                                if (((o = parseInt(e.substr(i, 2), 16)), isNaN(o))) throw Error("String of HEX type contains invalid characters");
                                for (a = (s = (i >>> 1) + u) >>> 2; t.length <= a; ) t.push(0);
                                t[a] |= o << (8 * (c + (s % 4) * n));
                            }
                            return { value: t, binLen: 4 * d + r };
                        };
                        break;
                    case "TEXT":
                        e = function (e, r, i) {
                            var o,
                                a,
                                s,
                                u,
                                c,
                                d,
                                l,
                                f,
                                w = 0;
                            if (((r = r || [0]), (c = (i = i || 0) >>> 3), "UTF8" === t))
                                for (f = -1 === n ? 3 : 0, s = 0; s < e.length; s += 1)
                                    for (
                                        a = [],
                                            128 > (o = e.charCodeAt(s))
                                                ? a.push(o)
                                                : 2048 > o
                                                ? (a.push(192 | (o >>> 6)), a.push(128 | (63 & o)))
                                                : 55296 > o || 57344 <= o
                                                ? a.push(224 | (o >>> 12), 128 | ((o >>> 6) & 63), 128 | (63 & o))
                                                : ((s += 1), (o = 65536 + (((1023 & o) << 10) | (1023 & e.charCodeAt(s)))), a.push(240 | (o >>> 18), 128 | ((o >>> 12) & 63), 128 | ((o >>> 6) & 63), 128 | (63 & o))),
                                            u = 0;
                                        u < a.length;
                                        u += 1
                                    ) {
                                        for (d = (l = w + c) >>> 2; r.length <= d; ) r.push(0);
                                        (r[d] |= a[u] << (8 * (f + (l % 4) * n))), (w += 1);
                                    }
                            else if ("UTF16BE" === t || "UTF16LE" === t)
                                for (f = -1 === n ? 2 : 0, a = ("UTF16LE" === t && 1 !== n) || ("UTF16LE" !== t && 1 === n), s = 0; s < e.length; s += 1) {
                                    for (o = e.charCodeAt(s), !0 === a && (o = ((u = 255 & o) << 8) | (o >>> 8)), d = (l = w + c) >>> 2; r.length <= d; ) r.push(0);
                                    (r[d] |= o << (8 * (f + (l % 4) * n))), (w += 2);
                                }
                            return { value: r, binLen: 8 * w + i };
                        };
                        break;
                    case "B64":
                        e = function (e, t, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                c,
                                d,
                                l,
                                f = 0;
                            if (-1 === e.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                            if (((o = e.indexOf("=")), (e = e.replace(/\=/g, "")), -1 !== o && o < e.length)) throw Error("Invalid '=' found in base-64 string");
                            for (t = t || [0], c = (r = r || 0) >>> 3, l = -1 === n ? 3 : 0, o = 0; o < e.length; o += 4) {
                                for (u = e.substr(o, 4), a = s = 0; a < u.length; a += 1) s |= (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(u.charAt(a))) << (18 - 6 * a);
                                for (a = 0; a < u.length - 1; a += 1) {
                                    for (i = (d = f + c) >>> 2; t.length <= i; ) t.push(0);
                                    (t[i] |= ((s >>> (16 - 8 * a)) & 255) << (8 * (l + (d % 4) * n))), (f += 1);
                                }
                            }
                            return { value: t, binLen: 8 * f + r };
                        };
                        break;
                    case "BYTES":
                        e = function (e, t, r) {
                            var i, o, a, s, u, c;
                            for (t = t || [0], a = (r = r || 0) >>> 3, c = -1 === n ? 3 : 0, o = 0; o < e.length; o += 1) (i = e.charCodeAt(o)), (s = (u = o + a) >>> 2), t.length <= s && t.push(0), (t[s] |= i << (8 * (c + (u % 4) * n)));
                            return { value: t, binLen: 8 * e.length + r };
                        };
                        break;
                    case "ARRAYBUFFER":
                        try {
                            e = new ArrayBuffer(0);
                        } catch (e) {
                            throw Error("ARRAYBUFFER not supported by this environment");
                        }
                        e = function (e, t, r) {
                            return s(new Uint8Array(e), t, r, n);
                        };
                        break;
                    case "UINT8ARRAY":
                        try {
                            e = new Uint8Array(0);
                        } catch (e) {
                            throw Error("UINT8ARRAY not supported by this environment");
                        }
                        e = function (e, t, r) {
                            return s(e, t, r, n);
                        };
                        break;
                    default:
                        throw Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY");
                }
                return e;
            }
            function g(e, t) {
                return (e << t) | (e >>> (32 - t));
            }
            function p(e, t) {
                return 32 < t ? ((t -= 32), new a((e.b << t) | (e.a >>> (32 - t)), (e.a << t) | (e.b >>> (32 - t)))) : 0 !== t ? new a((e.a << t) | (e.b >>> (32 - t)), (e.b << t) | (e.a >>> (32 - t))) : e;
            }
            function A(e, t) {
                return (e >>> t) | (e << (32 - t));
            }
            function y(e, t) {
                var n = null;
                n = new a(e.a, e.b);
                return 32 >= t
                    ? new a((n.a >>> t) | ((n.b << (32 - t)) & 4294967295), (n.b >>> t) | ((n.a << (32 - t)) & 4294967295))
                    : new a((n.b >>> (t - 32)) | ((n.a << (64 - t)) & 4294967295), (n.a >>> (t - 32)) | ((n.b << (64 - t)) & 4294967295));
            }
            function m(e, t) {
                return 32 >= t ? new a(e.a >>> t, (e.b >>> t) | ((e.a << (32 - t)) & 4294967295)) : new a(0, e.a >>> (t - 32));
            }
            function b(e, t, n) {
                return (e & t) ^ (~e & n);
            }
            function v(e, t, n) {
                return new a((e.a & t.a) ^ (~e.a & n.a), (e.b & t.b) ^ (~e.b & n.b));
            }
            function P(e, t, n) {
                return (e & t) ^ (e & n) ^ (t & n);
            }
            function I(e, t, n) {
                return new a((e.a & t.a) ^ (e.a & n.a) ^ (t.a & n.a), (e.b & t.b) ^ (e.b & n.b) ^ (t.b & n.b));
            }
            function S(e) {
                return A(e, 2) ^ A(e, 13) ^ A(e, 22);
            }
            function W(e) {
                var t = y(e, 28),
                    n = y(e, 34);
                return (e = y(e, 39)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function M(e) {
                return A(e, 6) ^ A(e, 11) ^ A(e, 25);
            }
            function C(e) {
                var t = y(e, 14),
                    n = y(e, 18);
                return (e = y(e, 41)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function _(e) {
                return A(e, 7) ^ A(e, 18) ^ (e >>> 3);
            }
            function E(e) {
                var t = y(e, 1),
                    n = y(e, 8);
                return (e = m(e, 7)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function T(e) {
                return A(e, 17) ^ A(e, 19) ^ (e >>> 10);
            }
            function O(e) {
                var t = y(e, 19),
                    n = y(e, 61);
                return (e = m(e, 6)), new a(t.a ^ n.a ^ e.a, t.b ^ n.b ^ e.b);
            }
            function R(e, t) {
                var n = (65535 & e) + (65535 & t);
                return ((((e >>> 16) + (t >>> 16) + (n >>> 16)) & 65535) << 16) | (65535 & n);
            }
            function U(e, t, n, r) {
                var i = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r);
                return ((((e >>> 16) + (t >>> 16) + (n >>> 16) + (r >>> 16) + (i >>> 16)) & 65535) << 16) | (65535 & i);
            }
            function k(e, t, n, r, i) {
                var o = (65535 & e) + (65535 & t) + (65535 & n) + (65535 & r) + (65535 & i);
                return ((((e >>> 16) + (t >>> 16) + (n >>> 16) + (r >>> 16) + (i >>> 16) + (o >>> 16)) & 65535) << 16) | (65535 & o);
            }
            function B(e, t) {
                var n, r, i;
                return (
                    (n = (65535 & e.b) + (65535 & t.b)),
                    (i = ((65535 & (r = (e.b >>> 16) + (t.b >>> 16) + (n >>> 16))) << 16) | (65535 & n)),
                    (n = (65535 & e.a) + (65535 & t.a) + (r >>> 16)),
                    new a(((65535 & (r = (e.a >>> 16) + (t.a >>> 16) + (n >>> 16))) << 16) | (65535 & n), i)
                );
            }
            function j(e, t, n, r) {
                var i, o, s;
                return (
                    (i = (65535 & e.b) + (65535 & t.b) + (65535 & n.b) + (65535 & r.b)),
                    (s = ((65535 & (o = (e.b >>> 16) + (t.b >>> 16) + (n.b >>> 16) + (r.b >>> 16) + (i >>> 16))) << 16) | (65535 & i)),
                    (i = (65535 & e.a) + (65535 & t.a) + (65535 & n.a) + (65535 & r.a) + (o >>> 16)),
                    new a(((65535 & (o = (e.a >>> 16) + (t.a >>> 16) + (n.a >>> 16) + (r.a >>> 16) + (i >>> 16))) << 16) | (65535 & i), s)
                );
            }
            function x(e, t, n, r, i) {
                var o, s, u;
                return (
                    (o = (65535 & e.b) + (65535 & t.b) + (65535 & n.b) + (65535 & r.b) + (65535 & i.b)),
                    (u = ((65535 & (s = (e.b >>> 16) + (t.b >>> 16) + (n.b >>> 16) + (r.b >>> 16) + (i.b >>> 16) + (o >>> 16))) << 16) | (65535 & o)),
                    (o = (65535 & e.a) + (65535 & t.a) + (65535 & n.a) + (65535 & r.a) + (65535 & i.a) + (s >>> 16)),
                    new a(((65535 & (s = (e.a >>> 16) + (t.a >>> 16) + (n.a >>> 16) + (r.a >>> 16) + (i.a >>> 16) + (o >>> 16))) << 16) | (65535 & o), u)
                );
            }
            function L(e, t) {
                return new a(e.a ^ t.a, e.b ^ t.b);
            }
            function N(e) {
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
            function F(e, t) {
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    c = [];
                for (n = t[0], r = t[1], i = t[2], o = t[3], a = t[4], u = 0; 80 > u; u += 1)
                    (c[u] = 16 > u ? e[u] : g(c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16], 1)),
                        (s =
                            20 > u
                                ? k(g(n, 5), (r & i) ^ (~r & o), a, 1518500249, c[u])
                                : 40 > u
                                ? k(g(n, 5), r ^ i ^ o, a, 1859775393, c[u])
                                : 60 > u
                                ? k(g(n, 5), P(r, i, o), a, 2400959708, c[u])
                                : k(g(n, 5), r ^ i ^ o, a, 3395469782, c[u])),
                        (a = o),
                        (o = i),
                        (i = g(r, 30)),
                        (r = n),
                        (n = s);
                return (t[0] = R(n, t[0])), (t[1] = R(r, t[1])), (t[2] = R(i, t[2])), (t[3] = R(o, t[3])), (t[4] = R(a, t[4])), t;
            }
            function z(e, t, n, r) {
                var i;
                for (i = 15 + (((t + 65) >>> 9) << 4); e.length <= i; ) e.push(0);
                for (e[t >>> 5] |= 128 << (24 - (t % 32)), t += n, e[i] = 4294967295 & t, e[i - 1] = (t / 4294967296) | 0, t = e.length, i = 0; i < t; i += 16) r = F(e.slice(i, i + 16), r);
                return r;
            }
            function H(e, t, n) {
                var r,
                    i,
                    o,
                    s,
                    u,
                    c,
                    d,
                    l,
                    f,
                    w,
                    h,
                    g,
                    p,
                    A,
                    y,
                    m,
                    L,
                    N,
                    F,
                    z,
                    H,
                    Y,
                    K,
                    q = [];
                if ("SHA-224" === n || "SHA-256" === n) (w = 64), (g = 1), (Y = Number), (p = R), (A = U), (y = k), (m = _), (L = T), (N = S), (F = M), (H = P), (z = b), (K = D);
                else {
                    if ("SHA-384" !== n && "SHA-512" !== n) throw Error("Unexpected error in SHA-2 implementation");
                    (w = 80), (g = 2), (Y = a), (p = B), (A = j), (y = x), (m = E), (L = O), (N = W), (F = C), (H = I), (z = v), (K = G);
                }
                for (n = t[0], r = t[1], i = t[2], o = t[3], s = t[4], u = t[5], c = t[6], d = t[7], h = 0; h < w; h += 1)
                    16 > h ? ((f = h * g), (l = e.length <= f ? 0 : e[f]), (f = e.length <= f + 1 ? 0 : e[f + 1]), (q[h] = new Y(l, f))) : (q[h] = A(L(q[h - 2]), q[h - 7], m(q[h - 15]), q[h - 16])),
                        (l = y(d, F(s), z(s, u, c), K[h], q[h])),
                        (f = p(N(n), H(n, r, i))),
                        (d = c),
                        (c = u),
                        (u = s),
                        (s = p(o, l)),
                        (o = i),
                        (i = r),
                        (r = n),
                        (n = p(l, f));
                return (t[0] = p(n, t[0])), (t[1] = p(r, t[1])), (t[2] = p(i, t[2])), (t[3] = p(o, t[3])), (t[4] = p(s, t[4])), (t[5] = p(u, t[5])), (t[6] = p(c, t[6])), (t[7] = p(d, t[7])), t;
            }
            function Y(e, t) {
                var n,
                    r,
                    i,
                    o,
                    s = [],
                    u = [];
                if (null !== e) for (r = 0; r < e.length; r += 2) t[(r >>> 1) % 5][((r >>> 1) / 5) | 0] = L(t[(r >>> 1) % 5][((r >>> 1) / 5) | 0], new a(e[r + 1], e[r]));
                for (n = 0; 24 > n; n += 1) {
                    for (o = N("SHA3-"), r = 0; 5 > r; r += 1) {
                        i = t[r][0];
                        var c = t[r][1],
                            d = t[r][2],
                            l = t[r][3],
                            f = t[r][4];
                        s[r] = new a(i.a ^ c.a ^ d.a ^ l.a ^ f.a, i.b ^ c.b ^ d.b ^ l.b ^ f.b);
                    }
                    for (r = 0; 5 > r; r += 1) u[r] = L(s[(r + 4) % 5], p(s[(r + 1) % 5], 1));
                    for (r = 0; 5 > r; r += 1) for (i = 0; 5 > i; i += 1) t[r][i] = L(t[r][i], u[r]);
                    for (r = 0; 5 > r; r += 1) for (i = 0; 5 > i; i += 1) o[i][(2 * r + 3 * i) % 5] = p(t[r][i], K[r][i]);
                    for (r = 0; 5 > r; r += 1) for (i = 0; 5 > i; i += 1) t[r][i] = L(o[r][i], new a(~o[(r + 1) % 5][i].a & o[(r + 2) % 5][i].a, ~o[(r + 1) % 5][i].b & o[(r + 2) % 5][i].b));
                    t[0][0] = L(t[0][0], q[n]);
                }
                return t;
            }
            var D, G, K, q;
            (G = [
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
                (q = [
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
                (K = [
                    [0, 36, 3, 41, 18],
                    [1, 44, 10, 45, 2],
                    [62, 6, 43, 15, 61],
                    [28, 55, 25, 21, 56],
                    [27, 20, 39, 8, 14],
                ]),
                void 0 ===
                    (r = function () {
                        return o;
                    }.call(t, n, t, e)) || (e.exports = r);
        })();
    },
    function (e, t, n) {
        (function (e) {
            function n(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                    var i = e[r];
                    "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
                }
                if (t) for (; n--; n) e.unshift("..");
                return e;
            }
            function r(e, t) {
                if (e.filter) return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                return n;
            }
            (t.resolve = function () {
                for (var t = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                    var a = o >= 0 ? arguments[o] : e.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && ((t = a + "/" + t), (i = "/" === a.charAt(0)));
                }
                return (
                    (i ? "/" : "") +
                        (t = n(
                            r(t.split("/"), function (e) {
                                return !!e;
                            }),
                            !i
                        ).join("/")) || "."
                );
            }),
                (t.normalize = function (e) {
                    var o = t.isAbsolute(e),
                        a = "/" === i(e, -1);
                    return (
                        (e = n(
                            r(e.split("/"), function (e) {
                                return !!e;
                            }),
                            !o
                        ).join("/")) ||
                            o ||
                            (e = "."),
                        e && a && (e += "/"),
                        (o ? "/" : "") + e
                    );
                }),
                (t.isAbsolute = function (e) {
                    return "/" === e.charAt(0);
                }),
                (t.join = function () {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return t.normalize(
                        r(e, function (e, t) {
                            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                            return e;
                        }).join("/")
                    );
                }),
                (t.relative = function (e, n) {
                    function r(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++);
                        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                        return t > n ? [] : e.slice(t, n - t + 1);
                    }
                    (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
                    for (var i = r(e.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), s = a, u = 0; u < a; u++)
                        if (i[u] !== o[u]) {
                            s = u;
                            break;
                        }
                    var c = [];
                    for (u = s; u < i.length; u++) c.push("..");
                    return (c = c.concat(o.slice(s))).join("/");
                }),
                (t.sep = "/"),
                (t.delimiter = ":"),
                (t.dirname = function (e) {
                    if (("string" != typeof e && (e += ""), 0 === e.length)) return ".";
                    for (var t = e.charCodeAt(0), n = 47 === t, r = -1, i = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (t = e.charCodeAt(o))) {
                            if (!i) {
                                r = o;
                                break;
                            }
                        } else i = !1;
                    return -1 === r ? (n ? "/" : ".") : n && 1 === r ? "/" : e.slice(0, r);
                }),
                (t.basename = function (e, t) {
                    var n = (function (e) {
                        "string" != typeof e && (e += "");
                        var t,
                            n = 0,
                            r = -1,
                            i = !0;
                        for (t = e.length - 1; t >= 0; --t)
                            if (47 === e.charCodeAt(t)) {
                                if (!i) {
                                    n = t + 1;
                                    break;
                                }
                            } else -1 === r && ((i = !1), (r = t + 1));
                        return -1 === r ? "" : e.slice(n, r);
                    })(e);
                    return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
                }),
                (t.extname = function (e) {
                    "string" != typeof e && (e += "");
                    for (var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1; a >= 0; --a) {
                        var s = e.charCodeAt(a);
                        if (47 !== s) -1 === r && ((i = !1), (r = a + 1)), 46 === s ? (-1 === t ? (t = a) : 1 !== o && (o = 1)) : -1 !== t && (o = -1);
                        else if (!i) {
                            n = a + 1;
                            break;
                        }
                    }
                    return -1 === t || -1 === r || 0 === o || (1 === o && t === r - 1 && t === n + 1) ? "" : e.slice(t, r);
                });
            var i =
                "b" === "ab".substr(-1)
                    ? function (e, t, n) {
                          return e.substr(t, n);
                      }
                    : function (e, t, n) {
                          return t < 0 && (t = e.length + t), e.substr(t, n);
                      };
        }.call(this, n(2)));
    },
    function (e, t) {
        var n,
            r,
            i = (e.exports = {});
        function o() {
            throw new Error("setTimeout has not been defined");
        }
        function a() {
            throw new Error("clearTimeout has not been defined");
        }
        function s(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
            try {
                return n(e, 0);
            } catch (t) {
                try {
                    return n.call(null, e, 0);
                } catch (t) {
                    return n.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (e) {
                n = o;
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
                r = a;
            }
        })();
        var u,
            c = [],
            d = !1,
            l = -1;
        function f() {
            d && u && ((d = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && w());
        }
        function w() {
            if (!d) {
                var e = s(f);
                d = !0;
                for (var t = c.length; t; ) {
                    for (u = c, c = []; ++l < t; ) u && u[l].run();
                    (l = -1), (t = c.length);
                }
                (u = null),
                    (d = !1),
                    (function (e) {
                        if (r === clearTimeout) return clearTimeout(e);
                        if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
                        try {
                            r(e);
                        } catch (t) {
                            try {
                                return r.call(null, e);
                            } catch (t) {
                                return r.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function h(e, t) {
            (this.fun = e), (this.array = t);
        }
        function g() {}
        (i.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new h(e, t)), 1 !== c.length || d || s(w);
        }),
            (h.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (i.title = "browser"),
            (i.browser = !0),
            (i.env = {}),
            (i.argv = []),
            (i.version = ""),
            (i.versions = {}),
            (i.on = g),
            (i.addListener = g),
            (i.once = g),
            (i.off = g),
            (i.removeListener = g),
            (i.removeAllListeners = g),
            (i.emit = g),
            (i.prependListener = g),
            (i.prependOnceListener = g),
            (i.listeners = function (e) {
                return [];
            }),
            (i.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (i.cwd = function () {
                return "/";
            }),
            (i.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (i.umask = function () {
                return 0;
            });
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <http://feross.org>
             * @license  MIT
             */
            var r = n(5),
                i = n(6),
                o = n(7);
            function a() {
                return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return u.TYPED_ARRAY_SUPPORT ? ((e = new Uint8Array(t)).__proto__ = u.prototype) : (null === e && (e = new u(t)), (e.length = t)), e;
            }
            function u(e, t, n) {
                if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e);
                }
                return c(this, e, t, n);
            }
            function c(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
                    ? (function (e, t, n, r) {
                          if ((t.byteLength, n < 0 || t.byteLength < n)) throw new RangeError("'offset' is out of bounds");
                          if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                          t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                          u.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = u.prototype) : (e = f(e, t));
                          return e;
                      })(e, t, n, r)
                    : "string" == typeof t
                    ? (function (e, t, n) {
                          ("string" == typeof n && "" !== n) || (n = "utf8");
                          if (!u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                          var r = 0 | h(t, n),
                              i = (e = s(e, r)).write(t, n);
                          i !== r && (e = e.slice(0, i));
                          return e;
                      })(e, t, n)
                    : (function (e, t) {
                          if (u.isBuffer(t)) {
                              var n = 0 | w(t.length);
                              return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n), e;
                          }
                          if (t) {
                              if (("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : f(e, t);
                              if ("Buffer" === t.type && o(t.data)) return f(e, t.data);
                          }
                          var r;
                          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                      })(e, t);
            }
            function d(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative');
            }
            function l(e, t) {
                if ((d(t), (e = s(e, t < 0 ? 0 : 0 | w(t))), !u.TYPED_ARRAY_SUPPORT)) for (var n = 0; n < t; ++n) e[n] = 0;
                return e;
            }
            function f(e, t) {
                var n = t.length < 0 ? 0 : 0 | w(t.length);
                e = s(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e;
            }
            function w(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e;
            }
            function h(e, t) {
                if (u.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var r = !1; ; )
                    switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return F(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return z(e).length;
                        default:
                            if (r) return F(e).length;
                            (t = ("" + t).toLowerCase()), (r = !0);
                    }
            }
            function g(e, t, n) {
                var r = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
                if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ; )
                    switch (e) {
                        case "hex":
                            return E(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return M(this, t, n);
                        case "ascii":
                            return C(this, t, n);
                        case "latin1":
                        case "binary":
                            return _(this, t, n);
                        case "base64":
                            return W(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return T(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            (e = (e + "").toLowerCase()), (r = !0);
                    }
            }
            function p(e, t, n) {
                var r = e[t];
                (e[t] = e[n]), (e[n] = r);
            }
            function A(e, t, n, r, i) {
                if (0 === e.length) return -1;
                if (("string" == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648), (n = +n), isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length)) {
                    if (i) return -1;
                    n = e.length - 1;
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0;
                }
                if (("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t))) return 0 === t.length ? -1 : y(e, t, n, r, i);
                if ("number" == typeof t)
                    return (t &= 255), u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n)) : y(e, [t], n, r, i);
                throw new TypeError("val must be string, number or Buffer");
            }
            function y(e, t, n, r, i) {
                var o,
                    a = 1,
                    s = e.length,
                    u = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    (a = 2), (s /= 2), (u /= 2), (n /= 2);
                }
                function c(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                if (i) {
                    var d = -1;
                    for (o = n; o < s; o++)
                        if (c(e, o) === c(t, -1 === d ? 0 : o - d)) {
                            if ((-1 === d && (d = o), o - d + 1 === u)) return d * a;
                        } else -1 !== d && (o -= o - d), (d = -1);
                } else
                    for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
                        for (var l = !0, f = 0; f < u; f++)
                            if (c(e, o + f) !== c(t, f)) {
                                l = !1;
                                break;
                            }
                        if (l) return o;
                    }
                return -1;
            }
            function m(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n;
                r ? (r = Number(r)) > i && (r = i) : (r = i);
                var o = t.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var a = 0; a < r; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(s)) return a;
                    e[n + a] = s;
                }
                return a;
            }
            function b(e, t, n, r) {
                return H(F(t, e.length - n), e, n, r);
            }
            function v(e, t, n, r) {
                return H(
                    (function (e) {
                        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t;
                    })(t),
                    e,
                    n,
                    r
                );
            }
            function P(e, t, n, r) {
                return v(e, t, n, r);
            }
            function I(e, t, n, r) {
                return H(z(t), e, n, r);
            }
            function S(e, t, n, r) {
                return H(
                    (function (e, t) {
                        for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) (n = e.charCodeAt(a)), (r = n >> 8), (i = n % 256), o.push(i), o.push(r);
                        return o;
                    })(t, e.length - n),
                    e,
                    n,
                    r
                );
            }
            function W(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
            }
            function M(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n; ) {
                    var o,
                        a,
                        s,
                        u,
                        c = e[i],
                        d = null,
                        l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                    if (i + l <= n)
                        switch (l) {
                            case 1:
                                c < 128 && (d = c);
                                break;
                            case 2:
                                128 == (192 & (o = e[i + 1])) && (u = ((31 & c) << 6) | (63 & o)) > 127 && (d = u);
                                break;
                            case 3:
                                (o = e[i + 1]), (a = e[i + 2]), 128 == (192 & o) && 128 == (192 & a) && (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) > 2047 && (u < 55296 || u > 57343) && (d = u);
                                break;
                            case 4:
                                (o = e[i + 1]),
                                    (a = e[i + 2]),
                                    (s = e[i + 3]),
                                    128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 && u < 1114112 && (d = u);
                        }
                    null === d ? ((d = 65533), (l = 1)) : d > 65535 && ((d -= 65536), r.push(((d >>> 10) & 1023) | 55296), (d = 56320 | (1023 & d))), r.push(d), (i += l);
                }
                return (function (e) {
                    var t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    var n = "",
                        r = 0;
                    for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
                    return n;
                })(r);
            }
            (t.Buffer = u),
                (t.SlowBuffer = function (e) {
                    +e != e && (e = 0);
                    return u.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (u.TYPED_ARRAY_SUPPORT =
                    void 0 !== e.TYPED_ARRAY_SUPPORT
                        ? e.TYPED_ARRAY_SUPPORT
                        : (function () {
                              try {
                                  var e = new Uint8Array(1);
                                  return (
                                      (e.__proto__ = {
                                          __proto__: Uint8Array.prototype,
                                          foo: function () {
                                              return 42;
                                          },
                                      }),
                                      42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                                  );
                              } catch (e) {
                                  return !1;
                              }
                          })()),
                (t.kMaxLength = a()),
                (u.poolSize = 8192),
                (u._augment = function (e) {
                    return (e.__proto__ = u.prototype), e;
                }),
                (u.from = function (e, t, n) {
                    return c(null, e, t, n);
                }),
                u.TYPED_ARRAY_SUPPORT &&
                    ((u.prototype.__proto__ = Uint8Array.prototype),
                    (u.__proto__ = Uint8Array),
                    "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, { value: null, configurable: !0 })),
                (u.alloc = function (e, t, n) {
                    return (function (e, t, n, r) {
                        return d(t), t <= 0 ? s(e, t) : void 0 !== n ? ("string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n)) : s(e, t);
                    })(null, e, t, n);
                }),
                (u.allocUnsafe = function (e) {
                    return l(null, e);
                }),
                (u.allocUnsafeSlow = function (e) {
                    return l(null, e);
                }),
                (u.isBuffer = function (e) {
                    return !(null == e || !e._isBuffer);
                }),
                (u.compare = function (e, t) {
                    if (!u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                        if (e[i] !== t[i]) {
                            (n = e[i]), (r = t[i]);
                            break;
                        }
                    return n < r ? -1 : r < n ? 1 : 0;
                }),
                (u.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1;
                    }
                }),
                (u.concat = function (e, t) {
                    if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return u.alloc(0);
                    var n;
                    if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    var r = u.allocUnsafe(t),
                        i = 0;
                    for (n = 0; n < e.length; ++n) {
                        var a = e[n];
                        if (!u.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(r, i), (i += a.length);
                    }
                    return r;
                }),
                (u.byteLength = h),
                (u.prototype._isBuffer = !0),
                (u.prototype.swap16 = function () {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                    return this;
                }),
                (u.prototype.swap32 = function () {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                    return this;
                }),
                (u.prototype.swap64 = function () {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                    return this;
                }),
                (u.prototype.toString = function () {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? M(this, 0, e) : g.apply(this, arguments);
                }),
                (u.prototype.equals = function (e) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === u.compare(this, e);
                }),
                (u.prototype.inspect = function () {
                    var e = "",
                        n = t.INSPECT_MAX_BYTES;
                    return this.length > 0 && ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")), this.length > n && (e += " ... ")), "<Buffer " + e + ">";
                }),
                (u.prototype.compare = function (e, t, n, r, i) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if ((void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length))
                        throw new RangeError("out of range index");
                    if (r >= i && t >= n) return 0;
                    if (r >= i) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(o, a), c = this.slice(r, i), d = e.slice(t, n), l = 0; l < s; ++l)
                        if (c[l] !== d[l]) {
                            (o = c[l]), (a = d[l]);
                            break;
                        }
                    return o < a ? -1 : a < o ? 1 : 0;
                }),
                (u.prototype.includes = function (e, t, n) {
                    return -1 !== this.indexOf(e, t, n);
                }),
                (u.prototype.indexOf = function (e, t, n) {
                    return A(this, e, t, n, !0);
                }),
                (u.prototype.lastIndexOf = function (e, t, n) {
                    return A(this, e, t, n, !1);
                }),
                (u.prototype.write = function (e, t, n, r) {
                    if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                    else if (void 0 === n && "string" == typeof t) (r = t), (n = this.length), (t = 0);
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        (t |= 0), isFinite(n) ? ((n |= 0), void 0 === r && (r = "utf8")) : ((r = n), (n = void 0));
                    }
                    var i = this.length - t;
                    if (((void 0 === n || n > i) && (n = i), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var o = !1; ; )
                        switch (r) {
                            case "hex":
                                return m(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return b(this, e, t, n);
                            case "ascii":
                                return v(this, e, t, n);
                            case "latin1":
                            case "binary":
                                return P(this, e, t, n);
                            case "base64":
                                return I(this, e, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return S(this, e, t, n);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + r);
                                (r = ("" + r).toLowerCase()), (o = !0);
                        }
                }),
                (u.prototype.toJSON = function () {
                    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                });
            function C(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                return r;
            }
            function _(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r;
            }
            function E(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", o = t; o < n; ++o) i += N(e[o]);
                return i;
            }
            function T(e, t, n) {
                for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i;
            }
            function O(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
            }
            function R(e, t, n, r, i, o) {
                if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range");
            }
            function U(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
            }
            function k(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
            }
            function B(e, t, n, r, i, o) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range");
            }
            function j(e, t, n, r, o) {
                return o || B(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
            }
            function x(e, t, n, r, o) {
                return o || B(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
            }
            (u.prototype.slice = function (e, t) {
                var n,
                    r = this.length;
                if (((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), u.TYPED_ARRAY_SUPPORT))
                    (n = this.subarray(e, t)).__proto__ = u.prototype;
                else {
                    var i = t - e;
                    n = new u(i, void 0);
                    for (var o = 0; o < i; ++o) n[o] = this[o + e];
                }
                return n;
            }),
                (u.prototype.readUIntLE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || O(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
                    return r;
                }),
                (u.prototype.readUIntBE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || O(e, t, this.length);
                    for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) r += this[e + --t] * i;
                    return r;
                }),
                (u.prototype.readUInt8 = function (e, t) {
                    return t || O(e, 1, this.length), this[e];
                }),
                (u.prototype.readUInt16LE = function (e, t) {
                    return t || O(e, 2, this.length), this[e] | (this[e + 1] << 8);
                }),
                (u.prototype.readUInt16BE = function (e, t) {
                    return t || O(e, 2, this.length), (this[e] << 8) | this[e + 1];
                }),
                (u.prototype.readUInt32LE = function (e, t) {
                    return t || O(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
                }),
                (u.prototype.readUInt32BE = function (e, t) {
                    return t || O(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
                }),
                (u.prototype.readIntLE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || O(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) r += this[e + o] * i;
                    return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (u.prototype.readIntBE = function (e, t, n) {
                    (e |= 0), (t |= 0), n || O(e, t, this.length);
                    for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); ) o += this[e + --r] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
                }),
                (u.prototype.readInt8 = function (e, t) {
                    return t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                }),
                (u.prototype.readInt16LE = function (e, t) {
                    t || O(e, 2, this.length);
                    var n = this[e] | (this[e + 1] << 8);
                    return 32768 & n ? 4294901760 | n : n;
                }),
                (u.prototype.readInt16BE = function (e, t) {
                    t || O(e, 2, this.length);
                    var n = this[e + 1] | (this[e] << 8);
                    return 32768 & n ? 4294901760 | n : n;
                }),
                (u.prototype.readInt32LE = function (e, t) {
                    return t || O(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
                }),
                (u.prototype.readInt32BE = function (e, t) {
                    return t || O(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
                }),
                (u.prototype.readFloatLE = function (e, t) {
                    return t || O(e, 4, this.length), i.read(this, e, !0, 23, 4);
                }),
                (u.prototype.readFloatBE = function (e, t) {
                    return t || O(e, 4, this.length), i.read(this, e, !1, 23, 4);
                }),
                (u.prototype.readDoubleLE = function (e, t) {
                    return t || O(e, 8, this.length), i.read(this, e, !0, 52, 8);
                }),
                (u.prototype.readDoubleBE = function (e, t) {
                    return t || O(e, 8, this.length), i.read(this, e, !1, 52, 8);
                }),
                (u.prototype.writeUIntLE = function (e, t, n, r) {
                    ((e = +e), (t |= 0), (n |= 0), r) || R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < n && (i *= 256); ) this[t + o] = (e / i) & 255;
                    return t + n;
                }),
                (u.prototype.writeUIntBE = function (e, t, n, r) {
                    ((e = +e), (t |= 0), (n |= 0), r) || R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var i = n - 1,
                        o = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) this[t + i] = (e / o) & 255;
                    return t + n;
                }),
                (u.prototype.writeUInt8 = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), (this[t] = 255 & e), t + 1;
                }),
                (u.prototype.writeUInt16LE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : U(this, e, t, !0), t + 2;
                }),
                (u.prototype.writeUInt16BE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : U(this, e, t, !1), t + 2;
                }),
                (u.prototype.writeUInt32LE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e)) : k(this, e, t, !0), t + 4;
                }),
                (u.prototype.writeUInt32BE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : k(this, e, t, !1), t + 4;
                }),
                (u.prototype.writeIntLE = function (e, t, n, r) {
                    if (((e = +e), (t |= 0), !r)) {
                        var i = Math.pow(2, 8 * n - 1);
                        R(this, e, t, n, i - 1, -i);
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++o < n && (a *= 256); ) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255);
                    return t + n;
                }),
                (u.prototype.writeIntBE = function (e, t, n, r) {
                    if (((e = +e), (t |= 0), !r)) {
                        var i = Math.pow(2, 8 * n - 1);
                        R(this, e, t, n, i - 1, -i);
                    }
                    var o = n - 1,
                        a = 1,
                        s = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); ) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255);
                    return t + n;
                }),
                (u.prototype.writeInt8 = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
                }),
                (u.prototype.writeInt16LE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : U(this, e, t, !0), t + 2;
                }),
                (u.prototype.writeInt16BE = function (e, t, n) {
                    return (e = +e), (t |= 0), n || R(this, e, t, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : U(this, e, t, !1), t + 2;
                }),
                (u.prototype.writeInt32LE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 4, 2147483647, -2147483648),
                        u.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24)) : k(this, e, t, !0),
                        t + 4
                    );
                }),
                (u.prototype.writeInt32BE = function (e, t, n) {
                    return (
                        (e = +e),
                        (t |= 0),
                        n || R(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                        u.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e)) : k(this, e, t, !1),
                        t + 4
                    );
                }),
                (u.prototype.writeFloatLE = function (e, t, n) {
                    return j(this, e, t, !0, n);
                }),
                (u.prototype.writeFloatBE = function (e, t, n) {
                    return j(this, e, t, !1, n);
                }),
                (u.prototype.writeDoubleLE = function (e, t, n) {
                    return x(this, e, t, !0, n);
                }),
                (u.prototype.writeDoubleBE = function (e, t, n) {
                    return x(this, e, t, !1, n);
                }),
                (u.prototype.copy = function (e, t, n, r) {
                    if ((n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n)) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    var i,
                        o = r - n;
                    if (this === e && n < t && t < r) for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                    else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                    return o;
                }),
                (u.prototype.fill = function (e, t, n, r) {
                    if ("string" == typeof e) {
                        if (("string" == typeof t ? ((r = t), (t = 0), (n = this.length)) : "string" == typeof n && ((r = n), (n = this.length)), 1 === e.length)) {
                            var i = e.charCodeAt(0);
                            i < 256 && (e = i);
                        }
                        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                    } else "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    var o;
                    if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), "number" == typeof e)) for (o = t; o < n; ++o) this[o] = e;
                    else {
                        var a = u.isBuffer(e) ? e : F(new u(e, r).toString()),
                            s = a.length;
                        for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
                    }
                    return this;
                });
            var L = /[^+\/0-9A-Za-z-_]/g;
            function N(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16);
            }
            function F(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue;
                            }
                            if (a + 1 === r) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue;
                            }
                            i = n;
                            continue;
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                            continue;
                        }
                        n = 65536 + (((i - 55296) << 10) | (n - 56320));
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (((i = null), n < 128)) {
                        if ((t -= 1) < 0) break;
                        o.push(n);
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push((n >> 6) | 192, (63 & n) | 128);
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
                    }
                }
                return o;
            }
            function z(e) {
                return r.toByteArray(
                    (function (e) {
                        if (
                            (e = (function (e) {
                                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                            })(e).replace(L, "")).length < 2
                        )
                            return "";
                        for (; e.length % 4 != 0; ) e += "=";
                        return e;
                    })(e)
                );
            }
            function H(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                return i;
            }
        }.call(this, n(4)));
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t, n) {
        "use strict";
        (t.byteLength = function (e) {
            var t = c(e),
                n = t[0],
                r = t[1];
            return (3 * (n + r)) / 4 - r;
        }),
            (t.toByteArray = function (e) {
                var t,
                    n,
                    r = c(e),
                    a = r[0],
                    s = r[1],
                    u = new o(
                        (function (e, t, n) {
                            return (3 * (t + n)) / 4 - n;
                        })(0, a, s)
                    ),
                    d = 0,
                    l = s > 0 ? a - 4 : a;
                for (n = 0; n < l; n += 4)
                    (t = (i[e.charCodeAt(n)] << 18) | (i[e.charCodeAt(n + 1)] << 12) | (i[e.charCodeAt(n + 2)] << 6) | i[e.charCodeAt(n + 3)]), (u[d++] = (t >> 16) & 255), (u[d++] = (t >> 8) & 255), (u[d++] = 255 & t);
                2 === s && ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)), (u[d++] = 255 & t));
                1 === s && ((t = (i[e.charCodeAt(n)] << 10) | (i[e.charCodeAt(n + 1)] << 4) | (i[e.charCodeAt(n + 2)] >> 2)), (u[d++] = (t >> 8) & 255), (u[d++] = 255 & t));
                return u;
            }),
            (t.fromByteArray = function (e) {
                for (var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383) o.push(d(e, a, a + 16383 > s ? s : a + 16383));
                1 === i ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "==")) : 2 === i && ((t = (e[n - 2] << 8) + e[n - 1]), o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
                return o.join("");
            });
        for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
        function c(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
        }
        function d(e, t, n) {
            for (var i, o, a = [], s = t; s < n; s += 3) (i = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])), a.push(r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
            return a.join("");
        }
        (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function (e, t) {
        (t.read = function (e, t, n, r, i) {
            var o,
                a,
                s = 8 * i - r - 1,
                u = (1 << s) - 1,
                c = u >> 1,
                d = -7,
                l = n ? i - 1 : 0,
                f = n ? -1 : 1,
                w = e[t + l];
            for (l += f, o = w & ((1 << -d) - 1), w >>= -d, d += s; d > 0; o = 256 * o + e[t + l], l += f, d -= 8);
            for (a = o & ((1 << -d) - 1), o >>= -d, d += r; d > 0; a = 256 * a + e[t + l], l += f, d -= 8);
            if (0 === o) o = 1 - c;
            else {
                if (o === u) return a ? NaN : (1 / 0) * (w ? -1 : 1);
                (a += Math.pow(2, r)), (o -= c);
            }
            return (w ? -1 : 1) * a * Math.pow(2, o - r);
        }),
            (t.write = function (e, t, n, r, i, o) {
                var a,
                    s,
                    u,
                    c = 8 * o - i - 1,
                    d = (1 << c) - 1,
                    l = d >> 1,
                    f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    w = r ? 0 : o - 1,
                    h = r ? 1 : -1,
                    g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                for (
                    t = Math.abs(t),
                        isNaN(t) || t === 1 / 0
                            ? ((s = isNaN(t) ? 1 : 0), (a = d))
                            : ((a = Math.floor(Math.log(t) / Math.LN2)),
                              t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                              (t += a + l >= 1 ? f / u : f * Math.pow(2, 1 - l)) * u >= 2 && (a++, (u /= 2)),
                              a + l >= d ? ((s = 0), (a = d)) : a + l >= 1 ? ((s = (t * u - 1) * Math.pow(2, i)), (a += l)) : ((s = t * Math.pow(2, l - 1) * Math.pow(2, i)), (a = 0)));
                    i >= 8;
                    e[n + w] = 255 & s, w += h, s /= 256, i -= 8
                );
                for (a = (a << i) | s, c += i; c > 0; e[n + w] = 255 & a, w += h, a /= 256, c -= 8);
                e[n + w - h] |= 128 * g;
            });
    },
    function (e, t) {
        var n = {}.toString;
        e.exports =
            Array.isArray ||
            function (e) {
                return "[object Array]" == n.call(e);
            };
    },
    function (e, t) {
        (t.endianness = function () {
            return "LE";
        }),
            (t.hostname = function () {
                return "undefined" != typeof location ? location.hostname : "";
            }),
            (t.loadavg = function () {
                return [];
            }),
            (t.uptime = function () {
                return 0;
            }),
            (t.freemem = function () {
                return Number.MAX_VALUE;
            }),
            (t.totalmem = function () {
                return Number.MAX_VALUE;
            }),
            (t.cpus = function () {
                return [];
            }),
            (t.type = function () {
                return "Browser";
            }),
            (t.release = function () {
                return "undefined" != typeof navigator ? navigator.appVersion : "";
            }),
            (t.networkInterfaces = t.getNetworkInterfaces = function () {
                return {};
            }),
            (t.arch = function () {
                return "javascript";
            }),
            (t.platform = function () {
                return "browser";
            }),
            (t.tmpdir = t.tmpDir = function () {
                return "/tmp";
            }),
            (t.EOL = "\n"),
            (t.homedir = function () {
                return "/";
            });
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        n(1);
        function r(e, t) {
            for (var n = e.split(","), r = n[0].match(/:(.*?);/)[1], i = window.Base64 ? window.Base64.atob(n[1]) : atob(n[1]), o = i.length, a = new Uint8Array(o); o--; ) a[o] = i.charCodeAt(o);
            return new File([a], t, { type: r });
        }
        var i = n(0);
        async function o(e) {
            let t = await e.arrayBuffer();
            var n = new i("SHA-256", "ARRAYBUFFER");
            return n.update(t), n.getHash("B64");
        }
        function a(e) {
            let t = "",
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
            return t;
        }
        const s = function (e) {
                return e.unreadCount > 0;
            },
            u = function (e) {
                const t = window.Store.Chat.filter(s).map((e) => WAPI._serializeChatObj(e));
                return void 0 !== e && e(t), t;
            };
        async function c(e) {
            return (await WAPI.getGroupMetadata(e)).participants;
        }
        async function d(e, t) {
            const n = WAPI.getChat(e);
            for (; !n.msgs.msgLoadState.noEarlierMsgs; ) console.log("Loading..."), await n.loadEarlierMsgs();
            return console.log("done"), !0;
        }
        async function l(e, t) {
            Array.isArray(t) || (t = [t]);
            const n = new Store.MediaCollection(e);
            return await n.processFiles("0.4.613" === Debug.VERSION ? t : t.map((e) => ({ file: e })), e, 1), n;
        }
        async function f(e, t, n, i, o) {
            if (((o = o || "sendFile"), ("string" != typeof n && null != n) || ("string" != typeof i && null != i))) {
                return WAPI.scope(t, !0, null, "incorrect parameter, insert an string.");
            }
            var a = e.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
            a && a.length && (a = a[1]);
            var s = await WAPI.sendExist(t);
            if (!1 === s.erro || s.__x_id) {
                var u = await Store.Chat.get(t),
                    c = r(e, n),
                    d = (await l(s, c)).models[0],
                    f = await Promise.all(u ? await d.sendToChat(s, { caption: i }) : "");
                f = f.join("");
                var w = { type: o, filename: n, text: i, mimeType: a },
                    h = await WAPI.getchatId(s.id);
                if ("success" === f || "OK" === f) {
                    var g = WAPI.scope(h, !1, f, null);
                    return Object.assign(g, w), g;
                }
                g = WAPI.scope(h, !0, f, null);
                return Object.assign(g, w), g;
            }
            return s;
        }
        async function w(e, t, n, r) {
            var i = await WAPI.sendExist(t);
            if (!1 === i.erro || i.__x_id) {
                var o = await Store.Chat.get(t),
                    a = new window.Store.Sticker.modelClass();
                (a.__x_clientUrl = e.clientUrl),
                    (a.__x_filehash = e.filehash),
                    (a.__x_id = e.filehash),
                    (a.__x_uploadhash = e.uploadhash),
                    (a.__x_mediaKey = e.mediaKey),
                    (a.__x_initialized = !1),
                    (a.__x_mediaData.mediaStage = "INIT"),
                    (a.mimetype = "image/webp"),
                    (a.height = n && n.height ? n.height : 512),
                    (a.width = n && n.width ? n.width : 512),
                    await a.initialize();
                var s = await Promise.all(o ? await a.sendToChat(i, { stickerIsFirstParty: !1, stickerSendOrigin: 6 }) : "");
                s = s.join("");
                var u = { type: r },
                    c = await WAPI.getchatId(t);
                if ("OK" === s) {
                    var d = WAPI.scope(c, !1, s, null);
                    return Object.assign(d, u), d;
                }
                d = WAPI.scope(c, !0, s, null);
                return Object.assign(d, u), d;
            }
            return i;
        }
        async function h(e, t, n, i) {
            const o = r("data:image/webp;base64," + e, "file.webp");
            let a = await window.WAPI.encryptAndUploadFile("sticker", o);
            return await w(a, t, n, i);
        }
        function g(e, t, n, r = null) {
            return { me: Store.Me.attributes, to: e, erro: t, text: r, status: n };
        }
        n(3), n(8);
        function p(e = !0, t) {
            return window.WAPI._newMessagesCallbacks.push({ callback: t, rmAfterUse: e }), !0;
        }
        let A = {};
        const y = [
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
            { id: "Archive", conditions: (e) => (e.setArchive ? e : null) },
            { id: "pinChat", conditions: (e) => (e.setPin ? e : null) },
            { id: "sendDelete", conditions: (e) => (e.sendDelete ? e.sendDelete : null) },
            { id: "addAndSendMsgToChat", conditions: (e) => (e.addAndSendMsgToChat ? e.addAndSendMsgToChat : null) },
            { id: "sendMsgToChat", conditions: (e) => (e.sendMsgToChat ? e.sendMsgToChat : null) },
            { id: "Catalog", conditions: (e) => (e.Catalog ? e.Catalog : null) },
            { id: "Perfil", conditions: (e) => (!0 === e.__esModule && e.setPushname && !e.getComposeContents ? e : null) },
            { id: "MsgKey", conditions: (e) => (e.default && e.default.toString().includes("MsgKey error: obj is null/undefined") ? e.default : null) },
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
            { id: "ReadSeen", conditions: (e) => (e.sendSeen ? e : null) },
            { id: "Block", conditions: (e) => (e.blockContact && e.unblockContact ? e : null) },
            { id: "BlockList", conditions: (e) => (e.BlocklistCollection ? e : null) },
            { id: "Theme", conditions: (e) => (e.getTheme && e.setTheme ? e : null) },
            { id: "Vcard", conditions: (e) => (e.vcardFromContactModel ? e : null) },
            { id: "Profile", conditions: (e) => (e.sendSetPicture && e.requestDeletePicture ? e : null) },
        ];
        function b(e) {
            let t = 0,
                n = y;
            for (let r in e)
                if ("object" == typeof e[r] && null !== e[r]) {
                    let i = Object.values(e[r])[0];
                    if ("object" == typeof i && i.exports) {
                        for (let i in e[r]) {
                            let r = e(i);
                            if (
                                r &&
                                (n.forEach((e) => {
                                    if (!e.conditions || e.foundedModule) return;
                                    let n = e.conditions(r);
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
                            (window.Store.sendAddMessage = function (e) {
                                return window.Store.addAndSendMsgToChat(this, ...arguments);
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
            (window.WAPI.setProfilePic = async function (e) {
                var t = await Store.Me.attributes,
                    n = "data:image/jpeg;base64,";
                return await Store.Profile.sendSetPicture(t.me._serialized, n + e.b, n + e.a);
            }),
            (window.WAPI.scope = p),
            (window.WAPI.sendExist = async function (e, t = !0) {
                var n = "",
                    r = "The number does not exist";
                if ("object" == typeof e) {
                    for (var i in e) if (200 != (n = await Store.WapQuery.queryExist(e[i])).status) return p(e[i], !0, n.status, r);
                } else if (200 != (n = await Store.WapQuery.queryExist(e)).status) return p(e, !0, n.status, r);
                return !0 !== t
                    ? p(n.jid._serialized, !1, n.status)
                    : ((n = "object" == typeof e ? await Store.WapQuery.queryExist(e[0]) : await Store.WapQuery.queryExist(e)),
                      (t = await Store.Chat.find(n.jid))
                          ? ((t.sendAddMessage = t.sendAddMessage
                                ? t.sendAddMessage
                                : function () {
                                      return window.Store.sendAddMessage.apply(this, arguments);
                                  }),
                            (t.sendMessage = t.sendMessage
                                ? t.sendMessage
                                : function () {
                                      return window.Store.sendMessage.apply(this, arguments);
                                  }),
                            Store.SendSeen(t, !1),
                            t)
                          : void 0);
            }),
            (window.WAPI.pinChat = async function (e, t = !0) {
                if ("boolean" != typeof t) {
                    return WAPI.scope(e, !0, null, "incorrect parameter, insert a boolean true or false");
                }
                let n = t ? "pin" : "unpin",
                    r = void 0;
                var i = await WAPI.sendExist(e);
                if (!1 === i.erro || i.__x_id) {
                    var o = await Store.Chat.get(e),
                        a = { type: "pinChat", typefix: n };
                    return (
                        Promise.all(
                            o
                                ? await Store.pinChat
                                      .setPin(i, t)
                                      .then((t) => {
                                          var n = WAPI.scope(e, !1, "OK", null);
                                          Object.assign(n, a), (r = n);
                                      })
                                      .catch((t) => {
                                          var n = WAPI.scope(e, !0, t, "Pin Chat first");
                                          Object.assign(n, a), (r = n);
                                      })
                                : ""
                        ),
                        r
                    );
                }
                return i;
            }),
            (window.WAPI.setTheme = async function (e) {
                return "dark" == e || "light" == e ? (await Store.Theme.setTheme(e), !0) : console.error("Use type dark or light");
            }),
            (window.WAPI.getTheme = async function () {
                return await Store.Theme.getTheme();
            }),
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
            (window.WAPI.getGroupInfoFromInviteLink = async function (e) {
                return await Store.WapQuery.groupInviteInfo(e);
            }),
            (window.WAPI.getGroupAdmins = async function (e, t) {
                const n = (await c(e)).filter((e) => e.isAdmin).map((e) => e.id);
                return void 0 !== t && t(n), n;
            }),
            (window.WAPI.removeParticipant = async function (e, t, n) {
                const r = Store.Chat.get(e),
                    i = r.groupMetadata.participants.get(t);
                return window.Store.Participants.removeParticipants(r, [i]).then(() => (void 0 !== n && n(!0), !0));
            }),
            (window.WAPI.addParticipant = async function (e, t) {
                const n = Store.Chat.get(e),
                    r = Store.Contact.get(t);
                return await window.Store.Participants.addParticipants(n, [r]), !0;
            }),
            (window.WAPI.promoteParticipant = async function (e, t, n) {
                const r = Store.Chat.get(e),
                    i = r.groupMetadata.participants.get(t);
                return window.Store.Participants.promoteParticipants(r, [i]).then(() => (void 0 !== n && n(!0), !0));
            }),
            (window.WAPI.demoteParticipant = async function (e, t, n) {
                return window.Store.WapQuery.demoteParticipants(e, [t]).then(() => {
                    const r = Store.Chat.get(e),
                        i = r.groupMetadata.participants.get(t);
                    window.Store.Participants.demoteParticipants(r, [i]).then(() => (void 0 !== n && n(!0), !0));
                });
            }),
            (window.WAPI.joinGroup = async function (e) {
                return await Store.WapQuery.acceptGroupInvite(e);
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
            (window.WAPI.sendMessageWithThumb = function (e, t, n, r, i, o) {
                var a = WAPI.getChat(i);
                if (void 0 === a) return void 0 !== o && o(!1), !1;
                var s = { canonicalUrl: t, description: r, matchedText: t, title: n, thumbnail: e };
                return a.sendMessage(t, { linkPreview: s, mentionedJidList: [], quotedMsg: null, quotedMsgAdminGroupJid: null }), void 0 !== o && o(!0), !0;
            }),
            (window.WAPI.processMessageObj = function (e, t, n) {
                return e.isNotification ? (n ? WAPI._serializeMessageObj(e) : void 0) : !1 === e.id.fromMe || t ? WAPI._serializeMessageObj(e) : void 0;
            }),
            (window.WAPI.sendMessageWithTags = async function (e, t) {
                var n = e.id ? e : Store.Chat.get(e),
                    r = n.id._serialized,
                    i = n.msgs.filter((e) => e.__x_isSentByMe)[0];
                if (!i) return n.sendMessage(t);
                var o = Object.create(i),
                    a = window.WAPI.getNewMessageId(r),
                    s = t.match(/@(\d*)/g).map((e) => new Store.WidFactory.createUserWid(e.replace("@", ""))) || void 0,
                    u = { ack: 0, id: a, local: !0, self: "out", t: parseInt(new Date().getTime() / 1e3), to: new Store.WidFactory.createWid(r), isNewMsg: !0, type: "chat", body: t, quotedMsg: null, mentionedJidList: s };
                return Object.assign(o, u), await Store.addAndSendMsgToChat(n, o), a._serialized;
            }),
            (window.WAPI.sendMessage = async function (e, t) {
                var n = await WAPI.sendExist(e);
                if (!1 === n.erro || n.__x_id) {
                    var r = await Store.Chat.get(e),
                        i = await Promise.all(r ? await n.sendMessage(t) : ""),
                        o = { type: "sendtext", text: t };
                    if ("success" === (i = i.join("")) || "OK" === i) {
                        var a = WAPI.scope(e, !1, i, null);
                        return Object.assign(a, o), a;
                    }
                    a = WAPI.scope(e, !0, i, null);
                    return Object.assign(a, o), a;
                }
                return n;
            }),
            (window.WAPI.sendMessage2 = function (e, t, n) {
                var r = WAPI.getChat(e);
                if (void 0 !== r)
                    try {
                        return (
                            void 0 !== n
                                ? r.sendMessage(t).then(function () {
                                      n(!0);
                                  })
                                : r.sendMessage(t),
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
                    r = WAPI.getChat(n);
                return r
                    ? (window.Store.sendDelete(r, !1)
                          .then(() => {
                              void 0 !== t && t(!0);
                          })
                          .catch(() => {
                              void 0 !== t && t(!1);
                          }),
                      !0)
                    : (void 0 !== t && t(!1), !1);
            }),
            (window.WAPI.deleteMessages = function (e, t, n, r) {
                const i = new Store.WidFactory.createWid(e),
                    o = WAPI.getChat(i);
                if (!o) return void 0 !== r && r(!1), !1;
                Array.isArray(t) || (t = [t]);
                let a = t.map((e) => ("string" == typeof e ? window.Store.Msg.get(e) : e)).filter((e) => e);
                if (0 == a.length) return !0;
                let s = n
                    ? [o.sendDeleteMsgs(a, o)]
                    : [
                          o.sendRevokeMsgs(
                              a.filter((e) => e.isSentByMe),
                              o
                          ),
                          o.sendDeleteMsgs(
                              a.filter((e) => !e.isSentByMe),
                              o
                          ),
                      ];
                return Promise.all(s).then((e) => (void 0 !== r && r(!0), !0));
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
            (window.WAPI.sendImage = function (e, t, n, r) {
                return f(e, t, n, r, "sendImage");
            }),
            (window.WAPI.sendPtt = function (e, t, n, i, o) {
                const a = new Store.WidFactory.createWid(t);
                return Store.Chat.find(a).then((t) => {
                    var a = r(e, n);
                    d(t, a).then((e) => {
                        var n = e.models[0];
                        (n.mediaPrep._mediaData.type = "ptt"), n.mediaPrep.sendToChat(t, { caption: i }), void 0 !== o && o(!0);
                    });
                });
            }),
            (window.WAPI.sendFile = f),
            (window.WAPI.setMyName = async function (e) {
                return Store.Versions.default[11].BinaryProtocol || (Store.Versions.default[11].BinaryProtocol = new Store.bp(11)), await Store.Versions.default[11].setPushname(e);
            }),
            (window.WAPI.setMyStatus = function (e) {
                return Store.MyStatus.setMyStatus(e);
            }),
            (window.WAPI.sendVideoAsGif = function (e, t, n, i, o) {
                const a = new Store.WidFactory.createWid(t);
                return Store.Chat.find(a).then((t) => {
                    var a = r(e, n);
                    d(t, a).then((e) => {
                        var n = e.models[0];
                        (n.mediaPrep._mediaData.isGif = !0), (n.mediaPrep._mediaData.gifAttribution = 1), n.mediaPrep.sendToChat(t, { caption: i }), void 0 !== o && o(!0);
                    });
                });
            }),
            (window.WAPI.processFiles = d),
            (window.WAPI.sendImageWithProduct = function (e, t, n, i, o, a) {
                Store.Catalog.findCarouselCatalog(i).then((i) => {
                    if (i && i[0]) {
                        const u = i[0].productCollection.get(o),
                            c = {
                                productMsgOptions: {
                                    businessOwnerJid: u.catalogWid.toString({ legacy: !0 }),
                                    productId: u.id.toString(),
                                    url: u.url,
                                    productImageCount: u.productImageCollection.length,
                                    title: u.name,
                                    description: u.description,
                                    currencyCode: u.currency,
                                    priceAmount1000: u.priceAmount1000,
                                    type: "product",
                                },
                                caption: n,
                            };
                        var s = new Store.WidFactory.createWid(t);
                        return Store.Chat.find(s).then((t) => {
                            var n = r(e, filename);
                            d(t, n).then((e) => {
                                var n = e.models[0];
                                Object.entries(c.productMsgOptions).map(([e, t]) => (n.mediaPrep._mediaData[e] = t)), n.mediaPrep.sendToChat(t, c), void 0 !== a && a(!0);
                            });
                        });
                    }
                });
            }),
            (window.WAPI.sendContactVcard = async function (e, t, n) {
                var r = await WAPI.sendExist([e, t]);
                if (!1 === r.erro || r.__x_id) {
                    var i = await Store.Chat.get(e),
                        o = window.WAPI.getNewMessageId(e),
                        a = Object.create(Store.Msg.models.filter((e) => e.__x_isSentByMe && !e.quotedMsg)[0]),
                        s = await window.Store.Chat.get(t),
                        u = await window.Store.Vcard.vcardFromContactModel(s.__x_contact);
                    n = n || s.__x_formattedTitle;
                    var c = { ack: 0, body: u.vcard, from: s.__x_contact, local: !0, self: "out", id: o, vcardFormattedName: n, t: parseInt(new Date().getTime() / 1e3), to: e, type: "vcard", isNewMsg: !0 };
                    Object.assign(a, c);
                    var l = await Promise.all(i ? Store.addAndSendMsgToChat(r, a) : ""),
                        d = { from: t, type: "vcard" };
                    if ("success" === l[1] || "OK" === l[1]) {
                        var f = WAPI.scope(e, !1, l[1], null);
                        return Object.assign(f, d), f;
                    }
                    f = WAPI.scope(e, !0, l[1], null);
                    return Object.assign(f, d), f;
                }
                return r;
            }),
            (window.WAPI.sendContactVcardList = async function (e, t) {
                if ("string" != typeof e) {
                    var n = "incorrect parameter, insert an string. Example: '222222222222@c.us'";
                    return WAPI.scope(e, !0, null, n);
                }
                if (!Array.isArray(t)) {
                    n = "incorrect parameter, insert an array. Example: ['222222222222@c.us', '333333333333@c.us, ... ]";
                    return WAPI.scope(e, !0, null, n);
                }
                if (1 === t.length) {
                    n = "Enter more than one number to send. Example: ['222222222222@c.us', '333333333333@c.us, ... ]";
                    return WAPI.scope(e, !0, null, n);
                }
                var r = [e].concat(t),
                    i = await WAPI.sendExist(r);
                if (!1 === i.erro || i.__x_id) {
                    var o = await Store.Chat.get(e),
                        a = Object.create(Store.Msg.models.filter((e) => e.__x_isSentByMe && !e.quotedMsg)[0]),
                        s = t.map(async (e) => await window.Store.Chat.get(e)),
                        u = await Promise.all(s),
                        c = new Array();
                    for (var l in u) c.push(u[l].__x_contact);
                    var d = c.map(async (e) => await window.Store.Vcard.vcardFromContactModel(e)),
                        f = window.WAPI.getNewMessageId(e),
                        w = await Promise.all(d),
                        h = { ack: 0, from: e, local: !0, self: "out", id: f, t: parseInt(new Date().getTime() / 1e3), to: e, type: "multi_vcard", vcardList: w, isNewMsg: !0 };
                    Object.assign(a, h);
                    var p = await Promise.all(o ? Store.addAndSendMsgToChat(i, a) : ""),
                        g = { from: t, type: "multi_vcard" };
                    if ("success" === p[1] || "OK" === p[1]) {
                        var A = WAPI.scope(e, !1, p[1], null);
                        return Object.assign(A, g), A;
                    }
                    A = WAPI.scope(e, !0, p, null);
                    return Object.assign(A, g), A;
                }
                return i;
            }),
            (window.WAPI.forwardMessages = async function (e, t, n) {
                Array.isArray(t) || (t = [t]);
                const r = t.map((e) => ("string" == typeof e ? window.Store.Msg.get(e) : window.Store.Msg.get(e.id))).filter((e) => !n || !e.__x_isSentByMe);
                return window.Store.Chat.get(e).forwardMessages(r);
            }),
            (window.WAPI.reply = async function (e, t, n, r) {
                "object" != typeof n && (n = Store.Msg.get(n)), Array.isArray(r) || (r = [r]);
                const i = WAPI.getChat(e),
                    o = await Store.Contact.serialize().filter((e) => r.includes(e.id.user));
                return i.sendMessage(t, { linkPreview: null, mentionedJidList: o.map((e) => e.id), quotedMsg: n, quotedMsgAdminGroupJid: null }).then((e) => i.lastReceivedKey._serialized);
            }),
            (window.WAPI._sendSticker = w),
            (window.WAPI.encryptAndUploadFile = async function (e, t) {
                const n = await o(t),
                    r = a(32),
                    i = new AbortController().signal,
                    s = await window.Store.UploadUtils.encryptAndUpload({ blob: t, type: e, signal: i, mediaKey: r });
                return { ...s, clientUrl: s.url, filehash: n, id: n, uploadhash: s.encFilehash };
            }),
            (window.WAPI.sendImageAsSticker = h),
            (window.WAPI.sendImageAsStickerGif = h),
            (window.WAPI.startTyping = async function (e) {
                await Store.ChatStates.sendChatStateComposing(e);
            }),
            (window.WAPI.stopTyping = async function (e) {
                await Store.ChatStates.sendChatStatePaused(e);
            }),
            (window.WAPI.sendLocation = async function (e, t, n, r = null) {
                var i = await WAPI.sendExist(e);
                if (!1 === i.erro || i.__x_id) {
                    var o = await Store.Chat.get(e),
                        a = await Object.create(Store.Msg.models.filter((e) => e.__x_isSentByMe && !e.quotedMsg)[0]),
                        s = {
                            ack: 0,
                            id: await window.WAPI.getNewMessageId(e),
                            local: !0,
                            self: "out",
                            t: parseInt(new Date().getTime() / 1e3),
                            to: e,
                            isNewMsg: !0,
                            type: "location",
                            lat: t,
                            lng: n,
                            loc: r,
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
                    Object.assign(a, s);
                    var u = await Promise.all(o ? Store.addAndSendMsgToChat(i, a) : ""),
                        c = { latitude: t, longitude: n, title: r, type: "location" };
                    if ("success" == u[1] || "OK" == u[1]) {
                        var l = WAPI.scope(e, !1, u[1], null);
                        return Object.assign(l, c), l;
                    }
                    l = WAPI.scope(e, !0, u[1], null);
                    return Object.assign(l, c), l;
                }
                return i;
            }),
            (window.WAPI.openChat = async function (e) {
                const t = Store.Chat.get(e);
                return Store.Cmd.default.openChatBottom(t);
            }),
            (window.WAPI.openChatAt = async function (e, t) {
                const n = Store.Chat.get(e),
                    r = n.msgs.models.find((e) => e.id.id === t),
                    i = { collection: n.msgs, msg: r, isUnreadDivider: !1 };
                return await Store.Cmd.default._openChat(n, i);
            }),
            (window.WAPI.markUnseenMessage = async function (e) {
                if (!e) return !1;
                var t = window.WAPI.getChat(e);
                return void 0 !== t && (await Store.ReadSeen.markUnread(t, !0), !0);
            }),
            (window.WAPI.sendLinkPreview = async function (e, t, n) {
                n = n || null;
                const r = {
                    Protocol: "^(https?:\\/\\/)?",
                    Domain: "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|",
                    IP: "((\\d{1,3}\\.){3}\\d{1,3}))",
                    Port: "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*",
                    Query: "(\\?[;&a-z\\d%_.~+=-]*)?",
                    End: "(\\#[-a-z\\d_]*)?$",
                    Reg: () => new RegExp(r.Protocol + r.Domain + r.IP + r.Port + r.Query + r.End, "i"),
                };
                if (!r.Reg().test(t)) {
                    n = "Use a valid HTTP protocol. Example: https://www.youtube.com/watch?v=V1bFr2SWP1";
                    return WAPI.scope(e, !0, null, n);
                }
                var i = await WAPI.sendExist(e);
                if (!1 === i.erro || i.__x_id) {
                    var o = await Store.Chat.get(e);
                    const r = await Store.WapQuery.queryLinkPreview(t);
                    var a = Promise.all(o ? await i.sendMessage(n.includes(t) ? n : `${t}\n${n}`, { linkPreview: r }) : ""),
                        s = { type: "LinkPreview", url: t, text: n };
                    if ("success" === (a = a._value.join("")) || "OK" === a) {
                        var u = WAPI.scope(e, !1, a, null);
                        return Object.assign(u, s), u;
                    }
                    u = WAPI.scope(e, !0, a, null);
                    return Object.assign(u, s), u;
                }
                return i;
            }),
            (window.WAPI.blockContact = async function (e) {
                if (!e) return !1;
                const t = window.Store.Contact.get(e);
                return void 0 !== t && (await Store.Block.blockContact(t), !0);
            }),
            (window.WAPI.unblockContact = async function (e) {
                if (!e) return !1;
                const t = window.Store.Contact.get(e);
                return void 0 !== t && (await Store.Block.unblockContact(t), !0);
            }),
            (window.WAPI.getBlockList = async function () {
                let e = await Store.Blocklist,
                    t = [];
                if (void 0 !== e && void 0 !== e._index) {
                    for (let n in e._index) t.push(n);
                    return t;
                }
                return !1;
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
            (window.WAPI.getAllChatsWithNewMsg = u),
            (window.WAPI.getAllChatIds = function (e) {
                const t = window.Store.Chat.map((e) => e.id._serialized || e.id);
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getAllNewMessages = function () {
                const e =
                    u()
                        .map((e) => WAPI.getChat(e.id))
                        .flatMap((e) => e.msgs._models.filter((e) => e.isNewMsg))
                        .map(WAPI._serializeMessageObj) || [];
                return JSON.parse(e);
            }),
            (window.WAPI.getAllUnreadMessages = async function () {
                const e = JSON.stringify(
                    u()
                        .map((e) => WAPI.getChat(e.id._serialized))
                        .map((e) => e.msgs._models.filter((e) => -1 === e.ack))
                        .flatMap((e) => e) || []
                );
                return JSON.parse(e);
            }),
            (window.WAPI.getAllChatsWithMessages = async function (e) {
                const t = [];
                e ? t.push(WAPI.getAllChatsWithNewMsg().map((e) => WAPI.getChat(e.id._serialized))) : t.push(WAPI.getAllChatIds().map((e) => WAPI.getChat(e)));
                const n = (await Promise.all(t)).flatMap((e) => e),
                    r = JSON.stringify(n);
                return JSON.parse(r);
            }),
            (window.WAPI.getAllGroups = function (e) {
                const t = window.Store.Chat.filter((e) => e.isGroup);
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getChat = function (e) {
                if (!e) return !1;
                e = "string" == typeof e ? e : e._serialized;
                const t = Store.Chat.get(e);
                return (
                    t &&
                        (t.sendMessage = t.sendMessage
                            ? t.sendMessage
                            : function () {
                                  return window.Store.sendMessage.apply(this, arguments);
                              }),
                    t
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
            (window.WAPI.getUnreadMessagesInChat = function (e, t, n, r) {
                let i = WAPI.getChat(e).msgs._models,
                    o = [];
                for (let e = i.length - 1; e >= 0; e--) {
                    if ("remove" === e) continue;
                    let r = i[e];
                    if ("boolean" == typeof r.isNewMsg && !1 !== r.isNewMsg) {
                        r.isNewMsg = !1;
                        let e = WAPI.processMessageObj(r, t, n);
                        e && o.push(e);
                    }
                }
                return void 0 !== r && r(o), o;
            }),
            (window.WAPI.loadEarlierMessages = async function (e) {
                const t = WAPI.getChat(e);
                if (t) {
                    const e = await t.loadEarlierMsgs();
                    if (e) return e.map(WAPI._serializeMessageObj);
                }
                return !1;
            }),
            (window.WAPI.loadAllEarlierMessages = l),
            (window.WAPI.asyncLoadAllEarlierMessages = function (e, t) {
                l(e), t();
            }),
            (window.WAPI.areAllMessagesLoaded = function (e, t) {
                return WAPI.getChat(e).msgs.msgLoadState.noEarlierMsgs ? (t && t(!0), !0) : (t && t(!1), !1);
            }),
            (window.WAPI.loadEarlierMessagesTillDate = function (e, t, n) {
                const r = WAPI.getChat(e);
                (x = function () {
                    r.msgs.models[0].t > t && !r.msgs.msgLoadState.noEarlierMsgs ? r.loadEarlierMsgs().then(x) : n();
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
            (window.WAPI._getGroupParticipants = c),
            (window.WAPI.getGroupParticipantIDs = async function (e, t) {
                const n = (await c(e)).map((e) => e.id);
                return void 0 !== t && t(n), n;
            }),
            (window.WAPI.getAllMessagesInChat = function (e, t, n, r) {
                let i = [];
                const o = WAPI.getChat(e).msgs._models;
                for (const e in o) {
                    if ("remove" === e) continue;
                    const r = o[e];
                    let a = WAPI.processMessageObj(r, t, n);
                    a && i.push(a);
                }
                return void 0 !== r && r(i), i;
            }),
            (window.WAPI.loadAndGetAllMessagesInChat = async function (e, t, n, r) {
                return WAPI.loadAllEarlierMessages(e).then((i) => {
                    let o = [];
                    const a = WAPI.getChat(e).msgs._models;
                    for (const e in a) {
                        if ("remove" === e) continue;
                        const r = a[e];
                        let i = WAPI.processMessageObj(r, t, n);
                        i && o.push(i);
                    }
                    return void 0 !== r && r(o), o;
                });
            }),
            (window.WAPI.getUnreadMessages = function (e, t, n, r) {
                const i = window.Store.Chat.models,
                    o = [];
                for (const r in i) {
                    if (isNaN(r)) continue;
                    const a = i[r];
                    let s = WAPI._serializeChatObj(a);
                    s.messages = [];
                    const u = a.msgs._models;
                    for (let n = u.length - 1; n >= 0; n--) {
                        const r = u[n];
                        if ("boolean" == typeof r.isNewMsg && !1 !== r.isNewMsg) {
                            r.isNewMsg = !1;
                            let n = WAPI.processMessageObj(r, e, t);
                            n && s.messages.push(n);
                        }
                    }
                    if (s.messages.length > 0) o.push(s);
                    else if (n) {
                        let n = a.unreadCount;
                        for (let r = u.length - 1; r >= 0; r--) {
                            const i = u[r];
                            if (n > 0) {
                                if (!i.isSentByMe) {
                                    let r = WAPI.processMessageObj(i, e, t);
                                    s.messages.unshift(r), (n -= 1);
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
                        s.messages.length > 0 && ((a.unreadCount = 0), o.push(s));
                    }
                }
                return void 0 !== r && r(o), o;
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
            (window.WAPI.downloadFile = async function (e) {
                return await new Promise((t, n) => {
                    let r = new XMLHttpRequest();
                    (r.onload = function () {
                        if (4 == r.readyState)
                            if (200 == r.status) {
                                let e = new FileReader();
                                e.readAsDataURL(r.response),
                                    (e.onload = function (n) {
                                        t(e.result.substr(e.result.indexOf(",") + 1));
                                    });
                            } else console.error(r.statusText);
                        else console.log(err), t(!1);
                    }),
                        r.open("GET", e, !0),
                        (r.responseType = "blob"),
                        r.send(null);
                });
            }),
            (window.WAPI.getNumberProfile = async function (e, t) {
                try {
                    const n = await window.Store.WapQuery.queryExist(e);
                    if (void 0 === n.jid) throw 404;
                    const r = window.WAPI._serializeNumberStatusObj(n);
                    return 200 == r.status && (r.numberExists = !0), void 0 !== t && (t(window.WAPI._serializeNumberStatusObj(n)), t(r)), r;
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
            (window.WAPI.getNewMessageId = function (e) {
                const t = new Store.MsgKey(Object.assign({}, Store.Msg.models[0].__x_id));
                return (t.fromMe = !0), (t.id = WAPI.getNewId().toUpperCase()), (t.remote = new Store.WidFactory.createWid(e)), (t._serialized = `${t.fromMe}_${t.remote}_${t.id}`), t;
            }),
            (window.WAPI.getFileHash = o),
            (window.WAPI.generateMediaKey = a),
            (window.WAPI.arrayBufferToBase64 = function (e) {
                for (var t, n = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(e), o = i.byteLength, a = o % 3, s = o - a, u = 0; u < s; u += 3)
                    n += r[(16515072 & (t = (i[u] << 16) | (i[u + 1] << 8) | i[u + 2])) >> 18] + r[(258048 & t) >> 12] + r[(4032 & t) >> 6] + r[63 & t];
                return 1 == a ? (n += r[(252 & (t = i[s])) >> 2] + r[(3 & t) << 4] + "==") : 2 == a && (n += r[(64512 & (t = (i[s] << 8) | i[s + 1])) >> 10] + r[(1008 & t) >> 4] + r[(15 & t) << 2] + "="), n;
            }),
            (window.WAPI.getHost = function () {
                return Store.Me.attributes;
            }),
            (window.WAPI.getMe = function (e) {
                const t = window.Store.Contact.get(window.Store.Conn.me);
                return void 0 !== e && e(t.all), t.all;
            }),
            (window.WAPI.isConnected = function (e) {
                const t = null === document.querySelector('*[data-icon="alert-phone"]');
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.isLoggedIn = function (e) {
                const t = window.Store.Contact && void 0 !== window.Store.Contact.checksum;
                return void 0 !== e && e(t), t;
            }),
            (window.WAPI.getBatteryLevel = function () {
                return Store.Me.attributes.battery;
            }),
            (window.WAPI.base64ImageToFile = r),
            (window.WAPI.base64ToFile = r),
            (window.WAPI.restartService = async function () {
                return await Store.ServiceWorker.default.restart(), !0;
            }),
            (window.WAPI.killServiceWorker = async function () {
                return await Store.ServiceWorker.default.killServiceWorker(), !0;
            }),
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
            (window.WAPI.waitNewMessages = g),
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
                        e.on("change:lastUpdated", (e, n, r) => {
                            console.log(e, n, r);
                            const { id: i, lat: o, lng: a, accuracy: s, degrees: u, speed: c, lastUpdated: l } = e,
                                d = { id: i.toString(), lat: o, lng: a, accuracy: s, degrees: u, speed: c, lastUpdated: l };
                            t(d);
                        })
                    ),
                    !0)
                );
            }),
            (window.WAPI.onParticipantsChanged = function (e, t) {
                const n = ["invite", "add", "remove", "leave", "promote", "demote"],
                    r = window.Store.Chat.get(e),
                    i = window.Store.GroupMetadata.get(e);
                A[e] ||
                    ((A[e] = {}),
                    i.participants.forEach((t) => {
                        A[e][t.id.toString()] = { subtype: "add", from: i.owner };
                    }));
                let o = 0;
                return (
                    r.on("change:groupMetadata.participants", (i) =>
                        r.on("all", (i, a) => {
                            const { isGroup: s, previewMessage: u } = a;
                            if (s && "change" === i && u && "gp2" === u.type && n.includes(u.subtype)) {
                                const { subtype: n, from: i, recipients: a } = u,
                                    s = a[0].toString();
                                (A[e][s] && A[e][a[0]].subtype == n) || (0 == o ? o++ : ((A[e][s] = { subtype: n, from: i }), t({ by: i.toString(), action: n, who: a }), r.off("all", this), (o = 0)));
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
                const r = WAPI.getChat(e),
                    i = await Store.Contact.serialize().filter((e) => n.includes(e.id.user));
                r.sendMessage(t, { linkPreview: null, mentionedJidList: i.map((e) => e.id), quotedMsg: null, quotedMsgAdminGroupJid: null });
            }),
            (window.WAPI.getProfilePicSmallFromId = async function (e) {
                return await window.Store.ProfilePicThumb.find(e).then(
                    async function (e) {
                        return void 0 !== e.img && (await window.WAPI.downloadFileWithCredentials(e.img));
                    },
                    function (e) {
                        return !1;
                    }
                );
            }),
            (window.WAPI.getProfilePicFromId = async function (e) {
                return await window.Store.ProfilePicThumb.find(e).then(
                    async function (e) {
                        return void 0 !== e.imgFull && (await window.WAPI.downloadFileWithCredentials(e.imgFull));
                    },
                    function (e) {
                        return !1;
                    }
                );
            }),
            (window.WAPI.downloadFileWithCredentials = async function (e) {
                if (!axios || !e) return !1;
                const t = (await axios.get(e, { responseType: "arraybuffer" })).data;
                return btoa(new Uint8Array(t).reduce((e, t) => e + String.fromCharCode(t), ""));
            }),
            (window.WAPI._serializeNumberStatusObj = (e) => (null == e ? null : Object.assign({}, { id: e.jid, status: e.status, isBusiness: !0 === e.biz, canReceiveMessage: 200 === e.status }))),
            (window.WAPI.checkNumberStatus = async function (e) {
                try {
                    const t = await window.Store.WapQuery.queryExist(e);
                    if (void 0 === t.jid) throw 404;
                    const n = window.WAPI._serializeNumberStatusObj(t);
                    return 200 == n.status && (n.numberExists = !0), n;
                } catch (t) {
                    return window.WAPI._serializeNumberStatusObj({ status: t, jid: e });
                }
            }),
            (window.WAPI.getChatIsOnline = async function (e) {
                return (
                    !!Store.Chat.get(e) &&
                    (await Store.Chat.get(e)
                        .presence.subscribe()
                        .then((t) => Store.Chat.get(e).presence.attributes.isOnline))
                );
            }),
            (window.WAPI.getWAVersion = function () {
                return window.Debug.VERSION;
            }),
            (window.WAPI.archiveChat = async function (e, t) {
                return await Store.Archive.setArchive(Store.Chat.get(e), t)
                    .then((e) => !0)
                    .catch((e) => !1);
            });
    },
]);
