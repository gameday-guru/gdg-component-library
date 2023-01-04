import { Processorlike } from "../processor";
export declare const imemoize: <K extends any[], V>(func: (...args: K) => V) => (...args: K) => V;
export declare const useOnceProcessor: () => Processorlike;
