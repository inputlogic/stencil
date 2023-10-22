import ReactDOM from 'react-dom';
import * as React from 'react';
import React__default, { useState, useContext, createContext, useCallback, isValidElement, useRef, useMemo, useEffect } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

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

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

var Subscribable = /*#__PURE__*/function () {
  function Subscribable() {
    this.listeners = [];
  }

  var _proto = Subscribable.prototype;

  _proto.subscribe = function subscribe(listener) {
    var _this = this;

    var callback = listener || function () {
      return undefined;
    };

    this.listeners.push(callback);
    this.onSubscribe();
    return function () {
      _this.listeners = _this.listeners.filter(function (x) {
        return x !== callback;
      });

      _this.onUnsubscribe();
    };
  };

  _proto.hasListeners = function hasListeners() {
    return this.listeners.length > 0;
  };

  _proto.onSubscribe = function onSubscribe() {// Do nothing
  };

  _proto.onUnsubscribe = function onUnsubscribe() {// Do nothing
  };

  return Subscribable;
}();

function _extends$8() {
  _extends$8 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$8.apply(this, arguments);
}

// TYPES
// UTILS
var isServer = typeof window === 'undefined';
function noop() {
  return undefined;
}
function isValidTimeout(value) {
  return typeof value === 'number' && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }

  if (typeof arg2 === 'function') {
    return _extends$8({}, arg3, {
      queryKey: arg1,
      queryFn: arg2
    });
  }

  return _extends$8({}, arg2, {
    queryKey: arg1
  });
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === 'function') {
      return _extends$8({}, arg3, {
        mutationKey: arg1,
        mutationFn: arg2
      });
    }

    return _extends$8({}, arg2, {
      mutationKey: arg1
    });
  }

  if (typeof arg1 === 'function') {
    return _extends$8({}, arg2, {
      mutationFn: arg1
    });
  }

  return _extends$8({}, arg1);
}
/**
 * This function returns `a` if `b` is deeply equal.
 * If not, it will replace any deeply equal children of `b` with those of `a`.
 * This can be used for structural sharing between JSON values for example.
 */

function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }

  var array = Array.isArray(a) && Array.isArray(b);

  if (array || isPlainObject(a) && isPlainObject(b)) {
    var aSize = array ? a.length : Object.keys(a).length;
    var bItems = array ? b : Object.keys(b);
    var bSize = bItems.length;
    var copy = array ? [] : {};
    var equalItems = 0;

    for (var i = 0; i < bSize; i++) {
      var key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);

      if (copy[key] === a[key]) {
        equalItems++;
      }
    }

    return aSize === bSize && equalItems === aSize ? a : copy;
  }

  return b;
}
/**
 * Shallow compare objects. Only works with objects that always have the same properties.
 */

function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
} // Copied from: https://github.com/jonschlinkert/is-plain-object

function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  } // If has modified constructor


  var ctor = o.constructor;

  if (typeof ctor === 'undefined') {
    return true;
  } // If has modified prototype


  var prot = ctor.prototype;

  if (!hasObjectPrototype(prot)) {
    return false;
  } // If constructor does not have an Object-specific method


  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false;
  } // Most likely a plain Object


  return true;
}

function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isQueryKey(value) {
  return typeof value === 'string' || Array.isArray(value);
}
/**
 * Schedules a microtask.
 * This can be useful to schedule state updates after rendering.
 */

function scheduleMicrotask(callback) {
  Promise.resolve().then(callback).catch(function (error) {
    return setTimeout(function () {
      throw error;
    });
  });
}

var FocusManager = /*#__PURE__*/function (_Subscribable) {
  _inheritsLoose(FocusManager, _Subscribable);

  function FocusManager() {
    var _this;

    _this = _Subscribable.call(this) || this;

    _this.setup = function (onFocus) {
      var _window;

      if (!isServer && ((_window = window) == null ? void 0 : _window.addEventListener)) {
        var listener = function listener() {
          return onFocus();
        }; // Listen to visibillitychange and focus


        window.addEventListener('visibilitychange', listener, false);
        window.addEventListener('focus', listener, false);
        return function () {
          // Be sure to unsubscribe if a new handler is set
          window.removeEventListener('visibilitychange', listener);
          window.removeEventListener('focus', listener);
        };
      }
    };

    return _this;
  }

  var _proto = FocusManager.prototype;

  _proto.onSubscribe = function onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;

      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = undefined;
    }
  };

  _proto.setEventListener = function setEventListener(setup) {
    var _this$cleanup2,
        _this2 = this;

    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup(function (focused) {
      if (typeof focused === 'boolean') {
        _this2.setFocused(focused);
      } else {
        _this2.onFocus();
      }
    });
  };

  _proto.setFocused = function setFocused(focused) {
    this.focused = focused;

    if (focused) {
      this.onFocus();
    }
  };

  _proto.onFocus = function onFocus() {
    this.listeners.forEach(function (listener) {
      listener();
    });
  };

  _proto.isFocused = function isFocused() {
    if (typeof this.focused === 'boolean') {
      return this.focused;
    } // document global can be unavailable in react native


    if (typeof document === 'undefined') {
      return true;
    }

    return [undefined, 'visible', 'prerender'].includes(document.visibilityState);
  };

  return FocusManager;
}(Subscribable);
var focusManager = new FocusManager();

var CancelledError = function CancelledError(options) {
  this.revert = options == null ? void 0 : options.revert;
  this.silent = options == null ? void 0 : options.silent;
};
function isCancelledError(value) {
  return value instanceof CancelledError;
} // CLASS

// CLASS
var NotifyManager = /*#__PURE__*/function () {
  function NotifyManager() {
    this.queue = [];
    this.transactions = 0;

    this.notifyFn = function (callback) {
      callback();
    };

    this.batchNotifyFn = function (callback) {
      callback();
    };
  }

  var _proto = NotifyManager.prototype;

  _proto.batch = function batch(callback) {
    var result;
    this.transactions++;

    try {
      result = callback();
    } finally {
      this.transactions--;

      if (!this.transactions) {
        this.flush();
      }
    }

    return result;
  };

  _proto.schedule = function schedule(callback) {
    var _this = this;

    if (this.transactions) {
      this.queue.push(callback);
    } else {
      scheduleMicrotask(function () {
        _this.notifyFn(callback);
      });
    }
  }
  /**
   * All calls to the wrapped function will be batched.
   */
  ;

  _proto.batchCalls = function batchCalls(callback) {
    var _this2 = this;

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2.schedule(function () {
        callback.apply(void 0, args);
      });
    };
  };

  _proto.flush = function flush() {
    var _this3 = this;

    var queue = this.queue;
    this.queue = [];

    if (queue.length) {
      scheduleMicrotask(function () {
        _this3.batchNotifyFn(function () {
          queue.forEach(function (callback) {
            _this3.notifyFn(callback);
          });
        });
      });
    }
  }
  /**
   * Use this method to set a custom notify function.
   * This can be used to for example wrap notifications with `React.act` while running tests.
   */
  ;

  _proto.setNotifyFunction = function setNotifyFunction(fn) {
    this.notifyFn = fn;
  }
  /**
   * Use this method to set a custom function to batch notifications together into a single tick.
   * By default React Query will use the batch function provided by ReactDOM or React Native.
   */
  ;

  _proto.setBatchNotifyFunction = function setBatchNotifyFunction(fn) {
    this.batchNotifyFn = fn;
  };

  return NotifyManager;
}(); // SINGLETON

