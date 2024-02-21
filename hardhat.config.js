
require("@nomicfoundation/hardhat-toolbox");

const privateKey = "64db75b7bc58ad8df476f224e991df1787e1baa6f247a899ef2b35d3fb9ad1e9";
const mnemonic = "climb vital action doll permit field kingdom picnic broccoli this cage pistol";

module.exports = {
  solidity: "0.8.24", // Same Solidity version as specified in Truffle config
  networks: {
    development: {
      url: "http://127.0.0.1:9545", // Local development network configuration
      chainId: 5777 // Network ID for the development network
    },
    quorum: {
      url: 'https://nd-693-385-826.p2pify.com/caf0cfc8184b881e355a204e51f39ed4',
      accounts: [`0x3805d619439d7996a5bd9e38f1bbfed68ecf4ad8844cae97a4e4079ca0c13fbb`],
      chainId: 10001,
      gasPrice: 0,
      gas: 4500000,
      provider: () => new ethers.providers.JsonRpcProvider('https://nd-651-483-575.p2pify.com/cbda8d1c04f6e11e5f15b7a9cb95183f')
    },
    // Additional networks can be configured similarly
  },
  // Configure additional settings as needed
};