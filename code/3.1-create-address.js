///////////////////////////////
// Create an address from a new seed
/////
// First: run this code in a unix based terminal to generate an 81 Tryte seed.
// 'cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1'
// Paste the output of the above code into the 'seed' section below.
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

var d = new Date()
var index = d.getTime()

const seed =
  'FRPEILASMWPSDLAQTMYFDXUHIEPBCMMSWOFQPASMDBTBPNSZOUSVGZVXPNJQ9BJHFIVVEWHABECXNQVQH'

var myAddress = iota.getNewAddress(seed, {
   index: index,
   total: 1,
   security: 3
 }).then(address => {
   console.log('Your address is: ' + address)
   console.log('Paste this address into https://faucet.devnet.iota.org')
 })
 .catch(err => {
   console.log(err)
 });

// iota
//  .getNewAddress(seed, { index: index, total: 1, security: 3})
//  .then(address => {
//    console.log('Your address is: ' + address)
//    console.log('Paste this address into https://faucet.devnet.iota.org')
//  })
//  .catch(err => {
//    console.log(err)
//  })

module.exports = myAddress;
