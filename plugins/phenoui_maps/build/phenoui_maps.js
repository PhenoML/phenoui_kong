var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// ../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports2, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// ../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/range.js
var require_range = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/range.js"(exports2, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// ../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports2, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// ../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports2, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// ../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/type.js
var require_type = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/type.js"(exports2, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// ../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports2, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// ../../../../.cache/deno/deno_esbuild/has-symbols@1.0.3/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "../../../../.cache/deno/deno_esbuild/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports2, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/has-symbols@1.0.3/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "../../../../.cache/deno/deno_esbuild/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports2, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/has-proto@1.0.3/node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "../../../../.cache/deno/deno_esbuild/has-proto@1.0.3/node_modules/has-proto/index.js"(exports2, module2) {
    "use strict";
    var test = {
      __proto__: null,
      foo: {}
    };
    var $Object = Object;
    module2.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/function-bind@1.1.2/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "../../../../.cache/deno/deno_esbuild/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/function-bind@1.1.2/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "../../../../.cache/deno/deno_esbuild/function-bind@1.1.2/node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// ../../../../.cache/deno/deno_esbuild/hasown@2.0.2/node_modules/hasown/index.js
var require_hasown = __commonJS({
  "../../../../.cache/deno/deno_esbuild/hasown@2.0.2/node_modules/hasown/index.js"(exports2, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// ../../../../.cache/deno/deno_esbuild/get-intrinsic@1.2.4/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "../../../../.cache/deno/deno_esbuild/get-intrinsic@1.2.4/node_modules/get-intrinsic/index.js"(exports2, module2) {
    "use strict";
    var undefined2;
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/es-define-property@1.0.0/node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "../../../../.cache/deno/deno_esbuild/es-define-property@1.0.0/node_modules/es-define-property/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// ../../../../.cache/deno/deno_esbuild/gopd@1.0.1/node_modules/gopd/index.js
var require_gopd = __commonJS({
  "../../../../.cache/deno/deno_esbuild/gopd@1.0.1/node_modules/gopd/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// ../../../../.cache/deno/deno_esbuild/define-data-property@1.1.4/node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "../../../../.cache/deno/deno_esbuild/define-data-property@1.1.4/node_modules/define-data-property/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module2.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "../../../../.cache/deno/deno_esbuild/has-property-descriptors@1.0.2/node_modules/has-property-descriptors/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module2.exports = hasPropertyDescriptors;
  }
});

// ../../../../.cache/deno/deno_esbuild/set-function-length@1.2.2/node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "../../../../.cache/deno/deno_esbuild/set-function-length@1.2.2/node_modules/set-function-length/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module2.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/call-bind@1.0.7/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "../../../../.cache/deno/deno_esbuild/call-bind@1.0.7/node_modules/call-bind/index.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = require_type();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $defineProperty = require_es_define_property();
    var $max = GetIntrinsic("%Math.max%");
    module2.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// ../../../../.cache/deno/deno_esbuild/call-bind@1.0.7/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "../../../../.cache/deno/deno_esbuild/call-bind@1.0.7/node_modules/call-bind/callBound.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/object-inspect@1.13.2/node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "../../../../.cache/deno/deno_esbuild/object-inspect@1.13.2/node_modules/object-inspect/util.inspect.js"(exports2, module2) {
    module2.exports = require("util").inspect;
  }
});

// ../../../../.cache/deno/deno_esbuild/object-inspect@1.13.2/node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "../../../../.cache/deno/deno_esbuild/object-inspect@1.13.2/node_modules/object-inspect/index.js"(exports2, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// ../../../../.cache/deno/deno_esbuild/side-channel@1.0.6/node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "../../../../.cache/deno/deno_esbuild/side-channel@1.0.6/node_modules/side-channel/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('.').ListNode<typeof value>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/formats.js"(exports2, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/utils.js"(exports2, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/stringify.js"(exports2, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/parse.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// ../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "../../../../.cache/deno/deno_esbuild/qs@6.12.3/node_modules/qs/lib/index.js"(exports2, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// src/mod.ts
var mod_exports = {};
__export(mod_exports, {
  Name: () => Name,
  Plugin: () => Plugin,
  Priority: () => Priority,
  Schema: () => Schema,
  Version: () => Version
});
module.exports = __toCommonJS(mod_exports);

// https://deno.land/x/jmespath@v0.2.2/utils/index.ts
var isObject = (obj) => {
  return obj !== null && Object.prototype.toString.call(obj) === "[object Object]";
};
var strictDeepEqual = (first, second) => {
  if (first === second) {
    return true;
  }
  if (typeof first !== typeof second) {
    return false;
  }
  if (Array.isArray(first) && Array.isArray(second)) {
    if (first.length !== second.length) {
      return false;
    }
    for (let i = 0; i < first.length; i += 1) {
      if (!strictDeepEqual(first[i], second[i])) {
        return false;
      }
    }
    return true;
  }
  if (isObject(first) && isObject(second)) {
    const firstEntries = Object.entries(first);
    const secondKeys = new Set(Object.keys(second));
    if (firstEntries.length !== secondKeys.size) {
      return false;
    }
    for (const [key, value] of firstEntries) {
      if (!strictDeepEqual(value, second[key])) {
        return false;
      }
      secondKeys.delete(key);
    }
    return secondKeys.size === 0;
  }
  return false;
};
var isFalse = (obj) => {
  if (obj === "" || obj === false || obj === null || obj === void 0) {
    return true;
  }
  if (Array.isArray(obj) && obj.length === 0) {
    return true;
  }
  if (isObject(obj)) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  return false;
};
var isAlpha = (ch) => {
  return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch === "_";
};
var isNum = (ch) => {
  return ch >= "0" && ch <= "9" || ch === "-";
};
var isAlphaNum = (ch) => {
  return ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9" || ch === "_";
};

