"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLevelFromExp = exports.getExpFromLevel = void 0;
function getLevelFromExp(exp, options) {
    // Level = 0.05 * sqrt(exp)
    const level = (options.constant * Math.pow(exp, 1 / options.power));
    return level;
}
exports.getLevelFromExp = getLevelFromExp;
function getExpFromLevel(level, options) {
    // XP = (Level / 0.05) ^ 2
    const exp = Math.pow(level / options.constant, options.power);
    return exp;
}
exports.getExpFromLevel = getExpFromLevel;
