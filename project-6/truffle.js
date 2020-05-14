const HDWalletProvider=require('truffle-hdwallet-provider');
module.exports = {
  networks: {
    // development: {
    //   host: "127.0.0.1",
    //   port: 9545,
    //   network_id: "*" // Match any network id
    // }
    rinkeby:{
      provider:()=>new HDWalletProvider('utility local omit alley affair toe ivory scheme depth voyage major shield','https://rinkeby.infura.io/v3/581a87de075a47b996840bc292cb22f8'),
      network_id:4,
      gas:5500000
    },
  }
};