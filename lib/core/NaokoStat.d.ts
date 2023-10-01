import { StatRegion } from "../formulas/constants";
import NaokoLeveling from "./NaokoLeveling";
declare class NaokoStat {
    static cache: Map<string, NaokoStat>;
    readonly id: string;
    private ext;
    constructor(id: string, ext: NaokoLeveling);
    static get(id: string, ext: NaokoLeveling): NaokoStat;
    keyStat(region: StatRegion, regionId: string): string;
    getExp(key?: string): Promise<any>;
    getLevel(key?: string): Promise<number>;
    addExp(amount: number, key?: string): Promise<number>;
    addLevel(amount: number, key?: string): Promise<number>;
    setExp(amount: number, key?: string): Promise<number>;
    setLevel(amount: number, key?: string): Promise<number>;
}
export = NaokoStat;
