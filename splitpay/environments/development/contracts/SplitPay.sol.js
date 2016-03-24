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
  SplitPay.abi = [{ "constant": false, "inputs": [{ "name": "_payeeAddress", "type": "address" }, { "name": "_payeePercentage", "type": "uint256" }, { "name": "_payeeType", "type": "uint256" }], "name": "addPayee", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "buyer", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_buyerAddress", "type": "address" }], "name": "addBuyer", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_desiredPayoutAmount", "type": "uint256" }], "name": "payout", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "lid", "type": "uint256" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "onPayout", "type": "event" }];
  SplitPay.binary = "606060405260028054600160a060020a0319163317905561018b806100246000396000f3606060405260e060020a60003504632a11f719811461003c5780637150d8ae146100a3578063bbf89803146100b5578063e1152343146100db575b005b61003a60043560243560443560c060409081526060849052608083905260a082905260008054815260016020819052918120805473ffffffffffffffffffffffffffffffffffffffff19168617815580830185905560020183905580549091019055505050565b610116600254600160a060020a031681565b6002805473ffffffffffffffffffffffffffffffffffffffff191660043517905561003a565b61003a600435600080805b805482101561012057818152600160208190526040822001546064908502049290920191600191909101906100e6565b6060908152602090f35b838311610179575b60005481101561018557600081815260016020819052604080832080549201549051600160a060020a0392909216929160643492909202919091049082818181858883f15050505050600101610128565b33600160a060020a0316ff5b5050505056";

  if ("0xe77dfa4726bd532d9842f9d17a2c3c754a6f0a40" != "") {
    SplitPay.address = "0xe77dfa4726bd532d9842f9d17a2c3c754a6f0a40";

    // Backward compatibility; Deprecated.
    SplitPay.deployed_address = "0xe77dfa4726bd532d9842f9d17a2c3c754a6f0a40";
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