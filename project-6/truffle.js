const HDWalletProvider=require('truffle-hdwallet-provider');
module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 9545,
    //   network_id: "*" // Match any network id
    // }
    rinkeby:{
      provider:()=>new HDWalletProvider('Your Mnemonic','Your Infura key'),
      network_id:4,
      gas:5500000
    },
  }
};
