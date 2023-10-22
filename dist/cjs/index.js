'use strict';

var reactQuery = require('react-query');
var jsxRuntime = require('react/jsx-runtime');
var reactHookForm = require('react-hook-form');
var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var Case = {exports: {}};

/*! Case - v1.6.2 - 2020-03-24
* Copyright (c) 2020 Nathan Bubna; Licensed MIT, GPL */

(function (module) {
	(function() {
	    var unicodes = function(s, prefix) {
	        prefix = prefix || '';
	        return s.replace(/(^|-)/g, '$1\\u'+prefix).replace(/,/g, '\\u'+prefix);
	    },
	    basicSymbols = unicodes('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
	    baseLowerCase = 'a-z'+unicodes('DF-F6,F8-FF', '00'),
	    baseUpperCase = 'A-Z'+unicodes('C0-D6,D8-DE', '00'),
	    improperInTitle = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
	    regexps = function(symbols, lowers, uppers, impropers) {
	        symbols = symbols || basicSymbols;
	        lowers = lowers || baseLowerCase;
	        uppers = uppers || baseUpperCase;
	        impropers = impropers || improperInTitle;
	        return {
	            capitalize: new RegExp('(^|['+symbols+'])(['+lowers+'])', 'g'),
	            pascal: new RegExp('(^|['+symbols+'])+(['+lowers+uppers+'])', 'g'),
	            fill: new RegExp('['+symbols+']+(.|$)','g'),
	            sentence: new RegExp('(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")(['+lowers+'])', 'g'),
	            improper: new RegExp('\\b('+impropers+')\\b', 'g'),
	            relax: new RegExp('([^'+uppers+'])(['+uppers+']*)(['+uppers+'])(?=[^'+uppers+']|$)', 'g'),
	            upper: new RegExp('^[^'+lowers+']+$'),
	            hole: /[^\s]\s[^\s]/,
	            apostrophe: /'/g,
	            room: new RegExp('['+symbols+']')
	        };
	    },
	    re = regexps(),
	    _ = {
	        re: re,
	        unicodes: unicodes,
	        regexps: regexps,
	        types: [],
	        up: String.prototype.toUpperCase,
	        low: String.prototype.toLowerCase,
	        cap: function(s) {
	            return _.up.call(s.charAt(0))+s.slice(1);
	        },
	        decap: function(s) {
	            return _.low.call(s.charAt(0))+s.slice(1);
	        },
	        deapostrophe: function(s) {
	            return s.replace(re.apostrophe, '');
	        },
	        fill: function(s, fill, deapostrophe) {
	            if (fill != null) {
	                s = s.replace(re.fill, function(m, next) {
	                    return next ? fill + next : '';
	                });
	            }
	            if (deapostrophe) {
	                s = _.deapostrophe(s);
	            }
	            return s;
	        },
	        prep: function(s, fill, pascal, upper) {
	            s = s == null ? '' : s + '';// force to string
	            if (!upper && re.upper.test(s)) {
	                s = _.low.call(s);
	            }
	            if (!fill && !re.hole.test(s)) {
	                var holey = _.fill(s, ' ');
	                if (re.hole.test(holey)) {
	                    s = holey;
	                }
	            }
	            if (!pascal && !re.room.test(s)) {
	                s = s.replace(re.relax, _.relax);
	            }
	            return s;
	        },
	        relax: function(m, before, acronym, caps) {
	            return before + ' ' + (acronym ? acronym+' ' : '') + caps;
	        }
	    },
	    Case = {
	        _: _,
	        of: function(s) {
	            for (var i=0,m=_.types.length; i<m; i++) {
	                if (Case[_.types[i]].apply(Case, arguments) === s){ return _.types[i]; }
	            }
	        },
	        flip: function(s) {
	            return s.replace(/\w/g, function(l) {
	                return (l == _.up.call(l) ? _.low : _.up).call(l);
	            });
	        },
	        random: function(s) {
	            return s.replace(/\w/g, function(l) {
	                return (Math.round(Math.random()) ? _.up : _.low).call(l);
	            });
	        },
	        type: function(type, fn) {
	            Case[type] = fn;
	            _.types.push(type);
	        }
	    },
	    types = {
	        lower: function(s, fill, deapostrophe) {
	            return _.fill(_.low.call(_.prep(s, fill)), fill, deapostrophe);
	        },
	        snake: function(s) {
	            return Case.lower(s, '_', true);
	        },
	        constant: function(s) {
	            return Case.upper(s, '_', true);
	        },
	        camel: function(s) {
	            return _.decap(Case.pascal(s));
	        },
	        kebab: function(s) {
	            return Case.lower(s, '-', true);
	        },
	        upper: function(s, fill, deapostrophe) {
	            return _.fill(_.up.call(_.prep(s, fill, false, true)), fill, deapostrophe);
	        },
	        capital: function(s, fill, deapostrophe) {
	            return _.fill(_.prep(s).replace(re.capitalize, function(m, border, letter) {
	                return border+_.up.call(letter);
	            }), fill, deapostrophe);
	        },
	        header: function(s) {
	            return Case.capital(s, '-', true);
	        },
	        pascal: function(s) {
	            return _.fill(_.prep(s, false, true).replace(re.pascal, function(m, border, letter) {
	                return _.up.call(letter);
	            }), '', true);
	        },
	        title: function(s) {
	            return Case.capital(s).replace(re.improper, function(small, p, i, s) {
	                return i > 0 && i < s.lastIndexOf(' ') ? _.low.call(small) : small;
	            });
	        },
	        sentence: function(s, names, abbreviations) {
	            s = Case.lower(s).replace(re.sentence, function(m, prelude, letter) {
	                return prelude + _.up.call(letter);
	            });
	            if (names) {
	                names.forEach(function(name) {
	                    s = s.replace(new RegExp('\\b'+Case.lower(name)+'\\b', "g"), _.cap);
	                });
	            }
	            if (abbreviations) {
	                abbreviations.forEach(function(abbr) {
	                    s = s.replace(new RegExp('(\\b'+Case.lower(abbr)+'\\. +)(\\w)'), function(m, abbrAndSpace, letter) {
	                        return abbrAndSpace + _.low.call(letter);
	                    });
	                });
	            }
	            return s;
	        }
	    };

	    // TODO: Remove "squish" in a future breaking release.
	    types.squish = types.pascal;
	    
	    // Allow import default
	    Case.default = Case;

	    for (var type in types) {
	        Case.type(type, types[type]);
	    }
	    // export Case (AMD, commonjs, or global)
	    var define = typeof define === "function" ? define : function(){};
	    define(module.exports ? module.exports = Case : this.Case = Case);

	}).call(commonjsGlobal); 
} (Case));

var CaseExports = Case.exports;

var buildStrings = function buildStrings() {
  var pathToName = function pathToName(path) {
    return CaseExports.camel(path.replace(/(.+)\{(.+)\}/g, '$1Detail'));
  };
  var pathToJSPath = function pathToJSPath(path) {
    return path.replace(/(.+)\{(.+)\}/g, '$1:$2');
  };
  var pathAndMethodToHttp = function pathAndMethodToHttp(path, method) {
    return "".concat(pathToName(path)).concat(CaseExports.title(method));
  };
  var pathToQueryHook = function pathToQueryHook(path) {
    return "use".concat(CaseExports.pascal(pathToName(path)));
  };
  var pathAndMethodToMutationHook = function pathAndMethodToMutationHook(path, method) {
    var isEdit = method.toLowerCase() === 'patch';
    var isDelete = method.toLowerCase() === 'delete';
    return ['use', CaseExports.pascal(pathToName(path))].concat(_toConsumableArray(isEdit ? ['Edit'] : []), _toConsumableArray(isDelete ? ['Delete'] : []), ['Mutation']).join('');
  };
  return {
    strings: {
      pathToName: pathToName,
      pathToJSPath: pathToJSPath,
      pathAndMethodToHttp: pathAndMethodToHttp,
      pathToQueryHook: pathToQueryHook,
      pathAndMethodToMutationHook: pathAndMethodToMutationHook,
      nameToHookName: function nameToHookName(name) {
        return "use".concat(CaseExports.pascal(name));
      }
    }
  };
};

var buildUrls = function buildUrls(doc, toolkit) {
  var urls = Object.keys(doc.paths).reduce(function (acc, path) {
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, toolkit.strings.pathToName(path), toolkit.strings.pathToJSPath(path)));
  }, {});
  var url = function url(name, _ref) {
    var _toolkit$config$serve;
    var _ref$args = _ref.args,
      args = _ref$args === void 0 ? {} : _ref$args,
      queries = _ref.queries,
      _ref$server = _ref.server,
      server = _ref$server === void 0 ? (_toolkit$config$serve = toolkit.config.server) === null || _toolkit$config$serve === void 0 ? void 0 : _toolkit$config$serve.url : _ref$server;
    // let u = settings.apiUrl + apiUrls[pathName]
    var u = urls[name];
    for (var _i = 0, _Object$entries = Object.entries(args); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        v = _Object$entries$_i[1];
      u = u.replace(":".concat(k), v);
    }
    var fullPath = queries ? "".concat(u, "?").concat(new URLSearchParams(queries).toString()) : u;
    return "".concat(server).concat(fullPath);
  };
  return {
    urls: urls,
    url: url
  };
};

var _excluded$3 = ["body", "headers", "token"];
var checkIsProbablyJson = function checkIsProbablyJson(_ref) {
  var body = _ref.body,
    headers = _ref.headers;
  var isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
  return headers['Content-Type'] === 'application/json' || _typeof(body) === 'object' && !isFormData;
};
var parseResponse = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
    var contentType;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          contentType = response.headers.get('Content-Type');
          if (!/application\/json/.test(contentType)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", response.json());
        case 5:
          if (!/text/.test(contentType)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", response.text());
        case 9:
          if (!(response.status === 204)) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", null);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function parseResponse(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var _fetch = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, _ref3) {
    var body, _ref3$headers, headers, token, rest, isProbablyJson, resp, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          body = _ref3.body, _ref3$headers = _ref3.headers, headers = _ref3$headers === void 0 ? {} : _ref3$headers, token = _ref3.token, rest = _objectWithoutProperties(_ref3, _excluded$3);
          isProbablyJson = checkIsProbablyJson({
            headers: headers,
            body: body
          });
          _context2.next = 4;
          return fetch(url, _objectSpread2(_objectSpread2({
            headers: _objectSpread2(_objectSpread2(_objectSpread2({}, !isProbablyJson ? {} : {
              'Content-Type': 'application/json'
            }), !token ? {} : {
              'Authorization': "Token ".concat(token)
            }), headers)
          }, !body ? {} : {
            body: isProbablyJson ? JSON.stringify(body) : body
          }), rest));
        case 4:
          resp = _context2.sent;
          _context2.next = 7;
          return parseResponse(resp);
        case 7:
          result = _context2.sent;
          if (resp.ok) {
            _context2.next = 12;
            break;
          }
          throw {
            code: resp.status,
            data: result,
            raw: resp
          };
        case 12:
          return _context2.abrupt("return", result);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function _fetch(_x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();
var buildHttpMethods = function buildHttpMethods(doc, stencil) {
  return {
    fetch: function fetch(name) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        method = _ref5.method,
        args = _ref5.args,
        queries = _ref5.queries,
        data = _ref5.data,
        token = _ref5.token;
      return _fetch(stencil.url(name, {
        args: args,
        queries: queries
      }), _objectSpread2(_objectSpread2({}, !data ? {} : {
        body: data
      }), {}, {
        method: method,
        token: token
      }));
    },
    http: Object.entries(doc.paths).reduce(function (acc, _ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        path = _ref7[0],
        methods = _ref7[1];
      return _objectSpread2(_objectSpread2({}, acc), Object.keys(methods).reduce(function (acc, method) {
        var name = stencil.strings.pathToName(path);
        if (!['get', 'post', 'patch', 'delete'].includes(method)) {
          return acc;
        }
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, stencil.strings.pathAndMethodToHttp(name, method), _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _ref9,
            args,
            queries,
            data,
            token,
            _args3 = arguments;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _ref9 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, args = _ref9.args, queries = _ref9.queries, data = _ref9.data, token = _ref9.token;
                return _context3.abrupt("return", _fetch(stencil.url(name, {
                  args: args,
                  params: queries
                }), _objectSpread2(_objectSpread2({}, !data ? {} : {
                  body: data
                }), {}, {
                  method: method,
                  token: token
                })));
              case 2:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))));
      }, {}));
    })
  };
};

