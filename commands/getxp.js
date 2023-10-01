const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'getxp',
    type: "messageCreate",
    code: "$getStatExp[$authorID;Global]"
});