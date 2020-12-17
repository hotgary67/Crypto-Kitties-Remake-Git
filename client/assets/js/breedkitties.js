$(document).ready(function () {
    window.ethereum.enable().then(function (accounts) {
      instance = new web3.eth.Contract(abi, contractAddress, {
        from: accounts[0],
      });

function breedNewKitty() {
    let dadKittyDna = "1";
    let mumKittyDna = "8";

instance.methods.breed(dadKittyDna,mumKittyDna).send({}, function (err, txHash) {
  if (err) console.log(err);
  else console.log(txHash);
});

