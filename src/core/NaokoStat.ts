import { StatRegion } from "../formulas/constants";
import { range } from "../utils";
import NaokoLeveling from "./NaokoLeveling";

class NaokoStat {
    static cache = new Map<string, NaokoStat>();

    public readonly id: string;
    private ext: NaokoLeveling;
    
    public constructor(id: string, ext: NaokoLeveling) {
        if (NaokoStat.cache.has(this.id))
            throw new Error(`Stat with id '${id}' already exists in cache!`);

        this.id = id;
        this.ext = ext;
        NaokoStat.cache.set(this.id, this);
    }

    static get(id: string, ext: NaokoLeveling) {
        if (this.cache.has(id)) return this.cache.get(id);
        return new NaokoStat(id, ext);
    }

    public keyStat(region: StatRegion = this.ext.region, regionId: string) {
        if (region === StatRegion.Global) regionId = 'naoko';
        return `${this.ext.prefixId}:${region}.${regionId}.${this.id}`;
    }

    async getExp(key: string = this.keyStat(StatRegion.Global, 'naoko')) {
        return await this.ext.db.get(key) || 0;
    }

    async getLevel(key: string = this.keyStat(StatRegion.Global, 'naoko')) {
        const exp = await this.getExp(key);
        return this.ext.formula.getLevelFromExp(exp, this.ext.formulaOptions);
    }

    async addExp(amount: number, key: string = this.keyStat(StatRegion.Global, 'naoko')) {
        const exp = await this.getExp(key);
        return this.ext.db.set<number>(key, exp + amount);
    }

    async addLevel(amount: number, key: string = this.keyStat(StatRegion.Global, 'naoko')) {
        const fromExp = await this.getExp(key);
        const curLv = this.ext.formula.getLevelFromExp(fromExp, this.ext.formulaOptions);
        const targetLv = curLv + amount;
        return await this.setLevel(targetLv);
    }

    async setExp(amount: number, key: string = this.keyStat(StatRegion.Global, 'naoko')) {
        return this.ext.db.set<number>(key, amount);
    }

    async setLevel(amount: number, key: string = this.keyStat(StatRegion.Global, 'naoko')) {
        const exp = this.ext.formula.getExpFromLevel(amount, this.ext.formulaOptions);
        return await this.setExp(exp, key);
    }
}

export = NaokoStat;