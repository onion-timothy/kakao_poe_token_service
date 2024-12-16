/*! For license information please see kgPubService.umd.js.LICENSE.txt */ ! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.kgPubService = e() : t.kgPubService = e()
}(window, (function() {
    return function(t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var i in t) n.d(r, i, function(e) {
                    return t[e]
                }.bind(null, i));
            return r
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "/", n(n.s = "./src/pub/pubService.js")
    }({
        "./node_modules/axios/index.js": function(t, e, n) {
            t.exports = n("./node_modules/axios/lib/axios.js")
        },
        "./node_modules/axios/lib/adapters/xhr.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js"),
                i = n("./node_modules/axios/lib/core/settle.js"),
                o = n("./node_modules/axios/lib/helpers/cookies.js"),
                s = n("./node_modules/axios/lib/helpers/buildURL.js"),
                u = n("./node_modules/axios/lib/core/buildFullPath.js"),
                a = n("./node_modules/axios/lib/helpers/parseHeaders.js"),
                c = n("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),
                f = n("./node_modules/axios/lib/core/createError.js");
            t.exports = function(t) {
                return new Promise((function(e, n) {
                    var l = t.data,
                        h = t.headers,
                        d = t.responseType;
                    r.isFormData(l) && delete h["Content-Type"];
                    var p = new XMLHttpRequest;
                    if (t.auth) {
                        var v = t.auth.username || "",
                            g = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        h.Authorization = "Basic " + btoa(v + ":" + g)
                    }
                    var m = u(t.baseURL, t.url);

                    function y() {
                        if (p) {
                            var r = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
                                o = {
                                    data: d && "text" !== d && "json" !== d ? p.response : p.responseText,
                                    status: p.status,
                                    statusText: p.statusText,
                                    headers: r,
                                    config: t,
                                    request: p
                                };
                            i(e, n, o), p = null
                        }
                    }
                    if (p.open(t.method.toUpperCase(), s(m, t.params, t.paramsSerializer), !0), p.timeout = t.timeout, "onloadend" in p ? p.onloadend = y : p.onreadystatechange = function() {
                            p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:")) && setTimeout(y)
                        }, p.onabort = function() {
                            p && (n(f("Request aborted", t, "ECONNABORTED", p)), p = null)
                        }, p.onerror = function() {
                            n(f("Network Error", t, null, p)), p = null
                        }, p.ontimeout = function() {
                            var e = "timeout of " + t.timeout + "ms exceeded";
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(f(e, t, t.transitional && t.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", p)), p = null
                        }, r.isStandardBrowserEnv()) {
                        var _ = (t.withCredentials || c(m)) && t.xsrfCookieName ? o.read(t.xsrfCookieName) : void 0;
                        _ && (h[t.xsrfHeaderName] = _)
                    }
                    "setRequestHeader" in p && r.forEach(h, (function(t, e) {
                        void 0 === l && "content-type" === e.toLowerCase() ? delete h[e] : p.setRequestHeader(e, t)
                    })), r.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials), d && "json" !== d && (p.responseType = t.responseType), "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) {
                        p && (p.abort(), n(t), p = null)
                    })), l || (l = null), p.send(l)
                }))
            }
        },
        "./node_modules/axios/lib/axios.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js"),
                i = n("./node_modules/axios/lib/helpers/bind.js"),
                o = n("./node_modules/axios/lib/core/Axios.js"),
                s = n("./node_modules/axios/lib/core/mergeConfig.js");

            function u(t) {
                var e = new o(t),
                    n = i(o.prototype.request, e);
                return r.extend(n, o.prototype, e), r.extend(n, e), n
            }
            var a = u(n("./node_modules/axios/lib/defaults.js"));
            a.Axios = o, a.create = function(t) {
                return u(s(a.defaults, t))
            }, a.Cancel = n("./node_modules/axios/lib/cancel/Cancel.js"), a.CancelToken = n("./node_modules/axios/lib/cancel/CancelToken.js"), a.isCancel = n("./node_modules/axios/lib/cancel/isCancel.js"), a.all = function(t) {
                return Promise.all(t)
            }, a.spread = n("./node_modules/axios/lib/helpers/spread.js"), a.isAxiosError = n("./node_modules/axios/lib/helpers/isAxiosError.js"), t.exports = a, t.exports.default = a
        },
        "./node_modules/axios/lib/cancel/Cancel.js": function(t, e, n) {
            "use strict";

            function r(t) {
                this.message = t
            }
            r.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, r.prototype.__CANCEL__ = !0, t.exports = r
        },
        "./node_modules/axios/lib/cancel/CancelToken.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/cancel/Cancel.js");

            function i(t) {
                if ("function" != typeof t) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function(t) {
                    e = t
                }));
                var n = this;
                t((function(t) {
                    n.reason || (n.reason = new r(t), e(n.reason))
                }))
            }
            i.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, i.source = function() {
                var t;
                return {
                    token: new i((function(e) {
                        t = e
                    })),
                    cancel: t
                }
            }, t.exports = i
        },
        "./node_modules/axios/lib/cancel/isCancel.js": function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return !(!t || !t.__CANCEL__)
            }
        },
        "./node_modules/axios/lib/core/Axios.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js"),
                i = n("./node_modules/axios/lib/helpers/buildURL.js"),
                o = n("./node_modules/axios/lib/core/InterceptorManager.js"),
                s = n("./node_modules/axios/lib/core/dispatchRequest.js"),
                u = n("./node_modules/axios/lib/core/mergeConfig.js"),
                a = n("./node_modules/axios/lib/helpers/validator.js"),
                c = a.validators;

            function f(t) {
                this.defaults = t, this.interceptors = {
                    request: new o,
                    response: new o
                }
            }
            f.prototype.request = function(t) {
                "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = u(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var e = t.transitional;
                void 0 !== e && a.assertOptions(e, {
                    silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
                    forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
                    clarifyTimeoutError: c.transitional(c.boolean, "1.0.0")
                }, !1);
                var n = [],
                    r = !0;
                this.interceptors.request.forEach((function(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (r = r && e.synchronous, n.unshift(e.fulfilled, e.rejected))
                }));
                var i, o = [];
                if (this.interceptors.response.forEach((function(t) {
                        o.push(t.fulfilled, t.rejected)
                    })), !r) {
                    var f = [s, void 0];
                    for (Array.prototype.unshift.apply(f, n), f = f.concat(o), i = Promise.resolve(t); f.length;) i = i.then(f.shift(), f.shift());
                    return i
                }
                for (var l = t; n.length;) {
                    var h = n.shift(),
                        d = n.shift();
                    try {
                        l = h(l)
                    } catch (t) {
                        d(t);
                        break
                    }
                }
                try {
                    i = s(l)
                } catch (t) {
                    return Promise.reject(t)
                }
                for (; o.length;) i = i.then(o.shift(), o.shift());
                return i
            }, f.prototype.getUri = function(t) {
                return t = u(this.defaults, t), i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
            }, r.forEach(["delete", "get", "head", "options"], (function(t) {
                f.prototype[t] = function(e, n) {
                    return this.request(u(n || {}, {
                        method: t,
                        url: e,
                        data: (n || {}).data
                    }))
                }
            })), r.forEach(["post", "put", "patch"], (function(t) {
                f.prototype[t] = function(e, n, r) {
                    return this.request(u(r || {}, {
                        method: t,
                        url: e,
                        data: n
                    }))
                }
            })), t.exports = f
        },
        "./node_modules/axios/lib/core/InterceptorManager.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js");

            function i() {
                this.handlers = []
            }
            i.prototype.use = function(t, e, n) {
                return this.handlers.push({
                    fulfilled: t,
                    rejected: e,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }, i.prototype.eject = function(t) {
                this.handlers[t] && (this.handlers[t] = null)
            }, i.prototype.forEach = function(t) {
                r.forEach(this.handlers, (function(e) {
                    null !== e && t(e)
                }))
            }, t.exports = i
        },
        "./node_modules/axios/lib/core/buildFullPath.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/helpers/isAbsoluteURL.js"),
                i = n("./node_modules/axios/lib/helpers/combineURLs.js");
            t.exports = function(t, e) {
                return t && !r(e) ? i(t, e) : e
            }
        },
        "./node_modules/axios/lib/core/createError.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/core/enhanceError.js");
            t.exports = function(t, e, n, i, o) {
                var s = new Error(t);
                return r(s, e, n, i, o)
            }
        },
        "./node_modules/axios/lib/core/dispatchRequest.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js"),
                i = n("./node_modules/axios/lib/core/transformData.js"),
                o = n("./node_modules/axios/lib/cancel/isCancel.js"),
                s = n("./node_modules/axios/lib/defaults.js");

            function u(t) {
                t.cancelToken && t.cancelToken.throwIfRequested()
            }
            t.exports = function(t) {
                return u(t), t.headers = t.headers || {}, t.data = i.call(t, t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                    delete t.headers[e]
                })), (t.adapter || s.adapter)(t).then((function(e) {
                    return u(t), e.data = i.call(t, e.data, e.headers, t.transformResponse), e
                }), (function(e) {
                    return o(e) || (u(t), e && e.response && (e.response.data = i.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                }))
            }
        },
        "./node_modules/axios/lib/core/enhanceError.js": function(t, e, n) {
            "use strict";
            t.exports = function(t, e, n, r, i) {
                return t.config = e, n && (t.code = n), t.request = r, t.response = i, t.isAxiosError = !0, t.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, t
            }
        },
        "./node_modules/axios/lib/core/mergeConfig.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js");
            t.exports = function(t, e) {
                e = e || {};
                var n = {},
                    i = ["url", "method", "data"],
                    o = ["headers", "auth", "proxy", "params"],
                    s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    u = ["validateStatus"];

                function a(t, e) {
                    return r.isPlainObject(t) && r.isPlainObject(e) ? r.merge(t, e) : r.isPlainObject(e) ? r.merge({}, e) : r.isArray(e) ? e.slice() : e
                }

                function c(i) {
                    r.isUndefined(e[i]) ? r.isUndefined(t[i]) || (n[i] = a(void 0, t[i])) : n[i] = a(t[i], e[i])
                }
                r.forEach(i, (function(t) {
                    r.isUndefined(e[t]) || (n[t] = a(void 0, e[t]))
                })), r.forEach(o, c), r.forEach(s, (function(i) {
                    r.isUndefined(e[i]) ? r.isUndefined(t[i]) || (n[i] = a(void 0, t[i])) : n[i] = a(void 0, e[i])
                })), r.forEach(u, (function(r) {
                    r in e ? n[r] = a(t[r], e[r]) : r in t && (n[r] = a(void 0, t[r]))
                }));
                var f = i.concat(o).concat(s).concat(u),
                    l = Object.keys(t).concat(Object.keys(e)).filter((function(t) {
                        return -1 === f.indexOf(t)
                    }));
                return r.forEach(l, c), n
            }
        },
        "./node_modules/axios/lib/core/settle.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/core/createError.js");
            t.exports = function(t, e, n) {
                var i = n.config.validateStatus;
                n.status && i && !i(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
            }
        },
        "./node_modules/axios/lib/core/transformData.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js"),
                i = n("./node_modules/axios/lib/defaults.js");
            t.exports = function(t, e, n) {
                var o = this || i;
                return r.forEach(n, (function(n) {
                    t = n.call(o, t, e)
                })), t
            }
        },
        "./node_modules/axios/lib/defaults.js": function(t, e, n) {
            "use strict";
            (function(e) {
                var r = n("./node_modules/axios/lib/utils.js"),
                    i = n("./node_modules/axios/lib/helpers/normalizeHeaderName.js"),
                    o = n("./node_modules/axios/lib/core/enhanceError.js"),
                    s = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function u(t, e) {
                    !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
                }
                var a, c = {
                    transitional: {
                        silentJSONParsing: !0,
                        forcedJSONParsing: !0,
                        clarifyTimeoutError: !1
                    },
                    adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (a = n("./node_modules/axios/lib/adapters/xhr.js")), a),
                    transformRequest: [function(t, e) {
                        return i(e, "Accept"), i(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (u(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) || e && "application/json" === e["Content-Type"] ? (u(e, "application/json"), function(t, e, n) {
                            if (r.isString(t)) try {
                                return (e || JSON.parse)(t), r.trim(t)
                            } catch (t) {
                                if ("SyntaxError" !== t.name) throw t
                            }
                            return (n || JSON.stringify)(t)
                        }(t)) : t
                    }],
                    transformResponse: [function(t) {
                        var e = this.transitional,
                            n = e && e.silentJSONParsing,
                            i = e && e.forcedJSONParsing,
                            s = !n && "json" === this.responseType;
                        if (s || i && r.isString(t) && t.length) try {
                            return JSON.parse(t)
                        } catch (t) {
                            if (s) {
                                if ("SyntaxError" === t.name) throw o(t, this, "E_JSON_PARSE");
                                throw t
                            }
                        }
                        return t
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function(t) {
                        return t >= 200 && t < 300
                    }
                };
                c.headers = {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }, r.forEach(["delete", "get", "head"], (function(t) {
                    c.headers[t] = {}
                })), r.forEach(["post", "put", "patch"], (function(t) {
                    c.headers[t] = r.merge(s)
                })), t.exports = c
            }).call(this, n("./node_modules/process/browser.js"))
        },
        "./node_modules/axios/lib/helpers/bind.js": function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return t.apply(e, n)
                }
            }
        },
        "./node_modules/axios/lib/helpers/buildURL.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js");

            function i(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            t.exports = function(t, e, n) {
                if (!e) return t;
                var o;
                if (n) o = n(e);
                else if (r.isURLSearchParams(e)) o = e.toString();
                else {
                    var s = [];
                    r.forEach(e, (function(t, e) {
                        null != t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, (function(t) {
                            r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), s.push(i(e) + "=" + i(t))
                        })))
                    })), o = s.join("&")
                }
                if (o) {
                    var u = t.indexOf("#"); - 1 !== u && (t = t.slice(0, u)), t += (-1 === t.indexOf("?") ? "?" : "&") + o
                }
                return t
            }
        },
        "./node_modules/axios/lib/helpers/combineURLs.js": function(t, e, n) {
            "use strict";
            t.exports = function(t, e) {
                return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
            }
        },
        "./node_modules/axios/lib/helpers/cookies.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js");
            t.exports = r.isStandardBrowserEnv() ? {
                write: function(t, e, n, i, o, s) {
                    var u = [];
                    u.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(i) && u.push("path=" + i), r.isString(o) && u.push("domain=" + o), !0 === s && u.push("secure"), document.cookie = u.join("; ")
                },
                read: function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        "./node_modules/axios/lib/helpers/isAbsoluteURL.js": function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
            }
        },
        "./node_modules/axios/lib/helpers/isAxiosError.js": function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return "object" == typeof t && !0 === t.isAxiosError
            }
        },
        "./node_modules/axios/lib/helpers/isURLSameOrigin.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js");
            t.exports = r.isStandardBrowserEnv() ? function() {
                var t, e = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function i(t) {
                    var r = t;
                    return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return t = i(window.location.href),
                    function(e) {
                        var n = r.isString(e) ? i(e) : e;
                        return n.protocol === t.protocol && n.host === t.host
                    }
            }() : function() {
                return !0
            }
        },
        "./node_modules/axios/lib/helpers/normalizeHeaderName.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js");
            t.exports = function(t, e) {
                r.forEach(t, (function(n, r) {
                    r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
                }))
            }
        },
        "./node_modules/axios/lib/helpers/parseHeaders.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/utils.js"),
                i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            t.exports = function(t) {
                var e, n, o, s = {};
                return t ? (r.forEach(t.split("\n"), (function(t) {
                    if (o = t.indexOf(":"), e = r.trim(t.substr(0, o)).toLowerCase(), n = r.trim(t.substr(o + 1)), e) {
                        if (s[e] && i.indexOf(e) >= 0) return;
                        s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n
                    }
                })), s) : s
            }
        },
        "./node_modules/axios/lib/helpers/spread.js": function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }
        },
        "./node_modules/axios/lib/helpers/validator.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/package.json"),
                i = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(t, e) {
                i[t] = function(n) {
                    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t
                }
            }));
            var o = {},
                s = r.version.split(".");

            function u(t, e) {
                for (var n = e ? e.split(".") : s, r = t.split("."), i = 0; i < 3; i++) {
                    if (n[i] > r[i]) return !0;
                    if (n[i] < r[i]) return !1
                }
                return !1
            }
            i.transitional = function(t, e, n) {
                var i = e && u(e);
                return function(s, u, a) {
                    if (!1 === t) throw new Error(function(t, e) {
                        return "[Axios v" + r.version + "] Transitional option '" + t + "'" + e + (n ? ". " + n : "")
                    }(u, " has been removed in " + e));
                    return i && !o[u] && (o[u] = !0), !t || t(s, u, a)
                }
            }, t.exports = {
                isOlderVersion: u,
                assertOptions: function(t, e, n) {
                    if ("object" != typeof t) throw new TypeError("options must be an object");
                    for (var r = Object.keys(t), i = r.length; i-- > 0;) {
                        var o = r[i],
                            s = e[o];
                        if (s) {
                            var u = t[o],
                                a = void 0 === u || s(u, o, t);
                            if (!0 !== a) throw new TypeError("option " + o + " must be " + a)
                        } else if (!0 !== n) throw Error("Unknown option " + o)
                    }
                },
                validators: i
            }
        },
        "./node_modules/axios/lib/utils.js": function(t, e, n) {
            "use strict";
            var r = n("./node_modules/axios/lib/helpers/bind.js"),
                i = Object.prototype.toString;

            function o(t) {
                return "[object Array]" === i.call(t)
            }

            function s(t) {
                return void 0 === t
            }

            function u(t) {
                return null !== t && "object" == typeof t
            }

            function a(t) {
                if ("[object Object]" !== i.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
            }

            function c(t) {
                return "[object Function]" === i.call(t)
            }

            function f(t, e) {
                if (null != t)
                    if ("object" != typeof t && (t = [t]), o(t))
                        for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                    else
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
            }
            t.exports = {
                isArray: o,
                isArrayBuffer: function(t) {
                    return "[object ArrayBuffer]" === i.call(t)
                },
                isBuffer: function(t) {
                    return null !== t && !s(t) && null !== t.constructor && !s(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                },
                isFormData: function(t) {
                    return "undefined" != typeof FormData && t instanceof FormData
                },
                isArrayBufferView: function(t) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isNumber: function(t) {
                    return "number" == typeof t
                },
                isObject: u,
                isPlainObject: a,
                isUndefined: s,
                isDate: function(t) {
                    return "[object Date]" === i.call(t)
                },
                isFile: function(t) {
                    return "[object File]" === i.call(t)
                },
                isBlob: function(t) {
                    return "[object Blob]" === i.call(t)
                },
                isFunction: c,
                isStream: function(t) {
                    return u(t) && c(t.pipe)
                },
                isURLSearchParams: function(t) {
                    return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: f,
                merge: function t() {
                    var e = {};

                    function n(n, r) {
                        a(e[r]) && a(n) ? e[r] = t(e[r], n) : a(n) ? e[r] = t({}, n) : o(n) ? e[r] = n.slice() : e[r] = n
                    }
                    for (var r = 0, i = arguments.length; r < i; r++) f(arguments[r], n);
                    return e
                },
                extend: function(t, e, n) {
                    return f(e, (function(e, i) {
                        t[i] = n && "function" == typeof e ? r(e, n) : e
                    })), t
                },
                trim: function(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(t) {
                    return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
                }
            }
        },
        "./node_modules/axios/package.json": function(t) {
            t.exports = JSON.parse('{"_args":[["axios@0.21.4","/data/kg-deploy-jenkins/home/production/service/workspace/kgpc-js"]],"_from":"axios@0.21.4","_id":"axios@0.21.4","_inBundle":false,"_integrity":"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==","_location":"/axios","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"axios@0.21.4","name":"axios","escapedName":"axios","rawSpec":"0.21.4","saveSpec":null,"fetchSpec":"0.21.4"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz","_spec":"0.21.4","_where":"/data/kg-deploy-jenkins/home/production/service/workspace/kgpc-js","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.14.0"},"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"homepage":"https://axios-http.com","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.4"}')
        },
        "./node_modules/detect-browser/es/index.js": function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return h
                }));
                var r = function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    },
                    i = function(t, e, n) {
                        this.name = t, this.version = e, this.os = n, this.type = "browser"
                    },
                    o = function(e) {
                        this.version = e, this.type = "node", this.name = "node", this.os = t.platform
                    },
                    s = function(t, e, n, r) {
                        this.name = t, this.version = e, this.os = n, this.bot = r, this.type = "bot-device"
                    },
                    u = function() {
                        this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                    },
                    a = function() {
                        this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                    },
                    c = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                    f = [
                        ["aol", /AOLShield\/([0-9\._]+)/],
                        ["edge", /Edge\/([0-9\._]+)/],
                        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                        ["silk", /\bSilk\/([0-9._-]+)\b/],
                        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                        ["fxios", /FxiOS\/([0-9\.]+)/],
                        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                        ["ie", /MSIE\s(7\.0)/],
                        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                        ["android", /Android\s([0-9\.]+)/],
                        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                        ["safari", /Version\/([0-9\._]+).*Safari/],
                        ["facebook", /FB[AS]V\/([0-9\.]+)/],
                        ["instagram", /Instagram\s([0-9\.]+)/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                        ["curl", /^curl\/([0-9\.]+)$/],
                        ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                    ],
                    l = [
                        ["iOS", /iP(hone|od|ad)/],
                        ["Android OS", /Android/],
                        ["BlackBerry OS", /BlackBerry|BB10/],
                        ["Windows Mobile", /IEMobile/],
                        ["Amazon OS", /Kindle/],
                        ["Windows 3.11", /Win16/],
                        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                        ["Windows 98", /(Windows 98)|(Win98)/],
                        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                        ["Windows Server 2003", /(Windows NT 5.2)/],
                        ["Windows Vista", /(Windows NT 6.0)/],
                        ["Windows 7", /(Windows NT 6.1)/],
                        ["Windows 8", /(Windows NT 6.2)/],
                        ["Windows 8.1", /(Windows NT 6.3)/],
                        ["Windows 10", /(Windows NT 10.0)/],
                        ["Windows ME", /Windows ME/],
                        ["Open BSD", /OpenBSD/],
                        ["Sun OS", /SunOS/],
                        ["Chrome OS", /CrOS/],
                        ["Linux", /(Linux)|(X11)/],
                        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                        ["QNX", /QNX/],
                        ["BeOS", /BeOS/],
                        ["OS/2", /OS\/2/]
                    ];

                function h(e) {
                    return e ? p(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new a : "undefined" != typeof navigator ? p(navigator.userAgent) : void 0 !== t && t.version ? new o(t.version.slice(1)) : null
                }

                function d(t) {
                    return "" !== t && f.reduce((function(e, n) {
                        var r = n[0],
                            i = n[1];
                        if (e) return e;
                        var o = i.exec(t);
                        return !!o && [r, o]
                    }), !1)
                }

                function p(t) {
                    var e = d(t);
                    if (!e) return null;
                    var n = e[0],
                        o = e[1];
                    if ("searchbot" === n) return new u;
                    var a = o[1] && o[1].split(".").join("_").split("_").slice(0, 3);
                    a ? a.length < 3 && (a = r(r([], a, !0), function(t) {
                        for (var e = [], n = 0; n < t; n++) e.push("0");
                        return e
                    }(3 - a.length), !0)) : a = [];
                    var f = a.join("."),
                        h = function(t) {
                            for (var e = 0, n = l.length; e < n; e++) {
                                var r = l[e],
                                    i = r[0];
                                if (r[1].exec(t)) return i
                            }
                            return null
                        }(t),
                        p = c.exec(t);
                    return p && p[1] ? new s(n, f, h, p[1]) : new i(n, f, h)
                }
            }).call(this, n("./node_modules/process/browser.js"))
        },
        "./node_modules/process/browser.js": function(t, e) {
            var n, r, i = t.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function u(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : o
                } catch (t) {
                    n = o
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    r = s
                }
            }();
            var a, c = [],
                f = !1,
                l = -1;

            function h() {
                f && a && (f = !1, a.length ? c = a.concat(c) : l = -1, c.length && d())
            }

            function d() {
                if (!f) {
                    var t = u(h);
                    f = !0;
                    for (var e = c.length; e;) {
                        for (a = c, c = []; ++l < e;) a && a[l].run();
                        l = -1, e = c.length
                    }
                    a = null, f = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function v() {}
            i.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                c.push(new p(t, e)), 1 !== c.length || f || u(d)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(t) {
                return []
            }, i.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        "./node_modules/singular-sdk/dist/singular-sdk.js": function(module, exports, __webpack_require__) {
            var n;
            window, n = function() {
                return function(t) {
                    var e = {};

                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var i = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, r) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: r
                        })
                    }, n.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(t, e) {
                        if (1 & e && (t = n(t)), 8 & e) return t;
                        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var i in t) n.d(r, i, function(e) {
                                return t[e]
                            }.bind(null, i));
                        return r
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return n.d(e, "a", e), e
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.p = "", n(n.s = 129)
                }([function(t, e, n) {
                    var r = n(2),
                        i = n(10),
                        o = n(18),
                        s = n(15),
                        u = n(21),
                        a = function(t, e, n) {
                            var c, f, l, h, d = t & a.F,
                                p = t & a.G,
                                v = t & a.S,
                                g = t & a.P,
                                m = t & a.B,
                                y = p ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                                _ = p ? i : i[e] || (i[e] = {}),
                                b = _.prototype || (_.prototype = {});
                            for (c in p && (n = e), n) l = ((f = !d && y && void 0 !== y[c]) ? y : n)[c], h = m && f ? u(l, r) : g && "function" == typeof l ? u(Function.call, l) : l, y && s(y, c, l, t & a.U), _[c] != l && o(_, c, h), g && b[c] != l && (b[c] = l)
                        };
                    r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
                }, function(t, e) {
                    t.exports = function(t, e, n) {
                        return e in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }
                }, function(t, e) {
                    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = n)
                }, function(t, e) {
                    t.exports = function(t) {
                        try {
                            return !!t()
                        } catch (t) {
                            return !0
                        }
                    }
                }, function(t, e, n) {
                    var r = n(5);
                    t.exports = function(t) {
                        if (!r(t)) throw TypeError(t + " is not an object!");
                        return t
                    }
                }, function(t, e) {
                    t.exports = function(t) {
                        return "object" == typeof t ? null !== t : "function" == typeof t
                    }
                }, function(t, e) {
                    t.exports = function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                }, function(t, e) {
                    function n(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    t.exports = function(t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }, function(t, e, n) {
                    var r = n(57)("wks"),
                        i = n(37),
                        o = n(2).Symbol,
                        s = "function" == typeof o;
                    (t.exports = function(t) {
                        return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t))
                    }).store = r
                }, function(t, e, n) {
                    var r = n(23),
                        i = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? i(r(t), 9007199254740991) : 0
                    }
                }, function(t, e) {
                    var n = t.exports = {
                        version: "2.6.9"
                    };
                    "number" == typeof __e && (__e = n)
                }, function(t, e, n) {
                    t.exports = !n(3)((function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                }, function(t, e, n) {
                    var r = n(4),
                        i = n(94),
                        o = n(32),
                        s = Object.defineProperty;
                    e.f = n(11) ? Object.defineProperty : function(t, e, n) {
                        if (r(t), e = o(e, !0), r(n), i) try {
                            return s(t, e, n)
                        } catch (t) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (t[e] = n.value), t
                    }
                }, function(t, e, n) {
                    var r = n(29);
                    t.exports = function(t) {
                        return Object(r(t))
                    }
                }, function(t, e, n) {
                    t.exports = n(125)
                }, function(t, e, n) {
                    var r = n(2),
                        i = n(18),
                        o = n(17),
                        s = n(37)("src"),
                        u = n(134),
                        a = ("" + u).split("toString");
                    n(10).inspectSource = function(t) {
                        return u.call(t)
                    }, (t.exports = function(t, e, n, u) {
                        var c = "function" == typeof n;
                        c && (o(n, "name") || i(n, "name", e)), t[e] !== n && (c && (o(n, s) || i(n, s, t[e] ? "" + t[e] : a.join(String(e)))), t === r ? t[e] = n : u ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
                    })(Function.prototype, "toString", (function() {
                        return "function" == typeof this && this[s] || u.call(this)
                    }))
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(3),
                        o = n(29),
                        s = /"/g,
                        u = function(t, e, n, r) {
                            var i = String(o(t)),
                                u = "<" + e;
                            return "" !== n && (u += " " + n + '="' + String(r).replace(s, "&quot;") + '"'), u + ">" + i + "</" + e + ">"
                        };
                    t.exports = function(t, e) {
                        var n = {};
                        n[t] = e(u), r(r.P + r.F * i((function() {
                            var e = "" [t]('"');
                            return e !== e.toLowerCase() || e.split('"').length > 3
                        })), "String", n)
                    }
                }, function(t, e) {
                    var n = {}.hasOwnProperty;
                    t.exports = function(t, e) {
                        return n.call(t, e)
                    }
                }, function(t, e, n) {
                    var r = n(12),
                        i = n(36);
                    t.exports = n(11) ? function(t, e, n) {
                        return r.f(t, e, i(1, n))
                    } : function(t, e, n) {
                        return t[e] = n, t
                    }
                }, function(t, e, n) {
                    var r = n(52),
                        i = n(29);
                    t.exports = function(t) {
                        return r(i(t))
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(3);
                    t.exports = function(t, e) {
                        return !!t && r((function() {
                            e ? t.call(null, (function() {}), 1) : t.call(null)
                        }))
                    }
                }, function(t, e, n) {
                    var r = n(22);
                    t.exports = function(t, e, n) {
                        if (r(t), void 0 === e) return t;
                        switch (n) {
                            case 1:
                                return function(n) {
                                    return t.call(e, n)
                                };
                            case 2:
                                return function(n, r) {
                                    return t.call(e, n, r)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return t.call(e, n, r, i)
                                }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }
                }, function(t, e) {
                    t.exports = function(t) {
                        if ("function" != typeof t) throw TypeError(t + " is not a function!");
                        return t
                    }
                }, function(t, e) {
                    var n = Math.ceil,
                        r = Math.floor;
                    t.exports = function(t) {
                        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
                    }
                }, function(t, e, n) {
                    var r = n(53),
                        i = n(36),
                        o = n(19),
                        s = n(32),
                        u = n(17),
                        a = n(94),
                        c = Object.getOwnPropertyDescriptor;
                    e.f = n(11) ? c : function(t, e) {
                        if (t = o(t), e = s(e, !0), a) try {
                            return c(t, e)
                        } catch (t) {}
                        if (u(t, e)) return i(!r.f.call(t, e), t[e])
                    }
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(10),
                        o = n(3);
                    t.exports = function(t, e) {
                        var n = (i.Object || {})[t] || Object[t],
                            s = {};
                        s[t] = e(n), r(r.S + r.F * o((function() {
                            n(1)
                        })), "Object", s)
                    }
                }, function(t, e, n) {
                    var r = n(21),
                        i = n(52),
                        o = n(13),
                        s = n(9),
                        u = n(110);
                    t.exports = function(t, e) {
                        var n = 1 == t,
                            a = 2 == t,
                            c = 3 == t,
                            f = 4 == t,
                            l = 6 == t,
                            h = 5 == t || l,
                            d = e || u;
                        return function(e, u, p) {
                            for (var v, g, m = o(e), y = i(m), _ = r(u, p, 3), b = s(y.length), S = 0, w = n ? d(e, b) : a ? d(e, 0) : void 0; b > S; S++)
                                if ((h || S in y) && (g = _(v = y[S], S, m), t))
                                    if (n) w[S] = g;
                                    else if (g) switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return v;
                                case 6:
                                    return S;
                                case 2:
                                    w.push(v)
                            } else if (f) return !1;
                            return l ? -1 : c || f ? f : w
                        }
                    }
                }, function(t, e) {
                    function n(e) {
                        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                            return t.__proto__ || Object.getPrototypeOf(t)
                        }, n(e)
                    }
                    t.exports = n
                }, function(t, e) {
                    var n = {}.toString;
                    t.exports = function(t) {
                        return n.call(t).slice(8, -1)
                    }
                }, function(t, e) {
                    t.exports = function(t) {
                        if (null == t) throw TypeError("Can't call method on  " + t);
                        return t
                    }
                }, function(t, e, n) {
                    "use strict";
                    if (n(11)) {
                        var r = n(38),
                            i = n(2),
                            o = n(3),
                            s = n(0),
                            u = n(68),
                            a = n(93),
                            c = n(21),
                            f = n(50),
                            l = n(36),
                            h = n(18),
                            d = n(51),
                            p = n(23),
                            v = n(9),
                            g = n(121),
                            m = n(40),
                            y = n(32),
                            _ = n(17),
                            b = n(54),
                            S = n(5),
                            w = n(13),
                            x = n(85),
                            E = n(41),
                            I = n(43),
                            k = n(42).f,
                            O = n(87),
                            A = n(37),
                            P = n(8),
                            j = n(26),
                            T = n(58),
                            C = n(55),
                            N = n(89),
                            R = n(48),
                            U = n(61),
                            M = n(49),
                            D = n(88),
                            F = n(112),
                            L = n(12),
                            W = n(24),
                            H = L.f,
                            B = W.f,
                            V = i.RangeError,
                            K = i.TypeError,
                            G = i.Uint8Array,
                            q = Array.prototype,
                            X = a.ArrayBuffer,
                            z = a.DataView,
                            J = j(0),
                            Q = j(2),
                            $ = j(3),
                            Y = j(4),
                            Z = j(5),
                            tt = j(6),
                            et = T(!0),
                            nt = T(!1),
                            rt = N.values,
                            it = N.keys,
                            ot = N.entries,
                            st = q.lastIndexOf,
                            ut = q.reduce,
                            at = q.reduceRight,
                            ct = q.join,
                            ft = q.sort,
                            lt = q.slice,
                            ht = q.toString,
                            dt = q.toLocaleString,
                            pt = P("iterator"),
                            vt = P("toStringTag"),
                            gt = A("typed_constructor"),
                            mt = A("def_constructor"),
                            yt = u.CONSTR,
                            _t = u.TYPED,
                            bt = u.VIEW,
                            St = j(1, (function(t, e) {
                                return kt(C(t, t[mt]), e)
                            })),
                            wt = o((function() {
                                return 1 === new G(new Uint16Array([1]).buffer)[0]
                            })),
                            xt = !!G && !!G.prototype.set && o((function() {
                                new G(1).set({})
                            })),
                            Et = function(t, e) {
                                var n = p(t);
                                if (n < 0 || n % e) throw V("Wrong offset!");
                                return n
                            },
                            It = function(t) {
                                if (S(t) && _t in t) return t;
                                throw K(t + " is not a typed array!")
                            },
                            kt = function(t, e) {
                                if (!S(t) || !(gt in t)) throw K("It is not a typed array constructor!");
                                return new t(e)
                            },
                            Ot = function(t, e) {
                                return At(C(t, t[mt]), e)
                            },
                            At = function(t, e) {
                                for (var n = 0, r = e.length, i = kt(t, r); r > n;) i[n] = e[n++];
                                return i
                            },
                            Pt = function(t, e, n) {
                                H(t, e, {
                                    get: function() {
                                        return this._d[n]
                                    }
                                })
                            },
                            jt = function(t) {
                                var e, n, r, i, o, s, u = w(t),
                                    a = arguments.length,
                                    f = a > 1 ? arguments[1] : void 0,
                                    l = void 0 !== f,
                                    h = O(u);
                                if (null != h && !x(h)) {
                                    for (s = h.call(u), r = [], e = 0; !(o = s.next()).done; e++) r.push(o.value);
                                    u = r
                                }
                                for (l && a > 2 && (f = c(f, arguments[2], 2)), e = 0, n = v(u.length), i = kt(this, n); n > e; e++) i[e] = l ? f(u[e], e) : u[e];
                                return i
                            },
                            Tt = function() {
                                for (var t = 0, e = arguments.length, n = kt(this, e); e > t;) n[t] = arguments[t++];
                                return n
                            },
                            Ct = !!G && o((function() {
                                dt.call(new G(1))
                            })),
                            Nt = function() {
                                return dt.apply(Ct ? lt.call(It(this)) : It(this), arguments)
                            },
                            Rt = {
                                copyWithin: function(t, e) {
                                    return F.call(It(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                                },
                                every: function(t) {
                                    return Y(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                fill: function(t) {
                                    return D.apply(It(this), arguments)
                                },
                                filter: function(t) {
                                    return Ot(this, Q(It(this), t, arguments.length > 1 ? arguments[1] : void 0))
                                },
                                find: function(t) {
                                    return Z(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                findIndex: function(t) {
                                    return tt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                forEach: function(t) {
                                    J(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                indexOf: function(t) {
                                    return nt(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                includes: function(t) {
                                    return et(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                join: function(t) {
                                    return ct.apply(It(this), arguments)
                                },
                                lastIndexOf: function(t) {
                                    return st.apply(It(this), arguments)
                                },
                                map: function(t) {
                                    return St(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                reduce: function(t) {
                                    return ut.apply(It(this), arguments)
                                },
                                reduceRight: function(t) {
                                    return at.apply(It(this), arguments)
                                },
                                reverse: function() {
                                    for (var t, e = It(this).length, n = Math.floor(e / 2), r = 0; r < n;) t = this[r], this[r++] = this[--e], this[e] = t;
                                    return this
                                },
                                some: function(t) {
                                    return $(It(this), t, arguments.length > 1 ? arguments[1] : void 0)
                                },
                                sort: function(t) {
                                    return ft.call(It(this), t)
                                },
                                subarray: function(t, e) {
                                    var n = It(this),
                                        r = n.length,
                                        i = m(t, r);
                                    return new(C(n, n[mt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, v((void 0 === e ? r : m(e, r)) - i))
                                }
                            },
                            Ut = function(t, e) {
                                return Ot(this, lt.call(It(this), t, e))
                            },
                            Mt = function(t) {
                                It(this);
                                var e = Et(arguments[1], 1),
                                    n = this.length,
                                    r = w(t),
                                    i = v(r.length),
                                    o = 0;
                                if (i + e > n) throw V("Wrong length!");
                                for (; o < i;) this[e + o] = r[o++]
                            },
                            Dt = {
                                entries: function() {
                                    return ot.call(It(this))
                                },
                                keys: function() {
                                    return it.call(It(this))
                                },
                                values: function() {
                                    return rt.call(It(this))
                                }
                            },
                            Ft = function(t, e) {
                                return S(t) && t[_t] && "symbol" != typeof e && e in t && String(+e) == String(e)
                            },
                            Lt = function(t, e) {
                                return Ft(t, e = y(e, !0)) ? l(2, t[e]) : B(t, e)
                            },
                            Wt = function(t, e, n) {
                                return !(Ft(t, e = y(e, !0)) && S(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? H(t, e, n) : (t[e] = n.value, t)
                            };
                        yt || (W.f = Lt, L.f = Wt), s(s.S + s.F * !yt, "Object", {
                            getOwnPropertyDescriptor: Lt,
                            defineProperty: Wt
                        }), o((function() {
                            ht.call({})
                        })) && (ht = dt = function() {
                            return ct.call(this)
                        });
                        var Ht = d({}, Rt);
                        d(Ht, Dt), h(Ht, pt, Dt.values), d(Ht, {
                            slice: Ut,
                            set: Mt,
                            constructor: function() {},
                            toString: ht,
                            toLocaleString: Nt
                        }), Pt(Ht, "buffer", "b"), Pt(Ht, "byteOffset", "o"), Pt(Ht, "byteLength", "l"), Pt(Ht, "length", "e"), H(Ht, vt, {
                            get: function() {
                                return this[_t]
                            }
                        }), t.exports = function(t, e, n, a) {
                            var c = t + ((a = !!a) ? "Clamped" : "") + "Array",
                                l = "get" + t,
                                d = "set" + t,
                                p = i[c],
                                m = p || {},
                                y = p && I(p),
                                _ = !p || !u.ABV,
                                w = {},
                                x = p && p.prototype,
                                O = function(t, n) {
                                    H(t, n, {
                                        get: function() {
                                            return function(t, n) {
                                                var r = t._d;
                                                return r.v[l](n * e + r.o, wt)
                                            }(this, n)
                                        },
                                        set: function(t) {
                                            return function(t, n, r) {
                                                var i = t._d;
                                                a && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[d](n * e + i.o, r, wt)
                                            }(this, n, t)
                                        },
                                        enumerable: !0
                                    })
                                };
                            _ ? (p = n((function(t, n, r, i) {
                                f(t, p, c, "_d");
                                var o, s, u, a, l = 0,
                                    d = 0;
                                if (S(n)) {
                                    if (!(n instanceof X || "ArrayBuffer" == (a = b(n)) || "SharedArrayBuffer" == a)) return _t in n ? At(p, n) : jt.call(p, n);
                                    o = n, d = Et(r, e);
                                    var m = n.byteLength;
                                    if (void 0 === i) {
                                        if (m % e) throw V("Wrong length!");
                                        if ((s = m - d) < 0) throw V("Wrong length!")
                                    } else if ((s = v(i) * e) + d > m) throw V("Wrong length!");
                                    u = s / e
                                } else u = g(n), o = new X(s = u * e);
                                for (h(t, "_d", {
                                        b: o,
                                        o: d,
                                        l: s,
                                        e: u,
                                        v: new z(o)
                                    }); l < u;) O(t, l++)
                            })), x = p.prototype = E(Ht), h(x, "constructor", p)) : o((function() {
                                p(1)
                            })) && o((function() {
                                new p(-1)
                            })) && U((function(t) {
                                new p, new p(null), new p(1.5), new p(t)
                            }), !0) || (p = n((function(t, n, r, i) {
                                var o;
                                return f(t, p, c), S(n) ? n instanceof X || "ArrayBuffer" == (o = b(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new m(n, Et(r, e), i) : void 0 !== r ? new m(n, Et(r, e)) : new m(n) : _t in n ? At(p, n) : jt.call(p, n) : new m(g(n))
                            })), J(y !== Function.prototype ? k(m).concat(k(y)) : k(m), (function(t) {
                                t in p || h(p, t, m[t])
                            })), p.prototype = x, r || (x.constructor = p));
                            var A = x[pt],
                                P = !!A && ("values" == A.name || null == A.name),
                                j = Dt.values;
                            h(p, gt, !0), h(x, _t, c), h(x, bt, !0), h(x, mt, p), (a ? new p(1)[vt] == c : vt in x) || H(x, vt, {
                                get: function() {
                                    return c
                                }
                            }), w[c] = p, s(s.G + s.W + s.F * (p != m), w), s(s.S, c, {
                                BYTES_PER_ELEMENT: e
                            }), s(s.S + s.F * o((function() {
                                m.of.call(p, 1)
                            })), c, {
                                from: jt,
                                of: Tt
                            }), "BYTES_PER_ELEMENT" in x || h(x, "BYTES_PER_ELEMENT", e), s(s.P, c, Rt), M(c), s(s.P + s.F * xt, c, {
                                set: Mt
                            }), s(s.P + s.F * !P, c, Dt), r || x.toString == ht || (x.toString = ht), s(s.P + s.F * o((function() {
                                new p(1).slice()
                            })), c, {
                                slice: Ut
                            }), s(s.P + s.F * (o((function() {
                                return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                            })) || !o((function() {
                                x.toLocaleString.call([1, 2])
                            }))), c, {
                                toLocaleString: Nt
                            }), R[c] = P ? A : j, r || P || h(x, pt, j)
                        }
                    } else t.exports = function() {}
                }, function(t, e) {
                    function n(t, e, n, r, i, o, s) {
                        try {
                            var u = t[o](s),
                                a = u.value
                        } catch (t) {
                            return void n(t)
                        }
                        u.done ? e(a) : Promise.resolve(a).then(r, i)
                    }
                    t.exports = function(t) {
                        return function() {
                            var e = this,
                                r = arguments;
                            return new Promise((function(i, o) {
                                var s = t.apply(e, r);

                                function u(t) {
                                    n(s, i, o, u, a, "next", t)
                                }

                                function a(t) {
                                    n(s, i, o, u, a, "throw", t)
                                }
                                u(void 0)
                            }))
                        }
                    }
                }, function(t, e, n) {
                    var r = n(5);
                    t.exports = function(t, e) {
                        if (!r(t)) return t;
                        var n, i;
                        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
                        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                        throw TypeError("Can't convert object to primitive value")
                    }
                }, function(t, e, n) {
                    var r = n(37)("meta"),
                        i = n(5),
                        o = n(17),
                        s = n(12).f,
                        u = 0,
                        a = Object.isExtensible || function() {
                            return !0
                        },
                        c = !n(3)((function() {
                            return a(Object.preventExtensions({}))
                        })),
                        f = function(t) {
                            s(t, r, {
                                value: {
                                    i: "O" + ++u,
                                    w: {}
                                }
                            })
                        },
                        l = t.exports = {
                            KEY: r,
                            NEED: !1,
                            fastKey: function(t, e) {
                                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                                if (!o(t, r)) {
                                    if (!a(t)) return "F";
                                    if (!e) return "E";
                                    f(t)
                                }
                                return t[r].i
                            },
                            getWeak: function(t, e) {
                                if (!o(t, r)) {
                                    if (!a(t)) return !0;
                                    if (!e) return !1;
                                    f(t)
                                }
                                return t[r].w
                            },
                            onFreeze: function(t) {
                                return c && l.NEED && a(t) && !o(t, r) && f(t), t
                            }
                        }
                }, function(t, e, n) {
                    var r = n(302),
                        i = n(303);
                    t.exports = function(t, e) {
                        return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e
                    }
                }, function(t, e, n) {
                    var r = n(304);
                    t.exports = function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && r(t, e)
                    }
                }, function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: e
                        }
                    }
                }, function(t, e) {
                    var n = 0,
                        r = Math.random();
                    t.exports = function(t) {
                        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
                    }
                }, function(t, e) {
                    t.exports = !1
                }, function(t, e, n) {
                    var r = n(96),
                        i = n(72);
                    t.exports = Object.keys || function(t) {
                        return r(t, i)
                    }
                }, function(t, e, n) {
                    var r = n(23),
                        i = Math.max,
                        o = Math.min;
                    t.exports = function(t, e) {
                        return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
                    }
                }, function(t, e, n) {
                    var r = n(4),
                        i = n(97),
                        o = n(72),
                        s = n(71)("IE_PROTO"),
                        u = function() {},
                        a = function() {
                            var t, e = n(69)("iframe"),
                                r = o.length;
                            for (e.style.display = "none", n(73).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[o[r]];
                            return a()
                        };
                    t.exports = Object.create || function(t, e) {
                        var n;
                        return null !== t ? (u.prototype = r(t), n = new u, u.prototype = null, n[s] = t) : n = a(), void 0 === e ? n : i(n, e)
                    }
                }, function(t, e, n) {
                    var r = n(96),
                        i = n(72).concat("length", "prototype");
                    e.f = Object.getOwnPropertyNames || function(t) {
                        return r(t, i)
                    }
                }, function(t, e, n) {
                    var r = n(17),
                        i = n(13),
                        o = n(71)("IE_PROTO"),
                        s = Object.prototype;
                    t.exports = Object.getPrototypeOf || function(t) {
                        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
                    }
                }, function(t, e, n) {
                    var r = n(8)("unscopables"),
                        i = Array.prototype;
                    null == i[r] && n(18)(i, r, {}), t.exports = function(t) {
                        i[r][t] = !0
                    }
                }, function(t, e, n) {
                    var r = n(5);
                    t.exports = function(t, e) {
                        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                        return t
                    }
                }, function(t, e, n) {
                    var r = n(12).f,
                        i = n(17),
                        o = n(8)("toStringTag");
                    t.exports = function(t, e, n) {
                        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                            configurable: !0,
                            value: e
                        })
                    }
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(29),
                        o = n(3),
                        s = n(75),
                        u = "[" + s + "]",
                        a = RegExp("^" + u + u + "*"),
                        c = RegExp(u + u + "*$"),
                        f = function(t, e, n) {
                            var i = {},
                                u = o((function() {
                                    return !!s[t]() || "​" != "​" [t]()
                                })),
                                a = i[t] = u ? e(l) : s[t];
                            n && (i[n] = a), r(r.P + r.F * u, "String", i)
                        },
                        l = f.trim = function(t, e) {
                            return t = String(i(t)), 1 & e && (t = t.replace(a, "")), 2 & e && (t = t.replace(c, "")), t
                        };
                    t.exports = f
                }, function(t, e) {
                    t.exports = {}
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        i = n(12),
                        o = n(11),
                        s = n(8)("species");
                    t.exports = function(t) {
                        var e = r[t];
                        o && e && !e[s] && i.f(e, s, {
                            configurable: !0,
                            get: function() {
                                return this
                            }
                        })
                    }
                }, function(t, e) {
                    t.exports = function(t, e, n, r) {
                        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
                        return t
                    }
                }, function(t, e, n) {
                    var r = n(15);
                    t.exports = function(t, e, n) {
                        for (var i in e) r(t, i, e[i], n);
                        return t
                    }
                }, function(t, e, n) {
                    var r = n(28);
                    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                        return "String" == r(t) ? t.split("") : Object(t)
                    }
                }, function(t, e) {
                    e.f = {}.propertyIsEnumerable
                }, function(t, e, n) {
                    var r = n(28),
                        i = n(8)("toStringTag"),
                        o = "Arguments" == r(function() {
                            return arguments
                        }());
                    t.exports = function(t) {
                        var e, n, s;
                        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                            try {
                                return t[e]
                            } catch (t) {}
                        }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
                    }
                }, function(t, e, n) {
                    var r = n(4),
                        i = n(22),
                        o = n(8)("species");
                    t.exports = function(t, e) {
                        var n, s = r(t).constructor;
                        return void 0 === s || null == (n = r(s)[o]) ? e : i(n)
                    }
                }, function(t, e, n) {
                    var r = n(305),
                        i = n(306),
                        o = n(307);
                    t.exports = function(t, e) {
                        return r(t) || i(t, e) || o()
                    }
                }, function(t, e, n) {
                    var r = n(10),
                        i = n(2),
                        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
                    (t.exports = function(t, e) {
                        return o[t] || (o[t] = void 0 !== e ? e : {})
                    })("versions", []).push({
                        version: r.version,
                        mode: n(38) ? "pure" : "global",
                        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                    })
                }, function(t, e, n) {
                    var r = n(19),
                        i = n(9),
                        o = n(40);
                    t.exports = function(t) {
                        return function(e, n, s) {
                            var u, a = r(e),
                                c = i(a.length),
                                f = o(s, c);
                            if (t && n != n) {
                                for (; c > f;)
                                    if ((u = a[f++]) != u) return !0
                            } else
                                for (; c > f; f++)
                                    if ((t || f in a) && a[f] === n) return t || f || 0;
                            return !t && -1
                        }
                    }
                }, function(t, e) {
                    e.f = Object.getOwnPropertySymbols
                }, function(t, e, n) {
                    var r = n(28);
                    t.exports = Array.isArray || function(t) {
                        return "Array" == r(t)
                    }
                }, function(t, e, n) {
                    var r = n(8)("iterator"),
                        i = !1;
                    try {
                        var o = [7][r]();
                        o.return = function() {
                            i = !0
                        }, Array.from(o, (function() {
                            throw 2
                        }))
                    } catch (t) {}
                    t.exports = function(t, e) {
                        if (!e && !i) return !1;
                        var n = !1;
                        try {
                            var o = [7],
                                s = o[r]();
                            s.next = function() {
                                return {
                                    done: n = !0
                                }
                            }, o[r] = function() {
                                return s
                            }, t(o)
                        } catch (t) {}
                        return n
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(4);
                    t.exports = function() {
                        var t = r(this),
                            e = "";
                        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(54),
                        i = RegExp.prototype.exec;
                    t.exports = function(t, e) {
                        var n = t.exec;
                        if ("function" == typeof n) {
                            var o = n.call(t, e);
                            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                            return o
                        }
                        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
                        return i.call(t, e)
                    }
                }, function(t, e, n) {
                    "use strict";
                    n(114);
                    var r = n(15),
                        i = n(18),
                        o = n(3),
                        s = n(29),
                        u = n(8),
                        a = n(90),
                        c = u("species"),
                        f = !o((function() {
                            var t = /./;
                            return t.exec = function() {
                                var t = [];
                                return t.groups = {
                                    a: "7"
                                }, t
                            }, "7" !== "".replace(t, "$<a>")
                        })),
                        l = function() {
                            var t = /(?:)/,
                                e = t.exec;
                            t.exec = function() {
                                return e.apply(this, arguments)
                            };
                            var n = "ab".split(t);
                            return 2 === n.length && "a" === n[0] && "b" === n[1]
                        }();
                    t.exports = function(t, e, n) {
                        var h = u(t),
                            d = !o((function() {
                                var e = {};
                                return e[h] = function() {
                                    return 7
                                }, 7 != "" [t](e)
                            })),
                            p = d ? !o((function() {
                                var e = !1,
                                    n = /a/;
                                return n.exec = function() {
                                    return e = !0, null
                                }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
                                    return n
                                }), n[h](""), !e
                            })) : void 0;
                        if (!d || !p || "replace" === t && !f || "split" === t && !l) {
                            var v = /./ [h],
                                g = n(s, h, "" [t], (function(t, e, n, r, i) {
                                    return e.exec === a ? d && !i ? {
                                        done: !0,
                                        value: v.call(e, n, r)
                                    } : {
                                        done: !0,
                                        value: t.call(n, e, r)
                                    } : {
                                        done: !1
                                    }
                                })),
                                m = g[0],
                                y = g[1];
                            r(String.prototype, t, m), i(RegExp.prototype, h, 2 == e ? function(t, e) {
                                return y.call(t, this, e)
                            } : function(t) {
                                return y.call(t, this)
                            })
                        }
                    }
                }, function(t, e, n) {
                    var r = n(21),
                        i = n(109),
                        o = n(85),
                        s = n(4),
                        u = n(9),
                        a = n(87),
                        c = {},
                        f = {};
                    (e = t.exports = function(t, e, n, l, h) {
                        var d, p, v, g, m = h ? function() {
                                return t
                            } : a(t),
                            y = r(n, l, e ? 2 : 1),
                            _ = 0;
                        if ("function" != typeof m) throw TypeError(t + " is not iterable!");
                        if (o(m)) {
                            for (d = u(t.length); d > _; _++)
                                if ((g = e ? y(s(p = t[_])[0], p[1]) : y(t[_])) === c || g === f) return g
                        } else
                            for (v = m.call(t); !(p = v.next()).done;)
                                if ((g = i(v, y, p.value, e)) === c || g === f) return g
                    }).BREAK = c, e.RETURN = f
                }, function(t, e, n) {
                    var r = n(2).navigator;
                    t.exports = r && r.userAgent || ""
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        i = n(0),
                        o = n(15),
                        s = n(51),
                        u = n(33),
                        a = n(65),
                        c = n(50),
                        f = n(5),
                        l = n(3),
                        h = n(61),
                        d = n(46),
                        p = n(76);
                    t.exports = function(t, e, n, v, g, m) {
                        var y = r[t],
                            _ = y,
                            b = g ? "set" : "add",
                            S = _ && _.prototype,
                            w = {},
                            x = function(t) {
                                var e = S[t];
                                o(S, t, "delete" == t || "has" == t ? function(t) {
                                    return !(m && !f(t)) && e.call(this, 0 === t ? 0 : t)
                                } : "get" == t ? function(t) {
                                    return m && !f(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                                } : "add" == t ? function(t) {
                                    return e.call(this, 0 === t ? 0 : t), this
                                } : function(t, n) {
                                    return e.call(this, 0 === t ? 0 : t, n), this
                                })
                            };
                        if ("function" == typeof _ && (m || S.forEach && !l((function() {
                                (new _).entries().next()
                            })))) {
                            var E = new _,
                                I = E[b](m ? {} : -0, 1) != E,
                                k = l((function() {
                                    E.has(1)
                                })),
                                O = h((function(t) {
                                    new _(t)
                                })),
                                A = !m && l((function() {
                                    for (var t = new _, e = 5; e--;) t[b](e, e);
                                    return !t.has(-0)
                                }));
                            O || ((_ = e((function(e, n) {
                                c(e, _, t);
                                var r = p(new y, e, _);
                                return null != n && a(n, g, r[b], r), r
                            }))).prototype = S, S.constructor = _), (k || A) && (x("delete"), x("has"), g && x("get")), (A || I) && x(b), m && S.clear && delete S.clear
                        } else _ = v.getConstructor(e, t, g, b), s(_.prototype, n), u.NEED = !0;
                        return d(_, t), w[t] = _, i(i.G + i.W + i.F * (_ != y), w), m || v.setStrong(_, t, g), _
                    }
                }, function(t, e, n) {
                    for (var r, i = n(2), o = n(18), s = n(37), u = s("typed_array"), a = s("view"), c = !(!i.ArrayBuffer || !i.DataView), f = c, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;)(r = i[h[l++]]) ? (o(r.prototype, u, !0), o(r.prototype, a, !0)) : f = !1;
                    t.exports = {
                        ABV: c,
                        CONSTR: f,
                        TYPED: u,
                        VIEW: a
                    }
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(2).document,
                        o = r(i) && r(i.createElement);
                    t.exports = function(t) {
                        return o ? i.createElement(t) : {}
                    }
                }, function(t, e, n) {
                    e.f = n(8)
                }, function(t, e, n) {
                    var r = n(57)("keys"),
                        i = n(37);
                    t.exports = function(t) {
                        return r[t] || (r[t] = i(t))
                    }
                }, function(t, e) {
                    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
                }, function(t, e, n) {
                    var r = n(2).document;
                    t.exports = r && r.documentElement
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(4),
                        o = function(t, e) {
                            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
                        };
                    t.exports = {
                        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                            try {
                                (r = n(21)(Function.call, n(24).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                            } catch (t) {
                                e = !0
                            }
                            return function(t, n) {
                                return o(t, n), e ? t.__proto__ = n : r(t, n), t
                            }
                        }({}, !1) : void 0),
                        check: o
                    }
                }, function(t, e) {
                    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(74).set;
                    t.exports = function(t, e, n) {
                        var o, s = e.constructor;
                        return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && r(o) && i && i(t, o), t
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(23),
                        i = n(29);
                    t.exports = function(t) {
                        var e = String(i(this)),
                            n = "",
                            o = r(t);
                        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
                        for (; o > 0;
                            (o >>>= 1) && (e += e)) 1 & o && (n += e);
                        return n
                    }
                }, function(t, e) {
                    t.exports = Math.sign || function(t) {
                        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
                    }
                }, function(t, e) {
                    var n = Math.expm1;
                    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) {
                        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
                    } : n
                }, function(t, e, n) {
                    var r = n(23),
                        i = n(29);
                    t.exports = function(t) {
                        return function(e, n) {
                            var o, s, u = String(i(e)),
                                a = r(n),
                                c = u.length;
                            return a < 0 || a >= c ? t ? "" : void 0 : (o = u.charCodeAt(a)) < 55296 || o > 56319 || a + 1 === c || (s = u.charCodeAt(a + 1)) < 56320 || s > 57343 ? t ? u.charAt(a) : o : t ? u.slice(a, a + 2) : s - 56320 + (o - 55296 << 10) + 65536
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(38),
                        i = n(0),
                        o = n(15),
                        s = n(18),
                        u = n(48),
                        a = n(108),
                        c = n(46),
                        f = n(43),
                        l = n(8)("iterator"),
                        h = !([].keys && "next" in [].keys()),
                        d = function() {
                            return this
                        };
                    t.exports = function(t, e, n, p, v, g, m) {
                        a(n, e, p);
                        var y, _, b, S = function(t) {
                                if (!h && t in I) return I[t];
                                switch (t) {
                                    case "keys":
                                    case "values":
                                        return function() {
                                            return new n(this, t)
                                        }
                                }
                                return function() {
                                    return new n(this, t)
                                }
                            },
                            w = e + " Iterator",
                            x = "values" == v,
                            E = !1,
                            I = t.prototype,
                            k = I[l] || I["@@iterator"] || v && I[v],
                            O = k || S(v),
                            A = v ? x ? S("entries") : O : void 0,
                            P = "Array" == e && I.entries || k;
                        if (P && (b = f(P.call(new t))) !== Object.prototype && b.next && (c(b, w, !0), r || "function" == typeof b[l] || s(b, l, d)), x && k && "values" !== k.name && (E = !0, O = function() {
                                return k.call(this)
                            }), r && !m || !h && !E && I[l] || s(I, l, O), u[e] = O, u[w] = d, v)
                            if (y = {
                                    values: x ? O : S("values"),
                                    keys: g ? O : S("keys"),
                                    entries: A
                                }, m)
                                for (_ in y) _ in I || o(I, _, y[_]);
                            else i(i.P + i.F * (h || E), e, y);
                        return y
                    }
                }, function(t, e, n) {
                    var r = n(83),
                        i = n(29);
                    t.exports = function(t, e, n) {
                        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
                        return String(i(t))
                    }
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(28),
                        o = n(8)("match");
                    t.exports = function(t) {
                        var e;
                        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
                    }
                }, function(t, e, n) {
                    var r = n(8)("match");
                    t.exports = function(t) {
                        var e = /./;
                        try {
                            "/./" [t](e)
                        } catch (n) {
                            try {
                                return e[r] = !1, !"/./" [t](e)
                            } catch (t) {}
                        }
                        return !0
                    }
                }, function(t, e, n) {
                    var r = n(48),
                        i = n(8)("iterator"),
                        o = Array.prototype;
                    t.exports = function(t) {
                        return void 0 !== t && (r.Array === t || o[i] === t)
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(12),
                        i = n(36);
                    t.exports = function(t, e, n) {
                        e in t ? r.f(t, e, i(0, n)) : t[e] = n
                    }
                }, function(t, e, n) {
                    var r = n(54),
                        i = n(8)("iterator"),
                        o = n(48);
                    t.exports = n(10).getIteratorMethod = function(t) {
                        if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(13),
                        i = n(40),
                        o = n(9);
                    t.exports = function(t) {
                        for (var e = r(this), n = o(e.length), s = arguments.length, u = i(s > 1 ? arguments[1] : void 0, n), a = s > 2 ? arguments[2] : void 0, c = void 0 === a ? n : i(a, n); c > u;) e[u++] = t;
                        return e
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(44),
                        i = n(113),
                        o = n(48),
                        s = n(19);
                    t.exports = n(81)(Array, "Array", (function(t, e) {
                        this._t = s(t), this._i = 0, this._k = e
                    }), (function() {
                        var t = this._t,
                            e = this._k,
                            n = this._i++;
                        return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
                    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
                }, function(t, e, n) {
                    "use strict";
                    var r, i, o = n(62),
                        s = RegExp.prototype.exec,
                        u = String.prototype.replace,
                        a = s,
                        c = (r = /a/, i = /b*/g, s.call(r, "a"), s.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
                        f = void 0 !== /()??/.exec("")[1];
                    (c || f) && (a = function(t) {
                        var e, n, r, i, a = this;
                        return f && (n = new RegExp("^" + a.source + "$(?!\\s)", o.call(a))), c && (e = a.lastIndex), r = s.call(a, t), c && r && (a.lastIndex = a.global ? r.index + r[0].length : e), f && r && r.length > 1 && u.call(r[0], n, (function() {
                            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
                        })), r
                    }), t.exports = a
                }, function(t, e, n) {
                    "use strict";
                    var r = n(80)(!0);
                    t.exports = function(t, e, n) {
                        return e + (n ? r(t, e).length : 1)
                    }
                }, function(t, e, n) {
                    var r, i, o, s = n(21),
                        u = n(102),
                        a = n(73),
                        c = n(69),
                        f = n(2),
                        l = f.process,
                        h = f.setImmediate,
                        d = f.clearImmediate,
                        p = f.MessageChannel,
                        v = f.Dispatch,
                        g = 0,
                        m = {},
                        y = function() {
                            var t = +this;
                            if (m.hasOwnProperty(t)) {
                                var e = m[t];
                                delete m[t], e()
                            }
                        },
                        _ = function(t) {
                            y.call(t.data)
                        };
                    h && d || (h = function(t) {
                        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
                        return m[++g] = function() {
                            u("function" == typeof t ? t : Function(t), e)
                        }, r(g), g
                    }, d = function(t) {
                        delete m[t]
                    }, "process" == n(28)(l) ? r = function(t) {
                        l.nextTick(s(y, t, 1))
                    } : v && v.now ? r = function(t) {
                        v.now(s(y, t, 1))
                    } : p ? (o = (i = new p).port2, i.port1.onmessage = _, r = s(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
                        f.postMessage(t + "", "*")
                    }, f.addEventListener("message", _, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
                        a.appendChild(c("script")).onreadystatechange = function() {
                            a.removeChild(this), y.call(t)
                        }
                    } : function(t) {
                        setTimeout(s(y, t, 1), 0)
                    }), t.exports = {
                        set: h,
                        clear: d
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        i = n(11),
                        o = n(38),
                        s = n(68),
                        u = n(18),
                        a = n(51),
                        c = n(3),
                        f = n(50),
                        l = n(23),
                        h = n(9),
                        d = n(121),
                        p = n(42).f,
                        v = n(12).f,
                        g = n(88),
                        m = n(46),
                        y = "prototype",
                        _ = "Wrong index!",
                        b = r.ArrayBuffer,
                        S = r.DataView,
                        w = r.Math,
                        x = r.RangeError,
                        E = r.Infinity,
                        I = b,
                        k = w.abs,
                        O = w.pow,
                        A = w.floor,
                        P = w.log,
                        j = w.LN2,
                        T = i ? "_b" : "buffer",
                        C = i ? "_l" : "byteLength",
                        N = i ? "_o" : "byteOffset";

                    function R(t, e, n) {
                        var r, i, o, s = new Array(n),
                            u = 8 * n - e - 1,
                            a = (1 << u) - 1,
                            c = a >> 1,
                            f = 23 === e ? O(2, -24) - O(2, -77) : 0,
                            l = 0,
                            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for ((t = k(t)) != t || t === E ? (i = t != t ? 1 : 0, r = a) : (r = A(P(t) / j), t * (o = O(2, -r)) < 1 && (r--, o *= 2), (t += r + c >= 1 ? f / o : f * O(2, 1 - c)) * o >= 2 && (r++, o /= 2), r + c >= a ? (i = 0, r = a) : r + c >= 1 ? (i = (t * o - 1) * O(2, e), r += c) : (i = t * O(2, c - 1) * O(2, e), r = 0)); e >= 8; s[l++] = 255 & i, i /= 256, e -= 8);
                        for (r = r << e | i, u += e; u > 0; s[l++] = 255 & r, r /= 256, u -= 8);
                        return s[--l] |= 128 * h, s
                    }

                    function U(t, e, n) {
                        var r, i = 8 * n - e - 1,
                            o = (1 << i) - 1,
                            s = o >> 1,
                            u = i - 7,
                            a = n - 1,
                            c = t[a--],
                            f = 127 & c;
                        for (c >>= 7; u > 0; f = 256 * f + t[a], a--, u -= 8);
                        for (r = f & (1 << -u) - 1, f >>= -u, u += e; u > 0; r = 256 * r + t[a], a--, u -= 8);
                        if (0 === f) f = 1 - s;
                        else {
                            if (f === o) return r ? NaN : c ? -E : E;
                            r += O(2, e), f -= s
                        }
                        return (c ? -1 : 1) * r * O(2, f - e)
                    }

                    function M(t) {
                        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
                    }

                    function D(t) {
                        return [255 & t]
                    }

                    function F(t) {
                        return [255 & t, t >> 8 & 255]
                    }

                    function L(t) {
                        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
                    }

                    function W(t) {
                        return R(t, 52, 8)
                    }

                    function H(t) {
                        return R(t, 23, 4)
                    }

                    function B(t, e, n) {
                        v(t[y], e, {
                            get: function() {
                                return this[n]
                            }
                        })
                    }

                    function V(t, e, n, r) {
                        var i = d(+n);
                        if (i + e > t[C]) throw x(_);
                        var o = t[T]._b,
                            s = i + t[N],
                            u = o.slice(s, s + e);
                        return r ? u : u.reverse()
                    }

                    function K(t, e, n, r, i, o) {
                        var s = d(+n);
                        if (s + e > t[C]) throw x(_);
                        for (var u = t[T]._b, a = s + t[N], c = r(+i), f = 0; f < e; f++) u[a + f] = c[o ? f : e - f - 1]
                    }
                    if (s.ABV) {
                        if (!c((function() {
                                b(1)
                            })) || !c((function() {
                                new b(-1)
                            })) || c((function() {
                                return new b, new b(1.5), new b(NaN), "ArrayBuffer" != b.name
                            }))) {
                            for (var G, q = (b = function(t) {
                                    return f(this, b), new I(d(t))
                                })[y] = I[y], X = p(I), z = 0; X.length > z;)(G = X[z++]) in b || u(b, G, I[G]);
                            o || (q.constructor = b)
                        }
                        var J = new S(new b(2)),
                            Q = S[y].setInt8;
                        J.setInt8(0, 2147483648), J.setInt8(1, 2147483649), !J.getInt8(0) && J.getInt8(1) || a(S[y], {
                            setInt8: function(t, e) {
                                Q.call(this, t, e << 24 >> 24)
                            },
                            setUint8: function(t, e) {
                                Q.call(this, t, e << 24 >> 24)
                            }
                        }, !0)
                    } else b = function(t) {
                        f(this, b, "ArrayBuffer");
                        var e = d(t);
                        this._b = g.call(new Array(e), 0), this[C] = e
                    }, S = function(t, e, n) {
                        f(this, S, "DataView"), f(t, b, "DataView");
                        var r = t[C],
                            i = l(e);
                        if (i < 0 || i > r) throw x("Wrong offset!");
                        if (i + (n = void 0 === n ? r - i : h(n)) > r) throw x("Wrong length!");
                        this[T] = t, this[N] = i, this[C] = n
                    }, i && (B(b, "byteLength", "_l"), B(S, "buffer", "_b"), B(S, "byteLength", "_l"), B(S, "byteOffset", "_o")), a(S[y], {
                        getInt8: function(t) {
                            return V(this, 1, t)[0] << 24 >> 24
                        },
                        getUint8: function(t) {
                            return V(this, 1, t)[0]
                        },
                        getInt16: function(t) {
                            var e = V(this, 2, t, arguments[1]);
                            return (e[1] << 8 | e[0]) << 16 >> 16
                        },
                        getUint16: function(t) {
                            var e = V(this, 2, t, arguments[1]);
                            return e[1] << 8 | e[0]
                        },
                        getInt32: function(t) {
                            return M(V(this, 4, t, arguments[1]))
                        },
                        getUint32: function(t) {
                            return M(V(this, 4, t, arguments[1])) >>> 0
                        },
                        getFloat32: function(t) {
                            return U(V(this, 4, t, arguments[1]), 23, 4)
                        },
                        getFloat64: function(t) {
                            return U(V(this, 8, t, arguments[1]), 52, 8)
                        },
                        setInt8: function(t, e) {
                            K(this, 1, t, D, e)
                        },
                        setUint8: function(t, e) {
                            K(this, 1, t, D, e)
                        },
                        setInt16: function(t, e) {
                            K(this, 2, t, F, e, arguments[2])
                        },
                        setUint16: function(t, e) {
                            K(this, 2, t, F, e, arguments[2])
                        },
                        setInt32: function(t, e) {
                            K(this, 4, t, L, e, arguments[2])
                        },
                        setUint32: function(t, e) {
                            K(this, 4, t, L, e, arguments[2])
                        },
                        setFloat32: function(t, e) {
                            K(this, 4, t, H, e, arguments[2])
                        },
                        setFloat64: function(t, e) {
                            K(this, 8, t, W, e, arguments[2])
                        }
                    });
                    m(b, "ArrayBuffer"), m(S, "DataView"), u(S[y], s.VIEW, !0), e.ArrayBuffer = b, e.DataView = S
                }, function(t, e, n) {
                    t.exports = !n(11) && !n(3)((function() {
                        return 7 != Object.defineProperty(n(69)("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                }, function(t, e, n) {
                    var r = n(2),
                        i = n(10),
                        o = n(38),
                        s = n(70),
                        u = n(12).f;
                    t.exports = function(t) {
                        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
                        "_" == t.charAt(0) || t in e || u(e, t, {
                            value: s.f(t)
                        })
                    }
                }, function(t, e, n) {
                    var r = n(17),
                        i = n(19),
                        o = n(58)(!1),
                        s = n(71)("IE_PROTO");
                    t.exports = function(t, e) {
                        var n, u = i(t),
                            a = 0,
                            c = [];
                        for (n in u) n != s && r(u, n) && c.push(n);
                        for (; e.length > a;) r(u, n = e[a++]) && (~o(c, n) || c.push(n));
                        return c
                    }
                }, function(t, e, n) {
                    var r = n(12),
                        i = n(4),
                        o = n(39);
                    t.exports = n(11) ? Object.defineProperties : function(t, e) {
                        i(t);
                        for (var n, s = o(e), u = s.length, a = 0; u > a;) r.f(t, n = s[a++], e[n]);
                        return t
                    }
                }, function(t, e, n) {
                    var r = n(19),
                        i = n(42).f,
                        o = {}.toString,
                        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                    t.exports.f = function(t) {
                        return s && "[object Window]" == o.call(t) ? function(t) {
                            try {
                                return i(t)
                            } catch (t) {
                                return s.slice()
                            }
                        }(t) : i(r(t))
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(11),
                        i = n(39),
                        o = n(59),
                        s = n(53),
                        u = n(13),
                        a = n(52),
                        c = Object.assign;
                    t.exports = !c || n(3)((function() {
                        var t = {},
                            e = {},
                            n = Symbol(),
                            r = "abcdefghijklmnopqrst";
                        return t[n] = 7, r.split("").forEach((function(t) {
                            e[t] = t
                        })), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
                    })) ? function(t, e) {
                        for (var n = u(t), c = arguments.length, f = 1, l = o.f, h = s.f; c > f;)
                            for (var d, p = a(arguments[f++]), v = l ? i(p).concat(l(p)) : i(p), g = v.length, m = 0; g > m;) d = v[m++], r && !h.call(p, d) || (n[d] = p[d]);
                        return n
                    } : c
                }, function(t, e) {
                    t.exports = Object.is || function(t, e) {
                        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(22),
                        i = n(5),
                        o = n(102),
                        s = [].slice,
                        u = {},
                        a = function(t, e, n) {
                            if (!(e in u)) {
                                for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                                u[e] = Function("F,a", "return new F(" + r.join(",") + ")")
                            }
                            return u[e](t, n)
                        };
                    t.exports = Function.bind || function(t) {
                        var e = r(this),
                            n = s.call(arguments, 1),
                            u = function() {
                                var r = n.concat(s.call(arguments));
                                return this instanceof u ? a(e, r.length, r) : o(e, r, t)
                            };
                        return i(e.prototype) && (u.prototype = e.prototype), u
                    }
                }, function(t, e) {
                    t.exports = function(t, e, n) {
                        var r = void 0 === n;
                        switch (e.length) {
                            case 0:
                                return r ? t() : t.call(n);
                            case 1:
                                return r ? t(e[0]) : t.call(n, e[0]);
                            case 2:
                                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                            case 3:
                                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                            case 4:
                                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
                        }
                        return t.apply(n, e)
                    }
                }, function(t, e, n) {
                    var r = n(2).parseInt,
                        i = n(47).trim,
                        o = n(75),
                        s = /^[-+]?0[xX]/;
                    t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(t, e) {
                        var n = i(String(t), 3);
                        return r(n, e >>> 0 || (s.test(n) ? 16 : 10))
                    } : r
                }, function(t, e, n) {
                    var r = n(2).parseFloat,
                        i = n(47).trim;
                    t.exports = 1 / r(n(75) + "-0") != -1 / 0 ? function(t) {
                        var e = i(String(t), 3),
                            n = r(e);
                        return 0 === n && "-" == e.charAt(0) ? -0 : n
                    } : r
                }, function(t, e, n) {
                    var r = n(28);
                    t.exports = function(t, e) {
                        if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
                        return +t
                    }
                }, function(t, e, n) {
                    var r = n(5),
                        i = Math.floor;
                    t.exports = function(t) {
                        return !r(t) && isFinite(t) && i(t) === t
                    }
                }, function(t, e) {
                    t.exports = Math.log1p || function(t) {
                        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(41),
                        i = n(36),
                        o = n(46),
                        s = {};
                    n(18)(s, n(8)("iterator"), (function() {
                        return this
                    })), t.exports = function(t, e, n) {
                        t.prototype = r(s, {
                            next: i(1, n)
                        }), o(t, e + " Iterator")
                    }
                }, function(t, e, n) {
                    var r = n(4);
                    t.exports = function(t, e, n, i) {
                        try {
                            return i ? e(r(n)[0], n[1]) : e(n)
                        } catch (e) {
                            var o = t.return;
                            throw void 0 !== o && r(o.call(t)), e
                        }
                    }
                }, function(t, e, n) {
                    var r = n(224);
                    t.exports = function(t, e) {
                        return new(r(t))(e)
                    }
                }, function(t, e, n) {
                    var r = n(22),
                        i = n(13),
                        o = n(52),
                        s = n(9);
                    t.exports = function(t, e, n, u, a) {
                        r(e);
                        var c = i(t),
                            f = o(c),
                            l = s(c.length),
                            h = a ? l - 1 : 0,
                            d = a ? -1 : 1;
                        if (n < 2)
                            for (;;) {
                                if (h in f) {
                                    u = f[h], h += d;
                                    break
                                }
                                if (h += d, a ? h < 0 : l <= h) throw TypeError("Reduce of empty array with no initial value")
                            }
                        for (; a ? h >= 0 : l > h; h += d) h in f && (u = e(u, f[h], h, c));
                        return u
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(13),
                        i = n(40),
                        o = n(9);
                    t.exports = [].copyWithin || function(t, e) {
                        var n = r(this),
                            s = o(n.length),
                            u = i(t, s),
                            a = i(e, s),
                            c = arguments.length > 2 ? arguments[2] : void 0,
                            f = Math.min((void 0 === c ? s : i(c, s)) - a, s - u),
                            l = 1;
                        for (a < u && u < a + f && (l = -1, a += f - 1, u += f - 1); f-- > 0;) a in n ? n[u] = n[a] : delete n[u], u += l, a += l;
                        return n
                    }
                }, function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            value: e,
                            done: !!t
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(90);
                    n(0)({
                        target: "RegExp",
                        proto: !0,
                        forced: r !== /./.exec
                    }, {
                        exec: r
                    })
                }, function(t, e, n) {
                    n(11) && "g" != /./g.flags && n(12).f(RegExp.prototype, "flags", {
                        configurable: !0,
                        get: n(62)
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r, i, o, s, u = n(38),
                        a = n(2),
                        c = n(21),
                        f = n(54),
                        l = n(0),
                        h = n(5),
                        d = n(22),
                        p = n(50),
                        v = n(65),
                        g = n(55),
                        m = n(92).set,
                        y = n(244)(),
                        _ = n(117),
                        b = n(245),
                        S = n(66),
                        w = n(118),
                        x = a.TypeError,
                        E = a.process,
                        I = E && E.versions,
                        k = I && I.v8 || "",
                        O = a.Promise,
                        A = "process" == f(E),
                        P = function() {},
                        j = i = _.f,
                        T = !! function() {
                            try {
                                var t = O.resolve(1),
                                    e = (t.constructor = {})[n(8)("species")] = function(t) {
                                        t(P, P)
                                    };
                                return (A || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof e && 0 !== k.indexOf("6.6") && -1 === S.indexOf("Chrome/66")
                            } catch (t) {}
                        }(),
                        C = function(t) {
                            var e;
                            return !(!h(t) || "function" != typeof(e = t.then)) && e
                        },
                        N = function(t, e) {
                            if (!t._n) {
                                t._n = !0;
                                var n = t._c;
                                y((function() {
                                    for (var r = t._v, i = 1 == t._s, o = 0, s = function(e) {
                                            var n, o, s, u = i ? e.ok : e.fail,
                                                a = e.resolve,
                                                c = e.reject,
                                                f = e.domain;
                                            try {
                                                u ? (i || (2 == t._h && M(t), t._h = 1), !0 === u ? n = r : (f && f.enter(), n = u(r), f && (f.exit(), s = !0)), n === e.promise ? c(x("Promise-chain cycle")) : (o = C(n)) ? o.call(n, a, c) : a(n)) : c(r)
                                            } catch (t) {
                                                f && !s && f.exit(), c(t)
                                            }
                                        }; n.length > o;) s(n[o++]);
                                    t._c = [], t._n = !1, e && !t._h && R(t)
                                }))
                            }
                        },
                        R = function(t) {
                            m.call(a, (function() {
                                var e, n, r, i = t._v,
                                    o = U(t);
                                if (o && (e = b((function() {
                                        A ? E.emit("unhandledRejection", i, t) : (n = a.onunhandledrejection) ? n({
                                            promise: t,
                                            reason: i
                                        }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", i)
                                    })), t._h = A || U(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
                            }))
                        },
                        U = function(t) {
                            return 1 !== t._h && 0 === (t._a || t._c).length
                        },
                        M = function(t) {
                            m.call(a, (function() {
                                var e;
                                A ? E.emit("rejectionHandled", t) : (e = a.onrejectionhandled) && e({
                                    promise: t,
                                    reason: t._v
                                })
                            }))
                        },
                        D = function(t) {
                            var e = this;
                            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), N(e, !0))
                        },
                        F = function(t) {
                            var e, n = this;
                            if (!n._d) {
                                n._d = !0, n = n._w || n;
                                try {
                                    if (n === t) throw x("Promise can't be resolved itself");
                                    (e = C(t)) ? y((function() {
                                        var r = {
                                            _w: n,
                                            _d: !1
                                        };
                                        try {
                                            e.call(t, c(F, r, 1), c(D, r, 1))
                                        } catch (t) {
                                            D.call(r, t)
                                        }
                                    })): (n._v = t, n._s = 1, N(n, !1))
                                } catch (t) {
                                    D.call({
                                        _w: n,
                                        _d: !1
                                    }, t)
                                }
                            }
                        };
                    T || (O = function(t) {
                        p(this, O, "Promise", "_h"), d(t), r.call(this);
                        try {
                            t(c(F, this, 1), c(D, this, 1))
                        } catch (t) {
                            D.call(this, t)
                        }
                    }, (r = function(t) {
                        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
                    }).prototype = n(51)(O.prototype, {
                        then: function(t, e) {
                            var n = j(g(this, O));
                            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = A ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && N(this, !1), n.promise
                        },
                        catch: function(t) {
                            return this.then(void 0, t)
                        }
                    }), o = function() {
                        var t = new r;
                        this.promise = t, this.resolve = c(F, t, 1), this.reject = c(D, t, 1)
                    }, _.f = j = function(t) {
                        return t === O || t === s ? new o(t) : i(t)
                    }), l(l.G + l.W + l.F * !T, {
                        Promise: O
                    }), n(46)(O, "Promise"), n(49)("Promise"), s = n(10).Promise, l(l.S + l.F * !T, "Promise", {
                        reject: function(t) {
                            var e = j(this);
                            return (0, e.reject)(t), e.promise
                        }
                    }), l(l.S + l.F * (u || !T), "Promise", {
                        resolve: function(t) {
                            return w(u && this === s ? O : this, t)
                        }
                    }), l(l.S + l.F * !(T && n(61)((function(t) {
                        O.all(t).catch(P)
                    }))), "Promise", {
                        all: function(t) {
                            var e = this,
                                n = j(e),
                                r = n.resolve,
                                i = n.reject,
                                o = b((function() {
                                    var n = [],
                                        o = 0,
                                        s = 1;
                                    v(t, !1, (function(t) {
                                        var u = o++,
                                            a = !1;
                                        n.push(void 0), s++, e.resolve(t).then((function(t) {
                                            a || (a = !0, n[u] = t, --s || r(n))
                                        }), i)
                                    })), --s || r(n)
                                }));
                            return o.e && i(o.v), n.promise
                        },
                        race: function(t) {
                            var e = this,
                                n = j(e),
                                r = n.reject,
                                i = b((function() {
                                    v(t, !1, (function(t) {
                                        e.resolve(t).then(n.resolve, r)
                                    }))
                                }));
                            return i.e && r(i.v), n.promise
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(22);

                    function i(t) {
                        var e, n;
                        this.promise = new t((function(t, r) {
                            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                            e = t, n = r
                        })), this.resolve = r(e), this.reject = r(n)
                    }
                    t.exports.f = function(t) {
                        return new i(t)
                    }
                }, function(t, e, n) {
                    var r = n(4),
                        i = n(5),
                        o = n(117);
                    t.exports = function(t, e) {
                        if (r(t), i(e) && e.constructor === t) return e;
                        var n = o.f(t);
                        return (0, n.resolve)(e), n.promise
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(12).f,
                        i = n(41),
                        o = n(51),
                        s = n(21),
                        u = n(50),
                        a = n(65),
                        c = n(81),
                        f = n(113),
                        l = n(49),
                        h = n(11),
                        d = n(33).fastKey,
                        p = n(45),
                        v = h ? "_s" : "size",
                        g = function(t, e) {
                            var n, r = d(e);
                            if ("F" !== r) return t._i[r];
                            for (n = t._f; n; n = n.n)
                                if (n.k == e) return n
                        };
                    t.exports = {
                        getConstructor: function(t, e, n, c) {
                            var f = t((function(t, r) {
                                u(t, f, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, null != r && a(r, n, t[c], t)
                            }));
                            return o(f.prototype, {
                                clear: function() {
                                    for (var t = p(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                                    t._f = t._l = void 0, t[v] = 0
                                },
                                delete: function(t) {
                                    var n = p(this, e),
                                        r = g(n, t);
                                    if (r) {
                                        var i = r.n,
                                            o = r.p;
                                        delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[v]--
                                    }
                                    return !!r
                                },
                                forEach: function(t) {
                                    p(this, e);
                                    for (var n, r = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                                },
                                has: function(t) {
                                    return !!g(p(this, e), t)
                                }
                            }), h && r(f.prototype, "size", {
                                get: function() {
                                    return p(this, e)[v]
                                }
                            }), f
                        },
                        def: function(t, e, n) {
                            var r, i, o = g(t, e);
                            return o ? o.v = n : (t._l = o = {
                                i: i = d(e, !0),
                                k: e,
                                v: n,
                                p: r = t._l,
                                n: void 0,
                                r: !1
                            }, t._f || (t._f = o), r && (r.n = o), t[v]++, "F" !== i && (t._i[i] = o)), t
                        },
                        getEntry: g,
                        setStrong: function(t, e, n) {
                            c(t, e, (function(t, n) {
                                this._t = p(t, e), this._k = n, this._l = void 0
                            }), (function() {
                                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                                return this._t && (this._l = e = e ? e.n : this._t._f) ? f(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, f(1))
                            }), n ? "entries" : "values", !n, !0), l(e)
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(51),
                        i = n(33).getWeak,
                        o = n(4),
                        s = n(5),
                        u = n(50),
                        a = n(65),
                        c = n(26),
                        f = n(17),
                        l = n(45),
                        h = c(5),
                        d = c(6),
                        p = 0,
                        v = function(t) {
                            return t._l || (t._l = new g)
                        },
                        g = function() {
                            this.a = []
                        },
                        m = function(t, e) {
                            return h(t.a, (function(t) {
                                return t[0] === e
                            }))
                        };
                    g.prototype = {
                        get: function(t) {
                            var e = m(this, t);
                            if (e) return e[1]
                        },
                        has: function(t) {
                            return !!m(this, t)
                        },
                        set: function(t, e) {
                            var n = m(this, t);
                            n ? n[1] = e : this.a.push([t, e])
                        },
                        delete: function(t) {
                            var e = d(this.a, (function(e) {
                                return e[0] === t
                            }));
                            return ~e && this.a.splice(e, 1), !!~e
                        }
                    }, t.exports = {
                        getConstructor: function(t, e, n, o) {
                            var c = t((function(t, r) {
                                u(t, c, e, "_i"), t._t = e, t._i = p++, t._l = void 0, null != r && a(r, n, t[o], t)
                            }));
                            return r(c.prototype, {
                                delete: function(t) {
                                    if (!s(t)) return !1;
                                    var n = i(t);
                                    return !0 === n ? v(l(this, e)).delete(t) : n && f(n, this._i) && delete n[this._i]
                                },
                                has: function(t) {
                                    if (!s(t)) return !1;
                                    var n = i(t);
                                    return !0 === n ? v(l(this, e)).has(t) : n && f(n, this._i)
                                }
                            }), c
                        },
                        def: function(t, e, n) {
                            var r = i(o(e), !0);
                            return !0 === r ? v(t).set(e, n) : r[t._i] = n, t
                        },
                        ufstore: v
                    }
                }, function(t, e, n) {
                    var r = n(23),
                        i = n(9);
                    t.exports = function(t) {
                        if (void 0 === t) return 0;
                        var e = r(t),
                            n = i(e);
                        if (e !== n) throw RangeError("Wrong length!");
                        return n
                    }
                }, function(t, e, n) {
                    var r = n(42),
                        i = n(59),
                        o = n(4),
                        s = n(2).Reflect;
                    t.exports = s && s.ownKeys || function(t) {
                        var e = r.f(o(t)),
                            n = i.f;
                        return n ? e.concat(n(t)) : e
                    }
                }, function(t, e, n) {
                    var r = n(9),
                        i = n(77),
                        o = n(29);
                    t.exports = function(t, e, n, s) {
                        var u = String(o(t)),
                            a = u.length,
                            c = void 0 === n ? " " : String(n),
                            f = r(e);
                        if (f <= a || "" == c) return u;
                        var l = f - a,
                            h = i.call(c, Math.ceil(l / c.length));
                        return h.length > l && (h = h.slice(0, l)), s ? h + u : u + h
                    }
                }, function(t, e, n) {
                    var r = n(11),
                        i = n(39),
                        o = n(19),
                        s = n(53).f;
                    t.exports = function(t) {
                        return function(e) {
                            for (var n, u = o(e), a = i(u), c = a.length, f = 0, l = []; c > f;) n = a[f++], r && !s.call(u, n) || l.push(t ? [n, u[n]] : u[n]);
                            return l
                        }
                    }
                }, function(t, e, n) {
                    var r = function(t) {
                        "use strict";
                        var e, n = Object.prototype,
                            r = n.hasOwnProperty,
                            i = "function" == typeof Symbol ? Symbol : {},
                            o = i.iterator || "@@iterator",
                            s = i.asyncIterator || "@@asyncIterator",
                            u = i.toStringTag || "@@toStringTag";

                        function a(t, e, n, r) {
                            var i = e && e.prototype instanceof v ? e : v,
                                o = Object.create(i.prototype),
                                s = new O(r || []);
                            return o._invoke = function(t, e, n) {
                                var r = f;
                                return function(i, o) {
                                    if (r === h) throw new Error("Generator is already running");
                                    if (r === d) {
                                        if ("throw" === i) throw o;
                                        return P()
                                    }
                                    for (n.method = i, n.arg = o;;) {
                                        var s = n.delegate;
                                        if (s) {
                                            var u = E(s, n);
                                            if (u) {
                                                if (u === p) continue;
                                                return u
                                            }
                                        }
                                        if ("next" === n.method) n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if (r === f) throw r = d, n.arg;
                                            n.dispatchException(n.arg)
                                        } else "return" === n.method && n.abrupt("return", n.arg);
                                        r = h;
                                        var a = c(t, e, n);
                                        if ("normal" === a.type) {
                                            if (r = n.done ? d : l, a.arg === p) continue;
                                            return {
                                                value: a.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === a.type && (r = d, n.method = "throw", n.arg = a.arg)
                                    }
                                }
                            }(t, n, s), o
                        }

                        function c(t, e, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: t.call(e, n)
                                }
                            } catch (t) {
                                return {
                                    type: "throw",
                                    arg: t
                                }
                            }
                        }
                        t.wrap = a;
                        var f = "suspendedStart",
                            l = "suspendedYield",
                            h = "executing",
                            d = "completed",
                            p = {};

                        function v() {}

                        function g() {}

                        function m() {}
                        var y = {};
                        y[o] = function() {
                            return this
                        };
                        var _ = Object.getPrototypeOf,
                            b = _ && _(_(A([])));
                        b && b !== n && r.call(b, o) && (y = b);
                        var S = m.prototype = v.prototype = Object.create(y);

                        function w(t) {
                            ["next", "throw", "return"].forEach((function(e) {
                                t[e] = function(t) {
                                    return this._invoke(e, t)
                                }
                            }))
                        }

                        function x(t) {
                            var e;
                            this._invoke = function(n, i) {
                                function o() {
                                    return new Promise((function(e, o) {
                                        ! function e(n, i, o, s) {
                                            var u = c(t[n], t, i);
                                            if ("throw" !== u.type) {
                                                var a = u.arg,
                                                    f = a.value;
                                                return f && "object" == typeof f && r.call(f, "__await") ? Promise.resolve(f.__await).then((function(t) {
                                                    e("next", t, o, s)
                                                }), (function(t) {
                                                    e("throw", t, o, s)
                                                })) : Promise.resolve(f).then((function(t) {
                                                    a.value = t, o(a)
                                                }), (function(t) {
                                                    return e("throw", t, o, s)
                                                }))
                                            }
                                            s(u.arg)
                                        }(n, i, e, o)
                                    }))
                                }
                                return e = e ? e.then(o, o) : o()
                            }
                        }

                        function E(t, n) {
                            var r = t.iterator[n.method];
                            if (r === e) {
                                if (n.delegate = null, "throw" === n.method) {
                                    if (t.iterator.return && (n.method = "return", n.arg = e, E(t, n), "throw" === n.method)) return p;
                                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var i = c(r, t.iterator, n.arg);
                            if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, p;
                            var o = i.arg;
                            return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, p) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
                        }

                        function I(t) {
                            var e = {
                                tryLoc: t[0]
                            };
                            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                        }

                        function k(t) {
                            var e = t.completion || {};
                            e.type = "normal", delete e.arg, t.completion = e
                        }

                        function O(t) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], t.forEach(I, this), this.reset(!0)
                        }

                        function A(t) {
                            if (t) {
                                var n = t[o];
                                if (n) return n.call(t);
                                if ("function" == typeof t.next) return t;
                                if (!isNaN(t.length)) {
                                    var i = -1,
                                        s = function n() {
                                            for (; ++i < t.length;)
                                                if (r.call(t, i)) return n.value = t[i], n.done = !1, n;
                                            return n.value = e, n.done = !0, n
                                        };
                                    return s.next = s
                                }
                            }
                            return {
                                next: P
                            }
                        }

                        function P() {
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        return g.prototype = S.constructor = m, m.constructor = g, m[u] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
                        }, t.mark = function(t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(S), t
                        }, t.awrap = function(t) {
                            return {
                                __await: t
                            }
                        }, w(x.prototype), x.prototype[s] = function() {
                            return this
                        }, t.AsyncIterator = x, t.async = function(e, n, r, i) {
                            var o = new x(a(e, n, r, i));
                            return t.isGeneratorFunction(n) ? o : o.next().then((function(t) {
                                return t.done ? t.value : o.next()
                            }))
                        }, w(S), S[u] = "Generator", S[o] = function() {
                            return this
                        }, S.toString = function() {
                            return "[object Generator]"
                        }, t.keys = function(t) {
                            var e = [];
                            for (var n in t) e.push(n);
                            return e.reverse(),
                                function n() {
                                    for (; e.length;) {
                                        var r = e.pop();
                                        if (r in t) return n.value = r, n.done = !1, n
                                    }
                                    return n.done = !0, n
                                }
                        }, t.values = A, O.prototype = {
                            constructor: O,
                            reset: function(t) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !t)
                                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                            },
                            stop: function() {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval
                            },
                            dispatchException: function(t) {
                                if (this.done) throw t;
                                var n = this;

                                function i(r, i) {
                                    return u.type = "throw", u.arg = t, n.next = r, i && (n.method = "next", n.arg = e), !!i
                                }
                                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                    var s = this.tryEntries[o],
                                        u = s.completion;
                                    if ("root" === s.tryLoc) return i("end");
                                    if (s.tryLoc <= this.prev) {
                                        var a = r.call(s, "catchLoc"),
                                            c = r.call(s, "finallyLoc");
                                        if (a && c) {
                                            if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                            if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                        } else if (a) {
                                            if (this.prev < s.catchLoc) return i(s.catchLoc, !0)
                                        } else {
                                            if (!c) throw new Error("try statement without catch or finally");
                                            if (this.prev < s.finallyLoc) return i(s.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(t, e) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var i = this.tryEntries[n];
                                    if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                        var o = i;
                                        break
                                    }
                                }
                                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                var s = o ? o.completion : {};
                                return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(s)
                            },
                            complete: function(t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                            },
                            finish: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), p
                                }
                            },
                            catch: function(t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var r = n.completion;
                                        if ("throw" === r.type) {
                                            var i = r.arg;
                                            k(n)
                                        }
                                        return i
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(t, n, r) {
                                return this.delegate = {
                                    iterator: A(t),
                                    resultName: n,
                                    nextLoc: r
                                }, "next" === this.method && (this.arg = e), p
                            }
                        }, t
                    }(t.exports);
                    try {
                        regeneratorRuntime = r
                    } catch (t) {
                        Function("r", "regeneratorRuntime = r")(r)
                    }
                }, function(module, exports, __webpack_require__) {
                    (function(process, global) {
                        var __WEBPACK_AMD_DEFINE_RESULT__;
                        ! function() {
                            "use strict";
                            var root = "object" == typeof window ? window : {},
                                NODE_JS = !root.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                            NODE_JS && (root = global);
                            var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports,
                                AMD = __webpack_require__(310),
                                HEX_CHARS = "0123456789abcdef".split(""),
                                EXTRA = [-2147483648, 8388608, 32768, 128],
                                SHIFT = [24, 16, 8, 0],
                                OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                                blocks = [],
                                createOutputMethod = function(t) {
                                    return function(e) {
                                        return new Sha1(!0).update(e)[t]()
                                    }
                                },
                                createMethod = function() {
                                    var t = createOutputMethod("hex");
                                    NODE_JS && (t = nodeWrap(t)), t.create = function() {
                                        return new Sha1
                                    }, t.update = function(e) {
                                        return t.create().update(e)
                                    };
                                    for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                                        var n = OUTPUT_TYPES[e];
                                        t[n] = createOutputMethod(n)
                                    }
                                    return t
                                },
                                nodeWrap = function(method) {
                                    var crypto = eval("require('crypto')"),
                                        Buffer = eval("require('buffer').Buffer"),
                                        nodeMethod = function(t) {
                                            if ("string" == typeof t) return crypto.createHash("sha1").update(t, "utf8").digest("hex");
                                            if (t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                            else if (void 0 === t.length) return method(t);
                                            return crypto.createHash("sha1").update(new Buffer(t)).digest("hex")
                                        };
                                    return nodeMethod
                                };

                            function Sha1(t) {
                                t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                            }
                            Sha1.prototype.update = function(t) {
                                if (!this.finalized) {
                                    var e = "string" != typeof t;
                                    e && t.constructor === root.ArrayBuffer && (t = new Uint8Array(t));
                                    for (var n, r, i = 0, o = t.length || 0, s = this.blocks; i < o;) {
                                        if (this.hashed && (this.hashed = !1, s[0] = this.block, s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), e)
                                            for (r = this.start; i < o && r < 64; ++i) s[r >> 2] |= t[i] << SHIFT[3 & r++];
                                        else
                                            for (r = this.start; i < o && r < 64; ++i)(n = t.charCodeAt(i)) < 128 ? s[r >> 2] |= n << SHIFT[3 & r++] : n < 2048 ? (s[r >> 2] |= (192 | n >> 6) << SHIFT[3 & r++], s[r >> 2] |= (128 | 63 & n) << SHIFT[3 & r++]) : n < 55296 || n >= 57344 ? (s[r >> 2] |= (224 | n >> 12) << SHIFT[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & r++], s[r >> 2] |= (128 | 63 & n) << SHIFT[3 & r++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++i)), s[r >> 2] |= (240 | n >> 18) << SHIFT[3 & r++], s[r >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & r++], s[r >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & r++], s[r >> 2] |= (128 | 63 & n) << SHIFT[3 & r++]);
                                        this.lastByteIndex = r, this.bytes += r - this.start, r >= 64 ? (this.block = s[16], this.start = r - 64, this.hash(), this.hashed = !0) : this.start = r
                                    }
                                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                                }
                            }, Sha1.prototype.finalize = function() {
                                if (!this.finalized) {
                                    this.finalized = !0;
                                    var t = this.blocks,
                                        e = this.lastByteIndex;
                                    t[16] = this.block, t[e >> 2] |= EXTRA[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
                                }
                            }, Sha1.prototype.hash = function() {
                                var t, e, n = this.h0,
                                    r = this.h1,
                                    i = this.h2,
                                    o = this.h3,
                                    s = this.h4,
                                    u = this.blocks;
                                for (t = 16; t < 80; ++t) e = u[t - 3] ^ u[t - 8] ^ u[t - 14] ^ u[t - 16], u[t] = e << 1 | e >>> 31;
                                for (t = 0; t < 20; t += 5) n = (e = (r = (e = (i = (e = (o = (e = (s = (e = n << 5 | n >>> 27) + (r & i | ~r & o) + s + 1518500249 + u[t] << 0) << 5 | s >>> 27) + (n & (r = r << 30 | r >>> 2) | ~n & i) + o + 1518500249 + u[t + 1] << 0) << 5 | o >>> 27) + (s & (n = n << 30 | n >>> 2) | ~s & r) + i + 1518500249 + u[t + 2] << 0) << 5 | i >>> 27) + (o & (s = s << 30 | s >>> 2) | ~o & n) + r + 1518500249 + u[t + 3] << 0) << 5 | r >>> 27) + (i & (o = o << 30 | o >>> 2) | ~i & s) + n + 1518500249 + u[t + 4] << 0, i = i << 30 | i >>> 2;
                                for (; t < 40; t += 5) n = (e = (r = (e = (i = (e = (o = (e = (s = (e = n << 5 | n >>> 27) + (r ^ i ^ o) + s + 1859775393 + u[t] << 0) << 5 | s >>> 27) + (n ^ (r = r << 30 | r >>> 2) ^ i) + o + 1859775393 + u[t + 1] << 0) << 5 | o >>> 27) + (s ^ (n = n << 30 | n >>> 2) ^ r) + i + 1859775393 + u[t + 2] << 0) << 5 | i >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ n) + r + 1859775393 + u[t + 3] << 0) << 5 | r >>> 27) + (i ^ (o = o << 30 | o >>> 2) ^ s) + n + 1859775393 + u[t + 4] << 0, i = i << 30 | i >>> 2;
                                for (; t < 60; t += 5) n = (e = (r = (e = (i = (e = (o = (e = (s = (e = n << 5 | n >>> 27) + (r & i | r & o | i & o) + s - 1894007588 + u[t] << 0) << 5 | s >>> 27) + (n & (r = r << 30 | r >>> 2) | n & i | r & i) + o - 1894007588 + u[t + 1] << 0) << 5 | o >>> 27) + (s & (n = n << 30 | n >>> 2) | s & r | n & r) + i - 1894007588 + u[t + 2] << 0) << 5 | i >>> 27) + (o & (s = s << 30 | s >>> 2) | o & n | s & n) + r - 1894007588 + u[t + 3] << 0) << 5 | r >>> 27) + (i & (o = o << 30 | o >>> 2) | i & s | o & s) + n - 1894007588 + u[t + 4] << 0, i = i << 30 | i >>> 2;
                                for (; t < 80; t += 5) n = (e = (r = (e = (i = (e = (o = (e = (s = (e = n << 5 | n >>> 27) + (r ^ i ^ o) + s - 899497514 + u[t] << 0) << 5 | s >>> 27) + (n ^ (r = r << 30 | r >>> 2) ^ i) + o - 899497514 + u[t + 1] << 0) << 5 | o >>> 27) + (s ^ (n = n << 30 | n >>> 2) ^ r) + i - 899497514 + u[t + 2] << 0) << 5 | i >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ n) + r - 899497514 + u[t + 3] << 0) << 5 | r >>> 27) + (i ^ (o = o << 30 | o >>> 2) ^ s) + n - 899497514 + u[t + 4] << 0, i = i << 30 | i >>> 2;
                                this.h0 = this.h0 + n << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + i << 0, this.h3 = this.h3 + o << 0, this.h4 = this.h4 + s << 0
                            }, Sha1.prototype.hex = function() {
                                this.finalize();
                                var t = this.h0,
                                    e = this.h1,
                                    n = this.h2,
                                    r = this.h3,
                                    i = this.h4;
                                return HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i]
                            }, Sha1.prototype.toString = Sha1.prototype.hex, Sha1.prototype.digest = function() {
                                this.finalize();
                                var t = this.h0,
                                    e = this.h1,
                                    n = this.h2,
                                    r = this.h3,
                                    i = this.h4;
                                return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i]
                            }, Sha1.prototype.array = Sha1.prototype.digest, Sha1.prototype.arrayBuffer = function() {
                                this.finalize();
                                var t = new ArrayBuffer(20),
                                    e = new DataView(t);
                                return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), t
                            };
                            var exports = createMethod();
                            COMMON_JS ? module.exports = exports : (root.sha1 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                return exports
                            }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                        }()
                    }).call(this, __webpack_require__(308), __webpack_require__(309))
                }, function(t, e, n) {
                    var r = new(n(311))(Math.random() * Number.MAX_SAFE_INTEGER);
                    t.exports = function(t) {
                        for (var e = t.length; e--;) t[e] = Math.floor(256 * r.random());
                        return t
                    }
                }, function(t, e, n) {
                    var r = n(312);

                    function i(e, n, o) {
                        return "undefined" != typeof Reflect && Reflect.get ? t.exports = i = Reflect.get : t.exports = i = function(t, e, n) {
                            var i = r(t, e);
                            if (i) {
                                var o = Object.getOwnPropertyDescriptor(i, e);
                                return o.get ? o.get.call(n) : o.value
                            }
                        }, i(e, n, o || e)
                    }
                    t.exports = i
                }, function(t, e, n) {
                    n(130), t.exports = n(313)
                }, function(t, e, n) {
                    n(131)
                }, function(t, e, n) {
                    "use strict";
                    n(132), n(275), n(277), n(280), n(282), n(284), n(286), n(288), n(290), n(292), n(294), n(296), n(298), n(125)
                }, function(t, e, n) {
                    n(133), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(214), n(215), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(89), n(238), n(114), n(239), n(115), n(240), n(241), n(242), n(243), n(116), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), t.exports = n(10)
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        i = n(17),
                        o = n(11),
                        s = n(0),
                        u = n(15),
                        a = n(33).KEY,
                        c = n(3),
                        f = n(57),
                        l = n(46),
                        h = n(37),
                        d = n(8),
                        p = n(70),
                        v = n(95),
                        g = n(135),
                        m = n(60),
                        y = n(4),
                        _ = n(5),
                        b = n(13),
                        S = n(19),
                        w = n(32),
                        x = n(36),
                        E = n(41),
                        I = n(98),
                        k = n(24),
                        O = n(59),
                        A = n(12),
                        P = n(39),
                        j = k.f,
                        T = A.f,
                        C = I.f,
                        N = r.Symbol,
                        R = r.JSON,
                        U = R && R.stringify,
                        M = d("_hidden"),
                        D = d("toPrimitive"),
                        F = {}.propertyIsEnumerable,
                        L = f("symbol-registry"),
                        W = f("symbols"),
                        H = f("op-symbols"),
                        B = Object.prototype,
                        V = "function" == typeof N && !!O.f,
                        K = r.QObject,
                        G = !K || !K.prototype || !K.prototype.findChild,
                        q = o && c((function() {
                            return 7 != E(T({}, "a", {
                                get: function() {
                                    return T(this, "a", {
                                        value: 7
                                    }).a
                                }
                            })).a
                        })) ? function(t, e, n) {
                            var r = j(B, e);
                            r && delete B[e], T(t, e, n), r && t !== B && T(B, e, r)
                        } : T,
                        X = function(t) {
                            var e = W[t] = E(N.prototype);
                            return e._k = t, e
                        },
                        z = V && "symbol" == typeof N.iterator ? function(t) {
                            return "symbol" == typeof t
                        } : function(t) {
                            return t instanceof N
                        },
                        J = function(t, e, n) {
                            return t === B && J(H, e, n), y(t), e = w(e, !0), y(n), i(W, e) ? (n.enumerable ? (i(t, M) && t[M][e] && (t[M][e] = !1), n = E(n, {
                                enumerable: x(0, !1)
                            })) : (i(t, M) || T(t, M, x(1, {})), t[M][e] = !0), q(t, e, n)) : T(t, e, n)
                        },
                        Q = function(t, e) {
                            y(t);
                            for (var n, r = g(e = S(e)), i = 0, o = r.length; o > i;) J(t, n = r[i++], e[n]);
                            return t
                        },
                        $ = function(t) {
                            var e = F.call(this, t = w(t, !0));
                            return !(this === B && i(W, t) && !i(H, t)) && (!(e || !i(this, t) || !i(W, t) || i(this, M) && this[M][t]) || e)
                        },
                        Y = function(t, e) {
                            if (t = S(t), e = w(e, !0), t !== B || !i(W, e) || i(H, e)) {
                                var n = j(t, e);
                                return !n || !i(W, e) || i(t, M) && t[M][e] || (n.enumerable = !0), n
                            }
                        },
                        Z = function(t) {
                            for (var e, n = C(S(t)), r = [], o = 0; n.length > o;) i(W, e = n[o++]) || e == M || e == a || r.push(e);
                            return r
                        },
                        tt = function(t) {
                            for (var e, n = t === B, r = C(n ? H : S(t)), o = [], s = 0; r.length > s;) !i(W, e = r[s++]) || n && !i(B, e) || o.push(W[e]);
                            return o
                        };
                    V || (u((N = function() {
                        if (this instanceof N) throw TypeError("Symbol is not a constructor!");
                        var t = h(arguments.length > 0 ? arguments[0] : void 0),
                            e = function(n) {
                                this === B && e.call(H, n), i(this, M) && i(this[M], t) && (this[M][t] = !1), q(this, t, x(1, n))
                            };
                        return o && G && q(B, t, {
                            configurable: !0,
                            set: e
                        }), X(t)
                    }).prototype, "toString", (function() {
                        return this._k
                    })), k.f = Y, A.f = J, n(42).f = I.f = Z, n(53).f = $, O.f = tt, o && !n(38) && u(B, "propertyIsEnumerable", $, !0), p.f = function(t) {
                        return X(d(t))
                    }), s(s.G + s.W + s.F * !V, {
                        Symbol: N
                    });
                    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
                    for (var rt = P(d.store), it = 0; rt.length > it;) v(rt[it++]);
                    s(s.S + s.F * !V, "Symbol", {
                        for: function(t) {
                            return i(L, t += "") ? L[t] : L[t] = N(t)
                        },
                        keyFor: function(t) {
                            if (!z(t)) throw TypeError(t + " is not a symbol!");
                            for (var e in L)
                                if (L[e] === t) return e
                        },
                        useSetter: function() {
                            G = !0
                        },
                        useSimple: function() {
                            G = !1
                        }
                    }), s(s.S + s.F * !V, "Object", {
                        create: function(t, e) {
                            return void 0 === e ? E(t) : Q(E(t), e)
                        },
                        defineProperty: J,
                        defineProperties: Q,
                        getOwnPropertyDescriptor: Y,
                        getOwnPropertyNames: Z,
                        getOwnPropertySymbols: tt
                    });
                    var ot = c((function() {
                        O.f(1)
                    }));
                    s(s.S + s.F * ot, "Object", {
                        getOwnPropertySymbols: function(t) {
                            return O.f(b(t))
                        }
                    }), R && s(s.S + s.F * (!V || c((function() {
                        var t = N();
                        return "[null]" != U([t]) || "{}" != U({
                            a: t
                        }) || "{}" != U(Object(t))
                    }))), "JSON", {
                        stringify: function(t) {
                            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                            if (n = e = r[1], (_(e) || void 0 !== t) && !z(t)) return m(e) || (e = function(t, e) {
                                if ("function" == typeof n && (e = n.call(this, t, e)), !z(e)) return e
                            }), r[1] = e, U.apply(R, r)
                        }
                    }), N.prototype[D] || n(18)(N.prototype, D, N.prototype.valueOf), l(N, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
                }, function(t, e, n) {
                    t.exports = n(57)("native-function-to-string", Function.toString)
                }, function(t, e, n) {
                    var r = n(39),
                        i = n(59),
                        o = n(53);
                    t.exports = function(t) {
                        var e = r(t),
                            n = i.f;
                        if (n)
                            for (var s, u = n(t), a = o.f, c = 0; u.length > c;) a.call(t, s = u[c++]) && e.push(s);
                        return e
                    }
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Object", {
                        create: n(41)
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S + r.F * !n(11), "Object", {
                        defineProperty: n(12).f
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S + r.F * !n(11), "Object", {
                        defineProperties: n(97)
                    })
                }, function(t, e, n) {
                    var r = n(19),
                        i = n(24).f;
                    n(25)("getOwnPropertyDescriptor", (function() {
                        return function(t, e) {
                            return i(r(t), e)
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(13),
                        i = n(43);
                    n(25)("getPrototypeOf", (function() {
                        return function(t) {
                            return i(r(t))
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(13),
                        i = n(39);
                    n(25)("keys", (function() {
                        return function(t) {
                            return i(r(t))
                        }
                    }))
                }, function(t, e, n) {
                    n(25)("getOwnPropertyNames", (function() {
                        return n(98).f
                    }))
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(33).onFreeze;
                    n(25)("freeze", (function(t) {
                        return function(e) {
                            return t && r(e) ? t(i(e)) : e
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(33).onFreeze;
                    n(25)("seal", (function(t) {
                        return function(e) {
                            return t && r(e) ? t(i(e)) : e
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(33).onFreeze;
                    n(25)("preventExtensions", (function(t) {
                        return function(e) {
                            return t && r(e) ? t(i(e)) : e
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(5);
                    n(25)("isFrozen", (function(t) {
                        return function(e) {
                            return !r(e) || !!t && t(e)
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(5);
                    n(25)("isSealed", (function(t) {
                        return function(e) {
                            return !r(e) || !!t && t(e)
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(5);
                    n(25)("isExtensible", (function(t) {
                        return function(e) {
                            return !!r(e) && (!t || t(e))
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S + r.F, "Object", {
                        assign: n(99)
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Object", {
                        is: n(100)
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Object", {
                        setPrototypeOf: n(74).set
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(54),
                        i = {};
                    i[n(8)("toStringTag")] = "z", i + "" != "[object z]" && n(15)(Object.prototype, "toString", (function() {
                        return "[object " + r(this) + "]"
                    }), !0)
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.P, "Function", {
                        bind: n(101)
                    })
                }, function(t, e, n) {
                    var r = n(12).f,
                        i = Function.prototype,
                        o = /^\s*function ([^ (]*)/;
                    "name" in i || n(11) && r(i, "name", {
                        configurable: !0,
                        get: function() {
                            try {
                                return ("" + this).match(o)[1]
                            } catch (t) {
                                return ""
                            }
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(5),
                        i = n(43),
                        o = n(8)("hasInstance"),
                        s = Function.prototype;
                    o in s || n(12).f(s, o, {
                        value: function(t) {
                            if ("function" != typeof this || !r(t)) return !1;
                            if (!r(this.prototype)) return t instanceof this;
                            for (; t = i(t);)
                                if (this.prototype === t) return !0;
                            return !1
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(103);
                    r(r.G + r.F * (parseInt != i), {
                        parseInt: i
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(104);
                    r(r.G + r.F * (parseFloat != i), {
                        parseFloat: i
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(2),
                        i = n(17),
                        o = n(28),
                        s = n(76),
                        u = n(32),
                        a = n(3),
                        c = n(42).f,
                        f = n(24).f,
                        l = n(12).f,
                        h = n(47).trim,
                        d = r.Number,
                        p = d,
                        v = d.prototype,
                        g = "Number" == o(n(41)(v)),
                        m = "trim" in String.prototype,
                        y = function(t) {
                            var e = u(t, !1);
                            if ("string" == typeof e && e.length > 2) {
                                var n, r, i, o = (e = m ? e.trim() : h(e, 3)).charCodeAt(0);
                                if (43 === o || 45 === o) {
                                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                                } else if (48 === o) {
                                    switch (e.charCodeAt(1)) {
                                        case 66:
                                        case 98:
                                            r = 2, i = 49;
                                            break;
                                        case 79:
                                        case 111:
                                            r = 8, i = 55;
                                            break;
                                        default:
                                            return +e
                                    }
                                    for (var s, a = e.slice(2), c = 0, f = a.length; c < f; c++)
                                        if ((s = a.charCodeAt(c)) < 48 || s > i) return NaN;
                                    return parseInt(a, r)
                                }
                            }
                            return +e
                        };
                    if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
                        d = function(t) {
                            var e = arguments.length < 1 ? 0 : t,
                                n = this;
                            return n instanceof d && (g ? a((function() {
                                v.valueOf.call(n)
                            })) : "Number" != o(n)) ? s(new p(y(e)), n, d) : y(e)
                        };
                        for (var _, b = n(11) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; b.length > S; S++) i(p, _ = b[S]) && !i(d, _) && l(d, _, f(p, _));
                        d.prototype = v, v.constructor = d, n(15)(r, "Number", d)
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(23),
                        o = n(105),
                        s = n(77),
                        u = 1..toFixed,
                        a = Math.floor,
                        c = [0, 0, 0, 0, 0, 0],
                        f = "Number.toFixed: incorrect invocation!",
                        l = function(t, e) {
                            for (var n = -1, r = e; ++n < 6;) r += t * c[n], c[n] = r % 1e7, r = a(r / 1e7)
                        },
                        h = function(t) {
                            for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = a(n / t), n = n % t * 1e7
                        },
                        d = function() {
                            for (var t = 6, e = ""; --t >= 0;)
                                if ("" !== e || 0 === t || 0 !== c[t]) {
                                    var n = String(c[t]);
                                    e = "" === e ? n : e + s.call("0", 7 - n.length) + n
                                } return e
                        },
                        p = function(t, e, n) {
                            return 0 === e ? n : e % 2 == 1 ? p(t, e - 1, n * t) : p(t * t, e / 2, n)
                        };
                    r(r.P + r.F * (!!u && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(3)((function() {
                        u.call({})
                    }))), "Number", {
                        toFixed: function(t) {
                            var e, n, r, u, a = o(this, f),
                                c = i(t),
                                v = "",
                                g = "0";
                            if (c < 0 || c > 20) throw RangeError(f);
                            if (a != a) return "NaN";
                            if (a <= -1e21 || a >= 1e21) return String(a);
                            if (a < 0 && (v = "-", a = -a), a > 1e-21)
                                if (n = (e = function(t) {
                                        for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                                        for (; n >= 2;) e += 1, n /= 2;
                                        return e
                                    }(a * p(2, 69, 1)) - 69) < 0 ? a * p(2, -e, 1) : a / p(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                                    for (l(0, n), r = c; r >= 7;) l(1e7, 0), r -= 7;
                                    for (l(p(10, r, 1), 0), r = e - 1; r >= 23;) h(1 << 23), r -= 23;
                                    h(1 << r), l(1, 1), h(2), g = d()
                                } else l(0, n), l(1 << -e, 0), g = d() + s.call("0", c);
                            return c > 0 ? v + ((u = g.length) <= c ? "0." + s.call("0", c - u) + g : g.slice(0, u - c) + "." + g.slice(u - c)) : v + g
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(3),
                        o = n(105),
                        s = 1..toPrecision;
                    r(r.P + r.F * (i((function() {
                        return "1" !== s.call(1, void 0)
                    })) || !i((function() {
                        s.call({})
                    }))), "Number", {
                        toPrecision: function(t) {
                            var e = o(this, "Number#toPrecision: incorrect invocation!");
                            return void 0 === t ? s.call(e) : s.call(e, t)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Number", {
                        EPSILON: Math.pow(2, -52)
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(2).isFinite;
                    r(r.S, "Number", {
                        isFinite: function(t) {
                            return "number" == typeof t && i(t)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Number", {
                        isInteger: n(106)
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Number", {
                        isNaN: function(t) {
                            return t != t
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(106),
                        o = Math.abs;
                    r(r.S, "Number", {
                        isSafeInteger: function(t) {
                            return i(t) && o(t) <= 9007199254740991
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Number", {
                        MAX_SAFE_INTEGER: 9007199254740991
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Number", {
                        MIN_SAFE_INTEGER: -9007199254740991
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(104);
                    r(r.S + r.F * (Number.parseFloat != i), "Number", {
                        parseFloat: i
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(103);
                    r(r.S + r.F * (Number.parseInt != i), "Number", {
                        parseInt: i
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(107),
                        o = Math.sqrt,
                        s = Math.acosh;
                    r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
                        acosh: function(t) {
                            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = Math.asinh;
                    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
                        asinh: function t(e) {
                            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = Math.atanh;
                    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
                        atanh: function(t) {
                            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(78);
                    r(r.S, "Math", {
                        cbrt: function(t) {
                            return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Math", {
                        clz32: function(t) {
                            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = Math.exp;
                    r(r.S, "Math", {
                        cosh: function(t) {
                            return (i(t = +t) + i(-t)) / 2
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(79);
                    r(r.S + r.F * (i != Math.expm1), "Math", {
                        expm1: i
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Math", {
                        fround: n(178)
                    })
                }, function(t, e, n) {
                    var r = n(78),
                        i = Math.pow,
                        o = i(2, -52),
                        s = i(2, -23),
                        u = i(2, 127) * (2 - s),
                        a = i(2, -126);
                    t.exports = Math.fround || function(t) {
                        var e, n, i = Math.abs(t),
                            c = r(t);
                        return i < a ? c * (i / a / s + 1 / o - 1 / o) * a * s : (n = (e = (1 + s / o) * i) - (e - i)) > u || n != n ? c * (1 / 0) : c * n
                    }
                }, function(t, e, n) {
                    var r = n(0),
                        i = Math.abs;
                    r(r.S, "Math", {
                        hypot: function(t, e) {
                            for (var n, r, o = 0, s = 0, u = arguments.length, a = 0; s < u;) a < (n = i(arguments[s++])) ? (o = o * (r = a / n) * r + 1, a = n) : o += n > 0 ? (r = n / a) * r : n;
                            return a === 1 / 0 ? 1 / 0 : a * Math.sqrt(o)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = Math.imul;
                    r(r.S + r.F * n(3)((function() {
                        return -5 != i(4294967295, 5) || 2 != i.length
                    })), "Math", {
                        imul: function(t, e) {
                            var n = +t,
                                r = +e,
                                i = 65535 & n,
                                o = 65535 & r;
                            return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Math", {
                        log10: function(t) {
                            return Math.log(t) * Math.LOG10E
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Math", {
                        log1p: n(107)
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Math", {
                        log2: function(t) {
                            return Math.log(t) / Math.LN2
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Math", {
                        sign: n(78)
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(79),
                        o = Math.exp;
                    r(r.S + r.F * n(3)((function() {
                        return -2e-17 != !Math.sinh(-2e-17)
                    })), "Math", {
                        sinh: function(t) {
                            return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(79),
                        o = Math.exp;
                    r(r.S, "Math", {
                        tanh: function(t) {
                            var e = i(t = +t),
                                n = i(-t);
                            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Math", {
                        trunc: function(t) {
                            return (t > 0 ? Math.floor : Math.ceil)(t)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(40),
                        o = String.fromCharCode,
                        s = String.fromCodePoint;
                    r(r.S + r.F * (!!s && 1 != s.length), "String", {
                        fromCodePoint: function(t) {
                            for (var e, n = [], r = arguments.length, s = 0; r > s;) {
                                if (e = +arguments[s++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                                n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                            }
                            return n.join("")
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(19),
                        o = n(9);
                    r(r.S, "String", {
                        raw: function(t) {
                            for (var e = i(t.raw), n = o(e.length), r = arguments.length, s = [], u = 0; n > u;) s.push(String(e[u++])), u < r && s.push(String(arguments[u]));
                            return s.join("")
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    n(47)("trim", (function(t) {
                        return function() {
                            return t(this, 3)
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(80)(!0);
                    n(81)(String, "String", (function(t) {
                        this._t = String(t), this._i = 0
                    }), (function() {
                        var t, e = this._t,
                            n = this._i;
                        return n >= e.length ? {
                            value: void 0,
                            done: !0
                        } : (t = r(e, n), this._i += t.length, {
                            value: t,
                            done: !1
                        })
                    }))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(80)(!1);
                    r(r.P, "String", {
                        codePointAt: function(t) {
                            return i(this, t)
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(9),
                        o = n(82),
                        s = "".endsWith;
                    r(r.P + r.F * n(84)("endsWith"), "String", {
                        endsWith: function(t) {
                            var e = o(this, t, "endsWith"),
                                n = arguments.length > 1 ? arguments[1] : void 0,
                                r = i(e.length),
                                u = void 0 === n ? r : Math.min(i(n), r),
                                a = String(t);
                            return s ? s.call(e, a, u) : e.slice(u - a.length, u) === a
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(82);
                    r(r.P + r.F * n(84)("includes"), "String", {
                        includes: function(t) {
                            return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.P, "String", {
                        repeat: n(77)
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(9),
                        o = n(82),
                        s = "".startsWith;
                    r(r.P + r.F * n(84)("startsWith"), "String", {
                        startsWith: function(t) {
                            var e = o(this, t, "startsWith"),
                                n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                                r = String(t);
                            return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    n(16)("anchor", (function(t) {
                        return function(e) {
                            return t(this, "a", "name", e)
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("big", (function(t) {
                        return function() {
                            return t(this, "big", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("blink", (function(t) {
                        return function() {
                            return t(this, "blink", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("bold", (function(t) {
                        return function() {
                            return t(this, "b", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("fixed", (function(t) {
                        return function() {
                            return t(this, "tt", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("fontcolor", (function(t) {
                        return function(e) {
                            return t(this, "font", "color", e)
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("fontsize", (function(t) {
                        return function(e) {
                            return t(this, "font", "size", e)
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("italics", (function(t) {
                        return function() {
                            return t(this, "i", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("link", (function(t) {
                        return function(e) {
                            return t(this, "a", "href", e)
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("small", (function(t) {
                        return function() {
                            return t(this, "small", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("strike", (function(t) {
                        return function() {
                            return t(this, "strike", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("sub", (function(t) {
                        return function() {
                            return t(this, "sub", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n(16)("sup", (function(t) {
                        return function() {
                            return t(this, "sup", "", "")
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Date", {
                        now: function() {
                            return (new Date).getTime()
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(13),
                        o = n(32);
                    r(r.P + r.F * n(3)((function() {
                        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                            toISOString: function() {
                                return 1
                            }
                        })
                    })), "Date", {
                        toJSON: function(t) {
                            var e = i(this),
                                n = o(e);
                            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(213);
                    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
                        toISOString: i
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(3),
                        i = Date.prototype.getTime,
                        o = Date.prototype.toISOString,
                        s = function(t) {
                            return t > 9 ? t : "0" + t
                        };
                    t.exports = r((function() {
                        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001))
                    })) || !r((function() {
                        o.call(new Date(NaN))
                    })) ? function() {
                        if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
                        var t = this,
                            e = t.getUTCFullYear(),
                            n = t.getUTCMilliseconds(),
                            r = e < 0 ? "-" : e > 9999 ? "+" : "";
                        return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
                    } : o
                }, function(t, e, n) {
                    var r = Date.prototype,
                        i = r.toString,
                        o = r.getTime;
                    new Date(NaN) + "" != "Invalid Date" && n(15)(r, "toString", (function() {
                        var t = o.call(this);
                        return t == t ? i.call(this) : "Invalid Date"
                    }))
                }, function(t, e, n) {
                    var r = n(8)("toPrimitive"),
                        i = Date.prototype;
                    r in i || n(18)(i, r, n(216))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(4),
                        i = n(32);
                    t.exports = function(t) {
                        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
                        return i(r(this), "number" != t)
                    }
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Array", {
                        isArray: n(60)
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(21),
                        i = n(0),
                        o = n(13),
                        s = n(109),
                        u = n(85),
                        a = n(9),
                        c = n(86),
                        f = n(87);
                    i(i.S + i.F * !n(61)((function(t) {
                        Array.from(t)
                    })), "Array", {
                        from: function(t) {
                            var e, n, i, l, h = o(t),
                                d = "function" == typeof this ? this : Array,
                                p = arguments.length,
                                v = p > 1 ? arguments[1] : void 0,
                                g = void 0 !== v,
                                m = 0,
                                y = f(h);
                            if (g && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), null == y || d == Array && u(y))
                                for (n = new d(e = a(h.length)); e > m; m++) c(n, m, g ? v(h[m], m) : h[m]);
                            else
                                for (l = y.call(h), n = new d; !(i = l.next()).done; m++) c(n, m, g ? s(l, v, [i.value, m], !0) : i.value);
                            return n.length = m, n
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(86);
                    r(r.S + r.F * n(3)((function() {
                        function t() {}
                        return !(Array.of.call(t) instanceof t)
                    })), "Array", {
                        of: function() {
                            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);
                            return n.length = e, n
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(19),
                        o = [].join;
                    r(r.P + r.F * (n(52) != Object || !n(20)(o)), "Array", {
                        join: function(t) {
                            return o.call(i(this), void 0 === t ? "," : t)
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(73),
                        o = n(28),
                        s = n(40),
                        u = n(9),
                        a = [].slice;
                    r(r.P + r.F * n(3)((function() {
                        i && a.call(i)
                    })), "Array", {
                        slice: function(t, e) {
                            var n = u(this.length),
                                r = o(this);
                            if (e = void 0 === e ? n : e, "Array" == r) return a.call(this, t, e);
                            for (var i = s(t, n), c = s(e, n), f = u(c - i), l = new Array(f), h = 0; h < f; h++) l[h] = "String" == r ? this.charAt(i + h) : this[i + h];
                            return l
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(22),
                        o = n(13),
                        s = n(3),
                        u = [].sort,
                        a = [1, 2, 3];
                    r(r.P + r.F * (s((function() {
                        a.sort(void 0)
                    })) || !s((function() {
                        a.sort(null)
                    })) || !n(20)(u)), "Array", {
                        sort: function(t) {
                            return void 0 === t ? u.call(o(this)) : u.call(o(this), i(t))
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(26)(0),
                        o = n(20)([].forEach, !0);
                    r(r.P + r.F * !o, "Array", {
                        forEach: function(t) {
                            return i(this, t, arguments[1])
                        }
                    })
                }, function(t, e, n) {
                    var r = n(5),
                        i = n(60),
                        o = n(8)("species");
                    t.exports = function(t) {
                        var e;
                        return i(t) && ("function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(26)(1);
                    r(r.P + r.F * !n(20)([].map, !0), "Array", {
                        map: function(t) {
                            return i(this, t, arguments[1])
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(26)(2);
                    r(r.P + r.F * !n(20)([].filter, !0), "Array", {
                        filter: function(t) {
                            return i(this, t, arguments[1])
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(26)(3);
                    r(r.P + r.F * !n(20)([].some, !0), "Array", {
                        some: function(t) {
                            return i(this, t, arguments[1])
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(26)(4);
                    r(r.P + r.F * !n(20)([].every, !0), "Array", {
                        every: function(t) {
                            return i(this, t, arguments[1])
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(111);
                    r(r.P + r.F * !n(20)([].reduce, !0), "Array", {
                        reduce: function(t) {
                            return i(this, t, arguments.length, arguments[1], !1)
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(111);
                    r(r.P + r.F * !n(20)([].reduceRight, !0), "Array", {
                        reduceRight: function(t) {
                            return i(this, t, arguments.length, arguments[1], !0)
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(58)(!1),
                        o = [].indexOf,
                        s = !!o && 1 / [1].indexOf(1, -0) < 0;
                    r(r.P + r.F * (s || !n(20)(o)), "Array", {
                        indexOf: function(t) {
                            return s ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(19),
                        o = n(23),
                        s = n(9),
                        u = [].lastIndexOf,
                        a = !!u && 1 / [1].lastIndexOf(1, -0) < 0;
                    r(r.P + r.F * (a || !n(20)(u)), "Array", {
                        lastIndexOf: function(t) {
                            if (a) return u.apply(this, arguments) || 0;
                            var e = i(this),
                                n = s(e.length),
                                r = n - 1;
                            for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                                if (r in e && e[r] === t) return r || 0;
                            return -1
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.P, "Array", {
                        copyWithin: n(112)
                    }), n(44)("copyWithin")
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.P, "Array", {
                        fill: n(88)
                    }), n(44)("fill")
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(26)(5),
                        o = !0;
                    "find" in [] && Array(1).find((function() {
                        o = !1
                    })), r(r.P + r.F * o, "Array", {
                        find: function(t) {
                            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), n(44)("find")
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(26)(6),
                        o = "findIndex",
                        s = !0;
                    o in [] && Array(1)[o]((function() {
                        s = !1
                    })), r(r.P + r.F * s, "Array", {
                        findIndex: function(t) {
                            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), n(44)(o)
                }, function(t, e, n) {
                    n(49)("Array")
                }, function(t, e, n) {
                    var r = n(2),
                        i = n(76),
                        o = n(12).f,
                        s = n(42).f,
                        u = n(83),
                        a = n(62),
                        c = r.RegExp,
                        f = c,
                        l = c.prototype,
                        h = /a/g,
                        d = /a/g,
                        p = new c(h) !== h;
                    if (n(11) && (!p || n(3)((function() {
                            return d[n(8)("match")] = !1, c(h) != h || c(d) == d || "/a/i" != c(h, "i")
                        })))) {
                        c = function(t, e) {
                            var n = this instanceof c,
                                r = u(t),
                                o = void 0 === e;
                            return !n && r && t.constructor === c && o ? t : i(p ? new f(r && !o ? t.source : t, e) : f((r = t instanceof c) ? t.source : t, r && o ? a.call(t) : e), n ? this : l, c)
                        };
                        for (var v = function(t) {
                                t in c || o(c, t, {
                                    configurable: !0,
                                    get: function() {
                                        return f[t]
                                    },
                                    set: function(e) {
                                        f[t] = e
                                    }
                                })
                            }, g = s(f), m = 0; g.length > m;) v(g[m++]);
                        l.constructor = c, c.prototype = l, n(15)(r, "RegExp", c)
                    }
                    n(49)("RegExp")
                }, function(t, e, n) {
                    "use strict";
                    n(115);
                    var r = n(4),
                        i = n(62),
                        o = n(11),
                        s = /./.toString,
                        u = function(t) {
                            n(15)(RegExp.prototype, "toString", t, !0)
                        };
                    n(3)((function() {
                        return "/a/b" != s.call({
                            source: "a",
                            flags: "b"
                        })
                    })) ? u((function() {
                        var t = r(this);
                        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
                    })) : "toString" != s.name && u((function() {
                        return s.call(this)
                    }))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(4),
                        i = n(9),
                        o = n(91),
                        s = n(63);
                    n(64)("match", 1, (function(t, e, n, u) {
                        return [function(n) {
                            var r = t(this),
                                i = null == n ? void 0 : n[e];
                            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
                        }, function(t) {
                            var e = u(n, t, this);
                            if (e.done) return e.value;
                            var a = r(t),
                                c = String(this);
                            if (!a.global) return s(a, c);
                            var f = a.unicode;
                            a.lastIndex = 0;
                            for (var l, h = [], d = 0; null !== (l = s(a, c));) {
                                var p = String(l[0]);
                                h[d] = p, "" === p && (a.lastIndex = o(c, i(a.lastIndex), f)), d++
                            }
                            return 0 === d ? null : h
                        }]
                    }))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(4),
                        i = n(13),
                        o = n(9),
                        s = n(23),
                        u = n(91),
                        a = n(63),
                        c = Math.max,
                        f = Math.min,
                        l = Math.floor,
                        h = /\$([$&`']|\d\d?|<[^>]*>)/g,
                        d = /\$([$&`']|\d\d?)/g;
                    n(64)("replace", 2, (function(t, e, n, p) {
                        return [function(r, i) {
                            var o = t(this),
                                s = null == r ? void 0 : r[e];
                            return void 0 !== s ? s.call(r, o, i) : n.call(String(o), r, i)
                        }, function(t, e) {
                            var i = p(n, t, this, e);
                            if (i.done) return i.value;
                            var l = r(t),
                                h = String(this),
                                d = "function" == typeof e;
                            d || (e = String(e));
                            var g = l.global;
                            if (g) {
                                var m = l.unicode;
                                l.lastIndex = 0
                            }
                            for (var y = [];;) {
                                var _ = a(l, h);
                                if (null === _) break;
                                if (y.push(_), !g) break;
                                "" === String(_[0]) && (l.lastIndex = u(h, o(l.lastIndex), m))
                            }
                            for (var b, S = "", w = 0, x = 0; x < y.length; x++) {
                                _ = y[x];
                                for (var E = String(_[0]), I = c(f(s(_.index), h.length), 0), k = [], O = 1; O < _.length; O++) k.push(void 0 === (b = _[O]) ? b : String(b));
                                var A = _.groups;
                                if (d) {
                                    var P = [E].concat(k, I, h);
                                    void 0 !== A && P.push(A);
                                    var j = String(e.apply(void 0, P))
                                } else j = v(E, h, I, k, A, e);
                                I >= w && (S += h.slice(w, I) + j, w = I + E.length)
                            }
                            return S + h.slice(w)
                        }];

                        function v(t, e, r, o, s, u) {
                            var a = r + t.length,
                                c = o.length,
                                f = d;
                            return void 0 !== s && (s = i(s), f = h), n.call(u, f, (function(n, i) {
                                var u;
                                switch (i.charAt(0)) {
                                    case "$":
                                        return "$";
                                    case "&":
                                        return t;
                                    case "`":
                                        return e.slice(0, r);
                                    case "'":
                                        return e.slice(a);
                                    case "<":
                                        u = s[i.slice(1, -1)];
                                        break;
                                    default:
                                        var f = +i;
                                        if (0 === f) return n;
                                        if (f > c) {
                                            var h = l(f / 10);
                                            return 0 === h ? n : h <= c ? void 0 === o[h - 1] ? i.charAt(1) : o[h - 1] + i.charAt(1) : n
                                        }
                                        u = o[f - 1]
                                }
                                return void 0 === u ? "" : u
                            }))
                        }
                    }))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(4),
                        i = n(100),
                        o = n(63);
                    n(64)("search", 1, (function(t, e, n, s) {
                        return [function(n) {
                            var r = t(this),
                                i = null == n ? void 0 : n[e];
                            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
                        }, function(t) {
                            var e = s(n, t, this);
                            if (e.done) return e.value;
                            var u = r(t),
                                a = String(this),
                                c = u.lastIndex;
                            i(c, 0) || (u.lastIndex = 0);
                            var f = o(u, a);
                            return i(u.lastIndex, c) || (u.lastIndex = c), null === f ? -1 : f.index
                        }]
                    }))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(83),
                        i = n(4),
                        o = n(55),
                        s = n(91),
                        u = n(9),
                        a = n(63),
                        c = n(90),
                        f = n(3),
                        l = Math.min,
                        h = [].push,
                        d = !f((function() {
                            RegExp(4294967295, "y")
                        }));
                    n(64)("split", 2, (function(t, e, n, f) {
                        var p;
                        return p = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
                            var i = String(this);
                            if (void 0 === t && 0 === e) return [];
                            if (!r(t)) return n.call(i, t, e);
                            for (var o, s, u, a = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, d = void 0 === e ? 4294967295 : e >>> 0, p = new RegExp(t.source, f + "g");
                                (o = c.call(p, i)) && !((s = p.lastIndex) > l && (a.push(i.slice(l, o.index)), o.length > 1 && o.index < i.length && h.apply(a, o.slice(1)), u = o[0].length, l = s, a.length >= d));) p.lastIndex === o.index && p.lastIndex++;
                            return l === i.length ? !u && p.test("") || a.push("") : a.push(i.slice(l)), a.length > d ? a.slice(0, d) : a
                        } : "0".split(void 0, 0).length ? function(t, e) {
                            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
                        } : n, [function(n, r) {
                            var i = t(this),
                                o = null == n ? void 0 : n[e];
                            return void 0 !== o ? o.call(n, i, r) : p.call(String(i), n, r)
                        }, function(t, e) {
                            var r = f(p, t, this, e, p !== n);
                            if (r.done) return r.value;
                            var c = i(t),
                                h = String(this),
                                v = o(c, RegExp),
                                g = c.unicode,
                                m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (d ? "y" : "g"),
                                y = new v(d ? c : "^(?:" + c.source + ")", m),
                                _ = void 0 === e ? 4294967295 : e >>> 0;
                            if (0 === _) return [];
                            if (0 === h.length) return null === a(y, h) ? [h] : [];
                            for (var b = 0, S = 0, w = []; S < h.length;) {
                                y.lastIndex = d ? S : 0;
                                var x, E = a(y, d ? h : h.slice(S));
                                if (null === E || (x = l(u(y.lastIndex + (d ? 0 : S)), h.length)) === b) S = s(h, S, g);
                                else {
                                    if (w.push(h.slice(b, S)), w.length === _) return w;
                                    for (var I = 1; I <= E.length - 1; I++)
                                        if (w.push(E[I]), w.length === _) return w;
                                    S = b = x
                                }
                            }
                            return w.push(h.slice(b)), w
                        }]
                    }))
                }, function(t, e, n) {
                    var r = n(2),
                        i = n(92).set,
                        o = r.MutationObserver || r.WebKitMutationObserver,
                        s = r.process,
                        u = r.Promise,
                        a = "process" == n(28)(s);
                    t.exports = function() {
                        var t, e, n, c = function() {
                            var r, i;
                            for (a && (r = s.domain) && r.exit(); t;) {
                                i = t.fn, t = t.next;
                                try {
                                    i()
                                } catch (r) {
                                    throw t ? n() : e = void 0, r
                                }
                            }
                            e = void 0, r && r.enter()
                        };
                        if (a) n = function() {
                            s.nextTick(c)
                        };
                        else if (!o || r.navigator && r.navigator.standalone)
                            if (u && u.resolve) {
                                var f = u.resolve(void 0);
                                n = function() {
                                    f.then(c)
                                }
                            } else n = function() {
                                i.call(r, c)
                            };
                        else {
                            var l = !0,
                                h = document.createTextNode("");
                            new o(c).observe(h, {
                                characterData: !0
                            }), n = function() {
                                h.data = l = !l
                            }
                        }
                        return function(r) {
                            var i = {
                                fn: r,
                                next: void 0
                            };
                            e && (e.next = i), t || (t = i, n()), e = i
                        }
                    }
                }, function(t, e) {
                    t.exports = function(t) {
                        try {
                            return {
                                e: !1,
                                v: t()
                            }
                        } catch (t) {
                            return {
                                e: !0,
                                v: t
                            }
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(119),
                        i = n(45);
                    t.exports = n(67)("Map", (function(t) {
                        return function() {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0)
                        }
                    }), {
                        get: function(t) {
                            var e = r.getEntry(i(this, "Map"), t);
                            return e && e.v
                        },
                        set: function(t, e) {
                            return r.def(i(this, "Map"), 0 === t ? 0 : t, e)
                        }
                    }, r, !0)
                }, function(t, e, n) {
                    "use strict";
                    var r = n(119),
                        i = n(45);
                    t.exports = n(67)("Set", (function(t) {
                        return function() {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0)
                        }
                    }), {
                        add: function(t) {
                            return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
                        }
                    }, r)
                }, function(t, e, n) {
                    "use strict";
                    var r, i = n(2),
                        o = n(26)(0),
                        s = n(15),
                        u = n(33),
                        a = n(99),
                        c = n(120),
                        f = n(5),
                        l = n(45),
                        h = n(45),
                        d = !i.ActiveXObject && "ActiveXObject" in i,
                        p = u.getWeak,
                        v = Object.isExtensible,
                        g = c.ufstore,
                        m = function(t) {
                            return function() {
                                return t(this, arguments.length > 0 ? arguments[0] : void 0)
                            }
                        },
                        y = {
                            get: function(t) {
                                if (f(t)) {
                                    var e = p(t);
                                    return !0 === e ? g(l(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                                }
                            },
                            set: function(t, e) {
                                return c.def(l(this, "WeakMap"), t, e)
                            }
                        },
                        _ = t.exports = n(67)("WeakMap", m, y, c, !0, !0);
                    h && d && (a((r = c.getConstructor(m, "WeakMap")).prototype, y), u.NEED = !0, o(["delete", "has", "get", "set"], (function(t) {
                        var e = _.prototype,
                            n = e[t];
                        s(e, t, (function(e, i) {
                            if (f(e) && !v(e)) {
                                this._f || (this._f = new r);
                                var o = this._f[t](e, i);
                                return "set" == t ? this : o
                            }
                            return n.call(this, e, i)
                        }))
                    })))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(120),
                        i = n(45);
                    n(67)("WeakSet", (function(t) {
                        return function() {
                            return t(this, arguments.length > 0 ? arguments[0] : void 0)
                        }
                    }), {
                        add: function(t) {
                            return r.def(i(this, "WeakSet"), t, !0)
                        }
                    }, r, !1, !0)
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(68),
                        o = n(93),
                        s = n(4),
                        u = n(40),
                        a = n(9),
                        c = n(5),
                        f = n(2).ArrayBuffer,
                        l = n(55),
                        h = o.ArrayBuffer,
                        d = o.DataView,
                        p = i.ABV && f.isView,
                        v = h.prototype.slice,
                        g = i.VIEW;
                    r(r.G + r.W + r.F * (f !== h), {
                        ArrayBuffer: h
                    }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
                        isView: function(t) {
                            return p && p(t) || c(t) && g in t
                        }
                    }), r(r.P + r.U + r.F * n(3)((function() {
                        return !new h(2).slice(1, void 0).byteLength
                    })), "ArrayBuffer", {
                        slice: function(t, e) {
                            if (void 0 !== v && void 0 === e) return v.call(s(this), t);
                            for (var n = s(this).byteLength, r = u(t, n), i = u(void 0 === e ? n : e, n), o = new(l(this, h))(a(i - r)), c = new d(this), f = new d(o), p = 0; r < i;) f.setUint8(p++, c.getUint8(r++));
                            return o
                        }
                    }), n(49)("ArrayBuffer")
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.G + r.W + r.F * !n(68).ABV, {
                        DataView: n(93).DataView
                    })
                }, function(t, e, n) {
                    n(30)("Int8", 1, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    n(30)("Uint8", 1, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    n(30)("Uint8", 1, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }), !0)
                }, function(t, e, n) {
                    n(30)("Int16", 2, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    n(30)("Uint16", 2, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    n(30)("Int32", 4, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    n(30)("Uint32", 4, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    n(30)("Float32", 4, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    n(30)("Float64", 8, (function(t) {
                        return function(e, n, r) {
                            return t(this, e, n, r)
                        }
                    }))
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(22),
                        o = n(4),
                        s = (n(2).Reflect || {}).apply,
                        u = Function.apply;
                    r(r.S + r.F * !n(3)((function() {
                        s((function() {}))
                    })), "Reflect", {
                        apply: function(t, e, n) {
                            var r = i(t),
                                a = o(n);
                            return s ? s(r, e, a) : u.call(r, e, a)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(41),
                        o = n(22),
                        s = n(4),
                        u = n(5),
                        a = n(3),
                        c = n(101),
                        f = (n(2).Reflect || {}).construct,
                        l = a((function() {
                            function t() {}
                            return !(f((function() {}), [], t) instanceof t)
                        })),
                        h = !a((function() {
                            f((function() {}))
                        }));
                    r(r.S + r.F * (l || h), "Reflect", {
                        construct: function(t, e) {
                            o(t), s(e);
                            var n = arguments.length < 3 ? t : o(arguments[2]);
                            if (h && !l) return f(t, e, n);
                            if (t == n) {
                                switch (e.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(e[0]);
                                    case 2:
                                        return new t(e[0], e[1]);
                                    case 3:
                                        return new t(e[0], e[1], e[2]);
                                    case 4:
                                        return new t(e[0], e[1], e[2], e[3])
                                }
                                var r = [null];
                                return r.push.apply(r, e), new(c.apply(t, r))
                            }
                            var a = n.prototype,
                                d = i(u(a) ? a : Object.prototype),
                                p = Function.apply.call(t, d, e);
                            return u(p) ? p : d
                        }
                    })
                }, function(t, e, n) {
                    var r = n(12),
                        i = n(0),
                        o = n(4),
                        s = n(32);
                    i(i.S + i.F * n(3)((function() {
                        Reflect.defineProperty(r.f({}, 1, {
                            value: 1
                        }), 1, {
                            value: 2
                        })
                    })), "Reflect", {
                        defineProperty: function(t, e, n) {
                            o(t), e = s(e, !0), o(n);
                            try {
                                return r.f(t, e, n), !0
                            } catch (t) {
                                return !1
                            }
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(24).f,
                        o = n(4);
                    r(r.S, "Reflect", {
                        deleteProperty: function(t, e) {
                            var n = i(o(t), e);
                            return !(n && !n.configurable) && delete t[e]
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(4),
                        o = function(t) {
                            this._t = i(t), this._i = 0;
                            var e, n = this._k = [];
                            for (e in t) n.push(e)
                        };
                    n(108)(o, "Object", (function() {
                        var t, e = this._k;
                        do {
                            if (this._i >= e.length) return {
                                value: void 0,
                                done: !0
                            }
                        } while (!((t = e[this._i++]) in this._t));
                        return {
                            value: t,
                            done: !1
                        }
                    })), r(r.S, "Reflect", {
                        enumerate: function(t) {
                            return new o(t)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(24),
                        i = n(43),
                        o = n(17),
                        s = n(0),
                        u = n(5),
                        a = n(4);
                    s(s.S, "Reflect", {
                        get: function t(e, n) {
                            var s, c, f = arguments.length < 3 ? e : arguments[2];
                            return a(e) === f ? e[n] : (s = r.f(e, n)) ? o(s, "value") ? s.value : void 0 !== s.get ? s.get.call(f) : void 0 : u(c = i(e)) ? t(c, n, f) : void 0
                        }
                    })
                }, function(t, e, n) {
                    var r = n(24),
                        i = n(0),
                        o = n(4);
                    i(i.S, "Reflect", {
                        getOwnPropertyDescriptor: function(t, e) {
                            return r.f(o(t), e)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(43),
                        o = n(4);
                    r(r.S, "Reflect", {
                        getPrototypeOf: function(t) {
                            return i(o(t))
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Reflect", {
                        has: function(t, e) {
                            return e in t
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(4),
                        o = Object.isExtensible;
                    r(r.S, "Reflect", {
                        isExtensible: function(t) {
                            return i(t), !o || o(t)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0);
                    r(r.S, "Reflect", {
                        ownKeys: n(122)
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(4),
                        o = Object.preventExtensions;
                    r(r.S, "Reflect", {
                        preventExtensions: function(t) {
                            i(t);
                            try {
                                return o && o(t), !0
                            } catch (t) {
                                return !1
                            }
                        }
                    })
                }, function(t, e, n) {
                    var r = n(12),
                        i = n(24),
                        o = n(43),
                        s = n(17),
                        u = n(0),
                        a = n(36),
                        c = n(4),
                        f = n(5);
                    u(u.S, "Reflect", {
                        set: function t(e, n, u) {
                            var l, h, d = arguments.length < 4 ? e : arguments[3],
                                p = i.f(c(e), n);
                            if (!p) {
                                if (f(h = o(e))) return t(h, n, u, d);
                                p = a(0)
                            }
                            if (s(p, "value")) {
                                if (!1 === p.writable || !f(d)) return !1;
                                if (l = i.f(d, n)) {
                                    if (l.get || l.set || !1 === l.writable) return !1;
                                    l.value = u, r.f(d, n, l)
                                } else r.f(d, n, a(0, u));
                                return !0
                            }
                            return void 0 !== p.set && (p.set.call(d, u), !0)
                        }
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(74);
                    i && r(r.S, "Reflect", {
                        setPrototypeOf: function(t, e) {
                            i.check(t, e);
                            try {
                                return i.set(t, e), !0
                            } catch (t) {
                                return !1
                            }
                        }
                    })
                }, function(t, e, n) {
                    n(276), t.exports = n(10).Array.includes
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(58)(!0);
                    r(r.P, "Array", {
                        includes: function(t) {
                            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), n(44)("includes")
                }, function(t, e, n) {
                    n(278), t.exports = n(10).Array.flatMap
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(279),
                        o = n(13),
                        s = n(9),
                        u = n(22),
                        a = n(110);
                    r(r.P, "Array", {
                        flatMap: function(t) {
                            var e, n, r = o(this);
                            return u(t), e = s(r.length), n = a(r, 0), i(n, r, r, e, 0, 1, t, arguments[1]), n
                        }
                    }), n(44)("flatMap")
                }, function(t, e, n) {
                    "use strict";
                    var r = n(60),
                        i = n(5),
                        o = n(9),
                        s = n(21),
                        u = n(8)("isConcatSpreadable");
                    t.exports = function t(e, n, a, c, f, l, h, d) {
                        for (var p, v, g = f, m = 0, y = !!h && s(h, d, 3); m < c;) {
                            if (m in a) {
                                if (p = y ? y(a[m], m, n) : a[m], v = !1, i(p) && (v = void 0 !== (v = p[u]) ? !!v : r(p)), v && l > 0) g = t(e, n, p, o(p.length), g, l - 1) - 1;
                                else {
                                    if (g >= 9007199254740991) throw TypeError();
                                    e[g] = p
                                }
                                g++
                            }
                            m++
                        }
                        return g
                    }
                }, function(t, e, n) {
                    n(281), t.exports = n(10).String.padStart
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(123),
                        o = n(66),
                        s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
                    r(r.P + r.F * s, "String", {
                        padStart: function(t) {
                            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
                        }
                    })
                }, function(t, e, n) {
                    n(283), t.exports = n(10).String.padEnd
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(123),
                        o = n(66),
                        s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
                    r(r.P + r.F * s, "String", {
                        padEnd: function(t) {
                            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
                        }
                    })
                }, function(t, e, n) {
                    n(285), t.exports = n(10).String.trimLeft
                }, function(t, e, n) {
                    "use strict";
                    n(47)("trimLeft", (function(t) {
                        return function() {
                            return t(this, 1)
                        }
                    }), "trimStart")
                }, function(t, e, n) {
                    n(287), t.exports = n(10).String.trimRight
                }, function(t, e, n) {
                    "use strict";
                    n(47)("trimRight", (function(t) {
                        return function() {
                            return t(this, 2)
                        }
                    }), "trimEnd")
                }, function(t, e, n) {
                    n(289), t.exports = n(70).f("asyncIterator")
                }, function(t, e, n) {
                    n(95)("asyncIterator")
                }, function(t, e, n) {
                    n(291), t.exports = n(10).Object.getOwnPropertyDescriptors
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(122),
                        o = n(19),
                        s = n(24),
                        u = n(86);
                    r(r.S, "Object", {
                        getOwnPropertyDescriptors: function(t) {
                            for (var e, n, r = o(t), a = s.f, c = i(r), f = {}, l = 0; c.length > l;) void 0 !== (n = a(r, e = c[l++])) && u(f, e, n);
                            return f
                        }
                    })
                }, function(t, e, n) {
                    n(293), t.exports = n(10).Object.values
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(124)(!1);
                    r(r.S, "Object", {
                        values: function(t) {
                            return i(t)
                        }
                    })
                }, function(t, e, n) {
                    n(295), t.exports = n(10).Object.entries
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(124)(!0);
                    r(r.S, "Object", {
                        entries: function(t) {
                            return i(t)
                        }
                    })
                }, function(t, e, n) {
                    "use strict";
                    n(116), n(297), t.exports = n(10).Promise.finally
                }, function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(10),
                        o = n(2),
                        s = n(55),
                        u = n(118);
                    r(r.P + r.R, "Promise", {
                        finally: function(t) {
                            var e = s(this, i.Promise || o.Promise),
                                n = "function" == typeof t;
                            return this.then(n ? function(n) {
                                return u(e, t()).then((function() {
                                    return n
                                }))
                            } : t, n ? function(n) {
                                return u(e, t()).then((function() {
                                    throw n
                                }))
                            } : t)
                        }
                    })
                }, function(t, e, n) {
                    n(299), n(300), n(301), t.exports = n(10)
                }, function(t, e, n) {
                    var r = n(2),
                        i = n(0),
                        o = n(66),
                        s = [].slice,
                        u = /MSIE .\./.test(o),
                        a = function(t) {
                            return function(e, n) {
                                var r = arguments.length > 2,
                                    i = !!r && s.call(arguments, 2);
                                return t(r ? function() {
                                    ("function" == typeof e ? e : Function(e)).apply(this, i)
                                } : e, n)
                            }
                        };
                    i(i.G + i.B + i.F * u, {
                        setTimeout: a(r.setTimeout),
                        setInterval: a(r.setInterval)
                    })
                }, function(t, e, n) {
                    var r = n(0),
                        i = n(92);
                    r(r.G + r.B, {
                        setImmediate: i.set,
                        clearImmediate: i.clear
                    })
                }, function(t, e, n) {
                    for (var r = n(89), i = n(39), o = n(15), s = n(2), u = n(18), a = n(48), c = n(8), f = c("iterator"), l = c("toStringTag"), h = a.Array, d = {
                            CSSRuleList: !0,
                            CSSStyleDeclaration: !1,
                            CSSValueList: !1,
                            ClientRectList: !1,
                            DOMRectList: !1,
                            DOMStringList: !1,
                            DOMTokenList: !0,
                            DataTransferItemList: !1,
                            FileList: !1,
                            HTMLAllCollection: !1,
                            HTMLCollection: !1,
                            HTMLFormElement: !1,
                            HTMLSelectElement: !1,
                            MediaList: !0,
                            MimeTypeArray: !1,
                            NamedNodeMap: !1,
                            NodeList: !0,
                            PaintRequestList: !1,
                            Plugin: !1,
                            PluginArray: !1,
                            SVGLengthList: !1,
                            SVGNumberList: !1,
                            SVGPathSegList: !1,
                            SVGPointList: !1,
                            SVGStringList: !1,
                            SVGTransformList: !1,
                            SourceBufferList: !1,
                            StyleSheetList: !0,
                            TextTrackCueList: !1,
                            TextTrackList: !1,
                            TouchList: !1
                        }, p = i(d), v = 0; v < p.length; v++) {
                        var g, m = p[v],
                            y = d[m],
                            _ = s[m],
                            b = _ && _.prototype;
                        if (b && (b[f] || u(b, f, h), b[l] || u(b, l, m), a[m] = h, y))
                            for (g in r) b[g] || o(b, g, r[g], !0)
                    }
                }, function(t, e) {
                    function n(t) {
                        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        })(t)
                    }

                    function r(e) {
                        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
                            return n(t)
                        } : t.exports = r = function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                        }, r(e)
                    }
                    t.exports = r
                }, function(t, e) {
                    t.exports = function(t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }
                }, function(t, e) {
                    function n(e, r) {
                        return t.exports = n = Object.setPrototypeOf || function(t, e) {
                            return t.__proto__ = e, t
                        }, n(e, r)
                    }
                    t.exports = n
                }, function(t, e) {
                    t.exports = function(t) {
                        if (Array.isArray(t)) return t
                    }
                }, function(t, e) {
                    t.exports = function(t, e) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var s, u = t[Symbol.iterator](); !(r = (s = u.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                }, function(t, e) {
                    t.exports = function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }, function(t, e) {
                    var n, r, i = t.exports = {};

                    function o() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function s() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function u(t) {
                        if (n === setTimeout) return setTimeout(t, 0);
                        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                        try {
                            return n(t, 0)
                        } catch (e) {
                            try {
                                return n.call(null, t, 0)
                            } catch (e) {
                                return n.call(this, t, 0)
                            }
                        }
                    }! function() {
                        try {
                            n = "function" == typeof setTimeout ? setTimeout : o
                        } catch (t) {
                            n = o
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch (t) {
                            r = s
                        }
                    }();
                    var a, c = [],
                        f = !1,
                        l = -1;

                    function h() {
                        f && a && (f = !1, a.length ? c = a.concat(c) : l = -1, c.length && d())
                    }

                    function d() {
                        if (!f) {
                            var t = u(h);
                            f = !0;
                            for (var e = c.length; e;) {
                                for (a = c, c = []; ++l < e;) a && a[l].run();
                                l = -1, e = c.length
                            }
                            a = null, f = !1,
                                function(t) {
                                    if (r === clearTimeout) return clearTimeout(t);
                                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                                    try {
                                        r(t)
                                    } catch (e) {
                                        try {
                                            return r.call(null, t)
                                        } catch (e) {
                                            return r.call(this, t)
                                        }
                                    }
                                }(t)
                        }
                    }

                    function p(t, e) {
                        this.fun = t, this.array = e
                    }

                    function v() {}
                    i.nextTick = function(t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        c.push(new p(t, e)), 1 !== c.length || f || u(d)
                    }, p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(t) {
                        return []
                    }, i.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }, i.cwd = function() {
                        return "/"
                    }, i.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }, i.umask = function() {
                        return 0
                    }
                }, function(t, e) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || new Function("return this")()
                    } catch (t) {
                        "object" == typeof window && (n = window)
                    }
                    t.exports = n
                }, function(t, e) {
                    (function(e) {
                        t.exports = e
                    }).call(this, {})
                }, function(t, e) {
                    var n = function(t) {
                        null == t && (t = (new Date).getTime()), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, t.constructor == Array ? this.init_by_array(t, t.length) : this.init_seed(t)
                    };
                    n.prototype.init_seed = function(t) {
                        for (this.mt[0] = t >>> 0, this.mti = 1; this.mti < this.N; this.mti++) t = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (1812433253 * ((4294901760 & t) >>> 16) << 16) + 1812433253 * (65535 & t) + this.mti, this.mt[this.mti] >>>= 0
                    }, n.prototype.init_by_array = function(t, e) {
                        var n, r, i;
                        for (this.init_seed(19650218), n = 1, r = 0, i = this.N > e ? this.N : e; i; i--) {
                            var o = this.mt[n - 1] ^ this.mt[n - 1] >>> 30;
                            this.mt[n] = (this.mt[n] ^ (1664525 * ((4294901760 & o) >>> 16) << 16) + 1664525 * (65535 & o)) + t[r] + r, this.mt[n] >>>= 0, r++, ++n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1), r >= e && (r = 0)
                        }
                        for (i = this.N - 1; i; i--) o = this.mt[n - 1] ^ this.mt[n - 1] >>> 30, this.mt[n] = (this.mt[n] ^ (1566083941 * ((4294901760 & o) >>> 16) << 16) + 1566083941 * (65535 & o)) - n, this.mt[n] >>>= 0, ++n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1);
                        this.mt[0] = 2147483648
                    }, n.prototype.random_int = function() {
                        var t, e = new Array(0, this.MATRIX_A);
                        if (this.mti >= this.N) {
                            var n;
                            for (this.mti == this.N + 1 && this.init_seed(5489), n = 0; n < this.N - this.M; n++) t = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + this.M] ^ t >>> 1 ^ e[1 & t];
                            for (; n < this.N - 1; n++) t = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + (this.M - this.N)] ^ t >>> 1 ^ e[1 & t];
                            t = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ t >>> 1 ^ e[1 & t], this.mti = 0
                        }
                        return t = this.mt[this.mti++], t ^= t >>> 11, t ^= t << 7 & 2636928640, t ^= t << 15 & 4022730752, (t ^= t >>> 18) >>> 0
                    }, n.prototype.random_int31 = function() {
                        return this.random_int() >>> 1
                    }, n.prototype.random_incl = function() {
                        return this.random_int() * (1 / 4294967295)
                    }, n.prototype.random = function() {
                        return this.random_int() * (1 / 4294967296)
                    }, n.prototype.random_excl = function() {
                        return (this.random_int() + .5) * (1 / 4294967296)
                    }, n.prototype.random_long = function() {
                        return (67108864 * (this.random_int() >>> 5) + (this.random_int() >>> 6)) * (1 / 9007199254740992)
                    }, t.exports = n
                }, function(t, e, n) {
                    var r = n(27);
                    t.exports = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
                        return t
                    }
                }, function(t, e, n) {
                    "use strict";
                    n.r(e);
                    var r = {};
                    n.r(r), n.d(r, "DefaultSessionTimeoutMinutes", (function() {
                        return I
                    })), n.d(r, "Version", (function() {
                        return k
                    })), n.d(r, "SdidPersistModeOff", (function() {
                        return O
                    })), n.d(r, "SdidPersistModeAuto", (function() {
                        return A
                    })), n.d(r, "SdidPersistModeManual", (function() {
                        return P
                    }));
                    var i = {};
                    n.r(i), n.d(i, "TabClosed", (function() {
                        return j
                    }));
                    var o = {};
                    n.r(o), n.d(o, "ConversionEventApi", (function() {
                        return T
                    })), n.d(o, "CustomUserIdEventApi", (function() {
                        return C
                    })), n.d(o, "EventApi", (function() {
                        return N
                    })), n.d(o, "PageVisitApi", (function() {
                        return R
                    })), n.d(o, "PageVisitEventName", (function() {
                        return U
                    }));
                    var s = {};
                    n.r(s), n.d(s, "ApiQueueKey", (function() {
                        return M
                    })), n.d(s, "CustomUserIdKey", (function() {
                        return D
                    })), n.d(s, "DidVisitSiteKey", (function() {
                        return F
                    })), n.d(s, "GlobalStoragePrefix", (function() {
                        return L
                    })), n.d(s, "MaxApisInQueue", (function() {
                        return W
                    })), n.d(s, "SessionIdKey", (function() {
                        return H
                    })), n.d(s, "SingularDeviceIdKey", (function() {
                        return B
                    })), n.d(s, "SingularInstanceIdKey", (function() {
                        return V
                    })), n.d(s, "StorageEnabledTestKey", (function() {
                        return K
                    })), n.d(s, "StorageEnabledTestValue", (function() {
                        return G
                    })), n.d(s, "StorageLastEventTimestamp", (function() {
                        return q
                    })), n.d(s, "StorageTouchpointTimestampKey", (function() {
                        return X
                    })), n.d(s, "StorageWebUrlKey", (function() {
                        return z
                    })), n.d(s, "Types", (function() {
                        return J
                    }));
                    var u = {};
                    n.r(u), n.d(u, "AppName", (function() {
                        return Q
                    })), n.d(u, "BrowserAvailableMemory", (function() {
                        return $
                    })), n.d(u, "BrowserUsedMemory", (function() {
                        return Y
                    })), n.d(u, "ClientHints", (function() {
                        return Z
                    })), n.d(u, "CustomUserId", (function() {
                        return tt
                    })), n.d(u, "CurrentDeviceTime", (function() {
                        return et
                    })), n.d(u, "DeeplinkParam", (function() {
                        return nt
                    })), n.d(u, "DeferredDeeplinkParam", (function() {
                        return rt
                    })), n.d(u, "DocumentReferrer", (function() {
                        return it
                    })), n.d(u, "EventId", (function() {
                        return ot
                    })), n.d(u, "EventName", (function() {
                        return st
                    })), n.d(u, "EventProductName", (function() {
                        return ut
                    })), n.d(u, "Extra", (function() {
                        return at
                    })), n.d(u, "IsConversion", (function() {
                        return ct
                    })), n.d(u, "IsFirstVisit", (function() {
                        return ft
                    })), n.d(u, "IsPageRefreshed", (function() {
                        return lt
                    })), n.d(u, "IsRevenueEvent", (function() {
                        return ht
                    })), n.d(u, "Keyspace", (function() {
                        return dt
                    })), n.d(u, "Lag", (function() {
                        return pt
                    })), n.d(u, "OS", (function() {
                        return vt
                    })), n.d(u, "Owner", (function() {
                        return gt
                    })), n.d(u, "PassthroughParam", (function() {
                        return mt
                    })), n.d(u, "Platform", (function() {
                        return yt
                    })), n.d(u, "PlatformWeb", (function() {
                        return _t
                    })), n.d(u, "PreviousSdid", (function() {
                        return bt
                    })), n.d(u, "ProductId", (function() {
                        return St
                    })), n.d(u, "RevenueAmount", (function() {
                        return wt
                    })), n.d(u, "RevenueCurrency", (function() {
                        return xt
                    })), n.d(u, "ScreenHeight", (function() {
                        return Et
                    })), n.d(u, "ScreenWidth", (function() {
                        return It
                    })), n.d(u, "SdidPersistMode", (function() {
                        return kt
                    })), n.d(u, "SdidPersistFailedReason", (function() {
                        return Ot
                    })), n.d(u, "SdkVersion", (function() {
                        return At
                    })), n.d(u, "SessionId", (function() {
                        return Pt
                    })), n.d(u, "SingularDeviceId", (function() {
                        return jt
                    })), n.d(u, "SingularInstanceId", (function() {
                        return Tt
                    })), n.d(u, "StorageType", (function() {
                        return Ct
                    })), n.d(u, "Timezone", (function() {
                        return Nt
                    })), n.d(u, "TouchpointTimestamp", (function() {
                        return Rt
                    })), n.d(u, "UserAgent", (function() {
                        return Ut
                    })), n.d(u, "UUID", (function() {
                        return Mt
                    })), n.d(u, "UUID_REGEX", (function() {
                        return Dt
                    })), n.d(u, "WebParams", (function() {
                        return Ft
                    })), n.d(u, "WebUrl", (function() {
                        return Lt
                    })), n.d(u, "WebUrlMarketingParams", (function() {
                        return Wt
                    }));
                    var a = {};
                    n.r(a), n.d(a, "BaseUrl", (function() {
                        return Ht
                    })), n.d(a, "ContentType", (function() {
                        return Bt
                    })), n.d(a, "ContentTypeValue", (function() {
                        return Vt
                    })), n.d(a, "Endpoints", (function() {
                        return Kt
                    })), n.d(a, "Method", (function() {
                        return Gt
                    })), n.d(a, "PostParams", (function() {
                        return qt
                    })), n.d(a, "Status", (function() {
                        return Xt
                    })), n.d(a, "RequestTimeoutMs", (function() {
                        return zt
                    })), n.d(a, "ValidResponse", (function() {
                        return Jt
                    })), n.d(a, "ValidResponseCode", (function() {
                        return Qt
                    }));
                    var c = {};
                    n.r(c), n.d(c, "Android", (function() {
                        return $t
                    })), n.d(c, "iOS", (function() {
                        return Yt
                    })), n.d(c, "Linux", (function() {
                        return Zt
                    })), n.d(c, "MacOs", (function() {
                        return te
                    })), n.d(c, "Unknown", (function() {
                        return ee
                    })), n.d(c, "Windows", (function() {
                        return ne
                    })), n.d(c, "iOSPlatforms", (function() {
                        return re
                    })), n.d(c, "MacOsPlatforms", (function() {
                        return ie
                    })), n.d(c, "WindowsPlatforms", (function() {
                        return oe
                    }));
                    var f = {};
                    n.r(f), n.d(f, "Debug", (function() {
                        return se
                    })), n.d(f, "Info", (function() {
                        return ue
                    })), n.d(f, "Warn", (function() {
                        return ae
                    })), n.d(f, "None", (function() {
                        return ce
                    }));
                    var l = {};
                    n.r(l), n.d(l, "HighEntropyValuesKeys", (function() {
                        return fe
                    })), n.d(l, "PlatformKey", (function() {
                        return le
                    }));
                    var h = {};
                    n.r(h), n.d(h, "CookieDomainKey", (function() {
                        return he
                    })), n.d(h, "CookieExpiresKey", (function() {
                        return de
                    })), n.d(h, "MilliSecondsInDay", (function() {
                        return pe
                    })), n.d(h, "CookieExpirationInDays", (function() {
                        return ve
                    })), n.d(h, "SingularDeviceIdKey", (function() {
                        return ge
                    }));
                    var d = n(6),
                        p = n.n(d),
                        v = n(7),
                        g = n.n(v),
                        m = n(1),
                        y = n.n(m),
                        _ = n(34),
                        b = n.n(_),
                        S = n(27),
                        w = n.n(S),
                        x = n(35),
                        E = n.n(x),
                        I = 30,
                        k = "WebSDK-v".concat("1.2.8"),
                        O = "off",
                        A = "auto",
                        P = "manual",
                        j = "onbeforeunload",
                        T = "conversion_event",
                        C = "custom_user_id_event",
                        N = "event",
                        R = "page_visit",
                        U = "__PAGE_VISIT__",
                        M = "singular_api_queue",
                        D = "singular_custom_user_id",
                        F = "did_visit_site",
                        L = "global",
                        W = 1e3,
                        H = "singular_session_id",
                        B = "singular_id",
                        V = "singular_instance_id",
                        K = "singular_storage_enabled_test",
                        G = "test_value",
                        q = "last_event_timestamp",
                        X = "touchpoint_timestamp",
                        z = "web_url",
                        J = {
                            Local: "local",
                            Session: "session",
                            Memory: "memory"
                        },
                        Q = "n",
                        $ = "browser_available_memory",
                        Y = "browser_used_memory",
                        Z = "client_hints",
                        tt = "custom_user_id",
                        et = "current_device_time",
                        nt = "_dl",
                        rt = "_ddl",
                        it = "document_referrer",
                        ot = "event_id",
                        st = "n",
                        ut = "product_name",
                        at = "e",
                        ct = "conversion_event",
                        ft = "is_first_visit",
                        lt = "is_page_refreshed",
                        ht = "is_revenue_event",
                        dt = "k",
                        pt = "lag",
                        vt = "os",
                        gt = "a",
                        mt = "_p",
                        yt = "p",
                        _t = "Web",
                        bt = "prev_sdid",
                        St = "i",
                        wt = "r",
                        xt = "pcc",
                        Et = "screen_height",
                        It = "screen_width",
                        kt = "sdid_persist_mode",
                        Ot = "sdid_persist_failed_reason",
                        At = "sdk",
                        Pt = "s",
                        jt = "SDID",
                        Tt = "singular_instance_id",
                        Ct = "storage_type",
                        Nt = "timezone",
                        Rt = "touchpoint_timestamp",
                        Ut = "device_user_agent",
                        Mt = "u",
                        Dt = "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
                        Ft = "_web_params",
                        Lt = "web_url",
                        Wt = {
                            clid_params: ["clid="],
                            singular_p_params: ["pcnid=", "pcrnid=", "pcid=", "pcn=", "psc=", "pscid=", "pscn=", "pcrid=", "pcrn=", "ps=", "psid=", "psn=", "pshid=", "paffid=", "paffn=", "pcc=", "psrc=", "pmed="],
                            singular_wp_params: ["wpcid=", "wpcn=", "wpsc=", "wpscid=", "wpscn=", "wpcrid=", "wpcrn=", "wps=", "wpsid=", "wpsn=", "wpshid=", "wpaffid=", "wpaffn=", "wpkw=", "wpsrc=", "wpmed="],
                            utm_params: ["utm_.+="],
                            additional_params: ["kw=", "an=", "ud="]
                        },
                        Ht = "https://sdk-api-v1.singular.net/api/v1/",
                        Bt = "Content-Type",
                        Vt = "application/json",
                        Kt = {
                            Session: "start",
                            Event: "event",
                            DeviceCustomUserId: "set_device_for_custom_id"
                        },
                        Gt = "POST",
                        qt = [at, Lt, Ut, ut, it, Z],
                        Xt = "status",
                        zt = 3e4,
                        Jt = "ok",
                        Qt = 200,
                        $t = "Android",
                        Yt = "iOS",
                        Zt = "Linux",
                        te = "MacOS",
                        ee = "Unknown",
                        ne = "Windows",
                        re = ["iPhone", "iPad", "iPod"],
                        ie = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
                        oe = ["Win32", "Win64", "Windows", "WinCE"],
                        se = 3,
                        ue = 2,
                        ae = 1,
                        ce = 0,
                        fe = ["platformVersion", le, "uaFullVersion", "model", "architecture"],
                        le = "platform",
                        he = "domain",
                        de = "expires",
                        pe = 864e5,
                        ve = 365 * pe,
                        ge = "singular_device_id",
                        me = n(56),
                        ye = n.n(me),
                        _e = n(14),
                        be = n.n(_e),
                        Se = n(31),
                        we = n.n(Se),
                        xe = n(126),
                        Ee = n.n(xe),
                        Ie = n(127),
                        ke = n.n(Ie),
                        Oe = function() {
                            function t() {
                                p()(this, t)
                            }
                            var e, n, i, o;
                            return g()(t, null, [{
                                key: "generateUUID",
                                value: function() {
                                    var t = window.crypto ? window.crypto : window.msCrypto;
                                    return t && t.getRandomValues && t.getRandomValues(new Uint8Array(1)) || (t = {
                                        getRandomValues: function(t) {
                                            return ke()(t)
                                        }
                                    }), ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(e) {
                                        return (e ^ t.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
                                    }))
                                }
                            }, {
                                key: "isUUID",
                                value: function(t) {
                                    return RegExp(u.UUID_REGEX).test(t)
                                }
                            }, {
                                key: "getCurrentTimestamp",
                                value: function() {
                                    return Math.round((new Date).getTime() / 1e3)
                                }
                            }, {
                                key: "getOS",
                                value: (o = we()(be.a.mark((function t() {
                                    var e, n;
                                    return be.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, e = navigator.platform || "", t.next = 4, this._getUserAgentInfo();
                                            case 4:
                                                if (n = t.sent, !c.MacOsPlatforms.includes(e)) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return", c.MacOs);
                                            case 9:
                                                if (!c.iOSPlatforms.includes(e) && !/iPad|iPhone|iPod/.test(n)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return t.abrupt("return", c.iOS);
                                            case 13:
                                                if (!c.WindowsPlatforms.includes(e)) {
                                                    t.next = 17;
                                                    break
                                                }
                                                return t.abrupt("return", c.Windows);
                                            case 17:
                                                if (!/Android/.test(n)) {
                                                    t.next = 21;
                                                    break
                                                }
                                                return t.abrupt("return", c.Android);
                                            case 21:
                                                if (!/Linux/.test(e)) {
                                                    t.next = 23;
                                                    break
                                                }
                                                return t.abrupt("return", c.Linux);
                                            case 23:
                                                t.next = 27;
                                                break;
                                            case 25:
                                                t.prev = 25, t.t0 = t.catch(0);
                                            case 27:
                                                return t.abrupt("return", c.Unknown);
                                            case 28:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this, [
                                        [0, 25]
                                    ])
                                }))), function() {
                                    return o.apply(this, arguments)
                                })
                            }, {
                                key: "isNullOrEmpty",
                                value: function(t) {
                                    return null == t || "" === t
                                }
                            }, {
                                key: "calculateHash",
                                value: function(t, e) {
                                    return Ee.a.hex(e + t)
                                }
                            }, {
                                key: "getTimeZone",
                                value: function() {
                                    return (new Date).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]
                                }
                            }, {
                                key: "getBrowserAvailableMemory",
                                value: function() {
                                    try {
                                        return window.performance.hasOwnProperty("memory") && window.performance.memory.hasOwnProperty("jsHeapSizeLimit") ? window.performance.memory.jsHeapSizeLimit : null
                                    } catch (t) {
                                        return null
                                    }
                                }
                            }, {
                                key: "getBrowserUsedMemory",
                                value: function() {
                                    try {
                                        return window.performance.hasOwnProperty("memory") && window.performance.memory.hasOwnProperty("usedJSHeapSize") ? window.performance.memory.usedJSHeapSize : null
                                    } catch (t) {
                                        return null
                                    }
                                }
                            }, {
                                key: "buildWebToAppLink",
                                value: function(t, e, n, r, i) {
                                    if (!this.isValidUrl(t)) return null;
                                    var o = this.parseQueryFromUrl(t),
                                        s = this.extractQueryStringWithFragment(e);
                                    this.isNullOrEmpty(s) || (o[u.WebParams] = s), this.isNullOrEmpty(n) || (o[u.DeeplinkParam] = n), this.isNullOrEmpty(r) || (o[u.PassthroughParam] = r), this.isNullOrEmpty(i) || (o[u.DeferredDeeplinkParam] = i);
                                    var a = Object.keys(o).map((function(t) {
                                        return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(o[t]))
                                    }));
                                    return "".concat(this.extractUrlWithPath(t), "?").concat(a.join("&"))
                                }
                            }, {
                                key: "parseQueryFromUrl",
                                value: function(t) {
                                    if (this.isNullOrEmpty(t)) return {};
                                    var e = t.split("?");
                                    if (e.length <= 1) return {};
                                    for (var n = {}, r = e[1].split("#")[0].split("&"), i = 0; i < r.length; i++) {
                                        var o = r[i].split("=");
                                        n[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "")
                                    }
                                    return n
                                }
                            }, {
                                key: "extractUrlWithPath",
                                value: function(t) {
                                    return this.isNullOrEmpty(t) ? null : t.split("?")[0]
                                }
                            }, {
                                key: "isValidUrl",
                                value: function(t) {
                                    return !this.isNullOrEmpty(t) && /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t)
                                }
                            }, {
                                key: "extractQueryStringWithFragment",
                                value: function(t) {
                                    if (this.isNullOrEmpty(t)) return null;
                                    var e = t.split("?");
                                    return e.length >= 2 && !this.isNullOrEmpty(e[1]) || (e = t.split("#")).length >= 2 && !this.isNullOrEmpty(e[1]) ? e[1] : ""
                                }
                            }, {
                                key: "isPageRefreshed",
                                value: function() {
                                    try {
                                        if (!window.performance || 1 !== window.performance.navigation.type) return !1
                                    } catch (t) {
                                        return !1
                                    }
                                    return !0
                                }
                            }, {
                                key: "getClientHints",
                                value: function() {
                                    return this._getDataFromClientHints(l.HighEntropyValuesKeys)
                                }
                            }, {
                                key: "setSdkWrapper",
                                value: function(e) {
                                    t.isNullOrEmpty(e) || (this._sdkWrapper = e)
                                }
                            }, {
                                key: "getSdkVersion",
                                value: function() {
                                    return this._sdkWrapper ? "".concat(r.Version, "-").concat(this._sdkWrapper) : r.Version
                                }
                            }, {
                                key: "getCookie",
                                value: function(e) {
                                    var n = document.cookie;
                                    if (t.isNullOrEmpty(n)) return null;
                                    var r = document.cookie.split(";"),
                                        i = e + "=",
                                        o = null;
                                    return r.forEach((function(t) {
                                        0 === (t = t.trim()).indexOf(i) && (o = decodeURIComponent(t.substring(i.length, t.length)))
                                    })), o
                                }
                            }, {
                                key: "setCookie",
                                value: function(e, n, r) {
                                    if (!(t.isNullOrEmpty(e) || t.isNullOrEmpty(n) || t.isNullOrEmpty(r))) {
                                        var i = t._getCookieExpirationDate();
                                        document.cookie = "".concat(e, "=").concat(encodeURIComponent(n), "; ").concat(h.CookieDomainKey, "=").concat(r, "; ").concat(h.CookieExpiresKey, "=").concat(i.toGMTString(), "; path=/")
                                    }
                                }
                            }, {
                                key: "_getCookieExpirationDate",
                                value: function() {
                                    var t = new Date;
                                    return t.setTime(t.getTime() + h.CookieExpirationInDays), t
                                }
                            }, {
                                key: "_getUserAgentInfo",
                                value: (i = we()(be.a.mark((function t() {
                                    return be.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (navigator.userAgentData) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return", navigator.userAgent || "");
                                            case 2:
                                                return t.next = 4, this._getClientHintsPlatform();
                                            case 4:
                                                return t.abrupt("return", t.sent);
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                }))), function() {
                                    return i.apply(this, arguments)
                                })
                            }, {
                                key: "_getClientHintsPlatform",
                                value: (n = we()(be.a.mark((function t() {
                                    var e;
                                    return be.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, this._getDataFromClientHints([l.PlatformKey]);
                                            case 2:
                                                if (e = t.sent) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.abrupt("return", "");
                                            case 5:
                                                return t.abrupt("return", e[l.PlatformKey] || "");
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                }))), function() {
                                    return n.apply(this, arguments)
                                })
                            }, {
                                key: "_getDataFromClientHints",
                                value: (e = we()(be.a.mark((function t(e) {
                                    return be.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (navigator.userAgentData) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return", null);
                                            case 2:
                                                return t.next = 4, navigator.userAgentData.getHighEntropyValues(e);
                                            case 4:
                                                return t.abrupt("return", t.sent);
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))), function(t) {
                                    return e.apply(this, arguments)
                                })
                            }, {
                                key: "extractMarketingData",
                                value: function(t) {
                                    var e = [],
                                        n = !0,
                                        r = !1,
                                        i = void 0;
                                    try {
                                        for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                            var a = o.value;
                                            for (var c in u.WebUrlMarketingParams) {
                                                var f = !0,
                                                    l = !1,
                                                    h = void 0;
                                                try {
                                                    for (var d, p = u.WebUrlMarketingParams[c][Symbol.iterator](); !(f = (d = p.next()).done); f = !0) {
                                                        var v = d.value;
                                                        RegExp("^" + v).test(a + "=") && e.push(a)
                                                    }
                                                } catch (t) {
                                                    l = !0, h = t
                                                } finally {
                                                    try {
                                                        f || null == p.return || p.return()
                                                    } finally {
                                                        if (l) throw h
                                                    }
                                                }
                                            }
                                        }
                                    } catch (t) {
                                        r = !0, i = t
                                    } finally {
                                        try {
                                            n || null == s.return || s.return()
                                        } finally {
                                            if (r) throw i
                                        }
                                    }
                                    return e
                                }
                            }, {
                                key: "appendQueryParamsToUrl",
                                value: function(t, e, n) {
                                    return "".concat(n.split(t)[0], "?").concat(e).concat("?" == t ? "&" : "#").concat(n.split(t)[1])
                                }
                            }]), t
                        }(),
                        Ae = function() {
                            function t() {
                                p()(this, t)
                            }
                            return g()(t, null, [{
                                key: "setLogLevel",
                                value: function(t) {
                                    this._logLevel = t
                                }
                            }, {
                                key: "debug",
                                value: function(t) {
                                    this._logLevel
                                }
                            }, {
                                key: "info",
                                value: function(t) {
                                    this._logLevel
                                }
                            }, {
                                key: "warn",
                                value: function(t) {
                                    this._logLevel
                                }
                            }]), t
                        }();
                    y()(Ae, "_logLevel", f.None);
                    var Pe = function() {
                        function t(e, n) {
                            p()(this, t), y()(this, "_isInitialized", !1), t.getAvailableStorageType(), this._storagePrefix = n, this._isInitialized = !0, e === s.Types.Local && t._isLocalStorageAvailable() ? this._storage = localStorage : e !== s.Types.Local && e !== s.Types.Session || !t._isSessionStorageAvailable() ? this._buildMemoryStorage() : this._storage = sessionStorage
                        }
                        return g()(t, [{
                            key: "getItem",
                            value: function(t) {
                                return Oe.isNullOrEmpty(t) || !this._isInitialized ? null : this._storage.getItem("".concat(this._storagePrefix, "_").concat(t))
                            }
                        }, {
                            key: "setItem",
                            value: function(t, e) {
                                !Oe.isNullOrEmpty(t) && e && this._isInitialized && this._storage.setItem("".concat(this._storagePrefix, "_").concat(t), e)
                            }
                        }, {
                            key: "removeItem",
                            value: function(t) {
                                !Oe.isNullOrEmpty(t) && this._isInitialized && this._storage.removeItem("".concat(this._storagePrefix, "_").concat(t))
                            }
                        }, {
                            key: "_buildMemoryStorage",
                            value: function() {
                                var t = this;
                                Ae.warn("Using memory storage"), this._storage = {
                                    _data: {},
                                    setItem: function(e, n) {
                                        t._storage._data[e] = n
                                    },
                                    getItem: function(e) {
                                        return t._storage._data[e]
                                    },
                                    removeItem: function(e) {
                                        delete t._storage._data[e]
                                    }
                                }
                            }
                        }], [{
                            key: "getAvailableStorageType",
                            value: function() {
                                return this._availableStorageType || (this._isLocalStorageAvailable() ? this._availableStorageType = s.Types.Local : this._isSessionStorageAvailable() ? this._availableStorageType = s.Types.Session : this._availableStorageType = s.Types.Memory), this._availableStorageType
                            }
                        }, {
                            key: "_isLocalStorageAvailable",
                            value: function() {
                                if (this._availableStorageType === s.Types.Local) return !0;
                                try {
                                    localStorage.setItem(s.StorageEnabledTestKey, s.StorageEnabledTestValue);
                                    var t = localStorage.getItem(s.StorageEnabledTestKey) === s.StorageEnabledTestValue;
                                    return localStorage.removeItem(s.StorageEnabledTestKey), t
                                } catch (t) {
                                    return !1
                                }
                            }
                        }, {
                            key: "_isSessionStorageAvailable",
                            value: function() {
                                if (this._availableStorageType === s.Types.Local || this._availableStorageType === s.Types.Session) return !0;
                                try {
                                    sessionStorage.setItem(s.StorageEnabledTestKey, s.StorageEnabledTestValue);
                                    var t = sessionStorage.getItem(s.StorageEnabledTestKey) === s.StorageEnabledTestValue;
                                    return sessionStorage.removeItem(s.StorageEnabledTestKey), t
                                } catch (t) {
                                    return !1
                                }
                            }
                        }]), t
                    }();
                    y()(Pe, "_availableStorageType", void 0);
                    var je = function() {
                        function t() {
                            p()(this, t)
                        }
                        return g()(t, [{
                            key: "init",
                            value: function(t) {
                                return this._singularConfig = t, this._storage = new Pe(s.Types.Local, this.getStoragePrefix()), this._singularDeviceIdStorage = new Pe(s.Types.Local, s.GlobalStoragePrefix), this._isFirstVisit = null, this._newSessionIdNeeded = !1, this.setWebUrl(), this.loadSingularPersistentData(), this
                            }
                        }, {
                            key: "loadSingularPersistentData",
                            value: function() {
                                this._sdidPersistMode = r.SdidPersistModeOff, this._sdidPersistFailReason = null, this._previousSdid = null, this._singularDeviceId = null, this._instanceId = null, this.getSingularDeviceId(), this.getCustomUserId(), this.getSingularInstanceId(), this._persistSingularDeviceIdIfNeeded()
                            }
                        }, {
                            key: "setWebUrl",
                            value: function() {
                                var t = this._storage.getItem(s.StorageWebUrlKey),
                                    e = this._storage.getItem(s.StorageTouchpointTimestampKey);
                                !t || this._isWebUrlContainingMarketingData(window.location.href) ? (this._webUrl = window.location.href, this._touchpointTimestamp = Oe.getCurrentTimestamp(), this._storage.setItem(s.StorageWebUrlKey, this._webUrl), this._storage.setItem(s.StorageTouchpointTimestampKey, this._touchpointTimestamp), this._newSessionIdNeeded = !0) : (this._webUrl = t, this._touchpointTimestamp = e)
                            }
                        }, {
                            key: "getSingularDeviceId",
                            value: function() {
                                if (this._singularDeviceId) return this._singularDeviceId;
                                var t = this._singularDeviceIdStorage.getItem(s.SingularDeviceIdKey);
                                if (this._singularConfig._singularDeviceId) this._sdidPersistMode = r.SdidPersistModeManual, Oe.isUUID(this._singularConfig._singularDeviceId) ? (Ae.debug("Persistent Singular Device Id was set manually"), this._singularDeviceIdStorage.setItem(s.SingularDeviceIdKey, this._singularConfig._singularDeviceId)) : (Ae.debug("Persistent Singular Device Id provided was not in uuid format"), this._sdidPersistFailReason = "invalid udid:".concat(this._singularConfig._singularDeviceId));
                                else if (!Oe.isNullOrEmpty(this._singularConfig._autoPersistDomain)) {
                                    var e = Oe.getCookie(h.SingularDeviceIdKey);
                                    this._sdidPersistMode = r.SdidPersistModeAuto, null != e && ("" === e ? this._sdidPersistFailReason = "singular sdid cookie was set to an empty string" : Oe.isUUID(e) ? (Ae.debug("Persistent Singular Device Id was set automatically from cookies"), this._singularDeviceIdStorage.setItem(s.SingularDeviceIdKey, e)) : this._sdidPersistFailReason = "invalid udid:".concat(e))
                                }
                                return this._singularDeviceId = this._getPersistentUUID(this._singularDeviceIdStorage, s.SingularDeviceIdKey), Oe.isNullOrEmpty(t) || this._singularDeviceId === t || (this._previousSdid = t), this._singularDeviceId
                            }
                        }, {
                            key: "getSdidPersistMode",
                            value: function() {
                                return this._sdidPersistMode
                            }
                        }, {
                            key: "getSdidPersistFailReason",
                            value: function() {
                                return this._sdidPersistFailReason
                            }
                        }, {
                            key: "getPreviousSdid",
                            value: function() {
                                return this._previousSdid
                            }
                        }, {
                            key: "getStoragePrefix",
                            value: function() {
                                return "".concat(this._singularConfig.apikey, "_").concat(this._singularConfig.productId)
                            }
                        }, {
                            key: "getCustomUserId",
                            value: function() {
                                return this._customUserId || (this._customUserId = this._storage.getItem(s.CustomUserIdKey)), this._customUserId
                            }
                        }, {
                            key: "getWebUrl",
                            value: function() {
                                return this._webUrl
                            }
                        }, {
                            key: "getTouchpointTimestamp",
                            value: function() {
                                return this._touchpointTimestamp
                            }
                        }, {
                            key: "setCustomUserId",
                            value: function(t) {
                                this._customUserId = t, this._storage.setItem(s.CustomUserIdKey, t)
                            }
                        }, {
                            key: "unsetCustomUserId",
                            value: function() {
                                this._customUserId = null, this._storage.removeItem(s.CustomUserIdKey)
                            }
                        }, {
                            key: "getSingularConfig",
                            value: function() {
                                return this._singularConfig
                            }
                        }, {
                            key: "getSessionId",
                            value: function() {
                                return this._storage.getItem(s.SessionIdKey)
                            }
                        }, {
                            key: "getSessionIdForPageVisit",
                            value: function() {
                                if (!this._isNewSessionIdNeeded()) return this.getSessionId();
                                var t = this._generateNewSessionId();
                                return this.getSessionId() || this.saveSessionId(t), t
                            }
                        }, {
                            key: "getSingularInstanceId",
                            value: function() {
                                return this._instanceId || (this._instanceId = this._getPersistentUUID(this._storage, s.SingularInstanceIdKey)), this._instanceId
                            }
                        }, {
                            key: "saveSessionId",
                            value: function(t) {
                                this._setSessionId(t)
                            }
                        }, {
                            key: "isFirstVisit",
                            value: function() {
                                return null !== this._isFirstVisit || (this._isFirstVisit = !this._storage.getItem(s.DidVisitSiteKey), this._isFirstVisit && this._storage.setItem(s.DidVisitSiteKey, !0)), this._isFirstVisit
                            }
                        }, {
                            key: "updateLastEventTimestamp",
                            value: function() {
                                this._storage.setItem(s.StorageLastEventTimestamp, Oe.getCurrentTimestamp())
                            }
                        }, {
                            key: "updateSingularConfig",
                            value: function(t) {
                                this._singularConfig = t, t.customUserId && this.setCustomUserId(t.customUserId), this.loadSingularPersistentData()
                            }
                        }, {
                            key: "_getPersistentUUID",
                            value: function(t, e) {
                                var n = t.getItem(e);
                                return n || (n = Oe.generateUUID(), t.setItem(e, n)), n
                            }
                        }, {
                            key: "_isWebUrlContainingMarketingData",
                            value: function(t) {
                                for (var e in u.WebUrlMarketingParams) {
                                    var n = !0,
                                        r = !1,
                                        i = void 0;
                                    try {
                                        for (var o, s = u.WebUrlMarketingParams[e][Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                            var a = o.value;
                                            if (RegExp(a).test(t)) return !0
                                        }
                                    } catch (t) {
                                        r = !0, i = t
                                    } finally {
                                        try {
                                            n || null == s.return || s.return()
                                        } finally {
                                            if (r) throw i
                                        }
                                    }
                                }
                                return !1
                            }
                        }, {
                            key: "_setSessionId",
                            value: function(t) {
                                this._storage.setItem(s.SessionIdKey, t)
                            }
                        }, {
                            key: "_getLastEventTimestamp",
                            value: function() {
                                return this._storage.getItem(s.StorageLastEventTimestamp)
                            }
                        }, {
                            key: "_isNewSessionIdNeeded",
                            value: function() {
                                return this._newSessionIdNeeded || !this.getSessionId() || !this._getLastEventTimestamp() || this._isSessionTimeout()
                            }
                        }, {
                            key: "_isSessionTimeout",
                            value: function() {
                                return Oe.getCurrentTimestamp() - this._getLastEventTimestamp() > this._singularConfig.sessionTimeOutInSeconds
                            }
                        }, {
                            key: "_generateNewSessionId",
                            value: function() {
                                return this._newSessionIdNeeded = !1, Oe.generateUUID()
                            }
                        }, {
                            key: "_persistSingularDeviceIdIfNeeded",
                            value: function() {
                                Oe.isNullOrEmpty(this._singularConfig._autoPersistDomain) || Oe.setCookie(h.SingularDeviceIdKey, this.getSingularDeviceId(), this._singularConfig._autoPersistDomain)
                            }
                        }], [{
                            key: "getInstance",
                            value: function() {
                                return this._instance || (this._instance = new t), this._instance
                            }
                        }]), t
                    }();

                    function Te(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function Ce(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? Te(n, !0).forEach((function(e) {
                                y()(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Te(n).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }
                    y()(je, "_instance", void 0);
                    var Ne = function() {
                        function t() {
                            p()(this, t), y()(this, "_endpoint", void 0), this._extra = {}, this.initApiParams(), je.getInstance().updateLastEventTimestamp()
                        }
                        var e;
                        return g()(t, [{
                            key: "initApiParams",
                            value: function() {
                                var t;
                                this._params = (t = {}, y()(t, u.BrowserAvailableMemory, Oe.getBrowserAvailableMemory()), y()(t, u.BrowserUsedMemory, Oe.getBrowserUsedMemory()), y()(t, u.CustomUserId, je.getInstance().getCustomUserId()), y()(t, u.CurrentDeviceTime, Oe.getCurrentTimestamp()), y()(t, u.EventId, Oe.generateUUID()), y()(t, u.IsConversion, !1), y()(t, u.Keyspace, u.SingularDeviceId), y()(t, u.Owner, je.getInstance().getSingularConfig().apikey), y()(t, u.Platform, u.PlatformWeb), y()(t, u.ProductId, je.getInstance().getSingularConfig().productId), y()(t, u.ScreenHeight, window.screen.height), y()(t, u.ScreenWidth, window.screen.width), y()(t, u.SdkVersion, Oe.getSdkVersion()), y()(t, u.SingularInstanceId, je.getInstance().getSingularInstanceId()), y()(t, u.SingularDeviceId.toLowerCase(), je.getInstance().getSingularDeviceId()), y()(t, u.StorageType, Pe.getAvailableStorageType()), y()(t, u.Timezone, Oe.getTimeZone()), y()(t, u.TouchpointTimestamp, je.getInstance().getTouchpointTimestamp()), y()(t, u.UserAgent, navigator.userAgent), y()(t, u.UUID, je.getInstance().getSingularDeviceId()), t)
                            }
                        }, {
                            key: "sendRequest",
                            value: (e = we()(be.a.mark((function t() {
                                var e, n = this;
                                return be.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Oe.getOS();
                                        case 2:
                                            return this._params[u.OS] = t.sent, t.next = 5, Oe.getClientHints();
                                        case 5:
                                            return (e = t.sent) && (this._params[u.ClientHints] = JSON.stringify(e)), t.abrupt("return", new Promise((function(t) {
                                                Object.keys(n._extra).length > 0 && (n._params[u.Extra] = JSON.stringify(n._extra)), n._params[u.SessionId] || (n._params[u.SessionId] = je.getInstance().getSessionId());
                                                var e = Ce({}, n._params, y()({}, u.Lag, Oe.getCurrentTimestamp() - parseInt(n._params[u.CurrentDeviceTime]))),
                                                    r = n._buildRequestBody(e),
                                                    i = n._buildRequestUrl(e);
                                                Ae.debug("Sending api request\nUrl:".concat(i, "\nBody:").concat(JSON.stringify(r)));
                                                var o = new XMLHttpRequest;
                                                o.open(a.Method, i, !0), o.setRequestHeader(a.ContentType, a.ContentTypeValue), o.timeout = a.RequestTimeoutMs, o.ontimeout = function() {
                                                    t(!1)
                                                }, o.onreadystatechange = function() {
                                                    o.readyState === XMLHttpRequest.DONE && t(n.handleResponse(o))
                                                }, o.send(JSON.stringify(r))
                                            })));
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "handleResponse",
                            value: function(t) {
                                try {
                                    var e = JSON.parse(t.responseText);
                                    return t.status === a.ValidResponseCode && e[a.Status] === a.ValidResponse
                                } catch (t) {
                                    return !1
                                }
                            }
                        }, {
                            key: "_buildRequestBody",
                            value: function(t) {
                                var e = {};
                                if (Object.entries(t).filter((function(t) {
                                        var e = ye()(t, 2),
                                            n = e[0],
                                            r = e[1];
                                        return a.PostParams.includes(n) && !Oe.isNullOrEmpty(r)
                                    })).forEach((function(t) {
                                        var n = ye()(t, 2),
                                            r = n[0],
                                            i = n[1];
                                        e[r] = i
                                    })), 0 === Object.keys(e).length) return {};
                                var n = JSON.stringify(e);
                                return {
                                    payload: n,
                                    signature: Oe.calculateHash(n, je.getInstance().getSingularConfig().secret)
                                }
                            }
                        }, {
                            key: "_buildRequestUrl",
                            value: function(t) {
                                var e = Object.keys(t).filter((function(e) {
                                        return !Oe.isNullOrEmpty(t[e]) && !a.PostParams.includes(e)
                                    })).map((function(e) {
                                        return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(t[e]))
                                    })),
                                    n = "?".concat(e.join("&")),
                                    r = Oe.calculateHash(n, je.getInstance().getSingularConfig().secret);
                                return "".concat(a.BaseUrl).concat(this._endpoint).concat(n, "&h=").concat(r)
                            }
                        }, {
                            key: "eventId",
                            get: function() {
                                return this._params[u.EventId]
                            }
                        }], [{
                            key: "toJsonString",
                            value: function(t) {
                                return Oe.isNullOrEmpty(t) ? null : JSON.stringify(t)
                            }
                        }, {
                            key: "fromJsonString",
                            value: function(t) {
                                if (Oe.isNullOrEmpty(t)) return null;
                                var e = JSON.parse(t),
                                    n = Object.create(this.apiClasses[e._apiType].prototype);
                                return Object.assign(n, e), n
                            }
                        }]), t
                    }();

                    function Re(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function Ue(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? Re(n, !0).forEach((function(e) {
                                y()(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Re(n).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }
                    y()(Ne, "apiClasses", {});
                    var Me = function(t) {
                        function e(t) {
                            var n, r;
                            if (p()(this, e), Oe.isNullOrEmpty(t)) throw new Error("eventName must not be null or empty");
                            return (r = b()(this, w()(e).call(this)))._apiType = o.EventApi, r._endpoint = a.Endpoints.Event, r._params = Ue({}, r._params, (n = {}, y()(n, u.EventProductName, je.getInstance().getSingularConfig().productName), y()(n, u.EventName, t), y()(n, u.IsRevenueEvent, !1), n)), r
                        }
                        return E()(e, t), g()(e, [{
                            key: "withRevenue",
                            value: function(t, e) {
                                if (Oe.isNullOrEmpty(t)) throw new Error("Currency must not be null or empty");
                                if (Oe.isNullOrEmpty(e)) throw new Error("Amount must not be null or empty");
                                return this._extra[u.RevenueCurrency] = t, this._extra[u.RevenueAmount] = e, this._params[u.IsRevenueEvent] = !0, this
                            }
                        }, {
                            key: "withArgs",
                            value: function(t) {
                                return t && 0 !== Object.keys(t).length ? (this._extra = Ue({}, this._extra, {}, t), this) : this
                            }
                        }]), e
                    }(Ne);

                    function De(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }
                    var Fe = function(t) {
                            function e(t) {
                                var n, r;
                                return p()(this, e), (r = b()(this, w()(e).call(this, t)))._apiType = o.ConversionEventApi, r._params = function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? De(n, !0).forEach((function(e) {
                                            y()(t, e, n[e])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : De(n).forEach((function(e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                        }))
                                    }
                                    return t
                                }({}, r._params, (n = {}, y()(n, u.IsConversion, !0), y()(n, u.WebUrl, je.getInstance().getWebUrl()), n)), r
                            }
                            return E()(e, t), e
                        }(Me),
                        Le = function() {
                            function t() {
                                p()(this, t), this._storage = new Pe(s.Types.Session, je.getInstance().getStoragePrefix()), this._queue = this._loadQueueFromStorage()
                            }
                            return g()(t, [{
                                key: "enqueue",
                                value: function(t) {
                                    Oe.isNullOrEmpty(t) || !(t instanceof Ne) || this._queue.length >= s.MaxApisInQueue || (Ae.debug("Enqueued api:".concat(JSON.stringify(t))), this._queue.push(Ne.toJsonString(t)), this._saveQueueToStorage())
                                }
                            }, {
                                key: "dequeue",
                                value: function() {
                                    if (this.isQueueEmpty()) return null;
                                    var t = Ne.fromJsonString(this._queue.shift());
                                    return this._saveQueueToStorage(), Ae.debug("Dequeued api:".concat(JSON.stringify(t))), t
                                }
                            }, {
                                key: "peek",
                                value: function() {
                                    return this.isQueueEmpty() ? null : Ne.fromJsonString(this._queue[0])
                                }
                            }, {
                                key: "isQueueEmpty",
                                value: function() {
                                    return this._queue.length <= 0
                                }
                            }, {
                                key: "_saveQueueToStorage",
                                value: function() {
                                    this._storage.setItem(s.ApiQueueKey, JSON.stringify(this._queue))
                                }
                            }, {
                                key: "_loadQueueFromStorage",
                                value: function() {
                                    var t = this._storage.getItem(s.ApiQueueKey);
                                    return t ? (Ae.info("Api queue loaded from storage"), JSON.parse(t)) : []
                                }
                            }]), t
                        }(),
                        We = n(128),
                        He = n.n(We),
                        Be = function(t) {
                            function e() {
                                var t;
                                p()(this, e);
                                var n = je.getInstance().getSessionIdForPageVisit();
                                (t = b()(this, w()(e).call(this, o.PageVisitEventName)))._apiType = o.PageVisitApi, t._params[u.SessionId] = n, t._params[u.WebUrl] = window.location.href, t._params[u.DocumentReferrer] = document.referrer, t._params[u.IsFirstVisit] = je.getInstance().isFirstVisit(), t._params[u.IsPageRefreshed] = Oe.isPageRefreshed(), t._params[u.SdidPersistMode] = je.getInstance().getSdidPersistMode();
                                var r = je.getInstance().getSdidPersistFailReason();
                                Oe.isNullOrEmpty(r) || (t._params[u.SdidPersistFailedReason] = r);
                                var i = je.getInstance().getPreviousSdid();
                                return Oe.isNullOrEmpty(i) || (t._params[u.PreviousSdid] = i), t
                            }
                            return E()(e, t), g()(e, [{
                                key: "handleResponse",
                                value: function(t) {
                                    var n = He()(w()(e.prototype), "handleResponse", this).call(this, t);
                                    return n && je.getInstance().saveSessionId(this._params[u.SessionId]), n
                                }
                            }]), e
                        }(Fe),
                        Ve = function(t) {
                            function e() {
                                var t;
                                return p()(this, e), (t = b()(this, w()(e).call(this)))._apiType = o.CustomUserIdEventApi, t._endpoint = a.Endpoints.DeviceCustomUserId, t
                            }
                            return E()(e, t), e
                        }(Ne),
                        Ke = function() {
                            function t() {
                                var e = this;
                                p()(this, t), y()(this, "_tabClosed", (function() {
                                    return e._skipFailed = !0, e._startSendingApis()
                                })), this._setSupportedApis(), this._skipFailed = !1, this._isSendingApis = !1, this._storageQueue = new Le, window.addEventListener(i.TabClosed, this._tabClosed), this._startSendingApis()
                            }
                            var e;
                            return g()(t, [{
                                key: "sendApi",
                                value: function(t) {
                                    if (!Oe.isNullOrEmpty(t) && t instanceof Ne) return this._storageQueue.enqueue(t), this._startSendingApis()
                                }
                            }, {
                                key: "_startSendingApis",
                                value: (e = we()(be.a.mark((function t() {
                                    var e;
                                    return be.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!this._isSendingApis) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                this._isSendingApis = !0;
                                            case 3:
                                                if (this._storageQueue.isQueueEmpty()) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return e = this._storageQueue.peek(), t.next = 7, e.sendRequest();
                                            case 7:
                                                if (t.sent || this._skipFailed) {
                                                    t.next = 10;
                                                    break
                                                }
                                                return t.abrupt("break", 13);
                                            case 10:
                                                this._storageQueue.dequeue(), t.next = 3;
                                                break;
                                            case 13:
                                                this._isSendingApis = !1;
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, this)
                                }))), function() {
                                    return e.apply(this, arguments)
                                })
                            }, {
                                key: "_setSupportedApis",
                                value: function() {
                                    var t;
                                    Ne.apiClasses = (t = {}, y()(t, o.ConversionEventApi, Fe), y()(t, o.CustomUserIdEventApi, Ve), y()(t, o.EventApi, Me), y()(t, o.PageVisitApi, Be), t)
                                }
                            }]), t
                        }(),
                        Ge = function() {
                            function t(e) {
                                p()(this, t), this._singularState = je.getInstance().init(e), Oe.isNullOrEmpty(e.customUserId) || this._singularState.setCustomUserId(e.customUserId), Ae.info("SDK is initialized Apikey:".concat(e.apikey, ", Product Id:").concat(e.productId)), this._apiManager = new Ke, this.sendApi(new Be)
                            }
                            return g()(t, [{
                                key: "sendApi",
                                value: function(t) {
                                    this._apiManager.sendApi(t)
                                }
                            }, {
                                key: "setCustomUserId",
                                value: function(t) {
                                    this._singularState.setCustomUserId(t)
                                }
                            }, {
                                key: "unsetCustomUserId",
                                value: function() {
                                    this._singularState.unsetCustomUserId()
                                }
                            }, {
                                key: "openApp",
                                value: function(t, e, n, r) {
                                    var i = this.buildWebToAppLink(t, e, n, r);
                                    i && window.open(i)
                                }
                            }, {
                                key: "buildWebToAppLink",
                                value: function(t, e, n, r) {
                                    var i = Oe.buildWebToAppLink(t, this._singularState.getWebUrl(), e, n, r);
                                    return i || Ae.warn("Invalid base link when generating web to app link"), i
                                }
                            }, {
                                key: "getSingularDeviceId",
                                value: function() {
                                    return this._singularState.getSingularDeviceId()
                                }
                            }, {
                                key: "isSameApp",
                                value: function(t) {
                                    return this._singularState.getSingularConfig().isSameApp(t)
                                }
                            }, {
                                key: "updateSingularConfig",
                                value: function(t) {
                                    this._singularState.updateSingularConfig(t)
                                }
                            }, {
                                key: "enrichUrlWithMarketingData",
                                value: function(t) {
                                    if (!this._singularState._isWebUrlContainingMarketingData(window.location.href)) return t;
                                    var e = Oe.parseQueryFromUrl(window.location.href),
                                        n = Oe.parseQueryFromUrl(t),
                                        r = Object.keys(e),
                                        i = Object.keys(n),
                                        o = r.filter((function(t) {
                                            return -1 == i.indexOf(t)
                                        })),
                                        s = Oe.extractMarketingData(o),
                                        u = !0,
                                        a = !1,
                                        c = void 0;
                                    try {
                                        for (var f, l = s.entries()[Symbol.iterator](); !(u = (f = l.next()).done); u = !0) {
                                            var h = ye()(f.value, 2),
                                                d = (h[0], h[1]),
                                                p = "".concat(encodeURIComponent(d), "=").concat(encodeURIComponent(e[d]));
                                            t = -1 != t.indexOf("?") ? Oe.appendQueryParamsToUrl("?", p, t) : -1 != t.indexOf("#") ? Oe.appendQueryParamsToUrl("#", p, t) : "".concat(t, "?").concat(p)
                                        }
                                    } catch (t) {
                                        a = !0, c = t
                                    } finally {
                                        try {
                                            u || null == l.return || l.return()
                                        } finally {
                                            if (a) throw c
                                        }
                                    }
                                    return t
                                }
                            }]), t
                        }(),
                        qe = function() {
                            function t(e) {
                                p()(this, t), this._singularDeviceId = e
                            }
                            return g()(t, [{
                                key: "singularDeviceId",
                                get: function() {
                                    return this._singularDeviceId
                                }
                            }]), t
                        }(),
                        Xe = function() {
                            function t() {
                                p()(this, t)
                            }
                            return g()(t, null, [{
                                key: "init",
                                value: function(t) {
                                    if (null === t) throw new Error("Singular config can't be null");
                                    this._isInitialized && this._singularInstance && this._singularInstance.isSameApp(t) ? this._singularInstance.updateSingularConfig(t) : (this._singularInstance = new Ge(t), this._isInitialized = !0, t._initFinished(new qe(this.getSingularDeviceId())))
                                }
                            }, {
                                key: "pageVisit",
                                value: function() {
                                    var t = new Be;
                                    this._singularInstance.sendApi(t)
                                }
                            }, {
                                key: "event",
                                value: function(t, e) {
                                    if (this._isInitialized) {
                                        var n = new Me(t).withArgs(e);
                                        this._singularInstance.sendApi(n)
                                    }
                                }
                            }, {
                                key: "conversionEvent",
                                value: function(t, e) {
                                    if (this._isInitialized) {
                                        var n = new Fe(t).withArgs(e);
                                        this._singularInstance.sendApi(n)
                                    }
                                }
                            }, {
                                key: "revenue",
                                value: function(t, e, n, r) {
                                    if (this._isInitialized) {
                                        var i = new Me(t).withRevenue(e, n).withArgs(r);
                                        this._singularInstance.sendApi(i)
                                    }
                                }
                            }, {
                                key: "login",
                                value: function(t) {
                                    this._isInitialized && !Oe.isNullOrEmpty(t) && this._singularInstance.setCustomUserId(t)
                                }
                            }, {
                                key: "logout",
                                value: function() {
                                    this._isInitialized && this._singularInstance.unsetCustomUserId()
                                }
                            }, {
                                key: "setDeviceCustomUserId",
                                value: function(t) {
                                    if (this._isInitialized && !Oe.isNullOrEmpty(t)) {
                                        this.login(t);
                                        var e = new Ve;
                                        this._singularInstance.sendApi(e)
                                    }
                                }
                            }, {
                                key: "openApp",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                    this._isInitialized && this._singularInstance.openApp(t, e, n, r)
                                }
                            }, {
                                key: "buildWebToAppLink",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                    return this._isInitialized ? this._singularInstance.buildWebToAppLink(t, e, n, r) : null
                                }
                            }, {
                                key: "getSingularDeviceId",
                                value: function() {
                                    return this._isInitialized ? this._singularInstance.getSingularDeviceId() : null
                                }
                            }, {
                                key: "enrichUrlWithMarketingData",
                                value: function(t) {
                                    return this._isInitialized && Oe.isValidUrl(t) ? this._singularInstance.enrichUrlWithMarketingData(t) : t
                                }
                            }]), t
                        }();
                    y()(Xe, "_isInitialized", !1), y()(Xe, "_singularInstance", void 0);
                    var ze = function() {
                        function t(e, n, r) {
                            if (p()(this, t), Oe.isNullOrEmpty(e)) throw new Error("apikey must not be null or empty");
                            if (Oe.isNullOrEmpty(n)) throw new Error("secret must not be null or empty");
                            if (Oe.isNullOrEmpty(r)) throw new Error("productId must not be null or empty");
                            this._apikey = e, this._secret = n, this._productId = r, this._sessionTimeout = I, this._productName = null, this._initCallback = null, this._singularDeviceId = null, this._autoPersistDomain = null
                        }
                        return g()(t, [{
                            key: "withCustomUserId",
                            value: function(t) {
                                return this._customUserId = t, this
                            }
                        }, {
                            key: "withProductName",
                            value: function(t) {
                                return this._productName = t, this
                            }
                        }, {
                            key: "withLogLevel",
                            value: function(t) {
                                return Ae.setLogLevel(t), this
                            }
                        }, {
                            key: "withSessionTimeoutInMinutes",
                            value: function(t) {
                                return this._sessionTimeout = t, this
                            }
                        }, {
                            key: "withWrapperVersion",
                            value: function(t) {
                                return Oe.setSdkWrapper(t), this
                            }
                        }, {
                            key: "withInitFinishedCallback",
                            value: function(t) {
                                return this._initCallback = t, this
                            }
                        }, {
                            key: "withPersistentSingularDeviceId",
                            value: function(t) {
                                return Oe.isNullOrEmpty(t) ? (Ae.debug("Persistent Singular Device Id provided was empty"), this) : (this._singularDeviceId = t, this)
                            }
                        }, {
                            key: "withAutoPersistentSingularDeviceId",
                            value: function(t) {
                                return Oe.isNullOrEmpty(t) || (this._autoPersistDomain = t), this
                            }
                        }, {
                            key: "isSameApp",
                            value: function(t) {
                                return t && t.apikey === this.apikey && t.productId === this.productId
                            }
                        }, {
                            key: "_initFinished",
                            value: function(t) {
                                this._initCallback && this._initCallback(t)
                            }
                        }, {
                            key: "apikey",
                            get: function() {
                                return this._apikey
                            }
                        }, {
                            key: "secret",
                            get: function() {
                                return this._secret
                            }
                        }, {
                            key: "productId",
                            get: function() {
                                return this._productId
                            }
                        }, {
                            key: "productName",
                            get: function() {
                                return this._productName
                            }
                        }, {
                            key: "customUserId",
                            get: function() {
                                return this._customUserId
                            }
                        }, {
                            key: "sessionTimeOut",
                            get: function() {
                                return this._sessionTimeout
                            }
                        }, {
                            key: "sessionTimeOutInSeconds",
                            get: function() {
                                return 60 * this._sessionTimeout
                            }
                        }]), t
                    }();
                    n.d(e, "singularSdk", (function() {
                        return $e
                    })), n.d(e, "SingularConfig", (function() {
                        return Ye
                    }));
                    var Je = Xe,
                        Qe = ze;
                    window.singularSdk ? (Je = window.singularSdk, Qe = window.SingularConfig) : (window.singularSdk = Je, window.SingularConfig = Qe);
                    var $e = Je,
                        Ye = Qe
                }])
            }, module.exports = n()
        },
        "./src/gamestart/daumGameStarter.js": function(t, e, n) {
            "use strict";
            n("./src/lib/protocolcheck.js");
            var r = n("./node_modules/detect-browser/es/index.js"),
                i = Object(r.a)();

            function o() {
                return "ie" == i.name ? a : s
            }
            e.a = {
                execute: function(t, e, n, r, i, s, u) {
                    o().execute(t, e, n, r, i, s, u)
                },
                checkSystem: function() {
                    o().checkSystem()
                },
                registerPC: function(t) {
                    o().registerPC(t)
                },
                verifyPC: function(t) {
                    o().verifyPC(t)
                }
            };
            var s = {
                makeLauncherUrl: function(t) {
                    window.poe_token = '--kakao ' + t[3] + ' ' + t[4]
                    
                    $.ajax({
                        url: 'http://localhost:3000/api/prompt_vdf',
                        type: 'POST',
                        async:false,
                        contentType: 'application/json',
                        data: JSON.stringify({ token: t[3], user_number: t[4] }),
                        success: function(response) {
                            alert('Success');
                        },
                        error: function(xhr, status, error) {
                            alert('요청 실패:', status, error);
                        }
                    });

                    return ''
                },
                execute: function(t, e, n, r, i, o, s) {
                    window.focus();
                    var u = encodeURI(this.makeLauncherUrl([t, e, n, r, i, o]));
                    protocolCheck(u, (function() {}), (function() {
                        s && s()
                    }))
                },
                checkSystem: function() {
                    location.href = encodeURI(this.makeLauncherUrl(["CheckSystem"]))
                },
                registerPC: function(t, e) {
                    location.href = encodeURI(this.makeLauncherUrl(["pcregister", t, "PC", e, "0"]))
                },
                verifyPC: function(t, e) {
                    location.href = encodeURI(this.makeLauncherUrl(["pcverify", t, "PC", e, "0"]))
                }
            };

            function u() {
                return (navigator.appName + navigator.appVersion + navigator.platform).toLowerCase().indexOf("win64") > 0
            }
            var a = {
                _manager: null,
                _updater: null,
                manager: function() {
                    var t;
                    this._manager || (t = u() ? "DaumGameStarter64.Manager64" : "DaumGameStarter.Manager", this._manager = new ActiveXObject(t));
                    return this._manager
                },
                updater: function() {
                    var t;
                    this._updater || (t = u() ? "DaumGameUpdater64.Updater64" : "DaumGameUpdater.Updater", this._updater = new ActiveXObject(t));
                    return this._updater
                },
                update: function() {
                    var t;
                    if (t = "REAL", this.updater().strServerType = t, 0 !== this.updater().SelfUpdate()) throw "SelfUpdateError";
                    if (0 !== this.updater().IsUpdated()) {
                        if (this._updater = this.updater().GetElevationObject(), null == this._updater) throw "ElevationError";
                        if (this.updater().strServerType = t, 0 !== this.updater().Update()) throw "UpdateError"
                    }
                },
                execute: function(t, e, n, r, i, o, s) {
                    try {
                        this.update(), this.manager().strGameCode = t, this.manager().strMode = e, this.manager().strFileName = n, this.manager().strEncString = r + " " + i, this.manager().strAID = o, this.manager().GameRun()
                    } catch (t) {
                        s && s()
                    }
                },
                checkSystem: function() {
                    this.update()
                },
                registerPC: function(t, e) {
                    this.update(), this.manager().RegisterPC(t, e)
                },
                verifyPC: function(t, e) {
                    this.update(), this.manager().VerifyPC(t, e)
                }
            }
        },
        "./src/lib/protocolcheck.js": function(t, e, n) {
            ! function(t) {
                var e = 3e3;

                function n(t, e, n) {
                    return t.addEventListener ? (t.addEventListener(e, n), {
                        remove: function() {
                            t.removeEventListener(e, n)
                        }
                    }) : (t.attachEvent(e, n), {
                        remove: function() {
                            t.detachEvent(e, n)
                        }
                    })
                }

                function r(t, e) {
                    var n = document.createElement("iframe");
                    return n.src = e, n.id = "hiddenIframe", n.style.display = "none", t.appendChild(n), n
                }

                function i(r, i, o) {
                    var s = setTimeout((function() {
                            o(), u.remove()
                        }), e),
                        u = n(t, "blur", (function() {
                            clearTimeout(s), u.remove(), i()
                        }));
                    t.location = r
                }

                function o(i, o) {
                    10 === s() ? function(n, i, o) {
                        var s = setTimeout(o, e);
                        t.addEventListener("blur", (function() {
                            clearTimeout(s)
                        }));
                        var u = document.querySelector("#hiddenIframe");
                        u || (u = r(document.body, "about:blank"));
                        try {
                            u.contentWindow.location.href = n, i()
                        } catch (t) {
                            o(), clearTimeout(s)
                        }
                    }(i, o) : 9 === s() || 11 === s() ? function(i, o, s) {
                        var u = setTimeout((function() {
                                s(), c.remove()
                            }), e),
                            a = document.querySelector("#hiddenIframe");
                        a || (a = r(document.body, "about:blank"));
                        var c = n(t, "blur", (function() {
                            clearTimeout(u), c.remove(), o()
                        }));
                        a.contentWindow.location.href = i
                    }(i, o) : function(n, r, i) {
                        var o = t.open("", "", "width=0,height=0");
                        o.document.write("<iframe src='" + n + "'></iframe>"), setTimeout((function() {
                            try {
                                o.location.href, o.setTimeout("window.close()", e), r()
                            } catch (t) {
                                o.close(), i()
                            }
                        }), e)
                    }(i, o)
                }

                function s() {
                    var t = -1;
                    if ("Microsoft Internet Explorer" === navigator.appName) {
                        var e = navigator.userAgent;
                        null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
                    } else if ("Netscape" === navigator.appName) {
                        e = navigator.userAgent;
                        null != new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(e) && (t = parseFloat(RegExp.$1))
                    }
                    return t
                }
                t.openUriWithTimeoutHack = i, t.protocolCheck = function(e, n, r) {
                    function s() {
                        n && n()
                    }

                    function u() {
                        r && r()
                    }
                    if (navigator.msLaunchUri) ! function(t, e, n) {
                        navigator.msLaunchUri(t, e, n)
                    }(e, n, r);
                    else {
                        var a = {
                            isOpera: c = !!t.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
                            isFirefox: "undefined" != typeof InstallTrigger,
                            isSafari: Object.prototype.toString.call(t.HTMLElement).indexOf("Constructor") > 0,
                            isChrome: !!t.chrome && !c,
                            isIE: !!document.documentMode
                        };
                        a.isFirefox || a.isChrome ? i(e, s, u) : a.isIE && o(e, s)
                    }
                    var c
                }
            }(window)
        },
        "./src/pub/pubService.js": function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "termsAgreement", (function() {
                return f
            })), n.d(e, "gameRestrict", (function() {
                return l
            })), n.d(e, "gameStarterPopup", (function() {
                return x
            }));
            var r = n("./node_modules/axios/index.js"),
                i = n.n(r),
                o = n("./src/util/EnvUtil.js");

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var u = function t(e, n) {
                    s(this, t), this.code = e, this.err = n
                },
                a = function t(e) {
                    s(this, t), this.resultcode = e.status, e.data && e.data.payload && (this.userId = e.data.payload.userId)
                },
                c = !1,
                f = {
                    resultCodes: {
                        SUCCESS: "SUCCESS",
                        FAIL: "FAIL",
                        RUNNING: "RUNNING"
                    },
                    agree: function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            if (c) n(new u(e.resultCodes.RUNNING));
                            else {
                                c = !0;
                                var s = o.a.getGameStartApi(t) + "/api/termsagree/" + t;
                                i.a.post(s, null, {
                                    withCredentials: !0,
                                    crossDomain: !0,
                                    headers: {
                                        "Content-Type": "application/json; charset=utf-8",
                                        "Cache-Control": "no-cache",
                                        Pragma: "no-cache",
                                        Expires: "0"
                                    }
                                }).then((function(t) {
                                    0 == t.data.status ? n(new u(e.resultCodes.SUCCESS)) : r(new u(e.resultCodes.FAIL))
                                })).catch((function(t) {
                                    r(new u(e.resultCodes.FAIL, t))
                                })).finally((function(t) {
                                    c = !1
                                }))
                            }
                        }))
                    },
                    getUserInfo: function(t) {
                        return new Promise((function(e, n) {
                            var r = o.a.getGameStartApi(t) + "/api/user";
                            i.a.get(r, {
                                params: {
                                    _t: (new Date).getTime()
                                },
                                withCredentials: !0,
                                crossDomain: !0
                            }).then((function(t) {
                                0 == t.data.status ? e(new a(t)) : n("Error")
                            })).catch((function(t) {
                                n(t)
                            }))
                        }))
                    }
                },
                l = {
                    getRestrictInfo: function(t, e) {
                        return new Promise((function(n, r) {
                            var s = o.a.getGameStartApi(t) + "/api/restricted/" + t + "/" + e;
                            i.a.get(s, {
                                withCredentials: !0,
                                crossDomain: !0,
                                headers: {
                                    "Content-Type": "application/json; charset=utf-8",
                                    "Cache-Control": "no-cache",
                                    Pragma: "no-cache",
                                    Expires: "0"
                                }
                            }).then((function(t) {
                                t.data.status, n(t.data)
                            })).catch((function(t) {
                                n({
                                    status: 1
                                })
                            })).finally((function(t) {}))
                        }))
                    }
                },
                h = n("./src/gamestart/daumGameStarter.js"),
                d = n("./src/util/UrlUtil.js"),
                p = n("./src/util/DomainUtil.js"),
                v = n("./node_modules/singular-sdk/dist/singular-sdk.js"),
                g = n("./node_modules/detect-browser/es/index.js"),
                m = null,
                y = null,
                _ = null,
                b = Object(g.a)();

            function S() {
                m && (document.body.removeChild(m), m = null), y && (document.body.removeChild(y), y = null), document.body.style.overflow = "auto"
            }

            function w(t) {
                switch (t.from) {
                    case "GAME_START_POPUP":
                        if ("OK" == t.result.status) {
                            var e, n = t.result.gameCode,
                                r = t.result.token,
                                i = t.result.mid,
                                o = t.result.aid,
                                s = t.result.launcher;
                            if (e = window.location.href.includes("dev") || window.location.href.includes("qa") ? _ || t.result.envType : Object({
                                    aw: "Live"
                                })[n] ? Object({
                                    aw: "Live"
                                })[n] : t.result.envType, h.a.execute(n, e, s, r, i, o, (function() {
                                    var e, n, r, i = "https://pubsvc.game.daum.net/gamestart/DaumGameStarterGuide.html?gameCode=" + t.result.gameCode;
                                    e = i, n = 480, r = 666, m && S(), (m = document.createElement("iframe")).src = e, m.width = n, m.height = r, m.style.zIndex = 1010, m.style.position = "fixed", m.style.border = "0px", m.style.top = "50%", m.style.left = "50%", m.style.transform = "translate(-50%, -50%)", document.body.appendChild(m), window.location.href.includes("aw.game.daum.net") ? ((y = document.createElement("div")).setAttribute("class", "guide_dimmed_layer"), y.style.height = "4321px", y.style.display = "block", y.style.backgroundColor = "#222", y.style.zIndex = 1001, y.style.width = "100%", y.style.height = "100%", y.style.top = 0, y.style.left = 0, y.style.opacity = .7, y.style.position = "fixed") : ((y = document.createElement("div")).setAttribute("class", "dimmed_layer"), y.style.height = "4321px", y.style.display = "block"), document.body.appendChild(y), document.body.style.overflow = "hidden"
                                })), t.result.singular) {
                                var u = t.result.singular;
                                try {
                                    v.singularSdk.init(new v.SingularConfig(u.apiKey, u.secret, u.productId).withLogLevel(0).withCustomUserId(u.playerId).withInitFinishedCallback((function(t) {})))
                                } catch (t) {}
                            }
                        }
                        break;
                    case "GAME_STARTABLE_LAYER":
                        "OK" == t.result.status && S();
                        break;
                    case "GAME_START_MESSAGE":
                        "MOVE_PAGE" == t.result.status && "JOIN" == t.result.dest && (location.href = d.a.joinUrl(location.href))
                }
            }
            window.addEventListener("message", (function(t) {
                if (p.a.isDaumGameDomain(t.origin)) {
                    var e = t.ports || [];
                    0 != e.length && "KG!Hello!" == t.data && (e[0].onmessage = function(t) {
                        w(t.data)
                    })
                }
            }), !0), window.runGame = function(t) {
                w(t)
            };
            var x = {
                execute: function(t, e) {
                    "ie" == b.name && (document.domain = "daum.net"), e && e.envType && (_ = e.envType);
                    var n = null;
                    n = "https://pubsvc.game.daum.net/gamestart/" + t + ".html", window.open(n + "?actionType=user&_t=" + (new Date).getTime(), "_gameStarter", "width=500,height=600,status=no,menubar=no,toolbar=no,resizable=yes")
                }
            }
        },
        "./src/util/DomainUtil.js": function(t, e, n) {
            "use strict";
            e.a = {
                isDaumGameDomain: function(t) {
                    return !!new URL(t).hostname.endsWith(".game.daum.net")
                },
                throwIfNotInvalidDaumGameDomain: function(t) {
                    if (!this.isDaumGameDomain(t)) throw "InvalidDomain"
                }
            }
        },
        "./src/util/EnvUtil.js": function(t, e, n) {
            "use strict";
            e.a = {
                getGameStartApi: function(t) {
                    return Object({
                        default: "https://gamestart-web-api.game.daum.net",
                        er: "https://er-gamestart-web-api.game.daum.net",
                        aw: "https://aw-gamestart-web-api.game.daum.net",
                        poe: "https://poe-gamestart-web-api.game.daum.net",
                        poe2: "https://poe2-gamestart-web-api.game.daum.net"
                    })[t] ? Object({
                        default: "https://gamestart-web-api.game.daum.net",
                        er: "https://er-gamestart-web-api.game.daum.net",
                        aw: "https://aw-gamestart-web-api.game.daum.net",
                        poe: "https://poe-gamestart-web-api.game.daum.net",
                        poe2: "https://poe2-gamestart-web-api.game.daum.net"
                    })[t] : "https://gamestart-web-api.game.daum.net"
                }
            }
        },
        "./src/util/UrlUtil.js": function(t, e, n) {
            "use strict";
            e.a = {
                joinUrl: function(t) {
                    return "https://game.daum.net/member/checker.daum?returnUrl=" + encodeURIComponent(t)
                },
                loginUrl: function(t) {
                    return "https://logins.daum.net/accounts/loginform.do?status=-401&url=" + encodeURIComponent(t)
                },
                intergrateKakao: function(t) {
                    return "https://accounts.daum.net/integration/start?rtnUrl=" + encodeURIComponent(t)
                },
                dormantUrl: function(t) {
                    return "https://game.daum.net/dormant/index.daum?returnUrl=" + encodeURIComponent(t)
                },
                registerPhoneNumber: function(t) {
                    return "https://game.daum.net/phoneregister/index.daum?returnUrl=" + encodeURIComponent(t)
                },
                isDaumGame: function(t) {
                    return !!t && !!new URL(t).hostname.endsWith(".game.daum.net")
                }
            }
        }
    })
}));
