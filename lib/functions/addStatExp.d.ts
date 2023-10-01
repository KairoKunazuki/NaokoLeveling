import { ArgType, NativeFunction } from "forgescript";
import { StatRegion } from "../formulas/constants";
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Number;
    required: true;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.Enum;
    required: false;
    enum: typeof StatRegion;
}, {
    name: string;
    description: string;
    rest: false;
    type: ArgType.String;
    required: false;
    enum: typeof StatRegion;
}], true>;
export default _default;
