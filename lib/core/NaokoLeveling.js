"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const forgescript_1 = require("forgescript");
const quick_db_1 = require("quick.db");
const formulas_1 = require("../formulas");
const path_1 = __importDefault(require("path"));
const constants_1 = require("../formulas/constants");
class NaokoLeveling extends forgescript_1.ForgeExtension {
    constructor(driver = new quick_db_1.MemoryDriver(), formula = formulas_1.Standard, region = constants_1.StatRegion.Global) {
        super();
        this.name = 'NaokoLeveling';
        this.description = 'A standard leveling system for community use';
        this.version = 'v0.0.1';
        this.formulaOptions = {
            constant: 0.3,
            power: 2
        };
        this.prefixId = 'naokolv';
        this.region = constants_1.StatRegion.Global;
        this.db = new quick_db_1.QuickDB({ driver: driver });
        this.formula = formula;
        this.region = region;
    }
    init(client) {
        client['nlv'] = this;
        forgescript_1.FunctionManager.load(path_1.default.join(__dirname, '..', 'functions'));
    }
    checkRegion(ctx, region, regionId) {
        switch (region) {
            case constants_1.StatRegion.Global: return true;
            case constants_1.StatRegion.Guild: return ctx.client.guilds.cache.has(regionId);
            case constants_1.StatRegion.TextChannel: return ctx.guild.channels.cache.has(regionId);
            case constants_1.StatRegion.ThreadChannel: return ctx.guild.channels.cache.get(regionId).isThread();
            case constants_1.StatRegion.Custom: return true;
            default: return false;
        }
    }
}
module.exports = NaokoLeveling;
