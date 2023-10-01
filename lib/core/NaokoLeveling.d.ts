import { Context, ForgeClient, ForgeExtension } from "forgescript";
import { IDriver, QuickDB } from "quick.db";
import { IFormulaMethods, IFormulaOptions } from "../formulas";
import { StatRegion } from "../formulas/constants";
declare class NaokoLeveling extends ForgeExtension {
    name: string;
    description: string;
    version: string;
    db: QuickDB;
    formula: IFormulaMethods;
    formulaOptions: IFormulaOptions;
    prefixId: string;
    region: StatRegion;
    constructor(driver?: IDriver, formula?: IFormulaMethods, region?: StatRegion);
    init(client: ForgeClient): void;
    checkRegion(ctx: Context, region: StatRegion, regionId: string): boolean;
}
export = NaokoLeveling;