var notifyManager = new NotifyManager();

// TYPES
// FUNCTIONS
var logger$1 = console;
function getLogger() {
  return logger$1;
}
function setLogger(newLogger) {
  logger$1 = newLogger;
}

function getDefaultState() {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: 'idle',
    variables: undefined
  };
}

var QueryObserver = /*#__PURE__*/function (_Subscribable) {
  _inheritsLoose(QueryObserver, _Subscribable);

  function QueryObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;
    _this.options = options;
    _this.trackedProps = [];
    _this.selectError = null;

    _this.bindMethods();

    _this.setOptions(options);

    return _this;
  }

  var _proto = QueryObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  };

  _proto.onSubscribe = function onSubscribe() {
    if (this.listeners.length === 1) {
      this.currentQuery.addObserver(this);

      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }

      this.updateTimers();
    }
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  };

  _proto.shouldFetchOnReconnect = function shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  };

  _proto.shouldFetchOnWindowFocus = function shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  };

  _proto.destroy = function destroy() {
    this.listeners = [];
    this.clearTimers();
    this.currentQuery.removeObserver(this);
  };

  _proto.setOptions = function setOptions(options, notifyOptions) {
    var prevOptions = this.options;
    var prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryObserverOptions(options);

    if (typeof this.options.enabled !== 'undefined' && typeof this.options.enabled !== 'boolean') {
      throw new Error('Expected enabled to be a boolean');
    } // Keep previous query key if the user does not supply one


    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }

    this.updateQuery();
    var mounted = this.hasListeners(); // Fetch if there are subscribers

    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    } // Update result


    this.updateResult(notifyOptions); // Update stale interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }

    var nextRefetchInterval = this.computeRefetchInterval(); // Update refetch interval if needed

    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  };

  _proto.getOptimisticResult = function getOptimisticResult(options) {
    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return this.createResult(query, defaultedOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.trackResult = function trackResult(result, defaultedOptions) {
    var _this2 = this;

    var trackedResult = {};

    var trackProp = function trackProp(key) {
      if (!_this2.trackedProps.includes(key)) {
        _this2.trackedProps.push(key);
      }
    };

    Object.keys(result).forEach(function (key) {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: function get() {
          trackProp(key);
          return result[key];
        }
      });
    });

    if (defaultedOptions.useErrorBoundary || defaultedOptions.suspense) {
      trackProp('error');
    }

    return trackedResult;
  };

  _proto.getNextResult = function getNextResult(options) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      var unsubscribe = _this3.subscribe(function (result) {
        if (!result.isFetching) {
          unsubscribe();

          if (result.isError && (options == null ? void 0 : options.throwOnError)) {
            reject(result.error);
          } else {
            resolve(result);
          }
        }
      });
    });
  };

  _proto.getCurrentQuery = function getCurrentQuery() {
    return this.currentQuery;
  };

  _proto.remove = function remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  };

  _proto.refetch = function refetch(options) {
    return this.fetch(_extends$8({}, options, {
      meta: {
        refetchPage: options == null ? void 0 : options.refetchPage
      }
    }));
  };

  _proto.fetchOptimistic = function fetchOptimistic(options) {
    var _this4 = this;

    var defaultedOptions = this.client.defaultQueryObserverOptions(options);
    var query = this.client.getQueryCache().build(this.client, defaultedOptions);
    return query.fetch().then(function () {
      return _this4.createResult(query, defaultedOptions);
    });
  };

  _proto.fetch = function fetch(fetchOptions) {
    var _this5 = this;

    return this.executeFetch(fetchOptions).then(function () {
      _this5.updateResult();

      return _this5.currentResult;
    });
  };

  _proto.executeFetch = function executeFetch(fetchOptions) {
    // Make sure we reference the latest query as the current one might have been removed
    this.updateQuery(); // Fetch

    var promise = this.currentQuery.fetch(this.options, fetchOptions);

    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
      promise = promise.catch(noop);
    }

    return promise;
  };

  _proto.updateStaleTimeout = function updateStaleTimeout() {
    var _this6 = this;

    this.clearStaleTimeout();

    if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
      return;
    }

    var time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime); // The timeout is sometimes triggered 1 ms before the stale time expiration.
    // To mitigate this issue we always add 1 ms to the timeout.

    var timeout = time + 1;
    this.staleTimeoutId = setTimeout(function () {
      if (!_this6.currentResult.isStale) {
        _this6.updateResult();
      }
    }, timeout);
  };

  _proto.computeRefetchInterval = function computeRefetchInterval() {
    var _this$options$refetch;

    return typeof this.options.refetchInterval === 'function' ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  };

  _proto.updateRefetchInterval = function updateRefetchInterval(nextInterval) {
    var _this7 = this;

    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;

    if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }

    this.refetchIntervalId = setInterval(function () {
      if (_this7.options.refetchIntervalInBackground || focusManager.isFocused()) {
        _this7.executeFetch();
      }
    }, this.currentRefetchInterval);
  };

  _proto.updateTimers = function updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  };

  _proto.clearTimers = function clearTimers() {
    this.clearStaleTimeout();
    this.clearRefetchInterval();
  };

  _proto.clearStaleTimeout = function clearStaleTimeout() {
    if (this.staleTimeoutId) {
      clearTimeout(this.staleTimeoutId);
      this.staleTimeoutId = undefined;
    }
  };

  _proto.clearRefetchInterval = function clearRefetchInterval() {
    if (this.refetchIntervalId) {
      clearInterval(this.refetchIntervalId);
      this.refetchIntervalId = undefined;
    }
  };

  _proto.createResult = function createResult(query, options) {
    var prevQuery = this.currentQuery;
    var prevOptions = this.options;
    var prevResult = this.currentResult;
    var prevResultState = this.currentResultState;
    var prevResultOptions = this.currentResultOptions;
    var queryChange = query !== prevQuery;
    var queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    var prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    var state = query.state;
    var dataUpdatedAt = state.dataUpdatedAt,
        error = state.error,
        errorUpdatedAt = state.errorUpdatedAt,
        isFetching = state.isFetching,
        status = state.status;
    var isPreviousData = false;
    var isPlaceholderData = false;
    var data; // Optimistically set result in fetching state if needed

    if (options.optimisticResults) {
      var mounted = this.hasListeners();
      var fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      var fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);

      if (fetchOnMount || fetchOptionally) {
        isFetching = true;

        if (!dataUpdatedAt) {
          status = 'loading';
        }
      }
    } // Keep previous data if needed


    if (options.keepPreviousData && !state.dataUpdateCount && (prevQueryResult == null ? void 0 : prevQueryResult.isSuccess) && status !== 'error') {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } // Select data if needed
    else if (options.select && typeof state.data !== 'undefined') {
        // Memoize select result
        if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
          data = this.selectResult;
        } else {
          try {
            this.selectFn = options.select;
            data = options.select(state.data);

            if (options.structuralSharing !== false) {
              data = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, data);
            }

            this.selectResult = data;
            this.selectError = null;
          } catch (selectError) {
            getLogger().error(selectError);
            this.selectError = selectError;
          }
        }
      } // Use query data
      else {
          data = state.data;
        } // Show placeholder data if needed


    if (typeof options.placeholderData !== 'undefined' && typeof data === 'undefined' && (status === 'loading' || status === 'idle')) {
      var placeholderData; // Memoize placeholder data

      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === 'function' ? options.placeholderData() : options.placeholderData;

        if (options.select && typeof placeholderData !== 'undefined') {
          try {
            placeholderData = options.select(placeholderData);

            if (options.structuralSharing !== false) {
              placeholderData = replaceEqualDeep(prevResult == null ? void 0 : prevResult.data, placeholderData);
            }

            this.selectError = null;
          } catch (selectError) {
            getLogger().error(selectError);
            this.selectError = selectError;
          }
        }
      }

      if (typeof placeholderData !== 'undefined') {
        status = 'success';
        data = placeholderData;
        isPlaceholderData = true;
      }
    }

    if (this.selectError) {
      error = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = 'error';
    }

    var result = {
      status: status,
      isLoading: status === 'loading',
      isSuccess: status === 'success',
      isError: status === 'error',
      isIdle: status === 'idle',
      data: data,
      dataUpdatedAt: dataUpdatedAt,
      error: error,
      errorUpdatedAt: errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching: isFetching,
      isRefetching: isFetching && status !== 'loading',
      isLoadingError: status === 'error' && state.dataUpdatedAt === 0,
      isPlaceholderData: isPlaceholderData,
      isPreviousData: isPreviousData,
      isRefetchError: status === 'error' && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  };

  _proto.shouldNotifyListeners = function shouldNotifyListeners(result, prevResult) {
    if (!prevResult) {
      return true;
    }

    var _this$options = this.options,
        notifyOnChangeProps = _this$options.notifyOnChangeProps,
        notifyOnChangePropsExclusions = _this$options.notifyOnChangePropsExclusions;

    if (!notifyOnChangeProps && !notifyOnChangePropsExclusions) {
      return true;
    }

    if (notifyOnChangeProps === 'tracked' && !this.trackedProps.length) {
      return true;
    }

    var includedProps = notifyOnChangeProps === 'tracked' ? this.trackedProps : notifyOnChangeProps;
    return Object.keys(result).some(function (key) {
      var typedKey = key;
      var changed = result[typedKey] !== prevResult[typedKey];
      var isIncluded = includedProps == null ? void 0 : includedProps.some(function (x) {
        return x === key;
      });
      var isExcluded = notifyOnChangePropsExclusions == null ? void 0 : notifyOnChangePropsExclusions.some(function (x) {
        return x === key;
      });
      return changed && !isExcluded && (!includedProps || isIncluded);
    });
  };

  _proto.updateResult = function updateResult(notifyOptions) {
    var prevResult = this.currentResult;
    this.currentResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options; // Only notify if something has changed

    if (shallowEqualObjects(this.currentResult, prevResult)) {
      return;
    } // Determine which callbacks to trigger


    var defaultNotifyOptions = {
      cache: true
    };

    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && this.shouldNotifyListeners(this.currentResult, prevResult)) {
      defaultNotifyOptions.listeners = true;
    }

    this.notify(_extends$8({}, defaultNotifyOptions, notifyOptions));
  };

  _proto.updateQuery = function updateQuery() {
    var query = this.client.getQueryCache().build(this.client, this.options);

    if (query === this.currentQuery) {
      return;
    }

    var prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;

    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  };

  _proto.onQueryUpdate = function onQueryUpdate(action) {
    var notifyOptions = {};

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error' && !isCancelledError(action.error)) {
      notifyOptions.onError = true;
    }

    this.updateResult(notifyOptions);

    if (this.hasListeners()) {
      this.updateTimers();
    }
  };

  _proto.notify = function notify(notifyOptions) {
    var _this8 = this;

    notifyManager.batch(function () {
      // First trigger the configuration callbacks
      if (notifyOptions.onSuccess) {
        _this8.options.onSuccess == null ? void 0 : _this8.options.onSuccess(_this8.currentResult.data);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(_this8.currentResult.data, null);
      } else if (notifyOptions.onError) {
        _this8.options.onError == null ? void 0 : _this8.options.onError(_this8.currentResult.error);
        _this8.options.onSettled == null ? void 0 : _this8.options.onSettled(undefined, _this8.currentResult.error);
      } // Then trigger the listeners


      if (notifyOptions.listeners) {
        _this8.listeners.forEach(function (listener) {
          listener(_this8.currentResult);
        });
      } // Then the cache listeners


      if (notifyOptions.cache) {
        _this8.client.getQueryCache().notify({
          query: _this8.currentQuery,
          type: 'observerResultsUpdated'
        });
      }
    });
  };

  return QueryObserver;
}(Subscribable);

