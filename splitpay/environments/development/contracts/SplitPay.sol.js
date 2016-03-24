"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var SplitPay = (function (_Pudding) {
    _inherits(SplitPay, _Pudding);

    function SplitPay() {
      _classCallCheck(this, SplitPay);

      _get(Object.getPrototypeOf(SplitPay.prototype), "constructor", this).apply(this, arguments);
    }

    return SplitPay;
  })(Pudding);

  ;

  // Set up specific data for this class.
  SplitPay.abi = [{ "constant": false, "inputs": [{ "name": "_lid", "type": "uint256" }], "name": "refund", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "payeeAddress", "type": "address" }, { "name": "payeePercentage", "type": "uint256" }, { "name": "payeeType", "type": "uint8" }], "name": "addPayee", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_buyerAddress", "type": "address" }], "name": "addBuyer", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_lid", "type": "uint256" }], "name": "contribute", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_lid", "type": "uint256" }], "name": "payout", "outputs": [], "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "lid", "type": "uint256" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "onContribute", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "lid", "type": "uint256" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "onPayout", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "lid", "type": "uint256" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "onRefund", "type": "event" }];
  SplitPay.binary = "606060405260ec8060106000396000f3606060405260e060020a6000350463278ecde1811460425780639d75a9ad14604b578063bbf898031460c4578063c1cbbca7146042578063e1152343146042575b005b604060043560e9565b604060043560243560443560c060409081526060849052608083905260a082905273ffffffffffffffffffffffffffffffffffffffff84166000908152602081905220805473ffffffffffffffffffffffffffffffffffffffff19168417815560018101839055600201805460ff191682179055505050565b60406004356001805473ffffffffffffffffffffffffffffffffffffffff1916821790555b5056";

  if ("" != "") {
    SplitPay.address = "";

    // Backward compatibility; Deprecated.
    SplitPay.deployed_address = "";
  }

  SplitPay.generated_with = "1.0.3";
  SplitPay.contract_name = "SplitPay";

  return SplitPay;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.SplitPay = factory;
}