/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr = function (a, b, c) {
  function D(a) {
    j.cssText = a;
  }function E(a, b) {
    return D(n.join(a + ";") + (b || ""));
  }function F(a, b) {
    return (typeof a === "undefined" ? "undefined" : _typeof(a)) === b;
  }function G(a, b) {
    return !!~("" + a).indexOf(b);
  }function H(a, b) {
    for (var d in a) {
      var e = a[d];if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }return !1;
  }function I(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
    }return !1;
  }function J(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + p.join(d + " ") + d).split(" ");return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c));
  }function K() {
    e.input = function (c) {
      for (var d = 0, e = c.length; d < e; d++) {
        u[c[d]] = c[d] in k;
      }return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
      for (var d = 0, e, f, h, i = a.length; d < i; d++) {
        k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
      }return t;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "));
  }var d = "2.6.2",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k = b.createElement("input"),
      l = ":)",
      m = {}.toString,
      n = " -webkit- -moz- -o- -ms- ".split(" "),
      o = "Webkit Moz O ms",
      p = o.split(" "),
      q = o.toLowerCase().split(" "),
      r = { svg: "http://www.w3.org/2000/svg" },
      s = {},
      t = {},
      u = {},
      v = [],
      w = v.slice,
      x,
      y = function y(a, c, d, e) {
    var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");if (parseInt(d, 10)) while (d--) {
      j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
    }return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i;
  },
      z = function z(b) {
    var c = a.matchMedia || a.msMatchMedia;if (c) return c(b).matches;var d;return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
      d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute";
    }), d;
  },
      A = function () {
    function d(d, e) {
      e = e || b.createElement(a[d] || "div"), d = "on" + d;var f = d in e;return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f;
    }var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };return d;
  }(),
      B = {}.hasOwnProperty,
      C;!F(B, "undefined") && !F(B.call, "undefined") ? C = function C(a, b) {
    return B.call(a, b);
  } : C = function C(a, b) {
    return b in a && F(a.constructor.prototype[b], "undefined");
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;if (typeof c != "function") throw new TypeError();var d = w.call(arguments, 1),
        e = function e() {
      if (this instanceof e) {
        var a = function a() {};a.prototype = c.prototype;var f = new a(),
            g = c.apply(f, d.concat(w.call(arguments)));return Object(g) === g ? g : f;
      }return c.apply(b, d.concat(w.call(arguments)));
    };return e;
  }), s.flexbox = function () {
    return J("flexWrap");
  }, s.canvas = function () {
    var a = b.createElement("canvas");return !!a.getContext && !!a.getContext("2d");
  }, s.canvastext = function () {
    return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function");
  }, s.webgl = function () {
    return !!a.WebGLRenderingContext;
  }, s.touch = function () {
    var c;return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
      c = a.offsetTop === 9;
    }), c;
  }, s.geolocation = function () {
    return "geolocation" in navigator;
  }, s.postmessage = function () {
    return !!a.postMessage;
  }, s.websqldatabase = function () {
    return !!a.openDatabase;
  }, s.indexedDB = function () {
    return !!J("indexedDB", a);
  }, s.hashchange = function () {
    return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
  }, s.history = function () {
    return !!a.history && !!history.pushState;
  }, s.draganddrop = function () {
    var a = b.createElement("div");return "draggable" in a || "ondragstart" in a && "ondrop" in a;
  }, s.websockets = function () {
    return "WebSocket" in a || "MozWebSocket" in a;
  }, s.rgba = function () {
    return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba");
  }, s.hsla = function () {
    return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla");
  }, s.multiplebgs = function () {
    return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background);
  }, s.backgroundsize = function () {
    return J("backgroundSize");
  }, s.borderimage = function () {
    return J("borderImage");
  }, s.borderradius = function () {
    return J("borderRadius");
  }, s.boxshadow = function () {
    return J("boxShadow");
  }, s.textshadow = function () {
    return b.createElement("div").style.textShadow === "";
  }, s.opacity = function () {
    return E("opacity:.55"), /^0.55$/.test(j.opacity);
  }, s.cssanimations = function () {
    return J("animationName");
  }, s.csscolumns = function () {
    return J("columnCount");
  }, s.cssgradients = function () {
    var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient");
  }, s.cssreflections = function () {
    return J("boxReflect");
  }, s.csstransforms = function () {
    return !!J("transform");
  }, s.csstransforms3d = function () {
    var a = !!J("perspective");return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
      a = b.offsetLeft === 9 && b.offsetHeight === 3;
    }), a;
  }, s.csstransitions = function () {
    return J("transition");
  }, s.fontface = function () {
    var a;return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
      var e = b.getElementById("smodernizr"),
          f = e.sheet || e.styleSheet,
          g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
    }), a;
  }, s.generatedcontent = function () {
    var a;return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
      a = b.offsetHeight >= 3;
    }), a;
  }, s.video = function () {
    var a = b.createElement("video"),
        c = !1;try {
      if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
    } catch (d) {}return c;
  }, s.audio = function () {
    var a = b.createElement("audio"),
        c = !1;try {
      if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "");
    } catch (d) {}return c;
  }, s.localstorage = function () {
    try {
      return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
    } catch (a) {
      return !1;
    }
  }, s.sessionstorage = function () {
    try {
      return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
    } catch (a) {
      return !1;
    }
  }, s.webworkers = function () {
    return !!a.Worker;
  }, s.applicationcache = function () {
    return !!a.applicationCache;
  }, s.svg = function () {
    return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect;
  }, s.inlinesvg = function () {
    var a = b.createElement("div");return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg;
  }, s.smil = function () {
    return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")));
  }, s.svgclippaths = function () {
    return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")));
  };for (var L in s) {
    C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
  }return e.input || K(), e.addTest = function (a, b) {
    if ((typeof a === "undefined" ? "undefined" : _typeof(a)) == "object") for (var d in a) {
      C(a, d) && e.addTest(d, a[d]);
    } else {
      a = a.toLowerCase();if (e[a] !== c) return e;b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b;
    }return e;
  }, D(""), i = k = null, function (a, b) {
    function k(a, b) {
      var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
    }function l() {
      var a = r.elements;return typeof a == "string" ? a.split(" ") : a;
    }function m(a) {
      var b = i[a[g]];return b || (b = {}, h++, a[g] = h, i[h] = b), b;
    }function n(a, c, f) {
      c || (c = b);if (j) return c.createElement(a);f || (f = m(c));var g;return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g;
    }function o(a, c) {
      a || (a = b);if (j) return a.createDocumentFragment();c = c || m(a);var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;for (; e < g; e++) {
        d.createElement(f[e]);
      }return d;
    }function p(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return r.shivMethods ? n(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ");return n}")(r, b.frag);
    }function q(a) {
      a || (a = b);var c = m(a);return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a;
    }var c = a.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f,
        g = "_html5shiv",
        h = 0,
        i = {},
        j;(function () {
      try {
        var a = b.createElement("a");a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
          b.createElement("a");var a = b.createDocumentFragment();return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
        }();
      } catch (c) {
        f = !0, j = !0;
      }
    })();var r = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, supportsUnknownElements: j, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: q, createElement: n, createDocumentFragment: o };a.html5 = r, q(b);
  }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function (a) {
    return H([a]);
  }, e.testAllProps = J, e.testStyles = y, e.prefixed = function (a, b, c) {
    return b ? J(a, b, c) : J(a, "pfx");
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e;
}(this, this.document), function (a, b, c) {
  function d(a) {
    return "[object Function]" == o.call(a);
  }function e(a) {
    return "string" == typeof a;
  }function f() {}function g(a) {
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
  }function h() {
    var a = p.shift();q = 1, a ? a.t ? m(function () {
      ("c" == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
    }, 0) : (a(), h()) : q = 0;
  }function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
        "img" != a && m(function () {
          t.removeChild(l);
        }, 50);for (var d in y[c]) {
          y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
    }var j = j || _B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r);
    }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
  }function j(a, b, c, d, f) {
    return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
  }function k() {
    var a = _B;return a.loader = { load: j, i: 0 }, a;
  }var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function (a) {
    return "[object Array]" == o.call(a);
  },
      x = [],
      y = {},
      z = { timeout: function timeout(a, b) {
      return b.length && (a.timeout = b[0]), a;
    } },
      _A,
      _B;_B = function B(a) {
    function b(a) {
      var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;for (f = 0; f < d; f++) {
        g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
      }for (f = 0; f < b; f++) {
        c = x[f](c);
      }return c;
    }function g(a, e, f, g, h) {
      var i = b(a),
          j = i.autoCallback;i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
      })));
    }function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a)) c || (j = function j() {
            var a = [].slice.call(arguments);k.apply(this, a), l();
          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
            var b = 0,
                c;for (c in a) {
              a.hasOwnProperty(c) && b++;
            }return b;
          }(), a) {
            a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
              var a = [].slice.call(arguments);k.apply(this, a), l();
            } : j[n] = function (a) {
              return function () {
                var b = [].slice.call(arguments);a && a.apply(this, b), l();
              };
            }(k[n])), g(a[n], j, b, n, h));
          }
        } else !c && l();
      }var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;c(h ? a.yep : a.nope, !!i), i && c(i);
    }var i,
        j,
        l = this.yepnope.loader;if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
      j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
    } else Object(a) === a && h(a, l);
  }, _B.addPrefix = function (a, b) {
    z[a] = b;
  }, _B.addFilter = function (a) {
    x.push(a);
  }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", _A = function A() {
    b.removeEventListener("DOMContentLoaded", _A, 0), b.readyState = "complete";
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
    var k = b.createElement("script"),
        l,
        o,
        e = e || _B.errorTimeout;k.src = a;for (o in d) {
      k.setAttribute(o, d[o]);
    }c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
    }, m(function () {
      l || (l = 1, c(1));
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
    var e = b.createElement("link"),
        j,
        c = i ? h : c || f;e.href = a, e.rel = "stylesheet", e.type = "text/css";for (j in d) {
      e.setAttribute(j, d[j]);
    }g || (n.parentNode.insertBefore(e, n), m(c, 0));
  };
}(this, document), Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0));
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com> 
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function easyResponsiveTabs(options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                tabidentify: '',
                activetab_bg: 'white',
                inactive_bg: '#F5F5F5',
                active_border_color: '#c1c1c1',
                active_content_border_color: '#c1c1c1',
                activate: function activate() {}
                //Variables
            };var options = $.extend(defaults, options);
            var opt = options,
                jtype = opt.type,
                jfit = opt.fit,
                jwidth = opt.width,
                vtabs = 'vertical',
                accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);

            //Events
            $(this).bind('tabactivate', function (e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e);
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list.' + options.tabidentify);
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list.' + options.tabidentify + ' li').addClass('resp-tab-item').addClass(options.tabidentify);
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                if (options.type == 'vertical') $respTabsList.css('margin-top', '3px');

                $respTabs.find('.resp-tabs-container.' + options.tabidentify).css('border-color', options.active_content_border_color);
                $respTabs.find('.resp-tabs-container.' + options.tabidentify + ' > div').addClass('resp-tab-content').addClass(options.tabidentify);
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion').addClass(options.tabidentify);
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content.' + options.tabidentify).before("<h2 class='resp-accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");

                $respTabs.find('.resp-tab-content.' + options.tabidentify).prev("h2").css({
                    'background-color': options.inactive_bg,
                    'border-color': options.active_border_color
                });

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + itemCount);
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + count);
                    $tabItem.attr('role', 'tab');
                    $tabItem.css({
                        'background-color': options.inactive_bg,
                        'border-color': 'none'
                    });

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content.' + options.tabidentify).each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + tabcount).css({
                            'border-color': options.active_border_color
                        });
                        tabcount++;
                    });
                    count++;
                });

                // Show correct content area
                var tabNum = 0;
                if (hash != '') {
                    var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                    if (matches !== null && matches.length === 2) {
                        tabNum = parseInt(matches[1], 10) - 1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                    'background-color': options.activetab_bg,
                    'border-color': options.active_border_color
                });

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                        'background-color': options.activetab_bg + ' !important',
                        'border-color': options.active_border_color,
                        'background': 'none'
                    });

                    $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-tab-content-active').addClass(options.tabidentify).attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {}
                    // $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-accordion-closed'); //removed resp-tab-content-active


                    //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {

                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp('', function () {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('resp-tab-content-active');
                        } else {
                            console.log('here');
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });

                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');

                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);

                        //Update Browser History
                        if (historyApi) {
                            var currentHash = window.location.hash;
                            var tabAriaParts = $tabAria.split('tab_item-');
                            // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                            var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();
                            if (currentHash != "") {
                                var re = new RegExp(respTabsId + "[0-9]+");
                                if (currentHash.match(re) != null) {
                                    newHash = currentHash.replace(re, newHash);
                                } else {
                                    newHash = currentHash + "|" + newHash;
                                }
                            } else {
                                newHash = '#' + newHash;
                            }

                            history.replaceState(null, null, newHash);
                        }
                    });
                });

                //Window resize function                   
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);
$(document).ready(function () {
    $('#ChildVerticalTab_1').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true,
        tabidentify: 'ver_1', // The tab groups identifier
        activetab_bg: '#fff', // background color for active tabs in this group
        inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
        active_border_color: '#c1c1c1', // border color for active tabs heads in this group
        active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
    });
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");if (!o.element) throw new Error("No element option passed to Waypoint constructor");if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }var e = 0,
      i = {};t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }, t.prototype.trigger = function (t) {
    this.enabled && this.callback && this.callback.apply(this, t);
  }, t.prototype.destroy = function () {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function () {
    return this.enabled = !1, this;
  }, t.prototype.enable = function () {
    return this.context.refresh(), this.enabled = !0, this;
  }, t.prototype.next = function () {
    return this.group.next(this);
  }, t.prototype.previous = function () {
    return this.group.previous(this);
  }, t.invokeAll = function (t) {
    var e = [];for (var o in i) {
      e.push(i[o]);
    }for (var n = 0, r = e.length; r > n; n++) {
      e[n][t]();
    }
  }, t.destroyAll = function () {
    t.invokeAll("destroy");
  }, t.disableAll = function () {
    t.invokeAll("disable");
  }, t.enableAll = function () {
    t.invokeAll("enable");
  }, t.refreshAll = function () {
    t.Context.refreshAll();
  }, t.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function () {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function bottomInView() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    }, "right-in-view": function rightInView() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    } }, window.Waypoint = t;
}(), function () {
  "use strict";
  function t(t) {
    window.setTimeout(t, 1e3 / 60);
  }function e(t) {
    this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;e.prototype.add = function (t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";this.waypoints[e][t.key] = t, this.refresh();
  }, e.prototype.checkEmpty = function () {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical);t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
  }, e.prototype.createThrottledResizeHandler = function () {
    function t() {
      e.handleResize(), e.didResize = !1;
    }var e = this;this.adapter.on("resize.waypoints", function () {
      e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.createThrottledScrollHandler = function () {
    function t() {
      e.handleScroll(), e.didScroll = !1;
    }var e = this;this.adapter.on("scroll.waypoints", function () {
      (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t));
    });
  }, e.prototype.handleResize = function () {
    n.Context.refreshAll();
  }, e.prototype.handleScroll = function () {
    var t = {},
        e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };for (var i in e) {
      var o = e[i],
          n = o.newScroll > o.oldScroll,
          r = n ? o.forward : o.backward;for (var s in this.waypoints[i]) {
        var a = this.waypoints[i][s],
            l = o.oldScroll < a.triggerPoint,
            h = o.newScroll >= a.triggerPoint,
            p = l && h,
            u = !l && !h;(p || u) && (a.queueTrigger(r), t[a.group.id] = a.group);
      }
    }for (var c in t) {
      t[c].flushTriggers();
    }this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
  }, e.prototype.innerHeight = function () {
    return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function (t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty();
  }, e.prototype.innerWidth = function () {
    return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function () {
    var t = [];for (var e in this.waypoints) {
      for (var i in this.waypoints[e]) {
        t.push(this.waypoints[e][i]);
      }
    }for (var o = 0, n = t.length; n > o; o++) {
      t[o].destroy();
    }
  }, e.prototype.refresh = function () {
    var t,
        e = this.element == this.element.window,
        i = e ? void 0 : this.adapter.offset(),
        o = {};this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };for (var r in t) {
      var s = t[r];for (var a in this.waypoints[r]) {
        var l,
            h,
            p,
            u,
            c,
            d = this.waypoints[r][a],
            f = d.options.offset,
            w = d.triggerPoint,
            y = 0,
            g = null == w;d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group);
      }
    }return n.requestAnimationFrame(function () {
      for (var t in o) {
        o[t].flushTriggers();
      }
    }), this;
  }, e.findOrCreateByElement = function (t) {
    return e.findByElement(t) || new e(t);
  }, e.refreshAll = function () {
    for (var t in o) {
      o[t].refresh();
    }
  }, e.findByElement = function (t) {
    return o[t.waypointContextKey];
  }, window.onload = function () {
    r && r(), e.refreshAll();
  }, n.requestAnimationFrame = function (e) {
    var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;i.call(window, e);
  }, n.Context = e;
}(), function () {
  "use strict";
  function t(t, e) {
    return t.triggerPoint - e.triggerPoint;
  }function e(t, e) {
    return e.triggerPoint - t.triggerPoint;
  }function i(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this;
  }var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;i.prototype.add = function (t) {
    this.waypoints.push(t);
  }, i.prototype.clearTriggerQueues = function () {
    this.triggerQueues = { up: [], down: [], left: [], right: [] };
  }, i.prototype.flushTriggers = function () {
    for (var i in this.triggerQueues) {
      var o = this.triggerQueues[i],
          n = "up" === i || "left" === i;o.sort(n ? e : t);for (var r = 0, s = o.length; s > r; r += 1) {
        var a = o[r];(a.options.continuous || r === o.length - 1) && a.trigger([i]);
      }
    }this.clearTriggerQueues();
  }, i.prototype.next = function (e) {
    this.waypoints.sort(t);var i = n.Adapter.inArray(e, this.waypoints),
        o = i === this.waypoints.length - 1;return o ? null : this.waypoints[i + 1];
  }, i.prototype.previous = function (e) {
    this.waypoints.sort(t);var i = n.Adapter.inArray(e, this.waypoints);return i ? this.waypoints[i - 1] : null;
  }, i.prototype.queueTrigger = function (t, e) {
    this.triggerQueues[e].push(t);
  }, i.prototype.remove = function (t) {
    var e = n.Adapter.inArray(t, this.waypoints);e > -1 && this.waypoints.splice(e, 1);
  }, i.prototype.first = function () {
    return this.waypoints[0];
  }, i.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function (t) {
    return o[t.axis][t.name] || new i(t);
  }, n.Group = i;
}(), function () {
  "use strict";
  function t(t) {
    this.$element = e(t);
  }var e = window.jQuery,
      i = window.Waypoint;e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
    t.prototype[i] = function () {
      var t = Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element, t);
    };
  }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
    t[o] = e[o];
  }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t;
}(), function () {
  "use strict";
  function t(t) {
    return function () {
      var i = [],
          o = arguments[0];return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () {
        var n = t.extend({}, o, { element: this });"string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
      }), i;
    };
  }var e = window.Waypoint;window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
