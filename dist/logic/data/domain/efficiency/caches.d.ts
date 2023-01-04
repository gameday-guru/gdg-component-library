import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class GamedayGuruEfficiency implements DispositionalCachelike<undefined, ontology.EfficiencyTablelike> {
    disposition?: CacheDisposition | undefined;
    get(path: undefined): Promise<ontology.EfficiencyTablelike | undefined>;
    set(path: undefined, value: ontology.EfficiencyTablelike): Promise<ontology.EfficiencyTablelike | undefined>;
}
export declare const EfficiencyMultiCache: MultiCache<undefined, ontology.EfficiencyTablelike>;
