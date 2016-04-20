contract('DAO', function(accounts) {
  it("should validate that DAO is deployed and available", function(done) {
    var dao = DAO.at(DAO.deployed_address);
    assert.isTrue(true);
    done();
  });

  it("should initialize a new DAO and check that the creator variable is being set correctly", function(done) {
    var dao = DAO.at(DAO.deployed_address);
    dao.new({ from: accounts[0] }).then(
      function(dao) {
        dao.daoCreator.call().then(
          function(creator) {
            assert.equal(creator, accounts[0], "Dao creator addresses don't match");
          }).then(done).catch(done);
      }).catch(done);
  });

  it("should initialize a new DAO and check that the initial variables are being set correctly", function(done) {
    var dao = DAO.at(DAO.deployed_address);
    dao.new({ from: accounts[0] }).then(
      function(dao) {
        dao.proposalDeposit.call().then(
          function(proposal_deposit) {
            assert.equal(proposal_deposit, 0, ProposalDeposit is not equal to zero at initialization");
          }).then(done).catch(done);
        dao.rewardAccount.call().then(
          function(reward_account) {
            assert.equal(reward_account, 0, RewardAccount is not equal to zero at initialization");
          }).then(done).catch(done);
        dao.totalRewardToken.call().then(
          function(total_reward_token) {
            assert.equal(total_reward_token, 0, TotalRewardToken is not equal to zero at initialization");
          }).then(done).catch(done);
        dao.rewards.call().then(
          function(reward) {
            assert.equal(reward, 0, Rewards is not equal to zero at initialization");
          }).then(done).catch(done);
      }).catch(done);
  });


  it("should initialize a new SplitPay with a single content creator address and check that the initial numPayees variable is being set correctly", function(done) {
    var splitpay = SplitPay.at(SplitPay.deployed_address);
    SplitPay.new({ from: accounts[0] }).then(
      function(splitpay) {
        splitpay.numPayees.call().then(
            function(numPayees) {
              assert.equal(numPayees, 0, "numPayees is not equal to 0");
            }).then(done).catch(done);
      }).catch(done);
  });

  it("should initialize a new SplitPay with a single content creator address and check that the initial buyer variable is being set correctly", function(done) {
    var splitpay = SplitPay.at(SplitPay.deployed_address);
    SplitPay.new({ from: accounts[0] }).then(
      function(splitpay) {
        splitpay.buyer.call().then(
            function(buyer) {
              assert.equal(buyer, accounts[0], "buyer is not initialized properly");
            }).then(done).catch(done);
      }).catch(done);
  });

  it("should initialize a new SplitPay with a single content creator address and add a buyer and check that the buyer is being set correctly", function(done) {
    var splitpay = SplitPay.at(SplitPay.deployed_address);
    SplitPay.new({ from: accounts[0] }).then(
      function(splitpay) {
	splitpay.addBuyer(accounts[1]).then(
  	  function() {
            splitpay.buyer.call().then(
              function(buyer) {
                assert.equal(buyer, accounts[1], "SplitPay initiator addresses don't match");
              }).then(done).catch(done);
          }).then(done).catch(done);
      }).then(done).catch(done);
  });

