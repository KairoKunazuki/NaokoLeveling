"use strict";
const constants_1 = require("../formulas/constants");
class NaokoStat {
    constructor(id, ext) {
        if (NaokoStat.cache.has(this.id))
            throw new Error(`Stat with id '${id}' already exists in cache!`);
        this.id = id;
        this.ext = ext;
        NaokoStat.cache.set(this.id, this);
    }
    static get(id, ext) {
        if (this.cache.has(id))
            return this.cache.get(id);
        return new NaokoStat(id, ext);
    }
    keyStat(region = this.ext.region, regionId) {
        if (region === constants_1.StatRegion.Global)
            regionId = 'naoko';
        return `${this.ext.prefixId}:${region}.${regionId}.${this.id}`;
    }
    async getExp(key = this.keyStat(constants_1.StatRegion.Global, 'naoko')) {
        return await this.ext.db.get(key) || 0;
    }
    async getLevel(key = this.keyStat(constants_1.StatRegion.Global, 'naoko')) {
        const exp = await this.getExp(key);
        return this.ext.formula.getLevelFromExp(exp, this.ext.formulaOptions);
    }
    async addExp(amount, key = this.keyStat(constants_1.StatRegion.Global, 'naoko')) {
        const exp = await this.getExp(key);
        return this.ext.db.set(key, exp + amount);
    }
    async addLevel(amount, key = this.keyStat(constants_1.StatRegion.Global, 'naoko')) {
        const fromExp = await this.getExp(key);
        const curLv = this.ext.formula.getLevelFromExp(fromExp, this.ext.formulaOptions);
        const targetLv = curLv + amount;
        return await this.setLevel(targetLv);
    }
    async setExp(amount, key = this.keyStat(constants_1.StatRegion.Global, 'naoko')) {
        return this.ext.db.set(key, amount);
    }
    async setLevel(amount, key = this.keyStat(constants_1.StatRegion.Global, 'naoko')) {
        const exp = this.ext.formula.getExpFromLevel(amount, this.ext.formulaOptions);
        return await this.setExp(exp, key);
    }
}
NaokoStat.cache = new Map();
module.exports = NaokoStat;
