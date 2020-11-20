const Kittycontract = artifacts.require("Kittycontract");
const name = "Crazy Cats";
const symbol = "CCS";

module.exports = function (deployer) {
  deployer.deploy(Kittycontract, name, symbol);
};