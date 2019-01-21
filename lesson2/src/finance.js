"use strict";

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = exports.rus = exports.eu = exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var everyCash = Array.prototype.slice.call(arguments);
  var total = own;

  for (var i = 0; i < everyCash[1].length; i++) {
    total += +everyCash[1][i];
  }

  return total;
}

var cash = sponsors.cash;
var money = calcCash(null, cash);
var eu = sponsors.eu;
exports.eu = eu;

var _sponsors$eu = _slicedToArray(sponsors.eu, 1),
    a = _sponsors$eu[0];

exports.a = a;
var rus = sponsors.rus;
exports.rus = rus;
var _default = money;
exports.default = _default;