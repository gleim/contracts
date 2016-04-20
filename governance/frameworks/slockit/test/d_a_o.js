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
            assert.equal(proposal_deposit, 0, "ProposalDeposit is not equal to zero at initialization");
          }).then(done).catch(done);
        dao.rewardAccount.call().then(
          function(reward_account) {
            assert.equal(reward_account, 0, "RewardAccount is not equal to zero at initialization");
          }).then(done).catch(done);
        dao.totalRewardToken.call().then(
          function(total_reward_token) {
            assert.equal(total_reward_token, 0, "TotalRewardToken is not equal to zero at initialization");
          }).then(done).catch(done);
        dao.rewards.call().then(
          function(reward) {
            assert.equal(reward, 0, "Rewards is not equal to zero at initialization");
          }).then(done).catch(done);
      }).catch(done);
  });

  it("should initialize a new DAO and add an Allowed Address and check that the allowed address is being set correctly", function(done) {
    var dao = DAO.at(DAO.deployed_address);
    dao.new({ from: accounts[0] }).then(
      function(dao) {
	dao.addAllowedAddress(accounts[1]).then(
  	  function(success) {
  	    assert.equal(success, true, "addAllowedAddress( ) does not return true")
            dao.allowedRecipients.call().then(
              function(allowed_recipients) {
                assert.equal(allowed_recipients[0], accounts[1], "Allowed Recipients addresses don't match");
              }).then(done).catch(done);
          }).then(done).catch(done);
      }).then(done).catch(done);
  });

