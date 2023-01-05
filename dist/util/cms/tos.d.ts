import { Toslike } from "../ontology";
import { TosTablelike } from "../ontology";
export declare const getToses: () => Promise<Toslike[]>;
export declare const getTos: (id: string) => Promise<Toslike>;
export declare const getTosTable: () => Promise<TosTablelike>;