* jquery.countup.js 1.0.3
*
* Copyright 2016, Adrián Guerra Marrero http://agmstudio.io @AGMStudio_io
* Released under the MIT License
*
* Date: Oct 27, 2016
*/
(function ($) {
    "use strict";

    $.fn.countUp = function (options) {

        // Defaults
        var settings = $.extend({
            'time': 2000,
            'delay': 10
        }, options);

        return this.each(function () {

            // Store the object
            var $this = $(this);
            var $settings = settings;

            var counterUpper = function counterUpper() {
                if (!$this.data('counterupTo')) {
                    $this.data('counterupTo', $this.text());
                }
                var time = parseInt($this.data("counter-time")) > 0 ? parseInt($this.data("counter-time")) : $settings.time;
                var delay = parseInt($this.data("counter-delay")) > 0 ? parseInt($this.data("counter-delay")) : $settings.delay;
                var divisions = time / delay;
                var num = $this.data('counterupTo');
                var nums = [num];
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, '');
                var isInt = /^[0-9]+$/.test(num);
                var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
                var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

                // Generate list of incremental numbers to display
                for (var i = divisions; i >= 1; i--) {

                    // Preserve as int if input was int
                    var newNum = parseInt(Math.round(num / divisions * i));

                    // Preserve float if input was float
                    if (isFloat) {
                        newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                    }

                    // Preserve commas if input had commas
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                        }
                    }

                    nums.unshift(newNum);
                }

                $this.data('counterup-nums', nums);
                $this.text('0');

                // Updates the number until we're done
                var f = function f() {
                    $this.text($this.data('counterup-nums').shift());
                    if ($this.data('counterup-nums').length) {
                        setTimeout($this.data('counterup-func'), delay);
                    } else {
                        delete $this.data('counterup-nums');
                        $this.data('counterup-nums', null);
                        $this.data('counterup-func', null);
                    }
                };
                $this.data('counterup-func', f);

                // Start the count up
                setTimeout($this.data('counterup-func'), delay);
            };

            // Perform counts when the element gets into view
            $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
        });
    };
})(jQuery);

