const PLEToken = artifacts.require("PLEToken");
const NFTToken = artifacts.require("MyNFT");


module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(NFTToken);
  const nft = await NFTToken.deployed();
};
