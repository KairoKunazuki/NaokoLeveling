const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'ping',
    type: "messageCreate",
    code: "Pong! My ping is $pingms"
})