$('.counter').countUp();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*! Magnific Popup - v0.9.9 - 2013-11-15
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
;(function ($) {

	/*>>core*/
	/**
  * 
  * Magnific Popup Core JS file
  * 
  */

	/**
  * Private static constants
  */
	var CLOSE_EVENT = 'Close',
	    BEFORE_CLOSE_EVENT = 'BeforeClose',
	    AFTER_CLOSE_EVENT = 'AfterClose',
	    BEFORE_APPEND_EVENT = 'BeforeAppend',
	    MARKUP_PARSE_EVENT = 'MarkupParse',
	    OPEN_EVENT = 'Open',
	    CHANGE_EVENT = 'Change',
	    NS = 'mfp',
	    EVENT_NS = '.' + NS,
	    READY_CLASS = 'mfp-ready',
	    REMOVING_CLASS = 'mfp-removing',
	    PREVENT_CLOSE_CLASS = 'mfp-prevent-close';

	/**
  * Private vars 
  */
	var mfp,
	    // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function MagnificPopup() {},
	    _isJQ = !!window.jQuery,
	    _prevStatus,
	    _window = $(window),
	    _body,
	    _document,
	    _prevContentType,
	    _wrapClasses,
	    _currPopupType;

	/**
  * Private functions
  */
	var _mfpOn = function _mfpOn(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	    _getEl = function _getEl(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-' + className;
		if (html) {
			el.innerHTML = html;
		}
		if (!raw) {
			el = $(el);
			if (appendTo) {
				el.appendTo(appendTo);
			}
		} else if (appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	    _mfpTrigger = function _mfpTrigger(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if (mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if (mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	    _getCloseBtn = function _getCloseBtn(type) {
		if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},

	// Initialize Magnific Popup only when called at least once
	_checkInstance = function _checkInstance() {
		if (!$.magnificPopup.instance) {
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},

	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function supportsTransitions() {
		var s = document.createElement('p').style,
		    // 's' for style. better to create an element if body yet to exist
		v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

		if (s['transition'] !== undefined) {
			return true;
		}

		while (v.length) {
			if (v.pop() + 'Transition' in s) {
				return true;
			}
		}

		return false;
	};

	/**
  * Public functions
  */
	MagnificPopup.prototype = {

		constructor: MagnificPopup,

		/**
   * Initializes Magnific Popup plugin. 
   * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
   */
		init: function init() {
			var appVersion = navigator.appVersion;
			mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
			mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
			mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
			mfp.isAndroid = /android/gi.test(appVersion);
			mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
			mfp.supportsTransition = supportsTransitions();

			// We disable fixed positioned lightbox on devices that don't handle it nicely.
			// If you know a better way of detecting this - let me know.
			mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
			_body = $(document.body);
			_document = $(document);

			mfp.popupsCache = {};
		},

		/**
   * Opens popup
   * @param  data [description]
   */
		open: function open(data) {

			var i;

			if (data.isObj === false) {
				// convert jQuery collection to array to avoid conflicts later
				mfp.items = data.items.toArray();

				mfp.index = 0;
				var items = data.items,
				    item;
				for (i = 0; i < items.length; i++) {
					item = items[i];
					if (item.parsed) {
						item = item.el[0];
					}
					if (item === data.el[0]) {
						mfp.index = i;
						break;
					}
				}
			} else {
				mfp.items = $.isArray(data.items) ? data.items : [data.items];
				mfp.index = data.index || 0;
			}

			// if popup is already opened - we just update the content
			if (mfp.isOpen) {
				mfp.updateItemHTML();
				return;
			}

			mfp.types = [];
			_wrapClasses = '';
			if (data.mainEl && data.mainEl.length) {
				mfp.ev = data.mainEl.eq(0);
			} else {
				mfp.ev = _document;
			}

			if (data.key) {
				if (!mfp.popupsCache[data.key]) {
					mfp.popupsCache[data.key] = {};
				}
				mfp.currTemplate = mfp.popupsCache[data.key];
			} else {
				mfp.currTemplate = {};
			}

			mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
			mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

			if (mfp.st.modal) {
				mfp.st.closeOnContentClick = false;
				mfp.st.closeOnBgClick = false;
				mfp.st.showCloseBtn = false;
				mfp.st.enableEscapeKey = false;
			}

			// Building markup
			// main containers are created only once
			if (!mfp.bgOverlay) {

				// Dark overlay
				mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
					mfp.close();
				});

				mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
					if (mfp._checkIfClose(e.target)) {
						mfp.close();
					}
				});

				mfp.container = _getEl('container', mfp.wrap);
			}

			mfp.contentContainer = _getEl('content');
			if (mfp.st.preloader) {
				mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
			}

			// Initializing modules
			var modules = $.magnificPopup.modules;
			for (i = 0; i < modules.length; i++) {
				var n = modules[i];
				n = n.charAt(0).toUpperCase() + n.slice(1);
				mfp['init' + n].call(mfp);
			}
			_mfpTrigger('BeforeOpen');

			if (mfp.st.showCloseBtn) {
				// Close button
				if (!mfp.st.closeBtnInside) {
					mfp.wrap.append(_getCloseBtn());
				} else {
					_mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
						values.close_replaceWith = _getCloseBtn(item.type);
					});
					_wrapClasses += ' mfp-close-btn-in';
				}
			}

			if (mfp.st.alignTop) {
				_wrapClasses += ' mfp-align-top';
			}

			if (mfp.fixedContentPos) {
				mfp.wrap.css({
					overflow: mfp.st.overflowY,
					overflowX: 'hidden',
					overflowY: mfp.st.overflowY
				});
			} else {
				mfp.wrap.css({
					top: _window.scrollTop(),
					position: 'absolute'
				});
			}
			if (mfp.st.fixedBgPos === false || mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) {
				mfp.bgOverlay.css({
					height: _document.height(),
					position: 'absolute'
				});
			}

			if (mfp.st.enableEscapeKey) {
				// Close on ESC key
				_document.on('keyup' + EVENT_NS, function (e) {
					if (e.keyCode === 27) {
						mfp.close();
					}
				});
			}

			_window.on('resize' + EVENT_NS, function () {
				mfp.updateSize();
			});

			if (!mfp.st.closeOnContentClick) {
				_wrapClasses += ' mfp-auto-cursor';
			}

			if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);

			// this triggers recalculation of layout, so we get it once to not to trigger twice
			var windowHeight = mfp.wH = _window.height();

			var windowStyles = {};

			if (mfp.fixedContentPos) {
				if (mfp._hasScrollBar(windowHeight)) {
					var s = mfp._getScrollbarSize();
					if (s) {
						windowStyles.marginRight = s;
					}
				}
			}

			if (mfp.fixedContentPos) {
				if (!mfp.isIE7) {
					windowStyles.overflow = 'hidden';
				} else {
					// ie7 double-scroll bug
					$('body, html').css('overflow', 'hidden');
				}
			}

			var classesToadd = mfp.st.mainClass;
			if (mfp.isIE7) {
				classesToadd += ' mfp-ie7';
			}
			if (classesToadd) {
				mfp._addClassToMFP(classesToadd);
			}

			// add content
			mfp.updateItemHTML();

			_mfpTrigger('BuildControls');

			// remove scrollbar, add margin e.t.c
			$('html').css(windowStyles);

			// add everything to DOM
			mfp.bgOverlay.add(mfp.wrap).prependTo(document.body);

			// Save last focused element
			mfp._lastFocusedEl = document.activeElement;

			// Wait for next cycle to allow CSS transition
			setTimeout(function () {

				if (mfp.content) {
					mfp._addClassToMFP(READY_CLASS);
					mfp._setFocus();
				} else {
					// if content is not defined (not loaded e.t.c) we add class only for BG
					mfp.bgOverlay.addClass(READY_CLASS);
				}

				// Trap the focus in popup
				_document.on('focusin' + EVENT_NS, mfp._onFocusIn);
			}, 16);

			mfp.isOpen = true;
			mfp.updateSize(windowHeight);
			_mfpTrigger(OPEN_EVENT);

			return data;
		},

		/**
   * Closes the popup
   */
		close: function close() {
			if (!mfp.isOpen) return;
			_mfpTrigger(BEFORE_CLOSE_EVENT);

			mfp.isOpen = false;
			// for CSS3 animation
			if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
				mfp._addClassToMFP(REMOVING_CLASS);
				setTimeout(function () {
					mfp._close();
				}, mfp.st.removalDelay);
			} else {
				mfp._close();
			}
		},

		/**
   * Helper for close() function
   */
		_close: function _close() {
			_mfpTrigger(CLOSE_EVENT);

			var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

			mfp.bgOverlay.detach();
			mfp.wrap.detach();
			mfp.container.empty();

			if (mfp.st.mainClass) {
				classesToRemove += mfp.st.mainClass + ' ';
			}

			mfp._removeClassFromMFP(classesToRemove);

			if (mfp.fixedContentPos) {
				var windowStyles = { marginRight: '' };
				if (mfp.isIE7) {
					$('body, html').css('overflow', '');
				} else {
					windowStyles.overflow = '';
				}
				$('html').css(windowStyles);
			}

			_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
			mfp.ev.off(EVENT_NS);

			// clean up DOM elements that aren't removed
			mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
			mfp.bgOverlay.attr('class', 'mfp-bg');
			mfp.container.attr('class', 'mfp-container');

			// remove close button from target element
			if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
				if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
			}

			if (mfp._lastFocusedEl) {
				$(mfp._lastFocusedEl).focus(); // put tab focus back
			}
			mfp.currItem = null;
			mfp.content = null;
			mfp.currTemplate = null;
			mfp.prevHeight = 0;

			_mfpTrigger(AFTER_CLOSE_EVENT);
		},

		updateSize: function updateSize(winHeight) {

			if (mfp.isIOS) {
				// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
				var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
				var height = window.innerHeight * zoomLevel;
				mfp.wrap.css('height', height);
				mfp.wH = height;
			} else {
				mfp.wH = winHeight || _window.height();
			}
			// Fixes #84: popup incorrectly positioned with position:relative on body
			if (!mfp.fixedContentPos) {
				mfp.wrap.css('height', mfp.wH);
			}

			_mfpTrigger('Resize');
		},

		/**
   * Set content of popup based on current index
   */
		updateItemHTML: function updateItemHTML() {
			var item = mfp.items[mfp.index];

			// Detach and perform modifications
			mfp.contentContainer.detach();

			if (mfp.content) mfp.content.detach();

			if (!item.parsed) {
				item = mfp.parseEl(mfp.index);
			}

			var type = item.type;

			_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
			// BeforeChange event works like so:
			// _mfpOn('BeforeChange', function(e, prevType, newType) { });

			mfp.currItem = item;

			if (!mfp.currTemplate[type]) {
				var markup = mfp.st[type] ? mfp.st[type].markup : false;

				// allows to modify markup
				_mfpTrigger('FirstMarkupParse', markup);

				if (markup) {
					mfp.currTemplate[type] = $(markup);
				} else {
					// if there is no markup found we just define that template is parsed
					mfp.currTemplate[type] = true;
				}
			}

			if (_prevContentType && _prevContentType !== item.type) {
				mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
			}

			var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
			mfp.appendContent(newContent, type);

			item.preloaded = true;

			_mfpTrigger(CHANGE_EVENT, item);
			_prevContentType = item.type;

			// Append container back after its content changed
			mfp.container.prepend(mfp.contentContainer);

			_mfpTrigger('AfterChange');
		},

		/**
   * Set HTML content of popup
   */
		appendContent: function appendContent(newContent, type) {
			mfp.content = newContent;

			if (newContent) {
				if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
					// if there is no markup, we just append close button element inside
					if (!mfp.content.find('.mfp-close').length) {
						mfp.content.append(_getCloseBtn());
					}
				} else {
					mfp.content = newContent;
				}
			} else {
				mfp.content = '';
			}

			_mfpTrigger(BEFORE_APPEND_EVENT);
			mfp.container.addClass('mfp-' + type + '-holder');

			mfp.contentContainer.append(mfp.content);
		},

		/**
   * Creates Magnific Popup data object based on given data
   * @param  {int} index Index of item to parse
   */
		parseEl: function parseEl(index) {
			var item = mfp.items[index],
			    type = item.type;

			if (item.tagName) {
				item = { el: $(item) };
			} else {
				item = { data: item, src: item.src };
			}

			if (item.el) {
				var types = mfp.types;

				// check for 'mfp-TYPE' class
				for (var i = 0; i < types.length; i++) {
					if (item.el.hasClass('mfp-' + types[i])) {
						type = types[i];
						break;
					}
				}

				item.src = item.el.attr('data-mfp-src');
				if (!item.src) {
					item.src = item.el.attr('href');
				}
			}

			item.type = type || mfp.st.type || 'inline';
			item.index = index;
			item.parsed = true;
			mfp.items[index] = item;
			_mfpTrigger('ElementParse', item);

			return mfp.items[index];
		},

		/**
   * Initializes single popup or a group of popups
   */
		addGroup: function addGroup(el, options) {
			var eHandler = function eHandler(e) {
				e.mfpEl = this;
				mfp._openClick(e, el, options);
			};

			if (!options) {
				options = {};
			}

			var eName = 'click.magnificPopup';
			options.mainEl = el;

			if (options.items) {
				options.isObj = true;
				el.off(eName).on(eName, eHandler);
			} else {
				options.isObj = false;
				if (options.delegate) {
					el.off(eName).on(eName, options.delegate, eHandler);
				} else {
					options.items = el;
					el.off(eName).on(eName, eHandler);
				}
			}
		},
		_openClick: function _openClick(e, el, options) {
			var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;

			if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey)) {
				return;
			}

			var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

			if (disableOn) {
				if ($.isFunction(disableOn)) {
					if (!disableOn.call(mfp)) {
						return true;
					}
				} else {
					// else it's number
					if (_window.width() < disableOn) {
						return true;
					}
				}
			}

			if (e.type) {
				e.preventDefault();

				// This will prevent popup from closing if element is inside and popup is already opened
				if (mfp.isOpen) {
					e.stopPropagation();
				}
			}

			options.el = $(e.mfpEl);
			if (options.delegate) {
				options.items = el.find(options.delegate);
			}
			mfp.open(options);
		},

		/**
   * Updates text on preloader
   */
		updateStatus: function updateStatus(status, text) {

			if (mfp.preloader) {
				if (_prevStatus !== status) {
					mfp.container.removeClass('mfp-s-' + _prevStatus);
				}

				if (!text && status === 'loading') {
					text = mfp.st.tLoading;
				}

				var data = {
					status: status,
					text: text
				};
				// allows to modify status
				_mfpTrigger('UpdateStatus', data);

				status = data.status;
				text = data.text;

				mfp.preloader.html(text);

				mfp.preloader.find('a').on('click', function (e) {
					e.stopImmediatePropagation();
				});

				mfp.container.addClass('mfp-s-' + status);
				_prevStatus = status;
			}
		},

		/*
  	"Private" helpers that aren't private at all
   */
		// Check to close popup or not
		// "target" is an element that was clicked
		_checkIfClose: function _checkIfClose(target) {

			if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
				return;
			}

			var closeOnContent = mfp.st.closeOnContentClick;
			var closeOnBg = mfp.st.closeOnBgClick;

			if (closeOnContent && closeOnBg) {
				return true;
			} else {

				// We close the popup if click is on close button or on preloader. Or if there is no content.
				if (!mfp.content || $(target).hasClass('mfp-close') || mfp.preloader && target === mfp.preloader[0]) {
					return true;
				}

				// if click is outside the content
				if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
					if (closeOnBg) {
						// last check, if the clicked element is in DOM, (in case it's removed onclick)
						if ($.contains(document, target)) {
							return true;
						}
					}
				} else if (closeOnContent) {
					return true;
				}
			}
			return false;
		},
		_addClassToMFP: function _addClassToMFP(cName) {
			mfp.bgOverlay.addClass(cName);
			mfp.wrap.addClass(cName);
		},
		_removeClassFromMFP: function _removeClassFromMFP(cName) {
			this.bgOverlay.removeClass(cName);
			mfp.wrap.removeClass(cName);
		},
		_hasScrollBar: function _hasScrollBar(winHeight) {
			return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
		},
		_setFocus: function _setFocus() {
			(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
		},
		_onFocusIn: function _onFocusIn(e) {
			if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
				mfp._setFocus();
				return false;
			}
		},
		_parseMarkup: function _parseMarkup(template, values, item) {
			var arr;
			if (item.data) {
				values = $.extend(item.data, values);
			}
			_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

			$.each(values, function (key, value) {
				if (value === undefined || value === false) {
					return true;
				}
				arr = key.split('_');
				if (arr.length > 1) {
					var el = template.find(EVENT_NS + '-' + arr[0]);

					if (el.length > 0) {
						var attr = arr[1];
						if (attr === 'replaceWith') {
							if (el[0] !== value[0]) {
								el.replaceWith(value);
							}
						} else if (attr === 'img') {
							if (el.is('img')) {
								el.attr('src', value);
							} else {
								el.replaceWith('<img src="' + value + '" class="' + el.attr('class') + '" />');
							}
						} else {
							el.attr(arr[1], value);
						}
					}
				} else {
					template.find(EVENT_NS + '-' + key).html(value);
				}
			});
		},

		_getScrollbarSize: function _getScrollbarSize() {
			// thx David
			if (mfp.scrollbarSize === undefined) {
				var scrollDiv = document.createElement("div");
				scrollDiv.id = "mfp-sbm";
				scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
				document.body.appendChild(scrollDiv);
				mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
			}
			return mfp.scrollbarSize;
		}

	}; /* MagnificPopup core prototype end */

	/**
  * Public static functions
  */
	$.magnificPopup = {
		instance: null,
		proto: MagnificPopup.prototype,
		modules: [],

		open: function open(options, index) {
			_checkInstance();

			if (!options) {
				options = {};
			} else {
				options = $.extend(true, {}, options);
			}

			options.isObj = true;
			options.index = index || 0;
			return this.instance.open(options);
		},

		close: function close() {
			return $.magnificPopup.instance && $.magnificPopup.instance.close();
		},

		registerModule: function registerModule(name, module) {
			if (module.options) {
				$.magnificPopup.defaults[name] = module.options;
			}
			$.extend(this.proto, module.proto);
			this.modules.push(name);
		},

		defaults: {

			// Info about options is in docs:
			// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

			disableOn: 0,

			key: null,

			midClick: false,

			mainClass: '',

			preloader: true,

			focus: '', // CSS selector of input to focus after popup is opened

			closeOnContentClick: false,

			closeOnBgClick: true,

			closeBtnInside: true,

			showCloseBtn: true,

			enableEscapeKey: true,

			modal: false,

			alignTop: false,

			removalDelay: 0,

			fixedContentPos: 'auto',

			fixedBgPos: 'auto',

			overflowY: 'auto',

			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

			tClose: 'Close (Esc)',

			tLoading: 'Loading...'

		}
	};

	$.fn.magnificPopup = function (options) {
		_checkInstance();

		var jqEl = $(this);

		// We call some API method of first param is a string
		if (typeof options === "string") {

			if (options === 'open') {
				var items,
				    itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				    index = parseInt(arguments[1], 10) || 0;

				if (itemOpts.items) {
					items = itemOpts.items[index];
				} else {
					items = jqEl;
					if (itemOpts.delegate) {
						items = items.find(itemOpts.delegate);
					}
					items = items.eq(index);
				}
				mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
			} else {
				if (mfp.isOpen) mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
			}
		} else {
			// clone options obj
			options = $.extend(true, {}, options);

			/*
    * As Zepto doesn't support .data() method for objects 
    * and it works only in normal browsers
    * we assign "options" object directly to the DOM element. FTW!
    */
			if (_isJQ) {
				jqEl.data('magnificPopup', options);
			} else {
				jqEl[0].magnificPopup = options;
			}

			mfp.addGroup(jqEl, options);
		}
		return jqEl;
	};

	//Quick benchmark
	/*
 var start = performance.now(),
 	i,
 	rounds = 1000;
 
 for(i = 0; i < rounds; i++) {
 
 }
 console.log('Test #1:', performance.now() - start);
 
 start = performance.now();
 for(i = 0; i < rounds; i++) {
 
 }
 console.log('Test #2:', performance.now() - start);
 */

	/*>>core*/

	/*>>inline*/

	var INLINE_NS = 'inline',
	    _hiddenClass,
	    _inlinePlaceholder,
	    _lastInlineElement,
	    _putInlineElementsBack = function _putInlineElementsBack() {
		if (_lastInlineElement) {
			_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
			_lastInlineElement = null;
		}
	};

	$.magnificPopup.registerModule(INLINE_NS, {
		options: {
			hiddenClass: 'hide', // will be appended with `mfp-` prefix
			markup: '',
			tNotFound: 'Content not found'
		},
		proto: {

			initInline: function initInline() {
				mfp.types.push(INLINE_NS);

				_mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
					_putInlineElementsBack();
				});
			},

			getInline: function getInline(item, template) {

				_putInlineElementsBack();

				if (item.src) {
					var inlineSt = mfp.st.inline,
					    el = $(item.src);

					if (el.length) {

						// If target element has parent - we replace it with placeholder and put it back after popup is closed
						var parent = el[0].parentNode;
						if (parent && parent.tagName) {
							if (!_inlinePlaceholder) {
								_hiddenClass = inlineSt.hiddenClass;
								_inlinePlaceholder = _getEl(_hiddenClass);
								_hiddenClass = 'mfp-' + _hiddenClass;
							}
							// replace target inline element with placeholder
							_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
						}

						mfp.updateStatus('ready');
					} else {
						mfp.updateStatus('error', inlineSt.tNotFound);
						el = $('<div>');
					}

					item.inlineElement = el;
					return el;
				}

				mfp.updateStatus('ready');
				mfp._parseMarkup(template, {}, item);
				return template;
			}
		}
	});

	/*>>inline*/

	/*>>ajax*/
	var AJAX_NS = 'ajax',
	    _ajaxCur,
	    _removeAjaxCursor = function _removeAjaxCursor() {
		if (_ajaxCur) {
			_body.removeClass(_ajaxCur);
		}
	},
	    _destroyAjaxRequest = function _destroyAjaxRequest() {
		_removeAjaxCursor();
		if (mfp.req) {
			mfp.req.abort();
		}
	};

	$.magnificPopup.registerModule(AJAX_NS, {

		options: {
			settings: null,
			cursor: 'mfp-ajax-cur',
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},

		proto: {
			initAjax: function initAjax() {
				mfp.types.push(AJAX_NS);
				_ajaxCur = mfp.st.ajax.cursor;

				_mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
				_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
			},
			getAjax: function getAjax(item) {

				if (_ajaxCur) _body.addClass(_ajaxCur);

				mfp.updateStatus('loading');

				var opts = $.extend({
					url: item.src,
					success: function success(data, textStatus, jqXHR) {
						var temp = {
							data: data,
							xhr: jqXHR
						};

						_mfpTrigger('ParseAjax', temp);

						mfp.appendContent($(temp.data), AJAX_NS);

						item.finished = true;

						_removeAjaxCursor();

						mfp._setFocus();

						setTimeout(function () {
							mfp.wrap.addClass(READY_CLASS);
						}, 16);

						mfp.updateStatus('ready');

						_mfpTrigger('AjaxContentAdded');
					},
					error: function error() {
						_removeAjaxCursor();
						item.finished = item.loadError = true;
						mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
					}
				}, mfp.st.ajax.settings);

				mfp.req = $.ajax(opts);

				return '';
			}
		}
	});

	/*>>ajax*/

	/*>>image*/
	var _imgInterval,
	    _getTitle = function _getTitle(item) {
		if (item.data && item.data.title !== undefined) return item.data.title;

		var src = mfp.st.image.titleSrc;

		if (src) {
			if ($.isFunction(src)) {
				return src.call(mfp, item);
			} else if (item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

	$.magnificPopup.registerModule('image', {

		options: {
			markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
			cursor: 'mfp-zoom-out-cur',
			titleSrc: 'title',
			verticalFit: true,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},

		proto: {
			initImage: function initImage() {
				var imgSt = mfp.st.image,
				    ns = '.image';

				mfp.types.push('image');

				_mfpOn(OPEN_EVENT + ns, function () {
					if (mfp.currItem.type === 'image' && imgSt.cursor) {
						_body.addClass(imgSt.cursor);
					}
				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (imgSt.cursor) {
						_body.removeClass(imgSt.cursor);
					}
					_window.off('resize' + EVENT_NS);
				});

				_mfpOn('Resize' + ns, mfp.resizeImage);
				if (mfp.isLowIE) {
					_mfpOn('AfterChange', mfp.resizeImage);
				}
			},
			resizeImage: function resizeImage() {
				var item = mfp.currItem;
				if (!item || !item.img) return;

				if (mfp.st.image.verticalFit) {
					var decr = 0;
					// fix box-sizing in ie7/8
					if (mfp.isLowIE) {
						decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
					}
					item.img.css('max-height', mfp.wH - decr);
				}
			},
			_onImageHasSize: function _onImageHasSize(item) {
				if (item.img) {

					item.hasSize = true;

					if (_imgInterval) {
						clearInterval(_imgInterval);
					}

					item.isCheckingImgSize = false;

					_mfpTrigger('ImageHasSize', item);

					if (item.imgHidden) {
						if (mfp.content) mfp.content.removeClass('mfp-loading');

						item.imgHidden = false;
					}
				}
			},

			/**
    * Function that loops until the image has size to display elements that rely on it asap
    */
			findImageSize: function findImageSize(item) {

				var counter = 0,
				    img = item.img[0],
				    mfpSetInterval = function mfpSetInterval(delay) {

					if (_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function () {
						if (img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if (counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if (counter === 3) {
							mfpSetInterval(10);
						} else if (counter === 40) {
							mfpSetInterval(50);
						} else if (counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

				mfpSetInterval(1);
			},

			getImage: function getImage(item, template) {

				var guard = 0,


				// image load complete handler
				onLoadComplete = function onLoadComplete() {
					if (item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if (item === mfp.currItem) {
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');
						} else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if (guard < 200) {
								setTimeout(onLoadComplete, 100);
							} else {
								onLoadError();
							}
						}
					}
				},


				// image error handler
				onLoadError = function onLoadError() {
					if (item) {
						item.img.off('.mfploader');
						if (item === mfp.currItem) {
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				    imgSt = mfp.st.image;

				var el = template.find('.mfp-img');
				if (el.length) {
					var img = document.createElement('img');
					img.className = 'mfp-img';
					item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
					img.src = item.src;

					// without clone() "error" event is not firing when IMG is replaced by new IMG
					// TODO: find a way to avoid such cloning
					if (el.is('img')) {
						item.img = item.img.clone();
					}
					if (item.img[0].naturalWidth > 0) {
						item.hasSize = true;
					}
				}

				mfp._parseMarkup(template, {
					title: _getTitle(item),
					img_replaceWith: item.img
				}, item);

				mfp.resizeImage();

				if (item.hasSize) {
					if (_imgInterval) clearInterval(_imgInterval);

					if (item.loadError) {
						template.addClass('mfp-loading');
						mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
					} else {
						template.removeClass('mfp-loading');
						mfp.updateStatus('ready');
					}
					return template;
				}

				mfp.updateStatus('loading');
				item.loading = true;

				if (!item.hasSize) {
					item.imgHidden = true;
					template.addClass('mfp-loading');
					mfp.findImageSize(item);
				}

				return template;
			}
		}
	});

	/*>>image*/

	/*>>zoom*/
	var hasMozTransform,
	    getHasMozTransform = function getHasMozTransform() {
		if (hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

	$.magnificPopup.registerModule('zoom', {

		options: {
			enabled: false,
			easing: 'ease-in-out',
			duration: 300,
			opener: function opener(element) {
				return element.is('img') ? element : element.find('img');
			}
		},

		proto: {

			initZoom: function initZoom() {
				var zoomSt = mfp.st.zoom,
				    ns = '.zoom',
				    image;

				if (!zoomSt.enabled || !mfp.supportsTransition) {
					return;
				}

				var duration = zoomSt.duration,
				    getElToAnimate = function getElToAnimate(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
					    transition = 'all ' + zoomSt.duration / 1000 + 's ' + zoomSt.easing,
					    cssObj = {
						position: 'fixed',
						zIndex: 9999,
						left: 0,
						top: 0,
						'-webkit-backface-visibility': 'hidden'
					},
					    t = 'transition';

					cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				    showMainContent = function showMainContent() {
					mfp.content.css('visibility', 'visible');
				},
				    openTimeout,
				    animatedImg;

				_mfpOn('BuildControls' + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);
						mfp.content.css('visibility', 'hidden');

						// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

						image = mfp._getItemToZoom();

						if (!image) {
							showMainContent();
							return;
						}

						animatedImg = getElToAnimate(image);

						animatedImg.css(mfp._getOffset());

						mfp.wrap.append(animatedImg);

						openTimeout = setTimeout(function () {
							animatedImg.css(mfp._getOffset(true));
							openTimeout = setTimeout(function () {

								showMainContent();

								setTimeout(function () {
									animatedImg.remove();
									image = animatedImg = null;
									_mfpTrigger('ZoomAnimationEnded');
								}, 16); // avoid blink when switching images 
							}, duration); // this timeout equals animation duration
						}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


						// Lots of timeouts...
					}
				});
				_mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {

						clearTimeout(openTimeout);

						mfp.st.removalDelay = duration;

						if (!image) {
							image = mfp._getItemToZoom();
							if (!image) {
								return;
							}
							animatedImg = getElToAnimate(image);
						}

						animatedImg.css(mfp._getOffset(true));
						mfp.wrap.append(animatedImg);
						mfp.content.css('visibility', 'hidden');

						setTimeout(function () {
							animatedImg.css(mfp._getOffset());
						}, 16);
					}
				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					if (mfp._allowZoom()) {
						showMainContent();
						if (animatedImg) {
							animatedImg.remove();
						}
						image = null;
					}
				});
			},

			_allowZoom: function _allowZoom() {
				return mfp.currItem.type === 'image';
			},

			_getItemToZoom: function _getItemToZoom() {
				if (mfp.currItem.hasSize) {
					return mfp.currItem.img;
				} else {
					return false;
				}
			},

			// Get element postion relative to viewport
			_getOffset: function _getOffset(isLarge) {
				var el;
				if (isLarge) {
					el = mfp.currItem.img;
				} else {
					el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
				}

				var offset = el.offset();
				var paddingTop = parseInt(el.css('padding-top'), 10);
				var paddingBottom = parseInt(el.css('padding-bottom'), 10);
				offset.top -= $(window).scrollTop() - paddingTop;

				/*
    
    Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
    	 */
				var obj = {
					width: el.width(),
					// fix Zepto height+padding issue
					height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
				};

				// I hate to do this, but there is no another option
				if (getHasMozTransform()) {
					obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
				} else {
					obj.left = offset.left;
					obj.top = offset.top;
				}
				return obj;
			}

		}
	});

	/*>>zoom*/

	/*>>iframe*/

	var IFRAME_NS = 'iframe',
	    _emptyPage = '//about:blank',
	    _fixIframeBugs = function _fixIframeBugs(isShowing) {
		if (mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if (el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if (!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if (mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

	$.magnificPopup.registerModule(IFRAME_NS, {

		options: {
			markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',

			srcAction: 'iframe_src',

			// we don't care and support only one default type of URL by default
			patterns: {
				youtube: {
					index: 'youtube.com',
					id: 'v=',
					src: '//www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}
			}
		},

		proto: {
			initIframe: function initIframe() {
				mfp.types.push(IFRAME_NS);

				_mfpOn('BeforeChange', function (e, prevType, newType) {
					if (prevType !== newType) {
						if (prevType === IFRAME_NS) {
							_fixIframeBugs(); // iframe if removed
						} else if (newType === IFRAME_NS) {
							_fixIframeBugs(true); // iframe is showing
						}
					} // else {
					// iframe source is switched, don't do anything
					//}
				});

				_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
					_fixIframeBugs();
				});
			},

			getIframe: function getIframe(item, template) {
				var embedSrc = item.src;
				var iframeSt = mfp.st.iframe;

				$.each(iframeSt.patterns, function () {
					if (embedSrc.indexOf(this.index) > -1) {
						if (this.id) {
							if (typeof this.id === 'string') {
								embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
							} else {
								embedSrc = this.id.call(this, embedSrc);
							}
						}
						embedSrc = this.src.replace('%id%', embedSrc);
						return false; // break;
					}
				});

				var dataObj = {};
				if (iframeSt.srcAction) {
					dataObj[iframeSt.srcAction] = embedSrc;
				}
				mfp._parseMarkup(template, dataObj, item);

				mfp.updateStatus('ready');

				return template;
			}
		}
	});

	/*>>iframe*/

	/*>>gallery*/
	/**
  * Get looped index depending on number of slides
  */
	var _getLoopedId = function _getLoopedId(index) {
		var numSlides = mfp.items.length;
		if (index > numSlides - 1) {
			return index - numSlides;
		} else if (index < 0) {
			return numSlides + index;
		}
		return index;
	},
	    _replaceCurrTotal = function _replaceCurrTotal(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

	$.magnificPopup.registerModule('gallery', {

		options: {
			enabled: false,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: true,
			arrows: true,

			tPrev: 'Previous (Left arrow key)',
			tNext: 'Next (Right arrow key)',
			tCounter: '%curr% of %total%'
		},

		proto: {
			initGallery: function initGallery() {

				var gSt = mfp.st.gallery,
				    ns = '.mfp-gallery',
				    supportsFastClick = Boolean($.fn.mfpFastClick);

				mfp.direction = true; // true - next, false - prev

				if (!gSt || !gSt.enabled) return false;

				_wrapClasses += ' mfp-gallery';

				_mfpOn(OPEN_EVENT + ns, function () {

					if (gSt.navigateByImgClick) {
						mfp.wrap.on('click' + ns, '.mfp-img', function () {
							if (mfp.items.length > 1) {
								mfp.next();
								return false;
							}
						});
					}

					_document.on('keydown' + ns, function (e) {
						if (e.keyCode === 37) {
							mfp.prev();
						} else if (e.keyCode === 39) {
							mfp.next();
						}
					});
				});

				_mfpOn('UpdateStatus' + ns, function (e, data) {
					if (data.text) {
						data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
					}
				});

				_mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
					var l = mfp.items.length;
					values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
				});

				_mfpOn('BuildControls' + ns, function () {
					if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
						var markup = gSt.arrowMarkup,
						    arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
						    arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

						var eName = supportsFastClick ? 'mfpFastClick' : 'click';
						arrowLeft[eName](function () {
							mfp.prev();
						});
						arrowRight[eName](function () {
							mfp.next();
						});

						// Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
						if (mfp.isIE7) {
							_getEl('b', arrowLeft[0], false, true);
							_getEl('a', arrowLeft[0], false, true);
							_getEl('b', arrowRight[0], false, true);
							_getEl('a', arrowRight[0], false, true);
						}

						mfp.container.append(arrowLeft.add(arrowRight));
					}
				});

				_mfpOn(CHANGE_EVENT + ns, function () {
					if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

					mfp._preloadTimeout = setTimeout(function () {
						mfp.preloadNearbyImages();
						mfp._preloadTimeout = null;
					}, 16);
				});

				_mfpOn(CLOSE_EVENT + ns, function () {
					_document.off(ns);
					mfp.wrap.off('click' + ns);

					if (mfp.arrowLeft && supportsFastClick) {
						mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
					}
					mfp.arrowRight = mfp.arrowLeft = null;
				});
			},
			next: function next() {
				mfp.direction = true;
				mfp.index = _getLoopedId(mfp.index + 1);
				mfp.updateItemHTML();
			},
			prev: function prev() {
				mfp.direction = false;
				mfp.index = _getLoopedId(mfp.index - 1);
				mfp.updateItemHTML();
			},
			goTo: function goTo(newIndex) {
				mfp.direction = newIndex >= mfp.index;
				mfp.index = newIndex;
				mfp.updateItemHTML();
			},
			preloadNearbyImages: function preloadNearbyImages() {
				var p = mfp.st.gallery.preload,
				    preloadBefore = Math.min(p[0], mfp.items.length),
				    preloadAfter = Math.min(p[1], mfp.items.length),
				    i;

				for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
					mfp._preloadItem(mfp.index + i);
				}
				for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
					mfp._preloadItem(mfp.index - i);
				}
			},
			_preloadItem: function _preloadItem(index) {
				index = _getLoopedId(index);

				if (mfp.items[index].preloaded) {
					return;
				}

				var item = mfp.items[index];
				if (!item.parsed) {
					item = mfp.parseEl(index);
				}

				_mfpTrigger('LazyLoad', item);

				if (item.type === 'image') {
					item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
						item.hasSize = true;
					}).on('error.mfploader', function () {
						item.hasSize = true;
						item.loadError = true;
						_mfpTrigger('LazyLoadError', item);
					}).attr('src', item.src);
				}

				item.preloaded = true;
			}
		}
	});

	/*
 Touch Support that might be implemented some day
 
 addSwipeGesture: function() {
 	var startX,
 		moved,
 		multipleTouches;
 
 		return;
 
 	var namespace = '.mfp',
 		addEventNames = function(pref, down, move, up, cancel) {
 			mfp._tStart = pref + down + namespace;
 			mfp._tMove = pref + move + namespace;
 			mfp._tEnd = pref + up + namespace;
 			mfp._tCancel = pref + cancel + namespace;
 		};
 
 	if(window.navigator.msPointerEnabled) {
 		addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
 	} else if('ontouchstart' in window) {
 		addEventNames('touch', 'start', 'move', 'end', 'cancel');
 	} else {
 		return;
 	}
 	_window.on(mfp._tStart, function(e) {
 		var oE = e.originalEvent;
 		multipleTouches = moved = false;
 		startX = oE.pageX || oE.changedTouches[0].pageX;
 	}).on(mfp._tMove, function(e) {
 		if(e.originalEvent.touches.length > 1) {
 			multipleTouches = e.originalEvent.touches.length;
 		} else {
 			//e.preventDefault();
 			moved = true;
 		}
 	}).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
 		if(moved && !multipleTouches) {
 			var oE = e.originalEvent,
 				diff = startX - (oE.pageX || oE.changedTouches[0].pageX);
 
 			if(diff > 20) {
 				mfp.next();
 			} else if(diff < -20) {
 				mfp.prev();
 			}
 		}
 	});
 },
 */

	/*>>gallery*/

	/*>>retina*/

	var RETINA_NS = 'retina';

	$.magnificPopup.registerModule(RETINA_NS, {
		options: {
			replaceSrc: function replaceSrc(item) {
				return item.src.replace(/\.\w+$/, function (m) {
					return '@2x' + m;
				});
			},
			ratio: 1 // Function or number.  Set to 1 to disable.
		},
		proto: {
			initRetina: function initRetina() {
				if (window.devicePixelRatio > 1) {

					var st = mfp.st.retina,
					    ratio = st.ratio;

					ratio = !isNaN(ratio) ? ratio : ratio();

					if (ratio > 1) {
						_mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
							item.img.css({
								'max-width': item.img[0].naturalWidth / ratio,
								'width': '100%'
							});
						});
						_mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
							item.src = st.replaceSrc(item, ratio);
						});
					}
				}
			}
		}
	});

	/*>>retina*/

	/*>>fastclick*/
	/**
  * FastClick event implementation. (removes 300ms delay on touch devices)
  * Based on https://developers.google.com/mobile/articles/fast_buttons
  *
  * You may use it outside the Magnific Popup by calling just:
  *
  * $('.your-el').mfpFastClick(function() {
  *     console.log('Clicked!');
  * });
  *
  * To unbind:
  * $('.your-el').destroyMfpFastClick();
  * 
  * 
  * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
  * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
  * 
  */

	(function () {
		var ghostClickDelay = 1000,
		    supportsTouch = 'ontouchstart' in window,
		    unbindTouchMove = function unbindTouchMove() {
			_window.off('touchmove' + ns + ' touchend' + ns);
		},
		    eName = 'mfpFastClick',
		    ns = '.' + eName;

		// As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
		$.fn.mfpFastClick = function (callback) {

			return $(this).each(function () {

				var elem = $(this),
				    lock;

				if (supportsTouch) {

					var timeout, startX, startY, pointerMoved, point, numPointers;

					elem.on('touchstart' + ns, function (e) {
						pointerMoved = false;
						numPointers = 1;

						point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
						startX = point.clientX;
						startY = point.clientY;

						_window.on('touchmove' + ns, function (e) {
							point = e.originalEvent ? e.originalEvent.touches : e.touches;
							numPointers = point.length;
							point = point[0];
							if (Math.abs(point.clientX - startX) > 10 || Math.abs(point.clientY - startY) > 10) {
								pointerMoved = true;
								unbindTouchMove();
							}
						}).on('touchend' + ns, function (e) {
							unbindTouchMove();
							if (pointerMoved || numPointers > 1) {
								return;
							}
							lock = true;
							e.preventDefault();
							clearTimeout(timeout);
							timeout = setTimeout(function () {
								lock = false;
							}, ghostClickDelay);
							callback();
						});
					});
				}

				elem.on('click' + ns, function () {
					if (!lock) {
						callback();
					}
				});
			});
		};

		$.fn.destroyMfpFastClick = function () {
			$(this).off('touchstart' + ns + ' click' + ns);
			if (supportsTouch) _window.off('touchmove' + ns + ' touchend' + ns);
		};
	})();

	/*>>fastclick*/
	_checkInstance();
})(window.jQuery || window.Zepto);

$(document).ready(function () {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */

if (typeof Object.create !== "function") {
	Object.create = function (obj) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}
(function ($, window, document, undefined) {

	var Carousel = {
		init: function init(options, el) {
			var base = this;

			base.$elem = $(el);

			// options passed via js override options passed via data attributes
			base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

			base.userOptions = options;
			base.loadContent();
		},

		loadContent: function loadContent() {
			var base = this;

			if (typeof base.options.beforeInit === "function") {
				base.options.beforeInit.apply(this, [base.$elem]);
			}

			if (typeof base.options.jsonPath === "string") {
				var getData = function getData(data) {
					if (typeof base.options.jsonSuccess === "function") {
						base.options.jsonSuccess.apply(this, [data]);
					} else {
						var content = "";
						for (var i in data["owl"]) {
							content += data["owl"][i]["item"];
						}
						base.$elem.html(content);
					}
					base.logIn();
				};

				var url = base.options.jsonPath;

				$.getJSON(url, getData);
			} else {
				base.logIn();
			}
		},

		logIn: function logIn(action) {
			var base = this;

			base.$elem.data("owl-originalStyles", base.$elem.attr("style")).data("owl-originalClasses", base.$elem.attr("class"));

			base.$elem.css({ opacity: 0 });
			base.orignalItems = base.options.items;
			base.checkBrowser();
			base.wrapperWidth = 0;
			base.checkVisible;
			base.setVars();
		},

		setVars: function setVars() {
			var base = this;
			if (base.$elem.children().length === 0) {
				return false;
			}
			base.baseClass();
			base.eventTypes();
			base.$userItems = base.$elem.children();
			base.itemsAmount = base.$userItems.length;
			base.wrapItems();
			base.$owlItems = base.$elem.find(".owl-item");
			base.$owlWrapper = base.$elem.find(".owl-wrapper");
			base.playDirection = "next";
			base.prevItem = 0;
			base.prevArr = [0];
			base.currentItem = 0;
			base.customEvents();
			base.onStartup();
		},

		onStartup: function onStartup() {
			var base = this;
			base.updateItems();
			base.calculateAll();
			base.buildControls();
			base.updateControls();
			base.response();
			base.moveEvents();
			base.stopOnHover();
			base.owlStatus();

			if (base.options.transitionStyle !== false) {
				base.transitionTypes(base.options.transitionStyle);
			}
			if (base.options.autoPlay === true) {
				base.options.autoPlay = 5000;
			}
			base.play();

			base.$elem.find(".owl-wrapper").css("display", "block");

			if (!base.$elem.is(":visible")) {
				base.watchVisibility();
			} else {
				base.$elem.css("opacity", 1);
			}
			base.onstartup = false;
			base.eachMoveUpdate();
			if (typeof base.options.afterInit === "function") {
				base.options.afterInit.apply(this, [base.$elem]);
			}
		},

		eachMoveUpdate: function eachMoveUpdate() {
			var base = this;

			if (base.options.lazyLoad === true) {
				base.lazyLoad();
			}
			if (base.options.autoHeight === true) {
				base.autoHeight();
			}
			base.onVisibleItems();

			if (typeof base.options.afterAction === "function") {
				base.options.afterAction.apply(this, [base.$elem]);
			}
		},

		updateVars: function updateVars() {
			var base = this;
			if (typeof base.options.beforeUpdate === "function") {
				base.options.beforeUpdate.apply(this, [base.$elem]);
			}
			base.watchVisibility();
			base.updateItems();
			base.calculateAll();
			base.updatePosition();
			base.updateControls();
			base.eachMoveUpdate();
			if (typeof base.options.afterUpdate === "function") {
				base.options.afterUpdate.apply(this, [base.$elem]);
			}
		},

		reload: function reload(elements) {
			var base = this;
			setTimeout(function () {
				base.updateVars();
			}, 0);
		},

		watchVisibility: function watchVisibility() {
			var base = this;

			if (base.$elem.is(":visible") === false) {
				base.$elem.css({ opacity: 0 });
				clearInterval(base.autoPlayInterval);
				clearInterval(base.checkVisible);
			} else {
				return false;
			}
			base.checkVisible = setInterval(function () {
				if (base.$elem.is(":visible")) {
					base.reload();
					base.$elem.animate({ opacity: 1 }, 200);
					clearInterval(base.checkVisible);
				}
			}, 500);
		},

		wrapItems: function wrapItems() {
			var base = this;
			base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
			base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
			base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
			base.$elem.css("display", "block");
		},

		baseClass: function baseClass() {
			var base = this;
			var hasBaseClass = base.$elem.hasClass(base.options.baseClass);
			var hasThemeClass = base.$elem.hasClass(base.options.theme);

			if (!hasBaseClass) {
				base.$elem.addClass(base.options.baseClass);
			}

			if (!hasThemeClass) {
				base.$elem.addClass(base.options.theme);
			}
		},

		updateItems: function updateItems() {
			var base = this;

			if (base.options.responsive === false) {
				return false;
			}
			if (base.options.singleItem === true) {
				base.options.items = base.orignalItems = 1;
				base.options.itemsCustom = false;
				base.options.itemsDesktop = false;
				base.options.itemsDesktopSmall = false;
				base.options.itemsTablet = false;
				base.options.itemsTabletSmall = false;
				base.options.itemsMobile = false;
				return false;
			}

			var width = $(base.options.responsiveBaseWidth).width();

			if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
				base.options.items = base.orignalItems;
			}

			if (typeof base.options.itemsCustom !== 'undefined' && base.options.itemsCustom !== false) {
				//Reorder array by screen size
				base.options.itemsCustom.sort(function (a, b) {
					return a[0] - b[0];
				});
				for (var i in base.options.itemsCustom) {
					if (typeof base.options.itemsCustom[i] !== 'undefined' && base.options.itemsCustom[i][0] <= width) {
						base.options.items = base.options.itemsCustom[i][1];
					}
				}
			} else {

				if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
					base.options.items = base.options.itemsDesktop[1];
				}

				if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
					base.options.items = base.options.itemsDesktopSmall[1];
				}

				if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
					base.options.items = base.options.itemsTablet[1];
				}

				if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
					base.options.items = base.options.itemsTabletSmall[1];
				}

				if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
					base.options.items = base.options.itemsMobile[1];
				}
			}

			//if number of items is less than declared
			if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
				base.options.items = base.itemsAmount;
			}
		},

		response: function response() {
			var base = this,
			    smallDelay;
			if (base.options.responsive !== true) {
				return false;
			}
			var lastWindowWidth = $(window).width();

			base.resizer = function () {
				if ($(window).width() !== lastWindowWidth) {
					if (base.options.autoPlay !== false) {
						clearInterval(base.autoPlayInterval);
					}
					clearTimeout(smallDelay);
					smallDelay = setTimeout(function () {
						lastWindowWidth = $(window).width();
						base.updateVars();
					}, base.options.responsiveRefreshRate);
				}
			};
			$(window).resize(base.resizer);
		},

		updatePosition: function updatePosition() {
			var base = this;
			base.jumpTo(base.currentItem);
			if (base.options.autoPlay !== false) {
				base.checkAp();
			}
		},

		appendItemsSizes: function appendItemsSizes() {
			var base = this;

			var roundPages = 0;
			var lastItem = base.itemsAmount - base.options.items;

			base.$owlItems.each(function (index) {
				var $this = $(this);
				$this.css({ "width": base.itemWidth }).data("owl-item", Number(index));

				if (index % base.options.items === 0 || index === lastItem) {
					if (!(index > lastItem)) {
						roundPages += 1;
					}
				}
				$this.data("owl-roundPages", roundPages);
			});
		},

		appendWrapperSizes: function appendWrapperSizes() {
			var base = this;
			var width = 0;

			var width = base.$owlItems.length * base.itemWidth;

			base.$owlWrapper.css({
				"width": width * 2,
				"left": 0
			});
			base.appendItemsSizes();
		},

		calculateAll: function calculateAll() {
			var base = this;
			base.calculateWidth();
			base.appendWrapperSizes();
			base.loops();
			base.max();
		},

		calculateWidth: function calculateWidth() {
			var base = this;
			base.itemWidth = Math.round(base.$elem.width() / base.options.items);
		},

		max: function max() {
			var base = this;
			var maximum = (base.itemsAmount * base.itemWidth - base.options.items * base.itemWidth) * -1;
			if (base.options.items > base.itemsAmount) {
				base.maximumItem = 0;
				maximum = 0;
				base.maximumPixels = 0;
			} else {
				base.maximumItem = base.itemsAmount - base.options.items;
				base.maximumPixels = maximum;
			}
			return maximum;
		},

		min: function min() {
			return 0;
		},

		loops: function loops() {
			var base = this;

			base.positionsInArray = [0];
			base.pagesInArray = [];
			var prev = 0;
			var elWidth = 0;

			for (var i = 0; i < base.itemsAmount; i++) {
				elWidth += base.itemWidth;
				base.positionsInArray.push(-elWidth);

				if (base.options.scrollPerPage === true) {
					var item = $(base.$owlItems[i]);
					var roundPageNum = item.data("owl-roundPages");
					if (roundPageNum !== prev) {
						base.pagesInArray[prev] = base.positionsInArray[i];
						prev = roundPageNum;
					}
				}
			}
		},

		buildControls: function buildControls() {
			var base = this;
			if (base.options.navigation === true || base.options.pagination === true) {
				base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
			}
			if (base.options.pagination === true) {
				base.buildPagination();
			}
			if (base.options.navigation === true) {
				base.buildButtons();
			}
		},

		buildButtons: function buildButtons() {
			var base = this;
			var buttonsWrapper = $("<div class=\"owl-buttons\"/>");
			base.owlControls.append(buttonsWrapper);

			base.buttonPrev = $("<div/>", {
				"class": "owl-prev",
				"html": base.options.navigationText[0] || ""
			});

			base.buttonNext = $("<div/>", {
				"class": "owl-next",
				"html": base.options.navigationText[1] || ""
			});

			buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);

			buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
				event.preventDefault();
			});

			buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
				event.preventDefault();
				if ($(this).hasClass("owl-next")) {
					base.next();
				} else {
					base.prev();
				}
			});
		},

		buildPagination: function buildPagination() {
			var base = this;

			base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
			base.owlControls.append(base.paginationWrapper);

			base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
				event.preventDefault();
				if (Number($(this).data("owl-page")) !== base.currentItem) {
					base.goTo(Number($(this).data("owl-page")), true);
				}
			});
		},

		updatePagination: function updatePagination() {
			var base = this;
			if (base.options.pagination === false) {
				return false;
			}

			base.paginationWrapper.html("");

			var counter = 0;
			var lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

			for (var i = 0; i < base.itemsAmount; i++) {
				if (i % base.options.items === 0) {
					counter += 1;
					if (lastPage === i) {
						var lastItem = base.itemsAmount - base.options.items;
					}
					var paginationButton = $("<div/>", {
						"class": "owl-page"
					});
					var paginationButtonInner = $("<span></span>", {
						"text": base.options.paginationNumbers === true ? counter : "",
						"class": base.options.paginationNumbers === true ? "owl-numbers" : ""
					});
					paginationButton.append(paginationButtonInner);

					paginationButton.data("owl-page", lastPage === i ? lastItem : i);
					paginationButton.data("owl-roundPages", counter);

					base.paginationWrapper.append(paginationButton);
				}
			}
			base.checkPagination();
		},
		checkPagination: function checkPagination() {
			var base = this;
			if (base.options.pagination === false) {
				return false;
			}
			base.paginationWrapper.find(".owl-page").each(function (i, v) {
				if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
					base.paginationWrapper.find(".owl-page").removeClass("active");
					$(this).addClass("active");
				}
			});
		},

		checkNavigation: function checkNavigation() {
			var base = this;

			if (base.options.navigation === false) {
				return false;
			}
			if (base.options.rewindNav === false) {
				if (base.currentItem === 0 && base.maximumItem === 0) {
					base.buttonPrev.addClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if (base.currentItem === 0 && base.maximumItem !== 0) {
					base.buttonPrev.addClass("disabled");
					base.buttonNext.removeClass("disabled");
				} else if (base.currentItem === base.maximumItem) {
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.addClass("disabled");
				} else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
					base.buttonPrev.removeClass("disabled");
					base.buttonNext.removeClass("disabled");
				}
			}
		},

		updateControls: function updateControls() {
			var base = this;
			base.updatePagination();
			base.checkNavigation();
			if (base.owlControls) {
				if (base.options.items >= base.itemsAmount) {
					base.owlControls.hide();
				} else {
					base.owlControls.show();
				}
			}
		},

		destroyControls: function destroyControls() {
			var base = this;
			if (base.owlControls) {
				base.owlControls.remove();
			}
		},

		next: function next(speed) {
			var base = this;

			if (base.isTransition) {
				return false;
			}

			base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
			if (base.currentItem > base.maximumItem + (base.options.scrollPerPage == true ? base.options.items - 1 : 0)) {
				if (base.options.rewindNav === true) {
					base.currentItem = 0;
					speed = "rewind";
				} else {
					base.currentItem = base.maximumItem;
					return false;
				}
			}
			base.goTo(base.currentItem, speed);
		},

		prev: function prev(speed) {
			var base = this;

			if (base.isTransition) {
				return false;
			}

			if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
				base.currentItem = 0;
			} else {
				base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
			}
			if (base.currentItem < 0) {
				if (base.options.rewindNav === true) {
					base.currentItem = base.maximumItem;
					speed = "rewind";
				} else {
					base.currentItem = 0;
					return false;
				}
			}
			base.goTo(base.currentItem, speed);
		},

		goTo: function goTo(position, speed, drag) {
			var base = this;

			if (base.isTransition) {
				return false;
			}
			if (typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this, [base.$elem]);
			}
			if (position >= base.maximumItem) {
				position = base.maximumItem;
			} else if (position <= 0) {
				position = 0;
			}

			base.currentItem = base.owl.currentItem = position;
			if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
				base.swapSpeed(0);
				if (base.browser.support3d === true) {
					base.transition3d(base.positionsInArray[position]);
				} else {
					base.css2slide(base.positionsInArray[position], 1);
				}
				base.afterGo();
				base.singleItemTransition();

				return false;
			}
			var goToPixel = base.positionsInArray[position];

			if (base.browser.support3d === true) {
				base.isCss3Finish = false;

				if (speed === true) {
					base.swapSpeed("paginationSpeed");
					setTimeout(function () {
						base.isCss3Finish = true;
					}, base.options.paginationSpeed);
				} else if (speed === "rewind") {
					base.swapSpeed(base.options.rewindSpeed);
					setTimeout(function () {
						base.isCss3Finish = true;
					}, base.options.rewindSpeed);
				} else {
					base.swapSpeed("slideSpeed");
					setTimeout(function () {
						base.isCss3Finish = true;
					}, base.options.slideSpeed);
				}
				base.transition3d(goToPixel);
			} else {
				if (speed === true) {
					base.css2slide(goToPixel, base.options.paginationSpeed);
				} else if (speed === "rewind") {
					base.css2slide(goToPixel, base.options.rewindSpeed);
				} else {
					base.css2slide(goToPixel, base.options.slideSpeed);
				}
			}
			base.afterGo();
		},

		jumpTo: function jumpTo(position) {
			var base = this;
			if (typeof base.options.beforeMove === "function") {
				base.options.beforeMove.apply(this, [base.$elem]);
			}
			if (position >= base.maximumItem || position === -1) {
				position = base.maximumItem;
			} else if (position <= 0) {
				position = 0;
			}
			base.swapSpeed(0);
			if (base.browser.support3d === true) {
				base.transition3d(base.positionsInArray[position]);
			} else {
				base.css2slide(base.positionsInArray[position], 1);
			}
			base.currentItem = base.owl.currentItem = position;
			base.afterGo();
		},

		afterGo: function afterGo() {
			var base = this;

			base.prevArr.push(base.currentItem);
			base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
			base.prevArr.shift(0);

			if (base.prevItem !== base.currentItem) {
				base.checkPagination();
				base.checkNavigation();
				base.eachMoveUpdate();

				if (base.options.autoPlay !== false) {
					base.checkAp();
				}
			}
			if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
				base.options.afterMove.apply(this, [base.$elem]);
			}
		},

		stop: function stop() {
			var base = this;
			base.apStatus = "stop";
			clearInterval(base.autoPlayInterval);
		},

		checkAp: function checkAp() {
			var base = this;
			if (base.apStatus !== "stop") {
				base.play();
			}
		},

		play: function play() {
			var base = this;
			base.apStatus = "play";
			if (base.options.autoPlay === false) {
				return false;
			}
			clearInterval(base.autoPlayInterval);
			base.autoPlayInterval = setInterval(function () {
				base.next(true);
			}, base.options.autoPlay);
		},

		swapSpeed: function swapSpeed(action) {
			var base = this;
			if (action === "slideSpeed") {
				base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
			} else if (action === "paginationSpeed") {
				base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
			} else if (typeof action !== "string") {
				base.$owlWrapper.css(base.addCssSpeed(action));
			}
		},

		addCssSpeed: function addCssSpeed(speed) {
			var base = this;
			return {
				"-webkit-transition": "all " + speed + "ms ease",
				"-moz-transition": "all " + speed + "ms ease",
				"-o-transition": "all " + speed + "ms ease",
				"transition": "all " + speed + "ms ease"
			};
		},

		removeTransition: function removeTransition() {
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				"transition": ""
			};
		},

		doTranslate: function doTranslate(pixels) {
			return {
				"-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
				"transform": "translate3d(" + pixels + "px, 0px,0px)"
			};
		},

		transition3d: function transition3d(value) {
			var base = this;
			base.$owlWrapper.css(base.doTranslate(value));
		},

		css2move: function css2move(value) {
			var base = this;
			base.$owlWrapper.css({ "left": value });
		},

		css2slide: function css2slide(value, speed) {
			var base = this;

			base.isCssFinish = false;
			base.$owlWrapper.stop(true, true).animate({
				"left": value
			}, {
				duration: speed || base.options.slideSpeed,
				complete: function complete() {
					base.isCssFinish = true;
				}
			});
		},

		checkBrowser: function checkBrowser() {
			var base = this;

			//Check 3d support
			var translate3D = "translate3d(0px, 0px, 0px)",
			    tempElem = document.createElement("div");

			tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -ms-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
			var regex = /translate3d\(0px, 0px, 0px\)/g,
			    asSupport = tempElem.style.cssText.match(regex),
			    support3d = asSupport !== null && asSupport.length === 1;

			var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

			base.browser = {
				"support3d": support3d,
				"isTouch": isTouch
			};
		},

		moveEvents: function moveEvents() {
			var base = this;
			if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
				base.gestures();
				base.disabledEvents();
			}
		},

		eventTypes: function eventTypes() {
			var base = this;
			var types = ["s", "e", "x"];

			base.ev_types = {};

			if (base.options.mouseDrag === true && base.options.touchDrag === true) {
				types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"];
			} else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
				types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
			} else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
				types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
			}

			base.ev_types["start"] = types[0];
			base.ev_types["move"] = types[1];
			base.ev_types["end"] = types[2];
		},

		disabledEvents: function disabledEvents() {
			var base = this;
			base.$elem.on("dragstart.owl", function (event) {
				event.preventDefault();
			});
			base.$elem.on("mousedown.disableTextSelect", function (e) {
				return $(e.target).is('input, textarea, select, option');
			});
		},

		gestures: function gestures() {
			var base = this;

			var locals = {
				offsetX: 0,
				offsetY: 0,
				baseElWidth: 0,
				relativePos: 0,
				position: null,
				minSwipe: null,
				maxSwipe: null,
				sliding: null,
				dargging: null,
				targetElement: null
			};

			base.isCssFinish = true;

			function getTouches(event) {
				if (event.touches) {
					return {
						x: event.touches[0].pageX,
						y: event.touches[0].pageY
					};
				} else {
					if (event.pageX !== undefined) {
						return {
							x: event.pageX,
							y: event.pageY
						};
					} else {
						return {
							x: event.clientX,
							y: event.clientY
						};
					}
				}
			}

			function swapEvents(type) {
				if (type === "on") {
					$(document).on(base.ev_types["move"], dragMove);
					$(document).on(base.ev_types["end"], dragEnd);
				} else if (type === "off") {
					$(document).off(base.ev_types["move"]);
					$(document).off(base.ev_types["end"]);
				}
			}

			function dragStart(event) {
				var event = event.originalEvent || event || window.event;

				if (event.which === 3) {
					return false;
				}
				if (base.itemsAmount <= base.options.items) {
					return;
				}
				if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
					return false;
				}
				if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
					return false;
				}

				if (base.options.autoPlay !== false) {
					clearInterval(base.autoPlayInterval);
				}

				if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
					base.$owlWrapper.addClass("grabbing");
				}

				base.newPosX = 0;
				base.newRelativeX = 0;

				$(this).css(base.removeTransition());

				var position = $(this).position();
				locals.relativePos = position.left;

				locals.offsetX = getTouches(event).x - position.left;
				locals.offsetY = getTouches(event).y - position.top;

				swapEvents("on");

				locals.sliding = false;
				locals.targetElement = event.target || event.srcElement;
			}

			function dragMove(event) {
				var event = event.originalEvent || event || window.event;

				base.newPosX = getTouches(event).x - locals.offsetX;
				base.newPosY = getTouches(event).y - locals.offsetY;
				base.newRelativeX = base.newPosX - locals.relativePos;

				if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
					locals.dragging = true;
					base.options.startDragging.apply(base, [base.$elem]);
				}

				if (base.newRelativeX > 8 || base.newRelativeX < -8 && base.browser.isTouch === true) {
					event.preventDefault ? event.preventDefault() : event.returnValue = false;
					locals.sliding = true;
				}

				if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
					$(document).off("touchmove.owl");
				}

				var minSwipe = function minSwipe() {
					return base.newRelativeX / 5;
				};
				var maxSwipe = function maxSwipe() {
					return base.maximumPixels + base.newRelativeX / 5;
				};

				base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
				if (base.browser.support3d === true) {
					base.transition3d(base.newPosX);
				} else {
					base.css2move(base.newPosX);
				}
			}

			function dragEnd(event) {
				var event = event.originalEvent || event || window.event;
				event.target = event.target || event.srcElement;

				locals.dragging = false;

				if (base.browser.isTouch !== true) {
					base.$owlWrapper.removeClass("grabbing");
				}

				if (base.newRelativeX < 0) {
					base.dragDirection = base.owl.dragDirection = "left";
				} else {
					base.dragDirection = base.owl.dragDirection = "right";
				}

				if (base.newRelativeX !== 0) {
					var newPosition = base.getNewPosition();
					base.goTo(newPosition, false, "drag");
					if (locals.targetElement === event.target && base.browser.isTouch !== true) {
						$(event.target).on("click.disable", function (ev) {
							ev.stopImmediatePropagation();
							ev.stopPropagation();
							ev.preventDefault();
							$(event.target).off("click.disable");
						});
						var handlers = $._data(event.target, "events")["click"];
						var owlStopEvent = handlers.pop();
						handlers.splice(0, 0, owlStopEvent);
					}
				}
				swapEvents("off");
			}
			base.$elem.on(base.ev_types["start"], ".owl-wrapper", dragStart);
		},

		getNewPosition: function getNewPosition() {
			var base = this,
			    newPosition;

			newPosition = base.closestItem();

			if (newPosition > base.maximumItem) {
				base.currentItem = base.maximumItem;
				newPosition = base.maximumItem;
			} else if (base.newPosX >= 0) {
				newPosition = 0;
				base.currentItem = 0;
			}
			return newPosition;
		},
		closestItem: function closestItem() {
			var base = this,
			    array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
			    goal = base.newPosX,
			    closest = null;

			$.each(array, function (i, v) {
				if (goal - base.itemWidth / 20 > array[i + 1] && goal - base.itemWidth / 20 < v && base.moveDirection() === "left") {
					closest = v;
					if (base.options.scrollPerPage === true) {
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						base.currentItem = i;
					}
				} else if (goal + base.itemWidth / 20 < v && goal + base.itemWidth / 20 > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
					if (base.options.scrollPerPage === true) {
						closest = array[i + 1] || array[array.length - 1];
						base.currentItem = $.inArray(closest, base.positionsInArray);
					} else {
						closest = array[i + 1];
						base.currentItem = i + 1;
					}
				}
			});
			return base.currentItem;
		},

		moveDirection: function moveDirection() {
			var base = this,
			    direction;
			if (base.newRelativeX < 0) {
				direction = "right";
				base.playDirection = "next";
			} else {
				direction = "left";
				base.playDirection = "prev";
			}
			return direction;
		},

		customEvents: function customEvents() {
			var base = this;
			base.$elem.on("owl.next", function () {
				base.next();
			});
			base.$elem.on("owl.prev", function () {
				base.prev();
			});
			base.$elem.on("owl.play", function (event, speed) {
				base.options.autoPlay = speed;
				base.play();
				base.hoverStatus = "play";
			});
			base.$elem.on("owl.stop", function () {
				base.stop();
				base.hoverStatus = "stop";
			});
			base.$elem.on("owl.goTo", function (event, item) {
				base.goTo(item);
			});
			base.$elem.on("owl.jumpTo", function (event, item) {
				base.jumpTo(item);
			});
		},

		stopOnHover: function stopOnHover() {
			var base = this;
			if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
				base.$elem.on("mouseover", function () {
					base.stop();
				});
				base.$elem.on("mouseout", function () {
					if (base.hoverStatus !== "stop") {
						base.play();
					}
				});
			}
		},

		lazyLoad: function lazyLoad() {
			var base = this;

			if (base.options.lazyLoad === false) {
				return false;
			}
			for (var i = 0; i < base.itemsAmount; i++) {
				var $item = $(base.$owlItems[i]);

				if ($item.data("owl-loaded") === "loaded") {
					continue;
				}

				var itemNumber = $item.data("owl-item"),
				    $lazyImg = $item.find(".lazyOwl"),
				    follow;

				if (typeof $lazyImg.data("src") !== "string") {
					$item.data("owl-loaded", "loaded");
					continue;
				}
				if ($item.data("owl-loaded") === undefined) {
					$lazyImg.hide();
					$item.addClass("loading").data("owl-loaded", "checked");
				}
				if (base.options.lazyFollow === true) {
					follow = itemNumber >= base.currentItem;
				} else {
					follow = true;
				}
				if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
					base.lazyPreload($item, $lazyImg);
				}
			}
		},

		lazyPreload: function lazyPreload($item, $lazyImg) {
			var base = this,
			    iterations = 0;
			if ($lazyImg.prop("tagName") === "DIV") {
				$lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
				var isBackgroundImg = true;
			} else {
				$lazyImg[0].src = $lazyImg.data("src");
			}
			checkLazyImage();

			function checkLazyImage() {
				iterations += 1;
				if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
					showImage();
				} else if (iterations <= 100) {
					//if image loads in less than 10 seconds 
					setTimeout(checkLazyImage, 100);
				} else {
					showImage();
				}
			}
			function showImage() {
				$item.data("owl-loaded", "loaded").removeClass("loading");
				$lazyImg.removeAttr("data-src");
				base.options.lazyEffect === "fade" ? $lazyImg.fadeIn(400) : $lazyImg.show();
				if (typeof base.options.afterLazyLoad === "function") {
					base.options.afterLazyLoad.apply(this, [base.$elem]);
				}
			}
		},

		autoHeight: function autoHeight() {
			var base = this;
			var $currentimg = $(base.$owlItems[base.currentItem]).find("img");

			if ($currentimg.get(0) !== undefined) {
				var iterations = 0;
				checkImage();
			} else {
				addHeight();
			}
			function checkImage() {
				iterations += 1;
				if (base.completeImg($currentimg.get(0))) {
					addHeight();
				} else if (iterations <= 100) {
					//if image loads in less than 10 seconds 
					setTimeout(checkImage, 100);
				} else {
					base.wrapperOuter.css("height", ""); //Else remove height attribute
				}
			}

			function addHeight() {
				var $currentItem = $(base.$owlItems[base.currentItem]).height();
				base.wrapperOuter.css("height", $currentItem + "px");
				if (!base.wrapperOuter.hasClass("autoHeight")) {
					setTimeout(function () {
						base.wrapperOuter.addClass("autoHeight");
					}, 0);
				}
			}
		},

		completeImg: function completeImg(img) {
			if (!img.complete) {
				return false;
			}
			if (typeof img.naturalWidth !== "undefined" && img.naturalWidth == 0) {
				return false;
			}
			return true;
		},

		onVisibleItems: function onVisibleItems() {
			var base = this;

			if (base.options.addClassActive === true) {
				base.$owlItems.removeClass("active");
			}
			base.visibleItems = [];
			for (var i = base.currentItem; i < base.currentItem + base.options.items; i++) {
				base.visibleItems.push(i);

				if (base.options.addClassActive === true) {
					$(base.$owlItems[i]).addClass("active");
				}
			}
			base.owl.visibleItems = base.visibleItems;
		},

		transitionTypes: function transitionTypes(className) {
			var base = this;
			//Currently available: "fade","backSlide","goDown","fadeUp"
			base.outClass = "owl-" + className + "-out";
			base.inClass = "owl-" + className + "-in";
		},

		singleItemTransition: function singleItemTransition() {
			var base = this;
			base.isTransition = true;

			var outClass = base.outClass,
			    inClass = base.inClass,
			    $currentItem = base.$owlItems.eq(base.currentItem),
			    $prevItem = base.$owlItems.eq(base.prevItem),
			    prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
			    origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2;

			base.$owlWrapper.addClass('owl-origin').css({
				"-webkit-transform-origin": origin + "px",
				"-moz-perspective-origin": origin + "px",
				"perspective-origin": origin + "px"
			});
			function transStyles(prevPos, zindex) {
				return {
					"position": "relative",
					"left": prevPos + "px"
				};
			}

			var animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

			$prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function () {
				base.endPrev = true;
				$prevItem.off(animEnd);
				base.clearTransStyle($prevItem, outClass);
			});

			$currentItem.addClass(inClass).on(animEnd, function () {
				base.endCurrent = true;
				$currentItem.off(animEnd);
				base.clearTransStyle($currentItem, inClass);
			});
		},

		clearTransStyle: function clearTransStyle(item, classToRemove) {
			var base = this;
			item.css({
				"position": "",
				"left": ""
			}).removeClass(classToRemove);
			if (base.endPrev && base.endCurrent) {
				base.$owlWrapper.removeClass('owl-origin');
				base.endPrev = false;
				base.endCurrent = false;
				base.isTransition = false;
			}
		},

		owlStatus: function owlStatus() {
			var base = this;
			base.owl = {
				"userOptions": base.userOptions,
				"baseElement": base.$elem,
				"userItems": base.$userItems,
				"owlItems": base.$owlItems,
				"currentItem": base.currentItem,
				"prevItem": base.prevItem,
				"visibleItems": base.visibleItems,
				"isTouch": base.browser.isTouch,
				"browser": base.browser,
				"dragDirection": base.dragDirection
			};
		},

		clearEvents: function clearEvents() {
			var base = this;
			base.$elem.off(".owl owl mousedown.disableTextSelect");
			$(document).off(".owl owl");
			$(window).off("resize", base.resizer);
		},

		unWrap: function unWrap() {
			var base = this;
			if (base.$elem.children().length !== 0) {
				base.$owlWrapper.unwrap();
				base.$userItems.unwrap().unwrap();
				if (base.owlControls) {
					base.owlControls.remove();
				}
			}
			base.clearEvents();
			base.$elem.attr("style", base.$elem.data("owl-originalStyles") || "").attr("class", base.$elem.data("owl-originalClasses"));
		},

		destroy: function destroy() {
			var base = this;
			base.stop();
			clearInterval(base.checkVisible);
			base.unWrap();
			base.$elem.removeData();
		},

		reinit: function reinit(newOptions) {
			var base = this;
			var options = $.extend({}, base.userOptions, newOptions);
			base.unWrap();
			base.init(options, base.$elem);
		},

		addItem: function addItem(htmlString, targetPosition) {
			var base = this,
			    position;

			if (!htmlString) {
				return false;
			}

			if (base.$elem.children().length === 0) {
				base.$elem.append(htmlString);
				base.setVars();
				return false;
			}
			base.unWrap();
			if (targetPosition === undefined || targetPosition === -1) {
				position = -1;
			} else {
				position = targetPosition;
			}
			if (position >= base.$userItems.length || position === -1) {
				base.$userItems.eq(-1).after(htmlString);
			} else {
				base.$userItems.eq(position).before(htmlString);
			}

			base.setVars();
		},

		removeItem: function removeItem(targetPosition) {
			var base = this,
			    position;

			if (base.$elem.children().length === 0) {
				return false;
			}

			if (targetPosition === undefined || targetPosition === -1) {
				position = -1;
			} else {
				position = targetPosition;
			}

			base.unWrap();
			base.$userItems.eq(position).remove();
			base.setVars();
		}

	};

	$.fn.owlCarousel = function (options) {
		return this.each(function () {
			if ($(this).data("owl-init") === true) {
				return false;
			}
			$(this).data("owl-init", true);
			var carousel = Object.create(Carousel);
			carousel.init(options, this);
			$.data(this, "owlCarousel", carousel);
		});
	};

	$.fn.owlCarousel.options = {

		items: 1,
		itemsCustom: false,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [768, 1],
		itemsTabletSmall: false,
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,

		slideSpeed: 200,
		paginationSpeed: 800,
		rewindSpeed: 1000,

		autoPlay: false,
		stopOnHover: false,

		navigation: false,
		navigationText: ["prev", "next"],
		rewindNav: true,
		scrollPerPage: false,

		pagination: true,
		paginationNumbers: false,

		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,

		baseClass: "owl-carousel",
		theme: "owl-theme",

		lazyLoad: false,
		lazyFollow: true,
		lazyEffect: "fade",

		autoHeight: false,

		jsonPath: false,
		jsonSuccess: false,

		dragBeforeAnimFinish: true,
		mouseDrag: true,
		touchDrag: true,

		addClassActive: false,
		transitionStyle: false,

		beforeUpdate: false,
		afterUpdate: false,
		beforeInit: false,
		afterInit: false,
		beforeMove: false,
		afterMove: false,
		afterAction: false,
		startDragging: false,
		afterLazyLoad: false

	};
})(jQuery, window, document);

