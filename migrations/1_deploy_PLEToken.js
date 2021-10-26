const PLEToken = artifacts.require("PLEToken");


module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(PLEToken);
  const ple = await PLEToken.deployed();
};