function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === 'error' && options.retryOnMount === false);
}

function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}

function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    var value = typeof field === 'function' ? field(query) : field;
    return value === 'always' || value !== false && isStale(query, options);
  }

  return false;
}

function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== 'error') && isStale(query, options);
}

function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}

// CLASS
var MutationObserver = /*#__PURE__*/function (_Subscribable) {
  _inheritsLoose(MutationObserver, _Subscribable);

  function MutationObserver(client, options) {
    var _this;

    _this = _Subscribable.call(this) || this;
    _this.client = client;

    _this.setOptions(options);

    _this.bindMethods();

    _this.updateResult();

    return _this;
  }

  var _proto = MutationObserver.prototype;

  _proto.bindMethods = function bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  };

  _proto.setOptions = function setOptions(options) {
    this.options = this.client.defaultMutationOptions(options);
  };

  _proto.onUnsubscribe = function onUnsubscribe() {
    if (!this.listeners.length) {
      var _this$currentMutation;

      (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.removeObserver(this);
    }
  };

  _proto.onMutationUpdate = function onMutationUpdate(action) {
    this.updateResult(); // Determine which callbacks to trigger

    var notifyOptions = {
      listeners: true
    };

    if (action.type === 'success') {
      notifyOptions.onSuccess = true;
    } else if (action.type === 'error') {
      notifyOptions.onError = true;
    }

    this.notify(notifyOptions);
  };

  _proto.getCurrentResult = function getCurrentResult() {
    return this.currentResult;
  };

  _proto.reset = function reset() {
    this.currentMutation = undefined;
    this.updateResult();
    this.notify({
      listeners: true
    });
  };

  _proto.mutate = function mutate(variables, options) {
    this.mutateOptions = options;

    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }

    this.currentMutation = this.client.getMutationCache().build(this.client, _extends$8({}, this.options, {
      variables: typeof variables !== 'undefined' ? variables : this.options.variables
    }));
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  };

  _proto.updateResult = function updateResult() {
    var state = this.currentMutation ? this.currentMutation.state : getDefaultState();

    var result = _extends$8({}, state, {
      isLoading: state.status === 'loading',
      isSuccess: state.status === 'success',
      isError: state.status === 'error',
      isIdle: state.status === 'idle',
      mutate: this.mutate,
      reset: this.reset
    });

    this.currentResult = result;
  };

  _proto.notify = function notify(options) {
    var _this2 = this;

    notifyManager.batch(function () {
      // First trigger the mutate callbacks
      if (_this2.mutateOptions) {
        if (options.onSuccess) {
          _this2.mutateOptions.onSuccess == null ? void 0 : _this2.mutateOptions.onSuccess(_this2.currentResult.data, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(_this2.currentResult.data, null, _this2.currentResult.variables, _this2.currentResult.context);
        } else if (options.onError) {
          _this2.mutateOptions.onError == null ? void 0 : _this2.mutateOptions.onError(_this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
          _this2.mutateOptions.onSettled == null ? void 0 : _this2.mutateOptions.onSettled(undefined, _this2.currentResult.error, _this2.currentResult.variables, _this2.currentResult.context);
        }
      } // Then trigger the listeners


      if (options.listeners) {
        _this2.listeners.forEach(function (listener) {
          listener(_this2.currentResult);
        });
      }
    });
  };

  return MutationObserver;
}(Subscribable);

var unstable_batchedUpdates = ReactDOM.unstable_batchedUpdates;

notifyManager.setBatchNotifyFunction(unstable_batchedUpdates);

var logger = console;

setLogger(logger);

var defaultContext = /*#__PURE__*/React__default.createContext(undefined);
var QueryClientSharingContext = /*#__PURE__*/React__default.createContext(false); // if contextSharing is on, we share the first and at least one
// instance of the context across the window
// to ensure that if React Query is used across
// different bundles or microfrontends they will
// all use the same **instance** of context, regardless
// of module scoping.

function getQueryClientContext(contextSharing) {
  if (contextSharing && typeof window !== 'undefined') {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }

    return window.ReactQueryClientContext;
  }

  return defaultContext;
}

