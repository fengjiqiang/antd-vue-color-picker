import { h as Ne, nextTick as se, createVNode as M, defineComponent as K, getCurrentInstance as je, ref as w, computed as R, watch as P, onMounted as de, openBlock as A, createElementBlock as V, normalizeClass as he, createElementVNode as O, normalizeStyle as H, pushScopeId as yt, popScopeId as _t, shallowRef as De, inject as Ct, watchEffect as wt, Fragment as Ot, renderList as St, reactive as xt, provide as kt, resolveComponent as pe, createBlock as ne, mergeProps as $t, withCtx as ae, createCommentVNode as me, createTextVNode as Be, withDirectives as Tt, unref as He, vShow as Mt } from "vue";
function k(e, r) {
  At(e) && (e = "100%");
  var t = jt(e);
  return e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * r), 10) / 100), Math.abs(e - r) < 1e-6 ? 1 : (r === 360 ? e = (e < 0 ? e % r + r : e % r) / parseFloat(String(r)) : e = e % r / parseFloat(String(r)), e);
}
function At(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function jt(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Pt(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function oe(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function ve(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Et(e, r, t) {
  return {
    r: k(e, 255) * 255,
    g: k(r, 255) * 255,
    b: k(t, 255) * 255
  };
}
function be(e, r, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (r - e) * (6 * t) : t < 1 / 2 ? r : t < 2 / 3 ? e + (r - e) * (2 / 3 - t) * 6 : e;
}
function It(e, r, t) {
  var n, a, o;
  if (e = k(e, 360), r = k(r, 100), t = k(t, 100), r === 0)
    a = t, o = t, n = t;
  else {
    var i = t < 0.5 ? t * (1 + r) : t + r - t * r, l = 2 * t - i;
    n = be(l, i, e + 1 / 3), a = be(l, i, e), o = be(l, i, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: o * 255 };
}
function Ft(e, r, t) {
  e = k(e, 255), r = k(r, 255), t = k(t, 255);
  var n = Math.max(e, r, t), a = Math.min(e, r, t), o = 0, i = n, l = n - a, s = n === 0 ? 0 : l / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e:
        o = (r - t) / l + (r < t ? 6 : 0);
        break;
      case r:
        o = (t - e) / l + 2;
        break;
      case t:
        o = (e - r) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: i };
}
function Nt(e, r, t) {
  e = k(e, 360) * 6, r = k(r, 100), t = k(t, 100);
  var n = Math.floor(e), a = e - n, o = t * (1 - r), i = t * (1 - a * r), l = t * (1 - (1 - a) * r), s = n % 6, u = [t, i, o, o, l, t][s], f = [l, t, t, i, o, o][s], d = [o, o, l, t, t, i][s];
  return { r: u * 255, g: f * 255, b: d * 255 };
}
function Dt(e, r, t, n) {
  var a = [
    ve(Math.round(e).toString(16)),
    ve(Math.round(r).toString(16)),
    ve(Math.round(t).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Re(e) {
  return S(e) / 255;
}
function S(e) {
  return parseInt(e, 16);
}
var Ve = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function q(e) {
  var r = { r: 0, g: 0, b: 0 }, t = 1, n = null, a = null, o = null, i = !1, l = !1;
  return typeof e == "string" && (e = Rt(e)), typeof e == "object" && (j(e.r) && j(e.g) && j(e.b) ? (r = Et(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : j(e.h) && j(e.s) && j(e.v) ? (n = oe(e.s), a = oe(e.v), r = Nt(e.h, n, a), i = !0, l = "hsv") : j(e.h) && j(e.s) && j(e.l) && (n = oe(e.s), o = oe(e.l), r = It(e.h, n, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = Pt(t), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: t
  };
}
var Bt = "[-\\+]?\\d+%?", Ht = "[-\\+]?\\d*\\.\\d+%?", F = "(?:".concat(Ht, ")|(?:").concat(Bt, ")"), ye = "[\\s|\\(]+(".concat(F, ")[,|\\s]+(").concat(F, ")[,|\\s]+(").concat(F, ")\\s*\\)?"), _e = "[\\s|\\(]+(".concat(F, ")[,|\\s]+(").concat(F, ")[,|\\s]+(").concat(F, ")[,|\\s]+(").concat(F, ")\\s*\\)?"), $ = {
  CSS_UNIT: new RegExp(F),
  rgb: new RegExp("rgb" + ye),
  rgba: new RegExp("rgba" + _e),
  hsl: new RegExp("hsl" + ye),
  hsla: new RegExp("hsla" + _e),
  hsv: new RegExp("hsv" + ye),
  hsva: new RegExp("hsva" + _e),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Rt(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var r = !1;
  if (Ve[e])
    e = Ve[e], r = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = $.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = $.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = $.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = $.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = $.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = $.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = $.hex8.exec(e), t ? {
    r: S(t[1]),
    g: S(t[2]),
    b: S(t[3]),
    a: Re(t[4]),
    format: r ? "name" : "hex8"
  } : (t = $.hex6.exec(e), t ? {
    r: S(t[1]),
    g: S(t[2]),
    b: S(t[3]),
    format: r ? "name" : "hex"
  } : (t = $.hex4.exec(e), t ? {
    r: S(t[1] + t[1]),
    g: S(t[2] + t[2]),
    b: S(t[3] + t[3]),
    a: Re(t[4] + t[4]),
    format: r ? "name" : "hex8"
  } : (t = $.hex3.exec(e), t ? {
    r: S(t[1] + t[1]),
    g: S(t[2] + t[2]),
    b: S(t[3] + t[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function j(e) {
  return !!$.CSS_UNIT.exec(String(e));
}
var le = 2, We = 0.16, Vt = 0.05, Wt = 0.05, Lt = 0.15, ut = 5, ft = 4, zt = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Le(e) {
  var r = e.r, t = e.g, n = e.b, a = Ft(r, t, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function ie(e) {
  var r = e.r, t = e.g, n = e.b;
  return "#".concat(Dt(r, t, n, !1));
}
function Ut(e, r, t) {
  var n = t / 100, a = {
    r: (r.r - e.r) * n + e.r,
    g: (r.g - e.g) * n + e.g,
    b: (r.b - e.b) * n + e.b
  };
  return a;
}
function ze(e, r, t) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = t ? Math.round(e.h) - le * r : Math.round(e.h) + le * r : n = t ? Math.round(e.h) + le * r : Math.round(e.h) - le * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ue(e, r, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return t ? n = e.s - We * r : r === ft ? n = e.s + We : n = e.s + Vt * r, n > 1 && (n = 1), t && r === ut && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function qe(e, r, t) {
  var n;
  return t ? n = e.v + Wt * r : n = e.v - Lt * r, n > 1 && (n = 1), Number(n.toFixed(2));
}
function $e(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], n = q(e), a = ut; a > 0; a -= 1) {
    var o = Le(n), i = ie(q({
      h: ze(o, a, !0),
      s: Ue(o, a, !0),
      v: qe(o, a, !0)
    }));
    t.push(i);
  }
  t.push(ie(n));
  for (var l = 1; l <= ft; l += 1) {
    var s = Le(n), u = ie(q({
      h: ze(s, l),
      s: Ue(s, l),
      v: qe(s, l)
    }));
    t.push(u);
  }
  return r.theme === "dark" ? zt.map(function(f) {
    var d = f.index, p = f.opacity, g = ie(Ut(q(r.backgroundColor || "#141414"), q(t[d]), p * 100));
    return g;
  }) : t;
}
var Ce = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, we = {}, Oe = {};
Object.keys(Ce).forEach(function(e) {
  we[e] = $e(Ce[e]), we[e].primary = we[e][5], Oe[e] = $e(Ce[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Oe[e].primary = Oe[e][5];
});
var Xe = [], X = [], qt = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
function Xt() {
  var e = document.createElement("style");
  return e.setAttribute("type", "text/css"), e;
}
function Gt(e, r) {
  if (r = r || {}, e === void 0)
    throw new Error(qt);
  var t = r.prepend === !0 ? "prepend" : "append", n = r.container !== void 0 ? r.container : document.querySelector("head"), a = Xe.indexOf(n);
  a === -1 && (a = Xe.push(n) - 1, X[a] = {});
  var o;
  return X[a] !== void 0 && X[a][t] !== void 0 ? o = X[a][t] : (o = X[a][t] = Xt(), t === "prepend" ? n.insertBefore(o, n.childNodes[0]) : n.appendChild(o)), e.charCodeAt(0) === 65279 && (e = e.substr(1, e.length)), o.styleSheet ? o.styleSheet.cssText += e : o.textContent += e, o;
}
function Ge(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      Yt(e, a, t[a]);
    });
  }
  return e;
}
function Yt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Zt(e, r) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(r));
}
function Jt(e, r) {
  Zt(e, "[@ant-design/icons-vue] ".concat(r));
}
function Ye(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Te(e, r, t) {
  return t ? Ne(e.tag, Ge({
    key: r
  }, t, e.attrs), (e.children || []).map(function(n, a) {
    return Te(n, "".concat(r, "-").concat(e.tag, "-").concat(a));
  })) : Ne(e.tag, Ge({
    key: r
  }, e.attrs), (e.children || []).map(function(n, a) {
    return Te(n, "".concat(r, "-").concat(e.tag, "-").concat(a));
  }));
}
function dt(e) {
  return $e(e)[0];
}
function ht(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Qt = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Ze = !1, Kt = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qt;
  se(function() {
    Ze || (typeof window < "u" && window.document && window.document.documentElement && Gt(r, {
      prepend: !0
    }), Ze = !0);
  });
}, er = ["icon", "primaryColor", "secondaryColor"];
function tr(e, r) {
  if (e == null)
    return {};
  var t = rr(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function rr(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      nr(e, a, t[a]);
    });
  }
  return e;
}
function nr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Z = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ar(e) {
  var r = e.primaryColor, t = e.secondaryColor;
  Z.primaryColor = r, Z.secondaryColor = t || dt(r), Z.calculated = !!t;
}
function or() {
  return ce({}, Z);
}
var L = function(r, t) {
  var n = ce({}, r, t.attrs), a = n.icon, o = n.primaryColor, i = n.secondaryColor, l = tr(n, er), s = Z;
  if (o && (s = {
    primaryColor: o,
    secondaryColor: i || dt(o)
  }), Kt(), Jt(Ye(a), "icon should be icon definiton, but got ".concat(a)), !Ye(a))
    return null;
  var u = a;
  return u && typeof u.icon == "function" && (u = ce({}, u, {
    icon: u.icon(s.primaryColor, s.secondaryColor)
  })), Te(u.icon, "svg-".concat(u.name), ce({}, l, {
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
L.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
L.inheritAttrs = !1;
L.displayName = "IconBase";
L.getTwoToneColors = or;
L.setTwoToneColors = ar;
const Pe = L;
function lr(e, r) {
  return ur(e) || cr(e, r) || sr(e, r) || ir();
}
function ir() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sr(e, r) {
  if (e) {
    if (typeof e == "string")
      return Je(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Je(e, r);
  }
}
function Je(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function cr(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, o = !1, i, l;
    try {
      for (t = t.call(e); !(a = (i = t.next()).done) && (n.push(i.value), !(r && n.length === r)); a = !0)
        ;
    } catch (s) {
      o = !0, l = s;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return n;
  }
}
function ur(e) {
  if (Array.isArray(e))
    return e;
}
function gt(e) {
  var r = ht(e), t = lr(r, 2), n = t[0], a = t[1];
  return Pe.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function fr() {
  var e = Pe.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var dr = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function hr(e, r) {
  return vr(e) || mr(e, r) || pr(e, r) || gr();
}
function gr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pr(e, r) {
  if (e) {
    if (typeof e == "string")
      return Qe(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Qe(e, r);
  }
}
function Qe(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function mr(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], a = !0, o = !1, i, l;
    try {
      for (t = t.call(e); !(a = (i = t.next()).done) && (n.push(i.value), !(r && n.length === r)); a = !0)
        ;
    } catch (s) {
      o = !0, l = s;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return n;
  }
}
function vr(e) {
  if (Array.isArray(e))
    return e;
}
function Ke(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      Me(e, a, t[a]);
    });
  }
  return e;
}
function Me(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function br(e, r) {
  if (e == null)
    return {};
  var t = yr(e, r), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function yr(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
gt("#1890ff");
var z = function(r, t) {
  var n, a = Ke({}, r, t.attrs), o = a.class, i = a.icon, l = a.spin, s = a.rotate, u = a.tabindex, f = a.twoToneColor, d = a.onClick, p = br(a, dr), g = (n = {
    anticon: !0
  }, Me(n, "anticon-".concat(i.name), !!i.name), Me(n, o, o), n), h = l === "" || l || i.name === "loading" ? "anticon-spin" : "", c = u;
  c === void 0 && d && (c = -1, p.tabindex = c);
  var m = s ? {
    msTransform: "rotate(".concat(s, "deg)"),
    transform: "rotate(".concat(s, "deg)")
  } : void 0, v = ht(f), b = hr(v, 2), E = b[0], C = b[1];
  return M("span", Ke({
    role: "img",
    "aria-label": i.name
  }, p, {
    onClick: d,
    class: g
  }), [M(Pe, {
    class: h,
    icon: i,
    primaryColor: E,
    secondaryColor: C,
    style: m
  }, null)]);
};
z.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
z.displayName = "AntdIcon";
z.inheritAttrs = !1;
z.getTwoToneColor = fr;
z.setTwoToneColor = gt;
const pt = z;
var _r = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const Cr = _r;
function et(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      wr(e, a, t[a]);
    });
  }
  return e;
}
function wr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Ee = function(r, t) {
  var n = et({}, r, t.attrs);
  return M(pt, et({}, n, {
    icon: Cr
  }), null);
};
Ee.displayName = "CloseOutlined";
Ee.inheritAttrs = !1;
const Or = Ee;
var Sr = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" };
const xr = Sr;
function tt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), n.forEach(function(a) {
      kr(e, a, t[a]);
    });
  }
  return e;
}
function kr(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var Ie = function(r, t) {
  var n = tt({}, r, t.attrs);
  return M(pt, tt({}, n, {
    icon: xr
  }), null);
};
Ie.displayName = "DownOutlined";
Ie.inheritAttrs = !1;
const $r = Ie;
var Tr = typeof global == "object" && global && global.Object === Object && global;
const Mr = Tr;
var Ar = typeof self == "object" && self && self.Object === Object && self, jr = Mr || Ar || Function("return this")();
const mt = jr;
var Pr = mt.Symbol;
const fe = Pr;
var vt = Object.prototype, Er = vt.hasOwnProperty, Ir = vt.toString, G = fe ? fe.toStringTag : void 0;
function Fr(e) {
  var r = Er.call(e, G), t = e[G];
  try {
    e[G] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ir.call(e);
  return n && (r ? e[G] = t : delete e[G]), a;
}
var Nr = Object.prototype, Dr = Nr.toString;
function Br(e) {
  return Dr.call(e);
}
var Hr = "[object Null]", Rr = "[object Undefined]", rt = fe ? fe.toStringTag : void 0;
function Vr(e) {
  return e == null ? e === void 0 ? Rr : Hr : rt && rt in Object(e) ? Fr(e) : Br(e);
}
function Wr(e) {
  return e != null && typeof e == "object";
}
var Lr = "[object Symbol]";
function zr(e) {
  return typeof e == "symbol" || Wr(e) && Vr(e) == Lr;
}
var Ur = /\s/;
function qr(e) {
  for (var r = e.length; r-- && Ur.test(e.charAt(r)); )
    ;
  return r;
}
var Xr = /^\s+/;
function Gr(e) {
  return e && e.slice(0, qr(e) + 1).replace(Xr, "");
}
function Ae(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var nt = 0 / 0, Yr = /^[-+]0x[0-9a-f]+$/i, Zr = /^0b[01]+$/i, Jr = /^0o[0-7]+$/i, Qr = parseInt;
function at(e) {
  if (typeof e == "number")
    return e;
  if (zr(e))
    return nt;
  if (Ae(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ae(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Gr(e);
  var t = Zr.test(e);
  return t || Jr.test(e) ? Qr(e.slice(2), t ? 2 : 8) : Yr.test(e) ? nt : +e;
}
var Kr = function() {
  return mt.Date.now();
};
const Se = Kr;
var en = "Expected a function", tn = Math.max, rn = Math.min;
function nn(e, r, t) {
  var n, a, o, i, l, s, u = 0, f = !1, d = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(en);
  r = at(r) || 0, Ae(t) && (f = !!t.leading, d = "maxWait" in t, o = d ? tn(at(t.maxWait) || 0, r) : o, p = "trailing" in t ? !!t.trailing : p);
  function g(y) {
    var T = n, N = a;
    return n = a = void 0, u = y, i = e.apply(N, T), i;
  }
  function h(y) {
    return u = y, l = setTimeout(v, r), f ? g(y) : i;
  }
  function c(y) {
    var T = y - s, N = y - u, te = r - T;
    return d ? rn(te, o - N) : te;
  }
  function m(y) {
    var T = y - s, N = y - u;
    return s === void 0 || T >= r || T < 0 || d && N >= o;
  }
  function v() {
    var y = Se();
    if (m(y))
      return b(y);
    l = setTimeout(v, c(y));
  }
  function b(y) {
    return l = void 0, p && n ? g(y) : (n = a = void 0, i);
  }
  function E() {
    l !== void 0 && clearTimeout(l), u = 0, n = s = a = l = void 0;
  }
  function C() {
    return l === void 0 ? i : b(Se());
  }
  function U() {
    var y = Se(), T = m(y);
    if (n = arguments, a = this, s = y, T) {
      if (l === void 0)
        return h(s);
      if (d)
        return clearTimeout(l), l = setTimeout(v, r), g(s);
    }
    return l === void 0 && (l = setTimeout(v, r)), i;
  }
  return U.cancel = E, U.flush = C, U;
}
let xe = !1;
function Q(e, r) {
  const t = function(a) {
    var o;
    (o = r == null ? void 0 : r.drag) == null || o.call(r, a);
  }, n = function(a) {
    var o;
    document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n), document.onselectstart = null, document.ondragstart = null, xe = !1, (o = r == null ? void 0 : r.end) == null || o.call(r, a);
  };
  e.addEventListener("mousedown", function(a) {
    var o;
    xe || (document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), xe = !0, (o = r == null ? void 0 : r.start) == null || o.call(r, a));
  });
}
const an = /* @__PURE__ */ K({
  __name: "hueSlider",
  props: {
    color: {
      type: Object
    },
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = e, n = je(), a = w(null), o = w(null), i = w(0), l = w(0), s = R(() => t.color.get("hue"));
    P(
      () => s.value,
      () => {
        g();
      }
    );
    const u = (h) => {
      h.target !== a.value && f(h);
    }, f = (h) => {
      const m = (n == null ? void 0 : n.vnode.el).getBoundingClientRect();
      let v;
      if (t.vertical) {
        let b = h.clientY - m.top;
        b = Math.min(b, m.height - a.value.offsetHeight / 2), b = Math.max(a.value.offsetHeight / 2, b), v = Math.round(
          (b - a.value.offsetHeight / 2) / (m.height - a.value.offsetHeight) * 360
        );
      } else {
        let b = h.clientX - m.left;
        b = Math.min(b, m.width - a.value.offsetWidth / 2), b = Math.max(a.value.offsetWidth / 2, b), v = Math.round(
          (b - a.value.offsetWidth / 2) / (m.width - a.value.offsetWidth) * 360
        );
      }
      t.color.set("hue", v);
    }, d = () => {
      const h = n == null ? void 0 : n.vnode.el;
      if (t.vertical)
        return 0;
      const c = t.color.get("hue");
      return h ? Math.round(c * (h.offsetWidth - a.value.offsetWidth / 2) / 360) : 0;
    }, p = () => {
      const h = n == null ? void 0 : n.vnode.el;
      if (!t.vertical)
        return 0;
      const c = t.color.get("hue");
      return h ? Math.round(c * (h.offsetHeight - a.value.offsetHeight / 2) / 360) : 0;
    }, g = () => {
      i.value = d(), l.value = p();
    };
    return de(() => {
      const h = {
        drag: (c) => {
          f(c);
        },
        end: (c) => {
          f(c);
        }
      };
      Q(o.value, h), Q(a.value, h), g();
    }), r({
      update: g
    }), (h, c) => (A(), V("div", {
      class: he(["ant-color-hue-slider", { "is-vertical": e.vertical }])
    }, [
      O("div", {
        ref_key: "bar",
        ref: o,
        class: "ant-color-hue-slider__bar",
        onClick: u
      }, null, 512),
      O("div", {
        ref_key: "thumb",
        ref: a,
        class: "ant-color-hue-slider__thumb",
        style: H({
          left: i.value + "px",
          top: l.value + "px"
        })
      }, null, 4)
    ], 2));
  }
});
const ee = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of r)
    t[n] = a;
  return t;
}, on = /* @__PURE__ */ ee(an, [["__scopeId", "data-v-929f97ff"]]), Fe = (e) => (yt("data-v-4219b265"), e = e(), _t(), e), ln = /* @__PURE__ */ Fe(() => /* @__PURE__ */ O("div", { class: "ant-color-svpanel__white" }, null, -1)), sn = /* @__PURE__ */ Fe(() => /* @__PURE__ */ O("div", { class: "ant-color-svpanel__black" }, null, -1)), cn = /* @__PURE__ */ Fe(() => /* @__PURE__ */ O("div", null, null, -1)), un = [
  cn
], fn = /* @__PURE__ */ K({
  __name: "svPanel",
  props: {
    color: {
      type: Object
    }
  },
  setup(e, { expose: r }) {
    const t = e, n = je(), a = w(0), o = w(0), i = w("hsl(0, 100%, 50%)"), l = R(() => {
      var p, g;
      const f = (p = t.color) == null ? void 0 : p.get("hue"), d = (g = t.color) == null ? void 0 : g.get("value");
      return { hue: f, value: d };
    });
    P(
      () => l.value,
      () => {
        s();
      }
    );
    const s = () => {
      var g, h, c;
      const f = (g = t.color) == null ? void 0 : g.get("saturation"), d = (h = t.color) == null ? void 0 : h.get("value"), p = n == null ? void 0 : n.vnode.el;
      o.value = f * p.clientWidth / 100, a.value = (100 - d) * p.clientHeight / 100, i.value = `hsl(${(c = t.color) == null ? void 0 : c.get("hue")}, 100%, 50%)`;
    }, u = (f) => {
      var c;
      const p = (n == null ? void 0 : n.vnode.el).getBoundingClientRect();
      let g = f.clientX - p.left, h = f.clientY - p.top;
      g = Math.max(0, g), g = Math.min(g, p.width), h = Math.max(0, h), h = Math.min(h, p.height), o.value = g, a.value = h, (c = t.color) == null || c.set({
        saturation: g / p.width * 100,
        value: 100 - h / p.height * 100
      });
    };
    return de(() => {
      const f = n == null ? void 0 : n.vnode.el;
      Q(f, {
        drag: (d) => {
          u(d);
        },
        end: (d) => {
          u(d);
        }
      });
    }), r({
      update: s
    }), (f, d) => (A(), V("div", {
      class: "ant-color-svpanel",
      style: H({
        backgroundColor: i.value
      })
    }, [
      ln,
      sn,
      O("div", {
        class: "ant-color-svpanel__cursor",
        style: H({
          top: a.value + "px",
          left: o.value + "px"
        })
      }, un, 4)
    ], 4));
  }
});
const dn = /* @__PURE__ */ ee(fn, [["__scopeId", "data-v-4219b265"]]), hn = /* @__PURE__ */ K({
  __name: "alphaSlider",
  props: {
    color: {
      type: Object
    },
    vertical: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: r }) {
    const t = e, n = je(), a = De(null), o = De(null), i = w(0), l = w(0), s = w(null);
    P(
      () => {
        var c;
        return (c = t.color) == null ? void 0 : c.get("alpha");
      },
      () => {
        d();
      }
    ), P(
      () => {
        var c;
        return (c = t.color) == null ? void 0 : c.value;
      },
      () => {
        d();
      }
    );
    const u = (c) => {
      c.target !== o.value && f(c);
    }, f = (c) => {
      var b, E;
      const v = (n == null ? void 0 : n.vnode.el).getBoundingClientRect();
      if (t.vertical) {
        let C = c.clientY - v.top;
        C = Math.max(o.value.offsetHeight / 2, C), C = Math.min(C, v.height - o.value.offsetHeight / 2), (E = t.color) == null || E.set(
          "alpha",
          Math.round(
            (C - o.value.offsetHeight / 2) / (v.height - o.value.offsetHeight) * 100
          )
        );
      } else {
        let C = c.clientX - v.left;
        C = Math.max(o.value.offsetWidth / 2, C), C = Math.min(C, v.width - o.value.offsetWidth / 2), (b = t.color) == null || b.set(
          "alpha",
          Math.round(
            (C - o.value.offsetWidth / 2) / (v.width - o.value.offsetWidth) * 100
          )
        );
      }
    }, d = () => {
      i.value = p(), l.value = g(), s.value = h();
    }, p = () => {
      var v;
      if (t.vertical)
        return 0;
      const c = n == null ? void 0 : n.vnode.el, m = (v = t.color) == null ? void 0 : v.get("alpha");
      return c ? Math.round(m * (c.offsetWidth - o.value.offsetWidth / 2) / 100) : 0;
    }, g = () => {
      var v;
      const c = n == null ? void 0 : n.vnode.el;
      if (!t.vertical)
        return 0;
      const m = (v = t.color) == null ? void 0 : v.get("alpha");
      return c ? Math.round(m * (c.offsetHeight - o.value.offsetHeight / 2) / 100) : 0;
    }, h = () => {
      if (t.color && t.color.value) {
        const { r: c, g: m, b: v } = t.color.toRgb();
        return `linear-gradient(to right, rgba(${c}, ${m}, ${v}, 0) 0%, rgba(${c}, ${m}, ${v}, 1) 100%)`;
      }
      return null;
    };
    return de(() => {
      const c = {
        drag: (m) => {
          f(m);
        },
        end: (m) => {
          f(m);
        }
      };
      Q(a.value, c), Q(o.value, c), d();
    }), r({
      update: d
    }), (c, m) => (A(), V("div", {
      class: he(["ant-color-alpha-slider", { "is-vertical": e.vertical }])
    }, [
      O("div", {
        ref_key: "bar",
        ref: a,
        class: "ant-color-alpha-slider__bar",
        style: H({
          background: s.value
        }),
        onClick: u
      }, null, 4),
      O("div", {
        ref_key: "thumb",
        ref: o,
        class: "ant-color-alpha__thumb",
        style: H({ left: i.value + "px", top: l.value + "px" })
      }, null, 4)
    ], 2));
  }
});
const gn = /* @__PURE__ */ ee(hn, [["__scopeId", "data-v-fd08959f"]]);
/**
* @vue/shared v3.4.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const pn = Object.prototype.hasOwnProperty, ot = (e, r) => pn.call(e, r), lt = function(e, r, t) {
  return [e, r * t / ((e = (2 - r) * t) < 1 ? e : 2 - e) || 0, e / 2];
}, mn = function(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}, vn = function(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}, W = function(e, r) {
  mn(e) && (e = "100%");
  const t = vn(e);
  return e = Math.min(r, Math.max(0, parseFloat(`${e}`))), t && (e = parseInt(`${e * r}`, 10) / 100), Math.abs(e - r) < 1e-6 ? 1 : e % r / parseFloat(r);
}, it = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" }, ue = function(e) {
  e = Math.min(Math.round(e), 255);
  const r = Math.floor(e / 16), t = e % 16;
  return `${it[r] || r}${it[t] || t}`;
}, st = function({ r: e, g: r, b: t }) {
  return isNaN(e) || isNaN(r) || isNaN(t) ? "" : `#${ue(e)}${ue(r)}${ue(t)}`;
}, ke = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 }, B = function(e) {
  return e.length === 2 ? (ke[e[0].toUpperCase()] || +e[0]) * 16 + (ke[e[1].toUpperCase()] || +e[1]) : ke[e[1].toUpperCase()] || +e[1];
}, bn = function(e, r, t) {
  r = r / 100, t = t / 100;
  let n = r;
  const a = Math.max(t, 0.01);
  t *= 2, r *= t <= 1 ? t : 2 - t, n *= a <= 1 ? a : 2 - a;
  const o = (t + r) / 2, i = t === 0 ? 2 * n / (a + n) : 2 * r / (t + r);
  return {
    h: e,
    s: i * 100,
    v: o * 100
  };
}, ct = function(e, r, t) {
  e = W(e, 255), r = W(r, 255), t = W(t, 255);
  const n = Math.max(e, r, t), a = Math.min(e, r, t);
  let o;
  const i = n, l = n - a, s = n === 0 ? 0 : l / n;
  if (n === a)
    o = 0;
  else {
    switch (n) {
      case e: {
        o = (r - t) / l + (r < t ? 6 : 0);
        break;
      }
      case r: {
        o = (t - e) / l + 2;
        break;
      }
      case t: {
        o = (e - r) / l + 4;
        break;
      }
    }
    o /= 6;
  }
  return { h: o * 360, s: s * 100, v: i * 100 };
}, Y = function(e, r, t) {
  e = W(e, 360) * 6, r = W(r, 100), t = W(t, 100);
  const n = Math.floor(e), a = e - n, o = t * (1 - r), i = t * (1 - a * r), l = t * (1 - (1 - a) * r), s = n % 6, u = [t, i, o, o, l, t][s], f = [l, t, t, i, o, o][s], d = [o, o, l, t, t, i][s];
  return {
    r: Math.round(u * 255),
    g: Math.round(f * 255),
    b: Math.round(d * 255)
  };
};
class J {
  constructor(r) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "", r = r || {};
    for (const t in r)
      ot(r, t) && (this[t] = r[t]);
    this.doOnChange();
  }
  set(r, t) {
    if (arguments.length === 1 && typeof r == "object") {
      for (const n in r)
        ot(r, n) && this.set(n, r[n]);
      return;
    }
    this[`_${r}`] = t, this.doOnChange();
  }
  get(r) {
    return r === "alpha" ? Math.floor(this[`_${r}`]) : this[`_${r}`];
  }
  toRgb() {
    return Y(this._hue, this._saturation, this._value);
  }
  fromString(r) {
    if (!r) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const t = (n, a, o) => {
      this._hue = Math.max(0, Math.min(360, n)), this._saturation = Math.max(0, Math.min(100, a)), this._value = Math.max(0, Math.min(100, o)), this.doOnChange();
    };
    if (r.indexOf("hsl") !== -1) {
      const n = r.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((a) => a !== "").map((a, o) => o > 2 ? parseFloat(a) : parseInt(a, 10));
      if (n.length === 4 ? this._alpha = parseFloat(n[3]) * 100 : n.length === 3 && (this._alpha = 100), n.length >= 3) {
        const { h: a, s: o, v: i } = bn(n[0], n[1], n[2]);
        t(a, o, i);
      }
    } else if (r.indexOf("hsv") !== -1) {
      const n = r.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((a) => a !== "").map((a, o) => o > 2 ? parseFloat(a) : parseInt(a, 10));
      n.length === 4 ? this._alpha = parseFloat(n[3]) * 100 : n.length === 3 && (this._alpha = 100), n.length >= 3 && t(n[0], n[1], n[2]);
    } else if (r.indexOf("rgb") !== -1) {
      const n = r.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((a) => a !== "").map((a, o) => o > 2 ? parseFloat(a) : parseInt(a, 10));
      if (n.length === 4 ? this._alpha = parseFloat(n[3]) * 100 : n.length === 3 && (this._alpha = 100), n.length >= 3) {
        const { h: a, s: o, v: i } = ct(n[0], n[1], n[2]);
        t(a, o, i);
      }
    } else if (r.indexOf("#") !== -1) {
      const n = r.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(n))
        return;
      let a, o, i;
      n.length === 3 ? (a = B(n[0] + n[0]), o = B(n[1] + n[1]), i = B(n[2] + n[2])) : (n.length === 6 || n.length === 8) && (a = B(n.substring(0, 2)), o = B(n.substring(2, 4)), i = B(n.substring(4, 6))), n.length === 8 ? this._alpha = B(n.substring(6)) / 255 * 100 : (n.length === 3 || n.length === 6) && (this._alpha = 100);
      const { h: l, s, v: u } = ct(a, o, i);
      t(l, s, u);
    }
  }
  compare(r) {
    return Math.abs(r._hue - this._hue) < 2 && Math.abs(r._saturation - this._saturation) < 1 && Math.abs(r._value - this._value) < 1 && Math.abs(r._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: r, _saturation: t, _value: n, _alpha: a, format: o } = this;
    if (this.enableAlpha)
      switch (o) {
        case "hsl": {
          const i = lt(r, t / 100, n / 100);
          this.value = `hsla(${r}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${r}, ${Math.round(t)}%, ${Math.round(n)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${st(Y(r, t, n))}${ue(a * 255 / 100)}`;
          break;
        }
        default: {
          const { r: i, g: l, b: s } = Y(r, t, n);
          this.value = `rgba(${i}, ${l}, ${s}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (o) {
        case "hsl": {
          const i = lt(r, t / 100, n / 100);
          this.value = `hsl(${r}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${r}, ${Math.round(t)}%, ${Math.round(n)}%)`;
          break;
        }
        case "rgb": {
          const { r: i, g: l, b: s } = Y(r, t, n);
          this.value = `rgb(${i}, ${l}, ${s})`;
          break;
        }
        default:
          this.value = st(Y(r, t, n));
      }
  }
}
const bt = Symbol(), yn = () => Ct(bt), _n = { class: "ant-color-predefine" }, Cn = { class: "ant-color-predefine__colors" }, wn = ["onClick"], On = /* @__PURE__ */ K({
  __name: "preDefine",
  props: {
    colors: {
      type: Array,
      required: !0
    },
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    var i;
    const r = e, t = (i = yn()) == null ? void 0 : i.currentColor;
    P(
      () => t.value,
      (l) => {
        const s = new J();
        s.fromString(l), o.value.forEach((u) => {
          u.selected = s.compare(u);
        });
      }
    );
    const n = (l) => {
      r.color.fromString(r.colors[l]);
    }, a = (l, s) => l.map((u) => {
      const f = new J();
      return f.enableAlpha = !0, f.format = "rgba", f.fromString(u), f.selected = f.value === s.value, f;
    }), o = w(a(r.colors, r.color));
    return wt(() => {
      o.value = a(r.colors, r.color);
    }), (l, s) => (A(), V("div", _n, [
      O("div", Cn, [
        (A(!0), V(Ot, null, St(o.value, (u, f) => (A(), V("div", {
          key: e.colors[f],
          class: he([{ selected: u.selected, "is-alpha": u._alpha < 100 }, "ant-color-predefine__color-selector"]),
          onClick: (d) => n(f)
        }, [
          O("div", {
            style: H({ backgroundColor: u.value })
          }, null, 4)
        ], 10, wn))), 128))
      ])
    ]));
  }
});
const Sn = /* @__PURE__ */ ee(On, [["__scopeId", "data-v-dfaa701a"]]), xn = (e) => ["", "large", "default", "small", "xsmall"].includes(e), kn = { class: "ant-color-dropdown__main-wrapper" }, $n = { class: "ant-color-dropdown__btns" }, Tn = { class: "ant-color-dropdown__value" }, Mn = { class: "ant-dropdown__btns" }, An = /* @__PURE__ */ K({
  __name: "main",
  props: {
    modelValue: {
      type: String
    },
    showAlpha: {
      type: Boolean,
      default: !1
    },
    colorFormat: {
      type: String,
      default: ""
    },
    popperClass: {
      type: String
    },
    predefine: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "xsmall",
      validator: xn
    }
  },
  emits: ["active-change", "change", "update:modelValue"],
  setup(e, { emit: r }) {
    const t = e, n = r, a = w(!1), o = w(null), i = w(null), l = w(null), s = xt(
      new J({
        enableAlpha: t.showAlpha,
        format: t.colorFormat
      })
    ), u = w(!1), f = w(!1), d = w(""), p = R(() => !t.modelValue && !f.value ? "transparent" : m(s, t.showAlpha)), g = R(() => t.size), h = R(() => t.disabled), c = R(() => !t.modelValue && !f.value ? "" : s.value);
    P(
      () => t.modelValue,
      (_) => {
        _ ? _ && _ !== s.value && s.fromString(_) : f.value = !1;
      }
    ), P(
      () => c.value,
      (_) => {
        d.value = _, n("active-change", _);
      }
    ), P(
      () => s.value,
      () => {
        !t.modelValue && !f.value && (f.value = !0);
      }
    ), P(
      () => u.value,
      (_) => {
        _ ? a.value = !1 : a.value || E(), se(() => {
          var x, D, I;
          (x = o.value) == null || x.update(), (D = i.value) == null || D.update(), (I = l.value) == null || I.update();
        });
      }
    );
    const m = (_, x) => {
      if (!(_ instanceof J))
        throw Error("color should be instance of _color Class");
      const { r: D, g: I, b: re } = _.toRgb();
      return x ? `rgba(${D}, ${I}, ${re}, ${_.get("alpha") / 100})` : `rgb(${D}, ${I}, ${re})`;
    }, b = nn((_) => {
      u.value = _;
    }, 50), E = () => {
      b(!1), C();
    }, C = () => {
      se(() => {
        t.modelValue ? s.fromString(t.modelValue) : f.value = !1;
      });
    }, U = () => {
      h.value || b(!u.value);
    }, y = () => {
      s.fromString(d.value);
    }, T = () => {
      a.value = !0;
      const _ = s.value;
      n("update:modelValue", _), n("change", _), b(!1), se(() => {
        const x = new J({
          enableAlpha: t.showAlpha,
          format: t.colorFormat
        });
        x.fromString(t.modelValue), s.compare(x) || C();
      }), u.value = !1;
    }, N = () => {
      a.value = !0, b(!1), n("update:modelValue", null), n("change", null), C(), u.value = !1;
    }, te = (_) => _.parentElement;
    return de(() => {
      t.modelValue && (s.fromString(t.modelValue), d.value = c.value);
    }), kt(bt, {
      currentColor: c
    }), (_, x) => {
      const D = pe("a-input"), I = pe("a-button"), re = pe("a-popover");
      return A(), ne(re, $t({
        visible: u.value,
        "onUpdate:visible": x[1] || (x[1] = (ge) => u.value = ge),
        getPopupContainer: te,
        trigger: "click",
        class: ["ant3-color-picker", [g.value ? "ant3-color-picker--" + g.value : ""]]
      }, _.$attrs), {
        content: ae(() => [
          O("div", kn, [
            M(dn, {
              ref_key: "svPanel",
              ref: i,
              color: s
            }, null, 8, ["color"]),
            M(on, {
              ref_key: "hue",
              ref: o,
              class: "hue-slider",
              color: s,
              vertical: ""
            }, null, 8, ["color"])
          ]),
          e.showAlpha ? (A(), ne(gn, {
            key: 0,
            ref_key: "alpha",
            ref: l,
            color: s
          }, null, 8, ["color"])) : me("", !0),
          e.predefine.length ? (A(), ne(Sn, {
            key: 1,
            ref: "predefine",
            color: s,
            colors: e.predefine
          }, null, 8, ["color", "colors"])) : me("", !0),
          O("div", $n, [
            O("span", Tn, [
              M(D, {
                value: d.value,
                "onUpdate:value": x[0] || (x[0] = (ge) => d.value = ge),
                size: "small",
                onPressEnter: y,
                onBlur: y
              }, null, 8, ["value"])
            ]),
            O("div", Mn, [
              M(I, {
                size: "small",
                class: "ant-cancel-button",
                onClick: N
              }, {
                default: ae(() => [
                  Be("取消")
                ]),
                _: 1
              }),
              M(I, {
                type: "primary",
                size: "small",
                onClick: T
              }, {
                default: ae(() => [
                  Be("确定")
                ]),
                _: 1
              })
            ])
          ])
        ]),
        default: ae(() => [
          O("div", {
            class: "ant-color-picker__trigger",
            onClick: U
          }, [
            O("span", {
              class: he(["el-color-picker__color", { "is-alpha": e.showAlpha }])
            }, [
              O("span", {
                class: "el-color-picker__color-inner",
                style: H({
                  backgroundColor: p.value
                })
              }, [
                Tt(M(He($r), { style: { color: "#909399" } }, null, 512), [
                  [Mt, e.modelValue || f.value]
                ]),
                !e.modelValue && !f.value ? (A(), ne(He(Or), {
                  key: 0,
                  style: { color: "#909399" }
                })) : me("", !0)
              ], 4)
            ], 2)
          ])
        ]),
        _: 1
      }, 16, ["visible", "class"]);
    };
  }
});
const Pn = /* @__PURE__ */ ee(An, [["__scopeId", "data-v-a4c67c8a"]]);
export {
  Pn as ColorPicker
};