// https://deno.land/x/jmespath@v0.2.2/Lexer.ts
var basicTokens = {
  "(": "Lparen" /* TOK_LPAREN */,
  ")": "Rparen" /* TOK_RPAREN */,
  "*": "Star" /* TOK_STAR */,
  ",": "Comma" /* TOK_COMMA */,
  ".": "Dot" /* TOK_DOT */,
  ":": "Colon" /* TOK_COLON */,
  "@": "Current" /* TOK_CURRENT */,
  ["$"]: "Root" /* TOK_ROOT */,
  "]": "Rbracket" /* TOK_RBRACKET */,
  "{": "Lbrace" /* TOK_LBRACE */,
  "}": "Rbrace" /* TOK_RBRACE */
};
var operatorStartToken = {
  "!": true,
  "<": true,
  "=": true,
  ">": true
};
var skipChars = {
  "	": true,
  "\n": true,
  "\r": true,
  " ": true
};
var StreamLexer = class {
  _current = 0;
  tokenize(stream) {
    const tokens = [];
    this._current = 0;
    let start;
    let identifier;
    let token;
    while (this._current < stream.length) {
      if (isAlpha(stream[this._current])) {
        start = this._current;
        identifier = this.consumeUnquotedIdentifier(stream);
        tokens.push({
          start,
          type: "UnquotedIdentifier" /* TOK_UNQUOTEDIDENTIFIER */,
          value: identifier
        });
      } else if (basicTokens[stream[this._current]] !== void 0) {
        tokens.push({
          start: this._current,
          type: basicTokens[stream[this._current]],
          value: stream[this._current]
        });
        this._current += 1;
      } else if (isNum(stream[this._current])) {
        token = this.consumeNumber(stream);
        tokens.push(token);
      } else if (stream[this._current] === "[") {
        token = this.consumeLBracket(stream);
        tokens.push(token);
      } else if (stream[this._current] === '"') {
        start = this._current;
        identifier = this.consumeQuotedIdentifier(stream);
        tokens.push({
          start,
          type: "QuotedIdentifier" /* TOK_QUOTEDIDENTIFIER */,
          value: identifier
        });
      } else if (stream[this._current] === `'`) {
        start = this._current;
        identifier = this.consumeRawStringLiteral(stream);
        tokens.push({
          start,
          type: "Literal" /* TOK_LITERAL */,
          value: identifier
        });
      } else if (stream[this._current] === "`") {
        start = this._current;
        const literal = this.consumeLiteral(stream);
        tokens.push({
          start,
          type: "Literal" /* TOK_LITERAL */,
          value: literal
        });
      } else if (operatorStartToken[stream[this._current]] !== void 0) {
        token = this.consumeOperator(stream);
        token && tokens.push(token);
      } else if (skipChars[stream[this._current]] !== void 0) {
        this._current += 1;
      } else if (stream[this._current] === "&") {
        start = this._current;
        this._current += 1;
        if (stream[this._current] === "&") {
          this._current += 1;
          tokens.push({ start, type: "And" /* TOK_AND */, value: "&&" });
        } else {
          tokens.push({ start, type: "Expref" /* TOK_EXPREF */, value: "&" });
        }
      } else if (stream[this._current] === "|") {
        start = this._current;
        this._current += 1;
        if (stream[this._current] === "|") {
          this._current += 1;
          tokens.push({ start, type: "Or" /* TOK_OR */, value: "||" });
        } else {
          tokens.push({ start, type: "Pipe" /* TOK_PIPE */, value: "|" });
        }
      } else {
        const error = new Error(`Unknown character: ${stream[this._current]}`);
        error.name = "LexerError";
        throw error;
      }
    }
    return tokens;
  }
  consumeUnquotedIdentifier(stream) {
    const start = this._current;
    this._current += 1;
    while (this._current < stream.length && isAlphaNum(stream[this._current])) {
      this._current += 1;
    }
    return stream.slice(start, this._current);
  }
  consumeQuotedIdentifier(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    while (stream[this._current] !== '"' && this._current < maxLength) {
      let current = this._current;
      if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === '"')) {
        current += 2;
      } else {
        current += 1;
      }
      this._current = current;
    }
    this._current += 1;
    return JSON.parse(stream.slice(start, this._current));
  }
  consumeRawStringLiteral(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    while (stream[this._current] !== `'` && this._current < maxLength) {
      let current = this._current;
      if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === `'`)) {
        current += 2;
      } else {
        current += 1;
      }
      this._current = current;
    }
    this._current += 1;
    const literal = stream.slice(start + 1, this._current - 1);
    return literal.replace(`\\'`, `'`);
  }
  consumeNumber(stream) {
    const start = this._current;
    this._current += 1;
    const maxLength = stream.length;
    while (isNum(stream[this._current]) && this._current < maxLength) {
      this._current += 1;
    }
    const value = parseInt(stream.slice(start, this._current), 10);
    return { start, value, type: "Number" /* TOK_NUMBER */ };
  }
  consumeLBracket(stream) {
    const start = this._current;
    this._current += 1;
    if (stream[this._current] === "?") {
      this._current += 1;
      return { start, type: "Filter" /* TOK_FILTER */, value: "[?" };
    }
    if (stream[this._current] === "]") {
      this._current += 1;
      return { start, type: "Flatten" /* TOK_FLATTEN */, value: "[]" };
    }
    return { start, type: "Lbracket" /* TOK_LBRACKET */, value: "[" };
  }
  consumeOperator(stream) {
    const start = this._current;
    const startingChar = stream[start];
    this._current += 1;
    if (startingChar === "!") {
      if (stream[this._current] === "=") {
        this._current += 1;
        return { start, type: "NE" /* TOK_NE */, value: "!=" };
      }
      return { start, type: "Not" /* TOK_NOT */, value: "!" };
    }
    if (startingChar === "<") {
      if (stream[this._current] === "=") {
        this._current += 1;
        return { start, type: "LTE" /* TOK_LTE */, value: "<=" };
      }
      return { start, type: "LT" /* TOK_LT */, value: "<" };
    }
    if (startingChar === ">") {
      if (stream[this._current] === "=") {
        this._current += 1;
        return { start, type: "GTE" /* TOK_GTE */, value: ">=" };
      }
      return { start, type: "GT" /* TOK_GT */, value: ">" };
    }
    if (startingChar === "=" && stream[this._current] === "=") {
      this._current += 1;
      return { start, type: "EQ" /* TOK_EQ */, value: "==" };
    }
  }
  consumeLiteral(stream) {
    this._current += 1;
    const start = this._current;
    const maxLength = stream.length;
    while (stream[this._current] !== "`" && this._current < maxLength) {
      let current = this._current;
      if (stream[current] === "\\" && (stream[current + 1] === "\\" || stream[current + 1] === "`")) {
        current += 2;
      } else {
        current += 1;
      }
      this._current = current;
    }
    let literalString = stream.slice(start, this._current).trimLeft();
    literalString = literalString.replace("\\`", "`");
    const literal = this.looksLikeJSON(literalString) ? JSON.parse(literalString) : JSON.parse(`"${literalString}"`);
    this._current += 1;
    return literal;
  }
  looksLikeJSON(literalString) {
    const startingChars = '[{"';
    const jsonLiterals = ["true", "false", "null"];
    const numberLooking = "-0123456789";
    if (literalString === "") {
      return false;
    }
    if (startingChars.includes(literalString[0])) {
      return true;
    }
    if (jsonLiterals.includes(literalString)) {
      return true;
    }
    if (numberLooking.includes(literalString[0])) {
      try {
        JSON.parse(literalString);
        return true;
      } catch (ex) {
        return false;
      }
    }
    return false;
  }
};
var Lexer = new StreamLexer();
var Lexer_default = Lexer;

