const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'setlv',
    type: "messageCreate",
    code: "$setStatLv[$authorID;$message;Global]"
})