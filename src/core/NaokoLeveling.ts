import { Context, ForgeClient, ForgeExtension, FunctionManager } from "forgescript";
import { MemoryDriver, IDriver, QuickDB } from "quick.db";
import { IFormulaMethods, IFormulaOptions, Standard } from "../formulas";
import path from "path";
import { StatRegion } from "../formulas/constants";
import NaokoStat from "./NaokoStat";

class NaokoLeveling extends ForgeExtension {
    name: string = 'NaokoLeveling';
    description: string = 'A standard leveling system for community use';
    version: string = 'v0.0.1';

    public db: QuickDB;
    public formula: IFormulaMethods;
    public formulaOptions: IFormulaOptions = {
        constant: 0.3,
        power: 2
    };
    public prefixId = 'naokolv';
    public region = StatRegion.Global;
    public constructor(driver: IDriver = new MemoryDriver(), formula: IFormulaMethods = Standard, region: StatRegion = StatRegion.Global) {
        super();

        this.db = new QuickDB({ driver: driver });
        this.formula = formula;
        this.region = region;
    }

    public init(client: ForgeClient): void {
        client['nlv'] = this;

        FunctionManager.load(path.join(__dirname, '..', 'functions'));
    }

    public checkRegion(ctx: Context, region: StatRegion, regionId: string) {
        switch (region) {
            case StatRegion.Global: return true;
            case StatRegion.Guild: return ctx.client.guilds.cache.has(regionId);
            case StatRegion.TextChannel: return ctx.guild.channels.cache.has(regionId);
            case StatRegion.ThreadChannel: return ctx.guild.channels.cache.get(regionId)!.isThread();
            case StatRegion.Custom: return true;
            default: return false;
        }
    }
}

export = NaokoLeveling;