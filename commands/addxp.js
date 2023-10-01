const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'addxp',
    type: "messageCreate",
    code: "$addStatExp[$authorID;$message;Global]"
});