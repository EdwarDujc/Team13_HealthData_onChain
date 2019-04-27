///////////////////////////////
// Fetch balance of an address
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'BSN9AYWDDBHBTCJFJZGWZAUOQPRZXKMQT9BCCZVPYXWKKCPGYPNNRIZEYMEPORUATEZCCRANSBTGJRQJDAHMKLAOXB'

iota
  .getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  })
