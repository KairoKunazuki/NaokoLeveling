import * as Standard from './Standard';
type IFormulaOptions = Partial<Standard.FormulaOptions>;
interface IFormulaMethods {
    getExpFromLevel: (level: number, options: IFormulaOptions) => number;
    getLevelFromExp: (exp: number, options: IFormulaOptions) => number;
}
export { IFormulaOptions, IFormulaMethods, Standard };
