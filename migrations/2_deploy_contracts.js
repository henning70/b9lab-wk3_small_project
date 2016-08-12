module.exports = function(deployer) {
  deployer.autolink();
  deployer.deploy(SmallProject);
  deployer.deploy(FiftyFifty);
};
