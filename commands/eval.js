const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'eval',
    type: "messageCreate",
    code: "$eval[$message]"
})