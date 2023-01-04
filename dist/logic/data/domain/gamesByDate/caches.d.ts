import { CacheDisposition, DispositionalCachelike } from "../../cache/cache";
import { ontology } from "../../../../util";
import { MultiCache } from "../../../data/cache/multicache";
export declare class SportsDataioGamesByDate implements DispositionalCachelike<Date, ontology.GameByDatelike[]> {
    disposition?: CacheDisposition | undefined;
    get(path: Date): Promise<ontology.GameByDatelike[] | undefined>;
    set(path: Date, value: ontology.GameByDatelike[]): Promise<ontology.GameByDatelike[] | undefined>;
}
export declare const GamesByDateMultiCache: MultiCache<Date, ontology.GameByDatelike[]>;
