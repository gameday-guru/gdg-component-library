import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class GamedayGuruRadar implements DispositionalCachelike<undefined, ontology.RadarTablelike> {
    disposition?: CacheDisposition | undefined;
    get(path: undefined): Promise<ontology.RadarTablelike | undefined>;
    set(path: undefined, value: ontology.RadarTablelike): Promise<ontology.RadarTablelike | undefined>;
}
export declare const RadarMultiCache: MultiCache<undefined, ontology.RadarTablelike>;
