var ed = (e) => {
  throw TypeError(e);
};
var Uo = (e, t, n) => t.has(e) || ed("Cannot " + n);
var N = (e, t, n) => (
    Uo(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  $ = (e, t, n) =>
    t.has(e)
      ? ed("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  Y = (e, t, n, a) => (
    Uo(e, t, "write to private field"), a ? a.call(e, n) : t.set(e, n), n
  ),
  Ge = (e, t, n) => (Uo(e, t, "access private method"), n);
var Bs = (e, t, n, a) => ({
  set _(l) {
    Y(e, t, l, n);
  },
  get _() {
    return N(e, t, a);
  },
});
function Qv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const a = t[n];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(a, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => a[l] }
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
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function a(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function mm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pm = { exports: {} },
  eo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vv = Symbol.for("react.transitional.element"),
  Xv = Symbol.for("react.fragment");
function gm(e, t, n) {
  var a = null;
  if (
    (n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    "key" in t)
  ) {
    n = {};
    for (var l in t) l !== "key" && (n[l] = t[l]);
  } else n = t;
  return (
    (t = n.ref),
    { $$typeof: Vv, type: e, key: a, ref: t !== void 0 ? t : null, props: n }
  );
}
eo.Fragment = Xv;
eo.jsx = gm;
eo.jsxs = gm;
pm.exports = eo;
var u = pm.exports,
  vm = { exports: {} },
  to = {},
  ym = { exports: {} },
  bm = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, _) {
    var M = C.length;
    C.push(_);
    e: for (; 0 < M; ) {
      var R = (M - 1) >>> 1,
        L = C[R];
      if (0 < l(L, _)) (C[R] = _), (C[M] = L), (M = R);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function a(C) {
    if (C.length === 0) return null;
    var _ = C[0],
      M = C.pop();
    if (M !== _) {
      C[0] = M;
      e: for (var R = 0, L = C.length, ye = L >>> 1; R < ye; ) {
        var F = 2 * (R + 1) - 1,
          W = C[F],
          J = F + 1,
          Ee = C[J];
        if (0 > l(W, M))
          J < L && 0 > l(Ee, W)
            ? ((C[R] = Ee), (C[J] = M), (R = J))
            : ((C[R] = W), (C[F] = M), (R = F));
        else if (J < L && 0 > l(Ee, M)) (C[R] = Ee), (C[J] = M), (R = J);
        else break e;
      }
    }
    return _;
  }
  function l(C, _) {
    var M = C.sortIndex - _.sortIndex;
    return M !== 0 ? M : C.id - _.id;
  }
  if (
    ((e.unstable_now = void 0),
    typeof performance == "object" && typeof performance.now == "function")
  ) {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      r = s.now();
    e.unstable_now = function () {
      return s.now() - r;
    };
  }
  var o = [],
    c = [],
    d = 1,
    m = null,
    h = 3,
    f = !1,
    S = !1,
    y = !1,
    x = !1,
    p = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  function w(C) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) a(c);
      else if (_.startTime <= C)
        a(c), (_.sortIndex = _.expirationTime), t(o, _);
      else break;
      _ = n(c);
    }
  }
  function A(C) {
    if (((y = !1), w(C), !S))
      if (n(o) !== null) (S = !0), T || ((T = !0), B());
      else {
        var _ = n(c);
        _ !== null && ue(A, _.startTime - C);
      }
  }
  var T = !1,
    E = -1,
    O = 5,
    U = -1;
  function z() {
    return x ? !0 : !(e.unstable_now() - U < O);
  }
  function k() {
    if (((x = !1), T)) {
      var C = e.unstable_now();
      U = C;
      var _ = !0;
      try {
        e: {
          (S = !1), y && ((y = !1), g(E), (E = -1)), (f = !0);
          var M = h;
          try {
            t: {
              for (
                w(C), m = n(o);
                m !== null && !(m.expirationTime > C && z());

              ) {
                var R = m.callback;
                if (typeof R == "function") {
                  (m.callback = null), (h = m.priorityLevel);
                  var L = R(m.expirationTime <= C);
                  if (((C = e.unstable_now()), typeof L == "function")) {
                    (m.callback = L), w(C), (_ = !0);
                    break t;
                  }
                  m === n(o) && a(o), w(C);
                } else a(o);
                m = n(o);
              }
              if (m !== null) _ = !0;
              else {
                var ye = n(c);
                ye !== null && ue(A, ye.startTime - C), (_ = !1);
              }
            }
            break e;
          } finally {
            (m = null), (h = M), (f = !1);
          }
          _ = void 0;
        }
      } finally {
        _ ? B() : (T = !1);
      }
    }
  }
  var B;
  if (typeof v == "function")
    B = function () {
      v(k);
    };
  else if (typeof MessageChannel < "u") {
    var te = new MessageChannel(),
      K = te.port2;
    (te.port1.onmessage = k),
      (B = function () {
        K.postMessage(null);
      });
  } else
    B = function () {
      p(k, 0);
    };
  function ue(C, _) {
    E = p(function () {
      C(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var M = h;
      h = _;
      try {
        return C();
      } finally {
        h = M;
      }
    }),
    (e.unstable_requestPaint = function () {
      x = !0;
    }),
    (e.unstable_runWithPriority = function (C, _) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var M = h;
      h = C;
      try {
        return _();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (C, _, M) {
      var R = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? R + M : R))
          : (M = R),
        C)
      ) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return (
        (L = M + L),
        (C = {
          id: d++,
          callback: _,
          priorityLevel: C,
          startTime: M,
          expirationTime: L,
          sortIndex: -1,
        }),
        M > R
          ? ((C.sortIndex = M),
            t(c, C),
            n(o) === null &&
              C === n(c) &&
              (y ? (g(E), (E = -1)) : (y = !0), ue(A, M - R)))
          : ((C.sortIndex = L),
            t(o, C),
            S || f || ((S = !0), T || ((T = !0), B()))),
        C
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (C) {
      var _ = h;
      return function () {
        var M = h;
        h = _;
        try {
          return C.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(bm);
ym.exports = bm;
var Zv = ym.exports,
  xm = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mc = Symbol.for("react.transitional.element"),
  Kv = Symbol.for("react.portal"),
  Fv = Symbol.for("react.fragment"),
  Pv = Symbol.for("react.strict_mode"),
  Jv = Symbol.for("react.profiler"),
  $v = Symbol.for("react.consumer"),
  Wv = Symbol.for("react.context"),
  Iv = Symbol.for("react.forward_ref"),
  ey = Symbol.for("react.suspense"),
  ty = Symbol.for("react.memo"),
  wm = Symbol.for("react.lazy"),
  td = Symbol.iterator;
function ny(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (td && e[td]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Am = Object.assign,
  Em = {};
function ei(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Em),
    (this.updater = n || Sm);
}
ei.prototype.isReactComponent = {};
ei.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ei.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nm() {}
Nm.prototype = ei.prototype;
function Rc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Em),
    (this.updater = n || Sm);
}
var Dc = (Rc.prototype = new Nm());
Dc.constructor = Rc;
Am(Dc, ei.prototype);
Dc.isPureReactComponent = !0;
var nd = Array.isArray,
  pe = { H: null, A: null, T: null, S: null, V: null },
  jm = Object.prototype.hasOwnProperty;
function zc(e, t, n, a, l, i) {
  return (
    (n = i.ref),
    { $$typeof: Mc, type: e, key: t, ref: n !== void 0 ? n : null, props: i }
  );
}
function ay(e, t) {
  return zc(e.type, t, void 0, void 0, void 0, e.props);
}
function _c(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mc;
}
function ly(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ad = /\/+/g;
function Bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ly("" + e.key)
    : t.toString(36);
}
function ld() {}
function iy(e) {
  switch (e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch (
        (typeof e.status == "string"
          ? e.then(ld, ld)
          : ((e.status = "pending"),
            e.then(
              function (t) {
                e.status === "pending" &&
                  ((e.status = "fulfilled"), (e.value = t));
              },
              function (t) {
                e.status === "pending" &&
                  ((e.status = "rejected"), (e.reason = t));
              }
            )),
        e.status)
      ) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
      }
  }
  throw e;
}
function rl(e, t, n, a, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "bigint":
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Mc:
          case Kv:
            s = !0;
            break;
          case wm:
            return (s = e._init), rl(s(e._payload), t, n, a, l);
        }
    }
  if (s)
    return (
      (l = l(e)),
      (s = a === "" ? "." + Bo(e, 0) : a),
      nd(l)
        ? ((n = ""),
          s != null && (n = s.replace(ad, "$&/") + "/"),
          rl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (_c(l) &&
            (l = ay(
              l,
              n +
                (l.key == null || (e && e.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ad, "$&/") + "/") +
                s
            )),
          t.push(l)),
      1
    );
  s = 0;
  var r = a === "" ? "." : a + ":";
  if (nd(e))
    for (var o = 0; o < e.length; o++)
      (a = e[o]), (i = r + Bo(a, o)), (s += rl(a, t, n, i, l));
  else if (((o = ny(e)), typeof o == "function"))
    for (e = o.call(e), o = 0; !(a = e.next()).done; )
      (a = a.value), (i = r + Bo(a, o++)), (s += rl(a, t, n, i, l));
  else if (i === "object") {
    if (typeof e.then == "function") return rl(iy(e), t, n, a, l);
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
  }
  return s;
}
function Hs(e, t, n) {
  if (e == null) return e;
  var a = [],
    l = 0;
  return (
    rl(e, a, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    a
  );
}
function sy(e) {
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
var id =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        if (
          typeof window == "object" &&
          typeof window.ErrorEvent == "function"
        ) {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == "object" && e !== null && typeof e.message == "string"
                ? String(e.message)
                : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          typeof process == "object" &&
          typeof process.emit == "function"
        ) {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      };
function ry() {}
Q.Children = {
  map: Hs,
  forEach: function (e, t, n) {
    Hs(
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
      Hs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Hs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_c(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = ei;
Q.Fragment = Fv;
Q.Profiler = Jv;
Q.PureComponent = Rc;
Q.StrictMode = Pv;
Q.Suspense = ey;
Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pe;
Q.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (e) {
    return pe.H.useMemoCache(e);
  },
};
Q.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "The argument must be a React element, but you passed " + e + "."
    );
  var a = Am({}, e.props),
    l = e.key,
    i = void 0;
  if (t != null)
    for (s in (t.ref !== void 0 && (i = void 0),
    t.key !== void 0 && (l = "" + t.key),
    t))
      !jm.call(t, s) ||
        s === "key" ||
        s === "__self" ||
        s === "__source" ||
        (s === "ref" && t.ref === void 0) ||
        (a[s] = t[s]);
  var s = arguments.length - 2;
  if (s === 1) a.children = n;
  else if (1 < s) {
    for (var r = Array(s), o = 0; o < s; o++) r[o] = arguments[o + 2];
    a.children = r;
  }
  return zc(e.type, l, void 0, void 0, i, a);
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = e),
    (e.Consumer = { $$typeof: $v, _context: e }),
    e
  );
};
Q.createElement = function (e, t, n) {
  var a,
    l = {},
    i = null;
  if (t != null)
    for (a in (t.key !== void 0 && (i = "" + t.key), t))
      jm.call(t, a) &&
        a !== "key" &&
        a !== "__self" &&
        a !== "__source" &&
        (l[a] = t[a]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var r = Array(s), o = 0; o < s; o++) r[o] = arguments[o + 2];
    l.children = r;
  }
  if (e && e.defaultProps)
    for (a in ((s = e.defaultProps), s)) l[a] === void 0 && (l[a] = s[a]);
  return zc(e, i, void 0, void 0, null, l);
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Iv, render: e };
};
Q.isValidElement = _c;
Q.lazy = function (e) {
  return { $$typeof: wm, _payload: { _status: -1, _result: e }, _init: sy };
};
Q.memo = function (e, t) {
  return { $$typeof: ty, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = pe.T,
    n = {};
  pe.T = n;
  try {
    var a = e(),
      l = pe.S;
    l !== null && l(n, a),
      typeof a == "object" &&
        a !== null &&
        typeof a.then == "function" &&
        a.then(ry, id);
  } catch (i) {
    id(i);
  } finally {
    pe.T = t;
  }
};
Q.unstable_useCacheRefresh = function () {
  return pe.H.useCacheRefresh();
};
Q.use = function (e) {
  return pe.H.use(e);
};
Q.useActionState = function (e, t, n) {
  return pe.H.useActionState(e, t, n);
};
Q.useCallback = function (e, t) {
  return pe.H.useCallback(e, t);
};
Q.useContext = function (e) {
  return pe.H.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e, t) {
  return pe.H.useDeferredValue(e, t);
};
Q.useEffect = function (e, t, n) {
  var a = pe.H;
  if (typeof n == "function")
    throw Error(
      "useEffect CRUD overload is not enabled in this build of React."
    );
  return a.useEffect(e, t);
};
Q.useId = function () {
  return pe.H.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return pe.H.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return pe.H.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return pe.H.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return pe.H.useMemo(e, t);
};
Q.useOptimistic = function (e, t) {
  return pe.H.useOptimistic(e, t);
};
Q.useReducer = function (e, t, n) {
  return pe.H.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return pe.H.useRef(e);
};
Q.useState = function (e) {
  return pe.H.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return pe.H.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return pe.H.useTransition();
};
Q.version = "19.1.1";
xm.exports = Q;
var b = xm.exports;
const D = mm(b),
  oy = Qv({ __proto__: null, default: D }, [b]);
var Tm = { exports: {} },
  Pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uy = b;
function Cm(e) {
  var t = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function Mn() {}
var Fe = {
    d: {
      f: Mn,
      r: function () {
        throw Error(Cm(522));
      },
      D: Mn,
      C: Mn,
      L: Mn,
      m: Mn,
      X: Mn,
      S: Mn,
      M: Mn,
    },
    p: 0,
    findDOMNode: null,
  },
  cy = Symbol.for("react.portal");
function fy(e, t, n) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cy,
    key: a == null ? null : "" + a,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
var Ci = uy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function no(e, t) {
  if (e === "font") return "";
  if (typeof t == "string") return t === "use-credentials" ? t : "";
}
Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Fe;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
    throw Error(Cm(299));
  return fy(e, t, null, n);
};
Pe.flushSync = function (e) {
  var t = Ci.T,
    n = Fe.p;
  try {
    if (((Ci.T = null), (Fe.p = 2), e)) return e();
  } finally {
    (Ci.T = t), (Fe.p = n), Fe.d.f();
  }
};
Pe.preconnect = function (e, t) {
  typeof e == "string" &&
    (t
      ? ((t = t.crossOrigin),
        (t =
          typeof t == "string" ? (t === "use-credentials" ? t : "") : void 0))
      : (t = null),
    Fe.d.C(e, t));
};
Pe.prefetchDNS = function (e) {
  typeof e == "string" && Fe.d.D(e);
};
Pe.preinit = function (e, t) {
  if (typeof e == "string" && t && typeof t.as == "string") {
    var n = t.as,
      a = no(n, t.crossOrigin),
      l = typeof t.integrity == "string" ? t.integrity : void 0,
      i = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
    n === "style"
      ? Fe.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
          crossOrigin: a,
          integrity: l,
          fetchPriority: i,
        })
      : n === "script" &&
        Fe.d.X(e, {
          crossOrigin: a,
          integrity: l,
          fetchPriority: i,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        });
  }
};
Pe.preinitModule = function (e, t) {
  if (typeof e == "string")
    if (typeof t == "object" && t !== null) {
      if (t.as == null || t.as === "script") {
        var n = no(t.as, t.crossOrigin);
        Fe.d.M(e, {
          crossOrigin: n,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0,
          nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        });
      }
    } else t == null && Fe.d.M(e);
};
Pe.preload = function (e, t) {
  if (
    typeof e == "string" &&
    typeof t == "object" &&
    t !== null &&
    typeof t.as == "string"
  ) {
    var n = t.as,
      a = no(n, t.crossOrigin);
    Fe.d.L(e, n, {
      crossOrigin: a,
      integrity: typeof t.integrity == "string" ? t.integrity : void 0,
      nonce: typeof t.nonce == "string" ? t.nonce : void 0,
      type: typeof t.type == "string" ? t.type : void 0,
      fetchPriority:
        typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
      referrerPolicy:
        typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
      imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
      imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
      media: typeof t.media == "string" ? t.media : void 0,
    });
  }
};
Pe.preloadModule = function (e, t) {
  if (typeof e == "string")
    if (t) {
      var n = no(t.as, t.crossOrigin);
      Fe.d.m(e, {
        as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
        crossOrigin: n,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0,
      });
    } else Fe.d.m(e);
};
Pe.requestFormReset = function (e) {
  Fe.d.r(e);
};
Pe.unstable_batchedUpdates = function (e, t) {
  return e(t);
};
Pe.useFormState = function (e, t, n) {
  return Ci.H.useFormState(e, t, n);
};
Pe.useFormStatus = function () {
  return Ci.H.useHostTransitionStatus();
};
Pe.version = "19.1.1";
function Om() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Om);
    } catch (e) {
      console.error(e);
    }
}
Om(), (Tm.exports = Pe);
var ao = Tm.exports;
const dy = mm(ao);
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var De = Zv,
  Mm = b,
  hy = ao;
function j(e) {
  var t = "https://react.dev/errors/" + e;
  if (1 < arguments.length) {
    t += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n = 2; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function Rm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hs(e) {
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
function Dm(e) {
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
function sd(e) {
  if (hs(e) !== e) throw Error(j(188));
}
function my(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hs(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, a = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((a = l.return), a !== null)) {
        n = a;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return sd(l), e;
        if (i === a) return sd(l), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== a.return) (n = l), (a = i);
    else {
      for (var s = !1, r = l.child; r; ) {
        if (r === n) {
          (s = !0), (n = l), (a = i);
          break;
        }
        if (r === a) {
          (s = !0), (a = l), (n = i);
          break;
        }
        r = r.sibling;
      }
      if (!s) {
        for (r = i.child; r; ) {
          if (r === n) {
            (s = !0), (n = i), (a = l);
            break;
          }
          if (r === a) {
            (s = !0), (a = i), (n = l);
            break;
          }
          r = r.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== a) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function zm(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e;
  for (e = e.child; e !== null; ) {
    if (((t = zm(e)), t !== null)) return t;
    e = e.sibling;
  }
  return null;
}
var de = Object.assign,
  py = Symbol.for("react.element"),
  Ls = Symbol.for("react.transitional.element"),
  Ai = Symbol.for("react.portal"),
  fl = Symbol.for("react.fragment"),
  _m = Symbol.for("react.strict_mode"),
  Su = Symbol.for("react.profiler"),
  gy = Symbol.for("react.provider"),
  Um = Symbol.for("react.consumer"),
  un = Symbol.for("react.context"),
  Uc = Symbol.for("react.forward_ref"),
  Au = Symbol.for("react.suspense"),
  Eu = Symbol.for("react.suspense_list"),
  Bc = Symbol.for("react.memo"),
  Bn = Symbol.for("react.lazy"),
  Nu = Symbol.for("react.activity"),
  vy = Symbol.for("react.memo_cache_sentinel"),
  rd = Symbol.iterator;
function hi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rd && e[rd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yy = Symbol.for("react.client.reference");
function ju(e) {
  if (e == null) return null;
  if (typeof e == "function")
    return e.$$typeof === yy ? null : e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fl:
      return "Fragment";
    case Su:
      return "Profiler";
    case _m:
      return "StrictMode";
    case Au:
      return "Suspense";
    case Eu:
      return "SuspenseList";
    case Nu:
      return "Activity";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ai:
        return "Portal";
      case un:
        return (e.displayName || "Context") + ".Provider";
      case Um:
        return (e._context.displayName || "Context") + ".Consumer";
      case Uc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Bc:
        return (
          (t = e.displayName || null), t !== null ? t : ju(e.type) || "Memo"
        );
      case Bn:
        (t = e._payload), (e = e._init);
        try {
          return ju(e(t));
        } catch {}
    }
  return null;
}
var Ei = Array.isArray,
  H = Mm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ee = hy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Ca = { pending: !1, data: null, method: null, action: null },
  Tu = [],
  dl = -1;
function $t(e) {
  return { current: e };
}
function Be(e) {
  0 > dl || ((e.current = Tu[dl]), (Tu[dl] = null), dl--);
}
function ge(e, t) {
  dl++, (Tu[dl] = e.current), (e.current = t);
}
var Zt = $t(null),
  Vi = $t(null),
  Wn = $t(null),
  yr = $t(null);
function br(e, t) {
  switch ((ge(Wn, t), ge(Vi, e), ge(Zt, null), t.nodeType)) {
    case 9:
    case 11:
      e = (e = t.documentElement) && (e = e.namespaceURI) ? dh(e) : 0;
      break;
    default:
      if (((e = t.tagName), (t = t.namespaceURI))) (t = dh(t)), (e = Wg(t, e));
      else
        switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
  }
  Be(Zt), ge(Zt, e);
}
function Gl() {
  Be(Zt), Be(Vi), Be(Wn);
}
function Cu(e) {
  e.memoizedState !== null && ge(yr, e);
  var t = Zt.current,
    n = Wg(t, e.type);
  t !== n && (ge(Vi, e), ge(Zt, n));
}
function xr(e) {
  Vi.current === e && (Be(Zt), Be(Vi)),
    yr.current === e && (Be(yr), (es._currentValue = Ca));
}
var Ou = Object.prototype.hasOwnProperty,
  Hc = De.unstable_scheduleCallback,
  Ho = De.unstable_cancelCallback,
  by = De.unstable_shouldYield,
  xy = De.unstable_requestPaint,
  Kt = De.unstable_now,
  wy = De.unstable_getCurrentPriorityLevel,
  Bm = De.unstable_ImmediatePriority,
  Hm = De.unstable_UserBlockingPriority,
  wr = De.unstable_NormalPriority,
  Sy = De.unstable_LowPriority,
  Lm = De.unstable_IdlePriority,
  Ay = De.log,
  Ey = De.unstable_setDisableYieldValue,
  ms = null,
  ut = null;
function Kn(e) {
  if (
    (typeof Ay == "function" && Ey(e),
    ut && typeof ut.setStrictMode == "function")
  )
    try {
      ut.setStrictMode(ms, e);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : Ty,
  Ny = Math.log,
  jy = Math.LN2;
function Ty(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ny(e) / jy) | 0)) | 0;
}
var qs = 256,
  Ys = 4194304;
function ba(e) {
  var t = e & 42;
  if (t !== 0) return t;
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
      return 64;
    case 128:
      return 128;
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
      return e & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return e & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return e;
  }
}
function lo(e, t, n) {
  var a = e.pendingLanes;
  if (a === 0) return 0;
  var l = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes;
  e = e.warmLanes;
  var r = a & 134217727;
  return (
    r !== 0
      ? ((a = r & ~i),
        a !== 0
          ? (l = ba(a))
          : ((s &= r),
            s !== 0
              ? (l = ba(s))
              : n || ((n = r & ~e), n !== 0 && (l = ba(n)))))
      : ((r = a & ~i),
        r !== 0
          ? (l = ba(r))
          : s !== 0
          ? (l = ba(s))
          : n || ((n = a & ~e), n !== 0 && (l = ba(n)))),
    l === 0
      ? 0
      : t !== 0 &&
        t !== l &&
        !(t & i) &&
        ((i = l & -l),
        (n = t & -t),
        i >= n || (i === 32 && (n & 4194048) !== 0))
      ? t
      : l
  );
}
function ps(e, t) {
  return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
}
function Cy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return t + 250;
    case 16:
    case 32:
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
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qm() {
  var e = qs;
  return (qs <<= 1), !(qs & 4194048) && (qs = 256), e;
}
function Ym() {
  var e = Ys;
  return (Ys <<= 1), !(Ys & 62914560) && (Ys = 4194304), e;
}
function Lo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gs(e, t) {
  (e.pendingLanes |= t),
    t !== 268435456 &&
      ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
}
function Oy(e, t, n, a, l, i) {
  var s = e.pendingLanes;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.warmLanes = 0),
    (e.expiredLanes &= n),
    (e.entangledLanes &= n),
    (e.errorRecoveryDisabledLanes &= n),
    (e.shellSuspendCounter = 0);
  var r = e.entanglements,
    o = e.expirationTimes,
    c = e.hiddenUpdates;
  for (n = s & ~n; 0 < n; ) {
    var d = 31 - ct(n),
      m = 1 << d;
    (r[d] = 0), (o[d] = -1);
    var h = c[d];
    if (h !== null)
      for (c[d] = null, d = 0; d < h.length; d++) {
        var f = h[d];
        f !== null && (f.lane &= -536870913);
      }
    n &= ~m;
  }
  a !== 0 && Gm(e, a, 0),
    i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
}
function Gm(e, t, n) {
  (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
  var a = 31 - ct(t);
  (e.entangledLanes |= t),
    (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 4194090));
}
function km(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var a = 31 - ct(n),
      l = 1 << a;
    (l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l);
  }
}
function Lc(e) {
  switch (e) {
    case 2:
      e = 1;
      break;
    case 8:
      e = 4;
      break;
    case 32:
      e = 16;
      break;
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
      e = 128;
      break;
    case 268435456:
      e = 134217728;
      break;
    default:
      e = 0;
  }
  return e;
}
function qc(e) {
  return (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2;
}
function Qm() {
  var e = ee.p;
  return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : o0(e.type));
}
function My(e, t) {
  var n = ee.p;
  try {
    return (ee.p = e), t();
  } finally {
    ee.p = n;
  }
}
var da = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + da,
  tt = "__reactProps$" + da,
  ti = "__reactContainer$" + da,
  Mu = "__reactEvents$" + da,
  Ry = "__reactListeners$" + da,
  Dy = "__reactHandles$" + da,
  od = "__reactResources$" + da,
  vs = "__reactMarker$" + da;
function Yc(e) {
  delete e[Qe], delete e[tt], delete e[Mu], delete e[Ry], delete e[Dy];
}
function hl(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ti] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ph(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = ph(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ni(e) {
  if ((e = e[Qe] || e[ti])) {
    var t = e.tag;
    if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
      return e;
  }
  return null;
}
function Ni(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
  throw Error(j(33));
}
function Al(e) {
  var t = e[od];
  return (
    t ||
      (t = e[od] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    t
  );
}
function _e(e) {
  e[vs] = !0;
}
var Vm = new Set(),
  Xm = {};
function Ya(e, t) {
  kl(e, t), kl(e + "Capture", t);
}
function kl(e, t) {
  for (Xm[e] = t, e = 0; e < t.length; e++) Vm.add(t[e]);
}
var zy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ),
  ud = {},
  cd = {};
function _y(e) {
  return Ou.call(cd, e)
    ? !0
    : Ou.call(ud, e)
    ? !1
    : zy.test(e)
    ? (cd[e] = !0)
    : ((ud[e] = !0), !1);
}
function nr(e, t, n) {
  if (_y(t))
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + n);
    }
}
function Gs(e, t, n) {
  if (n === null) e.removeAttribute(t);
  else {
    switch (typeof n) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        e.removeAttribute(t);
        return;
    }
    e.setAttribute(t, "" + n);
  }
}
function en(e, t, n, a) {
  if (a === null) e.removeAttribute(n);
  else {
    switch (typeof a) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        e.removeAttribute(n);
        return;
    }
    e.setAttributeNS(t, n, "" + a);
  }
}
var qo, fd;
function ol(e) {
  if (qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      (qo = (t && t[1]) || ""),
        (fd =
          -1 <
          n.stack.indexOf(`
    at`)
            ? " (<anonymous>)"
            : -1 < n.stack.indexOf("@")
            ? "@unknown:0:0"
            : "");
    }
  return (
    `
` +
    qo +
    e +
    fd
  );
}
var Yo = !1;
function Go(e, t) {
  if (!e || Yo) return "";
  Yo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var a = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var m = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(m.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(m, []);
              } catch (f) {
                var h = f;
              }
              Reflect.construct(e, [], m);
            } else {
              try {
                m.call();
              } catch (f) {
                h = f;
              }
              e.call(m.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (f) {
              h = f;
            }
            (m = e()) &&
              typeof m.catch == "function" &&
              m.catch(function () {});
          }
        } catch (f) {
          if (f && h && typeof f.stack == "string") return [f.stack, h.stack];
        }
        return [null, null];
      },
    };
    a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var l = Object.getOwnPropertyDescriptor(
      a.DetermineComponentFrameRoot,
      "name"
    );
    l &&
      l.configurable &&
      Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot",
      });
    var i = a.DetermineComponentFrameRoot(),
      s = i[0],
      r = i[1];
    if (s && r) {
      var o = s.split(`
`),
        c = r.split(`
`);
      for (
        l = a = 0;
        a < o.length && !o[a].includes("DetermineComponentFrameRoot");

      )
        a++;
      for (; l < c.length && !c[l].includes("DetermineComponentFrameRoot"); )
        l++;
      if (a === o.length || l === c.length)
        for (
          a = o.length - 1, l = c.length - 1;
          1 <= a && 0 <= l && o[a] !== c[l];

        )
          l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== c[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== c[l])) {
                var d =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    d.includes("<anonymous>") &&
                    (d = d.replace("<anonymous>", e.displayName)),
                  d
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Yo = !1), (Error.prepareStackTrace = n);
  }
  return (n = e ? e.displayName || e.name : "") ? ol(n) : "";
}
function Uy(e) {
  switch (e.tag) {
    case 26:
    case 27:
    case 5:
      return ol(e.type);
    case 16:
      return ol("Lazy");
    case 13:
      return ol("Suspense");
    case 19:
      return ol("SuspenseList");
    case 0:
    case 15:
      return Go(e.type, !1);
    case 11:
      return Go(e.type.render, !1);
    case 1:
      return Go(e.type, !0);
    case 31:
      return ol("Activity");
    default:
      return "";
  }
}
function dd(e) {
  try {
    var t = "";
    do (t += Uy(e)), (e = e.return);
    while (e);
    return t;
  } catch (n) {
    return (
      `
Error generating stack: ` +
      n.message +
      `
` +
      n.stack
    );
  }
}
function yt(e) {
  switch (typeof e) {
    case "bigint":
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
function Zm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function By(e) {
  var t = Zm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (s) {
          (a = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return a;
        },
        setValue: function (s) {
          a = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sr(e) {
  e._valueTracker || (e._valueTracker = By(e));
}
function Km(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    a = "";
  return (
    e && (a = Zm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = a),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
var Hy = /[\n"\\]/g;
function wt(e) {
  return e.replace(Hy, function (t) {
    return "\\" + t.charCodeAt(0).toString(16) + " ";
  });
}
function Ru(e, t, n, a, l, i, s, r) {
  (e.name = ""),
    s != null &&
    typeof s != "function" &&
    typeof s != "symbol" &&
    typeof s != "boolean"
      ? (e.type = s)
      : e.removeAttribute("type"),
    t != null
      ? s === "number"
        ? ((t === 0 && e.value === "") || e.value != t) &&
          (e.value = "" + yt(t))
        : e.value !== "" + yt(t) && (e.value = "" + yt(t))
      : (s !== "submit" && s !== "reset") || e.removeAttribute("value"),
    t != null
      ? Du(e, s, yt(t))
      : n != null
      ? Du(e, s, yt(n))
      : a != null && e.removeAttribute("value"),
    l == null && i != null && (e.defaultChecked = !!i),
    l != null &&
      (e.checked = l && typeof l != "function" && typeof l != "symbol"),
    r != null &&
    typeof r != "function" &&
    typeof r != "symbol" &&
    typeof r != "boolean"
      ? (e.name = "" + yt(r))
      : e.removeAttribute("name");
}
function Fm(e, t, n, a, l, i, s, r) {
  if (
    (i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean" &&
      (e.type = i),
    t != null || n != null)
  ) {
    if (!((i !== "submit" && i !== "reset") || t != null)) return;
    (n = n != null ? "" + yt(n) : ""),
      (t = t != null ? "" + yt(t) : n),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (a = a ?? l),
    (a = typeof a != "function" && typeof a != "symbol" && !!a),
    (e.checked = r ? e.checked : !!a),
    (e.defaultChecked = !!a),
    s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean" &&
      (e.name = s);
}
function Du(e, t, n) {
  (t === "number" && Ar(e.ownerDocument) === e) ||
    e.defaultValue === "" + n ||
    (e.defaultValue = "" + n);
}
function El(e, t, n, a) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && a && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), a && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pm(e, t, n) {
  if (
    t != null &&
    ((t = "" + yt(t)), t !== e.value && (e.value = t), n == null)
  ) {
    e.defaultValue !== t && (e.defaultValue = t);
    return;
  }
  e.defaultValue = n != null ? "" + yt(n) : "";
}
function Jm(e, t, n, a) {
  if (t == null) {
    if (a != null) {
      if (n != null) throw Error(j(92));
      if (Ei(a)) {
        if (1 < a.length) throw Error(j(93));
        a = a[0];
      }
      n = a;
    }
    n == null && (n = ""), (t = n);
  }
  (n = yt(t)),
    (e.defaultValue = n),
    (a = e.textContent),
    a === n && a !== "" && a !== null && (e.value = a);
}
function Ql(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ly = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function hd(e, t, n) {
  var a = t.indexOf("--") === 0;
  n == null || typeof n == "boolean" || n === ""
    ? a
      ? e.setProperty(t, "")
      : t === "float"
      ? (e.cssFloat = "")
      : (e[t] = "")
    : a
    ? e.setProperty(t, n)
    : typeof n != "number" || n === 0 || Ly.has(t)
    ? t === "float"
      ? (e.cssFloat = n)
      : (e[t] = ("" + n).trim())
    : (e[t] = n + "px");
}
function $m(e, t, n) {
  if (t != null && typeof t != "object") throw Error(j(62));
  if (((e = e.style), n != null)) {
    for (var a in n)
      !n.hasOwnProperty(a) ||
        (t != null && t.hasOwnProperty(a)) ||
        (a.indexOf("--") === 0
          ? e.setProperty(a, "")
          : a === "float"
          ? (e.cssFloat = "")
          : (e[a] = ""));
    for (var l in t)
      (a = t[l]), t.hasOwnProperty(l) && n[l] !== a && hd(e, l, a);
  } else for (var i in t) t.hasOwnProperty(i) && hd(e, i, t[i]);
}
function Gc(e) {
  if (e.indexOf("-") === -1) return !1;
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
var qy = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"],
  ]),
  Yy =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function ar(e) {
  return Yy.test("" + e)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : e;
}
var zu = null;
function kc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ml = null,
  Nl = null;
function md(e) {
  var t = ni(e);
  if (t && (e = t.stateNode)) {
    var n = e[tt] || null;
    e: switch (((e = t.stateNode), t.type)) {
      case "input":
        if (
          (Ru(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ),
          (t = n.name),
          n.type === "radio" && t != null)
        ) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              'input[name="' + wt("" + t) + '"][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var a = n[t];
            if (a !== e && a.form === e.form) {
              var l = a[tt] || null;
              if (!l) throw Error(j(90));
              Ru(
                a,
                l.value,
                l.defaultValue,
                l.defaultValue,
                l.checked,
                l.defaultChecked,
                l.type,
                l.name
              );
            }
          }
          for (t = 0; t < n.length; t++) (a = n[t]), a.form === e.form && Km(a);
        }
        break e;
      case "textarea":
        Pm(e, n.value, n.defaultValue);
        break e;
      case "select":
        (t = n.value), t != null && El(e, !!n.multiple, t, !1);
    }
  }
}
var ko = !1;
function Wm(e, t, n) {
  if (ko) return e(t, n);
  ko = !0;
  try {
    var a = e(t);
    return a;
  } finally {
    if (
      ((ko = !1),
      (ml !== null || Nl !== null) &&
        (po(), ml && ((t = ml), (e = Nl), (Nl = ml = null), md(t), e)))
    )
      for (t = 0; t < e.length; t++) md(e[t]);
  }
}
function Xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var a = n[tt] || null;
  if (a === null) return null;
  n = a[t];
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
      (a = !a.disabled) ||
        ((e = e.type),
        (a = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !a);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var gn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _u = !1;
if (gn)
  try {
    var mi = {};
    Object.defineProperty(mi, "passive", {
      get: function () {
        _u = !0;
      },
    }),
      window.addEventListener("test", mi, mi),
      window.removeEventListener("test", mi, mi);
  } catch {
    _u = !1;
  }
var Fn = null,
  Qc = null,
  lr = null;
function Im() {
  if (lr) return lr;
  var e,
    t = Qc,
    n = t.length,
    a,
    l = "value" in Fn ? Fn.value : Fn.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (a = 1; a <= s && t[n - a] === l[i - a]; a++);
  return (lr = l.slice(e, 1 < a ? 1 - a : void 0));
}
function ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ks() {
  return !0;
}
function pd() {
  return !1;
}
function nt(e) {
  function t(n, a, l, i, s) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = a),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var r in e)
      e.hasOwnProperty(r) && ((n = e[r]), (this[r] = n ? n(i) : i[r]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ks
        : pd),
      (this.isPropagationStopped = pd),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ks));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ks));
      },
      persist: function () {},
      isPersistent: ks,
    }),
    t
  );
}
var Ga = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  io = nt(Ga),
  ys = de({}, Ga, { view: 0, detail: 0 }),
  Gy = nt(ys),
  Qo,
  Vo,
  pi,
  so = de({}, ys, {
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
    getModifierState: Vc,
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
        : (e !== pi &&
            (pi && e.type === "mousemove"
              ? ((Qo = e.screenX - pi.screenX), (Vo = e.screenY - pi.screenY))
              : (Vo = Qo = 0),
            (pi = e)),
          Qo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vo;
    },
  }),
  gd = nt(so),
  ky = de({}, so, { dataTransfer: 0 }),
  Qy = nt(ky),
  Vy = de({}, ys, { relatedTarget: 0 }),
  Xo = nt(Vy),
  Xy = de({}, Ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zy = nt(Xy),
  Ky = de({}, Ga, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fy = nt(Ky),
  Py = de({}, Ga, { data: 0 }),
  vd = nt(Py),
  Jy = {
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
  $y = {
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
  Wy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Iy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wy[e]) ? !!t[e] : !1;
}
function Vc() {
  return Iy;
}
var eb = de({}, ys, {
    key: function (e) {
      if (e.key) {
        var t = Jy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? $y[e.keyCode] || "Unidentified"
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
    getModifierState: Vc,
    charCode: function (e) {
      return e.type === "keypress" ? ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ir(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tb = nt(eb),
  nb = de({}, so, {
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
  yd = nt(nb),
  ab = de({}, ys, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Vc,
  }),
  lb = nt(ab),
  ib = de({}, Ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sb = nt(ib),
  rb = de({}, so, {
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
  ob = nt(rb),
  ub = de({}, Ga, { newState: 0, oldState: 0 }),
  cb = nt(ub),
  fb = [9, 13, 27, 32],
  Xc = gn && "CompositionEvent" in window,
  Oi = null;
gn && "documentMode" in document && (Oi = document.documentMode);
var db = gn && "TextEvent" in window && !Oi,
  ep = gn && (!Xc || (Oi && 8 < Oi && 11 >= Oi)),
  bd = " ",
  xd = !1;
function tp(e, t) {
  switch (e) {
    case "keyup":
      return fb.indexOf(t.keyCode) !== -1;
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
function np(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pl = !1;
function hb(e, t) {
  switch (e) {
    case "compositionend":
      return np(t);
    case "keypress":
      return t.which !== 32 ? null : ((xd = !0), bd);
    case "textInput":
      return (e = t.data), e === bd && xd ? null : e;
    default:
      return null;
  }
}
function mb(e, t) {
  if (pl)
    return e === "compositionend" || (!Xc && tp(e, t))
      ? ((e = Im()), (lr = Qc = Fn = null), (pl = !1), e)
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
      return ep && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pb = {
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
function wd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pb[e.type] : t === "textarea";
}
function ap(e, t, n, a) {
  ml ? (Nl ? Nl.push(a) : (Nl = [a])) : (ml = a),
    (t = Gr(t, "onChange")),
    0 < t.length &&
      ((n = new io("onChange", "change", null, n, a)),
      e.push({ event: n, listeners: t }));
}
var Mi = null,
  Zi = null;
function gb(e) {
  Pg(e, 0);
}
function ro(e) {
  var t = Ni(e);
  if (Km(t)) return e;
}
function Sd(e, t) {
  if (e === "change") return t;
}
var lp = !1;
if (gn) {
  var Zo;
  if (gn) {
    var Ko = "oninput" in document;
    if (!Ko) {
      var Ad = document.createElement("div");
      Ad.setAttribute("oninput", "return;"),
        (Ko = typeof Ad.oninput == "function");
    }
    Zo = Ko;
  } else Zo = !1;
  lp = Zo && (!document.documentMode || 9 < document.documentMode);
}
function Ed() {
  Mi && (Mi.detachEvent("onpropertychange", ip), (Zi = Mi = null));
}
function ip(e) {
  if (e.propertyName === "value" && ro(Zi)) {
    var t = [];
    ap(t, Zi, e, kc(e)), Wm(gb, t);
  }
}
function vb(e, t, n) {
  e === "focusin"
    ? (Ed(), (Mi = t), (Zi = n), Mi.attachEvent("onpropertychange", ip))
    : e === "focusout" && Ed();
}
function yb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ro(Zi);
}
function bb(e, t) {
  if (e === "click") return ro(t);
}
function xb(e, t) {
  if (e === "input" || e === "change") return ro(t);
}
function wb(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mt = typeof Object.is == "function" ? Object.is : wb;
function Ki(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    a = Object.keys(t);
  if (n.length !== a.length) return !1;
  for (a = 0; a < n.length; a++) {
    var l = n[a];
    if (!Ou.call(t, l) || !mt(e[l], t[l])) return !1;
  }
  return !0;
}
function Nd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function jd(e, t) {
  var n = Nd(e);
  e = 0;
  for (var a; n; ) {
    if (n.nodeType === 3) {
      if (((a = e + n.textContent.length), e <= t && a >= t))
        return { node: n, offset: t - e };
      e = a;
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
    n = Nd(n);
  }
}
function sp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? sp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function rp(e) {
  e =
    e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
      ? e.ownerDocument.defaultView
      : window;
  for (var t = Ar(e.document); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function Zc(e) {
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
var Sb = gn && "documentMode" in document && 11 >= document.documentMode,
  gl = null,
  Uu = null,
  Ri = null,
  Bu = !1;
function Td(e, t, n) {
  var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bu ||
    gl == null ||
    gl !== Ar(a) ||
    ((a = gl),
    "selectionStart" in a && Zc(a)
      ? (a = { start: a.selectionStart, end: a.selectionEnd })
      : ((a = (
          (a.ownerDocument && a.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset,
        })),
    (Ri && Ki(Ri, a)) ||
      ((Ri = a),
      (a = Gr(Uu, "onSelect")),
      0 < a.length &&
        ((t = new io("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: a }),
        (t.target = gl))));
}
function ya(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vl = {
    animationend: ya("Animation", "AnimationEnd"),
    animationiteration: ya("Animation", "AnimationIteration"),
    animationstart: ya("Animation", "AnimationStart"),
    transitionrun: ya("Transition", "TransitionRun"),
    transitionstart: ya("Transition", "TransitionStart"),
    transitioncancel: ya("Transition", "TransitionCancel"),
    transitionend: ya("Transition", "TransitionEnd"),
  },
  Fo = {},
  op = {};
gn &&
  ((op = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vl.animationend.animation,
    delete vl.animationiteration.animation,
    delete vl.animationstart.animation),
  "TransitionEvent" in window || delete vl.transitionend.transition);
function ka(e) {
  if (Fo[e]) return Fo[e];
  if (!vl[e]) return e;
  var t = vl[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in op) return (Fo[e] = t[n]);
  return e;
}
var up = ka("animationend"),
  cp = ka("animationiteration"),
  fp = ka("animationstart"),
  Ab = ka("transitionrun"),
  Eb = ka("transitionstart"),
  Nb = ka("transitioncancel"),
  dp = ka("transitionend"),
  hp = new Map(),
  Hu =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
Hu.push("scrollEnd");
function Ht(e, t) {
  hp.set(e, t), Ya(t, [e]);
}
var Cd = new WeakMap();
function St(e, t) {
  if (typeof e == "object" && e !== null) {
    var n = Cd.get(e);
    return n !== void 0
      ? n
      : ((t = { value: e, source: t, stack: dd(t) }), Cd.set(e, t), t);
  }
  return { value: e, source: t, stack: dd(t) };
}
var vt = [],
  yl = 0,
  Kc = 0;
function oo() {
  for (var e = yl, t = (Kc = yl = 0); t < e; ) {
    var n = vt[t];
    vt[t++] = null;
    var a = vt[t];
    vt[t++] = null;
    var l = vt[t];
    vt[t++] = null;
    var i = vt[t];
    if (((vt[t++] = null), a !== null && l !== null)) {
      var s = a.pending;
      s === null ? (l.next = l) : ((l.next = s.next), (s.next = l)),
        (a.pending = l);
    }
    i !== 0 && mp(n, l, i);
  }
}
function uo(e, t, n, a) {
  (vt[yl++] = e),
    (vt[yl++] = t),
    (vt[yl++] = n),
    (vt[yl++] = a),
    (Kc |= a),
    (e.lanes |= a),
    (e = e.alternate),
    e !== null && (e.lanes |= a);
}
function Fc(e, t, n, a) {
  return uo(e, t, n, a), Er(e);
}
function ai(e, t) {
  return uo(e, null, null, t), Er(e);
}
function mp(e, t, n) {
  e.lanes |= n;
  var a = e.alternate;
  a !== null && (a.lanes |= n);
  for (var l = !1, i = e.return; i !== null; )
    (i.childLanes |= n),
      (a = i.alternate),
      a !== null && (a.childLanes |= n),
      i.tag === 22 &&
        ((e = i.stateNode), e === null || e._visibility & 1 || (l = !0)),
      (e = i),
      (i = i.return);
  return e.tag === 3
    ? ((i = e.stateNode),
      l &&
        t !== null &&
        ((l = 31 - ct(n)),
        (e = i.hiddenUpdates),
        (a = e[l]),
        a === null ? (e[l] = [t]) : a.push(t),
        (t.lane = n | 536870912)),
      i)
    : null;
}
function Er(e) {
  if (50 < Gi) throw ((Gi = 0), (lc = null), Error(j(185)));
  for (var t = e.return; t !== null; ) (e = t), (t = e.return);
  return e.tag === 3 ? e.stateNode : null;
}
var bl = {};
function jb(e, t, n, a) {
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
    (this.refCleanup = this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = a),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, n, a) {
  return new jb(e, t, n, a);
}
function Pc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
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
    (n.flags = e.flags & 65011712),
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
    (n.refCleanup = e.refCleanup),
    n
  );
}
function pp(e, t) {
  e.flags &= 65011714;
  var n = e.alternate;
  return (
    n === null
      ? ((e.childLanes = 0),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = n.childLanes),
        (e.lanes = n.lanes),
        (e.child = n.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = n.memoizedProps),
        (e.memoizedState = n.memoizedState),
        (e.updateQueue = n.updateQueue),
        (e.type = n.type),
        (t = n.dependencies),
        (e.dependencies =
          t === null
            ? null
            : { lanes: t.lanes, firstContext: t.firstContext })),
    e
  );
}
function sr(e, t, n, a, l, i) {
  var s = 0;
  if (((a = e), typeof e == "function")) Pc(e) && (s = 1);
  else if (typeof e == "string")
    s = Cx(e, n, Zt.current)
      ? 26
      : e === "html" || e === "head" || e === "body"
      ? 27
      : 5;
  else
    e: switch (e) {
      case Nu:
        return (e = ot(31, n, t, l)), (e.elementType = Nu), (e.lanes = i), e;
      case fl:
        return Oa(n.children, l, i, t);
      case _m:
        (s = 8), (l |= 24);
        break;
      case Su:
        return (
          (e = ot(12, n, t, l | 2)), (e.elementType = Su), (e.lanes = i), e
        );
      case Au:
        return (e = ot(13, n, t, l)), (e.elementType = Au), (e.lanes = i), e;
      case Eu:
        return (e = ot(19, n, t, l)), (e.elementType = Eu), (e.lanes = i), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gy:
            case un:
              s = 10;
              break e;
            case Um:
              s = 9;
              break e;
            case Uc:
              s = 11;
              break e;
            case Bc:
              s = 14;
              break e;
            case Bn:
              (s = 16), (a = null);
              break e;
          }
        (s = 29),
          (n = Error(j(130, e === null ? "null" : typeof e, ""))),
          (a = null);
    }
  return (
    (t = ot(s, n, t, l)), (t.elementType = e), (t.type = a), (t.lanes = i), t
  );
}
function Oa(e, t, n, a) {
  return (e = ot(7, e, a, t)), (e.lanes = n), e;
}
function Po(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function Jo(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
var xl = [],
  wl = 0,
  Nr = null,
  jr = 0,
  bt = [],
  xt = 0,
  Ma = null,
  cn = 1,
  fn = "";
function xa(e, t) {
  (xl[wl++] = jr), (xl[wl++] = Nr), (Nr = e), (jr = t);
}
function gp(e, t, n) {
  (bt[xt++] = cn), (bt[xt++] = fn), (bt[xt++] = Ma), (Ma = e);
  var a = cn;
  e = fn;
  var l = 32 - ct(a) - 1;
  (a &= ~(1 << l)), (n += 1);
  var i = 32 - ct(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    (i = (a & ((1 << s) - 1)).toString(32)),
      (a >>= s),
      (l -= s),
      (cn = (1 << (32 - ct(t) + l)) | (n << l) | a),
      (fn = i + e);
  } else (cn = (1 << i) | (n << l) | a), (fn = e);
}
function Jc(e) {
  e.return !== null && (xa(e, 1), gp(e, 1, 0));
}
function $c(e) {
  for (; e === Nr; )
    (Nr = xl[--wl]), (xl[wl] = null), (jr = xl[--wl]), (xl[wl] = null);
  for (; e === Ma; )
    (Ma = bt[--xt]),
      (bt[xt] = null),
      (fn = bt[--xt]),
      (bt[xt] = null),
      (cn = bt[--xt]),
      (bt[xt] = null);
}
var Ke = null,
  Se = null,
  I = !1,
  Ra = null,
  Qt = !1,
  Lu = Error(j(519));
function Ua(e) {
  var t = Error(j(418, ""));
  throw (Fi(St(t, e)), Lu);
}
function Od(e) {
  var t = e.stateNode,
    n = e.type,
    a = e.memoizedProps;
  switch (((t[Qe] = e), (t[tt] = a), n)) {
    case "dialog":
      X("cancel", t), X("close", t);
      break;
    case "iframe":
    case "object":
    case "embed":
      X("load", t);
      break;
    case "video":
    case "audio":
      for (n = 0; n < $i.length; n++) X($i[n], t);
      break;
    case "source":
      X("error", t);
      break;
    case "img":
    case "image":
    case "link":
      X("error", t), X("load", t);
      break;
    case "details":
      X("toggle", t);
      break;
    case "input":
      X("invalid", t),
        Fm(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ),
        Sr(t);
      break;
    case "select":
      X("invalid", t);
      break;
    case "textarea":
      X("invalid", t), Jm(t, a.value, a.defaultValue, a.children), Sr(t);
  }
  (n = a.children),
    (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
    t.textContent === "" + n ||
    a.suppressHydrationWarning === !0 ||
    $g(t.textContent, n)
      ? (a.popover != null && (X("beforetoggle", t), X("toggle", t)),
        a.onScroll != null && X("scroll", t),
        a.onScrollEnd != null && X("scrollend", t),
        a.onClick != null && (t.onclick = yo),
        (t = !0))
      : (t = !1),
    t || Ua(e);
}
function Md(e) {
  for (Ke = e.return; Ke; )
    switch (Ke.tag) {
      case 5:
      case 13:
        Qt = !1;
        return;
      case 27:
      case 3:
        Qt = !0;
        return;
      default:
        Ke = Ke.return;
    }
}
function gi(e) {
  if (e !== Ke) return !1;
  if (!I) return Md(e), (I = !0), !1;
  var t = e.tag,
    n;
  if (
    ((n = t !== 3 && t !== 27) &&
      ((n = t === 5) &&
        ((n = e.type),
        (n = !(n !== "form" && n !== "button") || cc(e.type, e.memoizedProps))),
      (n = !n)),
    n && Se && Ua(e),
    Md(e),
    t === 13)
  ) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8)
          if (((n = e.data), n === "/$")) {
            if (t === 0) {
              Se = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        e = e.nextSibling;
      }
      Se = null;
    }
  } else
    t === 27
      ? ((t = Se), ha(e.type) ? ((e = hc), (hc = null), (Se = e)) : (Se = t))
      : (Se = Ke ? _t(e.stateNode.nextSibling) : null);
  return !0;
}
function bs() {
  (Se = Ke = null), (I = !1);
}
function Rd() {
  var e = Ra;
  return (
    e !== null && (We === null ? (We = e) : We.push.apply(We, e), (Ra = null)),
    e
  );
}
function Fi(e) {
  Ra === null ? (Ra = [e]) : Ra.push(e);
}
var qu = $t(null),
  Qa = null,
  dn = null;
function Ln(e, t, n) {
  ge(qu, t._currentValue), (t._currentValue = n);
}
function pn(e) {
  (e._currentValue = qu.current), Be(qu);
}
function Yu(e, t, n) {
  for (; e !== null; ) {
    var a = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
        : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Gu(e, t, n, a) {
  var l = e.child;
  for (l !== null && (l.return = e); l !== null; ) {
    var i = l.dependencies;
    if (i !== null) {
      var s = l.child;
      i = i.firstContext;
      e: for (; i !== null; ) {
        var r = i;
        i = l;
        for (var o = 0; o < t.length; o++)
          if (r.context === t[o]) {
            (i.lanes |= n),
              (r = i.alternate),
              r !== null && (r.lanes |= n),
              Yu(i.return, n, e),
              a || (s = null);
            break e;
          }
        i = r.next;
      }
    } else if (l.tag === 18) {
      if (((s = l.return), s === null)) throw Error(j(341));
      (s.lanes |= n),
        (i = s.alternate),
        i !== null && (i.lanes |= n),
        Yu(s, n, e),
        (s = null);
    } else s = l.child;
    if (s !== null) s.return = l;
    else
      for (s = l; s !== null; ) {
        if (s === e) {
          s = null;
          break;
        }
        if (((l = s.sibling), l !== null)) {
          (l.return = s.return), (s = l);
          break;
        }
        s = s.return;
      }
    l = s;
  }
}
function xs(e, t, n, a) {
  e = null;
  for (var l = t, i = !1; l !== null; ) {
    if (!i) {
      if (l.flags & 524288) i = !0;
      else if (l.flags & 262144) break;
    }
    if (l.tag === 10) {
      var s = l.alternate;
      if (s === null) throw Error(j(387));
      if (((s = s.memoizedProps), s !== null)) {
        var r = l.type;
        mt(l.pendingProps.value, s.value) ||
          (e !== null ? e.push(r) : (e = [r]));
      }
    } else if (l === yr.current) {
      if (((s = l.alternate), s === null)) throw Error(j(387));
      s.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
        (e !== null ? e.push(es) : (e = [es]));
    }
    l = l.return;
  }
  e !== null && Gu(t, e, n, a), (t.flags |= 262144);
}
function Tr(e) {
  for (e = e.firstContext; e !== null; ) {
    if (!mt(e.context._currentValue, e.memoizedValue)) return !0;
    e = e.next;
  }
  return !1;
}
function Ba(e) {
  (Qa = e),
    (dn = null),
    (e = e.dependencies),
    e !== null && (e.firstContext = null);
}
function Ve(e) {
  return vp(Qa, e);
}
function Qs(e, t) {
  return Qa === null && Ba(e), vp(e, t);
}
function vp(e, t) {
  var n = t._currentValue;
  if (((t = { context: t, memoizedValue: n, next: null }), dn === null)) {
    if (e === null) throw Error(j(308));
    (dn = t),
      (e.dependencies = { lanes: 0, firstContext: t }),
      (e.flags |= 524288);
  } else dn = dn.next = t;
  return n;
}
var Tb =
    typeof AbortController < "u"
      ? AbortController
      : function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (n, a) {
                e.push(a);
              },
            });
          this.abort = function () {
            (t.aborted = !0),
              e.forEach(function (n) {
                return n();
              });
          };
        },
  Cb = De.unstable_scheduleCallback,
  Ob = De.unstable_NormalPriority,
  Me = {
    $$typeof: un,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function Wc() {
  return { controller: new Tb(), data: new Map(), refCount: 0 };
}
function ws(e) {
  e.refCount--,
    e.refCount === 0 &&
      Cb(Ob, function () {
        e.controller.abort();
      });
}
var Di = null,
  ku = 0,
  Vl = 0,
  jl = null;
function Mb(e, t) {
  if (Di === null) {
    var n = (Di = []);
    (ku = 0),
      (Vl = Sf()),
      (jl = {
        status: "pending",
        value: void 0,
        then: function (a) {
          n.push(a);
        },
      });
  }
  return ku++, t.then(Dd, Dd), t;
}
function Dd() {
  if (--ku === 0 && Di !== null) {
    jl !== null && (jl.status = "fulfilled");
    var e = Di;
    (Di = null), (Vl = 0), (jl = null);
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
}
function Rb(e, t) {
  var n = [],
    a = {
      status: "pending",
      value: null,
      reason: null,
      then: function (l) {
        n.push(l);
      },
    };
  return (
    e.then(
      function () {
        (a.status = "fulfilled"), (a.value = t);
        for (var l = 0; l < n.length; l++) (0, n[l])(t);
      },
      function (l) {
        for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }
    ),
    a
  );
}
var zd = H.S;
H.S = function (e, t) {
  typeof t == "object" && t !== null && typeof t.then == "function" && Mb(e, t),
    zd !== null && zd(e, t);
};
var Da = $t(null);
function Ic() {
  var e = Da.current;
  return e !== null ? e : oe.pooledCache;
}
function rr(e, t) {
  t === null ? ge(Da, Da.current) : ge(Da, t.pool);
}
function yp() {
  var e = Ic();
  return e === null ? null : { parent: Me._currentValue, pool: e };
}
var Ss = Error(j(460)),
  bp = Error(j(474)),
  co = Error(j(542)),
  Qu = { then: function () {} };
function _d(e) {
  return (e = e.status), e === "fulfilled" || e === "rejected";
}
function Vs() {}
function xp(e, t, n) {
  switch (
    ((n = e[n]),
    n === void 0 ? e.push(t) : n !== t && (t.then(Vs, Vs), (t = n)),
    t.status)
  ) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw ((e = t.reason), Bd(e), e);
    default:
      if (typeof t.status == "string") t.then(Vs, Vs);
      else {
        if (((e = oe), e !== null && 100 < e.shellSuspendCounter))
          throw Error(j(482));
        (e = t),
          (e.status = "pending"),
          e.then(
            function (a) {
              if (t.status === "pending") {
                var l = t;
                (l.status = "fulfilled"), (l.value = a);
              }
            },
            function (a) {
              if (t.status === "pending") {
                var l = t;
                (l.status = "rejected"), (l.reason = a);
              }
            }
          );
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw ((e = t.reason), Bd(e), e);
      }
      throw ((zi = t), Ss);
  }
}
var zi = null;
function Ud() {
  if (zi === null) throw Error(j(459));
  var e = zi;
  return (zi = null), e;
}
function Bd(e) {
  if (e === Ss || e === co) throw Error(j(483));
}
var Hn = !1;
function ef(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function Vu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null,
      });
}
function In(e) {
  return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function ea(e, t, n) {
  var a = e.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), ae & 2)) {
    var l = a.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (a.pending = t),
      (t = Er(e)),
      mp(e, null, n),
      t
    );
  }
  return uo(e, a, t, n), Er(e);
}
function _i(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
  ) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), km(e, n);
  }
}
function $o(e, t) {
  var n = e.updateQueue,
    a = e.alternate;
  if (a !== null && ((a = a.updateQueue), n === a)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: null,
          next: null,
        };
        i === null ? (l = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: a.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: a.shared,
      callbacks: a.callbacks,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
var Xu = !1;
function Ui() {
  if (Xu) {
    var e = jl;
    if (e !== null) throw e;
  }
}
function Bi(e, t, n, a) {
  Xu = !1;
  var l = e.updateQueue;
  Hn = !1;
  var i = l.firstBaseUpdate,
    s = l.lastBaseUpdate,
    r = l.shared.pending;
  if (r !== null) {
    l.shared.pending = null;
    var o = r,
      c = o.next;
    (o.next = null), s === null ? (i = c) : (s.next = c), (s = o);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (r = d.lastBaseUpdate),
      r !== s &&
        (r === null ? (d.firstBaseUpdate = c) : (r.next = c),
        (d.lastBaseUpdate = o)));
  }
  if (i !== null) {
    var m = l.baseState;
    (s = 0), (d = c = o = null), (r = i);
    do {
      var h = r.lane & -536870913,
        f = h !== r.lane;
      if (f ? (P & h) === h : (a & h) === h) {
        h !== 0 && h === Vl && (Xu = !0),
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                tag: r.tag,
                payload: r.payload,
                callback: null,
                next: null,
              });
        e: {
          var S = e,
            y = r;
          h = t;
          var x = n;
          switch (y.tag) {
            case 1:
              if (((S = y.payload), typeof S == "function")) {
                m = S.call(x, m, h);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = y.payload),
                (h = typeof S == "function" ? S.call(x, m, h) : S),
                h == null)
              )
                break e;
              m = de({}, m, h);
              break e;
            case 2:
              Hn = !0;
          }
        }
        (h = r.callback),
          h !== null &&
            ((e.flags |= 64),
            f && (e.flags |= 8192),
            (f = l.callbacks),
            f === null ? (l.callbacks = [h]) : f.push(h));
      } else
        (f = {
          lane: h,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        }),
          d === null ? ((c = d = f), (o = m)) : (d = d.next = f),
          (s |= h);
      if (((r = r.next), r === null)) {
        if (((r = l.shared.pending), r === null)) break;
        (f = r),
          (r = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (!0);
    d === null && (o = m),
      (l.baseState = o),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      i === null && (l.shared.lanes = 0),
      (ua |= s),
      (e.lanes = s),
      (e.memoizedState = m);
  }
}
function wp(e, t) {
  if (typeof e != "function") throw Error(j(191, e));
  e.call(t);
}
function Sp(e, t) {
  var n = e.callbacks;
  if (n !== null)
    for (e.callbacks = null, e = 0; e < n.length; e++) wp(n[e], t);
}
var Xl = $t(null),
  Cr = $t(0);
function Hd(e, t) {
  (e = bn), ge(Cr, e), ge(Xl, t), (bn = e | t.baseLanes);
}
function Zu() {
  ge(Cr, bn), ge(Xl, Xl.current);
}
function tf() {
  (bn = Cr.current), Be(Xl), Be(Cr);
}
var ra = 0,
  V = null,
  se = null,
  Te = null,
  Or = !1,
  Tl = !1,
  Ha = !1,
  Mr = 0,
  Pi = 0,
  Cl = null,
  Db = 0;
function Ne() {
  throw Error(j(321));
}
function nf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!mt(e[n], t[n])) return !1;
  return !0;
}
function af(e, t, n, a, l, i) {
  return (
    (ra = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (H.H = e === null || e.memoizedState === null ? Ip : eg),
    (Ha = !1),
    (i = n(a, l)),
    (Ha = !1),
    Tl && (i = Ep(t, n, a, l)),
    Ap(e),
    i
  );
}
function Ap(e) {
  H.H = Rr;
  var t = se !== null && se.next !== null;
  if (((ra = 0), (Te = se = V = null), (Or = !1), (Pi = 0), (Cl = null), t))
    throw Error(j(300));
  e === null || Ue || ((e = e.dependencies), e !== null && Tr(e) && (Ue = !0));
}
function Ep(e, t, n, a) {
  V = e;
  var l = 0;
  do {
    if ((Tl && (Cl = null), (Pi = 0), (Tl = !1), 25 <= l)) throw Error(j(301));
    if (((l += 1), (Te = se = null), e.updateQueue != null)) {
      var i = e.updateQueue;
      (i.lastEffect = null),
        (i.events = null),
        (i.stores = null),
        i.memoCache != null && (i.memoCache.index = 0);
    }
    (H.H = qb), (i = t(n, a));
  } while (Tl);
  return i;
}
function zb() {
  var e = H.H,
    t = e.useState()[0];
  return (
    (t = typeof t.then == "function" ? As(t) : t),
    (e = e.useState()[0]),
    (se !== null ? se.memoizedState : null) !== e && (V.flags |= 1024),
    t
  );
}
function lf() {
  var e = Mr !== 0;
  return (Mr = 0), e;
}
function sf(e, t, n) {
  (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
}
function rf(e) {
  if (Or) {
    for (e = e.memoizedState; e !== null; ) {
      var t = e.queue;
      t !== null && (t.pending = null), (e = e.next);
    }
    Or = !1;
  }
  (ra = 0), (Te = se = V = null), (Tl = !1), (Pi = Mr = 0), (Cl = null);
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (V.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function Ce() {
  if (se === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = Te === null ? V.memoizedState : Te.next;
  if (t !== null) (Te = t), (se = e);
  else {
    if (e === null) throw V.alternate === null ? Error(j(467)) : Error(j(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      Te === null ? (V.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function of() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function As(e) {
  var t = Pi;
  return (
    (Pi += 1),
    Cl === null && (Cl = []),
    (e = xp(Cl, e, t)),
    (t = V),
    (Te === null ? t.memoizedState : Te.next) === null &&
      ((t = t.alternate),
      (H.H = t === null || t.memoizedState === null ? Ip : eg)),
    e
  );
}
function fo(e) {
  if (e !== null && typeof e == "object") {
    if (typeof e.then == "function") return As(e);
    if (e.$$typeof === un) return Ve(e);
  }
  throw Error(j(438, String(e)));
}
function uf(e) {
  var t = null,
    n = V.updateQueue;
  if ((n !== null && (t = n.memoCache), t == null)) {
    var a = V.alternate;
    a !== null &&
      ((a = a.updateQueue),
      a !== null &&
        ((a = a.memoCache),
        a != null &&
          (t = {
            data: a.data.map(function (l) {
              return l.slice();
            }),
            index: 0,
          })));
  }
  if (
    (t == null && (t = { data: [], index: 0 }),
    n === null && ((n = of()), (V.updateQueue = n)),
    (n.memoCache = t),
    (n = t.data[t.index]),
    n === void 0)
  )
    for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = vy;
  return t.index++, n;
}
function vn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function or(e) {
  var t = Ce();
  return cf(t, se, e);
}
function cf(e, t, n) {
  var a = e.queue;
  if (a === null) throw Error(j(311));
  a.lastRenderedReducer = n;
  var l = e.baseQueue,
    i = a.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      (l.next = i.next), (i.next = s);
    }
    (t.baseQueue = l = i), (a.pending = null);
  }
  if (((i = e.baseState), l === null)) e.memoizedState = i;
  else {
    t = l.next;
    var r = (s = null),
      o = null,
      c = t,
      d = !1;
    do {
      var m = c.lane & -536870913;
      if (m !== c.lane ? (P & m) === m : (ra & m) === m) {
        var h = c.revertLane;
        if (h === 0)
          o !== null &&
            (o = o.next =
              {
                lane: 0,
                revertLane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            m === Vl && (d = !0);
        else if ((ra & h) === h) {
          (c = c.next), h === Vl && (d = !0);
          continue;
        } else
          (m = {
            lane: 0,
            revertLane: c.revertLane,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          }),
            o === null ? ((r = o = m), (s = i)) : (o = o.next = m),
            (V.lanes |= h),
            (ua |= h);
        (m = c.action),
          Ha && n(i, m),
          (i = c.hasEagerState ? c.eagerState : n(i, m));
      } else
        (h = {
          lane: m,
          revertLane: c.revertLane,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }),
          o === null ? ((r = o = h), (s = i)) : (o = o.next = h),
          (V.lanes |= m),
          (ua |= m);
      c = c.next;
    } while (c !== null && c !== t);
    if (
      (o === null ? (s = i) : (o.next = r),
      !mt(i, e.memoizedState) && ((Ue = !0), d && ((n = jl), n !== null)))
    )
      throw n;
    (e.memoizedState = i),
      (e.baseState = s),
      (e.baseQueue = o),
      (a.lastRenderedState = i);
  }
  return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
}
function Wo(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var a = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== l);
    mt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, a];
}
function Np(e, t, n) {
  var a = V,
    l = Ce(),
    i = I;
  if (i) {
    if (n === void 0) throw Error(j(407));
    n = n();
  } else n = t();
  var s = !mt((se || l).memoizedState, n);
  s && ((l.memoizedState = n), (Ue = !0)), (l = l.queue);
  var r = Cp.bind(null, a, l, e);
  if (
    (Es(2048, 8, r, [e]),
    l.getSnapshot !== t || s || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((a.flags |= 2048),
      Zl(9, ho(), Tp.bind(null, a, l, n, t), null),
      oe === null)
    )
      throw Error(j(349));
    i || ra & 124 || jp(a, t, n);
  }
  return n;
}
function jp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = of()), (V.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Tp(e, t, n, a) {
  (t.value = n), (t.getSnapshot = a), Op(t) && Mp(e);
}
function Cp(e, t, n) {
  return n(function () {
    Op(t) && Mp(e);
  });
}
function Op(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function Mp(e) {
  var t = ai(e, 2);
  t !== null && dt(t, e, 2);
}
function Ku(e) {
  var t = Je();
  if (typeof e == "function") {
    var n = e;
    if (((e = n()), Ha)) {
      Kn(!0);
      try {
        n();
      } finally {
        Kn(!1);
      }
    }
  }
  return (
    (t.memoizedState = t.baseState = e),
    (t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vn,
      lastRenderedState: e,
    }),
    t
  );
}
function Rp(e, t, n, a) {
  return (e.baseState = n), cf(e, se, typeof a == "function" ? a : vn);
}
function _b(e, t, n, a, l) {
  if (mo(e)) throw Error(j(485));
  if (((e = t.action), e !== null)) {
    var i = {
      payload: l,
      action: e,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (s) {
        i.listeners.push(s);
      },
    };
    H.T !== null ? n(!0) : (i.isTransition = !1),
      a(i),
      (n = t.pending),
      n === null
        ? ((i.next = t.pending = i), Dp(t, i))
        : ((i.next = n.next), (t.pending = n.next = i));
  }
}
function Dp(e, t) {
  var n = t.action,
    a = t.payload,
    l = e.state;
  if (t.isTransition) {
    var i = H.T,
      s = {};
    H.T = s;
    try {
      var r = n(l, a),
        o = H.S;
      o !== null && o(s, r), Ld(e, t, r);
    } catch (c) {
      Fu(e, t, c);
    } finally {
      H.T = i;
    }
  } else
    try {
      (i = n(l, a)), Ld(e, t, i);
    } catch (c) {
      Fu(e, t, c);
    }
}
function Ld(e, t, n) {
  n !== null && typeof n == "object" && typeof n.then == "function"
    ? n.then(
        function (a) {
          qd(e, t, a);
        },
        function (a) {
          return Fu(e, t, a);
        }
      )
    : qd(e, t, n);
}
function qd(e, t, n) {
  (t.status = "fulfilled"),
    (t.value = n),
    zp(t),
    (e.state = n),
    (t = e.pending),
    t !== null &&
      ((n = t.next),
      n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Dp(e, n)));
}
function Fu(e, t, n) {
  var a = e.pending;
  if (((e.pending = null), a !== null)) {
    a = a.next;
    do (t.status = "rejected"), (t.reason = n), zp(t), (t = t.next);
    while (t !== a);
  }
  e.action = null;
}
function zp(e) {
  e = e.listeners;
  for (var t = 0; t < e.length; t++) (0, e[t])();
}
function _p(e, t) {
  return t;
}
function Yd(e, t) {
  if (I) {
    var n = oe.formState;
    if (n !== null) {
      e: {
        var a = V;
        if (I) {
          if (Se) {
            t: {
              for (var l = Se, i = Qt; l.nodeType !== 8; ) {
                if (!i) {
                  l = null;
                  break t;
                }
                if (((l = _t(l.nextSibling)), l === null)) {
                  l = null;
                  break t;
                }
              }
              (i = l.data), (l = i === "F!" || i === "F" ? l : null);
            }
            if (l) {
              (Se = _t(l.nextSibling)), (a = l.data === "F!");
              break e;
            }
          }
          Ua(a);
        }
        a = !1;
      }
      a && (t = n[0]);
    }
  }
  return (
    (n = Je()),
    (n.memoizedState = n.baseState = t),
    (a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _p,
      lastRenderedState: t,
    }),
    (n.queue = a),
    (n = Jp.bind(null, V, a)),
    (a.dispatch = n),
    (a = Ku(!1)),
    (i = mf.bind(null, V, !1, a.queue)),
    (a = Je()),
    (l = { state: t, dispatch: null, action: e, pending: null }),
    (a.queue = l),
    (n = _b.bind(null, V, l, i, n)),
    (l.dispatch = n),
    (a.memoizedState = e),
    [t, n, !1]
  );
}
function Gd(e) {
  var t = Ce();
  return Up(t, se, e);
}
function Up(e, t, n) {
  if (
    ((t = cf(e, t, _p)[0]),
    (e = or(vn)[0]),
    typeof t == "object" && t !== null && typeof t.then == "function")
  )
    try {
      var a = As(t);
    } catch (s) {
      throw s === Ss ? co : s;
    }
  else a = t;
  t = Ce();
  var l = t.queue,
    i = l.dispatch;
  return (
    n !== t.memoizedState &&
      ((V.flags |= 2048), Zl(9, ho(), Ub.bind(null, l, n), null)),
    [a, i, e]
  );
}
function Ub(e, t) {
  e.action = t;
}
function kd(e) {
  var t = Ce(),
    n = se;
  if (n !== null) return Up(t, n, e);
  Ce(), (t = t.memoizedState), (n = Ce());
  var a = n.queue.dispatch;
  return (n.memoizedState = e), [t, a, !1];
}
function Zl(e, t, n, a) {
  return (
    (e = { tag: e, create: n, deps: a, inst: t, next: null }),
    (t = V.updateQueue),
    t === null && ((t = of()), (V.updateQueue = t)),
    (n = t.lastEffect),
    n === null
      ? (t.lastEffect = e.next = e)
      : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
    e
  );
}
function ho() {
  return { destroy: void 0, resource: void 0 };
}
function Bp() {
  return Ce().memoizedState;
}
function ur(e, t, n, a) {
  var l = Je();
  (a = a === void 0 ? null : a),
    (V.flags |= e),
    (l.memoizedState = Zl(1 | t, ho(), n, a));
}
function Es(e, t, n, a) {
  var l = Ce();
  a = a === void 0 ? null : a;
  var i = l.memoizedState.inst;
  se !== null && a !== null && nf(a, se.memoizedState.deps)
    ? (l.memoizedState = Zl(t, i, n, a))
    : ((V.flags |= e), (l.memoizedState = Zl(1 | t, i, n, a)));
}
function Qd(e, t) {
  ur(8390656, 8, e, t);
}
function Hp(e, t) {
  Es(2048, 8, e, t);
}
function Lp(e, t) {
  return Es(4, 2, e, t);
}
function qp(e, t) {
  return Es(4, 4, e, t);
}
function Yp(e, t) {
  if (typeof t == "function") {
    e = e();
    var n = t(e);
    return function () {
      typeof n == "function" ? n() : t(null);
    };
  }
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gp(e, t, n) {
  (n = n != null ? n.concat([e]) : null), Es(4, 4, Yp.bind(null, t, e), n);
}
function ff() {}
function kp(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  return t !== null && nf(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
}
function Qp(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var a = n.memoizedState;
  if (t !== null && nf(t, a[1])) return a[0];
  if (((a = e()), Ha)) {
    Kn(!0);
    try {
      e();
    } finally {
      Kn(!1);
    }
  }
  return (n.memoizedState = [a, t]), a;
}
function df(e, t, n) {
  return n === void 0 || ra & 1073741824
    ? (e.memoizedState = t)
    : ((e.memoizedState = n), (e = zg()), (V.lanes |= e), (ua |= e), n);
}
function Vp(e, t, n, a) {
  return mt(n, t)
    ? n
    : Xl.current !== null
    ? ((e = df(e, n, a)), mt(e, t) || (Ue = !0), e)
    : ra & 42
    ? ((e = zg()), (V.lanes |= e), (ua |= e), t)
    : ((Ue = !0), (e.memoizedState = n));
}
function Xp(e, t, n, a, l) {
  var i = ee.p;
  ee.p = i !== 0 && 8 > i ? i : 8;
  var s = H.T,
    r = {};
  (H.T = r), mf(e, !1, t, n);
  try {
    var o = l(),
      c = H.S;
    if (
      (c !== null && c(r, o),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      var d = Rb(o, a);
      Hi(e, t, d, ft(e));
    } else Hi(e, t, a, ft(e));
  } catch (m) {
    Hi(e, t, { then: function () {}, status: "rejected", reason: m }, ft());
  } finally {
    (ee.p = i), (H.T = s);
  }
}
function Bb() {}
function Pu(e, t, n, a) {
  if (e.tag !== 5) throw Error(j(476));
  var l = Zp(e).queue;
  Xp(
    e,
    l,
    t,
    Ca,
    n === null
      ? Bb
      : function () {
          return Kp(e), n(a);
        }
  );
}
function Zp(e) {
  var t = e.memoizedState;
  if (t !== null) return t;
  t = {
    memoizedState: Ca,
    baseState: Ca,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vn,
      lastRenderedState: Ca,
    },
    next: null,
  };
  var n = {};
  return (
    (t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vn,
        lastRenderedState: n,
      },
      next: null,
    }),
    (e.memoizedState = t),
    (e = e.alternate),
    e !== null && (e.memoizedState = t),
    t
  );
}
function Kp(e) {
  var t = Zp(e).next.queue;
  Hi(e, t, {}, ft());
}
function hf() {
  return Ve(es);
}
function Fp() {
  return Ce().memoizedState;
}
function Pp() {
  return Ce().memoizedState;
}
function Hb(e) {
  for (var t = e.return; t !== null; ) {
    switch (t.tag) {
      case 24:
      case 3:
        var n = ft();
        e = In(n);
        var a = ea(t, e, n);
        a !== null && (dt(a, t, n), _i(a, t, n)),
          (t = { cache: Wc() }),
          (e.payload = t);
        return;
    }
    t = t.return;
  }
}
function Lb(e, t, n) {
  var a = ft();
  (n = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    mo(e)
      ? $p(t, n)
      : ((n = Fc(e, t, n, a)), n !== null && (dt(n, e, a), Wp(n, t, a)));
}
function Jp(e, t, n) {
  var a = ft();
  Hi(e, t, n, a);
}
function Hi(e, t, n, a) {
  var l = {
    lane: a,
    revertLane: 0,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (mo(e)) $p(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          r = i(s, n);
        if (((l.hasEagerState = !0), (l.eagerState = r), mt(r, s)))
          return uo(e, t, l, 0), oe === null && oo(), !1;
      } catch {
      } finally {
      }
    if (((n = Fc(e, t, l, a)), n !== null)) return dt(n, e, a), Wp(n, t, a), !0;
  }
  return !1;
}
function mf(e, t, n, a) {
  if (
    ((a = {
      lane: 2,
      revertLane: Sf(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mo(e))
  ) {
    if (t) throw Error(j(479));
  } else (t = Fc(e, n, a, 2)), t !== null && dt(t, e, 2);
}
function mo(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function $p(e, t) {
  Tl = Or = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wp(e, t, n) {
  if (n & 4194048) {
    var a = t.lanes;
    (a &= e.pendingLanes), (n |= a), (t.lanes = n), km(e, n);
  }
}
var Rr = {
    readContext: Ve,
    use: fo,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useLayoutEffect: Ne,
    useInsertionEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    useHostTransitionStatus: Ne,
    useFormState: Ne,
    useActionState: Ne,
    useOptimistic: Ne,
    useMemoCache: Ne,
    useCacheRefresh: Ne,
  },
  Ip = {
    readContext: Ve,
    use: fo,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ve,
    useEffect: Qd,
    useImperativeHandle: function (e, t, n) {
      (n = n != null ? n.concat([e]) : null),
        ur(4194308, 4, Yp.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      t = t === void 0 ? null : t;
      var a = e();
      if (Ha) {
        Kn(!0);
        try {
          e();
        } finally {
          Kn(!1);
        }
      }
      return (n.memoizedState = [a, t]), a;
    },
    useReducer: function (e, t, n) {
      var a = Je();
      if (n !== void 0) {
        var l = n(t);
        if (Ha) {
          Kn(!0);
          try {
            n(t);
          } finally {
            Kn(!1);
          }
        }
      } else l = t;
      return (
        (a.memoizedState = a.baseState = l),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: l,
        }),
        (a.queue = e),
        (e = e.dispatch = Lb.bind(null, V, e)),
        [a.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Ku(e);
      var t = e.queue,
        n = Jp.bind(null, V, t);
      return (t.dispatch = n), [e.memoizedState, n];
    },
    useDebugValue: ff,
    useDeferredValue: function (e, t) {
      var n = Je();
      return df(n, e, t);
    },
    useTransition: function () {
      var e = Ku(!1);
      return (
        (e = Xp.bind(null, V, e.queue, !0, !1)),
        (Je().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, n) {
      var a = V,
        l = Je();
      if (I) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(j(349));
        P & 124 || jp(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Qd(Cp.bind(null, a, i, e), [e]),
        (a.flags |= 2048),
        Zl(9, ho(), Tp.bind(null, a, i, n, t), null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = oe.identifierPrefix;
      if (I) {
        var n = fn,
          a = cn;
        (n = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + n),
          (t = "«" + t + "R" + n),
          (n = Mr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += "»");
      } else (n = Db++), (t = "«" + t + "r" + n.toString(32) + "»");
      return (e.memoizedState = t);
    },
    useHostTransitionStatus: hf,
    useFormState: Yd,
    useActionState: Yd,
    useOptimistic: function (e) {
      var t = Je();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = n), (t = mf.bind(null, V, !0, n)), (n.dispatch = t), [e, t]
      );
    },
    useMemoCache: uf,
    useCacheRefresh: function () {
      return (Je().memoizedState = Hb.bind(null, V));
    },
  },
  eg = {
    readContext: Ve,
    use: fo,
    useCallback: kp,
    useContext: Ve,
    useEffect: Hp,
    useImperativeHandle: Gp,
    useInsertionEffect: Lp,
    useLayoutEffect: qp,
    useMemo: Qp,
    useReducer: or,
    useRef: Bp,
    useState: function () {
      return or(vn);
    },
    useDebugValue: ff,
    useDeferredValue: function (e, t) {
      var n = Ce();
      return Vp(n, se.memoizedState, e, t);
    },
    useTransition: function () {
      var e = or(vn)[0],
        t = Ce().memoizedState;
      return [typeof e == "boolean" ? e : As(e), t];
    },
    useSyncExternalStore: Np,
    useId: Fp,
    useHostTransitionStatus: hf,
    useFormState: Gd,
    useActionState: Gd,
    useOptimistic: function (e, t) {
      var n = Ce();
      return Rp(n, se, e, t);
    },
    useMemoCache: uf,
    useCacheRefresh: Pp,
  },
  qb = {
    readContext: Ve,
    use: fo,
    useCallback: kp,
    useContext: Ve,
    useEffect: Hp,
    useImperativeHandle: Gp,
    useInsertionEffect: Lp,
    useLayoutEffect: qp,
    useMemo: Qp,
    useReducer: Wo,
    useRef: Bp,
    useState: function () {
      return Wo(vn);
    },
    useDebugValue: ff,
    useDeferredValue: function (e, t) {
      var n = Ce();
      return se === null ? df(n, e, t) : Vp(n, se.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Wo(vn)[0],
        t = Ce().memoizedState;
      return [typeof e == "boolean" ? e : As(e), t];
    },
    useSyncExternalStore: Np,
    useId: Fp,
    useHostTransitionStatus: hf,
    useFormState: kd,
    useActionState: kd,
    useOptimistic: function (e, t) {
      var n = Ce();
      return se !== null
        ? Rp(n, se, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: uf,
    useCacheRefresh: Pp,
  },
  Ol = null,
  Ji = 0;
function Xs(e) {
  var t = Ji;
  return (Ji += 1), Ol === null && (Ol = []), xp(Ol, e, t);
}
function vi(e, t) {
  (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
}
function Zs(e, t) {
  throw t.$$typeof === py
    ? Error(j(525))
    : ((e = Object.prototype.toString.call(t)),
      Error(
        j(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ));
}
function Vd(e) {
  var t = e._init;
  return t(e._payload);
}
function tg(e) {
  function t(p, g) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [g]), (p.flags |= 16)) : v.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function a(p) {
    for (var g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function l(p, g) {
    return (p = mn(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, g, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < g ? ((p.flags |= 67108866), g) : v)
            : ((p.flags |= 67108866), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 67108866), p;
  }
  function r(p, g, v, w) {
    return g === null || g.tag !== 6
      ? ((g = Po(v, p.mode, w)), (g.return = p), g)
      : ((g = l(g, v)), (g.return = p), g);
  }
  function o(p, g, v, w) {
    var A = v.type;
    return A === fl
      ? d(p, g, v.props.children, w, v.key)
      : g !== null &&
        (g.elementType === A ||
          (typeof A == "object" &&
            A !== null &&
            A.$$typeof === Bn &&
            Vd(A) === g.type))
      ? ((g = l(g, v.props)), vi(g, v), (g.return = p), g)
      : ((g = sr(v.type, v.key, v.props, null, p.mode, w)),
        vi(g, v),
        (g.return = p),
        g);
  }
  function c(p, g, v, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== v.containerInfo ||
      g.stateNode.implementation !== v.implementation
      ? ((g = Jo(v, p.mode, w)), (g.return = p), g)
      : ((g = l(g, v.children || [])), (g.return = p), g);
  }
  function d(p, g, v, w, A) {
    return g === null || g.tag !== 7
      ? ((g = Oa(v, p.mode, w, A)), (g.return = p), g)
      : ((g = l(g, v)), (g.return = p), g);
  }
  function m(p, g, v) {
    if (
      (typeof g == "string" && g !== "") ||
      typeof g == "number" ||
      typeof g == "bigint"
    )
      return (g = Po("" + g, p.mode, v)), (g.return = p), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ls:
          return (
            (v = sr(g.type, g.key, g.props, null, p.mode, v)),
            vi(v, g),
            (v.return = p),
            v
          );
        case Ai:
          return (g = Jo(g, p.mode, v)), (g.return = p), g;
        case Bn:
          var w = g._init;
          return (g = w(g._payload)), m(p, g, v);
      }
      if (Ei(g) || hi(g))
        return (g = Oa(g, p.mode, v, null)), (g.return = p), g;
      if (typeof g.then == "function") return m(p, Xs(g), v);
      if (g.$$typeof === un) return m(p, Qs(p, g), v);
      Zs(p, g);
    }
    return null;
  }
  function h(p, g, v, w) {
    var A = g !== null ? g.key : null;
    if (
      (typeof v == "string" && v !== "") ||
      typeof v == "number" ||
      typeof v == "bigint"
    )
      return A !== null ? null : r(p, g, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ls:
          return v.key === A ? o(p, g, v, w) : null;
        case Ai:
          return v.key === A ? c(p, g, v, w) : null;
        case Bn:
          return (A = v._init), (v = A(v._payload)), h(p, g, v, w);
      }
      if (Ei(v) || hi(v)) return A !== null ? null : d(p, g, v, w, null);
      if (typeof v.then == "function") return h(p, g, Xs(v), w);
      if (v.$$typeof === un) return h(p, g, Qs(p, v), w);
      Zs(p, v);
    }
    return null;
  }
  function f(p, g, v, w, A) {
    if (
      (typeof w == "string" && w !== "") ||
      typeof w == "number" ||
      typeof w == "bigint"
    )
      return (p = p.get(v) || null), r(g, p, "" + w, A);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ls:
          return (p = p.get(w.key === null ? v : w.key) || null), o(g, p, w, A);
        case Ai:
          return (p = p.get(w.key === null ? v : w.key) || null), c(g, p, w, A);
        case Bn:
          var T = w._init;
          return (w = T(w._payload)), f(p, g, v, w, A);
      }
      if (Ei(w) || hi(w)) return (p = p.get(v) || null), d(g, p, w, A, null);
      if (typeof w.then == "function") return f(p, g, v, Xs(w), A);
      if (w.$$typeof === un) return f(p, g, v, Qs(g, w), A);
      Zs(g, w);
    }
    return null;
  }
  function S(p, g, v, w) {
    for (
      var A = null, T = null, E = g, O = (g = 0), U = null;
      E !== null && O < v.length;
      O++
    ) {
      E.index > O ? ((U = E), (E = null)) : (U = E.sibling);
      var z = h(p, E, v[O], w);
      if (z === null) {
        E === null && (E = U);
        break;
      }
      e && E && z.alternate === null && t(p, E),
        (g = i(z, g, O)),
        T === null ? (A = z) : (T.sibling = z),
        (T = z),
        (E = U);
    }
    if (O === v.length) return n(p, E), I && xa(p, O), A;
    if (E === null) {
      for (; O < v.length; O++)
        (E = m(p, v[O], w)),
          E !== null &&
            ((g = i(E, g, O)), T === null ? (A = E) : (T.sibling = E), (T = E));
      return I && xa(p, O), A;
    }
    for (E = a(E); O < v.length; O++)
      (U = f(E, p, O, v[O], w)),
        U !== null &&
          (e && U.alternate !== null && E.delete(U.key === null ? O : U.key),
          (g = i(U, g, O)),
          T === null ? (A = U) : (T.sibling = U),
          (T = U));
    return (
      e &&
        E.forEach(function (k) {
          return t(p, k);
        }),
      I && xa(p, O),
      A
    );
  }
  function y(p, g, v, w) {
    if (v == null) throw Error(j(151));
    for (
      var A = null, T = null, E = g, O = (g = 0), U = null, z = v.next();
      E !== null && !z.done;
      O++, z = v.next()
    ) {
      E.index > O ? ((U = E), (E = null)) : (U = E.sibling);
      var k = h(p, E, z.value, w);
      if (k === null) {
        E === null && (E = U);
        break;
      }
      e && E && k.alternate === null && t(p, E),
        (g = i(k, g, O)),
        T === null ? (A = k) : (T.sibling = k),
        (T = k),
        (E = U);
    }
    if (z.done) return n(p, E), I && xa(p, O), A;
    if (E === null) {
      for (; !z.done; O++, z = v.next())
        (z = m(p, z.value, w)),
          z !== null &&
            ((g = i(z, g, O)), T === null ? (A = z) : (T.sibling = z), (T = z));
      return I && xa(p, O), A;
    }
    for (E = a(E); !z.done; O++, z = v.next())
      (z = f(E, p, O, z.value, w)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? O : z.key),
          (g = i(z, g, O)),
          T === null ? (A = z) : (T.sibling = z),
          (T = z));
    return (
      e &&
        E.forEach(function (B) {
          return t(p, B);
        }),
      I && xa(p, O),
      A
    );
  }
  function x(p, g, v, w) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === fl &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ls:
          e: {
            for (var A = v.key; g !== null; ) {
              if (g.key === A) {
                if (((A = v.type), A === fl)) {
                  if (g.tag === 7) {
                    n(p, g.sibling),
                      (w = l(g, v.props.children)),
                      (w.return = p),
                      (p = w);
                    break e;
                  }
                } else if (
                  g.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === Bn &&
                    Vd(A) === g.type)
                ) {
                  n(p, g.sibling),
                    (w = l(g, v.props)),
                    vi(w, v),
                    (w.return = p),
                    (p = w);
                  break e;
                }
                n(p, g);
                break;
              } else t(p, g);
              g = g.sibling;
            }
            v.type === fl
              ? ((w = Oa(v.props.children, p.mode, w, v.key)),
                (w.return = p),
                (p = w))
              : ((w = sr(v.type, v.key, v.props, null, p.mode, w)),
                vi(w, v),
                (w.return = p),
                (p = w));
          }
          return s(p);
        case Ai:
          e: {
            for (A = v.key; g !== null; ) {
              if (g.key === A)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === v.containerInfo &&
                  g.stateNode.implementation === v.implementation
                ) {
                  n(p, g.sibling),
                    (w = l(g, v.children || [])),
                    (w.return = p),
                    (p = w);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (w = Jo(v, p.mode, w)), (w.return = p), (p = w);
          }
          return s(p);
        case Bn:
          return (A = v._init), (v = A(v._payload)), x(p, g, v, w);
      }
      if (Ei(v)) return S(p, g, v, w);
      if (hi(v)) {
        if (((A = hi(v)), typeof A != "function")) throw Error(j(150));
        return (v = A.call(v)), y(p, g, v, w);
      }
      if (typeof v.then == "function") return x(p, g, Xs(v), w);
      if (v.$$typeof === un) return x(p, g, Qs(p, v), w);
      Zs(p, v);
    }
    return (typeof v == "string" && v !== "") ||
      typeof v == "number" ||
      typeof v == "bigint"
      ? ((v = "" + v),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (w = l(g, v)), (w.return = p), (p = w))
          : (n(p, g), (w = Po(v, p.mode, w)), (w.return = p), (p = w)),
        s(p))
      : n(p, g);
  }
  return function (p, g, v, w) {
    try {
      Ji = 0;
      var A = x(p, g, v, w);
      return (Ol = null), A;
    } catch (E) {
      if (E === Ss || E === co) throw E;
      var T = ot(29, E, null, p.mode);
      return (T.lanes = w), (T.return = p), T;
    } finally {
    }
  };
}
var Kl = tg(!0),
  ng = tg(!1),
  Et = $t(null),
  Ft = null;
function qn(e) {
  var t = e.alternate;
  ge(Re, Re.current & 1),
    ge(Et, e),
    Ft === null &&
      (t === null || Xl.current !== null || t.memoizedState !== null) &&
      (Ft = e);
}
function ag(e) {
  if (e.tag === 22) {
    if ((ge(Re, Re.current), ge(Et, e), Ft === null)) {
      var t = e.alternate;
      t !== null && t.memoizedState !== null && (Ft = e);
    }
  } else Yn();
}
function Yn() {
  ge(Re, Re.current), ge(Et, Et.current);
}
function hn(e) {
  Be(Et), Ft === e && (Ft = null), Be(Re);
}
var Re = $t(0);
function Dr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || dc(n))
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
function Io(e, t, n, a) {
  (t = e.memoizedState),
    (n = n(a, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ju = {
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var a = ft(),
      l = In(a);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = ea(e, l, a)),
      t !== null && (dt(t, e, a), _i(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var a = ft(),
      l = In(a);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = ea(e, l, a)),
      t !== null && (dt(t, e, a), _i(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ft(),
      a = In(n);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = ea(e, a, n)),
      t !== null && (dt(t, e, n), _i(t, e, n));
  },
};
function Xd(e, t, n, a, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(a, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ki(n, a) || !Ki(l, i)
      : !0
  );
}
function Zd(e, t, n, a) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, a),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, a),
    t.state !== e && Ju.enqueueReplaceState(t, t.state, null);
}
function La(e, t) {
  var n = t;
  if ("ref" in t) {
    n = {};
    for (var a in t) a !== "ref" && (n[a] = t[a]);
  }
  if ((e = e.defaultProps)) {
    n === t && (n = de({}, n));
    for (var l in e) n[l] === void 0 && (n[l] = e[l]);
  }
  return n;
}
var zr =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        if (
          typeof window == "object" &&
          typeof window.ErrorEvent == "function"
        ) {
          var t = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof e == "object" && e !== null && typeof e.message == "string"
                ? String(e.message)
                : String(e),
            error: e,
          });
          if (!window.dispatchEvent(t)) return;
        } else if (
          typeof process == "object" &&
          typeof process.emit == "function"
        ) {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      };
function lg(e) {
  zr(e);
}
function ig(e) {
  console.error(e);
}
function sg(e) {
  zr(e);
}
function _r(e, t) {
  try {
    var n = e.onUncaughtError;
    n(t.value, { componentStack: t.stack });
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
function Kd(e, t, n) {
  try {
    var a = e.onCaughtError;
    a(n.value, {
      componentStack: n.stack,
      errorBoundary: t.tag === 1 ? t.stateNode : null,
    });
  } catch (l) {
    setTimeout(function () {
      throw l;
    });
  }
}
function $u(e, t, n) {
  return (
    (n = In(n)),
    (n.tag = 3),
    (n.payload = { element: null }),
    (n.callback = function () {
      _r(e, t);
    }),
    n
  );
}
function rg(e) {
  return (e = In(e)), (e.tag = 3), e;
}
function og(e, t, n, a) {
  var l = n.type.getDerivedStateFromError;
  if (typeof l == "function") {
    var i = a.value;
    (e.payload = function () {
      return l(i);
    }),
      (e.callback = function () {
        Kd(t, n, a);
      });
  }
  var s = n.stateNode;
  s !== null &&
    typeof s.componentDidCatch == "function" &&
    (e.callback = function () {
      Kd(t, n, a),
        typeof l != "function" &&
          (ta === null ? (ta = new Set([this])) : ta.add(this));
      var r = a.stack;
      this.componentDidCatch(a.value, { componentStack: r !== null ? r : "" });
    });
}
function Yb(e, t, n, a, l) {
  if (
    ((n.flags |= 32768),
    a !== null && typeof a == "object" && typeof a.then == "function")
  ) {
    if (
      ((t = n.alternate),
      t !== null && xs(t, n, l, !0),
      (n = Et.current),
      n !== null)
    ) {
      switch (n.tag) {
        case 13:
          return (
            Ft === null ? ic() : n.alternate === null && Ae === 0 && (Ae = 3),
            (n.flags &= -257),
            (n.flags |= 65536),
            (n.lanes = l),
            a === Qu
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                cu(e, a, l)),
            !1
          );
        case 22:
          return (
            (n.flags |= 65536),
            a === Qu
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null
                  ? ((t = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([a]),
                    }),
                    (n.updateQueue = t))
                  : ((n = t.retryQueue),
                    n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                cu(e, a, l)),
            !1
          );
      }
      throw Error(j(435, n.tag));
    }
    return cu(e, a, l), ic(), !1;
  }
  if (I)
    return (
      (t = Et.current),
      t !== null
        ? (!(t.flags & 65536) && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = l),
          a !== Lu && ((e = Error(j(422), { cause: a })), Fi(St(e, n))))
        : (a !== Lu && ((t = Error(j(423), { cause: a })), Fi(St(t, n))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (l &= -l),
          (e.lanes |= l),
          (a = St(a, n)),
          (l = $u(e.stateNode, a, l)),
          $o(e, l),
          Ae !== 4 && (Ae = 2)),
      !1
    );
  var i = Error(j(520), { cause: a });
  if (
    ((i = St(i, n)),
    Yi === null ? (Yi = [i]) : Yi.push(i),
    Ae !== 4 && (Ae = 2),
    t === null)
  )
    return !0;
  (a = St(a, n)), (n = t);
  do {
    switch (n.tag) {
      case 3:
        return (
          (n.flags |= 65536),
          (e = l & -l),
          (n.lanes |= e),
          (e = $u(n.stateNode, a, e)),
          $o(n, e),
          !1
        );
      case 1:
        if (
          ((t = n.type),
          (i = n.stateNode),
          (n.flags & 128) === 0 &&
            (typeof t.getDerivedStateFromError == "function" ||
              (i !== null &&
                typeof i.componentDidCatch == "function" &&
                (ta === null || !ta.has(i)))))
        )
          return (
            (n.flags |= 65536),
            (l &= -l),
            (n.lanes |= l),
            (l = rg(l)),
            og(l, e, n, a),
            $o(n, l),
            !1
          );
    }
    n = n.return;
  } while (n !== null);
  return !1;
}
var ug = Error(j(461)),
  Ue = !1;
function He(e, t, n, a) {
  t.child = e === null ? ng(t, null, n, a) : Kl(t, e.child, n, a);
}
function Fd(e, t, n, a, l) {
  n = n.render;
  var i = t.ref;
  if ("ref" in a) {
    var s = {};
    for (var r in a) r !== "ref" && (s[r] = a[r]);
  } else s = a;
  return (
    Ba(t),
    (a = af(e, t, n, s, i, l)),
    (r = lf()),
    e !== null && !Ue
      ? (sf(e, t, l), yn(e, t, l))
      : (I && r && Jc(t), (t.flags |= 1), He(e, t, a, l), t.child)
  );
}
function Pd(e, t, n, a, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Pc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null
      ? ((t.tag = 15), (t.type = i), cg(e, t, i, a, l))
      : ((e = sr(n.type, null, a, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !pf(e, l))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ki), n(s, a) && e.ref === t.ref)
    )
      return yn(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = mn(i, a)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cg(e, t, n, a, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ki(i, a) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = a = i), pf(e, l)))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), yn(e, t, l);
  }
  return Wu(e, t, n, a, l);
}
function fg(e, t, n) {
  var a = t.pendingProps,
    l = a.children,
    i = e !== null ? e.memoizedState : null;
  if (a.mode === "hidden") {
    if (t.flags & 128) {
      if (((a = i !== null ? i.baseLanes | n : n), e !== null)) {
        for (l = t.child = e.child, i = 0; l !== null; )
          (i = i | l.lanes | l.childLanes), (l = l.sibling);
        t.childLanes = i & ~a;
      } else (t.childLanes = 0), (t.child = null);
      return Jd(e, t, a, n);
    }
    if (n & 536870912)
      (t.memoizedState = { baseLanes: 0, cachePool: null }),
        e !== null && rr(t, i !== null ? i.cachePool : null),
        i !== null ? Hd(t, i) : Zu(),
        ag(t);
    else
      return (
        (t.lanes = t.childLanes = 536870912),
        Jd(e, t, i !== null ? i.baseLanes | n : n, n)
      );
  } else
    i !== null
      ? (rr(t, i.cachePool), Hd(t, i), Yn(), (t.memoizedState = null))
      : (e !== null && rr(t, null), Zu(), Yn());
  return He(e, t, l, n), t.child;
}
function Jd(e, t, n, a) {
  var l = Ic();
  return (
    (l = l === null ? null : { parent: Me._currentValue, pool: l }),
    (t.memoizedState = { baseLanes: n, cachePool: l }),
    e !== null && rr(t, null),
    Zu(),
    ag(t),
    e !== null && xs(e, t, a, !0),
    null
  );
}
function cr(e, t) {
  var n = t.ref;
  if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
  else {
    if (typeof n != "function" && typeof n != "object") throw Error(j(284));
    (e === null || e.ref !== n) && (t.flags |= 4194816);
  }
}
function Wu(e, t, n, a, l) {
  return (
    Ba(t),
    (n = af(e, t, n, a, void 0, l)),
    (a = lf()),
    e !== null && !Ue
      ? (sf(e, t, l), yn(e, t, l))
      : (I && a && Jc(t), (t.flags |= 1), He(e, t, n, l), t.child)
  );
}
function $d(e, t, n, a, l, i) {
  return (
    Ba(t),
    (t.updateQueue = null),
    (n = Ep(t, a, n, l)),
    Ap(e),
    (a = lf()),
    e !== null && !Ue
      ? (sf(e, t, i), yn(e, t, i))
      : (I && a && Jc(t), (t.flags |= 1), He(e, t, n, i), t.child)
  );
}
function Wd(e, t, n, a, l) {
  if ((Ba(t), t.stateNode === null)) {
    var i = bl,
      s = n.contextType;
    typeof s == "object" && s !== null && (i = Ve(s)),
      (i = new n(a, i)),
      (t.memoizedState =
        i.state !== null && i.state !== void 0 ? i.state : null),
      (i.updater = Ju),
      (t.stateNode = i),
      (i._reactInternals = t),
      (i = t.stateNode),
      (i.props = a),
      (i.state = t.memoizedState),
      (i.refs = {}),
      ef(t),
      (s = n.contextType),
      (i.context = typeof s == "object" && s !== null ? Ve(s) : bl),
      (i.state = t.memoizedState),
      (s = n.getDerivedStateFromProps),
      typeof s == "function" && (Io(t, n, s, a), (i.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((s = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        s !== i.state && Ju.enqueueReplaceState(i, i.state, null),
        Bi(t, a, i, l),
        Ui(),
        (i.state = t.memoizedState)),
      typeof i.componentDidMount == "function" && (t.flags |= 4194308),
      (a = !0);
  } else if (e === null) {
    i = t.stateNode;
    var r = t.memoizedProps,
      o = La(n, r);
    i.props = o;
    var c = i.context,
      d = n.contextType;
    (s = bl), typeof d == "object" && d !== null && (s = Ve(d));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function"),
      (r = t.pendingProps !== r),
      d ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((r || c !== s) && Zd(t, i, a, s)),
      (Hn = !1);
    var h = t.memoizedState;
    (i.state = h),
      Bi(t, a, i, l),
      Ui(),
      (c = t.memoizedState),
      r || h !== c || Hn
        ? (typeof m == "function" && (Io(t, n, m, a), (c = t.memoizedState)),
          (o = Hn || Xd(t, n, o, a, h, c, s))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = a),
              (t.memoizedState = c)),
          (i.props = a),
          (i.state = c),
          (i.context = s),
          (a = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (a = !1));
  } else {
    (i = t.stateNode),
      Vu(e, t),
      (s = t.memoizedProps),
      (d = La(n, s)),
      (i.props = d),
      (m = t.pendingProps),
      (h = i.context),
      (c = n.contextType),
      (o = bl),
      typeof c == "object" && c !== null && (o = Ve(c)),
      (r = n.getDerivedStateFromProps),
      (c =
        typeof r == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((s !== m || h !== o) && Zd(t, i, a, o)),
      (Hn = !1),
      (h = t.memoizedState),
      (i.state = h),
      Bi(t, a, i, l),
      Ui();
    var f = t.memoizedState;
    s !== m ||
    h !== f ||
    Hn ||
    (e !== null && e.dependencies !== null && Tr(e.dependencies))
      ? (typeof r == "function" && (Io(t, n, r, a), (f = t.memoizedState)),
        (d =
          Hn ||
          Xd(t, n, d, a, h, f, o) ||
          (e !== null && e.dependencies !== null && Tr(e.dependencies)))
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(a, f, o),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(a, f, o)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = a),
            (t.memoizedState = f)),
        (i.props = a),
        (i.state = f),
        (i.context = o),
        (a = d))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (a = !1));
  }
  return (
    (i = a),
    cr(e, t),
    (a = (t.flags & 128) !== 0),
    i || a
      ? ((i = t.stateNode),
        (n =
          a && typeof n.getDerivedStateFromError != "function"
            ? null
            : i.render()),
        (t.flags |= 1),
        e !== null && a
          ? ((t.child = Kl(t, e.child, null, l)), (t.child = Kl(t, null, n, l)))
          : He(e, t, n, l),
        (t.memoizedState = i.state),
        (e = t.child))
      : (e = yn(e, t, l)),
    e
  );
}
function Id(e, t, n, a) {
  return bs(), (t.flags |= 256), He(e, t, n, a), t.child;
}
var eu = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null,
};
function tu(e) {
  return { baseLanes: e, cachePool: yp() };
}
function nu(e, t, n) {
  return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= At), e;
}
function dg(e, t, n) {
  var a = t.pendingProps,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s =
        e !== null && e.memoizedState === null ? !1 : (Re.current & 2) !== 0),
    s && ((l = !0), (t.flags &= -129)),
    (s = (t.flags & 32) !== 0),
    (t.flags &= -33),
    e === null)
  ) {
    if (I) {
      if ((l ? qn(t) : Yn(), I)) {
        var r = Se,
          o;
        if ((o = r)) {
          e: {
            for (o = r, r = Qt; o.nodeType !== 8; ) {
              if (!r) {
                r = null;
                break e;
              }
              if (((o = _t(o.nextSibling)), o === null)) {
                r = null;
                break e;
              }
            }
            r = o;
          }
          r !== null
            ? ((t.memoizedState = {
                dehydrated: r,
                treeContext: Ma !== null ? { id: cn, overflow: fn } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (o = ot(18, null, null, 0)),
              (o.stateNode = r),
              (o.return = t),
              (t.child = o),
              (Ke = t),
              (Se = null),
              (o = !0))
            : (o = !1);
        }
        o || Ua(t);
      }
      if (
        ((r = t.memoizedState), r !== null && ((r = r.dehydrated), r !== null))
      )
        return dc(r) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      hn(t);
    }
    return (
      (r = a.children),
      (a = a.fallback),
      l
        ? (Yn(),
          (l = t.mode),
          (r = Ur({ mode: "hidden", children: r }, l)),
          (a = Oa(a, l, n, null)),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          (l = t.child),
          (l.memoizedState = tu(n)),
          (l.childLanes = nu(e, s, n)),
          (t.memoizedState = eu),
          a)
        : (qn(t), Iu(t, r))
    );
  }
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null))) {
    if (i)
      t.flags & 256
        ? (qn(t), (t.flags &= -257), (t = au(e, t, n)))
        : t.memoizedState !== null
        ? (Yn(), (t.child = e.child), (t.flags |= 128), (t = null))
        : (Yn(),
          (l = a.fallback),
          (r = t.mode),
          (a = Ur({ mode: "visible", children: a.children }, r)),
          (l = Oa(l, r, n, null)),
          (l.flags |= 2),
          (a.return = t),
          (l.return = t),
          (a.sibling = l),
          (t.child = a),
          Kl(t, e.child, null, n),
          (a = t.child),
          (a.memoizedState = tu(n)),
          (a.childLanes = nu(e, s, n)),
          (t.memoizedState = eu),
          (t = l));
    else if ((qn(t), dc(r))) {
      if (((s = r.nextSibling && r.nextSibling.dataset), s)) var c = s.dgst;
      (s = c),
        (a = Error(j(419))),
        (a.stack = ""),
        (a.digest = s),
        Fi({ value: a, source: null, stack: null }),
        (t = au(e, t, n));
    } else if (
      (Ue || xs(e, t, n, !1), (s = (n & e.childLanes) !== 0), Ue || s)
    ) {
      if (
        ((s = oe),
        s !== null &&
          ((a = n & -n),
          (a = a & 42 ? 1 : Lc(a)),
          (a = a & (s.suspendedLanes | n) ? 0 : a),
          a !== 0 && a !== o.retryLane))
      )
        throw ((o.retryLane = a), ai(e, a), dt(s, e, a), ug);
      r.data === "$?" || ic(), (t = au(e, t, n));
    } else
      r.data === "$?"
        ? ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = o.treeContext),
          (Se = _t(r.nextSibling)),
          (Ke = t),
          (I = !0),
          (Ra = null),
          (Qt = !1),
          e !== null &&
            ((bt[xt++] = cn),
            (bt[xt++] = fn),
            (bt[xt++] = Ma),
            (cn = e.id),
            (fn = e.overflow),
            (Ma = t)),
          (t = Iu(t, a.children)),
          (t.flags |= 4096));
    return t;
  }
  return l
    ? (Yn(),
      (l = a.fallback),
      (r = t.mode),
      (o = e.child),
      (c = o.sibling),
      (a = mn(o, { mode: "hidden", children: a.children })),
      (a.subtreeFlags = o.subtreeFlags & 65011712),
      c !== null ? (l = mn(c, l)) : ((l = Oa(l, r, n, null)), (l.flags |= 2)),
      (l.return = t),
      (a.return = t),
      (a.sibling = l),
      (t.child = a),
      (a = l),
      (l = t.child),
      (r = e.child.memoizedState),
      r === null
        ? (r = tu(n))
        : ((o = r.cachePool),
          o !== null
            ? ((c = Me._currentValue),
              (o = o.parent !== c ? { parent: c, pool: c } : o))
            : (o = yp()),
          (r = { baseLanes: r.baseLanes | n, cachePool: o })),
      (l.memoizedState = r),
      (l.childLanes = nu(e, s, n)),
      (t.memoizedState = eu),
      a)
    : (qn(t),
      (n = e.child),
      (e = n.sibling),
      (n = mn(n, { mode: "visible", children: a.children })),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((s = t.deletions),
        s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n);
}
function Iu(e, t) {
  return (
    (t = Ur({ mode: "visible", children: t }, e.mode)),
    (t.return = e),
    (e.child = t)
  );
}
function Ur(e, t) {
  return (
    (e = ot(22, e, null, t)),
    (e.lanes = 0),
    (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
    }),
    e
  );
}
function au(e, t, n) {
  return (
    Kl(t, e.child, null, n),
    (e = Iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function eh(e, t, n) {
  e.lanes |= t;
  var a = e.alternate;
  a !== null && (a.lanes |= t), Yu(e.return, t, n);
}
function lu(e, t, n, a, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = a),
      (i.tail = n),
      (i.tailMode = l));
}
function hg(e, t, n) {
  var a = t.pendingProps,
    l = a.revealOrder,
    i = a.tail;
  if ((He(e, t, a.children, n), (a = Re.current), a & 2))
    (a = (a & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && eh(e, n, t);
        else if (e.tag === 19) eh(e, n, t);
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
    a &= 1;
  }
  switch ((ge(Re, a), l)) {
    case "forwards":
      for (n = t.child, l = null; n !== null; )
        (e = n.alternate),
          e !== null && Dr(e) === null && (l = n),
          (n = n.sibling);
      (n = l),
        n === null
          ? ((l = t.child), (t.child = null))
          : ((l = n.sibling), (n.sibling = null)),
        lu(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (((e = l.alternate), e !== null && Dr(e) === null)) {
          t.child = l;
          break;
        }
        (e = l.sibling), (l.sibling = n), (n = l), (l = e);
      }
      lu(t, !0, n, null, i);
      break;
    case "together":
      lu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function yn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ua |= t.lanes),
    !(n & t.childLanes))
  )
    if (e !== null) {
      if ((xs(e, t, n, !1), (n & t.childLanes) === 0)) return null;
    } else return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function pf(e, t) {
  return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && Tr(e)));
}
function Gb(e, t, n) {
  switch (t.tag) {
    case 3:
      br(t, t.stateNode.containerInfo), Ln(t, Me, e.memoizedState.cache), bs();
      break;
    case 27:
    case 5:
      Cu(t);
      break;
    case 4:
      br(t, t.stateNode.containerInfo);
      break;
    case 10:
      Ln(t, t.type, t.memoizedProps.value);
      break;
    case 13:
      var a = t.memoizedState;
      if (a !== null)
        return a.dehydrated !== null
          ? (qn(t), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dg(e, t, n)
          : (qn(t), (e = yn(e, t, n)), e !== null ? e.sibling : null);
      qn(t);
      break;
    case 19:
      var l = (e.flags & 128) !== 0;
      if (
        ((a = (n & t.childLanes) !== 0),
        a || (xs(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
        l)
      ) {
        if (a) return hg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ge(Re, Re.current),
        a)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fg(e, t, n);
    case 24:
      Ln(t, Me, e.memoizedState.cache);
  }
  return yn(e, t, n);
}
function mg(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps) Ue = !0;
    else {
      if (!pf(e, n) && !(t.flags & 128)) return (Ue = !1), Gb(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), I && t.flags & 1048576 && gp(t, jr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      e: {
        e = t.pendingProps;
        var a = t.elementType,
          l = a._init;
        if (((a = l(a._payload)), (t.type = a), typeof a == "function"))
          Pc(a)
            ? ((e = La(a, e)), (t.tag = 1), (t = Wd(null, t, a, e, n)))
            : ((t.tag = 0), (t = Wu(null, t, a, e, n)));
        else {
          if (a != null) {
            if (((l = a.$$typeof), l === Uc)) {
              (t.tag = 11), (t = Fd(null, t, a, e, n));
              break e;
            } else if (l === Bc) {
              (t.tag = 14), (t = Pd(null, t, a, e, n));
              break e;
            }
          }
          throw ((t = ju(a) || a), Error(j(306, t, "")));
        }
      }
      return t;
    case 0:
      return Wu(e, t, t.type, t.pendingProps, n);
    case 1:
      return (a = t.type), (l = La(a, t.pendingProps)), Wd(e, t, a, l, n);
    case 3:
      e: {
        if ((br(t, t.stateNode.containerInfo), e === null)) throw Error(j(387));
        a = t.pendingProps;
        var i = t.memoizedState;
        (l = i.element), Vu(e, t), Bi(t, a, null, n);
        var s = t.memoizedState;
        if (
          ((a = s.cache),
          Ln(t, Me, a),
          a !== i.cache && Gu(t, [Me], n, !0),
          Ui(),
          (a = s.element),
          i.isDehydrated)
        )
          if (
            ((i = { element: a, isDehydrated: !1, cache: s.cache }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            t = Id(e, t, a, n);
            break e;
          } else if (a !== l) {
            (l = St(Error(j(424)), t)), Fi(l), (t = Id(e, t, a, n));
            break e;
          } else {
            switch (((e = t.stateNode.containerInfo), e.nodeType)) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
            }
            for (
              Se = _t(e.firstChild),
                Ke = t,
                I = !0,
                Ra = null,
                Qt = !0,
                n = ng(t, null, a, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          }
        else {
          if ((bs(), a === l)) {
            t = yn(e, t, n);
            break e;
          }
          He(e, t, a, n);
        }
        t = t.child;
      }
      return t;
    case 26:
      return (
        cr(e, t),
        e === null
          ? (n = vh(t.type, null, t.pendingProps, null))
            ? (t.memoizedState = n)
            : I ||
              ((n = t.type),
              (e = t.pendingProps),
              (a = kr(Wn.current).createElement(n)),
              (a[Qe] = t),
              (a[tt] = e),
              Ye(a, n, e),
              _e(a),
              (t.stateNode = a))
          : (t.memoizedState = vh(
              t.type,
              e.memoizedProps,
              t.pendingProps,
              e.memoizedState
            )),
        null
      );
    case 27:
      return (
        Cu(t),
        e === null &&
          I &&
          ((a = t.stateNode = e0(t.type, t.pendingProps, Wn.current)),
          (Ke = t),
          (Qt = !0),
          (l = Se),
          ha(t.type) ? ((hc = l), (Se = _t(a.firstChild))) : (Se = l)),
        He(e, t, t.pendingProps.children, n),
        cr(e, t),
        e === null && (t.flags |= 4194304),
        t.child
      );
    case 5:
      return (
        e === null &&
          I &&
          ((l = a = Se) &&
            ((a = px(a, t.type, t.pendingProps, Qt)),
            a !== null
              ? ((t.stateNode = a),
                (Ke = t),
                (Se = _t(a.firstChild)),
                (Qt = !1),
                (l = !0))
              : (l = !1)),
          l || Ua(t)),
        Cu(t),
        (l = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        cc(l, i) ? (a = null) : s !== null && cc(l, s) && (t.flags |= 32),
        t.memoizedState !== null &&
          ((l = af(e, t, zb, null, null, n)), (es._currentValue = l)),
        cr(e, t),
        He(e, t, a, n),
        t.child
      );
    case 6:
      return (
        e === null &&
          I &&
          ((e = n = Se) &&
            ((n = gx(n, t.pendingProps, Qt)),
            n !== null
              ? ((t.stateNode = n), (Ke = t), (Se = null), (e = !0))
              : (e = !1)),
          e || Ua(t)),
        null
      );
    case 13:
      return dg(e, t, n);
    case 4:
      return (
        br(t, t.stateNode.containerInfo),
        (a = t.pendingProps),
        e === null ? (t.child = Kl(t, null, a, n)) : He(e, t, a, n),
        t.child
      );
    case 11:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      return (
        (a = t.pendingProps),
        Ln(t, t.type, a.value),
        He(e, t, a.children, n),
        t.child
      );
    case 9:
      return (
        (l = t.type._context),
        (a = t.pendingProps.children),
        Ba(t),
        (l = Ve(l)),
        (a = a(l)),
        (t.flags |= 1),
        He(e, t, a, n),
        t.child
      );
    case 14:
      return Pd(e, t, t.type, t.pendingProps, n);
    case 15:
      return cg(e, t, t.type, t.pendingProps, n);
    case 19:
      return hg(e, t, n);
    case 31:
      return (
        (a = t.pendingProps),
        (n = t.mode),
        (a = { mode: a.mode, children: a.children }),
        e === null
          ? ((n = Ur(a, n)),
            (n.ref = t.ref),
            (t.child = n),
            (n.return = t),
            (t = n))
          : ((n = mn(e.child, a)),
            (n.ref = t.ref),
            (t.child = n),
            (n.return = t),
            (t = n)),
        t
      );
    case 22:
      return fg(e, t, n);
    case 24:
      return (
        Ba(t),
        (a = Ve(Me)),
        e === null
          ? ((l = Ic()),
            l === null &&
              ((l = oe),
              (i = Wc()),
              (l.pooledCache = i),
              i.refCount++,
              i !== null && (l.pooledCacheLanes |= n),
              (l = i)),
            (t.memoizedState = { parent: a, cache: l }),
            ef(t),
            Ln(t, Me, l))
          : (e.lanes & n && (Vu(e, t), Bi(t, null, null, n), Ui()),
            (l = e.memoizedState),
            (i = t.memoizedState),
            l.parent !== a
              ? ((l = { parent: a, cache: a }),
                (t.memoizedState = l),
                t.lanes === 0 &&
                  (t.memoizedState = t.updateQueue.baseState = l),
                Ln(t, Me, a))
              : ((a = i.cache),
                Ln(t, Me, a),
                a !== l.cache && Gu(t, [Me], n, !0))),
        He(e, t, t.pendingProps.children, n),
        t.child
      );
    case 29:
      throw t.pendingProps;
  }
  throw Error(j(156, t.tag));
}
function tn(e) {
  e.flags |= 4;
}
function th(e, t) {
  if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
  else if (((e.flags |= 16777216), !a0(t))) {
    if (
      ((t = Et.current),
      t !== null &&
        ((P & 4194048) === P
          ? Ft !== null
          : ((P & 62914560) !== P && !(P & 536870912)) || t !== Ft))
    )
      throw ((zi = Qu), bp);
    e.flags |= 8192;
  }
}
function Ks(e, t) {
  t !== null && (e.flags |= 4),
    e.flags & 16384 &&
      ((t = e.tag !== 22 ? Ym() : 536870912), (e.lanes |= t), (Fl |= t));
}
function yi(e, t) {
  if (!I)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var a = null; n !== null; )
          n.alternate !== null && (a = n), (n = n.sibling);
        a === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (a.sibling = null);
    }
}
function be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    a = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (a |= l.subtreeFlags & 65011712),
        (a |= l.flags & 65011712),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (a |= l.subtreeFlags),
        (a |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= a), (e.childLanes = n), t;
}
function kb(e, t, n) {
  var a = t.pendingProps;
  switch (($c(t), t.tag)) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return be(t), null;
    case 1:
      return be(t), null;
    case 3:
      return (
        (n = t.stateNode),
        (a = null),
        e !== null && (a = e.memoizedState.cache),
        t.memoizedState.cache !== a && (t.flags |= 2048),
        pn(Me),
        Gl(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (gi(t)
            ? tn(t)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Rd())),
        be(t),
        null
      );
    case 26:
      return (
        (n = t.memoizedState),
        e === null
          ? (tn(t),
            n !== null ? (be(t), th(t, n)) : (be(t), (t.flags &= -16777217)))
          : n
          ? n !== e.memoizedState
            ? (tn(t), be(t), th(t, n))
            : (be(t), (t.flags &= -16777217))
          : (e.memoizedProps !== a && tn(t), be(t), (t.flags &= -16777217)),
        null
      );
    case 27:
      xr(t), (n = Wn.current);
      var l = t.type;
      if (e !== null && t.stateNode != null) e.memoizedProps !== a && tn(t);
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(j(166));
          return be(t), null;
        }
        (e = Zt.current),
          gi(t) ? Od(t) : ((e = e0(l, a, n)), (t.stateNode = e), tn(t));
      }
      return be(t), null;
    case 5:
      if ((xr(t), (n = t.type), e !== null && t.stateNode != null))
        e.memoizedProps !== a && tn(t);
      else {
        if (!a) {
          if (t.stateNode === null) throw Error(j(166));
          return be(t), null;
        }
        if (((e = Zt.current), gi(t))) Od(t);
        else {
          switch (((l = kr(Wn.current)), e)) {
            case 1:
              e = l.createElementNS("http://www.w3.org/2000/svg", n);
              break;
            case 2:
              e = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
              break;
            default:
              switch (n) {
                case "svg":
                  e = l.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case "math":
                  e = l.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    n
                  );
                  break;
                case "script":
                  (e = l.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild));
                  break;
                case "select":
                  (e =
                    typeof a.is == "string"
                      ? l.createElement("select", { is: a.is })
                      : l.createElement("select")),
                    a.multiple
                      ? (e.multiple = !0)
                      : a.size && (e.size = a.size);
                  break;
                default:
                  e =
                    typeof a.is == "string"
                      ? l.createElement(n, { is: a.is })
                      : l.createElement(n);
              }
          }
          (e[Qe] = t), (e[tt] = a);
          e: for (l = t.child; l !== null; ) {
            if (l.tag === 5 || l.tag === 6) e.appendChild(l.stateNode);
            else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break e;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break e;
              l = l.return;
            }
            (l.sibling.return = l.return), (l = l.sibling);
          }
          t.stateNode = e;
          e: switch ((Ye(e, n, a), n)) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              e = !!a.autoFocus;
              break e;
            case "img":
              e = !0;
              break e;
            default:
              e = !1;
          }
          e && tn(t);
        }
      }
      return be(t), (t.flags &= -16777217), null;
    case 6:
      if (e && t.stateNode != null) e.memoizedProps !== a && tn(t);
      else {
        if (typeof a != "string" && t.stateNode === null) throw Error(j(166));
        if (((e = Wn.current), gi(t))) {
          if (
            ((e = t.stateNode),
            (n = t.memoizedProps),
            (a = null),
            (l = Ke),
            l !== null)
          )
            switch (l.tag) {
              case 27:
              case 5:
                a = l.memoizedProps;
            }
          (e[Qe] = t),
            (e = !!(
              e.nodeValue === n ||
              (a !== null && a.suppressHydrationWarning === !0) ||
              $g(e.nodeValue, n)
            )),
            e || Ua(t);
        } else (e = kr(e).createTextNode(a)), (e[Qe] = t), (t.stateNode = e);
      }
      return be(t), null;
    case 13:
      if (
        ((a = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (((l = gi(t)), a !== null && a.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(j(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(j(317));
            l[Qe] = t;
          } else
            bs(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          be(t), (l = !1);
        } else
          (l = Rd()),
            e !== null &&
              e.memoizedState !== null &&
              (e.memoizedState.hydrationErrors = l),
            (l = !0);
        if (!l) return t.flags & 256 ? (hn(t), t) : (hn(t), null);
      }
      if ((hn(t), t.flags & 128)) return (t.lanes = n), t;
      if (((n = a !== null), (e = e !== null && e.memoizedState !== null), n)) {
        (a = t.child),
          (l = null),
          a.alternate !== null &&
            a.alternate.memoizedState !== null &&
            a.alternate.memoizedState.cachePool !== null &&
            (l = a.alternate.memoizedState.cachePool.pool);
        var i = null;
        a.memoizedState !== null &&
          a.memoizedState.cachePool !== null &&
          (i = a.memoizedState.cachePool.pool),
          i !== l && (a.flags |= 2048);
      }
      return (
        n !== e && n && (t.child.flags |= 8192),
        Ks(t, t.updateQueue),
        be(t),
        null
      );
    case 4:
      return Gl(), e === null && Af(t.stateNode.containerInfo), be(t), null;
    case 10:
      return pn(t.type), be(t), null;
    case 19:
      if ((Be(Re), (l = t.memoizedState), l === null)) return be(t), null;
      if (((a = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (a) yi(l, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Dr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    yi(l, !1),
                    e = i.updateQueue,
                    t.updateQueue = e,
                    Ks(t, e),
                    t.subtreeFlags = 0,
                    e = n,
                    n = t.child;
                  n !== null;

                )
                  pp(n, e), (n = n.sibling);
                return ge(Re, (Re.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Kt() > Hr &&
            ((t.flags |= 128), (a = !0), yi(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!a)
          if (((e = Dr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (e = e.updateQueue),
              (t.updateQueue = e),
              Ks(t, e),
              yi(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !I)
            )
              return be(t), null;
          } else
            2 * Kt() - l.renderingStartTime > Hr &&
              n !== 536870912 &&
              ((t.flags |= 128), (a = !0), yi(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((e = l.last),
            e !== null ? (e.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Kt()),
          (t.sibling = null),
          (e = Re.current),
          ge(Re, a ? (e & 1) | 2 : e & 1),
          t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        hn(t),
        tf(),
        (a = t.memoizedState !== null),
        e !== null
          ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
          : a && (t.flags |= 8192),
        a
          ? n & 536870912 &&
            !(t.flags & 128) &&
            (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : be(t),
        (n = t.updateQueue),
        n !== null && Ks(t, n.retryQueue),
        (n = null),
        e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (n = e.memoizedState.cachePool.pool),
        (a = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (a = t.memoizedState.cachePool.pool),
        a !== n && (t.flags |= 2048),
        e !== null && Be(Da),
        null
      );
    case 24:
      return (
        (n = null),
        e !== null && (n = e.memoizedState.cache),
        t.memoizedState.cache !== n && (t.flags |= 2048),
        pn(Me),
        be(t),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(j(156, t.tag));
}
function Qb(e, t) {
  switch (($c(t), t.tag)) {
    case 1:
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pn(Me),
        Gl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 26:
    case 27:
    case 5:
      return xr(t), null;
    case 13:
      if ((hn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        bs();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Be(Re), null;
    case 4:
      return Gl(), null;
    case 10:
      return pn(t.type), null;
    case 22:
    case 23:
      return (
        hn(t),
        tf(),
        e !== null && Be(Da),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 24:
      return pn(Me), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function pg(e, t) {
  switch (($c(t), t.tag)) {
    case 3:
      pn(Me), Gl();
      break;
    case 26:
    case 27:
    case 5:
      xr(t);
      break;
    case 4:
      Gl();
      break;
    case 13:
      hn(t);
      break;
    case 19:
      Be(Re);
      break;
    case 10:
      pn(t.type);
      break;
    case 22:
    case 23:
      hn(t), tf(), e !== null && Be(Da);
      break;
    case 24:
      pn(Me);
  }
}
function Ns(e, t) {
  try {
    var n = t.updateQueue,
      a = n !== null ? n.lastEffect : null;
    if (a !== null) {
      var l = a.next;
      n = l;
      do {
        if ((n.tag & e) === e) {
          a = void 0;
          var i = n.create,
            s = n.inst;
          (a = i()), (s.destroy = a);
        }
        n = n.next;
      } while (n !== l);
    }
  } catch (r) {
    re(t, t.return, r);
  }
}
function oa(e, t, n) {
  try {
    var a = t.updateQueue,
      l = a !== null ? a.lastEffect : null;
    if (l !== null) {
      var i = l.next;
      a = i;
      do {
        if ((a.tag & e) === e) {
          var s = a.inst,
            r = s.destroy;
          if (r !== void 0) {
            (s.destroy = void 0), (l = t);
            var o = n,
              c = r;
            try {
              c();
            } catch (d) {
              re(l, o, d);
            }
          }
        }
        a = a.next;
      } while (a !== i);
    }
  } catch (d) {
    re(t, t.return, d);
  }
}
function gg(e) {
  var t = e.updateQueue;
  if (t !== null) {
    var n = e.stateNode;
    try {
      Sp(t, n);
    } catch (a) {
      re(e, e.return, a);
    }
  }
}
function vg(e, t, n) {
  (n.props = La(e.type, e.memoizedProps)), (n.state = e.memoizedState);
  try {
    n.componentWillUnmount();
  } catch (a) {
    re(e, t, a);
  }
}
function Li(e, t) {
  try {
    var n = e.ref;
    if (n !== null) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          var a = e.stateNode;
          break;
        case 30:
          a = e.stateNode;
          break;
        default:
          a = e.stateNode;
      }
      typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
    }
  } catch (l) {
    re(e, t, l);
  }
}
function Vt(e, t) {
  var n = e.ref,
    a = e.refCleanup;
  if (n !== null)
    if (typeof a == "function")
      try {
        a();
      } catch (l) {
        re(e, t, l);
      } finally {
        (e.refCleanup = null),
          (e = e.alternate),
          e != null && (e.refCleanup = null);
      }
    else if (typeof n == "function")
      try {
        n(null);
      } catch (l) {
        re(e, t, l);
      }
    else n.current = null;
}
function yg(e) {
  var t = e.type,
    n = e.memoizedProps,
    a = e.stateNode;
  try {
    e: switch (t) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        n.autoFocus && a.focus();
        break e;
      case "img":
        n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
    }
  } catch (l) {
    re(e, e.return, l);
  }
}
function iu(e, t, n) {
  try {
    var a = e.stateNode;
    cx(a, e.type, n, t), (a[tt] = t);
  } catch (l) {
    re(e, e.return, l);
  }
}
function bg(e) {
  return (
    e.tag === 5 ||
    e.tag === 3 ||
    e.tag === 26 ||
    (e.tag === 27 && ha(e.type)) ||
    e.tag === 4
  );
}
function su(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (
        (e.tag === 27 && ha(e.type)) ||
        e.flags & 2 ||
        e.child === null ||
        e.tag === 4
      )
        continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ec(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode),
      t
        ? (n.nodeType === 9
            ? n.body
            : n.nodeName === "HTML"
            ? n.ownerDocument.body
            : n
          ).insertBefore(e, t)
        : ((t =
            n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n),
          t.appendChild(e),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = yo));
  else if (
    a !== 4 &&
    (a === 27 && ha(e.type) && ((n = e.stateNode), (t = null)),
    (e = e.child),
    e !== null)
  )
    for (ec(e, t, n), e = e.sibling; e !== null; ) ec(e, t, n), (e = e.sibling);
}
function Br(e, t, n) {
  var a = e.tag;
  if (a === 5 || a === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (
    a !== 4 &&
    (a === 27 && ha(e.type) && (n = e.stateNode), (e = e.child), e !== null)
  )
    for (Br(e, t, n), e = e.sibling; e !== null; ) Br(e, t, n), (e = e.sibling);
}
function xg(e) {
  var t = e.stateNode,
    n = e.memoizedProps;
  try {
    for (var a = e.type, l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    Ye(t, a, n), (t[Qe] = e), (t[tt] = n);
  } catch (i) {
    re(e, e.return, i);
  }
}
var on = !1,
  je = !1,
  ru = !1,
  nh = typeof WeakSet == "function" ? WeakSet : Set,
  ze = null;
function Vb(e, t) {
  if (((e = e.containerInfo), (oc = Zr), (e = rp(e)), Zc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var a = n.getSelection && n.getSelection();
        if (a && a.rangeCount !== 0) {
          n = a.anchorNode;
          var l = a.anchorOffset,
            i = a.focusNode;
          a = a.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            r = -1,
            o = -1,
            c = 0,
            d = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var f;
              m !== n || (l !== 0 && m.nodeType !== 3) || (r = s + l),
                m !== i || (a !== 0 && m.nodeType !== 3) || (o = s + a),
                m.nodeType === 3 && (s += m.nodeValue.length),
                (f = m.firstChild) !== null;

            )
              (h = m), (m = f);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++c === l && (r = s),
                h === i && ++d === a && (o = s),
                (f = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = f;
          }
          n = r === -1 || o === -1 ? null : { start: r, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    uc = { focusedElem: e, selectionRange: n }, Zr = !1, ze = t;
    ze !== null;

  )
    if (((t = ze), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
      (e.return = t), (ze = e);
    else
      for (; ze !== null; ) {
        switch (((t = ze), (i = t.alternate), (e = t.flags), t.tag)) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (e & 1024 && i !== null) {
              (e = void 0),
                (n = t),
                (l = i.memoizedProps),
                (i = i.memoizedState),
                (a = n.stateNode);
              try {
                var S = La(n.type, l, n.elementType === n.type);
                (e = a.getSnapshotBeforeUpdate(S, i)),
                  (a.__reactInternalSnapshotBeforeUpdate = e);
              } catch (y) {
                re(n, n.return, y);
              }
            }
            break;
          case 3:
            if (e & 1024) {
              if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9))
                fc(e);
              else if (n === 1)
                switch (e.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    fc(e);
                    break;
                  default:
                    e.textContent = "";
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (e & 1024) throw Error(j(163));
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ze = e);
          break;
        }
        ze = t.return;
      }
}
function wg(e, t, n) {
  var a = n.flags;
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
      Rn(e, n), a & 4 && Ns(5, n);
      break;
    case 1:
      if ((Rn(e, n), a & 4))
        if (((e = n.stateNode), t === null))
          try {
            e.componentDidMount();
          } catch (s) {
            re(n, n.return, s);
          }
        else {
          var l = La(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (s) {
            re(n, n.return, s);
          }
        }
      a & 64 && gg(n), a & 512 && Li(n, n.return);
      break;
    case 3:
      if ((Rn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
        if (((t = null), n.child !== null))
          switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode;
              break;
            case 1:
              t = n.child.stateNode;
          }
        try {
          Sp(e, t);
        } catch (s) {
          re(n, n.return, s);
        }
      }
      break;
    case 27:
      t === null && a & 4 && xg(n);
    case 26:
    case 5:
      Rn(e, n), t === null && a & 4 && yg(n), a & 512 && Li(n, n.return);
      break;
    case 12:
      Rn(e, n);
      break;
    case 13:
      Rn(e, n),
        a & 4 && Eg(e, n),
        a & 64 &&
          ((e = n.memoizedState),
          e !== null &&
            ((e = e.dehydrated),
            e !== null && ((n = Ib.bind(null, n)), vx(e, n))));
      break;
    case 22:
      if (((a = n.memoizedState !== null || on), !a)) {
        (t = (t !== null && t.memoizedState !== null) || je), (l = on);
        var i = je;
        (on = a),
          (je = t) && !i ? _n(e, n, (n.subtreeFlags & 8772) !== 0) : Rn(e, n),
          (on = l),
          (je = i);
      }
      break;
    case 30:
      break;
    default:
      Rn(e, n);
  }
}
function Sg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && Yc(t)),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
var me = null,
  $e = !1;
function nn(e, t, n) {
  for (n = n.child; n !== null; ) Ag(e, t, n), (n = n.sibling);
}
function Ag(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(ms, n);
    } catch {}
  switch (n.tag) {
    case 26:
      je || Vt(n, t),
        nn(e, t, n),
        n.memoizedState
          ? n.memoizedState.count--
          : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
      break;
    case 27:
      je || Vt(n, t);
      var a = me,
        l = $e;
      ha(n.type) && ((me = n.stateNode), ($e = !1)),
        nn(e, t, n),
        ki(n.stateNode),
        (me = a),
        ($e = l);
      break;
    case 5:
      je || Vt(n, t);
    case 6:
      if (
        ((a = me),
        (l = $e),
        (me = null),
        nn(e, t, n),
        (me = a),
        ($e = l),
        me !== null)
      )
        if ($e)
          try {
            (me.nodeType === 9
              ? me.body
              : me.nodeName === "HTML"
              ? me.ownerDocument.body
              : me
            ).removeChild(n.stateNode);
          } catch (i) {
            re(n, t, i);
          }
        else
          try {
            me.removeChild(n.stateNode);
          } catch (i) {
            re(n, t, i);
          }
      break;
    case 18:
      me !== null &&
        ($e
          ? ((e = me),
            mh(
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e,
              n.stateNode
            ),
            as(e))
          : mh(me, n.stateNode));
      break;
    case 4:
      (a = me),
        (l = $e),
        (me = n.stateNode.containerInfo),
        ($e = !0),
        nn(e, t, n),
        (me = a),
        ($e = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      je || oa(2, n, t), je || oa(4, n, t), nn(e, t, n);
      break;
    case 1:
      je ||
        (Vt(n, t),
        (a = n.stateNode),
        typeof a.componentWillUnmount == "function" && vg(n, t, a)),
        nn(e, t, n);
      break;
    case 21:
      nn(e, t, n);
      break;
    case 22:
      (je = (a = je) || n.memoizedState !== null), nn(e, t, n), (je = a);
      break;
    default:
      nn(e, t, n);
  }
}
function Eg(e, t) {
  if (
    t.memoizedState === null &&
    ((e = t.alternate),
    e !== null &&
      ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
  )
    try {
      as(e);
    } catch (n) {
      re(t, t.return, n);
    }
}
function Xb(e) {
  switch (e.tag) {
    case 13:
    case 19:
      var t = e.stateNode;
      return t === null && (t = e.stateNode = new nh()), t;
    case 22:
      return (
        (e = e.stateNode),
        (t = e._retryCache),
        t === null && (t = e._retryCache = new nh()),
        t
      );
    default:
      throw Error(j(435, e.tag));
  }
}
function ou(e, t) {
  var n = Xb(e);
  t.forEach(function (a) {
    var l = ex.bind(null, e, a);
    n.has(a) || (n.add(a), a.then(l, l));
  });
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var a = 0; a < n.length; a++) {
      var l = n[a],
        i = e,
        s = t,
        r = s;
      e: for (; r !== null; ) {
        switch (r.tag) {
          case 27:
            if (ha(r.type)) {
              (me = r.stateNode), ($e = !1);
              break e;
            }
            break;
          case 5:
            (me = r.stateNode), ($e = !1);
            break e;
          case 3:
          case 4:
            (me = r.stateNode.containerInfo), ($e = !0);
            break e;
        }
        r = r.return;
      }
      if (me === null) throw Error(j(160));
      Ag(i, s, l),
        (me = null),
        ($e = !1),
        (i = l.alternate),
        i !== null && (i.return = null),
        (l.return = null);
    }
  if (t.subtreeFlags & 13878)
    for (t = t.child; t !== null; ) Ng(t, e), (t = t.sibling);
}
var zt = null;
function Ng(e, t) {
  var n = e.alternate,
    a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      at(t, e),
        lt(e),
        a & 4 && (oa(3, e, e.return), Ns(3, e), oa(5, e, e.return));
      break;
    case 1:
      at(t, e),
        lt(e),
        a & 512 && (je || n === null || Vt(n, n.return)),
        a & 64 &&
          on &&
          ((e = e.updateQueue),
          e !== null &&
            ((a = e.callbacks),
            a !== null &&
              ((n = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
      break;
    case 26:
      var l = zt;
      if (
        (at(t, e),
        lt(e),
        a & 512 && (je || n === null || Vt(n, n.return)),
        a & 4)
      ) {
        var i = n !== null ? n.memoizedState : null;
        if (((a = e.memoizedState), n === null))
          if (a === null)
            if (e.stateNode === null) {
              e: {
                (a = e.type), (n = e.memoizedProps), (l = l.ownerDocument || l);
                t: switch (a) {
                  case "title":
                    (i = l.getElementsByTagName("title")[0]),
                      (!i ||
                        i[vs] ||
                        i[Qe] ||
                        i.namespaceURI === "http://www.w3.org/2000/svg" ||
                        i.hasAttribute("itemprop")) &&
                        ((i = l.createElement(a)),
                        l.head.insertBefore(
                          i,
                          l.querySelector("head > title")
                        )),
                      Ye(i, a, n),
                      (i[Qe] = e),
                      _e(i),
                      (a = i);
                    break e;
                  case "link":
                    var s = bh("link", "href", l).get(a + (n.href || ""));
                    if (s) {
                      for (var r = 0; r < s.length; r++)
                        if (
                          ((i = s[r]),
                          i.getAttribute("href") ===
                            (n.href == null || n.href === "" ? null : n.href) &&
                            i.getAttribute("rel") ===
                              (n.rel == null ? null : n.rel) &&
                            i.getAttribute("title") ===
                              (n.title == null ? null : n.title) &&
                            i.getAttribute("crossorigin") ===
                              (n.crossOrigin == null ? null : n.crossOrigin))
                        ) {
                          s.splice(r, 1);
                          break t;
                        }
                    }
                    (i = l.createElement(a)),
                      Ye(i, a, n),
                      l.head.appendChild(i);
                    break;
                  case "meta":
                    if (
                      (s = bh("meta", "content", l).get(a + (n.content || "")))
                    ) {
                      for (r = 0; r < s.length; r++)
                        if (
                          ((i = s[r]),
                          i.getAttribute("content") ===
                            (n.content == null ? null : "" + n.content) &&
                            i.getAttribute("name") ===
                              (n.name == null ? null : n.name) &&
                            i.getAttribute("property") ===
                              (n.property == null ? null : n.property) &&
                            i.getAttribute("http-equiv") ===
                              (n.httpEquiv == null ? null : n.httpEquiv) &&
                            i.getAttribute("charset") ===
                              (n.charSet == null ? null : n.charSet))
                        ) {
                          s.splice(r, 1);
                          break t;
                        }
                    }
                    (i = l.createElement(a)),
                      Ye(i, a, n),
                      l.head.appendChild(i);
                    break;
                  default:
                    throw Error(j(468, a));
                }
                (i[Qe] = e), _e(i), (a = i);
              }
              e.stateNode = a;
            } else xh(l, e.type, e.stateNode);
          else e.stateNode = yh(l, a, e.memoizedProps);
        else
          i !== a
            ? (i === null
                ? n.stateNode !== null &&
                  ((n = n.stateNode), n.parentNode.removeChild(n))
                : i.count--,
              a === null
                ? xh(l, e.type, e.stateNode)
                : yh(l, a, e.memoizedProps))
            : a === null &&
              e.stateNode !== null &&
              iu(e, e.memoizedProps, n.memoizedProps);
      }
      break;
    case 27:
      at(t, e),
        lt(e),
        a & 512 && (je || n === null || Vt(n, n.return)),
        n !== null && a & 4 && iu(e, e.memoizedProps, n.memoizedProps);
      break;
    case 5:
      if (
        (at(t, e),
        lt(e),
        a & 512 && (je || n === null || Vt(n, n.return)),
        e.flags & 32)
      ) {
        l = e.stateNode;
        try {
          Ql(l, "");
        } catch (f) {
          re(e, e.return, f);
        }
      }
      a & 4 &&
        e.stateNode != null &&
        ((l = e.memoizedProps), iu(e, l, n !== null ? n.memoizedProps : l)),
        a & 1024 && (ru = !0);
      break;
    case 6:
      if ((at(t, e), lt(e), a & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (a = e.memoizedProps), (n = e.stateNode);
        try {
          n.nodeValue = a;
        } catch (f) {
          re(e, e.return, f);
        }
      }
      break;
    case 3:
      if (
        ((hr = null),
        (l = zt),
        (zt = Qr(t.containerInfo)),
        at(t, e),
        (zt = l),
        lt(e),
        a & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          as(t.containerInfo);
        } catch (f) {
          re(e, e.return, f);
        }
      ru && ((ru = !1), jg(e));
      break;
    case 4:
      (a = zt), (zt = Qr(e.stateNode.containerInfo)), at(t, e), lt(e), (zt = a);
      break;
    case 12:
      at(t, e), lt(e);
      break;
    case 13:
      at(t, e),
        lt(e),
        e.child.flags & 8192 &&
          (e.memoizedState !== null) !=
            (n !== null && n.memoizedState !== null) &&
          (xf = Kt()),
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((e.updateQueue = null), ou(e, a)));
      break;
    case 22:
      l = e.memoizedState !== null;
      var o = n !== null && n.memoizedState !== null,
        c = on,
        d = je;
      if (
        ((on = c || l),
        (je = d || o),
        at(t, e),
        (je = d),
        (on = c),
        lt(e),
        a & 8192)
      )
        e: for (
          t = e.stateNode,
            t._visibility = l ? t._visibility & -2 : t._visibility | 1,
            l && (n === null || o || on || je || wa(e)),
            n = null,
            t = e;
          ;

        ) {
          if (t.tag === 5 || t.tag === 26) {
            if (n === null) {
              o = n = t;
              try {
                if (((i = o.stateNode), l))
                  (s = i.style),
                    typeof s.setProperty == "function"
                      ? s.setProperty("display", "none", "important")
                      : (s.display = "none");
                else {
                  r = o.stateNode;
                  var m = o.memoizedProps.style,
                    h =
                      m != null && m.hasOwnProperty("display")
                        ? m.display
                        : null;
                  r.style.display =
                    h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                }
              } catch (f) {
                re(o, o.return, f);
              }
            }
          } else if (t.tag === 6) {
            if (n === null) {
              o = t;
              try {
                o.stateNode.nodeValue = l ? "" : o.memoizedProps;
              } catch (f) {
                re(o, o.return, f);
              }
            }
          } else if (
            ((t.tag !== 22 && t.tag !== 23) ||
              t.memoizedState === null ||
              t === e) &&
            t.child !== null
          ) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            n === t && (n = null), (t = t.return);
          }
          n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
        }
      a & 4 &&
        ((a = e.updateQueue),
        a !== null &&
          ((n = a.retryQueue),
          n !== null && ((a.retryQueue = null), ou(e, n))));
      break;
    case 19:
      at(t, e),
        lt(e),
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((e.updateQueue = null), ou(e, a)));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      at(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      for (var n, a = e.return; a !== null; ) {
        if (bg(a)) {
          n = a;
          break;
        }
        a = a.return;
      }
      if (n == null) throw Error(j(160));
      switch (n.tag) {
        case 27:
          var l = n.stateNode,
            i = su(e);
          Br(e, i, l);
          break;
        case 5:
          var s = n.stateNode;
          n.flags & 32 && (Ql(s, ""), (n.flags &= -33));
          var r = su(e);
          Br(e, r, s);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            c = su(e);
          ec(e, c, o);
          break;
        default:
          throw Error(j(161));
      }
    } catch (d) {
      re(e, e.return, d);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jg(e) {
  if (e.subtreeFlags & 1024)
    for (e = e.child; e !== null; ) {
      var t = e;
      jg(t),
        t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
        (e = e.sibling);
    }
}
function Rn(e, t) {
  if (t.subtreeFlags & 8772)
    for (t = t.child; t !== null; ) wg(e, t.alternate, t), (t = t.sibling);
}
function wa(e) {
  for (e = e.child; e !== null; ) {
    var t = e;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        oa(4, t, t.return), wa(t);
        break;
      case 1:
        Vt(t, t.return);
        var n = t.stateNode;
        typeof n.componentWillUnmount == "function" && vg(t, t.return, n),
          wa(t);
        break;
      case 27:
        ki(t.stateNode);
      case 26:
      case 5:
        Vt(t, t.return), wa(t);
        break;
      case 22:
        t.memoizedState === null && wa(t);
        break;
      case 30:
        wa(t);
        break;
      default:
        wa(t);
    }
    e = e.sibling;
  }
}
function _n(e, t, n) {
  for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
    var a = t.alternate,
      l = e,
      i = t,
      s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        _n(l, i, n), Ns(4, i);
        break;
      case 1:
        if (
          (_n(l, i, n),
          (a = i),
          (l = a.stateNode),
          typeof l.componentDidMount == "function")
        )
          try {
            l.componentDidMount();
          } catch (c) {
            re(a, a.return, c);
          }
        if (((a = i), (l = a.updateQueue), l !== null)) {
          var r = a.stateNode;
          try {
            var o = l.shared.hiddenCallbacks;
            if (o !== null)
              for (l.shared.hiddenCallbacks = null, l = 0; l < o.length; l++)
                wp(o[l], r);
          } catch (c) {
            re(a, a.return, c);
          }
        }
        n && s & 64 && gg(i), Li(i, i.return);
        break;
      case 27:
        xg(i);
      case 26:
      case 5:
        _n(l, i, n), n && a === null && s & 4 && yg(i), Li(i, i.return);
        break;
      case 12:
        _n(l, i, n);
        break;
      case 13:
        _n(l, i, n), n && s & 4 && Eg(l, i);
        break;
      case 22:
        i.memoizedState === null && _n(l, i, n), Li(i, i.return);
        break;
      case 30:
        break;
      default:
        _n(l, i, n);
    }
    t = t.sibling;
  }
}
function gf(e, t) {
  var n = null;
  e !== null &&
    e.memoizedState !== null &&
    e.memoizedState.cachePool !== null &&
    (n = e.memoizedState.cachePool.pool),
    (e = null),
    t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
    e !== n && (e != null && e.refCount++, n != null && ws(n));
}
function vf(e, t) {
  (e = null),
    t.alternate !== null && (e = t.alternate.memoizedState.cache),
    (t = t.memoizedState.cache),
    t !== e && (t.refCount++, e != null && ws(e));
}
function qt(e, t, n, a) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) Tg(e, t, n, a), (t = t.sibling);
}
function Tg(e, t, n, a) {
  var l = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      qt(e, t, n, a), l & 2048 && Ns(9, t);
      break;
    case 1:
      qt(e, t, n, a);
      break;
    case 3:
      qt(e, t, n, a),
        l & 2048 &&
          ((e = null),
          t.alternate !== null && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== e && (t.refCount++, e != null && ws(e)));
      break;
    case 12:
      if (l & 2048) {
        qt(e, t, n, a), (e = t.stateNode);
        try {
          var i = t.memoizedProps,
            s = i.id,
            r = i.onPostCommit;
          typeof r == "function" &&
            r(
              s,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
        } catch (o) {
          re(t, t.return, o);
        }
      } else qt(e, t, n, a);
      break;
    case 13:
      qt(e, t, n, a);
      break;
    case 23:
      break;
    case 22:
      (i = t.stateNode),
        (s = t.alternate),
        t.memoizedState !== null
          ? i._visibility & 2
            ? qt(e, t, n, a)
            : qi(e, t)
          : i._visibility & 2
          ? qt(e, t, n, a)
          : ((i._visibility |= 2),
            ul(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
        l & 2048 && gf(s, t);
      break;
    case 24:
      qt(e, t, n, a), l & 2048 && vf(t.alternate, t);
      break;
    default:
      qt(e, t, n, a);
  }
}
function ul(e, t, n, a, l) {
  for (l = l && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
    var i = e,
      s = t,
      r = n,
      o = a,
      c = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        ul(i, s, r, o, l), Ns(8, s);
        break;
      case 23:
        break;
      case 22:
        var d = s.stateNode;
        s.memoizedState !== null
          ? d._visibility & 2
            ? ul(i, s, r, o, l)
            : qi(i, s)
          : ((d._visibility |= 2), ul(i, s, r, o, l)),
          l && c & 2048 && gf(s.alternate, s);
        break;
      case 24:
        ul(i, s, r, o, l), l && c & 2048 && vf(s.alternate, s);
        break;
      default:
        ul(i, s, r, o, l);
    }
    t = t.sibling;
  }
}
function qi(e, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) {
      var n = e,
        a = t,
        l = a.flags;
      switch (a.tag) {
        case 22:
          qi(n, a), l & 2048 && gf(a.alternate, a);
          break;
        case 24:
          qi(n, a), l & 2048 && vf(a.alternate, a);
          break;
        default:
          qi(n, a);
      }
      t = t.sibling;
    }
}
var ji = 8192;
function ll(e) {
  if (e.subtreeFlags & ji)
    for (e = e.child; e !== null; ) Cg(e), (e = e.sibling);
}
function Cg(e) {
  switch (e.tag) {
    case 26:
      ll(e),
        e.flags & ji &&
          e.memoizedState !== null &&
          Mx(zt, e.memoizedState, e.memoizedProps);
      break;
    case 5:
      ll(e);
      break;
    case 3:
    case 4:
      var t = zt;
      (zt = Qr(e.stateNode.containerInfo)), ll(e), (zt = t);
      break;
    case 22:
      e.memoizedState === null &&
        ((t = e.alternate),
        t !== null && t.memoizedState !== null
          ? ((t = ji), (ji = 16777216), ll(e), (ji = t))
          : ll(e));
      break;
    default:
      ll(e);
  }
}
function Og(e) {
  var t = e.alternate;
  if (t !== null && ((e = t.child), e !== null)) {
    t.child = null;
    do (t = e.sibling), (e.sibling = null), (e = t);
    while (e !== null);
  }
}
function bi(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (ze = a), Rg(a, e);
      }
    Og(e);
  }
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) Mg(e), (e = e.sibling);
}
function Mg(e) {
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      bi(e), e.flags & 2048 && oa(9, e, e.return);
      break;
    case 3:
      bi(e);
      break;
    case 12:
      bi(e);
      break;
    case 22:
      var t = e.stateNode;
      e.memoizedState !== null &&
      t._visibility & 2 &&
      (e.return === null || e.return.tag !== 13)
        ? ((t._visibility &= -3), fr(e))
        : bi(e);
      break;
    default:
      bi(e);
  }
}
function fr(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (ze = a), Rg(a, e);
      }
    Og(e);
  }
  for (e = e.child; e !== null; ) {
    switch (((t = e), t.tag)) {
      case 0:
      case 11:
      case 15:
        oa(8, t, t.return), fr(t);
        break;
      case 22:
        (n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), fr(t));
        break;
      default:
        fr(t);
    }
    e = e.sibling;
  }
}
function Rg(e, t) {
  for (; ze !== null; ) {
    var n = ze;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        oa(8, n, t);
        break;
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var a = n.memoizedState.cachePool.pool;
          a != null && a.refCount++;
        }
        break;
      case 24:
        ws(n.memoizedState.cache);
    }
    if (((a = n.child), a !== null)) (a.return = n), (ze = a);
    else
      e: for (n = e; ze !== null; ) {
        a = ze;
        var l = a.sibling,
          i = a.return;
        if ((Sg(a), a === n)) {
          ze = null;
          break e;
        }
        if (l !== null) {
          (l.return = i), (ze = l);
          break e;
        }
        ze = i;
      }
  }
}
var Zb = {
    getCacheForType: function (e) {
      var t = Ve(Me),
        n = t.data.get(e);
      return n === void 0 && ((n = e()), t.data.set(e, n)), n;
    },
  },
  Kb = typeof WeakMap == "function" ? WeakMap : Map,
  ae = 0,
  oe = null,
  Z = null,
  P = 0,
  ne = 0,
  st = null,
  Pn = !1,
  li = !1,
  yf = !1,
  bn = 0,
  Ae = 0,
  ua = 0,
  za = 0,
  bf = 0,
  At = 0,
  Fl = 0,
  Yi = null,
  We = null,
  tc = !1,
  xf = 0,
  Hr = 1 / 0,
  Lr = null,
  ta = null,
  qe = 0,
  na = null,
  Pl = null,
  Ml = 0,
  nc = 0,
  ac = null,
  Dg = null,
  Gi = 0,
  lc = null;
function ft() {
  if (ae & 2 && P !== 0) return P & -P;
  if (H.T !== null) {
    var e = Vl;
    return e !== 0 ? e : Sf();
  }
  return Qm();
}
function zg() {
  At === 0 && (At = !(P & 536870912) || I ? qm() : 536870912);
  var e = Et.current;
  return e !== null && (e.flags |= 32), At;
}
function dt(e, t, n) {
  ((e === oe && (ne === 2 || ne === 9)) || e.cancelPendingCommit !== null) &&
    (Jl(e, 0), Jn(e, P, At, !1)),
    gs(e, n),
    (!(ae & 2) || e !== oe) &&
      (e === oe && (!(ae & 2) && (za |= n), Ae === 4 && Jn(e, P, At, !1)),
      Wt(e));
}
function _g(e, t, n) {
  if (ae & 6) throw Error(j(327));
  var a = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || ps(e, t),
    l = a ? Jb(e, t) : uu(e, t, !0),
    i = a;
  do {
    if (l === 0) {
      li && !a && Jn(e, t, 0, !1);
      break;
    } else {
      if (((n = e.current.alternate), i && !Fb(n))) {
        (l = uu(e, t, !1)), (i = !1);
        continue;
      }
      if (l === 2) {
        if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
        else
          (s = e.pendingLanes & -536870913),
            (s = s !== 0 ? s : s & 536870912 ? 536870912 : 0);
        if (s !== 0) {
          t = s;
          e: {
            var r = e;
            l = Yi;
            var o = r.current.memoizedState.isDehydrated;
            if ((o && (Jl(r, s).flags |= 256), (s = uu(r, s, !1)), s !== 2)) {
              if (yf && !o) {
                (r.errorRecoveryDisabledLanes |= i), (za |= i), (l = 4);
                break e;
              }
              (i = We),
                (We = l),
                i !== null && (We === null ? (We = i) : We.push.apply(We, i));
            }
            l = s;
          }
          if (((i = !1), l !== 2)) continue;
        }
      }
      if (l === 1) {
        Jl(e, 0), Jn(e, t, 0, !0);
        break;
      }
      e: {
        switch (((a = e), (i = l), i)) {
          case 0:
          case 1:
            throw Error(j(345));
          case 4:
            if ((t & 4194048) !== t) break;
          case 6:
            Jn(a, t, At, !Pn);
            break e;
          case 2:
            We = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(j(329));
        }
        if ((t & 62914560) === t && ((l = xf + 300 - Kt()), 10 < l)) {
          if ((Jn(a, t, At, !Pn), lo(a, 0, !0) !== 0)) break e;
          a.timeoutHandle = Ig(
            ah.bind(null, a, n, We, Lr, tc, t, At, za, Fl, Pn, i, 2, -0, 0),
            l
          );
          break e;
        }
        ah(a, n, We, Lr, tc, t, At, za, Fl, Pn, i, 0, -0, 0);
      }
    }
    break;
  } while (!0);
  Wt(e);
}
function ah(e, t, n, a, l, i, s, r, o, c, d, m, h, f) {
  if (
    ((e.timeoutHandle = -1),
    (m = t.subtreeFlags),
    (m & 8192 || (m & 16785408) === 16785408) &&
      ((Ii = { stylesheets: null, count: 0, unsuspend: Ox }),
      Cg(t),
      (m = Rx()),
      m !== null))
  ) {
    (e.cancelPendingCommit = m(
      ih.bind(null, e, t, i, n, a, l, s, r, o, d, 1, h, f)
    )),
      Jn(e, i, s, !c);
    return;
  }
  ih(e, t, i, n, a, l, s, r, o);
}
function Fb(e) {
  for (var t = e; ; ) {
    var n = t.tag;
    if (
      (n === 0 || n === 11 || n === 15) &&
      t.flags & 16384 &&
      ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
    )
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          i = l.getSnapshot;
        l = l.value;
        try {
          if (!mt(i(), l)) return !1;
        } catch {
          return !1;
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
function Jn(e, t, n, a) {
  (t &= ~bf),
    (t &= ~za),
    (e.suspendedLanes |= t),
    (e.pingedLanes &= ~t),
    a && (e.warmLanes |= t),
    (a = e.expirationTimes);
  for (var l = t; 0 < l; ) {
    var i = 31 - ct(l),
      s = 1 << i;
    (a[i] = -1), (l &= ~s);
  }
  n !== 0 && Gm(e, n, t);
}
function po() {
  return ae & 6 ? !0 : (js(0), !1);
}
function wf() {
  if (Z !== null) {
    if (ne === 0) var e = Z.return;
    else (e = Z), (dn = Qa = null), rf(e), (Ol = null), (Ji = 0), (e = Z);
    for (; e !== null; ) pg(e.alternate, e), (e = e.return);
    Z = null;
  }
}
function Jl(e, t) {
  var n = e.timeoutHandle;
  n !== -1 && ((e.timeoutHandle = -1), dx(n)),
    (n = e.cancelPendingCommit),
    n !== null && ((e.cancelPendingCommit = null), n()),
    wf(),
    (oe = e),
    (Z = n = mn(e.current, null)),
    (P = t),
    (ne = 0),
    (st = null),
    (Pn = !1),
    (li = ps(e, t)),
    (yf = !1),
    (Fl = At = bf = za = ua = Ae = 0),
    (We = Yi = null),
    (tc = !1),
    t & 8 && (t |= t & 32);
  var a = e.entangledLanes;
  if (a !== 0)
    for (e = e.entanglements, a &= t; 0 < a; ) {
      var l = 31 - ct(a),
        i = 1 << l;
      (t |= e[l]), (a &= ~i);
    }
  return (bn = t), oo(), n;
}
function Ug(e, t) {
  (V = null),
    (H.H = Rr),
    t === Ss || t === co
      ? ((t = Ud()), (ne = 3))
      : t === bp
      ? ((t = Ud()), (ne = 4))
      : (ne =
          t === ug
            ? 8
            : t !== null && typeof t == "object" && typeof t.then == "function"
            ? 6
            : 1),
    (st = t),
    Z === null && ((Ae = 1), _r(e, St(t, e.current)));
}
function Bg() {
  var e = H.H;
  return (H.H = Rr), e === null ? Rr : e;
}
function Hg() {
  var e = H.A;
  return (H.A = Zb), e;
}
function ic() {
  (Ae = 4),
    Pn || ((P & 4194048) !== P && Et.current !== null) || (li = !0),
    (!(ua & 134217727) && !(za & 134217727)) ||
      oe === null ||
      Jn(oe, P, At, !1);
}
function uu(e, t, n) {
  var a = ae;
  ae |= 2;
  var l = Bg(),
    i = Hg();
  (oe !== e || P !== t) && ((Lr = null), Jl(e, t)), (t = !1);
  var s = Ae;
  e: do
    try {
      if (ne !== 0 && Z !== null) {
        var r = Z,
          o = st;
        switch (ne) {
          case 8:
            wf(), (s = 6);
            break e;
          case 3:
          case 2:
          case 9:
          case 6:
            Et.current === null && (t = !0);
            var c = ne;
            if (((ne = 0), (st = null), Sl(e, r, o, c), n && li)) {
              s = 0;
              break e;
            }
            break;
          default:
            (c = ne), (ne = 0), (st = null), Sl(e, r, o, c);
        }
      }
      Pb(), (s = Ae);
      break;
    } catch (d) {
      Ug(e, d);
    }
  while (!0);
  return (
    t && e.shellSuspendCounter++,
    (dn = Qa = null),
    (ae = a),
    (H.H = l),
    (H.A = i),
    Z === null && ((oe = null), (P = 0), oo()),
    s
  );
}
function Pb() {
  for (; Z !== null; ) Lg(Z);
}
function Jb(e, t) {
  var n = ae;
  ae |= 2;
  var a = Bg(),
    l = Hg();
  oe !== e || P !== t
    ? ((Lr = null), (Hr = Kt() + 500), Jl(e, t))
    : (li = ps(e, t));
  e: do
    try {
      if (ne !== 0 && Z !== null) {
        t = Z;
        var i = st;
        t: switch (ne) {
          case 1:
            (ne = 0), (st = null), Sl(e, t, i, 1);
            break;
          case 2:
          case 9:
            if (_d(i)) {
              (ne = 0), (st = null), lh(t);
              break;
            }
            (t = function () {
              (ne !== 2 && ne !== 9) || oe !== e || (ne = 7), Wt(e);
            }),
              i.then(t, t);
            break e;
          case 3:
            ne = 7;
            break e;
          case 4:
            ne = 5;
            break e;
          case 7:
            _d(i)
              ? ((ne = 0), (st = null), lh(t))
              : ((ne = 0), (st = null), Sl(e, t, i, 7));
            break;
          case 5:
            var s = null;
            switch (Z.tag) {
              case 26:
                s = Z.memoizedState;
              case 5:
              case 27:
                var r = Z;
                if (!s || a0(s)) {
                  (ne = 0), (st = null);
                  var o = r.sibling;
                  if (o !== null) Z = o;
                  else {
                    var c = r.return;
                    c !== null ? ((Z = c), go(c)) : (Z = null);
                  }
                  break t;
                }
            }
            (ne = 0), (st = null), Sl(e, t, i, 5);
            break;
          case 6:
            (ne = 0), (st = null), Sl(e, t, i, 6);
            break;
          case 8:
            wf(), (Ae = 6);
            break e;
          default:
            throw Error(j(462));
        }
      }
      $b();
      break;
    } catch (d) {
      Ug(e, d);
    }
  while (!0);
  return (
    (dn = Qa = null),
    (H.H = a),
    (H.A = l),
    (ae = n),
    Z !== null ? 0 : ((oe = null), (P = 0), oo(), Ae)
  );
}
function $b() {
  for (; Z !== null && !by(); ) Lg(Z);
}
function Lg(e) {
  var t = mg(e.alternate, e, bn);
  (e.memoizedProps = e.pendingProps), t === null ? go(e) : (Z = t);
}
function lh(e) {
  var t = e,
    n = t.alternate;
  switch (t.tag) {
    case 15:
    case 0:
      t = $d(n, t, t.pendingProps, t.type, void 0, P);
      break;
    case 11:
      t = $d(n, t, t.pendingProps, t.type.render, t.ref, P);
      break;
    case 5:
      rf(t);
    default:
      pg(n, t), (t = Z = pp(t, bn)), (t = mg(n, t, bn));
  }
  (e.memoizedProps = e.pendingProps), t === null ? go(e) : (Z = t);
}
function Sl(e, t, n, a) {
  (dn = Qa = null), rf(t), (Ol = null), (Ji = 0);
  var l = t.return;
  try {
    if (Yb(e, l, t, n, P)) {
      (Ae = 1), _r(e, St(n, e.current)), (Z = null);
      return;
    }
  } catch (i) {
    if (l !== null) throw ((Z = l), i);
    (Ae = 1), _r(e, St(n, e.current)), (Z = null);
    return;
  }
  t.flags & 32768
    ? (I || a === 1
        ? (e = !0)
        : li || P & 536870912
        ? (e = !1)
        : ((Pn = e = !0),
          (a === 2 || a === 9 || a === 3 || a === 6) &&
            ((a = Et.current),
            a !== null && a.tag === 13 && (a.flags |= 16384))),
      qg(t, e))
    : go(t);
}
function go(e) {
  var t = e;
  do {
    if (t.flags & 32768) {
      qg(t, Pn);
      return;
    }
    e = t.return;
    var n = kb(t.alternate, t, bn);
    if (n !== null) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function qg(e, t) {
  do {
    var n = Qb(e.alternate, e);
    if (n !== null) {
      (n.flags &= 32767), (Z = n);
      return;
    }
    if (
      ((n = e.return),
      n !== null &&
        ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
      !t && ((e = e.sibling), e !== null))
    ) {
      Z = e;
      return;
    }
    Z = e = n;
  } while (e !== null);
  (Ae = 6), (Z = null);
}
function ih(e, t, n, a, l, i, s, r, o) {
  e.cancelPendingCommit = null;
  do vo();
  while (qe !== 0);
  if (ae & 6) throw Error(j(327));
  if (t !== null) {
    if (t === e.current) throw Error(j(177));
    if (
      ((i = t.lanes | t.childLanes),
      (i |= Kc),
      Oy(e, n, i, s, r, o),
      e === oe && ((Z = oe = null), (P = 0)),
      (Pl = t),
      (na = e),
      (Ml = n),
      (nc = i),
      (ac = l),
      (Dg = a),
      t.subtreeFlags & 10256 || t.flags & 10256
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          tx(wr, function () {
            return Vg(), null;
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (a = (t.flags & 13878) !== 0),
      t.subtreeFlags & 13878 || a)
    ) {
      (a = H.T), (H.T = null), (l = ee.p), (ee.p = 2), (s = ae), (ae |= 4);
      try {
        Vb(e, t, n);
      } finally {
        (ae = s), (ee.p = l), (H.T = a);
      }
    }
    (qe = 1), Yg(), Gg(), kg();
  }
}
function Yg() {
  if (qe === 1) {
    qe = 0;
    var e = na,
      t = Pl,
      n = (t.flags & 13878) !== 0;
    if (t.subtreeFlags & 13878 || n) {
      (n = H.T), (H.T = null);
      var a = ee.p;
      ee.p = 2;
      var l = ae;
      ae |= 4;
      try {
        Ng(t, e);
        var i = uc,
          s = rp(e.containerInfo),
          r = i.focusedElem,
          o = i.selectionRange;
        if (
          s !== r &&
          r &&
          r.ownerDocument &&
          sp(r.ownerDocument.documentElement, r)
        ) {
          if (o !== null && Zc(r)) {
            var c = o.start,
              d = o.end;
            if ((d === void 0 && (d = c), "selectionStart" in r))
              (r.selectionStart = c),
                (r.selectionEnd = Math.min(d, r.value.length));
            else {
              var m = r.ownerDocument || document,
                h = (m && m.defaultView) || window;
              if (h.getSelection) {
                var f = h.getSelection(),
                  S = r.textContent.length,
                  y = Math.min(o.start, S),
                  x = o.end === void 0 ? y : Math.min(o.end, S);
                !f.extend && y > x && ((s = x), (x = y), (y = s));
                var p = jd(r, y),
                  g = jd(r, x);
                if (
                  p &&
                  g &&
                  (f.rangeCount !== 1 ||
                    f.anchorNode !== p.node ||
                    f.anchorOffset !== p.offset ||
                    f.focusNode !== g.node ||
                    f.focusOffset !== g.offset)
                ) {
                  var v = m.createRange();
                  v.setStart(p.node, p.offset),
                    f.removeAllRanges(),
                    y > x
                      ? (f.addRange(v), f.extend(g.node, g.offset))
                      : (v.setEnd(g.node, g.offset), f.addRange(v));
                }
              }
            }
          }
          for (m = [], f = r; (f = f.parentNode); )
            f.nodeType === 1 &&
              m.push({ element: f, left: f.scrollLeft, top: f.scrollTop });
          for (
            typeof r.focus == "function" && r.focus(), r = 0;
            r < m.length;
            r++
          ) {
            var w = m[r];
            (w.element.scrollLeft = w.left), (w.element.scrollTop = w.top);
          }
        }
        (Zr = !!oc), (uc = oc = null);
      } finally {
        (ae = l), (ee.p = a), (H.T = n);
      }
    }
    (e.current = t), (qe = 2);
  }
}
function Gg() {
  if (qe === 2) {
    qe = 0;
    var e = na,
      t = Pl,
      n = (t.flags & 8772) !== 0;
    if (t.subtreeFlags & 8772 || n) {
      (n = H.T), (H.T = null);
      var a = ee.p;
      ee.p = 2;
      var l = ae;
      ae |= 4;
      try {
        wg(e, t.alternate, t);
      } finally {
        (ae = l), (ee.p = a), (H.T = n);
      }
    }
    qe = 3;
  }
}
function kg() {
  if (qe === 4 || qe === 3) {
    (qe = 0), xy();
    var e = na,
      t = Pl,
      n = Ml,
      a = Dg;
    t.subtreeFlags & 10256 || t.flags & 10256
      ? (qe = 5)
      : ((qe = 0), (Pl = na = null), Qg(e, e.pendingLanes));
    var l = e.pendingLanes;
    if (
      (l === 0 && (ta = null),
      qc(n),
      (t = t.stateNode),
      ut && typeof ut.onCommitFiberRoot == "function")
    )
      try {
        ut.onCommitFiberRoot(ms, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
    if (a !== null) {
      (t = H.T), (l = ee.p), (ee.p = 2), (H.T = null);
      try {
        for (var i = e.onRecoverableError, s = 0; s < a.length; s++) {
          var r = a[s];
          i(r.value, { componentStack: r.stack });
        }
      } finally {
        (H.T = t), (ee.p = l);
      }
    }
    Ml & 3 && vo(),
      Wt(e),
      (l = e.pendingLanes),
      n & 4194090 && l & 42
        ? e === lc
          ? Gi++
          : ((Gi = 0), (lc = e))
        : (Gi = 0),
      js(0);
  }
}
function Qg(e, t) {
  (e.pooledCacheLanes &= t) === 0 &&
    ((t = e.pooledCache), t != null && ((e.pooledCache = null), ws(t)));
}
function vo(e) {
  return Yg(), Gg(), kg(), Vg();
}
function Vg() {
  if (qe !== 5) return !1;
  var e = na,
    t = nc;
  nc = 0;
  var n = qc(Ml),
    a = H.T,
    l = ee.p;
  try {
    (ee.p = 32 > n ? 32 : n), (H.T = null), (n = ac), (ac = null);
    var i = na,
      s = Ml;
    if (((qe = 0), (Pl = na = null), (Ml = 0), ae & 6)) throw Error(j(331));
    var r = ae;
    if (
      ((ae |= 4),
      Mg(i.current),
      Tg(i, i.current, s, n),
      (ae = r),
      js(0, !1),
      ut && typeof ut.onPostCommitFiberRoot == "function")
    )
      try {
        ut.onPostCommitFiberRoot(ms, i);
      } catch {}
    return !0;
  } finally {
    (ee.p = l), (H.T = a), Qg(e, t);
  }
}
function sh(e, t, n) {
  (t = St(n, t)),
    (t = $u(e.stateNode, t, 2)),
    (e = ea(e, t, 2)),
    e !== null && (gs(e, 2), Wt(e));
}
function re(e, t, n) {
  if (e.tag === 3) sh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof a.componentDidCatch == "function" &&
            (ta === null || !ta.has(a)))
        ) {
          (e = St(n, e)),
            (n = rg(2)),
            (a = ea(t, n, 2)),
            a !== null && (og(n, a, t, e), gs(a, 2), Wt(a));
          break;
        }
      }
      t = t.return;
    }
}
function cu(e, t, n) {
  var a = e.pingCache;
  if (a === null) {
    a = e.pingCache = new Kb();
    var l = new Set();
    a.set(t, l);
  } else (l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l));
  l.has(n) || ((yf = !0), l.add(n), (e = Wb.bind(null, e, t, n)), t.then(e, e));
}
function Wb(e, t, n) {
  var a = e.pingCache;
  a !== null && a.delete(t),
    (e.pingedLanes |= e.suspendedLanes & n),
    (e.warmLanes &= ~n),
    oe === e &&
      (P & n) === n &&
      (Ae === 4 || (Ae === 3 && (P & 62914560) === P && 300 > Kt() - xf)
        ? !(ae & 2) && Jl(e, 0)
        : (bf |= n),
      Fl === P && (Fl = 0)),
    Wt(e);
}
function Xg(e, t) {
  t === 0 && (t = Ym()), (e = ai(e, t)), e !== null && (gs(e, t), Wt(e));
}
function Ib(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xg(e, n);
}
function ex(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var a = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      a = e.stateNode;
      break;
    case 22:
      a = e.stateNode._retryCache;
      break;
    default:
      throw Error(j(314));
  }
  a !== null && a.delete(t), Xg(e, n);
}
function tx(e, t) {
  return Hc(e, t);
}
var qr = null,
  cl = null,
  sc = !1,
  Yr = !1,
  fu = !1,
  _a = 0;
function Wt(e) {
  e !== cl &&
    e.next === null &&
    (cl === null ? (qr = cl = e) : (cl = cl.next = e)),
    (Yr = !0),
    sc || ((sc = !0), ax());
}
function js(e, t) {
  if (!fu && Yr) {
    fu = !0;
    do
      for (var n = !1, a = qr; a !== null; ) {
        if (e !== 0) {
          var l = a.pendingLanes;
          if (l === 0) var i = 0;
          else {
            var s = a.suspendedLanes,
              r = a.pingedLanes;
            (i = (1 << (31 - ct(42 | e) + 1)) - 1),
              (i &= l & ~(s & ~r)),
              (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
          }
          i !== 0 && ((n = !0), rh(a, i));
        } else
          (i = P),
            (i = lo(
              a,
              a === oe ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            )),
            !(i & 3) || ps(a, i) || ((n = !0), rh(a, i));
        a = a.next;
      }
    while (n);
    fu = !1;
  }
}
function nx() {
  Zg();
}
function Zg() {
  Yr = sc = !1;
  var e = 0;
  _a !== 0 && (fx() && (e = _a), (_a = 0));
  for (var t = Kt(), n = null, a = qr; a !== null; ) {
    var l = a.next,
      i = Kg(a, t);
    i === 0
      ? ((a.next = null),
        n === null ? (qr = l) : (n.next = l),
        l === null && (cl = n))
      : ((n = a), (e !== 0 || i & 3) && (Yr = !0)),
      (a = l);
  }
  js(e);
}
function Kg(e, t) {
  for (
    var n = e.suspendedLanes,
      a = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes & -62914561;
    0 < i;

  ) {
    var s = 31 - ct(i),
      r = 1 << s,
      o = l[s];
    o === -1
      ? (!(r & n) || r & a) && (l[s] = Cy(r, t))
      : o <= t && (e.expiredLanes |= r),
      (i &= ~r);
  }
  if (
    ((t = oe),
    (n = P),
    (n = lo(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    )),
    (a = e.callbackNode),
    n === 0 ||
      (e === t && (ne === 2 || ne === 9)) ||
      e.cancelPendingCommit !== null)
  )
    return (
      a !== null && a !== null && Ho(a),
      (e.callbackNode = null),
      (e.callbackPriority = 0)
    );
  if (!(n & 3) || ps(e, n)) {
    if (((t = n & -n), t === e.callbackPriority)) return t;
    switch ((a !== null && Ho(a), qc(n))) {
      case 2:
      case 8:
        n = Hm;
        break;
      case 32:
        n = wr;
        break;
      case 268435456:
        n = Lm;
        break;
      default:
        n = wr;
    }
    return (
      (a = Fg.bind(null, e)),
      (n = Hc(n, a)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    );
  }
  return (
    a !== null && a !== null && Ho(a),
    (e.callbackPriority = 2),
    (e.callbackNode = null),
    2
  );
}
function Fg(e, t) {
  if (qe !== 0 && qe !== 5)
    return (e.callbackNode = null), (e.callbackPriority = 0), null;
  var n = e.callbackNode;
  if (vo() && e.callbackNode !== n) return null;
  var a = P;
  return (
    (a = lo(
      e,
      e === oe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    )),
    a === 0
      ? null
      : (_g(e, a, t),
        Kg(e, Kt()),
        e.callbackNode != null && e.callbackNode === n
          ? Fg.bind(null, e)
          : null)
  );
}
function rh(e, t) {
  if (vo()) return null;
  _g(e, t, !0);
}
function ax() {
  hx(function () {
    ae & 6 ? Hc(Bm, nx) : Zg();
  });
}
function Sf() {
  return _a === 0 && (_a = qm()), _a;
}
function oh(e) {
  return e == null || typeof e == "symbol" || typeof e == "boolean"
    ? null
    : typeof e == "function"
    ? e
    : ar("" + e);
}
function uh(e, t) {
  var n = t.ownerDocument.createElement("input");
  return (
    (n.name = t.name),
    (n.value = t.value),
    e.id && n.setAttribute("form", e.id),
    t.parentNode.insertBefore(n, t),
    (e = new FormData(e)),
    n.parentNode.removeChild(n),
    e
  );
}
function lx(e, t, n, a, l) {
  if (t === "submit" && n && n.stateNode === l) {
    var i = oh((l[tt] || null).action),
      s = a.submitter;
    s &&
      ((t = (t = s[tt] || null)
        ? oh(t.formAction)
        : s.getAttribute("formAction")),
      t !== null && ((i = t), (s = null)));
    var r = new io("action", "action", null, a, l);
    e.push({
      event: r,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (a.defaultPrevented) {
              if (_a !== 0) {
                var o = s ? uh(l, s) : new FormData(l);
                Pu(
                  n,
                  { pending: !0, data: o, method: l.method, action: i },
                  null,
                  o
                );
              }
            } else
              typeof i == "function" &&
                (r.preventDefault(),
                (o = s ? uh(l, s) : new FormData(l)),
                Pu(
                  n,
                  { pending: !0, data: o, method: l.method, action: i },
                  i,
                  o
                ));
          },
          currentTarget: l,
        },
      ],
    });
  }
}
for (var du = 0; du < Hu.length; du++) {
  var hu = Hu[du],
    ix = hu.toLowerCase(),
    sx = hu[0].toUpperCase() + hu.slice(1);
  Ht(ix, "on" + sx);
}
Ht(up, "onAnimationEnd");
Ht(cp, "onAnimationIteration");
Ht(fp, "onAnimationStart");
Ht("dblclick", "onDoubleClick");
Ht("focusin", "onFocus");
Ht("focusout", "onBlur");
Ht(Ab, "onTransitionRun");
Ht(Eb, "onTransitionStart");
Ht(Nb, "onTransitionCancel");
Ht(dp, "onTransitionEnd");
kl("onMouseEnter", ["mouseout", "mouseover"]);
kl("onMouseLeave", ["mouseout", "mouseover"]);
kl("onPointerEnter", ["pointerout", "pointerover"]);
kl("onPointerLeave", ["pointerout", "pointerover"]);
Ya(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ya(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ya("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ya(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ya(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ya(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $i =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat($i)
  );
function Pg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var a = e[n],
      l = a.event;
    a = a.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = a.length - 1; 0 <= s; s--) {
          var r = a[s],
            o = r.instance,
            c = r.currentTarget;
          if (((r = r.listener), o !== i && l.isPropagationStopped())) break e;
          (i = r), (l.currentTarget = c);
          try {
            i(l);
          } catch (d) {
            zr(d);
          }
          (l.currentTarget = null), (i = o);
        }
      else
        for (s = 0; s < a.length; s++) {
          if (
            ((r = a[s]),
            (o = r.instance),
            (c = r.currentTarget),
            (r = r.listener),
            o !== i && l.isPropagationStopped())
          )
            break e;
          (i = r), (l.currentTarget = c);
          try {
            i(l);
          } catch (d) {
            zr(d);
          }
          (l.currentTarget = null), (i = o);
        }
    }
  }
}
function X(e, t) {
  var n = t[Mu];
  n === void 0 && (n = t[Mu] = new Set());
  var a = e + "__bubble";
  n.has(a) || (Jg(t, e, 2, !1), n.add(a));
}
function mu(e, t, n) {
  var a = 0;
  t && (a |= 4), Jg(n, e, a, t);
}
var Fs = "_reactListening" + Math.random().toString(36).slice(2);
function Af(e) {
  if (!e[Fs]) {
    (e[Fs] = !0),
      Vm.forEach(function (n) {
        n !== "selectionchange" && (rx.has(n) || mu(n, !1, e), mu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fs] || ((t[Fs] = !0), mu("selectionchange", !1, t));
  }
}
function Jg(e, t, n, a) {
  switch (o0(t)) {
    case 2:
      var l = _x;
      break;
    case 8:
      l = Ux;
      break;
    default:
      l = Tf;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !_u ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    a
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function pu(e, t, n, a, l) {
  var i = a;
  if (!(t & 1) && !(t & 2) && a !== null)
    e: for (;;) {
      if (a === null) return;
      var s = a.tag;
      if (s === 3 || s === 4) {
        var r = a.stateNode.containerInfo;
        if (r === l) break;
        if (s === 4)
          for (s = a.return; s !== null; ) {
            var o = s.tag;
            if ((o === 3 || o === 4) && s.stateNode.containerInfo === l) return;
            s = s.return;
          }
        for (; r !== null; ) {
          if (((s = hl(r)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
            a = i = s;
            continue e;
          }
          r = r.parentNode;
        }
      }
      a = a.return;
    }
  Wm(function () {
    var c = i,
      d = kc(n),
      m = [];
    e: {
      var h = hp.get(e);
      if (h !== void 0) {
        var f = io,
          S = e;
        switch (e) {
          case "keypress":
            if (ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = tb;
            break;
          case "focusin":
            (S = "focus"), (f = Xo);
            break;
          case "focusout":
            (S = "blur"), (f = Xo);
            break;
          case "beforeblur":
          case "afterblur":
            f = Xo;
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
            f = gd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = Qy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = lb;
            break;
          case up:
          case cp:
          case fp:
            f = Zy;
            break;
          case dp:
            f = sb;
            break;
          case "scroll":
          case "scrollend":
            f = Gy;
            break;
          case "wheel":
            f = ob;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = Fy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = yd;
            break;
          case "toggle":
          case "beforetoggle":
            f = cb;
        }
        var y = (t & 4) !== 0,
          x = !y && (e === "scroll" || e === "scrollend"),
          p = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var g = c, v; g !== null; ) {
          var w = g;
          if (
            ((v = w.stateNode),
            (w = w.tag),
            (w !== 5 && w !== 26 && w !== 27) ||
              v === null ||
              p === null ||
              ((w = Xi(g, p)), w != null && y.push(Wi(g, w, v))),
            x)
          )
            break;
          g = g.return;
        }
        0 < y.length &&
          ((h = new f(h, S, null, n, d)), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (f = e === "mouseout" || e === "pointerout"),
          h &&
            n !== zu &&
            (S = n.relatedTarget || n.fromElement) &&
            (hl(S) || S[ti]))
        )
          break e;
        if (
          (f || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          f
            ? ((S = n.relatedTarget || n.toElement),
              (f = c),
              (S = S ? hl(S) : null),
              S !== null &&
                ((x = hs(S)),
                (y = S.tag),
                S !== x || (y !== 5 && y !== 27 && y !== 6)) &&
                (S = null))
            : ((f = null), (S = c)),
          f !== S)
        ) {
          if (
            ((y = gd),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = yd),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (x = f == null ? h : Ni(f)),
            (v = S == null ? h : Ni(S)),
            (h = new y(w, g + "leave", f, n, d)),
            (h.target = x),
            (h.relatedTarget = v),
            (w = null),
            hl(d) === c &&
              ((y = new y(p, g + "enter", S, n, d)),
              (y.target = v),
              (y.relatedTarget = x),
              (w = y)),
            (x = w),
            f && S)
          )
            t: {
              for (y = f, p = S, g = 0, v = y; v; v = il(v)) g++;
              for (v = 0, w = p; w; w = il(w)) v++;
              for (; 0 < g - v; ) (y = il(y)), g--;
              for (; 0 < v - g; ) (p = il(p)), v--;
              for (; g--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = il(y)), (p = il(p));
              }
              y = null;
            }
          else y = null;
          f !== null && ch(m, h, f, y, !1),
            S !== null && x !== null && ch(m, x, S, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? Ni(c) : window),
          (f = h.nodeName && h.nodeName.toLowerCase()),
          f === "select" || (f === "input" && h.type === "file"))
        )
          var A = Sd;
        else if (wd(h))
          if (lp) A = xb;
          else {
            A = yb;
            var T = vb;
          }
        else
          (f = h.nodeName),
            !f ||
            f.toLowerCase() !== "input" ||
            (h.type !== "checkbox" && h.type !== "radio")
              ? c && Gc(c.elementType) && (A = Sd)
              : (A = bb);
        if (A && (A = A(e, c))) {
          ap(m, A, n, d);
          break e;
        }
        T && T(e, h, c),
          e === "focusout" &&
            c &&
            h.type === "number" &&
            c.memoizedProps.value != null &&
            Du(h, "number", h.value);
      }
      switch (((T = c ? Ni(c) : window), e)) {
        case "focusin":
          (wd(T) || T.contentEditable === "true") &&
            ((gl = T), (Uu = c), (Ri = null));
          break;
        case "focusout":
          Ri = Uu = gl = null;
          break;
        case "mousedown":
          Bu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bu = !1), Td(m, n, d);
          break;
        case "selectionchange":
          if (Sb) break;
        case "keydown":
        case "keyup":
          Td(m, n, d);
      }
      var E;
      if (Xc)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        pl
          ? tp(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (ep &&
          n.locale !== "ko" &&
          (pl || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && pl && (E = Im())
            : ((Fn = d),
              (Qc = "value" in Fn ? Fn.value : Fn.textContent),
              (pl = !0))),
        (T = Gr(c, O)),
        0 < T.length &&
          ((O = new vd(O, e, null, n, d)),
          m.push({ event: O, listeners: T }),
          E ? (O.data = E) : ((E = np(n)), E !== null && (O.data = E)))),
        (E = db ? hb(e, n) : mb(e, n)) &&
          ((O = Gr(c, "onBeforeInput")),
          0 < O.length &&
            ((T = new vd("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: T, listeners: O }),
            (T.data = E))),
        lx(m, e, c, n, d);
    }
    Pg(m, t);
  });
}
function Wi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gr(e, t) {
  for (var n = t + "Capture", a = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    if (
      ((l = l.tag),
      (l !== 5 && l !== 26 && l !== 27) ||
        i === null ||
        ((l = Xi(e, n)),
        l != null && a.unshift(Wi(e, l, i)),
        (l = Xi(e, t)),
        l != null && a.push(Wi(e, l, i))),
      e.tag === 3)
    )
      return a;
    e = e.return;
  }
  return [];
}
function il(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5 && e.tag !== 27);
  return e || null;
}
function ch(e, t, n, a, l) {
  for (var i = t._reactName, s = []; n !== null && n !== a; ) {
    var r = n,
      o = r.alternate,
      c = r.stateNode;
    if (((r = r.tag), o !== null && o === a)) break;
    (r !== 5 && r !== 26 && r !== 27) ||
      c === null ||
      ((o = c),
      l
        ? ((c = Xi(n, i)), c != null && s.unshift(Wi(n, c, o)))
        : l || ((c = Xi(n, i)), c != null && s.push(Wi(n, c, o)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var ox = /\r\n?/g,
  ux = /\u0000|\uFFFD/g;
function fh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ox,
      `
`
    )
    .replace(ux, "");
}
function $g(e, t) {
  return (t = fh(t)), fh(e) === t;
}
function yo() {}
function ie(e, t, n, a, l, i) {
  switch (n) {
    case "children":
      typeof a == "string"
        ? t === "body" || (t === "textarea" && a === "") || Ql(e, a)
        : (typeof a == "number" || typeof a == "bigint") &&
          t !== "body" &&
          Ql(e, "" + a);
      break;
    case "className":
      Gs(e, "class", a);
      break;
    case "tabIndex":
      Gs(e, "tabindex", a);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      Gs(e, n, a);
      break;
    case "style":
      $m(e, a, i);
      break;
    case "data":
      if (t !== "object") {
        Gs(e, "data", a);
        break;
      }
    case "src":
    case "href":
      if (a === "" && (t !== "a" || n !== "href")) {
        e.removeAttribute(n);
        break;
      }
      if (
        a == null ||
        typeof a == "function" ||
        typeof a == "symbol" ||
        typeof a == "boolean"
      ) {
        e.removeAttribute(n);
        break;
      }
      (a = ar("" + a)), e.setAttribute(n, a);
      break;
    case "action":
    case "formAction":
      if (typeof a == "function") {
        e.setAttribute(
          n,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof i == "function" &&
          (n === "formAction"
            ? (t !== "input" && ie(e, t, "name", l.name, l, null),
              ie(e, t, "formEncType", l.formEncType, l, null),
              ie(e, t, "formMethod", l.formMethod, l, null),
              ie(e, t, "formTarget", l.formTarget, l, null))
            : (ie(e, t, "encType", l.encType, l, null),
              ie(e, t, "method", l.method, l, null),
              ie(e, t, "target", l.target, l, null)));
      if (a == null || typeof a == "symbol" || typeof a == "boolean") {
        e.removeAttribute(n);
        break;
      }
      (a = ar("" + a)), e.setAttribute(n, a);
      break;
    case "onClick":
      a != null && (e.onclick = yo);
      break;
    case "onScroll":
      a != null && X("scroll", e);
      break;
    case "onScrollEnd":
      a != null && X("scrollend", e);
      break;
    case "dangerouslySetInnerHTML":
      if (a != null) {
        if (typeof a != "object" || !("__html" in a)) throw Error(j(61));
        if (((n = a.__html), n != null)) {
          if (l.children != null) throw Error(j(60));
          e.innerHTML = n;
        }
      }
      break;
    case "multiple":
      e.multiple = a && typeof a != "function" && typeof a != "symbol";
      break;
    case "muted":
      e.muted = a && typeof a != "function" && typeof a != "symbol";
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        a == null ||
        typeof a == "function" ||
        typeof a == "boolean" ||
        typeof a == "symbol"
      ) {
        e.removeAttribute("xlink:href");
        break;
      }
      (n = ar("" + a)),
        e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      a != null && typeof a != "function" && typeof a != "symbol"
        ? e.setAttribute(n, "" + a)
        : e.removeAttribute(n);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      a && typeof a != "function" && typeof a != "symbol"
        ? e.setAttribute(n, "")
        : e.removeAttribute(n);
      break;
    case "capture":
    case "download":
      a === !0
        ? e.setAttribute(n, "")
        : a !== !1 &&
          a != null &&
          typeof a != "function" &&
          typeof a != "symbol"
        ? e.setAttribute(n, a)
        : e.removeAttribute(n);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      a != null &&
      typeof a != "function" &&
      typeof a != "symbol" &&
      !isNaN(a) &&
      1 <= a
        ? e.setAttribute(n, a)
        : e.removeAttribute(n);
      break;
    case "rowSpan":
    case "start":
      a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
        ? e.removeAttribute(n)
        : e.setAttribute(n, a);
      break;
    case "popover":
      X("beforetoggle", e), X("toggle", e), nr(e, "popover", a);
      break;
    case "xlinkActuate":
      en(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
      break;
    case "xlinkArcrole":
      en(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
      break;
    case "xlinkRole":
      en(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
      break;
    case "xlinkShow":
      en(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
      break;
    case "xlinkTitle":
      en(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
      break;
    case "xlinkType":
      en(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
      break;
    case "xmlBase":
      en(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
      break;
    case "xmlLang":
      en(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
      break;
    case "xmlSpace":
      en(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
      break;
    case "is":
      nr(e, "is", a);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
        ((n = qy.get(n) || n), nr(e, n, a));
  }
}
function rc(e, t, n, a, l, i) {
  switch (n) {
    case "style":
      $m(e, a, i);
      break;
    case "dangerouslySetInnerHTML":
      if (a != null) {
        if (typeof a != "object" || !("__html" in a)) throw Error(j(61));
        if (((n = a.__html), n != null)) {
          if (l.children != null) throw Error(j(60));
          e.innerHTML = n;
        }
      }
      break;
    case "children":
      typeof a == "string"
        ? Ql(e, a)
        : (typeof a == "number" || typeof a == "bigint") && Ql(e, "" + a);
      break;
    case "onScroll":
      a != null && X("scroll", e);
      break;
    case "onScrollEnd":
      a != null && X("scrollend", e);
      break;
    case "onClick":
      a != null && (e.onclick = yo);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!Xm.hasOwnProperty(n))
        e: {
          if (
            n[0] === "o" &&
            n[1] === "n" &&
            ((l = n.endsWith("Capture")),
            (t = n.slice(2, l ? n.length - 7 : void 0)),
            (i = e[tt] || null),
            (i = i != null ? i[n] : null),
            typeof i == "function" && e.removeEventListener(t, i, l),
            typeof a == "function")
          ) {
            typeof i != "function" &&
              i !== null &&
              (n in e
                ? (e[n] = null)
                : e.hasAttribute(n) && e.removeAttribute(n)),
              e.addEventListener(t, a, l);
            break e;
          }
          n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, "") : nr(e, n, a);
        }
  }
}
function Ye(e, t, n) {
  switch (t) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      X("error", e), X("load", e);
      var a = !1,
        l = !1,
        i;
      for (i in n)
        if (n.hasOwnProperty(i)) {
          var s = n[i];
          if (s != null)
            switch (i) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                l = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(j(137, t));
              default:
                ie(e, t, i, s, n, null);
            }
        }
      l && ie(e, t, "srcSet", n.srcSet, n, null),
        a && ie(e, t, "src", n.src, n, null);
      return;
    case "input":
      X("invalid", e);
      var r = (i = s = l = null),
        o = null,
        c = null;
      for (a in n)
        if (n.hasOwnProperty(a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case "name":
                l = d;
                break;
              case "type":
                s = d;
                break;
              case "checked":
                o = d;
                break;
              case "defaultChecked":
                c = d;
                break;
              case "value":
                i = d;
                break;
              case "defaultValue":
                r = d;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(j(137, t));
                break;
              default:
                ie(e, t, a, d, n, null);
            }
        }
      Fm(e, i, r, o, c, s, l, !1), Sr(e);
      return;
    case "select":
      X("invalid", e), (a = s = i = null);
      for (l in n)
        if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
          switch (l) {
            case "value":
              i = r;
              break;
            case "defaultValue":
              s = r;
              break;
            case "multiple":
              a = r;
            default:
              ie(e, t, l, r, n, null);
          }
      (t = i),
        (n = s),
        (e.multiple = !!a),
        t != null ? El(e, !!a, t, !1) : n != null && El(e, !!a, n, !0);
      return;
    case "textarea":
      X("invalid", e), (i = l = a = null);
      for (s in n)
        if (n.hasOwnProperty(s) && ((r = n[s]), r != null))
          switch (s) {
            case "value":
              a = r;
              break;
            case "defaultValue":
              l = r;
              break;
            case "children":
              i = r;
              break;
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(j(91));
              break;
            default:
              ie(e, t, s, r, n, null);
          }
      Jm(e, a, l, i), Sr(e);
      return;
    case "option":
      for (o in n)
        if (n.hasOwnProperty(o) && ((a = n[o]), a != null))
          switch (o) {
            case "selected":
              e.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              ie(e, t, o, a, n, null);
          }
      return;
    case "dialog":
      X("beforetoggle", e), X("toggle", e), X("cancel", e), X("close", e);
      break;
    case "iframe":
    case "object":
      X("load", e);
      break;
    case "video":
    case "audio":
      for (a = 0; a < $i.length; a++) X($i[a], e);
      break;
    case "image":
      X("error", e), X("load", e);
      break;
    case "details":
      X("toggle", e);
      break;
    case "embed":
    case "source":
    case "link":
      X("error", e), X("load", e);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (c in n)
        if (n.hasOwnProperty(c) && ((a = n[c]), a != null))
          switch (c) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(j(137, t));
            default:
              ie(e, t, c, a, n, null);
          }
      return;
    default:
      if (Gc(t)) {
        for (d in n)
          n.hasOwnProperty(d) &&
            ((a = n[d]), a !== void 0 && rc(e, t, d, a, n, void 0));
        return;
      }
  }
  for (r in n)
    n.hasOwnProperty(r) && ((a = n[r]), a != null && ie(e, t, r, a, n, null));
}
function cx(e, t, n, a) {
  switch (t) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var l = null,
        i = null,
        s = null,
        r = null,
        o = null,
        c = null,
        d = null;
      for (f in n) {
        var m = n[f];
        if (n.hasOwnProperty(f) && m != null)
          switch (f) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              o = m;
            default:
              a.hasOwnProperty(f) || ie(e, t, f, null, a, m);
          }
      }
      for (var h in a) {
        var f = a[h];
        if (((m = n[h]), a.hasOwnProperty(h) && (f != null || m != null)))
          switch (h) {
            case "type":
              i = f;
              break;
            case "name":
              l = f;
              break;
            case "checked":
              c = f;
              break;
            case "defaultChecked":
              d = f;
              break;
            case "value":
              s = f;
              break;
            case "defaultValue":
              r = f;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (f != null) throw Error(j(137, t));
              break;
            default:
              f !== m && ie(e, t, h, f, a, m);
          }
      }
      Ru(e, s, r, o, c, d, i, l);
      return;
    case "select":
      f = s = r = h = null;
      for (i in n)
        if (((o = n[i]), n.hasOwnProperty(i) && o != null))
          switch (i) {
            case "value":
              break;
            case "multiple":
              f = o;
            default:
              a.hasOwnProperty(i) || ie(e, t, i, null, a, o);
          }
      for (l in a)
        if (
          ((i = a[l]),
          (o = n[l]),
          a.hasOwnProperty(l) && (i != null || o != null))
        )
          switch (l) {
            case "value":
              h = i;
              break;
            case "defaultValue":
              r = i;
              break;
            case "multiple":
              s = i;
            default:
              i !== o && ie(e, t, l, i, a, o);
          }
      (t = r),
        (n = s),
        (a = f),
        h != null
          ? El(e, !!n, h, !1)
          : !!a != !!n &&
            (t != null ? El(e, !!n, t, !0) : El(e, !!n, n ? [] : "", !1));
      return;
    case "textarea":
      f = h = null;
      for (r in n)
        if (
          ((l = n[r]), n.hasOwnProperty(r) && l != null && !a.hasOwnProperty(r))
        )
          switch (r) {
            case "value":
              break;
            case "children":
              break;
            default:
              ie(e, t, r, null, a, l);
          }
      for (s in a)
        if (
          ((l = a[s]),
          (i = n[s]),
          a.hasOwnProperty(s) && (l != null || i != null))
        )
          switch (s) {
            case "value":
              h = l;
              break;
            case "defaultValue":
              f = l;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (l != null) throw Error(j(91));
              break;
            default:
              l !== i && ie(e, t, s, l, a, i);
          }
      Pm(e, h, f);
      return;
    case "option":
      for (var S in n)
        if (
          ((h = n[S]), n.hasOwnProperty(S) && h != null && !a.hasOwnProperty(S))
        )
          switch (S) {
            case "selected":
              e.selected = !1;
              break;
            default:
              ie(e, t, S, null, a, h);
          }
      for (o in a)
        if (
          ((h = a[o]),
          (f = n[o]),
          a.hasOwnProperty(o) && h !== f && (h != null || f != null))
        )
          switch (o) {
            case "selected":
              e.selected = h && typeof h != "function" && typeof h != "symbol";
              break;
            default:
              ie(e, t, o, h, a, f);
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var y in n)
        (h = n[y]),
          n.hasOwnProperty(y) &&
            h != null &&
            !a.hasOwnProperty(y) &&
            ie(e, t, y, null, a, h);
      for (c in a)
        if (
          ((h = a[c]),
          (f = n[c]),
          a.hasOwnProperty(c) && h !== f && (h != null || f != null))
        )
          switch (c) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (h != null) throw Error(j(137, t));
              break;
            default:
              ie(e, t, c, h, a, f);
          }
      return;
    default:
      if (Gc(t)) {
        for (var x in n)
          (h = n[x]),
            n.hasOwnProperty(x) &&
              h !== void 0 &&
              !a.hasOwnProperty(x) &&
              rc(e, t, x, void 0, a, h);
        for (d in a)
          (h = a[d]),
            (f = n[d]),
            !a.hasOwnProperty(d) ||
              h === f ||
              (h === void 0 && f === void 0) ||
              rc(e, t, d, h, a, f);
        return;
      }
  }
  for (var p in n)
    (h = n[p]),
      n.hasOwnProperty(p) &&
        h != null &&
        !a.hasOwnProperty(p) &&
        ie(e, t, p, null, a, h);
  for (m in a)
    (h = a[m]),
      (f = n[m]),
      !a.hasOwnProperty(m) ||
        h === f ||
        (h == null && f == null) ||
        ie(e, t, m, h, a, f);
}
var oc = null,
  uc = null;
function kr(e) {
  return e.nodeType === 9 ? e : e.ownerDocument;
}
function dh(e) {
  switch (e) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function Wg(e, t) {
  if (e === 0)
    switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return e === 1 && t === "foreignObject" ? 0 : e;
}
function cc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    typeof t.children == "bigint" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gu = null;
function fx() {
  var e = window.event;
  return e && e.type === "popstate"
    ? e === gu
      ? !1
      : ((gu = e), !0)
    : ((gu = null), !1);
}
var Ig = typeof setTimeout == "function" ? setTimeout : void 0,
  dx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hh = typeof Promise == "function" ? Promise : void 0,
  hx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hh < "u"
      ? function (e) {
          return hh.resolve(null).then(e).catch(mx);
        }
      : Ig;
function mx(e) {
  setTimeout(function () {
    throw e;
  });
}
function ha(e) {
  return e === "head";
}
function mh(e, t) {
  var n = t,
    a = 0,
    l = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (0 < a && 8 > a) {
          n = a;
          var s = e.ownerDocument;
          if ((n & 1 && ki(s.documentElement), n & 2 && ki(s.body), n & 4))
            for (n = s.head, ki(n), s = n.firstChild; s; ) {
              var r = s.nextSibling,
                o = s.nodeName;
              s[vs] ||
                o === "SCRIPT" ||
                o === "STYLE" ||
                (o === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
                n.removeChild(s),
                (s = r);
            }
        }
        if (l === 0) {
          e.removeChild(i), as(t);
          return;
        }
        l--;
      } else
        n === "$" || n === "$?" || n === "$!"
          ? l++
          : (a = n.charCodeAt(0) - 48);
    else a = 0;
    n = i;
  } while (n);
  as(t);
}
function fc(e) {
  var t = e.firstChild;
  for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
    var n = t;
    switch (((t = t.nextSibling), n.nodeName)) {
      case "HTML":
      case "HEAD":
      case "BODY":
        fc(n), Yc(n);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if (n.rel.toLowerCase() === "stylesheet") continue;
    }
    e.removeChild(n);
  }
}
function px(e, t, n, a) {
  for (; e.nodeType === 1; ) {
    var l = n;
    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
      if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
    } else if (a) {
      if (!e[vs])
        switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (
              ((i = e.getAttribute("rel")),
              i === "stylesheet" && e.hasAttribute("data-precedence"))
            )
              break;
            if (
              i !== l.rel ||
              e.getAttribute("href") !==
                (l.href == null || l.href === "" ? null : l.href) ||
              e.getAttribute("crossorigin") !==
                (l.crossOrigin == null ? null : l.crossOrigin) ||
              e.getAttribute("title") !== (l.title == null ? null : l.title)
            )
              break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (
              ((i = e.getAttribute("src")),
              (i !== (l.src == null ? null : l.src) ||
                e.getAttribute("type") !== (l.type == null ? null : l.type) ||
                e.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin)) &&
                i &&
                e.hasAttribute("async") &&
                !e.hasAttribute("itemprop"))
            )
              break;
            return e;
          default:
            return e;
        }
    } else if (t === "input" && e.type === "hidden") {
      var i = l.name == null ? null : "" + l.name;
      if (l.type === "hidden" && e.getAttribute("name") === i) return e;
    } else return e;
    if (((e = _t(e.nextSibling)), e === null)) break;
  }
  return null;
}
function gx(e, t, n) {
  if (t === "") return null;
  for (; e.nodeType !== 3; )
    if (
      ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
        !n) ||
      ((e = _t(e.nextSibling)), e === null)
    )
      return null;
  return e;
}
function dc(e) {
  return (
    e.data === "$!" ||
    (e.data === "$?" && e.ownerDocument.readyState === "complete")
  );
}
function vx(e, t) {
  var n = e.ownerDocument;
  if (e.data !== "$?" || n.readyState === "complete") t();
  else {
    var a = function () {
      t(), n.removeEventListener("DOMContentLoaded", a);
    };
    n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
  }
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (
        ((t = e.data),
        t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
      )
        break;
      if (t === "/$") return null;
    }
  }
  return e;
}
var hc = null;
function ph(e) {
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
function e0(e, t, n) {
  switch (((t = kr(n)), e)) {
    case "html":
      if (((e = t.documentElement), !e)) throw Error(j(452));
      return e;
    case "head":
      if (((e = t.head), !e)) throw Error(j(453));
      return e;
    case "body":
      if (((e = t.body), !e)) throw Error(j(454));
      return e;
    default:
      throw Error(j(451));
  }
}
function ki(e) {
  for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
  Yc(e);
}
var Nt = new Map(),
  gh = new Set();
function Qr(e) {
  return typeof e.getRootNode == "function"
    ? e.getRootNode()
    : e.nodeType === 9
    ? e
    : e.ownerDocument;
}
var Sn = ee.d;
ee.d = { f: yx, r: bx, D: xx, C: wx, L: Sx, m: Ax, X: Nx, S: Ex, M: jx };
function yx() {
  var e = Sn.f(),
    t = po();
  return e || t;
}
function bx(e) {
  var t = ni(e);
  t !== null && t.tag === 5 && t.type === "form" ? Kp(t) : Sn.r(e);
}
var ii = typeof document > "u" ? null : document;
function t0(e, t, n) {
  var a = ii;
  if (a && typeof t == "string" && t) {
    var l = wt(t);
    (l = 'link[rel="' + e + '"][href="' + l + '"]'),
      typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
      gh.has(l) ||
        (gh.add(l),
        (e = { rel: e, crossOrigin: n, href: t }),
        a.querySelector(l) === null &&
          ((t = a.createElement("link")),
          Ye(t, "link", e),
          _e(t),
          a.head.appendChild(t)));
  }
}
function xx(e) {
  Sn.D(e), t0("dns-prefetch", e, null);
}
function wx(e, t) {
  Sn.C(e, t), t0("preconnect", e, t);
}
function Sx(e, t, n) {
  Sn.L(e, t, n);
  var a = ii;
  if (a && e && t) {
    var l = 'link[rel="preload"][as="' + wt(t) + '"]';
    t === "image" && n && n.imageSrcSet
      ? ((l += '[imagesrcset="' + wt(n.imageSrcSet) + '"]'),
        typeof n.imageSizes == "string" &&
          (l += '[imagesizes="' + wt(n.imageSizes) + '"]'))
      : (l += '[href="' + wt(e) + '"]');
    var i = l;
    switch (t) {
      case "style":
        i = $l(e);
        break;
      case "script":
        i = si(e);
    }
    Nt.has(i) ||
      ((e = de(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t,
        },
        n
      )),
      Nt.set(i, e),
      a.querySelector(l) !== null ||
        (t === "style" && a.querySelector(Ts(i))) ||
        (t === "script" && a.querySelector(Cs(i))) ||
        ((t = a.createElement("link")),
        Ye(t, "link", e),
        _e(t),
        a.head.appendChild(t)));
  }
}
function Ax(e, t) {
  Sn.m(e, t);
  var n = ii;
  if (n && e) {
    var a = t && typeof t.as == "string" ? t.as : "script",
      l = 'link[rel="modulepreload"][as="' + wt(a) + '"][href="' + wt(e) + '"]',
      i = l;
    switch (a) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        i = si(e);
    }
    if (
      !Nt.has(i) &&
      ((e = de({ rel: "modulepreload", href: e }, t)),
      Nt.set(i, e),
      n.querySelector(l) === null)
    ) {
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (n.querySelector(Cs(i))) return;
      }
      (a = n.createElement("link")),
        Ye(a, "link", e),
        _e(a),
        n.head.appendChild(a);
    }
  }
}
function Ex(e, t, n) {
  Sn.S(e, t, n);
  var a = ii;
  if (a && e) {
    var l = Al(a).hoistableStyles,
      i = $l(e);
    t = t || "default";
    var s = l.get(i);
    if (!s) {
      var r = { loading: 0, preload: null };
      if ((s = a.querySelector(Ts(i)))) r.loading = 5;
      else {
        (e = de({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
          (n = Nt.get(i)) && Ef(e, n);
        var o = (s = a.createElement("link"));
        _e(o),
          Ye(o, "link", e),
          (o._p = new Promise(function (c, d) {
            (o.onload = c), (o.onerror = d);
          })),
          o.addEventListener("load", function () {
            r.loading |= 1;
          }),
          o.addEventListener("error", function () {
            r.loading |= 2;
          }),
          (r.loading |= 4),
          dr(s, t, a);
      }
      (s = { type: "stylesheet", instance: s, count: 1, state: r }),
        l.set(i, s);
    }
  }
}
function Nx(e, t) {
  Sn.X(e, t);
  var n = ii;
  if (n && e) {
    var a = Al(n).hoistableScripts,
      l = si(e),
      i = a.get(l);
    i ||
      ((i = n.querySelector(Cs(l))),
      i ||
        ((e = de({ src: e, async: !0 }, t)),
        (t = Nt.get(l)) && Nf(e, t),
        (i = n.createElement("script")),
        _e(i),
        Ye(i, "link", e),
        n.head.appendChild(i)),
      (i = { type: "script", instance: i, count: 1, state: null }),
      a.set(l, i));
  }
}
function jx(e, t) {
  Sn.M(e, t);
  var n = ii;
  if (n && e) {
    var a = Al(n).hoistableScripts,
      l = si(e),
      i = a.get(l);
    i ||
      ((i = n.querySelector(Cs(l))),
      i ||
        ((e = de({ src: e, async: !0, type: "module" }, t)),
        (t = Nt.get(l)) && Nf(e, t),
        (i = n.createElement("script")),
        _e(i),
        Ye(i, "link", e),
        n.head.appendChild(i)),
      (i = { type: "script", instance: i, count: 1, state: null }),
      a.set(l, i));
  }
}
function vh(e, t, n, a) {
  var l = (l = Wn.current) ? Qr(l) : null;
  if (!l) throw Error(j(446));
  switch (e) {
    case "meta":
    case "title":
      return null;
    case "style":
      return typeof n.precedence == "string" && typeof n.href == "string"
        ? ((t = $l(n.href)),
          (n = Al(l).hoistableStyles),
          (a = n.get(t)),
          a ||
            ((a = { type: "style", instance: null, count: 0, state: null }),
            n.set(t, a)),
          a)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        n.rel === "stylesheet" &&
        typeof n.href == "string" &&
        typeof n.precedence == "string"
      ) {
        e = $l(n.href);
        var i = Al(l).hoistableStyles,
          s = i.get(e);
        if (
          (s ||
            ((l = l.ownerDocument || l),
            (s = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            i.set(e, s),
            (i = l.querySelector(Ts(e))) &&
              !i._p &&
              ((s.instance = i), (s.state.loading = 5)),
            Nt.has(e) ||
              ((n = {
                rel: "preload",
                as: "style",
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy,
              }),
              Nt.set(e, n),
              i || Tx(l, e, n, s.state))),
          t && a === null)
        )
          throw Error(j(528, ""));
        return s;
      }
      if (t && a !== null) throw Error(j(529, ""));
      return null;
    case "script":
      return (
        (t = n.async),
        (n = n.src),
        typeof n == "string" &&
        t &&
        typeof t != "function" &&
        typeof t != "symbol"
          ? ((t = si(n)),
            (n = Al(l).hoistableScripts),
            (a = n.get(t)),
            a ||
              ((a = { type: "script", instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null }
      );
    default:
      throw Error(j(444, e));
  }
}
function $l(e) {
  return 'href="' + wt(e) + '"';
}
function Ts(e) {
  return 'link[rel="stylesheet"][' + e + "]";
}
function n0(e) {
  return de({}, e, { "data-precedence": e.precedence, precedence: null });
}
function Tx(e, t, n, a) {
  e.querySelector('link[rel="preload"][as="style"][' + t + "]")
    ? (a.loading = 1)
    : ((t = e.createElement("link")),
      (a.preload = t),
      t.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (a.loading |= 2);
      }),
      Ye(t, "link", n),
      _e(t),
      e.head.appendChild(t));
}
function si(e) {
  return '[src="' + wt(e) + '"]';
}
function Cs(e) {
  return "script[async]" + e;
}
function yh(e, t, n) {
  if ((t.count++, t.instance === null))
    switch (t.type) {
      case "style":
        var a = e.querySelector('style[data-href~="' + wt(n.href) + '"]');
        if (a) return (t.instance = a), _e(a), a;
        var l = de({}, n, {
          "data-href": n.href,
          "data-precedence": n.precedence,
          href: null,
          precedence: null,
        });
        return (
          (a = (e.ownerDocument || e).createElement("style")),
          _e(a),
          Ye(a, "style", l),
          dr(a, n.precedence, e),
          (t.instance = a)
        );
      case "stylesheet":
        l = $l(n.href);
        var i = e.querySelector(Ts(l));
        if (i) return (t.state.loading |= 4), (t.instance = i), _e(i), i;
        (a = n0(n)),
          (l = Nt.get(l)) && Ef(a, l),
          (i = (e.ownerDocument || e).createElement("link")),
          _e(i);
        var s = i;
        return (
          (s._p = new Promise(function (r, o) {
            (s.onload = r), (s.onerror = o);
          })),
          Ye(i, "link", a),
          (t.state.loading |= 4),
          dr(i, n.precedence, e),
          (t.instance = i)
        );
      case "script":
        return (
          (i = si(n.src)),
          (l = e.querySelector(Cs(i)))
            ? ((t.instance = l), _e(l), l)
            : ((a = n),
              (l = Nt.get(i)) && ((a = de({}, n)), Nf(a, l)),
              (e = e.ownerDocument || e),
              (l = e.createElement("script")),
              _e(l),
              Ye(l, "link", a),
              e.head.appendChild(l),
              (t.instance = l))
        );
      case "void":
        return null;
      default:
        throw Error(j(443, t.type));
    }
  else
    t.type === "stylesheet" &&
      !(t.state.loading & 4) &&
      ((a = t.instance), (t.state.loading |= 4), dr(a, n.precedence, e));
  return t.instance;
}
function dr(e, t, n) {
  for (
    var a = n.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      l = a.length ? a[a.length - 1] : null,
      i = l,
      s = 0;
    s < a.length;
    s++
  ) {
    var r = a[s];
    if (r.dataset.precedence === t) i = r;
    else if (i !== l) break;
  }
  i
    ? i.parentNode.insertBefore(e, i.nextSibling)
    : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
}
function Ef(e, t) {
  e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.title == null && (e.title = t.title);
}
function Nf(e, t) {
  e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.integrity == null && (e.integrity = t.integrity);
}
var hr = null;
function bh(e, t, n) {
  if (hr === null) {
    var a = new Map(),
      l = (hr = new Map());
    l.set(n, a);
  } else (l = hr), (a = l.get(n)), a || ((a = new Map()), l.set(n, a));
  if (a.has(e)) return a;
  for (
    a.set(e, null), n = n.getElementsByTagName(e), l = 0;
    l < n.length;
    l++
  ) {
    var i = n[l];
    if (
      !(
        i[vs] ||
        i[Qe] ||
        (e === "link" && i.getAttribute("rel") === "stylesheet")
      ) &&
      i.namespaceURI !== "http://www.w3.org/2000/svg"
    ) {
      var s = i.getAttribute(t) || "";
      s = e + s;
      var r = a.get(s);
      r ? r.push(i) : a.set(s, [i]);
    }
  }
  return a;
}
function xh(e, t, n) {
  (e = e.ownerDocument || e),
    e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
}
function Cx(e, t, n) {
  if (n === 1 || t.itemProp != null) return !1;
  switch (e) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (
        typeof t.precedence != "string" ||
        typeof t.href != "string" ||
        t.href === ""
      )
        break;
      return !0;
    case "link":
      if (
        typeof t.rel != "string" ||
        typeof t.href != "string" ||
        t.href === "" ||
        t.onLoad ||
        t.onError
      )
        break;
      switch (t.rel) {
        case "stylesheet":
          return (e = t.disabled), typeof t.precedence == "string" && e == null;
        default:
          return !0;
      }
    case "script":
      if (
        t.async &&
        typeof t.async != "function" &&
        typeof t.async != "symbol" &&
        !t.onLoad &&
        !t.onError &&
        t.src &&
        typeof t.src == "string"
      )
        return !0;
  }
  return !1;
}
function a0(e) {
  return !(e.type === "stylesheet" && !(e.state.loading & 3));
}
var Ii = null;
function Ox() {}
function Mx(e, t, n) {
  if (Ii === null) throw Error(j(475));
  var a = Ii;
  if (
    t.type === "stylesheet" &&
    (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
    !(t.state.loading & 4)
  ) {
    if (t.instance === null) {
      var l = $l(n.href),
        i = e.querySelector(Ts(l));
      if (i) {
        (e = i._p),
          e !== null &&
            typeof e == "object" &&
            typeof e.then == "function" &&
            (a.count++, (a = Vr.bind(a)), e.then(a, a)),
          (t.state.loading |= 4),
          (t.instance = i),
          _e(i);
        return;
      }
      (i = e.ownerDocument || e),
        (n = n0(n)),
        (l = Nt.get(l)) && Ef(n, l),
        (i = i.createElement("link")),
        _e(i);
      var s = i;
      (s._p = new Promise(function (r, o) {
        (s.onload = r), (s.onerror = o);
      })),
        Ye(i, "link", n),
        (t.instance = i);
    }
    a.stylesheets === null && (a.stylesheets = new Map()),
      a.stylesheets.set(t, e),
      (e = t.state.preload) &&
        !(t.state.loading & 3) &&
        (a.count++,
        (t = Vr.bind(a)),
        e.addEventListener("load", t),
        e.addEventListener("error", t));
  }
}
function Rx() {
  if (Ii === null) throw Error(j(475));
  var e = Ii;
  return (
    e.stylesheets && e.count === 0 && mc(e, e.stylesheets),
    0 < e.count
      ? function (t) {
          var n = setTimeout(function () {
            if ((e.stylesheets && mc(e, e.stylesheets), e.unsuspend)) {
              var a = e.unsuspend;
              (e.unsuspend = null), a();
            }
          }, 6e4);
          return (
            (e.unsuspend = t),
            function () {
              (e.unsuspend = null), clearTimeout(n);
            }
          );
        }
      : null
  );
}
function Vr() {
  if ((this.count--, this.count === 0)) {
    if (this.stylesheets) mc(this, this.stylesheets);
    else if (this.unsuspend) {
      var e = this.unsuspend;
      (this.unsuspend = null), e();
    }
  }
}
var Xr = null;
function mc(e, t) {
  (e.stylesheets = null),
    e.unsuspend !== null &&
      (e.count++, (Xr = new Map()), t.forEach(Dx, e), (Xr = null), Vr.call(e));
}
function Dx(e, t) {
  if (!(t.state.loading & 4)) {
    var n = Xr.get(e);
    if (n) var a = n.get(null);
    else {
      (n = new Map()), Xr.set(e, n);
      for (
        var l = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ),
          i = 0;
        i < l.length;
        i++
      ) {
        var s = l[i];
        (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") &&
          (n.set(s.dataset.precedence, s), (a = s));
      }
      a && n.set(null, a);
    }
    (l = t.instance),
      (s = l.getAttribute("data-precedence")),
      (i = n.get(s) || a),
      i === a && n.set(null, l),
      n.set(s, l),
      this.count++,
      (a = Vr.bind(this)),
      l.addEventListener("load", a),
      l.addEventListener("error", a),
      i
        ? i.parentNode.insertBefore(l, i.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e),
          e.insertBefore(l, e.firstChild)),
      (t.state.loading |= 4);
  }
}
var es = {
  $$typeof: un,
  Provider: null,
  Consumer: null,
  _currentValue: Ca,
  _currentValue2: Ca,
  _threadCount: 0,
};
function zx(e, t, n, a, l, i, s, r) {
  (this.tag = 1),
    (this.containerInfo = e),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = Lo(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Lo(0)),
    (this.hiddenUpdates = Lo(null)),
    (this.identifierPrefix = a),
    (this.onUncaughtError = l),
    (this.onCaughtError = i),
    (this.onRecoverableError = s),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = r),
    (this.incompleteTransitions = new Map());
}
function l0(e, t, n, a, l, i, s, r, o, c, d, m) {
  return (
    (e = new zx(e, t, n, s, r, o, c, m)),
    (t = 1),
    i === !0 && (t |= 24),
    (i = ot(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (t = Wc()),
    t.refCount++,
    (e.pooledCache = t),
    t.refCount++,
    (i.memoizedState = { element: a, isDehydrated: n, cache: t }),
    ef(i),
    e
  );
}
function i0(e) {
  return e ? ((e = bl), e) : bl;
}
function s0(e, t, n, a, l, i) {
  (l = i0(l)),
    a.context === null ? (a.context = l) : (a.pendingContext = l),
    (a = In(t)),
    (a.payload = { element: n }),
    (i = i === void 0 ? null : i),
    i !== null && (a.callback = i),
    (n = ea(e, a, t)),
    n !== null && (dt(n, e, t), _i(n, e, t));
}
function wh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function jf(e, t) {
  wh(e, t), (e = e.alternate) && wh(e, t);
}
function r0(e) {
  if (e.tag === 13) {
    var t = ai(e, 67108864);
    t !== null && dt(t, e, 67108864), jf(e, 67108864);
  }
}
var Zr = !0;
function _x(e, t, n, a) {
  var l = H.T;
  H.T = null;
  var i = ee.p;
  try {
    (ee.p = 2), Tf(e, t, n, a);
  } finally {
    (ee.p = i), (H.T = l);
  }
}
function Ux(e, t, n, a) {
  var l = H.T;
  H.T = null;
  var i = ee.p;
  try {
    (ee.p = 8), Tf(e, t, n, a);
  } finally {
    (ee.p = i), (H.T = l);
  }
}
function Tf(e, t, n, a) {
  if (Zr) {
    var l = pc(a);
    if (l === null) pu(e, t, a, Kr, n), Sh(e, a);
    else if (Hx(l, e, t, n, a)) a.stopPropagation();
    else if ((Sh(e, a), t & 4 && -1 < Bx.indexOf(e))) {
      for (; l !== null; ) {
        var i = ni(l);
        if (i !== null)
          switch (i.tag) {
            case 3:
              if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                var s = ba(i.pendingLanes);
                if (s !== 0) {
                  var r = i;
                  for (r.pendingLanes |= 2, r.entangledLanes |= 2; s; ) {
                    var o = 1 << (31 - ct(s));
                    (r.entanglements[1] |= o), (s &= ~o);
                  }
                  Wt(i), !(ae & 6) && ((Hr = Kt() + 500), js(0));
                }
              }
              break;
            case 13:
              (r = ai(i, 2)), r !== null && dt(r, i, 2), po(), jf(i, 2);
          }
        if (((i = pc(a)), i === null && pu(e, t, a, Kr, n), i === l)) break;
        l = i;
      }
      l !== null && a.stopPropagation();
    } else pu(e, t, a, null, n);
  }
}
function pc(e) {
  return (e = kc(e)), Cf(e);
}
var Kr = null;
function Cf(e) {
  if (((Kr = null), (e = hl(e)), e !== null)) {
    var t = hs(e);
    if (t === null) e = null;
    else {
      var n = t.tag;
      if (n === 13) {
        if (((e = Dm(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    }
  }
  return (Kr = e), null;
}
function o0(e) {
  switch (e) {
    case "beforetoggle":
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
    case "toggle":
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
      return 2;
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
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (wy()) {
        case Bm:
          return 2;
        case Hm:
          return 8;
        case wr:
        case Sy:
          return 32;
        case Lm:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var gc = !1,
  aa = null,
  la = null,
  ia = null,
  ts = new Map(),
  ns = new Map(),
  Gn = [],
  Bx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
function Sh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      aa = null;
      break;
    case "dragenter":
    case "dragleave":
      la = null;
      break;
    case "mouseover":
    case "mouseout":
      ia = null;
      break;
    case "pointerover":
    case "pointerout":
      ts.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ns.delete(t.pointerId);
  }
}
function xi(e, t, n, a, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: a,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ni(t)), t !== null && r0(t)),
      e)
    : ((e.eventSystemFlags |= a),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Hx(e, t, n, a, l) {
  switch (t) {
    case "focusin":
      return (aa = xi(aa, e, t, n, a, l)), !0;
    case "dragenter":
      return (la = xi(la, e, t, n, a, l)), !0;
    case "mouseover":
      return (ia = xi(ia, e, t, n, a, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return ts.set(i, xi(ts.get(i) || null, e, t, n, a, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), ns.set(i, xi(ns.get(i) || null, e, t, n, a, l)), !0
      );
  }
  return !1;
}
function u0(e) {
  var t = hl(e.target);
  if (t !== null) {
    var n = hs(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Dm(n)), t !== null)) {
          (e.blockedOn = t),
            My(e.priority, function () {
              if (n.tag === 13) {
                var a = ft();
                a = Lc(a);
                var l = ai(n, a);
                l !== null && dt(l, n, a), jf(n, a);
              }
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
function mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = pc(e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var a = new n.constructor(n.type, n);
      (zu = a), n.target.dispatchEvent(a), (zu = null);
    } else return (t = ni(n)), t !== null && r0(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ah(e, t, n) {
  mr(e) && n.delete(t);
}
function Lx() {
  (gc = !1),
    aa !== null && mr(aa) && (aa = null),
    la !== null && mr(la) && (la = null),
    ia !== null && mr(ia) && (ia = null),
    ts.forEach(Ah),
    ns.forEach(Ah);
}
function Ps(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gc ||
      ((gc = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, Lx)));
}
var Js = null;
function Eh(e) {
  Js !== e &&
    ((Js = e),
    De.unstable_scheduleCallback(De.unstable_NormalPriority, function () {
      Js === e && (Js = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t],
          a = e[t + 1],
          l = e[t + 2];
        if (typeof a != "function") {
          if (Cf(a || n) === null) continue;
          break;
        }
        var i = ni(n);
        i !== null &&
          (e.splice(t, 3),
          (t -= 3),
          Pu(i, { pending: !0, data: l, method: n.method, action: a }, a, l));
      }
    }));
}
function as(e) {
  function t(o) {
    return Ps(o, e);
  }
  aa !== null && Ps(aa, e),
    la !== null && Ps(la, e),
    ia !== null && Ps(ia, e),
    ts.forEach(t),
    ns.forEach(t);
  for (var n = 0; n < Gn.length; n++) {
    var a = Gn[n];
    a.blockedOn === e && (a.blockedOn = null);
  }
  for (; 0 < Gn.length && ((n = Gn[0]), n.blockedOn === null); )
    u0(n), n.blockedOn === null && Gn.shift();
  if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
    for (a = 0; a < n.length; a += 3) {
      var l = n[a],
        i = n[a + 1],
        s = l[tt] || null;
      if (typeof i == "function") s || Eh(n);
      else if (s) {
        var r = null;
        if (i && i.hasAttribute("formAction")) {
          if (((l = i), (s = i[tt] || null))) r = s.formAction;
          else if (Cf(l) !== null) continue;
        } else r = s.action;
        typeof r == "function" ? (n[a + 1] = r) : (n.splice(a, 3), (a -= 3)),
          Eh(n);
      }
    }
}
function Of(e) {
  this._internalRoot = e;
}
bo.prototype.render = Of.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  var n = t.current,
    a = ft();
  s0(n, a, e, t, null, null);
};
bo.prototype.unmount = Of.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    s0(e.current, 2, null, e, null, null), po(), (t[ti] = null);
  }
};
function bo(e) {
  this._internalRoot = e;
}
bo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++);
    Gn.splice(n, 0, e), n === 0 && u0(e);
  }
};
var Nh = Mm.version;
if (Nh !== "19.1.1") throw Error(j(527, Nh, "19.1.1"));
ee.findDOMNode = function (e) {
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (
    (e = my(t)),
    (e = e !== null ? zm(e) : null),
    (e = e === null ? null : e.stateNode),
    e
  );
};
var qx = {
  bundleType: 0,
  version: "19.1.1",
  rendererPackageName: "react-dom",
  currentDispatcherRef: H,
  reconcilerVersion: "19.1.1",
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$s.isDisabled && $s.supportsFiber)
    try {
      (ms = $s.inject(qx)), (ut = $s);
    } catch {}
}
to.createRoot = function (e, t) {
  if (!Rm(e)) throw Error(j(299));
  var n = !1,
    a = "",
    l = lg,
    i = ig,
    s = sg,
    r = null;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
      t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
      t.onCaughtError !== void 0 && (i = t.onCaughtError),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError),
      t.unstable_transitionCallbacks !== void 0 &&
        (r = t.unstable_transitionCallbacks)),
    (t = l0(e, 1, !1, null, null, n, a, l, i, s, r, null)),
    (e[ti] = t.current),
    Af(e),
    new Of(t)
  );
};
to.hydrateRoot = function (e, t, n) {
  if (!Rm(e)) throw Error(j(299));
  var a = !1,
    l = "",
    i = lg,
    s = ig,
    r = sg,
    o = null,
    c = null;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onUncaughtError !== void 0 && (i = n.onUncaughtError),
      n.onCaughtError !== void 0 && (s = n.onCaughtError),
      n.onRecoverableError !== void 0 && (r = n.onRecoverableError),
      n.unstable_transitionCallbacks !== void 0 &&
        (o = n.unstable_transitionCallbacks),
      n.formState !== void 0 && (c = n.formState)),
    (t = l0(e, 1, !0, t, n ?? null, a, l, i, s, r, o, c)),
    (t.context = i0(null)),
    (n = t.current),
    (a = ft()),
    (a = Lc(a)),
    (l = In(a)),
    (l.callback = null),
    ea(n, l, a),
    (n = a),
    (t.current.lanes = n),
    gs(t, n),
    Wt(t),
    (e[ti] = t.current),
    Af(e),
    new bo(t)
  );
};
to.version = "19.1.1";
function c0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0);
    } catch (e) {
      console.error(e);
    }
}
c0(), (vm.exports = to);
var Yx = vm.exports,
  Gx = (e, t, n, a, l, i, s, r) => {
    let o = document.documentElement,
      c = ["light", "dark"];
    function d(f) {
      (Array.isArray(e) ? e : [e]).forEach((S) => {
        let y = S === "class",
          x = y && i ? l.map((p) => i[p] || p) : l;
        y
          ? (o.classList.remove(...x), o.classList.add(i && i[f] ? i[f] : f))
          : o.setAttribute(S, f);
      }),
        m(f);
    }
    function m(f) {
      r && c.includes(f) && (o.style.colorScheme = f);
    }
    function h() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (a) d(a);
    else
      try {
        let f = localStorage.getItem(t) || n,
          S = s && f === "system" ? h() : f;
        d(S);
      } catch {}
  },
  kx = b.createContext(void 0),
  Qx = { setTheme: (e) => {}, themes: [] },
  Vx = () => {
    var e;
    return (e = b.useContext(kx)) != null ? e : Qx;
  };
b.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: a,
    enableColorScheme: l,
    defaultTheme: i,
    value: s,
    themes: r,
    nonce: o,
    scriptProps: c,
  }) => {
    let d = JSON.stringify([n, t, i, e, r, s, a, l]).slice(1, -1);
    return b.createElement("script", {
      ...c,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? o : "",
      dangerouslySetInnerHTML: { __html: `(${Gx.toString()})(${d})` },
    });
  }
);
var Xx = (e) => {
    switch (e) {
      case "success":
        return Fx;
      case "info":
        return Jx;
      case "warning":
        return Px;
      case "error":
        return $x;
      default:
        return null;
    }
  },
  Zx = Array(12).fill(0),
  Kx = ({ visible: e, className: t }) =>
    D.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      D.createElement(
        "div",
        { className: "sonner-spinner" },
        Zx.map((n, a) =>
          D.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${a}`,
          })
        )
      )
    ),
  Fx = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Px = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Jx = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  $x = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    D.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Wx = D.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    D.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    D.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  Ix = () => {
    let [e, t] = D.useState(document.hidden);
    return (
      D.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  vc = 1,
  e1 = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...a } = e,
            l =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : vc++,
            i = this.toasts.find((r) => r.id === l),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(l) && this.dismissedToasts.delete(l),
            i
              ? (this.toasts = this.toasts.map((r) =>
                  r.id === l
                    ? (this.publish({ ...r, ...e, id: l, title: n }),
                      { ...r, ...e, id: l, dismissible: s, title: n })
                    : r
                ))
              : this.addToast({ title: n, ...a, dismissible: s, id: l }),
            l
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let a = e instanceof Promise ? e : e(),
            l = n !== void 0,
            i,
            s = a
              .then(async (o) => {
                if (((i = ["resolve", o]), D.isValidElement(o)))
                  (l = !1), this.create({ id: n, type: "default", message: o });
                else if (n1(o) && !o.ok) {
                  l = !1;
                  let c =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${o.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${o.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  l = !1;
                  let c =
                      typeof t.success == "function"
                        ? await t.success(o)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(o)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: c,
                    description: d,
                  });
                }
              })
              .catch(async (o) => {
                if (((i = ["reject", o]), t.error !== void 0)) {
                  l = !1;
                  let c =
                      typeof t.error == "function" ? await t.error(o) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(o)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: c,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var o;
                l && (this.dismiss(n), (n = void 0)),
                  (o = t.finally) == null || o.call(t);
              }),
            r = () =>
              new Promise((o, c) =>
                s.then(() => (i[0] === "reject" ? c(i[1]) : o(i[1]))).catch(c)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: r }
            : Object.assign(n, { unwrap: r });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || vc++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Ie = new e1(),
  t1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || vc++;
    return Ie.addToast({ title: e, ...t, id: n }), n;
  },
  n1 = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  a1 = t1,
  l1 = () => Ie.toasts,
  i1 = () => Ie.getActiveToasts(),
  s1 = Object.assign(
    a1,
    {
      success: Ie.success,
      info: Ie.info,
      warning: Ie.warning,
      error: Ie.error,
      custom: Ie.custom,
      message: Ie.message,
      promise: Ie.promise,
      dismiss: Ie.dismiss,
      loading: Ie.loading,
    },
    { getHistory: l1, getToasts: i1 }
  );
function r1(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    a = document.createElement("style");
  (a.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(a, n.firstChild)
      : n.appendChild(a),
    a.styleSheet
      ? (a.styleSheet.cssText = e)
      : a.appendChild(document.createTextNode(e));
}
r1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ws(e) {
  return e.label !== void 0;
}
var o1 = 3,
  u1 = "32px",
  c1 = "16px",
  jh = 4e3,
  f1 = 356,
  d1 = 14,
  h1 = 20,
  m1 = 200;
function Ot(...e) {
  return e.filter(Boolean).join(" ");
}
function p1(e) {
  let [t, n] = e.split("-"),
    a = [];
  return t && a.push(t), n && a.push(n), a;
}
var g1 = (e) => {
  var t, n, a, l, i, s, r, o, c, d, m;
  let {
      invert: h,
      toast: f,
      unstyled: S,
      interacting: y,
      setHeights: x,
      visibleToasts: p,
      heights: g,
      index: v,
      toasts: w,
      expanded: A,
      removeToast: T,
      defaultRichColors: E,
      closeButton: O,
      style: U,
      cancelButtonStyle: z,
      actionButtonStyle: k,
      className: B = "",
      descriptionClassName: te = "",
      duration: K,
      position: ue,
      gap: C,
      loadingIcon: _,
      expandByDefault: M,
      classNames: R,
      icons: L,
      closeButtonAriaLabel: ye = "Close toast",
      pauseWhenPageIsHidden: F,
    } = e,
    [W, J] = D.useState(null),
    [Ee, An] = D.useState(null),
    [ce, Wa] = D.useState(!1),
    [En, pa] = D.useState(!1),
    [Nn, Ia] = D.useState(!1),
    [jn, zs] = D.useState(!1),
    [Ro, _s] = D.useState(!1),
    [Do, fi] = D.useState(0),
    [el, Ff] = D.useState(0),
    di = D.useRef(f.duration || K || jh),
    Pf = D.useRef(null),
    ga = D.useRef(null),
    _v = v === 0,
    Uv = v + 1 <= p,
    pt = f.type,
    tl = f.dismissible !== !1,
    Bv = f.className || "",
    Hv = f.descriptionClassName || "",
    Us = D.useMemo(
      () => g.findIndex((q) => q.toastId === f.id) || 0,
      [g, f.id]
    ),
    Lv = D.useMemo(() => {
      var q;
      return (q = f.closeButton) != null ? q : O;
    }, [f.closeButton, O]),
    Jf = D.useMemo(() => f.duration || K || jh, [f.duration, K]),
    zo = D.useRef(0),
    nl = D.useRef(0),
    $f = D.useRef(0),
    al = D.useRef(null),
    [qv, Yv] = ue.split("-"),
    Wf = D.useMemo(
      () => g.reduce((q, le, he) => (he >= Us ? q : q + le.height), 0),
      [g, Us]
    ),
    If = Ix(),
    Gv = f.invert || h,
    _o = pt === "loading";
  (nl.current = D.useMemo(() => Us * C + Wf, [Us, Wf])),
    D.useEffect(() => {
      di.current = Jf;
    }, [Jf]),
    D.useEffect(() => {
      Wa(!0);
    }, []),
    D.useEffect(() => {
      let q = ga.current;
      if (q) {
        let le = q.getBoundingClientRect().height;
        return (
          Ff(le),
          x((he) => [
            { toastId: f.id, height: le, position: f.position },
            ...he,
          ]),
          () => x((he) => he.filter((jt) => jt.toastId !== f.id))
        );
      }
    }, [x, f.id]),
    D.useLayoutEffect(() => {
      if (!ce) return;
      let q = ga.current,
        le = q.style.height;
      q.style.height = "auto";
      let he = q.getBoundingClientRect().height;
      (q.style.height = le),
        Ff(he),
        x((jt) =>
          jt.find((Tt) => Tt.toastId === f.id)
            ? jt.map((Tt) => (Tt.toastId === f.id ? { ...Tt, height: he } : Tt))
            : [{ toastId: f.id, height: he, position: f.position }, ...jt]
        );
    }, [ce, f.title, f.description, x, f.id]);
  let Tn = D.useCallback(() => {
    pa(!0),
      fi(nl.current),
      x((q) => q.filter((le) => le.toastId !== f.id)),
      setTimeout(() => {
        T(f);
      }, m1);
  }, [f, T, x, nl]);
  D.useEffect(() => {
    if (
      (f.promise && pt === "loading") ||
      f.duration === 1 / 0 ||
      f.type === "loading"
    )
      return;
    let q;
    return (
      A || y || (F && If)
        ? (() => {
            if ($f.current < zo.current) {
              let le = new Date().getTime() - zo.current;
              di.current = di.current - le;
            }
            $f.current = new Date().getTime();
          })()
        : di.current !== 1 / 0 &&
          ((zo.current = new Date().getTime()),
          (q = setTimeout(() => {
            var le;
            (le = f.onAutoClose) == null || le.call(f, f), Tn();
          }, di.current))),
      () => clearTimeout(q)
    );
  }, [A, y, f, pt, F, If, Tn]),
    D.useEffect(() => {
      f.delete && Tn();
    }, [Tn, f.delete]);
  function kv() {
    var q, le, he;
    return L != null && L.loading
      ? D.createElement(
          "div",
          {
            className: Ot(
              R == null ? void 0 : R.loader,
              (q = f == null ? void 0 : f.classNames) == null
                ? void 0
                : q.loader,
              "sonner-loader"
            ),
            "data-visible": pt === "loading",
          },
          L.loading
        )
      : _
      ? D.createElement(
          "div",
          {
            className: Ot(
              R == null ? void 0 : R.loader,
              (le = f == null ? void 0 : f.classNames) == null
                ? void 0
                : le.loader,
              "sonner-loader"
            ),
            "data-visible": pt === "loading",
          },
          _
        )
      : D.createElement(Kx, {
          className: Ot(
            R == null ? void 0 : R.loader,
            (he = f == null ? void 0 : f.classNames) == null
              ? void 0
              : he.loader
          ),
          visible: pt === "loading",
        });
  }
  return D.createElement(
    "li",
    {
      tabIndex: 0,
      ref: ga,
      className: Ot(
        B,
        Bv,
        R == null ? void 0 : R.toast,
        (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[pt],
        (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[pt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (a = f.richColors) != null ? a : E,
      "data-styled": !(f.jsx || f.unstyled || S),
      "data-mounted": ce,
      "data-promise": !!f.promise,
      "data-swiped": Ro,
      "data-removed": En,
      "data-visible": Uv,
      "data-y-position": qv,
      "data-x-position": Yv,
      "data-index": v,
      "data-front": _v,
      "data-swiping": Nn,
      "data-dismissible": tl,
      "data-type": pt,
      "data-invert": Gv,
      "data-swipe-out": jn,
      "data-swipe-direction": Ee,
      "data-expanded": !!(A || (M && ce)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": w.length - v,
        "--offset": `${En ? Do : nl.current}px`,
        "--initial-height": M ? "auto" : `${el}px`,
        ...U,
        ...f.style,
      },
      onDragEnd: () => {
        Ia(!1), J(null), (al.current = null);
      },
      onPointerDown: (q) => {
        _o ||
          !tl ||
          ((Pf.current = new Date()),
          fi(nl.current),
          q.target.setPointerCapture(q.pointerId),
          q.target.tagName !== "BUTTON" &&
            (Ia(!0), (al.current = { x: q.clientX, y: q.clientY })));
      },
      onPointerUp: () => {
        var q, le, he, jt;
        if (jn || !tl) return;
        al.current = null;
        let Tt = Number(
            ((q = ga.current) == null
              ? void 0
              : q.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Cn = Number(
            ((le = ga.current) == null
              ? void 0
              : le.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          va =
            new Date().getTime() -
            ((he = Pf.current) == null ? void 0 : he.getTime()),
          Ct = W === "x" ? Tt : Cn,
          On = Math.abs(Ct) / va;
        if (Math.abs(Ct) >= h1 || On > 0.11) {
          fi(nl.current),
            (jt = f.onDismiss) == null || jt.call(f, f),
            An(
              W === "x" ? (Tt > 0 ? "right" : "left") : Cn > 0 ? "down" : "up"
            ),
            Tn(),
            zs(!0),
            _s(!1);
          return;
        }
        Ia(!1), J(null);
      },
      onPointerMove: (q) => {
        var le, he, jt, Tt;
        if (
          !al.current ||
          !tl ||
          ((le = window.getSelection()) == null
            ? void 0
            : le.toString().length) > 0
        )
          return;
        let Cn = q.clientY - al.current.y,
          va = q.clientX - al.current.x,
          Ct = (he = e.swipeDirections) != null ? he : p1(ue);
        !W &&
          (Math.abs(va) > 1 || Math.abs(Cn) > 1) &&
          J(Math.abs(va) > Math.abs(Cn) ? "x" : "y");
        let On = { x: 0, y: 0 };
        W === "y"
          ? (Ct.includes("top") || Ct.includes("bottom")) &&
            ((Ct.includes("top") && Cn < 0) ||
              (Ct.includes("bottom") && Cn > 0)) &&
            (On.y = Cn)
          : W === "x" &&
            (Ct.includes("left") || Ct.includes("right")) &&
            ((Ct.includes("left") && va < 0) ||
              (Ct.includes("right") && va > 0)) &&
            (On.x = va),
          (Math.abs(On.x) > 0 || Math.abs(On.y) > 0) && _s(!0),
          (jt = ga.current) == null ||
            jt.style.setProperty("--swipe-amount-x", `${On.x}px`),
          (Tt = ga.current) == null ||
            Tt.style.setProperty("--swipe-amount-y", `${On.y}px`);
      },
    },
    Lv && !f.jsx
      ? D.createElement(
          "button",
          {
            "aria-label": ye,
            "data-disabled": _o,
            "data-close-button": !0,
            onClick:
              _o || !tl
                ? () => {}
                : () => {
                    var q;
                    Tn(), (q = f.onDismiss) == null || q.call(f, f);
                  },
            className: Ot(
              R == null ? void 0 : R.closeButton,
              (l = f == null ? void 0 : f.classNames) == null
                ? void 0
                : l.closeButton
            ),
          },
          (i = L == null ? void 0 : L.close) != null ? i : Wx
        )
      : null,
    f.jsx || b.isValidElement(f.title)
      ? f.jsx
        ? f.jsx
        : typeof f.title == "function"
        ? f.title()
        : f.title
      : D.createElement(
          D.Fragment,
          null,
          pt || f.icon || f.promise
            ? D.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Ot(
                    R == null ? void 0 : R.icon,
                    (s = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                f.promise || (f.type === "loading" && !f.icon)
                  ? f.icon || kv()
                  : null,
                f.type !== "loading"
                  ? f.icon || (L == null ? void 0 : L[pt]) || Xx(pt)
                  : null
              )
            : null,
          D.createElement(
            "div",
            {
              "data-content": "",
              className: Ot(
                R == null ? void 0 : R.content,
                (r = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : r.content
              ),
            },
            D.createElement(
              "div",
              {
                "data-title": "",
                className: Ot(
                  R == null ? void 0 : R.title,
                  (o = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : o.title
                ),
              },
              typeof f.title == "function" ? f.title() : f.title
            ),
            f.description
              ? D.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Ot(
                      te,
                      Hv,
                      R == null ? void 0 : R.description,
                      (c = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : c.description
                    ),
                  },
                  typeof f.description == "function"
                    ? f.description()
                    : f.description
                )
              : null
          ),
          b.isValidElement(f.cancel)
            ? f.cancel
            : f.cancel && Ws(f.cancel)
            ? D.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: f.cancelButtonStyle || z,
                  onClick: (q) => {
                    var le, he;
                    Ws(f.cancel) &&
                      tl &&
                      ((he = (le = f.cancel).onClick) == null || he.call(le, q),
                      Tn());
                  },
                  className: Ot(
                    R == null ? void 0 : R.cancelButton,
                    (d = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : d.cancelButton
                  ),
                },
                f.cancel.label
              )
            : null,
          b.isValidElement(f.action)
            ? f.action
            : f.action && Ws(f.action)
            ? D.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: f.actionButtonStyle || k,
                  onClick: (q) => {
                    var le, he;
                    Ws(f.action) &&
                      ((he = (le = f.action).onClick) == null || he.call(le, q),
                      !q.defaultPrevented && Tn());
                  },
                  className: Ot(
                    R == null ? void 0 : R.actionButton,
                    (m = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : m.actionButton
                  ),
                },
                f.action.label
              )
            : null
        )
  );
};
function Th() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function v1(e, t) {
  let n = {};
  return (
    [e, t].forEach((a, l) => {
      let i = l === 1,
        s = i ? "--mobile-offset" : "--offset",
        r = i ? c1 : u1;
      function o(c) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${s}-${d}`] = typeof c == "number" ? `${c}px` : c;
        });
      }
      typeof a == "number" || typeof a == "string"
        ? o(a)
        : typeof a == "object"
        ? ["top", "right", "bottom", "left"].forEach((c) => {
            a[c] === void 0
              ? (n[`${s}-${c}`] = r)
              : (n[`${s}-${c}`] = typeof a[c] == "number" ? `${a[c]}px` : a[c]);
          })
        : o(r);
    }),
    n
  );
}
var y1 = b.forwardRef(function (e, t) {
  let {
      invert: n,
      position: a = "bottom-right",
      hotkey: l = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: r,
      offset: o,
      mobileOffset: c,
      theme: d = "light",
      richColors: m,
      duration: h,
      style: f,
      visibleToasts: S = o1,
      toastOptions: y,
      dir: x = Th(),
      gap: p = d1,
      loadingIcon: g,
      icons: v,
      containerAriaLabel: w = "Notifications",
      pauseWhenPageIsHidden: A,
    } = e,
    [T, E] = D.useState([]),
    O = D.useMemo(
      () =>
        Array.from(
          new Set(
            [a].concat(T.filter((F) => F.position).map((F) => F.position))
          )
        ),
      [T, a]
    ),
    [U, z] = D.useState([]),
    [k, B] = D.useState(!1),
    [te, K] = D.useState(!1),
    [ue, C] = D.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    _ = D.useRef(null),
    M = l.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = D.useRef(null),
    L = D.useRef(!1),
    ye = D.useCallback((F) => {
      E((W) => {
        var J;
        return (
          ((J = W.find((Ee) => Ee.id === F.id)) != null && J.delete) ||
            Ie.dismiss(F.id),
          W.filter(({ id: Ee }) => Ee !== F.id)
        );
      });
    }, []);
  return (
    D.useEffect(
      () =>
        Ie.subscribe((F) => {
          if (F.dismiss) {
            E((W) => W.map((J) => (J.id === F.id ? { ...J, delete: !0 } : J)));
            return;
          }
          setTimeout(() => {
            dy.flushSync(() => {
              E((W) => {
                let J = W.findIndex((Ee) => Ee.id === F.id);
                return J !== -1
                  ? [...W.slice(0, J), { ...W[J], ...F }, ...W.slice(J + 1)]
                  : [F, ...W];
              });
            });
          });
        }),
      []
    ),
    D.useEffect(() => {
      if (d !== "system") {
        C(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? C("dark")
            : C("light")),
        typeof window > "u")
      )
        return;
      let F = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        F.addEventListener("change", ({ matches: W }) => {
          C(W ? "dark" : "light");
        });
      } catch {
        F.addListener(({ matches: J }) => {
          try {
            C(J ? "dark" : "light");
          } catch (Ee) {
            console.error(Ee);
          }
        });
      }
    }, [d]),
    D.useEffect(() => {
      T.length <= 1 && B(!1);
    }, [T]),
    D.useEffect(() => {
      let F = (W) => {
        var J, Ee;
        l.every((An) => W[An] || W.code === An) &&
          (B(!0), (J = _.current) == null || J.focus()),
          W.code === "Escape" &&
            (document.activeElement === _.current ||
              ((Ee = _.current) != null &&
                Ee.contains(document.activeElement))) &&
            B(!1);
      };
      return (
        document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
      );
    }, [l]),
    D.useEffect(() => {
      if (_.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (L.current = !1));
        };
    }, [_.current]),
    D.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${w} ${M}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      O.map((F, W) => {
        var J;
        let [Ee, An] = F.split("-");
        return T.length
          ? D.createElement(
              "ol",
              {
                key: F,
                dir: x === "auto" ? Th() : x,
                tabIndex: -1,
                ref: _,
                className: r,
                "data-sonner-toaster": !0,
                "data-theme": ue,
                "data-y-position": Ee,
                "data-lifted": k && T.length > 1 && !i,
                "data-x-position": An,
                style: {
                  "--front-toast-height": `${
                    ((J = U[0]) == null ? void 0 : J.height) || 0
                  }px`,
                  "--width": `${f1}px`,
                  "--gap": `${p}px`,
                  ...f,
                  ...v1(o, c),
                },
                onBlur: (ce) => {
                  L.current &&
                    !ce.currentTarget.contains(ce.relatedTarget) &&
                    ((L.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (ce) => {
                  (ce.target instanceof HTMLElement &&
                    ce.target.dataset.dismissible === "false") ||
                    L.current ||
                    ((L.current = !0), (R.current = ce.relatedTarget));
                },
                onMouseEnter: () => B(!0),
                onMouseMove: () => B(!0),
                onMouseLeave: () => {
                  te || B(!1);
                },
                onDragEnd: () => B(!1),
                onPointerDown: (ce) => {
                  (ce.target instanceof HTMLElement &&
                    ce.target.dataset.dismissible === "false") ||
                    K(!0);
                },
                onPointerUp: () => K(!1),
              },
              T.filter(
                (ce) => (!ce.position && W === 0) || ce.position === F
              ).map((ce, Wa) => {
                var En, pa;
                return D.createElement(g1, {
                  key: ce.id,
                  icons: v,
                  index: Wa,
                  toast: ce,
                  defaultRichColors: m,
                  duration:
                    (En = y == null ? void 0 : y.duration) != null ? En : h,
                  className: y == null ? void 0 : y.className,
                  descriptionClassName:
                    y == null ? void 0 : y.descriptionClassName,
                  invert: n,
                  visibleToasts: S,
                  closeButton:
                    (pa = y == null ? void 0 : y.closeButton) != null ? pa : s,
                  interacting: te,
                  position: F,
                  style: y == null ? void 0 : y.style,
                  unstyled: y == null ? void 0 : y.unstyled,
                  classNames: y == null ? void 0 : y.classNames,
                  cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                  actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                  removeToast: ye,
                  toasts: T.filter((Nn) => Nn.position == ce.position),
                  heights: U.filter((Nn) => Nn.position == ce.position),
                  setHeights: z,
                  expandByDefault: i,
                  gap: p,
                  loadingIcon: g,
                  expanded: k,
                  pauseWhenPageIsHidden: A,
                  swipeDirections: e.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const b1 = ({ ...e }) => {
  const { theme: t = "system" } = Vx();
  return u.jsx(y1, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
function sn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (l) {
    if ((e == null || e(l), n === !1 || !l.defaultPrevented))
      return t == null ? void 0 : t(l);
  };
}
function Ch(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function f0(...e) {
  return (t) => {
    let n = !1;
    const a = e.map((l) => {
      const i = Ch(l, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let l = 0; l < a.length; l++) {
          const i = a[l];
          typeof i == "function" ? i() : Ch(e[l], null);
        }
      };
  };
}
function Va(...e) {
  return b.useCallback(f0(...e), e);
}
function d0(e, t = []) {
  let n = [];
  function a(i, s) {
    const r = b.createContext(s),
      o = n.length;
    n = [...n, s];
    const c = (m) => {
      var p;
      const { scope: h, children: f, ...S } = m,
        y = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[o]) || r,
        x = b.useMemo(() => S, Object.values(S));
      return u.jsx(y.Provider, { value: x, children: f });
    };
    c.displayName = i + "Provider";
    function d(m, h) {
      var y;
      const f = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[o]) || r,
        S = b.useContext(f);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const l = () => {
    const i = n.map((s) => b.createContext(s));
    return function (r) {
      const o = (r == null ? void 0 : r[e]) || i;
      return b.useMemo(() => ({ [`__scope${e}`]: { ...r, [e]: o } }), [r, o]);
    };
  };
  return (l.scopeName = e), [a, x1(l, ...t)];
}
function x1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const a = e.map((l) => ({ useScope: l(), scopeName: l.scopeName }));
    return function (i) {
      const s = a.reduce((r, { useScope: o, scopeName: c }) => {
        const m = o(i)[`__scope${c}`];
        return { ...r, ...m };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function h0(e) {
  const t = S1(e),
    n = b.forwardRef((a, l) => {
      const { children: i, ...s } = a,
        r = b.Children.toArray(i),
        o = r.find(E1);
      if (o) {
        const c = o.props.children,
          d = r.map((m) =>
            m === o
              ? b.Children.count(c) > 1
                ? b.Children.only(null)
                : b.isValidElement(c)
                ? c.props.children
                : null
              : m
          );
        return u.jsx(t, {
          ...s,
          ref: l,
          children: b.isValidElement(c) ? b.cloneElement(c, void 0, d) : null,
        });
      }
      return u.jsx(t, { ...s, ref: l, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var w1 = h0("Slot");
function S1(e) {
  const t = b.forwardRef((n, a) => {
    const { children: l, ...i } = n;
    if (b.isValidElement(l)) {
      const s = j1(l),
        r = N1(i, l.props);
      return (
        l.type !== b.Fragment && (r.ref = a ? f0(a, s) : s),
        b.cloneElement(l, r)
      );
    }
    return b.Children.count(l) > 1 ? b.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var m0 = Symbol("radix.slottable");
function A1(e) {
  const t = ({ children: n }) => u.jsx(u.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = m0), t;
}
function E1(e) {
  return (
    b.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === m0
  );
}
function N1(e, t) {
  const n = { ...t };
  for (const a in t) {
    const l = e[a],
      i = t[a];
    /^on[A-Z]/.test(a)
      ? l && i
        ? (n[a] = (...r) => {
            const o = i(...r);
            return l(...r), o;
          })
        : l && (n[a] = l)
      : a === "style"
      ? (n[a] = { ...l, ...i })
      : a === "className" && (n[a] = [l, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function j1(e) {
  var a, l;
  let t =
      (a = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : a.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var T1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ma = T1.reduce((e, t) => {
    const n = h0(`Primitive.${t}`),
      a = b.forwardRef((l, i) => {
        const { asChild: s, ...r } = l,
          o = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(o, { ...r, ref: i })
        );
      });
    return (a.displayName = `Primitive.${t}`), { ...e, [t]: a };
  }, {});
function C1(e, t) {
  e && ao.flushSync(() => e.dispatchEvent(t));
}
function xo(e) {
  const t = b.useRef(e);
  return (
    b.useEffect(() => {
      t.current = e;
    }),
    b.useMemo(
      () =>
        (...n) => {
          var a;
          return (a = t.current) == null ? void 0 : a.call(t, ...n);
        },
      []
    )
  );
}
function O1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xo(e);
  b.useEffect(() => {
    const a = (l) => {
      l.key === "Escape" && n(l);
    };
    return (
      t.addEventListener("keydown", a, { capture: !0 }),
      () => t.removeEventListener("keydown", a, { capture: !0 })
    );
  }, [n, t]);
}
var M1 = "DismissableLayer",
  yc = "dismissableLayer.update",
  R1 = "dismissableLayer.pointerDownOutside",
  D1 = "dismissableLayer.focusOutside",
  Oh,
  p0 = b.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  g0 = b.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: r,
        ...o
      } = e,
      c = b.useContext(p0),
      [d, m] = b.useState(null),
      h =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, f] = b.useState({}),
      S = Va(t, (E) => m(E)),
      y = Array.from(c.layers),
      [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = y.indexOf(x),
      g = d ? y.indexOf(d) : -1,
      v = c.layersWithOutsidePointerEventsDisabled.size > 0,
      w = g >= p,
      A = U1((E) => {
        const O = E.target,
          U = [...c.branches].some((z) => z.contains(O));
        !w ||
          U ||
          (l == null || l(E),
          s == null || s(E),
          E.defaultPrevented || r == null || r());
      }, h),
      T = B1((E) => {
        const O = E.target;
        [...c.branches].some((z) => z.contains(O)) ||
          (i == null || i(E),
          s == null || s(E),
          E.defaultPrevented || r == null || r());
      }, h);
    return (
      O1((E) => {
        g === c.layers.size - 1 &&
          (a == null || a(E),
          !E.defaultPrevented && r && (E.preventDefault(), r()));
      }, h),
      b.useEffect(() => {
        if (d)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Oh = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            Mh(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Oh);
            }
          );
      }, [d, h, n, c]),
      b.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            Mh());
        },
        [d, c]
      ),
      b.useEffect(() => {
        const E = () => f({});
        return (
          document.addEventListener(yc, E),
          () => document.removeEventListener(yc, E)
        );
      }, []),
      u.jsx(ma.div, {
        ...o,
        ref: S,
        style: {
          pointerEvents: v ? (w ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: sn(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: sn(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: sn(
          e.onPointerDownCapture,
          A.onPointerDownCapture
        ),
      })
    );
  });
g0.displayName = M1;
var z1 = "DismissableLayerBranch",
  _1 = b.forwardRef((e, t) => {
    const n = b.useContext(p0),
      a = b.useRef(null),
      l = Va(t, a);
    return (
      b.useEffect(() => {
        const i = a.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      u.jsx(ma.div, { ...e, ref: l })
    );
  });
_1.displayName = z1;
function U1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xo(e),
    a = b.useRef(!1),
    l = b.useRef(() => {});
  return (
    b.useEffect(() => {
      const i = (r) => {
          if (r.target && !a.current) {
            let o = function () {
              v0(R1, n, c, { discrete: !0 });
            };
            const c = { originalEvent: r };
            r.pointerType === "touch"
              ? (t.removeEventListener("click", l.current),
                (l.current = o),
                t.addEventListener("click", l.current, { once: !0 }))
              : o();
          } else t.removeEventListener("click", l.current);
          a.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", l.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (a.current = !0) }
  );
}
function B1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = xo(e),
    a = b.useRef(!1);
  return (
    b.useEffect(() => {
      const l = (i) => {
        i.target &&
          !a.current &&
          v0(D1, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", l),
        () => t.removeEventListener("focusin", l)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (a.current = !0),
      onBlurCapture: () => (a.current = !1),
    }
  );
}
function Mh() {
  const e = new CustomEvent(yc);
  document.dispatchEvent(e);
}
function v0(e, t, n, { discrete: a }) {
  const l = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && l.addEventListener(e, t, { once: !0 }),
    a ? C1(l, i) : l.dispatchEvent(i);
}
var ls =
  globalThis != null && globalThis.document ? b.useLayoutEffect : () => {};
const H1 = ["top", "right", "bottom", "left"],
  ca = Math.min,
  rt = Math.max,
  Fr = Math.round,
  Is = Math.floor,
  Pt = (e) => ({ x: e, y: e }),
  L1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  q1 = { start: "end", end: "start" };
function bc(e, t, n) {
  return rt(e, ca(t, n));
}
function xn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wn(e) {
  return e.split("-")[0];
}
function ri(e) {
  return e.split("-")[1];
}
function Mf(e) {
  return e === "x" ? "y" : "x";
}
function Rf(e) {
  return e === "y" ? "height" : "width";
}
const Y1 = new Set(["top", "bottom"]);
function Xt(e) {
  return Y1.has(wn(e)) ? "y" : "x";
}
function Df(e) {
  return Mf(Xt(e));
}
function G1(e, t, n) {
  n === void 0 && (n = !1);
  const a = ri(e),
    l = Df(e),
    i = Rf(l);
  let s =
    l === "x"
      ? a === (n ? "end" : "start")
        ? "right"
        : "left"
      : a === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = Pr(s)), [s, Pr(s)];
}
function k1(e) {
  const t = Pr(e);
  return [xc(e), t, xc(t)];
}
function xc(e) {
  return e.replace(/start|end/g, (t) => q1[t]);
}
const Rh = ["left", "right"],
  Dh = ["right", "left"],
  Q1 = ["top", "bottom"],
  V1 = ["bottom", "top"];
function X1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Dh : Rh) : t ? Rh : Dh;
    case "left":
    case "right":
      return t ? Q1 : V1;
    default:
      return [];
  }
}
function Z1(e, t, n, a) {
  const l = ri(e);
  let i = X1(wn(e), n === "start", a);
  return (
    l && ((i = i.map((s) => s + "-" + l)), t && (i = i.concat(i.map(xc)))), i
  );
}
function Pr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => L1[t]);
}
function K1(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function y0(e) {
  return typeof e != "number"
    ? K1(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Jr(e) {
  const { x: t, y: n, width: a, height: l } = e;
  return {
    width: a,
    height: l,
    top: n,
    left: t,
    right: t + a,
    bottom: n + l,
    x: t,
    y: n,
  };
}
function zh(e, t, n) {
  let { reference: a, floating: l } = e;
  const i = Xt(t),
    s = Df(t),
    r = Rf(s),
    o = wn(t),
    c = i === "y",
    d = a.x + a.width / 2 - l.width / 2,
    m = a.y + a.height / 2 - l.height / 2,
    h = a[r] / 2 - l[r] / 2;
  let f;
  switch (o) {
    case "top":
      f = { x: d, y: a.y - l.height };
      break;
    case "bottom":
      f = { x: d, y: a.y + a.height };
      break;
    case "right":
      f = { x: a.x + a.width, y: m };
      break;
    case "left":
      f = { x: a.x - l.width, y: m };
      break;
    default:
      f = { x: a.x, y: a.y };
  }
  switch (ri(t)) {
    case "start":
      f[s] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      f[s] += h * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const F1 = async (e, t, n) => {
  const {
      placement: a = "bottom",
      strategy: l = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    r = i.filter(Boolean),
    o = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: l }),
    { x: d, y: m } = zh(c, a, o),
    h = a,
    f = {},
    S = 0;
  for (let y = 0; y < r.length; y++) {
    const { name: x, fn: p } = r[y],
      {
        x: g,
        y: v,
        data: w,
        reset: A,
      } = await p({
        x: d,
        y: m,
        initialPlacement: a,
        placement: h,
        strategy: l,
        middlewareData: f,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = g ?? d),
      (m = v ?? m),
      (f = { ...f, [x]: { ...f[x], ...w } }),
      A &&
        S <= 50 &&
        (S++,
        typeof A == "object" &&
          (A.placement && (h = A.placement),
          A.rects &&
            (c =
              A.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: l,
                  })
                : A.rects),
          ({ x: d, y: m } = zh(c, h, o))),
        (y = -1));
  }
  return { x: d, y: m, placement: h, strategy: l, middlewareData: f };
};
async function is(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: a, y: l, platform: i, rects: s, elements: r, strategy: o } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: m = "floating",
      altBoundary: h = !1,
      padding: f = 0,
    } = xn(t, e),
    S = y0(f),
    x = r[h ? (m === "floating" ? "reference" : "floating") : m],
    p = Jr(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(r.floating))),
        boundary: c,
        rootBoundary: d,
        strategy: o,
      })
    ),
    g =
      m === "floating"
        ? { x: a, y: l, width: s.floating.width, height: s.floating.height }
        : s.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(r.floating)),
    w = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    A = Jr(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: r,
            rect: g,
            offsetParent: v,
            strategy: o,
          })
        : g
    );
  return {
    top: (p.top - A.top + S.top) / w.y,
    bottom: (A.bottom - p.bottom + S.bottom) / w.y,
    left: (p.left - A.left + S.left) / w.x,
    right: (A.right - p.right + S.right) / w.x,
  };
}
const P1 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: a,
          placement: l,
          rects: i,
          platform: s,
          elements: r,
          middlewareData: o,
        } = t,
        { element: c, padding: d = 0 } = xn(e, t) || {};
      if (c == null) return {};
      const m = y0(d),
        h = { x: n, y: a },
        f = Df(l),
        S = Rf(f),
        y = await s.getDimensions(c),
        x = f === "y",
        p = x ? "top" : "left",
        g = x ? "bottom" : "right",
        v = x ? "clientHeight" : "clientWidth",
        w = i.reference[S] + i.reference[f] - h[f] - i.floating[S],
        A = h[f] - i.reference[f],
        T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let E = T ? T[v] : 0;
      (!E || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
        (E = r.floating[v] || i.floating[S]);
      const O = w / 2 - A / 2,
        U = E / 2 - y[S] / 2 - 1,
        z = ca(m[p], U),
        k = ca(m[g], U),
        B = z,
        te = E - y[S] - k,
        K = E / 2 - y[S] / 2 + O,
        ue = bc(B, K, te),
        C =
          !o.arrow &&
          ri(l) != null &&
          K !== ue &&
          i.reference[S] / 2 - (K < B ? z : k) - y[S] / 2 < 0,
        _ = C ? (K < B ? K - B : K - te) : 0;
      return {
        [f]: h[f] + _,
        data: {
          [f]: ue,
          centerOffset: K - ue - _,
          ...(C && { alignmentOffset: _ }),
        },
        reset: C,
      };
    },
  }),
  J1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, a;
          const {
              placement: l,
              middlewareData: i,
              rects: s,
              initialPlacement: r,
              platform: o,
              elements: c,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: m = !0,
              fallbackPlacements: h,
              fallbackStrategy: f = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: y = !0,
              ...x
            } = xn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const p = wn(l),
            g = Xt(r),
            v = wn(r) === r,
            w = await (o.isRTL == null ? void 0 : o.isRTL(c.floating)),
            A = h || (v || !y ? [Pr(r)] : k1(r)),
            T = S !== "none";
          !h && T && A.push(...Z1(r, y, S, w));
          const E = [r, ...A],
            O = await is(t, x),
            U = [];
          let z = ((a = i.flip) == null ? void 0 : a.overflows) || [];
          if ((d && U.push(O[p]), m)) {
            const K = G1(l, s, w);
            U.push(O[K[0]], O[K[1]]);
          }
          if (
            ((z = [...z, { placement: l, overflows: U }]),
            !U.every((K) => K <= 0))
          ) {
            var k, B;
            const K = (((k = i.flip) == null ? void 0 : k.index) || 0) + 1,
              ue = E[K];
            if (
              ue &&
              (!(m === "alignment" ? g !== Xt(ue) : !1) ||
                z.every((M) => M.overflows[0] > 0 && Xt(M.placement) === g))
            )
              return {
                data: { index: K, overflows: z },
                reset: { placement: ue },
              };
            let C =
              (B = z
                .filter((_) => _.overflows[0] <= 0)
                .sort((_, M) => _.overflows[1] - M.overflows[1])[0]) == null
                ? void 0
                : B.placement;
            if (!C)
              switch (f) {
                case "bestFit": {
                  var te;
                  const _ =
                    (te = z
                      .filter((M) => {
                        if (T) {
                          const R = Xt(M.placement);
                          return R === g || R === "y";
                        }
                        return !0;
                      })
                      .map((M) => [
                        M.placement,
                        M.overflows
                          .filter((R) => R > 0)
                          .reduce((R, L) => R + L, 0),
                      ])
                      .sort((M, R) => M[1] - R[1])[0]) == null
                      ? void 0
                      : te[0];
                  _ && (C = _);
                  break;
                }
                case "initialPlacement":
                  C = r;
                  break;
              }
            if (l !== C) return { reset: { placement: C } };
          }
          return {};
        },
      }
    );
  };
function _h(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Uh(e) {
  return H1.some((t) => e[t] >= 0);
}
const $1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: a = "referenceHidden", ...l } = xn(e, t);
          switch (a) {
            case "referenceHidden": {
              const i = await is(t, { ...l, elementContext: "reference" }),
                s = _h(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Uh(s) },
              };
            }
            case "escaped": {
              const i = await is(t, { ...l, altBoundary: !0 }),
                s = _h(i, n.floating);
              return { data: { escapedOffsets: s, escaped: Uh(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  b0 = new Set(["left", "top"]);
async function W1(e, t) {
  const { placement: n, platform: a, elements: l } = e,
    i = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)),
    s = wn(n),
    r = ri(n),
    o = Xt(n) === "y",
    c = b0.has(s) ? -1 : 1,
    d = i && o ? -1 : 1,
    m = xn(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: S,
  } = typeof m == "number"
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis,
      };
  return (
    r && typeof S == "number" && (f = r === "end" ? S * -1 : S),
    o ? { x: f * d, y: h * c } : { x: h * c, y: f * d }
  );
}
const I1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, a;
          const { x: l, y: i, placement: s, middlewareData: r } = t,
            o = await W1(t, e);
          return s === ((n = r.offset) == null ? void 0 : n.placement) &&
            (a = r.arrow) != null &&
            a.alignmentOffset
            ? {}
            : { x: l + o.x, y: i + o.y, data: { ...o, placement: s } };
        },
      }
    );
  },
  e2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: a, placement: l } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: r = {
                fn: (x) => {
                  let { x: p, y: g } = x;
                  return { x: p, y: g };
                },
              },
              ...o
            } = xn(e, t),
            c = { x: n, y: a },
            d = await is(t, o),
            m = Xt(wn(l)),
            h = Mf(m);
          let f = c[h],
            S = c[m];
          if (i) {
            const x = h === "y" ? "top" : "left",
              p = h === "y" ? "bottom" : "right",
              g = f + d[x],
              v = f - d[p];
            f = bc(g, f, v);
          }
          if (s) {
            const x = m === "y" ? "top" : "left",
              p = m === "y" ? "bottom" : "right",
              g = S + d[x],
              v = S - d[p];
            S = bc(g, S, v);
          }
          const y = r.fn({ ...t, [h]: f, [m]: S });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - a, enabled: { [h]: i, [m]: s } },
          };
        },
      }
    );
  },
  t2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: a, placement: l, rects: i, middlewareData: s } = t,
            { offset: r = 0, mainAxis: o = !0, crossAxis: c = !0 } = xn(e, t),
            d = { x: n, y: a },
            m = Xt(l),
            h = Mf(m);
          let f = d[h],
            S = d[m];
          const y = xn(r, t),
            x =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (o) {
            const v = h === "y" ? "height" : "width",
              w = i.reference[h] - i.floating[v] + x.mainAxis,
              A = i.reference[h] + i.reference[v] - x.mainAxis;
            f < w ? (f = w) : f > A && (f = A);
          }
          if (c) {
            var p, g;
            const v = h === "y" ? "width" : "height",
              w = b0.has(wn(l)),
              A =
                i.reference[m] -
                i.floating[v] +
                ((w && ((p = s.offset) == null ? void 0 : p[m])) || 0) +
                (w ? 0 : x.crossAxis),
              T =
                i.reference[m] +
                i.reference[v] +
                (w ? 0 : ((g = s.offset) == null ? void 0 : g[m]) || 0) -
                (w ? x.crossAxis : 0);
            S < A ? (S = A) : S > T && (S = T);
          }
          return { [h]: f, [m]: S };
        },
      }
    );
  },
  n2 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, a;
          const { placement: l, rects: i, platform: s, elements: r } = t,
            { apply: o = () => {}, ...c } = xn(e, t),
            d = await is(t, c),
            m = wn(l),
            h = ri(l),
            f = Xt(l) === "y",
            { width: S, height: y } = i.floating;
          let x, p;
          m === "top" || m === "bottom"
            ? ((x = m),
              (p =
                h ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(r.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = m), (x = h === "end" ? "top" : "bottom"));
          const g = y - d.top - d.bottom,
            v = S - d.left - d.right,
            w = ca(y - d[x], g),
            A = ca(S - d[p], v),
            T = !t.middlewareData.shift;
          let E = w,
            O = A;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (O = v),
            (a = t.middlewareData.shift) != null && a.enabled.y && (E = g),
            T && !h)
          ) {
            const z = rt(d.left, 0),
              k = rt(d.right, 0),
              B = rt(d.top, 0),
              te = rt(d.bottom, 0);
            f
              ? (O = S - 2 * (z !== 0 || k !== 0 ? z + k : rt(d.left, d.right)))
              : (E =
                  y - 2 * (B !== 0 || te !== 0 ? B + te : rt(d.top, d.bottom)));
          }
          await o({ ...t, availableWidth: O, availableHeight: E });
          const U = await s.getDimensions(r.floating);
          return S !== U.width || y !== U.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function wo() {
  return typeof window < "u";
}
function oi(e) {
  return x0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ht(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function It(e) {
  var t;
  return (t = (x0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function x0(e) {
  return wo() ? e instanceof Node || e instanceof ht(e).Node : !1;
}
function Ut(e) {
  return wo() ? e instanceof Element || e instanceof ht(e).Element : !1;
}
function Jt(e) {
  return wo() ? e instanceof HTMLElement || e instanceof ht(e).HTMLElement : !1;
}
function Bh(e) {
  return !wo() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ht(e).ShadowRoot;
}
const a2 = new Set(["inline", "contents"]);
function Os(e) {
  const { overflow: t, overflowX: n, overflowY: a, display: l } = Bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + n) && !a2.has(l);
}
const l2 = new Set(["table", "td", "th"]);
function i2(e) {
  return l2.has(oi(e));
}
const s2 = [":popover-open", ":modal"];
function So(e) {
  return s2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const r2 = ["transform", "translate", "scale", "rotate", "perspective"],
  o2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  u2 = ["paint", "layout", "strict", "content"];
function zf(e) {
  const t = _f(),
    n = Ut(e) ? Bt(e) : e;
  return (
    r2.some((a) => (n[a] ? n[a] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    o2.some((a) => (n.willChange || "").includes(a)) ||
    u2.some((a) => (n.contain || "").includes(a))
  );
}
function c2(e) {
  let t = fa(e);
  for (; Jt(t) && !Wl(t); ) {
    if (zf(t)) return t;
    if (So(t)) return null;
    t = fa(t);
  }
  return null;
}
function _f() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const f2 = new Set(["html", "body", "#document"]);
function Wl(e) {
  return f2.has(oi(e));
}
function Bt(e) {
  return ht(e).getComputedStyle(e);
}
function Ao(e) {
  return Ut(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function fa(e) {
  if (oi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Bh(e) && e.host) || It(e);
  return Bh(t) ? t.host : t;
}
function w0(e) {
  const t = fa(e);
  return Wl(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Jt(t) && Os(t)
    ? t
    : w0(t);
}
function ss(e, t, n) {
  var a;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const l = w0(e),
    i = l === ((a = e.ownerDocument) == null ? void 0 : a.body),
    s = ht(l);
  if (i) {
    const r = wc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Os(l) ? l : [],
      r && n ? ss(r) : []
    );
  }
  return t.concat(l, ss(l, [], n));
}
function wc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function S0(e) {
  const t = Bt(e);
  let n = parseFloat(t.width) || 0,
    a = parseFloat(t.height) || 0;
  const l = Jt(e),
    i = l ? e.offsetWidth : n,
    s = l ? e.offsetHeight : a,
    r = Fr(n) !== i || Fr(a) !== s;
  return r && ((n = i), (a = s)), { width: n, height: a, $: r };
}
function Uf(e) {
  return Ut(e) ? e : e.contextElement;
}
function Rl(e) {
  const t = Uf(e);
  if (!Jt(t)) return Pt(1);
  const n = t.getBoundingClientRect(),
    { width: a, height: l, $: i } = S0(t);
  let s = (i ? Fr(n.width) : n.width) / a,
    r = (i ? Fr(n.height) : n.height) / l;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!r || !Number.isFinite(r)) && (r = 1),
    { x: s, y: r }
  );
}
const d2 = Pt(0);
function A0(e) {
  const t = ht(e);
  return !_f() || !t.visualViewport
    ? d2
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function h2(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ht(e)) ? !1 : t;
}
function qa(e, t, n, a) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const l = e.getBoundingClientRect(),
    i = Uf(e);
  let s = Pt(1);
  t && (a ? Ut(a) && (s = Rl(a)) : (s = Rl(e)));
  const r = h2(i, n, a) ? A0(i) : Pt(0);
  let o = (l.left + r.x) / s.x,
    c = (l.top + r.y) / s.y,
    d = l.width / s.x,
    m = l.height / s.y;
  if (i) {
    const h = ht(i),
      f = a && Ut(a) ? ht(a) : a;
    let S = h,
      y = wc(S);
    for (; y && a && f !== S; ) {
      const x = Rl(y),
        p = y.getBoundingClientRect(),
        g = Bt(y),
        v = p.left + (y.clientLeft + parseFloat(g.paddingLeft)) * x.x,
        w = p.top + (y.clientTop + parseFloat(g.paddingTop)) * x.y;
      (o *= x.x),
        (c *= x.y),
        (d *= x.x),
        (m *= x.y),
        (o += v),
        (c += w),
        (S = ht(y)),
        (y = wc(S));
    }
  }
  return Jr({ width: d, height: m, x: o, y: c });
}
function Bf(e, t) {
  const n = Ao(e).scrollLeft;
  return t ? t.left + n : qa(It(e)).left + n;
}
function E0(e, t, n) {
  n === void 0 && (n = !1);
  const a = e.getBoundingClientRect(),
    l = a.left + t.scrollLeft - (n ? 0 : Bf(e, a)),
    i = a.top + t.scrollTop;
  return { x: l, y: i };
}
function m2(e) {
  let { elements: t, rect: n, offsetParent: a, strategy: l } = e;
  const i = l === "fixed",
    s = It(a),
    r = t ? So(t.floating) : !1;
  if (a === s || (r && i)) return n;
  let o = { scrollLeft: 0, scrollTop: 0 },
    c = Pt(1);
  const d = Pt(0),
    m = Jt(a);
  if (
    (m || (!m && !i)) &&
    ((oi(a) !== "body" || Os(s)) && (o = Ao(a)), Jt(a))
  ) {
    const f = qa(a);
    (c = Rl(a)), (d.x = f.x + a.clientLeft), (d.y = f.y + a.clientTop);
  }
  const h = s && !m && !i ? E0(s, o, !0) : Pt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - o.scrollLeft * c.x + d.x + h.x,
    y: n.y * c.y - o.scrollTop * c.y + d.y + h.y,
  };
}
function p2(e) {
  return Array.from(e.getClientRects());
}
function g2(e) {
  const t = It(e),
    n = Ao(e),
    a = e.ownerDocument.body,
    l = rt(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth),
    i = rt(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -n.scrollLeft + Bf(e);
  const r = -n.scrollTop;
  return (
    Bt(a).direction === "rtl" && (s += rt(t.clientWidth, a.clientWidth) - l),
    { width: l, height: i, x: s, y: r }
  );
}
function v2(e, t) {
  const n = ht(e),
    a = It(e),
    l = n.visualViewport;
  let i = a.clientWidth,
    s = a.clientHeight,
    r = 0,
    o = 0;
  if (l) {
    (i = l.width), (s = l.height);
    const c = _f();
    (!c || (c && t === "fixed")) && ((r = l.offsetLeft), (o = l.offsetTop));
  }
  return { width: i, height: s, x: r, y: o };
}
const y2 = new Set(["absolute", "fixed"]);
function b2(e, t) {
  const n = qa(e, !0, t === "fixed"),
    a = n.top + e.clientTop,
    l = n.left + e.clientLeft,
    i = Jt(e) ? Rl(e) : Pt(1),
    s = e.clientWidth * i.x,
    r = e.clientHeight * i.y,
    o = l * i.x,
    c = a * i.y;
  return { width: s, height: r, x: o, y: c };
}
function Hh(e, t, n) {
  let a;
  if (t === "viewport") a = v2(e, n);
  else if (t === "document") a = g2(It(e));
  else if (Ut(t)) a = b2(t, n);
  else {
    const l = A0(e);
    a = { x: t.x - l.x, y: t.y - l.y, width: t.width, height: t.height };
  }
  return Jr(a);
}
function N0(e, t) {
  const n = fa(e);
  return n === t || !Ut(n) || Wl(n)
    ? !1
    : Bt(n).position === "fixed" || N0(n, t);
}
function x2(e, t) {
  const n = t.get(e);
  if (n) return n;
  let a = ss(e, [], !1).filter((r) => Ut(r) && oi(r) !== "body"),
    l = null;
  const i = Bt(e).position === "fixed";
  let s = i ? fa(e) : e;
  for (; Ut(s) && !Wl(s); ) {
    const r = Bt(s),
      o = zf(s);
    !o && r.position === "fixed" && (l = null),
      (
        i
          ? !o && !l
          : (!o && r.position === "static" && !!l && y2.has(l.position)) ||
            (Os(s) && !o && N0(e, s))
      )
        ? (a = a.filter((d) => d !== s))
        : (l = r),
      (s = fa(s));
  }
  return t.set(e, a), a;
}
function w2(e) {
  let { element: t, boundary: n, rootBoundary: a, strategy: l } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? So(t)
          ? []
          : x2(t, this._c)
        : [].concat(n)),
      a,
    ],
    r = s[0],
    o = s.reduce((c, d) => {
      const m = Hh(t, d, l);
      return (
        (c.top = rt(m.top, c.top)),
        (c.right = ca(m.right, c.right)),
        (c.bottom = ca(m.bottom, c.bottom)),
        (c.left = rt(m.left, c.left)),
        c
      );
    }, Hh(t, r, l));
  return {
    width: o.right - o.left,
    height: o.bottom - o.top,
    x: o.left,
    y: o.top,
  };
}
function S2(e) {
  const { width: t, height: n } = S0(e);
  return { width: t, height: n };
}
function A2(e, t, n) {
  const a = Jt(t),
    l = It(t),
    i = n === "fixed",
    s = qa(e, !0, i, t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const o = Pt(0);
  function c() {
    o.x = Bf(l);
  }
  if (a || (!a && !i))
    if (((oi(t) !== "body" || Os(l)) && (r = Ao(t)), a)) {
      const f = qa(t, !0, i, t);
      (o.x = f.x + t.clientLeft), (o.y = f.y + t.clientTop);
    } else l && c();
  i && !a && l && c();
  const d = l && !a && !i ? E0(l, r) : Pt(0),
    m = s.left + r.scrollLeft - o.x - d.x,
    h = s.top + r.scrollTop - o.y - d.y;
  return { x: m, y: h, width: s.width, height: s.height };
}
function vu(e) {
  return Bt(e).position === "static";
}
function Lh(e, t) {
  if (!Jt(e) || Bt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return It(e) === n && (n = n.ownerDocument.body), n;
}
function j0(e, t) {
  const n = ht(e);
  if (So(e)) return n;
  if (!Jt(e)) {
    let l = fa(e);
    for (; l && !Wl(l); ) {
      if (Ut(l) && !vu(l)) return l;
      l = fa(l);
    }
    return n;
  }
  let a = Lh(e, t);
  for (; a && i2(a) && vu(a); ) a = Lh(a, t);
  return a && Wl(a) && vu(a) && !zf(a) ? n : a || c2(e) || n;
}
const E2 = async function (e) {
  const t = this.getOffsetParent || j0,
    n = this.getDimensions,
    a = await n(e.floating);
  return {
    reference: A2(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: a.width, height: a.height },
  };
};
function N2(e) {
  return Bt(e).direction === "rtl";
}
const j2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m2,
  getDocumentElement: It,
  getClippingRect: w2,
  getOffsetParent: j0,
  getElementRects: E2,
  getClientRects: p2,
  getDimensions: S2,
  getScale: Rl,
  isElement: Ut,
  isRTL: N2,
};
function T0(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function T2(e, t) {
  let n = null,
    a;
  const l = It(e);
  function i() {
    var r;
    clearTimeout(a), (r = n) == null || r.disconnect(), (n = null);
  }
  function s(r, o) {
    r === void 0 && (r = !1), o === void 0 && (o = 1), i();
    const c = e.getBoundingClientRect(),
      { left: d, top: m, width: h, height: f } = c;
    if ((r || t(), !h || !f)) return;
    const S = Is(m),
      y = Is(l.clientWidth - (d + h)),
      x = Is(l.clientHeight - (m + f)),
      p = Is(d),
      v = {
        rootMargin: -S + "px " + -y + "px " + -x + "px " + -p + "px",
        threshold: rt(0, ca(1, o)) || 1,
      };
    let w = !0;
    function A(T) {
      const E = T[0].intersectionRatio;
      if (E !== o) {
        if (!w) return s();
        E
          ? s(!1, E)
          : (a = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      E === 1 && !T0(c, e.getBoundingClientRect()) && s(), (w = !1);
    }
    try {
      n = new IntersectionObserver(A, { ...v, root: l.ownerDocument });
    } catch {
      n = new IntersectionObserver(A, v);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function C2(e, t, n, a) {
  a === void 0 && (a = {});
  const {
      ancestorScroll: l = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: r = typeof IntersectionObserver == "function",
      animationFrame: o = !1,
    } = a,
    c = Uf(e),
    d = l || i ? [...(c ? ss(c) : []), ...ss(t)] : [];
  d.forEach((p) => {
    l && p.addEventListener("scroll", n, { passive: !0 }),
      i && p.addEventListener("resize", n);
  });
  const m = c && r ? T2(c, n) : null;
  let h = -1,
    f = null;
  s &&
    ((f = new ResizeObserver((p) => {
      let [g] = p;
      g &&
        g.target === c &&
        f &&
        (f.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var v;
          (v = f) == null || v.observe(t);
        }))),
        n();
    })),
    c && !o && f.observe(c),
    f.observe(t));
  let S,
    y = o ? qa(e) : null;
  o && x();
  function x() {
    const p = qa(e);
    y && !T0(y, p) && n(), (y = p), (S = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var p;
      d.forEach((g) => {
        l && g.removeEventListener("scroll", n),
          i && g.removeEventListener("resize", n);
      }),
        m == null || m(),
        (p = f) == null || p.disconnect(),
        (f = null),
        o && cancelAnimationFrame(S);
    }
  );
}
const O2 = I1,
  M2 = e2,
  R2 = J1,
  D2 = n2,
  z2 = $1,
  qh = P1,
  _2 = t2,
  U2 = (e, t, n) => {
    const a = new Map(),
      l = { platform: j2, ...n },
      i = { ...l.platform, _c: a };
    return F1(e, t, { ...l, platform: i });
  };
var B2 = typeof document < "u",
  H2 = function () {},
  pr = B2 ? b.useLayoutEffect : H2;
function $r(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, a, l;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (a = n; a-- !== 0; ) if (!$r(e[a], t[a])) return !1;
      return !0;
    }
    if (((l = Object.keys(e)), (n = l.length), n !== Object.keys(t).length))
      return !1;
    for (a = n; a-- !== 0; ) if (!{}.hasOwnProperty.call(t, l[a])) return !1;
    for (a = n; a-- !== 0; ) {
      const i = l[a];
      if (!(i === "_owner" && e.$$typeof) && !$r(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function C0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yh(e, t) {
  const n = C0(e);
  return Math.round(t * n) / n;
}
function yu(e) {
  const t = b.useRef(e);
  return (
    pr(() => {
      t.current = e;
    }),
    t
  );
}
function L2(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: a = [],
      platform: l,
      elements: { reference: i, floating: s } = {},
      transform: r = !0,
      whileElementsMounted: o,
      open: c,
    } = e,
    [d, m] = b.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, f] = b.useState(a);
  $r(h, a) || f(a);
  const [S, y] = b.useState(null),
    [x, p] = b.useState(null),
    g = b.useCallback((M) => {
      M !== T.current && ((T.current = M), y(M));
    }, []),
    v = b.useCallback((M) => {
      M !== E.current && ((E.current = M), p(M));
    }, []),
    w = i || S,
    A = s || x,
    T = b.useRef(null),
    E = b.useRef(null),
    O = b.useRef(d),
    U = o != null,
    z = yu(o),
    k = yu(l),
    B = yu(c),
    te = b.useCallback(() => {
      if (!T.current || !E.current) return;
      const M = { placement: t, strategy: n, middleware: h };
      k.current && (M.platform = k.current),
        U2(T.current, E.current, M).then((R) => {
          const L = { ...R, isPositioned: B.current !== !1 };
          K.current &&
            !$r(O.current, L) &&
            ((O.current = L),
            ao.flushSync(() => {
              m(L);
            }));
        });
    }, [h, t, n, k, B]);
  pr(() => {
    c === !1 &&
      O.current.isPositioned &&
      ((O.current.isPositioned = !1), m((M) => ({ ...M, isPositioned: !1 })));
  }, [c]);
  const K = b.useRef(!1);
  pr(
    () => (
      (K.current = !0),
      () => {
        K.current = !1;
      }
    ),
    []
  ),
    pr(() => {
      if ((w && (T.current = w), A && (E.current = A), w && A)) {
        if (z.current) return z.current(w, A, te);
        te();
      }
    }, [w, A, te, z, U]);
  const ue = b.useMemo(
      () => ({ reference: T, floating: E, setReference: g, setFloating: v }),
      [g, v]
    ),
    C = b.useMemo(() => ({ reference: w, floating: A }), [w, A]),
    _ = b.useMemo(() => {
      const M = { position: n, left: 0, top: 0 };
      if (!C.floating) return M;
      const R = Yh(C.floating, d.x),
        L = Yh(C.floating, d.y);
      return r
        ? {
            ...M,
            transform: "translate(" + R + "px, " + L + "px)",
            ...(C0(C.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: L };
    }, [n, r, C.floating, d.x, d.y]);
  return b.useMemo(
    () => ({ ...d, update: te, refs: ue, elements: C, floatingStyles: _ }),
    [d, te, ue, C, _]
  );
}
const q2 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: a, padding: l } = typeof e == "function" ? e(n) : e;
        return a && t(a)
          ? a.current != null
            ? qh({ element: a.current, padding: l }).fn(n)
            : {}
          : a
          ? qh({ element: a, padding: l }).fn(n)
          : {};
      },
    };
  },
  Y2 = (e, t) => ({ ...O2(e), options: [e, t] }),
  G2 = (e, t) => ({ ...M2(e), options: [e, t] }),
  k2 = (e, t) => ({ ..._2(e), options: [e, t] }),
  Q2 = (e, t) => ({ ...R2(e), options: [e, t] }),
  V2 = (e, t) => ({ ...D2(e), options: [e, t] }),
  X2 = (e, t) => ({ ...z2(e), options: [e, t] }),
  Z2 = (e, t) => ({ ...q2(e), options: [e, t] });
var K2 = "Arrow",
  O0 = b.forwardRef((e, t) => {
    const { children: n, width: a = 10, height: l = 5, ...i } = e;
    return u.jsx(ma.svg, {
      ...i,
      ref: t,
      width: a,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
O0.displayName = K2;
var F2 = O0;
function P2(e) {
  const [t, n] = b.useState(void 0);
  return (
    ls(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const a = new ResizeObserver((l) => {
          if (!Array.isArray(l) || !l.length) return;
          const i = l[0];
          let s, r;
          if ("borderBoxSize" in i) {
            const o = i.borderBoxSize,
              c = Array.isArray(o) ? o[0] : o;
            (s = c.inlineSize), (r = c.blockSize);
          } else (s = e.offsetWidth), (r = e.offsetHeight);
          n({ width: s, height: r });
        });
        return a.observe(e, { box: "border-box" }), () => a.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var M0 = "Popper",
  [R0, D0] = d0(M0),
  [_A, z0] = R0(M0),
  _0 = "PopperAnchor",
  U0 = b.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: a, ...l } = e,
      i = z0(_0, n),
      s = b.useRef(null),
      r = Va(t, s);
    return (
      b.useEffect(() => {
        i.onAnchorChange((a == null ? void 0 : a.current) || s.current);
      }),
      a ? null : u.jsx(ma.div, { ...l, ref: r })
    );
  });
U0.displayName = _0;
var Hf = "PopperContent",
  [J2, $2] = R0(Hf),
  B0 = b.forwardRef((e, t) => {
    var ce, Wa, En, pa, Nn, Ia;
    const {
        __scopePopper: n,
        side: a = "bottom",
        sideOffset: l = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: r = 0,
        avoidCollisions: o = !0,
        collisionBoundary: c = [],
        collisionPadding: d = 0,
        sticky: m = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: f = "optimized",
        onPlaced: S,
        ...y
      } = e,
      x = z0(Hf, n),
      [p, g] = b.useState(null),
      v = Va(t, (jn) => g(jn)),
      [w, A] = b.useState(null),
      T = P2(w),
      E = (T == null ? void 0 : T.width) ?? 0,
      O = (T == null ? void 0 : T.height) ?? 0,
      U = a + (i !== "center" ? "-" + i : ""),
      z =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      k = Array.isArray(c) ? c : [c],
      B = k.length > 0,
      te = { padding: z, boundary: k.filter(I2), altBoundary: B },
      {
        refs: K,
        floatingStyles: ue,
        placement: C,
        isPositioned: _,
        middlewareData: M,
      } = L2({
        strategy: "fixed",
        placement: U,
        whileElementsMounted: (...jn) =>
          C2(...jn, { animationFrame: f === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          Y2({ mainAxis: l + O, alignmentAxis: s }),
          o &&
            G2({
              mainAxis: !0,
              crossAxis: !1,
              limiter: m === "partial" ? k2() : void 0,
              ...te,
            }),
          o && Q2({ ...te }),
          V2({
            ...te,
            apply: ({
              elements: jn,
              rects: zs,
              availableWidth: Ro,
              availableHeight: _s,
            }) => {
              const { width: Do, height: fi } = zs.reference,
                el = jn.floating.style;
              el.setProperty("--radix-popper-available-width", `${Ro}px`),
                el.setProperty("--radix-popper-available-height", `${_s}px`),
                el.setProperty("--radix-popper-anchor-width", `${Do}px`),
                el.setProperty("--radix-popper-anchor-height", `${fi}px`);
            },
          }),
          w && Z2({ element: w, padding: r }),
          ew({ arrowWidth: E, arrowHeight: O }),
          h && X2({ strategy: "referenceHidden", ...te }),
        ],
      }),
      [R, L] = q0(C),
      ye = xo(S);
    ls(() => {
      _ && (ye == null || ye());
    }, [_, ye]);
    const F = (ce = M.arrow) == null ? void 0 : ce.x,
      W = (Wa = M.arrow) == null ? void 0 : Wa.y,
      J = ((En = M.arrow) == null ? void 0 : En.centerOffset) !== 0,
      [Ee, An] = b.useState();
    return (
      ls(() => {
        p && An(window.getComputedStyle(p).zIndex);
      }, [p]),
      u.jsx("div", {
        ref: K.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ue,
          transform: _ ? ue.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ee,
          "--radix-popper-transform-origin": [
            (pa = M.transformOrigin) == null ? void 0 : pa.x,
            (Nn = M.transformOrigin) == null ? void 0 : Nn.y,
          ].join(" "),
          ...(((Ia = M.hide) == null ? void 0 : Ia.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: u.jsx(J2, {
          scope: n,
          placedSide: R,
          onArrowChange: A,
          arrowX: F,
          arrowY: W,
          shouldHideArrow: J,
          children: u.jsx(ma.div, {
            "data-side": R,
            "data-align": L,
            ...y,
            ref: v,
            style: { ...y.style, animation: _ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
B0.displayName = Hf;
var H0 = "PopperArrow",
  W2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  L0 = b.forwardRef(function (t, n) {
    const { __scopePopper: a, ...l } = t,
      i = $2(H0, a),
      s = W2[i.placedSide];
    return u.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(F2, {
        ...l,
        ref: n,
        style: { ...l.style, display: "block" },
      }),
    });
  });
L0.displayName = H0;
function I2(e) {
  return e !== null;
}
var ew = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, p, g;
    const { placement: n, rects: a, middlewareData: l } = t,
      s = ((x = l.arrow) == null ? void 0 : x.centerOffset) !== 0,
      r = s ? 0 : e.arrowWidth,
      o = s ? 0 : e.arrowHeight,
      [c, d] = q0(n),
      m = { start: "0%", center: "50%", end: "100%" }[d],
      h = (((p = l.arrow) == null ? void 0 : p.x) ?? 0) + r / 2,
      f = (((g = l.arrow) == null ? void 0 : g.y) ?? 0) + o / 2;
    let S = "",
      y = "";
    return (
      c === "bottom"
        ? ((S = s ? m : `${h}px`), (y = `${-o}px`))
        : c === "top"
        ? ((S = s ? m : `${h}px`), (y = `${a.floating.height + o}px`))
        : c === "right"
        ? ((S = `${-o}px`), (y = s ? m : `${f}px`))
        : c === "left" &&
          ((S = `${a.floating.width + o}px`), (y = s ? m : `${f}px`)),
      { data: { x: S, y } }
    );
  },
});
function q0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var tw = U0,
  nw = B0,
  aw = L0;
function lw(e, t) {
  return b.useReducer((n, a) => t[n][a] ?? n, e);
}
var Y0 = (e) => {
  const { present: t, children: n } = e,
    a = iw(t),
    l =
      typeof n == "function" ? n({ present: a.isPresent }) : b.Children.only(n),
    i = Va(a.ref, sw(l));
  return typeof n == "function" || a.isPresent
    ? b.cloneElement(l, { ref: i })
    : null;
};
Y0.displayName = "Presence";
function iw(e) {
  const [t, n] = b.useState(),
    a = b.useRef(null),
    l = b.useRef(e),
    i = b.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [r, o] = lw(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    b.useEffect(() => {
      const c = er(a.current);
      i.current = r === "mounted" ? c : "none";
    }, [r]),
    ls(() => {
      const c = a.current,
        d = l.current;
      if (d !== e) {
        const h = i.current,
          f = er(c);
        e
          ? o("MOUNT")
          : f === "none" || (c == null ? void 0 : c.display) === "none"
          ? o("UNMOUNT")
          : o(d && h !== f ? "ANIMATION_OUT" : "UNMOUNT"),
          (l.current = e);
      }
    }, [e, o]),
    ls(() => {
      if (t) {
        let c;
        const d = t.ownerDocument.defaultView ?? window,
          m = (f) => {
            const y = er(a.current).includes(f.animationName);
            if (f.target === t && y && (o("ANIMATION_END"), !l.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          h = (f) => {
            f.target === t && (i.current = er(a.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", m),
          t.addEventListener("animationend", m),
          () => {
            d.clearTimeout(c),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", m),
              t.removeEventListener("animationend", m);
          }
        );
      } else o("ANIMATION_END");
    }, [t, o]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(r),
      ref: b.useCallback((c) => {
        (a.current = c ? getComputedStyle(c) : null), n(c);
      }, []),
    }
  );
}
function er(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function sw(e) {
  var a, l;
  let t =
      (a = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : a.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (l = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : l.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var rw = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  ow = "VisuallyHidden",
  G0 = b.forwardRef((e, t) =>
    u.jsx(ma.span, { ...e, ref: t, style: { ...rw, ...e.style } })
  );
G0.displayName = ow;
var uw = G0,
  [Eo, UA] = d0("Tooltip", [D0]),
  Lf = D0(),
  k0 = "TooltipProvider",
  cw = 700,
  Gh = "tooltip.open",
  [fw, Q0] = Eo(k0),
  V0 = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = cw,
        skipDelayDuration: a = 300,
        disableHoverableContent: l = !1,
        children: i,
      } = e,
      s = b.useRef(!0),
      r = b.useRef(!1),
      o = b.useRef(0);
    return (
      b.useEffect(() => {
        const c = o.current;
        return () => window.clearTimeout(c);
      }, []),
      u.jsx(fw, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: b.useCallback(() => {
          window.clearTimeout(o.current), (s.current = !1);
        }, []),
        onClose: b.useCallback(() => {
          window.clearTimeout(o.current),
            (o.current = window.setTimeout(() => (s.current = !0), a));
        }, [a]),
        isPointerInTransitRef: r,
        onPointerInTransitChange: b.useCallback((c) => {
          r.current = c;
        }, []),
        disableHoverableContent: l,
        children: i,
      })
    );
  };
V0.displayName = k0;
var X0 = "Tooltip",
  [BA, No] = Eo(X0),
  Sc = "TooltipTrigger",
  dw = b.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...a } = e,
      l = No(Sc, n),
      i = Q0(Sc, n),
      s = Lf(n),
      r = b.useRef(null),
      o = Va(t, r, l.onTriggerChange),
      c = b.useRef(!1),
      d = b.useRef(!1),
      m = b.useCallback(() => (c.current = !1), []);
    return (
      b.useEffect(
        () => () => document.removeEventListener("pointerup", m),
        [m]
      ),
      u.jsx(tw, {
        asChild: !0,
        ...s,
        children: u.jsx(ma.button, {
          "aria-describedby": l.open ? l.contentId : void 0,
          "data-state": l.stateAttribute,
          ...a,
          ref: o,
          onPointerMove: sn(e.onPointerMove, (h) => {
            h.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (l.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: sn(e.onPointerLeave, () => {
            l.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: sn(e.onPointerDown, () => {
            l.open && l.onClose(),
              (c.current = !0),
              document.addEventListener("pointerup", m, { once: !0 });
          }),
          onFocus: sn(e.onFocus, () => {
            c.current || l.onOpen();
          }),
          onBlur: sn(e.onBlur, l.onClose),
          onClick: sn(e.onClick, l.onClose),
        }),
      })
    );
  });
dw.displayName = Sc;
var hw = "TooltipPortal",
  [HA, mw] = Eo(hw, { forceMount: void 0 }),
  Il = "TooltipContent",
  Z0 = b.forwardRef((e, t) => {
    const n = mw(Il, e.__scopeTooltip),
      { forceMount: a = n.forceMount, side: l = "top", ...i } = e,
      s = No(Il, e.__scopeTooltip);
    return u.jsx(Y0, {
      present: a || s.open,
      children: s.disableHoverableContent
        ? u.jsx(K0, { side: l, ...i, ref: t })
        : u.jsx(pw, { side: l, ...i, ref: t }),
    });
  }),
  pw = b.forwardRef((e, t) => {
    const n = No(Il, e.__scopeTooltip),
      a = Q0(Il, e.__scopeTooltip),
      l = b.useRef(null),
      i = Va(t, l),
      [s, r] = b.useState(null),
      { trigger: o, onClose: c } = n,
      d = l.current,
      { onPointerInTransitChange: m } = a,
      h = b.useCallback(() => {
        r(null), m(!1);
      }, [m]),
      f = b.useCallback(
        (S, y) => {
          const x = S.currentTarget,
            p = { x: S.clientX, y: S.clientY },
            g = xw(p, x.getBoundingClientRect()),
            v = ww(p, g),
            w = Sw(y.getBoundingClientRect()),
            A = Ew([...v, ...w]);
          r(A), m(!0);
        },
        [m]
      );
    return (
      b.useEffect(() => () => h(), [h]),
      b.useEffect(() => {
        if (o && d) {
          const S = (x) => f(x, d),
            y = (x) => f(x, o);
          return (
            o.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", y),
            () => {
              o.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", y);
            }
          );
        }
      }, [o, d, f, h]),
      b.useEffect(() => {
        if (s) {
          const S = (y) => {
            const x = y.target,
              p = { x: y.clientX, y: y.clientY },
              g =
                (o == null ? void 0 : o.contains(x)) ||
                (d == null ? void 0 : d.contains(x)),
              v = !Aw(p, s);
            g ? h() : v && (h(), c());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [o, d, s, c, h]),
      u.jsx(K0, { ...e, ref: i })
    );
  }),
  [gw, vw] = Eo(X0, { isInside: !1 }),
  yw = A1("TooltipContent"),
  K0 = b.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: a,
        "aria-label": l,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...r
      } = e,
      o = No(Il, n),
      c = Lf(n),
      { onClose: d } = o;
    return (
      b.useEffect(
        () => (
          document.addEventListener(Gh, d),
          () => document.removeEventListener(Gh, d)
        ),
        [d]
      ),
      b.useEffect(() => {
        if (o.trigger) {
          const m = (h) => {
            const f = h.target;
            f != null && f.contains(o.trigger) && d();
          };
          return (
            window.addEventListener("scroll", m, { capture: !0 }),
            () => window.removeEventListener("scroll", m, { capture: !0 })
          );
        }
      }, [o.trigger, d]),
      u.jsx(g0, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: d,
        children: u.jsxs(nw, {
          "data-state": o.stateAttribute,
          ...c,
          ...r,
          ref: t,
          style: {
            ...r.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            u.jsx(yw, { children: a }),
            u.jsx(gw, {
              scope: n,
              isInside: !0,
              children: u.jsx(uw, {
                id: o.contentId,
                role: "tooltip",
                children: l || a,
              }),
            }),
          ],
        }),
      })
    );
  });
Z0.displayName = Il;
var F0 = "TooltipArrow",
  bw = b.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...a } = e,
      l = Lf(n);
    return vw(F0, n).isInside ? null : u.jsx(aw, { ...l, ...a, ref: t });
  });
bw.displayName = F0;
function xw(e, t) {
  const n = Math.abs(t.top - e.y),
    a = Math.abs(t.bottom - e.y),
    l = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, a, l, i)) {
    case i:
      return "left";
    case l:
      return "right";
    case n:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ww(e, t, n = 5) {
  const a = [];
  switch (t) {
    case "top":
      a.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      a.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      a.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      a.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return a;
}
function Sw(e) {
  const { top: t, right: n, bottom: a, left: l } = e;
  return [
    { x: l, y: t },
    { x: n, y: t },
    { x: n, y: a },
    { x: l, y: a },
  ];
}
function Aw(e, t) {
  const { x: n, y: a } = e;
  let l = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const r = t[i],
      o = t[s],
      c = r.x,
      d = r.y,
      m = o.x,
      h = o.y;
    d > a != h > a && n < ((m - c) * (a - d)) / (h - d) + c && (l = !l);
  }
  return l;
}
function Ew(e) {
  const t = e.slice();
  return (
    t.sort((n, a) =>
      n.x < a.x ? -1 : n.x > a.x ? 1 : n.y < a.y ? -1 : n.y > a.y ? 1 : 0
    ),
    Nw(t)
  );
}
function Nw(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (l.y - s.y) >= (i.y - s.y) * (l.x - s.x)) t.pop();
      else break;
    }
    t.push(l);
  }
  t.pop();
  const n = [];
  for (let a = e.length - 1; a >= 0; a--) {
    const l = e[a];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (l.y - s.y) >= (i.y - s.y) * (l.x - s.x)) n.pop();
      else break;
    }
    n.push(l);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var jw = V0,
  P0 = Z0;
function J0(e) {
  var t,
    n,
    a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = J0(e[t])) && (a && (a += " "), (a += n));
    } else for (n in e) e[n] && (a && (a += " "), (a += n));
  return a;
}
function $0() {
  for (var e, t, n = 0, a = "", l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = J0(e)) && (a && (a += " "), (a += t));
  return a;
}
const qf = "-",
  Tw = (e) => {
    const t = Ow(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: a } = e;
    return {
      getClassGroupId: (s) => {
        const r = s.split(qf);
        return r[0] === "" && r.length !== 1 && r.shift(), W0(r, t) || Cw(s);
      },
      getConflictingClassGroupIds: (s, r) => {
        const o = n[s] || [];
        return r && a[s] ? [...o, ...a[s]] : o;
      },
    };
  },
  W0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      a = t.nextPart.get(n),
      l = a ? W0(e.slice(1), a) : void 0;
    if (l) return l;
    if (t.validators.length === 0) return;
    const i = e.join(qf);
    return (s = t.validators.find(({ validator: r }) => r(i))) == null
      ? void 0
      : s.classGroupId;
  },
  kh = /^\[(.+)\]$/,
  Cw = (e) => {
    if (kh.test(e)) {
      const t = kh.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Ow = (e) => {
    const { theme: t, prefix: n } = e,
      a = { nextPart: new Map(), validators: [] };
    return (
      Rw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Ac(s, a, i, t);
      }),
      a
    );
  },
  Ac = (e, t, n, a) => {
    e.forEach((l) => {
      if (typeof l == "string") {
        const i = l === "" ? t : Qh(t, l);
        i.classGroupId = n;
        return;
      }
      if (typeof l == "function") {
        if (Mw(l)) {
          Ac(l(a), t, n, a);
          return;
        }
        t.validators.push({ validator: l, classGroupId: n });
        return;
      }
      Object.entries(l).forEach(([i, s]) => {
        Ac(s, Qh(t, i), n, a);
      });
    });
  },
  Qh = (e, t) => {
    let n = e;
    return (
      t.split(qf).forEach((a) => {
        n.nextPart.has(a) ||
          n.nextPart.set(a, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(a));
      }),
      n
    );
  },
  Mw = (e) => e.isThemeGetter,
  Rw = (e, t) =>
    t
      ? e.map(([n, a]) => {
          const l = a.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, r]) => [t + s, r])
                )
              : i
          );
          return [n, l];
        })
      : e,
  Dw = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      a = new Map();
    const l = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (a = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = a.get(i)) !== void 0) return l(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : l(i, s);
      },
    };
  },
  I0 = "!",
  zw = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      a = t.length === 1,
      l = t[0],
      i = t.length,
      s = (r) => {
        const o = [];
        let c = 0,
          d = 0,
          m;
        for (let x = 0; x < r.length; x++) {
          let p = r[x];
          if (c === 0) {
            if (p === l && (a || r.slice(x, x + i) === t)) {
              o.push(r.slice(d, x)), (d = x + i);
              continue;
            }
            if (p === "/") {
              m = x;
              continue;
            }
          }
          p === "[" ? c++ : p === "]" && c--;
        }
        const h = o.length === 0 ? r : r.substring(d),
          f = h.startsWith(I0),
          S = f ? h.substring(1) : h,
          y = m && m > d ? m - d : void 0;
        return {
          modifiers: o,
          hasImportantModifier: f,
          baseClassName: S,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (r) => n({ className: r, parseClassName: s }) : s;
  },
  _w = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((a) => {
        a[0] === "[" ? (t.push(...n.sort(), a), (n = [])) : n.push(a);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Uw = (e) => ({ cache: Dw(e.cacheSize), parseClassName: zw(e), ...Tw(e) }),
  Bw = /\s+/,
  Hw = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: a,
        getConflictingClassGroupIds: l,
      } = t,
      i = [],
      s = e.trim().split(Bw);
    let r = "";
    for (let o = s.length - 1; o >= 0; o -= 1) {
      const c = s[o],
        {
          modifiers: d,
          hasImportantModifier: m,
          baseClassName: h,
          maybePostfixModifierPosition: f,
        } = n(c);
      let S = !!f,
        y = a(S ? h.substring(0, f) : h);
      if (!y) {
        if (!S) {
          r = c + (r.length > 0 ? " " + r : r);
          continue;
        }
        if (((y = a(h)), !y)) {
          r = c + (r.length > 0 ? " " + r : r);
          continue;
        }
        S = !1;
      }
      const x = _w(d).join(":"),
        p = m ? x + I0 : x,
        g = p + y;
      if (i.includes(g)) continue;
      i.push(g);
      const v = l(y, S);
      for (let w = 0; w < v.length; ++w) {
        const A = v[w];
        i.push(p + A);
      }
      r = c + (r.length > 0 ? " " + r : r);
    }
    return r;
  };
function Lw() {
  let e = 0,
    t,
    n,
    a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ev(t)) && (a && (a += " "), (a += n));
  return a;
}
const ev = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = ev(e[a])) && (n && (n += " "), (n += t));
  return n;
};
function qw(e, ...t) {
  let n,
    a,
    l,
    i = s;
  function s(o) {
    const c = t.reduce((d, m) => m(d), e());
    return (n = Uw(c)), (a = n.cache.get), (l = n.cache.set), (i = r), r(o);
  }
  function r(o) {
    const c = a(o);
    if (c) return c;
    const d = Hw(o, n);
    return l(o, d), d;
  }
  return function () {
    return i(Lw.apply(null, arguments));
  };
}
const fe = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  tv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Yw = /^\d+\/\d+$/,
  Gw = new Set(["px", "full", "screen"]),
  kw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Qw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Vw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Xw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Zw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  an = (e) => Dl(e) || Gw.has(e) || Yw.test(e),
  Dn = (e) => ui(e, "length", eS),
  Dl = (e) => !!e && !Number.isNaN(Number(e)),
  bu = (e) => ui(e, "number", Dl),
  wi = (e) => !!e && Number.isInteger(Number(e)),
  Kw = (e) => e.endsWith("%") && Dl(e.slice(0, -1)),
  G = (e) => tv.test(e),
  zn = (e) => kw.test(e),
  Fw = new Set(["length", "size", "percentage"]),
  Pw = (e) => ui(e, Fw, nv),
  Jw = (e) => ui(e, "position", nv),
  $w = new Set(["image", "url"]),
  Ww = (e) => ui(e, $w, nS),
  Iw = (e) => ui(e, "", tS),
  Si = () => !0,
  ui = (e, t, n) => {
    const a = tv.exec(e);
    return a
      ? a[1]
        ? typeof t == "string"
          ? a[1] === t
          : t.has(a[1])
        : n(a[2])
      : !1;
  },
  eS = (e) => Qw.test(e) && !Vw.test(e),
  nv = () => !1,
  tS = (e) => Xw.test(e),
  nS = (e) => Zw.test(e),
  aS = () => {
    const e = fe("colors"),
      t = fe("spacing"),
      n = fe("blur"),
      a = fe("brightness"),
      l = fe("borderColor"),
      i = fe("borderRadius"),
      s = fe("borderSpacing"),
      r = fe("borderWidth"),
      o = fe("contrast"),
      c = fe("grayscale"),
      d = fe("hueRotate"),
      m = fe("invert"),
      h = fe("gap"),
      f = fe("gradientColorStops"),
      S = fe("gradientColorStopPositions"),
      y = fe("inset"),
      x = fe("margin"),
      p = fe("opacity"),
      g = fe("padding"),
      v = fe("saturate"),
      w = fe("scale"),
      A = fe("sepia"),
      T = fe("skew"),
      E = fe("space"),
      O = fe("translate"),
      U = () => ["auto", "contain", "none"],
      z = () => ["auto", "hidden", "clip", "visible", "scroll"],
      k = () => ["auto", G, t],
      B = () => [G, t],
      te = () => ["", an, Dn],
      K = () => ["auto", Dl, G],
      ue = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      C = () => ["solid", "dashed", "dotted", "double", "none"],
      _ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      M = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", G],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      ye = () => [Dl, G];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Si],
        spacing: [an, Dn],
        blur: ["none", "", zn, G],
        brightness: ye(),
        borderColor: [e],
        borderRadius: ["none", "", "full", zn, G],
        borderSpacing: B(),
        borderWidth: te(),
        contrast: ye(),
        grayscale: R(),
        hueRotate: ye(),
        invert: R(),
        gap: B(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Kw, Dn],
        inset: k(),
        margin: k(),
        opacity: ye(),
        padding: B(),
        saturate: ye(),
        scale: ye(),
        sepia: R(),
        skew: ye(),
        space: B(),
        translate: B(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", G] }],
        container: ["container"],
        columns: [{ columns: [zn] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...ue(), G] }],
        overflow: [{ overflow: z() }],
        "overflow-x": [{ "overflow-x": z() }],
        "overflow-y": [{ "overflow-y": z() }],
        overscroll: [{ overscroll: U() }],
        "overscroll-x": [{ "overscroll-x": U() }],
        "overscroll-y": [{ "overscroll-y": U() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", wi, G] }],
        basis: [{ basis: k() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", G] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", wi, G] }],
        "grid-cols": [{ "grid-cols": [Si] }],
        "col-start-end": [{ col: ["auto", { span: ["full", wi, G] }, G] }],
        "col-start": [{ "col-start": K() }],
        "col-end": [{ "col-end": K() }],
        "grid-rows": [{ "grid-rows": [Si] }],
        "row-start-end": [{ row: ["auto", { span: [wi, G] }, G] }],
        "row-start": [{ "row-start": K() }],
        "row-end": [{ "row-end": K() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", G] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", G] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...M()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...M(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...M(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [g] }],
        px: [{ px: [g] }],
        py: [{ py: [g] }],
        ps: [{ ps: [g] }],
        pe: [{ pe: [g] }],
        pt: [{ pt: [g] }],
        pr: [{ pr: [g] }],
        pb: [{ pb: [g] }],
        pl: [{ pl: [g] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t] }],
        "min-w": [{ "min-w": [G, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              G,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [zn] },
              zn,
            ],
          },
        ],
        h: [{ h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [G, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", zn, Dn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              bu,
            ],
          },
        ],
        "font-family": [{ font: [Si] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              G,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Dl, bu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              an,
              G,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", G] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", G] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...C(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", an, Dn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", an, G] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: B() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              G,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", G] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...ue(), Jw] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Pw] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Ww,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [f] }],
        "gradient-via": [{ via: [f] }],
        "gradient-to": [{ to: [f] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [r] }],
        "border-w-x": [{ "border-x": [r] }],
        "border-w-y": [{ "border-y": [r] }],
        "border-w-s": [{ "border-s": [r] }],
        "border-w-e": [{ "border-e": [r] }],
        "border-w-t": [{ "border-t": [r] }],
        "border-w-r": [{ "border-r": [r] }],
        "border-w-b": [{ "border-b": [r] }],
        "border-w-l": [{ "border-l": [r] }],
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...C(), "hidden"] }],
        "divide-x": [{ "divide-x": [r] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [r] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: C() }],
        "border-color": [{ border: [l] }],
        "border-color-x": [{ "border-x": [l] }],
        "border-color-y": [{ "border-y": [l] }],
        "border-color-s": [{ "border-s": [l] }],
        "border-color-e": [{ "border-e": [l] }],
        "border-color-t": [{ "border-t": [l] }],
        "border-color-r": [{ "border-r": [l] }],
        "border-color-b": [{ "border-b": [l] }],
        "border-color-l": [{ "border-l": [l] }],
        "divide-color": [{ divide: [l] }],
        "outline-style": [{ outline: ["", ...C()] }],
        "outline-offset": [{ "outline-offset": [an, G] }],
        "outline-w": [{ outline: [an, Dn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: te() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [an, Dn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", zn, Iw] }],
        "shadow-color": [{ shadow: [Si] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [{ "mix-blend": [..._(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": _() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [a] }],
        contrast: [{ contrast: [o] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", zn, G] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [m] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [A] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [a] }],
        "backdrop-contrast": [{ "backdrop-contrast": [o] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [m] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [A] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              G,
            ],
          },
        ],
        duration: [{ duration: ye() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", G] }],
        delay: [{ delay: ye() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", G] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [w] }],
        "scale-x": [{ "scale-x": [w] }],
        "scale-y": [{ "scale-y": [w] }],
        rotate: [{ rotate: [wi, G] }],
        "translate-x": [{ "translate-x": [O] }],
        "translate-y": [{ "translate-y": [O] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              G,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              G,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": B() }],
        "scroll-mx": [{ "scroll-mx": B() }],
        "scroll-my": [{ "scroll-my": B() }],
        "scroll-ms": [{ "scroll-ms": B() }],
        "scroll-me": [{ "scroll-me": B() }],
        "scroll-mt": [{ "scroll-mt": B() }],
        "scroll-mr": [{ "scroll-mr": B() }],
        "scroll-mb": [{ "scroll-mb": B() }],
        "scroll-ml": [{ "scroll-ml": B() }],
        "scroll-p": [{ "scroll-p": B() }],
        "scroll-px": [{ "scroll-px": B() }],
        "scroll-py": [{ "scroll-py": B() }],
        "scroll-ps": [{ "scroll-ps": B() }],
        "scroll-pe": [{ "scroll-pe": B() }],
        "scroll-pt": [{ "scroll-pt": B() }],
        "scroll-pr": [{ "scroll-pr": B() }],
        "scroll-pb": [{ "scroll-pb": B() }],
        "scroll-pl": [{ "scroll-pl": B() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", G] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [an, Dn, bu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  lS = qw(aS);
function Lt(...e) {
  return lS($0(e));
}
const iS = jw,
  sS = b.forwardRef(({ className: e, sideOffset: t = 4, ...n }, a) =>
    u.jsx(P0, {
      ref: a,
      sideOffset: t,
      className: Lt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
sS.displayName = P0.displayName;
var jo = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  To = typeof window > "u" || "Deno" in globalThis;
function Mt() {}
function rS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function oS(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function uS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ec(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function cS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vh(e, t) {
  const {
    type: n = "all",
    exact: a,
    fetchStatus: l,
    predicate: i,
    queryKey: s,
    stale: r,
  } = e;
  if (s) {
    if (a) {
      if (t.queryHash !== Yf(s, t.options)) return !1;
    } else if (!os(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const o = t.isActive();
    if ((n === "active" && !o) || (n === "inactive" && o)) return !1;
  }
  return !(
    (typeof r == "boolean" && t.isStale() !== r) ||
    (l && l !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Xh(e, t) {
  const { exact: n, status: a, predicate: l, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (rs(t.options.mutationKey) !== rs(i)) return !1;
    } else if (!os(t.options.mutationKey, i)) return !1;
  }
  return !((a && t.state.status !== a) || (l && !l(t)));
}
function Yf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || rs)(e);
}
function rs(e) {
  return JSON.stringify(e, (t, n) =>
    Nc(n)
      ? Object.keys(n)
          .sort()
          .reduce((a, l) => ((a[l] = n[l]), a), {})
      : n
  );
}
function os(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => os(e[n], t[n]))
    : !1;
}
function av(e, t) {
  if (e === t) return e;
  const n = Zh(e) && Zh(t);
  if (n || (Nc(e) && Nc(t))) {
    const a = n ? e : Object.keys(e),
      l = a.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      r = n ? [] : {},
      o = new Set(a);
    let c = 0;
    for (let d = 0; d < s; d++) {
      const m = n ? d : i[d];
      ((!n && o.has(m)) || n) && e[m] === void 0 && t[m] === void 0
        ? ((r[m] = void 0), c++)
        : ((r[m] = av(e[m], t[m])), r[m] === e[m] && e[m] !== void 0 && c++);
    }
    return l === s && c === l ? e : r;
  }
  return t;
}
function Zh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Nc(e) {
  if (!Kh(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Kh(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Kh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function fS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function dS(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? av(e, t)
    : t;
}
function hS(e, t, n = 0) {
  const a = [...e, t];
  return n && a.length > n ? a.slice(1) : a;
}
function mS(e, t, n = 0) {
  const a = [t, ...e];
  return n && a.length > n ? a.slice(0, -1) : a;
}
var Gf = Symbol();
function lv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Gf
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Sa,
  kn,
  zl,
  sm,
  pS =
    ((sm = class extends jo {
      constructor() {
        super();
        $(this, Sa);
        $(this, kn);
        $(this, zl);
        Y(this, zl, (t) => {
          if (!To && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, kn) || this.setEventListener(N(this, zl));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, kn)) == null || t.call(this), Y(this, kn, void 0));
      }
      setEventListener(t) {
        var n;
        Y(this, zl, t),
          (n = N(this, kn)) == null || n.call(this),
          Y(
            this,
            kn,
            t((a) => {
              typeof a == "boolean" ? this.setFocused(a) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        N(this, Sa) !== t && (Y(this, Sa, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof N(this, Sa) == "boolean"
          ? N(this, Sa)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Sa = new WeakMap()),
    (kn = new WeakMap()),
    (zl = new WeakMap()),
    sm),
  iv = new pS(),
  _l,
  Qn,
  Ul,
  rm,
  gS =
    ((rm = class extends jo {
      constructor() {
        super();
        $(this, _l, !0);
        $(this, Qn);
        $(this, Ul);
        Y(this, Ul, (t) => {
          if (!To && window.addEventListener) {
            const n = () => t(!0),
              a = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", a, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", a);
              }
            );
          }
        });
      }
      onSubscribe() {
        N(this, Qn) || this.setEventListener(N(this, Ul));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = N(this, Qn)) == null || t.call(this), Y(this, Qn, void 0));
      }
      setEventListener(t) {
        var n;
        Y(this, Ul, t),
          (n = N(this, Qn)) == null || n.call(this),
          Y(this, Qn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        N(this, _l) !== t &&
          (Y(this, _l, t),
          this.listeners.forEach((a) => {
            a(t);
          }));
      }
      isOnline() {
        return N(this, _l);
      }
    }),
    (_l = new WeakMap()),
    (Qn = new WeakMap()),
    (Ul = new WeakMap()),
    rm),
  Wr = new gS();
function vS() {
  let e, t;
  const n = new Promise((l, i) => {
    (e = l), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function a(l) {
    Object.assign(n, l), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (l) => {
      a({ status: "fulfilled", value: l }), e(l);
    }),
    (n.reject = (l) => {
      a({ status: "rejected", reason: l }), t(l);
    }),
    n
  );
}
function yS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function sv(e) {
  return (e ?? "online") === "online" ? Wr.isOnline() : !0;
}
var rv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function xu(e) {
  return e instanceof rv;
}
function ov(e) {
  let t = !1,
    n = 0,
    a = !1,
    l;
  const i = vS(),
    s = (y) => {
      var x;
      a || (h(new rv(y)), (x = e.abort) == null || x.call(e));
    },
    r = () => {
      t = !0;
    },
    o = () => {
      t = !1;
    },
    c = () =>
      iv.isFocused() &&
      (e.networkMode === "always" || Wr.isOnline()) &&
      e.canRun(),
    d = () => sv(e.networkMode) && e.canRun(),
    m = (y) => {
      var x;
      a ||
        ((a = !0),
        (x = e.onSuccess) == null || x.call(e, y),
        l == null || l(),
        i.resolve(y));
    },
    h = (y) => {
      var x;
      a ||
        ((a = !0),
        (x = e.onError) == null || x.call(e, y),
        l == null || l(),
        i.reject(y));
    },
    f = () =>
      new Promise((y) => {
        var x;
        (l = (p) => {
          (a || c()) && y(p);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var y;
        (l = void 0), a || (y = e.onContinue) == null || y.call(e);
      }),
    S = () => {
      if (a) return;
      let y;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        y = x ?? e.fn();
      } catch (p) {
        y = Promise.reject(p);
      }
      Promise.resolve(y)
        .then(m)
        .catch((p) => {
          var T;
          if (a) return;
          const g = e.retry ?? (To ? 0 : 3),
            v = e.retryDelay ?? yS,
            w = typeof v == "function" ? v(n, p) : v,
            A =
              g === !0 ||
              (typeof g == "number" && n < g) ||
              (typeof g == "function" && g(n, p));
          if (t || !A) {
            h(p);
            return;
          }
          n++,
            (T = e.onFail) == null || T.call(e, n, p),
            fS(w)
              .then(() => (c() ? void 0 : f()))
              .then(() => {
                t ? h(p) : S();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (l == null || l(), i),
    cancelRetry: r,
    continueRetry: o,
    canStart: d,
    start: () => (d() ? S() : f().then(S), i),
  };
}
var bS = (e) => setTimeout(e, 0);
function xS() {
  let e = [],
    t = 0,
    n = (r) => {
      r();
    },
    a = (r) => {
      r();
    },
    l = bS;
  const i = (r) => {
      t
        ? e.push(r)
        : l(() => {
            n(r);
          });
    },
    s = () => {
      const r = e;
      (e = []),
        r.length &&
          l(() => {
            a(() => {
              r.forEach((o) => {
                n(o);
              });
            });
          });
    };
  return {
    batch: (r) => {
      let o;
      t++;
      try {
        o = r();
      } finally {
        t--, t || s();
      }
      return o;
    },
    batchCalls:
      (r) =>
      (...o) => {
        i(() => {
          r(...o);
        });
      },
    schedule: i,
    setNotifyFunction: (r) => {
      n = r;
    },
    setBatchNotifyFunction: (r) => {
      a = r;
    },
    setScheduler: (r) => {
      l = r;
    },
  };
}
var Ze = xS(),
  Aa,
  om,
  uv =
    ((om = class {
      constructor() {
        $(this, Aa);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          oS(this.gcTime) &&
            Y(
              this,
              Aa,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (To ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        N(this, Aa) && (clearTimeout(N(this, Aa)), Y(this, Aa, void 0));
      }
    }),
    (Aa = new WeakMap()),
    om),
  Bl,
  Ea,
  gt,
  Na,
  ke,
  fs,
  ja,
  Rt,
  ln,
  um,
  wS =
    ((um = class extends uv {
      constructor(t) {
        super();
        $(this, Rt);
        $(this, Bl);
        $(this, Ea);
        $(this, gt);
        $(this, Na);
        $(this, ke);
        $(this, fs);
        $(this, ja);
        Y(this, ja, !1),
          Y(this, fs, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          Y(this, Na, t.client),
          Y(this, gt, N(this, Na).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          Y(this, Bl, AS(this.options)),
          (this.state = t.state ?? N(this, Bl)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = N(this, ke)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...N(this, fs), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          N(this, gt).remove(this);
      }
      setData(t, n) {
        const a = dS(this.state.data, t, this.options);
        return (
          Ge(this, Rt, ln).call(this, {
            data: a,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          a
        );
      }
      setState(t, n) {
        Ge(this, Rt, ln).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var a, l;
        const n = (a = N(this, ke)) == null ? void 0 : a.promise;
        return (
          (l = N(this, ke)) == null || l.cancel(t),
          n ? n.then(Mt).catch(Mt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(N(this, Bl));
      }
      isActive() {
        return this.observers.some((t) => cS(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Gf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Ec(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !uS(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((a) => a.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, ke)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((a) => a.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = N(this, ke)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          N(this, gt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (N(this, ke) &&
              (N(this, ja)
                ? N(this, ke).cancel({ revert: !0 })
                : N(this, ke).cancelRetry()),
            this.scheduleGc()),
          N(this, gt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ge(this, Rt, ln).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var c, d, m;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (N(this, ke))
            return N(this, ke).continueRetry(), N(this, ke).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const h = this.observers.find((f) => f.options.queryFn);
          h && this.setOptions(h.options);
        }
        const a = new AbortController(),
          l = (h) => {
            Object.defineProperty(h, "signal", {
              enumerable: !0,
              get: () => (Y(this, ja, !0), a.signal),
            });
          },
          i = () => {
            const h = lv(this.options, n),
              S = (() => {
                const y = {
                  client: N(this, Na),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return l(y), y;
              })();
            return (
              Y(this, ja, !1),
              this.options.persister ? this.options.persister(h, S, this) : h(S)
            );
          },
          r = (() => {
            const h = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: N(this, Na),
              state: this.state,
              fetchFn: i,
            };
            return l(h), h;
          })();
        (c = this.options.behavior) == null || c.onFetch(r, this),
          Y(this, Ea, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = r.fetchOptions) == null ? void 0 : d.meta)) &&
            Ge(this, Rt, ln).call(this, {
              type: "fetch",
              meta: (m = r.fetchOptions) == null ? void 0 : m.meta,
            });
        const o = (h) => {
          var f, S, y, x;
          (xu(h) && h.silent) ||
            Ge(this, Rt, ln).call(this, { type: "error", error: h }),
            xu(h) ||
              ((S = (f = N(this, gt).config).onError) == null ||
                S.call(f, h, this),
              (x = (y = N(this, gt).config).onSettled) == null ||
                x.call(y, this.state.data, h, this)),
            this.scheduleGc();
        };
        return (
          Y(
            this,
            ke,
            ov({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: r.fetchFn,
              abort: a.abort.bind(a),
              onSuccess: (h) => {
                var f, S, y, x;
                if (h === void 0) {
                  o(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(h);
                } catch (p) {
                  o(p);
                  return;
                }
                (S = (f = N(this, gt).config).onSuccess) == null ||
                  S.call(f, h, this),
                  (x = (y = N(this, gt).config).onSettled) == null ||
                    x.call(y, h, this.state.error, this),
                  this.scheduleGc();
              },
              onError: o,
              onFail: (h, f) => {
                Ge(this, Rt, ln).call(this, {
                  type: "failed",
                  failureCount: h,
                  error: f,
                });
              },
              onPause: () => {
                Ge(this, Rt, ln).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ge(this, Rt, ln).call(this, { type: "continue" });
              },
              retry: r.options.retry,
              retryDelay: r.options.retryDelay,
              networkMode: r.options.networkMode,
              canRun: () => !0,
            })
          ),
          N(this, ke).start()
        );
      }
    }),
    (Bl = new WeakMap()),
    (Ea = new WeakMap()),
    (gt = new WeakMap()),
    (Na = new WeakMap()),
    (ke = new WeakMap()),
    (fs = new WeakMap()),
    (ja = new WeakMap()),
    (Rt = new WeakSet()),
    (ln = function (t) {
      const n = (a) => {
        switch (t.type) {
          case "failed":
            return {
              ...a,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...a, fetchStatus: "paused" };
          case "continue":
            return { ...a, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...a,
              ...SS(a.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              Y(this, Ea, void 0),
              {
                ...a,
                data: t.data,
                dataUpdateCount: a.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const l = t.error;
            return xu(l) && l.revert && N(this, Ea)
              ? { ...N(this, Ea), fetchStatus: "idle" }
              : {
                  ...a,
                  error: l,
                  errorUpdateCount: a.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: a.fetchFailureCount + 1,
                  fetchFailureReason: l,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...a, isInvalidated: !0 };
          case "setState":
            return { ...a, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Ze.batch(() => {
          this.observers.forEach((a) => {
            a.onQueryUpdate();
          }),
            N(this, gt).notify({ query: this, type: "updated", action: t });
        });
    }),
    um);
function SS(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: sv(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function AS(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    a = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? a ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Yt,
  cm,
  ES =
    ((cm = class extends jo {
      constructor(t = {}) {
        super();
        $(this, Yt);
        (this.config = t), Y(this, Yt, new Map());
      }
      build(t, n, a) {
        const l = n.queryKey,
          i = n.queryHash ?? Yf(l, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new wS({
              client: t,
              queryKey: l,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: a,
              defaultOptions: t.getQueryDefaults(l),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        N(this, Yt).has(t.queryHash) ||
          (N(this, Yt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = N(this, Yt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && N(this, Yt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return N(this, Yt).get(t);
      }
      getAll() {
        return [...N(this, Yt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((a) => Vh(n, a));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((a) => Vh(t, a)) : n;
      }
      notify(t) {
        Ze.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Yt = new WeakMap()),
    cm),
  Gt,
  Xe,
  Ta,
  kt,
  Un,
  fm,
  NS =
    ((fm = class extends uv {
      constructor(t) {
        super();
        $(this, kt);
        $(this, Gt);
        $(this, Xe);
        $(this, Ta);
        (this.mutationId = t.mutationId),
          Y(this, Xe, t.mutationCache),
          Y(this, Gt, []),
          (this.state = t.state || jS()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        N(this, Gt).includes(t) ||
          (N(this, Gt).push(t),
          this.clearGcTimeout(),
          N(this, Xe).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        Y(
          this,
          Gt,
          N(this, Gt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          N(this, Xe).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        N(this, Gt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : N(this, Xe).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = N(this, Ta)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, r, o, c, d, m, h, f, S, y, x, p, g, v, w, A, T, E, O;
        const n = () => {
          Ge(this, kt, Un).call(this, { type: "continue" });
        };
        Y(
          this,
          Ta,
          ov({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (U, z) => {
              Ge(this, kt, Un).call(this, {
                type: "failed",
                failureCount: U,
                error: z,
              });
            },
            onPause: () => {
              Ge(this, kt, Un).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, Xe).canRun(this),
          })
        );
        const a = this.state.status === "pending",
          l = !N(this, Ta).canStart();
        try {
          if (a) n();
          else {
            Ge(this, kt, Un).call(this, {
              type: "pending",
              variables: t,
              isPaused: l,
            }),
              await ((s = (i = N(this, Xe).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const z = await ((o = (r = this.options).onMutate) == null
              ? void 0
              : o.call(r, t));
            z !== this.state.context &&
              Ge(this, kt, Un).call(this, {
                type: "pending",
                context: z,
                variables: t,
                isPaused: l,
              });
          }
          const U = await N(this, Ta).start();
          return (
            await ((d = (c = N(this, Xe).config).onSuccess) == null
              ? void 0
              : d.call(c, U, t, this.state.context, this)),
            await ((h = (m = this.options).onSuccess) == null
              ? void 0
              : h.call(m, U, t, this.state.context)),
            await ((S = (f = N(this, Xe).config).onSettled) == null
              ? void 0
              : S.call(
                  f,
                  U,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((x = (y = this.options).onSettled) == null
              ? void 0
              : x.call(y, U, null, t, this.state.context)),
            Ge(this, kt, Un).call(this, { type: "success", data: U }),
            U
          );
        } catch (U) {
          try {
            throw (
              (await ((g = (p = N(this, Xe).config).onError) == null
                ? void 0
                : g.call(p, U, t, this.state.context, this)),
              await ((w = (v = this.options).onError) == null
                ? void 0
                : w.call(v, U, t, this.state.context)),
              await ((T = (A = N(this, Xe).config).onSettled) == null
                ? void 0
                : T.call(
                    A,
                    void 0,
                    U,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((O = (E = this.options).onSettled) == null
                ? void 0
                : O.call(E, void 0, U, t, this.state.context)),
              U)
            );
          } finally {
            Ge(this, kt, Un).call(this, { type: "error", error: U });
          }
        } finally {
          N(this, Xe).runNext(this);
        }
      }
    }),
    (Gt = new WeakMap()),
    (Xe = new WeakMap()),
    (Ta = new WeakMap()),
    (kt = new WeakSet()),
    (Un = function (t) {
      const n = (a) => {
        switch (t.type) {
          case "failed":
            return {
              ...a,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...a, isPaused: !0 };
          case "continue":
            return { ...a, isPaused: !1 };
          case "pending":
            return {
              ...a,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...a,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...a,
              data: void 0,
              error: t.error,
              failureCount: a.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Ze.batch(() => {
          N(this, Gt).forEach((a) => {
            a.onMutationUpdate(t);
          }),
            N(this, Xe).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    fm);
function jS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var rn,
  Dt,
  ds,
  dm,
  TS =
    ((dm = class extends jo {
      constructor(t = {}) {
        super();
        $(this, rn);
        $(this, Dt);
        $(this, ds);
        (this.config = t),
          Y(this, rn, new Set()),
          Y(this, Dt, new Map()),
          Y(this, ds, 0);
      }
      build(t, n, a) {
        const l = new NS({
          mutationCache: this,
          mutationId: ++Bs(this, ds)._,
          options: t.defaultMutationOptions(n),
          state: a,
        });
        return this.add(l), l;
      }
      add(t) {
        N(this, rn).add(t);
        const n = tr(t);
        if (typeof n == "string") {
          const a = N(this, Dt).get(n);
          a ? a.push(t) : N(this, Dt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (N(this, rn).delete(t)) {
          const n = tr(t);
          if (typeof n == "string") {
            const a = N(this, Dt).get(n);
            if (a)
              if (a.length > 1) {
                const l = a.indexOf(t);
                l !== -1 && a.splice(l, 1);
              } else a[0] === t && N(this, Dt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = tr(t);
        if (typeof n == "string") {
          const a = N(this, Dt).get(n),
            l =
              a == null ? void 0 : a.find((i) => i.state.status === "pending");
          return !l || l === t;
        } else return !0;
      }
      runNext(t) {
        var a;
        const n = tr(t);
        if (typeof n == "string") {
          const l =
            (a = N(this, Dt).get(n)) == null
              ? void 0
              : a.find((i) => i !== t && i.state.isPaused);
          return (l == null ? void 0 : l.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ze.batch(() => {
          N(this, rn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            N(this, rn).clear(),
            N(this, Dt).clear();
        });
      }
      getAll() {
        return Array.from(N(this, rn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((a) => Xh(n, a));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Xh(t, n));
      }
      notify(t) {
        Ze.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ze.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Mt)))
        );
      }
    }),
    (rn = new WeakMap()),
    (Dt = new WeakMap()),
    (ds = new WeakMap()),
    dm);
function tr(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Fh(e) {
  return {
    onFetch: (t, n) => {
      var d, m, h, f, S;
      const a = t.options,
        l =
          (h =
            (m = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : m.fetchMore) == null
            ? void 0
            : h.direction,
        i = ((f = t.state.data) == null ? void 0 : f.pages) || [],
        s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let r = { pages: [], pageParams: [] },
        o = 0;
      const c = async () => {
        let y = !1;
        const x = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          p = lv(t.options, t.fetchOptions),
          g = async (v, w, A) => {
            if (y) return Promise.reject();
            if (w == null && v.pages.length) return Promise.resolve(v);
            const E = (() => {
                const k = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: w,
                  direction: A ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return x(k), k;
              })(),
              O = await p(E),
              { maxPages: U } = t.options,
              z = A ? mS : hS;
            return {
              pages: z(v.pages, O, U),
              pageParams: z(v.pageParams, w, U),
            };
          };
        if (l && i.length) {
          const v = l === "backward",
            w = v ? CS : Ph,
            A = { pages: i, pageParams: s },
            T = w(a, A);
          r = await g(A, T, v);
        } else {
          const v = e ?? i.length;
          do {
            const w = o === 0 ? s[0] ?? a.initialPageParam : Ph(a, r);
            if (o > 0 && w == null) break;
            (r = await g(r, w)), o++;
          } while (o < v);
        }
        return r;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, x;
            return (x = (y = t.options).persister) == null
              ? void 0
              : x.call(
                  y,
                  c,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = c);
    },
  };
}
function Ph(e, { pages: t, pageParams: n }) {
  const a = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[a], t, n[a], n) : void 0;
}
function CS(e, { pages: t, pageParams: n }) {
  var a;
  return t.length > 0
    ? (a = e.getPreviousPageParam) == null
      ? void 0
      : a.call(e, t[0], t, n[0], n)
    : void 0;
}
var xe,
  Vn,
  Xn,
  Hl,
  Ll,
  Zn,
  ql,
  Yl,
  hm,
  OS =
    ((hm = class {
      constructor(e = {}) {
        $(this, xe);
        $(this, Vn);
        $(this, Xn);
        $(this, Hl);
        $(this, Ll);
        $(this, Zn);
        $(this, ql);
        $(this, Yl);
        Y(this, xe, e.queryCache || new ES()),
          Y(this, Vn, e.mutationCache || new TS()),
          Y(this, Xn, e.defaultOptions || {}),
          Y(this, Hl, new Map()),
          Y(this, Ll, new Map()),
          Y(this, Zn, 0);
      }
      mount() {
        Bs(this, Zn)._++,
          N(this, Zn) === 1 &&
            (Y(
              this,
              ql,
              iv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, xe).onFocus());
              })
            ),
            Y(
              this,
              Yl,
              Wr.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), N(this, xe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Bs(this, Zn)._--,
          N(this, Zn) === 0 &&
            ((e = N(this, ql)) == null || e.call(this),
            Y(this, ql, void 0),
            (t = N(this, Yl)) == null || t.call(this),
            Y(this, Yl, void 0));
      }
      isFetching(e) {
        return N(this, xe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return N(this, Vn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, xe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = N(this, xe).build(this, t),
          a = n.state.data;
        return a === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Ec(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(a));
      }
      getQueriesData(e) {
        return N(this, xe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const a = n.data;
            return [t, a];
          });
      }
      setQueryData(e, t, n) {
        const a = this.defaultQueryOptions({ queryKey: e }),
          l = N(this, xe).get(a.queryHash),
          i = l == null ? void 0 : l.state.data,
          s = rS(t, i);
        if (s !== void 0)
          return N(this, xe)
            .build(this, a)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ze.batch(() =>
          N(this, xe)
            .findAll(e)
            .map(({ queryKey: a }) => [a, this.setQueryData(a, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = N(this, xe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = N(this, xe);
        Ze.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = N(this, xe);
        return Ze.batch(
          () => (
            n.findAll(e).forEach((a) => {
              a.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          a = Ze.batch(() =>
            N(this, xe)
              .findAll(e)
              .map((l) => l.cancel(n))
          );
        return Promise.all(a).then(Mt).catch(Mt);
      }
      invalidateQueries(e, t = {}) {
        return Ze.batch(
          () => (
            N(this, xe)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          a = Ze.batch(() =>
            N(this, xe)
              .findAll(e)
              .filter((l) => !l.isDisabled() && !l.isStatic())
              .map((l) => {
                let i = l.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Mt)),
                  l.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(a).then(Mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, xe).build(this, t);
        return n.isStaleByTime(Ec(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Mt).catch(Mt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Fh(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Mt).catch(Mt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = Fh(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Wr.isOnline()
          ? N(this, Vn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return N(this, xe);
      }
      getMutationCache() {
        return N(this, Vn);
      }
      getDefaultOptions() {
        return N(this, Xn);
      }
      setDefaultOptions(e) {
        Y(this, Xn, e);
      }
      setQueryDefaults(e, t) {
        N(this, Hl).set(rs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...N(this, Hl).values()],
          n = {};
        return (
          t.forEach((a) => {
            os(e, a.queryKey) && Object.assign(n, a.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        N(this, Ll).set(rs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...N(this, Ll).values()],
          n = {};
        return (
          t.forEach((a) => {
            os(e, a.mutationKey) && Object.assign(n, a.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...N(this, Xn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Yf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Gf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...N(this, Xn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        N(this, xe).clear(), N(this, Vn).clear();
      }
    }),
    (xe = new WeakMap()),
    (Vn = new WeakMap()),
    (Xn = new WeakMap()),
    (Hl = new WeakMap()),
    (Ll = new WeakMap()),
    (Zn = new WeakMap()),
    (ql = new WeakMap()),
    (Yl = new WeakMap()),
    hm),
  MS = b.createContext(void 0),
  RS = ({ client: e, children: t }) => (
    b.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    u.jsx(MS.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function us() {
  return (
    (us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    us.apply(this, arguments)
  );
}
var $n;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($n || ($n = {}));
const Jh = "popstate";
function DS(e) {
  e === void 0 && (e = {});
  function t(a, l) {
    let { pathname: i, search: s, hash: r } = a.location;
    return jc(
      "",
      { pathname: i, search: s, hash: r },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(a, l) {
    return typeof l == "string" ? l : Ir(l);
  }
  return _S(t, n, null, e);
}
function Oe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function cv(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function zS() {
  return Math.random().toString(36).substr(2, 8);
}
function $h(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function jc(e, t, n, a) {
  return (
    n === void 0 && (n = null),
    us(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ci(t) : t,
      { state: n, key: (t && t.key) || a || zS() }
    )
  );
}
function Ir(e) {
  let { pathname: t = "/", search: n = "", hash: a = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    a && a !== "#" && (t += a.charAt(0) === "#" ? a : "#" + a),
    t
  );
}
function ci(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let a = e.indexOf("?");
    a >= 0 && ((t.search = e.substr(a)), (e = e.substr(0, a))),
      e && (t.pathname = e);
  }
  return t;
}
function _S(e, t, n, a) {
  a === void 0 && (a = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = a,
    s = l.history,
    r = $n.Pop,
    o = null,
    c = d();
  c == null && ((c = 0), s.replaceState(us({}, s.state, { idx: c }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function m() {
    r = $n.Pop;
    let x = d(),
      p = x == null ? null : x - c;
    (c = x), o && o({ action: r, location: y.location, delta: p });
  }
  function h(x, p) {
    r = $n.Push;
    let g = jc(y.location, x, p);
    c = d() + 1;
    let v = $h(g, c),
      w = y.createHref(g);
    try {
      s.pushState(v, "", w);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError") throw A;
      l.location.assign(w);
    }
    i && o && o({ action: r, location: y.location, delta: 1 });
  }
  function f(x, p) {
    r = $n.Replace;
    let g = jc(y.location, x, p);
    c = d();
    let v = $h(g, c),
      w = y.createHref(g);
    s.replaceState(v, "", w),
      i && o && o({ action: r, location: y.location, delta: 0 });
  }
  function S(x) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      g = typeof x == "string" ? x : Ir(x);
    return (
      (g = g.replace(/ $/, "%20")),
      Oe(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, p)
    );
  }
  let y = {
    get action() {
      return r;
    },
    get location() {
      return e(l, s);
    },
    listen(x) {
      if (o) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Jh, m),
        (o = x),
        () => {
          l.removeEventListener(Jh, m), (o = null);
        }
      );
    },
    createHref(x) {
      return t(l, x);
    },
    createURL: S,
    encodeLocation(x) {
      let p = S(x);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: f,
    go(x) {
      return s.go(x);
    },
  };
  return y;
}
var Wh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wh || (Wh = {}));
function US(e, t, n) {
  return n === void 0 && (n = "/"), BS(e, t, n);
}
function BS(e, t, n, a) {
  let l = typeof t == "string" ? ci(t) : t,
    i = kf(l.pathname || "/", n);
  if (i == null) return null;
  let s = fv(e);
  HS(s);
  let r = null;
  for (let o = 0; r == null && o < s.length; ++o) {
    let c = PS(i);
    r = ZS(s[o], c);
  }
  return r;
}
function fv(e, t, n, a) {
  t === void 0 && (t = []), n === void 0 && (n = []), a === void 0 && (a = "");
  let l = (i, s, r) => {
    let o = {
      relativePath: r === void 0 ? i.path || "" : r,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    o.relativePath.startsWith("/") &&
      (Oe(
        o.relativePath.startsWith(a),
        'Absolute route path "' +
          o.relativePath +
          '" nested under path ' +
          ('"' + a + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (o.relativePath = o.relativePath.slice(a.length)));
    let c = sa([a, o.relativePath]),
      d = n.concat(o);
    i.children &&
      i.children.length > 0 &&
      (Oe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      fv(i.children, t, d, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: VS(c, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var r;
      if (i.path === "" || !((r = i.path) != null && r.includes("?"))) l(i, s);
      else for (let o of dv(i.path)) l(i, s, o);
    }),
    t
  );
}
function dv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...a] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (a.length === 0) return l ? [i, ""] : [i];
  let s = dv(a.join("/")),
    r = [];
  return (
    r.push(...s.map((o) => (o === "" ? i : [i, o].join("/")))),
    l && r.push(...s),
    r.map((o) => (e.startsWith("/") && o === "" ? "/" : o))
  );
}
function HS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : XS(
          t.routesMeta.map((a) => a.childrenIndex),
          n.routesMeta.map((a) => a.childrenIndex)
        )
  );
}
const LS = /^:[\w-]+$/,
  qS = 3,
  YS = 2,
  GS = 1,
  kS = 10,
  QS = -2,
  Ih = (e) => e === "*";
function VS(e, t) {
  let n = e.split("/"),
    a = n.length;
  return (
    n.some(Ih) && (a += QS),
    t && (a += YS),
    n
      .filter((l) => !Ih(l))
      .reduce((l, i) => l + (LS.test(i) ? qS : i === "" ? GS : kS), a)
  );
}
function XS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, l) => a === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ZS(e, t, n) {
  let { routesMeta: a } = e,
    l = {},
    i = "/",
    s = [];
  for (let r = 0; r < a.length; ++r) {
    let o = a[r],
      c = r === a.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      m = KS(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: c },
        d
      ),
      h = o.route;
    if (!m) return null;
    Object.assign(l, m.params),
      s.push({
        params: l,
        pathname: sa([i, m.pathname]),
        pathnameBase: IS(sa([i, m.pathnameBase])),
        route: h,
      }),
      m.pathnameBase !== "/" && (i = sa([i, m.pathnameBase]));
  }
  return s;
}
function KS(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, a] = FS(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    s = i.replace(/(.)\/+$/, "$1"),
    r = l.slice(1);
  return {
    params: a.reduce((c, d, m) => {
      let { paramName: h, isOptional: f } = d;
      if (h === "*") {
        let y = r[m] || "";
        s = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const S = r[m];
      return (
        f && !S ? (c[h] = void 0) : (c[h] = (S || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function FS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    cv(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let a = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, r, o) => (
            a.push({ paramName: r, isOptional: o != null }),
            o ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), a]
  );
}
function PS(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      cv(
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
function kf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    a = e.charAt(n);
  return a && a !== "/" ? null : e.slice(n) || "/";
}
function JS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: a = "",
    hash: l = "",
  } = typeof e == "string" ? ci(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : $S(n, t)) : t,
    search: e4(a),
    hash: t4(l),
  };
}
function $S(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function wu(e, t, n, a) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(a) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function WS(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function hv(e, t) {
  let n = WS(e);
  return t
    ? n.map((a, l) => (l === n.length - 1 ? a.pathname : a.pathnameBase))
    : n.map((a) => a.pathnameBase);
}
function mv(e, t, n, a) {
  a === void 0 && (a = !1);
  let l;
  typeof e == "string"
    ? (l = ci(e))
    : ((l = us({}, e)),
      Oe(
        !l.pathname || !l.pathname.includes("?"),
        wu("?", "pathname", "search", l)
      ),
      Oe(
        !l.pathname || !l.pathname.includes("#"),
        wu("#", "pathname", "hash", l)
      ),
      Oe(!l.search || !l.search.includes("#"), wu("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    s = i ? "/" : l.pathname,
    r;
  if (s == null) r = n;
  else {
    let m = t.length - 1;
    if (!a && s.startsWith("..")) {
      let h = s.split("/");
      for (; h[0] === ".."; ) h.shift(), (m -= 1);
      l.pathname = h.join("/");
    }
    r = m >= 0 ? t[m] : "/";
  }
  let o = JS(l, r),
    c = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/");
  return !o.pathname.endsWith("/") && (c || d) && (o.pathname += "/"), o;
}
const sa = (e) => e.join("/").replace(/\/\/+/g, "/"),
  IS = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  e4 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  t4 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function n4(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const pv = ["post", "put", "patch", "delete"];
new Set(pv);
const a4 = ["get", ...pv];
new Set(a4);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function cs() {
  return (
    (cs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    cs.apply(this, arguments)
  );
}
const Qf = b.createContext(null),
  l4 = b.createContext(null),
  Xa = b.createContext(null),
  Co = b.createContext(null),
  Za = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  gv = b.createContext(null);
function i4(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ms() || Oe(!1);
  let { basename: a, navigator: l } = b.useContext(Xa),
    { hash: i, pathname: s, search: r } = yv(e, { relative: n }),
    o = s;
  return (
    a !== "/" && (o = s === "/" ? a : sa([a, s])),
    l.createHref({ pathname: o, search: r, hash: i })
  );
}
function Ms() {
  return b.useContext(Co) != null;
}
function Rs() {
  return Ms() || Oe(!1), b.useContext(Co).location;
}
function vv(e) {
  b.useContext(Xa).static || b.useLayoutEffect(e);
}
function s4() {
  let { isDataRoute: e } = b.useContext(Za);
  return e ? b4() : r4();
}
function r4() {
  Ms() || Oe(!1);
  let e = b.useContext(Qf),
    { basename: t, future: n, navigator: a } = b.useContext(Xa),
    { matches: l } = b.useContext(Za),
    { pathname: i } = Rs(),
    s = JSON.stringify(hv(l, n.v7_relativeSplatPath)),
    r = b.useRef(!1);
  return (
    vv(() => {
      r.current = !0;
    }),
    b.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !r.current)) return;
        if (typeof c == "number") {
          a.go(c);
          return;
        }
        let m = mv(c, JSON.parse(s), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : sa([t, m.pathname])),
          (d.replace ? a.replace : a.push)(m, d.state, d);
      },
      [t, a, s, i, e]
    )
  );
}
function yv(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: a } = b.useContext(Xa),
    { matches: l } = b.useContext(Za),
    { pathname: i } = Rs(),
    s = JSON.stringify(hv(l, a.v7_relativeSplatPath));
  return b.useMemo(() => mv(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function o4(e, t) {
  return u4(e, t);
}
function u4(e, t, n, a) {
  Ms() || Oe(!1);
  let { navigator: l } = b.useContext(Xa),
    { matches: i } = b.useContext(Za),
    s = i[i.length - 1],
    r = s ? s.params : {};
  s && s.pathname;
  let o = s ? s.pathnameBase : "/";
  s && s.route;
  let c = Rs(),
    d;
  if (t) {
    var m;
    let x = typeof t == "string" ? ci(t) : t;
    o === "/" || ((m = x.pathname) != null && m.startsWith(o)) || Oe(!1),
      (d = x);
  } else d = c;
  let h = d.pathname || "/",
    f = h;
  if (o !== "/") {
    let x = o.replace(/^\//, "").split("/");
    f = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let S = US(e, { pathname: f }),
    y = m4(
      S &&
        S.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, r, x.params),
            pathname: sa([
              o,
              l.encodeLocation
                ? l.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? o
                : sa([
                    o,
                    l.encodeLocation
                      ? l.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      a
    );
  return t && y
    ? b.createElement(
        Co.Provider,
        {
          value: {
            location: cs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: $n.Pop,
          },
        },
        y
      )
    : y;
}
function c4() {
  let e = y4(),
    t = n4(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: l }, n) : null,
    null
  );
}
const f4 = b.createElement(c4, null);
class d4 extends b.Component {
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
      ? b.createElement(
          Za.Provider,
          { value: this.props.routeContext },
          b.createElement(gv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function h4(e) {
  let { routeContext: t, match: n, children: a } = e,
    l = b.useContext(Qf);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(Za.Provider, { value: t }, a)
  );
}
function m4(e, t, n, a) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    a === void 0 && (a = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = a) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    r = (l = n) == null ? void 0 : l.errors;
  if (r != null) {
    let d = s.findIndex(
      (m) => m.route.id && (r == null ? void 0 : r[m.route.id]) !== void 0
    );
    d >= 0 || Oe(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let o = !1,
    c = -1;
  if (n && a && a.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let m = s[d];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = d),
        m.route.id)
      ) {
        let { loaderData: h, errors: f } = n,
          S =
            m.route.loader &&
            h[m.route.id] === void 0 &&
            (!f || f[m.route.id] === void 0);
        if (m.route.lazy || S) {
          (o = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, m, h) => {
    let f,
      S = !1,
      y = null,
      x = null;
    n &&
      ((f = r && m.route.id ? r[m.route.id] : void 0),
      (y = m.route.errorElement || f4),
      o &&
        (c < 0 && h === 0
          ? (x4("route-fallback"), (S = !0), (x = null))
          : c === h &&
            ((S = !0), (x = m.route.hydrateFallbackElement || null))));
    let p = t.concat(s.slice(0, h + 1)),
      g = () => {
        let v;
        return (
          f
            ? (v = y)
            : S
            ? (v = x)
            : m.route.Component
            ? (v = b.createElement(m.route.Component, null))
            : m.route.element
            ? (v = m.route.element)
            : (v = d),
          b.createElement(h4, {
            match: m,
            routeContext: { outlet: d, matches: p, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || h === 0)
      ? b.createElement(d4, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: f,
          children: g(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var bv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(bv || {}),
  xv = (function (e) {
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
  })(xv || {});
function p4(e) {
  let t = b.useContext(Qf);
  return t || Oe(!1), t;
}
function g4(e) {
  let t = b.useContext(l4);
  return t || Oe(!1), t;
}
function v4(e) {
  let t = b.useContext(Za);
  return t || Oe(!1), t;
}
function wv(e) {
  let t = v4(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Oe(!1), n.route.id;
}
function y4() {
  var e;
  let t = b.useContext(gv),
    n = g4(),
    a = wv();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[a];
}
function b4() {
  let { router: e } = p4(bv.UseNavigateStable),
    t = wv(xv.UseNavigateStable),
    n = b.useRef(!1);
  return (
    vv(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, cs({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const em = {};
function x4(e, t, n) {
  em[e] || (em[e] = !0);
}
function w4(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function it(e) {
  Oe(!1);
}
function S4(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: a,
    navigationType: l = $n.Pop,
    navigator: i,
    static: s = !1,
    future: r,
  } = e;
  Ms() && Oe(!1);
  let o = t.replace(/^\/*/, "/"),
    c = b.useMemo(
      () => ({
        basename: o,
        navigator: i,
        static: s,
        future: cs({ v7_relativeSplatPath: !1 }, r),
      }),
      [o, r, i, s]
    );
  typeof a == "string" && (a = ci(a));
  let {
      pathname: d = "/",
      search: m = "",
      hash: h = "",
      state: f = null,
      key: S = "default",
    } = a,
    y = b.useMemo(() => {
      let x = kf(d, o);
      return x == null
        ? null
        : {
            location: { pathname: x, search: m, hash: h, state: f, key: S },
            navigationType: l,
          };
    }, [o, d, m, h, f, S, l]);
  return y == null
    ? null
    : b.createElement(
        Xa.Provider,
        { value: c },
        b.createElement(Co.Provider, { children: n, value: y })
      );
}
function A4(e) {
  let { children: t, location: n } = e;
  return o4(Tc(t), n);
}
new Promise(() => {});
function Tc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (a, l) => {
      if (!b.isValidElement(a)) return;
      let i = [...t, l];
      if (a.type === b.Fragment) {
        n.push.apply(n, Tc(a.props.children, i));
        return;
      }
      a.type !== it && Oe(!1), !a.props.index || !a.props.children || Oe(!1);
      let s = {
        id: a.props.id || i.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.ErrorBoundary != null || a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      a.props.children && (s.children = Tc(a.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cc() {
  return (
    (Cc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        }),
    Cc.apply(this, arguments)
  );
}
function E4(e, t) {
  if (e == null) return {};
  var n = {},
    a = Object.keys(e),
    l,
    i;
  for (i = 0; i < a.length; i++)
    (l = a[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function N4(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function j4(e, t) {
  return e.button === 0 && (!t || t === "_self") && !N4(e);
}
const T4 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  C4 = "6";
try {
  window.__reactRouterVersion = C4;
} catch {}
const O4 = "startTransition",
  tm = oy[O4];
function M4(e) {
  let { basename: t, children: n, future: a, window: l } = e,
    i = b.useRef();
  i.current == null && (i.current = DS({ window: l, v5Compat: !0 }));
  let s = i.current,
    [r, o] = b.useState({ action: s.action, location: s.location }),
    { v7_startTransition: c } = a || {},
    d = b.useCallback(
      (m) => {
        c && tm ? tm(() => o(m)) : o(m);
      },
      [o, c]
    );
  return (
    b.useLayoutEffect(() => s.listen(d), [s, d]),
    b.useEffect(() => w4(a), [a]),
    b.createElement(S4, {
      basename: t,
      children: n,
      location: r.location,
      navigationType: r.action,
      navigator: s,
      future: a,
    })
  );
}
const R4 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  D4 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Le = b.forwardRef(function (t, n) {
    let {
        onClick: a,
        relative: l,
        reloadDocument: i,
        replace: s,
        state: r,
        target: o,
        to: c,
        preventScrollReset: d,
        viewTransition: m,
      } = t,
      h = E4(t, T4),
      { basename: f } = b.useContext(Xa),
      S,
      y = !1;
    if (typeof c == "string" && D4.test(c) && ((S = c), R4))
      try {
        let v = new URL(window.location.href),
          w = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
          A = kf(w.pathname, f);
        w.origin === v.origin && A != null
          ? (c = A + w.search + w.hash)
          : (y = !0);
      } catch {}
    let x = i4(c, { relative: l }),
      p = z4(c, {
        replace: s,
        state: r,
        target: o,
        preventScrollReset: d,
        relative: l,
        viewTransition: m,
      });
    function g(v) {
      a && a(v), v.defaultPrevented || p(v);
    }
    return b.createElement(
      "a",
      Cc({}, h, { href: S || x, onClick: y || i ? a : g, ref: n, target: o })
    );
  });
var nm;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(nm || (nm = {}));
var am;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(am || (am = {}));
function z4(e, t) {
  let {
      target: n,
      replace: a,
      state: l,
      preventScrollReset: i,
      relative: s,
      viewTransition: r,
    } = t === void 0 ? {} : t,
    o = s4(),
    c = Rs(),
    d = yv(e, { relative: s });
  return b.useCallback(
    (m) => {
      if (j4(m, n)) {
        m.preventDefault();
        let h = a !== void 0 ? a : Ir(c) === Ir(d);
        o(e, {
          replace: h,
          state: l,
          preventScrollReset: i,
          relative: s,
          viewTransition: r,
        });
      }
    },
    [c, o, d, a, l, n, e, i, s, r]
  );
}
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _4 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Sv = (...e) =>
    e
      .filter((t, n, a) => !!t && t.trim() !== "" && a.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var U4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B4 = b.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: a,
      className: l = "",
      children: i,
      iconNode: s,
      ...r
    },
    o
  ) =>
    b.createElement(
      "svg",
      {
        ref: o,
        ...U4,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: a ? (Number(n) * 24) / Number(t) : n,
        className: Sv("lucide", l),
        ...r,
      },
      [
        ...s.map(([c, d]) => b.createElement(c, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ve = (e, t) => {
  const n = b.forwardRef(({ className: a, ...l }, i) =>
    b.createElement(B4, {
      ref: i,
      iconNode: t,
      className: Sv(`lucide-${_4(e)}`, a),
      ...l,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H4 = ve("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L4 = ve("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Av = ve("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q4 = ve("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ev = ve("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nv = ve("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gr = ve("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y4 = ve("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G4 = ve("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k4 = ve("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q4 = ve("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V4 = ve("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = ve("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jv = ve("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X4 = ve("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = ve("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = ve("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z4 = ve("Star", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K4 = ve("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F4 = ve("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tv = ve("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P4 = ve("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J4 = ve("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4",
    },
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $4 = ve("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  we = {
    phone: "+92 315 4216083",
    email: "ironartofficial3@gmail.com",
    whatsapp: {
      number: "923154216083",
      message: "Aslam-o-Alaikum from website",
    },
    social: {
      facebook: "https://facebook.com/ironart",
      instagram: "https://instagram.com/ironart",
      linkedin: "https://linkedin.com/company/ironart",
      youtube: "https://youtube.com/@ironart",
    },
    address: "Industrial Area, Lahore, Pakistan",
  },
  W4 = ["DXF", "DWG", "CDR", "AI", "PDF"],
  Oc = {
    yearsOfExperience: 5,
    tagline: "Precision Metal Cutting & Fabrication Services",
    description:
      "Leading provider of industrial metal fabrication services and custom metal art solutions",
  };
function Ka() {
  return u.jsx("div", {
    className: "bg-black text-white py-2",
    children: u.jsx("div", {
      className: "container mx-auto px-4",
      children: u.jsxs("div", {
        className:
          "flex flex-col sm:flex-row justify-between items-center text-sm gap-2",
        children: [
          u.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              u.jsxs("a", {
                href: `tel:${we.phone}`,
                className:
                  "flex items-center gap-2 hover:text-[#D4AF37] transition-colors",
                children: [
                  u.jsx(Zf, { className: "w-4 h-4" }),
                  u.jsx("span", { children: we.phone }),
                ],
              }),
              u.jsxs("a", {
                href: `mailto:${we.email}`,
                className:
                  "flex items-center gap-2 hover:text-[#D4AF37] transition-colors",
                children: [
                  u.jsx(Vf, { className: "w-4 h-4" }),
                  u.jsx("span", { children: we.email }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "text-xs text-gray-300",
            children: "5+ Years of Excellence in Metal Fabrication",
          }),
        ],
      }),
    }),
  });
}
const lm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  im = $0,
  Cv = (e, t) => (n) => {
    var a;
    if ((t == null ? void 0 : t.variants) == null)
      return im(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: l, defaultVariants: i } = t,
      s = Object.keys(l).map((c) => {
        const d = n == null ? void 0 : n[c],
          m = i == null ? void 0 : i[c];
        if (d === null) return null;
        const h = lm(d) || lm(m);
        return l[c][h];
      }),
      r =
        n &&
        Object.entries(n).reduce((c, d) => {
          let [m, h] = d;
          return h === void 0 || (c[m] = h), c;
        }, {}),
      o =
        t == null || (a = t.compoundVariants) === null || a === void 0
          ? void 0
          : a.reduce((c, d) => {
              let { class: m, className: h, ...f } = d;
              return Object.entries(f).every((S) => {
                let [y, x] = S;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...r }[y])
                  : { ...i, ...r }[y] === x;
              })
                ? [...c, m, h]
                : c;
            }, []);
    return im(
      e,
      s,
      o,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  I4 = Cv(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  et = b.forwardRef(
    ({ className: e, variant: t, size: n, asChild: a = !1, ...l }, i) => {
      const s = a ? w1 : "button";
      return u.jsx(s, {
        className: Lt(I4({ variant: t, size: n, className: e })),
        ref: i,
        ...l,
      });
    }
  );
et.displayName = "Button";
function Fa() {
  const [e, t] = b.useState(!1),
    n = Rs(),
    a = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Products", path: "/products" },
      { name: "Contact", path: "/contact" },
      { name: "Query", path: "/contact" },
      { name: "Blog", path: "/blog" },
    ],
    l = (i) =>
      !!(
        (i === "/" && n.pathname === "/") ||
        (i !== "/" && n.pathname.startsWith(i))
      );
  return u.jsx("header", {
    className: "bg-white shadow-sm sticky top-0 z-50",
    children: u.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        u.jsxs("div", {
          className: "flex items-center justify-between h-20",
          children: [
            u.jsx(Le, {
              to: "/",
              className: "flex items-center",
              children: u.jsx("img", {
                src: "/images/photo1766473533.jpg",
                alt: "Iron Art Logo",
                className: "h-14 w-auto object-contain",
              }),
            }),
            u.jsx("nav", {
              className: "hidden lg:flex items-center gap-6",
              children: a.map((i) =>
                u.jsx(
                  Le,
                  {
                    to: i.path,
                    className: `font-medium transition-colors ${
                      l(i.path)
                        ? "text-[#D4AF37]"
                        : "text-gray-700 hover:text-[#D4AF37]"
                    }`,
                    children: i.name,
                  },
                  i.path
                )
              ),
            }),
            u.jsx(et, {
              variant: "ghost",
              size: "icon",
              className: "lg:hidden",
              onClick: () => t(!e),
              children: e ? u.jsx(P4, {}) : u.jsx(X4, {}),
            }),
          ],
        }),
        e &&
          u.jsx("nav", {
            className: "lg:hidden py-4 border-t",
            children: a.map((i) =>
              u.jsx(
                Le,
                {
                  to: i.path,
                  onClick: () => t(!1),
                  className: `block py-3 font-medium transition-colors ${
                    l(i.path)
                      ? "text-[#D4AF37]"
                      : "text-gray-700 hover:text-[#D4AF37]"
                  }`,
                  children: i.name,
                },
                i.path
              )
            ),
          }),
      ],
    }),
  });
}
function Pa() {
  const e = new Date().getFullYear();
  return u.jsx("footer", {
    className: "bg-black text-white",
    children: u.jsxs("div", {
      className: "container mx-auto px-4 py-12",
      children: [
        u.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: [
            u.jsxs("div", {
              children: [
                u.jsx("img", {
                  src: "/images/photo1766382808.jpg",
                  alt: "Iron Art Logo",
                  className: "h-16 w-auto mb-4 brightness-0 invert",
                }),
                u.jsx("p", {
                  className: "text-gray-400 text-sm mb-4",
                  children:
                    "Leading provider of precision metal cutting and fabrication services with 5+ years of excellence.",
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h3", {
                  className: "text-lg font-semibold mb-4 text-[#D4AF37]",
                  children: "Quick Links",
                }),
                u.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Home",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/about",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "About Us",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/services",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Services",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/products",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Products",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/blog",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Blog",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h3", {
                  className: "text-lg font-semibold mb-4 text-[#D4AF37]",
                  children: "Our Services",
                }),
                u.jsxs("ul", {
                  className: "space-y-2",
                  children: [
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/services/plasma-cutting",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Plasma Cutting",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/services/laser-cutting",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Laser Cutting",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/services/flame-cutting",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Flame Cutting",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/services/cnc-bending",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "CNC Bending",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(Le, {
                        to: "/services/engraving-marking",
                        className:
                          "text-gray-400 hover:text-[#D4AF37] transition-colors",
                        children: "Engraving & Marking",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              children: [
                u.jsx("h3", {
                  className: "text-lg font-semibold mb-4 text-[#D4AF37]",
                  children: "Contact Us",
                }),
                u.jsxs("ul", {
                  className: "space-y-3",
                  children: [
                    u.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [
                        u.jsx(Zf, {
                          className:
                            "w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5",
                        }),
                        u.jsx("a", {
                          href: `tel:${we.phone}`,
                          className:
                            "text-gray-400 hover:text-[#D4AF37] transition-colors",
                          children: we.phone,
                        }),
                      ],
                    }),
                    u.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [
                        u.jsx(Vf, {
                          className:
                            "w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5",
                        }),
                        u.jsx("a", {
                          href: `mailto:${we.email}`,
                          className:
                            "text-gray-400 hover:text-[#D4AF37] transition-colors",
                          children: we.email,
                        }),
                      ],
                    }),
                    u.jsxs("li", {
                      className: "flex items-start gap-2",
                      children: [
                        u.jsx(jv, {
                          className:
                            "w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5",
                        }),
                        u.jsx("span", {
                          className: "text-gray-400",
                          children: we.address,
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex gap-4 mt-6",
                  children: [
                    u.jsx("a", {
                      href: we.social.facebook,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-gray-400 hover:text-[#D4AF37] transition-colors",
                      children: u.jsx(G4, { className: "w-5 h-5" }),
                    }),
                    u.jsx("a", {
                      href: we.social.instagram,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-gray-400 hover:text-[#D4AF37] transition-colors",
                      children: u.jsx(Q4, { className: "w-5 h-5" }),
                    }),
                    u.jsx("a", {
                      href: we.social.linkedin,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-gray-400 hover:text-[#D4AF37] transition-colors",
                      children: u.jsx(V4, { className: "w-5 h-5" }),
                    }),
                    u.jsx("a", {
                      href: we.social.youtube,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-gray-400 hover:text-[#D4AF37] transition-colors",
                      children: u.jsx(J4, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm",
          children: u.jsxs("p", {
            children: ["© ", e, " Iron Art. All rights reserved."],
          }),
        }),
      ],
    }),
  });
}
function Kf(e) {
  const t = e || we.whatsapp.message,
    n = encodeURIComponent(t);
  return `https://wa.me/${we.whatsapp.number}?text=${n}`;
}
function eA(e, t) {
  const n = `${we.whatsapp.message}

I'm interested in: ${e} (ID: ${t})

Please provide more details.`;
  return Kf(n);
}
function tA(e) {
  const t = `${we.whatsapp.message}

I need information about: ${e}

Please contact me to discuss my project requirements.`;
  return Kf(t);
}
function Ja() {
  const e = () => {
    const t = Kf();
    window.open(t, "_blank");
  };
  return u.jsx(et, {
    onClick: e,
    className:
      "fixed left-6 bottom-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg transition-all hover:scale-110",
    size: "icon",
    children: u.jsx(Xf, { className: "h-7 w-7 text-white" }),
  });
}
const sl = [
  {
    image: "/assets/hero-industrial-cutting-1.jpg",
    title: "Precision Metal Cutting Services",
    subtitle: "Industrial-grade CNC plasma and laser cutting solutions",
    cta: "Get a Custom Quote",
    ctaLink: "/contact",
  },
  {
    image: "/assets/hero-laser-cutting-2.jpg",
    title: "Advanced Fiber Laser Technology",
    subtitle: "Unmatched precision for intricate designs and complex patterns",
    cta: "View Services",
    ctaLink: "/services",
  },
  {
    image: "/assets/hero-metal-art-3.jpg",
    title: "Custom Metal Art & Decor",
    subtitle: "Transform your space with beautiful handcrafted metal artwork",
    cta: "Browse Products",
    ctaLink: "/products",
  },
];
function nA() {
  const [e, t] = b.useState(0);
  b.useEffect(() => {
    const l = setInterval(() => {
      t((i) => (i + 1) % sl.length);
    }, 5e3);
    return () => clearInterval(l);
  }, []);
  const n = () => {
      t((l) => (l + 1) % sl.length);
    },
    a = () => {
      t((l) => (l - 1 + sl.length) % sl.length);
    };
  return u.jsxs("div", {
    className: "relative h-screen w-full overflow-hidden",
    children: [
      sl.map((l, i) =>
        u.jsxs(
          "div",
          {
            className: `absolute inset-0 transition-opacity duration-1000 ${
              i === e ? "opacity-100" : "opacity-0"
            }`,
            children: [
              u.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center",
                style: { backgroundImage: `url(${l.image})` },
                children: u.jsx("div", {
                  className: "absolute inset-0 bg-black/50",
                }),
              }),
              u.jsx("div", {
                className:
                  "relative h-full flex items-center justify-center text-center px-4",
                children: u.jsxs("div", {
                  className: "max-w-4xl",
                  children: [
                    u.jsx("h1", {
                      className:
                        "text-4xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']",
                      children: l.title,
                    }),
                    u.jsx("p", {
                      className: "text-xl md:text-2xl text-white/90 mb-8",
                      children: l.subtitle,
                    }),
                    u.jsx(Le, {
                      to: l.ctaLink,
                      children: u.jsx(et, {
                        size: "lg",
                        className:
                          "bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold px-8 py-6 text-lg",
                        children: l.cta,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          },
          i
        )
      ),
      u.jsx("button", {
        onClick: a,
        className:
          "absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10",
        "aria-label": "Previous slide",
        children: u.jsx(Ev, { className: "w-6 h-6" }),
      }),
      u.jsx("button", {
        onClick: n,
        className:
          "absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10",
        "aria-label": "Next slide",
        children: u.jsx(Nv, { className: "w-6 h-6" }),
      }),
      u.jsx("div", {
        className:
          "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10",
        children: sl.map((l, i) =>
          u.jsx(
            "button",
            {
              onClick: () => t(i),
              className: `w-3 h-3 rounded-full transition-all ${
                i === e ? "bg-[#D4AF37] w-8" : "bg-white/50"
              }`,
              "aria-label": `Go to slide ${i + 1}`,
            },
            i
          )
        ),
      }),
    ],
  });
}
const $a = [
    {
      id: "plasma-cutting",
      title: "CNC Plasma Cutting",
      description:
        "High-precision plasma cutting for thick metal sheets with exceptional speed and accuracy. Ideal for industrial applications requiring clean cuts on various metal types.",
      image: "/assets/service-plasma-cutting.jpg",
      features: [
        "Cuts metal up to 50mm thickness",
        "High-speed cutting process",
        "Minimal heat-affected zone",
        "Cost-effective for thick materials",
        "Suitable for carbon steel, stainless steel, aluminum",
      ],
      applications: [
        "Industrial machinery parts",
        "Structural steel components",
        "Heavy equipment fabrication",
        "Construction materials",
        "Automotive parts",
      ],
      specifications: [
        "Maximum cutting thickness: 50mm",
        "Cutting speed: Up to 8000mm/min",
        "Accuracy: ±0.5mm",
        "Materials: Carbon steel, stainless steel, aluminum",
      ],
    },
    {
      id: "laser-cutting",
      title: "Fiber Laser Cutting",
      description:
        "State-of-the-art fiber laser technology delivering unmatched precision and intricate detail for complex designs and thin to medium thickness materials.",
      image: "/assets/service-laser-cutting.jpg",
      features: [
        "Ultra-high precision cutting",
        "Intricate pattern capability",
        "Smooth edge finish",
        "Minimal material waste",
        "Fast processing speed",
      ],
      applications: [
        "Decorative metal art",
        "Electronic enclosures",
        "Precision parts manufacturing",
        "Signage and branding",
        "Jewelry and accessories",
      ],
      specifications: [
        "Maximum cutting thickness: 25mm",
        "Cutting speed: Up to 15000mm/min",
        "Accuracy: ±0.1mm",
        "Materials: All metals including reflective materials",
      ],
    },
    {
      id: "flame-cutting",
      title: "Flame Cutting",
      description:
        "Traditional yet reliable flame cutting method perfect for heavy-duty applications and extremely thick metal plates where power and penetration are essential.",
      image: "/assets/service-flame-cutting.jpg",
      features: [
        "Cuts extremely thick materials",
        "Cost-effective for large projects",
        "Portable equipment available",
        "No electrical power required",
        "Ideal for on-site work",
      ],
      applications: [
        "Shipbuilding components",
        "Heavy structural steel",
        "Bridge construction parts",
        "Large industrial equipment",
        "Demolition and salvage",
      ],
      specifications: [
        "Maximum cutting thickness: 300mm+",
        "Materials: Carbon steel primarily",
        "Suitable for outdoor applications",
      ],
    },
    {
      id: "cnc-bending",
      title: "CNC Bending",
      description:
        "Precision metal bending and forming services using advanced CNC press brake technology for accurate angles and consistent results across production runs.",
      image: "/assets/service-cnc-bending.jpg",
      features: [
        "Precise angle control",
        "Repeatable accuracy",
        "Multiple bending operations",
        "Complex shape capability",
        "Automated positioning",
      ],
      applications: [
        "Enclosure fabrication",
        "Brackets and supports",
        "Architectural metalwork",
        "HVAC components",
        "Custom metal furniture",
      ],
      specifications: [
        "Maximum bending length: 3000mm",
        "Bending force: Up to 200 tons",
        "Angle accuracy: ±0.5°",
        "Materials: All bendable metals",
      ],
    },
    {
      id: "engraving-marking",
      title: "Engraving & Marking",
      description:
        "Professional laser engraving and marking services for permanent identification, branding, and decorative purposes on metal surfaces with exceptional detail.",
      image: "/assets/service-engraving.jpg",
      features: [
        "Permanent marking solution",
        "High-resolution detail",
        "Fast processing time",
        "No consumables required",
        "Works on curved surfaces",
      ],
      applications: [
        "Serial number marking",
        "Logo and branding",
        "Decorative patterns",
        "QR codes and barcodes",
        "Personalization services",
      ],
      specifications: [
        "Marking depth: 0.01-0.5mm",
        "Resolution: Up to 0.01mm",
        "Speed: Up to 7000mm/s",
        "Materials: All metals and some plastics",
      ],
    },
  ],
  Oo = b.forwardRef(({ className: e, ...t }, n) =>
    u.jsx("div", {
      ref: n,
      className: Lt(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
Oo.displayName = "Card";
const aA = b.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("div", {
    ref: n,
    className: Lt("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
aA.displayName = "CardHeader";
const lA = b.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("h3", {
    ref: n,
    className: Lt("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
lA.displayName = "CardTitle";
const iA = b.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("p", {
    ref: n,
    className: Lt("text-sm text-muted-foreground", e),
    ...t,
  })
);
iA.displayName = "CardDescription";
const Mo = b.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("div", { ref: n, className: Lt("p-6 pt-0", e), ...t })
);
Mo.displayName = "CardContent";
const sA = b.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("div", { ref: n, className: Lt("flex items-center p-6 pt-0", e), ...t })
);
sA.displayName = "CardFooter";
function Ov({ id: e, title: t, description: n, image: a }) {
  return u.jsx(Le, {
    to: `/services/${e}`,
    children: u.jsxs(Oo, {
      className:
        "overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full",
      children: [
        u.jsx("div", {
          className: "aspect-video overflow-hidden",
          children: u.jsx("img", {
            src: a,
            alt: t,
            className:
              "w-full h-full object-cover hover:scale-110 transition-transform duration-300",
          }),
        }),
        u.jsxs(Mo, {
          className: "p-6",
          children: [
            u.jsx("h3", {
              className: "text-xl font-semibold mb-2",
              children: t,
            }),
            u.jsx("p", {
              className: "text-gray-600 mb-4 line-clamp-3",
              children: n,
            }),
            u.jsxs("div", {
              className: "flex items-center text-[#D4AF37] font-medium group",
              children: [
                u.jsx("span", { children: "Learn More" }),
                u.jsx(L4, {
                  className:
                    "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function rA() {
  return u.jsx("section", {
    className: "py-20 bg-gray-50",
    children: u.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        u.jsxs("div", {
          className: "text-center mb-12",
          children: [
            u.jsx("h2", {
              className: "text-4xl font-bold mb-4 font-['Playfair_Display']",
              children: "Our Services",
            }),
            u.jsx("p", {
              className: "text-xl text-gray-600 max-w-2xl mx-auto",
              children:
                "Comprehensive metal fabrication solutions for industrial and commercial needs",
            }),
          ],
        }),
        u.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: $a.map((e) =>
            u.jsx(
              Ov,
              {
                id: e.id,
                title: e.title,
                description: e.description,
                image: e.image,
              },
              e.id
            )
          ),
        }),
      ],
    }),
  });
}
const Qi = [
    {
      id: "prod-001",
      name: "Geometric Wall Art",
      description:
        "Modern abstract geometric metal wall art piece with intricate cutout patterns. Perfect for contemporary home or office decor.",
      price: "PKR 8,500",
      image: "/assets/product-metal-art-1.jpg",
      category: "Wall Art",
      dimensions: '24" x 24"',
      material: "Mild Steel with Black Powder Coating",
    },
    {
      id: "prod-002",
      name: "Islamic Calligraphy Art",
      description:
        "Elegant Arabic calligraphy metal wall decor featuring beautiful Islamic script. Premium quality craftsmanship for spiritual spaces.",
      price: "PKR 12,000",
      image: "/assets/product-metal-art-2.jpg",
      category: "Religious Art",
      dimensions: '36" x 18"',
      material: "Stainless Steel with Black Finish",
    },
    {
      id: "prod-003",
      name: "Abstract Metal Sculpture",
      description:
        "Contemporary abstract metal art piece with flowing geometric design. A statement piece for modern interiors.",
      price: "PKR 15,500",
      image: "/assets/product-metal-art-3.jpg",
      category: "Wall Art",
      dimensions: '30" x 30"',
      material: "Aluminum with Matte Black Coating",
    },
    {
      id: "prod-004",
      name: "Nature Tree Design",
      description:
        "Intricate tree of life metal wall decoration with detailed botanical patterns. Brings natural elegance to any space.",
      price: "PKR 10,000",
      image: "/assets/product-metal-art-4.jpg",
      category: "Nature Art",
      dimensions: '28" x 36"',
      material: "Mild Steel with Antique Bronze Finish",
    },
    {
      id: "prod-005",
      name: "Mandala Wall Art",
      description:
        "Intricate mandala pattern laser-cut metal wall art. Symmetrical design perfect for meditation spaces.",
      price: "PKR 9,500",
      image: "/assets/product-metal-art-1_variant_1.jpg",
      category: "Wall Art",
      dimensions: '20" x 20"',
      material: "Mild Steel with Black Coating",
    },
    {
      id: "prod-006",
      name: "Ayat Al-Kursi Decor",
      description:
        "Beautiful Ayat Al-Kursi Islamic wall art in elegant calligraphy. Premium quality for homes and mosques.",
      price: "PKR 14,000",
      image: "/assets/product-metal-art-2_variant_1.jpg",
      category: "Religious Art",
      dimensions: '40" x 20"',
      material: "Stainless Steel",
    },
  ],
  oA = [
    "All Products",
    "Wall Art",
    "Religious Art",
    "Nature Art",
    "Custom Designs",
  ];
function Mv({
  id: e,
  name: t,
  description: n,
  price: a,
  image: l,
  dimensions: i,
}) {
  return u.jsxs(Oo, {
    className:
      "overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col",
    children: [
      u.jsx("div", {
        className: "aspect-square overflow-hidden",
        children: u.jsx("img", {
          src: l,
          alt: t,
          className:
            "w-full h-full object-cover hover:scale-110 transition-transform duration-300",
        }),
      }),
      u.jsxs(Mo, {
        className: "p-6 flex flex-col flex-grow",
        children: [
          u.jsx("h3", { className: "text-lg font-semibold mb-2", children: t }),
          u.jsx("p", {
            className: "text-gray-600 text-sm mb-3 line-clamp-2 flex-grow",
            children: n,
          }),
          i &&
            u.jsxs("p", {
              className: "text-xs text-gray-500 mb-2",
              children: ["Size: ", i],
            }),
          u.jsx("div", {
            className: "flex items-center justify-between mb-4",
            children: u.jsx("span", {
              className: "text-xl font-bold text-[#D4AF37]",
              children: a,
            }),
          }),
          u.jsx("a", {
            href: eA(t, e),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-full",
            children: u.jsxs(et, {
              className: "w-full bg-[#25D366] hover:bg-[#20BA5A] text-white",
              children: [
                u.jsx(Xf, { className: "w-4 h-4 mr-2" }),
                "Inquire via WhatsApp",
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function uA() {
  const [e, t] = b.useState(0),
    n = 3,
    a = () => {
      e + n < Qi.length && t(e + 1);
    },
    l = () => {
      e > 0 && t(e - 1);
    },
    i = Qi.slice(e, e + n);
  return u.jsx("section", {
    className: "py-20 bg-white",
    children: u.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        u.jsxs("div", {
          className: "text-center mb-12",
          children: [
            u.jsx("h2", {
              className: "text-4xl font-bold mb-4 font-['Playfair_Display']",
              children: "Featured Products",
            }),
            u.jsx("p", {
              className: "text-xl text-gray-600 max-w-2xl mx-auto",
              children:
                "Explore our collection of custom metal art and decorative pieces",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "relative",
          children: [
            u.jsx(et, {
              variant: "outline",
              size: "icon",
              onClick: l,
              disabled: e === 0,
              className:
                "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg disabled:opacity-50",
              children: u.jsx(Ev, { className: "w-5 h-5" }),
            }),
            u.jsx(et, {
              variant: "outline",
              size: "icon",
              onClick: a,
              disabled: e + n >= Qi.length,
              className:
                "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg disabled:opacity-50",
              children: u.jsx(Nv, { className: "w-5 h-5" }),
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: i.map((s) =>
                u.jsx(
                  Mv,
                  {
                    id: s.id,
                    name: s.name,
                    description: s.description,
                    price: s.price,
                    image: s.image,
                    dimensions: s.dimensions,
                  },
                  s.id
                )
              ),
            }),
          ],
        }),
        u.jsx("div", {
          className: "text-center mt-8",
          children: u.jsx(et, {
            variant: "outline",
            size: "lg",
            className:
              "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
            onClick: () => (window.location.href = "/products"),
            children: "View All Products",
          }),
        }),
      ],
    }),
  });
}
function cA() {
  const e = [
    {
      icon: Av,
      title: "5+ Years Experience",
      description: "Proven track record in metal fabrication excellence",
    },
    {
      icon: Tv,
      title: "One-Stop Service",
      description: "Complete solutions from design to delivery",
    },
    {
      icon: gr,
      title: "Low-Cost Implementation",
      description: "Competitive pricing without compromising quality",
    },
    {
      icon: k4,
      title: "Multiple File Formats",
      description: `We accept: ${W4.join(", ")}`,
    },
  ];
  return u.jsx("section", {
    className: "py-20 bg-gray-50",
    children: u.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        u.jsxs("div", {
          className: "text-center mb-12",
          children: [
            u.jsx("h2", {
              className: "text-4xl font-bold mb-4 font-['Playfair_Display']",
              children: "Why Choose Iron Art",
            }),
            u.jsx("p", {
              className: "text-xl text-gray-600 max-w-2xl mx-auto",
              children: Oc.description,
            }),
          ],
        }),
        u.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
          children: e.map((t, n) => {
            const a = t.icon;
            return u.jsxs(
              "div",
              {
                className:
                  "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center",
                children: [
                  u.jsx("div", {
                    className:
                      "inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 rounded-full mb-4",
                    children: u.jsx(a, { className: "w-8 h-8 text-[#D4AF37]" }),
                  }),
                  u.jsx("h3", {
                    className: "text-lg font-semibold mb-2",
                    children: t.title,
                  }),
                  u.jsx("p", {
                    className: "text-gray-600 text-sm",
                    children: t.description,
                  }),
                ],
              },
              n
            );
          }),
        }),
      ],
    }),
  });
}
function fA() {
  return u.jsx("section", {
    className: "py-20 bg-white",
    children: u.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        u.jsxs("div", {
          className: "text-center mb-12",
          children: [
            u.jsx("h2", {
              className: "text-4xl font-bold mb-4 font-['Playfair_Display']",
              children: "What Our Clients Say",
            }),
            u.jsx("p", {
              className: "text-xl text-gray-600 max-w-2xl mx-auto",
              children: "Trusted by businesses and individuals across Pakistan",
            }),
          ],
        }),
        u.jsx("div", {
          className: "max-w-4xl mx-auto",
          children: u.jsxs("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center",
            children: [
              u.jsx("div", {
                className: "flex justify-center mb-4",
                children: [...Array(5)].map((e, t) =>
                  u.jsx(
                    Z4,
                    { className: "w-8 h-8 fill-[#D4AF37] text-[#D4AF37]" },
                    t
                  )
                ),
              }),
              u.jsx("h3", {
                className: "text-2xl font-semibold mb-2",
                children: "Excellent Service",
              }),
              u.jsx("p", {
                className: "text-gray-600 mb-4",
                children: "Rated 4.9/5 based on 100+ reviews",
              }),
              u.jsx("p", {
                className: "text-sm text-gray-500",
                children: "Google Reviews Widget Integration Space",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function dA() {
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(Ka, {}),
      u.jsx(Fa, {}),
      u.jsxs("main", {
        children: [
          u.jsx(nA, {}),
          u.jsx(rA, {}),
          u.jsx(uA, {}),
          u.jsx(cA, {}),
          u.jsx(fA, {}),
        ],
      }),
      u.jsx(Pa, {}),
      u.jsx(Ja, {}),
    ],
  });
}
function hA() {
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(Ka, {}),
      u.jsx(Fa, {}),
      u.jsxs("main", {
        children: [
          u.jsx("div", {
            className: "bg-black text-white py-20",
            children: u.jsxs("div", {
              className: "container mx-auto px-4 text-center",
              children: [
                u.jsx("h1", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']",
                  children: "Our Services",
                }),
                u.jsx("p", {
                  className: "text-xl text-white/90 max-w-2xl mx-auto",
                  children:
                    "Comprehensive metal fabrication solutions for all your industrial and commercial needs",
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: u.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: $a.map((e) =>
                u.jsx(
                  Ov,
                  {
                    id: e.id,
                    title: e.title,
                    description: e.description,
                    image: e.image,
                  },
                  e.id
                )
              ),
            }),
          }),
        ],
      }),
      u.jsx(Pa, {}),
      u.jsx(Ja, {}),
    ],
  });
}
function Ds({ service: e }) {
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(Ka, {}),
      u.jsx(Fa, {}),
      u.jsxs("main", {
        children: [
          u.jsxs("div", {
            className: "relative h-[400px] bg-black",
            children: [
              u.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-50",
                style: { backgroundImage: `url(${e.image})` },
              }),
              u.jsx("div", {
                className:
                  "relative h-full flex items-center justify-center text-center px-4",
                children: u.jsxs("div", {
                  className: "max-w-4xl",
                  children: [
                    u.jsx("h1", {
                      className:
                        "text-4xl md:text-5xl font-bold text-white mb-4 font-['Playfair_Display']",
                      children: e.title,
                    }),
                    u.jsx("p", {
                      className: "text-xl text-white/90",
                      children: e.description,
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsxs("div", {
            className: "container mx-auto px-4 py-16",
            children: [
              u.jsxs(Le, {
                to: "/services",
                className:
                  "inline-flex items-center text-[#D4AF37] hover:underline mb-8",
                children: [
                  u.jsx(H4, { className: "w-4 h-4 mr-2" }),
                  "Back to Services",
                ],
              }),
              u.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                children: [
                  u.jsxs("div", {
                    className: "lg:col-span-2 space-y-8",
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "Key Features",
                          }),
                          u.jsx("ul", {
                            className: "space-y-3",
                            children: e.features.map((t, n) =>
                              u.jsxs(
                                "li",
                                {
                                  className: "flex items-start gap-3",
                                  children: [
                                    u.jsx(gr, {
                                      className:
                                        "w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5",
                                    }),
                                    u.jsx("span", { children: t }),
                                  ],
                                },
                                n
                              )
                            ),
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("h2", {
                            className: "text-2xl font-bold mb-4",
                            children: "Applications",
                          }),
                          u.jsx("ul", {
                            className: "space-y-3",
                            children: e.applications.map((t, n) =>
                              u.jsxs(
                                "li",
                                {
                                  className: "flex items-start gap-3",
                                  children: [
                                    u.jsx(gr, {
                                      className:
                                        "w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5",
                                    }),
                                    u.jsx("span", { children: t }),
                                  ],
                                },
                                n
                              )
                            ),
                          }),
                        ],
                      }),
                      e.specifications &&
                        u.jsxs("div", {
                          children: [
                            u.jsx("h2", {
                              className: "text-2xl font-bold mb-4",
                              children: "Technical Specifications",
                            }),
                            u.jsx("ul", {
                              className: "space-y-3",
                              children: e.specifications.map((t, n) =>
                                u.jsxs(
                                  "li",
                                  {
                                    className: "flex items-start gap-3",
                                    children: [
                                      u.jsx(gr, {
                                        className:
                                          "w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5",
                                      }),
                                      u.jsx("span", { children: t }),
                                    ],
                                  },
                                  n
                                )
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "lg:col-span-1",
                    children: u.jsxs("div", {
                      className: "bg-gray-50 p-6 rounded-lg sticky top-24",
                      children: [
                        u.jsx("h3", {
                          className: "text-xl font-bold mb-4",
                          children: "Get a Custom Quote",
                        }),
                        u.jsx("p", {
                          className: "text-gray-600 mb-6",
                          children:
                            "Contact us to discuss your project requirements and receive a personalized quote.",
                        }),
                        u.jsx("a", {
                          href: tA(e.title),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "w-full block",
                          children: u.jsxs(et, {
                            className:
                              "w-full bg-[#25D366] hover:bg-[#20BA5A] text-white mb-3",
                            children: [
                              u.jsx(Xf, { className: "w-4 h-4 mr-2" }),
                              "WhatsApp Inquiry",
                            ],
                          }),
                        }),
                        u.jsx(Le, {
                          to: "/contact",
                          className: "w-full block",
                          children: u.jsx(et, {
                            variant: "outline",
                            className:
                              "w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
                            children: "Contact Form",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsx(Pa, {}),
      u.jsx(Ja, {}),
    ],
  });
}
function mA() {
  const e = $a.find((t) => t.id === "plasma-cutting");
  return u.jsx(Ds, { service: e });
}
function pA() {
  const e = $a.find((t) => t.id === "laser-cutting");
  return u.jsx(Ds, { service: e });
}
function gA() {
  const e = $a.find((t) => t.id === "flame-cutting");
  return u.jsx(Ds, { service: e });
}
function vA() {
  const e = $a.find((t) => t.id === "cnc-bending");
  return u.jsx(Ds, { service: e });
}
function yA() {
  const e = $a.find((t) => t.id === "engraving-marking");
  return u.jsx(Ds, { service: e });
}
function bA() {
  const [e, t] = b.useState("All Products"),
    n = e === "All Products" ? Qi : Qi.filter((a) => a.category === e);
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(Ka, {}),
      u.jsx(Fa, {}),
      u.jsxs("main", {
        children: [
          u.jsx("div", {
            className: "bg-black text-white py-20",
            children: u.jsxs("div", {
              className: "container mx-auto px-4 text-center",
              children: [
                u.jsx("h1", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']",
                  children: "Metal Art Products",
                }),
                u.jsx("p", {
                  className: "text-xl text-white/90 max-w-2xl mx-auto",
                  children:
                    "Browse our collection of handcrafted metal art and decorative pieces",
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "bg-gray-50 py-6 border-b",
            children: u.jsx("div", {
              className: "container mx-auto px-4",
              children: u.jsx("div", {
                className: "flex flex-wrap gap-3 justify-center",
                children: oA.map((a) =>
                  u.jsx(
                    et,
                    {
                      variant: e === a ? "default" : "outline",
                      onClick: () => t(a),
                      className:
                        e === a
                          ? "bg-[#D4AF37] hover:bg-[#B8941F] text-black"
                          : "border-gray-300 hover:border-[#D4AF37]",
                      children: a,
                    },
                    a
                  )
                ),
              }),
            }),
          }),
          u.jsxs("div", {
            className: "container mx-auto px-4 py-16",
            children: [
              u.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: n.map((a) =>
                  u.jsx(
                    Mv,
                    {
                      id: a.id,
                      name: a.name,
                      description: a.description,
                      price: a.price,
                      image: a.image,
                      dimensions: a.dimensions,
                    },
                    a.id
                  )
                ),
              }),
              n.length === 0 &&
                u.jsx("div", {
                  className: "text-center py-12",
                  children: u.jsx("p", {
                    className: "text-gray-600 text-lg",
                    children: "No products found in this category.",
                  }),
                }),
            ],
          }),
        ],
      }),
      u.jsx(Pa, {}),
      u.jsx(Ja, {}),
    ],
  });
}
function xA() {
  const e = [
    {
      icon: Av,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every project, ensuring precision and durability in all our work.",
    },
    {
      icon: K4,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We work closely with clients to deliver exactly what they envision.",
    },
    {
      icon: $4,
      title: "Innovation",
      description:
        "We leverage cutting-edge technology and modern techniques to provide efficient, cost-effective solutions.",
    },
    {
      icon: Tv,
      title: "Expert Team",
      description:
        "Our skilled professionals bring years of experience and dedication to every project.",
    },
  ];
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(Ka, {}),
      u.jsx(Fa, {}),
      u.jsxs("main", {
        children: [
          u.jsx("div", {
            className: "bg-black text-white py-20",
            children: u.jsxs("div", {
              className: "container mx-auto px-4 text-center",
              children: [
                u.jsx("h1", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']",
                  children: "About Iron Art",
                }),
                u.jsx("p", {
                  className: "text-xl text-white/90 max-w-2xl mx-auto",
                  children: Oc.tagline,
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: u.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("h2", {
                      className:
                        "text-3xl font-bold mb-6 font-['Playfair_Display']",
                      children: "Our Story",
                    }),
                    u.jsxs("div", {
                      className: "space-y-4 text-gray-700",
                      children: [
                        u.jsxs("p", {
                          children: [
                            "With over ",
                            Oc.yearsOfExperience,
                            " years of experience in the metal fabrication industry, Iron Art has established itself as a trusted partner for businesses and individuals seeking precision cutting and custom metalwork solutions.",
                          ],
                        }),
                        u.jsx("p", {
                          children:
                            "We started with a simple mission: to provide high-quality, affordable metal fabrication services that meet the diverse needs of our clients. Today, we serve a wide range of industries, from construction and manufacturing to art and design.",
                        }),
                        u.jsx("p", {
                          children:
                            "Our state-of-the-art facility is equipped with the latest CNC plasma cutters, fiber laser machines, and precision bending equipment, allowing us to handle projects of any scale and complexity.",
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    u.jsx("img", {
                      src: "/assets/about-workshop.jpg",
                      alt: "Our Workshop",
                      className:
                        "rounded-lg shadow-lg w-full h-64 object-cover",
                    }),
                    u.jsx("img", {
                      src: "/assets/about-team.jpg",
                      alt: "Our Team",
                      className:
                        "rounded-lg shadow-lg w-full h-64 object-cover mt-8",
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "bg-gray-50 py-16",
            children: u.jsxs("div", {
              className: "container mx-auto px-4",
              children: [
                u.jsx("h2", {
                  className:
                    "text-3xl font-bold mb-12 text-center font-['Playfair_Display']",
                  children: "Our Values",
                }),
                u.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                  children: e.map((t, n) => {
                    const a = t.icon;
                    return u.jsxs(
                      "div",
                      {
                        className:
                          "bg-white p-6 rounded-lg shadow-md text-center",
                        children: [
                          u.jsx("div", {
                            className:
                              "inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 rounded-full mb-4",
                            children: u.jsx(a, {
                              className: "w-8 h-8 text-[#D4AF37]",
                            }),
                          }),
                          u.jsx("h3", {
                            className: "text-lg font-semibold mb-2",
                            children: t.title,
                          }),
                          u.jsx("p", {
                            className: "text-gray-600 text-sm",
                            children: t.description,
                          }),
                        ],
                      },
                      n
                    );
                  }),
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: u.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("div", {
                      className: "text-4xl font-bold text-[#D4AF37] mb-2",
                      children: "5+",
                    }),
                    u.jsx("div", {
                      className: "text-gray-600",
                      children: "Years Experience",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("div", {
                      className: "text-4xl font-bold text-[#D4AF37] mb-2",
                      children: "500+",
                    }),
                    u.jsx("div", {
                      className: "text-gray-600",
                      children: "Projects Completed",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("div", {
                      className: "text-4xl font-bold text-[#D4AF37] mb-2",
                      children: "200+",
                    }),
                    u.jsx("div", {
                      className: "text-gray-600",
                      children: "Happy Clients",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("div", {
                      className: "text-4xl font-bold text-[#D4AF37] mb-2",
                      children: "5",
                    }),
                    u.jsx("div", {
                      className: "text-gray-600",
                      children: "Core Services",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      u.jsx(Pa, {}),
      u.jsx(Ja, {}),
    ],
  });
}
const vr = b.forwardRef(({ className: e, type: t, ...n }, a) =>
  u.jsx("input", {
    type: t,
    className: Lt(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: a,
    ...n,
  })
);
vr.displayName = "Input";
const Rv = b.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("textarea", {
    className: Lt(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
Rv.displayName = "Textarea";
var wA = "Label",
  Dv = b.forwardRef((e, t) =>
    u.jsx(ma.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var l;
        n.target.closest("button, input, select, textarea") ||
          ((l = e.onMouseDown) == null || l.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
Dv.displayName = wA;
var zv = Dv;
const SA = Cv(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Ti = b.forwardRef(({ className: e, ...t }, n) =>
    u.jsx(zv, { ref: n, className: Lt(SA(), e), ...t })
  );
Ti.displayName = zv.displayName;
function AA(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
function EA(e) {
  return /^[\d\s\-+()]{10,}$/.test(e);
}
function NA(e) {
  const t = {};
  return (
    (!e.name || e.name.trim().length < 2) &&
      (t.name = "Name must be at least 2 characters long"),
    (!e.email || !AA(e.email)) &&
      (t.email = "Please enter a valid email address"),
    (!e.phone || !EA(e.phone)) &&
      (t.phone = "Please enter a valid phone number"),
    (!e.message || e.message.trim().length < 10) &&
      (t.message = "Message must be at least 10 characters long"),
    { isValid: Object.keys(t).length === 0, errors: t }
  );
}
function jA() {
  const [e, t] = b.useState({ name: "", email: "", phone: "", message: "" }),
    [n, a] = b.useState({}),
    [l, i] = b.useState(!1),
    s = (o) => {
      const { name: c, value: d } = o.target;
      t((m) => ({ ...m, [c]: d })), n[c] && a((m) => ({ ...m, [c]: "" }));
    },
    r = async (o) => {
      o.preventDefault();
      const c = NA(e);
      if (!c.isValid) {
        a(c.errors);
        return;
      }
      i(!0),
        setTimeout(() => {
          s1.success("Thank you! We'll contact you soon."),
            t({ name: "", email: "", phone: "", message: "" }),
            i(!1);
        }, 1e3);
    };
  return u.jsxs("form", {
    onSubmit: r,
    className: "space-y-6",
    children: [
      u.jsxs("div", {
        children: [
          u.jsx(Ti, { htmlFor: "name", children: "Full Name *" }),
          u.jsx(vr, {
            id: "name",
            name: "name",
            value: e.name,
            onChange: s,
            className: n.name ? "border-red-500" : "",
            placeholder: "Enter your full name",
          }),
          n.name &&
            u.jsx("p", {
              className: "text-red-500 text-sm mt-1",
              children: n.name,
            }),
        ],
      }),
      u.jsxs("div", {
        children: [
          u.jsx(Ti, { htmlFor: "email", children: "Email Address *" }),
          u.jsx(vr, {
            id: "email",
            name: "email",
            type: "email",
            value: e.email,
            onChange: s,
            className: n.email ? "border-red-500" : "",
            placeholder: "your.email@example.com",
          }),
          n.email &&
            u.jsx("p", {
              className: "text-red-500 text-sm mt-1",
              children: n.email,
            }),
        ],
      }),
      u.jsxs("div", {
        children: [
          u.jsx(Ti, { htmlFor: "phone", children: "Phone Number *" }),
          u.jsx(vr, {
            id: "phone",
            name: "phone",
            type: "tel",
            value: e.phone,
            onChange: s,
            className: n.phone ? "border-red-500" : "",
            placeholder: "+92 300 1234567",
          }),
          n.phone &&
            u.jsx("p", {
              className: "text-red-500 text-sm mt-1",
              children: n.phone,
            }),
        ],
      }),
      u.jsxs("div", {
        children: [
          u.jsx(Ti, { htmlFor: "message", children: "Project Details *" }),
          u.jsx(Rv, {
            id: "message",
            name: "message",
            value: e.message,
            onChange: s,
            className: n.message ? "border-red-500" : "",
            placeholder: "Tell us about your project requirements...",
            rows: 6,
          }),
          n.message &&
            u.jsx("p", {
              className: "text-red-500 text-sm mt-1",
              children: n.message,
            }),
        ],
      }),
      u.jsx(et, {
        type: "submit",
        disabled: l,
        className:
          "w-full bg-[#D4AF37] hover:bg-[#B8941F] text-black font-semibold",
        children: l ? "Sending..." : "Submit Inquiry",
      }),
    ],
  });
}
function TA() {
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(Ka, {}),
      u.jsx(Fa, {}),
      u.jsxs("main", {
        children: [
          u.jsx("div", {
            className: "bg-black text-white py-20",
            children: u.jsxs("div", {
              className: "container mx-auto px-4 text-center",
              children: [
                u.jsx("h1", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']",
                  children: "Contact Us",
                }),
                u.jsx("p", {
                  className: "text-xl text-white/90 max-w-2xl mx-auto",
                  children:
                    "Get in touch with us for quotes, inquiries, or any questions about our services",
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "container mx-auto px-4 py-16",
            children: u.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("h2", {
                      className:
                        "text-3xl font-bold mb-6 font-['Playfair_Display']",
                      children: "Get In Touch",
                    }),
                    u.jsx("p", {
                      className: "text-gray-600 mb-8",
                      children:
                        "We're here to help with your metal fabrication needs. Reach out to us through any of the following channels.",
                    }),
                    u.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            u.jsx("div", {
                              className: "bg-[#D4AF37]/10 p-3 rounded-lg",
                              children: u.jsx(Zf, {
                                className: "w-6 h-6 text-[#D4AF37]",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: "Phone",
                                }),
                                u.jsx("a", {
                                  href: `tel:${we.phone}`,
                                  className:
                                    "text-gray-600 hover:text-[#D4AF37]",
                                  children: we.phone,
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            u.jsx("div", {
                              className: "bg-[#D4AF37]/10 p-3 rounded-lg",
                              children: u.jsx(Vf, {
                                className: "w-6 h-6 text-[#D4AF37]",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: "Email",
                                }),
                                u.jsx("a", {
                                  href: `mailto:${we.email}`,
                                  className:
                                    "text-gray-600 hover:text-[#D4AF37]",
                                  children: we.email,
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            u.jsx("div", {
                              className: "bg-[#D4AF37]/10 p-3 rounded-lg",
                              children: u.jsx(jv, {
                                className: "w-6 h-6 text-[#D4AF37]",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: "Address",
                                }),
                                u.jsx("p", {
                                  className: "text-gray-600",
                                  children: we.address,
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            u.jsx("div", {
                              className: "bg-[#D4AF37]/10 p-3 rounded-lg",
                              children: u.jsx(Y4, {
                                className: "w-6 h-6 text-[#D4AF37]",
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("h3", {
                                  className: "font-semibold mb-1",
                                  children: "Business Hours",
                                }),
                                u.jsx("p", {
                                  className: "text-gray-600",
                                  children:
                                    "Monday - Saturday: 9:00 AM - 6:00 PM",
                                }),
                                u.jsx("p", {
                                  className: "text-gray-600",
                                  children: "Sunday: Closed",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "bg-gray-50 p-8 rounded-lg",
                  children: [
                    u.jsx("h2", {
                      className: "text-2xl font-bold mb-6",
                      children: "Send Us a Message",
                    }),
                    u.jsx(jA, {}),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      u.jsx(Pa, {}),
      u.jsx(Ja, {}),
    ],
  });
}
const CA = [
  {
    id: 1,
    title: "5 Benefits of CNC Plasma Cutting for Industrial Applications",
    excerpt:
      "Discover why CNC plasma cutting is the preferred choice for heavy-duty metal fabrication projects.",
    date: "December 15, 2024",
    author: "Iron Art Team",
    image: "/assets/service-plasma-cutting.jpg",
  },
  {
    id: 2,
    title: "Choosing the Right Metal for Your Custom Art Project",
    excerpt:
      "Learn about different metal types and their properties to make informed decisions for your projects.",
    date: "December 10, 2024",
    author: "Iron Art Team",
    image: "/assets/product-metal-art-1.jpg",
  },
  {
    id: 3,
    title: "The Future of Laser Cutting Technology",
    excerpt:
      "Explore the latest advancements in fiber laser cutting and what they mean for precision manufacturing.",
    date: "December 5, 2024",
    author: "Iron Art Team",
    image: "/assets/service-laser-cutting.jpg",
  },
];
function OA() {
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(Ka, {}),
      u.jsx(Fa, {}),
      u.jsxs("main", {
        children: [
          u.jsx("div", {
            className: "bg-black text-white py-20",
            children: u.jsxs("div", {
              className: "container mx-auto px-4 text-center",
              children: [
                u.jsx("h1", {
                  className:
                    "text-4xl md:text-5xl font-bold mb-4 font-['Playfair_Display']",
                  children: "Blog & Updates",
                }),
                u.jsx("p", {
                  className: "text-xl text-white/90 max-w-2xl mx-auto",
                  children:
                    "Stay informed with the latest news, tips, and insights from the metal fabrication industry",
                }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: "container mx-auto px-4 py-16",
            children: [
              u.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: CA.map((e) =>
                  u.jsxs(
                    Oo,
                    {
                      className:
                        "overflow-hidden hover:shadow-xl transition-shadow",
                      children: [
                        u.jsx("div", {
                          className: "aspect-video overflow-hidden",
                          children: u.jsx("img", {
                            src: e.image,
                            alt: e.title,
                            className:
                              "w-full h-full object-cover hover:scale-110 transition-transform duration-300",
                          }),
                        }),
                        u.jsxs(Mo, {
                          className: "p-6",
                          children: [
                            u.jsxs("div", {
                              className:
                                "flex items-center gap-4 text-sm text-gray-500 mb-3",
                              children: [
                                u.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    u.jsx(q4, { className: "w-4 h-4" }),
                                    u.jsx("span", { children: e.date }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    u.jsx(F4, { className: "w-4 h-4" }),
                                    u.jsx("span", { children: e.author }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsx("h3", {
                              className:
                                "text-xl font-semibold mb-2 hover:text-[#D4AF37] cursor-pointer",
                              children: e.title,
                            }),
                            u.jsx("p", {
                              className: "text-gray-600 line-clamp-3",
                              children: e.excerpt,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
              u.jsx("div", {
                className: "text-center mt-12",
                children: u.jsx("p", {
                  className: "text-gray-600",
                  children: "More articles coming soon. Stay tuned!",
                }),
              }),
            ],
          }),
        ],
      }),
      u.jsx(Pa, {}),
      u.jsx(Ja, {}),
    ],
  });
}
function MA() {
  return u.jsx("div", {
    className:
      "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6 text-center",
    children: u.jsxs("div", {
      className: "space-y-6 max-w-md",
      children: [
        u.jsxs("div", {
          className: "space-y-3",
          children: [
            u.jsx("h1", {
              className: "text-8xl font-bold text-blue-600",
              children: "404",
            }),
            u.jsx("h2", {
              className: "text-2xl font-semibold text-gray-800",
              children: "Page Not Found",
            }),
            u.jsx("p", {
              className: "text-muted-foreground",
              children:
                "The page you're looking for doesn't exist or may have been moved.",
            }),
          ],
        }),
        u.jsxs("div", {
          className: "flex flex-col sm:flex-row gap-3 justify-center",
          children: [
            u.jsx(et, {
              asChild: !0,
              children: u.jsx("a", { href: "/", children: "Return Home" }),
            }),
            u.jsx(et, {
              variant: "outline",
              onClick: () => window.history.back(),
              children: "Go Back",
            }),
          ],
        }),
      ],
    }),
  });
}
const RA = new OS(),
  DA = () =>
    u.jsx(RS, {
      client: RA,
      children: u.jsxs(iS, {
        children: [
          u.jsx(b1, {}),
          u.jsx(M4, {
            children: u.jsxs(A4, {
              children: [
                u.jsx(it, { path: "/", element: u.jsx(dA, {}) }),
                u.jsx(it, { path: "/services", element: u.jsx(hA, {}) }),
                u.jsx(it, {
                  path: "/services/plasma-cutting",
                  element: u.jsx(mA, {}),
                }),
                u.jsx(it, {
                  path: "/services/laser-cutting",
                  element: u.jsx(pA, {}),
                }),
                u.jsx(it, {
                  path: "/services/flame-cutting",
                  element: u.jsx(gA, {}),
                }),
                u.jsx(it, {
                  path: "/services/cnc-bending",
                  element: u.jsx(vA, {}),
                }),
                u.jsx(it, {
                  path: "/services/engraving-marking",
                  element: u.jsx(yA, {}),
                }),
                u.jsx(it, { path: "/products", element: u.jsx(bA, {}) }),
                u.jsx(it, { path: "/about", element: u.jsx(xA, {}) }),
                u.jsx(it, { path: "/contact", element: u.jsx(TA, {}) }),
                u.jsx(it, { path: "/blog", element: u.jsx(OA, {}) }),
                u.jsx(it, { path: "*", element: u.jsx(MA, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Yx.createRoot(document.getElementById("root")).render(u.jsx(DA, {}));