var useQueryClient = function useQueryClient() {
  var queryClient = React__default.useContext(getQueryClientContext(React__default.useContext(QueryClientSharingContext)));

  if (!queryClient) {
    throw new Error('No QueryClient set, use QueryClientProvider to set one');
  }

  return queryClient;
};

function createValue() {
  var _isReset = false;
  return {
    clearReset: function clearReset() {
      _isReset = false;
    },
    reset: function reset() {
      _isReset = true;
    },
    isReset: function isReset() {
      return _isReset;
    }
  };
}

var QueryErrorResetBoundaryContext = /*#__PURE__*/React__default.createContext(createValue()); // HOOK

var useQueryErrorResetBoundary = function useQueryErrorResetBoundary() {
  return React__default.useContext(QueryErrorResetBoundaryContext);
}; // COMPONENT

function shouldThrowError(suspense, _useErrorBoundary, params) {
  // Allow useErrorBoundary function to override throwing behavior on a per-error basis
  if (typeof _useErrorBoundary === 'function') {
    return _useErrorBoundary.apply(void 0, params);
  } // Allow useErrorBoundary to override suspense's throwing behavior


  if (typeof _useErrorBoundary === 'boolean') return _useErrorBoundary; // If suspense is enabled default to throwing errors

  return !!suspense;
}

function useMutation(arg1, arg2, arg3) {
  var mountedRef = React__default.useRef(false);

  var _React$useState = React__default.useState(0),
      forceUpdate = _React$useState[1];

  var options = parseMutationArgs(arg1, arg2, arg3);
  var queryClient = useQueryClient();
  var obsRef = React__default.useRef();

  if (!obsRef.current) {
    obsRef.current = new MutationObserver(queryClient, options);
  } else {
    obsRef.current.setOptions(options);
  }

  var currentResult = obsRef.current.getCurrentResult();
  React__default.useEffect(function () {
    mountedRef.current = true;
    var unsubscribe = obsRef.current.subscribe(notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    }));
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, []);
  var mutate = React__default.useCallback(function (variables, mutateOptions) {
    obsRef.current.mutate(variables, mutateOptions).catch(noop);
  }, []);

  if (currentResult.error && shouldThrowError(undefined, obsRef.current.options.useErrorBoundary, [currentResult.error])) {
    throw currentResult.error;
  }

  return _extends$8({}, currentResult, {
    mutate: mutate,
    mutateAsync: currentResult.mutate
  });
}

function useBaseQuery(options, Observer) {
  var mountedRef = React__default.useRef(false);

  var _React$useState = React__default.useState(0),
      forceUpdate = _React$useState[1];

  var queryClient = useQueryClient();
  var errorResetBoundary = useQueryErrorResetBoundary();
  var defaultedOptions = queryClient.defaultQueryObserverOptions(options); // Make sure results are optimistically set in fetching state before subscribing or updating options

  defaultedOptions.optimisticResults = true; // Include callbacks in batch renders

  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(defaultedOptions.onError);
  }

  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(defaultedOptions.onSuccess);
  }

  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(defaultedOptions.onSettled);
  }

  if (defaultedOptions.suspense) {
    // Always set stale time when using suspense to prevent
    // fetching again when directly mounting after suspending
    if (typeof defaultedOptions.staleTime !== 'number') {
      defaultedOptions.staleTime = 1000;
    } // Set cache time to 1 if the option has been set to 0
    // when using suspense to prevent infinite loop of fetches


    if (defaultedOptions.cacheTime === 0) {
      defaultedOptions.cacheTime = 1;
    }
  }

  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    // Prevent retrying failed query if the error boundary has not been reset yet
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }

  var _React$useState2 = React__default.useState(function () {
    return new Observer(queryClient, defaultedOptions);
  }),
      observer = _React$useState2[0];

  var result = observer.getOptimisticResult(defaultedOptions);
  React__default.useEffect(function () {
    mountedRef.current = true;
    errorResetBoundary.clearReset();
    var unsubscribe = observer.subscribe(notifyManager.batchCalls(function () {
      if (mountedRef.current) {
        forceUpdate(function (x) {
          return x + 1;
        });
      }
    })); // Update result to make sure we did not miss any query updates
    // between creating the observer and subscribing to it.

    observer.updateResult();
    return function () {
      mountedRef.current = false;
      unsubscribe();
    };
  }, [errorResetBoundary, observer]);
  React__default.useEffect(function () {
    // Do not notify on updates because of changes in the options because
    // these changes should already be reflected in the optimistic result.
    observer.setOptions(defaultedOptions, {
      listeners: false
    });
  }, [defaultedOptions, observer]); // Handle suspense

  if (defaultedOptions.suspense && result.isLoading) {
    throw observer.fetchOptimistic(defaultedOptions).then(function (_ref) {
      var data = _ref.data;
      defaultedOptions.onSuccess == null ? void 0 : defaultedOptions.onSuccess(data);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(data, null);
    }).catch(function (error) {
      errorResetBoundary.clearReset();
      defaultedOptions.onError == null ? void 0 : defaultedOptions.onError(error);
      defaultedOptions.onSettled == null ? void 0 : defaultedOptions.onSettled(undefined, error);
    });
  } // Handle error boundary


  if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError(defaultedOptions.suspense, defaultedOptions.useErrorBoundary, [result.error, observer.getCurrentQuery()])) {
    throw result.error;
  } // Handle result property usage tracking


  if (defaultedOptions.notifyOnChangeProps === 'tracked') {
    result = observer.trackResult(result, defaultedOptions);
  }

  return result;
}