$(document).ready(function () {
	$("#owl-demo2").owlCarousel({
		items: 1,
		lazyLoad: false,
		autoPlay: true,
		navigation: false,
		navigationText: false,
		pagination: true
	});
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function ($) {
  $.fn.UItoTop = function (options) {
    var defaults = { text: 'To Top', min: 200, inDelay: 600, outDelay: 400, containerID: 'toTop', containerHoverID: 'toTopHover', scrollSpeed: 1000, easingType: 'linear' },
        settings = $.extend(defaults, options),
        containerIDhash = '#' + settings.containerID,
        containerHoverIDHash = '#' + settings.containerHoverID;$('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');$(containerIDhash).hide().on('click.UItoTop', function () {
      $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType);$('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType);return false;
    }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function () {
      $(containerHoverIDHash, this).stop().animate({ 'opacity': 1 }, 600, 'linear');
    }, function () {
      $(containerHoverIDHash, this).stop().animate({ 'opacity': 0 }, 700, 'linear');
    });$(window).scroll(function () {
      var sd = $(window).scrollTop();if (typeof document.body.style.maxHeight === "undefined") {
        $(containerIDhash).css({ 'position': 'absolute', 'top': sd + $(window).height() - 50 });
      }
      if (sd > settings.min) $(containerIDhash).fadeIn(settings.inDelay);else $(containerIDhash).fadeOut(settings.Outdelay);
    });
  };
})(jQuery);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.extend(jQuery.easing, {
	easeInQuad: function easeInQuad(x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function easeOutQuad(x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * (--t * (t - 2) - 1) + b;
	},
	easeInCubic: function easeInCubic(x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function easeOutCubic(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function easeInQuart(x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function easeOutQuart(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function easeInQuint(x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function easeOutQuint(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function easeInSine(x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function easeOutSine(x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function easeInOutSine(x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function easeInExpo(x, t, b, c, d) {
		return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function easeOutExpo(x, t, b, c, d) {
		return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function easeInCirc(x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function easeOutCirc(x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function easeInElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function easeOutElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
		var s = 1.70158;var p = 0;var a = c;
		if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function easeInBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function easeOutBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function easeInBounce(x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function easeOutBounce(x, t, b, c, d) {
		if ((t /= d) < 1 / 2.75) {
			return c * (7.5625 * t * t) + b;
		} else if (t < 2 / 2.75) {
			return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
		} else if (t < 2.5 / 2.75) {
			return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
		}
	},
	easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

jQuery(document).ready(function ($) {
	$(".scroll").click(function (event) {
		event.preventDefault();
		$('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
	});
});

$(document).ready(function () {
	$().UItoTop({ easingType: 'easeOutQuart' });
});

/***/ })
/******/ ]);