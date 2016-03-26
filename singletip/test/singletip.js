contract("SingleTip", function(accounts) {
	var singletip = null;

	it("checks contract availability", function(done) {
		SingleTip.at(SingleTip.deployed_address);
		assert.isTrue(true);
		done();
	});
	
	it("checks constructor and initial internal SingleTip contract state", function(done) {
		var tip = null;
		var recipient = null;

		SingleTip.at(SingleTip.deployed_address);

		SingleTip.new(accounts[1], 10000).then(
			function(sTip) {
				singletip = sTip;
				return singletip.tip.call();
			}
		).then(
			function(tipValue) {
				tip = tipValue;
				return singletip.recipient.call();
			}
		).then(
			function(recipientAddress) {
				recipient = recipientAddress;
				return singletip.initiator.call();
			}
		).then(
			function(initiator) {
				assert.equal(tip.toNumber(), 10000, "tip values do not match");
				assert.equal(recipient, accounts[1], "recipient addresses do not match");
				assert.equal(initiator, accounts[0], "initiator addresses do not match");
			}
		).then(done).catch(done);
	});
});