var _excluded$2 = ["limit"];
var buildQueryHooks = function buildQueryHooks(doc, stencil) {
  return {
    queries: Object.entries(doc.paths).reduce(function (acc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        path = _ref2[0],
        methods = _ref2[1];
      if (!methods.get) return acc;
      var name = stencil.strings.pathToName(path);
      var properties = methods.get.responses[200].content['application/json'].schema.properties;
      var isList = properties.count && properties.next && properties.resources;
      var toHookName = stencil.strings.nameToHookName;
      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, toHookName(name), isList ? function () {
        var _stencil$config$useTo, _stencil$config, _reactQuery$data, _reactQuery$data2;
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$args = _ref3.args,
          args = _ref3$args === void 0 ? {} : _ref3$args,
          _ref3$queries = _ref3.queries,
          queries = _ref3$queries === void 0 ? {} : _ref3$queries,
          _ref3$reactQueryArgs = _ref3.reactQueryArgs,
          reactQueryArgs = _ref3$reactQueryArgs === void 0 ? {} : _ref3$reactQueryArgs;
        var token = (_stencil$config$useTo = (_stencil$config = stencil.config).useToken) === null || _stencil$config$useTo === void 0 ? void 0 : _stencil$config$useTo.call(_stencil$config);
        var reactQuery$1 = reactQuery.useQuery([name].concat(_toConsumableArray(Object.entries(args).flatMap(function (x) {
          return x;
        })), _toConsumableArray(Object.entries(queries).flatMap(function (x) {
          return x;
        }))), function () {
          return stencil.fetch(name, {
            args: args,
            queries: queries,
            token: token
          });
        }, reactQueryArgs);
        return [(_reactQuery$data = reactQuery$1.data) === null || _reactQuery$data === void 0 ? void 0 : _reactQuery$data.results, _objectSpread2(_objectSpread2({}, reactQuery$1), {}, {
          count: (_reactQuery$data2 = reactQuery$1.data) === null || _reactQuery$data2 === void 0 ? void 0 : _reactQuery$data2.count
        })];
      } : function () {
        var _stencil$config$useTo2, _stencil$config2;
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$args = _ref4.args,
          args = _ref4$args === void 0 ? {} : _ref4$args,
          _ref4$queries = _ref4.queries,
          queries = _ref4$queries === void 0 ? {} : _ref4$queries,
          _ref4$reactQueryArgs = _ref4.reactQueryArgs,
          reactQueryArgs = _ref4$reactQueryArgs === void 0 ? {} : _ref4$reactQueryArgs;
        var token = (_stencil$config$useTo2 = (_stencil$config2 = stencil.config).useToken) === null || _stencil$config$useTo2 === void 0 ? void 0 : _stencil$config$useTo2.call(_stencil$config2);
        var reactQuery$1 = reactQuery.useQuery([name].concat(_toConsumableArray(Object.entries(args).flatMap(function (x) {
          return x;
        })), _toConsumableArray(Object.entries(queries).flatMap(function (x) {
          return x;
        }))), function () {
          return stencil.fetch(name, {
            args: args,
            queries: queries,
            token: token
          });
        }, reactQueryArgs);
        return [reactQuery$1.data, reactQuery$1];
      }), !isList ? {} : _defineProperty({}, "".concat(toHookName(name), "Infinite"), function Infinite() {
        var _stencil$config$useTo3, _stencil$config3, _reactQuery$data3, _reactQuery$data4;
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$args = _ref5.args,
          args = _ref5$args === void 0 ? {} : _ref5$args,
          _ref5$queries = _ref5.queries,
          _ref5$queries2 = _ref5$queries === void 0 ? {} : _ref5$queries,
          _ref5$queries2$limit = _ref5$queries2.limit,
          limit = _ref5$queries2$limit === void 0 ? 25 : _ref5$queries2$limit,
          queries = _objectWithoutProperties(_ref5$queries2, _excluded$2);
        var reactQueryArgs = arguments.length > 1 ? arguments[1] : undefined;
        var token = (_stencil$config$useTo3 = (_stencil$config3 = stencil.config).useToken) === null || _stencil$config$useTo3 === void 0 ? void 0 : _stencil$config$useTo3.call(_stencil$config3);
        var reactQuery = stencil.config.reactQuery.useInfiniteQuery([name].concat(_toConsumableArray(Object.entries(args).flatMap(function (x) {
          return x;
        })), _toConsumableArray(Object.entries(queries).flatMap(function (x) {
          return x;
        })), ['infinite']), /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref6) {
            var _ref6$pageParam, pageParam, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _ref6$pageParam = _ref6.pageParam, pageParam = _ref6$pageParam === void 0 ? 0 : _ref6$pageParam;
                  _context.next = 3;
                  return stencil.fetch(name, {
                    args: args,
                    queries: _objectSpread2(_objectSpread2({}, queries), {}, {
                      limit: limit,
                      offset: pageParam * limit
                    }),
                    token: token
                  });
                case 3:
                  result = _context.sent;
                  return _context.abrupt("return", {
                    result: result,
                    pageParam: pageParam
                  });
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref7.apply(this, arguments);
          };
        }(), _objectSpread2(_objectSpread2({}, reactQueryArgs), {}, {
          getNextPageParam: function getNextPageParam(_ref8) {
            var pageParam = _ref8.pageParam;
              _ref8.result;
            return pageParam + 1;
          },
          getPreviousPageParam: function getPreviousPageParam(_ref9) {
            var pageParam = _ref9.pageParam;
              _ref9.result;
            return pageParam === 0 ? undefined : pageParam - 1;
          }
        }));
        return [(_reactQuery$data3 = reactQuery.data) === null || _reactQuery$data3 === void 0 || (_reactQuery$data3 = _reactQuery$data3.pages) === null || _reactQuery$data3 === void 0 ? void 0 : _reactQuery$data3.flatMap(function (page) {
          return page.result.results;
        }), _objectSpread2(_objectSpread2({}, reactQuery), {}, {
          count: (_reactQuery$data4 = reactQuery.data) === null || _reactQuery$data4 === void 0 || (_reactQuery$data4 = _reactQuery$data4.pages) === null || _reactQuery$data4 === void 0 || (_reactQuery$data4 = _reactQuery$data4[0]) === null || _reactQuery$data4 === void 0 || (_reactQuery$data4 = _reactQuery$data4.result) === null || _reactQuery$data4 === void 0 ? void 0 : _reactQuery$data4.count
        })];
      }));
    }, {})
  };
};

// TODO: error handling
var buildMutationHooks = function buildMutationHooks(doc, stencil) {
  return {
    mutations: Object.entries(doc.paths).reduce(function (acc, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        path = _ref2[0],
        methods = _ref2[1];
      return _objectSpread2(_objectSpread2({}, acc), Object.entries(methods).filter(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          method = _ref4[0];
          _ref4[1];
        return ['post', 'patch', 'delete'].includes(method);
      }).reduce(function (acc, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
          method = _ref6[0];
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, stencil.strings.pathAndMethodToMutationHook(path, method), function () {
          var _stencil$config$useTo, _stencil$config;
          var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            args = _ref7.args,
            _ref7$reactQueryArgs = _ref7.reactQueryArgs,
            reactQueryArgs = _ref7$reactQueryArgs === void 0 ? {} : _ref7$reactQueryArgs;
          var token = (_stencil$config$useTo = (_stencil$config = stencil.config).useToken) === null || _stencil$config$useTo === void 0 ? void 0 : _stencil$config$useTo.call(_stencil$config);
          // const defaultErrorHandler = stencil.config.mutations?.useDefaultErrorHandler?.()
          return reactQuery.useMutation(function (data) {
            return stencil.fetch(stencil.strings.pathToName(path), {
              method: method,
              data: data,
              args: args,
              token: token
            });
          }, reactQueryArgs);
        }));
      }, {}));
    }, {})
  };
};

var getDefaultComponent = function getDefaultComponent(_ref) {
  var _orderedByPriority$fi, _orderedByPriority$;
  var components = _ref.components,
    givenTheme = _ref.theme,
    anyTheme = _ref.anyTheme;
  var theme = CaseExports.pascal(givenTheme);
  var orderedByPriority = Object.entries(components).sort(function (_ref2, _ref3) {
    var _ref4 = _slicedToArray(_ref2, 2);
      _ref4[0];
      var component1 = _ref4[1];
    var _ref5 = _slicedToArray(_ref3, 2);
      _ref5[0];
      var component2 = _ref5[1];
    return component1.priority > component2.priority ? -1 : 1;
  });
  var topPriorityWithTheme = (_orderedByPriority$fi = orderedByPriority.filter(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 1),
      name = _ref7[0];
    return name.startsWith(theme);
  })[0]) === null || _orderedByPriority$fi === void 0 ? void 0 : _orderedByPriority$fi[1];
  var topPriorityIgnoreTheme = (_orderedByPriority$ = orderedByPriority[0]) === null || _orderedByPriority$ === void 0 ? void 0 : _orderedByPriority$[1];
  // TODO: nicer missing field
  return topPriorityWithTheme || anyTheme && topPriorityIgnoreTheme || function () {
    return /*#__PURE__*/jsxRuntime.jsx("div", {
      children: "TODO: uh oh"
    });
  };
};

