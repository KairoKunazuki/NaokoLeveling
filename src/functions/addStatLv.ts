import { ArgType, NativeFunction, Return } from "forgescript";
import NaokoStat from "../core/NaokoStat";
import { StatRegion } from "../formulas/constants";

export default new NativeFunction({
    name: '$addStatLv',
    description: 'Add an amount of level to stat info',
    version: '0.0.1',
    brackets: true,
    unwrap: true,
    args: [
        {
            name: 'id',
            description: 'The target to find stat info from the database',
            rest: false,
            type: ArgType.String,
            required: true
        },
        {
            name: 'levelAmount',
            description: 'The amount of level to be added',
            rest: false,
            type: ArgType.Number,
            required: true
        },
        {
            name: 'region',
            description: 'The region of object stat',
            rest: false,
            type: ArgType.Enum,
            required: false,
            enum: StatRegion
        },
        {
            name: 'regionId',
            description: 'The key id of provided region',
            rest: false,
            type: ArgType.String,
            required: false,
            enum: StatRegion
        }
    ],
    async execute(ctx, [target, amount, region, regionId]) {
        const naoko = ctx.client['nlv']
        const stat = NaokoStat.get(target, naoko);

        if (! region) region = StatRegion.Global;
        if (! naoko.checkRegion(ctx, region, regionId)) {
            ctx.container.content = `regid(${regionId}) is not valid of Region '${region}'!`;
            return Return.stop();
        }

        await stat.addLevel(amount, stat.keyStat(region, regionId));
        return Return.success(await stat.getLevel(stat.keyStat(region, regionId)));
    }
})