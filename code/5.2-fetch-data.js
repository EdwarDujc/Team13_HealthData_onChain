///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////
// var program = require('commander');

// program
//   .version('0.0.1')
//   .option('-a, --addr', 'Address')
//   .parse(process.argv);

// if (program.a){
//   const address = a
// }

const address = 'XJPLMYDD9ZOYTXJCKSSAIUDSKKHMLEDZYZPDVQEGHMFGEJIWKGSUQFGKZWZBGQYYHDXBWHHYLOJGIZAZW'

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// const address =
//   'LEDLYBPKVXDKDCFKLM9OCGQDVVQNJXNAVFOSVAXKKVCPEBCERHGN9EW9JLMLQEWV9WGFRKZVMYSACTRTX'

iota
  .findTransactionObjects({ addresses: [address]})
  .then(response => {
    // console.log('Encoded message:')
    // console.log(response[0].signatureMessageFragment)

    // Modify trytes into a consumable length
    const trytes = response[0].signatureMessageFragment.slice(0, -1)

    //Convert trytes to plan text
    const data = Converter.trytesToAscii(trytes)
    // console.log('Decoded message:')
    const split_array = data.split('|')
    const statement = split_array[0]
    const address = split_array[1]
    console.log("message received: ")
    console.log("\tstatement: " + statement)
    console.log("\tnext time reach me at: " + address)
    if (split_array.length == 3) {
      console.log("\tpharmacy’s address: " + split_array[2])
   }
  })
  .catch(err => {
    console.error(err)
  })