var safeComponents = function safeComponents(components, stencil) {
  return new Proxy(components, {
    get: function get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return function (props) {
        // TODO: only show this when in development?
        // TODO: add README
        console.warn("You are trying to access a field, \"".concat(prop, "\", that does not exist."), "The fields that are available are: ".concat(Object.keys(target).join(', '), ". You can manually add fields using the additionalFields prop on the stencil.useForm."));
        if (stencil.config.devMode) {
          return /*#__PURE__*/jsxRuntime.jsx("div", {
            children: "Warning: You are trying to access a field, \"".concat(prop, "\", that does not exist.")
          });
        }
      };
    }
  });
};
var buildFields = function buildFields(_ref, stencil) {
  var _ref$config = _ref.config,
    properties = _ref$config.properties,
    theme = _ref$config.theme,
    anyTheme = _ref$config.anyTheme;
  var AllFields = buildAllFields({
    properties: properties,
    stencil: stencil
  });
  var Fields = Object.entries(AllFields).reduce(function (acc, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      name = _ref3[0],
      components = _ref3[1];
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, name, getDefaultComponent({
      components: components,
      theme: theme,
      anyTheme: anyTheme
    })));
  }, {});
  return {
    AllFields: AllFields,
    Fields: safeComponents(Fields, stencil)
  };
};
var buildAllFields = function buildAllFields(_ref4) {
  var properties = _ref4.properties,
    stencil = _ref4.stencil,
    _ref4$prefixes = _ref4.prefixes,
    prefixes = _ref4$prefixes === void 0 ? [] : _ref4$prefixes;
  // TODO: handle empty properties better
  if (!properties) {
    var name = CaseExports.pascal(prefixes.join('-'));
    return _defineProperty({}, name, _defineProperty({}, "Default".concat(name), function Default() {
      return /*#__PURE__*/jsxRuntime.jsxs("div", {
        children: ["TODO: Arbitrary Json ", prefixes.join(' ')]
      });
    }));
  }
  return Object.entries(properties).reduce(function (acc, _ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      name = _ref7[0],
      details = _ref7[1];
    return _objectSpread2(_objectSpread2({}, acc), details.type === 'object' ? buildAllFields({
      properties: details.properties,
      prefixes: [].concat(_toConsumableArray(prefixes), [name]),
      stencil: stencil
    }) : _defineProperty({}, CaseExports.pascal([].concat(_toConsumableArray(prefixes), [name]).join('-')), buildFieldComponent({
      name: [].concat(_toConsumableArray(prefixes), [name]).join('.'),
      details: details,
      stencil: stencil
    })));
  }, {});
};
var buildFieldComponent = function buildFieldComponent(_ref9) {
  var _stencil$config;
  var name = _ref9.name,
    details = _ref9.details,
    stencil = _ref9.stencil;
  return (_stencil$config = stencil.config) === null || _stencil$config === void 0 || (_stencil$config = _stencil$config.useForm) === null || _stencil$config === void 0 || (_stencil$config = _stencil$config.fields) === null || _stencil$config === void 0 ? void 0 : _stencil$config.reduce(function (acc, field) {
    if (field.predicate(name, details)) {
      var component = field.component(name, details);
      var theme = field.theme ? capitalize(field.theme) : 'Default';
      component.priority = field.priority || 0;
      acc["".concat(theme).concat(field.name)] = component;
    }
    return acc;
  }, {});
};

/**
 * This function is for building generic form components like form error and buttons
 */
var buildFormComponents = function buildFormComponents(_ref) {
  _ref.stencil;
    var components = _ref.components;
  return components.reduce(function (acc, formComponent) {
    var fullName = CaseExports.pascal([formComponent.theme || 'default', formComponent.name].join('-'));
    var component = formComponent.component();
    component.priority = formComponent.priority || 0;
    component.theme = formComponent.theme || 'default';
    acc[fullName] = component;
    return acc;
  }, {});
};

var buildButtons = function buildButtons(_ref, stencil) {
  var _stencil$config$useFo;
  var _ref$config = _ref.config,
    theme = _ref$config.theme,
    anyTheme = _ref$config.anyTheme;
  var AllButtons = buildFormComponents({
    stencil: stencil,
    components: ((_stencil$config$useFo = stencil.config.useForm) === null || _stencil$config$useFo === void 0 ? void 0 : _stencil$config$useFo.buttons) || []
  });
  var Button = getDefaultComponent({
    components: AllButtons,
    theme: theme,
    anyTheme: anyTheme
  });
  return {
    AllButtons: AllButtons,
    Button: Button
  };
};

var buildFormErrors = function buildFormErrors(_ref, stencil) {
  var _stencil$config$useFo;
  var _ref$config = _ref.config,
    theme = _ref$config.theme,
    anyTheme = _ref$config.anyTheme;
  var AllFormErrors = buildFormComponents({
    stencil: stencil,
    components: ((_stencil$config$useFo = stencil.config.useForm) === null || _stencil$config$useFo === void 0 ? void 0 : _stencil$config$useFo.formErrors) || []
  });
  var FormError = getDefaultComponent({
    components: AllFormErrors,
    theme: theme,
    anyTheme: anyTheme
  });
  return {
    AllFormErrors: AllFormErrors,
    FormError: FormError
  };
};

var toFormErrorMessage = function toFormErrorMessage(error) {
  if (error.code === 400) {
    var _error$data;
    if ((_error$data = error.data) !== null && _error$data !== void 0 && _error$data.non_field_errors) {
      return error.data.non_field_errors;
    }
    return 'Please fix the errors below and try again.';
  } else if (error.code === 401) {
    return "Looks like you don't have permission to do this.";
  } else {
    return "An unexpected error occured. We don't think this was your fault. Please try again later.";
  }
};

// This is a default form error handler
var drfDefaultErrorHandler = function drfDefaultErrorHandler(error, methods) {
  if (error) {
    methods.setError('root.message', {
      type: 'server',
      message: toFormErrorMessage(error)
    });
    methods.setError('root.raw', {
      type: 'server',
      message: error
    });
  }
  if (error.data) {
    Object.entries(error.data).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        field = _ref2[0],
        errors = _ref2[1];
      if (Array.isArray(errors)) {
        errors === null || errors === void 0 || errors.forEach(function (error) {
          return methods.setError(field, {
            type: 'manual',
            message: CaseExports.sentence(error.includes('null') || error.includes('blank') || error.includes('required') ? 'This field is required' : error)
          });
        });
      } else {
        console.warn('drfDefaultErrorHandler does not know how to handle this error', error);
      }
    });
  }
};

var _excluded$1 = ["useDefaultValues"],
  _excluded2 = ["validation", "defaultValues", "onSubmit"],
  _excluded3 = ["resourceId", "useDefaultValues", "children", "onSuccess"];
var buildForms = function buildForms(_ref, stencil) {
  var _stencil$config$useFo;
  var _ref$config = _ref.config,
    path = _ref$config.path,
    name = _ref$config.name,
    method = _ref$config.method,
    theme = _ref$config.theme,
    anyTheme = _ref$config.anyTheme,
    FormError = _ref.FormError,
    Button = _ref.Button,
    Fields = _ref.Fields;
  var useDefaultMutation = stencil.mutations[stencil.strings.pathAndMethodToMutationHook(name, method)];
  var AllBasicForms = buildFormComponents({
    stencil: stencil,
    components: ((_stencil$config$useFo = stencil.config.useForm) === null || _stencil$config$useFo === void 0 ? void 0 : _stencil$config$useFo.forms) || []
  });
  var DefaultBasicForm = getDefaultComponent({
    components: AllBasicForms,
    theme: theme,
    anyTheme: anyTheme
  });
  return {
    useDefaultMutation: useDefaultMutation,
    Form: buildForm({
      stencil: stencil,
      path: path,
      method: method,
      FormComponent: DefaultBasicForm,
      Fields: Fields,
      FormError: FormError,
      Button: Button,
      useDefaultMutation: useDefaultMutation
    })
  };
};
var buildForm = function buildForm(_ref2) {
  var stencil = _ref2.stencil,
    path = _ref2.path,
    method = _ref2.method,
    FormComponent = _ref2.FormComponent,
    Fields = _ref2.Fields,
    FormError = _ref2.FormError,
    Button = _ref2.Button,
    useDefaultMutation = _ref2.useDefaultMutation;
  var FormWithDefaultValues = function FormWithDefaultValues(_ref3) {
    var useDefaultValues = _ref3.useDefaultValues,
      props = _objectWithoutProperties(_ref3, _excluded$1);
    var _useDefaultValues = useDefaultValues(),
      _useDefaultValues2 = _slicedToArray(_useDefaultValues, 2),
      defaultValues = _useDefaultValues2[0],
      error = _useDefaultValues2[1].error;
    if (error) {
      return /*#__PURE__*/jsxRuntime.jsx("div", {
        children: " TODO: Loading Error"
      });
    }
    if (!defaultValues) return /*#__PURE__*/jsxRuntime.jsx("div", {
      children: "TODO: Loading..."
    });
    return /*#__PURE__*/jsxRuntime.jsx(Form, _objectSpread2({
      defaultValues: defaultValues
    }, props));
  };
  var Form = function Form(_ref4) {
    var validation = _ref4.validation,
      defaultValues = _ref4.defaultValues,
      onSubmitProp = _ref4.onSubmit,
      props = _objectWithoutProperties(_ref4, _excluded2);
    var _stencil$config$react = stencil.config.react.useState({}),
      _stencil$config$react2 = _slicedToArray(_stencil$config$react, 2),
      metadata = _stencil$config$react2[0],
      setMetadata = _stencil$config$react2[1];
    var methods = reactHookForm.useForm(_objectSpread2({
      defaultValues: defaultValues
    }, validation ? {
      resolver: yupResolver(y.object().shape(validation))
    } : {}));
    var onSubmit = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ev) {
        var _stencil$config$useFo2, errorHandler;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              methods.clearErrors('root');
              _context2.prev = 1;
              _context2.next = 4;
              return methods.handleSubmit( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return onSubmitProp === null || onSubmitProp === void 0 ? void 0 : onSubmitProp(data, {
                          reactHookFormMethods: methods
                        });
                      case 2:
                        setMetadata(function (curr) {
                          return _objectSpread2(_objectSpread2({}, curr), {}, {
                            success: true
                          });
                        });
                        setTimeout(function () {
                          // if (isMounted.current) {
                          setMetadata(function (curr) {
                            return _objectSpread2(_objectSpread2({}, curr), {}, {
                              success: false
                            });
                          });
                          // }
                        }, 2000);
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2) {
                  return _ref6.apply(this, arguments);
                };
              }())(ev);
            case 4:
              _context2.next = 11;
              break;
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              // TODO: extra error handler
              // methods.setError('root', )
              console.error('Form error', _context2.t0);
              errorHandler = ((_stencil$config$useFo2 = stencil.config.useForm) === null || _stencil$config$useFo2 === void 0 ? void 0 : _stencil$config$useFo2.errorHandler) || drfDefaultErrorHandler;
              errorHandler(_context2.t0, methods);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 6]]);
      }));
      return function onSubmit(_x) {
        return _ref5.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/jsxRuntime.jsx(reactHookForm.FormProvider, _objectSpread2(_objectSpread2({}, methods), {}, {
      metadata: metadata,
      setMetadata: setMetadata,
      children: /*#__PURE__*/jsxRuntime.jsx(FormComponent, _objectSpread2({
        onSubmit: onSubmit
      }, props))
    }));
  };
  var AutoForm = function AutoForm(_ref7) {
    var resourceId = _ref7.resourceId,
      useDefaultValues = _ref7.useDefaultValues,
      children = _ref7.children,
      onSuccess = _ref7.onSuccess,
      props = _objectWithoutProperties(_ref7, _excluded3);
    useDefaultValues = useDefaultValues ? useDefaultValues : method === 'patch' ? function () {
      return stencil.queries[stencil.strings.pathToQueryHook(path)]({
        args: {
          id: resourceId
        }
      }, {
        cacheTime: 0
      });
    } : function () {
      return [{}, {}];
    };
    var mutation = useDefaultMutation({
      args: {
        id: resourceId
      }
    });
    var onSubmit = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data, rest) {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return mutation.mutateAsync(data);
            case 2:
              response = _context3.sent;
              onSuccess === null || onSuccess === void 0 || onSuccess(_objectSpread2({
                response: response,
                request: data
              }, rest));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function onSubmit(_x3, _x4) {
        return _ref8.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/jsxRuntime.jsx(FormWithDefaultValues, _objectSpread2(_objectSpread2({
      useDefaultValues: useDefaultValues,
      onSubmit: onSubmit
    }, props), {}, {
      children: children ? children : /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [/*#__PURE__*/jsxRuntime.jsx(FormError, {}), Object.values(Fields).map(function (Field, i) {
          return /*#__PURE__*/jsxRuntime.jsx(Field, {}, i);
        }), /*#__PURE__*/jsxRuntime.jsx(Button, {
          children: "Submit"
        })]
      })
    }));
  };
  return AutoForm;
};