function useQuery(arg1, arg2, arg3) {
  var parsedOptions = parseQueryArgs(arg1, arg2, arg3);
  return useBaseQuery(parsedOptions, QueryObserver);
}

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
        var reactQuery = useQuery([name].concat(_toConsumableArray(Object.entries(args).flatMap(function (x) {
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
        return [(_reactQuery$data = reactQuery.data) === null || _reactQuery$data === void 0 ? void 0 : _reactQuery$data.results, _objectSpread2(_objectSpread2({}, reactQuery), {}, {
          count: (_reactQuery$data2 = reactQuery.data) === null || _reactQuery$data2 === void 0 ? void 0 : _reactQuery$data2.count
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
        var reactQuery = useQuery([name].concat(_toConsumableArray(Object.entries(args).flatMap(function (x) {
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
        return [reactQuery.data, reactQuery];
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
          return useMutation(function (data) {
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

var jsxRuntime = {exports: {}};

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = React__default;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React__default,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

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
    return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
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
          return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
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
      return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
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
      return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        children: " TODO: Loading Error"
      });
    }
    if (!defaultValues) return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      children: "TODO: Loading..."
    });
    return /*#__PURE__*/jsxRuntimeExports.jsx(Form, _objectSpread2({
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
    var methods = useForm(_objectSpread2({
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
    return /*#__PURE__*/jsxRuntimeExports.jsx(FormProvider, _objectSpread2(_objectSpread2({}, methods), {}, {
      metadata: metadata,
      setMetadata: setMetadata,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(FormComponent, _objectSpread2({
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
    return /*#__PURE__*/jsxRuntimeExports.jsx(FormWithDefaultValues, _objectSpread2(_objectSpread2({
      useDefaultValues: useDefaultValues,
      onSubmit: onSubmit
    }, props), {}, {
      children: children ? children : /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(FormError, {}), Object.values(Fields).map(function (Field, i) {
          return /*#__PURE__*/jsxRuntimeExports.jsx(Field, {}, i);
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Button, {
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
  var _useState = useState(false),
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
  return /*#__PURE__*/jsxRuntimeExports.jsx(LoginForm.Form, {
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("h4", {
      children: "Accounts"
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
          children: ["Not authenticated", ' ', !accounts.find(function (a) {
            return a.isActive;
          }) ? ' (active)' : '']
        }), !!accounts.find(function (a) {
          return a.isActive;
        }) && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
          onClick: function onClick() {
            return onClickSetActive({
              email: '-'
            });
          },
          children: "set active"
        })]
      }), (accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0 && accounts.map(function (account) {
        return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          children: [/*#__PURE__*/jsxRuntimeExports.jsxs("span", {
            children: [account.email, " ", account.isActive && ' (active)']
          }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: function onClick() {
              return onClickRemove(account);
            },
            children: "remove"
          }), !account.isActive && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: function onClick() {
              return onClickSetActive(account);
            },
            children: "set active"
          })]
        }, account.email);
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx(AddAccount, {
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("h4", {
      children: "Server"
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        placeholder: "Server Url",
        onChange: function onChange(ev) {
          return setNewUrl(ev.target.value);
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onClickApply,
        children: "Apply"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
      onChange: onChangeSelect,
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("option", {
        value: ""
      }), stencil.doc.servers.map(function (server) {
        return /*#__PURE__*/jsxRuntimeExports.jsxs("option", {
          value: server.url,
          children: [server.description, " - ", server.url]
        }, server.url);
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      children: Object.keys(servers || {}).map(function (url) {
        return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          children: [url, url === activeServerUrl ? ' (active)' : '', /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: function onClick() {
              return onClickRemove(url);
            },
            children: "Remove"
          }), url !== activeServerUrl && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
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
  var _useState = useState(),
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("h2", {
      children: "Config"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("h4", {
      children: "Openapi Url"
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("input", {
        placeholder: "Openapi Url",
        onChange: function onChange(ev) {
          return setOpenapiUrl(ev.target.value);
        }
      }), /*#__PURE__*/jsxRuntimeExports.jsx("button", {
        onClick: onClickApply,
        children: "Apply"
      })]
    }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      children: Object.keys((config === null || config === void 0 ? void 0 : config.openapiUrls) || {}).map(function (url) {
        return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
          children: [url, url === (config === null || config === void 0 ? void 0 : config.activeOpenapiUrl) && ' (active)', url !== 'local' && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: function onClick(ev) {
              return onClickRemove(url);
            },
            children: "Remove"
          }), url !== (config === null || config === void 0 ? void 0 : config.activeOpenapiUrl) && /*#__PURE__*/jsxRuntimeExports.jsx("button", {
            onClick: function onClick(ev) {
              return onClickSetActive(url);
            },
            children: "Set Active"
          })]
        }, url);
      })
    }), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), stencil && /*#__PURE__*/jsxRuntimeExports.jsx(ServerUrl, {
      stencil: stencil,
      servers: servers || [],
      setServers: setServers,
      activeServerUrl: activeServerUrl,
      setActiveServer: setActiveServer
    }), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), stencil && /*#__PURE__*/jsxRuntimeExports.jsx(Accounts, {
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
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 16"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12.473 5.806a.666.666 0 0 0-.946 0L8.473 8.86a.667.667 0 0 1-.946 0L4.473 5.806a.667.667 0 1 0-.946.94l3.06 3.06a2 2 0 0 0 2.826 0l3.06-3.06a.667.667 0 0 0 0-.94Z"
  })));
};

var _path$6;
function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.542 2.5h-4.75a3.963 3.963 0 0 0-3.959 3.958v4.75a3.963 3.963 0 0 0 3.959 3.959h4.75a3.963 3.963 0 0 0 3.958-3.959v-4.75A3.963 3.963 0 0 0 17.542 2.5Zm2.375 8.708a2.378 2.378 0 0 1-2.375 2.375h-4.75a2.378 2.378 0 0 1-2.375-2.375v-4.75a2.378 2.378 0 0 1 2.375-2.375h4.75a2.378 2.378 0 0 1 2.375 2.375v4.75Zm-4.75 6.334a3.963 3.963 0 0 1-3.959 3.958h-4.75A3.963 3.963 0 0 1 2.5 17.542v-4.75a3.963 3.963 0 0 1 3.958-3.959.791.791 0 1 1 0 1.584 2.378 2.378 0 0 0-2.375 2.375v4.75a2.378 2.378 0 0 0 2.375 2.375h4.75a2.378 2.378 0 0 0 2.375-2.375.792.792 0 1 1 1.584 0Z"
  })));
};

var _path$5, _path2$4;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var SvgCopied = function SvgCopied(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.25 3H6.75A3.755 3.755 0 0 0 3 6.75v10.5A3.754 3.754 0 0 0 6.75 21h10.5A3.754 3.754 0 0 0 21 17.25V6.75A3.755 3.755 0 0 0 17.25 3Zm2.25 14.25a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6.75 4.5h10.5a2.25 2.25 0 0 1 2.25 2.25v10.5Z"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    fill: "#14C786",
    d: "M10.312 14.45 7.83 11.906a.625.625 0 0 0-.896 0 .659.659 0 0 0 0 .918l2.481 2.546a1.264 1.264 0 0 0 .896.381 1.237 1.237 0 0 0 .895-.38l5.858-6.011a.658.658 0 0 0 0-.919.625.625 0 0 0-.896 0l-5.857 6.01Z"
  })));
};

function CopyButton({ node }) {
    const [copied, setCopied] = useState(false);
    return copied ? (jsxRuntimeExports.jsx(SvgCopied, { className: 'json-view--copy', style: { display: 'inline-block' } })) : (jsxRuntimeExports.jsx(SvgCopy, { onClick: event => {
            const value = stringifyForCopying(node);
            event.stopPropagation();
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }, className: 'json-view--copy' }));
}

function NameValue({ indexOrName, value, depth, parent, deleteHandle, editHandle }) {
    return (jsxRuntimeExports.jsxs("div", Object.assign({ className: 'json-view--pair' }, { children: [jsxRuntimeExports.jsx("span", Object.assign({ className: typeof indexOrName === 'number' ? 'json-view--index' : 'json-view--property' }, { children: indexOrName })), ":", ' ', jsxRuntimeExports.jsx(JsonNode, { node: value, depth: depth + 1, deleteHandle: deleteHandle, editHandle: editHandle, parent: parent, indexOrName: indexOrName })] })));
}

var _path$4, _path2$3;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var SvgTrash = function SvgTrash(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M18.75 6h-2.325a3.757 3.757 0 0 0-3.675-3h-1.5a3.757 3.757 0 0 0-3.675 3H5.25a.75.75 0 0 0 0 1.5H6v9.75A3.754 3.754 0 0 0 9.75 21h4.5A3.754 3.754 0 0 0 18 17.25V7.5h.75a.75.75 0 1 0 0-1.5Zm-7.5-1.5h1.5A2.255 2.255 0 0 1 14.872 6H9.128a2.255 2.255 0 0 1 2.122-1.5Zm5.25 12.75a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.25 2.25 0 0 1-2.25-2.25V7.5h9v9.75Z"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    fill: "#DA0000",
    d: "M10.5 16.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 1 0-1.5 0v4.5a.75.75 0 0 0 .75.75ZM13.5 16.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 1 0-1.5 0v4.5a.75.75 0 0 0 .75.75Z"
  })));
};

var _path$3, _path2$2;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgAddSquare = function SvgAddSquare(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M21 6.75v10.5A3.754 3.754 0 0 1 17.25 21H6.75A3.754 3.754 0 0 1 3 17.25V6.75A3.754 3.754 0 0 1 6.75 3h10.5A3.754 3.754 0 0 1 21 6.75Zm-1.5 0c0-1.24-1.01-2.25-2.25-2.25H6.75C5.51 4.5 4.5 5.51 4.5 6.75v10.5c0 1.24 1.01 2.25 2.25 2.25h10.5c1.24 0 2.25-1.01 2.25-2.25V6.75Z"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    fill: "#14C786",
    d: "M15 12.75a.75.75 0 1 0 0-1.5h-2.25V9a.75.75 0 1 0-1.5 0v2.25H9a.75.75 0 1 0 0 1.5h2.25V15a.75.75 0 1 0 1.5 0v-2.25H15Z"
  })));
};

var _path$2, _path2$1;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgDone = function SvgDone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16.5a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    fill: "#14C786",
    d: "m10.85 13.96-1.986-2.036a.5.5 0 0 0-.716 0 .527.527 0 0 0 0 .735l1.985 2.036a1.01 1.01 0 0 0 .717.305.99.99 0 0 0 .716-.305l4.686-4.808a.526.526 0 0 0 0-.735.5.5 0 0 0-.716 0l-4.687 4.809Z"
  })));
};

