
const Discord = require('discord.js')
const prefix = '!'
const commands = {
    titan: require('../commands/titan'),
    matic: require('../commands/matic'),
    iron: require('../commands/iron'),
    wexpoly: require('../commands/wexpoly'),
    qi: require('../commands/qi'),
    tcr: require('../commands/cr'),
    ecr: require('../commands/cr'),
    alert: require('../commands/alert'),
    alertstats: require('../commands/alertstats'),
    help: require('../commands/help'),
    supportedcoins: require('../commands/supportedcoins')

}


const client = new Discord.Client()


client.on('message', function (message) {
    if (message.author.bot) return
    if (message.cleanContent.startsWith(prefix)) {
        const commandBody = message.content.slice(prefix.length)
        const args = commandBody.split(' ')
        const command = args.shift().toLowerCase()
        if (commands[command]) commands[command](message)
    }
})


client.login(process.env.BOT_TOKEN)


module.exports = {
    client
}
