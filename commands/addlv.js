const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'addlv',
    type: "messageCreate",
    code: "$addStatLv[$authorID;$message;Global]"
});