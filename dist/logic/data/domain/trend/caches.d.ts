import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class GamedayGuruTrend implements DispositionalCachelike<undefined, ontology.TrendTablelike> {
    disposition?: CacheDisposition | undefined;
    get(path: undefined): Promise<ontology.TrendTablelike | undefined>;
    set(path: undefined, value: ontology.TrendTablelike): Promise<ontology.TrendTablelike | undefined>;
}
export declare const TrendMultiCache: MultiCache<undefined, ontology.TrendTablelike>;