var buildUseForm = function buildUseForm(doc, stencil) {
  return {
    useForm: function useForm(name, method) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$additionalFields = _ref.additionalFields,
        additionalFields = _ref$additionalFields === void 0 ? {} : _ref$additionalFields,
        _ref$theme = _ref.theme,
        theme = _ref$theme === void 0 ? 'default' : _ref$theme,
        _ref$anyTheme = _ref.anyTheme,
        anyTheme = _ref$anyTheme === void 0 ? true : _ref$anyTheme;
      return stencil.config.react.useMemo(function () {
        var _findPathAndDetails = findPathAndDetails({
            name: name,
            method: method,
            doc: doc,
            stencil: stencil
          }),
          path = _findPathAndDetails.path,
          details = _findPathAndDetails.details;
        var properties = _objectSpread2(_objectSpread2({}, details.requestBody.content['application/json'].schema.properties), additionalFields);
        var builders = [buildFields, buildButtons, buildFormErrors, buildForms];
        return builders.reduce(function (acc, builder) {
          return _objectSpread2(_objectSpread2({}, acc), builder(acc, stencil));
        }, {
          config: {
            properties: properties,
            path: path,
            name: name,
            method: method,
            anyTheme: anyTheme,
            theme: theme
          }
        });
      }, [name, method]);
    }
  };
};
var findPathAndDetails = function findPathAndDetails(_ref2) {
  var name = _ref2.name,
    method = _ref2.method,
    doc = _ref2.doc,
    stencil = _ref2.stencil;
  var _ref3 = Object.entries(doc.paths).find(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
        path = _ref6[0];
      return stencil.strings.pathToName(path) === name;
    }) || [],
    _ref4 = _slicedToArray(_ref3, 2),
    path = _ref4[0],
    methods = _ref4[1];
  if (!path) {
    console.warn('No endpoint named', name);
    return;
  }
  var details = methods[method];
  if (!details) {
    console.warn('No endpoint named', name, 'with method', method);
    return;
  }
  return {
    path: path,
    details: details
  };
};

var validateConfig = function validateConfig(config) {
  var _config$server, _config$useForm, _config$useForm2, _config$useForm3, _config$useForm4;
  // TODO: add README and link to it
  if (!(config !== null && config !== void 0 && (_config$server = config.server) !== null && _config$server !== void 0 && _config$server.url)) {
    console.warn("Expected config.server.url to have a value of the server you're using.");
  }
  if (!(config !== null && config !== void 0 && (_config$useForm = config.useForm) !== null && _config$useForm !== void 0 && _config$useForm.fields)) {
    console.warn("Expected config.useForm.fields to be an array of supported fields.");
  }
  if (!(config !== null && config !== void 0 && (_config$useForm2 = config.useForm) !== null && _config$useForm2 !== void 0 && _config$useForm2.errorHandler)) {
    console.warn("Expected config.useForm.errorHandler to be a function to handle errors.");
  }
  if (!(config !== null && config !== void 0 && (_config$useForm3 = config.useForm) !== null && _config$useForm3 !== void 0 && _config$useForm3.buttons)) {
    console.warn("Expected config.useForm.buttons to be an array of supported buttons.");
  }
  if (!(config !== null && config !== void 0 && (_config$useForm4 = config.useForm) !== null && _config$useForm4 !== void 0 && _config$useForm4.formErrors)) {
    console.warn("Expected config.useForm.formErrors to be an array of form errors.");
  }
  if (!(config !== null && config !== void 0 && config.useToken)) {
    console.warn("Expected config.useToken to be a react hook that will return the token of the current user.");
  }
};
var buildStencil = function buildStencil(doc, config) {
  validateConfig(config);
  var toolBuilders = [buildStrings, buildUrls, buildHttpMethods, buildQueryHooks, buildMutationHooks,
  // buildComponents,
  buildUseForm
  // buildOpenApiUseForm,
  // buildOpenApiTables,
  ];

  return toolBuilders.reduce(function (acc, toolBuilder) {
    return _objectSpread2(_objectSpread2({}, acc), toolBuilder(doc, acc));
  }, {
    doc: doc,
    config: config
  });
};

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
var _isInteger = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @private
 * @param {String|Number} prop The property name to set
 * @param {*} val The new value
 * @param {Object|Array} obj The object to clone
 * @return {Object|Array} A new object equivalent to the original except for the changed property.
 */

function _assoc(prop, val, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[prop] = val;
    return arr;
  }

  var result = {};

  for (var p in obj) {
    result[p] = obj[p];
  }

  result[prop] = val;
  return result;
}

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */

var isNil =
/*#__PURE__*/
_curry1(function isNil(x) {
  return x == null;
});

var isNil$1 = isNil;

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */

var assocPath =
/*#__PURE__*/
_curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }

  var idx = path[0];

  if (path.length > 1) {
    var nextObj = !isNil$1(obj) && _has(idx, obj) && typeof obj[idx] === 'object' ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }

  return _assoc(idx, val, obj);
});

var assocPath$1 = assocPath;

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig Idx -> a -> {k: v} -> {k: v}
 * @param {String|Number} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */

var assoc =
/*#__PURE__*/
_curry3(function assoc(prop, val, obj) {
  return assocPath$1([prop], val, obj);
});

var assoc$1 = assoc;

/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @see R.without
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */

var remove =
/*#__PURE__*/
_curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});

var remove$1 = remove;

/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @private
 * @param {String|Number} prop The name of the property to dissociate
 * @param {Object|Array} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 */

function _dissoc(prop, obj) {
  if (obj == null) {
    return obj;
  }

  if (_isInteger(prop) && _isArray(obj)) {
    return remove$1(prop, 1, obj);
  }

  var result = {};

  for (var p in obj) {
    result[p] = obj[p];
  }

  delete result[prop];
  return result;
}

/**
 * Makes a shallow clone of an object. Note that this copies and flattens
 * prototype properties onto the new object as well. All non-primitive
 * properties are copied by reference.
 *
 * @private
 * @param {String|Integer} prop The prop operating
 * @param {Object|Array} obj The object to clone
 * @return {Object|Array} A new object equivalent to the original.
 */

function _shallowCloneObject(prop, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    return [].concat(obj);
  }

  var result = {};

  for (var p in obj) {
    result[p] = obj[p];
  }

  return result;
}
/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */


var dissocPath =
/*#__PURE__*/
_curry2(function dissocPath(path, obj) {
  if (obj == null) {
    return obj;
  }

  switch (path.length) {
    case 0:
      return obj;

    case 1:
      return _dissoc(path[0], obj);

    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);

      if (obj[head] == null) {
        return _shallowCloneObject(head, obj);
      } else {
        return assoc$1(head, dissocPath(tail, obj[head]), obj);
      }

  }
});

var dissocPath$1 = dissocPath;

var _excluded = ["email"];
var AddAccount = function AddAccount(_ref) {
  var stencil = _ref.stencil,
    accounts = _ref.accounts,
    setAccounts = _ref.setAccounts;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2);
    _useState2[0];
    var setAddAccountOpen = _useState2[1];
  var loginMutation = stencil.mutations.usePublicUserLoginMutation();
  var LoginForm = stencil.useForm('publicUserLogin', 'post');
  LoginForm.Fields;
  var onSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref2) {
      var email, username, password, response, updatedAccounts;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            email = _ref2.email, username = _ref2.username, password = _ref2.password;
            _context.next = 3;
            return loginMutation.mutateAsync({
              email: email,
              username: username,
              password: password
            });
          case 3:
            response = _context.sent;
            updatedAccounts = [].concat(_toConsumableArray(accounts), [{
              email: email || username,
              token: response.token
            }]);
            setAccounts(updatedAccounts);
            setAddAccountOpen(false);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/jsxRuntime.jsx(LoginForm.Form, {
    onSubmit: onSubmit
  });
};
var Accounts = function Accounts(_ref4) {
  var stencil = _ref4.stencil,
    accounts = _ref4.accounts,
    setAccounts = _ref4.setAccounts;
  var onClickRemove = function onClickRemove(account) {
    var updatedAccounts = accounts.filter(function (a) {
      return a.email != account.email;
    });
    setAccounts(updatedAccounts);
  };
  var onClickSetActive = function onClickSetActive(account) {
    var updatedAccounts = accounts.map(function (_ref5) {
      var email = _ref5.email,
        rest = _objectWithoutProperties(_ref5, _excluded);
      return _objectSpread2(_objectSpread2({}, rest), {}, {
        email: email,
        isActive: account.email === email
      });
    });
    setAccounts(updatedAccounts);
  };
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx("h4", {
      children: "Accounts"
    }), /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntime.jsxs("span", {
          children: ["Not authenticated", ' ', !accounts.find(function (a) {
            return a.isActive;
          }) ? ' (active)' : '']
        }), !!accounts.find(function (a) {
          return a.isActive;
        }) && /*#__PURE__*/jsxRuntime.jsx("button", {
          onClick: function onClick() {
            return onClickSetActive({
              email: '-'
            });
          },
          children: "set active"
        })]
      }), (accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0 && accounts.map(function (account) {
        return /*#__PURE__*/jsxRuntime.jsxs("div", {
          children: [/*#__PURE__*/jsxRuntime.jsxs("span", {
            children: [account.email, " ", account.isActive && ' (active)']
          }), /*#__PURE__*/jsxRuntime.jsx("button", {
            onClick: function onClick() {
              return onClickRemove(account);
            },
            children: "remove"
          }), !account.isActive && /*#__PURE__*/jsxRuntime.jsx("button", {
            onClick: function onClick() {
              return onClickSetActive(account);
            },
            children: "set active"
          })]
        }, account.email);
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(AddAccount, {
      stencil: stencil,
      setAccounts: setAccounts,
      accounts: accounts
    })]
  });
};

var ServerUrl = function ServerUrl(_ref) {
  var stencil = _ref.stencil,
    servers = _ref.servers,
    setServers = _ref.setServers,
    setActiveServer = _ref.setActiveServer,
    activeServerUrl = _ref.activeServerUrl;
  var onClickRemove = function onClickRemove(url) {
    servers[url];
      var remainingServers = _objectWithoutProperties(servers, [url].map(_toPropertyKey));
    setServers(remainingServers);
  };
  var onClickSetActive = function onClickSetActive(url) {
    setActiveServer(url);
  };
  var onClickApply = function onClickApply() {
    setServers(_objectSpread2(_objectSpread2({}, servers), {}, _defineProperty({}, newUrl, {})));
    setActiveServer(newUrl);
  };
  var onChangeSelect = function onChangeSelect(ev) {
    if (!servers[ev.target.value]) {
      setServers(_objectSpread2(_objectSpread2({}, servers), {}, _defineProperty({}, ev.target.value, {})));
    }
    setActiveServer(ev.target.value);
  };
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx("h4", {
      children: "Server"
    }), /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsx("input", {
        placeholder: "Server Url",
        onChange: function onChange(ev) {
          return setNewUrl(ev.target.value);
        }
      }), /*#__PURE__*/jsxRuntime.jsx("button", {
        onClick: onClickApply,
        children: "Apply"
      })]
    }), /*#__PURE__*/jsxRuntime.jsxs("select", {
      onChange: onChangeSelect,
      children: [/*#__PURE__*/jsxRuntime.jsx("option", {
        value: ""
      }), stencil.doc.servers.map(function (server) {
        return /*#__PURE__*/jsxRuntime.jsxs("option", {
          value: server.url,
          children: [server.description, " - ", server.url]
        }, server.url);
      })]
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      children: Object.keys(servers || {}).map(function (url) {
        return /*#__PURE__*/jsxRuntime.jsxs("div", {
          children: [url, url === activeServerUrl ? ' (active)' : '', /*#__PURE__*/jsxRuntime.jsx("button", {
            onClick: function onClick() {
              return onClickRemove(url);
            },
            children: "Remove"
          }), url !== activeServerUrl && /*#__PURE__*/jsxRuntime.jsx("button", {
            onClick: function onClick() {
              return onClickSetActive(url);
            },
            children: "Set Active"
          })]
        }, url);
      })
    })]
  });
};

