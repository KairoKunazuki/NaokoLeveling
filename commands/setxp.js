const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'setxp',
    type: "messageCreate",
    code: "$setStatExp[$authorID;$message;Global]"
})