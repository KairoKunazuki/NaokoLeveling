interface FormulaOptions {
    constant: number;
    power: number;
}
declare function getLevelFromExp(exp: number, options: FormulaOptions): number;
declare function getExpFromLevel(level: number, options: FormulaOptions): number;
export { getExpFromLevel, getLevelFromExp, FormulaOptions };
