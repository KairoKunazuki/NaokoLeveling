const fs = require('forgescript');
const lib = require('./lib');
const { SqliteDriver } = require('quick.db');
const client = new fs.ForgeClient({ 
    intents: ['GuildMessages', 'Guilds', 'MessageContent'],
    extensions: [
        new lib.NaokoLeveling(
            new SqliteDriver('./nlv.db')
        )
    ],
    prefixes: ['cp'],
    events: ['messageCreate']
 });

client.commands.load('./commands');
client.on('ready', () => console.log('Ready'))

client.login("TOKEN");