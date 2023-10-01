"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("forgescript");
const NaokoStat_1 = __importDefault(require("../core/NaokoStat"));
const constants_1 = require("../formulas/constants");
exports.default = new forgescript_1.NativeFunction({
    name: '$setStatExp',
    description: 'Set an amount of exp to stat info',
    version: '0.0.1',
    brackets: true,
    unwrap: true,
    args: [
        {
            name: 'id',
            description: 'The target to find stat info from the database',
            rest: false,
            type: forgescript_1.ArgType.String,
            required: true
        },
        {
            name: 'expAmount',
            description: 'The amount of exp to be set',
            rest: false,
            type: forgescript_1.ArgType.Number,
            required: true
        },
        {
            name: 'region',
            description: 'The region of object stat',
            rest: false,
            type: forgescript_1.ArgType.Enum,
            required: false,
            enum: constants_1.StatRegion
        },
        {
            name: 'regionId',
            description: 'The key id of provided region',
            rest: false,
            type: forgescript_1.ArgType.String,
            required: false,
            enum: constants_1.StatRegion
        }
    ],
    async execute(ctx, [target, amount, region, regionId]) {
        const naoko = ctx.client['nlv'];
        const stat = NaokoStat_1.default.get(target, naoko);
        if (!region)
            region = constants_1.StatRegion.Global;
        if (!naoko.checkRegion(ctx, region, regionId)) {
            ctx.container.content = `regid(${regionId}) is not valid of Region '${region}'!`;
            return forgescript_1.Return.stop();
        }
        await stat.setExp(amount, stat.keyStat(region, regionId));
        return forgescript_1.Return.success(amount);
    }
});