// https://deno.land/x/jmespath@v0.2.2/Parser.ts
var bindingPower = {
  ["EOF" /* TOK_EOF */]: 0,
  ["UnquotedIdentifier" /* TOK_UNQUOTEDIDENTIFIER */]: 0,
  ["QuotedIdentifier" /* TOK_QUOTEDIDENTIFIER */]: 0,
  ["Rbracket" /* TOK_RBRACKET */]: 0,
  ["Rparen" /* TOK_RPAREN */]: 0,
  ["Comma" /* TOK_COMMA */]: 0,
  ["Rbrace" /* TOK_RBRACE */]: 0,
  ["Number" /* TOK_NUMBER */]: 0,
  ["Current" /* TOK_CURRENT */]: 0,
  ["Expref" /* TOK_EXPREF */]: 0,
  ["Root" /* TOK_ROOT */]: 0,
  ["Pipe" /* TOK_PIPE */]: 1,
  ["Or" /* TOK_OR */]: 2,
  ["And" /* TOK_AND */]: 3,
  ["EQ" /* TOK_EQ */]: 5,
  ["GT" /* TOK_GT */]: 5,
  ["LT" /* TOK_LT */]: 5,
  ["GTE" /* TOK_GTE */]: 5,
  ["LTE" /* TOK_LTE */]: 5,
  ["NE" /* TOK_NE */]: 5,
  ["Flatten" /* TOK_FLATTEN */]: 9,
  ["Star" /* TOK_STAR */]: 20,
  ["Filter" /* TOK_FILTER */]: 21,
  ["Dot" /* TOK_DOT */]: 40,
  ["Not" /* TOK_NOT */]: 45,
  ["Lbrace" /* TOK_LBRACE */]: 50,
  ["Lbracket" /* TOK_LBRACKET */]: 55,
  ["Lparen" /* TOK_LPAREN */]: 60
};
var TokenParser = class {
  index = 0;
  tokens = [];
  parse(expression) {
    this.loadTokens(expression);
    this.index = 0;
    const ast = this.expression(0);
    if (this.lookahead(0) !== "EOF" /* TOK_EOF */) {
      const token = this.lookaheadToken(0);
      this.errorToken(token, `Unexpected token type: ${token.type}, value: ${token.value}`);
    }
    return ast;
  }
  loadTokens(expression) {
    this.tokens = [...Lexer_default.tokenize(expression), { type: "EOF" /* TOK_EOF */, value: "", start: expression.length }];
  }
  expression(rbp) {
    const leftToken = this.lookaheadToken(0);
    this.advance();
    let left = this.nud(leftToken);
    let currentTokenType = this.lookahead(0);
    while (rbp < bindingPower[currentTokenType]) {
      this.advance();
      left = this.led(currentTokenType, left);
      currentTokenType = this.lookahead(0);
    }
    return left;
  }
  lookahead(offset) {
    return this.tokens[this.index + offset].type;
  }
  lookaheadToken(offset) {
    return this.tokens[this.index + offset];
  }
  advance() {
    this.index += 1;
  }
  nud(token) {
    let left;
    let right;
    let expression;
    switch (token.type) {
      case "Literal" /* TOK_LITERAL */:
        return { type: "Literal", value: token.value };
      case "UnquotedIdentifier" /* TOK_UNQUOTEDIDENTIFIER */:
        return { type: "Field", name: token.value };
      case "QuotedIdentifier" /* TOK_QUOTEDIDENTIFIER */:
        const node = { type: "Field", name: token.value };
        if (this.lookahead(0) === "Lparen" /* TOK_LPAREN */) {
          throw new Error("Quoted identifier not allowed for function names.");
        } else {
          return node;
        }
      case "Not" /* TOK_NOT */:
        right = this.expression(bindingPower.Not);
        return { type: "NotExpression", children: [right] };
      case "Star" /* TOK_STAR */:
        left = { type: "Identity" };
        right = this.lookahead(0) === "Rbracket" /* TOK_RBRACKET */ && { type: "Identity" } || this.parseProjectionRHS(bindingPower.Star);
        return { type: "ValueProjection", children: [left, right] };
      case "Filter" /* TOK_FILTER */:
        return this.led(token.type, { type: "Identity" });
      case "Lbrace" /* TOK_LBRACE */:
        return this.parseMultiselectHash();
      case "Flatten" /* TOK_FLATTEN */:
        left = { type: "Flatten" /* TOK_FLATTEN */, children: [{ type: "Identity" }] };
        right = this.parseProjectionRHS(bindingPower.Flatten);
        return { type: "Projection", children: [left, right] };
      case "Lbracket" /* TOK_LBRACKET */:
        if (this.lookahead(0) === "Number" /* TOK_NUMBER */ || this.lookahead(0) === "Colon" /* TOK_COLON */) {
          right = this.parseIndexExpression();
          return this.projectIfSlice({ type: "Identity" }, right);
        }
        if (this.lookahead(0) === "Star" /* TOK_STAR */ && this.lookahead(1) === "Rbracket" /* TOK_RBRACKET */) {
          this.advance();
          this.advance();
          right = this.parseProjectionRHS(bindingPower.Star);
          return {
            children: [{ type: "Identity" }, right],
            type: "Projection"
          };
        }
        return this.parseMultiselectList();
      case "Current" /* TOK_CURRENT */:
        return { type: "Current" /* TOK_CURRENT */ };
      case "Root" /* TOK_ROOT */:
        return { type: "Root" /* TOK_ROOT */ };
      case "Expref" /* TOK_EXPREF */:
        expression = this.expression(bindingPower.Expref);
        return { type: "ExpressionReference", children: [expression] };
      case "Lparen" /* TOK_LPAREN */:
        const args = [];
        while (this.lookahead(0) !== "Rparen" /* TOK_RPAREN */) {
          if (this.lookahead(0) === "Current" /* TOK_CURRENT */) {
            expression = { type: "Current" /* TOK_CURRENT */ };
            this.advance();
          } else {
            expression = this.expression(0);
          }
          args.push(expression);
        }
        this.match("Rparen" /* TOK_RPAREN */);
        return args[0];
      default:
        this.errorToken(token);
    }
  }
  led(tokenName, left) {
    let right;
    switch (tokenName) {
      case "Dot" /* TOK_DOT */:
        const rbp = bindingPower.Dot;
        if (this.lookahead(0) !== "Star" /* TOK_STAR */) {
          right = this.parseDotRHS(rbp);
          return { type: "Subexpression", children: [left, right] };
        }
        this.advance();
        right = this.parseProjectionRHS(rbp);
        return { type: "ValueProjection", children: [left, right] };
      case "Pipe" /* TOK_PIPE */:
        right = this.expression(bindingPower.Pipe);
        return { type: "Pipe" /* TOK_PIPE */, children: [left, right] };
      case "Or" /* TOK_OR */:
        right = this.expression(bindingPower.Or);
        return { type: "OrExpression", children: [left, right] };
      case "And" /* TOK_AND */:
        right = this.expression(bindingPower.And);
        return { type: "AndExpression", children: [left, right] };
      case "Lparen" /* TOK_LPAREN */:
        const name = left.name;
        const args = [];
        let expression;
        while (this.lookahead(0) !== "Rparen" /* TOK_RPAREN */) {
          if (this.lookahead(0) === "Current" /* TOK_CURRENT */) {
            expression = { type: "Current" /* TOK_CURRENT */ };
            this.advance();
          } else {
            expression = this.expression(0);
          }
          if (this.lookahead(0) === "Comma" /* TOK_COMMA */) {
            this.match("Comma" /* TOK_COMMA */);
          }
          args.push(expression);
        }
        this.match("Rparen" /* TOK_RPAREN */);
        return { name, type: "Function", children: args };
      case "Filter" /* TOK_FILTER */:
        const condition = this.expression(0);
        this.match("Rbracket" /* TOK_RBRACKET */);
        right = this.lookahead(0) === "Flatten" /* TOK_FLATTEN */ && { type: "Identity" } || this.parseProjectionRHS(bindingPower.Filter);
        return { type: "FilterProjection", children: [left, right, condition] };
      case "Flatten" /* TOK_FLATTEN */:
        const leftNode = { type: "Flatten" /* TOK_FLATTEN */, children: [left] };
        const rightNode = this.parseProjectionRHS(bindingPower.Flatten);
        return { type: "Projection", children: [leftNode, rightNode] };
      case "EQ" /* TOK_EQ */:
      case "NE" /* TOK_NE */:
      case "GT" /* TOK_GT */:
      case "GTE" /* TOK_GTE */:
      case "LT" /* TOK_LT */:
      case "LTE" /* TOK_LTE */:
        return this.parseComparator(left, tokenName);
      case "Lbracket" /* TOK_LBRACKET */:
        const token = this.lookaheadToken(0);
        if (token.type === "Number" /* TOK_NUMBER */ || token.type === "Colon" /* TOK_COLON */) {
          right = this.parseIndexExpression();
          return this.projectIfSlice(left, right);
        }
        this.match("Star" /* TOK_STAR */);
        this.match("Rbracket" /* TOK_RBRACKET */);
        right = this.parseProjectionRHS(bindingPower.Star);
        return { type: "Projection", children: [left, right] };
      default:
        return this.errorToken(this.lookaheadToken(0));
    }
  }
  match(tokenType) {
    if (this.lookahead(0) === tokenType) {
      this.advance();
      return;
    } else {
      const token = this.lookaheadToken(0);
      this.errorToken(token, `Expected ${tokenType}, got: ${token.type}`);
    }
  }
  errorToken(token, message = "") {
    const error = new Error(message || `Invalid token (${token.type}): "${token.value}"`);
    error.name = "ParserError";
    throw error;
  }
  parseIndexExpression() {
    if (this.lookahead(0) === "Colon" /* TOK_COLON */ || this.lookahead(1) === "Colon" /* TOK_COLON */) {
      return this.parseSliceExpression();
    }
    const node = {
      type: "Index",
      value: this.lookaheadToken(0).value
    };
    this.advance();
    this.match("Rbracket" /* TOK_RBRACKET */);
    return node;
  }
  projectIfSlice(left, right) {
    const indexExpr = { type: "IndexExpression", children: [left, right] };
    if (right.type === "Slice") {
      return {
        children: [indexExpr, this.parseProjectionRHS(bindingPower.Star)],
        type: "Projection"
      };
    }
    return indexExpr;
  }
  parseSliceExpression() {
    const parts = [null, null, null];
    let index = 0;
    let currentTokenType = this.lookahead(0);
    while (currentTokenType !== "Rbracket" /* TOK_RBRACKET */ && index < 3) {
      if (currentTokenType === "Colon" /* TOK_COLON */) {
        index += 1;
        this.advance();
      } else if (currentTokenType === "Number" /* TOK_NUMBER */) {
        parts[index] = this.lookaheadToken(0).value;
        this.advance();
      } else {
        const token = this.lookaheadToken(0);
        this.errorToken(token, `Syntax error, unexpected token: ${token.value}(${token.type})`);
      }
      currentTokenType = this.lookahead(0);
    }
    this.match("Rbracket" /* TOK_RBRACKET */);
    return {
      children: parts,
      type: "Slice"
    };
  }
  parseComparator(left, comparator) {
    const right = this.expression(bindingPower[comparator]);
    return { type: "Comparator", name: comparator, children: [left, right] };
  }
  parseDotRHS(rbp) {
    const lookahead = this.lookahead(0);
    const exprTokens = ["UnquotedIdentifier" /* TOK_UNQUOTEDIDENTIFIER */, "QuotedIdentifier" /* TOK_QUOTEDIDENTIFIER */, "Star" /* TOK_STAR */];
    if (exprTokens.includes(lookahead)) {
      return this.expression(rbp);
    }
    if (lookahead === "Lbracket" /* TOK_LBRACKET */) {
      this.match("Lbracket" /* TOK_LBRACKET */);
      return this.parseMultiselectList();
    }
    if (lookahead === "Lbrace" /* TOK_LBRACE */) {
      this.match("Lbrace" /* TOK_LBRACE */);
      return this.parseMultiselectHash();
    }
    const token = this.lookaheadToken(0);
    this.errorToken(token, `Syntax error, unexpected token: ${token.value}(${token.type})`);
  }
  parseProjectionRHS(rbp) {
    if (bindingPower[this.lookahead(0)] < 10) {
      return { type: "Identity" };
    }
    if (this.lookahead(0) === "Lbracket" /* TOK_LBRACKET */) {
      return this.expression(rbp);
    }
    if (this.lookahead(0) === "Filter" /* TOK_FILTER */) {
      return this.expression(rbp);
    }
    if (this.lookahead(0) === "Dot" /* TOK_DOT */) {
      this.match("Dot" /* TOK_DOT */);
      return this.parseDotRHS(rbp);
    }
    const token = this.lookaheadToken(0);
    this.errorToken(token, `Syntax error, unexpected token: ${token.value}(${token.type})`);
  }
  parseMultiselectList() {
    const expressions = [];
    while (this.lookahead(0) !== "Rbracket" /* TOK_RBRACKET */) {
      const expression = this.expression(0);
      expressions.push(expression);
      if (this.lookahead(0) === "Comma" /* TOK_COMMA */) {
        this.match("Comma" /* TOK_COMMA */);
        if (this.lookahead(0) === "Rbracket" /* TOK_RBRACKET */) {
          throw new Error("Unexpected token Rbracket");
        }
      }
    }
    this.match("Rbracket" /* TOK_RBRACKET */);
    return { type: "MultiSelectList", children: expressions };
  }
  parseMultiselectHash() {
    const pairs = [];
    const identifierTypes = ["UnquotedIdentifier" /* TOK_UNQUOTEDIDENTIFIER */, "QuotedIdentifier" /* TOK_QUOTEDIDENTIFIER */];
    let keyToken;
    let keyName;
    let value;
    for (; ; ) {
      keyToken = this.lookaheadToken(0);
      if (!identifierTypes.includes(keyToken.type)) {
        throw new Error(`Expecting an identifier token, got: ${keyToken.type}`);
      }
      keyName = keyToken.value;
      this.advance();
      this.match("Colon" /* TOK_COLON */);
      value = this.expression(0);
      pairs.push({ value, type: "KeyValuePair", name: keyName });
      if (this.lookahead(0) === "Comma" /* TOK_COMMA */) {
        this.match("Comma" /* TOK_COMMA */);
      } else if (this.lookahead(0) === "Rbrace" /* TOK_RBRACE */) {
        this.match("Rbrace" /* TOK_RBRACE */);
        break;
      }
    }
    return { type: "MultiSelectHash", children: pairs };
  }
};
var Parser = new TokenParser();
var Parser_default = Parser;