var Config = function Config(_ref) {
  var _config$openapiUrls, _config$openapiUrls2;
  var stencil = _ref.stencil,
    config = _ref.config,
    setConfig = _ref.setConfig;
  // const [config, setConfig] = useStateWithLocalStorage(
  //   'stencil-inspector',
  //   {url: process.env.NEXT_PUBLIC_STENCIL_OPENAPI_URL}
  // )
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    openapiUrl = _useState2[0],
    setOpenapiUrl = _useState2[1];
  var onClickApply = function onClickApply(ev) {
    // TODO: check that it is a valid openapi url before setting it.
    if (config !== null && config !== void 0 && config.openapiUrls[openapiUrl]) {
      setConfig(assocPath$1(['activeOpenapiUrl'], openapiUrl));
    } else {
      setConfig(function (current) {
        return _objectSpread2(_objectSpread2({}, current), {}, {
          activeOpenapiUrl: openapiUrl,
          openapiUrls: _objectSpread2(_objectSpread2({}, current.openapiUrls || {}), {}, _defineProperty({}, openapiUrl, {}))
        });
      });
    }
  };
  var onClickSetActive = function onClickSetActive(url) {
    setConfig(function (current) {
      return assocPath$1(['activeOpenapiUrl'], url, config);
    });
  };
  var onClickRemove = function onClickRemove(url) {
    setConfig(function (current) {
      dissocPath$1(['openapiUrls', url], current);
      if (url === (config === null || config === void 0 ? void 0 : config.activeOpenapiUrl)) {
        return assocPath$1(['activeOpenapiUrl'], 'local');
      }
      return current;
    });
  };
  var activeOpenapi = config === null || config === void 0 || (_config$openapiUrls = config.openapiUrls) === null || _config$openapiUrls === void 0 ? void 0 : _config$openapiUrls[config === null || config === void 0 ? void 0 : config.activeOpenapiUrl];
  var servers = activeOpenapi === null || activeOpenapi === void 0 ? void 0 : activeOpenapi.servers;
  var activeServerUrl = activeOpenapi === null || activeOpenapi === void 0 ? void 0 : activeOpenapi.activeServerUrl;
  var setServers = function setServers(servers) {
    setConfig(function (current) {
      return assocPath$1(['openapiUrls', current.activeOpenapiUrl, 'servers'], servers, current);
    });
  };
  var setActiveServer = function setActiveServer(url) {
    setConfig(function (current) {
      return assocPath$1(['openapiUrls', current.activeOpenapiUrl, 'activeServerUrl'], url, current);
    });
  };
  var accounts = config === null || config === void 0 || (_config$openapiUrls2 = config.openapiUrls) === null || _config$openapiUrls2 === void 0 || (_config$openapiUrls2 = _config$openapiUrls2[config === null || config === void 0 ? void 0 : config.activeOpenapiUrl]) === null || _config$openapiUrls2 === void 0 || (_config$openapiUrls2 = _config$openapiUrls2.servers) === null || _config$openapiUrls2 === void 0 || (_config$openapiUrls2 = _config$openapiUrls2[activeServerUrl]) === null || _config$openapiUrls2 === void 0 ? void 0 : _config$openapiUrls2.accounts;
  var setAccounts = function setAccounts(accounts) {
    setConfig(function (current) {
      return assocPath$1(['openapiUrls', current.activeOpenapiUrl, 'servers', activeServerUrl, 'accounts'], accounts, current);
    });
  };
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx("h2", {
      children: "Config"
    }), /*#__PURE__*/jsxRuntime.jsx("h4", {
      children: "Openapi Url"
    }), /*#__PURE__*/jsxRuntime.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntime.jsx("input", {
        placeholder: "Openapi Url",
        onChange: function onChange(ev) {
          return setOpenapiUrl(ev.target.value);
        }
      }), /*#__PURE__*/jsxRuntime.jsx("button", {
        onClick: onClickApply,
        children: "Apply"
      })]
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      children: Object.keys((config === null || config === void 0 ? void 0 : config.openapiUrls) || {}).map(function (url) {
        return /*#__PURE__*/jsxRuntime.jsxs("div", {
          children: [url, url === (config === null || config === void 0 ? void 0 : config.activeOpenapiUrl) && ' (active)', url !== 'local' && /*#__PURE__*/jsxRuntime.jsx("button", {
            onClick: function onClick(ev) {
              return onClickRemove(url);
            },
            children: "Remove"
          }), url !== (config === null || config === void 0 ? void 0 : config.activeOpenapiUrl) && /*#__PURE__*/jsxRuntime.jsx("button", {
            onClick: function onClick(ev) {
              return onClickSetActive(url);
            },
            children: "Set Active"
          })]
        }, url);
      })
    }), /*#__PURE__*/jsxRuntime.jsx("br", {}), stencil && /*#__PURE__*/jsxRuntime.jsx(ServerUrl, {
      stencil: stencil,
      servers: servers || [],
      setServers: setServers,
      activeServerUrl: activeServerUrl,
      setActiveServer: setActiveServer
    }), /*#__PURE__*/jsxRuntime.jsx("br", {}), stencil && /*#__PURE__*/jsxRuntime.jsx(Accounts, {
      stencil: stencil,
      accounts: accounts || [],
      setAccounts: setAccounts
    })]
  });
};

function isObject(node) {
    return Object.prototype.toString.call(node) === '[object Object]';
}
function objectSize(node) {
    return Array.isArray(node) ? node.length : isObject(node) ? Object.keys(node).length : 0;
}
function stringifyForCopying(node, space) {
    // return single string nodes without quotes
    if (typeof node === 'string') {
        return node;
    }
    try {
        return JSON.stringify(node, (key, value) => {
            switch (typeof value) {
                case 'bigint':
                    return String(value) + 'n';
                case 'number':
                case 'boolean':
                case 'object':
                case 'string':
                    return value;
                default:
                    return String(value);
            }
        }, space);
    }
    catch (error) {
        return `${error.name}: ${error.message}` || 'JSON.stringify failed';
    }
}
function isCollapsed(node, depth, indexOrName, collapsed, collapseObjectsAfterLength, customOptions) {
    if (customOptions && customOptions.collapsed !== undefined)
        return !!customOptions.collapsed;
    if (typeof collapsed === 'boolean')
        return collapsed;
    if (typeof collapsed === 'number' && depth > collapsed)
        return true;
    const size = objectSize(node);
    if (typeof collapsed === 'function') {
        const result = safeCall(collapsed, [{ node, depth, indexOrName, size }]);
        if (typeof result === 'boolean')
            return result;
    }
    if (Array.isArray(node) && size > collapseObjectsAfterLength)
        return true;
    if (isObject(node) && size > collapseObjectsAfterLength)
        return true;
    return false;
}
function ifDisplay(displaySize, depth, fold) {
    if (typeof displaySize === 'boolean')
        return displaySize;
    if (typeof displaySize === 'number' && depth > displaySize)
        return true;
    if (displaySize === 'collapsed' && fold)
        return true;
    if (displaySize === 'expanded' && !fold)
        return true;
    return false;
}
function safeCall(func, params) {
    try {
        return func(...params);
    }
    catch (event) {
        reportError(event);
    }
}
function editableAdd(editable) {
    if (editable === true)
        return true;
    if (isObject(editable) && editable.add === true)
        return true;
}
function editableEdit(editable) {
    if (editable === true)
        return true;
    if (isObject(editable) && editable.edit === true)
        return true;
}
function editableDelete(editable) {
    if (editable === true)
        return true;
    if (isObject(editable) && editable.delete === true)
        return true;
}
function isReactComponent(component) {
    return typeof component === 'function';
}
function customAdd(customOptions) {
    return !customOptions || customOptions.add === undefined || !!customOptions.add;
}
function customEdit(customOptions) {
    return !customOptions || customOptions.edit === undefined || !!customOptions.edit;
}
function customDelete(customOptions) {
    return !customOptions || customOptions.delete === undefined || !!customOptions.delete;
}
function customCopy(customOptions) {
    return !customOptions || customOptions.enableClipboard === undefined || !!customOptions.enableClipboard;
}
function resolveEvalFailedNewValue(type, value) {
    if (type === 'string') {
        return value.trim().replace(/^\"([\s\S]+?)\"$/, '$1');
    }
    return value;
}

var _path$7;
function _extends$7() { _extends$7 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var SvgAngleDown = function SvgAngleDown(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.473 5.806a.666.666 0 0 0-.946 0L8.473 8.86a.667.667 0 0 1-.946 0L4.473 5.806a.667.667 0 1 0-.946.94l3.06 3.06a2 2 0 0 0 2.826 0l3.06-3.06a.667.667 0 0 0 0-.94Z"
  })));
};

var _path$6;
function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.542 2.5h-4.75a3.963 3.963 0 0 0-3.959 3.958v4.75a3.963 3.963 0 0 0 3.959 3.959h4.75a3.963 3.963 0 0 0 3.958-3.959v-4.75A3.963 3.963 0 0 0 17.542 2.5Zm2.375 8.708a2.378 2.378 0 0 1-2.375 2.375h-4.75a2.378 2.378 0 0 1-2.375-2.375v-4.75a2.378 2.378 0 0 1 2.375-2.375h4.75a2.378 2.378 0 0 1 2.375 2.375v4.75Zm-4.75 6.334a3.963 3.963 0 0 1-3.959 3.958h-4.75A3.963 3.963 0 0 1 2.5 17.542v-4.75a3.963 3.963 0 0 1 3.958-3.959.791.791 0 1 1 0 1.584 2.378 2.378 0 0 0-2.375 2.375v4.75a2.378 2.378 0 0 0 2.375 2.375h4.75a2.378 2.378 0 0 0 2.375-2.375.792.792 0 1 1 1.584 0Z"
  })));
};

var _path$5, _path2$4;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var SvgCopied = function SvgCopied(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.25 3H6.75A3.755 3.755 0 0 0 3 6.75v10.5A3.754 3.754 0 0 0 6.75 21h10.5A3.754 3.754 0 0 0 21 17.25V6.75A3.755 3.755 0 0 0 17.25 3Zm2.25 14.25a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5Z"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#14C786",
    d: "M10.312 14.45 7.83 11.906a.625.625 0 0 0-.896 0 .659.659 0 0 0 0 .918l2.481 2.546a1.264 1.264 0 0 0 .896.381 1.237 1.237 0 0 0 .895-.38l5.858-6.011a.658.658 0 0 0 0-.919.625.625 0 0 0-.896 0l-5.857 6.01Z"
  })));
};

