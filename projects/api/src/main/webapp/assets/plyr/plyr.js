!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define(null, function () {
        t(e, document)
    }) : e.plyr = t(e, document)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n() {
        var e, n, r, a = navigator.userAgent, s = navigator.appName, o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10), l = !1, u = !1, c = !1, p = !1;
        return -1 !== navigator.appVersion.indexOf("Windows NT") && -1 !== navigator.appVersion.indexOf("rv:11") ? (l = !0, s = "IE", o = "11") : -1 !== (n = a.indexOf("MSIE")) ? (l = !0, s = "IE", o = a.substring(n + 5)) : -1 !== (n = a.indexOf("Chrome")) ? (c = !0, s = "Chrome", o = a.substring(n + 7)) : -1 !== (n = a.indexOf("Safari")) ? (p = !0, s = "Safari", o = a.substring(n + 7), -1 !== (n = a.indexOf("Version")) && (o = a.substring(n + 8))) : -1 !== (n = a.indexOf("Firefox")) ? (u = !0, s = "Firefox", o = a.substring(n + 8)) : (e = a.lastIndexOf(" ") + 1) < (n = a.lastIndexOf("/")) && (s = a.substring(e, n), o = a.substring(n + 1), s.toLowerCase() == s.toUpperCase() && (s = navigator.appName)), -1 !== (r = o.indexOf(";")) && (o = o.substring(0, r)), -1 !== (r = o.indexOf(" ")) && (o = o.substring(0, r)), i = parseInt("" + o, 10), isNaN(i) && (o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10)), {
            name: s,
            version: i,
            isIE: l,
            isFirefox: u,
            isChrome: c,
            isSafari: p,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isTouch: "ontouchstart" in t.documentElement
        }
    }

    function r(e, t) {
        var n = e.media;
        if ("video" == e.type)switch (t) {
            case"video/webm":
                return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
            case"video/mp4":
                return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
            case"video/ogg":
                return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
        } else if ("audio" == e.type)switch (t) {
            case"audio/mpeg":
                return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
            case"audio/ogg":
                return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
            case"audio/wav":
                return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
        }
        return !1
    }

    function a(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var n = t.createElement("script");
            n.src = e;
            var r = t.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(n, r)
        }
    }

    function s(e, t) {
        return Array.prototype.indexOf && -1 != e.indexOf(t)
    }

    function o(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), n)
    }

    function i(e, t) {
        e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var r = n > 0 ? t.cloneNode(!0) : t, a = e[n], s = a.parentNode, o = a.nextSibling;
            return r.appendChild(a), o ? s.insertBefore(r, o) : s.appendChild(r), r
        }
    }

    function l(e) {
        for (var t = e.parentNode; e.firstChild;)t.insertBefore(e.firstChild, e);
        t.removeChild(e)
    }

    function u(e) {
        e && e.parentNode.removeChild(e)
    }

    function c(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function p(e, t) {
        for (var n in t)e.setAttribute(n, "boolean" == typeof t[n] && t[n] ? "" : t[n])
    }

    function d(e, n, r) {
        var a = t.createElement(e);
        p(a, r), c(n, a)
    }

    function m(e) {
        return e.replace(".", "")
    }

    function f(e, t, n) {
        if (e)if (e.classList)e.classList[n ? "add" : "remove"](t); else {
            var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
            e.className = r + (n ? " " + t : "")
        }
    }

    function y(e, t) {
        return e ? e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) : !1
    }

    function b(e, n) {
        var r = Element.prototype, a = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || function (e) {
                return -1 !== [].indexOf.call(t.querySelectorAll(e), this)
            };
        return a.call(e, n)
    }

    function v(e, t, n, r) {
        e && k(e, t, n, !0, r)
    }

    function g(e, t, n, r) {
        e && k(e, t, n, !1, r)
    }

    function h(e, t, n, r, a) {
        v(e, t, function (t) {
            n && n.apply(e, [t]), r.apply(e, [t])
        }, a)
    }

    function k(e, t, n, r, a) {
        var s = t.split(" ");
        if ("boolean" != typeof a && (a = !1), e instanceof NodeList)for (var o = 0; o < e.length; o++)e[o] instanceof Node && k(e[o], arguments[1], arguments[2], arguments[3]); else for (var i = 0; i < s.length; i++)e[r ? "addEventListener" : "removeEventListener"](s[i], n, a)
    }

    function w(e, t, n, r) {
        if (e && t) {
            "boolean" != typeof n && (n = !1);
            var a = new CustomEvent(t, {bubbles: n, detail: r});
            e.dispatchEvent(a)
        }
    }

    function T(e, t) {
        return e ? (t = "boolean" == typeof t ? t : !e.getAttribute("aria-pressed"), e.setAttribute("aria-pressed", t), t) : void 0
    }

    function x(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }

    function _() {
        var e = arguments;
        if (e.length) {
            if (1 == e.lenth)return e[0];
            for (var t = Array.prototype.shift.call(e), n = e.length, r = 0; n > r; r++) {
                var a = e[r];
                for (var s in a)a[s] && a[s].constructor && a[s].constructor === Object ? (t[s] = t[s] || {}, _(t[s], a[s])) : t[s] = a[s]
            }
            return t
        }
    }

    function S() {
        var e = {
            supportsFullScreen: !1, isFullScreen: function () {
                return !1
            }, requestFullScreen: function () {
            }, cancelFullScreen: function () {
            }, fullScreenEventName: "", element: null, prefix: ""
        }, n = "webkit moz o ms khtml".split(" ");
        if ("undefined" != typeof t.cancelFullScreen)e.supportsFullScreen = !0; else for (var r = 0, a = n.length; a > r; r++) {
            if (e.prefix = n[r], "undefined" != typeof t[e.prefix + "CancelFullScreen"]) {
                e.supportsFullScreen = !0;
                break
            }
            if ("undefined" != typeof t.msExitFullscreen && t.msFullscreenEnabled) {
                e.prefix = "ms", e.supportsFullScreen = !0;
                break
            }
        }
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" == e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange", e.isFullScreen = function (e) {
            switch ("undefined" == typeof e && (e = t.body), this.prefix) {
                case"":
                    return t.fullscreenElement == e;
                case"moz":
                    return t.mozFullScreenElement == e;
                default:
                    return t[this.prefix + "FullscreenElement"] == e
            }
        }, e.requestFullScreen = function (e) {
            return "undefined" == typeof e && (e = t.body), "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" == this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
        }, e.cancelFullScreen = function () {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" == this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
        }, e.element = function () {
            return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
        }), e
    }

    function E() {
        var t = {
            supported: function () {
                if (!("localStorage" in e))return !1;
                try {
                    e.localStorage.setItem("___test", "OK");
                    var t = e.localStorage.getItem("___test");
                    return e.localStorage.removeItem("___test"), "OK" === t
                } catch (n) {
                    return !1
                }
                return !1
            }()
        };
        return t
    }

    function C(b, k) {
        function _() {
            k.debug && e.console && console.log.apply(console, arguments)
        }

        function C() {
            k.debug && e.console && console.warn.apply(console, arguments)
        }

        function I() {
            return {url: k.iconUrl, absolute: 0 === k.iconUrl.indexOf("http") || Ve.browser.isIE}
        }

        function P() {
            var e = [], t = I(), n = (t.absolute ? "" : t.url) + "#" + k.iconPrefix;
            return s(k.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + k.i18n.play + "</span>", "</button>"), e.push('<div class="plyr__controls">'), s(k.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + k.i18n.restart + "</span>", "</button>"), s(k.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + k.i18n.rewind + "</span>", "</button>"), s(k.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + k.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + k.i18n.pause + "</span>", "</button>"), s(k.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + k.i18n.forward + "</span>", "</button>"), s(k.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + k.i18n.buffered, "</progress>"), k.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'), e.push("</span>")), s(k.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + k.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"), s(k.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + k.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"), s(k.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + k.i18n.toggleMute + "</span>", "</button>"), s(k.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + k.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + k.volumeMin + '" max="' + k.volumeMax + '" value="' + k.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + k.volumeMax + '" value="' + k.volumeMin + '" role="presentation"></progress>', "</span>"), s(k.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + k.i18n.toggleCaptions + "</span>", "</button>"), s(k.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + k.i18n.toggleFullscreen + "</span>", "</button>"), e.push("</div>"), e.join("")
        }

        function L() {
            if (Ve.supported.full && ("audio" != Ve.type || k.fullscreen.allowAudio) && k.fullscreen.enabled) {
                var e = N.supportsFullScreen;
                e || k.fullscreen.fallback && !j() ? (_((e ? "Native" : "Fallback") + " fullscreen enabled"), f(Ve.container, k.classes.fullscreen.enabled, !0)) : _("Fullscreen not supported and fallback disabled"), T(Ve.buttons.fullscreen, !1), W()
            }
        }

        function O() {
            if ("video" === Ve.type) {
                D(k.selectors.captions) || Ve.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + m(k.selectors.captions) + '"></div>'), Ve.usingTextTracks = !1, Ve.media.textTracks && (Ve.usingTextTracks = !0);
                for (var e, t = "", n = Ve.media.childNodes, r = 0; r < n.length; r++)"track" === n[r].nodeName.toLowerCase() && (e = n[r].kind, "captions" !== e && "subtitles" !== e || (t = n[r].getAttribute("src")));
                if (Ve.captionExists = !0, "" === t ? (Ve.captionExists = !1, _("No caption track found")) : _("Caption track found; URI: " + t), Ve.captionExists) {
                    for (var a = Ve.media.textTracks, s = 0; s < a.length; s++)a[s].mode = "hidden";
                    if (R(Ve), (Ve.browser.isIE && Ve.browser.version >= 10 || Ve.browser.isFirefox && Ve.browser.version >= 31) && (_("Detected browser with known TextTrack issues - using manual fallback"), Ve.usingTextTracks = !1), Ve.usingTextTracks) {
                        _("TextTracks supported");
                        for (var o = 0; o < a.length; o++) {
                            var i = a[o];
                            "captions" !== i.kind && "subtitles" !== i.kind || v(i, "cuechange", function () {
                                this.activeCues[0] && "text" in this.activeCues[0] ? q(this.activeCues[0].getCueAsHTML()) : q()
                            })
                        }
                    } else if (_("TextTracks not supported so rendering captions manually"), Ve.currentCaption = "", Ve.captions = [], "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function () {
                            if (4 === l.readyState)if (200 === l.status) {
                                var e, t = [], n = l.responseText;
                                t = n.split("\n\n");
                                for (var r = 0; r < t.length; r++) {
                                    e = t[r], Ve.captions[r] = [];
                                    var a = e.split("\n"), s = 0;
                                    -1 === a[s].indexOf(":") && (s = 1), Ve.captions[r] = [a[s], a[s + 1]]
                                }
                                Ve.captions.shift(), _("Successfully loaded the caption file via AJAX")
                            } else C("There was a problem loading the caption file via AJAX")
                        }, l.open("get", t, !0), l.send()
                    }
                } else f(Ve.container, k.classes.captions.enabled)
            }
        }

        function q(e) {
            var n = D(k.selectors.captions), r = t.createElement("span");
            n.innerHTML = "", "undefined" == typeof e && (e = ""), "string" == typeof e ? r.innerHTML = e.trim() : r.appendChild(e), n.appendChild(r);
            n.offsetHeight
        }

        function V(e) {
            function t(e, t) {
                var n = [];
                n = e.split(" --> ");
                for (var r = 0; r < n.length; r++)n[r] = n[r].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return a(n[t])
            }

            function n(e) {
                return t(e, 0)
            }

            function r(e) {
                return t(e, 1)
            }

            function a(e) {
                if (null === e || void 0 === e)return 0;
                var t, n = [], r = [];
                return n = e.split(","), r = n[0].split(":"), t = Math.floor(60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(r[2])
            }

            if (!Ve.usingTextTracks && "video" === Ve.type && Ve.supported.full && (Ve.subcount = 0, e = "number" == typeof e ? e : Ve.media.currentTime, Ve.captions[Ve.subcount])) {
                for (; r(Ve.captions[Ve.subcount][0]) < e.toFixed(1);)if (Ve.subcount++, Ve.subcount > Ve.captions.length - 1) {
                    Ve.subcount = Ve.captions.length - 1;
                    break
                }
                Ve.media.currentTime.toFixed(1) >= n(Ve.captions[Ve.subcount][0]) && Ve.media.currentTime.toFixed(1) <= r(Ve.captions[Ve.subcount][0]) ? (Ve.currentCaption = Ve.captions[Ve.subcount][1], q(Ve.currentCaption)) : q()
            }
        }

        function R() {
            Ve.buttons.captions && (f(Ve.container, k.classes.captions.enabled, !0), k.captions.defaultActive && (f(Ve.container, k.classes.captions.active, !0), T(Ve.buttons.captions, !0)))
        }

        function H(e) {
            return Ve.container.querySelectorAll(e)
        }

        function D(e) {
            return H(e)[0]
        }

        function j() {
            try {
                return e.self !== e.top
            } catch (t) {
                return !0
            }
        }

        function W() {
            function e(e) {
                9 === e.which && Ve.isFullscreen && (e.target !== r || e.shiftKey ? e.target === n && e.shiftKey && (e.preventDefault(), r.focus()) : (e.preventDefault(), n.focus()))
            }

            var t = H("input:not([disabled]), button:not([disabled])"), n = t[0], r = t[t.length - 1];
            v(Ve.container, "keydown", e)
        }

        function Y(e, t) {
            if ("string" == typeof t)d(e, Ve.media, {src: t}); else if (t.constructor === Array)for (var n = t.length - 1; n >= 0; n--)d(e, Ve.media, t[n])
        }

        function X() {
            if (k.loadSprite) {
                var e = I();
                e.absolute ? (_("AJAX loading absolute SVG sprite" + (Ve.browser.isIE ? " (due to IE)" : "")), F(e.url, "sprite-plyr")) : _("Sprite will be used as external resource directly")
            }
            var n = k.html;
            _("Injecting custom controls"), n || (n = P()), n = o(n, "{seektime}", k.seekTime), n = o(n, "{id}", Math.floor(1e4 * Math.random()));
            var r;
            if (null !== k.selectors.controls.container && (r = k.selectors.controls.container, "string" == typeof selector && (r = t.querySelector(r))), r instanceof HTMLElement || (r = Ve.container), r.insertAdjacentHTML("beforeend", n), k.tooltips.controls)for (var a = H([k.selectors.controls.wrapper, " ", k.selectors.labels, " .", k.classes.hidden].join("")), s = a.length - 1; s >= 0; s--) {
                var i = a[s];
                f(i, k.classes.hidden, !1), f(i, k.classes.tooltip, !0)
            }
        }

        function B() {
            try {
                return Ve.controls = D(k.selectors.controls.wrapper), Ve.buttons = {}, Ve.buttons.seek = D(k.selectors.buttons.seek), Ve.buttons.play = H(k.selectors.buttons.play), Ve.buttons.pause = D(k.selectors.buttons.pause), Ve.buttons.restart = D(k.selectors.buttons.restart), Ve.buttons.rewind = D(k.selectors.buttons.rewind), Ve.buttons.forward = D(k.selectors.buttons.forward), Ve.buttons.fullscreen = D(k.selectors.buttons.fullscreen), Ve.buttons.mute = D(k.selectors.buttons.mute), Ve.buttons.captions = D(k.selectors.buttons.captions), Ve.progress = {}, Ve.progress.container = D(k.selectors.progress.container), Ve.progress.buffer = {}, Ve.progress.buffer.bar = D(k.selectors.progress.buffer), Ve.progress.buffer.text = Ve.progress.buffer.bar && Ve.progress.buffer.bar.getElementsByTagName("span")[0], Ve.progress.played = D(k.selectors.progress.played), Ve.progress.tooltip = Ve.progress.container && Ve.progress.container.querySelector("." + k.classes.tooltip), Ve.volume = {}, Ve.volume.input = D(k.selectors.volume.input), Ve.volume.display = D(k.selectors.volume.display), Ve.duration = D(k.selectors.duration), Ve.currentTime = D(k.selectors.currentTime), Ve.seekTime = H(k.selectors.seekTime), !0
            } catch (e) {
                return C("It looks like there is a problem with your controls HTML"), $(!0), !1
            }
        }

        function U() {
            f(Ve.container, k.selectors.container.replace(".", ""), Ve.supported.full)
        }

        function $(e) {
            e && s(k.types.html5, Ve.type) ? Ve.media.setAttribute("controls", "") : Ve.media.removeAttribute("controls")
        }

        function z(e) {
            var t = k.i18n.play;
            if ("undefined" != typeof k.title && k.title.length && (t += ", " + k.title), Ve.supported.full && Ve.buttons.play)for (var n = Ve.buttons.play.length - 1; n >= 0; n--)Ve.buttons.play[n].setAttribute("aria-label", t);
            e instanceof HTMLElement && e.setAttribute("title", k.i18n.frameTitle.replace("{title}", k.title))
        }

        function G() {
            if (!Ve.media)return void C("No media element found!");
            if (Ve.supported.full && (f(Ve.container, k.classes.type.replace("{0}", Ve.type), !0), s(k.types.embed, Ve.type) && f(Ve.container, k.classes.type.replace("{0}", "video"), !0), f(Ve.container, k.classes.stopped, k.autoplay), f(Ve.container, k.classes.isIos, Ve.browser.isIos), f(Ve.container, k.classes.isTouch, Ve.browser.isTouch), "video" === Ve.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", k.classes.videoWrapper), i(Ve.media, e), Ve.videoContainer = e
            }
            s(k.types.embed, Ve.type) && (J(), Ve.embedId = null)
        }

        function J() {
            for (var n = t.createElement("div"), r = Ve.embedId, s = Ve.type + "-" + Math.floor(1e4 * Math.random()), o = H('[id^="' + Ve.type + '-"]'), i = o.length - 1; i >= 0; i--)u(o[i]);
            if (f(Ve.media, k.classes.videoWrapper, !0), f(Ve.media, k.classes.embedWrapper, !0), "youtube" === Ve.type)Ve.media.appendChild(n), n.setAttribute("id", s), "object" == typeof YT ? Q(r, n) : (a(k.urls.youtube.api), e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [], e.onYouTubeReadyCallbacks.push(function () {
                Q(r, n)
            }), e.onYouTubeIframeAPIReady = function () {
                e.onYouTubeReadyCallbacks.forEach(function (e) {
                    e()
                })
            }); else if ("vimeo" === Ve.type) {
                var l = t.createElement("iframe");
                l.loaded = !1, v(l, "load", function () {
                    l.loaded = !0
                }), p(l, {
                    src: "https://player.vimeo.com/video/" + r + "?player_id=" + s + "&api=1&badge=0&byline=0&portrait=0&title=0",
                    id: s,
                    allowfullscreen: "",
                    frameborder: 0
                }), Ve.supported.full ? (n.appendChild(l), Ve.media.appendChild(n)) : Ve.media.appendChild(l), "$f" in e || a(k.urls.vimeo.api);
                var c = e.setInterval(function () {
                    "$f" in e && l.loaded && (e.clearInterval(c), Z.call(l))
                }, 50)
            } else if ("soundcloud" === Ve.type) {
                var d = t.createElement("iframe");
                d.loaded = !1, v(d, "load", function () {
                    d.loaded = !0
                }), p(d, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + r,
                    id: s
                }), n.appendChild(d), Ve.media.appendChild(n), e.SC || a(k.urls.soundcloud.api);
                var m = e.setInterval(function () {
                    e.SC && d.loaded && (e.clearInterval(m), ee.call(d))
                }, 50)
            }
        }

        function K() {
            Ve.container.plyr.embed = Ve.embed, Ve.supported.full && qe(), z(D("iframe"))
        }

        function Q(t, n) {
            "timer" in Ve || (Ve.timer = {}), Ve.embed = new YT.Player(n.id, {
                videoId: t,
                playerVars: {
                    autoplay: k.autoplay ? 1 : 0,
                    controls: Ve.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: k.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*"
                },
                events: {
                    onError: function (e) {
                        w(Ve.container, "error", !0, {code: e.data, embed: e.target})
                    }, onReady: function (t) {
                        var n = t.target;
                        Ve.media.play = function () {
                            n.playVideo(), Ve.media.paused = !1
                        }, Ve.media.pause = function () {
                            n.pauseVideo(), Ve.media.paused = !0
                        }, Ve.media.stop = function () {
                            n.stopVideo(), Ve.media.paused = !0
                        }, Ve.media.duration = n.getDuration(), Ve.media.paused = !0, Ve.media.currentTime = n.getCurrentTime(), Ve.media.muted = n.isMuted(), k.title = n.getVideoData().title, w(Ve.media, "timeupdate"), e.clearInterval(Ve.timer.buffering), Ve.timer.buffering = e.setInterval(function () {
                            Ve.media.buffered = n.getVideoLoadedFraction(), w(Ve.media, "progress"), 1 === Ve.media.buffered && (e.clearInterval(Ve.timer.buffering), w(Ve.media, "canplaythrough"))
                        }, 200), K(), xe()
                    }, onStateChange: function (t) {
                        var n = t.target;
                        switch (e.clearInterval(Ve.timer.playing), t.data) {
                            case 0:
                                Ve.media.paused = !0, w(Ve.media, "ended");
                                break;
                            case 1:
                                Ve.media.paused = !1, Ve.media.seeking = !1, w(Ve.media, "play"), w(Ve.media, "playing"), Ve.timer.playing = e.setInterval(function () {
                                    Ve.media.currentTime = n.getCurrentTime(), w(Ve.media, "timeupdate")
                                }, 100);
                                break;
                            case 2:
                                Ve.media.paused = !0, w(Ve.media, "pause")
                        }
                        w(Ve.container, "statechange", !1, {code: t.data})
                    }
                }
            })
        }

        function Z() {
            Ve.embed = $f(this), Ve.embed.addEvent("ready", function () {
                Ve.media.play = function () {
                    Ve.embed.api("play"), Ve.media.paused = !1
                }, Ve.media.pause = function () {
                    Ve.embed.api("pause"), Ve.media.paused = !0
                }, Ve.media.stop = function () {
                    Ve.embed.api("stop"), Ve.media.paused = !0
                }, Ve.media.paused = !0, Ve.media.currentTime = 0, K(), Ve.embed.api("getCurrentTime", function (e) {
                    Ve.media.currentTime = e, w(Ve.media, "timeupdate")
                }), Ve.embed.api("getDuration", function (e) {
                    Ve.media.duration = e, xe()
                }), Ve.embed.addEvent("play", function () {
                    Ve.media.paused = !1, w(Ve.media, "play"), w(Ve.media, "playing")
                }), Ve.embed.addEvent("pause", function () {
                    Ve.media.paused = !0, w(Ve.media, "pause")
                }), Ve.embed.addEvent("playProgress", function (e) {
                    Ve.media.seeking = !1, Ve.media.currentTime = e.seconds, w(Ve.media, "timeupdate")
                }), Ve.embed.addEvent("loadProgress", function (e) {
                    Ve.media.buffered = e.percent, w(Ve.media, "progress"), 1 === parseInt(e.percent) && w(Ve.media, "canplaythrough")
                }), Ve.embed.addEvent("finish", function () {
                    Ve.media.paused = !0, w(Ve.media, "ended")
                }), k.autoplay && Ve.embed.api("play")
            })
        }

        function ee() {
            Ve.embed = e.SC.Widget(this), Ve.embed.bind(e.SC.Widget.Events.READY, function () {
                Ve.media.play = function () {
                    Ve.embed.play(), Ve.media.paused = !1
                }, Ve.media.pause = function () {
                    Ve.embed.pause(), Ve.media.paused = !0
                }, Ve.media.stop = function () {
                    Ve.embed.seekTo(0), Ve.embed.pause(), Ve.media.paused = !0
                }, Ve.media.paused = !0, Ve.media.currentTime = 0, K(), Ve.embed.getPosition(function (e) {
                    Ve.media.currentTime = e, w(Ve.media, "timeupdate")
                }), Ve.embed.getDuration(function (e) {
                    Ve.media.duration = e / 1e3, xe()
                }), Ve.embed.bind(e.SC.Widget.Events.PLAY, function () {
                    Ve.media.paused = !1, w(Ve.media, "play"), w(Ve.media, "playing")
                }), Ve.embed.bind(e.SC.Widget.Events.PAUSE, function () {
                    Ve.media.paused = !0, w(Ve.media, "pause")
                }), Ve.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function (e) {
                    Ve.media.seeking = !1, Ve.media.currentTime = e.currentPosition / 1e3, w(Ve.media, "timeupdate")
                }), Ve.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function (e) {
                    Ve.media.buffered = e.loadProgress, w(Ve.media, "progress"), 1 === parseInt(e.loadProgress) && w(Ve.media, "canplaythrough")
                }), Ve.embed.bind(e.SC.Widget.Events.FINISH, function () {
                    Ve.media.paused = !0, w(Ve.media, "ended")
                }), k.autoplay && Ve.embed.play()
            })
        }

        function te() {
            "play" in Ve.media && Ve.media.play()
        }

        function ne() {
            "pause" in Ve.media && Ve.media.pause()
        }

        function re(e) {
            e === !0 ? te() : e === !1 ? ne() : Ve.media[Ve.media.paused ? "play" : "pause"]()
        }

        function ae(e) {
            "number" != typeof e && (e = k.seekTime), oe(Ve.media.currentTime - e)
        }

        function se(e) {
            "number" != typeof e && (e = k.seekTime), oe(Ve.media.currentTime + e)
        }

        function oe(e) {
            var t = 0, n = Ve.media.paused, r = ie();
            "number" == typeof e ? t = e : e.type && s(["input", "change"], e.type) && (t = e.target.value / e.target.max * r), 0 > t ? t = 0 : t > r && (t = r), Se(t);
            try {
                Ve.media.currentTime = t.toFixed(4)
            } catch (a) {
            }
            if (s(k.types.embed, Ve.type)) {
                switch (Ve.type) {
                    case"youtube":
                        Ve.embed.seekTo(t);
                        break;
                    case"vimeo":
                        Ve.embed.api("seekTo", t.toFixed(0));
                        break;
                    case"soundcloud":
                        Ve.embed.seekTo(1e3 * t)
                }
                n && ne(), w(Ve.media, "timeupdate"), Ve.media.seeking = !0
            }
            _("Seeking to " + Ve.media.currentTime + " seconds"), V(t)
        }

        function ie() {
            var e = parseInt(k.duration), t = 0;
            return null === Ve.media.duration || isNaN(Ve.media.duration) || (t = Ve.media.duration), isNaN(e) ? t : e
        }

        function le() {
            f(Ve.container, k.classes.playing, !Ve.media.paused), f(Ve.container, k.classes.stopped, Ve.media.paused), Ce(Ve.media.paused)
        }

        function ue() {
            M = {x: e.pageXOffset || 0, y: e.pageYOffset || 0}
        }

        function ce() {
            e.scrollTo(M.x, M.y)
        }

        function pe(e) {
            var n = N.supportsFullScreen;
            e && e.type === N.fullScreenEventName ? Ve.isFullscreen = N.isFullScreen(Ve.container) : n ? (N.isFullScreen(Ve.container) ? N.cancelFullScreen() : (ue(), N.requestFullScreen(Ve.container)), Ve.isFullscreen = N.isFullScreen(Ve.container)) : (Ve.isFullscreen = !Ve.isFullscreen, Ve.isFullscreen ? (v(t, "keyup", de), t.body.style.overflow = "hidden") : (g(t, "keyup", de), t.body.style.overflow = "")), f(Ve.container, k.classes.fullscreen.active, Ve.isFullscreen), Ve.isFullscreen ? Ve.container.setAttribute("tabindex", "-1") : Ve.container.removeAttribute("tabindex"), W(Ve.isFullscreen), T(Ve.buttons.fullscreen, Ve.isFullscreen), w(Ve.container, Ve.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0), !Ve.isFullscreen && n && ce()
        }

        function de(e) {
            27 === (e.which || e.charCode || e.keyCode) && Ve.isFullscreen && pe()
        }

        function me(e) {
            if ("boolean" != typeof e && (e = !Ve.media.muted), T(Ve.buttons.mute, e), Ve.media.muted = e, 0 === Ve.media.volume && fe(k.volume), s(k.types.embed, Ve.type)) {
                switch (Ve.type) {
                    case"youtube":
                        Ve.embed[Ve.media.muted ? "mute" : "unMute"]();
                        break;
                    case"vimeo":
                        Ve.embed.api("setVolume", Ve.media.muted ? 0 : parseFloat(k.volume / k.volumeMax));
                        break;
                    case"soundcloud":
                        Ve.embed.setVolume(Ve.media.muted ? 0 : parseFloat(k.volume / k.volumeMax))
                }
                w(Ve.media, "volumechange")
            }
        }

        function fe(t) {
            var n = k.volumeMax, r = k.volumeMin;
            if ("undefined" == typeof t && (t = k.volume, k.storage.enabled && E().supported && (t = e.localStorage.getItem(k.storage.key), e.localStorage.removeItem("plyr-volume"))), (null === t || isNaN(t)) && (t = k.volume), t > n && (t = n), r > t && (t = r), Ve.media.volume = parseFloat(t / n), Ve.volume.display && (Ve.volume.display.value = t), s(k.types.embed, Ve.type)) {
                switch (Ve.type) {
                    case"youtube":
                        Ve.embed.setVolume(100 * Ve.media.volume);
                        break;
                    case"vimeo":
                        Ve.embed.api("setVolume", Ve.media.volume);
                        break;
                    case"soundcloud":
                        Ve.embed.setVolume(Ve.media.volume)
                }
                w(Ve.media, "volumechange")
            }
            Ve.media.muted && t > 0 && me()
        }

        function ye() {
            var e = Ve.media.muted ? 0 : Ve.media.volume * k.volumeMax;
            fe(e + k.volumeStep / 5)
        }

        function be() {
            var e = Ve.media.muted ? 0 : Ve.media.volume * k.volumeMax;
            fe(e - k.volumeStep / 5)
        }

        function ve() {
            var t = Ve.media.muted ? 0 : Ve.media.volume * k.volumeMax;
            Ve.supported.full && (Ve.volume.input && (Ve.volume.input.value = t), Ve.volume.display && (Ve.volume.display.value = t)), k.storage.enabled && E().supported && !isNaN(t) && e.localStorage.setItem(k.storage.key, t), f(Ve.container, k.classes.muted, 0 === t), Ve.supported.full && Ve.buttons.mute && T(Ve.buttons.mute, 0 === t)
        }

        function ge(e) {
            Ve.supported.full && Ve.buttons.captions && ("boolean" != typeof e && (e = -1 === Ve.container.className.indexOf(k.classes.captions.active)), Ve.captionsEnabled = e, T(Ve.buttons.captions, Ve.captionsEnabled), f(Ve.container, k.classes.captions.active, Ve.captionsEnabled), w(Ve.container, Ve.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0))
        }

        function he(e) {
            var t = "waiting" === e.type;
            clearTimeout(Ve.timers.loading), Ve.timers.loading = setTimeout(function () {
                f(Ve.container, k.classes.loading, t)
            }, t ? 250 : 0)
        }

        function ke(e) {
            if (Ve.supported.full) {
                var t = Ve.progress.played, n = 0, r = ie();
                if (e)switch (e.type) {
                    case"timeupdate":
                    case"seeking":
                        if (Ve.controls.pressed)return;
                        n = x(Ve.media.currentTime, r), "timeupdate" == e.type && Ve.buttons.seek && (Ve.buttons.seek.value = n);
                        break;
                    case"playing":
                    case"progress":
                        t = Ve.progress.buffer, n = function () {
                            var e = Ve.media.buffered;
                            return e && e.length ? x(e.end(0), r) : "number" == typeof e ? 100 * e : 0
                        }()
                }
                we(t, n)
            }
        }

        function we(e, t) {
            if (Ve.supported.full) {
                if ("undefined" == typeof t && (t = 0), "undefined" == typeof e) {
                    if (!Ve.progress || !Ve.progress.buffer)return;
                    e = Ve.progress.buffer
                }
                e instanceof HTMLElement ? e.value = t : e && (e.bar && (e.bar.value = t), e.text && (e.text.innerHTML = t))
            }
        }

        function Te(e, t) {
            if (t) {
                isNaN(e) && (e = 0), Ve.secs = parseInt(e % 60), Ve.mins = parseInt(e / 60 % 60), Ve.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(ie() / 60 / 60 % 60) > 0;
                Ve.secs = ("0" + Ve.secs).slice(-2), Ve.mins = ("0" + Ve.mins).slice(-2), t.innerHTML = (n ? Ve.hours + ":" : "") + Ve.mins + ":" + Ve.secs
            }
        }

        function xe() {
            if (Ve.supported.full) {
                var e = ie() || 0;
                !Ve.duration && k.displayDuration && Ve.media.paused && Te(e, Ve.currentTime), Ve.duration && Te(e, Ve.duration), Ee()
            }
        }

        function _e(e) {
            Te(Ve.media.currentTime, Ve.currentTime), e && "timeupdate" == e.type && Ve.media.seeking || ke(e)
        }

        function Se(e) {
            "number" != typeof e && (e = 0);
            var t = ie(), n = x(e, t);
            Ve.progress && Ve.progress.played && (Ve.progress.played.value = n), Ve.buttons && Ve.buttons.seek && (Ve.buttons.seek.value = n)
        }

        function Ee(e) {
            var t = ie();
            if (k.tooltips.seek && Ve.progress.container && 0 !== t) {
                var n = Ve.progress.container.getBoundingClientRect(), r = 0, a = k.classes.tooltip + "--visible";
                if (e)r = 100 / n.width * (e.pageX - n.left); else {
                    if (!y(Ve.progress.tooltip, a))return;
                    r = Ve.progress.tooltip.style.left.replace("%", "")
                }
                0 > r ? r = 0 : r > 100 && (r = 100), Te(t / 100 * r, Ve.progress.tooltip), Ve.progress.tooltip.style.left = r + "%", e && s(["mouseenter", "mouseleave"], e.type) && f(Ve.progress.tooltip, a, "mouseenter" === e.type)
            }
        }

        function Ce(t) {
            if (k.hideControls && "audio" !== Ve.type) {
                var n = 0, r = !1, a = t;
                if ("boolean" != typeof t && (t && t.type ? (r = "enterfullscreen" === t.type, a = s(["mousemove", "touchstart", "mouseenter", "focus"], t.type), s(["mousemove", "touchmove"], t.type) && (n = 2e3), "focus" === t.type && (n = 3e3)) : a = y(Ve.container, k.classes.hideControls)), e.clearTimeout(Ve.timers.hover), a || Ve.media.paused) {
                    if (f(Ve.container, k.classes.hideControls, !1), Ve.media.paused)return;
                    Ve.browser.isTouch && (n = 3e3)
                }
                a && Ve.media.paused || (Ve.timers.hover = e.setTimeout(function () {
                    (!Ve.controls.pressed && !Ve.controls.hover || r) && f(Ve.container, k.classes.hideControls, !0)
                }, n))
            }
        }

        function Fe(e) {
            if ("undefined" != typeof e)return void Ae(e);
            var t;
            switch (Ve.type) {
                case"youtube":
                    t = Ve.embed.getVideoUrl();
                    break;
                case"vimeo":
                    Ve.embed.api("getVideoUrl", function (e) {
                        t = e
                    });
                    break;
                case"soundcloud":
                    Ve.embed.getCurrentSound(function (e) {
                        t = e.permalink_url
                    });
                    break;
                default:
                    t = Ve.media.currentSrc
            }
            return t || ""
        }

        function Ae(n) {
            if (!("undefined" != typeof n && "sources" in n && n.sources.length))return void C("Invalid source format");
            if (ne(), Se(), we(), Pe(), "youtube" === Ve.type ? (Ve.embed.destroy(), e.clearInterval(Ve.timer.buffering), e.clearInterval(Ve.timer.playing)) : "video" === Ve.type && Ve.videoContainer && u(Ve.videoContainer), Ve.embed = null, u(Ve.media), "type" in n && (Ve.type = n.type, "video" === Ve.type)) {
                var r = n.sources[0];
                "type" in r && s(k.types.embed, r.type) && (Ve.type = r.type)
            }
            switch (Ve.supported = A(Ve.type), Ve.type) {
                case"video":
                    Ve.media = t.createElement("video");
                    break;
                case"audio":
                    Ve.media = t.createElement("audio");
                    break;
                case"youtube":
                case"vimeo":
                case"soundcloud":
                    Ve.media = t.createElement("div"), Ve.embedId = n.sources[0].src
            }
            c(Ve.container, Ve.media), "undefined" != typeof n.autoplay && (k.autoplay = n.autoplay), s(k.types.html5, Ve.type) && (k.crossorigin && Ve.media.setAttribute("crossorigin", ""), k.autoplay && Ve.media.setAttribute("autoplay", ""), "poster" in n && Ve.media.setAttribute("poster", n.poster), k.loop && Ve.media.setAttribute("loop", "")), Ve.container.className = Ve.originalClassName, f(Ve.container, k.classes.fullscreen.active, Ve.isFullscreen), f(Ve.container, k.classes.captions.active, Ve.captionsEnabled), U(), s(k.types.html5, Ve.type) && Y("source", n.sources), G(), s(k.types.html5, Ve.type) ? ("tracks" in n && Y("track", n.tracks), Ve.media.load(), qe(), xe()) : s(k.types.embed, Ve.type) && !Ve.supported.full && qe(), k.title = n.title, z(), Ve.container.plyr.media = Ve.media
        }

        function Ie(e) {
            "video" === Ve.type && Ve.media.setAttribute("poster", e)
        }

        function Ne() {
            function n() {
                var e = Ve.media.paused;
                e ? te() : ne();
                var t = Ve.buttons[e ? "play" : "pause"], n = Ve.buttons[e ? "pause" : "play"];
                if (n = n && n.length > 1 ? n[n.length - 1] : n[0]) {
                    var r = y(t, k.classes.tabFocus);
                    setTimeout(function () {
                        n.focus(), r && (f(t, k.classes.tabFocus, !1), f(n, k.classes.tabFocus, !0))
                    }, 100)
                }
            }

            function r() {
                var e = t.activeElement;
                e && e != t.body ? t.querySelector && (e = t.querySelector(":focus")) : e = null;
                for (var n in Ve.buttons) {
                    var r = Ve.buttons[n];
                    if (r instanceof NodeList)for (var a = 0; a < r.length; a++)f(r[a], k.classes.tabFocus, r[a] === e); else f(r, k.classes.tabFocus, r === e)
                }
            }

            var a = Ve.browser.isIE ? "change" : "input";
            v(e, "keyup", function (e) {
                var t = e.keyCode ? e.keyCode : e.which;
                9 == t && r()
            }), v(t.body, "click", function () {
                f(D("." + k.classes.tabFocus), k.classes.tabFocus, !1)
            });
            for (var o in Ve.buttons) {
                var i = Ve.buttons[o];
                v(i, "blur", function () {
                    f(i, "tab-focus", !1)
                })
            }
            h(Ve.buttons.play, "click", k.listeners.play, n), h(Ve.buttons.pause, "click", k.listeners.pause, n), h(Ve.buttons.restart, "click", k.listeners.restart, oe), h(Ve.buttons.rewind, "click", k.listeners.rewind, ae), h(Ve.buttons.forward, "click", k.listeners.forward, se), h(Ve.buttons.seek, a, k.listeners.seek, oe), h(Ve.volume.input, a, k.listeners.volume, function () {
                fe(Ve.volume.input.value)
            }), h(Ve.buttons.mute, "click", k.listeners.mute, me), h(Ve.buttons.fullscreen, "click", k.listeners.fullscreen, pe), N.supportsFullScreen && v(t, N.fullScreenEventName, pe), v(Ve.buttons.captions, "click", ge), v(Ve.progress.container, "mouseenter mouseleave mousemove", Ee), k.hideControls && (v(Ve.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Ce), v(Ve.controls, "mouseenter mouseleave", function (e) {
                Ve.controls.hover = "mouseenter" === e.type
            }), v(Ve.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
                Ve.controls.pressed = s(["mousedown", "touchstart"], e.type)
            }), v(Ve.controls, "focus blur", Ce, !0)), v(Ve.volume.input, "wheel", function (e) {
                e.preventDefault();
                var t = e.webkitDirectionInvertedFromDevice;
                (e.deltaY < 0 || e.deltaX > 0) && (t ? be() : ye()), (e.deltaY > 0 || e.deltaX < 0) && (t ? ye() : be())
            })
        }

        function Me() {
            if (v(Ve.media, "timeupdate seeking", _e), v(Ve.media, "timeupdate", V), v(Ve.media, "durationchange loadedmetadata", xe), v(Ve.media, "ended", function () {
                    "video" === Ve.type && q(), le(), oe(0), xe(), "video" === Ve.type && k.showPosterOnEnd && Ve.media.load()
                }), v(Ve.media, "progress playing", ke), v(Ve.media, "volumechange", ve), v(Ve.media, "play pause", le), v(Ve.media, "waiting canplay seeked", he), k.clickToPlay && "audio" !== Ve.type) {
                var e = D("." + k.classes.videoWrapper);
                if (!e)return;
                e.style.cursor = "pointer", v(e, "click", function () {
                    k.hideControls && Ve.browser.isTouch && !Ve.media.paused || (Ve.media.paused ? te() : Ve.media.ended ? (oe(), te()) : ne())
                })
            }
            k.disableContextMenu && v(Ve.media, "contextmenu", function (e) {
                e.preventDefault()
            }), v(Ve.media, k.events.join(" "), function (e) {
                w(Ve.container, e.type, !0)
            })
        }

        function Pe() {
            if (s(k.types.html5, Ve.type)) {
                for (var e = Ve.media.querySelectorAll("source"), t = 0; t < e.length; t++)u(e[t]);
                Ve.media.setAttribute("src", "https://cdn.selz.com/plyr/blank.mp4"), Ve.media.load(), _("Cancelled network requests for old media")
            }
        }

        function Le() {
            if (!Ve.init)return null;
            if (Ve.container.setAttribute("class", m(k.selectors.container)), Ve.init = !1, u(D(k.selectors.controls.wrapper)), "youtube" === Ve.type)return void Ve.embed.destroy();
            "video" === Ve.type && (u(D(k.selectors.captions)), l(Ve.videoContainer)), $(!0);
            var e = Ve.media.cloneNode(!0);
            Ve.media.parentNode.replaceChild(e, Ve.media)
        }

        function Oe() {
            if (Ve.init)return null;
            if (N = S(), Ve.browser = n(), Ve.media = Ve.container.querySelectorAll("audio, video")[0], Ve.media || (Ve.media = Ve.container.querySelectorAll("[data-type]")[0]), Ve.media) {
                Ve.originalClassName = Ve.container.className;
                var e = Ve.media.tagName.toLowerCase();
                if ("div" === e ? (Ve.type = Ve.media.getAttribute("data-type"), Ve.embedId = Ve.media.getAttribute("data-video-id"), Ve.media.removeAttribute("data-type"), Ve.media.removeAttribute("data-video-id")) : (Ve.type = e, k.crossorigin = null !== Ve.media.getAttribute("crossorigin"), k.autoplay = k.autoplay || null !== Ve.media.getAttribute("autoplay"), k.loop = k.loop || null !== Ve.media.getAttribute("loop")), Ve.supported = A(Ve.type), U(), !Ve.supported.basic)return !1;
                if (_(Ve.browser.name + " " + Ve.browser.version), G(), s(k.types.html5, Ve.type)) {
                    if (!Ve.supported.full)return void(Ve.init = !0);
                    qe(), z(), k.autoplay && te()
                } else s(k.types.embed, Ve.type) && !Ve.supported.full && qe();
                Ve.init = !0
            }
        }

        function qe() {
            if (!Ve.supported.full)return C("No full support for this media type (" + Ve.type + ")"), u(D(k.selectors.controls.wrapper)), u(D(k.selectors.buttons.play)), void $(!0);
            var e = !H(k.selectors.controls.wrapper).length;
            e && X(), B() && (e && Ne(), Me(), $(), L(), O(), fe(), ve(), _e(), le(), xe(), w(Ve.container, "ready", !0))
        }

        var Ve = this;
        return Ve.container = b, Ve.timers = {}, _(k), Oe(), Ve.init ? {
            media: Ve.media,
            play: te,
            pause: ne,
            restart: oe,
            rewind: ae,
            forward: se,
            seek: oe,
            source: Fe,
            poster: Ie,
            setVolume: fe,
            togglePlay: re,
            toggleMute: me,
            toggleCaptions: ge,
            toggleFullscreen: pe,
            toggleControls: Ce,
            isFullscreen: function () {
                return Ve.isFullscreen || !1
            },
            support: function (e) {
                return r(Ve, e)
            },
            destroy: Le,
            restore: Oe,
            getCurrentTime: function () {
                return Ve.media.currentTime
            }
        } : {}
    }

    function F(e, n) {
        var r = new XMLHttpRequest;
        "string" == typeof n && null !== t.querySelector("#" + n) || "withCredentials" in r && (r.open("GET", e, !0), r.onload = function () {
            var e = t.createElement("div");
            e.setAttribute("hidden", ""), "string" == typeof n && e.setAttribute("id", n), e.innerHTML = r.responseText, t.body.insertBefore(e, t.body.childNodes[0])
        }, r.send())
    }

    function A(e) {
        var r, a, s = n(), o = s.isIE && s.version <= 9, i = s.isIos, l = /iPhone|iPod/i.test(navigator.userAgent), u = !!t.createElement("audio").canPlayType, c = !!t.createElement("video").canPlayType;
        switch (e) {
            case"video":
                r = c, a = r && !o && !l;
                break;
            case"audio":
                r = u, a = r && !o;
                break;
            case"vimeo":
            case"youtube":
            case"soundcloud":
                r = !0, a = !o && !i;
                break;
            default:
                r = u && c, a = r && !o
        }
        return {basic: r, full: a}
    }

    function I(e, n) {
        var r = [], a = [], s = [P.selectors.html5, P.selectors.embed].join(",");
        if ("string" == typeof e ? e = t.querySelectorAll(e) : e instanceof HTMLElement ? e = [e] : e instanceof NodeList || "string" == typeof e || ("undefined" == typeof n && "object" == typeof e && (n = e), e = t.querySelectorAll(s)), !A().basic || !e.length)return !1;
        e instanceof NodeList && (e = Array.prototype.slice.call(e));
        for (var o = 0; o < e.length; o++) {
            var l = e[o], u = l.querySelectorAll(s);
            if (u.length > 1)for (var c = 0; c < u.length; c++)a.push({
                element: i(u[c], t.createElement("div")),
                original: l
            }); else a.push({element: l})
        }
        for (var p in a) {
            var d = a[p].element, m = a[p].original || d;
            if (b(d, s) && (d = i(d, t.createElement("div"))), !("plyr" in d)) {
                var f = _({}, P, n, JSON.parse(m.getAttribute("data-plyr")));
                if (!f.enabled)return null;
                var y = new C(d, f);
                d.plyr = Object.keys(y).length ? y : !1, w(m, "setup", !0, {plyr: d.plyr})
            }
            r.push(d)
        }
        return r
    }

    var N, M = {x: 0, y: 0}, P = {
        enabled: !0,
        debug: !1,
        autoplay: !1,
        loop: !1,
        seekTime: 10,
        volume: 5,
        volumeMin: 0,
        volumeMax: 10,
        volumeStep: 1,
        duration: null,
        displayDuration: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "assets/plyr/plyr.svg",
        clickToPlay: !0,
        hideControls: !0,
        showPosterOnEnd: !1,
        disableContextMenu: !0,
        tooltips: {controls: !1, seek: !0},
        selectors: {
            html5: "video, audio",
            embed: "[data-type]",
            container: ".plyr",
            controls: {container: null, wrapper: ".plyr__controls"},
            labels: "[data-plyr]",
            buttons: {
                seek: '[data-plyr="seek"]',
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                forward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                fullscreen: '[data-plyr="fullscreen"]'
            },
            volume: {input: '[data-plyr="volume"]', display: ".plyr__volume--display"},
            progress: {
                container: ".plyr__progress",
                buffer: ".plyr__progress--buffer",
                played: ".plyr__progress--played"
            },
            captions: ".plyr__captions",
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration"
        },
        classes: {
            videoWrapper: "plyr__video-wrapper",
            embedWrapper: "plyr__video-embed",
            type: "plyr--{0}",
            stopped: "plyr--stopped",
            playing: "plyr--playing",
            muted: "plyr--muted",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            captions: {enabled: "plyr--captions-enabled", active: "plyr--captions-active"},
            fullscreen: {enabled: "plyr--fullscreen-enabled", active: "plyr--fullscreen-active"},
            tabFocus: "tab-focus"
        },
        captions: {defaultActive: !1},
        fullscreen: {enabled: !0, fallback: !0, allowAudio: !1},
        storage: {enabled: !0, key: "plyr"},
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime} secs",
            play: "Play",
            pause: "Pause",
            forward: "Forward {seektime} secs",
            played: "played",
            buffered: "buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            toggleMute: "Toggle Mute",
            toggleCaptions: "Toggle Captions",
            toggleFullscreen: "Toggle Fullscreen",
            frameTitle: "Player for {title}"
        },
        types: {embed: ["youtube", "vimeo", "soundcloud"], html5: ["video", "audio"]},
        urls: {
            vimeo: {api: "https://cdn.plyr.io/froogaloop/1.0.1/plyr.froogaloop.js"},
            youtube: {api: "https://www.youtube.com/iframe_api"},
            soundcloud: {api: "https://w.soundcloud.com/player/api.js"}
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            forward: null,
            mute: null,
            volume: null,
            captions: null,
            fullscreen: null
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "emptied"]
    };
    return {setup: I, supported: A, loadSprite: F}
}), function () {
    function e(e, t) {
        t = t || {bubbles: !1, cancelable: !1, detail: void 0};
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    }

    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
}();