// https://deno.land/x/jmespath@v0.2.2/Runtime.ts
var Runtime = class {
  _interpreter;
  TYPE_NAME_TABLE = {
    [0 /* TYPE_NUMBER */]: "number",
    [1 /* TYPE_ANY */]: "any",
    [2 /* TYPE_STRING */]: "string",
    [3 /* TYPE_ARRAY */]: "array",
    [4 /* TYPE_OBJECT */]: "object",
    [5 /* TYPE_BOOLEAN */]: "boolean",
    [6 /* TYPE_EXPREF */]: "expression",
    [7 /* TYPE_NULL */]: "null",
    [8 /* TYPE_ARRAY_NUMBER */]: "Array<number>",
    [9 /* TYPE_ARRAY_STRING */]: "Array<string>"
  };
  constructor(interpreter) {
    this._interpreter = interpreter;
  }
  registerFunction(name, customFunction, signature) {
    if (name in this.functionTable) {
      throw new Error(`Function already defined: ${name}()`);
    }
    this.functionTable[name] = {
      _func: customFunction.bind(this),
      _signature: signature
    };
  }
  callFunction(name, resolvedArgs) {
    const functionEntry = this.functionTable[name];
    if (functionEntry === void 0) {
      throw new Error(`Unknown function: ${name}()`);
    }
    this.validateArgs(name, resolvedArgs, functionEntry._signature);
    return functionEntry._func.call(this, resolvedArgs);
  }
  validateInputSignatures(name, signature) {
    for (let i = 0; i < signature.length; i += 1) {
      if ("variadic" in signature[i] && i !== signature.length - 1) {
        throw new Error(`ArgumentError: ${name}() 'variadic' argument ${i + 1} must occur last`);
      }
    }
  }
  validateArgs(name, args, signature) {
    var _a, _b;
    let pluralized;
    this.validateInputSignatures(name, signature);
    const numberOfRequiredArgs = signature.filter((argSignature) => !argSignature.optional).length;
    const lastArgIsVariadic = (_b = (_a = signature[signature.length - 1]) == null ? void 0 : _a.variadic) != null ? _b : false;
    const tooFewArgs = args.length < numberOfRequiredArgs;
    const tooManyArgs = args.length > signature.length;
    const tooFewModifier = tooFewArgs && (!lastArgIsVariadic && numberOfRequiredArgs > 1 || lastArgIsVariadic) ? "at least " : "";
    if (lastArgIsVariadic && tooFewArgs || !lastArgIsVariadic && (tooFewArgs || tooManyArgs)) {
      pluralized = signature.length > 1;
      throw new Error(
        `ArgumentError: ${name}() takes ${tooFewModifier}${numberOfRequiredArgs} argument${pluralized && "s" || ""} but received ${args.length}`
      );
    }
    let currentSpec;
    let actualType;
    let typeMatched;
    for (let i = 0; i < signature.length; i += 1) {
      typeMatched = false;
      currentSpec = signature[i].types;
      actualType = this.getTypeName(args[i]);
      let j;
      for (j = 0; j < currentSpec.length; j += 1) {
        if (actualType !== void 0 && this.typeMatches(actualType, currentSpec[j], args[i])) {
          typeMatched = true;
          break;
        }
      }
      if (!typeMatched && actualType !== void 0) {
        const expected = currentSpec.map((typeIdentifier) => {
          return this.TYPE_NAME_TABLE[typeIdentifier];
        }).join(" | ");
        throw new Error(
          `TypeError: ${name}() expected argument ${i + 1} to be type (${expected}) but received type ${this.TYPE_NAME_TABLE[actualType]} instead.`
        );
      }
    }
  }
  typeMatches(actual, expected, argValue) {
    if (expected === 1 /* TYPE_ANY */) {
      return true;
    }
    if (expected === 9 /* TYPE_ARRAY_STRING */ || expected === 8 /* TYPE_ARRAY_NUMBER */ || expected === 3 /* TYPE_ARRAY */) {
      if (expected === 3 /* TYPE_ARRAY */) {
        return actual === 3 /* TYPE_ARRAY */;
      }
      if (actual === 3 /* TYPE_ARRAY */) {
        let subtype;
        if (expected === 8 /* TYPE_ARRAY_NUMBER */) {
          subtype = 0 /* TYPE_NUMBER */;
        } else if (expected === 9 /* TYPE_ARRAY_STRING */) {
          subtype = 2 /* TYPE_STRING */;
        }
        for (let i = 0; i < argValue.length; i += 1) {
          const typeName = this.getTypeName(argValue[i]);
          if (typeName !== void 0 && subtype !== void 0 && !this.typeMatches(typeName, subtype, argValue[i])) {
            return false;
          }
        }
        return true;
      }
    } else {
      return actual === expected;
    }
    return false;
  }
  getTypeName(obj) {
    switch (Object.prototype.toString.call(obj)) {
      case "[object String]":
        return 2 /* TYPE_STRING */;
      case "[object Number]":
        return 0 /* TYPE_NUMBER */;
      case "[object Array]":
        return 3 /* TYPE_ARRAY */;
      case "[object Boolean]":
        return 5 /* TYPE_BOOLEAN */;
      case "[object Null]":
        return 7 /* TYPE_NULL */;
      case "[object Object]":
        if (obj.jmespathType === "Expref" /* TOK_EXPREF */) {
          return 6 /* TYPE_EXPREF */;
        }
        return 4 /* TYPE_OBJECT */;
      default:
        return;
    }
  }
  createKeyFunction(exprefNode, allowedTypes) {
    if (!this._interpreter) {
      return;
    }
    const interpreter = this._interpreter;
    const keyFunc = (x) => {
      const current = interpreter.visit(exprefNode, x);
      if (!allowedTypes.includes(this.getTypeName(current))) {
        const msg = `TypeError: expected one of (${allowedTypes.map((t) => this.TYPE_NAME_TABLE[t]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(current)]}`;
        throw new Error(msg);
      }
      return current;
    };
    return keyFunc;
  }
  functionAbs = ([inputValue]) => {
    return Math.abs(inputValue);
  };
  functionAvg = ([inputArray]) => {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i += 1) {
      sum += inputArray[i];
    }
    return sum / inputArray.length;
  };
  functionCeil = ([inputValue]) => {
    return Math.ceil(inputValue);
  };
  functionContains = (resolvedArgs) => {
    const [searchable, searchValue] = resolvedArgs;
    return searchable.includes(searchValue);
  };
  functionEndsWith = (resolvedArgs) => {
    const [searchStr, suffix] = resolvedArgs;
    return searchStr.includes(suffix, searchStr.length - suffix.length);
  };
  functionFloor = ([inputValue]) => {
    return Math.floor(inputValue);
  };
  functionJoin = (resolvedArgs) => {
    const [joinChar, listJoin] = resolvedArgs;
    return listJoin.join(joinChar);
  };
  functionKeys = ([inputObject]) => {
    return Object.keys(inputObject);
  };
  functionLength = ([inputValue]) => {
    if (!isObject(inputValue)) {
      return inputValue.length;
    }
    return Object.keys(inputValue).length;
  };
  functionMap = (resolvedArgs) => {
    if (!this._interpreter) {
      return [];
    }
    const mapped = [];
    const interpreter = this._interpreter;
    const exprefNode = resolvedArgs[0];
    const elements = resolvedArgs[1];
    for (let i = 0; i < elements.length; i += 1) {
      mapped.push(interpreter.visit(exprefNode, elements[i]));
    }
    return mapped;
  };
  functionMax = ([inputValue]) => {
    if (!inputValue.length) {
      return null;
    }
    const typeName = this.getTypeName(inputValue[0]);
    if (typeName === 0 /* TYPE_NUMBER */) {
      return Math.max(...inputValue);
    }
    const elements = inputValue;
    let maxElement = elements[0];
    for (let i = 1; i < elements.length; i += 1) {
      if (maxElement.localeCompare(elements[i]) < 0) {
        maxElement = elements[i];
      }
    }
    return maxElement;
  };
  functionMaxBy = (resolvedArgs) => {
    const exprefNode = resolvedArgs[1];
    const resolvedArray = resolvedArgs[0];
    const keyFunction = this.createKeyFunction(exprefNode, [0 /* TYPE_NUMBER */, 2 /* TYPE_STRING */]);
    let maxNumber = -Infinity;
    let maxRecord;
    let current;
    for (let i = 0; i < resolvedArray.length; i += 1) {
      current = keyFunction && keyFunction(resolvedArray[i]);
      if (current !== void 0 && current > maxNumber) {
        maxNumber = current;
        maxRecord = resolvedArray[i];
      }
    }
    return maxRecord;
  };
  functionMerge = (resolvedArgs) => {
    let merged = {};
    for (let i = 0; i < resolvedArgs.length; i += 1) {
      const current = resolvedArgs[i];
      merged = Object.assign(merged, current);
    }
    return merged;
  };
  functionMin = ([inputValue]) => {
    if (!inputValue.length) {
      return null;
    }
    const typeName = this.getTypeName(inputValue[0]);
    if (typeName === 0 /* TYPE_NUMBER */) {
      return Math.min(...inputValue);
    }
    const elements = inputValue;
    let minElement = elements[0];
    for (let i = 1; i < elements.length; i += 1) {
      if (elements[i].localeCompare(minElement) < 0) {
        minElement = elements[i];
      }
    }
    return minElement;
  };
  functionMinBy = (resolvedArgs) => {
    const exprefNode = resolvedArgs[1];
    const resolvedArray = resolvedArgs[0];
    const keyFunction = this.createKeyFunction(exprefNode, [0 /* TYPE_NUMBER */, 2 /* TYPE_STRING */]);
    let minNumber = Infinity;
    let minRecord;
    let current;
    for (let i = 0; i < resolvedArray.length; i += 1) {
      current = keyFunction && keyFunction(resolvedArray[i]);
      if (current !== void 0 && current < minNumber) {
        minNumber = current;
        minRecord = resolvedArray[i];
      }
    }
    return minRecord;
  };
  functionNotNull = (resolvedArgs) => {
    for (let i = 0; i < resolvedArgs.length; i += 1) {
      if (this.getTypeName(resolvedArgs[i]) !== 7 /* TYPE_NULL */) {
        return resolvedArgs[i];
      }
    }
    return null;
  };
  functionReverse = ([inputValue]) => {
    const typeName = this.getTypeName(inputValue);
    if (typeName === 2 /* TYPE_STRING */) {
      const originalStr = inputValue;
      let reversedStr = "";
      for (let i = originalStr.length - 1; i >= 0; i -= 1) {
        reversedStr += originalStr[i];
      }
      return reversedStr;
    }
    const reversedArray = inputValue.slice(0);
    reversedArray.reverse();
    return reversedArray;
  };
  functionSort = ([inputValue]) => {
    return [...inputValue].sort();
  };
  functionSortBy = (resolvedArgs) => {
    if (!this._interpreter) {
      return [];
    }
    const sortedArray = resolvedArgs[0].slice(0);
    if (sortedArray.length === 0) {
      return sortedArray;
    }
    const interpreter = this._interpreter;
    const exprefNode = resolvedArgs[1];
    const requiredType = this.getTypeName(interpreter.visit(exprefNode, sortedArray[0]));
    if (requiredType !== void 0 && ![0 /* TYPE_NUMBER */, 2 /* TYPE_STRING */].includes(requiredType)) {
      throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[requiredType]})`);
    }
    const decorated = [];
    for (let i = 0; i < sortedArray.length; i += 1) {
      decorated.push([i, sortedArray[i]]);
    }
    decorated.sort((a, b) => {
      const exprA = interpreter.visit(exprefNode, a[1]);
      const exprB = interpreter.visit(exprefNode, b[1]);
      if (this.getTypeName(exprA) !== requiredType) {
        throw new Error(
          `TypeError: expected (${this.TYPE_NAME_TABLE[requiredType]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(exprA)]}`
        );
      } else if (this.getTypeName(exprB) !== requiredType) {
        throw new Error(
          `TypeError: expected (${this.TYPE_NAME_TABLE[requiredType]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(exprB)]}`
        );
      }
      if (exprA > exprB) {
        return 1;
      }
      return exprA < exprB ? -1 : a[0] - b[0];
    });
    for (let j = 0; j < decorated.length; j += 1) {
      sortedArray[j] = decorated[j][1];
    }
    return sortedArray;
  };
  functionStartsWith = ([searchable, searchStr]) => {
    return searchable.startsWith(searchStr);
  };
  functionSum = ([inputValue]) => {
    return inputValue.reduce((x, y) => x + y, 0);
  };
  functionToArray = ([inputValue]) => {
    if (this.getTypeName(inputValue) === 3 /* TYPE_ARRAY */) {
      return inputValue;
    }
    return [inputValue];
  };
  functionToNumber = ([inputValue]) => {
    const typeName = this.getTypeName(inputValue);
    let convertedValue;
    if (typeName === 0 /* TYPE_NUMBER */) {
      return inputValue;
    }
    if (typeName === 2 /* TYPE_STRING */) {
      convertedValue = +inputValue;
      if (!isNaN(convertedValue)) {
        return convertedValue;
      }
    }
    return null;
  };
  functionToString = ([inputValue]) => {
    if (this.getTypeName(inputValue) === 2 /* TYPE_STRING */) {
      return inputValue;
    }
    return JSON.stringify(inputValue);
  };
  functionType = ([inputValue]) => {
    switch (this.getTypeName(inputValue)) {
      case 0 /* TYPE_NUMBER */:
        return "number";
      case 2 /* TYPE_STRING */:
        return "string";
      case 3 /* TYPE_ARRAY */:
        return "array";
      case 4 /* TYPE_OBJECT */:
        return "object";
      case 5 /* TYPE_BOOLEAN */:
        return "boolean";
      case 6 /* TYPE_EXPREF */:
        return "expref";
      case 7 /* TYPE_NULL */:
        return "null";
      default:
        return;
    }
  };
  functionValues = ([inputObject]) => {
    return Object.values(inputObject);
  };
  functionTable = {
    abs: {
      _func: this.functionAbs,
      _signature: [
        {
          types: [0 /* TYPE_NUMBER */]
        }
      ]
    },
    avg: {
      _func: this.functionAvg,
      _signature: [
        {
          types: [8 /* TYPE_ARRAY_NUMBER */]
        }
      ]
    },
    ceil: {
      _func: this.functionCeil,
      _signature: [
        {
          types: [0 /* TYPE_NUMBER */]
        }
      ]
    },
    contains: {
      _func: this.functionContains,
      _signature: [
        {
          types: [2 /* TYPE_STRING */, 3 /* TYPE_ARRAY */]
        },
        {
          types: [1 /* TYPE_ANY */]
        }
      ]
    },
    ends_with: {
      _func: this.functionEndsWith,
      _signature: [
        {
          types: [2 /* TYPE_STRING */]
        },
        {
          types: [2 /* TYPE_STRING */]
        }
      ]
    },
    floor: {
      _func: this.functionFloor,
      _signature: [
        {
          types: [0 /* TYPE_NUMBER */]
        }
      ]
    },
    join: {
      _func: this.functionJoin,
      _signature: [
        {
          types: [2 /* TYPE_STRING */]
        },
        {
          types: [9 /* TYPE_ARRAY_STRING */]
        }
      ]
    },
    keys: {
      _func: this.functionKeys,
      _signature: [
        {
          types: [4 /* TYPE_OBJECT */]
        }
      ]
    },
    length: {
      _func: this.functionLength,
      _signature: [
        {
          types: [2 /* TYPE_STRING */, 3 /* TYPE_ARRAY */, 4 /* TYPE_OBJECT */]
        }
      ]
    },
    map: {
      _func: this.functionMap,
      _signature: [
        {
          types: [6 /* TYPE_EXPREF */]
        },
        {
          types: [3 /* TYPE_ARRAY */]
        }
      ]
    },
    max: {
      _func: this.functionMax,
      _signature: [
        {
          types: [8 /* TYPE_ARRAY_NUMBER */, 9 /* TYPE_ARRAY_STRING */]
        }
      ]
    },
    max_by: {
      _func: this.functionMaxBy,
      _signature: [
        {
          types: [3 /* TYPE_ARRAY */]
        },
        {
          types: [6 /* TYPE_EXPREF */]
        }
      ]
    },
    merge: {
      _func: this.functionMerge,
      _signature: [
        {
          types: [4 /* TYPE_OBJECT */],
          variadic: true
        }
      ]
    },
    min: {
      _func: this.functionMin,
      _signature: [
        {
          types: [8 /* TYPE_ARRAY_NUMBER */, 9 /* TYPE_ARRAY_STRING */]
        }
      ]
    },
    min_by: {
      _func: this.functionMinBy,
      _signature: [
        {
          types: [3 /* TYPE_ARRAY */]
        },
        {
          types: [6 /* TYPE_EXPREF */]
        }
      ]
    },
    not_null: {
      _func: this.functionNotNull,
      _signature: [
        {
          types: [1 /* TYPE_ANY */],
          variadic: true
        }
      ]
    },
    reverse: {
      _func: this.functionReverse,
      _signature: [
        {
          types: [2 /* TYPE_STRING */, 3 /* TYPE_ARRAY */]
        }
      ]
    },
    sort: {
      _func: this.functionSort,
      _signature: [
        {
          types: [9 /* TYPE_ARRAY_STRING */, 8 /* TYPE_ARRAY_NUMBER */]
        }
      ]
    },
    sort_by: {
      _func: this.functionSortBy,
      _signature: [
        {
          types: [3 /* TYPE_ARRAY */]
        },
        {
          types: [6 /* TYPE_EXPREF */]
        }
      ]
    },
    starts_with: {
      _func: this.functionStartsWith,
      _signature: [
        {
          types: [2 /* TYPE_STRING */]
        },
        {
          types: [2 /* TYPE_STRING */]
        }
      ]
    },
    sum: {
      _func: this.functionSum,
      _signature: [
        {
          types: [8 /* TYPE_ARRAY_NUMBER */]
        }
      ]
    },
    to_array: {
      _func: this.functionToArray,
      _signature: [
        {
          types: [1 /* TYPE_ANY */]
        }
      ]
    },
    to_number: {
      _func: this.functionToNumber,
      _signature: [
        {
          types: [1 /* TYPE_ANY */]
        }
      ]
    },
    to_string: {
      _func: this.functionToString,
      _signature: [
        {
          types: [1 /* TYPE_ANY */]
        }
      ]
    },
    type: {
      _func: this.functionType,
      _signature: [
        {
          types: [1 /* TYPE_ANY */]
        }
      ]
    },
    values: {
      _func: this.functionValues,
      _signature: [
        {
          types: [4 /* TYPE_OBJECT */]
        }
      ]
    }
  };
};

// https://deno.land/x/jmespath@v0.2.2/TreeInterpreter.ts
var TreeInterpreter = class {
  runtime;
  _rootValue = null;
  constructor() {
    this.runtime = new Runtime(this);
  }
  search(node, value) {
    this._rootValue = value;
    return this.visit(node, value);
  }
  visit(node, value) {
    var _a;
    let matched;
    let current;
    let result;
    let first;
    let second;
    let field;
    let left;
    let right;
    let collected;
    let i;
    let base;
    switch (node.type) {
      case "Field":
        if (value === null) {
          return null;
        }
        if (isObject(value)) {
          field = value[node.name];
          if (field === void 0) {
            return null;
          }
          return field;
        }
        return null;
      case "Subexpression":
        result = this.visit(node.children[0], value);
        for (i = 1; i < node.children.length; i += 1) {
          result = this.visit(node.children[1], result);
          if (result === null) {
            return null;
          }
        }
        return result;
      case "IndexExpression":
        left = this.visit(node.children[0], value);
        right = this.visit(node.children[1], left);
        return right;
      case "Index":
        if (!Array.isArray(value)) {
          return null;
        }
        let index = (_a = node.value) != null ? _a : 0;
        if (index < 0) {
          index = value.length + index;
        }
        result = value[index];
        if (result === void 0) {
          result = null;
        }
        return result;
      case "Slice":
        if (!Array.isArray(value)) {
          return null;
        }
        const sliceParams = [...node.children];
        const computed = this.computeSliceParams(value.length, sliceParams);
        const [start, stop, step] = computed;
        result = [];
        if (step > 0) {
          for (i = start; i < stop; i += step) {
            result.push(value[i]);
          }
        } else {
          for (i = start; i > stop; i += step) {
            result.push(value[i]);
          }
        }
        return result;
      case "Projection":
        base = this.visit(node.children[0], value);
        if (!Array.isArray(base)) {
          return null;
        }
        collected = [];
        for (i = 0; i < base.length; i += 1) {
          current = this.visit(node.children[1], base[i]);
          if (current !== null) {
            collected.push(current);
          }
        }
        return collected;
      case "ValueProjection":
        base = this.visit(node.children[0], value);
        if (!isObject(base)) {
          return null;
        }
        collected = [];
        const values = Object.values(base);
        for (i = 0; i < values.length; i += 1) {
          current = this.visit(node.children[1], values[i]);
          if (current !== null) {
            collected.push(current);
          }
        }
        return collected;
      case "FilterProjection":
        base = this.visit(node.children[0], value);
        if (!Array.isArray(base)) {
          return null;
        }
        const filtered = [];
        const finalResults = [];
        for (i = 0; i < base.length; i += 1) {
          matched = this.visit(node.children[2], base[i]);
          if (!isFalse(matched)) {
            filtered.push(base[i]);
          }
        }
        for (let j = 0; j < filtered.length; j += 1) {
          current = this.visit(node.children[1], filtered[j]);
          if (current !== null) {
            finalResults.push(current);
          }
        }
        return finalResults;
      case "Comparator":
        first = this.visit(node.children[0], value);
        second = this.visit(node.children[1], value);
        switch (node.name) {
          case "EQ" /* TOK_EQ */:
            result = strictDeepEqual(first, second);
            break;
          case "NE" /* TOK_NE */:
            result = !strictDeepEqual(first, second);
            break;
          case "GT" /* TOK_GT */:
            result = first > second;
            break;
          case "GTE" /* TOK_GTE */:
            result = first >= second;
            break;
          case "LT" /* TOK_LT */:
            result = first < second;
            break;
          case "LTE" /* TOK_LTE */:
            result = first <= second;
            break;
          default:
            throw new Error(`Unknown comparator: ${node.name}`);
        }
        return result;
      case "Flatten" /* TOK_FLATTEN */:
        const original = this.visit(node.children[0], value);
        if (!Array.isArray(original)) {
          return null;
        }
        let merged = [];
        for (i = 0; i < original.length; i += 1) {
          current = original[i];
          if (Array.isArray(current)) {
            merged = [...merged, ...current];
          } else {
            merged.push(current);
          }
        }
        return merged;
      case "Identity":
        return value;
      case "MultiSelectList":
        if (value === null) {
          return null;
        }
        collected = [];
        for (i = 0; i < node.children.length; i += 1) {
          collected.push(this.visit(node.children[i], value));
        }
        return collected;
      case "MultiSelectHash":
        if (value === null) {
          return null;
        }
        let collectedObj = {};
        for (i = 0; i < node.children.length; i += 1) {
          const child = node.children[i];
          if (child.type === "KeyValuePair") {
            collectedObj[child.name] = this.visit(child.value, value);
          }
        }
        return collectedObj;
      case "OrExpression":
        matched = this.visit(node.children[0], value);
        if (isFalse(matched)) {
          matched = this.visit(node.children[1], value);
        }
        return matched;
      case "AndExpression":
        first = this.visit(node.children[0], value);
        if (isFalse(first)) {
          return first;
        }
        return this.visit(node.children[1], value);
      case "NotExpression":
        first = this.visit(node.children[0], value);
        return isFalse(first);
      case "Literal":
        return node.value;
      case "Pipe" /* TOK_PIPE */:
        left = this.visit(node.children[0], value);
        return this.visit(node.children[1], left);
      case "Current" /* TOK_CURRENT */:
        return value;
      case "Root" /* TOK_ROOT */:
        return this._rootValue;
      case "Function":
        const resolvedArgs = [];
        for (let j = 0; j < node.children.length; j += 1) {
          resolvedArgs.push(this.visit(node.children[j], value));
        }
        return this.runtime.callFunction(node.name, resolvedArgs);
      case "ExpressionReference":
        const refNode = node.children[0];
        refNode.jmespathType = "Expref" /* TOK_EXPREF */;
        return refNode;
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
  computeSliceParams(arrayLength, sliceParams) {
    let [start, stop, step] = sliceParams;
    if (step === null) {
      step = 1;
    } else if (step === 0) {
      const error = new Error("Invalid slice, step cannot be 0");
      error.name = "RuntimeError";
      throw error;
    }
    const stepValueNegative = step < 0 ? true : false;
    start = start === null ? stepValueNegative ? arrayLength - 1 : 0 : this.capSliceRange(arrayLength, start, step);
    stop = stop === null ? stepValueNegative ? -1 : arrayLength : this.capSliceRange(arrayLength, stop, step);
    return [start, stop, step];
  }
  capSliceRange(arrayLength, actualValue, step) {
    let nextActualValue = actualValue;
    if (nextActualValue < 0) {
      nextActualValue += arrayLength;
      if (nextActualValue < 0) {
        nextActualValue = step < 0 ? -1 : 0;
      }
    } else if (nextActualValue >= arrayLength) {
      nextActualValue = step < 0 ? arrayLength - 1 : arrayLength;
    }
    return nextActualValue;
  }
};
var TreeInterpreterInstance = new TreeInterpreter();
var TreeInterpreter_default = TreeInterpreterInstance;

// https://deno.land/x/jmespath@v0.2.2/index.ts
var TYPE_ANY = 1 /* TYPE_ANY */;
var TYPE_ARRAY = 3 /* TYPE_ARRAY */;
var TYPE_ARRAY_NUMBER = 8 /* TYPE_ARRAY_NUMBER */;
var TYPE_ARRAY_STRING = 9 /* TYPE_ARRAY_STRING */;
var TYPE_BOOLEAN = 5 /* TYPE_BOOLEAN */;
var TYPE_EXPREF = 6 /* TYPE_EXPREF */;
var TYPE_NULL = 7 /* TYPE_NULL */;
var TYPE_NUMBER = 0 /* TYPE_NUMBER */;
var TYPE_OBJECT = 4 /* TYPE_OBJECT */;
var TYPE_STRING = 2 /* TYPE_STRING */;
function search(data, expression) {
  const nodeTree = Parser_default.parse(expression);
  return TreeInterpreter_default.search(nodeTree, data);
}

// src/mod.ts
var import_node_fs = __toESM(require("fs"));
var import_npm_qs = __toESM(require_lib());
var PhenoUI_MAPS = class {
  config;
  constructor(config) {
    if (config.query_override) {
      config.query_override = import_node_fs.default.readFileSync(config.query_override, { encoding: "utf8" });
    }
    if (config.request_transform) {
      config.request_transform = import_node_fs.default.readFileSync(config.request_transform, { encoding: "utf8" });
    }
    if (config.response_transform) {
      config.response_transform = import_node_fs.default.readFileSync(config.response_transform, { encoding: "utf8" });
    }
    this.config = config;
  }
  async access(kong) {
    await kong.service.request.set_path(this.config.target_route);
    await kong.service.request.set_method(this.config.method);
    if (this.config.request_transform || this.config.query_override) {
      const rawBody = await kong.request.get_raw_body();
      let body;
      try {
        body = JSON.parse(rawBody);
      } catch (e) {
        kong.log.notice(`Failed to parse body: ${e}`);
        body = {};
      }
      if (this.config.request_transform) {
        body = search(body, this.config.request_transform);
        await kong.service.request.set_raw_body(JSON.stringify(body));
      }
      if (this.config.query_override) {
        const query = search(body, this.config.query_override);
        await kong.service.request.set_raw_query(import_npm_qs.default.stringify(query));
      }
    }
  }
  async response(kong) {
    if (this.config.response_transform && await kong.response.getSource() === "service") {
      const rawBody = await kong.service.response.getRawBody();
      const body = search(JSON.parse(rawBody), this.config.response_transform);
      await kong.response.exit(await kong.response.getStatus(), JSON.stringify(body));
    }
  }
};
var Plugin = PhenoUI_MAPS;
var Name = "phenoui_maps";
var Version = "0.0.1";
var Priority = 100;
var Schema = [
  { target_route: { type: "string", required: true } },
  { method: { type: "string", required: true } },
  { query_override: { type: "string", required: false } },
  // this is computed after the request is transformed
  { request_transform: { type: "string", required: false } },
  { response_transform: { type: "string", required: false } }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Name,
  Plugin,
  Priority,
  Schema,
  Version
});