function CopyButton({ node }) {
    const [copied, setCopied] = React.useState(false);
    return copied ? (jsxRuntime.jsx(SvgCopied, { className: 'json-view--copy', style: { display: 'inline-block' } })) : (jsxRuntime.jsx(SvgCopy, { onClick: event => {
            const value = stringifyForCopying(node);
            event.stopPropagation();
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }, className: 'json-view--copy' }));
}

function NameValue({ indexOrName, value, depth, parent, deleteHandle, editHandle }) {
    return (jsxRuntime.jsxs("div", Object.assign({ className: 'json-view--pair' }, { children: [jsxRuntime.jsx("span", Object.assign({ className: typeof indexOrName === 'number' ? 'json-view--index' : 'json-view--property' }, { children: indexOrName })), ":", ' ', jsxRuntime.jsx(JsonNode, { node: value, depth: depth + 1, deleteHandle: deleteHandle, editHandle: editHandle, parent: parent, indexOrName: indexOrName })] })));
}

var _path$4, _path2$3;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var SvgTrash = function SvgTrash(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18.75 6h-2.325a3.757 3.757 0 0 0-3.675-3h-1.5a3.757 3.757 0 0 0-3.675 3H5.25a.75.75 0 0 0 0 1.5H6v9.75A3.754 3.754 0 0 0 9.75 21h4.5A3.754 3.754 0 0 0 18 17.25V7.5h.75a.75.75 0 1 0 0-1.5Zm-7.5-1.5h1.5A2.255 2.255 0 0 1 14.872 6H9.128a2.255 2.255 0 0 1 2.122-1.5Zm5.25 12.75a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.25 2.25 0 0 1-2.25-2.25V7.5h9v9.75Z"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#DA0000",
    d: "M10.5 16.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 1 0-1.5 0v4.5a.75.75 0 0 0 .75.75ZM13.5 16.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 1 0-1.5 0v4.5a.75.75 0 0 0 .75.75Z"
  })));
};

var _path$3, _path2$2;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgAddSquare = function SvgAddSquare(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M21 6.75v10.5A3.754 3.754 0 0 1 17.25 21H6.75A3.754 3.754 0 0 1 3 17.25V6.75A3.754 3.754 0 0 1 6.75 3h10.5A3.754 3.754 0 0 1 21 6.75Zm-1.5 0c0-1.24-1.01-2.25-2.25-2.25H6.75C5.51 4.5 4.5 5.51 4.5 6.75v10.5c0 1.24 1.01 2.25 2.25 2.25h10.5c1.24 0 2.25-1.01 2.25-2.25V6.75Z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#14C786",
    d: "M15 12.75a.75.75 0 1 0 0-1.5h-2.25V9a.75.75 0 1 0-1.5 0v2.25H9a.75.75 0 1 0 0 1.5h2.25V15a.75.75 0 1 0 1.5 0v-2.25H15Z"
  })));
};

var _path$2, _path2$1;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgDone = function SvgDone(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16.5a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#14C786",
    d: "m10.85 13.96-1.986-2.036a.5.5 0 0 0-.716 0 .527.527 0 0 0 0 .735l1.985 2.036a1.01 1.01 0 0 0 .717.305.99.99 0 0 0 .716-.305l4.686-4.808a.526.526 0 0 0 0-.735.5.5 0 0 0-.716 0l-4.687 4.809Z"
  })));
};

var _path$1, _path2;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgCancel = function SvgCancel(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#DA0000",
    d: "M15 9a.75.75 0 0 0-1.06 0L12 10.94 10.06 9A.75.75 0 0 0 9 10.06L10.94 12 9 13.94A.75.75 0 0 0 10.06 15L12 13.06 13.94 15A.75.75 0 0 0 15 13.94L13.06 12 15 10.06A.75.75 0 0 0 15 9Z"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16.5a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Z"
  })));
};

function ObjectNode({ node, depth, indexOrName, deleteHandle: _deleteSelf, customOptions }) {
    const { collapsed, enableClipboard, collapseObjectsAfterLength, editable, onDelete, src, onAdd, onEdit, onChange, forceUpdate, displaySize } = React.useContext(JsonViewContext);
    const isPlainObject = isObject(node);
    const [fold, setFold] = React.useState(isCollapsed(node, depth, indexOrName, collapsed, collapseObjectsAfterLength, customOptions));
    React.useEffect(() => {
        setFold(isCollapsed(node, depth, indexOrName, collapsed, collapseObjectsAfterLength, customOptions));
    }, [collapsed, collapseObjectsAfterLength]);
    // Edit property
    const editHandle = React.useCallback((indexOrName, newValue, oldValue) => {
        if (Array.isArray(node)) {
            node[+indexOrName] = newValue;
        }
        else if (node) {
            node[indexOrName] = newValue;
        }
        if (onEdit)
            onEdit({
                newValue,
                oldValue,
                depth,
                src,
                indexOrName: indexOrName,
                parentType: isPlainObject ? 'object' : 'array'
            });
        if (onChange)
            onChange({ type: 'edit', depth, src, indexOrName: indexOrName, parentType: isPlainObject ? 'object' : 'array' });
        forceUpdate();
    }, [node, onEdit, onChange, forceUpdate]);
    // Delete property
    const deleteHandle = (indexOrName) => {
        if (Array.isArray(node)) {
            node.splice(+indexOrName, 1);
        }
        else if (node) {
            delete node[indexOrName];
        }
        forceUpdate();
    };
    // Delete self
    const [deleting, setDeleting] = React.useState(false);
    const deleteSelf = () => {
        setDeleting(false);
        if (_deleteSelf)
            _deleteSelf(indexOrName);
        if (onDelete)
            onDelete({ value: node, depth, src, indexOrName: indexOrName, parentType: isPlainObject ? 'object' : 'array' });
        if (onChange)
            onChange({
                type: 'delete',
                depth,
                src,
                indexOrName: indexOrName,
                parentType: isPlainObject ? 'object' : 'array'
            });
    };
    // Add
    const [adding, setAdding] = React.useState(false);
    const inputRef = React.useRef(null);
    const add = () => {
        var _a;
        if (isPlainObject) {
            const inputName = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value;
            if (inputName) {
                node[inputName] = null;
                if (inputRef.current)
                    inputRef.current.value = '';
                setAdding(false);
                if (onAdd)
                    onAdd({ indexOrName: inputName, depth, src, parentType: 'object' });
                if (onChange)
                    onChange({ type: 'add', indexOrName: inputName, depth, src, parentType: 'object' });
            }
        }
        else if (Array.isArray(node)) {
            const arr = node;
            arr.push(null);
            if (onAdd)
                onAdd({ indexOrName: arr.length - 1, depth, src, parentType: 'array' });
            if (onChange)
                onChange({ type: 'add', indexOrName: arr.length - 1, depth, src, parentType: 'array' });
        }
        forceUpdate();
    };
    const handleAddKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            add();
        }
        else if (event.key === 'Escape') {
            cancel();
        }
    };
    const isEditing = deleting || adding;
    const cancel = () => {
        setDeleting(false);
        setAdding(false);
    };
    const Icons = (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!fold && !isEditing && (jsxRuntime.jsxs("span", Object.assign({ onClick: () => setFold(true) }, { children: [ifDisplay(displaySize, depth, fold) && jsxRuntime.jsxs("span", Object.assign({ className: 'jv-size' }, { children: [objectSize(node), " Items"] })), jsxRuntime.jsx(SvgAngleDown, { className: 'jv-chevron' })] }))), adding && isPlainObject && jsxRuntime.jsx("input", { className: 'json-view--input', placeholder: 'property', ref: inputRef, onKeyDown: handleAddKeyDown }), isEditing && jsxRuntime.jsx(SvgDone, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: adding ? add : deleteSelf }), isEditing && jsxRuntime.jsx(SvgCancel, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: cancel }), !fold && !isEditing && enableClipboard && customCopy(customOptions) && jsxRuntime.jsx(CopyButton, { node: node }), !fold && !isEditing && editableAdd(editable) && customAdd(customOptions) && (jsxRuntime.jsx(SvgAddSquare, { className: 'json-view--edit', onClick: () => {
                    if (isPlainObject) {
                        setAdding(true);
                        setTimeout(() => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
                    }
                    else {
                        add();
                    }
                } })), !fold && !isEditing && editableDelete(editable) && customDelete(customOptions) && _deleteSelf && (jsxRuntime.jsx(SvgTrash, { className: 'json-view--edit', onClick: () => setDeleting(true) }))] }));
    if (Array.isArray(node)) {
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("span", { children: '[' }), Icons, !fold ? (jsxRuntime.jsx("div", Object.assign({ className: 'jv-indent' }, { children: node.map((n, i) => (jsxRuntime.jsx(NameValue, { indexOrName: i, value: n, depth: depth, parent: node, deleteHandle: deleteHandle, editHandle: editHandle }, String(indexOrName) + String(i)))) }))) : (jsxRuntime.jsx("button", Object.assign({ onClick: () => setFold(false), className: 'jv-button' }, { children: "..." }))), jsxRuntime.jsx("span", { children: ']' }), fold && ifDisplay(displaySize, depth, fold) && (jsxRuntime.jsxs("span", Object.assign({ onClick: () => setFold(false), className: 'jv-size' }, { children: [objectSize(node), " Items"] })))] }));
    }
    else if (isPlainObject) {
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("span", { children: '{' }), Icons, !fold ? (jsxRuntime.jsx("div", Object.assign({ className: 'jv-indent' }, { children: Object.entries(node).map(([name, value]) => (jsxRuntime.jsx(NameValue, { indexOrName: name, value: value, depth: depth, parent: node, deleteHandle: deleteHandle, editHandle: editHandle }, String(indexOrName) + String(name)))) }))) : (jsxRuntime.jsx("button", Object.assign({ onClick: () => setFold(false), className: 'jv-button' }, { children: "..." }))), jsxRuntime.jsx("span", { children: '}' }), fold && ifDisplay(displaySize, depth, fold) && (jsxRuntime.jsxs("span", Object.assign({ onClick: () => setFold(false), className: 'jv-size' }, { children: [objectSize(node), " Items"] })))] }));
    }
    return null;
}

