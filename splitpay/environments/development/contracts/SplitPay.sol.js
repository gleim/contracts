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
  SplitPay.abi = [{ "constant": true, "inputs": [], "name": "buyer", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_payeeAddress", "type": "address" }, { "name": "_payeePercentage", "type": "uint256" }, { "name": "_payeeType", "type": "uint8" }], "name": "addPayee", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_buyerAddress", "type": "address" }], "name": "addBuyer", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_desiredPayoutAmount", "type": "uint256" }], "name": "payout", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "lid", "type": "uint256" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "onPayout", "type": "event" }];
  SplitPay.binary = "606060405260028054600160a060020a03191633179055610192806100246000396000f3606060405260e060020a60003504637150d8ae811461003c5780639d75a9ad1461004e578063bbf89803146100bc578063e1152343146100e2575b005b61011d600254600160a060020a031681565b61003a60043560243560443560c060409081526060849052608083905260a082905260008054815260016020819052918120805473ffffffffffffffffffffffffffffffffffffffff191686178155808301859055600201805460ff19168417905580549091019055505050565b6002805473ffffffffffffffffffffffffffffffffffffffff191660043517905561003a565b61003a600435600080805b805482101561012757818152600160208190526040822001546064908502049290920191600191909101906100ed565b6060908152602090f35b838311610180575b60005481101561018c57600081815260016020819052604080832080549201549051600160a060020a0392909216929160643492909202919091049082818181858883f1505050505060010161012f565b33600160a060020a0316ff5b5050505056";

  if ("0x437d82e50bba0878a37e08628a74efd81b6f067f" != "") {
    SplitPay.address = "0x437d82e50bba0878a37e08628a74efd81b6f067f";

    // Backward compatibility; Deprecated.
    SplitPay.deployed_address = "0x437d82e50bba0878a37e08628a74efd81b6f067f";
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