contract('SoloPay', function(accounts) {
  it("should validate that SoloPay is deployed and available", function(done) {
    var solopay = SoloPay.at(SoloPay.deployed_address);
    assert.isTrue(true);
    done();
  });

  it("should initialize a new SoloPay and check that the initial variables are being set correctly", function(done) {
    var solopay = SoloPay.at(SoloPay.deployed_address);
    SoloPay.new(accounts[1], { from: accounts[0], value: 1000 }).then(
      function(solopay) {
        solopay.payer.call().then(
          function(payer) {
            assert.equal(payer, accounts[0], "SoloPay payer addresses don't match");
          }).catch(done).then(
        solopay.payee.call().then(
          function(payer) {
            assert.equal(payee, accounts[1], "SoloPay payer addresses don't match");
          }).then(done).catch(done);
      }).catch(done);
  });

});
