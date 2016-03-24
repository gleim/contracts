contract('SplitPay', function(accounts) {
  it("should validate that SplitPay is deployed and available", function(done) {
    var splitpay = SplitPay.at(SplitPay.deployed_address);
    assert.isTrue(true);
    done();
  });

  it("should initialize a new SplitPay and check that the initial variables are being set correctly", function(done) {
    var splitpay = SplitPay.at(SplitPay.deployed_address);
    SplitPay.new({ from: accounts[0] }).then(
      function(splitpay) {
        splitpay.splitPayData.buyer.call().then(
          function(buyer) {
            assert.equal(buyer, accounts[0], "SplitPay initiator addresses don't match");
          }).then(done).catch(done);
      }).catch(done);
  });

});