const LongString = React.forwardRef(({ str, className, ctrlClick }, ref) => {
    let { collapseStringMode, collapseStringsAfterLength } = React.useContext(JsonViewContext);
    const [truncated, setTruncated] = React.useState(true);
    collapseStringsAfterLength = collapseStringsAfterLength > 0 ? collapseStringsAfterLength : 0;
    const str_show = str.replace(/\s+/g, ' ');
    const clickToTruncateOrEdit = (event) => {
        if ((event.ctrlKey || event.metaKey) && ctrlClick) {
            ctrlClick(event);
        }
        else {
            setTruncated(!truncated);
        }
    };
    if (str.length <= collapseStringsAfterLength)
        return (jsxRuntime.jsxs("span", Object.assign({ className: className, onClick: ctrlClick }, { children: ["\"", str, "\""] })));
    if (collapseStringMode === 'address')
        return str.length <= 10 ? (jsxRuntime.jsxs("span", Object.assign({ className: className, onClick: ctrlClick }, { children: ["\"", str, "\""] }))) : (jsxRuntime.jsxs("span", Object.assign({ onClick: clickToTruncateOrEdit, className: className + ' cursor-pointer' }, { children: ["\"", truncated ? str_show.slice(0, 6) + '...' + str_show.slice(-4) : str, "\""] })));
    if (collapseStringMode === 'directly') {
        return (jsxRuntime.jsxs("span", Object.assign({ onClick: clickToTruncateOrEdit, className: className + ' cursor-pointer' }, { children: ["\"", truncated ? str_show.slice(0, collapseStringsAfterLength) + '...' : str, "\""] })));
    }
    if (collapseStringMode === 'word') {
        let index_ahead = collapseStringsAfterLength;
        let index_behind = collapseStringsAfterLength + 1;
        let str_collapsed = str_show;
        let count = 1;
        while (true) {
            if (/\W/.test(str[index_ahead])) {
                str_collapsed = str.slice(0, index_ahead);
                break;
            }
            if (/\W/.test(str[index_behind])) {
                str_collapsed = str.slice(0, index_behind);
                break;
            }
            if (count === 6) {
                str_collapsed = str.slice(0, collapseStringsAfterLength);
                break;
            }
            count++;
            index_ahead--;
            index_behind++;
        }
        return (jsxRuntime.jsxs("span", Object.assign({ onClick: clickToTruncateOrEdit, className: className + ' cursor-pointer' }, { children: ["\"", truncated ? str_collapsed + '...' : str, "\""] })));
    }
    return jsxRuntime.jsxs("span", Object.assign({ className: className }, { children: ["\"", str, "\""] }));
});

var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgEdit = function SvgEdit(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.25 3H6.75A3.754 3.754 0 0 0 3 6.75v10.5A3.754 3.754 0 0 0 6.75 21h10.5A3.754 3.754 0 0 0 21 17.25V6.75A3.754 3.754 0 0 0 17.25 3Zm2.25 14.25c0 1.24-1.01 2.25-2.25 2.25H6.75c-1.24 0-2.25-1.01-2.25-2.25V6.75c0-1.24 1.01-2.25 2.25-2.25h10.5c1.24 0 2.25 1.01 2.25 2.25v10.5Zm-6.09-9.466-5.031 5.03a2.981 2.981 0 0 0-.879 2.121v1.19c0 .415.336.75.75.75h1.19c.8 0 1.554-.312 2.12-.879l5.03-5.03a2.252 2.252 0 0 0 0-3.182c-.85-.85-2.331-.85-3.18 0Zm-2.91 7.151c-.28.28-.666.44-1.06.44H9v-.44c0-.4.156-.777.44-1.06l3.187-3.188 1.06 1.061-3.187 3.188Zm5.03-5.03-.782.783-1.06-1.061.782-.782a.766.766 0 0 1 1.06 0 .75.75 0 0 1 0 1.06Z"
  })));
};

function JsonNode({ node, depth, deleteHandle: _deleteHandle, indexOrName, parent, editHandle }) {
    const { collapseStringsAfterLength, enableClipboard, editable, src, onDelete, onChange, customizeNode } = React.useContext(JsonViewContext);
    let customReturn;
    if (typeof customizeNode === 'function')
        customReturn = safeCall(customizeNode, [{ node, depth, indexOrName }]);
    if (customReturn) {
        if (React.isValidElement(customReturn))
            return customReturn;
        else if (isReactComponent(customReturn)) {
            const CustomComponent = customReturn;
            return jsxRuntime.jsx(CustomComponent, { node: node, depth: depth, indexOrName: indexOrName });
        }
    }
    if (Array.isArray(node) || isObject(node)) {
        return (jsxRuntime.jsx(ObjectNode, { node: node, depth: depth, indexOrName: indexOrName, deleteHandle: _deleteHandle, customOptions: typeof customReturn === 'object' ? customReturn : undefined }));
    }
    else {
        const type = typeof node;
        const [editing, setEditing] = React.useState(false);
        const [deleting, setDeleting] = React.useState(false);
        const valueRef = React.useRef(null);
        const edit = () => {
            setEditing(true);
            setTimeout(() => {
                var _a, _b;
                (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.selectAllChildren(valueRef.current);
                (_b = valueRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            });
        };
        const done = React.useCallback(() => {
            const newValue = valueRef.current.innerText;
            try {
                const evalValue = eval(newValue);
                if (editHandle)
                    editHandle(indexOrName, evalValue, node);
            }
            catch (e) {
                const trimmedStringValue = resolveEvalFailedNewValue(type, newValue);
                if (editHandle)
                    editHandle(indexOrName, trimmedStringValue, node);
            }
            setEditing(false);
        }, [editHandle]);
        const cancel = () => {
            setEditing(false);
            setDeleting(false);
        };
        const deleteHandle = () => {
            setDeleting(false);
            if (_deleteHandle)
                _deleteHandle(indexOrName);
            if (onDelete)
                onDelete({
                    value: node,
                    depth,
                    src,
                    indexOrName: indexOrName,
                    parentType: Array.isArray(parent) ? 'array' : 'object'
                });
            if (onChange)
                onChange({
                    depth,
                    src,
                    indexOrName: indexOrName,
                    parentType: Array.isArray(parent) ? 'array' : 'object',
                    type: 'delete'
                });
        };
        const handleKeyDown = React.useCallback((event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                done();
            }
            else if (event.key === 'Escape') {
                cancel();
            }
        }, [done]);
        const isEditing = editing || deleting;
        const ctrlClick = !isEditing && editableEdit(editable) && customEdit(customReturn) && editHandle
            ? (event) => {
                if (event.ctrlKey || event.metaKey)
                    edit();
            }
            : undefined;
        const Icons = (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [isEditing && (jsxRuntime.jsx(SvgDone, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: deleting ? deleteHandle : done })), isEditing && jsxRuntime.jsx(SvgCancel, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: cancel }), !isEditing && enableClipboard && customCopy(customReturn) && (jsxRuntime.jsx(CopyButton, { node: node })), !isEditing &&
                    editableEdit(editable) &&
                    customEdit(customReturn) &&
                    editHandle && jsxRuntime.jsx(SvgEdit, { className: 'json-view--edit', onClick: edit }), !isEditing &&
                    editableDelete(editable) &&
                    customDelete(customReturn) &&
                    _deleteHandle && jsxRuntime.jsx(SvgTrash, { className: 'json-view--edit', onClick: () => setDeleting(true) })] }));
        let className = 'json-view--string';
        if (typeof (customReturn === null || customReturn === void 0 ? void 0 : customReturn.className) === 'string')
            className += ' ' + customReturn.className;
        switch (type) {
            case 'number':
            case 'bigint':
                className = 'json-view--number';
                break;
            case 'boolean':
                className = 'json-view--boolean';
                break;
            case 'object':
                className = 'json-view--null';
                break;
        }
        if (deleting)
            className += ' json-view--deleting';
        let displayValue = String(node);
        if (type === 'bigint')
            displayValue += 'n';
        const EditingElement = React.useMemo(() => (jsxRuntime.jsx("span", { contentEditable: true, className: className, dangerouslySetInnerHTML: { __html: type === 'string' ? `"${displayValue}"` : displayValue }, ref: valueRef, onKeyDown: handleKeyDown })), [displayValue, type, handleKeyDown]);
        if (type === 'string')
            return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [editing ? (EditingElement) : node.length > collapseStringsAfterLength ? (jsxRuntime.jsx(LongString, { str: node, ref: valueRef, className: className, ctrlClick: ctrlClick })) : (jsxRuntime.jsxs("span", Object.assign({ className: className, onClick: ctrlClick }, { children: ["\"", displayValue, "\""] }))), Icons] }));
        else {
            return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [editing ? (EditingElement) : (jsxRuntime.jsx("span", Object.assign({ className: className, onClick: ctrlClick }, { children: displayValue }))), Icons] }));
        }
    }
}

const JsonViewContext = React.createContext({
    src: undefined,
    collapseStringsAfterLength: 99,
    collapseStringMode: 'directly',
    collapseObjectsAfterLength: 20,
    collapsed: false,
    enableClipboard: true,
    editable: false,
    onEdit: undefined,
    onDelete: undefined,
    onAdd: undefined,
    onChange: undefined,
    forceUpdate: () => { },
    customizeNode: undefined,
    displaySize: undefined
});
function JsonView({ src, collapseStringsAfterLength = 99, collapseStringMode = 'directly', collapseObjectsAfterLength = 99, collapsed, enableClipboard = true, editable = false, onEdit, onDelete, onAdd, onChange, dark = false, theme = 'default', customizeNode, displaySize }) {
    const [_, update] = React.useState(0);
    const forceUpdate = React.useCallback(() => update(state => ++state), []);
    return (jsxRuntime.jsx(JsonViewContext.Provider, Object.assign({ value: {
            src,
            collapseStringsAfterLength,
            collapseStringMode,
            collapseObjectsAfterLength,
            collapsed,
            enableClipboard,
            editable,
            onEdit,
            onDelete,
            onAdd,
            onChange,
            forceUpdate,
            customizeNode,
            displaySize
        } }, { children: jsxRuntime.jsx("code", Object.assign({ className: 'json-view' + (dark ? ' dark' : '') + (theme && theme !== 'default' ? ' json-view_' + theme : '') }, { children: jsxRuntime.jsx(JsonNode, { node: src, depth: 1 }) })) })));
}

