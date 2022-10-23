import Gt, { createContext as ze, useContext as ce, useLayoutEffect as ns, useEffect as ge, useState as ea, useRef as et, useCallback as is, useMemo as Wr, forwardRef as zr, createElement as as, useReducer as os } from "react";
const ss = (e) => (e + 300) % 900, us = {
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
  "link-900": ["light-gray", 500]
}, ls = (e) => us[`${e[0]}-${e[1]}`], Mn = {
  do: "bright-blue",
  get: "ocean-blue",
  info: "info",
  getUserInfo: "clay",
  navigate: "success",
  find: "gold",
  sort: "drk-gray",
  install: "bright-blue",
  getHelp: "warning",
  comment: "success"
}, cs = (e = "do") => Mn[e] || Mn.do;
var fs = {
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
function ta(e) {
  if (typeof e == "number")
    return {
      value: e,
      unit: "px"
    };
  var t, r = (e.match(/^[0-9.]*/) || "").toString();
  r.includes(".") ? t = parseFloat(r) : t = parseInt(r, 10);
  var n = (e.match(/[^0-9]*$/) || "").toString();
  return fs[n] ? {
    value: t,
    unit: n
  } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")), {
    value: t,
    unit: "px"
  });
}
function Ln(e) {
  var t = ta(e);
  return "".concat(t.value).concat(t.unit);
}
var ds = function(e, t, r) {
  var n = "react-spinners-".concat(e, "-").concat(r);
  if (typeof window > "u" || !window.document)
    return n;
  var i = document.createElement("style");
  document.head.appendChild(i);
  var s = i.sheet, a = `
    @keyframes `.concat(n, ` {
      `).concat(t, `
    }
  `);
  return s && s.insertRule(a, 0), n;
}, Hr = { exports: {} }, at = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function vs() {
  if (kn)
    return at;
  kn = 1;
  var e = Gt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(o, u, l) {
    var c, f = {}, d = null, p = null;
    l !== void 0 && (d = "" + l), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (p = u.ref);
    for (c in u)
      n.call(u, c) && !s.hasOwnProperty(c) && (f[c] = u[c]);
    if (o && o.defaultProps)
      for (c in u = o.defaultProps, u)
        f[c] === void 0 && (f[c] = u[c]);
    return { $$typeof: t, type: o, key: d, ref: p, props: f, _owner: i.current };
  }
  return at.Fragment = r, at.jsx = a, at.jsxs = a, at;
}
var ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function ps() {
  return Dn || (Dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Gt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), h = Symbol.iterator, m = "@@iterator";
    function y(v) {
      if (v === null || typeof v != "object")
        return null;
      var P = h && v[h] || v[m];
      return typeof P == "function" ? P : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(v) {
      {
        for (var P = arguments.length, A = new Array(P > 1 ? P - 1 : 0), j = 1; j < P; j++)
          A[j - 1] = arguments[j];
        S("error", v, A);
      }
    }
    function S(v, P, A) {
      {
        var j = T.ReactDebugCurrentFrame, H = j.getStackAddendum();
        H !== "" && (P += "%s", A = A.concat([H]));
        var J = A.map(function(W) {
          return String(W);
        });
        J.unshift("Warning: " + P), Function.prototype.apply.call(console[v], console, J);
      }
    }
    var x = !1, g = !1, I = !1, B = !1, z = !1, F;
    F = Symbol.for("react.module.reference");
    function q(v) {
      return !!(typeof v == "string" || typeof v == "function" || v === n || v === s || z || v === i || v === l || v === c || B || v === p || x || g || I || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === f || v.$$typeof === a || v.$$typeof === o || v.$$typeof === u || v.$$typeof === F || v.getModuleId !== void 0));
    }
    function ue(v, P, A) {
      var j = v.displayName;
      if (j)
        return j;
      var H = P.displayName || P.name || "";
      return H !== "" ? A + "(" + H + ")" : A;
    }
    function re(v) {
      return v.displayName || "Context";
    }
    function X(v) {
      if (v == null)
        return null;
      if (typeof v.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof v == "function")
        return v.displayName || v.name || null;
      if (typeof v == "string")
        return v;
      switch (v) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case o:
            var P = v;
            return re(P) + ".Consumer";
          case a:
            var A = v;
            return re(A._context) + ".Provider";
          case u:
            return ue(v, v.render, "ForwardRef");
          case f:
            var j = v.displayName || null;
            return j !== null ? j : X(v.type) || "Memo";
          case d: {
            var H = v, J = H._payload, W = H._init;
            try {
              return X(W(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ae = 0, ne, te, he, me, w, O, L;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function b() {
      {
        if (ae === 0) {
          ne = console.log, te = console.info, he = console.warn, me = console.error, w = console.group, O = console.groupCollapsed, L = console.groupEnd;
          var v = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: v,
            log: v,
            warn: v,
            error: v,
            group: v,
            groupCollapsed: v,
            groupEnd: v
          });
        }
        ae++;
      }
    }
    function R() {
      {
        if (ae--, ae === 0) {
          var v = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, v, {
              value: ne
            }),
            info: Z({}, v, {
              value: te
            }),
            warn: Z({}, v, {
              value: he
            }),
            error: Z({}, v, {
              value: me
            }),
            group: Z({}, v, {
              value: w
            }),
            groupCollapsed: Z({}, v, {
              value: O
            }),
            groupEnd: Z({}, v, {
              value: L
            })
          });
        }
        ae < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = T.ReactCurrentDispatcher, D;
    function N(v, P, A) {
      {
        if (D === void 0)
          try {
            throw Error();
          } catch (H) {
            var j = H.stack.trim().match(/\n( *(at )?)/);
            D = j && j[1] || "";
          }
        return `
` + D + v;
      }
    }
    var U = !1, $;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new fe();
    }
    function _(v, P) {
      if (!v || U)
        return "";
      {
        var A = $.get(v);
        if (A !== void 0)
          return A;
      }
      var j;
      U = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = M.current, M.current = null, b();
      try {
        if (P) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (Oe) {
              j = Oe;
            }
            Reflect.construct(v, [], W);
          } else {
            try {
              W.call();
            } catch (Oe) {
              j = Oe;
            }
            v.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            j = Oe;
          }
          v();
        }
      } catch (Oe) {
        if (Oe && j && typeof Oe.stack == "string") {
          for (var Y = Oe.stack.split(`
`), ve = j.stack.split(`
`), oe = Y.length - 1, se = ve.length - 1; oe >= 1 && se >= 0 && Y[oe] !== ve[se]; )
            se--;
          for (; oe >= 1 && se >= 0; oe--, se--)
            if (Y[oe] !== ve[se]) {
              if (oe !== 1 || se !== 1)
                do
                  if (oe--, se--, se < 0 || Y[oe] !== ve[se]) {
                    var be = `
` + Y[oe].replace(" at new ", " at ");
                    return v.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", v.displayName)), typeof v == "function" && $.set(v, be), be;
                  }
                while (oe >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        U = !1, M.current = J, R(), Error.prepareStackTrace = H;
      }
      var Ke = v ? v.displayName || v.name : "", Vn = Ke ? N(Ke) : "";
      return typeof v == "function" && $.set(v, Vn), Vn;
    }
    function ye(v, P, A) {
      return _(v, !1);
    }
    function qe(v) {
      var P = v.prototype;
      return !!(P && P.isReactComponent);
    }
    function Be(v, P, A) {
      if (v == null)
        return "";
      if (typeof v == "function")
        return _(v, qe(v));
      if (typeof v == "string")
        return N(v);
      switch (v) {
        case l:
          return N("Suspense");
        case c:
          return N("SuspenseList");
      }
      if (typeof v == "object")
        switch (v.$$typeof) {
          case u:
            return ye(v.render);
          case f:
            return Be(v.type, P, A);
          case d: {
            var j = v, H = j._payload, J = j._init;
            try {
              return Be(J(H), P, A);
            } catch {
            }
          }
        }
      return "";
    }
    var Rt = Object.prototype.hasOwnProperty, bn = {}, Tn = T.ReactDebugCurrentFrame;
    function At(v) {
      if (v) {
        var P = v._owner, A = Be(v.type, v._source, P ? P.type : null);
        Tn.setExtraStackFrame(A);
      } else
        Tn.setExtraStackFrame(null);
    }
    function Io(v, P, A, j, H) {
      {
        var J = Function.call.bind(Rt);
        for (var W in v)
          if (J(v, W)) {
            var Y = void 0;
            try {
              if (typeof v[W] != "function") {
                var ve = Error((j || "React class") + ": " + A + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ve.name = "Invariant Violation", ve;
              }
              Y = v[W](P, W, j, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              Y = oe;
            }
            Y && !(Y instanceof Error) && (At(H), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", A, W, typeof Y), At(null)), Y instanceof Error && !(Y.message in bn) && (bn[Y.message] = !0, At(H), E("Failed %s type: %s", A, Y.message), At(null));
          }
      }
    }
    var Fo = Array.isArray;
    function ir(v) {
      return Fo(v);
    }
    function No(v) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, A = P && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return A;
      }
    }
    function Bo(v) {
      try {
        return Sn(v), !1;
      } catch {
        return !0;
      }
    }
    function Sn(v) {
      return "" + v;
    }
    function En(v) {
      if (Bo(v))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", No(v)), Sn(v);
    }
    var it = T.ReactCurrentOwner, Uo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pn, wn, ar;
    ar = {};
    function $o(v) {
      if (Rt.call(v, "ref")) {
        var P = Object.getOwnPropertyDescriptor(v, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return v.ref !== void 0;
    }
    function Yo(v) {
      if (Rt.call(v, "key")) {
        var P = Object.getOwnPropertyDescriptor(v, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return v.key !== void 0;
    }
    function Wo(v, P) {
      if (typeof v.ref == "string" && it.current && P && it.current.stateNode !== P) {
        var A = X(it.current.type);
        ar[A] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(it.current.type), v.ref), ar[A] = !0);
      }
    }
    function zo(v, P) {
      {
        var A = function() {
          Pn || (Pn = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        A.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function Ho(v, P) {
      {
        var A = function() {
          wn || (wn = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        A.isReactWarning = !0, Object.defineProperty(v, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var qo = function(v, P, A, j, H, J, W) {
      var Y = {
        $$typeof: t,
        type: v,
        key: P,
        ref: A,
        props: W,
        _owner: J
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Go(v, P, A, j, H) {
      {
        var J, W = {}, Y = null, ve = null;
        A !== void 0 && (En(A), Y = "" + A), Yo(P) && (En(P.key), Y = "" + P.key), $o(P) && (ve = P.ref, Wo(P, H));
        for (J in P)
          Rt.call(P, J) && !Uo.hasOwnProperty(J) && (W[J] = P[J]);
        if (v && v.defaultProps) {
          var oe = v.defaultProps;
          for (J in oe)
            W[J] === void 0 && (W[J] = oe[J]);
        }
        if (Y || ve) {
          var se = typeof v == "function" ? v.displayName || v.name || "Unknown" : v;
          Y && zo(W, se), ve && Ho(W, se);
        }
        return qo(v, Y, ve, H, j, it.current, W);
      }
    }
    var or = T.ReactCurrentOwner, xn = T.ReactDebugCurrentFrame;
    function Ge(v) {
      if (v) {
        var P = v._owner, A = Be(v.type, v._source, P ? P.type : null);
        xn.setExtraStackFrame(A);
      } else
        xn.setExtraStackFrame(null);
    }
    var sr;
    sr = !1;
    function ur(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function Cn() {
      {
        if (or.current) {
          var v = X(or.current.type);
          if (v)
            return `

Check the render method of \`` + v + "`.";
        }
        return "";
      }
    }
    function Ko(v) {
      {
        if (v !== void 0) {
          var P = v.fileName.replace(/^.*[\\\/]/, ""), A = v.lineNumber;
          return `

Check your code at ` + P + ":" + A + ".";
        }
        return "";
      }
    }
    var Rn = {};
    function Xo(v) {
      {
        var P = Cn();
        if (!P) {
          var A = typeof v == "string" ? v : v.displayName || v.name;
          A && (P = `

Check the top-level render call using <` + A + ">.");
        }
        return P;
      }
    }
    function An(v, P) {
      {
        if (!v._store || v._store.validated || v.key != null)
          return;
        v._store.validated = !0;
        var A = Xo(P);
        if (Rn[A])
          return;
        Rn[A] = !0;
        var j = "";
        v && v._owner && v._owner !== or.current && (j = " It was passed a child from " + X(v._owner.type) + "."), Ge(v), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, j), Ge(null);
      }
    }
    function On(v, P) {
      {
        if (typeof v != "object")
          return;
        if (ir(v))
          for (var A = 0; A < v.length; A++) {
            var j = v[A];
            ur(j) && An(j, P);
          }
        else if (ur(v))
          v._store && (v._store.validated = !0);
        else if (v) {
          var H = y(v);
          if (typeof H == "function" && H !== v.entries)
            for (var J = H.call(v), W; !(W = J.next()).done; )
              ur(W.value) && An(W.value, P);
        }
      }
    }
    function Zo(v) {
      {
        var P = v.type;
        if (P == null || typeof P == "string")
          return;
        var A;
        if (typeof P == "function")
          A = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === u || P.$$typeof === f))
          A = P.propTypes;
        else
          return;
        if (A) {
          var j = X(P);
          Io(A, v.props, "prop", j, v);
        } else if (P.PropTypes !== void 0 && !sr) {
          sr = !0;
          var H = X(P);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jo(v) {
      {
        for (var P = Object.keys(v.props), A = 0; A < P.length; A++) {
          var j = P[A];
          if (j !== "children" && j !== "key") {
            Ge(v), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), Ge(null);
            break;
          }
        }
        v.ref !== null && (Ge(v), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
      }
    }
    function _n(v, P, A, j, H, J) {
      {
        var W = q(v);
        if (!W) {
          var Y = "";
          (v === void 0 || typeof v == "object" && v !== null && Object.keys(v).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ve = Ko(H);
          ve ? Y += ve : Y += Cn();
          var oe;
          v === null ? oe = "null" : ir(v) ? oe = "array" : v !== void 0 && v.$$typeof === t ? (oe = "<" + (X(v.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof v, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, Y);
        }
        var se = Go(v, P, A, H, J);
        if (se == null)
          return se;
        if (W) {
          var be = P.children;
          if (be !== void 0)
            if (j)
              if (ir(be)) {
                for (var Ke = 0; Ke < be.length; Ke++)
                  On(be[Ke], v);
                Object.freeze && Object.freeze(be);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              On(be, v);
        }
        return v === n ? Jo(se) : Zo(se), se;
      }
    }
    function Qo(v, P, A) {
      return _n(v, P, A, !0);
    }
    function es(v, P, A) {
      return _n(v, P, A, !1);
    }
    var ts = es, rs = Qo;
    ot.Fragment = n, ot.jsx = ts, ot.jsxs = rs;
  }()), ot;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = vs() : e.exports = ps();
})(Hr);
const ee = Hr.exports.jsx, We = Hr.exports.jsxs;
var je = globalThis && globalThis.__assign || function() {
  return je = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, je.apply(this, arguments);
}, hs = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, jn = ds("MoonLoader", "100% {transform: rotate(360deg)}", "moon");
function ms(e) {
  var t = e.loading, r = t === void 0 ? !0 : t, n = e.color, i = n === void 0 ? "#000000" : n, s = e.speedMultiplier, a = s === void 0 ? 1 : s, o = e.cssOverride, u = o === void 0 ? {} : o, l = e.size, c = l === void 0 ? 60 : l, f = hs(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"]), d = ta(c), p = d.value, h = d.unit, m = p / 7, y = je({
    display: "inherit",
    position: "relative",
    width: "".concat("".concat(p + m * 2).concat(h)),
    height: "".concat("".concat(p + m * 2).concat(h)),
    animation: "".concat(jn, " ").concat(0.6 / a, "s 0s infinite linear"),
    animationFillMode: "forwards"
  }, u), T = function(x) {
    return {
      width: Ln(x),
      height: Ln(x),
      borderRadius: "100%"
    };
  }, E = je(je({}, T(m)), {
    backgroundColor: "".concat(i),
    opacity: "0.8",
    position: "absolute",
    top: "".concat("".concat(p / 2 - m / 2).concat(h)),
    animation: "".concat(jn, " ").concat(0.6 / a, "s 0s infinite linear"),
    animationFillMode: "forwards"
  }), S = je(je({}, T(p)), {
    border: "".concat(m, "px solid ").concat(i),
    opacity: "0.1",
    boxSizing: "content-box",
    position: "absolute"
  });
  return r ? /* @__PURE__ */ We("span", {
    ...je({
      style: y
    }, f),
    children: [/* @__PURE__ */ ee("span", {
      style: E
    }), /* @__PURE__ */ ee("span", {
      style: S
    })]
  }) : null;
}
var Cr = function(e, t) {
  return Cr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Cr(e, t);
};
function ra(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Cr(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var C = function() {
  return C = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, C.apply(this, arguments);
};
function Ee(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function le(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), i, s = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function Ce(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, s; n < i; n++)
      (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var In = "production", na = typeof process > "u" || process.env === void 0 ? In : process.env.NODE_ENV || In, _e = function(e) {
  return {
    isEnabled: function(t) {
      return e.some(function(r) {
        return !!t[r];
      });
    }
  };
}, mt = {
  measureLayout: _e(["layout", "layoutId", "drag"]),
  animation: _e([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: _e(["exit"]),
  drag: _e(["drag", "dragControls"]),
  focus: _e(["whileFocus"]),
  hover: _e(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: _e(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: _e([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: _e([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function gs(e) {
  for (var t in e)
    e[t] !== null && (t === "projectionNodeConstructor" ? mt.projectionNodeConstructor = e[t] : mt[t].Component = e[t]);
}
var Et = function() {
}, Se = function() {
};
process.env.NODE_ENV !== "production" && (Et = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, Se = function(e, t) {
  if (!e)
    throw new Error(t);
});
var ia = ze({ strict: !1 }), aa = Object.keys(mt), ys = aa.length;
function bs(e, t, r) {
  var n = [], i = ce(ia);
  if (!t)
    return null;
  na !== "production" && r && i.strict && Se(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var s = 0; s < ys; s++) {
    var a = aa[s], o = mt[a], u = o.isEnabled, l = o.Component;
    u(e) && l && n.push(/* @__PURE__ */ ee(l, {
      ...C({
        key: a
      }, e, {
        visualElement: t
      })
    }));
  }
  return n;
}
var qr = ze({
  transformPagePoint: function(e) {
    return e;
  },
  isStatic: !1,
  reducedMotion: "never"
}), Kt = ze({});
function Ts() {
  return ce(Kt).visualElement;
}
var Xt = ze(null), nt = typeof document < "u", Fn = nt ? ns : ge, Rr = { current: null }, oa = !1;
function Ss() {
  if (oa = !0, !!nt)
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return Rr.current = e.matches;
      };
      e.addListener(t), t();
    } else
      Rr.current = !1;
}
function Es() {
  !oa && Ss();
  var e = le(ea(Rr.current), 1), t = e[0];
  return t;
}
function Ps() {
  var e = Es(), t = ce(qr).reducedMotion;
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function ws(e, t, r, n) {
  var i = ce(ia), s = Ts(), a = ce(Xt), o = Ps(), u = et(void 0);
  n || (n = i.renderer), !u.current && n && (u.current = n(e, {
    visualState: t,
    parent: s,
    props: r,
    presenceId: a == null ? void 0 : a.id,
    blockInitialAnimation: (a == null ? void 0 : a.initial) === !1,
    shouldReduceMotion: o
  }));
  var l = u.current;
  return Fn(function() {
    l == null || l.syncRender();
  }), ge(function() {
    var c;
    (c = l == null ? void 0 : l.animationState) === null || c === void 0 || c.animateChanges();
  }), Fn(function() {
    return function() {
      return l == null ? void 0 : l.notifyUnmount();
    };
  }, []), l;
}
function Xe(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function xs(e, t, r) {
  return is(
    function(n) {
      var i;
      n && ((i = e.mount) === null || i === void 0 || i.call(e, n)), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : Xe(r) && (r.current = n));
    },
    [t]
  );
}
function sa(e) {
  return Array.isArray(e);
}
function we(e) {
  return typeof e == "string" || sa(e);
}
function Cs(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.get();
  }), t;
}
function Rs(e) {
  var t = {};
  return e.forEachValue(function(r, n) {
    return t[n] = r.getVelocity();
  }), t;
}
function ua(e, t, r, n, i) {
  var s;
  return n === void 0 && (n = {}), i === void 0 && (i = {}), typeof t == "function" && (t = t(r != null ? r : e.custom, n, i)), typeof t == "string" && (t = (s = e.variants) === null || s === void 0 ? void 0 : s[t]), typeof t == "function" && (t = t(r != null ? r : e.custom, n, i)), t;
}
function Zt(e, t, r) {
  var n = e.getProps();
  return ua(n, t, r != null ? r : n.custom, Cs(e), Rs(e));
}
function Jt(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || we(e.initial) || we(e.animate) || we(e.whileHover) || we(e.whileDrag) || we(e.whileTap) || we(e.whileFocus) || we(e.exit);
}
function la(e) {
  return Boolean(Jt(e) || e.variants);
}
function As(e, t) {
  if (Jt(e)) {
    var r = e.initial, n = e.animate;
    return {
      initial: r === !1 || we(r) ? r : void 0,
      animate: we(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Os(e) {
  var t = As(e, ce(Kt)), r = t.initial, n = t.animate;
  return Wr(function() {
    return { initial: r, animate: n };
  }, [Nn(r), Nn(n)]);
}
function Nn(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function Qt(e) {
  var t = et(null);
  return t.current === null && (t.current = e()), t.current;
}
var lt = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
}, _s = 1;
function Vs() {
  return Qt(function() {
    if (lt.hasEverUpdated)
      return _s++;
  });
}
var ca = ze({}), fa = ze({});
function Ms(e, t, r, n) {
  var i, s = t.layoutId, a = t.layout, o = t.drag, u = t.dragConstraints, l = t.layoutScroll, c = ce(fa);
  !n || !r || (r == null ? void 0 : r.projection) || (r.projection = new n(e, r.getLatestValues(), (i = r.parent) === null || i === void 0 ? void 0 : i.projection), r.projection.setOptions({
    layoutId: s,
    layout: a,
    alwaysMeasureLayout: Boolean(o) || u && Xe(u),
    visualElement: r,
    scheduleRender: function() {
      return r.scheduleRender();
    },
    animationType: typeof a == "string" ? a : "both",
    initialPromotionConfig: c,
    layoutScroll: l
  }));
}
var Ls = function(e) {
  ra(t, e);
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
}(Gt.Component);
function ks(e) {
  var t = e.preloadedFeatures, r = e.createVisualElement, n = e.projectionNodeConstructor, i = e.useRender, s = e.useVisualState, a = e.Component;
  t && gs(t);
  function o(u, l) {
    var c = Ds(u);
    u = C(C({}, u), {
      layoutId: c
    });
    var f = ce(qr), d = null, p = Os(u), h = f.isStatic ? void 0 : Vs(), m = s(u, f.isStatic);
    return !f.isStatic && nt && (p.visualElement = ws(a, m, C(C({}, f), u), r), Ms(h, u, p.visualElement, n || mt.projectionNodeConstructor), d = bs(u, p.visualElement, t)), /* @__PURE__ */ We(Ls, {
      visualElement: p.visualElement,
      props: C(C({}, f), u),
      children: [d, /* @__PURE__ */ ee(Kt.Provider, {
        value: p,
        children: i(a, u, h, xs(m, p.visualElement, l), m, f.isStatic, p.visualElement)
      })]
    });
  }
  return zr(o);
}
function Ds(e) {
  var t, r = e.layoutId, n = (t = ce(ca)) === null || t === void 0 ? void 0 : t.id;
  return n && r !== void 0 ? n + "-" + r : r;
}
function js(e) {
  function t(n, i) {
    return i === void 0 && (i = {}), ks(e(n, i));
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
var Is = [
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
function Gr(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(Is.indexOf(e) > -1 || /[A-Z]/.test(e));
}
var Nt = {};
function Fs(e) {
  Object.assign(Nt, e);
}
var Ar = ["", "X", "Y", "Z"], Ns = ["translate", "scale", "rotate", "skew"], gt = ["transformPerspective", "x", "y", "z"];
Ns.forEach(function(e) {
  return Ar.forEach(function(t) {
    return gt.push(e + t);
  });
});
function Bs(e, t) {
  return gt.indexOf(e) - gt.indexOf(t);
}
var Us = new Set(gt);
function Pt(e) {
  return Us.has(e);
}
var $s = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function da(e) {
  return $s.has(e);
}
function va(e, t) {
  var r = t.layout, n = t.layoutId;
  return Pt(e) || da(e) || (r || n !== void 0) && (!!Nt[e] || e === "opacity");
}
var Ve = function(e) {
  return Boolean(e !== null && typeof e == "object" && e.getVelocity);
}, Ys = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function Ws(e, t, r, n) {
  var i = e.transform, s = e.transformKeys, a = t.enableHardwareAcceleration, o = a === void 0 ? !0 : a, u = t.allowTransformNone, l = u === void 0 ? !0 : u, c = "";
  s.sort(Bs);
  for (var f = !1, d = s.length, p = 0; p < d; p++) {
    var h = s[p];
    c += "".concat(Ys[h] || h, "(").concat(i[h], ") "), h === "z" && (f = !0);
  }
  return !f && o ? c += "translateZ(0)" : c = c.trim(), n ? c = n(i, r ? "" : c) : l && r && (c = "none"), c;
}
function zs(e) {
  var t = e.originX, r = t === void 0 ? "50%" : t, n = e.originY, i = n === void 0 ? "50%" : n, s = e.originZ, a = s === void 0 ? 0 : s;
  return "".concat(r, " ").concat(i, " ").concat(a);
}
function pa(e) {
  return e.startsWith("--");
}
var Hs = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
const ha = (e, t) => (r) => Math.max(Math.min(r, t), e), ct = (e) => e % 1 ? Number(e.toFixed(5)) : e, yt = /(-)?([\d]*\.?[\d])+/g, Or = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, qs = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function wt(e) {
  return typeof e == "string";
}
const He = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, ft = Object.assign(Object.assign({}, He), { transform: ha(0, 1) }), Ot = Object.assign(Object.assign({}, He), { default: 1 }), xt = (e) => ({
  test: (t) => wt(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ke = xt("deg"), Re = xt("%"), k = xt("px"), Gs = xt("vh"), Ks = xt("vw"), Bn = Object.assign(Object.assign({}, Re), { parse: (e) => Re.parse(e) / 100, transform: (e) => Re.transform(e * 100) }), Kr = (e, t) => (r) => Boolean(wt(r) && qs.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), ma = (e, t, r) => (n) => {
  if (!wt(n))
    return n;
  const [i, s, a, o] = n.match(yt);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [r]: parseFloat(a),
    alpha: o !== void 0 ? parseFloat(o) : 1
  };
}, Ye = {
  test: Kr("hsl", "hue"),
  parse: ma("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Re.transform(ct(t)) + ", " + Re.transform(ct(r)) + ", " + ct(ft.transform(n)) + ")"
}, Xs = ha(0, 255), lr = Object.assign(Object.assign({}, He), { transform: (e) => Math.round(Xs(e)) }), Fe = {
  test: Kr("rgb", "red"),
  parse: ma("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + lr.transform(e) + ", " + lr.transform(t) + ", " + lr.transform(r) + ", " + ct(ft.transform(n)) + ")"
};
function Zs(e) {
  let t = "", r = "", n = "", i = "";
  return e.length > 5 ? (t = e.substr(1, 2), r = e.substr(3, 2), n = e.substr(5, 2), i = e.substr(7, 2)) : (t = e.substr(1, 1), r = e.substr(2, 1), n = e.substr(3, 1), i = e.substr(4, 1), t += t, r += r, n += n, i += i), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const _r = {
  test: Kr("#"),
  parse: Zs,
  transform: Fe.transform
}, pe = {
  test: (e) => Fe.test(e) || _r.test(e) || Ye.test(e),
  parse: (e) => Fe.test(e) ? Fe.parse(e) : Ye.test(e) ? Ye.parse(e) : _r.parse(e),
  transform: (e) => wt(e) ? e : e.hasOwnProperty("red") ? Fe.transform(e) : Ye.transform(e)
}, ga = "${c}", ya = "${n}";
function Js(e) {
  var t, r, n, i;
  return isNaN(e) && wt(e) && ((r = (t = e.match(yt)) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0) + ((i = (n = e.match(Or)) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0) > 0;
}
function ba(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let r = 0;
  const n = e.match(Or);
  n && (r = n.length, e = e.replace(Or, ga), t.push(...n.map(pe.parse)));
  const i = e.match(yt);
  return i && (e = e.replace(yt, ya), t.push(...i.map(He.parse))), { values: t, numColors: r, tokenised: e };
}
function Ta(e) {
  return ba(e).values;
}
function Sa(e) {
  const { values: t, numColors: r, tokenised: n } = ba(e), i = t.length;
  return (s) => {
    let a = n;
    for (let o = 0; o < i; o++)
      a = a.replace(o < r ? ga : ya, o < r ? pe.transform(s[o]) : ct(s[o]));
    return a;
  };
}
const Qs = (e) => typeof e == "number" ? 0 : e;
function eu(e) {
  const t = Ta(e);
  return Sa(e)(t.map(Qs));
}
const Me = { test: Js, parse: Ta, createTransformer: Sa, getAnimatableNone: eu }, tu = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ru(e) {
  let [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(yt) || [];
  if (!n)
    return e;
  const i = r.replace(n, "");
  let s = tu.has(t) ? 1 : 0;
  return n !== r && (s *= 100), t + "(" + s + i + ")";
}
const nu = /([a-z-]*)\(.*?\)/g, Vr = Object.assign(Object.assign({}, Me), { getAnimatableNone: (e) => {
  const t = e.match(nu);
  return t ? t.map(ru).join(" ") : e;
} });
var Un = C(C({}, He), { transform: Math.round }), Ea = {
  borderWidth: k,
  borderTopWidth: k,
  borderRightWidth: k,
  borderBottomWidth: k,
  borderLeftWidth: k,
  borderRadius: k,
  radius: k,
  borderTopLeftRadius: k,
  borderTopRightRadius: k,
  borderBottomRightRadius: k,
  borderBottomLeftRadius: k,
  width: k,
  maxWidth: k,
  height: k,
  maxHeight: k,
  size: k,
  top: k,
  right: k,
  bottom: k,
  left: k,
  padding: k,
  paddingTop: k,
  paddingRight: k,
  paddingBottom: k,
  paddingLeft: k,
  margin: k,
  marginTop: k,
  marginRight: k,
  marginBottom: k,
  marginLeft: k,
  rotate: ke,
  rotateX: ke,
  rotateY: ke,
  rotateZ: ke,
  scale: Ot,
  scaleX: Ot,
  scaleY: Ot,
  scaleZ: Ot,
  skew: ke,
  skewX: ke,
  skewY: ke,
  distance: k,
  translateX: k,
  translateY: k,
  translateZ: k,
  x: k,
  y: k,
  z: k,
  perspective: k,
  transformPerspective: k,
  opacity: ft,
  originX: Bn,
  originY: Bn,
  originZ: k,
  zIndex: Un,
  fillOpacity: ft,
  strokeOpacity: ft,
  numOctaves: Un
};
function Xr(e, t, r, n) {
  var i, s = e.style, a = e.vars, o = e.transform, u = e.transformKeys, l = e.transformOrigin;
  u.length = 0;
  var c = !1, f = !1, d = !0;
  for (var p in t) {
    var h = t[p];
    if (pa(p)) {
      a[p] = h;
      continue;
    }
    var m = Ea[p], y = Hs(h, m);
    if (Pt(p)) {
      if (c = !0, o[p] = y, u.push(p), !d)
        continue;
      h !== ((i = m.default) !== null && i !== void 0 ? i : 0) && (d = !1);
    } else
      da(p) ? (l[p] = y, f = !0) : s[p] = y;
  }
  c ? s.transform = Ws(e, r, d, n) : n ? s.transform = n({}, "") : !t.transform && s.transform && (s.transform = "none"), f && (s.transformOrigin = zs(l));
}
var Zr = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function Pa(e, t, r) {
  for (var n in t)
    !Ve(t[n]) && !va(n, r) && (e[n] = t[n]);
}
function iu(e, t, r) {
  var n = e.transformTemplate;
  return Wr(function() {
    var i = Zr();
    Xr(i, t, { enableHardwareAcceleration: !r }, n);
    var s = i.vars, a = i.style;
    return C(C({}, s), a);
  }, [t]);
}
function au(e, t, r) {
  var n = e.style || {}, i = {};
  return Pa(i, n, e), Object.assign(i, iu(e, t, r)), e.transformValues && (i = e.transformValues(i)), i;
}
function ou(e, t, r) {
  var n = {}, i = au(e, t, r);
  return Boolean(e.drag) && e.dragListener !== !1 && (n.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x")), n.style = i, n;
}
var su = /* @__PURE__ */ new Set([
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
function Bt(e) {
  return su.has(e);
}
var wa = function(e) {
  return !Bt(e);
};
function uu(e) {
  !e || (wa = function(t) {
    return t.startsWith("on") ? !Bt(t) : e(t);
  });
}
try {
  uu(require("@emotion/is-prop-valid").default);
} catch {
}
function lu(e, t, r) {
  var n = {};
  for (var i in e)
    (wa(i) || r === !0 && Bt(i) || !t && !Bt(i) || e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function $n(e, t, r) {
  return typeof e == "string" ? e : k.transform(t + r * e);
}
function cu(e, t, r) {
  var n = $n(t, e.x, e.width), i = $n(r, e.y, e.height);
  return "".concat(n, " ").concat(i);
}
var fu = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, du = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function vu(e, t, r, n, i) {
  r === void 0 && (r = 1), n === void 0 && (n = 0), i === void 0 && (i = !0), e.pathLength = 1;
  var s = i ? fu : du;
  e[s.offset] = k.transform(-n);
  var a = k.transform(t), o = k.transform(r);
  e[s.array] = "".concat(a, " ").concat(o);
}
function Jr(e, t, r, n) {
  var i = t.attrX, s = t.attrY, a = t.originX, o = t.originY, u = t.pathLength, l = t.pathSpacing, c = l === void 0 ? 1 : l, f = t.pathOffset, d = f === void 0 ? 0 : f, p = Ee(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Xr(e, p, r, n), e.attrs = e.style, e.style = {};
  var h = e.attrs, m = e.style, y = e.dimensions;
  h.transform && (y && (m.transform = h.transform), delete h.transform), y && (a !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = cu(y, a !== void 0 ? a : 0.5, o !== void 0 ? o : 0.5)), i !== void 0 && (h.x = i), s !== void 0 && (h.y = s), u !== void 0 && vu(h, u, c, d, !1);
}
var xa = function() {
  return C(C({}, Zr()), { attrs: {} });
};
function pu(e, t) {
  var r = Wr(function() {
    var i = xa();
    return Jr(i, t, { enableHardwareAcceleration: !1 }, e.transformTemplate), C(C({}, i.attrs), { style: C({}, i.style) });
  }, [t]);
  if (e.style) {
    var n = {};
    Pa(n, e.style, e), r.style = C(C({}, n), r.style);
  }
  return r;
}
function hu(e) {
  e === void 0 && (e = !1);
  var t = function(r, n, i, s, a, o) {
    var u = a.latestValues, l = Gr(r) ? pu : ou, c = l(n, u, o), f = lu(n, typeof r == "string", e), d = C(C(C({}, f), c), { ref: s });
    return i && (d["data-projection-id"] = i), as(r, d);
  };
  return t;
}
var mu = /([a-z])([A-Z])/g, gu = "$1-$2", Ca = function(e) {
  return e.replace(mu, gu).toLowerCase();
};
function Ra(e, t, r, n) {
  var i = t.style, s = t.vars;
  Object.assign(e.style, i, n && n.getProjectionStyles(r));
  for (var a in s)
    e.style.setProperty(a, s[a]);
}
var Aa = /* @__PURE__ */ new Set([
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
function Oa(e, t, r, n) {
  Ra(e, t, void 0, n);
  for (var i in t.attrs)
    e.setAttribute(Aa.has(i) ? i : Ca(i), t.attrs[i]);
}
function Qr(e) {
  var t = e.style, r = {};
  for (var n in t)
    (Ve(t[n]) || va(n, e)) && (r[n] = t[n]);
  return r;
}
function _a(e) {
  var t = Qr(e);
  for (var r in e)
    if (Ve(e[r])) {
      var n = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      t[n] = e[r];
    }
  return t;
}
function en(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var bt = function(e) {
  return Array.isArray(e);
}, yu = function(e) {
  return Boolean(e && typeof e == "object" && e.mix && e.toValue);
}, Va = function(e) {
  return bt(e) ? e[e.length - 1] || 0 : e;
};
function jt(e) {
  var t = Ve(e) ? e.get() : e;
  return yu(t) ? t.toValue() : t;
}
function Yn(e, t, r, n) {
  var i = e.scrapeMotionValuesFromProps, s = e.createRenderState, a = e.onMount, o = {
    latestValues: bu(t, r, n, i),
    renderState: s()
  };
  return a && (o.mount = function(u) {
    return a(t, u, o);
  }), o;
}
var Ma = function(e) {
  return function(t, r) {
    var n = ce(Kt), i = ce(Xt);
    return r ? Yn(e, t, n, i) : Qt(function() {
      return Yn(e, t, n, i);
    });
  };
};
function bu(e, t, r, n) {
  var i = {}, s = (r == null ? void 0 : r.initial) === !1, a = n(e);
  for (var o in a)
    i[o] = jt(a[o]);
  var u = e.initial, l = e.animate, c = Jt(e), f = la(e);
  t && f && !c && e.inherit !== !1 && (u != null || (u = t.initial), l != null || (l = t.animate));
  var d = s || u === !1, p = d ? l : u;
  if (p && typeof p != "boolean" && !en(p)) {
    var h = Array.isArray(p) ? p : [p];
    h.forEach(function(m) {
      var y = ua(e, m);
      if (!!y) {
        var T = y.transitionEnd;
        y.transition;
        var E = Ee(y, ["transitionEnd", "transition"]);
        for (var S in E) {
          var x = E[S];
          if (Array.isArray(x)) {
            var g = d ? x.length - 1 : 0;
            x = x[g];
          }
          x !== null && (i[S] = x);
        }
        for (var S in T)
          i[S] = T[S];
      }
    });
  }
  return i;
}
var Tu = {
  useVisualState: Ma({
    scrapeMotionValuesFromProps: _a,
    createRenderState: xa,
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
      Jr(n, i, { enableHardwareAcceleration: !1 }, e.transformTemplate), Oa(t, n);
    }
  })
}, Su = {
  useVisualState: Ma({
    scrapeMotionValuesFromProps: Qr,
    createRenderState: Zr
  })
};
function Eu(e, t, r, n, i) {
  var s = t.forwardMotionProps, a = s === void 0 ? !1 : s, o = Gr(e) ? Tu : Su;
  return C(C({}, o), { preloadedFeatures: r, useRender: hu(a), createVisualElement: n, projectionNodeConstructor: i, Component: e });
}
var Q;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(Q || (Q = {}));
function er(e, t, r, n) {
  return n === void 0 && (n = { passive: !0 }), e.addEventListener(t, r, n), function() {
    return e.removeEventListener(t, r);
  };
}
function Mr(e, t, r, n) {
  ge(function() {
    var i = e.current;
    if (r && i)
      return er(i, t, r, n);
  }, [e, t, r, n]);
}
function Pu(e) {
  var t = e.whileFocus, r = e.visualElement, n = function() {
    var s;
    (s = r.animationState) === null || s === void 0 || s.setActive(Q.Focus, !0);
  }, i = function() {
    var s;
    (s = r.animationState) === null || s === void 0 || s.setActive(Q.Focus, !1);
  };
  Mr(r, "focus", t ? n : void 0), Mr(r, "blur", t ? i : void 0);
}
function La(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function ka(e) {
  var t = !!e.touches;
  return t;
}
function wu(e) {
  return function(t) {
    var r = t instanceof MouseEvent, n = !r || r && t.button === 0;
    n && e(t);
  };
}
var xu = { pageX: 0, pageY: 0 };
function Cu(e, t) {
  t === void 0 && (t = "page");
  var r = e.touches[0] || e.changedTouches[0], n = r || xu;
  return {
    x: n[t + "X"],
    y: n[t + "Y"]
  };
}
function Ru(e, t) {
  return t === void 0 && (t = "page"), {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function tn(e, t) {
  return t === void 0 && (t = "page"), {
    point: ka(e) ? Cu(e, t) : Ru(e, t)
  };
}
var Da = function(e, t) {
  t === void 0 && (t = !1);
  var r = function(n) {
    return e(n, tn(n));
  };
  return t ? wu(r) : r;
}, Au = function() {
  return nt && window.onpointerdown === null;
}, Ou = function() {
  return nt && window.ontouchstart === null;
}, _u = function() {
  return nt && window.onmousedown === null;
}, Vu = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, Mu = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function ja(e) {
  return Au() ? e : Ou() ? Mu[e] : _u() ? Vu[e] : e;
}
function Je(e, t, r, n) {
  return er(e, ja(t), Da(r, t === "pointerdown"), n);
}
function Ut(e, t, r, n) {
  return Mr(e, ja(t), r && Da(r, t === "pointerdown"), n);
}
function Ia(e) {
  var t = null;
  return function() {
    var r = function() {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
var Wn = Ia("dragHorizontal"), zn = Ia("dragVertical");
function Fa(e) {
  var t = !1;
  if (e === "y")
    t = zn();
  else if (e === "x")
    t = Wn();
  else {
    var r = Wn(), n = zn();
    r && n ? t = function() {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Na() {
  var e = Fa(!0);
  return e ? (e(), !1) : !0;
}
function Hn(e, t, r) {
  return function(n, i) {
    var s;
    !La(n) || Na() || ((s = e.animationState) === null || s === void 0 || s.setActive(Q.Hover, t), r == null || r(n, i));
  };
}
function Lu(e) {
  var t = e.onHoverStart, r = e.onHoverEnd, n = e.whileHover, i = e.visualElement;
  Ut(i, "pointerenter", t || n ? Hn(i, !0, t) : void 0, { passive: !t }), Ut(i, "pointerleave", r || n ? Hn(i, !1, r) : void 0, { passive: !r });
}
var Ba = function(e, t) {
  return t ? e === t ? !0 : Ba(e, t.parentElement) : !1;
};
function Ua(e) {
  return ge(function() {
    return function() {
      return e();
    };
  }, []);
}
const $t = (e, t, r) => Math.min(Math.max(r, e), t), cr = 1e-3, ku = 0.01, qn = 10, Du = 0.05, ju = 1;
function Iu({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let i, s;
  Et(e <= qn * 1e3, "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = $t(Du, ju, a), e = $t(ku, qn, e / 1e3), a < 1 ? (i = (l) => {
    const c = l * a, f = c * e, d = c - r, p = Lr(l, a), h = Math.exp(-f);
    return cr - d / p * h;
  }, s = (l) => {
    const f = l * a * e, d = f * r + r, p = Math.pow(a, 2) * Math.pow(l, 2) * e, h = Math.exp(-f), m = Lr(Math.pow(l, 2), a);
    return (-i(l) + cr > 0 ? -1 : 1) * ((d - p) * h) / m;
  }) : (i = (l) => {
    const c = Math.exp(-l * e), f = (l - r) * e + 1;
    return -cr + c * f;
  }, s = (l) => {
    const c = Math.exp(-l * e), f = (r - l) * (e * e);
    return c * f;
  });
  const o = 5 / e, u = Nu(i, s, o);
  if (e = e * 1e3, isNaN(u))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const l = Math.pow(u, 2) * n;
    return {
      stiffness: l,
      damping: a * 2 * Math.sqrt(n * l),
      duration: e
    };
  }
}
const Fu = 12;
function Nu(e, t, r) {
  let n = r;
  for (let i = 1; i < Fu; i++)
    n = n - e(n) / t(n);
  return n;
}
function Lr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Bu = ["duration", "bounce"], Uu = ["stiffness", "damping", "mass"];
function Gn(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function $u(e) {
  let t = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, e);
  if (!Gn(e, Uu) && Gn(e, Bu)) {
    const r = Iu(e);
    t = Object.assign(Object.assign(Object.assign({}, t), r), { velocity: 0, mass: 1 }), t.isResolvedFromDuration = !0;
  }
  return t;
}
function rn(e) {
  var { from: t = 0, to: r = 1, restSpeed: n = 2, restDelta: i } = e, s = Ee(e, ["from", "to", "restSpeed", "restDelta"]);
  const a = { done: !1, value: t };
  let { stiffness: o, damping: u, mass: l, velocity: c, duration: f, isResolvedFromDuration: d } = $u(s), p = Kn, h = Kn;
  function m() {
    const y = c ? -(c / 1e3) : 0, T = r - t, E = u / (2 * Math.sqrt(o * l)), S = Math.sqrt(o / l) / 1e3;
    if (i === void 0 && (i = Math.min(Math.abs(r - t) / 100, 0.4)), E < 1) {
      const x = Lr(S, E);
      p = (g) => {
        const I = Math.exp(-E * S * g);
        return r - I * ((y + E * S * T) / x * Math.sin(x * g) + T * Math.cos(x * g));
      }, h = (g) => {
        const I = Math.exp(-E * S * g);
        return E * S * I * (Math.sin(x * g) * (y + E * S * T) / x + T * Math.cos(x * g)) - I * (Math.cos(x * g) * (y + E * S * T) - x * T * Math.sin(x * g));
      };
    } else if (E === 1)
      p = (x) => r - Math.exp(-S * x) * (T + (y + S * T) * x);
    else {
      const x = S * Math.sqrt(E * E - 1);
      p = (g) => {
        const I = Math.exp(-E * S * g), B = Math.min(x * g, 300);
        return r - I * ((y + E * S * T) * Math.sinh(B) + x * T * Math.cosh(B)) / x;
      };
    }
  }
  return m(), {
    next: (y) => {
      const T = p(y);
      if (d)
        a.done = y >= f;
      else {
        const E = h(y) * 1e3, S = Math.abs(E) <= n, x = Math.abs(r - T) <= i;
        a.done = S && x;
      }
      return a.value = a.done ? r : T, a;
    },
    flipTarget: () => {
      c = -c, [t, r] = [r, t], m();
    }
  };
}
rn.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const Kn = (e) => 0, Tt = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, ie = (e, t, r) => -r * e + r * t + e;
function fr(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function Xn({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let i = 0, s = 0, a = 0;
  if (!t)
    i = s = a = r;
  else {
    const o = r < 0.5 ? r * (1 + t) : r + t - r * t, u = 2 * r - o;
    i = fr(u, o, e + 1 / 3), s = fr(u, o, e), a = fr(u, o, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const Yu = (e, t, r) => {
  const n = e * e, i = t * t;
  return Math.sqrt(Math.max(0, r * (i - n) + n));
}, Wu = [_r, Fe, Ye], Zn = (e) => Wu.find((t) => t.test(e)), Jn = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, $a = (e, t) => {
  let r = Zn(e), n = Zn(t);
  Se(!!r, Jn(e)), Se(!!n, Jn(t));
  let i = r.parse(e), s = n.parse(t);
  r === Ye && (i = Xn(i), r = Fe), n === Ye && (s = Xn(s), n = Fe);
  const a = Object.assign({}, i);
  return (o) => {
    for (const u in a)
      u !== "alpha" && (a[u] = Yu(i[u], s[u], o));
    return a.alpha = ie(i.alpha, s.alpha, o), r.transform(a);
  };
}, kr = (e) => typeof e == "number", zu = (e, t) => (r) => t(e(r)), tr = (...e) => e.reduce(zu);
function Ya(e, t) {
  return kr(e) ? (r) => ie(e, t, r) : pe.test(e) ? $a(e, t) : za(e, t);
}
const Wa = (e, t) => {
  const r = [...e], n = r.length, i = e.map((s, a) => Ya(s, t[a]));
  return (s) => {
    for (let a = 0; a < n; a++)
      r[a] = i[a](s);
    return r;
  };
}, Hu = (e, t) => {
  const r = Object.assign(Object.assign({}, e), t), n = {};
  for (const i in r)
    e[i] !== void 0 && t[i] !== void 0 && (n[i] = Ya(e[i], t[i]));
  return (i) => {
    for (const s in n)
      r[s] = n[s](i);
    return r;
  };
};
function Qn(e) {
  const t = Me.parse(e), r = t.length;
  let n = 0, i = 0, s = 0;
  for (let a = 0; a < r; a++)
    n || typeof t[a] == "number" ? n++ : t[a].hue !== void 0 ? s++ : i++;
  return { parsed: t, numNumbers: n, numRGB: i, numHSL: s };
}
const za = (e, t) => {
  const r = Me.createTransformer(t), n = Qn(e), i = Qn(t);
  return n.numHSL === i.numHSL && n.numRGB === i.numRGB && n.numNumbers >= i.numNumbers ? tr(Wa(n.parsed, i.parsed), r) : (Et(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (a) => `${a > 0 ? t : e}`);
}, qu = (e, t) => (r) => ie(e, t, r);
function Gu(e) {
  if (typeof e == "number")
    return qu;
  if (typeof e == "string")
    return pe.test(e) ? $a : za;
  if (Array.isArray(e))
    return Wa;
  if (typeof e == "object")
    return Hu;
}
function Ku(e, t, r) {
  const n = [], i = r || Gu(e[0]), s = e.length - 1;
  for (let a = 0; a < s; a++) {
    let o = i(e[a], e[a + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[a] : t;
      o = tr(u, o);
    }
    n.push(o);
  }
  return n;
}
function Xu([e, t], [r]) {
  return (n) => r(Tt(e, t, n));
}
function Zu(e, t) {
  const r = e.length, n = r - 1;
  return (i) => {
    let s = 0, a = !1;
    if (i <= e[0] ? a = !0 : i >= e[n] && (s = n - 1, a = !0), !a) {
      let u = 1;
      for (; u < r && !(e[u] > i || u === n); u++)
        ;
      s = u - 1;
    }
    const o = Tt(e[s], e[s + 1], i);
    return t[s](o);
  };
}
function Ha(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
  const s = e.length;
  Se(s === t.length, "Both input and output ranges must be the same length"), Se(!n || !Array.isArray(n) || n.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  const a = Ku(t, n, i), o = s === 2 ? Xu(e, a) : Zu(e, a);
  return r ? (u) => o($t(e[0], e[s - 1], u)) : o;
}
const rr = (e) => (t) => 1 - e(1 - t), nn = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ju = (e) => (t) => Math.pow(t, e), qa = (e) => (t) => t * t * ((e + 1) * t - e), Qu = (e) => {
  const t = qa(e);
  return (r) => (r *= 2) < 1 ? 0.5 * t(r) : 0.5 * (2 - Math.pow(2, -10 * (r - 1)));
}, Ga = 1.525, el = 4 / 11, tl = 8 / 11, rl = 9 / 10, an = (e) => e, on = Ju(2), nl = rr(on), Ka = nn(on), Xa = (e) => 1 - Math.sin(Math.acos(e)), sn = rr(Xa), il = nn(sn), un = qa(Ga), al = rr(un), ol = nn(un), sl = Qu(Ga), ul = 4356 / 361, ll = 35442 / 1805, cl = 16061 / 1805, Yt = (e) => {
  if (e === 1 || e === 0)
    return e;
  const t = e * e;
  return e < el ? 7.5625 * t : e < tl ? 9.075 * t - 9.9 * e + 3.4 : e < rl ? ul * t - ll * e + cl : 10.8 * e * e - 20.52 * e + 10.72;
}, fl = rr(Yt), dl = (e) => e < 0.5 ? 0.5 * (1 - Yt(1 - e * 2)) : 0.5 * Yt(e * 2 - 1) + 0.5;
function vl(e, t) {
  return e.map(() => t || Ka).splice(0, e.length - 1);
}
function pl(e) {
  const t = e.length;
  return e.map((r, n) => n !== 0 ? n / (t - 1) : 0);
}
function hl(e, t) {
  return e.map((r) => r * t);
}
function It({ from: e = 0, to: t = 1, ease: r, offset: n, duration: i = 300 }) {
  const s = { done: !1, value: e }, a = Array.isArray(t) ? t : [e, t], o = hl(n && n.length === a.length ? n : pl(a), i);
  function u() {
    return Ha(o, a, {
      ease: Array.isArray(r) ? r : vl(a, r)
    });
  }
  let l = u();
  return {
    next: (c) => (s.value = l(c), s.done = c >= i, s),
    flipTarget: () => {
      a.reverse(), l = u();
    }
  };
}
function ml({ velocity: e = 0, from: t = 0, power: r = 0.8, timeConstant: n = 350, restDelta: i = 0.5, modifyTarget: s }) {
  const a = { done: !1, value: t };
  let o = r * e;
  const u = t + o, l = s === void 0 ? u : s(u);
  return l !== u && (o = l - t), {
    next: (c) => {
      const f = -o * Math.exp(-c / n);
      return a.done = !(f > i || f < -i), a.value = a.done ? l : l + f, a;
    },
    flipTarget: () => {
    }
  };
}
const ei = { keyframes: It, spring: rn, decay: ml };
function gl(e) {
  if (Array.isArray(e.to))
    return It;
  if (ei[e.type])
    return ei[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? It : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? rn : It;
}
const Za = 1 / 60 * 1e3, yl = typeof performance < "u" ? () => performance.now() : () => Date.now(), Ja = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(yl()), Za);
function bl(e) {
  let t = [], r = [], n = 0, i = !1, s = !1;
  const a = /* @__PURE__ */ new WeakSet(), o = {
    schedule: (u, l = !1, c = !1) => {
      const f = c && i, d = f ? t : r;
      return l && a.add(u), d.indexOf(u) === -1 && (d.push(u), f && i && (n = t.length)), u;
    },
    cancel: (u) => {
      const l = r.indexOf(u);
      l !== -1 && r.splice(l, 1), a.delete(u);
    },
    process: (u) => {
      if (i) {
        s = !0;
        return;
      }
      if (i = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let l = 0; l < n; l++) {
          const c = t[l];
          c(u), a.has(c) && (o.schedule(c), e());
        }
      i = !1, s && (s = !1, o.process(u));
    }
  };
  return o;
}
const Tl = 40;
let Dr = !0, St = !1, jr = !1;
const Qe = {
  delta: 0,
  timestamp: 0
}, Ct = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], nr = Ct.reduce((e, t) => (e[t] = bl(() => St = !0), e), {}), Ae = Ct.reduce((e, t) => {
  const r = nr[t];
  return e[t] = (n, i = !1, s = !1) => (St || El(), r.schedule(n, i, s)), e;
}, {}), tt = Ct.reduce((e, t) => (e[t] = nr[t].cancel, e), {}), dr = Ct.reduce((e, t) => (e[t] = () => nr[t].process(Qe), e), {}), Sl = (e) => nr[e].process(Qe), Qa = (e) => {
  St = !1, Qe.delta = Dr ? Za : Math.max(Math.min(e - Qe.timestamp, Tl), 1), Qe.timestamp = e, jr = !0, Ct.forEach(Sl), jr = !1, St && (Dr = !1, Ja(Qa));
}, El = () => {
  St = !0, Dr = !0, jr || Ja(Qa);
}, Wt = () => Qe;
function eo(e, t, r = 0) {
  return e - t - r;
}
function Pl(e, t, r = 0, n = !0) {
  return n ? eo(t + -e, t, r) : t - (e - t) + r;
}
function wl(e, t, r, n) {
  return n ? e >= t + r : e <= -r;
}
const xl = (e) => {
  const t = ({ delta: r }) => e(r);
  return {
    start: () => Ae.update(t, !0),
    stop: () => tt.update(t)
  };
};
function to(e) {
  var t, r, { from: n, autoplay: i = !0, driver: s = xl, elapsed: a = 0, repeat: o = 0, repeatType: u = "loop", repeatDelay: l = 0, onPlay: c, onStop: f, onComplete: d, onRepeat: p, onUpdate: h } = e, m = Ee(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: y } = m, T, E = 0, S = m.duration, x, g = !1, I = !0, B;
  const z = gl(m);
  !((r = (t = z).needsInterpolation) === null || r === void 0) && r.call(t, n, y) && (B = Ha([0, 100], [n, y], {
    clamp: !1
  }), n = 0, y = 100);
  const F = z(Object.assign(Object.assign({}, m), { from: n, to: y }));
  function q() {
    E++, u === "reverse" ? (I = E % 2 === 0, a = Pl(a, S, l, I)) : (a = eo(a, S, l), u === "mirror" && F.flipTarget()), g = !1, p && p();
  }
  function ue() {
    T.stop(), d && d();
  }
  function re(Z) {
    if (I || (Z = -Z), a += Z, !g) {
      const ae = F.next(Math.max(0, a));
      x = ae.value, B && (x = B(x)), g = I ? ae.done : a <= 0;
    }
    h == null || h(x), g && (E === 0 && (S != null || (S = a)), E < o ? wl(a, S, l, I) && q() : ue());
  }
  function X() {
    c == null || c(), T = s(re), T.start();
  }
  return i && X(), {
    stop: () => {
      f == null || f(), T.stop();
    }
  };
}
function ro(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function Cl({ from: e = 0, velocity: t = 0, min: r, max: n, power: i = 0.8, timeConstant: s = 750, bounceStiffness: a = 500, bounceDamping: o = 10, restDelta: u = 1, modifyTarget: l, driver: c, onUpdate: f, onComplete: d, onStop: p }) {
  let h;
  function m(S) {
    return r !== void 0 && S < r || n !== void 0 && S > n;
  }
  function y(S) {
    return r === void 0 ? n : n === void 0 || Math.abs(r - S) < Math.abs(n - S) ? r : n;
  }
  function T(S) {
    h == null || h.stop(), h = to(Object.assign(Object.assign({}, S), {
      driver: c,
      onUpdate: (x) => {
        var g;
        f == null || f(x), (g = S.onUpdate) === null || g === void 0 || g.call(S, x);
      },
      onComplete: d,
      onStop: p
    }));
  }
  function E(S) {
    T(Object.assign({ type: "spring", stiffness: a, damping: o, restDelta: u }, S));
  }
  if (m(e))
    E({ from: e, velocity: t, to: y(e) });
  else {
    let S = i * t + e;
    typeof l < "u" && (S = l(S));
    const x = y(S), g = x === r ? -1 : 1;
    let I, B;
    const z = (F) => {
      I = B, B = F, t = ro(F - I, Wt().delta), (g === 1 && F > x || g === -1 && F < x) && E({ from: F, to: x, velocity: t });
    };
    T({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: s,
      power: i,
      restDelta: u,
      modifyTarget: l,
      onUpdate: m(S) ? z : void 0
    });
  }
  return {
    stop: () => h == null ? void 0 : h.stop()
  };
}
const Ir = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"), ti = (e) => Ir(e) && e.hasOwnProperty("z"), _t = (e, t) => Math.abs(e - t);
function no(e, t) {
  if (kr(e) && kr(t))
    return _t(e, t);
  if (Ir(e) && Ir(t)) {
    const r = _t(e.x, t.x), n = _t(e.y, t.y), i = ti(e) && ti(t) ? _t(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2) + Math.pow(i, 2));
  }
}
const io = (e, t) => 1 - 3 * t + 3 * e, ao = (e, t) => 3 * t - 6 * e, oo = (e) => 3 * e, zt = (e, t, r) => ((io(t, r) * e + ao(t, r)) * e + oo(t)) * e, so = (e, t, r) => 3 * io(t, r) * e * e + 2 * ao(t, r) * e + oo(t), Rl = 1e-7, Al = 10;
function Ol(e, t, r, n, i) {
  let s, a, o = 0;
  do
    a = t + (r - t) / 2, s = zt(a, n, i) - e, s > 0 ? r = a : t = a;
  while (Math.abs(s) > Rl && ++o < Al);
  return a;
}
const _l = 8, Vl = 1e-3;
function Ml(e, t, r, n) {
  for (let i = 0; i < _l; ++i) {
    const s = so(t, r, n);
    if (s === 0)
      return t;
    const a = zt(t, r, n) - e;
    t -= a / s;
  }
  return t;
}
const Ft = 11, Vt = 1 / (Ft - 1);
function Ll(e, t, r, n) {
  if (e === t && r === n)
    return an;
  const i = new Float32Array(Ft);
  for (let a = 0; a < Ft; ++a)
    i[a] = zt(a * Vt, e, r);
  function s(a) {
    let o = 0, u = 1;
    const l = Ft - 1;
    for (; u !== l && i[u] <= a; ++u)
      o += Vt;
    --u;
    const c = (a - i[u]) / (i[u + 1] - i[u]), f = o + c * Vt, d = so(f, e, r);
    return d >= Vl ? Ml(a, f, e, r) : d === 0 ? f : Ol(a, o, o + Vt, e, r);
  }
  return (a) => a === 0 || a === 1 ? a : zt(s(a), t, n);
}
function kl(e) {
  var t = e.onTap, r = e.onTapStart, n = e.onTapCancel, i = e.whileTap, s = e.visualElement, a = t || r || n || i, o = et(!1), u = et(null), l = {
    passive: !(r || t || n || h)
  };
  function c() {
    var m;
    (m = u.current) === null || m === void 0 || m.call(u), u.current = null;
  }
  function f() {
    var m;
    return c(), o.current = !1, (m = s.animationState) === null || m === void 0 || m.setActive(Q.Tap, !1), !Na();
  }
  function d(m, y) {
    !f() || (Ba(s.getInstance(), m.target) ? t == null || t(m, y) : n == null || n(m, y));
  }
  function p(m, y) {
    !f() || n == null || n(m, y);
  }
  function h(m, y) {
    var T;
    c(), !o.current && (o.current = !0, u.current = tr(Je(window, "pointerup", d, l), Je(window, "pointercancel", p, l)), (T = s.animationState) === null || T === void 0 || T.setActive(Q.Tap, !0), r == null || r(m, y));
  }
  Ut(s, "pointerdown", a ? h : void 0, l), Ua(c);
}
var ri = /* @__PURE__ */ new Set();
function uo(e, t, r) {
  e || ri.has(t) || (console.warn(t), r && console.warn(r), ri.add(t));
}
var Fr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Dl = function(e) {
  var t;
  (t = Fr.get(e.target)) === null || t === void 0 || t(e);
}, jl = function(e) {
  e.forEach(Dl);
};
function Il(e) {
  var t = e.root, r = Ee(e, ["root"]), n = t || document;
  vr.has(n) || vr.set(n, {});
  var i = vr.get(n), s = JSON.stringify(r);
  return i[s] || (i[s] = new IntersectionObserver(jl, C({ root: t }, r))), i[s];
}
function Fl(e, t, r) {
  var n = Il(t);
  return Fr.set(e, r), n.observe(e), function() {
    Fr.delete(e), n.unobserve(e);
  };
}
function Nl(e) {
  var t = e.visualElement, r = e.whileInView, n = e.onViewportEnter, i = e.onViewportLeave, s = e.viewport, a = s === void 0 ? {} : s, o = et({
    hasEnteredView: !1,
    isInView: !1
  }), u = Boolean(r || n || i);
  a.once && o.current.hasEnteredView && (u = !1);
  var l = typeof IntersectionObserver > "u" ? $l : Ul;
  l(u, o.current, t, a);
}
var Bl = {
  some: 0,
  all: 1
};
function Ul(e, t, r, n) {
  var i = n.root, s = n.margin, a = n.amount, o = a === void 0 ? "some" : a, u = n.once;
  ge(function() {
    if (!!e) {
      var l = {
        root: i == null ? void 0 : i.current,
        rootMargin: s,
        threshold: typeof o == "number" ? o : Bl[o]
      }, c = function(f) {
        var d, p = f.isIntersecting;
        if (t.isInView !== p && (t.isInView = p, !(u && !p && t.hasEnteredView))) {
          p && (t.hasEnteredView = !0), (d = r.animationState) === null || d === void 0 || d.setActive(Q.InView, p);
          var h = r.getProps(), m = p ? h.onViewportEnter : h.onViewportLeave;
          m == null || m(f);
        }
      };
      return Fl(r.getInstance(), l, c);
    }
  }, [e, i, s, o]);
}
function $l(e, t, r, n) {
  var i = n.fallback, s = i === void 0 ? !0 : i;
  ge(function() {
    !e || !s || (na !== "production" && uo(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
      var a;
      t.hasEnteredView = !0;
      var o = r.getProps().onViewportEnter;
      o == null || o(null), (a = r.animationState) === null || a === void 0 || a.setActive(Q.InView, !0);
    }));
  }, [e]);
}
var Ne = function(e) {
  return function(t) {
    return e(t), null;
  };
}, Yl = {
  inView: Ne(Nl),
  tap: Ne(kl),
  focus: Ne(Pu),
  hover: Ne(Lu)
}, Wl = 0, zl = function() {
  return Wl++;
}, Hl = function() {
  return Qt(zl);
};
function lo() {
  var e = ce(Xt);
  if (e === null)
    return [!0, null];
  var t = e.isPresent, r = e.onExitComplete, n = e.register, i = Hl();
  ge(function() {
    return n(i);
  }, []);
  var s = function() {
    return r == null ? void 0 : r(i);
  };
  return !t && r ? [!1, s] : [!0];
}
function co(e, t) {
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
var Ht = function(e) {
  return e * 1e3;
}, ni = {
  linear: an,
  easeIn: on,
  easeInOut: Ka,
  easeOut: nl,
  circIn: Xa,
  circInOut: il,
  circOut: sn,
  backIn: un,
  backInOut: ol,
  backOut: al,
  anticipate: sl,
  bounceIn: fl,
  bounceInOut: dl,
  bounceOut: Yt
}, ii = function(e) {
  if (Array.isArray(e)) {
    Se(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = le(e, 4), r = t[0], n = t[1], i = t[2], s = t[3];
    return Ll(r, n, i, s);
  } else if (typeof e == "string")
    return Se(ni[e] !== void 0, "Invalid easing type '".concat(e, "'")), ni[e];
  return e;
}, ql = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
}, ai = function(e, t) {
  return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Me.test(t) && !t.startsWith("url("));
}, Ue = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
}, Mt = function(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
}, pr = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
}, Gl = function(e) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: e
  };
}, oi = {
  x: Ue,
  y: Ue,
  z: Ue,
  rotate: Ue,
  rotateX: Ue,
  rotateY: Ue,
  rotateZ: Ue,
  scaleX: Mt,
  scaleY: Mt,
  scale: Mt,
  opacity: pr,
  backgroundColor: pr,
  color: pr,
  default: Mt
}, Kl = function(e, t) {
  var r;
  return bt(t) ? r = Gl : r = oi[e] || oi.default, C({ to: t }, r(t));
}, Xl = C(C({}, Ea), {
  color: pe,
  backgroundColor: pe,
  outlineColor: pe,
  fill: pe,
  stroke: pe,
  borderColor: pe,
  borderTopColor: pe,
  borderRightColor: pe,
  borderBottomColor: pe,
  borderLeftColor: pe,
  filter: Vr,
  WebkitFilter: Vr
}), ln = function(e) {
  return Xl[e];
};
function cn(e, t) {
  var r, n = ln(e);
  return n !== Vr && (n = Me), (r = n.getAnimatableNone) === null || r === void 0 ? void 0 : r.call(n, t);
}
var Zl = {
  current: !1
};
function Jl(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = Ee(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var si = !1;
function Ql(e) {
  var t = e.ease, r = e.times, n = e.yoyo, i = e.flip, s = e.loop, a = Ee(e, ["ease", "times", "yoyo", "flip", "loop"]), o = C({}, a);
  return r && (o.offset = r), a.duration && (o.duration = Ht(a.duration)), a.repeatDelay && (o.repeatDelay = Ht(a.repeatDelay)), t && (o.ease = ql(t) ? t.map(ii) : ii(t)), a.type === "tween" && (o.type = "keyframes"), (n || s || i) && (Et(!si, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), si = !0, n ? o.repeatType = "reverse" : s ? o.repeatType = "loop" : i && (o.repeatType = "mirror"), o.repeat = s || n || i || a.repeat), a.type !== "spring" && (o.type = "keyframes"), o;
}
function ec(e, t) {
  var r, n, i = fn(e, t) || {};
  return (n = (r = i.delay) !== null && r !== void 0 ? r : e.delay) !== null && n !== void 0 ? n : 0;
}
function tc(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = Ce([], le(e.to), !1), e.to[0] = e.from), e;
}
function rc(e, t, r) {
  var n;
  return Array.isArray(t.to) && ((n = e.duration) !== null && n !== void 0 || (e.duration = 0.8)), tc(t), Jl(e) || (e = C(C({}, e), Kl(r, t.to))), C(C({}, t), Ql(e));
}
function nc(e, t, r, n, i) {
  var s, a = fn(n, e), o = (s = a.from) !== null && s !== void 0 ? s : t.get(), u = ai(e, r);
  o === "none" && u && typeof r == "string" ? o = cn(e, r) : ui(o) && typeof r == "string" ? o = li(r) : !Array.isArray(r) && ui(r) && typeof o == "string" && (r = li(o));
  var l = ai(e, o);
  Et(l === u, "You are trying to animate ".concat(e, ' from "').concat(o, '" to "').concat(r, '". ').concat(o, " is not an animatable value - to enable this animation set ").concat(o, " to a value animatable to ").concat(r, " via the `style` property."));
  function c() {
    var d = {
      from: o,
      to: r,
      velocity: t.getVelocity(),
      onComplete: i,
      onUpdate: function(p) {
        return t.set(p);
      }
    };
    return a.type === "inertia" || a.type === "decay" ? Cl(C(C({}, d), a)) : to(C(C({}, rc(a, d, e)), { onUpdate: function(p) {
      var h;
      d.onUpdate(p), (h = a.onUpdate) === null || h === void 0 || h.call(a, p);
    }, onComplete: function() {
      var p;
      d.onComplete(), (p = a.onComplete) === null || p === void 0 || p.call(a);
    } }));
  }
  function f() {
    var d, p, h = Va(r);
    return t.set(h), i(), (d = a == null ? void 0 : a.onUpdate) === null || d === void 0 || d.call(a, h), (p = a == null ? void 0 : a.onComplete) === null || p === void 0 || p.call(a), { stop: function() {
    } };
  }
  return !l || !u || a.type === !1 ? f : c;
}
function ui(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function li(e) {
  return typeof e == "number" ? 0 : cn("", e);
}
function fn(e, t) {
  return e[t] || e.default || e;
}
function dn(e, t, r, n) {
  return n === void 0 && (n = {}), Zl.current && (n = { type: !1 }), t.start(function(i) {
    var s, a, o = nc(e, t, r, n, i), u = ec(n, e), l = function() {
      return a = o();
    };
    return u ? s = window.setTimeout(l, Ht(u)) : l(), function() {
      clearTimeout(s), a == null || a.stop();
    };
  });
}
var ic = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
}, ac = function(e) {
  return /^0[^.\s]+$/.test(e);
};
function vn(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pn(e, t) {
  var r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
var dt = function() {
  function e() {
    this.subscriptions = [];
  }
  return e.prototype.add = function(t) {
    var r = this;
    return vn(this.subscriptions, t), function() {
      return pn(r.subscriptions, t);
    };
  }, e.prototype.notify = function(t, r, n) {
    var i = this.subscriptions.length;
    if (!!i)
      if (i === 1)
        this.subscriptions[0](t, r, n);
      else
        for (var s = 0; s < i; s++) {
          var a = this.subscriptions[s];
          a && a(t, r, n);
        }
  }, e.prototype.getSize = function() {
    return this.subscriptions.length;
  }, e.prototype.clear = function() {
    this.subscriptions.length = 0;
  }, e;
}(), oc = function(e) {
  return !isNaN(parseFloat(e));
}, sc = function() {
  function e(t) {
    var r = this;
    this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new dt(), this.velocityUpdateSubscribers = new dt(), this.renderSubscribers = new dt(), this.canTrackVelocity = !1, this.updateAndNotify = function(n, i) {
      i === void 0 && (i = !0), r.prev = r.current, r.current = n;
      var s = Wt(), a = s.delta, o = s.timestamp;
      r.lastUpdated !== o && (r.timeDelta = a, r.lastUpdated = o, Ae.postRender(r.scheduleVelocityCheck)), r.prev !== r.current && r.updateSubscribers.notify(r.current), r.velocityUpdateSubscribers.getSize() && r.velocityUpdateSubscribers.notify(r.getVelocity()), i && r.renderSubscribers.notify(r.current);
    }, this.scheduleVelocityCheck = function() {
      return Ae.postRender(r.velocityCheck);
    }, this.velocityCheck = function(n) {
      var i = n.timestamp;
      i !== r.lastUpdated && (r.prev = r.current, r.velocityUpdateSubscribers.notify(r.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = oc(this.current);
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
    return this.canTrackVelocity ? ro(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
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
function rt(e) {
  return new sc(e);
}
var fo = function(e) {
  return function(t) {
    return t.test(e);
  };
}, uc = {
  test: function(e) {
    return e === "auto";
  },
  parse: function(e) {
    return e;
  }
}, vo = [He, k, Re, ke, Ks, Gs, uc], st = function(e) {
  return vo.find(fo(e));
}, lc = Ce(Ce([], le(vo), !1), [pe, Me], !1), cc = function(e) {
  return lc.find(fo(e));
};
function fc(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, rt(r));
}
function dc(e, t) {
  var r = Zt(e, t), n = r ? e.makeTargetAnimatable(r, !1) : {}, i = n.transitionEnd, s = i === void 0 ? {} : i;
  n.transition;
  var a = Ee(n, ["transitionEnd", "transition"]);
  a = C(C({}, a), s);
  for (var o in a) {
    var u = Va(a[o]);
    fc(e, o, u);
  }
}
function vc(e, t, r) {
  var n, i, s, a, o = Object.keys(t).filter(function(p) {
    return !e.hasValue(p);
  }), u = o.length;
  if (!!u)
    for (var l = 0; l < u; l++) {
      var c = o[l], f = t[c], d = null;
      Array.isArray(f) && (d = f[0]), d === null && (d = (i = (n = r[c]) !== null && n !== void 0 ? n : e.readValue(c)) !== null && i !== void 0 ? i : t[c]), d != null && (typeof d == "string" && (ic(d) || ac(d)) ? d = parseFloat(d) : !cc(d) && Me.test(f) && (d = cn(c, f)), e.addValue(c, rt(d)), (s = (a = r)[c]) !== null && s !== void 0 || (a[c] = d), e.setBaseTarget(c, d));
    }
}
function pc(e, t) {
  if (!!t) {
    var r = t[e] || t.default || t;
    return r.from;
  }
}
function hc(e, t, r) {
  var n, i, s = {};
  for (var a in e)
    s[a] = (n = pc(a, t)) !== null && n !== void 0 ? n : (i = r.getValue(a)) === null || i === void 0 ? void 0 : i.get();
  return s;
}
function mc(e, t, r) {
  r === void 0 && (r = {}), e.notifyAnimationStart(t);
  var n;
  if (Array.isArray(t)) {
    var i = t.map(function(a) {
      return Nr(e, a, r);
    });
    n = Promise.all(i);
  } else if (typeof t == "string")
    n = Nr(e, t, r);
  else {
    var s = typeof t == "function" ? Zt(e, t, r.custom) : t;
    n = po(e, s, r);
  }
  return n.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function Nr(e, t, r) {
  var n;
  r === void 0 && (r = {});
  var i = Zt(e, t, r.custom), s = (i || {}).transition, a = s === void 0 ? e.getDefaultTransition() || {} : s;
  r.transitionOverride && (a = r.transitionOverride);
  var o = i ? function() {
    return po(e, i, r);
  } : function() {
    return Promise.resolve();
  }, u = !((n = e.variantChildren) === null || n === void 0) && n.size ? function(p) {
    p === void 0 && (p = 0);
    var h = a.delayChildren, m = h === void 0 ? 0 : h, y = a.staggerChildren, T = a.staggerDirection;
    return gc(e, t, m + p, y, T, r);
  } : function() {
    return Promise.resolve();
  }, l = a.when;
  if (l) {
    var c = le(l === "beforeChildren" ? [o, u] : [u, o], 2), f = c[0], d = c[1];
    return f().then(d);
  } else
    return Promise.all([o(), u(r.delay)]);
}
function po(e, t, r) {
  var n, i = r === void 0 ? {} : r, s = i.delay, a = s === void 0 ? 0 : s, o = i.transitionOverride, u = i.type, l = e.makeTargetAnimatable(t), c = l.transition, f = c === void 0 ? e.getDefaultTransition() : c, d = l.transitionEnd, p = Ee(l, ["transition", "transitionEnd"]);
  o && (f = o);
  var h = [], m = u && ((n = e.animationState) === null || n === void 0 ? void 0 : n.getState()[u]);
  for (var y in p) {
    var T = e.getValue(y), E = p[y];
    if (!(!T || E === void 0 || m && bc(m, y))) {
      var S = C({ delay: a }, f);
      e.shouldReduceMotion && Pt(y) && (S = C(C({}, S), { type: !1, delay: 0 }));
      var x = dn(y, T, E, S);
      h.push(x);
    }
  }
  return Promise.all(h).then(function() {
    d && dc(e, d);
  });
}
function gc(e, t, r, n, i, s) {
  r === void 0 && (r = 0), n === void 0 && (n = 0), i === void 0 && (i = 1);
  var a = [], o = (e.variantChildren.size - 1) * n, u = i === 1 ? function(l) {
    return l === void 0 && (l = 0), l * n;
  } : function(l) {
    return l === void 0 && (l = 0), o - l * n;
  };
  return Array.from(e.variantChildren).sort(yc).forEach(function(l, c) {
    a.push(Nr(l, t, C(C({}, s), { delay: r + u(c) })).then(function() {
      return l.notifyAnimationComplete(t);
    }));
  }), Promise.all(a);
}
function yc(e, t) {
  return e.sortNodePosition(t);
}
function bc(e, t) {
  var r = e.protectedKeys, n = e.needsAnimating, i = r.hasOwnProperty(t) && n[t] !== !0;
  return n[t] = !1, i;
}
var hn = [
  Q.Animate,
  Q.InView,
  Q.Focus,
  Q.Hover,
  Q.Tap,
  Q.Drag,
  Q.Exit
], Tc = Ce([], le(hn), !1).reverse(), Sc = hn.length;
function Ec(e) {
  return function(t) {
    return Promise.all(t.map(function(r) {
      var n = r.animation, i = r.options;
      return mc(e, n, i);
    }));
  };
}
function Pc(e) {
  var t = Ec(e), r = xc(), n = {}, i = !0, s = function(c, f) {
    var d = Zt(e, f);
    if (d) {
      d.transition;
      var p = d.transitionEnd, h = Ee(d, ["transition", "transitionEnd"]);
      c = C(C(C({}, c), h), p);
    }
    return c;
  };
  function a(c) {
    return n[c] !== void 0;
  }
  function o(c) {
    t = c(e);
  }
  function u(c, f) {
    for (var d, p = e.getProps(), h = e.getVariantContext(!0) || {}, m = [], y = /* @__PURE__ */ new Set(), T = {}, E = 1 / 0, S = function(B) {
      var z = Tc[B], F = r[z], q = (d = p[z]) !== null && d !== void 0 ? d : h[z], ue = we(q), re = z === f ? F.isActive : null;
      re === !1 && (E = B);
      var X = q === h[z] && q !== p[z] && ue;
      if (X && i && e.manuallyAnimateOnMount && (X = !1), F.protectedKeys = C({}, T), !F.isActive && re === null || !q && !F.prevProp || en(q) || typeof q == "boolean")
        return "continue";
      var Z = wc(F.prevProp, q), ae = Z || z === f && F.isActive && !X && ue || B > E && ue, ne = Array.isArray(q) ? q : [q], te = ne.reduce(s, {});
      re === !1 && (te = {});
      var he = F.prevResolvedValues, me = he === void 0 ? {} : he, w = C(C({}, me), te), O = function(R) {
        ae = !0, y.delete(R), F.needsAnimating[R] = !0;
      };
      for (var L in w) {
        var V = te[L], b = me[L];
        T.hasOwnProperty(L) || (V !== b ? bt(V) && bt(b) ? !co(V, b) || Z ? O(L) : F.protectedKeys[L] = !0 : V !== void 0 ? O(L) : y.add(L) : V !== void 0 && y.has(L) ? O(L) : F.protectedKeys[L] = !0);
      }
      F.prevProp = q, F.prevResolvedValues = te, F.isActive && (T = C(C({}, T), te)), i && e.blockInitialAnimation && (ae = !1), ae && !X && m.push.apply(m, Ce([], le(ne.map(function(R) {
        return {
          animation: R,
          options: C({ type: z }, c)
        };
      })), !1));
    }, x = 0; x < Sc; x++)
      S(x);
    if (n = C({}, T), y.size) {
      var g = {};
      y.forEach(function(B) {
        var z = e.getBaseTarget(B);
        z !== void 0 && (g[B] = z);
      }), m.push({ animation: g });
    }
    var I = Boolean(m.length);
    return i && p.initial === !1 && !e.manuallyAnimateOnMount && (I = !1), i = !1, I ? t(m) : Promise.resolve();
  }
  function l(c, f, d) {
    var p;
    if (r[c].isActive === f)
      return Promise.resolve();
    (p = e.variantChildren) === null || p === void 0 || p.forEach(function(y) {
      var T;
      return (T = y.animationState) === null || T === void 0 ? void 0 : T.setActive(c, f);
    }), r[c].isActive = f;
    var h = u(d, c);
    for (var m in r)
      r[m].protectedKeys = {};
    return h;
  }
  return {
    isAnimated: a,
    animateChanges: u,
    setActive: l,
    setAnimateFunction: o,
    getState: function() {
      return r;
    }
  };
}
function wc(e, t) {
  return typeof t == "string" ? t !== e : sa(t) ? !co(t, e) : !1;
}
function $e(e) {
  return e === void 0 && (e = !1), {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function xc() {
  var e;
  return e = {}, e[Q.Animate] = $e(!0), e[Q.InView] = $e(), e[Q.Hover] = $e(), e[Q.Tap] = $e(), e[Q.Drag] = $e(), e[Q.Focus] = $e(), e[Q.Exit] = $e(), e;
}
var Cc = {
  animation: Ne(function(e) {
    var t = e.visualElement, r = e.animate;
    t.animationState || (t.animationState = Pc(t)), en(r) && ge(function() {
      return r.subscribe(t);
    }, [r]);
  }),
  exit: Ne(function(e) {
    var t = e.custom, r = e.visualElement, n = le(lo(), 2), i = n[0], s = n[1], a = ce(Xt);
    ge(function() {
      var o, u;
      r.isPresent = i;
      var l = (o = r.animationState) === null || o === void 0 ? void 0 : o.setActive(Q.Exit, !i, { custom: (u = a == null ? void 0 : a.custom) !== null && u !== void 0 ? u : t });
      !i && (l == null || l.then(s));
    }, [i]);
  })
}, ho = function() {
  function e(t, r, n) {
    var i = this, s = n === void 0 ? {} : n, a = s.transformPagePoint;
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
      if (!!(i.lastMoveEvent && i.lastMoveEventInfo)) {
        var d = mr(i.lastMoveEventInfo, i.history), p = i.startEvent !== null, h = no(d.offset, { x: 0, y: 0 }) >= 3;
        if (!(!p && !h)) {
          var m = d.point, y = Wt().timestamp;
          i.history.push(C(C({}, m), { timestamp: y }));
          var T = i.handlers, E = T.onStart, S = T.onMove;
          p || (E && E(i.lastMoveEvent, d), i.startEvent = i.lastMoveEvent), S && S(i.lastMoveEvent, d);
        }
      }
    }, this.handlePointerMove = function(d, p) {
      if (i.lastMoveEvent = d, i.lastMoveEventInfo = hr(p, i.transformPagePoint), La(d) && d.buttons === 0) {
        i.handlePointerUp(d, p);
        return;
      }
      Ae.update(i.updatePoint, !0);
    }, this.handlePointerUp = function(d, p) {
      i.end();
      var h = i.handlers, m = h.onEnd, y = h.onSessionEnd, T = mr(hr(p, i.transformPagePoint), i.history);
      i.startEvent && m && m(d, T), y && y(d, T);
    }, !(ka(t) && t.touches.length > 1)) {
      this.handlers = r, this.transformPagePoint = a;
      var o = tn(t), u = hr(o, this.transformPagePoint), l = u.point, c = Wt().timestamp;
      this.history = [C(C({}, l), { timestamp: c })];
      var f = r.onSessionStart;
      f && f(t, mr(u, this.history)), this.removeListeners = tr(Je(window, "pointermove", this.handlePointerMove), Je(window, "pointerup", this.handlePointerUp), Je(window, "pointercancel", this.handlePointerUp));
    }
  }
  return e.prototype.updateHandlers = function(t) {
    this.handlers = t;
  }, e.prototype.end = function() {
    this.removeListeners && this.removeListeners(), tt.update(this.updatePoint);
  }, e;
}();
function hr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ci(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function mr(e, t) {
  var r = e.point;
  return {
    point: r,
    delta: ci(r, mo(t)),
    offset: ci(r, Rc(t)),
    velocity: Ac(t, 0.1)
  };
}
function Rc(e) {
  return e[0];
}
function mo(e) {
  return e[e.length - 1];
}
function Ac(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  for (var r = e.length - 1, n = null, i = mo(e); r >= 0 && (n = e[r], !(i.timestamp - n.timestamp > Ht(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  var s = (i.timestamp - n.timestamp) / 1e3;
  if (s === 0)
    return { x: 0, y: 0 };
  var a = {
    x: (i.x - n.x) / s,
    y: (i.y - n.y) / s
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Le(e) {
  return e.max - e.min;
}
function fi(e, t, r) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0.01), no(e, t) < r;
}
function di(e, t, r, n) {
  n === void 0 && (n = 0.5), e.origin = n, e.originPoint = ie(t.min, t.max, e.origin), e.scale = Le(r) / Le(t), (fi(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ie(r.min, r.max, e.origin) - e.originPoint, (fi(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function vt(e, t, r, n) {
  di(e.x, t.x, r.x, n == null ? void 0 : n.originX), di(e.y, t.y, r.y, n == null ? void 0 : n.originY);
}
function vi(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Le(t);
}
function Oc(e, t, r) {
  vi(e.x, t.x, r.x), vi(e.y, t.y, r.y);
}
function pi(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Le(t);
}
function pt(e, t, r) {
  pi(e.x, t.x, r.x), pi(e.y, t.y, r.y);
}
function _c(e, t, r) {
  var n = t.min, i = t.max;
  return n !== void 0 && e < n ? e = r ? ie(n, e, r.min) : Math.max(e, n) : i !== void 0 && e > i && (e = r ? ie(i, e, r.max) : Math.min(e, i)), e;
}
function hi(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function Vc(e, t) {
  var r = t.top, n = t.left, i = t.bottom, s = t.right;
  return {
    x: hi(e.x, n, s),
    y: hi(e.y, r, i)
  };
}
function mi(e, t) {
  var r, n = t.min - e.min, i = t.max - e.max;
  return t.max - t.min < e.max - e.min && (r = le([i, n], 2), n = r[0], i = r[1]), { min: n, max: i };
}
function Mc(e, t) {
  return {
    x: mi(e.x, t.x),
    y: mi(e.y, t.y)
  };
}
function Lc(e, t) {
  var r = 0.5, n = Le(e), i = Le(t);
  return i > n ? r = Tt(t.min, t.max - n, e.min) : n > i && (r = Tt(e.min, e.max - i, t.min)), $t(0, 1, r);
}
function kc(e, t) {
  var r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
var Br = 0.35;
function Dc(e) {
  return e === void 0 && (e = Br), e === !1 ? e = 0 : e === !0 && (e = Br), {
    x: gi(e, "left", "right"),
    y: gi(e, "top", "bottom")
  };
}
function gi(e, t, r) {
  return {
    min: yi(e, t),
    max: yi(e, r)
  };
}
function yi(e, t) {
  var r;
  return typeof e == "number" ? e : (r = e[t]) !== null && r !== void 0 ? r : 0;
}
var bi = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
}, ht = function() {
  return {
    x: bi(),
    y: bi()
  };
}, Ti = function() {
  return { min: 0, max: 0 };
}, de = function() {
  return {
    x: Ti(),
    y: Ti()
  };
};
function xe(e) {
  return [e("x"), e("y")];
}
function go(e) {
  var t = e.top, r = e.left, n = e.right, i = e.bottom;
  return {
    x: { min: r, max: n },
    y: { min: t, max: i }
  };
}
function jc(e) {
  var t = e.x, r = e.y;
  return { top: r.min, right: t.max, bottom: r.max, left: t.min };
}
function Ic(e, t) {
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
function gr(e) {
  return e === void 0 || e === 1;
}
function yo(e) {
  var t = e.scale, r = e.scaleX, n = e.scaleY;
  return !gr(t) || !gr(r) || !gr(n);
}
function De(e) {
  return yo(e) || Si(e.x) || Si(e.y) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Si(e) {
  return e && e !== "0%";
}
function qt(e, t, r) {
  var n = e - r, i = t * n;
  return r + i;
}
function Ei(e, t, r, n, i) {
  return i !== void 0 && (e = qt(e, i, n)), qt(e, r, n) + t;
}
function Ur(e, t, r, n, i) {
  t === void 0 && (t = 0), r === void 0 && (r = 1), e.min = Ei(e.min, t, r, n, i), e.max = Ei(e.max, t, r, n, i);
}
function bo(e, t) {
  var r = t.x, n = t.y;
  Ur(e.x, r.translate, r.scale, r.originPoint), Ur(e.y, n.translate, n.scale, n.originPoint);
}
function Fc(e, t, r, n) {
  var i, s;
  n === void 0 && (n = !1);
  var a = r.length;
  if (!!a) {
    t.x = t.y = 1;
    for (var o, u, l = 0; l < a; l++)
      o = r[l], u = o.projectionDelta, ((s = (i = o.instance) === null || i === void 0 ? void 0 : i.style) === null || s === void 0 ? void 0 : s.display) !== "contents" && (n && o.options.layoutScroll && o.scroll && o !== o.root && Ze(e, { x: -o.scroll.x, y: -o.scroll.y }), u && (t.x *= u.x.scale, t.y *= u.y.scale, bo(e, u)), n && De(o.latestValues) && Ze(e, o.latestValues));
  }
}
function Ie(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Pi(e, t, r) {
  var n = le(r, 3), i = n[0], s = n[1], a = n[2], o = t[a] !== void 0 ? t[a] : 0.5, u = ie(e.min, e.max, o);
  Ur(e, t[i], t[s], u, t.scale);
}
var Nc = ["x", "scaleX", "originX"], Bc = ["y", "scaleY", "originY"];
function Ze(e, t) {
  Pi(e.x, t, Nc), Pi(e.y, t, Bc);
}
function To(e, t) {
  return go(Ic(e.getBoundingClientRect(), t));
}
function Uc(e, t, r) {
  var n = To(e, r), i = t.scroll;
  return i && (Ie(n.x, i.x), Ie(n.y, i.y)), n;
}
var $c = /* @__PURE__ */ new WeakMap(), Yc = function() {
  function e(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = de(), this.visualElement = t;
  }
  return e.prototype.start = function(t, r) {
    var n = this, i = r === void 0 ? {} : r, s = i.snapToCursor, a = s === void 0 ? !1 : s;
    if (this.visualElement.isPresent !== !1) {
      var o = function(f) {
        n.stopAnimation(), a && n.snapToCursor(tn(f, "page").point);
      }, u = function(f, d) {
        var p, h = n.getProps(), m = h.drag, y = h.dragPropagation, T = h.onDragStart;
        m && !y && (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Fa(m), !n.openGlobalLock) || (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), xe(function(E) {
          var S, x, g = n.getAxisMotionValue(E).get() || 0;
          if (Re.test(g)) {
            var I = (x = (S = n.visualElement.projection) === null || S === void 0 ? void 0 : S.layout) === null || x === void 0 ? void 0 : x.actual[E];
            if (I) {
              var B = Le(I);
              g = B * (parseFloat(g) / 100);
            }
          }
          n.originPoint[E] = g;
        }), T == null || T(f, d), (p = n.visualElement.animationState) === null || p === void 0 || p.setActive(Q.Drag, !0));
      }, l = function(f, d) {
        var p = n.getProps(), h = p.dragPropagation, m = p.dragDirectionLock, y = p.onDirectionLock, T = p.onDrag;
        if (!(!h && !n.openGlobalLock)) {
          var E = d.offset;
          if (m && n.currentDirection === null) {
            n.currentDirection = Wc(E), n.currentDirection !== null && (y == null || y(n.currentDirection));
            return;
          }
          n.updateAxis("x", d.point, E), n.updateAxis("y", d.point, E), n.visualElement.syncRender(), T == null || T(f, d);
        }
      }, c = function(f, d) {
        return n.stop(f, d);
      };
      this.panSession = new ho(t, {
        onSessionStart: o,
        onStart: u,
        onMove: l,
        onSessionEnd: c
      }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    }
  }, e.prototype.stop = function(t, r) {
    var n = this.isDragging;
    if (this.cancel(), !!n) {
      var i = r.velocity;
      this.startAnimation(i);
      var s = this.getProps().onDragEnd;
      s == null || s(t, r);
    }
  }, e.prototype.cancel = function() {
    var t, r;
    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
    var n = this.getProps().dragPropagation;
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (r = this.visualElement.animationState) === null || r === void 0 || r.setActive(Q.Drag, !1);
  }, e.prototype.updateAxis = function(t, r, n) {
    var i = this.getProps().drag;
    if (!(!n || !Lt(t, i, this.currentDirection))) {
      var s = this.getAxisMotionValue(t), a = this.originPoint[t] + n[t];
      this.constraints && this.constraints[t] && (a = _c(a, this.constraints[t], this.elastic[t])), s.set(a);
    }
  }, e.prototype.resolveConstraints = function() {
    var t = this, r = this.getProps(), n = r.dragConstraints, i = r.dragElastic, s = (this.visualElement.projection || {}).layout, a = this.constraints;
    n && Xe(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = Vc(s.actual, n) : this.constraints = !1, this.elastic = Dc(i), a !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && xe(function(o) {
      t.getAxisMotionValue(o) && (t.constraints[o] = kc(s.actual[o], t.constraints[o]));
    });
  }, e.prototype.resolveRefConstraints = function() {
    var t = this.getProps(), r = t.dragConstraints, n = t.onMeasureDragConstraints;
    if (!r || !Xe(r))
      return !1;
    var i = r.current;
    Se(i !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var s = this.visualElement.projection;
    if (!s || !s.layout)
      return !1;
    var a = Uc(i, s.root, this.visualElement.getTransformPagePoint()), o = Mc(s.layout.actual, a);
    if (n) {
      var u = n(jc(o));
      this.hasMutatedConstraints = !!u, u && (o = go(u));
    }
    return o;
  }, e.prototype.startAnimation = function(t) {
    var r = this, n = this.getProps(), i = n.drag, s = n.dragMomentum, a = n.dragElastic, o = n.dragTransition, u = n.dragSnapToOrigin, l = n.onDragTransitionEnd, c = this.constraints || {}, f = xe(function(d) {
      var p;
      if (!!Lt(d, i, r.currentDirection)) {
        var h = (p = c == null ? void 0 : c[d]) !== null && p !== void 0 ? p : {};
        u && (h = { min: 0, max: 0 });
        var m = a ? 200 : 1e6, y = a ? 40 : 1e7, T = C(C({ type: "inertia", velocity: s ? t[d] : 0, bounceStiffness: m, bounceDamping: y, timeConstant: 750, restDelta: 1, restSpeed: 10 }, o), h);
        return r.startAxisValueAnimation(d, T);
      }
    });
    return Promise.all(f).then(l);
  }, e.prototype.startAxisValueAnimation = function(t, r) {
    var n = this.getAxisMotionValue(t);
    return dn(t, n, 0, r);
  }, e.prototype.stopAnimation = function() {
    var t = this;
    xe(function(r) {
      return t.getAxisMotionValue(r).stop();
    });
  }, e.prototype.getAxisMotionValue = function(t) {
    var r, n, i = "_drag" + t.toUpperCase(), s = this.visualElement.getProps()[i];
    return s || this.visualElement.getValue(t, (n = (r = this.visualElement.getProps().initial) === null || r === void 0 ? void 0 : r[t]) !== null && n !== void 0 ? n : 0);
  }, e.prototype.snapToCursor = function(t) {
    var r = this;
    xe(function(n) {
      var i = r.getProps().drag;
      if (!!Lt(n, i, r.currentDirection)) {
        var s = r.visualElement.projection, a = r.getAxisMotionValue(n);
        if (s && s.layout) {
          var o = s.layout.actual[n], u = o.min, l = o.max;
          a.set(t[n] - ie(u, l, 0.5));
        }
      }
    });
  }, e.prototype.scalePositionWithinConstraints = function() {
    var t = this, r, n = this.getProps(), i = n.drag, s = n.dragConstraints, a = this.visualElement.projection;
    if (!(!Xe(s) || !a || !this.constraints)) {
      this.stopAnimation();
      var o = { x: 0, y: 0 };
      xe(function(l) {
        var c = t.getAxisMotionValue(l);
        if (c) {
          var f = c.get();
          o[l] = Lc({ min: f, max: f }, t.constraints[l]);
        }
      });
      var u = this.visualElement.getProps().transformTemplate;
      this.visualElement.getInstance().style.transform = u ? u({}, "") : "none", (r = a.root) === null || r === void 0 || r.updateScroll(), a.updateLayout(), this.resolveConstraints(), xe(function(l) {
        if (!!Lt(l, i, null)) {
          var c = t.getAxisMotionValue(l), f = t.constraints[l], d = f.min, p = f.max;
          c.set(ie(d, p, o[l]));
        }
      });
    }
  }, e.prototype.addListeners = function() {
    var t = this, r;
    $c.set(this.visualElement, this);
    var n = this.visualElement.getInstance(), i = Je(n, "pointerdown", function(l) {
      var c = t.getProps(), f = c.drag, d = c.dragListener, p = d === void 0 ? !0 : d;
      f && p && t.start(l);
    }), s = function() {
      var l = t.getProps().dragConstraints;
      Xe(l) && (t.constraints = t.resolveRefConstraints());
    }, a = this.visualElement.projection, o = a.addEventListener("measure", s);
    a && !a.layout && ((r = a.root) === null || r === void 0 || r.updateScroll(), a.updateLayout()), s();
    var u = er(window, "resize", function() {
      return t.scalePositionWithinConstraints();
    });
    return a.addEventListener("didUpdate", function(l) {
      var c = l.delta, f = l.hasLayoutChanged;
      t.isDragging && f && (xe(function(d) {
        var p = t.getAxisMotionValue(d);
        !p || (t.originPoint[d] += c[d].translate, p.set(p.get() + c[d].translate));
      }), t.visualElement.syncRender());
    }), function() {
      u(), i(), o();
    };
  }, e.prototype.getProps = function() {
    var t = this.visualElement.getProps(), r = t.drag, n = r === void 0 ? !1 : r, i = t.dragDirectionLock, s = i === void 0 ? !1 : i, a = t.dragPropagation, o = a === void 0 ? !1 : a, u = t.dragConstraints, l = u === void 0 ? !1 : u, c = t.dragElastic, f = c === void 0 ? Br : c, d = t.dragMomentum, p = d === void 0 ? !0 : d;
    return C(C({}, t), { drag: n, dragDirectionLock: s, dragPropagation: o, dragConstraints: l, dragElastic: f, dragMomentum: p });
  }, e;
}();
function Lt(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function Wc(e, t) {
  t === void 0 && (t = 10);
  var r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
function zc(e) {
  var t = e.dragControls, r = e.visualElement, n = Qt(function() {
    return new Yc(r);
  });
  ge(function() {
    return t && t.subscribe(n);
  }, [n, t]), ge(function() {
    return n.addListeners();
  }, [n]);
}
function Hc(e) {
  var t = e.onPan, r = e.onPanStart, n = e.onPanEnd, i = e.onPanSessionStart, s = e.visualElement, a = t || r || n || i, o = et(null), u = ce(qr).transformPagePoint, l = {
    onSessionStart: i,
    onStart: r,
    onMove: t,
    onEnd: function(f, d) {
      o.current = null, n && n(f, d);
    }
  };
  ge(function() {
    o.current !== null && o.current.updateHandlers(l);
  });
  function c(f) {
    o.current = new ho(f, l, {
      transformPagePoint: u
    });
  }
  Ut(s, "pointerdown", a && c), Ua(function() {
    return o.current && o.current.end();
  });
}
var qc = {
  pan: Ne(Hc),
  drag: Ne(zc)
}, kt = [
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
function Gc() {
  var e = kt.map(function() {
    return new dt();
  }), t = {}, r = {
    clearAllListeners: function() {
      return e.forEach(function(n) {
        return n.clear();
      });
    },
    updatePropListeners: function(n) {
      kt.forEach(function(i) {
        var s, a = "on" + i, o = n[a];
        (s = t[i]) === null || s === void 0 || s.call(t), o && (t[i] = r[a](o));
      });
    }
  };
  return e.forEach(function(n, i) {
    r["on" + kt[i]] = function(s) {
      return n.add(s);
    }, r["notify" + kt[i]] = function() {
      for (var s = [], a = 0; a < arguments.length; a++)
        s[a] = arguments[a];
      return n.notify.apply(n, Ce([], le(s), !1));
    };
  }), r;
}
function Kc(e, t, r) {
  var n;
  for (var i in t) {
    var s = t[i], a = r[i];
    if (Ve(s))
      e.addValue(i, s), process.env.NODE_ENV === "development" && uo(s.version === "6.5.1", "Attempting to mix Framer Motion versions ".concat(s.version, " with 6.5.1 may not work as expected."));
    else if (Ve(a))
      e.addValue(i, rt(s));
    else if (a !== s)
      if (e.hasValue(i)) {
        var o = e.getValue(i);
        !o.hasAnimated && o.set(s);
      } else
        e.addValue(i, rt((n = e.getStaticValue(i)) !== null && n !== void 0 ? n : s));
  }
  for (var i in r)
    t[i] === void 0 && e.removeValue(i);
  return t;
}
var So = function(e) {
  var t = e.treeType, r = t === void 0 ? "" : t, n = e.build, i = e.getBaseTarget, s = e.makeTargetAnimatable, a = e.measureViewportBox, o = e.render, u = e.readValueFromInstance, l = e.removeValueFromRenderState, c = e.sortNodePosition, f = e.scrapeMotionValuesFromProps;
  return function(d, p) {
    var h = d.parent, m = d.props, y = d.presenceId, T = d.blockInitialAnimation, E = d.visualState, S = d.shouldReduceMotion;
    p === void 0 && (p = {});
    var x = !1, g = E.latestValues, I = E.renderState, B, z = Gc(), F = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), ue = {}, re = C({}, g), X;
    function Z() {
      !B || !x || (ae(), o(B, I, m.style, V.projection));
    }
    function ae() {
      n(V, I, g, p, m);
    }
    function ne() {
      z.notifyUpdate(g);
    }
    function te(b, R) {
      var M = R.onChange(function(N) {
        g[b] = N, m.onUpdate && Ae.update(ne, !1, !0);
      }), D = R.onRenderRequest(V.scheduleRender);
      q.set(b, function() {
        M(), D();
      });
    }
    var he = f(m);
    for (var me in he) {
      var w = he[me];
      g[me] !== void 0 && Ve(w) && w.set(g[me], !1);
    }
    var O = Jt(m), L = la(m), V = C(C({
      treeType: r,
      current: null,
      depth: h ? h.depth + 1 : 0,
      parent: h,
      children: /* @__PURE__ */ new Set(),
      presenceId: y,
      shouldReduceMotion: S,
      variantChildren: L ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(h == null ? void 0 : h.isMounted()),
      blockInitialAnimation: T,
      isMounted: function() {
        return Boolean(B);
      },
      mount: function(b) {
        x = !0, B = V.current = b, V.projection && V.projection.mount(b), L && h && !O && (X = h == null ? void 0 : h.addVariantChild(V)), F.forEach(function(R, M) {
          return te(M, R);
        }), h == null || h.children.add(V), V.setProps(m);
      },
      unmount: function() {
        var b;
        (b = V.projection) === null || b === void 0 || b.unmount(), tt.update(ne), tt.render(Z), q.forEach(function(R) {
          return R();
        }), X == null || X(), h == null || h.children.delete(V), z.clearAllListeners(), B = void 0, x = !1;
      },
      addVariantChild: function(b) {
        var R, M = V.getClosestVariantNode();
        if (M)
          return (R = M.variantChildren) === null || R === void 0 || R.add(b), function() {
            return M.variantChildren.delete(b);
          };
      },
      sortNodePosition: function(b) {
        return !c || r !== b.treeType ? 0 : c(V.getInstance(), b.getInstance());
      },
      getClosestVariantNode: function() {
        return L ? V : h == null ? void 0 : h.getClosestVariantNode();
      },
      getLayoutId: function() {
        return m.layoutId;
      },
      getInstance: function() {
        return B;
      },
      getStaticValue: function(b) {
        return g[b];
      },
      setStaticValue: function(b, R) {
        return g[b] = R;
      },
      getLatestValues: function() {
        return g;
      },
      setVisibility: function(b) {
        V.isVisible !== b && (V.isVisible = b, V.scheduleRender());
      },
      makeTargetAnimatable: function(b, R) {
        return R === void 0 && (R = !0), s(V, b, m, R);
      },
      measureViewportBox: function() {
        return a(B, m);
      },
      addValue: function(b, R) {
        V.hasValue(b) && V.removeValue(b), F.set(b, R), g[b] = R.get(), te(b, R);
      },
      removeValue: function(b) {
        var R;
        F.delete(b), (R = q.get(b)) === null || R === void 0 || R(), q.delete(b), delete g[b], l(b, I);
      },
      hasValue: function(b) {
        return F.has(b);
      },
      getValue: function(b, R) {
        var M = F.get(b);
        return M === void 0 && R !== void 0 && (M = rt(R), V.addValue(b, M)), M;
      },
      forEachValue: function(b) {
        return F.forEach(b);
      },
      readValue: function(b) {
        var R;
        return (R = g[b]) !== null && R !== void 0 ? R : u(B, b, p);
      },
      setBaseTarget: function(b, R) {
        re[b] = R;
      },
      getBaseTarget: function(b) {
        if (i) {
          var R = i(m, b);
          if (R !== void 0 && !Ve(R))
            return R;
        }
        return re[b];
      }
    }, z), {
      build: function() {
        return ae(), I;
      },
      scheduleRender: function() {
        Ae.render(Z, !1, !0);
      },
      syncRender: Z,
      setProps: function(b) {
        (b.transformTemplate || m.transformTemplate) && V.scheduleRender(), m = b, z.updatePropListeners(b), ue = Kc(V, f(m), ue);
      },
      getProps: function() {
        return m;
      },
      getVariant: function(b) {
        var R;
        return (R = m.variants) === null || R === void 0 ? void 0 : R[b];
      },
      getDefaultTransition: function() {
        return m.transition;
      },
      getTransformPagePoint: function() {
        return m.transformPagePoint;
      },
      getVariantContext: function(b) {
        if (b === void 0 && (b = !1), b)
          return h == null ? void 0 : h.getVariantContext();
        if (!O) {
          var R = (h == null ? void 0 : h.getVariantContext()) || {};
          return m.initial !== void 0 && (R.initial = m.initial), R;
        }
        for (var M = {}, D = 0; D < Xc; D++) {
          var N = Eo[D], U = m[N];
          (we(U) || U === !1) && (M[N] = U);
        }
        return M;
      }
    });
    return V;
  };
}, Eo = Ce(["initial"], le(hn), !1), Xc = Eo.length;
function $r(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var Po = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Zc(e) {
  var t = Po.exec(e);
  if (!t)
    return [,];
  var r = le(t, 3), n = r[1], i = r[2];
  return [n, i];
}
var Jc = 4;
function Yr(e, t, r) {
  r === void 0 && (r = 1), Se(r <= Jc, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
  var n = le(Zc(e), 2), i = n[0], s = n[1];
  if (!!i) {
    var a = window.getComputedStyle(t).getPropertyValue(i);
    return a ? a.trim() : $r(s) ? Yr(s, t, r + 1) : s;
  }
}
function Qc(e, t, r) {
  var n, i = Ee(t, []), s = e.getInstance();
  if (!(s instanceof Element))
    return { target: i, transitionEnd: r };
  r && (r = C({}, r)), e.forEachValue(function(l) {
    var c = l.get();
    if (!!$r(c)) {
      var f = Yr(c, s);
      f && l.set(f);
    }
  });
  for (var a in i) {
    var o = i[a];
    if (!!$r(o)) {
      var u = Yr(o, s);
      !u || (i[a] = u, r && ((n = r[a]) !== null && n !== void 0 || (r[a] = o)));
    }
  }
  return { target: i, transitionEnd: r };
}
var ef = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), wo = function(e) {
  return ef.has(e);
}, tf = function(e) {
  return Object.keys(e).some(wo);
}, xo = function(e, t) {
  e.set(t, !1), e.set(t);
}, Dt = function(e) {
  return e === He || e === k;
}, wi;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(wi || (wi = {}));
var xi = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, Ci = function(e, t) {
  return function(r, n) {
    var i = n.transform;
    if (i === "none" || !i)
      return 0;
    var s = i.match(/^matrix3d\((.+)\)$/);
    if (s)
      return xi(s[1], t);
    var a = i.match(/^matrix\((.+)\)$/);
    return a ? xi(a[1], e) : 0;
  };
}, rf = /* @__PURE__ */ new Set(["x", "y", "z"]), nf = gt.filter(function(e) {
  return !rf.has(e);
});
function af(e) {
  var t = [];
  return nf.forEach(function(r) {
    var n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var Ri = {
  width: function(e, t) {
    var r = e.x, n = t.paddingLeft, i = n === void 0 ? "0" : n, s = t.paddingRight, a = s === void 0 ? "0" : s;
    return r.max - r.min - parseFloat(i) - parseFloat(a);
  },
  height: function(e, t) {
    var r = e.y, n = t.paddingTop, i = n === void 0 ? "0" : n, s = t.paddingBottom, a = s === void 0 ? "0" : s;
    return r.max - r.min - parseFloat(i) - parseFloat(a);
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
  x: Ci(4, 13),
  y: Ci(5, 14)
}, of = function(e, t, r) {
  var n = t.measureViewportBox(), i = t.getInstance(), s = getComputedStyle(i), a = s.display, o = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach(function(l) {
    o[l] = Ri[l](n, s);
  }), t.syncRender();
  var u = t.measureViewportBox();
  return r.forEach(function(l) {
    var c = t.getValue(l);
    xo(c, o[l]), e[l] = Ri[l](u, s);
  }), e;
}, sf = function(e, t, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {}), t = C({}, t), n = C({}, n);
  var i = Object.keys(t).filter(wo), s = [], a = !1, o = [];
  if (i.forEach(function(c) {
    var f = e.getValue(c);
    if (!!e.hasValue(c)) {
      var d = r[c], p = st(d), h = t[c], m;
      if (bt(h)) {
        var y = h.length, T = h[0] === null ? 1 : 0;
        d = h[T], p = st(d);
        for (var E = T; E < y; E++)
          m ? Se(st(h[E]) === m, "All keyframes must be of the same type") : (m = st(h[E]), Se(m === p || Dt(p) && Dt(m), "Keyframes must be of the same dimension as the current value"));
      } else
        m = st(h);
      if (p !== m)
        if (Dt(p) && Dt(m)) {
          var S = f.get();
          typeof S == "string" && f.set(parseFloat(S)), typeof h == "string" ? t[c] = parseFloat(h) : Array.isArray(h) && m === k && (t[c] = h.map(parseFloat));
        } else
          (p == null ? void 0 : p.transform) && (m == null ? void 0 : m.transform) && (d === 0 || h === 0) ? d === 0 ? f.set(m.transform(d)) : t[c] = p.transform(h) : (a || (s = af(e), a = !0), o.push(c), n[c] = n[c] !== void 0 ? n[c] : t[c], xo(f, h));
    }
  }), o.length) {
    var u = o.indexOf("height") >= 0 ? window.pageYOffset : null, l = of(t, e, o);
    return s.length && s.forEach(function(c) {
      var f = le(c, 2), d = f[0], p = f[1];
      e.getValue(d).set(p);
    }), e.syncRender(), u !== null && window.scrollTo({ top: u }), { target: l, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function uf(e, t, r, n) {
  return tf(t) ? sf(e, t, r, n) : { target: t, transitionEnd: n };
}
var lf = function(e, t, r, n) {
  var i = Qc(e, t, n);
  return t = i.target, n = i.transitionEnd, uf(e, t, r, n);
};
function cf(e) {
  return window.getComputedStyle(e);
}
var Co = {
  treeType: "dom",
  readValueFromInstance: function(e, t) {
    if (Pt(t)) {
      var r = ln(t);
      return r && r.default || 0;
    } else {
      var n = cf(e);
      return (pa(t) ? n.getPropertyValue(t) : n[t]) || 0;
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
    return To(e, r);
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
    var s = t.transition, a = t.transitionEnd, o = Ee(t, ["transition", "transitionEnd"]), u = hc(o, s || {}, e);
    if (i && (a && (a = i(a)), o && (o = i(o)), u && (u = i(u))), n) {
      vc(e, o, u);
      var l = lf(e, o, u, a);
      a = l.transitionEnd, o = l.target;
    }
    return C({ transition: s, transitionEnd: a }, o);
  },
  scrapeMotionValuesFromProps: Qr,
  build: function(e, t, r, n, i) {
    e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"), Xr(t, r, n, i.transformTemplate);
  },
  render: Ra
}, ff = So(Co), df = So(C(C({}, Co), { getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var r;
  return Pt(t) ? ((r = ln(t)) === null || r === void 0 ? void 0 : r.default) || 0 : (t = Aa.has(t) ? t : Ca(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: _a, build: function(e, t, r, n, i) {
  Jr(t, r, n, i.transformTemplate);
}, render: Oa })), vf = function(e, t) {
  return Gr(e) ? df(t, { enableHardwareAcceleration: !1 }) : ff(t, { enableHardwareAcceleration: !0 });
};
function Ai(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var ut = {
  correct: function(e, t) {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (k.test(e))
        e = parseFloat(e);
      else
        return e;
    var r = Ai(e, t.target.x), n = Ai(e, t.target.y);
    return "".concat(r, "% ").concat(n, "%");
  }
}, Oi = "_$css", pf = {
  correct: function(e, t) {
    var r = t.treeScale, n = t.projectionDelta, i = e, s = e.includes("var("), a = [];
    s && (e = e.replace(Po, function(m) {
      return a.push(m), Oi;
    }));
    var o = Me.parse(e);
    if (o.length > 5)
      return i;
    var u = Me.createTransformer(e), l = typeof o[0] != "number" ? 1 : 0, c = n.x.scale * r.x, f = n.y.scale * r.y;
    o[0 + l] /= c, o[1 + l] /= f;
    var d = ie(c, f, 0.5);
    typeof o[2 + l] == "number" && (o[2 + l] /= d), typeof o[3 + l] == "number" && (o[3 + l] /= d);
    var p = u(o);
    if (s) {
      var h = 0;
      p = p.replace(Oi, function() {
        var m = a[h];
        return h++, m;
      });
    }
    return p;
  }
}, hf = function(e) {
  ra(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    var r = this, n = this.props, i = n.visualElement, s = n.layoutGroup, a = n.switchLayoutGroup, o = n.layoutId, u = i.projection;
    Fs(gf), u && (s != null && s.group && s.group.add(u), (a == null ? void 0 : a.register) && o && a.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", function() {
      r.safeToRemove();
    }), u.setOptions(C(C({}, u.options), {
      onExitComplete: function() {
        return r.safeToRemove();
      }
    }))), lt.hasEverUpdated = !0;
  }, t.prototype.getSnapshotBeforeUpdate = function(r) {
    var n = this, i = this.props, s = i.layoutDependency, a = i.visualElement, o = i.drag, u = i.isPresent, l = a.projection;
    return l && (l.isPresent = u, o || r.layoutDependency !== s || s === void 0 ? l.willUpdate() : this.safeToRemove(), r.isPresent !== u && (u ? l.promote() : l.relegate() || Ae.postRender(function() {
      var c;
      !((c = l.getStack()) === null || c === void 0) && c.members.length || n.safeToRemove();
    }))), null;
  }, t.prototype.componentDidUpdate = function() {
    var r = this.props.visualElement.projection;
    r && (r.root.didUpdate(), !r.currentAnimation && r.isLead() && this.safeToRemove());
  }, t.prototype.componentWillUnmount = function() {
    var r = this.props, n = r.visualElement, i = r.layoutGroup, s = r.switchLayoutGroup, a = n.projection;
    a && (a.scheduleCheckAfterUnmount(), i != null && i.group && i.group.remove(a), s != null && s.deregister && s.deregister(a));
  }, t.prototype.safeToRemove = function() {
    var r = this.props.safeToRemove;
    r == null || r();
  }, t.prototype.render = function() {
    return null;
  }, t;
}(Gt.Component);
function mf(e) {
  var t = le(lo(), 2), r = t[0], n = t[1], i = ce(ca);
  return /* @__PURE__ */ ee(hf, {
    ...C({}, e, {
      layoutGroup: i,
      switchLayoutGroup: ce(fa),
      isPresent: r,
      safeToRemove: n
    })
  });
}
var gf = {
  borderRadius: C(C({}, ut), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: ut,
  borderTopRightRadius: ut,
  borderBottomLeftRadius: ut,
  borderBottomRightRadius: ut,
  boxShadow: pf
}, yf = {
  measureLayout: mf
};
function bf(e, t, r) {
  r === void 0 && (r = {});
  var n = Ve(e) ? e : rt(e);
  return dn("", n, t, r), {
    stop: function() {
      return n.stop();
    },
    isAnimating: function() {
      return n.isAnimating();
    }
  };
}
var Ro = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Tf = Ro.length, _i = function(e) {
  return typeof e == "string" ? parseFloat(e) : e;
}, Vi = function(e) {
  return typeof e == "number" || k.test(e);
};
function Sf(e, t, r, n, i, s) {
  var a, o, u, l;
  i ? (e.opacity = ie(
    0,
    (a = r.opacity) !== null && a !== void 0 ? a : 1,
    Ef(n)
  ), e.opacityExit = ie((o = t.opacity) !== null && o !== void 0 ? o : 1, 0, Pf(n))) : s && (e.opacity = ie((u = t.opacity) !== null && u !== void 0 ? u : 1, (l = r.opacity) !== null && l !== void 0 ? l : 1, n));
  for (var c = 0; c < Tf; c++) {
    var f = "border".concat(Ro[c], "Radius"), d = Mi(t, f), p = Mi(r, f);
    if (!(d === void 0 && p === void 0)) {
      d || (d = 0), p || (p = 0);
      var h = d === 0 || p === 0 || Vi(d) === Vi(p);
      h ? (e[f] = Math.max(ie(_i(d), _i(p), n), 0), (Re.test(p) || Re.test(d)) && (e[f] += "%")) : e[f] = p;
    }
  }
  (t.rotate || r.rotate) && (e.rotate = ie(t.rotate || 0, r.rotate || 0, n));
}
function Mi(e, t) {
  var r;
  return (r = e[t]) !== null && r !== void 0 ? r : e.borderRadius;
}
var Ef = Ao(0, 0.5, sn), Pf = Ao(0.5, 0.95, an);
function Ao(e, t, r) {
  return function(n) {
    return n < e ? 0 : n > t ? 1 : r(Tt(e, t, n));
  };
}
function Li(e, t) {
  e.min = t.min, e.max = t.max;
}
function Pe(e, t) {
  Li(e.x, t.x), Li(e.y, t.y);
}
function ki(e, t, r, n, i) {
  return e -= t, e = qt(e, 1 / r, n), i !== void 0 && (e = qt(e, 1 / i, n)), e;
}
function wf(e, t, r, n, i, s, a) {
  if (t === void 0 && (t = 0), r === void 0 && (r = 1), n === void 0 && (n = 0.5), s === void 0 && (s = e), a === void 0 && (a = e), Re.test(t)) {
    t = parseFloat(t);
    var o = ie(a.min, a.max, t / 100);
    t = o - a.min;
  }
  if (typeof t == "number") {
    var u = ie(s.min, s.max, n);
    e === s && (u -= t), e.min = ki(e.min, t, r, u, i), e.max = ki(e.max, t, r, u, i);
  }
}
function Di(e, t, r, n, i) {
  var s = le(r, 3), a = s[0], o = s[1], u = s[2];
  wf(e, t[a], t[o], t[u], t.scale, n, i);
}
var xf = ["x", "scaleX", "originX"], Cf = ["y", "scaleY", "originY"];
function ji(e, t, r, n) {
  Di(e.x, t, xf, r == null ? void 0 : r.x, n == null ? void 0 : n.x), Di(e.y, t, Cf, r == null ? void 0 : r.y, n == null ? void 0 : n.y);
}
function Ii(e) {
  return e.translate === 0 && e.scale === 1;
}
function Oo(e) {
  return Ii(e.x) && Ii(e.y);
}
function _o(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
var Rf = function() {
  function e() {
    this.members = [];
  }
  return e.prototype.add = function(t) {
    vn(this.members, t), t.scheduleRender();
  }, e.prototype.remove = function(t) {
    if (pn(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      var r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }, e.prototype.relegate = function(t) {
    var r = this.members.findIndex(function(a) {
      return t === a;
    });
    if (r === 0)
      return !1;
    for (var n, i = r; i >= 0; i--) {
      var s = this.members[i];
      if (s.isPresent !== !1) {
        n = s;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }, e.prototype.promote = function(t, r) {
    var n, i = this.lead;
    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
      i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, r && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues, t.snapshot.isShared = !0), !((n = t.root) === null || n === void 0) && n.isUpdating && (t.isLayoutDirty = !0);
      var s = t.options.crossfade;
      s === !1 && i.hide();
    }
  }, e.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(t) {
      var r, n, i, s, a;
      (n = (r = t.options).onExitComplete) === null || n === void 0 || n.call(r), (a = (i = t.resumingFrom) === null || i === void 0 ? void 0 : (s = i.options).onExitComplete) === null || a === void 0 || a.call(s);
    });
  }, e.prototype.scheduleRender = function() {
    this.members.forEach(function(t) {
      t.instance && t.scheduleRender(!1);
    });
  }, e.prototype.removeLeadSnapshot = function() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }, e;
}(), Af = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function Fi(e, t, r) {
  var n = e.x.translate / t.x, i = e.y.translate / t.y, s = "translate3d(".concat(n, "px, ").concat(i, "px, 0) ");
  if (s += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") "), r) {
    var a = r.rotate, o = r.rotateX, u = r.rotateY;
    a && (s += "rotate(".concat(a, "deg) ")), o && (s += "rotateX(".concat(o, "deg) ")), u && (s += "rotateY(".concat(u, "deg) "));
  }
  var l = e.x.scale * t.x, c = e.y.scale * t.y;
  return s += "scale(".concat(l, ", ").concat(c, ")"), s === Af ? "none" : s;
}
var Of = function(e, t) {
  return e.depth - t.depth;
}, _f = function() {
  function e() {
    this.children = [], this.isDirty = !1;
  }
  return e.prototype.add = function(t) {
    vn(this.children, t), this.isDirty = !0;
  }, e.prototype.remove = function(t) {
    pn(this.children, t), this.isDirty = !0;
  }, e.prototype.forEach = function(t) {
    this.isDirty && this.children.sort(Of), this.isDirty = !1, this.children.forEach(t);
  }, e;
}(), Ni = 1e3;
function Vo(e) {
  var t = e.attachResizeListener, r = e.defaultParent, n = e.measureScroll, i = e.checkIsScrollRoot, s = e.resetTransform;
  return function() {
    function a(o, u, l) {
      var c = this;
      u === void 0 && (u = {}), l === void 0 && (l = r == null ? void 0 : r()), this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = function() {
        c.isUpdating && (c.isUpdating = !1, c.clearAllSnapshots());
      }, this.updateProjection = function() {
        c.nodes.forEach(jf), c.nodes.forEach(If);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.id = o, this.latestValues = u, this.root = l ? l.root || l : this, this.path = l ? Ce(Ce([], le(l.path), !1), [l], !1) : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, o && this.root.registerPotentialNode(o, this);
      for (var f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _f());
    }
    return a.prototype.addEventListener = function(o, u) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new dt()), this.eventHandlers.get(o).add(u);
    }, a.prototype.notifyListeners = function(o) {
      for (var u = [], l = 1; l < arguments.length; l++)
        u[l - 1] = arguments[l];
      var c = this.eventHandlers.get(o);
      c == null || c.notify.apply(c, Ce([], le(u), !1));
    }, a.prototype.hasListeners = function(o) {
      return this.eventHandlers.has(o);
    }, a.prototype.registerPotentialNode = function(o, u) {
      this.potentialNodes.set(o, u);
    }, a.prototype.mount = function(o, u) {
      var l = this, c;
      if (u === void 0 && (u = !1), !this.instance) {
        this.isSVG = o instanceof SVGElement && o.tagName !== "svg", this.instance = o;
        var f = this.options, d = f.layoutId, p = f.layout, h = f.visualElement;
        if (h && !h.getInstance() && h.mount(o), this.root.nodes.add(this), (c = this.parent) === null || c === void 0 || c.children.add(this), this.id && this.root.potentialNodes.delete(this.id), u && (p || d) && (this.isLayoutDirty = !0), t) {
          var m, y = function() {
            return l.root.updateBlockedByResize = !1;
          };
          t(o, function() {
            l.root.updateBlockedByResize = !0, clearTimeout(m), m = window.setTimeout(y, 250), lt.hasAnimatedSinceResize && (lt.hasAnimatedSinceResize = !1, l.nodes.forEach(Df));
          });
        }
        d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && h && (d || p) && this.addEventListener("didUpdate", function(T) {
          var E, S, x, g, I, B = T.delta, z = T.hasLayoutChanged, F = T.hasRelativeTargetChanged, q = T.layout;
          if (l.isTreeAnimationBlocked()) {
            l.target = void 0, l.relativeTarget = void 0;
            return;
          }
          var ue = (S = (E = l.options.transition) !== null && E !== void 0 ? E : h.getDefaultTransition()) !== null && S !== void 0 ? S : $f, re = h.getProps(), X = re.onLayoutAnimationStart, Z = re.onLayoutAnimationComplete, ae = !l.targetLayout || !_o(l.targetLayout, q) || F, ne = !z && F;
          if (((x = l.resumeFrom) === null || x === void 0 ? void 0 : x.instance) || ne || z && (ae || !l.currentAnimation)) {
            l.resumeFrom && (l.resumingFrom = l.resumeFrom, l.resumingFrom.resumingFrom = void 0), l.setAnimationOrigin(B, ne);
            var te = C(C({}, fn(ue, "layout")), { onPlay: X, onComplete: Z });
            h.shouldReduceMotion && (te.delay = 0, te.type = !1), l.startAnimation(te);
          } else
            !z && l.animationProgress === 0 && l.finishAnimation(), l.isLead() && ((I = (g = l.options).onExitComplete) === null || I === void 0 || I.call(g));
          l.targetLayout = q;
        });
      }
    }, a.prototype.unmount = function() {
      var o, u;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (o = this.getStack()) === null || o === void 0 || o.remove(this), (u = this.parent) === null || u === void 0 || u.children.delete(this), this.instance = void 0, tt.preRender(this.updateProjection);
    }, a.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = !0;
    }, a.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = !1;
    }, a.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }, a.prototype.isTreeAnimationBlocked = function() {
      var o;
      return this.isAnimationBlocked || ((o = this.parent) === null || o === void 0 ? void 0 : o.isTreeAnimationBlocked()) || !1;
    }, a.prototype.startUpdate = function() {
      var o;
      this.isUpdateBlocked() || (this.isUpdating = !0, (o = this.nodes) === null || o === void 0 || o.forEach(Ff));
    }, a.prototype.willUpdate = function(o) {
      var u, l, c;
      if (o === void 0 && (o = !0), this.root.isUpdateBlocked()) {
        (l = (u = this.options).onExitComplete) === null || l === void 0 || l.call(u);
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
        this.isLayoutDirty = !0;
        for (var f = 0; f < this.path.length; f++) {
          var d = this.path[f];
          d.shouldResetTransform = !0, d.updateScroll();
        }
        var p = this.options, h = p.layoutId, m = p.layout;
        if (!(h === void 0 && !m)) {
          var y = (c = this.options.visualElement) === null || c === void 0 ? void 0 : c.getProps().transformTemplate;
          this.prevTransformTemplateValue = y == null ? void 0 : y(this.latestValues, ""), this.updateSnapshot(), o && this.notifyListeners("willUpdate");
        }
      }
    }, a.prototype.didUpdate = function() {
      var o = this.isUpdateBlocked();
      if (o) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bi);
        return;
      }
      !this.isUpdating || (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Yf), this.potentialNodes.clear()), this.nodes.forEach(kf), this.nodes.forEach(Vf), this.nodes.forEach(Mf), this.clearAllSnapshots(), dr.update(), dr.preRender(), dr.render());
    }, a.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(Lf), this.sharedNodes.forEach(Nf);
    }, a.prototype.scheduleUpdateProjection = function() {
      Ae.preRender(this.updateProjection, !1, !0);
    }, a.prototype.scheduleCheckAfterUnmount = function() {
      var o = this;
      Ae.postRender(function() {
        o.isLayoutDirty ? o.root.didUpdate() : o.root.checkUpdateFailed();
      });
    }, a.prototype.updateSnapshot = function() {
      if (!(this.snapshot || !this.instance)) {
        var o = this.measure(), u = this.removeTransform(this.removeElementScroll(o));
        Wi(u), this.snapshot = {
          measured: o,
          layout: u,
          latestValues: {}
        };
      }
    }, a.prototype.updateLayout = function() {
      var o;
      if (!!this.instance && (this.updateScroll(), !(!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))) {
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (var u = 0; u < this.path.length; u++) {
            var l = this.path[u];
            l.updateScroll();
          }
        var c = this.measure();
        Wi(c);
        var f = this.layout;
        this.layout = {
          measured: c,
          actual: this.removeElementScroll(c)
        }, this.layoutCorrected = de(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), (o = this.options.visualElement) === null || o === void 0 || o.notifyLayoutMeasure(this.layout.actual, f == null ? void 0 : f.actual);
      }
    }, a.prototype.updateScroll = function() {
      this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = n(this.instance));
    }, a.prototype.resetTransform = function() {
      var o;
      if (!!s) {
        var u = this.isLayoutDirty || this.shouldResetTransform, l = this.projectionDelta && !Oo(this.projectionDelta), c = (o = this.options.visualElement) === null || o === void 0 ? void 0 : o.getProps().transformTemplate, f = c == null ? void 0 : c(this.latestValues, ""), d = f !== this.prevTransformTemplateValue;
        u && (l || De(this.latestValues) || d) && (s(this.instance, f), this.shouldResetTransform = !1, this.scheduleRender());
      }
    }, a.prototype.measure = function() {
      var o = this.options.visualElement;
      if (!o)
        return de();
      var u = o.measureViewportBox(), l = this.root.scroll;
      return l && (Ie(u.x, l.x), Ie(u.y, l.y)), u;
    }, a.prototype.removeElementScroll = function(o) {
      var u = de();
      Pe(u, o);
      for (var l = 0; l < this.path.length; l++) {
        var c = this.path[l], f = c.scroll, d = c.options, p = c.isScrollRoot;
        if (c !== this.root && f && d.layoutScroll) {
          if (p) {
            Pe(u, o);
            var h = this.root.scroll;
            h && (Ie(u.x, -h.x), Ie(u.y, -h.y));
          }
          Ie(u.x, f.x), Ie(u.y, f.y);
        }
      }
      return u;
    }, a.prototype.applyTransform = function(o, u) {
      u === void 0 && (u = !1);
      var l = de();
      Pe(l, o);
      for (var c = 0; c < this.path.length; c++) {
        var f = this.path[c];
        !u && f.options.layoutScroll && f.scroll && f !== f.root && Ze(l, {
          x: -f.scroll.x,
          y: -f.scroll.y
        }), De(f.latestValues) && Ze(l, f.latestValues);
      }
      return De(this.latestValues) && Ze(l, this.latestValues), l;
    }, a.prototype.removeTransform = function(o) {
      var u, l = de();
      Pe(l, o);
      for (var c = 0; c < this.path.length; c++) {
        var f = this.path[c];
        if (!!f.instance && !!De(f.latestValues)) {
          yo(f.latestValues) && f.updateSnapshot();
          var d = de(), p = f.measure();
          Pe(d, p), ji(l, f.latestValues, (u = f.snapshot) === null || u === void 0 ? void 0 : u.layout, d);
        }
      }
      return De(this.latestValues) && ji(l, this.latestValues), l;
    }, a.prototype.setTargetDelta = function(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection();
    }, a.prototype.setOptions = function(o) {
      var u;
      this.options = C(C(C({}, this.options), o), { crossfade: (u = o.crossfade) !== null && u !== void 0 ? u : !0 });
    }, a.prototype.clearMeasurements = function() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }, a.prototype.resolveTargetDelta = function() {
      var o, u = this.options, l = u.layout, c = u.layoutId;
      !this.layout || !(l || c) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = de(), this.relativeTargetOrigin = de(), pt(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Pe(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = de(), this.targetWithTransforms = de()), this.relativeTarget && this.relativeTargetOrigin && ((o = this.relativeParent) === null || o === void 0 ? void 0 : o.target) ? Oc(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Pe(this.target, this.layout.actual), bo(this.target, this.targetDelta)) : Pe(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = de(), this.relativeTargetOrigin = de(), pt(this.relativeTargetOrigin, this.target, this.relativeParent.target), Pe(this.relativeTarget, this.relativeTargetOrigin)))));
    }, a.prototype.getClosestProjectingParent = function() {
      if (!(!this.parent || De(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }, a.prototype.calcProjection = function() {
      var o, u = this.options, l = u.layout, c = u.layoutId;
      if (this.isTreeAnimating = Boolean(((o = this.parent) === null || o === void 0 ? void 0 : o.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !(!this.layout || !(l || c))) {
        var f = this.getLead();
        Pe(this.layoutCorrected, this.layout.actual), Fc(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== f);
        var d = f.target;
        if (!!d) {
          this.projectionDelta || (this.projectionDelta = ht(), this.projectionDeltaWithTransform = ht());
          var p = this.treeScale.x, h = this.treeScale.y, m = this.projectionTransform;
          vt(this.projectionDelta, this.layoutCorrected, d, this.latestValues), this.projectionTransform = Fi(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== p || this.treeScale.y !== h) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
        }
      }
    }, a.prototype.hide = function() {
      this.isVisible = !1;
    }, a.prototype.show = function() {
      this.isVisible = !0;
    }, a.prototype.scheduleRender = function(o) {
      var u, l, c;
      o === void 0 && (o = !0), (l = (u = this.options).scheduleRender) === null || l === void 0 || l.call(u), o && ((c = this.getStack()) === null || c === void 0 || c.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }, a.prototype.setAnimationOrigin = function(o, u) {
      var l = this, c;
      u === void 0 && (u = !1);
      var f = this.snapshot, d = (f == null ? void 0 : f.latestValues) || {}, p = C({}, this.latestValues), h = ht();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !u;
      var m = de(), y = f == null ? void 0 : f.isShared, T = (((c = this.getStack()) === null || c === void 0 ? void 0 : c.members.length) || 0) <= 1, E = Boolean(y && !T && this.options.crossfade === !0 && !this.path.some(Uf));
      this.animationProgress = 0, this.mixTargetDelta = function(S) {
        var x, g = S / 1e3;
        Ui(h.x, o.x, g), Ui(h.y, o.y, g), l.setTargetDelta(h), l.relativeTarget && l.relativeTargetOrigin && l.layout && ((x = l.relativeParent) === null || x === void 0 ? void 0 : x.layout) && (pt(m, l.layout.actual, l.relativeParent.layout.actual), Bf(l.relativeTarget, l.relativeTargetOrigin, m, g)), y && (l.animationValues = p, Sf(p, d, l.latestValues, g, E, T)), l.root.scheduleUpdateProjection(), l.scheduleRender(), l.animationProgress = g;
      }, this.mixTargetDelta(0);
    }, a.prototype.startAnimation = function(o) {
      var u = this, l, c;
      this.notifyListeners("animationStart"), (l = this.currentAnimation) === null || l === void 0 || l.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (tt.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Ae.update(function() {
        lt.hasAnimatedSinceResize = !0, u.currentAnimation = bf(0, Ni, C(C({}, o), { onUpdate: function(f) {
          var d;
          u.mixTargetDelta(f), (d = o.onUpdate) === null || d === void 0 || d.call(o, f);
        }, onComplete: function() {
          var f;
          (f = o.onComplete) === null || f === void 0 || f.call(o), u.completeAnimation();
        } })), u.resumingFrom && (u.resumingFrom.currentAnimation = u.currentAnimation), u.pendingAnimation = void 0;
      });
    }, a.prototype.completeAnimation = function() {
      var o;
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (o = this.getStack()) === null || o === void 0 || o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }, a.prototype.finishAnimation = function() {
      var o;
      this.currentAnimation && ((o = this.mixTargetDelta) === null || o === void 0 || o.call(this, Ni), this.currentAnimation.stop()), this.completeAnimation();
    }, a.prototype.applyTransformsToTarget = function() {
      var o = this.getLead(), u = o.targetWithTransforms, l = o.target, c = o.layout, f = o.latestValues;
      !u || !l || !c || (Pe(u, l), Ze(u, f), vt(this.projectionDeltaWithTransform, this.layoutCorrected, u, f));
    }, a.prototype.registerSharedNode = function(o, u) {
      var l, c, f;
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Rf());
      var d = this.sharedNodes.get(o);
      d.add(u), u.promote({
        transition: (l = u.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.transition,
        preserveFollowOpacity: (f = (c = u.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.shouldPreserveFollowOpacity) === null || f === void 0 ? void 0 : f.call(c, u)
      });
    }, a.prototype.isLead = function() {
      var o = this.getStack();
      return o ? o.lead === this : !0;
    }, a.prototype.getLead = function() {
      var o, u = this.options.layoutId;
      return u ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }, a.prototype.getPrevLead = function() {
      var o, u = this.options.layoutId;
      return u ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }, a.prototype.getStack = function() {
      var o = this.options.layoutId;
      if (o)
        return this.root.sharedNodes.get(o);
    }, a.prototype.promote = function(o) {
      var u = o === void 0 ? {} : o, l = u.needsReset, c = u.transition, f = u.preserveFollowOpacity, d = this.getStack();
      d && d.promote(this, f), l && (this.projectionDelta = void 0, this.needsReset = !0), c && this.setOptions({ transition: c });
    }, a.prototype.relegate = function() {
      var o = this.getStack();
      return o ? o.relegate(this) : !1;
    }, a.prototype.resetRotation = function() {
      var o = this.options.visualElement;
      if (!!o) {
        for (var u = !1, l = {}, c = 0; c < Ar.length; c++) {
          var f = Ar[c], d = "rotate" + f;
          !o.getStaticValue(d) || (u = !0, l[d] = o.getStaticValue(d), o.setStaticValue(d, 0));
        }
        if (!!u) {
          o == null || o.syncRender();
          for (var d in l)
            o.setStaticValue(d, l[d]);
          o.scheduleRender();
        }
      }
    }, a.prototype.getProjectionStyles = function(o) {
      var u, l, c, f, d, p;
      o === void 0 && (o = {});
      var h = {};
      if (!this.instance || this.isSVG)
        return h;
      if (this.isVisible)
        h.visibility = "";
      else
        return { visibility: "hidden" };
      var m = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, h.opacity = "", h.pointerEvents = jt(o.pointerEvents) || "", h.transform = m ? m(this.latestValues, "") : "none", h;
      var y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        var T = {};
        return this.options.layoutId && (T.opacity = (l = this.latestValues.opacity) !== null && l !== void 0 ? l : 1, T.pointerEvents = jt(o.pointerEvents) || ""), this.hasProjected && !De(this.latestValues) && (T.transform = m ? m({}, "") : "none", this.hasProjected = !1), T;
      }
      var E = y.animationValues || y.latestValues;
      this.applyTransformsToTarget(), h.transform = Fi(this.projectionDeltaWithTransform, this.treeScale, E), m && (h.transform = m(E, h.transform));
      var S = this.projectionDelta, x = S.x, g = S.y;
      h.transformOrigin = "".concat(x.origin * 100, "% ").concat(g.origin * 100, "% 0"), y.animationValues ? h.opacity = y === this ? (f = (c = E.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : E.opacityExit : h.opacity = y === this ? (d = E.opacity) !== null && d !== void 0 ? d : "" : (p = E.opacityExit) !== null && p !== void 0 ? p : 0;
      for (var I in Nt)
        if (E[I] !== void 0) {
          var B = Nt[I], z = B.correct, F = B.applyTo, q = z(E[I], y);
          if (F)
            for (var ue = F.length, re = 0; re < ue; re++)
              h[F[re]] = q;
          else
            h[I] = q;
        }
      return this.options.layoutId && (h.pointerEvents = y === this ? jt(o.pointerEvents) || "" : "none"), h;
    }, a.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    }, a.prototype.resetTree = function() {
      this.root.nodes.forEach(function(o) {
        var u;
        return (u = o.currentAnimation) === null || u === void 0 ? void 0 : u.stop();
      }), this.root.nodes.forEach(Bi), this.root.sharedNodes.clear();
    }, a;
  }();
}
function Vf(e) {
  e.updateLayout();
}
function Mf(e) {
  var t, r, n, i, s = (r = (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !== null && r !== void 0 ? r : e.snapshot;
  if (e.isLead() && e.layout && s && e.hasListeners("didUpdate")) {
    var a = e.layout, o = a.actual, u = a.measured;
    e.options.animationType === "size" ? xe(function(E) {
      var S = s.isShared ? s.measured[E] : s.layout[E], x = Le(S);
      S.min = o[E].min, S.max = S.min + x;
    }) : e.options.animationType === "position" && xe(function(E) {
      var S = s.isShared ? s.measured[E] : s.layout[E], x = Le(o[E]);
      S.max = S.min + x;
    });
    var l = ht();
    vt(l, o, s.layout);
    var c = ht();
    s.isShared ? vt(c, e.applyTransform(u, !0), s.measured) : vt(c, o, s.layout);
    var f = !Oo(l), d = !1;
    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
      var p = e.relativeParent, h = p.snapshot, m = p.layout;
      if (h && m) {
        var y = de();
        pt(y, s.layout, h.layout);
        var T = de();
        pt(T, o, m.actual), _o(y, T) || (d = !0);
      }
    }
    e.notifyListeners("didUpdate", {
      layout: o,
      snapshot: s,
      delta: c,
      layoutDelta: l,
      hasLayoutChanged: f,
      hasRelativeTargetChanged: d
    });
  } else
    e.isLead() && ((i = (n = e.options).onExitComplete) === null || i === void 0 || i.call(n));
  e.options.transition = void 0;
}
function Lf(e) {
  e.clearSnapshot();
}
function Bi(e) {
  e.clearMeasurements();
}
function kf(e) {
  var t = e.options.visualElement;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(), e.resetTransform();
}
function Df(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function jf(e) {
  e.resolveTargetDelta();
}
function If(e) {
  e.calcProjection();
}
function Ff(e) {
  e.resetRotation();
}
function Nf(e) {
  e.removeLeadSnapshot();
}
function Ui(e, t, r) {
  e.translate = ie(t.translate, 0, r), e.scale = ie(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function $i(e, t, r, n) {
  e.min = ie(t.min, r.min, n), e.max = ie(t.max, r.max, n);
}
function Bf(e, t, r, n) {
  $i(e.x, t.x, r.x, n), $i(e.y, t.y, r.y, n);
}
function Uf(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var $f = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Yf(e, t) {
  for (var r = e.root, n = e.path.length - 1; n >= 0; n--)
    if (Boolean(e.path[n].instance)) {
      r = e.path[n];
      break;
    }
  var i = r && r !== e.root ? r.instance : document, s = i.querySelector('[data-projection-id="'.concat(t, '"]'));
  s && e.mount(s, !0);
}
function Yi(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function Wi(e) {
  Yi(e.x), Yi(e.y);
}
var Wf = Vo({
  attachResizeListener: function(e, t) {
    return er(e, "resize", t);
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
}), yr = {
  current: void 0
}, zf = Vo({
  measureScroll: function(e) {
    return {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  },
  defaultParent: function() {
    if (!yr.current) {
      var e = new Wf(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), yr.current = e;
    }
    return yr.current;
  },
  resetTransform: function(e, t) {
    e.style.transform = t != null ? t : "none";
  },
  checkIsScrollRoot: function(e) {
    return Boolean(window.getComputedStyle(e).position === "fixed");
  }
}), Hf = C(C(C(C({}, Cc), Yl), qc), yf), Mo = /* @__PURE__ */ js(function(e, t) {
  return Eu(e, t, Hf, vf, zf);
}), Te = { exports: {} }, br = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function qf() {
  if (zi)
    return G;
  zi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var I = g.$$typeof;
      switch (I) {
        case t:
          switch (g = g.type, g) {
            case u:
            case l:
            case n:
            case s:
            case i:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case o:
                case c:
                case h:
                case p:
                case a:
                  return g;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function x(g) {
    return S(g) === l;
  }
  return G.AsyncMode = u, G.ConcurrentMode = l, G.ContextConsumer = o, G.ContextProvider = a, G.Element = t, G.ForwardRef = c, G.Fragment = n, G.Lazy = h, G.Memo = p, G.Portal = r, G.Profiler = s, G.StrictMode = i, G.Suspense = f, G.isAsyncMode = function(g) {
    return x(g) || S(g) === u;
  }, G.isConcurrentMode = x, G.isContextConsumer = function(g) {
    return S(g) === o;
  }, G.isContextProvider = function(g) {
    return S(g) === a;
  }, G.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, G.isForwardRef = function(g) {
    return S(g) === c;
  }, G.isFragment = function(g) {
    return S(g) === n;
  }, G.isLazy = function(g) {
    return S(g) === h;
  }, G.isMemo = function(g) {
    return S(g) === p;
  }, G.isPortal = function(g) {
    return S(g) === r;
  }, G.isProfiler = function(g) {
    return S(g) === s;
  }, G.isStrictMode = function(g) {
    return S(g) === i;
  }, G.isSuspense = function(g) {
    return S(g) === f;
  }, G.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === l || g === s || g === i || g === f || g === d || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === p || g.$$typeof === a || g.$$typeof === o || g.$$typeof === c || g.$$typeof === y || g.$$typeof === T || g.$$typeof === E || g.$$typeof === m);
  }, G.typeOf = S, G;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function Gf() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, o = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function S(_) {
      return typeof _ == "string" || typeof _ == "function" || _ === n || _ === l || _ === s || _ === i || _ === f || _ === d || typeof _ == "object" && _ !== null && (_.$$typeof === h || _.$$typeof === p || _.$$typeof === a || _.$$typeof === o || _.$$typeof === c || _.$$typeof === y || _.$$typeof === T || _.$$typeof === E || _.$$typeof === m);
    }
    function x(_) {
      if (typeof _ == "object" && _ !== null) {
        var ye = _.$$typeof;
        switch (ye) {
          case t:
            var qe = _.type;
            switch (qe) {
              case u:
              case l:
              case n:
              case s:
              case i:
              case f:
                return qe;
              default:
                var Be = qe && qe.$$typeof;
                switch (Be) {
                  case o:
                  case c:
                  case h:
                  case p:
                  case a:
                    return Be;
                  default:
                    return ye;
                }
            }
          case r:
            return ye;
        }
      }
    }
    var g = u, I = l, B = o, z = a, F = t, q = c, ue = n, re = h, X = p, Z = r, ae = s, ne = i, te = f, he = !1;
    function me(_) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(_) || x(_) === u;
    }
    function w(_) {
      return x(_) === l;
    }
    function O(_) {
      return x(_) === o;
    }
    function L(_) {
      return x(_) === a;
    }
    function V(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function b(_) {
      return x(_) === c;
    }
    function R(_) {
      return x(_) === n;
    }
    function M(_) {
      return x(_) === h;
    }
    function D(_) {
      return x(_) === p;
    }
    function N(_) {
      return x(_) === r;
    }
    function U(_) {
      return x(_) === s;
    }
    function $(_) {
      return x(_) === i;
    }
    function fe(_) {
      return x(_) === f;
    }
    K.AsyncMode = g, K.ConcurrentMode = I, K.ContextConsumer = B, K.ContextProvider = z, K.Element = F, K.ForwardRef = q, K.Fragment = ue, K.Lazy = re, K.Memo = X, K.Portal = Z, K.Profiler = ae, K.StrictMode = ne, K.Suspense = te, K.isAsyncMode = me, K.isConcurrentMode = w, K.isContextConsumer = O, K.isContextProvider = L, K.isElement = V, K.isForwardRef = b, K.isFragment = R, K.isLazy = M, K.isMemo = D, K.isPortal = N, K.isProfiler = U, K.isStrictMode = $, K.isSuspense = fe, K.isValidElementType = S, K.typeOf = x;
  }()), K;
}
var qi;
function Lo() {
  return qi || (qi = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = qf() : e.exports = Gf();
  }(br)), br.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tr, Gi;
function Kf() {
  if (Gi)
    return Tr;
  Gi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, o = 0; o < 10; o++)
        a["_" + String.fromCharCode(o)] = o;
      var u = Object.getOwnPropertyNames(a).map(function(c) {
        return a[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Tr = i() ? Object.assign : function(s, a) {
    for (var o, u = n(s), l, c = 1; c < arguments.length; c++) {
      o = Object(arguments[c]);
      for (var f in o)
        t.call(o, f) && (u[f] = o[f]);
      if (e) {
        l = e(o);
        for (var d = 0; d < l.length; d++)
          r.call(o, l[d]) && (u[l[d]] = o[l[d]]);
      }
    }
    return u;
  }, Tr;
}
var Sr, Ki;
function mn() {
  if (Ki)
    return Sr;
  Ki = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Sr = e, Sr;
}
var Er, Xi;
function ko() {
  return Xi || (Xi = 1, Er = Function.call.bind(Object.prototype.hasOwnProperty)), Er;
}
var Pr, Zi;
function Xf() {
  if (Zi)
    return Pr;
  Zi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = mn(), r = {}, n = ko();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, o, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in s)
        if (n(s, c)) {
          var f;
          try {
            if (typeof s[c] != "function") {
              var d = Error(
                (u || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = s[c](a, c, u, o, null, t);
          } catch (h) {
            f = h;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + o + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var p = l ? l() : "";
            e(
              "Failed " + o + " type: " + f.message + (p != null ? p : "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Pr = i, Pr;
}
var wr, Ji;
function Zf() {
  if (Ji)
    return wr;
  Ji = 1;
  var e = Lo(), t = Kf(), r = mn(), n = ko(), i = Xf(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(o) {
    var u = "Warning: " + o;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return wr = function(o, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(w) {
      var O = w && (l && w[l] || w[c]);
      if (typeof O == "function")
        return O;
    }
    var d = "<<anonymous>>", p = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: E(),
      arrayOf: S,
      element: x(),
      elementType: g(),
      instanceOf: I,
      node: q(),
      objectOf: z,
      oneOf: B,
      oneOfType: F,
      shape: re,
      exact: X
    };
    function h(w, O) {
      return w === O ? w !== 0 || 1 / w === 1 / O : w !== w && O !== O;
    }
    function m(w, O) {
      this.message = w, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function y(w) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, L = 0;
      function V(R, M, D, N, U, $, fe) {
        if (N = N || d, $ = $ || D, fe !== r) {
          if (u) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = N + ":" + D;
            !O[ye] && L < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + N + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[ye] = !0, L++);
          }
        }
        return M[D] == null ? R ? M[D] === null ? new m("The " + U + " `" + $ + "` is marked as required " + ("in `" + N + "`, but its value is `null`.")) : new m("The " + U + " `" + $ + "` is marked as required in " + ("`" + N + "`, but its value is `undefined`.")) : null : w(M, D, N, U, $);
      }
      var b = V.bind(null, !1);
      return b.isRequired = V.bind(null, !0), b;
    }
    function T(w) {
      function O(L, V, b, R, M, D) {
        var N = L[V], U = ne(N);
        if (U !== w) {
          var $ = te(N);
          return new m(
            "Invalid " + R + " `" + M + "` of type " + ("`" + $ + "` supplied to `" + b + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return y(O);
    }
    function E() {
      return y(a);
    }
    function S(w) {
      function O(L, V, b, R, M) {
        if (typeof w != "function")
          return new m("Property `" + M + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var D = L[V];
        if (!Array.isArray(D)) {
          var N = ne(D);
          return new m("Invalid " + R + " `" + M + "` of type " + ("`" + N + "` supplied to `" + b + "`, expected an array."));
        }
        for (var U = 0; U < D.length; U++) {
          var $ = w(D, U, b, R, M + "[" + U + "]", r);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return y(O);
    }
    function x() {
      function w(O, L, V, b, R) {
        var M = O[L];
        if (!o(M)) {
          var D = ne(M);
          return new m("Invalid " + b + " `" + R + "` of type " + ("`" + D + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(w);
    }
    function g() {
      function w(O, L, V, b, R) {
        var M = O[L];
        if (!e.isValidElementType(M)) {
          var D = ne(M);
          return new m("Invalid " + b + " `" + R + "` of type " + ("`" + D + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(w);
    }
    function I(w) {
      function O(L, V, b, R, M) {
        if (!(L[V] instanceof w)) {
          var D = w.name || d, N = me(L[V]);
          return new m("Invalid " + R + " `" + M + "` of type " + ("`" + N + "` supplied to `" + b + "`, expected ") + ("instance of `" + D + "`."));
        }
        return null;
      }
      return y(O);
    }
    function B(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(L, V, b, R, M) {
        for (var D = L[V], N = 0; N < w.length; N++)
          if (h(D, w[N]))
            return null;
        var U = JSON.stringify(w, function(fe, _) {
          var ye = te(_);
          return ye === "symbol" ? String(_) : _;
        });
        return new m("Invalid " + R + " `" + M + "` of value `" + String(D) + "` " + ("supplied to `" + b + "`, expected one of " + U + "."));
      }
      return y(O);
    }
    function z(w) {
      function O(L, V, b, R, M) {
        if (typeof w != "function")
          return new m("Property `" + M + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var D = L[V], N = ne(D);
        if (N !== "object")
          return new m("Invalid " + R + " `" + M + "` of type " + ("`" + N + "` supplied to `" + b + "`, expected an object."));
        for (var U in D)
          if (n(D, U)) {
            var $ = w(D, U, b, R, M + "." + U, r);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return y(O);
    }
    function F(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < w.length; O++) {
        var L = w[O];
        if (typeof L != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + he(L) + " at index " + O + "."
          ), a;
      }
      function V(b, R, M, D, N) {
        for (var U = [], $ = 0; $ < w.length; $++) {
          var fe = w[$], _ = fe(b, R, M, D, N, r);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && U.push(_.data.expectedType);
        }
        var ye = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new m("Invalid " + D + " `" + N + "` supplied to " + ("`" + M + "`" + ye + "."));
      }
      return y(V);
    }
    function q() {
      function w(O, L, V, b, R) {
        return Z(O[L]) ? null : new m("Invalid " + b + " `" + R + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return y(w);
    }
    function ue(w, O, L, V, b) {
      return new m(
        (w || "React class") + ": " + O + " type `" + L + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function re(w) {
      function O(L, V, b, R, M) {
        var D = L[V], N = ne(D);
        if (N !== "object")
          return new m("Invalid " + R + " `" + M + "` of type `" + N + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var U in w) {
          var $ = w[U];
          if (typeof $ != "function")
            return ue(b, R, M, U, te($));
          var fe = $(D, U, b, R, M + "." + U, r);
          if (fe)
            return fe;
        }
        return null;
      }
      return y(O);
    }
    function X(w) {
      function O(L, V, b, R, M) {
        var D = L[V], N = ne(D);
        if (N !== "object")
          return new m("Invalid " + R + " `" + M + "` of type `" + N + "` " + ("supplied to `" + b + "`, expected `object`."));
        var U = t({}, L[V], w);
        for (var $ in U) {
          var fe = w[$];
          if (n(w, $) && typeof fe != "function")
            return ue(b, R, M, $, te(fe));
          if (!fe)
            return new m(
              "Invalid " + R + " `" + M + "` key `" + $ + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(L[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var _ = fe(D, $, b, R, M + "." + $, r);
          if (_)
            return _;
        }
        return null;
      }
      return y(O);
    }
    function Z(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(Z);
          if (w === null || o(w))
            return !0;
          var O = f(w);
          if (O) {
            var L = O.call(w), V;
            if (O !== w.entries) {
              for (; !(V = L.next()).done; )
                if (!Z(V.value))
                  return !1;
            } else
              for (; !(V = L.next()).done; ) {
                var b = V.value;
                if (b && !Z(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(w, O) {
      return w === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function ne(w) {
      var O = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : ae(O, w) ? "symbol" : O;
    }
    function te(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var O = ne(w);
      if (O === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function he(w) {
      var O = te(w);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function me(w) {
      return !w.constructor || !w.constructor.name ? d : w.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, wr;
}
var xr, Qi;
function Jf() {
  if (Qi)
    return xr;
  Qi = 1;
  var e = mn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, xr = function() {
    function n(a, o, u, l, c, f) {
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
    var s = {
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
    return s.PropTypes = s, s;
  }, xr;
}
if (process.env.NODE_ENV !== "production") {
  var Qf = Lo(), ed = !0;
  Te.exports = Zf()(Qf.isElement, ed);
} else
  Te.exports = Jf()();
var td = ["color", "size", "title"];
function rd(e, t) {
  if (e == null)
    return {};
  var r = nd(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function nd(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var gn = /* @__PURE__ */ zr(function(e, t) {
  var r = e.color, n = e.size, i = e.title, s = rd(e, td);
  return /* @__PURE__ */ We("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...s,
    children: [i ? /* @__PURE__ */ ee("title", {
      children: i
    }) : null, /* @__PURE__ */ ee("path", {
      d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
    })]
  });
});
gn.propTypes = {
  color: Te.exports.string,
  size: Te.exports.oneOfType([Te.exports.string, Te.exports.number]),
  title: Te.exports.string
};
gn.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const id = gn;
var ad = ["color", "size", "title"];
function od(e, t) {
  if (e == null)
    return {};
  var r = sd(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      n = s[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function sd(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, s;
  for (s = 0; s < n.length; s++)
    i = n[s], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var yn = /* @__PURE__ */ zr(function(e, t) {
  var r = e.color, n = e.size, i = e.title, s = od(e, ad);
  return /* @__PURE__ */ We("svg", {
    ref: t,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: n,
    height: n,
    fill: r,
    ...s,
    children: [i ? /* @__PURE__ */ ee("title", {
      children: i
    }) : null, /* @__PURE__ */ ee("path", {
      d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    })]
  });
});
yn.propTypes = {
  color: Te.exports.string,
  size: Te.exports.oneOfType([Te.exports.string, Te.exports.number]),
  title: Te.exports.string
};
yn.defaultProps = {
  color: "currentColor",
  size: "1em",
  title: null
};
const ud = yn, ld = [], cd = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  justifyItems: "center"
}, fd = ({
  style: e,
  size: t
}) => /* @__PURE__ */ ee("div", {
  className: [...ld].join(" "),
  style: {
    ...cd,
    ...e
  },
  children: /* @__PURE__ */ ee(Mo.div, {
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
    children: /* @__PURE__ */ ee(id, {
      size: t
    })
  })
}), dd = [], vd = {}, pd = ({
  style: e,
  size: t
}) => /* @__PURE__ */ ee("div", {
  className: dd.join(" "),
  style: {
    ...vd,
    ...e
  },
  children: /* @__PURE__ */ ee(Mo.div, {
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
    children: /* @__PURE__ */ ee(ud, {
      size: t
    })
  })
}), hd = ["border-0", "rounded-lg", "cursor-pointer", "p-2", "gcr"], md = {
  position: "relative",
  border: "none"
}, gd = (e) => {
  const [t, r] = ea(e.vistate || "default");
  ge(() => {
    let c;
    return (t === "err" || t === "success") && (c = setTimeout(() => r("default"), e.decay || 500)), () => {
      c && clearTimeout(c);
    };
  }, [t]);
  const n = (c) => {
    !e.disabled && e.onClick && (e.clickableStates === !0 || (e.clickableStates || ["default"]).includes(t)) && (r("loading"), e.onClick(c).then(() => r("success")).catch(() => r("err")));
  }, i = cs(e.viusage);
  let s = e.emphasis || 500, a = ss(s), o = s;
  e.invert && (s = a, a = o);
  const [u, l] = ls([i, s]);
  return /* @__PURE__ */ We("button", {
    ...e,
    onClick: n,
    className: [...e.overrideClasses ? [] : hd, ...e.classNames || [], `bg-${i}-${s}`, `hover:bg-${i}-${s - 200}`, `text-${u}-${l}`, `hover:text-${u}-${l + 100}`, `fill-${i}-${a}`].join(" "),
    style: {
      ...md,
      ...e.style
    },
    children: [e.children, (t === "loading" || t === "err" || t === "success") && /* @__PURE__ */ We("div", {
      className: `text-${i}-${a}`,
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
      children: [t === "loading" && /* @__PURE__ */ ee(ms, {
        size: "20px"
      }), t === "err" && /* @__PURE__ */ ee(pd, {
        size: 40
      }), t === "success" && /* @__PURE__ */ ee(fd, {
        size: 40
      })]
    })]
  });
}, yd = ["border-2", "rounded-full", "cursor-pointer", "p-3", "gcr"], Od = {}, bd = (e) => /* @__PURE__ */ ee(gd, {
  overrideClasses: !0,
  classNames: yd,
  ...e,
  children: e.children
}), _d = [], Vd = {}, Td = ["rounded-full", "overflow-hidden", "flex", "items-center", "justify-items-center"], Sd = ["grid"], Ed = {
  gridTemplateColumns: "1fr 5fr"
}, Md = (e) => /* @__PURE__ */ ee(bd, {
  style: {
    position: "relative"
  },
  ...e,
  children: /* @__PURE__ */ We("div", {
    style: Ed,
    className: Sd.join(" "),
    children: [/* @__PURE__ */ ee("div", {
      className: Td.join(" "),
      style: {
        height: e.pegSize || 30,
        width: e.pegSize || 30
      },
      children: e.Peg
    }), /* @__PURE__ */ ee("div", {
      children: e.children
    })]
  })
}), Do = {
  checksCompleted: !1,
  dispatch: () => {
  }
}, jo = ze(Do), Pd = (e, t) => t(e), Ld = ({
  children: e
}) => {
  const [t, r] = os(Pd, Do);
  return /* @__PURE__ */ ee(jo.Provider, {
    value: {
      ...t,
      dispatch: r
    },
    children: e
  });
}, kd = () => {
  const e = ce(jo);
  if (!e)
    throw new Error("useChecks must be called within a CheckProvider.");
  return e;
}, wd = "", xd = {}, Dd = ({
  style: e
}) => /* @__PURE__ */ ee("div", {
  className: wd,
  style: {
    ...xd,
    ...e
  }
}), Cd = "", Rd = {}, jd = ({
  style: e
}) => /* @__PURE__ */ ee("div", {
  className: Cd,
  style: {
    ...Rd,
    ...e
  }
});
export {
  hd as BUTTON_CLASSNAMES,
  md as BUTTON_STYLE,
  gd as Button,
  jo as CheckContext,
  Ld as CheckProvider,
  Pd as CheckReducer,
  Cd as MENS_NCAAB_COMPETITION_CLASSNAMES,
  Rd as MENS_NCAAB_COMPETITION_STYLE,
  wd as MENS_NCAAB_TEAM_CLASSNAMES,
  xd as MENS_NCAAB_TEAM_STYLE,
  jd as MensNcaabCompetition,
  Dd as MensNcaabTeam,
  Sd as PEG_CHILD_CONTAINER_CLASSNAMES,
  Ed as PEG_CHILD_CONTAINER_STYLE,
  Td as PEG_CONTAINER_CLASSNAMES,
  _d as PEG_PILL_CLASSNAMES,
  Vd as PEG_PILL_STYLE,
  yd as PILL_CLASSNAMES,
  Od as PILL_STYLE,
  Md as PegPill,
  bd as Pill,
  kd as useCheckStore
};
