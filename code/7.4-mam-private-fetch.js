///////////////////////////////
// MAM: Publish messages to Private Stream
///////////////////////////////

const Mam = require('@iota/mam')
const { trytesToAscii } = require('@iota/converter')

// Init State
let root =
  'SQWIO9FAOSSZPVZHSMJWWK9VXUZJXRXB9WBZMMYQOELDFCIKTVFNXORGVSCJCCIR9DTWQXHA9NNJ9LHGS'
const mamType = 'restricted'
const mamSecret = 'DONTSHARETHIS'

// Initialise MAM State
let mamState = Mam.init('https://nodes.devnet.iota.org:443')

// Callback used to pass data out of the fetch
const logData = data => console.log(trytesToAscii(data))

const execute = async () => {
  // Callback used to pass data + returns next_root
  const resp = await Mam.fetch(root, mamType, mamSecret, logData)
}
execute()
