function Lb(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function hp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function tr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Qg = { exports: {} },
  tc = {},
  Xg = { exports: {} },
  ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ds = Symbol.for("react.element"),
  Ab = Symbol.for("react.portal"),
  Ib = Symbol.for("react.fragment"),
  zb = Symbol.for("react.strict_mode"),
  Fb = Symbol.for("react.profiler"),
  Db = Symbol.for("react.provider"),
  Bb = Symbol.for("react.context"),
  Ub = Symbol.for("react.forward_ref"),
  Hb = Symbol.for("react.suspense"),
  Wb = Symbol.for("react.memo"),
  Vb = Symbol.for("react.lazy"),
  pm = Symbol.iterator;
function Kb(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pm && e[pm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zg = Object.assign,
  ev = {};
function hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ev),
    (this.updater = n || Jg);
}
hi.prototype.isReactComponent = {};
hi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tv() {}
tv.prototype = hi.prototype;
function mp(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ev),
    (this.updater = n || Jg);
}
var gp = (mp.prototype = new tv());
gp.constructor = mp;
Zg(gp, hi.prototype);
gp.isPureReactComponent = !0;
var hm = Array.isArray,
  nv = Object.prototype.hasOwnProperty,
  vp = { current: null },
  rv = { key: !0, ref: !0, __self: !0, __source: !0 };
function ov(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      nv.call(t, r) && !rv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ds,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: vp.current,
  };
}
function qb(e, t) {
  return {
    $$typeof: Ds,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function yp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ds;
}
function Gb(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mm = /\/+/g;
function Pu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gb("" + e.key)
    : t.toString(36);
}
function Pa(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ds:
          case Ab:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Pu(s, 0) : r),
      hm(o)
        ? ((n = ""),
          e != null && (n = e.replace(mm, "$&/") + "/"),
          Pa(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (yp(o) &&
            (o = qb(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(mm, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), hm(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Pu(i, a);
      s += Pa(i, t, n, l, o);
    }
  else if (((l = Kb(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Pu(i, a++)), (s += Pa(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function oa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Pa(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Yb(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var St = { current: null },
  Na = { transition: null },
  Qb = {
    ReactCurrentDispatcher: St,
    ReactCurrentBatchConfig: Na,
    ReactCurrentOwner: vp,
  };
ae.Children = {
  map: oa,
  forEach: function (e, t, n) {
    oa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      oa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      oa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!yp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ae.Component = hi;
ae.Fragment = Ib;
ae.Profiler = Fb;
ae.PureComponent = mp;
ae.StrictMode = zb;
ae.Suspense = Hb;
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qb;
ae.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zg({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = vp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      nv.call(t, l) &&
        !rv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ds, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ae.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bb,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Db, _context: e }),
    (e.Consumer = e)
  );
};
ae.createElement = ov;
ae.createFactory = function (e) {
  var t = ov.bind(null, e);
  return (t.type = e), t;
};
ae.createRef = function () {
  return { current: null };
};
ae.forwardRef = function (e) {
  return { $$typeof: Ub, render: e };
};
ae.isValidElement = yp;
ae.lazy = function (e) {
  return { $$typeof: Vb, _payload: { _status: -1, _result: e }, _init: Yb };
};
ae.memo = function (e, t) {
  return { $$typeof: Wb, type: e, compare: t === void 0 ? null : t };
};
ae.startTransition = function (e) {
  var t = Na.transition;
  Na.transition = {};
  try {
    e();
  } finally {
    Na.transition = t;
  }
};
ae.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ae.useCallback = function (e, t) {
  return St.current.useCallback(e, t);
};
ae.useContext = function (e) {
  return St.current.useContext(e);
};
ae.useDebugValue = function () {};
ae.useDeferredValue = function (e) {
  return St.current.useDeferredValue(e);
};
ae.useEffect = function (e, t) {
  return St.current.useEffect(e, t);
};
ae.useId = function () {
  return St.current.useId();
};
ae.useImperativeHandle = function (e, t, n) {
  return St.current.useImperativeHandle(e, t, n);
};
ae.useInsertionEffect = function (e, t) {
  return St.current.useInsertionEffect(e, t);
};
ae.useLayoutEffect = function (e, t) {
  return St.current.useLayoutEffect(e, t);
};
ae.useMemo = function (e, t) {
  return St.current.useMemo(e, t);
};
ae.useReducer = function (e, t, n) {
  return St.current.useReducer(e, t, n);
};
ae.useRef = function (e) {
  return St.current.useRef(e);
};
ae.useState = function (e) {
  return St.current.useState(e);
};
ae.useSyncExternalStore = function (e, t, n) {
  return St.current.useSyncExternalStore(e, t, n);
};
ae.useTransition = function () {
  return St.current.useTransition();
};
ae.version = "18.2.0";
Xg.exports = ae;
var g = Xg.exports;
const q = hp(g),
  al = Lb({ __proto__: null, default: q }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xb = g,
  Jb = Symbol.for("react.element"),
  Zb = Symbol.for("react.fragment"),
  ew = Object.prototype.hasOwnProperty,
  tw = Xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  nw = { key: !0, ref: !0, __self: !0, __source: !0 };
function iv(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) ew.call(t, r) && !nw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Jb,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: tw.current,
  };
}
tc.Fragment = Zb;
tc.jsx = iv;
tc.jsxs = iv;
Qg.exports = tc;
var c = Qg.exports,
  Td = {},
  sv = { exports: {} },
  Wt = {},
  av = { exports: {} },
  lv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, N) {
    var T = E.length;
    E.push(N);
    e: for (; 0 < T; ) {
      var W = (T - 1) >>> 1,
        V = E[W];
      if (0 < o(V, N)) (E[W] = N), (E[T] = V), (T = W);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var N = E[0],
      T = E.pop();
    if (T !== N) {
      E[0] = T;
      e: for (var W = 0, V = E.length, le = V >>> 1; W < le; ) {
        var J = 2 * (W + 1) - 1,
          re = E[J],
          oe = J + 1,
          pe = E[oe];
        if (0 > o(re, T))
          oe < V && 0 > o(pe, re)
            ? ((E[W] = pe), (E[oe] = T), (W = oe))
            : ((E[W] = re), (E[J] = T), (W = J));
        else if (oe < V && 0 > o(pe, T)) (E[W] = pe), (E[oe] = T), (W = oe);
        else break e;
      }
    }
    return N;
  }
  function o(E, N) {
    var T = E.sortIndex - N.sortIndex;
    return T !== 0 ? T : E.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    x = !1,
    h = !1,
    m = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    _ = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(E) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= E)
        r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function w(E) {
    if (((m = !1), y(E), !h))
      if (n(l) !== null) (h = !0), R(S);
      else {
        var N = n(u);
        N !== null && P(w, N.startTime - E);
      }
  }
  function S(E, N) {
    (h = !1), m && ((m = !1), _($), ($ = -1)), (x = !0);
    var T = p;
    try {
      for (
        y(N), f = n(l);
        f !== null && (!(f.expirationTime > N) || (E && !A()));

      ) {
        var W = f.callback;
        if (typeof W == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var V = W(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof V == "function" ? (f.callback = V) : f === n(l) && r(l),
            y(N);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var le = !0;
      else {
        var J = n(u);
        J !== null && P(w, J.startTime - N), (le = !1);
      }
      return le;
    } finally {
      (f = null), (p = T), (x = !1);
    }
  }
  var C = !1,
    k = null,
    $ = -1,
    M = 5,
    O = -1;
  function A() {
    return !(e.unstable_now() - O < M);
  }
  function z() {
    if (k !== null) {
      var E = e.unstable_now();
      O = E;
      var N = !0;
      try {
        N = k(!0, E);
      } finally {
        N ? U() : ((C = !1), (k = null));
      }
    } else C = !1;
  }
  var U;
  if (typeof v == "function")
    U = function () {
      v(z);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      D = B.port2;
    (B.port1.onmessage = z),
      (U = function () {
        D.postMessage(null);
      });
  } else
    U = function () {
      b(z, 0);
    };
  function R(E) {
    (k = E), C || ((C = !0), U());
  }
  function P(E, N) {
    $ = b(function () {
      E(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || x || ((h = !0), R(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var T = p;
      p = N;
      try {
        return E();
      } finally {
        p = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, N) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var T = p;
      p = E;
      try {
        return N();
      } finally {
        p = T;
      }
    }),
    (e.unstable_scheduleCallback = function (E, N, T) {
      var W = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? W + T : W))
          : (T = W),
        E)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = T + V),
        (E = {
          id: d++,
          callback: N,
          priorityLevel: E,
          startTime: T,
          expirationTime: V,
          sortIndex: -1,
        }),
        T > W
          ? ((E.sortIndex = T),
            t(u, E),
            n(l) === null &&
              E === n(u) &&
              (m ? (_($), ($ = -1)) : (m = !0), P(w, T - W)))
          : ((E.sortIndex = V), t(l, E), h || x || ((h = !0), R(S))),
        E
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (E) {
      var N = p;
      return function () {
        var T = p;
        p = N;
        try {
          return E.apply(this, arguments);
        } finally {
          p = T;
        }
      };
    });
})(lv);
av.exports = lv;
var rw = av.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cv = g,
  Ht = rw;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var uv = new Set(),
  ms = {};
function co(e, t) {
  Qo(e, t), Qo(e + "Capture", t);
}
function Qo(e, t) {
  for (ms[e] = t, e = 0; e < t.length; e++) uv.add(t[e]);
}
var Qn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Od = Object.prototype.hasOwnProperty,
  ow =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gm = {},
  vm = {};
function iw(e) {
  return Od.call(vm, e)
    ? !0
    : Od.call(gm, e)
    ? !1
    : ow.test(e)
    ? (vm[e] = !0)
    : ((gm[e] = !0), !1);
}
function sw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function aw(e, t, n, r) {
  if (t === null || typeof t > "u" || sw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ct(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ft[e] = new Ct(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ft[t] = new Ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ft[e] = new Ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ft[e] = new Ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ft[e] = new Ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ft[e] = new Ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ft[e] = new Ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ft[e] = new Ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ft[e] = new Ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _p = /[\-:]([a-z])/g;
function xp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_p, xp);
    ft[t] = new Ct(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(_p, xp);
    ft[t] = new Ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(_p, xp);
  ft[t] = new Ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ft[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ft.xlinkHref = new Ct(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ft[e] = new Ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bp(e, t, n, r) {
  var o = ft.hasOwnProperty(t) ? ft[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (aw(t, n, o, r) && (n = null),
    r || o === null
      ? iw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nr = cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ia = Symbol.for("react.element"),
  $o = Symbol.for("react.portal"),
  Ro = Symbol.for("react.fragment"),
  wp = Symbol.for("react.strict_mode"),
  Md = Symbol.for("react.profiler"),
  dv = Symbol.for("react.provider"),
  fv = Symbol.for("react.context"),
  Sp = Symbol.for("react.forward_ref"),
  Ld = Symbol.for("react.suspense"),
  Ad = Symbol.for("react.suspense_list"),
  Cp = Symbol.for("react.memo"),
  fr = Symbol.for("react.lazy"),
  pv = Symbol.for("react.offscreen"),
  ym = Symbol.iterator;
function Ni(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ym && e[ym]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ze = Object.assign,
  Nu;
function Vi(e) {
  if (Nu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Nu = (t && t[1]) || "";
    }
  return (
    `
` +
    Nu +
    e
  );
}
var Tu = !1;
function Ou(e, t) {
  if (!e || Tu) return "";
  Tu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Tu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vi(e) : "";
}
function lw(e) {
  switch (e.tag) {
    case 5:
      return Vi(e.type);
    case 16:
      return Vi("Lazy");
    case 13:
      return Vi("Suspense");
    case 19:
      return Vi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ou(e.type, !1)), e;
    case 11:
      return (e = Ou(e.type.render, !1)), e;
    case 1:
      return (e = Ou(e.type, !0)), e;
    default:
      return "";
  }
}
function Id(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ro:
      return "Fragment";
    case $o:
      return "Portal";
    case Md:
      return "Profiler";
    case wp:
      return "StrictMode";
    case Ld:
      return "Suspense";
    case Ad:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fv:
        return (e.displayName || "Context") + ".Consumer";
      case dv:
        return (e._context.displayName || "Context") + ".Provider";
      case Sp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Cp:
        return (
          (t = e.displayName || null), t !== null ? t : Id(e.type) || "Memo"
        );
      case fr:
        (t = e._payload), (e = e._init);
        try {
          return Id(e(t));
        } catch {}
    }
  return null;
}
function cw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Id(t);
    case 8:
      return t === wp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function hv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function uw(e) {
  var t = hv(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sa(e) {
  e._valueTracker || (e._valueTracker = uw(e));
}
function mv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = hv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ll(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zd(e, t) {
  var n = t.checked;
  return ze({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function _m(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Nr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function gv(e, t) {
  (t = t.checked), t != null && bp(e, "checked", t, !1);
}
function Fd(e, t) {
  gv(e, t);
  var n = Nr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Dd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Dd(e, t.type, Nr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Dd(e, t, n) {
  (t !== "number" || ll(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ki = Array.isArray;
function Bo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return ze({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (Ki(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Nr(n) };
}
function vv(e, t) {
  var n = Nr(t.value),
    r = Nr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function yv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ud(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? yv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var aa,
  _v = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        aa = aa || document.createElement("div"),
          aa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = aa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function gs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ns = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  dw = ["Webkit", "ms", "Moz", "O"];
Object.keys(ns).forEach(function (e) {
  dw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ns[t] = ns[e]);
  });
});
function xv(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ns.hasOwnProperty(e) && ns[e])
    ? ("" + t).trim()
    : t + "px";
}
function bv(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = xv(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var fw = ze(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Hd(e, t) {
  if (t) {
    if (fw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Wd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vd = null;
function kp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Kd = null,
  Uo = null,
  Ho = null;
function Sm(e) {
  if ((e = Hs(e))) {
    if (typeof Kd != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = sc(t)), Kd(e.stateNode, e.type, t));
  }
}
function wv(e) {
  Uo ? (Ho ? Ho.push(e) : (Ho = [e])) : (Uo = e);
}
function Sv() {
  if (Uo) {
    var e = Uo,
      t = Ho;
    if (((Ho = Uo = null), Sm(e), t)) for (e = 0; e < t.length; e++) Sm(t[e]);
  }
}
function Cv(e, t) {
  return e(t);
}
function kv() {}
var Mu = !1;
function jv(e, t, n) {
  if (Mu) return e(t, n);
  Mu = !0;
  try {
    return Cv(e, t, n);
  } finally {
    (Mu = !1), (Uo !== null || Ho !== null) && (kv(), Sv());
  }
}
function vs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var qd = !1;
if (Qn)
  try {
    var Ti = {};
    Object.defineProperty(Ti, "passive", {
      get: function () {
        qd = !0;
      },
    }),
      window.addEventListener("test", Ti, Ti),
      window.removeEventListener("test", Ti, Ti);
  } catch {
    qd = !1;
  }
function pw(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var rs = !1,
  cl = null,
  ul = !1,
  Gd = null,
  hw = {
    onError: function (e) {
      (rs = !0), (cl = e);
    },
  };
function mw(e, t, n, r, o, i, s, a, l) {
  (rs = !1), (cl = null), pw.apply(hw, arguments);
}
function gw(e, t, n, r, o, i, s, a, l) {
  if ((mw.apply(this, arguments), rs)) {
    if (rs) {
      var u = cl;
      (rs = !1), (cl = null);
    } else throw Error(F(198));
    ul || ((ul = !0), (Gd = u));
  }
}
function uo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ev(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cm(e) {
  if (uo(e) !== e) throw Error(F(188));
}
function vw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = uo(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Cm(o), e;
        if (i === r) return Cm(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function $v(e) {
  return (e = vw(e)), e !== null ? Rv(e) : null;
}
function Rv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pv = Ht.unstable_scheduleCallback,
  km = Ht.unstable_cancelCallback,
  yw = Ht.unstable_shouldYield,
  _w = Ht.unstable_requestPaint,
  We = Ht.unstable_now,
  xw = Ht.unstable_getCurrentPriorityLevel,
  jp = Ht.unstable_ImmediatePriority,
  Nv = Ht.unstable_UserBlockingPriority,
  dl = Ht.unstable_NormalPriority,
  bw = Ht.unstable_LowPriority,
  Tv = Ht.unstable_IdlePriority,
  nc = null,
  Tn = null;
function ww(e) {
  if (Tn && typeof Tn.onCommitFiberRoot == "function")
    try {
      Tn.onCommitFiberRoot(nc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var mn = Math.clz32 ? Math.clz32 : kw,
  Sw = Math.log,
  Cw = Math.LN2;
function kw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sw(e) / Cw) | 0)) | 0;
}
var la = 64,
  ca = 4194304;
function qi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = qi(a)) : ((i &= s), i !== 0 && (r = qi(i)));
  } else (s = n & ~o), s !== 0 ? (r = qi(s)) : i !== 0 && (r = qi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - mn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function jw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ew(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - mn(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = jw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Yd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ov() {
  var e = la;
  return (la <<= 1), !(la & 4194240) && (la = 64), e;
}
function Lu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Bs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - mn(t)),
    (e[t] = n);
}
function $w(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - mn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Ep(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - mn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var _e = 0;
function Mv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Lv,
  $p,
  Av,
  Iv,
  zv,
  Qd = !1,
  ua = [],
  br = null,
  wr = null,
  Sr = null,
  ys = new Map(),
  _s = new Map(),
  hr = [],
  Rw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function jm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      br = null;
      break;
    case "dragenter":
    case "dragleave":
      wr = null;
      break;
    case "mouseover":
    case "mouseout":
      Sr = null;
      break;
    case "pointerover":
    case "pointerout":
      ys.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function Oi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Hs(t)), t !== null && $p(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Pw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (br = Oi(br, e, t, n, r, o)), !0;
    case "dragenter":
      return (wr = Oi(wr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Sr = Oi(Sr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ys.set(i, Oi(ys.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), _s.set(i, Oi(_s.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Fv(e) {
  var t = qr(e.target);
  if (t !== null) {
    var n = uo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ev(n)), t !== null)) {
          (e.blockedOn = t),
            zv(e.priority, function () {
              Av(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ta(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vd = r), n.target.dispatchEvent(r), (Vd = null);
    } else return (t = Hs(n)), t !== null && $p(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Em(e, t, n) {
  Ta(e) && n.delete(t);
}
function Nw() {
  (Qd = !1),
    br !== null && Ta(br) && (br = null),
    wr !== null && Ta(wr) && (wr = null),
    Sr !== null && Ta(Sr) && (Sr = null),
    ys.forEach(Em),
    _s.forEach(Em);
}
function Mi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Qd ||
      ((Qd = !0),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, Nw)));
}
function xs(e) {
  function t(o) {
    return Mi(o, e);
  }
  if (0 < ua.length) {
    Mi(ua[0], e);
    for (var n = 1; n < ua.length; n++) {
      var r = ua[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    br !== null && Mi(br, e),
      wr !== null && Mi(wr, e),
      Sr !== null && Mi(Sr, e),
      ys.forEach(t),
      _s.forEach(t),
      n = 0;
    n < hr.length;
    n++
  )
    (r = hr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < hr.length && ((n = hr[0]), n.blockedOn === null); )
    Fv(n), n.blockedOn === null && hr.shift();
}
var Wo = nr.ReactCurrentBatchConfig,
  pl = !0;
function Tw(e, t, n, r) {
  var o = _e,
    i = Wo.transition;
  Wo.transition = null;
  try {
    (_e = 1), Rp(e, t, n, r);
  } finally {
    (_e = o), (Wo.transition = i);
  }
}
function Ow(e, t, n, r) {
  var o = _e,
    i = Wo.transition;
  Wo.transition = null;
  try {
    (_e = 4), Rp(e, t, n, r);
  } finally {
    (_e = o), (Wo.transition = i);
  }
}
function Rp(e, t, n, r) {
  if (pl) {
    var o = Xd(e, t, n, r);
    if (o === null) Vu(e, t, r, hl, n), jm(e, r);
    else if (Pw(o, e, t, n, r)) r.stopPropagation();
    else if ((jm(e, r), t & 4 && -1 < Rw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Hs(o);
        if (
          (i !== null && Lv(i),
          (i = Xd(e, t, n, r)),
          i === null && Vu(e, t, r, hl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Vu(e, t, r, null, n);
  }
}
var hl = null;
function Xd(e, t, n, r) {
  if (((hl = null), (e = kp(r)), (e = qr(e)), e !== null))
    if (((t = uo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ev(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (hl = e), null;
}
function Dv(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (xw()) {
        case jp:
          return 1;
        case Nv:
          return 4;
        case dl:
        case bw:
          return 16;
        case Tv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vr = null,
  Pp = null,
  Oa = null;
function Bv() {
  if (Oa) return Oa;
  var e,
    t = Pp,
    n = t.length,
    r,
    o = "value" in vr ? vr.value : vr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Oa = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ma(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function da() {
  return !0;
}
function $m() {
  return !1;
}
function Vt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? da
        : $m),
      (this.isPropagationStopped = $m),
      this
    );
  }
  return (
    ze(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = da));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = da));
      },
      persist: function () {},
      isPersistent: da,
    }),
    t
  );
}
var mi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Np = Vt(mi),
  Us = ze({}, mi, { view: 0, detail: 0 }),
  Mw = Vt(Us),
  Au,
  Iu,
  Li,
  rc = ze({}, Us, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Li &&
            (Li && e.type === "mousemove"
              ? ((Au = e.screenX - Li.screenX), (Iu = e.screenY - Li.screenY))
              : (Iu = Au = 0),
            (Li = e)),
          Au);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Iu;
    },
  }),
  Rm = Vt(rc),
  Lw = ze({}, rc, { dataTransfer: 0 }),
  Aw = Vt(Lw),
  Iw = ze({}, Us, { relatedTarget: 0 }),
  zu = Vt(Iw),
  zw = ze({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fw = Vt(zw),
  Dw = ze({}, mi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bw = Vt(Dw),
  Uw = ze({}, mi, { data: 0 }),
  Pm = Vt(Uw),
  Hw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ww = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Vw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vw[e]) ? !!t[e] : !1;
}
function Tp() {
  return Kw;
}
var qw = ze({}, Us, {
    key: function (e) {
      if (e.key) {
        var t = Hw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ma(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ww[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tp,
    charCode: function (e) {
      return e.type === "keypress" ? Ma(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ma(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gw = Vt(qw),
  Yw = ze({}, rc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Nm = Vt(Yw),
  Qw = ze({}, Us, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tp,
  }),
  Xw = Vt(Qw),
  Jw = ze({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zw = Vt(Jw),
  e3 = ze({}, rc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  t3 = Vt(e3),
  n3 = [9, 13, 27, 32],
  Op = Qn && "CompositionEvent" in window,
  os = null;
Qn && "documentMode" in document && (os = document.documentMode);
var r3 = Qn && "TextEvent" in window && !os,
  Uv = Qn && (!Op || (os && 8 < os && 11 >= os)),
  Tm = " ",
  Om = !1;
function Hv(e, t) {
  switch (e) {
    case "keyup":
      return n3.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Po = !1;
function o3(e, t) {
  switch (e) {
    case "compositionend":
      return Wv(t);
    case "keypress":
      return t.which !== 32 ? null : ((Om = !0), Tm);
    case "textInput":
      return (e = t.data), e === Tm && Om ? null : e;
    default:
      return null;
  }
}
function i3(e, t) {
  if (Po)
    return e === "compositionend" || (!Op && Hv(e, t))
      ? ((e = Bv()), (Oa = Pp = vr = null), (Po = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Uv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var s3 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Mm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!s3[e.type] : t === "textarea";
}
function Vv(e, t, n, r) {
  wv(r),
    (t = ml(t, "onChange")),
    0 < t.length &&
      ((n = new Np("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var is = null,
  bs = null;
function a3(e) {
  ny(e, 0);
}
function oc(e) {
  var t = Oo(e);
  if (mv(t)) return e;
}
function l3(e, t) {
  if (e === "change") return t;
}
var Kv = !1;
if (Qn) {
  var Fu;
  if (Qn) {
    var Du = "oninput" in document;
    if (!Du) {
      var Lm = document.createElement("div");
      Lm.setAttribute("oninput", "return;"),
        (Du = typeof Lm.oninput == "function");
    }
    Fu = Du;
  } else Fu = !1;
  Kv = Fu && (!document.documentMode || 9 < document.documentMode);
}
function Am() {
  is && (is.detachEvent("onpropertychange", qv), (bs = is = null));
}
function qv(e) {
  if (e.propertyName === "value" && oc(bs)) {
    var t = [];
    Vv(t, bs, e, kp(e)), jv(a3, t);
  }
}
function c3(e, t, n) {
  e === "focusin"
    ? (Am(), (is = t), (bs = n), is.attachEvent("onpropertychange", qv))
    : e === "focusout" && Am();
}
function u3(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return oc(bs);
}
function d3(e, t) {
  if (e === "click") return oc(t);
}
function f3(e, t) {
  if (e === "input" || e === "change") return oc(t);
}
function p3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yn = typeof Object.is == "function" ? Object.is : p3;
function ws(e, t) {
  if (yn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Od.call(t, o) || !yn(e[o], t[o])) return !1;
  }
  return !0;
}
function Im(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zm(e, t) {
  var n = Im(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Im(n);
  }
}
function Gv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Yv() {
  for (var e = window, t = ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ll(e.document);
  }
  return t;
}
function Mp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function h3(e) {
  var t = Yv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Mp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = zm(n, i));
        var s = zm(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var m3 = Qn && "documentMode" in document && 11 >= document.documentMode,
  No = null,
  Jd = null,
  ss = null,
  Zd = !1;
function Fm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zd ||
    No == null ||
    No !== ll(r) ||
    ((r = No),
    "selectionStart" in r && Mp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ss && ws(ss, r)) ||
      ((ss = r),
      (r = ml(Jd, "onSelect")),
      0 < r.length &&
        ((t = new Np("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = No))));
}
function fa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var To = {
    animationend: fa("Animation", "AnimationEnd"),
    animationiteration: fa("Animation", "AnimationIteration"),
    animationstart: fa("Animation", "AnimationStart"),
    transitionend: fa("Transition", "TransitionEnd"),
  },
  Bu = {},
  Qv = {};
Qn &&
  ((Qv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete To.animationend.animation,
    delete To.animationiteration.animation,
    delete To.animationstart.animation),
  "TransitionEvent" in window || delete To.transitionend.transition);
function ic(e) {
  if (Bu[e]) return Bu[e];
  if (!To[e]) return e;
  var t = To[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qv) return (Bu[e] = t[n]);
  return e;
}
var Xv = ic("animationend"),
  Jv = ic("animationiteration"),
  Zv = ic("animationstart"),
  ey = ic("transitionend"),
  ty = new Map(),
  Dm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lr(e, t) {
  ty.set(e, t), co(t, [e]);
}
for (var Uu = 0; Uu < Dm.length; Uu++) {
  var Hu = Dm[Uu],
    g3 = Hu.toLowerCase(),
    v3 = Hu[0].toUpperCase() + Hu.slice(1);
  Lr(g3, "on" + v3);
}
Lr(Xv, "onAnimationEnd");
Lr(Jv, "onAnimationIteration");
Lr(Zv, "onAnimationStart");
Lr("dblclick", "onDoubleClick");
Lr("focusin", "onFocus");
Lr("focusout", "onBlur");
Lr(ey, "onTransitionEnd");
Qo("onMouseEnter", ["mouseout", "mouseover"]);
Qo("onMouseLeave", ["mouseout", "mouseover"]);
Qo("onPointerEnter", ["pointerout", "pointerover"]);
Qo("onPointerLeave", ["pointerout", "pointerover"]);
co(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
co(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
co("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
co(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
co(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
co(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  y3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));
function Bm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), gw(r, t, void 0, e), (e.currentTarget = null);
}
function ny(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Bm(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Bm(o, a, u), (i = l);
        }
    }
  }
  if (ul) throw ((e = Gd), (ul = !1), (Gd = null), e);
}
function $e(e, t) {
  var n = t[of];
  n === void 0 && (n = t[of] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ry(t, e, 2, !1), n.add(r));
}
function Wu(e, t, n) {
  var r = 0;
  t && (r |= 4), ry(n, e, r, t);
}
var pa = "_reactListening" + Math.random().toString(36).slice(2);
function Ss(e) {
  if (!e[pa]) {
    (e[pa] = !0),
      uv.forEach(function (n) {
        n !== "selectionchange" && (y3.has(n) || Wu(n, !1, e), Wu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pa] || ((t[pa] = !0), Wu("selectionchange", !1, t));
  }
}
function ry(e, t, n, r) {
  switch (Dv(t)) {
    case 1:
      var o = Tw;
      break;
    case 4:
      o = Ow;
      break;
    default:
      o = Rp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !qd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Vu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = qr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  jv(function () {
    var u = i,
      d = kp(n),
      f = [];
    e: {
      var p = ty.get(e);
      if (p !== void 0) {
        var x = Np,
          h = e;
        switch (e) {
          case "keypress":
            if (Ma(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Gw;
            break;
          case "focusin":
            (h = "focus"), (x = zu);
            break;
          case "focusout":
            (h = "blur"), (x = zu);
            break;
          case "beforeblur":
          case "afterblur":
            x = zu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Rm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Aw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Xw;
            break;
          case Xv:
          case Jv:
          case Zv:
            x = Fw;
            break;
          case ey:
            x = Zw;
            break;
          case "scroll":
            x = Mw;
            break;
          case "wheel":
            x = t3;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Bw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Nm;
        }
        var m = (t & 4) !== 0,
          b = !m && e === "scroll",
          _ = m ? (p !== null ? p + "Capture" : null) : p;
        m = [];
        for (var v = u, y; v !== null; ) {
          y = v;
          var w = y.stateNode;
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              _ !== null && ((w = vs(v, _)), w != null && m.push(Cs(v, w, y)))),
            b)
          )
            break;
          v = v.return;
        }
        0 < m.length &&
          ((p = new x(p, h, null, n, d)), f.push({ event: p, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Vd &&
            (h = n.relatedTarget || n.fromElement) &&
            (qr(h) || h[Xn]))
        )
          break e;
        if (
          (x || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          x
            ? ((h = n.relatedTarget || n.toElement),
              (x = u),
              (h = h ? qr(h) : null),
              h !== null &&
                ((b = uo(h)), h !== b || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((x = null), (h = u)),
          x !== h)
        ) {
          if (
            ((m = Rm),
            (w = "onMouseLeave"),
            (_ = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Nm),
              (w = "onPointerLeave"),
              (_ = "onPointerEnter"),
              (v = "pointer")),
            (b = x == null ? p : Oo(x)),
            (y = h == null ? p : Oo(h)),
            (p = new m(w, v + "leave", x, n, d)),
            (p.target = b),
            (p.relatedTarget = y),
            (w = null),
            qr(d) === u &&
              ((m = new m(_, v + "enter", h, n, d)),
              (m.target = y),
              (m.relatedTarget = b),
              (w = m)),
            (b = w),
            x && h)
          )
            t: {
              for (m = x, _ = h, v = 0, y = m; y; y = _o(y)) v++;
              for (y = 0, w = _; w; w = _o(w)) y++;
              for (; 0 < v - y; ) (m = _o(m)), v--;
              for (; 0 < y - v; ) (_ = _o(_)), y--;
              for (; v--; ) {
                if (m === _ || (_ !== null && m === _.alternate)) break t;
                (m = _o(m)), (_ = _o(_));
              }
              m = null;
            }
          else m = null;
          x !== null && Um(f, p, x, m, !1),
            h !== null && b !== null && Um(f, b, h, m, !0);
        }
      }
      e: {
        if (
          ((p = u ? Oo(u) : window),
          (x = p.nodeName && p.nodeName.toLowerCase()),
          x === "select" || (x === "input" && p.type === "file"))
        )
          var S = l3;
        else if (Mm(p))
          if (Kv) S = f3;
          else {
            S = u3;
            var C = c3;
          }
        else
          (x = p.nodeName) &&
            x.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = d3);
        if (S && (S = S(e, u))) {
          Vv(f, S, n, d);
          break e;
        }
        C && C(e, p, u),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            Dd(p, "number", p.value);
      }
      switch (((C = u ? Oo(u) : window), e)) {
        case "focusin":
          (Mm(C) || C.contentEditable === "true") &&
            ((No = C), (Jd = u), (ss = null));
          break;
        case "focusout":
          ss = Jd = No = null;
          break;
        case "mousedown":
          Zd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Zd = !1), Fm(f, n, d);
          break;
        case "selectionchange":
          if (m3) break;
        case "keydown":
        case "keyup":
          Fm(f, n, d);
      }
      var k;
      if (Op)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Po
          ? Hv(e, n) && ($ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (Uv &&
          n.locale !== "ko" &&
          (Po || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && Po && (k = Bv())
            : ((vr = d),
              (Pp = "value" in vr ? vr.value : vr.textContent),
              (Po = !0))),
        (C = ml(u, $)),
        0 < C.length &&
          (($ = new Pm($, e, null, n, d)),
          f.push({ event: $, listeners: C }),
          k ? ($.data = k) : ((k = Wv(n)), k !== null && ($.data = k)))),
        (k = r3 ? o3(e, n) : i3(e, n)) &&
          ((u = ml(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Pm("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = k)));
    }
    ny(f, t);
  });
}
function Cs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = vs(e, n)),
      i != null && r.unshift(Cs(e, i, o)),
      (i = vs(e, t)),
      i != null && r.push(Cs(e, i, o))),
      (e = e.return);
  }
  return r;
}
function _o(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Um(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = vs(n, i)), l != null && s.unshift(Cs(n, l, a)))
        : o || ((l = vs(n, i)), l != null && s.push(Cs(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _3 = /\r\n?/g,
  x3 = /\u0000|\uFFFD/g;
function Hm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      _3,
      `
`
    )
    .replace(x3, "");
}
function ha(e, t, n) {
  if (((t = Hm(t)), Hm(e) !== t && n)) throw Error(F(425));
}
function gl() {}
var ef = null,
  tf = null;
function nf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var rf = typeof setTimeout == "function" ? setTimeout : void 0,
  b3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wm = typeof Promise == "function" ? Promise : void 0,
  w3 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wm < "u"
      ? function (e) {
          return Wm.resolve(null).then(e).catch(S3);
        }
      : rf;
function S3(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ku(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), xs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  xs(t);
}
function Cr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gi = Math.random().toString(36).slice(2),
  Pn = "__reactFiber$" + gi,
  ks = "__reactProps$" + gi,
  Xn = "__reactContainer$" + gi,
  of = "__reactEvents$" + gi,
  C3 = "__reactListeners$" + gi,
  k3 = "__reactHandles$" + gi;
function qr(e) {
  var t = e[Pn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xn] || n[Pn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vm(e); e !== null; ) {
          if ((n = e[Pn])) return n;
          e = Vm(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Hs(e) {
  return (
    (e = e[Pn] || e[Xn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Oo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function sc(e) {
  return e[ks] || null;
}
var sf = [],
  Mo = -1;
function Ar(e) {
  return { current: e };
}
function Ne(e) {
  0 > Mo || ((e.current = sf[Mo]), (sf[Mo] = null), Mo--);
}
function Ee(e, t) {
  Mo++, (sf[Mo] = e.current), (e.current = t);
}
var Tr = {},
  _t = Ar(Tr),
  Pt = Ar(!1),
  ro = Tr;
function Xo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Nt(e) {
  return (e = e.childContextTypes), e != null;
}
function vl() {
  Ne(Pt), Ne(_t);
}
function Km(e, t, n) {
  if (_t.current !== Tr) throw Error(F(168));
  Ee(_t, t), Ee(Pt, n);
}
function oy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(F(108, cw(e) || "Unknown", o));
  return ze({}, n, r);
}
function yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tr),
    (ro = _t.current),
    Ee(_t, e),
    Ee(Pt, Pt.current),
    !0
  );
}
function qm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = oy(e, t, ro)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ne(Pt),
      Ne(_t),
      Ee(_t, e))
    : Ne(Pt),
    Ee(Pt, n);
}
var Un = null,
  ac = !1,
  qu = !1;
function iy(e) {
  Un === null ? (Un = [e]) : Un.push(e);
}
function j3(e) {
  (ac = !0), iy(e);
}
function Ir() {
  if (!qu && Un !== null) {
    qu = !0;
    var e = 0,
      t = _e;
    try {
      var n = Un;
      for (_e = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Un = null), (ac = !1);
    } catch (o) {
      throw (Un !== null && (Un = Un.slice(e + 1)), Pv(jp, Ir), o);
    } finally {
      (_e = t), (qu = !1);
    }
  }
  return null;
}
var Lo = [],
  Ao = 0,
  _l = null,
  xl = 0,
  Yt = [],
  Qt = 0,
  oo = null,
  Vn = 1,
  Kn = "";
function Hr(e, t) {
  (Lo[Ao++] = xl), (Lo[Ao++] = _l), (_l = e), (xl = t);
}
function sy(e, t, n) {
  (Yt[Qt++] = Vn), (Yt[Qt++] = Kn), (Yt[Qt++] = oo), (oo = e);
  var r = Vn;
  e = Kn;
  var o = 32 - mn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - mn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Vn = (1 << (32 - mn(t) + o)) | (n << o) | r),
      (Kn = i + e);
  } else (Vn = (1 << i) | (n << o) | r), (Kn = e);
}
function Lp(e) {
  e.return !== null && (Hr(e, 1), sy(e, 1, 0));
}
function Ap(e) {
  for (; e === _l; )
    (_l = Lo[--Ao]), (Lo[Ao] = null), (xl = Lo[--Ao]), (Lo[Ao] = null);
  for (; e === oo; )
    (oo = Yt[--Qt]),
      (Yt[Qt] = null),
      (Kn = Yt[--Qt]),
      (Yt[Qt] = null),
      (Vn = Yt[--Qt]),
      (Yt[Qt] = null);
}
var Dt = null,
  Ft = null,
  Oe = !1,
  hn = null;
function ay(e, t) {
  var n = Zt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Dt = e), (Ft = Cr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Dt = e), (Ft = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = oo !== null ? { id: Vn, overflow: Kn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Zt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Dt = e),
            (Ft = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function af(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lf(e) {
  if (Oe) {
    var t = Ft;
    if (t) {
      var n = t;
      if (!Gm(e, t)) {
        if (af(e)) throw Error(F(418));
        t = Cr(n.nextSibling);
        var r = Dt;
        t && Gm(e, t)
          ? ay(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (Dt = e));
      }
    } else {
      if (af(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (Oe = !1), (Dt = e);
    }
  }
}
function Ym(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Dt = e;
}
function ma(e) {
  if (e !== Dt) return !1;
  if (!Oe) return Ym(e), (Oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !nf(e.type, e.memoizedProps))),
    t && (t = Ft))
  ) {
    if (af(e)) throw (ly(), Error(F(418)));
    for (; t; ) ay(e, t), (t = Cr(t.nextSibling));
  }
  if ((Ym(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ft = Cr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ft = null;
    }
  } else Ft = Dt ? Cr(e.stateNode.nextSibling) : null;
  return !0;
}
function ly() {
  for (var e = Ft; e; ) e = Cr(e.nextSibling);
}
function Jo() {
  (Ft = Dt = null), (Oe = !1);
}
function Ip(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
var E3 = nr.ReactCurrentBatchConfig;
function fn(e, t) {
  if (e && e.defaultProps) {
    (t = ze({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bl = Ar(null),
  wl = null,
  Io = null,
  zp = null;
function Fp() {
  zp = Io = wl = null;
}
function Dp(e) {
  var t = bl.current;
  Ne(bl), (e._currentValue = t);
}
function cf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vo(e, t) {
  (wl = e),
    (zp = Io = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Et = !0), (e.firstContext = null));
}
function rn(e) {
  var t = e._currentValue;
  if (zp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Io === null)) {
      if (wl === null) throw Error(F(308));
      (Io = e), (wl.dependencies = { lanes: 0, firstContext: e });
    } else Io = Io.next = e;
  return t;
}
var Gr = null;
function Bp(e) {
  Gr === null ? (Gr = [e]) : Gr.push(e);
}
function cy(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Bp(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Jn(e, r)
  );
}
function Jn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pr = !1;
function Up(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function uy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function qn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), fe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Jn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Bp(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Jn(e, n)
  );
}
function La(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ep(e, n);
  }
}
function Qm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Sl(e, t, n, r) {
  var o = e.updateQueue;
  pr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (d = u = l = null), (a = i);
    do {
      var p = a.lane,
        x = a.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var h = e,
            m = a;
          switch (((p = t), (x = n), m.tag)) {
            case 1:
              if (((h = m.payload), typeof h == "function")) {
                f = h.call(x, f, p);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = m.payload),
                (p = typeof h == "function" ? h.call(x, f, p) : h),
                p == null)
              )
                break e;
              f = ze({}, f, p);
              break e;
            case 2:
              pr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [a]) : p.push(a));
      } else
        (x = {
          eventTime: x,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = x), (l = f)) : (d = d.next = x),
          (s |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (so |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Xm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var dy = new cv.Component().refs;
function uf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ze({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? uo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = Er(e),
      i = qn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = kr(e, i, o)),
      t !== null && (gn(t, e, o, r), La(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = wt(),
      o = Er(e),
      i = qn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = kr(e, i, o)),
      t !== null && (gn(t, e, o, r), La(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = wt(),
      r = Er(e),
      o = qn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = kr(e, o, r)),
      t !== null && (gn(t, e, r, n), La(t, e, r));
  },
};
function Jm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ws(n, r) || !ws(o, i)
      : !0
  );
}
function fy(e, t, n) {
  var r = !1,
    o = Tr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = rn(i))
      : ((o = Nt(t) ? ro : _t.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Xo(e, o) : Tr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = lc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && lc.enqueueReplaceState(t, t.state, null);
}
function df(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = dy), Up(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = rn(i))
    : ((i = Nt(t) ? ro : _t.current), (o.context = Xo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (uf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && lc.enqueueReplaceState(o, o.state, null),
      Sl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ai(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === dy && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function ga(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function e1(e) {
  var t = e._init;
  return t(e._payload);
}
function py(e) {
  function t(_, v) {
    if (e) {
      var y = _.deletions;
      y === null ? ((_.deletions = [v]), (_.flags |= 16)) : y.push(v);
    }
  }
  function n(_, v) {
    if (!e) return null;
    for (; v !== null; ) t(_, v), (v = v.sibling);
    return null;
  }
  function r(_, v) {
    for (_ = new Map(); v !== null; )
      v.key !== null ? _.set(v.key, v) : _.set(v.index, v), (v = v.sibling);
    return _;
  }
  function o(_, v) {
    return (_ = $r(_, v)), (_.index = 0), (_.sibling = null), _;
  }
  function i(_, v, y) {
    return (
      (_.index = y),
      e
        ? ((y = _.alternate),
          y !== null
            ? ((y = y.index), y < v ? ((_.flags |= 2), v) : y)
            : ((_.flags |= 2), v))
        : ((_.flags |= 1048576), v)
    );
  }
  function s(_) {
    return e && _.alternate === null && (_.flags |= 2), _;
  }
  function a(_, v, y, w) {
    return v === null || v.tag !== 6
      ? ((v = ed(y, _.mode, w)), (v.return = _), v)
      : ((v = o(v, y)), (v.return = _), v);
  }
  function l(_, v, y, w) {
    var S = y.type;
    return S === Ro
      ? d(_, v, y.props.children, w, y.key)
      : v !== null &&
        (v.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === fr &&
            e1(S) === v.type))
      ? ((w = o(v, y.props)), (w.ref = Ai(_, v, y)), (w.return = _), w)
      : ((w = Ba(y.type, y.key, y.props, null, _.mode, w)),
        (w.ref = Ai(_, v, y)),
        (w.return = _),
        w);
  }
  function u(_, v, y, w) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== y.containerInfo ||
      v.stateNode.implementation !== y.implementation
      ? ((v = td(y, _.mode, w)), (v.return = _), v)
      : ((v = o(v, y.children || [])), (v.return = _), v);
  }
  function d(_, v, y, w, S) {
    return v === null || v.tag !== 7
      ? ((v = eo(y, _.mode, w, S)), (v.return = _), v)
      : ((v = o(v, y)), (v.return = _), v);
  }
  function f(_, v, y) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = ed("" + v, _.mode, y)), (v.return = _), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ia:
          return (
            (y = Ba(v.type, v.key, v.props, null, _.mode, y)),
            (y.ref = Ai(_, null, v)),
            (y.return = _),
            y
          );
        case $o:
          return (v = td(v, _.mode, y)), (v.return = _), v;
        case fr:
          var w = v._init;
          return f(_, w(v._payload), y);
      }
      if (Ki(v) || Ni(v))
        return (v = eo(v, _.mode, y, null)), (v.return = _), v;
      ga(_, v);
    }
    return null;
  }
  function p(_, v, y, w) {
    var S = v !== null ? v.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return S !== null ? null : a(_, v, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ia:
          return y.key === S ? l(_, v, y, w) : null;
        case $o:
          return y.key === S ? u(_, v, y, w) : null;
        case fr:
          return (S = y._init), p(_, v, S(y._payload), w);
      }
      if (Ki(y) || Ni(y)) return S !== null ? null : d(_, v, y, w, null);
      ga(_, y);
    }
    return null;
  }
  function x(_, v, y, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (_ = _.get(y) || null), a(v, _, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ia:
          return (_ = _.get(w.key === null ? y : w.key) || null), l(v, _, w, S);
        case $o:
          return (_ = _.get(w.key === null ? y : w.key) || null), u(v, _, w, S);
        case fr:
          var C = w._init;
          return x(_, v, y, C(w._payload), S);
      }
      if (Ki(w) || Ni(w)) return (_ = _.get(y) || null), d(v, _, w, S, null);
      ga(v, w);
    }
    return null;
  }
  function h(_, v, y, w) {
    for (
      var S = null, C = null, k = v, $ = (v = 0), M = null;
      k !== null && $ < y.length;
      $++
    ) {
      k.index > $ ? ((M = k), (k = null)) : (M = k.sibling);
      var O = p(_, k, y[$], w);
      if (O === null) {
        k === null && (k = M);
        break;
      }
      e && k && O.alternate === null && t(_, k),
        (v = i(O, v, $)),
        C === null ? (S = O) : (C.sibling = O),
        (C = O),
        (k = M);
    }
    if ($ === y.length) return n(_, k), Oe && Hr(_, $), S;
    if (k === null) {
      for (; $ < y.length; $++)
        (k = f(_, y[$], w)),
          k !== null &&
            ((v = i(k, v, $)), C === null ? (S = k) : (C.sibling = k), (C = k));
      return Oe && Hr(_, $), S;
    }
    for (k = r(_, k); $ < y.length; $++)
      (M = x(k, _, $, y[$], w)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? $ : M.key),
          (v = i(M, v, $)),
          C === null ? (S = M) : (C.sibling = M),
          (C = M));
    return (
      e &&
        k.forEach(function (A) {
          return t(_, A);
        }),
      Oe && Hr(_, $),
      S
    );
  }
  function m(_, v, y, w) {
    var S = Ni(y);
    if (typeof S != "function") throw Error(F(150));
    if (((y = S.call(y)), y == null)) throw Error(F(151));
    for (
      var C = (S = null), k = v, $ = (v = 0), M = null, O = y.next();
      k !== null && !O.done;
      $++, O = y.next()
    ) {
      k.index > $ ? ((M = k), (k = null)) : (M = k.sibling);
      var A = p(_, k, O.value, w);
      if (A === null) {
        k === null && (k = M);
        break;
      }
      e && k && A.alternate === null && t(_, k),
        (v = i(A, v, $)),
        C === null ? (S = A) : (C.sibling = A),
        (C = A),
        (k = M);
    }
    if (O.done) return n(_, k), Oe && Hr(_, $), S;
    if (k === null) {
      for (; !O.done; $++, O = y.next())
        (O = f(_, O.value, w)),
          O !== null &&
            ((v = i(O, v, $)), C === null ? (S = O) : (C.sibling = O), (C = O));
      return Oe && Hr(_, $), S;
    }
    for (k = r(_, k); !O.done; $++, O = y.next())
      (O = x(k, _, $, O.value, w)),
        O !== null &&
          (e && O.alternate !== null && k.delete(O.key === null ? $ : O.key),
          (v = i(O, v, $)),
          C === null ? (S = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        k.forEach(function (z) {
          return t(_, z);
        }),
      Oe && Hr(_, $),
      S
    );
  }
  function b(_, v, y, w) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Ro &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ia:
          e: {
            for (var S = y.key, C = v; C !== null; ) {
              if (C.key === S) {
                if (((S = y.type), S === Ro)) {
                  if (C.tag === 7) {
                    n(_, C.sibling),
                      (v = o(C, y.props.children)),
                      (v.return = _),
                      (_ = v);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === fr &&
                    e1(S) === C.type)
                ) {
                  n(_, C.sibling),
                    (v = o(C, y.props)),
                    (v.ref = Ai(_, C, y)),
                    (v.return = _),
                    (_ = v);
                  break e;
                }
                n(_, C);
                break;
              } else t(_, C);
              C = C.sibling;
            }
            y.type === Ro
              ? ((v = eo(y.props.children, _.mode, w, y.key)),
                (v.return = _),
                (_ = v))
              : ((w = Ba(y.type, y.key, y.props, null, _.mode, w)),
                (w.ref = Ai(_, v, y)),
                (w.return = _),
                (_ = w));
          }
          return s(_);
        case $o:
          e: {
            for (C = y.key; v !== null; ) {
              if (v.key === C)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === y.containerInfo &&
                  v.stateNode.implementation === y.implementation
                ) {
                  n(_, v.sibling),
                    (v = o(v, y.children || [])),
                    (v.return = _),
                    (_ = v);
                  break e;
                } else {
                  n(_, v);
                  break;
                }
              else t(_, v);
              v = v.sibling;
            }
            (v = td(y, _.mode, w)), (v.return = _), (_ = v);
          }
          return s(_);
        case fr:
          return (C = y._init), b(_, v, C(y._payload), w);
      }
      if (Ki(y)) return h(_, v, y, w);
      if (Ni(y)) return m(_, v, y, w);
      ga(_, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        v !== null && v.tag === 6
          ? (n(_, v.sibling), (v = o(v, y)), (v.return = _), (_ = v))
          : (n(_, v), (v = ed(y, _.mode, w)), (v.return = _), (_ = v)),
        s(_))
      : n(_, v);
  }
  return b;
}
var Zo = py(!0),
  hy = py(!1),
  Ws = {},
  On = Ar(Ws),
  js = Ar(Ws),
  Es = Ar(Ws);
function Yr(e) {
  if (e === Ws) throw Error(F(174));
  return e;
}
function Hp(e, t) {
  switch ((Ee(Es, t), Ee(js, e), Ee(On, Ws), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ud(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ud(t, e));
  }
  Ne(On), Ee(On, t);
}
function ei() {
  Ne(On), Ne(js), Ne(Es);
}
function my(e) {
  Yr(Es.current);
  var t = Yr(On.current),
    n = Ud(t, e.type);
  t !== n && (Ee(js, e), Ee(On, n));
}
function Wp(e) {
  js.current === e && (Ne(On), Ne(js));
}
var Le = Ar(0);
function Cl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gu = [];
function Vp() {
  for (var e = 0; e < Gu.length; e++)
    Gu[e]._workInProgressVersionPrimary = null;
  Gu.length = 0;
}
var Aa = nr.ReactCurrentDispatcher,
  Yu = nr.ReactCurrentBatchConfig,
  io = 0,
  Ae = null,
  Je = null,
  nt = null,
  kl = !1,
  as = !1,
  $s = 0,
  $3 = 0;
function ht() {
  throw Error(F(321));
}
function Kp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yn(e[n], t[n])) return !1;
  return !0;
}
function qp(e, t, n, r, o, i) {
  if (
    ((io = i),
    (Ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Aa.current = e === null || e.memoizedState === null ? T3 : O3),
    (e = n(r, o)),
    as)
  ) {
    i = 0;
    do {
      if (((as = !1), ($s = 0), 25 <= i)) throw Error(F(301));
      (i += 1),
        (nt = Je = null),
        (t.updateQueue = null),
        (Aa.current = M3),
        (e = n(r, o));
    } while (as);
  }
  if (
    ((Aa.current = jl),
    (t = Je !== null && Je.next !== null),
    (io = 0),
    (nt = Je = Ae = null),
    (kl = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function Gp() {
  var e = $s !== 0;
  return ($s = 0), e;
}
function kn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return nt === null ? (Ae.memoizedState = nt = e) : (nt = nt.next = e), nt;
}
function on() {
  if (Je === null) {
    var e = Ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Je.next;
  var t = nt === null ? Ae.memoizedState : nt.next;
  if (t !== null) (nt = t), (Je = e);
  else {
    if (e === null) throw Error(F(310));
    (Je = e),
      (e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null,
      }),
      nt === null ? (Ae.memoizedState = nt = e) : (nt = nt.next = e);
  }
  return nt;
}
function Rs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qu(e) {
  var t = on(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Je,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((io & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Ae.lanes |= d),
          (so |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      yn(r, t.memoizedState) || (Et = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ae.lanes |= i), (so |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xu(e) {
  var t = on(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    yn(i, t.memoizedState) || (Et = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function gy() {}
function vy(e, t) {
  var n = Ae,
    r = on(),
    o = t(),
    i = !yn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Et = !0)),
    (r = r.queue),
    Yp(xy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (nt !== null && nt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ps(9, _y.bind(null, n, r, o, t), void 0, null),
      ot === null)
    )
      throw Error(F(349));
    io & 30 || yy(n, t, o);
  }
  return o;
}
function yy(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _y(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), by(t) && wy(e);
}
function xy(e, t, n) {
  return n(function () {
    by(t) && wy(e);
  });
}
function by(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yn(e, n);
  } catch {
    return !0;
  }
}
function wy(e) {
  var t = Jn(e, 1);
  t !== null && gn(t, e, 1, -1);
}
function t1(e) {
  var t = kn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = N3.bind(null, Ae, e)),
    [t.memoizedState, e]
  );
}
function Ps(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sy() {
  return on().memoizedState;
}
function Ia(e, t, n, r) {
  var o = kn();
  (Ae.flags |= e),
    (o.memoizedState = Ps(1 | t, n, void 0, r === void 0 ? null : r));
}
function cc(e, t, n, r) {
  var o = on();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Je !== null) {
    var s = Je.memoizedState;
    if (((i = s.destroy), r !== null && Kp(r, s.deps))) {
      o.memoizedState = Ps(t, n, i, r);
      return;
    }
  }
  (Ae.flags |= e), (o.memoizedState = Ps(1 | t, n, i, r));
}
function n1(e, t) {
  return Ia(8390656, 8, e, t);
}
function Yp(e, t) {
  return cc(2048, 8, e, t);
}
function Cy(e, t) {
  return cc(4, 2, e, t);
}
function ky(e, t) {
  return cc(4, 4, e, t);
}
function jy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ey(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cc(4, 4, jy.bind(null, t, e), n)
  );
}
function Qp() {}
function $y(e, t) {
  var n = on();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ry(e, t) {
  var n = on();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Kp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Py(e, t, n) {
  return io & 21
    ? (yn(n, t) || ((n = Ov()), (Ae.lanes |= n), (so |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Et = !0)), (e.memoizedState = n));
}
function R3(e, t) {
  var n = _e;
  (_e = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Yu.transition;
  Yu.transition = {};
  try {
    e(!1), t();
  } finally {
    (_e = n), (Yu.transition = r);
  }
}
function Ny() {
  return on().memoizedState;
}
function P3(e, t, n) {
  var r = Er(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ty(e))
  )
    Oy(t, n);
  else if (((n = cy(e, t, n, r)), n !== null)) {
    var o = wt();
    gn(n, e, r, o), My(n, t, r);
  }
}
function N3(e, t, n) {
  var r = Er(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ty(e)) Oy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), yn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Bp(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = cy(e, t, o, r)),
      n !== null && ((o = wt()), gn(n, e, r, o), My(n, t, r));
  }
}
function Ty(e) {
  var t = e.alternate;
  return e === Ae || (t !== null && t === Ae);
}
function Oy(e, t) {
  as = kl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function My(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ep(e, n);
  }
}
var jl = {
    readContext: rn,
    useCallback: ht,
    useContext: ht,
    useEffect: ht,
    useImperativeHandle: ht,
    useInsertionEffect: ht,
    useLayoutEffect: ht,
    useMemo: ht,
    useReducer: ht,
    useRef: ht,
    useState: ht,
    useDebugValue: ht,
    useDeferredValue: ht,
    useTransition: ht,
    useMutableSource: ht,
    useSyncExternalStore: ht,
    useId: ht,
    unstable_isNewReconciler: !1,
  },
  T3 = {
    readContext: rn,
    useCallback: function (e, t) {
      return (kn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rn,
    useEffect: n1,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ia(4194308, 4, jy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ia(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ia(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = kn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = kn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = P3.bind(null, Ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = kn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: t1,
    useDebugValue: Qp,
    useDeferredValue: function (e) {
      return (kn().memoizedState = e);
    },
    useTransition: function () {
      var e = t1(!1),
        t = e[0];
      return (e = R3.bind(null, e[1])), (kn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ae,
        o = kn();
      if (Oe) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), ot === null)) throw Error(F(349));
        io & 30 || yy(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        n1(xy.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ps(9, _y.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = kn(),
        t = ot.identifierPrefix;
      if (Oe) {
        var n = Kn,
          r = Vn;
        (n = (r & ~(1 << (32 - mn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $s++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = $3++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  O3 = {
    readContext: rn,
    useCallback: $y,
    useContext: rn,
    useEffect: Yp,
    useImperativeHandle: Ey,
    useInsertionEffect: Cy,
    useLayoutEffect: ky,
    useMemo: Ry,
    useReducer: Qu,
    useRef: Sy,
    useState: function () {
      return Qu(Rs);
    },
    useDebugValue: Qp,
    useDeferredValue: function (e) {
      var t = on();
      return Py(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = Qu(Rs)[0],
        t = on().memoizedState;
      return [e, t];
    },
    useMutableSource: gy,
    useSyncExternalStore: vy,
    useId: Ny,
    unstable_isNewReconciler: !1,
  },
  M3 = {
    readContext: rn,
    useCallback: $y,
    useContext: rn,
    useEffect: Yp,
    useImperativeHandle: Ey,
    useInsertionEffect: Cy,
    useLayoutEffect: ky,
    useMemo: Ry,
    useReducer: Xu,
    useRef: Sy,
    useState: function () {
      return Xu(Rs);
    },
    useDebugValue: Qp,
    useDeferredValue: function (e) {
      var t = on();
      return Je === null ? (t.memoizedState = e) : Py(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = Xu(Rs)[0],
        t = on().memoizedState;
      return [e, t];
    },
    useMutableSource: gy,
    useSyncExternalStore: vy,
    useId: Ny,
    unstable_isNewReconciler: !1,
  };
function ti(e, t) {
  try {
    var n = "",
      r = t;
    do (n += lw(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ju(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ff(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var L3 = typeof WeakMap == "function" ? WeakMap : Map;
function Ly(e, t, n) {
  (n = qn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $l || (($l = !0), (wf = r)), ff(e, t);
    }),
    n
  );
}
function Ay(e, t, n) {
  (n = qn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ff(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ff(e, t),
          typeof r != "function" &&
            (jr === null ? (jr = new Set([this])) : jr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function r1(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new L3();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Y3.bind(null, e, t, n)), t.then(e, e));
}
function o1(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function i1(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = qn(-1, 1)), (t.tag = 2), kr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var A3 = nr.ReactCurrentOwner,
  Et = !1;
function bt(e, t, n, r) {
  t.child = e === null ? hy(t, null, n, r) : Zo(t, e.child, n, r);
}
function s1(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Vo(t, o),
    (r = qp(e, t, n, r, i, o)),
    (n = Gp()),
    e !== null && !Et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Zn(e, t, o))
      : (Oe && n && Lp(t), (t.flags |= 1), bt(e, t, r, o), t.child)
  );
}
function a1(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !oh(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Iy(e, t, i, r, o))
      : ((e = Ba(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ws), n(s, r) && e.ref === t.ref)
    )
      return Zn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = $r(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Iy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ws(i, r) && e.ref === t.ref)
      if (((Et = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Et = !0);
      else return (t.lanes = e.lanes), Zn(e, t, o);
  }
  return pf(e, t, n, r, o);
}
function zy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ee(Fo, At),
        (At |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ee(Fo, At),
          (At |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ee(Fo, At),
        (At |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ee(Fo, At),
      (At |= r);
  return bt(e, t, o, n), t.child;
}
function Fy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function pf(e, t, n, r, o) {
  var i = Nt(n) ? ro : _t.current;
  return (
    (i = Xo(t, i)),
    Vo(t, o),
    (n = qp(e, t, n, r, i, o)),
    (r = Gp()),
    e !== null && !Et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Zn(e, t, o))
      : (Oe && r && Lp(t), (t.flags |= 1), bt(e, t, n, o), t.child)
  );
}
function l1(e, t, n, r, o) {
  if (Nt(n)) {
    var i = !0;
    yl(t);
  } else i = !1;
  if ((Vo(t, o), t.stateNode === null))
    za(e, t), fy(t, n, r), df(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = rn(u))
      : ((u = Nt(n) ? ro : _t.current), (u = Xo(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Zm(t, s, r, u)),
      (pr = !1);
    var p = t.memoizedState;
    (s.state = p),
      Sl(t, r, s, o),
      (l = t.memoizedState),
      a !== r || p !== l || Pt.current || pr
        ? (typeof d == "function" && (uf(t, n, d, r), (l = t.memoizedState)),
          (a = pr || Jm(t, n, a, r, p, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      uy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : fn(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (p = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = rn(l))
        : ((l = Nt(n) ? ro : _t.current), (l = Xo(t, l)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || p !== l) && Zm(t, s, r, l)),
      (pr = !1),
      (p = t.memoizedState),
      (s.state = p),
      Sl(t, r, s, o);
    var h = t.memoizedState;
    a !== f || p !== h || Pt.current || pr
      ? (typeof x == "function" && (uf(t, n, x, r), (h = t.memoizedState)),
        (u = pr || Jm(t, n, u, r, p, h, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, h, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, h, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (s.props = r),
        (s.state = h),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hf(e, t, n, r, i, o);
}
function hf(e, t, n, r, o, i) {
  Fy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && qm(t, n, !1), Zn(e, t, i);
  (r = t.stateNode), (A3.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Zo(t, e.child, null, i)), (t.child = Zo(t, null, a, i)))
      : bt(e, t, a, i),
    (t.memoizedState = r.state),
    o && qm(t, n, !0),
    t.child
  );
}
function Dy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Km(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Km(e, t.context, !1),
    Hp(e, t.containerInfo);
}
function c1(e, t, n, r, o) {
  return Jo(), Ip(o), (t.flags |= 256), bt(e, t, n, r), t.child;
}
var mf = { dehydrated: null, treeContext: null, retryLane: 0 };
function gf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function By(e, t, n) {
  var r = t.pendingProps,
    o = Le.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ee(Le, o & 1),
    e === null)
  )
    return (
      lf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = fc(s, r, 0, null)),
              (e = eo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = gf(n)),
              (t.memoizedState = mf),
              e)
            : Xp(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return I3(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = $r(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = $r(a, i)) : ((i = eo(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? gf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = mf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = $r(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xp(e, t) {
  return (
    (t = fc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function va(e, t, n, r) {
  return (
    r !== null && Ip(r),
    Zo(t, e.child, null, n),
    (e = Xp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function I3(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ju(Error(F(422)))), va(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = fc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = eo(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Zo(t, e.child, null, s),
        (t.child.memoizedState = gf(s)),
        (t.memoizedState = mf),
        i);
  if (!(t.mode & 1)) return va(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(F(419))), (r = Ju(i, r, void 0)), va(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Et || a)) {
    if (((r = ot), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Jn(e, o), gn(r, e, o, -1));
    }
    return rh(), (r = Ju(Error(F(421)))), va(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Q3.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ft = Cr(o.nextSibling)),
      (Dt = t),
      (Oe = !0),
      (hn = null),
      e !== null &&
        ((Yt[Qt++] = Vn),
        (Yt[Qt++] = Kn),
        (Yt[Qt++] = oo),
        (Vn = e.id),
        (Kn = e.overflow),
        (oo = t)),
      (t = Xp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function u1(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cf(e.return, t, n);
}
function Zu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Uy(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((bt(e, t, r.children, n), (r = Le.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && u1(e, n, t);
        else if (e.tag === 19) u1(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ee(Le, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Cl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Zu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Cl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Zu(t, !0, n, null, i);
        break;
      case "together":
        Zu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function za(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Zn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (so |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $r(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = $r(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function z3(e, t, n) {
  switch (t.tag) {
    case 3:
      Dy(t), Jo();
      break;
    case 5:
      my(t);
      break;
    case 1:
      Nt(t.type) && yl(t);
      break;
    case 4:
      Hp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ee(bl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ee(Le, Le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? By(e, t, n)
          : (Ee(Le, Le.current & 1),
            (e = Zn(e, t, n)),
            e !== null ? e.sibling : null);
      Ee(Le, Le.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ee(Le, Le.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zy(e, t, n);
  }
  return Zn(e, t, n);
}
var Hy, vf, Wy, Vy;
Hy = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
vf = function () {};
Wy = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Yr(On.current);
    var i = null;
    switch (n) {
      case "input":
        (o = zd(e, o)), (r = zd(e, r)), (i = []);
        break;
      case "select":
        (o = ze({}, o, { value: void 0 })),
          (r = ze({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Bd(e, o)), (r = Bd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gl);
    }
    Hd(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ms.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ms.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && $e("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ii(e, t) {
  if (!Oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function mt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function F3(e, t, n) {
  var r = t.pendingProps;
  switch ((Ap(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return mt(t), null;
    case 1:
      return Nt(t.type) && vl(), mt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ei(),
        Ne(Pt),
        Ne(_t),
        Vp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ma(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), hn !== null && (kf(hn), (hn = null)))),
        vf(e, t),
        mt(t),
        null
      );
    case 5:
      Wp(t);
      var o = Yr(Es.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wy(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return mt(t), null;
        }
        if (((e = Yr(On.current)), ma(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Pn] = t), (r[ks] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $e("cancel", r), $e("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $e("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Gi.length; o++) $e(Gi[o], r);
              break;
            case "source":
              $e("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $e("error", r), $e("load", r);
              break;
            case "details":
              $e("toggle", r);
              break;
            case "input":
              _m(r, i), $e("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                $e("invalid", r);
              break;
            case "textarea":
              bm(r, i), $e("invalid", r);
          }
          Hd(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ha(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ha(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ms.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  $e("scroll", r);
            }
          switch (n) {
            case "input":
              sa(r), xm(r, i, !0);
              break;
            case "textarea":
              sa(r), wm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = gl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = yv(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Pn] = t),
            (e[ks] = r),
            Hy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Wd(n, r)), n)) {
              case "dialog":
                $e("cancel", e), $e("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $e("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Gi.length; o++) $e(Gi[o], e);
                o = r;
                break;
              case "source":
                $e("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                $e("error", e), $e("load", e), (o = r);
                break;
              case "details":
                $e("toggle", e), (o = r);
                break;
              case "input":
                _m(e, r), (o = zd(e, r)), $e("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ze({}, r, { value: void 0 })),
                  $e("invalid", e);
                break;
              case "textarea":
                bm(e, r), (o = Bd(e, r)), $e("invalid", e);
                break;
              default:
                o = r;
            }
            Hd(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? bv(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && _v(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && gs(e, l)
                    : typeof l == "number" && gs(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ms.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && $e("scroll", e)
                      : l != null && bp(e, i, l, s));
              }
            switch (n) {
              case "input":
                sa(e), xm(e, r, !1);
                break;
              case "textarea":
                sa(e), wm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Bo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Bo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = gl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return mt(t), null;
    case 6:
      if (e && t.stateNode != null) Vy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = Yr(Es.current)), Yr(On.current), ma(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pn] = t),
            (i = r.nodeValue !== n) && ((e = Dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ha(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ha(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pn] = t),
            (t.stateNode = r);
      }
      return mt(t), null;
    case 13:
      if (
        (Ne(Le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Oe && Ft !== null && t.mode & 1 && !(t.flags & 128))
          ly(), Jo(), (t.flags |= 98560), (i = !1);
        else if (((i = ma(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(F(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(F(317));
            i[Pn] = t;
          } else
            Jo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          mt(t), (i = !1);
        } else hn !== null && (kf(hn), (hn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Le.current & 1 ? et === 0 && (et = 3) : rh())),
          t.updateQueue !== null && (t.flags |= 4),
          mt(t),
          null);
    case 4:
      return (
        ei(), vf(e, t), e === null && Ss(t.stateNode.containerInfo), mt(t), null
      );
    case 10:
      return Dp(t.type._context), mt(t), null;
    case 17:
      return Nt(t.type) && vl(), mt(t), null;
    case 19:
      if ((Ne(Le), (i = t.memoizedState), i === null)) return mt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Ii(i, !1);
        else {
          if (et !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Cl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ii(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ee(Le, (Le.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            We() > ni &&
            ((t.flags |= 128), (r = !0), Ii(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Cl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ii(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Oe)
            )
              return mt(t), null;
          } else
            2 * We() - i.renderingStartTime > ni &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ii(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = We()),
          (t.sibling = null),
          (n = Le.current),
          Ee(Le, r ? (n & 1) | 2 : n & 1),
          t)
        : (mt(t), null);
    case 22:
    case 23:
      return (
        nh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? At & 1073741824 && (mt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : mt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function D3(e, t) {
  switch ((Ap(t), t.tag)) {
    case 1:
      return (
        Nt(t.type) && vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ei(),
        Ne(Pt),
        Ne(_t),
        Vp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wp(t), null;
    case 13:
      if (
        (Ne(Le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        Jo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ne(Le), null;
    case 4:
      return ei(), null;
    case 10:
      return Dp(t.type._context), null;
    case 22:
    case 23:
      return nh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ya = !1,
  yt = !1,
  B3 = typeof WeakSet == "function" ? WeakSet : Set,
  K = null;
function zo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ue(e, t, r);
      }
    else n.current = null;
}
function yf(e, t, n) {
  try {
    n();
  } catch (r) {
    Ue(e, t, r);
  }
}
var d1 = !1;
function U3(e, t) {
  if (((ef = pl), (e = Yv()), Mp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (p = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === o && (a = s),
                p === i && ++d === r && (l = s),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = x;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (tf = { focusedElem: e, selectionRange: n }, pl = !1, K = t; K !== null; )
    if (((t = K), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (K = e);
    else
      for (; K !== null; ) {
        t = K;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var m = h.memoizedProps,
                    b = h.memoizedState,
                    _ = t.stateNode,
                    v = _.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : fn(t.type, m),
                      b
                    );
                  _.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (w) {
          Ue(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (K = e);
          break;
        }
        K = t.return;
      }
  return (h = d1), (d1 = !1), h;
}
function ls(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && yf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function uc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _f(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ky(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ky(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pn], delete t[ks], delete t[of], delete t[C3], delete t[k3])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function f1(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function xf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xf(e, t, n), e = e.sibling; e !== null; ) xf(e, t, n), (e = e.sibling);
}
function bf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bf(e, t, n), e = e.sibling; e !== null; ) bf(e, t, n), (e = e.sibling);
}
var lt = null,
  pn = !1;
function sr(e, t, n) {
  for (n = n.child; n !== null; ) Gy(e, t, n), (n = n.sibling);
}
function Gy(e, t, n) {
  if (Tn && typeof Tn.onCommitFiberUnmount == "function")
    try {
      Tn.onCommitFiberUnmount(nc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      yt || zo(n, t);
    case 6:
      var r = lt,
        o = pn;
      (lt = null),
        sr(e, t, n),
        (lt = r),
        (pn = o),
        lt !== null &&
          (pn
            ? ((e = lt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : lt.removeChild(n.stateNode));
      break;
    case 18:
      lt !== null &&
        (pn
          ? ((e = lt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ku(e.parentNode, n)
              : e.nodeType === 1 && Ku(e, n),
            xs(e))
          : Ku(lt, n.stateNode));
      break;
    case 4:
      (r = lt),
        (o = pn),
        (lt = n.stateNode.containerInfo),
        (pn = !0),
        sr(e, t, n),
        (lt = r),
        (pn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !yt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && yf(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      sr(e, t, n);
      break;
    case 1:
      if (
        !yt &&
        (zo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ue(n, t, a);
        }
      sr(e, t, n);
      break;
    case 21:
      sr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((yt = (r = yt) || n.memoizedState !== null), sr(e, t, n), (yt = r))
        : sr(e, t, n);
      break;
    default:
      sr(e, t, n);
  }
}
function p1(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new B3()),
      t.forEach(function (r) {
        var o = X3.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function un(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (lt = a.stateNode), (pn = !1);
              break e;
            case 3:
              (lt = a.stateNode.containerInfo), (pn = !0);
              break e;
            case 4:
              (lt = a.stateNode.containerInfo), (pn = !0);
              break e;
          }
          a = a.return;
        }
        if (lt === null) throw Error(F(160));
        Gy(i, s, o), (lt = null), (pn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ue(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Yy(t, e), (t = t.sibling);
}
function Yy(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((un(t, e), Sn(e), r & 4)) {
        try {
          ls(3, e, e.return), uc(3, e);
        } catch (m) {
          Ue(e, e.return, m);
        }
        try {
          ls(5, e, e.return);
        } catch (m) {
          Ue(e, e.return, m);
        }
      }
      break;
    case 1:
      un(t, e), Sn(e), r & 512 && n !== null && zo(n, n.return);
      break;
    case 5:
      if (
        (un(t, e),
        Sn(e),
        r & 512 && n !== null && zo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          gs(o, "");
        } catch (m) {
          Ue(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && gv(o, i),
              Wd(a, s);
            var u = Wd(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                f = l[s + 1];
              d === "style"
                ? bv(o, f)
                : d === "dangerouslySetInnerHTML"
                ? _v(o, f)
                : d === "children"
                ? gs(o, f)
                : bp(o, d, f, u);
            }
            switch (a) {
              case "input":
                Fd(o, i);
                break;
              case "textarea":
                vv(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Bo(o, !!i.multiple, x, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bo(o, !!i.multiple, i.defaultValue, !0)
                      : Bo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ks] = i;
          } catch (m) {
            Ue(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((un(t, e), Sn(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          Ue(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (un(t, e), Sn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          xs(t.containerInfo);
        } catch (m) {
          Ue(e, e.return, m);
        }
      break;
    case 4:
      un(t, e), Sn(e);
      break;
    case 13:
      un(t, e),
        Sn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (eh = We())),
        r & 4 && p1(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((yt = (u = yt) || d), un(t, e), (yt = u)) : un(t, e),
        Sn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (K = e, d = e.child; d !== null; ) {
            for (f = K = d; K !== null; ) {
              switch (((p = K), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ls(4, p, p.return);
                  break;
                case 1:
                  zo(p, p.return);
                  var h = p.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (m) {
                      Ue(r, n, m);
                    }
                  }
                  break;
                case 5:
                  zo(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    m1(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = p), (K = x)) : m1(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = xv("display", s)));
              } catch (m) {
                Ue(e, e.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (m) {
                Ue(e, e.return, m);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      un(t, e), Sn(e), r & 4 && p1(e);
      break;
    case 21:
      break;
    default:
      un(t, e), Sn(e);
  }
}
function Sn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (gs(o, ""), (r.flags &= -33));
          var i = f1(e);
          bf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = f1(e);
          xf(e, a, s);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      Ue(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function H3(e, t, n) {
  (K = e), Qy(e);
}
function Qy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; K !== null; ) {
    var o = K,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ya;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || yt;
        a = ya;
        var u = yt;
        if (((ya = s), (yt = l) && !u))
          for (K = o; K !== null; )
            (s = K),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? g1(o)
                : l !== null
                ? ((l.return = s), (K = l))
                : g1(o);
        for (; i !== null; ) (K = i), Qy(i), (i = i.sibling);
        (K = o), (ya = a), (yt = u);
      }
      h1(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (K = i)) : h1(e);
  }
}
function h1(e) {
  for (; K !== null; ) {
    var t = K;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || uc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !yt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : fn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Xm(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xm(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && xs(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        yt || (t.flags & 512 && _f(t));
      } catch (p) {
        Ue(t, t.return, p);
      }
    }
    if (t === e) {
      K = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function m1(e) {
  for (; K !== null; ) {
    var t = K;
    if (t === e) {
      K = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (K = n);
      break;
    }
    K = t.return;
  }
}
function g1(e) {
  for (; K !== null; ) {
    var t = K;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            uc(4, t);
          } catch (l) {
            Ue(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ue(t, o, l);
            }
          }
          var i = t.return;
          try {
            _f(t);
          } catch (l) {
            Ue(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _f(t);
          } catch (l) {
            Ue(t, s, l);
          }
      }
    } catch (l) {
      Ue(t, t.return, l);
    }
    if (t === e) {
      K = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (K = a);
      break;
    }
    K = t.return;
  }
}
var W3 = Math.ceil,
  El = nr.ReactCurrentDispatcher,
  Jp = nr.ReactCurrentOwner,
  en = nr.ReactCurrentBatchConfig,
  fe = 0,
  ot = null,
  Ye = null,
  dt = 0,
  At = 0,
  Fo = Ar(0),
  et = 0,
  Ns = null,
  so = 0,
  dc = 0,
  Zp = 0,
  cs = null,
  jt = null,
  eh = 0,
  ni = 1 / 0,
  Dn = null,
  $l = !1,
  wf = null,
  jr = null,
  _a = !1,
  yr = null,
  Rl = 0,
  us = 0,
  Sf = null,
  Fa = -1,
  Da = 0;
function wt() {
  return fe & 6 ? We() : Fa !== -1 ? Fa : (Fa = We());
}
function Er(e) {
  return e.mode & 1
    ? fe & 2 && dt !== 0
      ? dt & -dt
      : E3.transition !== null
      ? (Da === 0 && (Da = Ov()), Da)
      : ((e = _e),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Dv(e.type))),
        e)
    : 1;
}
function gn(e, t, n, r) {
  if (50 < us) throw ((us = 0), (Sf = null), Error(F(185)));
  Bs(e, n, r),
    (!(fe & 2) || e !== ot) &&
      (e === ot && (!(fe & 2) && (dc |= n), et === 4 && mr(e, dt)),
      Tt(e, r),
      n === 1 && fe === 0 && !(t.mode & 1) && ((ni = We() + 500), ac && Ir()));
}
function Tt(e, t) {
  var n = e.callbackNode;
  Ew(e, t);
  var r = fl(e, e === ot ? dt : 0);
  if (r === 0)
    n !== null && km(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && km(n), t === 1))
      e.tag === 0 ? j3(v1.bind(null, e)) : iy(v1.bind(null, e)),
        w3(function () {
          !(fe & 6) && Ir();
        }),
        (n = null);
    else {
      switch (Mv(r)) {
        case 1:
          n = jp;
          break;
        case 4:
          n = Nv;
          break;
        case 16:
          n = dl;
          break;
        case 536870912:
          n = Tv;
          break;
        default:
          n = dl;
      }
      n = o_(n, Xy.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xy(e, t) {
  if (((Fa = -1), (Da = 0), fe & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (Ko() && e.callbackNode !== n) return null;
  var r = fl(e, e === ot ? dt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r);
  else {
    t = r;
    var o = fe;
    fe |= 2;
    var i = Zy();
    (ot !== e || dt !== t) && ((Dn = null), (ni = We() + 500), Zr(e, t));
    do
      try {
        q3();
        break;
      } catch (a) {
        Jy(e, a);
      }
    while (!0);
    Fp(),
      (El.current = i),
      (fe = o),
      Ye !== null ? (t = 0) : ((ot = null), (dt = 0), (t = et));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Yd(e)), o !== 0 && ((r = o), (t = Cf(e, o)))), t === 1)
    )
      throw ((n = Ns), Zr(e, 0), mr(e, r), Tt(e, We()), n);
    if (t === 6) mr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !V3(o) &&
          ((t = Pl(e, r)),
          t === 2 && ((i = Yd(e)), i !== 0 && ((r = i), (t = Cf(e, i)))),
          t === 1))
      )
        throw ((n = Ns), Zr(e, 0), mr(e, r), Tt(e, We()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Wr(e, jt, Dn);
          break;
        case 3:
          if (
            (mr(e, r), (r & 130023424) === r && ((t = eh + 500 - We()), 10 < t))
          ) {
            if (fl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              wt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = rf(Wr.bind(null, e, jt, Dn), t);
            break;
          }
          Wr(e, jt, Dn);
          break;
        case 4:
          if ((mr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - mn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = We() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * W3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rf(Wr.bind(null, e, jt, Dn), r);
            break;
          }
          Wr(e, jt, Dn);
          break;
        case 5:
          Wr(e, jt, Dn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Tt(e, We()), e.callbackNode === n ? Xy.bind(null, e) : null;
}
function Cf(e, t) {
  var n = cs;
  return (
    e.current.memoizedState.isDehydrated && (Zr(e, t).flags |= 256),
    (e = Pl(e, t)),
    e !== 2 && ((t = jt), (jt = n), t !== null && kf(t)),
    e
  );
}
function kf(e) {
  jt === null ? (jt = e) : jt.push.apply(jt, e);
}
function V3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!yn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mr(e, t) {
  for (
    t &= ~Zp,
      t &= ~dc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - mn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function v1(e) {
  if (fe & 6) throw Error(F(327));
  Ko();
  var t = fl(e, 0);
  if (!(t & 1)) return Tt(e, We()), null;
  var n = Pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yd(e);
    r !== 0 && ((t = r), (n = Cf(e, r)));
  }
  if (n === 1) throw ((n = Ns), Zr(e, 0), mr(e, t), Tt(e, We()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wr(e, jt, Dn),
    Tt(e, We()),
    null
  );
}
function th(e, t) {
  var n = fe;
  fe |= 1;
  try {
    return e(t);
  } finally {
    (fe = n), fe === 0 && ((ni = We() + 500), ac && Ir());
  }
}
function ao(e) {
  yr !== null && yr.tag === 0 && !(fe & 6) && Ko();
  var t = fe;
  fe |= 1;
  var n = en.transition,
    r = _e;
  try {
    if (((en.transition = null), (_e = 1), e)) return e();
  } finally {
    (_e = r), (en.transition = n), (fe = t), !(fe & 6) && Ir();
  }
}
function nh() {
  (At = Fo.current), Ne(Fo);
}
function Zr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), b3(n)), Ye !== null))
    for (n = Ye.return; n !== null; ) {
      var r = n;
      switch ((Ap(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vl();
          break;
        case 3:
          ei(), Ne(Pt), Ne(_t), Vp();
          break;
        case 5:
          Wp(r);
          break;
        case 4:
          ei();
          break;
        case 13:
          Ne(Le);
          break;
        case 19:
          Ne(Le);
          break;
        case 10:
          Dp(r.type._context);
          break;
        case 22:
        case 23:
          nh();
      }
      n = n.return;
    }
  if (
    ((ot = e),
    (Ye = e = $r(e.current, null)),
    (dt = At = t),
    (et = 0),
    (Ns = null),
    (Zp = dc = so = 0),
    (jt = cs = null),
    Gr !== null)
  ) {
    for (t = 0; t < Gr.length; t++)
      if (((n = Gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Gr = null;
  }
  return e;
}
function Jy(e, t) {
  do {
    var n = Ye;
    try {
      if ((Fp(), (Aa.current = jl), kl)) {
        for (var r = Ae.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        kl = !1;
      }
      if (
        ((io = 0),
        (nt = Je = Ae = null),
        (as = !1),
        ($s = 0),
        (Jp.current = null),
        n === null || n.return === null)
      ) {
        (et = 1), (Ns = t), (Ye = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = dt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = o1(s);
          if (x !== null) {
            (x.flags &= -257),
              i1(x, s, a, i, t),
              x.mode & 1 && r1(i, u, t),
              (t = x),
              (l = u);
            var h = t.updateQueue;
            if (h === null) {
              var m = new Set();
              m.add(l), (t.updateQueue = m);
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              r1(i, u, t), rh();
              break e;
            }
            l = Error(F(426));
          }
        } else if (Oe && a.mode & 1) {
          var b = o1(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              i1(b, s, a, i, t),
              Ip(ti(l, a));
            break e;
          }
        }
        (i = l = ti(l, a)),
          et !== 4 && (et = 2),
          cs === null ? (cs = [i]) : cs.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var _ = Ly(i, l, t);
              Qm(i, _);
              break e;
            case 1:
              a = l;
              var v = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (jr === null || !jr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = Ay(i, a, t);
                Qm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      t_(n);
    } catch (S) {
      (t = S), Ye === n && n !== null && (Ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zy() {
  var e = El.current;
  return (El.current = jl), e === null ? jl : e;
}
function rh() {
  (et === 0 || et === 3 || et === 2) && (et = 4),
    ot === null || (!(so & 268435455) && !(dc & 268435455)) || mr(ot, dt);
}
function Pl(e, t) {
  var n = fe;
  fe |= 2;
  var r = Zy();
  (ot !== e || dt !== t) && ((Dn = null), Zr(e, t));
  do
    try {
      K3();
      break;
    } catch (o) {
      Jy(e, o);
    }
  while (!0);
  if ((Fp(), (fe = n), (El.current = r), Ye !== null)) throw Error(F(261));
  return (ot = null), (dt = 0), et;
}
function K3() {
  for (; Ye !== null; ) e_(Ye);
}
function q3() {
  for (; Ye !== null && !yw(); ) e_(Ye);
}
function e_(e) {
  var t = r_(e.alternate, e, At);
  (e.memoizedProps = e.pendingProps),
    t === null ? t_(e) : (Ye = t),
    (Jp.current = null);
}
function t_(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = D3(n, t)), n !== null)) {
        (n.flags &= 32767), (Ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (et = 6), (Ye = null);
        return;
      }
    } else if (((n = F3(n, t, At)), n !== null)) {
      Ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ye = t;
      return;
    }
    Ye = t = e;
  } while (t !== null);
  et === 0 && (et = 5);
}
function Wr(e, t, n) {
  var r = _e,
    o = en.transition;
  try {
    (en.transition = null), (_e = 1), G3(e, t, n, r);
  } finally {
    (en.transition = o), (_e = r);
  }
  return null;
}
function G3(e, t, n, r) {
  do Ko();
  while (yr !== null);
  if (fe & 6) throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    ($w(e, i),
    e === ot && ((Ye = ot = null), (dt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _a ||
      ((_a = !0),
      o_(dl, function () {
        return Ko(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = en.transition), (en.transition = null);
    var s = _e;
    _e = 1;
    var a = fe;
    (fe |= 4),
      (Jp.current = null),
      U3(e, n),
      Yy(n, e),
      h3(tf),
      (pl = !!ef),
      (tf = ef = null),
      (e.current = n),
      H3(n),
      _w(),
      (fe = a),
      (_e = s),
      (en.transition = i);
  } else e.current = n;
  if (
    (_a && ((_a = !1), (yr = e), (Rl = o)),
    (i = e.pendingLanes),
    i === 0 && (jr = null),
    ww(n.stateNode),
    Tt(e, We()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if ($l) throw (($l = !1), (e = wf), (wf = null), e);
  return (
    Rl & 1 && e.tag !== 0 && Ko(),
    (i = e.pendingLanes),
    i & 1 ? (e === Sf ? us++ : ((us = 0), (Sf = e))) : (us = 0),
    Ir(),
    null
  );
}
function Ko() {
  if (yr !== null) {
    var e = Mv(Rl),
      t = en.transition,
      n = _e;
    try {
      if (((en.transition = null), (_e = 16 > e ? 16 : e), yr === null))
        var r = !1;
      else {
        if (((e = yr), (yr = null), (Rl = 0), fe & 6)) throw Error(F(331));
        var o = fe;
        for (fe |= 4, K = e.current; K !== null; ) {
          var i = K,
            s = i.child;
          if (K.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (K = u; K !== null; ) {
                  var d = K;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ls(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (K = f);
                  else
                    for (; K !== null; ) {
                      d = K;
                      var p = d.sibling,
                        x = d.return;
                      if ((Ky(d), d === u)) {
                        K = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = x), (K = p);
                        break;
                      }
                      K = x;
                    }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var m = h.child;
                if (m !== null) {
                  h.child = null;
                  do {
                    var b = m.sibling;
                    (m.sibling = null), (m = b);
                  } while (m !== null);
                }
              }
              K = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (K = s);
          else
            e: for (; K !== null; ) {
              if (((i = K), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ls(9, i, i.return);
                }
              var _ = i.sibling;
              if (_ !== null) {
                (_.return = i.return), (K = _);
                break e;
              }
              K = i.return;
            }
        }
        var v = e.current;
        for (K = v; K !== null; ) {
          s = K;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (K = y);
          else
            e: for (s = v; K !== null; ) {
              if (((a = K), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      uc(9, a);
                  }
                } catch (S) {
                  Ue(a, a.return, S);
                }
              if (a === s) {
                K = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (K = w);
                break e;
              }
              K = a.return;
            }
        }
        if (
          ((fe = o), Ir(), Tn && typeof Tn.onPostCommitFiberRoot == "function")
        )
          try {
            Tn.onPostCommitFiberRoot(nc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (_e = n), (en.transition = t);
    }
  }
  return !1;
}
function y1(e, t, n) {
  (t = ti(n, t)),
    (t = Ly(e, t, 1)),
    (e = kr(e, t, 1)),
    (t = wt()),
    e !== null && (Bs(e, 1, t), Tt(e, t));
}
function Ue(e, t, n) {
  if (e.tag === 3) y1(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        y1(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (jr === null || !jr.has(r)))
        ) {
          (e = ti(n, e)),
            (e = Ay(t, e, 1)),
            (t = kr(t, e, 1)),
            (e = wt()),
            t !== null && (Bs(t, 1, e), Tt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Y3(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = wt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ot === e &&
      (dt & n) === n &&
      (et === 4 || (et === 3 && (dt & 130023424) === dt && 500 > We() - eh)
        ? Zr(e, 0)
        : (Zp |= n)),
    Tt(e, t);
}
function n_(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ca), (ca <<= 1), !(ca & 130023424) && (ca = 4194304))
      : (t = 1));
  var n = wt();
  (e = Jn(e, t)), e !== null && (Bs(e, t, n), Tt(e, n));
}
function Q3(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), n_(e, n);
}
function X3(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), n_(e, n);
}
var r_;
r_ = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pt.current) Et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Et = !1), z3(e, t, n);
      Et = !!(e.flags & 131072);
    }
  else (Et = !1), Oe && t.flags & 1048576 && sy(t, xl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      za(e, t), (e = t.pendingProps);
      var o = Xo(t, _t.current);
      Vo(t, n), (o = qp(null, t, r, e, o, n));
      var i = Gp();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Nt(r) ? ((i = !0), yl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Up(t),
            (o.updater = lc),
            (t.stateNode = o),
            (o._reactInternals = t),
            df(t, r, e, n),
            (t = hf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Oe && i && Lp(t), bt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (za(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Z3(r)),
          (e = fn(r, e)),
          o)
        ) {
          case 0:
            t = pf(null, t, r, e, n);
            break e;
          case 1:
            t = l1(null, t, r, e, n);
            break e;
          case 11:
            t = s1(null, t, r, e, n);
            break e;
          case 14:
            t = a1(null, t, r, fn(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fn(r, o)),
        pf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fn(r, o)),
        l1(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Dy(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          uy(e, t),
          Sl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ti(Error(F(423)), t)), (t = c1(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ti(Error(F(424)), t)), (t = c1(e, t, r, n, o));
            break e;
          } else
            for (
              Ft = Cr(t.stateNode.containerInfo.firstChild),
                Dt = t,
                Oe = !0,
                hn = null,
                n = hy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jo(), r === o)) {
            t = Zn(e, t, n);
            break e;
          }
          bt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        my(t),
        e === null && lf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        nf(r, o) ? (s = null) : i !== null && nf(r, i) && (t.flags |= 32),
        Fy(e, t),
        bt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && lf(t), null;
    case 13:
      return By(e, t, n);
    case 4:
      return (
        Hp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zo(t, null, r, n)) : bt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fn(r, o)),
        s1(e, t, r, o, n)
      );
    case 7:
      return bt(e, t, t.pendingProps, n), t.child;
    case 8:
      return bt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return bt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Ee(bl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (yn(i.value, s)) {
            if (i.children === o.children && !Pt.current) {
              t = Zn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = qn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      cf(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(F(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  cf(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        bt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Vo(t, n),
        (o = rn(o)),
        (r = r(o)),
        (t.flags |= 1),
        bt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = fn(r, t.pendingProps)),
        (o = fn(r.type, o)),
        a1(e, t, r, o, n)
      );
    case 15:
      return Iy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : fn(r, o)),
        za(e, t),
        (t.tag = 1),
        Nt(r) ? ((e = !0), yl(t)) : (e = !1),
        Vo(t, n),
        fy(t, r, o),
        df(t, r, o, n),
        hf(null, t, r, !0, e, n)
      );
    case 19:
      return Uy(e, t, n);
    case 22:
      return zy(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function o_(e, t) {
  return Pv(e, t);
}
function J3(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Zt(e, t, n, r) {
  return new J3(e, t, n, r);
}
function oh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Z3(e) {
  if (typeof e == "function") return oh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Sp)) return 11;
    if (e === Cp) return 14;
  }
  return 2;
}
function $r(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Zt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ba(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) oh(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Ro:
        return eo(n.children, o, i, t);
      case wp:
        (s = 8), (o |= 8);
        break;
      case Md:
        return (
          (e = Zt(12, n, t, o | 2)), (e.elementType = Md), (e.lanes = i), e
        );
      case Ld:
        return (e = Zt(13, n, t, o)), (e.elementType = Ld), (e.lanes = i), e;
      case Ad:
        return (e = Zt(19, n, t, o)), (e.elementType = Ad), (e.lanes = i), e;
      case pv:
        return fc(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dv:
              s = 10;
              break e;
            case fv:
              s = 9;
              break e;
            case Sp:
              s = 11;
              break e;
            case Cp:
              s = 14;
              break e;
            case fr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Zt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function eo(e, t, n, r) {
  return (e = Zt(7, e, r, t)), (e.lanes = n), e;
}
function fc(e, t, n, r) {
  return (
    (e = Zt(22, e, r, t)),
    (e.elementType = pv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ed(e, t, n) {
  return (e = Zt(6, e, null, t)), (e.lanes = n), e;
}
function td(e, t, n) {
  return (
    (t = Zt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function e4(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Lu(0)),
    (this.expirationTimes = Lu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Lu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ih(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new e4(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Zt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Up(i),
    e
  );
}
function t4(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $o,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function i_(e) {
  if (!e) return Tr;
  e = e._reactInternals;
  e: {
    if (uo(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Nt(n)) return oy(e, n, t);
  }
  return t;
}
function s_(e, t, n, r, o, i, s, a, l) {
  return (
    (e = ih(n, r, !0, e, o, i, s, a, l)),
    (e.context = i_(null)),
    (n = e.current),
    (r = wt()),
    (o = Er(n)),
    (i = qn(r, o)),
    (i.callback = t ?? null),
    kr(n, i, o),
    (e.current.lanes = o),
    Bs(e, o, r),
    Tt(e, r),
    e
  );
}
function pc(e, t, n, r) {
  var o = t.current,
    i = wt(),
    s = Er(o);
  return (
    (n = i_(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kr(o, t, s)),
    e !== null && (gn(e, o, s, i), La(e, o, s)),
    s
  );
}
function Nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _1(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sh(e, t) {
  _1(e, t), (e = e.alternate) && _1(e, t);
}
function n4() {
  return null;
}
var a_ =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ah(e) {
  this._internalRoot = e;
}
hc.prototype.render = ah.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  pc(e, t, null, null);
};
hc.prototype.unmount = ah.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ao(function () {
      pc(null, e, null, null);
    }),
      (t[Xn] = null);
  }
};
function hc(e) {
  this._internalRoot = e;
}
hc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Iv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hr.length && t !== 0 && t < hr[n].priority; n++);
    hr.splice(n, 0, e), n === 0 && Fv(e);
  }
};
function lh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function mc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function x1() {}
function r4(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Nl(s);
        i.call(u);
      };
    }
    var s = s_(t, r, e, 0, null, !1, !1, "", x1);
    return (
      (e._reactRootContainer = s),
      (e[Xn] = s.current),
      Ss(e.nodeType === 8 ? e.parentNode : e),
      ao(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Nl(l);
      a.call(u);
    };
  }
  var l = ih(e, 0, !1, null, null, !1, !1, "", x1);
  return (
    (e._reactRootContainer = l),
    (e[Xn] = l.current),
    Ss(e.nodeType === 8 ? e.parentNode : e),
    ao(function () {
      pc(t, l, n, r);
    }),
    l
  );
}
function gc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Nl(s);
        a.call(l);
      };
    }
    pc(t, s, e, o);
  } else s = r4(n, t, e, o, r);
  return Nl(s);
}
Lv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qi(t.pendingLanes);
        n !== 0 &&
          (Ep(t, n | 1), Tt(t, We()), !(fe & 6) && ((ni = We() + 500), Ir()));
      }
      break;
    case 13:
      ao(function () {
        var r = Jn(e, 1);
        if (r !== null) {
          var o = wt();
          gn(r, e, 1, o);
        }
      }),
        sh(e, 1);
  }
};
$p = function (e) {
  if (e.tag === 13) {
    var t = Jn(e, 134217728);
    if (t !== null) {
      var n = wt();
      gn(t, e, 134217728, n);
    }
    sh(e, 134217728);
  }
};
Av = function (e) {
  if (e.tag === 13) {
    var t = Er(e),
      n = Jn(e, t);
    if (n !== null) {
      var r = wt();
      gn(n, e, t, r);
    }
    sh(e, t);
  }
};
Iv = function () {
  return _e;
};
zv = function (e, t) {
  var n = _e;
  try {
    return (_e = e), t();
  } finally {
    _e = n;
  }
};
Kd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Fd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = sc(r);
            if (!o) throw Error(F(90));
            mv(r), Fd(r, o);
          }
        }
      }
      break;
    case "textarea":
      vv(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bo(e, !!n.multiple, t, !1);
  }
};
Cv = th;
kv = ao;
var o4 = { usingClientEntryPoint: !1, Events: [Hs, Oo, sc, wv, Sv, th] },
  zi = {
    findFiberByHostInstance: qr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  i4 = {
    bundleType: zi.bundleType,
    version: zi.version,
    rendererPackageName: zi.rendererPackageName,
    rendererConfig: zi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $v(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zi.findFiberByHostInstance || n4,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xa.isDisabled && xa.supportsFiber)
    try {
      (nc = xa.inject(i4)), (Tn = xa);
    } catch {}
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o4;
Wt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lh(t)) throw Error(F(200));
  return t4(e, t, null, n);
};
Wt.createRoot = function (e, t) {
  if (!lh(e)) throw Error(F(299));
  var n = !1,
    r = "",
    o = a_;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ih(e, 1, !1, null, null, n, !1, r, o)),
    (e[Xn] = t.current),
    Ss(e.nodeType === 8 ? e.parentNode : e),
    new ah(t)
  );
};
Wt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = $v(t)), (e = e === null ? null : e.stateNode), e;
};
Wt.flushSync = function (e) {
  return ao(e);
};
Wt.hydrate = function (e, t, n) {
  if (!mc(t)) throw Error(F(200));
  return gc(null, e, t, !0, n);
};
Wt.hydrateRoot = function (e, t, n) {
  if (!lh(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = a_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = s_(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Xn] = t.current),
    Ss(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new hc(t);
};
Wt.render = function (e, t, n) {
  if (!mc(t)) throw Error(F(200));
  return gc(null, e, t, !1, n);
};
Wt.unmountComponentAtNode = function (e) {
  if (!mc(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (ao(function () {
        gc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xn] = null);
        });
      }),
      !0)
    : !1;
};
Wt.unstable_batchedUpdates = th;
Wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!mc(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return gc(e, t, n, !1, r);
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";
function l_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_);
    } catch (e) {
      console.error(e);
    }
}
l_(), (sv.exports = Wt);
var ch = sv.exports;
const Yi = hp(ch);
var b1 = ch;
(Td.createRoot = b1.createRoot), (Td.hydrateRoot = b1.hydrateRoot);
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ts() {
  return (
    (Ts = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ts.apply(this, arguments)
  );
}
var _r;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_r || (_r = {}));
const w1 = "popstate";
function s4(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: s = "/",
      search: a = "",
      hash: l = "",
    } = fo(o.location.hash.substr(1));
    return (
      !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
      jf(
        "",
        { pathname: s, search: a, hash: l },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(o, i) {
    let s = o.document.querySelector("base"),
      a = "";
    if (s && s.getAttribute("href")) {
      let l = o.location.href,
        u = l.indexOf("#");
      a = u === -1 ? l : l.slice(0, u);
    }
    return a + "#" + (typeof i == "string" ? i : Tl(i));
  }
  function r(o, i) {
    uh(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return l4(t, n, r, e);
}
function Ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function uh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function a4() {
  return Math.random().toString(36).substr(2, 8);
}
function S1(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function jf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ts(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? fo(t) : t,
      { state: n, key: (t && t.key) || r || a4() }
    )
  );
}
function Tl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function fo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function l4(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = _r.Pop,
    l = null,
    u = d();
  u == null && ((u = 0), s.replaceState(Ts({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = _r.Pop;
    let b = d(),
      _ = b == null ? null : b - u;
    (u = b), l && l({ action: a, location: m.location, delta: _ });
  }
  function p(b, _) {
    a = _r.Push;
    let v = jf(m.location, b, _);
    n && n(v, b), (u = d() + 1);
    let y = S1(v, u),
      w = m.createHref(v);
    try {
      s.pushState(y, "", w);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(w);
    }
    i && l && l({ action: a, location: m.location, delta: 1 });
  }
  function x(b, _) {
    a = _r.Replace;
    let v = jf(m.location, b, _);
    n && n(v, b), (u = d());
    let y = S1(v, u),
      w = m.createHref(v);
    s.replaceState(y, "", w),
      i && l && l({ action: a, location: m.location, delta: 0 });
  }
  function h(b) {
    let _ = o.location.origin !== "null" ? o.location.origin : o.location.href,
      v = typeof b == "string" ? b : Tl(b);
    return (
      (v = v.replace(/ $/, "%20")),
      Ie(
        _,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, _)
    );
  }
  let m = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(w1, f),
        (l = b),
        () => {
          o.removeEventListener(w1, f), (l = null);
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: h,
    encodeLocation(b) {
      let _ = h(b);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: p,
    replace: x,
    go(b) {
      return s.go(b);
    },
  };
  return m;
}
var C1;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(C1 || (C1 = {}));
function c4(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? fo(t) : t,
    o = ri(r.pathname || "/", n);
  if (o == null) return null;
  let i = c_(e);
  u4(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) {
    let l = b4(o);
    s = _4(i[a], l);
  }
  return s;
}
function c_(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Ie(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Rr([r, l.relativePath]),
      d = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Ie(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      c_(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: v4(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of u_(i.path)) o(i, s, l);
    }),
    t
  );
}
function u_(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = u_(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function u4(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : y4(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const d4 = /^:[\w-]+$/,
  f4 = 3,
  p4 = 2,
  h4 = 1,
  m4 = 10,
  g4 = -2,
  k1 = (e) => e === "*";
function v4(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(k1) && (r += g4),
    t && (r += p4),
    n
      .filter((o) => !k1(o))
      .reduce((o, i) => o + (d4.test(i) ? f4 : i === "" ? h4 : m4), r)
  );
}
function y4(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _4(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      d = Ef(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = a.route;
    i.push({
      params: r,
      pathname: Rr([o, d.pathname]),
      pathnameBase: k4(Rr([o, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (o = Rr([o, d.pathnameBase]));
  }
  return i;
}
function Ef(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = x4(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: p, isOptional: x } = d;
      if (p === "*") {
        let m = a[f] || "";
        s = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const h = a[f];
      return (
        x && !h ? (u[p] = void 0) : (u[p] = (h || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function x4(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    uh(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function b4(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      uh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ri(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function w4(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? fo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : S4(n, t)) : t,
    search: j4(r),
    hash: E4(o),
  };
}
function S4(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function nd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function C4(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function dh(e, t) {
  let n = C4(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function fh(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = fo(e))
    : ((o = Ts({}, e)),
      Ie(
        !o.pathname || !o.pathname.includes("?"),
        nd("?", "pathname", "search", o)
      ),
      Ie(
        !o.pathname || !o.pathname.includes("#"),
        nd("#", "pathname", "hash", o)
      ),
      Ie(!o.search || !o.search.includes("#"), nd("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      o.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = w4(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const Rr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  k4 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  j4 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  E4 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function $4(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const d_ = ["post", "put", "patch", "delete"];
new Set(d_);
const R4 = ["get", ...d_];
new Set(R4);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Os() {
  return (
    (Os = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Os.apply(this, arguments)
  );
}
const vc = g.createContext(null),
  f_ = g.createContext(null),
  rr = g.createContext(null),
  yc = g.createContext(null),
  An = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  p_ = g.createContext(null);
function P4(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  vi() || Ie(!1);
  let { basename: r, navigator: o } = g.useContext(rr),
    { hash: i, pathname: s, search: a } = _c(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Rr([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function vi() {
  return g.useContext(yc) != null;
}
function zr() {
  return vi() || Ie(!1), g.useContext(yc).location;
}
function h_(e) {
  g.useContext(rr).static || g.useLayoutEffect(e);
}
function tt() {
  let { isDataRoute: e } = g.useContext(An);
  return e ? V4() : N4();
}
function N4() {
  vi() || Ie(!1);
  let e = g.useContext(vc),
    { basename: t, future: n, navigator: r } = g.useContext(rr),
    { matches: o } = g.useContext(An),
    { pathname: i } = zr(),
    s = JSON.stringify(dh(o, n.v7_relativeSplatPath)),
    a = g.useRef(!1);
  return (
    h_(() => {
      a.current = !0;
    }),
    g.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = fh(u, JSON.parse(s), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Rr([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, s, i, e]
    )
  );
}
const T4 = g.createContext(null);
function O4(e) {
  let t = g.useContext(An).outlet;
  return t && g.createElement(T4.Provider, { value: e }, t);
}
function $f() {
  let { matches: e } = g.useContext(An),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function _c(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(rr),
    { matches: o } = g.useContext(An),
    { pathname: i } = zr(),
    s = JSON.stringify(dh(o, r.v7_relativeSplatPath));
  return g.useMemo(() => fh(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function M4(e, t) {
  return L4(e, t);
}
function L4(e, t, n, r) {
  vi() || Ie(!1);
  let { navigator: o } = g.useContext(rr),
    { matches: i } = g.useContext(An),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = zr(),
    d;
  if (t) {
    var f;
    let b = typeof t == "string" ? fo(t) : t;
    l === "/" || ((f = b.pathname) != null && f.startsWith(l)) || Ie(!1),
      (d = b);
  } else d = u;
  let p = d.pathname || "/",
    x = p;
  if (l !== "/") {
    let b = l.replace(/^\//, "").split("/");
    x = "/" + p.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let h = c4(e, { pathname: x }),
    m = D4(
      h &&
        h.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, a, b.params),
            pathname: Rr([
              l,
              o.encodeLocation
                ? o.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? l
                : Rr([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && m
    ? g.createElement(
        yc.Provider,
        {
          value: {
            location: Os(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: _r.Pop,
          },
        },
        m
      )
    : m;
}
function A4() {
  let e = W4(),
    t = $4(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? g.createElement("pre", { style: o }, n) : null,
    null
  );
}
const I4 = g.createElement(A4, null);
class z4 extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          An.Provider,
          { value: this.props.routeContext },
          g.createElement(p_.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function F4(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = g.useContext(vc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(An.Provider, { value: t }, r)
  );
}
function D4(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let d = s.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id])
    );
    d >= 0 || Ie(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let f = s[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: p, errors: x } = n,
          h =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!x || x[f.route.id] === void 0);
        if (f.route.lazy || h) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, f, p) => {
    let x,
      h = !1,
      m = null,
      b = null;
    n &&
      ((x = a && f.route.id ? a[f.route.id] : void 0),
      (m = f.route.errorElement || I4),
      l &&
        (u < 0 && p === 0
          ? (K4("route-fallback", !1), (h = !0), (b = null))
          : u === p &&
            ((h = !0), (b = f.route.hydrateFallbackElement || null))));
    let _ = t.concat(s.slice(0, p + 1)),
      v = () => {
        let y;
        return (
          x
            ? (y = m)
            : h
            ? (y = b)
            : f.route.Component
            ? (y = g.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = d),
          g.createElement(F4, {
            match: f,
            routeContext: { outlet: d, matches: _, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? g.createElement(z4, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: x,
          children: v(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var m_ = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(m_ || {}),
  Ol = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ol || {});
function B4(e) {
  let t = g.useContext(vc);
  return t || Ie(!1), t;
}
function U4(e) {
  let t = g.useContext(f_);
  return t || Ie(!1), t;
}
function H4(e) {
  let t = g.useContext(An);
  return t || Ie(!1), t;
}
function g_(e) {
  let t = H4(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ie(!1), n.route.id;
}
function W4() {
  var e;
  let t = g.useContext(p_),
    n = U4(Ol.UseRouteError),
    r = g_(Ol.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function V4() {
  let { router: e } = B4(m_.UseNavigateStable),
    t = g_(Ol.UseNavigateStable),
    n = g.useRef(!1);
  return (
    h_(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Os({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const j1 = {};
function K4(e, t, n) {
  !t && !j1[e] && (j1[e] = !0);
}
function E1(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  vi() || Ie(!1);
  let { future: i, static: s } = g.useContext(rr),
    { matches: a } = g.useContext(An),
    { pathname: l } = zr(),
    u = tt(),
    d = fh(t, dh(a, i.v7_relativeSplatPath), l, o === "path"),
    f = JSON.stringify(d);
  return (
    g.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: o }),
      [u, f, o, n, r]
    ),
    null
  );
}
function v_(e) {
  return O4(e.context);
}
function Re(e) {
  Ie(!1);
}
function q4(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = _r.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  vi() && Ie(!1);
  let l = t.replace(/^\/*/, "/"),
    u = g.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Os({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = fo(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: p = "",
      state: x = null,
      key: h = "default",
    } = r,
    m = g.useMemo(() => {
      let b = ri(d, l);
      return b == null
        ? null
        : {
            location: { pathname: b, search: f, hash: p, state: x, key: h },
            navigationType: o,
          };
    }, [l, d, f, p, x, h, o]);
  return m == null
    ? null
    : g.createElement(
        rr.Provider,
        { value: u },
        g.createElement(yc.Provider, { children: n, value: m })
      );
}
function G4(e) {
  let { children: t, location: n } = e;
  return M4(Rf(t), n);
}
new Promise(() => {});
function Rf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    g.Children.forEach(e, (r, o) => {
      if (!g.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === g.Fragment) {
        n.push.apply(n, Rf(r.props.children, i));
        return;
      }
      r.type !== Re && Ie(!1), !r.props.index || !r.props.children || Ie(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Rf(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ml() {
  return (
    (Ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ml.apply(this, arguments)
  );
}
function y_(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Y4(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Q4(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Y4(e);
}
const X4 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  J4 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Z4 = "6";
try {
  window.__reactRouterVersion = Z4;
} catch {}
const eS = g.createContext({ isTransitioning: !1 }),
  tS = "startTransition",
  $1 = al[tS];
function nS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = g.useRef();
  i.current == null && (i.current = s4({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = g.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = g.useCallback(
      (f) => {
        u && $1 ? $1(() => l(f)) : l(f);
      },
      [l, u]
    );
  return (
    g.useLayoutEffect(() => s.listen(d), [s, d]),
    g.createElement(q4, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const rS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  oS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  It = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: f,
      } = t,
      p = y_(t, X4),
      { basename: x } = g.useContext(rr),
      h,
      m = !1;
    if (typeof u == "string" && oS.test(u) && ((h = u), rS))
      try {
        let y = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          S = ri(w.pathname, x);
        w.origin === y.origin && S != null
          ? (u = S + w.search + w.hash)
          : (m = !0);
      } catch {}
    let b = P4(u, { relative: o }),
      _ = sS(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: o,
        unstable_viewTransition: f,
      });
    function v(y) {
      r && r(y), y.defaultPrevented || _(y);
    }
    return g.createElement(
      "a",
      Ml({}, p, { href: h || b, onClick: m || i ? r : v, ref: n, target: l })
    );
  }),
  Ll = g.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: s = !1,
        style: a,
        to: l,
        unstable_viewTransition: u,
        children: d,
      } = t,
      f = y_(t, J4),
      p = _c(l, { relative: f.relative }),
      x = zr(),
      h = g.useContext(f_),
      { navigator: m, basename: b } = g.useContext(rr),
      _ = h != null && aS(p) && u === !0,
      v = m.encodeLocation ? m.encodeLocation(p).pathname : p.pathname,
      y = x.pathname,
      w =
        h && h.navigation && h.navigation.location
          ? h.navigation.location.pathname
          : null;
    o ||
      ((y = y.toLowerCase()),
      (w = w ? w.toLowerCase() : null),
      (v = v.toLowerCase())),
      w && b && (w = ri(w, b) || w);
    const S = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let C = y === v || (!s && y.startsWith(v) && y.charAt(S) === "/"),
      k =
        w != null &&
        (w === v || (!s && w.startsWith(v) && w.charAt(v.length) === "/")),
      $ = { isActive: C, isPending: k, isTransitioning: _ },
      M = C ? r : void 0,
      O;
    typeof i == "function"
      ? (O = i($))
      : (O = [
          i,
          C ? "active" : null,
          k ? "pending" : null,
          _ ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let A = typeof a == "function" ? a($) : a;
    return g.createElement(
      It,
      Ml({}, f, {
        "aria-current": M,
        className: O,
        ref: n,
        style: A,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof d == "function" ? d($) : d
    );
  });
var Pf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Pf || (Pf = {}));
var R1;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(R1 || (R1 = {}));
function iS(e) {
  let t = g.useContext(vc);
  return t || Ie(!1), t;
}
function sS(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = tt(),
    u = zr(),
    d = _c(e, { relative: s });
  return g.useCallback(
    (f) => {
      if (Q4(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Tl(u) === Tl(d);
        l(e, {
          replace: p,
          state: o,
          preventScrollReset: i,
          relative: s,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, d, r, o, n, e, i, s, a]
  );
}
function aS(e, t) {
  t === void 0 && (t = {});
  let n = g.useContext(eS);
  n == null && Ie(!1);
  let { basename: r } = iS(Pf.useViewTransitionState),
    o = _c(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = ri(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = ri(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Ef(o.pathname, s) != null || Ef(o.pathname, i) != null;
}
const Fr = "" + new URL("FSLogo2-B-IAiBU_.png", import.meta.url).href;
var __ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (i = o(i, r(a)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number") return i;
      if (typeof i != "object") return "";
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes("[native code]")
      )
        return i.toString();
      var s = "";
      for (var a in i) t.call(i, a) && i[a] && (s = o(s, a));
      return s;
    }
    function o(i, s) {
      return s ? (i ? i + " " + s : i + s) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(__);
var lS = __.exports;
const Dr = hp(lS);
function j() {
  return (
    (j = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    j.apply(this, arguments)
  );
}
function Y(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function P1(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function cS(e) {
  var t = uS(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function uS(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dS(e, t, n) {
  var r = g.useRef(e !== void 0),
    o = g.useState(t),
    i = o[0],
    s = o[1],
    a = e !== void 0,
    l = r.current;
  return (
    (r.current = a),
    !a && l && i !== t && s(t),
    [
      a ? e : i,
      g.useCallback(
        function (u) {
          for (
            var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), p = 1;
            p < d;
            p++
          )
            f[p - 1] = arguments[p];
          n && n.apply(void 0, [u].concat(f)), s(u);
        },
        [n]
      ),
    ]
  );
}
function fS(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var o,
      i = n,
      s = i[P1(r)],
      a = i[r],
      l = Y(i, [P1(r), r].map(cS)),
      u = t[r],
      d = dS(a, s, e[u]),
      f = d[0],
      p = d[1];
    return j({}, l, ((o = {}), (o[r] = f), (o[u] = p), o));
  }, e);
}
function Nf(e, t) {
  return (
    (Nf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Nf(e, t)
  );
}
function x_(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Nf(e, t);
}
const pS = ["xxl", "xl", "lg", "md", "sm", "xs"],
  hS = "xs",
  ph = g.createContext({ prefixes: {}, breakpoints: pS, minBreakpoint: hS });
function po(e, t) {
  const { prefixes: n } = g.useContext(ph);
  return e || n[t] || t;
}
function b_() {
  const { breakpoints: e } = g.useContext(ph);
  return e;
}
function w_() {
  const { minBreakpoint: e } = g.useContext(ph);
  return e;
}
const N1 = { disabled: !1 },
  Al = q.createContext(null);
var mS = function (t) {
    return t.scrollTop;
  },
  Qi = "unmounted",
  Vr = "exited",
  Kr = "entering",
  jo = "entered",
  Tf = "exiting",
  or = (function (e) {
    x_(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = Vr), (i.appearStatus = Kr))
            : (l = jo)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = Qi)
          : (l = Vr),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Qi ? { status: Vr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Kr && s !== jo && (i = Kr)
            : (s === Kr || s === jo) && (i = Tf);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Kr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Yi.findDOMNode(this);
              s && mS(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Vr &&
            this.setState({ status: Qi });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Yi.findDOMNode(this), a],
          u = l[0],
          d = l[1],
          f = this.getTimeouts(),
          p = a ? f.appear : f.enter;
        if ((!o && !s) || N1.disabled) {
          this.safeSetState({ status: jo }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: Kr }, function () {
            i.props.onEntering(u, d),
              i.onTransitionEnd(p, function () {
                i.safeSetState({ status: jo }, function () {
                  i.props.onEntered(u, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Yi.findDOMNode(this);
        if (!i || N1.disabled) {
          this.safeSetState({ status: Vr }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Tf }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Vr }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Yi.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            d = l[1];
          this.props.addEndListener(u, d);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Qi) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = Y(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return q.createElement(
          Al.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : q.cloneElement(q.Children.only(s), a)
        );
      }),
      t
    );
  })(q.Component);
or.contextType = Al;
or.propTypes = {};
function xo() {}
or.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: xo,
  onEntering: xo,
  onEntered: xo,
  onExit: xo,
  onExiting: xo,
  onExited: xo,
};
or.UNMOUNTED = Qi;
or.EXITED = Vr;
or.ENTERING = Kr;
or.ENTERED = jo;
or.EXITING = Tf;
const S_ = or,
  T1 = (e) =>
    !e || typeof e == "function"
      ? e
      : (t) => {
          e.current = t;
        };
function gS(e, t) {
  const n = T1(e),
    r = T1(t);
  return (o) => {
    n && n(o), r && r(o);
  };
}
function vS(e, t) {
  return g.useMemo(() => gS(e, t), [e, t]);
}
function yS(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function C_(e) {
  const t = yS(e);
  return g.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const _S = ["as", "disabled"];
function xS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function bS(e) {
  return !e || e.trim() === "#";
}
function hh({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: o,
  role: i,
  onClick: s,
  tabIndex: a = 0,
  type: l,
}) {
  e || (n != null || r != null || o != null ? (e = "a") : (e = "button"));
  const u = { tagName: e };
  if (e === "button") return [{ type: l || "button", disabled: t }, u];
  const d = (p) => {
      if (((t || (e === "a" && bS(n))) && p.preventDefault(), t)) {
        p.stopPropagation();
        return;
      }
      s == null || s(p);
    },
    f = (p) => {
      p.key === " " && (p.preventDefault(), d(p));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: i ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : a,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? o : void 0,
        onClick: d,
        onKeyDown: f,
      },
      u,
    ]
  );
}
const k_ = g.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    o = xS(e, _S);
  const [i, { tagName: s }] = hh(Object.assign({ tagName: n, disabled: r }, o));
  return c.jsx(s, Object.assign({}, o, i, { ref: t }));
});
k_.displayName = "Button";
const wS = ["onKeyDown"];
function SS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function CS(e) {
  return !e || e.trim() === "#";
}
const j_ = g.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = SS(e, wS);
  const [o] = hh(Object.assign({ tagName: "a" }, r)),
    i = C_((s) => {
      o.onKeyDown(s), n == null || n(s);
    });
  return CS(r.href) || r.role === "button"
    ? c.jsx("a", Object.assign({ ref: t }, r, o, { onKeyDown: i }))
    : c.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
j_.displayName = "Anchor";
const kS = j_,
  E_ = g.forwardRef(
    (
      {
        as: e,
        bsPrefix: t,
        variant: n = "primary",
        size: r,
        active: o = !1,
        disabled: i = !1,
        className: s,
        ...a
      },
      l
    ) => {
      const u = po(t, "btn"),
        [d, { tagName: f }] = hh({ tagName: e, disabled: i, ...a }),
        p = f;
      return c.jsx(p, {
        ...d,
        ...a,
        ref: l,
        disabled: i,
        className: Dr(
          s,
          u,
          o && "active",
          n && `${u}-${n}`,
          r && `${u}-${r}`,
          a.href && i && "disabled"
        ),
      });
    }
  );
E_.displayName = "Button";
const jS = E_,
  $_ = g.createContext(null);
$_.displayName = "CardHeaderContext";
const ES = $_;
function $S({ as: e, bsPrefix: t, className: n, ...r }) {
  t = po(t, "col");
  const o = b_(),
    i = w_(),
    s = [],
    a = [];
  return (
    o.forEach((l) => {
      const u = r[l];
      delete r[l];
      let d, f, p;
      typeof u == "object" && u != null
        ? ({ span: d, offset: f, order: p } = u)
        : (d = u);
      const x = l !== i ? `-${l}` : "";
      d && s.push(d === !0 ? `${t}${x}` : `${t}${x}-${d}`),
        p != null && a.push(`order${x}-${p}`),
        f != null && a.push(`offset${x}-${f}`);
    }),
    [
      { ...r, className: Dr(n, ...s, ...a) },
      { as: e, bsPrefix: t, spans: s },
    ]
  );
}
const R_ = g.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: o = "div", bsPrefix: i, spans: s }] =
    $S(e);
  return c.jsx(o, { ...r, ref: t, className: Dr(n, !s.length && i) });
});
R_.displayName = "Col";
const RS = R_,
  P_ = g.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...o }, i) => {
      const s = po(e, "container"),
        a = typeof t == "string" ? `-${t}` : "-fluid";
      return c.jsx(n, { ref: i, ...o, className: Dr(r, t ? `${s}${a}` : s) });
    }
  );
P_.displayName = "Container";
const N_ = P_;
var PS = Function.prototype.bind.call(Function.prototype.call, [].slice);
function NS(e, t) {
  return PS(e.querySelectorAll(t));
}
function TS() {
  const [, e] = g.useReducer((t) => !t, !1);
  return e;
}
const Of = g.createContext(null),
  mh = (e, t = null) => (e != null ? String(e) : t || null),
  T_ = g.createContext(null);
T_.displayName = "NavContext";
const O_ = T_,
  OS = "data-rr-ui-",
  MS = "rrUi";
function gh(e) {
  return `${OS}${e}`;
}
function LS(e) {
  return `${MS}${e}`;
}
const M_ = g.createContext(null);
M_.displayName = "NavbarContext";
const AS = M_,
  IS = g.createContext(null),
  L_ = IS,
  zS = ["as", "active", "eventKey"];
function FS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function A_({ key: e, onClick: t, active: n, id: r, role: o, disabled: i }) {
  const s = g.useContext(Of),
    a = g.useContext(O_),
    l = g.useContext(L_);
  let u = n;
  const d = { role: o };
  if (a) {
    !o && a.role === "tablist" && (d.role = "tab");
    const f = a.getControllerId(e ?? null),
      p = a.getControlledId(e ?? null);
    (d[gh("event-key")] = e),
      (d.id = f || r),
      (u = n == null && e != null ? a.activeKey === e : n),
      (u ||
        (!(l != null && l.unmountOnExit) && !(l != null && l.mountOnEnter))) &&
        (d["aria-controls"] = p);
  }
  return (
    d.role === "tab" &&
      ((d["aria-selected"] = u),
      u || (d.tabIndex = -1),
      i && ((d.tabIndex = -1), (d["aria-disabled"] = !0))),
    (d.onClick = C_((f) => {
      i ||
        (t == null || t(f),
        e != null && s && !f.isPropagationStopped() && s(e, f));
    })),
    [d, { isActive: u }]
  );
}
const I_ = g.forwardRef((e, t) => {
  let { as: n = k_, active: r, eventKey: o } = e,
    i = FS(e, zS);
  const [s, a] = A_(Object.assign({ key: mh(o, i.href), active: r }, i));
  return (
    (s[gh("active")] = a.isActive),
    c.jsx(n, Object.assign({}, i, s, { ref: t }))
  );
});
I_.displayName = "NavItem";
const DS = I_,
  BS = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function US(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const O1 = () => {},
  M1 = gh("event-key"),
  z_ = g.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: o, role: i, onKeyDown: s } = e,
      a = US(e, BS);
    const l = TS(),
      u = g.useRef(!1),
      d = g.useContext(Of),
      f = g.useContext(L_);
    let p, x;
    f &&
      ((i = i || "tablist"),
      (o = f.activeKey),
      (p = f.getControlledId),
      (x = f.getControllerId));
    const h = g.useRef(null),
      m = (y) => {
        const w = h.current;
        if (!w) return null;
        const S = NS(w, `[${M1}]:not([aria-disabled=true])`),
          C = w.querySelector("[aria-selected=true]");
        if (!C || C !== document.activeElement) return null;
        const k = S.indexOf(C);
        if (k === -1) return null;
        let $ = k + y;
        return $ >= S.length && ($ = 0), $ < 0 && ($ = S.length - 1), S[$];
      },
      b = (y, w) => {
        y != null && (r == null || r(y, w), d == null || d(y, w));
      },
      _ = (y) => {
        if ((s == null || s(y), !f)) return;
        let w;
        switch (y.key) {
          case "ArrowLeft":
          case "ArrowUp":
            w = m(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            w = m(1);
            break;
          default:
            return;
        }
        w &&
          (y.preventDefault(),
          b(w.dataset[LS("EventKey")] || null, y),
          (u.current = !0),
          l());
      };
    g.useEffect(() => {
      if (h.current && u.current) {
        const y = h.current.querySelector(`[${M1}][aria-selected=true]`);
        y == null || y.focus();
      }
      u.current = !1;
    });
    const v = vS(t, h);
    return c.jsx(Of.Provider, {
      value: b,
      children: c.jsx(O_.Provider, {
        value: {
          role: i,
          activeKey: mh(o),
          getControlledId: p || O1,
          getControllerId: x || O1,
        },
        children: c.jsx(
          n,
          Object.assign({}, a, { onKeyDown: _, ref: v, role: i })
        ),
      }),
    });
  });
z_.displayName = "Nav";
const HS = Object.assign(z_, { Item: DS });
var L1 = { exports: {} },
  Mf = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function o(s, a, l, u, d, f) {
      var p = u || "<<anonymous>>",
        x = f || l;
      if (a[l] == null)
        return s
          ? new Error(
              "Required " +
                d +
                " `" +
                x +
                "` was not specified " +
                ("in `" + p + "`.")
            )
          : null;
      for (
        var h = arguments.length, m = Array(h > 6 ? h - 6 : 0), b = 6;
        b < h;
        b++
      )
        m[b - 6] = arguments[b];
      return r.apply(void 0, [a, l, p, d, x].concat(m));
    }
    var i = o.bind(null, !1);
    return (i.isRequired = o.bind(null, !0)), i;
  }
  e.exports = t.default;
})(Mf, Mf.exports);
var WS = Mf.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
  var n = WS,
    r = o(n);
  function o(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function i() {
    for (var s = arguments.length, a = Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    function u() {
      for (var d = arguments.length, f = Array(d), p = 0; p < d; p++)
        f[p] = arguments[p];
      var x = null;
      return (
        a.forEach(function (h) {
          if (x == null) {
            var m = h.apply(void 0, f);
            m != null && (x = m);
          }
        }),
        x
      );
    }
    return (0, r.default)(u);
  }
  e.exports = t.default;
})(L1, L1.exports);
const F_ = g.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
    (t = po(t, "nav-item")), c.jsx(n, { ref: o, className: Dr(e, t), ...r })
  )
);
F_.displayName = "NavItem";
const VS = F_,
  D_ = g.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = kS,
        active: r,
        eventKey: o,
        disabled: i = !1,
        ...s
      },
      a
    ) => {
      e = po(e, "nav-link");
      const [l, u] = A_({ key: mh(o, s.href), active: r, disabled: i, ...s });
      return c.jsx(n, {
        ...s,
        ...l,
        ref: a,
        disabled: i,
        className: Dr(t, e, i && "disabled", u.isActive && "active"),
      });
    }
  );
D_.displayName = "NavLink";
const KS = D_,
  B_ = g.forwardRef((e, t) => {
    const {
        as: n = "div",
        bsPrefix: r,
        variant: o,
        fill: i = !1,
        justify: s = !1,
        navbar: a,
        navbarScroll: l,
        className: u,
        activeKey: d,
        ...f
      } = fS(e, { activeKey: "onSelect" }),
      p = po(r, "nav");
    let x,
      h,
      m = !1;
    const b = g.useContext(AS),
      _ = g.useContext(ES);
    return (
      b
        ? ((x = b.bsPrefix), (m = a ?? !0))
        : _ && ({ cardHeaderBsPrefix: h } = _),
      c.jsx(HS, {
        as: n,
        ref: t,
        activeKey: d,
        className: Dr(u, {
          [p]: !m,
          [`${x}-nav`]: m,
          [`${x}-nav-scroll`]: m && l,
          [`${h}-${o}`]: !!h,
          [`${p}-${o}`]: !!o,
          [`${p}-fill`]: i,
          [`${p}-justified`]: s,
        }),
        ...f,
      })
    );
  });
B_.displayName = "Nav";
const U_ = Object.assign(B_, { Item: VS, Link: KS }),
  H_ = g.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
    const i = po(e, "row"),
      s = b_(),
      a = w_(),
      l = `${i}-cols`,
      u = [];
    return (
      s.forEach((d) => {
        const f = r[d];
        delete r[d];
        let p;
        f != null && typeof f == "object" ? ({ cols: p } = f) : (p = f);
        const x = d !== a ? `-${d}` : "";
        p != null && u.push(`${l}${x}-${p}`);
      }),
      c.jsx(n, { ref: o, ...r, className: Dr(t, i, ...u) })
    );
  });
H_.displayName = "Row";
const qS = H_,
  GS = "_wrapper_nmcfd_1",
  YS = "_blur__circle__1_nmcfd_8",
  QS = "_blur__circle__2_nmcfd_17",
  XS = "_blur__circle__3_nmcfd_26",
  JS = "_blur__circle__4_nmcfd_35",
  ZS = "_blur__circle__5_nmcfd_44",
  e5 = "_logo__container_nmcfd_53",
  ar = {
    wrapper: GS,
    blur__circle__1: YS,
    blur__circle__2: QS,
    blur__circle__3: XS,
    blur__circle__4: JS,
    blur__circle__5: ZS,
    logo__container: e5,
  },
  t5 = () =>
    c.jsxs("main", {
      className: ar.wrapper,
      children: [
        c.jsx("span", { className: ar.blur__circle__1 }),
        c.jsx("span", { className: ar.blur__circle__2 }),
        c.jsx("span", { className: ar.blur__circle__3 }),
        c.jsx("span", { className: ar.blur__circle__4 }),
        c.jsx("span", { className: ar.blur__circle__5 }),
        c.jsx(qS, {
          className: "d-flex justify-content-center z-1",
          children: c.jsx(RS, {
            lg: "6",
            children: c.jsxs("section", {
              className: ar.login__container,
              children: [
                c.jsx("div", {
                  className: ar.logo__container,
                  children: c.jsx("img", { src: Fr, alt: "logo" }),
                }),
                c.jsx(v_, {}),
              ],
            }),
          }),
        }),
      ],
    }),
  n5 = "_sidebar_jcf4y_2",
  r5 = "_logo__container_jcf4y_11",
  o5 = "_nav__icon_jcf4y_35",
  i5 = "_nav__bar_jcf4y_39",
  s5 = "_activeLink_jcf4y_60",
  a5 = "_btn__container_jcf4y_72",
  l5 = "_log__out_jcf4y_79",
  Xe = {
    sidebar: n5,
    logo__container: r5,
    nav__icon: o5,
    nav__bar: i5,
    activeLink: s5,
    btn__container: a5,
    log__out: l5,
  };
function Hn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function W_(e) {
  if (!Hn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = W_(e[n]);
    }),
    t
  );
}
function tn(e, t, n = { clone: !0 }) {
  const r = n.clone ? j({}, e) : e;
  return (
    Hn(e) &&
      Hn(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Hn(t[o]) && o in e && Hn(e[o])
            ? (r[o] = tn(e[o], t[o], n))
            : n.clone
            ? (r[o] = Hn(t[o]) ? W_(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
const c5 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: tn, isPlainObject: Hn },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Or(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const u5 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Or }, Symbol.toStringTag, {
    value: "Module",
  })
);
var V_ = { exports: {} },
  xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vh = Symbol.for("react.element"),
  yh = Symbol.for("react.portal"),
  xc = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  Sc = Symbol.for("react.provider"),
  Cc = Symbol.for("react.context"),
  d5 = Symbol.for("react.server_context"),
  kc = Symbol.for("react.forward_ref"),
  jc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.suspense_list"),
  $c = Symbol.for("react.memo"),
  Rc = Symbol.for("react.lazy"),
  f5 = Symbol.for("react.offscreen"),
  K_;
K_ = Symbol.for("react.module.reference");
function ln(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case vh:
        switch (((e = e.type), e)) {
          case xc:
          case wc:
          case bc:
          case jc:
          case Ec:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case d5:
              case Cc:
              case kc:
              case Rc:
              case $c:
              case Sc:
                return e;
              default:
                return t;
            }
        }
      case yh:
        return t;
    }
  }
}
xe.ContextConsumer = Cc;
xe.ContextProvider = Sc;
xe.Element = vh;
xe.ForwardRef = kc;
xe.Fragment = xc;
xe.Lazy = Rc;
xe.Memo = $c;
xe.Portal = yh;
xe.Profiler = wc;
xe.StrictMode = bc;
xe.Suspense = jc;
xe.SuspenseList = Ec;
xe.isAsyncMode = function () {
  return !1;
};
xe.isConcurrentMode = function () {
  return !1;
};
xe.isContextConsumer = function (e) {
  return ln(e) === Cc;
};
xe.isContextProvider = function (e) {
  return ln(e) === Sc;
};
xe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === vh;
};
xe.isForwardRef = function (e) {
  return ln(e) === kc;
};
xe.isFragment = function (e) {
  return ln(e) === xc;
};
xe.isLazy = function (e) {
  return ln(e) === Rc;
};
xe.isMemo = function (e) {
  return ln(e) === $c;
};
xe.isPortal = function (e) {
  return ln(e) === yh;
};
xe.isProfiler = function (e) {
  return ln(e) === wc;
};
xe.isStrictMode = function (e) {
  return ln(e) === bc;
};
xe.isSuspense = function (e) {
  return ln(e) === jc;
};
xe.isSuspenseList = function (e) {
  return ln(e) === Ec;
};
xe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xc ||
    e === wc ||
    e === bc ||
    e === jc ||
    e === Ec ||
    e === f5 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Rc ||
        e.$$typeof === $c ||
        e.$$typeof === Sc ||
        e.$$typeof === Cc ||
        e.$$typeof === kc ||
        e.$$typeof === K_ ||
        e.getModuleId !== void 0))
  );
};
xe.typeOf = ln;
V_.exports = xe;
var A1 = V_.exports;
const p5 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function q_(e) {
  const t = `${e}`.match(p5);
  return (t && t[1]) || "";
}
function G_(e, t = "") {
  return e.displayName || e.name || q_(e) || t;
}
function I1(e, t, n) {
  const r = G_(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function h5(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return G_(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A1.ForwardRef:
          return I1(e, e.render, "ForwardRef");
        case A1.Memo:
          return I1(e, e.type, "memo");
        default:
          return;
      }
  }
}
const m5 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: h5, getFunctionName: q_ },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function G(e) {
  if (typeof e != "string") throw new Error(Or(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const g5 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: G }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Il(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function _h(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function v5(e, t) {
  return () => null;
}
function Ua(e, t) {
  var n, r;
  return (
    g.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function Bt(e) {
  return (e && e.ownerDocument) || document;
}
function Mr(e) {
  return Bt(e).defaultView || window;
}
function y5(e, t) {
  return () => null;
}
function zl(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const er = typeof window < "u" ? g.useLayoutEffect : g.useEffect;
let z1 = 0;
function _5(e) {
  const [t, n] = g.useState(e),
    r = e || t;
  return (
    g.useEffect(() => {
      t == null && ((z1 += 1), n(`mui-${z1}`));
    }, [t]),
    r
  );
}
const F1 = al.useId;
function xh(e) {
  if (F1 !== void 0) {
    const t = F1();
    return e ?? t;
  }
  return _5(e);
}
function x5(e, t, n, r, o) {
  return null;
}
function bh({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = g.useRef(e !== void 0),
    [i, s] = g.useState(t),
    a = o ? e : i,
    l = g.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function Qr(e) {
  const t = g.useRef(e);
  return (
    er(() => {
      t.current = e;
    }),
    g.useRef((...n) => (0, t.current)(...n)).current
  );
}
function xt(...e) {
  return g.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              zl(n, t);
            });
          },
    e
  );
}
const D1 = {};
function b5(e, t) {
  const n = g.useRef(D1);
  return n.current === D1 && (n.current = e(t)), n;
}
const w5 = [];
function S5(e) {
  g.useEffect(e, w5);
}
class Pc {
  constructor() {
    (this.currentId = 0),
      (this.clear = () => {
        this.currentId !== 0 &&
          (clearTimeout(this.currentId), (this.currentId = 0));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new Pc();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = 0), n();
      }, t));
  }
}
function Y_() {
  const e = b5(Pc.create).current;
  return S5(e.disposeEffect), e;
}
let Nc = !0,
  Lf = !1;
const C5 = new Pc(),
  k5 = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function j5(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && k5[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function E5(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Nc = !0);
}
function rd() {
  Nc = !1;
}
function $5() {
  this.visibilityState === "hidden" && Lf && (Nc = !0);
}
function R5(e) {
  e.addEventListener("keydown", E5, !0),
    e.addEventListener("mousedown", rd, !0),
    e.addEventListener("pointerdown", rd, !0),
    e.addEventListener("touchstart", rd, !0),
    e.addEventListener("visibilitychange", $5, !0);
}
function P5(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Nc || j5(t);
}
function Q_() {
  const e = g.useCallback((o) => {
      o != null && R5(o.ownerDocument);
    }, []),
    t = g.useRef(!1);
  function n() {
    return t.current
      ? ((Lf = !0),
        C5.start(100, () => {
          Lf = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return P5(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function X_(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function wh(e, t) {
  const n = j({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = j({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = j({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = wh(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Ce(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const B1 = (e) => e,
  N5 = () => {
    let e = B1;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = B1;
      },
    };
  },
  Sh = N5(),
  T5 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function we(e, t, n = "Mui") {
  const r = T5[t];
  return r ? `${n}-${r}` : `${Sh.generate(e)}-${t}`;
}
function ve(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = we(e, o, n);
    }),
    r
  );
}
function J_(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const O5 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: J_ }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Z_(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Z_(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Z() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Z_(e)) && (r && (r += " "), (r += t));
  return r;
}
function M5(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : wh(t.components[n].defaultProps, r);
}
const L5 = ["values", "unit", "step"],
  A5 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => j({}, n, { [r.key]: r.val }), {})
    );
  };
function ex(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = Y(e, L5),
    i = A5(t),
    s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${
      (typeof t[p] == "number" ? t[p] : p) - r / 100
    }${n})`;
  }
  function u(p, x) {
    const h = s.indexOf(x);
    return `@media (min-width:${
      typeof t[p] == "number" ? t[p] : p
    }${n}) and (max-width:${
      (h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : x) - r / 100
    }${n})`;
  }
  function d(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function f(p) {
    const x = s.indexOf(p);
    return x === 0
      ? a(s[1])
      : x === s.length - 1
      ? l(s[x])
      : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return j(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: d,
      not: f,
      unit: n,
    },
    o
  );
}
const I5 = { borderRadius: 4 },
  z5 = I5;
function ds(e, t) {
  return t ? tn(e, t, { clone: !1 }) : e;
}
const Ch = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  U1 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Ch[e]}px)`,
  };
function _n(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || U1;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || U1;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Ch).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function tx(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function nx(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function F5(e, ...t) {
  const n = tx(e),
    r = [n, ...t].reduce((o, i) => tn(o, i), {});
  return nx(Object.keys(n), r);
}
function D5(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function od({ values: e, breakpoints: t, base: n }) {
  const r = n || D5(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
        ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
        : (s[a] = e),
      s
    ),
    {}
  );
}
function Tc(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Fl(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Tc(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function Ve(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Tc(l, r) || {};
      return _n(s, a, (f) => {
        let p = Fl(u, o, f);
        return (
          f === p &&
            typeof f == "string" &&
            (p = Fl(u, o, `${t}${f === "default" ? "" : G(f)}`, f)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function B5(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const U5 = { m: "margin", p: "padding" },
  H5 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  H1 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  W5 = B5((e) => {
    if (e.length > 2)
      if (H1[e]) e = H1[e];
      else return [e];
    const [t, n] = e.split(""),
      r = U5[t],
      o = H5[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  kh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  jh = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...kh, ...jh];
function Vs(e, t, n, r) {
  var o;
  const i = (o = Tc(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function Eh(e) {
  return Vs(e, "spacing", 8);
}
function lo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function V5(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = lo(t, n)), r), {});
}
function K5(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = W5(n),
    i = V5(o, r),
    s = e[n];
  return _n(e, s, i);
}
function rx(e, t) {
  const n = Eh(e.theme);
  return Object.keys(e)
    .map((r) => K5(e, t, r, n))
    .reduce(ds, {});
}
function De(e) {
  return rx(e, kh);
}
De.propTypes = {};
De.filterProps = kh;
function Be(e) {
  return rx(e, jh);
}
Be.propTypes = {};
Be.filterProps = jh;
function q5(e = 8) {
  if (e.mui) return e;
  const t = Eh({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Oc(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ds(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Xt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function cn(e, t) {
  return Ve({ prop: e, themeKey: "borders", transform: t });
}
const G5 = cn("border", Xt),
  Y5 = cn("borderTop", Xt),
  Q5 = cn("borderRight", Xt),
  X5 = cn("borderBottom", Xt),
  J5 = cn("borderLeft", Xt),
  Z5 = cn("borderColor"),
  eC = cn("borderTopColor"),
  tC = cn("borderRightColor"),
  nC = cn("borderBottomColor"),
  rC = cn("borderLeftColor"),
  oC = cn("outline", Xt),
  iC = cn("outlineColor"),
  Mc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Vs(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: lo(t, r) });
      return _n(e, e.borderRadius, n);
    }
    return null;
  };
Mc.propTypes = {};
Mc.filterProps = ["borderRadius"];
Oc(G5, Y5, Q5, X5, J5, Z5, eC, tC, nC, rC, Mc, oC, iC);
const Lc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Vs(e.theme, "spacing", 8),
      n = (r) => ({ gap: lo(t, r) });
    return _n(e, e.gap, n);
  }
  return null;
};
Lc.propTypes = {};
Lc.filterProps = ["gap"];
const Ac = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Vs(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: lo(t, r) });
    return _n(e, e.columnGap, n);
  }
  return null;
};
Ac.propTypes = {};
Ac.filterProps = ["columnGap"];
const Ic = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Vs(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: lo(t, r) });
    return _n(e, e.rowGap, n);
  }
  return null;
};
Ic.propTypes = {};
Ic.filterProps = ["rowGap"];
const sC = Ve({ prop: "gridColumn" }),
  aC = Ve({ prop: "gridRow" }),
  lC = Ve({ prop: "gridAutoFlow" }),
  cC = Ve({ prop: "gridAutoColumns" }),
  uC = Ve({ prop: "gridAutoRows" }),
  dC = Ve({ prop: "gridTemplateColumns" }),
  fC = Ve({ prop: "gridTemplateRows" }),
  pC = Ve({ prop: "gridTemplateAreas" }),
  hC = Ve({ prop: "gridArea" });
Oc(Lc, Ac, Ic, sC, aC, lC, cC, uC, dC, fC, pC, hC);
function qo(e, t) {
  return t === "grey" ? t : e;
}
const mC = Ve({ prop: "color", themeKey: "palette", transform: qo }),
  gC = Ve({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: qo,
  }),
  vC = Ve({ prop: "backgroundColor", themeKey: "palette", transform: qo });
Oc(mC, gC, vC);
function zt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yC = Ve({ prop: "width", transform: zt }),
  $h = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Ch[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: zt(n) };
      };
      return _n(e, e.maxWidth, t);
    }
    return null;
  };
$h.filterProps = ["maxWidth"];
const _C = Ve({ prop: "minWidth", transform: zt }),
  xC = Ve({ prop: "height", transform: zt }),
  bC = Ve({ prop: "maxHeight", transform: zt }),
  wC = Ve({ prop: "minHeight", transform: zt });
Ve({ prop: "size", cssProperty: "width", transform: zt });
Ve({ prop: "size", cssProperty: "height", transform: zt });
const SC = Ve({ prop: "boxSizing" });
Oc(yC, $h, _C, xC, bC, wC, SC);
const CC = {
    border: { themeKey: "borders", transform: Xt },
    borderTop: { themeKey: "borders", transform: Xt },
    borderRight: { themeKey: "borders", transform: Xt },
    borderBottom: { themeKey: "borders", transform: Xt },
    borderLeft: { themeKey: "borders", transform: Xt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: Xt },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Mc },
    color: { themeKey: "palette", transform: qo },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: qo,
    },
    backgroundColor: { themeKey: "palette", transform: qo },
    p: { style: Be },
    pt: { style: Be },
    pr: { style: Be },
    pb: { style: Be },
    pl: { style: Be },
    px: { style: Be },
    py: { style: Be },
    padding: { style: Be },
    paddingTop: { style: Be },
    paddingRight: { style: Be },
    paddingBottom: { style: Be },
    paddingLeft: { style: Be },
    paddingX: { style: Be },
    paddingY: { style: Be },
    paddingInline: { style: Be },
    paddingInlineStart: { style: Be },
    paddingInlineEnd: { style: Be },
    paddingBlock: { style: Be },
    paddingBlockStart: { style: Be },
    paddingBlockEnd: { style: Be },
    m: { style: De },
    mt: { style: De },
    mr: { style: De },
    mb: { style: De },
    ml: { style: De },
    mx: { style: De },
    my: { style: De },
    margin: { style: De },
    marginTop: { style: De },
    marginRight: { style: De },
    marginBottom: { style: De },
    marginLeft: { style: De },
    marginX: { style: De },
    marginY: { style: De },
    marginInline: { style: De },
    marginInlineStart: { style: De },
    marginInlineEnd: { style: De },
    marginBlock: { style: De },
    marginBlockStart: { style: De },
    marginBlockEnd: { style: De },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Lc },
    rowGap: { style: Ic },
    columnGap: { style: Ac },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: zt },
    maxWidth: { style: $h },
    minWidth: { transform: zt },
    height: { transform: zt },
    maxHeight: { transform: zt },
    minHeight: { transform: zt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Ks = CC;
function kC(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function jC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ox() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: d, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const p = Tc(o, u) || {};
    return f
      ? f(s)
      : _n(s, r, (h) => {
          let m = Fl(p, d, h);
          return (
            h === m &&
              typeof h == "string" &&
              (m = Fl(p, d, `${n}${h === "default" ? "" : G(h)}`, h)),
            l === !1 ? m : { [l]: m }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Ks;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const d = tx(i.breakpoints),
        f = Object.keys(d);
      let p = d;
      return (
        Object.keys(u).forEach((x) => {
          const h = jC(u[x], i);
          if (h != null)
            if (typeof h == "object")
              if (s[x]) p = ds(p, e(x, h, i, s));
              else {
                const m = _n({ theme: i }, h, (b) => ({ [x]: b }));
                kC(m, h) ? (p[x] = t({ sx: h, theme: i })) : (p = ds(p, m));
              }
            else p = ds(p, e(x, h, i, s));
        }),
        nx(f, p)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const yi = ox();
yi.filterProps = ["sx"];
function ix(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const EC = ["breakpoints", "palette", "spacing", "shape"];
function _i(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = Y(e, EC),
    a = ex(n),
    l = q5(o);
  let u = tn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: j({ mode: "light" }, r),
      spacing: l,
      shape: j({}, z5, i),
    },
    s
  );
  return (
    (u.applyStyles = ix),
    (u = t.reduce((d, f) => tn(d, f), u)),
    (u.unstable_sxConfig = j({}, Ks, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return yi({ sx: f, theme: this });
    }),
    u
  );
}
const $C = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: _i,
      private_createBreakpoints: ex,
      unstable_applyStyles: ix,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function sx(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var RC =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  PC = sx(function (e) {
    return (
      RC.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function NC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function TC(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var OC = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(TC(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = NC(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  gt = "-ms-",
  Dl = "-moz-",
  he = "-webkit-",
  ax = "comm",
  Rh = "rule",
  Ph = "decl",
  MC = "@import",
  lx = "@keyframes",
  LC = "@layer",
  AC = Math.abs,
  zc = String.fromCharCode,
  IC = Object.assign;
function zC(e, t) {
  return ut(e, 0) ^ 45
    ? (((((((t << 2) ^ ut(e, 0)) << 2) ^ ut(e, 1)) << 2) ^ ut(e, 2)) << 2) ^
        ut(e, 3)
    : 0;
}
function cx(e) {
  return e.trim();
}
function FC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function me(e, t, n) {
  return e.replace(t, n);
}
function Af(e, t) {
  return e.indexOf(t);
}
function ut(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ms(e, t, n) {
  return e.slice(t, n);
}
function jn(e) {
  return e.length;
}
function Nh(e) {
  return e.length;
}
function ba(e, t) {
  return t.push(e), e;
}
function DC(e, t) {
  return e.map(t).join("");
}
var Fc = 1,
  oi = 1,
  ux = 0,
  Ot = 0,
  qe = 0,
  xi = "";
function Dc(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Fc,
    column: oi,
    length: s,
    return: "",
  };
}
function Fi(e, t) {
  return IC(Dc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function BC() {
  return qe;
}
function UC() {
  return (
    (qe = Ot > 0 ? ut(xi, --Ot) : 0), oi--, qe === 10 && ((oi = 1), Fc--), qe
  );
}
function Ut() {
  return (
    (qe = Ot < ux ? ut(xi, Ot++) : 0), oi++, qe === 10 && ((oi = 1), Fc++), qe
  );
}
function Mn() {
  return ut(xi, Ot);
}
function Ha() {
  return Ot;
}
function qs(e, t) {
  return Ms(xi, e, t);
}
function Ls(e) {
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
function dx(e) {
  return (Fc = oi = 1), (ux = jn((xi = e))), (Ot = 0), [];
}
function fx(e) {
  return (xi = ""), e;
}
function Wa(e) {
  return cx(qs(Ot - 1, If(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function HC(e) {
  for (; (qe = Mn()) && qe < 33; ) Ut();
  return Ls(e) > 2 || Ls(qe) > 3 ? "" : " ";
}
function WC(e, t) {
  for (
    ;
    --t &&
    Ut() &&
    !(qe < 48 || qe > 102 || (qe > 57 && qe < 65) || (qe > 70 && qe < 97));

  );
  return qs(e, Ha() + (t < 6 && Mn() == 32 && Ut() == 32));
}
function If(e) {
  for (; Ut(); )
    switch (qe) {
      case e:
        return Ot;
      case 34:
      case 39:
        e !== 34 && e !== 39 && If(qe);
        break;
      case 40:
        e === 41 && If(e);
        break;
      case 92:
        Ut();
        break;
    }
  return Ot;
}
function VC(e, t) {
  for (; Ut() && e + qe !== 57; ) if (e + qe === 84 && Mn() === 47) break;
  return "/*" + qs(t, Ot - 1) + "*" + zc(e === 47 ? e : Ut());
}
function KC(e) {
  for (; !Ls(Mn()); ) Ut();
  return qs(e, Ot);
}
function qC(e) {
  return fx(Va("", null, null, null, [""], (e = dx(e)), 0, [0], e));
}
function Va(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      d = 0,
      f = s,
      p = 0,
      x = 0,
      h = 0,
      m = 1,
      b = 1,
      _ = 1,
      v = 0,
      y = "",
      w = o,
      S = i,
      C = r,
      k = y;
    b;

  )
    switch (((h = v), (v = Ut()))) {
      case 40:
        if (h != 108 && ut(k, f - 1) == 58) {
          Af((k += me(Wa(v), "&", "&\f")), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Wa(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += HC(h);
        break;
      case 92:
        k += WC(Ha() - 1, 7);
        continue;
      case 47:
        switch (Mn()) {
          case 42:
          case 47:
            ba(GC(VC(Ut(), Ha()), t, n), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        a[u++] = jn(k) * _;
      case 125 * m:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            b = 0;
          case 59 + d:
            _ == -1 && (k = me(k, /\f/g, "")),
              x > 0 &&
                jn(k) - f &&
                ba(
                  x > 32
                    ? V1(k + ";", r, n, f - 1)
                    : V1(me(k, " ", "") + ";", r, n, f - 2),
                  l
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (ba((C = W1(k, t, n, u, d, o, a, y, (w = []), (S = []), f)), i),
              v === 123)
            )
              if (d === 0) Va(k, t, C, C, w, i, f, a, S);
              else
                switch (p === 99 && ut(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Va(
                      e,
                      C,
                      C,
                      r && ba(W1(e, C, C, 0, 0, o, a, y, o, (w = []), f), S),
                      o,
                      S,
                      f,
                      a,
                      r ? w : S
                    );
                    break;
                  default:
                    Va(k, C, C, C, [""], S, 0, a, S);
                }
        }
        (u = d = x = 0), (m = _ = 1), (y = k = ""), (f = s);
        break;
      case 58:
        (f = 1 + jn(k)), (x = h);
      default:
        if (m < 1) {
          if (v == 123) --m;
          else if (v == 125 && m++ == 0 && UC() == 125) continue;
        }
        switch (((k += zc(v)), v * m)) {
          case 38:
            _ = d > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (a[u++] = (jn(k) - 1) * _), (_ = 1);
            break;
          case 64:
            Mn() === 45 && (k += Wa(Ut())),
              (p = Mn()),
              (d = f = jn((y = k += KC(Ha())))),
              v++;
            break;
          case 45:
            h === 45 && jn(k) == 2 && (m = 0);
        }
    }
  return i;
}
function W1(e, t, n, r, o, i, s, a, l, u, d) {
  for (
    var f = o - 1, p = o === 0 ? i : [""], x = Nh(p), h = 0, m = 0, b = 0;
    h < r;
    ++h
  )
    for (var _ = 0, v = Ms(e, f + 1, (f = AC((m = s[h])))), y = e; _ < x; ++_)
      (y = cx(m > 0 ? p[_] + " " + v : me(v, /&\f/g, p[_]))) && (l[b++] = y);
  return Dc(e, t, n, o === 0 ? Rh : a, l, u, d);
}
function GC(e, t, n) {
  return Dc(e, t, n, ax, zc(BC()), Ms(e, 2, -2), 0);
}
function V1(e, t, n, r) {
  return Dc(e, t, n, Ph, Ms(e, 0, r), Ms(e, r + 1, -1), r);
}
function Go(e, t) {
  for (var n = "", r = Nh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function YC(e, t, n, r) {
  switch (e.type) {
    case LC:
      if (e.children.length) break;
    case MC:
    case Ph:
      return (e.return = e.return || e.value);
    case ax:
      return "";
    case lx:
      return (e.return = e.value + "{" + Go(e.children, r) + "}");
    case Rh:
      e.value = e.props.join(",");
  }
  return jn((n = Go(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function QC(e) {
  var t = Nh(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function XC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var JC = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Mn()), o === 38 && i === 12 && (n[r] = 1), !Ls(i);

    )
      Ut();
    return qs(t, Ot);
  },
  ZC = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Ls(o)) {
        case 0:
          o === 38 && Mn() === 12 && (n[r] = 1), (t[r] += JC(Ot - 1, n, r));
          break;
        case 2:
          t[r] += Wa(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Mn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += zc(o);
      }
    while ((o = Ut()));
    return t;
  },
  ek = function (t, n) {
    return fx(ZC(dx(t), n));
  },
  K1 = new WeakMap(),
  tk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !K1.get(r)) &&
        !o
      ) {
        K1.set(t, !0);
        for (
          var i = [], s = ek(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var d = 0; d < a.length; d++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + " " + s[l];
      }
    }
  },
  nk = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function px(e, t) {
  switch (zC(e, t)) {
    case 5103:
      return he + "print-" + e + e;
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
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + Dl + e + gt + e + e;
    case 6828:
    case 4268:
      return he + e + gt + e + e;
    case 6165:
      return he + e + gt + "flex-" + e + e;
    case 5187:
      return (
        he + e + me(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + gt + "flex-$1$2") + e
      );
    case 5443:
      return he + e + gt + "flex-item-" + me(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        he +
        e +
        gt +
        "flex-line-pack" +
        me(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return he + e + gt + me(e, "shrink", "negative") + e;
    case 5292:
      return he + e + gt + me(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        he +
        "box-" +
        me(e, "-grow", "") +
        he +
        e +
        gt +
        me(e, "grow", "positive") +
        e
      );
    case 4554:
      return he + me(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return (
        me(
          me(me(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return me(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return (
        me(
          me(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + gt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        he +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return me(e, /(.+)-inline(.+)/, he + "$1$2") + e;
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
      if (jn(e) - 1 - t > 6)
        switch (ut(e, t + 1)) {
          case 109:
            if (ut(e, t + 4) !== 45) break;
          case 102:
            return (
              me(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  he +
                  "$2-$3$1" +
                  Dl +
                  (ut(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Af(e, "stretch")
              ? px(me(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ut(e, t + 1) !== 115) break;
    case 6444:
      switch (ut(e, jn(e) - 3 - (~Af(e, "!important") && 10))) {
        case 107:
          return me(e, ":", ":" + he) + e;
        case 101:
          return (
            me(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                he +
                (ut(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                he +
                "$2$3$1" +
                gt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ut(e, t + 11)) {
        case 114:
          return he + e + gt + me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + gt + me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + gt + me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + gt + e + e;
  }
  return e;
}
var rk = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ph:
          t.return = px(t.value, t.length);
          break;
        case lx:
          return Go([Fi(t, { value: me(t.value, "@", "@" + he) })], o);
        case Rh:
          if (t.length)
            return DC(t.props, function (i) {
              switch (FC(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Go(
                    [Fi(t, { props: [me(i, /:(read-\w+)/, ":" + Dl + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Go(
                    [
                      Fi(t, {
                        props: [me(i, /:(plac\w+)/, ":" + he + "input-$1")],
                      }),
                      Fi(t, { props: [me(i, /:(plac\w+)/, ":" + Dl + "$1")] }),
                      Fi(t, { props: [me(i, /:(plac\w+)/, gt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  ok = [rk],
  hx = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var b = m.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || ok,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var b = m.getAttribute("data-emotion").split(" "), _ = 1;
            _ < b.length;
            _++
          )
            i[b[_]] = !0;
          a.push(m);
        }
      );
    var l,
      u = [tk, nk];
    {
      var d,
        f = [
          YC,
          XC(function (m) {
            d.insert(m);
          }),
        ],
        p = QC(u.concat(o, f)),
        x = function (b) {
          return Go(qC(b), p);
        };
      l = function (b, _, v, y) {
        (d = v),
          x(b ? b + "{" + _.styles + "}" : _.styles),
          y && (h.inserted[_.name] = !0);
      };
    }
    var h = {
      key: n,
      sheet: new OC({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return h.sheet.hydrate(a), h;
  },
  mx = { exports: {} },
  be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var it = typeof Symbol == "function" && Symbol.for,
  Th = it ? Symbol.for("react.element") : 60103,
  Oh = it ? Symbol.for("react.portal") : 60106,
  Bc = it ? Symbol.for("react.fragment") : 60107,
  Uc = it ? Symbol.for("react.strict_mode") : 60108,
  Hc = it ? Symbol.for("react.profiler") : 60114,
  Wc = it ? Symbol.for("react.provider") : 60109,
  Vc = it ? Symbol.for("react.context") : 60110,
  Mh = it ? Symbol.for("react.async_mode") : 60111,
  Kc = it ? Symbol.for("react.concurrent_mode") : 60111,
  qc = it ? Symbol.for("react.forward_ref") : 60112,
  Gc = it ? Symbol.for("react.suspense") : 60113,
  ik = it ? Symbol.for("react.suspense_list") : 60120,
  Yc = it ? Symbol.for("react.memo") : 60115,
  Qc = it ? Symbol.for("react.lazy") : 60116,
  sk = it ? Symbol.for("react.block") : 60121,
  ak = it ? Symbol.for("react.fundamental") : 60117,
  lk = it ? Symbol.for("react.responder") : 60118,
  ck = it ? Symbol.for("react.scope") : 60119;
function Kt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Th:
        switch (((e = e.type), e)) {
          case Mh:
          case Kc:
          case Bc:
          case Hc:
          case Uc:
          case Gc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Vc:
              case qc:
              case Qc:
              case Yc:
              case Wc:
                return e;
              default:
                return t;
            }
        }
      case Oh:
        return t;
    }
  }
}
function gx(e) {
  return Kt(e) === Kc;
}
be.AsyncMode = Mh;
be.ConcurrentMode = Kc;
be.ContextConsumer = Vc;
be.ContextProvider = Wc;
be.Element = Th;
be.ForwardRef = qc;
be.Fragment = Bc;
be.Lazy = Qc;
be.Memo = Yc;
be.Portal = Oh;
be.Profiler = Hc;
be.StrictMode = Uc;
be.Suspense = Gc;
be.isAsyncMode = function (e) {
  return gx(e) || Kt(e) === Mh;
};
be.isConcurrentMode = gx;
be.isContextConsumer = function (e) {
  return Kt(e) === Vc;
};
be.isContextProvider = function (e) {
  return Kt(e) === Wc;
};
be.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Th;
};
be.isForwardRef = function (e) {
  return Kt(e) === qc;
};
be.isFragment = function (e) {
  return Kt(e) === Bc;
};
be.isLazy = function (e) {
  return Kt(e) === Qc;
};
be.isMemo = function (e) {
  return Kt(e) === Yc;
};
be.isPortal = function (e) {
  return Kt(e) === Oh;
};
be.isProfiler = function (e) {
  return Kt(e) === Hc;
};
be.isStrictMode = function (e) {
  return Kt(e) === Uc;
};
be.isSuspense = function (e) {
  return Kt(e) === Gc;
};
be.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Bc ||
    e === Kc ||
    e === Hc ||
    e === Uc ||
    e === Gc ||
    e === ik ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Qc ||
        e.$$typeof === Yc ||
        e.$$typeof === Wc ||
        e.$$typeof === Vc ||
        e.$$typeof === qc ||
        e.$$typeof === ak ||
        e.$$typeof === lk ||
        e.$$typeof === ck ||
        e.$$typeof === sk))
  );
};
be.typeOf = Kt;
mx.exports = be;
var uk = mx.exports,
  vx = uk,
  dk = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  fk = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  yx = {};
yx[vx.ForwardRef] = dk;
yx[vx.Memo] = fk;
var pk = !0;
function hk(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var _x = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || pk === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  xx = function (t, n, r) {
    _x(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function mk(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var gk = {
    animationIterationCount: 1,
    aspectRatio: 1,
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
    strokeWidth: 1,
  },
  vk = /[A-Z]|^ms/g,
  yk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  bx = function (t) {
    return t.charCodeAt(1) === 45;
  },
  q1 = function (t) {
    return t != null && typeof t != "boolean";
  },
  id = sx(function (e) {
    return bx(e) ? e : e.replace(vk, "-$&").toLowerCase();
  }),
  G1 = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(yk, function (r, o, i) {
            return (En = { name: o, styles: i, next: En }), o;
          });
    }
    return gk[t] !== 1 && !bx(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function As(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (En = { name: n.name, styles: n.styles, next: En }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (En = { name: r.name, styles: r.styles, next: En }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return _k(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = En,
          s = n(e);
        return (En = i), As(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function _k(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += As(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : q1(s) && (r += id(i) + ":" + G1(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          q1(s[a]) && (r += id(i) + ":" + G1(i, s[a]) + ";");
      else {
        var l = As(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += id(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Y1 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  En,
  Lh = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    En = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += As(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += As(r, n, t[a])), o && (i += s[a]);
    Y1.lastIndex = 0;
    for (var l = "", u; (u = Y1.exec(i)) !== null; ) l += "-" + u[1];
    var d = mk(i) + l;
    return { name: d, styles: i, next: En };
  },
  xk = function (t) {
    return t();
  },
  wx = al.useInsertionEffect ? al.useInsertionEffect : !1,
  bk = wx || xk,
  Q1 = wx || g.useLayoutEffect,
  Sx = g.createContext(typeof HTMLElement < "u" ? hx({ key: "css" }) : null),
  wk = Sx.Provider,
  Cx = function (t) {
    return g.forwardRef(function (n, r) {
      var o = g.useContext(Sx);
      return t(n, o, r);
    });
  },
  Xc = g.createContext({}),
  sd = { exports: {} },
  X1;
function kx() {
  return (
    X1 ||
      ((X1 = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(sd)),
    sd.exports
  );
}
kx();
var Sk = Cx(function (e, t) {
  var n = e.styles,
    r = Lh([n], void 0, g.useContext(Xc)),
    o = g.useRef();
  return (
    Q1(
      function () {
        var i = t.key + "-global",
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    Q1(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && xx(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert("", r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function Jc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Lh(t);
}
var bi = function () {
    var t = Jc.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  Ck = PC,
  kk = function (t) {
    return t !== "theme";
  },
  J1 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Ck : kk;
  },
  Z1 = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  jk = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      _x(n, r, o),
      bk(function () {
        return xx(n, r, o);
      }),
      null
    );
  },
  Ek = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Z1(t, n, r),
      l = a || J1(o),
      u = !l("as");
    return function () {
      var d = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        d[0] == null || d[0].raw === void 0)
      )
        f.push.apply(f, d);
      else {
        f.push(d[0][0]);
        for (var p = d.length, x = 1; x < p; x++) f.push(d[x], d[0][x]);
      }
      var h = Cx(function (m, b, _) {
        var v = (u && m.as) || o,
          y = "",
          w = [],
          S = m;
        if (m.theme == null) {
          S = {};
          for (var C in m) S[C] = m[C];
          S.theme = g.useContext(Xc);
        }
        typeof m.className == "string"
          ? (y = hk(b.registered, w, m.className))
          : m.className != null && (y = m.className + " ");
        var k = Lh(f.concat(w), b.registered, S);
        (y += b.key + "-" + k.name), s !== void 0 && (y += " " + s);
        var $ = u && a === void 0 ? J1(v) : l,
          M = {};
        for (var O in m) (u && O === "as") || ($(O) && (M[O] = m[O]));
        return (
          (M.className = y),
          (M.ref = _),
          g.createElement(
            g.Fragment,
            null,
            g.createElement(jk, {
              cache: b,
              serialized: k,
              isStringTag: typeof v == "string",
            }),
            g.createElement(v, M)
          )
        );
      });
      return (
        (h.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = o),
        (h.__emotion_styles = f),
        (h.__emotion_forwardProp = a),
        Object.defineProperty(h, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (h.withComponent = function (m, b) {
          return e(m, j({}, n, b, { shouldForwardProp: Z1(h, b, !0) })).apply(
            void 0,
            f
          );
        }),
        h
      );
    };
  },
  $k = [
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
    "tspan",
  ],
  zf = Ek.bind();
$k.forEach(function (e) {
  zf[e] = zf(e);
});
let Ff;
typeof document == "object" && (Ff = hx({ key: "css", prepend: !0 }));
function Rk(e) {
  const { injectFirst: t, children: n } = e;
  return t && Ff ? c.jsx(wk, { value: Ff, children: n }) : n;
}
function Pk(e) {
  return e == null || Object.keys(e).length === 0;
}
function jx(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(Pk(o) ? n : o) : t;
  return c.jsx(Sk, { styles: r });
}
function Ah(e, t) {
  return zf(e, t);
}
const Ex = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  Nk = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: jx,
        StyledEngineProvider: Rk,
        ThemeContext: Xc,
        css: Jc,
        default: Ah,
        internal_processStyles: Ex,
        keyframes: bi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Tk(e) {
  return Object.keys(e).length === 0;
}
function Ok(e = null) {
  const t = g.useContext(Xc);
  return !t || Tk(t) ? e : t;
}
const Mk = _i();
function Zc(e = Mk) {
  return Ok(e);
}
function Ih({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Zc(n);
  return r && (o = o[r] || o), M5({ theme: o, name: t, props: e });
}
const Lk = ["sx"],
  Ak = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Ks;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function eu(e) {
  const { sx: t } = e,
    n = Y(e, Lk),
    { systemProps: r, otherProps: o } = Ak(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return Hn(a) ? j({}, r, a) : r;
        })
      : (i = j({}, r, t)),
    j({}, o, { sx: i })
  );
}
const Ik = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: yi,
      extendSxProp: eu,
      unstable_createStyleFunctionSx: ox,
      unstable_defaultSxConfig: Ks,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function zk(e, t) {
  return j(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var Ke = {},
  $x = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})($x);
var Gs = $x.exports;
const Fk = tr(u5),
  Dk = tr(O5);
var Rx = Gs;
Object.defineProperty(Ke, "__esModule", { value: !0 });
var $t = (Ke.alpha = Ox);
Ke.blend = Zk;
Ke.colorChannel = void 0;
var Bk = (Ke.darken = Fh);
Ke.decomposeColor = sn;
Ke.emphasize = Jk;
var Uk = (Ke.getContrastRatio = Gk);
Ke.getLuminance = Bl;
Ke.hexToRgb = Px;
Ke.hslToRgb = Tx;
var Hk = (Ke.lighten = Dh);
Ke.private_safeAlpha = Yk;
Ke.private_safeColorChannel = void 0;
Ke.private_safeDarken = Qk;
Ke.private_safeEmphasize = Mx;
Ke.private_safeLighten = Xk;
Ke.recomposeColor = wi;
Ke.rgbToHex = qk;
var e0 = Rx(Fk),
  Wk = Rx(Dk);
function zh(e, t = 0, n = 1) {
  return (0, Wk.default)(e, t, n);
}
function Px(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Vk(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function sn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return sn(Px(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, e0.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, e0.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const Nx = (e) => {
  const t = sn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
Ke.colorChannel = Nx;
const Kk = (e, t) => {
  try {
    return Nx(e);
  } catch {
    return e;
  }
};
Ke.private_safeColorChannel = Kk;
function wi(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function qk(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = sn(e);
  return `#${t.map((n, r) => Vk(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Tx(e) {
  e = sn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), wi({ type: a, values: l })
  );
}
function Bl(e) {
  e = sn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? sn(Tx(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Gk(e, t) {
  const n = Bl(e),
    r = Bl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ox(e, t) {
  return (
    (e = sn(e)),
    (t = zh(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    wi(e)
  );
}
function Yk(e, t, n) {
  try {
    return Ox(e, t);
  } catch {
    return e;
  }
}
function Fh(e, t) {
  if (((e = sn(e)), (t = zh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return wi(e);
}
function Qk(e, t, n) {
  try {
    return Fh(e, t);
  } catch {
    return e;
  }
}
function Dh(e, t) {
  if (((e = sn(e)), (t = zh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return wi(e);
}
function Xk(e, t, n) {
  try {
    return Dh(e, t);
  } catch {
    return e;
  }
}
function Jk(e, t = 0.15) {
  return Bl(e) > 0.5 ? Fh(e, t) : Dh(e, t);
}
function Mx(e, t, n) {
  try {
    return Mx(e, t);
  } catch {
    return e;
  }
}
function Zk(e, t, n, r = 1) {
  const o = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = sn(e),
    s = sn(t),
    a = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2]),
    ];
  return wi({ type: "rgb", values: a });
}
const e6 = { black: "#000", white: "#fff" },
  Is = e6,
  t6 = {
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
    A700: "#616161",
  },
  n6 = t6,
  r6 = {
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
    A700: "#aa00ff",
  },
  bo = r6,
  o6 = {
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
    A700: "#d50000",
  },
  wo = o6,
  i6 = {
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
    A700: "#ff6d00",
  },
  Di = i6,
  s6 = {
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
    A700: "#2962ff",
  },
  So = s6,
  a6 = {
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
    A700: "#0091ea",
  },
  Co = a6,
  l6 = {
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
    A700: "#00c853",
  },
  $n = l6,
  c6 = ["mode", "contrastThreshold", "tonalOffset"],
  t0 = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Is.white, default: Is.white },
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
      activatedOpacity: 0.12,
    },
  },
  ad = {
    text: {
      primary: Is.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Is.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function n0(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = Hk(e.main, o))
      : t === "dark" && (e.dark = Bk(e.main, i)));
}
function u6(e = "light") {
  return e === "dark"
    ? { main: So[200], light: So[50], dark: So[400] }
    : { main: So[700], light: So[400], dark: So[800] };
}
function d6(e = "light") {
  return e === "dark"
    ? { main: bo[200], light: bo[50], dark: bo[400] }
    : { main: bo[500], light: bo[300], dark: bo[700] };
}
function f6(e = "light") {
  return e === "dark"
    ? { main: wo[500], light: wo[300], dark: wo[700] }
    : { main: wo[700], light: wo[400], dark: wo[800] };
}
function p6(e = "light") {
  return e === "dark"
    ? { main: Co[400], light: Co[300], dark: Co[700] }
    : { main: Co[700], light: Co[500], dark: Co[900] };
}
function h6(e = "light") {
  return e === "dark"
    ? { main: $n[400], light: $n[300], dark: $n[700] }
    : { main: $n[800], light: $n[500], dark: $n[900] };
}
function m6(e = "light") {
  return e === "dark"
    ? { main: Di[400], light: Di[300], dark: Di[700] }
    : { main: "#ed6c02", light: Di[500], dark: Di[900] };
}
function g6(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Y(e, c6),
    i = e.primary || u6(t),
    s = e.secondary || d6(t),
    a = e.error || f6(t),
    l = e.info || p6(t),
    u = e.success || h6(t),
    d = e.warning || m6(t);
  function f(m) {
    return Uk(m, ad.text.primary) >= n ? ad.text.primary : t0.text.primary;
  }
  const p = ({
      color: m,
      name: b,
      mainShade: _ = 500,
      lightShade: v = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((m = j({}, m)),
        !m.main && m[_] && (m.main = m[_]),
        !m.hasOwnProperty("main"))
      )
        throw new Error(Or(11, b ? ` (${b})` : "", _));
      if (typeof m.main != "string")
        throw new Error(Or(12, b ? ` (${b})` : "", JSON.stringify(m.main)));
      return (
        n0(m, "light", v, r),
        n0(m, "dark", y, r),
        m.contrastText || (m.contrastText = f(m.main)),
        m
      );
    },
    x = { dark: ad, light: t0 };
  return tn(
    j(
      {
        common: j({}, Is),
        mode: t,
        primary: p({ color: i, name: "primary" }),
        secondary: p({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: p({ color: a, name: "error" }),
        warning: p({ color: d, name: "warning" }),
        info: p({ color: l, name: "info" }),
        success: p({ color: u, name: "success" }),
        grey: n6,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: p,
        tonalOffset: r,
      },
      x[t]
    ),
    o
  );
}
const v6 = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function y6(e) {
  return Math.round(e * 1e5) / 1e5;
}
const r0 = { textTransform: "uppercase" },
  o0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function _6(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = o0,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: d,
      pxToRem: f,
    } = n,
    p = Y(n, v6),
    x = o / 14,
    h = f || ((_) => `${(_ / u) * x}rem`),
    m = (_, v, y, w, S) =>
      j(
        { fontFamily: r, fontWeight: _, fontSize: h(v), lineHeight: y },
        r === o0 ? { letterSpacing: `${y6(w / v)}em` } : {},
        S,
        d
      ),
    b = {
      h1: m(i, 96, 1.167, -1.5),
      h2: m(i, 60, 1.2, -0.5),
      h3: m(s, 48, 1.167, 0),
      h4: m(s, 34, 1.235, 0.25),
      h5: m(s, 24, 1.334, 0),
      h6: m(a, 20, 1.6, 0.15),
      subtitle1: m(s, 16, 1.75, 0.15),
      subtitle2: m(a, 14, 1.57, 0.1),
      body1: m(s, 16, 1.5, 0.15),
      body2: m(s, 14, 1.43, 0.15),
      button: m(a, 14, 1.75, 0.4, r0),
      caption: m(s, 12, 1.66, 0.4),
      overline: m(s, 12, 2.66, 1, r0),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return tn(
    j(
      {
        htmlFontSize: u,
        pxToRem: h,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      b
    ),
    p,
    { clone: !1 }
  );
}
const x6 = 0.2,
  b6 = 0.14,
  w6 = 0.12;
function Te(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${x6})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${b6})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${w6})`,
  ].join(",");
}
const S6 = [
    "none",
    Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  C6 = ["duration", "easing", "delay"],
  k6 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  j6 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function i0(e) {
  return `${Math.round(e)}ms`;
}
function E6(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function $6(e) {
  const t = j({}, k6, e.easing),
    n = j({}, j6, e.duration);
  return j(
    {
      getAutoHeightDuration: E6,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          Y(i, C6),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : i0(s)} ${a} ${
                  typeof l == "string" ? l : i0(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const R6 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  P6 = R6,
  N6 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Lx(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = Y(e, N6);
  if (e.vars) throw new Error(Or(18));
  const a = g6(r),
    l = _i(e);
  let u = tn(l, {
    mixins: zk(l.breakpoints, n),
    palette: a,
    shadows: S6.slice(),
    typography: _6(a, i),
    transitions: $6(o),
    zIndex: j({}, P6),
  });
  return (
    (u = tn(u, s)),
    (u = t.reduce((d, f) => tn(d, f), u)),
    (u.unstable_sxConfig = j({}, Ks, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return yi({ sx: f, theme: this });
    }),
    u
  );
}
const T6 = Lx(),
  tu = T6,
  Ys = "$$material";
function ke({ props: e, name: t }) {
  return Ih({ props: e, name: t, defaultTheme: tu, themeId: Ys });
}
var Qs = {},
  ld = { exports: {} },
  s0;
function O6() {
  return (
    s0 ||
      ((s0 = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            s,
            a;
          for (a = 0; a < i.length; a++)
            (s = i[a]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(ld)),
    ld.exports
  );
}
const M6 = tr(Nk),
  L6 = tr(c5),
  A6 = tr(g5),
  I6 = tr(m5),
  z6 = tr($C),
  F6 = tr(Ik);
var Si = Gs;
Object.defineProperty(Qs, "__esModule", { value: !0 });
var D6 = (Qs.default = ej),
  B6 = (Qs.shouldForwardProp = Ka);
Qs.systemDefaultTheme = void 0;
var qt = Si(kx()),
  Df = Si(O6()),
  a0 = G6(M6),
  U6 = L6;
Si(A6);
Si(I6);
var H6 = Si(z6),
  W6 = Si(F6);
const V6 = ["ownerState"],
  K6 = ["variants"],
  q6 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ax(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Ax = function (r) {
    return r ? n : t;
  })(e);
}
function G6(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Ax(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Y6(e) {
  return Object.keys(e).length === 0;
}
function Q6(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Ka(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const X6 = (Qs.systemDefaultTheme = (0, H6.default)()),
  J6 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function wa({ defaultTheme: e, theme: t, themeId: n }) {
  return Y6(t) ? e : t[n] || t;
}
function Z6(e) {
  return e ? (t, n) => n[e] : null;
}
function qa(e, t) {
  let { ownerState: n } = t,
    r = (0, Df.default)(t, V6);
  const o =
    typeof e == "function" ? e((0, qt.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => qa(i, (0, qt.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, Df.default)(o, K6);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, qt.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((d) => {
              (n == null ? void 0 : n[d]) !== l.props[d] &&
                r[d] !== l.props[d] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style((0, qt.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function ej(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = X6,
      rootShouldForwardProp: r = Ka,
      slotShouldForwardProp: o = Ka,
    } = e,
    i = (s) =>
      (0, W6.default)(
        (0, qt.default)({}, s, {
          theme: wa((0, qt.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, a0.internal_processStyles)(s, (S) =>
        S.filter((C) => !(C != null && C.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: d,
          skipSx: f,
          overridesResolver: p = Z6(J6(u)),
        } = a,
        x = (0, Df.default)(a, q6),
        h = d !== void 0 ? d : (u && u !== "Root" && u !== "root") || !1,
        m = f || !1;
      let b,
        _ = Ka;
      u === "Root" || u === "root"
        ? (_ = r)
        : u
        ? (_ = o)
        : Q6(s) && (_ = void 0);
      const v = (0, a0.default)(
          s,
          (0, qt.default)({ shouldForwardProp: _, label: b }, x)
        ),
        y = (S) =>
          (typeof S == "function" && S.__emotion_real !== S) ||
          (0, U6.isPlainObject)(S)
            ? (C) =>
                qa(
                  S,
                  (0, qt.default)({}, C, {
                    theme: wa({ theme: C.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : S,
        w = (S, ...C) => {
          let k = y(S);
          const $ = C ? C.map(y) : [];
          l &&
            p &&
            $.push((A) => {
              const z = wa(
                (0, qt.default)({}, A, { defaultTheme: n, themeId: t })
              );
              if (
                !z.components ||
                !z.components[l] ||
                !z.components[l].styleOverrides
              )
                return null;
              const U = z.components[l].styleOverrides,
                B = {};
              return (
                Object.entries(U).forEach(([D, R]) => {
                  B[D] = qa(R, (0, qt.default)({}, A, { theme: z }));
                }),
                p(A, B)
              );
            }),
            l &&
              !h &&
              $.push((A) => {
                var z;
                const U = wa(
                    (0, qt.default)({}, A, { defaultTheme: n, themeId: t })
                  ),
                  B =
                    U == null ||
                    (z = U.components) == null ||
                    (z = z[l]) == null
                      ? void 0
                      : z.variants;
                return qa(
                  { variants: B },
                  (0, qt.default)({}, A, { theme: U })
                );
              }),
            m || $.push(i);
          const M = $.length - C.length;
          if (Array.isArray(S) && M > 0) {
            const A = new Array(M).fill("");
            (k = [...S, ...A]), (k.raw = [...S.raw, ...A]);
          }
          const O = v(k, ...$);
          return s.muiName && (O.muiName = s.muiName), O;
        };
      return v.withConfig && (w.withConfig = v.withConfig), w;
    }
  );
}
const ho = (e) => B6(e) && e !== "classes",
  Q = D6({ themeId: Ys, defaultTheme: tu, rootShouldForwardProp: ho });
function tj(e) {
  return we("MuiSvgIcon", e);
}
ve("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const nj = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  rj = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${G(t)}`, `fontSize${G(n)}`],
      };
    return Ce(o, tj, r);
  },
  oj = Q("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${G(n.color)}`],
        t[`fontSize${G(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, d, f, p, x, h;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (d = u.pxToRem) == null
            ? void 0
            : d.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (f =
          (p = (e.vars || e).palette) == null || (p = p[t.color]) == null
            ? void 0
            : p.main) != null
          ? f
          : {
              action:
                (x = (e.vars || e).palette) == null || (x = x.action) == null
                  ? void 0
                  : x.active,
              disabled:
                (h = (e.vars || e).palette) == null || (h = h.action) == null
                  ? void 0
                  : h.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Bf = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: f,
        viewBox: p = "0 0 24 24",
      } = r,
      x = Y(r, nj),
      h = g.isValidElement(o) && o.type === "svg",
      m = j({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: p,
        hasSvgAsChild: h,
      }),
      b = {};
    d || (b.viewBox = p);
    const _ = rj(m);
    return c.jsxs(
      oj,
      j(
        {
          as: a,
          className: Z(_.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        b,
        x,
        h && o.props,
        {
          ownerState: m,
          children: [
            h ? o.props.children : o,
            f ? c.jsx("title", { children: f }) : null,
          ],
        }
      )
    );
  });
Bf.muiName = "SvgIcon";
function Fe(e, t) {
  function n(r, o) {
    return c.jsx(
      Bf,
      j({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Bf.muiName), g.memo(g.forwardRef(n));
}
const ij = {
    configure: (e) => {
      Sh.configure(e);
    },
  },
  sj = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: G,
        createChainedFunction: Il,
        createSvgIcon: Fe,
        debounce: _h,
        deprecatedPropType: v5,
        isMuiElement: Ua,
        ownerDocument: Bt,
        ownerWindow: Mr,
        requirePropFactory: y5,
        setRef: zl,
        unstable_ClassNameGenerator: ij,
        unstable_useEnhancedEffect: er,
        unstable_useId: xh,
        unsupportedProp: x5,
        useControlled: bh,
        useEventCallback: Qr,
        useForkRef: xt,
        useIsFocusVisible: Q_,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  aj = Fe(c.jsx("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add"),
  Ix = Fe(
    c.jsx("path", {
      d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z",
    }),
    "CalendarMonthOutlined"
  ),
  Xs = Fe(
    c.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z",
    }),
    "Error"
  ),
  lj = Fe(
    c.jsx("path", {
      d: "M10.79 16.29c.39.39 1.02.39 1.41 0l3.59-3.59c.39-.39.39-1.02 0-1.41L12.2 7.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L12.67 11H4c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41M19 3H5c-1.11 0-2 .9-2 2v3c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2",
    }),
    "ExitToAppRounded"
  ),
  nu = Fe(
    c.jsx("path", {
      d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z",
    }),
    "Favorite"
  ),
  ru = Fe(
    c.jsx("path", {
      d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05",
    }),
    "FavoriteBorder"
  ),
  cj = Fe(
    c.jsx("path", {
      d: "M15 7.5V2H9v5.5l3 3zM7.5 9H2v6h5.5l3-3zM9 16.5V22h6v-5.5l-3-3zM16.5 9l-3 3 3 3H22V9z",
    }),
    "Gamepad"
  ),
  uj = Fe(c.jsx("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }), "Home"),
  zx = Fe(
    c.jsx("path", {
      d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z",
    }),
    "InsertPhoto"
  ),
  Fx = Fe(
    [
      c.jsx(
        "path",
        {
          d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9",
        },
        "0"
      ),
      c.jsx("circle", { cx: "12", cy: "9", r: "2.5" }, "1"),
    ],
    "LocationOnOutlined"
  ),
  Bh = Fe(
    c.jsx("path", {
      d: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z",
    }),
    "Message"
  ),
  dj = Fe(
    c.jsx("path", {
      d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5",
    }),
    "People"
  ),
  fj = Fe(
    c.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4",
    }),
    "Person"
  ),
  Dx = Fe(
    c.jsx("path", {
      d: "m18 10.48 4-3.98v11l-4-3.98V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zm-2-.79V6H4v12h12zM10 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m0 1c1.34 0 4 .67 4 2v1H6v-1c0-1.33 2.66-2 4-2",
    }),
    "PhotoCameraFront"
  ),
  pj = Fe(
    c.jsx("path", {
      d: "M10 8v8l5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z",
    }),
    "SlideshowOutlined"
  );
function Bx(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: hj } = Object.prototype,
  { getPrototypeOf: Uh } = Object,
  ou = ((e) => (t) => {
    const n = hj.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  In = (e) => ((e = e.toLowerCase()), (t) => ou(t) === e),
  iu = (e) => (t) => typeof t === e,
  { isArray: Ci } = Array,
  zs = iu("undefined");
function mj(e) {
  return (
    e !== null &&
    !zs(e) &&
    e.constructor !== null &&
    !zs(e.constructor) &&
    nn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ux = In("ArrayBuffer");
function gj(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ux(e.buffer)),
    t
  );
}
const vj = iu("string"),
  nn = iu("function"),
  Hx = iu("number"),
  su = (e) => e !== null && typeof e == "object",
  yj = (e) => e === !0 || e === !1,
  Ga = (e) => {
    if (ou(e) !== "object") return !1;
    const t = Uh(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  _j = In("Date"),
  xj = In("File"),
  bj = In("Blob"),
  wj = In("FileList"),
  Sj = (e) => su(e) && nn(e.pipe),
  Cj = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (nn(e.append) &&
          ((t = ou(e)) === "formdata" ||
            (t === "object" &&
              nn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  kj = In("URLSearchParams"),
  jj = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Js(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Ci(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Wx(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Vx =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Kx = (e) => !zs(e) && e !== Vx;
function Uf() {
  const { caseless: e } = (Kx(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Wx(t, o)) || o;
      Ga(t[i]) && Ga(r)
        ? (t[i] = Uf(t[i], r))
        : Ga(r)
        ? (t[i] = Uf({}, r))
        : Ci(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Js(arguments[r], n);
  return t;
}
const Ej = (e, t, n, { allOwnKeys: r } = {}) => (
    Js(
      t,
      (o, i) => {
        n && nn(o) ? (e[i] = Bx(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  $j = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Rj = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Pj = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Uh(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Nj = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Tj = (e) => {
    if (!e) return null;
    if (Ci(e)) return e;
    let t = e.length;
    if (!Hx(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Oj = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Uh(Uint8Array)),
  Mj = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  Lj = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Aj = In("HTMLFormElement"),
  Ij = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  l0 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  zj = In("RegExp"),
  qx = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Js(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  Fj = (e) => {
    qx(e, (t, n) => {
      if (nn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (nn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Dj = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Ci(e) ? r(e) : r(String(e).split(t)), n;
  },
  Bj = () => {},
  Uj = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  cd = "abcdefghijklmnopqrstuvwxyz",
  c0 = "0123456789",
  Gx = { DIGIT: c0, ALPHA: cd, ALPHA_DIGIT: cd + cd.toUpperCase() + c0 },
  Hj = (e = 16, t = Gx.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Wj(e) {
  return !!(
    e &&
    nn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Vj = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (su(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Ci(r) ? [] : {};
            return (
              Js(r, (s, a) => {
                const l = n(s, o + 1);
                !zs(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Kj = In("AsyncFunction"),
  qj = (e) => e && (su(e) || nn(e)) && nn(e.then) && nn(e.catch),
  L = {
    isArray: Ci,
    isArrayBuffer: Ux,
    isBuffer: mj,
    isFormData: Cj,
    isArrayBufferView: gj,
    isString: vj,
    isNumber: Hx,
    isBoolean: yj,
    isObject: su,
    isPlainObject: Ga,
    isUndefined: zs,
    isDate: _j,
    isFile: xj,
    isBlob: bj,
    isRegExp: zj,
    isFunction: nn,
    isStream: Sj,
    isURLSearchParams: kj,
    isTypedArray: Oj,
    isFileList: wj,
    forEach: Js,
    merge: Uf,
    extend: Ej,
    trim: jj,
    stripBOM: $j,
    inherits: Rj,
    toFlatObject: Pj,
    kindOf: ou,
    kindOfTest: In,
    endsWith: Nj,
    toArray: Tj,
    forEachEntry: Mj,
    matchAll: Lj,
    isHTMLForm: Aj,
    hasOwnProperty: l0,
    hasOwnProp: l0,
    reduceDescriptors: qx,
    freezeMethods: Fj,
    toObjectSet: Dj,
    toCamelCase: Ij,
    noop: Bj,
    toFiniteNumber: Uj,
    findKey: Wx,
    global: Vx,
    isContextDefined: Kx,
    ALPHABET: Gx,
    generateString: Hj,
    isSpecCompliantForm: Wj,
    toJSONObject: Vj,
    isAsyncFn: Kj,
    isThenable: qj,
  };
function de(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
L.inherits(de, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: L.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Yx = de.prototype,
  Qx = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Qx[e] = { value: e };
});
Object.defineProperties(de, Qx);
Object.defineProperty(Yx, "isAxiosError", { value: !0 });
de.from = (e, t, n, r, o, i) => {
  const s = Object.create(Yx);
  return (
    L.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    de.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const Gj = null;
function Hf(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function Xx(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function u0(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Xx(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function Yj(e) {
  return L.isArray(e) && !e.some(Hf);
}
const Qj = L.toFlatObject(L, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function au(e, t, n) {
  if (!L.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = L.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, b) {
        return !L.isUndefined(b[m]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || d,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && L.isSpecCompliantForm(t);
  if (!L.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (L.isDate(h)) return h.toISOString();
    if (!l && L.isBlob(h))
      throw new de("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(h) || L.isTypedArray(h)
      ? l && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function d(h, m, b) {
    let _ = h;
    if (h && !b && typeof h == "object") {
      if (L.endsWith(m, "{}"))
        (m = r ? m : m.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (L.isArray(h) && Yj(h)) ||
        ((L.isFileList(h) || L.endsWith(m, "[]")) && (_ = L.toArray(h)))
      )
        return (
          (m = Xx(m)),
          _.forEach(function (y, w) {
            !(L.isUndefined(y) || y === null) &&
              t.append(
                s === !0 ? u0([m], w, i) : s === null ? m : m + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return Hf(h) ? !0 : (t.append(u0(b, m, i), u(h)), !1);
  }
  const f = [],
    p = Object.assign(Qj, {
      defaultVisitor: d,
      convertValue: u,
      isVisitable: Hf,
    });
  function x(h, m) {
    if (!L.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(h),
        L.forEach(h, function (_, v) {
          (!(L.isUndefined(_) || _ === null) &&
            o.call(t, _, L.isString(v) ? v.trim() : v, m, p)) === !0 &&
            x(_, m ? m.concat(v) : [v]);
        }),
        f.pop();
    }
  }
  if (!L.isObject(e)) throw new TypeError("data must be an object");
  return x(e), t;
}
function d0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Hh(e, t) {
  (this._pairs = []), e && au(e, this, t);
}
const Jx = Hh.prototype;
Jx.append = function (t, n) {
  this._pairs.push([t, n]);
};
Jx.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, d0);
      }
    : d0;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function Xj(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Zx(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Xj,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = L.isURLSearchParams(t) ? t.toString() : new Hh(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class f0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    L.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const e2 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Jj = typeof URLSearchParams < "u" ? URLSearchParams : Hh,
  Zj = typeof FormData < "u" ? FormData : null,
  eE = typeof Blob < "u" ? Blob : null,
  tE = {
    isBrowser: !0,
    classes: { URLSearchParams: Jj, FormData: Zj, Blob: eE },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  t2 = typeof window < "u" && typeof document < "u",
  nE = ((e) => t2 && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  rE =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  oE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: t2,
        hasStandardBrowserEnv: nE,
        hasStandardBrowserWebWorkerEnv: rE,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Nn = { ...oE, ...tE };
function iE(e, t) {
  return au(
    e,
    new Nn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return Nn.isNode && L.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function sE(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function aE(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function n2(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && L.isArray(o) ? o.length : s),
      l
        ? (L.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !L.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && L.isArray(o[s]) && (o[s] = aE(o[s])),
          !a)
    );
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return (
      L.forEachEntry(e, (r, o) => {
        t(sE(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function lE(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Wh = {
  transitional: e2,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = L.isObject(t);
      if ((i && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t)))
        return o ? JSON.stringify(n2(t)) : t;
      if (
        L.isArrayBuffer(t) ||
        L.isBuffer(t) ||
        L.isStream(t) ||
        L.isFile(t) ||
        L.isBlob(t)
      )
        return t;
      if (L.isArrayBufferView(t)) return t.buffer;
      if (L.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return iE(t, this.formSerializer).toString();
        if ((a = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return au(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), lE(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Wh.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && L.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? de.from(a, de.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Nn.classes.FormData, Blob: Nn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Wh.headers[e] = {};
});
const Vh = Wh,
  cE = L.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  uE = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && cE[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  p0 = Symbol("internals");
function Bi(e) {
  return e && String(e).trim().toLowerCase();
}
function Ya(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(Ya) : String(e);
}
function dE(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const fE = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ud(e, t, n, r, o) {
  if (L.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!L.isString(t))) {
    if (L.isString(r)) return t.indexOf(r) !== -1;
    if (L.isRegExp(r)) return r.test(t);
  }
}
function pE(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function hE(e, t) {
  const n = L.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class lu {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const d = Bi(l);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = L.findKey(o, d);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || l] = Ya(a));
    }
    const s = (a, l) => L.forEach(a, (u, d) => i(u, d, l));
    return (
      L.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : L.isString(t) && (t = t.trim()) && !fE(t)
        ? s(uE(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Bi(t)), t)) {
      const r = L.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return dE(o);
        if (L.isFunction(n)) return n.call(this, o, r);
        if (L.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Bi(t)), t)) {
      const r = L.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ud(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = Bi(s)), s)) {
        const a = L.findKey(r, s);
        a && (!n || ud(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return L.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || ud(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      L.forEach(this, (o, i) => {
        const s = L.findKey(r, i);
        if (s) {
          (n[s] = Ya(o)), delete n[i];
          return;
        }
        const a = t ? pE(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Ya(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      L.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && L.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[p0] = this[p0] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = Bi(s);
      r[a] || (hE(o, s), (r[a] = !0));
    }
    return L.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
lu.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
L.reduceDescriptors(lu.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
L.freezeMethods(lu);
const Gn = lu;
function dd(e, t) {
  const n = this || Vh,
    r = t || n,
    o = Gn.from(r.headers);
  let i = r.data;
  return (
    L.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function r2(e) {
  return !!(e && e.__CANCEL__);
}
function Zs(e, t, n) {
  de.call(this, e ?? "canceled", de.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
L.inherits(Zs, de, { __CANCEL__: !0 });
function mE(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new de(
          "Request failed with status code " + n.status,
          [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const gE = Nn.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const s = [e + "=" + encodeURIComponent(t)];
        L.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
          L.isString(r) && s.push("path=" + r),
          L.isString(o) && s.push("domain=" + o),
          i === !0 && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function vE(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function yE(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function o2(e, t) {
  return e && !vE(t) ? yE(e, t) : t;
}
const _E = Nn.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const a = L.isString(s) ? o(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function xE(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function bE(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        d = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let f = i,
        p = 0;
      for (; f !== o; ) (p += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const x = d && u - d;
      return x ? Math.round((p * 1e3) / x) : void 0;
    }
  );
}
function h0(e, t) {
  let n = 0;
  const r = bE(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - n,
      l = r(a),
      u = i <= s;
    n = i;
    const d = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: o,
    };
    (d[t ? "download" : "upload"] = !0), e(d);
  };
}
const wE = typeof XMLHttpRequest < "u",
  SE =
    wE &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Gn.from(e.headers).normalize();
        let { responseType: s, withXSRFToken: a } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let d;
        if (L.isFormData(o)) {
          if (Nn.hasStandardBrowserEnv || Nn.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((d = i.getContentType()) !== !1) {
            const [m, ...b] = d
              ? d
                  .split(";")
                  .map((_) => _.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([m || "multipart/form-data", ...b].join("; "));
          }
        }
        let f = new XMLHttpRequest();
        if (e.auth) {
          const m = e.auth.username || "",
            b = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(m + ":" + b));
        }
        const p = o2(e.baseURL, e.url);
        f.open(e.method.toUpperCase(), Zx(p, e.params, e.paramsSerializer), !0),
          (f.timeout = e.timeout);
        function x() {
          if (!f) return;
          const m = Gn.from(
              "getAllResponseHeaders" in f && f.getAllResponseHeaders()
            ),
            _ = {
              data:
                !s || s === "text" || s === "json"
                  ? f.responseText
                  : f.response,
              status: f.status,
              statusText: f.statusText,
              headers: m,
              config: e,
              request: f,
            };
          mE(
            function (y) {
              n(y), u();
            },
            function (y) {
              r(y), u();
            },
            _
          ),
            (f = null);
        }
        if (
          ("onloadend" in f
            ? (f.onloadend = x)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(x);
              }),
          (f.onabort = function () {
            f &&
              (r(new de("Request aborted", de.ECONNABORTED, e, f)), (f = null));
          }),
          (f.onerror = function () {
            r(new de("Network Error", de.ERR_NETWORK, e, f)), (f = null);
          }),
          (f.ontimeout = function () {
            let b = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const _ = e.transitional || e2;
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              r(
                new de(
                  b,
                  _.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
                  e,
                  f
                )
              ),
              (f = null);
          }),
          Nn.hasStandardBrowserEnv &&
            (a && L.isFunction(a) && (a = a(e)), a || (a !== !1 && _E(p))))
        ) {
          const m =
            e.xsrfHeaderName && e.xsrfCookieName && gE.read(e.xsrfCookieName);
          m && i.set(e.xsrfHeaderName, m);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in f &&
            L.forEach(i.toJSON(), function (b, _) {
              f.setRequestHeader(_, b);
            }),
          L.isUndefined(e.withCredentials) ||
            (f.withCredentials = !!e.withCredentials),
          s && s !== "json" && (f.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            f.addEventListener("progress", h0(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            f.upload &&
            f.upload.addEventListener("progress", h0(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (m) => {
              f &&
                (r(!m || m.type ? new Zs(null, e, f) : m),
                f.abort(),
                (f = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const h = xE(p);
        if (h && Nn.protocols.indexOf(h) === -1) {
          r(new de("Unsupported protocol " + h + ":", de.ERR_BAD_REQUEST, e));
          return;
        }
        f.send(o || null);
      });
    },
  Wf = { http: Gj, xhr: SE };
L.forEach(Wf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const m0 = (e) => `- ${e}`,
  CE = (e) => L.isFunction(e) || e === null || e === !1,
  i2 = {
    getAdapter: (e) => {
      e = L.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !CE(n) && ((r = Wf[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new de(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(m0).join(`
`)
            : " " + m0(i[0])
          : "as no adapter specified";
        throw new de(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Wf,
  };
function fd(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Zs(null, e);
}
function g0(e) {
  return (
    fd(e),
    (e.headers = Gn.from(e.headers)),
    (e.data = dd.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    i2
      .getAdapter(e.adapter || Vh.adapter)(e)
      .then(
        function (r) {
          return (
            fd(e),
            (r.data = dd.call(e, e.transformResponse, r)),
            (r.headers = Gn.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            r2(r) ||
              (fd(e),
              r &&
                r.response &&
                ((r.response.data = dd.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Gn.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const v0 = (e) => (e instanceof Gn ? { ...e } : e);
function ii(e, t) {
  t = t || {};
  const n = {};
  function r(u, d, f) {
    return L.isPlainObject(u) && L.isPlainObject(d)
      ? L.merge.call({ caseless: f }, u, d)
      : L.isPlainObject(d)
      ? L.merge({}, d)
      : L.isArray(d)
      ? d.slice()
      : d;
  }
  function o(u, d, f) {
    if (L.isUndefined(d)) {
      if (!L.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, d, f);
  }
  function i(u, d) {
    if (!L.isUndefined(d)) return r(void 0, d);
  }
  function s(u, d) {
    if (L.isUndefined(d)) {
      if (!L.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function a(u, d, f) {
    if (f in t) return r(u, d);
    if (f in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, d) => o(v0(u), v0(d), !0),
  };
  return (
    L.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const f = l[d] || o,
        p = f(e[d], t[d], d);
      (L.isUndefined(p) && f !== a) || (n[d] = p);
    }),
    n
  );
}
const s2 = "1.6.8",
  Kh = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Kh[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const y0 = {};
Kh.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      s2 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new de(
        o(s, " has been removed" + (n ? " in " + n : "")),
        de.ERR_DEPRECATED
      );
    return (
      n &&
        !y0[s] &&
        ((y0[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function kE(e, t, n) {
  if (typeof e != "object")
    throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new de("option " + i + " must be " + l, de.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new de("Unknown option " + i, de.ERR_BAD_OPTION);
  }
}
const Vf = { assertOptions: kE, validators: Kh },
  lr = Vf.validators;
class Ul {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new f0(), response: new f0() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ii(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Vf.assertOptions(
        r,
        {
          silentJSONParsing: lr.transitional(lr.boolean),
          forcedJSONParsing: lr.transitional(lr.boolean),
          clarifyTimeoutError: lr.transitional(lr.boolean),
        },
        !1
      ),
      o != null &&
        (L.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Vf.assertOptions(
              o,
              { encode: lr.function, serialize: lr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && L.merge(i.common, i[n.method]);
    i &&
      L.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete i[h];
        }
      ),
      (n.headers = Gn.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((l = l && m.synchronous), a.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (m) {
      u.push(m.fulfilled, m.rejected);
    });
    let d,
      f = 0,
      p;
    if (!l) {
      const h = [g0.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, u),
          p = h.length,
          d = Promise.resolve(n);
        f < p;

      )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    p = a.length;
    let x = n;
    for (f = 0; f < p; ) {
      const h = a[f++],
        m = a[f++];
      try {
        x = h(x);
      } catch (b) {
        m.call(this, b);
        break;
      }
    }
    try {
      d = g0.call(this, x);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, p = u.length; f < p; ) d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = ii(this.defaults, t);
    const n = o2(t.baseURL, t.url);
    return Zx(n, t.params, t.paramsSerializer);
  }
}
L.forEach(["delete", "get", "head", "options"], function (t) {
  Ul.prototype[t] = function (n, r) {
    return this.request(
      ii(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
L.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        ii(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (Ul.prototype[t] = n()), (Ul.prototype[t + "Form"] = n(!0));
});
const Qa = Ul;
class qh {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Zs(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new qh(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const jE = qh;
function EE(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function $E(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const Kf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Kf).forEach(([e, t]) => {
  Kf[t] = e;
});
const RE = Kf;
function a2(e) {
  const t = new Qa(e),
    n = Bx(Qa.prototype.request, t);
  return (
    L.extend(n, Qa.prototype, t, { allOwnKeys: !0 }),
    L.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return a2(ii(e, o));
    }),
    n
  );
}
const H = a2(Vh);
H.Axios = Qa;
H.CanceledError = Zs;
H.CancelToken = jE;
H.isCancel = r2;
H.VERSION = s2;
H.toFormData = au;
H.AxiosError = de;
H.Cancel = H.CanceledError;
H.all = function (t) {
  return Promise.all(t);
};
H.spread = EE;
H.isAxiosError = $E;
H.mergeConfig = ii;
H.AxiosHeaders = Gn;
H.formToJSON = (e) => n2(L.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = i2.getAdapter;
H.HttpStatusCode = RE;
H.default = H;
const PE = () => {
    const e = tt(),
      { pathname: t } = zr(),
      n = async () => {
        try {
          const r = localStorage.getItem("accessToken");
          if (!r) {
            console.error("Access token not found in localStorage");
            return;
          }
          await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/api/logout/",
            { account_token: r }
          ),
            localStorage.removeItem("accessToken"),
            e("/login"),
            window.location.reload();
        } catch (r) {
          console.error("Logout failed:", r);
        }
      };
    return c.jsx("aside", {
      children: c.jsxs("div", {
        className: Xe.sidebar,
        children: [
          c.jsxs("div", {
            className: Xe.logo__container,
            children: [
              c.jsx("img", { src: Fr, alt: "logo" }),
              c.jsx("figcaption", { children: "Fsociety" }),
            ],
          }),
          c.jsxs("div", {
            className: Xe.btn__container,
            children: [
              c.jsxs(U_, {
                defaultActiveKey: "/home",
                className: Xe.nav__bar,
                children: [
                  c.jsxs(It, {
                    to: "/home",
                    className: t === "/home" ? Xe.activeLink : "",
                    children: [c.jsx(uj, { className: Xe.nav__icon }), "Home"],
                  }),
                  c.jsxs(It, {
                    to: "/users-list/society",
                    className: t === "/users-list/society" ? Xe.activeLink : "",
                    children: [
                      c.jsx(dj, { className: Xe.nav__icon }),
                      "Society",
                    ],
                  }),
                  c.jsxs(It, {
                    to: "/reels",
                    className: t === "/reels" ? Xe.activeLink : "",
                    children: [c.jsx(pj, { className: Xe.nav__icon }), "Reels"],
                  }),
                  c.jsxs(It, {
                    to: "/my-profile",
                    className: t === "/my-profile" ? Xe.activeLink : "",
                    children: [
                      c.jsx(fj, { className: Xe.nav__icon }),
                      "My Profile",
                    ],
                  }),
                  c.jsxs(It, {
                    to: "/message",
                    className: t === "/message" ? Xe.activeLink : "",
                    children: [
                      c.jsx(Bh, { className: Xe.nav__icon }),
                      "Message",
                    ],
                  }),
                  c.jsxs(It, {
                    to: "/game",
                    className: t.startsWith("/game") ? Xe.activeLink : "",
                    children: [c.jsx(cj, { className: Xe.nav__icon }), "Game"],
                  }),
                  c.jsxs(It, {
                    to: "/about-product",
                    className: t === "/about-product" ? Xe.activeLink : "",
                    children: [
                      c.jsx(Xs, { className: Xe.nav__icon }),
                      "About product",
                    ],
                  }),
                ],
              }),
              c.jsx("div", {
                className: "d-flex align-items-center justify-content-center",
                children: c.jsxs(jS, {
                  onClick: n,
                  className: Xe.log__out,
                  children: [c.jsx(lj, {}), "Log Out"],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  mo = g.createContext(void 0),
  NE = () => {
    const [e, t] = g.useState({
      name: "",
      post_count: 0,
      located: "",
      birth_date: "",
      bio: "",
      avatar: "",
      isFollow: !1,
      friends_count: 0,
      subscribers_count: 0,
      email: "",
    });
    return (
      g.useEffect(() => {
        (async () => {
          try {
            const r = localStorage.getItem("accessToken");
            if (!r) {
              console.error("Access token not found in localStorage");
              return;
            }
            const o = await H.get(
              `https://social-netword-fsociety-gamma.vercel.app/api/mypage/${r}`
            );
            t(o.data);
          } catch (r) {
            console.error("Error fetching user data:", r);
          }
        })();
      }, []),
      c.jsx("div", {
        className: "container-fluid home__layout",
        children: c.jsxs("div", {
          className: "row",
          children: [
            c.jsx("div", {
              className: "col-md-2 p-0",
              children: c.jsx(PE, {}),
            }),
            c.jsx("div", {
              className: "col-md-10 p-0",
              children: c.jsx("div", {
                className: "background__central",
                children: c.jsx(mo.Provider, {
                  value: e,
                  children: c.jsx(v_, {}),
                }),
              }),
            }),
          ],
        }),
      })
    );
  };
function TE(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(o, r.firstChild)
        : r.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
}
var OE = `.react-input-emoji--container {
  color: #4b4b4b;
  text-rendering: optimizeLegibility;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 21px;
  margin: 5px 10px;
  box-sizing: border-box;
  flex: 1 1 auto;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 20px;
  min-height: 20px;
  min-width: 0;
  outline: none;
  width: inherit;
  will-change: width;
  vertical-align: baseline;
  border: 1px solid #eaeaea;
  margin-right: 0;
}

.react-input-emoji--wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  position: relative;
  padding-right: 0;
  vertical-align: baseline;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.react-input-emoji--input {
  font-weight: 400;
  max-height: 100px;
  min-height: 20px;
  outline: none;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 1;
  width: 100%;
  user-select: text;
  padding: 9px 12px 11px;
  text-align: left;
}

.react-input-emoji--input img {
  vertical-align: middle;
  width: 18px !important;
  height: 18px !important;
  display: inline !important;
  margin-left: 1px;
  margin-right: 1px;
}

.react-input-emoji--overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}

.react-input-emoji--placeholder {
  color: #a0a0a0;
  pointer-events: none;
  position: absolute;
  user-select: none;
  z-index: 2;
  left: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: calc(100% - 22px);
}

.react-input-emoji--button {
  position: relative;
  display: block;
  text-align: center;
  padding: 0 10px;
  overflow: hidden;
  transition: color 0.1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
}

.react-input-emoji--button svg {
  fill: #858585;
}

.react-input-emoji--button__show svg {
  fill: #128b7e;
}

.react-emoji {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.react-emoji-picker--container {
  position: absolute;
  top: 0;
  width: 100%;
}

.react-emoji-picker--wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 435px;
  width: 352px;
  overflow: hidden;
  z-index: 10;
}

.react-emoji-picker {
  position: absolute;
  top: 0;
  left: 0;
  animation: slidein 0.1s ease-in-out;
}

.react-emoji-picker__show {
  top: 0;
}

.react-input-emoji--mention--container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.react-input-emoji--mention--list {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}

.react-input-emoji--mention--item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: transparent;
  width: 100%;
  margin: 0;
  border: 0;
}

.react-input-emoji--mention--item__selected {
  background-color: #eeeeee;
}

.react-input-emoji--mention--item--img {
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.react-input-emoji--mention--item--name {
  font-size: 16px;
  color: #333;
}

.react-input-emoji--mention--item--name__selected {
  color: green;
}

.react-input-emoji--mention--text {
  color: #039be5;
}

.react-input-emoji--mention--loading {
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.react-input-emoji--mention--loading--spinner,
.react-input-emoji--mention--loading--spinner::after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}

.react-input-emoji--mention--loading--spinner {
  margin: 1px auto;
  font-size: 2px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0, 0, 0, 0.1);
  border-right: 1.1em solid rgba(0, 0, 0, 0.1);
  border-bottom: 1.1em solid rgba(0, 0, 0, 0.1);
  border-left: 1.1em solid rgba(0, 0, 0, 0.4);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes slidein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`;
TE(OE);
function ME(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      s,
      a = [],
      l = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        l = !1;
      } else
        for (
          ;
          !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t);
          l = !0
        );
    } catch (d) {
      (u = !0), (o = d);
    } finally {
      try {
        if (!l && n.return != null && ((s = n.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function _0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _0(Object(n), !0).forEach(function (r) {
          LE(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : _0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Xi() {
  Xi = function () {
    return t;
  };
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (R, P, E) {
        R[P] = E.value;
      },
    i = typeof Symbol == "function" ? Symbol : {},
    s = i.iterator || "@@iterator",
    a = i.asyncIterator || "@@asyncIterator",
    l = i.toStringTag || "@@toStringTag";
  function u(R, P, E) {
    return (
      Object.defineProperty(R, P, {
        value: E,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      R[P]
    );
  }
  try {
    u({}, "");
  } catch {
    u = function (P, E, N) {
      return (P[E] = N);
    };
  }
  function d(R, P, E, N) {
    var T = P && P.prototype instanceof _ ? P : _,
      W = Object.create(T.prototype),
      V = new B(N || []);
    return o(W, "_invoke", { value: O(R, E, V) }), W;
  }
  function f(R, P, E) {
    try {
      return { type: "normal", arg: R.call(P, E) };
    } catch (N) {
      return { type: "throw", arg: N };
    }
  }
  t.wrap = d;
  var p = "suspendedStart",
    x = "suspendedYield",
    h = "executing",
    m = "completed",
    b = {};
  function _() {}
  function v() {}
  function y() {}
  var w = {};
  u(w, s, function () {
    return this;
  });
  var S = Object.getPrototypeOf,
    C = S && S(S(D([])));
  C && C !== n && r.call(C, s) && (w = C);
  var k = (y.prototype = _.prototype = Object.create(w));
  function $(R) {
    ["next", "throw", "return"].forEach(function (P) {
      u(R, P, function (E) {
        return this._invoke(P, E);
      });
    });
  }
  function M(R, P) {
    function E(T, W, V, le) {
      var J = f(R[T], R, W);
      if (J.type !== "throw") {
        var re = J.arg,
          oe = re.value;
        return oe && typeof oe == "object" && r.call(oe, "__await")
          ? P.resolve(oe.__await).then(
              function (pe) {
                E("next", pe, V, le);
              },
              function (pe) {
                E("throw", pe, V, le);
              }
            )
          : P.resolve(oe).then(
              function (pe) {
                (re.value = pe), V(re);
              },
              function (pe) {
                return E("throw", pe, V, le);
              }
            );
      }
      le(J.arg);
    }
    var N;
    o(this, "_invoke", {
      value: function (T, W) {
        function V() {
          return new P(function (le, J) {
            E(T, W, le, J);
          });
        }
        return (N = N ? N.then(V, V) : V());
      },
    });
  }
  function O(R, P, E) {
    var N = p;
    return function (T, W) {
      if (N === h) throw new Error("Generator is already running");
      if (N === m) {
        if (T === "throw") throw W;
        return { value: e, done: !0 };
      }
      for (E.method = T, E.arg = W; ; ) {
        var V = E.delegate;
        if (V) {
          var le = A(V, E);
          if (le) {
            if (le === b) continue;
            return le;
          }
        }
        if (E.method === "next") E.sent = E._sent = E.arg;
        else if (E.method === "throw") {
          if (N === p) throw ((N = m), E.arg);
          E.dispatchException(E.arg);
        } else E.method === "return" && E.abrupt("return", E.arg);
        N = h;
        var J = f(R, P, E);
        if (J.type === "normal") {
          if (((N = E.done ? m : x), J.arg === b)) continue;
          return { value: J.arg, done: E.done };
        }
        J.type === "throw" && ((N = m), (E.method = "throw"), (E.arg = J.arg));
      }
    };
  }
  function A(R, P) {
    var E = P.method,
      N = R.iterator[E];
    if (N === e)
      return (
        (P.delegate = null),
        (E === "throw" &&
          R.iterator.return &&
          ((P.method = "return"),
          (P.arg = e),
          A(R, P),
          P.method === "throw")) ||
          (E !== "return" &&
            ((P.method = "throw"),
            (P.arg = new TypeError(
              "The iterator does not provide a '" + E + "' method"
            )))),
        b
      );
    var T = f(N, R.iterator, P.arg);
    if (T.type === "throw")
      return (P.method = "throw"), (P.arg = T.arg), (P.delegate = null), b;
    var W = T.arg;
    return W
      ? W.done
        ? ((P[R.resultName] = W.value),
          (P.next = R.nextLoc),
          P.method !== "return" && ((P.method = "next"), (P.arg = e)),
          (P.delegate = null),
          b)
        : W
      : ((P.method = "throw"),
        (P.arg = new TypeError("iterator result is not an object")),
        (P.delegate = null),
        b);
  }
  function z(R) {
    var P = { tryLoc: R[0] };
    1 in R && (P.catchLoc = R[1]),
      2 in R && ((P.finallyLoc = R[2]), (P.afterLoc = R[3])),
      this.tryEntries.push(P);
  }
  function U(R) {
    var P = R.completion || {};
    (P.type = "normal"), delete P.arg, (R.completion = P);
  }
  function B(R) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      R.forEach(z, this),
      this.reset(!0);
  }
  function D(R) {
    if (R || R === "") {
      var P = R[s];
      if (P) return P.call(R);
      if (typeof R.next == "function") return R;
      if (!isNaN(R.length)) {
        var E = -1,
          N = function T() {
            for (; ++E < R.length; )
              if (r.call(R, E)) return (T.value = R[E]), (T.done = !1), T;
            return (T.value = e), (T.done = !0), T;
          };
        return (N.next = N);
      }
    }
    throw new TypeError(typeof R + " is not iterable");
  }
  return (
    (v.prototype = y),
    o(k, "constructor", { value: y, configurable: !0 }),
    o(y, "constructor", { value: v, configurable: !0 }),
    (v.displayName = u(y, l, "GeneratorFunction")),
    (t.isGeneratorFunction = function (R) {
      var P = typeof R == "function" && R.constructor;
      return (
        !!P && (P === v || (P.displayName || P.name) === "GeneratorFunction")
      );
    }),
    (t.mark = function (R) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(R, y)
          : ((R.__proto__ = y), u(R, l, "GeneratorFunction")),
        (R.prototype = Object.create(k)),
        R
      );
    }),
    (t.awrap = function (R) {
      return { __await: R };
    }),
    $(M.prototype),
    u(M.prototype, a, function () {
      return this;
    }),
    (t.AsyncIterator = M),
    (t.async = function (R, P, E, N, T) {
      T === void 0 && (T = Promise);
      var W = new M(d(R, P, E, N), T);
      return t.isGeneratorFunction(P)
        ? W
        : W.next().then(function (V) {
            return V.done ? V.value : W.next();
          });
    }),
    $(k),
    u(k, l, "Generator"),
    u(k, s, function () {
      return this;
    }),
    u(k, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (R) {
      var P = Object(R),
        E = [];
      for (var N in P) E.push(N);
      return (
        E.reverse(),
        function T() {
          for (; E.length; ) {
            var W = E.pop();
            if (W in P) return (T.value = W), (T.done = !1), T;
          }
          return (T.done = !0), T;
        }
      );
    }),
    (t.values = D),
    (B.prototype = {
      constructor: B,
      reset: function (R) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = e),
          this.tryEntries.forEach(U),
          !R)
        )
          for (var P in this)
            P.charAt(0) === "t" &&
              r.call(this, P) &&
              !isNaN(+P.slice(1)) &&
              (this[P] = e);
      },
      stop: function () {
        this.done = !0;
        var R = this.tryEntries[0].completion;
        if (R.type === "throw") throw R.arg;
        return this.rval;
      },
      dispatchException: function (R) {
        if (this.done) throw R;
        var P = this;
        function E(J, re) {
          return (
            (W.type = "throw"),
            (W.arg = R),
            (P.next = J),
            re && ((P.method = "next"), (P.arg = e)),
            !!re
          );
        }
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var T = this.tryEntries[N],
            W = T.completion;
          if (T.tryLoc === "root") return E("end");
          if (T.tryLoc <= this.prev) {
            var V = r.call(T, "catchLoc"),
              le = r.call(T, "finallyLoc");
            if (V && le) {
              if (this.prev < T.catchLoc) return E(T.catchLoc, !0);
              if (this.prev < T.finallyLoc) return E(T.finallyLoc);
            } else if (V) {
              if (this.prev < T.catchLoc) return E(T.catchLoc, !0);
            } else {
              if (!le)
                throw new Error("try statement without catch or finally");
              if (this.prev < T.finallyLoc) return E(T.finallyLoc);
            }
          }
        }
      },
      abrupt: function (R, P) {
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var N = this.tryEntries[E];
          if (
            N.tryLoc <= this.prev &&
            r.call(N, "finallyLoc") &&
            this.prev < N.finallyLoc
          ) {
            var T = N;
            break;
          }
        }
        T &&
          (R === "break" || R === "continue") &&
          T.tryLoc <= P &&
          P <= T.finallyLoc &&
          (T = null);
        var W = T ? T.completion : {};
        return (
          (W.type = R),
          (W.arg = P),
          T
            ? ((this.method = "next"), (this.next = T.finallyLoc), b)
            : this.complete(W)
        );
      },
      complete: function (R, P) {
        if (R.type === "throw") throw R.arg;
        return (
          R.type === "break" || R.type === "continue"
            ? (this.next = R.arg)
            : R.type === "return"
            ? ((this.rval = this.arg = R.arg),
              (this.method = "return"),
              (this.next = "end"))
            : R.type === "normal" && P && (this.next = P),
          b
        );
      },
      finish: function (R) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var E = this.tryEntries[P];
          if (E.finallyLoc === R)
            return this.complete(E.completion, E.afterLoc), U(E), b;
        }
      },
      catch: function (R) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var E = this.tryEntries[P];
          if (E.tryLoc === R) {
            var N = E.completion;
            if (N.type === "throw") {
              var T = N.arg;
              U(E);
            }
            return T;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (R, P, E) {
        return (
          (this.delegate = { iterator: D(R), resultName: P, nextLoc: E }),
          this.method === "next" && (this.arg = e),
          b
        );
      },
    }),
    t
  );
}
function b0(e, t, n, r, o, i, s) {
  try {
    var a = e[i](s),
      l = a.value;
  } catch (u) {
    n(u);
    return;
  }
  a.done ? t(l) : Promise.resolve(l).then(r, o);
}
function w0(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var i = e.apply(t, n);
      function s(l) {
        b0(i, r, o, s, a, "next", l);
      }
      function a(l) {
        b0(i, r, o, s, a, "throw", l);
      }
      s(void 0);
    });
  };
}
function LE(e, t, n) {
  return (
    (t = WE(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function AE(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function IE(e, t) {
  if (e == null) return {};
  var n = AE(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Yn(e, t) {
  return FE(e) || ME(e, t) || c2(e, t) || UE();
}
function l2(e) {
  return zE(e) || DE(e) || c2(e) || BE();
}
function zE(e) {
  if (Array.isArray(e)) return qf(e);
}
function FE(e) {
  if (Array.isArray(e)) return e;
}
function DE(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function c2(e, t) {
  if (e) {
    if (typeof e == "string") return qf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return qf(e, t);
  }
}
function qf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function BE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HE(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WE(e) {
  var t = HE(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var VE =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
function u2(e) {
  var t = KE(e);
  return (
    t &&
      ((t = l2(new Set(t))),
      t.forEach(function (n) {
        e = d2(e, n, f2("", n));
      })),
    e
  );
}
function d2(e, t, n) {
  return e.replace(new RegExp(t, "g"), n);
}
function KE(e) {
  return e.match(
    /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g
  );
}
function qE(e) {
  var t,
    n = document.querySelector("em-emoji-picker");
  if (!n) return S0(e.native);
  var r =
    n == null || (t = n.shadowRoot) === null || t === void 0
      ? void 0
      : t.querySelector('[title="'.concat(e.name, '"] > span > span'));
  if (!r) return S0(e.native);
  var o = d2(r.style.cssText, '"', "'");
  return f2(o, e.native);
}
function f2(e, t) {
  return '<img style="'
    .concat(e, '; display: inline-block" data-emoji="')
    .concat(t, '" src="')
    .concat(VE, '" />');
}
function S0(e) {
  return '<span class="width: 18px; height: 18px; display: inline-block; margin: 0 1px;">'.concat(
    e,
    "</span>"
  );
}
function Xa(e) {
  var t = document.createElement("div");
  t.innerHTML = e;
  var n = Array.prototype.slice.call(t.querySelectorAll("img"));
  return (
    n.forEach(function (r) {
      t.innerHTML = t.innerHTML.replace(r.outerHTML, r.dataset.emoji);
    }),
    t.innerHTML
  );
}
function GE(e) {
  var t = window.getSelection();
  if (t !== null) {
    for (
      var n = document.createElement("div"), r = 0, o = t.rangeCount;
      r < o;
      ++r
    )
      n.appendChild(t.getRangeAt(r).cloneContents());
    (n = QE(n)),
      e.clipboardData.setData("text", n.innerText),
      e.preventDefault();
  }
}
function YE(e) {
  var t, n;
  if (window.getSelection) {
    if (((t = window.getSelection()), t === null)) return;
    if (t.getRangeAt && t.rangeCount) {
      (n = t.getRangeAt(0)), n.deleteContents();
      var r = document.createElement("div");
      r.innerHTML = e;
      for (
        var o = document.createDocumentFragment(), i, s;
        (i = r.firstChild);

      )
        s = o.appendChild(i);
      n.insertNode(o),
        s &&
          ((n = n.cloneRange()),
          n.setStartAfter(s),
          n.collapse(!0),
          t.removeAllRanges(),
          t.addRange(n));
    }
  }
}
function QE(e) {
  var t = Array.prototype.slice.call(e.querySelectorAll("img"));
  return (
    t.forEach(function (n) {
      n.outerHTML = n.dataset.emoji;
    }),
    e
  );
}
function C0(e) {
  var t = e.text,
    n = e.html,
    r = t.length,
    o = (n.match(/<img/g) || []).length;
  return r + o;
}
function XE(e) {
  var t = e.innerHTML.replace(/<br\s*\/?>/gi, "[BR]"),
    n = t.replace(/<[^>]+>/g, ""),
    r = n.replace(/\[BR\]/gi, "</br>");
  return r;
}
function JE(e) {
  var t = e.startContainer,
    n = e.startOffset;
  if (t.nodeType !== Node.TEXT_NODE) {
    for (; t.nodeType !== Node.TEXT_NODE && ((t = t.nextSibling), !!t); );
    if (!t)
      for (t = e.commonAncestorContainer; t.nodeType !== Node.TEXT_NODE; )
        t = t.firstChild;
    n = 0;
  }
  return { node: t, offset: n };
}
function ZE() {
  var e = window.getSelection(),
    t = e.getRangeAt(0),
    n = JE(t);
  return { selection: e, range: t, selectionStart: n };
}
function e$() {
  var e = ZE(),
    t = e.selection,
    n = e.range,
    r = e.selectionStart;
  if (t.isCollapsed && r.offset === r.node.textContent.length) {
    var o = document.createElement("br");
    n.insertNode(o),
      n.setStartAfter(o),
      n.setEndAfter(o),
      t.removeAllRanges(),
      t.addRange(n);
    var i = document.createElement("br");
    n.insertNode(i),
      n.setStartAfter(i),
      n.setEndAfter(i),
      t.removeAllRanges(),
      t.addRange(n);
  } else {
    var s = document.createElement("br");
    n.insertNode(s),
      n.setStartAfter(s),
      n.setEndAfter(s),
      t.removeAllRanges(),
      t.addRange(n),
      r.node.nextSibling &&
        r.node.nextSibling.nodeType === Node.TEXT_NODE &&
        (n.setStart(r.node.nextSibling, 1), n.setEnd(r.node.nextSibling, 1)),
      t.removeAllRanges(),
      t.addRange(n);
  }
}
function p2(e) {
  var t = g.useRef([]),
    n = g.useRef(""),
    r = g.useCallback(function (i) {
      t.current.push(i);
    }, []),
    o = g.useCallback(function (i) {
      var s = t.current.reduce(function (a, l) {
        return l(a);
      }, i);
      return (s = t$(s, e)), (n.current = s), s;
    }, []);
  return { addSanitizeFn: r, sanitize: o, sanitizedTextRef: n };
}
function t$(e, t) {
  var n = document.createElement("div");
  n.innerHTML = e;
  var r;
  return (
    t ? (r = XE(n)) : (r = n.innerText || ""), (r = r.replace(/\n/gi, "")), r
  );
}
function n$(e) {
  var t = e.ref,
    n = e.textInputRef,
    r = e.setValue,
    o = e.emitChange,
    i = p2(!1),
    s = i.sanitize,
    a = i.sanitizedTextRef;
  g.useImperativeHandle(t, function () {
    return {
      get value() {
        return a.current;
      },
      set value(l) {
        r(l);
      },
      focus: function () {
        n.current !== null && n.current.focus();
      },
      blur: function () {
        n.current !== null && s(n.current.html), o();
      },
    };
  });
}
function r$(e, t, n) {
  var r = g.useRef(null),
    o = g.useRef(n),
    i = g.useCallback(
      function () {
        if (e.current !== null) {
          var a = r.current,
            l = e.current.size;
          (!a || a.width !== l.width || a.height !== l.height) &&
            typeof t == "function" &&
            t(l),
            (r.current = l);
        }
      },
      [t, e]
    ),
    s = g.useCallback(
      function (a) {
        typeof o.current == "function" && o.current(a),
          typeof t == "function" && i();
      },
      [i, t]
    );
  return (
    g.useEffect(
      function () {
        e.current && i();
      },
      [i, e]
    ),
    s
  );
}
var o$ = ["placeholder", "style", "tabIndex", "className", "onChange"],
  i$ = function (t, n) {
    var r = t.placeholder,
      o = t.style,
      i = t.tabIndex,
      s = t.className,
      a = t.onChange,
      l = IE(t, o$);
    g.useImperativeHandle(n, function () {
      return {
        appendContent: function (m) {
          d.current && d.current.focus(),
            YE(m),
            d.current && d.current.focus(),
            d.current && u.current && Xa(d.current.innerHTML) === ""
              ? (u.current.style.visibility = "visible")
              : u.current && (u.current.style.visibility = "hidden"),
            d.current && typeof a == "function" && a(d.current.innerHTML);
        },
        set html(h) {
          if ((d.current && (d.current.innerHTML = h), u.current)) {
            var m = Xa(h);
            m === ""
              ? (u.current.style.visibility = "visible")
              : (u.current.style.visibility = "hidden");
          }
          typeof a == "function" && d.current && a(d.current.innerHTML);
        },
        get html() {
          return d.current ? d.current.innerHTML : "";
        },
        get text() {
          return d.current ? d.current.innerText : "";
        },
        get size() {
          return d.current
            ? { width: d.current.offsetWidth, height: d.current.offsetHeight }
            : { width: 0, height: 0 };
        },
        focus: function () {
          d.current && d.current.focus();
        },
      };
    });
    var u = g.useRef(null),
      d = g.useRef(null);
    function f(h) {
      if (
        h.key === "Enter" &&
        (h.shiftKey === !0 || h.ctrlKey === !0) &&
        l.shouldReturn &&
        (h.preventDefault(), d.current)
      ) {
        e$();
        return;
      }
      h.key === "Enter"
        ? l.onEnter(h)
        : h.key === "ArrowUp"
        ? l.onArrowUp(h)
        : h.key === "ArrowDown"
        ? l.onArrowDown(h)
        : h.key.length === 1 &&
          u.current &&
          (u.current.style.visibility = "hidden"),
        l.onKeyDown(h);
    }
    function p() {
      l.onFocus();
    }
    function x(h) {
      l.onKeyUp(h);
      var m = d.current;
      if (u.current && m) {
        var b = Xa(m.innerHTML);
        b === ""
          ? (u.current.style.visibility = "visible")
          : (u.current.style.visibility = "hidden");
      }
      typeof a == "function" && d.current && a(d.current.innerHTML);
    }
    return q.createElement(
      "div",
      { className: "react-input-emoji--container", style: o },
      q.createElement(
        "div",
        { className: "react-input-emoji--wrapper", onClick: p },
        q.createElement(
          "div",
          { ref: u, className: "react-input-emoji--placeholder" },
          r
        ),
        q.createElement("div", {
          ref: d,
          onKeyDown: f,
          onKeyUp: x,
          tabIndex: i,
          contentEditable: !0,
          className: "react-input-emoji--input".concat(s ? " ".concat(s) : ""),
          onBlur: l.onBlur,
          onCopy: l.onCopy,
          onPaste: l.onPaste,
          "data-testid": "react-input-emoji--input",
        })
      )
    );
  },
  s$ = g.forwardRef(i$);
function k0(e) {
  var t = e.showPicker,
    n = e.toggleShowPicker,
    r = e.buttonElement,
    o = e.buttonRef,
    i = g.useRef(null),
    s = g.useState(!1),
    a = Yn(s, 2),
    l = a[0],
    u = a[1];
  return (
    g.useEffect(
      function () {
        var d, f, p, x;
        ((d =
          o == null ||
          (f = o.current) === null ||
          f === void 0 ||
          (f = f.childNodes) === null ||
          f === void 0
            ? void 0
            : f.length) !== null && d !== void 0
          ? d
          : 0) > 2
          ? (i.current.appendChild(o.current.childNodes[0]), u(!0))
          : ((p =
              r == null || (x = r.childNodes) === null || x === void 0
                ? void 0
                : x.length) !== null && p !== void 0
              ? p
              : 0) > 2 &&
            (i.current.appendChild(r == null ? void 0 : r.childNodes[0]),
            u(!0));
      },
      [r == null ? void 0 : r.childNodes]
    ),
    q.createElement(
      "button",
      {
        ref: i,
        type: "button",
        className: "react-input-emoji--button".concat(
          t ? " react-input-emoji--button__show" : ""
        ),
        onClick: n,
      },
      !l &&
        q.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            className: "react-input-emoji--button--icon",
          },
          q.createElement("path", {
            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10",
          }),
          q.createElement("path", {
            d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0",
          })
        )
    )
  );
}
function h2(e) {
  return e && e.__esModule ? e.default : e;
}
function dn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var cu,
  X,
  m2,
  fs,
  g2,
  j0,
  Hl = {},
  v2 = [],
  a$ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function xr(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function y2(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Gf(e, t, n) {
  var r,
    o,
    i,
    s = {};
  for (i in t)
    i == "key" ? (r = t[i]) : i == "ref" ? (o = t[i]) : (s[i] = t[i]);
  if (
    (arguments.length > 2 &&
      (s.children = arguments.length > 3 ? cu.call(arguments, 2) : n),
    typeof e == "function" && e.defaultProps != null)
  )
    for (i in e.defaultProps) s[i] === void 0 && (s[i] = e.defaultProps[i]);
  return Ja(e, s, r, o, null);
}
function Ja(e, t, n, r, o) {
  var i = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: o ?? ++m2,
  };
  return o == null && X.vnode != null && X.vnode(i), i;
}
function Fn() {
  return { current: null };
}
function si(e) {
  return e.children;
}
function Ln(e, t) {
  (this.props = e), (this.context = t);
}
function ai(e, t) {
  if (t == null) return e.__ ? ai(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? ai(e) : null;
}
function _2(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return _2(e);
  }
}
function E0(e) {
  ((!e.__d && (e.__d = !0) && fs.push(e) && !Wl.__r++) ||
    j0 !== X.debounceRendering) &&
    ((j0 = X.debounceRendering) || g2)(Wl);
}
function Wl() {
  for (var e; (Wl.__r = fs.length); )
    (e = fs.sort(function (t, n) {
      return t.__v.__b - n.__v.__b;
    })),
      (fs = []),
      e.some(function (t) {
        var n, r, o, i, s, a;
        t.__d &&
          ((s = (i = (n = t).__v).__e),
          (a = n.__P) &&
            ((r = []),
            ((o = xr({}, i)).__v = i.__v + 1),
            Gh(
              a,
              i,
              o,
              n.__n,
              a.ownerSVGElement !== void 0,
              i.__h != null ? [s] : null,
              r,
              s ?? ai(i),
              i.__h
            ),
            S2(r, i),
            i.__e != s && _2(i)));
      });
}
function x2(e, t, n, r, o, i, s, a, l, u) {
  var d,
    f,
    p,
    x,
    h,
    m,
    b,
    _ = (r && r.__k) || v2,
    v = _.length;
  for (n.__k = [], d = 0; d < t.length; d++)
    if (
      (x = n.__k[d] =
        (x = t[d]) == null || typeof x == "boolean"
          ? null
          : typeof x == "string" || typeof x == "number" || typeof x == "bigint"
          ? Ja(null, x, null, null, x)
          : Array.isArray(x)
          ? Ja(si, { children: x }, null, null, null)
          : x.__b > 0
          ? Ja(x.type, x.props, x.key, null, x.__v)
          : x) != null
    ) {
      if (
        ((x.__ = n),
        (x.__b = n.__b + 1),
        (p = _[d]) === null || (p && x.key == p.key && x.type === p.type))
      )
        _[d] = void 0;
      else
        for (f = 0; f < v; f++) {
          if ((p = _[f]) && x.key == p.key && x.type === p.type) {
            _[f] = void 0;
            break;
          }
          p = null;
        }
      Gh(e, x, (p = p || Hl), o, i, s, a, l, u),
        (h = x.__e),
        (f = x.ref) &&
          p.ref != f &&
          (b || (b = []),
          p.ref && b.push(p.ref, null, x),
          b.push(f, x.__c || h, x)),
        h != null
          ? (m == null && (m = h),
            typeof x.type == "function" && x.__k === p.__k
              ? (x.__d = l = b2(x, l, e))
              : (l = w2(e, x, p, _, h, l)),
            typeof n.type == "function" && (n.__d = l))
          : l && p.__e == l && l.parentNode != e && (l = ai(p));
    }
  for (n.__e = m, d = v; d--; )
    _[d] != null &&
      (typeof n.type == "function" &&
        _[d].__e != null &&
        _[d].__e == n.__d &&
        (n.__d = ai(r, d + 1)),
      k2(_[d], _[d]));
  if (b) for (d = 0; d < b.length; d++) C2(b[d], b[++d], b[++d]);
}
function b2(e, t, n) {
  for (var r, o = e.__k, i = 0; o && i < o.length; i++)
    (r = o[i]) &&
      ((r.__ = e),
      (t =
        typeof r.type == "function" ? b2(r, t, n) : w2(n, r, r, o, r.__e, t)));
  return t;
}
function Vl(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (Array.isArray(e)
        ? e.some(function (n) {
            Vl(n, t);
          })
        : t.push(e)),
    t
  );
}
function w2(e, t, n, r, o, i) {
  var s, a, l;
  if (t.__d !== void 0) (s = t.__d), (t.__d = void 0);
  else if (n == null || o != i || o.parentNode == null)
    e: if (i == null || i.parentNode !== e) e.appendChild(o), (s = null);
    else {
      for (a = i, l = 0; (a = a.nextSibling) && l < r.length; l += 2)
        if (a == o) break e;
      e.insertBefore(o, i), (s = i);
    }
  return s !== void 0 ? s : o.nextSibling;
}
function l$(e, t, n, r, o) {
  var i;
  for (i in n)
    i === "children" || i === "key" || i in t || Kl(e, i, null, n[i], r);
  for (i in t)
    (o && typeof t[i] != "function") ||
      i === "children" ||
      i === "key" ||
      i === "value" ||
      i === "checked" ||
      n[i] === t[i] ||
      Kl(e, i, t[i], n[i], r);
}
function $0(e, t, n) {
  t[0] === "-"
    ? e.setProperty(t, n)
    : (e[t] =
        n == null ? "" : typeof n != "number" || a$.test(t) ? n : n + "px");
}
function Kl(e, t, n, r, o) {
  var i;
  e: if (t === "style")
    if (typeof n == "string") e.style.cssText = n;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || $0(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || $0(e.style, t, n[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (i = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + i] = n),
      n
        ? r || e.addEventListener(t, i ? P0 : R0, i)
        : e.removeEventListener(t, i ? P0 : R0, i);
  else if (t !== "dangerouslySetInnerHTML") {
    if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
    else if (
      t !== "href" &&
      t !== "list" &&
      t !== "form" &&
      t !== "tabIndex" &&
      t !== "download" &&
      t in e
    )
      try {
        e[t] = n ?? "";
        break e;
      } catch {}
    typeof n == "function" ||
      (n != null && (n !== !1 || (t[0] === "a" && t[1] === "r"))
        ? e.setAttribute(t, n)
        : e.removeAttribute(t));
  }
}
function R0(e) {
  this.l[e.type + !1](X.event ? X.event(e) : e);
}
function P0(e) {
  this.l[e.type + !0](X.event ? X.event(e) : e);
}
function Gh(e, t, n, r, o, i, s, a, l) {
  var u,
    d,
    f,
    p,
    x,
    h,
    m,
    b,
    _,
    v,
    y,
    w = t.type;
  if (t.constructor !== void 0) return null;
  n.__h != null &&
    ((l = n.__h), (a = t.__e = n.__e), (t.__h = null), (i = [a])),
    (u = X.__b) && u(t);
  try {
    e: if (typeof w == "function") {
      if (
        ((b = t.props),
        (_ = (u = w.contextType) && r[u.__c]),
        (v = u ? (_ ? _.props.value : u.__) : r),
        n.__c
          ? (m = (d = t.__c = n.__c).__ = d.__E)
          : ("prototype" in w && w.prototype.render
              ? (t.__c = d = new w(b, v))
              : ((t.__c = d = new Ln(b, v)),
                (d.constructor = w),
                (d.render = u$)),
            _ && _.sub(d),
            (d.props = b),
            d.state || (d.state = {}),
            (d.context = v),
            (d.__n = r),
            (f = d.__d = !0),
            (d.__h = [])),
        d.__s == null && (d.__s = d.state),
        w.getDerivedStateFromProps != null &&
          (d.__s == d.state && (d.__s = xr({}, d.__s)),
          xr(d.__s, w.getDerivedStateFromProps(b, d.__s))),
        (p = d.props),
        (x = d.state),
        f)
      )
        w.getDerivedStateFromProps == null &&
          d.componentWillMount != null &&
          d.componentWillMount(),
          d.componentDidMount != null && d.__h.push(d.componentDidMount);
      else {
        if (
          (w.getDerivedStateFromProps == null &&
            b !== p &&
            d.componentWillReceiveProps != null &&
            d.componentWillReceiveProps(b, v),
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(b, d.__s, v) === !1) ||
            t.__v === n.__v)
        ) {
          (d.props = b),
            (d.state = d.__s),
            t.__v !== n.__v && (d.__d = !1),
            (d.__v = t),
            (t.__e = n.__e),
            (t.__k = n.__k),
            t.__k.forEach(function (S) {
              S && (S.__ = t);
            }),
            d.__h.length && s.push(d);
          break e;
        }
        d.componentWillUpdate != null && d.componentWillUpdate(b, d.__s, v),
          d.componentDidUpdate != null &&
            d.__h.push(function () {
              d.componentDidUpdate(p, x, h);
            });
      }
      (d.context = v),
        (d.props = b),
        (d.state = d.__s),
        (u = X.__r) && u(t),
        (d.__d = !1),
        (d.__v = t),
        (d.__P = e),
        (u = d.render(d.props, d.state, d.context)),
        (d.state = d.__s),
        d.getChildContext != null && (r = xr(xr({}, r), d.getChildContext())),
        f ||
          d.getSnapshotBeforeUpdate == null ||
          (h = d.getSnapshotBeforeUpdate(p, x)),
        (y =
          u != null && u.type === si && u.key == null ? u.props.children : u),
        x2(e, Array.isArray(y) ? y : [y], t, n, r, o, i, s, a, l),
        (d.base = t.__e),
        (t.__h = null),
        d.__h.length && s.push(d),
        m && (d.__E = d.__ = null),
        (d.__e = !1);
    } else
      i == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = c$(n.__e, t, n, r, o, i, s, l));
    (u = X.diffed) && u(t);
  } catch (S) {
    (t.__v = null),
      (l || i != null) &&
        ((t.__e = a), (t.__h = !!l), (i[i.indexOf(a)] = null)),
      X.__e(S, t, n);
  }
}
function S2(e, t) {
  X.__c && X.__c(t, e),
    e.some(function (n) {
      try {
        (e = n.__h),
          (n.__h = []),
          e.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        X.__e(r, n.__v);
      }
    });
}
function c$(e, t, n, r, o, i, s, a) {
  var l,
    u,
    d,
    f = n.props,
    p = t.props,
    x = t.type,
    h = 0;
  if ((x === "svg" && (o = !0), i != null)) {
    for (; h < i.length; h++)
      if (
        (l = i[h]) &&
        "setAttribute" in l == !!x &&
        (x ? l.localName === x : l.nodeType === 3)
      ) {
        (e = l), (i[h] = null);
        break;
      }
  }
  if (e == null) {
    if (x === null) return document.createTextNode(p);
    (e = o
      ? document.createElementNS("http://www.w3.org/2000/svg", x)
      : document.createElement(x, p.is && p)),
      (i = null),
      (a = !1);
  }
  if (x === null) f === p || (a && e.data === p) || (e.data = p);
  else {
    if (
      ((i = i && cu.call(e.childNodes)),
      (u = (f = n.props || Hl).dangerouslySetInnerHTML),
      (d = p.dangerouslySetInnerHTML),
      !a)
    ) {
      if (i != null)
        for (f = {}, h = 0; h < e.attributes.length; h++)
          f[e.attributes[h].name] = e.attributes[h].value;
      (d || u) &&
        ((d && ((u && d.__html == u.__html) || d.__html === e.innerHTML)) ||
          (e.innerHTML = (d && d.__html) || ""));
    }
    if ((l$(e, p, f, o, a), d)) t.__k = [];
    else if (
      ((h = t.props.children),
      x2(
        e,
        Array.isArray(h) ? h : [h],
        t,
        n,
        r,
        o && x !== "foreignObject",
        i,
        s,
        i ? i[0] : n.__k && ai(n, 0),
        a
      ),
      i != null)
    )
      for (h = i.length; h--; ) i[h] != null && y2(i[h]);
    a ||
      ("value" in p &&
        (h = p.value) !== void 0 &&
        (h !== f.value || h !== e.value || (x === "progress" && !h)) &&
        Kl(e, "value", h, f.value, !1),
      "checked" in p &&
        (h = p.checked) !== void 0 &&
        h !== e.checked &&
        Kl(e, "checked", h, f.checked, !1));
  }
  return e;
}
function C2(e, t, n) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (r) {
    X.__e(r, n);
  }
}
function k2(e, t, n) {
  var r, o;
  if (
    (X.unmount && X.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || C2(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        X.__e(i, t);
      }
    r.base = r.__P = null;
  }
  if ((r = e.__k))
    for (o = 0; o < r.length; o++)
      r[o] && k2(r[o], t, typeof e.type != "function");
  n || e.__e == null || y2(e.__e), (e.__e = e.__d = void 0);
}
function u$(e, t, n) {
  return this.constructor(e, n);
}
function j2(e, t, n) {
  var r, o, i;
  X.__ && X.__(e, t),
    (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
    (i = []),
    Gh(
      t,
      (e = ((!r && n) || t).__k = Gf(si, null, [e])),
      o || Hl,
      Hl,
      t.ownerSVGElement !== void 0,
      !r && n ? [n] : o ? null : t.firstChild ? cu.call(t.childNodes) : null,
      i,
      !r && n ? n : o ? o.__e : t.firstChild,
      r
    ),
    S2(i, e);
}
(cu = v2.slice),
  (X = {
    __e: function (e, t) {
      for (var n, r, o; (t = t.__); )
        if ((n = t.__c) && !n.__)
          try {
            if (
              ((r = n.constructor) &&
                r.getDerivedStateFromError != null &&
                (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
              n.componentDidCatch != null &&
                (n.componentDidCatch(e), (o = n.__d)),
              o)
            )
              return (n.__E = n);
          } catch (i) {
            e = i;
          }
      throw e;
    },
  }),
  (m2 = 0),
  (Ln.prototype.setState = function (e, t) {
    var n;
    (n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = xr({}, this.state))),
      typeof e == "function" && (e = e(xr({}, n), this.props)),
      e && xr(n, e),
      e != null && this.__v && (t && this.__h.push(t), E0(this));
  }),
  (Ln.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), E0(this));
  }),
  (Ln.prototype.render = si),
  (fs = []),
  (g2 =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Wl.__r = 0);
var d$ = 0;
function I(e, t, n, r, o) {
  var i,
    s,
    a = {};
  for (s in t) s == "ref" ? (i = t[s]) : (a[s] = t[s]);
  var l = {
    type: e,
    props: a,
    key: n,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --d$,
    __source: r,
    __self: o,
  };
  if (typeof e == "function" && (i = e.defaultProps))
    for (s in i) a[s] === void 0 && (a[s] = i[s]);
  return X.vnode && X.vnode(l), l;
}
function f$(e, t) {
  try {
    window.localStorage[`emoji-mart.${e}`] = JSON.stringify(t);
  } catch {}
}
function p$(e) {
  try {
    const t = window.localStorage[`emoji-mart.${e}`];
    if (t) return JSON.parse(t);
  } catch {}
}
var Pr = { set: f$, get: p$ };
const pd = new Map(),
  h$ = [
    { v: 14, emoji: "🫠" },
    { v: 13.1, emoji: "😶‍🌫️" },
    { v: 13, emoji: "🥸" },
    { v: 12.1, emoji: "🧑‍🦰" },
    { v: 12, emoji: "🥱" },
    { v: 11, emoji: "🥰" },
    { v: 5, emoji: "🤩" },
    { v: 4, emoji: "👱‍♀️" },
    { v: 3, emoji: "🤣" },
    { v: 2, emoji: "👋🏻" },
    { v: 1, emoji: "🙃" },
  ];
function m$() {
  for (const { v: e, emoji: t } of h$) if (E2(t)) return e;
}
function g$() {
  return !E2("🇨🇦");
}
function E2(e) {
  if (pd.has(e)) return pd.get(e);
  const t = v$(e);
  return pd.set(e, t), t;
}
const v$ = (() => {
  let e = null;
  try {
    navigator.userAgent.includes("jsdom") ||
      (e = document
        .createElement("canvas")
        .getContext("2d", { willReadFrequently: !0 }));
  } catch {}
  if (!e) return () => !1;
  const t = 25,
    n = 20,
    r = Math.floor(t / 2);
  return (
    (e.font = r + "px Arial, Sans-Serif"),
    (e.textBaseline = "top"),
    (e.canvas.width = n * 2),
    (e.canvas.height = t),
    (o) => {
      e.clearRect(0, 0, n * 2, t),
        (e.fillStyle = "#FF0000"),
        e.fillText(o, 0, 22),
        (e.fillStyle = "#0000FF"),
        e.fillText(o, n, 22);
      const i = e.getImageData(0, 0, n, t).data,
        s = i.length;
      let a = 0;
      for (; a < s && !i[a + 3]; a += 4);
      if (a >= s) return !1;
      const l = n + ((a / 4) % n),
        u = Math.floor(a / 4 / n),
        d = e.getImageData(l, u, 1, 1).data;
      return !(
        i[a] !== d[0] ||
        i[a + 2] !== d[2] ||
        e.measureText(o).width >= n
      );
    }
  );
})();
var N0 = { latestVersion: m$, noCountryFlags: g$ };
const Yf = [
  "+1",
  "grinning",
  "kissing_heart",
  "heart_eyes",
  "laughing",
  "stuck_out_tongue_winking_eye",
  "sweat_smile",
  "joy",
  "scream",
  "disappointed",
  "unamused",
  "weary",
  "sob",
  "sunglasses",
  "heart",
];
let ct = null;
function y$(e) {
  ct || (ct = Pr.get("frequently") || {});
  const t = e.id || e;
  t &&
    (ct[t] || (ct[t] = 0),
    (ct[t] += 1),
    Pr.set("last", t),
    Pr.set("frequently", ct));
}
function _$({ maxFrequentRows: e, perLine: t }) {
  if (!e) return [];
  ct || (ct = Pr.get("frequently"));
  let n = [];
  if (!ct) {
    ct = {};
    for (let i in Yf.slice(0, t)) {
      const s = Yf[i];
      (ct[s] = t - i), n.push(s);
    }
    return n;
  }
  const r = e * t,
    o = Pr.get("last");
  for (let i in ct) n.push(i);
  if (
    (n.sort((i, s) => {
      const a = ct[s],
        l = ct[i];
      return a == l ? i.localeCompare(s) : a - l;
    }),
    n.length > r)
  ) {
    const i = n.slice(r);
    n = n.slice(0, r);
    for (let s of i) s != o && delete ct[s];
    o && n.indexOf(o) == -1 && (delete ct[n[n.length - 1]], n.splice(-1, 1, o)),
      Pr.set("frequently", ct);
  }
  return n;
}
var $2 = { add: y$, get: _$, DEFAULTS: Yf },
  R2 = {};
R2 = JSON.parse(
  '{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}'
);
var Wn = {
  autoFocus: { value: !1 },
  dynamicWidth: { value: !1 },
  emojiButtonColors: { value: null },
  emojiButtonRadius: { value: "100%" },
  emojiButtonSize: { value: 36 },
  emojiSize: { value: 24 },
  emojiVersion: {
    value: 14,
    choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14],
  },
  exceptEmojis: { value: [] },
  icons: { value: "auto", choices: ["auto", "outline", "solid"] },
  locale: {
    value: "en",
    choices: [
      "en",
      "ar",
      "be",
      "cs",
      "de",
      "es",
      "fa",
      "fi",
      "fr",
      "hi",
      "it",
      "ja",
      "kr",
      "nl",
      "pl",
      "pt",
      "ru",
      "sa",
      "tr",
      "uk",
      "vi",
      "zh",
    ],
  },
  maxFrequentRows: { value: 4 },
  navPosition: { value: "top", choices: ["top", "bottom", "none"] },
  noCountryFlags: { value: !1 },
  noResultsEmoji: { value: null },
  perLine: { value: 9 },
  previewEmoji: { value: null },
  previewPosition: { value: "bottom", choices: ["top", "bottom", "none"] },
  searchPosition: { value: "sticky", choices: ["sticky", "static", "none"] },
  set: {
    value: "native",
    choices: ["native", "apple", "facebook", "google", "twitter"],
  },
  skin: { value: 1, choices: [1, 2, 3, 4, 5, 6] },
  skinTonePosition: {
    value: "preview",
    choices: ["preview", "search", "none"],
  },
  theme: { value: "auto", choices: ["auto", "light", "dark"] },
  categories: null,
  categoryIcons: null,
  custom: null,
  data: null,
  i18n: null,
  getImageURL: null,
  getSpritesheetURL: null,
  onAddCustomEmoji: null,
  onClickOutside: null,
  onEmojiSelect: null,
  stickySearch: { deprecated: !0, value: !0 },
};
let vt = null,
  se = null;
const hd = {};
async function T0(e) {
  if (hd[e]) return hd[e];
  const n = await (await fetch(e)).json();
  return (hd[e] = n), n;
}
let md = null,
  P2 = null,
  N2 = !1;
function uu(e, { caller: t } = {}) {
  return (
    md ||
      (md = new Promise((n) => {
        P2 = n;
      })),
    e
      ? x$(e)
      : t &&
        !N2 &&
        console.warn(
          `\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`
        ),
    md
  );
}
async function x$(e) {
  N2 = !0;
  let { emojiVersion: t, set: n, locale: r } = e;
  if (
    (t || (t = Wn.emojiVersion.value),
    n || (n = Wn.set.value),
    r || (r = Wn.locale.value),
    se)
  )
    se.categories = se.categories.filter((l) => !l.name);
  else {
    (se =
      (typeof e.data == "function" ? await e.data() : e.data) ||
      (await T0(
        `https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`
      ))),
      (se.emoticons = {}),
      (se.natives = {}),
      se.categories.unshift({ id: "frequent", emojis: [] });
    for (const l in se.aliases) {
      const u = se.aliases[l],
        d = se.emojis[u];
      d && (d.aliases || (d.aliases = []), d.aliases.push(l));
    }
    se.originalCategories = se.categories;
  }
  if (
    ((vt =
      (typeof e.i18n == "function" ? await e.i18n() : e.i18n) ||
      (r == "en"
        ? h2(R2)
        : await T0(
            `https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${r}.json`
          ))),
    e.custom)
  )
    for (let l in e.custom) {
      l = parseInt(l);
      const u = e.custom[l],
        d = e.custom[l - 1];
      if (!(!u.emojis || !u.emojis.length)) {
        u.id || (u.id = `custom_${l + 1}`),
          u.name || (u.name = vt.categories.custom),
          d && !u.icon && (u.target = d.target || d),
          se.categories.push(u);
        for (const f of u.emojis) se.emojis[f.id] = f;
      }
    }
  e.categories &&
    (se.categories = se.originalCategories
      .filter((l) => e.categories.indexOf(l.id) != -1)
      .sort((l, u) => {
        const d = e.categories.indexOf(l.id),
          f = e.categories.indexOf(u.id);
        return d - f;
      }));
  let o = null,
    i = null;
  n == "native" &&
    ((o = N0.latestVersion()), (i = e.noCountryFlags || N0.noCountryFlags()));
  let s = se.categories.length,
    a = !1;
  for (; s--; ) {
    const l = se.categories[s];
    if (l.id == "frequent") {
      let { maxFrequentRows: f, perLine: p } = e;
      (f = f >= 0 ? f : Wn.maxFrequentRows.value),
        p || (p = Wn.perLine.value),
        (l.emojis = $2.get({ maxFrequentRows: f, perLine: p }));
    }
    if (!l.emojis || !l.emojis.length) {
      se.categories.splice(s, 1);
      continue;
    }
    const { categoryIcons: u } = e;
    if (u) {
      const f = u[l.id];
      f && !l.icon && (l.icon = f);
    }
    let d = l.emojis.length;
    for (; d--; ) {
      const f = l.emojis[d],
        p = f.id ? f : se.emojis[f],
        x = () => {
          l.emojis.splice(d, 1);
        };
      if (!p || (e.exceptEmojis && e.exceptEmojis.includes(p.id))) {
        x();
        continue;
      }
      if (o && p.version > o) {
        x();
        continue;
      }
      if (i && l.id == "flags" && !k$.includes(p.id)) {
        x();
        continue;
      }
      if (!p.search) {
        if (
          ((a = !0),
          (p.search =
            "," +
            [
              [p.id, !1],
              [p.name, !0],
              [p.keywords, !1],
              [p.emoticons, !1],
            ]
              .map(([m, b]) => {
                if (m)
                  return (Array.isArray(m) ? m : [m])
                    .map((_) =>
                      (b ? _.split(/[-|_|\s]+/) : [_]).map((v) =>
                        v.toLowerCase()
                      )
                    )
                    .flat();
              })
              .flat()
              .filter((m) => m && m.trim())
              .join(",")),
          p.emoticons)
        )
          for (const m of p.emoticons)
            se.emoticons[m] || (se.emoticons[m] = p.id);
        let h = 0;
        for (const m of p.skins) {
          if (!m) continue;
          h++;
          const { native: b } = m;
          b && ((se.natives[b] = p.id), (p.search += `,${b}`));
          const _ = h == 1 ? "" : `:skin-tone-${h}:`;
          m.shortcodes = `:${p.id}:${_}`;
        }
      }
    }
  }
  a && Yo.reset(), P2();
}
function T2(e, t, n) {
  e || (e = {});
  const r = {};
  for (let o in t) r[o] = O2(o, e, t, n);
  return r;
}
function O2(e, t, n, r) {
  const o = n[e];
  let i =
    (r && r.getAttribute(e)) || (t[e] != null && t[e] != null ? t[e] : null);
  return (
    o &&
      (i != null &&
        o.value &&
        typeof o.value != typeof i &&
        (typeof o.value == "boolean"
          ? (i = i != "false")
          : (i = o.value.constructor(i))),
      o.transform && i && (i = o.transform(i)),
      (i == null || (o.choices && o.choices.indexOf(i) == -1)) &&
        (i = o.value)),
    i
  );
}
const b$ = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
let Qf = null;
function w$(e) {
  return e.id
    ? e
    : se.emojis[e] || se.emojis[se.aliases[e]] || se.emojis[se.natives[e]];
}
function S$() {
  Qf = null;
}
async function C$(e, { maxResults: t, caller: n } = {}) {
  if (!e || !e.trim().length) return null;
  t || (t = 90), await uu(null, { caller: n || "SearchIndex.search" });
  const r = e
    .toLowerCase()
    .replace(/(\w)-/, "$1 ")
    .split(/[\s|,]+/)
    .filter((a, l, u) => a.trim() && u.indexOf(a) == l);
  if (!r.length) return;
  let o = Qf || (Qf = Object.values(se.emojis)),
    i,
    s;
  for (const a of r) {
    if (!o.length) break;
    (i = []), (s = {});
    for (const l of o) {
      if (!l.search) continue;
      const u = l.search.indexOf(`,${a}`);
      u != -1 &&
        (i.push(l),
        s[l.id] || (s[l.id] = 0),
        (s[l.id] += l.id == a ? 0 : u + 1));
    }
    o = i;
  }
  return (
    i.length < 2 ||
      (i.sort((a, l) => {
        const u = s[a.id],
          d = s[l.id];
        return u == d ? a.id.localeCompare(l.id) : u - d;
      }),
      i.length > t && (i = i.slice(0, t))),
    i
  );
}
var Yo = { search: C$, get: w$, reset: S$, SHORTCODES_REGEX: b$ };
const k$ = [
  "checkered_flag",
  "crossed_flags",
  "pirate_flag",
  "rainbow-flag",
  "transgender_flag",
  "triangular_flag_on_post",
  "waving_black_flag",
  "waving_white_flag",
];
function j$(e, t) {
  return (
    Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === t.length &&
    e.every((n, r) => n == t[r])
  );
}
async function E$(e = 1) {
  for (let t in [...Array(e).keys()]) await new Promise(requestAnimationFrame);
}
function $$(e, { skinIndex: t = 0 } = {}) {
  const n = e.skins[t] || ((t = 0), e.skins[t]),
    r = {
      id: e.id,
      name: e.name,
      native: n.native,
      unified: n.unified,
      keywords: e.keywords,
      shortcodes: n.shortcodes || e.shortcodes,
    };
  return (
    e.skins.length > 1 && (r.skin = t + 1),
    n.src && (r.src = n.src),
    e.aliases && e.aliases.length && (r.aliases = e.aliases),
    e.emoticons && e.emoticons.length && (r.emoticons = e.emoticons),
    r
  );
}
const R$ = {
    activity: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: I("path", {
          d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113",
        }),
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: I("path", {
          d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z",
        }),
      }),
    },
    custom: I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      children: I("path", {
        d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z",
      }),
    }),
    flags: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: I("path", {
          d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z",
        }),
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: I("path", {
          d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z",
        }),
      }),
    },
    foods: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: I("path", {
          d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9",
        }),
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: I("path", {
          d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z",
        }),
      }),
    },
    frequent: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
          I("path", { d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z" }),
          I("path", {
            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10",
          }),
        ],
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: I("path", {
          d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z",
        }),
      }),
    },
    nature: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
          I("path", {
            d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8",
          }),
          I("path", {
            d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235",
          }),
        ],
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        children: I("path", {
          d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z",
        }),
      }),
    },
    objects: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
          I("path", {
            d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z",
          }),
          I("path", {
            d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789",
          }),
        ],
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 384 512",
        children: I("path", {
          d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z",
        }),
      }),
    },
    people: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
          I("path", {
            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10",
          }),
          I("path", {
            d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0",
          }),
        ],
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: I("path", {
          d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z",
        }),
      }),
    },
    places: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: [
          I("path", {
            d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5",
          }),
          I("path", {
            d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z",
          }),
        ],
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: I("path", {
          d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z",
        }),
      }),
    },
    symbols: {
      outline: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        children: I("path", {
          d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76",
        }),
      }),
      solid: I("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: I("path", {
          d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z",
        }),
      }),
    },
  },
  P$ = {
    loupe: I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      children: I("path", {
        d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z",
      }),
    }),
    delete: I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      children: I("path", {
        d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",
      }),
    }),
  };
var ql = { categories: R$, search: P$ };
function Xf(e) {
  let { id: t, skin: n, emoji: r } = e;
  if (e.shortcodes) {
    const a = e.shortcodes.match(Yo.SHORTCODES_REGEX);
    a && ((t = a[1]), a[2] && (n = a[2]));
  }
  if ((r || (r = Yo.get(t || e.native)), !r)) return e.fallback;
  const o = r.skins[n - 1] || r.skins[0],
    i =
      o.src ||
      (e.set != "native" && !e.spritesheet
        ? typeof e.getImageURL == "function"
          ? e.getImageURL(e.set, o.unified)
          : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`
        : void 0),
    s =
      typeof e.getSpritesheetURL == "function"
        ? e.getSpritesheetURL(e.set)
        : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;
  return I("span", {
    class: "emoji-mart-emoji",
    "data-emoji-set": e.set,
    children: i
      ? I("img", {
          style: {
            maxWidth: e.size || "1em",
            maxHeight: e.size || "1em",
            display: "inline-block",
          },
          alt: o.native || o.shortcodes,
          src: i,
        })
      : e.set == "native"
      ? I("span", {
          style: {
            fontSize: e.size,
            fontFamily:
              '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"',
          },
          children: o.native,
        })
      : I("span", {
          style: {
            display: "block",
            width: e.size,
            height: e.size,
            backgroundImage: `url(${s})`,
            backgroundSize: `${100 * se.sheet.cols}% ${100 * se.sheet.rows}%`,
            backgroundPosition: `${(100 / (se.sheet.cols - 1)) * o.x}% ${
              (100 / (se.sheet.rows - 1)) * o.y
            }%`,
          },
        }),
  });
}
const N$ =
  typeof window < "u" && window.HTMLElement ? window.HTMLElement : Object;
class M2 extends N$ {
  static get observedAttributes() {
    return Object.keys(this.Props);
  }
  update(t = {}) {
    for (let n in t) this.attributeChangedCallback(n, null, t[n]);
  }
  attributeChangedCallback(t, n, r) {
    if (!this.component) return;
    const o = O2(t, { [t]: r }, this.constructor.Props, this);
    this.component.componentWillReceiveProps
      ? this.component.componentWillReceiveProps({ [t]: o })
      : ((this.component.props[t] = o), this.component.forceUpdate());
  }
  disconnectedCallback() {
    (this.disconnected = !0),
      this.component &&
        this.component.unregister &&
        this.component.unregister();
  }
  constructor(t = {}) {
    if ((super(), (this.props = t), t.parent || t.ref)) {
      let n = null;
      const r = t.parent || (n = t.ref && t.ref.current);
      n && (n.innerHTML = ""), r && r.appendChild(this);
    }
  }
}
class T$ extends M2 {
  setShadow() {
    this.attachShadow({ mode: "open" });
  }
  injectStyles(t) {
    if (!t) return;
    const n = document.createElement("style");
    (n.textContent = t),
      this.shadowRoot.insertBefore(n, this.shadowRoot.firstChild);
  }
  constructor(t, { styles: n } = {}) {
    super(t), this.setShadow(), this.injectStyles(n);
  }
}
var L2 = {
  fallback: "",
  id: "",
  native: "",
  shortcodes: "",
  size: { value: "", transform: (e) => (/\D/.test(e) ? e : `${e}px`) },
  set: Wn.set,
  skin: Wn.skin,
};
class A2 extends M2 {
  async connectedCallback() {
    const t = T2(this.props, L2, this);
    (t.element = this),
      (t.ref = (n) => {
        this.component = n;
      }),
      await uu(),
      !this.disconnected && j2(I(Xf, { ...t }), this);
  }
  constructor(t) {
    super(t);
  }
}
dn(A2, "Props", L2);
typeof customElements < "u" &&
  !customElements.get("em-emoji") &&
  customElements.define("em-emoji", A2);
var O0,
  Jf = [],
  M0 = X.__b,
  L0 = X.__r,
  A0 = X.diffed,
  I0 = X.__c,
  z0 = X.unmount;
function O$() {
  var e;
  for (
    Jf.sort(function (t, n) {
      return t.__v.__b - n.__v.__b;
    });
    (e = Jf.pop());

  )
    if (e.__P)
      try {
        e.__H.__h.forEach(Za), e.__H.__h.forEach(Zf), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), X.__e(t, e.__v);
      }
}
(X.__b = function (e) {
  M0 && M0(e);
}),
  (X.__r = function (e) {
    L0 && L0(e);
    var t = e.__c.__H;
    t && (t.__h.forEach(Za), t.__h.forEach(Zf), (t.__h = []));
  }),
  (X.diffed = function (e) {
    A0 && A0(e);
    var t = e.__c;
    t &&
      t.__H &&
      t.__H.__h.length &&
      ((Jf.push(t) !== 1 && O0 === X.requestAnimationFrame) ||
        (
          (O0 = X.requestAnimationFrame) ||
          function (n) {
            var r,
              o = function () {
                clearTimeout(i), F0 && cancelAnimationFrame(r), setTimeout(n);
              },
              i = setTimeout(o, 100);
            F0 && (r = requestAnimationFrame(o));
          }
        )(O$));
  }),
  (X.__c = function (e, t) {
    t.some(function (n) {
      try {
        n.__h.forEach(Za),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || Zf(r);
          }));
      } catch (r) {
        t.some(function (o) {
          o.__h && (o.__h = []);
        }),
          (t = []),
          X.__e(r, n.__v);
      }
    }),
      I0 && I0(e, t);
  }),
  (X.unmount = function (e) {
    z0 && z0(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          Za(r);
        } catch (o) {
          t = o;
        }
      }),
      t && X.__e(t, n.__v));
  });
var F0 = typeof requestAnimationFrame == "function";
function Za(e) {
  var t = e.__c;
  typeof t == "function" && ((e.__c = void 0), t());
}
function Zf(e) {
  e.__c = e.__();
}
function M$(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function D0(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Gl(e) {
  this.props = e;
}
((Gl.prototype = new Ln()).isPureReactComponent = !0),
  (Gl.prototype.shouldComponentUpdate = function (e, t) {
    return D0(this.props, e) || D0(this.state, t);
  });
var B0 = X.__b;
X.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    B0 && B0(e);
};
var L$ = X.__e;
X.__e = function (e, t, n) {
  if (e.then) {
    for (var r, o = t; (o = o.__); )
      if ((r = o.__c) && r.__c)
        return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
  }
  L$(e, t, n);
};
var U0 = X.unmount;
function gd() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function I2(e) {
  var t = e.__.__c;
  return t && t.__e && t.__e(e);
}
function Sa() {
  (this.u = null), (this.o = null);
}
(X.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), U0 && U0(e);
}),
  ((gd.prototype = new Ln()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var o = I2(r.__v),
      i = !1,
      s = function () {
        i || ((i = !0), (n.__R = null), o ? o(a) : a());
      };
    n.__R = s;
    var a = function () {
        if (!--r.__u) {
          if (r.state.__e) {
            var u = r.state.__e;
            r.__v.__k[0] = (function f(p, x, h) {
              return (
                p &&
                  ((p.__v = null),
                  (p.__k =
                    p.__k &&
                    p.__k.map(function (m) {
                      return f(m, x, h);
                    })),
                  p.__c &&
                    p.__c.__P === x &&
                    (p.__e && h.insertBefore(p.__e, p.__d),
                    (p.__c.__e = !0),
                    (p.__c.__P = h))),
                p
              );
            })(u, u.__c.__P, u.__c.__O);
          }
          var d;
          for (r.setState({ __e: (r.__b = null) }); (d = r.t.pop()); )
            d.forceUpdate();
        }
      },
      l = t.__h === !0;
    r.__u++ || l || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(s, s);
  }),
  (gd.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (gd.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = (function i(s, a, l) {
          return (
            s &&
              (s.__c &&
                s.__c.__H &&
                (s.__c.__H.__.forEach(function (u) {
                  typeof u.__c == "function" && u.__c();
                }),
                (s.__c.__H = null)),
              (s = M$({}, s)).__c != null &&
                (s.__c.__P === l && (s.__c.__P = a), (s.__c = null)),
              (s.__k =
                s.__k &&
                s.__k.map(function (u) {
                  return i(u, a, l);
                }))),
            s
          );
        })(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var o = t.__e && Gf(si, null, e.fallback);
    return o && (o.__h = null), [Gf(si, null, t.__e ? null : e.children), o];
  });
var H0 = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
((Sa.prototype = new Ln()).__e = function (e) {
  var t = this,
    n = I2(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (o) {
      var i = function () {
        t.props.revealOrder ? (r.push(o), H0(t, e, r)) : o();
      };
      n ? n(i) : i();
    }
  );
}),
  (Sa.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = Vl(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  (Sa.prototype.componentDidUpdate = Sa.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        H0(e, n, t);
      });
    });
var A$ =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
  I$ =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  z$ = typeof document < "u",
  F$ = function (e) {
    return (
      typeof Symbol < "u" && typeof Symbol() == "symbol"
        ? /fil|che|rad/i
        : /fil|che|ra/i
    ).test(e);
  };
(Ln.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(Ln.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var W0 = X.event;
function D$() {}
function B$() {
  return this.cancelBubble;
}
function U$() {
  return this.defaultPrevented;
}
X.event = function (e) {
  return (
    W0 && (e = W0(e)),
    (e.persist = D$),
    (e.isPropagationStopped = B$),
    (e.isDefaultPrevented = U$),
    (e.nativeEvent = e)
  );
};
var V0 = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  K0 = X.vnode;
X.vnode = function (e) {
  var t = e.type,
    n = e.props,
    r = n;
  if (typeof t == "string") {
    var o = t.indexOf("-") === -1;
    for (var i in ((r = {}), n)) {
      var s = n[i];
      (z$ && i === "children" && t === "noscript") ||
        (i === "value" && "defaultValue" in n && s == null) ||
        (i === "defaultValue" && "value" in n && n.value == null
          ? (i = "value")
          : i === "download" && s === !0
          ? (s = "")
          : /ondoubleclick/i.test(i)
          ? (i = "ondblclick")
          : /^onchange(textarea|input)/i.test(i + t) && !F$(n.type)
          ? (i = "oninput")
          : /^onfocus$/i.test(i)
          ? (i = "onfocusin")
          : /^onblur$/i.test(i)
          ? (i = "onfocusout")
          : /^on(Ani|Tra|Tou|BeforeInp)/.test(i)
          ? (i = i.toLowerCase())
          : o && I$.test(i)
          ? (i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase())
          : s === null && (s = void 0),
        (r[i] = s));
    }
    t == "select" &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = Vl(n.children).forEach(function (a) {
        a.props.selected = r.value.indexOf(a.props.value) != -1;
      })),
      t == "select" &&
        r.defaultValue != null &&
        (r.value = Vl(n.children).forEach(function (a) {
          a.props.selected = r.multiple
            ? r.defaultValue.indexOf(a.props.value) != -1
            : r.defaultValue == a.props.value;
        })),
      (e.props = r),
      n.class != n.className &&
        ((V0.enumerable = "className" in n),
        n.className != null && (r.class = n.className),
        Object.defineProperty(r, "className", V0));
  }
  (e.$$typeof = A$), K0 && K0(e);
};
var q0 = X.__r;
X.__r = function (e) {
  q0 && q0(e), e.__c;
};
const H$ = { light: "outline", dark: "solid" };
class W$ extends Gl {
  renderIcon(t) {
    const { icon: n } = t;
    if (n) {
      if (n.svg)
        return I("span", {
          class: "flex",
          dangerouslySetInnerHTML: { __html: n.svg },
        });
      if (n.src) return I("img", { src: n.src });
    }
    const r = ql.categories[t.id] || ql.categories.custom,
      o = this.props.icons == "auto" ? H$[this.props.theme] : this.props.icons;
    return r[o] || r;
  }
  render() {
    let t = null;
    return I("nav", {
      id: "nav",
      class: "padding",
      "data-position": this.props.position,
      dir: this.props.dir,
      children: I("div", {
        class: "flex relative",
        children: [
          this.categories.map((n, r) => {
            const o = n.name || vt.categories[n.id],
              i = !this.props.unfocused && n.id == this.state.categoryId;
            return (
              i && (t = r),
              I("button", {
                "aria-label": o,
                "aria-selected": i || void 0,
                title: o,
                type: "button",
                class: "flex flex-grow flex-center",
                onMouseDown: (s) => s.preventDefault(),
                onClick: () => {
                  this.props.onClick({ category: n, i: r });
                },
                children: this.renderIcon(n),
              })
            );
          }),
          I("div", {
            class: "bar",
            style: {
              width: `${100 / this.categories.length}%`,
              opacity: t == null ? 0 : 1,
              transform:
                this.props.dir === "rtl"
                  ? `scaleX(-1) translateX(${t * 100}%)`
                  : `translateX(${t * 100}%)`,
            },
          }),
        ],
      }),
    });
  }
  constructor() {
    super(),
      (this.categories = se.categories.filter((t) => !t.target)),
      (this.state = { categoryId: this.categories[0].id });
  }
}
class V$ extends Gl {
  shouldComponentUpdate(t) {
    for (let n in t) if (n != "children" && t[n] != this.props[n]) return !0;
    return !1;
  }
  render() {
    return this.props.children;
  }
}
const Ca = { rowsPerRender: 10 };
class K$ extends Ln {
  getInitialState(t = this.props) {
    return { skin: Pr.get("skin") || t.skin, theme: this.initTheme(t.theme) };
  }
  componentWillMount() {
    (this.dir = vt.rtl ? "rtl" : "ltr"),
      (this.refs = {
        menu: Fn(),
        navigation: Fn(),
        scroll: Fn(),
        search: Fn(),
        searchInput: Fn(),
        skinToneButton: Fn(),
        skinToneRadio: Fn(),
      }),
      this.initGrid(),
      this.props.stickySearch == !1 &&
        this.props.searchPosition == "sticky" &&
        (console.warn(
          "[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."
        ),
        (this.props.searchPosition = "static"));
  }
  componentDidMount() {
    if (
      (this.register(),
      (this.shadowRoot = this.base.parentNode),
      this.props.autoFocus)
    ) {
      const { searchInput: t } = this.refs;
      t.current && t.current.focus();
    }
  }
  componentWillReceiveProps(t) {
    this.nextState || (this.nextState = {});
    for (const n in t) this.nextState[n] = t[n];
    clearTimeout(this.nextStateTimer),
      (this.nextStateTimer = setTimeout(() => {
        let n = !1;
        for (const o in this.nextState)
          (this.props[o] = this.nextState[o]),
            (o === "custom" || o === "categories") && (n = !0);
        delete this.nextState;
        const r = this.getInitialState();
        if (n) return this.reset(r);
        this.setState(r);
      }));
  }
  componentWillUnmount() {
    this.unregister();
  }
  async reset(t = {}) {
    await uu(this.props),
      this.initGrid(),
      this.unobserve(),
      this.setState(t, () => {
        this.observeCategories(), this.observeRows();
      });
  }
  register() {
    document.addEventListener("click", this.handleClickOutside), this.observe();
  }
  unregister() {
    document.removeEventListener("click", this.handleClickOutside),
      this.unobserve();
  }
  observe() {
    this.observeCategories(), this.observeRows();
  }
  unobserve({ except: t = [] } = {}) {
    Array.isArray(t) || (t = [t]);
    for (const n of this.observers) t.includes(n) || n.disconnect();
    this.observers = [].concat(t);
  }
  initGrid() {
    const { categories: t } = se;
    this.refs.categories = new Map();
    const n = se.categories.map((o) => o.id).join(",");
    this.navKey &&
      this.navKey != n &&
      this.refs.scroll.current &&
      (this.refs.scroll.current.scrollTop = 0),
      (this.navKey = n),
      (this.grid = []),
      (this.grid.setsize = 0);
    const r = (o, i) => {
      const s = [];
      (s.__categoryId = i.id), (s.__index = o.length), this.grid.push(s);
      const a = this.grid.length - 1,
        l = a % Ca.rowsPerRender ? {} : Fn();
      return (l.index = a), (l.posinset = this.grid.setsize + 1), o.push(l), s;
    };
    for (let o of t) {
      const i = [];
      let s = r(i, o);
      for (let a of o.emojis)
        s.length == this.getPerLine() && (s = r(i, o)),
          (this.grid.setsize += 1),
          s.push(a);
      this.refs.categories.set(o.id, { root: Fn(), rows: i });
    }
  }
  initTheme(t) {
    if (t != "auto") return t;
    if (!this.darkMedia) {
      if (
        ((this.darkMedia = matchMedia("(prefers-color-scheme: dark)")),
        this.darkMedia.media.match(/^not/))
      )
        return "light";
      this.darkMedia.addListener(() => {
        this.props.theme == "auto" &&
          this.setState({ theme: this.darkMedia.matches ? "dark" : "light" });
      });
    }
    return this.darkMedia.matches ? "dark" : "light";
  }
  initDynamicPerLine(t = this.props) {
    if (!t.dynamicWidth) return;
    const { element: n, emojiButtonSize: r } = t,
      o = () => {
        const { width: s } = n.getBoundingClientRect();
        return Math.floor(s / r);
      },
      i = new ResizeObserver(() => {
        this.unobserve({ except: i }),
          this.setState({ perLine: o() }, () => {
            this.initGrid(),
              this.forceUpdate(() => {
                this.observeCategories(), this.observeRows();
              });
          });
      });
    return i.observe(n), this.observers.push(i), o();
  }
  getPerLine() {
    return this.state.perLine || this.props.perLine;
  }
  getEmojiByPos([t, n]) {
    const r = this.state.searchResults || this.grid,
      o = r[t] && r[t][n];
    if (o) return Yo.get(o);
  }
  observeCategories() {
    const t = this.refs.navigation.current;
    if (!t) return;
    const n = new Map(),
      r = (s) => {
        s != t.state.categoryId && t.setState({ categoryId: s });
      },
      o = { root: this.refs.scroll.current, threshold: [0, 1] },
      i = new IntersectionObserver((s) => {
        for (const l of s) {
          const u = l.target.dataset.id;
          n.set(u, l.intersectionRatio);
        }
        const a = [...n];
        for (const [l, u] of a)
          if (u) {
            r(l);
            break;
          }
      }, o);
    for (const { root: s } of this.refs.categories.values())
      i.observe(s.current);
    this.observers.push(i);
  }
  observeRows() {
    const t = { ...this.state.visibleRows },
      n = new IntersectionObserver(
        (r) => {
          for (const o of r) {
            const i = parseInt(o.target.dataset.index);
            o.isIntersecting ? (t[i] = !0) : delete t[i];
          }
          this.setState({ visibleRows: t });
        },
        {
          root: this.refs.scroll.current,
          rootMargin: `${
            this.props.emojiButtonSize * (Ca.rowsPerRender + 5)
          }px 0px ${this.props.emojiButtonSize * Ca.rowsPerRender}px`,
        }
      );
    for (const { rows: r } of this.refs.categories.values())
      for (const o of r) o.current && n.observe(o.current);
    this.observers.push(n);
  }
  preventDefault(t) {
    t.preventDefault();
  }
  unfocusSearch() {
    const t = this.refs.searchInput.current;
    t && t.blur();
  }
  navigate({ e: t, input: n, left: r, right: o, up: i, down: s }) {
    const a = this.state.searchResults || this.grid;
    if (!a.length) return;
    let [l, u] = this.state.pos;
    const d = (() => {
      if (l == 0 && u == 0 && !t.repeat && (r || i)) return null;
      if (l == -1)
        return !t.repeat && (o || s) && n.selectionStart == n.value.length
          ? [0, 0]
          : null;
      if (r || o) {
        let f = a[l];
        const p = r ? -1 : 1;
        if (((u += p), !f[u])) {
          if (((l += p), (f = a[l]), !f))
            return (
              (l = r ? 0 : a.length - 1), (u = r ? 0 : a[l].length - 1), [l, u]
            );
          u = r ? f.length - 1 : 0;
        }
        return [l, u];
      }
      if (i || s) {
        l += i ? -1 : 1;
        const f = a[l];
        return f
          ? (f[u] || (u = f.length - 1), [l, u])
          : ((l = i ? 0 : a.length - 1), (u = i ? 0 : a[l].length - 1), [l, u]);
      }
    })();
    if (d) t.preventDefault();
    else {
      this.state.pos[0] > -1 && this.setState({ pos: [-1, -1] });
      return;
    }
    this.setState({ pos: d, keyboard: !0 }, () => {
      this.scrollTo({ row: d[0] });
    });
  }
  scrollTo({ categoryId: t, row: n }) {
    const r = this.state.searchResults || this.grid;
    if (!r.length) return;
    const o = this.refs.scroll.current,
      i = o.getBoundingClientRect();
    let s = 0;
    if (
      (n >= 0 && (t = r[n].__categoryId),
      t &&
        (s =
          (
            this.refs[t] || this.refs.categories.get(t).root
          ).current.getBoundingClientRect().top -
          (i.top - o.scrollTop) +
          1),
      n >= 0)
    )
      if (!n) s = 0;
      else {
        const a = r[n].__index,
          l = s + a * this.props.emojiButtonSize,
          u =
            l + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
        if (l < o.scrollTop) s = l;
        else if (u > o.scrollTop + i.height) s = u - i.height;
        else return;
      }
    this.ignoreMouse(), (o.scrollTop = s);
  }
  ignoreMouse() {
    (this.mouseIsIgnored = !0),
      clearTimeout(this.ignoreMouseTimer),
      (this.ignoreMouseTimer = setTimeout(() => {
        delete this.mouseIsIgnored;
      }, 100));
  }
  handleEmojiOver(t) {
    this.mouseIsIgnored ||
      this.state.showSkins ||
      this.setState({ pos: t || [-1, -1], keyboard: !1 });
  }
  handleEmojiClick({ e: t, emoji: n, pos: r }) {
    if (
      this.props.onEmojiSelect &&
      (!n && r && (n = this.getEmojiByPos(r)), n)
    ) {
      const o = $$(n, { skinIndex: this.state.skin - 1 });
      this.props.maxFrequentRows && $2.add(o, this.props),
        this.props.onEmojiSelect(o, t);
    }
  }
  closeSkins() {
    this.state.showSkins &&
      (this.setState({ showSkins: null, tempSkin: null }),
      this.base.removeEventListener("click", this.handleBaseClick),
      this.base.removeEventListener("keydown", this.handleBaseKeydown));
  }
  handleSkinMouseOver(t) {
    this.setState({ tempSkin: t });
  }
  handleSkinClick(t) {
    this.ignoreMouse(),
      this.closeSkins(),
      this.setState({ skin: t, tempSkin: null }),
      Pr.set("skin", t);
  }
  renderNav() {
    return I(
      W$,
      {
        ref: this.refs.navigation,
        icons: this.props.icons,
        theme: this.state.theme,
        dir: this.dir,
        unfocused: !!this.state.searchResults,
        position: this.props.navPosition,
        onClick: this.handleCategoryClick,
      },
      this.navKey
    );
  }
  renderPreview() {
    const t = this.getEmojiByPos(this.state.pos),
      n = this.state.searchResults && !this.state.searchResults.length;
    return I("div", {
      id: "preview",
      class: "flex flex-middle",
      dir: this.dir,
      "data-position": this.props.previewPosition,
      children: [
        I("div", {
          class: "flex flex-middle flex-grow",
          children: [
            I("div", {
              class: "flex flex-auto flex-middle flex-center",
              style: {
                height: this.props.emojiButtonSize,
                fontSize: this.props.emojiButtonSize,
              },
              children: I(Xf, {
                emoji: t,
                id: n
                  ? this.props.noResultsEmoji || "cry"
                  : this.props.previewEmoji ||
                    (this.props.previewPosition == "top"
                      ? "point_down"
                      : "point_up"),
                set: this.props.set,
                size: this.props.emojiButtonSize,
                skin: this.state.tempSkin || this.state.skin,
                spritesheet: !0,
                getSpritesheetURL: this.props.getSpritesheetURL,
              }),
            }),
            I("div", {
              class: `margin-${this.dir[0]}`,
              children:
                t || n
                  ? I("div", {
                      class: `padding-${this.dir[2]} align-${this.dir[0]}`,
                      children: [
                        I("div", {
                          class: "preview-title ellipsis",
                          children: t ? t.name : vt.search_no_results_1,
                        }),
                        I("div", {
                          class: "preview-subtitle ellipsis color-c",
                          children: t
                            ? t.skins[0].shortcodes
                            : vt.search_no_results_2,
                        }),
                      ],
                    })
                  : I("div", {
                      class: "preview-placeholder color-c",
                      children: vt.pick,
                    }),
            }),
          ],
        }),
        !t &&
          this.props.skinTonePosition == "preview" &&
          this.renderSkinToneButton(),
      ],
    });
  }
  renderEmojiButton(t, { pos: n, posinset: r, grid: o }) {
    const i = this.props.emojiButtonSize,
      s = this.state.tempSkin || this.state.skin,
      l = (t.skins[s - 1] || t.skins[0]).native,
      u = j$(this.state.pos, n),
      d = n.concat(t.id).join("");
    return I(
      V$,
      {
        selected: u,
        skin: s,
        size: i,
        children: I("button", {
          "aria-label": l,
          "aria-selected": u || void 0,
          "aria-posinset": r,
          "aria-setsize": o.setsize,
          "data-keyboard": this.state.keyboard,
          title: this.props.previewPosition == "none" ? t.name : void 0,
          type: "button",
          class: "flex flex-center flex-middle",
          tabindex: "-1",
          onClick: (f) => this.handleEmojiClick({ e: f, emoji: t }),
          onMouseEnter: () => this.handleEmojiOver(n),
          onMouseLeave: () => this.handleEmojiOver(),
          style: {
            width: this.props.emojiButtonSize,
            height: this.props.emojiButtonSize,
            fontSize: this.props.emojiSize,
            lineHeight: 0,
          },
          children: [
            I("div", {
              "aria-hidden": "true",
              class: "background",
              style: {
                borderRadius: this.props.emojiButtonRadius,
                backgroundColor: this.props.emojiButtonColors
                  ? this.props.emojiButtonColors[
                      (r - 1) % this.props.emojiButtonColors.length
                    ]
                  : void 0,
              },
            }),
            I(Xf, {
              emoji: t,
              set: this.props.set,
              size: this.props.emojiSize,
              skin: s,
              spritesheet: !0,
              getSpritesheetURL: this.props.getSpritesheetURL,
            }),
          ],
        }),
      },
      d
    );
  }
  renderSearch() {
    const t =
      this.props.previewPosition == "none" ||
      this.props.skinTonePosition == "search";
    return I("div", {
      children: [
        I("div", { class: "spacer" }),
        I("div", {
          class: "flex flex-middle",
          children: [
            I("div", {
              class: "search relative flex-grow",
              children: [
                I("input", {
                  type: "search",
                  ref: this.refs.searchInput,
                  placeholder: vt.search,
                  onClick: this.handleSearchClick,
                  onInput: this.handleSearchInput,
                  onKeyDown: this.handleSearchKeyDown,
                  autoComplete: "off",
                }),
                I("span", {
                  class: "icon loupe flex",
                  children: ql.search.loupe,
                }),
                this.state.searchResults &&
                  I("button", {
                    title: "Clear",
                    "aria-label": "Clear",
                    type: "button",
                    class: "icon delete flex",
                    onClick: this.clearSearch,
                    onMouseDown: this.preventDefault,
                    children: ql.search.delete,
                  }),
              ],
            }),
            t && this.renderSkinToneButton(),
          ],
        }),
      ],
    });
  }
  renderSearchResults() {
    const { searchResults: t } = this.state;
    return t
      ? I("div", {
          class: "category",
          ref: this.refs.search,
          children: [
            I("div", {
              class: `sticky padding-small align-${this.dir[0]}`,
              children: vt.categories.search,
            }),
            I("div", {
              children: t.length
                ? t.map((n, r) =>
                    I("div", {
                      class: "flex",
                      children: n.map((o, i) =>
                        this.renderEmojiButton(o, {
                          pos: [r, i],
                          posinset: r * this.props.perLine + i + 1,
                          grid: t,
                        })
                      ),
                    })
                  )
                : I("div", {
                    class: `padding-small align-${this.dir[0]}`,
                    children:
                      this.props.onAddCustomEmoji &&
                      I("a", {
                        onClick: this.props.onAddCustomEmoji,
                        children: vt.add_custom,
                      }),
                  }),
            }),
          ],
        })
      : null;
  }
  renderCategories() {
    const { categories: t } = se,
      n = !!this.state.searchResults,
      r = this.getPerLine();
    return I("div", {
      style: {
        visibility: n ? "hidden" : void 0,
        display: n ? "none" : void 0,
        height: "100%",
      },
      children: t.map((o) => {
        const { root: i, rows: s } = this.refs.categories.get(o.id);
        return I("div", {
          "data-id": o.target ? o.target.id : o.id,
          class: "category",
          ref: i,
          children: [
            I("div", {
              class: `sticky padding-small align-${this.dir[0]}`,
              children: o.name || vt.categories[o.id],
            }),
            I("div", {
              class: "relative",
              style: { height: s.length * this.props.emojiButtonSize },
              children: s.map((a, l) => {
                const u = a.index - (a.index % Ca.rowsPerRender),
                  d = this.state.visibleRows[u],
                  f = "current" in a ? a : void 0;
                if (!d && !f) return null;
                const p = l * r,
                  x = p + r,
                  h = o.emojis.slice(p, x);
                return (
                  h.length < r && h.push(...new Array(r - h.length)),
                  I(
                    "div",
                    {
                      "data-index": a.index,
                      ref: f,
                      class: "flex row",
                      style: { top: l * this.props.emojiButtonSize },
                      children:
                        d &&
                        h.map((m, b) => {
                          if (!m)
                            return I("div", {
                              style: {
                                width: this.props.emojiButtonSize,
                                height: this.props.emojiButtonSize,
                              },
                            });
                          const _ = Yo.get(m);
                          return this.renderEmojiButton(_, {
                            pos: [a.index, b],
                            posinset: a.posinset + b,
                            grid: this.grid,
                          });
                        }),
                    },
                    a.index
                  )
                );
              }),
            }),
          ],
        });
      }),
    });
  }
  renderSkinToneButton() {
    return this.props.skinTonePosition == "none"
      ? null
      : I("div", {
          class: "flex flex-auto flex-center flex-middle",
          style: {
            position: "relative",
            width: this.props.emojiButtonSize,
            height: this.props.emojiButtonSize,
          },
          children: I("button", {
            type: "button",
            ref: this.refs.skinToneButton,
            class: "skin-tone-button flex flex-auto flex-center flex-middle",
            "aria-selected": this.state.showSkins ? "" : void 0,
            "aria-label": vt.skins.choose,
            title: vt.skins.choose,
            onClick: this.openSkins,
            style: {
              width: this.props.emojiSize,
              height: this.props.emojiSize,
            },
            children: I("span", {
              class: `skin-tone skin-tone-${this.state.skin}`,
            }),
          }),
        });
  }
  renderLiveRegion() {
    const t = this.getEmojiByPos(this.state.pos),
      n = t ? t.name : "";
    return I("div", { "aria-live": "polite", class: "sr-only", children: n });
  }
  renderSkins() {
    const n = this.refs.skinToneButton.current.getBoundingClientRect(),
      r = this.base.getBoundingClientRect(),
      o = {};
    return (
      this.dir == "ltr"
        ? (o.right = r.right - n.right - 3)
        : (o.left = n.left - r.left - 3),
      this.props.previewPosition == "bottom" &&
      this.props.skinTonePosition == "preview"
        ? (o.bottom = r.bottom - n.top + 6)
        : ((o.top = n.bottom - r.top + 3), (o.bottom = "auto")),
      I("div", {
        ref: this.refs.menu,
        role: "radiogroup",
        dir: this.dir,
        "aria-label": vt.skins.choose,
        class: "menu hidden",
        "data-position": o.top ? "top" : "bottom",
        style: o,
        children: [...Array(6).keys()].map((i) => {
          const s = i + 1,
            a = this.state.skin == s;
          return I("div", {
            children: [
              I("input", {
                type: "radio",
                name: "skin-tone",
                value: s,
                "aria-label": vt.skins[s],
                ref: a ? this.refs.skinToneRadio : null,
                defaultChecked: a,
                onChange: () => this.handleSkinMouseOver(s),
                onKeyDown: (l) => {
                  (l.code == "Enter" || l.code == "Space" || l.code == "Tab") &&
                    (l.preventDefault(), this.handleSkinClick(s));
                },
              }),
              I("button", {
                "aria-hidden": "true",
                tabindex: "-1",
                onClick: () => this.handleSkinClick(s),
                onMouseEnter: () => this.handleSkinMouseOver(s),
                onMouseLeave: () => this.handleSkinMouseOver(),
                class: "option flex flex-grow flex-middle",
                children: [
                  I("span", { class: `skin-tone skin-tone-${s}` }),
                  I("span", {
                    class: "margin-small-lr",
                    children: vt.skins[s],
                  }),
                ],
              }),
            ],
          });
        }),
      })
    );
  }
  render() {
    const t = this.props.perLine * this.props.emojiButtonSize;
    return I("section", {
      id: "root",
      class: "flex flex-column",
      dir: this.dir,
      style: {
        width: this.props.dynamicWidth
          ? "100%"
          : `calc(${t}px + (var(--padding) + var(--sidebar-width)))`,
      },
      "data-emoji-set": this.props.set,
      "data-theme": this.state.theme,
      "data-menu": this.state.showSkins ? "" : void 0,
      children: [
        this.props.previewPosition == "top" && this.renderPreview(),
        this.props.navPosition == "top" && this.renderNav(),
        this.props.searchPosition == "sticky" &&
          I("div", { class: "padding-lr", children: this.renderSearch() }),
        I("div", {
          ref: this.refs.scroll,
          class: "scroll flex-grow padding-lr",
          children: I("div", {
            style: {
              width: this.props.dynamicWidth ? "100%" : t,
              height: "100%",
            },
            children: [
              this.props.searchPosition == "static" && this.renderSearch(),
              this.renderSearchResults(),
              this.renderCategories(),
            ],
          }),
        }),
        this.props.navPosition == "bottom" && this.renderNav(),
        this.props.previewPosition == "bottom" && this.renderPreview(),
        this.state.showSkins && this.renderSkins(),
        this.renderLiveRegion(),
      ],
    });
  }
  constructor(t) {
    super(),
      dn(this, "handleClickOutside", (n) => {
        const { element: r } = this.props;
        n.target != r &&
          (this.state.showSkins && this.closeSkins(),
          this.props.onClickOutside && this.props.onClickOutside(n));
      }),
      dn(this, "handleBaseClick", (n) => {
        this.state.showSkins &&
          (n.target.closest(".menu") ||
            (n.preventDefault(),
            n.stopImmediatePropagation(),
            this.closeSkins()));
      }),
      dn(this, "handleBaseKeydown", (n) => {
        this.state.showSkins &&
          n.key == "Escape" &&
          (n.preventDefault(), n.stopImmediatePropagation(), this.closeSkins());
      }),
      dn(this, "handleSearchClick", () => {
        this.getEmojiByPos(this.state.pos) && this.setState({ pos: [-1, -1] });
      }),
      dn(this, "handleSearchInput", async () => {
        const n = this.refs.searchInput.current;
        if (!n) return;
        const { value: r } = n,
          o = await Yo.search(r),
          i = () => {
            this.refs.scroll.current &&
              (this.refs.scroll.current.scrollTop = 0);
          };
        if (!o) return this.setState({ searchResults: o, pos: [-1, -1] }, i);
        const s = n.selectionStart == n.value.length ? [0, 0] : [-1, -1],
          a = [];
        a.setsize = o.length;
        let l = null;
        for (let u of o)
          (!a.length || l.length == this.getPerLine()) &&
            ((l = []),
            (l.__categoryId = "search"),
            (l.__index = a.length),
            a.push(l)),
            l.push(u);
        this.ignoreMouse(), this.setState({ searchResults: a, pos: s }, i);
      }),
      dn(this, "handleSearchKeyDown", (n) => {
        const r = n.currentTarget;
        switch ((n.stopImmediatePropagation(), n.key)) {
          case "ArrowLeft":
            this.navigate({ e: n, input: r, left: !0 });
            break;
          case "ArrowRight":
            this.navigate({ e: n, input: r, right: !0 });
            break;
          case "ArrowUp":
            this.navigate({ e: n, input: r, up: !0 });
            break;
          case "ArrowDown":
            this.navigate({ e: n, input: r, down: !0 });
            break;
          case "Enter":
            n.preventDefault(),
              this.handleEmojiClick({ e: n, pos: this.state.pos });
            break;
          case "Escape":
            n.preventDefault(),
              this.state.searchResults
                ? this.clearSearch()
                : this.unfocusSearch();
            break;
        }
      }),
      dn(this, "clearSearch", () => {
        const n = this.refs.searchInput.current;
        n && ((n.value = ""), n.focus(), this.handleSearchInput());
      }),
      dn(this, "handleCategoryClick", ({ category: n, i: r }) => {
        this.scrollTo(r == 0 ? { row: -1 } : { categoryId: n.id });
      }),
      dn(this, "openSkins", (n) => {
        const { currentTarget: r } = n,
          o = r.getBoundingClientRect();
        this.setState({ showSkins: o }, async () => {
          await E$(2);
          const i = this.refs.menu.current;
          i &&
            (i.classList.remove("hidden"),
            this.refs.skinToneRadio.current.focus(),
            this.base.addEventListener("click", this.handleBaseClick, !0),
            this.base.addEventListener("keydown", this.handleBaseKeydown, !0));
        });
      }),
      (this.observers = []),
      (this.state = {
        pos: [-1, -1],
        perLine: this.initDynamicPerLine(t),
        visibleRows: { 0: !0 },
        ...this.getInitialState(t),
      });
  }
}
class Yh extends T$ {
  async connectedCallback() {
    const t = T2(this.props, Wn, this);
    (t.element = this),
      (t.ref = (n) => {
        this.component = n;
      }),
      await uu(t),
      !this.disconnected && j2(I(K$, { ...t }), this.shadowRoot);
  }
  constructor(t) {
    super(t, { styles: h2(z2) });
  }
}
dn(Yh, "Props", Wn);
typeof customElements < "u" &&
  !customElements.get("em-emoji-picker") &&
  customElements.define("em-emoji-picker", Yh);
var z2 = {};
z2 = `:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;
function q$(e) {
  const t = g.useRef(null),
    n = g.useRef(null);
  return (
    n.current && n.current.update(e),
    g.useEffect(
      () => (
        (n.current = new Yh({ ...e, ref: t })),
        () => {
          n.current = null;
        }
      ),
      []
    ),
    q.createElement("div", { ref: t })
  );
}
function G$(e) {
  var t = e.theme,
    n = e.onSelectEmoji,
    r = e.disableRecent,
    o = e.customEmojis,
    i = e.language,
    s = g.useMemo(
      function () {
        var l = [];
        return (
          r || l.push("frequent"),
          (l = [].concat(l2(l), [
            "people",
            "nature",
            "foods",
            "activity",
            "places",
            "objects",
            "symbols",
            "flags",
          ])),
          l
        );
      },
      [r]
    ),
    a = g.useMemo(
      function () {
        if (i)
          return require("@emoji-mart/data/i18n/".concat(i ?? "en", ".json"));
      },
      [i]
    );
  return q.createElement(q$, {
    data: void 0,
    theme: t,
    previewPosition: "none",
    onEmojiSelect: n,
    custom: o,
    categories: s,
    set: "apple",
    i18n: a,
  });
}
var Y$ = g.memo(G$);
function G0(e) {
  var t = e.showPicker,
    n = e.theme,
    r = e.handleSelectEmoji,
    o = e.disableRecent,
    i = e.customEmojis,
    s = e.position,
    a = e.language;
  return q.createElement(
    "div",
    { className: "react-emoji-picker--container" },
    t &&
      q.createElement(
        "div",
        {
          className: "react-emoji-picker--wrapper",
          onClick: function (u) {
            return u.stopPropagation();
          },
          style: s === "below" ? { top: "40px" } : {},
        },
        q.createElement(
          "div",
          { className: "react-emoji-picker" },
          q.createElement(Y$, {
            theme: n,
            onSelectEmoji: r,
            disableRecent: o,
            customEmojis: i,
            language: a,
          })
        )
      )
  );
}
var Q$ = 435,
  X$ = function (t) {
    var n = t.theme,
      r = t.keepOpened,
      o = t.disableRecent,
      i = t.customEmojis,
      s = t.addSanitizeFn,
      a = t.addPolluteFn,
      l = t.appendContent,
      u = t.buttonElement,
      d = t.buttonRef,
      f = t.language,
      p = g.useState(!1),
      x = Yn(p, 2),
      h = x[0],
      m = x[1],
      b = g.useState(),
      _ = Yn(b, 2),
      v = _[0],
      y = _[1],
      w = g.useState(),
      S = Yn(w, 2),
      C = S[0],
      k = S[1];
    g.useEffect(
      function () {
        s(Xa);
      },
      [s]
    ),
      g.useEffect(
        function () {
          a(u2);
        },
        [a]
      ),
      g.useEffect(function () {
        function A(z) {
          var U = z.target;
          U.classList.contains("react-input-emoji--button") ||
            U.classList.contains("react-input-emoji--button--icon") ||
            m(!1);
        }
        return (
          document.addEventListener("click", A),
          function () {
            document.removeEventListener("click", A);
          }
        );
      }, []);
    function $(A) {
      A.stopPropagation(),
        A.preventDefault(),
        k(M(A)),
        m(function (z) {
          return !z;
        });
    }
    function M(A) {
      var z = A.currentTarget,
        U = z.getBoundingClientRect(),
        B = Q$;
      return U.top >= B ? "above" : "below";
    }
    function O(A) {
      l(qE(A)),
        r ||
          m(function (z) {
            return !z;
          });
    }
    return (
      g.useEffect(
        function () {
          var A;
          d != null && (A = d.current) !== null && A !== void 0 && A.style
            ? ((d.current.style.position = "relative"), y(d.current))
            : u != null && u.style && ((u.style.position = "relative"), y(u));
        },
        [d, u]
      ),
      v
        ? Yi.createPortal(
            q.createElement(
              q.Fragment,
              null,
              q.createElement(G0, {
                showPicker: h,
                theme: n,
                handleSelectEmoji: O,
                disableRecent: o,
                customEmojis: i,
                position: C,
                language: f,
              }),
              q.createElement(k0, {
                showPicker: h,
                toggleShowPicker: $,
                buttonElement: v,
                buttonRef: d,
              })
            ),
            v
          )
        : q.createElement(
            q.Fragment,
            null,
            q.createElement(G0, {
              showPicker: h,
              theme: n,
              handleSelectEmoji: O,
              disableRecent: o,
              customEmojis: i,
              position: C,
              language: f,
            }),
            q.createElement(k0, { showPicker: h, toggleShowPicker: $ })
          )
    );
  };
function J$() {
  var e = F2();
  if (!e) return null;
  var t = e.text.substring(e.begin, e.end);
  return t || null;
}
function Z$() {
  var e = F2();
  e && e.element.deleteData(e.begin, e.end - e.begin);
}
function F2() {
  var e = ep();
  if (!e) return null;
  var t = e.element,
    n = e.caretOffset,
    r = t.textContent,
    o = r.lastIndexOf("@");
  return o === -1 || o >= n || (o !== 0 && r[o - 1] !== " ")
    ? null
    : { begin: o, end: n, text: r, element: t };
}
function ep() {
  var e = e8();
  if (e === null) return null;
  var t = 0;
  if (typeof window.getSelection < "u") {
    var n = window.getSelection().getRangeAt(0),
      r = n.cloneRange();
    r.selectNodeContents(e),
      r.setEnd(n.endContainer, n.endOffset),
      (t = r.toString().length);
  } else if (
    typeof document.selection < "u" &&
    document.selection.type != "Control"
  ) {
    var o = document.selection.createRange(),
      i = document.body.createTextRange();
    i.moveToElementText(e), i.setEndPoint("EndToEnd", o), (t = i.text.length);
  }
  return { element: e, caretOffset: t };
}
function e8() {
  var e = document.getSelection().anchorNode;
  return (e == null ? void 0 : e.nodeType) == 3 ? e : null;
}
function t8(e) {
  var t,
    n = g.useState(!1),
    r = Yn(n, 2),
    o = r[0],
    i = r[1],
    s = g.useState([]),
    a = Yn(s, 2),
    l = a[0],
    u = a[1],
    d = g.useState(null),
    f = Yn(d, 2),
    p = f[0],
    x = f[1],
    h = g.useCallback(function () {
      Z$(), u([]);
    }, []),
    m = g.useCallback(
      w0(
        Xi().mark(function v() {
          var y, w;
          return Xi().wrap(function (C) {
            for (;;)
              switch ((C.prev = C.next)) {
                case 0:
                  if (((y = J$()), x(y), y !== null)) {
                    C.next = 6;
                    break;
                  }
                  u([]), (C.next = 12);
                  break;
                case 6:
                  return i(!0), (C.next = 9), e(y);
                case 9:
                  (w = C.sent), i(!1), u(w);
                case 12:
                case "end":
                  return C.stop();
              }
          }, v);
        })
      ),
      [e]
    ),
    b = g.useCallback(
      function (v) {
        return (t =
          t ||
          w0(
            Xi().mark(function y(w) {
              var S, C;
              return Xi().wrap(function ($) {
                for (;;)
                  switch (($.prev = $.next)) {
                    case 0:
                      if (typeof e == "function") {
                        $.next = 2;
                        break;
                      }
                      return $.abrupt("return");
                    case 2:
                      w.key === "Backspace" &&
                      (S = ep()) !== null &&
                      S !== void 0 &&
                      S.element.parentElement.hasAttribute("data-mention-id")
                        ? ((C = ep()), C.element.parentElement.remove())
                        : ["ArrowUp", "ArrowDown", "Esc", "Escape"].includes(
                            w.key
                          ) || m();
                    case 3:
                    case "end":
                      return $.stop();
                  }
              }, y);
            })
          )).apply(this, arguments);
      },
      [m, e]
    ),
    _ = g.useCallback(
      function () {
        m();
      },
      [m]
    );
  return {
    mentionSearchText: p,
    mentionUsers: l,
    onKeyUp: b,
    onFocus: _,
    onSelectUser: h,
    loading: o,
  };
}
var n8 = function (t, n) {
    var r = t.users,
      o = t.mentionSearchText,
      i = t.onSelect,
      s = t.addEventListener,
      a = g.useState(0),
      l = Yn(a, 2),
      u = l[0],
      d = l[1];
    g.useImperativeHandle(n, function () {
      return {
        prevUser: function () {
          d(function (m) {
            return m === 0 ? 0 : m - 1;
          });
        },
        nextUser: function () {
          d(function (m) {
            return m === r.length - 1 ? r.length - 1 : m + 1;
          });
        },
      };
    }),
      g.useEffect(
        function () {
          d(0);
        },
        [r]
      );
    function f(h, m) {
      return '<span class="react-input-emoji--mention--item--name__selected" data-testid="metion-selected-word">'
        .concat(h, "</span>")
        .concat(m);
    }
    var p = g.useMemo(
      function () {
        var h = o ? o.substring(1).toLocaleLowerCase() : "";
        return r.map(function (m) {
          var b = m.name;
          if (o && o.length > 1)
            if (m.name.toLowerCase().startsWith(h))
              b = f(m.name.substring(0, h.length), m.name.substring(h.length));
            else {
              var _ = m.name.split(" ");
              b = _.map(function (v) {
                return v.toLocaleLowerCase().startsWith(h)
                  ? f(v.substring(0, h.length), v.substring(h.length))
                  : v;
              }).join(" ");
            }
          return x0(x0({}, m), {}, { nameHtml: b });
        });
      },
      [o, r]
    );
    function x(h) {
      return function (m) {
        m.stopPropagation(), m.preventDefault(), i(h);
      };
    }
    return (
      g.useEffect(
        function () {
          var h = s("enter", function (m) {
            m.stopPropagation(), m.preventDefault(), i(p[u]);
          });
          return function () {
            h();
          };
        },
        [s, i, u, p]
      ),
      q.createElement(
        "ul",
        {
          className: "react-input-emoji--mention--list",
          "data-testid": "mention-user-list",
        },
        p.map(function (h, m) {
          return q.createElement(
            "li",
            { key: h.id },
            q.createElement(
              "button",
              {
                type: "button",
                onClick: x(h),
                className: "react-input-emoji--mention--item".concat(
                  u === m ? " react-input-emoji--mention--item__selected" : ""
                ),
                onMouseOver: function () {
                  return d(m);
                },
              },
              q.createElement("img", {
                className: "react-input-emoji--mention--item--img",
                src: h.image,
              }),
              q.createElement("div", {
                className: "react-input-emoji--mention--item--name",
                dangerouslySetInnerHTML: { __html: h.nameHtml },
              })
            )
          );
        })
      )
    );
  },
  r8 = g.forwardRef(n8),
  o8 = function (t) {
    var n = t.searchMention,
      r = t.addEventListener,
      o = t.appendContent,
      i = t.addSanitizeFn,
      s = g.useRef(null),
      a = g.useState(!1),
      l = Yn(a, 2),
      u = l[0],
      d = l[1],
      f = t8(n),
      p = f.mentionSearchText,
      x = f.mentionUsers,
      h = f.loading,
      m = f.onKeyUp,
      b = f.onFocus,
      _ = f.onSelectUser;
    g.useEffect(
      function () {
        i(function (y) {
          var w = document.createElement("div");
          w.innerHTML = y;
          var S = Array.prototype.slice.call(
            w.querySelectorAll(".react-input-emoji--mention--text")
          );
          return (
            S.forEach(function (C) {
              w.innerHTML = w.innerHTML.replace(
                C.outerHTML,
                "@["
                  .concat(C.dataset.mentionName, "](userId:")
                  .concat(C.dataset.mentionId, ")")
              );
            }),
            w.innerHTML
          );
        });
      },
      [i]
    ),
      g.useEffect(
        function () {
          d(x.length > 0);
        },
        [x]
      ),
      g.useEffect(function () {
        function y() {
          d(!1);
        }
        return (
          document.addEventListener("click", y),
          function () {
            document.removeEventListener("click", y);
          }
        );
      }, []),
      g.useEffect(
        function () {
          var y = r("keyUp", m);
          return function () {
            y();
          };
        },
        [r, m]
      ),
      g.useEffect(
        function () {
          function y(S) {
            switch (S.key) {
              case "Esc":
              case "Escape":
                d(!1);
                break;
            }
          }
          var w = r("keyDown", y);
          return function () {
            w();
          };
        },
        [r]
      ),
      g.useEffect(
        function () {
          var y = r("focus", b);
          return function () {
            y();
          };
        },
        [r, b]
      ),
      g.useEffect(
        function () {
          if (u) {
            var y = r("arrowUp", function (S) {
                S.stopPropagation(), S.preventDefault(), s.current.prevUser();
              }),
              w = r("arrowDown", function (S) {
                S.stopPropagation(), S.preventDefault(), s.current.nextUser();
              });
            return function () {
              y(), w();
            };
          }
        },
        [r, u]
      );
    function v(y) {
      _(),
        o(
          '<span class="react-input-emoji--mention--text" data-mention-id="'
            .concat(y.id, '" data-mention-name="')
            .concat(y.name, '">@')
            .concat(y.name, "</span> ")
        );
    }
    return q.createElement(
      q.Fragment,
      null,
      h
        ? q.createElement(
            "div",
            { className: "react-input-emoji--mention--container" },
            q.createElement(
              "div",
              { className: "react-input-emoji--mention--loading" },
              q.createElement(
                "div",
                { className: "react-input-emoji--mention--loading--spinner" },
                "Loading..."
              )
            )
          )
        : u &&
            q.createElement(
              "div",
              {
                className: "react-input-emoji--mention--container",
                onClick: function (w) {
                  return w.stopPropagation();
                },
              },
              q.createElement(r8, {
                ref: s,
                mentionSearchText: p,
                users: x,
                onSelect: v,
                addEventListener: r,
              })
            )
    );
  };
function Ur() {
  var e = [];
  return {
    subscribe: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    publish: function (n) {
      e.forEach(function (r) {
        return r(n);
      });
    },
    get currentListerners() {
      return e;
    },
  };
}
function i8() {
  var e = g.useMemo(function () {
      return {
        keyDown: Ur(),
        keyUp: Ur(),
        arrowUp: Ur(),
        arrowDown: Ur(),
        enter: Ur(),
        focus: Ur(),
        blur: Ur(),
      };
    }, []),
    t = g.useCallback(
      function (n, r) {
        return e[n].subscribe(r);
      },
      [e]
    );
  return { addEventListener: t, listeners: e };
}
function s8() {
  var e = g.useRef([]),
    t = g.useCallback(function (r) {
      e.current.push(r);
    }, []),
    n = g.useCallback(function (r) {
      var o = e.current.reduce(function (i, s) {
        return s(i);
      }, r);
      return o;
    }, []);
  return { addPolluteFn: t, pollute: n };
}
function a8(e, t) {
  var n = e.onChange,
    r = e.onEnter,
    o = e.shouldReturn,
    i = e.onResize,
    s = e.onClick,
    a = e.onFocus,
    l = e.onBlur,
    u = e.onKeyDown,
    d = e.theme,
    f = e.cleanOnEnter,
    p = e.placeholder,
    x = e.maxLength,
    h = e.keepOpened,
    m = e.inputClass,
    b = e.disableRecent,
    _ = e.tabIndex,
    v = e.value,
    y = e.customEmojis,
    w = e.language,
    S = e.searchMention,
    C = e.buttonElement,
    k = e.buttonRef,
    $ = e.borderRadius,
    M = e.borderColor,
    O = e.fontSize,
    A = e.fontFamily,
    z = g.useRef(null),
    U = i8(),
    B = U.addEventListener,
    D = U.listeners,
    R = p2(e.shouldReturn),
    P = R.addSanitizeFn,
    E = R.sanitize,
    N = R.sanitizedTextRef,
    T = s8(),
    W = T.addPolluteFn,
    V = T.pollute,
    le = g.useCallback(
      function () {
        var ee =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        z.current !== null && ((z.current.html = u2(ee)), (N.current = ee));
      },
      [N]
    ),
    J = g.useCallback(
      function (ee) {
        le(ee);
      },
      [le]
    ),
    re = r$(z, i, n);
  n$({ ref: t, setValue: J, textInputRef: z, emitChange: re }),
    g.useEffect(
      function () {
        N.current !== v && J(v);
      },
      [N, J, v]
    ),
    g.useEffect(
      function () {
        function ee(ie) {
          if (
            (typeof x < "u" &&
              ie.key !== "Backspace" &&
              z.current !== null &&
              C0(z.current) >= x &&
              ie.preventDefault(),
            ie.key === "Enter" && z.current)
          ) {
            ie.preventDefault();
            var ye = E(z.current.html);
            return (
              re(N.current),
              typeof r == "function" &&
                D.enter.currentListerners.length === 0 &&
                r(ye),
              f && D.enter.currentListerners.length === 0 && le(""),
              typeof u == "function" && u(ie.nativeEvent),
              !1
            );
          }
          return typeof u == "function" && u(ie.nativeEvent), !0;
        }
        var Se = B("keyDown", ee);
        return function () {
          Se();
        };
      },
      [B, f, re, D.enter.currentListerners.length, x, r, u, E, N, le]
    ),
    g.useEffect(
      function () {
        function ee() {
          typeof s == "function" && s(), typeof a == "function" && a();
        }
        var Se = B("focus", ee);
        return function () {
          Se();
        };
      },
      [B, s, a]
    ),
    g.useEffect(
      function () {
        function ee() {
          typeof l == "function" && l();
        }
        var Se = B("blur", ee);
        return function () {
          Se();
        };
      },
      [B, l]
    );
  function oe(ee) {
    E(ee), v !== N.current && re(N.current);
  }
  function pe(ee) {
    (typeof x < "u" && z.current !== null && C0(z.current) >= x) ||
      (z.current !== null && z.current.appendContent(ee));
  }
  function st(ee) {
    ee.preventDefault();
    var Se;
    ee.clipboardData &&
      ((Se = ee.clipboardData.getData("text/plain")),
      (Se = V(Se)),
      document.execCommand("insertHTML", !1, Se));
  }
  return q.createElement(
    "div",
    { className: "react-emoji" },
    q.createElement(o8, {
      searchMention: S,
      addEventListener: B,
      appendContent: pe,
      addSanitizeFn: P,
    }),
    q.createElement(s$, {
      ref: z,
      onCopy: GE,
      onPaste: st,
      shouldReturn: o,
      onBlur: D.blur.publish,
      onFocus: D.focus.publish,
      onArrowUp: D.arrowUp.publish,
      onArrowDown: D.arrowDown.publish,
      onKeyUp: D.keyUp.publish,
      onKeyDown: D.keyDown.publish,
      onEnter: D.enter.publish,
      placeholder: p,
      style: { borderRadius: $, borderColor: M, fontSize: O, fontFamily: A },
      tabIndex: _,
      className: m,
      onChange: oe,
    }),
    q.createElement(X$, {
      theme: d,
      keepOpened: h,
      disableRecent: b,
      customEmojis: y,
      addSanitizeFn: P,
      addPolluteFn: W,
      appendContent: pe,
      buttonElement: C,
      buttonRef: k,
      language: w,
    })
  );
}
var D2 = g.forwardRef(a8);
D2.defaultProps = {
  theme: "auto",
  height: 30,
  placeholder: "Type a message",
  borderRadius: 21,
  borderColor: "#EAEAEA",
  fontSize: 15,
  fontFamily: "sans-serif",
  tabIndex: 0,
  shouldReturn: !1,
  customEmojis: [],
  language: void 0,
};
function B2({ onEnter: e, placeholder: t }) {
  const [n, r] = g.useState("");
  function o(i) {
    i.trim().length > 0 && e(i);
  }
  return c.jsx(D2, {
    value: n,
    onChange: r,
    cleanOnEnter: !0,
    onEnter: o,
    shouldReturn: !0,
    placeholder: t,
  });
}
const l8 = "_chat__layout_5smzu_1",
  c8 = "_chat__container_5smzu_7",
  u8 = "_avatar_5smzu_21",
  d8 = "_chat__top__container_5smzu_36",
  f8 = "_avatar__info_5smzu_41",
  p8 = "_messages__container_5smzu_52",
  h8 = "_message__received_5smzu_71",
  m8 = "_message__staptime_5smzu_83",
  g8 = "_user__chat_5smzu_88",
  v8 = "_message__sender_5smzu_98",
  y8 = "_height__control_5smzu_112",
  _8 = "_date__separator_5smzu_116",
  x8 = "_date__separator__container_5smzu_122",
  Mt = {
    chat__layout: l8,
    chat__container: c8,
    avatar: u8,
    chat__top__container: d8,
    avatar__info: f8,
    messages__container: p8,
    message__received: h8,
    message__staptime: m8,
    user__chat: g8,
    message__sender: v8,
    height__control: y8,
    date__separator: _8,
    date__separator__container: x8,
  };
function b8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Qh(e, t) {
  var n = function (i) {
      return t && g.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      g.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function w8(e, t) {
  (e = e || {}), (t = t || {});
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function Xr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function S8(e, t) {
  return Qh(e.children, function (n) {
    return g.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Xr(n, "appear", e),
      enter: Xr(n, "enter", e),
      exit: Xr(n, "exit", e),
    });
  });
}
function C8(e, t, n) {
  var r = Qh(e.children),
    o = w8(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (g.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          d = g.isValidElement(u) && !u.props.in;
        l && (!a || d)
          ? (o[i] = g.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Xr(s, "exit", e),
              enter: Xr(s, "enter", e),
            }))
          : !l && a && !d
          ? (o[i] = g.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            g.isValidElement(u) &&
            (o[i] = g.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: Xr(s, "exit", e),
              enter: Xr(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var k8 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  j8 = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Xh = (function (e) {
    x_(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(b8(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? S8(o, a) : C8(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Qh(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = j({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = Y(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = k8(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? q.createElement(Al.Provider, { value: l }, u)
            : q.createElement(
                Al.Provider,
                { value: l },
                q.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(q.Component);
Xh.propTypes = {};
Xh.defaultProps = j8;
const E8 = Xh;
function $8({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Zc(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return c.jsx(jx, { styles: o });
}
const R8 = ["className", "component"];
function P8(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = Ah("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(yi);
  return g.forwardRef(function (l, u) {
    const d = Zc(n),
      f = eu(l),
      { className: p, component: x = "div" } = f,
      h = Y(f, R8);
    return c.jsx(
      i,
      j(
        {
          as: x,
          ref: u,
          className: Z(p, o ? o(r) : r),
          theme: (t && d[t]) || d,
        },
        h
      )
    );
  });
}
const N8 = ["ownerState"],
  T8 = ["variants"],
  O8 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function M8(e) {
  return Object.keys(e).length === 0;
}
function L8(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function vd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const A8 = _i(),
  I8 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ka({ defaultTheme: e, theme: t, themeId: n }) {
  return M8(t) ? e : t[n] || t;
}
function z8(e) {
  return e ? (t, n) => n[e] : null;
}
function el(e, t) {
  let { ownerState: n } = t,
    r = Y(t, N8);
  const o = typeof e == "function" ? e(j({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => el(i, j({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = Y(o, T8);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props(j({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((d) => {
              (n == null ? void 0 : n[d]) !== l.props[d] &&
                r[d] !== l.props[d] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style(j({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function F8(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = A8,
      rootShouldForwardProp: r = vd,
      slotShouldForwardProp: o = vd,
    } = e,
    i = (s) =>
      yi(j({}, s, { theme: ka(j({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      Ex(s, (S) => S.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: d,
          skipSx: f,
          overridesResolver: p = z8(I8(u)),
        } = a,
        x = Y(a, O8),
        h = d !== void 0 ? d : (u && u !== "Root" && u !== "root") || !1,
        m = f || !1;
      let b,
        _ = vd;
      u === "Root" || u === "root"
        ? (_ = r)
        : u
        ? (_ = o)
        : L8(s) && (_ = void 0);
      const v = Ah(s, j({ shouldForwardProp: _, label: b }, x)),
        y = (S) =>
          (typeof S == "function" && S.__emotion_real !== S) || Hn(S)
            ? (C) =>
                el(
                  S,
                  j({}, C, {
                    theme: ka({ theme: C.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : S,
        w = (S, ...C) => {
          let k = y(S);
          const $ = C ? C.map(y) : [];
          l &&
            p &&
            $.push((A) => {
              const z = ka(j({}, A, { defaultTheme: n, themeId: t }));
              if (
                !z.components ||
                !z.components[l] ||
                !z.components[l].styleOverrides
              )
                return null;
              const U = z.components[l].styleOverrides,
                B = {};
              return (
                Object.entries(U).forEach(([D, R]) => {
                  B[D] = el(R, j({}, A, { theme: z }));
                }),
                p(A, B)
              );
            }),
            l &&
              !h &&
              $.push((A) => {
                var z;
                const U = ka(j({}, A, { defaultTheme: n, themeId: t })),
                  B =
                    U == null ||
                    (z = U.components) == null ||
                    (z = z[l]) == null
                      ? void 0
                      : z.variants;
                return el({ variants: B }, j({}, A, { theme: U }));
              }),
            m || $.push(i);
          const M = $.length - C.length;
          if (Array.isArray(S) && M > 0) {
            const A = new Array(M).fill("");
            (k = [...S, ...A]), (k.raw = [...S.raw, ...A]);
          }
          const O = v(k, ...$);
          return s.muiName && (O.muiName = s.muiName), O;
        };
      return v.withConfig && (w.withConfig = v.withConfig), w;
    }
  );
}
const du = F8();
function Jh(e, t = 0, n = 1) {
  return J_(e, t, n);
}
function D8(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function fu(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return fu(D8(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Or(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(Or(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Zh(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function Y0(e, t) {
  return (
    (e = fu(e)),
    (t = Jh(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Zh(e)
  );
}
function Q0(e, t) {
  if (((e = fu(e)), (t = Jh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Zh(e);
}
function X0(e, t) {
  if (((e = fu(e)), (t = Jh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Zh(e);
}
const B8 = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  U8 = _i(),
  H8 = du("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${G(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  W8 = (e) => Ih({ props: e, name: "MuiContainer", defaultTheme: U8 }),
  V8 = (e, t) => {
    const n = (l) => we(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${G(String(s))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return Ce(a, n, r);
  };
function K8(e = {}) {
  const {
      createStyledComponent: t = H8,
      useThemeProps: n = W8,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) =>
        j(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !a.disableGutters && {
            paddingLeft: s.spacing(2),
            paddingRight: s.spacing(2),
            [s.breakpoints.up("sm")]: {
              paddingLeft: s.spacing(3),
              paddingRight: s.spacing(3),
            },
          }
        ),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const d = u,
            f = s.breakpoints.values[d];
          return (
            f !== 0 &&
              (l[s.breakpoints.up(d)] = {
                maxWidth: `${f}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) =>
        j(
          {},
          a.maxWidth === "xs" && {
            [s.breakpoints.up("xs")]: {
              maxWidth: Math.max(s.breakpoints.values.xs, 444),
            },
          },
          a.maxWidth &&
            a.maxWidth !== "xs" && {
              [s.breakpoints.up(a.maxWidth)]: {
                maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                  s.breakpoints.unit
                }`,
              },
            }
        )
    );
  return g.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: d,
        component: f = "div",
        disableGutters: p = !1,
        fixed: x = !1,
        maxWidth: h = "lg",
      } = u,
      m = Y(u, B8),
      b = j({}, u, { component: f, disableGutters: p, fixed: x, maxWidth: h }),
      _ = V8(b, r);
    return c.jsx(
      o,
      j({ as: f, ownerState: b, className: Z(_.root, d), ref: l }, m)
    );
  });
}
const q8 = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  G8 = _i(),
  Y8 = du("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function Q8(e) {
  return Ih({ props: e, name: "MuiStack", defaultTheme: G8 });
}
function X8(e, t) {
  const n = g.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push(g.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    []
  );
}
const J8 = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[e]),
  Z8 = ({ ownerState: e, theme: t }) => {
    let n = j(
      { display: "flex", flexDirection: "column" },
      _n(
        { theme: t },
        od({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r })
      )
    );
    if (e.spacing) {
      const r = Eh(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, u) => (
            ((typeof e.spacing == "object" && e.spacing[u] != null) ||
              (typeof e.direction == "object" && e.direction[u] != null)) &&
              (l[u] = !0),
            l
          ),
          {}
        ),
        i = od({ values: e.direction, base: o }),
        s = od({ values: e.spacing, base: o });
      typeof i == "object" &&
        Object.keys(i).forEach((l, u, d) => {
          if (!i[l]) {
            const p = u > 0 ? i[d[u - 1]] : "column";
            i[l] = p;
          }
        }),
        (n = tn(
          n,
          _n({ theme: t }, s, (l, u) =>
            e.useFlexGap
              ? { gap: lo(r, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${J8(u ? i[u] : e.direction)}`]: lo(r, l),
                  },
                }
          )
        ));
    }
    return (n = F5(t.breakpoints, n)), n;
  };
function e9(e = {}) {
  const {
      createStyledComponent: t = Y8,
      useThemeProps: n = Q8,
      componentName: r = "MuiStack",
    } = e,
    o = () => Ce({ root: ["root"] }, (l) => we(r, l), {}),
    i = t(Z8);
  return g.forwardRef(function (l, u) {
    const d = n(l),
      f = eu(d),
      {
        component: p = "div",
        direction: x = "column",
        spacing: h = 0,
        divider: m,
        children: b,
        className: _,
        useFlexGap: v = !1,
      } = f,
      y = Y(f, q8),
      w = { direction: x, spacing: h, useFlexGap: v },
      S = o();
    return c.jsx(
      i,
      j({ as: p, ownerState: w, ref: u, className: Z(S.root, _) }, y, {
        children: m ? X8(b, m) : b,
      })
    );
  });
}
function t9(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [d, f] = g.useState(!1),
    p = Z(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    x = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    h = Z(n.child, d && n.childLeaving, r && n.childPulsate);
  return (
    !a && !d && f(!0),
    g.useEffect(() => {
      if (!a && l != null) {
        const m = setTimeout(l, u);
        return () => {
          clearTimeout(m);
        };
      }
    }, [l, a, u]),
    c.jsx("span", {
      className: p,
      style: x,
      children: c.jsx("span", { className: h }),
    })
  );
}
const Gt = ve("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  n9 = ["center", "classes", "className"];
let pu = (e) => e,
  J0,
  Z0,
  eg,
  tg;
const tp = 550,
  r9 = 80,
  o9 = bi(
    J0 ||
      (J0 = pu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  i9 = bi(
    Z0 ||
      (Z0 = pu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  s9 = bi(
    eg ||
      (eg = pu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  a9 = Q("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  l9 = Q(t9, { name: "MuiTouchRipple", slot: "Ripple" })(
    tg ||
      (tg = pu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Gt.rippleVisible,
    o9,
    tp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Gt.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Gt.child,
    Gt.childLeaving,
    i9,
    tp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Gt.childPulsate,
    s9,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  c9 = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = Y(r, n9),
      [l, u] = g.useState([]),
      d = g.useRef(0),
      f = g.useRef(null);
    g.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [l]);
    const p = g.useRef(!1),
      x = Y_(),
      h = g.useRef(null),
      m = g.useRef(null),
      b = g.useCallback(
        (w) => {
          const {
            pulsate: S,
            rippleX: C,
            rippleY: k,
            rippleSize: $,
            cb: M,
          } = w;
          u((O) => [
            ...O,
            c.jsx(
              l9,
              {
                classes: {
                  ripple: Z(i.ripple, Gt.ripple),
                  rippleVisible: Z(i.rippleVisible, Gt.rippleVisible),
                  ripplePulsate: Z(i.ripplePulsate, Gt.ripplePulsate),
                  child: Z(i.child, Gt.child),
                  childLeaving: Z(i.childLeaving, Gt.childLeaving),
                  childPulsate: Z(i.childPulsate, Gt.childPulsate),
                },
                timeout: tp,
                pulsate: S,
                rippleX: C,
                rippleY: k,
                rippleSize: $,
              },
              d.current
            ),
          ]),
            (d.current += 1),
            (f.current = M);
        },
        [i]
      ),
      _ = g.useCallback(
        (w = {}, S = {}, C = () => {}) => {
          const {
            pulsate: k = !1,
            center: $ = o || S.pulsate,
            fakeElement: M = !1,
          } = S;
          if ((w == null ? void 0 : w.type) === "mousedown" && p.current) {
            p.current = !1;
            return;
          }
          (w == null ? void 0 : w.type) === "touchstart" && (p.current = !0);
          const O = M ? null : m.current,
            A = O
              ? O.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let z, U, B;
          if (
            $ ||
            w === void 0 ||
            (w.clientX === 0 && w.clientY === 0) ||
            (!w.clientX && !w.touches)
          )
            (z = Math.round(A.width / 2)), (U = Math.round(A.height / 2));
          else {
            const { clientX: D, clientY: R } =
              w.touches && w.touches.length > 0 ? w.touches[0] : w;
            (z = Math.round(D - A.left)), (U = Math.round(R - A.top));
          }
          if ($)
            (B = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3)),
              B % 2 === 0 && (B += 1);
          else {
            const D =
                Math.max(Math.abs((O ? O.clientWidth : 0) - z), z) * 2 + 2,
              R = Math.max(Math.abs((O ? O.clientHeight : 0) - U), U) * 2 + 2;
            B = Math.sqrt(D ** 2 + R ** 2);
          }
          w != null && w.touches
            ? h.current === null &&
              ((h.current = () => {
                b({ pulsate: k, rippleX: z, rippleY: U, rippleSize: B, cb: C });
              }),
              x.start(r9, () => {
                h.current && (h.current(), (h.current = null));
              }))
            : b({ pulsate: k, rippleX: z, rippleY: U, rippleSize: B, cb: C });
        },
        [o, b, x]
      ),
      v = g.useCallback(() => {
        _({}, { pulsate: !0 });
      }, [_]),
      y = g.useCallback(
        (w, S) => {
          if (
            (x.clear(),
            (w == null ? void 0 : w.type) === "touchend" && h.current)
          ) {
            h.current(),
              (h.current = null),
              x.start(0, () => {
                y(w, S);
              });
            return;
          }
          (h.current = null),
            u((C) => (C.length > 0 ? C.slice(1) : C)),
            (f.current = S);
        },
        [x]
      );
    return (
      g.useImperativeHandle(n, () => ({ pulsate: v, start: _, stop: y }), [
        v,
        _,
        y,
      ]),
      c.jsx(
        a9,
        j({ className: Z(Gt.root, i.root, s), ref: m }, a, {
          children: c.jsx(E8, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  u9 = c9;
function d9(e) {
  return we("MuiButtonBase", e);
}
const f9 = ve("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  p9 = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  h9 = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = Ce({ root: ["root", t && "disabled", n && "focusVisible"] }, d9, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  m9 = Q("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${f9.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  g9 = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: d = !1,
        disableTouchRipple: f = !1,
        focusRipple: p = !1,
        LinkComponent: x = "a",
        onBlur: h,
        onClick: m,
        onContextMenu: b,
        onDragLeave: _,
        onFocus: v,
        onFocusVisible: y,
        onKeyDown: w,
        onKeyUp: S,
        onMouseDown: C,
        onMouseLeave: k,
        onMouseUp: $,
        onTouchEnd: M,
        onTouchMove: O,
        onTouchStart: A,
        tabIndex: z = 0,
        TouchRippleProps: U,
        touchRippleRef: B,
        type: D,
      } = r,
      R = Y(r, p9),
      P = g.useRef(null),
      E = g.useRef(null),
      N = xt(E, B),
      { isFocusVisibleRef: T, onFocus: W, onBlur: V, ref: le } = Q_(),
      [J, re] = g.useState(!1);
    u && J && re(!1),
      g.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            re(!0), P.current.focus();
          },
        }),
        []
      );
    const [oe, pe] = g.useState(!1);
    g.useEffect(() => {
      pe(!0);
    }, []);
    const st = oe && !d && !u;
    g.useEffect(() => {
      J && p && !d && oe && E.current.pulsate();
    }, [d, p, J, oe]);
    function ee(te, Pi, Mb = f) {
      return Qr(
        (fm) => (Pi && Pi(fm), !Mb && E.current && E.current[te](fm), !0)
      );
    }
    const Se = ee("start", C),
      ie = ee("stop", b),
      ye = ee("stop", _),
      ce = ee("stop", $),
      je = ee("stop", (te) => {
        J && te.preventDefault(), k && k(te);
      }),
      He = ee("start", A),
      go = ee("stop", M),
      xn = ee("stop", O),
      bn = ee(
        "stop",
        (te) => {
          V(te), T.current === !1 && re(!1), h && h(te);
        },
        !1
      ),
      vo = Qr((te) => {
        P.current || (P.current = te.currentTarget),
          W(te),
          T.current === !0 && (re(!0), y && y(te)),
          v && v(te);
      }),
      wn = () => {
        const te = P.current;
        return l && l !== "button" && !(te.tagName === "A" && te.href);
      },
      pt = g.useRef(!1),
      yo = Qr((te) => {
        p &&
          !pt.current &&
          J &&
          E.current &&
          te.key === " " &&
          ((pt.current = !0),
          E.current.stop(te, () => {
            E.current.start(te);
          })),
          te.target === te.currentTarget &&
            wn() &&
            te.key === " " &&
            te.preventDefault(),
          w && w(te),
          te.target === te.currentTarget &&
            wn() &&
            te.key === "Enter" &&
            !u &&
            (te.preventDefault(), m && m(te));
      }),
      zn = Qr((te) => {
        p &&
          te.key === " " &&
          E.current &&
          J &&
          !te.defaultPrevented &&
          ((pt.current = !1),
          E.current.stop(te, () => {
            E.current.pulsate(te);
          })),
          S && S(te),
          m &&
            te.target === te.currentTarget &&
            wn() &&
            te.key === " " &&
            !te.defaultPrevented &&
            m(te);
      });
    let Qe = l;
    Qe === "button" && (R.href || R.to) && (Qe = x);
    const ir = {};
    Qe === "button"
      ? ((ir.type = D === void 0 ? "button" : D), (ir.disabled = u))
      : (!R.href && !R.to && (ir.role = "button"),
        u && (ir["aria-disabled"] = u));
    const $i = xt(n, le, P),
      Ri = j({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: d,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: z,
        focusVisible: J,
      }),
      Me = h9(Ri);
    return c.jsxs(
      m9,
      j(
        {
          as: Qe,
          className: Z(Me.root, a),
          ownerState: Ri,
          onBlur: bn,
          onClick: m,
          onContextMenu: ie,
          onFocus: vo,
          onKeyDown: yo,
          onKeyUp: zn,
          onMouseDown: Se,
          onMouseLeave: je,
          onMouseUp: ce,
          onDragLeave: ye,
          onTouchEnd: go,
          onTouchMove: xn,
          onTouchStart: He,
          ref: $i,
          tabIndex: u ? -1 : z,
          type: D,
        },
        ir,
        R,
        { children: [s, st ? c.jsx(u9, j({ ref: N, center: i }, U)) : null] }
      )
    );
  }),
  hu = g9;
function v9(e) {
  return we("MuiIconButton", e);
}
const y9 = ve("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  _9 = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  x9 = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${G(r)}`,
          o && `edge${G(o)}`,
          `size${G(i)}`,
        ],
      };
    return Ce(s, v9, t);
  },
  b9 = Q(hu, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${G(n.color)}`],
        n.edge && t[`edge${G(n.edge)}`],
        t[`size${G(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      j(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : $t(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return j(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          j(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": j(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : $t(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${y9.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  w9 = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = "default",
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: d = "medium",
      } = r,
      f = Y(r, _9),
      p = j({}, r, {
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        size: d,
      }),
      x = x9(p);
    return c.jsx(
      b9,
      j(
        {
          className: Z(x.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: l,
          ref: n,
        },
        f,
        { ownerState: p, children: i }
      )
    );
  }),
  ki = w9;
function Yl(e) {
  return typeof e == "string";
}
function U2(e, t, n) {
  return e === void 0 || Yl(e)
    ? t
    : j({}, t, { ownerState: j({}, t.ownerState, n) });
}
function H2(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function W2(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function ng(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function V2(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const x = Z(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      h = j(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      m = j({}, n, o, r);
    return (
      x.length > 0 && (m.className = x),
      Object.keys(h).length > 0 && (m.style = h),
      { props: m, internalRef: void 0 }
    );
  }
  const s = H2(j({}, o, r)),
    a = ng(r),
    l = ng(o),
    u = t(s),
    d = Z(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    f = j(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    p = j({}, u, n, l, a);
  return (
    d.length > 0 && (p.className = d),
    Object.keys(f).length > 0 && (p.style = f),
    { props: p, internalRef: u.ref }
  );
}
const S9 = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function li(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = Y(e, S9),
    a = i ? {} : W2(r, o),
    { props: l, internalRef: u } = V2(j({}, s, { externalSlotProps: a })),
    d = xt(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return U2(n, j({}, l, { ref: d }), o);
}
const C9 = g.createContext({}),
  np = C9;
function k9(e) {
  return we("MuiList", e);
}
ve("MuiList", ["root", "padding", "dense", "subheader"]);
const j9 = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  E9 = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return Ce(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      k9,
      t
    );
  },
  $9 = Q("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    j(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  R9 = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      d = Y(r, j9),
      f = g.useMemo(() => ({ dense: a }), [a]),
      p = j({}, r, { component: s, dense: a, disablePadding: l }),
      x = E9(p);
    return c.jsx(np.Provider, {
      value: f,
      children: c.jsxs(
        $9,
        j({ as: s, className: Z(x.root, i), ref: n, ownerState: p }, d, {
          children: [u, o],
        })
      ),
    });
  }),
  P9 = R9,
  N9 = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function yd(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function rg(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function K2(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function Ui(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !K2(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const T9 = g.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: a,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: d,
        variant: f = "selectedMenu",
      } = t,
      p = Y(t, N9),
      x = g.useRef(null),
      h = g.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    er(() => {
      o && x.current.focus();
    }, [o]),
      g.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (y, w) => {
            const S = !x.current.style.width;
            if (y.clientHeight < x.current.clientHeight && S) {
              const C = `${X_(Bt(y))}px`;
              (x.current.style[
                w.direction === "rtl" ? "paddingLeft" : "paddingRight"
              ] = C),
                (x.current.style.width = `calc(100% + ${C})`);
            }
            return x.current;
          },
        }),
        []
      );
    const m = (y) => {
        const w = x.current,
          S = y.key,
          C = Bt(w).activeElement;
        if (S === "ArrowDown") y.preventDefault(), Ui(w, C, u, l, yd);
        else if (S === "ArrowUp") y.preventDefault(), Ui(w, C, u, l, rg);
        else if (S === "Home") y.preventDefault(), Ui(w, null, u, l, yd);
        else if (S === "End") y.preventDefault(), Ui(w, null, u, l, rg);
        else if (S.length === 1) {
          const k = h.current,
            $ = S.toLowerCase(),
            M = performance.now();
          k.keys.length > 0 &&
            (M - k.lastTime > 500
              ? ((k.keys = []), (k.repeating = !0), (k.previousKeyMatched = !0))
              : k.repeating && $ !== k.keys[0] && (k.repeating = !1)),
            (k.lastTime = M),
            k.keys.push($);
          const O = C && !k.repeating && K2(C, k);
          k.previousKeyMatched && (O || Ui(w, C, !1, l, yd, k))
            ? y.preventDefault()
            : (k.previousKeyMatched = !1);
        }
        d && d(y);
      },
      b = xt(x, n);
    let _ = -1;
    g.Children.forEach(s, (y, w) => {
      if (!g.isValidElement(y)) {
        _ === w && ((_ += 1), _ >= s.length && (_ = -1));
        return;
      }
      y.props.disabled ||
        (((f === "selectedMenu" && y.props.selected) || _ === -1) && (_ = w)),
        _ === w &&
          (y.props.disabled ||
            y.props.muiSkipListHighlight ||
            y.type.muiSkipListHighlight) &&
          ((_ += 1), _ >= s.length && (_ = -1));
    });
    const v = g.Children.map(s, (y, w) => {
      if (w === _) {
        const S = {};
        return (
          i && (S.autoFocus = !0),
          y.props.tabIndex === void 0 &&
            f === "selectedMenu" &&
            (S.tabIndex = 0),
          g.cloneElement(y, S)
        );
      }
      return y;
    });
    return c.jsx(
      P9,
      j(
        {
          role: "menu",
          ref: b,
          className: a,
          onKeyDown: m,
          tabIndex: o ? 0 : -1,
        },
        p,
        { children: v }
      )
    );
  }),
  O9 = T9;
function mu() {
  const e = Zc(tu);
  return e[Ys] || e;
}
const q2 = (e) => e.scrollTop;
function Ql(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
const M9 = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
function rp(e) {
  return `scale(${e}, ${e ** 2})`;
}
const L9 = {
    entering: { opacity: 1, transform: rp(1) },
    entered: { opacity: 1, transform: "none" },
  },
  _d =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  G2 = g.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: d,
        onExit: f,
        onExited: p,
        onExiting: x,
        style: h,
        timeout: m = "auto",
        TransitionComponent: b = S_,
      } = t,
      _ = Y(t, M9),
      v = Y_(),
      y = g.useRef(),
      w = mu(),
      S = g.useRef(null),
      C = xt(S, i.ref, n),
      k = (D) => (R) => {
        if (D) {
          const P = S.current;
          R === void 0 ? D(P) : D(P, R);
        }
      },
      $ = k(d),
      M = k((D, R) => {
        q2(D);
        const {
          duration: P,
          delay: E,
          easing: N,
        } = Ql({ style: h, timeout: m, easing: s }, { mode: "enter" });
        let T;
        m === "auto"
          ? ((T = w.transitions.getAutoHeightDuration(D.clientHeight)),
            (y.current = T))
          : (T = P),
          (D.style.transition = [
            w.transitions.create("opacity", { duration: T, delay: E }),
            w.transitions.create("transform", {
              duration: _d ? T : T * 0.666,
              delay: E,
              easing: N,
            }),
          ].join(",")),
          l && l(D, R);
      }),
      O = k(u),
      A = k(x),
      z = k((D) => {
        const {
          duration: R,
          delay: P,
          easing: E,
        } = Ql({ style: h, timeout: m, easing: s }, { mode: "exit" });
        let N;
        m === "auto"
          ? ((N = w.transitions.getAutoHeightDuration(D.clientHeight)),
            (y.current = N))
          : (N = R),
          (D.style.transition = [
            w.transitions.create("opacity", { duration: N, delay: P }),
            w.transitions.create("transform", {
              duration: _d ? N : N * 0.666,
              delay: _d ? P : P || N * 0.333,
              easing: E,
            }),
          ].join(",")),
          (D.style.opacity = 0),
          (D.style.transform = rp(0.75)),
          f && f(D);
      }),
      U = k(p),
      B = (D) => {
        m === "auto" && v.start(y.current || 0, D), r && r(S.current, D);
      };
    return c.jsx(
      b,
      j(
        {
          appear: o,
          in: a,
          nodeRef: S,
          onEnter: M,
          onEntered: O,
          onEntering: $,
          onExit: z,
          onExited: U,
          onExiting: A,
          addEndListener: B,
          timeout: m === "auto" ? null : m,
        },
        _,
        {
          children: (D, R) =>
            g.cloneElement(
              i,
              j(
                {
                  style: j(
                    {
                      opacity: 0,
                      transform: rp(0.75),
                      visibility: D === "exited" && !a ? "hidden" : void 0,
                    },
                    L9[D],
                    h,
                    i.props.style
                  ),
                  ref: C,
                },
                R
              )
            ),
        }
      )
    );
  });
G2.muiSupportAuto = !0;
const A9 = G2;
function I9(e) {
  const t = Bt(e);
  return t.body === e
    ? Mr(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function ps(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function og(e) {
  return parseInt(Mr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function z9(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ig(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !z9(s);
    a && l && ps(s, o);
  });
}
function xd(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function F9(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (I9(r)) {
      const s = X_(Bt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${og(r) + s}px`);
      const a = Bt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${og(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Bt(r).body;
    else {
      const s = r.parentElement,
        a = Mr(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function D9(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class B9 {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && ps(t.modalRef, !1);
    const o = D9(n);
    ig(n, t.mount, t.modalRef, o, !0);
    const i = xd(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = xd(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = F9(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = xd(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && ps(t.modalRef, n),
        ig(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ps(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function U9(e) {
  return typeof e == "function" ? e() : e;
}
function H9(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const W9 = new B9();
function V9(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = W9,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: d,
      rootRef: f,
    } = e,
    p = g.useRef({}),
    x = g.useRef(null),
    h = g.useRef(null),
    m = xt(h, f),
    [b, _] = g.useState(!d),
    v = H9(l);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const w = () => Bt(x.current),
    S = () => (
      (p.current.modalRef = h.current), (p.current.mount = x.current), p.current
    ),
    C = () => {
      o.mount(S(), { disableScrollLock: r }),
        h.current && (h.current.scrollTop = 0);
    },
    k = Qr(() => {
      const R = U9(t) || w().body;
      o.add(S(), R), h.current && C();
    }),
    $ = g.useCallback(() => o.isTopModal(S()), [o]),
    M = Qr((R) => {
      (x.current = R), R && (d && $() ? C() : h.current && ps(h.current, y));
    }),
    O = g.useCallback(() => {
      o.remove(S(), y);
    }, [y, o]);
  g.useEffect(
    () => () => {
      O();
    },
    [O]
  ),
    g.useEffect(() => {
      d ? k() : (!v || !i) && O();
    }, [d, O, v, i, k]);
  const A = (R) => (P) => {
      var E;
      (E = R.onKeyDown) == null || E.call(R, P),
        !(P.key !== "Escape" || P.which === 229 || !$()) &&
          (n || (P.stopPropagation(), u && u(P, "escapeKeyDown")));
    },
    z = (R) => (P) => {
      var E;
      (E = R.onClick) == null || E.call(R, P),
        P.target === P.currentTarget && u && u(P, "backdropClick");
    };
  return {
    getRootProps: (R = {}) => {
      const P = H2(e);
      delete P.onTransitionEnter, delete P.onTransitionExited;
      const E = j({}, P, R);
      return j({ role: "presentation" }, E, { onKeyDown: A(E), ref: m });
    },
    getBackdropProps: (R = {}) => {
      const P = R;
      return j({ "aria-hidden": !0 }, P, { onClick: z(P), open: d });
    },
    getTransitionProps: () => {
      const R = () => {
          _(!1), s && s();
        },
        P = () => {
          _(!0), a && a(), i && O();
        };
      return {
        onEnter: Il(R, l == null ? void 0 : l.props.onEnter),
        onExited: Il(P, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: m,
    portalRef: M,
    isTopModal: $,
    exited: b,
    hasTransition: v,
  };
}
const K9 = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function q9(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function G9(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Y9(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    G9(e)
  );
}
function Q9(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(K9)).forEach((r, o) => {
      const i = q9(r);
      i === -1 ||
        !Y9(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function X9() {
  return !0;
}
function J9(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = Q9,
      isEnabled: s = X9,
      open: a,
    } = e,
    l = g.useRef(!1),
    u = g.useRef(null),
    d = g.useRef(null),
    f = g.useRef(null),
    p = g.useRef(null),
    x = g.useRef(!1),
    h = g.useRef(null),
    m = xt(t.ref, h),
    b = g.useRef(null);
  g.useEffect(() => {
    !a || !h.current || (x.current = !n);
  }, [n, a]),
    g.useEffect(() => {
      if (!a || !h.current) return;
      const y = Bt(h.current);
      return (
        h.current.contains(y.activeElement) ||
          (h.current.hasAttribute("tabIndex") ||
            h.current.setAttribute("tabIndex", "-1"),
          x.current && h.current.focus()),
        () => {
          o ||
            (f.current &&
              f.current.focus &&
              ((l.current = !0), f.current.focus()),
            (f.current = null));
        }
      );
    }, [a]),
    g.useEffect(() => {
      if (!a || !h.current) return;
      const y = Bt(h.current),
        w = (k) => {
          (b.current = k),
            !(r || !s() || k.key !== "Tab") &&
              y.activeElement === h.current &&
              k.shiftKey &&
              ((l.current = !0), d.current && d.current.focus());
        },
        S = () => {
          const k = h.current;
          if (k === null) return;
          if (!y.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            k.contains(y.activeElement) ||
            (r &&
              y.activeElement !== u.current &&
              y.activeElement !== d.current)
          )
            return;
          if (y.activeElement !== p.current) p.current = null;
          else if (p.current !== null) return;
          if (!x.current) return;
          let $ = [];
          if (
            ((y.activeElement === u.current || y.activeElement === d.current) &&
              ($ = i(h.current)),
            $.length > 0)
          ) {
            var M, O;
            const A = !!(
                (M = b.current) != null &&
                M.shiftKey &&
                ((O = b.current) == null ? void 0 : O.key) === "Tab"
              ),
              z = $[0],
              U = $[$.length - 1];
            typeof z != "string" &&
              typeof U != "string" &&
              (A ? U.focus() : z.focus());
          } else k.focus();
        };
      y.addEventListener("focusin", S), y.addEventListener("keydown", w, !0);
      const C = setInterval(() => {
        y.activeElement && y.activeElement.tagName === "BODY" && S();
      }, 50);
      return () => {
        clearInterval(C),
          y.removeEventListener("focusin", S),
          y.removeEventListener("keydown", w, !0);
      };
    }, [n, r, o, s, a, i]);
  const _ = (y) => {
      f.current === null && (f.current = y.relatedTarget),
        (x.current = !0),
        (p.current = y.target);
      const w = t.props.onFocus;
      w && w(y);
    },
    v = (y) => {
      f.current === null && (f.current = y.relatedTarget), (x.current = !0);
    };
  return c.jsxs(g.Fragment, {
    children: [
      c.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: v,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      g.cloneElement(t, { ref: m, onFocus: _ }),
      c.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: v,
        ref: d,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function Z9(e) {
  return typeof e == "function" ? e() : e;
}
const e7 = g.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, a] = g.useState(null),
      l = xt(g.isValidElement(r) ? r.ref : null, n);
    if (
      (er(() => {
        i || a(Z9(o) || document.body);
      }, [o, i]),
      er(() => {
        if (s && !i)
          return (
            zl(n, s),
            () => {
              zl(n, null);
            }
          );
      }, [n, s, i]),
      i)
    ) {
      if (g.isValidElement(r)) {
        const u = { ref: l };
        return g.cloneElement(r, u);
      }
      return c.jsx(g.Fragment, { children: r });
    }
    return c.jsx(g.Fragment, { children: s && ch.createPortal(r, s) });
  }),
  t7 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  n7 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  r7 = g.forwardRef(function (t, n) {
    const r = mu(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: d,
        onEntered: f,
        onEntering: p,
        onExit: x,
        onExited: h,
        onExiting: m,
        style: b,
        timeout: _ = o,
        TransitionComponent: v = S_,
      } = t,
      y = Y(t, t7),
      w = g.useRef(null),
      S = xt(w, a.ref, n),
      C = (B) => (D) => {
        if (B) {
          const R = w.current;
          D === void 0 ? B(R) : B(R, D);
        }
      },
      k = C(p),
      $ = C((B, D) => {
        q2(B);
        const R = Ql({ style: b, timeout: _, easing: l }, { mode: "enter" });
        (B.style.webkitTransition = r.transitions.create("opacity", R)),
          (B.style.transition = r.transitions.create("opacity", R)),
          d && d(B, D);
      }),
      M = C(f),
      O = C(m),
      A = C((B) => {
        const D = Ql({ style: b, timeout: _, easing: l }, { mode: "exit" });
        (B.style.webkitTransition = r.transitions.create("opacity", D)),
          (B.style.transition = r.transitions.create("opacity", D)),
          x && x(B);
      }),
      z = C(h),
      U = (B) => {
        i && i(w.current, B);
      };
    return c.jsx(
      v,
      j(
        {
          appear: s,
          in: u,
          nodeRef: w,
          onEnter: $,
          onEntered: M,
          onEntering: k,
          onExit: A,
          onExited: z,
          onExiting: O,
          addEndListener: U,
          timeout: _,
        },
        y,
        {
          children: (B, D) =>
            g.cloneElement(
              a,
              j(
                {
                  style: j(
                    {
                      opacity: 0,
                      visibility: B === "exited" && !u ? "hidden" : void 0,
                    },
                    n7[B],
                    b,
                    a.props.style
                  ),
                  ref: S,
                },
                D
              )
            ),
        }
      )
    );
  }),
  Y2 = r7;
function o7(e) {
  return we("MuiBackdrop", e);
}
ve("MuiBackdrop", ["root", "invisible"]);
const i7 = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  s7 = (e) => {
    const { classes: t, invisible: n } = e;
    return Ce({ root: ["root", n && "invisible"] }, o7, t);
  },
  a7 = Q("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    j(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  l7 = g.forwardRef(function (t, n) {
    var r, o, i;
    const s = ke({ props: t, name: "MuiBackdrop" }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: d = {},
        componentsProps: f = {},
        invisible: p = !1,
        open: x,
        slotProps: h = {},
        slots: m = {},
        TransitionComponent: b = Y2,
        transitionDuration: _,
      } = s,
      v = Y(s, i7),
      y = j({}, s, { component: u, invisible: p }),
      w = s7(y),
      S = (r = h.root) != null ? r : f.root;
    return c.jsx(
      b,
      j({ in: x, timeout: _ }, v, {
        children: c.jsx(
          a7,
          j({ "aria-hidden": !0 }, S, {
            as: (o = (i = m.root) != null ? i : d.Root) != null ? o : u,
            className: Z(w.root, l, S == null ? void 0 : S.className),
            ownerState: j({}, y, S == null ? void 0 : S.ownerState),
            classes: w,
            ref: n,
            children: a,
          })
        ),
      })
    );
  }),
  Q2 = l7;
function c7(e) {
  return we("MuiModal", e);
}
ve("MuiModal", ["root", "hidden", "backdrop"]);
const u7 = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  d7 = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return Ce(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      c7,
      r
    );
  },
  f7 = Q("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    j(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  p7 = Q(Q2, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  h7 = g.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = ke({ name: "MuiModal", props: t }),
      {
        BackdropComponent: d = p7,
        BackdropProps: f,
        className: p,
        closeAfterTransition: x = !1,
        children: h,
        container: m,
        component: b,
        components: _ = {},
        componentsProps: v = {},
        disableAutoFocus: y = !1,
        disableEnforceFocus: w = !1,
        disableEscapeKeyDown: S = !1,
        disablePortal: C = !1,
        disableRestoreFocus: k = !1,
        disableScrollLock: $ = !1,
        hideBackdrop: M = !1,
        keepMounted: O = !1,
        onBackdropClick: A,
        open: z,
        slotProps: U,
        slots: B,
      } = u,
      D = Y(u, u7),
      R = j({}, u, {
        closeAfterTransition: x,
        disableAutoFocus: y,
        disableEnforceFocus: w,
        disableEscapeKeyDown: S,
        disablePortal: C,
        disableRestoreFocus: k,
        disableScrollLock: $,
        hideBackdrop: M,
        keepMounted: O,
      }),
      {
        getRootProps: P,
        getBackdropProps: E,
        getTransitionProps: N,
        portalRef: T,
        isTopModal: W,
        exited: V,
        hasTransition: le,
      } = V9(j({}, R, { rootRef: n })),
      J = j({}, R, { exited: V }),
      re = d7(J),
      oe = {};
    if ((h.props.tabIndex === void 0 && (oe.tabIndex = "-1"), le)) {
      const { onEnter: ce, onExited: je } = N();
      (oe.onEnter = ce), (oe.onExited = je);
    }
    const pe =
        (r = (o = B == null ? void 0 : B.root) != null ? o : _.Root) != null
          ? r
          : f7,
      st =
        (i = (s = B == null ? void 0 : B.backdrop) != null ? s : _.Backdrop) !=
        null
          ? i
          : d,
      ee = (a = U == null ? void 0 : U.root) != null ? a : v.root,
      Se = (l = U == null ? void 0 : U.backdrop) != null ? l : v.backdrop,
      ie = li({
        elementType: pe,
        externalSlotProps: ee,
        externalForwardedProps: D,
        getSlotProps: P,
        additionalProps: { ref: n, as: b },
        ownerState: J,
        className: Z(
          p,
          ee == null ? void 0 : ee.className,
          re == null ? void 0 : re.root,
          !J.open && J.exited && (re == null ? void 0 : re.hidden)
        ),
      }),
      ye = li({
        elementType: st,
        externalSlotProps: Se,
        additionalProps: f,
        getSlotProps: (ce) =>
          E(
            j({}, ce, {
              onClick: (je) => {
                A && A(je), ce != null && ce.onClick && ce.onClick(je);
              },
            })
          ),
        className: Z(
          Se == null ? void 0 : Se.className,
          f == null ? void 0 : f.className,
          re == null ? void 0 : re.backdrop
        ),
        ownerState: J,
      });
    return !O && !z && (!le || V)
      ? null
      : c.jsx(e7, {
          ref: T,
          container: m,
          disablePortal: C,
          children: c.jsxs(
            pe,
            j({}, ie, {
              children: [
                !M && d ? c.jsx(st, j({}, ye)) : null,
                c.jsx(J9, {
                  disableEnforceFocus: w,
                  disableAutoFocus: y,
                  disableRestoreFocus: k,
                  isEnabled: W,
                  open: z,
                  children: g.cloneElement(h, oe),
                }),
              ],
            })
          ),
        });
  }),
  X2 = h7,
  sg = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  };
function m7(e) {
  return we("MuiPaper", e);
}
ve("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const g7 = ["className", "component", "elevation", "square", "variant"],
  v7 = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return Ce(i, m7, o);
  },
  y7 = Q("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return j(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        j(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${$t(
                "#fff",
                sg(t.elevation)
              )}, ${$t("#fff", sg(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  _7 = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: a = !1,
        variant: l = "elevation",
      } = r,
      u = Y(r, g7),
      d = j({}, r, { component: i, elevation: s, square: a, variant: l }),
      f = v7(d);
    return c.jsx(
      y7,
      j({ as: i, ownerState: d, className: Z(f.root, o), ref: n }, u)
    );
  }),
  gu = _7;
function x7(e) {
  return we("MuiPopover", e);
}
ve("MuiPopover", ["root", "paper"]);
const b7 = ["onEntering"],
  w7 = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  S7 = ["slotProps"];
function ag(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function lg(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function cg(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function bd(e) {
  return typeof e == "function" ? e() : e;
}
const C7 = (e) => {
    const { classes: t } = e;
    return Ce({ root: ["root"], paper: ["paper"] }, x7, t);
  },
  k7 = Q(X2, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  J2 = Q(gu, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  j7 = g.forwardRef(function (t, n) {
    var r, o, i;
    const s = ke({ props: t, name: "MuiPopover" }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: d,
        anchorReference: f = "anchorEl",
        children: p,
        className: x,
        container: h,
        elevation: m = 8,
        marginThreshold: b = 16,
        open: _,
        PaperProps: v = {},
        slots: y,
        slotProps: w,
        transformOrigin: S = { vertical: "top", horizontal: "left" },
        TransitionComponent: C = A9,
        transitionDuration: k = "auto",
        TransitionProps: { onEntering: $ } = {},
        disableScrollLock: M = !1,
      } = s,
      O = Y(s.TransitionProps, b7),
      A = Y(s, w7),
      z = (r = w == null ? void 0 : w.paper) != null ? r : v,
      U = g.useRef(),
      B = xt(U, z.ref),
      D = j({}, s, {
        anchorOrigin: u,
        anchorReference: f,
        elevation: m,
        marginThreshold: b,
        externalPaperSlotProps: z,
        transformOrigin: S,
        TransitionComponent: C,
        transitionDuration: k,
        TransitionProps: O,
      }),
      R = C7(D),
      P = g.useCallback(() => {
        if (f === "anchorPosition") return d;
        const ce = bd(l),
          He = (
            ce && ce.nodeType === 1 ? ce : Bt(U.current).body
          ).getBoundingClientRect();
        return {
          top: He.top + ag(He, u.vertical),
          left: He.left + lg(He, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, d, f]),
      E = g.useCallback(
        (ce) => ({
          vertical: ag(ce, S.vertical),
          horizontal: lg(ce, S.horizontal),
        }),
        [S.horizontal, S.vertical]
      ),
      N = g.useCallback(
        (ce) => {
          const je = { width: ce.offsetWidth, height: ce.offsetHeight },
            He = E(je);
          if (f === "none")
            return { top: null, left: null, transformOrigin: cg(He) };
          const go = P();
          let xn = go.top - He.vertical,
            bn = go.left - He.horizontal;
          const vo = xn + je.height,
            wn = bn + je.width,
            pt = Mr(bd(l)),
            yo = pt.innerHeight - b,
            zn = pt.innerWidth - b;
          if (b !== null && xn < b) {
            const Qe = xn - b;
            (xn -= Qe), (He.vertical += Qe);
          } else if (b !== null && vo > yo) {
            const Qe = vo - yo;
            (xn -= Qe), (He.vertical += Qe);
          }
          if (b !== null && bn < b) {
            const Qe = bn - b;
            (bn -= Qe), (He.horizontal += Qe);
          } else if (wn > zn) {
            const Qe = wn - zn;
            (bn -= Qe), (He.horizontal += Qe);
          }
          return {
            top: `${Math.round(xn)}px`,
            left: `${Math.round(bn)}px`,
            transformOrigin: cg(He),
          };
        },
        [l, f, P, E, b]
      ),
      [T, W] = g.useState(_),
      V = g.useCallback(() => {
        const ce = U.current;
        if (!ce) return;
        const je = N(ce);
        je.top !== null && (ce.style.top = je.top),
          je.left !== null && (ce.style.left = je.left),
          (ce.style.transformOrigin = je.transformOrigin),
          W(!0);
      }, [N]);
    g.useEffect(
      () => (
        M && window.addEventListener("scroll", V),
        () => window.removeEventListener("scroll", V)
      ),
      [l, M, V]
    );
    const le = (ce, je) => {
        $ && $(ce, je), V();
      },
      J = () => {
        W(!1);
      };
    g.useEffect(() => {
      _ && V();
    }),
      g.useImperativeHandle(
        a,
        () =>
          _
            ? {
                updatePosition: () => {
                  V();
                },
              }
            : null,
        [_, V]
      ),
      g.useEffect(() => {
        if (!_) return;
        const ce = _h(() => {
            V();
          }),
          je = Mr(l);
        return (
          je.addEventListener("resize", ce),
          () => {
            ce.clear(), je.removeEventListener("resize", ce);
          }
        );
      }, [l, _, V]);
    let re = k;
    k === "auto" && !C.muiSupportAuto && (re = void 0);
    const oe = h || (l ? Bt(bd(l)).body : void 0),
      pe = (o = y == null ? void 0 : y.root) != null ? o : k7,
      st = (i = y == null ? void 0 : y.paper) != null ? i : J2,
      ee = li({
        elementType: st,
        externalSlotProps: j({}, z, {
          style: T ? z.style : j({}, z.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: m, ref: B },
        ownerState: D,
        className: Z(R.paper, z == null ? void 0 : z.className),
      }),
      Se = li({
        elementType: pe,
        externalSlotProps: (w == null ? void 0 : w.root) || {},
        externalForwardedProps: A,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: oe,
          open: _,
        },
        ownerState: D,
        className: Z(R.root, x),
      }),
      { slotProps: ie } = Se,
      ye = Y(Se, S7);
    return c.jsx(
      pe,
      j({}, ye, !Yl(pe) && { slotProps: ie, disableScrollLock: M }, {
        children: c.jsx(
          C,
          j(
            { appear: !0, in: _, onEntering: le, onExited: J, timeout: re },
            O,
            { children: c.jsx(st, j({}, ee, { children: p })) }
          )
        ),
      })
    );
  }),
  E7 = j7;
function $7(e) {
  return we("MuiMenu", e);
}
ve("MuiMenu", ["root", "paper", "list"]);
const R7 = ["onEntering"],
  P7 = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  N7 = { vertical: "top", horizontal: "right" },
  T7 = { vertical: "top", horizontal: "left" },
  O7 = (e) => {
    const { classes: t } = e;
    return Ce({ root: ["root"], paper: ["paper"], list: ["list"] }, $7, t);
  },
  M7 = Q(E7, {
    shouldForwardProp: (e) => ho(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  L7 = Q(J2, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  A7 = Q(O9, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  I7 = g.forwardRef(function (t, n) {
    var r, o;
    const i = ke({ props: t, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: a,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: d = {},
        onClose: f,
        open: p,
        PaperProps: x = {},
        PopoverClasses: h,
        transitionDuration: m = "auto",
        TransitionProps: { onEntering: b } = {},
        variant: _ = "selectedMenu",
        slots: v = {},
        slotProps: y = {},
      } = i,
      w = Y(i.TransitionProps, R7),
      S = Y(i, P7),
      C = mu(),
      k = C.direction === "rtl",
      $ = j({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: d,
        onEntering: b,
        PaperProps: x,
        transitionDuration: m,
        TransitionProps: w,
        variant: _,
      }),
      M = O7($),
      O = s && !u && p,
      A = g.useRef(null),
      z = (N, T) => {
        A.current && A.current.adjustStyleForScrollbar(N, C), b && b(N, T);
      },
      U = (N) => {
        N.key === "Tab" && (N.preventDefault(), f && f(N, "tabKeyDown"));
      };
    let B = -1;
    g.Children.map(a, (N, T) => {
      g.isValidElement(N) &&
        (N.props.disabled ||
          (((_ === "selectedMenu" && N.props.selected) || B === -1) &&
            (B = T)));
    });
    const D = (r = v.paper) != null ? r : L7,
      R = (o = y.paper) != null ? o : x,
      P = li({
        elementType: v.root,
        externalSlotProps: y.root,
        ownerState: $,
        className: [M.root, l],
      }),
      E = li({
        elementType: D,
        externalSlotProps: R,
        ownerState: $,
        className: M.paper,
      });
    return c.jsx(
      M7,
      j(
        {
          onClose: f,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: k ? "right" : "left",
          },
          transformOrigin: k ? N7 : T7,
          slots: { paper: D, root: v.root },
          slotProps: { root: P, paper: E },
          open: p,
          ref: n,
          transitionDuration: m,
          TransitionProps: j({ onEntering: z }, w),
          ownerState: $,
        },
        S,
        {
          classes: h,
          children: c.jsx(
            A7,
            j(
              {
                onKeyDown: U,
                actions: A,
                autoFocus: s && (B === -1 || u),
                autoFocusItem: O,
                variant: _,
              },
              d,
              { className: Z(M.list, d.className), children: a }
            )
          ),
        }
      )
    );
  }),
  z7 = I7;
function F7(e) {
  return we("MuiDivider", e);
}
const D7 = ve("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  ug = D7,
  B7 = [
    "absolute",
    "children",
    "className",
    "component",
    "flexItem",
    "light",
    "orientation",
    "role",
    "textAlign",
    "variant",
  ],
  U7 = (e) => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l,
    } = e;
    return Ce(
      {
        root: [
          "root",
          t && "absolute",
          l,
          i && "light",
          s === "vertical" && "vertical",
          o && "flexItem",
          n && "withChildren",
          n && s === "vertical" && "withChildrenVertical",
          a === "right" && s !== "vertical" && "textAlignRight",
          a === "left" && s !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
      },
      F7,
      r
    );
  },
  H7 = Q("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === "vertical" && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === "vertical" && t.withChildrenVertical,
        n.textAlign === "right" &&
          n.orientation !== "vertical" &&
          t.textAlignRight,
        n.textAlign === "left" &&
          n.orientation !== "vertical" &&
          t.textAlignLeft,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      j(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: "thin",
        },
        t.absolute && {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : $t(e.palette.divider, 0.08),
        },
        t.variant === "inset" && { marginLeft: 72 },
        t.variant === "middle" &&
          t.orientation === "horizontal" && {
            marginLeft: e.spacing(2),
            marginRight: e.spacing(2),
          },
        t.variant === "middle" &&
          t.orientation === "vertical" && {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
        t.orientation === "vertical" && {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin",
        },
        t.flexItem && { alignSelf: "stretch", height: "auto" }
      ),
    ({ ownerState: e }) =>
      j(
        {},
        e.children && {
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          border: 0,
          "&::before, &::after": { content: '""', alignSelf: "center" },
        }
      ),
    ({ theme: e, ownerState: t }) =>
      j(
        {},
        t.children &&
          t.orientation !== "vertical" && {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      j(
        {},
        t.children &&
          t.orientation === "vertical" && {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
            },
          }
      ),
    ({ ownerState: e }) =>
      j(
        {},
        e.textAlign === "right" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        e.textAlign === "left" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          }
      )
  ),
  W7 = Q("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
    },
  })(({ theme: e, ownerState: t }) =>
    j(
      {
        display: "inline-block",
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      },
      t.orientation === "vertical" && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
      }
    )
  ),
  Z2 = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiDivider" }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: a = i ? "div" : "hr",
        flexItem: l = !1,
        light: u = !1,
        orientation: d = "horizontal",
        role: f = a !== "hr" ? "separator" : void 0,
        textAlign: p = "center",
        variant: x = "fullWidth",
      } = r,
      h = Y(r, B7),
      m = j({}, r, {
        absolute: o,
        component: a,
        flexItem: l,
        light: u,
        orientation: d,
        role: f,
        textAlign: p,
        variant: x,
      }),
      b = U7(m);
    return c.jsx(
      H7,
      j({ as: a, className: Z(b.root, s), role: f, ref: n, ownerState: m }, h, {
        children: i
          ? c.jsx(W7, { className: b.wrapper, ownerState: m, children: i })
          : null,
      })
    );
  });
Z2.muiSkipListHighlight = !0;
const Xl = Z2,
  V7 = ve("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  dg = V7;
function K7(e) {
  return we("MuiTypography", e);
}
ve("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const q7 = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  G7 = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${G(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Ce(a, K7, s);
  },
  Y7 = Q("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${G(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    j(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  fg = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  Q7 = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  X7 = (e) => Q7[e] || e,
  J7 = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiTypography" }),
      o = X7(r.color),
      i = eu(j({}, r, { color: o })),
      {
        align: s = "inherit",
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: d = !1,
        paragraph: f = !1,
        variant: p = "body1",
        variantMapping: x = fg,
      } = i,
      h = Y(i, q7),
      m = j({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: d,
        paragraph: f,
        variant: p,
        variantMapping: x,
      }),
      b = l || (f ? "p" : x[p] || fg[p]) || "span",
      _ = G7(m);
    return c.jsx(
      Y7,
      j({ as: b, ref: n, ownerState: m, className: Z(_.root, a) }, h)
    );
  }),
  pg = J7,
  Z7 = ve("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  hg = Z7;
function eR(e) {
  return we("MuiMenuItem", e);
}
const tR = ve("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  Hi = tR,
  nR = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  rR = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  oR = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      l = Ce(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        eR,
        s
      );
    return j({}, s, l);
  },
  iR = Q(hu, {
    shouldForwardProp: (e) => ho(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: rR,
  })(({ theme: e, ownerState: t }) =>
    j(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${Hi.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : $t(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Hi.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : $t(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${Hi.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : $t(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : $t(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${Hi.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${Hi.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${ug.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${ug.inset}`]: { marginLeft: 52 },
        [`& .${hg.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${hg.inset}`]: { paddingLeft: 36 },
        [`& .${dg.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        j(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${dg.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  sR = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: s = !1,
        divider: a = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: d = "menuitem",
        tabIndex: f,
        className: p,
      } = r,
      x = Y(r, nR),
      h = g.useContext(np),
      m = g.useMemo(
        () => ({ dense: s || h.dense || !1, disableGutters: l }),
        [h.dense, s, l]
      ),
      b = g.useRef(null);
    er(() => {
      o && b.current && b.current.focus();
    }, [o]);
    const _ = j({}, r, { dense: m.dense, divider: a, disableGutters: l }),
      v = oR(r),
      y = xt(b, n);
    let w;
    return (
      r.disabled || (w = f !== void 0 ? f : -1),
      c.jsx(np.Provider, {
        value: m,
        children: c.jsx(
          iR,
          j(
            {
              ref: y,
              role: d,
              tabIndex: w,
              component: i,
              focusVisibleClassName: Z(v.focusVisible, u),
              className: Z(v.root, p),
            },
            x,
            { ownerState: _, classes: v }
          )
        ),
      })
    );
  }),
  aR = sR;
var em = {},
  wd = {};
const lR = tr(sj);
var mg;
function tm() {
  return (
    mg ||
      ((mg = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = lR;
      })(wd)),
    wd
  );
}
var cR = Gs;
Object.defineProperty(em, "__esModule", { value: !0 });
var eb = (em.default = void 0),
  uR = cR(tm()),
  dR = c;
eb = em.default = (0, uR.default)(
  (0, dR.jsx)("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
  }),
  "MoreVert"
);
const fR = du(z7)({
    background: "rgba(0, 0, 0, 0.400)",
    transition: "all 0.2s",
  }),
  pR = du(ki)`
  color: white;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.3);
    color: rgb(219,255,116);
  }
`;
function ji({ options: e }) {
  const [t, n] = q.useState(null),
    r = !!t,
    o = (s) => {
      s.stopPropagation(), s.preventDefault(), n(s.currentTarget);
    },
    i = () => {
      n(null);
    };
  return c.jsxs("div", {
    className: "d-flex justify-content-center",
    children: [
      c.jsx(pR, {
        "aria-label": "more",
        "aria-controls": "long-menu",
        "aria-haspopup": "true",
        onClick: o,
        color: "inherit",
        children: c.jsx(eb, {}),
      }),
      c.jsx(fR, {
        id: "long-menu",
        anchorEl: t,
        open: r,
        onClose: i,
        MenuListProps: { "aria-labelledby": "long-menu" },
        children: e.map((s) =>
          c.jsx(
            aR,
            {
              onClick: (a) => {
                a.stopPropagation(), i(), s.onClick();
              },
              children: s.label,
            },
            s.label
          )
        ),
      }),
    ],
  });
}
const op = ({ text: e }) =>
    c.jsx("p", {
      children: e
        .split("</br>")
        .map((t, n) =>
          c.jsxs(
            "p",
            {
              children: [
                t,
                n !== t.split("</br>").length - 1 && c.jsx("br", {}),
              ],
            },
            n
          )
        ),
    }),
  hR = ({ menuOptionsArray: e, activUser: t, roomId: n, myProfile: r }) => {
    const [o, i] = g.useState([]),
      s = tt(),
      a = g.useRef(null);
    function l(m, b) {
      const _ = new Date(m),
        v = `${u(_.getHours())}:${u(_.getMinutes())}`,
        y = u(_.getDate()),
        w = u(_.getMonth() + 1),
        S = _.getFullYear();
      return { time: `${v}`, date: `${y}.${w}.${S}` }[b];
    }
    function u(m) {
      return m.toString().padStart(2, "0");
    }
    const d = (m) => new Date(m).toLocaleDateString(),
      f = async () => {
        try {
          const m = await H.get(
            `https://social-netword-fsociety-gamma.vercel.app/chat/get_chat_history/${n}`
          );
          i(m.data), setTimeout(p, 1e3);
        } catch (m) {
          console.log(m);
        }
      },
      p = () => {
        var m;
        (m = a.current) == null || m.scrollIntoView({ behavior: "smooth" });
      };
    g.useEffect(p, [o]),
      g.useEffect(() => {
        f();
        const b = setInterval(async () => {
          try {
            (
              await H.get(
                `https://social-netword-fsociety-gamma.vercel.app/chat/check_new_messages/${r.name}`
              )
            ).data.messages.forEach((v) => {
              i((y) => [...y, v]);
            });
          } catch (_) {
            console.error("Error fetching chat data:", _);
          }
        }, 3e3);
        return () => clearInterval(b);
      }, [t.name, n]);
    const x = async (m) => {
        const b = new FormData();
        b.append("room_id", n.toString()),
          r && b.append("sender_name", r.name),
          b.append("text", m),
          await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/chat/create_message/",
            b
          ),
          f();
      },
      h = () => {
        s(`/profile/${t.name}`);
      };
    return c.jsx("div", {
      className: Mt.chat__layout,
      children: c.jsxs("div", {
        className: Mt.chat__container,
        children: [
          c.jsx("div", {
            className: Mt.chat__top__container,
            children: c.jsxs("div", {
              className: "row",
              children: [
                c.jsx("div", {
                  className: "col-6",
                  children: c.jsxs("div", {
                    onClick: h,
                    className: Mt.user__chat,
                    children: [
                      c.jsx("div", {
                        className: Mt.avatar,
                        children: c.jsx("img", {
                          src: t.avatar.slice(13),
                          alt: "avatar",
                        }),
                      }),
                      c.jsx("div", {
                        className: Mt.avatar__info,
                        children: c.jsx("h3", { children: t.name }),
                      }),
                    ],
                  }),
                }),
                c.jsx("div", {
                  className:
                    "col-6 d-flex align-items-center justify-content-end",
                  children: c.jsx(ji, { options: e }),
                }),
              ],
            }),
          }),
          c.jsxs("div", {
            className: Mt.messages__container,
            children: [
              r
                ? o.map((m, b) =>
                    c.jsxs(c.Fragment, {
                      children: [
                        b === 0 || d(m.timestamp) !== d(o[b - 1].timestamp)
                          ? c.jsx("div", {
                              className: "row",
                              children: c.jsx("div", {
                                className: "col-12",
                                children: c.jsxs("div", {
                                  className: Mt.date__separator__container,
                                  children: [
                                    c.jsx("hr", {}),
                                    c.jsx("p", {
                                      className: Mt.date__separator,
                                      children: d(m.timestamp),
                                    }),
                                    c.jsx("hr", {}),
                                  ],
                                }),
                              }),
                            })
                          : null,
                        m.sender.name != r.name
                          ? c.jsx(
                              "div",
                              {
                                className: "row d-flex justify-content-start",
                                children: c.jsxs("div", {
                                  className: "col-12 d-flex align-items-center",
                                  children: [
                                    c.jsx("div", {
                                      className: Mt.message__received,
                                      children: c.jsx(op, { text: m.text }),
                                    }),
                                    c.jsx("span", {
                                      className: Mt.message__staptime,
                                      children: l(m.timestamp, "time"),
                                    }),
                                  ],
                                }),
                              },
                              b
                            )
                          : c.jsx(
                              "div",
                              {
                                className: "row d-flex justify-content-end",
                                children: c.jsxs("div", {
                                  className:
                                    "col-12 d-flex justify-content-end align-items-center",
                                  children: [
                                    c.jsx("span", {
                                      className: Mt.message__staptime,
                                      children: l(m.timestamp, "time"),
                                    }),
                                    c.jsx("div", {
                                      className: Mt.message__sender,
                                      children: c.jsx(op, { text: m.text }),
                                    }),
                                  ],
                                }),
                              },
                              b
                            ),
                      ],
                    })
                  )
                : null,
              c.jsx("div", { ref: a }),
            ],
          }),
          c.jsx("div", {
            className: "input__message",
            children: c.jsx(B2, { onEnter: x, placeholder: "Type a message" }),
          }),
        ],
      }),
    });
  };
function nm(e, t) {
  return e.length <= t ? e : e.substring(0, t) + "...";
}
const mR = "_chat__container_qksnf_1",
  gR = "_chat__title_qksnf_8",
  vR = "_chat__item_qksnf_14",
  yR = "_chat__list_qksnf_19",
  _R = "_chat__message_qksnf_23",
  xR = "_active_qksnf_31",
  bR = "_avatar__info_qksnf_37",
  gr = {
    chat__container: mR,
    chat__title: gR,
    chat__item: vR,
    chat__list: yR,
    chat__message: _R,
    active: xR,
    avatar__info: bR,
  },
  wR = ({ isActive: e, onClick: t, user: n }) =>
    c.jsx("div", {
      className: e ? `${gr.active} ${gr.chat__item}}` : `${gr.chat__item}`,
      onClick: t,
      children: c.jsx("div", {
        className: gr.avatar__info,
        children: c.jsxs("div", {
          className: "row d-flex align-items-center",
          children: [
            c.jsx("div", {
              className: "col-7",
              children: c.jsxs("div", {
                className: "row d-flex align-items-center",
                children: [
                  c.jsx("div", {
                    className: "col-6",
                    children: c.jsx("img", {
                      src: n.avatar.slice(13),
                      alt: "avatar",
                    }),
                  }),
                  c.jsx("div", {
                    className: "col-6",
                    children: c.jsx("h4", { children: n.name }),
                  }),
                ],
              }),
            }),
            c.jsx("div", {
              className: "col-5",
              children:
                n.bio.trim().length > 0
                  ? c.jsx("p", {
                      className: gr.chat__message,
                      children: nm(n.bio, 15),
                    })
                  : null,
            }),
          ],
        }),
      }),
    }),
  SR = ({ chatList: e, onUserClick: t, myName: n }) => {
    const [r, o] = g.useState(0),
      i = (s) => {
        o(s);
      };
    return (
      g.useEffect(() => {
        if (e.length > 0) {
          const s = e[0].receiver.name === n ? e[0].sender : e[0].receiver;
          t(s, e[0].id);
        }
      }, [e, n]),
      c.jsxs("div", {
        className: gr.chat__container,
        children: [
          c.jsx("h2", { className: gr.chat__title, children: "Chats" }),
          c.jsx("div", {
            className: gr.chat__list,
            children: e.map((s, a) =>
              c.jsx(
                wR,
                {
                  isActive: a === r,
                  onClick: () => {
                    i(a),
                      t(s.receiver.name === n ? s.sender : s.receiver, s.id);
                  },
                  user: s.receiver.name === n ? s.sender : s.receiver,
                },
                a
              )
            ),
          }),
        ],
      })
    );
  },
  CR = () => {
    const e = g.useContext(mo),
      [t, n] = g.useState([]),
      [r, o] = g.useState(null),
      [i, s] = g.useState(0);
    g.useEffect(() => {
      (async () => {
        if (e)
          try {
            const p = await H.get(
              `https://social-netword-fsociety-gamma.vercel.app/chat/user_chat_rooms/${e.name}`
            );
            n(p.data), p.data.length > 0 && o(p.data[0].receiver);
          } catch (p) {
            console.error("Error fetching user data:", p);
          }
      })();
    }, [e]);
    const a = (f, p) => {
        o(f), s(p);
      },
      u = {
        label: "Delete chat",
        onClick: async () => {
          try {
            const f = new FormData();
            f.append("room_id", i.toString()),
              await H.post(
                "https://social-netword-fsociety-gamma.vercel.app/chat/delete_chat/",
                f
              ),
              window.location.reload();
          } catch (f) {
            console.log(f);
          }
        },
      },
      d = [];
    return (
      d.push(u),
      c.jsxs("div", {
        className: "d-flex justify-content-between",
        children: [
          r && e
            ? c.jsx(hR, {
                myProfile: e,
                menuOptionsArray: d,
                activUser: r,
                roomId: i,
              })
            : null,
          c.jsx("div", {
            className: "col-3",
            children: e
              ? c.jsx(SR, { myName: e.name, chatList: t, onUserClick: a })
              : null,
          }),
        ],
      })
    );
  },
  kR = "_home__layout_h05y6_1",
  jR = "_home__title_h05y6_12",
  ER = { home__layout: kR, home__title: jR },
  $R = "_recomendation__item_u17dh_1",
  RR = "_friend__btn__unfolow_u17dh_44",
  Sd = { recomendation__item: $R, friend__btn__unfolow: RR },
  PR = ({ myName: e, user: t, handleClickCard: n, frendList: r }) => {
    const [o, i] = g.useState(!1);
    g.useEffect(() => {
      r.length !== 0 && i(r.some((l) => l.name === t.name));
    }, [r, t.name]);
    const s = async (l) => {
        l.stopPropagation(), l.preventDefault();
        try {
          if (!localStorage.getItem("accessToken")) {
            console.error("Access token not found in localStorage");
            return;
          }
          await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/friend/add/",
            { friend_name: t.name, user_name: e }
          ),
            i(!0);
        } catch (u) {
          console.error("Error adding friend:", u);
        }
      },
      a = async (l) => {
        l.stopPropagation(), l.preventDefault();
        try {
          if (!localStorage.getItem("accessToken")) {
            console.error("Access token not found in localStorage");
            return;
          }
          await H.delete(
            "https://social-netword-fsociety-gamma.vercel.app/friend/remove/",
            { data: { friend_name: t.name, user_name: e } }
          ),
            i(!1);
        } catch (u) {
          console.error("Error removing friend:", u);
        }
      };
    return c.jsx("div", {
      className: "row",
      children: c.jsx("div", {
        className: "col-12",
        children: c.jsxs("div", {
          onClick: () => n(t.name),
          className: Sd.recomendation__item,
          children: [
            c.jsxs("div", {
              className: "d-flex align-items-center",
              children: [
                c.jsx("img", { src: t.avatar.slice(13), alt: "avatar" }),
                c.jsx("h3", { children: nm(t.name, 11) }),
              ],
            }),
            o
              ? c.jsx("button", {
                  className: Sd.friend__btn__unfolow,
                  onClick: a,
                  children: "Unfollow",
                })
              : c.jsx("button", {
                  className: Sd.friend__btn__folow,
                  onClick: s,
                  children: "Follow",
                }),
          ],
        }),
      }),
    });
  },
  NR = "_recomendation__list_1jvap_1",
  TR = "_recomendation__list__container_1jvap_13",
  OR = "_recomendation__title_1jvap_22",
  Cd = {
    recomendation__list: NR,
    recomendation__list__container: TR,
    recomendation__title: OR,
  },
  MR = [
    "className",
    "elementType",
    "ownerState",
    "externalForwardedProps",
    "getSlotOwnerState",
    "internalForwardedProps",
  ],
  LR = ["component", "slots", "slotProps"],
  AR = ["component"];
function gg(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: s,
      internalForwardedProps: a,
    } = t,
    l = Y(t, MR),
    {
      component: u,
      slots: d = { [e]: void 0 },
      slotProps: f = { [e]: void 0 },
    } = i,
    p = Y(i, LR),
    x = d[e] || r,
    h = W2(f[e], o),
    m = V2(
      j({ className: n }, l, {
        externalForwardedProps: e === "root" ? p : void 0,
        externalSlotProps: h,
      })
    ),
    {
      props: { component: b },
      internalRef: _,
    } = m,
    v = Y(m.props, AR),
    y = xt(_, h == null ? void 0 : h.ref, t.ref),
    w = s ? s(v) : {},
    S = j({}, o, w),
    C = e === "root" ? b || u : b,
    k = U2(
      x,
      j(
        {},
        e === "root" && !u && !d[e] && a,
        e !== "root" && !d[e] && a,
        v,
        C && { as: C },
        { ref: y }
      ),
      S
    );
  return (
    Object.keys(w).forEach(($) => {
      delete k[$];
    }),
    [x, k]
  );
}
const IR = ["onChange", "maxRows", "minRows", "style", "value"];
function ja(e) {
  return parseInt(e, 10) || 0;
}
const zR = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function FR(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const DR = g.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
    l = Y(t, IR),
    { current: u } = g.useRef(a != null),
    d = g.useRef(null),
    f = xt(n, d),
    p = g.useRef(null),
    x = g.useCallback(() => {
      const b = d.current,
        v = Mr(b).getComputedStyle(b);
      if (v.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const y = p.current;
      (y.style.width = v.width),
        (y.value = b.value || t.placeholder || "x"),
        y.value.slice(-1) ===
          `
` && (y.value += " ");
      const w = v.boxSizing,
        S = ja(v.paddingBottom) + ja(v.paddingTop),
        C = ja(v.borderBottomWidth) + ja(v.borderTopWidth),
        k = y.scrollHeight;
      y.value = "x";
      const $ = y.scrollHeight;
      let M = k;
      i && (M = Math.max(Number(i) * $, M)),
        o && (M = Math.min(Number(o) * $, M)),
        (M = Math.max(M, $));
      const O = M + (w === "border-box" ? S + C : 0),
        A = Math.abs(M - k) <= 1;
      return { outerHeightStyle: O, overflowing: A };
    }, [o, i, t.placeholder]),
    h = g.useCallback(() => {
      const b = x();
      if (FR(b)) return;
      const _ = d.current;
      (_.style.height = `${b.outerHeightStyle}px`),
        (_.style.overflow = b.overflowing ? "hidden" : "");
    }, [x]);
  er(() => {
    const b = () => {
      h();
    };
    let _;
    const v = _h(b),
      y = d.current,
      w = Mr(y);
    w.addEventListener("resize", v);
    let S;
    return (
      typeof ResizeObserver < "u" &&
        ((S = new ResizeObserver(b)), S.observe(y)),
      () => {
        v.clear(),
          cancelAnimationFrame(_),
          w.removeEventListener("resize", v),
          S && S.disconnect();
      }
    );
  }, [x, h]),
    er(() => {
      h();
    });
  const m = (b) => {
    u || h(), r && r(b);
  };
  return c.jsxs(g.Fragment, {
    children: [
      c.jsx("textarea", j({ value: a, onChange: m, ref: f, rows: i }, l)),
      c.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: p,
        tabIndex: -1,
        style: j({}, zR.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function BR(e) {
  return we("MuiAlert", e);
}
const UR = ve("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError",
  ]),
  vg = UR,
  HR = Fe(
    c.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined"
  ),
  WR = Fe(
    c.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined"
  ),
  VR = Fe(
    c.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline"
  ),
  KR = Fe(
    c.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined"
  ),
  qR = Fe(
    c.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  GR = [
    "action",
    "children",
    "className",
    "closeText",
    "color",
    "components",
    "componentsProps",
    "icon",
    "iconMapping",
    "onClose",
    "role",
    "severity",
    "slotProps",
    "slots",
    "variant",
  ],
  YR = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      i = {
        root: ["root", `${t}${G(n || r)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return Ce(i, BR, o);
  },
  QR = Q(gu, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${G(n.color || n.severity)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light" ? Q0 : X0,
      r = e.palette.mode === "light" ? X0 : Q0,
      o = t.color || t.severity;
    return j(
      {},
      e.typography.body2,
      { backgroundColor: "transparent", display: "flex", padding: "6px 16px" },
      o &&
        t.variant === "standard" && {
          color: e.vars
            ? e.vars.palette.Alert[`${o}Color`]
            : n(e.palette[o].light, 0.6),
          backgroundColor: e.vars
            ? e.vars.palette.Alert[`${o}StandardBg`]
            : r(e.palette[o].light, 0.9),
          [`& .${vg.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${o}IconColor`] }
            : { color: e.palette[o].main },
        },
      o &&
        t.variant === "outlined" && {
          color: e.vars
            ? e.vars.palette.Alert[`${o}Color`]
            : n(e.palette[o].light, 0.6),
          border: `1px solid ${(e.vars || e).palette[o].light}`,
          [`& .${vg.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${o}IconColor`] }
            : { color: e.palette[o].main },
        },
      o &&
        t.variant === "filled" &&
        j(
          { fontWeight: e.typography.fontWeightMedium },
          e.vars
            ? {
                color: e.vars.palette.Alert[`${o}FilledColor`],
                backgroundColor: e.vars.palette.Alert[`${o}FilledBg`],
              }
            : {
                backgroundColor:
                  e.palette.mode === "dark"
                    ? e.palette[o].dark
                    : e.palette[o].main,
                color: e.palette.getContrastText(e.palette[o].main),
              }
        )
    );
  }),
  XR = Q("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  JR = Q("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  yg = Q("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  _g = {
    success: c.jsx(HR, { fontSize: "inherit" }),
    warning: c.jsx(WR, { fontSize: "inherit" }),
    error: c.jsx(VR, { fontSize: "inherit" }),
    info: c.jsx(KR, { fontSize: "inherit" }),
  },
  ZR = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiAlert" }),
      {
        action: o,
        children: i,
        className: s,
        closeText: a = "Close",
        color: l,
        components: u = {},
        componentsProps: d = {},
        icon: f,
        iconMapping: p = _g,
        onClose: x,
        role: h = "alert",
        severity: m = "success",
        slotProps: b = {},
        slots: _ = {},
        variant: v = "standard",
      } = r,
      y = Y(r, GR),
      w = j({}, r, { color: l, severity: m, variant: v }),
      S = YR(w),
      C = {
        slots: j({ closeButton: u.CloseButton, closeIcon: u.CloseIcon }, _),
        slotProps: j({}, d, b),
      },
      [k, $] = gg("closeButton", {
        elementType: ki,
        externalForwardedProps: C,
        ownerState: w,
      }),
      [M, O] = gg("closeIcon", {
        elementType: qR,
        externalForwardedProps: C,
        ownerState: w,
      });
    return c.jsxs(
      QR,
      j(
        {
          role: h,
          elevation: 0,
          ownerState: w,
          className: Z(S.root, s),
          ref: n,
        },
        y,
        {
          children: [
            f !== !1
              ? c.jsx(XR, {
                  ownerState: w,
                  className: S.icon,
                  children: f || p[m] || _g[m],
                })
              : null,
            c.jsx(JR, { ownerState: w, className: S.message, children: i }),
            o != null
              ? c.jsx(yg, { ownerState: w, className: S.action, children: o })
              : null,
            o == null && x
              ? c.jsx(yg, {
                  ownerState: w,
                  className: S.action,
                  children: c.jsx(
                    k,
                    j(
                      {
                        size: "small",
                        "aria-label": a,
                        title: a,
                        color: "inherit",
                        onClick: x,
                      },
                      $,
                      { children: c.jsx(M, j({ fontSize: "small" }, O)) }
                    )
                  ),
                })
              : null,
          ],
        }
      )
    );
  }),
  tb = ZR;
function vu({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const eP = g.createContext(void 0),
  rm = eP;
function ea() {
  return g.useContext(rm);
}
function tP(e) {
  return c.jsx($8, j({}, e, { defaultTheme: tu, themeId: Ys }));
}
function xg(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ip(e, t = !1) {
  return (
    e &&
    ((xg(e.value) && e.value !== "") ||
      (t && xg(e.defaultValue) && e.defaultValue !== ""))
  );
}
function nP(e) {
  return e.startAdornment;
}
function rP(e) {
  return we("MuiInputBase", e);
}
const oP = ve("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  sp = oP,
  iP = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  sP = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${G(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  aP = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  lP = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: d,
        readOnly: f,
        size: p,
        startAdornment: x,
        type: h,
      } = e,
      m = {
        root: [
          "root",
          `color${G(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          p && p !== "medium" && `size${G(p)}`,
          d && "multiline",
          x && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          f && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          h === "search" && "inputTypeSearch",
          d && "inputMultiline",
          p === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          x && "inputAdornedStart",
          i && "inputAdornedEnd",
          f && "readOnly",
        ],
      };
    return Ce(m, rP, t);
  },
  cP = Q("div", { name: "MuiInputBase", slot: "Root", overridesResolver: sP })(
    ({ theme: e, ownerState: t }) =>
      j(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${sp.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          j({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  uP = Q("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: aP,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = j(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return j(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${sp.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${sp.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  dP = c.jsx(tP, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  fP = g.forwardRef(function (t, n) {
    var r;
    const o = ke({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: u = {},
        componentsProps: d = {},
        defaultValue: f,
        disabled: p,
        disableInjectingGlobalStyles: x,
        endAdornment: h,
        fullWidth: m = !1,
        id: b,
        inputComponent: _ = "input",
        inputProps: v = {},
        inputRef: y,
        maxRows: w,
        minRows: S,
        multiline: C = !1,
        name: k,
        onBlur: $,
        onChange: M,
        onClick: O,
        onFocus: A,
        onKeyDown: z,
        onKeyUp: U,
        placeholder: B,
        readOnly: D,
        renderSuffix: R,
        rows: P,
        slotProps: E = {},
        slots: N = {},
        startAdornment: T,
        type: W = "text",
        value: V,
      } = o,
      le = Y(o, iP),
      J = v.value != null ? v.value : V,
      { current: re } = g.useRef(J != null),
      oe = g.useRef(),
      pe = g.useCallback((Me) => {}, []),
      st = xt(oe, y, v.ref, pe),
      [ee, Se] = g.useState(!1),
      ie = ea(),
      ye = vu({
        props: o,
        muiFormControl: ie,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (ye.focused = ie ? ie.focused : ee),
      g.useEffect(() => {
        !ie && p && ee && (Se(!1), $ && $());
      }, [ie, p, ee, $]);
    const ce = ie && ie.onFilled,
      je = ie && ie.onEmpty,
      He = g.useCallback(
        (Me) => {
          ip(Me) ? ce && ce() : je && je();
        },
        [ce, je]
      );
    er(() => {
      re && He({ value: J });
    }, [J, He, re]);
    const go = (Me) => {
        if (ye.disabled) {
          Me.stopPropagation();
          return;
        }
        A && A(Me),
          v.onFocus && v.onFocus(Me),
          ie && ie.onFocus ? ie.onFocus(Me) : Se(!0);
      },
      xn = (Me) => {
        $ && $(Me),
          v.onBlur && v.onBlur(Me),
          ie && ie.onBlur ? ie.onBlur(Me) : Se(!1);
      },
      bn = (Me, ...te) => {
        if (!re) {
          const Pi = Me.target || oe.current;
          if (Pi == null) throw new Error(Or(1));
          He({ value: Pi.value });
        }
        v.onChange && v.onChange(Me, ...te), M && M(Me, ...te);
      };
    g.useEffect(() => {
      He(oe.current);
    }, []);
    const vo = (Me) => {
      oe.current && Me.currentTarget === Me.target && oe.current.focus(),
        O && O(Me);
    };
    let wn = _,
      pt = v;
    C &&
      wn === "input" &&
      (P
        ? (pt = j({ type: void 0, minRows: P, maxRows: P }, pt))
        : (pt = j({ type: void 0, maxRows: w, minRows: S }, pt)),
      (wn = DR));
    const yo = (Me) => {
      He(
        Me.animationName === "mui-auto-fill-cancel"
          ? oe.current
          : { value: "x" }
      );
    };
    g.useEffect(() => {
      ie && ie.setAdornedStart(!!T);
    }, [ie, T]);
    const zn = j({}, o, {
        color: ye.color || "primary",
        disabled: ye.disabled,
        endAdornment: h,
        error: ye.error,
        focused: ye.focused,
        formControl: ie,
        fullWidth: m,
        hiddenLabel: ye.hiddenLabel,
        multiline: C,
        size: ye.size,
        startAdornment: T,
        type: W,
      }),
      Qe = lP(zn),
      ir = N.root || u.Root || cP,
      $i = E.root || d.root || {},
      Ri = N.input || u.Input || uP;
    return (
      (pt = j({}, pt, (r = E.input) != null ? r : d.input)),
      c.jsxs(g.Fragment, {
        children: [
          !x && dP,
          c.jsxs(
            ir,
            j(
              {},
              $i,
              !Yl(ir) && { ownerState: j({}, zn, $i.ownerState) },
              { ref: n, onClick: vo },
              le,
              {
                className: Z(
                  Qe.root,
                  $i.className,
                  l,
                  D && "MuiInputBase-readOnly"
                ),
                children: [
                  T,
                  c.jsx(rm.Provider, {
                    value: null,
                    children: c.jsx(
                      Ri,
                      j(
                        {
                          ownerState: zn,
                          "aria-invalid": ye.error,
                          "aria-describedby": i,
                          autoComplete: s,
                          autoFocus: a,
                          defaultValue: f,
                          disabled: ye.disabled,
                          id: b,
                          onAnimationStart: yo,
                          name: k,
                          placeholder: B,
                          readOnly: D,
                          required: ye.required,
                          rows: P,
                          value: J,
                          onKeyDown: z,
                          onKeyUp: U,
                          type: W,
                        },
                        pt,
                        !Yl(Ri) && {
                          as: wn,
                          ownerState: j({}, zn, pt.ownerState),
                        },
                        {
                          ref: st,
                          className: Z(
                            Qe.input,
                            pt.className,
                            D && "MuiInputBase-readOnly"
                          ),
                          onBlur: xn,
                          onChange: bn,
                          onFocus: go,
                        }
                      )
                    ),
                  }),
                  h,
                  R ? R(j({}, ye, { startAdornment: T })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  pP = fP,
  hP = ve("MuiBox", ["root"]),
  mP = hP,
  gP = Lx(),
  vP = P8({
    themeId: Ys,
    defaultTheme: gP,
    defaultClassName: mP.root,
    generateClassName: Sh.generate,
  }),
  yP = vP;
function _P(e) {
  return we("MuiButton", e);
}
const xP = ve("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Ea = xP,
  bP = g.createContext({}),
  wP = bP,
  SP = g.createContext(void 0),
  CP = SP,
  kP = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  jP = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${G(t)}`,
          `size${G(o)}`,
          `${i}Size${G(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${G(o)}`],
        endIcon: ["endIcon", `iconSize${G(o)}`],
      },
      l = Ce(a, _P, s);
    return j({}, s, l);
  },
  nb = (e) =>
    j(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  EP = Q(hu, {
    shouldForwardProp: (e) => ho(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${G(n.color)}`],
        t[`size${G(n.size)}`],
        t[`${n.variant}Size${G(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return j(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": j(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : $t(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : $t(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : $t(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": j(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Ea.focusVisible}`]: j(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Ea.disabled}`]: j(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${$t(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Ea.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Ea.disabled}`]: { boxShadow: "none" },
      }
  ),
  $P = Q("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${G(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    j(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      nb(e)
    )
  ),
  RP = Q("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${G(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    j(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      nb(e)
    )
  ),
  PP = g.forwardRef(function (t, n) {
    const r = g.useContext(wP),
      o = g.useContext(CP),
      i = wh(r, t),
      s = ke({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: d,
        disabled: f = !1,
        disableElevation: p = !1,
        disableFocusRipple: x = !1,
        endIcon: h,
        focusVisibleClassName: m,
        fullWidth: b = !1,
        size: _ = "medium",
        startIcon: v,
        type: y,
        variant: w = "text",
      } = s,
      S = Y(s, kP),
      C = j({}, s, {
        color: l,
        component: u,
        disabled: f,
        disableElevation: p,
        disableFocusRipple: x,
        fullWidth: b,
        size: _,
        type: y,
        variant: w,
      }),
      k = jP(C),
      $ =
        v && c.jsx($P, { className: k.startIcon, ownerState: C, children: v }),
      M = h && c.jsx(RP, { className: k.endIcon, ownerState: C, children: h }),
      O = o || "";
    return c.jsxs(
      EP,
      j(
        {
          ownerState: C,
          className: Z(r.className, k.root, d, O),
          component: u,
          disabled: f,
          focusRipple: !x,
          focusVisibleClassName: Z(k.focusVisible, m),
          ref: n,
          type: y,
        },
        S,
        { classes: k, children: [$, a, M] }
      )
    );
  }),
  yu = PP;
function NP(e) {
  return we("PrivateSwitchBase", e);
}
ve("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const TP = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  OP = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${G(o)}`],
        input: ["input"],
      };
    return Ce(i, NP, t);
  },
  MP = Q(hu)(({ ownerState: e }) =>
    j(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  LP = Q("input", { shouldForwardProp: ho })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  AP = g.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: a,
        disabled: l,
        disableFocusRipple: u = !1,
        edge: d = !1,
        icon: f,
        id: p,
        inputProps: x,
        inputRef: h,
        name: m,
        onBlur: b,
        onChange: _,
        onFocus: v,
        readOnly: y,
        required: w = !1,
        tabIndex: S,
        type: C,
        value: k,
      } = t,
      $ = Y(t, TP),
      [M, O] = bh({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      A = ea(),
      z = (N) => {
        v && v(N), A && A.onFocus && A.onFocus(N);
      },
      U = (N) => {
        b && b(N), A && A.onBlur && A.onBlur(N);
      },
      B = (N) => {
        if (N.nativeEvent.defaultPrevented) return;
        const T = N.target.checked;
        O(T), _ && _(N, T);
      };
    let D = l;
    A && typeof D > "u" && (D = A.disabled);
    const R = C === "checkbox" || C === "radio",
      P = j({}, t, { checked: M, disabled: D, disableFocusRipple: u, edge: d }),
      E = OP(P);
    return c.jsxs(
      MP,
      j(
        {
          component: "span",
          className: Z(E.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: D,
          tabIndex: null,
          role: void 0,
          onFocus: z,
          onBlur: U,
          ownerState: P,
          ref: n,
        },
        $,
        {
          children: [
            c.jsx(
              LP,
              j(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: a,
                  className: E.input,
                  disabled: D,
                  id: R ? p : void 0,
                  name: m,
                  onChange: B,
                  readOnly: y,
                  ref: h,
                  required: w,
                  ownerState: P,
                  tabIndex: S,
                  type: C,
                },
                C === "checkbox" && k === void 0 ? {} : { value: k },
                x
              )
            ),
            M ? i : f,
          ],
        }
      )
    );
  }),
  IP = AP;
function zP(e) {
  return we("MuiCircularProgress", e);
}
ve("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const FP = [
  "className",
  "color",
  "disableShrink",
  "size",
  "style",
  "thickness",
  "value",
  "variant",
];
let _u = (e) => e,
  bg,
  wg,
  Sg,
  Cg;
const cr = 44,
  DP = bi(
    bg ||
      (bg = _u`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  BP = bi(
    wg ||
      (wg = _u`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  UP = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${G(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${G(n)}`, o && "circleDisableShrink"],
      };
    return Ce(i, zP, t);
  },
  HP = Q("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${G(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      j(
        { display: "inline-block" },
        e.variant === "determinate" && {
          transition: t.transitions.create("transform"),
        },
        e.color !== "inherit" && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      Jc(
        Sg ||
          (Sg = _u`
      animation: ${0} 1.4s linear infinite;
    `),
        DP
      )
  ),
  WP = Q("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  VP = Q("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${G(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      j(
        { stroke: "currentColor" },
        e.variant === "determinate" && {
          transition: t.transitions.create("stroke-dashoffset"),
        },
        e.variant === "indeterminate" && {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      !e.disableShrink &&
      Jc(
        Cg ||
          (Cg = _u`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        BP
      )
  ),
  KP = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: d = 0,
        variant: f = "indeterminate",
      } = r,
      p = Y(r, FP),
      x = j({}, r, {
        color: i,
        disableShrink: s,
        size: a,
        thickness: u,
        value: d,
        variant: f,
      }),
      h = UP(x),
      m = {},
      b = {},
      _ = {};
    if (f === "determinate") {
      const v = 2 * Math.PI * ((cr - u) / 2);
      (m.strokeDasharray = v.toFixed(3)),
        (_["aria-valuenow"] = Math.round(d)),
        (m.strokeDashoffset = `${(((100 - d) / 100) * v).toFixed(3)}px`),
        (b.transform = "rotate(-90deg)");
    }
    return c.jsx(
      HP,
      j(
        {
          className: Z(h.root, o),
          style: j({ width: a, height: a }, b, l),
          ownerState: x,
          ref: n,
          role: "progressbar",
        },
        _,
        p,
        {
          children: c.jsx(WP, {
            className: h.svg,
            ownerState: x,
            viewBox: `${cr / 2} ${cr / 2} ${cr} ${cr}`,
            children: c.jsx(VP, {
              className: h.circle,
              style: m,
              ownerState: x,
              cx: cr,
              cy: cr,
              r: (cr - u) / 2,
              fill: "none",
              strokeWidth: u,
            }),
          }),
        }
      )
    );
  }),
  Br = KP,
  qP = K8({
    createStyledComponent: Q("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${G(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => ke({ props: e, name: "MuiContainer" }),
  }),
  GP = qP;
function YP(e) {
  return we("MuiDialog", e);
}
const QP = ve("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  kd = QP,
  XP = g.createContext({}),
  JP = XP,
  ZP = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  eN = Q(Q2, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  tN = (e) => {
    const {
        classes: t,
        scroll: n,
        maxWidth: r,
        fullWidth: o,
        fullScreen: i,
      } = e,
      s = {
        root: ["root"],
        container: ["container", `scroll${G(n)}`],
        paper: [
          "paper",
          `paperScroll${G(n)}`,
          `paperWidth${G(String(r))}`,
          o && "paperFullWidth",
          i && "paperFullScreen",
        ],
      };
    return Ce(s, YP, t);
  },
  nN = Q(X2, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  rN = Q("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.container, t[`scroll${G(n.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    j(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&::after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  oN = Q(gu, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`scrollPaper${G(n.scroll)}`],
        t[`paperWidth${G(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    j(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
        [`&.${kd.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${kd.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${kd.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  iN = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiDialog" }),
      o = mu(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": s,
        "aria-labelledby": a,
        BackdropComponent: l,
        BackdropProps: u,
        children: d,
        className: f,
        disableEscapeKeyDown: p = !1,
        fullScreen: x = !1,
        fullWidth: h = !1,
        maxWidth: m = "sm",
        onBackdropClick: b,
        onClose: _,
        open: v,
        PaperComponent: y = gu,
        PaperProps: w = {},
        scroll: S = "paper",
        TransitionComponent: C = Y2,
        transitionDuration: k = i,
        TransitionProps: $,
      } = r,
      M = Y(r, ZP),
      O = j({}, r, {
        disableEscapeKeyDown: p,
        fullScreen: x,
        fullWidth: h,
        maxWidth: m,
        scroll: S,
      }),
      A = tN(O),
      z = g.useRef(),
      U = (P) => {
        z.current = P.target === P.currentTarget;
      },
      B = (P) => {
        z.current &&
          ((z.current = null), b && b(P), _ && _(P, "backdropClick"));
      },
      D = xh(a),
      R = g.useMemo(() => ({ titleId: D }), [D]);
    return c.jsx(
      nN,
      j(
        {
          className: Z(A.root, f),
          closeAfterTransition: !0,
          components: { Backdrop: eN },
          componentsProps: { backdrop: j({ transitionDuration: k, as: l }, u) },
          disableEscapeKeyDown: p,
          onClose: _,
          open: v,
          ref: n,
          onClick: B,
          ownerState: O,
        },
        M,
        {
          children: c.jsx(
            C,
            j({ appear: !0, in: v, timeout: k, role: "presentation" }, $, {
              children: c.jsx(rN, {
                className: Z(A.container),
                onMouseDown: U,
                ownerState: O,
                children: c.jsx(
                  oN,
                  j(
                    {
                      as: y,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": s,
                      "aria-labelledby": D,
                    },
                    w,
                    {
                      className: Z(A.paper, w.className),
                      ownerState: O,
                      children: c.jsx(JP.Provider, { value: R, children: d }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  xu = iN;
function sN(e) {
  return we("MuiDialogActions", e);
}
ve("MuiDialogActions", ["root", "spacing"]);
const aN = ["className", "disableSpacing"],
  lN = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return Ce({ root: ["root", !n && "spacing"] }, sN, t);
  },
  cN = Q("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    j(
      {
        display: "flex",
        alignItems: "center",
        padding: 8,
        justifyContent: "flex-end",
        flex: "0 0 auto",
      },
      !e.disableSpacing && {
        "& > :not(style) ~ :not(style)": { marginLeft: 8 },
      }
    )
  ),
  uN = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiDialogActions" }),
      { className: o, disableSpacing: i = !1 } = r,
      s = Y(r, aN),
      a = j({}, r, { disableSpacing: i }),
      l = lN(a);
    return c.jsx(cN, j({ className: Z(l.root, o), ownerState: a, ref: n }, s));
  }),
  rb = uN;
function dN(e) {
  return we("MuiDialogContent", e);
}
ve("MuiDialogContent", ["root", "dividers"]);
const fN = ve("MuiDialogTitle", ["root"]),
  pN = fN,
  hN = ["className", "dividers"],
  mN = (e) => {
    const { classes: t, dividers: n } = e;
    return Ce({ root: ["root", n && "dividers"] }, dN, t);
  },
  gN = Q("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    j(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${pN.root} + &`]: { paddingTop: 0 } }
    )
  ),
  vN = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiDialogContent" }),
      { className: o, dividers: i = !1 } = r,
      s = Y(r, hN),
      a = j({}, r, { dividers: i }),
      l = mN(a);
    return c.jsx(gN, j({ className: Z(l.root, o), ownerState: a, ref: n }, s));
  }),
  bu = vN;
function yN(e) {
  return we("MuiFormControl", e);
}
ve("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const _N = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  xN = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${G(n)}`, r && "fullWidth"] };
    return Ce(o, yN, t);
  },
  bN = Q("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      j({}, t.root, t[`margin${G(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    j(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  wN = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: d,
        fullWidth: f = !1,
        hiddenLabel: p = !1,
        margin: x = "none",
        required: h = !1,
        size: m = "medium",
        variant: b = "outlined",
      } = r,
      _ = Y(r, _N),
      v = j({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: f,
        hiddenLabel: p,
        margin: x,
        required: h,
        size: m,
        variant: b,
      }),
      y = xN(v),
      [w, S] = g.useState(() => {
        let U = !1;
        return (
          o &&
            g.Children.forEach(o, (B) => {
              if (!Ua(B, ["Input", "Select"])) return;
              const D = Ua(B, ["Select"]) ? B.props.input : B;
              D && nP(D.props) && (U = !0);
            }),
          U
        );
      }),
      [C, k] = g.useState(() => {
        let U = !1;
        return (
          o &&
            g.Children.forEach(o, (B) => {
              Ua(B, ["Input", "Select"]) &&
                (ip(B.props, !0) || ip(B.props.inputProps, !0)) &&
                (U = !0);
            }),
          U
        );
      }),
      [$, M] = g.useState(!1);
    l && $ && M(!1);
    const O = d !== void 0 && !l ? d : $;
    let A;
    const z = g.useMemo(
      () => ({
        adornedStart: w,
        setAdornedStart: S,
        color: s,
        disabled: l,
        error: u,
        filled: C,
        focused: O,
        fullWidth: f,
        hiddenLabel: p,
        size: m,
        onBlur: () => {
          M(!1);
        },
        onEmpty: () => {
          k(!1);
        },
        onFilled: () => {
          k(!0);
        },
        onFocus: () => {
          M(!0);
        },
        registerEffect: A,
        required: h,
        variant: b,
      }),
      [w, s, l, u, C, O, f, p, A, h, m, b]
    );
    return c.jsx(rm.Provider, {
      value: z,
      children: c.jsx(
        bN,
        j({ as: a, ownerState: v, className: Z(y.root, i), ref: n }, _, {
          children: o,
        })
      ),
    });
  }),
  SN = wN,
  CN = e9({
    createStyledComponent: Q("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => ke({ props: e, name: "MuiStack" }),
  }),
  kN = CN;
function jN(e) {
  return we("MuiFormControlLabel", e);
}
const EN = ve("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk",
  ]),
  Ji = EN,
  $N = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "required",
    "slotProps",
    "value",
  ],
  RN = (e) => {
    const {
        classes: t,
        disabled: n,
        labelPlacement: r,
        error: o,
        required: i,
      } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          `labelPlacement${G(r)}`,
          o && "error",
          i && "required",
        ],
        label: ["label", n && "disabled"],
        asterisk: ["asterisk", o && "error"],
      };
    return Ce(s, jN, t);
  },
  PN = Q("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ji.label}`]: t.label },
        t.root,
        t[`labelPlacement${G(n.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    j(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${Ji.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${Ji.label}`]: {
          [`&.${Ji.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      }
    )
  ),
  NN = Q("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ji.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  TN = g.forwardRef(function (t, n) {
    var r, o;
    const i = ke({ props: t, name: "MuiFormControlLabel" }),
      {
        className: s,
        componentsProps: a = {},
        control: l,
        disabled: u,
        disableTypography: d,
        label: f,
        labelPlacement: p = "end",
        required: x,
        slotProps: h = {},
      } = i,
      m = Y(i, $N),
      b = ea(),
      _ =
        (r = u ?? l.props.disabled) != null
          ? r
          : b == null
          ? void 0
          : b.disabled,
      v = x ?? l.props.required,
      y = { disabled: _, required: v };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((M) => {
      typeof l.props[M] > "u" && typeof i[M] < "u" && (y[M] = i[M]);
    });
    const w = vu({ props: i, muiFormControl: b, states: ["error"] }),
      S = j({}, i, {
        disabled: _,
        labelPlacement: p,
        required: v,
        error: w.error,
      }),
      C = RN(S),
      k = (o = h.typography) != null ? o : a.typography;
    let $ = f;
    return (
      $ != null &&
        $.type !== pg &&
        !d &&
        ($ = c.jsx(
          pg,
          j({ component: "span" }, k, {
            className: Z(C.label, k == null ? void 0 : k.className),
            children: $,
          })
        )),
      c.jsxs(
        PN,
        j({ className: Z(C.root, s), ownerState: S, ref: n }, m, {
          children: [
            g.cloneElement(l, y),
            v
              ? c.jsxs(kN, {
                  display: "block",
                  children: [
                    $,
                    c.jsxs(NN, {
                      ownerState: S,
                      "aria-hidden": !0,
                      className: C.asterisk,
                      children: [" ", "*"],
                    }),
                  ],
                })
              : $,
          ],
        })
      )
    );
  }),
  kg = TN;
function ON(e) {
  return we("MuiFormGroup", e);
}
ve("MuiFormGroup", ["root", "row", "error"]);
const MN = ["className", "row"],
  LN = (e) => {
    const { classes: t, row: n, error: r } = e;
    return Ce({ root: ["root", n && "row", r && "error"] }, ON, t);
  },
  AN = Q("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.row && t.row];
    },
  })(({ ownerState: e }) =>
    j(
      { display: "flex", flexDirection: "column", flexWrap: "wrap" },
      e.row && { flexDirection: "row" }
    )
  ),
  IN = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiFormGroup" }),
      { className: o, row: i = !1 } = r,
      s = Y(r, MN),
      a = ea(),
      l = vu({ props: r, muiFormControl: a, states: ["error"] }),
      u = j({}, r, { row: i, error: l.error }),
      d = LN(u);
    return c.jsx(AN, j({ className: Z(d.root, o), ownerState: u, ref: n }, s));
  }),
  zN = IN;
function FN(e) {
  return we("MuiFormLabel", e);
}
const tl = ve("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  DN = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  BN = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${G(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return Ce(l, FN, t);
  },
  UN = Q("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      j(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    j({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${tl.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${tl.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${tl.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  HN = Q("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${tl.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  WN = g.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      a = Y(r, DN),
      l = ea(),
      u = vu({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      d = j({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      f = BN(d);
    return c.jsxs(
      UN,
      j({ as: s, ownerState: d, className: Z(f.root, i), ref: n }, a, {
        children: [
          o,
          u.required &&
            c.jsxs(HN, {
              ownerState: d,
              "aria-hidden": !0,
              className: f.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  VN = WN,
  KN = Fe(
    c.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "RadioButtonUnchecked"
  ),
  qN = Fe(
    c.jsx("path", {
      d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",
    }),
    "RadioButtonChecked"
  ),
  GN = Q("span", { shouldForwardProp: ho })({
    position: "relative",
    display: "flex",
  }),
  YN = Q(KN)({ transform: "scale(1)" }),
  QN = Q(qN)(({ theme: e, ownerState: t }) =>
    j(
      {
        left: 0,
        position: "absolute",
        transform: "scale(0)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeIn,
          duration: e.transitions.duration.shortest,
        }),
      },
      t.checked && {
        transform: "scale(1)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeOut,
          duration: e.transitions.duration.shortest,
        }),
      }
    )
  );
function ob(e) {
  const { checked: t = !1, classes: n = {}, fontSize: r } = e,
    o = j({}, e, { checked: t });
  return c.jsxs(GN, {
    className: n.root,
    ownerState: o,
    children: [
      c.jsx(YN, { fontSize: r, className: n.background, ownerState: o }),
      c.jsx(QN, { fontSize: r, className: n.dot, ownerState: o }),
    ],
  });
}
const XN = g.createContext(void 0),
  ib = XN;
function JN() {
  return g.useContext(ib);
}
function ZN(e) {
  return we("MuiRadio", e);
}
const jg = ve("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
  ]),
  eT = [
    "checked",
    "checkedIcon",
    "color",
    "icon",
    "name",
    "onChange",
    "size",
    "className",
  ],
  tT = (e) => {
    const { classes: t, color: n, size: r } = e,
      o = { root: ["root", `color${G(n)}`, r !== "medium" && `size${G(r)}`] };
    return j({}, t, Ce(o, ZN, t));
  },
  nT = Q(IP, {
    shouldForwardProp: (e) => ho(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size !== "medium" && t[`size${G(n.size)}`],
        t[`color${G(n.color)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    j(
      { color: (e.vars || e).palette.text.secondary },
      !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${
                t.color === "default"
                  ? e.vars.palette.action.activeChannel
                  : e.vars.palette[t.color].mainChannel
              } / ${e.vars.palette.action.hoverOpacity})`
            : $t(
                t.color === "default"
                  ? e.palette.action.active
                  : e.palette[t.color].main,
                e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      t.color !== "default" && {
        [`&.${jg.checked}`]: { color: (e.vars || e).palette[t.color].main },
      },
      { [`&.${jg.disabled}`]: { color: (e.vars || e).palette.action.disabled } }
    )
  );
function rT(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Eg = c.jsx(ob, { checked: !0 }),
  $g = c.jsx(ob, {}),
  oT = g.forwardRef(function (t, n) {
    var r, o;
    const i = ke({ props: t, name: "MuiRadio" }),
      {
        checked: s,
        checkedIcon: a = Eg,
        color: l = "primary",
        icon: u = $g,
        name: d,
        onChange: f,
        size: p = "medium",
        className: x,
      } = i,
      h = Y(i, eT),
      m = j({}, i, { color: l, size: p }),
      b = tT(m),
      _ = JN();
    let v = s;
    const y = Il(f, _ && _.onChange);
    let w = d;
    return (
      _ &&
        (typeof v > "u" && (v = rT(_.value, i.value)),
        typeof w > "u" && (w = _.name)),
      c.jsx(
        nT,
        j(
          {
            type: "radio",
            icon: g.cloneElement(u, {
              fontSize: (r = $g.props.fontSize) != null ? r : p,
            }),
            checkedIcon: g.cloneElement(a, {
              fontSize: (o = Eg.props.fontSize) != null ? o : p,
            }),
            ownerState: m,
            classes: b,
            name: w,
            checked: v,
            onChange: y,
            ref: n,
            className: Z(b.root, x),
          },
          h
        )
      )
    );
  }),
  Rg = oT,
  iT = ["actions", "children", "defaultValue", "name", "onChange", "value"],
  sT = g.forwardRef(function (t, n) {
    const {
        actions: r,
        children: o,
        defaultValue: i,
        name: s,
        onChange: a,
        value: l,
      } = t,
      u = Y(t, iT),
      d = g.useRef(null),
      [f, p] = bh({ controlled: l, default: i, name: "RadioGroup" });
    g.useImperativeHandle(
      r,
      () => ({
        focus: () => {
          let b = d.current.querySelector("input:not(:disabled):checked");
          b || (b = d.current.querySelector("input:not(:disabled)")),
            b && b.focus();
        },
      }),
      []
    );
    const x = xt(n, d),
      h = xh(s),
      m = g.useMemo(
        () => ({
          name: h,
          onChange(b) {
            p(b.target.value), a && a(b, b.target.value);
          },
          value: f,
        }),
        [h, a, p, f]
      );
    return c.jsx(ib.Provider, {
      value: m,
      children: c.jsx(
        zN,
        j({ role: "radiogroup", ref: x }, u, { children: o })
      ),
    });
  }),
  aT = sT,
  lT = ({ myProfile: e }) => {
    const [t, n] = g.useState(!0),
      [r, o] = g.useState([]),
      [i, s] = g.useState([]),
      a = tt();
    g.useEffect(() => {
      (async () => {
        try {
          const d = await H.get(
            `https://social-netword-fsociety-gamma.vercel.app/friend/followers/${e.name}`
          );
          s(d.data);
          const f = await H.get(
              "https://social-netword-fsociety-gamma.vercel.app/friend/users"
            ),
            p = d.data.map((m) => m.name),
            h = f.data.filter((m) => !p.includes(m.name) && m.name !== e.name);
          o(h), n(!1);
        } catch (d) {
          console.log(d);
        }
      })();
    }, [e.name]);
    const l = (u) => {
      a(`/profile/${u}`);
    };
    return c.jsxs("div", {
      className: Cd.recomendation__list,
      children: [
        c.jsx("div", {
          className: "row",
          children: c.jsx("div", {
            className: "col-12",
            children: c.jsx("h2", {
              className: Cd.recomendation__title,
              children: "Recomendation List",
            }),
          }),
        }),
        t
          ? c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className:
                  "col-12 d-flex justify-content-center align-items-center",
                children: c.jsx(Br, { color: "success" }),
              }),
            })
          : c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className:
                  "col-12 d-flex align-items-center justify-content-center",
                children: c.jsx("div", {
                  className: Cd.recomendation__list__container,
                  children: r.map((u, d) =>
                    u.name.length > 1
                      ? c.jsx(
                          PR,
                          {
                            frendList: i,
                            myName: e.name,
                            handleClickCard: l,
                            user: u,
                          },
                          d
                        )
                      : null
                  ),
                }),
              }),
            }),
      ],
    });
  },
  cT = "_post__container_c7ou9_1",
  uT = "_post__top__container_c7ou9_12",
  dT = "_post__profile__info_c7ou9_39",
  fT = "_post__img_c7ou9_60",
  pT = "_post__text_c7ou9_67",
  hT = "_like__container_c7ou9_81",
  Jt = {
    post__container: cT,
    post__top__container: uT,
    post__profile__info: dT,
    post__img: fT,
    post__text: pT,
    like__container: hT,
  },
  mT = "_btn__toggle_zgws3_1",
  gT = "_preview__text_zgws3_9",
  Pg = { btn__toggle: mT, preview__text: gT },
  ta = ({ text: e, lenghtText: t }) => {
    const [n, r] = g.useState(!1),
      o = (a) => {
        a.stopPropagation(), a.preventDefault(), r(!n);
      },
      i = () => (e.length <= t || n ? e : e.slice(0, t) + "..."),
      s = () =>
        e.length > t
          ? c.jsx("button", {
              className: Pg.btn__toggle,
              onClick: o,
              children: n ? "Згорнути" : "Детальніше",
            })
          : null;
    return c.jsxs("div", {
      className: Pg.preview__text,
      children: [c.jsx(op, { text: i() }), s()],
    });
  },
  vT = "_recomendation__item_1tsz9_1",
  yT = "_comment__cloud_1tsz9_31",
  _T = "_comments__title_1tsz9_49",
  xT = "_divider_1tsz9_55",
  bT = "_nothing__comments_1tsz9_64",
  Zi = {
    recomendation__item: vT,
    comment__cloud: yT,
    comments__title: _T,
    divider: xT,
    nothing__comments: bT,
  },
  wT = ({ id: e, autor: t, text: n, myName: r }) => {
    const o = tt(),
      s = {
        label: "Delete comment",
        onClick: async () => {
          console.log(e);
          try {
            const u = new FormData();
            u.append("comment_id", e.toString()),
              await H.post(
                "https://social-netword-fsociety-gamma.vercel.app/posts/delete_comment/",
                u
              ),
              window.location.reload();
          } catch (u) {
            console.log(u);
          }
        },
      },
      a = [];
    a.push(s);
    const l = (u) => {
      o(`/profile/${u}`);
    };
    return c.jsx("div", {
      className: "row",
      children: c.jsx("div", {
        className: "col-12",
        children: c.jsx("div", {
          onClick: () => l(t.name),
          className: Zi.recomendation__item,
          children: c.jsxs("div", {
            className: "row d-flex align-items-center",
            children: [
              c.jsxs("div", {
                className: "col-4 d-flex align-items-center",
                children: [
                  c.jsx("img", { src: t.avatar, alt: "avatar" }),
                  c.jsx("h3", { children: nm(t.name, 11) }),
                ],
              }),
              c.jsx("div", {
                className: "col-6 d-flex align-items-center",
                children: c.jsx("p", {
                  children: c.jsx(ta, { text: n, lenghtText: 22 }),
                }),
              }),
              t.name === r
                ? c.jsx("div", {
                    className: "col-2",
                    children: c.jsx(ji, { options: a }),
                  })
                : null,
            ],
          }),
        }),
      }),
    });
  },
  wu = ({
    id: e,
    comments: t,
    maxHeightValue: n,
    heightValue: r,
    myProfile: o,
    postOrReel: i,
  }) => {
    const [s, a] = g.useState(t),
      l = async (u) => {
        if (o) {
          const d = new FormData();
          i == "reels"
            ? (d.append("name_user", o.name),
              d.append("reel_id", e.toString()),
              d.append("comment", u))
            : (d.append("name_user", o.name),
              d.append("post_id", e.toString()),
              d.append("comment", u));
          try {
            i == "reels"
              ? await H.post(
                  "https://social-netword-fsociety-gamma.vercel.app/reels/comment/",
                  d
                )
              : await H.post(
                  "https://social-netword-fsociety-gamma.vercel.app/posts/comment/",
                  d
                );
            const f = {
              id: 0,
              author: {
                name: o.name,
                avatar: o.avatar.slice(13),
                email: o.email,
              },
              text: u,
            };
            a((p) => [...p, f]);
          } catch (f) {
            console.log(f);
          }
        }
      };
    return c.jsxs("div", {
      children: [
        c.jsxs("div", {
          className: "row",
          children: [
            c.jsx("div", {
              className: "col-12 d-flex justify-content-center",
              children: c.jsx("h3", {
                className: Zi.comments__title,
                children: "Comments",
              }),
            }),
            c.jsx(Xl, { className: Zi.divider }),
            c.jsx("div", {
              className: "col-12",
              children: c.jsx("div", {
                style: { maxHeight: n, height: r },
                className: Zi.comment__cloud,
                children:
                  o && s.length > 0
                    ? s.map((u, d) =>
                        c.jsx(
                          wT,
                          {
                            myName: o.name,
                            id: u.id,
                            autor: u.author,
                            text: u.text,
                          },
                          d
                        )
                      )
                    : c.jsx("div", {
                        className:
                          "col-12 d-flex justify-content-center align-items-center",
                        children: c.jsx("p", {
                          className: Zi.nothing__comments,
                          children: "Nothing comments",
                        }),
                      }),
              }),
            }),
          ],
        }),
        c.jsx(B2, { onEnter: l, placeholder: "Type a comment" }),
      ],
    });
  },
  ST = ({ postData: e, myProfile: t }) => {
    const [n, r] = g.useState(e.post.isLiked),
      o = tt(),
      [i, s] = g.useState(0);
    g.useEffect(() => {
      s(e.post.likes);
    }, [e.post.likes]);
    const a = async () => {
        try {
          const h = new FormData();
          h.append("name_user", t.name),
            h.append("post_id", e.id.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/posts/like/",
              h
            );
        } catch (h) {
          console.log(h);
        }
      },
      l = async () => {
        try {
          const h = new FormData();
          h.append("name_user", t.name),
            h.append("post_id", e.id.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/posts/unlike/",
              h
            );
        } catch (h) {
          console.log(h);
        }
      },
      u = () => {
        n ? l() : a(), s(n ? i - 1 : i + 1), r(!n);
      },
      d = () => {
        o(`/profile/${e.author.name}`);
      },
      p = {
        label: "Delete post",
        onClick: async () => {
          try {
            const h = new FormData();
            h.append("name_user", t.name),
              h.append("post_id", e.id.toString()),
              await H.post(
                "https://social-netword-fsociety-gamma.vercel.app/posts/delete/",
                h
              ),
              window.location.reload();
          } catch (h) {
            console.log(h);
          }
        },
      },
      x = [];
    return (
      x.push(p),
      c.jsx("div", {
        className: "col-12",
        children: c.jsxs("div", {
          className: Jt.post__container,
          children: [
            c.jsxs("div", {
              className: "row d-flex justify-content-between",
              children: [
                c.jsx("div", {
                  className: "col-10",
                  children: c.jsx("div", {
                    onClick: d,
                    className: Jt.post__top__container,
                    children: c.jsxs("div", {
                      className: Jt.post__profile__info,
                      children: [
                        c.jsx("div", {
                          className: "row",
                          children: c.jsx("div", {
                            className: "col-6",
                            children: c.jsx("img", {
                              src: e.author.avatar,
                              alt: "avatar",
                            }),
                          }),
                        }),
                        c.jsx("div", {
                          className: "col-6",
                          children: c.jsx("h3", { children: e.author.name }),
                        }),
                      ],
                    }),
                  }),
                }),
                t.name === e.author.name
                  ? c.jsx("div", {
                      className: "col-2",
                      children: c.jsx(ji, { options: x }),
                    })
                  : null,
              ],
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsx("img", {
                  className: Jt.post__img,
                  src: e.post.image,
                  alt: "postImg",
                }),
              }),
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsxs("div", {
                  className: Jt.post__text,
                  children: [
                    c.jsxs("h3", { children: [e.author.name, ":"] }),
                    c.jsx("p", {
                      children: c.jsx(ta, {
                        text: e.post.description,
                        lenghtText: 35,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            c.jsx(wu, {
              myProfile: t,
              id: e.id,
              comments: e.post.comments,
              postOrReel: "post",
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-2",
                children: c.jsxs("div", {
                  className: Jt.like__container,
                  children: [
                    c.jsx("button", {
                      className: "post__like",
                      onClick: u,
                      children: n
                        ? c.jsx(nu, { style: { color: "red" } })
                        : c.jsx(ru, {}),
                    }),
                    c.jsx("p", { children: i }),
                  ],
                }),
              }),
            }),
          ],
        }),
      })
    );
  },
  CT = ({ posts: e, myProfile: t }) =>
    c.jsx("div", {
      className: "row",
      children:
        e.length != 0
          ? e.map((n, r) =>
              c.jsx(
                "div",
                {
                  className: "col-12",
                  children: c.jsx(ST, { myProfile: t, postData: n }, r),
                },
                r
              )
            )
          : c.jsx("div", {
              className: "col-12",
              children: c.jsx("div", {
                style: {
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: c.jsx(Br, { color: "success" }),
              }),
            }),
    }),
  kT = ({ postData: e, myProfile: t }) => {
    const [n, r] = g.useState(e.reel.isLiked),
      o = tt(),
      [i, s] = g.useState(0),
      a = g.useRef(null);
    g.useEffect(() => {
      s(e.reel.likes);
    }, [e.reel.likes]),
      g.useEffect(() => {
        const m = a.current,
          b = new IntersectionObserver(
            (_) => {
              m && (_[0].isIntersecting ? m.play() : m.pause());
            },
            { threshold: 0.5 }
          );
        return (
          m && b.observe(m),
          () => {
            m && b.unobserve(m);
          }
        );
      }, []);
    const l = async () => {
        try {
          const m = new FormData();
          m.append("name_user", t.name),
            m.append("post_id", e.id.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/reels/like/",
              m
            );
        } catch (m) {
          console.log(m);
        }
      },
      u = async () => {
        try {
          const m = new FormData();
          m.append("name_user", t.name),
            m.append("post_id", e.id.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/reels//unlike/",
              m
            );
        } catch (m) {
          console.log(m);
        }
      },
      d = () => {
        n ? u() : l(), s(n ? i - 1 : i + 1), r(!n);
      },
      f = () => {
        o(`/profile/${e.author.name}`);
      },
      x = {
        label: "Delete post",
        onClick: async () => {
          try {
            const m = new FormData();
            m.append("name_user", t.name),
              m.append("post_id", e.id.toString()),
              await H.post(
                "https://social-netword-fsociety-gamma.vercel.app/reels/delete/",
                m
              ),
              window.location.reload();
          } catch (m) {
            console.log(m);
          }
        },
      },
      h = [];
    return (
      h.push(x),
      c.jsx("div", {
        className: "col-12",
        children: c.jsxs("div", {
          className: Jt.post__container,
          children: [
            c.jsxs("div", {
              className: "row d-flex justify-content-between",
              children: [
                c.jsx("div", {
                  className: "col-10",
                  children: c.jsx("div", {
                    onClick: f,
                    className: Jt.post__top__container,
                    children: c.jsxs("div", {
                      className: Jt.post__profile__info,
                      children: [
                        c.jsx("div", {
                          className: "row",
                          children: c.jsx("div", {
                            className: "col-6",
                            children: c.jsx("img", {
                              src: e.author.avatar,
                              alt: "avatar",
                            }),
                          }),
                        }),
                        c.jsx("div", {
                          className: "col-6",
                          children: c.jsx("h3", { children: e.author.name }),
                        }),
                      ],
                    }),
                  }),
                }),
                t.name === e.author.name
                  ? c.jsx("div", {
                      className: "col-2",
                      children: c.jsx(ji, { options: h }),
                    })
                  : null,
              ],
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsx("video", {
                  ref: a,
                  className: Jt.post__img,
                  src: e.reel.video,
                  controls: !0,
                }),
              }),
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsxs("div", {
                  className: Jt.post__text,
                  children: [
                    c.jsxs("h3", { children: [e.author.name, ":"] }),
                    c.jsx("p", {
                      children: c.jsx(ta, {
                        text: e.reel.description,
                        lenghtText: 35,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            c.jsx(wu, {
              myProfile: t,
              id: e.id,
              comments: e.reel.comments,
              postOrReel: "reels",
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-2",
                children: c.jsxs("div", {
                  className: Jt.like__container,
                  children: [
                    c.jsx("button", {
                      className: "post__like",
                      onClick: d,
                      children: n
                        ? c.jsx(nu, { style: { color: "red" } })
                        : c.jsx(ru, {}),
                    }),
                    c.jsx("p", { children: i }),
                  ],
                }),
              }),
            }),
          ],
        }),
      })
    );
  },
  jT = ({ reels: e, myProfile: t }) =>
    c.jsx("div", {
      className: "row",
      children:
        e.length != 0
          ? e.map((n, r) =>
              c.jsx(
                "div",
                {
                  className: "col-12",
                  children: c.jsx(kT, { myProfile: t, postData: n }, r),
                },
                r
              )
            )
          : c.jsx("div", {
              className: "col-12",
              children: c.jsx("div", {
                style: {
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: c.jsx(Br, { color: "success" }),
              }),
            }),
    }),
  Ng = () => {
    const [e, t] = g.useState([]),
      [n, r] = g.useState([]),
      o = g.useContext(mo),
      s = zr().pathname.includes("/reels");
    return (
      g.useEffect(() => {
        o &&
          (async () => {
            try {
              let l;
              if (s) {
                l = await H.get(
                  `https://social-netword-fsociety-gamma.vercel.app/reels/reelsAll/${o.name}`
                );
                const u = l.data.sort((d, f) => f.id - d.id);
                r(u);
              } else {
                l = await H.get(
                  `https://social-netword-fsociety-gamma.vercel.app/posts/look/${o.name}`
                );
                const u = l.data.sort((d, f) => f.id - d.id);
                t(u);
              }
            } catch (l) {
              console.error("Error fetching posts:", l);
            }
          })();
      }, [o, s]),
      c.jsx(c.Fragment, {
        children: c.jsxs("div", {
          className: "row",
          children: [
            c.jsx("div", {
              className: "col-9",
              children: c.jsx("div", {
                className: "row d-flex justify-content-center",
                children: c.jsx("div", {
                  className: "col-9",
                  children: c.jsx(N_, {
                    children: c.jsx("div", {
                      className: ER.home__layout,
                      children: o
                        ? s
                          ? c.jsx(jT, { reels: n, myProfile: o })
                          : c.jsx(CT, { posts: e, myProfile: o })
                        : null,
                    }),
                  }),
                }),
              }),
            }),
            c.jsx("div", {
              className: "col-3 m-0 p-0",
              children: o ? c.jsx(lT, { myProfile: o }) : null,
            }),
          ],
        }),
      })
    );
  },
  ET = "" + new URL("Snake_OG-logo-CIa1wiQi.jpeg", import.meta.url).href,
  $T = "_game__container_1gw90_1",
  RT = "_game__img_1gw90_13",
  PT = "_game__name_1gw90_19",
  NT = "_games_1gw90_25",
  TT = "_games__title_1gw90_31",
  Wi = {
    game__container: $T,
    game__img: RT,
    game__name: PT,
    games: NT,
    games__title: TT,
  },
  OT = () =>
    c.jsxs("div", {
      className: Wi.games,
      children: [
        c.jsx("h2", { className: Wi.games__title, children: "Games List" }),
        c.jsx("div", {
          className: "row",
          children: c.jsx("div", {
            className: "col-4",
            children: c.jsx(U_, {
              children: c.jsx(It, {
                to: "/game/snake",
                children: c.jsxs("div", {
                  className: Wi.game__container,
                  children: [
                    c.jsx("img", {
                      src: ET,
                      alt: "gameImg",
                      className: Wi.game__img,
                    }),
                    c.jsx("p", { className: Wi.game__name, children: "Snake" }),
                  ],
                }),
              }),
            }),
          }),
        }),
      ],
    });
var Rt = function () {
  return (
    (Rt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Rt.apply(this, arguments)
  );
};
function Jl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Pe = "-ms-",
  hs = "-moz-",
  ge = "-webkit-",
  sb = "comm",
  Su = "rule",
  om = "decl",
  MT = "@import",
  ab = "@keyframes",
  LT = "@layer",
  lb = Math.abs,
  im = String.fromCharCode,
  ap = Object.assign;
function AT(e, t) {
  return rt(e, 0) ^ 45
    ? (((((((t << 2) ^ rt(e, 0)) << 2) ^ rt(e, 1)) << 2) ^ rt(e, 2)) << 2) ^
        rt(e, 3)
    : 0;
}
function cb(e) {
  return e.trim();
}
function Bn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ne(e, t, n) {
  return e.replace(t, n);
}
function nl(e, t, n) {
  return e.indexOf(t, n);
}
function rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ci(e, t, n) {
  return e.slice(t, n);
}
function Rn(e) {
  return e.length;
}
function ub(e) {
  return e.length;
}
function es(e, t) {
  return t.push(e), e;
}
function IT(e, t) {
  return e.map(t).join("");
}
function Tg(e, t) {
  return e.filter(function (n) {
    return !Bn(n, t);
  });
}
var Cu = 1,
  ui = 1,
  db = 0,
  an = 0,
  Ge = 0,
  Ei = "";
function ku(e, t, n, r, o, i, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Cu,
    column: ui,
    length: s,
    return: "",
    siblings: a,
  };
}
function dr(e, t) {
  return ap(
    ku("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function ko(e) {
  for (; e.root; ) e = dr(e.root, { children: [e] });
  es(e, e.siblings);
}
function zT() {
  return Ge;
}
function FT() {
  return (
    (Ge = an > 0 ? rt(Ei, --an) : 0), ui--, Ge === 10 && ((ui = 1), Cu--), Ge
  );
}
function vn() {
  return (
    (Ge = an < db ? rt(Ei, an++) : 0), ui++, Ge === 10 && ((ui = 1), Cu++), Ge
  );
}
function to() {
  return rt(Ei, an);
}
function rl() {
  return an;
}
function ju(e, t) {
  return ci(Ei, e, t);
}
function lp(e) {
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
function DT(e) {
  return (Cu = ui = 1), (db = Rn((Ei = e))), (an = 0), [];
}
function BT(e) {
  return (Ei = ""), e;
}
function jd(e) {
  return cb(ju(an - 1, cp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function UT(e) {
  for (; (Ge = to()) && Ge < 33; ) vn();
  return lp(e) > 2 || lp(Ge) > 3 ? "" : " ";
}
function HT(e, t) {
  for (
    ;
    --t &&
    vn() &&
    !(Ge < 48 || Ge > 102 || (Ge > 57 && Ge < 65) || (Ge > 70 && Ge < 97));

  );
  return ju(e, rl() + (t < 6 && to() == 32 && vn() == 32));
}
function cp(e) {
  for (; vn(); )
    switch (Ge) {
      case e:
        return an;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cp(Ge);
        break;
      case 40:
        e === 41 && cp(e);
        break;
      case 92:
        vn();
        break;
    }
  return an;
}
function WT(e, t) {
  for (; vn() && e + Ge !== 57; ) if (e + Ge === 84 && to() === 47) break;
  return "/*" + ju(t, an - 1) + "*" + im(e === 47 ? e : vn());
}
function VT(e) {
  for (; !lp(to()); ) vn();
  return ju(e, an);
}
function KT(e) {
  return BT(ol("", null, null, null, [""], (e = DT(e)), 0, [0], e));
}
function ol(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      d = 0,
      f = s,
      p = 0,
      x = 0,
      h = 0,
      m = 1,
      b = 1,
      _ = 1,
      v = 0,
      y = "",
      w = o,
      S = i,
      C = r,
      k = y;
    b;

  )
    switch (((h = v), (v = vn()))) {
      case 40:
        if (h != 108 && rt(k, f - 1) == 58) {
          nl((k += ne(jd(v), "&", "&\f")), "&\f", lb(u ? a[u - 1] : 0)) != -1 &&
            (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += jd(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += UT(h);
        break;
      case 92:
        k += HT(rl() - 1, 7);
        continue;
      case 47:
        switch (to()) {
          case 42:
          case 47:
            es(qT(WT(vn(), rl()), t, n, l), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        a[u++] = Rn(k) * _;
      case 125 * m:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            b = 0;
          case 59 + d:
            _ == -1 && (k = ne(k, /\f/g, "")),
              x > 0 &&
                Rn(k) - f &&
                es(
                  x > 32
                    ? Mg(k + ";", r, n, f - 1, l)
                    : Mg(ne(k, " ", "") + ";", r, n, f - 2, l),
                  l
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (es(
                (C = Og(k, t, n, u, d, o, a, y, (w = []), (S = []), f, i)),
                i
              ),
              v === 123)
            )
              if (d === 0) ol(k, t, C, C, w, i, f, a, S);
              else
                switch (p === 99 && rt(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ol(
                      e,
                      C,
                      C,
                      r && es(Og(e, C, C, 0, 0, o, a, y, o, (w = []), f, S), S),
                      o,
                      S,
                      f,
                      a,
                      r ? w : S
                    );
                    break;
                  default:
                    ol(k, C, C, C, [""], S, 0, a, S);
                }
        }
        (u = d = x = 0), (m = _ = 1), (y = k = ""), (f = s);
        break;
      case 58:
        (f = 1 + Rn(k)), (x = h);
      default:
        if (m < 1) {
          if (v == 123) --m;
          else if (v == 125 && m++ == 0 && FT() == 125) continue;
        }
        switch (((k += im(v)), v * m)) {
          case 38:
            _ = d > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Rn(k) - 1) * _), (_ = 1);
            break;
          case 64:
            to() === 45 && (k += jd(vn())),
              (p = to()),
              (d = f = Rn((y = k += VT(rl())))),
              v++;
            break;
          case 45:
            h === 45 && Rn(k) == 2 && (m = 0);
        }
    }
  return i;
}
function Og(e, t, n, r, o, i, s, a, l, u, d, f) {
  for (
    var p = o - 1, x = o === 0 ? i : [""], h = ub(x), m = 0, b = 0, _ = 0;
    m < r;
    ++m
  )
    for (var v = 0, y = ci(e, p + 1, (p = lb((b = s[m])))), w = e; v < h; ++v)
      (w = cb(b > 0 ? x[v] + " " + y : ne(y, /&\f/g, x[v]))) && (l[_++] = w);
  return ku(e, t, n, o === 0 ? Su : a, l, u, d, f);
}
function qT(e, t, n, r) {
  return ku(e, t, n, sb, im(zT()), ci(e, 2, -2), 0, r);
}
function Mg(e, t, n, r, o) {
  return ku(e, t, n, om, ci(e, 0, r), ci(e, r + 1, -1), r, o);
}
function fb(e, t, n) {
  switch (AT(e, t)) {
    case 5103:
      return ge + "print-" + e + e;
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
      return ge + e + e;
    case 4789:
      return hs + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ge + e + hs + e + Pe + e + e;
    case 5936:
      switch (rt(e, t + 11)) {
        case 114:
          return ge + e + Pe + ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ge + e + Pe + ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ge + e + Pe + ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ge + e + Pe + e + e;
    case 6165:
      return ge + e + Pe + "flex-" + e + e;
    case 5187:
      return (
        ge + e + ne(e, /(\w+).+(:[^]+)/, ge + "box-$1$2" + Pe + "flex-$1$2") + e
      );
    case 5443:
      return (
        ge +
        e +
        Pe +
        "flex-item-" +
        ne(e, /flex-|-self/g, "") +
        (Bn(e, /flex-|baseline/)
          ? ""
          : Pe + "grid-row-" + ne(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        ge +
        e +
        Pe +
        "flex-line-pack" +
        ne(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return ge + e + Pe + ne(e, "shrink", "negative") + e;
    case 5292:
      return ge + e + Pe + ne(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ge +
        "box-" +
        ne(e, "-grow", "") +
        ge +
        e +
        Pe +
        ne(e, "grow", "positive") +
        e
      );
    case 4554:
      return ge + ne(e, /([^-])(transform)/g, "$1" + ge + "$2") + e;
    case 6187:
      return (
        ne(
          ne(ne(e, /(zoom-|grab)/, ge + "$1"), /(image-set)/, ge + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ne(e, /(image-set\([^]*)/, ge + "$1$`$1");
    case 4968:
      return (
        ne(
          ne(e, /(.+:)(flex-)?(.*)/, ge + "box-pack:$3" + Pe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ge +
        e +
        e
      );
    case 4200:
      if (!Bn(e, /flex-|baseline/))
        return Pe + "grid-column-align" + ci(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Pe + ne(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Bn(r.props, /grid-\w+-end/);
        })
        ? ~nl(e + (n = n[t].value), "span", 0)
          ? e
          : Pe +
            ne(e, "-start", "") +
            e +
            Pe +
            "grid-row-span:" +
            (~nl(n, "span", 0) ? Bn(n, /\d+/) : +Bn(n, /\d+/) - +Bn(e, /\d+/)) +
            ";"
        : Pe + ne(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Bn(r.props, /grid-\w+-start/);
        })
        ? e
        : Pe + ne(ne(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ne(e, /(.+)-inline(.+)/, ge + "$1$2") + e;
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
      if (Rn(e) - 1 - t > 6)
        switch (rt(e, t + 1)) {
          case 109:
            if (rt(e, t + 4) !== 45) break;
          case 102:
            return (
              ne(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ge +
                  "$2-$3$1" +
                  hs +
                  (rt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~nl(e, "stretch", 0)
              ? fb(ne(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return ne(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, s, a, l, u) {
          return (
            Pe +
            o +
            ":" +
            i +
            u +
            (s ? Pe + o + "-span:" + (a ? l : +l - +i) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (rt(e, t + 6) === 121) return ne(e, ":", ":" + ge) + e;
      break;
    case 6444:
      switch (rt(e, rt(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            ne(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ge +
                (rt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ge +
                "$2$3$1" +
                Pe +
                "$2box$3"
            ) + e
          );
        case 100:
          return ne(e, ":", ":" + Pe) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ne(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Zl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function GT(e, t, n, r) {
  switch (e.type) {
    case LT:
      if (e.children.length) break;
    case MT:
    case om:
      return (e.return = e.return || e.value);
    case sb:
      return "";
    case ab:
      return (e.return = e.value + "{" + Zl(e.children, r) + "}");
    case Su:
      if (!Rn((e.value = e.props.join(",")))) return "";
  }
  return Rn((n = Zl(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function YT(e) {
  var t = ub(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function QT(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function XT(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case om:
        e.return = fb(e.value, e.length, n);
        return;
      case ab:
        return Zl([dr(e, { value: ne(e.value, "@", "@" + ge) })], r);
      case Su:
        if (e.length)
          return IT((n = e.props), function (o) {
            switch (Bn(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                ko(dr(e, { props: [ne(o, /:(read-\w+)/, ":" + hs + "$1")] })),
                  ko(dr(e, { props: [o] })),
                  ap(e, { props: Tg(n, r) });
                break;
              case "::placeholder":
                ko(
                  dr(e, { props: [ne(o, /:(plac\w+)/, ":" + ge + "input-$1")] })
                ),
                  ko(dr(e, { props: [ne(o, /:(plac\w+)/, ":" + hs + "$1")] })),
                  ko(dr(e, { props: [ne(o, /:(plac\w+)/, Pe + "input-$1")] })),
                  ko(dr(e, { props: [o] })),
                  ap(e, { props: Tg(n, r) });
                break;
            }
            return "";
          });
    }
}
var JT = {
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
    strokeWidth: 1,
  },
  Lt = {},
  di =
    (typeof process < "u" &&
      Lt !== void 0 &&
      (Lt.REACT_APP_SC_ATTR || Lt.SC_ATTR)) ||
    "data-styled",
  pb = "active",
  hb = "data-styled-version",
  Eu = "6.1.8",
  sm = `/*!sc*/
`,
  am = typeof window < "u" && "HTMLElement" in window,
  ZT = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Lt !== void 0 &&
      Lt.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      Lt.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? Lt.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      Lt.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      Lt !== void 0 &&
      Lt.SC_DISABLE_SPEEDY !== void 0 &&
      Lt.SC_DISABLE_SPEEDY !== "" &&
      Lt.SC_DISABLE_SPEEDY !== "false" &&
      Lt.SC_DISABLE_SPEEDY),
  $u = Object.freeze([]),
  fi = Object.freeze({});
function eO(e, t, n) {
  return (
    n === void 0 && (n = fi), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var mb = new Set([
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
    "tr",
    "track",
    "u",
    "ul",
    "use",
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
    "marker",
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
    "tspan",
  ]),
  tO = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  nO = /(^-|-$)/g;
function Lg(e) {
  return e.replace(tO, "-").replace(nO, "");
}
var rO = /(a)(d)/gi,
  $a = 52,
  Ag = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function up(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > $a; t = (t / $a) | 0) n = Ag(t % $a) + n;
  return (Ag(t % $a) + n).replace(rO, "$1-$2");
}
var Ed,
  gb = 5381,
  Do = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  vb = function (e) {
    return Do(gb, e);
  };
function oO(e) {
  return up(vb(e) >>> 0);
}
function iO(e) {
  return e.displayName || e.name || "Component";
}
function $d(e) {
  return typeof e == "string" && !0;
}
var yb = typeof Symbol == "function" && Symbol.for,
  _b = yb ? Symbol.for("react.memo") : 60115,
  sO = yb ? Symbol.for("react.forward_ref") : 60112,
  aO = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  lO = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  xb = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  cO =
    (((Ed = {})[sO] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Ed[_b] = xb),
    Ed);
function Ig(e) {
  return ("type" in (t = e) && t.type.$$typeof) === _b
    ? xb
    : "$$typeof" in e
    ? cO[e.$$typeof]
    : aO;
  var t;
}
var uO = Object.defineProperty,
  dO = Object.getOwnPropertyNames,
  zg = Object.getOwnPropertySymbols,
  fO = Object.getOwnPropertyDescriptor,
  pO = Object.getPrototypeOf,
  Fg = Object.prototype;
function bb(e, t, n) {
  if (typeof t != "string") {
    if (Fg) {
      var r = pO(t);
      r && r !== Fg && bb(e, r, n);
    }
    var o = dO(t);
    zg && (o = o.concat(zg(t)));
    for (var i = Ig(e), s = Ig(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!(l in lO || (n && n[l]) || (s && l in s) || (i && l in i))) {
        var u = fO(t, l);
        try {
          uO(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function pi(e) {
  return typeof e == "function";
}
function lm(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Jr(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Dg(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Fs(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function dp(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Fs(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = dp(e[r], t[r]);
  else if (Fs(t)) for (var r in t) e[r] = dp(e[r], t[r]);
  return e;
}
function cm(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function na(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var hO = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw na(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var s = o; s < i; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            s = o;
          s < i;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(sm);
        return n;
      }),
      e
    );
  })(),
  il = new Map(),
  ec = new Map(),
  sl = 1,
  Ra = function (e) {
    if (il.has(e)) return il.get(e);
    for (; ec.has(sl); ) sl++;
    var t = sl++;
    return il.set(e, t), ec.set(t, e), t;
  },
  mO = function (e, t) {
    (sl = t + 1), il.set(e, t), ec.set(t, e);
  },
  gO = "style[".concat(di, "][").concat(hb, '="').concat(Eu, '"]'),
  vO = new RegExp(
    "^".concat(di, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  yO = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  _O = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(sm),
        o = [],
        i = 0,
        s = r.length;
      i < s;
      i++
    ) {
      var a = r[i].trim();
      if (a) {
        var l = a.match(vO);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            d = l[2];
          u !== 0 && (mO(d, u), yO(e, d, l[3]), e.getTag().insertRules(u, o)),
            (o.length = 0);
        } else o.push(a);
      }
    }
  };
function xO() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var wb = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(di, "]")));
        return l[l.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(di, pb), r.setAttribute(hb, Eu);
    var s = xO();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
  },
  bO = (function () {
    function e(t) {
      (this.element = wb(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var s = r[o];
            if (s.ownerNode === n) return s;
          }
          throw na(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  wO = (function () {
    function e(t) {
      (this.element = wb(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  SO = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Bg = am,
  CO = { isServer: !am, useCSSOMInjection: !ZT },
  Sb = (function () {
    function e(t, n, r) {
      t === void 0 && (t = fi), n === void 0 && (n = {});
      var o = this;
      (this.options = Rt(Rt({}, CO), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          am &&
          Bg &&
          ((Bg = !1),
          (function (i) {
            for (
              var s = document.querySelectorAll(gO), a = 0, l = s.length;
              a < l;
              a++
            ) {
              var u = s[a];
              u &&
                u.getAttribute(di) !== pb &&
                (_O(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        cm(this, function () {
          return (function (i) {
            for (
              var s = i.getTag(),
                a = s.length,
                l = "",
                u = function (f) {
                  var p = (function (_) {
                    return ec.get(_);
                  })(f);
                  if (p === void 0) return "continue";
                  var x = i.names.get(p),
                    h = s.getGroup(f);
                  if (x === void 0 || h.length === 0) return "continue";
                  var m = ""
                      .concat(di, ".g")
                      .concat(f, '[id="')
                      .concat(p, '"]'),
                    b = "";
                  x !== void 0 &&
                    x.forEach(function (_) {
                      _.length > 0 && (b += "".concat(_, ","));
                    }),
                    (l += ""
                      .concat(h)
                      .concat(m, '{content:"')
                      .concat(b, '"}')
                      .concat(sm));
                },
                d = 0;
              d < a;
              d++
            )
              u(d);
            return l;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return Ra(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Rt(Rt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new SO(o) : r ? new bO(o) : new wO(o);
            })(this.options)),
            new hO(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Ra(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Ra(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Ra(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  kO = /&/g,
  jO = /^\s*\/\/.*$/gm;
function Cb(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = Cb(n.children, t)),
      n
    );
  });
}
function EO(e) {
  var t,
    n,
    r,
    o = e === void 0 ? fi : e,
    i = o.options,
    s = i === void 0 ? fi : i,
    a = o.plugins,
    l = a === void 0 ? $u : a,
    u = function (p, x, h) {
      return h.startsWith(n) && h.endsWith(n) && h.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : p;
    },
    d = l.slice();
  d.push(function (p) {
    p.type === Su &&
      p.value.includes("&") &&
      (p.props[0] = p.props[0].replace(kO, n).replace(r, u));
  }),
    s.prefix && d.push(XT),
    d.push(GT);
  var f = function (p, x, h, m) {
    x === void 0 && (x = ""),
      h === void 0 && (h = ""),
      m === void 0 && (m = "&"),
      (t = m),
      (n = x),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var b = p.replace(jO, ""),
      _ = KT(h || x ? "".concat(h, " ").concat(x, " { ").concat(b, " }") : b);
    s.namespace && (_ = Cb(_, s.namespace));
    var v = [];
    return (
      Zl(
        _,
        YT(
          d.concat(
            QT(function (y) {
              return v.push(y);
            })
          )
        )
      ),
      v
    );
  };
  return (
    (f.hash = l.length
      ? l
          .reduce(function (p, x) {
            return x.name || na(15), Do(p, x.name);
          }, gb)
          .toString()
      : ""),
    f
  );
}
var $O = new Sb(),
  fp = EO(),
  kb = q.createContext({
    shouldForwardProp: void 0,
    styleSheet: $O,
    stylis: fp,
  });
kb.Consumer;
q.createContext(void 0);
function Ug() {
  return g.useContext(kb);
}
var RO = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = fp);
        var s = r.name + i.hash;
        o.hasNameForId(r.id, s) ||
          o.insertRules(r.id, s, i(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        cm(this, function () {
          throw na(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = fp), this.name + t.hash;
      }),
      e
    );
  })(),
  PO = function (e) {
    return e >= "A" && e <= "Z";
  };
function Hg(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    PO(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var jb = function (e) {
    return e == null || e === !1 || e === "";
  },
  Eb = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !jb(i) &&
        ((Array.isArray(i) && i.isCss) || pi(i)
          ? r.push("".concat(Hg(o), ":"), i, ";")
          : Fs(i)
          ? r.push.apply(r, Jl(Jl(["".concat(o, " {")], Eb(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Hg(o), ": ")
                .concat(
                  ((t = o),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in JT ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function no(e, t, n, r) {
  if (jb(e)) return [];
  if (lm(e)) return [".".concat(e.styledComponentId)];
  if (pi(e)) {
    if (!pi((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return no(o, t, n, r);
  }
  var i;
  return e instanceof RO
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Fs(e)
    ? Eb(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        $u,
        e.map(function (s) {
          return no(s, t, n, r);
        })
      )
    : [e.toString()];
}
function NO(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (pi(n) && !lm(n)) return !1;
  }
  return !0;
}
var TO = vb(Eu),
  OO = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && NO(t)),
        (this.componentId = n),
        (this.baseHash = Do(TO, n)),
        (this.baseStyle = r),
        Sb.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Jr(o, this.staticRulesId);
          else {
            var i = Dg(no(this.rules, t, n, r)),
              s = up(Do(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var a = r(i, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, a);
            }
            (o = Jr(o, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var l = Do(this.baseHash, r.hash), u = "", d = 0;
            d < this.rules.length;
            d++
          ) {
            var f = this.rules[d];
            if (typeof f == "string") u += f;
            else if (f) {
              var p = Dg(no(f, t, n, r));
              (l = Do(l, p + d)), (u += p);
            }
          }
          if (u) {
            var x = up(l >>> 0);
            n.hasNameForId(this.componentId, x) ||
              n.insertRules(
                this.componentId,
                x,
                r(u, ".".concat(x), void 0, this.componentId)
              ),
              (o = Jr(o, x));
          }
        }
        return o;
      }),
      e
    );
  })(),
  $b = q.createContext(void 0);
$b.Consumer;
var Rd = {};
function MO(e, t, n) {
  var r = lm(e),
    o = e,
    i = !$d(e),
    s = t.attrs,
    a = s === void 0 ? $u : s,
    l = t.componentId,
    u =
      l === void 0
        ? (function (w, S) {
            var C = typeof w != "string" ? "sc" : Lg(w);
            Rd[C] = (Rd[C] || 0) + 1;
            var k = "".concat(C, "-").concat(oO(Eu + C + Rd[C]));
            return S ? "".concat(S, "-").concat(k) : k;
          })(t.displayName, t.parentComponentId)
        : l,
    d = t.displayName,
    f =
      d === void 0
        ? (function (w) {
            return $d(w) ? "styled.".concat(w) : "Styled(".concat(iO(w), ")");
          })(e)
        : d,
    p =
      t.displayName && t.componentId
        ? "".concat(Lg(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    x = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a,
    h = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var m = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var b = t.shouldForwardProp;
      h = function (w, S) {
        return m(w, S) && b(w, S);
      };
    } else h = m;
  }
  var _ = new OO(n, p, r ? o.componentStyle : void 0);
  function v(w, S) {
    return (function (C, k, $) {
      var M = C.attrs,
        O = C.componentStyle,
        A = C.defaultProps,
        z = C.foldedComponentIds,
        U = C.styledComponentId,
        B = C.target,
        D = q.useContext($b),
        R = Ug(),
        P = C.shouldForwardProp || R.shouldForwardProp,
        E = eO(k, D, A) || fi,
        N = (function (re, oe, pe) {
          for (
            var st,
              ee = Rt(Rt({}, oe), { className: void 0, theme: pe }),
              Se = 0;
            Se < re.length;
            Se += 1
          ) {
            var ie = pi((st = re[Se])) ? st(ee) : st;
            for (var ye in ie)
              ee[ye] =
                ye === "className"
                  ? Jr(ee[ye], ie[ye])
                  : ye === "style"
                  ? Rt(Rt({}, ee[ye]), ie[ye])
                  : ie[ye];
          }
          return (
            oe.className && (ee.className = Jr(ee.className, oe.className)), ee
          );
        })(M, k, E),
        T = N.as || B,
        W = {};
      for (var V in N)
        N[V] === void 0 ||
          V[0] === "$" ||
          V === "as" ||
          (V === "theme" && N.theme === E) ||
          (V === "forwardedAs"
            ? (W.as = N.forwardedAs)
            : (P && !P(V, T)) || (W[V] = N[V]));
      var le = (function (re, oe) {
          var pe = Ug(),
            st = re.generateAndInjectStyles(oe, pe.styleSheet, pe.stylis);
          return st;
        })(O, N),
        J = Jr(z, U);
      return (
        le && (J += " " + le),
        N.className && (J += " " + N.className),
        (W[$d(T) && !mb.has(T) ? "class" : "className"] = J),
        (W.ref = $),
        g.createElement(T, W)
      );
    })(y, w, S);
  }
  v.displayName = f;
  var y = q.forwardRef(v);
  return (
    (y.attrs = x),
    (y.componentStyle = _),
    (y.displayName = f),
    (y.shouldForwardProp = h),
    (y.foldedComponentIds = r
      ? Jr(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (y.styledComponentId = p),
    (y.target = r ? o.target : e),
    Object.defineProperty(y, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (w) {
        this._foldedDefaultProps = r
          ? (function (S) {
              for (var C = [], k = 1; k < arguments.length; k++)
                C[k - 1] = arguments[k];
              for (var $ = 0, M = C; $ < M.length; $++) dp(S, M[$], !0);
              return S;
            })({}, o.defaultProps, w)
          : w;
      },
    }),
    cm(y, function () {
      return ".".concat(y.styledComponentId);
    }),
    i &&
      bb(y, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    y
  );
}
function Wg(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Vg = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function LO(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (pi(e) || Fs(e)) return Vg(no(Wg($u, Jl([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? no(r)
    : Vg(no(Wg(r, t)));
}
function pp(e, t, n) {
  if ((n === void 0 && (n = fi), !t)) throw na(1, t);
  var r = function (o) {
    for (var i = [], s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
    return e(t, n, LO.apply(void 0, Jl([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return pp(
        e,
        t,
        Rt(Rt({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return pp(e, t, Rt(Rt({}, n), o));
    }),
    r
  );
}
var Rb = function (e) {
    return pp(MO, e);
  },
  Ru = Rb;
mb.forEach(function (e) {
  Ru[e] = Rb(e);
});
const AO = Ru.canvas`
  border: 10px solid black;
  width: 800px;
  height: 400px;
  box-sizing: border-box;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
`,
  IO = g.forwardRef(
    ({ draw: e, ...t }, n) => (
      g.useEffect(() => {
        if (!n) return;
        const r = n.current;
        if (!r) return;
        const o = r.getContext("2d");
        if (o) return e(o), () => o.clearRect(0, 0, window.innerWidth, 400);
      }, [e, n]),
      n ? c.jsx(AO, { width: 300, height: 150, ref: n, ...t }) : null
    )
  ),
  kt = 5,
  zO = ({ ctx: e, snakeBody: t, foodPosition: n }) => {
    n &&
      ((e.fillStyle = "rgb(0, 200, 0)"),
      e.fillRect(n == null ? void 0 : n.x, n == null ? void 0 : n.y, kt, kt)),
      (e.fillStyle = "rgb(200, 0, 0)"),
      t.forEach((r) => e.fillRect(r.x, r.y, kt, kt));
  },
  FO = Ru.div`
  width: 100%auto;
  display: flex;
  align-items: center;
  outline: none;
  flex-direction: column;
`,
  DO = Ru.h1`
  background: linear-gradient(to left, #753ad5, #d53a9d);
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
`,
  Cn = ({ gridSize: e = 5, threshold: t }) =>
    Math.floor(Math.random() * (t / e)) * e;
function BO(e, t) {
  const n = g.useRef(e);
  g.useLayoutEffect(() => {
    n.current = e;
  }, [e]),
    g.useEffect(() => {
      if (!t && t !== 0) return;
      const r = setInterval(() => n.current(), t);
      return () => clearInterval(r);
    }, [t]);
}
const UO = (e = 5) => ({
    moveRight: (t) => {
      const n = [...t],
        r = n[n.length - 1];
      return n.shift(), [...n, { ...r, x: r.x + e }];
    },
    moveLeft: (t) => {
      const n = [...t],
        r = n[n.length - 1];
      return n.shift(), [...n, { ...r, x: r.x - e }];
    },
    moveDown: (t) => {
      const n = [...t],
        r = n[n.length - 1];
      return n.shift(), [...n, { ...r, y: r.y + e }];
    },
    moveUp: (t) => {
      const n = [...t],
        r = n[n.length - 1];
      return n.shift(), [...n, { ...r, y: r.y - e }];
    },
  }),
  HO = ({ foodPosition: e, snakeHeadPosition: t, direction: n }) => {
    switch (n) {
      case ts.UP:
        return e.x === t.x && t.y - 5 === e.y;
      case ts.DOWN:
        return e.x === t.x && t.y + 5 === e.y;
      case ts.LEFT:
        return e.y === t.y && t.x - 5 === e.x;
      case ts.RIGHT:
        return e.y === t.y && t.x + 5 === e.x;
    }
  },
  WO = (e) => {
    if (e.length <= 1) return !1;
    const t = e[e.length - 1];
    return e.slice(0, e.length - 1).some((r) => r.x === t.x && r.y === t.y);
  };
var ts = ((e) => (
  (e[(e.UP = 0)] = "UP"),
  (e[(e.DOWN = 1)] = "DOWN"),
  (e[(e.LEFT = 2)] = "LEFT"),
  (e[(e.RIGHT = 3)] = "RIGHT"),
  e
))(ts || {});
const VO = 100,
  KO = ({ canvasHeight: e, canvasWidth: t, onGameOver: n, gameState: r }) => {
    const [o, i] = g.useState(),
      [s, a] = g.useState([{ x: 0, y: 0 }]),
      l = () => {
        i(void 0),
          d({
            x: Cn({ gridSize: kt, threshold: t }),
            y: Cn({ gridSize: kt, threshold: e }),
          }),
          a([
            {
              x: Cn({ gridSize: kt, threshold: t }),
              y: Cn({ gridSize: kt, threshold: e }),
            },
          ]);
      },
      [u, d] = g.useState(),
      f = s[s.length - 1],
      { moveDown: p, moveUp: x, moveLeft: h, moveRight: m } = UO();
    g.useEffect(() => {
      !e ||
        !t ||
        (d({
          x: Cn({ gridSize: kt, threshold: t }),
          y: Cn({ gridSize: kt, threshold: e }),
        }),
        a([
          {
            x: Cn({ gridSize: kt, threshold: t }),
            y: Cn({ gridSize: kt, threshold: e }),
          },
        ]));
    }, [e, t]);
    const b = (v) => {
      switch (v.code) {
        case "KeyS":
          o !== 0 && i(1);
          break;
        case "KeyW":
          o !== 1 && i(0);
          break;
        case "KeyD":
          o !== 2 && i(3);
          break;
        case "KeyA":
          o !== 3 && i(2);
          break;
      }
    };
    return (
      BO(
        () => {
          let v;
          switch (o) {
            case 0:
              f.y > 0 ? (v = x(s)) : t && f.x > t / 2 ? i(2) : i(3);
              break;
            case 1:
              e && f.y < e - kt ? (v = p(s)) : t && f.x > t / 2 ? i(2) : i(3);
              break;
            case 2:
              f.x > 0 ? (v = h(s)) : e && f.y < e / 2 ? i(1) : i(0);
              break;
            case 3:
              t && f.x < t - kt ? (v = m(s)) : e && f.y < e / 2 ? i(1) : i(0);
              break;
          }
          v && WO(v) && n(),
            o !== void 0 &&
            u &&
            HO({ foodPosition: u, snakeHeadPosition: f, direction: o })
              ? (a([...v, { x: u.x, y: u.y }]),
                d({ x: Cn({ threshold: t }), y: Cn({ threshold: e }) }))
              : v && a(v);
        },
        r === Pb.RUNNING ? VO : null
      ),
      { snakeBody: s, onKeyDownHandler: b, foodPosition: u, resetGameState: l }
    );
  };
var Pb = ((e) => (
  (e[(e.RUNNING = 0)] = "RUNNING"),
  (e[(e.GAME_OVER = 1)] = "GAME_OVER"),
  (e[(e.PAUSED = 2)] = "PAUSED"),
  e
))(Pb || {});
const qO = () => {
    const e = g.useRef(null),
      [t, n] = g.useState(0),
      r = () => n(1),
      {
        snakeBody: o,
        onKeyDownHandler: i,
        foodPosition: s,
        resetGameState: a,
      } = KO({
        canvasHeight: 150,
        canvasWidth: 300,
        onGameOver: r,
        gameState: t,
      }),
      l = (u) => {
        zO({ ctx: u, snakeBody: o, foodPosition: s });
      };
    return c.jsxs(FO, {
      tabIndex: 0,
      onKeyDown: i,
      children: [
        c.jsx(IO, { ref: e, draw: l }),
        t === 1
          ? c.jsx("button", {
              className: "btn__start",
              onClick: () => {
                n(0), a();
              },
              children: "Play Again",
            })
          : c.jsx("button", {
              className: "btn__start",
              onClick: () => {
                n(t === 0 ? 2 : 0);
              },
              children: t === 0 ? "pause" : "play",
            }),
        c.jsx(DO, { children: `Your score: ${(o.length - 1) * 10} ` }),
      ],
    });
  },
  GO = () =>
    c.jsxs("div", {
      className: "snake__container",
      children: [
        c.jsx("h2", {
          style: { margin: "20px", fontSize: "25px" },
          children: "Snake Game",
        }),
        c.jsx("p", { children: "W,S,D,A - for move" }),
        c.jsx(qO, {}),
      ],
    }),
  YO = "_layout_pdtiq_1",
  QO = "_confirm__container_pdtiq_43",
  Kg = { layout: YO, confirm__container: QO },
  XO = () => {
    const e = tt(),
      t = () => {
        e("/login");
      };
    return c.jsxs("div", {
      className: Kg.layout,
      children: [
        c.jsx("div", {
          children: c.jsxs("div", {
            className: Kg.confirm__container,
            children: [
              c.jsx("img", { src: Fr, alt: "mail" }),
              c.jsx("h2", { children: "Confirm your mail" }),
              c.jsx("p", { children: "Go to your email to confirm." }),
            ],
          }),
        }),
        c.jsx("button", { onClick: t, children: "Go to login" }),
      ],
    });
  },
  JO = "_avatar_sq1sv_1",
  ZO = "_avatar__container_sq1sv_7",
  eM = "_profile__count_sq1sv_16",
  tM = "_profile__count__container_sq1sv_20",
  nM = "_profile__description_sq1sv_33",
  rM = "_name__container_sq1sv_38",
  oM = "_divider_sq1sv_62",
  iM = "_follow__btn_sq1sv_70",
  sM = "_unfollow__btn_sq1sv_101",
  aM = "_user__name_sq1sv_106",
  lM = "_change__post__type__btn_sq1sv_111",
  cM = "_change__post__type__btn__active_sq1sv_127",
  ue = {
    avatar: JO,
    avatar__container: ZO,
    profile__count: eM,
    profile__count__container: tM,
    profile__description: nM,
    name__container: rM,
    divider: oM,
    follow__btn: iM,
    unfollow__btn: sM,
    user__name: aM,
    change__post__type__btn: lM,
    change__post__type__btn__active: cM,
  };
var um = {},
  uM = Gs;
Object.defineProperty(um, "__esModule", { value: !0 });
var ra = (um.default = void 0),
  dM = uM(tm()),
  fM = c;
ra = um.default = (0, dM.default)(
  (0, fM.jsx)("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  }),
  "Close"
);
const pM = () => {
    const [e, t] = g.useState(!1),
      [n, r] = g.useState({
        name: "",
        bio: "",
        located: "",
        birth_date: "",
        profileImg: null,
      }),
      [o, i] = g.useState(!1),
      [s, a] = g.useState(!1),
      [l, u] = g.useState(""),
      [d, f] = g.useState("");
    g.useEffect(() => {
      (async () => {
        const w = localStorage.getItem("accessToken");
        if (!w) {
          console.error("Access token not found in localStorage");
          return;
        }
        try {
          const C = (
            await H.patch(
              `https://social-netword-fsociety-gamma.vercel.app/api/update-profile/${w}/`,
              {}
            )
          ).data;
          r(C);
        } catch {
          f("Error fetching profile data.");
        }
      })();
    }, []);
    const p = (y) => {
        r({ ...n, [y.target.name]: y.target.value });
      },
      x = (y) => {
        r({ ...n, [y.target.name]: y.target.value });
      },
      h = (y) => {
        r({ ...n, profileImg: y.target.files ? y.target.files[0] : null });
        const w = y.target.files ? y.target.files[0] : null;
        if (w) {
          const S = new FileReader();
          (S.onloadend = () => {
            const C = S.result;
            u(C);
          }),
            S.readAsDataURL(w);
        }
      },
      m = async () => {
        var y, w;
        a(!0);
        try {
          const S = new FormData();
          S.append("name", n.name),
            S.append("bio", n.bio),
            S.append("located", n.located),
            S.append("birth_date", n.birth_date),
            n.profileImg && S.append("avatar", n.profileImg);
          const C = localStorage.getItem("accessToken");
          if (!C) {
            console.error("Access token not found in localStorage");
            return;
          }
          await H.patch(
            `https://social-netword-fsociety-gamma.vercel.app/api/update-profile/${C}/`,
            S,
            { headers: { "Content-Type": "multipart/form-data" } }
          ),
            a(!1),
            _(),
            window.location.reload();
        } catch (S) {
          a(!1),
            H.isAxiosError(S)
              ? f(
                  ((y = S.response) == null ? void 0 : y.data.error) ||
                    ((w = S.response) == null ? void 0 : w.data.bio)
                )
              : console.error("An unexpected error occurred:", S);
        }
      },
      b = () => {
        t(!0);
      },
      _ = () => {
        t(!1);
      },
      v = (y) => {
        y.preventDefault(), i(!o);
      };
    return c.jsxs(g.Fragment, {
      children: [
        c.jsx("button", {
          className: "edit__profile__btn",
          onClick: b,
          children: "Edit Profile",
        }),
        c.jsxs(xu, {
          onClose: _,
          open: e,
          maxWidth: "md",
          children: [
            c.jsx(ki, {
              "aria-label": "close",
              onClick: _,
              sx: {
                position: "absolute",
                right: 8,
                top: 8,
                color: (y) => y.palette.grey[500],
              },
              children: c.jsx(ra, {}),
            }),
            c.jsx(bu, {
              children: c.jsxs("form", {
                className: "edit__profile__form",
                children: [
                  d &&
                    c.jsx(tb, {
                      style: { color: "orange" },
                      className: "mb-3",
                      variant: "outlined",
                      severity: "warning",
                      children: d,
                    }),
                  c.jsxs("div", {
                    className: "row",
                    children: [
                      c.jsxs("div", {
                        className: "col-6",
                        children: [
                          c.jsxs("label", {
                            children: [
                              "Name:",
                              o
                                ? c.jsx("input", {
                                    type: "text",
                                    name: "name",
                                    value: n.name,
                                    onChange: p,
                                  })
                                : c.jsx("h2", { children: n.name }),
                            ],
                          }),
                          c.jsx("button", {
                            className: "edit__profile__btn",
                            onClick: (y) => v(y),
                            children: o ? "Save name" : "Change name",
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "col-6",
                        children: c.jsxs("label", {
                          children: [
                            "Bio:",
                            c.jsx("textarea", {
                              name: "bio",
                              value: n.bio,
                              onChange: x,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "row",
                    children: [
                      c.jsx("div", {
                        className: "col-6",
                        children: c.jsxs("label", {
                          children: [
                            "Country:",
                            c.jsx("input", {
                              required: !0,
                              maxLength: 18,
                              type: "text",
                              name: "located",
                              value: n.located,
                              onChange: p,
                            }),
                            "                                ",
                          ],
                        }),
                      }),
                      c.jsx("div", {
                        className: "col-6",
                        children: c.jsxs("label", {
                          children: [
                            "Date:",
                            c.jsx("input", {
                              required: !0,
                              type: "date",
                              min: "1900-01-01",
                              max: "2040-12-31",
                              name: "birth_date",
                              value: n.birth_date,
                              onChange: p,
                            }),
                            "                                ",
                          ],
                        }),
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "row",
                    children: c.jsxs("div", {
                      className: "col-12",
                      children: [
                        c.jsx("input", {
                          accept: "image/*",
                          id: "contained-button-file",
                          multiple: !0,
                          type: "file",
                          style: { display: "none" },
                          onChange: h,
                        }),
                        c.jsx("label", {
                          htmlFor: "contained-button-file",
                          children: c.jsx(yu, {
                            className: "edit__profile__btn",
                            variant: "contained",
                            color: "primary",
                            component: "span",
                            children: "Upload photo",
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.length > 0
                    ? c.jsx("div", {
                        className: "row",
                        children: c.jsx("div", {
                          className: "col-12 d-flex justify-content-center",
                          children: c.jsx("img", {
                            className: "upload__img",
                            src: l,
                            alt: "",
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            }),
            c.jsx(rb, {
              children: c.jsx("button", {
                className: "edit__profile__btn",
                type: "submit",
                onClick: m,
                children: s ? "Loading..." : "Submit",
              }),
            }),
          ],
        }),
      ],
    });
  },
  hM = "_add__post__submit_qh7l8_1",
  mM = "_add__post__submit__loading_qh7l8_12",
  gM = "_add__post__title_qh7l8_27",
  vM = "_add__post__container_qh7l8_33",
  yM = "_add__post__description_qh7l8_38",
  _M = "_upload__img__post_qh7l8_57",
  ur = {
    add__post__submit: hM,
    add__post__submit__loading: mM,
    add__post__title: gM,
    add__post__container: vM,
    add__post__description: yM,
    upload__img__post: _M,
  },
  xM = ({ userName: e }) => {
    const [t, n] = g.useState(!1),
      [r, o] = g.useState(null),
      [i, s] = g.useState(""),
      [a, l] = g.useState(!1),
      [u, d] = g.useState(""),
      [f, p] = g.useState(""),
      [x, h] = g.useState(""),
      [m, b] = g.useState("photo"),
      _ = () => {
        n(!0);
      },
      v = () => {
        n(!1);
      },
      y = ($) => {
        const M = $.target.files ? $.target.files[0] : null,
          O = 10;
        if (M)
          if (M.size > O * 1024 * 1024)
            h(`File size exceeds ${O} MB`), o(null), d("");
          else {
            const A = new FileReader();
            (A.onloadend = () => {
              const z = A.result;
              d(z);
            }),
              A.readAsDataURL(M),
              o(M),
              h("");
          }
      },
      w = ($) => {
        const M = $.target.files ? $.target.files[0] : null,
          O = 60;
        if (M) {
          const A = document.createElement("video");
          (A.preload = "metadata"),
            (A.onloadedmetadata = () => {
              if ((window.URL.revokeObjectURL(A.src), A.duration > O))
                h(`Тривалість відео перевищує ${O} секунд`), o(null), p("");
              else {
                const z = new FileReader();
                (z.onloadend = () => {
                  const U = z.result;
                  p(U);
                }),
                  z.readAsDataURL(M),
                  o(M),
                  h("");
              }
            }),
            (A.src = URL.createObjectURL(M));
        }
      },
      S = ($) => {
        s($.target.value);
      },
      C = ($) => {
        b($.target.value), o(null), d(""), p(""), s("");
      },
      k = async () => {
        var M;
        l(!0);
        const $ = new FormData();
        r && (m == "photo" ? $.append("image", r) : $.append("video", r)),
          $.append("description", i),
          $.append("author", e);
        try {
          r || (h("No upload photo"), new Error("no photo"), l(!1)),
            m == "photo"
              ? await H.post(
                  "https://social-netword-fsociety-gamma.vercel.app/posts/create/",
                  $
                )
              : await H.post(
                  "https://social-netword-fsociety-gamma.vercel.app/reels/create/",
                  $
                ),
            l(!1),
            v(),
            window.location.reload();
        } catch (O) {
          H.isAxiosError(O)
            ? h(
                (M = O.response) == null ? void 0 : M.data.errors.description[0]
              )
            : h(""),
            l(!1);
        }
      };
    return c.jsxs(g.Fragment, {
      children: [
        c.jsx("button", {
          title: "Add post",
          className: ur.add__post,
          onClick: _,
          children: c.jsx(aj, {}),
        }),
        c.jsxs(xu, {
          onClose: v,
          open: t,
          maxWidth: "md",
          children: [
            c.jsx(ki, {
              "aria-label": "close",
              onClick: v,
              sx: {
                position: "absolute",
                right: 8,
                top: 8,
                color: ($) => $.palette.grey[500],
              },
              children: c.jsx(ra, {}),
            }),
            c.jsxs(bu, {
              children: [
                c.jsx("div", {
                  className: "row",
                  children: c.jsx("div", {
                    className: "col-12",
                    children: c.jsx("h2", {
                      className: ur.add__post__title,
                      children: "Add post",
                    }),
                  }),
                }),
                x &&
                  c.jsx(tb, {
                    style: { color: "orange" },
                    className: "mb-3",
                    variant: "outlined",
                    severity: "warning",
                    children: x,
                  }),
                c.jsx("div", {
                  className: "row",
                  children: c.jsx("div", {
                    className: "col-12",
                    children: c.jsxs(SN, {
                      children: [
                        c.jsx(VN, {
                          style: { color: "white" },
                          id: "demo-row-radio-buttons-group-label",
                          children: "Post Type",
                        }),
                        c.jsxs(aT, {
                          row: !0,
                          "aria-labelledby":
                            "demo-row-radio-buttons-group-label",
                          name: "row-radio-buttons-group",
                          value: m,
                          onChange: C,
                          children: [
                            c.jsx(kg, {
                              style: { color: "white" },
                              value: "photo",
                              control: c.jsx(Rg, {
                                color: "success",
                                sx: {
                                  color: $n[800],
                                  "&.Mui-checked": { color: $n[600] },
                                },
                              }),
                              label: "Photo post",
                            }),
                            c.jsx(kg, {
                              style: { color: "white" },
                              value: "reels",
                              control: c.jsx(Rg, {
                                color: "success",
                                sx: {
                                  color: $n[800],
                                  "&.Mui-checked": { color: $n[600] },
                                },
                              }),
                              label: "Reels",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                c.jsx("div", {
                  className: "row",
                  children: c.jsx("div", {
                    className: "col-12",
                    children: c.jsx("div", {
                      className: ur.add__post__container,
                      children: c.jsxs("div", {
                        className: "row",
                        children: [
                          c.jsxs("div", {
                            className:
                              "col-6 d-flex flex-column align-items-center justify-content-center",
                            children: [
                              c.jsx("input", {
                                accept: m == "photo" ? "image/*" : "video/mp4",
                                id: "contained-button-file",
                                multiple: !0,
                                type: "file",
                                style: { display: "none" },
                                onChange: m == "photo" ? y : w,
                              }),
                              c.jsx("label", {
                                htmlFor: "contained-button-file",
                                children: c.jsx(yu, {
                                  className: "edit__profile__btn",
                                  variant: "contained",
                                  color: "primary",
                                  component: "span",
                                  children:
                                    m === "photo"
                                      ? "Upload photo"
                                      : "Upload reels",
                                }),
                              }),
                              u.length > 0 || f.length > 0
                                ? c.jsx("div", {
                                    className: "row",
                                    children: c.jsx("div", {
                                      className:
                                        "col-12 d-flex justify-content-center",
                                      children:
                                        m == "photo"
                                          ? c.jsx("img", {
                                              className: ur.upload__img__post,
                                              src: u,
                                              alt: "",
                                            })
                                          : c.jsx("video", {
                                              className: ur.upload__img__post,
                                              src: f,
                                              controls: !0,
                                            }),
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          c.jsx("div", {
                            className:
                              "col-6 d-flex align-items-center justify-content-center",
                            children: c.jsxs("label", {
                              className: ur.add__post__description,
                              children: [
                                "Post description:",
                                c.jsx("textarea", {
                                  name: "description",
                                  value: i,
                                  onChange: S,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            c.jsx(rb, {
              children: a
                ? c.jsx("p", {
                    className: ur.add__post__submit__loading,
                    children: "Loading...",
                  })
                : c.jsx("button", {
                    className: ur.add__post__submit,
                    type: "submit",
                    onClick: k,
                    children: " Add Post ",
                  }),
            }),
          ],
        }),
      ],
    });
  },
  bM = ({ userData: e, postOrReels: t, setPostOrReels: n }) =>
    c.jsx("div", {
      className: ue.profile__container,
      children:
        e &&
        c.jsxs(c.Fragment, {
          children: [
            c.jsxs("div", {
              className: "row",
              children: [
                c.jsx("div", { className: "col-12" }),
                c.jsx("div", {
                  className: "col-2",
                  children: c.jsx("div", {
                    className: ue.avatar__container,
                    children: c.jsx("img", {
                      className: ue.avatar,
                      src: e.avatar.slice(13),
                      alt: "avatar",
                    }),
                  }),
                }),
                c.jsxs("div", {
                  className: "col-10 d-flex flex-column justify-content-around",
                  children: [
                    c.jsx("div", {
                      className: ue.name__container,
                      children: c.jsxs("div", {
                        className: "row d-flex justify-content-between",
                        children: [
                          c.jsx("div", {
                            className: "col-4",
                            children: c.jsx("h2", { children: e.name }),
                          }),
                          c.jsxs("div", {
                            className: "col-4 d-flex justify-content-end",
                            children: [
                              c.jsx(xM, { userName: e.name }),
                              c.jsx(pM, {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                    c.jsx("div", {
                      className: "row",
                      children: c.jsxs("div", {
                        className: "col-12 d-flex justify-content-between",
                        children: [
                          c.jsxs("p", {
                            className: ue.profile__count,
                            children: [
                              c.jsx("span", { children: e.post_count || 0 }),
                              "Posts",
                            ],
                          }),
                          c.jsxs(Ll, {
                            to: `/${e.name}/friends`,
                            className: ue.profile__count,
                            children: [
                              c.jsx("span", { children: e.friends_count || 0 }),
                              "Friends",
                            ],
                          }),
                          c.jsxs(Ll, {
                            to: `/${e.name}/followers`,
                            className: ue.profile__count,
                            children: [
                              c.jsx("span", {
                                children: e.subscribers_count || 0,
                              }),
                              "Followers",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsx("div", {
                  className: ue.profile__count__container,
                  children: c.jsxs("div", {
                    className: "row",
                    children: [
                      c.jsx("div", {
                        className: "col-3",
                        children: c.jsxs("p", {
                          className: ue.profile__count,
                          children: [c.jsx(Fx, {}), e.located],
                        }),
                      }),
                      c.jsx("div", {
                        className: "col-3",
                        children: c.jsxs("p", {
                          className: ue.profile__count,
                          children: [c.jsx(Ix, {}), e.birth_date],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsx("div", {
                  className: ue.profile__description,
                  children: c.jsx("p", { children: e.bio }),
                }),
              }),
            }),
            c.jsxs("div", {
              className: "row",
              children: [
                c.jsx("div", {
                  className:
                    "col-6 d-flex justify-content-center align-items-center",
                  children: c.jsx("button", {
                    className:
                      t == "post"
                        ? ue.change__post__type__btn__active
                        : ue.change__post__type__btn,
                    onClick: () => {
                      n("post");
                    },
                    children: c.jsx(zx, {}),
                  }),
                }),
                c.jsx("div", {
                  className:
                    "col-6 d-flex justify-content-center align-items-center",
                  children: c.jsx("button", {
                    className:
                      t == "reels"
                        ? ue.change__post__type__btn__active
                        : ue.change__post__type__btn,
                    onClick: () => {
                      n("reels");
                    },
                    children: c.jsx(Dx, {}),
                  }),
                }),
              ],
            }),
            c.jsx(Xl, { className: ue.divider }),
          ],
        }),
    }),
  wM = "_profile__container_67mcr_1",
  Nb = { profile__container: wM },
  SM = ({ id: e, post: t, autor: n, myProfile: r }) => {
    const [o, i] = g.useState(!1),
      [s, a] = g.useState(t.isLiked),
      [l, u] = g.useState(0);
    g.useEffect(() => {
      u(t.likes);
    }, [t.likes]);
    const d = () => {
        i(!0);
      },
      f = () => {
        i(!1);
      },
      p = async () => {
        try {
          const v = new FormData();
          v.append("name_user", r.name),
            v.append("post_id", e.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/posts/like/",
              v
            );
        } catch (v) {
          console.log(v);
        }
      },
      x = async () => {
        try {
          const v = new FormData();
          v.append("name_user", n.name),
            v.append("post_id", e.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/posts/unlike/",
              v
            );
        } catch (v) {
          console.log(v);
        }
      },
      h = () => {
        s ? x() : p(), u(s ? l - 1 : l + 1), a(!s);
      },
      b = {
        label: "Delete post",
        onClick: async () => {
          try {
            const v = new FormData();
            v.append("name_user", n.name),
              v.append("post_id", e.toString()),
              await H.post(
                "https://social-netword-fsociety-gamma.vercel.app/posts/delete/",
                v
              ),
              window.location.reload();
          } catch (v) {
            console.log(v);
          }
        },
      },
      _ = [];
    return (
      _.push(b),
      c.jsx("div", {
        className: "col-4 d-flex justify-content-center",
        children: c.jsxs(q.Fragment, {
          children: [
            c.jsx(yu, {
              className: "post__img",
              variant: "outlined",
              onClick: d,
              children: c.jsx("img", {
                className: "post__img__label)",
                src: t.image,
                alt: "postImgTitle",
              }),
            }),
            c.jsxs(xu, {
              onClose: f,
              "aria-labelledby": "customized-dialog-title",
              open: o,
              maxWidth: "md",
              children: [
                c.jsx(ki, {
                  "aria-label": "close",
                  onClick: f,
                  sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (v) => v.palette.grey[500],
                  },
                  children: c.jsx(ra, {}),
                }),
                c.jsx(bu, {
                  dividers: !0,
                  children: c.jsxs("div", {
                    className: "row",
                    children: [
                      c.jsx("div", {
                        className: "col-6 d-flex justify-content-center",
                        children: c.jsx("img", {
                          className: "open__post__img",
                          src: t.image,
                          alt: "postImgTitle",
                        }),
                      }),
                      c.jsxs("div", {
                        className:
                          "col-6 d-flex flex-column justify-content-between",
                        children: [
                          c.jsxs("div", {
                            className: "profile__container",
                            children: [
                              c.jsxs("div", {
                                className:
                                  "row d-flex justify-content-between align-items-center",
                                children: [
                                  c.jsx("div", {
                                    className: "col-10",
                                    children: c.jsxs("div", {
                                      className:
                                        "row justify-content-start align-items-center",
                                      children: [
                                        c.jsx("div", {
                                          className: "col-3",
                                          children: c.jsx("img", {
                                            src: n.avatar,
                                            alt: "avatar",
                                          }),
                                        }),
                                        c.jsx("div", {
                                          className: "col-6",
                                          children: c.jsx("h2", {
                                            children: n.name,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  r.name === n.name
                                    ? c.jsx("div", {
                                        className: "col-2",
                                        children: c.jsx(ji, { options: _ }),
                                      })
                                    : null,
                                ],
                              }),
                              c.jsx("div", {
                                className: "row",
                                children: c.jsx("div", {
                                  className: "col-12",
                                  children: c.jsx("p", {
                                    className: "post__description",
                                    children: c.jsx(ta, {
                                      text: t.description,
                                      lenghtText: 35,
                                    }),
                                  }),
                                }),
                              }),
                              c.jsx(wu, {
                                myProfile: r,
                                maxHeightValue: "50vh",
                                heightValue: "50vh",
                                id: e,
                                comments: t.comments,
                                postOrReel: "post",
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "row",
                            children: c.jsxs("div", {
                              className: "col-3 d-flex align-items-center",
                              children: [
                                c.jsx("button", {
                                  className: "post__like",
                                  onClick: h,
                                  children: s
                                    ? c.jsx(nu, { style: { color: "red" } })
                                    : c.jsx(ru, {}),
                                }),
                                c.jsx("p", {
                                  style: { color: "white" },
                                  children: l,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  CM = "_nothing__posted_1pjcr_1",
  Pd = { nothing__posted: CM },
  kM = (e) =>
    new Promise((t, n) => {
      const r = document.createElement("video");
      (r.src = e),
        (r.crossOrigin = "anonymous"),
        (r.muted = !0),
        r.play(),
        r.addEventListener("loadeddata", () => {
          r.currentTime = Math.min(0.5, r.duration - 0.5);
        }),
        r.addEventListener("seeked", () => {
          const o = document.createElement("canvas");
          (o.width = r.videoWidth), (o.height = r.videoHeight);
          const i = o.getContext("2d");
          if (i) {
            i.drawImage(r, 0, 0, o.width, o.height);
            const s = o.toDataURL("image/png");
            t(s);
          } else n(new Error("Failed to get 2D context"));
          r.pause();
        }),
        r.addEventListener("error", (o) => {
          n(o);
        });
    }),
  jM = ({ id: e, reel: t, autor: n, myProfile: r }) => {
    const [o, i] = g.useState(!1),
      [s, a] = g.useState(t.isLiked),
      [l, u] = g.useState(""),
      [d, f] = g.useState(0);
    g.useEffect(() => {
      f(t.likes),
        kM(t.video)
          .then((w) => u(w))
          .catch((w) => console.error("Error generating thumbnail:", w));
    }, [t.likes, t.video]);
    const p = () => {
        i(!0);
      },
      x = () => {
        i(!1);
      },
      h = async () => {
        try {
          const w = new FormData();
          w.append("name_user", r.name),
            w.append("reel_id", e.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/reels/like/",
              w
            );
        } catch (w) {
          console.log(w);
        }
      },
      m = async () => {
        try {
          const w = new FormData();
          w.append("name_user", n.name),
            w.append("reel_id", e.toString()),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/reels/unlike/",
              w
            );
        } catch (w) {
          console.log(w);
        }
      },
      b = () => {
        s ? m() : h(), f(s ? d - 1 : d + 1), a(!s);
      },
      v = {
        label: "Delete post",
        onClick: async () => {
          try {
            const w = new FormData();
            w.append("name_user", n.name),
              w.append("post_id", e.toString()),
              await H.post(
                "https://social-netword-fsociety-gamma.vercel.app/reels/delete/",
                w
              ),
              window.location.reload();
          } catch (w) {
            console.log(w);
          }
        },
      },
      y = [];
    return (
      y.push(v),
      c.jsx("div", {
        className: "col-4 d-flex justify-content-center",
        children: c.jsxs(q.Fragment, {
          children: [
            c.jsx(yu, {
              className: "post__img",
              variant: "outlined",
              onClick: p,
              children: l
                ? c.jsx("img", {
                    className: "post__img__label)",
                    src: l,
                    alt: "postImgTitle",
                  })
                : null,
            }),
            c.jsxs(xu, {
              onClose: x,
              "aria-labelledby": "customized-dialog-title",
              open: o,
              maxWidth: "md",
              children: [
                c.jsx(ki, {
                  "aria-label": "close",
                  onClick: x,
                  sx: {
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (w) => w.palette.grey[500],
                  },
                  children: c.jsx(ra, {}),
                }),
                c.jsx(bu, {
                  dividers: !0,
                  children: c.jsxs("div", {
                    className: "row",
                    children: [
                      c.jsx("div", {
                        className: "col-6 d-flex justify-content-center",
                        children: c.jsx("video", {
                          className: "open__post__img",
                          src: t.video,
                          controls: !0,
                        }),
                      }),
                      c.jsxs("div", {
                        className:
                          "col-6 d-flex flex-column justify-content-between",
                        children: [
                          c.jsxs("div", {
                            className: "profile__container",
                            children: [
                              c.jsxs("div", {
                                className:
                                  "row d-flex justify-content-between align-items-center",
                                children: [
                                  c.jsx("div", {
                                    className: "col-10",
                                    children: c.jsxs("div", {
                                      className:
                                        "row justify-content-start align-items-center",
                                      children: [
                                        c.jsx("div", {
                                          className: "col-3",
                                          children: c.jsx("img", {
                                            src: n.avatar,
                                            alt: "avatar",
                                          }),
                                        }),
                                        c.jsx("div", {
                                          className: "col-6",
                                          children: c.jsx("h2", {
                                            children: n.name,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  r.name === n.name
                                    ? c.jsx("div", {
                                        className: "col-2",
                                        children: c.jsx(ji, { options: y }),
                                      })
                                    : null,
                                ],
                              }),
                              c.jsx("div", {
                                className: "row",
                                children: c.jsx("div", {
                                  className: "col-12",
                                  children: c.jsx("p", {
                                    className: "post__description",
                                    children: c.jsx(ta, {
                                      text: t.description,
                                      lenghtText: 35,
                                    }),
                                  }),
                                }),
                              }),
                              c.jsx(wu, {
                                myProfile: r,
                                maxHeightValue: "50vh",
                                heightValue: "50vh",
                                id: e,
                                comments: t.comments,
                                postOrReel: "reels",
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "row",
                            children: c.jsxs("div", {
                              className: "col-3 d-flex align-items-center",
                              children: [
                                c.jsx("button", {
                                  className: "post__like",
                                  onClick: b,
                                  children: s
                                    ? c.jsx(nu, { style: { color: "red" } })
                                    : c.jsx(ru, {}),
                                }),
                                c.jsx("p", {
                                  style: { color: "white" },
                                  children: d,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Tb = ({ userData: e, myProfile: t, postOrReels: n }) => {
    const [r, o] = g.useState([]),
      [i, s] = g.useState([]),
      [a, l] = g.useState(!1);
    return (
      g.useEffect(() => {
        (async () => {
          try {
            if ((l(!1), n === "post")) {
              const f = (
                await H.get(
                  `https://social-netword-fsociety-gamma.vercel.app/posts/lookPostUser/${e.name}`
                )
              ).data.sort((p, x) => x.id - p.id);
              o(f);
            } else {
              const f = (
                await H.get(
                  `https://social-netword-fsociety-gamma.vercel.app/reels/reelsUser/${e.name}`
                )
              ).data.sort((p, x) => x.id - p.id);
              s(f);
            }
            l(!0);
          } catch (d) {
            console.error("Error fetching user posts:", d);
          }
        })();
      }, [e, n]),
      c.jsx("div", {
        className: Pd.desc__container,
        children: c.jsx("div", {
          className: "row",
          children: a
            ? n === "post"
              ? r.length !== 0 && t
                ? r.map((u) =>
                    c.jsx(
                      SM,
                      { myProfile: t, id: u.id, autor: u.author, post: u.post },
                      u.id
                    )
                  )
                : c.jsx("div", {
                    className: "col-12",
                    children: c.jsx("p", {
                      className: Pd.nothing__posted,
                      children: "Nothing posted",
                    }),
                  })
              : i.length !== 0 && t
              ? i.map((u) =>
                  c.jsx(
                    jM,
                    { myProfile: t, id: u.id, autor: u.author, reel: u.reel },
                    u.id
                  )
                )
              : c.jsx("div", {
                  className: "col-12",
                  children: c.jsx("p", {
                    className: Pd.nothing__posted,
                    children: "Nothing posted",
                  }),
                })
            : c.jsx("div", {
                className:
                  "col-12 d-flex justify-content-center align-items-center",
                children: c.jsx(Br, { color: "success" }),
              }),
        }),
      })
    );
  };
function EM() {
  const e = g.useContext(mo),
    [t, n] = g.useState("post");
  return c.jsx(N_, {
    children: e
      ? c.jsxs("div", {
          className: Nb.profile__container,
          children: [
            c.jsx(bM, { userData: e, postOrReels: t, setPostOrReels: n }),
            c.jsx(Tb, { userData: e, myProfile: e, postOrReels: t }),
          ],
        })
      : null,
  });
}
const $M = ({ userData: e, postOrReels: t, setPostOrReels: n }) => {
    const [r] = g.useState(e),
      [o, i] = g.useState(!1),
      [s, a] = g.useState([]),
      l = tt(),
      u = g.useContext(mo);
    g.useEffect(() => {
      (async () => {
        try {
          const h = await H.get(
            `https://social-netword-fsociety-gamma.vercel.app/friend/followers/${
              u == null ? void 0 : u.name
            }`
          );
          a(h.data);
        } catch (h) {
          console.error("Error fetching user data:", h);
        }
      })();
    }, [u == null ? void 0 : u.name]),
      g.useEffect(() => {
        s.length !== 0 && i(s.some((x) => x.name === r.name));
      }, [s, r.name]);
    const d = async (x) => {
        x.stopPropagation();
        try {
          await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/friend/add/",
            { friend_name: e.name, user_name: u == null ? void 0 : u.name }
          ),
            i(!0);
        } catch (h) {
          console.error("Error adding friend:", h);
        }
      },
      f = async (x) => {
        x.stopPropagation();
        try {
          await H.delete(
            "https://social-netword-fsociety-gamma.vercel.app/friend/remove/",
            {
              data: {
                friend_name: e.name,
                user_name: u == null ? void 0 : u.name,
              },
            }
          ),
            i(!1);
        } catch (h) {
          console.error("Помилка при видаленні друга:", h);
        }
      },
      p = async (x) => {
        x.stopPropagation(), x.preventDefault();
        try {
          if (u) {
            const h = new FormData();
            h.append("sender_name", u.name),
              h.append("receiver_name", e.name),
              await H.post(
                "https://social-netword-fsociety-gamma.vercel.app/chat/create_chat_room/",
                h
              );
          }
        } catch (h) {
          console.log(h);
        } finally {
          l("/message/");
        }
      };
    return c.jsx("div", {
      className: ue.profile__container,
      children:
        e &&
        c.jsxs(c.Fragment, {
          children: [
            c.jsxs("div", {
              className: "row",
              children: [
                c.jsx("div", { className: "col-12" }),
                c.jsx("div", {
                  className: "col-2",
                  children:
                    e.avatar &&
                    e.avatar.length >= 13 &&
                    c.jsx("div", {
                      className: ue.avatar__container,
                      children: c.jsx("img", {
                        className: ue.avatar,
                        src: e.avatar.slice(13),
                        alt: "avatar",
                      }),
                    }),
                }),
                c.jsxs("div", {
                  className: "col-10 d-flex flex-column justify-content-around",
                  children: [
                    c.jsx("div", {
                      className: ue.follow__btn,
                      children: c.jsxs("div", {
                        className: "row d-flex justify-content-between",
                        children: [
                          c.jsx("div", {
                            className: "col-4",
                            children: c.jsx("h2", {
                              className: ue.user__name,
                              children: e.name,
                            }),
                          }),
                          c.jsxs("div", {
                            className: "col-4 d-flex justify-content-end",
                            children: [
                              c.jsx("button", {
                                onClick: p,
                                children: c.jsx(Bh, {}),
                              }),
                              r.name !== (u == null ? void 0 : u.name)
                                ? o
                                  ? c.jsx("button", {
                                      className: ue.unfollow__btn,
                                      onClick: f,
                                      children: "Unfollow",
                                    })
                                  : c.jsx("button", {
                                      onClick: d,
                                      children: "Follow",
                                    })
                                : null,
                              "                                ",
                            ],
                          }),
                        ],
                      }),
                    }),
                    c.jsx("div", {
                      className: "row",
                      children: c.jsxs("div", {
                        className: "col-12 d-flex justify-content-between",
                        children: [
                          c.jsxs("p", {
                            className: ue.profile__count,
                            children: [
                              c.jsx("span", { children: e.post_count || 0 }),
                              "Posts",
                            ],
                          }),
                          c.jsxs(Ll, {
                            to: `/${e.name}/friends`,
                            className: ue.profile__count,
                            children: [
                              c.jsx("span", { children: e.friends_count || 0 }),
                              "Friends",
                            ],
                          }),
                          c.jsxs(Ll, {
                            to: `/${e.name}/followers`,
                            className: ue.profile__count,
                            children: [
                              c.jsx("span", {
                                children: e.subscribers_count || 0,
                              }),
                              "Followers",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsx("div", {
                  className: ue.profile__count__container,
                  children: c.jsxs("div", {
                    className: "row",
                    children: [
                      c.jsx("div", {
                        className: "col-3",
                        children: c.jsxs("p", {
                          className: ue.profile__count,
                          children: [c.jsx(Fx, {}), e.located],
                        }),
                      }),
                      c.jsx("div", {
                        className: "col-3",
                        children: c.jsxs("p", {
                          className: ue.profile__count,
                          children: [c.jsx(Ix, {}), e.birth_date],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsx(Xl, {}),
              }),
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "col-12",
                children: c.jsx("div", {
                  className: ue.profile__description,
                  children: c.jsxs("p", { children: [" ", e.bio] }),
                }),
              }),
            }),
            c.jsxs("div", {
              className: "row",
              children: [
                c.jsx("div", {
                  className:
                    "col-6 d-flex justify-content-center align-items-center",
                  children: c.jsx("button", {
                    className:
                      t == "post"
                        ? ue.change__post__type__btn__active
                        : ue.change__post__type__btn,
                    onClick: () => {
                      n("post");
                    },
                    children: c.jsx(zx, {}),
                  }),
                }),
                c.jsx("div", {
                  className:
                    "col-6 d-flex justify-content-center align-items-center",
                  children: c.jsx("button", {
                    className:
                      t == "reels"
                        ? ue.change__post__type__btn__active
                        : ue.change__post__type__btn,
                    onClick: () => {
                      n("reels");
                    },
                    children: c.jsx(Dx, {}),
                  }),
                }),
              ],
            }),
            c.jsx(Xl, { className: ue.divider }),
          ],
        }),
    });
  },
  RM = () => {
    const { userName: e } = $f(),
      t = g.useContext(mo),
      [n, r] = g.useState(null),
      [o, i] = g.useState("post");
    return (
      g.useEffect(() => {
        (async () => {
          try {
            const a = await H.get(
              `https://social-netword-fsociety-gamma.vercel.app/friend/profile/${e}`
            );
            r(a.data.user_info);
          } catch (a) {
            console.error("Error fetching user data:", a);
          }
        })();
      }, [e]),
      c.jsx(GP, {
        children: n
          ? c.jsxs("div", {
              className: Nb.profile__container,
              children: [
                c.jsx($M, { userData: n, setPostOrReels: i, postOrReels: o }),
                t
                  ? c.jsx(Tb, { myProfile: t, userData: n, postOrReels: o })
                  : null,
              ],
            })
          : c.jsx("div", {
              style: {
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              children: c.jsx(Br, { color: "success" }),
            }),
      })
    );
  },
  PM = "_about__layout_1qaxq_1",
  NM = "_about__container_1qaxq_10",
  TM = "_text__layout_1qaxq_23",
  OM = "_text__container__product_1qaxq_29",
  MM = "_text__container__team_1qaxq_46",
  LM = "_text__section_1qaxq_63",
  AM = "_logo__container_1qaxq_69",
  IM = "_error__container_1qaxq_80",
  at = {
    about__layout: PM,
    about__container: NM,
    text__layout: TM,
    text__container__product: OM,
    text__container__team: MM,
    text__section: LM,
    logo__container: AM,
    error__container: IM,
  },
  zM = () =>
    c.jsx("div", {
      className: "d-flex justify-content-center",
      children: c.jsx("div", {
        className: at.about__layout,
        children: c.jsxs("div", {
          className: at.about__container,
          children: [
            c.jsx("div", {
              className: "d-flex justify-content-center",
              children: c.jsx("div", {
                className: at.logo__container,
                children: c.jsx("img", { src: Fr, alt: "logo" }),
              }),
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "d-flex align-items-center",
                children: c.jsxs("div", {
                  className: at.text__layout,
                  children: [
                    c.jsxs("div", {
                      className: at.text__container__product,
                      children: [
                        c.jsx("div", {
                          className: at.text__section,
                          children: c.jsx("h2", {
                            children: "About Our Product:",
                          }),
                        }),
                        c.jsxs("div", {
                          className: at.text__section,
                          children: [
                            c.jsx("h3", {
                              children:
                                'Welcome to the "About Our Product" page! We are excited to introduce you to our offerings, designed to make your life easier and provide you with the latest and most effective ',
                            }),
                            c.jsx("h3", {
                              children:
                                "Our team is committed to developing innovative products that meet modern demands and user needs. We strive to provide you with convenience, efficiency, and safety in using our products.",
                            }),
                            c.jsx("h3", {
                              children:
                                "Whether you're looking for entertainment, work tools, or communication platforms, we have something for you. From exciting games to powerful business tools, you'll find everything you need to achieve your goals.",
                            }),
                            c.jsx("h3", {
                              children:
                                "We take pride in our products and are always ready to answer your questions and assist you with any inquiries. Join our community today and learn more about how our product can positively impact your life!",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: at.text__section,
                          children: [
                            c.jsx("h2", { children: "Best regards," }),
                            c.jsx("h2", { children: "Fsociety Team" }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("div", {
                      className: at.text__container__team,
                      children: [
                        c.jsx("div", {
                          className: at.text__section,
                          children: c.jsx("h2", { children: "Our team:" }),
                        }),
                        c.jsxs("div", {
                          className: at.text__section,
                          children: [
                            c.jsx("h2", { children: "Frontend:" }),
                            c.jsx("h3", { children: "Bogdan Bayurchak" }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: at.text__section,
                          children: [
                            c.jsx("h2", { children: "Backend" }),
                            c.jsx("h3", { children: "Oleksandr Kuchera" }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: at.text__section,
                          children: [
                            c.jsx("h2", { children: "Site layout" }),
                            c.jsx("h3", { children: "Serhii Oleniak" }),
                            c.jsx("h3", { children: "Maksym Kuryliuk" }),
                            c.jsx("h3", { children: "Dariia Fomina" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  FM = "_login__title_199bg_1",
  DM = "_forgot__password_199bg_9",
  BM = "_recomendation_199bg_21",
  UM = "_recomendation__link_199bg_27",
  HM = "_error_199bg_36",
  WM = "_login_form_container_199bg_48",
  Ze = {
    login__title: FM,
    forgot__password: DM,
    recomendation: BM,
    recomendation__link: UM,
    error: HM,
    login_form_container: WM,
  },
  VM = () => {
    const [e, t] = g.useState({ email: "", password: "" }),
      [n, r] = g.useState(!1),
      o = tt(),
      [i, s] = g.useState(""),
      a = (u) => {
        t({ ...e, [u.target.name]: u.target.value });
      },
      l = async (u) => {
        var d, f;
        u.preventDefault(), r(!0);
        try {
          const p = await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/api/login/",
            e
          );
          localStorage.setItem("accessToken", p.data.accessToken),
            setTimeout(() => {
              r(!1), o("/home");
            }, 2e3);
        } catch (p) {
          H.isAxiosError(p)
            ? (console.error(
                "Error:",
                (d = p.response) == null ? void 0 : d.data
              ),
              s((f = p.response) == null ? void 0 : f.data.error),
              r(!1))
            : console.error("An unexpected error occurred:", p);
        }
      };
    return c.jsx("div", {
      className: Ze.login_form_container,
      children: n
        ? c.jsx("div", {
            className: Ze.loading,
            children: c.jsx(Br, { color: "success" }),
          })
        : c.jsxs("div", {
            className: "container",
            children: [
              c.jsx("div", {
                className: "row",
                children: c.jsxs("div", {
                  className: "col",
                  children: [
                    c.jsx("h2", {
                      className: Ze.login__title,
                      children: "Welcome back!",
                    }),
                    c.jsxs("form", {
                      onSubmit: l,
                      children: [
                        i &&
                          c.jsxs("div", {
                            className: Ze.error,
                            children: [
                              c.jsx(Xs, {}),
                              c.jsx("p", { children: i }),
                            ],
                          }),
                        c.jsx("label", {
                          htmlFor: "email",
                          children: c.jsx("input", {
                            type: "email",
                            placeholder: "Your email",
                            id: "email",
                            name: "email",
                            required: !0,
                            onChange: a,
                          }),
                        }),
                        c.jsx("label", {
                          htmlFor: "password",
                          children: c.jsx("input", {
                            type: "password",
                            placeholder: "Your password",
                            id: "password",
                            name: "password",
                            required: !0,
                            onChange: a,
                          }),
                        }),
                        c.jsx("input", { type: "submit", value: "Login" }),
                        c.jsx("a", {
                          children: c.jsx(It, {
                            className: Ze.forgot__password,
                            to: "/forgot-password",
                            children: "Forgot password?",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              c.jsx("div", {
                className: Ze.recomendation,
                children: c.jsxs("p", {
                  children: [
                    "Don’t have an account? ",
                    c.jsx(It, {
                      className: Ze.recomendation__link,
                      to: "/register",
                      children: c.jsx("strong", { children: "Sign Up" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
    });
  },
  KM = () => {
    const [e, t] = g.useState(!1),
      [n, r] = g.useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      }),
      [o, i] = g.useState(""),
      s = tt(),
      a = (u) => {
        const { name: d, value: f } = u.target;
        r({ ...n, [d]: f });
      },
      l = async (u) => {
        var d, f;
        if (
          (u.preventDefault(), t(!0), i(""), n.password !== n.confirmPassword)
        ) {
          i("Passwords do not match"), t(!1);
          return;
        }
        if (n.password.length < 8) {
          i("Password must be at least 8 characters long"), t(!1);
          return;
        }
        if (
          !/[a-z]/.test(n.password) ||
          !/[A-Z]/.test(n.password) ||
          !/[0-9]/.test(n.password)
        ) {
          i(
            "Password must contain at least one lowercase letter, one uppercase letter, and one digit"
          ),
            t(!1);
          return;
        }
        try {
          await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/api/register/",
            n
          ),
            s("/confirm-email");
        } catch (p) {
          H.isAxiosError(p)
            ? (console.error(
                "Error:",
                (d = p.response) == null ? void 0 : d.data
              ),
              i((f = p.response) == null ? void 0 : f.data.error))
            : console.error("An unexpected error occurred:", p);
        } finally {
          t(!1);
        }
      };
    return c.jsx("div", {
      className: Ze.login_form_container,
      children: e
        ? c.jsx("div", {
            className: Ze.loading,
            children: c.jsx(Br, { color: "success" }),
          })
        : c.jsxs(c.Fragment, {
            children: [
              c.jsx("h2", {
                className: Ze.login__title,
                children: "Become a Sailor!",
              }),
              c.jsxs("form", {
                onSubmit: l,
                children: [
                  o &&
                    c.jsxs("div", {
                      className: Ze.error,
                      children: [c.jsx(Xs, {}), c.jsx("p", { children: o })],
                    }),
                  c.jsx("label", {
                    htmlFor: "email",
                    children: c.jsx("input", {
                      type: "email",
                      placeholder: "Your email",
                      id: "email",
                      name: "email",
                      required: !0,
                      onChange: a,
                      value: n.email,
                    }),
                  }),
                  c.jsx("label", {
                    htmlFor: "name",
                    children: c.jsx("input", {
                      type: "text",
                      placeholder: "Your nickname",
                      id: "name",
                      name: "name",
                      required: !0,
                      onChange: a,
                      value: n.name,
                    }),
                  }),
                  c.jsx("label", {
                    htmlFor: "password",
                    children: c.jsx("input", {
                      type: "password",
                      placeholder: "Your password",
                      id: "password",
                      name: "password",
                      required: !0,
                      onChange: a,
                      value: n.password,
                    }),
                  }),
                  c.jsx("label", {
                    htmlFor: "confirmPassword",
                    children: c.jsx("input", {
                      type: "password",
                      placeholder: "Confirm your password",
                      id: "confirmPassword",
                      name: "confirmPassword",
                      required: !0,
                      onChange: a,
                      value: n.confirmPassword,
                    }),
                  }),
                  c.jsx("input", { type: "submit", value: "Register" }),
                ],
              }),
              c.jsx("div", {
                className: Ze.recomendation,
                children: c.jsxs("p", {
                  children: [
                    "Already have an account? ",
                    c.jsx(It, {
                      className: Ze.recomendation__link,
                      to: "/login",
                      children: c.jsx("strong", { children: "Sign In" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
    });
  },
  qM = () => {
    const [e, t] = g.useState({ email: "", password: "" }),
      n = tt(),
      [r, o] = g.useState(""),
      i = (a) => {
        t({ ...e, [a.target.name]: a.target.value });
      },
      s = async (a) => {
        var l;
        a.preventDefault();
        try {
          const u = await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/api/login/",
            e
          );
          localStorage.setItem("accessToken", u.data.accessToken),
            console.log(u.data),
            n("/home");
        } catch (u) {
          o("Обліковий запис не знайдено"),
            H.isAxiosError(u)
              ? console.error(
                  "Error:",
                  (l = u.response) == null ? void 0 : l.data
                )
              : console.error("An unexpected error occurred:", u);
        }
      };
    return c.jsx(c.Fragment, {
      children: c.jsxs("div", {
        className: "container",
        children: [
          c.jsx("div", {
            className: "row",
            children: c.jsxs("div", {
              className: "col",
              children: [
                c.jsx("h2", {
                  className: Ze.login__title,
                  children: "Write your email",
                }),
                c.jsxs("form", {
                  onSubmit: s,
                  children: [
                    r &&
                      c.jsxs("div", {
                        className: Ze.error,
                        children: [c.jsx(Xs, {}), c.jsx("p", { children: r })],
                      }),
                    c.jsx("label", {
                      htmlFor: "email",
                      children: c.jsx("input", {
                        type: "email",
                        placeholder: "Your email",
                        id: "email",
                        name: "email",
                        required: !0,
                        onChange: i,
                      }),
                    }),
                    c.jsx("input", { type: "submit", value: "Approve" }),
                  ],
                }),
              ],
            }),
          }),
          c.jsx("div", {
            className: Ze.recomendation,
            children: c.jsxs("p", {
              children: [
                "Don’t have an account ? ",
                c.jsx(It, {
                  className: Ze.recomendation__link,
                  to: "/register",
                  children: c.jsx("strong", { children: "Sign Up" }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  GM = () => {
    const [e, t] = g.useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      }),
      n = tt(),
      [r, o] = g.useState(""),
      i = (a) => {
        t({ ...e, [a.target.name]: a.target.value });
      },
      s = async (a) => {
        if ((a.preventDefault(), e.password !== e.confirmPassword)) {
          o("Паролі не збігаються");
          return;
        }
        if (e.password.length < 8) {
          o("Пароль повинен бути не менше 8 символів");
          return;
        }
        if (
          !/[a-z]/.test(e.password) ||
          !/[A-Z]/.test(e.password) ||
          !/[0-9]/.test(e.password)
        ) {
          o(
            "Пароль повинен містити принаймні одну маленьку літеру, одну велику літеру та одну цифру"
          );
          return;
        }
        try {
          const l = await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/api/register/",
            e
          );
          n("/confirm-email"), console.log(l.data);
        } catch (l) {
          console.error("Помилка під час реєстрації:", l),
            o("Помилка під час реєстрації");
        }
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("h2", {
          className: Ze.login__title,
          children: "Write new password.",
        }),
        c.jsxs("form", {
          onSubmit: s,
          children: [
            r &&
              c.jsxs("div", {
                className: Ze.error,
                children: [c.jsx(Xs, {}), c.jsx("p", { children: r })],
              }),
            c.jsx("label", {
              htmlFor: "password",
              children: c.jsx("input", {
                type: "password",
                placeholder: "Your password",
                id: "password",
                name: "password",
                required: !0,
                onChange: i,
              }),
            }),
            c.jsx("label", {
              htmlFor: "confirmPassword",
              children: c.jsx("input", {
                type: "password",
                placeholder: "Confirm your password",
                id: "confirmPassword",
                name: "confirmPassword",
                required: !0,
                onChange: i,
              }),
            }),
            c.jsx("input", { type: "submit", value: "Reset password" }),
          ],
        }),
      ],
    });
  },
  YM = "_layout_pdtiq_1",
  QM = "_confirm__container_pdtiq_43",
  qg = { layout: YM, confirm__container: QM },
  XM = () => {
    const e = tt(),
      t = () => {
        e("/login");
      };
    return c.jsxs("div", {
      className: qg.layout,
      children: [
        c.jsx("div", {
          children: c.jsxs("div", {
            className: qg.confirm__container,
            children: [
              c.jsx("img", { src: Fr, alt: "mail" }),
              c.jsx("h2", { children: "Email successfully confirmed." }),
              c.jsx("p", { children: "Go to login page to sign in." }),
            ],
          }),
        }),
        c.jsx("button", { onClick: t, children: "Go to login" }),
      ],
    });
  },
  JM = "_layout_pdtiq_1",
  ZM = "_confirm__container_pdtiq_43",
  Gg = { layout: JM, confirm__container: ZM },
  eL = () => {
    const e = tt(),
      t = () => {
        e("/login");
      };
    return c.jsxs("div", {
      className: Gg.layout,
      children: [
        c.jsx("div", {
          children: c.jsxs("div", {
            className: Gg.confirm__container,
            children: [
              c.jsx("img", { src: Fr, alt: "mail" }),
              c.jsx("h2", { children: "Your confirm request is not found" }),
              c.jsx("p", { children: "Go to login page to sign up." }),
            ],
          }),
        }),
        c.jsx("button", { onClick: t, children: "Go to login" }),
      ],
    });
  },
  tL = "_layout_pdtiq_1",
  nL = "_confirm__container_pdtiq_43",
  Yg = { layout: tL, confirm__container: nL },
  rL = () => {
    const e = tt(),
      t = () => {
        e("/login");
      };
    return c.jsxs("div", {
      className: Yg.layout,
      children: [
        c.jsx("div", {
          children: c.jsxs("div", {
            className: Yg.confirm__container,
            children: [
              c.jsx("img", { src: Fr, alt: "mail" }),
              c.jsx("h2", { children: "Password successfully reset." }),
              c.jsx("p", { children: "Go to login page to sign in." }),
            ],
          }),
        }),
        c.jsx("button", { onClick: t, children: "Go to login" }),
      ],
    });
  },
  oL = () => {
    const e = tt(),
      t = () => {
        e("/login");
      };
    return c.jsx("div", {
      className: "d-flex justify-content-center",
      children: c.jsx("div", {
        className: at.about__layout,
        children: c.jsxs("div", {
          className: at.about__container,
          children: [
            c.jsx("div", {
              className: "d-flex justify-content-center",
              children: c.jsx("div", {
                className: at.logo__container,
                children: c.jsx("img", { src: Fr, alt: "logo" }),
              }),
            }),
            c.jsx("div", {
              className: "row",
              children: c.jsx("div", {
                className: "d-flex justify-content-center align-items-center",
                children: c.jsxs("div", {
                  className: at.error__container,
                  children: [
                    c.jsx("h1", {
                      children: "Upps! You are not logged in! ☹ ",
                    }),
                    c.jsx("button", { onClick: t, children: "Go to login" }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    });
  },
  iL = "_friends__container_qeuie_1",
  sL = "_friend__item__container_qeuie_36",
  aL = "_friend__info_qeuie_50",
  lL = "_friend__btn_qeuie_65",
  cL = "_friend__btn__folow_qeuie_88",
  uL = "_friend__btn__unfolow_qeuie_95",
  Eo = {
    friends__container: iL,
    friend__item__container: sL,
    friend__info: aL,
    friend__btn: lL,
    friend__btn__folow: cL,
    friend__btn__unfolow: uL,
  },
  dL = ({ user: e, myProfile: t, myFriendList: n }) => {
    const r = tt(),
      [o, i] = g.useState(!1),
      s = () => {
        r(`/profile/${e.name}`);
      };
    g.useEffect(() => {}, []),
      g.useEffect(() => {
        n.length !== 0 && i(n.some((d) => d.name === e.name));
      }, [n, e.name]);
    const a = async (d) => {
        d.stopPropagation(), d.preventDefault();
        try {
          if (!localStorage.getItem("accessToken")) {
            console.error("Access token not found in localStorage");
            return;
          }
          await H.post(
            "https://social-netword-fsociety-gamma.vercel.app/friend/add/",
            { friend_name: e.name, user_name: t.name }
          ),
            i(!0);
        } catch (f) {
          console.error("Error adding friend:", f);
        }
      },
      l = async (d) => {
        d.stopPropagation(), d.preventDefault();
        try {
          await H.delete(
            "https://social-netword-fsociety-gamma.vercel.app/friend/remove/",
            { data: { friend_name: e.name, user_name: t.name } }
          ),
            i(!1);
        } catch (f) {
          console.error("Error removing friend:", f);
        }
      },
      u = async (d) => {
        d.stopPropagation(), d.preventDefault();
        try {
          const f = new FormData();
          f.append("sender_name", t.name),
            f.append("receiver_name", e.name),
            await H.post(
              "https://social-netword-fsociety-gamma.vercel.app/chat/create_chat_room/",
              f
            );
        } catch (f) {
          console.log(f);
        } finally {
          r("message/");
        }
      };
    return c.jsx(
      "div",
      {
        className: "col-12",
        children: c.jsxs("div", {
          onClick: s,
          className: Eo.friend__item__container,
          children: [
            c.jsxs("div", {
              className: Eo.friend__info,
              children: [
                c.jsx("img", { src: e.avatar.slice(13), alt: "avatar" }),
                c.jsx("h3", { children: e.name }),
              ],
            }),
            c.jsxs("div", {
              className: Eo.friend__btn,
              children: [
                c.jsx("button", { onClick: u, children: c.jsx(Bh, {}) }),
                e.name !== t.name
                  ? o
                    ? c.jsx("button", {
                        className: Eo.friend__btn__unfolow,
                        onClick: l,
                        children: "Unfollow",
                      })
                    : c.jsx("button", {
                        className: Eo.friend__btn__folow,
                        onClick: a,
                        children: "Follow",
                      })
                  : null,
              ],
            }),
          ],
        }),
      },
      e.name
    );
  };
var dm = {},
  fL = Gs;
Object.defineProperty(dm, "__esModule", { value: !0 });
var Ob = (dm.default = void 0),
  pL = fL(tm()),
  hL = c;
Ob = dm.default = (0, pL.default)(
  (0, hL.jsx)("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14",
  }),
  "Search"
);
const mL = Q("div")(({ theme: e }) => ({
    position: "relative",
    borderRadius: e.shape.borderRadius,
    backgroundColor: Y0(e.palette.common.white, 0.35),
    "&:hover": { backgroundColor: Y0(e.palette.common.white, 0.45) },
    marginLeft: 0,
    width: "100%",
    marginBottom: "10px",
    [e.breakpoints.up("sm")]: { width: "auto" },
  })),
  gL = Q("div")(({ theme: e }) => ({
    padding: e.spacing(0, 2),
    color: "white",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })),
  vL = Q(pP)(({ theme: e }) => ({
    color: "white",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: e.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${e.spacing(4)})`,
      transition: e.transitions.create("width"),
      [e.breakpoints.up("sm")]: { width: "12ch", "&:focus": { width: "20ch" } },
    },
  })),
  Nd = () => {
    const [e, t] = g.useState([]),
      [n, r] = g.useState(""),
      { type: o } = $f(),
      { userNameParams: i } = $f(),
      [s, a] = g.useState(""),
      l = g.useContext(mo),
      [u, d] = g.useState([]),
      [f, p] = g.useState(!1);
    g.useEffect(() => {
      (async () => {
        try {
          p(!0), i ? a(i) : l && a(l.name);
          let b = "";
          switch (o) {
            case "friends":
              b = `https://social-netword-fsociety-gamma.vercel.app/friend/followers/${s}`;
              break;
            case "followers":
              b = `https://social-netword-fsociety-gamma.vercel.app/friend/following/${s}`;
              break;
            case "society":
              b =
                n.length > 0
                  ? `https://social-netword-fsociety-gamma.vercel.app/friend/search/${n}`
                  : "https://social-netword-fsociety-gamma.vercel.app/friend/users/";
              break;
            default:
              b = "https://social-netword-fsociety-gamma.vercel.app/friend/all";
              break;
          }
          const _ = localStorage.getItem("accessToken");
          if (!_) {
            console.error("Access token not found in localStorage");
            return;
          }
          const v = await H.get(b, {
            headers: { Authorization: `Bearer ${_}` },
          });
          t(v.data.reverse()), p(!1);
        } catch (b) {
          console.error("Error fetching user data:", b), p(!1);
        }
        (async () => {
          if (l)
            try {
              const b = await H.get(
                `https://social-netword-fsociety-gamma.vercel.app/friend/followers/${l.name}`
              );
              d(b.data);
            } catch (b) {
              console.error("Error fetching user data:", b);
            }
        })();
      })();
    }, [n, o, l, s, i]);
    const x = (h) => {
      r(h.target.value);
    };
    return c.jsx("div", {
      className: "container",
      children: c.jsxs("div", {
        className: Eo.friends__container,
        children: [
          c.jsx("div", {
            className: "row",
            children: c.jsx("div", {
              className: "col-12 d-flex justify-content-center",
              children: c.jsx("h2", { children: o }),
            }),
          }),
          o === "society"
            ? c.jsx("div", {
                className: "row",
                children: c.jsx("div", {
                  className: "col-12",
                  children: c.jsx(yP, {
                    sx: { flexGrow: 1 },
                    children: c.jsxs(mL, {
                      children: [
                        c.jsx(gL, { children: c.jsx(Ob, {}) }),
                        c.jsx(vL, {
                          placeholder: "Search…",
                          inputProps: { "aria-label": "search" },
                          value: n,
                          onChange: x,
                        }),
                      ],
                    }),
                  }),
                }),
              })
            : null,
          c.jsx("div", {
            className: "row",
            children: f
              ? c.jsx("div", {
                  className:
                    "col-12 d-flex justify-content-center align-items-center",
                  children: c.jsx(Br, { color: "success" }),
                })
              : l &&
                e.length > 0 &&
                e.map((h) =>
                  h.name.length > 0
                    ? c.jsx(
                        dL,
                        { myFriendList: u, myProfile: l, user: h },
                        h.name
                      )
                    : null
                ),
          }),
        ],
      }),
    });
  },
  yL = () => {
    const [e, t] = g.useState(!1);
    g.useEffect(() => {
      n();
      const r = setInterval(() => {
        n();
      }, 1e3);
      return () => clearInterval(r);
    }, []);
    const n = async () => {
      try {
        const r = localStorage.getItem("accessToken");
        t(!!r);
      } catch (r) {
        console.error("Error checking accessToken:", r);
      }
    };
    return c.jsx(nS, {
      children: c.jsx("main", {
        style: { height: "100vh" },
        children: c.jsxs(G4, {
          children: [
            c.jsxs(Re, {
              element: c.jsx(t5, {}),
              children: [
                c.jsx(Re, { path: "/login", element: c.jsx(VM, {}) }),
                c.jsx(Re, { path: "/register", element: c.jsx(KM, {}) }),
                c.jsx(Re, {
                  path: "/",
                  element: c.jsx(E1, { to: "/register" }),
                }),
                c.jsx(Re, { path: "/forgot-password", element: c.jsx(qM, {}) }),
                c.jsx(Re, { path: "/reset-password", element: c.jsx(GM, {}) }),
              ],
            }),
            e
              ? c.jsxs(Re, {
                  element: c.jsx(NE, {}),
                  children: [
                    c.jsx(Re, { path: "/message", element: c.jsx(CR, {}) }),
                    c.jsx(Re, { path: "/home", element: c.jsx(Ng, {}) }),
                    c.jsx(Re, { path: "/reels", element: c.jsx(Ng, {}) }),
                    c.jsx(Re, { path: "/game", element: c.jsx(OT, {}) }),
                    c.jsx(Re, { path: "/my-profile", element: c.jsx(EM, {}) }),
                    c.jsx(Re, {
                      path: "/profile/:userName",
                      element: c.jsx(RM, {}),
                    }),
                    c.jsx(Re, { path: "/game/snake", element: c.jsx(GO, {}) }),
                    c.jsxs(Re, {
                      element: c.jsx(Nd, {}),
                      children: [
                        c.jsx(Re, {
                          path: "users-list/:type",
                          element: c.jsx(Nd, {}),
                        }),
                        c.jsx(Re, {
                          path: "/:userNameParams/:type",
                          element: c.jsx(Nd, {}),
                        }),
                      ],
                    }),
                    c.jsx(Re, {
                      path: "/about-product",
                      element: c.jsx(zM, {}),
                    }),
                  ],
                })
              : c.jsx(Re, { path: "*", element: c.jsx(oL, {}) }),
            c.jsx(Re, { path: "/confirm-email", element: c.jsx(XO, {}) }),
            c.jsx(Re, {
              path: "/successfully-confirmed-email",
              element: c.jsx(XM, {}),
            }),
            c.jsx(Re, {
              path: "/confirm-request-not-found",
              element: c.jsx(eL, {}),
            }),
            c.jsx(Re, {
              path: "/successfully-reset-password",
              element: c.jsx(rL, {}),
            }),
            c.jsx(Re, {
              path: "*",
              element: c.jsx(E1, { to: "/error", replace: !0 }),
            }),
          ],
        }),
      }),
    });
  };
function _L() {
  return c.jsx(yL, {});
}
Td.createRoot(document.getElementById("root")).render(
  c.jsx(q.StrictMode, { children: c.jsx(_L, {}) })
);