var _path$1, _path2;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgCancel = function SvgCancel(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    fill: "#DA0000",
    d: "M15 9a.75.75 0 0 0-1.06 0L12 10.94 10.06 9A.75.75 0 0 0 9 10.06L10.94 12 9 13.94A.75.75 0 0 0 10.06 15L12 13.06 13.94 15A.75.75 0 0 0 15 13.94L13.06 12 15 10.06A.75.75 0 0 0 15 9Z"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12 3a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16.5a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Z"
  })));
};

function ObjectNode({ node, depth, indexOrName, deleteHandle: _deleteSelf, customOptions }) {
    const { collapsed, enableClipboard, collapseObjectsAfterLength, editable, onDelete, src, onAdd, onEdit, onChange, forceUpdate, displaySize } = useContext(JsonViewContext);
    const isPlainObject = isObject(node);
    const [fold, setFold] = useState(isCollapsed(node, depth, indexOrName, collapsed, collapseObjectsAfterLength, customOptions));
    useEffect(() => {
        setFold(isCollapsed(node, depth, indexOrName, collapsed, collapseObjectsAfterLength, customOptions));
    }, [collapsed, collapseObjectsAfterLength]);
    // Edit property
    const editHandle = useCallback((indexOrName, newValue, oldValue) => {
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
    const [deleting, setDeleting] = useState(false);
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
    const [adding, setAdding] = useState(false);
    const inputRef = useRef(null);
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
    const Icons = (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [!fold && !isEditing && (jsxRuntimeExports.jsxs("span", Object.assign({ onClick: () => setFold(true) }, { children: [ifDisplay(displaySize, depth, fold) && jsxRuntimeExports.jsxs("span", Object.assign({ className: 'jv-size' }, { children: [objectSize(node), " Items"] })), jsxRuntimeExports.jsx(SvgAngleDown, { className: 'jv-chevron' })] }))), adding && isPlainObject && jsxRuntimeExports.jsx("input", { className: 'json-view--input', placeholder: 'property', ref: inputRef, onKeyDown: handleAddKeyDown }), isEditing && jsxRuntimeExports.jsx(SvgDone, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: adding ? add : deleteSelf }), isEditing && jsxRuntimeExports.jsx(SvgCancel, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: cancel }), !fold && !isEditing && enableClipboard && customCopy(customOptions) && jsxRuntimeExports.jsx(CopyButton, { node: node }), !fold && !isEditing && editableAdd(editable) && customAdd(customOptions) && (jsxRuntimeExports.jsx(SvgAddSquare, { className: 'json-view--edit', onClick: () => {
                    if (isPlainObject) {
                        setAdding(true);
                        setTimeout(() => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
                    }
                    else {
                        add();
                    }
                } })), !fold && !isEditing && editableDelete(editable) && customDelete(customOptions) && _deleteSelf && (jsxRuntimeExports.jsx(SvgTrash, { className: 'json-view--edit', onClick: () => setDeleting(true) }))] }));
    if (Array.isArray(node)) {
        return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("span", { children: '[' }), Icons, !fold ? (jsxRuntimeExports.jsx("div", Object.assign({ className: 'jv-indent' }, { children: node.map((n, i) => (jsxRuntimeExports.jsx(NameValue, { indexOrName: i, value: n, depth: depth, parent: node, deleteHandle: deleteHandle, editHandle: editHandle }, String(indexOrName) + String(i)))) }))) : (jsxRuntimeExports.jsx("button", Object.assign({ onClick: () => setFold(false), className: 'jv-button' }, { children: "..." }))), jsxRuntimeExports.jsx("span", { children: ']' }), fold && ifDisplay(displaySize, depth, fold) && (jsxRuntimeExports.jsxs("span", Object.assign({ onClick: () => setFold(false), className: 'jv-size' }, { children: [objectSize(node), " Items"] })))] }));
    }
    else if (isPlainObject) {
        return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("span", { children: '{' }), Icons, !fold ? (jsxRuntimeExports.jsx("div", Object.assign({ className: 'jv-indent' }, { children: Object.entries(node).map(([name, value]) => (jsxRuntimeExports.jsx(NameValue, { indexOrName: name, value: value, depth: depth, parent: node, deleteHandle: deleteHandle, editHandle: editHandle }, String(indexOrName) + String(name)))) }))) : (jsxRuntimeExports.jsx("button", Object.assign({ onClick: () => setFold(false), className: 'jv-button' }, { children: "..." }))), jsxRuntimeExports.jsx("span", { children: '}' }), fold && ifDisplay(displaySize, depth, fold) && (jsxRuntimeExports.jsxs("span", Object.assign({ onClick: () => setFold(false), className: 'jv-size' }, { children: [objectSize(node), " Items"] })))] }));
    }
    return null;
}

