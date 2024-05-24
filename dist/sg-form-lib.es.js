import Re, { useEffect as Mt } from "react";
function qt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cr = { exports: {} }, Ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function $t() {
  if (Nr)
    return Ge;
  Nr = 1;
  var e = Re, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(y, w, A) {
    var R, g = {}, W = null, Y = null;
    A !== void 0 && (W = "" + A), w.key !== void 0 && (W = "" + w.key), w.ref !== void 0 && (Y = w.ref);
    for (R in w)
      i.call(w, R) && !a.hasOwnProperty(R) && (g[R] = w[R]);
    if (y && y.defaultProps)
      for (R in w = y.defaultProps, w)
        g[R] === void 0 && (g[R] = w[R]);
    return { $$typeof: n, type: y, key: W, ref: Y, props: g, _owner: u.current };
  }
  return Ge.Fragment = r, Ge.jsx = d, Ge.jsxs = d, Ge;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function Lt() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Re, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), y = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), K = Symbol.iterator, M = "@@iterator";
    function N(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = K && t[K] || t[M];
      return typeof c == "function" ? c : null;
    }
    var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var c = arguments.length, _ = new Array(c > 1 ? c - 1 : 0), O = 1; O < c; O++)
          _[O - 1] = arguments[O];
        re("error", t, _);
      }
    }
    function re(t, c, _) {
      {
        var O = B.ReactDebugCurrentFrame, Z = O.getStackAddendum();
        Z !== "" && (c += "%s", _ = _.concat([Z]));
        var ne = _.map(function(H) {
          return String(H);
        });
        ne.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, ne);
      }
    }
    var X = !1, v = !1, ge = !1, je = !1, Te = !1, xe;
    xe = Symbol.for("react.module.reference");
    function he(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === a || Te || t === u || t === A || t === R || je || t === Y || X || v || ge || typeof t == "object" && t !== null && (t.$$typeof === W || t.$$typeof === g || t.$$typeof === d || t.$$typeof === y || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === xe || t.getModuleId !== void 0));
    }
    function Pe(t, c, _) {
      var O = t.displayName;
      if (O)
        return O;
      var Z = c.displayName || c.name || "";
      return Z !== "" ? _ + "(" + Z + ")" : _;
    }
    function j(t) {
      return t.displayName || "Context";
    }
    function C(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case u:
          return "StrictMode";
        case A:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case y:
            var c = t;
            return j(c) + ".Consumer";
          case d:
            var _ = t;
            return j(_._context) + ".Provider";
          case w:
            return Pe(t, t.render, "ForwardRef");
          case g:
            var O = t.displayName || null;
            return O !== null ? O : C(t.type) || "Memo";
          case W: {
            var Z = t, ne = Z._payload, H = Z._init;
            try {
              return C(H(ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, se = 0, ie, oe, Se, Ae, f, E, D;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function P() {
      {
        if (se === 0) {
          ie = console.log, oe = console.info, Se = console.warn, Ae = console.error, f = console.group, E = console.groupCollapsed, D = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        se++;
      }
    }
    function $() {
      {
        if (se--, se === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, t, {
              value: ie
            }),
            info: z({}, t, {
              value: oe
            }),
            warn: z({}, t, {
              value: Se
            }),
            error: z({}, t, {
              value: Ae
            }),
            group: z({}, t, {
              value: f
            }),
            groupCollapsed: z({}, t, {
              value: E
            }),
            groupEnd: z({}, t, {
              value: D
            })
          });
        }
        se < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var F = B.ReactCurrentDispatcher, k;
    function I(t, c, _) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (Z) {
            var O = Z.stack.trim().match(/\n( *(at )?)/);
            k = O && O[1] || "";
          }
        return `
` + k + t;
      }
    }
    var L = !1, q;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      q = new de();
    }
    function b(t, c) {
      if (!t || L)
        return "";
      {
        var _ = q.get(t);
        if (_ !== void 0)
          return _;
      }
      var O;
      L = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ne;
      ne = F.current, F.current = null, P();
      try {
        if (c) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (Ee) {
              O = Ee;
            }
            Reflect.construct(t, [], H);
          } else {
            try {
              H.call();
            } catch (Ee) {
              O = Ee;
            }
            t.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ee) {
            O = Ee;
          }
          t();
        }
      } catch (Ee) {
        if (Ee && O && typeof Ee.stack == "string") {
          for (var U = Ee.stack.split(`
`), me = O.stack.split(`
`), le = U.length - 1, fe = me.length - 1; le >= 1 && fe >= 0 && U[le] !== me[fe]; )
            fe--;
          for (; le >= 1 && fe >= 0; le--, fe--)
            if (U[le] !== me[fe]) {
              if (le !== 1 || fe !== 1)
                do
                  if (le--, fe--, fe < 0 || U[le] !== me[fe]) {
                    var Oe = `
` + U[le].replace(" at new ", " at ");
                    return t.displayName && Oe.includes("<anonymous>") && (Oe = Oe.replace("<anonymous>", t.displayName)), typeof t == "function" && q.set(t, Oe), Oe;
                  }
                while (le >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        L = !1, F.current = ne, $(), Error.prepareStackTrace = Z;
      }
      var He = t ? t.displayName || t.name : "", We = He ? I(He) : "";
      return typeof t == "function" && q.set(t, We), We;
    }
    function be(t, c, _) {
      return b(t, !1);
    }
    function De(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function Me(t, c, _) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return b(t, De(t));
      if (typeof t == "string")
        return I(t);
      switch (t) {
        case A:
          return I("Suspense");
        case R:
          return I("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return be(t.render);
          case g:
            return Me(t.type, c, _);
          case W: {
            var O = t, Z = O._payload, ne = O._init;
            try {
              return Me(ne(Z), c, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, dr = {}, s = B.ReactDebugCurrentFrame;
    function o(t) {
      if (t) {
        var c = t._owner, _ = Me(t.type, t._source, c ? c.type : null);
        s.setExtraStackFrame(_);
      } else
        s.setExtraStackFrame(null);
    }
    function l(t, c, _, O, Z) {
      {
        var ne = Function.call.bind(Ye);
        for (var H in t)
          if (ne(t, H)) {
            var U = void 0;
            try {
              if (typeof t[H] != "function") {
                var me = Error((O || "React class") + ": " + _ + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              U = t[H](c, H, O, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              U = le;
            }
            U && !(U instanceof Error) && (o(Z), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", _, H, typeof U), o(null)), U instanceof Error && !(U.message in dr) && (dr[U.message] = !0, o(Z), x("Failed %s type: %s", _, U.message), o(null));
          }
      }
    }
    var m = Array.isArray;
    function h(t) {
      return m(t);
    }
    function p(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, _ = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return _;
      }
    }
    function S(t) {
      try {
        return J(t), !1;
      } catch {
        return !0;
      }
    }
    function J(t) {
      return "" + t;
    }
    function ue(t) {
      if (S(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", p(t)), J(t);
    }
    var ye = B.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, Be, Ue;
    Ue = {};
    function yr(t) {
      if (Ye.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function nr(t) {
      if (Ye.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function vr(t, c) {
      if (typeof t.ref == "string" && ye.current && c && ye.current.stateNode !== c) {
        var _ = C(ye.current.type);
        Ue[_] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(ye.current.type), t.ref), Ue[_] = !0);
      }
    }
    function sr(t, c) {
      {
        var _ = function() {
          tr || (tr = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        _.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function xt(t, c) {
      {
        var _ = function() {
          Be || (Be = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        _.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var St = function(t, c, _, O, Z, ne, H) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: _,
        props: H,
        // Record the component responsible for creating this element.
        _owner: ne
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function wt(t, c, _, O, Z) {
      {
        var ne, H = {}, U = null, me = null;
        _ !== void 0 && (ue(_), U = "" + _), nr(c) && (ue(c.key), U = "" + c.key), yr(c) && (me = c.ref, vr(c, Z));
        for (ne in c)
          Ye.call(c, ne) && !qe.hasOwnProperty(ne) && (H[ne] = c[ne]);
        if (t && t.defaultProps) {
          var le = t.defaultProps;
          for (ne in le)
            H[ne] === void 0 && (H[ne] = le[ne]);
        }
        if (U || me) {
          var fe = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          U && sr(H, fe), me && xt(H, fe);
        }
        return St(t, U, me, Z, O, ye.current, H);
      }
    }
    var pr = B.ReactCurrentOwner, Ir = B.ReactDebugCurrentFrame;
    function ze(t) {
      if (t) {
        var c = t._owner, _ = Me(t.type, t._source, c ? c.type : null);
        Ir.setExtraStackFrame(_);
      } else
        Ir.setExtraStackFrame(null);
    }
    var hr;
    hr = !1;
    function gr(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function Mr() {
      {
        if (pr.current) {
          var t = C(pr.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function At(t) {
      return "";
    }
    var qr = {};
    function Ot(t) {
      {
        var c = Mr();
        if (!c) {
          var _ = typeof t == "string" ? t : t.displayName || t.name;
          _ && (c = `

Check the top-level render call using <` + _ + ">.");
        }
        return c;
      }
    }
    function $r(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var _ = Ot(c);
        if (qr[_])
          return;
        qr[_] = !0;
        var O = "";
        t && t._owner && t._owner !== pr.current && (O = " It was passed a child from " + C(t._owner.type) + "."), ze(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, O), ze(null);
      }
    }
    function Lr(t, c) {
      {
        if (typeof t != "object")
          return;
        if (h(t))
          for (var _ = 0; _ < t.length; _++) {
            var O = t[_];
            gr(O) && $r(O, c);
          }
        else if (gr(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var Z = N(t);
          if (typeof Z == "function" && Z !== t.entries)
            for (var ne = Z.call(t), H; !(H = ne.next()).done; )
              gr(H.value) && $r(H.value, c);
        }
      }
    }
    function Ct(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var _;
        if (typeof c == "function")
          _ = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === g))
          _ = c.propTypes;
        else
          return;
        if (_) {
          var O = C(c);
          l(_, t.props, "prop", O, t);
        } else if (c.PropTypes !== void 0 && !hr) {
          hr = !0;
          var Z = C(c);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pt(t) {
      {
        for (var c = Object.keys(t.props), _ = 0; _ < c.length; _++) {
          var O = c[_];
          if (O !== "children" && O !== "key") {
            ze(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), ze(null);
            break;
          }
        }
        t.ref !== null && (ze(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), ze(null));
      }
    }
    var Ur = {};
    function Wr(t, c, _, O, Z, ne) {
      {
        var H = he(t);
        if (!H) {
          var U = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = At();
          me ? U += me : U += Mr();
          var le;
          t === null ? le = "null" : h(t) ? le = "array" : t !== void 0 && t.$$typeof === n ? (le = "<" + (C(t.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : le = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, U);
        }
        var fe = wt(t, c, _, Z, ne);
        if (fe == null)
          return fe;
        if (H) {
          var Oe = c.children;
          if (Oe !== void 0)
            if (O)
              if (h(Oe)) {
                for (var He = 0; He < Oe.length; He++)
                  Lr(Oe[He], t);
                Object.freeze && Object.freeze(Oe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Lr(Oe, t);
        }
        if (Ye.call(c, "key")) {
          var We = C(t), Ee = Object.keys(c).filter(function(It) {
            return It !== "key";
          }), br = Ee.length > 0 ? "{key: someKey, " + Ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ur[We + br]) {
            var Vt = Ee.length > 0 ? "{" + Ee.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, br, We, Vt, We), Ur[We + br] = !0;
          }
        }
        return t === i ? Pt(fe) : Ct(fe), fe;
      }
    }
    function Ft(t, c, _) {
      return Wr(t, c, _, !0);
    }
    function jt(t, c, _) {
      return Wr(t, c, _, !1);
    }
    var kt = jt, Dt = Ft;
    Xe.Fragment = i, Xe.jsx = kt, Xe.jsxs = Dt;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? Cr.exports = $t() : Cr.exports = Lt();
var G = Cr.exports, Pr = { exports: {} }, ir = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Br;
function Ut() {
  if (Br)
    return Q;
  Br = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, u = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, y = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, A = e ? Symbol.for("react.concurrent_mode") : 60111, R = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, W = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, K = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function re(v) {
    if (typeof v == "object" && v !== null) {
      var ge = v.$$typeof;
      switch (ge) {
        case n:
          switch (v = v.type, v) {
            case w:
            case A:
            case i:
            case a:
            case u:
            case g:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case y:
                case R:
                case K:
                case Y:
                case d:
                  return v;
                default:
                  return ge;
              }
          }
        case r:
          return ge;
      }
    }
  }
  function X(v) {
    return re(v) === A;
  }
  return Q.AsyncMode = w, Q.ConcurrentMode = A, Q.ContextConsumer = y, Q.ContextProvider = d, Q.Element = n, Q.ForwardRef = R, Q.Fragment = i, Q.Lazy = K, Q.Memo = Y, Q.Portal = r, Q.Profiler = a, Q.StrictMode = u, Q.Suspense = g, Q.isAsyncMode = function(v) {
    return X(v) || re(v) === w;
  }, Q.isConcurrentMode = X, Q.isContextConsumer = function(v) {
    return re(v) === y;
  }, Q.isContextProvider = function(v) {
    return re(v) === d;
  }, Q.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === n;
  }, Q.isForwardRef = function(v) {
    return re(v) === R;
  }, Q.isFragment = function(v) {
    return re(v) === i;
  }, Q.isLazy = function(v) {
    return re(v) === K;
  }, Q.isMemo = function(v) {
    return re(v) === Y;
  }, Q.isPortal = function(v) {
    return re(v) === r;
  }, Q.isProfiler = function(v) {
    return re(v) === a;
  }, Q.isStrictMode = function(v) {
    return re(v) === u;
  }, Q.isSuspense = function(v) {
    return re(v) === g;
  }, Q.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === i || v === A || v === a || v === u || v === g || v === W || typeof v == "object" && v !== null && (v.$$typeof === K || v.$$typeof === Y || v.$$typeof === d || v.$$typeof === y || v.$$typeof === R || v.$$typeof === N || v.$$typeof === B || v.$$typeof === x || v.$$typeof === M);
  }, Q.typeOf = re, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function Wt() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, u = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, y = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, A = e ? Symbol.for("react.concurrent_mode") : 60111, R = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, W = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, K = e ? Symbol.for("react.lazy") : 60116, M = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, B = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function re(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === i || b === A || b === a || b === u || b === g || b === W || typeof b == "object" && b !== null && (b.$$typeof === K || b.$$typeof === Y || b.$$typeof === d || b.$$typeof === y || b.$$typeof === R || b.$$typeof === N || b.$$typeof === B || b.$$typeof === x || b.$$typeof === M);
    }
    function X(b) {
      if (typeof b == "object" && b !== null) {
        var be = b.$$typeof;
        switch (be) {
          case n:
            var De = b.type;
            switch (De) {
              case w:
              case A:
              case i:
              case a:
              case u:
              case g:
                return De;
              default:
                var Me = De && De.$$typeof;
                switch (Me) {
                  case y:
                  case R:
                  case K:
                  case Y:
                  case d:
                    return Me;
                  default:
                    return be;
                }
            }
          case r:
            return be;
        }
      }
    }
    var v = w, ge = A, je = y, Te = d, xe = n, he = R, Pe = i, j = K, C = Y, z = r, se = a, ie = u, oe = g, Se = !1;
    function Ae(b) {
      return Se || (Se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(b) || X(b) === w;
    }
    function f(b) {
      return X(b) === A;
    }
    function E(b) {
      return X(b) === y;
    }
    function D(b) {
      return X(b) === d;
    }
    function V(b) {
      return typeof b == "object" && b !== null && b.$$typeof === n;
    }
    function P(b) {
      return X(b) === R;
    }
    function $(b) {
      return X(b) === i;
    }
    function F(b) {
      return X(b) === K;
    }
    function k(b) {
      return X(b) === Y;
    }
    function I(b) {
      return X(b) === r;
    }
    function L(b) {
      return X(b) === a;
    }
    function q(b) {
      return X(b) === u;
    }
    function de(b) {
      return X(b) === g;
    }
    ee.AsyncMode = v, ee.ConcurrentMode = ge, ee.ContextConsumer = je, ee.ContextProvider = Te, ee.Element = xe, ee.ForwardRef = he, ee.Fragment = Pe, ee.Lazy = j, ee.Memo = C, ee.Portal = z, ee.Profiler = se, ee.StrictMode = ie, ee.Suspense = oe, ee.isAsyncMode = Ae, ee.isConcurrentMode = f, ee.isContextConsumer = E, ee.isContextProvider = D, ee.isElement = V, ee.isForwardRef = P, ee.isFragment = $, ee.isLazy = F, ee.isMemo = k, ee.isPortal = I, ee.isProfiler = L, ee.isStrictMode = q, ee.isSuspense = de, ee.isValidElementType = re, ee.typeOf = X;
  }()), ee;
}
var Hr;
function lt() {
  return Hr || (Hr = 1, process.env.NODE_ENV === "production" ? ir.exports = Ut() : ir.exports = Wt()), ir.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var mr, Jr;
function Nt() {
  if (Jr)
    return mr;
  Jr = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function i(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var d = {}, y = 0; y < 10; y++)
        d["_" + String.fromCharCode(y)] = y;
      var w = Object.getOwnPropertyNames(d).map(function(R) {
        return d[R];
      });
      if (w.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(R) {
        A[R] = R;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return mr = u() ? Object.assign : function(a, d) {
    for (var y, w = i(a), A, R = 1; R < arguments.length; R++) {
      y = Object(arguments[R]);
      for (var g in y)
        n.call(y, g) && (w[g] = y[g]);
      if (e) {
        A = e(y);
        for (var W = 0; W < A.length; W++)
          r.call(y, A[W]) && (w[A[W]] = y[A[W]]);
      }
    }
    return w;
  }, mr;
}
var _r, Kr;
function Fr() {
  if (Kr)
    return _r;
  Kr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _r = e, _r;
}
var Er, Gr;
function ct() {
  return Gr || (Gr = 1, Er = Function.call.bind(Object.prototype.hasOwnProperty)), Er;
}
var Rr, Xr;
function Yt() {
  if (Xr)
    return Rr;
  Xr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = Fr(), r = {}, i = ct();
    e = function(a) {
      var d = "Warning: " + a;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function u(a, d, y, w, A) {
    if (process.env.NODE_ENV !== "production") {
      for (var R in a)
        if (i(a, R)) {
          var g;
          try {
            if (typeof a[R] != "function") {
              var W = Error(
                (w || "React class") + ": " + y + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw W.name = "Invariant Violation", W;
            }
            g = a[R](d, R, w, y, null, n);
          } catch (K) {
            g = K;
          }
          if (g && !(g instanceof Error) && e(
            (w || "React class") + ": type specification of " + y + " `" + R + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var Y = A ? A() : "";
            e(
              "Failed " + y + " type: " + g.message + (Y ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Rr = u, Rr;
}
var Tr, Zr;
function Bt() {
  if (Zr)
    return Tr;
  Zr = 1;
  var e = lt(), n = Nt(), r = Fr(), i = ct(), u = Yt(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(y) {
    var w = "Warning: " + y;
    typeof console < "u" && console.error(w);
    try {
      throw new Error(w);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return Tr = function(y, w) {
    var A = typeof Symbol == "function" && Symbol.iterator, R = "@@iterator";
    function g(f) {
      var E = f && (A && f[A] || f[R]);
      if (typeof E == "function")
        return E;
    }
    var W = "<<anonymous>>", Y = {
      array: B("array"),
      bigint: B("bigint"),
      bool: B("boolean"),
      func: B("function"),
      number: B("number"),
      object: B("object"),
      string: B("string"),
      symbol: B("symbol"),
      any: x(),
      arrayOf: re,
      element: X(),
      elementType: v(),
      instanceOf: ge,
      node: he(),
      objectOf: Te,
      oneOf: je,
      oneOfType: xe,
      shape: j,
      exact: C
    };
    function K(f, E) {
      return f === E ? f !== 0 || 1 / f === 1 / E : f !== f && E !== E;
    }
    function M(f, E) {
      this.message = f, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function N(f) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, D = 0;
      function V($, F, k, I, L, q, de) {
        if (I = I || W, q = q || k, de !== r) {
          if (w) {
            var b = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw b.name = "Invariant Violation", b;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = I + ":" + k;
            !E[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[be] = !0, D++);
          }
        }
        return F[k] == null ? $ ? F[k] === null ? new M("The " + L + " `" + q + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new M("The " + L + " `" + q + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : f(F, k, I, L, q);
      }
      var P = V.bind(null, !1);
      return P.isRequired = V.bind(null, !0), P;
    }
    function B(f) {
      function E(D, V, P, $, F, k) {
        var I = D[V], L = ie(I);
        if (L !== f) {
          var q = oe(I);
          return new M(
            "Invalid " + $ + " `" + F + "` of type " + ("`" + q + "` supplied to `" + P + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return N(E);
    }
    function x() {
      return N(d);
    }
    function re(f) {
      function E(D, V, P, $, F) {
        if (typeof f != "function")
          return new M("Property `" + F + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var k = D[V];
        if (!Array.isArray(k)) {
          var I = ie(k);
          return new M("Invalid " + $ + " `" + F + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected an array."));
        }
        for (var L = 0; L < k.length; L++) {
          var q = f(k, L, P, $, F + "[" + L + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return N(E);
    }
    function X() {
      function f(E, D, V, P, $) {
        var F = E[D];
        if (!y(F)) {
          var k = ie(F);
          return new M("Invalid " + P + " `" + $ + "` of type " + ("`" + k + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(f);
    }
    function v() {
      function f(E, D, V, P, $) {
        var F = E[D];
        if (!e.isValidElementType(F)) {
          var k = ie(F);
          return new M("Invalid " + P + " `" + $ + "` of type " + ("`" + k + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(f);
    }
    function ge(f) {
      function E(D, V, P, $, F) {
        if (!(D[V] instanceof f)) {
          var k = f.name || W, I = Ae(D[V]);
          return new M("Invalid " + $ + " `" + F + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return N(E);
    }
    function je(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), d;
      function E(D, V, P, $, F) {
        for (var k = D[V], I = 0; I < f.length; I++)
          if (K(k, f[I]))
            return null;
        var L = JSON.stringify(f, function(de, b) {
          var be = oe(b);
          return be === "symbol" ? String(b) : b;
        });
        return new M("Invalid " + $ + " `" + F + "` of value `" + String(k) + "` " + ("supplied to `" + P + "`, expected one of " + L + "."));
      }
      return N(E);
    }
    function Te(f) {
      function E(D, V, P, $, F) {
        if (typeof f != "function")
          return new M("Property `" + F + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var k = D[V], I = ie(k);
        if (I !== "object")
          return new M("Invalid " + $ + " `" + F + "` of type " + ("`" + I + "` supplied to `" + P + "`, expected an object."));
        for (var L in k)
          if (i(k, L)) {
            var q = f(k, L, P, $, F + "." + L, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return N(E);
    }
    function xe(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var E = 0; E < f.length; E++) {
        var D = f[E];
        if (typeof D != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Se(D) + " at index " + E + "."
          ), d;
      }
      function V(P, $, F, k, I) {
        for (var L = [], q = 0; q < f.length; q++) {
          var de = f[q], b = de(P, $, F, k, I, r);
          if (b == null)
            return null;
          b.data && i(b.data, "expectedType") && L.push(b.data.expectedType);
        }
        var be = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new M("Invalid " + k + " `" + I + "` supplied to " + ("`" + F + "`" + be + "."));
      }
      return N(V);
    }
    function he() {
      function f(E, D, V, P, $) {
        return z(E[D]) ? null : new M("Invalid " + P + " `" + $ + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return N(f);
    }
    function Pe(f, E, D, V, P) {
      return new M(
        (f || "React class") + ": " + E + " type `" + D + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function j(f) {
      function E(D, V, P, $, F) {
        var k = D[V], I = ie(k);
        if (I !== "object")
          return new M("Invalid " + $ + " `" + F + "` of type `" + I + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var L in f) {
          var q = f[L];
          if (typeof q != "function")
            return Pe(P, $, F, L, oe(q));
          var de = q(k, L, P, $, F + "." + L, r);
          if (de)
            return de;
        }
        return null;
      }
      return N(E);
    }
    function C(f) {
      function E(D, V, P, $, F) {
        var k = D[V], I = ie(k);
        if (I !== "object")
          return new M("Invalid " + $ + " `" + F + "` of type `" + I + "` " + ("supplied to `" + P + "`, expected `object`."));
        var L = n({}, D[V], f);
        for (var q in L) {
          var de = f[q];
          if (i(f, q) && typeof de != "function")
            return Pe(P, $, F, q, oe(de));
          if (!de)
            return new M(
              "Invalid " + $ + " `" + F + "` key `" + q + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(D[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var b = de(k, q, P, $, F + "." + q, r);
          if (b)
            return b;
        }
        return null;
      }
      return N(E);
    }
    function z(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(z);
          if (f === null || y(f))
            return !0;
          var E = g(f);
          if (E) {
            var D = E.call(f), V;
            if (E !== f.entries) {
              for (; !(V = D.next()).done; )
                if (!z(V.value))
                  return !1;
            } else
              for (; !(V = D.next()).done; ) {
                var P = V.value;
                if (P && !z(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(f, E) {
      return f === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function ie(f) {
      var E = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : se(E, f) ? "symbol" : E;
    }
    function oe(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var E = ie(f);
      if (E === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function Se(f) {
      var E = oe(f);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function Ae(f) {
      return !f.constructor || !f.constructor.name ? W : f.constructor.name;
    }
    return Y.checkPropTypes = u, Y.resetWarningCache = u.resetWarningCache, Y.PropTypes = Y, Y;
  }, Tr;
}
var xr, Qr;
function zt() {
  if (Qr)
    return xr;
  Qr = 1;
  var e = Fr();
  function n() {
  }
  function r() {
  }
  return r.resetWarningCache = n, xr = function() {
    function i(d, y, w, A, R, g) {
      if (g !== e) {
        var W = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw W.name = "Invariant Violation", W;
      }
    }
    i.isRequired = i;
    function u() {
      return i;
    }
    var a = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: u,
      element: i,
      elementType: i,
      instanceOf: u,
      node: i,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: r,
      resetWarningCache: n
    };
    return a.PropTypes = a, a;
  }, xr;
}
if (process.env.NODE_ENV !== "production") {
  var Ht = lt(), Jt = !0;
  Pr.exports = Bt()(Ht.isElement, Jt);
} else
  Pr.exports = zt()();
var Kt = Pr.exports;
const te = /* @__PURE__ */ qt(Kt);
var er = (e) => e.type === "checkbox", Ke = (e) => e instanceof Date, _e = (e) => e == null;
const ft = (e) => typeof e == "object";
var pe = (e) => !_e(e) && !Array.isArray(e) && ft(e) && !Ke(e), Gt = (e) => pe(e) && e.target ? er(e.target) ? e.target.checked : e.target.value : e, Xt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Zt = (e, n) => e.has(Xt(n)), Qt = (e) => {
  const n = e.constructor && e.constructor.prototype;
  return pe(n) && n.hasOwnProperty("isPrototypeOf");
}, jr = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ce(e) {
  let n;
  const r = Array.isArray(e);
  if (e instanceof Date)
    n = new Date(e);
  else if (e instanceof Set)
    n = new Set(e);
  else if (!(jr && (e instanceof Blob || e instanceof FileList)) && (r || pe(e)))
    if (n = r ? [] : {}, !r && !Qt(e))
      n = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (n[i] = Ce(e[i]));
  else
    return e;
  return n;
}
var rr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], ce = (e) => e === void 0, T = (e, n, r) => {
  if (!n || !pe(e))
    return r;
  const i = rr(n.split(/[,[\].]+?/)).reduce((u, a) => _e(u) ? u : u[a], e);
  return ce(i) || i === e ? ce(e[n]) ? r : e[n] : i;
}, $e = (e) => typeof e == "boolean", kr = (e) => /^\w*$/.test(e), dt = (e) => rr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), ae = (e, n, r) => {
  let i = -1;
  const u = kr(n) ? [n] : dt(n), a = u.length, d = a - 1;
  for (; ++i < a; ) {
    const y = u[i];
    let w = r;
    if (i !== d) {
      const A = e[y];
      w = pe(A) || Array.isArray(A) ? A : isNaN(+u[i + 1]) ? {} : [];
    }
    if (y === "__proto__")
      return;
    e[y] = w, e = e[y];
  }
  return e;
};
const et = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Fe = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ve = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
Re.createContext(null);
var en = (e, n, r, i = !0) => {
  const u = {
    defaultValues: n._defaultValues
  };
  for (const a in e)
    Object.defineProperty(u, a, {
      get: () => {
        const d = a;
        return n._proxyFormState[d] !== Fe.all && (n._proxyFormState[d] = !i || Fe.all), e[d];
      }
    });
  return u;
}, we = (e) => pe(e) && !Object.keys(e).length, rn = (e, n, r, i) => {
  r(e);
  const { name: u, ...a } = e;
  return we(a) || Object.keys(a).length >= Object.keys(n).length || Object.keys(a).find((d) => n[d] === Fe.all);
}, Sr = (e) => Array.isArray(e) ? e : [e];
function tn(e) {
  const n = Re.useRef(e);
  n.current = e, Re.useEffect(() => {
    const r = !e.disabled && n.current.subject && n.current.subject.subscribe({
      next: n.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
var ke = (e) => typeof e == "string", nn = (e, n, r, i, u) => ke(e) ? (i && n.watch.add(e), T(r, e, u)) : Array.isArray(e) ? e.map((a) => (i && n.watch.add(a), T(r, a))) : (i && (n.watchAll = !0), r), sn = (e, n, r, i, u) => n ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [i]: u || !0
  }
} : {}, rt = (e) => ({
  isOnSubmit: !e || e === Fe.onSubmit,
  isOnBlur: e === Fe.onBlur,
  isOnChange: e === Fe.onChange,
  isOnAll: e === Fe.all,
  isOnTouch: e === Fe.onTouched
}), tt = (e, n, r) => !r && (n.watchAll || n.watch.has(e) || [...n.watch].some((i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length))));
const Qe = (e, n, r, i) => {
  for (const u of r || Object.keys(e)) {
    const a = T(e, u);
    if (a) {
      const { _f: d, ...y } = a;
      if (d) {
        if (d.refs && d.refs[0] && n(d.refs[0], u) && !i)
          break;
        if (d.ref && n(d.ref, d.name) && !i)
          break;
        Qe(y, n);
      } else
        pe(y) && Qe(y, n);
    }
  }
};
var an = (e, n, r) => {
  const i = rr(T(e, r));
  return ae(i, "root", n[r]), ae(e, r, i), e;
}, Dr = (e) => e.type === "file", Le = (e) => typeof e == "function", ur = (e) => {
  if (!jr)
    return !1;
  const n = e ? e.ownerDocument : 0;
  return e instanceof (n && n.defaultView ? n.defaultView.HTMLElement : HTMLElement);
}, or = (e) => ke(e), Vr = (e) => e.type === "radio", lr = (e) => e instanceof RegExp;
const nt = {
  value: !1,
  isValid: !1
}, st = { value: !0, isValid: !0 };
var yt = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const n = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: n, isValid: !!n.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !ce(e[0].attributes.value) ? ce(e[0].value) || e[0].value === "" ? st : { value: e[0].value, isValid: !0 } : st
    ) : nt;
  }
  return nt;
};
const it = {
  isValid: !1,
  value: null
};
var vt = (e) => Array.isArray(e) ? e.reduce((n, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : n, it) : it;
function at(e, n, r = "validate") {
  if (or(e) || Array.isArray(e) && e.every(or) || $e(e) && !e)
    return {
      type: r,
      message: or(e) ? e : "",
      ref: n
    };
}
var Je = (e) => pe(e) && !lr(e) ? e : {
  value: e,
  message: ""
}, ot = async (e, n, r, i, u) => {
  const { ref: a, refs: d, required: y, maxLength: w, minLength: A, min: R, max: g, pattern: W, validate: Y, name: K, valueAsNumber: M, mount: N, disabled: B } = e._f, x = T(n, K);
  if (!N || B)
    return {};
  const re = d ? d[0] : a, X = (j) => {
    i && re.reportValidity && (re.setCustomValidity($e(j) ? "" : j || ""), re.reportValidity());
  }, v = {}, ge = Vr(a), je = er(a), Te = ge || je, xe = (M || Dr(a)) && ce(a.value) && ce(x) || ur(a) && a.value === "" || x === "" || Array.isArray(x) && !x.length, he = sn.bind(null, K, r, v), Pe = (j, C, z, se = Ve.maxLength, ie = Ve.minLength) => {
    const oe = j ? C : z;
    v[K] = {
      type: j ? se : ie,
      message: oe,
      ref: a,
      ...he(j ? se : ie, oe)
    };
  };
  if (u ? !Array.isArray(x) || !x.length : y && (!Te && (xe || _e(x)) || $e(x) && !x || je && !yt(d).isValid || ge && !vt(d).isValid)) {
    const { value: j, message: C } = or(y) ? { value: !!y, message: y } : Je(y);
    if (j && (v[K] = {
      type: Ve.required,
      message: C,
      ref: re,
      ...he(Ve.required, C)
    }, !r))
      return X(C), v;
  }
  if (!xe && (!_e(R) || !_e(g))) {
    let j, C;
    const z = Je(g), se = Je(R);
    if (!_e(x) && !isNaN(x)) {
      const ie = a.valueAsNumber || x && +x;
      _e(z.value) || (j = ie > z.value), _e(se.value) || (C = ie < se.value);
    } else {
      const ie = a.valueAsDate || new Date(x), oe = (f) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + f), Se = a.type == "time", Ae = a.type == "week";
      ke(z.value) && x && (j = Se ? oe(x) > oe(z.value) : Ae ? x > z.value : ie > new Date(z.value)), ke(se.value) && x && (C = Se ? oe(x) < oe(se.value) : Ae ? x < se.value : ie < new Date(se.value));
    }
    if ((j || C) && (Pe(!!j, z.message, se.message, Ve.max, Ve.min), !r))
      return X(v[K].message), v;
  }
  if ((w || A) && !xe && (ke(x) || u && Array.isArray(x))) {
    const j = Je(w), C = Je(A), z = !_e(j.value) && x.length > +j.value, se = !_e(C.value) && x.length < +C.value;
    if ((z || se) && (Pe(z, j.message, C.message), !r))
      return X(v[K].message), v;
  }
  if (W && !xe && ke(x)) {
    const { value: j, message: C } = Je(W);
    if (lr(j) && !x.match(j) && (v[K] = {
      type: Ve.pattern,
      message: C,
      ref: a,
      ...he(Ve.pattern, C)
    }, !r))
      return X(C), v;
  }
  if (Y) {
    if (Le(Y)) {
      const j = await Y(x, n), C = at(j, re);
      if (C && (v[K] = {
        ...C,
        ...he(Ve.validate, C.message)
      }, !r))
        return X(C.message), v;
    } else if (pe(Y)) {
      let j = {};
      for (const C in Y) {
        if (!we(j) && !r)
          break;
        const z = at(await Y[C](x, n), re, C);
        z && (j = {
          ...z,
          ...he(C, z.message)
        }, X(z.message), r && (v[K] = j));
      }
      if (!we(j) && (v[K] = {
        ref: re,
        ...j
      }, !r))
        return v;
    }
  }
  return X(!0), v;
};
function on(e, n) {
  const r = n.slice(0, -1).length;
  let i = 0;
  for (; i < r; )
    e = ce(e) ? i++ : e[n[i++]];
  return e;
}
function un(e) {
  for (const n in e)
    if (e.hasOwnProperty(n) && !ce(e[n]))
      return !1;
  return !0;
}
function ve(e, n) {
  const r = Array.isArray(n) ? n : kr(n) ? [n] : dt(n), i = r.length === 1 ? e : on(e, r), u = r.length - 1, a = r[u];
  return i && delete i[a], u !== 0 && (pe(i) && we(i) || Array.isArray(i) && un(i)) && ve(e, r.slice(0, -1)), e;
}
var wr = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (u) => {
      for (const a of e)
        a.next && a.next(u);
    },
    subscribe: (u) => (e.push(u), {
      unsubscribe: () => {
        e = e.filter((a) => a !== u);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, cr = (e) => _e(e) || !ft(e);
function Ne(e, n) {
  if (cr(e) || cr(n))
    return e === n;
  if (Ke(e) && Ke(n))
    return e.getTime() === n.getTime();
  const r = Object.keys(e), i = Object.keys(n);
  if (r.length !== i.length)
    return !1;
  for (const u of r) {
    const a = e[u];
    if (!i.includes(u))
      return !1;
    if (u !== "ref") {
      const d = n[u];
      if (Ke(a) && Ke(d) || pe(a) && pe(d) || Array.isArray(a) && Array.isArray(d) ? !Ne(a, d) : a !== d)
        return !1;
    }
  }
  return !0;
}
var pt = (e) => e.type === "select-multiple", ln = (e) => Vr(e) || er(e), Ar = (e) => ur(e) && e.isConnected, ht = (e) => {
  for (const n in e)
    if (Le(e[n]))
      return !0;
  return !1;
};
function fr(e, n = {}) {
  const r = Array.isArray(e);
  if (pe(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || pe(e[i]) && !ht(e[i]) ? (n[i] = Array.isArray(e[i]) ? [] : {}, fr(e[i], n[i])) : _e(e[i]) || (n[i] = !0);
  return n;
}
function gt(e, n, r) {
  const i = Array.isArray(e);
  if (pe(e) || i)
    for (const u in e)
      Array.isArray(e[u]) || pe(e[u]) && !ht(e[u]) ? ce(n) || cr(r[u]) ? r[u] = Array.isArray(e[u]) ? fr(e[u], []) : { ...fr(e[u]) } : gt(e[u], _e(n) ? {} : n[u], r[u]) : r[u] = !Ne(e[u], n[u]);
  return r;
}
var ar = (e, n) => gt(e, n, fr(n)), bt = (e, { valueAsNumber: n, valueAsDate: r, setValueAs: i }) => ce(e) ? e : n ? e === "" ? NaN : e && +e : r && ke(e) ? new Date(e) : i ? i(e) : e;
function Or(e) {
  const n = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : n.disabled))
    return Dr(n) ? n.files : Vr(n) ? vt(e.refs).value : pt(n) ? [...n.selectedOptions].map(({ value: r }) => r) : er(n) ? yt(e.refs).value : bt(ce(n.value) ? e.ref.value : n.value, e);
}
var cn = (e, n, r, i) => {
  const u = {};
  for (const a of e) {
    const d = T(n, a);
    d && ae(u, a, d._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: u,
    shouldUseNativeValidation: i
  };
}, Ze = (e) => ce(e) ? e : lr(e) ? e.source : pe(e) ? lr(e.value) ? e.value.source : e.value : e, fn = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function ut(e, n, r) {
  const i = T(e, r);
  if (i || kr(r))
    return {
      error: i,
      name: r
    };
  const u = r.split(".");
  for (; u.length; ) {
    const a = u.join("."), d = T(n, a), y = T(e, a);
    if (d && !Array.isArray(d) && r !== a)
      return { name: r };
    if (y && y.type)
      return {
        name: a,
        error: y
      };
    u.pop();
  }
  return {
    name: r
  };
}
var dn = (e, n, r, i, u) => u.isOnAll ? !1 : !r && u.isOnTouch ? !(n || e) : (r ? i.isOnBlur : u.isOnBlur) ? !e : (r ? i.isOnChange : u.isOnChange) ? e : !0, yn = (e, n) => !rr(T(e, n)).length && ve(e, n);
const vn = {
  mode: Fe.onSubmit,
  reValidateMode: Fe.onChange,
  shouldFocusError: !0
};
function pn(e = {}) {
  let n = {
    ...vn,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Le(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: n.errors || {},
    disabled: n.disabled || !1
  }, i = {}, u = pe(n.defaultValues) || pe(n.values) ? Ce(n.defaultValues || n.values) || {} : {}, a = n.shouldUnregister ? {} : Ce(u), d = {
    action: !1,
    mount: !1,
    watch: !1
  }, y = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, w, A = 0;
  const R = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, g = {
    values: wr(),
    array: wr(),
    state: wr()
  }, W = rt(n.mode), Y = rt(n.reValidateMode), K = n.criteriaMode === Fe.all, M = (s) => (o) => {
    clearTimeout(A), A = setTimeout(s, o);
  }, N = async (s) => {
    if (R.isValid || s) {
      const o = n.resolver ? we((await Te()).errors) : await he(i, !0);
      o !== r.isValid && g.state.next({
        isValid: o
      });
    }
  }, B = (s, o) => {
    (R.isValidating || R.validatingFields) && ((s || Array.from(y.mount)).forEach((l) => {
      l && (o ? ae(r.validatingFields, l, o) : ve(r.validatingFields, l));
    }), g.state.next({
      validatingFields: r.validatingFields,
      isValidating: !we(r.validatingFields)
    }));
  }, x = (s, o = [], l, m, h = !0, p = !0) => {
    if (m && l) {
      if (d.action = !0, p && Array.isArray(T(i, s))) {
        const S = l(T(i, s), m.argA, m.argB);
        h && ae(i, s, S);
      }
      if (p && Array.isArray(T(r.errors, s))) {
        const S = l(T(r.errors, s), m.argA, m.argB);
        h && ae(r.errors, s, S), yn(r.errors, s);
      }
      if (R.touchedFields && p && Array.isArray(T(r.touchedFields, s))) {
        const S = l(T(r.touchedFields, s), m.argA, m.argB);
        h && ae(r.touchedFields, s, S);
      }
      R.dirtyFields && (r.dirtyFields = ar(u, a)), g.state.next({
        name: s,
        isDirty: j(s, o),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      ae(a, s, o);
  }, re = (s, o) => {
    ae(r.errors, s, o), g.state.next({
      errors: r.errors
    });
  }, X = (s) => {
    r.errors = s, g.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, v = (s, o, l, m) => {
    const h = T(i, s);
    if (h) {
      const p = T(a, s, ce(l) ? T(u, s) : l);
      ce(p) || m && m.defaultChecked || o ? ae(a, s, o ? p : Or(h._f)) : se(s, p), d.mount && N();
    }
  }, ge = (s, o, l, m, h) => {
    let p = !1, S = !1;
    const J = {
      name: s
    }, ue = !!(T(i, s) && T(i, s)._f.disabled);
    if (!l || m) {
      R.isDirty && (S = r.isDirty, r.isDirty = J.isDirty = j(), p = S !== J.isDirty);
      const ye = ue || Ne(T(u, s), o);
      S = !!(!ue && T(r.dirtyFields, s)), ye || ue ? ve(r.dirtyFields, s) : ae(r.dirtyFields, s, !0), J.dirtyFields = r.dirtyFields, p = p || R.dirtyFields && S !== !ye;
    }
    if (l) {
      const ye = T(r.touchedFields, s);
      ye || (ae(r.touchedFields, s, l), J.touchedFields = r.touchedFields, p = p || R.touchedFields && ye !== l);
    }
    return p && h && g.state.next(J), p ? J : {};
  }, je = (s, o, l, m) => {
    const h = T(r.errors, s), p = R.isValid && $e(o) && r.isValid !== o;
    if (e.delayError && l ? (w = M(() => re(s, l)), w(e.delayError)) : (clearTimeout(A), w = null, l ? ae(r.errors, s, l) : ve(r.errors, s)), (l ? !Ne(h, l) : h) || !we(m) || p) {
      const S = {
        ...m,
        ...p && $e(o) ? { isValid: o } : {},
        errors: r.errors,
        name: s
      };
      r = {
        ...r,
        ...S
      }, g.state.next(S);
    }
  }, Te = async (s) => {
    B(s, !0);
    const o = await n.resolver(a, n.context, cn(s || y.mount, i, n.criteriaMode, n.shouldUseNativeValidation));
    return B(s), o;
  }, xe = async (s) => {
    const { errors: o } = await Te(s);
    if (s)
      for (const l of s) {
        const m = T(o, l);
        m ? ae(r.errors, l, m) : ve(r.errors, l);
      }
    else
      r.errors = o;
    return o;
  }, he = async (s, o, l = {
    valid: !0
  }) => {
    for (const m in s) {
      const h = s[m];
      if (h) {
        const { _f: p, ...S } = h;
        if (p) {
          const J = y.array.has(p.name);
          B([m], !0);
          const ue = await ot(h, a, K, n.shouldUseNativeValidation && !o, J);
          if (B([m]), ue[p.name] && (l.valid = !1, o))
            break;
          !o && (T(ue, p.name) ? J ? an(r.errors, ue, p.name) : ae(r.errors, p.name, ue[p.name]) : ve(r.errors, p.name));
        }
        S && await he(S, o, l);
      }
    }
    return l.valid;
  }, Pe = () => {
    for (const s of y.unMount) {
      const o = T(i, s);
      o && (o._f.refs ? o._f.refs.every((l) => !Ar(l)) : !Ar(o._f.ref)) && F(s);
    }
    y.unMount = /* @__PURE__ */ new Set();
  }, j = (s, o) => (s && o && ae(a, s, o), !Ne(E(), u)), C = (s, o, l) => nn(s, y, {
    ...d.mount ? a : ce(o) ? u : ke(s) ? { [s]: o } : o
  }, l, o), z = (s) => rr(T(d.mount ? a : u, s, e.shouldUnregister ? T(u, s, []) : [])), se = (s, o, l = {}) => {
    const m = T(i, s);
    let h = o;
    if (m) {
      const p = m._f;
      p && (!p.disabled && ae(a, s, bt(o, p)), h = ur(p.ref) && _e(o) ? "" : o, pt(p.ref) ? [...p.ref.options].forEach((S) => S.selected = h.includes(S.value)) : p.refs ? er(p.ref) ? p.refs.length > 1 ? p.refs.forEach((S) => (!S.defaultChecked || !S.disabled) && (S.checked = Array.isArray(h) ? !!h.find((J) => J === S.value) : h === S.value)) : p.refs[0] && (p.refs[0].checked = !!h) : p.refs.forEach((S) => S.checked = S.value === h) : Dr(p.ref) ? p.ref.value = "" : (p.ref.value = h, p.ref.type || g.values.next({
        name: s,
        values: { ...a }
      })));
    }
    (l.shouldDirty || l.shouldTouch) && ge(s, h, l.shouldTouch, l.shouldDirty, !0), l.shouldValidate && f(s);
  }, ie = (s, o, l) => {
    for (const m in o) {
      const h = o[m], p = `${s}.${m}`, S = T(i, p);
      (y.array.has(s) || !cr(h) || S && !S._f) && !Ke(h) ? ie(p, h, l) : se(p, h, l);
    }
  }, oe = (s, o, l = {}) => {
    const m = T(i, s), h = y.array.has(s), p = Ce(o);
    ae(a, s, p), h ? (g.array.next({
      name: s,
      values: { ...a }
    }), (R.isDirty || R.dirtyFields) && l.shouldDirty && g.state.next({
      name: s,
      dirtyFields: ar(u, a),
      isDirty: j(s, p)
    })) : m && !m._f && !_e(p) ? ie(s, p, l) : se(s, p, l), tt(s, y) && g.state.next({ ...r }), g.values.next({
      name: d.mount ? s : void 0,
      values: { ...a }
    });
  }, Se = async (s) => {
    d.mount = !0;
    const o = s.target;
    let l = o.name, m = !0;
    const h = T(i, l), p = () => o.type ? Or(h._f) : Gt(s), S = (J) => {
      m = Number.isNaN(J) || J === T(a, l, J);
    };
    if (h) {
      let J, ue;
      const ye = p(), qe = s.type === et.BLUR || s.type === et.FOCUS_OUT, tr = !fn(h._f) && !n.resolver && !T(r.errors, l) && !h._f.deps || dn(qe, T(r.touchedFields, l), r.isSubmitted, Y, W), Be = tt(l, y, qe);
      ae(a, l, ye), qe ? (h._f.onBlur && h._f.onBlur(s), w && w(0)) : h._f.onChange && h._f.onChange(s);
      const Ue = ge(l, ye, qe, !1), yr = !we(Ue) || Be;
      if (!qe && g.values.next({
        name: l,
        type: s.type,
        values: { ...a }
      }), tr)
        return R.isValid && N(), yr && g.state.next({ name: l, ...Be ? {} : Ue });
      if (!qe && Be && g.state.next({ ...r }), n.resolver) {
        const { errors: nr } = await Te([l]);
        if (S(ye), m) {
          const vr = ut(r.errors, i, l), sr = ut(nr, i, vr.name || l);
          J = sr.error, l = sr.name, ue = we(nr);
        }
      } else
        B([l], !0), J = (await ot(h, a, K, n.shouldUseNativeValidation))[l], B([l]), S(ye), m && (J ? ue = !1 : R.isValid && (ue = await he(i, !0)));
      m && (h._f.deps && f(h._f.deps), je(l, ue, J, Ue));
    }
  }, Ae = (s, o) => {
    if (T(r.errors, o) && s.focus)
      return s.focus(), 1;
  }, f = async (s, o = {}) => {
    let l, m;
    const h = Sr(s);
    if (n.resolver) {
      const p = await xe(ce(s) ? s : h);
      l = we(p), m = s ? !h.some((S) => T(p, S)) : l;
    } else
      s ? (m = (await Promise.all(h.map(async (p) => {
        const S = T(i, p);
        return await he(S && S._f ? { [p]: S } : S);
      }))).every(Boolean), !(!m && !r.isValid) && N()) : m = l = await he(i);
    return g.state.next({
      ...!ke(s) || R.isValid && l !== r.isValid ? {} : { name: s },
      ...n.resolver || !s ? { isValid: l } : {},
      errors: r.errors
    }), o.shouldFocus && !m && Qe(i, Ae, s ? h : y.mount), m;
  }, E = (s) => {
    const o = {
      ...d.mount ? a : u
    };
    return ce(s) ? o : ke(s) ? T(o, s) : s.map((l) => T(o, l));
  }, D = (s, o) => ({
    invalid: !!T((o || r).errors, s),
    isDirty: !!T((o || r).dirtyFields, s),
    isTouched: !!T((o || r).touchedFields, s),
    isValidating: !!T((o || r).validatingFields, s),
    error: T((o || r).errors, s)
  }), V = (s) => {
    s && Sr(s).forEach((o) => ve(r.errors, o)), g.state.next({
      errors: s ? r.errors : {}
    });
  }, P = (s, o, l) => {
    const m = (T(i, s, { _f: {} })._f || {}).ref, h = T(r.errors, s) || {}, { ref: p, message: S, type: J, ...ue } = h;
    ae(r.errors, s, {
      ...ue,
      ...o,
      ref: m
    }), g.state.next({
      name: s,
      errors: r.errors,
      isValid: !1
    }), l && l.shouldFocus && m && m.focus && m.focus();
  }, $ = (s, o) => Le(s) ? g.values.subscribe({
    next: (l) => s(C(void 0, o), l)
  }) : C(s, o, !0), F = (s, o = {}) => {
    for (const l of s ? Sr(s) : y.mount)
      y.mount.delete(l), y.array.delete(l), o.keepValue || (ve(i, l), ve(a, l)), !o.keepError && ve(r.errors, l), !o.keepDirty && ve(r.dirtyFields, l), !o.keepTouched && ve(r.touchedFields, l), !o.keepIsValidating && ve(r.validatingFields, l), !n.shouldUnregister && !o.keepDefaultValue && ve(u, l);
    g.values.next({
      values: { ...a }
    }), g.state.next({
      ...r,
      ...o.keepDirty ? { isDirty: j() } : {}
    }), !o.keepIsValid && N();
  }, k = ({ disabled: s, name: o, field: l, fields: m, value: h }) => {
    if ($e(s) && d.mount || s) {
      const p = s ? void 0 : ce(h) ? Or(l ? l._f : T(m, o)._f) : h;
      ae(a, o, p), ge(o, p, !1, !1, !0);
    }
  }, I = (s, o = {}) => {
    let l = T(i, s);
    const m = $e(o.disabled);
    return ae(i, s, {
      ...l || {},
      _f: {
        ...l && l._f ? l._f : { ref: { name: s } },
        name: s,
        mount: !0,
        ...o
      }
    }), y.mount.add(s), l ? k({
      field: l,
      disabled: o.disabled,
      name: s,
      value: o.value
    }) : v(s, !0, o.value), {
      ...m ? { disabled: o.disabled } : {},
      ...n.progressive ? {
        required: !!o.required,
        min: Ze(o.min),
        max: Ze(o.max),
        minLength: Ze(o.minLength),
        maxLength: Ze(o.maxLength),
        pattern: Ze(o.pattern)
      } : {},
      name: s,
      onChange: Se,
      onBlur: Se,
      ref: (h) => {
        if (h) {
          I(s, o), l = T(i, s);
          const p = ce(h.value) && h.querySelectorAll && h.querySelectorAll("input,select,textarea")[0] || h, S = ln(p), J = l._f.refs || [];
          if (S ? J.find((ue) => ue === p) : p === l._f.ref)
            return;
          ae(i, s, {
            _f: {
              ...l._f,
              ...S ? {
                refs: [
                  ...J.filter(Ar),
                  p,
                  ...Array.isArray(T(u, s)) ? [{}] : []
                ],
                ref: { type: p.type, name: s }
              } : { ref: p }
            }
          }), v(s, !1, void 0, p);
        } else
          l = T(i, s, {}), l._f && (l._f.mount = !1), (n.shouldUnregister || o.shouldUnregister) && !(Zt(y.array, s) && d.action) && y.unMount.add(s);
      }
    };
  }, L = () => n.shouldFocusError && Qe(i, Ae, y.mount), q = (s) => {
    $e(s) && (g.state.next({ disabled: s }), Qe(i, (o, l) => {
      const m = T(i, l);
      m && (o.disabled = m._f.disabled || s, Array.isArray(m._f.refs) && m._f.refs.forEach((h) => {
        h.disabled = m._f.disabled || s;
      }));
    }, 0, !1));
  }, de = (s, o) => async (l) => {
    let m;
    l && (l.preventDefault && l.preventDefault(), l.persist && l.persist());
    let h = Ce(a);
    if (g.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: p, values: S } = await Te();
      r.errors = p, h = S;
    } else
      await he(i);
    if (ve(r.errors, "root"), we(r.errors)) {
      g.state.next({
        errors: {}
      });
      try {
        await s(h, l);
      } catch (p) {
        m = p;
      }
    } else
      o && await o({ ...r.errors }, l), L(), setTimeout(L);
    if (g.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: we(r.errors) && !m,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), m)
      throw m;
  }, b = (s, o = {}) => {
    T(i, s) && (ce(o.defaultValue) ? oe(s, Ce(T(u, s))) : (oe(s, o.defaultValue), ae(u, s, Ce(o.defaultValue))), o.keepTouched || ve(r.touchedFields, s), o.keepDirty || (ve(r.dirtyFields, s), r.isDirty = o.defaultValue ? j(s, Ce(T(u, s))) : j()), o.keepError || (ve(r.errors, s), R.isValid && N()), g.state.next({ ...r }));
  }, be = (s, o = {}) => {
    const l = s ? Ce(s) : u, m = Ce(l), h = we(s), p = h ? u : m;
    if (o.keepDefaultValues || (u = l), !o.keepValues) {
      if (o.keepDirtyValues)
        for (const S of y.mount)
          T(r.dirtyFields, S) ? ae(p, S, T(a, S)) : oe(S, T(p, S));
      else {
        if (jr && ce(s))
          for (const S of y.mount) {
            const J = T(i, S);
            if (J && J._f) {
              const ue = Array.isArray(J._f.refs) ? J._f.refs[0] : J._f.ref;
              if (ur(ue)) {
                const ye = ue.closest("form");
                if (ye) {
                  ye.reset();
                  break;
                }
              }
            }
          }
        i = {};
      }
      a = e.shouldUnregister ? o.keepDefaultValues ? Ce(u) : {} : Ce(p), g.array.next({
        values: { ...p }
      }), g.values.next({
        values: { ...p }
      });
    }
    y = {
      mount: o.keepDirtyValues ? y.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, d.mount = !R.isValid || !!o.keepIsValid || !!o.keepDirtyValues, d.watch = !!e.shouldUnregister, g.state.next({
      submitCount: o.keepSubmitCount ? r.submitCount : 0,
      isDirty: h ? !1 : o.keepDirty ? r.isDirty : !!(o.keepDefaultValues && !Ne(s, u)),
      isSubmitted: o.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: h ? [] : o.keepDirtyValues ? o.keepDefaultValues && a ? ar(u, a) : r.dirtyFields : o.keepDefaultValues && s ? ar(u, s) : {},
      touchedFields: o.keepTouched ? r.touchedFields : {},
      errors: o.keepErrors ? r.errors : {},
      isSubmitSuccessful: o.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, De = (s, o) => be(Le(s) ? s(a) : s, o);
  return {
    control: {
      register: I,
      unregister: F,
      getFieldState: D,
      handleSubmit: de,
      setError: P,
      _executeSchema: Te,
      _getWatch: C,
      _getDirty: j,
      _updateValid: N,
      _removeUnmounted: Pe,
      _updateFieldArray: x,
      _updateDisabledField: k,
      _getFieldArray: z,
      _reset: be,
      _resetDefaultValues: () => Le(n.defaultValues) && n.defaultValues().then((s) => {
        De(s, n.resetOptions), g.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (s) => {
        r = {
          ...r,
          ...s
        };
      },
      _disableForm: q,
      _subjects: g,
      _proxyFormState: R,
      _setErrors: X,
      get _fields() {
        return i;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return d;
      },
      set _state(s) {
        d = s;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return y;
      },
      set _names(s) {
        y = s;
      },
      get _formState() {
        return r;
      },
      set _formState(s) {
        r = s;
      },
      get _options() {
        return n;
      },
      set _options(s) {
        n = {
          ...n,
          ...s
        };
      }
    },
    trigger: f,
    register: I,
    handleSubmit: de,
    watch: $,
    setValue: oe,
    getValues: E,
    reset: De,
    resetField: b,
    clearErrors: V,
    unregister: F,
    setError: P,
    setFocus: (s, o = {}) => {
      const l = T(i, s), m = l && l._f;
      if (m) {
        const h = m.refs ? m.refs[0] : m.ref;
        h.focus && (h.focus(), o.shouldSelect && h.select());
      }
    },
    getFieldState: D
  };
}
function hn(e = {}) {
  const n = Re.useRef(), r = Re.useRef(), [i, u] = Re.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Le(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Le(e.defaultValues) ? void 0 : e.defaultValues
  });
  n.current || (n.current = {
    ...pn(e),
    formState: i
  });
  const a = n.current.control;
  return a._options = e, tn({
    subject: a._subjects.state,
    next: (d) => {
      rn(d, a._proxyFormState, a._updateFormState) && u({ ...a._formState });
    }
  }), Re.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), Re.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const d = a._getDirty();
      d !== i.isDirty && a._subjects.state.next({
        isDirty: d
      });
    }
  }, [a, i.isDirty]), Re.useEffect(() => {
    e.values && !Ne(e.values, r.current) ? (a._reset(e.values, a._options.resetOptions), r.current = e.values, u((d) => ({ ...d }))) : a._resetDefaultValues();
  }, [e.values, a]), Re.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), Re.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), Re.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), n.current.formState = en(i, a), n.current;
}
const Ie = !0, gn = {
  email: {
    label: "Email",
    type: "email",
    pattern: /\S+@\S+\.\S+/,
    isRequired: Ie
  },
  passwordConfirmation: {
    label: "Confirmer le mot de passe :",
    type: "password",
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    isRequired: Ie
  },
  password: {
    label: "Mot de passe",
    type: "password",
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    isRequired: Ie
  },
  message: {
    tag: "textarea",
    label: "Message",
    type: "text",
    isRequired: Ie
  },
  name: { label: "Nom", type: "text", isRequired: Ie },
  age: { label: "Âge", type: "number", isRequired: Ie },
  tel: { label: "Téléphone", type: "text", isRequired: Ie },
  otherInfos: {
    tag: "textarea",
    label: "Autre(s) information(s)",
    type: "text",
    isRequired: !1
  },
  // radio buttons
  gender: {
    tag: "radio",
    type: "radio",
    label: "Genre",
    isRequired: Ie,
    radios: [
      {
        label: "Homme",
        value: "Homme",
        name: "male"
      },
      {
        label: "Femme",
        value: "Femme",
        name: "female"
      }
    ]
  },
  // select
  country: {
    tag: "select",
    label: "Pays",
    defaultValue: "Choisir une option",
    isRequired: Ie,
    options: [
      {
        label: "Angleterre",
        value: "Angleterre"
      },
      {
        label: "Espagne",
        value: "Espagne"
      },
      {
        label: "France",
        value: "France"
      }
    ]
  },
  // checkboxes
  animals: {
    tag: "checkbox",
    type: "checkbox",
    label: "Animaux déjà adoptés",
    isRequired: !1,
    checkboxes: [
      {
        label: "Chien",
        value: "chien",
        name: "dog"
      },
      {
        label: "Chat",
        value: "chat",
        name: "cat"
      },
      {
        label: "NAC",
        value: "NAC",
        name: "nac"
      }
    ]
  }
}, mt = ({ fieldName: e, field: n, register: r, inputErrorClass: i }) => {
  const u = n.tag || "input";
  return /* @__PURE__ */ G.jsx(
    u,
    {
      id: e,
      name: e,
      type: n.type,
      className: `form__${n.tag || "input"}` + i(e),
      ...r(e, {
        required: n.isRequired,
        pattern: n.pattern || null
        // null by default, if the information isn't set into fieldConfig
      })
    }
  );
};
mt.propTypes = {
  fieldName: te.string.isRequired,
  field: te.object.isRequired,
  register: te.func.isRequired,
  inputErrorClass: te.func.isRequired
};
const _t = ({ fieldName: e, field: n, register: r, inputErrorClass: i }) => /* @__PURE__ */ G.jsxs(
  "select",
  {
    id: e,
    name: e,
    type: n.type,
    className: "form__select" + i(e),
    ...r(e, {
      required: n.isRequired
    }),
    children: [
      /* @__PURE__ */ G.jsx("option", { value: "", children: n.defaultValue }),
      n.options.map((u, a) => /* @__PURE__ */ G.jsx("option", { value: u.value, children: u.label }, a))
    ]
  }
);
_t.propTypes = {
  fieldName: te.string.isRequired,
  field: te.object.isRequired,
  register: te.func.isRequired,
  inputErrorClass: te.func.isRequired
};
const Et = ({ fieldName: e, field: n, register: r }) => /* @__PURE__ */ G.jsx("div", { className: "form__radios", children: n.radios.map((i, u) => /* @__PURE__ */ G.jsxs("div", { className: "form__radio", children: [
  /* @__PURE__ */ G.jsx(
    "input",
    {
      id: i.name,
      name: e,
      type: n.type,
      ...r(e, {
        required: n.isRequired
      }),
      value: i.value
    }
  ),
  /* @__PURE__ */ G.jsx("label", { htmlFor: i.name, children: i.value })
] }, u)) });
Et.propTypes = {
  fieldName: te.string.isRequired,
  field: te.object.isRequired,
  register: te.func.isRequired
};
const Rt = ({
  children: e,
  fieldName: n,
  field: r,
  errors: i,
  translation: u
}) => {
  var a, d;
  return /* @__PURE__ */ G.jsxs("div", { className: "form__data", children: [
    /* @__PURE__ */ G.jsx("label", { htmlFor: n, className: "form__label", children: r.label }),
    e,
    /* @__PURE__ */ G.jsxs("p", { className: "form__data--error", children: [
      ((a = i[n]) == null ? void 0 : a.type) === "required" && /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
        "Veuillez entrer votre ",
        u(n)
      ] }),
      ((d = i[n]) == null ? void 0 : d.type) === "pattern" && /* @__PURE__ */ G.jsx(G.Fragment, { children: "Champ invalide" })
    ] })
  ] });
};
Rt.propTypes = {
  children: te.element.isRequired,
  fieldName: te.string.isRequired,
  field: te.object.isRequired,
  errors: te.object.isRequired,
  translation: te.func.isRequired
};
const Tt = ({ fieldName: e, field: n, register: r }) => /* @__PURE__ */ G.jsx("div", { className: "form__checkboxes", children: n.checkboxes.map((i, u) => /* @__PURE__ */ G.jsxs("div", { className: "form__checkbox", children: [
  /* @__PURE__ */ G.jsx(
    "input",
    {
      id: i.name,
      name: e,
      type: n.type,
      ...r(e, {
        required: n.isRequired
      }),
      value: i.value
    }
  ),
  /* @__PURE__ */ G.jsx("label", { htmlFor: i.name, children: i.value })
] }, u)) });
Tt.propTypes = {
  fieldName: te.string.isRequired,
  field: te.object.isRequired,
  register: te.func.isRequired
};
const bn = ({
  title: e,
  subtitle: n,
  btnText: r,
  onSubmitFunction: i,
  validationMessage: u,
  errorMessage: a,
  fieldNames: d,
  fieldValue: y
}) => {
  const {
    register: w,
    handleSubmit: A,
    getValues: R,
    setValue: g,
    formState: { errors: W }
  } = hn();
  Mt(() => {
    y && (async () => {
      try {
        d.forEach((N) => {
          g(N, y[N]);
        });
      } catch (N) {
        console.log(N);
      }
    })();
  }, [d, y, g]);
  const Y = (M) => ({
    name: "nom",
    password: "mot de passe",
    passwordConfirmation: "mot de passe identique",
    country: "pays",
    gender: "genre",
    animals: "animaux adoptés"
  })[M] || M, K = (M) => W[M] ? " input-error" : "";
  return /* @__PURE__ */ G.jsxs(
    "form",
    {
      onSubmit: A(
        () => i(...d.map((M) => R(M)))
      ),
      className: "form",
      noValidate: !0,
      children: [
        /* @__PURE__ */ G.jsxs("div", { className: "form__section-title", children: [
          e && /* @__PURE__ */ G.jsx("h2", { className: "title form__title", children: e }),
          n && /* @__PURE__ */ G.jsx("p", { className: "subtitle form__subtitle", children: n })
        ] }),
        /* @__PURE__ */ G.jsxs("div", { className: "form__content", children: [
          d.map((M, N) => {
            const B = gn[M], x = {
              fieldName: M,
              field: B,
              register: w,
              inputErrorClass: K
            };
            return /* @__PURE__ */ G.jsx(
              Rt,
              {
                fieldName: M,
                field: B,
                errors: W,
                translation: Y,
                children: B.tag === "select" ? /* @__PURE__ */ G.jsx(_t, { ...x }) : B.tag === "radio" ? /* @__PURE__ */ G.jsx(Et, { ...x }) : B.tag === "checkbox" ? /* @__PURE__ */ G.jsx(Tt, { ...x }) : /* @__PURE__ */ G.jsx(mt, { ...x })
              },
              N
            );
          }),
          /* @__PURE__ */ G.jsx("p", { className: "form__message--validation", children: u }),
          /* @__PURE__ */ G.jsx("p", { className: "form__message--error", children: a }),
          /* @__PURE__ */ G.jsx("button", { type: "submit", className: "btn", children: r })
        ] })
      ]
    }
  );
};
bn.propTypes = {
  onSubmitFunction: te.func.isRequired,
  btnText: te.string.isRequired,
  title: te.string,
  subtitle: te.string,
  validationMessage: te.string,
  errorMessage: te.string,
  fieldNames: te.arrayOf(te.string).isRequired,
  fieldValue: te.object
};
export {
  bn as Form
};
