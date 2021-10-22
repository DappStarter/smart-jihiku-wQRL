require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stove cruise payment coin inside light army gasp'; 
let testAccounts = [
"0xa2946738e6e8a302ce047a66abeefe79e5722eb45f403049541022a04d1c8469",
"0x64ca53f11d5272730bc6720f51f966b861419be8281de8bda1ac2108b5e1fa58",
"0x246a5715e37b0fb1dfea53b1157bcf78f372c33b344b7d7bd38443438055eb59",
"0x413302ed72779be982e47a8aedc0d033cf83d82fdb430cf0424347203104c787",
"0x0bc4bc4bd1ab7285389590eb7b495ccda46a8b58b6fef6110651375acc3c68ae",
"0xf7cfb73e142e873cf8cb2f0b6382a13d9b3be9e7ab4111769dc6916800f63baf",
"0x754c8a06c4897152591b42a7c5d8c0268eebbeb41260cb59aa5f90b3f7db750c",
"0xaa103771a2ab395f3b698dd3ee853a84415e791771ad41ee238f03548bc35133",
"0xc1a4b50feda3efdbf8e70f72d6b5cc87099041b16b0af39fcda02b679ffb2f48",
"0xab4185d24a9f767d6d943436105f680b3517fbc326637454faead2f778ed2c0a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

