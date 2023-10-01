const { BaseCommand } = require("forgescript");

module.exports = new BaseCommand({
    name: 'getlv',
    type: "messageCreate",
    code: "$getStatLv[$authorID;Global]"
});