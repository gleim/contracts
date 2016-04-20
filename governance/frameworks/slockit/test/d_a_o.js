contract('DAO', function(accounts) {
  it("should assert true", function(done) {
    var d_a_o = DAO.at(DAO.deployed_address);
    assert.isTrue(true);
    done();
  });
});
