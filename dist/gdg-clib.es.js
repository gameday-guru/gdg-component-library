import * as en from "react";
import ye, { createContext as Nr, useContext as et, useLayoutEffect as jA, useEffect as Dt, useState as Jn, useRef as ai, useCallback as DA, useMemo as rd, forwardRef as bt, createElement as Tt, useReducer as FA, Fragment as Zy, isValidElement as Kr, PureComponent as xt, Children as En, cloneElement as gt, Component as nd } from "react";
const Jy = (e) => (e + 300) % 900, VA = {
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
}, id = (e) => VA[`${e[0]}-${e[1]}`], gp = {
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
  backdrop: "black",
  error: "error",
  success: "success"
}, xi = (e = "do") => gp[e] || gp.do;
var BA = {
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
function Qy(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, r = (e.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? t = parseFloat(r) : t = parseInt(r, 10);
  var n = (e.match(/[^0-9]*$/) || "").toString();
  return BA[n] ? {
    value: t,
    unit: n
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function mp(e) {
  var t = Qy(e);
  return "".concat(t.value).concat(t.unit);
}
var UA = function(e, t, r) {
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
}, Qa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zA(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ou = { exports: {} }, Li = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yp;
function WA() {
  if (yp)
    return Li;
  yp = 1;
  var e = ye, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Li.Fragment = r, Li.jsx = o, Li.jsxs = o, Li;
}
var ji = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bp;
function HA() {
  return bp || (bp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ye, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function g(P) {
      if (P === null || typeof P != "object")
        return null;
      var Y = v && P[v] || P[h];
      return typeof Y == "function" ? Y : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(P) {
      {
        for (var Y = arguments.length, ne = new Array(Y > 1 ? Y - 1 : 0), pe = 1; pe < Y; pe++)
          ne[pe - 1] = arguments[pe];
        x("error", P, ne);
      }
    }
    function x(P, Y, ne) {
      {
        var pe = y.ReactDebugCurrentFrame, Ae = pe.getStackAddendum();
        Ae !== "" && (Y += "%s", ne = ne.concat([Ae]));
        var $e = ne.map(function(xe) {
          return String(xe);
        });
        $e.unshift("Warning: " + Y), Function.prototype.apply.call(console[P], console, $e);
      }
    }
    var b = !1, m = !1, S = !1, A = !1, O = !1, E;
    E = Symbol.for("react.module.reference");
    function M(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === a || O || P === i || P === c || P === l || A || P === p || b || m || S || typeof P == "object" && P !== null && (P.$$typeof === d || P.$$typeof === f || P.$$typeof === o || P.$$typeof === s || P.$$typeof === u || P.$$typeof === E || P.getModuleId !== void 0));
    }
    function C(P, Y, ne) {
      var pe = P.displayName;
      if (pe)
        return pe;
      var Ae = Y.displayName || Y.name || "";
      return Ae !== "" ? ne + "(" + Ae + ")" : ne;
    }
    function N(P) {
      return P.displayName || "Context";
    }
    function k(P) {
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
            var Y = P;
            return N(Y) + ".Consumer";
          case o:
            var ne = P;
            return N(ne._context) + ".Provider";
          case u:
            return C(P, P.render, "ForwardRef");
          case f:
            var pe = P.displayName || null;
            return pe !== null ? pe : k(P.type) || "Memo";
          case d: {
            var Ae = P, $e = Ae._payload, xe = Ae._init;
            try {
              return k(xe($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, j = 0, R, Q, K, te, $, B, X;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function L() {
      {
        if (j === 0) {
          R = console.log, Q = console.info, K = console.warn, te = console.error, $ = console.group, B = console.groupCollapsed, X = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: q,
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
        j++;
      }
    }
    function W() {
      {
        if (j--, j === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, P, {
              value: R
            }),
            info: D({}, P, {
              value: Q
            }),
            warn: D({}, P, {
              value: K
            }),
            error: D({}, P, {
              value: te
            }),
            group: D({}, P, {
              value: $
            }),
            groupCollapsed: D({}, P, {
              value: B
            }),
            groupEnd: D({}, P, {
              value: X
            })
          });
        }
        j < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = y.ReactCurrentDispatcher, se;
    function J(P, Y, ne) {
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
    var F = !1, G;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      G = new ie();
    }
    function T(P, Y) {
      if (!P || F)
        return "";
      {
        var ne = G.get(P);
        if (ne !== void 0)
          return ne;
      }
      var pe;
      F = !0;
      var Ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = ee.current, ee.current = null, L();
      try {
        if (Y) {
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
`), wt = pe.stack.split(`
`), Ke = be.length - 1, Ze = wt.length - 1; Ke >= 1 && Ze >= 0 && be[Ke] !== wt[Ze]; )
            Ze--;
          for (; Ke >= 1 && Ze >= 0; Ke--, Ze--)
            if (be[Ke] !== wt[Ze]) {
              if (Ke !== 1 || Ze !== 1)
                do
                  if (Ke--, Ze--, Ze < 0 || be[Ke] !== wt[Ze]) {
                    var Vt = `
` + be[Ke].replace(" at new ", " at ");
                    return P.displayName && Vt.includes("<anonymous>") && (Vt = Vt.replace("<anonymous>", P.displayName)), typeof P == "function" && G.set(P, Vt), Vt;
                  }
                while (Ke >= 1 && Ze >= 0);
              break;
            }
        }
      } finally {
        F = !1, ee.current = $e, W(), Error.prepareStackTrace = Ae;
      }
      var Dn = P ? P.displayName || P.name : "", vp = Dn ? J(Dn) : "";
      return typeof P == "function" && G.set(P, vp), vp;
    }
    function he(P, Y, ne) {
      return T(P, !1);
    }
    function H(P) {
      var Y = P.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function me(P, Y, ne) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return T(P, H(P));
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
            return me(P.type, Y, ne);
          case d: {
            var pe = P, Ae = pe._payload, $e = pe._init;
            try {
              return me($e(Ae), Y, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, ht = {}, nr = y.ReactDebugCurrentFrame;
    function dn(P) {
      if (P) {
        var Y = P._owner, ne = me(P.type, P._source, Y ? Y.type : null);
        nr.setExtraStackFrame(ne);
      } else
        nr.setExtraStackFrame(null);
    }
    function hn(P, Y, ne, pe, Ae) {
      {
        var $e = Function.call.bind(Se);
        for (var xe in P)
          if ($e(P, xe)) {
            var be = void 0;
            try {
              if (typeof P[xe] != "function") {
                var wt = Error((pe || "React class") + ": " + ne + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wt.name = "Invariant Violation", wt;
              }
              be = P[xe](Y, xe, pe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              be = Ke;
            }
            be && !(be instanceof Error) && (dn(Ae), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", ne, xe, typeof be), dn(null)), be instanceof Error && !(be.message in ht) && (ht[be.message] = !0, dn(Ae), w("Failed %s type: %s", ne, be.message), dn(null));
          }
      }
    }
    var pn = Array.isArray;
    function $r(P) {
      return pn(P);
    }
    function Ln(P) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ne = Y && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return ne;
      }
    }
    function Za(P) {
      try {
        return Ja(P), !1;
      } catch {
        return !0;
      }
    }
    function Ja(P) {
      return "" + P;
    }
    function Ii(P) {
      if (Za(P))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(P)), Ja(P);
    }
    var $i = y.ReactCurrentOwner, wA = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sp, up, Qu;
    Qu = {};
    function SA(P) {
      if (Se.call(P, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function AA(P) {
      if (Se.call(P, "key")) {
        var Y = Object.getOwnPropertyDescriptor(P, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function _A(P, Y) {
      if (typeof P.ref == "string" && $i.current && Y && $i.current.stateNode !== Y) {
        var ne = k($i.current.type);
        Qu[ne] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k($i.current.type), P.ref), Qu[ne] = !0);
      }
    }
    function OA(P, Y) {
      {
        var ne = function() {
          sp || (sp = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function EA(P, Y) {
      {
        var ne = function() {
          up || (up = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var TA = function(P, Y, ne, pe, Ae, $e, xe) {
      var be = {
        $$typeof: t,
        type: P,
        key: Y,
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
    function PA(P, Y, ne, pe, Ae) {
      {
        var $e, xe = {}, be = null, wt = null;
        ne !== void 0 && (Ii(ne), be = "" + ne), AA(Y) && (Ii(Y.key), be = "" + Y.key), SA(Y) && (wt = Y.ref, _A(Y, Ae));
        for ($e in Y)
          Se.call(Y, $e) && !wA.hasOwnProperty($e) && (xe[$e] = Y[$e]);
        if (P && P.defaultProps) {
          var Ke = P.defaultProps;
          for ($e in Ke)
            xe[$e] === void 0 && (xe[$e] = Ke[$e]);
        }
        if (be || wt) {
          var Ze = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          be && OA(xe, Ze), wt && EA(xe, Ze);
        }
        return TA(P, be, wt, Ae, pe, $i.current, xe);
      }
    }
    var ec = y.ReactCurrentOwner, cp = y.ReactDebugCurrentFrame;
    function jn(P) {
      if (P) {
        var Y = P._owner, ne = me(P.type, P._source, Y ? Y.type : null);
        cp.setExtraStackFrame(ne);
      } else
        cp.setExtraStackFrame(null);
    }
    var tc;
    tc = !1;
    function rc(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function lp() {
      {
        if (ec.current) {
          var P = k(ec.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function CA(P) {
      {
        if (P !== void 0) {
          var Y = P.fileName.replace(/^.*[\\\/]/, ""), ne = P.lineNumber;
          return `

Check your code at ` + Y + ":" + ne + ".";
        }
        return "";
      }
    }
    var fp = {};
    function MA(P) {
      {
        var Y = lp();
        if (!Y) {
          var ne = typeof P == "string" ? P : P.displayName || P.name;
          ne && (Y = `

Check the top-level render call using <` + ne + ">.");
        }
        return Y;
      }
    }
    function dp(P, Y) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var ne = MA(Y);
        if (fp[ne])
          return;
        fp[ne] = !0;
        var pe = "";
        P && P._owner && P._owner !== ec.current && (pe = " It was passed a child from " + k(P._owner.type) + "."), jn(P), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, pe), jn(null);
      }
    }
    function hp(P, Y) {
      {
        if (typeof P != "object")
          return;
        if ($r(P))
          for (var ne = 0; ne < P.length; ne++) {
            var pe = P[ne];
            rc(pe) && dp(pe, Y);
          }
        else if (rc(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Ae = g(P);
          if (typeof Ae == "function" && Ae !== P.entries)
            for (var $e = Ae.call(P), xe; !(xe = $e.next()).done; )
              rc(xe.value) && dp(xe.value, Y);
        }
      }
    }
    function NA(P) {
      {
        var Y = P.type;
        if (Y == null || typeof Y == "string")
          return;
        var ne;
        if (typeof Y == "function")
          ne = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === u || Y.$$typeof === f))
          ne = Y.propTypes;
        else
          return;
        if (ne) {
          var pe = k(Y);
          hn(ne, P.props, "prop", pe, P);
        } else if (Y.PropTypes !== void 0 && !tc) {
          tc = !0;
          var Ae = k(Y);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ae || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kA(P) {
      {
        for (var Y = Object.keys(P.props), ne = 0; ne < Y.length; ne++) {
          var pe = Y[ne];
          if (pe !== "children" && pe !== "key") {
            jn(P), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), jn(null);
            break;
          }
        }
        P.ref !== null && (jn(P), w("Invalid attribute `ref` supplied to `React.Fragment`."), jn(null));
      }
    }
    function pp(P, Y, ne, pe, Ae, $e) {
      {
        var xe = M(P);
        if (!xe) {
          var be = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (be += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wt = CA(Ae);
          wt ? be += wt : be += lp();
          var Ke;
          P === null ? Ke = "null" : $r(P) ? Ke = "array" : P !== void 0 && P.$$typeof === t ? (Ke = "<" + (k(P.type) || "Unknown") + " />", be = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof P, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, be);
        }
        var Ze = PA(P, Y, ne, Ae, $e);
        if (Ze == null)
          return Ze;
        if (xe) {
          var Vt = Y.children;
          if (Vt !== void 0)
            if (pe)
              if ($r(Vt)) {
                for (var Dn = 0; Dn < Vt.length; Dn++)
                  hp(Vt[Dn], P);
                Object.freeze && Object.freeze(Vt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hp(Vt, P);
        }
        return P === n ? kA(Ze) : NA(Ze), Ze;
      }
    }
    function RA(P, Y, ne) {
      return pp(P, Y, ne, !0);
    }
    function IA(P, Y, ne) {
      return pp(P, Y, ne, !1);
    }
    var $A = IA, LA = RA;
    ji.Fragment = n, ji.jsx = $A, ji.jsxs = LA;
  }()), ji;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = WA() : e.exports = HA();
})(ou);
const e1 = ou.exports.Fragment, _ = ou.exports.jsx, V = ou.exports.jsxs;
var Vr = globalThis && globalThis.__assign || function() {
  return Vr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, qA = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, xp = UA("MoonLoader", "100% {transform: rotate(360deg)}", "moon");
function YA(e) {
  var t = e.loading, r = t === void 0 ? !0 : t, n = e.color, i = n === void 0 ? "#000000" : n, a = e.speedMultiplier, o = a === void 0 ? 1 : a, s = e.cssOverride, u = s === void 0 ? {} : s, c = e.size, l = c === void 0 ? 60 : c, f = qA(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = Qy(l), p = d.value, v = d.unit, h = p / 7, g = Vr({
    display: "inherit",
    position: "relative",
    width: "".concat("".concat(p + h * 2).concat(v)),
    height: "".concat("".concat(p + h * 2).concat(v)),
    animation: "".concat(xp, " ").concat(0.6 / o, "s 0s infinite linear"),
    animationFillMode: "forwards"
  }, u), y = function(b) {
    return {
      width: mp(b),
      height: mp(b),
      borderRadius: "100%"
    };
  }, w = Vr(Vr({}, y(h)), {
    backgroundColor: "".concat(i),
    opacity: "0.8",
    position: "absolute",
    top: "".concat("".concat(p / 2 - h / 2).concat(v)),
    animation: "".concat(xp, " ").concat(0.6 / o, "s 0s infinite linear"),
    animationFillMode: "forwards"
  }), x = Vr(Vr({}, y(p)), {
    border: "".concat(h, "px solid ").concat(i),
    opacity: "0.1",
    boxSizing: "content-box",
    position: "absolute"
  });
  return r ? /* @__PURE__ */ V("span", {
    ...Vr({
      style: g
    }, f),
    children: [/* @__PURE__ */ _("span", {
      style: w
    }), /* @__PURE__ */ _("span", {
      style: x
    })]
  }) : null;
}
var il = function(e, t) {
  return il = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, il(e, t);
};
function t1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  il(e, t);
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
function Yt(e, t) {
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
var wp = "production", r1 = typeof process > "u" || process.env === void 0 ? wp : process.env.NODE_ENV || wp, xr = function(e) {
  return {
    isEnabled: function(t) {
      return e.some(function(r) {
        return !!t[r];
      });
    }
  };
}, fa = {
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
function GA(e) {
  for (var t in e)
    e[t] !== null && (t === "projectionNodeConstructor" ? fa.projectionNodeConstructor = e[t] : fa[t].Component = e[t]);
}
var Na = function() {
}, Ht = function() {
};
process.env.NODE_ENV !== "production" && (Na = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, Ht = function(e, t) {
  if (!e)
    throw new Error(t);
});
var n1 = Nr({ strict: !1 }), i1 = Object.keys(fa), KA = i1.length;
function XA(e, t, r) {
  var n = [], i = et(n1);
  if (!t)
    return null;
  r1 !== "production" && r && i.strict && Ht(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var a = 0; a < KA; a++) {
    var o = i1[a], s = fa[o], u = s.isEnabled, c = s.Component;
    u(e) && c && n.push(/* @__PURE__ */ _(c, {
      ...Z({
        key: o
      }, e, {
        visualElement: t
      })
    }));
  }
  return n;
}
var ad = Nr({
  transformPagePoint: function(e) {
    return e;
  },
  isStatic: !1,
  reducedMotion: "never"
}), su = Nr({});
function ZA() {
  return et(su).visualElement;
}
var uu = Nr(null), wi = typeof document < "u", Sp = wi ? jA : Dt, al = { current: null }, a1 = !1;
function JA() {
  if (a1 = !0, !!wi)
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return al.current = e.matches;
      };
      e.addListener(t), t();
    } else
      al.current = !1;
}
function QA() {
  !a1 && JA();
  var e = it(Jn(al.current), 1), t = e[0];
  return t;
}
function e_() {
  var e = QA(), t = et(ad).reducedMotion;
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function t_(e, t, r, n) {
  var i = et(n1), a = ZA(), o = et(uu), s = e_(), u = ai(void 0);
  n || (n = i.renderer), !u.current && n && (u.current = n(e, {
    visualState: t,
    parent: a,
    props: r,
    presenceId: o == null ? void 0 : o.id,
    blockInitialAnimation: (o == null ? void 0 : o.initial) === !1,
    shouldReduceMotion: s
  }));
  var c = u.current;
  return Sp(function() {
    c == null || c.syncRender();
  }), Dt(function() {
    var l;
    (l = c == null ? void 0 : c.animationState) === null || l === void 0 || l.animateChanges();
  }), Sp(function() {
    return function() {
      return c == null ? void 0 : c.notifyUnmount();
    };
  }, []), c;
}
function Yn(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function r_(e, t, r) {
  return DA(
    function(n) {
      var i;
      n && ((i = e.mount) === null || i === void 0 || i.call(e, n)), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Yn(r) && (r.current = n));
    },
    [t]
  );
}
function o1(e) {
  return Array.isArray(e);
}
function Zt(e) {
  return typeof e == "string" || o1(e);
}
function n_(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.get();
  }), t;
}
function i_(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.getVelocity();
  }), t;
}
function s1(e, t, r, n, i) {
  var a;
  return n === void 0 && (n = {}), i === void 0 && (i = {}), typeof t == "function" && (t = t(r != null ? r : e.custom, n, i)), typeof t == "string" && (t = (a = e.variants) === null || a === void 0 ? void 0 : a[t]), typeof t == "function" && (t = t(r != null ? r : e.custom, n, i)), t;
}
function cu(e, t, r) {
  var n = e.getProps();
  return s1(n, t, r != null ? r : n.custom, n_(e), i_(e));
}
function lu(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || Zt(e.initial) || Zt(e.animate) || Zt(e.whileHover) || Zt(e.whileDrag) || Zt(e.whileTap) || Zt(e.whileFocus) || Zt(e.exit);
}
function u1(e) {
  return Boolean(lu(e) || e.variants);
}
function a_(e, t) {
  if (lu(e)) {
    var r = e.initial, n = e.animate;
    return {
      initial: r === !1 || Zt(r) ? r : void 0,
      animate: Zt(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function o_(e) {
  var t = a_(e, et(su)), r = t.initial, n = t.animate;
  return rd(function() {
    return { initial: r, animate: n };
  }, [Ap(r), Ap(n)]);
}
function Ap(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function fu(e) {
  var t = ai(null);
  return t.current === null && (t.current = e()), t.current;
}
var ea = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
}, s_ = 1;
function u_() {
  return fu(function() {
    if (ea.hasEverUpdated)
      return s_++;
  });
}
var c1 = Nr({}), l1 = Nr({});
function c_(e, t, r, n) {
  var i, a = t.layoutId, o = t.layout, s = t.drag, u = t.dragConstraints, c = t.layoutScroll, l = et(l1);
  !n || !r || (r == null ? void 0 : r.projection) || (r.projection = new n(e, r.getLatestValues(), (i = r.parent) === null || i === void 0 ? void 0 : i.projection), r.projection.setOptions({
    layoutId: a,
    layout: o,
    alwaysMeasureLayout: Boolean(s) || u && Yn(u),
    visualElement: r,
    scheduleRender: function() {
      return r.scheduleRender();
    },
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: l,
    layoutScroll: c
  }));
}
var l_ = function(e) {
  t1(t, e);
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
}(ye.Component);
function f_(e) {
  var t = e.preloadedFeatures, r = e.createVisualElement, n = e.projectionNodeConstructor, i = e.useRender, a = e.useVisualState, o = e.Component;
  t && GA(t);
  function s(u, c) {
    var l = d_(u);
    u = Z(Z({}, u), {
      layoutId: l
    });
    var f = et(ad), d = null, p = o_(u), v = f.isStatic ? void 0 : u_(), h = a(u, f.isStatic);
    return !f.isStatic && wi && (p.visualElement = t_(o, h, Z(Z({}, f), u), r), c_(v, u, p.visualElement, n || fa.projectionNodeConstructor), d = XA(u, p.visualElement, t)), /* @__PURE__ */ V(l_, {
      visualElement: p.visualElement,
      props: Z(Z({}, f), u),
      children: [d, /* @__PURE__ */ _(su.Provider, {
        value: p,
        children: i(o, u, v, r_(h, p.visualElement, c), h, f.isStatic, p.visualElement)
      })]
    });
  }
  return bt(s);
}
function d_(e) {
  var t, r = e.layoutId, n = (t = et(c1)) === null || t === void 0 ? void 0 : t.id;
  return n && r !== void 0 ? n + "-" + r : r;
}
function h_(e) {
  function t(n, i) {
    return i === void 0 && (i = {}), f_(e(n, i));
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
var p_ = [
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
function od(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(p_.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var es = {};
function v_(e) {
  Object.assign(es, e);
}
var ol = ["", "X", "Y", "Z"], g_ = ["translate", "scale", "rotate", "skew"], da = ["transformPerspective", "x", "y", "z"];
g_.forEach(function(e) {
  return ol.forEach(function(t) {
    return da.push(e + t);
  });
});
function m_(e, t) {
  return da.indexOf(e) - da.indexOf(t);
}
var y_ = new Set(da);
function ka(e) {
  return y_.has(e);
}
var b_ = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function f1(e) {
  return b_.has(e);
}
function d1(e, t) {
  var r = t.layout, n = t.layoutId;
  return ka(e) || f1(e) || (r || n !== void 0) && (!!es[e] || e === "opacity");
}
var Pr = function(e) {
  return Boolean(e !== null && typeof e == "object" && e.getVelocity);
}, x_ = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function w_(e, t, r, n) {
  var i = e.transform, a = e.transformKeys, o = t.enableHardwareAcceleration, s = o === void 0 ? !0 : o, u = t.allowTransformNone, c = u === void 0 ? !0 : u, l = "";
  a.sort(m_);
  for (var f = !1, d = a.length, p = 0; p < d; p++) {
    var v = a[p];
    l += "".concat(x_[v] || v, "(").concat(i[v], ") "), v === "z" && (f = !0);
  }
  return !f && s ? l += "translateZ(0)" : l = l.trim(), n ? l = n(i, r ? "" : l) : c && r && (l = "none"), l;
}
function S_(e) {
  var t = e.originX, r = t === void 0 ? "50%" : t, n = e.originY, i = n === void 0 ? "50%" : n, a = e.originZ, o = a === void 0 ? 0 : a;
  return "".concat(r, " ").concat(i, " ").concat(o);
}
function h1(e) {
  return e.startsWith("--");
}
var A_ = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
const p1 = (e, t) => (r) => Math.max(Math.min(r, t), e), ta = (e) => e % 1 ? Number(e.toFixed(5)) : e, ha = /(-)?([\d]*\.?[\d])+/g, sl = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, __ = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function Ra(e) {
  return typeof e == "string";
}
const kn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ra = Object.assign(Object.assign({}, kn), { transform: p1(0, 1) }), eo = Object.assign(Object.assign({}, kn), { default: 1 }), Ia = (e) => ({
  test: (t) => Ra(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Lr = Ia("deg"), cr = Ia("%"), fe = Ia("px"), O_ = Ia("vh"), E_ = Ia("vw"), _p = Object.assign(Object.assign({}, cr), { parse: (e) => cr.parse(e) / 100, transform: (e) => cr.transform(e * 100) }), sd = (e, t) => (r) => Boolean(Ra(r) && __.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), v1 = (e, t, r) => (n) => {
  if (!Ra(n))
    return n;
  const [i, a, o, s] = n.match(ha);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(a),
    [r]: parseFloat(o),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, On = {
  test: sd("hsl", "hue"),
  parse: v1("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + cr.transform(ta(t)) + ", " + cr.transform(ta(r)) + ", " + ta(ra.transform(n)) + ")"
}, T_ = p1(0, 255), nc = Object.assign(Object.assign({}, kn), { transform: (e) => Math.round(T_(e)) }), Wr = {
  test: sd("rgb", "red"),
  parse: v1("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + nc.transform(e) + ", " + nc.transform(t) + ", " + nc.transform(r) + ", " + ta(ra.transform(n)) + ")"
};
function P_(e) {
  let t = "", r = "", n = "", i = "";
  return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), i = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), i = e.substr(4, 1), t += t, r += r, n += n, i += i), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const ul = {
  test: sd("#"),
  parse: P_,
  transform: Wr.transform
}, St = {
  test: (e) => Wr.test(e) || ul.test(e) || On.test(e),
  parse: (e) => Wr.test(e) ? Wr.parse(e) : On.test(e) ? On.parse(e) : ul.parse(e),
  transform: (e) => Ra(e) ? e : e.hasOwnProperty("red") ? Wr.transform(e) : On.transform(e)
}, g1 = "${c}", m1 = "${n}";
function C_(e) {
  var t, r, n, i;
  return isNaN(e) && Ra(e) && ((r = (t = e.match(ha)) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0) + ((i = (n = e.match(sl)) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0) > 0;
}
function y1(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let r = 0;
  const n = e.match(sl);
  n && (r = n.length, e = e.replace(sl, g1), t.push(...n.map(St.parse)));
  const i = e.match(ha);
  return i && (e = e.replace(ha, m1), t.push(...i.map(kn.parse))), { values: t, numColors: r, tokenised: e };
}
function b1(e) {
  return y1(e).values;
}
function x1(e) {
  const { values: t, numColors: r, tokenised: n } = y1(e), i = t.length;
  return (a) => {
    let o = n;
    for (let s = 0; s < i; s++)
      o = o.replace(s < r ? g1 : m1, s < r ? St.transform(a[s]) : ta(a[s]));
    return o;
  };
}
const M_ = (e) => typeof e == "number" ? 0 : e;
function N_(e) {
  const t = b1(e);
  return x1(e)(t.map(M_));
}
const Cr = { test: C_, parse: b1, createTransformer: x1, getAnimatableNone: N_ }, k_ = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function R_(e) {
  let [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(ha) || [];
  if (!n)
    return e;
  const i = r.replace(n, "");
  let a = k_.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + i + ")";
}
const I_ = /([a-z-]*)\(.*?\)/g, cl = Object.assign(Object.assign({}, Cr), { getAnimatableNone: (e) => {
  const t = e.match(I_);
  return t ? t.map(R_).join(" ") : e;
} });
var Op = Z(Z({}, kn), { transform: Math.round }), w1 = {
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
  scale: eo,
  scaleX: eo,
  scaleY: eo,
  scaleZ: eo,
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
  opacity: ra,
  originX: _p,
  originY: _p,
  originZ: fe,
  zIndex: Op,
  fillOpacity: ra,
  strokeOpacity: ra,
  numOctaves: Op
};
function ud(e, t, r, n) {
  var i, a = e.style, o = e.vars, s = e.transform, u = e.transformKeys, c = e.transformOrigin;
  u.length = 0;
  var l = !1, f = !1, d = !0;
  for (var p in t) {
    var v = t[p];
    if (h1(p)) {
      o[p] = v;
      continue;
    }
    var h = w1[p], g = A_(v, h);
    if (ka(p)) {
      if (l = !0, s[p] = g, u.push(p), !d)
        continue;
      v !== ((i = h.default) !== null && i !== void 0 ? i : 0) && (d = !1);
    } else
      f1(p) ? (c[p] = g, f = !0) : a[p] = g;
  }
  l ? a.transform = w_(e, r, d, n) : n ? a.transform = n({}, "") : !t.transform && a.transform && (a.transform = "none"), f && (a.transformOrigin = S_(c));
}
var cd = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function S1(e, t, r) {
  for (var n in t)
    !Pr(t[n]) && !d1(n, r) && (e[n] = t[n]);
}
function $_(e, t, r) {
  var n = e.transformTemplate;
  return rd(function() {
    var i = cd();
    ud(i, t, { enableHardwareAcceleration: !r }, n);
    var a = i.vars, o = i.style;
    return Z(Z({}, a), o);
  }, [t]);
}
function L_(e, t, r) {
  var n = e.style || {}, i = {};
  return S1(i, n, e), Object.assign(i, $_(e, t, r)), e.transformValues && (i = e.transformValues(i)), i;
}
function j_(e, t, r) {
  var n = {}, i = L_(e, t, r);
  return Boolean(e.drag) && e.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x")), n.style = i, n;
}
var D_ = /* @__PURE__ */ new Set([
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
function ts(e) {
  return D_.has(e);
}
var A1 = function(e) {
  return !ts(e);
};
function F_(e) {
  !e || (A1 = function(t) {
    return t.startsWith("on") ? !ts(t) : e(t);
  });
}
try {
  F_(require("@emotion/is-prop-valid").default);
} catch {
}
function V_(e, t, r) {
  var n = {};
  for (var i in e)
    (A1(i) || r === !0 && ts(i) || !t && !ts(i) || e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function Ep(e, t, r) {
  return typeof e == "string" ? e : fe.transform(t + r * e);
}
function B_(e, t, r) {
  var n = Ep(t, e.x, e.width), i = Ep(r, e.y, e.height);
  return "".concat(n, " ").concat(i);
}
var U_ = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, z_ = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function W_(e, t, r, n, i) {
  r === void 0 && (r = 1), n === void 0 && (n = 0), i === void 0 && (i = !0), e.pathLength = 1;
  var a = i ? U_ : z_;
  e[a.offset] = fe.transform(-n);
  var o = fe.transform(t), s = fe.transform(r);
  e[a.array] = "".concat(o, " ").concat(s);
}
function ld(e, t, r, n) {
  var i = t.attrX, a = t.attrY, o = t.originX, s = t.originY, u = t.pathLength, c = t.pathSpacing, l = c === void 0 ? 1 : c, f = t.pathOffset, d = f === void 0 ? 0 : f, p = Yt(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  ud(e, p, r, n), e.attrs = e.style, e.style = {};
  var v = e.attrs, h = e.style, g = e.dimensions;
  v.transform && (g && (h.transform = v.transform), delete v.transform), g && (o !== void 0 || s !== void 0 || h.transform) && (h.transformOrigin = B_(g, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), i !== void 0 && (v.x = i), a !== void 0 && (v.y = a), u !== void 0 && W_(v, u, l, d, !1);
}
var _1 = function() {
  return Z(Z({}, cd()), { attrs: {} });
};
function H_(e, t) {
  var r = rd(function() {
    var i = _1();
    return ld(i, t, { enableHardwareAcceleration: !1 }, e.transformTemplate), Z(Z({}, i.attrs), { style: Z({}, i.style) });
  }, [t]);
  if (e.style) {
    var n = {};
    S1(n, e.style, e), r.style = Z(Z({}, n), r.style);
  }
  return r;
}
function q_(e) {
  e === void 0 && (e = !1);
  var t = function(r, n, i, a, o, s) {
    var u = o.latestValues, c = od(r) ? H_ : j_, l = c(n, u, s), f = V_(n, typeof r == "string", e), d = Z(Z(Z({}, f), l), { ref: a });
    return i && (d["data-projection-id"] = i), Tt(r, d);
  };
  return t;
}
var Y_ = /([a-z])([A-Z])/g, G_ = "$1-$2", O1 = function(e) {
  return e.replace(Y_, G_).toLowerCase();
};
function E1(e, t, r, n) {
  var i = t.style, a = t.vars;
  Object.assign(e.style, i, n && n.getProjectionStyles(r));
  for (var o in a)
    e.style.setProperty(o, a[o]);
}
var T1 = /* @__PURE__ */ new Set([
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
function P1(e, t, r, n) {
  E1(e, t, void 0, n);
  for (var i in t.attrs)
    e.setAttribute(T1.has(i) ? i : O1(i), t.attrs[i]);
}
function fd(e) {
  var t = e.style, r = {};
  for (var n in t)
    (Pr(t[n]) || d1(n, e)) && (r[n] = t[n]);
  return r;
}
function C1(e) {
  var t = fd(e);
  for (var r in e)
    if (Pr(e[r])) {
      var n = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function dd(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var pa = function(e) {
  return Array.isArray(e);
}, K_ = function(e) {
  return Boolean(e && typeof e == "object" && e.mix && e.toValue);
}, M1 = function(e) {
  return pa(e) ? e[e.length - 1] || 0 : e;
};
function Ao(e) {
  var t = Pr(e) ? e.get() : e;
  return K_(t) ? t.toValue() : t;
}
function Tp(e, t, r, n) {
  var i = e.scrapeMotionValuesFromProps, a = e.createRenderState, o = e.onMount, s = {
    latestValues: X_(t, r, n, i),
    renderState: a()
  };
  return o && (s.mount = function(u) {
    return o(t, u, s);
  }), s;
}
var N1 = function(e) {
  return function(t, r) {
    var n = et(su), i = et(uu);
    return r ? Tp(e, t, n, i) : fu(function() {
      return Tp(e, t, n, i);
    });
  };
};
function X_(e, t, r, n) {
  var i = {}, a = (r == null ? void 0 : r.initial) === !1, o = n(e);
  for (var s in o)
    i[s] = Ao(o[s]);
  var u = e.initial, c = e.animate, l = lu(e), f = u1(e);
  t && f && !l && e.inherit !== !1 && (u != null || (u = t.initial), c != null || (c = t.animate));
  var d = a || u === !1, p = d ? c : u;
  if (p && typeof p != "boolean" && !dd(p)) {
    var v = Array.isArray(p) ? p : [p];
    v.forEach(function(h) {
      var g = s1(e, h);
      if (!!g) {
        var y = g.transitionEnd;
        g.transition;
        var w = Yt(g, ["transitionEnd", "transition"]);
        for (var x in w) {
          var b = w[x];
          if (Array.isArray(b)) {
            var m = d ? b.length - 1 : 0;
            b = b[m];
          }
          b !== null && (i[x] = b);
        }
        for (var x in y)
          i[x] = y[x];
      }
    });
  }
  return i;
}
var Z_ = {
  useVisualState: N1({
    scrapeMotionValuesFromProps: C1,
    createRenderState: _1,
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
      ld(n, i, { enableHardwareAcceleration: !1 }, e.transformTemplate), P1(t, n);
    }
  })
}, J_ = {
  useVisualState: N1({
    scrapeMotionValuesFromProps: fd,
    createRenderState: cd
  })
};
function Q_(e, t, r, n, i) {
  var a = t.forwardMotionProps, o = a === void 0 ? !1 : a, s = od(e) ? Z_ : J_;
  return Z(Z({}, s), { preloadedFeatures: r, useRender: q_(o), createVisualElement: n, projectionNodeConstructor: i, Component: e });
}
var Ve;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(Ve || (Ve = {}));
function du(e, t, r, n) {
  return n === void 0 && (n = { passive: !0 }), e.addEventListener(t, r, n), function() {
    return e.removeEventListener(t, r);
  };
}
function ll(e, t, r, n) {
  Dt(function() {
    var i = e.current;
    if (r && i)
      return du(i, t, r, n);
  }, [e, t, r, n]);
}
function eO(e) {
  var t = e.whileFocus, r = e.visualElement, n = function() {
    var a;
    (a = r.animationState) === null || a === void 0 || a.setActive(Ve.Focus, !0);
  }, i = function() {
    var a;
    (a = r.animationState) === null || a === void 0 || a.setActive(Ve.Focus, !1);
  };
  ll(r, "focus", t ? n : void 0), ll(r, "blur", t ? i : void 0);
}
function k1(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function R1(e) {
  var t = !!e.touches;
  return t;
}
function tO(e) {
  return function(t) {
    var r = t instanceof MouseEvent, n = !r || r && t.button === 0;
    n && e(t);
  };
}
var rO = { pageX: 0, pageY: 0 };
function nO(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0], n = r || rO;
  return {
    x: n[t + "X"],
    y: n[t + "Y"]
  };
}
function iO(e, t) {
  return t === void 0 && (t = "page"), {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function hd(e, t) {
  return t === void 0 && (t = "page"), {
    point: R1(e) ? nO(e, t) : iO(e, t)
  };
}
var I1 = function(e, t) {
  t === void 0 && (t = !1);
  var r = function(n) {
    return e(n, hd(n));
  };
  return t ? tO(r) : r;
}, aO = function() {
  return wi && window.onpointerdown === null;
}, oO = function() {
  return wi && window.ontouchstart === null;
}, sO = function() {
  return wi && window.onmousedown === null;
}, uO = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, cO = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function $1(e) {
  return aO() ? e : oO() ? cO[e] : sO() ? uO[e] : e;
}
function Qn(e, t, r, n) {
  return du(e, $1(t), I1(r, t === "pointerdown"), n);
}
function rs(e, t, r, n) {
  return ll(e, $1(t), r && I1(r, t === "pointerdown"), n);
}
function L1(e) {
  var t = null;
  return function() {
    var r = function() {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
var Pp = L1("dragHorizontal"), Cp = L1("dragVertical");
function j1(e) {
  var t = !1;
  if (e === "y")
    t = Cp();
  else if (e === "x")
    t = Pp();
  else {
    var r = Pp(), n = Cp();
    r && n ? t = function() {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function D1() {
  var e = j1(!0);
  return e ? (e(), !1) : !0;
}
function Mp(e, t, r) {
  return function(n, i) {
    var a;
    !k1(n) || D1() || ((a = e.animationState) === null || a === void 0 || a.setActive(Ve.Hover, t), r == null || r(n, i));
  };
}
function lO(e) {
  var t = e.onHoverStart, r = e.onHoverEnd, n = e.whileHover, i = e.visualElement;
  rs(i, "pointerenter", t || n ? Mp(i, !0, t) : void 0, { passive: !t }), rs(i, "pointerleave", r || n ? Mp(i, !1, r) : void 0, { passive: !r });
}
var F1 = function(e, t) {
  return t ? e === t ? !0 : F1(e, t.parentElement) : !1;
};
function V1(e) {
  return Dt(function() {
    return function() {
      return e();
    };
  }, []);
}
const ns = (e, t, r) => Math.min(Math.max(r, e), t), ic = 1e-3, fO = 0.01, Np = 10, dO = 0.05, hO = 1;
function pO({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let i, a;
  Na(e <= Np * 1e3, "Spring duration must be 10 seconds or less");
  let o = 1 - t;
  o = ns(dO, hO, o), e = ns(fO, Np, e / 1e3), o < 1 ? (i = (c) => {
    const l = c * o, f = l * e, d = l - r, p = fl(c, o), v = Math.exp(-f);
    return ic - d / p * v;
  }, a = (c) => {
    const f = c * o * e, d = f * r + r, p = Math.pow(o, 2) * Math.pow(c, 2) * e, v = Math.exp(-f), h = fl(Math.pow(c, 2), o);
    return (-i(c) + ic > 0 ? -1 : 1) * ((d - p) * v) / h;
  }) : (i = (c) => {
    const l = Math.exp(-c * e), f = (c - r) * e + 1;
    return -ic + l * f;
  }, a = (c) => {
    const l = Math.exp(-c * e), f = (r - c) * (e * e);
    return l * f;
  });
  const s = 5 / e, u = gO(i, a, s);
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
const vO = 12;
function gO(e, t, r) {
  let n = r;
  for (let i = 1; i < vO; i++)
    n = n - e(n) / t(n);
  return n;
}
function fl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mO = ["duration", "bounce"], yO = ["stiffness", "damping", "mass"];
function kp(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function bO(e) {
  let t = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, e);
  if (!kp(e, yO) && kp(e, mO)) {
    const r = pO(e);
    t = Object.assign(Object.assign(Object.assign({}, t), r), { velocity: 0, mass: 1 }), t.isResolvedFromDuration = !0;
  }
  return t;
}
function pd(e) {
  var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: i } = e, a = Yt(e, ["from", "to", "restSpeed", "restDelta"]);
  const o = { done: !1, value: t };
  let { stiffness: s, damping: u, mass: c, velocity: l, duration: f, isResolvedFromDuration: d } = bO(a), p = Rp, v = Rp;
  function h() {
    const g = l ? -(l / 1e3) : 0, y = r - t, w = u / (2 * Math.sqrt(s * c)), x = Math.sqrt(s / c) / 1e3;
    if (i === void 0 && (i = Math.min(Math.abs(r - t) / 100, 0.4)), w < 1) {
      const b = fl(x, w);
      p = (m) => {
        const S = Math.exp(-w * x * m);
        return r - S * ((g + w * x * y) / b * Math.sin(b * m) + y * Math.cos(b * m));
      }, v = (m) => {
        const S = Math.exp(-w * x * m);
        return w * x * S * (Math.sin(b * m) * (g + w * x * y) / b + y * Math.cos(b * m)) - S * (Math.cos(b * m) * (g + w * x * y) - b * y * Math.sin(b * m));
      };
    } else if (w === 1)
      p = (b) => r - Math.exp(-x * b) * (y + (g + x * y) * b);
    else {
      const b = x * Math.sqrt(w * w - 1);
      p = (m) => {
        const S = Math.exp(-w * x * m), A = Math.min(b * m, 300);
        return r - S * ((g + w * x * y) * Math.sinh(A) + b * y * Math.cosh(A)) / b;
      };
    }
  }
  return h(), {
    next: (g) => {
      const y = p(g);
      if (d)
        o.done = g >= f;
      else {
        const w = v(g) * 1e3, x = Math.abs(w) <= n, b = Math.abs(r - y) <= i;
        o.done = x && b;
      }
      return o.value = o.done ? r : y, o;
    },
    flipTarget: () => {
      l = -l, [t, r] = [r, t], h();
    }
  };
}
pd.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const Rp = (e) => 0, va = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Ge = (e, t, r) => -r * e + r * t + e;
function ac(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Ip({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let i = 0, a = 0, o = 0;
  if (!t)
    i = a = o = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, u = 2 * r - s;
    i = ac(u, s, e + 1 / 3), a = ac(u, s, e), o = ac(u, s, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: n
  };
}
const xO = (e, t, r) => {
  const n = e * e, i = t * t;
  return Math.sqrt(Math.max(0, r * (i - n) + n));
}, wO = [ul, Wr, On], $p = (e) => wO.find((t) => t.test(e)), Lp = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, B1 = (e, t) => {
  let r = $p(e), n = $p(t);
  Ht(!!r, Lp(e)), Ht(!!n, Lp(t));
  let i = r.parse(e), a = n.parse(t);
  r === On && (i = Ip(i), r = Wr), n === On && (a = Ip(a), n = Wr);
  const o = Object.assign({}, i);
  return (s) => {
    for (const u in o)
      u !== "alpha" && (o[u] = xO(i[u], a[u], s));
    return o.alpha = Ge(i.alpha, a.alpha, s), r.transform(o);
  };
}, dl = (e) => typeof e == "number", SO = (e, t) => (r) => t(e(r)), hu = (...e) => e.reduce(SO);
function U1(e, t) {
  return dl(e) ? (r) => Ge(e, t, r) : St.test(e) ? B1(e, t) : W1(e, t);
}
const z1 = (e, t) => {
  const r = [...e], n = r.length, i = e.map((a, o) => U1(a, t[o]));
  return (a) => {
    for (let o = 0; o < n; o++)
      r[o] = i[o](a);
    return r;
  };
}, AO = (e, t) => {
  const r = Object.assign(Object.assign({}, e), t), n = {};
  for (const i in r)
    e[i] !== void 0 && t[i] !== void 0 && (n[i] = U1(e[i], t[i]));
  return (i) => {
    for (const a in n)
      r[a] = n[a](i);
    return r;
  };
};
function jp(e) {
  const t = Cr.parse(e), r = t.length;
  let n = 0, i = 0, a = 0;
  for (let o = 0; o < r; o++)
    n || typeof t[o] == "number" ? n++ : t[o].hue !== void 0 ? a++ : i++;
  return { parsed: t, numNumbers: n, numRGB: i, numHSL: a };
}
const W1 = (e, t) => {
  const r = Cr.createTransformer(t), n = jp(e), i = jp(t);
  return n.numHSL === i.numHSL && n.numRGB === i.numRGB && n.numNumbers >= i.numNumbers ? hu(z1(n.parsed, i.parsed), r) : (Na(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (o) => `${o > 0 ? t : e}`);
}, _O = (e, t) => (r) => Ge(e, t, r);
function OO(e) {
  if (typeof e == "number")
    return _O;
  if (typeof e == "string")
    return St.test(e) ? B1 : W1;
  if (Array.isArray(e))
    return z1;
  if (typeof e == "object")
    return AO;
}
function EO(e, t, r) {
  const n = [], i = r || OO(e[0]), a = e.length - 1;
  for (let o = 0; o < a; o++) {
    let s = i(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] : t;
      s = hu(u, s);
    }
    n.push(s);
  }
  return n;
}
function TO([e, t], [r]) {
  return (n) => r(va(e, t, n));
}
function PO(e, t) {
  const r = e.length, n = r - 1;
  return (i) => {
    let a = 0, o = !1;
    if (i <= e[0] ? o = !0 : i >= e[n] && (a = n - 1, o = !0), !o) {
      let u = 1;
      for (; u < r && !(e[u] > i || u === n); u++)
        ;
      a = u - 1;
    }
    const s = va(e[a], e[a + 1], i);
    return t[a](s);
  };
}
function H1(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const a = e.length;
  Ht(a === t.length, "Both input and output ranges must be the same length"), Ht(!n || !Array.isArray(n) || n.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[a - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  const o = EO(t, n, i), s = a === 2 ? TO(e, o) : PO(e, o);
  return r ? (u) => s(ns(e[0], e[a - 1], u)) : s;
}
const pu = (e) => (t) => 1 - e(1 - t), vd = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, CO = (e) => (t) => Math.pow(t, e), q1 = (e) => (t) => t * t * ((e + 1) * t - e), MO = (e) => {
  const t = q1(e);
  return (r) => (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
}, Y1 = 1.525, NO = 4 / 11, kO = 8 / 11, RO = 9 / 10, gd = (e) => e, md = CO(2), IO = pu(md), G1 = vd(md), K1 = (e) => 1 - Math.sin(Math.acos(e)), yd = pu(K1), $O = vd(yd), bd = q1(Y1), LO = pu(bd), jO = vd(bd), DO = MO(Y1), FO = 4356 / 361, VO = 35442 / 1805, BO = 16061 / 1805, is = (e) => {
  if (e === 1 || e === 0)
    return e;
  const t = e * e;
  return e < NO ? 7.5625 * t : e < kO ? 9.075 * t - 9.9 * e + 3.4 : e < RO ? FO * t - VO * e + BO : 10.8 * e * e - 20.52 * e + 10.72;
}, UO = pu(is), zO = (e) => e < 0.5 ? 0.5 * (1 - is(1 - e * 2)) : 0.5 * is(e * 2 - 1) + 0.5;
function WO(e, t) {
  return e.map(() => t || G1).splice(0, e.length - 1);
}
function HO(e) {
  const t = e.length;
  return e.map((r, n) => n !== 0 ? n / (t - 1) : 0);
}
function qO(e, t) {
  return e.map((r) => r * t);
}
function _o({ from: e = 0, to: t = 1, ease: r, offset: n, duration: i = 300 }) {
  const a = { done: !1, value: e }, o = Array.isArray(t) ? t : [e, t], s = qO(n && n.length === o.length ? n : HO(o), i);
  function u() {
    return H1(s, o, {
      ease: Array.isArray(r) ? r : WO(o, r)
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
function YO({ velocity: e = 0, from: t = 0, power: r = 0.8, timeConstant: n = 350, restDelta: i = 0.5, modifyTarget: a }) {
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
const Dp = { keyframes: _o, spring: pd, decay: YO };
function GO(e) {
  if (Array.isArray(e.to))
    return _o;
  if (Dp[e.type])
    return Dp[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? _o : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? pd : _o;
}
const X1 = 1 / 60 * 1e3, KO = typeof performance < "u" ? () => performance.now() : () => Date.now(), Z1 = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(KO()), X1);
function XO(e) {
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
const ZO = 40;
let hl = !0, ga = !1, pl = !1;
const ei = {
  delta: 0,
  timestamp: 0
}, $a = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], vu = $a.reduce((e, t) => (e[t] = XO(() => ga = !0), e), {}), lr = $a.reduce((e, t) => {
  const r = vu[t];
  return e[t] = (n, i = !1, a = !1) => (ga || QO(), r.schedule(n, i, a)), e;
}, {}), oi = $a.reduce((e, t) => (e[t] = vu[t].cancel, e), {}), oc = $a.reduce((e, t) => (e[t] = () => vu[t].process(ei), e), {}), JO = (e) => vu[e].process(ei), J1 = (e) => {
  ga = !1, ei.delta = hl ? X1 : Math.max(Math.min(e - ei.timestamp, ZO), 1), ei.timestamp = e, pl = !0, $a.forEach(JO), pl = !1, ga && (hl = !1, Z1(J1));
}, QO = () => {
  ga = !0, hl = !0, pl || Z1(J1);
}, as = () => ei;
function Q1(e, t, r = 0) {
  return e - t - r;
}
function eE(e, t, r = 0, n = !0) {
  return n ? Q1(t + -e, t, r) : t - (e - t) + r;
}
function tE(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const rE = (e) => {
  const t = ({ delta: r }) => e(r);
  return {
    start: () => lr.update(t, !0),
    stop: () => oi.update(t)
  };
};
function eb(e) {
  var t, r, { from: n, autoplay: i = !0, driver: a = rE, elapsed: o = 0, repeat: s = 0, repeatType: u = "loop", repeatDelay: c = 0, onPlay: l, onStop: f, onComplete: d, onRepeat: p, onUpdate: v } = e, h = Yt(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: g } = h, y, w = 0, x = h.duration, b, m = !1, S = !0, A;
  const O = GO(h);
  !((r = (t = O).needsInterpolation) === null || r === void 0) && r.call(t, n, g) && (A = H1([0, 100], [n, g], {
    clamp: !1
  }), n = 0, g = 100);
  const E = O(Object.assign(Object.assign({}, h), { from: n, to: g }));
  function M() {
    w++, u === "reverse" ? (S = w % 2 === 0, o = eE(o, x, c, S)) : (o = Q1(o, x, c), u === "mirror" && E.flipTarget()), m = !1, p && p();
  }
  function C() {
    y.stop(), d && d();
  }
  function N(D) {
    if (S || (D = -D), o += D, !m) {
      const j = E.next(Math.max(0, o));
      b = j.value, A && (b = A(b)), m = S ? j.done : o <= 0;
    }
    v == null || v(b), m && (w === 0 && (x != null || (x = o)), w < s ? tE(o, x, c, S) && M() : C());
  }
  function k() {
    l == null || l(), y = a(N), y.start();
  }
  return i && k(), {
    stop: () => {
      f == null || f(), y.stop();
    }
  };
}
function tb(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function nE({ from: e = 0, velocity: t = 0, min: r, max: n, power: i = 0.8, timeConstant: a = 750, bounceStiffness: o = 500, bounceDamping: s = 10, restDelta: u = 1, modifyTarget: c, driver: l, onUpdate: f, onComplete: d, onStop: p }) {
  let v;
  function h(x) {
    return r !== void 0 && x < r || n !== void 0 && x > n;
  }
  function g(x) {
    return r === void 0 ? n : n === void 0 || Math.abs(r - x) < Math.abs(n - x) ? r : n;
  }
  function y(x) {
    v == null || v.stop(), v = eb(Object.assign(Object.assign({}, x), {
      driver: l,
      onUpdate: (b) => {
        var m;
        f == null || f(b), (m = x.onUpdate) === null || m === void 0 || m.call(x, b);
      },
      onComplete: d,
      onStop: p
    }));
  }
  function w(x) {
    y(Object.assign({ type: "spring", stiffness: o, damping: s, restDelta: u }, x));
  }
  if (h(e))
    w({ from: e, velocity: t, to: g(e) });
  else {
    let x = i * t + e;
    typeof c < "u" && (x = c(x));
    const b = g(x), m = b === r ? -1 : 1;
    let S, A;
    const O = (E) => {
      S = A, A = E, t = tb(E - S, as().delta), (m === 1 && E > b || m === -1 && E < b) && w({ from: E, to: b, velocity: t });
    };
    y({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: a,
      power: i,
      restDelta: u,
      modifyTarget: c,
      onUpdate: h(x) ? O : void 0
    });
  }
  return {
    stop: () => v == null ? void 0 : v.stop()
  };
}
const vl = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"), Fp = (e) => vl(e) && e.hasOwnProperty("z"), to = (e, t) => Math.abs(e - t);
function rb(e, t) {
  if (dl(e) && dl(t))
    return to(e, t);
  if (vl(e) && vl(t)) {
    const r = to(e.x, t.x), n = to(e.y, t.y), i = Fp(e) && Fp(t) ? to(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(i, 2));
  }
}
const nb = (e, t) => 1 - 3 * t + 3 * e, ib = (e, t) => 3 * t - 6 * e, ab = (e) => 3 * e, os = (e, t, r) => ((nb(t, r) * e + ib(t, r)) * e + ab(t)) * e, ob = (e, t, r) => 3 * nb(t, r) * e * e + 2 * ib(t, r) * e + ab(t), iE = 1e-7, aE = 10;
function oE(e, t, r, n, i) {
  let a, o, s = 0;
  do
    o = t + (r - t) / 2, a = os(o, n, i) - e, a > 0 ? r = o : t = o;
  while (Math.abs(a) > iE && ++s < aE);
  return o;
}
const sE = 8, uE = 1e-3;
function cE(e, t, r, n) {
  for (let i = 0; i < sE; ++i) {
    const a = ob(t, r, n);
    if (a === 0)
      return t;
    const o = os(t, r, n) - e;
    t -= o / a;
  }
  return t;
}
const Oo = 11, ro = 1 / (Oo - 1);
function lE(e, t, r, n) {
  if (e === t && r === n)
    return gd;
  const i = new Float32Array(Oo);
  for (let o = 0; o < Oo; ++o)
    i[o] = os(o * ro, e, r);
  function a(o) {
    let s = 0, u = 1;
    const c = Oo - 1;
    for (; u !== c && i[u] <= o; ++u)
      s += ro;
    --u;
    const l = (o - i[u]) / (i[u + 1] - i[u]), f = s + l * ro, d = ob(f, e, r);
    return d >= uE ? cE(o, f, e, r) : d === 0 ? f : oE(o, s, s + ro, e, r);
  }
  return (o) => o === 0 || o === 1 ? o : os(a(o), t, n);
}
function fE(e) {
  var t = e.onTap, r = e.onTapStart, n = e.onTapCancel, i = e.whileTap, a = e.visualElement, o = t || r || n || i, s = ai(!1), u = ai(null), c = {
    passive: !(r || t || n || v)
  };
  function l() {
    var h;
    (h = u.current) === null || h === void 0 || h.call(u), u.current = null;
  }
  function f() {
    var h;
    return l(), s.current = !1, (h = a.animationState) === null || h === void 0 || h.setActive(Ve.Tap, !1), !D1();
  }
  function d(h, g) {
    !f() || (F1(a.getInstance(), h.target) ? t == null || t(h, g) : n == null || n(h, g));
  }
  function p(h, g) {
    !f() || n == null || n(h, g);
  }
  function v(h, g) {
    var y;
    l(), !s.current && (s.current = !0, u.current = hu(Qn(window, "pointerup", d, c), Qn(window, "pointercancel", p, c)), (y = a.animationState) === null || y === void 0 || y.setActive(Ve.Tap, !0), r == null || r(h, g));
  }
  rs(a, "pointerdown", o ? v : void 0, c), V1(l);
}
var Vp = /* @__PURE__ */ new Set();
function sb(e, t, r) {
  e || Vp.has(t) || (console.warn(t), r && console.warn(r), Vp.add(t));
}
var gl = /* @__PURE__ */ new WeakMap(), sc = /* @__PURE__ */ new WeakMap(), dE = function(e) {
  var t;
  (t = gl.get(e.target)) === null || t === void 0 || t(e);
}, hE = function(e) {
  e.forEach(dE);
};
function pE(e) {
  var t = e.root, r = Yt(e, ["root"]), n = t || document;
  sc.has(n) || sc.set(n, {});
  var i = sc.get(n), a = JSON.stringify(r);
  return i[a] || (i[a] = new IntersectionObserver(hE, Z({ root: t }, r))), i[a];
}
function vE(e, t, r) {
  var n = pE(t);
  return gl.set(e, r), n.observe(e), function() {
    gl.delete(e), n.unobserve(e);
  };
}
function gE(e) {
  var t = e.visualElement, r = e.whileInView, n = e.onViewportEnter, i = e.onViewportLeave, a = e.viewport, o = a === void 0 ? {} : a, s = ai({
    hasEnteredView: !1,
    isInView: !1
  }), u = Boolean(r || n || i);
  o.once && s.current.hasEnteredView && (u = !1);
  var c = typeof IntersectionObserver > "u" ? bE : yE;
  c(u, s.current, t, o);
}
var mE = {
  some: 0,
  all: 1
};
function yE(e, t, r, n) {
  var i = n.root, a = n.margin, o = n.amount, s = o === void 0 ? "some" : o, u = n.once;
  Dt(function() {
    if (!!e) {
      var c = {
        root: i == null ? void 0 : i.current,
        rootMargin: a,
        threshold: typeof s == "number" ? s : mE[s]
      }, l = function(f) {
        var d, p = f.isIntersecting;
        if (t.isInView !== p && (t.isInView = p, !(u && !p && t.hasEnteredView))) {
          p && (t.hasEnteredView = !0), (d = r.animationState) === null || d === void 0 || d.setActive(Ve.InView, p);
          var v = r.getProps(), h = p ? v.onViewportEnter : v.onViewportLeave;
          h == null || h(f);
        }
      };
      return vE(r.getInstance(), c, l);
    }
  }, [e, i, a, s]);
}
function bE(e, t, r, n) {
  var i = n.fallback, a = i === void 0 ? !0 : i;
  Dt(function() {
    !e || !a || (r1 !== "production" && sb(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
      var o;
      t.hasEnteredView = !0;
      var s = r.getProps().onViewportEnter;
      s == null || s(null), (o = r.animationState) === null || o === void 0 || o.setActive(Ve.InView, !0);
    }));
  }, [e]);
}
var Hr = function(e) {
  return function(t) {
    return e(t), null;
  };
}, xE = {
  inView: Hr(gE),
  tap: Hr(fE),
  focus: Hr(eO),
  hover: Hr(lO)
}, wE = 0, SE = function() {
  return wE++;
}, AE = function() {
  return fu(SE);
};
function ub() {
  var e = et(uu);
  if (e === null)
    return [!0, null];
  var t = e.isPresent, r = e.onExitComplete, n = e.register, i = AE();
  Dt(function() {
    return n(i);
  }, []);
  var a = function() {
    return r == null ? void 0 : r(i);
  };
  return !t && r ? [!1, a] : [!0];
}
function cb(e, t) {
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
var ss = function(e) {
  return e * 1e3;
}, Bp = {
  linear: gd,
  easeIn: md,
  easeInOut: G1,
  easeOut: IO,
  circIn: K1,
  circInOut: $O,
  circOut: yd,
  backIn: bd,
  backInOut: jO,
  backOut: LO,
  anticipate: DO,
  bounceIn: UO,
  bounceInOut: zO,
  bounceOut: is
}, Up = function(e) {
  if (Array.isArray(e)) {
    Ht(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = it(e, 4), r = t[0], n = t[1], i = t[2], a = t[3];
    return lE(r, n, i, a);
  } else if (typeof e == "string")
    return Ht(Bp[e] !== void 0, "Invalid easing type '".concat(e, "'")), Bp[e];
  return e;
}, _E = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
}, zp = function(e, t) {
  return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Cr.test(t) && !t.startsWith("url("));
}, vn = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
}, no = function(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
}, uc = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
}, OE = function(e) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: e
  };
}, Wp = {
  x: vn,
  y: vn,
  z: vn,
  rotate: vn,
  rotateX: vn,
  rotateY: vn,
  rotateZ: vn,
  scaleX: no,
  scaleY: no,
  scale: no,
  opacity: uc,
  backgroundColor: uc,
  color: uc,
  default: no
}, EE = function(e, t) {
  var r;
  return pa(t) ? r = OE : r = Wp[e] || Wp.default, Z({ to: t }, r(t));
}, TE = Z(Z({}, w1), {
  color: St,
  backgroundColor: St,
  outlineColor: St,
  fill: St,
  stroke: St,
  borderColor: St,
  borderTopColor: St,
  borderRightColor: St,
  borderBottomColor: St,
  borderLeftColor: St,
  filter: cl,
  WebkitFilter: cl
}), xd = function(e) {
  return TE[e];
};
function wd(e, t) {
  var r, n = xd(e);
  return n !== cl && (n = Cr), (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t);
}
var PE = {
  current: !1
};
function CE(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = Yt(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var Hp = !1;
function ME(e) {
  var t = e.ease, r = e.times, n = e.yoyo, i = e.flip, a = e.loop, o = Yt(e, ["ease", "times", "yoyo", "flip", "loop"]), s = Z({}, o);
  return r && (s.offset = r), o.duration && (s.duration = ss(o.duration)), o.repeatDelay && (s.repeatDelay = ss(o.repeatDelay)), t && (s.ease = _E(t) ? t.map(Up) : Up(t)), o.type === "tween" && (s.type = "keyframes"), (n || a || i) && (Na(!Hp, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), Hp = !0, n ? s.repeatType = "reverse" : a ? s.repeatType = "loop" : i && (s.repeatType = "mirror"), s.repeat = a || n || i || o.repeat), o.type !== "spring" && (s.type = "keyframes"), s;
}
function NE(e, t) {
  var r, n, i = Sd(e, t) || {};
  return (n = (r = i.delay) !== null && r !== void 0 ? r : e.delay) !== null && n !== void 0 ? n : 0;
}
function kE(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = ur([], it(e.to), !1), e.to[0] = e.from), e;
}
function RE(e, t, r) {
  var n;
  return Array.isArray(t.to) && ((n = e.duration) !== null && n !== void 0 || (e.duration = 0.8)), kE(t), CE(e) || (e = Z(Z({}, e), EE(r, t.to))), Z(Z({}, t), ME(e));
}
function IE(e, t, r, n, i) {
  var a, o = Sd(n, e), s = (a = o.from) !== null && a !== void 0 ? a : t.get(), u = zp(e, r);
  s === "none" && u && typeof r == "string" ? s = wd(e, r) : qp(s) && typeof r == "string" ? s = Yp(r) : !Array.isArray(r) && qp(r) && typeof s == "string" && (r = Yp(s));
  var c = zp(e, s);
  Na(c === u, "You are trying to animate ".concat(e, ' from "').concat(s, '" to "').concat(r, '". ').concat(s, " is not an animatable value - to enable this animation set ").concat(s, " to a value animatable to ").concat(r, " via the `style` property."));
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
    return o.type === "inertia" || o.type === "decay" ? nE(Z(Z({}, d), o)) : eb(Z(Z({}, RE(o, d, e)), { onUpdate: function(p) {
      var v;
      d.onUpdate(p), (v = o.onUpdate) === null || v === void 0 || v.call(o, p);
    }, onComplete: function() {
      var p;
      d.onComplete(), (p = o.onComplete) === null || p === void 0 || p.call(o);
    } }));
  }
  function f() {
    var d, p, v = M1(r);
    return t.set(v), i(), (d = o == null ? void 0 : o.onUpdate) === null || d === void 0 || d.call(o, v), (p = o == null ? void 0 : o.onComplete) === null || p === void 0 || p.call(o), { stop: function() {
    } };
  }
  return !c || !u || o.type === !1 ? f : l;
}
function qp(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function Yp(e) {
  return typeof e == "number" ? 0 : wd("", e);
}
function Sd(e, t) {
  return e[t] || e.default || e;
}
function Ad(e, t, r, n) {
  return n === void 0 && (n = {}), PE.current && (n = { type: !1 }), t.start(function(i) {
    var a, o, s = IE(e, t, r, n, i), u = NE(n, e), c = function() {
      return o = s();
    };
    return u ? a = window.setTimeout(c, ss(u)) : c(), function() {
      clearTimeout(a), o == null || o.stop();
    };
  });
}
var $E = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
}, LE = function(e) {
  return /^0[^.\s]+$/.test(e);
};
function _d(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Od(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var na = function() {
  function e() {
    this.subscriptions = [];
  }
  return e.prototype.add = function(t) {
    var r = this;
    return _d(this.subscriptions, t), function() {
      return Od(r.subscriptions, t);
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
}(), jE = function(e) {
  return !isNaN(parseFloat(e));
}, DE = function() {
  function e(t) {
    var r = this;
    this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new na(), this.velocityUpdateSubscribers = new na(), this.renderSubscribers = new na(), this.canTrackVelocity = !1, this.updateAndNotify = function(n, i) {
      i === void 0 && (i = !0), r.prev = r.current, r.current = n;
      var a = as(), o = a.delta, s = a.timestamp;
      r.lastUpdated !== s && (r.timeDelta = o, r.lastUpdated = s, lr.postRender(r.scheduleVelocityCheck)), r.prev !== r.current && r.updateSubscribers.notify(r.current), r.velocityUpdateSubscribers.getSize() && r.velocityUpdateSubscribers.notify(r.getVelocity()), i && r.renderSubscribers.notify(r.current);
    }, this.scheduleVelocityCheck = function() {
      return lr.postRender(r.velocityCheck);
    }, this.velocityCheck = function(n) {
      var i = n.timestamp;
      i !== r.lastUpdated && (r.prev = r.current, r.velocityUpdateSubscribers.notify(r.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = jE(this.current);
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
    return this.canTrackVelocity ? tb(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
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
function si(e) {
  return new DE(e);
}
var lb = function(e) {
  return function(t) {
    return t.test(e);
  };
}, FE = {
  test: function(e) {
    return e === "auto";
  },
  parse: function(e) {
    return e;
  }
}, fb = [kn, fe, cr, Lr, E_, O_, FE], Di = function(e) {
  return fb.find(lb(e));
}, VE = ur(ur([], it(fb), !1), [St, Cr], !1), BE = function(e) {
  return VE.find(lb(e));
};
function UE(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, si(r));
}
function zE(e, t) {
  var r = cu(e, t), n = r ? e.makeTargetAnimatable(r, !1) : {}, i = n.transitionEnd, a = i === void 0 ? {} : i;
  n.transition;
  var o = Yt(n, ["transitionEnd", "transition"]);
  o = Z(Z({}, o), a);
  for (var s in o) {
    var u = M1(o[s]);
    UE(e, s, u);
  }
}
function WE(e, t, r) {
  var n, i, a, o, s = Object.keys(t).filter(function(p) {
    return !e.hasValue(p);
  }), u = s.length;
  if (!!u)
    for (var c = 0; c < u; c++) {
      var l = s[c], f = t[l], d = null;
      Array.isArray(f) && (d = f[0]), d === null && (d = (i = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && i !== void 0 ? i : t[l]), d != null && (typeof d == "string" && ($E(d) || LE(d)) ? d = parseFloat(d) : !BE(d) && Cr.test(f) && (d = wd(l, f)), e.addValue(l, si(d)), (a = (o = r)[l]) !== null && a !== void 0 || (o[l] = d), e.setBaseTarget(l, d));
    }
}
function HE(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function qE(e, t, r) {
  var n, i, a = {};
  for (var o in e)
    a[o] = (n = HE(o, t)) !== null && n !== void 0 ? n : (i = r.getValue(o)) === null || i === void 0 ? void 0 : i.get();
  return a;
}
function YE(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart(t);
  var n;
  if (Array.isArray(t)) {
    var i = t.map(function(o) {
      return ml(e, o, r);
    });
    n = Promise.all(i);
  } else if (typeof t == "string")
    n = ml(e, t, r);
  else {
    var a = typeof t == "function" ? cu(e, t, r.custom) : t;
    n = db(e, a, r);
  }
  return n.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function ml(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var i = cu(e, t, r.custom), a = (i || {}).transition, o = a === void 0 ? e.getDefaultTransition() || {} : a;
  r.transitionOverride && (o = r.transitionOverride);
  var s = i ? function() {
    return db(e, i, r);
  } : function() {
    return Promise.resolve();
  }, u = !((n = e.variantChildren) === null || n === void 0) && n.size ? function(p) {
    p === void 0 && (p = 0);
    var v = o.delayChildren, h = v === void 0 ? 0 : v, g = o.staggerChildren, y = o.staggerDirection;
    return GE(e, t, h + p, g, y, r);
  } : function() {
    return Promise.resolve();
  }, c = o.when;
  if (c) {
    var l = it(c === "beforeChildren" ? [s, u] : [u, s], 2), f = l[0], d = l[1];
    return f().then(d);
  } else
    return Promise.all([s(), u(r.delay)]);
}
function db(e, t, r) {
  var n, i = r === void 0 ? {} : r, a = i.delay, o = a === void 0 ? 0 : a, s = i.transitionOverride, u = i.type, c = e.makeTargetAnimatable(t), l = c.transition, f = l === void 0 ? e.getDefaultTransition() : l, d = c.transitionEnd, p = Yt(c, ["transition", "transitionEnd"]);
  s && (f = s);
  var v = [], h = u && ((n = e.animationState) === null || n === void 0 ? void 0 : n.getState()[u]);
  for (var g in p) {
    var y = e.getValue(g), w = p[g];
    if (!(!y || w === void 0 || h && XE(h, g))) {
      var x = Z({ delay: o }, f);
      e.shouldReduceMotion && ka(g) && (x = Z(Z({}, x), { type: !1, delay: 0 }));
      var b = Ad(g, y, w, x);
      v.push(b);
    }
  }
  return Promise.all(v).then(function() {
    d && zE(e, d);
  });
}
function GE(e, t, r, n, i, a) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), i === void 0 && (i = 1);
  var o = [], s = (e.variantChildren.size - 1) * n, u = i === 1 ? function(c) {
    return c === void 0 && (c = 0), c * n;
  } : function(c) {
    return c === void 0 && (c = 0), s - c * n;
  };
  return Array.from(e.variantChildren).sort(KE).forEach(function(c, l) {
    o.push(ml(c, t, Z(Z({}, a), { delay: r + u(l) })).then(function() {
      return c.notifyAnimationComplete(t);
    }));
  }), Promise.all(o);
}
function KE(e, t) {
  return e.sortNodePosition(t);
}
function XE(e, t) {
  var r = e.protectedKeys, n = e.needsAnimating, i = r.hasOwnProperty(t) && n[t] !== !0;
  return n[t] = !1, i;
}
var Ed = [
  Ve.Animate,
  Ve.InView,
  Ve.Focus,
  Ve.Hover,
  Ve.Tap,
  Ve.Drag,
  Ve.Exit
], ZE = ur([], it(Ed), !1).reverse(), JE = Ed.length;
function QE(e) {
  return function(t) {
    return Promise.all(t.map(function(r) {
      var n = r.animation, i = r.options;
      return YE(e, n, i);
    }));
  };
}
function eT(e) {
  var t = QE(e), r = rT(), n = {}, i = !0, a = function(l, f) {
    var d = cu(e, f);
    if (d) {
      d.transition;
      var p = d.transitionEnd, v = Yt(d, ["transition", "transitionEnd"]);
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
    for (var d, p = e.getProps(), v = e.getVariantContext(!0) || {}, h = [], g = /* @__PURE__ */ new Set(), y = {}, w = 1 / 0, x = function(A) {
      var O = ZE[A], E = r[O], M = (d = p[O]) !== null && d !== void 0 ? d : v[O], C = Zt(M), N = O === f ? E.isActive : null;
      N === !1 && (w = A);
      var k = M === v[O] && M !== p[O] && C;
      if (k && i && e.manuallyAnimateOnMount && (k = !1), E.protectedKeys = Z({}, y), !E.isActive && N === null || !M && !E.prevProp || dd(M) || typeof M == "boolean")
        return "continue";
      var D = tT(E.prevProp, M), j = D || O === f && E.isActive && !k && C || A > w && C, R = Array.isArray(M) ? M : [M], Q = R.reduce(a, {});
      N === !1 && (Q = {});
      var K = E.prevResolvedValues, te = K === void 0 ? {} : K, $ = Z(Z({}, te), Q), B = function(W) {
        j = !0, g.delete(W), E.needsAnimating[W] = !0;
      };
      for (var X in $) {
        var q = Q[X], L = te[X];
        y.hasOwnProperty(X) || (q !== L ? pa(q) && pa(L) ? !cb(q, L) || D ? B(X) : E.protectedKeys[X] = !0 : q !== void 0 ? B(X) : g.add(X) : q !== void 0 && g.has(X) ? B(X) : E.protectedKeys[X] = !0);
      }
      E.prevProp = M, E.prevResolvedValues = Q, E.isActive && (y = Z(Z({}, y), Q)), i && e.blockInitialAnimation && (j = !1), j && !k && h.push.apply(h, ur([], it(R.map(function(W) {
        return {
          animation: W,
          options: Z({ type: O }, l)
        };
      })), !1));
    }, b = 0; b < JE; b++)
      x(b);
    if (n = Z({}, y), g.size) {
      var m = {};
      g.forEach(function(A) {
        var O = e.getBaseTarget(A);
        O !== void 0 && (m[A] = O);
      }), h.push({ animation: m });
    }
    var S = Boolean(h.length);
    return i && p.initial === !1 && !e.manuallyAnimateOnMount && (S = !1), i = !1, S ? t(h) : Promise.resolve();
  }
  function c(l, f, d) {
    var p;
    if (r[l].isActive === f)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach(function(g) {
      var y;
      return (y = g.animationState) === null || y === void 0 ? void 0 : y.setActive(l, f);
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
function tT(e, t) {
  return typeof t == "string" ? t !== e : o1(t) ? !cb(t, e) : !1;
}
function gn(e) {
  return e === void 0 && (e = !1), {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function rT() {
  var e;
  return e = {}, e[Ve.Animate] = gn(!0), e[Ve.InView] = gn(), e[Ve.Hover] = gn(), e[Ve.Tap] = gn(), e[Ve.Drag] = gn(), e[Ve.Focus] = gn(), e[Ve.Exit] = gn(), e;
}
var nT = {
  animation: Hr(function(e) {
    var t = e.visualElement, r = e.animate;
    t.animationState || (t.animationState = eT(t)), dd(r) && Dt(function() {
      return r.subscribe(t);
    }, [r]);
  }),
  exit: Hr(function(e) {
    var t = e.custom, r = e.visualElement, n = it(ub(), 2), i = n[0], a = n[1], o = et(uu);
    Dt(function() {
      var s, u;
      r.isPresent = i;
      var c = (s = r.animationState) === null || s === void 0 ? void 0 : s.setActive(Ve.Exit, !i, { custom: (u = o == null ? void 0 : o.custom) !== null && u !== void 0 ? u : t });
      !i && (c == null || c.then(a));
    }, [i]);
  })
}, hb = function() {
  function e(t, r, n) {
    var i = this, a = n === void 0 ? {} : n, o = a.transformPagePoint;
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
      if (!!(i.lastMoveEvent && i.lastMoveEventInfo)) {
        var d = lc(i.lastMoveEventInfo, i.history), p = i.startEvent !== null, v = rb(d.offset, { x: 0, y: 0 }) >= 3;
        if (!(!p && !v)) {
          var h = d.point, g = as().timestamp;
          i.history.push(Z(Z({}, h), { timestamp: g }));
          var y = i.handlers, w = y.onStart, x = y.onMove;
          p || (w && w(i.lastMoveEvent, d), i.startEvent = i.lastMoveEvent), x && x(i.lastMoveEvent, d);
        }
      }
    }, this.handlePointerMove = function(d, p) {
      if (i.lastMoveEvent = d, i.lastMoveEventInfo = cc(p, i.transformPagePoint), k1(d) && d.buttons === 0) {
        i.handlePointerUp(d, p);
        return;
      }
      lr.update(i.updatePoint, !0);
    }, this.handlePointerUp = function(d, p) {
      i.end();
      var v = i.handlers, h = v.onEnd, g = v.onSessionEnd, y = lc(cc(p, i.transformPagePoint), i.history);
      i.startEvent && h && h(d, y), g && g(d, y);
    }, !(R1(t) && t.touches.length > 1)) {
      this.handlers = r, this.transformPagePoint = o;
      var s = hd(t), u = cc(s, this.transformPagePoint), c = u.point, l = as().timestamp;
      this.history = [Z(Z({}, c), { timestamp: l })];
      var f = r.onSessionStart;
      f && f(t, lc(u, this.history)), this.removeListeners = hu(Qn(window, "pointermove", this.handlePointerMove), Qn(window, "pointerup", this.handlePointerUp), Qn(window, "pointercancel", this.handlePointerUp));
    }
  }
  return e.prototype.updateHandlers = function(t) {
    this.handlers = t;
  }, e.prototype.end = function() {
    this.removeListeners && this.removeListeners(), oi.update(this.updatePoint);
  }, e;
}();
function cc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Gp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function lc(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: Gp(r, pb(t)),
    offset: Gp(r, iT(t)),
    velocity: aT(t, 0.1)
  };
}
function iT(e) {
  return e[0];
}
function pb(e) {
  return e[e.length - 1];
}
function aT(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  for (var r = e.length - 1, n = null, i = pb(e); r >= 0 && (n = e[r], !(i.timestamp - n.timestamp > ss(t))); )
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
function Kp(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), rb(e, t) < r;
}
function Xp(e, t, r, n) {
  n === void 0 && (n = 0.5), e.origin = n, e.originPoint = Ge(t.min, t.max, e.origin), e.scale = Mr(r) / Mr(t), (Kp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = Ge(r.min, r.max, e.origin) - e.originPoint, (Kp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function ia(e, t, r, n) {
  Xp(e.x, t.x, r.x, n == null ? void 0 : n.originX), Xp(e.y, t.y, r.y, n == null ? void 0 : n.originY);
}
function Zp(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Mr(t);
}
function oT(e, t, r) {
  Zp(e.x, t.x, r.x), Zp(e.y, t.y, r.y);
}
function Jp(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Mr(t);
}
function aa(e, t, r) {
  Jp(e.x, t.x, r.x), Jp(e.y, t.y, r.y);
}
function sT(e, t, r) {
  var n = t.min, i = t.max;
  return n !== void 0 && e < n ? e = r ? Ge(n, e, r.min) : Math.max(e, n) : i !== void 0 && e > i && (e = r ? Ge(i, e, r.max) : Math.min(e, i)), e;
}
function Qp(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function uT(e, t) {
  var r = t.top, n = t.left, i = t.bottom, a = t.right;
  return {
    x: Qp(e.x, n, a),
    y: Qp(e.y, r, i)
  };
}
function ev(e, t) {
  var r, n = t.min - e.min, i = t.max - e.max;
  return t.max - t.min < e.max - e.min && (r = it([i, n], 2), n = r[0], i = r[1]), { min: n, max: i };
}
function cT(e, t) {
  return {
    x: ev(e.x, t.x),
    y: ev(e.y, t.y)
  };
}
function lT(e, t) {
  var r = 0.5, n = Mr(e), i = Mr(t);
  return i > n ? r = va(t.min, t.max - n, e.min) : n > i && (r = va(e.min, e.max - i, t.min)), ns(0, 1, r);
}
function fT(e, t) {
  var r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
var yl = 0.35;
function dT(e) {
  return e === void 0 && (e = yl), e === !1 ? e = 0 : e === !0 && (e = yl), {
    x: tv(e, "left", "right"),
    y: tv(e, "top", "bottom")
  };
}
function tv(e, t, r) {
  return {
    min: rv(e, t),
    max: rv(e, r)
  };
}
function rv(e, t) {
  var r;
  return typeof e == "number" ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
var nv = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
}, oa = function() {
  return {
    x: nv(),
    y: nv()
  };
}, iv = function() {
  return { min: 0, max: 0 };
}, vt = function() {
  return {
    x: iv(),
    y: iv()
  };
};
function ir(e) {
  return [e("x"), e("y")];
}
function vb(e) {
  var t = e.top, r = e.left, n = e.right, i = e.bottom;
  return {
    x: { min: r, max: n },
    y: { min: t, max: i }
  };
}
function hT(e) {
  var t = e.x, r = e.y;
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function pT(e, t) {
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
function fc(e) {
  return e === void 0 || e === 1;
}
function gb(e) {
  var t = e.scale, r = e.scaleX, n = e.scaleY;
  return !fc(t) || !fc(r) || !fc(n);
}
function jr(e) {
  return gb(e) || av(e.x) || av(e.y) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function av(e) {
  return e && e !== "0%";
}
function us(e, t, r) {
  var n = e - r, i = t * n;
  return r + i;
}
function ov(e, t, r, n, i) {
  return i !== void 0 && (e = us(e, i, n)), us(e, r, n) + t;
}
function bl(e, t, r, n, i) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), e.min = ov(e.min, t, r, n, i), e.max = ov(e.max, t, r, n, i);
}
function mb(e, t) {
  var r = t.x, n = t.y;
  bl(e.x, r.translate, r.scale, r.originPoint), bl(e.y, n.translate, n.scale, n.originPoint);
}
function vT(e, t, r, n) {
  var i, a;
  n === void 0 && (n = !1);
  var o = r.length;
  if (!!o) {
    t.x = t.y = 1;
    for (var s, u, c = 0; c < o; c++)
      s = r[c], u = s.projectionDelta, ((a = (i = s.instance) === null || i === void 0 ? void 0 : i.style) === null || a === void 0 ? void 0 : a.display) !== "contents" && (n && s.options.layoutScroll && s.scroll && s !== s.root && Gn(e, { x: -s.scroll.x, y: -s.scroll.y }), u && (t.x *= u.x.scale, t.y *= u.y.scale, mb(e, u)), n && jr(s.latestValues) && Gn(e, s.latestValues));
  }
}
function Br(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function sv(e, t, r) {
  var n = it(r, 3), i = n[0], a = n[1], o = n[2], s = t[o] !== void 0 ? t[o] : 0.5, u = Ge(e.min, e.max, s);
  bl(e, t[i], t[a], u, t.scale);
}
var gT = ["x", "scaleX", "originX"], mT = ["y", "scaleY", "originY"];
function Gn(e, t) {
  sv(e.x, t, gT), sv(e.y, t, mT);
}
function yb(e, t) {
  return vb(pT(e.getBoundingClientRect(), t));
}
function yT(e, t, r) {
  var n = yb(e, r), i = t.scroll;
  return i && (Br(n.x, i.x), Br(n.y, i.y)), n;
}
var bT = /* @__PURE__ */ new WeakMap(), xT = function() {
  function e(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = vt(), this.visualElement = t;
  }
  return e.prototype.start = function(t, r) {
    var n = this, i = r === void 0 ? {} : r, a = i.snapToCursor, o = a === void 0 ? !1 : a;
    if (this.visualElement.isPresent !== !1) {
      var s = function(f) {
        n.stopAnimation(), o && n.snapToCursor(hd(f, "page").point);
      }, u = function(f, d) {
        var p, v = n.getProps(), h = v.drag, g = v.dragPropagation, y = v.onDragStart;
        h && !g && (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = j1(h), !n.openGlobalLock) || (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), ir(function(w) {
          var x, b, m = n.getAxisMotionValue(w).get() || 0;
          if (cr.test(m)) {
            var S = (b = (x = n.visualElement.projection) === null || x === void 0 ? void 0 : x.layout) === null || b === void 0 ? void 0 : b.actual[w];
            if (S) {
              var A = Mr(S);
              m = A * (parseFloat(m) / 100);
            }
          }
          n.originPoint[w] = m;
        }), y == null || y(f, d), (p = n.visualElement.animationState) === null || p === void 0 || p.setActive(Ve.Drag, !0));
      }, c = function(f, d) {
        var p = n.getProps(), v = p.dragPropagation, h = p.dragDirectionLock, g = p.onDirectionLock, y = p.onDrag;
        if (!(!v && !n.openGlobalLock)) {
          var w = d.offset;
          if (h && n.currentDirection === null) {
            n.currentDirection = wT(w), n.currentDirection !== null && (g == null || g(n.currentDirection));
            return;
          }
          n.updateAxis("x", d.point, w), n.updateAxis("y", d.point, w), n.visualElement.syncRender(), y == null || y(f, d);
        }
      }, l = function(f, d) {
        return n.stop(f, d);
      };
      this.panSession = new hb(t, {
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
    if (!(!n || !io(t, i, this.currentDirection))) {
      var a = this.getAxisMotionValue(t), o = this.originPoint[t] + n[t];
      this.constraints && this.constraints[t] && (o = sT(o, this.constraints[t], this.elastic[t])), a.set(o);
    }
  }, e.prototype.resolveConstraints = function() {
    var t = this, r = this.getProps(), n = r.dragConstraints, i = r.dragElastic, a = (this.visualElement.projection || {}).layout, o = this.constraints;
    n && Yn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && a ? this.constraints = uT(a.actual, n) : this.constraints = !1, this.elastic = dT(i), o !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && ir(function(s) {
      t.getAxisMotionValue(s) && (t.constraints[s] = fT(a.actual[s], t.constraints[s]));
    });
  }, e.prototype.resolveRefConstraints = function() {
    var t = this.getProps(), r = t.dragConstraints, n = t.onMeasureDragConstraints;
    if (!r || !Yn(r))
      return !1;
    var i = r.current;
    Ht(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var a = this.visualElement.projection;
    if (!a || !a.layout)
      return !1;
    var o = yT(i, a.root, this.visualElement.getTransformPagePoint()), s = cT(a.layout.actual, o);
    if (n) {
      var u = n(hT(s));
      this.hasMutatedConstraints = !!u, u && (s = vb(u));
    }
    return s;
  }, e.prototype.startAnimation = function(t) {
    var r = this, n = this.getProps(), i = n.drag, a = n.dragMomentum, o = n.dragElastic, s = n.dragTransition, u = n.dragSnapToOrigin, c = n.onDragTransitionEnd, l = this.constraints || {}, f = ir(function(d) {
      var p;
      if (!!io(d, i, r.currentDirection)) {
        var v = (p = l == null ? void 0 : l[d]) !== null && p !== void 0 ? p : {};
        u && (v = { min: 0, max: 0 });
        var h = o ? 200 : 1e6, g = o ? 40 : 1e7, y = Z(Z({ type: "inertia", velocity: a ? t[d] : 0, bounceStiffness: h, bounceDamping: g, timeConstant: 750, restDelta: 1, restSpeed: 10 }, s), v);
        return r.startAxisValueAnimation(d, y);
      }
    });
    return Promise.all(f).then(c);
  }, e.prototype.startAxisValueAnimation = function(t, r) {
    var n = this.getAxisMotionValue(t);
    return Ad(t, n, 0, r);
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
      if (!!io(n, i, r.currentDirection)) {
        var a = r.visualElement.projection, o = r.getAxisMotionValue(n);
        if (a && a.layout) {
          var s = a.layout.actual[n], u = s.min, c = s.max;
          o.set(t[n] - Ge(u, c, 0.5));
        }
      }
    });
  }, e.prototype.scalePositionWithinConstraints = function() {
    var t = this, r, n = this.getProps(), i = n.drag, a = n.dragConstraints, o = this.visualElement.projection;
    if (!(!Yn(a) || !o || !this.constraints)) {
      this.stopAnimation();
      var s = { x: 0, y: 0 };
      ir(function(c) {
        var l = t.getAxisMotionValue(c);
        if (l) {
          var f = l.get();
          s[c] = lT({ min: f, max: f }, t.constraints[c]);
        }
      });
      var u = this.visualElement.getProps().transformTemplate;
      this.visualElement.getInstance().style.transform = u ? u({}, "") : "none", (r = o.root) === null || r === void 0 || r.updateScroll(), o.updateLayout(), this.resolveConstraints(), ir(function(c) {
        if (!!io(c, i, null)) {
          var l = t.getAxisMotionValue(c), f = t.constraints[c], d = f.min, p = f.max;
          l.set(Ge(d, p, s[c]));
        }
      });
    }
  }, e.prototype.addListeners = function() {
    var t = this, r;
    bT.set(this.visualElement, this);
    var n = this.visualElement.getInstance(), i = Qn(n, "pointerdown", function(c) {
      var l = t.getProps(), f = l.drag, d = l.dragListener, p = d === void 0 ? !0 : d;
      f && p && t.start(c);
    }), a = function() {
      var c = t.getProps().dragConstraints;
      Yn(c) && (t.constraints = t.resolveRefConstraints());
    }, o = this.visualElement.projection, s = o.addEventListener("measure", a);
    o && !o.layout && ((r = o.root) === null || r === void 0 || r.updateScroll(), o.updateLayout()), a();
    var u = du(window, "resize", function() {
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
    var t = this.visualElement.getProps(), r = t.drag, n = r === void 0 ? !1 : r, i = t.dragDirectionLock, a = i === void 0 ? !1 : i, o = t.dragPropagation, s = o === void 0 ? !1 : o, u = t.dragConstraints, c = u === void 0 ? !1 : u, l = t.dragElastic, f = l === void 0 ? yl : l, d = t.dragMomentum, p = d === void 0 ? !0 : d;
    return Z(Z({}, t), { drag: n, dragDirectionLock: a, dragPropagation: s, dragConstraints: c, dragElastic: f, dragMomentum: p });
  }, e;
}();
function io(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function wT(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
function ST(e) {
  var t = e.dragControls, r = e.visualElement, n = fu(function() {
    return new xT(r);
  });
  Dt(function() {
    return t && t.subscribe(n);
  }, [n, t]), Dt(function() {
    return n.addListeners();
  }, [n]);
}
function AT(e) {
  var t = e.onPan, r = e.onPanStart, n = e.onPanEnd, i = e.onPanSessionStart, a = e.visualElement, o = t || r || n || i, s = ai(null), u = et(ad).transformPagePoint, c = {
    onSessionStart: i,
    onStart: r,
    onMove: t,
    onEnd: function(f, d) {
      s.current = null, n && n(f, d);
    }
  };
  Dt(function() {
    s.current !== null && s.current.updateHandlers(c);
  });
  function l(f) {
    s.current = new hb(f, c, {
      transformPagePoint: u
    });
  }
  rs(a, "pointerdown", o && l), V1(function() {
    return s.current && s.current.end();
  });
}
var _T = {
  pan: Hr(AT),
  drag: Hr(ST)
}, ao = [
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
function OT() {
  var e = ao.map(function() {
    return new na();
  }), t = {}, r = {
    clearAllListeners: function() {
      return e.forEach(function(n) {
        return n.clear();
      });
    },
    updatePropListeners: function(n) {
      ao.forEach(function(i) {
        var a, o = "on" + i, s = n[o];
        (a = t[i]) === null || a === void 0 || a.call(t), s && (t[i] = r[o](s));
      });
    }
  };
  return e.forEach(function(n, i) {
    r["on" + ao[i]] = function(a) {
      return n.add(a);
    }, r["notify" + ao[i]] = function() {
      for (var a = [], o = 0; o < arguments.length; o++)
        a[o] = arguments[o];
      return n.notify.apply(n, ur([], it(a), !1));
    };
  }), r;
}
function ET(e, t, r) {
  var n;
  for (var i in t) {
    var a = t[i], o = r[i];
    if (Pr(a))
      e.addValue(i, a), process.env.NODE_ENV === "development" && sb(a.version === "6.5.1", "Attempting to mix Framer Motion versions ".concat(a.version, " with 6.5.1 may not work as expected."));
    else if (Pr(o))
      e.addValue(i, si(a));
    else if (o !== a)
      if (e.hasValue(i)) {
        var s = e.getValue(i);
        !s.hasAnimated && s.set(a);
      } else
        e.addValue(i, si((n = e.getStaticValue(i)) !== null && n !== void 0 ? n : a));
  }
  for (var i in r)
    t[i] === void 0 && e.removeValue(i);
  return t;
}
var bb = function(e) {
  var t = e.treeType, r = t === void 0 ? "" : t, n = e.build, i = e.getBaseTarget, a = e.makeTargetAnimatable, o = e.measureViewportBox, s = e.render, u = e.readValueFromInstance, c = e.removeValueFromRenderState, l = e.sortNodePosition, f = e.scrapeMotionValuesFromProps;
  return function(d, p) {
    var v = d.parent, h = d.props, g = d.presenceId, y = d.blockInitialAnimation, w = d.visualState, x = d.shouldReduceMotion;
    p === void 0 && (p = {});
    var b = !1, m = w.latestValues, S = w.renderState, A, O = OT(), E = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), C = {}, N = Z({}, m), k;
    function D() {
      !A || !b || (j(), s(A, S, h.style, q.projection));
    }
    function j() {
      n(q, S, m, p, h);
    }
    function R() {
      O.notifyUpdate(m);
    }
    function Q(L, W) {
      var ee = W.onChange(function(J) {
        m[L] = J, h.onUpdate && lr.update(R, !1, !0);
      }), se = W.onRenderRequest(q.scheduleRender);
      M.set(L, function() {
        ee(), se();
      });
    }
    var K = f(h);
    for (var te in K) {
      var $ = K[te];
      m[te] !== void 0 && Pr($) && $.set(m[te], !1);
    }
    var B = lu(h), X = u1(h), q = Z(Z({
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
      blockInitialAnimation: y,
      isMounted: function() {
        return Boolean(A);
      },
      mount: function(L) {
        b = !0, A = q.current = L, q.projection && q.projection.mount(L), X && v && !B && (k = v == null ? void 0 : v.addVariantChild(q)), E.forEach(function(W, ee) {
          return Q(ee, W);
        }), v == null || v.children.add(q), q.setProps(h);
      },
      unmount: function() {
        var L;
        (L = q.projection) === null || L === void 0 || L.unmount(), oi.update(R), oi.render(D), M.forEach(function(W) {
          return W();
        }), k == null || k(), v == null || v.children.delete(q), O.clearAllListeners(), A = void 0, b = !1;
      },
      addVariantChild: function(L) {
        var W, ee = q.getClosestVariantNode();
        if (ee)
          return (W = ee.variantChildren) === null || W === void 0 || W.add(L), function() {
            return ee.variantChildren.delete(L);
          };
      },
      sortNodePosition: function(L) {
        return !l || r !== L.treeType ? 0 : l(q.getInstance(), L.getInstance());
      },
      getClosestVariantNode: function() {
        return X ? q : v == null ? void 0 : v.getClosestVariantNode();
      },
      getLayoutId: function() {
        return h.layoutId;
      },
      getInstance: function() {
        return A;
      },
      getStaticValue: function(L) {
        return m[L];
      },
      setStaticValue: function(L, W) {
        return m[L] = W;
      },
      getLatestValues: function() {
        return m;
      },
      setVisibility: function(L) {
        q.isVisible !== L && (q.isVisible = L, q.scheduleRender());
      },
      makeTargetAnimatable: function(L, W) {
        return W === void 0 && (W = !0), a(q, L, h, W);
      },
      measureViewportBox: function() {
        return o(A, h);
      },
      addValue: function(L, W) {
        q.hasValue(L) && q.removeValue(L), E.set(L, W), m[L] = W.get(), Q(L, W);
      },
      removeValue: function(L) {
        var W;
        E.delete(L), (W = M.get(L)) === null || W === void 0 || W(), M.delete(L), delete m[L], c(L, S);
      },
      hasValue: function(L) {
        return E.has(L);
      },
      getValue: function(L, W) {
        var ee = E.get(L);
        return ee === void 0 && W !== void 0 && (ee = si(W), q.addValue(L, ee)), ee;
      },
      forEachValue: function(L) {
        return E.forEach(L);
      },
      readValue: function(L) {
        var W;
        return (W = m[L]) !== null && W !== void 0 ? W : u(A, L, p);
      },
      setBaseTarget: function(L, W) {
        N[L] = W;
      },
      getBaseTarget: function(L) {
        if (i) {
          var W = i(h, L);
          if (W !== void 0 && !Pr(W))
            return W;
        }
        return N[L];
      }
    }, O), {
      build: function() {
        return j(), S;
      },
      scheduleRender: function() {
        lr.render(D, !1, !0);
      },
      syncRender: D,
      setProps: function(L) {
        (L.transformTemplate || h.transformTemplate) && q.scheduleRender(), h = L, O.updatePropListeners(L), C = ET(q, f(h), C);
      },
      getProps: function() {
        return h;
      },
      getVariant: function(L) {
        var W;
        return (W = h.variants) === null || W === void 0 ? void 0 : W[L];
      },
      getDefaultTransition: function() {
        return h.transition;
      },
      getTransformPagePoint: function() {
        return h.transformPagePoint;
      },
      getVariantContext: function(L) {
        if (L === void 0 && (L = !1), L)
          return v == null ? void 0 : v.getVariantContext();
        if (!B) {
          var W = (v == null ? void 0 : v.getVariantContext()) || {};
          return h.initial !== void 0 && (W.initial = h.initial), W;
        }
        for (var ee = {}, se = 0; se < TT; se++) {
          var J = xb[se], F = h[J];
          (Zt(F) || F === !1) && (ee[J] = F);
        }
        return ee;
      }
    });
    return q;
  };
}, xb = ur(["initial"], it(Ed), !1), TT = xb.length;
function xl(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var wb = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function PT(e) {
  var t = wb.exec(e);
  if (!t)
    return [,];
  var r = it(t, 3), n = r[1], i = r[2];
  return [n, i];
}
var CT = 4;
function wl(e, t, r) {
  r === void 0 && (r = 1), Ht(r <= CT, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
  var n = it(PT(e), 2), i = n[0], a = n[1];
  if (!!i) {
    var o = window.getComputedStyle(t).getPropertyValue(i);
    return o ? o.trim() : xl(a) ? wl(a, t, r + 1) : a;
  }
}
function MT(e, t, r) {
  var n, i = Yt(t, []), a = e.getInstance();
  if (!(a instanceof Element))
    return { target: i, transitionEnd: r };
  r && (r = Z({}, r)), e.forEachValue(function(c) {
    var l = c.get();
    if (!!xl(l)) {
      var f = wl(l, a);
      f && c.set(f);
    }
  });
  for (var o in i) {
    var s = i[o];
    if (!!xl(s)) {
      var u = wl(s, a);
      !u || (i[o] = u, r && ((n = r[o]) !== null && n !== void 0 || (r[o] = s)));
    }
  }
  return { target: i, transitionEnd: r };
}
var NT = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), Sb = function(e) {
  return NT.has(e);
}, kT = function(e) {
  return Object.keys(e).some(Sb);
}, Ab = function(e, t) {
  e.set(t, !1), e.set(t);
}, oo = function(e) {
  return e === kn || e === fe;
}, uv;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(uv || (uv = {}));
var cv = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, lv = function(e, t) {
  return function(r, n) {
    var i = n.transform;
    if (i === "none" || !i)
      return 0;
    var a = i.match(/^matrix3d\((.+)\)$/);
    if (a)
      return cv(a[1], t);
    var o = i.match(/^matrix\((.+)\)$/);
    return o ? cv(o[1], e) : 0;
  };
}, RT = /* @__PURE__ */ new Set(["x", "y", "z"]), IT = da.filter(function(e) {
  return !RT.has(e);
});
function $T(e) {
  var t = [];
  return IT.forEach(function(r) {
    var n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var fv = {
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
  x: lv(4, 13),
  y: lv(5, 14)
}, LT = function(e, t, r) {
  var n = t.measureViewportBox(), i = t.getInstance(), a = getComputedStyle(i), o = a.display, s = {};
  o === "none" && t.setStaticValue("display", e.display || "block"), r.forEach(function(c) {
    s[c] = fv[c](n, a);
  }), t.syncRender();
  var u = t.measureViewportBox();
  return r.forEach(function(c) {
    var l = t.getValue(c);
    Ab(l, s[c]), e[c] = fv[c](u, a);
  }), e;
}, jT = function(e, t, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {}), t = Z({}, t), n = Z({}, n);
  var i = Object.keys(t).filter(Sb), a = [], o = !1, s = [];
  if (i.forEach(function(l) {
    var f = e.getValue(l);
    if (!!e.hasValue(l)) {
      var d = r[l], p = Di(d), v = t[l], h;
      if (pa(v)) {
        var g = v.length, y = v[0] === null ? 1 : 0;
        d = v[y], p = Di(d);
        for (var w = y; w < g; w++)
          h ? Ht(Di(v[w]) === h, "All keyframes must be of the same type") : (h = Di(v[w]), Ht(h === p || oo(p) && oo(h), "Keyframes must be of the same dimension as the current value"));
      } else
        h = Di(v);
      if (p !== h)
        if (oo(p) && oo(h)) {
          var x = f.get();
          typeof x == "string" && f.set(parseFloat(x)), typeof v == "string" ? t[l] = parseFloat(v) : Array.isArray(v) && h === fe && (t[l] = v.map(parseFloat));
        } else
          (p == null ? void 0 : p.transform) && (h == null ? void 0 : h.transform) && (d === 0 || v === 0) ? d === 0 ? f.set(h.transform(d)) : t[l] = p.transform(v) : (o || (a = $T(e), o = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], Ab(f, v));
    }
  }), s.length) {
    var u = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = LT(t, e, s);
    return a.length && a.forEach(function(l) {
      var f = it(l, 2), d = f[0], p = f[1];
      e.getValue(d).set(p);
    }), e.syncRender(), u !== null && window.scrollTo({ top: u }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function DT(e, t, r, n) {
  return kT(t) ? jT(e, t, r, n) : { target: t, transitionEnd: n };
}
var FT = function(e, t, r, n) {
  var i = MT(e, t, n);
  return t = i.target, n = i.transitionEnd, DT(e, t, r, n);
};
function VT(e) {
  return window.getComputedStyle(e);
}
var _b = {
  treeType: "dom",
  readValueFromInstance: function(e, t) {
    if (ka(t)) {
      var r = xd(t);
      return r && r.default || 0;
    } else {
      var n = VT(e);
      return (h1(t) ? n.getPropertyValue(t) : n[t]) || 0;
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
    return yb(e, r);
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
    var a = t.transition, o = t.transitionEnd, s = Yt(t, ["transition", "transitionEnd"]), u = qE(s, a || {}, e);
    if (i && (o && (o = i(o)), s && (s = i(s)), u && (u = i(u))), n) {
      WE(e, s, u);
      var c = FT(e, s, u, o);
      o = c.transitionEnd, s = c.target;
    }
    return Z({ transition: a, transitionEnd: o }, s);
  },
  scrapeMotionValuesFromProps: fd,
  build: function(e, t, r, n, i) {
    e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"), ud(t, r, n, i.transformTemplate);
  },
  render: E1
}, BT = bb(_b), UT = bb(Z(Z({}, _b), { getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var r;
  return ka(t) ? ((r = xd(t)) === null || r === void 0 ? void 0 : r.default) || 0 : (t = T1.has(t) ? t : O1(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: C1, build: function(e, t, r, n, i) {
  ld(t, r, n, i.transformTemplate);
}, render: P1 })), zT = function(e, t) {
  return od(e) ? UT(t, { enableHardwareAcceleration: !1 }) : BT(t, { enableHardwareAcceleration: !0 });
};
function dv(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Fi = {
  correct: function(e, t) {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (fe.test(e))
        e = parseFloat(e);
      else
        return e;
    var r = dv(e, t.target.x), n = dv(e, t.target.y);
    return "".concat(r, "% ").concat(n, "%");
  }
}, hv = "_$css", WT = {
  correct: function(e, t) {
    var r = t.treeScale, n = t.projectionDelta, i = e, a = e.includes("var("), o = [];
    a && (e = e.replace(wb, function(h) {
      return o.push(h), hv;
    }));
    var s = Cr.parse(e);
    if (s.length > 5)
      return i;
    var u = Cr.createTransformer(e), c = typeof s[0] != "number" ? 1 : 0, l = n.x.scale * r.x, f = n.y.scale * r.y;
    s[0 + c] /= l, s[1 + c] /= f;
    var d = Ge(l, f, 0.5);
    typeof s[2 + c] == "number" && (s[2 + c] /= d), typeof s[3 + c] == "number" && (s[3 + c] /= d);
    var p = u(s);
    if (a) {
      var v = 0;
      p = p.replace(hv, function() {
        var h = o[v];
        return v++, h;
      });
    }
    return p;
  }
}, HT = function(e) {
  t1(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    var r = this, n = this.props, i = n.visualElement, a = n.layoutGroup, o = n.switchLayoutGroup, s = n.layoutId, u = i.projection;
    v_(YT), u && (a != null && a.group && a.group.add(u), (o == null ? void 0 : o.register) && s && o.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", function() {
      r.safeToRemove();
    }), u.setOptions(Z(Z({}, u.options), {
      onExitComplete: function() {
        return r.safeToRemove();
      }
    }))), ea.hasEverUpdated = !0;
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
}(ye.Component);
function qT(e) {
  var t = it(ub(), 2), r = t[0], n = t[1], i = et(c1);
  return /* @__PURE__ */ _(HT, {
    ...Z({}, e, {
      layoutGroup: i,
      switchLayoutGroup: et(l1),
      isPresent: r,
      safeToRemove: n
    })
  });
}
var YT = {
  borderRadius: Z(Z({}, Fi), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: Fi,
  borderTopRightRadius: Fi,
  borderBottomLeftRadius: Fi,
  borderBottomRightRadius: Fi,
  boxShadow: WT
}, GT = {
  measureLayout: qT
};
function KT(e, t, r) {
  r === void 0 && (r = {});
  var n = Pr(e) ? e : si(e);
  return Ad("", n, t, r), {
    stop: function() {
      return n.stop();
    },
    isAnimating: function() {
      return n.isAnimating();
    }
  };
}
var Ob = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], XT = Ob.length, pv = function(e) {
  return typeof e == "string" ? parseFloat(e) : e;
}, vv = function(e) {
  return typeof e == "number" || fe.test(e);
};
function ZT(e, t, r, n, i, a) {
  var o, s, u, c;
  i ? (e.opacity = Ge(
    0,
    (o = r.opacity) !== null && o !== void 0 ? o : 1,
    JT(n)
  ), e.opacityExit = Ge((s = t.opacity) !== null && s !== void 0 ? s : 1, 0, QT(n))) : a && (e.opacity = Ge((u = t.opacity) !== null && u !== void 0 ? u : 1, (c = r.opacity) !== null && c !== void 0 ? c : 1, n));
  for (var l = 0; l < XT; l++) {
    var f = "border".concat(Ob[l], "Radius"), d = gv(t, f), p = gv(r, f);
    if (!(d === void 0 && p === void 0)) {
      d || (d = 0), p || (p = 0);
      var v = d === 0 || p === 0 || vv(d) === vv(p);
      v ? (e[f] = Math.max(Ge(pv(d), pv(p), n), 0), (cr.test(p) || cr.test(d)) && (e[f] += "%")) : e[f] = p;
    }
  }
  (t.rotate || r.rotate) && (e.rotate = Ge(t.rotate || 0, r.rotate || 0, n));
}
function gv(e, t) {
  var r;
  return (r = e[t]) !== null && r !== void 0 ? r : e.borderRadius;
}
var JT = Eb(0, 0.5, yd), QT = Eb(0.5, 0.95, gd);
function Eb(e, t, r) {
  return function(n) {
    return n < e ? 0 : n > t ? 1 : r(va(e, t, n));
  };
}
function mv(e, t) {
  e.min = t.min, e.max = t.max;
}
function Kt(e, t) {
  mv(e.x, t.x), mv(e.y, t.y);
}
function yv(e, t, r, n, i) {
  return e -= t, e = us(e, 1 / r, n), i !== void 0 && (e = us(e, 1 / i, n)), e;
}
function e2(e, t, r, n, i, a, o) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = 0.5), a === void 0 && (a = e), o === void 0 && (o = e), cr.test(t)) {
    t = parseFloat(t);
    var s = Ge(o.min, o.max, t / 100);
    t = s - o.min;
  }
  if (typeof t == "number") {
    var u = Ge(a.min, a.max, n);
    e === a && (u -= t), e.min = yv(e.min, t, r, u, i), e.max = yv(e.max, t, r, u, i);
  }
}
function bv(e, t, r, n, i) {
  var a = it(r, 3), o = a[0], s = a[1], u = a[2];
  e2(e, t[o], t[s], t[u], t.scale, n, i);
}
var t2 = ["x", "scaleX", "originX"], r2 = ["y", "scaleY", "originY"];
function xv(e, t, r, n) {
  bv(e.x, t, t2, r == null ? void 0 : r.x, n == null ? void 0 : n.x), bv(e.y, t, r2, r == null ? void 0 : r.y, n == null ? void 0 : n.y);
}
function wv(e) {
  return e.translate === 0 && e.scale === 1;
}
function Tb(e) {
  return wv(e.x) && wv(e.y);
}
function Pb(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
var n2 = function() {
  function e() {
    this.members = [];
  }
  return e.prototype.add = function(t) {
    _d(this.members, t), t.scheduleRender();
  }, e.prototype.remove = function(t) {
    if (Od(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
}(), i2 = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function Sv(e, t, r) {
  var n = e.x.translate / t.x, i = e.y.translate / t.y, a = "translate3d(".concat(n, "px, ").concat(i, "px, 0) ");
  if (a += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") "), r) {
    var o = r.rotate, s = r.rotateX, u = r.rotateY;
    o && (a += "rotate(".concat(o, "deg) ")), s && (a += "rotateX(".concat(s, "deg) ")), u && (a += "rotateY(".concat(u, "deg) "));
  }
  var c = e.x.scale * t.x, l = e.y.scale * t.y;
  return a += "scale(".concat(c, ", ").concat(l, ")"), a === i2 ? "none" : a;
}
var a2 = function(e, t) {
  return e.depth - t.depth;
}, o2 = function() {
  function e() {
    this.children = [], this.isDirty = !1;
  }
  return e.prototype.add = function(t) {
    _d(this.children, t), this.isDirty = !0;
  }, e.prototype.remove = function(t) {
    Od(this.children, t), this.isDirty = !0;
  }, e.prototype.forEach = function(t) {
    this.isDirty && this.children.sort(a2), this.isDirty = !1, this.children.forEach(t);
  }, e;
}(), Av = 1e3;
function Cb(e) {
  var t = e.attachResizeListener, r = e.defaultParent, n = e.measureScroll, i = e.checkIsScrollRoot, a = e.resetTransform;
  return function() {
    function o(s, u, c) {
      var l = this;
      u === void 0 && (u = {}), c === void 0 && (c = r == null ? void 0 : r()), this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = function() {
        l.isUpdating && (l.isUpdating = !1, l.clearAllSnapshots());
      }, this.updateProjection = function() {
        l.nodes.forEach(d2), l.nodes.forEach(h2);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.id = s, this.latestValues = u, this.root = c ? c.root || c : this, this.path = c ? ur(ur([], it(c.path), !1), [c], !1) : [], this.parent = c, this.depth = c ? c.depth + 1 : 0, s && this.root.registerPotentialNode(s, this);
      for (var f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new o2());
    }
    return o.prototype.addEventListener = function(s, u) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new na()), this.eventHandlers.get(s).add(u);
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
            c.root.updateBlockedByResize = !0, clearTimeout(h), h = window.setTimeout(g, 250), ea.hasAnimatedSinceResize && (ea.hasAnimatedSinceResize = !1, c.nodes.forEach(f2));
          });
        }
        d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && v && (d || p) && this.addEventListener("didUpdate", function(y) {
          var w, x, b, m, S, A = y.delta, O = y.hasLayoutChanged, E = y.hasRelativeTargetChanged, M = y.layout;
          if (c.isTreeAnimationBlocked()) {
            c.target = void 0, c.relativeTarget = void 0;
            return;
          }
          var C = (x = (w = c.options.transition) !== null && w !== void 0 ? w : v.getDefaultTransition()) !== null && x !== void 0 ? x : y2, N = v.getProps(), k = N.onLayoutAnimationStart, D = N.onLayoutAnimationComplete, j = !c.targetLayout || !Pb(c.targetLayout, M) || E, R = !O && E;
          if (((b = c.resumeFrom) === null || b === void 0 ? void 0 : b.instance) || R || O && (j || !c.currentAnimation)) {
            c.resumeFrom && (c.resumingFrom = c.resumeFrom, c.resumingFrom.resumingFrom = void 0), c.setAnimationOrigin(A, R);
            var Q = Z(Z({}, Sd(C, "layout")), { onPlay: k, onComplete: D });
            v.shouldReduceMotion && (Q.delay = 0, Q.type = !1), c.startAnimation(Q);
          } else
            !O && c.animationProgress === 0 && c.finishAnimation(), c.isLead() && ((S = (m = c.options).onExitComplete) === null || S === void 0 || S.call(m));
          c.targetLayout = M;
        });
      }
    }, o.prototype.unmount = function() {
      var s, u;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (s = this.getStack()) === null || s === void 0 || s.remove(this), (u = this.parent) === null || u === void 0 || u.children.delete(this), this.instance = void 0, oi.preRender(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, (s = this.nodes) === null || s === void 0 || s.forEach(p2));
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_v);
        return;
      }
      !this.isUpdating || (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(b2), this.potentialNodes.clear()), this.nodes.forEach(l2), this.nodes.forEach(s2), this.nodes.forEach(u2), this.clearAllSnapshots(), oc.update(), oc.preRender(), oc.render());
    }, o.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(c2), this.sharedNodes.forEach(v2);
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
        Pv(u), this.snapshot = {
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
        Pv(l);
        var f = this.layout;
        this.layout = {
          measured: l,
          actual: this.removeElementScroll(l)
        }, this.layoutCorrected = vt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), (s = this.options.visualElement) === null || s === void 0 || s.notifyLayoutMeasure(this.layout.actual, f == null ? void 0 : f.actual);
      }
    }, o.prototype.updateScroll = function() {
      this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = n(this.instance));
    }, o.prototype.resetTransform = function() {
      var s;
      if (!!a) {
        var u = this.isLayoutDirty || this.shouldResetTransform, c = this.projectionDelta && !Tb(this.projectionDelta), l = (s = this.options.visualElement) === null || s === void 0 ? void 0 : s.getProps().transformTemplate, f = l == null ? void 0 : l(this.latestValues, ""), d = f !== this.prevTransformTemplateValue;
        u && (c || jr(this.latestValues) || d) && (a(this.instance, f), this.shouldResetTransform = !1, this.scheduleRender());
      }
    }, o.prototype.measure = function() {
      var s = this.options.visualElement;
      if (!s)
        return vt();
      var u = s.measureViewportBox(), c = this.root.scroll;
      return c && (Br(u.x, c.x), Br(u.y, c.y)), u;
    }, o.prototype.removeElementScroll = function(s) {
      var u = vt();
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
      var c = vt();
      Kt(c, s);
      for (var l = 0; l < this.path.length; l++) {
        var f = this.path[l];
        !u && f.options.layoutScroll && f.scroll && f !== f.root && Gn(c, {
          x: -f.scroll.x,
          y: -f.scroll.y
        }), jr(f.latestValues) && Gn(c, f.latestValues);
      }
      return jr(this.latestValues) && Gn(c, this.latestValues), c;
    }, o.prototype.removeTransform = function(s) {
      var u, c = vt();
      Kt(c, s);
      for (var l = 0; l < this.path.length; l++) {
        var f = this.path[l];
        if (!!f.instance && !!jr(f.latestValues)) {
          gb(f.latestValues) && f.updateSnapshot();
          var d = vt(), p = f.measure();
          Kt(d, p), xv(c, f.latestValues, (u = f.snapshot) === null || u === void 0 ? void 0 : u.layout, d);
        }
      }
      return jr(this.latestValues) && xv(c, this.latestValues), c;
    }, o.prototype.setTargetDelta = function(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection();
    }, o.prototype.setOptions = function(s) {
      var u;
      this.options = Z(Z(Z({}, this.options), s), { crossfade: (u = s.crossfade) !== null && u !== void 0 ? u : !0 });
    }, o.prototype.clearMeasurements = function() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }, o.prototype.resolveTargetDelta = function() {
      var s, u = this.options, c = u.layout, l = u.layoutId;
      !this.layout || !(c || l) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = vt(), this.relativeTargetOrigin = vt(), aa(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Kt(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = vt(), this.targetWithTransforms = vt()), this.relativeTarget && this.relativeTargetOrigin && ((s = this.relativeParent) === null || s === void 0 ? void 0 : s.target) ? oT(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Kt(this.target, this.layout.actual), mb(this.target, this.targetDelta)) : Kt(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = vt(), this.relativeTargetOrigin = vt(), aa(this.relativeTargetOrigin, this.target, this.relativeParent.target), Kt(this.relativeTarget, this.relativeTargetOrigin)))));
    }, o.prototype.getClosestProjectingParent = function() {
      if (!(!this.parent || jr(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }, o.prototype.calcProjection = function() {
      var s, u = this.options, c = u.layout, l = u.layoutId;
      if (this.isTreeAnimating = Boolean(((s = this.parent) === null || s === void 0 ? void 0 : s.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !(!this.layout || !(c || l))) {
        var f = this.getLead();
        Kt(this.layoutCorrected, this.layout.actual), vT(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== f);
        var d = f.target;
        if (!!d) {
          this.projectionDelta || (this.projectionDelta = oa(), this.projectionDeltaWithTransform = oa());
          var p = this.treeScale.x, v = this.treeScale.y, h = this.projectionTransform;
          ia(this.projectionDelta, this.layoutCorrected, d, this.latestValues), this.projectionTransform = Sv(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== p || this.treeScale.y !== v) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
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
      var f = this.snapshot, d = (f == null ? void 0 : f.latestValues) || {}, p = Z({}, this.latestValues), v = oa();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !u;
      var h = vt(), g = f == null ? void 0 : f.isShared, y = (((l = this.getStack()) === null || l === void 0 ? void 0 : l.members.length) || 0) <= 1, w = Boolean(g && !y && this.options.crossfade === !0 && !this.path.some(m2));
      this.animationProgress = 0, this.mixTargetDelta = function(x) {
        var b, m = x / 1e3;
        Ov(v.x, s.x, m), Ov(v.y, s.y, m), c.setTargetDelta(v), c.relativeTarget && c.relativeTargetOrigin && c.layout && ((b = c.relativeParent) === null || b === void 0 ? void 0 : b.layout) && (aa(h, c.layout.actual, c.relativeParent.layout.actual), g2(c.relativeTarget, c.relativeTargetOrigin, h, m)), g && (c.animationValues = p, ZT(p, d, c.latestValues, m, w, y)), c.root.scheduleUpdateProjection(), c.scheduleRender(), c.animationProgress = m;
      }, this.mixTargetDelta(0);
    }, o.prototype.startAnimation = function(s) {
      var u = this, c, l;
      this.notifyListeners("animationStart"), (c = this.currentAnimation) === null || c === void 0 || c.stop(), this.resumingFrom && ((l = this.resumingFrom.currentAnimation) === null || l === void 0 || l.stop()), this.pendingAnimation && (oi.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = lr.update(function() {
        ea.hasAnimatedSinceResize = !0, u.currentAnimation = KT(0, Av, Z(Z({}, s), { onUpdate: function(f) {
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
      this.currentAnimation && ((s = this.mixTargetDelta) === null || s === void 0 || s.call(this, Av), this.currentAnimation.stop()), this.completeAnimation();
    }, o.prototype.applyTransformsToTarget = function() {
      var s = this.getLead(), u = s.targetWithTransforms, c = s.target, l = s.layout, f = s.latestValues;
      !u || !c || !l || (Kt(u, c), Gn(u, f), ia(this.projectionDeltaWithTransform, this.layoutCorrected, u, f));
    }, o.prototype.registerSharedNode = function(s, u) {
      var c, l, f;
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new n2());
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
        for (var u = !1, c = {}, l = 0; l < ol.length; l++) {
          var f = ol[l], d = "rotate" + f;
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
        return this.needsReset = !1, v.opacity = "", v.pointerEvents = Ao(s.pointerEvents) || "", v.transform = h ? h(this.latestValues, "") : "none", v;
      var g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        var y = {};
        return this.options.layoutId && (y.opacity = (c = this.latestValues.opacity) !== null && c !== void 0 ? c : 1, y.pointerEvents = Ao(s.pointerEvents) || ""), this.hasProjected && !jr(this.latestValues) && (y.transform = h ? h({}, "") : "none", this.hasProjected = !1), y;
      }
      var w = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(), v.transform = Sv(this.projectionDeltaWithTransform, this.treeScale, w), h && (v.transform = h(w, v.transform));
      var x = this.projectionDelta, b = x.x, m = x.y;
      v.transformOrigin = "".concat(b.origin * 100, "% ").concat(m.origin * 100, "% 0"), g.animationValues ? v.opacity = g === this ? (f = (l = w.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : v.opacity = g === this ? (d = w.opacity) !== null && d !== void 0 ? d : "" : (p = w.opacityExit) !== null && p !== void 0 ? p : 0;
      for (var S in es)
        if (w[S] !== void 0) {
          var A = es[S], O = A.correct, E = A.applyTo, M = O(w[S], g);
          if (E)
            for (var C = E.length, N = 0; N < C; N++)
              v[E[N]] = M;
          else
            v[S] = M;
        }
      return this.options.layoutId && (v.pointerEvents = g === this ? Ao(s.pointerEvents) || "" : "none"), v;
    }, o.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    }, o.prototype.resetTree = function() {
      this.root.nodes.forEach(function(s) {
        var u;
        return (u = s.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(_v), this.root.sharedNodes.clear();
    }, o;
  }();
}
function s2(e) {
  e.updateLayout();
}
function u2(e) {
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
    var c = oa();
    ia(c, s, a.layout);
    var l = oa();
    a.isShared ? ia(l, e.applyTransform(u, !0), a.measured) : ia(l, s, a.layout);
    var f = !Tb(c), d = !1;
    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
      var p = e.relativeParent, v = p.snapshot, h = p.layout;
      if (v && h) {
        var g = vt();
        aa(g, a.layout, v.layout);
        var y = vt();
        aa(y, s, h.actual), Pb(g, y) || (d = !0);
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
function c2(e) {
  e.clearSnapshot();
}
function _v(e) {
  e.clearMeasurements();
}
function l2(e) {
  var t = e.options.visualElement;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(), e.resetTransform();
}
function f2(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function d2(e) {
  e.resolveTargetDelta();
}
function h2(e) {
  e.calcProjection();
}
function p2(e) {
  e.resetRotation();
}
function v2(e) {
  e.removeLeadSnapshot();
}
function Ov(e, t, r) {
  e.translate = Ge(t.translate, 0, r), e.scale = Ge(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ev(e, t, r, n) {
  e.min = Ge(t.min, r.min, n), e.max = Ge(t.max, r.max, n);
}
function g2(e, t, r, n) {
  Ev(e.x, t.x, r.x, n), Ev(e.y, t.y, r.y, n);
}
function m2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var y2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function b2(e, t) {
  for (var r = e.root, n = e.path.length - 1; n >= 0; n--)
    if (Boolean(e.path[n].instance)) {
      r = e.path[n];
      break;
    }
  var i = r && r !== e.root ? r.instance : document, a = i.querySelector('[data-projection-id="'.concat(t, '"]'));
  a && e.mount(a, !0);
}
function Tv(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function Pv(e) {
  Tv(e.x), Tv(e.y);
}
var x2 = Cb({
  attachResizeListener: function(e, t) {
    return du(e, "resize", t);
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
}), dc = {
  current: void 0
}, w2 = Cb({
  measureScroll: function(e) {
    return {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  },
  defaultParent: function() {
    if (!dc.current) {
      var e = new x2(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), dc.current = e;
    }
    return dc.current;
  },
  resetTransform: function(e, t) {
    e.style.transform = t != null ? t : "none";
  },
  checkIsScrollRoot: function(e) {
    return Boolean(window.getComputedStyle(e).position === "fixed");
  }
}), S2 = Z(Z(Z(Z({}, nT), xE), _T), GT), Mb = /* @__PURE__ */ h_(function(e, t) {
  return Q_(e, t, S2, zT, w2);
}), I = { exports: {} }, hc = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cv;
function A2() {
  if (Cv)
    return Ee;
  Cv = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case t:
          switch (m = m.type, m) {
            case u:
            case c:
            case n:
            case a:
            case i:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case l:
                case v:
                case p:
                case o:
                  return m;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function b(m) {
    return x(m) === c;
  }
  return Ee.AsyncMode = u, Ee.ConcurrentMode = c, Ee.ContextConsumer = s, Ee.ContextProvider = o, Ee.Element = t, Ee.ForwardRef = l, Ee.Fragment = n, Ee.Lazy = v, Ee.Memo = p, Ee.Portal = r, Ee.Profiler = a, Ee.StrictMode = i, Ee.Suspense = f, Ee.isAsyncMode = function(m) {
    return b(m) || x(m) === u;
  }, Ee.isConcurrentMode = b, Ee.isContextConsumer = function(m) {
    return x(m) === s;
  }, Ee.isContextProvider = function(m) {
    return x(m) === o;
  }, Ee.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Ee.isForwardRef = function(m) {
    return x(m) === l;
  }, Ee.isFragment = function(m) {
    return x(m) === n;
  }, Ee.isLazy = function(m) {
    return x(m) === v;
  }, Ee.isMemo = function(m) {
    return x(m) === p;
  }, Ee.isPortal = function(m) {
    return x(m) === r;
  }, Ee.isProfiler = function(m) {
    return x(m) === a;
  }, Ee.isStrictMode = function(m) {
    return x(m) === i;
  }, Ee.isSuspense = function(m) {
    return x(m) === f;
  }, Ee.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === a || m === i || m === f || m === d || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === p || m.$$typeof === o || m.$$typeof === s || m.$$typeof === l || m.$$typeof === g || m.$$typeof === y || m.$$typeof === w || m.$$typeof === h);
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
var Mv;
function _2() {
  return Mv || (Mv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === c || T === a || T === i || T === f || T === d || typeof T == "object" && T !== null && (T.$$typeof === v || T.$$typeof === p || T.$$typeof === o || T.$$typeof === s || T.$$typeof === l || T.$$typeof === g || T.$$typeof === y || T.$$typeof === w || T.$$typeof === h);
    }
    function b(T) {
      if (typeof T == "object" && T !== null) {
        var he = T.$$typeof;
        switch (he) {
          case t:
            var H = T.type;
            switch (H) {
              case u:
              case c:
              case n:
              case a:
              case i:
              case f:
                return H;
              default:
                var me = H && H.$$typeof;
                switch (me) {
                  case s:
                  case l:
                  case v:
                  case p:
                  case o:
                    return me;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var m = u, S = c, A = s, O = o, E = t, M = l, C = n, N = v, k = p, D = r, j = a, R = i, Q = f, K = !1;
    function te(T) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(T) || b(T) === u;
    }
    function $(T) {
      return b(T) === c;
    }
    function B(T) {
      return b(T) === s;
    }
    function X(T) {
      return b(T) === o;
    }
    function q(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function L(T) {
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
    function F(T) {
      return b(T) === a;
    }
    function G(T) {
      return b(T) === i;
    }
    function ie(T) {
      return b(T) === f;
    }
    Te.AsyncMode = m, Te.ConcurrentMode = S, Te.ContextConsumer = A, Te.ContextProvider = O, Te.Element = E, Te.ForwardRef = M, Te.Fragment = C, Te.Lazy = N, Te.Memo = k, Te.Portal = D, Te.Profiler = j, Te.StrictMode = R, Te.Suspense = Q, Te.isAsyncMode = te, Te.isConcurrentMode = $, Te.isContextConsumer = B, Te.isContextProvider = X, Te.isElement = q, Te.isForwardRef = L, Te.isFragment = W, Te.isLazy = ee, Te.isMemo = se, Te.isPortal = J, Te.isProfiler = F, Te.isStrictMode = G, Te.isSuspense = ie, Te.isValidElementType = x, Te.typeOf = b;
  }()), Te;
}
var Nv;
function Nb() {
  return Nv || (Nv = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = A2() : e.exports = _2();
  }(hc)), hc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pc, kv;
function O2() {
  if (kv)
    return pc;
  kv = 1;
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
  return pc = i() ? Object.assign : function(a, o) {
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
  }, pc;
}
var vc, Rv;
function Td() {
  if (Rv)
    return vc;
  Rv = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return vc = e, vc;
}
var gc, Iv;
function kb() {
  return Iv || (Iv = 1, gc = Function.call.bind(Object.prototype.hasOwnProperty)), gc;
}
var mc, $v;
function E2() {
  if ($v)
    return mc;
  $v = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Td(), r = {}, n = kb();
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
  }, mc = i, mc;
}
var yc, Lv;
function T2() {
  if (Lv)
    return yc;
  Lv = 1;
  var e = Nb(), t = O2(), r = Td(), n = kb(), i = E2(), a = function() {
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
  return yc = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f($) {
      var B = $ && (c && $[c] || $[l]);
      if (typeof B == "function")
        return B;
    }
    var d = "<<anonymous>>", p = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: w(),
      arrayOf: x,
      element: b(),
      elementType: m(),
      instanceOf: S,
      node: M(),
      objectOf: O,
      oneOf: A,
      oneOfType: E,
      shape: N,
      exact: k
    };
    function v($, B) {
      return $ === B ? $ !== 0 || 1 / $ === 1 / B : $ !== $ && B !== B;
    }
    function h($, B) {
      this.message = $, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g($) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, X = 0;
      function q(W, ee, se, J, F, G, ie) {
        if (J = J || d, G = G || se, ie !== r) {
          if (u) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var he = J + ":" + se;
            !B[he] && X < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[he] = !0, X++);
          }
        }
        return ee[se] == null ? W ? ee[se] === null ? new h("The " + F + " `" + G + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new h("The " + F + " `" + G + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : $(ee, se, J, F, G);
      }
      var L = q.bind(null, !1);
      return L.isRequired = q.bind(null, !0), L;
    }
    function y($) {
      function B(X, q, L, W, ee, se) {
        var J = X[q], F = R(J);
        if (F !== $) {
          var G = Q(J);
          return new h(
            "Invalid " + W + " `" + ee + "` of type " + ("`" + G + "` supplied to `" + L + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return g(B);
    }
    function w() {
      return g(o);
    }
    function x($) {
      function B(X, q, L, W, ee) {
        if (typeof $ != "function")
          return new h("Property `" + ee + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var se = X[q];
        if (!Array.isArray(se)) {
          var J = R(se);
          return new h("Invalid " + W + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + L + "`, expected an array."));
        }
        for (var F = 0; F < se.length; F++) {
          var G = $(se, F, L, W, ee + "[" + F + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return g(B);
    }
    function b() {
      function $(B, X, q, L, W) {
        var ee = B[X];
        if (!s(ee)) {
          var se = R(ee);
          return new h("Invalid " + L + " `" + W + "` of type " + ("`" + se + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g($);
    }
    function m() {
      function $(B, X, q, L, W) {
        var ee = B[X];
        if (!e.isValidElementType(ee)) {
          var se = R(ee);
          return new h("Invalid " + L + " `" + W + "` of type " + ("`" + se + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g($);
    }
    function S($) {
      function B(X, q, L, W, ee) {
        if (!(X[q] instanceof $)) {
          var se = $.name || d, J = te(X[q]);
          return new h("Invalid " + W + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + L + "`, expected ") + ("instance of `" + se + "`."));
        }
        return null;
      }
      return g(B);
    }
    function A($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function B(X, q, L, W, ee) {
        for (var se = X[q], J = 0; J < $.length; J++)
          if (v(se, $[J]))
            return null;
        var F = JSON.stringify($, function(ie, T) {
          var he = Q(T);
          return he === "symbol" ? String(T) : T;
        });
        return new h("Invalid " + W + " `" + ee + "` of value `" + String(se) + "` " + ("supplied to `" + L + "`, expected one of " + F + "."));
      }
      return g(B);
    }
    function O($) {
      function B(X, q, L, W, ee) {
        if (typeof $ != "function")
          return new h("Property `" + ee + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var se = X[q], J = R(se);
        if (J !== "object")
          return new h("Invalid " + W + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + L + "`, expected an object."));
        for (var F in se)
          if (n(se, F)) {
            var G = $(se, F, L, W, ee + "." + F, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return g(B);
    }
    function E($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var B = 0; B < $.length; B++) {
        var X = $[B];
        if (typeof X != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(X) + " at index " + B + "."
          ), o;
      }
      function q(L, W, ee, se, J) {
        for (var F = [], G = 0; G < $.length; G++) {
          var ie = $[G], T = ie(L, W, ee, se, J, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && F.push(T.data.expectedType);
        }
        var he = F.length > 0 ? ", expected one of type [" + F.join(", ") + "]" : "";
        return new h("Invalid " + se + " `" + J + "` supplied to " + ("`" + ee + "`" + he + "."));
      }
      return g(q);
    }
    function M() {
      function $(B, X, q, L, W) {
        return D(B[X]) ? null : new h("Invalid " + L + " `" + W + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return g($);
    }
    function C($, B, X, q, L) {
      return new h(
        ($ || "React class") + ": " + B + " type `" + X + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function N($) {
      function B(X, q, L, W, ee) {
        var se = X[q], J = R(se);
        if (J !== "object")
          return new h("Invalid " + W + " `" + ee + "` of type `" + J + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var F in $) {
          var G = $[F];
          if (typeof G != "function")
            return C(L, W, ee, F, Q(G));
          var ie = G(se, F, L, W, ee + "." + F, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return g(B);
    }
    function k($) {
      function B(X, q, L, W, ee) {
        var se = X[q], J = R(se);
        if (J !== "object")
          return new h("Invalid " + W + " `" + ee + "` of type `" + J + "` " + ("supplied to `" + L + "`, expected `object`."));
        var F = t({}, X[q], $);
        for (var G in F) {
          var ie = $[G];
          if (n($, G) && typeof ie != "function")
            return C(L, W, ee, G, Q(ie));
          if (!ie)
            return new h(
              "Invalid " + W + " `" + ee + "` key `" + G + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(X[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var T = ie(se, G, L, W, ee + "." + G, r);
          if (T)
            return T;
        }
        return null;
      }
      return g(B);
    }
    function D($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(D);
          if ($ === null || s($))
            return !0;
          var B = f($);
          if (B) {
            var X = B.call($), q;
            if (B !== $.entries) {
              for (; !(q = X.next()).done; )
                if (!D(q.value))
                  return !1;
            } else
              for (; !(q = X.next()).done; ) {
                var L = q.value;
                if (L && !D(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function j($, B) {
      return $ === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function R($) {
      var B = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : j(B, $) ? "symbol" : B;
    }
    function Q($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var B = R($);
      if (B === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function K($) {
      var B = Q($);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function te($) {
      return !$.constructor || !$.constructor.name ? d : $.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, yc;
}
var bc, jv;
function P2() {
  if (jv)
    return bc;
  jv = 1;
  var e = Td();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bc = function() {
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
  }, bc;
}
if (process.env.NODE_ENV !== "production") {
  var C2 = Nb(), M2 = !0;
  I.exports = T2()(C2.isElement, M2);
} else
  I.exports = P2()();
var N2 = ["color", "size", "title"];
function k2(e, t) {
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
var Pd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = k2(e, N2);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      fillRule: "evenodd",
      d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    })]
  });
});
Pd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Pd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const I2 = Pd;
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
var Cd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = L2(e, $2);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      fillRule: "evenodd",
      d: "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
    })]
  });
});
Cd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Cd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const D2 = Cd;
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
var Md = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = V2(e, F2);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
    })]
  });
});
Md.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Md.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const U2 = Md;
var z2 = ["color", "size", "title"];
function W2(e, t) {
  if (e == null)
    return {};
  var r = H2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function H2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Nd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = W2(e, z2);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
    })]
  });
});
Nd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Nd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const q2 = Nd;
var Y2 = ["color", "size", "title"];
function G2(e, t) {
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
var kd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = G2(e, Y2);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
    })]
  });
});
kd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
kd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const X2 = kd;
var Z2 = ["color", "size", "title"];
function J2(e, t) {
  if (e == null)
    return {};
  var r = Q2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Q2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Rd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = J2(e, Z2);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
    })]
  });
});
Rd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Rd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const eP = Rd;
var tP = ["color", "size", "title"];
function rP(e, t) {
  if (e == null)
    return {};
  var r = nP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function nP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Id = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = rP(e, tP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
    })]
  });
});
Id.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Id.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const iP = Id;
var aP = ["color", "size", "title"];
function oP(e, t) {
  if (e == null)
    return {};
  var r = sP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function sP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var $d = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = oP(e, aP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
    })]
  });
});
$d.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
$d.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const uP = $d;
var cP = ["color", "size", "title"];
function lP(e, t) {
  if (e == null)
    return {};
  var r = fP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function fP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Ld = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = lP(e, cP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      fillRule: "evenodd",
      d: "M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
    }), /* @__PURE__ */ _("path", {
      fillRule: "evenodd",
      d: "M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
    })]
  });
});
Ld.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Ld.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const dP = Ld;
var hP = ["color", "size", "title"];
function pP(e, t) {
  if (e == null)
    return {};
  var r = vP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function vP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var jd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = pP(e, hP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    }), /* @__PURE__ */ _("path", {
      fillRule: "evenodd",
      d: "M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
    }), /* @__PURE__ */ _("path", {
      d: "M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
    })]
  });
});
jd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
jd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const gP = jd;
var mP = ["color", "size", "title"];
function yP(e, t) {
  if (e == null)
    return {};
  var r = bP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function bP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Dd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = yP(e, mP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
    }), /* @__PURE__ */ _("path", {
      fillRule: "evenodd",
      d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
    })]
  });
});
Dd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Dd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const xP = Dd;
var wP = ["color", "size", "title"];
function SP(e, t) {
  if (e == null)
    return {};
  var r = AP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function AP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Fd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = SP(e, wP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
    }), /* @__PURE__ */ _("path", {
      d: "M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
    })]
  });
});
Fd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Fd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const _P = Fd;
var OP = ["color", "size", "title"];
function EP(e, t) {
  if (e == null)
    return {};
  var r = TP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function TP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Vd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = EP(e, OP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
    })]
  });
});
Vd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Vd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const PP = Vd;
var CP = ["color", "size", "title"];
function MP(e, t) {
  if (e == null)
    return {};
  var r = NP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function NP(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Bd = /* @__PURE__ */ bt(function(e, t) {
  var r = e.color, n = e.size, i = e.title, a = MP(e, CP);
  return /* @__PURE__ */ V("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...a,
    children: [i ? /* @__PURE__ */ _("title", {
      children: i
    }) : null, /* @__PURE__ */ _("path", {
      d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    })]
  });
});
Bd.propTypes = {
  color: I.exports.string,
  size: I.exports.oneOfType([I.exports.string, I.exports.number]),
  title: I.exports.string
};
Bd.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const kP = Bd, RP = [], IP = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center"
}, $P = ({
  style: e,
  size: t
}) => /* @__PURE__ */ _("div", {
  className: [...RP].join(" "),
  style: {
    ...IP,
    ...e
  },
  children: /* @__PURE__ */ _(Mb.div, {
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
    children: /* @__PURE__ */ _(iP, {
      size: t
    })
  })
}), LP = [], jP = {}, DP = ({
  style: e,
  size: t
}) => /* @__PURE__ */ _("div", {
  className: LP.join(" "),
  style: {
    ...jP,
    ...e
  },
  children: /* @__PURE__ */ _(Mb.div, {
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
    children: /* @__PURE__ */ _(kP, {
      size: t
    })
  })
}), FP = ["border-0", "rounded-lg", "cursor-pointer", "p-2", "gcr"], VP = {
  position: "relative",
  border: "none"
}, BP = (e) => {
  const [t, r] = Jn(e.vistate || "default");
  Dt(() => {
    let l;
    return (t === "err" || t === "success") && (l = setTimeout(() => r("default"), e.decay || 500)), () => {
      l && clearTimeout(l);
    };
  }, [t]);
  const n = (l) => {
    !e.disabled && e.onClick && (e.clickableStates === !0 || (e.clickableStates || ["default"]).includes(t)) && (r("loading"), e.onClick(l).then(() => r("success")).catch(() => r("err")));
  }, i = xi(e.viusage);
  let a = e.emphasis || 500, o = Jy(a), s = a;
  e.invert && (a = o, o = s);
  const [u, c] = id([i, a]);
  return /* @__PURE__ */ V("button", {
    ...e,
    onClick: n,
    className: [...e.overrideClasses ? [] : FP, ...e.classNames || [], `bg-${i}-${a}`, `hover:bg-${i}-${a - 200}`, `text-${u}-${c}`, `hover:text-${u}-${c + 100}`, `fill-${i}-${o}`].join(" "),
    style: {
      ...VP,
      ...e.style
    },
    children: [e.children, (t === "loading" || t === "err" || t === "success") && /* @__PURE__ */ V("div", {
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
      children: [t === "loading" && /* @__PURE__ */ _(YA, {
        size: "20px"
      }), t === "err" && /* @__PURE__ */ _(DP, {
        size: 40
      }), t === "success" && /* @__PURE__ */ _($P, {
        size: 40
      })]
    })]
  });
}, UP = ["border-2", "rounded-full", "cursor-pointer", "p-3", "gcr"], Oee = {}, Ud = (e) => /* @__PURE__ */ _(BP, {
  overrideClasses: !0,
  classNames: UP,
  ...e,
  children: e.children
}), Eee = [], Tee = {}, zP = ["rounded-full", "overflow-hidden", "flex", "items-center", "justify-items-center"], WP = ["grid"], HP = {
  gridTemplateColumns: "1fr 5fr"
}, Pee = (e) => /* @__PURE__ */ _(Ud, {
  style: {
    position: "relative"
  },
  ...e,
  children: /* @__PURE__ */ V("div", {
    style: HP,
    className: WP.join(" "),
    children: [/* @__PURE__ */ _("div", {
      className: zP.join(" "),
      style: {
        height: e.pegSize || 30,
        width: e.pegSize || 30
      },
      children: e.Peg
    }), /* @__PURE__ */ _("div", {
      children: e.children
    })]
  })
}), Rb = {
  checksCompleted: !1,
  dispatch: () => {
  }
}, Ib = Nr(Rb), qP = (e, t) => t(e), Cee = ({
  children: e
}) => {
  const [t, r] = FA(qP, Rb);
  return /* @__PURE__ */ _(Ib.Provider, {
    value: {
      ...t,
      dispatch: r
    },
    children: e
  });
}, Mee = () => {
  const e = et(Ib);
  if (!e)
    throw new Error("useChecks must be called within a CheckProvider.");
  return e;
}, YP = [
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
], GP = {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 5fr"
}, KP = [
  "h-36",
  "overflow-y-hidden",
  "overflow-x-scroll",
  "flex",
  "items-center",
  "gap-8"
], XP = {}, Nee = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : YP, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : GP,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    style: {
      textAlign: "left"
    },
    children: e.Header
  }), /* @__PURE__ */ _("div", {
    className: KP.join(" "),
    style: XP,
    children: e.children
  })]
}), ZP = [], JP = {}, dt = (e) => {
  const t = xi(e.viusage);
  let r = e.emphasis || 500, n = Jy(r), i = r;
  e.invert && (r = n, n = i);
  const [a, o] = id([t, r]);
  return /* @__PURE__ */ _("div", {
    className: [...e.overrideClasses ? [] : ZP, ...e.classNames || [], `bg-${t}-${r}`, e.hoverAnimate && `hover:bg-${t}-${r - 200}`, `text-${a}-${o}`, e.hoverAnimate && `hover:text-${a}-${o + 100}`, `fill-${t}-${n}`].join(" "),
    style: {
      ...e.overrideStyle ? {} : JP,
      ...e.style
    },
    children: e.children
  });
}, QP = ["relative", "flex", "justify-items-center", "justify-content-center"], eC = {
  justifyContent: "center",
  justifyItems: "center"
}, tC = ["flex", "absolute", "m-auto", "gap-4"], rC = (e) => {
  const [t, r] = Jn(0), n = xi(e.viusage), i = e.emphasis || 500, [a, o] = id([n, i]);
  return /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : QP, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : eC,
      ...e.style
    },
    children: [/* @__PURE__ */ _("div", {
      style: {
        height: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center"
      },
      children: e.Entries && e.Entries[t]
    }), /* @__PURE__ */ _("div", {
      style: {
        bottom: "15px"
      },
      className: tC.join(" "),
      children: (e.Entries || []).map((s, u) => /* @__PURE__ */ _("div", {
        onClick: () => r(u),
        className: ["gcr", "cursor-pointer", "rounded-full", ...t > u - 1 ? [`bg-${n}-${i}`] : ["border", `bg-${a}-${o}`, `border-${n}-${i}`]].join(" "),
        style: {
          height: e.size || 10,
          width: e.size || 10
        }
      }, u))
    })]
  });
}, nC = [], iC = {}, aC = (e) => {
  const t = Object.entries(e.options || {}).map(([r, n]) => /* @__PURE__ */ _(Ud, {
    viusage: e.which === r ? "navigate" : "wrap",
    children: n
  }, r));
  return /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : nC, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : iC,
      ...e.style
    },
    children: [/* @__PURE__ */ _("div", {
      style: {
        height: "80px",
        width: "80px",
        margin: "0 auto"
      },
      children: e.Header
    }), /* @__PURE__ */ _("br", {}), /* @__PURE__ */ _("div", {
      className: "gap-4 text-sm",
      style: {
        height: "auto",
        display: "grid",
        gridTemplateColumns: "1fr"
      },
      children: t
    })]
  });
}, oC = "", sC = {
  cursor: "pointer"
}, uC = (e) => {
  const t = (e.injections || []).reduce((r, n) => n(r), {
    color: "#33b864",
    ...e
  });
  return /* @__PURE__ */ _("div", {
    onClick: () => window.location.href = "/",
    className: oC,
    style: {
      ...sC,
      ...t.style
    },
    children: /* @__PURE__ */ _("svg", {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      viewBox: "0 0 120.000000 120.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: /* @__PURE__ */ _("g", {
        transform: "translate(0.000000,120.000000) scale(0.100000,-0.100000)",
        fill: t.color,
        stroke: "none",
        children: /* @__PURE__ */ _("path", {
          d: "M614 1130 c-261 -28 -468 -217 -505 -459 -25 -168 52 -354 193 -464 73 -57 169 -103 246 -118 80 -15 278 -7 350 15 l52 17 0 144 c0 99 3 145 11 145 6 0 25 -12 42 -26 l31 -26 8 23 c17 46 90 351 85 356 -7 7 -364 -64 -389 -78 -20 -11 -19 -12 17 -49 l37 -38 -36 -40 c-20 -22 -61 -59 -91 -82 -65 -50 -57 -53 -178 62 -68 65 -77 78 -77 109 0 65 28 126 81 173 60 54 121 76 208 76 85 0 128 -13 191 -55 29 -19 54 -35 56 -35 2 0 4 67 4 149 0 107 -4 151 -12 159 -13 10 -140 37 -213 45 -22 3 -72 1 -111 -3z m476 -435 c0 -33 -63 -275 -72 -275 -5 0 -21 11 -36 25 -15 14 -29 25 -32 25 -3 0 -36 -30 -75 -66 -134 -126 -237 -219 -251 -227 -18 -10 -32 0 -136 94 -45 41 -84 73 -87 71 -3 -1 -22 -17 -41 -35 -69 -63 -63 -63 -110 -2 -23 30 -40 59 -38 64 1 5 45 46 96 91 81 69 96 79 110 68 8 -7 54 -45 101 -85 64 -54 89 -69 100 -63 27 16 211 186 211 195 0 2 -14 19 -32 37 l-31 32 154 32 c85 17 157 32 162 33 4 0 7 -6 7 -14z"
        })
      })
    })
  });
}, cC = (e) => /* @__PURE__ */ _(aC, {
  which: e.which,
  Header: /* @__PURE__ */ _(uC, {}),
  options: e.options
}), lC = ["flex", "cursor-pointer"], fC = {
  alignContent: "center",
  alignItems: "center"
}, dC = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : lC, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : fC,
    ...e.style
  },
  children: [/* @__PURE__ */ _(_P, {}), "\u2003\u2003", /* @__PURE__ */ _("span", {
    className: "hover:underline",
    children: "Help"
  })]
}), hC = ["p-4", "grid"], pC = {
  gridTemplateRows: "1fr 1fr"
}, $b = (e) => /* @__PURE__ */ V(dt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : hC, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : pC,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(cC, {
      which: "home",
      options: {
        home: /* @__PURE__ */ V("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ _(dP, {}), "\u2003\u2003House"]
        }),
        team: /* @__PURE__ */ V("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ _(gP, {}), "\u2003\u2003Team"]
        }),
        matchups: /* @__PURE__ */ V("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ _(q2, {}), "\u2003\u2003Matchup"]
        })
      }
    })
  }), /* @__PURE__ */ _("div", {
    style: {
      alignSelf: "end",
      justifySelf: "center"
    },
    children: /* @__PURE__ */ _(dC, {})
  })]
}), vC = [
  "flex",
  "items-center",
  "gap-2",
  "focus-within:outline",
  "focus-within:outline-1",
  "p-2",
  "rounded",
  "bg-drk-gray-200"
], gC = {
  gridTemplateColumns: "1fr 4fr"
}, mC = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : vC, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : gC,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    children: e.Icon || /* @__PURE__ */ _(PP, {})
  }), /* @__PURE__ */ _("input", {
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
}), yC = ["flex", "items-center", "gap-8"], bC = {}, xC = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : yC, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : bC,
    ...e.style
  },
  children: [/* @__PURE__ */ _(mC, {
    classNames: ["rounded-full", "text-sm"]
  }), /* @__PURE__ */ _(U2, {
    size: e.size
  }), /* @__PURE__ */ _(xP, {
    size: e.size
  })]
}), wC = ["grid"], SC = {
  gridTemplateColumns: "1fr 1fr"
}, AC = ["flex", "items-center"], _C = ["flex", "justify-items-end", "justify-end", "items-center"], OC = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : wC, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : SC,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    className: AC.join(" "),
    children: e.Left
  }), /* @__PURE__ */ _("div", {
    className: _C.join(" "),
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
function so(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Er(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? Le({}, e) : e;
  return so(e) && so(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (so(t[i]) && i in e && so(e[i]) ? n[i] = Er(e[i], t[i], r) : n[i] = t[i]);
  }), n;
}
function ui(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Sl = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dv;
function EC() {
  if (Dv)
    return Pe;
  Dv = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(g) {
    if (typeof g == "object" && g !== null) {
      var y = g.$$typeof;
      switch (y) {
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
                  return y;
              }
          }
        case t:
          return y;
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
var Fv;
function TC() {
  return Fv || (Fv = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, g = !1, y = !1, w = !1, x;
    x = Symbol.for("react.module.reference");
    function b(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === i || w || H === n || H === c || H === l || y || H === p || v || h || g || typeof H == "object" && H !== null && (H.$$typeof === d || H.$$typeof === f || H.$$typeof === a || H.$$typeof === o || H.$$typeof === u || H.$$typeof === x || H.getModuleId !== void 0));
    }
    function m(H) {
      if (typeof H == "object" && H !== null) {
        var me = H.$$typeof;
        switch (me) {
          case e:
            var Se = H.type;
            switch (Se) {
              case r:
              case i:
              case n:
              case c:
              case l:
                return Se;
              default:
                var ht = Se && Se.$$typeof;
                switch (ht) {
                  case s:
                  case o:
                  case u:
                  case d:
                  case f:
                  case a:
                    return ht;
                  default:
                    return me;
                }
            }
          case t:
            return me;
        }
      }
    }
    var S = o, A = a, O = e, E = u, M = r, C = d, N = f, k = t, D = i, j = n, R = c, Q = l, K = !1, te = !1;
    function $(H) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(H) {
      return te || (te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(H) {
      return m(H) === o;
    }
    function q(H) {
      return m(H) === a;
    }
    function L(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function W(H) {
      return m(H) === u;
    }
    function ee(H) {
      return m(H) === r;
    }
    function se(H) {
      return m(H) === d;
    }
    function J(H) {
      return m(H) === f;
    }
    function F(H) {
      return m(H) === t;
    }
    function G(H) {
      return m(H) === i;
    }
    function ie(H) {
      return m(H) === n;
    }
    function T(H) {
      return m(H) === c;
    }
    function he(H) {
      return m(H) === l;
    }
    Ce.ContextConsumer = S, Ce.ContextProvider = A, Ce.Element = O, Ce.ForwardRef = E, Ce.Fragment = M, Ce.Lazy = C, Ce.Memo = N, Ce.Portal = k, Ce.Profiler = D, Ce.StrictMode = j, Ce.Suspense = R, Ce.SuspenseList = Q, Ce.isAsyncMode = $, Ce.isConcurrentMode = B, Ce.isContextConsumer = X, Ce.isContextProvider = q, Ce.isElement = L, Ce.isForwardRef = W, Ce.isFragment = ee, Ce.isLazy = se, Ce.isMemo = J, Ce.isPortal = F, Ce.isProfiler = G, Ce.isStrictMode = ie, Ce.isSuspense = T, Ce.isSuspenseList = he, Ce.isValidElementType = b, Ce.typeOf = m;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = EC() : e.exports = TC();
})(Sl);
const PC = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function CC(e) {
  const t = `${e}`.match(PC);
  return t && t[1] || "";
}
function Lb(e, t = "") {
  return e.displayName || e.name || CC(e) || t;
}
function Vv(e, t, r) {
  const n = Lb(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function MC(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Lb(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Sl.exports.ForwardRef:
          return Vv(e, e.render, "ForwardRef");
        case Sl.exports.Memo:
          return Vv(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Xr(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ui(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function NC(e, t) {
  const r = Le({}, t);
  return Object.keys(e).forEach((n) => {
    r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function kC(e, t, r) {
  const n = {};
  return Object.keys(e).forEach(
    (i) => {
      n[i] = e[i].reduce((a, o) => (o && (a.push(t(o)), r && r[o] && a.push(r[o])), a), []).join(" ");
    }
  ), n;
}
const Bv = (e) => e, RC = () => {
  let e = Bv;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Bv;
    }
  };
}, IC = RC(), $C = IC, LC = {
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
function zd(e, t, r = "Mui") {
  const n = LC[t];
  return n ? `${r}-${n}` : `${$C.generate(e)}-${t}`;
}
function jC(e, t, r = "Mui") {
  const n = {};
  return t.forEach((i) => {
    n[i] = zd(e, i, r);
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
function jb(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = jb(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function DC() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = jb(e)) && (n && (n += " "), n += t);
  return n;
}
function Db(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var FC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, VC = /* @__PURE__ */ Db(
  function(e) {
    return FC.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
);
function BC(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function UC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var zC = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(UC(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var o = BC(i);
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
}(), pt = "-ms-", cs = "-moz-", Oe = "-webkit-", Wd = "comm", Hd = "rule", qd = "decl", WC = "@import", Fb = "@keyframes", HC = Math.abs, gu = String.fromCharCode, qC = Object.assign;
function YC(e, t) {
  return lt(e, 0) ^ 45 ? (((t << 2 ^ lt(e, 0)) << 2 ^ lt(e, 1)) << 2 ^ lt(e, 2)) << 2 ^ lt(e, 3) : 0;
}
function Vb(e) {
  return e.trim();
}
function GC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ke(e, t, r) {
  return e.replace(t, r);
}
function Al(e, t) {
  return e.indexOf(t);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ma(e, t, r) {
  return e.slice(t, r);
}
function ar(e) {
  return e.length;
}
function Yd(e) {
  return e.length;
}
function uo(e, t) {
  return t.push(e), e;
}
function KC(e, t) {
  return e.map(t).join("");
}
var mu = 1, ci = 1, Bb = 0, Ct = 0, Je = 0, Si = "";
function yu(e, t, r, n, i, a, o) {
  return { value: e, root: t, parent: r, type: n, props: i, children: a, line: mu, column: ci, length: o, return: "" };
}
function Vi(e, t) {
  return qC(yu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function XC() {
  return Je;
}
function ZC() {
  return Je = Ct > 0 ? lt(Si, --Ct) : 0, ci--, Je === 10 && (ci = 1, mu--), Je;
}
function jt() {
  return Je = Ct < Bb ? lt(Si, Ct++) : 0, ci++, Je === 10 && (ci = 1, mu++), Je;
}
function fr() {
  return lt(Si, Ct);
}
function Eo() {
  return Ct;
}
function La(e, t) {
  return ma(Si, e, t);
}
function ya(e) {
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
function Ub(e) {
  return mu = ci = 1, Bb = ar(Si = e), Ct = 0, [];
}
function zb(e) {
  return Si = "", e;
}
function To(e) {
  return Vb(La(Ct - 1, _l(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function JC(e) {
  for (; (Je = fr()) && Je < 33; )
    jt();
  return ya(e) > 2 || ya(Je) > 3 ? "" : " ";
}
function QC(e, t) {
  for (; --t && jt() && !(Je < 48 || Je > 102 || Je > 57 && Je < 65 || Je > 70 && Je < 97); )
    ;
  return La(e, Eo() + (t < 6 && fr() == 32 && jt() == 32));
}
function _l(e) {
  for (; jt(); )
    switch (Je) {
      case e:
        return Ct;
      case 34:
      case 39:
        e !== 34 && e !== 39 && _l(Je);
        break;
      case 40:
        e === 41 && _l(e);
        break;
      case 92:
        jt();
        break;
    }
  return Ct;
}
function eM(e, t) {
  for (; jt() && e + Je !== 47 + 10; )
    if (e + Je === 42 + 42 && fr() === 47)
      break;
  return "/*" + La(t, Ct - 1) + "*" + gu(e === 47 ? e : jt());
}
function tM(e) {
  for (; !ya(fr()); )
    jt();
  return La(e, Ct);
}
function rM(e) {
  return zb(Po("", null, null, null, [""], e = Ub(e), 0, [0], e));
}
function Po(e, t, r, n, i, a, o, s, u) {
  for (var c = 0, l = 0, f = o, d = 0, p = 0, v = 0, h = 1, g = 1, y = 1, w = 0, x = "", b = i, m = a, S = n, A = x; g; )
    switch (v = w, w = jt()) {
      case 40:
        if (v != 108 && lt(A, f - 1) == 58) {
          Al(A += ke(To(w), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += To(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += JC(v);
        break;
      case 92:
        A += QC(Eo() - 1, 7);
        continue;
      case 47:
        switch (fr()) {
          case 42:
          case 47:
            uo(nM(eM(jt(), Eo()), t, r), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * h:
        s[c++] = ar(A) * y;
      case 125 * h:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            p > 0 && ar(A) - f && uo(p > 32 ? zv(A + ";", n, r, f - 1) : zv(ke(A, " ", "") + ";", n, r, f - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (uo(S = Uv(A, t, r, c, l, i, s, x, b = [], m = [], f), a), w === 123)
              if (l === 0)
                Po(A, t, S, S, b, a, f, s, m);
              else
                switch (d === 99 && lt(A, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    Po(e, S, S, n && uo(Uv(e, S, S, 0, 0, i, s, x, i, b = [], f), m), i, m, f, s, n ? b : m);
                    break;
                  default:
                    Po(A, S, S, S, [""], m, 0, s, m);
                }
        }
        c = l = p = 0, h = y = 1, x = A = "", f = o;
        break;
      case 58:
        f = 1 + ar(A), p = v;
      default:
        if (h < 1) {
          if (w == 123)
            --h;
          else if (w == 125 && h++ == 0 && ZC() == 125)
            continue;
        }
        switch (A += gu(w), w * h) {
          case 38:
            y = l > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            s[c++] = (ar(A) - 1) * y, y = 1;
            break;
          case 64:
            fr() === 45 && (A += To(jt())), d = fr(), l = f = ar(x = A += tM(Eo())), w++;
            break;
          case 45:
            v === 45 && ar(A) == 2 && (h = 0);
        }
    }
  return a;
}
function Uv(e, t, r, n, i, a, o, s, u, c, l) {
  for (var f = i - 1, d = i === 0 ? a : [""], p = Yd(d), v = 0, h = 0, g = 0; v < n; ++v)
    for (var y = 0, w = ma(e, f + 1, f = HC(h = o[v])), x = e; y < p; ++y)
      (x = Vb(h > 0 ? d[y] + " " + w : ke(w, /&\f/g, d[y]))) && (u[g++] = x);
  return yu(e, t, r, i === 0 ? Hd : s, u, c, l);
}
function nM(e, t, r) {
  return yu(e, t, r, Wd, gu(XC()), ma(e, 2, -2), 0);
}
function zv(e, t, r, n) {
  return yu(e, t, r, qd, ma(e, 0, n), ma(e, n + 1, -1), n);
}
function ti(e, t) {
  for (var r = "", n = Yd(e), i = 0; i < n; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function iM(e, t, r, n) {
  switch (e.type) {
    case WC:
    case qd:
      return e.return = e.return || e.value;
    case Wd:
      return "";
    case Fb:
      return e.return = e.value + "{" + ti(e.children, n) + "}";
    case Hd:
      e.value = e.props.join(",");
  }
  return ar(r = ti(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function aM(e) {
  var t = Yd(e);
  return function(r, n, i, a) {
    for (var o = "", s = 0; s < t; s++)
      o += e[s](r, n, i, a) || "";
    return o;
  };
}
function oM(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var sM = function(t, r, n) {
  for (var i = 0, a = 0; i = a, a = fr(), i === 38 && a === 12 && (r[n] = 1), !ya(a); )
    jt();
  return La(t, Ct);
}, uM = function(t, r) {
  var n = -1, i = 44;
  do
    switch (ya(i)) {
      case 0:
        i === 38 && fr() === 12 && (r[n] = 1), t[n] += sM(Ct - 1, r, n);
        break;
      case 2:
        t[n] += To(i);
        break;
      case 4:
        if (i === 44) {
          t[++n] = fr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += gu(i);
    }
  while (i = jt());
  return t;
}, cM = function(t, r) {
  return zb(uM(Ub(t), r));
}, Wv = /* @__PURE__ */ new WeakMap(), lM = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
    for (var r = t.value, n = t.parent, i = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Wv.get(n)) && !i) {
      Wv.set(t, !0);
      for (var a = [], o = cM(r, a), s = n.props, u = 0, c = 0; u < o.length; u++)
        for (var l = 0; l < s.length; l++, c++)
          t.props[c] = a[u] ? o[u].replace(/&\f/g, s[l]) : s[l] + " " + o[u];
    }
  }
}, fM = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, dM = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", hM = function(t) {
  return t.type === "comm" && t.children.indexOf(dM) > -1;
}, pM = function(t) {
  return function(r, n, i) {
    if (!(r.type !== "rule" || t.compat)) {
      var a = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var o = r.parent === i[0], s = o ? i[0].children : i, u = s.length - 1; u >= 0; u--) {
          var c = s[u];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (hM(c))
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
}, Wb = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, vM = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Wb(r[n]))
      return !0;
  return !1;
}, Hv = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, gM = function(t, r, n) {
  !Wb(t) || (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Hv(t)) : vM(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Hv(t)));
};
function Hb(e, t) {
  switch (YC(e, t)) {
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
      return Oe + e + cs + e + pt + e + e;
    case 6828:
    case 4268:
      return Oe + e + pt + e + e;
    case 6165:
      return Oe + e + pt + "flex-" + e + e;
    case 5187:
      return Oe + e + ke(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + pt + "flex-$1$2") + e;
    case 5443:
      return Oe + e + pt + "flex-item-" + ke(e, /flex-|-self/, "") + e;
    case 4675:
      return Oe + e + pt + "flex-line-pack" + ke(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Oe + e + pt + ke(e, "shrink", "negative") + e;
    case 5292:
      return Oe + e + pt + ke(e, "basis", "preferred-size") + e;
    case 6060:
      return Oe + "box-" + ke(e, "-grow", "") + Oe + e + pt + ke(e, "grow", "positive") + e;
    case 4554:
      return Oe + ke(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    case 6187:
      return ke(ke(ke(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ke(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return ke(ke(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + pt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
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
            return ke(e, /(.+:)(.+)-([^]+)/, "$1" + Oe + "$2-$3$1" + cs + (lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Al(e, "stretch") ? Hb(ke(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (lt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (lt(e, ar(e) - 3 - (~Al(e, "!important") && 10))) {
        case 107:
          return ke(e, ":", ":" + Oe) + e;
        case 101:
          return ke(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Oe + (lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Oe + "$2$3$1" + pt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (lt(e, t + 11)) {
        case 114:
          return Oe + e + pt + ke(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Oe + e + pt + ke(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Oe + e + pt + ke(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + pt + e + e;
  }
  return e;
}
var mM = function(t, r, n, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case qd:
        t.return = Hb(t.value, t.length);
        break;
      case Fb:
        return ti([Vi(t, {
          value: ke(t.value, "@", "@" + Oe)
        })], i);
      case Hd:
        if (t.length)
          return KC(t.props, function(a) {
            switch (GC(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ti([Vi(t, {
                  props: [ke(a, /:(read-\w+)/, ":" + cs + "$1")]
                })], i);
              case "::placeholder":
                return ti([Vi(t, {
                  props: [ke(a, /:(plac\w+)/, ":" + Oe + "input-$1")]
                }), Vi(t, {
                  props: [ke(a, /:(plac\w+)/, ":" + cs + "$1")]
                }), Vi(t, {
                  props: [ke(a, /:(plac\w+)/, pt + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, yM = [mM], bM = function(t) {
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
  var i = t.stylisPlugins || yM;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, o, s = [];
  o = t.container || document.head, Array.prototype.forEach.call(
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(h) {
      for (var g = h.getAttribute("data-emotion").split(" "), y = 1; y < g.length; y++)
        a[g[y]] = !0;
      s.push(h);
    }
  );
  var u, c = [lM, fM];
  process.env.NODE_ENV !== "production" && c.push(pM({
    get compat() {
      return v.compat;
    }
  }), gM);
  {
    var l, f = [iM, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? l.insert(h.return) : h.value && h.type !== Wd && l.insert(h.value + "{}"));
    } : oM(function(h) {
      l.insert(h);
    })], d = aM(c.concat(i, f)), p = function(g) {
      return ti(rM(g), d);
    };
    u = function(g, y, w, x) {
      l = w, process.env.NODE_ENV !== "production" && y.map !== void 0 && (l = {
        insert: function(m) {
          w.insert(m + y.map);
        }
      }), p(g ? g + "{" + y.styles + "}" : y.styles), x && (v.inserted[y.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new zC({
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
}, xM = !0;
function qb(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : n += i + " ";
  }), n;
}
var Gd = function(t, r, n) {
  var i = t.key + "-" + r.name;
  (n === !1 || xM === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, Yb = function(t, r, n) {
  Gd(t, r, n);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function wM(e) {
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
var SM = {
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
}, qv = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, AM = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", _M = /[A-Z]|^ms/g, Gb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Kd = function(t) {
  return t.charCodeAt(1) === 45;
}, Yv = function(t) {
  return t != null && typeof t != "boolean";
}, xc = /* @__PURE__ */ Db(function(e) {
  return Kd(e) ? e : e.replace(_M, "-$&").toLowerCase();
}), ls = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Gb, function(n, i, a) {
          return Jt = {
            name: i,
            styles: a,
            next: Jt
          }, i;
        });
  }
  return SM[t] !== 1 && !Kd(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var OM = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, EM = ["normal", "none", "initial", "inherit", "unset"], TM = ls, PM = /^-ms-/, CM = /-(.)/g, Gv = {};
  ls = function(t, r) {
    if (t === "content" && (typeof r != "string" || EM.indexOf(r) === -1 && !OM.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = TM(t, r);
    return n !== "" && !Kd(t) && t.indexOf("-") !== -1 && Gv[t] === void 0 && (Gv[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(PM, "ms-").replace(CM, function(i, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Kb = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ba(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Kb);
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
      return MM(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = Jt, o = r(e);
        return Jt = a, ba(e, t, o);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], u = r.replace(Gb, function(l, f, d) {
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
function MM(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      n += ba(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var o = r[a];
      if (typeof o != "object")
        t != null && t[o] !== void 0 ? n += a + "{" + t[o] + "}" : Yv(o) && (n += xc(a) + ":" + ls(a, o) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Kb);
        if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0))
          for (var s = 0; s < o.length; s++)
            Yv(o[s]) && (n += xc(a) + ":" + ls(a, o[s]) + ";");
        else {
          var u = ba(e, t, o);
          switch (a) {
            case "animation":
            case "animationName": {
              n += xc(a) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(AM), n += a + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Kv = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Xb;
process.env.NODE_ENV !== "production" && (Xb = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Jt, Ol = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, a = "";
  Jt = void 0;
  var o = t[0];
  o == null || o.raw === void 0 ? (i = !1, a += ba(n, r, o)) : (process.env.NODE_ENV !== "production" && o[0] === void 0 && console.error(qv), a += o[0]);
  for (var s = 1; s < t.length; s++)
    a += ba(n, r, t[s]), i && (process.env.NODE_ENV !== "production" && o[s] === void 0 && console.error(qv), a += o[s]);
  var u;
  process.env.NODE_ENV !== "production" && (a = a.replace(Xb, function(d) {
    return u = d, "";
  })), Kv.lastIndex = 0;
  for (var c = "", l; (l = Kv.exec(a)) !== null; )
    c += "-" + l[1];
  var f = wM(a) + c;
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
}, NM = function(t) {
  return t();
}, kM = en["useInsertionEffect"] ? en["useInsertionEffect"] : !1, Zb = kM || NM, RM = {}.hasOwnProperty, Xd = /* @__PURE__ */ Nr(
  typeof HTMLElement < "u" ? /* @__PURE__ */ bM({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Xd.displayName = "EmotionCacheContext");
Xd.Provider;
var Jb = function(t) {
  return /* @__PURE__ */ bt(function(r, n) {
    var i = et(Xd);
    return t(r, i, n);
  });
}, Zd = /* @__PURE__ */ Nr({});
process.env.NODE_ENV !== "production" && (Zd.displayName = "EmotionThemeContext");
var Xv = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Zv = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", IM = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return Gd(r, n, i), Zb(function() {
    return Yb(r, n, i);
  }), null;
}, $M = /* @__PURE__ */ Jb(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var i = e[Xv], a = [n], o = "";
  typeof e.className == "string" ? o = qb(t.registered, a, e.className) : e.className != null && (o = e.className + " ");
  var s = Ol(a, void 0, et(Zd));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var u = e[Zv];
    u && (s = Ol([s, "label:" + u + ";"]));
  }
  o += t.key + "-" + s.name;
  var c = {};
  for (var l in e)
    RM.call(e, l) && l !== "css" && l !== Xv && (process.env.NODE_ENV === "production" || l !== Zv) && (c[l] = e[l]);
  return c.ref = r, c.className = o, /* @__PURE__ */ Tt(Zy, null, /* @__PURE__ */ Tt(IM, {
    cache: t,
    serialized: s,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ Tt(i, c));
});
process.env.NODE_ENV !== "production" && ($M.displayName = "EmotionCssPropInternal");
var LM = VC, jM = function(t) {
  return t !== "theme";
}, Jv = function(t) {
  return typeof t == "string" && t.charCodeAt(0) > 96 ? LM : jM;
}, Qv = function(t, r, n) {
  var i;
  if (r) {
    var a = r.shouldForwardProp;
    i = t.__emotion_forwardProp && a ? function(o) {
      return t.__emotion_forwardProp(o) && a(o);
    } : a;
  }
  return typeof i != "function" && n && (i = t.__emotion_forwardProp), i;
}, e0 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, DM = function(t) {
  var r = t.cache, n = t.serialized, i = t.isStringTag;
  return Gd(r, n, i), Zb(function() {
    return Yb(r, n, i);
  }), null;
}, FM = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, i = n && t.__emotion_base || t, a, o;
  r !== void 0 && (a = r.label, o = r.target);
  var s = Qv(t, r, n), u = s || Jv(i), c = !u("as");
  return function() {
    var l = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && f.push("label:" + a + ";"), l[0] == null || l[0].raw === void 0)
      f.push.apply(f, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(e0), f.push(l[0][0]);
      for (var d = l.length, p = 1; p < d; p++)
        process.env.NODE_ENV !== "production" && l[0][p] === void 0 && console.error(e0), f.push(l[p], l[0][p]);
    }
    var v = Jb(function(h, g, y) {
      var w = c && h.as || i, x = "", b = [], m = h;
      if (h.theme == null) {
        m = {};
        for (var S in h)
          m[S] = h[S];
        m.theme = et(Zd);
      }
      typeof h.className == "string" ? x = qb(g.registered, b, h.className) : h.className != null && (x = h.className + " ");
      var A = Ol(f.concat(b), g.registered, m);
      x += g.key + "-" + A.name, o !== void 0 && (x += " " + o);
      var O = c && s === void 0 ? Jv(w) : u, E = {};
      for (var M in h)
        c && M === "as" || O(M) && (E[M] = h[M]);
      return E.className = x, E.ref = y, /* @__PURE__ */ Tt(Zy, null, /* @__PURE__ */ Tt(DM, {
        cache: g,
        serialized: A,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ Tt(w, E));
    });
    return v.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = i, v.__emotion_styles = f, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return o === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + o;
      }
    }), v.withComponent = function(h, g) {
      return e(h, Le({}, r, g, {
        shouldForwardProp: Qv(v, g, !0)
      })).apply(void 0, f);
    }, v;
  };
}, VM = [
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
], El = FM.bind();
VM.forEach(function(e) {
  El[e] = El(e);
});
const BM = El;
/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function UM(e, t) {
  const r = BM(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const zM = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, WM = process.env.NODE_ENV !== "production" ? I.exports.oneOfType([I.exports.number, I.exports.string, I.exports.object, I.exports.array]) : {}, an = WM;
function sa(e, t) {
  return t ? Er(e, t, {
    clone: !1
  }) : e;
}
const Jd = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, t0 = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Jd[e]}px)`
};
function on(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || t0;
    return t.reduce((o, s, u) => (o[a.up(a.keys[u])] = r(t[u]), o), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || t0;
    return Object.keys(t).reduce((o, s) => {
      if (Object.keys(a.values || Jd).indexOf(s) !== -1) {
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
function HM(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, i) => {
    const a = e.up(i);
    return n[a] = {}, n;
  }, {})) || {};
}
function qM(e, t) {
  return e.reduce((r, n) => {
    const i = r[n];
    return (!i || Object.keys(i).length === 0) && delete r[n], r;
  }, t);
}
function Qd(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function r0(e, t, r, n = r) {
  let i;
  return typeof e == "function" ? i = e(r) : Array.isArray(e) ? i = e[r] || n : i = Qd(e, r) || n, t && (i = t(i, n)), i;
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
    const s = o[t], u = o.theme, c = Qd(u, n) || {};
    return on(o, s, (f) => {
      let d = r0(c, i, f);
      return f === d && typeof f == "string" && (d = r0(c, i, `${t}${f === "default" ? "" : Xr(f)}`, f)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: an
  } : {}, a.filterProps = [t], a;
}
function sn(...e) {
  const t = e.reduce((n, i) => (i.filterProps.forEach((a) => {
    n[a] = i;
  }), n), {}), r = (n) => Object.keys(n).reduce((i, a) => t[a] ? sa(i, t[a](n)) : i, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, r.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), r;
}
function YM(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const GM = {
  m: "margin",
  p: "padding"
}, KM = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, n0 = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, XM = YM((e) => {
  if (e.length > 2)
    if (n0[e])
      e = n0[e];
    else
      return [e];
  const [t, r] = e.split(""), n = GM[t], i = KM[r] || "";
  return Array.isArray(i) ? i.map((a) => n + a) : [n + i];
}), Qb = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ex = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], eh = [...Qb, ...ex];
function ja(e, t, r, n) {
  var i;
  const a = (i = Qd(e, t, !1)) != null ? i : r;
  return typeof a == "number" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${o}.`), a * o) : Array.isArray(a) ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && (Number.isInteger(o) ? o > a.length - 1 && console.error([`MUI: The value provided (${o}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${o} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[o]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function tx(e) {
  return ja(e, "spacing", 8, "spacing");
}
function Da(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ZM(e, t) {
  return (r) => e.reduce((n, i) => (n[i] = Da(t, r), n), {});
}
function JM(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const i = XM(r), a = ZM(i, n), o = e[r];
  return on(e, o, a);
}
function QM(e, t) {
  const r = tx(e.theme);
  return Object.keys(e).map((n) => JM(e, t, n, r)).reduce(sa, {});
}
process.env.NODE_ENV !== "production" && Qb.reduce((e, t) => (e[t] = an, e), {});
process.env.NODE_ENV !== "production" && ex.reduce((e, t) => (e[t] = an, e), {});
function bu(e) {
  return QM(e, eh);
}
bu.propTypes = process.env.NODE_ENV !== "production" ? eh.reduce((e, t) => (e[t] = an, e), {}) : {};
bu.filterProps = eh;
function Fa(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const eN = oe({
  prop: "border",
  themeKey: "borders",
  transform: Fa
}), tN = oe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Fa
}), rN = oe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Fa
}), nN = oe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Fa
}), iN = oe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Fa
}), aN = oe({
  prop: "borderColor",
  themeKey: "palette"
}), oN = oe({
  prop: "borderTopColor",
  themeKey: "palette"
}), sN = oe({
  prop: "borderRightColor",
  themeKey: "palette"
}), uN = oe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), cN = oe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), th = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ja(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Da(t, n)
    });
    return on(e, e.borderRadius, r);
  }
  return null;
};
th.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: an
} : {};
th.filterProps = ["borderRadius"];
const lN = sn(eN, tN, rN, nN, iN, aN, oN, sN, uN, cN, th), rx = lN, fN = oe({
  prop: "displayPrint",
  cssProperty: !1,
  transform: (e) => ({
    "@media print": {
      display: e
    }
  })
}), dN = oe({
  prop: "display"
}), hN = oe({
  prop: "overflow"
}), pN = oe({
  prop: "textOverflow"
}), vN = oe({
  prop: "visibility"
}), gN = oe({
  prop: "whiteSpace"
}), nx = sn(fN, dN, hN, pN, vN, gN), mN = oe({
  prop: "flexBasis"
}), yN = oe({
  prop: "flexDirection"
}), bN = oe({
  prop: "flexWrap"
}), xN = oe({
  prop: "justifyContent"
}), wN = oe({
  prop: "alignItems"
}), SN = oe({
  prop: "alignContent"
}), AN = oe({
  prop: "order"
}), _N = oe({
  prop: "flex"
}), ON = oe({
  prop: "flexGrow"
}), EN = oe({
  prop: "flexShrink"
}), TN = oe({
  prop: "alignSelf"
}), PN = oe({
  prop: "justifyItems"
}), CN = oe({
  prop: "justifySelf"
}), MN = sn(mN, yN, bN, xN, wN, SN, AN, _N, ON, EN, TN, PN, CN), ix = MN, rh = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ja(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Da(t, n)
    });
    return on(e, e.gap, r);
  }
  return null;
};
rh.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: an
} : {};
rh.filterProps = ["gap"];
const nh = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ja(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Da(t, n)
    });
    return on(e, e.columnGap, r);
  }
  return null;
};
nh.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: an
} : {};
nh.filterProps = ["columnGap"];
const ih = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ja(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Da(t, n)
    });
    return on(e, e.rowGap, r);
  }
  return null;
};
ih.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: an
} : {};
ih.filterProps = ["rowGap"];
const NN = oe({
  prop: "gridColumn"
}), kN = oe({
  prop: "gridRow"
}), RN = oe({
  prop: "gridAutoFlow"
}), IN = oe({
  prop: "gridAutoColumns"
}), $N = oe({
  prop: "gridAutoRows"
}), LN = oe({
  prop: "gridTemplateColumns"
}), jN = oe({
  prop: "gridTemplateRows"
}), DN = oe({
  prop: "gridTemplateAreas"
}), FN = oe({
  prop: "gridArea"
}), VN = sn(rh, nh, ih, NN, kN, RN, IN, $N, LN, jN, DN, FN), ax = VN;
function ah(e, t) {
  return t === "grey" ? t : e;
}
const BN = oe({
  prop: "color",
  themeKey: "palette",
  transform: ah
}), UN = oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ah
}), zN = oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ah
}), WN = sn(BN, UN, zN), ox = WN, HN = oe({
  prop: "position"
}), qN = oe({
  prop: "zIndex",
  themeKey: "zIndex"
}), YN = oe({
  prop: "top"
}), GN = oe({
  prop: "right"
}), KN = oe({
  prop: "bottom"
}), XN = oe({
  prop: "left"
}), sx = sn(HN, qN, YN, GN, KN, XN), ZN = oe({
  prop: "boxShadow",
  themeKey: "shadows"
}), ux = ZN;
function un(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const JN = oe({
  prop: "width",
  transform: un
}), cx = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, i, a;
      return {
        maxWidth: ((n = e.theme) == null || (i = n.breakpoints) == null || (a = i.values) == null ? void 0 : a[r]) || Jd[r] || un(r)
      };
    };
    return on(e, e.maxWidth, t);
  }
  return null;
};
cx.filterProps = ["maxWidth"];
const QN = oe({
  prop: "minWidth",
  transform: un
}), ek = oe({
  prop: "height",
  transform: un
}), tk = oe({
  prop: "maxHeight",
  transform: un
}), rk = oe({
  prop: "minHeight",
  transform: un
});
oe({
  prop: "size",
  cssProperty: "width",
  transform: un
});
oe({
  prop: "size",
  cssProperty: "height",
  transform: un
});
const nk = oe({
  prop: "boxSizing"
}), ik = sn(JN, cx, QN, ek, tk, rk, nk), lx = ik, ak = oe({
  prop: "fontFamily",
  themeKey: "typography"
}), ok = oe({
  prop: "fontSize",
  themeKey: "typography"
}), sk = oe({
  prop: "fontStyle",
  themeKey: "typography"
}), uk = oe({
  prop: "fontWeight",
  themeKey: "typography"
}), ck = oe({
  prop: "letterSpacing"
}), lk = oe({
  prop: "textTransform"
}), fk = oe({
  prop: "lineHeight"
}), dk = oe({
  prop: "textAlign"
}), hk = oe({
  prop: "typography",
  cssProperty: !1,
  themeKey: "typography"
}), pk = sn(hk, ak, ok, sk, uk, ck, fk, dk, lk), fx = pk, i0 = {
  borders: rx.filterProps,
  display: nx.filterProps,
  flexbox: ix.filterProps,
  grid: ax.filterProps,
  positions: sx.filterProps,
  palette: ox.filterProps,
  shadows: ux.filterProps,
  sizing: lx.filterProps,
  spacing: bu.filterProps,
  typography: fx.filterProps
}, dx = {
  borders: rx,
  display: nx,
  flexbox: ix,
  grid: ax,
  positions: sx,
  palette: ox,
  shadows: ux,
  sizing: lx,
  spacing: bu,
  typography: fx
};
Object.keys(i0).reduce((e, t) => (i0[t].forEach((r) => {
  e[r] = dx[t];
}), e), {});
function vk(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function gk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mk(e = dx) {
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
      const l = HM(o.breakpoints), f = Object.keys(l);
      let d = l;
      return Object.keys(c).forEach((p) => {
        const v = gk(c[p], o);
        if (v != null)
          if (typeof v == "object")
            if (t[p])
              d = sa(d, r(p, v, o));
            else {
              const h = on({
                theme: o
              }, v, (g) => ({
                [p]: g
              }));
              vk(h, v) ? d[p] = n({
                sx: v,
                theme: o
              }) : d = sa(d, h);
            }
          else
            d = sa(d, r(p, v, o));
      }), qM(f, d);
    }
    return Array.isArray(a) ? a.map(s) : s(a);
  }
  return n;
}
const hx = mk();
hx.filterProps = ["sx"];
const yk = hx, bk = ["values", "unit", "step"], xk = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => Le({}, r, {
    [n.key]: n.val
  }), {});
};
function wk(e) {
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
  } = e, i = tr(e, bk), a = xk(t), o = Object.keys(a);
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
const Sk = {
  borderRadius: 4
}, Ak = Sk;
function _k(e = 8) {
  if (e.mui)
    return e;
  const t = tx({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const o = t(a);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" "));
  return r.mui = !0, r;
}
const Ok = ["breakpoints", "palette", "spacing", "shape"];
function oh(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: i,
    shape: a = {}
  } = e, o = tr(e, Ok), s = wk(r), u = _k(i);
  let c = Er({
    breakpoints: s,
    direction: "ltr",
    components: {},
    palette: Le({
      mode: "light"
    }, n),
    spacing: u,
    shape: Le({}, Ak, a)
  }, o);
  return c = t.reduce((l, f) => Er(l, f), c), c;
}
const px = /* @__PURE__ */ en.createContext(null);
process.env.NODE_ENV !== "production" && (px.displayName = "ThemeContext");
const Ek = px;
function Tk() {
  const e = en.useContext(Ek);
  return process.env.NODE_ENV !== "production" && en.useDebugValue(e), e;
}
function Pk(e) {
  return Object.keys(e).length === 0;
}
function Ck(e = null) {
  const t = Tk();
  return !t || Pk(t) ? e : t;
}
const Mk = oh();
function Nk(e = Mk) {
  return Ck(e);
}
const kk = ["variant"];
function a0(e) {
  return e.length === 0;
}
function vx(e) {
  const {
    variant: t
  } = e, r = tr(e, kk);
  let n = t || "";
  return Object.keys(r).sort().forEach((i) => {
    i === "color" ? n += a0(n) ? e[i] : Xr(e[i]) : n += `${a0(n) ? i : Xr(i)}${Xr(e[i].toString())}`;
  }), n;
}
const Rk = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], Ik = ["theme"], $k = ["theme"];
function Bi(e) {
  return Object.keys(e).length === 0;
}
function Lk(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const jk = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Dk = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((i) => {
    const a = vx(i.props);
    n[a] = i.style;
  }), n;
}, Fk = (e, t, r, n) => {
  var i, a;
  const {
    ownerState: o = {}
  } = e, s = [], u = r == null || (i = r.components) == null || (a = i[n]) == null ? void 0 : a.variants;
  return u && u.forEach((c) => {
    let l = !0;
    Object.keys(c.props).forEach((f) => {
      o[f] !== c.props[f] && e[f] !== c.props[f] && (l = !1);
    }), l && s.push(t[vx(c.props)]);
  }), s;
};
function Co(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Vk = oh(), Bk = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Uk(e = {}) {
  const {
    defaultTheme: t = Vk,
    rootShouldForwardProp: r = Co,
    slotShouldForwardProp: n = Co,
    styleFunctionSx: i = yk
  } = e, a = (o) => {
    const s = Bi(o.theme) ? t : o.theme;
    return i(Le({}, o, {
      theme: s
    }));
  };
  return a.__mui_systemSx = !0, (o, s = {}) => {
    zM(o, (b) => b.filter((m) => !(m != null && m.__mui_systemSx)));
    const {
      name: u,
      slot: c,
      skipVariantsResolver: l,
      skipSx: f,
      overridesResolver: d
    } = s, p = tr(s, Rk), v = l !== void 0 ? l : c && c !== "Root" || !1, h = f || !1;
    let g;
    process.env.NODE_ENV !== "production" && u && (g = `${u}-${Bk(c || "Root")}`);
    let y = Co;
    c === "Root" ? y = r : c ? y = n : Lk(o) && (y = void 0);
    const w = UM(o, Le({
      shouldForwardProp: y,
      label: g
    }, p)), x = (b, ...m) => {
      const S = m ? m.map((M) => typeof M == "function" && M.__emotion_real !== M ? (C) => {
        let {
          theme: N
        } = C, k = tr(C, Ik);
        return M(Le({
          theme: Bi(N) ? t : N
        }, k));
      } : M) : [];
      let A = b;
      u && d && S.push((M) => {
        const C = Bi(M.theme) ? t : M.theme, N = jk(u, C);
        if (N) {
          const k = {};
          return Object.entries(N).forEach(([D, j]) => {
            k[D] = typeof j == "function" ? j(Le({}, M, {
              theme: C
            })) : j;
          }), d(M, k);
        }
        return null;
      }), u && !v && S.push((M) => {
        const C = Bi(M.theme) ? t : M.theme;
        return Fk(M, Dk(u, C), C, u);
      }), h || S.push(a);
      const O = S.length - m.length;
      if (Array.isArray(b) && O > 0) {
        const M = new Array(O).fill("");
        A = [...b, ...M], A.raw = [...b.raw, ...M];
      } else
        typeof b == "function" && b.__emotion_real !== b && (A = (M) => {
          let {
            theme: C
          } = M, N = tr(M, $k);
          return b(Le({
            theme: Bi(C) ? t : C
          }, N));
        });
      const E = w(A, ...S);
      if (process.env.NODE_ENV !== "production") {
        let M;
        u && (M = `${u}${c || ""}`), M === void 0 && (M = `Styled(${MC(o)})`), E.displayName = M;
      }
      return E;
    };
    return w.withConfig && (x.withConfig = w.withConfig), x;
  };
}
function zk(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : NC(t.components[r].defaultProps, n);
}
function Wk({
  props: e,
  name: t,
  defaultTheme: r
}) {
  const n = Nk(r);
  return zk({
    theme: n,
    name: t,
    props: e
  });
}
function gx(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function Hk(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function li(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return li(Hk(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ui(9, e));
  let n = e.substring(t + 1, e.length - 1), i;
  if (r === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ui(10, i));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: i
  };
}
function sh(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((i, a) => a < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function qk(e) {
  e = li(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, i = t[2] / 100, a = n * Math.min(i, 1 - i), o = (c, l = (c + r / 30) % 12) => i - a * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let s = "rgb";
  const u = [Math.round(o(0) * 255), Math.round(o(8) * 255), Math.round(o(4) * 255)];
  return e.type === "hsla" && (s += "a", u.push(t[3])), sh({
    type: s,
    values: u
  });
}
function o0(e) {
  e = li(e);
  let t = e.type === "hsl" || e.type === "hsla" ? li(qk(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function s0(e, t) {
  const r = o0(e), n = o0(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Yk(e, t) {
  if (e = li(e), t = gx(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return sh(e);
}
function Gk(e, t) {
  if (e = li(e), t = gx(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return sh(e);
}
function Kk(e, t) {
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
const Xk = {
  black: "#000",
  white: "#fff"
}, xa = Xk, Zk = {
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
}, Jk = Zk, Qk = {
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
}, Fn = Qk, eR = {
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
}, Vn = eR, tR = {
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
}, Ui = tR, rR = {
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
}, Bn = rR, nR = {
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
}, Un = nR, iR = {
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
}, zn = iR, aR = ["mode", "contrastThreshold", "tonalOffset"], u0 = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: xa.white,
    default: xa.white
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
}, wc = {
  text: {
    primary: xa.white,
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
    active: xa.white,
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
function c0(e, t, r, n) {
  const i = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Gk(e.main, i) : t === "dark" && (e.dark = Yk(e.main, a)));
}
function oR(e = "light") {
  return e === "dark" ? {
    main: Bn[200],
    light: Bn[50],
    dark: Bn[400]
  } : {
    main: Bn[700],
    light: Bn[400],
    dark: Bn[800]
  };
}
function sR(e = "light") {
  return e === "dark" ? {
    main: Fn[200],
    light: Fn[50],
    dark: Fn[400]
  } : {
    main: Fn[500],
    light: Fn[300],
    dark: Fn[700]
  };
}
function uR(e = "light") {
  return e === "dark" ? {
    main: Vn[500],
    light: Vn[300],
    dark: Vn[700]
  } : {
    main: Vn[700],
    light: Vn[400],
    dark: Vn[800]
  };
}
function cR(e = "light") {
  return e === "dark" ? {
    main: Un[400],
    light: Un[300],
    dark: Un[700]
  } : {
    main: Un[700],
    light: Un[500],
    dark: Un[900]
  };
}
function lR(e = "light") {
  return e === "dark" ? {
    main: zn[400],
    light: zn[300],
    dark: zn[700]
  } : {
    main: zn[800],
    light: zn[500],
    dark: zn[900]
  };
}
function fR(e = "light") {
  return e === "dark" ? {
    main: Ui[400],
    light: Ui[300],
    dark: Ui[700]
  } : {
    main: "#ed6c02",
    light: Ui[500],
    dark: Ui[900]
  };
}
function dR(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, i = tr(e, aR), a = e.primary || oR(t), o = e.secondary || sR(t), s = e.error || uR(t), u = e.info || cR(t), c = e.success || lR(t), l = e.warning || fR(t);
  function f(h) {
    const g = s0(h, wc.text.primary) >= r ? wc.text.primary : u0.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const y = s0(h, g);
      y < 3 && console.error([`MUI: The contrast ratio of ${y}:1 for ${g} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const d = ({
    color: h,
    name: g,
    mainShade: y = 500,
    lightShade: w = 300,
    darkShade: x = 700
  }) => {
    if (h = Le({}, h), !h.main && h[y] && (h.main = h[y]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${y}\` property.` : ui(11, g ? ` (${g})` : "", y));
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
} });` : ui(12, g ? ` (${g})` : "", JSON.stringify(h.main)));
    return c0(h, "light", w, n), c0(h, "dark", x, n), h.contrastText || (h.contrastText = f(h.main)), h;
  }, p = {
    dark: wc,
    light: u0
  };
  return process.env.NODE_ENV !== "production" && (p[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Er(Le({
    common: Le({}, xa),
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
    grey: Jk,
    contrastThreshold: r,
    getContrastText: f,
    augmentColor: d,
    tonalOffset: n
  }, p[t]), i);
}
const hR = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function pR(e) {
  return Math.round(e * 1e5) / 1e5;
}
const l0 = {
  textTransform: "uppercase"
}, f0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function vR(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = f0,
    fontSize: i = 14,
    fontWeightLight: a = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    htmlFontSize: c = 16,
    allVariants: l,
    pxToRem: f
  } = r, d = tr(r, hR);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const p = i / 14, v = f || ((y) => `${y / c * p}rem`), h = (y, w, x, b, m) => Le({
    fontFamily: n,
    fontWeight: y,
    fontSize: v(w),
    lineHeight: x
  }, n === f0 ? {
    letterSpacing: `${pR(b / w)}em`
  } : {}, m, l), g = {
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
    button: h(s, 14, 1.75, 0.4, l0),
    caption: h(o, 12, 1.66, 0.4),
    overline: h(o, 12, 2.66, 1, l0)
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
const gR = 0.2, mR = 0.14, yR = 0.12;
function He(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${gR})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${mR})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yR})`].join(",");
}
const bR = ["none", He(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), He(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), He(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), He(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), He(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), He(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), He(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), He(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), He(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), He(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), He(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), He(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), He(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), He(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), He(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), He(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), He(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), He(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), He(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), He(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), He(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), He(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), He(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), He(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], xR = bR, wR = ["duration", "easing", "delay"], SR = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, AR = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function d0(e) {
  return `${Math.round(e)}ms`;
}
function _R(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function OR(e) {
  const t = Le({}, SR, e.easing), r = Le({}, AR, e.duration);
  return Le({
    getAutoHeightDuration: _R,
    create: (i = ["all"], a = {}) => {
      const {
        duration: o = r.standard,
        easing: s = t.easeInOut,
        delay: u = 0
      } = a, c = tr(a, wR);
      if (process.env.NODE_ENV !== "production") {
        const l = (d) => typeof d == "string", f = (d) => !isNaN(parseFloat(d));
        !l(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(o) && !l(o) && console.error(`MUI: Argument "duration" must be a number or a string but found ${o}.`), l(s) || console.error('MUI: Argument "easing" must be a string.'), !f(u) && !l(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((l) => `${l} ${typeof o == "string" ? o : d0(o)} ${s} ${typeof u == "string" ? u : d0(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const ER = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, TR = ER, PR = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function CR(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: i = {},
    typography: a = {}
  } = e, o = tr(e, PR);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ui(18));
  const s = dR(n), u = oh(e);
  let c = Er(u, {
    mixins: Kk(u.breakpoints, r),
    palette: s,
    shadows: xR.slice(),
    typography: vR(s, a),
    transitions: OR(i),
    zIndex: Le({}, TR)
  });
  if (c = Er(c, o), c = t.reduce((l, f) => Er(l, f), c), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (d, p) => {
      let v;
      for (v in d) {
        const h = d[v];
        if (l.indexOf(v) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = zd("", v);
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
const MR = CR(), mx = MR;
function NR({
  props: e,
  name: t
}) {
  return Wk({
    props: e,
    name: t,
    defaultTheme: mx
  });
}
const kR = (e) => Co(e) && e !== "classes", RR = Uk({
  defaultTheme: mx,
  rootShouldForwardProp: kR
}), IR = RR;
function $R(e) {
  return zd("MuiSvgIcon", e);
}
jC("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const LR = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], jR = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, i = {
    root: ["root", t !== "inherit" && `color${Xr(t)}`, `fontSize${Xr(r)}`]
  };
  return kC(i, $R, n);
}, DR = IR("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Xr(r.color)}`], t[`fontSize${Xr(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, i, a, o, s, u, c, l, f, d, p, v, h, g, y, w;
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
      disabled: (y = (e.vars || e).palette) == null || (w = y.action) == null ? void 0 : w.disabled,
      inherit: void 0
    }[t.color]
  };
}), uh = /* @__PURE__ */ en.forwardRef(function(t, r) {
  const n = NR({
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
  } = n, p = tr(n, LR), v = Le({}, n, {
    color: o,
    component: s,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: l,
    viewBox: d
  }), h = {};
  l || (h.viewBox = d);
  const g = jR(v);
  return /* @__PURE__ */ V(DR, Le({
    as: s,
    className: DC(g.root, a),
    focusable: "false",
    color: c,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r
  }, h, p, {
    ownerState: v,
    children: [i, f ? /* @__PURE__ */ _("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (uh.propTypes = {
  children: I.exports.node,
  classes: I.exports.object,
  className: I.exports.string,
  color: I.exports.oneOfType([I.exports.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), I.exports.string]),
  component: I.exports.elementType,
  fontSize: I.exports.oneOfType([I.exports.oneOf(["inherit", "large", "medium", "small"]), I.exports.string]),
  htmlColor: I.exports.string,
  inheritViewBox: I.exports.bool,
  shapeRendering: I.exports.string,
  sx: I.exports.oneOfType([I.exports.arrayOf(I.exports.oneOfType([I.exports.func, I.exports.object, I.exports.bool])), I.exports.func, I.exports.object]),
  titleAccess: I.exports.string,
  viewBox: I.exports.string
});
uh.muiName = "SvgIcon";
const h0 = uh;
function FR(e, t) {
  function r(n, i) {
    return /* @__PURE__ */ _(h0, Le({
      "data-testid": `${t}Icon`,
      ref: i
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = h0.muiName, /* @__PURE__ */ en.memo(/* @__PURE__ */ en.forwardRef(r));
}
const VR = FR(/* @__PURE__ */ _("path", {
  d: "M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4-1.73.83-2.99 2.45-3.32 4.4zM6.91 11c-.33-1.95-1.59-3.57-3.32-4.4-.83 1.29-1.38 2.79-1.54 4.4h4.86zm8.16 0c.32-2.59 1.88-4.79 4.06-6-1.6-1.63-3.74-2.71-6.13-2.95V11h2.07zm-6.14 0H11V2.05C8.61 2.29 6.46 3.37 4.87 5c2.18 1.21 3.74 3.41 4.06 6zm6.14 2H13v8.95c2.39-.24 4.54-1.32 6.13-2.95-2.18-1.21-3.74-3.41-4.06-6zM3.59 17.4c1.72-.83 2.99-2.46 3.32-4.4H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4c.33 1.95 1.59 3.57 3.32 4.4.83-1.29 1.38-2.79 1.54-4.4h-4.86zm-8.16 0c-.32 2.59-1.88 4.79-4.06 6 1.6 1.63 3.74 2.71 6.13 2.95V13H8.93z"
}), "SportsBasketball"), BR = [], UR = {}, zR = ["grid", "p-4"], WR = {}, yx = (e) => /* @__PURE__ */ _(dt, {
  viusage: e.viusage || "wrap",
  emphasis: 400,
  classNames: [...e.overrideClasses ? [] : BR, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : UR,
    ...e.style
  },
  children: /* @__PURE__ */ _("div", {
    className: [...e.overrideClasses ? [] : zR, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : WR,
      ...e.style
    },
    children: /* @__PURE__ */ _(OC, {
      Left: /* @__PURE__ */ V("div", {
        className: "flex hover-underline",
        style: {
          alignContent: "center",
          alignItems: "center"
        },
        children: [/* @__PURE__ */ _(VR, {}), "\u2003Men's College Basketball"]
      }),
      Right: /* @__PURE__ */ _(xC, {})
    })
  })
});
var Mo = { exports: {} }, bx = { exports: {} }, No = 1;
function HR() {
  return No = (No * 9301 + 49297) % 233280, No / 233280;
}
function qR(e) {
  No = e;
}
var YR = {
  nextValue: HR,
  seed: qR
}, Tl = YR, Sn = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-", qr, p0, Zi;
function Pl() {
  Zi = !1;
}
function xx(e) {
  if (!e) {
    qr !== Sn && (qr = Sn, Pl());
    return;
  }
  if (e !== qr) {
    if (e.length !== Sn.length)
      throw new Error("Custom alphabet for shortid must be " + Sn.length + " unique characters. You submitted " + e.length + " characters: " + e);
    var t = e.split("").filter(function(r, n, i) {
      return n !== i.lastIndexOf(r);
    });
    if (t.length)
      throw new Error("Custom alphabet for shortid must be " + Sn.length + " unique characters. These characters were not unique: " + t.join(", "));
    qr = e, Pl();
  }
}
function GR(e) {
  return xx(e), qr;
}
function KR(e) {
  Tl.seed(e), p0 !== e && (Pl(), p0 = e);
}
function XR() {
  qr || xx(Sn);
  for (var e = qr.split(""), t = [], r = Tl.nextValue(), n; e.length > 0; )
    r = Tl.nextValue(), n = Math.floor(r * e.length), t.push(e.splice(n, 1)[0]);
  return t.join("");
}
function wx() {
  return Zi || (Zi = XR(), Zi);
}
function ZR(e) {
  var t = wx();
  return t[e];
}
function JR() {
  return qr || Sn;
}
var ch = {
  get: JR,
  characters: GR,
  seed: KR,
  lookup: ZR,
  shuffled: wx
}, Sc = typeof window == "object" && (window.crypto || window.msCrypto), Cl;
!Sc || !Sc.getRandomValues ? Cl = function(e) {
  for (var t = [], r = 0; r < e; r++)
    t.push(Math.floor(Math.random() * 256));
  return t;
} : Cl = function(e) {
  return Sc.getRandomValues(new Uint8Array(e));
};
var QR = Cl, eI = function(e, t, r) {
  for (var n = (2 << Math.log(t.length - 1) / Math.LN2) - 1, i = -~(1.6 * n * r / t.length), a = ""; ; )
    for (var o = e(i), s = i; s--; )
      if (a += t[o[s] & n] || "", a.length === +r)
        return a;
}, tI = ch, rI = QR, nI = eI;
function iI(e) {
  for (var t = 0, r, n = ""; !r; )
    n = n + nI(rI, tI.get(), 1), r = e < Math.pow(16, t + 1), t++;
  return n;
}
var aI = iI, co = aI, oI = 1567752802062, sI = 7, lo, v0;
function uI(e) {
  var t = "", r = Math.floor((Date.now() - oI) * 1e-3);
  return r === v0 ? lo++ : (lo = 0, v0 = r), t = t + co(sI), t = t + co(e), lo > 0 && (t = t + co(lo)), t = t + co(r), t;
}
var cI = uI, lI = ch;
function fI(e) {
  if (!e || typeof e != "string" || e.length < 6)
    return !1;
  var t = new RegExp("[^" + lI.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]");
  return !t.test(e);
}
var dI = fI;
(function(e) {
  var t = ch, r = cI, n = dI, i = 0;
  function a(c) {
    return t.seed(c), e.exports;
  }
  function o(c) {
    return i = c, e.exports;
  }
  function s(c) {
    return c !== void 0 && t.characters(c), t.shuffled();
  }
  function u() {
    return r(i);
  }
  e.exports = u, e.exports.generate = u, e.exports.seed = a, e.exports.worker = o, e.exports.characters = s, e.exports.isValid = n;
})(bx);
(function(e) {
  e.exports = bx.exports;
})(Mo);
const hI = [], pI = {}, vI = (e, t) => e.data.sort((r, n) => {
  let i = 0;
  for (const [a, o] of Object.entries(t))
    i += o * (e.compare[a] ? e.compare[a](r[a], n[a]) : Number.isFinite(r[a]) && Number.isFinite(n[a]) ? Number.parseFloat(r[a]) - n[a] : 0);
  return i;
}), gI = (e) => {
  let t = /* @__PURE__ */ new Set();
  for (const r of e.data)
    for (const n of Object.keys(r))
      t.add(n);
  return [...t.values()].sort();
}, mI = (e) => {
  Jn([]), Jn([]);
  const [t, r] = Jn({}), n = gI(e.table), i = vI(e.table, t);
  return /* @__PURE__ */ V("table", {
    className: [...e.overrideClasses ? [] : hI, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : pI,
      ...e.style
    },
    children: [/* @__PURE__ */ _("thead", {
      children: /* @__PURE__ */ _("tr", {
        className: "bg-white-100",
        children: n.map((a) => {
          let o;
          return t[a] > 0 ? o = /* @__PURE__ */ _(X2, {}) : t[a] < 0 ? o = /* @__PURE__ */ _(eP, {}) : o = /* @__PURE__ */ _(uP, {}), /* @__PURE__ */ _("th", {
            scope: "col p-2",
            children: /* @__PURE__ */ V("div", {
              className: "flex gap-2 items-center content-center text-sm font-medium text-gray-900 px-6 py-4 text-left",
              children: [a, /* @__PURE__ */ _("span", {
                onClick: () => {
                  t[a] > 0 ? r({
                    ...t,
                    [a]: -1
                  }) : t[a] < 0 ? r({
                    ...t,
                    [a]: 0
                  }) : r({
                    ...t,
                    [a]: 1
                  });
                },
                className: "cursor-pointer gcr",
                children: o
              })]
            })
          }, Mo.exports.generate());
        })
      })
    }), /* @__PURE__ */ _("tbody", {
      children: i.map((a) => /* @__PURE__ */ _("tr", {
        className: "bg-drk-gray-300 odd:bg-drk-gray-100 cursor-pointer gcr",
        children: n.map((o, s) => /* @__PURE__ */ _("td", {
          className: "p-2",
          children: e.table.toReact[o] ? e.table.toReact[o](a[o]) : a[o]
        }, Mo.exports.generate()))
      }, Mo.exports.generate()))
    })]
  });
}, yI = [], bI = {}, xI = (e) => /* @__PURE__ */ _("div", {
  className: [...e.overrideClasses ? [] : yI, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : bI,
    ...e.style
  },
  children: /* @__PURE__ */ _(mI, {
    table: {
      head: [],
      data: [],
      toReact: {},
      compare: {}
    }
  })
}), wI = ["font-bold", "rounded-full", "flex", "items-center", "justify-items-center", "text-xl"], SI = {}, lh = (e) => /* @__PURE__ */ _("div", {
  className: [...e.overrideClasses ? [] : wI, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : SI,
    ...e.style
  },
  children: "VS"
}), AI = ["rounded-lg", "border-gdg-500", "border-dashed", "border-2", "text-gdg-500", "grid", "cursor-pointer"], _I = {
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center"
}, OI = ["text-gdg-500", "grid"], EI = {
  alignItems: "center"
}, g0 = (e) => /* @__PURE__ */ _(dt, {
  viusage: "wrap",
  hoverAnimate: !0,
  classNames: [...e.overrideClasses ? [] : AI, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : _I,
    ...e.style
  },
  children: /* @__PURE__ */ _("div", {
    className: [...e.overrideClasses ? [] : OI, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : EI,
      ...e.style
    },
    children: "Pick Team"
  })
}), TI = ["rounded-lg", "p-4"], PI = {}, CI = ["grid", "gap-4"], MI = {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 9fr"
}, NI = (e) => /* @__PURE__ */ _(dt, {
  viusage: "wrap",
  classNames: [...e.overrideClasses ? [] : TI, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : PI,
    ...e.style
  },
  children: /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : CI, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : MI,
      ...e.style
    },
    children: [/* @__PURE__ */ V("div", {
      children: [/* @__PURE__ */ _("h2", {
        className: "text-lg",
        style: {
          textAlign: "start"
        },
        children: "Team Matchup Projection"
      }), /* @__PURE__ */ _("hr", {})]
    }), /* @__PURE__ */ V("div", {
      className: "grid",
      style: {
        gridTemplateColumns: "2fr 1fr 2fr",
        gridTemplateRows: "1fr",
        alignContent: "center",
        alignItems: "center",
        justifyItems: "center"
      },
      children: [/* @__PURE__ */ _(g0, {
        style: {
          height: "100%",
          width: "100%"
        }
      }), /* @__PURE__ */ _("div", {
        children: /* @__PURE__ */ _(lh, {
          style: {
            fontSize: "18px",
            height: "60px",
            width: "60px"
          },
          classNames: ["p-4", "bg-gdg-500", "rounded-full", "text-black-500", "grid", "justify-center", "content-center"]
        })
      }), /* @__PURE__ */ _(g0, {
        style: {
          height: "100%",
          width: "100%"
        }
      })]
    })]
  })
}), Ai = {
  TeamID: -1,
  GlobalTeamID: -1,
  Key: "mock",
  Name: "Colorado State Rams",
  ShortDisplayName: "Colorado St.",
  Active: !0,
  School: "Colorado State",
  TeamLogoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAIABJREFUeNrtXQd4VOXSnvRGKiEkBJJACqEE6R0EpDcRAaUoxUaRooAUCx0FRAWR4hWRpjRBeu/SCb0ltJACJJAE0jv/vLN7lt1kk+yGgHj/Oz6HNVvPmfm+mXfqIfof/aNk8m84ySdPnljxgxcf5fhw5aMkHzZ8WOJlPpL4eKx+TOAjgo/bJiYmWf8TgPHMtueH+nw05KMGH0F8+PBhauRXZfBxg48QPi7xcZCPoyyU1P8JIC/TK/JDVz7a8dGAD3Pt17OzMijp8V1KSrhPGWmJlJWZRpmZqfyYgs+SuYUNWfBhbsmPlrZk5+BODk6e8nwuSuPjGB/7+PiThXH1/60AmHFQJe+qj1c0zM7OpNjoaxQTdZHiokMp8VEkpSQ9EEYbe2k2di5kz4JwLuVHpT2rkatHZRaKtfabTvGxjI9VLIyH/y8EwIwEsz/l4221DqfUlDgKv36I7t05LczHis9NWcz/2PQcSub/ScvGQfIIsjEzIWszIit+LGFuQiWtTMlMz5WZmpqTS+kA8vCqSV7+zcjO3k1bXa3l42sWxOX/SgEw42vzw0Q+OqjUSjpF3jpGd0L3U3TkeX4956meYMbeSMyW435qDkWn5Qjzc7Q2gYO1NTna2JKVuTklpadRfEoKpWepbC6Y78pCKG1jSu58+NmbkW8JMxGQ5sJNTHhHVCGfii2onG8jRV3hFzbwMY1fP/NfIQBmPAzoDD56yFJLT6IbF7dS6MVNos8VupuSQ8FxmRSSkE3hydkEjVPZ05tqlA+g8qXLkb9HOfJzL0dlnEuRFet6E1OzPL8F9ZWcyt8fHUV3oiMo9H4khd4NoxPXL1F8chJ5sxACHcyopouFCEYhC0s78gvqQAHVOpOVtYPy9Do+PmFBRP4rBcCMh3oZy8c4PqzT0xIo5NwGunl5O2VmpMh7EjKf0OnYTDr5MIsiU7LJ3dGJ2rzSgBpXqkGNA6uTs0PJYjqXHAqJuEF/XztLBy+fpv1XzpGnjQnVdTWnWiUtRG2BYB98K7elitW7krWtE6lhLXbtnOcFaU2eE/Nr8cNSPqrg4m9d2UkXTyyX1Q96yOpk990MOvEwkywtLKld9QbUo2FralKlDuvppyv7YeIjuhR+g65G3qLr9yL473h6mPBIno/lx+T0VLI0tyAr/g4rfrS04JXt5Eq+7mXJl3cNHgM9y/Pu8dI5v9jHsfTXyb209uhuuszf3aCUBbX0sCQXS1P1jrClqnV7k1/VDqyq5LmLfPRlIZx9qQXAjMfZfsbHZFxHXMx1Cj60gOIf3JDXoct3RGWIqnGxc6CBrbtSvxZdqISNvUqF5GTT4atnaff547JaQ6PusFJ+8sznVcalFDVn4TYPqkNNK9UkB9sSmtcu3LpMP2xdSbsunKQ6Jc2pbRlLMeIgZ9cKVLPpICpZGiiZ0gEeWAjzX0oBMPOd+WE5jCxW/eVTf9DVM2tl+2ew9dzBK37fvQxydXCmoW17UO9mncjaUoXTr0Xdpt/2b6LNpw9RLK/u50kWZubUoVYTGsCCr+tfVfN8SOQNmrNlBW0J/pta8W7AYW6qMtaBNbpR1Tq9FLuzho8P+PmEl0YAzHx/ftjKh39qciwd3zObHty9pFph8Vm0LjydErNM6IMWnWlkl/5kZ20nr+2/dIp+3PYHHQ05/4/4IlW9/EQQ3Ru2EsGIYxB6jsaumEsxsRHUw9uKKjmqni/FiKl+q1HsW4hdusZHWxbCnX9cAMx8hAw2IT4DOHl8zyxKT02gTEaV68LT6EhMJtX3q0Qz+oygiuX85DPHQy/S9PW/0Mnrl16KcIAvo6tJbw2iltXqqdFUFv26Zx3N2LiMajs9oS5eVgQ7bWXjSPVbjqLSZcVvjFIL4dI/JgBmfis1brYLv36QTu6bQzk5WaLrF99I5Uei0Z160fBOfcWYRT+Kpclrf6b1x/cWi24vbmoRVFcEoRjtW/fC6IMFk8UbH+BnLb4FnLm6r40gL7+meEscH51YCEeL+ptmz8j8zXBEQ89vZGM7X/T9xUdZ9FNIKlnbONGyoZOoe6P2okf/PL6H+sz5nM7evvbSRiZvx0TRioNbycbSimr7ViYXe2d6u1EbCot9SD8HXyMvOzM20Lz0bx8jSyt7Ns4BMGI9J06ceHDSpEkRL0wAzPwmCvMvnVxBF/kAHXuQSUtvpVEQ69aNY3+gAE9fSkxNpqGLZ9D3m1dQembGSx/6zuFFdPByMF24EyrIqYSNHbWq3ohKOzjRzINHZRd4sBN3PzwYFprcylS14I91YSFsZSE8eO4CYOZX4oddfDiGnP+LLqmZv4tRDoxts8rVaeWIGeRo58he6B3qPns06/wL9G+jW9GR7Cvsp5oVKpGnixsF+VSkKp4+NGPfQbIwzSEf9qof3L1IltaandCZhbCOhZDw3ATAzAcEOABoHRayj84eXijP72Tmb45Mp651mtJ/Bk8iK0tr2nPhOPX8fpzo/X8rYfdCdQZ4elOAhzf58tEwoCp9u+8AmT7JovIshOiIM+TgVJYcXbwRw2jDQljOQsgodgEw883UBrfW/fAzgnag84+y2vmTV37HGg1owcAJZMZwbt2x3fTRomn/CpVTGGXn5NDW4MPizEG1epZ0Z1RXmb7evZucLXklsjq6e+cUubpXJjuH0qX4Iz4sgD+LXQAsWcREBiA2f3DLBEmKAOMvY53fMKAKLRk6lczNLYT5w36dyWgoR+fzLiUcxQOFgUvNSH/pGG1nbUPl3TyZ0W7kau8kKC0lPU1ZfLTr3DGyt7EV4wwhVPb0oul79rFhNiVXFsQ9tgne/s3IwtImiFl1j4UQXGwwlE+gMVQPQ0yz/X+Nl5j9vdQcmnU5hfzLeNNfY34ge1t7VjsnqO+PX0pIIcjLnzrXbSZBNcRjwHhNuDkznXVsFPsBF+kAGzw4ZC96t1jz+bSqVp9aV29A9dgj9nL1yPOeBwnxdILPcfuZI7wLDvF5Z9Dnb75PQ9v3lNdXHdxEY1fOpTFVbKmUtSkb5CB6tfMUQG6kPesx+rv4zAJg5sPAwIr6nTu6mAA5EVoA85OfWNGeCQvJy60sXb8XTu2mDqFavpVozBsDqGb5QIOZ8TgliTac2Ec/7/5TjN/zpLIlS9NHrbtJ8M9RKyZUGMUlPaZf9myghbvW0g/9R1PnOs3k+TFLZ9G+07tpZGVbCV1Urv22hC2Y4N7XLiyKam6I9gHzH9y7zMzfJE+sCUuXHbB44CfCfKze8St/pJ8+GEdtqjc0milgRL/mnendVzvSxlMH2EteTBEP7xcr410ZRo7p0p96Nm5L5mbmRn8eKvSzLv3EL/j893n0CqMi71IeNLnnUAq+dY3Wh0dRDx9ruhq8hsp41yEXN3+4y0MQyi6yDeDVj2W8LCcn2+zI9imUnvqYzsZlCeJ5r1kHGtiut7zv9M3L9A4zr5p3wLPFRRhXVypbnvo26yQJmeBbVxiXP5vHbML/4dyWDZtKdf2qsidr+kzf52hnT6/XbS4BxHKu7iLMxpWq08xd28nd+gm5WZvQo9jbVL5SK1xPQ7YHS9keJOX3fYWdzXcIIIZe2EiP48IlVYj4jlfJUvQlu+wK1Q+oRqUcnItttSK+P67rANo6/ke9utlQcrZzoBUjptGsdz8hBxu7Yjs/MxZig4qaOgKq4O5NY7u8S2vvpEsMDGF45ECYAE2/LdIO4NX/Kj9MS0l6SMd2zZAYz6bIDLr2OJvmvTeaKpb1e+6GEskVRCov3rlOdx7cM+qz2EnrP/uOqhthi56FXuHf+evUYTbcjyjAwZxi71+TXWBublWVd8EG3gXRxu6AyRJ3PfunQM67rPMPRGdQ22p1qFWNpi8MrTjxll8xYroIwlDCjtw4do6oiBdFZqbmNKPPcNp7P5Ni0nIk+4cUrBrojDdKBalDzE3TUuLp9tXd8tw21vumJqZsdIa8cIyOWP3cAWOoT9MOhb4XquH3EV8Xq8oxlGr5V6PXazel7VEqSI38tzoN2415GmDMDhiFfyDB7OwMKQ05z05Xt3rNGPWU+0ccJRho6PLX1fBPrxrwCaAVw6eRrZX1MwfkElKTi+QwDu/Yh84yr5D3RvHB9YtbFFU/1iAYypLyRGAJkrt5ZYcq0HYvQxgwtH2vQk8gKjaG9l48IaUgSKbfjX8gFwKmeLFKqMNIpHOdVwWRFEUIP74/lu4/ihUHSZs8nF2Z+dPJzsqmSEw/c+sqrTm6m45cOyu+SLbakwdEDmBnE0G5VyvXkooNFALkR/6eFaTIYHfkKerJsPT6hc1UsXoXtgXWvZi3I/ka4gvzA96DxCJuHBbdH5eRI6UjnWo2It8y5fX+KKoT/jy2h1Yf2ckXck1vsgW+QnxSAp0PC2WHZj07bJVpWq+PqbpPRaMYhYuf3fdTavxFf53ngdGLgsSQAxi7Yo6EoPNzEk/duCzHol3rRCCAofBbKpetoPczIzr0pjZTj1IHTyuGQYkUdesYeQc0RygAtVGLChPAO/gH0U7QqYdZUpGGH8xND9lVX8Te67IDm+VEjaHgm1eow7ShNJbh5tB2bxv1WT8PLzGw2s5ay2r1jWb+plMHacSSmZqYj6FeO64XR/OqdejTTu/wrq6i854qPoG8sPx54YZTC3dL5uV+CEDh7aJ8Yai6nmds4qMounB8qTz3x+00crZ3ocm9hooKUFb891tW0KBF0+jkjUsanZuZbVztEoJch6+coRgWJPKxyvcbQojV34t/Wk/7Rbf3BSQYSkv2baRPfptFmVnG11vBqy5XsrSowsV7N0iWr0o5XwniKZTJO37DmRPU2M2SUhJjqAJDUgtL23IMSVcwJI3PbwegRJzuhB6QP+4kZ0t+d0SL15QCJTlh1O3U8a1CfaZ2kFJBMA7MhDCG/OdrioyNNuqCsJoszc1pas+PDf5MbgMZx+rNUBW06u8dEjoxNi/tXMKBfh74JTWpVPMpo3nRIbB44144lXYsKbAZ9Hq9FvTl6oVSclnGlqT4uGL1N7DCupGqVFMvCmqLf+5HqOpSg2NVq6Nb/ZZPISEzqgvrQCSwkSlSVi0e6/kHCVIpCiHQ9dOO1Qa9F/bk5n3dFOy52yEGfRaR15FLvytSUcDIzu/qMF+ByBXZSKPWSGG++C8lnKhlUG0pQgOh8ltNLfTCUF7BqNWukZmeTPEPbspzIQlZVM65JPl5+hp8ktXLV6Si0tR1/6EtwYcLfR/C3hlZmTrPIVxcGIVEhdGHC6dIuLwo5Fu6rFHvb8Y2AsXGIK2y+8bqutk8OwDOl0nM3YuS6UrKeiLbp1FgdaN+NOJhdJEFADU29JevC62cmL9zTZ7nNohNyD8njtj+O3M/lzRjUcnYcEjjwBpS6Y0YmjSe3JeGHFtStWDpFQDFRKkS6NdZctikiPQZQ1idz0LQ7e/M+TyPilFoxaGtgqD0qaVRrFr0JXaS0lKo9w/jKfwZQ9zGXlsFDx/ycHSWPgdQ9F2N79JMnxEWTivq56b6Qw21on6G0PoTewt8vYS1DU3oMUicMiQ3oJPzwNvER9T929E0u99IgZyPkxOlTAS1owcun873u/dePEn1xvYRnI4slwcDBMDGb9b/Kp/XRyXtHaUYC+Unszcuo4vh1/P9fvw2dpIx/gZCIzfDj1JVJ3NpuVJTVX0CQDciJTxSZaTuM/opYWVFHiXLGPxj8E6BBgqiIYz533lVFdOBEBqMf1fv++BB9/x+rNGrFNAQDhMOQ6hP047UrYEq0IeKuEbj++b73ixGPKvY2TTGbwko40ObQv6W/098HKU8XVFHBalbQ93RRKF0rUSn5pCfe1mjsPmKQ9sKfY9PqacCNTczo3+aTE1N9J5bQRDWGArwKCfRURBC+2jNgqzVpfyaHeAjEopXrf4Mfv8j/qele1mjdLc2ElFq8suX9pRqiHtxD+jM7at06EowvVFPhcRO69HlL5ou3rmh+X9k9iow0oFX7eVaWmzgfXb2UFiGWBH+hm2COjM0+4fCX/S3oZ/QjL8h8dFdcnItj4AVClDDFAEIp5MTVQjmAUsMP4Z8r6F0gHU5XHrUziC80KJqXb2751Hy074wlLD803RQS68jtnN0+lL9Qca4GFq4cy39Z896qZIwVAA+LNBsdYenm7UpJSXcgwDwUnltAbiKV6fu3UrJUjkpLiXsDb4QdLbAMUOJCpw1NFwgKopqAld7Z/qw1ZsSSVScFawoGE2FSjuVlLqcu3yh4cWckNdejW6OLhTFnrryG/Bkv9u8nL7uPYzs1TmE6MexNG/bKlnpFuYW0sjRq3F7mtJziKjNQ1fO0Jg3+huWyzC3EluarOYp/Cw12WurICdtAaSr+0GdjEhqgKHwGVDgtPLwNhq3cq7O67vPH6NPOr1DH7MBw2oawnhfglGmpjSt11BJxCs7ZiNjehR3FVetECKoP30wnjrVfprJQ8nhsMUzxSnDYkFUtluDlsLc4fzbMY/jNO/9mxfXqeuXaO2ob6WWaPHev8QRLCgsrU1ONraUnp2mjhFpJiU4aAvAVqx8pupNqeoGaGNi66H37gjky8rOptavNJBgVYRWTAjfiJWGQxeFdNBEWtPYjqBgCjAynlUVwsTFQYCZCvPTMzN5FZvSm/VbSmgctUhwAMF0HHqTJrzq+7foolpo7CSC+WExdyVPYAihoi4tR8XbrKcCsNd2xCy1d0CG2lO3sbY16AfgXUL/I7Y+ZvkPok8PTF5M47u+J1VxBSGpnk3ayeOXq+ZThSEd6St+RDIEOyJ3mLcohFJCRcA7zrLu/rQbNfq8n6jGtxu3LfCzuI63G7WlfZP+Q+1rNqaj187RrI1L1XDX8MkGNryQ09WLWuExXCLtHfBEFVDTjc3lru/Mj9K0VAXUD9J537ETNaxDLzmeqL8Lqud3fv2HLSs1gaxq3v7y/l/3bpD3YEXi+2a+M4IWfPg5dZg+tMgV1tD3Cz/6QhYAjO178yeJysFORS6grzQKWsnOA6HY6qvuH1LNCoFkZWFFploLB4Bh1LLvNWrRmBxCDmJPeSPl5toCkG81V3ctWqrheUpa0eImm08flP4vMB96FVkk6Ho4XmPfGMAXnCFesLuzq8Tw0eNbgnebktRBeLpDzSb0apVabNS/p/eZcZcjbhp1DojP/zJ4gpQiIoSOMIV2EA6VbhAMwulIQUJY61jHQ11oGPckh7acPkzLDm4WO5A7CmoopaSnkpWVSpgWFprvz9BWQSmqF1UCsFbPVEhISzHoB/TVWAJJfP77j1RrdE9ePXt0XmsRVEcVwlaXpqIQa+2oWdS13mvCCEmY7N8oj0BGu75aQN/2/dTgC5757ifyGXxWAMCF42KPYDSR153F34W8tGrrq1RDjfKBOszHrms7ZTB9uHByHuarQhhOBp9PYloqWas5rTWtJU17B8Rqv2il9g4fpxo22wgXBhipT1UgEDZs8Tfk41ZGkEbvOeN5Naucn+T0pwIGrp7/4Xhx94f/OkscNoXMTM3EWP+0fbXYmYIIKx41ptp0NOScrPQ/P/uOhaLr7SakJGviSK0nD6Kvenwk8a9+875iGJp/XMjbzfCKvUcpKWRlpkJMipZReG6q/YeFlWol26lnJzzUgmKGbPl8dSCjjLlbfxc00bxqbRk3AEIWK3diBLWW3/QZrtkJ2mRmQOjCVI/BR3kpVn1u5gP9KI3hEDxSrWA+YHBBIXHko1H2aJD6SU2kVEZeCk8tLe30CkBivyUcVJVkpaxVyuF6IYE1ndh3pRoFh3LZKYtPTqBeTdprYkBgQIKeZD5UwY4v5+cKhGXTbQNK16FqcidrpvQcTK8F1c3zXpyPNvViRAYBoo22IDImRxJ6L0LG5yjjD+wcNNV6EdoCQMf3E/Q6iZRYBTlZmjLWNbxWv1UhVQlAOEevnZeKNW03/mpkmH4PMpeROxcWoqnVKSypA6dQd1foT9Zfi7yt8zdgLwzv3ww3C6K21RsZnsSJidAaIGVC9k5lFNQZrhEAowEo4wgLKzvpBhcIx1bjRsx9yeQYQgjlonipIMLkEwUeKqTYg8Jo5zndXmg4icD3A1t3Jxd7R53Xdpw1rG/6Ui5khUAcEuypGflDTBhffbspPwrhHeCmtsAYoaYeDBWp5rlOPgAt916YsYY+AAw0Qk74auRNquodqLPCEGbAfAfowpZB9SS6iRjPe+wt5l59uurhfh7UhEjje6+9UeBFQP2sPbpL87c7G3yEBZSO9sFte0gCJ+RumCbMgFYixKQKy19oE3bnlYhbBX4GBh7f+yglkf46sY+2s3N3OfymRH2XDZ0qlRM6QmZDrgyHAm+VIKxOPkBNgrVKuqnUg6+9Sk8fuaq7HW+yHkbspCnDuWHte8lFw7McsWQW+XqUExRSULJEYiNa1QPoESusnmgNM1/5LC5Qm/nKjlozaqb4GRLNTYgXh7Aggm+AuI9C8AmEsVrR2tyE+ick2kezQwZ4jQBkv+av0/g335PKuf25snWYOXGM/SGFly6lNCX95/QJ4JhcjGeQSqXwh6C2MLdH1z13Eli48tBWOs96GYG0Y9OXSrvOW7M/Y2cqsYCQRYpmpWmHMXKrl9x5hlkbf1P5J+ydrhw+Pc8AJommOpakVZ/O0AgXMafktPxh9K7zx3QS9BAioEdkbP6R2AwWWvdvR4lDt2fCIlo8eCLbKjOavWm5OqGjC00vhF1lZJUmM+vkN8pW0yDj/ASQ4+pRVebi2FuYSEv+sdBLIsmnTpc9dWfvFoxB3Kb9tCGMze/SJx370NHpy+j1Os3zjf2Eq6sKctftrz6yK9+Lnrvtd00F3Ox+nxZoZ6DD4f3C60Y0cw5D3/zoj1yZrXLqnatAZH0EI73zywX0Xb9RshjgoWP+BUIs6EnIfW5H2JiXszWTqY4Y8oFeYvBYWew6AmCmAfSfsmBHQdkqFR1VEwmPXNUtXJ3Kq14JlCGiCCFMXLNQQtHwWFfzSoRjpg/2YRcgb6ADUdlT1VfygYDXgh1r5f+RR35Tq0AsXzgcWINGdVbldRftXie55dwEZ25vrgoH5ZxC7uYdAWRlYUGT3x5M60fPpsCyPrT0wGZq+mV/2qLOAGJHLhr4pdpGPkVqSNxUdFSrHzd/xdE9reZ1nh0gAEKMnFct+aOmi8qIrVFnrpJ4SyORgcqGNSNnaToiAQ+RLWo7ZZBcAOzD7q8W6kykegonr8lKzQ0dF+xcm+e9eA49xbArE7V60gqj4R17ideNwNmCHXlriObzc7kdQB912CJ3zAltUpvGzZWEEmJV7879QiK+ijrFQtw0bg6rQBcJ0CFMDcKom+Cw6zKhUZunkIsORM51btJT4x3QTDArZiGgAXkbSxKBOTBeKQtB4/WvQyayOnraOnQtKkx2A3Q6dOpaFhJK9nRTgMGCYnLjfERJtUO8QD5r1KoJdsaY3ARw/9d9hsn/r+XFk6WlQqEuUEafJ3XI+huOp/Y5VCzjQ9s+n0evsN+Cao+2UwdLXaxCKCjGQlS8Ynyvt1qQa4/tojK2plTWVuaeqXn6lMd6BcBbA83FIfCIXd1V0LNuSQtKycigLadV260C/8C643s0MZq5742hno3bab4Dhq//TxOYodslyIZi1s5aXS3wMrFjlBX31MBlsjFbpgNPobJqsV5tU72B0RFZBNcQwweqORrydFrLtxuX5fGURQXxLtO2C1Ar60Z/K8UFcAI7fTNcs7pBSDot+XiyZgIAdg52KzxphJ/XHdtL9UqqVn8pj8rKlN4QNY/z3QGgpapd0FwlAFdzQmwO+hSqAiGH1X/vFKinwDc0THSs1VTH6x25dLYIAUKa9/5YTagCOvmXvesZ0lnl+WG8H7sIdPKGaoLwAC0f4cb9CJrx1xKJzWv3IyB/gIKwr9f/SsFafsgHrDZAp25c0jBp9RH9ZSWICSEMrkJULmzHZkpCBnlhoDs0lygEYwudr+xiwGg0byN5A9p6+gBf50Oq7aoSgE+Aph53eZ7dqudcgPmyvPyaiNcGNxp67HJkGO0+d0Te0Ld5Jxr52+ynX8KoY94H43RQAIQFvIxyPkRLAdkU3T/9z8V6HR7sjPG//yj/jxJ3wMLWWqv/41++kcFPeKw5+m1afnCLJP7rj+1Dg3+ezqhnJfWf95Xm/fX9g0Q9KPWqYFJ+jd9YMIjc4lyxsrHygdpQ0qgtbNijpUOn6My+wM7FiAb4KLhuoK+6zHxHRpKYQVrWV0IX2WreFiwAXtGAIxsQlvCrolItrT0sxSfABYKQLLnHulKJ2aswuiWf+CQxWk8Zmk2Dfp4mzhu8X0BEvA8qID/nC2k/OF7xSY9ZLbiRvVZatIZW5TVUHQQMBt3XCoNrpzGxO/3YOUT6EQVVBQ2OUjJcSKNiIaVkpElIWtnpco3MdFyjdmkioCZQ0cdtVdVye88foSu8izH2EuRXtb0IgekvPp8oQ3aACBX/BLzyOpmZW4oxqepsTsG3Q2nfhaNyYRN7DKSJqxcKDNV2hqDztSve4Ox8tHCKMB11N+PffL9Q/Q3/Io71f+6qCJSOXJ2zgX4ZNEF0vDaCmTPgMzr77WrZadqEJHw0+wSAyYUR6jg/bN1NtVtW/khXInV36dSeQ2QKjEIPHsfLzhvevpesfqhe2JgarDEQ/zEztyL/aprWru/0/abeAPukSZOiJk6c2JRVUPm0lDhpvXe3MZPhTME3r8rshfKsTjCSDJCua/3XNCgFqxaq5JjWLFAp8TBRYXQwDl5oTAG5Buh0dFtiVcL1hzrQJLh5FaIaAegLSXaovz0TF1Ft3yo6GS1x/BgyQ90B2aQVUuICfb582DRpP9rBKA69CjoR0BoN6avuH2mhtCyBpLiuHwaMlvNYceAv+p3tY39fGyrB6gerv1wFUT+HeNFO0YvYCjinCfinUs3u4kAATjVxs6TbD+7TvG0qD3PyW4Nlq2JGkHbLELoEc5dszNu+SowoTtSQXaAQVJi+LBgQ1pssBJSTCeyUAAAKtElEQVSb6EuOwKOFPch5YlhhQf8Wr8s5Y8d8obZD2vmJb/qM0Hnus+VzpCVrNnvFSCLFJsTRtPVLqLm7pQTfYD8Dq7+pw0ujBMASQ0nvZkyKxQwcUMeylhKi+HH7agqLjqBSjs6SvUIEFLlTBW8jqKW9WpTgFwwoCN2FmOVgCKETEqlCtDDlrkR4xMjkcUpyHjiLCubmE943OJGP1f+xuuJ5zdGdDABidB07XlDuWp490Bb8lkFteghMlqTPmgW8LVKonadK91ep01PCz3BumZcH8vvtwlL76JhvG1Cts0XYtb1E8RHU1cuKlt5Mo4GLptHm8XOlcx11ocDQeA55XSAJOCkVPX2kLUghuO4z3x0h6gqQbcLqBYYltdmOfPHHPNp4SjXFEAjp7O0QKWNUOXenKcjbX5LwYQgzaJU8GkJNKtfU5ChyFxBA5fVv/roG2U378xfZzUgqKeWJm07splXH9tH7/jaST3cs6UMBQZ1EUwFgFfTbBQqAJRfKP/qtqan5uJpNBtKBTV9QHXYuLj3KpuA711nqC2lyr2E0rfdQMcZg8L2ZD+lHds4AOWv4BOoIAEYV70PeFRdtLKGLEuMIFOwNJwv2xlE9i05BM75DOhp1zxl0fCowGBXc2oR6UsS4gKQ+W/aDXCOqvX8epPIDwqLDaeSyOTICv7qzuUQQajGv1IO+cd+BK0UWgJJS5aObm2eQf0C1ThR6YRP19LGiiORs+nnvRmoYWJ3a1mxKvw6ZRO2mDZH2oaZfDhD3/XLkLb2rGeRqRFmHQsN+nUHf9R0pXfa4+NydKgAFY1b8YPQNf5SMGhZI7r5hqLFWkwZKWTrsHRxLTAZDL0EGe75o+ithkk7dvVUAAGMJcLMgxPwK0v0FoqBciCiLERHCof3cPKuZooU1MzWOfO3N6fjDTNp5/gQ149UcyBAT3u72s38LRkcIGfGc3DEaZKqwgnBhfxjZ7ABvFd4yslBQQ8hKITyw6dQB8ZCnMHIxtkcZFMiqEgFE2C40+2l7vQqKw45TFfmOkxAHwg2DFk2mE6EX6eNAW8mhlywdSPVajkSFISx/V179159ZAGohRLAQzExMTV91K/sKhYXspRKmWVTK2oxOPUijbWf+ZpjWgHG+L71RtwWFPbirt8luYJtumrjQHEZS2j6EMQTnCJV3qMBDxzycodyG0xiCnwA9D4RWzrW0CDT3LoLq++3jKVLYBRq3/Dtad2I/9fezkYQLJug26zyFLFWlPTOY+YsN+W1j5oaigbcR/0AFRxcvirj5N3nYmJCduSmdfpBMexjbAxJ6uLhJjrg9e8tI3qDmHnP60eT8kdrJQT75yz/mF+HeYM+HkMWD/m/COxg6HygNKx4qDnfdGN/1fdm5ChKaveEXmr97A/Usby02Efq+Uesxcr8yUt2xrz8vWoPwr1Hj65lh8IjQ1uiNmWinD/4kz2OIH8YXe7EThrRgBXcvvZ9HaGLloW2Cfl7G4a0DXusizEbYPZ/rp2lr59O8neupU1kralPGUlhYt/kw8gl8TVAzbDqvfoP1oNH3D+CTAGRAVM7x8ulVdPmUyinbwkLAbUpc7R1kYlU1n0CNEdvHMBVlizvUuvtlJiAq6HhUOcBrV0YTIC376ZIZtJrhZkdmftsyKrxfrX4/CqwhIzZgOJow842aVG50myJGtLM6QlbiLYxuz8hIprjoEBlUB3UUHJMsQ1grlcGway/B14evnpGQhbEjbf4JAhJC/RKUI1QmPO7HyY/pg/kTaevZo/Q2qx2MoBHjXeNNcbhIdYOf15n5x439vSL1ibIQwlgIKK3o7uFV0wwZH4xyx0j30jZmdDY2jQ3UAUpJS6JGuCcYryJMyoLuf5ZRAS+CkGwf3aWfDB2Bb3H25kXqMfsz2ckwuHUkyWLCK7+vwnxkd7ox83cU5feK3KjLQrjOQkBhTVfeCea48RmmqsMwV3WyoNCEbDoQcoUOXjopt46qxiiiz6sdJFwB9JNtYPPHi6R2NRrRb0MnU9vqDZnFT+jnnX/QoF9mklVOikBNoB0Y3LrNh8o9xkhVYt6dmb+5qL9ZHDfxQbpnPdQnbu2B+8igDQcDKlaFpcu4M1teSZ907MUw9C3pOkR8Z+bG32j98X1FnlxSnARoiZFncPBAl8KuskM3h4JvX6d6rhb0FjueqJcFxATO91Al2B+rsf6+Z/nt4rqNFaq5cBurckmP78mg1/iHKi/4FAtgQ3i63LYwwL0sTe/9MTWuXEcTLl60a63UBSUZ2AxSXARPGsZ2cNu3NOEN6PpZG36lJQe3UQnzJ/Sml7WmMgROVoPWo8m2hITGUVjb4VnvoFRsAlALAZVNq/holpOdSZi0fuOSqjwQXZdbIjPocEyGzJ9rHFCVhnfsTU2q1NVkt5DThSAwL/p5+gdoFOnRsA31btpOEkiguIQ4+s/udbR4/yYpvWlW2pLae1qqOoXYvlV85Q0KqveOcptFrPiezPyY4jif4r6Vobk6doTbGZpGR56jM4cXEWbQgSJTcmhbVDpdjM8SlFGrvL9UN7ep0ZgsLVTBNJSNwLNGhPNY6IUCywsNIVQpVCnnJ/1mKBzQHih18+5t6f9acWgHpbBf8ooz7wqGmGXUxbSIaiKwpo7tQFd+A5+0OG/s+bxu5ol4wxIsOOyGa+fWy20NlRs1YwwybvpzJi5TdoSTrR11Zi+6R8NWVMuvmqa0EfYBAbYLd27QjfvhEvdBVQWmNaIwCpAx+0mONPnZWFrL6Bl4r96lylAFxvHo2gny9hOPXKH4xHjaeHKfVFsHh92Qio/ajGyQ91aqmJHDrVK7J/kHdVSimkgs9OfzOlzcvHqet7O1U++GoYi6JifGiBAQR8pRJ24wP+FUbBadfJipmSjixo4cOlBw5w0E97xLl3um00xLT5E7daDRDkNZz4XfEgSGmz2j5gnVC86Wqu9HDrdCpdaC79XJFEDM7wH6lHr+f40AtASB+kQkpKWEDiNbMBL51tWdOrcuD0vKpuC4LOlJuJeSoykcdLSxIb/SZeWGzj4sDC8XV7KztiVrKxuysbIlSzMzqV9Nz0ilVGZ2bFIi3Y6Oouv3IyRrd/vhAylFwYWiuKCiA+4hbE7edk8ROFY8YKXc0NlG0+wBA4ZJt8/1znMv8pbmCJZgIrsUlGI2EUY53gndR3Exul0ymFcHP+Km+pbm2B0Yn/PEiItytjQlN9zS3NpU6vMDHMw0jXLqbBOVcq9M3hWbUznfxkrpCOiAWs8ffBF8eWEC0BIESuiQ6oQnI0o3IT5CZpXi7nS4+4Q+FIT71jxIeyKTXDBMBMgqPVt1AWgsRwk40oG2zGTUs1rqyXYDxTi7+TOOr03eAa+Snb2mmQQGFkVOs5/lvpD/CgFoCQJlE5hTjXG+PhpGpydSTNQlGR6I+XW4kaZyJ26jwwrsnaMtyMUtgNw8q0mNprpHSyFsPZRiLtFXNPVfLQAtQeAc4JmhhgPFldXyBMhSHwuUTUqIpqzMFPG0MXUkk/U+5lug+Rld/mAuvNUSju7CeAvLPON2YOkRPkHcZv3zuEX5v04AegSCPp9GaluBhlx42a5F/DqUM8NbBaOhWo4y0x++TNf70gkgH6G4qNUUqnvhvuJvtJsgLgyDATgFjw3ldmiJQYNzWHHddvx/9F9M/wdbb7xVln93LAAAAABJRU5ErkJggg=="
}, Sx = {
  TeamID: -2,
  GlobalTeamID: -2,
  Key: "mock",
  Name: "Georgia Bulldogs",
  ShortDisplayName: "Georgia",
  Active: !0,
  School: "Colorado",
  TeamLogoUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAIABJREFUeNrtXQdc1WX3/7IERMDBdgCKCiiuFDfuvfdMU19L32yZmqaVVqZZmZam7bIcZe7ce+UeqKCAsgQUZMje8D/f595LgIDQePP/vvf0ebjCvfc3nnOec77ne87zC9CLXvSiF73oRS960Yte9KIXvehFL3rRi1708h8Rg3/qxPn5+Ty3hYxcGU/JsJcRL+O4gYFBnl4Bf9/EG8vLPBnPayc9v9h1HJXRV5SQ8b+gAMN/4Jwfy3hbZt0+NikDuXn5Br8FRGPDyduIjE/l+11kvKFfARW3bEt5sZYRVZoLkc/Ukpew9Kwcw+6L9iAqIQ3xyZlo5WYLEyND3HuYhkvLhsDI0CBLPjdNjvPtf7sCjP6Cia+2cOHCrfLPr2S8KuM5+T190aJFF4p/Vv7eV15G/HoxHHsu38WNj4dhUtcG6Nm0Fv7d2xNfHw5AckY22rvb87oGyucPynHu/jcrwPhPBtE+Ml6T4ZOWlYPE1Cw4VqvsIL+vpmLEghfLq4n83lXGUhnN+N3Y5Ay42FaBsVi9fL7gmL/M7o5+i/chLy8fc4c05fFnyPhN74IenXxbedkioyN/j0/JRJt5O3DnfhIGtnLG5le7cXLpRu7IaKiLNQmpmXiQmIHP9vvjbmwqXh/WDP4RCRjX0a3g2EH3kjD4/QO4uXKE7k9JMpaLMhfpXdDvlr+bVv9Aguh7W67glW/P4qvpHfFy/8Z4f7svnKpZoIlzdR7bNjUzx8DvbgKWyd9HfnQYn+71g//dh1gyvhXaN3TAnHXncPFOLGytzUUpKepzA1o6o21De90pTWV0Fnd0WNxRuN4FAR1kdKLVd5i/E2+PaYm69lbo6Omg3nx9aDN8eegWalia4u1fruBC0AO1zmjlRxf1Q22bKnCoWhk37saj+aytmNC5PpZsvYrNZ0IkFtTEhE4N4OZohYmfHlOKGeztgsVjW/LQQ2Sc0isA8OaPredCYV25Eka0dVUuiHLM7x7+1d0dOy+E4cVvzuB5CawrJ7VF4zrVYGpSdLHNX38Rm2Z2FUWZoXYNC4xdcRQXZMKrVzEVF5WMOYObYEYfI7UitGKvD8IaSeEP68omCIlJVn/gpFFW7fFD50aOmNKtoVh4glivs7L44nIr8iGm9mioXglDJ8vnzwTG4FP5/oCWdbD9tR7qc/uvRsDV3lL3tS7i/tbJK9HVYYkJ/v+rCojmjzoyseLfC/64+bcQCagPERGXigO+kbASBfV6Zy8OvtkXNWtYFDlAmnzvoSCmX8TttGlgp1DRhxNb43JwLIa0din43IXbD9DB3UH3q5OMp7WDseg2gZOM7TIuikJy/1cUUIc/bspkt6lvp9zPumNBmL/hArJy8nBGstq1z3VgMoV/9/JUQXfpeG9cD4vHG5su4dke7ujq5YRZ35/D/jf7wFg+N/O7c1g+qQ1Gta+HZ9ecVLHCStzbD8eDsF4y5HnrLyh317CmNdpJcO7drLasLAtCp7nakSgK8ZPXCBlXiNBEIUH/lTBUbpS4fyktvevC3Qp6VjI2RLZMPkmd4DWjEZOYrtCNpXkl5Y6aulRXCsuXD/RuXgvJ6dkYsGS/xIhG6NmsJhb9fBnRD9ORJx+gohLl/ZZ1bWAnyOjOmev44vIuxOYawq9ydRypWgv7qzvDzc0RQyRA92lRW8UYQ4Mit5KvRWrzRBE3ynFPdlq4TPd6Q76T/UQqQC6UbiA4Ny/flNwNORwq4K4oIzAqUU1Y5JdjcehaJALk96dkEudvuIifJNjaWJlh3o8X0EsUECE5wMzvzqq84Pk+njh4NRI/vtwFzV1rqPPsvhSuVoXfimF4SYJ5q583oYf/xYLryDYxwW7betjo4I5z5jaiaBPUd7RWyV0XWV1jO7ihqkUl9VEZ78hYXBI9IvdD37hWxthCvNhDGT9qv3P/icoDBIsTgk7cdyVC3MlFdG7shBauNugu8JGrwNLMBOM71Zfc4CreGtFC8Tt7Lodj0+lg3ItPw/fHAvHN4QCkSAyYPaiJihNXQuLwQp9GaCuxwLySxiM2cLKGm4MVzgmEfa6nO1668BDDom7CKEtjmEZ5eXBPjsWIe7cwPCEETulJyIpPQlTwfWy/EY2PDgRychlfjMQVktxrLte+U/KI7GL386W8TJCYZHBUEFycuFP7qpXNZDUR6U2S94/Kd6KeJAXw8zMIHX88EYRlE7zRSVCPV53qCk5eE/cxol1dQTeJuJeQJhMYg7UHbsrk2sukZ8PWyhwNnarioATpg9ci8CApE/MlG67nYI1V+/wVmqqlDdi06B+O35ZVZIvNV6JwxsgaRmaVYCdGbZqRXnBNVlkZaJoYjZ4xwRgeE4gpUTdQSxSyKiQTm6/HKBdlZV6J7uUFuf6JMnrLaCCDFMlS8VVGXd/aLavIGDcFlX0gsDdP/tjUpQY5kv7yue9FCWlPhALkQuLkgnqKpdZ2k0l7/svTkgfUVRifyGf9idvK6k2NjfD1kQDeOKpLQiYBE58fuKU4nhM372PZ094qgZvcrYFyVbLU8WLfxiq3oC+vWV2jBKIsuqpfX++FBt4eyGrvjV/qtcCxnMrwCb9Vsk8Vy28oq2NcdADupObidd9klVmLcomVbbjAmFnT8nX3/9PpO1gjwIHGNKZjPXwlqzQpLZuGRQxcVe771yeGihAFHJKXKfUcrEzvS+B87cfzMmGVMVdec3LzsWjUU+j7VG3JB5w0/jo3Dy52lmQ4sWB4c0VBP9vTA84CY8MfpKr3Jq0+oYJxD3Fl20QJcmxYmBrDSY7LrPqVAV4K9jaqXQ3Xw+OBc1fgfT+k7BsTN+UTFw67pAQMO5+CJduvqWPtu3pX4layMpRaomgqnCv34p0HihjkSu7VrBamf3FaUFldca1GjeSePxElZD0RCpALSZQLipN/DkhOz8KWs6Fwr1lVrYAPJ7RG9yY11edO3YpWBRZaMymGRuKmmLwRAdG6EtMUc4rPxPVwBZFJvXA7Fq8O9FKTTzl8LQo//xYsccADxkYGeOeXKzi76QgW+R6AQe6jJYc8Q0O1AgpLg5Q4eKXFYXtVZzhJkObq9ItIwEc7r6tzM5kkMcjVO0viEs9NpfiGxavvy73xYg7JfYc8SXS04ujTsnLhWasqZvRtpCaHy5fChCxUbowuJCM7F8f872FYG1d8svuGcjNLx7XCMrFIKuPwwr4Yt+IoPtt/U9EPDMo6NFRL3DBzi8mrjiPkQQocAm5hle9eGGQ9ihI3uDTDQW8fvHxsG5rGFC0h+MSG4QOT08h5ZhZe7NdYoyxxh/T5/pKxbzh5h5aOlAzGKTMNFCJzm1RQFa3xpNUDVApsJpZLN0EsSxfDZU3ZdSFM+dOtsjqYzRKn+8rECnxFXXtLTP7shJp8WtpxQR+0NuYORmLBtESdAiQQYvf8Xui3eL9K+Oalx8M4M7PIhaSbVMK7rfpiwMyRmCxuZ4+rHYy++gyN44qCl0H3ArBi9UZEtHldBXpDSQDp0jgIHMjYviyQlyt2SBsXBRQWDG+h+/rfhoT+aE3YUsMHVVKTSqlnb1XwZmuBlGFiscTnVJB9VXN0E9dERLTjfBhSH6aiV3wYrNOSsXjrVbVaKKQiElKKTnDLerY4uXiAssx0U7Mi76WamGJB19EYu2AcPtx5DU+vPIYMUciOSdMQUO1R7m76jZNYtnp/iTdEReyY2xOe8jrwvf3wcq4uiI0VViSS6niS6gFNSIbKMOdNH/e7jySJBQniw/sK5FOkjVjRXsH/OaKcNeJamN0yiCZcvYVP75xAfWRgRshFNMwUuJhjU3DsuORMSaQc1QoozJ4yMDpWs8DVK8HoHn5TswSNjLCg03BMeHEQnlt7SqEpZtwk8Fp5OsG3QWO4BPijasbvCNI4Pw9pd6PxtbGDCrTFsmcN1VvfFh7iVonaRrZzRbUqSuvOEve2Sxz4Z1eATD4j7AESoG/9dAnnBeeffLe/Kqr7hsapz/DCmZTdF5eSlaPhx+g+3pUYMTU2AN4PwvFM4HmkGxihc0wIahjkYoIkb3RTDNrME84Gxjxybk5GYHUHMRnNJX/UqDPGvTgYMwQKE1ktHNUCF5cNwYrJbSWHsEJ+QiIiLao+cpyeD4IRtuUQurz5qwq+JQnj1WyJR33e3afyGS0B+PKT4IJYdLcnnKMr2fdGH2Wd3bxqKq5n+a7r6CoWrAtyVcxMfkcogk621air/SUPtimJMMzOxuCEUMWGfjGto/LNzJxtrMweDVYy8Vb21ZHg6ITj9nXhNmM0VkhQJw3CDJpY//ujgaoWwYltdfww2kcGlWRFWHttL17b/h16zd1S4P6Ky6yBTRRVMuyDQ+raRd4UA6z/jylAW4rszn+Tpezfso6yDlLLbCehIs4ExKgMVudTLQspgBMYXeVRizSs6aBcDz/fur4dNgoiYWdEScLaQohJFZyycYar5A/B0cmKdU3PykHfxfsQeC8JR65HKUY26qVp+KF+q1Lvp9nDexgafBVvbLxUMjoR2Dulm7vK5kmbMyGTcV7mofc/EgPEB/biCrh0JxZvbbqE2pcv4cs9NzBz5y0s//WGspY3R7ZQE0kxER/NRI2EHaHo6A51YY589Lt2BpmVLZBlZo63Og9Hg95tcCEkXhVkWBvo6OmIfVfuYqi4geKy9VwIGvhfw8g7V/BVeBaen95LFXNO+N9HVHwaTkvu0aWxk0ru6BbP+4ahW2RgkWMEV7fHCldvLG3aDbvNHRAem4KR7evpyLsiwuISjeONjRfVqhRAwKU5RuYiXuLB+f+0Aj6QF485P5xD1v1YfHdxG0ZH3MC0aH9st3NDklElrPpXO1TWJlF2csHnBIISS5P97ClBr7VXbdQ8eAjrRjyDSzXd0HJMd6w+GIjPnu2gEjAqoIOHg6Kx2eZib21e5BoYd8aH+sI6MQE+4l7WR2Zj+5VIDO3ZRBWCGGvixJ1RKXSJFg1dkXQ7HPUSHyBZFL7IowsWubVDv/Hd8NXMnnihXyPkSvbO+DS2o9sjZVMGaXJJvZrXxopfr6vVIMHbUFZdX5mPKFHC5f+IAmTZEWN+IWjH+F9rTuL5hCA0jdIkhsa5ubDKy8FxO1e8qymeazgZuXgrgaE7xCe/JSvjuFhpB08HfHgzGR6DOqF28/rKcjfP6qbgHtsUr4cnqLyA0JTf9/EsqIZhr6yK7Yf98NLNUxDsqzLe9hGB6BPuj3C/UNQb3l3VEWjRuy/dRR3JetOvBWDMtVMIl2A82qs/TL2bYK/ErX5P1VFAgcbC4hBRz2rJivs0r13i/RNKT+zcQCn5/W2+GNa2LpVDUm+/KCHyPxEDuskwPXA1EpmS/fYRJFEENdwPgAsyH/kS48KV4DhFKdyXOLHroljjsO4qQ3aU3OCb530QIn6cCdCCTRfF/99W1MCmV7oWCY7nxD098+lxPBd7CyiUBRtIMDfLzMDQEF/UXLlWcUmcVE6wYWAwFuz5EWFmVhju2Q/jR7bD3gV9CtjWIpmyuD0mjsclYy9LSIk0E4i8YINq+mOA+1rbbPy3Z8KqAevojSh4VgZsoyIeYSBN09OUv2Q7ik6+OHgLg1s7q9hAaFhcaNUUQsfiQlcyYMkBEKqz/jA66z7G3zxb6gXaZKXipsSaqd3dEXUrHHP2b0JMJXNMcO+Bd6f6YFovjzJvcGhrF2XdnTwdy/zcnMFN4fXKFgyXVdCyng15jSlE33/3CmjOH5ckU22VEqOg3COF4pQEbDlblK+KElz/40tdSpx8Iini/eLLnpn1az+cV1DyhFhk0oUb+Db8FJZc+BXIzin1AlvdC4Hrl9/APzQWk3dvQpWsDExz747pI1s/dvILgq4E8JJykMJC10XO6vUNBa2vc2QVGP3dClC9g2wjIddekvSMDVXBrDCVUM3CFHeik1S7SZ6WsqAffXbtSZWxLhz5lPrbgauaFXVRgrbPgl2Kdji/bLCy5lHJ4ejM7LcEpReXIaHX8d7GVfCIi8LndZrD4SkPVZkrr7SWLPjkzcdXIUd3qIfT8jkiQhEmN1O0cfKvD8LatvOFmdm5xkQhU5OCUSv+USupl5GIDVYu2HP7oVrORBTkgtafuANnCYiD3z+oaIkPd1xD3xZ18PEzbdScsva782KY6ox+66fLkg2nKRTTWOBssMSB8PP+8I4OLfcNWYjlx5lZ4JVG3bBjQV9SCRWaELpZVvCYX5S1Cqgo9rGyF5bUvIxXJCjbyDhdkdqB0WMmn7TkCQIBYuzvjwVhWmwAqic9fHQpyWx6ZcTjE9hj3UlNkK5RxUwm3V8Frk+mtEMHd3t8MLGNQh6kgtkrSrfFwHuPXRb5iQgxMIPfGX8cDktGkqAai1uBaBUdVqFJXOnSCp6DfDDOx63CFsl+Ja5SFoXKEuY4a8Wg2Dp5IzxeQEVlY0k225B4FSXsEiUk/WkFyIHW0LvQXQz/8BAskYvZoedhmFWygp3Sk9EyPQ4HTG2w5XqM8vPJyek4eSEYRwJjlX8n9Fyy1Vf1Eg1v64rDkrn2zU/AZ3clQbO2xj0jM+y6vBWOfn44EZmKQckRcHwYV+4JzDI2wUv1O+OT6Z3hUNW8wgowFxRFSpxkXVlC97py9w3V6b1O27/ELhCBv2xx6Sdzt0GUkP6HUZBYP3vzx2fmSBb78RGYZmRgfdAhGCWnlHnAtrHhOJnwE65b2iHT2BhN0uMlE87DT/cb4eR5e0WQPahijbtfjFHFl9rIwm+GVjjk2h1Te7jj9UvnYJqWhpYc8RWH2Ceq1UYVG2vFjP4RId3BbozHCXMHdu1xldWxscC286Hos3gfts3pwaog687csDL0D60AmfzJ8rJG8LrhhE+O4WpoHJ7OicbggPLR4oSlDhkpqJmWBOPsbJjl5qBlQhSGRAdhfJQffM2r43KuuUq+Bh/bg/d9D6B5diIS2raGiakJEurWxSUjSzjK94nzHye+1Z2QaGMLm6QE/FTTE2YtvTCmQ70yv8PVWBIdzb98LvCZnR4l5QyF5ZkuDdBCrJ7uqr/kHo3lO5NWHcd4UYrEPw9ZBddkFdyqkAJk8r3kZYdYvnH/9/bjoCRRTHBOpRphoLgDi9SUP5V6Uzm940JwICoDW8PS8GbgKTwwNsPDF5/FlLHt0b6jJxr1aIWGQzpjXY36MA8Ikol9+Fgot97OHb4162K3hSOaejkrsrAkiU5MV13c5HZ0tMkjbqiSsQIMrA+z3l1eYUbP2LD5TLDqFqFDYO9R8X6kUhWg5ft/kOEyZ915bDsXhh3zeuKN4c3h7eGIuQFZGChZr2FOzp/jP0QJXQW2Trwv8FJWyO5XZmPq9N4wEXRBUm32unOqI27VvzthWyV7NL94BgZl5AAWOVnoGBuGtDzgWzsPVasmOmF/aWE6fMeFcMWc9mhSs9TJpzRxro4R7VyxRBKzoYWahYsLmWBecxEX3NAec3+8oI5R196K1LCxKOBQmQqQia8kmloOTUueM1vLp3x2Au+P98ZYbaGdvjFXguT3ETnoGhVULlz+2CQkNxcHbVzhOXOCQhSvr7+AiZ3rq56ixLRsvDGiOZycquPc4atwjisbn2cbGWNWg864b2Ku6gvkdliPZqWMrY4rfr2Bf3VzL3dsYIGeyE9X5StJXvzmN/SVRNKgkCsj/CYPRSUwjxE421rm9lhpu3t06vuax5MkyoQbIoZ/cAhujtaY0cezyIcnd20A6z4+WNGyJ2Dw1+xwjbCsBhtLU5X1xiSlIzMnD81caqCq1nrZphhQpeymhHxDQ8x174wr5prJpeKmS/ZLP88tVN8fDcLqqe3hYlel3NfFthXWhUs9p0ogI0vsrmVFjRU+0thaoLNTjLxjiQqQNxoR7bCs1+TVLaqqxZ6dmf0bq86B4sI28kifjljp3VvWz5/e5QrTzExVCN+zoLcq8g9aekAVeqy1/HxObh5yc0pv/c8Vy5/t2Q1bqmpcBfONNyX7XS6J3tfP+4giTfHRM61VN0Z5hYUeGuJyUULgvcQSP8MsmMHXsBRD/Gq6j2r4Yu+RtphzQOa6VUkrQGmG3c73E9JxZFE/1a85qhQUwROue6ETYrp0whut+iHP1PRPKaDjwwjsvxyucPWueb0Q/TBNNfNW0yqA1HLT1JLzgITKVTCxaT/8Yu2sAue6Fzsryy+oH2y6pILteJ+KVRLZKs/VY2dtho7zd+FjMcq0QptR2FJDBndIa+fS45KZMXa93hNng2KwdJvaZsViziclKcBKF1C4bBj1p/fyLOhOK7lcZ4hvRQl1RvbCJO8hSKpa7ZHPHHGqj9gato+9WeeUBAQv+0b1BZGy2D63p+qgI7zj39avP4E2dwMe+d7B2h7o1XQoTplrzjFrkBd6F0qeOElMqBhTKuot41Iy1OrfM783jr3dXyWPtZ/biJEfHsacH86j6atbcf52DBJTy95GQGPlZpVvJKaxjV+kjayCTkWCsAQImvoQ1nW/ORKodqybV3q8azFQ7KEjqrk44YUYCzTKToaDNmMNt6yOMZ698Vx8EMxSUx+f1EQEY+/pIATa1oRLzWp4ulN9VeL8YflWvHZ8K8wLHeOSgwtme3TFocbeeGl4S4W/I+JTcUjgMndbuthaookE2t2X72LTqTtY+rR3kc3g5ZHt58PUSny5v5fa88CcgmCEyImGyZ0/NNIZX51WnYENNP1DpRqrIhx9I3UGkisBeWdhBZBZe9GjVjUjFkRyWWlyL/+GRGLfvu3rY15cFYTKKquSk4m5Lu1w16QyDCubo7pRPmzTklUnRJl06/27sNt7AFe2HkfktsPw3LkTA6+fhbkkYgmW1theuxEWNPTB4WbtsHRWP7z/dGtVwmTtl4US7jdgezt7lWb0aYTvjgbCNzQeH0vMMqjgEmAcpHFpG4xPy8iU+FSD0JLnY4+TkyiVip35/VlM6+lZ0BVYckXNArO+O4tXRKFyKbWIOEUJCkYay8Xdk2WxWeDS2CaCPkpr0yjA0+IbWTmKTcoUlKBxWdxm+qpMwABJcL5r7oZXBzZBP0EzXx+2wGqzOhBvhHYp0WiWHKM2VjSU1WKZJMEto2gVzSwrE63TYhGeUwW3LG00O2CsHBBp66gSq+RrkZjbr7EqlpckxP1GRprJZrsjV4KhYcUmX/Wyyn0wiGuFrTgswBMSMklletxexqQxHd3UDqB1xwKVEZQmzKjJMbF3qplrDTttfeVSYS5INdBwi09AZGLZfk1uiJ0HFFIUCwRqsY/ySrBmU/WX0zsWbFslHPxNsPS+qxGqVWS5TIpuTzHpXvtKBorgo+0wiYrNM0SeoZFa0sra6tliiqeDogVoxFPXnFSJVGnCczSpo4GONCSfx1S3ShL2O5G1ZdsLNPvFzmnf4iZAPzFWNmk9wz+kSq7Atstvj5atAAq9ygHfCMUMQ/OMjSIK4JZPZc3UfnmFeJ2DmSU7nBloCsGyFPm3RQcPBwN2OuiECmCljLRvepYGXppJzCEEZRcEfW5JHoPE3fbzobobeHRliuv8VRKu98a2UtCVUJKJUEWFsHHx780FnxZiCbhTf6bW+g34SAYWoIje2jW0U9QF6x9BkvjFJGWoRoTCbCyb19jQxpKmyHAZ7xZWALWrupG5AYIQzKgCS5cF7aOCFtrP34npX5zCxle6KgNhpRCaJ6V01f67DldH9XIUSZhofydLm1kse0tvi3LZuzOgFI5n+7kw1WJCipvYnXvEKsqIsqmL961dObTEddrJJy0/TbkoMRpS0KTav53RSQVh8j+shXtpV1+muLHsYvsXBrWqg5e/PaNqH7K6msoxe8nq2l9YARledaqZGUtWeT7oAdo2tKvQxbPuu2RcK0z7/JTa0eLtZstIvkzGv+VEnxWqrrHjykkLf2kihCjvaZMVVYznRNCi2GLy2pCmeGdMS9VFQXqiJKHFs1o3f3hzRQX4hsSrVdS8rk25r58riLt9Vk5up/vT+3xsmlzzJE4+J5X7nOnvn5cgzzjHZIwTTy9gIrGHNPbGU7eV+2JtoPDKtzAzUZzae4LUvpymUq+P5NgHlALkRFnyyxmBTF0Y/VmlqqgCKKRhXxVUwKXJlhMbSzOW6trJsRdrgxfdPUn+A3LOu1ql8BFmVRmguB+Mk85JZG15g6wkrkMubQbYwuRaYXl3y1XlwrijknL4RpRm42AFypGr9virh4500CBAluDWat+azR+0XsY69sMyw+XeiEKuSrlU7hhaMaltqecgxK8xcR3miVHJuchANCqMnXbxx8i2dVV1Jy2rYownXQa3ejpWrazcRv0ZP6vsGprdJST6uF93kbZQESIT/zkf6sSCNomvnu/sVRZ74M2+aptT6Noxqh2FCMKpDBzPp2+t3uOH7yUxZCmRzbnbz4UquFheYeyiT+cWK63MFQPJlOvjqvSg2yGsfU9WOMFBQORD5eqKZOWSt+i2Z5XKfIp7Y7LJrVg6x1E43f2JLmNYG1djWjE7GV7TBIzHCttViEC6SqDxXzlCQbmtsopIKZORZIMWLZt4nL3/T/vUN5JU/VktGrDkY2lo6UvHt1KbubmZj76SscLFrnQOhxY5buVRBUvZxcw6M4EEM3pO6tubL6ud+rpdl6UVZiZ+elzlEZwcaJ7a+JMOGausWgyEW6U6ikuhu7Mo1HSsg67cYeNq93i+KTY5s3AL5O9dXTI5UaLxLYJIRtHvkkcZ2tq1xJ6eknwwk5/fCxpGqlTH4EzOhBk2L57PeuCmuw92XMOWWd2JaBTXGyRBkwQgH+TEGyUPxCSKZb/S/DX3IbwqLovBjkUWog72cZqZVIwg5GMSiDde0uwdy9DGLB3XrvgDXeMuN6fT1bB9hs888nazUUQi2+LZUkkEKLGvxPZ6XccFN7N08ChIdP2LEz5vEyLJZBqRRxnx4SEcf6e/8q9lCdvKS0tAfp7V7RHGkC0dI5cfVjwL3QtXCTvNaLFM99kyTsvn/l02BNCK2QrCoMfvkrfisecObcqeLXgaAAAFkElEQVQ4I5moR4UTLgohN+sGF5cN1qG+N2XybxWvl/AdzkFmdp6y9FqSCefLfwz8y8RtvbP5imIQ1jzbAav2+WH+sOYaSkZWPeEz2y9vhCcomLxWPsNrhuYJL4FFzEXS4weSJleRi2lP3PrJbj/ski8Nbu1SZgWp9OWWIQH5qmrQ5f5fPimR2Sn9aFXBz9vOhqruA24/orthazsnhUGXN3tHLpykGpO9H47dVo9EmDe0mVI4lcBWSFqUu6wUbgqviHBy+i7er9oite2Ix2VM11EE2vnIkvnoJ8qtST6I9YQJnRsoV8prpSvhbk9nW0u18rgJncQd73ezrPTb95IUS0BjIW2yWNCct8ZY2S0xio29BiXUhE21F9OayKTfe/sVocQHbpQnsHHCSL8yOamt3VytyykYJAlTvxP8zOdEdFu4B6cXDyzzeLS4FrO3qUfYMENmZYsbw/mINO7Wr6QtCRZ//G5ZwnoDn1vKiSdbSfRLekCHzIrNBzln7okrd4sdgzYXvWnJ7pBVmhm6DNuglK4IO60S3NmpNubjw8r3Xf1oaLkugIGNFsZAeOpmtEycleq/p3BLER9xwNZzLs0xHdx0bei7tfCvtRaqEmZ4sX+ITbykOIihWavQPdSD51i111+tBsdq5qoS9bgiOvcrdHpjl6w4M6VUmSRmTANkQvaU0aLDeXLXQmlSn6SU2bvCwNdYa9FMNFO0tqDjxckhrdbGEr4XJOcJK84ql3ZSG63mO3Ipeby8GbdXjSzxEWSPk8mrT6hCiW4F9Xh7j6KN6XZI7y4cpXpEN8jFjSt0/mtUADsz6N8ZK7j/QJdFMxDyQX9vjWqBypXK7x5HLz+iiiTnlgzS0dQL/+pHYsq1m2lwjcFjG7NK5VDly7FaCsGfTzEk7775zB/brc+2FhYluHd446k7uCqBiVY9uWtD3eQrArPQDdDKvLjqaCJcIaQXdJNP2EfKmE/iqsjk86FS9M9sNtBO/nZtfvKXCjPo8kx+yQpYuNAQI74YaDz8q24GI7+2+vpQgGLtZg7wwgcScOiSKiq0fG4Z4hYfElQ9mtTCteXDdDAzWZuoLS/0lUqaG4GCdYwdJNdIUdDd+AmiIMStCM3PRJFUA7n8YZr9Z+Q1pv3Tj8p/NEocO5Zv3HCQa46RQYphfl6Pc7cfBMwa2KStJClVroXFKehF/oM3YibWx/oAS4dMTgxK8LdsPafV0+KD7yerFnfuYGmneTArb95DJuFnQQR5hdBHmqCPwYIsHDjRRBmGhpqAzG465g0BUUmKazF9DO5nPDp24x6mrjmhqmY75/bUdbytlfNuxj8sxiUnVgbXYJaTlZeVH3s/KTtZu1K++XZGZ6ze66cCH7PclIwcxTpS2Ce5aHQLSbg0lkmqmTtOWBNgsOQ+3pkakq7wqfbKJISWcm39tMWQl+s7WRt6u9mpQMsyI90IEz8+zI8bA3XCWLVJcgduK2VCZyoI6XZ0kmJJh7ZxAa/fRZPt8jly8/AEiEEFAguf6b+wJLfFTJg3Tb6broYPaeJksDOgd/PaqsA+ql1dneVRodzSw+dKrxMFpD3mvO/Ly5zCf+NeM1LCJ1kst7FQRZHIuFR1OwNb1oGPrBo+/iZLrouQlY9DY96hFbbbj5Dzxvy/UoB2Mkj/vQDNE6dqlaaM8NhURReQGylWV+Cm3XZy83EVPC+LIA20FDa3yyoyJiktS2Wa+Vo6vAzOJ19bgWJbyPon6X+R8ofb27T7onSsFGnA6dDsFKlf6Li8cT7Hk8+XiNDe/MM/CfG4W3+u1gAaFnubiuXjUPZqr4EGQjR3Vc4biSdQ/vL/h4yWwq2rDfDBFbX2Cp7LWatwWjR7L+8UItL0ohe96EUvetGLXvSiF73oRS960Yte9KIXvejld/k/jRG0H76mLHgAAAAASUVORK5CYII="
}, kI = {
  team_id: -1,
  oe: 73.1,
  de: 65.2,
  tempo: 43.5
}, RI = {
  team_id: -2,
  oe: 63.4,
  de: 70.2,
  tempo: 39.5
}, II = {
  game_id: -1,
  home_team_id: -1,
  away_team_id: -1,
  home_team_score: 72.3,
  away_team_score: 64.1
}, $I = ["p-4", "rounded-lg"], LI = {}, jI = ["flex", "text-sm", "cursor-pointer"], DI = {
  alignContent: "center",
  alignItems: "center"
}, FI = (e) => {
  const t = e.team || Ai;
  return /* @__PURE__ */ _(dt, {
    viusage: "backdrop",
    hoverAnimate: !0,
    classNames: [...e.overrideClasses ? [] : $I, ...e.classNames || []],
    style: {
      ...e.overrideStyle ? {} : LI,
      ...e.style
    },
    children: /* @__PURE__ */ V("div", {
      className: [...e.overrideClasses ? [] : jI, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : DI,
        ...e.style
      },
      children: [/* @__PURE__ */ _("img", {
        height: 24,
        width: 24,
        src: t.TeamLogoUrl
      }), "\u2003", t.Name]
    })
  });
}, VI = ["p-4", "rounded-lg"], BI = {}, UI = ["grid", "gap-2", "overflow-y-scroll"], zI = {
  gridTemplateColumns: "1fr"
}, m0 = (e) => {
  const t = e.Label || /* @__PURE__ */ _(e1, {
    children: "Top Teams"
  }), n = (e.teams || Array(25).fill(Ai)).map((i) => /* @__PURE__ */ _(FI, {
    team: i
  }));
  return /* @__PURE__ */ _(dt, {
    viusage: "wrap",
    classNames: [...e.overrideClasses ? [] : VI, ...e.classNames || []],
    style: {
      ...e.overrideStyle ? {} : BI,
      ...e.style
    },
    children: /* @__PURE__ */ V("div", {
      className: [...e.overrideClasses ? [] : UI, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : zI,
        ...e.style
      },
      children: [/* @__PURE__ */ V("div", {
        children: [/* @__PURE__ */ _("h2", {
          style: {
            textAlign: "start"
          },
          className: "text-lg",
          children: t
        }), /* @__PURE__ */ _("hr", {})]
      }), /* @__PURE__ */ _("div", {
        className: "gap-2",
        style: {
          overflow: "scroll",
          display: "grid",
          gridTemplateColumns: "1fr"
        },
        children: n
      })]
    })
  });
}, WI = ["grid", "gap-4"], HI = {
  gridTemplateColumns: "1fr 1fr 2fr",
  gridTemplateRows: "1fr"
}, qI = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : WI, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : HI,
    ...e.style
  },
  children: [/* @__PURE__ */ _(m0, {
    style: {
      height: "100%",
      overflow: "scroll"
    }
  }), /* @__PURE__ */ _(m0, {
    style: {
      height: "100%",
      overflow: "scroll"
    }
  }), /* @__PURE__ */ _(NI, {
    style: {
      height: "100%",
      overflow: "scroll"
    }
  })]
}), YI = ["grid", "gap-4", "p-4"], GI = {
  gridTemplateColumns: "1fr"
}, KI = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : YI, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : GI,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(qI, {
      style: {
        height: "300px"
      }
    })
  }), /* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(xI, {})
  })]
}), XI = [], ZI = {}, JI = [], QI = {}, e5 = (e) => /* @__PURE__ */ _(dt, {
  viusage: e.viusage || "backdrop",
  classNames: [...e.overrideClasses ? [] : XI, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : ZI,
    ...e.style
  },
  children: /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : JI, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : QI,
      ...e.style
    },
    children: [/* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(yx, {})
    }), /* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(KI, {})
    })]
  })
}), t5 = ["h-screen", "w-screen", "grid", "justify-items-center", "items-center", "text-drk-gray-900"], r5 = {
  gridTemplateColumns: "1fr 6fr"
}, kee = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : t5, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : r5,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    style: {
      height: "100%",
      width: "100%"
    },
    children: /* @__PURE__ */ _($b, {
      style: {
        height: "100%"
      }
    })
  }), /* @__PURE__ */ _("div", {
    style: {
      height: "100%",
      width: "100%"
    },
    children: /* @__PURE__ */ _(e5, {
      style: {
        width: "100%",
        height: "100%"
      }
    })
  })]
}), n5 = "", i5 = {}, Ree = ({
  style: e
}) => /* @__PURE__ */ _("div", {
  className: n5,
  style: {
    ...i5,
    ...e
  }
}), a5 = ["flex"], o5 = {}, fh = (e) => {
  const t = e.date || new Date(), r = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], n = xi("navigate");
  return /* @__PURE__ */ V("div", {
    className: [`text-${n}-500`, ...e.overrideClasses ? [] : a5, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : o5,
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
}, s5 = ["p-4", "rounded-lg"], u5 = {}, c5 = ["grid", "gap-2"], l5 = {
  gridTemplateRows: "1fr 2fr"
}, f5 = (e) => {
  const t = e.rank || -1, r = e.team || Ai;
  return /* @__PURE__ */ _(dt, {
    viusage: "backdrop",
    classNames: [...e.overrideClasses ? [] : s5, ...e.classNames || []],
    style: {
      ...e.overrideStyle ? {} : u5,
      ...e.style
    },
    children: /* @__PURE__ */ V("div", {
      className: [...e.overrideClasses ? [] : c5, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : l5,
        ...e.style
      },
      children: [/* @__PURE__ */ V("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          alignContent: "center"
        },
        children: [/* @__PURE__ */ V("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ V("h2", {
            children: ["#", t]
          }), e.trend ? /* @__PURE__ */ _(D2, {
            color: "#5CD0B4"
          }) : /* @__PURE__ */ _(I2, {
            color: "#FD3535"
          })]
        }), /* @__PURE__ */ V("div", {
          style: {
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            fontSize: 14
          },
          children: [/* @__PURE__ */ _("img", {
            height: 24,
            width: 24,
            src: r.TeamLogoUrl
          }), "\u2003", r.Name]
        })]
      }), /* @__PURE__ */ V("div", {
        className: "gap-4",
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignContent: "center",
          fontSize: 12
        },
        children: [/* @__PURE__ */ V("div", {
          className: "rounded p-2",
          style: {
            background: "#01987528"
          },
          children: [/* @__PURE__ */ _("h2", {
            children: "22.8"
          }), /* @__PURE__ */ _("h2", {
            style: {
              color: "#ffffff65"
            },
            children: "Power Rating"
          })]
        }), /* @__PURE__ */ V("div", {
          className: "rounded p-2",
          style: {
            background: "#01987528"
          },
          children: [/* @__PURE__ */ _("h2", {
            children: "22.8"
          }), /* @__PURE__ */ _("h2", {
            style: {
              color: "#ffffff65"
            },
            children: "Off Efficiency"
          })]
        }), /* @__PURE__ */ V("div", {
          className: "rounded p-2",
          style: {
            background: "#01987528"
          },
          children: [/* @__PURE__ */ _("h2", {
            children: "22.8"
          }), /* @__PURE__ */ _("h2", {
            style: {
              color: "#ffffff65"
            },
            children: "Def Efficiency"
          })]
        })]
      })]
    })
  });
}, d5 = ["p-4"], h5 = {}, p5 = ["grid", "gap-2"], v5 = {
  gridTemplateColumns: "1fr"
}, g5 = (e) => /* @__PURE__ */ _(dt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : d5, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : h5,
    ...e.style
  },
  children: /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : p5, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : v5,
      ...e.style
    },
    children: [/* @__PURE__ */ _("h2", {
      className: "text-xl",
      children: "Top 25"
    }), /* @__PURE__ */ V("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      },
      children: [/* @__PURE__ */ _("div", {
        className: "text-lg",
        style: {
          borderBottom: "1px solid #019875"
        },
        children: "Gameday Guru"
      }), /* @__PURE__ */ _("div", {
        className: "text-xl",
        style: {},
        children: "AP"
      })]
    }), /* @__PURE__ */ _("hr", {}), /* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(fh, {})
    }), /* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(f5, {})
    })]
  })
}), m5 = ["rounded-lg"], y5 = {
  pointerEvents: "none",
  position: "absolute",
  left: 0,
  top: 0
}, b5 = (e) => (xi(e.viusage), /* @__PURE__ */ V("div", {
  style: {
    display: "relative"
  },
  children: [e.children, /* @__PURE__ */ _("div", {
    className: [...e.overrideClasses ? [] : m5, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : y5,
      ...e.style,
      background: "linear-gradient(to right, #005E4823, #005E48ff)"
    }
  })]
})), x5 = [], w5 = {}, S5 = [], A5 = {
  height: "250px"
}, _5 = (e) => /* @__PURE__ */ _(dt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : x5, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : w5,
    ...e.style
  },
  children: /* @__PURE__ */ _("div", {
    className: [...e.overrideClasses ? [] : S5, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : A5,
      ...e.style
    },
    children: /* @__PURE__ */ _(rC, {
      style: {
        height: "100%"
      },
      Entries: [/* @__PURE__ */ _(b5, {
        style: {
          height: "100%",
          width: "100%"
        },
        viusage: "navigate",
        children: "a"
      })]
    })
  })
}), O5 = ["grid"], E5 = {
  gridTemplateColumns: "1fr 1fr 1fr",
  alignContent: "center",
  justifyContent: "center",
  justifyItems: "center"
}, T5 = (e) => {
  const t = e.Home || Ai, r = e.Away || Sx, n = xi("navigate");
  return /* @__PURE__ */ V("div", {
    className: [`text-${n}-500`, ...e.overrideClasses ? [] : O5, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : E5,
      ...e.style
    },
    children: [/* @__PURE__ */ V("div", {
      children: [/* @__PURE__ */ V("div", {
        style: {
          color: "white",
          display: "grid",
          justifyContent: "center",
          justifyItems: "center"
        },
        children: [/* @__PURE__ */ _("img", {
          width: 60,
          src: t.TeamLogoUrl
        }), /* @__PURE__ */ _("br", {}), t.Name]
      }), /* @__PURE__ */ _("h2", {
        className: "text-lg",
        children: "Home"
      })]
    }), /* @__PURE__ */ _("div", {
      style: {
        display: "grid",
        alignContent: "center"
      },
      children: /* @__PURE__ */ _(lh, {})
    }), /* @__PURE__ */ V("div", {
      children: [/* @__PURE__ */ V("div", {
        style: {
          color: "white",
          display: "grid",
          justifyContent: "center",
          justifyItems: "center"
        },
        children: [/* @__PURE__ */ _("img", {
          width: 60,
          src: r.TeamLogoUrl
        }), /* @__PURE__ */ _("br", {}), r.Name]
      }), /* @__PURE__ */ _("h2", {
        className: "text-lg",
        children: "Away"
      })]
    })]
  });
}, P5 = ["grid", "gap-2"], C5 = {}, M5 = (e) => {
  const t = e.homeScore || 72, r = e.awayScore || 63;
  return /* @__PURE__ */ _(dt, {
    viusage: "backdrop",
    classNames: ["rounded-lg", "p-4", "text-xs"],
    children: /* @__PURE__ */ V("div", {
      className: [...e.overrideClasses ? [] : P5, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : C5,
        ...e.style
      },
      children: [/* @__PURE__ */ _("h2", {
        className: "text-lg",
        children: "Score Projection"
      }), /* @__PURE__ */ V("div", {
        style: {
          display: "grid",
          alignContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "left",
          fontSize: 10
        },
        children: [/* @__PURE__ */ V("div", {
          children: ["Home Score", /* @__PURE__ */ _("br", {}), /* @__PURE__ */ V("div", {
            className: "rounded-l-full",
            style: {
              width: `${Math.floor(t / ((t + r) / 2) * 100)}%`,
              justifySelf: "right",
              padding: "2px",
              background: "#00C192"
            },
            children: ["\u2003\u2003", t]
          })]
        }), /* @__PURE__ */ V("div", {
          children: ["Away Score", /* @__PURE__ */ _("br", {}), /* @__PURE__ */ V("div", {
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
      }), /* @__PURE__ */ _("br", {}), /* @__PURE__ */ V("div", {
        style: {
          textAlign: "left",
          fontSize: 10
        },
        children: ["Total Points", /* @__PURE__ */ V("div", {
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
var Ax = { exports: {} };
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
})(Ax);
const We = Ax.exports;
function N5(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ft = N5;
function ko(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ko = function(r) {
    return typeof r;
  } : ko = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ko(e);
}
var k5 = ["viewBox", "children"], R5 = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "type", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], dh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], ge = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Kr(t) && (i = t.props), !Ft(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    (R5.includes(o) || n && k5.includes(o) || r && dh.includes(o)) && (a[o] = i[o]);
  }), a;
}, fs = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Kr(t) && (n = t.props), !Ft(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    dh.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, I5 = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Va = function(t, r, n) {
  if (!Ft(t) || ko(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    dh.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = I5(o, r, n));
  }), i;
};
function $5(e, t) {
  if (e == null)
    return {};
  var r = L5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function L5(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ml(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, s = $5(e, ["children", "width", "height", "viewBox", "className", "style"]), u = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, c = We("recharts-surface", a);
  return /* @__PURE__ */ V("svg", {
    ...ge(s, !0, !0),
    className: c,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height),
    version: "1.1",
    children: [/* @__PURE__ */ _("title", {
      children: e.title
    }), /* @__PURE__ */ _("desc", {
      children: e.desc
    }), t]
  });
}
function j5(e, t) {
  if (e == null)
    return {};
  var r = D5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function D5(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Xe = /* @__PURE__ */ ye.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = j5(e, ["children", "className"]), a = We("recharts-layer", n);
  return /* @__PURE__ */ _("g", {
    className: a,
    ...ge(i, !0),
    ref: t,
    children: r
  });
}), F5 = typeof Qa == "object" && Qa && Qa.Object === Object && Qa, _x = F5, V5 = _x, B5 = typeof self == "object" && self && self.Object === Object && self, U5 = V5 || B5 || Function("return this")(), mr = U5, z5 = mr, W5 = z5.Symbol, Ba = W5, y0 = Ba, Ox = Object.prototype, H5 = Ox.hasOwnProperty, q5 = Ox.toString, zi = y0 ? y0.toStringTag : void 0;
function Y5(e) {
  var t = H5.call(e, zi), r = e[zi];
  try {
    e[zi] = void 0;
    var n = !0;
  } catch {
  }
  var i = q5.call(e);
  return n && (t ? e[zi] = r : delete e[zi]), i;
}
var G5 = Y5, K5 = Object.prototype, X5 = K5.toString;
function Z5(e) {
  return X5.call(e);
}
var J5 = Z5, b0 = Ba, Q5 = G5, e$ = J5, t$ = "[object Null]", r$ = "[object Undefined]", x0 = b0 ? b0.toStringTag : void 0;
function n$(e) {
  return e == null ? e === void 0 ? r$ : t$ : x0 && x0 in Object(e) ? Q5(e) : e$(e);
}
var kr = n$, i$ = kr, a$ = Ft, o$ = "[object AsyncFunction]", s$ = "[object Function]", u$ = "[object GeneratorFunction]", c$ = "[object Proxy]";
function l$(e) {
  if (!a$(e))
    return !1;
  var t = i$(e);
  return t == s$ || t == u$ || t == o$ || t == c$;
}
var de = l$;
function f$() {
  this.__data__ = [], this.size = 0;
}
var d$ = f$;
function h$(e, t) {
  return e === t || e !== e && t !== t;
}
var hh = h$, p$ = hh;
function v$(e, t) {
  for (var r = e.length; r--; )
    if (p$(e[r][0], t))
      return r;
  return -1;
}
var xu = v$, g$ = xu, m$ = Array.prototype, y$ = m$.splice;
function b$(e) {
  var t = this.__data__, r = g$(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : y$.call(t, r, 1), --this.size, !0;
}
var x$ = b$, w$ = xu;
function S$(e) {
  var t = this.__data__, r = w$(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var A$ = S$, _$ = xu;
function O$(e) {
  return _$(this.__data__, e) > -1;
}
var E$ = O$, T$ = xu;
function P$(e, t) {
  var r = this.__data__, n = T$(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var C$ = P$, M$ = d$, N$ = x$, k$ = A$, R$ = E$, I$ = C$;
function _i(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
_i.prototype.clear = M$;
_i.prototype.delete = N$;
_i.prototype.get = k$;
_i.prototype.has = R$;
_i.prototype.set = I$;
var wu = _i, $$ = wu;
function L$() {
  this.__data__ = new $$(), this.size = 0;
}
var j$ = L$;
function D$(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var F$ = D$;
function V$(e) {
  return this.__data__.get(e);
}
var B$ = V$;
function U$(e) {
  return this.__data__.has(e);
}
var z$ = U$, W$ = mr, H$ = W$["__core-js_shared__"], q$ = H$, Ac = q$, w0 = function() {
  var e = /[^.]+$/.exec(Ac && Ac.keys && Ac.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Y$(e) {
  return !!w0 && w0 in e;
}
var G$ = Y$, K$ = Function.prototype, X$ = K$.toString;
function Z$(e) {
  if (e != null) {
    try {
      return X$.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ex = Z$, J$ = de, Q$ = G$, eL = Ft, tL = Ex, rL = /[\\^$.*+?()[\]{}|]/g, nL = /^\[object .+?Constructor\]$/, iL = Function.prototype, aL = Object.prototype, oL = iL.toString, sL = aL.hasOwnProperty, uL = RegExp(
  "^" + oL.call(sL).replace(rL, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cL(e) {
  if (!eL(e) || Q$(e))
    return !1;
  var t = J$(e) ? uL : nL;
  return t.test(tL(e));
}
var lL = cL;
function fL(e, t) {
  return e == null ? void 0 : e[t];
}
var dL = fL, hL = lL, pL = dL;
function vL(e, t) {
  var r = pL(e, t);
  return hL(r) ? r : void 0;
}
var Rn = vL, gL = Rn, mL = mr, yL = gL(mL, "Map"), ph = yL, bL = Rn, xL = bL(Object, "create"), Su = xL, S0 = Su;
function wL() {
  this.__data__ = S0 ? S0(null) : {}, this.size = 0;
}
var SL = wL;
function AL(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _L = AL, OL = Su, EL = "__lodash_hash_undefined__", TL = Object.prototype, PL = TL.hasOwnProperty;
function CL(e) {
  var t = this.__data__;
  if (OL) {
    var r = t[e];
    return r === EL ? void 0 : r;
  }
  return PL.call(t, e) ? t[e] : void 0;
}
var ML = CL, NL = Su, kL = Object.prototype, RL = kL.hasOwnProperty;
function IL(e) {
  var t = this.__data__;
  return NL ? t[e] !== void 0 : RL.call(t, e);
}
var $L = IL, LL = Su, jL = "__lodash_hash_undefined__";
function DL(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = LL && t === void 0 ? jL : t, this;
}
var FL = DL, VL = SL, BL = _L, UL = ML, zL = $L, WL = FL;
function Oi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Oi.prototype.clear = VL;
Oi.prototype.delete = BL;
Oi.prototype.get = UL;
Oi.prototype.has = zL;
Oi.prototype.set = WL;
var HL = Oi, A0 = HL, qL = wu, YL = ph;
function GL() {
  this.size = 0, this.__data__ = {
    hash: new A0(),
    map: new (YL || qL)(),
    string: new A0()
  };
}
var KL = GL;
function XL(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var ZL = XL, JL = ZL;
function QL(e, t) {
  var r = e.__data__;
  return JL(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Au = QL, e3 = Au;
function t3(e) {
  var t = e3(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var r3 = t3, n3 = Au;
function i3(e) {
  return n3(this, e).get(e);
}
var a3 = i3, o3 = Au;
function s3(e) {
  return o3(this, e).has(e);
}
var u3 = s3, c3 = Au;
function l3(e, t) {
  var r = c3(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var f3 = l3, d3 = KL, h3 = r3, p3 = a3, v3 = u3, g3 = f3;
function Ei(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ei.prototype.clear = d3;
Ei.prototype.delete = h3;
Ei.prototype.get = p3;
Ei.prototype.has = v3;
Ei.prototype.set = g3;
var vh = Ei, m3 = wu, y3 = ph, b3 = vh, x3 = 200;
function w3(e, t) {
  var r = this.__data__;
  if (r instanceof m3) {
    var n = r.__data__;
    if (!y3 || n.length < x3 - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new b3(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var S3 = w3, A3 = wu, _3 = j$, O3 = F$, E3 = B$, T3 = z$, P3 = S3;
function Ti(e) {
  var t = this.__data__ = new A3(e);
  this.size = t.size;
}
Ti.prototype.clear = _3;
Ti.prototype.delete = O3;
Ti.prototype.get = E3;
Ti.prototype.has = T3;
Ti.prototype.set = P3;
var Tx = Ti, C3 = "__lodash_hash_undefined__";
function M3(e) {
  return this.__data__.set(e, C3), this;
}
var N3 = M3;
function k3(e) {
  return this.__data__.has(e);
}
var R3 = k3, I3 = vh, $3 = N3, L3 = R3;
function ds(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new I3(); ++t < r; )
    this.add(e[t]);
}
ds.prototype.add = ds.prototype.push = $3;
ds.prototype.has = L3;
var Px = ds;
function j3(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Cx = j3;
function D3(e, t) {
  return e.has(t);
}
var Mx = D3, F3 = Px, V3 = Cx, B3 = Mx, U3 = 1, z3 = 2;
function W3(e, t, r, n, i, a) {
  var o = r & U3, s = e.length, u = t.length;
  if (s != u && !(o && u > s))
    return !1;
  var c = a.get(e), l = a.get(t);
  if (c && l)
    return c == t && l == e;
  var f = -1, d = !0, p = r & z3 ? new F3() : void 0;
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
      if (!V3(t, function(y, w) {
        if (!B3(p, w) && (v === y || i(v, y, r, n, a)))
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
var Nx = W3, H3 = mr, q3 = H3.Uint8Array, Y3 = q3;
function G3(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var K3 = G3;
function X3(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var gh = X3, _0 = Ba, O0 = Y3, Z3 = hh, J3 = Nx, Q3 = K3, e4 = gh, t4 = 1, r4 = 2, n4 = "[object Boolean]", i4 = "[object Date]", a4 = "[object Error]", o4 = "[object Map]", s4 = "[object Number]", u4 = "[object RegExp]", c4 = "[object Set]", l4 = "[object String]", f4 = "[object Symbol]", d4 = "[object ArrayBuffer]", h4 = "[object DataView]", E0 = _0 ? _0.prototype : void 0, _c = E0 ? E0.valueOf : void 0;
function p4(e, t, r, n, i, a, o) {
  switch (r) {
    case h4:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case d4:
      return !(e.byteLength != t.byteLength || !a(new O0(e), new O0(t)));
    case n4:
    case i4:
    case s4:
      return Z3(+e, +t);
    case a4:
      return e.name == t.name && e.message == t.message;
    case u4:
    case l4:
      return e == t + "";
    case o4:
      var s = Q3;
    case c4:
      var u = n & t4;
      if (s || (s = e4), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= r4, o.set(e, t);
      var l = J3(s(e), s(t), n, i, a, o);
      return o.delete(e), l;
    case f4:
      if (_c)
        return _c.call(e) == _c.call(t);
  }
  return !1;
}
var v4 = p4;
function g4(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var kx = g4, m4 = Array.isArray, Re = m4, y4 = kx, b4 = Re;
function x4(e, t, r) {
  var n = t(e);
  return b4(e) ? n : y4(n, r(e));
}
var w4 = x4;
function S4(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var A4 = S4;
function _4() {
  return [];
}
var O4 = _4, E4 = A4, T4 = O4, P4 = Object.prototype, C4 = P4.propertyIsEnumerable, T0 = Object.getOwnPropertySymbols, M4 = T0 ? function(e) {
  return e == null ? [] : (e = Object(e), E4(T0(e), function(t) {
    return C4.call(e, t);
  }));
} : T4, N4 = M4;
function k4(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var R4 = k4;
function I4(e) {
  return e != null && typeof e == "object";
}
var Rr = I4, $4 = kr, L4 = Rr, j4 = "[object Arguments]";
function D4(e) {
  return L4(e) && $4(e) == j4;
}
var F4 = D4, P0 = F4, V4 = Rr, Rx = Object.prototype, B4 = Rx.hasOwnProperty, U4 = Rx.propertyIsEnumerable, z4 = P0(function() {
  return arguments;
}()) ? P0 : function(e) {
  return V4(e) && B4.call(e, "callee") && !U4.call(e, "callee");
}, mh = z4, hs = { exports: {} };
function W4() {
  return !1;
}
var H4 = W4;
(function(e, t) {
  var r = mr, n = H4, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
  e.exports = c;
})(hs, hs.exports);
var q4 = 9007199254740991, Y4 = /^(?:0|[1-9]\d*)$/;
function G4(e, t) {
  var r = typeof e;
  return t = t == null ? q4 : t, !!t && (r == "number" || r != "symbol" && Y4.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var yh = G4, K4 = 9007199254740991;
function X4(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= K4;
}
var bh = X4, Z4 = kr, J4 = bh, Q4 = Rr, ej = "[object Arguments]", tj = "[object Array]", rj = "[object Boolean]", nj = "[object Date]", ij = "[object Error]", aj = "[object Function]", oj = "[object Map]", sj = "[object Number]", uj = "[object Object]", cj = "[object RegExp]", lj = "[object Set]", fj = "[object String]", dj = "[object WeakMap]", hj = "[object ArrayBuffer]", pj = "[object DataView]", vj = "[object Float32Array]", gj = "[object Float64Array]", mj = "[object Int8Array]", yj = "[object Int16Array]", bj = "[object Int32Array]", xj = "[object Uint8Array]", wj = "[object Uint8ClampedArray]", Sj = "[object Uint16Array]", Aj = "[object Uint32Array]", Ue = {};
Ue[vj] = Ue[gj] = Ue[mj] = Ue[yj] = Ue[bj] = Ue[xj] = Ue[wj] = Ue[Sj] = Ue[Aj] = !0;
Ue[ej] = Ue[tj] = Ue[hj] = Ue[rj] = Ue[pj] = Ue[nj] = Ue[ij] = Ue[aj] = Ue[oj] = Ue[sj] = Ue[uj] = Ue[cj] = Ue[lj] = Ue[fj] = Ue[dj] = !1;
function _j(e) {
  return Q4(e) && J4(e.length) && !!Ue[Z4(e)];
}
var Oj = _j;
function Ej(e) {
  return function(t) {
    return e(t);
  };
}
var Ix = Ej, Nl = { exports: {} };
(function(e, t) {
  var r = _x, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, s = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(Nl, Nl.exports);
var Tj = Oj, Pj = Ix, C0 = Nl.exports, M0 = C0 && C0.isTypedArray, Cj = M0 ? Pj(M0) : Tj, $x = Cj, Mj = R4, Nj = mh, kj = Re, Rj = hs.exports, Ij = yh, $j = $x, Lj = Object.prototype, jj = Lj.hasOwnProperty;
function Dj(e, t) {
  var r = kj(e), n = !r && Nj(e), i = !r && !n && Rj(e), a = !r && !n && !i && $j(e), o = r || n || i || a, s = o ? Mj(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || jj.call(e, c)) && !(o && (c == "length" || i && (c == "offset" || c == "parent") || a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ij(c, u))) && s.push(c);
  return s;
}
var Fj = Dj, Vj = Object.prototype;
function Bj(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Vj;
  return e === r;
}
var Uj = Bj;
function zj(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Lx = zj, Wj = Lx, Hj = Wj(Object.keys, Object), qj = Hj, Yj = Uj, Gj = qj, Kj = Object.prototype, Xj = Kj.hasOwnProperty;
function Zj(e) {
  if (!Yj(e))
    return Gj(e);
  var t = [];
  for (var r in Object(e))
    Xj.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Jj = Zj, Qj = de, e6 = bh;
function t6(e) {
  return e != null && e6(e.length) && !Qj(e);
}
var Ua = t6, r6 = Fj, n6 = Jj, i6 = Ua;
function a6(e) {
  return i6(e) ? r6(e) : n6(e);
}
var _u = a6, o6 = w4, s6 = N4, u6 = _u;
function c6(e) {
  return o6(e, u6, s6);
}
var l6 = c6, N0 = l6, f6 = 1, d6 = Object.prototype, h6 = d6.hasOwnProperty;
function p6(e, t, r, n, i, a) {
  var o = r & f6, s = N0(e), u = s.length, c = N0(t), l = c.length;
  if (u != l && !o)
    return !1;
  for (var f = u; f--; ) {
    var d = s[f];
    if (!(o ? d in t : h6.call(t, d)))
      return !1;
  }
  var p = a.get(e), v = a.get(t);
  if (p && v)
    return p == t && v == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var g = o; ++f < u; ) {
    d = s[f];
    var y = e[d], w = t[d];
    if (n)
      var x = o ? n(w, y, d, t, e, a) : n(y, w, d, e, t, a);
    if (!(x === void 0 ? y === w || i(y, w, r, n, a) : x)) {
      h = !1;
      break;
    }
    g || (g = d == "constructor");
  }
  if (h && !g) {
    var b = e.constructor, m = t.constructor;
    b != m && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof m == "function" && m instanceof m) && (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var v6 = p6, g6 = Rn, m6 = mr, y6 = g6(m6, "DataView"), b6 = y6, x6 = Rn, w6 = mr, S6 = x6(w6, "Promise"), A6 = S6, _6 = Rn, O6 = mr, E6 = _6(O6, "Set"), jx = E6, T6 = Rn, P6 = mr, C6 = T6(P6, "WeakMap"), M6 = C6, kl = b6, Rl = ph, Il = A6, $l = jx, Ll = M6, Dx = kr, Pi = Ex, k0 = "[object Map]", N6 = "[object Object]", R0 = "[object Promise]", I0 = "[object Set]", $0 = "[object WeakMap]", L0 = "[object DataView]", k6 = Pi(kl), R6 = Pi(Rl), I6 = Pi(Il), $6 = Pi($l), L6 = Pi(Ll), bn = Dx;
(kl && bn(new kl(new ArrayBuffer(1))) != L0 || Rl && bn(new Rl()) != k0 || Il && bn(Il.resolve()) != R0 || $l && bn(new $l()) != I0 || Ll && bn(new Ll()) != $0) && (bn = function(e) {
  var t = Dx(e), r = t == N6 ? e.constructor : void 0, n = r ? Pi(r) : "";
  if (n)
    switch (n) {
      case k6:
        return L0;
      case R6:
        return k0;
      case I6:
        return R0;
      case $6:
        return I0;
      case L6:
        return $0;
    }
  return t;
});
var j6 = bn, Oc = Tx, D6 = Nx, F6 = v4, V6 = v6, j0 = j6, D0 = Re, F0 = hs.exports, B6 = $x, U6 = 1, V0 = "[object Arguments]", B0 = "[object Array]", fo = "[object Object]", z6 = Object.prototype, U0 = z6.hasOwnProperty;
function W6(e, t, r, n, i, a) {
  var o = D0(e), s = D0(t), u = o ? B0 : j0(e), c = s ? B0 : j0(t);
  u = u == V0 ? fo : u, c = c == V0 ? fo : c;
  var l = u == fo, f = c == fo, d = u == c;
  if (d && F0(e)) {
    if (!F0(t))
      return !1;
    o = !0, l = !1;
  }
  if (d && !l)
    return a || (a = new Oc()), o || B6(e) ? D6(e, t, r, n, i, a) : F6(e, t, u, r, n, i, a);
  if (!(r & U6)) {
    var p = l && U0.call(e, "__wrapped__"), v = f && U0.call(t, "__wrapped__");
    if (p || v) {
      var h = p ? e.value() : e, g = v ? t.value() : t;
      return a || (a = new Oc()), i(h, g, r, n, a);
    }
  }
  return d ? (a || (a = new Oc()), V6(e, t, r, n, i, a)) : !1;
}
var H6 = W6, q6 = H6, z0 = Rr;
function Fx(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !z0(e) && !z0(t) ? e !== e && t !== t : q6(e, t, r, n, Fx, i);
}
var xh = Fx, Y6 = Tx, G6 = xh, K6 = 1, X6 = 2;
function Z6(e, t, r, n) {
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
      var f = new Y6();
      if (n)
        var d = n(c, l, u, e, t, f);
      if (!(d === void 0 ? G6(l, c, K6 | X6, n, f) : d))
        return !1;
    }
  }
  return !0;
}
var J6 = Z6, Q6 = Ft;
function eD(e) {
  return e === e && !Q6(e);
}
var Vx = eD, tD = Vx, rD = _u;
function nD(e) {
  for (var t = rD(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, tD(i)];
  }
  return t;
}
var iD = nD;
function aD(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Bx = aD, oD = J6, sD = iD, uD = Bx;
function cD(e) {
  var t = sD(e);
  return t.length == 1 && t[0][2] ? uD(t[0][0], t[0][1]) : function(r) {
    return r === e || oD(r, e, t);
  };
}
var lD = cD, fD = kr, dD = Rr, hD = "[object Symbol]";
function pD(e) {
  return typeof e == "symbol" || dD(e) && fD(e) == hD;
}
var Ci = pD, vD = Re, gD = Ci, mD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yD = /^\w*$/;
function bD(e, t) {
  if (vD(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || gD(e) ? !0 : yD.test(e) || !mD.test(e) || t != null && e in Object(t);
}
var wh = bD, Ux = vh, xD = "Expected a function";
function Sh(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(xD);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Sh.Cache || Ux)(), r;
}
Sh.Cache = Ux;
var wD = Sh, SD = wD, AD = 500;
function _D(e) {
  var t = SD(e, function(n) {
    return r.size === AD && r.clear(), n;
  }), r = t.cache;
  return t;
}
var OD = _D, ED = OD, TD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, PD = /\\(\\)?/g, CD = ED(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(TD, function(r, n, i, a) {
    t.push(i ? a.replace(PD, "$1") : n || r);
  }), t;
}), MD = CD;
function ND(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Ah = ND, W0 = Ba, kD = Ah, RD = Re, ID = Ci, $D = 1 / 0, H0 = W0 ? W0.prototype : void 0, q0 = H0 ? H0.toString : void 0;
function zx(e) {
  if (typeof e == "string")
    return e;
  if (RD(e))
    return kD(e, zx) + "";
  if (ID(e))
    return q0 ? q0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -$D ? "-0" : t;
}
var LD = zx, jD = LD;
function DD(e) {
  return e == null ? "" : jD(e);
}
var Wx = DD, FD = Re, VD = wh, BD = MD, UD = Wx;
function zD(e, t) {
  return FD(e) ? e : VD(e, t) ? [e] : BD(UD(e));
}
var Hx = zD, WD = Ci, HD = 1 / 0;
function qD(e) {
  if (typeof e == "string" || WD(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -HD ? "-0" : t;
}
var Ou = qD, YD = Hx, GD = Ou;
function KD(e, t) {
  t = YD(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[GD(t[r++])];
  return r && r == n ? e : void 0;
}
var _h = KD, XD = _h;
function ZD(e, t, r) {
  var n = e == null ? void 0 : XD(e, t);
  return n === void 0 ? r : n;
}
var Pt = ZD;
function JD(e, t) {
  return e != null && t in Object(e);
}
var QD = JD, e8 = Hx, t8 = mh, r8 = Re, n8 = yh, i8 = bh, a8 = Ou;
function o8(e, t, r) {
  t = e8(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = a8(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && i8(i) && n8(o, i) && (r8(e) || t8(e)));
}
var s8 = o8, u8 = QD, c8 = s8;
function l8(e, t) {
  return e != null && c8(e, t, u8);
}
var f8 = l8, d8 = xh, h8 = Pt, p8 = f8, v8 = wh, g8 = Vx, m8 = Bx, y8 = Ou, b8 = 1, x8 = 2;
function w8(e, t) {
  return v8(e) && g8(t) ? m8(y8(e), t) : function(r) {
    var n = h8(r, e);
    return n === void 0 && n === t ? p8(r, e) : d8(t, n, b8 | x8);
  };
}
var S8 = w8;
function A8(e) {
  return e;
}
var Mi = A8;
function _8(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var O8 = _8, E8 = _h;
function T8(e) {
  return function(t) {
    return E8(t, e);
  };
}
var P8 = T8, C8 = O8, M8 = P8, N8 = wh, k8 = Ou;
function R8(e) {
  return N8(e) ? C8(k8(e)) : M8(e);
}
var I8 = R8, $8 = lD, L8 = S8, j8 = Mi, D8 = Re, F8 = I8;
function V8(e) {
  return typeof e == "function" ? e : e == null ? j8 : typeof e == "object" ? D8(e) ? L8(e[0], e[1]) : $8(e) : F8(e);
}
var yr = V8;
function B8(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var qx = B8;
function U8(e) {
  return e !== e;
}
var z8 = U8;
function W8(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var H8 = W8, q8 = qx, Y8 = z8, G8 = H8;
function K8(e, t, r) {
  return t === t ? G8(e, t, r) : q8(e, Y8, r);
}
var X8 = K8, Z8 = X8;
function J8(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && Z8(e, t, 0) > -1;
}
var Q8 = J8;
function e7(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var t7 = e7;
function r7() {
}
var n7 = r7, Ec = jx, i7 = n7, a7 = gh, o7 = 1 / 0, s7 = Ec && 1 / a7(new Ec([, -0]))[1] == o7 ? function(e) {
  return new Ec(e);
} : i7, u7 = s7, c7 = Px, l7 = Q8, f7 = t7, d7 = Mx, h7 = u7, p7 = gh, v7 = 200;
function g7(e, t, r) {
  var n = -1, i = l7, a = e.length, o = !0, s = [], u = s;
  if (r)
    o = !1, i = f7;
  else if (a >= v7) {
    var c = t ? null : h7(e);
    if (c)
      return p7(c);
    o = !1, i = d7, u = new c7();
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
var m7 = g7, y7 = yr, b7 = m7;
function x7(e, t) {
  return e && e.length ? b7(e, y7(t)) : [];
}
var ps = x7;
function w7(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var S7 = w7, A7 = S7;
function _7(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : A7(e, t, r);
}
var O7 = _7, E7 = "\\ud800-\\udfff", T7 = "\\u0300-\\u036f", P7 = "\\ufe20-\\ufe2f", C7 = "\\u20d0-\\u20ff", M7 = T7 + P7 + C7, N7 = "\\ufe0e\\ufe0f", k7 = "\\u200d", R7 = RegExp("[" + k7 + E7 + M7 + N7 + "]");
function I7(e) {
  return R7.test(e);
}
var Yx = I7;
function $7(e) {
  return e.split("");
}
var L7 = $7, Gx = "\\ud800-\\udfff", j7 = "\\u0300-\\u036f", D7 = "\\ufe20-\\ufe2f", F7 = "\\u20d0-\\u20ff", V7 = j7 + D7 + F7, B7 = "\\ufe0e\\ufe0f", U7 = "[" + Gx + "]", jl = "[" + V7 + "]", Dl = "\\ud83c[\\udffb-\\udfff]", z7 = "(?:" + jl + "|" + Dl + ")", Kx = "[^" + Gx + "]", Xx = "(?:\\ud83c[\\udde6-\\uddff]){2}", Zx = "[\\ud800-\\udbff][\\udc00-\\udfff]", W7 = "\\u200d", Jx = z7 + "?", Qx = "[" + B7 + "]?", H7 = "(?:" + W7 + "(?:" + [Kx, Xx, Zx].join("|") + ")" + Qx + Jx + ")*", q7 = Qx + Jx + H7, Y7 = "(?:" + [Kx + jl + "?", jl, Xx, Zx, U7].join("|") + ")", G7 = RegExp(Dl + "(?=" + Dl + ")|" + Y7 + q7, "g");
function K7(e) {
  return e.match(G7) || [];
}
var X7 = K7, Z7 = L7, J7 = Yx, Q7 = X7;
function e9(e) {
  return J7(e) ? Q7(e) : Z7(e);
}
var t9 = e9, r9 = O7, n9 = Yx, i9 = t9, a9 = Wx;
function o9(e) {
  return function(t) {
    t = a9(t);
    var r = n9(t) ? i9(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? r9(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var s9 = o9, u9 = s9, c9 = u9("toUpperCase"), Eu = c9;
const Fl = Math.PI, Vl = 2 * Fl, xn = 1e-6, l9 = Vl - xn;
function Bl() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function Tu() {
  return new Bl();
}
Bl.prototype = Tu.prototype = {
  constructor: Bl,
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
    else if (f > xn)
      if (!(Math.abs(l * s - u * c) > xn) || !i)
        this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
      else {
        var d = r - a, p = n - o, v = s * s + u * u, h = d * d + p * p, g = Math.sqrt(v), y = Math.sqrt(f), w = i * Math.tan((Fl - Math.acos((v + f - h) / (2 * g * y))) / 2), x = w / y, b = w / g;
        Math.abs(x - 1) > xn && (this._ += "L" + (e + x * c) + "," + (t + x * l)), this._ += "A" + i + "," + i + ",0,0," + +(l * d > c * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * u);
      }
  },
  arc: function(e, t, r, n, i, a) {
    e = +e, t = +t, r = +r, a = !!a;
    var o = r * Math.cos(n), s = r * Math.sin(n), u = e + o, c = t + s, l = 1 ^ a, f = a ? n - i : i - n;
    if (r < 0)
      throw new Error("negative radius: " + r);
    this._x1 === null ? this._ += "M" + u + "," + c : (Math.abs(this._x1 - u) > xn || Math.abs(this._y1 - c) > xn) && (this._ += "L" + u + "," + c), r && (f < 0 && (f = f % Vl + Vl), f > l9 ? this._ += "A" + r + "," + r + ",0,1," + l + "," + (e - o) + "," + (t - s) + "A" + r + "," + r + ",0,1," + l + "," + (this._x1 = u) + "," + (this._y1 = c) : f > xn && (this._ += "A" + r + "," + r + ",0," + +(f >= Fl) + "," + l + "," + (this._x1 = e + r * Math.cos(i)) + "," + (this._y1 = t + r * Math.sin(i))));
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
var vs = Math.PI, Pu = 2 * vs;
function Oh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ew(e) {
  this._context = e;
}
ew.prototype = {
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
function Cu(e) {
  return new ew(e);
}
function tw(e) {
  return e[0];
}
function rw(e) {
  return e[1];
}
function nw(e, t) {
  var r = Fe(!0), n = null, i = Cu, a = null;
  e = typeof e == "function" ? e : e === void 0 ? tw : Fe(e), t = typeof t == "function" ? t : t === void 0 ? rw : Fe(t);
  function o(s) {
    var u, c = (s = Oh(s)).length, l, f = !1, d;
    for (n == null && (a = i(d = Tu())), u = 0; u <= c; ++u)
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
function ho(e, t, r) {
  var n = null, i = Fe(!0), a = null, o = Cu, s = null;
  e = typeof e == "function" ? e : e === void 0 ? tw : Fe(+e), t = typeof t == "function" ? t : Fe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? rw : Fe(+r);
  function u(l) {
    var f, d, p, v = (l = Oh(l)).length, h, g = !1, y, w = new Array(v), x = new Array(v);
    for (a == null && (s = o(y = Tu())), f = 0; f <= v; ++f) {
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
    if (y)
      return s = null, y + "" || null;
  }
  function c() {
    return nw().defined(i).curve(o).context(a);
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
const Eh = {
  draw: function(e, t) {
    var r = Math.sqrt(t / vs);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Pu);
  }
}, f9 = {
  draw: function(e, t) {
    var r = Math.sqrt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
};
var iw = Math.sqrt(1 / 3), d9 = iw * 2;
const h9 = {
  draw: function(e, t) {
    var r = Math.sqrt(t / d9), n = r * iw;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
};
var p9 = 0.8908130915292852, aw = Math.sin(vs / 10) / Math.sin(7 * vs / 10), v9 = Math.sin(Pu / 10) * aw, g9 = -Math.cos(Pu / 10) * aw;
const m9 = {
  draw: function(e, t) {
    var r = Math.sqrt(t * p9), n = v9 * r, i = g9 * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (var a = 1; a < 5; ++a) {
      var o = Pu * a / 5, s = Math.cos(o), u = Math.sin(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * i, u * n + s * i);
    }
    e.closePath();
  }
}, y9 = {
  draw: function(e, t) {
    var r = Math.sqrt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
};
var Tc = Math.sqrt(3);
const b9 = {
  draw: function(e, t) {
    var r = -Math.sqrt(t / (Tc * 3));
    e.moveTo(0, r * 2), e.lineTo(-Tc * r, -r), e.lineTo(Tc * r, -r), e.closePath();
  }
};
var Bt = -0.5, Ut = Math.sqrt(3) / 2, Ul = 1 / Math.sqrt(12), x9 = (Ul / 2 + 1) * 3;
const w9 = {
  draw: function(e, t) {
    var r = Math.sqrt(t / x9), n = r / 2, i = r * Ul, a = n, o = r * Ul + r, s = -a, u = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, u), e.lineTo(Bt * n - Ut * i, Ut * n + Bt * i), e.lineTo(Bt * a - Ut * o, Ut * a + Bt * o), e.lineTo(Bt * s - Ut * u, Ut * s + Bt * u), e.lineTo(Bt * n + Ut * i, Bt * i - Ut * n), e.lineTo(Bt * a + Ut * o, Bt * o - Ut * a), e.lineTo(Bt * s + Ut * u, Bt * u - Ut * s), e.closePath();
  }
};
function S9(e, t) {
  var r = null;
  e = typeof e == "function" ? e : Fe(e || Eh), t = typeof t == "function" ? t : Fe(t === void 0 ? 64 : +t);
  function n() {
    var i;
    if (r || (r = i = Tu()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i)
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
function gs() {
}
function ms(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function ow(e) {
  this._context = e;
}
ow.prototype = {
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
        ms(this, this._x1, this._y1);
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
        ms(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function A9(e) {
  return new ow(e);
}
function sw(e) {
  this._context = e;
}
sw.prototype = {
  areaStart: gs,
  areaEnd: gs,
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
        ms(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function _9(e) {
  return new sw(e);
}
function uw(e) {
  this._context = e;
}
uw.prototype = {
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
        ms(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function O9(e) {
  return new uw(e);
}
function cw(e) {
  this._context = e;
}
cw.prototype = {
  areaStart: gs,
  areaEnd: gs,
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
function E9(e) {
  return new cw(e);
}
function Y0(e) {
  return e < 0 ? -1 : 1;
}
function G0(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), s = (a * i + o * n) / (n + i);
  return (Y0(a) + Y0(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function K0(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Pc(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - n) / 3;
  e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o);
}
function ys(e) {
  this._context = e;
}
ys.prototype = {
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
        Pc(this, this._t0, K0(this, this._t0));
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
          this._point = 3, Pc(this, K0(this, r = G0(this, e, t)), r);
          break;
        default:
          Pc(this, this._t0, r = G0(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function lw(e) {
  this._context = new fw(e);
}
(lw.prototype = Object.create(ys.prototype)).point = function(e, t) {
  ys.prototype.point.call(this, t, e);
};
function fw(e) {
  this._context = e;
}
fw.prototype = {
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
function T9(e) {
  return new ys(e);
}
function P9(e) {
  return new lw(e);
}
function dw(e) {
  this._context = e;
}
dw.prototype = {
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
        for (var n = X0(e), i = X0(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function X0(e) {
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
function C9(e) {
  return new dw(e);
}
function Mu(e, t) {
  this._context = e, this._t = t;
}
Mu.prototype = {
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
function M9(e) {
  return new Mu(e, 0.5);
}
function N9(e) {
  return new Mu(e, 0);
}
function k9(e) {
  return new Mu(e, 1);
}
function fi(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < s; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function zl(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function R9(e, t) {
  return e[t];
}
function I9(e) {
  const t = [];
  return t.key = e, t;
}
function $9() {
  var e = Fe([]), t = zl, r = fi, n = R9;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), I9), s, u = o.length, c = -1, l;
    for (const f of a)
      for (s = 0, ++c; s < u; ++s)
        (o[s][c] = [0, +n(f, o[s].key, c, a)]).data = f;
    for (s = 0, l = Oh(t(o)); s < u; ++s)
      o[l[s]].index = s;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : Fe(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Fe(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? zl : typeof a == "function" ? a : Fe(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a == null ? fi : a, i) : r;
  }, i;
}
function L9(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r)
        o += e[r][i][1] || 0;
      if (o)
        for (r = 0; r < n; ++r)
          e[r][i][1] /= o;
    }
    fi(e, t);
  }
}
function j9(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, s = 0; o < i; ++o)
        s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    fi(e, t);
  }
}
function D9(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var s = 0, u = 0, c = 0; s < o; ++s) {
        for (var l = e[t[s]], f = l[n][1] || 0, d = l[n - 1][1] || 0, p = (f - d) / 2, v = 0; v < s; ++v) {
          var h = e[t[v]], g = h[n][1] || 0, y = h[n - 1][1] || 0;
          p += g - y;
        }
        u += f, c += p * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, u && (r -= c / u);
    }
    i[n - 1][1] += i[n - 1][0] = r, fi(e, t);
  }
}
function Ro(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ro = function(r) {
    return typeof r;
  } : Ro = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ro(e);
}
function F9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Z0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function V9(e, t, r) {
  return t && Z0(e.prototype, t), r && Z0(e, r), e;
}
function B9(e, t) {
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
function U9(e) {
  var t = H9();
  return function() {
    var n = bs(e), i;
    if (t) {
      var a = bs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return z9(this, i);
  };
}
function z9(e, t) {
  return t && (Ro(t) === "object" || typeof t == "function") ? t : W9(e);
}
function W9(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function H9() {
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
var hw = {
  symbolCircle: Eh,
  symbolCross: f9,
  symbolDiamond: h9,
  symbolSquare: y9,
  symbolStar: m9,
  symbolTriangle: b9,
  symbolWye: w9
}, q9 = Math.PI / 180, Y9 = function(t) {
  var r = "symbol".concat(Eu(t));
  return hw[r] || Eh;
}, G9 = function(t, r, n) {
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
      var i = 18 * q9;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Th = /* @__PURE__ */ function(e) {
  B9(r, e);
  var t = U9(r);
  function r() {
    return F9(this, r), t.apply(this, arguments);
  }
  return V9(r, [{
    key: "getPath",
    value: function() {
      var i = this.props, a = i.size, o = i.sizeType, s = i.type, u = Y9(s), c = S9().type(u).size(G9(a, o, s));
      return c();
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.className, o = i.cx, s = i.cy, u = i.size;
      return o === +o && s === +s && u === +u ? /* @__PURE__ */ _("path", {
        ...ge(this.props, !0),
        className: We("recharts-symbols", a),
        transform: "translate(".concat(o, ", ").concat(s, ")"),
        d: this.getPath()
      }) : null;
    }
  }]), r;
}(xt);
Th.defaultProps = {
  type: "circle",
  size: 64,
  sizeType: "area"
};
Th.registerSymbol = function(e, t) {
  hw["symbol".concat(Eu(e))] = t;
};
function Io(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Io = function(r) {
    return typeof r;
  } : Io = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Io(e);
}
function J0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function K9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J0(Object(r), !0).forEach(function(n) {
      Hl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function X9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Z9(e, t, r) {
  return t && Q0(e.prototype, t), r && Q0(e, r), e;
}
function J9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && ql(e, t);
}
function ql(e, t) {
  return ql = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, ql(e, t);
}
function Q9(e) {
  var t = rF();
  return function() {
    var n = xs(e), i;
    if (t) {
      var a = xs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return eF(this, i);
  };
}
function eF(e, t) {
  return t && (Io(t) === "object" || typeof t == "function") ? t : tF(e);
}
function tF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rF() {
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
var zt = 32, Ph = /* @__PURE__ */ function(e) {
  J9(r, e);
  var t = Q9(r);
  function r() {
    return X9(this, r), t.apply(this, arguments);
  }
  return Z9(r, [{
    key: "renderIcon",
    value: function(i) {
      var a = this.props.inactiveColor, o = zt / 2, s = zt / 6, u = zt / 3, c = i.inactive ? a : i.color;
      if (i.type === "plainline")
        return /* @__PURE__ */ _("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: c,
          strokeDasharray: i.payload.strokeDasharray,
          x1: 0,
          y1: o,
          x2: zt,
          y2: o,
          className: "recharts-legend-icon"
        });
      if (i.type === "line")
        return /* @__PURE__ */ _("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: c,
          d: "M0,".concat(o, "h").concat(u, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * u, ",").concat(o, `
            H`).concat(zt, "M").concat(2 * u, ",").concat(o, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(u, ",").concat(o),
          className: "recharts-legend-icon"
        });
      if (i.type === "rect")
        return /* @__PURE__ */ _("path", {
          stroke: "none",
          fill: c,
          d: "M0,".concat(zt / 8, "h").concat(zt, "v").concat(zt * 3 / 4, "h").concat(-zt, "z"),
          className: "recharts-legend-icon"
        });
      if (/* @__PURE__ */ ye.isValidElement(i.legendIcon)) {
        var l = K9({}, i);
        return delete l.legendIcon, /* @__PURE__ */ ye.cloneElement(i.legendIcon, l);
      }
      return /* @__PURE__ */ _(Th, {
        fill: c,
        cx: o,
        cy: o,
        size: zt,
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
        width: zt,
        height: zt
      }, d = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return o.map(function(v, h) {
        var g, y = v.formatter || c, w = We((g = {
          "recharts-legend-item": !0
        }, Hl(g, "legend-item-".concat(h), !0), Hl(g, "inactive", v.inactive), g));
        if (v.type === "none")
          return null;
        var x = v.inactive ? l : v.color;
        return /* @__PURE__ */ V("li", {
          className: w,
          style: d,
          ...Va(i.props, v, h),
          children: [/* @__PURE__ */ _(Ml, {
            width: s,
            height: s,
            viewBox: f,
            style: p,
            children: i.renderIcon(v)
          }), /* @__PURE__ */ _("span", {
            className: "recharts-legend-item-text",
            style: {
              color: x
            },
            children: y ? y(v.value, v, h) : v.value
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
      return /* @__PURE__ */ _("ul", {
        className: "recharts-default-legend",
        style: u,
        children: this.renderItems()
      });
    }
  }]), r;
}(xt);
Ph.displayName = "Legend";
Ph.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
};
var nF = kr, iF = Rr, aF = "[object Number]";
function oF(e) {
  return typeof e == "number" || iF(e) && nF(e) == aF;
}
var pw = oF, sF = pw;
function uF(e) {
  return sF(e) && e != +e;
}
var Nu = uF, cF = kr, lF = Re, fF = Rr, dF = "[object String]";
function hF(e) {
  return typeof e == "string" || !lF(e) && fF(e) && cF(e) == dF;
}
var za = hF, Et = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Yl = function(t) {
  return za(t) && t.indexOf("%") === t.length - 1;
}, re = function(t) {
  return pw(t) && !Nu(t);
}, nt = function(t) {
  return re(t) || za(t);
}, pF = 0, ku = function(t) {
  var r = ++pF;
  return "".concat(t || "").concat(r);
}, $t = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!re(t) && !za(t))
    return n;
  var a;
  if (Yl(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return Nu(a) && (a = n), i && a > r && (a = r), a;
}, Dr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, vF = function(t) {
  if (!Re(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, eg = function(t, r) {
  return re(t) && re(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Gl(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Pt(n, t)) === r;
  });
}
function $o(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $o = function(r) {
    return typeof r;
  } : $o = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $o(e);
}
function tg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tg(Object(r), !0).forEach(function(n) {
      gF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gF(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function mF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function yF(e, t, r) {
  return t && rg(e.prototype, t), r && rg(e, r), e;
}
function bF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Kl(e, t);
}
function Kl(e, t) {
  return Kl = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Kl(e, t);
}
function xF(e) {
  var t = AF();
  return function() {
    var n = ws(e), i;
    if (t) {
      var a = ws(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return wF(this, i);
  };
}
function wF(e, t) {
  return t && ($o(t) === "object" || typeof t == "function") ? t : SF(e);
}
function SF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function AF() {
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
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ws(e);
}
function _F(e, t) {
  if (e == null)
    return {};
  var r = OF(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function OF(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function EF(e) {
  return e.value;
}
function TF(e, t) {
  return e === !0 ? ps(t, EF) : de(e) ? ps(t, e) : t;
}
function PF(e, t) {
  if (/* @__PURE__ */ ye.isValidElement(e))
    return /* @__PURE__ */ ye.cloneElement(e, t);
  if (de(e))
    return /* @__PURE__ */ ye.createElement(e, t);
  t.ref;
  var r = _F(t, ["ref"]);
  return /* @__PURE__ */ _(Ph, {
    ...r
  });
}
var ng = 1, wa = /* @__PURE__ */ function(e) {
  bF(r, e);
  var t = xF(r);
  function r() {
    var n;
    mF(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.wrapperNode = void 0, n.state = {
      boxWidth: -1,
      boxHeight: -1
    }, n;
  }
  return yF(r, [{
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
      return Wn(Wn({}, d), p);
    }
  }, {
    key: "updateBBox",
    value: function() {
      var i = this.state, a = i.boxWidth, o = i.boxHeight, s = this.props.onBBoxUpdate;
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var u = this.wrapperNode.getBoundingClientRect();
        (Math.abs(u.width - a) > ng || Math.abs(u.height - o) > ng) && this.setState({
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
      var i = this, a = this.props, o = a.content, s = a.width, u = a.height, c = a.wrapperStyle, l = a.payloadUniqBy, f = a.payload, d = Wn(Wn({
        position: "absolute",
        width: s || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ _("div", {
        className: "recharts-legend-wrapper",
        style: d,
        ref: function(v) {
          i.wrapperNode = v;
        },
        children: PF(o, Wn(Wn({}, this.props), {}, {
          payload: TF(l, f)
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
}(xt);
wa.displayName = "Legend";
wa.defaultProps = {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
};
function CF(e) {
  return e == null;
}
var le = CF, MF = typeof WeakSet == "function", ig = Object.keys;
function Ch(e, t) {
  return e === t || e !== e && t !== t;
}
function ag(e) {
  return e.constructor === Object || e.constructor == null;
}
function og(e) {
  return !!e && typeof e.then == "function";
}
function sg(e) {
  return !!(e && e.$$typeof);
}
function NF() {
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
var kF = function(e) {
  return e ? function() {
    return /* @__PURE__ */ new WeakSet();
  } : NF;
}(MF);
function vw(e) {
  return function(r) {
    var n = e || r;
    return function(a, o, s) {
      s === void 0 && (s = kF());
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
function RF(e, t, r, n) {
  var i = e.length;
  if (t.length !== i)
    return !1;
  for (; i-- > 0; )
    if (!r(e[i], t[i], n))
      return !1;
  return !0;
}
function IF(e, t, r, n) {
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
var $F = "_owner", LF = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
function ug(e, t, r, n) {
  var i = ig(e), a = i.length;
  if (ig(t).length !== a)
    return !1;
  if (a)
    for (var o = void 0; a-- > 0; ) {
      if (o = i[a], o === $F) {
        var s = sg(e), u = sg(t);
        if ((s || u) && s !== u)
          return !1;
      }
      if (!LF(t, o) || !r(e[o], t[o], n))
        return !1;
    }
  return !0;
}
function jF(e, t) {
  return e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline && e.unicode === t.unicode && e.sticky === t.sticky && e.lastIndex === t.lastIndex;
}
function DF(e, t, r, n) {
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
var FF = typeof Map == "function", VF = typeof Set == "function";
function Ru(e) {
  var t = typeof e == "function" ? e(r) : r;
  function r(n, i, a) {
    if (n === i)
      return !0;
    if (n && i && typeof n == "object" && typeof i == "object") {
      if (ag(n) && ag(i))
        return ug(n, i, t, a);
      var o = Array.isArray(n), s = Array.isArray(i);
      return o || s ? o === s && RF(n, i, t, a) : (o = n instanceof Date, s = i instanceof Date, o || s ? o === s && Ch(n.getTime(), i.getTime()) : (o = n instanceof RegExp, s = i instanceof RegExp, o || s ? o === s && jF(n, i) : og(n) || og(i) ? n === i : FF && (o = n instanceof Map, s = i instanceof Map, o || s) ? o === s && IF(n, i, t, a) : VF && (o = n instanceof Set, s = i instanceof Set, o || s) ? o === s && DF(n, i, t, a) : ug(n, i, t, a)));
    }
    return n !== n && i !== i;
  }
  return r;
}
var BF = Ru();
Ru(function() {
  return Ch;
});
Ru(vw());
Ru(vw(Ch));
function cg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : requestAnimationFrame(i);
  };
  requestAnimationFrame(n);
}
function Lo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Lo = function(r) {
    return typeof r;
  } : Lo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Lo(e);
}
function UF(e) {
  return qF(e) || HF(e) || WF(e) || zF();
}
function zF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WF(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return lg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lg(e, t);
  }
}
function lg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function HF(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function qF(e) {
  if (Array.isArray(e))
    return e;
}
function YF() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, s = UF(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          cg(i.bind(null, c), u);
          return;
        }
        i(u), cg(i.bind(null, c));
        return;
      }
      Lo(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
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
function fg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), !0).forEach(function(n) {
      Ss(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ss(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var GF = ["Webkit", "Moz", "O", "ms"], KF = ["-webkit-", "-moz-", "-o-", "-ms-"], XF = ["transform", "transformOrigin", "transition"], ZF = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, JF = function(t) {
  return t;
}, QF = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, eV = function(t, r) {
  if (XF.indexOf(t) === -1)
    return Ss({}, t, r);
  var n = t === "transition", i = t.replace(/(\w)/, function(o) {
    return o.toUpperCase();
  }), a = r;
  return GF.reduce(function(o, s, u) {
    return n && (a = r.replace(/(transform|transform-origin)/gim, "".concat(KF[u], "$1"))), di(di({}, o), {}, Ss({}, s + i, a));
  }, {});
}, ua = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return di(di({}, n), {}, Ss({}, i, t(i, r[i])));
  }, {});
}, Xl = function(t) {
  return Object.keys(t).reduce(function(r, n) {
    return di(di({}, r), eV(n, r[n]));
  }, t);
}, dg = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(QF(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, tV = process.env.NODE_ENV !== "production", As = function(t, r, n, i, a, o, s, u) {
  if (tV && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, i, a, o, s, u], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function rV(e, t) {
  return aV(e) || iV(e, t) || gw(e, t) || nV();
}
function nV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iV(e, t) {
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
function aV(e) {
  if (Array.isArray(e))
    return e;
}
function oV(e) {
  return cV(e) || uV(e) || gw(e) || sV();
}
function sV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gw(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Zl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zl(e, t);
  }
}
function uV(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function cV(e) {
  if (Array.isArray(e))
    return Zl(e);
}
function Zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var _s = 1e-4, mw = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, yw = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, hg = function(t, r) {
  return function(n) {
    var i = mw(t, r);
    return yw(i, n);
  };
}, lV = function(t, r) {
  return function(n) {
    var i = mw(t, r), a = [].concat(oV(i.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return yw(a, n);
  };
}, pg = function() {
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
          }), l = rV(c, 4);
          i = l[0], a = l[1], o = l[2], s = l[3];
        } else
          As(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  As([i, o, a, s].every(function(g) {
    return typeof g == "number" && g >= 0 && g <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = hg(i, o), d = hg(a, s), p = lV(i, o), v = function(y) {
    return y > 1 ? 1 : y < 0 ? 0 : y;
  }, h = function(y) {
    for (var w = y > 1 ? 1 : y, x = w, b = 0; b < 8; ++b) {
      var m = f(x) - w, S = p(x);
      if (Math.abs(m - w) < _s || S < _s)
        return d(x);
      x = v(x - m / S);
    }
    return d(x);
  };
  return h.isStepper = !1, h;
}, fV = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, s = o === void 0 ? 17 : o, u = function(l, f, d) {
    var p = -(l - f) * n, v = d * a, h = d + (p - v) * s / 1e3, g = d * s / 1e3 + l;
    return Math.abs(g - f) < _s && Math.abs(h) < _s ? [f, 0] : [g, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, dV = function() {
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
        return pg(i);
      case "spring":
        return fV();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return pg(i);
        As(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (As(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function vg(e) {
  return vV(e) || pV(e) || bw(e) || hV();
}
function hV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pV(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function vV(e) {
  if (Array.isArray(e))
    return Ql(e);
}
function gg(e, t) {
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
    t % 2 ? gg(Object(r), !0).forEach(function(n) {
      Jl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Jl(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gV(e, t) {
  return bV(e) || yV(e, t) || bw(e, t) || mV();
}
function mV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bw(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Ql(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ql(e, t);
  }
}
function Ql(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function yV(e, t) {
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
function bV(e) {
  if (Array.isArray(e))
    return e;
}
var Os = function(t, r, n) {
  return t + (r - t) * n;
}, ef = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, xV = function e(t, r, n) {
  var i = ua(function(a, o) {
    if (ef(o)) {
      var s = t(o.from, o.to, o.velocity), u = gV(s, 2), c = u[0], l = u[1];
      return ct(ct({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? ua(function(a, o) {
    return ef(o) ? ct(ct({}, o), {}, {
      velocity: Os(o.velocity, i[a].velocity, n),
      from: Os(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const wV = function(e, t, r, n, i) {
  var a = ZF(e, t), o = a.reduce(function(g, y) {
    return ct(ct({}, g), {}, Jl({}, y, [e[y], t[y]]));
  }, {}), s = a.reduce(function(g, y) {
    return ct(ct({}, g), {}, Jl({}, y, {
      from: e[y],
      velocity: 0,
      to: t[y]
    }));
  }, {}), u = -1, c, l, f = function() {
    return null;
  }, d = function() {
    return ua(function(y, w) {
      return w.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(ef).length;
  }, v = function(y) {
    c || (c = y);
    var w = y - c, x = w / r.dt;
    s = xV(r, s, x), i(ct(ct(ct({}, e), t), d())), c = y, p() || (u = requestAnimationFrame(f));
  }, h = function(y) {
    l || (l = y);
    var w = (y - l) / n, x = ua(function(m, S) {
      return Os.apply(void 0, vg(S).concat([r(w)]));
    }, o);
    if (i(ct(ct(ct({}, e), t), x)), w < 1)
      u = requestAnimationFrame(f);
    else {
      var b = ua(function(m, S) {
        return Os.apply(void 0, vg(S).concat([r(1)]));
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
function jo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jo = function(r) {
    return typeof r;
  } : jo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, jo(e);
}
function SV(e, t) {
  if (e == null)
    return {};
  var r = AV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function AV(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Cc(e) {
  return TV(e) || EV(e) || OV(e) || _V();
}
function _V() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OV(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return tf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return tf(e, t);
  }
}
function EV(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function TV(e) {
  if (Array.isArray(e))
    return tf(e);
}
function tf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
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
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), !0).forEach(function(n) {
      Ji(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ji(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function PV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function CV(e, t, r) {
  return t && yg(e.prototype, t), r && yg(e, r), e;
}
function MV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && rf(e, t);
}
function rf(e, t) {
  return rf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, rf(e, t);
}
function NV(e) {
  var t = kV();
  return function() {
    var n = Es(e), i;
    if (t) {
      var a = Es(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return nf(this, i);
  };
}
function nf(e, t) {
  return t && (jo(t) === "object" || typeof t == "function") ? t : af(e);
}
function af(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kV() {
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
function Es(e) {
  return Es = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Es(e);
}
var hi = /* @__PURE__ */ function(e) {
  MV(r, e);
  var t = NV(r);
  function r(n, i) {
    var a;
    PV(this, r), a = t.call(this, n, i);
    var o = a.props, s = o.isActive, u = o.attributeName, c = o.from, l = o.to, f = o.steps, d = o.children;
    if (a.handleStyleChange = a.handleStyleChange.bind(af(a)), a.changeStyle = a.changeStyle.bind(af(a)), !s)
      return a.state = {
        style: {}
      }, typeof d == "function" && (a.state = {
        style: l
      }), nf(a);
    if (f && f.length)
      a.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return a.state = {
          style: c
        }, nf(a);
      a.state = {
        style: u ? Ji({}, u, c) : c
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return CV(r, [{
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
            style: u ? Ji({}, u, this.props.to) : this.props.to
          };
          this.state && this.state.style && (u && this.state.style[u] !== this.props.to || !u && this.state.style !== this.props.to) && this.setState(l);
          return;
        }
        if (!(BF(i.to, this.props.to) && i.canBegin && i.isActive)) {
          var f = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var d = f || c ? this.props.from : i.to;
          if (this.state && this.state.style) {
            var p = {
              style: u ? Ji({}, u, d) : d
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
      var a = this, o = i.from, s = i.to, u = i.duration, c = i.easing, l = i.begin, f = i.onAnimationEnd, d = i.onAnimationStart, p = wV(o, s, dV(c), u, this.changeStyle), v = function() {
        a.stopJSAnimation = p();
      };
      this.manager.start([d, l, v, u, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, s = i.begin, u = i.onAnimationStart, c = o[0], l = c.style, f = c.duration, d = f === void 0 ? 0 : f, p = function(h, g, y) {
        if (y === 0)
          return h;
        var w = g.duration, x = g.easing, b = x === void 0 ? "ease" : x, m = g.style, S = g.properties, A = g.onAnimationEnd, O = y > 0 ? o[y - 1] : g, E = S || Object.keys(m);
        if (typeof b == "function" || b === "spring")
          return [].concat(Cc(h), [a.runJSAnimation.bind(a, {
            from: O.style,
            to: m,
            duration: w,
            easing: b
          }), w]);
        var M = dg(E, w, b), C = Xt(Xt(Xt({}, O.style), m), {}, {
          transition: M
        });
        return [].concat(Cc(h), [C, w, A]).filter(JF);
      };
      return this.manager.start([u].concat(Cc(o.reduce(p, [l, Math.max(d, s)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = YF());
      var a = i.begin, o = i.duration, s = i.attributeName, u = i.to, c = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, d = i.steps, p = i.children, v = this.manager;
      if (this.unSubscribe = v.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var h = s ? Ji({}, s, u) : u, g = dg(Object.keys(h), o, c);
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
      var s = SV(i, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"]), u = En.count(a), c = Xl(this.state.style);
      if (typeof a == "function")
        return a(c);
      if (!o || u === 0)
        return a;
      var l = function(d) {
        var p = d.props, v = p.style, h = v === void 0 ? {} : v, g = p.className, y = /* @__PURE__ */ gt(d, Xt(Xt({}, s), {}, {
          style: Xt(Xt({}, h), c),
          className: g
        }));
        return y;
      };
      return u === 1 ? l(En.only(a)) : /* @__PURE__ */ _("div", {
        children: En.map(a, function(f) {
          return l(f);
        })
      });
    }
  }]), r;
}(xt);
hi.displayName = "Animate";
hi.propTypes = {
  from: I.exports.oneOfType([I.exports.object, I.exports.string]),
  to: I.exports.oneOfType([I.exports.object, I.exports.string]),
  attributeName: I.exports.string,
  duration: I.exports.number,
  begin: I.exports.number,
  easing: I.exports.oneOfType([I.exports.string, I.exports.func]),
  steps: I.exports.arrayOf(I.exports.shape({
    duration: I.exports.number.isRequired,
    style: I.exports.object.isRequired,
    easing: I.exports.oneOfType([I.exports.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), I.exports.func]),
    properties: I.exports.arrayOf("string"),
    onAnimationEnd: I.exports.func
  })),
  children: I.exports.oneOfType([I.exports.node, I.exports.func]),
  isActive: I.exports.bool,
  canBegin: I.exports.bool,
  onAnimationEnd: I.exports.func,
  shouldReAnimate: I.exports.bool,
  onAnimationStart: I.exports.func,
  onAnimationReStart: I.exports.func
};
hi.defaultProps = {
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
I.exports.object, I.exports.object, I.exports.object, I.exports.element;
I.exports.object, I.exports.object, I.exports.object, I.exports.oneOfType([I.exports.array, I.exports.element]), I.exports.any;
var bg = Ba, RV = mh, IV = Re, xg = bg ? bg.isConcatSpreadable : void 0;
function $V(e) {
  return IV(e) || RV(e) || !!(xg && e && e[xg]);
}
var LV = $V, jV = kx, DV = LV;
function xw(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = DV), i || (i = []); ++a < o; ) {
    var s = e[a];
    t > 0 && r(s) ? t > 1 ? xw(s, t - 1, r, n, i) : jV(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var ww = xw;
function FV(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
      var u = o[e ? s : ++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return t;
  };
}
var VV = FV, BV = VV, UV = BV(), zV = UV, WV = zV, HV = _u;
function qV(e, t) {
  return e && WV(e, t, HV);
}
var Sw = qV, YV = Ua;
function GV(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!YV(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var KV = GV, XV = Sw, ZV = KV, JV = ZV(XV), Mh = JV, QV = Mh, eB = Ua;
function tB(e, t) {
  var r = -1, n = eB(e) ? Array(e.length) : [];
  return QV(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Aw = tB;
function rB(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var nB = rB, wg = Ci;
function iB(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = wg(e), o = t !== void 0, s = t === null, u = t === t, c = wg(t);
    if (!s && !c && !a && e > t || a && o && u && !s && !c || n && o && u || !r && u || !i)
      return 1;
    if (!n && !a && !c && e < t || c && r && i && !n && !a || s && r && i || !o && i || !u)
      return -1;
  }
  return 0;
}
var aB = iB, oB = aB;
function sB(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o; ) {
    var u = oB(i[n], a[n]);
    if (u) {
      if (n >= s)
        return u;
      var c = r[n];
      return u * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var uB = sB, Mc = Ah, cB = _h, lB = yr, fB = Aw, dB = nB, hB = Ix, pB = uB, vB = Mi, gB = Re;
function mB(e, t, r) {
  t.length ? t = Mc(t, function(a) {
    return gB(a) ? function(o) {
      return cB(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [vB];
  var n = -1;
  t = Mc(t, hB(lB));
  var i = fB(e, function(a, o, s) {
    var u = Mc(t, function(c) {
      return c(a);
    });
    return { criteria: u, index: ++n, value: a };
  });
  return dB(i, function(a, o) {
    return pB(a, o, r);
  });
}
var yB = mB;
function bB(e, t, r) {
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
var xB = bB, wB = xB, Sg = Math.max;
function SB(e, t, r) {
  return t = Sg(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Sg(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), wB(e, this, s);
  };
}
var AB = SB;
function _B(e) {
  return function() {
    return e;
  };
}
var OB = _B, EB = Rn, TB = function() {
  try {
    var e = EB(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), _w = TB, PB = OB, Ag = _w, CB = Mi, MB = Ag ? function(e, t) {
  return Ag(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: PB(t),
    writable: !0
  });
} : CB, NB = MB, kB = 800, RB = 16, IB = Date.now;
function $B(e) {
  var t = 0, r = 0;
  return function() {
    var n = IB(), i = RB - (n - r);
    if (r = n, i > 0) {
      if (++t >= kB)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var LB = $B, jB = NB, DB = LB, FB = DB(jB), VB = FB, BB = Mi, UB = AB, zB = VB;
function WB(e, t) {
  return zB(UB(e, t, BB), e + "");
}
var HB = WB, qB = hh, YB = Ua, GB = yh, KB = Ft;
function XB(e, t, r) {
  if (!KB(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? YB(r) && GB(t, r.length) : n == "string" && t in r) ? qB(r[t], e) : !1;
}
var Iu = XB, ZB = ww, JB = yB, QB = HB, _g = Iu, eU = QB(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && _g(e, t[0], t[1]) ? t = [] : r > 2 && _g(t[0], t[1], t[2]) && (t = [t[0]]), JB(e, ZB(t, 1), []);
}), Nh = eU;
function Do(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Do = function(r) {
    return typeof r;
  } : Do = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Do(e);
}
function tU(e, t) {
  return aU(e) || iU(e, t) || nU(e, t) || rU();
}
function rU() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nU(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Og(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Og(e, t);
  }
}
function Og(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function iU(e, t) {
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
function aU(e) {
  if (Array.isArray(e))
    return e;
}
function Eg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eg(Object(r), !0).forEach(function(n) {
      oU(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oU(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function sU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function uU(e, t, r) {
  return t && Tg(e.prototype, t), r && Tg(e, r), e;
}
function cU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && of(e, t);
}
function of(e, t) {
  return of = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, of(e, t);
}
function lU(e) {
  var t = hU();
  return function() {
    var n = Ts(e), i;
    if (t) {
      var a = Ts(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return fU(this, i);
  };
}
function fU(e, t) {
  return t && (Do(t) === "object" || typeof t == "function") ? t : dU(e);
}
function dU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hU() {
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
function Ts(e) {
  return Ts = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ts(e);
}
function pU(e) {
  return Re(e) && nt(e[0]) && nt(e[1]) ? e.join(" ~ ") : e;
}
var kh = /* @__PURE__ */ function(e) {
  cU(r, e);
  var t = lU(r);
  function r() {
    return sU(this, r), t.apply(this, arguments);
  }
  return uU(r, [{
    key: "renderContent",
    value: function() {
      var i = this.props, a = i.payload, o = i.separator, s = i.formatter, u = i.itemStyle, c = i.itemSorter;
      if (a && a.length) {
        var l = {
          padding: 0,
          margin: 0
        }, f = (c ? Nh(a, c) : a).map(function(d, p) {
          if (d.type === "none")
            return null;
          var v = Nc({
            display: "block",
            paddingTop: 4,
            paddingBottom: 4,
            color: d.color || "#000"
          }, u), h = d.formatter || s || pU, g = d.value, y = d.name;
          if (h && g != null && y != null) {
            var w = h(g, y, d, p, a);
            if (Array.isArray(w)) {
              var x = w, b = tU(x, 2);
              g = b[0], y = b[1];
            } else
              g = w;
          }
          return /* @__PURE__ */ V("li", {
            className: "recharts-tooltip-item",
            style: v,
            children: [nt(y) ? /* @__PURE__ */ _("span", {
              className: "recharts-tooltip-item-name",
              children: y
            }) : null, nt(y) ? /* @__PURE__ */ _("span", {
              className: "recharts-tooltip-item-separator",
              children: o
            }) : null, /* @__PURE__ */ _("span", {
              className: "recharts-tooltip-item-value",
              children: g
            }), /* @__PURE__ */ _("span", {
              className: "recharts-tooltip-item-unit",
              children: d.unit || ""
            })]
          }, "tooltip-item-".concat(p));
        });
        return /* @__PURE__ */ _("ul", {
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
      var i = this.props, a = i.wrapperClassName, o = i.contentStyle, s = i.labelClassName, u = i.labelStyle, c = i.label, l = i.labelFormatter, f = i.payload, d = Nc({
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap"
      }, o), p = Nc({
        margin: 0
      }, u), v = !le(c), h = v ? c : "", g = We("recharts-default-tooltip", a), y = We("recharts-tooltip-label", s);
      return v && l && f !== void 0 && f !== null && (h = l(c, f)), /* @__PURE__ */ V("div", {
        className: g,
        style: d,
        children: [/* @__PURE__ */ _("p", {
          className: y,
          style: p,
          children: /* @__PURE__ */ ye.isValidElement(h) ? h : "".concat(h)
        }), this.renderContent()]
      });
    }
  }]), r;
}(xt);
kh.displayName = "DefaultTooltipContent";
kh.defaultProps = {
  separator: " : ",
  contentStyle: {},
  itemStyle: {},
  labelStyle: {}
};
var vU = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Zr = {
  isSsr: vU(),
  get: function(t) {
    return Zr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      Zr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        Zr[i] = t[i];
      });
    }
  }
};
function Fo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fo = function(r) {
    return typeof r;
  } : Fo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Fo(e);
}
function Pg(e, t) {
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
    t % 2 ? Pg(Object(r), !0).forEach(function(n) {
      Qi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function gU(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function mU(e, t, r) {
  return t && Cg(e.prototype, t), r && Cg(e, r), e;
}
function yU(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && sf(e, t);
}
function sf(e, t) {
  return sf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, sf(e, t);
}
function bU(e) {
  var t = SU();
  return function() {
    var n = Ps(e), i;
    if (t) {
      var a = Ps(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return xU(this, i);
  };
}
function xU(e, t) {
  return t && (Fo(t) === "object" || typeof t == "function") ? t : wU(e);
}
function wU(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function SU() {
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
function Ps(e) {
  return Ps = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ps(e);
}
var Wi = "recharts-tooltip-wrapper", Mg = 1;
function AU(e) {
  return e.dataKey;
}
function _U(e, t) {
  return e === !0 ? ps(t, AU) : de(e) ? ps(t, e) : t;
}
function OU(e, t) {
  return /* @__PURE__ */ ye.isValidElement(e) ? /* @__PURE__ */ ye.cloneElement(e, t) : de(e) ? /* @__PURE__ */ ye.createElement(e, t) : /* @__PURE__ */ _(kh, {
    ...t
  });
}
var Kn = /* @__PURE__ */ function(e) {
  yU(r, e);
  var t = bU(r);
  function r() {
    var n;
    gU(this, r);
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
      var y = p[u] - c - v, w = p[u] + v;
      if (d[u])
        return w;
      var x = p[u] + c + v, b = g[u] + l;
      return x > b ? Math.max(y, g[u]) : Math.max(w, g[u]);
    }, n;
  }
  return mU(r, [{
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
        (Math.abs(u.width - a) > Mg || Math.abs(u.height - o) > Mg) && this.setState({
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
      var i, a = this, o = this.props, s = o.payload, u = o.isAnimationActive, c = o.animationDuration, l = o.animationEasing, f = o.filterNull, d = o.payloadUniqBy, p = _U(d, f && s && s.length ? s.filter(function(k) {
        return !le(k.value);
      }) : s), v = p && p.length, h = this.props, g = h.content, y = h.viewBox, w = h.coordinate, x = h.position, b = h.active, m = h.wrapperStyle, S = wr({
        pointerEvents: "none",
        visibility: !this.state.dismissed && b && v ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, m), A, O;
      if (x && re(x.x) && re(x.y))
        A = x.x, O = x.y;
      else {
        var E = this.state, M = E.boxWidth, C = E.boxHeight;
        M > 0 && C > 0 && w ? (A = this.getTranslate({
          key: "x",
          tooltipDimension: M,
          viewBoxDimension: y.width
        }), O = this.getTranslate({
          key: "y",
          tooltipDimension: C,
          viewBoxDimension: y.height
        })) : S.visibility = "hidden";
      }
      S = wr(wr({}, Xl({
        transform: this.props.useTranslate3d ? "translate3d(".concat(A, "px, ").concat(O, "px, 0)") : "translate(".concat(A, "px, ").concat(O, "px)")
      })), S), u && b && (S = wr(wr({}, Xl({
        transition: "transform ".concat(c, "ms ").concat(l)
      })), S));
      var N = We(Wi, (i = {}, Qi(i, "".concat(Wi, "-right"), re(A) && w && re(w.x) && A >= w.x), Qi(i, "".concat(Wi, "-left"), re(A) && w && re(w.x) && A < w.x), Qi(i, "".concat(Wi, "-bottom"), re(O) && w && re(w.y) && O >= w.y), Qi(i, "".concat(Wi, "-top"), re(O) && w && re(w.y) && O < w.y), i));
      return /* @__PURE__ */ _("div", {
        tabIndex: -1,
        role: "dialog",
        onKeyDown: function(D) {
          D.key === "Escape" && a.setState({
            dismissed: !0,
            dismissedAtCoordinate: wr(wr({}, a.state.dismissedAtCoordinate), {}, {
              x: a.props.coordinate.x,
              y: a.props.coordinate.y
            })
          });
        },
        className: N,
        style: S,
        ref: function(D) {
          a.wrapperNode = D;
        },
        children: OU(g, wr(wr({}, this.props), {}, {
          payload: p
        }))
      });
    }
  }]), r;
}(xt);
Kn.displayName = "Tooltip";
Kn.defaultProps = {
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
  isAnimationActive: !Zr.isSsr,
  animationEasing: "ease",
  animationDuration: 400,
  filterNull: !0,
  useTranslate3d: !1
};
var EU = mr, TU = function() {
  return EU.Date.now();
}, PU = TU, CU = /\s/;
function MU(e) {
  for (var t = e.length; t-- && CU.test(e.charAt(t)); )
    ;
  return t;
}
var NU = MU, kU = NU, RU = /^\s+/;
function IU(e) {
  return e && e.slice(0, kU(e) + 1).replace(RU, "");
}
var $U = IU, LU = $U, Ng = Ft, jU = Ci, kg = 0 / 0, DU = /^[-+]0x[0-9a-f]+$/i, FU = /^0b[01]+$/i, VU = /^0o[0-7]+$/i, BU = parseInt;
function UU(e) {
  if (typeof e == "number")
    return e;
  if (jU(e))
    return kg;
  if (Ng(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ng(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = LU(e);
  var r = FU.test(e);
  return r || VU.test(e) ? BU(e.slice(2), r ? 2 : 8) : DU.test(e) ? kg : +e;
}
var Ow = UU, zU = Ft, kc = PU, Rg = Ow, WU = "Expected a function", HU = Math.max, qU = Math.min;
function YU(e, t, r) {
  var n, i, a, o, s, u, c = 0, l = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(WU);
  t = Rg(t) || 0, zU(r) && (l = !!r.leading, f = "maxWait" in r, a = f ? HU(Rg(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function p(S) {
    var A = n, O = i;
    return n = i = void 0, c = S, o = e.apply(O, A), o;
  }
  function v(S) {
    return c = S, s = setTimeout(y, t), l ? p(S) : o;
  }
  function h(S) {
    var A = S - u, O = S - c, E = t - A;
    return f ? qU(E, a - O) : E;
  }
  function g(S) {
    var A = S - u, O = S - c;
    return u === void 0 || A >= t || A < 0 || f && O >= a;
  }
  function y() {
    var S = kc();
    if (g(S))
      return w(S);
    s = setTimeout(y, h(S));
  }
  function w(S) {
    return s = void 0, d && n ? p(S) : (n = i = void 0, o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), c = 0, n = u = i = s = void 0;
  }
  function b() {
    return s === void 0 ? o : w(kc());
  }
  function m() {
    var S = kc(), A = g(S);
    if (n = arguments, i = this, u = S, A) {
      if (s === void 0)
        return v(u);
      if (f)
        return clearTimeout(s), s = setTimeout(y, t), p(u);
    }
    return s === void 0 && (s = setTimeout(y, t)), o;
  }
  return m.cancel = x, m.flush = b, m;
}
var GU = YU, KU = process.env.NODE_ENV !== "production", Sa = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (KU && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
}, Rh = function(t) {
  return null;
};
Rh.displayName = "Cell";
var uf = { exports: {} }, Rc = "(".charCodeAt(0), Ic = ")".charCodeAt(0), po = "'".charCodeAt(0), $c = '"'.charCodeAt(0), Lc = "\\".charCodeAt(0), vo = "/".charCodeAt(0), jc = ",".charCodeAt(0), Dc = ":".charCodeAt(0), Ig = "*".charCodeAt(0), XU = function(e) {
  for (var t = [], r = e, n, i, a, o, s, u, c, l = 0, f = r.charCodeAt(l), d = r.length, p = [{ nodes: t }], v = 0, h, g = "", y = "", w = ""; l < d; )
    if (f <= 32) {
      n = l;
      do
        n += 1, f = r.charCodeAt(n);
      while (f <= 32);
      o = r.slice(l, n), a = t[t.length - 1], f === Ic && v ? w = o : a && a.type === "div" ? a.after = o : f === jc || f === Dc || f === vo && r.charCodeAt(n + 1) !== Ig ? y = o : t.push({
        type: "space",
        sourceIndex: l,
        value: o
      }), l = n;
    } else if (f === po || f === $c) {
      n = l, i = f === po ? "'" : '"', o = {
        type: "string",
        sourceIndex: l,
        quote: i
      };
      do
        if (s = !1, n = r.indexOf(i, n + 1), ~n)
          for (u = n; r.charCodeAt(u - 1) === Lc; )
            u -= 1, s = !s;
        else
          r += i, n = r.length - 1, o.unclosed = !0;
      while (s);
      o.value = r.slice(l + 1, n), t.push(o), l = n + 1, f = r.charCodeAt(l);
    } else if (f === vo && r.charCodeAt(l + 1) === Ig)
      o = {
        type: "comment",
        sourceIndex: l
      }, n = r.indexOf("*/", l), n === -1 && (o.unclosed = !0, n = r.length), o.value = r.slice(l + 2, n), t.push(o), l = n + 2, f = r.charCodeAt(l);
    else if (f === vo || f === jc || f === Dc)
      o = r[l], t.push({
        type: "div",
        sourceIndex: l - y.length,
        value: o,
        before: y,
        after: ""
      }), y = "", l += 1, f = r.charCodeAt(l);
    else if (Rc === f) {
      n = l;
      do
        n += 1, f = r.charCodeAt(n);
      while (f <= 32);
      if (o = {
        type: "function",
        sourceIndex: l - g.length,
        value: g,
        before: r.slice(l + 1, n)
      }, l = n, g === "url" && f !== po && f !== $c) {
        n -= 1;
        do
          if (s = !1, n = r.indexOf(")", n + 1), ~n)
            for (u = n; r.charCodeAt(u - 1) === Lc; )
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
    } else if (Ic === f && v)
      l += 1, f = r.charCodeAt(l), h.after = w, w = "", v -= 1, p.pop(), h = p[v], t = h.nodes;
    else {
      n = l;
      do
        f === Lc && (n += 1), n += 1, f = r.charCodeAt(n);
      while (n < d && !(f <= 32 || f === po || f === $c || f === jc || f === Dc || f === vo || f === Rc || f === Ic && v));
      o = r.slice(l, n), Rc === f ? g = o : t.push({
        type: "word",
        sourceIndex: l,
        value: o
      }), l = n;
    }
  for (l = p.length - 1; l; l -= 1)
    p[l].unclosed = !0;
  return p[0].nodes;
}, ZU = function e(t, r, n) {
  var i, a, o, s;
  for (i = 0, a = t.length; i < a; i += 1)
    o = t[i], n || (s = r(o, i, t)), s !== !1 && o.type === "function" && Array.isArray(o.nodes) && e(o.nodes, r, n), n && r(o, i, t);
};
function $g(e, t) {
  var r = e.type, n = e.value, i, a;
  return t && (a = t(e)) !== void 0 ? a : r === "word" || r === "space" ? n : r === "string" ? (i = e.quote || "", i + n + (e.unclosed ? "" : i)) : r === "comment" ? "/*" + n + (e.unclosed ? "" : "*/") : r === "div" ? (e.before || "") + n + (e.after || "") : Array.isArray(e.nodes) ? (i = Ew(e.nodes), r !== "function" ? i : n + "(" + (e.before || "") + i + (e.after || "") + (e.unclosed ? "" : ")")) : n;
}
function Ew(e, t) {
  var r, n;
  if (Array.isArray(e)) {
    for (r = "", n = e.length - 1; ~n; n -= 1)
      r = $g(e[n], t) + r;
    return r;
  }
  return $g(e, t);
}
var JU = Ew, Fc, Lg;
function QU() {
  if (Lg)
    return Fc;
  Lg = 1;
  var e = "-".charCodeAt(0), t = "+".charCodeAt(0), r = ".".charCodeAt(0), n = "e".charCodeAt(0), i = "E".charCodeAt(0);
  return Fc = function(a) {
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
  }, Fc;
}
var ez = XU, Tw = ZU, Pw = JU;
function tn(e) {
  return this instanceof tn ? (this.nodes = ez(e), this) : new tn(e);
}
tn.prototype.toString = function() {
  return Array.isArray(this.nodes) ? Pw(this.nodes) : "";
};
tn.prototype.walk = function(e, t) {
  return Tw(this.nodes, e, t), this;
};
tn.unit = QU();
tn.walk = Tw;
tn.stringify = Pw;
var tz = tn;
function rz(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Cw = {};
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
      for (var p = [], v = d.pop, h = d.rule, g = 0, y = v.length; g < y; g++)
        p.push([
          v[g],
          h[g]
        ]);
      return p;
    }
    function i(d) {
      for (var p = {}, v = d.idx, h = d.goto, g = 0, y = v.length; g < y; g++) {
        var w = v[g];
        p[w] = h[g];
      }
      return p;
    }
    function a(d) {
      for (var p = [], v = d.len, h = d.symbol, g = d.type, y = d.state, w = d.mode, x = d.goto, b = 0, m = v.length; b < m; b++) {
        for (var S = v[b], A = {}, O = 0; O < S; O++) {
          var E = h.shift();
          switch (g.shift()) {
            case 2:
              A[E] = [
                w.shift(),
                x.shift()
              ];
              break;
            case 0:
              A[E] = y.shift();
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
        var h = this.TERROR, g = [], y = {};
        if (!v && this.state_descriptions_ && this.state_descriptions_[p])
          return [
            this.state_descriptions_[p]
          ];
        for (var w in this.table[p])
          if (w = +w, w !== h) {
            var x = v ? w : this.describeSymbol(w);
            x && !y[x] && (g.push(x), y[x] = !0);
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
            var y = h[v];
            y.value *= -1, this.$ = y;
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
        var v = this, h = new Array(128), g = new Array(128), y = new Array(128), w = this.table, x = 0, b = 0;
        this.TERROR;
        var m = this.EOF;
        this.options.errorRecoveryTokenDiscardCount | 0;
        var S = [0, 54], A;
        this.__lexer__ ? A = this.__lexer__ : A = this.__lexer__ = Object.create(this.lexer);
        var O = {
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
          return O;
        };
        function E(J, F) {
          for (var G in F)
            typeof J[G] > "u" && Object.prototype.hasOwnProperty.call(F, G) && (J[G] = F[G]);
        }
        E(O, this.yy), O.lexer = A, O.parser = this, typeof O.parseError == "function" ? this.parseError = function(F, G, ie) {
          return ie || (ie = this.JisonParserError), O.parseError.call(this, F, G, ie);
        } : this.parseError = this.originalParseError, typeof O.quoteName == "function" ? this.quoteName = function(F) {
          return O.quoteName.call(this, F);
        } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(F, G, ie) {
          var T;
          if (G) {
            var he;
            (O.post_parse || this.post_parse) && (he = this.constructParseErrorInfo(null, null, null, !1)), O.post_parse && (T = O.post_parse.call(this, O, F, he), typeof T < "u" && (F = T)), this.post_parse && (T = this.post_parse.call(this, O, F, he), typeof T < "u" && (F = T)), he && he.destroy && he.destroy();
          }
          if (this.__reentrant_call_depth > 1)
            return F;
          if (A.cleanupAfterLex && A.cleanupAfterLex(ie), O && (O.lexer = void 0, O.parser = void 0, A.yy === O && (A.yy = void 0)), O = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, h.length = 0, g.length = 0, y.length = 0, x = 0, !ie) {
            for (var H = this.__error_infos.length - 1; H >= 0; H--) {
              var me = this.__error_infos[H];
              me && typeof me.destroy == "function" && me.destroy();
            }
            this.__error_infos.length = 0;
          }
          return F;
        }, this.constructParseErrorInfo = function(F, G, ie, T) {
          var he = {
            errStr: F,
            exception: G,
            text: A.match,
            value: A.yytext,
            token: this.describeSymbol(b) || b,
            token_id: b,
            line: A.yylineno,
            expected: ie,
            recoverable: T,
            state: k,
            action: D,
            new_state: B,
            symbol_stack: h,
            state_stack: g,
            value_stack: y,
            stack_pointer: x,
            yy: O,
            lexer: A,
            parser: this,
            destroy: function() {
              var me = !!this.recoverable;
              for (var Se in this)
                this.hasOwnProperty(Se) && typeof Se == "object" && (this[Se] = void 0);
              this.recoverable = me;
            }
          };
          return this.__error_infos.push(he), he;
        };
        function M() {
          var J = A.lex();
          return typeof J != "number" && (J = v.symbols_[J] || J), J || m;
        }
        function C() {
          var J = A.fastLex();
          return typeof J != "number" && (J = v.symbols_[J] || J), J || m;
        }
        var N = M, k, D, j, R, Q = {
          $: !0,
          _$: void 0,
          yy: O
        }, K, te, $, B, X = !1;
        try {
          if (this.__reentrant_call_depth++, A.setInput(p, O), typeof A.canIUse == "function") {
            var q = A.canIUse();
            q.fastLex && typeof C == "function" && (N = C);
          }
          for (y[x] = null, g[x] = 0, h[x] = 0, ++x, this.pre_parse && this.pre_parse.call(this, O), O.pre_parse && O.pre_parse.call(this, O), B = g[x - 1]; ; ) {
            if (k = B, this.defaultActions[k])
              D = 2, B = this.defaultActions[k];
            else if (b || (b = N()), R = w[k] && w[k][b] || S, B = R[1], D = R[0], !D) {
              var L, W = this.describeSymbol(b) || b, ee = this.collect_expected_token_set(k);
              typeof A.yylineno == "number" ? L = "Parse error on line " + (A.yylineno + 1) + ": " : L = "Parse error: ", typeof A.showPosition == "function" && (L += `
` + A.showPosition(79 - 10, 10) + `
`), ee.length ? L += "Expecting " + ee.join(", ") + ", got unexpected " + W : L += "Unexpected " + W, K = this.constructParseErrorInfo(L, null, ee, !1), j = this.parseError(K.errStr, K, this.JisonParserError), typeof j < "u" && (X = j);
              break;
            }
            switch (D) {
              default:
                if (D instanceof Array) {
                  K = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + k + ", token: " + b, null, null, !1), j = this.parseError(K.errStr, K, this.JisonParserError), typeof j < "u" && (X = j);
                  break;
                }
                K = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, !1), j = this.parseError(K.errStr, K, this.JisonParserError), typeof j < "u" && (X = j);
                break;
              case 1:
                h[x] = b, y[x] = A.yytext, g[x] = B, ++x, b = 0;
                continue;
              case 2:
                if ($ = this.productions_[B - 1], te = $[1], j = this.performAction.call(Q, B, x - 1, y), typeof j < "u") {
                  X = j;
                  break;
                }
                x -= te;
                var se = $[0];
                h[x] = se, y[x] = Q.$, B = w[g[x - 1]][se], g[x] = B, ++x;
                continue;
              case 3:
                x !== -2 && (X = !0, x--, typeof y[x] < "u" && (X = y[x]));
                break;
            }
            break;
          }
        } catch (J) {
          if (J instanceof this.JisonParserError)
            throw J;
          if (A && typeof A.JisonLexerError == "function" && J instanceof A.JisonLexerError)
            throw J;
          K = this.constructParseErrorInfo("Parsing aborted due to exception.", J, null, !1), X = !1, j = this.parseError(K.errStr, K, this.JisonParserError), typeof j < "u" && (X = j);
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
          var y = h.exception;
          this.message = y.message || v, g = y.stack;
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
        constructLexErrorInfo: function(h, g, y) {
          if (h = "" + h, y == null && (y = !(h.indexOf(`
`) > 0 && h.indexOf("^") > 0)), this.yylloc && y) {
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
              var m = !!this.recoverable;
              for (var S in this)
                this.hasOwnProperty(S) && typeof S == "object" && (this[S] = void 0);
              this.recoverable = m;
            }
          };
          return this.__error_infos.push(x), x;
        },
        parseError: function(h, g, y) {
          if (y || (y = this.JisonLexerError), this.yy) {
            if (this.yy.parser && typeof this.yy.parser.parseError == "function")
              return this.yy.parser.parseError.call(this, h, g, y) || this.ERROR;
            if (typeof this.yy.parseError == "function")
              return this.yy.parseError.call(this, h, g, y) || this.ERROR;
          }
          throw new y(h, g);
        },
        yyerror: function(h) {
          var g = "";
          this.yylloc && (g = " on line " + (this.yylineno + 1));
          var y = this.constructLexErrorInfo(
            "Lexical error" + g + ": " + h,
            this.options.lexerErrorsAreRecoverable
          ), w = Array.prototype.slice.call(arguments, 1);
          return w.length && (y.extra_error_attributes = w), this.parseError(y.errStr, y, this.JisonLexerError) || this.ERROR;
        },
        cleanupAfterLex: function(h) {
          if (this.setInput("", {}), !h) {
            for (var g = this.__error_infos.length - 1; g >= 0; g--) {
              var y = this.__error_infos[g];
              y && typeof y.destroy == "function" && y.destroy();
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
            for (var y = this.rules, w = 0, x = y.length; w < x; w++) {
              var b = y[w];
              typeof b == "number" && (y[w] = y[b]);
            }
            var m = this.conditions;
            for (var S in m) {
              for (var A = m[S], O = A.rules, x = O.length, E = new Array(x + 1), M = new Array(x + 1), w = 0; w < x; w++) {
                var C = O[w], b = y[C];
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
          var y = h.call(this, this._input, g);
          return typeof y != "string" ? y && (this._input = "" + y) : this._input = y, this;
        },
        input: function() {
          if (!this._input)
            return null;
          var h = this._input[0];
          this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
          var g = 1, y = !1;
          if (h === `
`)
            y = !0;
          else if (h === "\r") {
            y = !0;
            var w = this._input[1];
            w === `
` && (g++, h += w, this.yytext += w, this.yyleng++, this.offset++, this.match += w, this.matched += w, this.yylloc.range[1]++);
          }
          return y ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(g), h;
        },
        unput: function(h) {
          var g = h.length, y = h.split(/(?:\r\n?|\n)/g);
          if (this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.yyleng = this.yytext.length, this.offset -= g, this.match = this.match.substr(0, this.match.length - g), this.matched = this.matched.substr(0, this.matched.length - g), y.length > 1) {
            this.yylineno -= y.length - 1, this.yylloc.last_line = this.yylineno + 1;
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
          var y = this.matched.substring(0, this.matched.length - this.match.length);
          h < 0 ? h = y.length : h || (h = 20), g < 0 ? g = y.length : g || (g = 1), y = y.substr(-h * 2 - 2);
          var w = y.replace(/\r\n|\r/g, `
`).split(`
`);
          return w = w.slice(-g), y = w.join(`
`), y.length > h && (y = "..." + y.substr(-h)), y;
        },
        upcomingInput: function(h, g) {
          var y = this.match;
          h < 0 ? h = y.length + this._input.length : h || (h = 20), g < 0 ? g = h : g || (g = 1), y.length < h * 2 + 2 && (y += this._input.substring(0, h * 2 + 2));
          var w = y.replace(/\r\n|\r/g, `
`).split(`
`);
          return w = w.slice(0, g), y = w.join(`
`), y.length > h && (y = y.substring(0, h) + "..."), y;
        },
        showPosition: function(h, g) {
          var y = this.pastInput(h).replace(/\s/g, " "), w = new Array(y.length + 1).join("-");
          return y + this.upcomingInput(g).replace(/\s/g, " ") + `
` + w + "^";
        },
        deriveLocationInfo: function(h, g, y, w) {
          var x = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
            range: [0, 0]
          };
          return h && (x.first_line = h.first_line | 0, x.last_line = h.last_line | 0, x.first_column = h.first_column | 0, x.last_column = h.last_column | 0, h.range && (x.range[0] = h.range[0] | 0, x.range[1] = h.range[1] | 0)), (x.first_line <= 0 || x.last_line < x.first_line) && (x.first_line <= 0 && g && (x.first_line = g.last_line | 0, x.first_column = g.last_column | 0, g.range && (x.range[0] = h.range[1] | 0)), (x.last_line <= 0 || x.last_line < x.first_line) && y && (x.last_line = y.first_line | 0, x.last_column = y.first_column | 0, y.range && (x.range[1] = h.range[0] | 0)), x.first_line <= 0 && w && (x.last_line <= 0 || w.last_line <= x.last_line) && (x.first_line = w.first_line | 0, x.first_column = w.first_column | 0, w.range && (x.range[0] = w.range[0] | 0)), x.last_line <= 0 && w && (x.first_line <= 0 || w.first_line >= x.first_line) && (x.last_line = w.last_line | 0, x.last_column = w.last_column | 0, w.range && (x.range[1] = w.range[1] | 0))), x.last_line <= 0 && (x.first_line <= 0 ? (x.first_line = this.yylloc.first_line, x.last_line = this.yylloc.last_line, x.first_column = this.yylloc.first_column, x.last_column = this.yylloc.last_column, x.range[0] = this.yylloc.range[0], x.range[1] = this.yylloc.range[1]) : (x.last_line = this.yylloc.last_line, x.last_column = this.yylloc.last_column, x.range[1] = this.yylloc.range[1])), x.first_line <= 0 && (x.first_line = x.last_line, x.first_column = 0, x.range[1] = x.range[0]), x.first_column < 0 && (x.first_column = 0), x.last_column < 0 && (x.last_column = x.first_column > 0 ? x.first_column : 80), x;
        },
        prettyPrintRange: function(h, g, y) {
          h = this.deriveLocationInfo(h, g, y);
          const w = 3, x = 1, b = 2;
          var m = this.matched + this._input, S = m.split(`
`), A = Math.max(1, g ? g.first_line : h.first_line - w), O = Math.max(1, y ? y.last_line : h.last_line + x), E = 1 + Math.log10(O | 1) | 0, M = new Array(E).join(" "), C = [], N = S.slice(A - 1, O + 1).map(function(Q, K) {
            var te = K + A, $ = (M + te).substr(-E), B = $ + ": " + Q, X = new Array(E + 1).join("^"), q = 2 + 1, L = 0;
            if (te === h.first_line ? (q += h.first_column, L = Math.max(
              2,
              (te === h.last_line ? h.last_column : Q.length) - h.first_column + 1
            )) : te === h.last_line ? L = Math.max(2, h.last_column + 1) : te > h.first_line && te < h.last_line && (L = Math.max(2, Q.length + 1)), L) {
              var W = new Array(q).join("."), ee = new Array(L).join("^");
              B += `
` + X + W + ee, Q.trim().length > 0 && C.push(K);
            }
            return B = B.replace(/\t/g, " "), B;
          });
          if (C.length > 2 * b) {
            var k = C[b - 1] + 1, D = C[C.length - b] - 1, j = new Array(E + 1).join(" ") + "  (...continued...)";
            j += `
` + new Array(E + 1).join("-") + "  (---------------)", N.splice(k, D - k + 1, j);
          }
          return N.join(`
`);
        },
        describeYYLLOC: function(h, g) {
          var y = h.first_line, w = h.last_line, x = h.first_column, b = h.last_column, m = w - y, S = b - x, A;
          if (m === 0 ? (A = "line " + y + ", ", S <= 1 ? A += "column " + x : A += "columns " + x + " .. " + b) : A = "lines " + y + "(column " + x + ") .. " + w + "(column " + b + ")", h.range && g) {
            var O = h.range[0], E = h.range[1] - 1;
            E <= O ? A += " {String Offset: " + O + "}" : A += " {String Offset range: " + O + " .. " + E + "}";
          }
          return A;
        },
        test_match: function(h, g) {
          var y, w, x, b, m;
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
          }), b = h[0], m = b.length, w = b.split(/(?:\r\n?|\n)/g), w.length > 1 ? (this.yylineno += w.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = w[w.length - 1].length) : this.yylloc.last_column += m, this.yytext += b, this.match += b, this.matched += b, this.matches = h, this.yyleng = this.yytext.length, this.yylloc.range[1] += m, this.offset += m, this._more = !1, this._backtrack = !1, this._input = this._input.slice(m), y = this.performAction.call(
            this,
            this.yy,
            g,
            this.conditionStack[this.conditionStack.length - 1]
          ), this.done && this._input && (this.done = !1), y)
            return y;
          if (this._backtrack) {
            for (var S in x)
              this[S] = x[S];
            return this.__currentRuleSet__ = null, !1;
          } else if (this._signaled_error_token)
            return y = this._signaled_error_token, this._signaled_error_token = !1, y;
          return !1;
        },
        next: function() {
          if (this.done)
            return this.clear(), this.EOF;
          this._input || (this.done = !0);
          var h, g, y, w;
          this._more || this.clear();
          var x = this.__currentRuleSet__;
          if (!x && (x = this.__currentRuleSet__ = this._currentRules(), !x || !x.rules)) {
            var b = "";
            this.options.trackPosition && (b = " on line " + (this.yylineno + 1));
            var m = this.constructLexErrorInfo(
              "Internal lexer engine error" + b + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!',
              !1
            );
            return this.parseError(m.errStr, m, this.JisonLexerError) || this.ERROR;
          }
          for (var S = x.rules, A = x.__rule_regexes, O = x.__rule_count, E = 1; E <= O; E++)
            if (y = this._input.match(A[E]), y && (!g || y[0].length > g[0].length)) {
              if (g = y, w = E, this.options.backtrack_lexer) {
                if (h = this.test_match(y, S[E]), h !== !1)
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
            var m = this.constructLexErrorInfo(
              "Lexical error" + b + ": Unrecognized text.",
              this.options.lexerErrorsAreRecoverable
            ), M = this._input, C = this.topState(), N = this.conditionStack.length;
            return h = this.parseError(m.errStr, m, this.JisonLexerError) || this.ERROR, h === this.ERROR && !this.matches && M === this._input && C === this.topState() && N === this.conditionStack.length && this.input(), h;
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
        performAction: function(h, g, y) {
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
  typeof rz < "u" && (e.parser = t, e.Parser = t.Parser, e.parse = function() {
    return t.parse.apply(t, arguments);
  });
})(Cw);
var Wa = {}, cf = { exports: {} }, Vc = {
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
}, nz = function(e, t, r, n) {
  if (!Vc.hasOwnProperty(r))
    throw new Error("Cannot convert to " + r);
  if (!Vc[r].hasOwnProperty(t))
    throw new Error("Cannot convert from " + t + " to " + r);
  var i = Vc[r][t] * e;
  return n !== !1 ? (n = Math.pow(10, parseInt(n) || 5), Math.round(i * n) / n) : i;
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = nz, n = i(r);
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
})(cf, cf.exports);
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.flip = lf;
var iz = cf.exports, Bc = az(iz);
function az(e) {
  return e && e.__esModule ? e : { default: e };
}
function mt(e, t) {
  return e.type === "MathExpression" ? lz(e, t) : e.type === "Calc" ? mt(e.value, t) : e;
}
function jg(e, t) {
  return e.type === t.type && e.value === t.value;
}
function Ot(e) {
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
function oz(e, t) {
  var r = (0, Bc.default)(e.left, e.right, t), n = mt(r.left, t), i = mt(r.right, t);
  return n.type === "MathExpression" && i.type === "MathExpression" && (n.operator === "/" && i.operator === "*" || n.operator === "-" && i.operator === "+" || n.operator === "*" && i.operator === "/" || n.operator === "+" && i.operator === "-") && (jg(n.right, i.right) ? r = (0, Bc.default)(n.left, i.left, t) : jg(n.right, i.left) && (r = (0, Bc.default)(n.left, i.right, t)), n = mt(r.left, t), i = mt(r.right, t)), e.left = n, e.right = i, e;
}
function lf(e) {
  return e === "+" ? "-" : "+";
}
function ff(e) {
  return Ot(e.type) ? e.value = -e.value : e.type == "MathExpression" && (e.left = ff(e.left), e.right = ff(e.right)), e;
}
function sz(e, t) {
  var r = e, n = r.left, i = r.right, a = r.operator;
  if (n.type === "CssVariable" || i.type === "CssVariable")
    return e;
  if (i.value === 0)
    return n;
  if (n.value === 0 && a === "+")
    return i;
  if (n.value === 0 && a === "-")
    return ff(i);
  if (n.type === i.type && Ot(n.type) && (e = Object.assign({}, n), a === "+" ? e.value = n.value + i.value : e.value = n.value - i.value), Ot(n.type) && (i.operator === "+" || i.operator === "-") && i.type === "MathExpression") {
    if (n.type === i.left.type)
      return e = Object.assign({}, e), e.left = mt({
        type: "MathExpression",
        operator: a,
        left: n,
        right: i.left
      }, t), e.right = i.right, e.operator = a === "-" ? lf(i.operator) : i.operator, mt(e, t);
    if (n.type === i.right.type)
      return e = Object.assign({}, e), e.left = mt({
        type: "MathExpression",
        operator: a === "-" ? lf(i.operator) : i.operator,
        left: n,
        right: i.right
      }, t), e.right = i.left, mt(e, t);
  }
  if (n.type === "MathExpression" && (n.operator === "+" || n.operator === "-") && Ot(i.type)) {
    if (i.type === n.left.type)
      return e = Object.assign({}, n), e.left = mt({
        type: "MathExpression",
        operator: a,
        left: n.left,
        right: i
      }, t), mt(e, t);
    if (i.type === n.right.type)
      return e = Object.assign({}, n), n.operator === "-" ? (e.right = mt({
        type: "MathExpression",
        operator: a === "-" ? "+" : "-",
        left: i,
        right: n.right
      }, t), e.operator = a === "-" ? "-" : "+") : e.right = mt({
        type: "MathExpression",
        operator: a,
        left: n.right,
        right: i
      }, t), e.right.value < 0 && (e.right.value *= -1, e.operator = e.operator === "-" ? "+" : "-"), mt(e, t);
  }
  return e;
}
function uz(e, t) {
  if (!Ot(e.right.type))
    return e;
  if (e.right.type !== "Value")
    throw new Error('Cannot divide by "' + e.right.unit + '", number expected');
  if (e.right.value === 0)
    throw new Error("Cannot divide by zero");
  return e.left.type === "MathExpression" ? Ot(e.left.left.type) && Ot(e.left.right.type) ? (e.left.left.value /= e.right.value, e.left.right.value /= e.right.value, mt(e.left, t)) : e : Ot(e.left.type) ? (e.left.value /= e.right.value, e.left) : e;
}
function cz(e) {
  if (e.left.type === "MathExpression" && e.right.type === "Value") {
    if (Ot(e.left.left.type) && Ot(e.left.right.type))
      return e.left.left.value *= e.right.value, e.left.right.value *= e.right.value, e.left;
  } else {
    if (Ot(e.left.type) && e.right.type === "Value")
      return e.left.value *= e.right.value, e.left;
    if (e.left.type === "Value" && e.right.type === "MathExpression") {
      if (Ot(e.right.left.type) && Ot(e.right.right.type))
        return e.right.left.value *= e.left.value, e.right.right.value *= e.left.value, e.right;
    } else if (e.left.type === "Value" && Ot(e.right.type))
      return e.right.value *= e.left.value, e.right;
  }
  return e;
}
function lz(e, t) {
  switch (e = oz(e, t), e.operator) {
    case "+":
    case "-":
      return sz(e, t);
    case "/":
      return uz(e, t);
    case "*":
      return cz(e);
  }
  return e;
}
Wa.default = mt;
var df = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(o, s, u) {
    var c = a(s, u);
    return s.type === "MathExpression" && (c = o + "(" + c + ")"), c;
  };
  var r = Wa, n = {
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
})(df, df.exports);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = tz, n = c(r), i = Cw, a = Wa, o = c(a), s = df.exports, u = c(s);
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
})(uf, uf.exports);
const Uc = /* @__PURE__ */ zA(uf.exports);
function Dg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dg(Object(r), !0).forEach(function(n) {
      fz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fz(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vg(e) {
  return vz(e) || pz(e) || hz(e) || dz();
}
function dz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hz(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return hf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return hf(e, t);
  }
}
function pz(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function vz(e) {
  if (Array.isArray(e))
    return hf(e);
}
function hf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Hn = {
  widthCache: {},
  cacheCount: 0
}, gz = 2e3, mz = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, yz = ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "lineHeight", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"], Bg = "recharts_measurement_span";
function bz(e, t) {
  return yz.indexOf(e) >= 0 && t === +t ? "".concat(t, "px") : t;
}
function xz(e) {
  var t = e.split(""), r = t.reduce(function(n, i) {
    return i === i.toUpperCase() ? [].concat(Vg(n), ["-", i.toLowerCase()]) : [].concat(Vg(n), [i]);
  }, []);
  return r.join("");
}
var wz = function(t) {
  return Object.keys(t).reduce(function(r, n) {
    return "".concat(r).concat(xz(n), ":").concat(bz(n, t[n]), ";");
  }, "");
}, An = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Zr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = "".concat(t), i = wz(r), a = "".concat(n, "-").concat(i);
  if (Hn.widthCache[a])
    return Hn.widthCache[a];
  try {
    var o = document.getElementById(Bg);
    o || (o = document.createElement("span"), o.setAttribute("id", Bg), o.setAttribute("aria-hidden", "true"), document.body.appendChild(o));
    var s = Fg(Fg({}, mz), r);
    Object.keys(s).map(function(l) {
      return o.style[l] = s[l], l;
    }), o.textContent = n;
    var u = o.getBoundingClientRect(), c = {
      width: u.width,
      height: u.height
    };
    return Hn.widthCache[a] = c, ++Hn.cacheCount > gz && (Hn.cacheCount = 0, Hn.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Sz = function(t) {
  var r = t.ownerDocument.documentElement, n = {
    top: 0,
    left: 0
  };
  return typeof t.getBoundingClientRect < "u" && (n = t.getBoundingClientRect()), {
    top: n.top + window.pageYOffset - r.clientTop,
    left: n.left + window.pageXOffset - r.clientLeft
  };
}, Az = function(t, r) {
  return {
    chartX: Math.round(t.pageX - r.left),
    chartY: Math.round(t.pageY - r.top)
  };
};
function Vo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vo = function(r) {
    return typeof r;
  } : Vo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Vo(e);
}
function _z(e, t) {
  if (e == null)
    return {};
  var r = Oz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Oz(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ez(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ug(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Tz(e, t, r) {
  return t && Ug(e.prototype, t), r && Ug(e, r), e;
}
function Pz(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && pf(e, t);
}
function pf(e, t) {
  return pf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, pf(e, t);
}
function Cz(e) {
  var t = kz();
  return function() {
    var n = Cs(e), i;
    if (t) {
      var a = Cs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Mz(this, i);
  };
}
function Mz(e, t) {
  return t && (Vo(t) === "object" || typeof t == "function") ? t : Nz(e);
}
function Nz(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kz() {
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
function Cs(e) {
  return Cs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Cs(e);
}
function zg(e, t) {
  return Lz(e) || $z(e, t) || Iz(e, t) || Rz();
}
function Rz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Iz(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Wg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wg(e, t);
  }
}
function Wg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function $z(e, t) {
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
function Lz(e) {
  if (Array.isArray(e))
    return e;
}
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), !0).forEach(function(n) {
      jz(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jz(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Mw = /[ \f\n\r\t\v\u2028\u2029]+/, Nw = function(t) {
  try {
    var r = [];
    le(t.children) || (t.breakAll ? r = t.children.toString().split("") : r = t.children.toString().split(Mw));
    var n = r.map(function(a) {
      return {
        word: a,
        width: An(a, t.style).width
      };
    }), i = t.breakAll ? 0 : An("\xA0", t.style).width;
    return {
      wordsWithComputedWidth: n,
      spaceWidth: i
    };
  } catch {
    return null;
  }
}, Dz = function(t, r, n, i, a) {
  var o = re(t.maxLines), s = t.children, u = function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return C.reduce(function(N, k) {
      var D = k.word, j = k.width, R = N[N.length - 1];
      if (R && (i == null || a || R.width + j + n < i))
        R.words.push(D), R.width += j + n;
      else {
        var Q = {
          words: [D],
          width: j
        };
        N.push(Q);
      }
      return N;
    }, []);
  }, c = u(r), l = function(C) {
    return C.reduce(function(N, k) {
      return N.width > k.width ? N : k;
    });
  };
  if (!o)
    return c;
  for (var f = "\u2026", d = function(C) {
    var N = s.slice(0, C), k = Nw(qg(qg({}, t), {}, {
      children: N + f
    })).wordsWithComputedWidth, D = u(k), j = D.length > t.maxLines || l(D).width > i;
    return [j, D];
  }, p = 0, v = s.length - 1, h = 0, g; p <= v && h <= s.length - 1; ) {
    var y = Math.floor((p + v) / 2), w = y - 1, x = d(w), b = zg(x, 2), m = b[0], S = b[1], A = d(y), O = zg(A, 1), E = O[0];
    if (!m && !E && (p = y + 1), m && E && (v = y - 1), !m && E) {
      g = S;
      break;
    }
    h++;
  }
  return g || c;
}, Yg = function(t) {
  var r = le(t) ? [] : t.toString().split(Mw);
  return [{
    words: r
  }];
}, Fz = function(t, r) {
  if ((t.width || t.scaleToFit) && !Zr.isSsr) {
    var n, i;
    if (r) {
      var a = Nw(t);
      if (a) {
        var o = a.wordsWithComputedWidth, s = a.spaceWidth;
        n = o, i = s;
      } else
        return Yg(t.children);
      return Dz(t, n, i, t.width, t.scaleToFit);
    }
  }
  return Yg(t.children);
}, rn = /* @__PURE__ */ function(e) {
  Pz(r, e);
  var t = Cz(r);
  function r() {
    var n;
    Ez(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.state = {}, n;
  }
  return Tz(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.dx, o = i.dy, s = i.textAnchor, u = i.verticalAnchor, c = i.scaleToFit, l = i.angle, f = i.lineHeight, d = i.capHeight, p = i.className, v = i.breakAll, h = _z(i, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]), g = this.state.wordsByLines;
      if (!nt(h.x) || !nt(h.y))
        return null;
      var y = h.x + (re(a) ? a : 0), w = h.y + (re(o) ? o : 0), x;
      switch (u) {
        case "start":
          x = Uc("calc(".concat(d, ")"));
          break;
        case "middle":
          x = Uc("calc(".concat((g.length - 1) / 2, " * -").concat(f, " + (").concat(d, " / 2))"));
          break;
        default:
          x = Uc("calc(".concat(g.length - 1, " * -").concat(f, ")"));
          break;
      }
      var b = [];
      if (c) {
        var m = g[0].width, S = this.props.width;
        b.push("scale(".concat((re(S) ? S / m : 1) / m, ")"));
      }
      return l && b.push("rotate(".concat(l, ", ").concat(y, ", ").concat(w, ")")), b.length && (h.transform = b.join(" ")), /* @__PURE__ */ _("text", {
        ...ge(h, !0),
        x: y,
        y: w,
        className: We("recharts-text", p),
        textAnchor: s,
        children: g.map(function(A, O) {
          return /* @__PURE__ */ _("tspan", {
            x: y,
            dy: O === 0 ? x : f,
            children: A.words.join(v ? "" : " ")
          }, O);
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
          wordsByLines: Fz(i, o)
        };
      }
      return null;
    }
  }]), r;
}(nd);
rn.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: "1em",
  capHeight: "0.71em",
  scaleToFit: !1,
  textAnchor: "start",
  verticalAnchor: "end"
};
var kw = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg;
function Vz() {
  if (Gg)
    return Me;
  Gg = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case t:
          switch (m = m.type, m) {
            case u:
            case c:
            case n:
            case a:
            case i:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case l:
                case v:
                case p:
                case o:
                  return m;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  function b(m) {
    return x(m) === c;
  }
  return Me.AsyncMode = u, Me.ConcurrentMode = c, Me.ContextConsumer = s, Me.ContextProvider = o, Me.Element = t, Me.ForwardRef = l, Me.Fragment = n, Me.Lazy = v, Me.Memo = p, Me.Portal = r, Me.Profiler = a, Me.StrictMode = i, Me.Suspense = f, Me.isAsyncMode = function(m) {
    return b(m) || x(m) === u;
  }, Me.isConcurrentMode = b, Me.isContextConsumer = function(m) {
    return x(m) === s;
  }, Me.isContextProvider = function(m) {
    return x(m) === o;
  }, Me.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, Me.isForwardRef = function(m) {
    return x(m) === l;
  }, Me.isFragment = function(m) {
    return x(m) === n;
  }, Me.isLazy = function(m) {
    return x(m) === v;
  }, Me.isMemo = function(m) {
    return x(m) === p;
  }, Me.isPortal = function(m) {
    return x(m) === r;
  }, Me.isProfiler = function(m) {
    return x(m) === a;
  }, Me.isStrictMode = function(m) {
    return x(m) === i;
  }, Me.isSuspense = function(m) {
    return x(m) === f;
  }, Me.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === a || m === i || m === f || m === d || typeof m == "object" && m !== null && (m.$$typeof === v || m.$$typeof === p || m.$$typeof === o || m.$$typeof === s || m.$$typeof === l || m.$$typeof === g || m.$$typeof === y || m.$$typeof === w || m.$$typeof === h);
  }, Me.typeOf = x, Me;
}
var Ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kg;
function Bz() {
  return Kg || (Kg = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(T) {
      return typeof T == "string" || typeof T == "function" || T === n || T === c || T === a || T === i || T === f || T === d || typeof T == "object" && T !== null && (T.$$typeof === v || T.$$typeof === p || T.$$typeof === o || T.$$typeof === s || T.$$typeof === l || T.$$typeof === g || T.$$typeof === y || T.$$typeof === w || T.$$typeof === h);
    }
    function b(T) {
      if (typeof T == "object" && T !== null) {
        var he = T.$$typeof;
        switch (he) {
          case t:
            var H = T.type;
            switch (H) {
              case u:
              case c:
              case n:
              case a:
              case i:
              case f:
                return H;
              default:
                var me = H && H.$$typeof;
                switch (me) {
                  case s:
                  case l:
                  case v:
                  case p:
                  case o:
                    return me;
                  default:
                    return he;
                }
            }
          case r:
            return he;
        }
      }
    }
    var m = u, S = c, A = s, O = o, E = t, M = l, C = n, N = v, k = p, D = r, j = a, R = i, Q = f, K = !1;
    function te(T) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(T) || b(T) === u;
    }
    function $(T) {
      return b(T) === c;
    }
    function B(T) {
      return b(T) === s;
    }
    function X(T) {
      return b(T) === o;
    }
    function q(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function L(T) {
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
    function F(T) {
      return b(T) === a;
    }
    function G(T) {
      return b(T) === i;
    }
    function ie(T) {
      return b(T) === f;
    }
    Ne.AsyncMode = m, Ne.ConcurrentMode = S, Ne.ContextConsumer = A, Ne.ContextProvider = O, Ne.Element = E, Ne.ForwardRef = M, Ne.Fragment = C, Ne.Lazy = N, Ne.Memo = k, Ne.Portal = D, Ne.Profiler = j, Ne.StrictMode = R, Ne.Suspense = Q, Ne.isAsyncMode = te, Ne.isConcurrentMode = $, Ne.isContextConsumer = B, Ne.isContextProvider = X, Ne.isElement = q, Ne.isForwardRef = L, Ne.isFragment = W, Ne.isLazy = ee, Ne.isMemo = se, Ne.isPortal = J, Ne.isProfiler = F, Ne.isStrictMode = G, Ne.isSuspense = ie, Ne.isValidElementType = x, Ne.typeOf = b;
  }()), Ne;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Vz() : e.exports = Bz();
})(kw);
function ri(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Xg(e, t) {
  if (e == null)
    return {};
  var r = Uz(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Uz(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Zg = {
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
}, Jr = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Jg = null, zc = null, Ih = function e(t) {
  if (t === Jg && Re(zc))
    return zc;
  var r = [];
  return En.forEach(t, function(n) {
    le(n) || (kw.exports.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), zc = r, Jg = t, r;
}, dr = function(t, r) {
  var n = [], i = [];
  return Re(r) ? i = r.map(function(a) {
    return Jr(a);
  }) : i = [Jr(r)], Ih(t).forEach(function(a) {
    var o = Pt(a, "type.displayName") || Pt(a, "type.name");
    i.indexOf(o) !== -1 && n.push(a);
  }), n;
}, Yr = function(t, r) {
  var n = dr(t, r);
  return n && n[0];
}, Qg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!re(n) || n <= 0 || !re(i) || i <= 0);
}, zz = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], Wz = function(t) {
  return t && t.type && za(t.type) && zz.indexOf(t.type) >= 0;
}, Rw = function e(t, r) {
  if (t === r)
    return !0;
  var n = En.count(t);
  if (n !== En.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return em(Re(t) ? t[0] : t, Re(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Re(a) || Re(o)) {
      if (!e(a, o))
        return !1;
    } else if (!em(a, o))
      return !1;
  }
  return !0;
}, em = function(t, r) {
  if (le(t) && le(r))
    return !0;
  if (!le(t) && !le(r)) {
    var n = t.props || {}, i = n.children, a = Xg(n, ["children"]), o = r.props || {}, s = o.children, u = Xg(o, ["children"]);
    return i && s ? ri(a, u) && Rw(i, s) : !i && !s ? ri(a, u) : !1;
  }
  return !1;
}, tm = function(t, r) {
  var n = [], i = {};
  return Ih(t).forEach(function(a, o) {
    if (Wz(a))
      n.push(a);
    else if (a) {
      var s = Jr(a.type), u = r[s] || {}, c = u.handler, l = u.once;
      if (c && (!l || !i[s])) {
        var f = c(a, s, o);
        n.push(f), i[s] = !0;
      }
    }
  }), n;
}, Hz = function(t) {
  var r = t && t.type;
  return r && Zg[r] ? Zg[r] : null;
}, qz = function(t, r) {
  return Ih(r).indexOf(t);
}, Yz = xh;
function Gz(e, t) {
  return Yz(e, t);
}
var Iw = Gz, Kz = Ci;
function Xz(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (s === void 0 ? o === o && !Kz(o) : r(o, s)))
      var s = o, u = a;
  }
  return u;
}
var $u = Xz;
function Zz(e, t) {
  return e > t;
}
var $w = Zz, Jz = $u, Qz = $w, eW = Mi;
function tW(e) {
  return e && e.length ? Jz(e, eW, Qz) : void 0;
}
var Lu = tW;
function rW(e, t) {
  return e < t;
}
var Lw = rW, nW = $u, iW = Lw, aW = Mi;
function oW(e) {
  return e && e.length ? nW(e, aW, iW) : void 0;
}
var ju = oW, sW = Ah, uW = yr, cW = Aw, lW = Re;
function fW(e, t) {
  var r = lW(e) ? sW : cW;
  return r(e, uW(t));
}
var dW = fW, hW = ww, pW = dW;
function vW(e, t) {
  return hW(pW(e, t), 1);
}
var gW = vW, Ni = 1e9, mW = {
  precision: 20,
  rounding: 4,
  toExpNeg: -7,
  toExpPos: 21,
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Lh, Ye = !0, qt = "[DecimalError] ", Tn = qt + "Invalid argument: ", $h = qt + "Exponent out of range: ", ki = Math.floor, wn = Math.pow, yW = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Rt, ot = 1e7, ze = 7, jw = 9007199254740991, Ms = ki(jw / ze), ae = {};
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
  else if (e = new n(e), e.s < 1 || e.eq(Rt))
    throw Error(qt + "NaN");
  if (r.s < 1)
    throw Error(qt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Rt) ? new n(0) : (Ye = !1, t = Tr(Aa(r, a), Aa(e, a), a), Ye = !0, je(t, i));
};
ae.minus = ae.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Vw(t, e) : Dw(t, (e.s = -e.s, e));
};
ae.modulo = ae.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s)
    throw Error(qt + "NaN");
  return r.s ? (Ye = !1, t = Tr(r, e, 0, 1).times(e), Ye = !0, r.minus(t)) : je(new n(r), i);
};
ae.naturalExponential = ae.exp = function() {
  return Fw(this);
};
ae.naturalLogarithm = ae.ln = function() {
  return Aa(this);
};
ae.negated = ae.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ae.plus = ae.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Dw(t, e) : Vw(t, (e.s = -e.s, e));
};
ae.precision = ae.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Tn + e);
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
  for (e = Qe(s), Ye = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = sr(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = ki((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(i.toString()), r = u.precision, i = o = r + 3; ; )
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
  return Ye = !0, je(n, r);
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
  return t ? ++r : a.shift(), e.d = a, e.e = r, Ye ? je(e, f.precision) : e;
};
ae.toDecimalPlaces = ae.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (vr(e, 0, Ni), t === void 0 ? t = n.rounding : vr(t, 0, 8), je(r, e + Qe(r) + 1, t));
};
ae.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Pn(n, !0) : (vr(e, 0, Ni), t === void 0 ? t = i.rounding : vr(t, 0, 8), n = je(new i(n), e + 1, t), r = Pn(n, !0, e + 1)), r;
};
ae.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Pn(i) : (vr(e, 0, Ni), t === void 0 ? t = a.rounding : vr(t, 0, 8), n = je(new a(i), e + Qe(i) + 1, t), r = Pn(n.abs(), !1, e + Qe(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
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
    return new u(Rt);
  if (s = new u(s), !s.s) {
    if (e.s < 1)
      throw Error(qt + "Infinity");
    return s;
  }
  if (s.eq(Rt))
    return s;
  if (n = u.precision, e.eq(Rt))
    return je(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
    if ((r = l < 0 ? -l : l) <= jw) {
      for (i = new u(Rt), t = Math.ceil(n / ze + 4), Ye = !1; r % 2 && (i = i.times(s), nm(i.d, t)), r = ki(r / 2), r !== 0; )
        s = s.times(s), nm(s.d, t);
      return Ye = !0, e.s < 0 ? new u(Rt).div(i) : je(i, n);
    }
  } else if (a < 0)
    throw Error(qt + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ye = !1, i = e.times(Aa(s, n + c)), Ye = !0, i = Fw(i), i.s = a, i;
};
ae.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = Qe(i), n = Pn(i, r <= a.toExpNeg || r >= a.toExpPos)) : (vr(e, 1, Ni), t === void 0 ? t = a.rounding : vr(t, 0, 8), i = je(new a(i), e, t), r = Qe(i), n = Pn(i, e <= r || r <= a.toExpNeg, e)), n;
};
ae.toSignificantDigits = ae.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (vr(e, 1, Ni), t === void 0 ? t = n.rounding : vr(t, 0, 8)), je(new n(r), e, t);
};
ae.toString = ae.valueOf = ae.val = ae.toJSON = ae[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Qe(e), r = e.constructor;
  return Pn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Dw(e, t) {
  var r, n, i, a, o, s, u, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Ye ? je(t, f) : t;
  if (u = e.d, c = t.d, o = e.e, i = t.e, u = u.slice(), a = o - i, a) {
    for (a < 0 ? (n = u, a = -a, s = c.length) : (n = c, i = o, s = u.length), o = Math.ceil(f / ze), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--; )
      n.push(0);
    n.reverse();
  }
  for (s = u.length, a = c.length, s - a < 0 && (a = s, n = c, c = u, u = n), r = 0; a; )
    r = (u[--a] = u[a] + c[a] + r) / ot | 0, u[a] %= ot;
  for (r && (u.unshift(r), ++i), s = u.length; u[--s] == 0; )
    u.pop();
  return t.d = u, t.e = i, Ye ? je(t, f) : t;
}
function vr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Tn + e);
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
    var s, u, c, l, f, d, p, v, h, g, y, w, x, b, m, S, A, O, E = n.constructor, M = n.s == i.s ? 1 : -1, C = n.d, N = i.d;
    if (!n.s)
      return new E(n);
    if (!i.s)
      throw Error(qt + "Division by zero");
    for (u = n.e - i.e, A = N.length, m = C.length, p = new E(M), v = p.d = [], c = 0; N[c] == (C[c] || 0); )
      ++c;
    if (N[c] > (C[c] || 0) && --u, a == null ? w = a = E.precision : o ? w = a + (Qe(n) - Qe(i)) + 1 : w = a, w < 0)
      return new E(0);
    if (w = w / ze + 2 | 0, c = 0, A == 1)
      for (l = 0, N = N[0], w++; (c < m || l) && w--; c++)
        x = l * ot + (C[c] || 0), v[c] = x / N | 0, l = x % N | 0;
    else {
      for (l = ot / (N[0] + 1) | 0, l > 1 && (N = e(N, l), C = e(C, l), A = N.length, m = C.length), b = A, h = C.slice(0, A), g = h.length; g < A; )
        h[g++] = 0;
      O = N.slice(), O.unshift(0), S = N[0], N[1] >= ot / 2 && ++S;
      do
        l = 0, s = t(N, h, A, g), s < 0 ? (y = h[0], A != g && (y = y * ot + (h[1] || 0)), l = y / S | 0, l > 1 ? (l >= ot && (l = ot - 1), f = e(N, l), d = f.length, g = h.length, s = t(f, h, d, g), s == 1 && (l--, r(f, A < d ? O : N, d))) : (l == 0 && (s = l = 1), f = N.slice()), d = f.length, d < g && f.unshift(0), r(h, f, g), s == -1 && (g = h.length, s = t(N, h, A, g), s < 1 && (l++, r(h, A < g ? O : N, g))), g = h.length) : s === 0 && (l++, h = [0]), v[c++] = l, s && h[0] ? h[g++] = C[b] || 0 : (h = [C[b]], g = 1);
      while ((b++ < m || h[0] !== void 0) && w--);
    }
    return v[0] || v.shift(), p.e = u, je(p, o ? a + Qe(p) + 1 : a);
  };
}();
function Fw(e, t) {
  var r, n, i, a, o, s, u = 0, c = 0, l = e.constructor, f = l.precision;
  if (Qe(e) > 16)
    throw Error($h + Qe(e));
  if (!e.s)
    return new l(Rt);
  for (t == null ? (Ye = !1, s = f) : s = t, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(wn(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new l(Rt), l.precision = s; ; ) {
    if (i = je(i.times(e), s), r = r.times(++u), o = a.plus(Tr(i, r, s)), sr(o.d).slice(0, s) === sr(a.d).slice(0, s)) {
      for (; c--; )
        a = je(a.times(a), s);
      return l.precision = f, t == null ? (Ye = !0, je(a, f)) : a;
    }
    a = o;
  }
}
function Qe(e) {
  for (var t = e.e * ze, r = e.d[0]; r >= 10; r /= 10)
    t++;
  return t;
}
function Wc(e, t, r) {
  if (t > e.LN10.sd())
    throw Ye = !0, r && (e.precision = r), Error(qt + "LN10 precision limit exceeded");
  return je(new e(e.LN10), t);
}
function Ur(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function Aa(e, t) {
  var r, n, i, a, o, s, u, c, l, f = 1, d = 10, p = e, v = p.d, h = p.constructor, g = h.precision;
  if (p.s < 1)
    throw Error(qt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Rt))
    return new h(0);
  if (t == null ? (Ye = !1, c = g) : c = t, p.eq(10))
    return t == null && (Ye = !0), Wc(h, c);
  if (c += d, h.precision = c, r = sr(v), n = r.charAt(0), a = Qe(p), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = sr(p.d), n = r.charAt(0), f++;
    a = Qe(p), n > 1 ? (p = new h("0." + r), a++) : p = new h(n + "." + r.slice(1));
  } else
    return u = Wc(h, c + 2, g).times(a + ""), p = Aa(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = g, t == null ? (Ye = !0, je(p, g)) : p;
  for (s = o = p = Tr(p.minus(Rt), p.plus(Rt), c), l = je(p.times(p), c), i = 3; ; ) {
    if (o = je(o.times(l), c), u = s.plus(Tr(o, new h(i), c)), sr(u.d).slice(0, c) === sr(s.d).slice(0, c))
      return s = s.times(2), a !== 0 && (s = s.plus(Wc(h, c + 2, g).times(a + ""))), s = Tr(s, new h(f), c), h.precision = g, t == null ? (Ye = !0, je(s, g)) : s;
    s = u, i += 2;
  }
}
function rm(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; )
    --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = ki(r / ze), e.d = [], n = (r + 1) % ze, r < 0 && (n += ze), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ze; n < i; )
        e.d.push(+t.slice(n, n += ze));
      t = t.slice(n), n = ze - t.length;
    } else
      n -= i;
    for (; n--; )
      t += "0";
    if (e.d.push(+t), Ye && (e.e > Ms || e.e < -Ms))
      throw Error($h + r);
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
  if (r !== void 0 && (a = wn(10, o - i - 1), s = c / a % 10 | 0, u = t < 0 || f[l + 1] !== void 0 || c % a, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && (n > 0 ? i > 0 ? c / wn(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return u ? (a = Qe(e), f.length = 1, t = t - a - 1, f[0] = wn(10, (ze - t % ze) % ze), e.e = ki(-t / ze) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = wn(10, ze - n), f[l] = i > 0 ? (c / wn(10, o - i) % wn(10, i) | 0) * a : 0), u)
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
  if (Ye && (e.e > Ms || e.e < -Ms))
    throw Error($h + Qe(e));
  return e;
}
function Vw(e, t) {
  var r, n, i, a, o, s, u, c, l, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Ye ? je(t, p) : t;
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
  return u[0] ? (t.d = u, t.e = n, Ye ? je(t, p) : t) : new d(0);
}
function Pn(e, t, r) {
  var n, i = Qe(e), a = sr(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ur(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Ur(-i - 1) + a, r && (n = r - o) > 0 && (a += Ur(n))) : i >= o ? (a += Ur(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Ur(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Ur(n))), e.s < 0 ? "-" + a : a;
}
function nm(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Bw(e) {
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
        throw Error(Tn + a);
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
      return rm(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Tn + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, yW.test(a))
      rm(o, a);
    else
      throw Error(Tn + a);
  }
  if (i.prototype = ae, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Bw, i.config = i.set = bW, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function bW(e) {
  if (!e || typeof e != "object")
    throw Error(qt + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Ni,
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
      if (ki(n) === n && n >= i[t + 1] && n <= i[t + 2])
        this[r] = n;
      else
        throw Error(Tn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10)
      this[r] = new this(n);
    else
      throw Error(Tn + r + ": " + n);
  return this;
}
var Lh = Bw(mW);
Rt = new Lh(1);
const Ie = Lh;
function xW(e) {
  return _W(e) || AW(e) || SW(e) || wW();
}
function wW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SW(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return vf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vf(e, t);
  }
}
function AW(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function _W(e) {
  if (Array.isArray(e))
    return vf(e);
}
function vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var OW = function(t) {
  return t;
}, Uw = {
  "@@functional/placeholder": !0
}, zw = function(t) {
  return t === Uw;
}, im = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && zw(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, EW = function e(t, r) {
  return t === 1 ? r : im(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(s) {
      return s !== Uw;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, im(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var l = i.map(function(f) {
        return zw(f) ? u.shift() : f;
      });
      return r.apply(void 0, xW(l).concat(u));
    }));
  });
}, Du = function(t) {
  return EW(t.length, t);
}, gf = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, TW = Du(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), PW = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return OW;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, a.apply(void 0, arguments));
  };
}, mf = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, Ww = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(s, u) {
      return s === r[u];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function CW(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ie(e).abs().log(10).toNumber()) + 1, t;
}
function MW(e, t, r) {
  for (var n = new Ie(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var NW = Du(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), kW = Du(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), RW = Du(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Fu = {
  rangeStep: MW,
  getDigitCount: CW,
  interpolateNumber: NW,
  uninterpolateNumber: kW,
  uninterpolateTruncation: RW
};
function yf(e) {
  return LW(e) || $W(e) || Hw(e) || IW();
}
function IW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $W(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function LW(e) {
  if (Array.isArray(e))
    return bf(e);
}
function _a(e, t) {
  return FW(e) || DW(e, t) || Hw(e, t) || jW();
}
function jW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hw(e, t) {
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
function bf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function DW(e, t) {
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
function FW(e) {
  if (Array.isArray(e))
    return e;
}
function qw(e) {
  var t = _a(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function Yw(e, t, r) {
  if (e.lte(0))
    return new Ie(0);
  var n = Fu.getDigitCount(e.toNumber()), i = new Ie(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, s = new Ie(Math.ceil(a.div(o).toNumber())).add(r).mul(o), u = s.mul(i);
  return t ? u : new Ie(Math.ceil(u));
}
function VW(e, t, r) {
  var n = 1, i = new Ie(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Ie(10).pow(Fu.getDigitCount(e) - 1), i = new Ie(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Ie(Math.floor(e)));
  } else
    e === 0 ? i = new Ie(Math.floor((t - 1) / 2)) : r || (i = new Ie(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = PW(TW(function(u) {
    return i.add(new Ie(u - o).mul(n)).toNumber();
  }), gf);
  return s(0, t);
}
function Gw(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ie(0),
      tickMin: new Ie(0),
      tickMax: new Ie(0)
    };
  var a = Yw(new Ie(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new Ie(0) : (o = new Ie(e).add(t).div(2), o = o.sub(new Ie(o).mod(a)));
  var s = Math.ceil(o.sub(e).div(a).toNumber()), u = Math.ceil(new Ie(t).sub(o).div(a).toNumber()), c = s + u + 1;
  return c > r ? Gw(e, t, r, n, i + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: a,
    tickMin: o.sub(new Ie(s).mul(a)),
    tickMax: o.add(new Ie(u).mul(a))
  });
}
function BW(e) {
  var t = _a(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), s = qw([r, n]), u = _a(s, 2), c = u[0], l = u[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(yf(gf(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(yf(gf(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? mf(f) : f;
  }
  if (c === l)
    return VW(c, i, a);
  var d = Gw(c, l, o, a), p = d.step, v = d.tickMin, h = d.tickMax, g = Fu.rangeStep(v, h.add(new Ie(0.1).mul(p)), p);
  return r > n ? mf(g) : g;
}
function UW(e, t) {
  var r = _a(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = qw([n, i]), s = _a(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (u === c)
    return [u];
  var l = Math.max(t, 2), f = Yw(new Ie(c).sub(u).div(l - 1), a, 0), d = [].concat(yf(Fu.rangeStep(new Ie(u), new Ie(c).sub(new Ie(0.99).mul(f)), f)), [c]);
  return n > i ? mf(d) : d;
}
var zW = Ww(BW), WW = Ww(UW);
function Ha(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function jh(e) {
  let t = e, r = e;
  e.length === 1 && (t = (o, s) => e(o) - s, r = HW(e));
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
function HW(e) {
  return (t, r) => Ha(e(t), r);
}
function Kw(e) {
  return e === null ? NaN : +e;
}
function* qW(e, t) {
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e)
      (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
const YW = jh(Ha), GW = YW.right;
jh(Kw).center;
const qa = GW;
var xf = Math.sqrt(50), wf = Math.sqrt(10), Sf = Math.sqrt(2);
function Af(e, t, r) {
  var n, i = -1, a, o, s;
  if (t = +t, e = +e, r = +r, e === t && r > 0)
    return [e];
  if ((n = t < e) && (a = e, e = t, t = a), (s = Xw(e, t, r)) === 0 || !isFinite(s))
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
function Xw(e, t, r) {
  var n = (t - e) / Math.max(0, r), i = Math.floor(Math.log(n) / Math.LN10), a = n / Math.pow(10, i);
  return i >= 0 ? (a >= xf ? 10 : a >= wf ? 5 : a >= Sf ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= xf ? 10 : a >= wf ? 5 : a >= Sf ? 2 : 1);
}
function _f(e, t, r) {
  var n = Math.abs(t - e) / Math.max(0, r), i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)), a = n / i;
  return a >= xf ? i *= 10 : a >= wf ? i *= 5 : a >= Sf && (i *= 2), t < e ? -i : i;
}
function am(e, t) {
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
function om(e, t) {
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
function Zw(e, t, r = 0, n = e.length - 1, i = Ha) {
  for (; n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, l = Math.log(u), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), v = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      Zw(e, t, p, v, i);
    }
    const a = e[t];
    let o = r, s = n;
    for (Hi(e, r, t), i(e[n], a) > 0 && Hi(e, r, n); o < s; ) {
      for (Hi(e, o, s), ++o, --s; i(e[o], a) < 0; )
        ++o;
      for (; i(e[s], a) > 0; )
        --s;
    }
    i(e[r], a) === 0 ? Hi(e, r, s) : (++s, Hi(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Hi(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function KW(e, t, r) {
  if (e = Float64Array.from(qW(e, r)), !!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return om(e);
    if (t >= 1)
      return am(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = am(Zw(e, a).subarray(0, a + 1)), s = om(e.subarray(a + 1));
    return o + (s - o) * (i - a);
  }
}
function XW(e, t, r = Kw) {
  if (!!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return +r(e[0], 0, e);
    if (t >= 1)
      return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), s = +r(e[a + 1], a + 1, e);
    return o + (s - o) * (i - a);
  }
}
function ZW(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Gt(e, t) {
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
const Of = Symbol("implicit");
function Dh() {
  var e = /* @__PURE__ */ new Map(), t = [], r = [], n = Of;
  function i(a) {
    var o = a + "", s = e.get(o);
    if (!s) {
      if (n !== Of)
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
    return Dh(t, r).unknown(n);
  }, Gt.apply(i, arguments), i;
}
function Oa() {
  var e = Dh().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, s = !1, u = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = i < n, v = p ? i : n, h = p ? n : i;
    a = (h - v) / Math.max(1, d - u + c * 2), s && (a = Math.floor(a)), v += (h - v - a * (d - u)) * l, o = a * (1 - u), s && (v = Math.round(v), o = Math.round(o));
    var g = ZW(d).map(function(y) {
      return v + a * y;
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
    return Oa(t(), [n, i]).round(s).paddingInner(u).paddingOuter(c).align(l);
  }, Gt.apply(f(), arguments);
}
function Jw(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Jw(t());
  }, e;
}
function ca() {
  return Jw(Oa.apply(null, arguments).paddingInner(1));
}
function Fh(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Qw(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t)
    r[n] = t[n];
  return r;
}
function Ya() {
}
var Ea = 0.7, Ns = 1 / Ea, ni = "\\s*([+-]?\\d+)\\s*", Ta = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", hr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", JW = /^#([0-9a-f]{3,8})$/, QW = new RegExp("^rgb\\(" + [ni, ni, ni] + "\\)$"), eH = new RegExp("^rgb\\(" + [hr, hr, hr] + "\\)$"), tH = new RegExp("^rgba\\(" + [ni, ni, ni, Ta] + "\\)$"), rH = new RegExp("^rgba\\(" + [hr, hr, hr, Ta] + "\\)$"), nH = new RegExp("^hsl\\(" + [Ta, hr, hr] + "\\)$"), iH = new RegExp("^hsla\\(" + [Ta, hr, hr, Ta] + "\\)$"), sm = {
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
Fh(Ya, Pa, {
  copy: function(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: um,
  formatHex: um,
  formatHsl: aH,
  formatRgb: cm,
  toString: cm
});
function um() {
  return this.rgb().formatHex();
}
function aH() {
  return eS(this).formatHsl();
}
function cm() {
  return this.rgb().formatRgb();
}
function Pa(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = JW.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? lm(t) : r === 3 ? new Lt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? go(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? go(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = QW.exec(e)) ? new Lt(t[1], t[2], t[3], 1) : (t = eH.exec(e)) ? new Lt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = tH.exec(e)) ? go(t[1], t[2], t[3], t[4]) : (t = rH.exec(e)) ? go(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = nH.exec(e)) ? hm(t[1], t[2] / 100, t[3] / 100, 1) : (t = iH.exec(e)) ? hm(t[1], t[2] / 100, t[3] / 100, t[4]) : sm.hasOwnProperty(e) ? lm(sm[e]) : e === "transparent" ? new Lt(NaN, NaN, NaN, 0) : null;
}
function lm(e) {
  return new Lt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function go(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Lt(e, t, r, n);
}
function oH(e) {
  return e instanceof Ya || (e = Pa(e)), e ? (e = e.rgb(), new Lt(e.r, e.g, e.b, e.opacity)) : new Lt();
}
function Ef(e, t, r, n) {
  return arguments.length === 1 ? oH(e) : new Lt(e, t, r, n == null ? 1 : n);
}
function Lt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Fh(Lt, Ef, Qw(Ya, {
  brighter: function(e) {
    return e = e == null ? Ns : Math.pow(Ns, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? Ea : Math.pow(Ea, e), new Lt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fm,
  formatHex: fm,
  formatRgb: dm,
  toString: dm
}));
function fm() {
  return "#" + Hc(this.r) + Hc(this.g) + Hc(this.b);
}
function dm() {
  var e = this.opacity;
  return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (e === 1 ? ")" : ", " + e + ")");
}
function Hc(e) {
  return e = Math.max(0, Math.min(255, Math.round(e) || 0)), (e < 16 ? "0" : "") + e.toString(16);
}
function hm(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new or(e, t, r, n);
}
function eS(e) {
  if (e instanceof or)
    return new or(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ya || (e = Pa(e)), !e)
    return new or();
  if (e instanceof or)
    return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new or(o, s, u, e.opacity);
}
function sH(e, t, r, n) {
  return arguments.length === 1 ? eS(e) : new or(e, t, r, n == null ? 1 : n);
}
function or(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Fh(or, sH, Qw(Ya, {
  brighter: function(e) {
    return e = e == null ? Ns : Math.pow(Ns, e), new or(this.h, this.s, this.l * e, this.opacity);
  },
  darker: function(e) {
    return e = e == null ? Ea : Math.pow(Ea, e), new or(this.h, this.s, this.l * e, this.opacity);
  },
  rgb: function() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Lt(
      qc(e >= 240 ? e - 240 : e + 120, i, n),
      qc(e, i, n),
      qc(e < 120 ? e + 240 : e - 120, i, n),
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
function qc(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Vh = (e) => () => e;
function uH(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function cH(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function lH(e) {
  return (e = +e) == 1 ? tS : function(t, r) {
    return r - t ? cH(t, r, e) : Vh(isNaN(t) ? r : t);
  };
}
function tS(e, t) {
  var r = t - e;
  return r ? uH(e, r) : Vh(isNaN(e) ? t : e);
}
const pm = function e(t) {
  var r = lH(t);
  function n(i, a) {
    var o = r((i = Ef(i)).r, (a = Ef(a)).r), s = r(i.g, a.g), u = r(i.b, a.b), c = tS(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = s(l), i.b = u(l), i.opacity = c(l), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function fH(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i)
      n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function dH(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function hH(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o)
    i[o] = Ri(e[o], t[o]);
  for (; o < r; ++o)
    a[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o)
      a[o] = i[o](s);
    return a;
  };
}
function pH(e, t) {
  var r = new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function ks(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function vH(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Ri(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r)
      n[i] = r[i](a);
    return n;
  };
}
var Tf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Yc = new RegExp(Tf.source, "g");
function gH(e) {
  return function() {
    return e;
  };
}
function mH(e) {
  return function(t) {
    return e(t) + "";
  };
}
function yH(e, t) {
  var r = Tf.lastIndex = Yc.lastIndex = 0, n, i, a, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = Tf.exec(e)) && (i = Yc.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: ks(n, i) })), r = Yc.lastIndex;
  return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? mH(u[0].x) : gH(t) : (t = u.length, function(c) {
    for (var l = 0, f; l < t; ++l)
      s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function Ri(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Vh(t) : (r === "number" ? ks : r === "string" ? (n = Pa(t)) ? (t = n, pm) : yH : t instanceof Pa ? pm : t instanceof Date ? pH : dH(t) ? fH : Array.isArray(t) ? hH : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? vH : ks)(e, t);
}
function Bh(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function bH(e, t) {
  t === void 0 && (t = e, e = Ri);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; )
    a[r] = e(i, i = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[s](o - s);
  };
}
function xH(e) {
  return function() {
    return e;
  };
}
function Rs(e) {
  return +e;
}
var vm = [0, 1];
function _t(e) {
  return e;
}
function Pf(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : xH(isNaN(t) ? NaN : 0.5);
}
function wH(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function SH(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Pf(i, n), a = r(o, a)) : (n = Pf(n, i), a = r(a, o)), function(s) {
    return a(n(s));
  };
}
function AH(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Pf(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = qa(e, s, 1, n) - 1;
    return a[u](i[u](s));
  };
}
function Ga(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Vu() {
  var e = vm, t = vm, r = Ri, n, i, a, o = _t, s, u, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== _t && (o = wH(e[0], e[d - 1])), s = d > 2 ? AH : SH, u = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (u || (u = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((c || (c = s(t, e.map(n), ks)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Rs), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Bh, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : _t, l()) : o !== _t;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, p) {
    return n = d, i = p, l();
  };
}
function Uh() {
  return Vu()(_t, _t);
}
function _H(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Is(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function pi(e) {
  return e = Is(Math.abs(e)), e ? e[1] : NaN;
}
function OH(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), a.push(r.substring(i -= s, i + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function EH(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var TH = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $s(e) {
  if (!(t = TH.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new zh({
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
$s.prototype = zh.prototype;
function zh(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
zh.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function PH(e) {
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
var rS;
function CH(e, t) {
  var r = Is(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1], a = i - (rS = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Is(e, Math.max(0, t + a - 1))[0];
}
function gm(e, t) {
  var r = Is(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const mm = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: _H,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => gm(e * 100, t),
  r: gm,
  s: CH,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ym(e) {
  return e;
}
var bm = Array.prototype.map, xm = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function MH(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ym : OH(bm.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? ym : EH(bm.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "\u2212" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = $s(f);
    var d = f.fill, p = f.align, v = f.sign, h = f.symbol, g = f.zero, y = f.width, w = f.comma, x = f.precision, b = f.trim, m = f.type;
    m === "n" ? (w = !0, m = "g") : mm[m] || (x === void 0 && (x = 12), b = !0, m = "g"), (g || d === "0" && p === "=") && (g = !0, d = "0", p = "=");
    var S = h === "$" ? r : h === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", A = h === "$" ? n : /[%p]/.test(m) ? o : "", O = mm[m], E = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function M(C) {
      var N = S, k = A, D, j, R;
      if (m === "c")
        k = O(C) + k, C = "";
      else {
        C = +C;
        var Q = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? u : O(Math.abs(C), x), b && (C = PH(C)), Q && +C == 0 && v !== "+" && (Q = !1), N = (Q ? v === "(" ? v : s : v === "-" || v === "(" ? "" : v) + N, k = (m === "s" ? xm[8 + rS / 3] : "") + k + (Q && v === "(" ? ")" : ""), E) {
          for (D = -1, j = C.length; ++D < j; )
            if (R = C.charCodeAt(D), 48 > R || R > 57) {
              k = (R === 46 ? i + C.slice(D + 1) : C.slice(D)) + k, C = C.slice(0, D);
              break;
            }
        }
      }
      w && !g && (C = t(C, 1 / 0));
      var K = N.length + C.length + k.length, te = K < y ? new Array(y - K + 1).join(d) : "";
      switch (w && g && (C = t(te + C, te.length ? y - k.length : 1 / 0), te = ""), p) {
        case "<":
          C = N + C + k + te;
          break;
        case "=":
          C = N + te + C + k;
          break;
        case "^":
          C = te.slice(0, K = te.length >> 1) + N + C + k + te.slice(K);
          break;
        default:
          C = te + N + C + k;
          break;
      }
      return a(C);
    }
    return M.toString = function() {
      return f + "";
    }, M;
  }
  function l(f, d) {
    var p = c((f = $s(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(pi(d) / 3))) * 3, h = Math.pow(10, -v), g = xm[8 + v / 3];
    return function(y) {
      return p(h * y) + g;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var mo, Wh, nS;
NH({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function NH(e) {
  return mo = MH(e), Wh = mo.format, nS = mo.formatPrefix, mo;
}
function kH(e) {
  return Math.max(0, -pi(Math.abs(e)));
}
function RH(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(pi(t) / 3))) * 3 - pi(Math.abs(e)));
}
function IH(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, pi(t) - pi(e)) + 1;
}
function iS(e, t, r, n) {
  var i = _f(e, t, r), a;
  switch (n = $s(n == null ? ",f" : n), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = RH(i, o)) && (n.precision = a), nS(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = IH(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = kH(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Wh(n);
}
function cn(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Af(n[0], n[n.length - 1], r == null ? 10 : r);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return iS(i[0], i[i.length - 1], r == null ? 10 : r, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], s = n[a], u, c, l = 10;
    for (s < o && (c = o, o = s, s = c, c = i, i = a, a = c); l-- > 0; ) {
      if (c = Xw(o, s, r), c === u)
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
function Ls() {
  var e = Uh();
  return e.copy = function() {
    return Ga(e, Ls());
  }, Gt.apply(e, arguments), cn(e);
}
function aS(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Rs), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return aS(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Rs) : [0, 1], cn(r);
}
function oS(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function wm(e) {
  return Math.log(e);
}
function Sm(e) {
  return Math.exp(e);
}
function $H(e) {
  return -Math.log(-e);
}
function LH(e) {
  return -Math.exp(-e);
}
function jH(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function DH(e) {
  return e === 10 ? jH : e === Math.E ? Math.exp : function(t) {
    return Math.pow(e, t);
  };
}
function FH(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), function(t) {
    return Math.log(t) / e;
  });
}
function Am(e) {
  return function(t) {
    return -e(-t);
  };
}
function Hh(e) {
  var t = e(wm, Sm), r = t.domain, n = 10, i, a;
  function o() {
    return i = FH(n), a = DH(n), r()[0] < 0 ? (i = Am(i), a = Am(a), e($H, LH)) : e(wm, Sm), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = function(s) {
    var u = r(), c = u[0], l = u[u.length - 1], f;
    (f = l < c) && (d = c, c = l, l = d);
    var d = i(c), p = i(l), v, h, g, y = s == null ? 10 : +s, w = [];
    if (!(n % 1) && p - d < y) {
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
      w.length * 2 < y && (w = Af(c, l, y));
    } else
      w = Af(d, p, Math.min(p - d, y)).map(a);
    return f ? w.reverse() : w;
  }, t.tickFormat = function(s, u) {
    if (u == null && (u = n === 10 ? ".0e" : ","), typeof u != "function" && (u = Wh(u)), s === 1 / 0)
      return u;
    s == null && (s = 10);
    var c = Math.max(1, n * s / t.ticks().length);
    return function(l) {
      var f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? u(l) : "";
    };
  }, t.nice = function() {
    return r(oS(r(), {
      floor: function(s) {
        return a(Math.floor(i(s)));
      },
      ceil: function(s) {
        return a(Math.ceil(i(s)));
      }
    }));
  }, t;
}
function sS() {
  var e = Hh(Vu()).domain([1, 10]);
  return e.copy = function() {
    return Ga(e, sS()).base(e.base());
  }, Gt.apply(e, arguments), e;
}
function _m(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Om(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function qh(e) {
  var t = 1, r = e(_m(t), Om(t));
  return r.constant = function(n) {
    return arguments.length ? e(_m(t = +n), Om(t)) : t;
  }, cn(r);
}
function uS() {
  var e = qh(Vu());
  return e.copy = function() {
    return Ga(e, uS()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function Em(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function VH(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function BH(e) {
  return e < 0 ? -e * e : e * e;
}
function Yh(e) {
  var t = e(_t, _t), r = 1;
  function n() {
    return r === 1 ? e(_t, _t) : r === 0.5 ? e(VH, BH) : e(Em(r), Em(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, cn(t);
}
function Gh() {
  var e = Yh(Vu());
  return e.copy = function() {
    return Ga(e, Gh()).exponent(e.exponent());
  }, Gt.apply(e, arguments), e;
}
function UH() {
  return Gh.apply(null, arguments).exponent(0.5);
}
function Tm(e) {
  return Math.sign(e) * e * e;
}
function zH(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function cS() {
  var e = Uh(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = zH(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Tm(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Rs)).map(Tm)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return cS(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Gt.apply(i, arguments), cn(i);
}
function lS() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; )
      r[o - 1] = XW(e, o / s);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[qa(r, o)];
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
    return e.sort(Ha), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return lS().domain(e).range(t).unknown(n);
  }, Gt.apply(a, arguments);
}
function fS() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(u) {
    return u != null && u <= u ? i[qa(n, u, 0, r)] : a;
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
    return fS().domain([e, t]).range(i).unknown(a);
  }, Gt.apply(cn(o), arguments);
}
function dS() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[qa(e, a, 0, n)] : r;
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
    return dS().domain(e).range(t).unknown(r);
  }, Gt.apply(i, arguments);
}
var Gc = new Date(), Kc = new Date();
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
    return Gc.setTime(+a), Kc.setTime(+o), e(Gc), e(Kc), Math.floor(r(Gc, Kc));
  }, i.every = function(a) {
    return a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? function(o) {
      return n(o) % a === 0;
    } : function(o) {
      return i.count(0, o) % a === 0;
    }) : i;
  }), i;
}
var js = st(function() {
}, function(e, t) {
  e.setTime(+e + t);
}, function(e, t) {
  return t - e;
});
js.every = function(e) {
  return e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? st(function(t) {
    t.setTime(Math.floor(t / e) * e);
  }, function(t, r) {
    t.setTime(+t + r * e);
  }, function(t, r) {
    return (r - t) / e;
  }) : js;
};
const WH = js;
js.range;
const Ar = 1e3, Wt = Ar * 60, _r = Wt * 60, Cn = _r * 24, Kh = Cn * 7, Pm = Cn * 30, Xc = Cn * 365;
var hS = st(function(e) {
  e.setTime(e - e.getMilliseconds());
}, function(e, t) {
  e.setTime(+e + t * Ar);
}, function(e, t) {
  return (t - e) / Ar;
}, function(e) {
  return e.getUTCSeconds();
});
const Xn = hS;
hS.range;
var pS = st(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar);
}, function(e, t) {
  e.setTime(+e + t * Wt);
}, function(e, t) {
  return (t - e) / Wt;
}, function(e) {
  return e.getMinutes();
});
const vS = pS;
pS.range;
var gS = st(function(e) {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ar - e.getMinutes() * Wt);
}, function(e, t) {
  e.setTime(+e + t * _r);
}, function(e, t) {
  return (t - e) / _r;
}, function(e) {
  return e.getHours();
});
const mS = gS;
gS.range;
var yS = st(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Wt) / Cn,
  (e) => e.getDate() - 1
);
const Bu = yS;
yS.range;
function In(e) {
  return st(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Wt) / Kh;
  });
}
var Uu = In(0), Ds = In(1), HH = In(2), qH = In(3), vi = In(4), YH = In(5), GH = In(6);
Uu.range;
Ds.range;
HH.range;
qH.range;
vi.range;
YH.range;
GH.range;
var bS = st(function(e) {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setMonth(e.getMonth() + t);
}, function(e, t) {
  return t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12;
}, function(e) {
  return e.getMonth();
});
const xS = bS;
bS.range;
var Xh = st(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
Xh.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : st(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
const Mn = Xh;
Xh.range;
var wS = st(function(e) {
  e.setUTCSeconds(0, 0);
}, function(e, t) {
  e.setTime(+e + t * Wt);
}, function(e, t) {
  return (t - e) / Wt;
}, function(e) {
  return e.getUTCMinutes();
});
const SS = wS;
wS.range;
var AS = st(function(e) {
  e.setUTCMinutes(0, 0, 0);
}, function(e, t) {
  e.setTime(+e + t * _r);
}, function(e, t) {
  return (t - e) / _r;
}, function(e) {
  return e.getUTCHours();
});
const _S = AS;
AS.range;
var OS = st(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Cn;
}, function(e) {
  return e.getUTCDate() - 1;
});
const zu = OS;
OS.range;
function $n(e) {
  return st(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / Kh;
  });
}
var Wu = $n(0), Fs = $n(1), KH = $n(2), XH = $n(3), gi = $n(4), ZH = $n(5), JH = $n(6);
Wu.range;
Fs.range;
KH.range;
XH.range;
gi.range;
ZH.range;
JH.range;
var ES = st(function(e) {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCMonth(e.getUTCMonth() + t);
}, function(e, t) {
  return t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12;
}, function(e) {
  return e.getUTCMonth();
});
const TS = ES;
ES.range;
var Zh = st(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Zh.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : st(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
const Nn = Zh;
Zh.range;
function PS(e, t, r, n, i, a) {
  const o = [
    [Xn, 1, Ar],
    [Xn, 5, 5 * Ar],
    [Xn, 15, 15 * Ar],
    [Xn, 30, 30 * Ar],
    [a, 1, Wt],
    [a, 5, 5 * Wt],
    [a, 15, 15 * Wt],
    [a, 30, 30 * Wt],
    [i, 1, _r],
    [i, 3, 3 * _r],
    [i, 6, 6 * _r],
    [i, 12, 12 * _r],
    [n, 1, Cn],
    [n, 2, 2 * Cn],
    [r, 1, Kh],
    [t, 1, Pm],
    [t, 3, 3 * Pm],
    [e, 1, Xc]
  ];
  function s(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : u(c, l, f), v = p ? p.range(c, +l + 1) : [];
    return d ? v.reverse() : v;
  }
  function u(c, l, f) {
    const d = Math.abs(l - c) / f, p = jh(([, , g]) => g).right(o, d);
    if (p === o.length)
      return e.every(_f(c / Xc, l / Xc, f));
    if (p === 0)
      return WH.every(Math.max(_f(c, l, f), 1));
    const [v, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return v.every(h);
  }
  return [s, u];
}
const [QH, eq] = PS(Nn, TS, Wu, zu, _S, SS), [tq, rq] = PS(Mn, xS, Uu, Bu, mS, vS);
function Zc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Jc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function qi(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function nq(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = Yi(i), l = Gi(i), f = Yi(a), d = Gi(a), p = Yi(o), v = Gi(o), h = Yi(s), g = Gi(s), y = Yi(u), w = Gi(u), x = {
    a: Q,
    A: K,
    b: te,
    B: $,
    c: null,
    d: Im,
    e: Im,
    f: Eq,
    g: Lq,
    G: Dq,
    H: Aq,
    I: _q,
    j: Oq,
    L: CS,
    m: Tq,
    M: Pq,
    p: B,
    q: X,
    Q: jm,
    s: Dm,
    S: Cq,
    u: Mq,
    U: Nq,
    V: kq,
    w: Rq,
    W: Iq,
    x: null,
    X: null,
    y: $q,
    Y: jq,
    Z: Fq,
    "%": Lm
  }, b = {
    a: q,
    A: L,
    b: W,
    B: ee,
    c: null,
    d: $m,
    e: $m,
    f: zq,
    g: Qq,
    G: tY,
    H: Vq,
    I: Bq,
    j: Uq,
    L: NS,
    m: Wq,
    M: Hq,
    p: se,
    q: J,
    Q: jm,
    s: Dm,
    S: qq,
    u: Yq,
    U: Gq,
    V: Kq,
    w: Xq,
    W: Zq,
    x: null,
    X: null,
    y: Jq,
    Y: eY,
    Z: rY,
    "%": Lm
  }, m = {
    a: M,
    A: C,
    b: N,
    B: k,
    c: D,
    d: km,
    e: km,
    f: bq,
    g: Nm,
    G: Mm,
    H: Rm,
    I: Rm,
    j: vq,
    L: yq,
    m: pq,
    M: gq,
    p: E,
    q: hq,
    Q: wq,
    s: Sq,
    S: mq,
    u: uq,
    U: cq,
    V: lq,
    w: sq,
    W: fq,
    x: j,
    X: R,
    y: Nm,
    Y: Mm,
    Z: dq,
    "%": xq
  };
  x.x = S(r, x), x.X = S(n, x), x.c = S(t, x), b.x = S(r, b), b.X = S(n, b), b.c = S(t, b);
  function S(F, G) {
    return function(ie) {
      var T = [], he = -1, H = 0, me = F.length, Se, ht, nr;
      for (ie instanceof Date || (ie = new Date(+ie)); ++he < me; )
        F.charCodeAt(he) === 37 && (T.push(F.slice(H, he)), (ht = Cm[Se = F.charAt(++he)]) != null ? Se = F.charAt(++he) : ht = Se === "e" ? " " : "0", (nr = G[Se]) && (Se = nr(ie, ht)), T.push(Se), H = he + 1);
      return T.push(F.slice(H, he)), T.join("");
    };
  }
  function A(F, G) {
    return function(ie) {
      var T = qi(1900, void 0, 1), he = O(T, F, ie += "", 0), H, me;
      if (he != ie.length)
        return null;
      if ("Q" in T)
        return new Date(T.Q);
      if ("s" in T)
        return new Date(T.s * 1e3 + ("L" in T ? T.L : 0));
      if (G && !("Z" in T) && (T.Z = 0), "p" in T && (T.H = T.H % 12 + T.p * 12), T.m === void 0 && (T.m = "q" in T ? T.q : 0), "V" in T) {
        if (T.V < 1 || T.V > 53)
          return null;
        "w" in T || (T.w = 1), "Z" in T ? (H = Jc(qi(T.y, 0, 1)), me = H.getUTCDay(), H = me > 4 || me === 0 ? Fs.ceil(H) : Fs(H), H = zu.offset(H, (T.V - 1) * 7), T.y = H.getUTCFullYear(), T.m = H.getUTCMonth(), T.d = H.getUTCDate() + (T.w + 6) % 7) : (H = Zc(qi(T.y, 0, 1)), me = H.getDay(), H = me > 4 || me === 0 ? Ds.ceil(H) : Ds(H), H = Bu.offset(H, (T.V - 1) * 7), T.y = H.getFullYear(), T.m = H.getMonth(), T.d = H.getDate() + (T.w + 6) % 7);
      } else
        ("W" in T || "U" in T) && ("w" in T || (T.w = "u" in T ? T.u % 7 : "W" in T ? 1 : 0), me = "Z" in T ? Jc(qi(T.y, 0, 1)).getUTCDay() : Zc(qi(T.y, 0, 1)).getDay(), T.m = 0, T.d = "W" in T ? (T.w + 6) % 7 + T.W * 7 - (me + 5) % 7 : T.w + T.U * 7 - (me + 6) % 7);
      return "Z" in T ? (T.H += T.Z / 100 | 0, T.M += T.Z % 100, Jc(T)) : Zc(T);
    };
  }
  function O(F, G, ie, T) {
    for (var he = 0, H = G.length, me = ie.length, Se, ht; he < H; ) {
      if (T >= me)
        return -1;
      if (Se = G.charCodeAt(he++), Se === 37) {
        if (Se = G.charAt(he++), ht = m[Se in Cm ? G.charAt(he++) : Se], !ht || (T = ht(F, ie, T)) < 0)
          return -1;
      } else if (Se != ie.charCodeAt(T++))
        return -1;
    }
    return T;
  }
  function E(F, G, ie) {
    var T = c.exec(G.slice(ie));
    return T ? (F.p = l.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function M(F, G, ie) {
    var T = p.exec(G.slice(ie));
    return T ? (F.w = v.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function C(F, G, ie) {
    var T = f.exec(G.slice(ie));
    return T ? (F.w = d.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function N(F, G, ie) {
    var T = y.exec(G.slice(ie));
    return T ? (F.m = w.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function k(F, G, ie) {
    var T = h.exec(G.slice(ie));
    return T ? (F.m = g.get(T[0].toLowerCase()), ie + T[0].length) : -1;
  }
  function D(F, G, ie) {
    return O(F, t, G, ie);
  }
  function j(F, G, ie) {
    return O(F, r, G, ie);
  }
  function R(F, G, ie) {
    return O(F, n, G, ie);
  }
  function Q(F) {
    return o[F.getDay()];
  }
  function K(F) {
    return a[F.getDay()];
  }
  function te(F) {
    return u[F.getMonth()];
  }
  function $(F) {
    return s[F.getMonth()];
  }
  function B(F) {
    return i[+(F.getHours() >= 12)];
  }
  function X(F) {
    return 1 + ~~(F.getMonth() / 3);
  }
  function q(F) {
    return o[F.getUTCDay()];
  }
  function L(F) {
    return a[F.getUTCDay()];
  }
  function W(F) {
    return u[F.getUTCMonth()];
  }
  function ee(F) {
    return s[F.getUTCMonth()];
  }
  function se(F) {
    return i[+(F.getUTCHours() >= 12)];
  }
  function J(F) {
    return 1 + ~~(F.getUTCMonth() / 3);
  }
  return {
    format: function(F) {
      var G = S(F += "", x);
      return G.toString = function() {
        return F;
      }, G;
    },
    parse: function(F) {
      var G = A(F += "", !1);
      return G.toString = function() {
        return F;
      }, G;
    },
    utcFormat: function(F) {
      var G = S(F += "", b);
      return G.toString = function() {
        return F;
      }, G;
    },
    utcParse: function(F) {
      var G = A(F += "", !0);
      return G.toString = function() {
        return F;
      }, G;
    }
  };
}
var Cm = { "-": "", _: " ", 0: "0" }, ut = /^\s*\d+/, iq = /^%/, aq = /[\\^$*+?|[\]().{}]/g;
function we(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function oq(e) {
  return e.replace(aq, "\\$&");
}
function Yi(e) {
  return new RegExp("^(?:" + e.map(oq).join("|") + ")", "i");
}
function Gi(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function sq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function uq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function cq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function lq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function fq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Mm(e, t, r) {
  var n = ut.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Nm(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function dq(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function hq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function pq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function km(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function vq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Rm(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function gq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function mq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function yq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function bq(e, t, r) {
  var n = ut.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function xq(e, t, r) {
  var n = iq.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function wq(e, t, r) {
  var n = ut.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Sq(e, t, r) {
  var n = ut.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Im(e, t) {
  return we(e.getDate(), t, 2);
}
function Aq(e, t) {
  return we(e.getHours(), t, 2);
}
function _q(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function Oq(e, t) {
  return we(1 + Bu.count(Mn(e), e), t, 3);
}
function CS(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function Eq(e, t) {
  return CS(e, t) + "000";
}
function Tq(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function Pq(e, t) {
  return we(e.getMinutes(), t, 2);
}
function Cq(e, t) {
  return we(e.getSeconds(), t, 2);
}
function Mq(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Nq(e, t) {
  return we(Uu.count(Mn(e) - 1, e), t, 2);
}
function MS(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? vi(e) : vi.ceil(e);
}
function kq(e, t) {
  return e = MS(e), we(vi.count(Mn(e), e) + (Mn(e).getDay() === 4), t, 2);
}
function Rq(e) {
  return e.getDay();
}
function Iq(e, t) {
  return we(Ds.count(Mn(e) - 1, e), t, 2);
}
function $q(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function Lq(e, t) {
  return e = MS(e), we(e.getFullYear() % 100, t, 2);
}
function jq(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function Dq(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? vi(e) : vi.ceil(e), we(e.getFullYear() % 1e4, t, 4);
}
function Fq(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function $m(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function Vq(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function Bq(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function Uq(e, t) {
  return we(1 + zu.count(Nn(e), e), t, 3);
}
function NS(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function zq(e, t) {
  return NS(e, t) + "000";
}
function Wq(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function Hq(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function qq(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function Yq(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Gq(e, t) {
  return we(Wu.count(Nn(e) - 1, e), t, 2);
}
function kS(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? gi(e) : gi.ceil(e);
}
function Kq(e, t) {
  return e = kS(e), we(gi.count(Nn(e), e) + (Nn(e).getUTCDay() === 4), t, 2);
}
function Xq(e) {
  return e.getUTCDay();
}
function Zq(e, t) {
  return we(Fs.count(Nn(e) - 1, e), t, 2);
}
function Jq(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function Qq(e, t) {
  return e = kS(e), we(e.getUTCFullYear() % 100, t, 2);
}
function eY(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function tY(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? gi(e) : gi.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4);
}
function rY() {
  return "+0000";
}
function Lm() {
  return "%";
}
function jm(e) {
  return +e;
}
function Dm(e) {
  return Math.floor(+e / 1e3);
}
var qn, RS, IS;
nY({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function nY(e) {
  return qn = nq(e), RS = qn.format, qn.parse, IS = qn.utcFormat, qn.utcParse, qn;
}
function iY(e) {
  return new Date(e);
}
function aY(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Jh(e, t, r, n, i, a, o, s, u, c) {
  var l = Uh(), f = l.invert, d = l.domain, p = c(".%L"), v = c(":%S"), h = c("%I:%M"), g = c("%I %p"), y = c("%a %d"), w = c("%b %d"), x = c("%B"), b = c("%Y");
  function m(S) {
    return (u(S) < S ? p : s(S) < S ? v : o(S) < S ? h : a(S) < S ? g : n(S) < S ? i(S) < S ? y : w : r(S) < S ? x : b)(S);
  }
  return l.invert = function(S) {
    return new Date(f(S));
  }, l.domain = function(S) {
    return arguments.length ? d(Array.from(S, aY)) : d().map(iY);
  }, l.ticks = function(S) {
    var A = d();
    return e(A[0], A[A.length - 1], S == null ? 10 : S);
  }, l.tickFormat = function(S, A) {
    return A == null ? m : c(A);
  }, l.nice = function(S) {
    var A = d();
    return (!S || typeof S.range != "function") && (S = t(A[0], A[A.length - 1], S == null ? 10 : S)), S ? d(oS(A, S)) : l;
  }, l.copy = function() {
    return Ga(l, Jh(e, t, r, n, i, a, o, s, u, c));
  }, l;
}
function oY() {
  return Gt.apply(Jh(tq, rq, Mn, xS, Uu, Bu, mS, vS, Xn, RS).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function sY() {
  return Gt.apply(Jh(QH, eq, Nn, TS, Wu, zu, _S, SS, Xn, IS).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Hu() {
  var e = 0, t = 1, r, n, i, a, o = _t, s = !1, u;
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
  return c.range = l(Ri), c.rangeRound = l(Bh), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function ln(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function $S() {
  var e = cn(Hu()(_t));
  return e.copy = function() {
    return ln(e, $S());
  }, Ir.apply(e, arguments);
}
function LS() {
  var e = Hh(Hu()).domain([1, 10]);
  return e.copy = function() {
    return ln(e, LS()).base(e.base());
  }, Ir.apply(e, arguments);
}
function jS() {
  var e = qh(Hu());
  return e.copy = function() {
    return ln(e, jS()).constant(e.constant());
  }, Ir.apply(e, arguments);
}
function Qh() {
  var e = Yh(Hu());
  return e.copy = function() {
    return ln(e, Qh()).exponent(e.exponent());
  }, Ir.apply(e, arguments);
}
function uY() {
  return Qh.apply(null, arguments).exponent(0.5);
}
function DS() {
  var e = [], t = _t;
  function r(n) {
    if (n != null && !isNaN(n = +n))
      return t((qa(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let i of n)
      i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Ha), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => KW(e, a / n));
  }, r.copy = function() {
    return DS(t).domain(e);
  }, Ir.apply(r, arguments);
}
function qu() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, s, u, c = _t, l, f = !1, d;
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
      var y, w, x;
      return arguments.length ? ([y, w, x] = g, c = bH(h, [y, w, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = v(Ri), p.rangeRound = v(Bh), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, i = h(e), a = h(t), o = h(r), s = i === a ? 0 : 0.5 / (a - i), u = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p;
  };
}
function FS() {
  var e = cn(qu()(_t));
  return e.copy = function() {
    return ln(e, FS());
  }, Ir.apply(e, arguments);
}
function VS() {
  var e = Hh(qu()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ln(e, VS()).base(e.base());
  }, Ir.apply(e, arguments);
}
function BS() {
  var e = qh(qu());
  return e.copy = function() {
    return ln(e, BS()).constant(e.constant());
  }, Ir.apply(e, arguments);
}
function ep() {
  var e = Yh(qu());
  return e.copy = function() {
    return ln(e, ep()).exponent(e.exponent());
  }, Ir.apply(e, arguments);
}
function cY() {
  return ep.apply(null, arguments).exponent(0.5);
}
const Fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Oa,
  scalePoint: ca,
  scaleIdentity: aS,
  scaleLinear: Ls,
  scaleLog: sS,
  scaleSymlog: uS,
  scaleOrdinal: Dh,
  scaleImplicit: Of,
  scalePow: Gh,
  scaleSqrt: UH,
  scaleRadial: cS,
  scaleQuantile: lS,
  scaleQuantize: fS,
  scaleThreshold: dS,
  scaleTime: oY,
  scaleUtc: sY,
  scaleSequential: $S,
  scaleSequentialLog: LS,
  scaleSequentialPow: Qh,
  scaleSequentialSqrt: uY,
  scaleSequentialSymlog: jS,
  scaleSequentialQuantile: DS,
  scaleDiverging: FS,
  scaleDivergingLog: VS,
  scaleDivergingPow: ep,
  scaleDivergingSqrt: cY,
  scaleDivergingSymlog: BS,
  tickFormat: iS
}, Symbol.toStringTag, { value: "Module" }));
function Vm(e) {
  return hY(e) || dY(e) || fY(e) || lY();
}
function lY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fY(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Cf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Cf(e, t);
  }
}
function dY(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function hY(e) {
  if (Array.isArray(e))
    return Cf(e);
}
function Cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bm(Object(r), !0).forEach(function(n) {
      ii(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ii(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function It(e, t, r) {
  return le(e) || le(t) ? r : nt(t) ? Pt(e, t, r) : de(t) ? t(e) : r;
}
function Vs(e, t, r, n) {
  var i = gW(e, function(s) {
    return It(s, t);
  });
  if (r === "number") {
    var a = i.filter(function(s) {
      return re(s) || parseFloat(s);
    });
    return a.length ? [ju(a), Lu(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(s) {
    return !le(s);
  }) : i;
  return o.map(function(s) {
    return nt(s) || s instanceof Date ? s : "";
  });
}
var pY = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (s > 1) {
    if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
      for (var u = a.range, c = 0; c < s; c++) {
        var l = c > 0 ? i[c - 1].coordinate : i[s - 1].coordinate, f = i[c].coordinate, d = c >= s - 1 ? i[0].coordinate : i[c + 1].coordinate, p = void 0;
        if (Et(f - l) !== Et(d - f)) {
          var v = [];
          if (Et(d - f) === Et(u[1] - u[0])) {
            p = d;
            var h = f + u[1] - u[0];
            v[0] = Math.min(h, (h + l) / 2), v[1] = Math.max(h, (h + l) / 2);
          } else {
            p = l;
            var g = d + u[1] - u[0];
            v[0] = Math.min(f, (g + f) / 2), v[1] = Math.max(f, (g + f) / 2);
          }
          var y = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
          if (t > y[0] && t <= y[1] || t >= v[0] && t <= v[1]) {
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
}, tp = function(t) {
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
}, US = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Yr(r, wa.displayName);
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
      color: tp(c),
      value: d || f,
      payload: c.props
    };
  }), At(At(At({}, o.props), wa.getWithHeight(o, i)), {}, {
    payload: s,
    item: o
  });
}, vY = function(t) {
  var r = t.barSize, n = t.stackGroups, i = n === void 0 ? {} : n;
  if (!i)
    return {};
  for (var a = {}, o = Object.keys(i), s = 0, u = o.length; s < u; s++)
    for (var c = i[o[s]].stackGroups, l = Object.keys(c), f = 0, d = l.length; f < d; f++) {
      var p = c[l[f]], v = p.items, h = p.cateAxisId, g = v.filter(function(x) {
        return Jr(x.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var y = g[0].props.barSize, w = g[0].props[h];
        a[w] || (a[w] = []), a[w].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: le(y) ? r : y
        });
      }
    }
  return a;
}, gY = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, s = t.maxBarSize, u = o.length;
  if (u < 1)
    return null;
  var c = $t(r, i, 0, !0), l;
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
      var m = [].concat(Vm(x), [{
        item: b.item,
        position: {
          offset: h.offset + h.size + c,
          size: f ? d : b.barSize
        }
      }]);
      return h = m[m.length - 1].position, b.stackList && b.stackList.length && b.stackList.forEach(function(S) {
        m.push({
          item: S,
          position: h
        });
      }), m;
    }, []);
  } else {
    var g = $t(n, i, 0, !0);
    i - 2 * g - (u - 1) * c <= 0 && (c = 0);
    var y = (i - 2 * g - (u - 1) * c) / u;
    y > 1 && (y >>= 0);
    var w = s === +s ? Math.min(y, s) : y;
    l = o.reduce(function(x, b, m) {
      var S = [].concat(Vm(x), [{
        item: b.item,
        position: {
          offset: g + (y + c) * m + (y - w) / 2,
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
}, mY = function(t, r, n, i) {
  var a = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = US({
    children: a,
    legendWidth: u
  }), l = t;
  if (c) {
    var f = i || {}, d = c.align, p = c.verticalAlign, v = c.layout;
    (v === "vertical" || v === "horizontal" && p === "center") && re(t[d]) && (l = At(At({}, t), {}, ii({}, d, l[d] + (f.width || 0)))), (v === "horizontal" || v === "vertical" && d === "center") && re(t[p]) && (l = At(At({}, t), {}, ii({}, p, l[p] + (f.height || 0))));
  }
  return l;
}, yY = function(t, r, n) {
  return le(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, zS = function(t, r, n, i, a) {
  var o = r.props.children, s = dr(o, "ErrorBar").filter(function(c) {
    return yY(i, a, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = It(l, n, 0), d = Re(f) ? [ju(f), Lu(f)] : [f, f], p = u.reduce(function(v, h) {
        var g = It(l, h, 0), y = d[0] - Math.abs(Re(g) ? g[0] : g), w = d[1] + Math.abs(Re(g) ? g[1] : g);
        return [Math.min(y, v[0]), Math.max(w, v[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, bY = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    return zS(t, s, n, a, i);
  }).filter(function(s) {
    return !le(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, WS = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && zS(t, u, c, i) || Vs(t, c, n, a);
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
}, HS = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, Um = function(t, r, n) {
  var i, a, o = t.map(function(s) {
    return s.coordinate === r && (i = !0), s.coordinate === n && (a = !0), s.coordinate;
  });
  return i || o.push(r), a || o.push(n), o;
}, Fr = function(t, r, n) {
  if (!t)
    return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, s = t.range, u = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / u : 0;
  return c = t.axisType === "angleAxis" ? Et(s[0] - s[1]) * 2 * c : c, r && (t.ticks || t.niceTicks) ? (t.ticks || t.niceTicks).map(function(l) {
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
}, yo = function(t, r, n) {
  var i;
  return de(n) ? i = n : de(r) && (i = r), de(t) || i ? function(a, o, s, u) {
    de(t) && t(a, o, s, u), de(i) && i(a, o, s, u);
  } : null;
}, xY = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, s = t.axisType;
  if (i === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: Oa(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Ls(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: ca(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Oa(),
      realScaleType: "band"
    } : {
      scale: Ls(),
      realScaleType: "linear"
    };
  if (za(i)) {
    var u = "scale".concat(Eu(i));
    return {
      scale: (Fm[u] || ca)(),
      realScaleType: Fm[u] ? u : "point"
    };
  }
  return de(i) ? {
    scale: i
  } : {
    scale: ca(),
    realScaleType: "point"
  };
}, zm = 1e-4, wY = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - zm, o = Math.max(i[0], i[1]) + zm, s = t(r[0]), u = t(r[n - 1]);
    (s < a || s > o || u < a || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, SY = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, s = 0; s < r; ++s) {
        var u = Nu(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + u, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, AY = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var s = Nu(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, _Y = {
  sign: SY,
  expand: L9,
  none: fi,
  silhouette: j9,
  wiggle: D9,
  positive: AY
}, OY = function(t, r, n) {
  var i = r.map(function(o) {
    return o.props.dataKey;
  }), a = $9().keys(i).value(function(o, s) {
    return +It(o, s, 0);
  }).order(zl).offset(_Y[n]);
  return a(t);
}, EY = function(t, r, n, i, a, o) {
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
      h.stackGroups[ku("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [l]
      };
    return At(At({}, c), {}, ii({}, v, h));
  }, {});
  return Object.keys(u).reduce(function(c, l) {
    var f = u[l];
    return f.hasStack && (f.stackGroups = Object.keys(f.stackGroups).reduce(function(d, p) {
      var v = f.stackGroups[p];
      return At(At({}, d), {}, ii({}, p, {
        numericAxisId: n,
        cateAxisId: i,
        items: v.items,
        stackedData: OY(t, v.items, a)
      }));
    }, {})), At(At({}, c), {}, ii({}, l, f));
  }, {});
}, TY = function(t, r) {
  return r === "number" ? [ju(t), Lu(t)] : t;
}, PY = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = zW(c, a, s);
    return t.domain(TY(l, i)), {
      niceTicks: l
    };
  }
  if (a && i === "number") {
    var f = t.domain(), d = WW(f, a, s);
    return {
      niceTicks: d
    };
  }
  return null;
}, CY = function(t, r) {
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
}, MY = function(t) {
  return t.reduce(function(r, n) {
    return [ju(n.concat([r[0]]).filter(re)), Lu(n.concat([r[1]]).filter(re))];
  }, [1 / 0, -1 / 0]);
}, qS = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], s = o.stackedData, u = s.reduce(function(c, l) {
      var f = MY(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], i[0]), Math.max(u[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Wm = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Hm = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, YS = function(t, r, n) {
  if (de(t))
    return t(r, n);
  if (!Re(t))
    return r;
  var i = [];
  if (re(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Wm.test(t[0])) {
    var a = +Wm.exec(t[0])[1];
    i[0] = r[0] - a;
  } else
    de(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (re(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Hm.test(t[1])) {
    var o = +Hm.exec(t[1])[1];
    i[1] = r[1] + o;
  } else
    de(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Mf = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Nh(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, u = a.length; s < u; s++) {
      var c = a[s], l = a[s - 1];
      o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, qm = function(t, r, n) {
  return !t || !t.length || Iw(t, Pt(n, "type.defaultProps.domain")) ? r : t;
}, NY = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType;
  return At(At({}, ge(t)), {}, {
    dataKey: i,
    unit: o,
    formatter: s,
    name: a || i,
    color: tp(t),
    value: It(r, i),
    type: u,
    payload: r,
    chartType: c
  });
};
function Ym(e, t) {
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
    t % 2 ? Ym(Object(r), !0).forEach(function(n) {
      GS(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kY(e, t) {
  return LY(e) || $Y(e, t) || IY(e, t) || RY();
}
function RY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IY(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Gm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Gm(e, t);
  }
}
function Gm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function $Y(e, t) {
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
function LY(e) {
  if (Array.isArray(e))
    return e;
}
var Bs = Math.PI / 180, jY = function(t) {
  return t * 180 / Math.PI;
}, Be = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Bs * i) * n,
    y: r + Math.sin(-Bs * i) * n
  };
}, KS = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, DY = function(t, r, n, i, a) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, l = $t(t.cx, o, o / 2), f = $t(t.cy, s, s / 2), d = KS(o, s, n), p = $t(t.innerRadius, d, 0), v = $t(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(g, y) {
    var w = r[y], x = w.domain, b = w.reversed, m;
    if (le(w.range))
      i === "angleAxis" ? m = [u, c] : i === "radiusAxis" && (m = [p, v]), b && (m = [m[1], m[0]]);
    else {
      m = w.range;
      var S = m, A = kY(S, 2);
      u = A[0], c = A[1];
    }
    var O = xY(w, a), E = O.realScaleType, M = O.scale;
    M.domain(x).range(m), wY(M);
    var C = PY(M, Sr(Sr({}, w), {}, {
      realScaleType: E
    })), N = Sr(Sr(Sr({}, w), C), {}, {
      range: m,
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
    return Sr(Sr({}, g), {}, GS({}, y, N));
  }, {});
}, FY = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, VY = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, s = FY({
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
    angle: jY(c),
    angleInRadian: c
  };
}, BY = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, UY = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), s = Math.min(a, o);
  return t + s * 360;
}, Km = function(t, r) {
  var n = t.x, i = t.y, a = VY({
    x: n,
    y: i
  }, r), o = a.radius, s = a.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = BY(r), f = l.startAngle, d = l.endAngle, p = s, v;
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
    angle: UY(p, r)
  }) : null;
};
function zY(e) {
  return YY(e) || qY(e) || HY(e) || WY();
}
function WY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HY(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Nf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Nf(e, t);
  }
}
function qY(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function YY(e) {
  if (Array.isArray(e))
    return Nf(e);
}
function Nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Xm(e, t) {
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
    t % 2 ? Xm(Object(r), !0).forEach(function(n) {
      GY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GY(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var KY = function(t) {
  var r = t.value, n = t.formatter, i = le(t.children) ? r : t.children;
  return de(n) ? n(i) : i;
}, XY = function(t, r) {
  var n = Et(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, ZY = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, s = t.className, u = a, c = u.cx, l = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, v = u.endAngle, h = u.clockWise, g = (f + d) / 2, y = XY(p, v), w = y >= 0 ? 1 : -1, x, b;
  i === "insideStart" ? (x = p + w * o, b = h) : i === "insideEnd" ? (x = v - w * o, b = !h) : i === "end" && (x = v + w * o, b = h), b = y <= 0 ? b : !b;
  var m = Be(c, l, g, x), S = Be(c, l, g, x + (b ? 1 : -1) * 359), A = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(S.x, ",").concat(S.y), O = le(t.id) ? ku("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ V("text", {
    ...n,
    dominantBaseline: "central",
    className: We("recharts-radial-bar-label", s),
    children: [/* @__PURE__ */ _("defs", {
      children: /* @__PURE__ */ _("path", {
        id: O,
        d: A
      })
    }), /* @__PURE__ */ _("textPath", {
      xlinkHref: "#".concat(O),
      children: r
    })]
  });
}, JY = function(t) {
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
  var g = (u + c) / 2, y = Be(o, s, g, d), w = y.x, x = y.y;
  return {
    x: w,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, QY = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, s = o.x, u = o.y, c = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * i, p = f > 0 ? "end" : "start", v = f > 0 ? "start" : "end", h = c >= 0 ? 1 : -1, g = h * i, y = h > 0 ? "end" : "start", w = h > 0 ? "start" : "end";
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
    var m = {
      x: s - g,
      y: u + l / 2,
      textAnchor: y,
      verticalAnchor: "middle"
    };
    return at(at({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
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
    textAnchor: y,
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
    textAnchor: y,
    verticalAnchor: v
  }, A) : a === "insideBottomLeft" ? at({
    x: s + g,
    y: u + l - d,
    textAnchor: w,
    verticalAnchor: p
  }, A) : a === "insideBottomRight" ? at({
    x: s + c - g,
    y: u + l - d,
    textAnchor: y,
    verticalAnchor: p
  }, A) : Ft(a) && (re(a.x) || Yl(a.x)) && (re(a.y) || Yl(a.y)) ? at({
    x: s + $t(a.x, c),
    y: u + $t(a.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, A) : at({
    x: s + c / 2,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, A);
}, eG = function(t) {
  return re(t.cx);
};
function rt(e) {
  var t = e.viewBox, r = e.position, n = e.value, i = e.children, a = e.content, o = e.className, s = o === void 0 ? "" : o, u = e.textBreakAll;
  if (!t || le(n) && le(i) && !/* @__PURE__ */ Kr(a) && !de(a))
    return null;
  if (/* @__PURE__ */ Kr(a))
    return /* @__PURE__ */ gt(a, e);
  var c;
  if (de(a)) {
    if (c = /* @__PURE__ */ Tt(a, e), /* @__PURE__ */ Kr(c))
      return c;
  } else
    c = KY(e);
  var l = eG(t), f = ge(e, !0);
  if (l && (r === "insideStart" || r === "insideEnd" || r === "end"))
    return ZY(e, c, f);
  var d = l ? JY(e) : QY(e);
  return /* @__PURE__ */ _(rn, {
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
var XS = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, s = t.r, u = t.radius, c = t.innerRadius, l = t.outerRadius, f = t.x, d = t.y, p = t.top, v = t.left, h = t.width, g = t.height, y = t.clockWise, w = t.labelViewBox;
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
    clockWise: y
  } : t.viewBox ? t.viewBox : {};
}, tG = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ _(rt, {
    viewBox: r
  }, "label-implicit") : nt(t) ? /* @__PURE__ */ _(rt, {
    viewBox: r,
    value: t
  }, "label-implicit") : /* @__PURE__ */ Kr(t) ? t.type === rt ? /* @__PURE__ */ gt(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ _(rt, {
    content: t,
    viewBox: r
  }, "label-implicit") : de(t) ? /* @__PURE__ */ _(rt, {
    content: t,
    viewBox: r
  }, "label-implicit") : Ft(t) ? /* @__PURE__ */ Tt(rt, {
    viewBox: r,
    ...t,
    key: "label-implicit"
  }) : null : null;
}, rG = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = XS(t), o = dr(i, rt.displayName).map(function(u, c) {
    return /* @__PURE__ */ gt(u, {
      viewBox: r || a,
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = tG(t.label, r || a);
  return [s].concat(zY(o));
};
rt.parseViewBox = XS;
rt.renderCallByParent = rG;
function nG(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var iG = nG;
function aG(e) {
  return cG(e) || uG(e) || sG(e) || oG();
}
function oG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sG(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return kf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return kf(e, t);
  }
}
function uG(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function cG(e) {
  if (Array.isArray(e))
    return kf(e);
}
function kf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Zm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zm(Object(r), !0).forEach(function(n) {
      lG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lG(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function fG(e, t) {
  if (e == null)
    return {};
  var r = dG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function dG(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var hG = {
  valueAccessor: function(t) {
    return Re(t.value) ? iG(t.value) : t.value;
  }
};
function Qr(e) {
  var t = e.data, r = e.valueAccessor, n = e.dataKey, i = e.clockWise, a = e.id, o = e.textBreakAll, s = fG(e, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]);
  return !t || !t.length ? null : /* @__PURE__ */ _(Xe, {
    className: "recharts-label-list",
    children: t.map(function(u, c) {
      var l = le(n) ? r(u, c) : It(u && u.payload, n), f = le(a) ? {} : {
        id: "".concat(a, "-").concat(c)
      };
      return /* @__PURE__ */ Tt(rt, {
        ...ge(u, !0),
        ...s,
        ...f,
        parentViewBox: u.parentViewBox,
        index: c,
        value: l,
        textBreakAll: o,
        viewBox: rt.parseViewBox(le(i) ? u : Jm(Jm({}, u), {}, {
          clockWise: i
        })),
        key: "label-".concat(c)
      });
    })
  });
}
Qr.displayName = "LabelList";
function pG(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ _(Qr, {
    data: t
  }, "labelList-implicit") : /* @__PURE__ */ ye.isValidElement(e) || de(e) ? /* @__PURE__ */ _(Qr, {
    data: t,
    content: e
  }, "labelList-implicit") : Ft(e) ? /* @__PURE__ */ Tt(Qr, {
    data: t,
    ...e,
    key: "labelList-implicit"
  }) : null : null;
}
function vG(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = dr(n, Qr.displayName).map(function(o, s) {
    return /* @__PURE__ */ gt(o, {
      data: t,
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return i;
  var a = pG(e.label, t);
  return [a].concat(aG(i));
}
Qr.renderCallByParent = vG;
Qr.defaultProps = hG;
function Bo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bo = function(r) {
    return typeof r;
  } : Bo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bo(e);
}
function gG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function mG(e, t, r) {
  return t && Qm(e.prototype, t), r && Qm(e, r), e;
}
function yG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Rf(e, t);
}
function Rf(e, t) {
  return Rf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Rf(e, t);
}
function bG(e) {
  var t = SG();
  return function() {
    var n = Us(e), i;
    if (t) {
      var a = Us(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return xG(this, i);
  };
}
function xG(e, t) {
  return t && (Bo(t) === "object" || typeof t == "function") ? t : wG(e);
}
function wG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function SG() {
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
var AG = function(t, r) {
  var n = Et(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, bo = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, l = u * (s ? 1 : -1) + i, f = Math.asin(u / l) / Bs, d = c ? a : a + o * f, p = Be(r, n, l, d), v = Be(r, n, i, d), h = c ? a - o * f : a, g = Be(r, n, l * Math.cos(f * Bs), h);
  return {
    center: p,
    circleTangency: v,
    lineTangency: g,
    theta: f
  };
}, ZS = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, s = t.endAngle, u = AG(o, s), c = o + u, l = Be(r, n, a, o), f = Be(r, n, a, c), d = "M ".concat(l.x, ",").concat(l.y, `
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
}, _G = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, l = t.endAngle, f = Et(l - c), d = bo({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, v = d.lineTangency, h = d.theta, g = bo({
    cx: r,
    cy: n,
    radius: a,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: u
  }), y = g.circleTangency, w = g.lineTangency, x = g.theta, b = u ? Math.abs(c - l) : Math.abs(c - l) - h - x;
  if (b < 0)
    return s ? "M ".concat(v.x, ",").concat(v.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : ZS({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: c,
      endAngle: l
    });
  var m = "M ".concat(v.x, ",").concat(v.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(b > 180), ",").concat(+(f < 0), ",").concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (i > 0) {
    var S = bo({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), A = S.circleTangency, O = S.lineTangency, E = S.theta, M = bo({
      cx: r,
      cy: n,
      radius: i,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), C = M.circleTangency, N = M.lineTangency, k = M.theta, D = u ? Math.abs(c - l) : Math.abs(c - l) - E - k;
    if (D < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(N.x, ",").concat(N.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(D > 180), ",").concat(+(f > 0), ",").concat(A.x, ",").concat(A.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(O.x, ",").concat(O.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, zs = /* @__PURE__ */ function(e) {
  yG(r, e);
  var t = bG(r);
  function r() {
    return gG(this, r), t.apply(this, arguments);
  }
  return mG(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.innerRadius, u = i.outerRadius, c = i.cornerRadius, l = i.forceCornerRadius, f = i.cornerIsExternal, d = i.startAngle, p = i.endAngle, v = i.className;
      if (u < s || d === p)
        return null;
      var h = We("recharts-sector", v), g = u - s, y = $t(c, g, 0, !0), w;
      return y > 0 && Math.abs(d - p) < 360 ? w = _G({
        cx: a,
        cy: o,
        innerRadius: s,
        outerRadius: u,
        cornerRadius: Math.min(y, g / 2),
        forceCornerRadius: l,
        cornerIsExternal: f,
        startAngle: d,
        endAngle: p
      }) : w = ZS({
        cx: a,
        cy: o,
        innerRadius: s,
        outerRadius: u,
        startAngle: d,
        endAngle: p
      }), /* @__PURE__ */ _("path", {
        ...ge(this.props, !0),
        className: h,
        d: w
      });
    }
  }]), r;
}(xt);
zs.defaultProps = {
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
function Uo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Uo = function(r) {
    return typeof r;
  } : Uo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Uo(e);
}
function ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ty(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ey(Object(r), !0).forEach(function(n) {
      OG(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OG(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function EG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ry(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function TG(e, t, r) {
  return t && ry(e.prototype, t), r && ry(e, r), e;
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
  }), t && If(e, t);
}
function If(e, t) {
  return If = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, If(e, t);
}
function CG(e) {
  var t = kG();
  return function() {
    var n = Ws(e), i;
    if (t) {
      var a = Ws(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return MG(this, i);
  };
}
function MG(e, t) {
  return t && (Uo(t) === "object" || typeof t == "function") ? t : NG(e);
}
function NG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kG() {
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
function Ws(e) {
  return Ws = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ws(e);
}
var ny = {
  curveBasisClosed: _9,
  curveBasisOpen: O9,
  curveBasis: A9,
  curveLinearClosed: E9,
  curveLinear: Cu,
  curveMonotoneX: T9,
  curveMonotoneY: P9,
  curveNatural: C9,
  curveStep: M9,
  curveStepAfter: k9,
  curveStepBefore: N9
}, xo = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Ki = function(t) {
  return t.x;
}, Xi = function(t) {
  return t.y;
}, RG = function(t, r) {
  if (de(t))
    return t;
  var n = "curve".concat(Eu(t));
  return n === "curveMonotone" && r ? ny["".concat(n).concat(r === "vertical" ? "Y" : "X")] : ny[n] || Cu;
}, Hs = /* @__PURE__ */ function(e) {
  PG(r, e);
  var t = CG(r);
  function r() {
    return EG(this, r), t.apply(this, arguments);
  }
  return TG(r, [{
    key: "getPath",
    value: function() {
      var i = this.props, a = i.type, o = i.points, s = i.baseLine, u = i.layout, c = i.connectNulls, l = RG(a, u), f = c ? o.filter(function(h) {
        return xo(h);
      }) : o, d;
      if (Re(s)) {
        var p = c ? s.filter(function(h) {
          return xo(h);
        }) : s, v = f.map(function(h, g) {
          return ty(ty({}, h), {}, {
            base: p[g]
          });
        });
        return u === "vertical" ? d = ho().y(Xi).x1(Ki).x0(function(h) {
          return h.base.x;
        }) : d = ho().x(Ki).y1(Xi).y0(function(h) {
          return h.base.y;
        }), d.defined(xo).curve(l), d(v);
      }
      return u === "vertical" && re(s) ? d = ho().y(Xi).x1(Ki).x0(s) : re(s) ? d = ho().x(Ki).y1(Xi).y0(s) : d = nw().x(Ki).y(Xi), d.defined(xo).curve(l), d(f);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.className, o = i.points, s = i.path, u = i.pathRef;
      if ((!o || !o.length) && !s)
        return null;
      var c = o && o.length ? this.getPath() : s;
      return /* @__PURE__ */ _("path", {
        ...ge(this.props),
        ...fs(this.props),
        className: We("recharts-curve", a),
        d: c,
        ref: u
      });
    }
  }]), r;
}(xt);
Hs.defaultProps = {
  type: "linear",
  points: [],
  connectNulls: !1
};
function zo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zo = function(r) {
    return typeof r;
  } : zo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, zo(e);
}
function IG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function $G(e, t, r) {
  return t && iy(e.prototype, t), r && iy(e, r), e;
}
function LG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && $f(e, t);
}
function $f(e, t) {
  return $f = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, $f(e, t);
}
function jG(e) {
  var t = VG();
  return function() {
    var n = qs(e), i;
    if (t) {
      var a = qs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return DG(this, i);
  };
}
function DG(e, t) {
  return t && (zo(t) === "object" || typeof t == "function") ? t : FG(e);
}
function FG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function VG() {
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
var ay = function(t, r, n, i, a) {
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
}, BG = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(a, a + s), l = Math.max(a, a + s), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= l && i >= f && i <= d;
  }
  return !1;
}, rp = /* @__PURE__ */ function(e) {
  LG(r, e);
  var t = jG(r);
  function r() {
    var n;
    IG(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = t.call.apply(t, [this].concat(a)), n.state = {
      totalLength: -1
    }, n.node = void 0, n;
  }
  return $G(r, [{
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
      var i = this, a = this.props, o = a.x, s = a.y, u = a.width, c = a.height, l = a.radius, f = a.className, d = this.state.totalLength, p = this.props, v = p.animationEasing, h = p.animationDuration, g = p.animationBegin, y = p.isAnimationActive, w = p.isUpdateAnimationActive;
      if (o !== +o || s !== +s || u !== +u || c !== +c || u === 0 || c === 0)
        return null;
      var x = We("recharts-rectangle", f);
      return w ? /* @__PURE__ */ _(hi, {
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
          var m = b.width, S = b.height, A = b.x, O = b.y;
          return /* @__PURE__ */ _(hi, {
            canBegin: d > 0,
            from: "0px ".concat(d === -1 ? 1 : d, "px"),
            to: "".concat(d, "px 0px"),
            attributeName: "strokeDasharray",
            begin: g,
            duration: h,
            isActive: y,
            easing: v,
            children: /* @__PURE__ */ _("path", {
              ...ge(i.props, !0),
              className: x,
              d: ay(A, O, m, S, l),
              ref: function(M) {
                i.node = M;
              }
            })
          });
        }
      }) : /* @__PURE__ */ _("path", {
        ...ge(this.props, !0),
        className: x,
        d: ay(o, s, u, c, l)
      });
    }
  }]), r;
}(xt);
rp.defaultProps = {
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
function Wo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wo = function(r) {
    return typeof r;
  } : Wo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Wo(e);
}
function UG(e, t) {
  if (e == null)
    return {};
  var r = zG(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function zG(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function WG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function HG(e, t, r) {
  return t && oy(e.prototype, t), r && oy(e, r), e;
}
function qG(e, t) {
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
function YG(e) {
  var t = XG();
  return function() {
    var n = Ys(e), i;
    if (t) {
      var a = Ys(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return GG(this, i);
  };
}
function GG(e, t) {
  return t && (Wo(t) === "object" || typeof t == "function") ? t : KG(e);
}
function KG(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function XG() {
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
function Ys(e) {
  return Ys = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ys(e);
}
function sy(e) {
  return eK(e) || QG(e) || JG(e) || ZG();
}
function ZG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JG(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return jf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return jf(e, t);
  }
}
function QG(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function eK(e) {
  if (Array.isArray(e))
    return jf(e);
}
function jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var uy = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, tK = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    uy(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), uy(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, la = function(t, r) {
  var n = tK(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(sy(a), sy(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, rK = function(t, r, n) {
  var i = la(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(la(r.reverse(), n).slice(1));
}, nK = /* @__PURE__ */ function(e) {
  qG(r, e);
  var t = YG(r);
  function r() {
    return WG(this, r), t.apply(this, arguments);
  }
  return HG(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.points, o = i.className, s = i.baseLinePoints, u = i.connectNulls, c = UG(i, ["points", "className", "baseLinePoints", "connectNulls"]);
      if (!a || !a.length)
        return null;
      var l = We("recharts-polygon", o);
      if (s && s.length) {
        var f = c.stroke && c.stroke !== "none", d = rK(a, s, u);
        return /* @__PURE__ */ V("g", {
          className: l,
          children: [/* @__PURE__ */ _("path", {
            ...ge(c, !0),
            fill: d.slice(-1) === "Z" ? c.fill : "none",
            stroke: "none",
            d
          }), f ? /* @__PURE__ */ _("path", {
            ...ge(c, !0),
            fill: "none",
            d: la(a, u)
          }) : null, f ? /* @__PURE__ */ _("path", {
            ...ge(c, !0),
            fill: "none",
            d: la(s, u)
          }) : null]
        });
      }
      var p = la(a, u);
      return /* @__PURE__ */ _("path", {
        ...ge(c, !0),
        fill: p.slice(-1) === "Z" ? c.fill : "none",
        className: l,
        d: p
      });
    }
  }]), r;
}(xt);
function Ho(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ho = function(r) {
    return typeof r;
  } : Ho = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ho(e);
}
function iK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function aK(e, t, r) {
  return t && cy(e.prototype, t), r && cy(e, r), e;
}
function oK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Df(e, t);
}
function Df(e, t) {
  return Df = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Df(e, t);
}
function sK(e) {
  var t = lK();
  return function() {
    var n = Gs(e), i;
    if (t) {
      var a = Gs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return uK(this, i);
  };
}
function uK(e, t) {
  return t && (Ho(t) === "object" || typeof t == "function") ? t : cK(e);
}
function cK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lK() {
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
var np = /* @__PURE__ */ function(e) {
  oK(r, e);
  var t = sK(r);
  function r() {
    return iK(this, r), t.apply(this, arguments);
  }
  return aK(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.r, u = i.className, c = We("recharts-dot", u);
      return a === +a && o === +o && s === +s ? /* @__PURE__ */ _("circle", {
        ...ge(this.props),
        ...fs(this.props),
        className: c,
        cx: a,
        cy: o,
        r: s
      }) : null;
    }
  }]), r;
}(xt);
function qo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qo = function(r) {
    return typeof r;
  } : qo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, qo(e);
}
function fK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ly(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function dK(e, t, r) {
  return t && ly(e.prototype, t), r && ly(e, r), e;
}
function hK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Ff(e, t);
}
function Ff(e, t) {
  return Ff = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Ff(e, t);
}
function pK(e) {
  var t = mK();
  return function() {
    var n = Ks(e), i;
    if (t) {
      var a = Ks(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return vK(this, i);
  };
}
function vK(e, t) {
  return t && (qo(t) === "object" || typeof t == "function") ? t : gK(e);
}
function gK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mK() {
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
function Ks(e) {
  return Ks = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ks(e);
}
var JS = /* @__PURE__ */ function(e) {
  hK(r, e);
  var t = pK(r);
  function r() {
    return fK(this, r), t.apply(this, arguments);
  }
  return dK(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.top, l = i.left, f = i.className;
      return !re(a) || !re(o) || !re(s) || !re(u) || !re(c) || !re(l) ? null : /* @__PURE__ */ _("path", {
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
}(xt);
JS.defaultProps = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0
};
var yK = $u, bK = yr, xK = Lw;
function wK(e, t) {
  return e && e.length ? yK(e, bK(t), xK) : void 0;
}
var SK = wK, AK = $u, _K = $w, OK = yr;
function EK(e, t) {
  return e && e.length ? AK(e, OK(t), _K) : void 0;
}
var TK = EK;
function Yo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yo = function(r) {
    return typeof r;
  } : Yo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Yo(e);
}
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fy(Object(r), !0).forEach(function(n) {
      PK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PK(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function dy(e, t) {
  if (e == null)
    return {};
  var r = CK(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function CK(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function MK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function NK(e, t, r) {
  return t && hy(e.prototype, t), r && hy(e, r), e;
}
function kK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Vf(e, t);
}
function Vf(e, t) {
  return Vf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Vf(e, t);
}
function RK(e) {
  var t = LK();
  return function() {
    var n = Xs(e), i;
    if (t) {
      var a = Xs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return IK(this, i);
  };
}
function IK(e, t) {
  return t && (Yo(t) === "object" || typeof t == "function") ? t : $K(e);
}
function $K(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function LK() {
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
function Xs(e) {
  return Xs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xs(e);
}
var Yu = /* @__PURE__ */ function(e) {
  kK(r, e);
  var t = RK(r);
  function r() {
    return MK(this, r), t.apply(this, arguments);
  }
  return NK(r, [{
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
      var i = this.props, a = i.cx, o = i.cy, s = i.angle, u = i.ticks, c = TK(u, function(f) {
        return f.coordinate || 0;
      }), l = SK(u, function(f) {
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
      var i = this.props, a = i.cx, o = i.cy, s = i.angle, u = i.ticks, c = i.axisLine, l = dy(i, ["cx", "cy", "angle", "ticks", "axisLine"]), f = u.reduce(function(h, g) {
        return [Math.min(h[0], g.coordinate), Math.max(h[1], g.coordinate)];
      }, [1 / 0, -1 / 0]), d = Be(a, o, f[0], s), p = Be(a, o, f[1], s), v = mn(mn(mn({}, ge(l)), {}, {
        fill: "none"
      }, ge(c)), {}, {
        x1: d.x,
        y1: d.y,
        x2: p.x,
        y2: p.y
      });
      return /* @__PURE__ */ _("line", {
        className: "recharts-polar-radius-axis-line",
        ...v
      });
    }
  }, {
    key: "renderTicks",
    value: function() {
      var i = this, a = this.props, o = a.ticks, s = a.tick, u = a.angle, c = a.tickFormatter, l = a.stroke, f = dy(a, ["ticks", "tick", "angle", "tickFormatter", "stroke"]), d = this.getTickTextAnchor(), p = ge(f), v = ge(s), h = o.map(function(g, y) {
        var w = i.getTickValueCoord(g), x = mn(mn(mn(mn({
          textAnchor: d,
          transform: "rotate(".concat(90 - u, ", ").concat(w.x, ", ").concat(w.y, ")")
        }, p), {}, {
          stroke: "none",
          fill: l
        }, v), {}, {
          index: y
        }, w), {}, {
          payload: g
        });
        return /* @__PURE__ */ _(Xe, {
          className: "recharts-polar-radius-axis-tick",
          ...Va(i.props, g, y),
          children: r.renderTickItem(s, x, c ? c(g.value, y) : g.value)
        }, "tick-".concat(y));
      });
      return /* @__PURE__ */ _(Xe, {
        className: "recharts-polar-radius-axis-ticks",
        children: h
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.ticks, o = i.axisLine, s = i.tick;
      return !a || !a.length ? null : /* @__PURE__ */ V(Xe, {
        className: "recharts-polar-radius-axis",
        children: [o && this.renderAxisLine(), s && this.renderTicks(), rt.renderCallByParent(this.props, this.getViewBox())]
      });
    }
  }], [{
    key: "renderTickItem",
    value: function(i, a, o) {
      var s;
      return /* @__PURE__ */ ye.isValidElement(i) ? s = /* @__PURE__ */ ye.cloneElement(i, a) : de(i) ? s = i(a) : s = /* @__PURE__ */ _(rn, {
        ...a,
        className: "recharts-polar-radius-axis-tick-value",
        children: o
      }), s;
    }
  }]), r;
}(xt);
Yu.displayName = "PolarRadiusAxis";
Yu.axisType = "radiusAxis";
Yu.defaultProps = {
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
function Go(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Go = function(r) {
    return typeof r;
  } : Go = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Go(e);
}
function py(e, t) {
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
    t % 2 ? py(Object(r), !0).forEach(function(n) {
      jK(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : py(Object(r)).forEach(function(n) {
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
function DK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function FK(e, t, r) {
  return t && vy(e.prototype, t), r && vy(e, r), e;
}
function VK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Bf(e, t);
}
function Bf(e, t) {
  return Bf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Bf(e, t);
}
function BK(e) {
  var t = WK();
  return function() {
    var n = Zs(e), i;
    if (t) {
      var a = Zs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return UK(this, i);
  };
}
function UK(e, t) {
  return t && (Go(t) === "object" || typeof t == "function") ? t : zK(e);
}
function zK(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WK() {
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
function Zs(e) {
  return Zs = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zs(e);
}
var HK = Math.PI / 180, gy = 1e-5, Gu = /* @__PURE__ */ function(e) {
  VK(r, e);
  var t = BK(r);
  function r() {
    return DK(this, r), t.apply(this, arguments);
  }
  return FK(r, [{
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
      var a = this.props.orientation, o = Math.cos(-i.coordinate * HK), s;
      return o > gy ? s = a === "outer" ? "start" : "end" : o < -gy ? s = a === "outer" ? "end" : "start" : s = "middle", s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var i = this.props, a = i.cx, o = i.cy, s = i.radius, u = i.axisLine, c = i.axisLineType, l = yn(yn({}, ge(this.props)), {}, {
        fill: "none"
      }, ge(u));
      if (c === "circle")
        return /* @__PURE__ */ _(np, {
          className: "recharts-polar-angle-axis-line",
          ...l,
          cx: a,
          cy: o,
          r: s
        });
      var f = this.props.ticks, d = f.map(function(p) {
        return Be(a, o, s, p.coordinate);
      });
      return /* @__PURE__ */ _(nK, {
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
        var y = i.getTickLineCoord(h), w = i.getTickTextAnchor(h), x = yn(yn(yn({
          textAnchor: w
        }, f), {}, {
          stroke: "none",
          fill: l
        }, d), {}, {
          index: g,
          payload: h,
          x: y.x2,
          y: y.y2
        });
        return /* @__PURE__ */ V(Xe, {
          className: "recharts-polar-angle-axis-tick",
          ...Va(i.props, h, g),
          children: [u && /* @__PURE__ */ _("line", {
            className: "recharts-polar-angle-axis-tick-line",
            ...p,
            ...y
          }), s && r.renderTickItem(s, x, c ? c(h.value, g) : h.value)]
        }, "tick-".concat(g));
      });
      return /* @__PURE__ */ _(Xe, {
        className: "recharts-polar-angle-axis-ticks",
        children: v
      });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.ticks, o = i.radius, s = i.axisLine;
      return o <= 0 || !a || !a.length ? null : /* @__PURE__ */ V(Xe, {
        className: "recharts-polar-angle-axis",
        children: [s && this.renderAxisLine(), this.renderTicks()]
      });
    }
  }], [{
    key: "renderTickItem",
    value: function(i, a, o) {
      var s;
      return /* @__PURE__ */ ye.isValidElement(i) ? s = /* @__PURE__ */ ye.cloneElement(i, a) : de(i) ? s = i(a) : s = /* @__PURE__ */ _(rn, {
        ...a,
        className: "recharts-polar-angle-axis-tick-value",
        children: o
      }), s;
    }
  }]), r;
}(xt);
Gu.displayName = "PolarAngleAxis";
Gu.axisType = "angleAxis";
Gu.defaultProps = {
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
var qK = Lx, YK = qK(Object.getPrototypeOf, Object), GK = YK, KK = kr, XK = GK, ZK = Rr, JK = "[object Object]", QK = Function.prototype, eX = Object.prototype, QS = QK.toString, tX = eX.hasOwnProperty, rX = QS.call(Object);
function nX(e) {
  if (!ZK(e) || KK(e) != JK)
    return !1;
  var t = XK(e);
  if (t === null)
    return !0;
  var r = tX.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && QS.call(r) == rX;
}
var iX = nX;
function Ko(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ko = function(r) {
    return typeof r;
  } : Ko = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ko(e);
}
function my(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? my(Object(r), !0).forEach(function(n) {
      aX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aX(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function oX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function sX(e, t, r) {
  return t && yy(e.prototype, t), r && yy(e, r), e;
}
function uX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Uf(e, t);
}
function Uf(e, t) {
  return Uf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Uf(e, t);
}
function cX(e) {
  var t = dX();
  return function() {
    var n = Js(e), i;
    if (t) {
      var a = Js(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return lX(this, i);
  };
}
function lX(e, t) {
  return t && (Ko(t) === "object" || typeof t == "function") ? t : fX(e);
}
function fX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dX() {
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
function Js(e) {
  return Js = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Js(e);
}
var Qt = /* @__PURE__ */ function(e) {
  uX(r, e);
  var t = cX(r);
  function r(n) {
    var i;
    return oX(this, r), i = t.call(this, n), i.state = void 0, i.id = ku("recharts-pie-"), i.handleAnimationEnd = function() {
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
  return sX(r, [{
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
      var o = this.props, s = o.label, u = o.labelLine, c = o.dataKey, l = o.valueKey, f = ge(this.props), d = ge(s), p = ge(u), v = s && s.offsetRadius || 20, h = i.map(function(g, y) {
        var w = (g.startAngle + g.endAngle) / 2, x = Be(g.cx, g.cy, g.outerRadius + v, w), b = qe(qe(qe(qe({}, f), g), {}, {
          stroke: "none"
        }, d), {}, {
          index: y,
          textAnchor: r.getTextAnchor(x.x, g.cx)
        }, x), m = qe(qe(qe(qe({}, f), g), {}, {
          fill: "none",
          stroke: g.fill
        }, p), {}, {
          index: y,
          points: [Be(g.cx, g.cy, g.outerRadius, w), x],
          key: "line"
        }), S = c;
        return le(c) && le(l) ? S = "value" : le(c) && (S = l), /* @__PURE__ */ V(Xe, {
          children: [u && r.renderLabelLineItem(u, m), r.renderLabelItem(s, b, It(g, S))]
        }, "label-".concat(y));
      });
      return /* @__PURE__ */ _(Xe, {
        className: "recharts-pie-labels",
        children: h
      });
    }
  }, {
    key: "renderSectorsStatically",
    value: function(i) {
      var a = this, o = this.props, s = o.activeShape, u = o.blendStroke, c = o.inactiveShape;
      return i.map(function(l, f) {
        var d = c && a.hasActiveIndex() ? c : null, p = a.isActiveIndex(f) ? s : d, v = qe(qe({}, l), {}, {
          stroke: u ? l.fill : l.stroke
        });
        return /* @__PURE__ */ Tt(Xe, {
          className: "recharts-pie-sector",
          ...Va(a.props, l, f),
          key: "sector-".concat(f)
        }, r.renderSectorItem(p, v));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var i = this, a = this.props, o = a.sectors, s = a.isAnimationActive, u = a.animationBegin, c = a.animationDuration, l = a.animationEasing, f = a.animationId, d = this.state, p = d.prevSectors, v = d.prevIsAnimationActive;
      return /* @__PURE__ */ _(hi, {
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
          var g = h.t, y = [], w = o && o[0], x = w.startAngle;
          return o.forEach(function(b, m) {
            var S = p && p[m], A = m > 0 ? Pt(b, "paddingAngle", 0) : 0;
            if (S) {
              var O = eg(S.endAngle - S.startAngle, b.endAngle - b.startAngle), E = qe(qe({}, b), {}, {
                startAngle: x + A,
                endAngle: x + O(g) + A
              });
              y.push(E), x = E.endAngle;
            } else {
              var M = b.endAngle, C = b.startAngle, N = eg(0, M - C), k = N(g), D = qe(qe({}, b), {}, {
                startAngle: x + A,
                endAngle: x + k + A
              });
              y.push(D), x = D.endAngle;
            }
          }), /* @__PURE__ */ _(Xe, {
            children: i.renderSectorsStatically(y)
          });
        }
      }, "pie-".concat(f, "-").concat(v));
    }
  }, {
    key: "renderSectors",
    value: function() {
      var i = this.props, a = i.sectors, o = i.isAnimationActive, s = this.state.prevSectors;
      return o && a && a.length && (!s || !Iw(s, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.hide, o = i.sectors, s = i.className, u = i.label, c = i.cx, l = i.cy, f = i.innerRadius, d = i.outerRadius, p = i.isAnimationActive, v = this.state.isAnimationFinished;
      if (a || !o || !o.length || !re(c) || !re(l) || !re(f) || !re(d))
        return null;
      var h = We("recharts-pie", s);
      return /* @__PURE__ */ V(Xe, {
        className: h,
        children: [this.renderSectors(), u && this.renderLabels(o), rt.renderCallByParent(this.props, null, !1), (!p || v) && Qr.renderCallByParent(this.props, o, !1)]
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
      return /* @__PURE__ */ ye.isValidElement(i) ? /* @__PURE__ */ ye.cloneElement(i, a) : de(i) ? i(a) : /* @__PURE__ */ _(Hs, {
        ...a,
        type: "linear",
        className: "recharts-pie-label-line"
      });
    }
  }, {
    key: "renderLabelItem",
    value: function(i, a, o) {
      if (/* @__PURE__ */ ye.isValidElement(i))
        return /* @__PURE__ */ ye.cloneElement(i, a);
      var s = o;
      return de(i) && (s = i(a), /* @__PURE__ */ ye.isValidElement(s)) ? s : /* @__PURE__ */ _(rn, {
        ...a,
        alignmentBaseline: "middle",
        className: "recharts-pie-label-text",
        children: s
      });
    }
  }, {
    key: "renderSectorItem",
    value: function(i, a) {
      return /* @__PURE__ */ ye.isValidElement(i) ? /* @__PURE__ */ ye.cloneElement(i, a) : de(i) ? i(a) : iX(i) ? /* @__PURE__ */ _(zs, {
        ...a,
        ...i
      }) : /* @__PURE__ */ _(zs, {
        ...a
      });
    }
  }]), r;
}(xt);
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
  isAnimationActive: !Zr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1
};
Qt.parseDeltaAngle = function(e, t) {
  var r = Et(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
Qt.getRealPieData = function(e) {
  var t = e.props, r = t.data, n = t.children, i = ge(e.props), a = dr(n, Rh.displayName);
  return r && r.length ? r.map(function(o, s) {
    return qe(qe(qe({
      payload: o
    }, i), o), a && a[s] && a[s].props);
  }) : a && a.length ? a.map(function(o) {
    return qe(qe({}, i), o.props);
  }) : [];
};
Qt.parseCoordinateOfPie = function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = KS(i, a), s = n + $t(e.props.cx, i, i / 2), u = r + $t(e.props.cy, a, a / 2), c = $t(e.props.innerRadius, o, 0), l = $t(e.props.outerRadius, o, o * 0.8), f = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
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
  var i = t.props, a = i.cornerRadius, o = i.startAngle, s = i.endAngle, u = i.paddingAngle, c = i.dataKey, l = i.nameKey, f = i.valueKey, d = i.tooltipType, p = Math.abs(t.props.minAngle), v = Qt.parseCoordinateOfPie(t, r), h = Qt.parseDeltaAngle(o, s), g = Math.abs(h), y = c;
  le(c) && le(f) ? (Sa(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = "value") : le(c) && (Sa(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), y = f);
  var w = n.filter(function(O) {
    return It(O, y, 0) !== 0;
  }).length, x = (g >= 360 ? w : w - 1) * u, b = g - w * p - x, m = n.reduce(function(O, E) {
    var M = It(E, y, 0);
    return O + (re(M) ? M : 0);
  }, 0), S;
  if (m > 0) {
    var A;
    S = n.map(function(O, E) {
      var M = It(O, y, 0), C = It(O, l, E), N = (re(M) ? M : 0) / m, k;
      E ? k = A.endAngle + Et(h) * u * (M !== 0 ? 1 : 0) : k = o;
      var D = k + Et(h) * ((M !== 0 ? p : 0) + N * b), j = (k + D) / 2, R = (v.innerRadius + v.outerRadius) / 2, Q = [{
        name: C,
        value: M,
        payload: O,
        dataKey: y,
        type: d
      }], K = Be(v.cx, v.cy, R, j);
      return A = qe(qe(qe({
        percent: N,
        cornerRadius: a,
        name: C,
        tooltipPayload: Q,
        midAngle: j,
        middleRadius: R,
        tooltipPosition: K
      }, O), v), {}, {
        value: It(O, y),
        startAngle: k,
        endAngle: D,
        payload: O,
        paddingAngle: Et(h) * u
      }), A;
    });
  }
  return qe(qe({}, v), {}, {
    sectors: S,
    data: n
  });
};
var hX = Math.ceil, pX = Math.max;
function vX(e, t, r, n) {
  for (var i = -1, a = pX(hX((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var gX = vX, mX = Ow, by = 1 / 0, yX = 17976931348623157e292;
function bX(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = mX(e), e === by || e === -by) {
    var t = e < 0 ? -1 : 1;
    return t * yX;
  }
  return e === e ? e : 0;
}
var eA = bX, xX = gX, wX = Iu, Qc = eA;
function SX(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && wX(t, r, n) && (r = n = void 0), t = Qc(t), r === void 0 ? (r = t, t = 0) : r = Qc(r), n = n === void 0 ? t < r ? 1 : -1 : Qc(n), xX(t, r, n, e);
  };
}
var AX = SX, _X = AX, OX = _X(), Qs = OX;
function xy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xy(Object(r), !0).forEach(function(n) {
      tA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tA(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var EX = ["Webkit", "Moz", "O", "ms"], TX = function(t, r) {
  if (!t)
    return null;
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = EX.reduce(function(a, o) {
    return wy(wy({}, a), {}, tA({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Xo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xo = function(r) {
    return typeof r;
  } : Xo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Xo(e);
}
function Sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sy(Object(r), !0).forEach(function(n) {
      zf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function PX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ay(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function CX(e, t, r) {
  return t && Ay(e.prototype, t), r && Ay(e, r), e;
}
function MX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Wf(e, t);
}
function Wf(e, t) {
  return Wf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Wf(e, t);
}
function NX(e) {
  var t = RX();
  return function() {
    var n = eu(e), i;
    if (t) {
      var a = eu(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return kX(this, i);
  };
}
function kX(e, t) {
  return t && (Xo(t) === "object" || typeof t == "function") ? t : Hf(e);
}
function Hf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function RX() {
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
function eu(e) {
  return eu = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, eu(e);
}
var IX = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = ca().domain(Qs(0, u)).range([a, a + o - s]), l = c.domain().map(function(f) {
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
}, _y = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Ca = /* @__PURE__ */ function(e) {
  MX(r, e);
  var t = NX(r);
  function r(n) {
    var i;
    return PX(this, r), i = t.call(this, n), i.leaveTimer = void 0, i.travellerDragStartHandlers = void 0, i.handleDrag = function(a) {
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
      var o = _y(a) ? a.changedTouches[0] : a;
      i.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: o.pageX
      }), i.attachDragEndListener();
    }, i.travellerDragStartHandlers = {
      startX: i.handleTravellerDragStart.bind(Hf(i), "startX"),
      endX: i.handleTravellerDragStart.bind(Hf(i), "endX")
    }, i.state = {}, i;
  }
  return CX(r, [{
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
      var a = this.props, o = a.data, s = a.tickFormatter, u = a.dataKey, c = It(o[i], u, i);
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
      var y = this.getIndex({
        startX: s + g,
        endX: u + g
      });
      (y.startIndex !== p || y.endIndex !== v) && h && h(y), this.setState({
        startX: s + g,
        endX: u + g,
        slideMoveStartX: i.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(i, a) {
      var o = _y(a) ? a.changedTouches[0] : a;
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
      var a, o = this.state, s = o.brushMoveStartX, u = o.movingTravellerId, c = o.endX, l = o.startX, f = this.state[u], d = this.props, p = d.x, v = d.width, h = d.travellerWidth, g = d.onChange, y = d.gap, w = d.data, x = {
        startX: this.state.startX,
        endX: this.state.endX
      }, b = i.pageX - s;
      b > 0 ? b = Math.min(b, p + v - h - f) : b < 0 && (b = Math.max(b, p - f)), x[u] = f + b;
      var m = this.getIndex(x), S = m.startIndex, A = m.endIndex, O = function() {
        var M = w.length - 1;
        return u === "startX" && (c > l ? S % y === 0 : A % y === 0) || c < l && A === M || u === "endX" && (c > l ? A % y === 0 : S % y === 0) || c > l && A === M;
      };
      this.setState((a = {}, zf(a, u, f + b), zf(a, "brushMoveStartX", i.pageX), a), function() {
        g && O() && g(m);
      });
    }
  }, {
    key: "renderBackground",
    value: function() {
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.fill, l = i.stroke;
      return /* @__PURE__ */ _("rect", {
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
      var i = this.props, a = i.x, o = i.y, s = i.width, u = i.height, c = i.data, l = i.children, f = i.padding, d = En.only(l);
      return d ? /* @__PURE__ */ ye.cloneElement(d, {
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
      var o = this.props, s = o.y, u = o.travellerWidth, c = o.height, l = o.traveller, f = Math.max(i, this.props.x), d = el(el({}, ge(this.props)), {}, {
        x: f,
        y: s,
        width: u,
        height: c
      });
      return /* @__PURE__ */ _(Xe, {
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
      return /* @__PURE__ */ _("rect", {
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
      return /* @__PURE__ */ V(Xe, {
        className: "recharts-brush-texts",
        children: [/* @__PURE__ */ _(rn, {
          textAnchor: "end",
          verticalAnchor: "middle",
          x: Math.min(d, p) - v,
          y: s + u / 2,
          ...h,
          children: this.getTextOfTick(a)
        }), /* @__PURE__ */ _(rn, {
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
      var i = this.props, a = i.data, o = i.className, s = i.children, u = i.x, c = i.y, l = i.width, f = i.height, d = i.alwaysShowText, p = this.state, v = p.startX, h = p.endX, g = p.isTextActive, y = p.isSlideMoving, w = p.isTravellerMoving;
      if (!a || !a.length || !re(u) || !re(c) || !re(l) || !re(f) || l <= 0 || f <= 0)
        return null;
      var x = We("recharts-brush", o), b = ye.Children.count(s) === 1, m = TX("userSelect", "none");
      return /* @__PURE__ */ V(Xe, {
        className: x,
        onMouseMove: this.handleDrag,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m,
        children: [this.renderBackground(), b && this.renderPanorama(), this.renderSlide(v, h), this.renderTravellerLayer(v, "startX"), this.renderTravellerLayer(h, "endX"), (g || y || w || d) && this.renderText()]
      });
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(i) {
      var a = i.x, o = i.y, s = i.width, u = i.height, c = i.stroke, l = Math.floor(o + u / 2) - 1;
      return /* @__PURE__ */ V(e1, {
        children: [/* @__PURE__ */ _("rect", {
          x: a,
          y: o,
          width: s,
          height: u,
          fill: c,
          stroke: "none"
        }), /* @__PURE__ */ _("line", {
          x1: a + 1,
          y1: l,
          x2: a + s - 1,
          y2: l,
          fill: "none",
          stroke: "#fff"
        }), /* @__PURE__ */ _("line", {
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
      return /* @__PURE__ */ ye.isValidElement(i) ? o = /* @__PURE__ */ ye.cloneElement(i, a) : de(i) ? o = i(a) : o = r.renderDefaultTraveller(a), o;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(i, a) {
      var o = i.data, s = i.width, u = i.x, c = i.travellerWidth, l = i.updateId, f = i.startIndex, d = i.endIndex;
      if (o !== a.prevData || l !== a.prevUpdateId)
        return el({
          prevData: o,
          prevTravellerWidth: c,
          prevUpdateId: l,
          prevX: u,
          prevWidth: s
        }, o && o.length ? IX({
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
}(xt);
Ca.displayName = "Brush";
Ca.defaultProps = {
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
var $X = Mh;
function LX(e, t) {
  var r;
  return $X(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var jX = LX, DX = Cx, FX = yr, VX = jX, BX = Re, UX = Iu;
function zX(e, t, r) {
  var n = BX(e) ? DX : VX;
  return r && UX(e, t, r) && (t = void 0), n(e, FX(t));
}
var WX = zX, pr = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
};
function HX(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var qX = HX, YX = Mh;
function GX(e, t) {
  var r = !0;
  return YX(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var KX = GX, XX = qX, ZX = KX, JX = yr, QX = Re, eZ = Iu;
function tZ(e, t, r) {
  var n = QX(e) ? XX : ZX;
  return r && eZ(e, t, r) && (t = void 0), n(e, JX(t));
}
var rA = tZ, Oy = _w;
function rZ(e, t, r) {
  t == "__proto__" && Oy ? Oy(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var nZ = rZ, iZ = nZ, aZ = Sw, oZ = yr;
function sZ(e, t) {
  var r = {};
  return t = oZ(t), aZ(e, function(n, i, a) {
    iZ(r, i, t(n, i, a));
  }), r;
}
var uZ = sZ;
function cZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ey(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function lZ(e, t, r) {
  return t && Ey(e.prototype, t), r && Ey(e, r), e;
}
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
function wo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ty(Object(r), !0).forEach(function(n) {
      nA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nA(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var iA = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, fZ = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return iA({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, aA = /* @__PURE__ */ function() {
  function e(t) {
    cZ(this, e), this.scale = void 0, this.scale = t;
  }
  return lZ(e, [{
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
aA.EPS = 1e-4;
var ip = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return wo(wo({}, n), {}, nA({}, i, aA.create(t[i])));
  }, {});
  return wo(wo({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, s = a.position;
      return uZ(i, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(i) {
      return rA(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function Py(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Py(Object(r), !0).forEach(function(n) {
      dZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Py(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dZ(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function hZ(e, t) {
  return mZ(e) || gZ(e, t) || vZ(e, t) || pZ();
}
function pZ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vZ(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return My(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return My(e, t);
  }
}
function My(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function gZ(e, t) {
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
function mZ(e) {
  if (Array.isArray(e))
    return e;
}
var yZ = function(t, r) {
  var n;
  return /* @__PURE__ */ ye.isValidElement(t) ? n = /* @__PURE__ */ ye.cloneElement(t, r) : de(t) ? n = t(r) : n = /* @__PURE__ */ _("line", {
    ...r,
    className: "recharts-reference-line-line"
  }), n;
}, bZ = function(t, r, n, i, a) {
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
    var g = a.x, y = a.xAxis.orientation, w = t.x.apply(g, {
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
    return y === "top" ? x.reverse() : x;
  }
  if (i) {
    var b = a.segment, m = b.map(function(S) {
      return t.apply(S, {
        position: f
      });
    });
    return pr(a, "discard") && WX(m, function(S) {
      return !t.isInRange(S);
    }) ? null : m;
  }
  return null;
};
function ap(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxis, a = e.yAxis, o = e.shape, s = e.className, u = e.alwaysShow, c = e.clipPathId;
  Sa(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = ip({
    x: i.scale,
    y: a.scale
  }), f = nt(t), d = nt(r), p = n && n.length === 2, v = bZ(l, f, d, p, e);
  if (!v)
    return null;
  var h = hZ(v, 2), g = h[0], y = g.x, w = g.y, x = h[1], b = x.x, m = x.y, S = pr(e, "hidden") ? "url(#".concat(c, ")") : void 0, A = Cy(Cy({
    clipPath: S
  }, ge(e, !0)), {}, {
    x1: y,
    y1: w,
    x2: b,
    y2: m
  });
  return /* @__PURE__ */ V(Xe, {
    className: We("recharts-reference-line", s),
    children: [yZ(o, A), rt.renderCallByParent(e, fZ({
      x1: y,
      y1: w,
      x2: b,
      y2: m
    }))]
  });
}
ap.displayName = "ReferenceLine";
ap.defaultProps = {
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
function Ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ky(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ny(Object(r), !0).forEach(function(n) {
      xZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xZ(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var wZ = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = ip({
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
function Ka(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, o = nt(t), s = nt(r);
  if (Sa(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !o || !s)
    return null;
  var u = wZ(e);
  if (!u)
    return null;
  var c = u.x, l = u.y, f = e.shape, d = e.className, p = pr(e, "hidden") ? "url(#".concat(a, ")") : void 0, v = ky(ky({
    clipPath: p
  }, ge(e, !0)), {}, {
    cx: c,
    cy: l
  });
  return /* @__PURE__ */ V(Xe, {
    className: We("recharts-reference-dot", d),
    children: [Ka.renderDot(f, v), rt.renderCallByParent(e, {
      x: c - n,
      y: l - n,
      width: 2 * n,
      height: 2 * n
    })]
  });
}
Ka.displayName = "ReferenceDot";
Ka.defaultProps = {
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
Ka.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ ye.isValidElement(e) ? r = /* @__PURE__ */ ye.cloneElement(e, t) : de(e) ? r = e(t) : r = /* @__PURE__ */ _(np, {
    ...t,
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  }), r;
};
function Ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Iy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ry(Object(r), !0).forEach(function(n) {
      SZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SZ(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var AZ = function(t, r, n, i, a) {
  var o = a.x1, s = a.x2, u = a.y1, c = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f)
    return null;
  var d = ip({
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
  return pr(a, "discard") && (!d.isInRange(p) || !d.isInRange(v)) ? null : iA(p, v);
};
function Xa(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, o = e.alwaysShow, s = e.clipPathId;
  Sa(o === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var u = nt(t), c = nt(r), l = nt(n), f = nt(i), d = e.shape;
  if (!u && !c && !l && !f && !d)
    return null;
  var p = AZ(u, c, l, f, e);
  if (!p && !d)
    return null;
  var v = pr(e, "hidden") ? "url(#".concat(s, ")") : void 0;
  return /* @__PURE__ */ V(Xe, {
    className: We("recharts-reference-area", a),
    children: [Xa.renderRect(d, Iy(Iy({
      clipPath: v
    }, ge(e, !0)), p)), rt.renderCallByParent(e, p)]
  });
}
Xa.displayName = "ReferenceArea";
Xa.defaultProps = {
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
Xa.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ ye.isValidElement(e) ? r = /* @__PURE__ */ ye.cloneElement(e, t) : de(e) ? r = e(t) : r = /* @__PURE__ */ _(rp, {
    ...t,
    className: "recharts-reference-area-rect"
  }), r;
};
function Zo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zo = function(r) {
    return typeof r;
  } : Zo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Zo(e);
}
function $y(e, t) {
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
    t % 2 ? $y(Object(r), !0).forEach(function(n) {
      _Z(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $y(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _Z(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function tl(e, t) {
  if (e == null)
    return {};
  var r = OZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function OZ(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function EZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ly(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function TZ(e, t, r) {
  return t && Ly(e.prototype, t), r && Ly(e, r), e;
}
function PZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && qf(e, t);
}
function qf(e, t) {
  return qf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, qf(e, t);
}
function CZ(e) {
  var t = kZ();
  return function() {
    var n = tu(e), i;
    if (t) {
      var a = tu(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return MZ(this, i);
  };
}
function MZ(e, t) {
  return t && (Zo(t) === "object" || typeof t == "function") ? t : NZ(e);
}
function NZ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kZ() {
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
function tu(e) {
  return tu = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, tu(e);
}
var _n = /* @__PURE__ */ function(e) {
  PZ(r, e);
  var t = CZ(r);
  function r(n) {
    var i;
    return EZ(this, r), i = t.call(this, n), i.layerReference = void 0, i.state = {
      fontSize: "",
      letterSpacing: ""
    }, i;
  }
  return TZ(r, [{
    key: "shouldComponentUpdate",
    value: function(i, a) {
      var o = i.viewBox, s = tl(i, ["viewBox"]), u = this.props, c = u.viewBox, l = tl(u, ["viewBox"]);
      return !ri(o, c) || !ri(s, l) || !ri(a, this.state);
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
      var a = this.props, o = a.x, s = a.y, u = a.width, c = a.height, l = a.orientation, f = a.tickSize, d = a.mirror, p = a.tickMargin, v, h, g, y, w, x, b = d ? -1 : 1, m = i.tickSize || f, S = re(i.tickCoord) ? i.tickCoord : i.coordinate;
      switch (l) {
        case "top":
          v = h = i.coordinate, y = s + +!d * c, g = y - b * m, x = g - b * p, w = S;
          break;
        case "left":
          g = y = i.coordinate, h = o + +!d * u, v = h - b * m, w = v - b * p, x = S;
          break;
        case "right":
          g = y = i.coordinate, h = o + +d * u, v = h + b * m, w = v + b * p, x = S;
          break;
        default:
          v = h = i.coordinate, y = s + +d * c, g = y + b * m, x = g + b * p, w = S;
          break;
      }
      return {
        line: {
          x1: v,
          y1: g,
          x2: h,
          y2: y
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
      return /* @__PURE__ */ _("line", {
        ...d,
        className: We("recharts-cartesian-axis-line", Pt(f, "className"))
      });
    }
  }, {
    key: "renderTicks",
    value: function(i, a, o) {
      var s = this, u = this.props, c = u.tickLine, l = u.stroke, f = u.tick, d = u.tickFormatter, p = u.unit, v = r.getTicks(_e(_e({}, this.props), {}, {
        ticks: i
      }), a, o), h = this.getTickTextAnchor(), g = this.getTickVerticalAnchor(), y = ge(this.props), w = ge(f), x = _e(_e({}, y), {}, {
        fill: "none"
      }, ge(c)), b = v.map(function(m, S) {
        var A = s.getTickLineCoord(m), O = A.line, E = A.tick, M = _e(_e(_e(_e({
          textAnchor: h,
          verticalAnchor: g
        }, y), {}, {
          stroke: "none",
          fill: l
        }, w), E), {}, {
          index: S,
          payload: m,
          visibleTicksCount: v.length,
          tickFormatter: d
        });
        return /* @__PURE__ */ V(Xe, {
          className: "recharts-cartesian-axis-tick",
          ...Va(s.props, m, S),
          children: [c && /* @__PURE__ */ _("line", {
            ...x,
            ...O,
            className: We("recharts-cartesian-axis-tick-line", Pt(c, "className"))
          }), f && r.renderTickItem(f, M, "".concat(de(d) ? d(m.value, S) : m.value).concat(p || ""))]
        }, "tick-".concat(S));
      });
      return /* @__PURE__ */ _("g", {
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
      var d = this.props, p = d.ticks, v = tl(d, ["ticks"]), h = p;
      return de(c) && (h = p && p.length > 0 ? c(this.props) : c(v)), s <= 0 || u <= 0 || !h || !h.length ? null : /* @__PURE__ */ V(Xe, {
        className: We("recharts-cartesian-axis", l),
        ref: function(y) {
          i.layerReference = y;
        },
        children: [o && this.renderAxisLine(), this.renderTicks(h, this.state.fontSize, this.state.letterSpacing), rt.renderCallByParent(this.props)]
      });
    }
  }], [{
    key: "getTicks",
    value: function(i, a, o) {
      var s = i.tick, u = i.ticks, c = i.viewBox, l = i.minTickGap, f = i.orientation, d = i.interval, p = i.tickFormatter, v = i.unit;
      return !u || !u.length || !s ? [] : re(d) || Zr.isSsr ? r.getNumberIntervalTicks(u, typeof d == "number" && re(d) ? d : 0) : d === "preserveStartEnd" ? r.getTicksStart({
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
      var o = i.ticks, s = i.tickFormatter, u = i.viewBox, c = i.orientation, l = i.minTickGap, f = i.unit, d = i.fontSize, p = i.letterSpacing, v = u.x, h = u.y, g = u.width, y = u.height, w = c === "top" || c === "bottom" ? "width" : "height", x = (o || []).slice(), b = f && w === "width" ? An(f, {
        fontSize: d,
        letterSpacing: p
      })[w] : 0, m = x.length, S = m >= 2 ? Et(x[1].coordinate - x[0].coordinate) : 1, A, O;
      if (S === 1 ? (A = w === "width" ? v : h, O = w === "width" ? v + g : h + y) : (A = w === "width" ? v + g : h + y, O = w === "width" ? v : h), a) {
        var E = o[m - 1], M = de(s) ? s(E.value, m - 1) : E.value, C = An(M, {
          fontSize: d,
          letterSpacing: p
        })[w] + b, N = S * (E.coordinate + S * C / 2 - O);
        x[m - 1] = E = _e(_e({}, E), {}, {
          tickCoord: N > 0 ? E.coordinate - N * S : E.coordinate
        });
        var k = S * (E.tickCoord - S * C / 2 - A) >= 0 && S * (E.tickCoord + S * C / 2 - O) <= 0;
        k && (O = E.tickCoord - S * (C / 2 + l), x[m - 1] = _e(_e({}, E), {}, {
          isShow: !0
        }));
      }
      for (var D = a ? m - 1 : m, j = 0; j < D; j++) {
        var R = x[j], Q = de(s) ? s(R.value, j) : R.value, K = An(Q, {
          fontSize: d,
          letterSpacing: p
        })[w] + b;
        if (j === 0) {
          var te = S * (R.coordinate - S * K / 2 - A);
          x[j] = R = _e(_e({}, R), {}, {
            tickCoord: te < 0 ? R.coordinate - te * S : R.coordinate
          });
        } else
          x[j] = R = _e(_e({}, R), {}, {
            tickCoord: R.coordinate
          });
        var $ = S * (R.tickCoord - S * K / 2 - A) >= 0 && S * (R.tickCoord + S * K / 2 - O) <= 0;
        $ && (A = R.tickCoord + S * (K / 2 + l), x[j] = _e(_e({}, R), {}, {
          isShow: !0
        }));
      }
      return x.filter(function(B) {
        return B.isShow;
      });
    }
  }, {
    key: "getTicksEnd",
    value: function(i) {
      var a = i.ticks, o = i.tickFormatter, s = i.viewBox, u = i.orientation, c = i.minTickGap, l = i.unit, f = i.fontSize, d = i.letterSpacing, p = s.x, v = s.y, h = s.width, g = s.height, y = u === "top" || u === "bottom" ? "width" : "height", w = l && y === "width" ? An(l, {
        fontSize: f,
        letterSpacing: d
      })[y] : 0, x = (a || []).slice(), b = x.length, m = b >= 2 ? Et(x[1].coordinate - x[0].coordinate) : 1, S, A;
      m === 1 ? (S = y === "width" ? p : v, A = y === "width" ? p + h : v + g) : (S = y === "width" ? p + h : v + g, A = y === "width" ? p : v);
      for (var O = b - 1; O >= 0; O--) {
        var E = x[O], M = de(o) ? o(E.value, b - O - 1) : E.value, C = An(M, {
          fontSize: f,
          letterSpacing: d
        })[y] + w;
        if (O === b - 1) {
          var N = m * (E.coordinate + m * C / 2 - A);
          x[O] = E = _e(_e({}, E), {}, {
            tickCoord: N > 0 ? E.coordinate - N * m : E.coordinate
          });
        } else
          x[O] = E = _e(_e({}, E), {}, {
            tickCoord: E.coordinate
          });
        var k = m * (E.tickCoord - m * C / 2 - S) >= 0 && m * (E.tickCoord + m * C / 2 - A) <= 0;
        k && (A = E.tickCoord - m * (C / 2 + c), x[O] = _e(_e({}, E), {}, {
          isShow: !0
        }));
      }
      return x.filter(function(D) {
        return D.isShow;
      });
    }
  }, {
    key: "renderTickItem",
    value: function(i, a, o) {
      var s;
      return /* @__PURE__ */ ye.isValidElement(i) ? s = /* @__PURE__ */ ye.cloneElement(i, a) : de(i) ? s = i(a) : s = /* @__PURE__ */ _(rn, {
        ...a,
        className: "recharts-cartesian-axis-tick-value",
        children: o
      }), s;
    }
  }]), r;
}(nd);
_n.displayName = "CartesianAxis";
_n.defaultProps = {
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
var RZ = yr, IZ = Ua, $Z = _u;
function LZ(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!IZ(t)) {
      var a = RZ(r);
      t = $Z(t), r = function(s) {
        return a(i[s], s, i);
      };
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var jZ = LZ, DZ = eA;
function FZ(e) {
  var t = DZ(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var VZ = FZ, BZ = qx, UZ = yr, zZ = VZ, WZ = Math.max;
function HZ(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : zZ(r);
  return i < 0 && (i = WZ(n + i, 0)), BZ(e, UZ(t), i);
}
var qZ = HZ, YZ = jZ, GZ = qZ, KZ = YZ(GZ), XZ = KZ, ZZ = GU, JZ = Ft, QZ = "Expected a function";
function eJ(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(QZ);
  return JZ(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), ZZ(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var tJ = eJ, rJ = kr, nJ = Rr, iJ = "[object Boolean]";
function aJ(e) {
  return e === !0 || e === !1 || nJ(e) && rJ(e) == iJ;
}
var oJ = aJ, Yf = function(t, r, n, i, a) {
  var o = dr(t, ap.displayName), s = dr(t, Ka.displayName), u = o.concat(s), c = dr(t, Xa.displayName), l = "".concat(i, "Id"), f = i[0], d = r;
  if (u.length && (d = u.reduce(function(h, g) {
    if (g.props[l] === n && pr(g.props, "extendDomain") && re(g.props[f])) {
      var y = g.props[f];
      return [Math.min(h[0], y), Math.max(h[1], y)];
    }
    return h;
  }, d)), c.length) {
    var p = "".concat(f, "1"), v = "".concat(f, "2");
    d = c.reduce(function(h, g) {
      if (g.props[l] === n && pr(g.props, "extendDomain") && re(g.props[p]) && re(g.props[v])) {
        var y = g.props[p], w = g.props[v];
        return [Math.min(h[0], y, w), Math.max(h[1], y, w)];
      }
      return h;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(h, g) {
    return re(g) ? [Math.min(h[0], g), Math.max(h[1], g)] : h;
  }, d)), d;
}, oA = { exports: {} };
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
    var g = this._events[h], y = arguments.length, w, x;
    if (g.fn) {
      switch (g.once && this.removeListener(c, g.fn, void 0, !0), y) {
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
      for (x = 1, w = new Array(y - 1); x < y; x++)
        w[x - 1] = arguments[x];
      g.fn.apply(g.context, w);
    } else {
      var b = g.length, m;
      for (x = 0; x < b; x++)
        switch (g[x].once && this.removeListener(c, g[x].fn, void 0, !0), y) {
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
              for (m = 1, w = new Array(y - 1); m < y; m++)
                w[m - 1] = arguments[m];
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
      for (var h = 0, g = [], y = v.length; h < y; h++)
        (v[h].fn !== l || d && !v[h].once || f && v[h].context !== f) && g.push(v[h]);
      g.length ? this._events[p] = g.length === 1 ? g[0] : g : o(this, p);
    }
    return this;
  }, s.prototype.removeAllListeners = function(c) {
    var l;
    return c ? (l = r ? r + c : c, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
})(oA);
const sJ = oA.exports;
var Nt = new sJ();
Nt.setMaxListeners && Nt.setMaxListeners(10);
var rl = "recharts.syncMouseEvents";
function Jo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jo = function(r) {
    return typeof r;
  } : Jo = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Jo(e);
}
function jy(e, t) {
  return lJ(e) || cJ(e, t) || sA(e, t) || uJ();
}
function uJ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cJ(e, t) {
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
function lJ(e) {
  if (Array.isArray(e))
    return e;
}
function Dy(e, t) {
  if (e == null)
    return {};
  var r = fJ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function fJ(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function dJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function hJ(e, t, r) {
  return t && Fy(e.prototype, t), r && Fy(e, r), e;
}
function pJ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Gf(e, t);
}
function Gf(e, t) {
  return Gf = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, Gf(e, t);
}
function vJ(e) {
  var t = mJ();
  return function() {
    var n = ru(e), i;
    if (t) {
      var a = ru(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return gJ(this, i);
  };
}
function gJ(e, t) {
  return t && (Jo(t) === "object" || typeof t == "function") ? t : Kf(e);
}
function Kf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mJ() {
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
function ru(e) {
  return ru = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ru(e);
}
function mi(e) {
  return xJ(e) || bJ(e) || sA(e) || yJ();
}
function yJ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sA(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Xf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Xf(e, t);
  }
}
function bJ(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function xJ(e) {
  if (Array.isArray(e))
    return Xf(e);
}
function Xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vy(Object(r), !0).forEach(function(n) {
      kt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var wJ = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, uA = {
  x: 0,
  y: 0
}, SJ = Number.isFinite ? Number.isFinite : isFinite, By = typeof requestAnimationFrame == "function" ? requestAnimationFrame : typeof setImmediate == "function" ? setImmediate : setTimeout, Uy = typeof cancelAnimationFrame == "function" ? cancelAnimationFrame : typeof clearImmediate == "function" ? clearImmediate : clearTimeout, AJ = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, _J = function(t, r, n, i) {
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
      return U(U(U({}, i), Be(i.cx, i.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var u = a.coordinate, c = i.angle;
    return U(U(U({}, i), Be(i.cx, i.cy, u, c)), {}, {
      angle: c,
      radius: u
    });
  }
  return uA;
}, Ku = function(t, r, n) {
  var i = r.graphicalItems, a = r.dataStartIndex, o = r.dataEndIndex, s = (i || []).reduce(function(u, c) {
    var l = c.props.data;
    return l && l.length ? [].concat(mi(u), mi(l)) : u;
  }, []);
  return s && s.length > 0 ? s : n && n.props && n.props.data && n.props.data.length > 0 ? n.props.data : t && t.length && re(a) && re(o) ? t.slice(a, o + 1) : [];
}, cA = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, s = Ku(r, t);
  return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(u, c) {
    var l = c.props.hide;
    if (l)
      return u;
    var f = c.props.data, d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? s : f;
      d = Gl(p, o.dataKey, i);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(mi(u), [NY(c, d)]) : u;
  }, []);
}, zy = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = AJ(a, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, l = pY(o, s, c, u);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = cA(t, r, l, f), p = _J(n, s, l, a);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, OJ = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = HS(l, a), v = n.reduce(function(h, g) {
    var y = g.props, w = y.type, x = y.dataKey, b = y.allowDataOverflow, m = y.allowDuplicatedCategory, S = y.scale, A = y.ticks, O = g.props[o], E = Ku(t.data, {
      graphicalItems: i.filter(function(K) {
        return K.props[o] === O;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), M = E.length;
    if (!h[O]) {
      var C, N, k;
      if (x) {
        if (C = Vs(E, x, w), w === "category" && p) {
          var D = vF(C);
          m && D ? (N = C, C = Qs(0, M)) : m || (C = qm(g.props.domain, C, g).reduce(function(K, te) {
            return K.indexOf(te) >= 0 ? K : [].concat(mi(K), [te]);
          }, []));
        } else if (w === "category")
          m ? C = C.filter(function(K) {
            return K !== "" && !le(K);
          }) : C = qm(g.props.domain, C, g).reduce(function(K, te) {
            return K.indexOf(te) >= 0 || te === "" || le(te) ? K : [].concat(mi(K), [te]);
          }, []);
        else if (w === "number") {
          var j = bY(E, i.filter(function(K) {
            return K.props[o] === O && !K.props.hide;
          }), x, a, l);
          j && (C = j);
        }
        p && (w === "number" || S !== "auto") && (k = Vs(E, x, "category"));
      } else
        p ? C = Qs(0, M) : s && s[O] && s[O].hasStack && w === "number" ? C = d === "expand" ? [0, 1] : qS(s[O].stackGroups, u, c) : C = WS(E, i.filter(function(K) {
          return K.props[o] === O && !K.props.hide;
        }), w, l, !0);
      if (w === "number")
        C = Yf(f, C, O, a, A), g.props.domain && (C = YS(g.props.domain, C, b));
      else if (w === "category" && g.props.domain) {
        var R = g.props.domain, Q = C.every(function(K) {
          return R.indexOf(K) >= 0;
        });
        Q && (C = R);
      }
      return U(U({}, h), {}, kt({}, O, U(U({}, g.props), {}, {
        axisType: a,
        domain: C,
        categoricalDomain: k,
        duplicateDomain: N,
        originalDomain: g.props.domain,
        isCategorical: p,
        layout: l
      })));
    }
    return h;
  }, {});
  return v;
}, EJ = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = Ku(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, v = HS(l, a), h = -1, g = n.reduce(function(y, w) {
    var x = w.props[o];
    if (!y[x]) {
      h++;
      var b;
      return v ? b = Qs(0, p) : s && s[x] && s[x].hasStack ? (b = qS(s[x].stackGroups, u, c), b = Yf(f, b, x, a)) : (b = YS(i.defaultProps.domain, WS(d, n.filter(function(m) {
        return m.props[o] === x && !m.props.hide;
      }), "number", l), i.defaultProps.allowDataOverflow), b = Yf(f, b, x, a)), U(U({}, y), {}, kt({}, x, U(U({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: Pt(wJ, "".concat(a, ".").concat(h % 2), null),
        domain: b,
        originalDomain: i.defaultProps.domain,
        isCategorical: v,
        layout: l
      })));
    }
    return y;
  }, {});
  return g;
}, TJ = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), d = dr(l, a), p = {};
  return d && d.length ? p = OJ(t, {
    axes: d,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = EJ(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, PJ = function(t) {
  var r = Dr(t), n = Fr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Nh(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Mf(r, n)
  };
}, Wy = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Yr(r, Ca.displayName), a = i && i.props && i.props.startIndex || 0, o = i && i.props && i.props.endIndex || t.data && t.data.length - 1 || 0;
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: le(n) ? !1 : n
  };
}, CJ = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Jr(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Hy = function(t) {
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
}, MJ = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, l = n.height, f = n.children, d = n.margin || {}, p = Yr(f, Ca.displayName), v = Yr(f, wa.displayName), h = Object.keys(u).reduce(function(x, b) {
    var m = u[b], S = m.orientation;
    return !m.mirror && !m.hide ? U(U({}, x), {}, kt({}, S, x[S] + m.width)) : x;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), g = Object.keys(o).reduce(function(x, b) {
    var m = o[b], S = m.orientation;
    return !m.mirror && !m.hide ? U(U({}, x), {}, kt({}, S, Pt(x, "".concat(S)) + m.height)) : x;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), y = U(U({}, g), h), w = y.bottom;
  return p && (y.bottom += p.props.height || Ca.defaultProps.height), v && r && (y = mY(y, i, n, r)), U(U({
    brushBottom: w
  }, y), {}, {
    width: c - y.left - y.right,
    height: l - y.top - y.bottom
  });
}, NJ = function(t) {
  var r, n, i = t.chartName, a = t.GraphicalChild, o = t.defaultTooltipEventType, s = o === void 0 ? "axis" : o, u = t.validateTooltipEventTypes, c = u === void 0 ? ["axis"] : u, l = t.axisComponents, f = t.legendContent, d = t.formatAxisMap, p = t.defaultProps, v = function(y, w) {
    var x = w.graphicalItems, b = w.stackGroups, m = w.offset, S = w.updateId, A = w.dataStartIndex, O = w.dataEndIndex, E = y.barSize, M = y.layout, C = y.barGap, N = y.barCategoryGap, k = y.maxBarSize, D = Hy(M), j = D.numericAxisName, R = D.cateAxisName, Q = CJ(x), K = Q && vY({
      barSize: E,
      stackGroups: b
    }), te = [];
    return x.forEach(function($, B) {
      var X = Ku(y.data, {
        dataStartIndex: A,
        dataEndIndex: O
      }, $), q = $.props, L = q.dataKey, W = q.maxBarSize, ee = $.props["".concat(j, "Id")], se = $.props["".concat(R, "Id")], J = l.reduce(function(pn, $r) {
        var Ln, Za = w["".concat($r.axisType, "Map")], Ja = $.props["".concat($r.axisType, "Id")], Ii = Za && Za[Ja];
        return U(U({}, pn), {}, (Ln = {}, kt(Ln, $r.axisType, Ii), kt(Ln, "".concat($r.axisType, "Ticks"), Fr(Ii)), Ln));
      }, {}), F = J[R], G = J["".concat(R, "Ticks")], ie = b && b[ee] && b[ee].hasStack && CY($, b[ee].stackGroups), T = Jr($.type).indexOf("Bar") >= 0, he = Mf(F, G), H = [];
      if (T) {
        var me, Se, ht = le(W) ? k : W, nr = (me = (Se = Mf(F, G, !0)) !== null && Se !== void 0 ? Se : ht) !== null && me !== void 0 ? me : 0;
        H = gY({
          barGap: C,
          barCategoryGap: N,
          bandSize: nr !== he ? nr : he,
          sizeList: K[se],
          maxBarSize: ht
        }), nr !== he && (H = H.map(function(pn) {
          return U(U({}, pn), {}, {
            position: U(U({}, pn.position), {}, {
              offset: pn.position.offset - nr / 2
            })
          });
        }));
      }
      var dn = $ && $.type && $.type.getComposedData;
      if (dn) {
        var hn;
        te.push({
          props: U(U({}, dn(U(U({}, J), {}, {
            displayedData: X,
            props: y,
            dataKey: L,
            item: $,
            bandSize: he,
            barPosition: H,
            offset: m,
            stackedData: ie,
            layout: M,
            dataStartIndex: A,
            dataEndIndex: O
          }))), {}, (hn = {
            key: $.key || "item-".concat(B)
          }, kt(hn, j, J[j]), kt(hn, R, J[R]), kt(hn, "animationId", S), hn)),
          childIndex: qz($, y.children),
          item: $
        });
      }
    }), te;
  }, h = function(y, w) {
    var x = y.props, b = y.dataStartIndex, m = y.dataEndIndex, S = y.updateId;
    if (!Qg({
      props: x
    }))
      return null;
    var A = x.children, O = x.layout, E = x.stackOffset, M = x.data, C = x.reverseStackOrder, N = Hy(O), k = N.numericAxisName, D = N.cateAxisName, j = dr(A, a), R = EY(M, j, "".concat(k, "Id"), "".concat(D, "Id"), E, C), Q = l.reduce(function(X, q) {
      var L = "".concat(q.axisType, "Map");
      return U(U({}, X), {}, kt({}, L, TJ(x, U(U({}, q), {}, {
        graphicalItems: j,
        stackGroups: q.axisType === k && R,
        dataStartIndex: b,
        dataEndIndex: m
      }))));
    }, {}), K = MJ(U(U({}, Q), {}, {
      props: x,
      graphicalItems: j
    }), w == null ? void 0 : w.legendBBox);
    Object.keys(Q).forEach(function(X) {
      Q[X] = d(x, Q[X], K, X.replace("Map", ""), i);
    });
    var te = Q["".concat(D, "Map")], $ = PJ(te), B = v(x, U(U({}, Q), {}, {
      dataStartIndex: b,
      dataEndIndex: m,
      updateId: S,
      graphicalItems: j,
      stackGroups: R,
      offset: K
    }));
    return U(U({
      formattedGraphicalItems: B,
      graphicalItems: j,
      offset: K,
      stackGroups: R
    }, $), Q);
  };
  return n = r = /* @__PURE__ */ function(g) {
    pJ(w, g);
    var y = vJ(w);
    function w(x) {
      var b;
      return dJ(this, w), b = y.call(this, x), b.uniqueChartId = void 0, b.clipPathId = void 0, b.legendInstance = void 0, b.deferId = void 0, b.container = void 0, b.clearDeferId = function() {
        !le(b.deferId) && Uy && Uy(b.deferId), b.deferId = null;
      }, b.handleLegendBBoxUpdate = function(m) {
        if (m) {
          var S = b.state, A = S.dataStartIndex, O = S.dataEndIndex, E = S.updateId;
          b.setState(U({
            legendBBox: m
          }, h({
            props: b.props,
            dataStartIndex: A,
            dataEndIndex: O,
            updateId: E
          }, U(U({}, b.state), {}, {
            legendBBox: m
          }))));
        }
      }, b.handleReceiveSyncEvent = function(m, S, A) {
        var O = b.props.syncId;
        O === m && S !== b.uniqueChartId && (b.clearDeferId(), b.deferId = By && By(b.applySyncEvent.bind(Kf(b), A)));
      }, b.handleBrushChange = function(m) {
        var S = m.startIndex, A = m.endIndex;
        if (S !== b.state.dataStartIndex || A !== b.state.dataEndIndex) {
          var O = b.state.updateId;
          b.setState(function() {
            return U({
              dataStartIndex: S,
              dataEndIndex: A
            }, h({
              props: b.props,
              dataStartIndex: S,
              dataEndIndex: A,
              updateId: O
            }, b.state));
          }), b.triggerSyncEvent({
            dataStartIndex: S,
            dataEndIndex: A
          });
        }
      }, b.handleMouseEnter = function(m) {
        var S = b.props.onMouseEnter, A = b.getMouseInfo(m);
        if (A) {
          var O = U(U({}, A), {}, {
            isTooltipActive: !0
          });
          b.setState(O), b.triggerSyncEvent(O), de(S) && S(O, m);
        }
      }, b.triggeredAfterMouseMove = function(m) {
        var S = b.props.onMouseMove, A = b.getMouseInfo(m), O = A ? U(U({}, A), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        b.setState(O), b.triggerSyncEvent(O), de(S) && S(O, m);
      }, b.handleItemMouseEnter = function(m) {
        b.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: m,
            activePayload: m.tooltipPayload,
            activeCoordinate: m.tooltipPosition || {
              x: m.cx,
              y: m.cy
            }
          };
        });
      }, b.handleItemMouseLeave = function() {
        b.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }, b.handleMouseMove = function(m) {
        m && de(m.persist) && m.persist(), b.triggeredAfterMouseMove(m);
      }, b.handleMouseLeave = function(m) {
        var S = b.props.onMouseLeave, A = {
          isTooltipActive: !1
        };
        b.setState(A), b.triggerSyncEvent(A), de(S) && S(A, m), b.cancelThrottledTriggerAfterMouseMove();
      }, b.handleOuterEvent = function(m) {
        var S = Hz(m), A = Pt(b.props, "".concat(S));
        if (S && de(A)) {
          var O;
          /.*touch.*/i.test(S) ? O = b.getMouseInfo(m.changedTouches[0]) : O = b.getMouseInfo(m);
          var E = A;
          E(O, m);
        }
      }, b.handleClick = function(m) {
        var S = b.props.onClick, A = b.getMouseInfo(m);
        if (A) {
          var O = U(U({}, A), {}, {
            isTooltipActive: !0
          });
          b.setState(O), b.triggerSyncEvent(O), de(S) && S(O, m);
        }
      }, b.handleMouseDown = function(m) {
        var S = b.props.onMouseDown;
        if (de(S)) {
          var A = b.getMouseInfo(m);
          S(A, m);
        }
      }, b.handleMouseUp = function(m) {
        var S = b.props.onMouseUp;
        if (de(S)) {
          var A = b.getMouseInfo(m);
          S(A, m);
        }
      }, b.handleTouchMove = function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && b.handleMouseMove(m.changedTouches[0]);
      }, b.handleTouchStart = function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && b.handleMouseDown(m.changedTouches[0]);
      }, b.handleTouchEnd = function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && b.handleMouseUp(m.changedTouches[0]);
      }, b.verticalCoordinatesGenerator = function(m) {
        var S = m.xAxis, A = m.width, O = m.height, E = m.offset;
        return Um(_n.getTicks(U(U(U({}, _n.defaultProps), S), {}, {
          ticks: Fr(S, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: A,
            height: O
          }
        })), E.left, E.left + E.width);
      }, b.horizontalCoordinatesGenerator = function(m) {
        var S = m.yAxis, A = m.width, O = m.height, E = m.offset;
        return Um(_n.getTicks(U(U(U({}, _n.defaultProps), S), {}, {
          ticks: Fr(S, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: A,
            height: O
          }
        })), E.top, E.top + E.height);
      }, b.axesTicksGenerator = function(m) {
        return Fr(m, !0);
      }, b.renderCursor = function(m) {
        var S = b.state, A = S.isTooltipActive, O = S.activeCoordinate, E = S.activePayload, M = S.offset, C = S.activeTooltipIndex, N = b.getTooltipEventType();
        if (!m || !m.props.cursor || !A || !O || i !== "ScatterChart" && N !== "axis")
          return null;
        var k = b.props.layout, D, j = Hs;
        if (i === "ScatterChart")
          D = O, j = JS;
        else if (i === "BarChart")
          D = b.getCursorRectangle(), j = rp;
        else if (k === "radial") {
          var R = b.getCursorPoints(), Q = R.cx, K = R.cy, te = R.radius, $ = R.startAngle, B = R.endAngle;
          D = {
            cx: Q,
            cy: K,
            startAngle: $,
            endAngle: B,
            innerRadius: te,
            outerRadius: te
          }, j = zs;
        } else
          D = {
            points: b.getCursorPoints()
          }, j = Hs;
        var X = m.key || "_recharts-cursor", q = U(U(U(U({
          stroke: "#ccc",
          pointerEvents: "none"
        }, M), D), ge(m.props.cursor)), {}, {
          payload: E,
          payloadIndex: C,
          key: X,
          className: "recharts-tooltip-cursor"
        });
        return /* @__PURE__ */ Kr(m.props.cursor) ? /* @__PURE__ */ gt(m.props.cursor, q) : /* @__PURE__ */ Tt(j, q);
      }, b.renderPolarAxis = function(m, S, A) {
        var O = Pt(m, "type.axisType"), E = Pt(b.state, "".concat(O, "Map")), M = E[m.props["".concat(O, "Id")]];
        return /* @__PURE__ */ gt(m, U(U({}, M), {}, {
          className: O,
          key: m.key || "".concat(S, "-").concat(A),
          ticks: Fr(M, !0)
        }));
      }, b.renderXAxis = function(m, S, A) {
        var O = b.state.xAxisMap, E = O[m.props.xAxisId];
        return b.renderAxis(E, m, S, A);
      }, b.renderYAxis = function(m, S, A) {
        var O = b.state.yAxisMap, E = O[m.props.yAxisId];
        return b.renderAxis(E, m, S, A);
      }, b.renderGrid = function(m) {
        var S = b.state, A = S.xAxisMap, O = S.yAxisMap, E = S.offset, M = b.props, C = M.width, N = M.height, k = Dr(A), D = XZ(O, function(Q) {
          return rA(Q.domain, SJ);
        }), j = D || Dr(O), R = m.props || {};
        return /* @__PURE__ */ gt(m, {
          key: m.key || "grid",
          x: re(R.x) ? R.x : E.left,
          y: re(R.y) ? R.y : E.top,
          width: re(R.width) ? R.width : E.width,
          height: re(R.height) ? R.height : E.height,
          xAxis: k,
          yAxis: j,
          offset: E,
          chartWidth: C,
          chartHeight: N,
          verticalCoordinatesGenerator: R.verticalCoordinatesGenerator || b.verticalCoordinatesGenerator,
          horizontalCoordinatesGenerator: R.horizontalCoordinatesGenerator || b.horizontalCoordinatesGenerator
        });
      }, b.renderPolarGrid = function(m) {
        var S = m.props, A = S.radialLines, O = S.polarAngles, E = S.polarRadius, M = b.state, C = M.radiusAxisMap, N = M.angleAxisMap, k = Dr(C), D = Dr(N), j = D.cx, R = D.cy, Q = D.innerRadius, K = D.outerRadius;
        return /* @__PURE__ */ gt(m, {
          polarAngles: Re(O) ? O : Fr(D, !0).map(function(te) {
            return te.coordinate;
          }),
          polarRadius: Re(E) ? E : Fr(k, !0).map(function(te) {
            return te.coordinate;
          }),
          cx: j,
          cy: R,
          innerRadius: Q,
          outerRadius: K,
          key: m.key || "polar-grid",
          radialLines: A
        });
      }, b.renderLegend = function() {
        var m = b.state.formattedGraphicalItems, S = b.props, A = S.children, O = S.width, E = S.height, M = b.props.margin || {}, C = O - (M.left || 0) - (M.right || 0), N = US({
          children: A,
          formattedGraphicalItems: m,
          legendWidth: C,
          legendContent: f
        });
        if (!N)
          return null;
        var k = N.item, D = Dy(N, ["item"]);
        return /* @__PURE__ */ gt(k, U(U({}, D), {}, {
          chartWidth: O,
          chartHeight: E,
          margin: M,
          ref: function(R) {
            b.legendInstance = R;
          },
          onBBoxUpdate: b.handleLegendBBoxUpdate
        }));
      }, b.renderTooltip = function() {
        var m = b.props.children, S = Yr(m, Kn.displayName);
        if (!S)
          return null;
        var A = b.state, O = A.isTooltipActive, E = A.activeCoordinate, M = A.activePayload, C = A.activeLabel, N = A.offset;
        return /* @__PURE__ */ gt(S, {
          viewBox: U(U({}, N), {}, {
            x: N.left,
            y: N.top
          }),
          active: O,
          label: C,
          payload: O ? M : [],
          coordinate: E
        });
      }, b.renderBrush = function(m) {
        var S = b.props, A = S.margin, O = S.data, E = b.state, M = E.offset, C = E.dataStartIndex, N = E.dataEndIndex, k = E.updateId;
        return /* @__PURE__ */ gt(m, {
          key: m.key || "_recharts-brush",
          onChange: yo(b.handleBrushChange, null, m.props.onChange),
          data: O,
          x: re(m.props.x) ? m.props.x : M.left,
          y: re(m.props.y) ? m.props.y : M.top + M.height + M.brushBottom - (A.bottom || 0),
          width: re(m.props.width) ? m.props.width : M.width,
          startIndex: C,
          endIndex: N,
          updateId: "brush-".concat(k)
        });
      }, b.renderReferenceElement = function(m, S, A) {
        if (!m)
          return null;
        var O = Kf(b), E = O.clipPathId, M = b.state, C = M.xAxisMap, N = M.yAxisMap, k = M.offset, D = m.props, j = D.xAxisId, R = D.yAxisId;
        return /* @__PURE__ */ gt(m, {
          key: m.key || "".concat(S, "-").concat(A),
          xAxis: C[j],
          yAxis: N[R],
          viewBox: {
            x: k.left,
            y: k.top,
            width: k.width,
            height: k.height
          },
          clipPathId: E
        });
      }, b.renderActivePoints = function(m) {
        var S = m.item, A = m.activePoint, O = m.basePoint, E = m.childIndex, M = m.isRange, C = [], N = S.props.key, k = S.item.props, D = k.activeDot, j = k.dataKey, R = U(U({
          index: E,
          dataKey: j,
          cx: A.x,
          cy: A.y,
          r: 4,
          fill: tp(S.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: A.payload,
          value: A.value,
          key: "".concat(N, "-activePoint-").concat(E)
        }, ge(D)), fs(D));
        return C.push(w.renderActiveDot(D, R)), O ? C.push(w.renderActiveDot(D, U(U({}, R), {}, {
          cx: O.x,
          cy: O.y,
          key: "".concat(N, "-basePoint-").concat(E)
        }))) : M && C.push(null), C;
      }, b.renderGraphicChild = function(m, S, A) {
        var O = b.filterFormatItem(m, S, A);
        if (!O)
          return null;
        var E = b.getTooltipEventType(), M = b.state, C = M.isTooltipActive, N = M.tooltipAxis, k = M.activeTooltipIndex, D = M.activeLabel, j = b.props.children, R = Yr(j, Kn.displayName), Q = O.props, K = Q.points, te = Q.isRange, $ = Q.baseLine, B = O.item.props, X = B.activeDot, q = B.hide, L = !q && C && R && X && k >= 0, W = {};
        E !== "axis" && R && R.props.trigger === "click" ? W = {
          onClick: yo(b.handleItemMouseEnter, null, m.props.onCLick)
        } : E !== "axis" && (W = {
          onMouseLeave: yo(b.handleItemMouseLeave, null, m.props.onMouseLeave),
          onMouseEnter: yo(b.handleItemMouseEnter, null, m.props.onMouseEnter)
        });
        var ee = /* @__PURE__ */ gt(m, U(U({}, O.props), W));
        function se(ie) {
          return typeof N.dataKey == "function" ? N.dataKey(ie.payload) : null;
        }
        if (L) {
          var J, F;
          if (N.dataKey && !N.allowDuplicatedCategory) {
            var G = typeof N.dataKey == "function" ? se : "payload.".concat(N.dataKey.toString());
            J = Gl(K, G, D), F = te && $ && Gl($, G, D);
          } else
            J = K[k], F = te && $ && $[k];
          if (!le(J))
            return [ee].concat(mi(b.renderActivePoints({
              item: O,
              activePoint: J,
              basePoint: F,
              childIndex: k,
              isRange: te
            })));
        }
        return te ? [ee, null, null] : [ee, null];
      }, b.renderCustomized = function(m, S, A) {
        return /* @__PURE__ */ gt(m, U(U({
          key: "recharts-customized-".concat(A)
        }, b.props), b.state));
      }, b.uniqueChartId = le(x.id) ? ku("recharts") : x.id, b.clipPathId = "".concat(b.uniqueChartId, "-clip"), x.throttleDelay && (b.triggeredAfterMouseMove = tJ(b.triggeredAfterMouseMove, x.throttleDelay)), b.state = {}, b;
    }
    return hJ(w, [{
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
        var b = Yr(this.props.children, Kn.displayName);
        if (b && oJ(b.props.shared)) {
          var m = b.props.shared ? "axis" : "item";
          return c.indexOf(m) >= 0 ? m : s;
        }
        return s;
      }
    }, {
      key: "getMouseInfo",
      value: function(b) {
        if (!this.container)
          return null;
        var m = Sz(this.container), S = Az(b, m), A = this.inRange(S.chartX, S.chartY);
        if (!A)
          return null;
        var O = this.state, E = O.xAxisMap, M = O.yAxisMap, C = this.getTooltipEventType();
        if (C !== "axis" && E && M) {
          var N = Dr(E).scale, k = Dr(M).scale, D = N && N.invert ? N.invert(S.chartX) : null, j = k && k.invert ? k.invert(S.chartY) : null;
          return U(U({}, S), {}, {
            xValue: D,
            yValue: j
          });
        }
        var R = zy(this.state, this.props.data, this.props.layout, A);
        return R ? U(U({}, S), R) : null;
      }
    }, {
      key: "getCursorRectangle",
      value: function() {
        var b = this.props.layout, m = this.state, S = m.activeCoordinate, A = m.offset, O = m.tooltipAxisBandSize, E = O / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: b === "horizontal" ? S.x - E : A.left + 0.5,
          y: b === "horizontal" ? A.top + 0.5 : S.y - E,
          width: b === "horizontal" ? O : A.width - 1,
          height: b === "horizontal" ? A.height - 1 : O
        };
      }
    }, {
      key: "getCursorPoints",
      value: function() {
        var b = this.props.layout, m = this.state, S = m.activeCoordinate, A = m.offset, O, E, M, C;
        if (b === "horizontal")
          O = S.x, M = O, E = A.top, C = A.top + A.height;
        else if (b === "vertical")
          E = S.y, C = E, O = A.left, M = A.left + A.width;
        else if (!le(S.cx) || !le(S.cy))
          if (b === "centric") {
            var N = S.cx, k = S.cy, D = S.innerRadius, j = S.outerRadius, R = S.angle, Q = Be(N, k, D, R), K = Be(N, k, j, R);
            O = Q.x, E = Q.y, M = K.x, C = K.y;
          } else {
            var te = S.cx, $ = S.cy, B = S.radius, X = S.startAngle, q = S.endAngle, L = Be(te, $, B, X), W = Be(te, $, B, q);
            return {
              points: [L, W],
              cx: te,
              cy: $,
              radius: B,
              startAngle: X,
              endAngle: q
            };
          }
        return [{
          x: O,
          y: E
        }, {
          x: M,
          y: C
        }];
      }
    }, {
      key: "inRange",
      value: function(b, m) {
        var S = this.props.layout;
        if (S === "horizontal" || S === "vertical") {
          var A = this.state.offset, O = b >= A.left && b <= A.left + A.width && m >= A.top && m <= A.top + A.height;
          return O ? {
            x: b,
            y: m
          } : null;
        }
        var E = this.state, M = E.angleAxisMap, C = E.radiusAxisMap;
        if (M && C) {
          var N = Dr(M);
          return Km({
            x: b,
            y: m
          }, N);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var b = this.props.children, m = this.getTooltipEventType(), S = Yr(b, Kn.displayName), A = {};
        S && m === "axis" && (S.props.trigger === "click" ? A = {
          onClick: this.handleClick
        } : A = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var O = fs(this.props, this.handleOuterEvent);
        return U(U({}, O), A);
      }
    }, {
      key: "addListener",
      value: function() {
        Nt.on(rl, this.handleReceiveSyncEvent), Nt.setMaxListeners && Nt._maxListeners && Nt.setMaxListeners(Nt._maxListeners + 1);
      }
    }, {
      key: "removeListener",
      value: function() {
        Nt.removeListener(rl, this.handleReceiveSyncEvent), Nt.setMaxListeners && Nt._maxListeners && Nt.setMaxListeners(Nt._maxListeners - 1);
      }
    }, {
      key: "triggerSyncEvent",
      value: function(b) {
        var m = this.props.syncId;
        le(m) || Nt.emit(rl, m, this.uniqueChartId, b);
      }
    }, {
      key: "applySyncEvent",
      value: function(b) {
        var m = this.props, S = m.layout, A = m.syncMethod, O = this.state.updateId, E = b.dataStartIndex, M = b.dataEndIndex;
        if (!le(b.dataStartIndex) || !le(b.dataEndIndex))
          this.setState(U({
            dataStartIndex: E,
            dataEndIndex: M
          }, h({
            props: this.props,
            dataStartIndex: E,
            dataEndIndex: M,
            updateId: O
          }, this.state)));
        else if (le(b.activeTooltipIndex))
          this.setState(b);
        else {
          var C = b.chartX, N = b.chartY, k = b.activeTooltipIndex, D = this.state, j = D.offset, R = D.tooltipTicks;
          if (!j)
            return;
          if (typeof A == "function")
            k = A(R, b);
          else if (A === "value") {
            k = -1;
            for (var Q = 0; Q < R.length; Q++)
              if (R[Q].value === b.activeLabel) {
                k = Q;
                break;
              }
          }
          var K = U(U({}, j), {}, {
            x: j.left,
            y: j.top
          }), te = Math.min(C, K.x + K.width), $ = Math.min(N, K.y + K.height), B = R[k] && R[k].value, X = cA(this.state, this.props.data, k), q = R[k] ? {
            x: S === "horizontal" ? R[k].coordinate : te,
            y: S === "horizontal" ? $ : R[k].coordinate
          } : uA;
          this.setState(U(U({}, b), {}, {
            activeLabel: B,
            activeCoordinate: q,
            activePayload: X,
            activeTooltipIndex: k
          }));
        }
      }
    }, {
      key: "filterFormatItem",
      value: function(b, m, S) {
        for (var A = this.state.formattedGraphicalItems, O = 0, E = A.length; O < E; O++) {
          var M = A[O];
          if (M.item === b || M.props.key === b.key || m === Jr(M.item.type) && S === M.childIndex)
            return M;
        }
        return null;
      }
    }, {
      key: "renderAxis",
      value: function(b, m, S, A) {
        var O = this.props, E = O.width, M = O.height;
        return /* @__PURE__ */ Tt(_n, {
          ...b,
          className: "recharts-".concat(b.axisType, " ").concat(b.axisType),
          key: m.key || "".concat(S, "-").concat(A),
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
        var b = this.clipPathId, m = this.state.offset, S = m.left, A = m.top, O = m.height, E = m.width;
        return /* @__PURE__ */ _("defs", {
          children: /* @__PURE__ */ _("clipPath", {
            id: b,
            children: /* @__PURE__ */ _("rect", {
              x: S,
              y: A,
              height: O,
              width: E
            })
          })
        });
      }
    }, {
      key: "getXScales",
      value: function() {
        var b = this.state.xAxisMap;
        return b ? Object.entries(b).reduce(function(m, S) {
          var A = jy(S, 2), O = A[0], E = A[1];
          return U(U({}, m), {}, kt({}, O, E.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var b = this.state.yAxisMap;
        return b ? Object.entries(b).reduce(function(m, S) {
          var A = jy(S, 2), O = A[0], E = A[1];
          return U(U({}, m), {}, kt({}, O, E.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(b) {
        var m, S;
        return (m = this.state.xAxisMap) === null || m === void 0 || (S = m[b]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(b) {
        var m, S;
        return (m = this.state.yAxisMap) === null || m === void 0 || (S = m[b]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(b) {
        var m = this.state.formattedGraphicalItems;
        if (m && m.length)
          for (var S = 0, A = m.length; S < A; S++) {
            var O = m[S], E = O.props, M = O.item, C = Jr(M.type);
            if (C === "Bar") {
              var N = (E.data || []).find(function(D) {
                return BG(b, D);
              });
              if (N)
                return {
                  graphicalItem: O,
                  payload: N
                };
            } else if (C === "RadialBar") {
              var k = (E.data || []).find(function(D) {
                return Km(b, D);
              });
              if (k)
                return {
                  graphicalItem: O,
                  payload: k
                };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var b = this;
        if (!Qg(this))
          return null;
        var m = this.props, S = m.children, A = m.className, O = m.width, E = m.height, M = m.style, C = m.compact, N = m.title, k = m.desc, D = Dy(m, ["children", "className", "width", "height", "style", "compact", "title", "desc"]), j = ge(D), R = {
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
          return /* @__PURE__ */ V(Ml, {
            ...j,
            width: O,
            height: E,
            title: N,
            desc: k,
            children: [this.renderClipPath(), tm(S, R)]
          });
        var Q = this.parseEventsOfWrapper();
        return /* @__PURE__ */ V("div", {
          className: We("recharts-wrapper", A),
          style: U({
            position: "relative",
            cursor: "default",
            width: O,
            height: E
          }, M),
          ...Q,
          ref: function(te) {
            b.container = te;
          },
          children: [/* @__PURE__ */ V(Ml, {
            ...j,
            width: O,
            height: E,
            title: N,
            desc: k,
            children: [this.renderClipPath(), tm(S, R)]
          }), this.renderLegend(), this.renderTooltip()]
        });
      }
    }]), w;
  }(nd), r.displayName = i, r.defaultProps = U({
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
  }, p), r.getDerivedStateFromProps = function(g, y) {
    var w = g.data, x = g.children, b = g.width, m = g.height, S = g.layout, A = g.stackOffset, O = g.margin;
    if (le(y.updateId)) {
      var E = Wy(g);
      return U(U(U({}, E), {}, {
        updateId: 0
      }, h(U(U({
        props: g
      }, E), {}, {
        updateId: 0
      }), y)), {}, {
        prevData: w,
        prevWidth: b,
        prevHeight: m,
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: O,
        prevChildren: x
      });
    }
    if (w !== y.prevData || b !== y.prevWidth || m !== y.prevHeight || S !== y.prevLayout || A !== y.prevStackOffset || !ri(O, y.prevMargin)) {
      var M = Wy(g), C = {
        chartX: y.chartX,
        chartY: y.chartY,
        isTooltipActive: y.isTooltipActive
      }, N = U(U({}, zy(y, w, S)), {}, {
        updateId: y.updateId + 1
      }), k = U(U(U({}, M), C), N);
      return U(U(U({}, k), h(U({
        props: g
      }, k), y)), {}, {
        prevData: w,
        prevWidth: b,
        prevHeight: m,
        prevLayout: S,
        prevStackOffset: A,
        prevMargin: O,
        prevChildren: x
      });
    }
    if (!Rw(x, y.prevChildren)) {
      var D = !le(w), j = D ? y.updateId : y.updateId + 1;
      return U(U({
        updateId: j
      }, h(U(U({
        props: g
      }, y), {}, {
        updateId: j
      }), y)), {}, {
        prevChildren: x
      });
    }
    return null;
  }, r.renderActiveDot = function(g, y) {
    var w;
    return /* @__PURE__ */ Kr(g) ? w = /* @__PURE__ */ gt(g, y) : de(g) ? w = g(y) : w = /* @__PURE__ */ _(np, {
      ...y
    }), /* @__PURE__ */ _(Xe, {
      className: "recharts-active-dot",
      children: w
    }, y.key);
  }, n;
}, kJ = NJ({
  chartName: "PieChart",
  GraphicalChild: Qt,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Gu
  }, {
    axisType: "radiusAxis",
    AxisComp: Yu
  }],
  formatAxisMap: DY,
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
var Zn = 9e15, fn = 1e9, Zf = "0123456789abcdef", nu = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", iu = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Jf = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Zn,
  maxE: Zn,
  crypto: !1
}, lA, Or, ve = !0, Xu = "[DecimalError] ", nn = Xu + "Invalid argument: ", fA = Xu + "Precision limit exceeded", dA = Xu + "crypto unavailable", hA = "[object Decimal]", yt = Math.floor, tt = Math.pow, RJ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, IJ = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, $J = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, pA = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, rr = 1e7, ce = 7, LJ = 9007199254740991, jJ = nu.length - 1, Qf = iu.length - 1, z = { toStringTag: hA };
z.absoluteValue = z.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
z.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
z.clampedTo = z.clamp = function(e, t) {
  var r, n = this, i = n.constructor;
  if (e = new i(e), t = new i(t), !e.s || !t.s)
    return new i(NaN);
  if (e.gt(t))
    throw Error(nn + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
};
z.comparedTo = z.cmp = function(e) {
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
z.cosine = z.cos = function() {
  var e, t, r = this, n = r.constructor;
  return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + ce, n.rounding = 1, r = DJ(n, bA(n, r)), n.precision = e, n.rounding = t, ue(Or == 2 || Or == 3 ? r.neg() : r, e, t, !0)) : new n(1) : new n(NaN);
};
z.cubeRoot = z.cbrt = function() {
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
z.decimalPlaces = z.dp = function() {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - yt(this.e / ce)) * ce, e = t[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
z.dividedBy = z.div = function(e) {
  return De(this, new this.constructor(e));
};
z.dividedToIntegerBy = z.divToInt = function(e) {
  var t = this, r = t.constructor;
  return ue(De(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
z.equals = z.eq = function(e) {
  return this.cmp(e) === 0;
};
z.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
z.greaterThan = z.gt = function(e) {
  return this.cmp(e) > 0;
};
z.greaterThanOrEqualTo = z.gte = function(e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
z.hyperbolicCosine = z.cosh = function() {
  var e, t, r, n, i, a = this, o = a.constructor, s = new o(1);
  if (!a.isFinite())
    return new o(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return s;
  r = o.precision, n = o.rounding, o.precision = r + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Ju(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = yi(o, 1, a.times(t), new o(1), !0);
  for (var u, c = e, l = new o(8); c--; )
    u = a.times(a), a = s.minus(u.times(l.minus(u.times(l))));
  return ue(a, o.precision = r, o.rounding = n, !0);
};
z.hyperbolicSine = z.sinh = function() {
  var e, t, r, n, i = this, a = i.constructor;
  if (!i.isFinite() || i.isZero())
    return new a(i);
  if (t = a.precision, r = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, n = i.d.length, n < 3)
    i = yi(a, 2, i, i, !0);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Ju(5, e)), i = yi(a, 2, i, i, !0);
    for (var o, s = new a(5), u = new a(16), c = new a(20); e--; )
      o = i.times(i), i = i.times(s.plus(o.times(u.times(o).plus(c))));
  }
  return a.precision = t, a.rounding = r, ue(i, t, r, !0);
};
z.hyperbolicTangent = z.tanh = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, De(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
};
z.inverseCosine = z.acos = function() {
  var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, a = r.rounding;
  return n !== -1 ? n === 0 ? t.isNeg() ? er(r, i, a) : new r(0) : new r(NaN) : t.isZero() ? er(r, i + 4, a).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = er(r, i + 4, a).times(0.5), r.precision = i, r.rounding = a, e.minus(t));
};
z.inverseHyperbolicCosine = z.acosh = function() {
  var e, t, r = this, n = r.constructor;
  return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, ve = !1, r = r.times(r).minus(1).sqrt().plus(r), ve = !0, n.precision = e, n.rounding = t, r.ln()) : new n(r);
};
z.inverseHyperbolicSine = z.asinh = function() {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, ve = !1, r = r.times(r).plus(1).sqrt().plus(r), ve = !0, n.precision = e, n.rounding = t, r.ln());
};
z.inverseHyperbolicTangent = z.atanh = function() {
  var e, t, r, n, i = this, a = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? ue(new a(i), e, t, !0) : (a.precision = r = n - i.e, i = De(i.plus(1), new a(1).minus(i), r + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(0.5))) : new a(NaN);
};
z.inverseSine = z.asin = function() {
  var e, t, r, n, i = this, a = i.constructor;
  return i.isZero() ? new a(i) : (t = i.abs().cmp(1), r = a.precision, n = a.rounding, t !== -1 ? t === 0 ? (e = er(a, r + 4, n).times(0.5), e.s = i.s, e) : new a(NaN) : (a.precision = r + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = r, a.rounding = n, i.times(2)));
};
z.inverseTangent = z.atan = function() {
  var e, t, r, n, i, a, o, s, u, c = this, l = c.constructor, f = l.precision, d = l.rounding;
  if (c.isFinite()) {
    if (c.isZero())
      return new l(c);
    if (c.abs().eq(1) && f + 4 <= Qf)
      return o = er(l, f + 4, d).times(0.25), o.s = c.s, o;
  } else {
    if (!c.s)
      return new l(NaN);
    if (f + 4 <= Qf)
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
z.isFinite = function() {
  return !!this.d;
};
z.isInteger = z.isInt = function() {
  return !!this.d && yt(this.e / ce) > this.d.length - 2;
};
z.isNaN = function() {
  return !this.s;
};
z.isNegative = z.isNeg = function() {
  return this.s < 0;
};
z.isPositive = z.isPos = function() {
  return this.s > 0;
};
z.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
z.lessThan = z.lt = function(e) {
  return this.cmp(e) < 0;
};
z.lessThanOrEqualTo = z.lte = function(e) {
  return this.cmp(e) < 1;
};
z.logarithm = z.log = function(e) {
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
  if (ve = !1, s = f + p, o = Gr(c, s), n = t ? au(l, s + 10) : Gr(e, s), u = De(o, n, s, 1), Ma(u.d, i = f, d))
    do
      if (s += 10, o = Gr(c, s), n = t ? au(l, s + 10) : Gr(e, s), u = De(o, n, s, 1), !a) {
        +ft(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = ue(u, f + 1, 0));
        break;
      }
    while (Ma(u.d, i += 10, d));
  return ve = !0, ue(u, f, d);
};
z.minus = z.sub = function(e) {
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
  return c[0] ? (e.d = c, e.e = Zu(c, r), ve ? ue(e, s, u) : e) : new v(u === 3 ? -0 : 0);
};
z.modulo = z.mod = function(e) {
  var t, r = this, n = r.constructor;
  return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? ue(new n(r), n.precision, n.rounding) : (ve = !1, n.modulo == 9 ? (t = De(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = De(r, e, 0, n.modulo, 1), t = t.times(e), ve = !0, r.minus(t));
};
z.naturalExponential = z.exp = function() {
  return ed(this);
};
z.naturalLogarithm = z.ln = function() {
  return Gr(this);
};
z.negated = z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
z.plus = z.add = function(e) {
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
  return e.d = c, e.e = Zu(c, n), ve ? ue(e, s, u) : e;
};
z.precision = z.sd = function(e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(nn + e);
  return r.d ? (t = vA(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
z.round = function() {
  var e = this, t = e.constructor;
  return ue(new t(e), e.e + 1, t.rounding);
};
z.sine = z.sin = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + ce, n.rounding = 1, r = VJ(n, bA(n, r)), n.precision = e, n.rounding = t, ue(Or > 2 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
z.squareRoot = z.sqrt = function() {
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
z.tangent = z.tan = function() {
  var e, t, r = this, n = r.constructor;
  return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = De(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, ue(Or == 2 || Or == 4 ? r.neg() : r, e, t, !0)) : new n(NaN);
};
z.times = z.mul = function(e) {
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
  return t ? ++r : a.shift(), e.d = a, e.e = Zu(a, r), ve ? ue(e, f.precision, f.rounding) : e;
};
z.toBinary = function(e, t) {
  return op(this, 2, e, t);
};
z.toDecimalPlaces = z.toDP = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Mt(e, 0, fn), t === void 0 ? t = n.rounding : Mt(t, 0, 8), ue(r, e + r.e + 1, t));
};
z.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = gr(n, !0) : (Mt(e, 0, fn), t === void 0 ? t = i.rounding : Mt(t, 0, 8), n = ue(new i(n), e + 1, t), r = gr(n, !0, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
z.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? r = gr(i) : (Mt(e, 0, fn), t === void 0 ? t = a.rounding : Mt(t, 0, 8), n = ue(new a(i), e + i.e + 1, t), r = gr(n, !1, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
};
z.toFraction = function(e) {
  var t, r, n, i, a, o, s, u, c, l, f, d, p = this, v = p.d, h = p.constructor;
  if (!v)
    return new h(p);
  if (c = r = new h(1), n = u = new h(0), t = new h(n), a = t.e = vA(v) - p.e - 1, o = a % ce, t.d[0] = tt(10, o < 0 ? ce + o : o), e == null)
    e = a > 0 ? t : c;
  else {
    if (s = new h(e), !s.isInt() || s.lt(c))
      throw Error(nn + s);
    e = s.gt(t) ? a > 0 ? t : c : s;
  }
  for (ve = !1, s = new h(ft(v)), l = h.precision, h.precision = a = v.length * ce * 2; f = De(s, t, 0, 1, 1), i = r.plus(f.times(n)), i.cmp(e) != 1; )
    r = n, n = i, i = c, c = u.plus(f.times(i)), u = i, i = t, t = s.minus(f.times(i)), s = i;
  return i = De(e.minus(r), n, 0, 1, 1), u = u.plus(i.times(c)), r = r.plus(i.times(n)), u.s = c.s = p.s, d = De(c, n, a, 1).minus(p).abs().cmp(De(u, r, a, 1).minus(p).abs()) < 1 ? [c, n] : [u, r], h.precision = l, ve = !0, d;
};
z.toHexadecimal = z.toHex = function(e, t) {
  return op(this, 16, e, t);
};
z.toNearest = function(e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d)
      return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : Mt(t, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (ve = !1, r = De(r, e, 0, t, 1).times(e), ve = !0, ue(r)) : (e.s = r.s, r = e), r;
};
z.toNumber = function() {
  return +this;
};
z.toOctal = function(e, t) {
  return op(this, 8, e, t);
};
z.toPower = z.pow = function(e) {
  var t, r, n, i, a, o, s = this, u = s.constructor, c = +(e = new u(e));
  if (!s.d || !e.d || !s.d[0] || !e.d[0])
    return new u(tt(+s, c));
  if (s = new u(s), s.eq(1))
    return s;
  if (n = u.precision, a = u.rounding, e.eq(1))
    return ue(s, n, a);
  if (t = yt(e.e / ce), t >= e.d.length - 1 && (r = c < 0 ? -c : c) <= LJ)
    return i = gA(u, s, r, n), e.s < 0 ? new u(1).div(i) : ue(i, n, a);
  if (o = s.s, o < 0) {
    if (t < e.d.length - 1)
      return new u(NaN);
    if ((e.d[t] & 1) == 0 && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1)
      return s.s = o, s;
  }
  return r = tt(+s, c), t = r == 0 || !isFinite(r) ? yt(c * (Math.log("0." + ft(s.d)) / Math.LN10 + s.e + 1)) : new u(r + "").e, t > u.maxE + 1 || t < u.minE - 1 ? new u(t > 0 ? o / 0 : 0) : (ve = !1, u.rounding = s.s = 1, r = Math.min(12, (t + "").length), i = ed(e.times(Gr(s, n + r)), n), i.d && (i = ue(i, n + 5, 1), Ma(i.d, n, a) && (t = n + 10, i = ue(ed(e.times(Gr(s, t + r)), t), t + 5, 1), +ft(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = ue(i, n + 1, 0)))), i.s = o, ve = !0, u.rounding = a, ue(i, n, a));
};
z.toPrecision = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = gr(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (Mt(e, 1, fn), t === void 0 ? t = i.rounding : Mt(t, 0, 8), n = ue(new i(n), e, t), r = gr(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
};
z.toSignificantDigits = z.toSD = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Mt(e, 1, fn), t === void 0 ? t = n.rounding : Mt(t, 0, 8)), ue(new n(r), e, t);
};
z.toString = function() {
  var e = this, t = e.constructor, r = gr(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
z.truncated = z.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
z.valueOf = z.toJSON = function() {
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
function Mt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(nn + e);
}
function Ma(e, t, r, n) {
  var i, a, o, s;
  for (a = e[0]; a >= 10; a /= 10)
    --t;
  return --t < 0 ? (t += ce, i = 0) : (i = Math.ceil((t + 1) / ce), t %= ce), a = tt(10, ce - t), s = e[i] % a | 0, n == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = r < 4 && s == 99999 || r > 3 && s == 49999 || s == 5e4 || s == 0) : o = (r < 4 && s + 1 == a || r > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == tt(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (n || r < 4) && s == 9999 || !n && r > 3 && s == 4999) : o = ((n || r < 4) && s + 1 == a || !n && r > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == tt(10, t - 3) - 1, o;
}
function Qo(e, t, r) {
  for (var n, i = [0], a, o = 0, s = e.length; o < s; ) {
    for (a = i.length; a--; )
      i[a] *= t;
    for (i[0] += Zf.indexOf(e.charAt(o++)), n = 0; n < i.length; n++)
      i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
  }
  return i.reverse();
}
function DJ(e, t) {
  var r, n, i;
  if (t.isZero())
    return t;
  n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Ju(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = yi(e, 1, t.times(i), new e(1));
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
    var c, l, f, d, p, v, h, g, y, w, x, b, m, S, A, O, E, M, C, N, k = n.constructor, D = n.s == i.s ? 1 : -1, j = n.d, R = i.d;
    if (!j || !j[0] || !R || !R[0])
      return new k(
        !n.s || !i.s || (j ? R && j[0] == R[0] : !R) ? NaN : j && j[0] == 0 || !R ? D * 0 : D / 0
      );
    for (u ? (p = 1, l = n.e - i.e) : (u = rr, p = ce, l = yt(n.e / p) - yt(i.e / p)), C = R.length, E = j.length, y = new k(D), w = y.d = [], f = 0; R[f] == (j[f] || 0); f++)
      ;
    if (R[f] > (j[f] || 0) && l--, a == null ? (S = a = k.precision, o = k.rounding) : s ? S = a + (n.e - i.e) + 1 : S = a, S < 0)
      w.push(1), v = !0;
    else {
      if (S = S / p + 2 | 0, f = 0, C == 1) {
        for (d = 0, R = R[0], S++; (f < E || d) && S--; f++)
          A = d * u + (j[f] || 0), w[f] = A / R | 0, d = A % R | 0;
        v = d || f < E;
      } else {
        for (d = u / (R[0] + 1) | 0, d > 1 && (R = e(R, d, u), j = e(j, d, u), C = R.length, E = j.length), O = C, x = j.slice(0, C), b = x.length; b < C; )
          x[b++] = 0;
        N = R.slice(), N.unshift(0), M = R[0], R[1] >= u / 2 && ++M;
        do
          d = 0, c = t(R, x, C, b), c < 0 ? (m = x[0], C != b && (m = m * u + (x[1] || 0)), d = m / M | 0, d > 1 ? (d >= u && (d = u - 1), h = e(R, d, u), g = h.length, b = x.length, c = t(h, x, g, b), c == 1 && (d--, r(h, C < g ? N : R, g, u))) : (d == 0 && (c = d = 1), h = R.slice()), g = h.length, g < b && h.unshift(0), r(x, h, b, u), c == -1 && (b = x.length, c = t(R, x, C, b), c < 1 && (d++, r(x, C < b ? N : R, b, u))), b = x.length) : c === 0 && (d++, x = [0]), w[f++] = d, c && x[0] ? x[b++] = j[O] || 0 : (x = [j[O]], b = 1);
        while ((O++ < E || x[0] !== void 0) && S--);
        v = x[0] !== void 0;
      }
      w[0] || w.shift();
    }
    if (p == 1)
      y.e = l, lA = v;
    else {
      for (f = 1, d = w[0]; d >= 10; d /= 10)
        f++;
      y.e = f + l * p - 1, ue(y, s ? a + y.e + 1 : a, o, v);
    }
    return y;
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
    return yA(e);
  var n, i = e.e, a = ft(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + zr(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + zr(-i - 1) + a, r && (n = r - o) > 0 && (a += zr(n))) : i >= o ? (a += zr(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + zr(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += zr(n))), a;
}
function Zu(e, t) {
  var r = e[0];
  for (t *= ce; r >= 10; r /= 10)
    t++;
  return t;
}
function au(e, t, r) {
  if (t > jJ)
    throw ve = !0, r && (e.precision = r), Error(fA);
  return ue(new e(nu), t, 1, !0);
}
function er(e, t, r) {
  if (t > Qf)
    throw Error(fA);
  return ue(new e(iu), t, r, !0);
}
function vA(e) {
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
function gA(e, t, r, n) {
  var i, a = new e(1), o = Math.ceil(n / ce + 4);
  for (ve = !1; ; ) {
    if (r % 2 && (a = a.times(t), Yy(a.d, o) && (i = !0)), r = yt(r / 2), r === 0) {
      r = a.d.length - 1, i && a.d[r] === 0 && ++a.d[r];
      break;
    }
    t = t.times(t), Yy(t.d, o);
  }
  return ve = !0, a;
}
function qy(e) {
  return e.d[e.d.length - 1] & 1;
}
function mA(e, t, r) {
  for (var n, i = new e(t[0]), a = 0; ++a < t.length; )
    if (n = new e(t[a]), n.s)
      i[r](n) && (i = n);
    else {
      i = n;
      break;
    }
  return i;
}
function ed(e, t) {
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
        if (c < 3 && Ma(o.d, u - n, p, c))
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
  var r, n, i, a, o, s, u, c, l, f, d, p = 1, v = 10, h = e, g = h.d, y = h.constructor, w = y.rounding, x = y.precision;
  if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1)
    return new y(g && !g[0] ? -1 / 0 : h.s != 1 ? NaN : g ? 0 : h);
  if (t == null ? (ve = !1, l = x) : l = t, y.precision = l += v, r = ft(g), n = r.charAt(0), Math.abs(a = h.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = ft(h.d), n = r.charAt(0), p++;
    a = h.e, n > 1 ? (h = new y("0." + r), a++) : h = new y(n + "." + r.slice(1));
  } else
    return c = au(y, l + 2, x).times(a + ""), h = Gr(new y(n + "." + r.slice(1)), l - v).plus(c), y.precision = x, t == null ? ue(h, x, w, ve = !0) : h;
  for (f = h, u = o = h = De(h.minus(1), h.plus(1), l, 1), d = ue(h.times(h), l, 1), i = 3; ; ) {
    if (o = ue(o.times(d), l, 1), c = u.plus(De(o, new y(i), l, 1)), ft(c.d).slice(0, l) === ft(u.d).slice(0, l))
      if (u = u.times(2), a !== 0 && (u = u.plus(au(y, l + 2, x).times(a + ""))), u = De(u, new y(p), l, 1), t == null)
        if (Ma(u.d, l - v, w, s))
          y.precision = l += v, c = o = h = De(f.minus(1), f.plus(1), l, 1), d = ue(h.times(h), l, 1), i = s = 1;
        else
          return ue(u, y.precision = x, w, ve = !0);
      else
        return y.precision = x, u;
    u = c, i += 2;
  }
}
function yA(e) {
  return String(e.s * e.s / 0);
}
function td(e, t) {
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
function FJ(e, t) {
  var r, n, i, a, o, s, u, c, l;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), pA.test(t))
      return td(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (IJ.test(t))
    r = 16, t = t.toLowerCase();
  else if (RJ.test(t))
    r = 2;
  else if ($J.test(t))
    r = 8;
  else
    throw Error(nn + t);
  for (a = t.search(/p/i), a > 0 ? (u = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, n = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = gA(n, new n(r), a, a * 2)), c = Qo(t, r, rr), l = c.length - 1, a = l; c[a] === 0; --a)
    c.pop();
  return a < 0 ? new n(e.s * 0) : (e.e = Zu(c, l), e.d = c, ve = !1, o && (e = De(e, i, s * 4)), u && (e = e.times(Math.abs(u) < 54 ? tt(2, u) : bi.pow(2, u))), ve = !0, e);
}
function VJ(e, t) {
  var r, n = t.d.length;
  if (n < 3)
    return t.isZero() ? t : yi(e, 2, t, t);
  r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Ju(5, r)), t = yi(e, 2, t, t);
  for (var i, a = new e(5), o = new e(16), s = new e(20); r--; )
    i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
  return t;
}
function yi(e, t, r, n, i) {
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
function Ju(e, t) {
  for (var r = e; --t; )
    r *= e;
  return r;
}
function bA(e, t) {
  var r, n = t.s < 0, i = er(e, e.precision, 1), a = i.times(0.5);
  if (t = t.abs(), t.lte(a))
    return Or = n ? 4 : 1, t;
  if (r = t.divToInt(i), r.isZero())
    Or = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(i)), t.lte(a))
      return Or = qy(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    Or = qy(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function op(e, t, r, n) {
  var i, a, o, s, u, c, l, f, d, p = e.constructor, v = r !== void 0;
  if (v ? (Mt(r, 1, fn), n === void 0 ? n = p.rounding : Mt(n, 0, 8)) : (r = p.precision, n = p.rounding), !e.isFinite())
    l = yA(e);
  else {
    for (l = gr(e), o = l.indexOf("."), v ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, o >= 0 && (l = l.replace(".", ""), d = new p(1), d.e = l.length - o, d.d = Qo(gr(d), 10, i), d.e = d.d.length), f = Qo(l, 10, i), a = u = f.length; f[--u] == 0; )
      f.pop();
    if (!f[0])
      l = v ? "0p+0" : "0";
    else {
      if (o < 0 ? a-- : (e = new p(e), e.d = f, e.e = a, e = De(e, d, r, n, 0, i), f = e.d, a = e.e, c = lA), o = f[r], s = i / 2, c = c || f[r + 1] !== void 0, c = n < 4 ? (o !== void 0 || c) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : o > s || o === s && (n === 4 || c || n === 6 && f[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), f.length = r, c)
        for (; ++f[--r] > i - 1; )
          f[r] = 0, r || (++a, f.unshift(1));
      for (u = f.length; !f[u - 1]; --u)
        ;
      for (o = 0, l = ""; o < u; o++)
        l += Zf.charAt(f[o]);
      if (v) {
        if (u > 1)
          if (t == 16 || t == 8) {
            for (o = t == 16 ? 4 : 3, --u; u % o; u++)
              l += "0";
            for (f = Qo(l, i, t), u = f.length; !f[u - 1]; --u)
              ;
            for (o = 1, l = "1."; o < u; o++)
              l += Zf.charAt(f[o]);
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
function Yy(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function BJ(e) {
  return new this(e).abs();
}
function UJ(e) {
  return new this(e).acos();
}
function zJ(e) {
  return new this(e).acosh();
}
function WJ(e, t) {
  return new this(e).plus(t);
}
function HJ(e) {
  return new this(e).asin();
}
function qJ(e) {
  return new this(e).asinh();
}
function YJ(e) {
  return new this(e).atan();
}
function GJ(e) {
  return new this(e).atanh();
}
function KJ(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, i = this.rounding, a = n + 4;
  return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = er(this, a, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? er(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = er(this, a, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, r = this.atan(De(e, t, a, 1)), t = er(this, a, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(De(e, t, a, 1)), r;
}
function XJ(e) {
  return new this(e).cbrt();
}
function ZJ(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function JJ(e, t, r) {
  return new this(e).clamp(t, r);
}
function QJ(e) {
  if (!e || typeof e != "object")
    throw Error(Xu + "Object expected");
  var t, r, n, i = e.defaults === !0, a = [
    "precision",
    1,
    fn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Zn,
    0,
    "toExpPos",
    0,
    Zn,
    "maxE",
    0,
    Zn,
    "minE",
    -Zn,
    0,
    "modulo",
    0,
    9
  ];
  for (t = 0; t < a.length; t += 3)
    if (r = a[t], i && (this[r] = Jf[r]), (n = e[r]) !== void 0)
      if (yt(n) === n && n >= a[t + 1] && n <= a[t + 2])
        this[r] = n;
      else
        throw Error(nn + r + ": " + n);
  if (r = "crypto", i && (this[r] = Jf[r]), (n = e[r]) !== void 0)
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(dA);
      else
        this[r] = !1;
    else
      throw Error(nn + r + ": " + n);
  return this;
}
function eQ(e) {
  return new this(e).cos();
}
function tQ(e) {
  return new this(e).cosh();
}
function xA(e) {
  var t, r, n;
  function i(a) {
    var o, s, u, c = this;
    if (!(c instanceof i))
      return new i(a);
    if (c.constructor = i, Gy(a)) {
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
      return td(c, a.toString());
    } else if (u !== "string")
      throw Error(nn + a);
    return (s = a.charCodeAt(0)) === 45 ? (a = a.slice(1), c.s = -1) : (s === 43 && (a = a.slice(1)), c.s = 1), pA.test(a) ? td(c, a) : FJ(c, a);
  }
  if (i.prototype = z, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = QJ, i.clone = xA, i.isDecimal = Gy, i.abs = BJ, i.acos = UJ, i.acosh = zJ, i.add = WJ, i.asin = HJ, i.asinh = qJ, i.atan = YJ, i.atanh = GJ, i.atan2 = KJ, i.cbrt = XJ, i.ceil = ZJ, i.clamp = JJ, i.cos = eQ, i.cosh = tQ, i.div = rQ, i.exp = nQ, i.floor = iQ, i.hypot = aQ, i.ln = oQ, i.log = sQ, i.log10 = cQ, i.log2 = uQ, i.max = lQ, i.min = fQ, i.mod = dQ, i.mul = hQ, i.pow = pQ, i.random = vQ, i.round = gQ, i.sign = mQ, i.sin = yQ, i.sinh = bQ, i.sqrt = xQ, i.sub = wQ, i.sum = SQ, i.tan = AQ, i.tanh = _Q, i.trunc = OQ, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function rQ(e, t) {
  return new this(e).div(t);
}
function nQ(e) {
  return new this(e).exp();
}
function iQ(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function aQ() {
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
function Gy(e) {
  return e instanceof bi || e && e.toStringTag === hA || !1;
}
function oQ(e) {
  return new this(e).ln();
}
function sQ(e, t) {
  return new this(e).log(t);
}
function uQ(e) {
  return new this(e).log(2);
}
function cQ(e) {
  return new this(e).log(10);
}
function lQ() {
  return mA(this, arguments, "lt");
}
function fQ() {
  return mA(this, arguments, "gt");
}
function dQ(e, t) {
  return new this(e).mod(t);
}
function hQ(e, t) {
  return new this(e).mul(t);
}
function pQ(e, t) {
  return new this(e).pow(t);
}
function vQ(e) {
  var t, r, n, i, a = 0, o = new this(1), s = [];
  if (e === void 0 ? e = this.precision : Mt(e, 1, fn), n = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); a < n; )
        i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); a < n; )
        i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
      a = n / 4;
    } else
      throw Error(dA);
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
function gQ(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function mQ(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function yQ(e) {
  return new this(e).sin();
}
function bQ(e) {
  return new this(e).sinh();
}
function xQ(e) {
  return new this(e).sqrt();
}
function wQ(e, t) {
  return new this(e).sub(t);
}
function SQ() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (ve = !1; r.s && ++e < t.length; )
    r = r.plus(t[e]);
  return ve = !0, ue(r, this.precision, this.rounding);
}
function AQ(e) {
  return new this(e).tan();
}
function _Q(e) {
  return new this(e).tanh();
}
function OQ(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
z[Symbol.for("nodejs.util.inspect.custom")] = z.toString;
z[Symbol.toStringTag] = "Decimal";
var bi = z.constructor = xA(Jf);
nu = new bi(nu);
iu = new bi(iu);
const EQ = ["grid"], TQ = {
  justifyContent: "center",
  justifyItems: "center"
}, Ky = Math.PI / 180, So = 11.5, PQ = (e) => {
  const t = e.homeTeam || Ai;
  e.homeTeam;
  const r = e.awayTeam || Sx;
  e.awayTeam;
  const n = e.gameProjection || II, i = new bi(n.home_team_score), a = new bi(n.away_team_score), o = i.pow(So).plus(a.pow(So)), s = i.pow(So).dividedBy(o), u = a.pow(So).dividedBy(o), c = s.toNumber(), l = u.toNumber(), f = [{
    name: t.Name,
    value: c
  }, {
    name: r.Name,
    value: l
  }], d = ["#00C192", "#0086E6"];
  return /* @__PURE__ */ _(dt, {
    viusage: "backdrop",
    classNames: ["rounded-lg", "p-4", "text-xs"],
    children: /* @__PURE__ */ V("div", {
      className: [...e.overrideClasses ? [] : EQ, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : TQ,
        ...e.style
      },
      children: [/* @__PURE__ */ _("h2", {
        className: "text-lg",
        children: "Win Projection"
      }), /* @__PURE__ */ _(kJ, {
        height: 125,
        width: 125,
        children: /* @__PURE__ */ _(Qt, {
          labelLine: !1,
          label: ({
            cx: p,
            cy: v,
            midAngle: h,
            innerRadius: g,
            outerRadius: y,
            percent: w,
            index: x
          }) => {
            const b = y * 1.2, m = p + b * Math.cos(-h * Ky), S = v + b * Math.sin(-h * Ky);
            return /* @__PURE__ */ _("text", {
              x: m,
              y: S,
              fill: "white",
              textAnchor: m > p ? "start" : "end",
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
          children: f.map((p, v) => /* @__PURE__ */ _(Rh, {
            fill: d[v % d.length]
          }, p.name))
        })
      }), /* @__PURE__ */ V("div", {
        className: "gap-2",
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignContent: "center",
          justifyContent: "center"
        },
        children: [/* @__PURE__ */ V("div", {
          style: {
            display: "flex",
            fontSize: "8px",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ _("div", {
            style: {
              background: d[0],
              height: "10px",
              width: "10px"
            }
          }), "\u2003", /* @__PURE__ */ _("div", {
            children: t.Name
          })]
        }), /* @__PURE__ */ V("div", {
          style: {
            display: "flex",
            fontSize: "8px",
            alignContent: "center",
            alignItems: "center"
          },
          children: [/* @__PURE__ */ _("div", {
            style: {
              background: d[1],
              height: "10px",
              width: "10px"
            }
          }), "\u2003", /* @__PURE__ */ _("div", {
            children: r.Name
          })]
        })]
      })]
    })
  });
}, CQ = [], MQ = {}, NQ = ["grid", "gap-4"], kQ = {
  gridTemplateColumns: "1fr 2fr",
  justifyContent: "center",
  justifyItems: "center",
  alignContent: "center",
  alignItems: "center"
}, RQ = (e) => /* @__PURE__ */ V(dt, {
  viusage: "wrap",
  classNames: [...e.overrideClasses ? [] : CQ, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : MQ,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    style: {
      display: "grid",
      justifyContent: "center",
      justifyItems: "center"
    },
    children: /* @__PURE__ */ _(fh, {})
  }), /* @__PURE__ */ _("br", {}), /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : NQ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : kQ,
      ...e.style
    },
    children: [/* @__PURE__ */ _("div", {
      className: "text-sm",
      children: /* @__PURE__ */ _(T5, {})
    }), /* @__PURE__ */ V("div", {
      className: "gap-2",
      style: {
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "1fr 1fr"
      },
      children: [/* @__PURE__ */ _(M5, {}), /* @__PURE__ */ _(PQ, {})]
    })]
  })]
}), IQ = ["grid", "p-4"], $Q = {
  justifyContent: "center",
  justifyItems: "center"
}, LQ = [], jQ = {}, DQ = (e) => /* @__PURE__ */ _(dt, {
  viusage: e.viusage || "wrap",
  classNames: [...e.overrideClasses ? [] : IQ, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : $Q,
    ...e.style
  },
  children: /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : LQ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : jQ,
      ...e.style
    },
    children: [/* @__PURE__ */ _("h2", {
      className: "text-lg",
      children: "Game of the Day"
    }), /* @__PURE__ */ _(RQ, {})]
  })
}), FQ = ["grid", "gap-2", "rounded-lg", "p-2"], VQ = {
  gridTemplateRows: "1fr 1fr",
  border: "1px solid #33A9FE",
  alignContent: "center",
  alignItems: "center"
}, BQ = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : FQ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : VQ,
    ...e.style
  },
  children: [/* @__PURE__ */ V("div", {
    className: "rounded-lg",
    style: {
      display: "grid",
      height: "100%",
      background: "#33A9FE44",
      textAlign: "center",
      alignContent: "center"
    },
    children: [/* @__PURE__ */ _("h2", {
      style: {
        color: "#ffffff44"
      },
      children: "Projected Total"
    }), "130"]
  }), /* @__PURE__ */ V("div", {
    className: "rounded-lg",
    style: {
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "#33A9FE44",
      alignContent: "center"
    },
    children: [/* @__PURE__ */ V("div", {
      style: {
        textAlign: "center"
      },
      children: [/* @__PURE__ */ _("h2", {
        style: {
          color: "#ffffff44"
        },
        children: "Total"
      }), "O/U 130"]
    }), /* @__PURE__ */ V("div", {
      style: {
        textAlign: "center"
      },
      children: [/* @__PURE__ */ _("h2", {
        style: {
          color: "#ffffff44"
        },
        children: "Odds"
      }), "-110"]
    })]
  })]
}), UQ = ["grid", "text-sm", "gap-2"], zQ = {
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr 1fr",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
}, nl = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : UQ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : zQ,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    style: {
      display: "grid",
      color: "#ffffff",
      opacity: 0.7,
      height: "100%",
      width: "100%",
      alignContent: "center"
    },
    children: e.Label
  }), /* @__PURE__ */ _("div", {
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
}), WQ = ["grid", "gap-2"], HQ = {
  gridTemplateRows: "1fr",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignContent: "center",
  alignItems: "center"
}, qQ = (e) => {
  const t = e.line || 8, r = e.odds || -110, n = e.projectedScore || 70;
  return /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : WQ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : HQ,
      ...e.style
    },
    children: [/* @__PURE__ */ _(nl, {
      style: {
        height: "100%"
      },
      Label: "Line",
      Value: t > 0 ? `+${t}` : t
    }), /* @__PURE__ */ _(nl, {
      style: {
        height: "100%"
      },
      Label: "Odds",
      Value: r
    }), /* @__PURE__ */ _(nl, {
      style: {
        height: "100%"
      },
      Label: "Projected Score",
      Value: n
    })]
  });
}, YQ = ["grid", "gap-2"], GQ = {
  gridTemplateColumns: "1fr 3fr"
}, KQ = (e) => {
  const t = e.team || Ai;
  return /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : YQ, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : GQ,
      ...e.style
    },
    children: [/* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _("img", {
        width: 60,
        src: t.TeamLogoUrl
      })
    }), /* @__PURE__ */ V("div", {
      children: [/* @__PURE__ */ _("h2", {
        className: "text",
        children: t.Name
      }), /* @__PURE__ */ _("h2", {
        className: "text-sm",
        children: e.away ? "Away" : "Home"
      })]
    })]
  });
}, XQ = ["grid", "rounded-lg", "border", "border-2", "border-gdg-500", "p-4"], ZQ = {
  gridTemplateColumns: "3fr 1fr 3fr",
  alignContent: "center",
  alignItems: "center"
}, Xy = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : XQ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : ZQ,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(KQ, {})
  }), /* @__PURE__ */ _("div", {}), /* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(qQ, {})
  })]
}), JQ = ["grid", "gap-2"], QQ = {
  gridTemplateRows: "10fr 1fr 10fr",
  justifyItems: "center",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center"
}, eee = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : JQ, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : QQ,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(Xy, {})
  }), /* @__PURE__ */ V("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr auto 2fr",
      alignContent: "center",
      alignItems: "center",
      width: "100%",
      height: 1,
      overflow: "visible"
    },
    children: [/* @__PURE__ */ _("div", {}), /* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(lh, {
        classNames: ["p-4", "bg-gdg-500", "rounded-full", "text-black-500", "grid", "justify-center", "content-center"]
      })
    }), /* @__PURE__ */ _("div", {})]
  }), /* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(Xy, {})
  })]
}), tee = ["p-4", "rounded-lg"], ree = {}, nee = ["grid", "gap-2"], iee = {
  gridTemplateColumns: "3fr 1fr"
}, aee = (e) => /* @__PURE__ */ V(dt, {
  viusage: "backdrop",
  classNames: [...e.overrideClasses ? [] : tee, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : ree,
    ...e.style
  },
  children: [/* @__PURE__ */ V("div", {
    children: [/* @__PURE__ */ _(fh, {}), /* @__PURE__ */ _("br", {})]
  }), /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : nee, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : iee,
      ...e.style
    },
    children: [/* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(eee, {})
    }), /* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(BQ, {
        style: {
          height: "100%"
        }
      })
    })]
  })]
}), oee = ["p-4"], see = {}, uee = [], cee = {
  textAlign: "left"
}, lee = (e) => {
  const r = ["This Week", "Big 12", "ACC", "PAC 12", "On the Bubble"].map((n, i) => /* @__PURE__ */ _(Ud, {
    emphasis: e.which === n ? 500 : 300,
    viusage: e.which === n || !e.which && i === 0 ? "navigate" : "wrap",
    children: n
  }, n));
  return /* @__PURE__ */ _(dt, {
    viusage: e.viusage || "wrap",
    classNames: [...e.overrideClasses ? [] : oee, ...e.classNames || []],
    style: {
      ...e.overrideStyle ? {} : see,
      ...e.style
    },
    children: /* @__PURE__ */ V("div", {
      className: [...e.overrideClasses ? [] : uee, ...e.classNames || []].join(" "),
      style: {
        ...e.overrideStyle ? {} : cee,
        ...e.style
      },
      children: [/* @__PURE__ */ _("h2", {
        className: "text-xl",
        children: "Upcoming Games for Top 25"
      }), /* @__PURE__ */ _("br", {}), /* @__PURE__ */ _("hr", {}), /* @__PURE__ */ _("br", {}), /* @__PURE__ */ _("div", {
        style: {
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"
        },
        className: "grid gap-2 text-sm",
        children: r
      }), /* @__PURE__ */ _("br", {}), /* @__PURE__ */ _(aee, {})]
    })
  });
}, fee = ["grid", "gap-4"], dee = {}, hee = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : fee, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : dee,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(_5, {
      classNames: ["rounded-lg"]
    })
  }), /* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(DQ, {
      classNames: ["rounded-lg"]
    })
  }), /* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(lee, {
      classNames: ["rounded-lg"]
    })
  })]
}), pee = ["grid", "gap-4", "p-4"], vee = {
  gridTemplateColumns: "2fr 1fr"
}, gee = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : pee, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : vee,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(hee, {})
  }), /* @__PURE__ */ _("div", {
    children: /* @__PURE__ */ _(g5, {
      classNames: ["rounded-lg"]
    })
  })]
}), mee = [], yee = {}, bee = [], xee = {}, wee = (e) => /* @__PURE__ */ _(dt, {
  viusage: e.viusage || "backdrop",
  classNames: [...e.overrideClasses ? [] : mee, ...e.classNames || []],
  style: {
    ...e.overrideStyle ? {} : yee,
    ...e.style
  },
  children: /* @__PURE__ */ V("div", {
    className: [...e.overrideClasses ? [] : bee, ...e.classNames || []].join(" "),
    style: {
      ...e.overrideStyle ? {} : xee,
      ...e.style
    },
    children: [/* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(yx, {})
    }), /* @__PURE__ */ _("div", {
      children: /* @__PURE__ */ _(gee, {})
    })]
  })
}), See = ["h-screen", "w-screen", "grid", "justify-items-center", "items-center", "text-drk-gray-900"], Aee = {
  gridTemplateColumns: "1fr 6fr"
}, Iee = (e) => /* @__PURE__ */ V("div", {
  className: [...e.overrideClasses ? [] : See, ...e.classNames || []].join(" "),
  style: {
    ...e.overrideStyle ? {} : Aee,
    ...e.style
  },
  children: [/* @__PURE__ */ _("div", {
    style: {
      height: "100%",
      width: "100%"
    },
    children: /* @__PURE__ */ _($b, {
      style: {
        height: "100%"
      }
    })
  }), /* @__PURE__ */ _("div", {
    style: {
      height: "100%",
      width: "100%"
    },
    children: /* @__PURE__ */ _(wee, {
      style: {
        width: "100%",
        height: "100%"
      }
    })
  })]
});
export {
  FP as BUTTON_CLASSNAMES,
  VP as BUTTON_STYLE,
  BP as Button,
  Ib as CheckContext,
  Cee as CheckProvider,
  qP as CheckReducer,
  See as HOME_CLASSNAMES,
  Aee as HOME_STYLE,
  Iee as Home,
  n5 as MENS_NCAAB_COMPETITION_CLASSNAMES,
  i5 as MENS_NCAAB_COMPETITION_STYLE,
  t5 as MENS_NCAAB_TEAM_CLASSNAMES,
  r5 as MENS_NCAAB_TEAM_STYLE,
  Ree as MensNcaabCompetition,
  kee as MensNcaabTeam,
  WP as PEG_CHILD_CONTAINER_CLASSNAMES,
  HP as PEG_CHILD_CONTAINER_STYLE,
  zP as PEG_CONTAINER_CLASSNAMES,
  Eee as PEG_PILL_CLASSNAMES,
  Tee as PEG_PILL_STYLE,
  UP as PILL_CLASSNAMES,
  Oee as PILL_STYLE,
  Pee as PegPill,
  Ud as Pill,
  YP as SIDE_FEED_CLASSNAMES,
  KP as SIDE_FEED_INNER_CLASSNAMES,
  XP as SIDE_FEED_INNER_STYLE,
  GP as SIDE_FEED_STYLE,
  Nee as SideFeed,
  ZP as WRAPPER_CLASSNAMES,
  JP as WRAPPER_STYLE,
  dt as Wrapper,
  Mee as useCheckStore
};