const LongString = React__default.forwardRef(({ str, className, ctrlClick }, ref) => {
    let { collapseStringMode, collapseStringsAfterLength } = useContext(JsonViewContext);
    const [truncated, setTruncated] = useState(true);
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
        return (jsxRuntimeExports.jsxs("span", Object.assign({ className: className, onClick: ctrlClick }, { children: ["\"", str, "\""] })));
    if (collapseStringMode === 'address')
        return str.length <= 10 ? (jsxRuntimeExports.jsxs("span", Object.assign({ className: className, onClick: ctrlClick }, { children: ["\"", str, "\""] }))) : (jsxRuntimeExports.jsxs("span", Object.assign({ onClick: clickToTruncateOrEdit, className: className + ' cursor-pointer' }, { children: ["\"", truncated ? str_show.slice(0, 6) + '...' + str_show.slice(-4) : str, "\""] })));
    if (collapseStringMode === 'directly') {
        return (jsxRuntimeExports.jsxs("span", Object.assign({ onClick: clickToTruncateOrEdit, className: className + ' cursor-pointer' }, { children: ["\"", truncated ? str_show.slice(0, collapseStringsAfterLength) + '...' : str, "\""] })));
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
        return (jsxRuntimeExports.jsxs("span", Object.assign({ onClick: clickToTruncateOrEdit, className: className + ' cursor-pointer' }, { children: ["\"", truncated ? str_collapsed + '...' : str, "\""] })));
    }
    return jsxRuntimeExports.jsxs("span", Object.assign({ className: className }, { children: ["\"", str, "\""] }));
});

var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgEdit = function SvgEdit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M17.25 3H6.75A3.754 3.754 0 0 0 3 6.75v10.5A3.754 3.754 0 0 0 6.75 21h10.5A3.754 3.754 0 0 0 21 17.25V6.75A3.754 3.754 0 0 0 17.25 3Zm2.25 14.25c0 1.24-1.01 2.25-2.25 2.25H6.75c-1.24 0-2.25-1.01-2.25-2.25V6.75c0-1.24 1.01-2.25 2.25-2.25h10.5c1.24 0 2.25 1.01 2.25 2.25v10.5Zm-6.09-9.466-5.031 5.03a2.981 2.981 0 0 0-.879 2.121v1.19c0 .415.336.75.75.75h1.19c.8 0 1.554-.312 2.12-.879l5.03-5.03a2.252 2.252 0 0 0 0-3.182c-.85-.85-2.331-.85-3.18 0Zm-2.91 7.151c-.28.28-.666.44-1.06.44H9v-.44c0-.4.156-.777.44-1.06l3.187-3.188 1.06 1.061-3.187 3.188Zm5.03-5.03-.782.783-1.06-1.061.782-.782a.766.766 0 0 1 1.06 0 .75.75 0 0 1 0 1.06Z"
  })));
};

