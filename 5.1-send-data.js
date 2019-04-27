///////////////////////////////
// Send Data
///////////////////////////////
// const myAddress = require('./3.1-create-address.js');

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Use a random seed as there is no tokens being sent.
const seed =
  'FRPEILASMWPSDLAQTMYFDXUHIEPBCMMSWOFQPASMDBTBPNSZOUSVGZVXPNJQ9BJHFIVVEWHABECXNQVQH'

const to_Address = 'FLQRKOTUUXUVEFSPOUUKTXSLTLJIQGHDMQVRQPBULOGTYFURNJLJWUBL9YYTOMARXOJTBEDHKVKNMDGEY'

iota.getNewAddress(seed, {
   index: new Date().getTime(),
   total: 1,
   security: 3
 }).then(address => {
   // console.log('Your address is: ' + address)
   // console.log('Paste this address into https://faucet.devnet.iota.org')
   console.log('Your new address generated: ' + address + '\n')
   my_send(address, to_Address)
 })
 .catch(err => {
   console.log(err)
 });

function my_send(new_pubkey, to_Address){
  console.log("send to: " + to_Address + '\n')

// to patient
  // const phar_pubkey = 'LRWVTOVHISIDJWNMFASTOSYSAXBFYMXTPT9HTWLKDVTQCZJV9VMPYNHUOVULJLXZUKBNBDVINT9VRATVA'
  // const message_ascii = 'The Pharmacy is willing to pay 1000i for 50 lung cancer patients data, 20i each|'+ String(new_pubkey)

  // const message_ascii = 'The Pharmacy is willing to pay 1000i for 50 lung cancer patients data, 20i each|'+ String(new_pubkey) + '|' + String(phar_pubkey)

// to Pharmacy, individual's key
  const pubkey_attach =  'CASDFOCVBPOFZD9PBXIYXZLYAHZONVUEIVUSBTOKZWREH99HHKLWOOKHSFPUCLEBJFCSKAH9QANVAAFHY'
  const message_ascii = 'The patient has consented your purchase|' + String(new_pubkey) + '|' + String(pubkey_attach)

  const message = Converter.asciiToTrytes(message_ascii)
  console.log("message to send:\n\t" + message_ascii + '\n')

  const transfers = [
    {
      value: 500,
      address: to_Address, // Where the data is being sent
      message: message // The message converted into trytes
    }
  ]

  iota
    .prepareTransfers(seed, transfers)
    .then(trytes => iota.sendTrytes(trytes, 3, 9))
    .then(bundle => {
      console.log('Transfer successfully sent')
      // bundle.map(tx => console.log(tx))
    })
    .catch(err => {
      console.log(err)
    })
}