var UseFormInspector = function UseFormInspector(_ref) {
  var stencil = _ref.stencil;
  var _stencil$config$react = stencil.config.react.useState(null),
    _stencil$config$react2 = _slicedToArray(_stencil$config$react, 2),
    form = _stencil$config$react2[0],
    setForm = _stencil$config$react2[1];
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx("h3", {
      children: "Use Form Inspector"
    }), /*#__PURE__*/jsxRuntime.jsxs("select", {
      onChange: function onChange(ev) {
        return setForm(ev.target.value);
      },
      children: [/*#__PURE__*/jsxRuntime.jsx("option", {
        value: ""
      }), Object.entries(stencil.doc.paths).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2);
          _ref3[0];
          var methods = _ref3[1];
        return Object.entries(methods).find(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            method = _ref5[0];
            _ref5[1];
          return ['post', 'patch', 'put', 'delete'].includes(method);
        });
      }).flatMap(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          path = _ref7[0],
          methods = _ref7[1];
        var name = stencil.strings.pathToName(path);
        return Object.entries(methods).filter(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 1),
            method = _ref9[0];
          return ['post', 'patch', 'put', 'delete'].includes(method);
        }).flatMap(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
            method = _ref11[0];
            _ref11[1];
          return /*#__PURE__*/jsxRuntime.jsxs("option", {
            value: "".concat(name, ":").concat(method),
            children: [name, " - ", method]
          }, "".concat(name, "-").concat(method));
        });
      })]
    }), form && /*#__PURE__*/jsxRuntime.jsx(FormPreview, {
      stencil: stencil,
      formName: form.split(':')[0],
      method: form.split(':')[1]
    })]
  });
};
var FormPreview = function FormPreview(_ref12) {
  var stencil = _ref12.stencil,
    formName = _ref12.formName,
    method = _ref12.method;
  var _stencil$config$react3 = stencil.config.react.useState(),
    _stencil$config$react4 = _slicedToArray(_stencil$config$react3, 2),
    resourceId = _stencil$config$react4[0],
    setResourceId = _stencil$config$react4[1];
  var Form = stencil.useForm(formName, method);
  var isDetail = formName.endsWith('Detail');
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [isDetail && /*#__PURE__*/jsxRuntime.jsx("input", {
      placeholder: "resourceId",
      onChange: function onChange(ev) {
        return setResourceId(ev.target.value);
      }
    }), /*#__PURE__*/jsxRuntime.jsx(Form.Form, {
      resourceId: resourceId,
      children: /*#__PURE__*/jsxRuntime.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntime.jsx("div", {
          children: Object.values(Form.Fields).map(function (Field, i) {
            return /*#__PURE__*/jsxRuntime.jsx(Field, {}, i);
          })
        }), /*#__PURE__*/jsxRuntime.jsx("div", {
          children: /*#__PURE__*/jsxRuntime.jsx(FormData$1, {
            stencil: stencil
          })
        })]
      })
    })]
  });
};
var FormData$1 = function FormData(_ref13) {
  _ref13.stencil;
  var methods = reactHookForm.useFormContext();
  var data = methods.watch();
  return /*#__PURE__*/jsxRuntime.jsx(JsonView, {
    src: data,
    collapseObjectsAfterLength: 2
  });
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".json-view {\n\tdisplay: block;\n\tcolor: #4d4d4d;\n\t--json-property: #009033;\n\t--json-index: #676dff;\n\t--json-number: #676dff;\n\t--json-string: #b2762e;\n\t--json-boolean: #dc155e;\n\t--json-null: #dc155e;\n}\n.json-view .json-view--property {\n\tcolor: var(--json-property);\n}\n.json-view .json-view--index {\n\tcolor: var(--json-index);\n}\n.json-view .json-view--number {\n\tcolor: var(--json-number);\n}\n.json-view .json-view--string {\n\tcolor: var(--json-string);\n}\n.json-view .json-view--boolean {\n\tcolor: var(--json-boolean);\n}\n.json-view .json-view--null {\n\tcolor: var(--json-null);\n}\n\n.json-view .jv-indent {\n\tpadding-left: 1em;\n}\n.json-view .jv-chevron {\n\tdisplay: inline-block;\n\tvertical-align: -20%;\n\tcursor: pointer;\n\topacity: 0.4;\n\twidth: 1em;\n\theight: 1em;\n}\n:is(.json-view .jv-chevron:hover, .json-view .jv-size:hover + .jv-chevron) {\n\topacity: 0.8;\n}\n.json-view .jv-size {\n\tcursor: pointer;\n\topacity: 0.4;\n\tfont-size: 0.875em;\n\tfont-style: italic;\n\tmargin-left: 0.5em;\n\tvertical-align: -5%;\n\tline-height: 1;\n}\n\n.json-view :is(.json-view--copy, .json-view--edit) {\n\tdisplay: none;\n\twidth: 1em;\n\theight: 1em;\n\tmargin-left: 0.25em;\n\tcursor: pointer;\n}\n\n.json-view .json-view--input {\n\twidth: 120px;\n\tmargin-left: 0.25em;\n\tborder-radius: 4px;\n\tborder: 1px solid currentColor;\n\tpadding: 0px 4px;\n\tfont-size: 87.5%;\n\tline-height: 1.25;\n\tbackground: transparent;\n}\n.json-view .json-view--deleting {\n\toutline: 1px solid #da0000;\n\tbackground-color: #da000011;\n\ttext-decoration-line: line-through;\n}\n\n:is(.json-view:hover, .json-view--pair:hover) > :is(.json-view--copy, .json-view--edit) {\n\tdisplay: inline-block;\n}\n\n.json-view .jv-button {\n\tbackground: transparent;\n\toutline: none;\n\tborder: none;\n\tcursor: pointer;\n}\n.json-view .cursor-pointer {\n\tcursor: pointer;\n}\n\n/* Themes */\n.json-view_a11y {\n\tcolor: #545454;\n\t--json-property: #aa5d00;\n\t--json-index: #007299;\n\t--json-number: #007299;\n\t--json-string: #008000;\n\t--json-boolean: #d91e18;\n\t--json-null: #d91e18;\n}\n.json-view_github {\n\tcolor: #005cc5;\n\t--json-property: #005cc5;\n\t--json-index: #005cc5;\n\t--json-number: #005cc5;\n\t--json-string: #032f62;\n\t--json-boolean: #005cc5;\n\t--json-null: #005cc5;\n}\n.json-view_vscode {\n\tcolor: #005cc5;\n\t--json-property: #0451a5;\n\t--json-index: #0000ff;\n\t--json-number: #0000ff;\n\t--json-string: #a31515;\n\t--json-boolean: #0000ff;\n\t--json-null: #0000ff;\n}\n.json-view_atom {\n\tcolor: #383a42;\n\t--json-property: #e45649;\n\t--json-index: #986801;\n\t--json-number: #986801;\n\t--json-string: #50a14f;\n\t--json-boolean: #0184bc;\n\t--json-null: #0184bc;\n}\n.json-view_winter-is-coming {\n\tcolor: #0431fa;\n\t--json-property: #3a9685;\n\t--json-index: #ae408b;\n\t--json-number: #ae408b;\n\t--json-string: #8123a9;\n\t--json-boolean: #0184bc;\n\t--json-null: #0184bc;\n}\n";
var unused = css_248z;
styleInject(css_248z);

var sillyFunc = function sillyFunc(unused) {
  console.log(unused.slice(0, 1));
};
sillyFunc(unused);
var QueryInspector = function QueryInspector(_ref) {
  var useQuery = _ref.useQuery;
  var response = useQuery();
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    children: /*#__PURE__*/jsxRuntime.jsx(JsonView, {
      src: response,
      collapseObjectsAfterLength: 2
    })
  });
};
var UseQueryInspector = function UseQueryInspector(_ref2) {
  var stencil = _ref2.stencil;
  var _useState = React.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx("h3", {
      children: "useQuery Inspector"
    }), stencil && /*#__PURE__*/jsxRuntime.jsx("div", {
      children: /*#__PURE__*/jsxRuntime.jsxs("select", {
        onChange: function onChange(ev) {
          return setQuery(ev.target.value);
        },
        children: [/*#__PURE__*/jsxRuntime.jsx("option", {
          value: ""
        }), Object.keys(stencil.queries).map(function (query) {
          return /*#__PURE__*/jsxRuntime.jsx("option", {
            value: query,
            children: query
          }, query);
        })]
      })
    }), query && /*#__PURE__*/jsxRuntime.jsx(QueryInspector, {
      useQuery: stencil.queries[query]
    })]
  });
};

var useStencil = function useStencil(doc, config) {
  var _doc$info, _config$server;
  return React.useMemo(function () {
    if (!doc || !config) return;
    return buildStencil(doc, config);
  }, [doc === null || doc === void 0 || (_doc$info = doc.info) === null || _doc$info === void 0 ? void 0 : _doc$info.title, (_config$server = config.server) === null || _config$server === void 0 ? void 0 : _config$server.url]);
};

var useStateWithLocalStorage = function useStateWithLocalStorage(name, initialValue) {
  var _JSON$parse;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    initialized = _useState2[0],
    setInitialized = _useState2[1];
  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  React.useEffect(function () {
    if (!initialized) {
      var existing = JSON.parse(localStorage.getItem(name));
      if (existing !== null && existing !== void 0 && existing.value) {
        setValue(existing.value);
      } else if (initialValue) {
        setValue(initialValue);
        localStorage.setItem(name, JSON.stringify({
          value: initialValue
        }));
      }
      setInitialized(true);
      return;
    }
    localStorage.setItem(name, JSON.stringify({
      value: value
    }));
  }, [value, initialized, initialValue]);
  return [value || ((_JSON$parse = JSON.parse(localStorage.getItem(name))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.value), setValue];
};

var Inspector = function Inspector(_ref) {
  var _originalStencil$conf, _config$openapiUrls, _activeOpenapi$server, _stencil$config$serve, _stencil$config$serve2;
  var originalStencil = _ref.stencil;
  var _useStateWithLocalSto = useStateWithLocalStorage('stencil-inspector', {
      activeOpenapiUrl: 'local',
      openapiUrls: {
        local: {
          activeServerUrl: originalStencil === null || originalStencil === void 0 || (_originalStencil$conf = originalStencil.config) === null || _originalStencil$conf === void 0 || (_originalStencil$conf = _originalStencil$conf.server) === null || _originalStencil$conf === void 0 ? void 0 : _originalStencil$conf.url
        }
      }
    }),
    _useStateWithLocalSto2 = _slicedToArray(_useStateWithLocalSto, 2),
    config = _useStateWithLocalSto2[0],
    setConfig = _useStateWithLocalSto2[1];
  var activeOpenapiUrl = config === null || config === void 0 ? void 0 : config.activeOpenapiUrl;
  var activeOpenapi = config === null || config === void 0 || (_config$openapiUrls = config.openapiUrls) === null || _config$openapiUrls === void 0 ? void 0 : _config$openapiUrls[activeOpenapiUrl];
  var openapiDoc = reactQuery.useQuery(['stencil', 'openapiDoc', activeOpenapiUrl], function () {
    return fetch(activeOpenapiUrl).then(function (res) {
      return res.json();
    });
  }, {
    enabled: activeOpenapiUrl !== 'local'
  });
  var activeServerUrl = activeOpenapi === null || activeOpenapi === void 0 ? void 0 : activeOpenapi.activeServerUrl;
  var activeAccount = activeOpenapi === null || activeOpenapi === void 0 || (_activeOpenapi$server = activeOpenapi.servers) === null || _activeOpenapi$server === void 0 || (_activeOpenapi$server = _activeOpenapi$server[activeServerUrl]) === null || _activeOpenapi$server === void 0 || (_activeOpenapi$server = _activeOpenapi$server.accounts) === null || _activeOpenapi$server === void 0 ? void 0 : _activeOpenapi$server.find(function (a) {
    return a.isActive;
  });
  var stencil = useStencil(activeOpenapiUrl === 'local' ? originalStencil.doc : openapiDoc.data, _objectSpread2(_objectSpread2({}, originalStencil.config), {}, {
    server: {
      url: activeServerUrl
    },
    useToken: function useToken() {
      return activeAccount === null || activeAccount === void 0 ? void 0 : activeAccount.token;
    }
  }));
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx("h1", {
      children: "Inspector"
    }), /*#__PURE__*/jsxRuntime.jsx("hr", {}), /*#__PURE__*/jsxRuntime.jsx("br", {}), /*#__PURE__*/jsxRuntime.jsx(Config, {
      config: config,
      setConfig: setConfig,
      stencil: stencil
    }), /*#__PURE__*/jsxRuntime.jsx("br", {}), /*#__PURE__*/jsxRuntime.jsx("hr", {}), /*#__PURE__*/jsxRuntime.jsx("br", {}), stencil && ((_stencil$config$serve = stencil.config.server) === null || _stencil$config$serve === void 0 ? void 0 : _stencil$config$serve.url) && /*#__PURE__*/jsxRuntime.jsx(UseFormInspector, {
      stencil: stencil
    }), /*#__PURE__*/jsxRuntime.jsx("br", {}), /*#__PURE__*/jsxRuntime.jsx("hr", {}), /*#__PURE__*/jsxRuntime.jsx("br", {}), stencil && ((_stencil$config$serve2 = stencil.config.server) === null || _stencil$config$serve2 === void 0 ? void 0 : _stencil$config$serve2.url) && /*#__PURE__*/jsxRuntime.jsx(UseQueryInspector, {
      stencil: stencil
    })]
  });
};

exports.Inspector = Inspector;
exports.buildStencil = buildStencil;
//# sourceMappingURL=index.js.map