function JsonNode({ node, depth, deleteHandle: _deleteHandle, indexOrName, parent, editHandle }) {
    const { collapseStringsAfterLength, enableClipboard, editable, src, onDelete, onChange, customizeNode } = useContext(JsonViewContext);
    let customReturn;
    if (typeof customizeNode === 'function')
        customReturn = safeCall(customizeNode, [{ node, depth, indexOrName }]);
    if (customReturn) {
        if (isValidElement(customReturn))
            return customReturn;
        else if (isReactComponent(customReturn)) {
            const CustomComponent = customReturn;
            return jsxRuntimeExports.jsx(CustomComponent, { node: node, depth: depth, indexOrName: indexOrName });
        }
    }
    if (Array.isArray(node) || isObject(node)) {
        return (jsxRuntimeExports.jsx(ObjectNode, { node: node, depth: depth, indexOrName: indexOrName, deleteHandle: _deleteHandle, customOptions: typeof customReturn === 'object' ? customReturn : undefined }));
    }
    else {
        const type = typeof node;
        const [editing, setEditing] = useState(false);
        const [deleting, setDeleting] = useState(false);
        const valueRef = useRef(null);
        const edit = () => {
            setEditing(true);
            setTimeout(() => {
                var _a, _b;
                (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.selectAllChildren(valueRef.current);
                (_b = valueRef.current) === null || _b === void 0 ? void 0 : _b.focus();
            });
        };
        const done = useCallback(() => {
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
        const handleKeyDown = useCallback((event) => {
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
        const Icons = (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [isEditing && (jsxRuntimeExports.jsx(SvgDone, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: deleting ? deleteHandle : done })), isEditing && jsxRuntimeExports.jsx(SvgCancel, { className: 'json-view--edit', style: { display: 'inline-block' }, onClick: cancel }), !isEditing && enableClipboard && customCopy(customReturn) && (jsxRuntimeExports.jsx(CopyButton, { node: node })), !isEditing &&
                    editableEdit(editable) &&
                    customEdit(customReturn) &&
                    editHandle && jsxRuntimeExports.jsx(SvgEdit, { className: 'json-view--edit', onClick: edit }), !isEditing &&
                    editableDelete(editable) &&
                    customDelete(customReturn) &&
                    _deleteHandle && jsxRuntimeExports.jsx(SvgTrash, { className: 'json-view--edit', onClick: () => setDeleting(true) })] }));
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
        const EditingElement = useMemo(() => (jsxRuntimeExports.jsx("span", { contentEditable: true, className: className, dangerouslySetInnerHTML: { __html: type === 'string' ? `"${displayValue}"` : displayValue }, ref: valueRef, onKeyDown: handleKeyDown })), [displayValue, type, handleKeyDown]);
        if (type === 'string')
            return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [editing ? (EditingElement) : node.length > collapseStringsAfterLength ? (jsxRuntimeExports.jsx(LongString, { str: node, ref: valueRef, className: className, ctrlClick: ctrlClick })) : (jsxRuntimeExports.jsxs("span", Object.assign({ className: className, onClick: ctrlClick }, { children: ["\"", displayValue, "\""] }))), Icons] }));
        else {
            return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [editing ? (EditingElement) : (jsxRuntimeExports.jsx("span", Object.assign({ className: className, onClick: ctrlClick }, { children: displayValue }))), Icons] }));
        }
    }
}

const JsonViewContext = createContext({
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
    const [_, update] = useState(0);
    const forceUpdate = useCallback(() => update(state => ++state), []);
    return (jsxRuntimeExports.jsx(JsonViewContext.Provider, Object.assign({ value: {
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
        } }, { children: jsxRuntimeExports.jsx("code", Object.assign({ className: 'json-view' + (dark ? ' dark' : '') + (theme && theme !== 'default' ? ' json-view_' + theme : '') }, { children: jsxRuntimeExports.jsx(JsonNode, { node: src, depth: 1 }) })) })));
}

var UseFormInspector = function UseFormInspector(_ref) {
  var stencil = _ref.stencil;
  var _stencil$config$react = stencil.config.react.useState(null),
    _stencil$config$react2 = _slicedToArray(_stencil$config$react, 2),
    form = _stencil$config$react2[0],
    setForm = _stencil$config$react2[1];
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("h3", {
      children: "Use Form Inspector"
    }), /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
      onChange: function onChange(ev) {
        return setForm(ev.target.value);
      },
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("option", {
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
          return /*#__PURE__*/jsxRuntimeExports.jsxs("option", {
            value: "".concat(name, ":").concat(method),
            children: [name, " - ", method]
          }, "".concat(name, "-").concat(method));
        });
      })]
    }), form && /*#__PURE__*/jsxRuntimeExports.jsx(FormPreview, {
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [isDetail && /*#__PURE__*/jsxRuntimeExports.jsx("input", {
      placeholder: "resourceId",
      onChange: function onChange(ev) {
        return setResourceId(ev.target.value);
      }
    }), /*#__PURE__*/jsxRuntimeExports.jsx(Form.Form, {
      resourceId: resourceId,
      children: /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
          children: Object.values(Form.Fields).map(function (Field, i) {
            return /*#__PURE__*/jsxRuntimeExports.jsx(Field, {}, i);
          })
        }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
          children: /*#__PURE__*/jsxRuntimeExports.jsx(FormData$1, {
            stencil: stencil
          })
        })]
      })
    })]
  });
};
var FormData$1 = function FormData(_ref13) {
  _ref13.stencil;
  var methods = useFormContext();
  var data = methods.watch();
  return /*#__PURE__*/jsxRuntimeExports.jsx(JsonView, {
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
  return /*#__PURE__*/jsxRuntimeExports.jsx("div", {
    children: /*#__PURE__*/jsxRuntimeExports.jsx(JsonView, {
      src: response,
      collapseObjectsAfterLength: 2
    })
  });
};
var UseQueryInspector = function UseQueryInspector(_ref2) {
  var stencil = _ref2.stencil;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("h3", {
      children: "useQuery Inspector"
    }), stencil && /*#__PURE__*/jsxRuntimeExports.jsx("div", {
      children: /*#__PURE__*/jsxRuntimeExports.jsxs("select", {
        onChange: function onChange(ev) {
          return setQuery(ev.target.value);
        },
        children: [/*#__PURE__*/jsxRuntimeExports.jsx("option", {
          value: ""
        }), Object.keys(stencil.queries).map(function (query) {
          return /*#__PURE__*/jsxRuntimeExports.jsx("option", {
            value: query,
            children: query
          }, query);
        })]
      })
    }), query && /*#__PURE__*/jsxRuntimeExports.jsx(QueryInspector, {
      useQuery: stencil.queries[query]
    })]
  });
};

var useStencil = function useStencil(doc, config) {
  var _doc$info, _config$server;
  return useMemo(function () {
    if (!doc || !config) return;
    return buildStencil(doc, config);
  }, [doc === null || doc === void 0 || (_doc$info = doc.info) === null || _doc$info === void 0 ? void 0 : _doc$info.title, (_config$server = config.server) === null || _config$server === void 0 ? void 0 : _config$server.url]);
};

var useStateWithLocalStorage = function useStateWithLocalStorage(name, initialValue) {
  var _JSON$parse;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    initialized = _useState2[0],
    setInitialized = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  useEffect(function () {
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
  var openapiDoc = useQuery(['stencil', 'openapiDoc', activeOpenapiUrl], function () {
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
  return /*#__PURE__*/jsxRuntimeExports.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx("h1", {
      children: "Inspector"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("hr", {}), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), /*#__PURE__*/jsxRuntimeExports.jsx(Config, {
      config: config,
      setConfig: setConfig,
      stencil: stencil
    }), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), /*#__PURE__*/jsxRuntimeExports.jsx("hr", {}), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), stencil && ((_stencil$config$serve = stencil.config.server) === null || _stencil$config$serve === void 0 ? void 0 : _stencil$config$serve.url) && /*#__PURE__*/jsxRuntimeExports.jsx(UseFormInspector, {
      stencil: stencil
    }), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), /*#__PURE__*/jsxRuntimeExports.jsx("hr", {}), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), stencil && ((_stencil$config$serve2 = stencil.config.server) === null || _stencil$config$serve2 === void 0 ? void 0 : _stencil$config$serve2.url) && /*#__PURE__*/jsxRuntimeExports.jsx(UseQueryInspector, {
      stencil: stencil
    })]
  });
};

var temp = function temp() {};

export { Inspector, buildStencil, temp };
//# sourceMappingURL=index.js.map
