pokebot.js:

const config = require('./config.js')
const restify = require('restify')
const builder = require('botbuilder')

// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
  appId: config.appid,
  appPassword: config.secret,
})

const bot = new builder.UniversalBot(connector)

// Event when Message received
bot.dialog('/', (session) => {
  console.log(session.message.text)
})

// Server Init
const server = restify.createServer()
server.listen(8000)
server.post('/', connector.listen())