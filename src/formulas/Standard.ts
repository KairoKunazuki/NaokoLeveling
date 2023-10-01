interface FormulaOptions {
    constant: number;
    power: number;
}

function getLevelFromExp(exp: number, options: FormulaOptions) {
    // Level = 0.05 * sqrt(exp)
    const level = (options.constant * Math.pow(exp, 1/options.power));
    return level;
}

function getExpFromLevel(level: number, options: FormulaOptions) {
    // XP = (Level / 0.05) ^ 2
    const exp = Math.pow(level / options.constant, options.power);
    return exp;
}

export {
    getExpFromLevel,
    getLevelFromExp,
    FormulaOptions
}