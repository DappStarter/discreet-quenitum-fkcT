require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind concert grace infant fringe tuna'; 
let testAccounts = [
"0x52d4589945b79cc34cc2f48c445b4b1caf224ee617780bb572e2063cf2ac2e7b",
"0x6b5e7d62c410ed89bbf3568ede13590f7e227cb9a3dbd0a055aabf3b0b1c9a0e",
"0x385090794b448cd2c1cc87592a53d6fd2a93a7796d98682d0d1e75ab0c0eb498",
"0x631b3ea1bd99b5e956359fcaed793c126108e37481c737779c88dfbd9939beda",
"0x52c15c538e3f1292013ef87535b07ae91d9081feb044e5b1c7f046d6e9529207",
"0xc3c4838fd33e4ad644c8007193cec83708c2652d19b7f6ce08eeac909552b0d0",
"0x6999a62559682bcdc7f2bc1995ad63fbc55d2d0d4d335f671a0dcc2158708de6",
"0x0582fbfcae7684160d23e7debdb0adb7514d5934945398f9875ab6569e94ecd5",
"0x96a0466424d1a94b1ad81c386743b78bfa569fe821d20d83b5326997584accf3",
"0x7d21e78a5c3bf57ba97de93bb24abba0b68cc2027edbff20c04809473350e4c0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

