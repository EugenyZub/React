"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _empl = _interopRequireDefault(require("./empl"));

var _finance = _interopRequireWildcard(require("./finance"));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var makeBusiness =
/*#__PURE__*/
function () {
  function makeBusiness(owner, director, cash, emp) {
    _classCallCheck(this, makeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(makeBusiness, [{
    key: "display",
    value: function display() {
      var sumSponsors = _finance.eu.concat(_finance.rus, 'unexpected sponsor');

      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log('And we have a sponsors: ');
      console.log.apply(null, sumSponsors);
      console.log("Note. Be careful with ".concat(_finance.a, ". It's a huge risk."));
    }
  }]);

  return makeBusiness;
}();

var business = new makeBusiness('Sam', 'Victor', _finance.default, _empl.default);
business.display();