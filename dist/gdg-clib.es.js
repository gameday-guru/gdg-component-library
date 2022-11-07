import * as Qr from "react";
import me, { createContext as kr, useContext as et, useLayoutEffect as dA, useEffect as Lt, useState as Wf, useRef as ri, useCallback as hA, useMemo as qf, forwardRef as jt, createElement as Ot, useReducer as pA, Fragment as km, isValidElement as Yr, PureComponent as mt, Children as _n, cloneElement as vt, Component as Hf } from "react";
const Nm = (e) => (e + 300) % 900, vA = {
  "black-100": ["light-gray", 100],
  "black-200": ["light-gray", 100],
  "black-300": ["light-gray", 100],
  "black-400": ["light-gray", 100],
  "black-500": ["light-gray", 100],
  "black-600": ["light-gray", 100],
  "black-700": ["light-gray", 100],
  "black-800": ["light-gray", 100],
  "black-900": ["light-gray", 100],
  "white-100": ["drk-gray", 900],
  "white-200": ["drk-gray", 900],
  "white-300": ["drk-gray", 900],
  "white-400": ["drk-gray", 900],
  "white-500": ["drk-gray", 900],
  "white-600": ["drk-gray", 900],
  "white-700": ["drk-gray", 900],
  "white-800": ["drk-gray", 900],
  "white-900": ["drk-gray", 900],
  "gameday-green-100": ["drk-gray", 500],
  "gameday-green-200": ["drk-gray", 400],
  "gameday-green-300": ["drk-gray", 200],
  "gameday-green-400": ["light-gray", 800],
  "gameday-green-500": ["light-gray", 600],
  "gameday-green-600": ["light-gray", 400],
  "gameday-green-700": ["light-gray", 200],
  "gameday-green-800": ["light-gray", 100],
  "gameday-green-900": ["light-gray", 100],
  "gold-100": ["drk-gray", 800],
  "gold-200": ["drk-gray", 400],
  "gold-300": ["drk-gray", 400],
  "gold-400": ["drk-gray", 400],
  "gold-500": ["drk-gray", 400],
  "gold-600": ["drk-gray", 200],
  "gold-700": ["drk-gray", 200],
  "gold-800": ["drk-gray", 200],
  "gold-900": ["light-gray", 500],
  "salmon-100": ["drk-gray", 400],
  "salmon-200": ["drk-gray", 400],
  "salmon-300": ["drk-gray", 400],
  "salmon-400": ["drk-gray", 400],
  "salmon-500": ["drk-gray", 400],
  "salmon-600": ["drk-gray", 400],
  "salmon-700": ["drk-gray", 400],
  "salmon-800": ["drk-gray", 400],
  "salmon-900": ["drk-gray", 400],
  "sun-100": ["drk-gray", 800],
  "sun-200": ["drk-gray", 400],
  "sun-300": ["drk-gray", 400],
  "sun-400": ["drk-gray", 400],
  "sun-500": ["drk-gray", 400],
  "sun-600": ["drk-gray", 200],
  "sun-700": ["drk-gray", 200],
  "sun-800": ["drk-gray", 200],
  "sun-900": ["light-gray", 500],
  "bright-blue-100": ["drk-gray", 800],
  "bright-blue-200": ["drk-gray", 200],
  "bright-blue-300": ["light-gray", 600],
  "bright-blue-400": ["light-gray", 500],
  "bright-blue-500": ["light-gray", 300],
  "bright-blue-600": ["light-gray", 100],
  "bright-blue-700": ["white", 400],
  "bright-blue-800": ["white", 400],
  "bright-blue-900": ["white", 400],
  "ocean-blue-100": ["white", 800],
  "ocean-blue-200": ["white", 400],
  "ocean-blue-300": ["drk-gray", 400],
  "ocean-blue-400": ["light-gray", 400],
  "ocean-blue-500": ["white", 400],
  "ocean-blue-600": ["drk-gray", 200],
  "ocean-blue-700": ["drk-gray", 200],
  "ocean-blue-800": ["drk-gray", 200],
  "ocean-blue-900": ["light-gray", 500],
  "clay-100": ["drk-gray", 800],
  "clay-200": ["drk-gray", 400],
  "clay-300": ["drk-gray", 400],
  "clay-400": ["drk-gray", 400],
  "clay-500": ["drk-gray", 400],
  "clay-600": ["drk-gray", 200],
  "clay-700": ["drk-gray", 200],
  "clay-800": ["drk-gray", 200],
  "clay-900": ["light-gray", 500],
  "light-gray-100": ["drk-gray", 800],
  "light-gray-200": ["drk-gray", 400],
  "light-gray-300": ["drk-gray", 400],
  "light-gray-400": ["drk-gray", 400],
  "light-gray-500": ["drk-gray", 400],
  "light-gray-600": ["drk-gray", 200],
  "light-gray-700": ["drk-gray", 200],
  "light-gray-800": ["drk-gray", 200],
  "light-gray-900": ["light-gray", 500],
  "mid-gray-100": ["white", 800],
  "mid-gray-200": ["white", 400],
  "mid-gray-300": ["white", 400],
  "mid-gray-400": ["white", 400],
  "mid-gray-500": ["white", 400],
  "mid-gray-600": ["white", 200],
  "mid-gray-700": ["white", 200],
  "mid-gray-800": ["white", 200],
  "mid-gray-900": ["white", 500],
  "drk-gray-100": ["drk-gray", 900],
  "drk-gray-200": ["drk-gray", 900],
  "drk-gray-300": ["white", 400],
  "drk-gray-400": ["white", 400],
  "drk-gray-500": ["white", 400],
  "drk-gray-600": ["white", 200],
  "drk-gray-700": ["white", 200],
  "drk-gray-800": ["white", 200],
  "drk-gray-900": ["white", 500],
  "error-100": ["drk-gray", 800],
  "error-200": ["drk-gray", 400],
  "error-300": ["drk-gray", 400],
  "error-400": ["drk-gray", 400],
  "error-500": ["drk-gray", 400],
  "error-600": ["drk-gray", 200],
  "error-700": ["drk-gray", 200],
  "error-800": ["drk-gray", 200],
  "error-900": ["light-gray", 500],
  "warning-100": ["drk-gray", 800],
  "warning-200": ["drk-gray", 400],
  "warning-300": ["drk-gray", 400],
  "warning-400": ["drk-gray", 400],
  "warning-500": ["drk-gray", 400],
  "warning-600": ["drk-gray", 200],
  "warning-700": ["drk-gray", 200],
  "warning-800": ["drk-gray", 200],
  "warning-900": ["light-gray", 500],
  "success-100": ["drk-gray", 800],
  "success-200": ["drk-gray", 400],
  "success-300": ["drk-gray", 400],
  "success-400": ["drk-gray", 400],
  "success-500": ["drk-gray", 400],
  "success-600": ["drk-gray", 200],
  "success-700": ["drk-gray", 200],
  "success-800": ["drk-gray", 200],
  "success-900": ["light-gray", 500],
  "info-100": ["drk-gray", 800],
  "info-200": ["drk-gray", 400],
  "info-300": ["drk-gray", 400],
  "info-400": ["drk-gray", 400],
  "info-500": ["drk-gray", 400],
  "info-600": ["drk-gray", 200],
  "info-700": ["drk-gray", 200],
  "info-800": ["drk-gray", 200],
  "info-900": ["light-gray", 500],
  "link-100": ["drk-gray", 800],
  "link-200": ["drk-gray", 400],
  "link-300": ["drk-gray", 400],
  "link-400": ["drk-gray", 400],
  "link-500": ["drk-gray", 400],
  "link-600": ["drk-gray", 200],
  "link-700": ["drk-gray", 200],
  "link-800": ["drk-gray", 200],
  "link-900": ["light-gray", 500],
  "gdg-100": ["white", 500],
  "gdg-200": ["white", 500],
  "gdg-300": ["white", 500],
  "gdg-400": ["white", 500],
  "gdg-500": ["white", 500],
  "gdg-600": ["white", 500],
  "gdg-700": ["white", 500],
  "gdg-800": ["white", 500],
  "gdg-900": ["white", 500]
}, Gf = (e) => vA[`${e[0]}-${e[1]}`], ep = {
  do: "bright-blue",
  get: "ocean-blue",
  info: "info",
  getUserInfo: "clay",
  navigate: "gdg",
  find: "gold",
  sort: "drk-gray",
  install: "bright-blue",
  getHelp: "warning",
  comment: "success",
  wrap: "drk-gray",
  wrapInvert: "white",
  backdrop: "black"
}, yi = (e = "do") => ep[e] || ep.do;
var gA = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0
};
function Rm(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, r = (e.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? t = parseFloat(r) : t = parseInt(r, 10);
  var n = (e.match(/[^0-9]*$/) || "").toString();
  return gA[n] ? {
    value: t,
    unit: n
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function tp(e) {
  var t = Rm(e);
  return "".concat(t.value).concat(t.unit);
}
var yA = function(e, t, r) {
  var n = "react-spinners-".concat(e, "-").concat(r);
  if (typeof window > "u" || !window.document)
    return n;
  var i = document.createElement("style");
  document.head.appendChild(i);
  var a = i.sheet, o = `
    @keyframes `.concat(n, ` {
      `).concat(t, `
    }
  `);
  return a && a.insertRule(o, 0), n;
}, Ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mA(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zs = { exports: {} }, Ni = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rp;
function bA() {
  if (rp)
    return Ni;
  rp = 1;
  var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, c) {
    var l, f = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (l in u)
      n.call(u, l) && !a.hasOwnProperty(l) && (f[l] = u[l]);
    if (s && s.defaultProps)
      for (l in u = s.defaultProps, u)
        f[l] === void 0 && (f[l] = u[l]);
    return { $$typeof: t, type: s, key: d, ref: p, props: f, _owner: i.current };
  }
  return Ni.Fragment = r, Ni.jsx = o, Ni.jsxs = o, Ni;
}
var Ri = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var np;
function xA() {
  return np || (np = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function g(P) {
      if (P === null || typeof P != "object")
        return null;
      var G = v && P[v] || P[h];
      return typeof G == "function" ? G : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(P) {
      {
        for (var G = arguments.length, ne = new Array(G > 1 ? G - 1 : 0), pe = 1; pe < G; pe++)
          ne[pe - 1] = arguments[pe];
        x("error", P, ne);
      }
    }
    function x(P, G, ne) {
      {
        var pe = m.ReactDebugCurrentFrame, Ae = pe.getStackAddendum();
        Ae !== "" && (G += "%s", ne = ne.concat([Ae]));
        var $e = ne.map(function(xe) {
          return String(xe);
        });
        $e.unshift("Warning: " + G), Function.prototype.apply.call(console[P], console, $e);
      }
    }
    var b = !1, y = !1, S = !1, A = !1, _ = !1, E;
    E = Symbol.for("react.module.reference");
    function M(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === a || _ || P === i || P === c || P === l || A || P === p || b || y || S || typeof P == "object" && P !== null && (P.$$typeof === d || P.$$typeof === f || P.$$typeof === o || P.$$typeof === s || P.$$typeof === u || P.$$typeof === E || P.getModuleId !== void 0));
    }
    function C(P, G, ne) {
      var pe = P.displayName;
      if (pe)
        return pe;
      var Ae = G.displayName || G.name || "";
      return Ae !== "" ? ne + "(" + Ae + ")" : ne;
    }
    function k(P) {
      return P.displayName || "Context";
    }
    function N(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case s:
            var G = P;
            return k(G) + ".Consumer";
          case o:
            var ne = P;
            return k(ne._context) + ".Provider";
          case u:
            return C(P, P.render, "ForwardRef");
          case f:
            var pe = P.displayName || null;
            return pe !== null ? pe : N(P.type) || "Memo";
          case d: {
            var Ae = P, $e = Ae._payload, xe = Ae._init;
            try {
              return N(xe($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, L = 0, R, Q, K, te, I, V, X;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function $() {
      {
        if (L === 0) {
          R = console.log, Q = console.info, K = console.warn, te = console.error, I = console.group, V = console.groupCollapsed, X = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        L++;
      }
    }
    function W() {
      {
        if (L--, L === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, P, {
              value: R
            }),
            info: j({}, P, {
              value: Q
            }),
            warn: j({}, P, {
              value: K
            }),
            error: j({}, P, {
              value: te
            }),
            group: j({}, P, {
              value: I
            }),
            groupCollapsed: j({}, P, {
              value: V
            }),
            groupEnd: j({}, P, {
              value: X
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = m.ReactCurrentDispatcher, se;
    function J(P, G, ne) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (Ae) {
            var pe = Ae.stack.trim().match(/\n( *(at )?)/);
            se = pe && pe[1] || "";
          }
        return `
` + se + P;
      }
    }
    var D = !1, Y;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new ie();
    }
    function T(P, G) {
      if (!P || D)
        return "";
      {
        var ne = Y.get(P);
        if (ne !== void 0)
          return ne;
      }
      var pe;
      D = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = ee.current, ee.current = null, $();
      try {
        if (G) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch (br) {
              pe = br;
            }
            Reflect.construct(P, [], xe);
          } else {
            try {
              xe.call();
            } catch (br) {
              pe = br;
            }
            P.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (br) {
            pe = br;
          }
          P();
        }
      } catch (br) {
        if (br && pe && typeof br.stack == "string") {
          for (var be = br.stack.split(`
`), bt = pe.stack.split(`
`), Ke = be.length - 1, Ze = bt.length - 1; Ke >= 1 && Ze >= 0 && be[Ke] !== bt[Ze]; )
            Ze--;
          for (; Ke >= 1 && Ze >= 0; Ke--, Ze--)
            if (be[Ke] !== bt[Ze]) {
              if (Ke !== 1 || Ze !== 1)
                do
                  if (Ke--, Ze--, Ze < 0 || be[Ke] !== bt[Ze]) {
                    var Ft = `
` + be[Ke].replace(" at new ", " at ");
                    return P.displayName && Ft.includes("<anonymous>") && (Ft = Ft.replace("<anonymous>", P.displayName)), typeof P == "function" && Y.set(P, Ft), Ft;
                  }
                while (Ke >= 1 && Ze >= 0);
              break;
            }
        }
      } finally {
        D = !1, ee.current = $e, W(), Error.prepareStackTrace = Ae;
      }
      var Ln = P ? P.displayName || P.name : "", Qh = Ln ? J(Ln) : "";
      return typeof P == "function" && Y.set(P, Qh), Qh;
    }
    function he(P, G, ne) {
      return T(P, !1);
    }
    function q(P) {
      var G = P.prototype;
      return !!(G && G.isReactComponent);
    }
    function ye(P, G, ne) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return T(P, q(P));
      if (typeof P == "string")
        return J(P);
      switch (P) {
        case c:
          return J("Suspense");
        case l:
          return J("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case u:
            return he(P.render);
          case f:
            return ye(P.type, G, ne);
          case d: {
            var pe = P, Ae = pe._payload, $e = pe._init;
            try {
              return ye($e(Ae), G, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, dt = {}, nr = m.ReactDebugCurrentFrame;
    function fn(P) {
      if (P) {
        var G = P._owner, ne = ye(P.type, P._source, G ? G.type : null);
        nr.setExtraStackFrame(ne);
      } else
        nr.setExtraStackFrame(null);
    }
    function dn(P, G, ne, pe, Ae) {
      {
        var $e = Function.call.bind(Se);
        for (var xe in P)
          if ($e(P, xe)) {
            var be = void 0;
            try {
              if (typeof P[xe] != "function") {
                var bt = Error((pe || "React class") + ": " + ne + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bt.name = "Invariant Violation", bt;
              }
              be = P[xe](G, xe, pe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              be = Ke;
            }
            be && !(be instanceof Error) && (fn(Ae), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", ne, xe, typeof be), fn(null)), be instanceof Error && !(be.message in dt) && (dt[be.message] = !0, fn(Ae), w("Failed %s type: %s", ne, be.message), fn(null));
          }
      }
    }
    var hn = Array.isArray;
    function $r(P) {
      return hn(P);
    }
    function In(P) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, ne = G && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return ne;
      }
    }
    function Ha(P) {
      try {
        return Ga(P), !1;
      } catch {
        return !0;
      }
    }
    function Ga(P) {
      return "" + P;
    }
    function Mi(P) {
      if (Ha(P))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(P)), Ga(P);
    }
    var ki = m.ReactCurrentOwner, XS = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qh, Hh, qu;
    qu = {};
    function ZS(P) {
      if (Se.call(P, "ref")) {
        var G = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function JS(P) {
      if (Se.call(P, "key")) {
        var G = Object.getOwnPropertyDescriptor(P, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function QS(P, G) {
      if (typeof P.ref == "string" && ki.current && G && ki.current.stateNode !== G) {
        var ne = N(ki.current.type);
        qu[ne] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(ki.current.type), P.ref), qu[ne] = !0);
      }
    }
    function eA(P, G) {
      {
        var ne = function() {
          qh || (qh = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ne.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function tA(P, G) {
      {
        var ne = function() {
          Hh || (Hh = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ne.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var rA = function(P, G, ne, pe, Ae, $e, xe) {
      var be = {
        $$typeof: t,
        type: P,
        key: G,
        ref: ne,
        props: xe,
        _owner: $e
      };
      return be._store = {}, Object.defineProperty(be._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(be, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(be, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ae
      }), Object.freeze && (Object.freeze(be.props), Object.freeze(be)), be;
    };
    function nA(P, G, ne, pe, Ae) {
      {
        var $e, xe = {}, be = null, bt = null;
        ne !== void 0 && (Mi(ne), be = "" + ne), JS(G) && (Mi(G.key), be = "" + G.key), ZS(G) && (bt = G.ref, QS(G, Ae));
        for ($e in G)
          Se.call(G, $e) && !XS.hasOwnProperty($e) && (xe[$e] = G[$e]);
        if (P && P.defaultProps) {
          var Ke = P.defaultProps;
          for ($e in Ke)
            xe[$e] === void 0 && (xe[$e] = Ke[$e]);
        }
        if (be || bt) {
          var Ze = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          be && eA(xe, Ze), bt && tA(xe, Ze);
        }
        return rA(P, be, bt, Ae, pe, ki.current, xe);
      }
    }
    var Hu = m.ReactCurrentOwner, Gh = m.ReactDebugCurrentFrame;
    function $n(P) {
      if (P) {
        var G = P._owner, ne = ye(P.type, P._source, G ? G.type : null);
        Gh.setExtraStackFrame(ne);
      } else
        Gh.setExtraStackFrame(null);
    }
    var Gu;
    Gu = !1;
    function Yu(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function Yh() {
      {
        if (Hu.current) {
          var P = N(Hu.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function iA(P) {
      {
        if (P !== void 0) {
          var G = P.fileName.replace(/^.*[\\\/]/, ""), ne = P.lineNumber;
          return `

Check your code at ` + G + ":" + ne + ".";
        }
        return "";
      }
    }
    var Kh = {};
    function aA(P) {
      {
        var G = Yh();
        if (!G) {
          var ne = typeof P == "string" ? P : P.displayName || P.name;
          ne && (G = `

Check the top-level render call using <` + ne + ">.");
        }
        return G;
      }
    }
    function Xh(P, G) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var ne = aA(G);
        if (Kh[ne])
          return;
        Kh[ne] = !0;
        var pe = "";
        P && P._owner && P._owner !== Hu.current && (pe = " It was passed a child from " + N(P._owner.type) + "."), $n(P), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, pe), $n(null);
      }
    }
    function Zh(P, G) {
      {
        if (typeof P != "object")
          return;
        if ($r(P))
          for (var ne = 0; ne < P.length; ne++) {
            var pe = P[ne];
            Yu(pe) && Xh(pe, G);
          }
        else if (Yu(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Ae = g(P);
          if (typeof Ae == "function" && Ae !== P.entries)
            for (var $e = Ae.call(P), xe; !(xe = $e.next()).done; )
              Yu(xe.value) && Xh(xe.value, G);
        }
      }
    }
    function oA(P) {
      {
        var G = P.type;
        if (G == null || typeof G == "string")
          return;
        var ne;
        if (typeof G == "function")
          ne = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === u || G.$$typeof === f))
          ne = G.propTypes;
        else
          return;
        if (ne) {
          var pe = N(G);
          dn(ne, P.props, "prop", pe, P);
        } else if (G.PropTypes !== void 0 && !Gu) {
          Gu = !0;
          var Ae = N(G);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sA(P) {
      {
        for (var G = Object.keys(P.props), ne = 0; ne < G.length; ne++) {
          var pe = G[ne];
          if (pe !== "children" && pe !== "key") {
            $n(P), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), $n(null);
            break;
          }
        }
        P.ref !== null && ($n(P), w("Invalid attribute `ref` supplied to `React.Fragment`."), $n(null));
      }
    }
    function Jh(P, G, ne, pe, Ae, $e) {
      {
        var xe = M(P);
        if (!xe) {
          var be = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = iA(Ae);
          bt ? be += bt : be += Yh();
          var Ke;
          P === null ? Ke = "null" : $r(P) ? Ke = "array" : P !== void 0 && P.$$typeof === t ? (Ke = "<" + (N(P.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof P, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, be);
        }
        var Ze = nA(P, G, ne, Ae, $e);
        if (Ze == null)
          return Ze;
        if (xe) {
          var Ft = G.children;
          if (Ft !== void 0)
            if (pe)
              if ($r(Ft)) {
                for (var Ln = 0; Ln < Ft.length; Ln++)
                  Zh(Ft[Ln], P);
                Object.freeze && Object.freeze(Ft);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Zh(Ft, P);
        }
        return P === n ? sA(Ze) : oA(Ze), Ze;
      }
    }
    function uA(P, G, ne) {
      return Jh(P, G, ne, !0);
    }
    function cA(P, G, ne) {
      return Jh(P, G, ne, !1);
    }
    var lA = cA, fA = uA;
    Ri.Fragment = n, Ri.jsx = lA, Ri.jsxs = fA;
  }()), Ri;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = bA() : e.exports = xA();
})(Zs);
const wA = Zs.exports.Fragment, O = Zs.exports.jsx, z = Zs.exports.jsxs;
var Vr = globalThis && globalThis.__assign || function() {
  return Vr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, SA = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, ip = yA("MoonLoader", "100% {transform: rotate(360deg)}", "moon");
function AA(e) {
  var t = e.loading, r = t === void 0 ? !0 : t, n = e.color, i = n === void 0 ? "#000000" : n, a = e.speedMultiplier, o = a === void 0 ? 1 : a, s = e.cssOverride, u = s === void 0 ? {} : s, c = e.size, l = c === void 0 ? 60 : c, f = SA(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = Rm(l), p = d.value, v = d.unit, h = p / 7, g = Vr({
    display: "inherit",
    position: "relative",
    width: "".concat("".concat(p + h * 2).concat(v)),
    height: "".concat("".concat(p + h * 2).concat(v)),
    animation: "".concat(ip, " ").concat(0.6 / o, "s 0s infinite linear"),
    animationFillMode: "forwards"
  }, u), m = function(b) {
    return {
      width: tp(b),
      height: tp(b),
      borderRadius: "100%"
    };
  }, w = Vr(Vr({}, m(h)), {
    backgroundColor: "".concat(i),
    opacity: "0.8",
    position: "absolute",
    top: "".concat("".concat(p / 2 - h / 2).concat(v)),
    animation: "".concat(ip, " ").concat(0.6 / o, "s 0s infinite linear"),
    animationFillMode: "forwards"
  }), x = Vr(Vr({}, m(p)), {
    border: "".concat(h, "px solid ").concat(i),
    opacity: "0.1",
    boxSizing: "content-box",
    position: "absolute"
  });
  return r ? /* @__PURE__ */ z("span", {
    ...Vr({
      style: g
    }, f),
    children: [/* @__PURE__ */ O("span", {
      style: w
    }), /* @__PURE__ */ O("span", {
      style: x
    })]
  }) : null;
}
var Kc = function(e, t) {
  return Kc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Kc(e, t);
};
function Im(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Kc(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Z = function() {
  return Z = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, Z.apply(this, arguments);
};
function Ht(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function it(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return a;
}
function ur(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, a; n < i; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ap = "production", $m = typeof process > "u" || process.env === void 0 ? ap : process.env.NODE_ENV || ap, xr = function(e) {
  return {
    isEnabled: function(t) {
      return e.some(function(r) {
        return !!t[r];
      });
    }
  };
}, oa = {
  measureLayout: xr(["layout", "layoutId", "drag"]),
  animation: xr([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: xr(["exit"]),
  drag: xr(["drag", "dragControls"]),
  focus: xr(["whileFocus"]),
  hover: xr(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: xr(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: xr([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: xr([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function _A(e) {
  for (var t in e)
    e[t] !== null && (t === "projectionNodeConstructor" ? oa.projectionNodeConstructor = e[t] : oa[t].Component = e[t]);
}
var Ea = function() {
}, Wt = function() {
};
process.env.NODE_ENV !== "production" && (Ea = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, Wt = function(e, t) {
  if (!e)
    throw new Error(t);
});
var Lm = kr({ strict: !1 }), jm = Object.keys(oa), OA = jm.length;
function EA(e, t, r) {
  var n = [], i = et(Lm);
  if (!t)
    return null;
  $m !== "production" && r && i.strict && Wt(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var a = 0; a < OA; a++) {
    var o = jm[a], s = oa[o], u = s.isEnabled, c = s.Component;
    u(e) && c && n.push(/* @__PURE__ */ O(c, {
      ...Z({
        key: o
      }, e, {
        visualElement: t
      })
    }));
  }
  return n;
}
var Yf = kr({
  transformPagePoint: function(e) {
    return e;
  },
  isStatic: !1,
  reducedMotion: "never"
}), Js = kr({});
function TA() {
  return et(Js).visualElement;
}
var Qs = kr(null), mi = typeof document < "u", op = mi ? dA : Lt, Xc = { current: null }, Dm = !1;
function PA() {
  if (Dm = !0, !!mi)
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return Xc.current = e.matches;
      };
      e.addListener(t), t();
    } else
      Xc.current = !1;
}
function CA() {
  !Dm && PA();
  var e = it(Wf(Xc.current), 1), t = e[0];
  return t;
}
function MA() {
  var e = CA(), t = et(Yf).reducedMotion;
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function kA(e, t, r, n) {
  var i = et(Lm), a = TA(), o = et(Qs), s = MA(), u = ri(void 0);
  n || (n = i.renderer), !u.current && n && (u.current = n(e, {
    visualState: t,
    parent: a,
    props: r,
    presenceId: o == null ? void 0 : o.id,
    blockInitialAnimation: (o == null ? void 0 : o.initial) === !1,
    shouldReduceMotion: s
  }));
  var c = u.current;
  return op(function() {
    c == null || c.syncRender();
  }), Lt(function() {
    var l;
    (l = c == null ? void 0 : c.animationState) === null || l === void 0 || l.animateChanges();
  }), op(function() {
    return function() {
      return c == null ? void 0 : c.notifyUnmount();
    };
  }, []), c;
}
function qn(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function NA(e, t, r) {
  return hA(
    function(n) {
      var i;
      n && ((i = e.mount) === null || i === void 0 || i.call(e, n)), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : qn(r) && (r.current = n));
    },
    [t]
  );
}
function Fm(e) {
  return Array.isArray(e);
}
function Zt(e) {
  return typeof e == "string" || Fm(e);
}
function RA(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.get();
  }), t;
}
function IA(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.getVelocity();
  }), t;
}
function Vm(e, t, r, n, i) {
  var a;
  return n === void 0 && (n = {}), i === void 0 && (i = {}), typeof t == "function" && (t = t(r != null ? r : e.custom, n, i)), typeof t == "string" && (t = (a = e.variants) === null || a === void 0 ? void 0 : a[t]), typeof t == "function" && (t = t(r != null ? r : e.custom, n, i)), t;
}
function eu(e, t, r) {
  var n = e.getProps();
  return Vm(n, t, r != null ? r : n.custom, RA(e), IA(e));
}
function tu(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || Zt(e.initial) || Zt(e.animate) || Zt(e.whileHover) || Zt(e.whileDrag) || Zt(e.whileTap) || Zt(e.whileFocus) || Zt(e.exit);
}
function Bm(e) {
  return Boolean(tu(e) || e.variants);
}
function $A(e, t) {
  if (tu(e)) {
    var r = e.initial, n = e.animate;
    return {
      initial: r === !1 || Zt(r) ? r : void 0,
      animate: Zt(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function LA(e) {
  var t = $A(e, et(Js)), r = t.initial, n = t.animate;
  return qf(function() {
    return { initial: r, animate: n };
  }, [sp(r), sp(n)]);
}
function sp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function ru(e) {
  var t = ri(null);
  return t.current === null && (t.current = e()), t.current;
}
var Ki = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
}, jA = 1;
function DA() {
  return ru(function() {
    if (Ki.hasEverUpdated)
      return jA++;
  });
}
var Um = kr({}), zm = kr({});
function FA(e, t, r, n) {
  var i, a = t.layoutId, o = t.layout, s = t.drag, u = t.dragConstraints, c = t.layoutScroll, l = et(zm);
  !n || !r || (r == null ? void 0 : r.projection) || (r.projection = new n(e, r.getLatestValues(), (i = r.parent) === null || i === void 0 ? void 0 : i.projection), r.projection.setOptions({
    layoutId: a,
    layout: o,
    alwaysMeasureLayout: Boolean(s) || u && qn(u),
    visualElement: r,
    scheduleRender: function() {
      return r.scheduleRender();
    },
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: l,
    layoutScroll: c
  }));
}
var VA = function(e) {
  Im(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.getSnapshotBeforeUpdate = function() {
    return this.updateProps(), null;
  }, t.prototype.componentDidUpdate = function() {
  }, t.prototype.updateProps = function() {
    var r = this.props, n = r.visualElement, i = r.props;
    n && n.setProps(i);
  }, t.prototype.render = function() {
    return this.props.children;
  }, t;
}(me.Component);
function BA(e) {
  var t = e.preloadedFeatures, r = e.createVisualElement, n = e.projectionNodeConstructor, i = e.useRender, a = e.useVisualState, o = e.Component;
  t && _A(t);
  function s(u, c) {
    var l = UA(u);
    u = Z(Z({}, u), {
      layoutId: l
    });
    var f = et(Yf), d = null, p = LA(u), v = f.isStatic ? void 0 : DA(), h = a(u, f.isStatic);
    return !f.isStatic && mi && (p.visualElement = kA(o, h, Z(Z({}, f), u), r), FA(v, u, p.visualElement, n || oa.projectionNodeConstructor), d = EA(u, p.visualElement, t)), /* @__PURE__ */ z(VA, {
      visualElement: p.visualElement,
      props: Z(Z({}, f), u),
      children: [d, /* @__PURE__ */ O(Js.Provider, {
        value: p,
        children: i(o, u, v, NA(h, p.visualElement, c), h, f.isStatic, p.visualElement)
      })]
    });
  }
  return jt(s);
}
function UA(e) {
  var t, r = e.layoutId, n = (t = et(Um)) === null || t === void 0 ? void 0 : t.id;
  return n && r !== void 0 ? n + "-" + r : r;
}
function zA(e) {
  function t(n, i) {
    return i === void 0 && (i = {}), BA(e(n, i));
  }
  if (typeof Proxy > "u")
    return t;
  var r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    get: function(n, i) {
      return r.has(i) || r.set(i, t(i)), r.get(i);
    }
  });
}
var WA = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];
function Kf(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(WA.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var qo = {};
function qA(e) {
  Object.assign(qo, e);
}
var Zc = ["", "X", "Y", "Z"], HA = ["translate", "scale", "rotate", "skew"], sa = ["transformPerspective", "x", "y", "z"];
HA.forEach(function(e) {
  return Zc.forEach(function(t) {
    return sa.push(e + t);
  });
});
function GA(e, t) {
  return sa.indexOf(e) - sa.indexOf(t);
}
var YA = new Set(sa);
function Ta(e) {
  return YA.has(e);
}
var KA = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function Wm(e) {
  return KA.has(e);
}
function qm(e, t) {
  var r = t.layout, n = t.layoutId;
  return Ta(e) || Wm(e) || (r || n !== void 0) && (!!qo[e] || e === "opacity");
}
var Pr = function(e) {
  return Boolean(e !== null && typeof e == "object" && e.getVelocity);
}, XA = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function ZA(e, t, r, n) {
  var i = e.transform, a = e.transformKeys, o = t.enableHardwareAcceleration, s = o === void 0 ? !0 : o, u = t.allowTransformNone, c = u === void 0 ? !0 : u, l = "";
  a.sort(GA);
  for (var f = !1, d = a.length, p = 0; p < d; p++) {
    var v = a[p];
    l += "".concat(XA[v] || v, "(").concat(i[v], ") "), v === "z" && (f = !0);
  }
  return !f && s ? l += "translateZ(0)" : l = l.trim(), n ? l = n(i, r ? "" : l) : c && r && (l = "none"), l;
}
function JA(e) {
  var t = e.originX, r = t === void 0 ? "50%" : t, n = e.originY, i = n === void 0 ? "50%" : n, a = e.originZ, o = a === void 0 ? 0 : a;
  return "".concat(r, " ").concat(i, " ").concat(o);
}
function Hm(e) {
  return e.startsWith("--");
}
var QA = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
const Gm = (e, t) => (r) => Math.max(Math.min(r, t), e), Xi = (e) => e % 1 ? Number(e.toFixed(5)) : e, ua = /(-)?([\d]*\.?[\d])+/g, Jc = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, e_ = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function Pa(e) {
  return typeof e == "string";
}
const Mn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Zi = Object.assign(Object.assign({}, Mn), { transform: Gm(0, 1) }), Ka = Object.assign(Object.assign({}, Mn), { default: 1 }), Ca = (e) => ({
  test: (t) => Pa(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Lr = Ca("deg"), cr = Ca("%"), fe = Ca("px"), t_ = Ca("vh"), r_ = Ca("vw"), up = Object.assign(Object.assign({}, cr), { parse: (e) => cr.parse(e) / 100, transform: (e) => cr.transform(e * 100) }), Xf = (e, t) => (r) => Boolean(Pa(r) && e_.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Ym = (e, t, r) => (n) => {
  if (!Pa(n))
    return n;
  const [i, a, o, s] = n.match(ua);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(a),
    [r]: parseFloat(o),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, An = {
  test: Xf("hsl", "hue"),
  parse: Ym("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + cr.transform(Xi(t)) + ", " + cr.transform(Xi(r)) + ", " + Xi(Zi.transform(n)) + ")"
}, n_ = Gm(0, 255), Ku = Object.assign(Object.assign({}, Mn), { transform: (e) => Math.round(n_(e)) }), Wr = {
  test: Xf("rgb", "red"),
  parse: Ym("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Ku.transform(e) + ", " + Ku.transform(t) + ", " + Ku.transform(r) + ", " + Xi(Zi.transform(n)) + ")"
};
function i_(e) {
  let t = "", r = "", n = "", i = "";
  return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), i = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), i = e.substr(4, 1), t += t, r += r, n += n, i += i), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Qc = {
  test: Xf("#"),
  parse: i_,
  transform: Wr.transform
}, xt = {
  test: (e) => Wr.test(e) || Qc.test(e) || An.test(e),
  parse: (e) => Wr.test(e) ? Wr.parse(e) : An.test(e) ? An.parse(e) : Qc.parse(e),
  transform: (e) => Pa(e) ? e : e.hasOwnProperty("red") ? Wr.transform(e) : An.transform(e)
}, Km = "${c}", Xm = "${n}";
function a_(e) {
  var t, r, n, i;
  return isNaN(e) && Pa(e) && ((r = (t = e.match(ua)) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0) + ((i = (n = e.match(Jc)) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0) > 0;
}
function Zm(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let r = 0;
  const n = e.match(Jc);
  n && (r = n.length, e = e.replace(Jc, Km), t.push(...n.map(xt.parse)));
  const i = e.match(ua);
  return i && (e = e.replace(ua, Xm), t.push(...i.map(Mn.parse))), { values: t, numColors: r, tokenised: e };
}
function Jm(e) {
  return Zm(e).values;
}
function Qm(e) {
  const { values: t, numColors: r, tokenised: n } = Zm(e), i = t.length;
  return (a) => {
    let o = n;
    for (let s = 0; s < i; s++)
      o = o.replace(s < r ? Km : Xm, s < r ? xt.transform(a[s]) : Xi(a[s]));
    return o;
  };
}
const o_ = (e) => typeof e == "number" ? 0 : e;
function s_(e) {
  const t = Jm(e);
  return Qm(e)(t.map(o_));
}
const Cr = { test: a_, parse: Jm, createTransformer: Qm, getAnimatableNone: s_ }, u_ = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function c_(e) {
  let [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(ua) || [];
  if (!n)
    return e;
  const i = r.replace(n, "");
  let a = u_.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + i + ")";
}
const l_ = /([a-z-]*)\(.*?\)/g, el = Object.assign(Object.assign({}, Cr), { getAnimatableNone: (e) => {
  const t = e.match(l_);
  return t ? t.map(c_).join(" ") : e;
} });
var cp = Z(Z({}, Mn), { transform: Math.round }), e1 = {
  borderWidth: fe,
  borderTopWidth: fe,
  borderRightWidth: fe,
  borderBottomWidth: fe,
  borderLeftWidth: fe,
  borderRadius: fe,
  radius: fe,
  borderTopLeftRadius: fe,
  borderTopRightRadius: fe,
  borderBottomRightRadius: fe,
  borderBottomLeftRadius: fe,
  width: fe,
  maxWidth: fe,
  height: fe,
  maxHeight: fe,
  size: fe,
  top: fe,
  right: fe,
  bottom: fe,
  left: fe,
  padding: fe,
  paddingTop: fe,
  paddingRight: fe,
  paddingBottom: fe,
  paddingLeft: fe,
  margin: fe,
  marginTop: fe,
  marginRight: fe,
  marginBottom: fe,
  marginLeft: fe,
  rotate: Lr,
  rotateX: Lr,
  rotateY: Lr,
  rotateZ: Lr,
  scale: Ka,
  scaleX: Ka,
  scaleY: Ka,
  scaleZ: Ka,
  skew: Lr,
  skewX: Lr,
  skewY: Lr,
  distance: fe,
  translateX: fe,
  translateY: fe,
  translateZ: fe,
  x: fe,
  y: fe,
  z: fe,
  perspective: fe,
  transformPerspective: fe,
  opacity: Zi,
  originX: up,
  originY: up,
  originZ: fe,
  zIndex: cp,
  fillOpacity: Zi,
  strokeOpacity: Zi,
  numOctaves: cp
};
function Zf(e, t, r, n) {
  var i, a = e.style, o = e.vars, s = e.transform, u = e.transformKeys, c = e.transformOrigin;
  u.length = 0;
  var l = !1, f = !1, d = !0;
  for (var p in t) {
    var v = t[p];
    if (Hm(p)) {
      o[p] = v;
      continue;
    }
    var h = e1[p], g = QA(v, h);
    if (Ta(p)) {
      if (l = !0, s[p] = g, u.push(p), !d)
        continue;
      v !== ((i = h.default) !== null && i !== void 0 ? i : 0) && (d = !1);
    } else
      Wm(p) ? (c[p] = g, f = !0) : a[p] = g;
  }
  l ? a.transform = ZA(e, r, d, n) : n ? a.transform = n({}, "") : !t.transform && a.transform && (a.transform = "none"), f && (a.transformOrigin = JA(c));
}
var Jf = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function t1(e, t, r) {
  for (var n in t)
    !Pr(t[n]) && !qm(n, r) && (e[n] = t[n]);
}
function f_(e, t, r) {
  var n = e.transformTemplate;
  return qf(function() {
    var i = Jf();
    Zf(i, t, { enableHardwareAcceleration: !r }, n);
    var a = i.vars, o = i.style;
    return Z(Z({}, a), o);
  }, [t]);
}
function d_(e, t, r) {
  var n = e.style || {}, i = {};
  return t1(i, n, e), Object.assign(i, f_(e, t, r)), e.transformValues && (i = e.transformValues(i)), i;
}
function h_(e, t, r) {
  var n = {}, i = d_(e, t, r);
  return Boolean(e.drag) && e.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x")), n.style = i, n;
}
var p_ = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function Ho(e) {
  return p_.has(e);
}
var r1 = function(e) {
  return !Ho(e);
};
function v_(e) {
  !e || (r1 = function(t) {
    return t.startsWith("on") ? !Ho(t) : e(t);
  });
}
try {
  v_(require("@emotion/is-prop-valid").default);
} catch {
}
function g_(e, t, r) {
  var n = {};
  for (var i in e)
    (r1(i) || r === !0 && Ho(i) || !t && !Ho(i) || e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function lp(e, t, r) {
  return typeof e == "string" ? e : fe.transform(t + r * e);
}
function y_(e, t, r) {
  var n = lp(t, e.x, e.width), i = lp(r, e.y, e.height);
  return "".concat(n, " ").concat(i);
}
var m_ = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, b_ = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function x_(e, t, r, n, i) {
  r === void 0 && (r = 1), n === void 0 && (n = 0), i === void 0 && (i = !0), e.pathLength = 1;
  var a = i ? m_ : b_;
  e[a.offset] = fe.transform(-n);
  var o = fe.transform(t), s = fe.transform(r);
  e[a.array] = "".concat(o, " ").concat(s);
}
function Qf(e, t, r, n) {
  var i = t.attrX, a = t.attrY, o = t.originX, s = t.originY, u = t.pathLength, c = t.pathSpacing, l = c === void 0 ? 1 : c, f = t.pathOffset, d = f === void 0 ? 0 : f, p = Ht(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Zf(e, p, r, n), e.attrs = e.style, e.style = {};
  var v = e.attrs, h = e.style, g = e.dimensions;
  v.transform && (g && (h.transform = v.transform), delete v.transform), g && (o !== void 0 || s !== void 0 || h.transform) && (h.transformOrigin = y_(g, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), i !== void 0 && (v.x = i), a !== void 0 && (v.y = a), u !== void 0 && x_(v, u, l, d, !1);
}
var n1 = function() {
  return Z(Z({}, Jf()), { attrs: {} });
};
function w_(e, t) {
  var r = qf(function() {
    var i = n1();
    return Qf(i, t, { enableHardwareAcceleration: !1 }, e.transformTemplate), Z(Z({}, i.attrs), { style: Z({}, i.style) });
  }, [t]);
  if (e.style) {
    var n = {};
    t1(n, e.style, e), r.style = Z(Z({}, n), r.style);
  }
  return r;
}
function S_(e) {
  e === void 0 && (e = !1);
  var t = function(r, n, i, a, o, s) {
    var u = o.latestValues, c = Kf(r) ? w_ : h_, l = c(n, u, s), f = g_(n, typeof r == "string", e), d = Z(Z(Z({}, f), l), { ref: a });
    return i && (d["data-projection-id"] = i), Ot(r, d);
  };
  return t;
}
var A_ = /([a-z])([A-Z])/g, __ = "$1-$2", i1 = function(e) {
  return e.replace(A_, __).toLowerCase();
};
function a1(e, t, r, n) {
  var i = t.style, a = t.vars;
  Object.assign(e.style, i, n && n.getProjectionStyles(r));
  for (var o in a)
    e.style.setProperty(o, a[o]);
}
var o1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);
function s1(e, t, r, n) {
  a1(e, t, void 0, n);
  for (var i in t.attrs)
    e.setAttribute(o1.has(i) ? i : i1(i), t.attrs[i]);
}
function ed(e) {
  var t = e.style, r = {};
  for (var n in t)
    (Pr(t[n]) || qm(n, e)) && (r[n] = t[n]);
  return r;
}
function u1(e) {
  var t = ed(e);
  for (var r in e)
    if (Pr(e[r])) {
      var n = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function td(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var ca = function(e) {
  return Array.isArray(e);
}, O_ = function(e) {
  return Boolean(e && typeof e == "object" && e.mix && e.toValue);
}, c1 = function(e) {
  return ca(e) ? e[e.length - 1] || 0 : e;
};
function go(e) {
  var t = Pr(e) ? e.get() : e;
  return O_(t) ? t.toValue() : t;
}
function fp(e, t, r, n) {
  var i = e.scrapeMotionValuesFromProps, a = e.createRenderState, o = e.onMount, s = {
    latestValues: E_(t, r, n, i),
    renderState: a()
  };
  return o && (s.mount = function(u) {
    return o(t, u, s);
  }), s;
}
var l1 = function(e) {
  return function(t, r) {
    var n = et(Js), i = et(Qs);
    return r ? fp(e, t, n, i) : ru(function() {
      return fp(e, t, n, i);
    });
  };
};
function E_(e, t, r, n) {
  var i = {}, a = (r == null ? void 0 : r.initial) === !1, o = n(e);
  for (var s in o)
    i[s] = go(o[s]);
  var u = e.initial, c = e.animate, l = tu(e), f = Bm(e);
  t && f && !l && e.inherit !== !1 && (u != null || (u = t.initial), c != null || (c = t.animate));
  var d = a || u === !1, p = d ? c : u;
  if (p && typeof p != "boolean" && !td(p)) {
    var v = Array.isArray(p) ? p : [p];
    v.forEach(function(h) {
      var g = Vm(e, h);
      if (!!g) {
        var m = g.transitionEnd;
        g.transition;
        var w = Ht(g, ["transitionEnd", "transition"]);
        for (var x in w) {
          var b = w[x];
          if (Array.isArray(b)) {
            var y = d ? b.length - 1 : 0;
            b = b[y];
          }
          b !== null && (i[x] = b);
        }
        for (var x in m)
          i[x] = m[x];
      }
    });
  }
  return i;
}
var T_ = {
  useVisualState: l1({
    scrapeMotionValuesFromProps: u1,
    createRenderState: n1,
    onMount: function(e, t, r) {
      var n = r.renderState, i = r.latestValues;
      try {
        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Qf(n, i, { enableHardwareAcceleration: !1 }, e.transformTemplate), s1(t, n);
    }
  })
}, P_ = {
  useVisualState: l1({
    scrapeMotionValuesFromProps: ed,
    createRenderState: Jf
  })
};
function C_(e, t, r, n, i) {
  var a = t.forwardMotionProps, o = a === void 0 ? !1 : a, s = Kf(e) ? T_ : P_;
  return Z(Z({}, s), { preloadedFeatures: r, useRender: S_(o), createVisualElement: n, projectionNodeConstructor: i, Component: e });
}
var Ve;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(Ve || (Ve = {}));
function nu(e, t, r, n) {
  return n === void 0 && (n = { passive: !0 }), e.addEventListener(t, r, n), function() {
    return e.removeEventListener(t, r);
  };
}
function tl(e, t, r, n) {
  Lt(function() {
    var i = e.current;
    if (r && i)
      return nu(i, t, r, n);
  }, [e, t, r, n]);
}
function M_(e) {
  var t = e.whileFocus, r = e.visualElement, n = function() {
    var a;
    (a = r.animationState) === null || a === void 0 || a.setActive(Ve.Focus, !0);
  }, i = function() {
    var a;
    (a = r.animationState) === null || a === void 0 || a.setActive(Ve.Focus, !1);
  };
  tl(r, "focus", t ? n : void 0), tl(r, "blur", t ? i : void 0);
}
function f1(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function d1(e) {
  var t = !!e.touches;
  return t;
}
function k_(e) {
  return function(t) {
    var r = t instanceof MouseEvent, n = !r || r && t.button === 0;
    n && e(t);
  };
}
var N_ = { pageX: 0, pageY: 0 };
function R_(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0], n = r || N_;
  return {
    x: n[t + "X"],
    y: n[t + "Y"]
  };
}
function I_(e, t) {
  return t === void 0 && (t = "page"), {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function rd(e, t) {
  return t === void 0 && (t = "page"), {
    point: d1(e) ? R_(e, t) : I_(e, t)
  };
}
var h1 = function(e, t) {
  t === void 0 && (t = !1);
  var r = function(n) {
    return e(n, rd(n));
  };
  return t ? k_(r) : r;
}, $_ = function() {
  return mi && window.onpointerdown === null;
}, L_ = function() {
  return mi && window.ontouchstart === null;
}, j_ = function() {
  return mi && window.onmousedown === null;
}, D_ = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, F_ = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function p1(e) {
  return $_() ? e : L_() ? F_[e] : j_() ? D_[e] : e;
}
function Xn(e, t, r, n) {
  return nu(e, p1(t), h1(r, t === "pointerdown"), n);
}
function Go(e, t, r, n) {
  return tl(e, p1(t), r && h1(r, t === "pointerdown"), n);
}
function v1(e) {
  var t = null;
  return function() {
    var r = function() {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
var dp = v1("dragHorizontal"), hp = v1("dragVertical");
function g1(e) {
  var t = !1;
  if (e === "y")
    t = hp();
  else if (e === "x")
    t = dp();
  else {
    var r = dp(), n = hp();
    r && n ? t = function() {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function y1() {
  var e = g1(!0);
  return e ? (e(), !1) : !0;
}
function pp(e, t, r) {
  return function(n, i) {
    var a;
    !f1(n) || y1() || ((a = e.animationState) === null || a === void 0 || a.setActive(Ve.Hover, t), r == null || r(n, i));
  };
}
function V_(e) {
  var t = e.onHoverStart, r = e.onHoverEnd, n = e.whileHover, i = e.visualElement;
  Go(i, "pointerenter", t || n ? pp(i, !0, t) : void 0, { passive: !t }), Go(i, "pointerleave", r || n ? pp(i, !1, r) : void 0, { passive: !r });
}
var m1 = function(e, t) {
  return t ? e === t ? !0 : m1(e, t.parentElement) : !1;
};
function b1(e) {
  return Lt(function() {
    return function() {
      return e();
    };
  }, []);
}
const Yo = (e, t, r) => Math.min(Math.max(r, e), t), Xu = 1e-3, B_ = 0.01, vp = 10, U_ = 0.05, z_ = 1;
function W_({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let i, a;
  Ea(e <= vp * 1e3, "Spring duration must be 10 seconds or less");
  let o = 1 - t;
  o = Yo(U_, z_, o), e = Yo(B_, vp, e / 1e3), o < 1 ? (i = (c) => {
    const l = c * o, f = l * e, d = l - r, p = rl(c, o), v = Math.exp(-f);
    return Xu - d / p * v;
  }, a = (c) => {
    const f = c * o * e, d = f * r + r, p = Math.pow(o, 2) * Math.pow(c, 2) * e, v = Math.exp(-f), h = rl(Math.pow(c, 2), o);
    return (-i(c) + Xu > 0 ? -1 : 1) * ((d - p) * v) / h;
  }) : (i = (c) => {
    const l = Math.exp(-c * e), f = (c - r) * e + 1;
    return -Xu + l * f;
  }, a = (c) => {
    const l = Math.exp(-c * e), f = (r - c) * (e * e);
    return l * f;
  });
  const s = 5 / e, u = H_(i, a, s);
  if (e = e * 1e3, isNaN(u))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(u, 2) * n;
    return {
      stiffness: c,
      damping: o * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const q_ = 12;
function H_(e, t, r) {
  let n = r;
  for (let i = 1; i < q_; i++)
    n = n - e(n) / t(n);
  return n;
}
function rl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const G_ = ["duration", "bounce"], Y_ = ["stiffness", "damping", "mass"];
function gp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function K_(e) {
  let t = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, e);
  if (!gp(e, Y_) && gp(e, G_)) {
    const r = W_(e);
    t = Object.assign(Object.assign(Object.assign({}, t), r), { velocity: 0, mass: 1 }), t.isResolvedFromDuration = !0;
  }
  return t;
}
function nd(e) {
  var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: i } = e, a = Ht(e, ["from", "to", "restSpeed", "restDelta"]);
  const o = { done: !1, value: t };
  let { stiffness: s, damping: u, mass: c, velocity: l, duration: f, isResolvedFromDuration: d } = K_(a), p = yp, v = yp;
  function h() {
    const g = l ? -(l / 1e3) : 0, m = r - t, w = u / (2 * Math.sqrt(s * c)), x = Math.sqrt(s / c) / 1e3;
    if (i === void 0 && (i = Math.min(Math.abs(r - t) / 100, 0.4)), w < 1) {
      const b = rl(x, w);
      p = (y) => {
        const S = Math.exp(-w * x * y);
        return r - S * ((g + w * x * m) / b * Math.sin(b * y) + m * Math.cos(b * y));
      }, v = (y) => {
        const S = Math.exp(-w * x * y);
        return w * x * S * (Math.sin(b * y) * (g + w * x * m) / b + m * Math.cos(b * y)) - S * (Math.cos(b * y) * (g + w * x * m) - b * m * Math.sin(b * y));
      };
    } else if (w === 1)
      p = (b) => r - Math.exp(-x * b) * (m + (g + x * m) * b);
    else {
      const b = x * Math.sqrt(w * w - 1);
      p = (y) => {
        const S = Math.exp(-w * x * y), A = Math.min(b * y, 300);
        return r - S * ((g + w * x * m) * Math.sinh(A) + b * m * Math.cosh(A)) / b;
      };
    }
  }
  return h(), {
    next: (g) => {
      const m = p(g);
      if (d)
        o.done = g >= f;
      else {
        const w = v(g) * 1e3, x = Math.abs(w) <= n, b = Math.abs(r - m) <= i;
        o.done = x && b;
      }
      return o.value = o.done ? r : m, o;
    },
    flipTarget: () => {
      l = -l, [t, r] = [r, t], h();
    }
  };
}
nd.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const yp = (e) => 0, la = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Ye = (e, t, r) => -r * e + r * t + e;
function Zu(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function mp({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let i = 0, a = 0, o = 0;
  if (!t)
    i = a = o = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, u = 2 * r - s;
    i = Zu(u, s, e + 1 / 3), a = Zu(u, s, e), o = Zu(u, s, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: n
  };
}
const X_ = (e, t, r) => {
  const n = e * e, i = t * t;
  return Math.sqrt(Math.max(0, r * (i - n) + n));
}, Z_ = [Qc, Wr, An], bp = (e) => Z_.find((t) => t.test(e)), xp = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, x1 = (e, t) => {
  let r = bp(e), n = bp(t);
  Wt(!!r, xp(e)), Wt(!!n, xp(t));
  let i = r.parse(e), a = n.parse(t);
  r === An && (i = mp(i), r = Wr), n === An && (a = mp(a), n = Wr);
  const o = Object.assign({}, i);
  return (s) => {
    for (const u in o)
      u !== "alpha" && (o[u] = X_(i[u], a[u], s));
    return o.alpha = Ye(i.alpha, a.alpha, s), r.transform(o);
  };
}, nl = (e) => typeof e == "number", J_ = (e, t) => (r) => t(e(r)), iu = (...e) => e.reduce(J_);
function w1(e, t) {
  return nl(e) ? (r) => Ye(e, t, r) : xt.test(e) ? x1(e, t) : A1(e, t);
}
const S1 = (e, t) => {
  const r = [...e], n = r.length, i = e.map((a, o) => w1(a, t[o]));
  return (a) => {
    for (let o = 0; o < n; o++)
      r[o] = i[o](a);
    return r;
  };
}, Q_ = (e, t) => {
  const r = Object.assign(Object.assign({}, e), t), n = {};
  for (const i in r)
    e[i] !== void 0 && t[i] !== void 0 && (n[i] = w1(e[i], t[i]));
  return (i) => {
    for (const a in n)
      r[a] = n[a](i);
    return r;
  };
};
function wp(e) {
  const t = Cr.parse(e), r = t.length;
  let n = 0, i = 0, a = 0;
  for (let o = 0; o < r; o++)
    n || typeof t[o] == "number" ? n++ : t[o].hue !== void 0 ? a++ : i++;
  return { parsed: t, numNumbers: n, numRGB: i, numHSL: a };
}
const A1 = (e, t) => {
  const r = Cr.createTransformer(t), n = wp(e), i = wp(t);
  return n.numHSL === i.numHSL && n.numRGB === i.numRGB && n.numNumbers >= i.numNumbers ? iu(S1(n.parsed, i.parsed), r) : (Ea(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (o) => `${o > 0 ? t : e}`);
}, eO = (e, t) => (r) => Ye(e, t, r);
function tO(e) {
  if (typeof e == "number")
    return eO;
  if (typeof e == "string")
    return xt.test(e) ? x1 : A1;
  if (Array.isArray(e))
    return S1;
  if (typeof e == "object")
    return Q_;
}
function rO(e, t, r) {
  const n = [], i = r || tO(e[0]), a = e.length - 1;
  for (let o = 0; o < a; o++) {
    let s = i(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] : t;
      s = iu(u, s);
    }
    n.push(s);
  }
  return n;
}
function nO([e, t], [r]) {
  return (n) => r(la(e, t, n));
}
function iO(e, t) {
  const r = e.length, n = r - 1;
  return (i) => {
    let a = 0, o = !1;
    if (i <= e[0] ? o = !0 : i >= e[n] && (a = n - 1, o = !0), !o) {
      let u = 1;
      for (; u < r && !(e[u] > i || u === n); u++)
        ;
      a = u - 1;
    }
    const s = la(e[a], e[a + 1], i);
    return t[a](s);
  };
}
function _1(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const a = e.length;
  Wt(a === t.length, "Both input and output ranges must be the same length"), Wt(!n || !Array.isArray(n) || n.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[a - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  const o = rO(t, n, i), s = a === 2 ? nO(e, o) : iO(e, o);
  return r ? (u) => s(Yo(e[0], e[a - 1], u)) : s;
}
const au = (e) => (t) => 1 - e(1 - t), id = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, aO = (e) => (t) => Math.pow(t, e), O1 = (e) => (t) => t * t * ((e + 1) * t - e), oO = (e) => {
  const t = O1(e);
  return (r) => (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
}, E1 = 1.525, sO = 4 / 11, uO = 8 / 11, cO = 9 / 10, ad = (e) => e, od = aO(2), lO = au(od), T1 = id(od), P1 = (e) => 1 - Math.sin(Math.acos(e)), sd = au(P1), fO = id(sd), ud = O1(E1), dO = au(ud), hO = id(ud), pO = oO(E1), vO = 4356 / 361, gO = 35442 / 1805, yO = 16061 / 1805, Ko = (e) => {
  if (e === 1 || e === 0)
    return e;
  const t = e * e;
  return e < sO ? 7.5625 * t : e < uO ? 9.075 * t - 9.9 * e + 3.4 : e < cO ? vO * t - gO * e + yO : 10.8 * e * e - 20.52 * e + 10.72;
}, mO = au(Ko), bO = (e) => e < 0.5 ? 0.5 * (1 - Ko(1 - e * 2)) : 0.5 * Ko(e * 2 - 1) + 0.5;
function xO(e, t) {
  return e.map(() => t || T1).splice(0, e.length - 1);
}
function wO(e) {
  const t = e.length;
  return e.map((r, n) => n !== 0 ? n / (t - 1) : 0);
}
function SO(e, t) {
  return e.map((r) => r * t);
}
function yo({ from: e = 0, to: t = 1, ease: r, offset: n, duration: i = 300 }) {
  const a = { done: !1, value: e }, o = Array.isArray(t) ? t : [e, t], s = SO(n && n.length === o.length ? n : wO(o), i);
  function u() {
    return _1(s, o, {
      ease: Array.isArray(r) ? r : xO(o, r)
    });
  }
  let c = u();
  return {
    next: (l) => (a.value = c(l), a.done = l >= i, a),
    flipTarget: () => {
      o.reverse(), c = u();
    }
  };
}
function AO({ velocity: e = 0, from: t = 0, power: r = 0.8, timeConstant: n = 350, restDelta: i = 0.5, modifyTarget: a }) {
  const o = { done: !1, value: t };
  let s = r * e;
  const u = t + s, c = a === void 0 ? u : a(u);
  return c !== u && (s = c - t), {
    next: (l) => {
      const f = -s * Math.exp(-l / n);
      return o.done = !(f > i || f < -i), o.value = o.done ? c : c + f, o;
    },
    flipTarget: () => {
    }
  };
}
const Sp = { keyframes: yo, spring: nd, decay: AO };
function _O(e) {
  if (Array.isArray(e.to))
    return yo;
  if (Sp[e.type])
    return Sp[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? yo : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? nd : yo;
}
const C1 = 1 / 60 * 1e3, OO = typeof performance < "u" ? () => performance.now() : () => Date.now(), M1 = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(OO()), C1);
function EO(e) {
  let t = [], r = [], n = 0, i = !1, a = !1;
  const o = /* @__PURE__ */ new WeakSet(), s = {
    schedule: (u, c = !1, l = !1) => {
      const f = l && i, d = f ? t : r;
      return c && o.add(u), d.indexOf(u) === -1 && (d.push(u), f && i && (n = t.length)), u;
    },
    cancel: (u) => {
      const c = r.indexOf(u);
      c !== -1 && r.splice(c, 1), o.delete(u);
    },
    process: (u) => {
      if (i) {
        a = !0;
        return;
      }
      if (i = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const l = t[c];
          l(u), o.has(l) && (s.schedule(l), e());
        }
      i = !1, a && (a = !1, s.process(u));
    }
  };
  return s;
}
const TO = 40;
let il = !0, fa = !1, al = !1;
const Zn = {
  delta: 0,
  timestamp: 0
}, Ma = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], ou = Ma.reduce((e, t) => (e[t] = EO(() => fa = !0), e), {}), lr = Ma.reduce((e, t) => {
  const r = ou[t];
  return e[t] = (n, i = !1, a = !1) => (fa || CO(), r.schedule(n, i, a)), e;
}, {}), ni = Ma.reduce((e, t) => (e[t] = ou[t].cancel, e), {}), Ju = Ma.reduce((e, t) => (e[t] = () => ou[t].process(Zn), e), {}), PO = (e) => ou[e].process(Zn), k1 = (e) => {
  fa = !1, Zn.delta = il ? C1 : Math.max(Math.min(e - Zn.timestamp, TO), 1), Zn.timestamp = e, al = !0, Ma.forEach(PO), al = !1, fa && (il = !1, M1(k1));
}, CO = () => {
  fa = !0, il = !0, al || M1(k1);
}, Xo = () => Zn;
function N1(e, t, r = 0) {
  return e - t - r;
}
function MO(e, t, r = 0, n = !0) {
  return n ? N1(t + -e, t, r) : t - (e - t) + r;
}
function kO(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const NO = (e) => {
  const t = ({ delta: r }) => e(r);
  return {
    start: () => lr.update(t, !0),
    stop: () => ni.update(t)
  };
};
function R1(e) {
  var t, r, { from: n, autoplay: i = !0, driver: a = NO, elapsed: o = 0, repeat: s = 0, repeatType: u = "loop", repeatDelay: c = 0, onPlay: l, onStop: f, onComplete: d, onRepeat: p, onUpdate: v } = e, h = Ht(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: g } = h, m, w = 0, x = h.duration, b, y = !1, S = !0, A;
  const _ = _O(h);
  !((r = (t = _).needsInterpolation) === null || r === void 0) && r.call(t, n, g) && (A = _1([0, 100], [n, g], {
    clamp: !1
  }), n = 0, g = 100);
  const E = _(Object.assign(Object.assign({}, h), { from: n, to: g }));
  function M() {
    w++, u === "reverse" ? (S = w % 2 === 0, o = MO(o, x, c, S)) : (o = N1(o, x, c), u === "mirror" && E.flipTarget()), y = !1, p && p();
  }
  function C() {
    m.stop(), d && d();
  }
  function k(j) {
    if (S || (j = -j), o += j, !y) {
      const L = E.next(Math.max(0, o));
      b = L.value, A && (b = A(b)), y = S ? L.done : o <= 0;
    }
    v == null || v(b), y && (w === 0 && (x != null || (x = o)), w < s ? kO(o, x, c, S) && M() : C());
  }
  function N() {
    l == null || l(), m = a(k), m.start();
  }
  return i && N(), {
    stop: () => {
      f == null || f(), m.stop();
    }
  };
}
function I1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function RO({ from: e = 0, velocity: t = 0, min: r, max: n, power: i = 0.8, timeConstant: a = 750, bounceStiffness: o = 500, bounceDamping: s = 10, restDelta: u = 1, modifyTarget: c, driver: l, onUpdate: f, onComplete: d, onStop: p }) {
  let v;
  function h(x) {
    return r !== void 0 && x < r || n !== void 0 && x > n;
  }
  function g(x) {
    return r === void 0 ? n : n === void 0 || Math.abs(r - x) < Math.abs(n - x) ? r : n;
  }
  function m(x) {
    v == null || v.stop(), v = R1(Object.assign(Object.assign({}, x), {
      driver: l,
      onUpdate: (b) => {
        var y;
        f == null || f(b), (y = x.onUpdate) === null || y === void 0 || y.call(x, b);
      },
      onComplete: d,
      onStop: p
    }));
  }
  function w(x) {
    m(Object.assign({ type: "spring", stiffness: o, damping: s, restDelta: u }, x));
  }
  if (h(e))
    w({ from: e, velocity: t, to: g(e) });
  else {
    let x = i * t + e;
    typeof c < "u" && (x = c(x));
    const b = g(x), y = b === r ? -1 : 1;
    let S, A;
    const _ = (E) => {
      S = A, A = E, t = I1(E - S, Xo().delta), (y === 1 && E > b || y === -1 && E < b) && w({ from: E, to: b, velocity: t });
    };
    m({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: a,
      power: i,
      restDelta: u,
      modifyTarget: c,
      onUpdate: h(x) ? _ : void 0
    });
  }
  return {
    stop: () => v == null ? void 0 : v.stop()
  };
}
const ol = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"), Ap = (e) => ol(e) && e.hasOwnProperty("z"), Xa = (e, t) => Math.abs(e - t);
function $1(e, t) {
  if (nl(e) && nl(t))
    return Xa(e, t);
  if (ol(e) && ol(t)) {
    const r = Xa(e.x, t.x), n = Xa(e.y, t.y), i = Ap(e) && Ap(t) ? Xa(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(i, 2));
  }
}
const L1 = (e, t) => 1 - 3 * t + 3 * e, j1 = (e, t) => 3 * t - 6 * e, D1 = (e) => 3 * e, Zo = (e, t, r) => ((L1(t, r) * e + j1(t, r)) * e + D1(t)) * e, F1 = (e, t, r) => 3 * L1(t, r) * e * e + 2 * j1(t, r) * e + D1(t), IO = 1e-7, $O = 10;
function LO(e, t, r, n, i) {
  let a, o, s = 0;
  do
    o = t + (r - t) / 2, a = Zo(o, n, i) - e, a > 0 ? r = o : t = o;
  while (Math.abs(a) > IO && ++s < $O);
  return o;
}
const jO = 8, DO = 1e-3;
function FO(e, t, r, n) {
  for (let i = 0; i < jO; ++i) {
    const a = F1(t, r, n);
    if (a === 0)
      return t;
    const o = Zo(t, r, n) - e;
    t -= o / a;
  }
  return t;
}
const mo = 11, Za = 1 / (mo - 1);
function VO(e, t, r, n) {
  if (e === t && r === n)
    return ad;
  const i = new Float32Array(mo);
  for (let o = 0; o < mo; ++o)
    i[o] = Zo(o * Za, e, r);
  function a(o) {
    let s = 0, u = 1;
    const c = mo - 1;
    for (; u !== c && i[u] <= o; ++u)
      s += Za;
    --u;
    const l = (o - i[u]) / (i[u + 1] - i[u]), f = s + l * Za, d = F1(f, e, r);
    return d >= DO ? FO(o, f, e, r) : d === 0 ? f : LO(o, s, s + Za, e, r);
  }
  return (o) => o === 0 || o === 1 ? o : Zo(a(o), t, n);
}
function BO(e) {
  var t = e.onTap, r = e.onTapStart, n = e.onTapCancel, i = e.whileTap, a = e.visualElement, o = t || r || n || i, s = ri(!1), u = ri(null), c = {
    passive: !(r || t || n || v)
  };
  function l() {
    var h;
    (h = u.current) === null || h === void 0 || h.call(u), u.current = null;
  }
  function f() {
    var h;
    return l(), s.current = !1, (h = a.animationState) === null || h === void 0 || h.setActive(Ve.Tap, !1), !y1();
  }
  function d(h, g) {
    !f() || (m1(a.getInstance(), h.target) ? t == null || t(h, g) : n == null || n(h, g));
  }
  function p(h, g) {
    !f() || n == null || n(h, g);
  }
  function v(h, g) {
    var m;
    l(), !s.current && (s.current = !0, u.current = iu(Xn(window, "pointerup", d, c), Xn(window, "pointercancel", p, c)), (m = a.animationState) === null || m === void 0 || m.setActive(Ve.Tap, !0), r == null || r(h, g));
  }
  Go(a, "pointerdown", o ? v : void 0, c), b1(l);
}
var _p = /* @__PURE__ */ new Set();
function V1(e, t, r) {
  e || _p.has(t) || (console.warn(t), r && console.warn(r), _p.add(t));
}
var sl = /* @__PURE__ */ new WeakMap(), Qu = /* @__PURE__ */ new WeakMap(), UO = function(e) {
  var t;
  (t = sl.get(e.target)) === null || t === void 0 || t(e);
}, zO = function(e) {
  e.forEach(UO);
};
function WO(e) {
  var t = e.root, r = Ht(e, ["root"]), n = t || document;
  Qu.has(n) || Qu.set(n, {});
  var i = Qu.get(n), a = JSON.stringify(r);
  return i[a] || (i[a] = new IntersectionObserver(zO, Z({ root: t }, r))), i[a];
}
function qO(e, t, r) {
  var n = WO(t);
  return sl.set(e, r), n.observe(e), function() {
    sl.delete(e), n.unobserve(e);
  };
}
function HO(e) {
  var t = e.visualElement, r = e.whileInView, n = e.onViewportEnter, i = e.onViewportLeave, a = e.viewport, o = a === void 0 ? {} : a, s = ri({
    hasEnteredView: !1,
    isInView: !1
  }), u = Boolean(r || n || i);
  o.once && s.current.hasEnteredView && (u = !1);
  var c = typeof IntersectionObserver > "u" ? KO : YO;
  c(u, s.current, t, o);
}
var GO = {
  some: 0,
  all: 1
};
function YO(e, t, r, n) {
  var i = n.root, a = n.margin, o = n.amount, s = o === void 0 ? "some" : o, u = n.once;
  Lt(function() {
    if (!!e) {
      var c = {
        root: i == null ? void 0 : i.current,
        rootMargin: a,
        threshold: typeof s == "number" ? s : GO[s]
      }, l = function(f) {
        var d, p = f.isIntersecting;
        if (t.isInView !== p && (t.isInView = p, !(u && !p && t.hasEnteredView))) {
          p && (t.hasEnteredView = !0), (d = r.animationState) === null || d === void 0 || d.setActive(Ve.InView, p);
          var v = r.getProps(), h = p ? v.onViewportEnter : v.onViewportLeave;
          h == null || h(f);
        }
      };
      return qO(r.getInstance(), c, l);
    }
  }, [e, i, a, s]);
}
function KO(e, t, r, n) {
  var i = n.fallback, a = i === void 0 ? !0 : i;
  Lt(function() {
    !e || !a || ($m !== "production" && V1(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
      var o;
      t.hasEnteredView = !0;
      var s = r.getProps().onViewportEnter;
      s == null || s(null), (o = r.animationState) === null || o === void 0 || o.setActive(Ve.InView, !0);
    }));
  }, [e]);
}
var qr = function(e) {
  return function(t) {
    return e(t), null;
  };
}, XO = {
  inView: qr(HO),
  tap: qr(BO),
  focus: qr(M_),
  hover: qr(V_)
}, ZO = 0, JO = function() {
  return ZO++;
}, QO = function() {
  return ru(JO);
};
function B1() {
  var e = et(Qs);
  if (e === null)
    return [!0, null];
  var t = e.isPresent, r = e.onExitComplete, n = e.register, i = QO();
  Lt(function() {
    return n(i);
  }, []);
  var a = function() {
    return r == null ? void 0 : r(i);
  };
  return !t && r ? [!1, a] : [!0];
}
function U1(e, t) {
  if (!Array.isArray(t))
    return !1;
  var r = t.length;
  if (r !== e.length)
    return !1;
  for (var n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
var Jo = function(e) {
  return e * 1e3;
}, Op = {
  linear: ad,
  easeIn: od,
  easeInOut: T1,
  easeOut: lO,
  circIn: P1,
  circInOut: fO,
  circOut: sd,
  backIn: ud,
  backInOut: hO,
  backOut: dO,
  anticipate: pO,
  bounceIn: mO,
  bounceInOut: bO,
  bounceOut: Ko
}, Ep = function(e) {
  if (Array.isArray(e)) {
    Wt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = it(e, 4), r = t[0], n = t[1], i = t[2], a = t[3];
    return VO(r, n, i, a);
  } else if (typeof e == "string")
    return Wt(Op[e] !== void 0, "Invalid easing type '".concat(e, "'")), Op[e];
  return e;
}, eE = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
}, Tp = function(e, t) {
  return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Cr.test(t) && !t.startsWith("url("));
}, pn = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
}, Ja = function(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
}, ec = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
}, tE = function(e) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: e
  };
}, Pp = {
  x: pn,
  y: pn,
  z: pn,
  rotate: pn,
  rotateX: pn,
  rotateY: pn,
  rotateZ: pn,
  scaleX: Ja,
  scaleY: Ja,
  scale: Ja,
  opacity: ec,
  backgroundColor: ec,
  color: ec,
  default: Ja
}, rE = function(e, t) {
  var r;
  return ca(t) ? r = tE : r = Pp[e] || Pp.default, Z({ to: t }, r(t));
}, nE = Z(Z({}, e1), {
  color: xt,
  backgroundColor: xt,
  outlineColor: xt,
  fill: xt,
  stroke: xt,
  borderColor: xt,
  borderTopColor: xt,
  borderRightColor: xt,
  borderBottomColor: xt,
  borderLeftColor: xt,
  filter: el,
  WebkitFilter: el
}), cd = function(e) {
  return nE[e];
};
function ld(e, t) {
  var r, n = cd(e);
  return n !== el && (n = Cr), (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t);
}
var iE = {
  current: !1
};
function aE(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = Ht(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var Cp = !1;
function oE(e) {
  var t = e.ease, r = e.times, n = e.yoyo, i = e.flip, a = e.loop, o = Ht(e, ["ease", "times", "yoyo", "flip", "loop"]), s = Z({}, o);
  return r && (s.offset = r), o.duration && (s.duration = Jo(o.duration)), o.repeatDelay && (s.repeatDelay = Jo(o.repeatDelay)), t && (s.ease = eE(t) ? t.map(Ep) : Ep(t)), o.type === "tween" && (s.type = "keyframes"), (n || a || i) && (Ea(!Cp, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), Cp = !0, n ? s.repeatType = "reverse" : a ? s.repeatType = "loop" : i && (s.repeatType = "mirror"), s.repeat = a || n || i || o.repeat), o.type !== "spring" && (s.type = "keyframes"), s;
}
function sE(e, t) {
  var r, n, i = fd(e, t) || {};
  return (n = (r = i.delay) !== null && r !== void 0 ? r : e.delay) !== null && n !== void 0 ? n : 0;
}
function uE(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = ur([], it(e.to), !1), e.to[0] = e.from), e;
}
function cE(e, t, r) {
  var n;
  return Array.isArray(t.to) && ((n = e.duration) !== null && n !== void 0 || (e.duration = 0.8)), uE(t), aE(e) || (e = Z(Z({}, e), rE(r, t.to))), Z(Z({}, t), oE(e));
}
function lE(e, t, r, n, i) {
  var a, o = fd(n, e), s = (a = o.from) !== null && a !== void 0 ? a : t.get(), u = Tp(e, r);
  s === "none" && u && typeof r == "string" ? s = ld(e, r) : Mp(s) && typeof r == "string" ? s = kp(r) : !Array.isArray(r) && Mp(r) && typeof s == "string" && (r = kp(s));
  var c = Tp(e, s);
  Ea(c === u, "You are trying to animate ".concat(e, ' from "').concat(s, '" to "').concat(r, '". ').concat(s, " is not an animatable value - to enable this animation set ").concat(s, " to a value animatable to ").concat(r, " via the `style` property."));
  function l() {
    var d = {
      from: s,
      to: r,
      velocity: t.getVelocity(),
      onComplete: i,
      onUpdate: function(p) {
        return t.set(p);
      }
    };
    return o.type === "inertia" || o.type === "decay" ? RO(Z(Z({}, d), o)) : R1(Z(Z({}, cE(o, d, e)), { onUpdate: function(p) {
      var v;
      d.onUpdate(p), (v = o.onUpdate) === null || v === void 0 || v.call(o, p);
    }, onComplete: function() {
      var p;
      d.onComplete(), (p = o.onComplete) === null || p === void 0 || p.call(o);
    } }));
  }
  function f() {
    var d, p, v = c1(r);
    return t.set(v), i(), (d = o == null ? void 0 : o.onUpdate) === null || d === void 0 || d.call(o, v), (p = o == null ? void 0 : o.onComplete) === null || p === void 0 || p.call(o), { stop: function() {
    } };
  }
  return !c || !u || o.type === !1 ? f : l;
}
function Mp(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function kp(e) {
  return typeof e == "number" ? 0 : ld("", e);
}
function fd(e, t) {
  return e[t] || e.default || e;
}
function dd(e, t, r, n) {
  return n === void 0 && (n = {}), iE.current && (n = { type: !1 }), t.start(function(i) {
    var a, o, s = lE(e, t, r, n, i), u = sE(n, e), c = function() {
      return o = s();
    };
    return u ? a = window.setTimeout(c, Jo(u)) : c(), function() {
      clearTimeout(a), o == null || o.stop();
    };
  });
}
var fE = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
}, dE = function(e) {
  return /^0[^.\s]+$/.test(e);
};
function hd(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pd(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var Ji = function() {
  function e() {
    this.subscriptions = [];
  }
  return e.prototype.add = function(t) {
    var r = this;
    return hd(this.subscriptions, t), function() {
      return pd(r.subscriptions, t);
    };
  }, e.prototype.notify = function(t, r, n) {
    var i = this.subscriptions.length;
    if (!!i)
      if (i === 1)
        this.subscriptions[0](t, r, n);
      else
        for (var a = 0; a < i; a++) {
          var o = this.subscriptions[a];
          o && o(t, r, n);
        }
  }, e.prototype.getSize = function() {
    return this.subscriptions.length;
  }, e.prototype.clear = function() {
    this.subscriptions.length = 0;
  }, e;
}(), hE = function(e) {
  return !isNaN(parseFloat(e));
}, pE = function() {
  function e(t) {
    var r = this;
    this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Ji(), this.velocityUpdateSubscribers = new Ji(), this.renderSubscribers = new Ji(), this.canTrackVelocity = !1, this.updateAndNotify = function(n, i) {
      i === void 0 && (i = !0), r.prev = r.current, r.current = n;
      var a = Xo(), o = a.delta, s = a.timestamp;
      r.lastUpdated !== s && (r.timeDelta = o, r.lastUpdated = s, lr.postRender(r.scheduleVelocityCheck)), r.prev !== r.current && r.updateSubscribers.notify(r.current), r.velocityUpdateSubscribers.getSize() && r.velocityUpdateSubscribers.notify(r.getVelocity()), i && r.renderSubscribers.notify(r.current);
    }, this.scheduleVelocityCheck = function() {
      return lr.postRender(r.velocityCheck);
    }, this.velocityCheck = function(n) {
      var i = n.timestamp;
      i !== r.lastUpdated && (r.prev = r.current, r.velocityUpdateSubscribers.notify(r.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = hE(this.current);
  }
  return e.prototype.onChange = function(t) {
    return this.updateSubscribers.add(t);
  }, e.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  }, e.prototype.onRenderRequest = function(t) {
    return t(this.get()), this.renderSubscribers.add(t);
  }, e.prototype.attach = function(t) {
    this.passiveEffect = t;
  }, e.prototype.set = function(t, r) {
    r === void 0 && (r = !0), !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }, e.prototype.get = function() {
    return this.current;
  }, e.prototype.getPrevious = function() {
    return this.prev;
  }, e.prototype.getVelocity = function() {
    return this.canTrackVelocity ? I1(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }, e.prototype.start = function(t) {
    var r = this;
    return this.stop(), new Promise(function(n) {
      r.hasAnimated = !0, r.stopAnimation = t(n);
    }).then(function() {
      return r.clearAnimation();
    });
  }, e.prototype.stop = function() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation();
  }, e.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  }, e.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  }, e.prototype.destroy = function() {
    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
  }, e;
}();
function ii(e) {
  return new pE(e);
}
var z1 = function(e) {
  return function(t) {
    return t.test(e);
  };
}, vE = {
  test: function(e) {
    return e === "auto";
  },
  parse: function(e) {
    return e;
  }
}, W1 = [Mn, fe, cr, Lr, r_, t_, vE], Ii = function(e) {
  return W1.find(z1(e));
}, gE = ur(ur([], it(W1), !1), [xt, Cr], !1), yE = function(e) {
  return gE.find(z1(e));
};
function mE(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, ii(r));
}
function bE(e, t) {
  var r = eu(e, t), n = r ? e.makeTargetAnimatable(r, !1) : {}, i = n.transitionEnd, a = i === void 0 ? {} : i;
  n.transition;
  var o = Ht(n, ["transitionEnd", "transition"]);
  o = Z(Z({}, o), a);
  for (var s in o) {
    var u = c1(o[s]);
    mE(e, s, u);
  }
}
function xE(e, t, r) {
  var n, i, a, o, s = Object.keys(t).filter(function(p) {
    return !e.hasValue(p);
  }), u = s.length;
  if (!!u)
    for (var c = 0; c < u; c++) {
      var l = s[c], f = t[l], d = null;
      Array.isArray(f) && (d = f[0]), d === null && (d = (i = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && i !== void 0 ? i : t[l]), d != null && (typeof d == "string" && (fE(d) || dE(d)) ? d = parseFloat(d) : !yE(d) && Cr.test(f) && (d = ld(l, f)), e.addValue(l, ii(d)), (a = (o = r)[l]) !== null && a !== void 0 || (o[l] = d), e.setBaseTarget(l, d));
    }
}
function wE(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function SE(e, t, r) {
  var n, i, a = {};
  for (var o in e)
    a[o] = (n = wE(o, t)) !== null && n !== void 0 ? n : (i = r.getValue(o)) === null || i === void 0 ? void 0 : i.get();
  return a;
}
function AE(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart(t);
  var n;
  if (Array.isArray(t)) {
    var i = t.map(function(o) {
      return ul(e, o, r);
    });
    n = Promise.all(i);
  } else if (typeof t == "string")
    n = ul(e, t, r);
  else {
    var a = typeof t == "function" ? eu(e, t, r.custom) : t;
    n = q1(e, a, r);
  }
  return n.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function ul(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var i = eu(e, t, r.custom), a = (i || {}).transition, o = a === void 0 ? e.getDefaultTransition() || {} : a;
  r.transitionOverride && (o = r.transitionOverride);
  var s = i ? function() {
    return q1(e, i, r);
  } : function() {
    return Promise.resolve();
  }, u = !((n = e.variantChildren) === null || n === void 0) && n.size ? function(p) {
    p === void 0 && (p = 0);
    var v = o.delayChildren, h = v === void 0 ? 0 : v, g = o.staggerChildren, m = o.staggerDirection;
    return _E(e, t, h + p, g, m, r);
  } : function() {
    return Promise.resolve();
  }, c = o.when;
  if (c) {
    var l = it(c === "beforeChildren" ? [s, u] : [u, s], 2), f = l[0], d = l[1];
    return f().then(d);
  } else
    return Promise.all([s(), u(r.delay)]);
}
function q1(e, t, r) {
  var n, i = r === void 0 ? {} : r, a = i.delay, o = a === void 0 ? 0 : a, s = i.transitionOverride, u = i.type, c = e.makeTargetAnimatable(t), l = c.transition, f = l === void 0 ? e.getDefaultTransition() : l, d = c.transitionEnd, p = Ht(c, ["transition", "transitionEnd"]);
  s && (f = s);
  var v = [], h = u && ((n = e.animationState) === null || n === void 0 ? void 0 : n.getState()[u]);
  for (var g in p) {
    var m = e.getValue(g), w = p[g];
    if (!(!m || w === void 0 || h && EE(h, g))) {
      var x = Z({ delay: o }, f);
      e.shouldReduceMotion && Ta(g) && (x = Z(Z({}, x), { type: !1, delay: 0 }));
      var b = dd(g, m, w, x);
      v.push(b);
    }
  }
  return Promise.all(v).then(function() {
    d && bE(e, d);
  });
}
function _E(e, t, r, n, i, a) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), i === void 0 && (i = 1);
  var o = [], s = (e.variantChildren.size - 1) * n, u = i === 1 ? function(c) {
    return c === void 0 && (c = 0), c * n;
  } : function(c) {
    return c === void 0 && (c = 0), s - c * n;
  };
  return Array.from(e.variantChildren).sort(OE).forEach(function(c, l) {
    o.push(ul(c, t, Z(Z({}, a), { delay: r + u(l) })).then(function() {
      return c.notifyAnimationComplete(t);
    }));
  }), Promise.all(o);
}
function OE(e, t) {
  return e.sortNodePosition(t);
}
function EE(e, t) {
  var r = e.protectedKeys, n = e.needsAnimating, i = r.hasOwnProperty(t) && n[t] !== !0;
  return n[t] = !1, i;
}
var vd = [
  Ve.Animate,
  Ve.InView,
  Ve.Focus,
  Ve.Hover,
  Ve.Tap,
  Ve.Drag,
  Ve.Exit
], TE = ur([], it(vd), !1).reverse(), PE = vd.length;
function CE(e) {
  return function(t) {
    return Promise.all(t.map(function(r) {
      var n = r.animation, i = r.options;
      return AE(e, n, i);
    }));
  };
}
function ME(e) {
  var t = CE(e), r = NE(), n = {}, i = !0, a = function(l, f) {
    var d = eu(e, f);
    if (d) {
      d.transition;
      var p = d.transitionEnd, v = Ht(d, ["transition", "transitionEnd"]);
      l = Z(Z(Z({}, l), v), p);
    }
    return l;
  };
  function o(l) {
    return n[l] !== void 0;
  }
  function s(l) {
    t = l(e);
  }
  function u(l, f) {
    for (var d, p = e.getProps(), v = e.getVariantContext(!0) || {}, h = [], g = /* @__PURE__ */ new Set(), m = {}, w = 1 / 0, x = function(A) {
      var _ = TE[A], E = r[_], M = (d = p[_]) !== null && d !== void 0 ? d : v[_], C = Zt(M), k = _ === f ? E.isActive : null;
      k === !1 && (w = A);
      var N = M === v[_] && M !== p[_] && C;
      if (N && i && e.manuallyAnimateOnMount && (N = !1), E.protectedKeys = Z({}, m), !E.isActive && k === null || !M && !E.prevProp || td(M) || typeof M == "boolean")
        return "continue";
      var j = kE(E.prevProp, M), L = j || _ === f && E.isActive && !N && C || A > w && C, R = Array.isArray(M) ? M : [M], Q = R.reduce(a, {});
      k === !1 && (Q = {});
      var K = E.prevResolvedValues, te = K === void 0 ? {} : K, I = Z(Z({}, te), Q), V = function(W) {
        L = !0, g.delete(W), E.needsAnimating[W] = !0;
      };
      for (var X in I) {
        var H = Q[X], $ = te[X];
        m.hasOwnProperty(X) || (H !== $ ? ca(H) && ca($) ? !U1(H, $) || j ? V(X) : E.protectedKeys[X] = !0 : H !== void 0 ? V(X) : g.add(X) : H !== void 0 && g.has(X) ? V(X) : E.protectedKeys[X] = !0);
      }
      E.prevProp = M, E.prevResolvedValues = Q, E.isActive && (m = Z(Z({}, m), Q)), i && e.blockInitialAnimation && (L = !1), L && !N && h.push.apply(h, ur([], it(R.map(function(W) {
        return {
          animation: W,
          options: Z({ type: _ }, l)
        };
      })), !1));
    }, b = 0; b < PE; b++)
      x(b);
    if (n = Z({}, m), g.size) {
      var y = {};
      g.forEach(function(A) {
        var _ = e.getBaseTarget(A);
        _ !== void 0 && (y[A] = _);
      }), h.push({ animation: y });
    }
    var S = Boolean(h.length);
    return i && p.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), i = !1, S ? t(h) : Promise.resolve();
  }
  function c(l, f, d) {
    var p;
    if (r[l].isActive === f)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach(function(g) {
      var m;
      return (m = g.animationState) === null || m === void 0 ? void 0 : m.setActive(l, f);
    }), r[l].isActive = f;
    var v = u(d, l);
    for (var h in r)
      r[h].protectedKeys = {};
    return v;
  }
  return {
    isAnimated: o,
    animateChanges: u,
    setActive: c,
    setAnimateFunction: s,
    getState: function() {
      return r;
    }
  };
}
function kE(e, t) {
  return typeof t == "string" ? t !== e : Fm(t) ? !U1(t, e) : !1;
}
function vn(e) {
  return e === void 0 && (e = !1), {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function NE() {
  var e;
  return e = {}, e[Ve.Animate] = vn(!0), e[Ve.InView] = vn(), e[Ve.Hover] = vn(), e[Ve.Tap] = vn(), e[Ve.Drag] = vn(), e[Ve.Focus] = vn(), e[Ve.Exit] = vn(), e;
}
var RE = {
  animation: qr(function(e) {
    var t = e.visualElement, r = e.animate;
    t.animationState || (t.animationState = ME(t)), td(r) && Lt(function() {
      return r.subscribe(t);
    }, [r]);
  }),
  exit: qr(function(e) {
    var t = e.custom, r = e.visualElement, n = it(B1(), 2), i = n[0], a = n[1], o = et(Qs);
    Lt(function() {
      var s, u;
      r.isPresent = i;
      var c = (s = r.animationState) === null || s === void 0 ? void 0 : s.setActive(Ve.Exit, !i, { custom: (u = o == null ? void 0 : o.custom) !== null && u !== void 0 ? u : t });
      !i && (c == null || c.then(a));
    }, [i]);
  })
}, H1 = function() {
  function e(t, r, n) {
    var i = this, a = n === void 0 ? {} : n, o = a.transformPagePoint;
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
      if (!!(i.lastMoveEvent && i.lastMoveEventInfo)) {
        var d = rc(i.lastMoveEventInfo, i.history), p = i.startEvent !== null, v = $1(d.offset, { x: 0, y: 0 }) >= 3;
        if (!(!p && !v)) {
          var h = d.point, g = Xo().timestamp;
          i.history.push(Z(Z({}, h), { timestamp: g }));
          var m = i.handlers, w = m.onStart, x = m.onMove;
          p || (w && w(i.lastMoveEvent, d), i.startEvent = i.lastMoveEvent), x && x(i.lastMoveEvent, d);
        }
      }
    }, this.handlePointerMove = function(d, p) {
      if (i.lastMoveEvent = d, i.lastMoveEventInfo = tc(p, i.transformPagePoint), f1(d) && d.buttons === 0) {
        i.handlePointerUp(d, p);
        return;
      }
      lr.update(i.updatePoint, !0);
    }, this.handlePointerUp = function(d, p) {
      i.end();
      var v = i.handlers, h = v.onEnd, g = v.onSessionEnd, m = rc(tc(p, i.transformPagePoint), i.history);
      i.startEvent && h && h(d, m), g && g(d, m);
    }, !(d1(t) && t.touches.length > 1)) {
      this.handlers = r, this.transformPagePoint = o;
      var s = rd(t), u = tc(s, this.transformPagePoint), c = u.point, l = Xo().timestamp;
      this.history = [Z(Z({}, c), { timestamp: l })];
      var f = r.onSessionStart;
      f && f(t, rc(u, this.history)), this.removeListeners = iu(Xn(window, "pointermove", this.handlePointerMove), Xn(window, "pointerup", this.handlePointerUp), Xn(window, "pointercancel", this.handlePointerUp));
    }
  }
  return e.prototype.updateHandlers = function(t) {
    this.handlers = t;
  }, e.prototype.end = function() {
    this.removeListeners && this.removeListeners(), ni.update(this.updatePoint);
  }, e;
}();
function tc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Np(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function rc(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: Np(r, G1(t)),
    offset: Np(r, IE(t)),
    velocity: $E(t, 0.1)
  };
}
function IE(e) {
  return e[0];
}
function G1(e) {
  return e[e.length - 1];
}
function $E(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  for (var r = e.length - 1, n = null, i = G1(e); r >= 0 && (n = e[r], !(i.timestamp - n.timestamp > Jo(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  var a = (i.timestamp - n.timestamp) / 1e3;
  if (a === 0)
    return { x: 0, y: 0 };
  var o = {
    x: (i.x - n.x) / a,
    y: (i.y - n.y) / a
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Mr(e) {
  return e.max - e.min;
}
function Rp(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), $1(e, t) < r;
}
function Ip(e, t, r, n) {
  n === void 0 && (n = 0.5), e.origin = n, e.originPoint = Ye(t.min, t.max, e.origin), e.scale = Mr(r) / Mr(t), (Rp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ye(r.min, r.max, e.origin) - e.originPoint, (Rp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Qi(e, t, r, n) {
  Ip(e.x, t.x, r.x, n == null ? void 0 : n.originX), Ip(e.y, t.y, r.y, n == null ? void 0 : n.originY);
}
function $p(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Mr(t);
}
function LE(e, t, r) {
  $p(e.x, t.x, r.x), $p(e.y, t.y, r.y);
}
function Lp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Mr(t);
}
function ea(e, t, r) {
  Lp(e.x, t.x, r.x), Lp(e.y, t.y, r.y);
}
function jE(e, t, r) {
  var n = t.min, i = t.max;
  return n !== void 0 && e < n ? e = r ? Ye(n, e, r.min) : Math.max(e, n) : i !== void 0 && e > i && (e = r ? Ye(i, e, r.max) : Math.min(e, i)), e;
}
function jp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function DE(e, t) {
  var r = t.top, n = t.left, i = t.bottom, a = t.right;
  return {
    x: jp(e.x, n, a),
    y: jp(e.y, r, i)
  };
}
function Dp(e, t) {
  var r, n = t.min - e.min, i = t.max - e.max;
  return t.max - t.min < e.max - e.min && (r = it([i, n], 2), n = r[0], i = r[1]), { min: n, max: i };
}
function FE(e, t) {
  return {
    x: Dp(e.x, t.x),
    y: Dp(e.y, t.y)
  };
}
function VE(e, t) {
  var r = 0.5, n = Mr(e), i = Mr(t);
  return i > n ? r = la(t.min, t.max - n, e.min) : n > i && (r = la(e.min, e.max - i, t.min)), Yo(0, 1, r);
}
function BE(e, t) {
  var r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
var cl = 0.35;
function UE(e) {
  return e === void 0 && (e = cl), e === !1 ? e = 0 : e === !0 && (e = cl), {
    x: Fp(e, "left", "right"),
    y: Fp(e, "top", "bottom")
  };
}
function Fp(e, t, r) {
  return {
    min: Vp(e, t),
    max: Vp(e, r)
  };
}
function Vp(e, t) {
  var r;
  return typeof e == "number" ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
var Bp = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
}, ta = function() {
  return {
    x: Bp(),
    y: Bp()
  };
}, Up = function() {
  return { min: 0, max: 0 };
}, pt = function() {
  return {
    x: Up(),
    y: Up()
  };
};
function ir(e) {
  return [e("x"), e("y")];
}
function Y1(e) {
  var t = e.top, r = e.left, n = e.right, i = e.bottom;
  return {
    x: { min: r, max: n },
    y: { min: t, max: i }
  };
}
function zE(e) {
  var t = e.x, r = e.y;
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function WE(e, t) {
  if (!t)
    return e;
  var r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function nc(e) {
  return e === void 0 || e === 1;
}
function K1(e) {
  var t = e.scale, r = e.scaleX, n = e.scaleY;
  return !nc(t) || !nc(r) || !nc(n);
}
function jr(e) {
  return K1(e) || zp(e.x) || zp(e.y) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function zp(e) {
  return e && e !== "0%";
}
function Qo(e, t, r) {
  var n = e - r, i = t * n;
  return r + i;
}
function Wp(e, t, r, n, i) {
  return i !== void 0 && (e = Qo(e, i, n)), Qo(e, r, n) + t;
}
function ll(e, t, r, n, i) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), e.min = Wp(e.min, t, r, n, i), e.max = Wp(e.max, t, r, n, i);
}
function X1(e, t) {
  var r = t.x, n = t.y;
  ll(e.x, r.translate, r.scale, r.originPoint), ll(e.y, n.translate, n.scale, n.originPoint);
}
function qE(e, t, r, n) {
  var i, a;
  n === void 0 && (n = !1);
  var o = r.length;
  if (!!o) {
    t.x = t.y = 1;
    for (var s, u, c = 0; c < o; c++)
      s = r[c], u = s.projectionDelta, ((a = (i = s.instance) === null || i === void 0 ? void 0 : i.style) === null || a === void 0 ? void 0 : a.display) !== "contents" && (n && s.options.layoutScroll && s.scroll && s !== s.root && Hn(e, { x: -s.scroll.x, y: -s.scroll.y }), u && (t.x *= u.x.scale, t.y *= u.y.scale, X1(e, u)), n && jr(s.latestValues) && Hn(e, s.latestValues));
  }
}
function Br(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function qp(e, t, r) {
  var n = it(r, 3), i = n[0], a = n[1], o = n[2], s = t[o] !== void 0 ? t[o] : 0.5, u = Ye(e.min, e.max, s);
  ll(e, t[i], t[a], u, t.scale);
}
var HE = ["x", "scaleX", "originX"], GE = ["y", "scaleY", "originY"];
function Hn(e, t) {
  qp(e.x, t, HE), qp(e.y, t, GE);
}
function Z1(e, t) {
  return Y1(WE(e.getBoundingClientRect(), t));
}
function YE(e, t, r) {
  var n = Z1(e, r), i = t.scroll;
  return i && (Br(n.x, i.x), Br(n.y, i.y)), n;
}
var KE = /* @__PURE__ */ new WeakMap(), XE = function() {
  function e(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = pt(), this.visualElement = t;
  }
  return e.prototype.start = function(t, r) {
    var n = this, i = r === void 0 ? {} : r, a = i.snapToCursor, o = a === void 0 ? !1 : a;
    if (this.visualElement.isPresent !== !1) {
      var s = function(f) {
        n.stopAnimation(), o && n.snapToCursor(rd(f, "page").point);
      }, u = function(f, d) {
        var p, v = n.getProps(), h = v.drag, g = v.dragPropagation, m = v.onDragStart;
        h && !g && (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = g1(h), !n.openGlobalLock) || (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), ir(function(w) {
          var x, b, y = n.getAxisMotionValue(w).get() || 0;
          if (cr.test(y)) {
            var S = (b = (x = n.visualElement.projection) === null || x === void 0 ? void 0 : x.layout) === null || b === void 0 ? void 0 : b.actual[w];
            if (S) {
              var A = Mr(S);
              y = A * (parseFloat(y) / 100);
            }
          }
          n.originPoint[w] = y;
        }), m == null || m(f, d), (p = n.visualElement.animationState) === null || p === void 0 || p.setActive(Ve.Drag, !0));
      }, c = function(f, d) {
        var p = n.getProps(), v = p.dragPropagation, h = p.dragDirectionLock, g = p.onDirectionLock, m = p.onDrag;
        if (!(!v && !n.openGlobalLock)) {
          var w = d.offset;
          if (h && n.currentDirection === null) {
            n.currentDirection = ZE(w), n.currentDirection !== null && (g == null || g(n.currentDirection));
            return;
          }
          n.updateAxis("x", d.point, w), n.updateAxis("y", d.point, w), n.visualElement.syncRender(), m == null || m(f, d);
        }
      }, l = function(f, d) {
        return n.stop(f, d);
      };
      this.panSession = new H1(t, {
        onSessionStart: s,
        onStart: u,
        onMove: c,
        onSessionEnd: l
      }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    }
  }, e.prototype.stop = function(t, r) {
    var n = this.isDragging;
    if (this.cancel(), !!n) {
      var i = r.velocity;
      this.startAnimation(i);
      var a = this.getProps().onDragEnd;
      a == null || a(t, r);
    }
  }, e.prototype.cancel = function() {
    var t, r;
    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
    var n = this.getProps().dragPropagation;
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (r = this.visualElement.animationState) === null || r === void 0 || r.setActive(Ve.Drag, !1);
  }, e.prototype.updateAxis = function(t, r, n) {
    var i = this.getProps().drag;
    if (!(!n || !Qa(t, i, this.currentDirection))) {
      var a = this.getAxisMotionValue(t), o = this.originPoint[t] + n[t];
      this.constraints && this.constraints[t] && (o = jE(o, this.constraints[t], this.elastic[t])), a.set(o);
    }
  }, e.prototype.resolveConstraints = function() {
    var t = this, r = this.getProps(), n = r.dragConstraints, i = r.dragElastic, a = (this.visualElement.projection || {}).layout, o = this.constraints;
    n && qn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && a ? this.constraints = DE(a.actual, n) : this.constraints = !1, this.elastic = UE(i), o !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && ir(function(s) {
      t.getAxisMotionValue(s) && (t.constraints[s] = BE(a.actual[s], t.constraints[s]));
    });
  }, e.prototype.resolveRefConstraints = function() {
    var t = this.getProps(), r = t.dragConstraints, n = t.onMeasureDragConstraints;
    if (!r || !qn(r))
      return !1;
    var i = r.current;
    Wt(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var a = this.visualElement.projection;
    if (!a || !a.layout)
      return !1;
    var o = YE(i, a.root, this.visualElement.getTransformPagePoint()), s = FE(a.layout.actual, o);
    if (n) {
      var u = n(zE(s));
      this.hasMutatedConstraints = !!u, u && (s = Y1(u));
    }
    return s;
  }, e.prototype.startAnimation = function(t) {
    var r = this, n = this.getProps(), i = n.drag, a = n.dragMomentum, o = n.dragElastic, s = n.dragTransition, u = n.dragSnapToOrigin, c = n.onDragTransitionEnd, l = this.constraints || {}, f = ir(function(d) {
      var p;
      if (!!Qa(d, i, r.currentDirection)) {
        var v = (p = l == null ? void 0 : l[d]) !== null && p !== void 0 ? p : {};
        u && (v = { min: 0, max: 0 });
        var h = o ? 200 : 1e6, g = o ? 40 : 1e7, m = Z(Z({ type: "inertia", velocity: a ? t[d] : 0, bounceStiffness: h, bounceDamping: g, timeConstant: 750, restDelta: 1, restSpeed: 10 }, s), v);
        return r.startAxisValueAnimation(d, m);
      }
    });
    return Promise.all(f).then(c);
  }, e.prototype.startAxisValueAnimation = function(t, r) {
    var n = this.getAxisMotionValue(t);
    return dd(t, n, 0, r);
  }, e.prototype.stopAnimation = function() {
    var t = this;
    ir(function(r) {
      return t.getAxisMotionValue(r).stop();
    });
  }, e.prototype.getAxisMotionValue = function(t) {
    var r, n, i = "_drag" + t.toUpperCase(), a = this.visualElement.getProps()[i];
    return a || this.visualElement.getValue(t, (n = (r = this.visualElement.getProps().initial) === null || r === void 0 ? void 0 : r[t]) !== null && n !== void 0 ? n : 0);
  }, e.prototype.snapToCursor = function(t) {
    var r = this;
    ir(function(n) {
      var i = r.getProps().drag;
      if (!!Qa(n, i, r.currentDirection)) {
        var a = r.visualElement.projection, o = r.getAxisMotionValue(n);
        if (a && a.layout) {
          var s = a.layout.actual[n], u = s.min, c = s.max;
          o.set(t[n] - Ye(u, c, 0.5));
        }
      }
    });
  }, e.prototype.scalePositionWithinConstraints = function() {
    var t = this, r, n = this.getProps(), i = n.drag, a = n.dragConstraints, o = this.visualElement.projection;
    if (!(!qn(a) || !o || !this.constraints)) {
      this.stopAnimation();
      var s = { x: 0, y: 0 };
      ir(function(c) {
        var l = t.getAxisMotionValue(c);
        if (l) {
          var f = l.get();
          s[c] = VE({ min: f, max: f }, t.constraints[c]);
        }
      });
      var u = this.visualElement.getProps().transformTemplate;
      this.visualElement.getInstance().style.transform = u ? u({}, "") : "none", (r = o.root) === null || r === void 0 || r.updateScroll(), o.updateLayout(), this.resolveConstraints(), ir(function(c) {
        if (!!Qa(c, i, null)) {
          var l = t.getAxisMotionValue(c), f = t.constraints[c], d = f.min, p = f.max;
          l.set(Ye(d, p, s[c]));
        }
      });
    }
  }, e.prototype.addListeners = function() {
    var t = this, r;
    KE.set(this.visualElement, this);
    var n = this.visualElement.getInstance(), i = Xn(n, "pointerdown", function(c) {
      var l = t.getProps(), f = l.drag, d = l.dragListener, p = d === void 0 ? !0 : d;
      f && p && t.start(c);
    }), a = function() {
      var c = t.getProps().dragConstraints;
      qn(c) && (t.constraints = t.resolveRefConstraints());
    }, o = this.visualElement.projection, s = o.addEventListener("measure", a);
    o && !o.layout && ((r = o.root) === null || r === void 0 || r.updateScroll(), o.updateLayout()), a();
    var u = nu(window, "resize", function() {
      return t.scalePositionWithinConstraints();
    });
    return o.addEventListener("didUpdate", function(c) {
      var l = c.delta, f = c.hasLayoutChanged;
      t.isDragging && f && (ir(function(d) {
        var p = t.getAxisMotionValue(d);
        !p || (t.originPoint[d] += l[d].translate, p.set(p.get() + l[d].translate));
      }), t.visualElement.syncRender());
    }), function() {
      u(), i(), s();
    };
  }, e.prototype.getProps = function() {
    var t = this.visualElement.getProps(), r = t.drag, n = r === void 0 ? !1 : r, i = t.dragDirectionLock, a = i === void 0 ? !1 : i, o = t.dragPropagation, s = o === void 0 ? !1 : o, u = t.dragConstraints, c = u === void 0 ? !1 : u, l = t.dragElastic, f = l === void 0 ? cl : l, d = t.dragMomentum, p = d === void 0 ? !0 : d;
    return Z(Z({}, t), { drag: n, dragDirectionLock: a, dragPropagation: s, dragConstraints: c, dragElastic: f, dragMomentum: p });
  }, e;
}();
function Qa(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function ZE(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
function JE(e) {
  var t = e.dragControls, r = e.visualElement, n = ru(function() {
    return new XE(r);
  });
  Lt(function() {
    return t && t.subscribe(n);
  }, [n, t]), Lt(function() {
    return n.addListeners();
  }, [n]);
}
function QE(e) {
  var t = e.onPan, r = e.onPanStart, n = e.onPanEnd, i = e.onPanSessionStart, a = e.visualElement, o = t || r || n || i, s = ri(null), u = et(Yf).transformPagePoint, c = {
    onSessionStart: i,
    onStart: r,
    onMove: t,
    onEnd: function(f, d) {
      s.current = null, n && n(f, d);
    }
  };
  Lt(function() {
    s.current !== null && s.current.updateHandlers(c);
  });
  function l(f) {
    s.current = new H1(f, c, {
      transformPagePoint: u
    });
  }
  Go(a, "pointerdown", o && l), b1(function() {
    return s.current && s.current.end();
  });
}
var eT = {
  pan: qr(QE),
  drag: qr(JE)
}, eo = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function tT() {
  var e = eo.map(function() {
    return new Ji();
  }), t = {}, r = {
    clearAllListeners: function() {
      return e.forEach(function(n) {
        return n.clear();
      });
    },
    updatePropListeners: function(n) {
      eo.forEach(function(i) {
        var a, o = "on" + i, s = n[o];
        (a = t[i]) === null || a === void 0 || a.call(t), s && (t[i] = r[o](s));
      });
    }
  };
  return e.forEach(function(n, i) {
    r["on" + eo[i]] = function(a) {
      return n.add(a);
    }, r["notify" + eo[i]] = function() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      return n.notify.apply(n, ur([], it(a), !1));
    };
  }), r;
}
function rT(e, t, r) {
  var n;
  for (var i in t) {
    var a = t[i], o = r[i];
    if (Pr(a))
      e.addValue(i, a), process.env.NODE_ENV === "development" && V1(a.version === "6.5.1", "Attempting to mix Framer Motion versions ".concat(a.version, " with 6.5.1 may not work as expected."));
    else if (Pr(o))
      e.addValue(i, ii(a));
    else if (o !== a)
      if (e.hasValue(i)) {
        var s = e.getValue(i);
        !s.hasAnimated && s.set(a);
      } else
        e.addValue(i, ii((n = e.getStaticValue(i)) !== null && n !== void 0 ? n : a));
  }
  for (var i in r)
    t[i] === void 0 && e.removeValue(i);
  return t;
}
var J1 = function(e) {
  var t = e.treeType, r = t === void 0 ? "" : t, n = e.build, i = e.getBaseTarget, a = e.makeTargetAnimatable, o = e.measureViewportBox, s = e.render, u = e.readValueFromInstance, c = e.removeValueFromRenderState, l = e.sortNodePosition, f = e.scrapeMotionValuesFromProps;
  return function(d, p) {
    var v = d.parent, h = d.props, g = d.presenceId, m = d.blockInitialAnimation, w = d.visualState, x = d.shouldReduceMotion;
    p === void 0 && (p = {});
    var b = !1, y = w.latestValues, S = w.renderState, A, _ = tT(), E = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), C = {}, k = Z({}, y), N;
    function j() {
      !A || !b || (L(), s(A, S, h.style, H.projection));
    }
    function L() {
      n(H, S, y, p, h);
    }
    function R() {
      _.notifyUpdate(y);
    }
    function Q($, W) {
      var ee = W.onChange(function(J) {
        y[$] = J, h.onUpdate && lr.update(R, !1, !0);
      }), se = W.onRenderRequest(H.scheduleRender);
      M.set($, function() {
        ee(), se();
      });
    }
    var K = f(h);
    for (var te in K) {
      var I = K[te];
      y[te] !== void 0 && Pr(I) && I.set(y[te], !1);
    }
    var V = tu(h), X = Bm(h), H = Z(Z({
      treeType: r,
      current: null,
      depth: v ? v.depth + 1 : 0,
      parent: v,
      children: /* @__PURE__ */ new Set(),
      presenceId: g,
      shouldReduceMotion: x,
      variantChildren: X ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(v == null ? void 0 : v.isMounted()),
      blockInitialAnimation: m,
      isMounted: function() {
        return Boolean(A);
      },
      mount: function($) {
        b = !0, A = H.current = $, H.projection && H.projection.mount($), X && v && !V && (N = v == null ? void 0 : v.addVariantChild(H)), E.forEach(function(W, ee) {
          return Q(ee, W);
        }), v == null || v.children.add(H), H.setProps(h);
      },
      unmount: function() {
        var $;
        ($ = H.projection) === null || $ === void 0 || $.unmount(), ni.update(R), ni.render(j), M.forEach(function(W) {
          return W();
        }), N == null || N(), v == null || v.children.delete(H), _.clearAllListeners(), A = void 0, b = !1;
      },
      addVariantChild: function($) {
        var W, ee = H.getClosestVariantNode();
        if (ee)
          return (W = ee.variantChildren) === null || W === void 0 || W.add($), function() {
            return ee.variantChildren.delete($);
          };
      },
      sortNodePosition: function($) {
        return !l || r !== $.treeType ? 0 : l(H.getInstance(), $.getInstance());
      },
      getClosestVariantNode: function() {
        return X ? H : v == null ? void 0 : v.getClosestVariantNode();
      },
      getLayoutId: function() {
        return h.layoutId;
      },
      getInstance: function() {
        return A;
      },
      getStaticValue: function($) {
        return y[$];
      },
      setStaticValue: function($, W) {
        return y[$] = W;
      },
      getLatestValues: function() {
        return y;
      },
      setVisibility: function($) {
        H.isVisible !== $ && (H.isVisible = $, H.scheduleRender());
      },
      makeTargetAnimatable: function($, W) {
        return W === void 0 && (W = !0), a(H, $, h, W);
      },
      measureViewportBox: function() {
        return o(A, h);
      },
      addValue: function($, W) {
        H.hasValue($) && H.removeValue($), E.set($, W), y[$] = W.get(), Q($, W);
      },
      removeValue: function($) {
        var W;
        E.delete($), (W = M.get($)) === null || W === void 0 || W(), M.delete($), delete y[$], c($, S);
      },
      hasValue: function($) {
        return E.has($);
      },
      getValue: function($, W) {
        var ee = E.get($);
        return ee === void 0 && W !== void 0 && (ee = ii(W), H.addValue($, ee)), ee;
      },
      forEachValue: function($) {
        return E.forEach($);
      },
      readValue: function($) {
        var W;
        return (W = y[$]) !== null && W !== void 0 ? W : u(A, $, p);
      },
      setBaseTarget: function($, W) {
        k[$] = W;
      },
      getBaseTarget: function($) {
        if (i) {
          var W = i(h, $);
          if (W !== void 0 && !Pr(W))
            return W;
        }
        return k[$];
      }
    }, _), {
      build: function() {
        return L(), S;
      },
      scheduleRender: function() {
        lr.render(j, !1, !0);
      },
      syncRender: j,
      setProps: function($) {
        ($.transformTemplate || h.transformTemplate) && H.scheduleRender(), h = $, _.updatePropListeners($), C = rT(H, f(h), C);
      },
      getProps: function() {
        return h;
      },
      getVariant: function($) {
        var W;
        return (W = h.variants) === null || W === void 0 ? void 0 : W[$];
      },
      getDefaultTransition: function() {
        return h.transition;
      },
      getTransformPagePoint: function() {
        return h.transformPagePoint;
      },
      getVariantContext: function($) {
        if ($ === void 0 && ($ = !1), $)
          return v == null ? void 0 : v.getVariantContext();
        if (!V) {
          var W = (v == null ? void 0 : v.getVariantContext()) || {};
          return h.initial !== void 0 && (W.initial = h.initial), W;
        }
        for (var ee = {}, se = 0; se < nT; se++) {
          var J = Q1[se], D = h[J];
          (Zt(D) || D === !1) && (ee[J] = D);
        }
        return ee;
      }
    });
    return H;
  };
}, Q1 = ur(["initial"], it(vd), !1), nT = Q1.length;
function fl(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var eb = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function iT(e) {
  var t = eb.exec(e);
  if (!t)
    return [,];
  var r = it(t, 3), n = r[1], i = r[2];
  return [n, i];
}
var aT = 4;
function dl(e, t, r) {
  r === void 0 && (r = 1), Wt(r <= aT, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
  var n = it(iT(e), 2), i = n[0], a = n[1];
  if (!!i) {
    var o = window.getComputedStyle(t).getPropertyValue(i);
    return o ? o.trim() : fl(a) ? dl(a, t, r + 1) : a;
  }
}
function oT(e, t, r) {
  var n, i = Ht(t, []), a = e.getInstance();
  if (!(a instanceof Element))
    return { target: i, transitionEnd: r };
  r && (r = Z({}, r)), e.forEachValue(function(c) {
    var l = c.get();
    if (!!fl(l)) {
      var f = dl(l, a);
      f && c.set(f);
    }
  });
  for (var o in i) {
    var s = i[o];
    if (!!fl(s)) {
      var u = dl(s, a);
      !u || (i[o] = u, r && ((n = r[o]) !== null && n !== void 0 || (r[o] = s)));
    }
  }
  return { target: i, transitionEnd: r };
}
var sT = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), tb = function(e) {
  return sT.has(e);
}, uT = function(e) {
  return Object.keys(e).some(tb);
}, rb = function(e, t) {
  e.set(t, !1), e.set(t);
}, to = function(e) {
  return e === Mn || e === fe;
}, Hp;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(Hp || (Hp = {}));
var Gp = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, Yp = function(e, t) {
  return function(r, n) {
    var i = n.transform;
    if (i === "none" || !i)
      return 0;
    var a = i.match(/^matrix3d\((.+)\)$/);
    if (a)
      return Gp(a[1], t);
    var o = i.match(/^matrix\((.+)\)$/);
    return o ? Gp(o[1], e) : 0;
  };
}, cT = /* @__PURE__ */ new Set(["x", "y", "z"]), lT = sa.filter(function(e) {
  return !cT.has(e);
});
function fT(e) {
  var t = [];
  return lT.forEach(function(r) {
    var n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var Kp = {
  width: function(e, t) {
    var r = e.x, n = t.paddingLeft, i = n === void 0 ? "0" : n, a = t.paddingRight, o = a === void 0 ? "0" : a;
    return r.max - r.min - parseFloat(i) - parseFloat(o);
  },
  height: function(e, t) {
    var r = e.y, n = t.paddingTop, i = n === void 0 ? "0" : n, a = t.paddingBottom, o = a === void 0 ? "0" : a;
    return r.max - r.min - parseFloat(i) - parseFloat(o);
  },
  top: function(e, t) {
    var r = t.top;
    return parseFloat(r);
  },
  left: function(e, t) {
    var r = t.left;
    return parseFloat(r);
  },
  bottom: function(e, t) {
    var r = e.y, n = t.top;
    return parseFloat(n) + (r.max - r.min);
  },
  right: function(e, t) {
    var r = e.x, n = t.left;
    return parseFloat(n) + (r.max - r.min);
  },
  x: Yp(4, 13),
  y: Yp(5, 14)
}, dT = function(e, t, r) {
  var n = t.measureViewportBox(), i = t.getInstance(), a = getComputedStyle(i), o = a.display, s = {};
  o === "none" && t.setStaticValue("display", e.display || "block"), r.forEach(function(c) {
    s[c] = Kp[c](n, a);
  }), t.syncRender();
  var u = t.measureViewportBox();
  return r.forEach(function(c) {
    var l = t.getValue(c);
    rb(l, s[c]), e[c] = Kp[c](u, a);
  }), e;
}, hT = function(e, t, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {}), t = Z({}, t), n = Z({}, n);
  var i = Object.keys(t).filter(tb), a = [], o = !1, s = [];
  if (i.forEach(function(l) {
    var f = e.getValue(l);
    if (!!e.hasValue(l)) {
      var d = r[l], p = Ii(d), v = t[l], h;
      if (ca(v)) {
        var g = v.length, m = v[0] === null ? 1 : 0;
        d = v[m], p = Ii(d);
        for (var w = m; w < g; w++)
          h ? Wt(Ii(v[w]) === h, "All keyframes must be of the same type") : (h = Ii(v[w]), Wt(h === p || to(p) && to(h), "Keyframes must be of the same dimension as the current value"));
      } else
        h = Ii(v);
      if (p !== h)
        if (to(p) && to(h)) {
          var x = f.get();
          typeof x == "string" && f.set(parseFloat(x)), typeof v == "string" ? t[l] = parseFloat(v) : Array.isArray(v) && h === fe && (t[l] = v.map(parseFloat));
        } else
          (p == null ? void 0 : p.transform) && (h == null ? void 0 : h.transform) && (d === 0 || v === 0) ? d === 0 ? f.set(h.transform(d)) : t[l] = p.transform(v) : (o || (a = fT(e), o = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], rb(f, v));
    }
  }), s.length) {
    var u = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = dT(t, e, s);
    return a.length && a.forEach(function(l) {
      var f = it(l, 2), d = f[0], p = f[1];
      e.getValue(d).set(p);
    }), e.syncRender(), u !== null && window.scrollTo({ top: u }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function pT(e, t, r, n) {
  return uT(t) ? hT(e, t, r, n) : { target: t, transitionEnd: n };
}
var vT = function(e, t, r, n) {
  var i = oT(e, t, n);
  return t = i.target, n = i.transitionEnd, pT(e, t, r, n);
};
function gT(e) {
  return window.getComputedStyle(e);
}
var nb = {
  treeType: "dom",
  readValueFromInstance: function(e, t) {
    if (Ta(t)) {
      var r = cd(t);
      return r && r.default || 0;
    } else {
      var n = gT(e);
      return (Hm(t) ? n.getPropertyValue(t) : n[t]) || 0;
    }
  },
  sortNodePosition: function(e, t) {
    return e.compareDocumentPosition(t) & 2 ? 1 : -1;
  },
  getBaseTarget: function(e, t) {
    var r;
    return (r = e.style) === null || r === void 0 ? void 0 : r[t];
  },
  measureViewportBox: function(e, t) {
    var r = t.transformPagePoint;
    return Z1(e, r);
  },
  resetTransform: function(e, t, r) {
    var n = r.transformTemplate;
    t.style.transform = n ? n({}, "") : "none", e.scheduleRender();
  },
  restoreTransform: function(e, t) {
    e.style.transform = t.style.transform;
  },
  removeValueFromRenderState: function(e, t) {
    var r = t.vars, n = t.style;
    delete r[e], delete n[e];
  },
  makeTargetAnimatable: function(e, t, r, n) {
    var i = r.transformValues;
    n === void 0 && (n = !0);
    var a = t.transition, o = t.transitionEnd, s = Ht(t, ["transition", "transitionEnd"]), u = SE(s, a || {}, e);
    if (i && (o && (o = i(o)), s && (s = i(s)), u && (u = i(u))), n) {
      xE(e, s, u);
      var c = vT(e, s, u, o);
      o = c.transitionEnd, s = c.target;
    }
    return Z({ transition: a, transitionEnd: o }, s);
  },
  scrapeMotionValuesFromProps: ed,
  build: function(e, t, r, n, i) {
    e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"), Zf(t, r, n, i.transformTemplate);
  },
  render: a1
}, yT = J1(nb), mT = J1(Z(Z({}, nb), { getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var r;
  return Ta(t) ? ((r = cd(t)) === null || r === void 0 ? void 0 : r.default) || 0 : (t = o1.has(t) ? t : i1(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: u1, build: function(e, t, r, n, i) {
  Qf(t, r, n, i.transformTemplate);
}, render: s1 })), bT = function(e, t) {
  return Kf(e) ? mT(t, { enableHardwareAcceleration: !1 }) : yT(t, { enableHardwareAcceleration: !0 });
};
function Xp(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var $i = {
  correct: function(e, t) {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (fe.test(e))
        e = parseFloat(e);
      else
        return e;
    var r = Xp(e, t.target.x), n = Xp(e, t.target.y);
    return "".concat(r, "% ").concat(n, "%");
  }
}, Zp = "_$css", xT = {
  correct: function(e, t) {
    var r = t.treeScale, n = t.projectionDelta, i = e, a = e.includes("var("), o = [];
    a && (e = e.replace(eb, function(h) {
      return o.push(h), Zp;
    }));
    var s = Cr.parse(e);
    if (s.length > 5)
      return i;
    var u = Cr.createTransformer(e), c = typeof s[0] != "number" ? 1 : 0, l = n.x.scale * r.x, f = n.y.scale * r.y;
    s[0 + c] /= l, s[1 + c] /= f;
    var d = Ye(l, f, 0.5);
    typeof s[2 + c] == "number" && (s[2 + c] /= d), typeof s[3 + c] == "number" && (s[3 + c] /= d);
    var p = u(s);
    if (a) {
      var v = 0;
      p = p.replace(Zp, function() {
        var h = o[v];
        return v++, h;
      });
    }
    return p;
  }
}, wT = function(e) {
  Im(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    var r = this, n = this.props, i = n.visualElement, a = n.layoutGroup, o = n.switchLayoutGroup, s = n.layoutId, u = i.projection;
    qA(AT), u && (a != null && a.group && a.group.add(u), (o == null ? void 0 : o.register) && s && o.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", function() {
      r.safeToRemove();
    }), u.setOptions(Z(Z({}, u.options), {
      onExitComplete: function() {
        return r.safeToRemove();
      }
    }))), Ki.hasEverUpdated = !0;
  }, t.prototype.getSnapshotBeforeUpdate = function(r) {
    var n = this, i = this.props, a = i.layoutDependency, o = i.visualElement, s = i.drag, u = i.isPresent, c = o.projection;
    return c && (c.isPresent = u, s || r.layoutDependency !== a || a === void 0 ? c.willUpdate() : this.safeToRemove(), r.isPresent !== u && (u ? c.promote() : c.relegate() || lr.postRender(function() {
      var l;
      !((l = c.getStack()) === null || l === void 0) && l.members.length || n.safeToRemove();
    }))), null;
  }, t.prototype.componentDidUpdate = function() {
    var r = this.props.visualElement.projection;
    r && (r.root.didUpdate(), !r.currentAnimation && r.isLead() && this.safeToRemove());
  }, t.prototype.componentWillUnmount = function() {
    var r = this.props, n = r.visualElement, i = r.layoutGroup, a = r.switchLayoutGroup, o = n.projection;
    o && (o.scheduleCheckAfterUnmount(), i != null && i.group && i.group.remove(o), a != null && a.deregister && a.deregister(o));
  }, t.prototype.safeToRemove = function() {
    var r = this.props.safeToRemove;
    r == null || r();
  }, t.prototype.render = function() {
    return null;
  }, t;
}(me.Component);
function ST(e) {
  var t = it(B1(), 2), r = t[0], n = t[1], i = et(Um);
  return /* @__PURE__ */ O(wT, {
    ...Z({}, e, {
      layoutGroup: i,
      switchLayoutGroup: et(zm),
      isPresent: r,
      safeToRemove: n
    })
  });
}
var AT = {
  borderRadius: Z(Z({}, $i), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: $i,
  borderTopRightRadius: $i,
  borderBottomLeftRadius: $i,
  borderBottomRightRadius: $i,
  boxShadow: xT
}, _T = {
  measureLayout: ST
};
function OT(e, t, r) {
  r === void 0 && (r = {});
  var n = Pr(e) ? e : ii(e);
  return dd("", n, t, r), {
    stop: function() {
      return n.stop();
    },
    isAnimating: function() {
      return n.isAnimating();
    }
  };
}
var ib = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ET = ib.length, Jp = function(e) {
  return typeof e == "string" ? parseFloat(e) : e;
}, Qp = function(e) {
  return typeof e == "number" || fe.test(e);
};
function TT(e, t, r, n, i, a) {
  var o, s, u, c;
  i ? (e.opacity = Ye(
    0,
    (o = r.opacity) !== null && o !== void 0 ? o : 1,
    PT(n)
  ), e.opacityExit = Ye((s = t.opacity) !== null && s !== void 0 ? s : 1, 0, CT(n))) : a && (e.opacity = Ye((u = t.opacity) !== null && u !== void 0 ? u : 1, (c = r.opacity) !== null && c !== void 0 ? c : 1, n));
  for (var l = 0; l < ET; l++) {
    var f = "border".concat(ib[l], "Radius"), d = ev(t, f), p = ev(r, f);
    if (!(d === void 0 && p === void 0)) {
      d || (d = 0), p || (p = 0);
      var v = d === 0 || p === 0 || Qp(d) === Qp(p);
      v ? (e[f] = Math.max(Ye(Jp(d), Jp(p), n), 0), (cr.test(p) || cr.test(d)) && (e[f] += "%")) : e[f] = p;
    }
  }
  (t.rotate || r.rotate) && (e.rotate = Ye(t.rotate || 0, r.rotate || 0, n));
}
function ev(e, t) {
  var r;
  return (r = e[t]) !== null && r !== void 0 ? r : e.borderRadius;
}
var PT = ab(0, 0.5, sd), CT = ab(0.5, 0.95, ad);
function ab(e, t, r) {
  return function(n) {
    return n < e ? 0 : n > t ? 1 : r(la(e, t, n));
  };
}
function tv(e, t) {
  e.min = t.min, e.max = t.max;
}
function Kt(e, t) {
  tv(e.x, t.x), tv(e.y, t.y);
}
function rv(e, t, r, n, i) {
  return e -= t, e = Qo(e, 1 / r, n), i !== void 0 && (e = Qo(e, 1 / i, n)), e;
}
function MT(e, t, r, n, i, a, o) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = 0.5), a === void 0 && (a = e), o === void 0 && (o = e), cr.test(t)) {
    t = parseFloat(t);
    var s = Ye(o.min, o.max, t / 100);
    t = s - o.min;
  }
  if (typeof t == "number") {
    var u = Ye(a.min, a.max, n);
    e === a && (u -= t), e.min = rv(e.min, t, r, u, i), e.max = rv(e.max, t, r, u, i);
  }
}
function nv(e, t, r, n, i) {
  var a = it(r, 3), o = a[0], s = a[1], u = a[2];
  MT(e, t[o], t[s], t[u], t.scale, n, i);
}
var kT = ["x", "scaleX", "originX"], NT = ["y", "scaleY", "originY"];
function iv(e, t, r, n) {
  nv(e.x, t, kT, r == null ? void 0 : r.x, n == null ? void 0 : n.x), nv(e.y, t, NT, r == null ? void 0 : r.y, n == null ? void 0 : n.y);
}
function av(e) {
  return e.translate === 0 && e.scale === 1;
}
function ob(e) {
  return av(e.x) && av(e.y);
}
function sb(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
var RT = function() {
  function e() {
    this.members = [];
  }
  return e.prototype.add = function(t) {
    hd(this.members, t), t.scheduleRender();
  }, e.prototype.remove = function(t) {
    if (pd(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      var r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }, e.prototype.relegate = function(t) {
    var r = this.members.findIndex(function(o) {
      return t === o;
    });
    if (r === 0)
      return !1;
    for (var n, i = r; i >= 0; i--) {
      var a = this.members[i];
      if (a.isPresent !== !1) {
        n = a;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }, e.prototype.promote = function(t, r) {
    var n, i = this.lead;
    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
      i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, r && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues, t.snapshot.isShared = !0), !((n = t.root) === null || n === void 0) && n.isUpdating && (t.isLayoutDirty = !0);
      var a = t.options.crossfade;
      a === !1 && i.hide();
    }
  }, e.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(t) {
      var r, n, i, a, o;
      (n = (r = t.options).onExitComplete) === null || n === void 0 || n.call(r), (o = (i = t.resumingFrom) === null || i === void 0 ? void 0 : (a = i.options).onExitComplete) === null || o === void 0 || o.call(a);
    });
  }, e.prototype.scheduleRender = function() {
    this.members.forEach(function(t) {
      t.instance && t.scheduleRender(!1);
    });
  }, e.prototype.removeLeadSnapshot = function() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }, e;
}(), IT = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function ov(e, t, r) {
  var n = e.x.translate / t.x, i = e.y.translate / t.y, a = "translate3d(".concat(n, "px, ").concat(i, "px, 0) ");
  if (a += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") "), r) {
    var o = r.rotate, s = r.rotateX, u = r.rotateY;
    o && (a += "rotate(".concat(o, "deg) ")), s && (a += "rotateX(".concat(s, "deg) ")), u && (a += "rotateY(".concat(u, "deg) "));
  }
  var c = e.x.scale * t.x, l = e.y.scale * t.y;
  return a += "scale(".concat(c, ", ").concat(l, ")"), a === IT ? "none" : a;
}
var $T = function(e, t) {
  return e.depth - t.depth;
}, LT = function() {
  function e() {
    this.children = [], this.isDirty = !1;
  }
  return e.prototype.add = function(t) {
    hd(this.children, t), this.isDirty = !0;
  }, e.prototype.remove = function(t) {
    pd(this.children, t), this.isDirty = !0;
  }, e.prototype.forEach = function(t) {
    this.isDirty && this.children.sort($T), this.isDirty = !1, this.children.forEach(t);
  }, e;
}(), sv = 1e3;
function ub(e) {
  var t = e.attachResizeListener, r = e.defaultParent, n = e.measureScroll, i = e.checkIsScrollRoot, a = e.resetTransform;
  return function() {
    function o(s, u, c) {
      var l = this;
      u === void 0 && (u = {}), c === void 0 && (c = r == null ? void 0 : r()), this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = function() {
        l.isUpdating && (l.isUpdating = !1, l.clearAllSnapshots());
      }, this.updateProjection = function() {
        l.nodes.forEach(UT), l.nodes.forEach(zT);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.id = s, this.latestValues = u, this.root = c ? c.root || c : this, this.path = c ? ur(ur([], it(c.path), !1), [c], !1) : [], this.parent = c, this.depth = c ? c.depth + 1 : 0, s && this.root.registerPotentialNode(s, this);
      for (var f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new LT());
    }
    return o.prototype.addEventListener = function(s, u) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ji()), this.eventHandlers.get(s).add(u);
    }, o.prototype.notifyListeners = function(s) {
      for (var u = [], c = 1; c < arguments.length; c++)
        u[c - 1] = arguments[c];
      var l = this.eventHandlers.get(s);
      l == null || l.notify.apply(l, ur([], it(u), !1));
    }, o.prototype.hasListeners = function(s) {
      return this.eventHandlers.has(s);
    }, o.prototype.registerPotentialNode = function(s, u) {
      this.potentialNodes.set(s, u);
    }, o.prototype.mount = function(s, u) {
      var c = this, l;
      if (u === void 0 && (u = !1), !this.instance) {
        this.isSVG = s instanceof SVGElement && s.tagName !== "svg", this.instance = s;
        var f = this.options, d = f.layoutId, p = f.layout, v = f.visualElement;
        if (v && !v.getInstance() && v.mount(s), this.root.nodes.add(this), (l = this.parent) === null || l === void 0 || l.children.add(this), this.id && this.root.potentialNodes.delete(this.id), u && (p || d) && (this.isLayoutDirty = !0), t) {
          var h, g = function() {
            return c.root.updateBlockedByResize = !1;
          };
          t(s, function() {
            c.root.updateBlockedByResize = !0, clearTimeout(h), h = window.setTimeout(g, 250), Ki.hasAnimatedSinceResize && (Ki.hasAnimatedSinceResize = !1, c.nodes.forEach(BT));
          });
        }
        d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && v && (d || p) && this.addEventListener("didUpdate", function(m) {
          var w, x, b, y, S, A = m.delta, _ = m.hasLayoutChanged, E = m.hasRelativeTargetChanged, M = m.layout;
          if (c.isTreeAnimationBlocked()) {
            c.target = void 0, c.relativeTarget = void 0;
            return;
          }
          var C = (x = (w = c.options.transition) !== null && w !== void 0 ? w : v.getDefaultTransition()) !== null && x !== void 0 ? x : YT, k = v.getProps(), N = k.onLayoutAnimationStart, j = k.onLayoutAnimationComplete, L = !c.targetLayout || !sb(c.targetLayout, M) || E, R = !_ && E;
          if (((b = c.resumeFrom) === null || b === void 0 ? void 0 : b.instance) || R || _ && (L || !c.currentAnimation)) {
            c.resumeFrom && (c.resumingFrom = c.resumeFrom, c.resumingFrom.resumingFrom = void 0), c.setAnimationOrigin(A, R);
            var Q = Z(Z({}, fd(C, "layout")), { onPlay: N, onComplete: j });
            v.shouldReduceMotion && (Q.delay = 0, Q.type = !1), c.startAnimation(Q);
          } else
            !_ && c.animationProgress === 0 && c.finishAnimation(), c.isLead() && ((S = (y = c.options).onExitComplete) === null || S === void 0 || S.call(y));
          c.targetLayout = M;
        });
      }
    }, o.prototype.unmount = function() {
      var s, u;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (s = this.getStack()) === null || s === void 0 || s.remove(this), (u = this.parent) === null || u === void 0 || u.children.delete(this), this.instance = void 0, ni.preRender(this.updateProjection);
    }, o.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = !0;
    }, o.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = !1;
    }, o.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }, o.prototype.isTreeAnimationBlocked = function() {
      var s;
      return this.isAnimationBlocked || ((s = this.parent) === null || s === void 0 ? void 0 : s.isTreeAnimationBlocked()) || !1;
    }, o.prototype.startUpdate = function() {
      var s;
      this.isUpdateBlocked() || (this.isUpdating = !0, (s = this.nodes) === null || s === void 0 || s.forEach(WT));
    }, o.prototype.willUpdate = function(s) {
      var u, c, l;
      if (s === void 0 && (s = !0), this.root.isUpdateBlocked()) {
        (c = (u = this.options).onExitComplete) === null || c === void 0 || c.call(u);
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
        this.isLayoutDirty = !0;
        for (var f = 0; f < this.path.length; f++) {
          var d = this.path[f];
          d.shouldResetTransform = !0, d.updateScroll();
        }
        var p = this.options, v = p.layoutId, h = p.layout;
        if (!(v === void 0 && !h)) {
          var g = (l = this.options.visualElement) === null || l === void 0 ? void 0 : l.getProps().transformTemplate;
          this.prevTransformTemplateValue = g == null ? void 0 : g(this.latestValues, ""), this.updateSnapshot(), s && this.notifyListeners("willUpdate");
        }
      }
    }, o.prototype.didUpdate = function() {
      var s = this.isUpdateBlocked();
      if (s) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(uv);
        return;
      }
      !this.isUpdating || (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(KT), this.potentialNodes.clear()), this.nodes.forEach(VT), this.nodes.forEach(jT), this.nodes.forEach(DT), this.clearAllSnapshots(), Ju.update(), Ju.preRender(), Ju.render());
    }, o.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(FT), this.sharedNodes.forEach(qT);
    }, o.prototype.scheduleUpdateProjection = function() {
      lr.preRender(this.updateProjection, !1, !0);
    }, o.prototype.scheduleCheckAfterUnmount = function() {
      var s = this;
      lr.postRender(function() {
        s.isLayoutDirty ? s.root.didUpdate() : s.root.checkUpdateFailed();
      });
    }, o.prototype.updateSnapshot = function() {
      if (!(this.snapshot || !this.instance)) {
        var s = this.measure(), u = this.removeTransform(this.removeElementScroll(s));
        dv(u), this.snapshot = {
          measured: s,
          layout: u,
          latestValues: {}
        };
      }
    }, o.prototype.updateLayout = function() {
      var s;
      if (!!this.instance && (this.updateScroll(), !(!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))) {
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (var u = 0; u < this.path.length; u++) {
            var c = this.path[u];
            c.updateScroll();
          }
        var l = this.measure();
        dv(l);
        var f = this.layout;
        this.layout = {
          measured: l,
          actual: this.removeElementScroll(l)
        }, this.layoutCorrected = pt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), (s = this.options.visualElement) === null || s === void 0 || s.notifyLayoutMeasure(this.layout.actual, f == null ? void 0 : f.actual);
      }
    }, o.prototype.updateScroll = function() {
      this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = n(this.instance));
    }, o.prototype.resetTransform = function() {
      var s;
      if (!!a) {
        var u = this.isLayoutDirty || this.shouldResetTransform, c = this.projectionDelta && !ob(this.projectionDelta), l = (s = this.options.visualElement) === null || s === void 0 ? void 0 : s.getProps().transformTemplate, f = l == null ? void 0 : l(this.latestValues, ""), d = f !== this.prevTransformTemplateValue;
        u && (c || jr(this.latestValues) || d) && (a(this.instance, f), this.shouldResetTransform = !1, this.scheduleRender());
      }
    }, o.prototype.measure = function() {
      var s = this.options.visualElement;
      if (!s)
        return pt();
      var u = s.measureViewportBox(), c = this.root.scroll;
      return c && (Br(u.x, c.x), Br(u.y, c.y)), u;
    }, o.prototype.removeElementScroll = function(s) {
      var u = pt();
      Kt(u, s);
      for (var c = 0; c < this.path.length; c++) {
        var l = this.path[c], f = l.scroll, d = l.options, p = l.isScrollRoot;
        if (l !== this.root && f && d.layoutScroll) {
          if (p) {
            Kt(u, s);
            var v = this.root.scroll;
            v && (Br(u.x, -v.x), Br(u.y, -v.y));
          }
          Br(u.x, f.x), Br(u.y, f.y);
        }
      }
      return u;
    }, o.prototype.applyTransform = function(s, u) {
      u === void 0 && (u = !1);
      var c = pt();
      Kt(c, s);
      for (var l = 0; l < this.path.length; l++) {
        var f = this.path[l];
        !u && f.options.layoutScroll && f.scroll && f !== f.root && Hn(c, {
          x: -f.scroll.x,
          y: -f.scroll.y
        }), jr(f.latestValues) && Hn(c, f.latestValues);
      }
      return jr(this.latestValues) && Hn(c, this.latestValues), c;
    }, o.prototype.removeTransform = function(s) {
      var u, c = pt();
      Kt(c, s);
      for (var l = 0; l < this.path.length; l++) {
        var f = this.path[l];
        if (!!f.instance && !!jr(f.latestValues)) {
          K1(f.latestValues) && f.updateSnapshot();
          var d = pt(), p = f.measure();
          Kt(d, p), iv(c, f.latestValues, (u = f.snapshot) === null || u === void 0 ? void 0 : u.layout, d);
        }
      }
      return jr(this.latestValues) && iv(c, this.latestValues), c;
    }, o.prototype.setTargetDelta = function(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection();
    }, o.prototype.setOptions = function(s) {
      var u;
      this.options = Z(Z(Z({}, this.options), s), { crossfade: (u = s.crossfade) !== null && u !== void 0 ? u : !0 });
    }, o.prototype.clearMeasurements = function() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }, o.prototype.resolveTargetDelta = function() {
      var s, u = this.options, c = u.layout, l = u.layoutId;
      !this.layout || !(c || l) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = pt(), this.relativeTargetOrigin = pt(), ea(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Kt(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = pt(), this.targetWithTransforms = pt()), this.relativeTarget && this.relativeTargetOrigin && ((s = this.relativeParent) === null || s === void 0 ? void 0 : s.target) ? LE(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Kt(this.target, this.layout.actual), X1(this.target, this.targetDelta)) : Kt(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = pt(), this.relativeTargetOrigin = pt(), ea(this.relativeTargetOrigin, this.target, this.relativeParent.target), Kt(this.relativeTarget, this.relativeTargetOrigin)))));
    }, o.prototype.getClosestProjectingParent = function() {
      if (!(!this.parent || jr(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }, o.prototype.calcProjection = function() {
      var s, u = this.options, c = u.layout, l = u.layoutId;
      if (this.isTreeAnimating = Boolean(((s = this.parent) === null || s === void 0 ? void 0 : s.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !(!this.layout || !(c || l))) {
        var f = this.getLead();
        Kt(this.layoutCorrected, this.layout.actual), qE(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== f);
        var d = f.target;
        if (!!d) {
          this.projectionDelta || (this.projectionDelta = ta(), this.projectionDeltaWithTransform = ta());
          var p = this.treeScale.x, v = this.treeScale.y, h = this.projectionTransform;
          Qi(this.projectionDelta, this.layoutCorrected, d, this.latestValues), this.projectionTransform = ov(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== p || this.treeScale.y !== v) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
        }
      }
    }, o.prototype.hide = function() {
      this.isVisible = !1;
    }, o.prototype.show = function() {
      this.isVisible = !0;
    }, o.prototype.scheduleRender = function(s) {
      var u, c, l;
      s === void 0 && (s = !0), (c = (u = this.options).scheduleRender) === null || c === void 0 || c.call(u), s && ((l = this.getStack()) === null || l === void 0 || l.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }, o.prototype.setAnimationOrigin = function(s, u) {
      var c = this, l;
      u === void 0 && (u = !1);
      var f = this.snapshot, d = (f == null ? void 0 : f.latestValues) || {}, p = Z({}, this.latestValues), v = ta();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !u;
      var h = pt(), g = f == null ? void 0 : f.isShared, m = (((l = this.getStack()) === null || l === void 0 ? void 0 : l.members.length) || 0) <= 1, w = Boolean(g && !m && this.options.crossfade === !0 && !this.path.some(GT));
      this.animationProgress = 0, this.mixTargetDelta = function(x) {
        var b, y = x / 1e3;
        cv(v.x, s.x, y), cv(v.y, s.y, y), c.setTargetDelta(v), c.relativeTarget && c.relativeTargetOrigin && c.layout && ((b = c.relativeParent) === null || b === void 0 ? void 0 : b.layout) && (ea(h, c.layout.actual, c.relativeParent.layout.actual), HT(c.relativeTarget, c.relativeTargetOrigin, h, y)), g && (c.animationValues = p, TT(p, d, c.latestValues, y, w, m)), c.root.scheduleUpdateProjection(), c.scheduleRender(), c.animationProgress = y;
      }, this.mixTargetDelta(0);
    }, o.prototype.startAnimation = function(s) {
      var u = this, c, l;
      this.notifyListeners("animationStart"), (c = this.currentAnimation) === null || c === void 0 || c.stop(), this.resumingFrom && ((l = this.resumingFrom.currentAnimation) === null || l === void 0 || l.stop()), this.pendingAnimation && (ni.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = lr.update(function() {
        Ki.hasAnimatedSinceResize = !0, u.currentAnimation = OT(0, sv, Z(Z({}, s), { onUpdate: function(f) {
          var d;
          u.mixTargetDelta(f), (d = s.onUpdate) === null || d === void 0 || d.call(s, f);
        }, onComplete: function() {
          var f;
          (f = s.onComplete) === null || f === void 0 || f.call(s), u.completeAnimation();
        } })), u.resumingFrom && (u.resumingFrom.currentAnimation = u.currentAnimation), u.pendingAnimation = void 0;
      });
    }, o.prototype.completeAnimation = function() {
      var s;
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (s = this.getStack()) === null || s === void 0 || s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }, o.prototype.finishAnimation = function() {
      var s;
      this.currentAnimation && ((s = this.mixTargetDelta) === null || s === void 0 || s.call(this, sv), this.currentAnimation.stop()), this.completeAnimation();
    }, o.prototype.applyTransformsToTarget = function() {
      var s = this.getLead(), u = s.targetWithTransforms, c = s.target, l = s.layout, f = s.latestValues;
      !u || !c || !l || (Kt(u, c), Hn(u, f), Qi(this.projectionDeltaWithTransform, this.layoutCorrected, u, f));
    }, o.prototype.registerSharedNode = function(s, u) {
      var c, l, f;
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new RT());
      var d = this.sharedNodes.get(s);
      d.add(u), u.promote({
        transition: (c = u.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.transition,
        preserveFollowOpacity: (f = (l = u.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.shouldPreserveFollowOpacity) === null || f === void 0 ? void 0 : f.call(l, u)
      });
    }, o.prototype.isLead = function() {
      var s = this.getStack();
      return s ? s.lead === this : !0;
    }, o.prototype.getLead = function() {
      var s, u = this.options.layoutId;
      return u ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }, o.prototype.getPrevLead = function() {
      var s, u = this.options.layoutId;
      return u ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }, o.prototype.getStack = function() {
      var s = this.options.layoutId;
      if (s)
        return this.root.sharedNodes.get(s);
    }, o.prototype.promote = function(s) {
      var u = s === void 0 ? {} : s, c = u.needsReset, l = u.transition, f = u.preserveFollowOpacity, d = this.getStack();
      d && d.promote(this, f), c && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }, o.prototype.relegate = function() {
      var s = this.getStack();
      return s ? s.relegate(this) : !1;
    }, o.prototype.resetRotation = function() {
      var s = this.options.visualElement;
      if (!!s) {
        for (var u = !1, c = {}, l = 0; l < Zc.length; l++) {
          var f = Zc[l], d = "rotate" + f;
          !s.getStaticValue(d) || (u = !0, c[d] = s.getStaticValue(d), s.setStaticValue(d, 0));
        }
        if (!!u) {
          s == null || s.syncRender();
          for (var d in c)
            s.setStaticValue(d, c[d]);
          s.scheduleRender();
        }
      }
    }, o.prototype.getProjectionStyles = function(s) {
      var u, c, l, f, d, p;
      s === void 0 && (s = {});
      var v = {};
      if (!this.instance || this.isSVG)
        return v;
      if (this.isVisible)
        v.visibility = "";
      else
        return { visibility: "hidden" };
      var h = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, v.opacity = "", v.pointerEvents = go(s.pointerEvents) || "", v.transform = h ? h(this.latestValues, "") : "none", v;
      var g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        var m = {};
        return this.options.layoutId && (m.opacity = (c = this.latestValues.opacity) !== null && c !== void 0 ? c : 1, m.pointerEvents = go(s.pointerEvents) || ""), this.hasProjected && !jr(this.latestValues) && (m.transform = h ? h({}, "") : "none", this.hasProjected = !1), m;
      }
      var w = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(), v.transform = ov(this.projectionDeltaWithTransform, this.treeScale, w), h && (v.transform = h(w, v.transform));
      var x = this.projectionDelta, b = x.x, y = x.y;
      v.transformOrigin = "".concat(b.origin * 100, "% ").concat(y.origin * 100, "% 0"), g.animationValues ? v.opacity = g === this ? (f = (l = w.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : v.opacity = g === this ? (d = w.opacity) !== null && d !== void 0 ? d : "" : (p = w.opacityExit) !== null && p !== void 0 ? p : 0;
      for (var S in qo)
        if (w[S] !== void 0) {
          var A = qo[S], _ = A.correct, E = A.applyTo, M = _(w[S], g);
          if (E)
            for (var C = E.length, k = 0; k < C; k++)
              v[E[k]] = M;
          else
            v[S] = M;
        }
      return this.options.layoutId && (v.pointerEvents = g === this ? go(s.pointerEvents) || "" : "none"), v;
    }, o.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    }, o.prototype.resetTree = function() {
      this.root.nodes.forEach(function(s) {
        var u;
        return (u = s.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(uv), this.root.sharedNodes.clear();
    }, o;
  }();
}
function jT(e) {
  e.updateLayout();
}
function DT(e) {
  var t, r, n, i, a = (r = (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !== null && r !== void 0 ? r : e.snapshot;
  if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
    var o = e.layout, s = o.actual, u = o.measured;
    e.options.animationType === "size" ? ir(function(w) {
      var x = a.isShared ? a.measured[w] : a.layout[w], b = Mr(x);
      x.min = s[w].min, x.max = x.min + b;
    }) : e.options.animationType === "position" && ir(function(w) {
      var x = a.isShared ? a.measured[w] : a.layout[w], b = Mr(s[w]);
      x.max = x.min + b;
    });
    var c = ta();
    Qi(c, s, a.layout);
    var l = ta();
    a.isShared ? Qi(l, e.applyTransform(u, !0), a.measured) : Qi(l, s, a.layout);
    var f = !ob(c), d = !1;
    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
      var p = e.relativeParent, v = p.snapshot, h = p.layout;
      if (v && h) {
        var g = pt();
        ea(g, a.layout, v.layout);
        var m = pt();
        ea(m, s, h.actual), sb(g, m) || (d = !0);
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: a,
      delta: l,
      layoutDelta: c,
      hasLayoutChanged: f,
      hasRelativeTargetChanged: d
    });
  } else
    e.isLead() && ((i = (n = e.options).onExitComplete) === null || i === void 0 || i.call(n));
  e.options.transition = void 0;
}
function FT(e) {
  e.clearSnapshot();
}
function uv(e) {
  e.clearMeasurements();
}
function VT(e) {
  var t = e.options.visualElement;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(), e.resetTransform();
}
function BT(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function UT(e) {
  e.resolveTargetDelta();
}
function zT(e) {
  e.calcProjection();
}
function WT(e) {
  e.resetRotation();
}
function qT(e) {
  e.removeLeadSnapshot();
}
function cv(e, t, r) {
  e.translate = Ye(t.translate, 0, r), e.scale = Ye(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function lv(e, t, r, n) {
  e.min = Ye(t.min, r.min, n), e.max = Ye(t.max, r.max, n);
}
function HT(e, t, r, n) {
  lv(e.x, t.x, r.x, n), lv(e.y, t.y, r.y, n);
}
function GT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var YT = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function KT(e, t) {
  for (var r = e.root, n = e.path.length - 1; n >= 0; n--)
    if (Boolean(e.path[n].instance)) {
      r = e.path[n];
      break;
    }
  var i = r && r !== e.root ? r.instance : document, a = i.querySelector('[data-projection-id="'.concat(t, '"]'));
  a && e.mount(a, !0);
}
function fv(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function dv(e) {
  fv(e.x), fv(e.y);
}
var XT = ub({
  attachResizeListener: function(e, t) {
    return nu(e, "resize", t);
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  },
  checkIsScrollRoot: function() {
    return !0;
  }
}), ic = {
  current: void 0
}, ZT = ub({
  measureScroll: function(e) {
    return {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  },
  defaultParent: function() {
    if (!ic.current) {
      var e = new XT(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ic.current = e;
    }
    return ic.current;
  },
  resetTransform: function(e, t) {
    e.style.transform = t != null ? t : "none";
  },
  checkIsScrollRoot: function(e) {
    return Boolean(window.getComputedStyle(e).position === "fixed");
  }
}), JT = Z(Z(Z(Z({}, RE), XO), eT), _T), cb = /* @__PURE__ */ zA(function(e, t) {
  return C_(e, t, JT, bT, ZT);
}), F = { exports: {} }, ac = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function QT() {
  if (hv)
    return Ee;
  hv = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (y = y.type, y) {
            case u:
            case c:
            case n:
            case a:
            case i:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case l:
                case v:
                case p:
                case o:
                  return y;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function b(y) {
    return x(y) === c;
  }
  return Ee.AsyncMode = u, Ee.ConcurrentMode = c, Ee.ContextConsumer = s, Ee.ContextProvider = o, Ee.Element = t, Ee.ForwardRef = l, Ee.Fragment = n, Ee.Lazy = v, Ee.Memo = p, Ee.Portal = r, Ee.Profiler = a, Ee.StrictMode = i, Ee.Suspense = f, Ee.isAsyncMode = function(y) {
    return b(y) || x(y) === u;
  }, Ee.isConcurrentMode = b, Ee.isContextConsumer = function(y) {
    return x(y) === s;
  }, Ee.isContextProvider = function(y) {
    return x(y) === o;
  }, Ee.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Ee.isForwardRef = function(y) {
    return x(y) === l;
  }, Ee.isFragment = function(y) {
    return x(y) === n;
  }, Ee.isLazy = function(y) {
    return x(y) === v;
  }, Ee.isMemo = function(y) {
    return x(y) === p;
  }, Ee.isPortal = function(y) {
    return x(y) === r;
  }, Ee.isProfiler = function(y) {
    return x(y) === a;
  }, Ee.isStrictMode = function(y) {
    return x(y) === i;
  }, Ee.isSuspense = function(y) {
    return x(y) === f;
  }, Ee.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === c || y === a || y === i || y === f || y === d || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === p || y.$$typeof === o || y.$$typeof === s || y.$$typeof === l || y.$$typeof === g || y.$$typeof === m || y.$$typeof === w || y.$$typeof === h);
  }, Ee.typeOf = x, Ee;
}
var Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pv;
function e2() {
  return pv || (pv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === c || T === a || T === i || T === f || T === d || typeof T == "object" && T !== null && (T.$$typeof === v || T.$$typeof === p || T.$$typeof === o || T.$$typeof === s || T.$$typeof === l || T.$$typeof === g || T.$$typeof === m || T.$$typeof === w || T.$$typeof === h);
    }
    function b(T) {
      if (typeof T == "object" && T !== null) {
        var he = T.$$typeof;
        switch (he) {
          case t:
            var q = T.type;
            switch (q) {
              case u:
              case c:
              case n:
              case a:
              case i:
              case f:
                return q;
              default:
                var ye = q && q.$$typeof;
                switch (ye) {
                  case s:
                  case l:
                  case v:
                  case p:
                  case o:
                    return ye;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var y = u, S = c, A = s, _ = o, E = t, M = l, C = n, k = v, N = p, j = r, L = a, R = i, Q = f, K = !1;
    function te(T) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(T) || b(T) === u;
    }
    function I(T) {
      return b(T) === c;
    }
    function V(T) {
      return b(T) === s;
    }
    function X(T) {
      return b(T) === o;
    }
    function H(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function $(T) {
      return b(T) === l;
    }
    function W(T) {
      return b(T) === n;
    }
    function ee(T) {
      return b(T) === v;
    }
    function se(T) {
      return b(T) === p;
    }
    function J(T) {
      return b(T) === r;
    }
    function D(T) {
      return b(T) === a;
    }
    function Y(T) {
      return b(T) === i;
    }
    function ie(T) {
      return b(T) === f;
    }
    Te.AsyncMode = y, Te.ConcurrentMode = S, Te.ContextConsumer = A, Te.ContextProvider = _, Te.Element = E, Te.ForwardRef = M, Te.Fragment = C, Te.Lazy = k, Te.Memo = N, Te.Portal = j, Te.Profiler = L, Te.StrictMode = R, Te.Suspense = Q, Te.isAsyncMode = te, Te.isConcurrentMode = I, Te.isContextConsumer = V, Te.isContextProvider = X, Te.isElement = H, Te.isForwardRef = $, Te.isFragment = W, Te.isLazy = ee, Te.isMemo = se, Te.isPortal = J, Te.isProfiler = D, Te.isStrictMode = Y, Te.isSuspense = ie, Te.isValidElementType = x, Te.typeOf = b;
  }()), Te;
}
var vv;
function lb() {
  return vv || (vv = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = QT() : e.exports = e2();
  }(ac)), ac.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var oc, gv;
function t2() {
  if (gv)
    return oc;
  gv = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return oc = i() ? Object.assign : function(a, o) {
    for (var s, u = n(a), c, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var f in s)
        t.call(s, f) && (u[f] = s[f]);
      if (e) {
        c = e(s);
        for (var d = 0; d < c.length; d++)
          r.call(s, c[d]) && (u[c[d]] = s[c[d]]);
      }
    }
    return u;
  }, oc;
}
var sc, yv;
function gd() {
  if (yv)
    return sc;
  yv = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return sc = e, sc;
}
var uc, mv;
function fb() {
  return mv || (mv = 1, uc = Function.call.bind(Object.prototype.hasOwnProperty)), uc;
}
var cc, bv;
function r2() {
  if (bv)
    return cc;
  bv = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = gd(), r = {}, n = fb();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var f;
          try {
            if (typeof a[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[l](o, l, u, s, null, t);
          } catch (v) {
            f = v;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + s + " type: " + f.message + (p != null ? p : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, cc = i, cc;
}
var lc, xv;
function n2() {
  if (xv)
    return lc;
  xv = 1;
  var e = lb(), t = t2(), r = gd(), n = fb(), i = r2(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return lc = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(I) {
      var V = I && (c && I[c] || I[l]);
      if (typeof V == "function")
        return V;
    }
    var d = "<<anonymous>>", p = {
      array: m("array"),
      bigint: m("bigint"),
      bool: m("boolean"),
      func: m("function"),
      number: m("number"),
      object: m("object"),
      string: m("string"),
      symbol: m("symbol"),
      any: w(),
      arrayOf: x,
      element: b(),
      elementType: y(),
      instanceOf: S,
      node: M(),
      objectOf: _,
      oneOf: A,
      oneOfType: E,
      shape: k,
      exact: N
    };
    function v(I, V) {
      return I === V ? I !== 0 || 1 / I === 1 / V : I !== I && V !== V;
    }
    function h(I, V) {
      this.message = I, this.data = V && typeof V == "object" ? V : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(I) {
      if (process.env.NODE_ENV !== "production")
        var V = {}, X = 0;
      function H(W, ee, se, J, D, Y, ie) {
        if (J = J || d, Y = Y || se, ie !== r) {
          if (u) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = J + ":" + se;
            !V[he] && X < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), V[he] = !0, X++);
          }
        }
        return ee[se] == null ? W ? ee[se] === null ? new h("The " + D + " `" + Y + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new h("The " + D + " `" + Y + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : I(ee, se, J, D, Y);
      }
      var $ = H.bind(null, !1);
      return $.isRequired = H.bind(null, !0), $;
    }
    function m(I) {
      function V(X, H, $, W, ee, se) {
        var J = X[H], D = R(J);
        if (D !== I) {
          var Y = Q(J);
          return new h(
            "Invalid " + W + " `" + ee + "` of type " + ("`" + Y + "` supplied to `" + $ + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return g(V);
    }
    function w() {
      return g(o);
    }
    function x(I) {
      function V(X, H, $, W, ee) {
        if (typeof I != "function")
          return new h("Property `" + ee + "` of component `" + $ + "` has invalid PropType notation inside arrayOf.");
        var se = X[H];
        if (!Array.isArray(se)) {
          var J = R(se);
          return new h("Invalid " + W + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + $ + "`, expected an array."));
        }
        for (var D = 0; D < se.length; D++) {
          var Y = I(se, D, $, W, ee + "[" + D + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return g(V);
    }
    function b() {
      function I(V, X, H, $, W) {
        var ee = V[X];
        if (!s(ee)) {
          var se = R(ee);
          return new h("Invalid " + $ + " `" + W + "` of type " + ("`" + se + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(I);
    }
    function y() {
      function I(V, X, H, $, W) {
        var ee = V[X];
        if (!e.isValidElementType(ee)) {
          var se = R(ee);
          return new h("Invalid " + $ + " `" + W + "` of type " + ("`" + se + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(I);
    }
    function S(I) {
      function V(X, H, $, W, ee) {
        if (!(X[H] instanceof I)) {
          var se = I.name || d, J = te(X[H]);
          return new h("Invalid " + W + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + $ + "`, expected ") + ("instance of `" + se + "`."));
        }
        return null;
      }
      return g(V);
    }
    function A(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function V(X, H, $, W, ee) {
        for (var se = X[H], J = 0; J < I.length; J++)
          if (v(se, I[J]))
            return null;
        var D = JSON.stringify(I, function(ie, T) {
          var he = Q(T);
          return he === "symbol" ? String(T) : T;
        });
        return new h("Invalid " + W + " `" + ee + "` of value `" + String(se) + "` " + ("supplied to `" + $ + "`, expected one of " + D + "."));
      }
      return g(V);
    }
    function _(I) {
      function V(X, H, $, W, ee) {
        if (typeof I != "function")
          return new h("Property `" + ee + "` of component `" + $ + "` has invalid PropType notation inside objectOf.");
        var se = X[H], J = R(se);
        if (J !== "object")
          return new h("Invalid " + W + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + $ + "`, expected an object."));
        for (var D in se)
          if (n(se, D)) {
            var Y = I(se, D, $, W, ee + "." + D, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return g(V);
    }
    function E(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var V = 0; V < I.length; V++) {
        var X = I[V];
        if (typeof X != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(X) + " at index " + V + "."
          ), o;
      }
      function H($, W, ee, se, J) {
        for (var D = [], Y = 0; Y < I.length; Y++) {
          var ie = I[Y], T = ie($, W, ee, se, J, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && D.push(T.data.expectedType);
        }
        var he = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new h("Invalid " + se + " `" + J + "` supplied to " + ("`" + ee + "`" + he + "."));
      }
      return g(H);
    }
    function M() {
      function I(V, X, H, $, W) {
        return j(V[X]) ? null : new h("Invalid " + $ + " `" + W + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return g(I);
    }
    function C(I, V, X, H, $) {
      return new h(
        (I || "React class") + ": " + V + " type `" + X + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + $ + "`."
      );
    }
    function k(I) {
      function V(X, H, $, W, ee) {
        var se = X[H], J = R(se);
        if (J !== "object")
          return new h("Invalid " + W + " `" + ee + "` of type `" + J + "` " + ("supplied to `" + $ + "`, expected `object`."));
        for (var D in I) {
          var Y = I[D];
          if (typeof Y != "function")
            return C($, W, ee, D, Q(Y));
          var ie = Y(se, D, $, W, ee + "." + D, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return g(V);
    }
    function N(I) {
      function V(X, H, $, W, ee) {
        var se = X[H], J = R(se);
        if (J !== "object")
          return new h("Invalid " + W + " `" + ee + "` of type `" + J + "` " + ("supplied to `" + $ + "`, expected `object`."));
        var D = t({}, X[H], I);
        for (var Y in D) {
          var ie = I[Y];
          if (n(I, Y) && typeof ie != "function")
            return C($, W, ee, Y, Q(ie));
          if (!ie)
            return new h(
              "Invalid " + W + " `" + ee + "` key `" + Y + "` supplied to `" + $ + "`.\nBad object: " + JSON.stringify(X[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var T = ie(se, Y, $, W, ee + "." + Y, r);
          if (T)
            return T;
        }
        return null;
      }
      return g(V);
    }
    function j(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(j);
          if (I === null || s(I))
            return !0;
          var V = f(I);
          if (V) {
            var X = V.call(I), H;
            if (V !== I.entries) {
              for (; !(H = X.next()).done; )
                if (!j(H.value))
                  return !1;
            } else
              for (; !(H = X.next()).done; ) {
                var $ = H.value;
                if ($ && !j($[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L(I, V) {
      return I === "symbol" ? !0 : V ? V["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && V instanceof Symbol : !1;
    }
    function R(I) {
      var V = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : L(V, I) ? "symbol" : V;
    }
    function Q(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var V = R(I);
      if (V === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return V;
    }
    function K(I) {
      var V = Q(I);
      switch (V) {
        case "array":
        case "object":
          return "an " + V;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + V;
        default:
          return V;
      }
    }
    function te(I) {
      return !I.constructor || !I.constructor.name ? d : I.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, lc;
}
var fc, wv;
function i2() {
  if (wv)
    return fc;
  wv = 1;
  var e = gd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, fc = function() {
    function n(o, s, u, c, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, fc;
}
if (process.env.NODE_ENV !== "production") {
  var a2 = lb(), o2 = !0;
  F.exports = n2()(a2.isElement, o2);
} else
  F.exports = i2()();
var s2 = ["color", "size", "title"];
function u2(e, t) {
  if (e == null)
    return {};
  var r = c2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function c2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var yd = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = u2(e, s2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      fillRule: "evenodd",
      d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    })]
  });
});
yd.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
yd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const l2 = yd;
var f2 = ["color", "size", "title"];
function d2(e, t) {
  if (e == null)
    return {};
  var r = h2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function h2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var md = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = d2(e, f2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      fillRule: "evenodd",
      d: "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
    })]
  });
});
md.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
md.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const p2 = md;
var v2 = ["color", "size", "title"];
function g2(e, t) {
  if (e == null)
    return {};
  var r = y2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function y2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var bd = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = g2(e, v2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
    })]
  });
});
bd.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
bd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const m2 = bd;
var b2 = ["color", "size", "title"];
function x2(e, t) {
  if (e == null)
    return {};
  var r = w2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function w2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var xd = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = x2(e, b2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
    })]
  });
});
xd.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
xd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const S2 = xd;
var A2 = ["color", "size", "title"];
function _2(e, t) {
  if (e == null)
    return {};
  var r = O2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function O2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var wd = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = _2(e, A2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
    })]
  });
});
wd.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
wd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const E2 = wd;
var T2 = ["color", "size", "title"];
function P2(e, t) {
  if (e == null)
    return {};
  var r = C2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function C2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Sd = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = P2(e, T2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      fillRule: "evenodd",
      d: "M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
    }), /* @__PURE__ */ O("path", {
      fillRule: "evenodd",
      d: "M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
    })]
  });
});
Sd.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
Sd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const M2 = Sd;
var k2 = ["color", "size", "title"];
function N2(e, t) {
  if (e == null)
    return {};
  var r = R2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function R2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ad = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = N2(e, k2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    }), /* @__PURE__ */ O("path", {
      fillRule: "evenodd",
      d: "M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
    }), /* @__PURE__ */ O("path", {
      d: "M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
    })]
  });
});
Ad.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
Ad.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const I2 = Ad;
var $2 = ["color", "size", "title"];
function L2(e, t) {
  if (e == null)
    return {};
  var r = j2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function j2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var _d = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = L2(e, $2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
    }), /* @__PURE__ */ O("path", {
      fillRule: "evenodd",
      d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
    })]
  });
});
_d.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
_d.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const D2 = _d;
var F2 = ["color", "size", "title"];
function V2(e, t) {
  if (e == null)
    return {};
  var r = B2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function B2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Od = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = V2(e, F2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
    }), /* @__PURE__ */ O("path", {
      d: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
    })]
  });
});
Od.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
Od.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const U2 = Od;
var z2 = ["color", "size", "title"];
function W2(e, t) {
  if (e == null)
    return {};
  var r = q2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function q2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ed = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = W2(e, z2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
    })]
  });
});
Ed.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
Ed.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const H2 = Ed;
var G2 = ["color", "size", "title"];
function Y2(e, t) {
  if (e == null)
    return {};
  var r = K2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function K2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Td = /* @__PURE__ */ jt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = Y2(e, G2);
  return /* @__PURE__ */ z("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ O("title", {
      children: i
    }) : null, /* @__PURE__ */ O("path", {
      d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    })]
  });
});
Td.propTypes = {
  color: F.exports.string,
  size: F.exports.oneOfType([F.exports.string, F.exports.number]),
  title: F.exports.string
};
Td.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const X2 = Td, Z2 = [], J2 = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center"
}, Q2 = ({
  style: e,
  size: t
}) => /* @__PURE__ */ O("div", {
  className: [...Z2].join(" "),
  style: {
    ...J2,
    ...e
  },
  children: /* @__PURE__ */ O(cb.div, {
    initial: {
      width: 0
    },
    style: {
      overflow: "hidden",
      position: "relative"
    },
    animate: {
      width: "auto"
    },
    transition: {
      ease: "easeInOut",
      duration: 0.3
    },
    children: /* @__PURE__ */ O(E2, {
      size: t
    })
  })
}), eP = [], tP = {}, rP = ({
  style: e,
  size: t
}) => /* @__PURE__ */ O("div", {
  className: eP.join(" "),
  style: {
    ...tP,
    ...e
  },
  children: /* @__PURE__ */ O(cb.div, {
    style: {
      overflow: "hidden"
    },
    animate: {
      scale: [0, 1.5, 1.1, 1, 1]
    },
    transition: {
      ease: "easeInOut",
      duration: 0.4
    },
    children: /* @__PURE__ */ O(X2, {
      size: t
    })
  })
}), nP = ["border-0", "rounded-lg", "cursor-pointer", "p-2", "gcr"], iP = {
  position: "relative",
  border: "none"
}, aP = (e) => {
  const [t, r] = Wf(e.vistate || "default");
  Lt(() => {
    let l;
    return (t === "err" || t === "success") && (l = setTimeout(() => r("default"), e.decay || 500)), () => {
      l && clearTimeout(l);
    };
  }, [t]);
  const n = (l) => {
    !e.disabled && e.onClick && (e.clickableStates === !0 || (e.clickableStates || ["default"]).includes(t)) && (r("loading"), e.onClick(l).then(() => r("success")).catch(() => r("err")));
  }, i = yi(e.viusage);
  let a = e.emphasis || 500, o = Nm(a), s = a;
  e.invert && (a = o, o = s);
  const [u, c] = Gf([i, a]);
  return /* @__PURE__ */ z("button", {
    ...e,
    onClick: n,
    className: [...e.overrideClasses ? [] : nP, ...e.classNames || [], `bg-${i}-${a}`, `hover:bg-${i}-${a - 200}`, `text-${u}-${c}`, `hover:text-${u}-${c + 100}`, `fill-${i}-${o}`].join(" "),
    style: {
      ...iP,
      ...e.style
    },
    children: [e.children, (t === "loading" || t === "err" || t === "success") && /* @__PURE__ */ z("div", {
      className: `text-${i}-${o}`,
      style: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        position: "absolute",
        height: "100%",
        width: "100%",
        background: "#ffffff99",
        left: 0,
        top: 0
      },
      children: [t === "loading" && /* @__PURE__ */ O(AA, {
        size: "20px"
      }), t === "err" && /* @__PURE__ */ O(rP, {
        size: 40
      }), t === "success" && /* @__PURE__ */ O(Q2, {
        size: 40
      })]
    })]
  });
}, oP = ["border-2", "rounded-full", "cursor-pointer", "p-3", "gcr"], VJ = {}, Pd = (e) => /* @__PURE__ */ O(aP, {
  overrideClasses: !0,
  classNames: oP,
  ...e,
  children: e.children
}), BJ = [], UJ = {}, sP = ["rounded-full", "overflow-hidden", "flex", "items-center", "justify-items-center"], uP = ["grid"], cP = {
  gridTemplateColumns: "1fr 5fr"
}, zJ = (e) => /* @__PURE__ */ O(Pd, {
  style: {
    position: "relative"
  },
  ...e,
  children: /* @__PURE__ */ z("div", {
    style: cP,
    className: uP.join(" "),
    children: [/* @__PURE__ */ O("div", {
      className: sP.join(" "),
      style: {
        height: e.pegSize || 30,
        width: e.pegSize || 30
      },
      children: e.Peg
    }), /* @__PURE__ */ O("div", {
      children: e.children
    })]
  })
}), db = {
  checksCompleted: !1,
  dispatch: () => {
  }
}, hb = kr(db), lP = (e, t) => t(e), WJ = ({
  children: e
}) => {
  const [t, r] = pA(lP, db);
  return /* @__PURE__ */ O(hb.Provider, {
    value: {
      ...t,
      dispatch: r
    },
    children: e
  });
}, qJ = () => {
  const e = et(hb);
  if (!e)
    throw new Error("useChecks must be called within a CheckProvider.");
  return e;
}, fP = [
  "grid",
  "items-left",
  "content-left",
  "rounded-lg",
  "border-2",
  "p-8",
  "overflow-y-hidden",
  "overflow-x-scroll",
  "gap-8",
  "shadow"
], dP = {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 5fr"
}, hP = [
  "h-36",
  "overflow-y-hidden",
  "overflow-x-scroll",
  "flex",
  "items-center",
  "gap-8"
], pP = {}, HJ = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : fP, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : dP,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    style: {
      textAlign: "left"
    },
    children: e.Header
  }), /* @__PURE__ */ O("div", {
    className: hP.join(" "),
    style: pP,
    children: e.children
  })]
}), vP = [], gP = {}, Gt = (e) => {
  const t = yi(e.viusage);
  let r = e.emphasis || 500, n = Nm(r), i = r;
  e.invert && (r = n, n = i);
  const [a, o] = Gf([t, r]);
  return /* @__PURE__ */ O("div", {
    className: [...e.overrideClasses ? [] : vP, ...e.classNames || [], `bg-${t}-${r}`, e.hoverAnimate && `hover:bg-${t}-${r - 200}`, `text-${a}-${o}`, e.hoverAnimate && `hover:text-${a}-${o + 100}`, `fill-${t}-${n}`].join(" "),
    style: {
      ...e.overrideStyle ? {} : gP,
      ...e.style
    },
    children: e.children
  });
}, yP = "", mP = {}, GJ = ({
  style: e
}) => /* @__PURE__ */ O("div", {
  className: yP,
  style: {
    ...mP,
    ...e
  }
}), bP = "", xP = {}, YJ = ({
  style: e
}) => /* @__PURE__ */ O("div", {
  className: bP,
  style: {
    ...xP,
    ...e
  }
}), wP = ["relative", "flex", "justify-items-center", "justify-content-center"], SP = {
  justifyContent: "center",
  justifyItems: "center"
}, AP = ["flex", "absolute", "m-auto", "gap-4"], _P = (e) => {
  const [t, r] = Wf(0), n = yi(e.viusage), i = e.emphasis || 500, [a, o] = Gf([n, i]);
  return /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : wP, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : SP,
      ...e.style
    },
    children: [/* @__PURE__ */ O("div", {
      style: {
        height: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center"
      },
      children: e.Entries && e.Entries[t]
    }), /* @__PURE__ */ O("div", {
      style: {
        bottom: "15px"
      },
      className: AP.join(" "),
      children: (e.Entries || []).map((s, u) => /* @__PURE__ */ O("div", {
        onClick: () => r(u),
        className: ["gcr", "cursor-pointer", "rounded-full", ...t > u - 1 ? [`bg-${n}-${i}`] : ["border", `bg-${a}-${o}`, `border-${n}-${i}`]].join(" "),
        style: {
          height: e.size || 10,
          width: e.size || 10
        }
      }, u))
    })]
  });
}, OP = [], EP = {}, TP = (e) => {
  const t = Object.entries(e.options || {}).map(([r, n]) => /* @__PURE__ */ O(Pd, {
    viusage: e.which === r ? "navigate" : "wrap",
    children: n
  }, r));
  return /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : OP, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : EP,
      ...e.style
    },
    children: [/* @__PURE__ */ O("div", {
      style: {
        height: "80px",
        width: "80px",
        margin: "0 auto"
      },
      children: e.Header
    }), /* @__PURE__ */ O("br", {}), /* @__PURE__ */ O("div", {
      className: "gap-4 text-sm",
      style: {
        height: "auto",
        display: "grid",
        gridTemplateColumns: "1fr"
      },
      children: t
    })]
  });
}, PP = "", CP = {
  cursor: "pointer"
}, MP = (e) => {
  const t = (e.injections || []).reduce((r, n) => n(r), {
    color: "#33b864",
    ...e
  });
  return /* @__PURE__ */ O("div", {
    onClick: () => window.location.href = "/",
    className: PP,
    style: {
      ...CP,
      ...t.style
    },
    children: /* @__PURE__ */ O("svg", {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      viewBox: "0 0 120.000000 120.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: /* @__PURE__ */ O("g", {
        transform: "translate(0.000000,120.000000) scale(0.100000,-0.100000)",
        fill: t.color,
        stroke: "none",
        children: /* @__PURE__ */ O("path", {
          d: "M614 1130 c-261 -28 -468 -217 -505 -459 -25 -168 52 -354 193 -464 73 -57 169 -103 246 -118 80 -15 278 -7 350 15 l52 17 0 144 c0 99 3 145 11 145 6 0 25 -12 42 -26 l31 -26 8 23 c17 46 90 351 85 356 -7 7 -364 -64 -389 -78 -20 -11 -19 -12 17 -49 l37 -38 -36 -40 c-20 -22 -61 -59 -91 -82 -65 -50 -57 -53 -178 62 -68 65 -77 78 -77 109 0 65 28 126 81 173 60 54 121 76 208 76 85 0 128 -13 191 -55 29 -19 54 -35 56 -35 2 0 4 67 4 149 0 107 -4 151 -12 159 -13 10 -140 37 -213 45 -22 3 -72 1 -111 -3z m476 -435 c0 -33 -63 -275 -72 -275 -5 0 -21 11 -36 25 -15 14 -29 25 -32 25 -3 0 -36 -30 -75 -66 -134 -126 -237 -219 -251 -227 -18 -10 -32 0 -136 94 -45 41 -84 73 -87 71 -3 -1 -22 -17 -41 -35 -69 -63 -63 -63 -110 -2 -23 30 -40 59 -38 64 1 5 45 46 96 91 81 69 96 79 110 68 8 -7 54 -45 101 -85 64 -54 89 -69 100 -63 27 16 211 186 211 195 0 2 -14 19 -32 37 l-31 32 154 32 c85 17 157 32 162 33 4 0 7 -6 7 -14z"
        })
      })
    })
  });
}, kP = (e) => /* @__PURE__ */ O(TP, {
  which: e.which,
  Header: /* @__PURE__ */ O(MP, {}),
  options: e.options
}), NP = ["flex", "cursor-pointer"], RP = {
  alignContent: "center",
  alignItems: "center"
}, IP = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : NP, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : RP,
    ...e.style
  },
  children: [/* @__PURE__ */ O(U2, {}), "\u2003\u2003", /* @__PURE__ */ O("span", {
    className: "hover:underline",
    children: "Help"
  })]
}), $P = ["p-4", "grid"], LP = {
  gridTemplateRows: "1fr 1fr"
}, jP = (e) => /* @__PURE__ */ z(Gt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : $P, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : LP,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(kP, {
      which: "home",
      options: {
        home: /* @__PURE__ */ z("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ O(M2, {}), "\u2003\u2003House"]
        }),
        team: /* @__PURE__ */ z("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ O(I2, {}), "\u2003\u2003Team"]
        }),
        matchups: /* @__PURE__ */ z("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ O(S2, {}), "\u2003\u2003Matchup"]
        })
      }
    })
  }), /* @__PURE__ */ O("div", {
    style: {
      alignSelf: "end",
      justifySelf: "center"
    },
    children: /* @__PURE__ */ O(IP, {})
  })]
}), DP = [
  "flex",
  "items-center",
  "gap-2",
  "focus-within:outline",
  "focus-within:outline-1",
  "p-2",
  "rounded",
  "bg-drk-gray-200"
], FP = {
  gridTemplateColumns: "1fr 4fr"
}, VP = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : DP, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : FP,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    children: e.Icon || /* @__PURE__ */ O(H2, {})
  }), /* @__PURE__ */ O("input", {
    style: {
      background: "transparent"
    },
    onFocus: (t) => {
      t.preventDefault(), t.stopPropagation();
    },
    className: "outline-none",
    type: "text",
    ...e.inputProps
  })]
}), BP = ["flex", "items-center", "gap-8"], UP = {}, zP = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : BP, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : UP,
    ...e.style
  },
  children: [/* @__PURE__ */ O(VP, {
    classNames: ["rounded-full", "text-sm"]
  }), /* @__PURE__ */ O(m2, {
    size: e.size
  }), /* @__PURE__ */ O(D2, {
    size: e.size
  })]
}), WP = ["grid"], qP = {
  gridTemplateColumns: "1fr 1fr"
}, HP = ["flex", "items-center"], GP = ["flex", "justify-items-end", "justify-end", "items-center"], YP = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : WP, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : qP,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    className: HP.join(" "),
    children: e.Left
  }), /* @__PURE__ */ O("div", {
    className: GP.join(" "),
    children: e.Right
  })]
});
function Le() {
  return Le = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Le.apply(this, arguments);
}
function ro(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Er(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? Le({}, e) : e;
  return ro(e) && ro(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (ro(t[i]) && i in e && ro(e[i]) ? n[i] = Er(e[i], t[i], r) : n[i] = t[i]);
  }), n;
}
function ai(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var hl = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function KP() {
  if (Sv)
    return Pe;
  Sv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var m = g.$$typeof;
      switch (m) {
        case e:
          switch (g = g.type, g) {
            case r:
            case i:
            case n:
            case c:
            case l:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case o:
                case u:
                case d:
                case f:
                case a:
                  return g;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return Pe.ContextConsumer = o, Pe.ContextProvider = a, Pe.Element = e, Pe.ForwardRef = u, Pe.Fragment = r, Pe.Lazy = d, Pe.Memo = f, Pe.Portal = t, Pe.Profiler = i, Pe.StrictMode = n, Pe.Suspense = c, Pe.SuspenseList = l, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(g) {
    return h(g) === o;
  }, Pe.isContextProvider = function(g) {
    return h(g) === a;
  }, Pe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Pe.isForwardRef = function(g) {
    return h(g) === u;
  }, Pe.isFragment = function(g) {
    return h(g) === r;
  }, Pe.isLazy = function(g) {
    return h(g) === d;
  }, Pe.isMemo = function(g) {
    return h(g) === f;
  }, Pe.isPortal = function(g) {
    return h(g) === t;
  }, Pe.isProfiler = function(g) {
    return h(g) === i;
  }, Pe.isStrictMode = function(g) {
    return h(g) === n;
  }, Pe.isSuspense = function(g) {
    return h(g) === c;
  }, Pe.isSuspenseList = function(g) {
    return h(g) === l;
  }, Pe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === i || g === n || g === c || g === l || g === p || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === f || g.$$typeof === a || g.$$typeof === o || g.$$typeof === u || g.$$typeof === v || g.getModuleId !== void 0);
  }, Pe.typeOf = h, Pe;
}
var Ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Av;
function XP() {
  return Av || (Av = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, g = !1, m = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function b(q) {
      return !!(typeof q == "string" || typeof q == "function" || q === r || q === i || w || q === n || q === c || q === l || m || q === p || v || h || g || typeof q == "object" && q !== null && (q.$$typeof === d || q.$$typeof === f || q.$$typeof === a || q.$$typeof === o || q.$$typeof === u || q.$$typeof === x || q.getModuleId !== void 0));
    }
    function y(q) {
      if (typeof q == "object" && q !== null) {
        var ye = q.$$typeof;
        switch (ye) {
          case e:
            var Se = q.type;
            switch (Se) {
              case r:
              case i:
              case n:
              case c:
              case l:
                return Se;
              default:
                var dt = Se && Se.$$typeof;
                switch (dt) {
                  case s:
                  case o:
                  case u:
                  case d:
                  case f:
                  case a:
                    return dt;
                  default:
                    return ye;
                }
            }
          case t:
            return ye;
        }
      }
    }
    var S = o, A = a, _ = e, E = u, M = r, C = d, k = f, N = t, j = i, L = n, R = c, Q = l, K = !1, te = !1;
    function I(q) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(q) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(q) {
      return y(q) === o;
    }
    function H(q) {
      return y(q) === a;
    }
    function $(q) {
      return typeof q == "object" && q !== null && q.$$typeof === e;
    }
    function W(q) {
      return y(q) === u;
    }
    function ee(q) {
      return y(q) === r;
    }
    function se(q) {
      return y(q) === d;
    }
    function J(q) {
      return y(q) === f;
    }
    function D(q) {
      return y(q) === t;
    }
    function Y(q) {
      return y(q) === i;
    }
    function ie(q) {
      return y(q) === n;
    }
    function T(q) {
      return y(q) === c;
    }
    function he(q) {
      return y(q) === l;
    }
    Ce.ContextConsumer = S, Ce.ContextProvider = A, Ce.Element = _, Ce.ForwardRef = E, Ce.Fragment = M, Ce.Lazy = C, Ce.Memo = k, Ce.Portal = N, Ce.Profiler = j, Ce.StrictMode = L, Ce.Suspense = R, Ce.SuspenseList = Q, Ce.isAsyncMode = I, Ce.isConcurrentMode = V, Ce.isContextConsumer = X, Ce.isContextProvider = H, Ce.isElement = $, Ce.isForwardRef = W, Ce.isFragment = ee, Ce.isLazy = se, Ce.isMemo = J, Ce.isPortal = D, Ce.isProfiler = Y, Ce.isStrictMode = ie, Ce.isSuspense = T, Ce.isSuspenseList = he, Ce.isValidElementType = b, Ce.typeOf = y;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = KP() : e.exports = XP();
})(hl);
const ZP = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function JP(e) {
  const t = `${e}`.match(ZP);
  return t && t[1] || "";
}
function pb(e, t = "") {
  return e.displayName || e.name || JP(e) || t;
}
function _v(e, t, r) {
  const n = pb(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function QP(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return pb(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case hl.exports.ForwardRef:
          return _v(e, e.render, "ForwardRef");
        case hl.exports.Memo:
          return _v(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Kr(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ai(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function eC(e, t) {
  const r = Le({}, t);
  return Object.keys(e).forEach((n) => {
    r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function tC(e, t, r) {
  const n = {};
  return Object.keys(e).forEach(
    (i) => {
      n[i] = e[i].reduce((a, o) => (o && (a.push(t(o)), r && r[o] && a.push(r[o])), a), []).join(" ");
    }
  ), n;
}
const Ov = (e) => e, rC = () => {
  let e = Ov;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ov;
    }
  };
}, nC = rC(), iC = nC, aC = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function Cd(e, t, r = "Mui") {
  const n = aC[t];
  return n ? `${r}-${n}` : `${iC.generate(e)}-${t}`;
}
function oC(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = Cd(e, i, r);
  }), n;
}
function tr(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vb(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = vb(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function sC() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = vb(e)) && (n && (n += " "), n += t);
  return n;
}
function gb(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var uC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cC = /* @__PURE__ */ gb(
  function(e) {
    return uC.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
);
function lC(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function fC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var dC = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(i) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, a), n.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(fC(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var o = lC(i);
      try {
        o.insertRule(n, o.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ht = "-ms-", es = "-moz-", Oe = "-webkit-", Md = "comm", kd = "rule", Nd = "decl", hC = "@import", yb = "@keyframes", pC = Math.abs, su = String.fromCharCode, vC = Object.assign;
function gC(e, t) {
  return lt(e, 0) ^ 45 ? (((t << 2 ^ lt(e, 0)) << 2 ^ lt(e, 1)) << 2 ^ lt(e, 2)) << 2 ^ lt(e, 3) : 0;
}
function mb(e) {
  return e.trim();
}
function yC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ne(e, t, r) {
  return e.replace(t, r);
}
function pl(e, t) {
  return e.indexOf(t);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function da(e, t, r) {
  return e.slice(t, r);
}
function ar(e) {
  return e.length;
}
function Rd(e) {
  return e.length;
}
function no(e, t) {
  return t.push(e), e;
}
function mC(e, t) {
  return e.map(t).join("");
}
var uu = 1, oi = 1, bb = 0, Tt = 0, Je = 0, bi = "";
function cu(e, t, r, n, i, a, o) {
  return { value: e, root: t, parent: r, type: n, props: i, children: a, line: uu, column: oi, length: o, return: "" };
}
function Li(e, t) {
  return vC(cu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function bC() {
  return Je;
}
function xC() {
  return Je = Tt > 0 ? lt(bi, --Tt) : 0, oi--, Je === 10 && (oi = 1, uu--), Je;
}
function $t() {
  return Je = Tt < bb ? lt(bi, Tt++) : 0, oi++, Je === 10 && (oi = 1, uu++), Je;
}
function fr() {
  return lt(bi, Tt);
}
function bo() {
  return Tt;
}
function ka(e, t) {
  return da(bi, e, t);
}
function ha(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function xb(e) {
  return uu = oi = 1, bb = ar(bi = e), Tt = 0, [];
}
function wb(e) {
  return bi = "", e;
}
function xo(e) {
  return mb(ka(Tt - 1, vl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wC(e) {
  for (; (Je = fr()) && Je < 33; )
    $t();
  return ha(e) > 2 || ha(Je) > 3 ? "" : " ";
}
function SC(e, t) {
  for (; --t && $t() && !(Je < 48 || Je > 102 || Je > 57 && Je < 65 || Je > 70 && Je < 97); )
    ;
  return ka(e, bo() + (t < 6 && fr() == 32 && $t() == 32));
}
function vl(e) {
  for (; $t(); )
    switch (Je) {
      case e:
        return Tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && vl(Je);
        break;
      case 40:
        e === 41 && vl(e);
        break;
      case 92:
        $t();
        break;
    }
  return Tt;
}
function AC(e, t) {
  for (; $t() && e + Je !== 47 + 10; )
    if (e + Je === 42 + 42 && fr() === 47)
      break;
  return "/*" + ka(t, Tt - 1) + "*" + su(e === 47 ? e : $t());
}
function _C(e) {
  for (; !ha(fr()); )
    $t();
  return ka(e, Tt);
}
function OC(e) {
  return wb(wo("", null, null, null, [""], e = xb(e), 0, [0], e));
}
function wo(e, t, r, n, i, a, o, s, u) {
  for (var c = 0, l = 0, f = o, d = 0, p = 0, v = 0, h = 1, g = 1, m = 1, w = 0, x = "", b = i, y = a, S = n, A = x; g; )
    switch (v = w, w = $t()) {
      case 40:
        if (v != 108 && lt(A, f - 1) == 58) {
          pl(A += Ne(xo(w), "&", "&\f"), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += xo(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += wC(v);
        break;
      case 92:
        A += SC(bo() - 1, 7);
        continue;
      case 47:
        switch (fr()) {
          case 42:
          case 47:
            no(EC(AC($t(), bo()), t, r), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * h:
        s[c++] = ar(A) * m;
      case 125 * h:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            p > 0 && ar(A) - f && no(p > 32 ? Tv(A + ";", n, r, f - 1) : Tv(Ne(A, " ", "") + ";", n, r, f - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (no(S = Ev(A, t, r, c, l, i, s, x, b = [], y = [], f), a), w === 123)
              if (l === 0)
                wo(A, t, S, S, b, a, f, s, y);
              else
                switch (d === 99 && lt(A, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    wo(e, S, S, n && no(Ev(e, S, S, 0, 0, i, s, x, i, b = [], f), y), i, y, f, s, n ? b : y);
                    break;
                  default:
                    wo(A, S, S, S, [""], y, 0, s, y);
                }
        }
        c = l = p = 0, h = m = 1, x = A = "", f = o;
        break;
      case 58:
        f = 1 + ar(A), p = v;
      default:
        if (h < 1) {
          if (w == 123)
            --h;
          else if (w == 125 && h++ == 0 && xC() == 125)
            continue;
        }
        switch (A += su(w), w * h) {
          case 38:
            m = l > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[c++] = (ar(A) - 1) * m, m = 1;
            break;
          case 64:
            fr() === 45 && (A += xo($t())), d = fr(), l = f = ar(x = A += _C(bo())), w++;
            break;
          case 45:
            v === 45 && ar(A) == 2 && (h = 0);
        }
    }
  return a;
}
function Ev(e, t, r, n, i, a, o, s, u, c, l) {
  for (var f = i - 1, d = i === 0 ? a : [""], p = Rd(d), v = 0, h = 0, g = 0; v < n; ++v)
    for (var m = 0, w = da(e, f + 1, f = pC(h = o[v])), x = e; m < p; ++m)
      (x = mb(h > 0 ? d[m] + " " + w : Ne(w, /&\f/g, d[m]))) && (u[g++] = x);
  return cu(e, t, r, i === 0 ? kd : s, u, c, l);
}
function EC(e, t, r) {
  return cu(e, t, r, Md, su(bC()), da(e, 2, -2), 0);
}
function Tv(e, t, r, n) {
  return cu(e, t, r, Nd, da(e, 0, n), da(e, n + 1, -1), n);
}
function Jn(e, t) {
  for (var r = "", n = Rd(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function TC(e, t, r, n) {
  switch (e.type) {
    case hC:
    case Nd:
      return e.return = e.return || e.value;
    case Md:
      return "";
    case yb:
      return e.return = e.value + "{" + Jn(e.children, n) + "}";
    case kd:
      e.value = e.props.join(",");
  }
  return ar(r = Jn(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function PC(e) {
  var t = Rd(e);
  return function(r, n, i, a) {
    for (var o = "", s = 0; s < t; s++)
      o += e[s](r, n, i, a) || "";
    return o;
  };
}
function CC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var MC = function(t, r, n) {
  for (var i = 0, a = 0; i = a, a = fr(), i === 38 && a === 12 && (r[n] = 1), !ha(a); )
    $t();
  return ka(t, Tt);
}, kC = function(t, r) {
  var n = -1, i = 44;
  do
    switch (ha(i)) {
      case 0:
        i === 38 && fr() === 12 && (r[n] = 1), t[n] += MC(Tt - 1, r, n);
        break;
      case 2:
        t[n] += xo(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = fr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += su(i);
    }
  while (i = $t());
  return t;
}, NC = function(t, r) {
  return wb(kC(xb(t), r));
}, Pv = /* @__PURE__ */ new WeakMap(), RC = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Pv.get(n)) && !i) {
      Pv.set(t, !0);
      for (var a = [], o = NC(r, a), s = n.props, u = 0, c = 0; u < o.length; u++)
        for (var l = 0; l < s.length; l++, c++)
          t.props[c] = a[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
    }
  }
}, IC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, $C = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", LC = function(t) {
  return t.type === "comm" && t.children.indexOf($C) > -1;
}, jC = function(t) {
  return function(r, n, i) {
    if (!(r.type !== "rule" || t.compat)) {
      var a = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var o = r.parent === i[0], s = o ? i[0].children : i, u = s.length - 1; u >= 0; u--) {
          var c = s[u];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (LC(c))
              return;
            break;
          }
        }
        a.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Sb = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, DC = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Sb(r[n]))
      return !0;
  return !1;
}, Cv = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, FC = function(t, r, n) {
  !Sb(t) || (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Cv(t)) : DC(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Cv(t)));
};
function Ab(e, t) {
  switch (gC(e, t)) {
    case 5103:
      return Oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + e + es + e + ht + e + e;
    case 6828:
    case 4268:
      return Oe + e + ht + e + e;
    case 6165:
      return Oe + e + ht + "flex-" + e + e;
    case 5187:
      return Oe + e + Ne(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + ht + "flex-$1$2") + e;
    case 5443:
      return Oe + e + ht + "flex-item-" + Ne(e, /flex-|-self/, "") + e;
    case 4675:
      return Oe + e + ht + "flex-line-pack" + Ne(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Oe + e + ht + Ne(e, "shrink", "negative") + e;
    case 5292:
      return Oe + e + ht + Ne(e, "basis", "preferred-size") + e;
    case 6060:
      return Oe + "box-" + Ne(e, "-grow", "") + Oe + e + ht + Ne(e, "grow", "positive") + e;
    case 4554:
      return Oe + Ne(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    case 6187:
      return Ne(Ne(Ne(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ne(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return Ne(Ne(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ne(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ar(e) - 1 - t > 6)
        switch (lt(e, t + 1)) {
          case 109:
            if (lt(e, t + 4) !== 45)
              break;
          case 102:
            return Ne(e, /(.+:)(.+)-([^]+)/, "$1" + Oe + "$2-$3$1" + es + (lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~pl(e, "stretch") ? Ab(Ne(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (lt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (lt(e, ar(e) - 3 - (~pl(e, "!important") && 10))) {
        case 107:
          return Ne(e, ":", ":" + Oe) + e;
        case 101:
          return Ne(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Oe + (lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Oe + "$2$3$1" + ht + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (lt(e, t + 11)) {
        case 114:
          return Oe + e + ht + Ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Oe + e + ht + Ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Oe + e + ht + Ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + ht + e + e;
  }
  return e;
}
var VC = function(t, r, n, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Nd:
        t.return = Ab(t.value, t.length);
        break;
      case yb:
        return Jn([Li(t, {
          value: Ne(t.value, "@", "@" + Oe)
        })], i);
      case kd:
        if (t.length)
          return mC(t.props, function(a) {
            switch (yC(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Jn([Li(t, {
                  props: [Ne(a, /:(read-\w+)/, ":" + es + "$1")]
                })], i);
              case "::placeholder":
                return Jn([Li(t, {
                  props: [Ne(a, /:(plac\w+)/, ":" + Oe + "input-$1")]
                }), Li(t, {
                  props: [Ne(a, /:(plac\w+)/, ":" + es + "$1")]
                }), Li(t, {
                  props: [Ne(a, /:(plac\w+)/, ht + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, BC = [VC], UC = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var g = h.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || BC;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, o, s = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var g = h.getAttribute("data-emotion").split(" "), m = 1; m < g.length; m++)
        a[g[m]] = !0;
      s.push(h);
    }
  );
  var u, c = [RC, IC];
  process.env.NODE_ENV !== "production" && c.push(jC({
    get compat() {
      return v.compat;
    }
  }), FC);
  {
    var l, f = [TC, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? l.insert(h.return) : h.value && h.type !== Md && l.insert(h.value + "{}"));
    } : CC(function(h) {
      l.insert(h);
    })], d = PC(c.concat(i, f)), p = function(g) {
      return Jn(OC(g), d);
    };
    u = function(g, m, w, x) {
      l = w, process.env.NODE_ENV !== "production" && m.map !== void 0 && (l = {
        insert: function(y) {
          w.insert(y + m.map);
        }
      }), p(g ? g + "{" + m.styles + "}" : m.styles), x && (v.inserted[m.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new dC({
      key: r,
      container: o,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(s), v;
}, zC = !0;
function _b(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : n += i + " ";
  }), n;
}
var Id = function(t, r, n) {
  var i = t.key + "-" + r.name;
  (n === !1 || zC === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, Ob = function(t, r, n) {
  Id(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function WC(e) {
  for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var qC = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Mv = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, HC = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", GC = /[A-Z]|^ms/g, Eb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $d = function(t) {
  return t.charCodeAt(1) === 45;
}, kv = function(t) {
  return t != null && typeof t != "boolean";
}, dc = /* @__PURE__ */ gb(function(e) {
  return $d(e) ? e : e.replace(GC, "-$&").toLowerCase();
}), ts = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Eb, function(n, i, a) {
          return Jt = {
            name: i,
            styles: a,
            next: Jt
          }, i;
        });
  }
  return qC[t] !== 1 && !$d(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var YC = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, KC = ["normal", "none", "initial", "inherit", "unset"], XC = ts, ZC = /^-ms-/, JC = /-(.)/g, Nv = {};
  ts = function(t, r) {
    if (t === "content" && (typeof r != "string" || KC.indexOf(r) === -1 && !YC.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = XC(t, r);
    return n !== "" && !$d(t) && t.indexOf("-") !== -1 && Nv[t] === void 0 && (Nv[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(ZC, "ms-").replace(JC, function(i, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Tb = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function pa(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Tb);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Jt = {
          name: r.name,
          styles: r.styles,
          next: Jt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Jt = {
              name: n.name,
              styles: n.styles,
              next: Jt
            }, n = n.next;
        var i = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (i += r.map), i;
      }
      return QC(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = Jt, o = r(e);
        return Jt = a, pa(e, t, o);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], u = r.replace(Eb, function(l, f, d) {
          var p = "animation" + s.length;
          return s.push("const " + p + " = keyframes`" + d.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function QC(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += pa(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object")
        t != null && t[o] !== void 0 ? n += a + "{" + t[o] + "}" : kv(o) && (n += dc(a) + ":" + ts(a, o) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Tb);
        if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
          for (var s = 0; s < o.length; s++)
            kv(o[s]) && (n += dc(a) + ":" + ts(a, o[s]) + ";");
        else {
          var u = pa(e, t, o);
          switch (a) {
            case "animation":
            case "animationName": {
              n += dc(a) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(HC), n += a + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Rv = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Pb;
process.env.NODE_ENV !== "production" && (Pb = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Jt, gl = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, a = "";
  Jt = void 0;
  var o = t[0];
  o == null || o.raw === void 0 ? (i = !1, a += pa(n, r, o)) : (process.env.NODE_ENV !== "production" && o[0] === void 0 && console.error(Mv), a += o[0]);
  for (var s = 1; s < t.length; s++)
    a += pa(n, r, t[s]), i && (process.env.NODE_ENV !== "production" && o[s] === void 0 && console.error(Mv), a += o[s]);
  var u;
  process.env.NODE_ENV !== "production" && (a = a.replace(Pb, function(d) {
    return u = d, "";
  })), Rv.lastIndex = 0;
  for (var c = "", l; (l = Rv.exec(a)) !== null; )
    c += "-" + l[1];
  var f = WC(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: a,
    map: u,
    next: Jt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: a,
    next: Jt
  };
}, eM = function(t) {
  return t();
}, tM = Qr["useInsertionEffect"] ? Qr["useInsertionEffect"] : !1, Cb = tM || eM, rM = {}.hasOwnProperty, Ld = /* @__PURE__ */ kr(
  typeof HTMLElement < "u" ? /* @__PURE__ */ UC({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ld.displayName = "EmotionCacheContext");
Ld.Provider;
var Mb = function(t) {
  return /* @__PURE__ */ jt(function(r, n) {
    var i = et(Ld);
    return t(r, i, n);
  });
}, jd = /* @__PURE__ */ kr({});
process.env.NODE_ENV !== "production" && (jd.displayName = "EmotionThemeContext");
var Iv = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", $v = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", nM = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return Id(r, n, i), Cb(function() {
    return Ob(r, n, i);
  }), null;
}, iM = /* @__PURE__ */ Mb(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var i = e[Iv], a = [n], o = "";
  typeof e.className == "string" ? o = _b(t.registered, a, e.className) : e.className != null && (o = e.className + " ");
  var s = gl(a, void 0, et(jd));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var u = e[$v];
    u && (s = gl([s, "label:" + u + ";"]));
  }
  o += t.key + "-" + s.name;
  var c = {};
  for (var l in e)
    rM.call(e, l) && l !== "css" && l !== Iv && (process.env.NODE_ENV === "production" || l !== $v) && (c[l] = e[l]);
  return c.ref = r, c.className = o, /* @__PURE__ */ Ot(km, null, /* @__PURE__ */ Ot(nM, {
    cache: t,
    serialized: s,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ Ot(i, c));
});
process.env.NODE_ENV !== "production" && (iM.displayName = "EmotionCssPropInternal");
var aM = cC, oM = function(t) {
  return t !== "theme";
}, Lv = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? aM : oM;
}, jv = function(t, r, n) {
  var i;
  if (r) {
    var a = r.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(o) {
      return t.__emotion_forwardProp(o) && a(o);
    } : a;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, Dv = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, sM = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return Id(r, n, i), Cb(function() {
    return Ob(r, n, i);
  }), null;
}, uM = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, a, o;
  r !== void 0 && (a = r.label, o = r.target);
  var s = jv(t, r, n), u = s || Lv(i), c = !u("as");
  return function() {
    var l = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && f.push("label:" + a + ";"), l[0] == null || l[0].raw === void 0)
      f.push.apply(f, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(Dv), f.push(l[0][0]);
      for (var d = l.length, p = 1; p < d; p++)
        process.env.NODE_ENV !== "production" && l[0][p] === void 0 && console.error(Dv), f.push(l[p], l[0][p]);
    }
    var v = Mb(function(h, g, m) {
      var w = c && h.as || i, x = "", b = [], y = h;
      if (h.theme == null) {
        y = {};
        for (var S in h)
          y[S] = h[S];
        y.theme = et(jd);
      }
      typeof h.className == "string" ? x = _b(g.registered, b, h.className) : h.className != null && (x = h.className + " ");
      var A = gl(f.concat(b), g.registered, y);
      x += g.key + "-" + A.name, o !== void 0 && (x += " " + o);
      var _ = c && s === void 0 ? Lv(w) : u, E = {};
      for (var M in h)
        c && M === "as" || _(M) && (E[M] = h[M]);
      return E.className = x, E.ref = m, /* @__PURE__ */ Ot(km, null, /* @__PURE__ */ Ot(sM, {
        cache: g,
        serialized: A,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ Ot(w, E));
    });
    return v.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = i, v.__emotion_styles = f, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return o === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + o;
      }
    }), v.withComponent = function(h, g) {
      return e(h, Le({}, r, g, {
        shouldForwardProp: jv(v, g, !0)
      })).apply(void 0, f);
    }, v;
  };
}, cM = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], yl = uM.bind();
cM.forEach(function(e) {
  yl[e] = yl(e);
});
const lM = yl;
/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function fM(e, t) {
  const r = lM(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const dM = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, hM = process.env.NODE_ENV !== "production" ? F.exports.oneOfType([F.exports.number, F.exports.string, F.exports.object, F.exports.array]) : {}, nn = hM;
function ra(e, t) {
  return t ? Er(e, t, {
    clone: !1
  }) : e;
}
const Dd = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, Fv = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Dd[e]}px)`
};
function an(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || Fv;
    return t.reduce((o, s, u) => (o[a.up(a.keys[u])] = r(t[u]), o), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || Fv;
    return Object.keys(t).reduce((o, s) => {
      if (Object.keys(a.values || Dd).indexOf(s) !== -1) {
        const u = a.up(s);
        o[u] = r(t[s], s);
      } else {
        const u = s;
        o[u] = t[u];
      }
      return o;
    }, {});
  }
  return r(t);
}
function pM(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, i) => {
    const a = e.up(i);
    return n[a] = {}, n;
  }, {})) || {};
}
function vM(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Fd(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Vv(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = Fd(e, r) || n, t && (i = t(i, n)), i;
}
function oe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: i
  } = e, a = (o) => {
    if (o[t] == null)
      return null;
    const s = o[t], u = o.theme, c = Fd(u, n) || {};
    return an(o, s, (f) => {
      let d = Vv(c, i, f);
      return f === d && typeof f == "string" && (d = Vv(c, i, `${t}${f === "default" ? "" : Kr(f)}`, f)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: nn
  } : {}, a.filterProps = [t], a;
}
function on(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((a) => {
    n[a] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, a) => t[a] ? ra(i, t[a](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function gM(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const yM = {
  m: "margin",
  p: "padding"
}, mM = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Bv = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bM = gM((e) => {
  if (e.length > 2)
    if (Bv[e])
      e = Bv[e];
    else
      return [e];
  const [t, r] = e.split(""), n = yM[t], i = mM[r] || "";
  return Array.isArray(i) ? i.map((a) => n + a) : [n + i];
}), kb = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Nb = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Vd = [...kb, ...Nb];
function Na(e, t, r, n) {
  var i;
  const a = (i = Fd(e, t, !1)) != null ? i : r;
  return typeof a == "number" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${o}.`), a * o) : Array.isArray(a) ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && (Number.isInteger(o) ? o > a.length - 1 && console.error([`MUI: The value provided (${o}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${o} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[o]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Rb(e) {
  return Na(e, "spacing", 8, "spacing");
}
function Ra(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function xM(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = Ra(t, r), n), {});
}
function wM(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const i = bM(r), a = xM(i, n), o = e[r];
  return an(e, o, a);
}
function SM(e, t) {
  const r = Rb(e.theme);
  return Object.keys(e).map((n) => wM(e, t, n, r)).reduce(ra, {});
}
process.env.NODE_ENV !== "production" && kb.reduce((e, t) => (e[t] = nn, e), {});
process.env.NODE_ENV !== "production" && Nb.reduce((e, t) => (e[t] = nn, e), {});
function lu(e) {
  return SM(e, Vd);
}
lu.propTypes = process.env.NODE_ENV !== "production" ? Vd.reduce((e, t) => (e[t] = nn, e), {}) : {};
lu.filterProps = Vd;
function Ia(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const AM = oe({
  prop: "border",
  themeKey: "borders",
  transform: Ia
}), _M = oe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ia
}), OM = oe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ia
}), EM = oe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ia
}), TM = oe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ia
}), PM = oe({
  prop: "borderColor",
  themeKey: "palette"
}), CM = oe({
  prop: "borderTopColor",
  themeKey: "palette"
}), MM = oe({
  prop: "borderRightColor",
  themeKey: "palette"
}), kM = oe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), NM = oe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Bd = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Na(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Ra(t, n)
    });
    return an(e, e.borderRadius, r);
  }
  return null;
};
Bd.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: nn
} : {};
Bd.filterProps = ["borderRadius"];
const RM = on(AM, _M, OM, EM, TM, PM, CM, MM, kM, NM, Bd), Ib = RM, IM = oe({
  prop: "displayPrint",
  cssProperty: !1,
  transform: (e) => ({
    "@media print": {
      display: e
    }
  })
}), $M = oe({
  prop: "display"
}), LM = oe({
  prop: "overflow"
}), jM = oe({
  prop: "textOverflow"
}), DM = oe({
  prop: "visibility"
}), FM = oe({
  prop: "whiteSpace"
}), $b = on(IM, $M, LM, jM, DM, FM), VM = oe({
  prop: "flexBasis"
}), BM = oe({
  prop: "flexDirection"
}), UM = oe({
  prop: "flexWrap"
}), zM = oe({
  prop: "justifyContent"
}), WM = oe({
  prop: "alignItems"
}), qM = oe({
  prop: "alignContent"
}), HM = oe({
  prop: "order"
}), GM = oe({
  prop: "flex"
}), YM = oe({
  prop: "flexGrow"
}), KM = oe({
  prop: "flexShrink"
}), XM = oe({
  prop: "alignSelf"
}), ZM = oe({
  prop: "justifyItems"
}), JM = oe({
  prop: "justifySelf"
}), QM = on(VM, BM, UM, zM, WM, qM, HM, GM, YM, KM, XM, ZM, JM), Lb = QM, Ud = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Na(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Ra(t, n)
    });
    return an(e, e.gap, r);
  }
  return null;
};
Ud.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: nn
} : {};
Ud.filterProps = ["gap"];
const zd = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Na(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Ra(t, n)
    });
    return an(e, e.columnGap, r);
  }
  return null;
};
zd.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: nn
} : {};
zd.filterProps = ["columnGap"];
const Wd = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Na(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Ra(t, n)
    });
    return an(e, e.rowGap, r);
  }
  return null;
};
Wd.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: nn
} : {};
Wd.filterProps = ["rowGap"];
const ek = oe({
  prop: "gridColumn"
}), tk = oe({
  prop: "gridRow"
}), rk = oe({
  prop: "gridAutoFlow"
}), nk = oe({
  prop: "gridAutoColumns"
}), ik = oe({
  prop: "gridAutoRows"
}), ak = oe({
  prop: "gridTemplateColumns"
}), ok = oe({
  prop: "gridTemplateRows"
}), sk = oe({
  prop: "gridTemplateAreas"
}), uk = oe({
  prop: "gridArea"
}), ck = on(Ud, zd, Wd, ek, tk, rk, nk, ik, ak, ok, sk, uk), jb = ck;
function qd(e, t) {
  return t === "grey" ? t : e;
}
const lk = oe({
  prop: "color",
  themeKey: "palette",
  transform: qd
}), fk = oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qd
}), dk = oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qd
}), hk = on(lk, fk, dk), Db = hk, pk = oe({
  prop: "position"
}), vk = oe({
  prop: "zIndex",
  themeKey: "zIndex"
}), gk = oe({
  prop: "top"
}), yk = oe({
  prop: "right"
}), mk = oe({
  prop: "bottom"
}), bk = oe({
  prop: "left"
}), Fb = on(pk, vk, gk, yk, mk, bk), xk = oe({
  prop: "boxShadow",
  themeKey: "shadows"
}), Vb = xk;
function sn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const wk = oe({
  prop: "width",
  transform: sn
}), Bb = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i, a;
      return {
        maxWidth: ((n = e.theme) == null || (i = n.breakpoints) == null || (a = i.values) == null ? void 0 : a[r]) || Dd[r] || sn(r)
      };
    };
    return an(e, e.maxWidth, t);
  }
  return null;
};
Bb.filterProps = ["maxWidth"];
const Sk = oe({
  prop: "minWidth",
  transform: sn
}), Ak = oe({
  prop: "height",
  transform: sn
}), _k = oe({
  prop: "maxHeight",
  transform: sn
}), Ok = oe({
  prop: "minHeight",
  transform: sn
});
oe({
  prop: "size",
  cssProperty: "width",
  transform: sn
});
oe({
  prop: "size",
  cssProperty: "height",
  transform: sn
});
const Ek = oe({
  prop: "boxSizing"
}), Tk = on(wk, Bb, Sk, Ak, _k, Ok, Ek), Ub = Tk, Pk = oe({
  prop: "fontFamily",
  themeKey: "typography"
}), Ck = oe({
  prop: "fontSize",
  themeKey: "typography"
}), Mk = oe({
  prop: "fontStyle",
  themeKey: "typography"
}), kk = oe({
  prop: "fontWeight",
  themeKey: "typography"
}), Nk = oe({
  prop: "letterSpacing"
}), Rk = oe({
  prop: "textTransform"
}), Ik = oe({
  prop: "lineHeight"
}), $k = oe({
  prop: "textAlign"
}), Lk = oe({
  prop: "typography",
  cssProperty: !1,
  themeKey: "typography"
}), jk = on(Lk, Pk, Ck, Mk, kk, Nk, Ik, $k, Rk), zb = jk, Uv = {
  borders: Ib.filterProps,
  display: $b.filterProps,
  flexbox: Lb.filterProps,
  grid: jb.filterProps,
  positions: Fb.filterProps,
  palette: Db.filterProps,
  shadows: Vb.filterProps,
  sizing: Ub.filterProps,
  spacing: lu.filterProps,
  typography: zb.filterProps
}, Wb = {
  borders: Ib,
  display: $b,
  flexbox: Lb,
  grid: jb,
  positions: Fb,
  palette: Db,
  shadows: Vb,
  sizing: Ub,
  spacing: lu,
  typography: zb
};
Object.keys(Uv).reduce((e, t) => (Uv[t].forEach((r) => {
  e[r] = Wb[t];
}), e), {});
function Dk(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Fk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vk(e = Wb) {
  const t = Object.keys(e).reduce((i, a) => (e[a].filterProps.forEach((o) => {
    i[o] = e[a];
  }), i), {});
  function r(i, a, o) {
    const s = {
      [i]: a,
      theme: o
    }, u = t[i];
    return u ? u(s) : {
      [i]: a
    };
  }
  function n(i) {
    const {
      sx: a,
      theme: o = {}
    } = i || {};
    if (!a)
      return null;
    function s(u) {
      let c = u;
      if (typeof u == "function")
        c = u(o);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const l = pM(o.breakpoints), f = Object.keys(l);
      let d = l;
      return Object.keys(c).forEach((p) => {
        const v = Fk(c[p], o);
        if (v != null)
          if (typeof v == "object")
            if (t[p])
              d = ra(d, r(p, v, o));
            else {
              const h = an({
                theme: o
              }, v, (g) => ({
                [p]: g
              }));
              Dk(h, v) ? d[p] = n({
                sx: v,
                theme: o
              }) : d = ra(d, h);
            }
          else
            d = ra(d, r(p, v, o));
      }), vM(f, d);
    }
    return Array.isArray(a) ? a.map(s) : s(a);
  }
  return n;
}
const qb = Vk();
qb.filterProps = ["sx"];
const Bk = qb, Uk = ["values", "unit", "step"], zk = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => Le({}, r, {
    [n.key]: n.val
  }), {});
};
function Wk(e) {
  const {
    values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: r = "px",
    step: n = 5
  } = e, i = tr(e, Uk), a = zk(t), o = Object.keys(a);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function c(d, p) {
    const v = o.indexOf(p);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(v !== -1 && typeof t[o[v]] == "number" ? t[o[v]] : p) - n / 100}${r})`;
  }
  function l(d) {
    return o.indexOf(d) + 1 < o.length ? c(d, o[o.indexOf(d) + 1]) : s(d);
  }
  function f(d) {
    const p = o.indexOf(d);
    return p === 0 ? s(o[1]) : p === o.length - 1 ? u(o[p]) : c(d, o[o.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return Le({
    keys: o,
    values: a,
    up: s,
    down: u,
    between: c,
    only: l,
    not: f,
    unit: r
  }, i);
}
const qk = {
  borderRadius: 4
}, Hk = qk;
function Gk(e = 8) {
  if (e.mui)
    return e;
  const t = Rb({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const o = t(a);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" "));
  return r.mui = !0, r;
}
const Yk = ["breakpoints", "palette", "spacing", "shape"];
function Hd(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: a = {}
  } = e, o = tr(e, Yk), s = Wk(r), u = Gk(i);
  let c = Er({
    breakpoints: s,
    direction: "ltr",
    components: {},
    palette: Le({
      mode: "light"
    }, n),
    spacing: u,
    shape: Le({}, Hk, a)
  }, o);
  return c = t.reduce((l, f) => Er(l, f), c), c;
}
const Hb = /* @__PURE__ */ Qr.createContext(null);
process.env.NODE_ENV !== "production" && (Hb.displayName = "ThemeContext");
const Kk = Hb;
function Xk() {
  const e = Qr.useContext(Kk);
  return process.env.NODE_ENV !== "production" && Qr.useDebugValue(e), e;
}
function Zk(e) {
  return Object.keys(e).length === 0;
}
function Jk(e = null) {
  const t = Xk();
  return !t || Zk(t) ? e : t;
}
const Qk = Hd();
function eN(e = Qk) {
  return Jk(e);
}
const tN = ["variant"];
function zv(e) {
  return e.length === 0;
}
function Gb(e) {
  const {
    variant: t
  } = e, r = tr(e, tN);
  let n = t || "";
  return Object.keys(r).sort().forEach((i) => {
    i === "color" ? n += zv(n) ? e[i] : Kr(e[i]) : n += `${zv(n) ? i : Kr(i)}${Kr(e[i].toString())}`;
  }), n;
}
const rN = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], nN = ["theme"], iN = ["theme"];
function ji(e) {
  return Object.keys(e).length === 0;
}
function aN(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const oN = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, sN = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((i) => {
    const a = Gb(i.props);
    n[a] = i.style;
  }), n;
}, uN = (e, t, r, n) => {
  var i, a;
  const {
    ownerState: o = {}
  } = e, s = [], u = r == null || (i = r.components) == null || (a = i[n]) == null ? void 0 : a.variants;
  return u && u.forEach((c) => {
    let l = !0;
    Object.keys(c.props).forEach((f) => {
      o[f] !== c.props[f] && e[f] !== c.props[f] && (l = !1);
    }), l && s.push(t[Gb(c.props)]);
  }), s;
};
function So(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const cN = Hd(), lN = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function fN(e = {}) {
  const {
    defaultTheme: t = cN,
    rootShouldForwardProp: r = So,
    slotShouldForwardProp: n = So,
    styleFunctionSx: i = Bk
  } = e, a = (o) => {
    const s = ji(o.theme) ? t : o.theme;
    return i(Le({}, o, {
      theme: s
    }));
  };
  return a.__mui_systemSx = !0, (o, s = {}) => {
    dM(o, (b) => b.filter((y) => !(y != null && y.__mui_systemSx)));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: l,
      skipSx: f,
      overridesResolver: d
    } = s, p = tr(s, rN), v = l !== void 0 ? l : c && c !== "Root" || !1, h = f || !1;
    let g;
    process.env.NODE_ENV !== "production" && u && (g = `${u}-${lN(c || "Root")}`);
    let m = So;
    c === "Root" ? m = r : c ? m = n : aN(o) && (m = void 0);
    const w = fM(o, Le({
      shouldForwardProp: m,
      label: g
    }, p)), x = (b, ...y) => {
      const S = y ? y.map((M) => typeof M == "function" && M.__emotion_real !== M ? (C) => {
        let {
          theme: k
        } = C, N = tr(C, nN);
        return M(Le({
          theme: ji(k) ? t : k
        }, N));
      } : M) : [];
      let A = b;
      u && d && S.push((M) => {
        const C = ji(M.theme) ? t : M.theme, k = oN(u, C);
        if (k) {
          const N = {};
          return Object.entries(k).forEach(([j, L]) => {
            N[j] = typeof L == "function" ? L(Le({}, M, {
              theme: C
            })) : L;
          }), d(M, N);
        }
        return null;
      }), u && !v && S.push((M) => {
        const C = ji(M.theme) ? t : M.theme;
        return uN(M, sN(u, C), C, u);
      }), h || S.push(a);
      const _ = S.length - y.length;
      if (Array.isArray(b) && _ > 0) {
        const M = new Array(_).fill("");
        A = [...b, ...M], A.raw = [...b.raw, ...M];
      } else
        typeof b == "function" && b.__emotion_real !== b && (A = (M) => {
          let {
            theme: C
          } = M, k = tr(M, iN);
          return b(Le({
            theme: ji(C) ? t : C
          }, k));
        });
      const E = w(A, ...S);
      if (process.env.NODE_ENV !== "production") {
        let M;
        u && (M = `${u}${c || ""}`), M === void 0 && (M = `Styled(${QP(o)})`), E.displayName = M;
      }
      return E;
    };
    return w.withConfig && (x.withConfig = w.withConfig), x;
  };
}
function dN(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : eC(t.components[r].defaultProps, n);
}
function hN({
  props: e,
  name: t,
  defaultTheme: r
}) {
  const n = eN(r);
  return dN({
    theme: n,
    name: t,
    props: e
  });
}
function Yb(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function pN(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function si(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return si(pN(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ai(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ai(10, i));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
function Gd(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function vN(e) {
  e = si(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, a = n * Math.min(i, 1 - i), o = (c, l = (c + r / 30) % 12) => i - a * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let s = "rgb";
  const u = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return e.type === "hsla" && (s += "a", u.push(t[3])), Gd({
    type: s,
    values: u
  });
}
function Wv(e) {
  e = si(e);
  let t = e.type === "hsl" || e.type === "hsla" ? si(vN(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function qv(e, t) {
  const r = Wv(e), n = Wv(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function gN(e, t) {
  if (e = si(e), t = Yb(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Gd(e);
}
function yN(e, t) {
  if (e = si(e), t = Yb(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Gd(e);
}
function mN(e, t) {
  return Le({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const bN = {
  black: "#000",
  white: "#fff"
}, va = bN, xN = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, wN = xN, SN = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, jn = SN, AN = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Dn = AN, _N = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Di = _N, ON = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Fn = ON, EN = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Vn = EN, TN = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Bn = TN, PN = ["mode", "contrastThreshold", "tonalOffset"], Hv = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: va.white,
    default: va.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, hc = {
  text: {
    primary: va.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: va.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Gv(e, t, r, n) {
  const i = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = yN(e.main, i) : t === "dark" && (e.dark = gN(e.main, a)));
}
function CN(e = "light") {
  return e === "dark" ? {
    main: Fn[200],
    light: Fn[50],
    dark: Fn[400]
  } : {
    main: Fn[700],
    light: Fn[400],
    dark: Fn[800]
  };
}
function MN(e = "light") {
  return e === "dark" ? {
    main: jn[200],
    light: jn[50],
    dark: jn[400]
  } : {
    main: jn[500],
    light: jn[300],
    dark: jn[700]
  };
}
function kN(e = "light") {
  return e === "dark" ? {
    main: Dn[500],
    light: Dn[300],
    dark: Dn[700]
  } : {
    main: Dn[700],
    light: Dn[400],
    dark: Dn[800]
  };
}
function NN(e = "light") {
  return e === "dark" ? {
    main: Vn[400],
    light: Vn[300],
    dark: Vn[700]
  } : {
    main: Vn[700],
    light: Vn[500],
    dark: Vn[900]
  };
}
function RN(e = "light") {
  return e === "dark" ? {
    main: Bn[400],
    light: Bn[300],
    dark: Bn[700]
  } : {
    main: Bn[800],
    light: Bn[500],
    dark: Bn[900]
  };
}
function IN(e = "light") {
  return e === "dark" ? {
    main: Di[400],
    light: Di[300],
    dark: Di[700]
  } : {
    main: "#ed6c02",
    light: Di[500],
    dark: Di[900]
  };
}
function $N(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, i = tr(e, PN), a = e.primary || CN(t), o = e.secondary || MN(t), s = e.error || kN(t), u = e.info || NN(t), c = e.success || RN(t), l = e.warning || IN(t);
  function f(h) {
    const g = qv(h, hc.text.primary) >= r ? hc.text.primary : Hv.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const m = qv(h, g);
      m < 3 && console.error([`MUI: The contrast ratio of ${m}:1 for ${g} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const d = ({
    color: h,
    name: g,
    mainShade: m = 500,
    lightShade: w = 300,
    darkShade: x = 700
  }) => {
    if (h = Le({}, h), !h.main && h[m] && (h.main = h[m]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${m}\` property.` : ai(11, g ? ` (${g})` : "", m));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ai(12, g ? ` (${g})` : "", JSON.stringify(h.main)));
    return Gv(h, "light", w, n), Gv(h, "dark", x, n), h.contrastText || (h.contrastText = f(h.main)), h;
  }, p = {
    dark: hc,
    light: Hv
  };
  return process.env.NODE_ENV !== "production" && (p[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Er(Le({
    common: Le({}, va),
    mode: t,
    primary: d({
      color: a,
      name: "primary"
    }),
    secondary: d({
      color: o,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: d({
      color: s,
      name: "error"
    }),
    warning: d({
      color: l,
      name: "warning"
    }),
    info: d({
      color: u,
      name: "info"
    }),
    success: d({
      color: c,
      name: "success"
    }),
    grey: wN,
    contrastThreshold: r,
    getContrastText: f,
    augmentColor: d,
    tonalOffset: n
  }, p[t]), i);
}
const LN = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function jN(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yv = {
  textTransform: "uppercase"
}, Kv = '"Roboto", "Helvetica", "Arial", sans-serif';
function DN(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Kv,
    fontSize: i = 14,
    fontWeightLight: a = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    htmlFontSize: c = 16,
    allVariants: l,
    pxToRem: f
  } = r, d = tr(r, LN);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const p = i / 14, v = f || ((m) => `${m / c * p}rem`), h = (m, w, x, b, y) => Le({
    fontFamily: n,
    fontWeight: m,
    fontSize: v(w),
    lineHeight: x
  }, n === Kv ? {
    letterSpacing: `${jN(b / w)}em`
  } : {}, y, l), g = {
    h1: h(a, 96, 1.167, -1.5),
    h2: h(a, 60, 1.2, -0.5),
    h3: h(o, 48, 1.167, 0),
    h4: h(o, 34, 1.235, 0.25),
    h5: h(o, 24, 1.334, 0),
    h6: h(s, 20, 1.6, 0.15),
    subtitle1: h(o, 16, 1.75, 0.15),
    subtitle2: h(s, 14, 1.57, 0.1),
    body1: h(o, 16, 1.5, 0.15),
    body2: h(o, 14, 1.43, 0.15),
    button: h(s, 14, 1.75, 0.4, Yv),
    caption: h(o, 12, 1.66, 0.4),
    overline: h(o, 12, 2.66, 1, Yv)
  };
  return Er(Le({
    htmlFontSize: c,
    pxToRem: v,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: a,
    fontWeightRegular: o,
    fontWeightMedium: s,
    fontWeightBold: u
  }, g), d, {
    clone: !1
  });
}
const FN = 0.2, VN = 0.14, BN = 0.12;
function qe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${FN})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${VN})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${BN})`].join(",");
}
const UN = ["none", qe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), qe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), qe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), qe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), qe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), qe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), qe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), qe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), qe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), qe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), qe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), qe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), qe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), qe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), qe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), qe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), qe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), qe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), qe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), qe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), qe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), qe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), qe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), qe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], zN = UN, WN = ["duration", "easing", "delay"], qN = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, HN = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function Xv(e) {
  return `${Math.round(e)}ms`;
}
function GN(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function YN(e) {
  const t = Le({}, qN, e.easing), r = Le({}, HN, e.duration);
  return Le({
    getAutoHeightDuration: GN,
    create: (i = ["all"], a = {}) => {
      const {
        duration: o = r.standard,
        easing: s = t.easeInOut,
        delay: u = 0
      } = a, c = tr(a, WN);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", f = (d) => !isNaN(parseFloat(d));
        !l(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(o) && !l(o) && console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`), l(s) || console.error('MUI: Argument "easing" must be a string.'), !f(u) && !l(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((l) => `${l} ${typeof o == "string" ? o : Xv(o)} ${s} ${typeof u == "string" ? u : Xv(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const KN = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, XN = KN, ZN = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function JN(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: i = {},
    typography: a = {}
  } = e, o = tr(e, ZN);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ai(18));
  const s = $N(n), u = Hd(e);
  let c = Er(u, {
    mixins: mN(u.breakpoints, r),
    palette: s,
    shadows: zN.slice(),
    typography: DN(s, a),
    transitions: YN(i),
    zIndex: Le({}, XN)
  });
  if (c = Er(c, o), c = t.reduce((l, f) => Er(l, f), c), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (d, p) => {
      let v;
      for (v in d) {
        const h = d[v];
        if (l.indexOf(v) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = Cd("", v);
            console.error([`MUI: The \`${p}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${g}' syntax:`, JSON.stringify({
              root: {
                [`&.${g}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[v] = {};
        }
      }
    };
    Object.keys(c.components).forEach((d) => {
      const p = c.components[d].styleOverrides;
      p && d.indexOf("Mui") === 0 && f(p, d);
    });
  }
  return c;
}
const QN = JN(), Kb = QN;
function eR({
  props: e,
  name: t
}) {
  return hN({
    props: e,
    name: t,
    defaultTheme: Kb
  });
}
const tR = (e) => So(e) && e !== "classes", rR = fN({
  defaultTheme: Kb,
  rootShouldForwardProp: tR
}), nR = rR;
function iR(e) {
  return Cd("MuiSvgIcon", e);
}
oC("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const aR = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], oR = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${Kr(t)}`, `fontSize${Kr(r)}`]
  };
  return tC(i, iR, n);
}, sR = nR("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Kr(r.color)}`], t[`fontSize${Kr(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, i, a, o, s, u, c, l, f, d, p, v, h, g, m, w;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (i = e.transitions) == null || (a = i.duration) == null ? void 0 : a.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((o = e.typography) == null || (s = o.pxToRem) == null ? void 0 : s.call(o, 20)) || "1.25rem",
      medium: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 24)) || "1.5rem",
      large: ((l = e.typography) == null || (f = l.pxToRem) == null ? void 0 : f.call(l, 35)) || "2.1875rem"
    }[t.fontSize],
    color: (d = (p = (e.vars || e).palette) == null || (v = p[t.color]) == null ? void 0 : v.main) != null ? d : {
      action: (h = (e.vars || e).palette) == null || (g = h.action) == null ? void 0 : g.active,
      disabled: (m = (e.vars || e).palette) == null || (w = m.action) == null ? void 0 : w.disabled,
      inherit: void 0
    }[t.color]
  };
}), Yd = /* @__PURE__ */ Qr.forwardRef(function(t, r) {
  const n = eR({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: a,
    color: o = "inherit",
    component: s = "svg",
    fontSize: u = "medium",
    htmlColor: c,
    inheritViewBox: l = !1,
    titleAccess: f,
    viewBox: d = "0 0 24 24"
  } = n, p = tr(n, aR), v = Le({}, n, {
    color: o,
    component: s,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: l,
    viewBox: d
  }), h = {};
  l || (h.viewBox = d);
  const g = oR(v);
  return /* @__PURE__ */ z(sR, Le({
    as: s,
    className: sC(g.root, a),
    focusable: "false",
    color: c,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r
  }, h, p, {
    ownerState: v,
    children: [i, f ? /* @__PURE__ */ O("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Yd.propTypes = {
  children: F.exports.node,
  classes: F.exports.object,
  className: F.exports.string,
  color: F.exports.oneOfType([F.exports.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), F.exports.string]),
  component: F.exports.elementType,
  fontSize: F.exports.oneOfType([F.exports.oneOf(["inherit", "large", "medium", "small"]), F.exports.string]),
  htmlColor: F.exports.string,
  inheritViewBox: F.exports.bool,
  shapeRendering: F.exports.string,
  sx: F.exports.oneOfType([F.exports.arrayOf(F.exports.oneOfType([F.exports.func, F.exports.object, F.exports.bool])), F.exports.func, F.exports.object]),
  titleAccess: F.exports.string,
  viewBox: F.exports.string
});
Yd.muiName = "SvgIcon";
const Zv = Yd;
function uR(e, t) {
  function r(n, i) {
    return /* @__PURE__ */ O(Zv, Le({
      "data-testid": `${t}Icon`,
      ref: i
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Zv.muiName, /* @__PURE__ */ Qr.memo(/* @__PURE__ */ Qr.forwardRef(r));
}
const cR = uR(/* @__PURE__ */ O("path", {
  d: "M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4-1.73.83-2.99 2.45-3.32 4.4zM6.91 11c-.33-1.95-1.59-3.57-3.32-4.4-.83 1.29-1.38 2.79-1.54 4.4h4.86zm8.16 0c.32-2.59 1.88-4.79 4.06-6-1.6-1.63-3.74-2.71-6.13-2.95V11h2.07zm-6.14 0H11V2.05C8.61 2.29 6.46 3.37 4.87 5c2.18 1.21 3.74 3.41 4.06 6zm6.14 2H13v8.95c2.39-.24 4.54-1.32 6.13-2.95-2.18-1.21-3.74-3.41-4.06-6zM3.59 17.4c1.72-.83 2.99-2.46 3.32-4.4H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4c.33 1.95 1.59 3.57 3.32 4.4.83-1.29 1.38-2.79 1.54-4.4h-4.86zm-8.16 0c-.32 2.59-1.88 4.79-4.06 6 1.6 1.63 3.74 2.71 6.13 2.95V13H8.93z"
}), "SportsBasketball"), lR = [], fR = {}, dR = ["grid", "p-4"], hR = {}, pR = (e) => /* @__PURE__ */ O(Gt, {
  viusage: e.viusage || "wrap",
  emphasis: 400,
  classNames: [...e.overrideClasses ? [] : lR, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : fR,
    ...e.style
  },
  children: /* @__PURE__ */ O("div", {
    className: [...e.overrideClasses ? [] : dR, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : hR,
      ...e.style
    },
    children: /* @__PURE__ */ O(YP, {
      Left: /* @__PURE__ */ z("div", {
        className: "flex hover-underline",
        style: {
          alignContent: "center",
          alignItems: "center"
        },
        children: [/* @__PURE__ */ O(cR, {}), "\u2003Men's College Basketball"]
      }),
      Right: /* @__PURE__ */ O(zP, {})
    })
  })
}), vR = ["flex"], gR = {}, Kd = (e) => {
  const t = e.date || new Date(), r = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], n = yi("navigate");
  return /* @__PURE__ */ z("div", {
    className: [`text-${n}-500`, ...e.overrideClasses ? [] : vR, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : gR,
      ...e.style
    },
    children: [t.getHours(), ":", t.toLocaleTimeString("en-us", {
      minute: "2-digit"
    }), ", ", r[t.getDay()], ", ", t.toLocaleDateString("en-us", {
      month: "short"
    }), " ", t.toLocaleDateString("en-us", {
      day: "numeric"
    }), ", ", t.toLocaleDateString("en-us", {
      year: "numeric"
    })]
  });
}, fu = {
  TeamID: -1,
  GlobalTeamID: -1,
  Key: "mock",
  Name: "Colorado State Rams",
  ShortDisplayName: "Colorado St.",
  Active: !0,
  School: "Colorado State",
  TeamLogoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAIABJREFUeNrtXQd4VOXSnvRGKiEkBJJACqEE6R0EpDcRAaUoxUaRooAUCx0FRAWR4hWRpjRBeu/SCb0ltJACJJAE0jv/vLN7lt1kk+yGgHj/Oz6HNVvPmfm+mXfqIfof/aNk8m84ySdPnljxgxcf5fhw5aMkHzZ8WOJlPpL4eKx+TOAjgo/bJiYmWf8TgPHMtueH+nw05KMGH0F8+PBhauRXZfBxg48QPi7xcZCPoyyU1P8JIC/TK/JDVz7a8dGAD3Pt17OzMijp8V1KSrhPGWmJlJWZRpmZqfyYgs+SuYUNWfBhbsmPlrZk5+BODk6e8nwuSuPjGB/7+PiThXH1/60AmHFQJe+qj1c0zM7OpNjoaxQTdZHiokMp8VEkpSQ9EEYbe2k2di5kz4JwLuVHpT2rkatHZRaKtfabTvGxjI9VLIyH/y8EwIwEsz/l4221DqfUlDgKv36I7t05LczHis9NWcz/2PQcSub/ScvGQfIIsjEzIWszIit+LGFuQiWtTMlMz5WZmpqTS+kA8vCqSV7+zcjO3k1bXa3l42sWxOX/SgEw42vzw0Q+OqjUSjpF3jpGd0L3U3TkeX4956meYMbeSMyW435qDkWn5Qjzc7Q2gYO1NTna2JKVuTklpadRfEoKpWepbC6Y78pCKG1jSu58+NmbkW8JMxGQ5sJNTHhHVCGfii2onG8jRV3hFzbwMY1fP/NfIQBmPAzoDD56yFJLT6IbF7dS6MVNos8VupuSQ8FxmRSSkE3hydkEjVPZ05tqlA+g8qXLkb9HOfJzL0dlnEuRFet6E1OzPL8F9ZWcyt8fHUV3oiMo9H4khd4NoxPXL1F8chJ5sxACHcyopouFCEYhC0s78gvqQAHVOpOVtYPy9Do+PmFBRP4rBcCMh3oZy8c4PqzT0xIo5NwGunl5O2VmpMh7EjKf0OnYTDr5MIsiU7LJ3dGJ2rzSgBpXqkGNA6uTs0PJYjqXHAqJuEF/XztLBy+fpv1XzpGnjQnVdTWnWiUtRG2BYB98K7elitW7krWtE6lhLXbtnOcFaU2eE/Nr8cNSPqrg4m9d2UkXTyyX1Q96yOpk990MOvEwkywtLKld9QbUo2FralKlDuvppyv7YeIjuhR+g65G3qLr9yL473h6mPBIno/lx+T0VLI0tyAr/g4rfrS04JXt5Eq+7mXJl3cNHgM9y/Pu8dI5v9jHsfTXyb209uhuuszf3aCUBbX0sCQXS1P1jrClqnV7k1/VDqyq5LmLfPRlIZx9qQXAjMfZfsbHZFxHXMx1Cj60gOIf3JDXoct3RGWIqnGxc6CBrbtSvxZdqISNvUqF5GTT4atnaff547JaQ6PusFJ+8sznVcalFDVn4TYPqkNNK9UkB9sSmtcu3LpMP2xdSbsunKQ6Jc2pbRlLMeIgZ9cKVLPpICpZGiiZ0gEeWAjzX0oBMPOd+WE5jCxW/eVTf9DVM2tl+2ew9dzBK37fvQxydXCmoW17UO9mncjaUoXTr0Xdpt/2b6LNpw9RLK/u50kWZubUoVYTGsCCr+tfVfN8SOQNmrNlBW0J/pta8W7AYW6qMtaBNbpR1Tq9FLuzho8P+PmEl0YAzHx/ftjKh39qciwd3zObHty9pFph8Vm0LjydErNM6IMWnWlkl/5kZ20nr+2/dIp+3PYHHQ05/4/4IlW9/EQQ3Ru2EsGIYxB6jsaumEsxsRHUw9uKKjmqni/FiKl+q1HsW4hdusZHWxbCnX9cAMx8hAw2IT4DOHl8zyxKT02gTEaV68LT6EhMJtX3q0Qz+oygiuX85DPHQy/S9PW/0Mnrl16KcIAvo6tJbw2iltXqqdFUFv26Zx3N2LiMajs9oS5eVgQ7bWXjSPVbjqLSZcVvjFIL4dI/JgBmfis1brYLv36QTu6bQzk5WaLrF99I5Uei0Z160fBOfcWYRT+Kpclrf6b1x/cWi24vbmoRVFcEoRjtW/fC6IMFk8UbH+BnLb4FnLm6r40gL7+meEscH51YCEeL+ptmz8j8zXBEQ89vZGM7X/T9xUdZ9FNIKlnbONGyoZOoe6P2okf/PL6H+sz5nM7evvbSRiZvx0TRioNbycbSimr7ViYXe2d6u1EbCot9SD8HXyMvOzM20Lz0bx8jSyt7Ns4BMGI9J06ceHDSpEkRL0wAzPwmCvMvnVxBF/kAHXuQSUtvpVEQ69aNY3+gAE9fSkxNpqGLZ9D3m1dQembGSx/6zuFFdPByMF24EyrIqYSNHbWq3ohKOzjRzINHZRd4sBN3PzwYFprcylS14I91YSFsZSE8eO4CYOZX4oddfDiGnP+LLqmZv4tRDoxts8rVaeWIGeRo58he6B3qPns06/wL9G+jW9GR7Cvsp5oVKpGnixsF+VSkKp4+NGPfQbIwzSEf9qof3L1IltaandCZhbCOhZDw3ATAzAcEOABoHRayj84eXijP72Tmb45Mp651mtJ/Bk8iK0tr2nPhOPX8fpzo/X8rYfdCdQZ4elOAhzf58tEwoCp9u+8AmT7JovIshOiIM+TgVJYcXbwRw2jDQljOQsgodgEw883UBrfW/fAzgnag84+y2vmTV37HGg1owcAJZMZwbt2x3fTRomn/CpVTGGXn5NDW4MPizEG1epZ0Z1RXmb7evZucLXklsjq6e+cUubpXJjuH0qX4Iz4sgD+LXQAsWcREBiA2f3DLBEmKAOMvY53fMKAKLRk6lczNLYT5w36dyWgoR+fzLiUcxQOFgUvNSH/pGG1nbUPl3TyZ0W7kau8kKC0lPU1ZfLTr3DGyt7EV4wwhVPb0oul79rFhNiVXFsQ9tgne/s3IwtImiFl1j4UQXGwwlE+gMVQPQ0yz/X+Nl5j9vdQcmnU5hfzLeNNfY34ge1t7VjsnqO+PX0pIIcjLnzrXbSZBNcRjwHhNuDkznXVsFPsBF+kAGzw4ZC96t1jz+bSqVp9aV29A9dgj9nL1yPOeBwnxdILPcfuZI7wLDvF5Z9Dnb75PQ9v3lNdXHdxEY1fOpTFVbKmUtSkb5CB6tfMUQG6kPesx+rv4zAJg5sPAwIr6nTu6mAA5EVoA85OfWNGeCQvJy60sXb8XTu2mDqFavpVozBsDqGb5QIOZ8TgliTac2Ec/7/5TjN/zpLIlS9NHrbtJ8M9RKyZUGMUlPaZf9myghbvW0g/9R1PnOs3k+TFLZ9G+07tpZGVbCV1Urv22hC2Y4N7XLiyKam6I9gHzH9y7zMzfJE+sCUuXHbB44CfCfKze8St/pJ8+GEdtqjc0milgRL/mnendVzvSxlMH2EteTBEP7xcr410ZRo7p0p96Nm5L5mbmRn8eKvSzLv3EL/j893n0CqMi71IeNLnnUAq+dY3Wh0dRDx9ruhq8hsp41yEXN3+4y0MQyi6yDeDVj2W8LCcn2+zI9imUnvqYzsZlCeJ5r1kHGtiut7zv9M3L9A4zr5p3wLPFRRhXVypbnvo26yQJmeBbVxiXP5vHbML/4dyWDZtKdf2qsidr+kzf52hnT6/XbS4BxHKu7iLMxpWq08xd28nd+gm5WZvQo9jbVL5SK1xPQ7YHS9keJOX3fYWdzXcIIIZe2EiP48IlVYj4jlfJUvQlu+wK1Q+oRqUcnItttSK+P67rANo6/ke9utlQcrZzoBUjptGsdz8hBxu7Yjs/MxZig4qaOgKq4O5NY7u8S2vvpEsMDGF45ECYAE2/LdIO4NX/Kj9MS0l6SMd2zZAYz6bIDLr2OJvmvTeaKpb1e+6GEskVRCov3rlOdx7cM+qz2EnrP/uOqhthi56FXuHf+evUYTbcjyjAwZxi71+TXWBublWVd8EG3gXRxu6AyRJ3PfunQM67rPMPRGdQ22p1qFWNpi8MrTjxll8xYroIwlDCjtw4do6oiBdFZqbmNKPPcNp7P5Ni0nIk+4cUrBrojDdKBalDzE3TUuLp9tXd8tw21vumJqZsdIa8cIyOWP3cAWOoT9MOhb4XquH3EV8Xq8oxlGr5V6PXazel7VEqSI38tzoN2415GmDMDhiFfyDB7OwMKQ05z05Xt3rNGPWU+0ccJRho6PLX1fBPrxrwCaAVw6eRrZX1MwfkElKTi+QwDu/Yh84yr5D3RvHB9YtbFFU/1iAYypLyRGAJkrt5ZYcq0HYvQxgwtH2vQk8gKjaG9l48IaUgSKbfjX8gFwKmeLFKqMNIpHOdVwWRFEUIP74/lu4/ihUHSZs8nF2Z+dPJzsqmSEw/c+sqrTm6m45cOyu+SLbakwdEDmBnE0G5VyvXkooNFALkR/6eFaTIYHfkKerJsPT6hc1UsXoXtgXWvZi3I/ka4gvzA96DxCJuHBbdH5eRI6UjnWo2It8y5fX+KKoT/jy2h1Yf2ckXck1vsgW+QnxSAp0PC2WHZj07bJVpWq+PqbpPRaMYhYuf3fdTavxFf53ngdGLgsSQAxi7Yo6EoPNzEk/duCzHol3rRCCAofBbKpetoPczIzr0pjZTj1IHTyuGQYkUdesYeQc0RygAtVGLChPAO/gH0U7QqYdZUpGGH8xND9lVX8Te67IDm+VEjaHgm1eow7ShNJbh5tB2bxv1WT8PLzGw2s5ay2r1jWb+plMHacSSmZqYj6FeO64XR/OqdejTTu/wrq6i854qPoG8sPx54YZTC3dL5uV+CEDh7aJ8Yai6nmds4qMounB8qTz3x+00crZ3ocm9hooKUFb891tW0KBF0+jkjUsanZuZbVztEoJch6+coRgWJPKxyvcbQojV34t/Wk/7Rbf3BSQYSkv2baRPfptFmVnG11vBqy5XsrSowsV7N0iWr0o5XwniKZTJO37DmRPU2M2SUhJjqAJDUgtL23IMSVcwJI3PbwegRJzuhB6QP+4kZ0t+d0SL15QCJTlh1O3U8a1CfaZ2kFJBMA7MhDCG/OdrioyNNuqCsJoszc1pas+PDf5MbgMZx+rNUBW06u8dEjoxNi/tXMKBfh74JTWpVPMpo3nRIbB44144lXYsKbAZ9Hq9FvTl6oVSclnGlqT4uGL1N7DCupGqVFMvCmqLf+5HqOpSg2NVq6Nb/ZZPISEzqgvrQCSwkSlSVi0e6/kHCVIpCiHQ9dOO1Qa9F/bk5n3dFOy52yEGfRaR15FLvytSUcDIzu/qMF+ByBXZSKPWSGG++C8lnKhlUG0pQgOh8ltNLfTCUF7BqNWukZmeTPEPbspzIQlZVM65JPl5+hp8ktXLV6Si0tR1/6EtwYcLfR/C3hlZmTrPIVxcGIVEhdGHC6dIuLwo5Fu6rFHvb8Y2AsXGIK2y+8bqutk8OwDOl0nM3YuS6UrKeiLbp1FgdaN+NOJhdJEFADU29JevC62cmL9zTZ7nNohNyD8njtj+O3M/lzRjUcnYcEjjwBpS6Y0YmjSe3JeGHFtStWDpFQDFRKkS6NdZctikiPQZQ1idz0LQ7e/M+TyPilFoxaGtgqD0qaVRrFr0JXaS0lKo9w/jKfwZQ9zGXlsFDx/ycHSWPgdQ9F2N79JMnxEWTivq56b6Qw21on6G0PoTewt8vYS1DU3oMUicMiQ3oJPzwNvER9T929E0u99IgZyPkxOlTAS1owcun873u/dePEn1xvYRnI4slwcDBMDGb9b/Kp/XRyXtHaUYC+Unszcuo4vh1/P9fvw2dpIx/gZCIzfDj1JVJ3NpuVJTVX0CQDciJTxSZaTuM/opYWVFHiXLGPxj8E6BBgqiIYz533lVFdOBEBqMf1fv++BB9/x+rNGrFNAQDhMOQ6hP047UrYEq0IeKuEbj++b73ixGPKvY2TTGbwko40ObQv6W/098HKU8XVFHBalbQ93RRKF0rUSn5pCfe1mjsPmKQ9sKfY9PqacCNTczo3+aTE1N9J5bQRDWGArwKCfRURBC+2jNgqzVpfyaHeAjEopXrf4Mfv8j/qele1mjdLc2ElFq8suX9pRqiHtxD+jM7at06EowvVFPhcRO69HlL5ou3rmh+X9k9iow0oFX7eVaWmzgfXb2UFiGWBH+hm2COjM0+4fCX/S3oZ/QjL8h8dFdcnItj4AVClDDFAEIp5MTVQjmAUsMP4Z8r6F0gHU5XHrUziC80KJqXb2751Hy074wlLD803RQS68jtnN0+lL9Qca4GFq4cy39Z896qZIwVAA+LNBsdYenm7UpJSXcgwDwUnltAbiKV6fu3UrJUjkpLiXsDb4QdLbAMUOJCpw1NFwgKopqAld7Z/qw1ZsSSVScFawoGE2FSjuVlLqcu3yh4cWckNdejW6OLhTFnrryG/Bkv9u8nL7uPYzs1TmE6MexNG/bKlnpFuYW0sjRq3F7mtJziKjNQ1fO0Jg3+huWyzC3EluarOYp/Cw12WurICdtAaSr+0GdjEhqgKHwGVDgtPLwNhq3cq7O67vPH6NPOr1DH7MBw2oawnhfglGmpjSt11BJxCs7ZiNjehR3FVetECKoP30wnjrVfprJQ8nhsMUzxSnDYkFUtluDlsLc4fzbMY/jNO/9mxfXqeuXaO2ob6WWaPHev8QRLCgsrU1ONraUnp2mjhFpJiU4aAvAVqx8pupNqeoGaGNi66H37gjky8rOptavNJBgVYRWTAjfiJWGQxeFdNBEWtPYjqBgCjAynlUVwsTFQYCZCvPTMzN5FZvSm/VbSmgctUhwAMF0HHqTJrzq+7foolpo7CSC+WExdyVPYAihoi4tR8XbrKcCsNd2xCy1d0CG2lO3sbY16AfgXUL/I7Y+ZvkPok8PTF5M47u+J1VxBSGpnk3ayeOXq+ZThSEd6St+RDIEOyJ3mLcohFJCRcA7zrLu/rQbNfq8n6jGtxu3LfCzuI63G7WlfZP+Q+1rNqaj187RrI1L1XDX8MkGNryQ09WLWuExXCLtHfBEFVDTjc3lru/Mj9K0VAXUD9J537ETNaxDLzmeqL8Lqud3fv2HLSs1gaxq3v7y/l/3bpD3YEXi+2a+M4IWfPg5dZg+tMgV1tD3Cz/6QhYAjO178yeJysFORS6grzQKWsnOA6HY6qvuH1LNCoFkZWFFploLB4Bh1LLvNWrRmBxCDmJPeSPl5toCkG81V3ctWqrheUpa0eImm08flP4vMB96FVkk6Ho4XmPfGMAXnCFesLuzq8Tw0eNbgnebktRBeLpDzSb0apVabNS/p/eZcZcjbhp1DojP/zJ4gpQiIoSOMIV2EA6VbhAMwulIQUJY61jHQ11oGPckh7acPkzLDm4WO5A7CmoopaSnkpWVSpgWFprvz9BWQSmqF1UCsFbPVEhISzHoB/TVWAJJfP77j1RrdE9ePXt0XmsRVEcVwlaXpqIQa+2oWdS13mvCCEmY7N8oj0BGu75aQN/2/dTgC5757ifyGXxWAMCF42KPYDSR153F34W8tGrrq1RDjfKBOszHrms7ZTB9uHByHuarQhhOBp9PYloqWas5rTWtJU17B8Rqv2il9g4fpxo22wgXBhipT1UgEDZs8Tfk41ZGkEbvOeN5Naucn+T0pwIGrp7/4Xhx94f/OkscNoXMTM3EWP+0fbXYmYIIKx41ptp0NOScrPQ/P/uOhaLr7SakJGviSK0nD6Kvenwk8a9+875iGJp/XMjbzfCKvUcpKWRlpkJMipZReG6q/YeFlWol26lnJzzUgmKGbPl8dSCjjLlbfxc00bxqbRk3AEIWK3diBLWW3/QZrtkJ2mRmQOjCVI/BR3kpVn1u5gP9KI3hEDxSrWA+YHBBIXHko1H2aJD6SU2kVEZeCk8tLe30CkBivyUcVJVkpaxVyuF6IYE1ndh3pRoFh3LZKYtPTqBeTdprYkBgQIKeZD5UwY4v5+cKhGXTbQNK16FqcidrpvQcTK8F1c3zXpyPNvViRAYBoo22IDImRxJ6L0LG5yjjD+wcNNV6EdoCQMf3E/Q6iZRYBTlZmjLWNbxWv1UhVQlAOEevnZeKNW03/mpkmH4PMpeROxcWoqnVKSypA6dQd1foT9Zfi7yt8zdgLwzv3ww3C6K21RsZnsSJidAaIGVC9k5lFNQZrhEAowEo4wgLKzvpBhcIx1bjRsx9yeQYQgjlonipIMLkEwUeKqTYg8Jo5zndXmg4icD3A1t3Jxd7R53Xdpw1rG/6Ui5khUAcEuypGflDTBhffbspPwrhHeCmtsAYoaYeDBWp5rlOPgAt916YsYY+AAw0Qk74auRNquodqLPCEGbAfAfowpZB9SS6iRjPe+wt5l59uurhfh7UhEjje6+9UeBFQP2sPbpL87c7G3yEBZSO9sFte0gCJ+RumCbMgFYixKQKy19oE3bnlYhbBX4GBh7f+yglkf46sY+2s3N3OfymRH2XDZ0qlRM6QmZDrgyHAm+VIKxOPkBNgrVKuqnUg6+9Sk8fuaq7HW+yHkbspCnDuWHte8lFw7McsWQW+XqUExRSULJEYiNa1QPoESusnmgNM1/5LC5Qm/nKjlozaqb4GRLNTYgXh7Aggm+AuI9C8AmEsVrR2tyE+ick2kezQwZ4jQBkv+av0/g335PKuf25snWYOXGM/SGFly6lNCX95/QJ4JhcjGeQSqXwh6C2MLdH1z13Eli48tBWOs96GYG0Y9OXSrvOW7M/Y2cqsYCQRYpmpWmHMXKrl9x5hlkbf1P5J+ydrhw+Pc8AJommOpakVZ/O0AgXMafktPxh9K7zx3QS9BAioEdkbP6R2AwWWvdvR4lDt2fCIlo8eCLbKjOavWm5OqGjC00vhF1lZJUmM+vkN8pW0yDj/ASQ4+pRVebi2FuYSEv+sdBLIsmnTpc9dWfvFoxB3Kb9tCGMze/SJx370NHpy+j1Os3zjf2Eq6sKctftrz6yK9+Lnrvtd00F3Ox+nxZoZ6DD4f3C60Y0cw5D3/zoj1yZrXLqnatAZH0EI73zywX0Xb9RshjgoWP+BUIs6EnIfW5H2JiXszWTqY4Y8oFeYvBYWew6AmCmAfSfsmBHQdkqFR1VEwmPXNUtXJ3Kq14JlCGiCCFMXLNQQtHwWFfzSoRjpg/2YRcgb6ADUdlT1VfygYDXgh1r5f+RR35Tq0AsXzgcWINGdVbldRftXie55dwEZ25vrgoH5ZxC7uYdAWRlYUGT3x5M60fPpsCyPrT0wGZq+mV/2qLOAGJHLhr4pdpGPkVqSNxUdFSrHzd/xdE9reZ1nh0gAEKMnFct+aOmi8qIrVFnrpJ4SyORgcqGNSNnaToiAQ+RLWo7ZZBcAOzD7q8W6kykegonr8lKzQ0dF+xcm+e9eA49xbArE7V60gqj4R17ideNwNmCHXlriObzc7kdQB912CJ3zAltUpvGzZWEEmJV7879QiK+ijrFQtw0bg6rQBcJ0CFMDcKom+Cw6zKhUZunkIsORM51btJT4x3QTDArZiGgAXkbSxKBOTBeKQtB4/WvQyayOnraOnQtKkx2A3Q6dOpaFhJK9nRTgMGCYnLjfERJtUO8QD5r1KoJdsaY3ARw/9d9hsn/r+XFk6WlQqEuUEafJ3XI+huOp/Y5VCzjQ9s+n0evsN+Cao+2UwdLXaxCKCjGQlS8Ynyvt1qQa4/tojK2plTWVuaeqXn6lMd6BcBbA83FIfCIXd1V0LNuSQtKycigLadV260C/8C643s0MZq5742hno3bab4Dhq//TxOYodslyIZi1s5aXS3wMrFjlBX31MBlsjFbpgNPobJqsV5tU72B0RFZBNcQwweqORrydFrLtxuX5fGURQXxLtO2C1Ar60Z/K8UFcAI7fTNcs7pBSDot+XiyZgIAdg52KzxphJ/XHdtL9UqqVn8pj8rKlN4QNY/z3QGgpapd0FwlAFdzQmwO+hSqAiGH1X/vFKinwDc0THSs1VTH6x25dLYIAUKa9/5YTagCOvmXvesZ0lnl+WG8H7sIdPKGaoLwAC0f4cb9CJrx1xKJzWv3IyB/gIKwr9f/SsFafsgHrDZAp25c0jBp9RH9ZSWICSEMrkJULmzHZkpCBnlhoDs0lygEYwudr+xiwGg0byN5A9p6+gBf50Oq7aoSgE+Aph53eZ7dqudcgPmyvPyaiNcGNxp67HJkGO0+d0Te0Ld5Jxr52+ynX8KoY94H43RQAIQFvIxyPkRLAdkU3T/9z8V6HR7sjPG//yj/jxJ3wMLWWqv/41++kcFPeKw5+m1afnCLJP7rj+1Dg3+ezqhnJfWf95Xm/fX9g0Q9KPWqYFJ+jd9YMIjc4lyxsrHygdpQ0qgtbNijpUOn6My+wM7FiAb4KLhuoK+6zHxHRpKYQVrWV0IX2WreFiwAXtGAIxsQlvCrolItrT0sxSfABYKQLLnHulKJ2aswuiWf+CQxWk8Zmk2Dfp4mzhu8X0BEvA8qID/nC2k/OF7xSY9ZLbiRvVZatIZW5TVUHQQMBt3XCoNrpzGxO/3YOUT6EQVVBQ2OUjJcSKNiIaVkpElIWtnpco3MdFyjdmkioCZQ0cdtVdVye88foSu8izH2EuRXtb0IgekvPp8oQ3aACBX/BLzyOpmZW4oxqepsTsG3Q2nfhaNyYRN7DKSJqxcKDNV2hqDztSve4Ox8tHCKMB11N+PffL9Q/Q3/Io71f+6qCJSOXJ2zgX4ZNEF0vDaCmTPgMzr77WrZadqEJHw0+wSAyYUR6jg/bN1NtVtW/khXInV36dSeQ2QKjEIPHsfLzhvevpesfqhe2JgarDEQ/zEztyL/aprWru/0/abeAPukSZOiJk6c2JRVUPm0lDhpvXe3MZPhTME3r8rshfKsTjCSDJCua/3XNCgFqxaq5JjWLFAp8TBRYXQwDl5oTAG5Buh0dFtiVcL1hzrQJLh5FaIaAegLSXaovz0TF1Ft3yo6GS1x/BgyQ90B2aQVUuICfb582DRpP9rBKA69CjoR0BoN6avuH2mhtCyBpLiuHwaMlvNYceAv+p3tY39fGyrB6gerv1wFUT+HeNFO0YvYCjinCfinUs3u4kAATjVxs6TbD+7TvG0qD3PyW4Nlq2JGkHbLELoEc5dszNu+SowoTtSQXaAQVJi+LBgQ1pssBJSTCeyUAAAKtElEQVSb6EuOwKOFPch5YlhhQf8Wr8s5Y8d8obZD2vmJb/qM0Hnus+VzpCVrNnvFSCLFJsTRtPVLqLm7pQTfYD8Dq7+pw0ujBMASQ0nvZkyKxQwcUMeylhKi+HH7agqLjqBSjs6SvUIEFLlTBW8jqKW9WpTgFwwoCN2FmOVgCKETEqlCtDDlrkR4xMjkcUpyHjiLCubmE943OJGP1f+xuuJ5zdGdDABidB07XlDuWp490Bb8lkFteghMlqTPmgW8LVKonadK91ep01PCz3BumZcH8vvtwlL76JhvG1Cts0XYtb1E8RHU1cuKlt5Mo4GLptHm8XOlcx11ocDQeA55XSAJOCkVPX2kLUghuO4z3x0h6gqQbcLqBYYltdmOfPHHPNp4SjXFEAjp7O0QKWNUOXenKcjbX5LwYQgzaJU8GkJNKtfU5ChyFxBA5fVv/roG2U378xfZzUgqKeWJm07splXH9tH7/jaST3cs6UMBQZ1EUwFgFfTbBQqAJRfKP/qtqan5uJpNBtKBTV9QHXYuLj3KpuA711nqC2lyr2E0rfdQMcZg8L2ZD+lHds4AOWv4BOoIAEYV70PeFRdtLKGLEuMIFOwNJwv2xlE9i05BM75DOhp1zxl0fCowGBXc2oR6UsS4gKQ+W/aDXCOqvX8epPIDwqLDaeSyOTICv7qzuUQQajGv1IO+cd+BK0UWgJJS5aObm2eQf0C1ThR6YRP19LGiiORs+nnvRmoYWJ3a1mxKvw6ZRO2mDZH2oaZfDhD3/XLkLb2rGeRqRFmHQsN+nUHf9R0pXfa4+NydKgAFY1b8YPQNf5SMGhZI7r5hqLFWkwZKWTrsHRxLTAZDL0EGe75o+ithkk7dvVUAAGMJcLMgxPwK0v0FoqBciCiLERHCof3cPKuZooU1MzWOfO3N6fjDTNp5/gQ149UcyBAT3u72s38LRkcIGfGc3DEaZKqwgnBhfxjZ7ABvFd4yslBQQ8hKITyw6dQB8ZCnMHIxtkcZFMiqEgFE2C40+2l7vQqKw45TFfmOkxAHwg2DFk2mE6EX6eNAW8mhlywdSPVajkSFISx/V179159ZAGohRLAQzExMTV91K/sKhYXspRKmWVTK2oxOPUijbWf+ZpjWgHG+L71RtwWFPbirt8luYJtumrjQHEZS2j6EMQTnCJV3qMBDxzycodyG0xiCnwA9D4RWzrW0CDT3LoLq++3jKVLYBRq3/Dtad2I/9fezkYQLJug26zyFLFWlPTOY+YsN+W1j5oaigbcR/0AFRxcvirj5N3nYmJCduSmdfpBMexjbAxJ6uLhJjrg9e8tI3qDmHnP60eT8kdrJQT75yz/mF+HeYM+HkMWD/m/COxg6HygNKx4qDnfdGN/1fdm5ChKaveEXmr97A/Usby02Efq+Uesxcr8yUt2xrz8vWoPwr1Hj65lh8IjQ1uiNmWinD/4kz2OIH8YXe7EThrRgBXcvvZ9HaGLloW2Cfl7G4a0DXusizEbYPZ/rp2lr59O8neupU1kralPGUlhYt/kw8gl8TVAzbDqvfoP1oNH3D+CTAGRAVM7x8ulVdPmUyinbwkLAbUpc7R1kYlU1n0CNEdvHMBVlizvUuvtlJiAq6HhUOcBrV0YTIC376ZIZtJrhZkdmftsyKrxfrX4/CqwhIzZgOJow842aVG50myJGtLM6QlbiLYxuz8hIprjoEBlUB3UUHJMsQ1grlcGway/B14evnpGQhbEjbf4JAhJC/RKUI1QmPO7HyY/pg/kTaevZo/Q2qx2MoBHjXeNNcbhIdYOf15n5x439vSL1ibIQwlgIKK3o7uFV0wwZH4xyx0j30jZmdDY2jQ3UAUpJS6JGuCcYryJMyoLuf5ZRAS+CkGwf3aWfDB2Bb3H25kXqMfsz2ckwuHUkyWLCK7+vwnxkd7ox83cU5feK3KjLQrjOQkBhTVfeCea48RmmqsMwV3WyoNCEbDoQcoUOXjopt46qxiiiz6sdJFwB9JNtYPPHi6R2NRrRb0MnU9vqDZnFT+jnnX/QoF9mklVOikBNoB0Y3LrNh8o9xkhVYt6dmb+5qL9ZHDfxQbpnPdQnbu2B+8igDQcDKlaFpcu4M1teSZ907MUw9C3pOkR8Z+bG32j98X1FnlxSnARoiZFncPBAl8KuskM3h4JvX6d6rhb0FjueqJcFxATO91Al2B+rsf6+Z/nt4rqNFaq5cBurckmP78mg1/iHKi/4FAtgQ3i63LYwwL0sTe/9MTWuXEcTLl60a63UBSUZ2AxSXARPGsZ2cNu3NOEN6PpZG36lJQe3UQnzJ/Sml7WmMgROVoPWo8m2hITGUVjb4VnvoFRsAlALAZVNq/holpOdSZi0fuOSqjwQXZdbIjPocEyGzJ9rHFCVhnfsTU2q1NVkt5DThSAwL/p5+gdoFOnRsA31btpOEkiguIQ4+s/udbR4/yYpvWlW2pLae1qqOoXYvlV85Q0KqveOcptFrPiezPyY4jif4r6Vobk6doTbGZpGR56jM4cXEWbQgSJTcmhbVDpdjM8SlFGrvL9UN7ep0ZgsLVTBNJSNwLNGhPNY6IUCywsNIVQpVCnnJ/1mKBzQHih18+5t6f9acWgHpbBf8ooz7wqGmGXUxbSIaiKwpo7tQFd+A5+0OG/s+bxu5ol4wxIsOOyGa+fWy20NlRs1YwwybvpzJi5TdoSTrR11Zi+6R8NWVMuvmqa0EfYBAbYLd27QjfvhEvdBVQWmNaIwCpAx+0mONPnZWFrL6Bl4r96lylAFxvHo2gny9hOPXKH4xHjaeHKfVFsHh92Qio/ajGyQ91aqmJHDrVK7J/kHdVSimkgs9OfzOlzcvHqet7O1U++GoYi6JifGiBAQR8pRJ24wP+FUbBadfJipmSjixo4cOlBw5w0E97xLl3um00xLT5E7daDRDkNZz4XfEgSGmz2j5gnVC86Wqu9HDrdCpdaC79XJFEDM7wH6lHr+f40AtASB+kQkpKWEDiNbMBL51tWdOrcuD0vKpuC4LOlJuJeSoykcdLSxIb/SZeWGzj4sDC8XV7KztiVrKxuysbIlSzMzqV9Nz0ilVGZ2bFIi3Y6Oouv3IyRrd/vhAylFwYWiuKCiA+4hbE7edk8ROFY8YKXc0NlG0+wBA4ZJt8/1znMv8pbmCJZgIrsUlGI2EUY53gndR3Exul0ymFcHP+Km+pbm2B0Yn/PEiItytjQlN9zS3NpU6vMDHMw0jXLqbBOVcq9M3hWbUznfxkrpCOiAWs8ffBF8eWEC0BIESuiQ6oQnI0o3IT5CZpXi7nS4+4Q+FIT71jxIeyKTXDBMBMgqPVt1AWgsRwk40oG2zGTUs1rqyXYDxTi7+TOOr03eAa+Snb2mmQQGFkVOs5/lvpD/CgFoCQJlE5hTjXG+PhpGpydSTNQlGR6I+XW4kaZyJ26jwwrsnaMtyMUtgNw8q0mNprpHSyFsPZRiLtFXNPVfLQAtQeAc4JmhhgPFldXyBMhSHwuUTUqIpqzMFPG0MXUkk/U+5lug+Rld/mAuvNUSju7CeAvLPON2YOkRPkHcZv3zuEX5v04AegSCPp9GaluBhlx42a5F/DqUM8NbBaOhWo4y0x++TNf70gkgH6G4qNUUqnvhvuJvtJsgLgyDATgFjw3ldmiJQYNzWHHddvx/9F9M/wdbb7xVln93LAAAAABJRU5ErkJggg=="
}, Xb = {
  TeamID: -2,
  GlobalTeamID: -2,
  Key: "mock",
  Name: "Georgia Bulldogs",
  ShortDisplayName: "Georgia",
  Active: !0,
  School: "Colorado",
  TeamLogoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAIABJREFUeNrtXQdc1WX3/7IERMDBdgCKCiiuFDfuvfdMU19L32yZmqaVVqZZmZam7bIcZe7ce+UeqKCAsgQUZMje8D/f595LgIDQePP/vvf0ebjCvfc3nnOec77ne87zC9CLXvSiF73oRS960Yte9KIXvehFL3rRi1708h8Rg3/qxPn5+Ty3hYxcGU/JsJcRL+O4gYFBnl4Bf9/EG8vLPBnPayc9v9h1HJXRV5SQ8b+gAMN/4Jwfy3hbZt0+NikDuXn5Br8FRGPDyduIjE/l+11kvKFfARW3bEt5sZYRVZoLkc/Ukpew9Kwcw+6L9iAqIQ3xyZlo5WYLEyND3HuYhkvLhsDI0CBLPjdNjvPtf7sCjP6Cia+2cOHCrfLPr2S8KuM5+T190aJFF4p/Vv7eV15G/HoxHHsu38WNj4dhUtcG6Nm0Fv7d2xNfHw5AckY22rvb87oGyucPynHu/jcrwPhPBtE+Ml6T4ZOWlYPE1Cw4VqvsIL+vpmLEghfLq4n83lXGUhnN+N3Y5Ay42FaBsVi9fL7gmL/M7o5+i/chLy8fc4c05fFnyPhN74IenXxbedkioyN/j0/JRJt5O3DnfhIGtnLG5le7cXLpRu7IaKiLNQmpmXiQmIHP9vvjbmwqXh/WDP4RCRjX0a3g2EH3kjD4/QO4uXKE7k9JMpaLMhfpXdDvlr+bVv9Aguh7W67glW/P4qvpHfFy/8Z4f7svnKpZoIlzdR7bNjUzx8DvbgKWyd9HfnQYn+71g//dh1gyvhXaN3TAnHXncPFOLGytzUUpKepzA1o6o21De90pTWV0Fnd0WNxRuN4FAR1kdKLVd5i/E2+PaYm69lbo6Omg3nx9aDN8eegWalia4u1fruBC0AO1zmjlRxf1Q22bKnCoWhk37saj+aytmNC5PpZsvYrNZ0IkFtTEhE4N4OZohYmfHlOKGeztgsVjW/LQQ2Sc0isA8OaPredCYV25Eka0dVUuiHLM7x7+1d0dOy+E4cVvzuB5CawrJ7VF4zrVYGpSdLHNX38Rm2Z2FUWZoXYNC4xdcRQXZMKrVzEVF5WMOYObYEYfI7UitGKvD8IaSeEP68omCIlJVn/gpFFW7fFD50aOmNKtoVh4glivs7L44nIr8iGm9mioXglDJ8vnzwTG4FP5/oCWdbD9tR7qc/uvRsDV3lL3tS7i/tbJK9HVYYkJ/v+rCojmjzoyseLfC/64+bcQCagPERGXigO+kbASBfV6Zy8OvtkXNWtYFDlAmnzvoSCmX8TttGlgp1DRhxNb43JwLIa0din43IXbD9DB3UH3q5OMp7WDseg2gZOM7TIuikJy/1cUUIc/bspkt6lvp9zPumNBmL/hArJy8nBGstq1z3VgMoV/9/JUQXfpeG9cD4vHG5su4dke7ujq5YRZ35/D/jf7wFg+N/O7c1g+qQ1Gta+HZ9ecVLHCStzbD8eDsF4y5HnrLyh317CmNdpJcO7drLasLAtCp7nakSgK8ZPXCBlXiNBEIUH/lTBUbpS4fyktvevC3Qp6VjI2RLZMPkmd4DWjEZOYrtCNpXkl5Y6aulRXCsuXD/RuXgvJ6dkYsGS/xIhG6NmsJhb9fBnRD9ORJx+gohLl/ZZ1bWAnyOjOmev44vIuxOYawq9ydRypWgv7qzvDzc0RQyRA92lRW8UYQ4Mit5KvRWrzRBE3ynFPdlq4TPd6Q76T/UQqQC6UbiA4Ny/flNwNORwq4K4oIzAqUU1Y5JdjcehaJALk96dkEudvuIifJNjaWJlh3o8X0EsUECE5wMzvzqq84Pk+njh4NRI/vtwFzV1rqPPsvhSuVoXfimF4SYJ5q583oYf/xYLryDYxwW7betjo4I5z5jaiaBPUd7RWyV0XWV1jO7ihqkUl9VEZ78hYXBI9IvdD37hWxthCvNhDGT9qv3P/icoDBIsTgk7cdyVC3MlFdG7shBauNugu8JGrwNLMBOM71Zfc4CreGtFC8Tt7Lodj0+lg3ItPw/fHAvHN4QCkSAyYPaiJihNXQuLwQp9GaCuxwLySxiM2cLKGm4MVzgmEfa6nO1668BDDom7CKEtjmEZ5eXBPjsWIe7cwPCEETulJyIpPQlTwfWy/EY2PDgRychlfjMQVktxrLte+U/KI7GL386W8TJCYZHBUEFycuFP7qpXNZDUR6U2S94/Kd6KeJAXw8zMIHX88EYRlE7zRSVCPV53qCk5eE/cxol1dQTeJuJeQJhMYg7UHbsrk2sukZ8PWyhwNnarioATpg9ci8CApE/MlG67nYI1V+/wVmqqlDdi06B+O35ZVZIvNV6JwxsgaRmaVYCdGbZqRXnBNVlkZaJoYjZ4xwRgeE4gpUTdQSxSyKiQTm6/HKBdlZV6J7uUFuf6JMnrLaCCDFMlS8VVGXd/aLavIGDcFlX0gsDdP/tjUpQY5kv7yue9FCWlPhALkQuLkgnqKpdZ2k0l7/svTkgfUVRifyGf9idvK6k2NjfD1kQDeOKpLQiYBE58fuKU4nhM372PZ094qgZvcrYFyVbLU8WLfxiq3oC+vWV2jBKIsuqpfX++FBt4eyGrvjV/qtcCxnMrwCb9Vsk8Vy28oq2NcdADupObidd9klVmLcomVbbjAmFnT8nX3/9PpO1gjwIHGNKZjPXwlqzQpLZuGRQxcVe771yeGihAFHJKXKfUcrEzvS+B87cfzMmGVMVdec3LzsWjUU+j7VG3JB5w0/jo3Dy52lmQ4sWB4c0VBP9vTA84CY8MfpKr3Jq0+oYJxD3Fl20QJcmxYmBrDSY7LrPqVAV4K9jaqXQ3Xw+OBc1fgfT+k7BsTN+UTFw67pAQMO5+CJduvqWPtu3pX4layMpRaomgqnCv34p0HihjkSu7VrBamf3FaUFldca1GjeSePxElZD0RCpALSZQLipN/DkhOz8KWs6Fwr1lVrYAPJ7RG9yY11edO3YpWBRZaMymGRuKmmLwRAdG6EtMUc4rPxPVwBZFJvXA7Fq8O9FKTTzl8LQo//xYsccADxkYGeOeXKzi76QgW+R6AQe6jJYc8Q0O1AgpLg5Q4eKXFYXtVZzhJkObq9ItIwEc7r6tzM5kkMcjVO0viEs9NpfiGxavvy73xYg7JfYc8SXS04ujTsnLhWasqZvRtpCaHy5fChCxUbowuJCM7F8f872FYG1d8svuGcjNLx7XCMrFIKuPwwr4Yt+IoPtt/U9EPDMo6NFRL3DBzi8mrjiPkQQocAm5hle9eGGQ9ihI3uDTDQW8fvHxsG5rGFC0h+MSG4QOT08h5ZhZe7NdYoyxxh/T5/pKxbzh5h5aOlAzGKTMNFCJzm1RQFa3xpNUDVApsJpZLN0EsSxfDZU3ZdSFM+dOtsjqYzRKn+8rECnxFXXtLTP7shJp8WtpxQR+0NuYORmLBtESdAiQQYvf8Xui3eL9K+Oalx8M4M7PIhaSbVMK7rfpiwMyRmCxuZ4+rHYy++gyN44qCl0H3ArBi9UZEtHldBXpDSQDp0jgIHMjYviyQlyt2SBsXBRQWDG+h+/rfhoT+aE3YUsMHVVKTSqlnb1XwZmuBlGFiscTnVJB9VXN0E9dERLTjfBhSH6aiV3wYrNOSsXjrVbVaKKQiElKKTnDLerY4uXiAssx0U7Mi76WamGJB19EYu2AcPtx5DU+vPIYMUciOSdMQUO1R7m76jZNYtnp/iTdEReyY2xOe8jrwvf3wcq4uiI0VViSS6niS6gFNSIbKMOdNH/e7jySJBQniw/sK5FOkjVjRXsH/OaKcNeJamN0yiCZcvYVP75xAfWRgRshFNMwUuJhjU3DsuORMSaQc1QoozJ4yMDpWs8DVK8HoHn5TswSNjLCg03BMeHEQnlt7SqEpZtwk8Fp5OsG3QWO4BPijasbvCNI4Pw9pd6PxtbGDCrTFsmcN1VvfFh7iVonaRrZzRbUqSuvOEve2Sxz4Z1eATD4j7AESoG/9dAnnBeeffLe/Kqr7hsapz/DCmZTdF5eSlaPhx+g+3pUYMTU2AN4PwvFM4HmkGxihc0wIahjkYoIkb3RTDNrME84Gxjxybk5GYHUHMRnNJX/UqDPGvTgYMwQKE1ktHNUCF5cNwYrJbSWHsEJ+QiIiLao+cpyeD4IRtuUQurz5qwq+JQnj1WyJR33e3afyGS0B+PKT4IJYdLcnnKMr2fdGH2Wd3bxqKq5n+a7r6CoWrAtyVcxMfkcogk621air/SUPtimJMMzOxuCEUMWGfjGto/LNzJxtrMweDVYy8Vb21ZHg6ITj9nXhNmM0VkhQJw3CDJpY//ujgaoWwYltdfww2kcGlWRFWHttL17b/h16zd1S4P6Ky6yBTRRVMuyDQ+raRd4UA6z/jylAW4rszn+Tpezfso6yDlLLbCehIs4ExKgMVudTLQspgBMYXeVRizSs6aBcDz/fur4dNgoiYWdEScLaQohJFZyycYar5A/B0cmKdU3PykHfxfsQeC8JR65HKUY26qVp+KF+q1Lvp9nDexgafBVvbLxUMjoR2Dulm7vK5kmbMyGTcV7mofc/EgPEB/biCrh0JxZvbbqE2pcv4cs9NzBz5y0s//WGspY3R7ZQE0kxER/NRI2EHaHo6A51YY589Lt2BpmVLZBlZo63Og9Hg95tcCEkXhVkWBvo6OmIfVfuYqi4geKy9VwIGvhfw8g7V/BVeBaen95LFXNO+N9HVHwaTkvu0aWxk0ru6BbP+4ahW2RgkWMEV7fHCldvLG3aDbvNHRAem4KR7evpyLsiwuISjeONjRfVqhRAwKU5RuYiXuLB+f+0Aj6QF485P5xD1v1YfHdxG0ZH3MC0aH9st3NDklElrPpXO1TWJlF2csHnBIISS5P97ClBr7VXbdQ8eAjrRjyDSzXd0HJMd6w+GIjPnu2gEjAqoIOHg6Kx2eZib21e5BoYd8aH+sI6MQE+4l7WR2Zj+5VIDO3ZRBWCGGvixJ1RKXSJFg1dkXQ7HPUSHyBZFL7IowsWubVDv/Hd8NXMnnihXyPkSvbO+DS2o9sjZVMGaXJJvZrXxopfr6vVIMHbUFZdX5mPKFHC5f+IAmTZEWN+IWjH+F9rTuL5hCA0jdIkhsa5ubDKy8FxO1e8qymeazgZuXgrgaE7xCe/JSvjuFhpB08HfHgzGR6DOqF28/rKcjfP6qbgHtsUr4cnqLyA0JTf9/EsqIZhr6yK7Yf98NLNUxDsqzLe9hGB6BPuj3C/UNQb3l3VEWjRuy/dRR3JetOvBWDMtVMIl2A82qs/TL2bYK/ErX5P1VFAgcbC4hBRz2rJivs0r13i/RNKT+zcQCn5/W2+GNa2LpVDUm+/KCHyPxEDuskwPXA1EpmS/fYRJFEENdwPgAsyH/kS48KV4DhFKdyXOLHroljjsO4qQ3aU3OCb530QIn6cCdCCTRfF/99W1MCmV7oWCY7nxD098+lxPBd7CyiUBRtIMDfLzMDQEF/UXLlWcUmcVE6wYWAwFuz5EWFmVhju2Q/jR7bD3gV9CtjWIpmyuD0mjsclYy9LSIk0E4i8YINq+mOA+1rbbPy3Z8KqAevojSh4VgZsoyIeYSBN09OUv2Q7ik6+OHgLg1s7q9hAaFhcaNUUQsfiQlcyYMkBEKqz/jA66z7G3zxb6gXaZKXipsSaqd3dEXUrHHP2b0JMJXNMcO+Bd6f6YFovjzJvcGhrF2XdnTwdy/zcnMFN4fXKFgyXVdCyng15jSlE33/3CmjOH5ckU22VEqOg3COF4pQEbDlblK+KElz/40tdSpx8Iini/eLLnpn1az+cV1DyhFhk0oUb+Db8FJZc+BXIzin1AlvdC4Hrl9/APzQWk3dvQpWsDExz747pI1s/dvILgq4E8JJykMJC10XO6vUNBa2vc2QVGP3dClC9g2wjIddekvSMDVXBrDCVUM3CFHeik1S7SZ6WsqAffXbtSZWxLhz5lPrbgauaFXVRgrbPgl2Kdji/bLCy5lHJ4ejM7LcEpReXIaHX8d7GVfCIi8LndZrD4SkPVZkrr7SWLPjkzcdXIUd3qIfT8jkiQhEmN1O0cfKvD8LatvOFmdm5xkQhU5OCUSv+USupl5GIDVYu2HP7oVrORBTkgtafuANnCYiD3z+oaIkPd1xD3xZ18PEzbdScsva782KY6ox+66fLkg2nKRTTWOBssMSB8PP+8I4OLfcNWYjlx5lZ4JVG3bBjQV9SCRWaELpZVvCYX5S1Cqgo9rGyF5bUvIxXJCjbyDhdkdqB0WMmn7TkCQIBYuzvjwVhWmwAqic9fHQpyWx6ZcTjE9hj3UlNkK5RxUwm3V8Frk+mtEMHd3t8MLGNQh6kgtkrSrfFwHuPXRb5iQgxMIPfGX8cDktGkqAai1uBaBUdVqFJXOnSCp6DfDDOx63CFsl+Ja5SFoXKEuY4a8Wg2Dp5IzxeQEVlY0k225B4FSXsEiUk/WkFyIHW0LvQXQz/8BAskYvZoedhmFWygp3Sk9EyPQ4HTG2w5XqM8vPJyek4eSEYRwJjlX8n9Fyy1Vf1Eg1v64rDkrn2zU/AZ3clQbO2xj0jM+y6vBWOfn44EZmKQckRcHwYV+4JzDI2wUv1O+OT6Z3hUNW8wgowFxRFSpxkXVlC97py9w3V6b1O27/ELhCBv2xx6Sdzt0GUkP6HUZBYP3vzx2fmSBb78RGYZmRgfdAhGCWnlHnAtrHhOJnwE65b2iHT2BhN0uMlE87DT/cb4eR5e0WQPahijbtfjFHFl9rIwm+GVjjk2h1Te7jj9UvnYJqWhpYc8RWH2Ceq1UYVG2vFjP4RId3BbozHCXMHdu1xldWxscC286Hos3gfts3pwaog687csDL0D60AmfzJ8rJG8LrhhE+O4WpoHJ7OicbggPLR4oSlDhkpqJmWBOPsbJjl5qBlQhSGRAdhfJQffM2r43KuuUq+Bh/bg/d9D6B5diIS2raGiakJEurWxSUjSzjK94nzHye+1Z2QaGMLm6QE/FTTE2YtvTCmQ70yv8PVWBIdzb98LvCZnR4l5QyF5ZkuDdBCrJ7uqr/kHo3lO5NWHcd4UYrEPw9ZBddkFdyqkAJk8r3kZYdYvnH/9/bjoCRRTHBOpRphoLgDi9SUP5V6Uzm940JwICoDW8PS8GbgKTwwNsPDF5/FlLHt0b6jJxr1aIWGQzpjXY36MA8Ikol9+Fgot97OHb4162K3hSOaejkrsrAkiU5MV13c5HZ0tMkjbqiSsQIMrA+z3l1eYUbP2LD5TLDqFqFDYO9R8X6kUhWg5ft/kOEyZ915bDsXhh3zeuKN4c3h7eGIuQFZGChZr2FOzp/jP0QJXQW2Trwv8FJWyO5XZmPq9N4wEXRBUm32unOqI27VvzthWyV7NL94BgZl5AAWOVnoGBuGtDzgWzsPVasmOmF/aWE6fMeFcMWc9mhSs9TJpzRxro4R7VyxRBKzoYWahYsLmWBecxEX3NAec3+8oI5R196K1LCxKOBQmQqQia8kmloOTUueM1vLp3x2Au+P98ZYbaGdvjFXguT3ETnoGhVULlz+2CQkNxcHbVzhOXOCQhSvr7+AiZ3rq56ixLRsvDGiOZycquPc4atwjisbn2cbGWNWg864b2Ku6gvkdliPZqWMrY4rfr2Bf3VzL3dsYIGeyE9X5StJXvzmN/SVRNKgkCsj/CYPRSUwjxE421rm9lhpu3t06vuax5MkyoQbIoZ/cAhujtaY0cezyIcnd20A6z4+WNGyJ2Dw1+xwjbCsBhtLU5X1xiSlIzMnD81caqCq1nrZphhQpeymhHxDQ8x174wr5prJpeKmS/ZLP88tVN8fDcLqqe3hYlel3NfFthXWhUs9p0ogI0vsrmVFjRU+0thaoLNTjLxjiQqQNxoR7bCs1+TVLaqqxZ6dmf0bq86B4sI28kifjljp3VvWz5/e5QrTzExVCN+zoLcq8g9aekAVeqy1/HxObh5yc0pv/c8Vy5/t2Q1bqmpcBfONNyX7XS6J3tfP+4giTfHRM61VN0Z5hYUeGuJyUULgvcQSP8MsmMHXsBRD/Gq6j2r4Yu+RtphzQOa6VUkrQGmG3c73E9JxZFE/1a85qhQUwROue6ETYrp0whut+iHP1PRPKaDjwwjsvxyucPWueb0Q/TBNNfNW0yqA1HLT1JLzgITKVTCxaT/8Yu2sAue6Fzsryy+oH2y6pILteJ+KVRLZKs/VY2dtho7zd+FjMcq0QptR2FJDBndIa+fS45KZMXa93hNng2KwdJvaZsViziclKcBKF1C4bBj1p/fyLOhOK7lcZ4hvRQl1RvbCJO8hSKpa7ZHPHHGqj9gato+9WeeUBAQv+0b1BZGy2D63p+qgI7zj39avP4E2dwMe+d7B2h7o1XQoTplrzjFrkBd6F0qeOElMqBhTKuot41Iy1OrfM783jr3dXyWPtZ/biJEfHsacH86j6atbcf52DBJTy95GQGPlZpVvJKaxjV+kjayCTkWCsAQImvoQ1nW/ORKodqybV3q8azFQ7KEjqrk44YUYCzTKToaDNmMNt6yOMZ698Vx8EMxSUx+f1EQEY+/pIATa1oRLzWp4ulN9VeL8YflWvHZ8K8wLHeOSgwtme3TFocbeeGl4S4W/I+JTcUjgMndbuthaookE2t2X72LTqTtY+rR3kc3g5ZHt58PUSny5v5fa88CcgmCEyImGyZ0/NNIZX51WnYENNP1DpRqrIhx9I3UGkisBeWdhBZBZe9GjVjUjFkRyWWlyL/+GRGLfvu3rY15cFYTKKquSk4m5Lu1w16QyDCubo7pRPmzTklUnRJl06/27sNt7AFe2HkfktsPw3LkTA6+fhbkkYgmW1theuxEWNPTB4WbtsHRWP7z/dGtVwmTtl4US7jdgezt7lWb0aYTvjgbCNzQeH0vMMqjgEmAcpHFpG4xPy8iU+FSD0JLnY4+TkyiVip35/VlM6+lZ0BVYckXNArO+O4tXRKFyKbWIOEUJCkYay8Xdk2WxWeDS2CaCPkpr0yjA0+IbWTmKTcoUlKBxWdxm+qpMwABJcL5r7oZXBzZBP0EzXx+2wGqzOhBvhHYp0WiWHKM2VjSU1WKZJMEto2gVzSwrE63TYhGeUwW3LG00O2CsHBBp66gSq+RrkZjbr7EqlpckxP1GRprJZrsjV4KhYcUmX/Wyyn0wiGuFrTgswBMSMklletxexqQxHd3UDqB1xwKVEZQmzKjJMbF3qplrDTttfeVSYS5INdBwi09AZGLZfk1uiJ0HFFIUCwRqsY/ySrBmU/WX0zsWbFslHPxNsPS+qxGqVWS5TIpuTzHpXvtKBorgo+0wiYrNM0SeoZFa0sra6tliiqeDogVoxFPXnFSJVGnCczSpo4GONCSfx1S3ShL2O5G1ZdsLNPvFzmnf4iZAPzFWNmk9wz+kSq7Atstvj5atAAq9ygHfCMUMQ/OMjSIK4JZPZc3UfnmFeJ2DmSU7nBloCsGyFPm3RQcPBwN2OuiECmCljLRvepYGXppJzCEEZRcEfW5JHoPE3fbzobobeHRliuv8VRKu98a2UtCVUJKJUEWFsHHx780FnxZiCbhTf6bW+g34SAYWoIje2jW0U9QF6x9BkvjFJGWoRoTCbCyb19jQxpKmyHAZ7xZWALWrupG5AYIQzKgCS5cF7aOCFtrP34npX5zCxle6KgNhpRCaJ6V01f67DldH9XIUSZhofydLm1kse0tvi3LZuzOgFI5n+7kw1WJCipvYnXvEKsqIsqmL961dObTEddrJJy0/TbkoMRpS0KTav53RSQVh8j+shXtpV1+muLHsYvsXBrWqg5e/PaNqH7K6msoxe8nq2l9YARledaqZGUtWeT7oAdo2tKvQxbPuu2RcK0z7/JTa0eLtZstIvkzGv+VEnxWqrrHjykkLf2kihCjvaZMVVYznRNCi2GLy2pCmeGdMS9VFQXqiJKHFs1o3f3hzRQX4hsSrVdS8rk25r58riLt9Vk5up/vT+3xsmlzzJE4+J5X7nOnvn5cgzzjHZIwTTy9gIrGHNPbGU7eV+2JtoPDKtzAzUZzae4LUvpymUq+P5NgHlALkRFnyyxmBTF0Y/VmlqqgCKKRhXxVUwKXJlhMbSzOW6trJsRdrgxfdPUn+A3LOu1ql8BFmVRmguB+Mk85JZG15g6wkrkMubQbYwuRaYXl3y1XlwrijknL4RpRm42AFypGr9virh4500CBAluDWat+azR+0XsY69sMyw+XeiEKuSrlU7hhaMaltqecgxK8xcR3miVHJuchANCqMnXbxx8i2dVV1Jy2rYownXQa3ejpWrazcRv0ZP6vsGprdJST6uF93kbZQESIT/zkf6sSCNomvnu/sVRZ74M2+aptT6Noxqh2FCMKpDBzPp2+t3uOH7yUxZCmRzbnbz4UquFheYeyiT+cWK63MFQPJlOvjqvSg2yGsfU9WOMFBQORD5eqKZOWSt+i2Z5XKfIp7Y7LJrVg6x1E43f2JLmNYG1djWjE7GV7TBIzHCttViEC6SqDxXzlCQbmtsopIKZORZIMWLZt4nL3/T/vUN5JU/VktGrDkY2lo6UvHt1KbubmZj76SscLFrnQOhxY5buVRBUvZxcw6M4EEM3pO6tubL6ud+rpdl6UVZiZ+elzlEZwcaJ7a+JMOGausWgyEW6U6ikuhu7Mo1HSsg67cYeNq93i+KTY5s3AL5O9dXTI5UaLxLYJIRtHvkkcZ2tq1xJ6eknwwk5/fCxpGqlTH4EzOhBk2L57PeuCmuw92XMOWWd2JaBTXGyRBkwQgH+TEGyUPxCSKZb/S/DX3IbwqLovBjkUWog72cZqZVIwg5GMSiDde0uwdy9DGLB3XrvgDXeMuN6fT1bB9hs888nazUUQi2+LZUkkEKLGvxPZ6XccFN7N08ChIdP2LEz5vEyLJZBqRRxnx4SEcf6e/8q9lCdvKS0tAfp7V7RHGkC0dI5cfVjwL3QtXCTvNaLFM99kyTsvn/l02BNCK2QrCoMfvkrfisecObcqeLXgaAAAFkElEQVQ4I5moR4UTLgohN+sGF5cN1qG+N2XybxWvl/AdzkFmdp6y9FqSCefLfwz8y8RtvbP5imIQ1jzbAav2+WH+sOYaSkZWPeEz2y9vhCcomLxWPsNrhuYJL4FFzEXS4weSJleRi2lP3PrJbj/ski8Nbu1SZgWp9OWWIQH5qmrQ5f5fPimR2Sn9aFXBz9vOhqruA24/orthazsnhUGXN3tHLpykGpO9H47dVo9EmDe0mVI4lcBWSFqUu6wUbgqviHBy+i7er9oite2Ix2VM11EE2vnIkvnoJ8qtST6I9YQJnRsoV8prpSvhbk9nW0u18rgJncQd73ezrPTb95IUS0BjIW2yWNCct8ZY2S0xio29BiXUhE21F9OayKTfe/sVocQHbpQnsHHCSL8yOamt3VytyykYJAlTvxP8zOdEdFu4B6cXDyzzeLS4FrO3qUfYMENmZYsbw/mINO7Wr6QtCRZ//G5ZwnoDn1vKiSdbSfRLekCHzIrNBzln7okrd4sdgzYXvWnJ7pBVmhm6DNuglK4IO60S3NmpNubjw8r3Xf1oaLkugIGNFsZAeOpmtEycleq/p3BLER9xwNZzLs0xHdx0bei7tfCvtRaqEmZ4sX+ITbykOIihWavQPdSD51i111+tBsdq5qoS9bgiOvcrdHpjl6w4M6VUmSRmTANkQvaU0aLDeXLXQmlSn6SU2bvCwNdYa9FMNFO0tqDjxckhrdbGEr4XJOcJK84ql3ZSG63mO3Ipeby8GbdXjSzxEWSPk8mrT6hCiW4F9Xh7j6KN6XZI7y4cpXpEN8jFjSt0/mtUADsz6N8ZK7j/QJdFMxDyQX9vjWqBypXK7x5HLz+iiiTnlgzS0dQL/+pHYsq1m2lwjcFjG7NK5VDly7FaCsGfTzEk7775zB/brc+2FhYluHd446k7uCqBiVY9uWtD3eQrArPQDdDKvLjqaCJcIaQXdJNP2EfKmE/iqsjk86FS9M9sNtBO/nZtfvKXCjPo8kx+yQpYuNAQI74YaDz8q24GI7+2+vpQgGLtZg7wwgcScOiSKiq0fG4Z4hYfElQ9mtTCteXDdDAzWZuoLS/0lUqaG4GCdYwdJNdIUdDd+AmiIMStCM3PRJFUA7n8YZr9Z+Q1pv3Tj8p/NEocO5Zv3HCQa46RQYphfl6Pc7cfBMwa2KStJClVroXFKehF/oM3YibWx/oAS4dMTgxK8LdsPafV0+KD7yerFnfuYGmneTArb95DJuFnQQR5hdBHmqCPwYIsHDjRRBmGhpqAzG465g0BUUmKazF9DO5nPDp24x6mrjmhqmY75/bUdbytlfNuxj8sxiUnVgbXYJaTlZeVH3s/KTtZu1K++XZGZ6ze66cCH7PclIwcxTpS2Ce5aHQLSbg0lkmqmTtOWBNgsOQ+3pkakq7wqfbKJISWcm39tMWQl+s7WRt6u9mpQMsyI90IEz8+zI8bA3XCWLVJcgduK2VCZyoI6XZ0kmJJh7ZxAa/fRZPt8jly8/AEiEEFAguf6b+wJLfFTJg3Tb6broYPaeJksDOgd/PaqsA+ql1dneVRodzSw+dKrxMFpD3mvO/Ly5zCf+NeM1LCJ1kst7FQRZHIuFR1OwNb1oGPrBo+/iZLrouQlY9DY96hFbbbj5Dzxvy/UoB2Mkj/vQDNE6dqlaaM8NhURReQGylWV+Cm3XZy83EVPC+LIA20FDa3yyoyJiktS2Wa+Vo6vAzOJ19bgWJbyPon6X+R8ofb27T7onSsFGnA6dDsFKlf6Li8cT7Hk8+XiNDe/MM/CfG4W3+u1gAaFnubiuXjUPZqr4EGQjR3Vc4biSdQ/vL/h4yWwq2rDfDBFbX2Cp7LWatwWjR7L+8UItL0ohe96EUvetGLXvSiF73oRS960Yte9KIXvejld/k/jRG0H76mLHgAAAAASUVORK5CYII="
}, yR = {
  team_id: -1,
  oe: 73.1,
  de: 65.2,
  tempo: 43.5
}, mR = {
  team_id: -2,
  oe: 63.4,
  de: 70.2,
  tempo: 39.5
}, bR = {
  game_id: -1,
  home_team_id: -1,
  away_team_id: -1,
  home_team_score: 72.3,
  away_team_score: 64.1
}, xR = ["p-4", "rounded-lg"], wR = {}, SR = ["grid", "gap-2"], AR = {
  gridTemplateRows: "1fr 2fr"
}, _R = (e) => {
  const t = e.rank || -1, r = e.team || fu;
  return /* @__PURE__ */ O(Gt, {
    viusage: "backdrop",
    classNames: [...e.overrideClasses ? [] : xR, ...e.classNames || []],
    style: {
      ...e.overrideStyle ? {} : wR,
      ...e.style
    },
    children: /* @__PURE__ */ z("div", {
      className: [...e.overrideClasses ? [] : SR, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : AR,
        ...e.style
      },
      children: [/* @__PURE__ */ z("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          alignContent: "center"
        },
        children: [/* @__PURE__ */ z("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ z("h2", {
            children: ["#", t]
          }), e.trend ? /* @__PURE__ */ O(p2, {
            color: "#5CD0B4"
          }) : /* @__PURE__ */ O(l2, {
            color: "#FD3535"
          })]
        }), /* @__PURE__ */ z("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            fontSize: 14
          },
          children: [/* @__PURE__ */ O("img", {
            height: 24,
            width: 24,
            src: r.TeamLogoUrl
          }), "\u2003", r.Name]
        })]
      }), /* @__PURE__ */ z("div", {
        className: "gap-4",
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignContent: "center",
          fontSize: 12
        },
        children: [/* @__PURE__ */ z("div", {
          className: "rounded p-2",
          style: {
            background: "#01987528"
          },
          children: [/* @__PURE__ */ O("h2", {
            children: "22.8"
          }), /* @__PURE__ */ O("h2", {
            style: {
              color: "#ffffff65"
            },
            children: "Power Rating"
          })]
        }), /* @__PURE__ */ z("div", {
          className: "rounded p-2",
          style: {
            background: "#01987528"
          },
          children: [/* @__PURE__ */ O("h2", {
            children: "22.8"
          }), /* @__PURE__ */ O("h2", {
            style: {
              color: "#ffffff65"
            },
            children: "Off Efficiency"
          })]
        }), /* @__PURE__ */ z("div", {
          className: "rounded p-2",
          style: {
            background: "#01987528"
          },
          children: [/* @__PURE__ */ O("h2", {
            children: "22.8"
          }), /* @__PURE__ */ O("h2", {
            style: {
              color: "#ffffff65"
            },
            children: "Def Efficiency"
          })]
        })]
      })]
    })
  });
}, OR = ["p-4"], ER = {}, TR = ["grid", "gap-2"], PR = {
  gridTemplateColumns: "1fr"
}, CR = (e) => /* @__PURE__ */ O(Gt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : OR, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : ER,
    ...e.style
  },
  children: /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : TR, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : PR,
      ...e.style
    },
    children: [/* @__PURE__ */ O("h2", {
      className: "text-xl",
      children: "Top 25"
    }), /* @__PURE__ */ z("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      },
      children: [/* @__PURE__ */ O("div", {
        className: "text-lg",
        style: {
          borderBottom: "1px solid #019875"
        },
        children: "Gameday Guru"
      }), /* @__PURE__ */ O("div", {
        className: "text-xl",
        style: {},
        children: "AP"
      })]
    }), /* @__PURE__ */ O("hr", {}), /* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O(Kd, {})
    }), /* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O(_R, {})
    })]
  })
}), MR = ["rounded-lg"], kR = {
  pointerEvents: "none",
  position: "absolute",
  left: 0,
  top: 0
}, NR = (e) => (yi(e.viusage), /* @__PURE__ */ z("div", {
  style: {
    display: "relative"
  },
  children: [e.children, /* @__PURE__ */ O("div", {
    className: [...e.overrideClasses ? [] : MR, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : kR,
      ...e.style,
      background: "linear-gradient(to right, #005E4823, #005E48ff)"
    }
  })]
})), RR = [], IR = {}, $R = [], LR = {
  height: "250px"
}, jR = (e) => /* @__PURE__ */ O(Gt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : RR, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : IR,
    ...e.style
  },
  children: /* @__PURE__ */ O("div", {
    className: [...e.overrideClasses ? [] : $R, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : LR,
      ...e.style
    },
    children: /* @__PURE__ */ O(_P, {
      style: {
        height: "100%"
      },
      Entries: [/* @__PURE__ */ O(NR, {
        style: {
          height: "100%",
          width: "100%"
        },
        viusage: "navigate",
        children: "a"
      })]
    })
  })
}), DR = ["font-bold", "rounded-full", "flex", "items-center", "justify-items-center", "text-xl"], FR = {}, Zb = (e) => /* @__PURE__ */ O("div", {
  className: [...e.overrideClasses ? [] : DR, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : FR,
    ...e.style
  },
  children: "VS"
}), VR = ["grid"], BR = {
  gridTemplateColumns: "1fr 1fr 1fr",
  alignContent: "center",
  justifyContent: "center",
  justifyItems: "center"
}, UR = (e) => {
  const t = e.Home || fu, r = e.Away || Xb, n = yi("navigate");
  return /* @__PURE__ */ z("div", {
    className: [`text-${n}-500`, ...e.overrideClasses ? [] : VR, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : BR,
      ...e.style
    },
    children: [/* @__PURE__ */ z("div", {
      children: [/* @__PURE__ */ z("div", {
        style: {
          color: "white",
          display: "grid",
          justifyContent: "center",
          justifyItems: "center"
        },
        children: [/* @__PURE__ */ O("img", {
          width: 60,
          src: t.TeamLogoUrl
        }), /* @__PURE__ */ O("br", {}), t.Name]
      }), /* @__PURE__ */ O("h2", {
        className: "text-lg",
        children: "Home"
      })]
    }), /* @__PURE__ */ O("div", {
      style: {
        display: "grid",
        alignContent: "center"
      },
      children: /* @__PURE__ */ O(Zb, {})
    }), /* @__PURE__ */ z("div", {
      children: [/* @__PURE__ */ z("div", {
        style: {
          color: "white",
          display: "grid",
          justifyContent: "center",
          justifyItems: "center"
        },
        children: [/* @__PURE__ */ O("img", {
          width: 60,
          src: r.TeamLogoUrl
        }), /* @__PURE__ */ O("br", {}), r.Name]
      }), /* @__PURE__ */ O("h2", {
        className: "text-lg",
        children: "Away"
      })]
    })]
  });
}, zR = ["grid", "gap-2"], WR = {}, qR = (e) => {
  const t = e.homeScore || 72, r = e.awayScore || 63;
  return /* @__PURE__ */ O(Gt, {
    viusage: "backdrop",
    classNames: ["rounded-lg", "p-4", "text-xs"],
    children: /* @__PURE__ */ z("div", {
      className: [...e.overrideClasses ? [] : zR, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : WR,
        ...e.style
      },
      children: [/* @__PURE__ */ O("h2", {
        className: "text-lg",
        children: "Score Projection"
      }), /* @__PURE__ */ z("div", {
        style: {
          display: "grid",
          alignContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
          fontSize: 10
        },
        children: [/* @__PURE__ */ z("div", {
          children: ["Home Score", /* @__PURE__ */ O("br", {}), /* @__PURE__ */ z("div", {
            className: "rounded-l-full",
            style: {
              width: `${Math.floor(t / ((t + r) / 2) * 100)}%`,
              justifySelf: "right",
              padding: "2px",
              background: "#00C192"
            },
            children: ["\u2003\u2003", t]
          })]
        }), /* @__PURE__ */ z("div", {
          children: ["Away Score", /* @__PURE__ */ O("br", {}), /* @__PURE__ */ z("div", {
            className: "rounded-r-full",
            style: {
              width: `${Math.floor(r / ((t + r) / 2) * 100)}%`,
              justifySelf: "left",
              padding: "2px",
              background: "#0086E6"
            },
            children: ["\u2003", r]
          })]
        })]
      }), /* @__PURE__ */ O("br", {}), /* @__PURE__ */ z("div", {
        style: {
          textAlign: "left",
          fontSize: 10
        },
        children: ["Total Points", /* @__PURE__ */ z("div", {
          className: "bg-gdg-500 rounded-full",
          style: {
            width: `${Math.floor((t + r) / 250 * 100)}%`,
            padding: "2px"
          },
          children: ["\u2003\u2003", t + r]
        })]
      })]
    })
  });
};
var Jb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (!!a) {
          var o = typeof a;
          if (o === "string" || o === "number")
            n.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var s = r.apply(null, a);
              s && n.push(s);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              n.push(a.toString());
              continue;
            }
            for (var u in a)
              t.call(a, u) && a[u] && n.push(u);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Jb);
const We = Jb.exports;
function HR(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Dt = HR;
function Ao(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ao = function(r) {
    return typeof r;
  } : Ao = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ao(e);
}
var GR = ["viewBox", "children"], YR = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "type", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], Xd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], ge = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Yr(t) && (i = t.props), !Dt(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    (YR.includes(o) || n && GR.includes(o) || r && Xd.includes(o)) && (a[o] = i[o]);
  }), a;
}, rs = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Yr(t) && (n = t.props), !Dt(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Xd.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, KR = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, $a = function(t, r, n) {
  if (!Dt(t) || Ao(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Xd.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = KR(o, r, n));
  }), i;
};
function XR(e, t) {
  if (e == null)
    return {};
  var r = ZR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function ZR(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ml(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = XR(e, ["children", "width", "height", "viewBox", "className", "style"]), u = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, c = We("recharts-surface", a);
  return /* @__PURE__ */ z("svg", {
    ...ge(s, !0, !0),
    className: c,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height),
    version: "1.1",
    children: [/* @__PURE__ */ O("title", {
      children: e.title
    }), /* @__PURE__ */ O("desc", {
      children: e.desc
    }), t]
  });
}
function JR(e, t) {
  if (e == null)
    return {};
  var r = QR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function QR(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Xe = /* @__PURE__ */ me.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = JR(e, ["children", "className"]), a = We("recharts-layer", n);
  return /* @__PURE__ */ O("g", {
    className: a,
    ...ge(i, !0),
    ref: t,
    children: r
  });
}), eI = typeof Ya == "object" && Ya && Ya.Object === Object && Ya, Qb = eI, tI = Qb, rI = typeof self == "object" && self && self.Object === Object && self, nI = tI || rI || Function("return this")(), yr = nI, iI = yr, aI = iI.Symbol, La = aI, Jv = La, ex = Object.prototype, oI = ex.hasOwnProperty, sI = ex.toString, Fi = Jv ? Jv.toStringTag : void 0;
function uI(e) {
  var t = oI.call(e, Fi), r = e[Fi];
  try {
    e[Fi] = void 0;
    var n = !0;
  } catch {
  }
  var i = sI.call(e);
  return n && (t ? e[Fi] = r : delete e[Fi]), i;
}
var cI = uI, lI = Object.prototype, fI = lI.toString;
function dI(e) {
  return fI.call(e);
}
var hI = dI, Qv = La, pI = cI, vI = hI, gI = "[object Null]", yI = "[object Undefined]", e0 = Qv ? Qv.toStringTag : void 0;
function mI(e) {
  return e == null ? e === void 0 ? yI : gI : e0 && e0 in Object(e) ? pI(e) : vI(e);
}
var Nr = mI, bI = Nr, xI = Dt, wI = "[object AsyncFunction]", SI = "[object Function]", AI = "[object GeneratorFunction]", _I = "[object Proxy]";
function OI(e) {
  if (!xI(e))
    return !1;
  var t = bI(e);
  return t == SI || t == AI || t == wI || t == _I;
}
var de = OI;
function EI() {
  this.__data__ = [], this.size = 0;
}
var TI = EI;
function PI(e, t) {
  return e === t || e !== e && t !== t;
}
var Zd = PI, CI = Zd;
function MI(e, t) {
  for (var r = e.length; r--; )
    if (CI(e[r][0], t))
      return r;
  return -1;
}
var du = MI, kI = du, NI = Array.prototype, RI = NI.splice;
function II(e) {
  var t = this.__data__, r = kI(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : RI.call(t, r, 1), --this.size, !0;
}
var $I = II, LI = du;
function jI(e) {
  var t = this.__data__, r = LI(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var DI = jI, FI = du;
function VI(e) {
  return FI(this.__data__, e) > -1;
}
var BI = VI, UI = du;
function zI(e, t) {
  var r = this.__data__, n = UI(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var WI = zI, qI = TI, HI = $I, GI = DI, YI = BI, KI = WI;
function xi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
xi.prototype.clear = qI;
xi.prototype.delete = HI;
xi.prototype.get = GI;
xi.prototype.has = YI;
xi.prototype.set = KI;
var hu = xi, XI = hu;
function ZI() {
  this.__data__ = new XI(), this.size = 0;
}
var JI = ZI;
function QI(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var e5 = QI;
function t5(e) {
  return this.__data__.get(e);
}
var r5 = t5;
function n5(e) {
  return this.__data__.has(e);
}
var i5 = n5, a5 = yr, o5 = a5["__core-js_shared__"], s5 = o5, pc = s5, t0 = function() {
  var e = /[^.]+$/.exec(pc && pc.keys && pc.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function u5(e) {
  return !!t0 && t0 in e;
}
var c5 = u5, l5 = Function.prototype, f5 = l5.toString;
function d5(e) {
  if (e != null) {
    try {
      return f5.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tx = d5, h5 = de, p5 = c5, v5 = Dt, g5 = tx, y5 = /[\\^$.*+?()[\]{}|]/g, m5 = /^\[object .+?Constructor\]$/, b5 = Function.prototype, x5 = Object.prototype, w5 = b5.toString, S5 = x5.hasOwnProperty, A5 = RegExp(
  "^" + w5.call(S5).replace(y5, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function _5(e) {
  if (!v5(e) || p5(e))
    return !1;
  var t = h5(e) ? A5 : m5;
  return t.test(g5(e));
}
var O5 = _5;
function E5(e, t) {
  return e == null ? void 0 : e[t];
}
var T5 = E5, P5 = O5, C5 = T5;
function M5(e, t) {
  var r = C5(e, t);
  return P5(r) ? r : void 0;
}
var kn = M5, k5 = kn, N5 = yr, R5 = k5(N5, "Map"), Jd = R5, I5 = kn, $5 = I5(Object, "create"), pu = $5, r0 = pu;
function L5() {
  this.__data__ = r0 ? r0(null) : {}, this.size = 0;
}
var j5 = L5;
function D5(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var F5 = D5, V5 = pu, B5 = "__lodash_hash_undefined__", U5 = Object.prototype, z5 = U5.hasOwnProperty;
function W5(e) {
  var t = this.__data__;
  if (V5) {
    var r = t[e];
    return r === B5 ? void 0 : r;
  }
  return z5.call(t, e) ? t[e] : void 0;
}
var q5 = W5, H5 = pu, G5 = Object.prototype, Y5 = G5.hasOwnProperty;
function K5(e) {
  var t = this.__data__;
  return H5 ? t[e] !== void 0 : Y5.call(t, e);
}
var X5 = K5, Z5 = pu, J5 = "__lodash_hash_undefined__";
function Q5(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Z5 && t === void 0 ? J5 : t, this;
}
var e$ = Q5, t$ = j5, r$ = F5, n$ = q5, i$ = X5, a$ = e$;
function wi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
wi.prototype.clear = t$;
wi.prototype.delete = r$;
wi.prototype.get = n$;
wi.prototype.has = i$;
wi.prototype.set = a$;
var o$ = wi, n0 = o$, s$ = hu, u$ = Jd;
function c$() {
  this.size = 0, this.__data__ = {
    hash: new n0(),
    map: new (u$ || s$)(),
    string: new n0()
  };
}
var l$ = c$;
function f$(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var d$ = f$, h$ = d$;
function p$(e, t) {
  var r = e.__data__;
  return h$(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var vu = p$, v$ = vu;
function g$(e) {
  var t = v$(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var y$ = g$, m$ = vu;
function b$(e) {
  return m$(this, e).get(e);
}
var x$ = b$, w$ = vu;
function S$(e) {
  return w$(this, e).has(e);
}
var A$ = S$, _$ = vu;
function O$(e, t) {
  var r = _$(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var E$ = O$, T$ = l$, P$ = y$, C$ = x$, M$ = A$, k$ = E$;
function Si(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Si.prototype.clear = T$;
Si.prototype.delete = P$;
Si.prototype.get = C$;
Si.prototype.has = M$;
Si.prototype.set = k$;
var Qd = Si, N$ = hu, R$ = Jd, I$ = Qd, $$ = 200;
function L$(e, t) {
  var r = this.__data__;
  if (r instanceof N$) {
    var n = r.__data__;
    if (!R$ || n.length < $$ - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new I$(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var j$ = L$, D$ = hu, F$ = JI, V$ = e5, B$ = r5, U$ = i5, z$ = j$;
function Ai(e) {
  var t = this.__data__ = new D$(e);
  this.size = t.size;
}
Ai.prototype.clear = F$;
Ai.prototype.delete = V$;
Ai.prototype.get = B$;
Ai.prototype.has = U$;
Ai.prototype.set = z$;
var rx = Ai, W$ = "__lodash_hash_undefined__";
function q$(e) {
  return this.__data__.set(e, W$), this;
}
var H$ = q$;
function G$(e) {
  return this.__data__.has(e);
}
var Y$ = G$, K$ = Qd, X$ = H$, Z$ = Y$;
function ns(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new K$(); ++t < r; )
    this.add(e[t]);
}
ns.prototype.add = ns.prototype.push = X$;
ns.prototype.has = Z$;
var nx = ns;
function J$(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var ix = J$;
function Q$(e, t) {
  return e.has(t);
}
var ax = Q$, e3 = nx, t3 = ix, r3 = ax, n3 = 1, i3 = 2;
function a3(e, t, r, n, i, a) {
  var o = r & n3, s = e.length, u = t.length;
  if (s != u && !(o && u > s))
    return !1;
  var c = a.get(e), l = a.get(t);
  if (c && l)
    return c == t && l == e;
  var f = -1, d = !0, p = r & i3 ? new e3() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var v = e[f], h = t[f];
    if (n)
      var g = o ? n(h, v, f, t, e, a) : n(v, h, f, e, t, a);
    if (g !== void 0) {
      if (g)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!t3(t, function(m, w) {
        if (!r3(p, w) && (v === m || i(v, m, r, n, a)))
          return p.push(w);
      })) {
        d = !1;
        break;
      }
    } else if (!(v === h || i(v, h, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var ox = a3, o3 = yr, s3 = o3.Uint8Array, u3 = s3;
function c3(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var l3 = c3;
function f3(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var eh = f3, i0 = La, a0 = u3, d3 = Zd, h3 = ox, p3 = l3, v3 = eh, g3 = 1, y3 = 2, m3 = "[object Boolean]", b3 = "[object Date]", x3 = "[object Error]", w3 = "[object Map]", S3 = "[object Number]", A3 = "[object RegExp]", _3 = "[object Set]", O3 = "[object String]", E3 = "[object Symbol]", T3 = "[object ArrayBuffer]", P3 = "[object DataView]", o0 = i0 ? i0.prototype : void 0, vc = o0 ? o0.valueOf : void 0;
function C3(e, t, r, n, i, a, o) {
  switch (r) {
    case P3:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case T3:
      return !(e.byteLength != t.byteLength || !a(new a0(e), new a0(t)));
    case m3:
    case b3:
    case S3:
      return d3(+e, +t);
    case x3:
      return e.name == t.name && e.message == t.message;
    case A3:
    case O3:
      return e == t + "";
    case w3:
      var s = p3;
    case _3:
      var u = n & g3;
      if (s || (s = v3), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= y3, o.set(e, t);
      var l = h3(s(e), s(t), n, i, a, o);
      return o.delete(e), l;
    case E3:
      if (vc)
        return vc.call(e) == vc.call(t);
  }
  return !1;
}
var M3 = C3;
function k3(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var sx = k3, N3 = Array.isArray, Re = N3, R3 = sx, I3 = Re;
function $3(e, t, r) {
  var n = t(e);
  return I3(e) ? n : R3(n, r(e));
}
var L3 = $3;
function j3(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var D3 = j3;
function F3() {
  return [];
}
var V3 = F3, B3 = D3, U3 = V3, z3 = Object.prototype, W3 = z3.propertyIsEnumerable, s0 = Object.getOwnPropertySymbols, q3 = s0 ? function(e) {
  return e == null ? [] : (e = Object(e), B3(s0(e), function(t) {
    return W3.call(e, t);
  }));
} : U3, H3 = q3;
function G3(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Y3 = G3;
function K3(e) {
  return e != null && typeof e == "object";
}
var Rr = K3, X3 = Nr, Z3 = Rr, J3 = "[object Arguments]";
function Q3(e) {
  return Z3(e) && X3(e) == J3;
}
var eL = Q3, u0 = eL, tL = Rr, ux = Object.prototype, rL = ux.hasOwnProperty, nL = ux.propertyIsEnumerable, iL = u0(function() {
  return arguments;
}()) ? u0 : function(e) {
  return tL(e) && rL.call(e, "callee") && !nL.call(e, "callee");
}, th = iL, is = { exports: {} };
function aL() {
  return !1;
}
var oL = aL;
(function(e, t) {
  var r = yr, n = oL, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
  e.exports = c;
})(is, is.exports);
var sL = 9007199254740991, uL = /^(?:0|[1-9]\d*)$/;
function cL(e, t) {
  var r = typeof e;
  return t = t == null ? sL : t, !!t && (r == "number" || r != "symbol" && uL.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var rh = cL, lL = 9007199254740991;
function fL(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lL;
}
var nh = fL, dL = Nr, hL = nh, pL = Rr, vL = "[object Arguments]", gL = "[object Array]", yL = "[object Boolean]", mL = "[object Date]", bL = "[object Error]", xL = "[object Function]", wL = "[object Map]", SL = "[object Number]", AL = "[object Object]", _L = "[object RegExp]", OL = "[object Set]", EL = "[object String]", TL = "[object WeakMap]", PL = "[object ArrayBuffer]", CL = "[object DataView]", ML = "[object Float32Array]", kL = "[object Float64Array]", NL = "[object Int8Array]", RL = "[object Int16Array]", IL = "[object Int32Array]", $L = "[object Uint8Array]", LL = "[object Uint8ClampedArray]", jL = "[object Uint16Array]", DL = "[object Uint32Array]", Ue = {};
Ue[ML] = Ue[kL] = Ue[NL] = Ue[RL] = Ue[IL] = Ue[$L] = Ue[LL] = Ue[jL] = Ue[DL] = !0;
Ue[vL] = Ue[gL] = Ue[PL] = Ue[yL] = Ue[CL] = Ue[mL] = Ue[bL] = Ue[xL] = Ue[wL] = Ue[SL] = Ue[AL] = Ue[_L] = Ue[OL] = Ue[EL] = Ue[TL] = !1;
function FL(e) {
  return pL(e) && hL(e.length) && !!Ue[dL(e)];
}
var VL = FL;
function BL(e) {
  return function(t) {
    return e(t);
  };
}
var cx = BL, bl = { exports: {} };
(function(e, t) {
  var r = Qb, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(bl, bl.exports);
var UL = VL, zL = cx, c0 = bl.exports, l0 = c0 && c0.isTypedArray, WL = l0 ? zL(l0) : UL, lx = WL, qL = Y3, HL = th, GL = Re, YL = is.exports, KL = rh, XL = lx, ZL = Object.prototype, JL = ZL.hasOwnProperty;
function QL(e, t) {
  var r = GL(e), n = !r && HL(e), i = !r && !n && YL(e), a = !r && !n && !i && XL(e), o = r || n || i || a, s = o ? qL(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || JL.call(e, c)) && !(o && (c == "length" || i && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || KL(c, u))) && s.push(c);
  return s;
}
var e4 = QL, t4 = Object.prototype;
function r4(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || t4;
  return e === r;
}
var n4 = r4;
function i4(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var fx = i4, a4 = fx, o4 = a4(Object.keys, Object), s4 = o4, u4 = n4, c4 = s4, l4 = Object.prototype, f4 = l4.hasOwnProperty;
function d4(e) {
  if (!u4(e))
    return c4(e);
  var t = [];
  for (var r in Object(e))
    f4.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var h4 = d4, p4 = de, v4 = nh;
function g4(e) {
  return e != null && v4(e.length) && !p4(e);
}
var ja = g4, y4 = e4, m4 = h4, b4 = ja;
function x4(e) {
  return b4(e) ? y4(e) : m4(e);
}
var gu = x4, w4 = L3, S4 = H3, A4 = gu;
function _4(e) {
  return w4(e, A4, S4);
}
var O4 = _4, f0 = O4, E4 = 1, T4 = Object.prototype, P4 = T4.hasOwnProperty;
function C4(e, t, r, n, i, a) {
  var o = r & E4, s = f0(e), u = s.length, c = f0(t), l = c.length;
  if (u != l && !o)
    return !1;
  for (var f = u; f--; ) {
    var d = s[f];
    if (!(o ? d in t : P4.call(t, d)))
      return !1;
  }
  var p = a.get(e), v = a.get(t);
  if (p && v)
    return p == t && v == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var g = o; ++f < u; ) {
    d = s[f];
    var m = e[d], w = t[d];
    if (n)
      var x = o ? n(w, m, d, t, e, a) : n(m, w, d, e, t, a);
    if (!(x === void 0 ? m === w || i(m, w, r, n, a) : x)) {
      h = !1;
      break;
    }
    g || (g = d == "constructor");
  }
  if (h && !g) {
    var b = e.constructor, y = t.constructor;
    b != y && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof y == "function" && y instanceof y) && (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var M4 = C4, k4 = kn, N4 = yr, R4 = k4(N4, "DataView"), I4 = R4, $4 = kn, L4 = yr, j4 = $4(L4, "Promise"), D4 = j4, F4 = kn, V4 = yr, B4 = F4(V4, "Set"), dx = B4, U4 = kn, z4 = yr, W4 = U4(z4, "WeakMap"), q4 = W4, xl = I4, wl = Jd, Sl = D4, Al = dx, _l = q4, hx = Nr, _i = tx, d0 = "[object Map]", H4 = "[object Object]", h0 = "[object Promise]", p0 = "[object Set]", v0 = "[object WeakMap]", g0 = "[object DataView]", G4 = _i(xl), Y4 = _i(wl), K4 = _i(Sl), X4 = _i(Al), Z4 = _i(_l), mn = hx;
(xl && mn(new xl(new ArrayBuffer(1))) != g0 || wl && mn(new wl()) != d0 || Sl && mn(Sl.resolve()) != h0 || Al && mn(new Al()) != p0 || _l && mn(new _l()) != v0) && (mn = function(e) {
  var t = hx(e), r = t == H4 ? e.constructor : void 0, n = r ? _i(r) : "";
  if (n)
    switch (n) {
      case G4:
        return g0;
      case Y4:
        return d0;
      case K4:
        return h0;
      case X4:
        return p0;
      case Z4:
        return v0;
    }
  return t;
});
var J4 = mn, gc = rx, Q4 = ox, ej = M3, tj = M4, y0 = J4, m0 = Re, b0 = is.exports, rj = lx, nj = 1, x0 = "[object Arguments]", w0 = "[object Array]", io = "[object Object]", ij = Object.prototype, S0 = ij.hasOwnProperty;
function aj(e, t, r, n, i, a) {
  var o = m0(e), s = m0(t), u = o ? w0 : y0(e), c = s ? w0 : y0(t);
  u = u == x0 ? io : u, c = c == x0 ? io : c;
  var l = u == io, f = c == io, d = u == c;
  if (d && b0(e)) {
    if (!b0(t))
      return !1;
    o = !0, l = !1;
  }
  if (d && !l)
    return a || (a = new gc()), o || rj(e) ? Q4(e, t, r, n, i, a) : ej(e, t, u, r, n, i, a);
  if (!(r & nj)) {
    var p = l && S0.call(e, "__wrapped__"), v = f && S0.call(t, "__wrapped__");
    if (p || v) {
      var h = p ? e.value() : e, g = v ? t.value() : t;
      return a || (a = new gc()), i(h, g, r, n, a);
    }
  }
  return d ? (a || (a = new gc()), tj(e, t, r, n, i, a)) : !1;
}
var oj = aj, sj = oj, A0 = Rr;
function px(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !A0(e) && !A0(t) ? e !== e && t !== t : sj(e, t, r, n, px, i);
}
var ih = px, uj = rx, cj = ih, lj = 1, fj = 2;
function dj(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var u = s[0], c = e[u], l = s[1];
    if (o && s[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var f = new uj();
      if (n)
        var d = n(c, l, u, e, t, f);
      if (!(d === void 0 ? cj(l, c, lj | fj, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var hj = dj, pj = Dt;
function vj(e) {
  return e === e && !pj(e);
}
var vx = vj, gj = vx, yj = gu;
function mj(e) {
  for (var t = yj(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, gj(i)];
  }
  return t;
}
var bj = mj;
function xj(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var gx = xj, wj = hj, Sj = bj, Aj = gx;
function _j(e) {
  var t = Sj(e);
  return t.length == 1 && t[0][2] ? Aj(t[0][0], t[0][1]) : function(r) {
    return r === e || wj(r, e, t);
  };
}
var Oj = _j, Ej = Nr, Tj = Rr, Pj = "[object Symbol]";
function Cj(e) {
  return typeof e == "symbol" || Tj(e) && Ej(e) == Pj;
}
var Oi = Cj, Mj = Re, kj = Oi, Nj = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rj = /^\w*$/;
function Ij(e, t) {
  if (Mj(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || kj(e) ? !0 : Rj.test(e) || !Nj.test(e) || t != null && e in Object(t);
}
var ah = Ij, yx = Qd, $j = "Expected a function";
function oh(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError($j);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (oh.Cache || yx)(), r;
}
oh.Cache = yx;
var Lj = oh, jj = Lj, Dj = 500;
function Fj(e) {
  var t = jj(e, function(n) {
    return r.size === Dj && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Vj = Fj, Bj = Vj, Uj = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zj = /\\(\\)?/g, Wj = Bj(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Uj, function(r, n, i, a) {
    t.push(i ? a.replace(zj, "$1") : n || r);
  }), t;
}), qj = Wj;
function Hj(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var sh = Hj, _0 = La, Gj = sh, Yj = Re, Kj = Oi, Xj = 1 / 0, O0 = _0 ? _0.prototype : void 0, E0 = O0 ? O0.toString : void 0;
function mx(e) {
  if (typeof e == "string")
    return e;
  if (Yj(e))
    return Gj(e, mx) + "";
  if (Kj(e))
    return E0 ? E0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Xj ? "-0" : t;
}
var Zj = mx, Jj = Zj;
function Qj(e) {
  return e == null ? "" : Jj(e);
}
var bx = Qj, eD = Re, tD = ah, rD = qj, nD = bx;
function iD(e, t) {
  return eD(e) ? e : tD(e, t) ? [e] : rD(nD(e));
}
var xx = iD, aD = Oi, oD = 1 / 0;
function sD(e) {
  if (typeof e == "string" || aD(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -oD ? "-0" : t;
}
var yu = sD, uD = xx, cD = yu;
function lD(e, t) {
  t = uD(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[cD(t[r++])];
  return r && r == n ? e : void 0;
}
var uh = lD, fD = uh;
function dD(e, t, r) {
  var n = e == null ? void 0 : fD(e, t);
  return n === void 0 ? r : n;
}
var Et = dD;
function hD(e, t) {
  return e != null && t in Object(e);
}
var pD = hD, vD = xx, gD = th, yD = Re, mD = rh, bD = nh, xD = yu;
function wD(e, t, r) {
  t = vD(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = xD(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && bD(i) && mD(o, i) && (yD(e) || gD(e)));
}
var SD = wD, AD = pD, _D = SD;
function OD(e, t) {
  return e != null && _D(e, t, AD);
}
var ED = OD, TD = ih, PD = Et, CD = ED, MD = ah, kD = vx, ND = gx, RD = yu, ID = 1, $D = 2;
function LD(e, t) {
  return MD(e) && kD(t) ? ND(RD(e), t) : function(r) {
    var n = PD(r, e);
    return n === void 0 && n === t ? CD(r, e) : TD(t, n, ID | $D);
  };
}
var jD = LD;
function DD(e) {
  return e;
}
var Ei = DD;
function FD(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var VD = FD, BD = uh;
function UD(e) {
  return function(t) {
    return BD(t, e);
  };
}
var zD = UD, WD = VD, qD = zD, HD = ah, GD = yu;
function YD(e) {
  return HD(e) ? WD(GD(e)) : qD(e);
}
var KD = YD, XD = Oj, ZD = jD, JD = Ei, QD = Re, e6 = KD;
function t6(e) {
  return typeof e == "function" ? e : e == null ? JD : typeof e == "object" ? QD(e) ? ZD(e[0], e[1]) : XD(e) : e6(e);
}
var mr = t6;
function r6(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var wx = r6;
function n6(e) {
  return e !== e;
}
var i6 = n6;
function a6(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var o6 = a6, s6 = wx, u6 = i6, c6 = o6;
function l6(e, t, r) {
  return t === t ? c6(e, t, r) : s6(e, u6, r);
}
var f6 = l6, d6 = f6;
function h6(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && d6(e, t, 0) > -1;
}
var p6 = h6;
function v6(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var g6 = v6;
function y6() {
}
var m6 = y6, yc = dx, b6 = m6, x6 = eh, w6 = 1 / 0, S6 = yc && 1 / x6(new yc([, -0]))[1] == w6 ? function(e) {
  return new yc(e);
} : b6, A6 = S6, _6 = nx, O6 = p6, E6 = g6, T6 = ax, P6 = A6, C6 = eh, M6 = 200;
function k6(e, t, r) {
  var n = -1, i = O6, a = e.length, o = !0, s = [], u = s;
  if (r)
    o = !1, i = E6;
  else if (a >= M6) {
    var c = t ? null : P6(e);
    if (c)
      return C6(c);
    o = !1, i = T6, u = new _6();
  } else
    u = t ? [] : s;
  e:
    for (; ++n < a; ) {
      var l = e[n], f = t ? t(l) : l;
      if (l = r || l !== 0 ? l : 0, o && f === f) {
        for (var d = u.length; d--; )
          if (u[d] === f)
            continue e;
        t && u.push(f), s.push(l);
      } else
        i(u, f, r) || (u !== s && u.push(f), s.push(l));
    }
  return s;
}
var N6 = k6, R6 = mr, I6 = N6;
function $6(e, t) {
  return e && e.length ? I6(e, R6(t)) : [];
}
var as = $6;
function L6(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var j6 = L6, D6 = j6;
function F6(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : D6(e, t, r);
}
var V6 = F6, B6 = "\\ud800-\\udfff", U6 = "\\u0300-\\u036f", z6 = "\\ufe20-\\ufe2f", W6 = "\\u20d0-\\u20ff", q6 = U6 + z6 + W6, H6 = "\\ufe0e\\ufe0f", G6 = "\\u200d", Y6 = RegExp("[" + G6 + B6 + q6 + H6 + "]");
function K6(e) {
  return Y6.test(e);
}
var Sx = K6;
function X6(e) {
  return e.split("");
}
var Z6 = X6, Ax = "\\ud800-\\udfff", J6 = "\\u0300-\\u036f", Q6 = "\\ufe20-\\ufe2f", e8 = "\\u20d0-\\u20ff", t8 = J6 + Q6 + e8, r8 = "\\ufe0e\\ufe0f", n8 = "[" + Ax + "]", Ol = "[" + t8 + "]", El = "\\ud83c[\\udffb-\\udfff]", i8 = "(?:" + Ol + "|" + El + ")", _x = "[^" + Ax + "]", Ox = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ex = "[\\ud800-\\udbff][\\udc00-\\udfff]", a8 = "\\u200d", Tx = i8 + "?", Px = "[" + r8 + "]?", o8 = "(?:" + a8 + "(?:" + [_x, Ox, Ex].join("|") + ")" + Px + Tx + ")*", s8 = Px + Tx + o8, u8 = "(?:" + [_x + Ol + "?", Ol, Ox, Ex, n8].join("|") + ")", c8 = RegExp(El + "(?=" + El + ")|" + u8 + s8, "g");
function l8(e) {
  return e.match(c8) || [];
}
var f8 = l8, d8 = Z6, h8 = Sx, p8 = f8;
function v8(e) {
  return h8(e) ? p8(e) : d8(e);
}
var g8 = v8, y8 = V6, m8 = Sx, b8 = g8, x8 = bx;
function w8(e) {
  return function(t) {
    t = x8(t);
    var r = m8(t) ? b8(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? y8(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var S8 = w8, A8 = S8, _8 = A8("toUpperCase"), mu = _8;
const Tl = Math.PI, Pl = 2 * Tl, bn = 1e-6, O8 = Pl - bn;
function Cl() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function bu() {
  return new Cl();
}
Cl.prototype = bu.prototype = {
  constructor: Cl,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, r, n) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._ += "C" + +e + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +i) + "," + (this._y1 = +a);
  },
  arcTo: function(e, t, r, n, i) {
    e = +e, t = +t, r = +r, n = +n, i = +i;
    var a = this._x1, o = this._y1, s = r - e, u = n - t, c = a - e, l = o - t, f = c * c + l * l;
    if (i < 0)
      throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (f > bn)
      if (!(Math.abs(l * s - u * c) > bn) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = r - a, p = n - o, v = s * s + u * u, h = d * d + p * p, g = Math.sqrt(v), m = Math.sqrt(f), w = i * Math.tan((Tl - Math.acos((v + f - h) / (2 * g * m))) / 2), x = w / m, b = w / g;
        Math.abs(x - 1) > bn && (this._ += "L" + (e + x * c) + "," + (t + x * l)), this._ += "A" + i + "," + i + ",0,0," + +(l * d > c * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * u);
      }
  },
  arc: function(e, t, r, n, i, a) {
    e = +e, t = +t, r = +r, a = !!a;
    var o = r * Math.cos(n), s = r * Math.sin(n), u = e + o, c = t + s, l = 1 ^ a, f = a ? n - i : i - n;
    if (r < 0)
      throw new Error("negative radius: " + r);
    this._x1 === null ? this._ += "M" + u + "," + c : (Math.abs(this._x1 - u) > bn || Math.abs(this._y1 - c) > bn) && (this._ += "L" + u + "," + c), r && (f < 0 && (f = f % Pl + Pl), f > O8 ? this._ += "A" + r + "," + r + ",0,1," + l + "," + (e - o) + "," + (t - s) + "A" + r + "," + r + ",0,1," + l + "," + (this._x1 = u) + "," + (this._y1 = c) : f > bn && (this._ += "A" + r + "," + r + ",0," + +(f >= Tl) + "," + l + "," + (this._x1 = e + r * Math.cos(i)) + "," + (this._y1 = t + r * Math.sin(i))));
  },
  rect: function(e, t, r, n) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z";
  },
  toString: function() {
    return this._;
  }
};
function Fe(e) {
  return function() {
    return e;
  };
}
var os = Math.PI, xu = 2 * os;
function ch(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Cx(e) {
  this._context = e;
}
Cx.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function wu(e) {
  return new Cx(e);
}
function Mx(e) {
  return e[0];
}
function kx(e) {
  return e[1];
}
function Nx(e, t) {
  var r = Fe(!0), n = null, i = wu, a = null;
  e = typeof e == "function" ? e : e === void 0 ? Mx : Fe(e), t = typeof t == "function" ? t : t === void 0 ? kx : Fe(t);
  function o(s) {
    var u, c = (s = ch(s)).length, l, f = !1, d;
    for (n == null && (a = i(d = bu())), u = 0; u <= c; ++u)
      !(u < c && r(l = s[u], u, s)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+e(l, u, s), +t(l, u, s));
    if (d)
      return a = null, d + "" || null;
  }
  return o.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Fe(+s), o) : e;
  }, o.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Fe(+s), o) : t;
  }, o.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Fe(!!s), o) : r;
  }, o.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), o) : i;
  }, o.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), o) : n;
  }, o;
}
function ao(e, t, r) {
  var n = null, i = Fe(!0), a = null, o = wu, s = null;
  e = typeof e == "function" ? e : e === void 0 ? Mx : Fe(+e), t = typeof t == "function" ? t : Fe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? kx : Fe(+r);
  function u(l) {
    var f, d, p, v = (l = ch(l)).length, h, g = !1, m, w = new Array(v), x = new Array(v);
    for (a == null && (s = o(m = bu())), f = 0; f <= v; ++f) {
      if (!(f < v && i(h = l[f], f, l)) === g)
        if (g = !g)
          d = f, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), p = f - 1; p >= d; --p)
            s.point(w[p], x[p]);
          s.lineEnd(), s.areaEnd();
        }
      g && (w[f] = +e(h, f, l), x[f] = +t(h, f, l), s.point(n ? +n(h, f, l) : w[f], r ? +r(h, f, l) : x[f]));
    }
    if (m)
      return s = null, m + "" || null;
  }
  function c() {
    return Nx().defined(i).curve(o).context(a);
  }
  return u.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Fe(+l), n = null, u) : e;
  }, u.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Fe(+l), u) : e;
  }, u.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : Fe(+l), u) : n;
  }, u.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Fe(+l), r = null, u) : t;
  }, u.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Fe(+l), u) : t;
  }, u.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : Fe(+l), u) : r;
  }, u.lineX0 = u.lineY0 = function() {
    return c().x(e).y(t);
  }, u.lineY1 = function() {
    return c().x(e).y(r);
  }, u.lineX1 = function() {
    return c().x(n).y(t);
  }, u.defined = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : Fe(!!l), u) : i;
  }, u.curve = function(l) {
    return arguments.length ? (o = l, a != null && (s = o(a)), u) : o;
  }, u.context = function(l) {
    return arguments.length ? (l == null ? a = s = null : s = o(a = l), u) : a;
  }, u;
}
const lh = {
  draw: function(e, t) {
    var r = Math.sqrt(t / os);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, xu);
  }
}, E8 = {
  draw: function(e, t) {
    var r = Math.sqrt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
};
var Rx = Math.sqrt(1 / 3), T8 = Rx * 2;
const P8 = {
  draw: function(e, t) {
    var r = Math.sqrt(t / T8), n = r * Rx;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
};
var C8 = 0.8908130915292852, Ix = Math.sin(os / 10) / Math.sin(7 * os / 10), M8 = Math.sin(xu / 10) * Ix, k8 = -Math.cos(xu / 10) * Ix;
const N8 = {
  draw: function(e, t) {
    var r = Math.sqrt(t * C8), n = M8 * r, i = k8 * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (var a = 1; a < 5; ++a) {
      var o = xu * a / 5, s = Math.cos(o), u = Math.sin(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * i, u * n + s * i);
    }
    e.closePath();
  }
}, R8 = {
  draw: function(e, t) {
    var r = Math.sqrt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
};
var mc = Math.sqrt(3);
const I8 = {
  draw: function(e, t) {
    var r = -Math.sqrt(t / (mc * 3));
    e.moveTo(0, r * 2), e.lineTo(-mc * r, -r), e.lineTo(mc * r, -r), e.closePath();
  }
};
var Vt = -0.5, Bt = Math.sqrt(3) / 2, Ml = 1 / Math.sqrt(12), $8 = (Ml / 2 + 1) * 3;
const L8 = {
  draw: function(e, t) {
    var r = Math.sqrt(t / $8), n = r / 2, i = r * Ml, a = n, o = r * Ml + r, s = -a, u = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, u), e.lineTo(Vt * n - Bt * i, Bt * n + Vt * i), e.lineTo(Vt * a - Bt * o, Bt * a + Vt * o), e.lineTo(Vt * s - Bt * u, Bt * s + Vt * u), e.lineTo(Vt * n + Bt * i, Vt * i - Bt * n), e.lineTo(Vt * a + Bt * o, Vt * o - Bt * a), e.lineTo(Vt * s + Bt * u, Vt * u - Bt * s), e.closePath();
  }
};
function j8(e, t) {
  var r = null;
  e = typeof e == "function" ? e : Fe(e || lh), t = typeof t == "function" ? t : Fe(t === void 0 ? 64 : +t);
  function n() {
    var i;
    if (r || (r = i = bu()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i)
      return r = null, i + "" || null;
  }
  return n.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Fe(i), n) : e;
  }, n.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Fe(+i), n) : t;
  }, n.context = function(i) {
    return arguments.length ? (r = i == null ? null : i, n) : r;
  }, n;
}
function ss() {
}
function us(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function $x(e) {
  this._context = e;
}
$x.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        us(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        us(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function D8(e) {
  return new $x(e);
}
function Lx(e) {
  this._context = e;
}
Lx.prototype = {
  areaStart: ss,
  areaEnd: ss,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        us(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function F8(e) {
  return new Lx(e);
}
function jx(e) {
  this._context = e;
}
jx.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        us(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function V8(e) {
  return new jx(e);
}
function Dx(e) {
  this._context = e;
}
Dx.prototype = {
  areaStart: ss,
  areaEnd: ss,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function B8(e) {
  return new Dx(e);
}
function T0(e) {
  return e < 0 ? -1 : 1;
}
function P0(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (T0(a) + T0(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function C0(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function bc(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function cs(e) {
  this._context = e;
}
cs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        bc(this, this._t0, C0(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, bc(this, C0(this, r = P0(this, e, t)), r);
          break;
        default:
          bc(this, this._t0, r = P0(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Fx(e) {
  this._context = new Vx(e);
}
(Fx.prototype = Object.create(cs.prototype)).point = function(e, t) {
  cs.prototype.point.call(this, t, e);
};
function Vx(e) {
  this._context = e;
}
Vx.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function U8(e) {
  return new cs(e);
}
function z8(e) {
  return new Fx(e);
}
function Bx(e) {
  this._context = e;
}
Bx.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = M0(e), i = M0(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function M0(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function W8(e) {
  return new Bx(e);
}
function Su(e, t) {
  this._context = e, this._t = t;
}
Su.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function q8(e) {
  return new Su(e, 0.5);
}
function H8(e) {
  return new Su(e, 0);
}
function G8(e) {
  return new Su(e, 1);
}
function ui(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function kl(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function Y8(e, t) {
  return e[t];
}
function K8(e) {
  const t = [];
  return t.key = e, t;
}
function X8() {
  var e = Fe([]), t = kl, r = ui, n = Y8;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), K8), s, u = o.length, c = -1, l;
    for (const f of a)
      for (s = 0, ++c; s < u; ++s)
        (o[s][c] = [0, +n(f, o[s].key, c, a)]).data = f;
    for (s = 0, l = ch(t(o)); s < u; ++s)
      o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Fe(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Fe(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? kl : typeof a == "function" ? a : Fe(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a == null ? ui : a, i) : r;
  }, i;
}
function Z8(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r)
        o += e[r][i][1] || 0;
      if (o)
        for (r = 0; r < n; ++r)
          e[r][i][1] /= o;
    }
    ui(e, t);
  }
}
function J8(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o)
        s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    ui(e, t);
  }
}
function Q8(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, u = 0, c = 0; s < o; ++s) {
        for (var l = e[t[s]], f = l[n][1] || 0, d = l[n - 1][1] || 0, p = (f - d) / 2, v = 0; v < s; ++v) {
          var h = e[t[v]], g = h[n][1] || 0, m = h[n - 1][1] || 0;
          p += g - m;
        }
        u += f, c += p * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, u && (r -= c / u);
    }
    i[n - 1][1] += i[n - 1][0] = r, ui(e, t);
  }
}
function _o(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _o = function(r) {
    return typeof r;
  } : _o = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _o(e);
}
function e7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function t7(e, t, r) {
  return t && k0(e.prototype, t), r && k0(e, r), e;
}
function r7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Nl(e, t);
}
function Nl(e, t) {
  return Nl = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Nl(e, t);
}
function n7(e) {
  var t = o7();
  return function() {
    var n = ls(e), i;
    if (t) {
      var a = ls(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return i7(this, i);
  };
}
function i7(e, t) {
  return t && (_o(t) === "object" || typeof t == "function") ? t : a7(e);
}
function a7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function o7() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ls(e) {
  return ls = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ls(e);
}
var Ux = {
  symbolCircle: lh,
  symbolCross: E8,
  symbolDiamond: P8,
  symbolSquare: R8,
  symbolStar: N8,
  symbolTriangle: I8,
  symbolWye: L8
}, s7 = Math.PI / 180, u7 = function(t) {
  var r = "symbol".concat(mu(t));
  return Ux[r] || lh;
}, c7 = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * s7;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, fh = /* @__PURE__ */ function(e) {
  r7(r, e);
  var t = n7(r);
  function r() {
    return e7(this, r), t.apply(this, arguments);
  }
  return t7(r, [{
    key: "getPath",
    value: function() {
      var i = this.props, a = i.size, o = i.sizeType, s = i.type, u = u7(s), c = j8().type(u).size(c7(a, o, s));
      return c();
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.className, o = i.cx, s = i.cy, u = i.size;
      return o === +o && s === +s && u === +u ? /* @__PURE__ */ O("path", {
        ...ge(this.props, !0),
        className: We("recharts-symbols", a),
        transform: "translate(".concat(o, ", ").concat(s, ")"),
        d: this.getPath()
      }) : null;
    }
  }]), r;
}(mt);
fh.defaultProps = {
  type: "circle",
  size: 64,
  sizeType: "area"
};
fh.registerSymbol = function(e, t) {
  Ux["symbol".concat(mu(e))] = t;
};
function Oo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Oo = function(r) {
    return typeof r;
  } : Oo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Oo(e);
}
function N0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function l7(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? N0(Object(r), !0).forEach(function(n) {
      Rl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function f7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function R0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function d7(e, t, r) {
  return t && R0(e.prototype, t), r && R0(e, r), e;
}
function h7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Il(e, t);
}
function Il(e, t) {
  return Il = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Il(e, t);
}
function p7(e) {
  var t = y7();
  return function() {
    var n = fs(e), i;
    if (t) {
      var a = fs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return v7(this, i);
  };
}
function v7(e, t) {
  return t && (Oo(t) === "object" || typeof t == "function") ? t : g7(e);
}
function g7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y7() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fs(e) {
  return fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fs(e);
}
var Ut = 32, dh = /* @__PURE__ */ function(e) {
  h7(r, e);
  var t = p7(r);
  function r() {
    return f7(this, r), t.apply(this, arguments);
  }
  return d7(r, [{
    key: "renderIcon",
    value: function(i) {
      var a = this.props.inactiveColor, o = Ut / 2, s = Ut / 6, u = Ut / 3, c = i.inactive ? a : i.color;
      if (i.type === "plainline")
        return /* @__PURE__ */ O("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: c,
          strokeDasharray: i.payload.strokeDasharray,
          x1: 0,
          y1: o,
          x2: Ut,
          y2: o,
          className: "recharts-legend-icon"
        });
      if (i.type === "line")
        return /* @__PURE__ */ O("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: c,
          d: "M0,".concat(o, "h").concat(u, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * u, ",").concat(o, `
            H`).concat(Ut, "M").concat(2 * u, ",").concat(o, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(u, ",").concat(o),
          className: "recharts-legend-icon"
        });
      if (i.type === "rect")
        return /* @__PURE__ */ O("path", {
          stroke: "none",
          fill: c,
          d: "M0,".concat(Ut / 8, "h").concat(Ut, "v").concat(Ut * 3 / 4, "h").concat(-Ut, "z"),
          className: "recharts-legend-icon"
        });
      if (/* @__PURE__ */ me.isValidElement(i.legendIcon)) {
        var l = l7({}, i);
        return delete l.legendIcon, /* @__PURE__ */ me.cloneElement(i.legendIcon, l);
      }
      return /* @__PURE__ */ O(fh, {
        fill: c,
        cx: o,
        cy: o,
        size: Ut,
        sizeType: "diameter",
        type: i.type
      });
    }
  }, {
    key: "renderItems",
    value: function() {
      var i = this, a = this.props, o = a.payload, s = a.iconSize, u = a.layout, c = a.formatter, l = a.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Ut,
        height: Ut
      }, d = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return o.map(function(v, h) {
        var g, m = v.formatter || c, w = We((g = {
          "recharts-legend-item": !0
        }, Rl(g, "legend-item-".concat(h), !0), Rl(g, "inactive", v.inactive), g));
        if (v.type === "none")
          return null;
        var x = v.inactive ? l : v.color;
        return /* @__PURE__ */ z("li", {
          className: w,
          style: d,
          ...$a(i.props, v, h),
          children: [/* @__PURE__ */ O(ml, {
            width: s,
            height: s,
            viewBox: f,
            style: p,
            children: i.renderIcon(v)
          }), /* @__PURE__ */ O("span", {
            className: "recharts-legend-item-text",
            style: {
              color: x
            },
            children: m ? m(v.value, v, h) : v.value
          })]
        }, "legend-item-".concat(h));
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.payload, o = i.layout, s = i.align;
      if (!a || !a.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: o === "horizontal" ? s : "left"
      };
      return /* @__PURE__ */ O("ul", {
        className: "recharts-default-legend",
        style: u,
        children: this.renderItems()
      });
    }
  }]), r;
}(mt);
dh.displayName = "Legend";
dh.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
};
var m7 = Nr, b7 = Rr, x7 = "[object Number]";
function w7(e) {
  return typeof e == "number" || b7(e) && m7(e) == x7;
}
var zx = w7, S7 = zx;
function A7(e) {
  return S7(e) && e != +e;
}
var Au = A7, _7 = Nr, O7 = Re, E7 = Rr, T7 = "[object String]";
function P7(e) {
  return typeof e == "string" || !O7(e) && E7(e) && _7(e) == T7;
}
var Da = P7, _t = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, $l = function(t) {
  return Da(t) && t.indexOf("%") === t.length - 1;
}, re = function(t) {
  return zx(t) && !Au(t);
}, nt = function(t) {
  return re(t) || Da(t);
}, C7 = 0, _u = function(t) {
  var r = ++C7;
  return "".concat(t || "").concat(r);
}, Rt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!re(t) && !Da(t))
    return n;
  var a;
  if ($l(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return Au(a) && (a = n), i && a > r && (a = r), a;
}, Dr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, M7 = function(t) {
  if (!Re(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, I0 = function(t, r) {
  return re(t) && re(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Ll(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Et(n, t)) === r;
  });
}
function Eo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Eo = function(r) {
    return typeof r;
  } : Eo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Eo(e);
}
function $0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $0(Object(r), !0).forEach(function(n) {
      k7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k7(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function N7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function R7(e, t, r) {
  return t && L0(e.prototype, t), r && L0(e, r), e;
}
function I7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && jl(e, t);
}
function jl(e, t) {
  return jl = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, jl(e, t);
}
function $7(e) {
  var t = D7();
  return function() {
    var n = ds(e), i;
    if (t) {
      var a = ds(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return L7(this, i);
  };
}
function L7(e, t) {
  return t && (Eo(t) === "object" || typeof t == "function") ? t : j7(e);
}
function j7(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function D7() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ds(e) {
  return ds = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ds(e);
}
function F7(e, t) {
  if (e == null)
    return {};
  var r = V7(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function V7(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function B7(e) {
  return e.value;
}
function U7(e, t) {
  return e === !0 ? as(t, B7) : de(e) ? as(t, e) : t;
}
function z7(e, t) {
  if (/* @__PURE__ */ me.isValidElement(e))
    return /* @__PURE__ */ me.cloneElement(e, t);
  if (de(e))
    return /* @__PURE__ */ me.createElement(e, t);
  t.ref;
  var r = F7(t, ["ref"]);
  return /* @__PURE__ */ O(dh, {
    ...r
  });
}
var j0 = 1, ga = /* @__PURE__ */ function(e) {
  I7(r, e);
  var t = $7(r);
  function r() {
    var n;
    N7(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.wrapperNode = void 0, n.state = {
      boxWidth: -1,
      boxHeight: -1
    }, n;
  }
  return R7(r, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null;
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      var i = this.state, a = i.boxWidth, o = i.boxHeight;
      return a >= 0 && o >= 0 ? {
        width: a,
        height: o
      } : null;
    }
  }, {
    key: "getDefaultPosition",
    value: function(i) {
      var a = this.props, o = a.layout, s = a.align, u = a.verticalAlign, c = a.margin, l = a.chartWidth, f = a.chartHeight, d, p;
      if (!i || (i.left === void 0 || i.left === null) && (i.right === void 0 || i.right === null))
        if (s === "center" && o === "vertical") {
          var v = this.getBBoxSnapshot() || {
            width: 0
          };
          d = {
            left: ((l || 0) - v.width) / 2
          };
        } else
          d = s === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!i || (i.top === void 0 || i.top === null) && (i.bottom === void 0 || i.bottom === null))
        if (u === "middle") {
          var h = this.getBBoxSnapshot() || {
            height: 0
          };
          p = {
            top: ((f || 0) - h.height) / 2
          };
        } else
          p = u === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Un(Un({}, d), p);
    }
  }, {
    key: "updateBBox",
    value: function() {
      var i = this.state, a = i.boxWidth, o = i.boxHeight, s = this.props.onBBoxUpdate;
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var u = this.wrapperNode.getBoundingClientRect();
        (Math.abs(u.width - a) > j0 || Math.abs(u.height - o) > j0) && this.setState({
          boxWidth: u.width,
          boxHeight: u.height
        }, function() {
          s && s(u);
        });
      } else
        (a !== -1 || o !== -1) && this.setState({
          boxWidth: -1,
          boxHeight: -1
        }, function() {
          s && s(null);
        });
    }
  }, {
    key: "render",
    value: function() {
      var i = this, a = this.props, o = a.content, s = a.width, u = a.height, c = a.wrapperStyle, l = a.payloadUniqBy, f = a.payload, d = Un(Un({
        position: "absolute",
        width: s || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ O("div", {
        className: "recharts-legend-wrapper",
        style: d,
        ref: function(v) {
          i.wrapperNode = v;
        },
        children: z7(o, Un(Un({}, this.props), {}, {
          payload: U7(l, f)
        }))
      });
    }
  }], [{
    key: "getWithHeight",
    value: function(i, a) {
      var o = i.props.layout;
      return o === "vertical" && re(i.props.height) ? {
        height: i.props.height
      } : o === "horizontal" ? {
        width: i.props.width || a
      } : null;
    }
  }]), r;
}(mt);
ga.displayName = "Legend";
ga.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
};
function W7(e) {
  return e == null;
}
var le = W7, q7 = typeof WeakSet == "function", D0 = Object.keys;
function hh(e, t) {
  return e === t || e !== e && t !== t;
}
function F0(e) {
  return e.constructor === Object || e.constructor == null;
}
function V0(e) {
  return !!e && typeof e.then == "function";
}
function B0(e) {
  return !!(e && e.$$typeof);
}
function H7() {
  var e = [];
  return {
    add: function(t) {
      e.push(t);
    },
    has: function(t) {
      return e.indexOf(t) !== -1;
    }
  };
}
var G7 = function(e) {
  return e ? function() {
    return /* @__PURE__ */ new WeakSet();
  } : H7;
}(q7);
function Wx(e) {
  return function(r) {
    var n = e || r;
    return function(a, o, s) {
      s === void 0 && (s = G7());
      var u = !!a && typeof a == "object", c = !!o && typeof o == "object";
      if (u || c) {
        var l = u && s.has(a), f = c && s.has(o);
        if (l || f)
          return l && f;
        u && s.add(a), c && s.add(o);
      }
      return n(a, o, s);
    };
  };
}
function Y7(e, t, r, n) {
  var i = e.length;
  if (t.length !== i)
    return !1;
  for (; i-- > 0; )
    if (!r(e[i], t[i], n))
      return !1;
  return !0;
}
function K7(e, t, r, n) {
  var i = e.size === t.size;
  if (i && e.size) {
    var a = {};
    e.forEach(function(o, s) {
      if (i) {
        var u = !1, c = 0;
        t.forEach(function(l, f) {
          !u && !a[c] && (u = r(s, f, n) && r(o, l, n), u && (a[c] = !0)), c++;
        }), i = u;
      }
    });
  }
  return i;
}
var X7 = "_owner", Z7 = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
function U0(e, t, r, n) {
  var i = D0(e), a = i.length;
  if (D0(t).length !== a)
    return !1;
  if (a)
    for (var o = void 0; a-- > 0; ) {
      if (o = i[a], o === X7) {
        var s = B0(e), u = B0(t);
        if ((s || u) && s !== u)
          return !1;
      }
      if (!Z7(t, o) || !r(e[o], t[o], n))
        return !1;
    }
  return !0;
}
function J7(e, t) {
  return e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline && e.unicode === t.unicode && e.sticky === t.sticky && e.lastIndex === t.lastIndex;
}
function Q7(e, t, r, n) {
  var i = e.size === t.size;
  if (i && e.size) {
    var a = {};
    e.forEach(function(o) {
      if (i) {
        var s = !1, u = 0;
        t.forEach(function(c) {
          !s && !a[u] && (s = r(o, c, n), s && (a[u] = !0)), u++;
        }), i = s;
      }
    });
  }
  return i;
}
var e9 = typeof Map == "function", t9 = typeof Set == "function";
function Ou(e) {
  var t = typeof e == "function" ? e(r) : r;
  function r(n, i, a) {
    if (n === i)
      return !0;
    if (n && i && typeof n == "object" && typeof i == "object") {
      if (F0(n) && F0(i))
        return U0(n, i, t, a);
      var o = Array.isArray(n), s = Array.isArray(i);
      return o || s ? o === s && Y7(n, i, t, a) : (o = n instanceof Date, s = i instanceof Date, o || s ? o === s && hh(n.getTime(), i.getTime()) : (o = n instanceof RegExp, s = i instanceof RegExp, o || s ? o === s && J7(n, i) : V0(n) || V0(i) ? n === i : e9 && (o = n instanceof Map, s = i instanceof Map, o || s) ? o === s && K7(n, i, t, a) : t9 && (o = n instanceof Set, s = i instanceof Set, o || s) ? o === s && Q7(n, i, t, a) : U0(n, i, t, a)));
    }
    return n !== n && i !== i;
  }
  return r;
}
var r9 = Ou();
Ou(function() {
  return hh;
});
Ou(Wx());
Ou(Wx(hh));
function z0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : requestAnimationFrame(i);
  };
  requestAnimationFrame(n);
}
function To(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? To = function(r) {
    return typeof r;
  } : To = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, To(e);
}
function n9(e) {
  return s9(e) || o9(e) || a9(e) || i9();
}
function i9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a9(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return W0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return W0(e, t);
  }
}
function W0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function o9(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function s9(e) {
  if (Array.isArray(e))
    return e;
}
function u9() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = n9(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          z0(i.bind(null, c), u);
          return;
        }
        i(u), z0(i.bind(null, c));
        return;
      }
      To(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function q0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ci(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? q0(Object(r), !0).forEach(function(n) {
      hs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var c9 = ["Webkit", "Moz", "O", "ms"], l9 = ["-webkit-", "-moz-", "-o-", "-ms-"], f9 = ["transform", "transformOrigin", "transition"], d9 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, h9 = function(t) {
  return t;
}, p9 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, v9 = function(t, r) {
  if (f9.indexOf(t) === -1)
    return hs({}, t, r);
  var n = t === "transition", i = t.replace(/(\w)/, function(o) {
    return o.toUpperCase();
  }), a = r;
  return c9.reduce(function(o, s, u) {
    return n && (a = r.replace(/(transform|transform-origin)/gim, "".concat(l9[u], "$1"))), ci(ci({}, o), {}, hs({}, s + i, a));
  }, {});
}, na = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return ci(ci({}, n), {}, hs({}, i, t(i, r[i])));
  }, {});
}, Dl = function(t) {
  return Object.keys(t).reduce(function(r, n) {
    return ci(ci({}, r), v9(n, r[n]));
  }, t);
}, H0 = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(p9(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, g9 = process.env.NODE_ENV !== "production", ps = function(t, r, n, i, a, o, s, u) {
  if (g9 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, i, a, o, s, u], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function y9(e, t) {
  return x9(e) || b9(e, t) || qx(e, t) || m9();
}
function m9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b9(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function x9(e) {
  if (Array.isArray(e))
    return e;
}
function w9(e) {
  return _9(e) || A9(e) || qx(e) || S9();
}
function S9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qx(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Fl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fl(e, t);
  }
}
function A9(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function _9(e) {
  if (Array.isArray(e))
    return Fl(e);
}
function Fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var vs = 1e-4, Hx = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, Gx = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, G0 = function(t, r) {
  return function(n) {
    var i = Hx(t, r);
    return Gx(i, n);
  };
}, O9 = function(t, r) {
  return function(n) {
    var i = Hx(t, r), a = [].concat(w9(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return Gx(a, n);
  };
}, Y0 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, s = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, s = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, s = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, s = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, s = 1;
        break;
      default: {
        var u = r[0].split("(");
        if (u[0] === "cubic-bezier" && u[1].split(")")[0].split(",").length === 4) {
          var c = u[1].split(")")[0].split(",").map(function(g) {
            return parseFloat(g);
          }), l = y9(c, 4);
          i = l[0], a = l[1], o = l[2], s = l[3];
        } else
          ps(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  ps([i, o, a, s].every(function(g) {
    return typeof g == "number" && g >= 0 && g <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = G0(i, o), d = G0(a, s), p = O9(i, o), v = function(m) {
    return m > 1 ? 1 : m < 0 ? 0 : m;
  }, h = function(m) {
    for (var w = m > 1 ? 1 : m, x = w, b = 0; b < 8; ++b) {
      var y = f(x) - w, S = p(x);
      if (Math.abs(y - w) < vs || S < vs)
        return d(x);
      x = v(x - y / S);
    }
    return d(x);
  };
  return h.isStepper = !1, h;
}, E9 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, u = function(l, f, d) {
    var p = -(l - f) * n, v = d * a, h = d + (p - v) * s / 1e3, g = d * s / 1e3 + l;
    return Math.abs(g - f) < vs && Math.abs(h) < vs ? [f, 0] : [g, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, T9 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Y0(i);
      case "spring":
        return E9();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Y0(i);
        ps(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (ps(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function K0(e) {
  return M9(e) || C9(e) || Yx(e) || P9();
}
function P9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function C9(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function M9(e) {
  if (Array.isArray(e))
    return Bl(e);
}
function X0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? X0(Object(r), !0).forEach(function(n) {
      Vl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k9(e, t) {
  return I9(e) || R9(e, t) || Yx(e, t) || N9();
}
function N9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yx(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Bl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Bl(e, t);
  }
}
function Bl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function R9(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function I9(e) {
  if (Array.isArray(e))
    return e;
}
var gs = function(t, r, n) {
  return t + (r - t) * n;
}, Ul = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, $9 = function e(t, r, n) {
  var i = na(function(a, o) {
    if (Ul(o)) {
      var s = t(o.from, o.to, o.velocity), u = k9(s, 2), c = u[0], l = u[1];
      return ct(ct({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? na(function(a, o) {
    return Ul(o) ? ct(ct({}, o), {}, {
      velocity: gs(o.velocity, i[a].velocity, n),
      from: gs(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const L9 = function(e, t, r, n, i) {
  var a = d9(e, t), o = a.reduce(function(g, m) {
    return ct(ct({}, g), {}, Vl({}, m, [e[m], t[m]]));
  }, {}), s = a.reduce(function(g, m) {
    return ct(ct({}, g), {}, Vl({}, m, {
      from: e[m],
      velocity: 0,
      to: t[m]
    }));
  }, {}), u = -1, c, l, f = function() {
    return null;
  }, d = function() {
    return na(function(m, w) {
      return w.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(Ul).length;
  }, v = function(m) {
    c || (c = m);
    var w = m - c, x = w / r.dt;
    s = $9(r, s, x), i(ct(ct(ct({}, e), t), d())), c = m, p() || (u = requestAnimationFrame(f));
  }, h = function(m) {
    l || (l = m);
    var w = (m - l) / n, x = na(function(y, S) {
      return gs.apply(void 0, K0(S).concat([r(w)]));
    }, o);
    if (i(ct(ct(ct({}, e), t), x)), w < 1)
      u = requestAnimationFrame(f);
    else {
      var b = na(function(y, S) {
        return gs.apply(void 0, K0(S).concat([r(1)]));
      }, o);
      i(ct(ct(ct({}, e), t), b));
    }
  };
  return f = r.isStepper ? v : h, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(u);
    };
  };
};
function Po(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Po = function(r) {
    return typeof r;
  } : Po = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Po(e);
}
function j9(e, t) {
  if (e == null)
    return {};
  var r = D9(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function D9(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function xc(e) {
  return U9(e) || B9(e) || V9(e) || F9();
}
function F9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V9(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return zl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zl(e, t);
  }
}
function B9(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function U9(e) {
  if (Array.isArray(e))
    return zl(e);
}
function zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Z0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Z0(Object(r), !0).forEach(function(n) {
      Gi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function z9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function J0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function W9(e, t, r) {
  return t && J0(e.prototype, t), r && J0(e, r), e;
}
function q9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Wl(e, t);
}
function Wl(e, t) {
  return Wl = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Wl(e, t);
}
function H9(e) {
  var t = G9();
  return function() {
    var n = ys(e), i;
    if (t) {
      var a = ys(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return ql(this, i);
  };
}
function ql(e, t) {
  return t && (Po(t) === "object" || typeof t == "function") ? t : Hl(e);
}
function Hl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function G9() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ys(e) {
  return ys = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ys(e);
}
var li = /* @__PURE__ */ function(e) {
  q9(r, e);
  var t = H9(r);
  function r(n, i) {
    var a;
    z9(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, u = o.attributeName, c = o.from, l = o.to, f = o.steps, d = o.children;
    if (a.handleStyleChange = a.handleStyleChange.bind(Hl(a)), a.changeStyle = a.changeStyle.bind(Hl(a)), !s)
      return a.state = {
        style: {}
      }, typeof d == "function" && (a.state = {
        style: l
      }), ql(a);
    if (f && f.length)
      a.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return a.state = {
          style: c
        }, ql(a);
      a.state = {
        style: u ? Gi({}, u, c) : c
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return W9(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, s = a.canBegin, u = a.attributeName, c = a.shouldReAnimate;
      if (!!s) {
        if (!o) {
          var l = {
            style: u ? Gi({}, u, this.props.to) : this.props.to
          };
          this.state && this.state.style && (u && this.state.style[u] !== this.props.to || !u && this.state.style !== this.props.to) && this.setState(l);
          return;
        }
        if (!(r9(i.to, this.props.to) && i.canBegin && i.isActive)) {
          var f = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var d = f || c ? this.props.from : i.to;
          if (this.state && this.state.style) {
            var p = {
              style: u ? Gi({}, u, d) : d
            };
            (u && this.state.style[u] !== d || !u && this.state.style !== d) && this.setState(p);
          }
          this.runAnimation(Xt(Xt({}, this.props), {}, {
            from: d,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1, this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation();
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, s = i.to, u = i.duration, c = i.easing, l = i.begin, f = i.onAnimationEnd, d = i.onAnimationStart, p = L9(o, s, T9(c), u, this.changeStyle), v = function() {
        a.stopJSAnimation = p();
      };
      this.manager.start([d, l, v, u, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, u = i.onAnimationStart, c = o[0], l = c.style, f = c.duration, d = f === void 0 ? 0 : f, p = function(h, g, m) {
        if (m === 0)
          return h;
        var w = g.duration, x = g.easing, b = x === void 0 ? "ease" : x, y = g.style, S = g.properties, A = g.onAnimationEnd, _ = m > 0 ? o[m - 1] : g, E = S || Object.keys(y);
        if (typeof b == "function" || b === "spring")
          return [].concat(xc(h), [a.runJSAnimation.bind(a, {
            from: _.style,
            to: y,
            duration: w,
            easing: b
          }), w]);
        var M = H0(E, w, b), C = Xt(Xt(Xt({}, _.style), y), {}, {
          transition: M
        });
        return [].concat(xc(h), [C, w, A]).filter(h9);
      };
      return this.manager.start([u].concat(xc(o.reduce(p, [l, Math.max(d, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = u9());
      var a = i.begin, o = i.duration, s = i.attributeName, u = i.to, c = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, d = i.steps, p = i.children, v = this.manager;
      if (this.unSubscribe = v.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var h = s ? Gi({}, s, u) : u, g = H0(Object.keys(h), o, c);
      v.start([l, a, Xt(Xt({}, h), {}, {
        transition: g
      }), o, f]);
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin, i.duration, i.attributeName, i.easing;
      var o = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var s = j9(i, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"]), u = _n.count(a), c = Dl(this.state.style);
      if (typeof a == "function")
        return a(c);
      if (!o || u === 0)
        return a;
      var l = function(d) {
        var p = d.props, v = p.style, h = v === void 0 ? {} : v, g = p.className, m = /* @__PURE__ */ vt(d, Xt(Xt({}, s), {}, {
          style: Xt(Xt({}, h), c),
          className: g
        }));
        return m;
      };
      return u === 1 ? l(_n.only(a)) : /* @__PURE__ */ O("div", {
        children: _n.map(a, function(f) {
          return l(f);
        })
      });
    }
  }]), r;
}(mt);
li.displayName = "Animate";
li.propTypes = {
  from: F.exports.oneOfType([F.exports.object, F.exports.string]),
  to: F.exports.oneOfType([F.exports.object, F.exports.string]),
  attributeName: F.exports.string,
  duration: F.exports.number,
  begin: F.exports.number,
  easing: F.exports.oneOfType([F.exports.string, F.exports.func]),
  steps: F.exports.arrayOf(F.exports.shape({
    duration: F.exports.number.isRequired,
    style: F.exports.object.isRequired,
    easing: F.exports.oneOfType([F.exports.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), F.exports.func]),
    properties: F.exports.arrayOf("string"),
    onAnimationEnd: F.exports.func
  })),
  children: F.exports.oneOfType([F.exports.node, F.exports.func]),
  isActive: F.exports.bool,
  canBegin: F.exports.bool,
  onAnimationEnd: F.exports.func,
  shouldReAnimate: F.exports.bool,
  onAnimationStart: F.exports.func,
  onAnimationReStart: F.exports.func
};
li.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Number.isFinite === void 0 && (Number.isFinite = function(e) {
  return typeof e == "number" && isFinite(e);
});
F.exports.object, F.exports.object, F.exports.object, F.exports.element;
F.exports.object, F.exports.object, F.exports.object, F.exports.oneOfType([F.exports.array, F.exports.element]), F.exports.any;
var Q0 = La, Y9 = th, K9 = Re, eg = Q0 ? Q0.isConcatSpreadable : void 0;
function X9(e) {
  return K9(e) || Y9(e) || !!(eg && e && e[eg]);
}
var Z9 = X9, J9 = sx, Q9 = Z9;
function Kx(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = Q9), i || (i = []); ++a < o; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? Kx(s, t - 1, r, n, i) : J9(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var Xx = Kx;
function eF(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var u = o[e ? s : ++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var tF = eF, rF = tF, nF = rF(), iF = nF, aF = iF, oF = gu;
function sF(e, t) {
  return e && aF(e, t, oF);
}
var Zx = sF, uF = ja;
function cF(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!uF(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var lF = cF, fF = Zx, dF = lF, hF = dF(fF), ph = hF, pF = ph, vF = ja;
function gF(e, t) {
  var r = -1, n = vF(e) ? Array(e.length) : [];
  return pF(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Jx = gF;
function yF(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var mF = yF, tg = Oi;
function bF(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = tg(e), o = t !== void 0, s = t === null, u = t === t, c = tg(t);
    if (!s && !c && !a && e > t || a && o && u && !s && !c || n && o && u || !r && u || !i)
      return 1;
    if (!n && !a && !c && e < t || c && r && i && !n && !a || s && r && i || !o && i || !u)
      return -1;
  }
  return 0;
}
var xF = bF, wF = xF;
function SF(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var u = wF(i[n], a[n]);
    if (u) {
      if (n >= s)
        return u;
      var c = r[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var AF = SF, wc = sh, _F = uh, OF = mr, EF = Jx, TF = mF, PF = cx, CF = AF, MF = Ei, kF = Re;
function NF(e, t, r) {
  t.length ? t = wc(t, function(a) {
    return kF(a) ? function(o) {
      return _F(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [MF];
  var n = -1;
  t = wc(t, PF(OF));
  var i = EF(e, function(a, o, s) {
    var u = wc(t, function(c) {
      return c(a);
    });
    return { criteria: u, index: ++n, value: a };
  });
  return TF(i, function(a, o) {
    return CF(a, o, r);
  });
}
var RF = NF;
function IF(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var $F = IF, LF = $F, rg = Math.max;
function jF(e, t, r) {
  return t = rg(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = rg(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), LF(e, this, s);
  };
}
var DF = jF;
function FF(e) {
  return function() {
    return e;
  };
}
var VF = FF, BF = kn, UF = function() {
  try {
    var e = BF(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Qx = UF, zF = VF, ng = Qx, WF = Ei, qF = ng ? function(e, t) {
  return ng(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: zF(t),
    writable: !0
  });
} : WF, HF = qF, GF = 800, YF = 16, KF = Date.now;
function XF(e) {
  var t = 0, r = 0;
  return function() {
    var n = KF(), i = YF - (n - r);
    if (r = n, i > 0) {
      if (++t >= GF)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var ZF = XF, JF = HF, QF = ZF, eV = QF(JF), tV = eV, rV = Ei, nV = DF, iV = tV;
function aV(e, t) {
  return iV(nV(e, t, rV), e + "");
}
var oV = aV, sV = Zd, uV = ja, cV = rh, lV = Dt;
function fV(e, t, r) {
  if (!lV(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? uV(r) && cV(t, r.length) : n == "string" && t in r) ? sV(r[t], e) : !1;
}
var Eu = fV, dV = Xx, hV = RF, pV = oV, ig = Eu, vV = pV(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && ig(e, t[0], t[1]) ? t = [] : r > 2 && ig(t[0], t[1], t[2]) && (t = [t[0]]), hV(e, dV(t, 1), []);
}), vh = vV;
function Co(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Co = function(r) {
    return typeof r;
  } : Co = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Co(e);
}
function gV(e, t) {
  return xV(e) || bV(e, t) || mV(e, t) || yV();
}
function yV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mV(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return ag(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ag(e, t);
  }
}
function ag(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function bV(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function xV(e) {
  if (Array.isArray(e))
    return e;
}
function og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(r), !0).forEach(function(n) {
      wV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wV(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function SV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function AV(e, t, r) {
  return t && sg(e.prototype, t), r && sg(e, r), e;
}
function _V(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Gl(e, t);
}
function Gl(e, t) {
  return Gl = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Gl(e, t);
}
function OV(e) {
  var t = PV();
  return function() {
    var n = ms(e), i;
    if (t) {
      var a = ms(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return EV(this, i);
  };
}
function EV(e, t) {
  return t && (Co(t) === "object" || typeof t == "function") ? t : TV(e);
}
function TV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PV() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ms(e) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ms(e);
}
function CV(e) {
  return Re(e) && nt(e[0]) && nt(e[1]) ? e.join(" ~ ") : e;
}
var gh = /* @__PURE__ */ function(e) {
  _V(r, e);
  var t = OV(r);
  function r() {
    return SV(this, r), t.apply(this, arguments);
  }
  return AV(r, [{
    key: "renderContent",
    value: function() {
      var i = this.props, a = i.payload, o = i.separator, s = i.formatter, u = i.itemStyle, c = i.itemSorter;
      if (a && a.length) {
        var l = {
          padding: 0,
          margin: 0
        }, f = (c ? vh(a, c) : a).map(function(d, p) {
          if (d.type === "none")
            return null;
          var v = Sc({
            display: "block",
            paddingTop: 4,
            paddingBottom: 4,
            color: d.color || "#000"
          }, u), h = d.formatter || s || CV, g = d.value, m = d.name;
          if (h && g != null && m != null) {
            var w = h(g, m, d, p, a);
            if (Array.isArray(w)) {
              var x = w, b = gV(x, 2);
              g = b[0], m = b[1];
            } else
              g = w;
          }
          return /* @__PURE__ */ z("li", {
            className: "recharts-tooltip-item",
            style: v,
            children: [nt(m) ? /* @__PURE__ */ O("span", {
              className: "recharts-tooltip-item-name",
              children: m
            }) : null, nt(m) ? /* @__PURE__ */ O("span", {
              className: "recharts-tooltip-item-separator",
              children: o
            }) : null, /* @__PURE__ */ O("span", {
              className: "recharts-tooltip-item-value",
              children: g
            }), /* @__PURE__ */ O("span", {
              className: "recharts-tooltip-item-unit",
              children: d.unit || ""
            })]
          }, "tooltip-item-".concat(p));
        });
        return /* @__PURE__ */ O("ul", {
          className: "recharts-tooltip-item-list",
          style: l,
          children: f
        });
      }
      return null;
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.wrapperClassName, o = i.contentStyle, s = i.labelClassName, u = i.labelStyle, c = i.label, l = i.labelFormatter, f = i.payload, d = Sc({
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap"
      }, o), p = Sc({
        margin: 0
      }, u), v = !le(c), h = v ? c : "", g = We("recharts-default-tooltip", a), m = We("recharts-tooltip-label", s);
      return v && l && f !== void 0 && f !== null && (h = l(c, f)), /* @__PURE__ */ z("div", {
        className: g,
        style: d,
        children: [/* @__PURE__ */ O("p", {
          className: m,
          style: p,
          children: /* @__PURE__ */ me.isValidElement(h) ? h : "".concat(h)
        }), this.renderContent()]
      });
    }
  }]), r;
}(mt);
gh.displayName = "DefaultTooltipContent";
gh.defaultProps = {
  separator: " : ",
  contentStyle: {},
  itemStyle: {},
  labelStyle: {}
};
var MV = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Xr = {
  isSsr: MV(),
  get: function(t) {
    return Xr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      Xr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        Xr[i] = t[i];
      });
    }
  }
};
function Mo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mo = function(r) {
    return typeof r;
  } : Mo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Mo(e);
}
function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), !0).forEach(function(n) {
      Yi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function kV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function NV(e, t, r) {
  return t && cg(e.prototype, t), r && cg(e, r), e;
}
function RV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Yl(e, t);
}
function Yl(e, t) {
  return Yl = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Yl(e, t);
}
function IV(e) {
  var t = jV();
  return function() {
    var n = bs(e), i;
    if (t) {
      var a = bs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return $V(this, i);
  };
}
function $V(e, t) {
  return t && (Mo(t) === "object" || typeof t == "function") ? t : LV(e);
}
function LV(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jV() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function bs(e) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bs(e);
}
var Vi = "recharts-tooltip-wrapper", lg = 1;
function DV(e) {
  return e.dataKey;
}
function FV(e, t) {
  return e === !0 ? as(t, DV) : de(e) ? as(t, e) : t;
}
function VV(e, t) {
  return /* @__PURE__ */ me.isValidElement(e) ? /* @__PURE__ */ me.cloneElement(e, t) : de(e) ? /* @__PURE__ */ me.createElement(e, t) : /* @__PURE__ */ O(gh, {
    ...t
  });
}
var Gn = /* @__PURE__ */ function(e) {
  RV(r, e);
  var t = IV(r);
  function r() {
    var n;
    kV(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.state = {
      boxWidth: -1,
      boxHeight: -1,
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }, n.wrapperNode = void 0, n.getTranslate = function(s) {
      var u = s.key, c = s.tooltipDimension, l = s.viewBoxDimension, f = n.props, d = f.allowEscapeViewBox, p = f.coordinate, v = f.offset, h = f.position, g = f.viewBox;
      if (h && re(h[u]))
        return h[u];
      var m = p[u] - c - v, w = p[u] + v;
      if (d[u])
        return w;
      var x = p[u] + c + v, b = g[u] + l;
      return x > b ? Math.max(m, g[u]) : Math.max(w, g[u]);
    }, n;
  }
  return NV(r, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "updateBBox",
    value: function() {
      var i = this.state, a = i.boxWidth, o = i.boxHeight, s = i.dismissed;
      if (s ? (this.wrapperNode.blur(), (this.props.coordinate.x !== this.state.dismissedAtCoordinate.x || this.props.coordinate.y !== this.state.dismissedAtCoordinate.y) && this.setState({
        dismissed: !1
      })) : this.wrapperNode.focus({
        preventScroll: !0
      }), this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var u = this.wrapperNode.getBoundingClientRect();
        (Math.abs(u.width - a) > lg || Math.abs(u.height - o) > lg) && this.setState({
          boxWidth: u.width,
          boxHeight: u.height
        });
      } else
        (a !== -1 || o !== -1) && this.setState({
          boxWidth: -1,
          boxHeight: -1
        });
    }
  }, {
    key: "render",
    value: function() {
      var i, a = this, o = this.props, s = o.payload, u = o.isAnimationActive, c = o.animationDuration, l = o.animationEasing, f = o.filterNull, d = o.payloadUniqBy, p = FV(d, f && s && s.length ? s.filter(function(N) {
        return !le(N.value);
      }) : s), v = p && p.length, h = this.props, g = h.content, m = h.viewBox, w = h.coordinate, x = h.position, b = h.active, y = h.wrapperStyle, S = wr({
        pointerEvents: "none",
        visibility: !this.state.dismissed && b && v ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, y), A, _;
      if (x && re(x.x) && re(x.y))
        A = x.x, _ = x.y;
      else {
        var E = this.state, M = E.boxWidth, C = E.boxHeight;
        M > 0 && C > 0 && w ? (A = this.getTranslate({
          key: "x",
          tooltipDimension: M,
          viewBoxDimension: m.width
        }), _ = this.getTranslate({
          key: "y",
          tooltipDimension: C,
          viewBoxDimension: m.height
        })) : S.visibility = "hidden";
      }
      S = wr(wr({}, Dl({
        transform: this.props.useTranslate3d ? "translate3d(".concat(A, "px, ").concat(_, "px, 0)") : "translate(".concat(A, "px, ").concat(_, "px)")
      })), S), u && b && (S = wr(wr({}, Dl({
        transition: "transform ".concat(c, "ms ").concat(l)
      })), S));
      var k = We(Vi, (i = {}, Yi(i, "".concat(Vi, "-right"), re(A) && w && re(w.x) && A >= w.x), Yi(i, "".concat(Vi, "-left"), re(A) && w && re(w.x) && A < w.x), Yi(i, "".concat(Vi, "-bottom"), re(_) && w && re(w.y) && _ >= w.y), Yi(i, "".concat(Vi, "-top"), re(_) && w && re(w.y) && _ < w.y), i));
      return /* @__PURE__ */ O("div", {
        tabIndex: -1,
        role: "dialog",
        onKeyDown: function(j) {
          j.key === "Escape" && a.setState({
            dismissed: !0,
            dismissedAtCoordinate: wr(wr({}, a.state.dismissedAtCoordinate), {}, {
              x: a.props.coordinate.x,
              y: a.props.coordinate.y
            })
          });
        },
        className: k,
        style: S,
        ref: function(j) {
          a.wrapperNode = j;
        },
        children: VV(g, wr(wr({}, this.props), {}, {
          payload: p
        }))
      });
    }
  }]), r;
}(mt);
Gn.displayName = "Tooltip";
Gn.defaultProps = {
  active: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  offset: 10,
  viewBox: {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  },
  coordinate: {
    x: 0,
    y: 0
  },
  cursorStyle: {},
  separator: " : ",
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: !0,
  trigger: "hover",
  isAnimationActive: !Xr.isSsr,
  animationEasing: "ease",
  animationDuration: 400,
  filterNull: !0,
  useTranslate3d: !1
};
var BV = yr, UV = function() {
  return BV.Date.now();
}, zV = UV, WV = /\s/;
function qV(e) {
  for (var t = e.length; t-- && WV.test(e.charAt(t)); )
    ;
  return t;
}
var HV = qV, GV = HV, YV = /^\s+/;
function KV(e) {
  return e && e.slice(0, GV(e) + 1).replace(YV, "");
}
var XV = KV, ZV = XV, fg = Dt, JV = Oi, dg = 0 / 0, QV = /^[-+]0x[0-9a-f]+$/i, eB = /^0b[01]+$/i, tB = /^0o[0-7]+$/i, rB = parseInt;
function nB(e) {
  if (typeof e == "number")
    return e;
  if (JV(e))
    return dg;
  if (fg(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = fg(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ZV(e);
  var r = eB.test(e);
  return r || tB.test(e) ? rB(e.slice(2), r ? 2 : 8) : QV.test(e) ? dg : +e;
}
var ew = nB, iB = Dt, Ac = zV, hg = ew, aB = "Expected a function", oB = Math.max, sB = Math.min;
function uB(e, t, r) {
  var n, i, a, o, s, u, c = 0, l = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(aB);
  t = hg(t) || 0, iB(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? oB(hg(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function p(S) {
    var A = n, _ = i;
    return n = i = void 0, c = S, o = e.apply(_, A), o;
  }
  function v(S) {
    return c = S, s = setTimeout(m, t), l ? p(S) : o;
  }
  function h(S) {
    var A = S - u, _ = S - c, E = t - A;
    return f ? sB(E, a - _) : E;
  }
  function g(S) {
    var A = S - u, _ = S - c;
    return u === void 0 || A >= t || A < 0 || f && _ >= a;
  }
  function m() {
    var S = Ac();
    if (g(S))
      return w(S);
    s = setTimeout(m, h(S));
  }
  function w(S) {
    return s = void 0, d && n ? p(S) : (n = i = void 0, o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), c = 0, n = u = i = s = void 0;
  }
  function b() {
    return s === void 0 ? o : w(Ac());
  }
  function y() {
    var S = Ac(), A = g(S);
    if (n = arguments, i = this, u = S, A) {
      if (s === void 0)
        return v(u);
      if (f)
        return clearTimeout(s), s = setTimeout(m, t), p(u);
    }
    return s === void 0 && (s = setTimeout(m, t)), o;
  }
  return y.cancel = x, y.flush = b, y;
}
var cB = uB, lB = process.env.NODE_ENV !== "production", ya = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (lB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
}, yh = function(t) {
  return null;
};
yh.displayName = "Cell";
var Kl = { exports: {} }, _c = "(".charCodeAt(0), Oc = ")".charCodeAt(0), oo = "'".charCodeAt(0), Ec = '"'.charCodeAt(0), Tc = "\\".charCodeAt(0), so = "/".charCodeAt(0), Pc = ",".charCodeAt(0), Cc = ":".charCodeAt(0), pg = "*".charCodeAt(0), fB = function(e) {
  for (var t = [], r = e, n, i, a, o, s, u, c, l = 0, f = r.charCodeAt(l), d = r.length, p = [{ nodes: t }], v = 0, h, g = "", m = "", w = ""; l < d; )
    if (f <= 32) {
      n = l;
      do
        n += 1, f = r.charCodeAt(n);
      while (f <= 32);
      o = r.slice(l, n), a = t[t.length - 1], f === Oc && v ? w = o : a && a.type === "div" ? a.after = o : f === Pc || f === Cc || f === so && r.charCodeAt(n + 1) !== pg ? m = o : t.push({
        type: "space",
        sourceIndex: l,
        value: o
      }), l = n;
    } else if (f === oo || f === Ec) {
      n = l, i = f === oo ? "'" : '"', o = {
        type: "string",
        sourceIndex: l,
        quote: i
      };
      do
        if (s = !1, n = r.indexOf(i, n + 1), ~n)
          for (u = n; r.charCodeAt(u - 1) === Tc; )
            u -= 1, s = !s;
        else
          r += i, n = r.length - 1, o.unclosed = !0;
      while (s);
      o.value = r.slice(l + 1, n), t.push(o), l = n + 1, f = r.charCodeAt(l);
    } else if (f === so && r.charCodeAt(l + 1) === pg)
      o = {
        type: "comment",
        sourceIndex: l
      }, n = r.indexOf("*/", l), n === -1 && (o.unclosed = !0, n = r.length), o.value = r.slice(l + 2, n), t.push(o), l = n + 2, f = r.charCodeAt(l);
    else if (f === so || f === Pc || f === Cc)
      o = r[l], t.push({
        type: "div",
        sourceIndex: l - m.length,
        value: o,
        before: m,
        after: ""
      }), m = "", l += 1, f = r.charCodeAt(l);
    else if (_c === f) {
      n = l;
      do
        n += 1, f = r.charCodeAt(n);
      while (f <= 32);
      if (o = {
        type: "function",
        sourceIndex: l - g.length,
        value: g,
        before: r.slice(l + 1, n)
      }, l = n, g === "url" && f !== oo && f !== Ec) {
        n -= 1;
        do
          if (s = !1, n = r.indexOf(")", n + 1), ~n)
            for (u = n; r.charCodeAt(u - 1) === Tc; )
              u -= 1, s = !s;
          else
            r += ")", n = r.length - 1, o.unclosed = !0;
        while (s);
        c = n;
        do
          c -= 1, f = r.charCodeAt(c);
        while (f <= 32);
        l !== c + 1 ? o.nodes = [
          {
            type: "word",
            sourceIndex: l,
            value: r.slice(l, c + 1)
          }
        ] : o.nodes = [], o.unclosed && c + 1 !== n ? (o.after = "", o.nodes.push({
          type: "space",
          sourceIndex: c + 1,
          value: r.slice(c + 1, n)
        })) : o.after = r.slice(c + 1, n), l = n + 1, f = r.charCodeAt(l), t.push(o);
      } else
        v += 1, o.after = "", t.push(o), p.push(o), t = o.nodes = [], h = o;
      g = "";
    } else if (Oc === f && v)
      l += 1, f = r.charCodeAt(l), h.after = w, w = "", v -= 1, p.pop(), h = p[v], t = h.nodes;
    else {
      n = l;
      do
        f === Tc && (n += 1), n += 1, f = r.charCodeAt(n);
      while (n < d && !(f <= 32 || f === oo || f === Ec || f === Pc || f === Cc || f === so || f === _c || f === Oc && v));
      o = r.slice(l, n), _c === f ? g = o : t.push({
        type: "word",
        sourceIndex: l,
        value: o
      }), l = n;
    }
  for (l = p.length - 1; l; l -= 1)
    p[l].unclosed = !0;
  return p[0].nodes;
}, dB = function e(t, r, n) {
  var i, a, o, s;
  for (i = 0, a = t.length; i < a; i += 1)
    o = t[i], n || (s = r(o, i, t)), s !== !1 && o.type === "function" && Array.isArray(o.nodes) && e(o.nodes, r, n), n && r(o, i, t);
};
function vg(e, t) {
  var r = e.type, n = e.value, i, a;
  return t && (a = t(e)) !== void 0 ? a : r === "word" || r === "space" ? n : r === "string" ? (i = e.quote || "", i + n + (e.unclosed ? "" : i)) : r === "comment" ? "/*" + n + (e.unclosed ? "" : "*/") : r === "div" ? (e.before || "") + n + (e.after || "") : Array.isArray(e.nodes) ? (i = tw(e.nodes), r !== "function" ? i : n + "(" + (e.before || "") + i + (e.after || "") + (e.unclosed ? "" : ")")) : n;
}
function tw(e, t) {
  var r, n;
  if (Array.isArray(e)) {
    for (r = "", n = e.length - 1; ~n; n -= 1)
      r = vg(e[n], t) + r;
    return r;
  }
  return vg(e, t);
}
var hB = tw, Mc, gg;
function pB() {
  if (gg)
    return Mc;
  gg = 1;
  var e = "-".charCodeAt(0), t = "+".charCodeAt(0), r = ".".charCodeAt(0), n = "e".charCodeAt(0), i = "E".charCodeAt(0);
  return Mc = function(a) {
    for (var o = 0, s = a.length, u = !1, c = -1, l = !1, f; o < s; ) {
      if (f = a.charCodeAt(o), f >= 48 && f <= 57)
        l = !0;
      else if (f === n || f === i) {
        if (c > -1)
          break;
        c = o;
      } else if (f === r) {
        if (u)
          break;
        u = !0;
      } else if (f === t || f === e) {
        if (o !== 0)
          break;
      } else
        break;
      o += 1;
    }
    return c + 1 === o && o--, l ? {
      number: a.slice(0, o),
      unit: a.slice(o)
    } : !1;
  }, Mc;
}
var vB = fB, rw = dB, nw = hB;
function en(e) {
  return this instanceof en ? (this.nodes = vB(e), this) : new en(e);
}
en.prototype.toString = function() {
  return Array.isArray(this.nodes) ? nw(this.nodes) : "";
};
en.prototype.walk = function(e, t) {
  return rw(this.nodes, e, t), this;
};
en.unit = pB();
en.walk = rw;
en.stringify = nw;
var gB = en;
function yB(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var iw = {};
(function(e) {
  var t = function() {
    function r(d, p) {
      Object.defineProperty(this, "name", {
        enumerable: !1,
        writable: !1,
        value: "JisonParserError"
      }), d == null && (d = "???"), Object.defineProperty(this, "message", {
        enumerable: !1,
        writable: !0,
        value: d
      }), this.hash = p;
      var v;
      if (p && p.exception instanceof Error) {
        var h = p.exception;
        this.message = h.message || d, v = h.stack;
      }
      v || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : v = new Error(d).stack), v && Object.defineProperty(this, "stack", {
        enumerable: !1,
        writable: !1,
        value: v
      });
    }
    typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(r.prototype, Error.prototype) : r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r.prototype.name = "JisonParserError";
    function n(d) {
      for (var p = [], v = d.pop, h = d.rule, g = 0, m = v.length; g < m; g++)
        p.push([
          v[g],
          h[g]
        ]);
      return p;
    }
    function i(d) {
      for (var p = {}, v = d.idx, h = d.goto, g = 0, m = v.length; g < m; g++) {
        var w = v[g];
        p[w] = h[g];
      }
      return p;
    }
    function a(d) {
      for (var p = [], v = d.len, h = d.symbol, g = d.type, m = d.state, w = d.mode, x = d.goto, b = 0, y = v.length; b < y; b++) {
        for (var S = v[b], A = {}, _ = 0; _ < S; _++) {
          var E = h.shift();
          switch (g.shift()) {
            case 2:
              A[E] = [
                w.shift(),
                x.shift()
              ];
              break;
            case 0:
              A[E] = m.shift();
              break;
            default:
              A[E] = [
                3
              ];
          }
        }
        p.push(A);
      }
      return p;
    }
    function o(d, p, v) {
      v = v || 0;
      for (var h = 0; h < p; h++)
        this.push(d), d += v;
    }
    function s(d, p) {
      for (d = this.length - d, p += d; d < p; d++)
        this.push(this[d]);
    }
    function u(d) {
      for (var p = [], v = 0, h = d.length; v < h; v++) {
        var g = d[v];
        typeof g == "function" ? (v++, g.apply(p, d[v])) : p.push(g);
      }
      return p;
    }
    var c = {
      trace: function() {
      },
      JisonParserError: r,
      yy: {},
      options: {
        type: "lalr",
        hasPartialLrUpgradeOnConflict: !0,
        errorRecoveryTokenDiscardCount: 3
      },
      symbols_: {
        $accept: 0,
        $end: 1,
        ADD: 3,
        ANGLE: 16,
        CHS: 22,
        COMMA: 14,
        CSS_CPROP: 13,
        CSS_VAR: 12,
        DIV: 6,
        EMS: 20,
        EOF: 1,
        EXS: 21,
        FREQ: 18,
        LENGTH: 15,
        LPAREN: 7,
        MUL: 5,
        NESTED_CALC: 9,
        NUMBER: 11,
        PERCENTAGE: 28,
        PREFIX: 10,
        REMS: 23,
        RES: 19,
        RPAREN: 8,
        SUB: 4,
        TIME: 17,
        VHS: 24,
        VMAXS: 27,
        VMINS: 26,
        VWS: 25,
        css_value: 33,
        css_variable: 32,
        error: 2,
        expression: 29,
        math_expression: 30,
        value: 31
      },
      terminals_: {
        1: "EOF",
        2: "error",
        3: "ADD",
        4: "SUB",
        5: "MUL",
        6: "DIV",
        7: "LPAREN",
        8: "RPAREN",
        9: "NESTED_CALC",
        10: "PREFIX",
        11: "NUMBER",
        12: "CSS_VAR",
        13: "CSS_CPROP",
        14: "COMMA",
        15: "LENGTH",
        16: "ANGLE",
        17: "TIME",
        18: "FREQ",
        19: "RES",
        20: "EMS",
        21: "EXS",
        22: "CHS",
        23: "REMS",
        24: "VHS",
        25: "VWS",
        26: "VMINS",
        27: "VMAXS",
        28: "PERCENTAGE"
      },
      TERROR: 2,
      EOF: 1,
      originalQuoteName: null,
      originalParseError: null,
      cleanupAfterParse: null,
      constructParseErrorInfo: null,
      yyMergeLocationInfo: null,
      __reentrant_call_depth: 0,
      __error_infos: [],
      __error_recovery_infos: [],
      quoteName: function(p) {
        return '"' + p + '"';
      },
      getSymbolName: function(p) {
        if (this.terminals_[p])
          return this.terminals_[p];
        var v = this.symbols_;
        for (var h in v)
          if (v[h] === p)
            return h;
        return null;
      },
      describeSymbol: function(p) {
        if (p !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[p])
          return this.terminal_descriptions_[p];
        if (p === this.EOF)
          return "end of input";
        var v = this.getSymbolName(p);
        return v ? this.quoteName(v) : null;
      },
      collect_expected_token_set: function(p, v) {
        var h = this.TERROR, g = [], m = {};
        if (!v && this.state_descriptions_ && this.state_descriptions_[p])
          return [
            this.state_descriptions_[p]
          ];
        for (var w in this.table[p])
          if (w = +w, w !== h) {
            var x = v ? w : this.describeSymbol(w);
            x && !m[x] && (g.push(x), m[x] = !0);
          }
        return g;
      },
      productions_: n({
        pop: u([
          29,
          o,
          [30, 10],
          31,
          31,
          32,
          32,
          o,
          [33, 15]
        ]),
        rule: u([
          2,
          o,
          [3, 5],
          4,
          7,
          o,
          [1, 4],
          2,
          4,
          6,
          o,
          [1, 14],
          2
        ])
      }),
      performAction: function(p, v, h) {
        var g = this.yy;
        switch (g.parser, g.lexer, p) {
          case 0:
            this.$ = h[v - 1];
            break;
          case 1:
            return this.$ = h[v - 1], h[v - 1];
          case 2:
          case 3:
          case 4:
          case 5:
            this.$ = { type: "MathExpression", operator: h[v - 1], left: h[v - 2], right: h[v] };
            break;
          case 6:
            this.$ = h[v - 1];
            break;
          case 7:
            this.$ = { type: "Calc", value: h[v - 1] };
            break;
          case 8:
            this.$ = { type: "Calc", value: h[v - 1], prefix: h[v - 5] };
            break;
          case 9:
          case 10:
          case 11:
            this.$ = h[v];
            break;
          case 12:
            this.$ = { type: "Value", value: parseFloat(h[v]) };
            break;
          case 13:
            this.$ = { type: "Value", value: parseFloat(h[v]) * -1 };
            break;
          case 14:
            this.$ = { type: "CssVariable", value: h[v - 1] };
            break;
          case 15:
            this.$ = { type: "CssVariable", value: h[v - 3], fallback: h[v - 1] };
            break;
          case 16:
            this.$ = { type: "LengthValue", value: parseFloat(h[v]), unit: /[a-z]+/.exec(h[v])[0] };
            break;
          case 17:
            this.$ = { type: "AngleValue", value: parseFloat(h[v]), unit: /[a-z]+/.exec(h[v])[0] };
            break;
          case 18:
            this.$ = { type: "TimeValue", value: parseFloat(h[v]), unit: /[a-z]+/.exec(h[v])[0] };
            break;
          case 19:
            this.$ = { type: "FrequencyValue", value: parseFloat(h[v]), unit: /[a-z]+/.exec(h[v])[0] };
            break;
          case 20:
            this.$ = { type: "ResolutionValue", value: parseFloat(h[v]), unit: /[a-z]+/.exec(h[v])[0] };
            break;
          case 21:
            this.$ = { type: "EmValue", value: parseFloat(h[v]), unit: "em" };
            break;
          case 22:
            this.$ = { type: "ExValue", value: parseFloat(h[v]), unit: "ex" };
            break;
          case 23:
            this.$ = { type: "ChValue", value: parseFloat(h[v]), unit: "ch" };
            break;
          case 24:
            this.$ = { type: "RemValue", value: parseFloat(h[v]), unit: "rem" };
            break;
          case 25:
            this.$ = { type: "VhValue", value: parseFloat(h[v]), unit: "vh" };
            break;
          case 26:
            this.$ = { type: "VwValue", value: parseFloat(h[v]), unit: "vw" };
            break;
          case 27:
            this.$ = { type: "VminValue", value: parseFloat(h[v]), unit: "vmin" };
            break;
          case 28:
            this.$ = { type: "VmaxValue", value: parseFloat(h[v]), unit: "vmax" };
            break;
          case 29:
            this.$ = { type: "PercentageValue", value: parseFloat(h[v]), unit: "%" };
            break;
          case 30:
            var m = h[v];
            m.value *= -1, this.$ = m;
            break;
        }
      },
      table: a({
        len: u([
          24,
          1,
          5,
          23,
          1,
          18,
          o,
          [0, 3],
          1,
          o,
          [0, 16],
          o,
          [23, 4],
          s,
          [28, 3],
          0,
          0,
          16,
          1,
          6,
          6,
          o,
          [0, 3],
          5,
          1,
          2,
          s,
          [37, 3],
          s,
          [20, 3],
          5,
          0,
          0
        ]),
        symbol: u([
          4,
          7,
          9,
          11,
          12,
          o,
          [15, 19, 1],
          1,
          1,
          o,
          [3, 4, 1],
          s,
          [30, 19],
          s,
          [29, 4],
          7,
          4,
          10,
          11,
          s,
          [22, 14],
          s,
          [19, 3],
          s,
          [43, 22],
          s,
          [23, 69],
          s,
          [139, 4],
          8,
          s,
          [51, 24],
          4,
          s,
          [138, 15],
          13,
          s,
          [186, 5],
          8,
          s,
          [6, 6],
          s,
          [5, 5],
          9,
          8,
          14,
          s,
          [159, 47],
          s,
          [60, 10]
        ]),
        type: u([
          o,
          [2, 19],
          o,
          [0, 5],
          1,
          o,
          [2, 24],
          o,
          [0, 4],
          s,
          [22, 19],
          s,
          [43, 42],
          s,
          [23, 70],
          s,
          [28, 25],
          s,
          [45, 25],
          s,
          [113, 54]
        ]),
        state: u([
          1,
          2,
          8,
          6,
          7,
          30,
          s,
          [4, 3],
          33,
          37,
          s,
          [5, 3],
          38,
          s,
          [4, 3],
          39,
          s,
          [4, 3],
          40,
          s,
          [4, 3],
          42,
          s,
          [21, 4],
          50,
          s,
          [5, 3],
          51,
          s,
          [4, 3]
        ]),
        mode: u([
          o,
          [1, 179],
          o,
          [2, 3],
          s,
          [5, 5],
          s,
          [6, 4],
          o,
          [1, 57]
        ]),
        goto: u([
          5,
          3,
          4,
          24,
          o,
          [9, 15, 1],
          o,
          [25, 5, 1],
          s,
          [24, 19],
          31,
          35,
          32,
          34,
          s,
          [18, 14],
          36,
          s,
          [38, 19],
          s,
          [19, 57],
          s,
          [118, 4],
          41,
          s,
          [24, 19],
          43,
          35,
          s,
          [16, 14],
          44,
          o,
          [2, 3],
          28,
          29,
          2,
          o,
          [3, 3],
          28,
          29,
          3,
          s,
          [53, 4],
          o,
          [45, 5, 1],
          s,
          [100, 42],
          52,
          s,
          [5, 4],
          53
        ])
      }),
      defaultActions: i({
        idx: u([
          6,
          7,
          8,
          o,
          [10, 16, 1],
          33,
          34,
          39,
          40,
          41,
          45,
          47,
          52,
          53
        ]),
        goto: u([
          9,
          10,
          11,
          o,
          [16, 14, 1],
          12,
          1,
          30,
          13,
          o,
          [4, 4, 1],
          14,
          15,
          8
        ])
      }),
      parseError: function(p, v, h) {
        if (v.recoverable)
          typeof this.trace == "function" && this.trace(p), v.destroy();
        else
          throw typeof this.trace == "function" && this.trace(p), h || (h = this.JisonParserError), new h(p, v);
      },
      parse: function(p) {
        var v = this, h = new Array(128), g = new Array(128), m = new Array(128), w = this.table, x = 0, b = 0;
        this.TERROR;
        var y = this.EOF;
        this.options.errorRecoveryTokenDiscardCount | 0;
        var S = [0, 54], A;
        this.__lexer__ ? A = this.__lexer__ : A = this.__lexer__ = Object.create(this.lexer);
        var _ = {
          parseError: void 0,
          quoteName: void 0,
          lexer: void 0,
          parser: void 0,
          pre_parse: void 0,
          post_parse: void 0,
          pre_lex: void 0,
          post_lex: void 0
        };
        typeof assert != "function" || assert, this.yyGetSharedState = function() {
          return _;
        };
        function E(J, D) {
          for (var Y in D)
            typeof J[Y] > "u" && Object.prototype.hasOwnProperty.call(D, Y) && (J[Y] = D[Y]);
        }
        E(_, this.yy), _.lexer = A, _.parser = this, typeof _.parseError == "function" ? this.parseError = function(D, Y, ie) {
          return ie || (ie = this.JisonParserError), _.parseError.call(this, D, Y, ie);
        } : this.parseError = this.originalParseError, typeof _.quoteName == "function" ? this.quoteName = function(D) {
          return _.quoteName.call(this, D);
        } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(D, Y, ie) {
          var T;
          if (Y) {
            var he;
            (_.post_parse || this.post_parse) && (he = this.constructParseErrorInfo(null, null, null, !1)), _.post_parse && (T = _.post_parse.call(this, _, D, he), typeof T < "u" && (D = T)), this.post_parse && (T = this.post_parse.call(this, _, D, he), typeof T < "u" && (D = T)), he && he.destroy && he.destroy();
          }
          if (this.__reentrant_call_depth > 1)
            return D;
          if (A.cleanupAfterLex && A.cleanupAfterLex(ie), _ && (_.lexer = void 0, _.parser = void 0, A.yy === _ && (A.yy = void 0)), _ = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, h.length = 0, g.length = 0, m.length = 0, x = 0, !ie) {
            for (var q = this.__error_infos.length - 1; q >= 0; q--) {
              var ye = this.__error_infos[q];
              ye && typeof ye.destroy == "function" && ye.destroy();
            }
            this.__error_infos.length = 0;
          }
          return D;
        }, this.constructParseErrorInfo = function(D, Y, ie, T) {
          var he = {
            errStr: D,
            exception: Y,
            text: A.match,
            value: A.yytext,
            token: this.describeSymbol(b) || b,
            token_id: b,
            line: A.yylineno,
            expected: ie,
            recoverable: T,
            state: N,
            action: j,
            new_state: V,
            symbol_stack: h,
            state_stack: g,
            value_stack: m,
            stack_pointer: x,
            yy: _,
            lexer: A,
            parser: this,
            destroy: function() {
              var ye = !!this.recoverable;
              for (var Se in this)
                this.hasOwnProperty(Se) && typeof Se == "object" && (this[Se] = void 0);
              this.recoverable = ye;
            }
          };
          return this.__error_infos.push(he), he;
        };
        function M() {
          var J = A.lex();
          return typeof J != "number" && (J = v.symbols_[J] || J), J || y;
        }
        function C() {
          var J = A.fastLex();
          return typeof J != "number" && (J = v.symbols_[J] || J), J || y;
        }
        var k = M, N, j, L, R, Q = {
          $: !0,
          _$: void 0,
          yy: _
        }, K, te, I, V, X = !1;
        try {
          if (this.__reentrant_call_depth++, A.setInput(p, _), typeof A.canIUse == "function") {
            var H = A.canIUse();
            H.fastLex && typeof C == "function" && (k = C);
          }
          for (m[x] = null, g[x] = 0, h[x] = 0, ++x, this.pre_parse && this.pre_parse.call(this, _), _.pre_parse && _.pre_parse.call(this, _), V = g[x - 1]; ; ) {
            if (N = V, this.defaultActions[N])
              j = 2, V = this.defaultActions[N];
            else if (b || (b = k()), R = w[N] && w[N][b] || S, V = R[1], j = R[0], !j) {
              var $, W = this.describeSymbol(b) || b, ee = this.collect_expected_token_set(N);
              typeof A.yylineno == "number" ? $ = "Parse error on line " + (A.yylineno + 1) + ": " : $ = "Parse error: ", typeof A.showPosition == "function" && ($ += `
` + A.showPosition(79 - 10, 10) + `
`), ee.length ? $ += "Expecting " + ee.join(", ") + ", got unexpected " + W : $ += "Unexpected " + W, K = this.constructParseErrorInfo($, null, ee, !1), L = this.parseError(K.errStr, K, this.JisonParserError), typeof L < "u" && (X = L);
              break;
            }
            switch (j) {
              default:
                if (j instanceof Array) {
                  K = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + N + ", token: " + b, null, null, !1), L = this.parseError(K.errStr, K, this.JisonParserError), typeof L < "u" && (X = L);
                  break;
                }
                K = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, !1), L = this.parseError(K.errStr, K, this.JisonParserError), typeof L < "u" && (X = L);
                break;
              case 1:
                h[x] = b, m[x] = A.yytext, g[x] = V, ++x, b = 0;
                continue;
              case 2:
                if (I = this.productions_[V - 1], te = I[1], L = this.performAction.call(Q, V, x - 1, m), typeof L < "u") {
                  X = L;
                  break;
                }
                x -= te;
                var se = I[0];
                h[x] = se, m[x] = Q.$, V = w[g[x - 1]][se], g[x] = V, ++x;
                continue;
              case 3:
                x !== -2 && (X = !0, x--, typeof m[x] < "u" && (X = m[x]));
                break;
            }
            break;
          }
        } catch (J) {
          if (J instanceof this.JisonParserError)
            throw J;
          if (A && typeof A.JisonLexerError == "function" && J instanceof A.JisonLexerError)
            throw J;
          K = this.constructParseErrorInfo("Parsing aborted due to exception.", J, null, !1), X = !1, L = this.parseError(K.errStr, K, this.JisonParserError), typeof L < "u" && (X = L);
        } finally {
          X = this.cleanupAfterParse(X, !0, !0), this.__reentrant_call_depth--;
        }
        return X;
      }
    };
    c.originalParseError = c.parseError, c.originalQuoteName = c.quoteName;
    var l = function() {
      function d(v, h) {
        Object.defineProperty(this, "name", {
          enumerable: !1,
          writable: !1,
          value: "JisonLexerError"
        }), v == null && (v = "???"), Object.defineProperty(this, "message", {
          enumerable: !1,
          writable: !0,
          value: v
        }), this.hash = h;
        var g;
        if (h && h.exception instanceof Error) {
          var m = h.exception;
          this.message = m.message || v, g = m.stack;
        }
        g || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : g = new Error(v).stack), g && Object.defineProperty(this, "stack", {
          enumerable: !1,
          writable: !1,
          value: g
        });
      }
      typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(d.prototype, Error.prototype) : d.prototype = Object.create(Error.prototype), d.prototype.constructor = d, d.prototype.name = "JisonLexerError";
      var p = {
        EOF: 1,
        ERROR: 2,
        __currentRuleSet__: null,
        __error_infos: [],
        __decompressed: !1,
        done: !1,
        _backtrack: !1,
        _input: "",
        _more: !1,
        _signaled_error_token: !1,
        conditionStack: [],
        match: "",
        matched: "",
        matches: !1,
        yytext: "",
        offset: 0,
        yyleng: 0,
        yylineno: 0,
        yylloc: null,
        constructLexErrorInfo: function(h, g, m) {
          if (h = "" + h, m == null && (m = !(h.indexOf(`
`) > 0 && h.indexOf("^") > 0)), this.yylloc && m) {
            if (typeof this.prettyPrintRange == "function")
              this.prettyPrintRange(this.yylloc), /\n\s*$/.test(h) || (h += `
`), h += `
  Erroneous area:
` + this.prettyPrintRange(this.yylloc);
            else if (typeof this.showPosition == "function") {
              var w = this.showPosition();
              w && (h.length && h[h.length - 1] !== `
` && w[0] !== `
` ? h += `
` + w : h += w);
            }
          }
          var x = {
            errStr: h,
            recoverable: !!g,
            text: this.match,
            token: null,
            line: this.yylineno,
            loc: this.yylloc,
            yy: this.yy,
            lexer: this,
            destroy: function() {
              var y = !!this.recoverable;
              for (var S in this)
                this.hasOwnProperty(S) && typeof S == "object" && (this[S] = void 0);
              this.recoverable = y;
            }
          };
          return this.__error_infos.push(x), x;
        },
        parseError: function(h, g, m) {
          if (m || (m = this.JisonLexerError), this.yy) {
            if (this.yy.parser && typeof this.yy.parser.parseError == "function")
              return this.yy.parser.parseError.call(this, h, g, m) || this.ERROR;
            if (typeof this.yy.parseError == "function")
              return this.yy.parseError.call(this, h, g, m) || this.ERROR;
          }
          throw new m(h, g);
        },
        yyerror: function(h) {
          var g = "";
          this.yylloc && (g = " on line " + (this.yylineno + 1));
          var m = this.constructLexErrorInfo(
            "Lexical error" + g + ": " + h,
            this.options.lexerErrorsAreRecoverable
          ), w = Array.prototype.slice.call(arguments, 1);
          return w.length && (m.extra_error_attributes = w), this.parseError(m.errStr, m, this.JisonLexerError) || this.ERROR;
        },
        cleanupAfterLex: function(h) {
          if (this.setInput("", {}), !h) {
            for (var g = this.__error_infos.length - 1; g >= 0; g--) {
              var m = this.__error_infos[g];
              m && typeof m.destroy == "function" && m.destroy();
            }
            this.__error_infos.length = 0;
          }
          return this;
        },
        clear: function() {
          this.yytext = "", this.yyleng = 0, this.match = "", this.matches = !1, this._more = !1, this._backtrack = !1;
          var h = this.yylloc ? this.yylloc.last_column : 0;
          this.yylloc = {
            first_line: this.yylineno + 1,
            first_column: h,
            last_line: this.yylineno + 1,
            last_column: h,
            range: [this.offset, this.offset]
          };
        },
        setInput: function(h, g) {
          if (this.yy = g || this.yy || {}, !this.__decompressed) {
            for (var m = this.rules, w = 0, x = m.length; w < x; w++) {
              var b = m[w];
              typeof b == "number" && (m[w] = m[b]);
            }
            var y = this.conditions;
            for (var S in y) {
              for (var A = y[S], _ = A.rules, x = _.length, E = new Array(x + 1), M = new Array(x + 1), w = 0; w < x; w++) {
                var C = _[w], b = m[C];
                E[w + 1] = b, M[w + 1] = C;
              }
              A.rules = M, A.__rule_regexes = E, A.__rule_count = x;
            }
            this.__decompressed = !0;
          }
          return this._input = h || "", this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = "", this.conditionStack = ["INITIAL"], this.__currentRuleSet__ = null, this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
            range: [0, 0]
          }, this.offset = 0, this;
        },
        editRemainingInput: function(h, g) {
          var m = h.call(this, this._input, g);
          return typeof m != "string" ? m && (this._input = "" + m) : this._input = m, this;
        },
        input: function() {
          if (!this._input)
            return null;
          var h = this._input[0];
          this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
          var g = 1, m = !1;
          if (h === `
`)
            m = !0;
          else if (h === "\r") {
            m = !0;
            var w = this._input[1];
            w === `
` && (g++, h += w, this.yytext += w, this.yyleng++, this.offset++, this.match += w, this.matched += w, this.yylloc.range[1]++);
          }
          return m ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(g), h;
        },
        unput: function(h) {
          var g = h.length, m = h.split(/(?:\r\n?|\n)/g);
          if (this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.yyleng = this.yytext.length, this.offset -= g, this.match = this.match.substr(0, this.match.length - g), this.matched = this.matched.substr(0, this.matched.length - g), m.length > 1) {
            this.yylineno -= m.length - 1, this.yylloc.last_line = this.yylineno + 1;
            var w = this.match, x = w.split(/(?:\r\n?|\n)/g);
            x.length === 1 && (w = this.matched, x = w.split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = x[x.length - 1].length;
          } else
            this.yylloc.last_column -= g;
          return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this;
        },
        more: function() {
          return this._more = !0, this;
        },
        reject: function() {
          if (this.options.backtrack_lexer)
            this._backtrack = !0;
          else {
            var h = "";
            this.yylloc && (h = " on line " + (this.yylineno + 1));
            var g = this.constructLexErrorInfo(
              "Lexical error" + h + ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).",
              !1
            );
            this._signaled_error_token = this.parseError(g.errStr, g, this.JisonLexerError) || this.ERROR;
          }
          return this;
        },
        less: function(h) {
          return this.unput(this.match.slice(h));
        },
        pastInput: function(h, g) {
          var m = this.matched.substring(0, this.matched.length - this.match.length);
          h < 0 ? h = m.length : h || (h = 20), g < 0 ? g = m.length : g || (g = 1), m = m.substr(-h * 2 - 2);
          var w = m.replace(/\r\n|\r/g, `
`).split(`
`);
          return w = w.slice(-g), m = w.join(`
`), m.length > h && (m = "..." + m.substr(-h)), m;
        },
        upcomingInput: function(h, g) {
          var m = this.match;
          h < 0 ? h = m.length + this._input.length : h || (h = 20), g < 0 ? g = h : g || (g = 1), m.length < h * 2 + 2 && (m += this._input.substring(0, h * 2 + 2));
          var w = m.replace(/\r\n|\r/g, `
`).split(`
`);
          return w = w.slice(0, g), m = w.join(`
`), m.length > h && (m = m.substring(0, h) + "..."), m;
        },
        showPosition: function(h, g) {
          var m = this.pastInput(h).replace(/\s/g, " "), w = new Array(m.length + 1).join("-");
          return m + this.upcomingInput(g).replace(/\s/g, " ") + `
` + w + "^";
        },
        deriveLocationInfo: function(h, g, m, w) {
          var x = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
            range: [0, 0]
          };
          return h && (x.first_line = h.first_line | 0, x.last_line = h.last_line | 0, x.first_column = h.first_column | 0, x.last_column = h.last_column | 0, h.range && (x.range[0] = h.range[0] | 0, x.range[1] = h.range[1] | 0)), (x.first_line <= 0 || x.last_line < x.first_line) && (x.first_line <= 0 && g && (x.first_line = g.last_line | 0, x.first_column = g.last_column | 0, g.range && (x.range[0] = h.range[1] | 0)), (x.last_line <= 0 || x.last_line < x.first_line) && m && (x.last_line = m.first_line | 0, x.last_column = m.first_column | 0, m.range && (x.range[1] = h.range[0] | 0)), x.first_line <= 0 && w && (x.last_line <= 0 || w.last_line <= x.last_line) && (x.first_line = w.first_line | 0, x.first_column = w.first_column | 0, w.range && (x.range[0] = w.range[0] | 0)), x.last_line <= 0 && w && (x.first_line <= 0 || w.first_line >= x.first_line) && (x.last_line = w.last_line | 0, x.last_column = w.last_column | 0, w.range && (x.range[1] = w.range[1] | 0))), x.last_line <= 0 && (x.first_line <= 0 ? (x.first_line = this.yylloc.first_line, x.last_line = this.yylloc.last_line, x.first_column = this.yylloc.first_column, x.last_column = this.yylloc.last_column, x.range[0] = this.yylloc.range[0], x.range[1] = this.yylloc.range[1]) : (x.last_line = this.yylloc.last_line, x.last_column = this.yylloc.last_column, x.range[1] = this.yylloc.range[1])), x.first_line <= 0 && (x.first_line = x.last_line, x.first_column = 0, x.range[1] = x.range[0]), x.first_column < 0 && (x.first_column = 0), x.last_column < 0 && (x.last_column = x.first_column > 0 ? x.first_column : 80), x;
        },
        prettyPrintRange: function(h, g, m) {
          h = this.deriveLocationInfo(h, g, m);
          const w = 3, x = 1, b = 2;
          var y = this.matched + this._input, S = y.split(`
`), A = Math.max(1, g ? g.first_line : h.first_line - w), _ = Math.max(1, m ? m.last_line : h.last_line + x), E = 1 + Math.log10(_ | 1) | 0, M = new Array(E).join(" "), C = [], k = S.slice(A - 1, _ + 1).map(function(Q, K) {
            var te = K + A, I = (M + te).substr(-E), V = I + ": " + Q, X = new Array(E + 1).join("^"), H = 2 + 1, $ = 0;
            if (te === h.first_line ? (H += h.first_column, $ = Math.max(
              2,
              (te === h.last_line ? h.last_column : Q.length) - h.first_column + 1
            )) : te === h.last_line ? $ = Math.max(2, h.last_column + 1) : te > h.first_line && te < h.last_line && ($ = Math.max(2, Q.length + 1)), $) {
              var W = new Array(H).join("."), ee = new Array($).join("^");
              V += `
` + X + W + ee, Q.trim().length > 0 && C.push(K);
            }
            return V = V.replace(/\t/g, " "), V;
          });
          if (C.length > 2 * b) {
            var N = C[b - 1] + 1, j = C[C.length - b] - 1, L = new Array(E + 1).join(" ") + "  (...continued...)";
            L += `
` + new Array(E + 1).join("-") + "  (---------------)", k.splice(N, j - N + 1, L);
          }
          return k.join(`
`);
        },
        describeYYLLOC: function(h, g) {
          var m = h.first_line, w = h.last_line, x = h.first_column, b = h.last_column, y = w - m, S = b - x, A;
          if (y === 0 ? (A = "line " + m + ", ", S <= 1 ? A += "column " + x : A += "columns " + x + " .. " + b) : A = "lines " + m + "(column " + x + ") .. " + w + "(column " + b + ")", h.range && g) {
            var _ = h.range[0], E = h.range[1] - 1;
            E <= _ ? A += " {String Offset: " + _ + "}" : A += " {String Offset range: " + _ + " .. " + E + "}";
          }
          return A;
        },
        test_match: function(h, g) {
          var m, w, x, b, y;
          if (this.options.backtrack_lexer && (x = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.yylloc.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column,
              range: this.yylloc.range.slice(0)
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          }), b = h[0], y = b.length, w = b.split(/(?:\r\n?|\n)/g), w.length > 1 ? (this.yylineno += w.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = w[w.length - 1].length) : this.yylloc.last_column += y, this.yytext += b, this.match += b, this.matched += b, this.matches = h, this.yyleng = this.yytext.length, this.yylloc.range[1] += y, this.offset += y, this._more = !1, this._backtrack = !1, this._input = this._input.slice(y), m = this.performAction.call(
            this,
            this.yy,
            g,
            this.conditionStack[this.conditionStack.length - 1]
          ), this.done && this._input && (this.done = !1), m)
            return m;
          if (this._backtrack) {
            for (var S in x)
              this[S] = x[S];
            return this.__currentRuleSet__ = null, !1;
          } else if (this._signaled_error_token)
            return m = this._signaled_error_token, this._signaled_error_token = !1, m;
          return !1;
        },
        next: function() {
          if (this.done)
            return this.clear(), this.EOF;
          this._input || (this.done = !0);
          var h, g, m, w;
          this._more || this.clear();
          var x = this.__currentRuleSet__;
          if (!x && (x = this.__currentRuleSet__ = this._currentRules(), !x || !x.rules)) {
            var b = "";
            this.options.trackPosition && (b = " on line " + (this.yylineno + 1));
            var y = this.constructLexErrorInfo(
              "Internal lexer engine error" + b + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!',
              !1
            );
            return this.parseError(y.errStr, y, this.JisonLexerError) || this.ERROR;
          }
          for (var S = x.rules, A = x.__rule_regexes, _ = x.__rule_count, E = 1; E <= _; E++)
            if (m = this._input.match(A[E]), m && (!g || m[0].length > g[0].length)) {
              if (g = m, w = E, this.options.backtrack_lexer) {
                if (h = this.test_match(m, S[E]), h !== !1)
                  return h;
                if (this._backtrack) {
                  g = void 0;
                  continue;
                } else
                  return !1;
              } else if (!this.options.flex)
                break;
            }
          if (g)
            return h = this.test_match(g, S[w]), h !== !1 ? h : !1;
          if (this._input) {
            var b = "";
            this.options.trackPosition && (b = " on line " + (this.yylineno + 1));
            var y = this.constructLexErrorInfo(
              "Lexical error" + b + ": Unrecognized text.",
              this.options.lexerErrorsAreRecoverable
            ), M = this._input, C = this.topState(), k = this.conditionStack.length;
            return h = this.parseError(y.errStr, y, this.JisonLexerError) || this.ERROR, h === this.ERROR && !this.matches && M === this._input && C === this.topState() && k === this.conditionStack.length && this.input(), h;
          } else
            return this.done = !0, this.clear(), this.EOF;
        },
        lex: function() {
          var h;
          for (typeof this.pre_lex == "function" && (h = this.pre_lex.call(this, 0)), typeof this.options.pre_lex == "function" && (h = this.options.pre_lex.call(this, h) || h), this.yy && typeof this.yy.pre_lex == "function" && (h = this.yy.pre_lex.call(this, h) || h); !h; )
            h = this.next();
          return this.yy && typeof this.yy.post_lex == "function" && (h = this.yy.post_lex.call(this, h) || h), typeof this.options.post_lex == "function" && (h = this.options.post_lex.call(this, h) || h), typeof this.post_lex == "function" && (h = this.post_lex.call(this, h) || h), h;
        },
        fastLex: function() {
          for (var h; !h; )
            h = this.next();
          return h;
        },
        canIUse: function() {
          var h = {
            fastLex: !(typeof this.pre_lex == "function" || typeof this.options.pre_lex == "function" || this.yy && typeof this.yy.pre_lex == "function" || this.yy && typeof this.yy.post_lex == "function" || typeof this.options.post_lex == "function" || typeof this.post_lex == "function") && typeof this.fastLex == "function"
          };
          return h;
        },
        begin: function(h) {
          return this.pushState(h);
        },
        pushState: function(h) {
          return this.conditionStack.push(h), this.__currentRuleSet__ = null, this;
        },
        popState: function() {
          var h = this.conditionStack.length - 1;
          return h > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0];
        },
        topState: function(h) {
          return h = this.conditionStack.length - 1 - Math.abs(h || 0), h >= 0 ? this.conditionStack[h] : "INITIAL";
        },
        _currentRules: function() {
          return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]] : this.conditions.INITIAL;
        },
        stateStackSize: function() {
          return this.conditionStack.length;
        },
        options: {
          trackPosition: !0
        },
        JisonLexerError: d,
        performAction: function(h, g, m) {
          switch (g) {
            case 1:
              break;
            default:
              return this.simpleCaseActionClusters[g];
          }
        },
        simpleCaseActionClusters: {
          0: 13,
          2: 5,
          3: 6,
          4: 3,
          5: 4,
          6: 15,
          7: 15,
          8: 15,
          9: 15,
          10: 15,
          11: 15,
          12: 16,
          13: 16,
          14: 16,
          15: 16,
          16: 17,
          17: 17,
          18: 18,
          19: 18,
          20: 19,
          21: 19,
          22: 19,
          23: 20,
          24: 21,
          25: 22,
          26: 23,
          27: 25,
          28: 24,
          29: 26,
          30: 27,
          31: 28,
          32: 11,
          33: 9,
          34: 12,
          35: 10,
          36: 7,
          37: 8,
          38: 14,
          39: 1
        },
        rules: [
          /^(?:(--[\d\-A-Za-z]*))/,
          /^(?:\s+)/,
          /^(?:\*)/,
          /^(?:\/)/,
          /^(?:\+)/,
          /^(?:-)/,
          /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)%)/,
          /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
          /^(?:(calc))/,
          /^(?:(var))/,
          /^(?:([a-z]+))/,
          /^(?:\()/,
          /^(?:\))/,
          /^(?:,)/,
          /^(?:$)/
        ],
        conditions: {
          INITIAL: {
            rules: [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
              31,
              32,
              33,
              34,
              35,
              36,
              37,
              38,
              39
            ],
            inclusive: !0
          }
        }
      };
      return p;
    }();
    c.lexer = l;
    function f() {
      this.yy = {};
    }
    return f.prototype = c, c.Parser = f, new f();
  }();
  typeof yB < "u" && (e.parser = t, e.Parser = t.Parser, e.parse = function() {
    return t.parse.apply(t, arguments);
  });
})(iw);
var Fa = {}, Xl = { exports: {} }, kc = {
  px: {
    px: 1,
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    in: 96,
    pt: 96 / 72,
    pc: 16
  },
  cm: {
    px: 2.54 / 96,
    cm: 1,
    mm: 0.1,
    in: 2.54,
    pt: 2.54 / 72,
    pc: 2.54 / 6
  },
  mm: {
    px: 25.4 / 96,
    cm: 10,
    mm: 1,
    in: 25.4,
    pt: 25.4 / 72,
    pc: 25.4 / 6
  },
  in: {
    px: 1 / 96,
    cm: 1 / 2.54,
    mm: 1 / 25.4,
    in: 1,
    pt: 1 / 72,
    pc: 1 / 6
  },
  pt: {
    px: 0.75,
    cm: 72 / 2.54,
    mm: 72 / 25.4,
    in: 72,
    pt: 1,
    pc: 12
  },
  pc: {
    px: 6 / 96,
    cm: 6 / 2.54,
    mm: 6 / 25.4,
    in: 6,
    pt: 6 / 72,
    pc: 1
  },
  deg: {
    deg: 1,
    grad: 0.9,
    rad: 180 / Math.PI,
    turn: 360
  },
  grad: {
    deg: 400 / 360,
    grad: 1,
    rad: 200 / Math.PI,
    turn: 400
  },
  rad: {
    deg: Math.PI / 180,
    grad: Math.PI / 200,
    rad: 1,
    turn: Math.PI * 2
  },
  turn: {
    deg: 1 / 360,
    grad: 1 / 400,
    rad: 0.5 / Math.PI,
    turn: 1
  },
  s: {
    s: 1,
    ms: 1 / 1e3
  },
  ms: {
    s: 1e3,
    ms: 1
  },
  Hz: {
    Hz: 1,
    kHz: 1e3
  },
  kHz: {
    Hz: 1 / 1e3,
    kHz: 1
  },
  dpi: {
    dpi: 1,
    dpcm: 1 / 2.54,
    dppx: 1 / 96
  },
  dpcm: {
    dpi: 2.54,
    dpcm: 1,
    dppx: 2.54 / 96
  },
  dppx: {
    dpi: 96,
    dpcm: 96 / 2.54,
    dppx: 1
  }
}, mB = function(e, t, r, n) {
  if (!kc.hasOwnProperty(r))
    throw new Error("Cannot convert to " + r);
  if (!kc[r].hasOwnProperty(t))
    throw new Error("Cannot convert from " + t + " to " + r);
  var i = kc[r][t] * e;
  return n !== !1 ? (n = Math.pow(10, parseInt(n) || 5), Math.round(i * n) / n) : i;
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = mB, n = i(r);
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function a(s, u, c) {
    switch (s.type) {
      case "LengthValue":
      case "AngleValue":
      case "TimeValue":
      case "FrequencyValue":
      case "ResolutionValue":
        return o(s, u, c);
      default:
        return { left: s, right: u };
    }
  }
  function o(s, u, c) {
    return u.type === s.type && (u = {
      type: s.type,
      value: (0, n.default)(u.value, u.unit, s.unit, c),
      unit: s.unit
    }), { left: s, right: u };
  }
  t.default = a, e.exports = t.default;
})(Xl, Xl.exports);
Object.defineProperty(Fa, "__esModule", {
  value: !0
});
Fa.flip = Zl;
var bB = Xl.exports, Nc = xB(bB);
function xB(e) {
  return e && e.__esModule ? e : { default: e };
}
function gt(e, t) {
  return e.type === "MathExpression" ? OB(e, t) : e.type === "Calc" ? gt(e.value, t) : e;
}
function yg(e, t) {
  return e.type === t.type && e.value === t.value;
}
function At(e) {
  switch (e) {
    case "LengthValue":
    case "AngleValue":
    case "TimeValue":
    case "FrequencyValue":
    case "ResolutionValue":
    case "EmValue":
    case "ExValue":
    case "ChValue":
    case "RemValue":
    case "VhValue":
    case "VwValue":
    case "VminValue":
    case "VmaxValue":
    case "PercentageValue":
    case "Value":
      return !0;
  }
  return !1;
}
function wB(e, t) {
  var r = (0, Nc.default)(e.left, e.right, t), n = gt(r.left, t), i = gt(r.right, t);
  return n.type === "MathExpression" && i.type === "MathExpression" && (n.operator === "/" && i.operator === "*" || n.operator === "-" && i.operator === "+" || n.operator === "*" && i.operator === "/" || n.operator === "+" && i.operator === "-") && (yg(n.right, i.right) ? r = (0, Nc.default)(n.left, i.left, t) : yg(n.right, i.left) && (r = (0, Nc.default)(n.left, i.right, t)), n = gt(r.left, t), i = gt(r.right, t)), e.left = n, e.right = i, e;
}
function Zl(e) {
  return e === "+" ? "-" : "+";
}
function Jl(e) {
  return At(e.type) ? e.value = -e.value : e.type == "MathExpression" && (e.left = Jl(e.left), e.right = Jl(e.right)), e;
}
function SB(e, t) {
  var r = e, n = r.left, i = r.right, a = r.operator;
  if (n.type === "CssVariable" || i.type === "CssVariable")
    return e;
  if (i.value === 0)
    return n;
  if (n.value === 0 && a === "+")
    return i;
  if (n.value === 0 && a === "-")
    return Jl(i);
  if (n.type === i.type && At(n.type) && (e = Object.assign({}, n), a === "+" ? e.value = n.value + i.value : e.value = n.value - i.value), At(n.type) && (i.operator === "+" || i.operator === "-") && i.type === "MathExpression") {
    if (n.type === i.left.type)
      return e = Object.assign({}, e), e.left = gt({
        type: "MathExpression",
        operator: a,
        left: n,
        right: i.left
      }, t), e.right = i.right, e.operator = a === "-" ? Zl(i.operator) : i.operator, gt(e, t);
    if (n.type === i.right.type)
      return e = Object.assign({}, e), e.left = gt({
        type: "MathExpression",
        operator: a === "-" ? Zl(i.operator) : i.operator,
        left: n,
        right: i.right
      }, t), e.right = i.left, gt(e, t);
  }
  if (n.type === "MathExpression" && (n.operator === "+" || n.operator === "-") && At(i.type)) {
    if (i.type === n.left.type)
      return e = Object.assign({}, n), e.left = gt({
        type: "MathExpression",
        operator: a,
        left: n.left,
        right: i
      }, t), gt(e, t);
    if (i.type === n.right.type)
      return e = Object.assign({}, n), n.operator === "-" ? (e.right = gt({
        type: "MathExpression",
        operator: a === "-" ? "+" : "-",
        left: i,
        right: n.right
      }, t), e.operator = a === "-" ? "-" : "+") : e.right = gt({
        type: "MathExpression",
        operator: a,
        left: n.right,
        right: i
      }, t), e.right.value < 0 && (e.right.value *= -1, e.operator = e.operator === "-" ? "+" : "-"), gt(e, t);
  }
  return e;
}
function AB(e, t) {
  if (!At(e.right.type))
    return e;
  if (e.right.type !== "Value")
    throw new Error('Cannot divide by "' + e.right.unit + '", number expected');
  if (e.right.value === 0)
    throw new Error("Cannot divide by zero");
  return e.left.type === "MathExpression" ? At(e.left.left.type) && At(e.left.right.type) ? (e.left.left.value /= e.right.value, e.left.right.value /= e.right.value, gt(e.left, t)) : e : At(e.left.type) ? (e.left.value /= e.right.value, e.left) : e;
}
function _B(e) {
  if (e.left.type === "MathExpression" && e.right.type === "Value") {
    if (At(e.left.left.type) && At(e.left.right.type))
      return e.left.left.value *= e.right.value, e.left.right.value *= e.right.value, e.left;
  } else {
    if (At(e.left.type) && e.right.type === "Value")
      return e.left.value *= e.right.value, e.left;
    if (e.left.type === "Value" && e.right.type === "MathExpression") {
      if (At(e.right.left.type) && At(e.right.right.type))
        return e.right.left.value *= e.left.value, e.right.right.value *= e.left.value, e.right;
    } else if (e.left.type === "Value" && At(e.right.type))
      return e.right.value *= e.left.value, e.right;
  }
  return e;
}
function OB(e, t) {
  switch (e = wB(e, t), e.operator) {
    case "+":
    case "-":
      return SB(e, t);
    case "/":
      return AB(e, t);
    case "*":
      return _B(e);
  }
  return e;
}
Fa.default = gt;
var Ql = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(o, s, u) {
    var c = a(s, u);
    return s.type === "MathExpression" && (c = o + "(" + c + ")"), c;
  };
  var r = Fa, n = {
    "*": 0,
    "/": 0,
    "+": 1,
    "-": 1
  };
  function i(o, s) {
    if (s !== !1) {
      var u = Math.pow(10, s);
      return Math.round(o * u) / u;
    }
    return o;
  }
  function a(o, s) {
    switch (o.type) {
      case "MathExpression": {
        var u = o.left, c = o.right, l = o.operator, f = "";
        return u.type === "MathExpression" && n[l] < n[u.operator] ? f += "(" + a(u, s) + ")" : f += a(u, s), f += " " + o.operator + " ", c.type === "MathExpression" && n[l] < n[c.operator] ? f += "(" + a(c, s) + ")" : (c.type === "MathExpression" && l === "-" && ["+", "-"].includes(c.operator) && (c.operator = (0, r.flip)(c.operator)), f += a(c, s)), f;
      }
      case "Value":
        return i(o.value, s);
      case "CssVariable":
        return o.fallback ? "var(" + o.value + ", " + a(o.fallback, s) + ")" : "var(" + o.value + ")";
      case "Calc":
        return o.prefix ? "-" + o.prefix + "-calc(" + a(o.value, s) + ")" : "calc(" + a(o.value, s) + ")";
      default:
        return i(o.value, s) + o.unit;
    }
  }
  e.exports = t.default;
})(Ql, Ql.exports);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = gB, n = c(r), i = iw, a = Fa, o = c(a), s = Ql.exports, u = c(s);
  function c(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var l = /((?:\-[a-z]+\-)?calc)/;
  t.default = function(f) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    return (0, n.default)(f).walk(function(p) {
      if (!(p.type !== "function" || !l.test(p.value))) {
        var v = n.default.stringify(p.nodes);
        if (!(v.indexOf("constant") >= 0 || v.indexOf("env") >= 0)) {
          var h = i.parser.parse(v), g = (0, o.default)(h, d);
          p.type = "word", p.value = (0, u.default)(p.value, g, d);
        }
      }
    }, !0).toString();
  }, e.exports = t.default;
})(Kl, Kl.exports);
const Rc = /* @__PURE__ */ mA(Kl.exports);
function mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), !0).forEach(function(n) {
      EB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EB(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xg(e) {
  return MB(e) || CB(e) || PB(e) || TB();
}
function TB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PB(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return ef(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ef(e, t);
  }
}
function CB(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function MB(e) {
  if (Array.isArray(e))
    return ef(e);
}
function ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var zn = {
  widthCache: {},
  cacheCount: 0
}, kB = 2e3, NB = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, RB = ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "lineHeight", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"], wg = "recharts_measurement_span";
function IB(e, t) {
  return RB.indexOf(e) >= 0 && t === +t ? "".concat(t, "px") : t;
}
function $B(e) {
  var t = e.split(""), r = t.reduce(function(n, i) {
    return i === i.toUpperCase() ? [].concat(xg(n), ["-", i.toLowerCase()]) : [].concat(xg(n), [i]);
  }, []);
  return r.join("");
}
var LB = function(t) {
  return Object.keys(t).reduce(function(r, n) {
    return "".concat(r).concat($B(n), ":").concat(IB(n, t[n]), ";");
  }, "");
}, wn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Xr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = "".concat(t), i = LB(r), a = "".concat(n, "-").concat(i);
  if (zn.widthCache[a])
    return zn.widthCache[a];
  try {
    var o = document.getElementById(wg);
    o || (o = document.createElement("span"), o.setAttribute("id", wg), o.setAttribute("aria-hidden", "true"), document.body.appendChild(o));
    var s = bg(bg({}, NB), r);
    Object.keys(s).map(function(l) {
      return o.style[l] = s[l], l;
    }), o.textContent = n;
    var u = o.getBoundingClientRect(), c = {
      width: u.width,
      height: u.height
    };
    return zn.widthCache[a] = c, ++zn.cacheCount > kB && (zn.cacheCount = 0, zn.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, jB = function(t) {
  var r = t.ownerDocument.documentElement, n = {
    top: 0,
    left: 0
  };
  return typeof t.getBoundingClientRect < "u" && (n = t.getBoundingClientRect()), {
    top: n.top + window.pageYOffset - r.clientTop,
    left: n.left + window.pageXOffset - r.clientLeft
  };
}, DB = function(t, r) {
  return {
    chartX: Math.round(t.pageX - r.left),
    chartY: Math.round(t.pageY - r.top)
  };
};
function ko(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ko = function(r) {
    return typeof r;
  } : ko = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ko(e);
}
function FB(e, t) {
  if (e == null)
    return {};
  var r = VB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function VB(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function BB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function UB(e, t, r) {
  return t && Sg(e.prototype, t), r && Sg(e, r), e;
}
function zB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && tf(e, t);
}
function tf(e, t) {
  return tf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, tf(e, t);
}
function WB(e) {
  var t = GB();
  return function() {
    var n = xs(e), i;
    if (t) {
      var a = xs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return qB(this, i);
  };
}
function qB(e, t) {
  return t && (ko(t) === "object" || typeof t == "function") ? t : HB(e);
}
function HB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function GB() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function Ag(e, t) {
  return ZB(e) || XB(e, t) || KB(e, t) || YB();
}
function YB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KB(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return _g(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _g(e, t);
  }
}
function _g(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function XB(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function ZB(e) {
  if (Array.isArray(e))
    return e;
}
function Og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Og(Object(r), !0).forEach(function(n) {
      JB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JB(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var aw = /[ \f\n\r\t\v\u2028\u2029]+/, ow = function(t) {
  try {
    var r = [];
    le(t.children) || (t.breakAll ? r = t.children.toString().split("") : r = t.children.toString().split(aw));
    var n = r.map(function(a) {
      return {
        word: a,
        width: wn(a, t.style).width
      };
    }), i = t.breakAll ? 0 : wn("\xA0", t.style).width;
    return {
      wordsWithComputedWidth: n,
      spaceWidth: i
    };
  } catch {
    return null;
  }
}, QB = function(t, r, n, i, a) {
  var o = re(t.maxLines), s = t.children, u = function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return C.reduce(function(k, N) {
      var j = N.word, L = N.width, R = k[k.length - 1];
      if (R && (i == null || a || R.width + L + n < i))
        R.words.push(j), R.width += L + n;
      else {
        var Q = {
          words: [j],
          width: L
        };
        k.push(Q);
      }
      return k;
    }, []);
  }, c = u(r), l = function(C) {
    return C.reduce(function(k, N) {
      return k.width > N.width ? k : N;
    });
  };
  if (!o)
    return c;
  for (var f = "\u2026", d = function(C) {
    var k = s.slice(0, C), N = ow(Eg(Eg({}, t), {}, {
      children: k + f
    })).wordsWithComputedWidth, j = u(N), L = j.length > t.maxLines || l(j).width > i;
    return [L, j];
  }, p = 0, v = s.length - 1, h = 0, g; p <= v && h <= s.length - 1; ) {
    var m = Math.floor((p + v) / 2), w = m - 1, x = d(w), b = Ag(x, 2), y = b[0], S = b[1], A = d(m), _ = Ag(A, 1), E = _[0];
    if (!y && !E && (p = m + 1), y && E && (v = m - 1), !y && E) {
      g = S;
      break;
    }
    h++;
  }
  return g || c;
}, Tg = function(t) {
  var r = le(t) ? [] : t.toString().split(aw);
  return [{
    words: r
  }];
}, eU = function(t, r) {
  if ((t.width || t.scaleToFit) && !Xr.isSsr) {
    var n, i;
    if (r) {
      var a = ow(t);
      if (a) {
        var o = a.wordsWithComputedWidth, s = a.spaceWidth;
        n = o, i = s;
      } else
        return Tg(t.children);
      return QB(t, n, i, t.width, t.scaleToFit);
    }
  }
  return Tg(t.children);
}, tn = /* @__PURE__ */ function(e) {
  zB(r, e);
  var t = WB(r);
  function r() {
    var n;
    BB(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.state = {}, n;
  }
  return UB(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.dx, o = i.dy, s = i.textAnchor, u = i.verticalAnchor, c = i.scaleToFit, l = i.angle, f = i.lineHeight, d = i.capHeight, p = i.className, v = i.breakAll, h = FB(i, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]), g = this.state.wordsByLines;
      if (!nt(h.x) || !nt(h.y))
        return null;
      var m = h.x + (re(a) ? a : 0), w = h.y + (re(o) ? o : 0), x;
      switch (u) {
        case "start":
          x = Rc("calc(".concat(d, ")"));
          break;
        case "middle":
          x = Rc("calc(".concat((g.length - 1) / 2, " * -").concat(f, " + (").concat(d, " / 2))"));
          break;
        default:
          x = Rc("calc(".concat(g.length - 1, " * -").concat(f, ")"));
          break;
      }
      var b = [];
      if (c) {
        var y = g[0].width, S = this.props.width;
        b.push("scale(".concat((re(S) ? S / y : 1) / y, ")"));
      }
      return l && b.push("rotate(".concat(l, ", ").concat(m, ", ").concat(w, ")")), b.length && (h.transform = b.join(" ")), /* @__PURE__ */ O("text", {
        ...ge(h, !0),
        x: m,
        y: w,
        className: We("recharts-text", p),
        textAnchor: s,
        children: g.map(function(A, _) {
          return /* @__PURE__ */ O("tspan", {
            x: m,
            dy: _ === 0 ? x : f,
            children: A.words.join(v ? "" : " ")
          }, _);
        })
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, a) {
      if (i.width !== a.prevWidth || i.scaleToFit !== a.prevScaleToFit || i.children !== a.prevChildren || i.style !== a.prevStyle || i.breakAll !== a.prevBreakAll) {
        var o = i.children !== a.prevChildren || i.style !== a.prevStyle || i.breakAll !== a.prevBreakAll;
        return {
          prevWidth: i.width,
          prevScaleToFit: i.scaleToFit,
          prevChildren: i.children,
          prevStyle: i.style,
          wordsByLines: eU(i, o)
        };
      }
      return null;
    }
  }]), r;
}(Hf);
tn.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: "1em",
  capHeight: "0.71em",
  scaleToFit: !1,
  textAnchor: "start",
  verticalAnchor: "end"
};
var sw = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pg;
function tU() {
  if (Pg)
    return Me;
  Pg = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (y = y.type, y) {
            case u:
            case c:
            case n:
            case a:
            case i:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case l:
                case v:
                case p:
                case o:
                  return y;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function b(y) {
    return x(y) === c;
  }
  return Me.AsyncMode = u, Me.ConcurrentMode = c, Me.ContextConsumer = s, Me.ContextProvider = o, Me.Element = t, Me.ForwardRef = l, Me.Fragment = n, Me.Lazy = v, Me.Memo = p, Me.Portal = r, Me.Profiler = a, Me.StrictMode = i, Me.Suspense = f, Me.isAsyncMode = function(y) {
    return b(y) || x(y) === u;
  }, Me.isConcurrentMode = b, Me.isContextConsumer = function(y) {
    return x(y) === s;
  }, Me.isContextProvider = function(y) {
    return x(y) === o;
  }, Me.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Me.isForwardRef = function(y) {
    return x(y) === l;
  }, Me.isFragment = function(y) {
    return x(y) === n;
  }, Me.isLazy = function(y) {
    return x(y) === v;
  }, Me.isMemo = function(y) {
    return x(y) === p;
  }, Me.isPortal = function(y) {
    return x(y) === r;
  }, Me.isProfiler = function(y) {
    return x(y) === a;
  }, Me.isStrictMode = function(y) {
    return x(y) === i;
  }, Me.isSuspense = function(y) {
    return x(y) === f;
  }, Me.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === c || y === a || y === i || y === f || y === d || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === p || y.$$typeof === o || y.$$typeof === s || y.$$typeof === l || y.$$typeof === g || y.$$typeof === m || y.$$typeof === w || y.$$typeof === h);
  }, Me.typeOf = x, Me;
}
var ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cg;
function rU() {
  return Cg || (Cg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === c || T === a || T === i || T === f || T === d || typeof T == "object" && T !== null && (T.$$typeof === v || T.$$typeof === p || T.$$typeof === o || T.$$typeof === s || T.$$typeof === l || T.$$typeof === g || T.$$typeof === m || T.$$typeof === w || T.$$typeof === h);
    }
    function b(T) {
      if (typeof T == "object" && T !== null) {
        var he = T.$$typeof;
        switch (he) {
          case t:
            var q = T.type;
            switch (q) {
              case u:
              case c:
              case n:
              case a:
              case i:
              case f:
                return q;
              default:
                var ye = q && q.$$typeof;
                switch (ye) {
                  case s:
                  case l:
                  case v:
                  case p:
                  case o:
                    return ye;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var y = u, S = c, A = s, _ = o, E = t, M = l, C = n, k = v, N = p, j = r, L = a, R = i, Q = f, K = !1;
    function te(T) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(T) || b(T) === u;
    }
    function I(T) {
      return b(T) === c;
    }
    function V(T) {
      return b(T) === s;
    }
    function X(T) {
      return b(T) === o;
    }
    function H(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function $(T) {
      return b(T) === l;
    }
    function W(T) {
      return b(T) === n;
    }
    function ee(T) {
      return b(T) === v;
    }
    function se(T) {
      return b(T) === p;
    }
    function J(T) {
      return b(T) === r;
    }
    function D(T) {
      return b(T) === a;
    }
    function Y(T) {
      return b(T) === i;
    }
    function ie(T) {
      return b(T) === f;
    }
    ke.AsyncMode = y, ke.ConcurrentMode = S, ke.ContextConsumer = A, ke.ContextProvider = _, ke.Element = E, ke.ForwardRef = M, ke.Fragment = C, ke.Lazy = k, ke.Memo = N, ke.Portal = j, ke.Profiler = L, ke.StrictMode = R, ke.Suspense = Q, ke.isAsyncMode = te, ke.isConcurrentMode = I, ke.isContextConsumer = V, ke.isContextProvider = X, ke.isElement = H, ke.isForwardRef = $, ke.isFragment = W, ke.isLazy = ee, ke.isMemo = se, ke.isPortal = J, ke.isProfiler = D, ke.isStrictMode = Y, ke.isSuspense = ie, ke.isValidElementType = x, ke.typeOf = b;
  }()), ke;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = tU() : e.exports = rU();
})(sw);
function Qn(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Mg(e, t) {
  if (e == null)
    return {};
  var r = nU(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function nU(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var kg = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart"
}, Zr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Ng = null, Ic = null, mh = function e(t) {
  if (t === Ng && Re(Ic))
    return Ic;
  var r = [];
  return _n.forEach(t, function(n) {
    le(n) || (sw.exports.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Ic = r, Ng = t, r;
}, dr = function(t, r) {
  var n = [], i = [];
  return Re(r) ? i = r.map(function(a) {
    return Zr(a);
  }) : i = [Zr(r)], mh(t).forEach(function(a) {
    var o = Et(a, "type.displayName") || Et(a, "type.name");
    i.indexOf(o) !== -1 && n.push(a);
  }), n;
}, Hr = function(t, r) {
  var n = dr(t, r);
  return n && n[0];
}, Rg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!re(n) || n <= 0 || !re(i) || i <= 0);
}, iU = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], aU = function(t) {
  return t && t.type && Da(t.type) && iU.indexOf(t.type) >= 0;
}, uw = function e(t, r) {
  if (t === r)
    return !0;
  var n = _n.count(t);
  if (n !== _n.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Ig(Re(t) ? t[0] : t, Re(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Re(a) || Re(o)) {
      if (!e(a, o))
        return !1;
    } else if (!Ig(a, o))
      return !1;
  }
  return !0;
}, Ig = function(t, r) {
  if (le(t) && le(r))
    return !0;
  if (!le(t) && !le(r)) {
    var n = t.props || {}, i = n.children, a = Mg(n, ["children"]), o = r.props || {}, s = o.children, u = Mg(o, ["children"]);
    return i && s ? Qn(a, u) && uw(i, s) : !i && !s ? Qn(a, u) : !1;
  }
  return !1;
}, $g = function(t, r) {
  var n = [], i = {};
  return mh(t).forEach(function(a, o) {
    if (aU(a))
      n.push(a);
    else if (a) {
      var s = Zr(a.type), u = r[s] || {}, c = u.handler, l = u.once;
      if (c && (!l || !i[s])) {
        var f = c(a, s, o);
        n.push(f), i[s] = !0;
      }
    }
  }), n;
}, oU = function(t) {
  var r = t && t.type;
  return r && kg[r] ? kg[r] : null;
}, sU = function(t, r) {
  return mh(r).indexOf(t);
}, uU = ih;
function cU(e, t) {
  return uU(e, t);
}
var cw = cU, lU = Oi;
function fU(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !lU(o) : r(o, s)))
      var s = o, u = a;
  }
  return u;
}
var Tu = fU;
function dU(e, t) {
  return e > t;
}
var lw = dU, hU = Tu, pU = lw, vU = Ei;
function gU(e) {
  return e && e.length ? hU(e, vU, pU) : void 0;
}
var Pu = gU;
function yU(e, t) {
  return e < t;
}
var fw = yU, mU = Tu, bU = fw, xU = Ei;
function wU(e) {
  return e && e.length ? mU(e, xU, bU) : void 0;
}
var Cu = wU, SU = sh, AU = mr, _U = Jx, OU = Re;
function EU(e, t) {
  var r = OU(e) ? SU : _U;
  return r(e, AU(t));
}
var TU = EU, PU = Xx, CU = TU;
function MU(e, t) {
  return PU(CU(e, t), 1);
}
var kU = MU, Ti = 1e9, NU = {
  precision: 20,
  rounding: 4,
  toExpNeg: -7,
  toExpPos: 21,
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, xh, Ge = !0, qt = "[DecimalError] ", On = qt + "Invalid argument: ", bh = qt + "Exponent out of range: ", Pi = Math.floor, xn = Math.pow, RU = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, kt, ot = 1e7, ze = 7, dw = 9007199254740991, ws = Pi(dw / ze), ae = {};
ae.absoluteValue = ae.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ae.comparedTo = ae.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s)
    return a.s || -e.s;
  if (a.e !== e.e)
    return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t])
      return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
ae.decimalPlaces = ae.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ze;
  if (t = e.d[t], t)
    for (; t % 10 == 0; t /= 10)
      r--;
  return r < 0 ? 0 : r;
};
ae.dividedBy = ae.div = function(e) {
  return Tr(this, new this.constructor(e));
};
ae.dividedToIntegerBy = ae.idiv = function(e) {
  var t = this, r = t.constructor;
  return je(Tr(t, new r(e), 0, 1), r.precision);
};
ae.equals = ae.eq = function(e) {
  return !this.cmp(e);
};
ae.exponent = function() {
  return Qe(this);
};
ae.greaterThan = ae.gt = function(e) {
  return this.cmp(e) > 0;
};
ae.greaterThanOrEqualTo = ae.gte = function(e) {
  return this.cmp(e) >= 0;
};
ae.isInteger = ae.isint = function() {
  return this.e > this.d.length - 2;
};
ae.isNegative = ae.isneg = function() {
  return this.s < 0;
};
ae.isPositive = ae.ispos = function() {
  return this.s > 0;
};
ae.isZero = function() {
  return this.s === 0;
};
ae.lessThan = ae.lt = function(e) {
  return this.cmp(e) < 0;
};
ae.lessThanOrEqualTo = ae.lte = function(e) {
  return this.cmp(e) < 1;
};
ae.logarithm = ae.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(kt))
    throw Error(qt + "NaN");
  if (r.s < 1)
    throw Error(qt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(kt) ? new n(0) : (Ge = !1, t = Tr(ma(r, a), ma(e, a), a), Ge = !0, je(t, i));
};
ae.minus = ae.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? vw(t, e) : hw(t, (e.s = -e.s, e));
};
ae.modulo = ae.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s)
    throw Error(qt + "NaN");
  return r.s ? (Ge = !1, t = Tr(r, e, 0, 1).times(e), Ge = !0, r.minus(t)) : je(new n(r), i);
};
ae.naturalExponential = ae.exp = function() {
  return pw(this);
};
ae.naturalLogarithm = ae.ln = function() {
  return ma(this);
};
ae.negated = ae.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ae.plus = ae.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? hw(t, e) : vw(t, (e.s = -e.s, e));
};
ae.precision = ae.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(On + e);
  if (t = Qe(i) + 1, n = i.d.length - 1, r = n * ze + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = i.d[0]; n >= 10; n /= 10)
      r++;
  }
  return e && t > r ? t : r;
};
ae.squareRoot = ae.sqrt = function() {
  var e, t, r, n, i, a, o, s = this, u = s.constructor;
  if (s.s < 1) {
    if (!s.s)
      return new u(0);
    throw Error(qt + "NaN");
  }
  for (e = Qe(s), Ge = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = sr(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Pi((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(i.toString()), r = u.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Tr(s, a, o + 2)).times(0.5), sr(a.d).slice(0, o) === (t = sr(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (je(a, r + 1, 0), a.times(a).eq(s)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Ge = !0, je(n, r);
};
ae.times = ae.mul = function(e) {
  var t, r, n, i, a, o, s, u, c, l = this, f = l.constructor, d = l.d, p = (e = new f(e)).d;
  if (!l.s || !e.s)
    return new f(0);
  for (e.s *= l.s, r = l.e + e.e, u = d.length, c = p.length, u < c && (a = d, d = p, p = a, o = u, u = c, c = o), a = [], o = u + c, n = o; n--; )
    a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      s = a[i] + p[n] * d[i - n - 1] + t, a[i--] = s % ot | 0, t = s / ot | 0;
    a[i] = (a[i] + t) % ot | 0;
  }
  for (; !a[--o]; )
    a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, Ge ? je(e, f.precision) : e;
};
ae.toDecimalPlaces = ae.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (vr(e, 0, Ti), t === void 0 ? t = n.rounding : vr(t, 0, 8), je(r, e + Qe(r) + 1, t));
};
ae.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = En(n, !0) : (vr(e, 0, Ti), t === void 0 ? t = i.rounding : vr(t, 0, 8), n = je(new i(n), e + 1, t), r = En(n, !0, e + 1)), r;
};
ae.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? En(i) : (vr(e, 0, Ti), t === void 0 ? t = a.rounding : vr(t, 0, 8), n = je(new a(i), e + Qe(i) + 1, t), r = En(n.abs(), !1, e + Qe(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
ae.toInteger = ae.toint = function() {
  var e = this, t = e.constructor;
  return je(new t(e), Qe(e) + 1, t.rounding);
};
ae.toNumber = function() {
  return +this;
};
ae.toPower = ae.pow = function(e) {
  var t, r, n, i, a, o, s = this, u = s.constructor, c = 12, l = +(e = new u(e));
  if (!e.s)
    return new u(kt);
  if (s = new u(s), !s.s) {
    if (e.s < 1)
      throw Error(qt + "Infinity");
    return s;
  }
  if (s.eq(kt))
    return s;
  if (n = u.precision, e.eq(kt))
    return je(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = l < 0 ? -l : l) <= dw) {
      for (i = new u(kt), t = Math.ceil(n / ze + 4), Ge = !1; r % 2 && (i = i.times(s), jg(i.d, t)), r = Pi(r / 2), r !== 0; )
        s = s.times(s), jg(s.d, t);
      return Ge = !0, e.s < 0 ? new u(kt).div(i) : je(i, n);
    }
  } else if (a < 0)
    throw Error(qt + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ge = !1, i = e.times(ma(s, n + c)), Ge = !0, i = pw(i), i.s = a, i;
};
ae.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = Qe(i), n = En(i, r <= a.toExpNeg || r >= a.toExpPos)) : (vr(e, 1, Ti), t === void 0 ? t = a.rounding : vr(t, 0, 8), i = je(new a(i), e, t), r = Qe(i), n = En(i, e <= r || r <= a.toExpNeg, e)), n;
};
ae.toSignificantDigits = ae.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (vr(e, 1, Ti), t === void 0 ? t = n.rounding : vr(t, 0, 8)), je(new n(r), e, t);
};
ae.toString = ae.valueOf = ae.val = ae.toJSON = ae[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Qe(e), r = e.constructor;
  return En(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function hw(e, t) {
  var r, n, i, a, o, s, u, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Ge ? je(t, f) : t;
  if (u = e.d, c = t.d, o = e.e, i = t.e, u = u.slice(), a = o - i, a) {
    for (a < 0 ? (n = u, a = -a, s = c.length) : (n = c, i = o, s = u.length), o = Math.ceil(f / ze), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; )
      n.push(0);
    n.reverse();
  }
  for (s = u.length, a = c.length, s - a < 0 && (a = s, n = c, c = u, u = n), r = 0; a; )
    r = (u[--a] = u[a] + c[a] + r) / ot | 0, u[a] %= ot;
  for (r && (u.unshift(r), ++i), s = u.length; u[--s] == 0; )
    u.pop();
  return t.d = u, t.e = i, Ge ? je(t, f) : t;
}
function vr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(On + e);
}
function sr(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = ze - n.length, r && (a += Ur(r)), a += n;
    o = e[t], n = o + "", r = ze - n.length, r && (a += Ur(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return a + o;
}
var Tr = function() {
  function e(n, i) {
    var a, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      a = n[s] * i + o, n[s] = a % ot | 0, o = a / ot | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var s, u;
    if (a != o)
      u = a > o ? 1 : -1;
    else
      for (s = u = 0; s < a; s++)
        if (n[s] != i[s]) {
          u = n[s] > i[s] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * ot + n[a] - i[a];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, a, o) {
    var s, u, c, l, f, d, p, v, h, g, m, w, x, b, y, S, A, _, E = n.constructor, M = n.s == i.s ? 1 : -1, C = n.d, k = i.d;
    if (!n.s)
      return new E(n);
    if (!i.s)
      throw Error(qt + "Division by zero");
    for (u = n.e - i.e, A = k.length, y = C.length, p = new E(M), v = p.d = [], c = 0; k[c] == (C[c] || 0); )
      ++c;
    if (k[c] > (C[c] || 0) && --u, a == null ? w = a = E.precision : o ? w = a + (Qe(n) - Qe(i)) + 1 : w = a, w < 0)
      return new E(0);
    if (w = w / ze + 2 | 0, c = 0, A == 1)
      for (l = 0, k = k[0], w++; (c < y || l) && w--; c++)
        x = l * ot + (C[c] || 0), v[c] = x / k | 0, l = x % k | 0;
    else {
      for (l = ot / (k[0] + 1) | 0, l > 1 && (k = e(k, l), C = e(C, l), A = k.length, y = C.length), b = A, h = C.slice(0, A), g = h.length; g < A; )
        h[g++] = 0;
      _ = k.slice(), _.unshift(0), S = k[0], k[1] >= ot / 2 && ++S;
      do
        l = 0, s = t(k, h, A, g), s < 0 ? (m = h[0], A != g && (m = m * ot + (h[1] || 0)), l = m / S | 0, l > 1 ? (l >= ot && (l = ot - 1), f = e(k, l), d = f.length, g = h.length, s = t(f, h, d, g), s == 1 && (l--, r(f, A < d ? _ : k, d))) : (l == 0 && (s = l = 1), f = k.slice()), d = f.length, d < g && f.unshift(0), r(h, f, g), s == -1 && (g = h.length, s = t(k, h, A, g), s < 1 && (l++, r(h, A < g ? _ : k, g))), g = h.length) : s === 0 && (l++, h = [0]), v[c++] = l, s && h[0] ? h[g++] = C[b] || 0 : (h = [C[b]], g = 1);
      while ((b++ < y || h[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), p.e = u, je(p, o ? a + Qe(p) + 1 : a);
  };
}();
function pw(e, t) {
  var r, n, i, a, o, s, u = 0, c = 0, l = e.constructor, f = l.precision;
  if (Qe(e) > 16)
    throw Error(bh + Qe(e));
  if (!e.s)
    return new l(kt);
  for (t == null ? (Ge = !1, s = f) : s = t, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(xn(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(kt), l.precision = s; ; ) {
    if (i = je(i.times(e), s), r = r.times(++u), o = a.plus(Tr(i, r, s)), sr(o.d).slice(0, s) === sr(a.d).slice(0, s)) {
      for (; c--; )
        a = je(a.times(a), s);
      return l.precision = f, t == null ? (Ge = !0, je(a, f)) : a;
    }
    a = o;
  }
}
function Qe(e) {
  for (var t = e.e * ze, r = e.d[0]; r >= 10; r /= 10)
    t++;
  return t;
}
function $c(e, t, r) {
  if (t > e.LN10.sd())
    throw Ge = !0, r && (e.precision = r), Error(qt + "LN10 precision limit exceeded");
  return je(new e(e.LN10), t);
}
function Ur(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function ma(e, t) {
  var r, n, i, a, o, s, u, c, l, f = 1, d = 10, p = e, v = p.d, h = p.constructor, g = h.precision;
  if (p.s < 1)
    throw Error(qt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(kt))
    return new h(0);
  if (t == null ? (Ge = !1, c = g) : c = t, p.eq(10))
    return t == null && (Ge = !0), $c(h, c);
  if (c += d, h.precision = c, r = sr(v), n = r.charAt(0), a = Qe(p), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = sr(p.d), n = r.charAt(0), f++;
    a = Qe(p), n > 1 ? (p = new h("0." + r), a++) : p = new h(n + "." + r.slice(1));
  } else
    return u = $c(h, c + 2, g).times(a + ""), p = ma(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = g, t == null ? (Ge = !0, je(p, g)) : p;
  for (s = o = p = Tr(p.minus(kt), p.plus(kt), c), l = je(p.times(p), c), i = 3; ; ) {
    if (o = je(o.times(l), c), u = s.plus(Tr(o, new h(i), c)), sr(u.d).slice(0, c) === sr(s.d).slice(0, c))
      return s = s.times(2), a !== 0 && (s = s.plus($c(h, c + 2, g).times(a + ""))), s = Tr(s, new h(f), c), h.precision = g, t == null ? (Ge = !0, je(s, g)) : s;
    s = u, i += 2;
  }
}
function Lg(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; )
    --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Pi(r / ze), e.d = [], n = (r + 1) % ze, r < 0 && (n += ze), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ze; n < i; )
        e.d.push(+t.slice(n, n += ze));
      t = t.slice(n), n = ze - t.length;
    } else
      n -= i;
    for (; n--; )
      t += "0";
    if (e.d.push(+t), Ge && (e.e > ws || e.e < -ws))
      throw Error(bh + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function je(e, t, r) {
  var n, i, a, o, s, u, c, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10)
    o++;
  if (n = t - o, n < 0)
    n += ze, i = t, c = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / ze), a = f.length, l >= a)
      return e;
    for (c = a = f[l], o = 1; a >= 10; a /= 10)
      o++;
    n %= ze, i = n - ze + o;
  }
  if (r !== void 0 && (a = xn(10, o - i - 1), s = c / a % 10 | 0, u = t < 0 || f[l + 1] !== void 0 || c % a, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && (n > 0 ? i > 0 ? c / xn(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return u ? (a = Qe(e), f.length = 1, t = t - a - 1, f[0] = xn(10, (ze - t % ze) % ze), e.e = Pi(-t / ze) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = xn(10, ze - n), f[l] = i > 0 ? (c / xn(10, o - i) % xn(10, i) | 0) * a : 0), u)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == ot && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != ot)
          break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; )
    f.pop();
  if (Ge && (e.e > ws || e.e < -ws))
    throw Error(bh + Qe(e));
  return e;
}
function vw(e, t) {
  var r, n, i, a, o, s, u, c, l, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Ge ? je(t, p) : t;
  if (u = e.d, f = t.d, n = t.e, c = e.e, u = u.slice(), o = c - n, o) {
    for (l = o < 0, l ? (r = u, o = -o, s = f.length) : (r = f, n = c, s = u.length), i = Math.max(Math.ceil(p / ze), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; )
      r.push(0);
    r.reverse();
  } else {
    for (i = u.length, s = f.length, l = i < s, l && (s = i), i = 0; i < s; i++)
      if (u[i] != f[i]) {
        l = u[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = u, u = f, f = r, t.s = -t.s), s = u.length, i = f.length - s; i > 0; --i)
    u[s++] = 0;
  for (i = f.length; i > o; ) {
    if (u[--i] < f[i]) {
      for (a = i; a && u[--a] === 0; )
        u[a] = ot - 1;
      --u[a], u[i] += ot;
    }
    u[i] -= f[i];
  }
  for (; u[--s] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --n;
  return u[0] ? (t.d = u, t.e = n, Ge ? je(t, p) : t) : new d(0);
}
function En(e, t, r) {
  var n, i = Qe(e), a = sr(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ur(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Ur(-i - 1) + a, r && (n = r - o) > 0 && (a += Ur(n))) : i >= o ? (a += Ur(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Ur(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Ur(n))), e.s < 0 ? "-" + a : a;
}
function jg(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function gw(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i))
      return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(On + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Lg(o, a.toString());
    } else if (typeof a != "string")
      throw Error(On + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, RU.test(a))
      Lg(o, a);
    else
      throw Error(On + a);
  }
  if (i.prototype = ae, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = gw, i.config = i.set = IU, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function IU(e) {
  if (!e || typeof e != "object")
    throw Error(qt + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Ti,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (Pi(n) === n && n >= i[t + 1] && n <= i[t + 2])
        this[r] = n;
      else
        throw Error(On + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10)
      this[r] = new this(n);
    else
      throw Error(On + r + ": " + n);
  return this;
}
var xh = gw(NU);
kt = new xh(1);
const Ie = xh;
function $U(e) {
  return FU(e) || DU(e) || jU(e) || LU();
}
function LU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jU(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return rf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return rf(e, t);
  }
}
function DU(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function FU(e) {
  if (Array.isArray(e))
    return rf(e);
}
function rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var VU = function(t) {
  return t;
}, yw = {
  "@@functional/placeholder": !0
}, mw = function(t) {
  return t === yw;
}, Dg = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && mw(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, BU = function e(t, r) {
  return t === 1 ? r : Dg(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== yw;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, Dg(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var l = i.map(function(f) {
        return mw(f) ? u.shift() : f;
      });
      return r.apply(void 0, $U(l).concat(u));
    }));
  });
}, Mu = function(t) {
  return BU(t.length, t);
}, nf = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, UU = Mu(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), zU = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return VU;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, a.apply(void 0, arguments));
  };
}, af = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, bw = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, u) {
      return s === r[u];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function WU(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ie(e).abs().log(10).toNumber()) + 1, t;
}
function qU(e, t, r) {
  for (var n = new Ie(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var HU = Mu(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), GU = Mu(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), YU = Mu(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const ku = {
  rangeStep: qU,
  getDigitCount: WU,
  interpolateNumber: HU,
  uninterpolateNumber: GU,
  uninterpolateTruncation: YU
};
function of(e) {
  return ZU(e) || XU(e) || xw(e) || KU();
}
function KU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XU(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function ZU(e) {
  if (Array.isArray(e))
    return sf(e);
}
function ba(e, t) {
  return ez(e) || QU(e, t) || xw(e, t) || JU();
}
function JU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xw(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return sf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return sf(e, t);
  }
}
function sf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function QU(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function ez(e) {
  if (Array.isArray(e))
    return e;
}
function ww(e) {
  var t = ba(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function Sw(e, t, r) {
  if (e.lte(0))
    return new Ie(0);
  var n = ku.getDigitCount(e.toNumber()), i = new Ie(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Ie(Math.ceil(a.div(o).toNumber())).add(r).mul(o), u = s.mul(i);
  return t ? u : new Ie(Math.ceil(u));
}
function tz(e, t, r) {
  var n = 1, i = new Ie(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Ie(10).pow(ku.getDigitCount(e) - 1), i = new Ie(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Ie(Math.floor(e)));
  } else
    e === 0 ? i = new Ie(Math.floor((t - 1) / 2)) : r || (i = new Ie(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = zU(UU(function(u) {
    return i.add(new Ie(u - o).mul(n)).toNumber();
  }), nf);
  return s(0, t);
}
function Aw(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ie(0),
      tickMin: new Ie(0),
      tickMax: new Ie(0)
    };
  var a = Sw(new Ie(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new Ie(0) : (o = new Ie(e).add(t).div(2), o = o.sub(new Ie(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), u = Math.ceil(new Ie(t).sub(o).div(a).toNumber()), c = s + u + 1;
  return c > r ? Aw(e, t, r, n, i + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: a,
    tickMin: o.sub(new Ie(s).mul(a)),
    tickMax: o.add(new Ie(u).mul(a))
  });
}
function rz(e) {
  var t = ba(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = ww([r, n]), u = ba(s, 2), c = u[0], l = u[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(of(nf(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(of(nf(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? af(f) : f;
  }
  if (c === l)
    return tz(c, i, a);
  var d = Aw(c, l, o, a), p = d.step, v = d.tickMin, h = d.tickMax, g = ku.rangeStep(v, h.add(new Ie(0.1).mul(p)), p);
  return r > n ? af(g) : g;
}
function nz(e, t) {
  var r = ba(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = ww([n, i]), s = ba(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (u === c)
    return [u];
  var l = Math.max(t, 2), f = Sw(new Ie(c).sub(u).div(l - 1), a, 0), d = [].concat(of(ku.rangeStep(new Ie(u), new Ie(c).sub(new Ie(0.99).mul(f)), f)), [c]);
  return n > i ? af(d) : d;
}
var iz = bw(rz), az = bw(nz);
function Va(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function wh(e) {
  let t = e, r = e;
  e.length === 1 && (t = (o, s) => e(o) - s, r = oz(e));
  function n(o, s, u, c) {
    for (u == null && (u = 0), c == null && (c = o.length); u < c; ) {
      const l = u + c >>> 1;
      r(o[l], s) < 0 ? u = l + 1 : c = l;
    }
    return u;
  }
  function i(o, s, u, c) {
    for (u == null && (u = 0), c == null && (c = o.length); u < c; ) {
      const l = u + c >>> 1;
      r(o[l], s) > 0 ? c = l : u = l + 1;
    }
    return u;
  }
  function a(o, s, u, c) {
    u == null && (u = 0), c == null && (c = o.length);
    const l = n(o, s, u, c - 1);
    return l > u && t(o[l - 1], s) > -t(o[l], s) ? l - 1 : l;
  }
  return { left: n, center: a, right: i };
}
function oz(e) {
  return (t, r) => Va(e(t), r);
}
function _w(e) {
  return e === null ? NaN : +e;
}
function* sz(e, t) {
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e)
      (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
const uz = wh(Va), cz = uz.right;
wh(_w).center;
const Ba = cz;
var uf = Math.sqrt(50), cf = Math.sqrt(10), lf = Math.sqrt(2);
function ff(e, t, r) {
  var n, i = -1, a, o, s;
  if (t = +t, e = +e, r = +r, e === t && r > 0)
    return [e];
  if ((n = t < e) && (a = e, e = t, t = a), (s = Ow(e, t, r)) === 0 || !isFinite(s))
    return [];
  if (s > 0) {
    let u = Math.round(e / s), c = Math.round(t / s);
    for (u * s < e && ++u, c * s > t && --c, o = new Array(a = c - u + 1); ++i < a; )
      o[i] = (u + i) * s;
  } else {
    s = -s;
    let u = Math.round(e * s), c = Math.round(t * s);
    for (u / s < e && ++u, c / s > t && --c, o = new Array(a = c - u + 1); ++i < a; )
      o[i] = (u + i) / s;
  }
  return n && o.reverse(), o;
}
function Ow(e, t, r) {
  var n = (t - e) / Math.max(0, r), i = Math.floor(Math.log(n) / Math.LN10), a = n / Math.pow(10, i);
  return i >= 0 ? (a >= uf ? 10 : a >= cf ? 5 : a >= lf ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= uf ? 10 : a >= cf ? 5 : a >= lf ? 2 : 1);
}
function df(e, t, r) {
  var n = Math.abs(t - e) / Math.max(0, r), i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), a = n / i;
  return a >= uf ? i *= 10 : a >= cf ? i *= 5 : a >= lf && (i *= 2), t < e ? -i : i;
}
function Fg(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null && (r < i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function Vg(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null && (r > i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function Ew(e, t, r = 0, n = e.length - 1, i = Va) {
  for (; n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, l = Math.log(u), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), v = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      Ew(e, t, p, v, i);
    }
    const a = e[t];
    let o = r, s = n;
    for (Bi(e, r, t), i(e[n], a) > 0 && Bi(e, r, n); o < s; ) {
      for (Bi(e, o, s), ++o, --s; i(e[o], a) < 0; )
        ++o;
      for (; i(e[s], a) > 0; )
        --s;
    }
    i(e[r], a) === 0 ? Bi(e, r, s) : (++s, Bi(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Bi(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function lz(e, t, r) {
  if (e = Float64Array.from(sz(e, r)), !!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return Vg(e);
    if (t >= 1)
      return Fg(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Fg(Ew(e, a).subarray(0, a + 1)), s = Vg(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function fz(e, t, r = _w) {
  if (!!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return +r(e[0], 0, e);
    if (t >= 1)
      return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function dz(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Yt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Ir(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const hf = Symbol("implicit");
function Sh() {
  var e = /* @__PURE__ */ new Map(), t = [], r = [], n = hf;
  function i(a) {
    var o = a + "", s = e.get(o);
    if (!s) {
      if (n !== hf)
        return n;
      e.set(o, s = t.push(a));
    }
    return r[(s - 1) % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length)
      return t.slice();
    t = [], e = /* @__PURE__ */ new Map();
    for (const o of a) {
      const s = o + "";
      e.has(s) || e.set(s, t.push(o));
    }
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Sh(t, r).unknown(n);
  }, Yt.apply(i, arguments), i;
}
function xa() {
  var e = Sh().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, u = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = i < n, v = p ? i : n, h = p ? n : i;
    a = (h - v) / Math.max(1, d - u + c * 2), s && (a = Math.floor(a)), v += (h - v - a * (d - u)) * l, o = a * (1 - u), s && (v = Math.round(v), o = Math.round(o));
    var g = dz(d).map(function(m) {
      return v + a * m;
    });
    return r(p ? g.reverse() : g);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, s = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (s = !!d, f()) : s;
  }, e.padding = function(d) {
    return arguments.length ? (u = Math.min(1, c = +d), f()) : u;
  }, e.paddingInner = function(d) {
    return arguments.length ? (u = Math.min(1, d), f()) : u;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return xa(t(), [n, i]).round(s).paddingInner(u).paddingOuter(c).align(l);
  }, Yt.apply(f(), arguments);
}
function Tw(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Tw(t());
  }, e;
}
function ia() {
  return Tw(xa.apply(null, arguments).paddingInner(1));
}
function Ah(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Pw(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t)
    r[n] = t[n];
  return r;
}
function Ua() {
}
var wa = 0.7, Ss = 1 / wa, ei = "\\s*([+-]?\\d+)\\s*", Sa = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", hr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hz = /^#([0-9a-f]{3,8})$/, pz = new RegExp("^rgb\\(" + [ei, ei, ei] + "\\)$"), vz = new RegExp("^rgb\\(" + [hr, hr, hr] + "\\)$"), gz = new RegExp("^rgba\\(" + [ei, ei, ei, Sa] + "\\)$"), yz = new RegExp("^rgba\\(" + [hr, hr, hr, Sa] + "\\)$"), mz = new RegExp("^hsl\\(" + [Sa, hr, hr] + "\\)$"), bz = new RegExp("^hsla\\(" + [Sa, hr, hr, Sa] + "\\)$"), Bg = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ah(Ua, Aa, {
  copy: function(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: Ug,
  formatHex: Ug,
  formatHsl: xz,
  formatRgb: zg,
  toString: zg
});
function Ug() {
  return this.rgb().formatHex();
}
function xz() {
  return Cw(this).formatHsl();
}
function zg() {
  return this.rgb().formatRgb();
}
function Aa(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = hz.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Wg(t) : r === 3 ? new It(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? uo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? uo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = pz.exec(e)) ? new It(t[1], t[2], t[3], 1) : (t = vz.exec(e)) ? new It(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = gz.exec(e)) ? uo(t[1], t[2], t[3], t[4]) : (t = yz.exec(e)) ? uo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = mz.exec(e)) ? Gg(t[1], t[2] / 100, t[3] / 100, 1) : (t = bz.exec(e)) ? Gg(t[1], t[2] / 100, t[3] / 100, t[4]) : Bg.hasOwnProperty(e) ? Wg(Bg[e]) : e === "transparent" ? new It(NaN, NaN, NaN, 0) : null;
}
function Wg(e) {
  return new It(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function uo(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new It(e, t, r, n);
}
function wz(e) {
  return e instanceof Ua || (e = Aa(e)), e ? (e = e.rgb(), new It(e.r, e.g, e.b, e.opacity)) : new It();
}
function pf(e, t, r, n) {
  return arguments.length === 1 ? wz(e) : new It(e, t, r, n == null ? 1 : n);
}
function It(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Ah(It, pf, Pw(Ua, {
  brighter: function(e) {
    return e = e == null ? Ss : Math.pow(Ss, e), new It(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? wa : Math.pow(wa, e), new It(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: qg,
  formatHex: qg,
  formatRgb: Hg,
  toString: Hg
}));
function qg() {
  return "#" + Lc(this.r) + Lc(this.g) + Lc(this.b);
}
function Hg() {
  var e = this.opacity;
  return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (e === 1 ? ")" : ", " + e + ")");
}
function Lc(e) {
  return e = Math.max(0, Math.min(255, Math.round(e) || 0)), (e < 16 ? "0" : "") + e.toString(16);
}
function Gg(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new or(e, t, r, n);
}
function Cw(e) {
  if (e instanceof or)
    return new or(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ua || (e = Aa(e)), !e)
    return new or();
  if (e instanceof or)
    return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new or(o, s, u, e.opacity);
}
function Sz(e, t, r, n) {
  return arguments.length === 1 ? Cw(e) : new or(e, t, r, n == null ? 1 : n);
}
function or(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Ah(or, Sz, Pw(Ua, {
  brighter: function(e) {
    return e = e == null ? Ss : Math.pow(Ss, e), new or(this.h, this.s, this.l * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? wa : Math.pow(wa, e), new or(this.h, this.s, this.l * e, this.opacity);
  },
  rgb: function() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new It(
      jc(e >= 240 ? e - 240 : e + 120, i, n),
      jc(e, i, n),
      jc(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl: function() {
    var e = this.opacity;
    return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (e === 1 ? ")" : ", " + e + ")");
  }
}));
function jc(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const _h = (e) => () => e;
function Az(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function _z(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function Oz(e) {
  return (e = +e) == 1 ? Mw : function(t, r) {
    return r - t ? _z(t, r, e) : _h(isNaN(t) ? r : t);
  };
}
function Mw(e, t) {
  var r = t - e;
  return r ? Az(e, r) : _h(isNaN(e) ? t : e);
}
const Yg = function e(t) {
  var r = Oz(t);
  function n(i, a) {
    var o = r((i = pf(i)).r, (a = pf(a)).r), s = r(i.g, a.g), u = r(i.b, a.b), c = Mw(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = u(l), i.opacity = c(l), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function Ez(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i)
      n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function Tz(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Pz(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o)
    i[o] = Ci(e[o], t[o]);
  for (; o < r; ++o)
    a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o)
      a[o] = i[o](s);
    return a;
  };
}
function Cz(e, t) {
  var r = new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function As(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Mz(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Ci(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r)
      n[i] = r[i](a);
    return n;
  };
}
var vf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dc = new RegExp(vf.source, "g");
function kz(e) {
  return function() {
    return e;
  };
}
function Nz(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Rz(e, t) {
  var r = vf.lastIndex = Dc.lastIndex = 0, n, i, a, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = vf.exec(e)) && (i = Dc.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: As(n, i) })), r = Dc.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? Nz(u[0].x) : kz(t) : (t = u.length, function(c) {
    for (var l = 0, f; l < t; ++l)
      s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function Ci(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? _h(t) : (r === "number" ? As : r === "string" ? (n = Aa(t)) ? (t = n, Yg) : Rz : t instanceof Aa ? Yg : t instanceof Date ? Cz : Tz(t) ? Ez : Array.isArray(t) ? Pz : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Mz : As)(e, t);
}
function Oh(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Iz(e, t) {
  t === void 0 && (t = e, e = Ci);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; )
    a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function $z(e) {
  return function() {
    return e;
  };
}
function _s(e) {
  return +e;
}
var Kg = [0, 1];
function St(e) {
  return e;
}
function gf(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : $z(isNaN(t) ? NaN : 0.5);
}
function Lz(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function jz(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = gf(i, n), a = r(o, a)) : (n = gf(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function Dz(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = gf(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = Ba(e, s, 1, n) - 1;
    return a[u](i[u](s));
  };
}
function za(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Nu() {
  var e = Kg, t = Kg, r = Ci, n, i, a, o = St, s, u, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== St && (o = Lz(e[0], e[d - 1])), s = d > 2 ? Dz : jz, u = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (u || (u = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((c || (c = s(t, e.map(n), As)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, _s), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Oh, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : St, l()) : o !== St;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, p) {
    return n = d, i = p, l();
  };
}
function Eh() {
  return Nu()(St, St);
}
function Fz(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Os(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function fi(e) {
  return e = Os(Math.abs(e)), e ? e[1] : NaN;
}
function Vz(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), a.push(r.substring(i -= s, i + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function Bz(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Uz = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Es(e) {
  if (!(t = Uz.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Th({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Es.prototype = Th.prototype;
function Th(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Th.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function zz(e) {
  e:
    for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
      switch (e[r]) {
        case ".":
          n = i = r;
          break;
        case "0":
          n === 0 && (n = r), i = r;
          break;
        default:
          if (!+e[r])
            break e;
          n > 0 && (n = 0);
          break;
      }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var kw;
function Wz(e, t) {
  var r = Os(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1], a = i - (kw = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Os(e, Math.max(0, t + a - 1))[0];
}
function Xg(e, t) {
  var r = Os(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Zg = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Fz,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Xg(e * 100, t),
  r: Xg,
  s: Wz,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Jg(e) {
  return e;
}
var Qg = Array.prototype.map, ey = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function qz(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Jg : Vz(Qg.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Jg : Bz(Qg.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "\u2212" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Es(f);
    var d = f.fill, p = f.align, v = f.sign, h = f.symbol, g = f.zero, m = f.width, w = f.comma, x = f.precision, b = f.trim, y = f.type;
    y === "n" ? (w = !0, y = "g") : Zg[y] || (x === void 0 && (x = 12), b = !0, y = "g"), (g || d === "0" && p === "=") && (g = !0, d = "0", p = "=");
    var S = h === "$" ? r : h === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", A = h === "$" ? n : /[%p]/.test(y) ? o : "", _ = Zg[y], E = /[defgprs%]/.test(y);
    x = x === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function M(C) {
      var k = S, N = A, j, L, R;
      if (y === "c")
        N = _(C) + N, C = "";
      else {
        C = +C;
        var Q = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? u : _(Math.abs(C), x), b && (C = zz(C)), Q && +C == 0 && v !== "+" && (Q = !1), k = (Q ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + k, N = (y === "s" ? ey[8 + kw / 3] : "") + N + (Q && v === "(" ? ")" : ""), E) {
          for (j = -1, L = C.length; ++j < L; )
            if (R = C.charCodeAt(j), 48 > R || R > 57) {
              N = (R === 46 ? i + C.slice(j + 1) : C.slice(j)) + N, C = C.slice(0, j);
              break;
            }
        }
      }
      w && !g && (C = t(C, 1 / 0));
      var K = k.length + C.length + N.length, te = K < m ? new Array(m - K + 1).join(d) : "";
      switch (w && g && (C = t(te + C, te.length ? m - N.length : 1 / 0), te = ""), p) {
        case "<":
          C = k + C + N + te;
          break;
        case "=":
          C = k + te + C + N;
          break;
        case "^":
          C = te.slice(0, K = te.length >> 1) + k + C + N + te.slice(K);
          break;
        default:
          C = te + k + C + N;
          break;
      }
      return a(C);
    }
    return M.toString = function() {
      return f + "";
    }, M;
  }
  function l(f, d) {
    var p = c((f = Es(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(fi(d) / 3))) * 3, h = Math.pow(10, -v), g = ey[8 + v / 3];
    return function(m) {
      return p(h * m) + g;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var co, Ph, Nw;
Hz({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Hz(e) {
  return co = qz(e), Ph = co.format, Nw = co.formatPrefix, co;
}
function Gz(e) {
  return Math.max(0, -fi(Math.abs(e)));
}
function Yz(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(fi(t) / 3))) * 3 - fi(Math.abs(e)));
}
function Kz(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, fi(t) - fi(e)) + 1;
}
function Rw(e, t, r, n) {
  var i = df(e, t, r), a;
  switch (n = Es(n == null ? ",f" : n), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = Yz(i, o)) && (n.precision = a), Nw(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = Kz(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = Gz(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Ph(n);
}
function un(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return ff(n[0], n[n.length - 1], r == null ? 10 : r);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Rw(i[0], i[i.length - 1], r == null ? 10 : r, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], u, c, l = 10;
    for (s < o && (c = o, o = s, s = c, c = i, i = a, a = c); l-- > 0; ) {
      if (c = Ow(o, s, r), c === u)
        return n[i] = o, n[a] = s, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, s = Math.ceil(s / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, s = Math.floor(s * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function Ts() {
  var e = Eh();
  return e.copy = function() {
    return za(e, Ts());
  }, Yt.apply(e, arguments), un(e);
}
function Iw(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, _s), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Iw(e).unknown(t);
  }, e = arguments.length ? Array.from(e, _s) : [0, 1], un(r);
}
function $w(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function ty(e) {
  return Math.log(e);
}
function ry(e) {
  return Math.exp(e);
}
function Xz(e) {
  return -Math.log(-e);
}
function Zz(e) {
  return -Math.exp(-e);
}
function Jz(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Qz(e) {
  return e === 10 ? Jz : e === Math.E ? Math.exp : function(t) {
    return Math.pow(e, t);
  };
}
function eW(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), function(t) {
    return Math.log(t) / e;
  });
}
function ny(e) {
  return function(t) {
    return -e(-t);
  };
}
function Ch(e) {
  var t = e(ty, ry), r = t.domain, n = 10, i, a;
  function o() {
    return i = eW(n), a = Qz(n), r()[0] < 0 ? (i = ny(i), a = ny(a), e(Xz, Zz)) : e(ty, ry), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = function(s) {
    var u = r(), c = u[0], l = u[u.length - 1], f;
    (f = l < c) && (d = c, c = l, l = d);
    var d = i(c), p = i(l), v, h, g, m = s == null ? 10 : +s, w = [];
    if (!(n % 1) && p - d < m) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (h = 1, v = a(d); h < n; ++h)
            if (g = v * h, !(g < c)) {
              if (g > l)
                break;
              w.push(g);
            }
      } else
        for (; d <= p; ++d)
          for (h = n - 1, v = a(d); h >= 1; --h)
            if (g = v * h, !(g < c)) {
              if (g > l)
                break;
              w.push(g);
            }
      w.length * 2 < m && (w = ff(c, l, m));
    } else
      w = ff(d, p, Math.min(p - d, m)).map(a);
    return f ? w.reverse() : w;
  }, t.tickFormat = function(s, u) {
    if (u == null && (u = n === 10 ? ".0e" : ","), typeof u != "function" && (u = Ph(u)), s === 1 / 0)
      return u;
    s == null && (s = 10);
    var c = Math.max(1, n * s / t.ticks().length);
    return function(l) {
      var f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? u(l) : "";
    };
  }, t.nice = function() {
    return r($w(r(), {
      floor: function(s) {
        return a(Math.floor(i(s)));
      },
      ceil: function(s) {
        return a(Math.ceil(i(s)));
      }
    }));
  }, t;
}
function Lw() {
  var e = Ch(Nu()).domain([1, 10]);
  return e.copy = function() {
    return za(e, Lw()).base(e.base());
  }, Yt.apply(e, arguments), e;
}
function iy(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function ay(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Mh(e) {
  var t = 1, r = e(iy(t), ay(t));
  return r.constant = function(n) {
    return arguments.length ? e(iy(t = +n), ay(t)) : t;
  }, un(r);
}
function jw() {
  var e = Mh(Nu());
  return e.copy = function() {
    return za(e, jw()).constant(e.constant());
  }, Yt.apply(e, arguments);
}
function oy(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function tW(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function rW(e) {
  return e < 0 ? -e * e : e * e;
}
function kh(e) {
  var t = e(St, St), r = 1;
  function n() {
    return r === 1 ? e(St, St) : r === 0.5 ? e(tW, rW) : e(oy(r), oy(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, un(t);
}
function Nh() {
  var e = kh(Nu());
  return e.copy = function() {
    return za(e, Nh()).exponent(e.exponent());
  }, Yt.apply(e, arguments), e;
}
function nW() {
  return Nh.apply(null, arguments).exponent(0.5);
}
function sy(e) {
  return Math.sign(e) * e * e;
}
function iW(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Dw() {
  var e = Eh(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = iW(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(sy(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, _s)).map(sy)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Dw(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Yt.apply(i, arguments), un(i);
}
function Fw() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; )
      r[o - 1] = fz(e, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Ba(r, o)];
  }
  return a.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let s of o)
      s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(Va), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Fw().domain(e).range(t).unknown(n);
  }, Yt.apply(a, arguments);
}
function Vw() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(u) {
    return u != null && u <= u ? i[Ba(n, u, 0, r)] : a;
  }
  function s() {
    var u = -1;
    for (n = new Array(r); ++u < r; )
      n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, s()) : [e, t];
  }, o.range = function(u) {
    return arguments.length ? (r = (i = Array.from(u)).length - 1, s()) : i.slice();
  }, o.invertExtent = function(u) {
    var c = i.indexOf(u);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(u) {
    return arguments.length && (a = u), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Vw().domain([e, t]).range(i).unknown(a);
  }, Yt.apply(un(o), arguments);
}
function Bw() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Ba(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Bw().domain(e).range(t).unknown(r);
  }, Yt.apply(i, arguments);
}
var Fc = new Date(), Vc = new Date();
function st(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? new Date() : new Date(+a)), a;
  }
  return i.floor = function(a) {
    return e(a = new Date(+a)), a;
  }, i.ceil = function(a) {
    return e(a = new Date(a - 1)), t(a, 1), e(a), a;
  }, i.round = function(a) {
    var o = i(a), s = i.ceil(a);
    return a - o < s - a ? o : s;
  }, i.offset = function(a, o) {
    return t(a = new Date(+a), o == null ? 1 : Math.floor(o)), a;
  }, i.range = function(a, o, s) {
    var u = [], c;
    if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0))
      return u;
    do
      u.push(c = new Date(+a)), t(a, s), e(a);
    while (c < a && a < o);
    return u;
  }, i.filter = function(a) {
    return st(function(o) {
      if (o >= o)
        for (; e(o), !a(o); )
          o.setTime(o - 1);
    }, function(o, s) {
      if (o >= o)
        if (s < 0)
          for (; ++s <= 0; )
            for (; t(o, -1), !a(o); )
              ;
        else
          for (; --s >= 0; )
            for (; t(o, 1), !a(o); )
              ;
    });
  }, r && (i.count = function(a, o) {
    return Fc.setTime(+a), Vc.setTime(+o), e(Fc), e(Vc), Math.floor(r(Fc, Vc));
  }, i.every = function(a) {
    return a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? function(o) {
      return n(o) % a === 0;
    } : function(o) {
      return i.count(0, o) % a === 0;
    }) : i;
  }), i;
}
var Ps = st(function() {
}, function(e, t) {
  e.setTime(+e + t);
}, function(e, t) {
  return t - e;
});
Ps.every = function(e) {
  return e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? st(function(t) {
    t.setTime(Math.floor(t / e) * e);
  }, function(t, r) {
    t.setTime(+t + r * e);
  }, function(t, r) {
    return (r - t) / e;
  }) : Ps;
};
const aW = Ps;
Ps.range;
const Ar = 1e3, zt = Ar * 60, _r = zt * 60, Tn = _r * 24, Rh = Tn * 7, uy = Tn * 30, Bc = Tn * 365;
var Uw = st(function(e) {
  e.setTime(e - e.getMilliseconds());
}, function(e, t) {
  e.setTime(+e + t * Ar);
}, function(e, t) {
  return (t - e) / Ar;
}, function(e) {
  return e.getUTCSeconds();
});
const Yn = Uw;
Uw.range;
var zw = st(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar);
}, function(e, t) {
  e.setTime(+e + t * zt);
}, function(e, t) {
  return (t - e) / zt;
}, function(e) {
  return e.getMinutes();
});
const Ww = zw;
zw.range;
var qw = st(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar - e.getMinutes() * zt);
}, function(e, t) {
  e.setTime(+e + t * _r);
}, function(e, t) {
  return (t - e) / _r;
}, function(e) {
  return e.getHours();
});
const Hw = qw;
qw.range;
var Gw = st(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * zt) / Tn,
  (e) => e.getDate() - 1
);
const Ru = Gw;
Gw.range;
function Nn(e) {
  return st(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * zt) / Rh;
  });
}
var Iu = Nn(0), Cs = Nn(1), oW = Nn(2), sW = Nn(3), di = Nn(4), uW = Nn(5), cW = Nn(6);
Iu.range;
Cs.range;
oW.range;
sW.range;
di.range;
uW.range;
cW.range;
var Yw = st(function(e) {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setMonth(e.getMonth() + t);
}, function(e, t) {
  return t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12;
}, function(e) {
  return e.getMonth();
});
const Kw = Yw;
Yw.range;
var Ih = st(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Ih.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : st(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
const Pn = Ih;
Ih.range;
var Xw = st(function(e) {
  e.setUTCSeconds(0, 0);
}, function(e, t) {
  e.setTime(+e + t * zt);
}, function(e, t) {
  return (t - e) / zt;
}, function(e) {
  return e.getUTCMinutes();
});
const Zw = Xw;
Xw.range;
var Jw = st(function(e) {
  e.setUTCMinutes(0, 0, 0);
}, function(e, t) {
  e.setTime(+e + t * _r);
}, function(e, t) {
  return (t - e) / _r;
}, function(e) {
  return e.getUTCHours();
});
const Qw = Jw;
Jw.range;
var eS = st(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Tn;
}, function(e) {
  return e.getUTCDate() - 1;
});
const $u = eS;
eS.range;
function Rn(e) {
  return st(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / Rh;
  });
}
var Lu = Rn(0), Ms = Rn(1), lW = Rn(2), fW = Rn(3), hi = Rn(4), dW = Rn(5), hW = Rn(6);
Lu.range;
Ms.range;
lW.range;
fW.range;
hi.range;
dW.range;
hW.range;
var tS = st(function(e) {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCMonth(e.getUTCMonth() + t);
}, function(e, t) {
  return t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12;
}, function(e) {
  return e.getUTCMonth();
});
const rS = tS;
tS.range;
var $h = st(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
$h.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : st(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
const Cn = $h;
$h.range;
function nS(e, t, r, n, i, a) {
  const o = [
    [Yn, 1, Ar],
    [Yn, 5, 5 * Ar],
    [Yn, 15, 15 * Ar],
    [Yn, 30, 30 * Ar],
    [a, 1, zt],
    [a, 5, 5 * zt],
    [a, 15, 15 * zt],
    [a, 30, 30 * zt],
    [i, 1, _r],
    [i, 3, 3 * _r],
    [i, 6, 6 * _r],
    [i, 12, 12 * _r],
    [n, 1, Tn],
    [n, 2, 2 * Tn],
    [r, 1, Rh],
    [t, 1, uy],
    [t, 3, 3 * uy],
    [e, 1, Bc]
  ];
  function s(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : u(c, l, f), v = p ? p.range(c, +l + 1) : [];
    return d ? v.reverse() : v;
  }
  function u(c, l, f) {
    const d = Math.abs(l - c) / f, p = wh(([, , g]) => g).right(o, d);
    if (p === o.length)
      return e.every(df(c / Bc, l / Bc, f));
    if (p === 0)
      return aW.every(Math.max(df(c, l, f), 1));
    const [v, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return v.every(h);
  }
  return [s, u];
}
const [pW, vW] = nS(Cn, rS, Lu, $u, Qw, Zw), [gW, yW] = nS(Pn, Kw, Iu, Ru, Hw, Ww);
function Uc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function zc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Ui(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function mW(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = zi(i), l = Wi(i), f = zi(a), d = Wi(a), p = zi(o), v = Wi(o), h = zi(s), g = Wi(s), m = zi(u), w = Wi(u), x = {
    a: Q,
    A: K,
    b: te,
    B: I,
    c: null,
    d: py,
    e: py,
    f: BW,
    g: ZW,
    G: QW,
    H: DW,
    I: FW,
    j: VW,
    L: iS,
    m: UW,
    M: zW,
    p: V,
    q: X,
    Q: yy,
    s: my,
    S: WW,
    u: qW,
    U: HW,
    V: GW,
    w: YW,
    W: KW,
    x: null,
    X: null,
    y: XW,
    Y: JW,
    Z: eq,
    "%": gy
  }, b = {
    a: H,
    A: $,
    b: W,
    B: ee,
    c: null,
    d: vy,
    e: vy,
    f: iq,
    g: pq,
    G: gq,
    H: tq,
    I: rq,
    j: nq,
    L: oS,
    m: aq,
    M: oq,
    p: se,
    q: J,
    Q: yy,
    s: my,
    S: sq,
    u: uq,
    U: cq,
    V: lq,
    w: fq,
    W: dq,
    x: null,
    X: null,
    y: hq,
    Y: vq,
    Z: yq,
    "%": gy
  }, y = {
    a: M,
    A: C,
    b: k,
    B: N,
    c: j,
    d: dy,
    e: dy,
    f: IW,
    g: fy,
    G: ly,
    H: hy,
    I: hy,
    j: MW,
    L: RW,
    m: CW,
    M: kW,
    p: E,
    q: PW,
    Q: LW,
    s: jW,
    S: NW,
    u: AW,
    U: _W,
    V: OW,
    w: SW,
    W: EW,
    x: L,
    X: R,
    y: fy,
    Y: ly,
    Z: TW,
    "%": $W
  };
  x.x = S(r, x), x.X = S(n, x), x.c = S(t, x), b.x = S(r, b), b.X = S(n, b), b.c = S(t, b);
  function S(D, Y) {
    return function(ie) {
      var T = [], he = -1, q = 0, ye = D.length, Se, dt, nr;
      for (ie instanceof Date || (ie = new Date(+ie)); ++he < ye; )
        D.charCodeAt(he) === 37 && (T.push(D.slice(q, he)), (dt = cy[Se = D.charAt(++he)]) != null ? Se = D.charAt(++he) : dt = Se === "e" ? " " : "0", (nr = Y[Se]) && (Se = nr(ie, dt)), T.push(Se), q = he + 1);
      return T.push(D.slice(q, he)), T.join("");
    };
  }
  function A(D, Y) {
    return function(ie) {
      var T = Ui(1900, void 0, 1), he = _(T, D, ie += "", 0), q, ye;
      if (he != ie.length)
        return null;
      if ("Q" in T)
        return new Date(T.Q);
      if ("s" in T)
        return new Date(T.s * 1e3 + ("L" in T ? T.L : 0));
      if (Y && !("Z" in T) && (T.Z = 0), "p" in T && (T.H = T.H % 12 + T.p * 12), T.m === void 0 && (T.m = "q" in T ? T.q : 0), "V" in T) {
        if (T.V < 1 || T.V > 53)
          return null;
        "w" in T || (T.w = 1), "Z" in T ? (q = zc(Ui(T.y, 0, 1)), ye = q.getUTCDay(), q = ye > 4 || ye === 0 ? Ms.ceil(q) : Ms(q), q = $u.offset(q, (T.V - 1) * 7), T.y = q.getUTCFullYear(), T.m = q.getUTCMonth(), T.d = q.getUTCDate() + (T.w + 6) % 7) : (q = Uc(Ui(T.y, 0, 1)), ye = q.getDay(), q = ye > 4 || ye === 0 ? Cs.ceil(q) : Cs(q), q = Ru.offset(q, (T.V - 1) * 7), T.y = q.getFullYear(), T.m = q.getMonth(), T.d = q.getDate() + (T.w + 6) % 7);
      } else
        ("W" in T || "U" in T) && ("w" in T || (T.w = "u" in T ? T.u % 7 : "W" in T ? 1 : 0), ye = "Z" in T ? zc(Ui(T.y, 0, 1)).getUTCDay() : Uc(Ui(T.y, 0, 1)).getDay(), T.m = 0, T.d = "W" in T ? (T.w + 6) % 7 + T.W * 7 - (ye + 5) % 7 : T.w + T.U * 7 - (ye + 6) % 7);
      return "Z" in T ? (T.H += T.Z / 100 | 0, T.M += T.Z % 100, zc(T)) : Uc(T);
    };
  }
  function _(D, Y, ie, T) {
    for (var he = 0, q = Y.length, ye = ie.length, Se, dt; he < q; ) {
      if (T >= ye)
        return -1;
      if (Se = Y.charCodeAt(he++), Se === 37) {
        if (Se = Y.charAt(he++), dt = y[Se in cy ? Y.charAt(he++) : Se], !dt || (T = dt(D, ie, T)) < 0)
          return -1;
      } else if (Se != ie.charCodeAt(T++))
        return -1;
    }
    return T;
  }
  function E(D, Y, ie) {
    var T = c.exec(Y.slice(ie));
    return T ? (D.p = l.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function M(D, Y, ie) {
    var T = p.exec(Y.slice(ie));
    return T ? (D.w = v.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function C(D, Y, ie) {
    var T = f.exec(Y.slice(ie));
    return T ? (D.w = d.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function k(D, Y, ie) {
    var T = m.exec(Y.slice(ie));
    return T ? (D.m = w.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function N(D, Y, ie) {
    var T = h.exec(Y.slice(ie));
    return T ? (D.m = g.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function j(D, Y, ie) {
    return _(D, t, Y, ie);
  }
  function L(D, Y, ie) {
    return _(D, r, Y, ie);
  }
  function R(D, Y, ie) {
    return _(D, n, Y, ie);
  }
  function Q(D) {
    return o[D.getDay()];
  }
  function K(D) {
    return a[D.getDay()];
  }
  function te(D) {
    return u[D.getMonth()];
  }
  function I(D) {
    return s[D.getMonth()];
  }
  function V(D) {
    return i[+(D.getHours() >= 12)];
  }
  function X(D) {
    return 1 + ~~(D.getMonth() / 3);
  }
  function H(D) {
    return o[D.getUTCDay()];
  }
  function $(D) {
    return a[D.getUTCDay()];
  }
  function W(D) {
    return u[D.getUTCMonth()];
  }
  function ee(D) {
    return s[D.getUTCMonth()];
  }
  function se(D) {
    return i[+(D.getUTCHours() >= 12)];
  }
  function J(D) {
    return 1 + ~~(D.getUTCMonth() / 3);
  }
  return {
    format: function(D) {
      var Y = S(D += "", x);
      return Y.toString = function() {
        return D;
      }, Y;
    },
    parse: function(D) {
      var Y = A(D += "", !1);
      return Y.toString = function() {
        return D;
      }, Y;
    },
    utcFormat: function(D) {
      var Y = S(D += "", b);
      return Y.toString = function() {
        return D;
      }, Y;
    },
    utcParse: function(D) {
      var Y = A(D += "", !0);
      return Y.toString = function() {
        return D;
      }, Y;
    }
  };
}
var cy = { "-": "", _: " ", 0: "0" }, ut = /^\s*\d+/, bW = /^%/, xW = /[\\^$*+?|[\]().{}]/g;
function we(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function wW(e) {
  return e.replace(xW, "\\$&");
}
function zi(e) {
  return new RegExp("^(?:" + e.map(wW).join("|") + ")", "i");
}
function Wi(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function SW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function AW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function _W(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function OW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function EW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function ly(e, t, r) {
  var n = ut.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function fy(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function TW(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function PW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function CW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function dy(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function MW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function hy(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function kW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function NW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function RW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function IW(e, t, r) {
  var n = ut.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function $W(e, t, r) {
  var n = bW.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function LW(e, t, r) {
  var n = ut.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function jW(e, t, r) {
  var n = ut.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function py(e, t) {
  return we(e.getDate(), t, 2);
}
function DW(e, t) {
  return we(e.getHours(), t, 2);
}
function FW(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function VW(e, t) {
  return we(1 + Ru.count(Pn(e), e), t, 3);
}
function iS(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function BW(e, t) {
  return iS(e, t) + "000";
}
function UW(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function zW(e, t) {
  return we(e.getMinutes(), t, 2);
}
function WW(e, t) {
  return we(e.getSeconds(), t, 2);
}
function qW(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function HW(e, t) {
  return we(Iu.count(Pn(e) - 1, e), t, 2);
}
function aS(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? di(e) : di.ceil(e);
}
function GW(e, t) {
  return e = aS(e), we(di.count(Pn(e), e) + (Pn(e).getDay() === 4), t, 2);
}
function YW(e) {
  return e.getDay();
}
function KW(e, t) {
  return we(Cs.count(Pn(e) - 1, e), t, 2);
}
function XW(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function ZW(e, t) {
  return e = aS(e), we(e.getFullYear() % 100, t, 2);
}
function JW(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function QW(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? di(e) : di.ceil(e), we(e.getFullYear() % 1e4, t, 4);
}
function eq(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function vy(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function tq(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function rq(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function nq(e, t) {
  return we(1 + $u.count(Cn(e), e), t, 3);
}
function oS(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function iq(e, t) {
  return oS(e, t) + "000";
}
function aq(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function oq(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function sq(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function uq(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function cq(e, t) {
  return we(Lu.count(Cn(e) - 1, e), t, 2);
}
function sS(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? hi(e) : hi.ceil(e);
}
function lq(e, t) {
  return e = sS(e), we(hi.count(Cn(e), e) + (Cn(e).getUTCDay() === 4), t, 2);
}
function fq(e) {
  return e.getUTCDay();
}
function dq(e, t) {
  return we(Ms.count(Cn(e) - 1, e), t, 2);
}
function hq(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function pq(e, t) {
  return e = sS(e), we(e.getUTCFullYear() % 100, t, 2);
}
function vq(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function gq(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? hi(e) : hi.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4);
}
function yq() {
  return "+0000";
}
function gy() {
  return "%";
}
function yy(e) {
  return +e;
}
function my(e) {
  return Math.floor(+e / 1e3);
}
var Wn, uS, cS;
mq({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function mq(e) {
  return Wn = mW(e), uS = Wn.format, Wn.parse, cS = Wn.utcFormat, Wn.utcParse, Wn;
}
function bq(e) {
  return new Date(e);
}
function xq(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Lh(e, t, r, n, i, a, o, s, u, c) {
  var l = Eh(), f = l.invert, d = l.domain, p = c(".%L"), v = c(":%S"), h = c("%I:%M"), g = c("%I %p"), m = c("%a %d"), w = c("%b %d"), x = c("%B"), b = c("%Y");
  function y(S) {
    return (u(S) < S ? p : s(S) < S ? v : o(S) < S ? h : a(S) < S ? g : n(S) < S ? i(S) < S ? m : w : r(S) < S ? x : b)(S);
  }
  return l.invert = function(S) {
    return new Date(f(S));
  }, l.domain = function(S) {
    return arguments.length ? d(Array.from(S, xq)) : d().map(bq);
  }, l.ticks = function(S) {
    var A = d();
    return e(A[0], A[A.length - 1], S == null ? 10 : S);
  }, l.tickFormat = function(S, A) {
    return A == null ? y : c(A);
  }, l.nice = function(S) {
    var A = d();
    return (!S || typeof S.range != "function") && (S = t(A[0], A[A.length - 1], S == null ? 10 : S)), S ? d($w(A, S)) : l;
  }, l.copy = function() {
    return za(l, Lh(e, t, r, n, i, a, o, s, u, c));
  }, l;
}
function wq() {
  return Yt.apply(Lh(gW, yW, Pn, Kw, Iu, Ru, Hw, Ww, Yn, uS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Sq() {
  return Yt.apply(Lh(pW, vW, Cn, rS, Lu, $u, Qw, Zw, Yn, cS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function ju() {
  var e = 0, t = 1, r, n, i, a, o = St, s = !1, u;
  function c(f) {
    return f == null || isNaN(f = +f) ? u : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, s ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (s = !!f, c) : s;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function l(f) {
    return function(d) {
      var p, v;
      return arguments.length ? ([p, v] = d, o = f(p, v), c) : [o(0), o(1)];
    };
  }
  return c.range = l(Ci), c.rangeRound = l(Oh), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function cn(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function lS() {
  var e = un(ju()(St));
  return e.copy = function() {
    return cn(e, lS());
  }, Ir.apply(e, arguments);
}
function fS() {
  var e = Ch(ju()).domain([1, 10]);
  return e.copy = function() {
    return cn(e, fS()).base(e.base());
  }, Ir.apply(e, arguments);
}
function dS() {
  var e = Mh(ju());
  return e.copy = function() {
    return cn(e, dS()).constant(e.constant());
  }, Ir.apply(e, arguments);
}
function jh() {
  var e = kh(ju());
  return e.copy = function() {
    return cn(e, jh()).exponent(e.exponent());
  }, Ir.apply(e, arguments);
}
function Aq() {
  return jh.apply(null, arguments).exponent(0.5);
}
function hS() {
  var e = [], t = St;
  function r(n) {
    if (n != null && !isNaN(n = +n))
      return t((Ba(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let i of n)
      i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Va), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => lz(e, a / n));
  }, r.copy = function() {
    return hS(t).domain(e);
  }, Ir.apply(r, arguments);
}
function Du() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, u, c = St, l, f = !1, d;
  function p(h) {
    return isNaN(h = +h) ? d : (h = 0.5 + ((h = +l(h)) - a) * (n * h < n * a ? s : u), c(f ? Math.max(0, Math.min(1, h)) : h));
  }
  p.domain = function(h) {
    return arguments.length ? ([e, t, r] = h, i = l(e = +e), a = l(t = +t), o = l(r = +r), s = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(h) {
    return arguments.length ? (f = !!h, p) : f;
  }, p.interpolator = function(h) {
    return arguments.length ? (c = h, p) : c;
  };
  function v(h) {
    return function(g) {
      var m, w, x;
      return arguments.length ? ([m, w, x] = g, c = Iz(h, [m, w, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = v(Ci), p.rangeRound = v(Oh), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, i = h(e), a = h(t), o = h(r), s = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p;
  };
}
function pS() {
  var e = un(Du()(St));
  return e.copy = function() {
    return cn(e, pS());
  }, Ir.apply(e, arguments);
}
function vS() {
  var e = Ch(Du()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return cn(e, vS()).base(e.base());
  }, Ir.apply(e, arguments);
}
function gS() {
  var e = Mh(Du());
  return e.copy = function() {
    return cn(e, gS()).constant(e.constant());
  }, Ir.apply(e, arguments);
}
function Dh() {
  var e = kh(Du());
  return e.copy = function() {
    return cn(e, Dh()).exponent(e.exponent());
  }, Ir.apply(e, arguments);
}
function _q() {
  return Dh.apply(null, arguments).exponent(0.5);
}
const by = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: xa,
  scalePoint: ia,
  scaleIdentity: Iw,
  scaleLinear: Ts,
  scaleLog: Lw,
  scaleSymlog: jw,
  scaleOrdinal: Sh,
  scaleImplicit: hf,
  scalePow: Nh,
  scaleSqrt: nW,
  scaleRadial: Dw,
  scaleQuantile: Fw,
  scaleQuantize: Vw,
  scaleThreshold: Bw,
  scaleTime: wq,
  scaleUtc: Sq,
  scaleSequential: lS,
  scaleSequentialLog: fS,
  scaleSequentialPow: jh,
  scaleSequentialSqrt: Aq,
  scaleSequentialSymlog: dS,
  scaleSequentialQuantile: hS,
  scaleDiverging: pS,
  scaleDivergingLog: vS,
  scaleDivergingPow: Dh,
  scaleDivergingSqrt: _q,
  scaleDivergingSymlog: gS,
  tickFormat: Rw
}, Symbol.toStringTag, { value: "Module" }));
function xy(e) {
  return Pq(e) || Tq(e) || Eq(e) || Oq();
}
function Oq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eq(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return yf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yf(e, t);
  }
}
function Tq(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Pq(e) {
  if (Array.isArray(e))
    return yf(e);
}
function yf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wy(Object(r), !0).forEach(function(n) {
      ti(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ti(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Nt(e, t, r) {
  return le(e) || le(t) ? r : nt(t) ? Et(e, t, r) : de(t) ? t(e) : r;
}
function ks(e, t, r, n) {
  var i = kU(e, function(s) {
    return Nt(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return re(s) || parseFloat(s);
    });
    return a.length ? [Cu(a), Pu(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !le(s);
  }) : i;
  return o.map(function(s) {
    return nt(s) || s instanceof Date ? s : "";
  });
}
var Cq = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s > 1) {
    if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
      for (var u = a.range, c = 0; c < s; c++) {
        var l = c > 0 ? i[c - 1].coordinate : i[s - 1].coordinate, f = i[c].coordinate, d = c >= s - 1 ? i[0].coordinate : i[c + 1].coordinate, p = void 0;
        if (_t(f - l) !== _t(d - f)) {
          var v = [];
          if (_t(d - f) === _t(u[1] - u[0])) {
            p = d;
            var h = f + u[1] - u[0];
            v[0] = Math.min(h, (h + l) / 2), v[1] = Math.max(h, (h + l) / 2);
          } else {
            p = l;
            var g = d + u[1] - u[0];
            v[0] = Math.min(f, (g + f) / 2), v[1] = Math.max(f, (g + f) / 2);
          }
          var m = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
          if (t > m[0] && t <= m[1] || t >= v[0] && t <= v[1]) {
            o = i[c].index;
            break;
          }
        } else {
          var w = Math.min(l, d), x = Math.max(l, d);
          if (t > (w + f) / 2 && t <= (x + f) / 2) {
            o = i[c].index;
            break;
          }
        }
      }
    else
      for (var b = 0; b < s; b++)
        if (b === 0 && t <= (n[b].coordinate + n[b + 1].coordinate) / 2 || b > 0 && b < s - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2 && t <= (n[b].coordinate + n[b + 1].coordinate) / 2 || b === s - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2) {
          o = n[b].index;
          break;
        }
  } else
    o = 0;
  return o;
}, Fh = function(t) {
  var r = t, n = r.type.displayName, i = t.props, a = i.stroke, o = i.fill, s;
  switch (n) {
    case "Line":
      s = a;
      break;
    case "Area":
    case "Radar":
      s = a && a !== "none" ? a : o;
      break;
    default:
      s = o;
      break;
  }
  return s;
}, yS = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Hr(r, ga.displayName);
  if (!o)
    return null;
  var s;
  return o.props && o.props.payload ? s = o.props && o.props.payload : a === "children" ? s = (n || []).reduce(function(u, c) {
    var l = c.item, f = c.props, d = f.sectors || f.data || [];
    return u.concat(d.map(function(p) {
      return {
        type: o.props.iconType || l.props.legendType,
        value: p.name,
        color: p.fill,
        payload: p
      };
    }));
  }, []) : s = (n || []).map(function(u) {
    var c = u.item, l = c.props, f = l.dataKey, d = l.name, p = l.legendType, v = l.hide;
    return {
      inactive: v,
      dataKey: f,
      type: o.props.iconType || p || "square",
      color: Fh(c),
      value: d || f,
      payload: c.props
    };
  }), wt(wt(wt({}, o.props), ga.getWithHeight(o, i)), {}, {
    payload: s,
    item: o
  });
}, Mq = function(t) {
  var r = t.barSize, n = t.stackGroups, i = n === void 0 ? {} : n;
  if (!i)
    return {};
  for (var a = {}, o = Object.keys(i), s = 0, u = o.length; s < u; s++)
    for (var c = i[o[s]].stackGroups, l = Object.keys(c), f = 0, d = l.length; f < d; f++) {
      var p = c[l[f]], v = p.items, h = p.cateAxisId, g = v.filter(function(x) {
        return Zr(x.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var m = g[0].props.barSize, w = g[0].props[h];
        a[w] || (a[w] = []), a[w].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: le(m) ? r : m
        });
      }
    }
  return a;
}, kq = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, u = o.length;
  if (u < 1)
    return null;
  var c = Rt(r, i, 0, !0), l;
  if (o[0].barSize === +o[0].barSize) {
    var f = !1, d = i / u, p = o.reduce(function(x, b) {
      return x + b.barSize || 0;
    }, 0);
    p += (u - 1) * c, p >= i && (p -= (u - 1) * c, c = 0), p >= i && d > 0 && (f = !0, d *= 0.9, p = u * d);
    var v = (i - p) / 2 >> 0, h = {
      offset: v - c,
      size: 0
    };
    l = o.reduce(function(x, b) {
      var y = [].concat(xy(x), [{
        item: b.item,
        position: {
          offset: h.offset + h.size + c,
          size: f ? d : b.barSize
        }
      }]);
      return h = y[y.length - 1].position, b.stackList && b.stackList.length && b.stackList.forEach(function(S) {
        y.push({
          item: S,
          position: h
        });
      }), y;
    }, []);
  } else {
    var g = Rt(n, i, 0, !0);
    i - 2 * g - (u - 1) * c <= 0 && (c = 0);
    var m = (i - 2 * g - (u - 1) * c) / u;
    m > 1 && (m >>= 0);
    var w = s === +s ? Math.min(m, s) : m;
    l = o.reduce(function(x, b, y) {
      var S = [].concat(xy(x), [{
        item: b.item,
        position: {
          offset: g + (m + c) * y + (m - w) / 2,
          size: w
        }
      }]);
      return b.stackList && b.stackList.length && b.stackList.forEach(function(A) {
        S.push({
          item: A,
          position: S[S.length - 1].position
        });
      }), S;
    }, []);
  }
  return l;
}, Nq = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = yS({
    children: a,
    legendWidth: u
  }), l = t;
  if (c) {
    var f = i || {}, d = c.align, p = c.verticalAlign, v = c.layout;
    (v === "vertical" || v === "horizontal" && p === "center") && re(t[d]) && (l = wt(wt({}, t), {}, ti({}, d, l[d] + (f.width || 0)))), (v === "horizontal" || v === "vertical" && d === "center") && re(t[p]) && (l = wt(wt({}, t), {}, ti({}, p, l[p] + (f.height || 0))));
  }
  return l;
}, Rq = function(t, r, n) {
  return le(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, mS = function(t, r, n, i, a) {
  var o = r.props.children, s = dr(o, "ErrorBar").filter(function(c) {
    return Rq(i, a, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = Nt(l, n, 0), d = Re(f) ? [Cu(f), Pu(f)] : [f, f], p = u.reduce(function(v, h) {
        var g = Nt(l, h, 0), m = d[0] - Math.abs(Re(g) ? g[0] : g), w = d[1] + Math.abs(Re(g) ? g[1] : g);
        return [Math.min(m, v[0]), Math.max(w, v[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, Iq = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return mS(t, s, n, a, i);
  }).filter(function(s) {
    return !le(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, bS = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && mS(t, u, c, i) || ks(t, c, n, a);
  });
  if (n === "number")
    return o.reduce(function(u, c) {
      return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
    }, [1 / 0, -1 / 0]);
  var s = {};
  return o.reduce(function(u, c) {
    for (var l = 0, f = c.length; l < f; l++)
      s[c[l]] || (s[c[l]] = !0, u.push(c[l]));
    return u;
  }, []);
}, xS = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, Sy = function(t, r, n) {
  var i, a, o = t.map(function(s) {
    return s.coordinate === r && (i = !0), s.coordinate === n && (a = !0), s.coordinate;
  });
  return i || o.push(r), a || o.push(n), o;
}, Fr = function(t, r, n) {
  if (!t)
    return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, u = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / u : 0;
  return c = t.axisType === "angleAxis" ? _t(s[0] - s[1]) * 2 * c : c, r && (t.ticks || t.niceTicks) ? (t.ticks || t.niceTicks).map(function(l) {
    var f = a ? a.indexOf(l) : l;
    return {
      coordinate: i(f) + c,
      value: l,
      offset: c
    };
  }) : t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, f) {
    return {
      coordinate: i(l) + c,
      value: l,
      index: f,
      offset: c
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: i(l) + c,
      value: l,
      offset: c
    };
  }) : i.domain().map(function(l, f) {
    return {
      coordinate: i(l) + c,
      value: a ? a[l] : l,
      index: f,
      offset: c
    };
  });
}, lo = function(t, r, n) {
  var i;
  return de(n) ? i = n : de(r) && (i = r), de(t) || i ? function(a, o, s, u) {
    de(t) && t(a, o, s, u), de(i) && i(a, o, s, u);
  } : null;
}, $q = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: xa(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Ts(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: ia(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: xa(),
      realScaleType: "band"
    } : {
      scale: Ts(),
      realScaleType: "linear"
    };
  if (Da(i)) {
    var u = "scale".concat(mu(i));
    return {
      scale: (by[u] || ia)(),
      realScaleType: by[u] ? u : "point"
    };
  }
  return de(i) ? {
    scale: i
  } : {
    scale: ia(),
    realScaleType: "point"
  };
}, Ay = 1e-4, Lq = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - Ay, o = Math.max(i[0], i[1]) + Ay, s = t(r[0]), u = t(r[n - 1]);
    (s < a || s > o || u < a || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, jq = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var u = Au(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + u, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, Dq = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = Au(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, Fq = {
  sign: jq,
  expand: Z8,
  none: ui,
  silhouette: J8,
  wiggle: Q8,
  positive: Dq
}, Vq = function(t, r, n) {
  var i = r.map(function(o) {
    return o.props.dataKey;
  }), a = X8().keys(i).value(function(o, s) {
    return +Nt(o, s, 0);
  }).order(kl).offset(Fq[n]);
  return a(t);
}, Bq = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, u = s.reduce(function(c, l) {
    var f = l.props, d = f.stackId, p = f.hide;
    if (p)
      return c;
    var v = l.props[n], h = c[v] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (nt(d)) {
      var g = h.stackGroups[d] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      g.items.push(l), h.hasStack = !0, h.stackGroups[d] = g;
    } else
      h.stackGroups[_u("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [l]
      };
    return wt(wt({}, c), {}, ti({}, v, h));
  }, {});
  return Object.keys(u).reduce(function(c, l) {
    var f = u[l];
    return f.hasStack && (f.stackGroups = Object.keys(f.stackGroups).reduce(function(d, p) {
      var v = f.stackGroups[p];
      return wt(wt({}, d), {}, ti({}, p, {
        numericAxisId: n,
        cateAxisId: i,
        items: v.items,
        stackedData: Vq(t, v.items, a)
      }));
    }, {})), wt(wt({}, c), {}, ti({}, l, f));
  }, {});
}, Uq = function(t, r) {
  return r === "number" ? [Cu(t), Pu(t)] : t;
}, zq = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = iz(c, a, s);
    return t.domain(Uq(l, i)), {
      niceTicks: l
    };
  }
  if (a && i === "number") {
    var f = t.domain(), d = az(f, a, s);
    return {
      niceTicks: d
    };
  }
  return null;
}, Wq = function(t, r) {
  var n = t.props.stackId;
  if (nt(n)) {
    var i = r[n];
    if (i && i.items.length) {
      for (var a = -1, o = 0, s = i.items.length; o < s; o++)
        if (i.items[o] === t) {
          a = o;
          break;
        }
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, qq = function(t) {
  return t.reduce(function(r, n) {
    return [Cu(n.concat([r[0]]).filter(re)), Pu(n.concat([r[1]]).filter(re))];
  }, [1 / 0, -1 / 0]);
}, wS = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, u = s.reduce(function(c, l) {
      var f = qq(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], i[0]), Math.max(u[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, _y = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Oy = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, SS = function(t, r, n) {
  if (de(t))
    return t(r, n);
  if (!Re(t))
    return r;
  var i = [];
  if (re(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (_y.test(t[0])) {
    var a = +_y.exec(t[0])[1];
    i[0] = r[0] - a;
  } else
    de(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (re(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Oy.test(t[1])) {
    var o = +Oy.exec(t[1])[1];
    i[1] = r[1] + o;
  } else
    de(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, mf = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = vh(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, u = a.length; s < u; s++) {
      var c = a[s], l = a[s - 1];
      o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Ey = function(t, r, n) {
  return !t || !t.length || cw(t, Et(n, "type.defaultProps.domain")) ? r : t;
}, Hq = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType;
  return wt(wt({}, ge(t)), {}, {
    dataKey: i,
    unit: o,
    formatter: s,
    name: a || i,
    color: Fh(t),
    value: Nt(r, i),
    type: u,
    payload: r,
    chartType: c
  });
};
function Ty(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ty(Object(r), !0).forEach(function(n) {
      AS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gq(e, t) {
  return Zq(e) || Xq(e, t) || Kq(e, t) || Yq();
}
function Yq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kq(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Py(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Py(e, t);
  }
}
function Py(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Xq(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function Zq(e) {
  if (Array.isArray(e))
    return e;
}
var Ns = Math.PI / 180, Jq = function(t) {
  return t * 180 / Math.PI;
}, Be = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Ns * i) * n,
    y: r + Math.sin(-Ns * i) * n
  };
}, _S = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, Qq = function(t, r, n, i, a) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, l = Rt(t.cx, o, o / 2), f = Rt(t.cy, s, s / 2), d = _S(o, s, n), p = Rt(t.innerRadius, d, 0), v = Rt(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(g, m) {
    var w = r[m], x = w.domain, b = w.reversed, y;
    if (le(w.range))
      i === "angleAxis" ? y = [u, c] : i === "radiusAxis" && (y = [p, v]), b && (y = [y[1], y[0]]);
    else {
      y = w.range;
      var S = y, A = Gq(S, 2);
      u = A[0], c = A[1];
    }
    var _ = $q(w, a), E = _.realScaleType, M = _.scale;
    M.domain(x).range(y), Lq(M);
    var C = zq(M, Sr(Sr({}, w), {}, {
      realScaleType: E
    })), k = Sr(Sr(Sr({}, w), C), {}, {
      range: y,
      radius: v,
      realScaleType: E,
      scale: M,
      cx: l,
      cy: f,
      innerRadius: p,
      outerRadius: v,
      startAngle: u,
      endAngle: c
    });
    return Sr(Sr({}, g), {}, AS({}, m, k));
  }, {});
}, eH = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, tH = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = eH({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (s <= 0)
    return {
      radius: s
    };
  var u = (n - a) / s, c = Math.acos(u);
  return i > o && (c = 2 * Math.PI - c), {
    radius: s,
    angle: Jq(c),
    angleInRadian: c
  };
}, rH = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, nH = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Cy = function(t, r) {
  var n = t.x, i = t.y, a = tH({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = rH(r), f = l.startAngle, d = l.endAngle, p = s, v;
  if (f <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < f; )
      p += 360;
    v = p >= f && p <= d;
  } else {
    for (; p > f; )
      p -= 360;
    for (; p < d; )
      p += 360;
    v = p >= d && p <= f;
  }
  return v ? Sr(Sr({}, r), {}, {
    radius: o,
    angle: nH(p, r)
  }) : null;
};
function iH(e) {
  return uH(e) || sH(e) || oH(e) || aH();
}
function aH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oH(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return bf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bf(e, t);
  }
}
function sH(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function uH(e) {
  if (Array.isArray(e))
    return bf(e);
}
function bf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function My(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? My(Object(r), !0).forEach(function(n) {
      cH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : My(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cH(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var lH = function(t) {
  var r = t.value, n = t.formatter, i = le(t.children) ? r : t.children;
  return de(n) ? n(i) : i;
}, fH = function(t, r) {
  var n = _t(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, dH = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, u = a, c = u.cx, l = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, v = u.endAngle, h = u.clockWise, g = (f + d) / 2, m = fH(p, v), w = m >= 0 ? 1 : -1, x, b;
  i === "insideStart" ? (x = p + w * o, b = h) : i === "insideEnd" ? (x = v - w * o, b = !h) : i === "end" && (x = v + w * o, b = h), b = m <= 0 ? b : !b;
  var y = Be(c, l, g, x), S = Be(c, l, g, x + (b ? 1 : -1) * 359), A = "M".concat(y.x, ",").concat(y.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(S.x, ",").concat(S.y), _ = le(t.id) ? _u("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ z("text", {
    ...n,
    dominantBaseline: "central",
    className: We("recharts-radial-bar-label", s),
    children: [/* @__PURE__ */ O("defs", {
      children: /* @__PURE__ */ O("path", {
        id: _,
        d: A
      })
    }), /* @__PURE__ */ O("textPath", {
      xlinkHref: "#".concat(_),
      children: r
    })]
  });
}, hH = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, s = a.cy, u = a.innerRadius, c = a.outerRadius, l = a.startAngle, f = a.endAngle, d = (l + f) / 2;
  if (i === "outside") {
    var p = Be(o, s, c + n, d), v = p.x, h = p.y;
    return {
      x: v,
      y: h,
      textAnchor: v >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var g = (u + c) / 2, m = Be(o, s, g, d), w = m.x, x = m.y;
  return {
    x: w,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, pH = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, u = o.y, c = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * i, p = f > 0 ? "end" : "start", v = f > 0 ? "start" : "end", h = c >= 0 ? 1 : -1, g = h * i, m = h > 0 ? "end" : "start", w = h > 0 ? "start" : "end";
  if (a === "top") {
    var x = {
      x: s + c / 2,
      y: u - f * i,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return at(at({}, x), n ? {
      height: Math.max(u - n.y, 0),
      width: c
    } : {});
  }
  if (a === "bottom") {
    var b = {
      x: s + c / 2,
      y: u + l + d,
      textAnchor: "middle",
      verticalAnchor: v
    };
    return at(at({}, b), n ? {
      height: Math.max(n.y + n.height - (u + l), 0),
      width: c
    } : {});
  }
  if (a === "left") {
    var y = {
      x: s - g,
      y: u + l / 2,
      textAnchor: m,
      verticalAnchor: "middle"
    };
    return at(at({}, y), n ? {
      width: Math.max(y.x - n.x, 0),
      height: l
    } : {});
  }
  if (a === "right") {
    var S = {
      x: s + c + g,
      y: u + l / 2,
      textAnchor: w,
      verticalAnchor: "middle"
    };
    return at(at({}, S), n ? {
      width: Math.max(n.x + n.width - S.x, 0),
      height: l
    } : {});
  }
  var A = n ? {
    width: c,
    height: l
  } : {};
  return a === "insideLeft" ? at({
    x: s + g,
    y: u + l / 2,
    textAnchor: w,
    verticalAnchor: "middle"
  }, A) : a === "insideRight" ? at({
    x: s + c - g,
    y: u + l / 2,
    textAnchor: m,
    verticalAnchor: "middle"
  }, A) : a === "insideTop" ? at({
    x: s + c / 2,
    y: u + d,
    textAnchor: "middle",
    verticalAnchor: v
  }, A) : a === "insideBottom" ? at({
    x: s + c / 2,
    y: u + l - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, A) : a === "insideTopLeft" ? at({
    x: s + g,
    y: u + d,
    textAnchor: w,
    verticalAnchor: v
  }, A) : a === "insideTopRight" ? at({
    x: s + c - g,
    y: u + d,
    textAnchor: m,
    verticalAnchor: v
  }, A) : a === "insideBottomLeft" ? at({
    x: s + g,
    y: u + l - d,
    textAnchor: w,
    verticalAnchor: p
  }, A) : a === "insideBottomRight" ? at({
    x: s + c - g,
    y: u + l - d,
    textAnchor: m,
    verticalAnchor: p
  }, A) : Dt(a) && (re(a.x) || $l(a.x)) && (re(a.y) || $l(a.y)) ? at({
    x: s + Rt(a.x, c),
    y: u + Rt(a.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, A) : at({
    x: s + c / 2,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, A);
}, vH = function(t) {
  return re(t.cx);
};
function rt(e) {
  var t = e.viewBox, r = e.position, n = e.value, i = e.children, a = e.content, o = e.className, s = o === void 0 ? "" : o, u = e.textBreakAll;
  if (!t || le(n) && le(i) && !/* @__PURE__ */ Yr(a) && !de(a))
    return null;
  if (/* @__PURE__ */ Yr(a))
    return /* @__PURE__ */ vt(a, e);
  var c;
  if (de(a)) {
    if (c = /* @__PURE__ */ Ot(a, e), /* @__PURE__ */ Yr(c))
      return c;
  } else
    c = lH(e);
  var l = vH(t), f = ge(e, !0);
  if (l && (r === "insideStart" || r === "insideEnd" || r === "end"))
    return dH(e, c, f);
  var d = l ? hH(e) : pH(e);
  return /* @__PURE__ */ O(tn, {
    className: We("recharts-label", s),
    ...f,
    ...d,
    breakAll: u,
    children: c
  });
}
rt.displayName = "Label";
rt.defaultProps = {
  offset: 5
};
var OS = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, u = t.radius, c = t.innerRadius, l = t.outerRadius, f = t.x, d = t.y, p = t.top, v = t.left, h = t.width, g = t.height, m = t.clockWise, w = t.labelViewBox;
  if (w)
    return w;
  if (re(h) && re(g)) {
    if (re(f) && re(d))
      return {
        x: f,
        y: d,
        width: h,
        height: g
      };
    if (re(p) && re(v))
      return {
        x: p,
        y: v,
        width: h,
        height: g
      };
  }
  return re(f) && re(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : re(r) && re(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: c || 0,
    outerRadius: l || u || s || 0,
    clockWise: m
  } : t.viewBox ? t.viewBox : {};
}, gH = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ O(rt, {
    viewBox: r
  }, "label-implicit") : nt(t) ? /* @__PURE__ */ O(rt, {
    viewBox: r,
    value: t
  }, "label-implicit") : /* @__PURE__ */ Yr(t) ? t.type === rt ? /* @__PURE__ */ vt(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ O(rt, {
    content: t,
    viewBox: r
  }, "label-implicit") : de(t) ? /* @__PURE__ */ O(rt, {
    content: t,
    viewBox: r
  }, "label-implicit") : Dt(t) ? /* @__PURE__ */ Ot(rt, {
    viewBox: r,
    ...t,
    key: "label-implicit"
  }) : null : null;
}, yH = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = OS(t), o = dr(i, rt.displayName).map(function(u, c) {
    return /* @__PURE__ */ vt(u, {
      viewBox: r || a,
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = gH(t.label, r || a);
  return [s].concat(iH(o));
};
rt.parseViewBox = OS;
rt.renderCallByParent = yH;
function mH(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var bH = mH;
function xH(e) {
  return _H(e) || AH(e) || SH(e) || wH();
}
function wH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SH(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return xf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return xf(e, t);
  }
}
function AH(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function _H(e) {
  if (Array.isArray(e))
    return xf(e);
}
function xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ky(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ny(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ky(Object(r), !0).forEach(function(n) {
      OH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OH(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function EH(e, t) {
  if (e == null)
    return {};
  var r = TH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function TH(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var PH = {
  valueAccessor: function(t) {
    return Re(t.value) ? bH(t.value) : t.value;
  }
};
function Jr(e) {
  var t = e.data, r = e.valueAccessor, n = e.dataKey, i = e.clockWise, a = e.id, o = e.textBreakAll, s = EH(e, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]);
  return !t || !t.length ? null : /* @__PURE__ */ O(Xe, {
    className: "recharts-label-list",
    children: t.map(function(u, c) {
      var l = le(n) ? r(u, c) : Nt(u && u.payload, n), f = le(a) ? {} : {
        id: "".concat(a, "-").concat(c)
      };
      return /* @__PURE__ */ Ot(rt, {
        ...ge(u, !0),
        ...s,
        ...f,
        parentViewBox: u.parentViewBox,
        index: c,
        value: l,
        textBreakAll: o,
        viewBox: rt.parseViewBox(le(i) ? u : Ny(Ny({}, u), {}, {
          clockWise: i
        })),
        key: "label-".concat(c)
      });
    })
  });
}
Jr.displayName = "LabelList";
function CH(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ O(Jr, {
    data: t
  }, "labelList-implicit") : /* @__PURE__ */ me.isValidElement(e) || de(e) ? /* @__PURE__ */ O(Jr, {
    data: t,
    content: e
  }, "labelList-implicit") : Dt(e) ? /* @__PURE__ */ Ot(Jr, {
    data: t,
    ...e,
    key: "labelList-implicit"
  }) : null : null;
}
function MH(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = dr(n, Jr.displayName).map(function(o, s) {
    return /* @__PURE__ */ vt(o, {
      data: t,
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = CH(e.label, t);
  return [a].concat(xH(i));
}
Jr.renderCallByParent = MH;
Jr.defaultProps = PH;
function No(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? No = function(r) {
    return typeof r;
  } : No = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, No(e);
}
function kH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ry(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function NH(e, t, r) {
  return t && Ry(e.prototype, t), r && Ry(e, r), e;
}
function RH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && wf(e, t);
}
function wf(e, t) {
  return wf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, wf(e, t);
}
function IH(e) {
  var t = jH();
  return function() {
    var n = Rs(e), i;
    if (t) {
      var a = Rs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return $H(this, i);
  };
}
function $H(e, t) {
  return t && (No(t) === "object" || typeof t == "function") ? t : LH(e);
}
function LH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rs(e) {
  return Rs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Rs(e);
}
var DH = function(t, r) {
  var n = _t(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, fo = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, l = u * (s ? 1 : -1) + i, f = Math.asin(u / l) / Ns, d = c ? a : a + o * f, p = Be(r, n, l, d), v = Be(r, n, i, d), h = c ? a - o * f : a, g = Be(r, n, l * Math.cos(f * Ns), h);
  return {
    center: p,
    circleTangency: v,
    lineTangency: g,
    theta: f
  };
}, ES = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, u = DH(o, s), c = o + u, l = Be(r, n, a, o), f = Be(r, n, a, c), d = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(o > c), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (i > 0) {
    var p = Be(r, n, i, o), v = Be(r, n, i, c);
    d += "L ".concat(v.x, ",").concat(v.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(o <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, FH = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, l = t.endAngle, f = _t(l - c), d = fo({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, v = d.lineTangency, h = d.theta, g = fo({
    cx: r,
    cy: n,
    radius: a,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: u
  }), m = g.circleTangency, w = g.lineTangency, x = g.theta, b = u ? Math.abs(c - l) : Math.abs(c - l) - h - x;
  if (b < 0)
    return s ? "M ".concat(v.x, ",").concat(v.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : ES({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: c,
      endAngle: l
    });
  var y = "M ".concat(v.x, ",").concat(v.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(b > 180), ",").concat(+(f < 0), ",").concat(m.x, ",").concat(m.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (i > 0) {
    var S = fo({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), A = S.circleTangency, _ = S.lineTangency, E = S.theta, M = fo({
      cx: r,
      cy: n,
      radius: i,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), C = M.circleTangency, k = M.lineTangency, N = M.theta, j = u ? Math.abs(c - l) : Math.abs(c - l) - E - N;
    if (j < 0 && o === 0)
      return "".concat(y, "L").concat(r, ",").concat(n, "Z");
    y += "L".concat(k.x, ",").concat(k.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(j > 180), ",").concat(+(f > 0), ",").concat(A.x, ",").concat(A.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, "Z");
  } else
    y += "L".concat(r, ",").concat(n, "Z");
  return y;
}, Is = /* @__PURE__ */ function(e) {
  RH(r, e);
  var t = IH(r);
  function r() {
    return kH(this, r), t.apply(this, arguments);
  }
  return NH(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.innerRadius, u = i.outerRadius, c = i.cornerRadius, l = i.forceCornerRadius, f = i.cornerIsExternal, d = i.startAngle, p = i.endAngle, v = i.className;
      if (u < s || d === p)
        return null;
      var h = We("recharts-sector", v), g = u - s, m = Rt(c, g, 0, !0), w;
      return m > 0 && Math.abs(d - p) < 360 ? w = FH({
        cx: a,
        cy: o,
        innerRadius: s,
        outerRadius: u,
        cornerRadius: Math.min(m, g / 2),
        forceCornerRadius: l,
        cornerIsExternal: f,
        startAngle: d,
        endAngle: p
      }) : w = ES({
        cx: a,
        cy: o,
        innerRadius: s,
        outerRadius: u,
        startAngle: d,
        endAngle: p
      }), /* @__PURE__ */ O("path", {
        ...ge(this.props, !0),
        className: h,
        d: w
      });
    }
  }]), r;
}(mt);
Is.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
};
function Ro(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ro = function(r) {
    return typeof r;
  } : Ro = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ro(e);
}
function Iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iy(Object(r), !0).forEach(function(n) {
      VH(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VH(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function BH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ly(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function UH(e, t, r) {
  return t && Ly(e.prototype, t), r && Ly(e, r), e;
}
function zH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Sf(e, t);
}
function Sf(e, t) {
  return Sf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Sf(e, t);
}
function WH(e) {
  var t = GH();
  return function() {
    var n = $s(e), i;
    if (t) {
      var a = $s(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return qH(this, i);
  };
}
function qH(e, t) {
  return t && (Ro(t) === "object" || typeof t == "function") ? t : HH(e);
}
function HH(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function GH() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $s(e) {
  return $s = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $s(e);
}
var jy = {
  curveBasisClosed: F8,
  curveBasisOpen: V8,
  curveBasis: D8,
  curveLinearClosed: B8,
  curveLinear: wu,
  curveMonotoneX: U8,
  curveMonotoneY: z8,
  curveNatural: W8,
  curveStep: q8,
  curveStepAfter: G8,
  curveStepBefore: H8
}, ho = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, qi = function(t) {
  return t.x;
}, Hi = function(t) {
  return t.y;
}, YH = function(t, r) {
  if (de(t))
    return t;
  var n = "curve".concat(mu(t));
  return n === "curveMonotone" && r ? jy["".concat(n).concat(r === "vertical" ? "Y" : "X")] : jy[n] || wu;
}, Ls = /* @__PURE__ */ function(e) {
  zH(r, e);
  var t = WH(r);
  function r() {
    return BH(this, r), t.apply(this, arguments);
  }
  return UH(r, [{
    key: "getPath",
    value: function() {
      var i = this.props, a = i.type, o = i.points, s = i.baseLine, u = i.layout, c = i.connectNulls, l = YH(a, u), f = c ? o.filter(function(h) {
        return ho(h);
      }) : o, d;
      if (Re(s)) {
        var p = c ? s.filter(function(h) {
          return ho(h);
        }) : s, v = f.map(function(h, g) {
          return $y($y({}, h), {}, {
            base: p[g]
          });
        });
        return u === "vertical" ? d = ao().y(Hi).x1(qi).x0(function(h) {
          return h.base.x;
        }) : d = ao().x(qi).y1(Hi).y0(function(h) {
          return h.base.y;
        }), d.defined(ho).curve(l), d(v);
      }
      return u === "vertical" && re(s) ? d = ao().y(Hi).x1(qi).x0(s) : re(s) ? d = ao().x(qi).y1(Hi).y0(s) : d = Nx().x(qi).y(Hi), d.defined(ho).curve(l), d(f);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.className, o = i.points, s = i.path, u = i.pathRef;
      if ((!o || !o.length) && !s)
        return null;
      var c = o && o.length ? this.getPath() : s;
      return /* @__PURE__ */ O("path", {
        ...ge(this.props),
        ...rs(this.props),
        className: We("recharts-curve", a),
        d: c,
        ref: u
      });
    }
  }]), r;
}(mt);
Ls.defaultProps = {
  type: "linear",
  points: [],
  connectNulls: !1
};
function Io(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Io = function(r) {
    return typeof r;
  } : Io = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Io(e);
}
function KH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function XH(e, t, r) {
  return t && Dy(e.prototype, t), r && Dy(e, r), e;
}
function ZH(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Af(e, t);
}
function Af(e, t) {
  return Af = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Af(e, t);
}
function JH(e) {
  var t = tG();
  return function() {
    var n = js(e), i;
    if (t) {
      var a = js(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return QH(this, i);
  };
}
function QH(e, t) {
  return t && (Io(t) === "object" || typeof t == "function") ? t : eG(e);
}
function eG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tG() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function js(e) {
  return js = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, js(e);
}
var Fy = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), s = i >= 0 ? 1 : -1, u = n >= 0 ? 1 : -1, c = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && a instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      f[d] = a[d] > o ? o : a[d];
    l = "M".concat(t, ",").concat(r + s * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(c, ",").concat(t + u * f[0], ",").concat(r)), l += "L ".concat(t + n - u * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + s * f[1])), l += "L ".concat(t + n, ",").concat(r + i - s * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(c, `,
        `).concat(t + n - u * f[2], ",").concat(r + i)), l += "L ".concat(t + u * f[3], ",").concat(r + i), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + i - s * f[3])), l += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var v = Math.min(o, a);
    l = "M ".concat(t, ",").concat(r + s * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + u * v, ",").concat(r, `
            L `).concat(t + n - u * v, ",").concat(r, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + s * v, `
            L `).concat(t + n, ",").concat(r + i - s * v, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t + n - u * v, ",").concat(r + i, `
            L `).concat(t + u * v, ",").concat(r + i, `
            A `).concat(v, ",").concat(v, ",0,0,").concat(c, ",").concat(t, ",").concat(r + i - s * v, " Z");
  } else
    l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return l;
}, rG = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= l && i >= f && i <= d;
  }
  return !1;
}, Vh = /* @__PURE__ */ function(e) {
  ZH(r, e);
  var t = JH(r);
  function r() {
    var n;
    KH(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.state = {
      totalLength: -1
    }, n.node = void 0, n;
  }
  return XH(r, [{
    key: "componentDidMount",
    value: function() {
      if (this.node && this.node.getTotalLength)
        try {
          var i = this.node.getTotalLength();
          i && this.setState({
            totalLength: i
          });
        } catch {
        }
    }
  }, {
    key: "render",
    value: function() {
      var i = this, a = this.props, o = a.x, s = a.y, u = a.width, c = a.height, l = a.radius, f = a.className, d = this.state.totalLength, p = this.props, v = p.animationEasing, h = p.animationDuration, g = p.animationBegin, m = p.isAnimationActive, w = p.isUpdateAnimationActive;
      if (o !== +o || s !== +s || u !== +u || c !== +c || u === 0 || c === 0)
        return null;
      var x = We("recharts-rectangle", f);
      return w ? /* @__PURE__ */ O(li, {
        canBegin: d > 0,
        from: {
          width: u,
          height: c,
          x: o,
          y: s
        },
        to: {
          width: u,
          height: c,
          x: o,
          y: s
        },
        duration: h,
        animationEasing: v,
        isActive: w,
        children: function(b) {
          var y = b.width, S = b.height, A = b.x, _ = b.y;
          return /* @__PURE__ */ O(li, {
            canBegin: d > 0,
            from: "0px ".concat(d === -1 ? 1 : d, "px"),
            to: "".concat(d, "px 0px"),
            attributeName: "strokeDasharray",
            begin: g,
            duration: h,
            isActive: m,
            easing: v,
            children: /* @__PURE__ */ O("path", {
              ...ge(i.props, !0),
              className: x,
              d: Fy(A, _, y, S, l),
              ref: function(M) {
                i.node = M;
              }
            })
          });
        }
      }) : /* @__PURE__ */ O("path", {
        ...ge(this.props, !0),
        className: x,
        d: Fy(o, s, u, c, l)
      });
    }
  }]), r;
}(mt);
Vh.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};
function $o(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $o = function(r) {
    return typeof r;
  } : $o = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $o(e);
}
function nG(e, t) {
  if (e == null)
    return {};
  var r = iG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function iG(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function aG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function oG(e, t, r) {
  return t && Vy(e.prototype, t), r && Vy(e, r), e;
}
function sG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, _f(e, t);
}
function uG(e) {
  var t = fG();
  return function() {
    var n = Ds(e), i;
    if (t) {
      var a = Ds(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return cG(this, i);
  };
}
function cG(e, t) {
  return t && ($o(t) === "object" || typeof t == "function") ? t : lG(e);
}
function lG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fG() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ds(e) {
  return Ds = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ds(e);
}
function By(e) {
  return vG(e) || pG(e) || hG(e) || dG();
}
function dG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hG(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Of(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Of(e, t);
  }
}
function pG(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function vG(e) {
  if (Array.isArray(e))
    return Of(e);
}
function Of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Uy = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, gG = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Uy(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Uy(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, aa = function(t, r) {
  var n = gG(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(By(a), By(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, yG = function(t, r, n) {
  var i = aa(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(aa(r.reverse(), n).slice(1));
}, mG = /* @__PURE__ */ function(e) {
  sG(r, e);
  var t = uG(r);
  function r() {
    return aG(this, r), t.apply(this, arguments);
  }
  return oG(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.points, o = i.className, s = i.baseLinePoints, u = i.connectNulls, c = nG(i, ["points", "className", "baseLinePoints", "connectNulls"]);
      if (!a || !a.length)
        return null;
      var l = We("recharts-polygon", o);
      if (s && s.length) {
        var f = c.stroke && c.stroke !== "none", d = yG(a, s, u);
        return /* @__PURE__ */ z("g", {
          className: l,
          children: [/* @__PURE__ */ O("path", {
            ...ge(c, !0),
            fill: d.slice(-1) === "Z" ? c.fill : "none",
            stroke: "none",
            d
          }), f ? /* @__PURE__ */ O("path", {
            ...ge(c, !0),
            fill: "none",
            d: aa(a, u)
          }) : null, f ? /* @__PURE__ */ O("path", {
            ...ge(c, !0),
            fill: "none",
            d: aa(s, u)
          }) : null]
        });
      }
      var p = aa(a, u);
      return /* @__PURE__ */ O("path", {
        ...ge(c, !0),
        fill: p.slice(-1) === "Z" ? c.fill : "none",
        className: l,
        d: p
      });
    }
  }]), r;
}(mt);
function Lo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Lo = function(r) {
    return typeof r;
  } : Lo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Lo(e);
}
function bG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function xG(e, t, r) {
  return t && zy(e.prototype, t), r && zy(e, r), e;
}
function wG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Ef(e, t);
}
function Ef(e, t) {
  return Ef = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Ef(e, t);
}
function SG(e) {
  var t = OG();
  return function() {
    var n = Fs(e), i;
    if (t) {
      var a = Fs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return AG(this, i);
  };
}
function AG(e, t) {
  return t && (Lo(t) === "object" || typeof t == "function") ? t : _G(e);
}
function _G(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function OG() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fs(e) {
  return Fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fs(e);
}
var Bh = /* @__PURE__ */ function(e) {
  wG(r, e);
  var t = SG(r);
  function r() {
    return bG(this, r), t.apply(this, arguments);
  }
  return xG(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.r, u = i.className, c = We("recharts-dot", u);
      return a === +a && o === +o && s === +s ? /* @__PURE__ */ O("circle", {
        ...ge(this.props),
        ...rs(this.props),
        className: c,
        cx: a,
        cy: o,
        r: s
      }) : null;
    }
  }]), r;
}(mt);
function jo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jo = function(r) {
    return typeof r;
  } : jo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, jo(e);
}
function EG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function TG(e, t, r) {
  return t && Wy(e.prototype, t), r && Wy(e, r), e;
}
function PG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Tf(e, t);
}
function Tf(e, t) {
  return Tf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Tf(e, t);
}
function CG(e) {
  var t = NG();
  return function() {
    var n = Vs(e), i;
    if (t) {
      var a = Vs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return MG(this, i);
  };
}
function MG(e, t) {
  return t && (jo(t) === "object" || typeof t == "function") ? t : kG(e);
}
function kG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NG() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vs(e) {
  return Vs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Vs(e);
}
var TS = /* @__PURE__ */ function(e) {
  PG(r, e);
  var t = CG(r);
  function r() {
    return EG(this, r), t.apply(this, arguments);
  }
  return TG(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.top, l = i.left, f = i.className;
      return !re(a) || !re(o) || !re(s) || !re(u) || !re(c) || !re(l) ? null : /* @__PURE__ */ O("path", {
        ...ge(this.props, !0),
        className: We("recharts-cross", f),
        d: r.getPath(a, o, s, u, c, l)
      });
    }
  }], [{
    key: "getPath",
    value: function(i, a, o, s, u, c) {
      return "M".concat(i, ",").concat(u, "v").concat(s, "M").concat(c, ",").concat(a, "h").concat(o);
    }
  }]), r;
}(mt);
TS.defaultProps = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0
};
var RG = Tu, IG = mr, $G = fw;
function LG(e, t) {
  return e && e.length ? RG(e, IG(t), $G) : void 0;
}
var jG = LG, DG = Tu, FG = lw, VG = mr;
function BG(e, t) {
  return e && e.length ? DG(e, VG(t), FG) : void 0;
}
var UG = BG;
function Do(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Do = function(r) {
    return typeof r;
  } : Do = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Do(e);
}
function qy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qy(Object(r), !0).forEach(function(n) {
      zG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zG(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Hy(e, t) {
  if (e == null)
    return {};
  var r = WG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function WG(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function qG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function HG(e, t, r) {
  return t && Gy(e.prototype, t), r && Gy(e, r), e;
}
function GG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Pf(e, t);
}
function Pf(e, t) {
  return Pf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Pf(e, t);
}
function YG(e) {
  var t = ZG();
  return function() {
    var n = Bs(e), i;
    if (t) {
      var a = Bs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return KG(this, i);
  };
}
function KG(e, t) {
  return t && (Do(t) === "object" || typeof t == "function") ? t : XG(e);
}
function XG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ZG() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Bs(e) {
  return Bs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bs(e);
}
var Fu = /* @__PURE__ */ function(e) {
  GG(r, e);
  var t = YG(r);
  function r() {
    return qG(this, r), t.apply(this, arguments);
  }
  return HG(r, [{
    key: "getTickValueCoord",
    value: function(i) {
      var a = i.coordinate, o = this.props, s = o.angle, u = o.cx, c = o.cy;
      return Be(u, c, a, s);
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var i = this.props.orientation, a;
      switch (i) {
        case "left":
          a = "end";
          break;
        case "right":
          a = "start";
          break;
        default:
          a = "middle";
          break;
      }
      return a;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.angle, u = i.ticks, c = UG(u, function(f) {
        return f.coordinate || 0;
      }), l = jG(u, function(f) {
        return f.coordinate || 0;
      });
      return {
        cx: a,
        cy: o,
        startAngle: s,
        endAngle: s,
        innerRadius: l.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.angle, u = i.ticks, c = i.axisLine, l = Hy(i, ["cx", "cy", "angle", "ticks", "axisLine"]), f = u.reduce(function(h, g) {
        return [Math.min(h[0], g.coordinate), Math.max(h[1], g.coordinate)];
      }, [1 / 0, -1 / 0]), d = Be(a, o, f[0], s), p = Be(a, o, f[1], s), v = gn(gn(gn({}, ge(l)), {}, {
        fill: "none"
      }, ge(c)), {}, {
        x1: d.x,
        y1: d.y,
        x2: p.x,
        y2: p.y
      });
      return /* @__PURE__ */ O("line", {
        className: "recharts-polar-radius-axis-line",
        ...v
      });
    }
  }, {
    key: "renderTicks",
    value: function() {
      var i = this, a = this.props, o = a.ticks, s = a.tick, u = a.angle, c = a.tickFormatter, l = a.stroke, f = Hy(a, ["ticks", "tick", "angle", "tickFormatter", "stroke"]), d = this.getTickTextAnchor(), p = ge(f), v = ge(s), h = o.map(function(g, m) {
        var w = i.getTickValueCoord(g), x = gn(gn(gn(gn({
          textAnchor: d,
          transform: "rotate(".concat(90 - u, ", ").concat(w.x, ", ").concat(w.y, ")")
        }, p), {}, {
          stroke: "none",
          fill: l
        }, v), {}, {
          index: m
        }, w), {}, {
          payload: g
        });
        return /* @__PURE__ */ O(Xe, {
          className: "recharts-polar-radius-axis-tick",
          ...$a(i.props, g, m),
          children: r.renderTickItem(s, x, c ? c(g.value, m) : g.value)
        }, "tick-".concat(m));
      });
      return /* @__PURE__ */ O(Xe, {
        className: "recharts-polar-radius-axis-ticks",
        children: h
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.ticks, o = i.axisLine, s = i.tick;
      return !a || !a.length ? null : /* @__PURE__ */ z(Xe, {
        className: "recharts-polar-radius-axis",
        children: [o && this.renderAxisLine(), s && this.renderTicks(), rt.renderCallByParent(this.props, this.getViewBox())]
      });
    }
  }], [{
    key: "renderTickItem",
    value: function(i, a, o) {
      var s;
      return /* @__PURE__ */ me.isValidElement(i) ? s = /* @__PURE__ */ me.cloneElement(i, a) : de(i) ? s = i(a) : s = /* @__PURE__ */ O(tn, {
        ...a,
        className: "recharts-polar-radius-axis-tick-value",
        children: o
      }), s;
    }
  }]), r;
}(mt);
Fu.displayName = "PolarRadiusAxis";
Fu.axisType = "radiusAxis";
Fu.defaultProps = {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  domain: [0, "auto"],
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
};
function Fo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fo = function(r) {
    return typeof r;
  } : Fo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Fo(e);
}
function Yy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yy(Object(r), !0).forEach(function(n) {
      JG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JG(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function QG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ky(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function eY(e, t, r) {
  return t && Ky(e.prototype, t), r && Ky(e, r), e;
}
function tY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Cf(e, t);
}
function Cf(e, t) {
  return Cf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Cf(e, t);
}
function rY(e) {
  var t = aY();
  return function() {
    var n = Us(e), i;
    if (t) {
      var a = Us(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return nY(this, i);
  };
}
function nY(e, t) {
  return t && (Fo(t) === "object" || typeof t == "function") ? t : iY(e);
}
function iY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function aY() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Us(e) {
  return Us = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Us(e);
}
var oY = Math.PI / 180, Xy = 1e-5, Vu = /* @__PURE__ */ function(e) {
  tY(r, e);
  var t = rY(r);
  function r() {
    return QG(this, r), t.apply(this, arguments);
  }
  return eY(r, [{
    key: "getTickLineCoord",
    value: function(i) {
      var a = this.props, o = a.cx, s = a.cy, u = a.radius, c = a.orientation, l = a.tickSize, f = l || 8, d = Be(o, s, u, i.coordinate), p = Be(o, s, u + (c === "inner" ? -1 : 1) * f, i.coordinate);
      return {
        x1: d.x,
        y1: d.y,
        x2: p.x,
        y2: p.y
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function(i) {
      var a = this.props.orientation, o = Math.cos(-i.coordinate * oY), s;
      return o > Xy ? s = a === "outer" ? "start" : "end" : o < -Xy ? s = a === "outer" ? "end" : "start" : s = "middle", s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.radius, u = i.axisLine, c = i.axisLineType, l = yn(yn({}, ge(this.props)), {}, {
        fill: "none"
      }, ge(u));
      if (c === "circle")
        return /* @__PURE__ */ O(Bh, {
          className: "recharts-polar-angle-axis-line",
          ...l,
          cx: a,
          cy: o,
          r: s
        });
      var f = this.props.ticks, d = f.map(function(p) {
        return Be(a, o, s, p.coordinate);
      });
      return /* @__PURE__ */ O(mG, {
        className: "recharts-polar-angle-axis-line",
        ...l,
        points: d
      });
    }
  }, {
    key: "renderTicks",
    value: function() {
      var i = this, a = this.props, o = a.ticks, s = a.tick, u = a.tickLine, c = a.tickFormatter, l = a.stroke, f = ge(this.props), d = ge(s), p = yn(yn({}, f), {}, {
        fill: "none"
      }, ge(u)), v = o.map(function(h, g) {
        var m = i.getTickLineCoord(h), w = i.getTickTextAnchor(h), x = yn(yn(yn({
          textAnchor: w
        }, f), {}, {
          stroke: "none",
          fill: l
        }, d), {}, {
          index: g,
          payload: h,
          x: m.x2,
          y: m.y2
        });
        return /* @__PURE__ */ z(Xe, {
          className: "recharts-polar-angle-axis-tick",
          ...$a(i.props, h, g),
          children: [u && /* @__PURE__ */ O("line", {
            className: "recharts-polar-angle-axis-tick-line",
            ...p,
            ...m
          }), s && r.renderTickItem(s, x, c ? c(h.value, g) : h.value)]
        }, "tick-".concat(g));
      });
      return /* @__PURE__ */ O(Xe, {
        className: "recharts-polar-angle-axis-ticks",
        children: v
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.ticks, o = i.radius, s = i.axisLine;
      return o <= 0 || !a || !a.length ? null : /* @__PURE__ */ z(Xe, {
        className: "recharts-polar-angle-axis",
        children: [s && this.renderAxisLine(), this.renderTicks()]
      });
    }
  }], [{
    key: "renderTickItem",
    value: function(i, a, o) {
      var s;
      return /* @__PURE__ */ me.isValidElement(i) ? s = /* @__PURE__ */ me.cloneElement(i, a) : de(i) ? s = i(a) : s = /* @__PURE__ */ O(tn, {
        ...a,
        className: "recharts-polar-angle-axis-tick-value",
        children: o
      }), s;
    }
  }]), r;
}(mt);
Vu.displayName = "PolarAngleAxis";
Vu.axisType = "angleAxis";
Vu.defaultProps = {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  domain: [0, "auto"],
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
};
var sY = fx, uY = sY(Object.getPrototypeOf, Object), cY = uY, lY = Nr, fY = cY, dY = Rr, hY = "[object Object]", pY = Function.prototype, vY = Object.prototype, PS = pY.toString, gY = vY.hasOwnProperty, yY = PS.call(Object);
function mY(e) {
  if (!dY(e) || lY(e) != hY)
    return !1;
  var t = fY(e);
  if (t === null)
    return !0;
  var r = gY.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && PS.call(r) == yY;
}
var bY = mY;
function Vo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vo = function(r) {
    return typeof r;
  } : Vo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Vo(e);
}
function Zy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zy(Object(r), !0).forEach(function(n) {
      xY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xY(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function wY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function SY(e, t, r) {
  return t && Jy(e.prototype, t), r && Jy(e, r), e;
}
function AY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Mf(e, t);
}
function Mf(e, t) {
  return Mf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Mf(e, t);
}
function _Y(e) {
  var t = TY();
  return function() {
    var n = zs(e), i;
    if (t) {
      var a = zs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return OY(this, i);
  };
}
function OY(e, t) {
  return t && (Vo(t) === "object" || typeof t == "function") ? t : EY(e);
}
function EY(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function TY() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zs(e) {
  return zs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, zs(e);
}
var Qt = /* @__PURE__ */ function(e) {
  AY(r, e);
  var t = _Y(r);
  function r(n) {
    var i;
    return wY(this, r), i = t.call(this, n), i.state = void 0, i.id = _u("recharts-pie-"), i.handleAnimationEnd = function() {
      var a = i.props.onAnimationEnd;
      i.setState({
        isAnimationFinished: !0
      }), de(a) && a();
    }, i.handleAnimationStart = function() {
      var a = i.props.onAnimationStart;
      i.setState({
        isAnimationFinished: !1
      }), de(a) && a();
    }, i.state = {
      isAnimationFinished: !n.isAnimationActive,
      prevIsAnimationActive: n.isAnimationActive,
      prevAnimationId: n.animationId
    }, i;
  }
  return SY(r, [{
    key: "isActiveIndex",
    value: function(i) {
      var a = this.props.activeIndex;
      return Array.isArray(a) ? a.indexOf(i) !== -1 : i === a;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.length !== 0 : i || i === 0;
    }
  }, {
    key: "renderLabels",
    value: function(i) {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.label, u = o.labelLine, c = o.dataKey, l = o.valueKey, f = ge(this.props), d = ge(s), p = ge(u), v = s && s.offsetRadius || 20, h = i.map(function(g, m) {
        var w = (g.startAngle + g.endAngle) / 2, x = Be(g.cx, g.cy, g.outerRadius + v, w), b = He(He(He(He({}, f), g), {}, {
          stroke: "none"
        }, d), {}, {
          index: m,
          textAnchor: r.getTextAnchor(x.x, g.cx)
        }, x), y = He(He(He(He({}, f), g), {}, {
          fill: "none",
          stroke: g.fill
        }, p), {}, {
          index: m,
          points: [Be(g.cx, g.cy, g.outerRadius, w), x],
          key: "line"
        }), S = c;
        return le(c) && le(l) ? S = "value" : le(c) && (S = l), /* @__PURE__ */ z(Xe, {
          children: [u && r.renderLabelLineItem(u, y), r.renderLabelItem(s, b, Nt(g, S))]
        }, "label-".concat(m));
      });
      return /* @__PURE__ */ O(Xe, {
        className: "recharts-pie-labels",
        children: h
      });
    }
  }, {
    key: "renderSectorsStatically",
    value: function(i) {
      var a = this, o = this.props, s = o.activeShape, u = o.blendStroke, c = o.inactiveShape;
      return i.map(function(l, f) {
        var d = c && a.hasActiveIndex() ? c : null, p = a.isActiveIndex(f) ? s : d, v = He(He({}, l), {}, {
          stroke: u ? l.fill : l.stroke
        });
        return /* @__PURE__ */ Ot(Xe, {
          className: "recharts-pie-sector",
          ...$a(a.props, l, f),
          key: "sector-".concat(f)
        }, r.renderSectorItem(p, v));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var i = this, a = this.props, o = a.sectors, s = a.isAnimationActive, u = a.animationBegin, c = a.animationDuration, l = a.animationEasing, f = a.animationId, d = this.state, p = d.prevSectors, v = d.prevIsAnimationActive;
      return /* @__PURE__ */ O(li, {
        begin: u,
        duration: c,
        isActive: s,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd,
        children: function(h) {
          var g = h.t, m = [], w = o && o[0], x = w.startAngle;
          return o.forEach(function(b, y) {
            var S = p && p[y], A = y > 0 ? Et(b, "paddingAngle", 0) : 0;
            if (S) {
              var _ = I0(S.endAngle - S.startAngle, b.endAngle - b.startAngle), E = He(He({}, b), {}, {
                startAngle: x + A,
                endAngle: x + _(g) + A
              });
              m.push(E), x = E.endAngle;
            } else {
              var M = b.endAngle, C = b.startAngle, k = I0(0, M - C), N = k(g), j = He(He({}, b), {}, {
                startAngle: x + A,
                endAngle: x + N + A
              });
              m.push(j), x = j.endAngle;
            }
          }), /* @__PURE__ */ O(Xe, {
            children: i.renderSectorsStatically(m)
          });
        }
      }, "pie-".concat(f, "-").concat(v));
    }
  }, {
    key: "renderSectors",
    value: function() {
      var i = this.props, a = i.sectors, o = i.isAnimationActive, s = this.state.prevSectors;
      return o && a && a.length && (!s || !cw(s, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.hide, o = i.sectors, s = i.className, u = i.label, c = i.cx, l = i.cy, f = i.innerRadius, d = i.outerRadius, p = i.isAnimationActive, v = this.state.isAnimationFinished;
      if (a || !o || !o.length || !re(c) || !re(l) || !re(f) || !re(d))
        return null;
      var h = We("recharts-pie", s);
      return /* @__PURE__ */ z(Xe, {
        className: h,
        children: [this.renderSectors(), u && this.renderLabels(o), rt.renderCallByParent(this.props, null, !1), (!p || v) && Jr.renderCallByParent(this.props, o, !1)]
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, a) {
      return a.prevIsAnimationActive !== i.isAnimationActive ? {
        prevIsAnimationActive: i.isAnimationActive,
        prevAnimationId: i.animationId,
        curSectors: i.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : i.isAnimationActive && i.animationId !== a.prevAnimationId ? {
        prevAnimationId: i.animationId,
        curSectors: i.sectors,
        prevSectors: a.curSectors,
        isAnimationFinished: !0
      } : i.sectors !== a.curSectors ? {
        curSectors: i.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(i, a) {
      return i > a ? "start" : i < a ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(i, a) {
      return /* @__PURE__ */ me.isValidElement(i) ? /* @__PURE__ */ me.cloneElement(i, a) : de(i) ? i(a) : /* @__PURE__ */ O(Ls, {
        ...a,
        type: "linear",
        className: "recharts-pie-label-line"
      });
    }
  }, {
    key: "renderLabelItem",
    value: function(i, a, o) {
      if (/* @__PURE__ */ me.isValidElement(i))
        return /* @__PURE__ */ me.cloneElement(i, a);
      var s = o;
      return de(i) && (s = i(a), /* @__PURE__ */ me.isValidElement(s)) ? s : /* @__PURE__ */ O(tn, {
        ...a,
        alignmentBaseline: "middle",
        className: "recharts-pie-label-text",
        children: s
      });
    }
  }, {
    key: "renderSectorItem",
    value: function(i, a) {
      return /* @__PURE__ */ me.isValidElement(i) ? /* @__PURE__ */ me.cloneElement(i, a) : de(i) ? i(a) : bY(i) ? /* @__PURE__ */ O(Is, {
        ...a,
        ...i
      }) : /* @__PURE__ */ O(Is, {
        ...a
      });
    }
  }]), r;
}(mt);
Qt.displayName = "Pie";
Qt.defaultProps = {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Xr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1
};
Qt.parseDeltaAngle = function(e, t) {
  var r = _t(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
Qt.getRealPieData = function(e) {
  var t = e.props, r = t.data, n = t.children, i = ge(e.props), a = dr(n, yh.displayName);
  return r && r.length ? r.map(function(o, s) {
    return He(He(He({
      payload: o
    }, i), o), a && a[s] && a[s].props);
  }) : a && a.length ? a.map(function(o) {
    return He(He({}, i), o.props);
  }) : [];
};
Qt.parseCoordinateOfPie = function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = _S(i, a), s = n + Rt(e.props.cx, i, i / 2), u = r + Rt(e.props.cy, a, a / 2), c = Rt(e.props.innerRadius, o, 0), l = Rt(e.props.outerRadius, o, o * 0.8), f = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: s,
    cy: u,
    innerRadius: c,
    outerRadius: l,
    maxRadius: f
  };
};
Qt.getComposedData = function(e) {
  var t = e.item, r = e.offset, n = Qt.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, o = i.startAngle, s = i.endAngle, u = i.paddingAngle, c = i.dataKey, l = i.nameKey, f = i.valueKey, d = i.tooltipType, p = Math.abs(t.props.minAngle), v = Qt.parseCoordinateOfPie(t, r), h = Qt.parseDeltaAngle(o, s), g = Math.abs(h), m = c;
  le(c) && le(f) ? (ya(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), m = "value") : le(c) && (ya(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), m = f);
  var w = n.filter(function(_) {
    return Nt(_, m, 0) !== 0;
  }).length, x = (g >= 360 ? w : w - 1) * u, b = g - w * p - x, y = n.reduce(function(_, E) {
    var M = Nt(E, m, 0);
    return _ + (re(M) ? M : 0);
  }, 0), S;
  if (y > 0) {
    var A;
    S = n.map(function(_, E) {
      var M = Nt(_, m, 0), C = Nt(_, l, E), k = (re(M) ? M : 0) / y, N;
      E ? N = A.endAngle + _t(h) * u * (M !== 0 ? 1 : 0) : N = o;
      var j = N + _t(h) * ((M !== 0 ? p : 0) + k * b), L = (N + j) / 2, R = (v.innerRadius + v.outerRadius) / 2, Q = [{
        name: C,
        value: M,
        payload: _,
        dataKey: m,
        type: d
      }], K = Be(v.cx, v.cy, R, L);
      return A = He(He(He({
        percent: k,
        cornerRadius: a,
        name: C,
        tooltipPayload: Q,
        midAngle: L,
        middleRadius: R,
        tooltipPosition: K
      }, _), v), {}, {
        value: Nt(_, m),
        startAngle: N,
        endAngle: j,
        payload: _,
        paddingAngle: _t(h) * u
      }), A;
    });
  }
  return He(He({}, v), {}, {
    sectors: S,
    data: n
  });
};
var PY = Math.ceil, CY = Math.max;
function MY(e, t, r, n) {
  for (var i = -1, a = CY(PY((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var kY = MY, NY = ew, Qy = 1 / 0, RY = 17976931348623157e292;
function IY(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = NY(e), e === Qy || e === -Qy) {
    var t = e < 0 ? -1 : 1;
    return t * RY;
  }
  return e === e ? e : 0;
}
var CS = IY, $Y = kY, LY = Eu, Wc = CS;
function jY(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && LY(t, r, n) && (r = n = void 0), t = Wc(t), r === void 0 ? (r = t, t = 0) : r = Wc(r), n = n === void 0 ? t < r ? 1 : -1 : Wc(n), $Y(t, r, n, e);
  };
}
var DY = jY, FY = DY, VY = FY(), Ws = VY;
function em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? em(Object(r), !0).forEach(function(n) {
      MS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var BY = ["Webkit", "Moz", "O", "ms"], UY = function(t, r) {
  if (!t)
    return null;
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = BY.reduce(function(a, o) {
    return tm(tm({}, a), {}, MS({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Bo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bo = function(r) {
    return typeof r;
  } : Bo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bo(e);
}
function rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rm(Object(r), !0).forEach(function(n) {
      kf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function zY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function WY(e, t, r) {
  return t && nm(e.prototype, t), r && nm(e, r), e;
}
function qY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Nf(e, t);
}
function Nf(e, t) {
  return Nf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Nf(e, t);
}
function HY(e) {
  var t = YY();
  return function() {
    var n = qs(e), i;
    if (t) {
      var a = qs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return GY(this, i);
  };
}
function GY(e, t) {
  return t && (Bo(t) === "object" || typeof t == "function") ? t : Rf(e);
}
function Rf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function YY() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qs(e) {
  return qs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qs(e);
}
var KY = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = ia().domain(Ws(0, u)).range([a, a + o - s]), l = c.domain().map(function(f) {
    return c(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    startX: c(n),
    endX: c(i),
    scale: c,
    scaleValues: l
  };
}, im = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, _a = /* @__PURE__ */ function(e) {
  qY(r, e);
  var t = HY(r);
  function r(n) {
    var i;
    return zY(this, r), i = t.call(this, n), i.leaveTimer = void 0, i.travellerDragStartHandlers = void 0, i.handleDrag = function(a) {
      i.leaveTimer && (clearTimeout(i.leaveTimer), i.leaveTimer = null), i.state.isTravellerMoving ? i.handleTravellerMove(a) : i.state.isSlideMoving && i.handleSlideDrag(a);
    }, i.handleTouchMove = function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && i.handleDrag(a.changedTouches[0]);
    }, i.handleDragEnd = function() {
      i.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }), i.detachDragEndListener();
    }, i.handleLeaveWrapper = function() {
      (i.state.isTravellerMoving || i.state.isSlideMoving) && (i.leaveTimer = window.setTimeout(i.handleDragEnd, i.props.leaveTimeOut));
    }, i.handleEnterSlideOrTraveller = function() {
      i.setState({
        isTextActive: !0
      });
    }, i.handleLeaveSlideOrTraveller = function() {
      i.setState({
        isTextActive: !1
      });
    }, i.handleSlideDragStart = function(a) {
      var o = im(a) ? a.changedTouches[0] : a;
      i.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: o.pageX
      }), i.attachDragEndListener();
    }, i.travellerDragStartHandlers = {
      startX: i.handleTravellerDragStart.bind(Rf(i), "startX"),
      endX: i.handleTravellerDragStart.bind(Rf(i), "endX")
    }, i.state = {}, i;
  }
  return WY(r, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(i) {
      var a = i.startX, o = i.endX, s = this.state.scaleValues, u = this.props, c = u.gap, l = u.data, f = l.length - 1, d = Math.min(a, o), p = Math.max(a, o), v = r.getIndexInRange(s, d), h = r.getIndexInRange(s, p);
      return {
        startIndex: v - v % c,
        endIndex: h === f ? f : h - h % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(i) {
      var a = this.props, o = a.data, s = a.tickFormatter, u = a.dataKey, c = Nt(o[i], u, i);
      return de(s) ? s(c, i) : c;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(i) {
      var a = this.state, o = a.slideMoveStartX, s = a.startX, u = a.endX, c = this.props, l = c.x, f = c.width, d = c.travellerWidth, p = c.startIndex, v = c.endIndex, h = c.onChange, g = i.pageX - o;
      g > 0 ? g = Math.min(g, l + f - d - u, l + f - d - s) : g < 0 && (g = Math.max(g, l - s, l - u));
      var m = this.getIndex({
        startX: s + g,
        endX: u + g
      });
      (m.startIndex !== p || m.endIndex !== v) && h && h(m), this.setState({
        startX: s + g,
        endX: u + g,
        slideMoveStartX: i.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(i, a) {
      var o = im(a) ? a.changedTouches[0] : a;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: i,
        brushMoveStartX: o.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(i) {
      var a, o = this.state, s = o.brushMoveStartX, u = o.movingTravellerId, c = o.endX, l = o.startX, f = this.state[u], d = this.props, p = d.x, v = d.width, h = d.travellerWidth, g = d.onChange, m = d.gap, w = d.data, x = {
        startX: this.state.startX,
        endX: this.state.endX
      }, b = i.pageX - s;
      b > 0 ? b = Math.min(b, p + v - h - f) : b < 0 && (b = Math.max(b, p - f)), x[u] = f + b;
      var y = this.getIndex(x), S = y.startIndex, A = y.endIndex, _ = function() {
        var M = w.length - 1;
        return u === "startX" && (c > l ? S % m === 0 : A % m === 0) || c < l && A === M || u === "endX" && (c > l ? A % m === 0 : S % m === 0) || c > l && A === M;
      };
      this.setState((a = {}, kf(a, u, f + b), kf(a, "brushMoveStartX", i.pageX), a), function() {
        g && _() && g(y);
      });
    }
  }, {
    key: "renderBackground",
    value: function() {
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.fill, l = i.stroke;
      return /* @__PURE__ */ O("rect", {
        stroke: l,
        fill: c,
        x: a,
        y: o,
        width: s,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.data, l = i.children, f = i.padding, d = _n.only(l);
      return d ? /* @__PURE__ */ me.cloneElement(d, {
        x: a,
        y: o,
        width: s,
        height: u,
        margin: f,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(i, a) {
      var o = this.props, s = o.y, u = o.travellerWidth, c = o.height, l = o.traveller, f = Math.max(i, this.props.x), d = qc(qc({}, ge(this.props)), {}, {
        x: f,
        y: s,
        width: u,
        height: c
      });
      return /* @__PURE__ */ O(Xe, {
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        style: {
          cursor: "col-resize"
        },
        children: r.renderTraveller(l, d)
      });
    }
  }, {
    key: "renderSlide",
    value: function(i, a) {
      var o = this.props, s = o.y, u = o.height, c = o.stroke, l = o.travellerWidth, f = Math.min(i, a) + l, d = Math.max(Math.abs(a - i) - l, 0);
      return /* @__PURE__ */ O("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: c,
        fillOpacity: 0.2,
        x: f,
        y: s,
        width: d,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var i = this.props, a = i.startIndex, o = i.endIndex, s = i.y, u = i.height, c = i.travellerWidth, l = i.stroke, f = this.state, d = f.startX, p = f.endX, v = 5, h = {
        pointerEvents: "none",
        fill: l
      };
      return /* @__PURE__ */ z(Xe, {
        className: "recharts-brush-texts",
        children: [/* @__PURE__ */ O(tn, {
          textAnchor: "end",
          verticalAnchor: "middle",
          x: Math.min(d, p) - v,
          y: s + u / 2,
          ...h,
          children: this.getTextOfTick(a)
        }), /* @__PURE__ */ O(tn, {
          textAnchor: "start",
          verticalAnchor: "middle",
          x: Math.max(d, p) + c + v,
          y: s + u / 2,
          ...h,
          children: this.getTextOfTick(o)
        })]
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.data, o = i.className, s = i.children, u = i.x, c = i.y, l = i.width, f = i.height, d = i.alwaysShowText, p = this.state, v = p.startX, h = p.endX, g = p.isTextActive, m = p.isSlideMoving, w = p.isTravellerMoving;
      if (!a || !a.length || !re(u) || !re(c) || !re(l) || !re(f) || l <= 0 || f <= 0)
        return null;
      var x = We("recharts-brush", o), b = me.Children.count(s) === 1, y = UY("userSelect", "none");
      return /* @__PURE__ */ z(Xe, {
        className: x,
        onMouseMove: this.handleDrag,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: y,
        children: [this.renderBackground(), b && this.renderPanorama(), this.renderSlide(v, h), this.renderTravellerLayer(v, "startX"), this.renderTravellerLayer(h, "endX"), (g || m || w || d) && this.renderText()]
      });
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(i) {
      var a = i.x, o = i.y, s = i.width, u = i.height, c = i.stroke, l = Math.floor(o + u / 2) - 1;
      return /* @__PURE__ */ z(wA, {
        children: [/* @__PURE__ */ O("rect", {
          x: a,
          y: o,
          width: s,
          height: u,
          fill: c,
          stroke: "none"
        }), /* @__PURE__ */ O("line", {
          x1: a + 1,
          y1: l,
          x2: a + s - 1,
          y2: l,
          fill: "none",
          stroke: "#fff"
        }), /* @__PURE__ */ O("line", {
          x1: a + 1,
          y1: l + 2,
          x2: a + s - 1,
          y2: l + 2,
          fill: "none",
          stroke: "#fff"
        })]
      });
    }
  }, {
    key: "renderTraveller",
    value: function(i, a) {
      var o;
      return /* @__PURE__ */ me.isValidElement(i) ? o = /* @__PURE__ */ me.cloneElement(i, a) : de(i) ? o = i(a) : o = r.renderDefaultTraveller(a), o;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(i, a) {
      var o = i.data, s = i.width, u = i.x, c = i.travellerWidth, l = i.updateId, f = i.startIndex, d = i.endIndex;
      if (o !== a.prevData || l !== a.prevUpdateId)
        return qc({
          prevData: o,
          prevTravellerWidth: c,
          prevUpdateId: l,
          prevX: u,
          prevWidth: s
        }, o && o.length ? KY({
          data: o,
          width: s,
          x: u,
          travellerWidth: c,
          startIndex: f,
          endIndex: d
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (s !== a.prevWidth || u !== a.prevX || c !== a.prevTravellerWidth)) {
        a.scale.range([u, u + s - c]);
        var p = a.scale.domain().map(function(v) {
          return a.scale(v);
        });
        return {
          prevData: o,
          prevTravellerWidth: c,
          prevUpdateId: l,
          prevX: u,
          prevWidth: s,
          startX: a.scale(i.startIndex),
          endX: a.scale(i.endIndex),
          scaleValues: p
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(i, a) {
      for (var o = i.length, s = 0, u = o - 1; u - s > 1; ) {
        var c = Math.floor((s + u) / 2);
        i[c] > a ? u = c : s = c;
      }
      return a >= i[u] ? u : s;
    }
  }]), r;
}(mt);
_a.displayName = "Brush";
_a.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
};
var XY = ph;
function ZY(e, t) {
  var r;
  return XY(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var JY = ZY, QY = ix, eK = mr, tK = JY, rK = Re, nK = Eu;
function iK(e, t, r) {
  var n = rK(e) ? QY : tK;
  return r && nK(e, t, r) && (t = void 0), n(e, eK(t));
}
var aK = iK, pr = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
};
function oK(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var sK = oK, uK = ph;
function cK(e, t) {
  var r = !0;
  return uK(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var lK = cK, fK = sK, dK = lK, hK = mr, pK = Re, vK = Eu;
function gK(e, t, r) {
  var n = pK(e) ? fK : dK;
  return r && vK(e, t, r) && (t = void 0), n(e, hK(t));
}
var kS = gK, am = Qx;
function yK(e, t, r) {
  t == "__proto__" && am ? am(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var mK = yK, bK = mK, xK = Zx, wK = mr;
function SK(e, t) {
  var r = {};
  return t = wK(t), xK(e, function(n, i, a) {
    bK(r, i, t(n, i, a));
  }), r;
}
var AK = SK;
function _K(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function om(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function OK(e, t, r) {
  return t && om(e.prototype, t), r && om(e, r), e;
}
function sm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sm(Object(r), !0).forEach(function(n) {
      NS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var RS = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, EK = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return RS({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, IS = /* @__PURE__ */ function() {
  function e(t) {
    _K(this, e), this.scale = void 0, this.scale = t;
  }
  return OK(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + s;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var u = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + u;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]), e;
}();
IS.EPS = 1e-4;
var Uh = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return po(po({}, n), {}, NS({}, i, IS.create(t[i])));
  }, {});
  return po(po({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return AK(i, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return kS(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function um(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? um(Object(r), !0).forEach(function(n) {
      TK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : um(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TK(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function PK(e, t) {
  return NK(e) || kK(e, t) || MK(e, t) || CK();
}
function CK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MK(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return lm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lm(e, t);
  }
}
function lm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function kK(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function NK(e) {
  if (Array.isArray(e))
    return e;
}
var RK = function(t, r) {
  var n;
  return /* @__PURE__ */ me.isValidElement(t) ? n = /* @__PURE__ */ me.cloneElement(t, r) : de(t) ? n = t(r) : n = /* @__PURE__ */ O("line", {
    ...r,
    className: "recharts-reference-line-line"
  }), n;
}, IK = function(t, r, n, i, a) {
  var o = a.viewBox, s = o.x, u = o.y, c = o.width, l = o.height, f = a.position;
  if (n) {
    var d = a.y, p = a.yAxis.orientation, v = t.y.apply(d, {
      position: f
    });
    if (pr(a, "discard") && !t.y.isInRange(v))
      return null;
    var h = [{
      x: s + c,
      y: v
    }, {
      x: s,
      y: v
    }];
    return p === "left" ? h.reverse() : h;
  }
  if (r) {
    var g = a.x, m = a.xAxis.orientation, w = t.x.apply(g, {
      position: f
    });
    if (pr(a, "discard") && !t.x.isInRange(w))
      return null;
    var x = [{
      x: w,
      y: u + l
    }, {
      x: w,
      y: u
    }];
    return m === "top" ? x.reverse() : x;
  }
  if (i) {
    var b = a.segment, y = b.map(function(S) {
      return t.apply(S, {
        position: f
      });
    });
    return pr(a, "discard") && aK(y, function(S) {
      return !t.isInRange(S);
    }) ? null : y;
  }
  return null;
};
function zh(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxis, a = e.yAxis, o = e.shape, s = e.className, u = e.alwaysShow, c = e.clipPathId;
  ya(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = Uh({
    x: i.scale,
    y: a.scale
  }), f = nt(t), d = nt(r), p = n && n.length === 2, v = IK(l, f, d, p, e);
  if (!v)
    return null;
  var h = PK(v, 2), g = h[0], m = g.x, w = g.y, x = h[1], b = x.x, y = x.y, S = pr(e, "hidden") ? "url(#".concat(c, ")") : void 0, A = cm(cm({
    clipPath: S
  }, ge(e, !0)), {}, {
    x1: m,
    y1: w,
    x2: b,
    y2: y
  });
  return /* @__PURE__ */ z(Xe, {
    className: We("recharts-reference-line", s),
    children: [RK(o, A), rt.renderCallByParent(e, EK({
      x1: m,
      y1: w,
      x2: b,
      y2: y
    }))]
  });
}
zh.displayName = "ReferenceLine";
zh.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
};
function fm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fm(Object(r), !0).forEach(function(n) {
      $K(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $K(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var LK = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Uh({
    x: i.scale,
    y: a.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return pr(t, "discard") && !o.isInRange(s) ? null : s;
};
function Wa(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, o = nt(t), s = nt(r);
  if (ya(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !o || !s)
    return null;
  var u = LK(e);
  if (!u)
    return null;
  var c = u.x, l = u.y, f = e.shape, d = e.className, p = pr(e, "hidden") ? "url(#".concat(a, ")") : void 0, v = dm(dm({
    clipPath: p
  }, ge(e, !0)), {}, {
    cx: c,
    cy: l
  });
  return /* @__PURE__ */ z(Xe, {
    className: We("recharts-reference-dot", d),
    children: [Wa.renderDot(f, v), rt.renderCallByParent(e, {
      x: c - n,
      y: l - n,
      width: 2 * n,
      height: 2 * n
    })]
  });
}
Wa.displayName = "ReferenceDot";
Wa.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
};
Wa.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ me.isValidElement(e) ? r = /* @__PURE__ */ me.cloneElement(e, t) : de(e) ? r = e(t) : r = /* @__PURE__ */ O(Bh, {
    ...t,
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  }), r;
};
function hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hm(Object(r), !0).forEach(function(n) {
      jK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jK(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var DK = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, u = a.y1, c = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f)
    return null;
  var d = Uh({
    x: l.scale,
    y: f.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(u, {
      position: "start"
    }) : d.y.rangeMin
  }, v = {
    x: r ? d.x.apply(s, {
      position: "end"
    }) : d.x.rangeMax,
    y: i ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return pr(a, "discard") && (!d.isInRange(p) || !d.isInRange(v)) ? null : RS(p, v);
};
function qa(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, o = e.alwaysShow, s = e.clipPathId;
  ya(o === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var u = nt(t), c = nt(r), l = nt(n), f = nt(i), d = e.shape;
  if (!u && !c && !l && !f && !d)
    return null;
  var p = DK(u, c, l, f, e);
  if (!p && !d)
    return null;
  var v = pr(e, "hidden") ? "url(#".concat(s, ")") : void 0;
  return /* @__PURE__ */ z(Xe, {
    className: We("recharts-reference-area", a),
    children: [qa.renderRect(d, pm(pm({
      clipPath: v
    }, ge(e, !0)), p)), rt.renderCallByParent(e, p)]
  });
}
qa.displayName = "ReferenceArea";
qa.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
};
qa.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ me.isValidElement(e) ? r = /* @__PURE__ */ me.cloneElement(e, t) : de(e) ? r = e(t) : r = /* @__PURE__ */ O(Vh, {
    ...t,
    className: "recharts-reference-area-rect"
  }), r;
};
function Uo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Uo = function(r) {
    return typeof r;
  } : Uo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Uo(e);
}
function vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vm(Object(r), !0).forEach(function(n) {
      FK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FK(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Hc(e, t) {
  if (e == null)
    return {};
  var r = VK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function VK(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function BK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function UK(e, t, r) {
  return t && gm(e.prototype, t), r && gm(e, r), e;
}
function zK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && If(e, t);
}
function If(e, t) {
  return If = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, If(e, t);
}
function WK(e) {
  var t = GK();
  return function() {
    var n = Hs(e), i;
    if (t) {
      var a = Hs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return qK(this, i);
  };
}
function qK(e, t) {
  return t && (Uo(t) === "object" || typeof t == "function") ? t : HK(e);
}
function HK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function GK() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Hs(e) {
  return Hs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Hs(e);
}
var Sn = /* @__PURE__ */ function(e) {
  zK(r, e);
  var t = WK(r);
  function r(n) {
    var i;
    return BK(this, r), i = t.call(this, n), i.layerReference = void 0, i.state = {
      fontSize: "",
      letterSpacing: ""
    }, i;
  }
  return UK(r, [{
    key: "shouldComponentUpdate",
    value: function(i, a) {
      var o = i.viewBox, s = Hc(i, ["viewBox"]), u = this.props, c = u.viewBox, l = Hc(u, ["viewBox"]);
      return !Qn(o, c) || !Qn(s, l) || !Qn(a, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var i = this.layerReference;
      if (!!i) {
        var a = i.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        a && this.setState({
          fontSize: window.getComputedStyle(a).fontSize,
          letterSpacing: window.getComputedStyle(a).letterSpacing
        });
      }
    }
  }, {
    key: "getTickLineCoord",
    value: function(i) {
      var a = this.props, o = a.x, s = a.y, u = a.width, c = a.height, l = a.orientation, f = a.tickSize, d = a.mirror, p = a.tickMargin, v, h, g, m, w, x, b = d ? -1 : 1, y = i.tickSize || f, S = re(i.tickCoord) ? i.tickCoord : i.coordinate;
      switch (l) {
        case "top":
          v = h = i.coordinate, m = s + +!d * c, g = m - b * y, x = g - b * p, w = S;
          break;
        case "left":
          g = m = i.coordinate, h = o + +!d * u, v = h - b * y, w = v - b * p, x = S;
          break;
        case "right":
          g = m = i.coordinate, h = o + +d * u, v = h + b * y, w = v + b * p, x = S;
          break;
        default:
          v = h = i.coordinate, m = s + +d * c, g = m + b * y, x = g + b * p, w = S;
          break;
      }
      return {
        line: {
          x1: v,
          y1: g,
          x2: h,
          y2: m
        },
        tick: {
          x: w,
          y: x
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var i = this.props, a = i.orientation, o = i.mirror, s;
      switch (a) {
        case "left":
          s = o ? "start" : "end";
          break;
        case "right":
          s = o ? "end" : "start";
          break;
        default:
          s = "middle";
          break;
      }
      return s;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var i = this.props, a = i.orientation, o = i.mirror, s = "end";
      switch (a) {
        case "left":
        case "right":
          s = "middle";
          break;
        case "top":
          s = o ? "start" : "end";
          break;
        default:
          s = o ? "end" : "start";
          break;
      }
      return s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.orientation, l = i.mirror, f = i.axisLine, d = _e(_e(_e({}, ge(this.props)), ge(f)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var p = +(c === "top" && !l || c === "bottom" && l);
        d = _e(_e({}, d), {}, {
          x1: a,
          y1: o + p * u,
          x2: a + s,
          y2: o + p * u
        });
      } else {
        var v = +(c === "left" && !l || c === "right" && l);
        d = _e(_e({}, d), {}, {
          x1: a + v * s,
          y1: o,
          x2: a + v * s,
          y2: o + u
        });
      }
      return /* @__PURE__ */ O("line", {
        ...d,
        className: We("recharts-cartesian-axis-line", Et(f, "className"))
      });
    }
  }, {
    key: "renderTicks",
    value: function(i, a, o) {
      var s = this, u = this.props, c = u.tickLine, l = u.stroke, f = u.tick, d = u.tickFormatter, p = u.unit, v = r.getTicks(_e(_e({}, this.props), {}, {
        ticks: i
      }), a, o), h = this.getTickTextAnchor(), g = this.getTickVerticalAnchor(), m = ge(this.props), w = ge(f), x = _e(_e({}, m), {}, {
        fill: "none"
      }, ge(c)), b = v.map(function(y, S) {
        var A = s.getTickLineCoord(y), _ = A.line, E = A.tick, M = _e(_e(_e(_e({
          textAnchor: h,
          verticalAnchor: g
        }, m), {}, {
          stroke: "none",
          fill: l
        }, w), E), {}, {
          index: S,
          payload: y,
          visibleTicksCount: v.length,
          tickFormatter: d
        });
        return /* @__PURE__ */ z(Xe, {
          className: "recharts-cartesian-axis-tick",
          ...$a(s.props, y, S),
          children: [c && /* @__PURE__ */ O("line", {
            ...x,
            ..._,
            className: We("recharts-cartesian-axis-tick-line", Et(c, "className"))
          }), f && r.renderTickItem(f, M, "".concat(de(d) ? d(y.value, S) : y.value).concat(p || ""))]
        }, "tick-".concat(S));
      });
      return /* @__PURE__ */ O("g", {
        className: "recharts-cartesian-axis-ticks",
        children: b
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this, a = this.props, o = a.axisLine, s = a.width, u = a.height, c = a.ticksGenerator, l = a.className, f = a.hide;
      if (f)
        return null;
      var d = this.props, p = d.ticks, v = Hc(d, ["ticks"]), h = p;
      return de(c) && (h = p && p.length > 0 ? c(this.props) : c(v)), s <= 0 || u <= 0 || !h || !h.length ? null : /* @__PURE__ */ z(Xe, {
        className: We("recharts-cartesian-axis", l),
        ref: function(m) {
          i.layerReference = m;
        },
        children: [o && this.renderAxisLine(), this.renderTicks(h, this.state.fontSize, this.state.letterSpacing), rt.renderCallByParent(this.props)]
      });
    }
  }], [{
    key: "getTicks",
    value: function(i, a, o) {
      var s = i.tick, u = i.ticks, c = i.viewBox, l = i.minTickGap, f = i.orientation, d = i.interval, p = i.tickFormatter, v = i.unit;
      return !u || !u.length || !s ? [] : re(d) || Xr.isSsr ? r.getNumberIntervalTicks(u, typeof d == "number" && re(d) ? d : 0) : d === "preserveStartEnd" ? r.getTicksStart({
        ticks: u,
        tickFormatter: p,
        viewBox: c,
        orientation: f,
        minTickGap: l,
        unit: v,
        fontSize: a,
        letterSpacing: o
      }, !0) : d === "preserveStart" ? r.getTicksStart({
        ticks: u,
        tickFormatter: p,
        viewBox: c,
        orientation: f,
        minTickGap: l,
        unit: v,
        fontSize: a,
        letterSpacing: o
      }) : r.getTicksEnd({
        ticks: u,
        tickFormatter: p,
        viewBox: c,
        orientation: f,
        minTickGap: l,
        unit: v,
        fontSize: a,
        letterSpacing: o
      });
    }
  }, {
    key: "getNumberIntervalTicks",
    value: function(i, a) {
      return i.filter(function(o, s) {
        return s % (a + 1) === 0;
      });
    }
  }, {
    key: "getTicksStart",
    value: function(i, a) {
      var o = i.ticks, s = i.tickFormatter, u = i.viewBox, c = i.orientation, l = i.minTickGap, f = i.unit, d = i.fontSize, p = i.letterSpacing, v = u.x, h = u.y, g = u.width, m = u.height, w = c === "top" || c === "bottom" ? "width" : "height", x = (o || []).slice(), b = f && w === "width" ? wn(f, {
        fontSize: d,
        letterSpacing: p
      })[w] : 0, y = x.length, S = y >= 2 ? _t(x[1].coordinate - x[0].coordinate) : 1, A, _;
      if (S === 1 ? (A = w === "width" ? v : h, _ = w === "width" ? v + g : h + m) : (A = w === "width" ? v + g : h + m, _ = w === "width" ? v : h), a) {
        var E = o[y - 1], M = de(s) ? s(E.value, y - 1) : E.value, C = wn(M, {
          fontSize: d,
          letterSpacing: p
        })[w] + b, k = S * (E.coordinate + S * C / 2 - _);
        x[y - 1] = E = _e(_e({}, E), {}, {
          tickCoord: k > 0 ? E.coordinate - k * S : E.coordinate
        });
        var N = S * (E.tickCoord - S * C / 2 - A) >= 0 && S * (E.tickCoord + S * C / 2 - _) <= 0;
        N && (_ = E.tickCoord - S * (C / 2 + l), x[y - 1] = _e(_e({}, E), {}, {
          isShow: !0
        }));
      }
      for (var j = a ? y - 1 : y, L = 0; L < j; L++) {
        var R = x[L], Q = de(s) ? s(R.value, L) : R.value, K = wn(Q, {
          fontSize: d,
          letterSpacing: p
        })[w] + b;
        if (L === 0) {
          var te = S * (R.coordinate - S * K / 2 - A);
          x[L] = R = _e(_e({}, R), {}, {
            tickCoord: te < 0 ? R.coordinate - te * S : R.coordinate
          });
        } else
          x[L] = R = _e(_e({}, R), {}, {
            tickCoord: R.coordinate
          });
        var I = S * (R.tickCoord - S * K / 2 - A) >= 0 && S * (R.tickCoord + S * K / 2 - _) <= 0;
        I && (A = R.tickCoord + S * (K / 2 + l), x[L] = _e(_e({}, R), {}, {
          isShow: !0
        }));
      }
      return x.filter(function(V) {
        return V.isShow;
      });
    }
  }, {
    key: "getTicksEnd",
    value: function(i) {
      var a = i.ticks, o = i.tickFormatter, s = i.viewBox, u = i.orientation, c = i.minTickGap, l = i.unit, f = i.fontSize, d = i.letterSpacing, p = s.x, v = s.y, h = s.width, g = s.height, m = u === "top" || u === "bottom" ? "width" : "height", w = l && m === "width" ? wn(l, {
        fontSize: f,
        letterSpacing: d
      })[m] : 0, x = (a || []).slice(), b = x.length, y = b >= 2 ? _t(x[1].coordinate - x[0].coordinate) : 1, S, A;
      y === 1 ? (S = m === "width" ? p : v, A = m === "width" ? p + h : v + g) : (S = m === "width" ? p + h : v + g, A = m === "width" ? p : v);
      for (var _ = b - 1; _ >= 0; _--) {
        var E = x[_], M = de(o) ? o(E.value, b - _ - 1) : E.value, C = wn(M, {
          fontSize: f,
          letterSpacing: d
        })[m] + w;
        if (_ === b - 1) {
          var k = y * (E.coordinate + y * C / 2 - A);
          x[_] = E = _e(_e({}, E), {}, {
            tickCoord: k > 0 ? E.coordinate - k * y : E.coordinate
          });
        } else
          x[_] = E = _e(_e({}, E), {}, {
            tickCoord: E.coordinate
          });
        var N = y * (E.tickCoord - y * C / 2 - S) >= 0 && y * (E.tickCoord + y * C / 2 - A) <= 0;
        N && (A = E.tickCoord - y * (C / 2 + c), x[_] = _e(_e({}, E), {}, {
          isShow: !0
        }));
      }
      return x.filter(function(j) {
        return j.isShow;
      });
    }
  }, {
    key: "renderTickItem",
    value: function(i, a, o) {
      var s;
      return /* @__PURE__ */ me.isValidElement(i) ? s = /* @__PURE__ */ me.cloneElement(i, a) : de(i) ? s = i(a) : s = /* @__PURE__ */ O(tn, {
        ...a,
        className: "recharts-cartesian-axis-tick-value",
        children: o
      }), s;
    }
  }]), r;
}(Hf);
Sn.displayName = "CartesianAxis";
Sn.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
};
var YK = mr, KK = ja, XK = gu;
function ZK(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!KK(t)) {
      var a = YK(r);
      t = XK(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var JK = ZK, QK = CS;
function eX(e) {
  var t = QK(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var tX = eX, rX = wx, nX = mr, iX = tX, aX = Math.max;
function oX(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : iX(r);
  return i < 0 && (i = aX(n + i, 0)), rX(e, nX(t), i);
}
var sX = oX, uX = JK, cX = sX, lX = uX(cX), fX = lX, dX = cB, hX = Dt, pX = "Expected a function";
function vX(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(pX);
  return hX(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), dX(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var gX = vX, yX = Nr, mX = Rr, bX = "[object Boolean]";
function xX(e) {
  return e === !0 || e === !1 || mX(e) && yX(e) == bX;
}
var wX = xX, $f = function(t, r, n, i, a) {
  var o = dr(t, zh.displayName), s = dr(t, Wa.displayName), u = o.concat(s), c = dr(t, qa.displayName), l = "".concat(i, "Id"), f = i[0], d = r;
  if (u.length && (d = u.reduce(function(h, g) {
    if (g.props[l] === n && pr(g.props, "extendDomain") && re(g.props[f])) {
      var m = g.props[f];
      return [Math.min(h[0], m), Math.max(h[1], m)];
    }
    return h;
  }, d)), c.length) {
    var p = "".concat(f, "1"), v = "".concat(f, "2");
    d = c.reduce(function(h, g) {
      if (g.props[l] === n && pr(g.props, "extendDomain") && re(g.props[p]) && re(g.props[v])) {
        var m = g.props[p], w = g.props[v];
        return [Math.min(h[0], m, w), Math.max(h[1], m, w)];
      }
      return h;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(h, g) {
    return re(g) ? [Math.min(h[0], g), Math.max(h[1], g)] : h;
  }, d)), d;
}, $S = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(u, c, l) {
    this.fn = u, this.context = c, this.once = l || !1;
  }
  function a(u, c, l, f, d) {
    if (typeof l != "function")
      throw new TypeError("The listener must be a function");
    var p = new i(l, f || u, d), v = r ? r + c : c;
    return u._events[v] ? u._events[v].fn ? u._events[v] = [u._events[v], p] : u._events[v].push(p) : (u._events[v] = p, u._eventsCount++), u;
  }
  function o(u, c) {
    --u._eventsCount === 0 ? u._events = new n() : delete u._events[c];
  }
  function s() {
    this._events = new n(), this._eventsCount = 0;
  }
  s.prototype.eventNames = function() {
    var c = [], l, f;
    if (this._eventsCount === 0)
      return c;
    for (f in l = this._events)
      t.call(l, f) && c.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
  }, s.prototype.listeners = function(c) {
    var l = r ? r + c : c, f = this._events[l];
    if (!f)
      return [];
    if (f.fn)
      return [f.fn];
    for (var d = 0, p = f.length, v = new Array(p); d < p; d++)
      v[d] = f[d].fn;
    return v;
  }, s.prototype.listenerCount = function(c) {
    var l = r ? r + c : c, f = this._events[l];
    return f ? f.fn ? 1 : f.length : 0;
  }, s.prototype.emit = function(c, l, f, d, p, v) {
    var h = r ? r + c : c;
    if (!this._events[h])
      return !1;
    var g = this._events[h], m = arguments.length, w, x;
    if (g.fn) {
      switch (g.once && this.removeListener(c, g.fn, void 0, !0), m) {
        case 1:
          return g.fn.call(g.context), !0;
        case 2:
          return g.fn.call(g.context, l), !0;
        case 3:
          return g.fn.call(g.context, l, f), !0;
        case 4:
          return g.fn.call(g.context, l, f, d), !0;
        case 5:
          return g.fn.call(g.context, l, f, d, p), !0;
        case 6:
          return g.fn.call(g.context, l, f, d, p, v), !0;
      }
      for (x = 1, w = new Array(m - 1); x < m; x++)
        w[x - 1] = arguments[x];
      g.fn.apply(g.context, w);
    } else {
      var b = g.length, y;
      for (x = 0; x < b; x++)
        switch (g[x].once && this.removeListener(c, g[x].fn, void 0, !0), m) {
          case 1:
            g[x].fn.call(g[x].context);
            break;
          case 2:
            g[x].fn.call(g[x].context, l);
            break;
          case 3:
            g[x].fn.call(g[x].context, l, f);
            break;
          case 4:
            g[x].fn.call(g[x].context, l, f, d);
            break;
          default:
            if (!w)
              for (y = 1, w = new Array(m - 1); y < m; y++)
                w[y - 1] = arguments[y];
            g[x].fn.apply(g[x].context, w);
        }
    }
    return !0;
  }, s.prototype.on = function(c, l, f) {
    return a(this, c, l, f, !1);
  }, s.prototype.once = function(c, l, f) {
    return a(this, c, l, f, !0);
  }, s.prototype.removeListener = function(c, l, f, d) {
    var p = r ? r + c : c;
    if (!this._events[p])
      return this;
    if (!l)
      return o(this, p), this;
    var v = this._events[p];
    if (v.fn)
      v.fn === l && (!d || v.once) && (!f || v.context === f) && o(this, p);
    else {
      for (var h = 0, g = [], m = v.length; h < m; h++)
        (v[h].fn !== l || d && !v[h].once || f && v[h].context !== f) && g.push(v[h]);
      g.length ? this._events[p] = g.length === 1 ? g[0] : g : o(this, p);
    }
    return this;
  }, s.prototype.removeAllListeners = function(c) {
    var l;
    return c ? (l = r ? r + c : c, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})($S);
const SX = $S.exports;
var Ct = new SX();
Ct.setMaxListeners && Ct.setMaxListeners(10);
var Gc = "recharts.syncMouseEvents";
function zo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zo = function(r) {
    return typeof r;
  } : zo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, zo(e);
}
function ym(e, t) {
  return OX(e) || _X(e, t) || LS(e, t) || AX();
}
function AX() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _X(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function OX(e) {
  if (Array.isArray(e))
    return e;
}
function mm(e, t) {
  if (e == null)
    return {};
  var r = EX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function EX(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function TX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function PX(e, t, r) {
  return t && bm(e.prototype, t), r && bm(e, r), e;
}
function CX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Lf(e, t);
}
function Lf(e, t) {
  return Lf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Lf(e, t);
}
function MX(e) {
  var t = NX();
  return function() {
    var n = Gs(e), i;
    if (t) {
      var a = Gs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return kX(this, i);
  };
}
function kX(e, t) {
  return t && (zo(t) === "object" || typeof t == "function") ? t : jf(e);
}
function jf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NX() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Gs(e) {
  return Gs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Gs(e);
}
function pi(e) {
  return $X(e) || IX(e) || LS(e) || RX();
}
function RX() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LS(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Df(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Df(e, t);
  }
}
function IX(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function $X(e) {
  if (Array.isArray(e))
    return Df(e);
}
function Df(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function xm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xm(Object(r), !0).forEach(function(n) {
      Mt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Mt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var LX = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, jS = {
  x: 0,
  y: 0
}, jX = Number.isFinite ? Number.isFinite : isFinite, wm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : typeof setImmediate == "function" ? setImmediate : setTimeout, Sm = typeof cancelAnimationFrame == "function" ? cancelAnimationFrame : typeof clearImmediate == "function" ? clearImmediate : clearTimeout, DX = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, FX = function(t, r, n, i) {
  var a = r.find(function(l) {
    return l && l.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, s = i.radius;
      return B(B(B({}, i), Be(i.cx, i.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var u = a.coordinate, c = i.angle;
    return B(B(B({}, i), Be(i.cx, i.cy, u, c)), {}, {
      angle: c,
      radius: u
    });
  }
  return jS;
}, Bu = function(t, r, n) {
  var i = r.graphicalItems, a = r.dataStartIndex, o = r.dataEndIndex, s = (i || []).reduce(function(u, c) {
    var l = c.props.data;
    return l && l.length ? [].concat(pi(u), pi(l)) : u;
  }, []);
  return s && s.length > 0 ? s : n && n.props && n.props.data && n.props.data.length > 0 ? n.props.data : t && t.length && re(a) && re(o) ? t.slice(a, o + 1) : [];
}, DS = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = Bu(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(u, c) {
    var l = c.props.hide;
    if (l)
      return u;
    var f = c.props.data, d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? s : f;
      d = Ll(p, o.dataKey, i);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(pi(u), [Hq(c, d)]) : u;
  }, []);
}, Am = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = DX(a, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, l = Cq(o, s, c, u);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = DS(t, r, l, f), p = FX(n, s, l, a);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, VX = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = xS(l, a), v = n.reduce(function(h, g) {
    var m = g.props, w = m.type, x = m.dataKey, b = m.allowDataOverflow, y = m.allowDuplicatedCategory, S = m.scale, A = m.ticks, _ = g.props[o], E = Bu(t.data, {
      graphicalItems: i.filter(function(K) {
        return K.props[o] === _;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), M = E.length;
    if (!h[_]) {
      var C, k, N;
      if (x) {
        if (C = ks(E, x, w), w === "category" && p) {
          var j = M7(C);
          y && j ? (k = C, C = Ws(0, M)) : y || (C = Ey(g.props.domain, C, g).reduce(function(K, te) {
            return K.indexOf(te) >= 0 ? K : [].concat(pi(K), [te]);
          }, []));
        } else if (w === "category")
          y ? C = C.filter(function(K) {
            return K !== "" && !le(K);
          }) : C = Ey(g.props.domain, C, g).reduce(function(K, te) {
            return K.indexOf(te) >= 0 || te === "" || le(te) ? K : [].concat(pi(K), [te]);
          }, []);
        else if (w === "number") {
          var L = Iq(E, i.filter(function(K) {
            return K.props[o] === _ && !K.props.hide;
          }), x, a, l);
          L && (C = L);
        }
        p && (w === "number" || S !== "auto") && (N = ks(E, x, "category"));
      } else
        p ? C = Ws(0, M) : s && s[_] && s[_].hasStack && w === "number" ? C = d === "expand" ? [0, 1] : wS(s[_].stackGroups, u, c) : C = bS(E, i.filter(function(K) {
          return K.props[o] === _ && !K.props.hide;
        }), w, l, !0);
      if (w === "number")
        C = $f(f, C, _, a, A), g.props.domain && (C = SS(g.props.domain, C, b));
      else if (w === "category" && g.props.domain) {
        var R = g.props.domain, Q = C.every(function(K) {
          return R.indexOf(K) >= 0;
        });
        Q && (C = R);
      }
      return B(B({}, h), {}, Mt({}, _, B(B({}, g.props), {}, {
        axisType: a,
        domain: C,
        categoricalDomain: N,
        duplicateDomain: k,
        originalDomain: g.props.domain,
        isCategorical: p,
        layout: l
      })));
    }
    return h;
  }, {});
  return v;
}, BX = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = Bu(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, v = xS(l, a), h = -1, g = n.reduce(function(m, w) {
    var x = w.props[o];
    if (!m[x]) {
      h++;
      var b;
      return v ? b = Ws(0, p) : s && s[x] && s[x].hasStack ? (b = wS(s[x].stackGroups, u, c), b = $f(f, b, x, a)) : (b = SS(i.defaultProps.domain, bS(d, n.filter(function(y) {
        return y.props[o] === x && !y.props.hide;
      }), "number", l), i.defaultProps.allowDataOverflow), b = $f(f, b, x, a)), B(B({}, m), {}, Mt({}, x, B(B({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: Et(LX, "".concat(a, ".").concat(h % 2), null),
        domain: b,
        originalDomain: i.defaultProps.domain,
        isCategorical: v,
        layout: l
      })));
    }
    return m;
  }, {});
  return g;
}, UX = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), d = dr(l, a), p = {};
  return d && d.length ? p = VX(t, {
    axes: d,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = BX(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, zX = function(t) {
  var r = Dr(t), n = Fr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: vh(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: mf(r, n)
  };
}, _m = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Hr(r, _a.displayName), a = i && i.props && i.props.startIndex || 0, o = i && i.props && i.props.endIndex || t.data && t.data.length - 1 || 0;
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: le(n) ? !1 : n
  };
}, WX = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Zr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Om = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, qX = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, l = n.height, f = n.children, d = n.margin || {}, p = Hr(f, _a.displayName), v = Hr(f, ga.displayName), h = Object.keys(u).reduce(function(x, b) {
    var y = u[b], S = y.orientation;
    return !y.mirror && !y.hide ? B(B({}, x), {}, Mt({}, S, x[S] + y.width)) : x;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), g = Object.keys(o).reduce(function(x, b) {
    var y = o[b], S = y.orientation;
    return !y.mirror && !y.hide ? B(B({}, x), {}, Mt({}, S, Et(x, "".concat(S)) + y.height)) : x;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), m = B(B({}, g), h), w = m.bottom;
  return p && (m.bottom += p.props.height || _a.defaultProps.height), v && r && (m = Nq(m, i, n, r)), B(B({
    brushBottom: w
  }, m), {}, {
    width: c - m.left - m.right,
    height: l - m.top - m.bottom
  });
}, HX = function(t) {
  var r, n, i = t.chartName, a = t.GraphicalChild, o = t.defaultTooltipEventType, s = o === void 0 ? "axis" : o, u = t.validateTooltipEventTypes, c = u === void 0 ? ["axis"] : u, l = t.axisComponents, f = t.legendContent, d = t.formatAxisMap, p = t.defaultProps, v = function(m, w) {
    var x = w.graphicalItems, b = w.stackGroups, y = w.offset, S = w.updateId, A = w.dataStartIndex, _ = w.dataEndIndex, E = m.barSize, M = m.layout, C = m.barGap, k = m.barCategoryGap, N = m.maxBarSize, j = Om(M), L = j.numericAxisName, R = j.cateAxisName, Q = WX(x), K = Q && Mq({
      barSize: E,
      stackGroups: b
    }), te = [];
    return x.forEach(function(I, V) {
      var X = Bu(m.data, {
        dataStartIndex: A,
        dataEndIndex: _
      }, I), H = I.props, $ = H.dataKey, W = H.maxBarSize, ee = I.props["".concat(L, "Id")], se = I.props["".concat(R, "Id")], J = l.reduce(function(hn, $r) {
        var In, Ha = w["".concat($r.axisType, "Map")], Ga = I.props["".concat($r.axisType, "Id")], Mi = Ha && Ha[Ga];
        return B(B({}, hn), {}, (In = {}, Mt(In, $r.axisType, Mi), Mt(In, "".concat($r.axisType, "Ticks"), Fr(Mi)), In));
      }, {}), D = J[R], Y = J["".concat(R, "Ticks")], ie = b && b[ee] && b[ee].hasStack && Wq(I, b[ee].stackGroups), T = Zr(I.type).indexOf("Bar") >= 0, he = mf(D, Y), q = [];
      if (T) {
        var ye, Se, dt = le(W) ? N : W, nr = (ye = (Se = mf(D, Y, !0)) !== null && Se !== void 0 ? Se : dt) !== null && ye !== void 0 ? ye : 0;
        q = kq({
          barGap: C,
          barCategoryGap: k,
          bandSize: nr !== he ? nr : he,
          sizeList: K[se],
          maxBarSize: dt
        }), nr !== he && (q = q.map(function(hn) {
          return B(B({}, hn), {}, {
            position: B(B({}, hn.position), {}, {
              offset: hn.position.offset - nr / 2
            })
          });
        }));
      }
      var fn = I && I.type && I.type.getComposedData;
      if (fn) {
        var dn;
        te.push({
          props: B(B({}, fn(B(B({}, J), {}, {
            displayedData: X,
            props: m,
            dataKey: $,
            item: I,
            bandSize: he,
            barPosition: q,
            offset: y,
            stackedData: ie,
            layout: M,
            dataStartIndex: A,
            dataEndIndex: _
          }))), {}, (dn = {
            key: I.key || "item-".concat(V)
          }, Mt(dn, L, J[L]), Mt(dn, R, J[R]), Mt(dn, "animationId", S), dn)),
          childIndex: sU(I, m.children),
          item: I
        });
      }
    }), te;
  }, h = function(m, w) {
    var x = m.props, b = m.dataStartIndex, y = m.dataEndIndex, S = m.updateId;
    if (!Rg({
      props: x
    }))
      return null;
    var A = x.children, _ = x.layout, E = x.stackOffset, M = x.data, C = x.reverseStackOrder, k = Om(_), N = k.numericAxisName, j = k.cateAxisName, L = dr(A, a), R = Bq(M, L, "".concat(N, "Id"), "".concat(j, "Id"), E, C), Q = l.reduce(function(X, H) {
      var $ = "".concat(H.axisType, "Map");
      return B(B({}, X), {}, Mt({}, $, UX(x, B(B({}, H), {}, {
        graphicalItems: L,
        stackGroups: H.axisType === N && R,
        dataStartIndex: b,
        dataEndIndex: y
      }))));
    }, {}), K = qX(B(B({}, Q), {}, {
      props: x,
      graphicalItems: L
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(Q).forEach(function(X) {
      Q[X] = d(x, Q[X], K, X.replace("Map", ""), i);
    });
    var te = Q["".concat(j, "Map")], I = zX(te), V = v(x, B(B({}, Q), {}, {
      dataStartIndex: b,
      dataEndIndex: y,
      updateId: S,
      graphicalItems: L,
      stackGroups: R,
      offset: K
    }));
    return B(B({
      formattedGraphicalItems: V,
      graphicalItems: L,
      offset: K,
      stackGroups: R
    }, I), Q);
  };
  return n = r = /* @__PURE__ */ function(g) {
    CX(w, g);
    var m = MX(w);
    function w(x) {
      var b;
      return TX(this, w), b = m.call(this, x), b.uniqueChartId = void 0, b.clipPathId = void 0, b.legendInstance = void 0, b.deferId = void 0, b.container = void 0, b.clearDeferId = function() {
        !le(b.deferId) && Sm && Sm(b.deferId), b.deferId = null;
      }, b.handleLegendBBoxUpdate = function(y) {
        if (y) {
          var S = b.state, A = S.dataStartIndex, _ = S.dataEndIndex, E = S.updateId;
          b.setState(B({
            legendBBox: y
          }, h({
            props: b.props,
            dataStartIndex: A,
            dataEndIndex: _,
            updateId: E
          }, B(B({}, b.state), {}, {
            legendBBox: y
          }))));
        }
      }, b.handleReceiveSyncEvent = function(y, S, A) {
        var _ = b.props.syncId;
        _ === y && S !== b.uniqueChartId && (b.clearDeferId(), b.deferId = wm && wm(b.applySyncEvent.bind(jf(b), A)));
      }, b.handleBrushChange = function(y) {
        var S = y.startIndex, A = y.endIndex;
        if (S !== b.state.dataStartIndex || A !== b.state.dataEndIndex) {
          var _ = b.state.updateId;
          b.setState(function() {
            return B({
              dataStartIndex: S,
              dataEndIndex: A
            }, h({
              props: b.props,
              dataStartIndex: S,
              dataEndIndex: A,
              updateId: _
            }, b.state));
          }), b.triggerSyncEvent({
            dataStartIndex: S,
            dataEndIndex: A
          });
        }
      }, b.handleMouseEnter = function(y) {
        var S = b.props.onMouseEnter, A = b.getMouseInfo(y);
        if (A) {
          var _ = B(B({}, A), {}, {
            isTooltipActive: !0
          });
          b.setState(_), b.triggerSyncEvent(_), de(S) && S(_, y);
        }
      }, b.triggeredAfterMouseMove = function(y) {
        var S = b.props.onMouseMove, A = b.getMouseInfo(y), _ = A ? B(B({}, A), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        b.setState(_), b.triggerSyncEvent(_), de(S) && S(_, y);
      }, b.handleItemMouseEnter = function(y) {
        b.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: y,
            activePayload: y.tooltipPayload,
            activeCoordinate: y.tooltipPosition || {
              x: y.cx,
              y: y.cy
            }
          };
        });
      }, b.handleItemMouseLeave = function() {
        b.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }, b.handleMouseMove = function(y) {
        y && de(y.persist) && y.persist(), b.triggeredAfterMouseMove(y);
      }, b.handleMouseLeave = function(y) {
        var S = b.props.onMouseLeave, A = {
          isTooltipActive: !1
        };
        b.setState(A), b.triggerSyncEvent(A), de(S) && S(A, y), b.cancelThrottledTriggerAfterMouseMove();
      }, b.handleOuterEvent = function(y) {
        var S = oU(y), A = Et(b.props, "".concat(S));
        if (S && de(A)) {
          var _;
          /.*touch.*/i.test(S) ? _ = b.getMouseInfo(y.changedTouches[0]) : _ = b.getMouseInfo(y);
          var E = A;
          E(_, y);
        }
      }, b.handleClick = function(y) {
        var S = b.props.onClick, A = b.getMouseInfo(y);
        if (A) {
          var _ = B(B({}, A), {}, {
            isTooltipActive: !0
          });
          b.setState(_), b.triggerSyncEvent(_), de(S) && S(_, y);
        }
      }, b.handleMouseDown = function(y) {
        var S = b.props.onMouseDown;
        if (de(S)) {
          var A = b.getMouseInfo(y);
          S(A, y);
        }
      }, b.handleMouseUp = function(y) {
        var S = b.props.onMouseUp;
        if (de(S)) {
          var A = b.getMouseInfo(y);
          S(A, y);
        }
      }, b.handleTouchMove = function(y) {
        y.changedTouches != null && y.changedTouches.length > 0 && b.handleMouseMove(y.changedTouches[0]);
      }, b.handleTouchStart = function(y) {
        y.changedTouches != null && y.changedTouches.length > 0 && b.handleMouseDown(y.changedTouches[0]);
      }, b.handleTouchEnd = function(y) {
        y.changedTouches != null && y.changedTouches.length > 0 && b.handleMouseUp(y.changedTouches[0]);
      }, b.verticalCoordinatesGenerator = function(y) {
        var S = y.xAxis, A = y.width, _ = y.height, E = y.offset;
        return Sy(Sn.getTicks(B(B(B({}, Sn.defaultProps), S), {}, {
          ticks: Fr(S, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: A,
            height: _
          }
        })), E.left, E.left + E.width);
      }, b.horizontalCoordinatesGenerator = function(y) {
        var S = y.yAxis, A = y.width, _ = y.height, E = y.offset;
        return Sy(Sn.getTicks(B(B(B({}, Sn.defaultProps), S), {}, {
          ticks: Fr(S, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: A,
            height: _
          }
        })), E.top, E.top + E.height);
      }, b.axesTicksGenerator = function(y) {
        return Fr(y, !0);
      }, b.renderCursor = function(y) {
        var S = b.state, A = S.isTooltipActive, _ = S.activeCoordinate, E = S.activePayload, M = S.offset, C = S.activeTooltipIndex, k = b.getTooltipEventType();
        if (!y || !y.props.cursor || !A || !_ || i !== "ScatterChart" && k !== "axis")
          return null;
        var N = b.props.layout, j, L = Ls;
        if (i === "ScatterChart")
          j = _, L = TS;
        else if (i === "BarChart")
          j = b.getCursorRectangle(), L = Vh;
        else if (N === "radial") {
          var R = b.getCursorPoints(), Q = R.cx, K = R.cy, te = R.radius, I = R.startAngle, V = R.endAngle;
          j = {
            cx: Q,
            cy: K,
            startAngle: I,
            endAngle: V,
            innerRadius: te,
            outerRadius: te
          }, L = Is;
        } else
          j = {
            points: b.getCursorPoints()
          }, L = Ls;
        var X = y.key || "_recharts-cursor", H = B(B(B(B({
          stroke: "#ccc",
          pointerEvents: "none"
        }, M), j), ge(y.props.cursor)), {}, {
          payload: E,
          payloadIndex: C,
          key: X,
          className: "recharts-tooltip-cursor"
        });
        return /* @__PURE__ */ Yr(y.props.cursor) ? /* @__PURE__ */ vt(y.props.cursor, H) : /* @__PURE__ */ Ot(L, H);
      }, b.renderPolarAxis = function(y, S, A) {
        var _ = Et(y, "type.axisType"), E = Et(b.state, "".concat(_, "Map")), M = E[y.props["".concat(_, "Id")]];
        return /* @__PURE__ */ vt(y, B(B({}, M), {}, {
          className: _,
          key: y.key || "".concat(S, "-").concat(A),
          ticks: Fr(M, !0)
        }));
      }, b.renderXAxis = function(y, S, A) {
        var _ = b.state.xAxisMap, E = _[y.props.xAxisId];
        return b.renderAxis(E, y, S, A);
      }, b.renderYAxis = function(y, S, A) {
        var _ = b.state.yAxisMap, E = _[y.props.yAxisId];
        return b.renderAxis(E, y, S, A);
      }, b.renderGrid = function(y) {
        var S = b.state, A = S.xAxisMap, _ = S.yAxisMap, E = S.offset, M = b.props, C = M.width, k = M.height, N = Dr(A), j = fX(_, function(Q) {
          return kS(Q.domain, jX);
        }), L = j || Dr(_), R = y.props || {};
        return /* @__PURE__ */ vt(y, {
          key: y.key || "grid",
          x: re(R.x) ? R.x : E.left,
          y: re(R.y) ? R.y : E.top,
          width: re(R.width) ? R.width : E.width,
          height: re(R.height) ? R.height : E.height,
          xAxis: N,
          yAxis: L,
          offset: E,
          chartWidth: C,
          chartHeight: k,
          verticalCoordinatesGenerator: R.verticalCoordinatesGenerator || b.verticalCoordinatesGenerator,
          horizontalCoordinatesGenerator: R.horizontalCoordinatesGenerator || b.horizontalCoordinatesGenerator
        });
      }, b.renderPolarGrid = function(y) {
        var S = y.props, A = S.radialLines, _ = S.polarAngles, E = S.polarRadius, M = b.state, C = M.radiusAxisMap, k = M.angleAxisMap, N = Dr(C), j = Dr(k), L = j.cx, R = j.cy, Q = j.innerRadius, K = j.outerRadius;
        return /* @__PURE__ */ vt(y, {
          polarAngles: Re(_) ? _ : Fr(j, !0).map(function(te) {
            return te.coordinate;
          }),
          polarRadius: Re(E) ? E : Fr(N, !0).map(function(te) {
            return te.coordinate;
          }),
          cx: L,
          cy: R,
          innerRadius: Q,
          outerRadius: K,
          key: y.key || "polar-grid",
          radialLines: A
        });
      }, b.renderLegend = function() {
        var y = b.state.formattedGraphicalItems, S = b.props, A = S.children, _ = S.width, E = S.height, M = b.props.margin || {}, C = _ - (M.left || 0) - (M.right || 0), k = yS({
          children: A,
          formattedGraphicalItems: y,
          legendWidth: C,
          legendContent: f
        });
        if (!k)
          return null;
        var N = k.item, j = mm(k, ["item"]);
        return /* @__PURE__ */ vt(N, B(B({}, j), {}, {
          chartWidth: _,
          chartHeight: E,
          margin: M,
          ref: function(R) {
            b.legendInstance = R;
          },
          onBBoxUpdate: b.handleLegendBBoxUpdate
        }));
      }, b.renderTooltip = function() {
        var y = b.props.children, S = Hr(y, Gn.displayName);
        if (!S)
          return null;
        var A = b.state, _ = A.isTooltipActive, E = A.activeCoordinate, M = A.activePayload, C = A.activeLabel, k = A.offset;
        return /* @__PURE__ */ vt(S, {
          viewBox: B(B({}, k), {}, {
            x: k.left,
            y: k.top
          }),
          active: _,
          label: C,
          payload: _ ? M : [],
          coordinate: E
        });
      }, b.renderBrush = function(y) {
        var S = b.props, A = S.margin, _ = S.data, E = b.state, M = E.offset, C = E.dataStartIndex, k = E.dataEndIndex, N = E.updateId;
        return /* @__PURE__ */ vt(y, {
          key: y.key || "_recharts-brush",
          onChange: lo(b.handleBrushChange, null, y.props.onChange),
          data: _,
          x: re(y.props.x) ? y.props.x : M.left,
          y: re(y.props.y) ? y.props.y : M.top + M.height + M.brushBottom - (A.bottom || 0),
          width: re(y.props.width) ? y.props.width : M.width,
          startIndex: C,
          endIndex: k,
          updateId: "brush-".concat(N)
        });
      }, b.renderReferenceElement = function(y, S, A) {
        if (!y)
          return null;
        var _ = jf(b), E = _.clipPathId, M = b.state, C = M.xAxisMap, k = M.yAxisMap, N = M.offset, j = y.props, L = j.xAxisId, R = j.yAxisId;
        return /* @__PURE__ */ vt(y, {
          key: y.key || "".concat(S, "-").concat(A),
          xAxis: C[L],
          yAxis: k[R],
          viewBox: {
            x: N.left,
            y: N.top,
            width: N.width,
            height: N.height
          },
          clipPathId: E
        });
      }, b.renderActivePoints = function(y) {
        var S = y.item, A = y.activePoint, _ = y.basePoint, E = y.childIndex, M = y.isRange, C = [], k = S.props.key, N = S.item.props, j = N.activeDot, L = N.dataKey, R = B(B({
          index: E,
          dataKey: L,
          cx: A.x,
          cy: A.y,
          r: 4,
          fill: Fh(S.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: A.payload,
          value: A.value,
          key: "".concat(k, "-activePoint-").concat(E)
        }, ge(j)), rs(j));
        return C.push(w.renderActiveDot(j, R)), _ ? C.push(w.renderActiveDot(j, B(B({}, R), {}, {
          cx: _.x,
          cy: _.y,
          key: "".concat(k, "-basePoint-").concat(E)
        }))) : M && C.push(null), C;
      }, b.renderGraphicChild = function(y, S, A) {
        var _ = b.filterFormatItem(y, S, A);
        if (!_)
          return null;
        var E = b.getTooltipEventType(), M = b.state, C = M.isTooltipActive, k = M.tooltipAxis, N = M.activeTooltipIndex, j = M.activeLabel, L = b.props.children, R = Hr(L, Gn.displayName), Q = _.props, K = Q.points, te = Q.isRange, I = Q.baseLine, V = _.item.props, X = V.activeDot, H = V.hide, $ = !H && C && R && X && N >= 0, W = {};
        E !== "axis" && R && R.props.trigger === "click" ? W = {
          onClick: lo(b.handleItemMouseEnter, null, y.props.onCLick)
        } : E !== "axis" && (W = {
          onMouseLeave: lo(b.handleItemMouseLeave, null, y.props.onMouseLeave),
          onMouseEnter: lo(b.handleItemMouseEnter, null, y.props.onMouseEnter)
        });
        var ee = /* @__PURE__ */ vt(y, B(B({}, _.props), W));
        function se(ie) {
          return typeof k.dataKey == "function" ? k.dataKey(ie.payload) : null;
        }
        if ($) {
          var J, D;
          if (k.dataKey && !k.allowDuplicatedCategory) {
            var Y = typeof k.dataKey == "function" ? se : "payload.".concat(k.dataKey.toString());
            J = Ll(K, Y, j), D = te && I && Ll(I, Y, j);
          } else
            J = K[N], D = te && I && I[N];
          if (!le(J))
            return [ee].concat(pi(b.renderActivePoints({
              item: _,
              activePoint: J,
              basePoint: D,
              childIndex: N,
              isRange: te
            })));
        }
        return te ? [ee, null, null] : [ee, null];
      }, b.renderCustomized = function(y, S, A) {
        return /* @__PURE__ */ vt(y, B(B({
          key: "recharts-customized-".concat(A)
        }, b.props), b.state));
      }, b.uniqueChartId = le(x.id) ? _u("recharts") : x.id, b.clipPathId = "".concat(b.uniqueChartId, "-clip"), x.throttleDelay && (b.triggeredAfterMouseMove = gX(b.triggeredAfterMouseMove, x.throttleDelay)), b.state = {}, b;
    }
    return PX(w, [{
      key: "componentDidMount",
      value: function() {
        le(this.props.syncId) || this.addListener();
      }
    }, {
      key: "componentDidUpdate",
      value: function(b) {
        le(b.syncId) && !le(this.props.syncId) && this.addListener(), !le(b.syncId) && le(this.props.syncId) && this.removeListener();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.clearDeferId(), le(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove();
      }
    }, {
      key: "cancelThrottledTriggerAfterMouseMove",
      value: function() {
        typeof this.triggeredAfterMouseMove.cancel == "function" && this.triggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var b = Hr(this.props.children, Gn.displayName);
        if (b && wX(b.props.shared)) {
          var y = b.props.shared ? "axis" : "item";
          return c.indexOf(y) >= 0 ? y : s;
        }
        return s;
      }
    }, {
      key: "getMouseInfo",
      value: function(b) {
        if (!this.container)
          return null;
        var y = jB(this.container), S = DB(b, y), A = this.inRange(S.chartX, S.chartY);
        if (!A)
          return null;
        var _ = this.state, E = _.xAxisMap, M = _.yAxisMap, C = this.getTooltipEventType();
        if (C !== "axis" && E && M) {
          var k = Dr(E).scale, N = Dr(M).scale, j = k && k.invert ? k.invert(S.chartX) : null, L = N && N.invert ? N.invert(S.chartY) : null;
          return B(B({}, S), {}, {
            xValue: j,
            yValue: L
          });
        }
        var R = Am(this.state, this.props.data, this.props.layout, A);
        return R ? B(B({}, S), R) : null;
      }
    }, {
      key: "getCursorRectangle",
      value: function() {
        var b = this.props.layout, y = this.state, S = y.activeCoordinate, A = y.offset, _ = y.tooltipAxisBandSize, E = _ / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: b === "horizontal" ? S.x - E : A.left + 0.5,
          y: b === "horizontal" ? A.top + 0.5 : S.y - E,
          width: b === "horizontal" ? _ : A.width - 1,
          height: b === "horizontal" ? A.height - 1 : _
        };
      }
    }, {
      key: "getCursorPoints",
      value: function() {
        var b = this.props.layout, y = this.state, S = y.activeCoordinate, A = y.offset, _, E, M, C;
        if (b === "horizontal")
          _ = S.x, M = _, E = A.top, C = A.top + A.height;
        else if (b === "vertical")
          E = S.y, C = E, _ = A.left, M = A.left + A.width;
        else if (!le(S.cx) || !le(S.cy))
          if (b === "centric") {
            var k = S.cx, N = S.cy, j = S.innerRadius, L = S.outerRadius, R = S.angle, Q = Be(k, N, j, R), K = Be(k, N, L, R);
            _ = Q.x, E = Q.y, M = K.x, C = K.y;
          } else {
            var te = S.cx, I = S.cy, V = S.radius, X = S.startAngle, H = S.endAngle, $ = Be(te, I, V, X), W = Be(te, I, V, H);
            return {
              points: [$, W],
              cx: te,
              cy: I,
              radius: V,
              startAngle: X,
              endAngle: H
            };
          }
        return [{
          x: _,
          y: E
        }, {
          x: M,
          y: C
        }];
      }
    }, {
      key: "inRange",
      value: function(b, y) {
        var S = this.props.layout;
        if (S === "horizontal" || S === "vertical") {
          var A = this.state.offset, _ = b >= A.left && b <= A.left + A.width && y >= A.top && y <= A.top + A.height;
          return _ ? {
            x: b,
            y
          } : null;
        }
        var E = this.state, M = E.angleAxisMap, C = E.radiusAxisMap;
        if (M && C) {
          var k = Dr(M);
          return Cy({
            x: b,
            y
          }, k);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var b = this.props.children, y = this.getTooltipEventType(), S = Hr(b, Gn.displayName), A = {};
        S && y === "axis" && (S.props.trigger === "click" ? A = {
          onClick: this.handleClick
        } : A = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var _ = rs(this.props, this.handleOuterEvent);
        return B(B({}, _), A);
      }
    }, {
      key: "addListener",
      value: function() {
        Ct.on(Gc, this.handleReceiveSyncEvent), Ct.setMaxListeners && Ct._maxListeners && Ct.setMaxListeners(Ct._maxListeners + 1);
      }
    }, {
      key: "removeListener",
      value: function() {
        Ct.removeListener(Gc, this.handleReceiveSyncEvent), Ct.setMaxListeners && Ct._maxListeners && Ct.setMaxListeners(Ct._maxListeners - 1);
      }
    }, {
      key: "triggerSyncEvent",
      value: function(b) {
        var y = this.props.syncId;
        le(y) || Ct.emit(Gc, y, this.uniqueChartId, b);
      }
    }, {
      key: "applySyncEvent",
      value: function(b) {
        var y = this.props, S = y.layout, A = y.syncMethod, _ = this.state.updateId, E = b.dataStartIndex, M = b.dataEndIndex;
        if (!le(b.dataStartIndex) || !le(b.dataEndIndex))
          this.setState(B({
            dataStartIndex: E,
            dataEndIndex: M
          }, h({
            props: this.props,
            dataStartIndex: E,
            dataEndIndex: M,
            updateId: _
          }, this.state)));
        else if (le(b.activeTooltipIndex))
          this.setState(b);
        else {
          var C = b.chartX, k = b.chartY, N = b.activeTooltipIndex, j = this.state, L = j.offset, R = j.tooltipTicks;
          if (!L)
            return;
          if (typeof A == "function")
            N = A(R, b);
          else if (A === "value") {
            N = -1;
            for (var Q = 0; Q < R.length; Q++)
              if (R[Q].value === b.activeLabel) {
                N = Q;
                break;
              }
          }
          var K = B(B({}, L), {}, {
            x: L.left,
            y: L.top
          }), te = Math.min(C, K.x + K.width), I = Math.min(k, K.y + K.height), V = R[N] && R[N].value, X = DS(this.state, this.props.data, N), H = R[N] ? {
            x: S === "horizontal" ? R[N].coordinate : te,
            y: S === "horizontal" ? I : R[N].coordinate
          } : jS;
          this.setState(B(B({}, b), {}, {
            activeLabel: V,
            activeCoordinate: H,
            activePayload: X,
            activeTooltipIndex: N
          }));
        }
      }
    }, {
      key: "filterFormatItem",
      value: function(b, y, S) {
        for (var A = this.state.formattedGraphicalItems, _ = 0, E = A.length; _ < E; _++) {
          var M = A[_];
          if (M.item === b || M.props.key === b.key || y === Zr(M.item.type) && S === M.childIndex)
            return M;
        }
        return null;
      }
    }, {
      key: "renderAxis",
      value: function(b, y, S, A) {
        var _ = this.props, E = _.width, M = _.height;
        return /* @__PURE__ */ Ot(Sn, {
          ...b,
          className: "recharts-".concat(b.axisType, " ").concat(b.axisType),
          key: y.key || "".concat(S, "-").concat(A),
          viewBox: {
            x: 0,
            y: 0,
            width: E,
            height: M
          },
          ticksGenerator: this.axesTicksGenerator
        });
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var b = this.clipPathId, y = this.state.offset, S = y.left, A = y.top, _ = y.height, E = y.width;
        return /* @__PURE__ */ O("defs", {
          children: /* @__PURE__ */ O("clipPath", {
            id: b,
            children: /* @__PURE__ */ O("rect", {
              x: S,
              y: A,
              height: _,
              width: E
            })
          })
        });
      }
    }, {
      key: "getXScales",
      value: function() {
        var b = this.state.xAxisMap;
        return b ? Object.entries(b).reduce(function(y, S) {
          var A = ym(S, 2), _ = A[0], E = A[1];
          return B(B({}, y), {}, Mt({}, _, E.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var b = this.state.yAxisMap;
        return b ? Object.entries(b).reduce(function(y, S) {
          var A = ym(S, 2), _ = A[0], E = A[1];
          return B(B({}, y), {}, Mt({}, _, E.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(b) {
        var y, S;
        return (y = this.state.xAxisMap) === null || y === void 0 || (S = y[b]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(b) {
        var y, S;
        return (y = this.state.yAxisMap) === null || y === void 0 || (S = y[b]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(b) {
        var y = this.state.formattedGraphicalItems;
        if (y && y.length)
          for (var S = 0, A = y.length; S < A; S++) {
            var _ = y[S], E = _.props, M = _.item, C = Zr(M.type);
            if (C === "Bar") {
              var k = (E.data || []).find(function(j) {
                return rG(b, j);
              });
              if (k)
                return {
                  graphicalItem: _,
                  payload: k
                };
            } else if (C === "RadialBar") {
              var N = (E.data || []).find(function(j) {
                return Cy(b, j);
              });
              if (N)
                return {
                  graphicalItem: _,
                  payload: N
                };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var b = this;
        if (!Rg(this))
          return null;
        var y = this.props, S = y.children, A = y.className, _ = y.width, E = y.height, M = y.style, C = y.compact, k = y.title, N = y.desc, j = mm(y, ["children", "className", "width", "height", "style", "compact", "title", "desc"]), L = ge(j), R = {
          CartesianGrid: {
            handler: this.renderGrid,
            once: !0
          },
          ReferenceArea: {
            handler: this.renderReferenceElement
          },
          ReferenceLine: {
            handler: this.renderReferenceElement
          },
          ReferenceDot: {
            handler: this.renderReferenceElement
          },
          XAxis: {
            handler: this.renderXAxis
          },
          YAxis: {
            handler: this.renderYAxis
          },
          Brush: {
            handler: this.renderBrush,
            once: !0
          },
          Bar: {
            handler: this.renderGraphicChild
          },
          Line: {
            handler: this.renderGraphicChild
          },
          Area: {
            handler: this.renderGraphicChild
          },
          Radar: {
            handler: this.renderGraphicChild
          },
          RadialBar: {
            handler: this.renderGraphicChild
          },
          Scatter: {
            handler: this.renderGraphicChild
          },
          Pie: {
            handler: this.renderGraphicChild
          },
          Funnel: {
            handler: this.renderGraphicChild
          },
          Tooltip: {
            handler: this.renderCursor,
            once: !0
          },
          PolarGrid: {
            handler: this.renderPolarGrid,
            once: !0
          },
          PolarAngleAxis: {
            handler: this.renderPolarAxis
          },
          PolarRadiusAxis: {
            handler: this.renderPolarAxis
          },
          Customized: {
            handler: this.renderCustomized
          }
        };
        if (C)
          return /* @__PURE__ */ z(ml, {
            ...L,
            width: _,
            height: E,
            title: k,
            desc: N,
            children: [this.renderClipPath(), $g(S, R)]
          });
        var Q = this.parseEventsOfWrapper();
        return /* @__PURE__ */ z("div", {
          className: We("recharts-wrapper", A),
          style: B({
            position: "relative",
            cursor: "default",
            width: _,
            height: E
          }, M),
          ...Q,
          ref: function(te) {
            b.container = te;
          },
          children: [/* @__PURE__ */ z(ml, {
            ...L,
            width: _,
            height: E,
            title: k,
            desc: N,
            children: [this.renderClipPath(), $g(S, R)]
          }), this.renderLegend(), this.renderTooltip()]
        });
      }
    }]), w;
  }(Hf), r.displayName = i, r.defaultProps = B({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, p), r.getDerivedStateFromProps = function(g, m) {
    var w = g.data, x = g.children, b = g.width, y = g.height, S = g.layout, A = g.stackOffset, _ = g.margin;
    if (le(m.updateId)) {
      var E = _m(g);
      return B(B(B({}, E), {}, {
        updateId: 0
      }, h(B(B({
        props: g
      }, E), {}, {
        updateId: 0
      }), m)), {}, {
        prevData: w,
        prevWidth: b,
        prevHeight: y,
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: _,
        prevChildren: x
      });
    }
    if (w !== m.prevData || b !== m.prevWidth || y !== m.prevHeight || S !== m.prevLayout || A !== m.prevStackOffset || !Qn(_, m.prevMargin)) {
      var M = _m(g), C = {
        chartX: m.chartX,
        chartY: m.chartY,
        isTooltipActive: m.isTooltipActive
      }, k = B(B({}, Am(m, w, S)), {}, {
        updateId: m.updateId + 1
      }), N = B(B(B({}, M), C), k);
      return B(B(B({}, N), h(B({
        props: g
      }, N), m)), {}, {
        prevData: w,
        prevWidth: b,
        prevHeight: y,
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: _,
        prevChildren: x
      });
    }
    if (!uw(x, m.prevChildren)) {
      var j = !le(w), L = j ? m.updateId : m.updateId + 1;
      return B(B({
        updateId: L
      }, h(B(B({
        props: g
      }, m), {}, {
        updateId: L
      }), m)), {}, {
        prevChildren: x
      });
    }
    return null;
  }, r.renderActiveDot = function(g, m) {
    var w;
    return /* @__PURE__ */ Yr(g) ? w = /* @__PURE__ */ vt(g, m) : de(g) ? w = g(m) : w = /* @__PURE__ */ O(Bh, {
      ...m
    }), /* @__PURE__ */ O(Xe, {
      className: "recharts-active-dot",
      children: w
    }, m.key);
  }, n;
}, GX = HX({
  chartName: "PieChart",
  GraphicalChild: Qt,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Vu
  }, {
    axisType: "radiusAxis",
    AxisComp: Fu
  }],
  formatAxisMap: Qq,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
/*!
 *  decimal.js v10.4.2
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Kn = 9e15, ln = 1e9, Ff = "0123456789abcdef", Ys = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ks = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Vf = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Kn,
  maxE: Kn,
  crypto: !1
}, FS, Or, ve = !0, Uu = "[DecimalError] ", rn = Uu + "Invalid argument: ", VS = Uu + "Precision limit exceeded", BS = Uu + "crypto unavailable", US = "[object Decimal]", yt = Math.floor, tt = Math.pow, YX = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, KX = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, XX = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, zS = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, rr = 1e7, ce = 7, ZX = 9007199254740991, JX = Ys.length - 1, Bf = Ks.length - 1, U = { toStringTag: US };
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
U.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
U.clampedTo = U.clamp = function(e, t) {
  var r, n = this, i = n.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(NaN);
  if (e.gt(t))
    throw Error(rn + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, u = a.s, c = e.s;
  if (!o || !s)
    return !u || !c ? NaN : u !== c ? u : o === s ? 0 : !o ^ u < 0 ? 1 : -1;
  if (!o[0] || !s[0])
    return o[0] ? u : s[0] ? -c : 0;
  if (u !== c)
    return u;
  if (a.e !== e.e)
    return a.e > e.e ^ u < 0 ? 1 : -1;
  for (n = o.length, i = s.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (o[t] !== s[t])
      return o[t] > s[t] ^ u < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ u < 0 ? 1 : -1;
};
U.cosine = U.cos = function() {
  var e, t, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + ce, n.rounding = 1, r = QX(n, YS(n, r)), n.precision = e, n.rounding = t, ue(Or == 2 || Or == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN);
};
U.cubeRoot = U.cbrt = function() {
  var e, t, r, n, i, a, o, s, u, c, l = this, f = l.constructor;
  if (!l.isFinite() || l.isZero())
    return new f(l);
  for (ve = !1, a = l.s * tt(l.s * l, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (r = ft(l.d), e = l.e, (a = (e - r.length + 1) % 3) && (r += a == 1 || a == -2 ? "0" : "00"), a = tt(r, 1 / 3), e = yt((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? r = "5e" + e : (r = a.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new f(r), n.s = l.s) : n = new f(a.toString()), o = (e = f.precision) + 3; ; )
    if (s = n, u = s.times(s).times(s), c = u.plus(l), n = De(c.plus(l).times(s), c.plus(u), o + 2, 1), ft(s.d).slice(0, o) === (r = ft(n.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !i && r == "4999") {
        if (!i && (ue(s, e + 1, 0), s.times(s).times(s).eq(l))) {
          n = s;
          break;
        }
        o += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(n, e + 1, 1), t = !n.times(n).times(n).eq(l));
        break;
      }
  return ve = !0, ue(n, e, f.rounding, t);
};
U.decimalPlaces = U.dp = function() {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - yt(this.e / ce)) * ce, e = t[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
U.dividedBy = U.div = function(e) {
  return De(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.divToInt = function(e) {
  var t = this, r = t.constructor;
  return ue(De(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
U.equals = U.eq = function(e) {
  return this.cmp(e) === 0;
};
U.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
U.greaterThan = U.gt = function(e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
U.hyperbolicCosine = U.cosh = function() {
  var e, t, r, n, i, a = this, o = a.constructor, s = new o(1);
  if (!a.isFinite())
    return new o(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return s;
  r = o.precision, n = o.rounding, o.precision = r + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Wu(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = vi(o, 1, a.times(t), new o(1), !0);
  for (var u, c = e, l = new o(8); c--; )
    u = a.times(a), a = s.minus(u.times(l.minus(u.times(l))));
  return ue(a, o.precision = r, o.rounding = n, !0);
};
U.hyperbolicSine = U.sinh = function() {
  var e, t, r, n, i = this, a = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new a(i);
  if (t = a.precision, r = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, n = i.d.length, n < 3)
    i = vi(a, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Wu(5, e)), i = vi(a, 2, i, i, !0);
    for (var o, s = new a(5), u = new a(16), c = new a(20); e--; )
      o = i.times(i), i = i.times(s.plus(o.times(u.times(o).plus(c))));
  }
  return a.precision = t, a.rounding = r, ue(i, t, r, !0);
};
U.hyperbolicTangent = U.tanh = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, De(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
};
U.inverseCosine = U.acos = function() {
  var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, a = r.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? er(r, i, a) : new r(0) : new r(NaN) : t.isZero() ? er(r, i + 4, a).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = er(r, i + 4, a).times(0.5), r.precision = i, r.rounding = a, e.minus(t));
};
U.inverseHyperbolicCosine = U.acosh = function() {
  var e, t, r = this, n = r.constructor;
  return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, ve = !1, r = r.times(r).minus(1).sqrt().plus(r), ve = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r);
};
U.inverseHyperbolicSine = U.asinh = function() {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, ve = !1, r = r.times(r).plus(1).sqrt().plus(r), ve = !0, n.precision = e, n.rounding = t, r.ln());
};
U.inverseHyperbolicTangent = U.atanh = function() {
  var e, t, r, n, i = this, a = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ue(new a(i), e, t, !0) : (a.precision = r = n - i.e, i = De(i.plus(1), new a(1).minus(i), r + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(0.5))) : new a(NaN);
};
U.inverseSine = U.asin = function() {
  var e, t, r, n, i = this, a = i.constructor;
  return i.isZero() ? new a(i) : (t = i.abs().cmp(1), r = a.precision, n = a.rounding, t !== -1 ? t === 0 ? (e = er(a, r + 4, n).times(0.5), e.s = i.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = n, i.times(2)));
};
U.inverseTangent = U.atan = function() {
  var e, t, r, n, i, a, o, s, u, c = this, l = c.constructor, f = l.precision, d = l.rounding;
  if (c.isFinite()) {
    if (c.isZero())
      return new l(c);
    if (c.abs().eq(1) && f + 4 <= Bf)
      return o = er(l, f + 4, d).times(0.25), o.s = c.s, o;
  } else {
    if (!c.s)
      return new l(NaN);
    if (f + 4 <= Bf)
      return o = er(l, f + 4, d).times(0.5), o.s = c.s, o;
  }
  for (l.precision = s = f + 10, l.rounding = 1, r = Math.min(28, s / ce + 2 | 0), e = r; e; --e)
    c = c.div(c.times(c).plus(1).sqrt().plus(1));
  for (ve = !1, t = Math.ceil(s / ce), n = 1, u = c.times(c), o = new l(c), i = c; e !== -1; )
    if (i = i.times(u), a = o.minus(i.div(n += 2)), i = i.times(u), o = a.plus(i.div(n += 2)), o.d[t] !== void 0)
      for (e = t; o.d[e] === a.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), ve = !0, ue(o, l.precision = f, l.rounding = d, !0);
};
U.isFinite = function() {
  return !!this.d;
};
U.isInteger = U.isInt = function() {
  return !!this.d && yt(this.e / ce) > this.d.length - 2;
};
U.isNaN = function() {
  return !this.s;
};
U.isNegative = U.isNeg = function() {
  return this.s < 0;
};
U.isPositive = U.isPos = function() {
  return this.s > 0;
};
U.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
U.lessThan = U.lt = function(e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function(e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function(e) {
  var t, r, n, i, a, o, s, u, c = this, l = c.constructor, f = l.precision, d = l.rounding, p = 5;
  if (e == null)
    e = new l(10), t = !0;
  else {
    if (e = new l(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new l(NaN);
    t = e.eq(10);
  }
  if (r = c.d, c.s < 0 || !r || !r[0] || c.eq(1))
    return new l(r && !r[0] ? -1 / 0 : c.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1)
      a = !0;
    else {
      for (i = r[0]; i % 10 === 0; )
        i /= 10;
      a = i !== 1;
    }
  if (ve = !1, s = f + p, o = Gr(c, s), n = t ? Xs(l, s + 10) : Gr(e, s), u = De(o, n, s, 1), Oa(u.d, i = f, d))
    do
      if (s += 10, o = Gr(c, s), n = t ? Xs(l, s + 10) : Gr(e, s), u = De(o, n, s, 1), !a) {
        +ft(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = ue(u, f + 1, 0));
        break;
      }
    while (Oa(u.d, i += 10, d));
  return ve = !0, ue(u, f, d);
};
U.minus = U.sub = function(e) {
  var t, r, n, i, a, o, s, u, c, l, f, d, p = this, v = p.constructor;
  if (e = new v(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new v(NaN) : p.d ? e.s = -e.s : e = new v(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (c = p.d, d = e.d, s = v.precision, u = v.rounding, !c[0] || !d[0]) {
    if (d[0])
      e.s = -e.s;
    else if (c[0])
      e = new v(p);
    else
      return new v(u === 3 ? -0 : 0);
    return ve ? ue(e, s, u) : e;
  }
  if (r = yt(e.e / ce), l = yt(p.e / ce), c = c.slice(), a = l - r, a) {
    for (f = a < 0, f ? (t = c, a = -a, o = d.length) : (t = d, r = l, o = c.length), n = Math.max(Math.ceil(s / ce), o) + 2, a > n && (a = n, t.length = 1), t.reverse(), n = a; n--; )
      t.push(0);
    t.reverse();
  } else {
    for (n = c.length, o = d.length, f = n < o, f && (o = n), n = 0; n < o; n++)
      if (c[n] != d[n]) {
        f = c[n] < d[n];
        break;
      }
    a = 0;
  }
  for (f && (t = c, c = d, d = t, e.s = -e.s), o = c.length, n = d.length - o; n > 0; --n)
    c[o++] = 0;
  for (n = d.length; n > a; ) {
    if (c[--n] < d[n]) {
      for (i = n; i && c[--i] === 0; )
        c[i] = rr - 1;
      --c[i], c[n] += rr;
    }
    c[n] -= d[n];
  }
  for (; c[--o] === 0; )
    c.pop();
  for (; c[0] === 0; c.shift())
    --r;
  return c[0] ? (e.d = c, e.e = zu(c, r), ve ? ue(e, s, u) : e) : new v(u === 3 ? -0 : 0);
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor;
  return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? ue(new n(r), n.precision, n.rounding) : (ve = !1, n.modulo == 9 ? (t = De(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = De(r, e, 0, n.modulo, 1), t = t.times(e), ve = !0, r.minus(t));
};
U.naturalExponential = U.exp = function() {
  return Uf(this);
};
U.naturalLogarithm = U.ln = function() {
  return Gr(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
U.plus = U.add = function(e) {
  var t, r, n, i, a, o, s, u, c, l, f = this, d = f.constructor;
  if (e = new d(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new d(NaN) : f.d || (e = new d(e.d || f.s === e.s ? f : NaN)), e;
  if (f.s != e.s)
    return e.s = -e.s, f.minus(e);
  if (c = f.d, l = e.d, s = d.precision, u = d.rounding, !c[0] || !l[0])
    return l[0] || (e = new d(f)), ve ? ue(e, s, u) : e;
  if (a = yt(f.e / ce), n = yt(e.e / ce), c = c.slice(), i = a - n, i) {
    for (i < 0 ? (r = c, i = -i, o = l.length) : (r = l, n = a, o = c.length), a = Math.ceil(s / ce), o = a > o ? a + 1 : o + 1, i > o && (i = o, r.length = 1), r.reverse(); i--; )
      r.push(0);
    r.reverse();
  }
  for (o = c.length, i = l.length, o - i < 0 && (i = o, r = l, l = c, c = r), t = 0; i; )
    t = (c[--i] = c[i] + l[i] + t) / rr | 0, c[i] %= rr;
  for (t && (c.unshift(t), ++n), o = c.length; c[--o] == 0; )
    c.pop();
  return e.d = c, e.e = zu(c, n), ve ? ue(e, s, u) : e;
};
U.precision = U.sd = function(e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(rn + e);
  return r.d ? (t = WS(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
U.round = function() {
  var e = this, t = e.constructor;
  return ue(new t(e), e.e + 1, t.rounding);
};
U.sine = U.sin = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + ce, n.rounding = 1, r = tZ(n, YS(n, r)), n.precision = e, n.rounding = t, ue(Or > 2 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, i, a, o = this, s = o.d, u = o.e, c = o.s, l = o.constructor;
  if (c !== 1 || !s || !s[0])
    return new l(!c || c < 0 && (!s || s[0]) ? NaN : s ? o : 1 / 0);
  for (ve = !1, c = Math.sqrt(+o), c == 0 || c == 1 / 0 ? (t = ft(s), (t.length + u) % 2 == 0 && (t += "0"), c = Math.sqrt(t), u = yt((u + 1) / 2) - (u < 0 || u % 2), c == 1 / 0 ? t = "5e" + u : (t = c.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + u), n = new l(t)) : n = new l(c.toString()), r = (u = l.precision) + 3; ; )
    if (a = n, n = a.plus(De(o, a, r + 2, 1)).times(0.5), ft(a.d).slice(0, r) === (t = ft(n.d)).slice(0, r))
      if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (ue(a, u + 1, 0), a.times(a).eq(o))) {
          n = a;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (ue(n, u + 1, 1), e = !n.times(n).eq(o));
        break;
      }
  return ve = !0, ue(n, u, l.rounding, e);
};
U.tangent = U.tan = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = De(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, ue(Or == 2 || Or == 4 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
U.times = U.mul = function(e) {
  var t, r, n, i, a, o, s, u, c, l = this, f = l.constructor, d = l.d, p = (e = new f(e)).d;
  if (e.s *= l.s, !d || !d[0] || !p || !p[0])
    return new f(!e.s || d && !d[0] && !p || p && !p[0] && !d ? NaN : !d || !p ? e.s / 0 : e.s * 0);
  for (r = yt(l.e / ce) + yt(e.e / ce), u = d.length, c = p.length, u < c && (a = d, d = p, p = a, o = u, u = c, c = o), a = [], o = u + c, n = o; n--; )
    a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      s = a[i] + p[n] * d[i - n - 1] + t, a[i--] = s % rr | 0, t = s / rr | 0;
    a[i] = (a[i] + t) % rr | 0;
  }
  for (; !a[--o]; )
    a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = zu(a, r), ve ? ue(e, f.precision, f.rounding) : e;
};
U.toBinary = function(e, t) {
  return Wh(this, 2, e, t);
};
U.toDecimalPlaces = U.toDP = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Pt(e, 0, ln), t === void 0 ? t = n.rounding : Pt(t, 0, 8), ue(r, e + r.e + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = gr(n, !0) : (Pt(e, 0, ln), t === void 0 ? t = i.rounding : Pt(t, 0, 8), n = ue(new i(n), e + 1, t), r = gr(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
U.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? r = gr(i) : (Pt(e, 0, ln), t === void 0 ? t = a.rounding : Pt(t, 0, 8), n = ue(new a(i), e + i.e + 1, t), r = gr(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
U.toFraction = function(e) {
  var t, r, n, i, a, o, s, u, c, l, f, d, p = this, v = p.d, h = p.constructor;
  if (!v)
    return new h(p);
  if (c = r = new h(1), n = u = new h(0), t = new h(n), a = t.e = WS(v) - p.e - 1, o = a % ce, t.d[0] = tt(10, o < 0 ? ce + o : o), e == null)
    e = a > 0 ? t : c;
  else {
    if (s = new h(e), !s.isInt() || s.lt(c))
      throw Error(rn + s);
    e = s.gt(t) ? a > 0 ? t : c : s;
  }
  for (ve = !1, s = new h(ft(v)), l = h.precision, h.precision = a = v.length * ce * 2; f = De(s, t, 0, 1, 1), i = r.plus(f.times(n)), i.cmp(e) != 1; )
    r = n, n = i, i = c, c = u.plus(f.times(i)), u = i, i = t, t = s.minus(f.times(i)), s = i;
  return i = De(e.minus(r), n, 0, 1, 1), u = u.plus(i.times(c)), r = r.plus(i.times(n)), u.s = c.s = p.s, d = De(c, n, a, 1).minus(p).abs().cmp(De(u, r, a, 1).minus(p).abs()) < 1 ? [c, n] : [u, r], h.precision = l, ve = !0, d;
};
U.toHexadecimal = U.toHex = function(e, t) {
  return Wh(this, 16, e, t);
};
U.toNearest = function(e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d)
      return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : Pt(t, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (ve = !1, r = De(r, e, 0, t, 1).times(e), ve = !0, ue(r)) : (e.s = r.s, r = e), r;
};
U.toNumber = function() {
  return +this;
};
U.toOctal = function(e, t) {
  return Wh(this, 8, e, t);
};
U.toPower = U.pow = function(e) {
  var t, r, n, i, a, o, s = this, u = s.constructor, c = +(e = new u(e));
  if (!s.d || !e.d || !s.d[0] || !e.d[0])
    return new u(tt(+s, c));
  if (s = new u(s), s.eq(1))
    return s;
  if (n = u.precision, a = u.rounding, e.eq(1))
    return ue(s, n, a);
  if (t = yt(e.e / ce), t >= e.d.length - 1 && (r = c < 0 ? -c : c) <= ZX)
    return i = qS(u, s, r, n), e.s < 0 ? new u(1).div(i) : ue(i, n, a);
  if (o = s.s, o < 0) {
    if (t < e.d.length - 1)
      return new u(NaN);
    if ((e.d[t] & 1) == 0 && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1)
      return s.s = o, s;
  }
  return r = tt(+s, c), t = r == 0 || !isFinite(r) ? yt(c * (Math.log("0." + ft(s.d)) / Math.LN10 + s.e + 1)) : new u(r + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? o / 0 : 0) : (ve = !1, u.rounding = s.s = 1, r = Math.min(12, (t + "").length), i = Uf(e.times(Gr(s, n + r)), n), i.d && (i = ue(i, n + 5, 1), Oa(i.d, n, a) && (t = n + 10, i = ue(Uf(e.times(Gr(s, t + r)), t), t + 5, 1), +ft(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ue(i, n + 1, 0)))), i.s = o, ve = !0, u.rounding = a, ue(i, n, a));
};
U.toPrecision = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = gr(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Pt(e, 1, ln), t === void 0 ? t = i.rounding : Pt(t, 0, 8), n = ue(new i(n), e, t), r = gr(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
U.toSignificantDigits = U.toSD = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Pt(e, 1, ln), t === void 0 ? t = n.rounding : Pt(t, 0, 8)), ue(new n(r), e, t);
};
U.toString = function() {
  var e = this, t = e.constructor, r = gr(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
U.truncated = U.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
U.valueOf = U.toJSON = function() {
  var e = this, t = e.constructor, r = gr(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function ft(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = ce - n.length, r && (a += zr(r)), a += n;
    o = e[t], n = o + "", r = ce - n.length, r && (a += zr(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return a + o;
}
function Pt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(rn + e);
}
function Oa(e, t, r, n) {
  var i, a, o, s;
  for (a = e[0]; a >= 10; a /= 10)
    --t;
  return --t < 0 ? (t += ce, i = 0) : (i = Math.ceil((t + 1) / ce), t %= ce), a = tt(10, ce - t), s = e[i] % a | 0, n == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = r < 4 && s == 99999 || r > 3 && s == 49999 || s == 5e4 || s == 0) : o = (r < 4 && s + 1 == a || r > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == tt(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (n || r < 4) && s == 9999 || !n && r > 3 && s == 4999) : o = ((n || r < 4) && s + 1 == a || !n && r > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == tt(10, t - 3) - 1, o;
}
function Wo(e, t, r) {
  for (var n, i = [0], a, o = 0, s = e.length; o < s; ) {
    for (a = i.length; a--; )
      i[a] *= t;
    for (i[0] += Ff.indexOf(e.charAt(o++)), n = 0; n < i.length; n++)
      i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function QX(e, t) {
  var r, n, i;
  if (t.isZero())
    return t;
  n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Wu(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = vi(e, 1, t.times(i), new e(1));
  for (var a = r; a--; ) {
    var o = t.times(t);
    t = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, t;
}
var De = function() {
  function e(n, i, a) {
    var o, s = 0, u = n.length;
    for (n = n.slice(); u--; )
      o = n[u] * i + s, n[u] = o % a | 0, s = o / a | 0;
    return s && n.unshift(s), n;
  }
  function t(n, i, a, o) {
    var s, u;
    if (a != o)
      u = a > o ? 1 : -1;
    else
      for (s = u = 0; s < a; s++)
        if (n[s] != i[s]) {
          u = n[s] > i[s] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, a, o) {
    for (var s = 0; a--; )
      n[a] -= s, s = n[a] < i[a] ? 1 : 0, n[a] = s * o + n[a] - i[a];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, a, o, s, u) {
    var c, l, f, d, p, v, h, g, m, w, x, b, y, S, A, _, E, M, C, k, N = n.constructor, j = n.s == i.s ? 1 : -1, L = n.d, R = i.d;
    if (!L || !L[0] || !R || !R[0])
      return new N(
        !n.s || !i.s || (L ? R && L[0] == R[0] : !R) ? NaN : L && L[0] == 0 || !R ? j * 0 : j / 0
      );
    for (u ? (p = 1, l = n.e - i.e) : (u = rr, p = ce, l = yt(n.e / p) - yt(i.e / p)), C = R.length, E = L.length, m = new N(j), w = m.d = [], f = 0; R[f] == (L[f] || 0); f++)
      ;
    if (R[f] > (L[f] || 0) && l--, a == null ? (S = a = N.precision, o = N.rounding) : s ? S = a + (n.e - i.e) + 1 : S = a, S < 0)
      w.push(1), v = !0;
    else {
      if (S = S / p + 2 | 0, f = 0, C == 1) {
        for (d = 0, R = R[0], S++; (f < E || d) && S--; f++)
          A = d * u + (L[f] || 0), w[f] = A / R | 0, d = A % R | 0;
        v = d || f < E;
      } else {
        for (d = u / (R[0] + 1) | 0, d > 1 && (R = e(R, d, u), L = e(L, d, u), C = R.length, E = L.length), _ = C, x = L.slice(0, C), b = x.length; b < C; )
          x[b++] = 0;
        k = R.slice(), k.unshift(0), M = R[0], R[1] >= u / 2 && ++M;
        do
          d = 0, c = t(R, x, C, b), c < 0 ? (y = x[0], C != b && (y = y * u + (x[1] || 0)), d = y / M | 0, d > 1 ? (d >= u && (d = u - 1), h = e(R, d, u), g = h.length, b = x.length, c = t(h, x, g, b), c == 1 && (d--, r(h, C < g ? k : R, g, u))) : (d == 0 && (c = d = 1), h = R.slice()), g = h.length, g < b && h.unshift(0), r(x, h, b, u), c == -1 && (b = x.length, c = t(R, x, C, b), c < 1 && (d++, r(x, C < b ? k : R, b, u))), b = x.length) : c === 0 && (d++, x = [0]), w[f++] = d, c && x[0] ? x[b++] = L[_] || 0 : (x = [L[_]], b = 1);
        while ((_++ < E || x[0] !== void 0) && S--);
        v = x[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (p == 1)
      m.e = l, FS = v;
    else {
      for (f = 1, d = w[0]; d >= 10; d /= 10)
        f++;
      m.e = f + l * p - 1, ue(m, s ? a + m.e + 1 : a, o, v);
    }
    return m;
  };
}();
function ue(e, t, r, n) {
  var i, a, o, s, u, c, l, f, d, p = e.constructor;
  e:
    if (t != null) {
      if (f = e.d, !f)
        return e;
      for (i = 1, s = f[0]; s >= 10; s /= 10)
        i++;
      if (a = t - i, a < 0)
        a += ce, o = t, l = f[d = 0], u = l / tt(10, i - o - 1) % 10 | 0;
      else if (d = Math.ceil((a + 1) / ce), s = f.length, d >= s)
        if (n) {
          for (; s++ <= d; )
            f.push(0);
          l = u = 0, i = 1, a %= ce, o = a - ce + 1;
        } else
          break e;
      else {
        for (l = s = f[d], i = 1; s >= 10; s /= 10)
          i++;
        a %= ce, o = a - ce + i, u = o < 0 ? 0 : l / tt(10, i - o - 1) % 10 | 0;
      }
      if (n = n || t < 0 || f[d + 1] !== void 0 || (o < 0 ? l : l % tt(10, i - o - 1)), c = r < 4 ? (u || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || n || r == 6 && (a > 0 ? o > 0 ? l / tt(10, i - o) : 0 : f[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !f[0])
        return f.length = 0, c ? (t -= e.e + 1, f[0] = tt(10, (ce - t % ce) % ce), e.e = -t || 0) : f[0] = e.e = 0, e;
      if (a == 0 ? (f.length = d, s = 1, d--) : (f.length = d + 1, s = tt(10, ce - a), f[d] = o > 0 ? (l / tt(10, i - o) % tt(10, o) | 0) * s : 0), c)
        for (; ; )
          if (d == 0) {
            for (a = 1, o = f[0]; o >= 10; o /= 10)
              a++;
            for (o = f[0] += s, s = 1; o >= 10; o /= 10)
              s++;
            a != s && (e.e++, f[0] == rr && (f[0] = 1));
            break;
          } else {
            if (f[d] += s, f[d] != rr)
              break;
            f[d--] = 0, s = 1;
          }
      for (a = f.length; f[--a] === 0; )
        f.pop();
    }
  return ve && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function gr(e, t, r) {
  if (!e.isFinite())
    return GS(e);
  var n, i = e.e, a = ft(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + zr(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + zr(-i - 1) + a, r && (n = r - o) > 0 && (a += zr(n))) : i >= o ? (a += zr(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + zr(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += zr(n))), a;
}
function zu(e, t) {
  var r = e[0];
  for (t *= ce; r >= 10; r /= 10)
    t++;
  return t;
}
function Xs(e, t, r) {
  if (t > JX)
    throw ve = !0, r && (e.precision = r), Error(VS);
  return ue(new e(Ys), t, 1, !0);
}
function er(e, t, r) {
  if (t > Bf)
    throw Error(VS);
  return ue(new e(Ks), t, r, !0);
}
function WS(e) {
  var t = e.length - 1, r = t * ce + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10)
      r--;
    for (t = e[0]; t >= 10; t /= 10)
      r++;
  }
  return r;
}
function zr(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function qS(e, t, r, n) {
  var i, a = new e(1), o = Math.ceil(n / ce + 4);
  for (ve = !1; ; ) {
    if (r % 2 && (a = a.times(t), Tm(a.d, o) && (i = !0)), r = yt(r / 2), r === 0) {
      r = a.d.length - 1, i && a.d[r] === 0 && ++a.d[r];
      break;
    }
    t = t.times(t), Tm(t.d, o);
  }
  return ve = !0, a;
}
function Em(e) {
  return e.d[e.d.length - 1] & 1;
}
function HS(e, t, r) {
  for (var n, i = new e(t[0]), a = 0; ++a < t.length; )
    if (n = new e(t[a]), n.s)
      i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function Uf(e, t) {
  var r, n, i, a, o, s, u, c = 0, l = 0, f = 0, d = e.constructor, p = d.rounding, v = d.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (t == null ? (ve = !1, u = v) : u = t, s = new d(0.03125); e.e > -2; )
    e = e.times(s), f += 5;
  for (n = Math.log(tt(2, f)) / Math.LN10 * 2 + 5 | 0, u += n, r = a = o = new d(1), d.precision = u; ; ) {
    if (a = ue(a.times(e), u, 1), r = r.times(++l), s = o.plus(De(a, r, u, 1)), ft(s.d).slice(0, u) === ft(o.d).slice(0, u)) {
      for (i = f; i--; )
        o = ue(o.times(o), u, 1);
      if (t == null)
        if (c < 3 && Oa(o.d, u - n, p, c))
          d.precision = u += 10, r = a = s = new d(1), l = 0, c++;
        else
          return ue(o, d.precision = v, p, ve = !0);
      else
        return d.precision = v, o;
    }
    o = s;
  }
}
function Gr(e, t) {
  var r, n, i, a, o, s, u, c, l, f, d, p = 1, v = 10, h = e, g = h.d, m = h.constructor, w = m.rounding, x = m.precision;
  if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1)
    return new m(g && !g[0] ? -1 / 0 : h.s != 1 ? NaN : g ? 0 : h);
  if (t == null ? (ve = !1, l = x) : l = t, m.precision = l += v, r = ft(g), n = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = ft(h.d), n = r.charAt(0), p++;
    a = h.e, n > 1 ? (h = new m("0." + r), a++) : h = new m(n + "." + r.slice(1));
  } else
    return c = Xs(m, l + 2, x).times(a + ""), h = Gr(new m(n + "." + r.slice(1)), l - v).plus(c), m.precision = x, t == null ? ue(h, x, w, ve = !0) : h;
  for (f = h, u = o = h = De(h.minus(1), h.plus(1), l, 1), d = ue(h.times(h), l, 1), i = 3; ; ) {
    if (o = ue(o.times(d), l, 1), c = u.plus(De(o, new m(i), l, 1)), ft(c.d).slice(0, l) === ft(u.d).slice(0, l))
      if (u = u.times(2), a !== 0 && (u = u.plus(Xs(m, l + 2, x).times(a + ""))), u = De(u, new m(p), l, 1), t == null)
        if (Oa(u.d, l - v, w, s))
          m.precision = l += v, c = o = h = De(f.minus(1), f.plus(1), l, 1), d = ue(h.times(h), l, 1), i = s = 1;
        else
          return ue(u, m.precision = x, w, ve = !0);
      else
        return m.precision = x, u;
    u = c, i += 2;
  }
}
function GS(e) {
  return String(e.s * e.s / 0);
}
function zf(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
    ;
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
    ;
  if (t = t.slice(n, i), t) {
    if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % ce, r < 0 && (n += ce), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ce; n < i; )
        e.d.push(+t.slice(n, n += ce));
      t = t.slice(n), n = ce - t.length;
    } else
      n -= i;
    for (; n--; )
      t += "0";
    e.d.push(+t), ve && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function eZ(e, t) {
  var r, n, i, a, o, s, u, c, l;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), zS.test(t))
      return zf(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (KX.test(t))
    r = 16, t = t.toLowerCase();
  else if (YX.test(t))
    r = 2;
  else if (XX.test(t))
    r = 8;
  else
    throw Error(rn + t);
  for (a = t.search(/p/i), a > 0 ? (u = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, n = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = qS(n, new n(r), a, a * 2)), c = Wo(t, r, rr), l = c.length - 1, a = l; c[a] === 0; --a)
    c.pop();
  return a < 0 ? new n(e.s * 0) : (e.e = zu(c, l), e.d = c, ve = !1, o && (e = De(e, i, s * 4)), u && (e = e.times(Math.abs(u) < 54 ? tt(2, u) : gi.pow(2, u))), ve = !0, e);
}
function tZ(e, t) {
  var r, n = t.d.length;
  if (n < 3)
    return t.isZero() ? t : vi(e, 2, t, t);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Wu(5, r)), t = vi(e, 2, t, t);
  for (var i, a = new e(5), o = new e(16), s = new e(20); r--; )
    i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
  return t;
}
function vi(e, t, r, n, i) {
  var a, o, s, u, c = e.precision, l = Math.ceil(c / ce);
  for (ve = !1, u = r.times(r), s = new e(n); ; ) {
    if (o = De(s.times(u), new e(t++ * t++), c, 1), s = i ? n.plus(o) : n.minus(o), n = De(o.times(u), new e(t++ * t++), c, 1), o = s.plus(n), o.d[l] !== void 0) {
      for (a = l; o.d[a] === s.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = s, s = n, n = o, o = a;
  }
  return ve = !0, o.d.length = l + 1, o;
}
function Wu(e, t) {
  for (var r = e; --t; )
    r *= e;
  return r;
}
function YS(e, t) {
  var r, n = t.s < 0, i = er(e, e.precision, 1), a = i.times(0.5);
  if (t = t.abs(), t.lte(a))
    return Or = n ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero())
    Or = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(a))
      return Or = Em(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    Or = Em(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function Wh(e, t, r, n) {
  var i, a, o, s, u, c, l, f, d, p = e.constructor, v = r !== void 0;
  if (v ? (Pt(r, 1, ln), n === void 0 ? n = p.rounding : Pt(n, 0, 8)) : (r = p.precision, n = p.rounding), !e.isFinite())
    l = GS(e);
  else {
    for (l = gr(e), o = l.indexOf("."), v ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, o >= 0 && (l = l.replace(".", ""), d = new p(1), d.e = l.length - o, d.d = Wo(gr(d), 10, i), d.e = d.d.length), f = Wo(l, 10, i), a = u = f.length; f[--u] == 0; )
      f.pop();
    if (!f[0])
      l = v ? "0p+0" : "0";
    else {
      if (o < 0 ? a-- : (e = new p(e), e.d = f, e.e = a, e = De(e, d, r, n, 0, i), f = e.d, a = e.e, c = FS), o = f[r], s = i / 2, c = c || f[r + 1] !== void 0, c = n < 4 ? (o !== void 0 || c) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : o > s || o === s && (n === 4 || c || n === 6 && f[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), f.length = r, c)
        for (; ++f[--r] > i - 1; )
          f[r] = 0, r || (++a, f.unshift(1));
      for (u = f.length; !f[u - 1]; --u)
        ;
      for (o = 0, l = ""; o < u; o++)
        l += Ff.charAt(f[o]);
      if (v) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --u; u % o; u++)
              l += "0";
            for (f = Wo(l, i, t), u = f.length; !f[u - 1]; --u)
              ;
            for (o = 1, l = "1."; o < u; o++)
              l += Ff.charAt(f[o]);
          } else
            l = l.charAt(0) + "." + l.slice(1);
        l = l + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          l = "0" + l;
        l = "0." + l;
      } else if (++a > u)
        for (a -= u; a--; )
          l += "0";
      else
        a < u && (l = l.slice(0, a) + "." + l.slice(a));
    }
    l = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + l;
  }
  return e.s < 0 ? "-" + l : l;
}
function Tm(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function rZ(e) {
  return new this(e).abs();
}
function nZ(e) {
  return new this(e).acos();
}
function iZ(e) {
  return new this(e).acosh();
}
function aZ(e, t) {
  return new this(e).plus(t);
}
function oZ(e) {
  return new this(e).asin();
}
function sZ(e) {
  return new this(e).asinh();
}
function uZ(e) {
  return new this(e).atan();
}
function cZ(e) {
  return new this(e).atanh();
}
function lZ(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, i = this.rounding, a = n + 4;
  return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = er(this, a, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? er(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = er(this, a, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(De(e, t, a, 1)), t = er(this, a, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(De(e, t, a, 1)), r;
}
function fZ(e) {
  return new this(e).cbrt();
}
function dZ(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function hZ(e, t, r) {
  return new this(e).clamp(t, r);
}
function pZ(e) {
  if (!e || typeof e != "object")
    throw Error(Uu + "Object expected");
  var t, r, n, i = e.defaults === !0, a = [
    "precision",
    1,
    ln,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Kn,
    0,
    "toExpPos",
    0,
    Kn,
    "maxE",
    0,
    Kn,
    "minE",
    -Kn,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < a.length; t += 3)
    if (r = a[t], i && (this[r] = Vf[r]), (n = e[r]) !== void 0)
      if (yt(n) === n && n >= a[t + 1] && n <= a[t + 2])
        this[r] = n;
      else
        throw Error(rn + r + ": " + n);
  if (r = "crypto", i && (this[r] = Vf[r]), (n = e[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(BS);
      else
        this[r] = !1;
    else
      throw Error(rn + r + ": " + n);
  return this;
}
function vZ(e) {
  return new this(e).cos();
}
function gZ(e) {
  return new this(e).cosh();
}
function KS(e) {
  var t, r, n;
  function i(a) {
    var o, s, u, c = this;
    if (!(c instanceof i))
      return new i(a);
    if (c.constructor = i, Pm(a)) {
      c.s = a.s, ve ? !a.d || a.e > i.maxE ? (c.e = NaN, c.d = null) : a.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = a.e, c.d = a.d.slice()) : (c.e = a.e, c.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (u = typeof a, u === "number") {
      if (a === 0) {
        c.s = 1 / a < 0 ? -1 : 1, c.e = 0, c.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, c.s = -1) : c.s = 1, a === ~~a && a < 1e7) {
        for (o = 0, s = a; s >= 10; s /= 10)
          o++;
        ve ? o > i.maxE ? (c.e = NaN, c.d = null) : o < i.minE ? (c.e = 0, c.d = [0]) : (c.e = o, c.d = [a]) : (c.e = o, c.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (c.s = NaN), c.e = NaN, c.d = null;
        return;
      }
      return zf(c, a.toString());
    } else if (u !== "string")
      throw Error(rn + a);
    return (s = a.charCodeAt(0)) === 45 ? (a = a.slice(1), c.s = -1) : (s === 43 && (a = a.slice(1)), c.s = 1), zS.test(a) ? zf(c, a) : eZ(c, a);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = pZ, i.clone = KS, i.isDecimal = Pm, i.abs = rZ, i.acos = nZ, i.acosh = iZ, i.add = aZ, i.asin = oZ, i.asinh = sZ, i.atan = uZ, i.atanh = cZ, i.atan2 = lZ, i.cbrt = fZ, i.ceil = dZ, i.clamp = hZ, i.cos = vZ, i.cosh = gZ, i.div = yZ, i.exp = mZ, i.floor = bZ, i.hypot = xZ, i.ln = wZ, i.log = SZ, i.log10 = _Z, i.log2 = AZ, i.max = OZ, i.min = EZ, i.mod = TZ, i.mul = PZ, i.pow = CZ, i.random = MZ, i.round = kZ, i.sign = NZ, i.sin = RZ, i.sinh = IZ, i.sqrt = $Z, i.sub = LZ, i.sum = jZ, i.tan = DZ, i.tanh = FZ, i.trunc = VZ, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function yZ(e, t) {
  return new this(e).div(t);
}
function mZ(e) {
  return new this(e).exp();
}
function bZ(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function xZ() {
  var e, t, r = new this(0);
  for (ve = !1, e = 0; e < arguments.length; )
    if (t = new this(arguments[e++]), t.d)
      r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s)
        return ve = !0, new this(1 / 0);
      r = t;
    }
  return ve = !0, r.sqrt();
}
function Pm(e) {
  return e instanceof gi || e && e.toStringTag === US || !1;
}
function wZ(e) {
  return new this(e).ln();
}
function SZ(e, t) {
  return new this(e).log(t);
}
function AZ(e) {
  return new this(e).log(2);
}
function _Z(e) {
  return new this(e).log(10);
}
function OZ() {
  return HS(this, arguments, "lt");
}
function EZ() {
  return HS(this, arguments, "gt");
}
function TZ(e, t) {
  return new this(e).mod(t);
}
function PZ(e, t) {
  return new this(e).mul(t);
}
function CZ(e, t) {
  return new this(e).pow(t);
}
function MZ(e) {
  var t, r, n, i, a = 0, o = new this(1), s = [];
  if (e === void 0 ? e = this.precision : Pt(e, 1, ln), n = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); a < n; )
        i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); a < n; )
        i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
      a = n / 4;
    } else
      throw Error(BS);
  else
    for (; a < n; )
      s[a++] = Math.random() * 1e7 | 0;
  for (n = s[--a], e %= ce, n && e && (i = tt(10, ce - e), s[a] = (n / i | 0) * i); s[a] === 0; a--)
    s.pop();
  if (a < 0)
    r = 0, s = [0];
  else {
    for (r = -1; s[0] === 0; r -= ce)
      s.shift();
    for (n = 1, i = s[0]; i >= 10; i /= 10)
      n++;
    n < ce && (r -= ce - n);
  }
  return o.e = r, o.d = s, o;
}
function kZ(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function NZ(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function RZ(e) {
  return new this(e).sin();
}
function IZ(e) {
  return new this(e).sinh();
}
function $Z(e) {
  return new this(e).sqrt();
}
function LZ(e, t) {
  return new this(e).sub(t);
}
function jZ() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (ve = !1; r.s && ++e < t.length; )
    r = r.plus(t[e]);
  return ve = !0, ue(r, this.precision, this.rounding);
}
function DZ(e) {
  return new this(e).tan();
}
function FZ(e) {
  return new this(e).tanh();
}
function VZ(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
U[Symbol.for("nodejs.util.inspect.custom")] = U.toString;
U[Symbol.toStringTag] = "Decimal";
var gi = U.constructor = KS(Vf);
Ys = new gi(Ys);
Ks = new gi(Ks);
const BZ = ["grid"], UZ = {
  justifyContent: "center",
  justifyItems: "center"
}, Cm = Math.PI / 180, vo = 11.5, zZ = (e) => {
  const t = e.homeTeam || fu;
  e.homeTeam;
  const r = e.awayTeam || Xb;
  e.awayTeam;
  const n = e.gameProjection || bR, i = new gi(n.home_team_score), a = new gi(n.away_team_score), o = i.pow(vo).plus(a.pow(vo)), s = i.pow(vo).dividedBy(o), u = a.pow(vo).dividedBy(o), c = s.toNumber(), l = u.toNumber(), f = [{
    name: t.Name,
    value: c
  }, {
    name: r.Name,
    value: l
  }], d = ["#00C192", "#0086E6"];
  return /* @__PURE__ */ O(Gt, {
    viusage: "backdrop",
    classNames: ["rounded-lg", "p-4", "text-xs"],
    children: /* @__PURE__ */ z("div", {
      className: [...e.overrideClasses ? [] : BZ, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : UZ,
        ...e.style
      },
      children: [/* @__PURE__ */ O("h2", {
        className: "text-lg",
        children: "Win Projection"
      }), /* @__PURE__ */ O(GX, {
        height: 125,
        width: 125,
        children: /* @__PURE__ */ O(Qt, {
          labelLine: !1,
          label: ({
            cx: p,
            cy: v,
            midAngle: h,
            innerRadius: g,
            outerRadius: m,
            percent: w,
            index: x
          }) => {
            const b = m * 1.2, y = p + b * Math.cos(-h * Cm), S = v + b * Math.sin(-h * Cm);
            return /* @__PURE__ */ O("text", {
              x: y,
              y: S,
              fill: "white",
              textAnchor: y > p ? "start" : "end",
              dominantBaseline: "central",
              children: `${(w * 100).toFixed(0)}%`
            });
          },
          stroke: "none",
          innerRadius: 10,
          data: f,
          dataKey: "value",
          nameKey: "name",
          cx: "50%",
          cy: "50%",
          outerRadius: 30,
          fill: "#8884d8",
          children: f.map((p, v) => /* @__PURE__ */ O(yh, {
            fill: d[v % d.length]
          }, p.name))
        })
      }), /* @__PURE__ */ z("div", {
        className: "gap-2",
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignContent: "center",
          justifyContent: "center"
        },
        children: [/* @__PURE__ */ z("div", {
          style: {
            display: "flex",
            fontSize: "8px",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ O("div", {
            style: {
              background: d[0],
              height: "10px",
              width: "10px"
            }
          }), "\u2003", /* @__PURE__ */ O("div", {
            children: t.Name
          })]
        }), /* @__PURE__ */ z("div", {
          style: {
            display: "flex",
            fontSize: "8px",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ O("div", {
            style: {
              background: d[1],
              height: "10px",
              width: "10px"
            }
          }), "\u2003", /* @__PURE__ */ O("div", {
            children: r.Name
          })]
        })]
      })]
    })
  });
}, WZ = [], qZ = {}, HZ = ["grid", "gap-4"], GZ = {
  gridTemplateColumns: "1fr 2fr",
  justifyContent: "center",
  justifyItems: "center",
  alignContent: "center",
  alignItems: "center"
}, YZ = (e) => /* @__PURE__ */ z(Gt, {
  viusage: "wrap",
  classNames: [...e.overrideClasses ? [] : WZ, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : qZ,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    style: {
      display: "grid",
      justifyContent: "center",
      justifyItems: "center"
    },
    children: /* @__PURE__ */ O(Kd, {})
  }), /* @__PURE__ */ O("br", {}), /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : HZ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : GZ,
      ...e.style
    },
    children: [/* @__PURE__ */ O("div", {
      className: "text-sm",
      children: /* @__PURE__ */ O(UR, {})
    }), /* @__PURE__ */ z("div", {
      className: "gap-2",
      style: {
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "1fr 1fr"
      },
      children: [/* @__PURE__ */ O(qR, {}), /* @__PURE__ */ O(zZ, {})]
    })]
  })]
}), KZ = ["grid", "p-4"], XZ = {
  justifyContent: "center",
  justifyItems: "center"
}, ZZ = [], JZ = {}, QZ = (e) => /* @__PURE__ */ O(Gt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : KZ, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : XZ,
    ...e.style
  },
  children: /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : ZZ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : JZ,
      ...e.style
    },
    children: [/* @__PURE__ */ O("h2", {
      className: "text-lg",
      children: "Game of the Day"
    }), /* @__PURE__ */ O(YZ, {})]
  })
}), eJ = ["grid", "gap-2", "rounded-lg", "p-2"], tJ = {
  gridTemplateRows: "1fr 1fr",
  border: "1px solid #33A9FE",
  alignContent: "center",
  alignItems: "center"
}, rJ = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : eJ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : tJ,
    ...e.style
  },
  children: [/* @__PURE__ */ z("div", {
    className: "rounded-lg",
    style: {
      display: "grid",
      height: "100%",
      background: "#33A9FE44",
      textAlign: "center",
      alignContent: "center"
    },
    children: [/* @__PURE__ */ O("h2", {
      style: {
        color: "#ffffff44"
      },
      children: "Projected Total"
    }), "130"]
  }), /* @__PURE__ */ z("div", {
    className: "rounded-lg",
    style: {
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "#33A9FE44",
      alignContent: "center"
    },
    children: [/* @__PURE__ */ z("div", {
      style: {
        textAlign: "center"
      },
      children: [/* @__PURE__ */ O("h2", {
        style: {
          color: "#ffffff44"
        },
        children: "Total"
      }), "O/U 130"]
    }), /* @__PURE__ */ z("div", {
      style: {
        textAlign: "center"
      },
      children: [/* @__PURE__ */ O("h2", {
        style: {
          color: "#ffffff44"
        },
        children: "Odds"
      }), "-110"]
    })]
  })]
}), nJ = ["grid", "text-sm", "gap-2"], iJ = {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}, Yc = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : nJ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : iJ,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    style: {
      display: "grid",
      color: "#ffffff",
      opacity: 0.7,
      height: "100%",
      width: "100%",
      alignContent: "center"
    },
    children: e.Label
  }), /* @__PURE__ */ O("div", {
    style: {
      display: "grid",
      background: "#01987522",
      alignContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%"
    },
    children: e.Value
  })]
}), aJ = ["grid", "gap-2"], oJ = {
  gridTemplateRows: "1fr",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignContent: "center",
  alignItems: "center"
}, sJ = (e) => {
  const t = e.line || 8, r = e.odds || -110, n = e.projectedScore || 70;
  return /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : aJ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : oJ,
      ...e.style
    },
    children: [/* @__PURE__ */ O(Yc, {
      style: {
        height: "100%"
      },
      Label: "Line",
      Value: t > 0 ? `+${t}` : t
    }), /* @__PURE__ */ O(Yc, {
      style: {
        height: "100%"
      },
      Label: "Odds",
      Value: r
    }), /* @__PURE__ */ O(Yc, {
      style: {
        height: "100%"
      },
      Label: "Projected Score",
      Value: n
    })]
  });
}, uJ = ["grid", "gap-2"], cJ = {
  gridTemplateColumns: "1fr 3fr"
}, lJ = (e) => {
  const t = e.team || fu;
  return /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : uJ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : cJ,
      ...e.style
    },
    children: [/* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O("img", {
        width: 60,
        src: t.TeamLogoUrl
      })
    }), /* @__PURE__ */ z("div", {
      children: [/* @__PURE__ */ O("h2", {
        className: "text",
        children: t.Name
      }), /* @__PURE__ */ O("h2", {
        className: "text-sm",
        children: e.away ? "Away" : "Home"
      })]
    })]
  });
}, fJ = ["grid", "rounded-lg", "border", "border-2", "border-gdg-500", "p-4"], dJ = {
  gridTemplateColumns: "3fr 1fr 3fr",
  alignContent: "center",
  alignItems: "center"
}, Mm = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : fJ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : dJ,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(lJ, {})
  }), /* @__PURE__ */ O("div", {}), /* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(sJ, {})
  })]
}), hJ = ["grid", "gap-2"], pJ = {
  gridTemplateRows: "10fr 1fr 10fr",
  justifyItems: "center",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center"
}, vJ = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : hJ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : pJ,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(Mm, {})
  }), /* @__PURE__ */ z("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr auto 2fr",
      alignContent: "center",
      alignItems: "center",
      width: "100%",
      height: 1,
      overflow: "visible"
    },
    children: [/* @__PURE__ */ O("div", {}), /* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O(Zb, {
        classNames: ["p-4", "bg-gdg-500", "rounded-full", "text-black-500", "grid", "justify-center", "content-center"]
      })
    }), /* @__PURE__ */ O("div", {})]
  }), /* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(Mm, {})
  })]
}), gJ = ["p-4", "rounded-lg"], yJ = {}, mJ = ["grid", "gap-2"], bJ = {
  gridTemplateColumns: "3fr 1fr"
}, xJ = (e) => /* @__PURE__ */ z(Gt, {
  viusage: "backdrop",
  classNames: [...e.overrideClasses ? [] : gJ, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : yJ,
    ...e.style
  },
  children: [/* @__PURE__ */ z("div", {
    children: [/* @__PURE__ */ O(Kd, {}), /* @__PURE__ */ O("br", {})]
  }), /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : mJ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : bJ,
      ...e.style
    },
    children: [/* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O(vJ, {})
    }), /* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O(rJ, {
        style: {
          height: "100%"
        }
      })
    })]
  })]
}), wJ = ["p-4"], SJ = {}, AJ = [], _J = {
  textAlign: "left"
}, OJ = (e) => {
  const r = ["This Week", "Big 12", "ACC", "PAC 12", "On the Bubble"].map((n, i) => /* @__PURE__ */ O(Pd, {
    emphasis: e.which === n ? 500 : 300,
    viusage: e.which === n || !e.which && i === 0 ? "navigate" : "wrap",
    children: n
  }, n));
  return /* @__PURE__ */ O(Gt, {
    viusage: e.viusage || "wrap",
    classNames: [...e.overrideClasses ? [] : wJ, ...e.classNames || []],
    style: {
      ...e.overrideStyle ? {} : SJ,
      ...e.style
    },
    children: /* @__PURE__ */ z("div", {
      className: [...e.overrideClasses ? [] : AJ, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : _J,
        ...e.style
      },
      children: [/* @__PURE__ */ O("h2", {
        className: "text-xl",
        children: "Upcoming Games for Top 25"
      }), /* @__PURE__ */ O("br", {}), /* @__PURE__ */ O("hr", {}), /* @__PURE__ */ O("br", {}), /* @__PURE__ */ O("div", {
        style: {
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
        },
        className: "grid gap-2 text-sm",
        children: r
      }), /* @__PURE__ */ O("br", {}), /* @__PURE__ */ O(xJ, {})]
    })
  });
}, EJ = ["grid", "gap-4"], TJ = {}, PJ = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : EJ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : TJ,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(jR, {
      classNames: ["rounded-lg"]
    })
  }), /* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(QZ, {
      classNames: ["rounded-lg"]
    })
  }), /* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(OJ, {
      classNames: ["rounded-lg"]
    })
  })]
}), CJ = ["grid", "gap-4", "p-4"], MJ = {
  gridTemplateColumns: "2fr 1fr"
}, kJ = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : CJ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : MJ,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(PJ, {})
  }), /* @__PURE__ */ O("div", {
    children: /* @__PURE__ */ O(CR, {
      classNames: ["rounded-lg"]
    })
  })]
}), NJ = [], RJ = {}, IJ = [], $J = {}, LJ = (e) => /* @__PURE__ */ O(Gt, {
  viusage: e.viusage || "backdrop",
  classNames: [...e.overrideClasses ? [] : NJ, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : RJ,
    ...e.style
  },
  children: /* @__PURE__ */ z("div", {
    className: [...e.overrideClasses ? [] : IJ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : $J,
      ...e.style
    },
    children: [/* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O(pR, {})
    }), /* @__PURE__ */ O("div", {
      children: /* @__PURE__ */ O(kJ, {})
    })]
  })
}), jJ = ["h-screen", "w-screen", "grid", "justify-items-center", "items-center", "text-drk-gray-900"], DJ = {
  gridTemplateColumns: "1fr 6fr"
}, KJ = (e) => /* @__PURE__ */ z("div", {
  className: [...e.overrideClasses ? [] : jJ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : DJ,
    ...e.style
  },
  children: [/* @__PURE__ */ O("div", {
    style: {
      height: "100%",
      width: "100%"
    },
    children: /* @__PURE__ */ O(jP, {
      style: {
        height: "100%"
      }
    })
  }), /* @__PURE__ */ O("div", {
    style: {
      height: "100%",
      width: "100%"
    },
    children: /* @__PURE__ */ O(LJ, {
      style: {
        width: "100%",
        height: "100%"
      }
    })
  })]
});
export {
  nP as BUTTON_CLASSNAMES,
  iP as BUTTON_STYLE,
  aP as Button,
  hb as CheckContext,
  WJ as CheckProvider,
  lP as CheckReducer,
  jJ as HOME_CLASSNAMES,
  DJ as HOME_STYLE,
  KJ as Home,
  bP as MENS_NCAAB_COMPETITION_CLASSNAMES,
  xP as MENS_NCAAB_COMPETITION_STYLE,
  yP as MENS_NCAAB_TEAM_CLASSNAMES,
  mP as MENS_NCAAB_TEAM_STYLE,
  YJ as MensNcaabCompetition,
  GJ as MensNcaabTeam,
  uP as PEG_CHILD_CONTAINER_CLASSNAMES,
  cP as PEG_CHILD_CONTAINER_STYLE,
  sP as PEG_CONTAINER_CLASSNAMES,
  BJ as PEG_PILL_CLASSNAMES,
  UJ as PEG_PILL_STYLE,
  oP as PILL_CLASSNAMES,
  VJ as PILL_STYLE,
  zJ as PegPill,
  Pd as Pill,
  fP as SIDE_FEED_CLASSNAMES,
  hP as SIDE_FEED_INNER_CLASSNAMES,
  pP as SIDE_FEED_INNER_STYLE,
  dP as SIDE_FEED_STYLE,
  HJ as SideFeed,
  vP as WRAPPER_CLASSNAMES,
  gP as WRAPPER_STYLE,
  Gt as Wrapper,
  qJ as useCheckStore
};
